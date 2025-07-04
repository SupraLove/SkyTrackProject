import { FLIGHTS_MOCK } from '../flight-list/flights.mock'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '../ui/select'

const fromCountries = [
	...new Set(FLIGHTS_MOCK.map(flight => flight.from.country))
]

interface Props {
	fromCountry: string | null
	setFromCountry: (country: string | null) => void
}

export function Filters({ fromCountry, setFromCountry }: Props) {
	return (
		<div className='rounded-xl bg-neutral-800'>
			<Select
				onValueChange={value => setFromCountry(value === 'all' ? null : value)}
				defaultValue={fromCountry || undefined}
			>
				<SelectTrigger className='w-full'>
					<SelectValue placeholder='Выбрать' />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value='all'>All</SelectItem>
					{fromCountries.map(country => (
						<SelectItem key={country} value={country}>
							{country}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	)
}
