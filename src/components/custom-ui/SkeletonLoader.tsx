import { CSSProperties } from 'react'

import { cn } from '../../utils/cn'

interface ISkeletonLoader {
	count?: number
	style?: CSSProperties
	className?: string
}

export function SkeletonLoader({
	count = 1,
	style,
	className
}: ISkeletonLoader) {
	return (
		<>
			{Array.from({ length: count }, (_, index) => (
				<div
					key={index}
					className={cn(
						'mb-[0.65rem] h-10 animate-pulse rounded-lg bg-neutral-900 last:mb-0',
						className
					)}
					style={style}
				></div>
			))}
		</>
	)
}
