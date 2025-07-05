import { Heart } from 'lucide-react'
import { useCallback } from 'react'

import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import {
	addFavorite,
	removeFavorites
} from '../../../store/favorites/favorites.slice'
import { Button } from '../../ui/button'

interface Props {
	flghtId: string
}

export function FlightCardActions({ flghtId }: Props) {
	const dispatch = useAppDispatch() // хук для получения функции dispatch, чтобы отправлять действия в Redux.
	const favorites = useAppSelector(state => state.favorites) // хук для получения текущего состояния из Redux
	const isFavorites = favorites.includes(flghtId)

	const handleToggleFavorite = useCallback(() => {
		if (isFavorites) {
			dispatch(removeFavorites(flghtId))
		} else {
			dispatch(addFavorite(flghtId))
		}
	}, [dispatch, flghtId, isFavorites])

	return (
		<div className='absolute top-1 right-1 z-50 flex size-9 h-full origin-top-right scale-0 flex-col gap-2 px-3 opacity-0 transition-all duration-500 group-hover:-right-10 group-hover:scale-100 group-hover:opacity-100'>
			<Button
				onClick={handleToggleFavorite}
				asChild
				variant='secondary'
				size='icon'
			>
				<Heart fill={isFavorites ? 'white' : 'black'} size={25} />
			</Button>
		</div>
	)
}
