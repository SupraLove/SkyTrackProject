import { X } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'

import { IFlight } from '../../types/flight.types'
import { QUERY_PARAM_FLIGHT } from '../flight-list/flights.constants'

export function FlightHeaders({ flight }: { flight: IFlight }) {
	const [searchParams, setSearchParams] = useSearchParams()

	return (
		<div className='bg-card absolute top-3 left-1/2 z-10 flex h-max w-11/12 -translate-x-1/2 items-center justify-between rounded-2xl px-6 py-4'>
			<div>
				<h2 className='text-xl font-medium text-amber-400'>{flight?.id}</h2>
				<p className='text-card-foreground text-sm'>{flight?.airline.name}</p>
			</div>
			<button
				onClick={() => {
					searchParams.delete(QUERY_PARAM_FLIGHT)
					setSearchParams(searchParams)
				}}
				className='text-card-foreground rounded-full bg-gray-400 p-1 transition-colors hover:bg-red-400 hover:text-white'
			>
				<X className='h-5 w-5 text-white' />
			</button>
		</div>
	)
}
