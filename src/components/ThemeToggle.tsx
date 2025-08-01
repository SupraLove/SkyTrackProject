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
				className='bg-secondary flex size-11 items-center justify-center rounded-full p-2 transition-colors hover:bg-neutral-300 hover:text-white dark:bg-neutral-800'
			>
				{theme === 'dark' ? <Moon size={25} /> : <Sun size={25} />}
			</Button>
		</>
	)
}
