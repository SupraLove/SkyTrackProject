import { useMemo, useState } from 'react'

import { Filters } from '../filters/Filters'

import { FlightCard } from './FlightCard'
import { FLIGHTS_MOCK } from './flights.mock'

export function FlightList() {
	const [fromCountry, setFromCountry] = useState<string | null>(null)

	const filteredFlights = useMemo(() => {
		if (!fromCountry) return FLIGHTS_MOCK
		return FLIGHTS_MOCK.filter(flight => flight.from.country === fromCountry)
	}, [fromCountry])

	return (
		<div className='m-8 w-sm gap-3 space-y-4'>
			<Filters fromCountry={fromCountry} setFromCountry={setFromCountry} />
			<div>
				{filteredFlights.map(flight => (
					<FlightCard key={flight.id} flight={flight} />
				))}
			</div>
		</div>
	)
}
