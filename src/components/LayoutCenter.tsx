import { Outlet } from 'react-router-dom'

export function LayoutCenter() {
	return (
		<div className='mt-25'>
			<Outlet />
		</div>
	)
}
