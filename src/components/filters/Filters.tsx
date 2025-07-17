import { FLIGHTS_MOCK } from '../flight-list/flights.mock'

import { FilterSearchSelect } from './FilterSearchSelect'

const fromCountries = [
	...new Set(FLIGHTS_MOCK.map(flight => flight.from.country))
]

const airlines = [
	...new Set(FLIGHTS_MOCK.map(flight => flight.airline.country))
]

interface Props {
	fromCountry: string | null
	setFromCountry: (country: string | null) => void

	currentAirline: string | null
	setCurrentAirline: (country: string | null) => void
}

export function Filters({
	fromCountry,
	setFromCountry,
	currentAirline,
	setCurrentAirline
}: Props) {
	return (
		<div className='flex flex-col gap-1.5'>
			<div className='rounded-xl bg-neutral-800'>
				<FilterSearchSelect
					data={fromCountries}
					entityName='country'
					value={fromCountry}
					onChange={setFromCountry}
				/>
			</div>
			<div className='rounded-xl bg-neutral-800'>
				<FilterSearchSelect
					data={airlines}
					entityName='airline'
					value={currentAirline}
					onChange={setCurrentAirline}
				/>
			</div>
		</div>
	)
}
