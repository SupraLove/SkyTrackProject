import { Link } from 'react-router-dom'

import { cn } from '../../utils/cn'

import { IHeaderMenuItem } from './header-menu.data'

interface Props {
	item: IHeaderMenuItem
	isActive: boolean
}

export function HeaderMenuItem({ item, isActive }: Props) {
	return (
		<li>
			<Link
				to={item.href}
				className={cn(
					'text-card-foreground text-lg transition-opacity hover:opacity-97',
					isActive ? 'opacity-100' : 'opacity-70'
				)}
			>
				{item.label}
			</Link>
		</li>
	)
}
