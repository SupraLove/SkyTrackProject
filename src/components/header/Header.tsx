import { Heart } from 'lucide-react'
import { match } from 'path-to-regexp'
import { Link, useLocation } from 'react-router-dom'

import { ThemeToggle } from '../ThemeToggle'
import { Button } from '../ui/button'

import { HeaderMenuItem } from './HeaderMenuItem'
import { HEADER_MENU_DATA } from './header-menu.data'

export function Header() {
	const location = useLocation()
	return (
		// lg:w-full lg:relative lg:top-0 lg:mb-7
		<div className='absolute top-15 left-1/2 flex w-4/12 -translate-x-1/2 items-center justify-between rounded-full bg-neutral-800 p-2 pr-6 shadow'>
			<div className='flex items-center gap-4'>
				<img
					src='./airlogoheader.svg'
					alt='airlogoheader'
					width={45}
					height={45}
				/>
				<nav>
					<ul className='flex items-center gap-4'>
						{HEADER_MENU_DATA.map(itemMenu => (
							<HeaderMenuItem
								item={itemMenu}
								key={itemMenu.href}
								isActive={!!match(itemMenu.href)(location.pathname)}
							/>
						))}
					</ul>
				</nav>
			</div>
			<div className='flex items-center gap-4'>
				<Button asChild variant='secondary' size='icon' className='size-11'>
					<Link
						to='./favorites'
						// className='flex items-center justify-center rounded-full bg-neutral-800 p-2 transition-colors hover:bg-neutral-700'
					>
						<Heart size={25} />
					</Link>
				</Button>

				<ThemeToggle />
			</div>
		</div>
	)
}
