import { useEffect, useMemo, useState } from 'react'

import { SkeletonLoader } from '../custom-ui/SkeletonLoader'
import { Filters } from '../filters/Filters'

import { FlightCard } from './FlightCard'
import { FLIGHTS_MOCK } from './flights.mock'

export function FlightList() {
	const [fromCountry, setFromCountry] = useState<string | null>(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false)
		}, 2000)

		return () => {
			clearTimeout(timer)
		}
	})

	const filteredFlights = useMemo(() => {
		if (!fromCountry) return FLIGHTS_MOCK
		return FLIGHTS_MOCK.filter(flight => flight.from.country === fromCountry)
	}, [fromCountry])

	return (
		<div className='xs:w-full mt-8 w-sm space-y-7'>
			<Filters fromCountry={fromCountry} setFromCountry={setFromCountry} />
			<div>
				{isLoading ? (
					<SkeletonLoader count={5} className='h-40' />
				) : (
					!!filteredFlights.length &&
					filteredFlights.map(flight => (
						<FlightCard key={flight.id} flight={flight} />
					))
				)}
			</div>
		</div>
	)
}
