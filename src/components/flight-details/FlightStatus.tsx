import { ProgressBar } from '../custom-ui/ProgressBar'

interface Props {
	progress: number
}

export function FlightStatus({ progress }: Props) {
	return (
		<div className='bg-muted-foreground text-card-foreground mx-4 mt-1 px-4 py-2'>
			<div className='my-3'>
				<ProgressBar percent={progress} />
			</div>

			<div className='flex justify-between text-sm opacity-50'>
				<div>
					<span>2 715 km</span>
					<span className='mx-2'>•</span>
					<span>3h 1m</span>
				</div>
				<div>
					<span>882 km</span>
					<span className='mx-2'>•</span>
					<span>59 min</span>
				</div>
			</div>
		</div>
	)
}
