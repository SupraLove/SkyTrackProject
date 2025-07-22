import { useEffect, useMemo, useState } from 'react'

import { SkeletonLoader } from '../custom-ui/SkeletonLoader'
import { Filters } from '../filters/Filters'

import { FlightCard } from './FlightCard'
import { FLIGHTS_MOCK } from './flights.mock'

export function FlightList() {
	const [fromCountry, setFromCountry] = useState<string | null>(null)
	const [isLoading, setIsLoading] = useState(true)
	const [currentAirline, setCurrentAirline] = useState<string | null>(null)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false)
		}, 2000)

		return () => {
			clearTimeout(timer)
		}
	})

	const filteredFlights = useMemo(() => {
		return FLIGHTS_MOCK.filter(flight => {
			const byCountry = !fromCountry || flight.from.country === fromCountry
			const byAirline =
				!currentAirline || flight.airline.country === currentAirline
			return byCountry && byAirline
		})
	}, [fromCountry, currentAirline])

	return (
		<div className='xs:w-full relative z-10 mt-8 w-sm space-y-7 sm:w-full md:w-xs'>
			<Filters
				fromCountry={fromCountry}
				setFromCountry={setFromCountry}
				currentAirline={currentAirline}
				setCurrentAirline={setCurrentAirline}
			/>
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
