import { AnimatePresence, m } from 'framer-motion'
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
		<AnimatePresence mode='wait'>
			<m.aside
				key={flight.id}
				initial={{ x: '100%', opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				exit={{ x: '100%', opacity: 0 }}
				transition={{
					type: 'tween',
					duration: 0.4,
					ease: [0.3, 0.4, 0.45, 0.95]
				}}
				className='xs:w-full xs:inset-0 xs:rounded-none bg-card fixed top-15 right-7 w-sm overflow-hidden rounded-2xl sm:inset-[0.6rem] sm:top-28 sm:w-[96%] md:top-32 md:w-xs'
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
			</m.aside>
		</AnimatePresence>
	)
}
