import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Layout } from './components/Layout'
import { LayoutCenter } from './components/LayoutCenter'
import { ThemeProvider } from './providers/theme/ThemeProvider'
import { Home } from './screens/home/Home'
import { Favorites } from './screens/home/favorites/Favorites'
import { store } from './store'

import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider>
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route element={<Layout />}>
							<Route path='/' element={<Home />} />
							<Route element={<LayoutCenter />}>
								<Route path='/favorites' element={<Favorites />} />
							</Route>
						</Route>
					</Routes>
				</BrowserRouter>
			</Provider>
		</ThemeProvider>
	</StrictMode>
)
