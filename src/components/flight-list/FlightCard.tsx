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
				'group animate-fadeIn relative w-full rounded-2xl p-0.5 transition-colors ease-in',
				isActive
					? 'bg-gradient-to-r from-rose-500 to-orange-300'
					: 'bg-transparent'
			)}
		>
			<FlightCardActions flghtId={flight.id} />
			<button
				onClick={() => {
					setSearchParams({
						[QUERY_PARAM_FLIGHT]: flight.id
					})
				}}
				className='block w-full rounded-2xl bg-neutral-900 p-6'
			>
				<div className='mb-7 flex items-center justify-between gap-2'>
					<div className='flex items-center gap-2'>
						<img
							src={flight.logo}
							alt={flight.airline.name}
							width={40}
							className='rounded-full bg-white'
						/>
						<span>{flight.id}</span>
					</div>
					<div>
						<span className='rounded-2xl bg-neutral-800 px-2 py-0.5'>
							{flight.aircraftReg}
						</span>
					</div>
				</div>

				<div className='grid grid-cols-[1fr_5fr_1fr] items-end gap-3'>
					<div className='space-y-1 text-left'>
						<div> {flight.from.city}</div>
						<div className='text-3xl font-semibold'> {flight.from.code}</div>
					</div>
					<div className='mb-4'>
						<ProgressBar percent={flight.progress} />
					</div>

					<div>
						<div>
							<div> {flight.to.city}</div>
							<div className='text-3xl font-semibold'> {flight.to.code}</div>
						</div>
					</div>
				</div>
			</button>
		</div>
	)
}
