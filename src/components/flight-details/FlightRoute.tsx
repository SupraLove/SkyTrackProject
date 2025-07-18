import { Plane } from 'lucide-react'

import { IFlight } from '../../types/flight.types'

export function FlightRoute({ flight }: { flight: IFlight }) {
	return (
		<div className='relative mx-4 grid grid-cols-2 gap-1 pt-4'>
			<div className='px-element py-element bg-muted-foreground text-card-foreground rounded-tl-lg py-3 text-center'>
				<h3 className='texttext-card-foreground mb-1.5 text-4xl font-semibold opacity-80'>
					{flight.from.code}
				</h3>
				<p className='text-card-foreground mb-1 text-lg font-medium'>
					{flight.from.city}
				</p>
				<p className='text-card-foreground text-sm font-medium opacity-80'>
					{flight.from.timeZone}
				</p>
			</div>

			<div className='bg-muted absolute top-1/2 left-1/2 mb-2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full'>
				<Plane className='text-amber-400' size={22} />
			</div>

			<div className='px-element py-element bg-muted-foreground text-card-foreground rounded-tr-lg py-3 text-center'>
				<h3 className='texttext-card-foreground mb-1.5 text-4xl font-semibold opacity-80'>
					{flight.to.code}
				</h3>
				<p className='text-card-foreground mb-1 text-lg font-medium'>
					{flight.to.city}
				</p>
				<p className='text-card-foreground text-sm font-medium opacity-80'>
					{flight.to.timeZone}
				</p>
			</div>
		</div>
	)
}
