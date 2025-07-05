import { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

export function Heading({ children }: Props) {
	return <h1 className='mb-4 text-2xl font-bold text-black'>{children}</h1>
}
