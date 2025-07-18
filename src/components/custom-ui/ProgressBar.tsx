import { Plane } from 'lucide-react'

interface Props {
	percent: number
}

export function ProgressBar({ percent }: Props) {
	return (
		<div className='h-1 w-full rounded-full bg-gray-600 dark:bg-neutral-700'>
			<div
				className='relative h-1 rounded-full bg-gradient-to-r from-rose-500 to-orange-300 opacity-95 transition-all duration-500 ease-in-out'
				style={{ width: `${percent}%` }}
			>
				<Plane
					fill='orange'
					strokeWidth={0}
					className='absolute top-1/2 right-0 -translate-y-1/2 rotate-45'
				/>
			</div>
		</div>
	)
}
