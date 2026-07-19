import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'
import { v4 as uuidv4 } from 'uuid'

let cached = global._mongo
if (!cached) cached = global._mongo = { client: null, db: null }

async function getDb() {
  if (cached.db) return cached.db
  const uri = process.env.MONGO_URL
  if (!uri) throw new Error('MONGO_URL not set')
  const client = new MongoClient(uri)
  await client.connect()
  const dbName = process.env.DB_NAME || 'portfolio'
  cached.client = client
  cached.db = client.db(dbName)
  return cached.db
}

const json = (data, init = 200) => NextResponse.json(data, typeof init === 'number' ? { status: init } : init)

export async function GET(request, { params }) {
  const path = (params?.path || []).join('/')
  try {
    if (path === '' || path === 'health') {
      return json({ status: 'ok', service: 'portfolio-api', time: new Date().toISOString() })
    }
    if (path === 'contact/messages') {
      const db = await getDb()
      const items = await db.collection('contact_messages').find({}, { projection: { _id: 0 } }).sort({ createdAt: -1 }).limit(100).toArray()
      return json({ items })
    }
    return json({ error: 'Not found', path }, 404)
  } catch (e) {
    return json({ error: 'Server error', message: e.message }, 500)
  }
}

export async function POST(request, { params }) {
  const path = (params?.path || []).join('/')
  try {
    const body = await request.json().catch(() => ({}))
    if (path === 'contact') {
      const { name, email, subject, message } = body || {}
      if (!name || !email || !message) {
        return json({ error: 'name, email and message are required' }, 400)
      }
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        return json({ error: 'Invalid email' }, 400)
      }
      const db = await getDb()
      const doc = {
        id: uuidv4(),
        name: String(name).slice(0, 200),
        email: String(email).slice(0, 200),
        subject: String(subject || '').slice(0, 300),
        message: String(message).slice(0, 5000),
        createdAt: new Date().toISOString(),
      }
      await db.collection('contact_messages').insertOne(doc)
      return json({ ok: true, id: doc.id })
    }
    if (path === 'newsletter') {
      const { email } = body || {}
      if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        return json({ error: 'Invalid email' }, 400)
      }
      const db = await getDb()
      await db.collection('newsletter').updateOne(
        { email },
        { $set: { email, createdAt: new Date().toISOString(), id: uuidv4() } },
        { upsert: true }
      )
      return json({ ok: true })
    }
    return json({ error: 'Not found', path }, 404)
  } catch (e) {
    return json({ error: 'Server error', message: e.message }, 500)
  }
}
