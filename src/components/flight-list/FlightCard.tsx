import { useSearchParams } from 'react-router-dom'

import { IFlight } from '../../types/flight.types'
import { cn } from '../../utils/cn'
import { ProgressBar } from '../custom-ui/ProgressBar'

import { FlightCardActions } from './actions/FlightCardActions'
import { QUERY_PARAM_FLIGHT } from './flights.constants'

interface IFlightProps {
	flight: IFlight
}

export function FlightCard({ flight }: IFlightProps) {
	const [searchParams, setSearchParams] = useSearchParams()
	const selectedFlight = searchParams.get(QUERY_PARAM_FLIGHT)
	const isActive = selectedFlight === flight.id
	return (
		<div
			className={cn(
				'group animate-fadeIn relative mb-3 w-full rounded-2xl p-0.5 shadow-xl transition-colors ease-in',
				isActive ? 'bg-gradient-to-r from-rose-500 to-orange-300' : 'bg-card'
			)}
		>
			<FlightCardActions flghtId={flight.id} />
			<button
				onClick={() => {
					setSearchParams({
						[QUERY_PARAM_FLIGHT]: flight.id
					})
				}}
				className='bg-card block w-full rounded-2xl p-5'
			>
				<div className='mb-7 flex items-center justify-between gap-2'>
					<div className='flex items-center gap-2'>
						<img
							src={flight.logo}
							alt={flight.airline.name}
							width={40}
							className='rounded-full bg-white'
						/>
						<span className='text-accent-foreground'>{flight.id}</span>
					</div>
					<div>
						<span className='bg-muted-foreground text-accent-foreground rounded-2xl px-2 py-0.5'>
							{flight.aircraftReg}
						</span>
					</div>
				</div>

				<div className='grid grid-cols-[1fr_5fr_1fr] items-end gap-3'>
					<div className='space-y-1 text-left'>
						<div className='text-accent-foreground'> {flight.from.city}</div>
						<div className='text-accent-foreground text-3xl font-semibold'>
							{' '}
							{flight.from.code}
						</div>
					</div>
					<div className='mb-4'>
						<ProgressBar percent={flight.progress} />
					</div>

					<div>
						<div>
							<div className='text-accent-foreground'> {flight.to.city}</div>
							<div className='text-accent-foreground text-3xl font-semibold'>
								{' '}
								{flight.to.code}
							</div>
						</div>
					</div>
				</div>
			</button>
		</div>
	)
}
