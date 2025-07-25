import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

import { QUERY_PARAM_FLIGHT } from '../components/flight-list/flights.constants'
import { FLIGHTS_MOCK } from '../components/flight-list/flights.mock'

export const useCurrentFlight = () => {
	const [searchParams] = useSearchParams()
	const selectedFlight = searchParams.get(QUERY_PARAM_FLIGHT)
	const flight = useMemo(
		() => FLIGHTS_MOCK.find(flight => flight.id === selectedFlight),
		[selectedFlight]
	)
	return { flight }
}
