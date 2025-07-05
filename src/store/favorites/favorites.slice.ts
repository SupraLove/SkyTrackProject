import { createSlice } from '@reduxjs/toolkit'

const LS_KEY = 'favorites'

const getFavoritesFromLocalStorage = () => {
	const favorites = localStorage.getItem(LS_KEY)
	if (!favorites) return []
	try {
		return JSON.parse(favorites)
	} catch (error) {
		console.log('error parsing favorites from LS', error)
	}
}

const saveFavoritesToLocalStorage = (favorites: string[]) => {
	localStorage.setItem(LS_KEY, JSON.stringify(favorites))
}

const initialState: string[] = getFavoritesFromLocalStorage()

const favoritesSlice = createSlice({
	name: LS_KEY, //название этого слайса
	initialState, // начальное состояние (может быть пустым или с уже добавленными).
	reducers: {
		//это функции, которые описывают, как изменять состояние при определённых действиях.
		addFavorite: (state, action) => {
			if (!state.includes(action.payload)) {
				state.push(action.payload)
				saveFavoritesToLocalStorage(state)
			}
		},
		removeFavorites: (state, action) => {
			state = state.filter(id => id != action.payload)
			saveFavoritesToLocalStorage(state)
			return state
		}
	}
})

export const { addFavorite, removeFavorites } = favoritesSlice.actions
export const favoritesReducer = favoritesSlice.reducer
