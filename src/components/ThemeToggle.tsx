import { Moon, Sun } from 'lucide-react'

import { useTheme } from '../providers/theme/useTheme'

import { Button } from './ui/button'

export function ThemeToggle() {
	const { theme, toggleTheme } = useTheme()

	return (
		<>
			<Button
				onClick={() => {
					toggleTheme()
				}}
				variant='secondary'
				size='icon'
				className='size-11'
			>
				{/* <button className='flex items-center justify-center rounded-full bg-neutral-800 p-2 transition-colors hover:bg-neutral-700'> */}
				{theme === 'dark' ? <Moon size={25} /> : <Sun size={25} />}
				{/* </button> */}
			</Button>
		</>
	)
}
