export function FlightSchedule() {
	return (
		<div className='mx-4'>
			<div className='grid grid-cols-2 gap-1'>
				<div className='bg-muted-foreground mt-1 flex items-center justify-between px-4 py-4'>
					<p className='text-card-foreground opacity-50'>Scheduled</p>
					<p className='text-card-foreground text-sm'>08:15</p>
				</div>
				<div className='bg-muted-foreground mt-1 flex items-center justify-between px-4 py-4'>
					<p className='text-card-foreground opacity-50'>Actual</p>
					<p className='text-card-foreground text-sm'>08:24</p>
				</div>
			</div>
			<div className='mb-1 grid grid-cols-2 gap-1'>
				<div className='bg-muted-foreground mt-1 flex items-center justify-between rounded-bl-lg px-4 py-4'>
					<p className='text-card-foreground opacity-50'>Scheduled</p>
					<p className='text-card-foreground text-sm'>08:24</p>
				</div>
				<div className='bg-muted-foreground mt-1 flex items-center justify-between rounded-br-lg px-4 py-4'>
					<p className='text-card-foreground opacity-50'>Estimated</p>
					<p className='text-card-foreground text-sm'>13:23</p>
				</div>
			</div>
		</div>
	)
}
