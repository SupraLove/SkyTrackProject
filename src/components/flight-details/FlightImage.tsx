import { IFlight } from '../../types/flight.types'

export function FlightImage({ flight }: { flight: IFlight }) {
	return (
		<div
			className='xs:pt-25 xs:h-65 relative h-60 w-full sm:h-80'
			style={{
				background: `linear-gradient(to bottom, ${flight?.colorGradient[0]}, ${flight?.colorGradient[1]})`
			}}
		>
			<img
				src={flight?.airplane.image}
				alt={flight?.airplane.name}
				className='absolute bottom-0 left-1/2 h-auto max-w-full -translate-x-1/2'
			/>
		</div>
	)
}
