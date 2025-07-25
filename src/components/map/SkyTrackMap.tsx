import { Dot, Plane } from 'lucide-react'
import { useEffect, useRef } from 'react'
import Map, { MapRef, Marker } from 'react-map-gl/maplibre'

import { useCurrentFlight } from '../../hooks/useCurrentFlight'

import 'maplibre-gl/dist/maplibre-gl.css'

export function SkyTrackMap() {
	const { flight } = useCurrentFlight()
	const ref = useRef<MapRef>(null)

	useEffect(() => {
		if (ref.current && flight) {
			ref.current.setCenter({
				lat: flight.currentLocation.coordinates[0],
				lng: flight.currentLocation.coordinates[1]
			})
			ref.current.setZoom(6)
		}
	}, [flight])
	return (
		<Map
			ref={ref}
			initialViewState={{
				latitude: flight?.currentLocation.coordinates[0] || 37.8,
				longitude: flight?.currentLocation.coordinates[1] || -122.4,
				zoom: 6
			}}
			style={{ width: '100%', height: '100vh' }}
			mapStyle='https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'
		>
			{!!flight?.currentLocation.coordinates?.length && (
				<Marker
					latitude={flight?.currentLocation.coordinates[0] || 37.8}
					longitude={flight?.currentLocation.coordinates[1] || -122.4}
				>
					<Plane
						fill='orange'
						strokeWidth={0}
						className='absolute top-1/2 right-0 -translate-y-1/2 rotate-45'
					/>
				</Marker>
			)}
			{!!flight?.from.coordinates?.length && (
				<Marker
					latitude={flight?.from.coordinates[0]}
					longitude={flight?.from.coordinates[1]}
				>
					<Dot size={30} className='text-rose-500' />
				</Marker>
			)}

			{!!flight?.to.coordinates?.length && (
				<Marker
					latitude={flight?.to.coordinates[0]}
					longitude={flight?.to.coordinates[1]}
				>
					<Dot size={30} className='text-orange-400' />
				</Marker>
			)}
		</Map>
	)
}
