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
        className={`h-8 w-auto shrink-0 object-contain sm:h-9 md:h-10 ${iconClassName}`}
        sizes="(max-width: 768px) 32px, 40px"
      />
      {showName && (
        <Image
          src={QvrixName}
          alt="Qvrix"
          width={180}
          height={56}
          priority
          className={`h-4 w-auto max-w-[96px] object-contain sm:h-5 sm:max-w-[112px] md:h-6 md:max-w-[140px] ${nameClassName}`}
          sizes="(max-width: 768px) 96px, 140px"
        />
      )}
    </div>
  )
}
