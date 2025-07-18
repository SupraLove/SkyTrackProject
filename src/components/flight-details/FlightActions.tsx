import {
	MapPin,
	MoreHorizontal,
	Route,
	SquareArrowOutUpRight
} from 'lucide-react'

interface Props {
	onRoute: () => void
	onFollow: () => void
	onShare: () => void
	onMore: () => void
}

export function FlightActions({ onRoute, onFollow, onShare, onMore }: Props) {
	return (
		<div>
			<div className='mx-4 mb-4 grid grid-cols-4 gap-1'>
				<button
					onClick={onRoute}
					className='bg-card text-card-foreground hover:bg-muted-foreground flex flex-col items-center gap-2 rounded-l-lg py-1'
				>
					<Route size={22} />
					<span>Route</span>
				</button>

				<button
					onClick={onFollow}
					className='bg-card text-card-foreground hover:bg-muted-foreground flex flex-col items-center gap-2 py-1'
				>
					<MapPin size={22} />
					<span>Follow</span>
				</button>

				<button
					onClick={onShare}
					className='bg-card text-card-foreground hover:bg-muted-foreground flex flex-col items-center gap-2 py-1'
				>
					<SquareArrowOutUpRight size={22} />
					<span>Share</span>
				</button>

				<button
					onClick={onMore}
					className='bg-card text-card-foreground hover:bg-muted-foreground flex flex-col items-center gap-2 rounded-r-lg py-1'
				>
					<MoreHorizontal size={22} />
					<span>More</span>
				</button>
			</div>
		</div>
	)
}
