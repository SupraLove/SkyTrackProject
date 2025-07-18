import { IFlight } from '../../types/flight.types'

export function FlightInformation({ flight }: { flight: IFlight }) {
	return (
		<div className='mx-4 my-3'>
			<div className='bg-muted-foreground text-card-foreground mb-1 rounded-tl-2xl rounded-tr-2xl py-1 pl-4 text-sm font-medium'>
				Flight Information
			</div>
			<div className='mb-1 grid grid-cols-2 gap-1'>
				<div className='bg-muted-foreground text-card-foreground flex items-center justify-between px-4 py-3'>
					<p className='opacity-50'>{flight.airplane.name}</p>
				</div>
				<div className='bg-muted-foreground text-card-foreground flex items-center justify-between px-4 py-3'>
					<div className='flex items-center gap-2'>
						<img
							src={`https://flagcdn.com/w40/${flight?.from.countryCode.toLowerCase()}.png`}
							alt={flight?.airline.country}
							width={24}
							height={24}
							className='inline-block opacity-50'
						/>
						<span>{flight.airline.country}</span>
					</div>
				</div>
			</div>
			<div className='mb-1 grid grid-cols-2 gap-1'>
				<div className='bg-muted-foreground text-card-foreground flex items-center justify-between rounded-bl-xl px-4 py-2'>
					<p className='opacity-50'>Speed</p>
					<p className='text-sm'>870 km/h</p>
				</div>
				<div className='bg-muted-foreground text-card-foreground flex items-center justify-between rounded-br-xl px-4 py-2'>
					<p className='opacity-50'>Altitude</p>
					<p className='text-sm'>11 300m</p>
				</div>
			</div>
		</div>
	)
}
