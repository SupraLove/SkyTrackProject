import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

import { QUERY_PARAM_FLIGHT } from '../flight-list/flights.constants'
import { FLIGHTS_MOCK } from '../flight-list/flights.mock'

import { FlightActions } from './FlightActions'
import { FlightHeaders } from './FlightHeaders'
import { FlightImage } from './FlightImage'
import { FlightInformation } from './FlightInformation'
import { FlightRoute } from './FlightRoute'
import { FlightSchedule } from './FlightSchedule'
import { FlightStatus } from './FlightStatus'

export function FlightDetails() {
	const [searchParams] = useSearchParams()
	const selectedFlight = searchParams.get(QUERY_PARAM_FLIGHT)
	const flight = useMemo(
		() => FLIGHTS_MOCK.find(flight => flight.id === selectedFlight),
		[selectedFlight]
	)

	if (!flight) return null

	return (
		<aside
			className='fixed top-15 right-7 w-sm overflow-hidden rounded-2xl bg-[#101010]'
			// style={{ height: "calc(100% - 56px)" }}
		>
			<FlightHeaders flight={flight} />
			<FlightImage flight={flight} />

			<FlightRoute flight={flight} />
			<FlightStatus progress={flight.progress} />
			<FlightSchedule />

			<FlightInformation flight={flight} />

			<FlightActions
				onRoute={() => {}}
				onFollow={() => {}}
				onShare={() => {}}
				onMore={() => {}}
			/>
		</aside>
	)
}
