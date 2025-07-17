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
		<div className='xs:flex-col xs:p-4 xs:rounded-3xl absolute top-15 left-1/2 flex w-full max-w-2xl -translate-x-1/2 items-center justify-between rounded-full bg-neutral-800 p-2 pr-6 shadow sm:pr-1 lg:relative lg:top-0 lg:mb-7 lg:w-full'>
			<div className='xs:flex-col flex items-center gap-4'>
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
			<div className='flex items-center gap-4 sm:gap-1'>
				<Button
					asChild
					variant='secondary'
					size='icon'
					className='flex size-11 items-center justify-center rounded-full bg-neutral-800 p-2 transition-colors hover:bg-neutral-700'
				>
					<Link to='./favorites'>
						<Heart size={25} />
					</Link>
				</Button>

				<ThemeToggle />
			</div>
		</div>
	)
}
