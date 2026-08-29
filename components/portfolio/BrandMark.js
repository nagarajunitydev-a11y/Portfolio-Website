'use client'
import Image from 'next/image'
import QvrixLogo from '@/app/assets/QvrixLogo.png'
import QvrixName from '@/app/assets/QvrixName.png'

export default function BrandMark({
  className = '',
  iconClassName = '',
  nameClassName = '',
  showName = true,
  compact = false,
}) {
  return (
    <div className={`flex items-center ${compact ? 'gap-2' : 'gap-2.5'} ${className}`} aria-label="Qvrix">
      <Image
        src={QvrixLogo}
        alt="Qvrix logo"
        width={56}
        height={56}
        priority
        className={`h-10 w-auto shrink-0 object-contain sm:h-12 md:h-14 ${iconClassName}`}
        sizes="(max-width: 768px) 40px, 56px"
      />
      {showName && (
        <Image
          src={QvrixName}
          alt="Qvrix"
          width={180}
          height={56}
          priority
          className={`h-6 w-auto max-w-[150px] object-contain sm:h-7 sm:max-w-[180px] md:h-8 md:max-w-[210px] ${nameClassName}`}
          sizes="(max-width: 768px) 150px, 210px"
        />
      )}
    </div>
  )
}
