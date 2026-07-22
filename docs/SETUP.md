# Setup Guide

## Prerequisites

- Node.js and Yarn
- A MongoDB instance or connection string
- Basic access to the project repository

## Installation Steps

```bash
cd E:\Portfolio\Portfolio-Website
yarn install
```

## Environment Variables

Create a local environment file before running the API features.

```env
MONGO_URL=mongodb://127.0.0.1:27017
DB_NAME=portfolio
CORS_ORIGINS=http://localhost:3000
```

### Variable Reference

| Variable | Required | Purpose |
| --- | --- | --- |
| MONGO_URL | Yes for contact API | Connects the server route to MongoDB |
| DB_NAME | No | Overrides the default database name |
| CORS_ORIGINS | No | Sets the CORS response header |

## Build Commands

```bash
yarn dev
yarn build
yarn start
```

## Production Deployment

The project is configured with Next.js standalone output and can be deployed to hosts that support Node.js applications.

Recommended checks before deployment:
- Set MONGO_URL in the deployment environment
- Review CORS_ORIGINS for the deployment domain
- Verify all public images and remote assets are reachable
- Confirm the contact API endpoint is protected if needed

> Needs Manual Review: Deployment target, CI/CD pipeline, and environment management strategy are not defined in the repository.

## Related Documentation

- [README](README.md)
- [API](API.md)
- [Troubleshooting](TROUBLESHOOTING.md)
