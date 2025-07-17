import { Plane } from 'lucide-react'

import { IFlight } from '../../types/flight.types'

export function FlightRoute({ flight }: { flight: IFlight }) {
	return (
		<div className='relative mx-4 grid grid-cols-2 gap-1 pt-4'>
			<div className='px-element py-element rounded-tl-lg bg-neutral-800 py-3 text-center'>
				<h3 className='mb-1.5 text-4xl font-semibold text-white'>
					{flight.from.code}
				</h3>
				<p className='mb-1 text-lg font-medium text-neutral-200'>
					{flight.from.city}
				</p>
				<p className='text-sm font-medium text-neutral-500'>
					{flight.from.timeZone}
				</p>
			</div>

			<div className='absolute top-1/2 left-1/2 mb-2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-neutral-900'>
				<Plane className='text-amber-400' size={22} />
			</div>

			<div className='px-element py-element rounded-tr-lg bg-neutral-800 py-3 text-center'>
				<h3 className='mb-1.5 text-4xl font-semibold text-white'>
					{flight.to.code}
				</h3>
				<p className='mb-1 text-lg font-medium text-neutral-200'>
					{flight.to.city}
				</p>
				<p className='text-sm font-medium text-neutral-500'>
					{flight.to.timeZone}
				</p>
			</div>
		</div>
	)
}
