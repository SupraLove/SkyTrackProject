import { ReactNode } from 'react'

interface Props {
	children: ReactNode
}

export function SubHeading({ children }: Props) {
	return (
		<div className='mb-4 font-semibold text-black opacity-70'>{children}</div>
	)
}
