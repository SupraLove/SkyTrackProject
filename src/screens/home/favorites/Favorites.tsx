import { useMemo } from 'react'

import { Heading } from '../../../components/custom-ui/Heading'
import { SubHeading } from '../../../components/custom-ui/SubHeading'
import { FlightCard } from '../../../components/flight-list/FlightCard'
import { FLIGHTS_MOCK } from '../../../components/flight-list/flights.mock'
import { useAppSelector } from '../../../hooks/useAppSelector'

export function Favorites() {
	const favorites = useAppSelector(state => state.favorites)

	const flights = useMemo(() => {
		return FLIGHTS_MOCK.filter(flight => favorites.includes(flight.id))
	}, [favorites])

	return (
		<div className='mx-auto w-4/12'>
			<Heading>Favorites</Heading>
			<SubHeading>
				You can do it You can do it You can do it You can do it You can do it
				You can do it You can do it You can do it You can do it You can do it
			</SubHeading>
			<div className='grid grid-cols-2 gap-4'>
				{flights.map(flight => (
					<FlightCard key={flight.id} flight={flight} />
				))}
			</div>
		</div>
	)
}
