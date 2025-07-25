import { Dot, Plane } from 'lucide-react'
import { useEffect, useMemo, useRef } from 'react'
import Map, { Layer, MapRef, Marker, Source } from 'react-map-gl/maplibre'

import { useCurrentFlight } from '../../hooks/useCurrentFlight'
import { FLIGHTS_MOCK } from '../flight-list/flights.mock'

import { dashedStyle, solidStyle } from './sky-track-map.utils'

import 'maplibre-gl/dist/maplibre-gl.css'

export function SkyTrackMap() {
	const { flight } = useCurrentFlight()

	const currentOtherFlightCoordinates = useMemo(
		() =>
			FLIGHTS_MOCK.filter(f => f.id != flight?.id).map(
				f => f.currentLocation.coordinates
			),
		[flight]
	)

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

	const [solidCoords, dashedCoords] = useMemo(() => {
		if (!flight?.from || !flight?.to || !flight.currentLocation) return [[], []]

		const all = [
			[flight.from.coordinates[1], flight.from.coordinates[0]],
			[
				flight.currentLocation.coordinates[1],
				flight.currentLocation.coordinates[0]
			],
			[flight.to.coordinates[1], flight.to.coordinates[0]]
		]

		return [all.slice(0, 2), all.slice(1)]
	}, [flight])

	const solidGeoJson: GeoJSON.FeatureCollection = {
		type: 'FeatureCollection',
		features: [
			{
				type: 'Feature',
				geometry: {
					type: 'LineString',
					coordinates: solidCoords
				},
				properties: {}
			}
		]
	}

	const dashedGeoJson: GeoJSON.FeatureCollection = {
		type: 'FeatureCollection',
		features: [
			{
				type: 'Feature',
				geometry: {
					type: 'LineString',
					coordinates: dashedCoords
				},
				properties: {}
			}
		]
	}

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
			{solidCoords.length > 1 && (
				<Source id='route-solid' type='geojson' data={solidGeoJson}>
					<Layer {...solidStyle} />
				</Source>
			)}

			{dashedCoords.length > 1 && (
				<Source id='route-dashed' type='geojson' data={dashedGeoJson}>
					<Layer {...dashedStyle} />
				</Source>
			)}

			{flight?.currentLocation.coordinates?.length &&
				flight.currentLocation.coordinates.length > 1 && (
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
			{flight?.currentLocation.coordinates?.length &&
				flight.currentLocation.coordinates.length > 1 && (
					<Marker
						latitude={flight?.from.coordinates[0]}
						longitude={flight?.from.coordinates[1]}
					>
						<Dot size={30} className='text-rose-500' />
					</Marker>
				)}

			{flight?.currentLocation.coordinates?.length &&
				flight.currentLocation.coordinates.length > 1 && (
					<Marker
						latitude={flight?.to.coordinates[0]}
						longitude={flight?.to.coordinates[1]}
					>
						<Dot size={30} className='text-orange-400' />
					</Marker>
				)}

			{!!currentOtherFlightCoordinates?.length &&
				currentOtherFlightCoordinates.map(coordinate => (
					<Marker
						key={coordinate.join(',')}
						latitude={coordinate[0]}
						longitude={coordinate[1]}
					>
						<Plane
							strokeWidth={0}
							size={20}
							className='fill-foreground opacity-30'
						/>
					</Marker>
				))}
		</Map>
	)
}
