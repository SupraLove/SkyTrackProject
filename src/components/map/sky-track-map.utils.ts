import { lineString, point } from '@turf/helpers'
import {
	greatCircle,
	nearestPointOnLine,
	bearing as turfBearing
} from '@turf/turf'
import { LayerProps } from 'react-map-gl/maplibre'

import { ThemeType } from '../../providers/theme/theme.context'

export const solidStyle = (theme: ThemeType): LayerProps => ({
	id: 'route-solid',
	type: 'line',
	layout: { 'line-cap': 'round', 'line-join': 'round' },
	paint: {
		'line-color': theme === 'dark' ? '#73433F' : '#E8B4B0',
		'line-width': 3,
		'line-opacity': 1
	}
})

export const dashedStyle = (theme: ThemeType): LayerProps => ({
	id: 'route-dashed',
	type: 'line',
	layout: { 'line-cap': 'round', 'line-join': 'round' },
	paint: {
		'line-color': theme === 'dark' ? '#5E605F' : '#111',
		'line-width': 3,
		'line-dasharray': [2, 3],
		'line-opacity': 0.5
	}
})

export const createSplitGreatCircle = (
	from: [number, number],
	to: [number, number],
	current: [number, number]
) => {
	const fullLine = greatCircle(point(from), point(to), { npoints: 128 })
	const coords = fullLine.geometry.coordinates

	const currentPoint = point(current)
	const snapped = nearestPointOnLine(fullLine, currentPoint, {
		units: 'kilometers'
	})

	const index = snapped.properties?.index ?? 0

	const snappedCoord = snapped.geometry.coordinates as [number, number]
	const nextCoord = coords[Math.min(index + 1, coords.length - 1)] as [
		number,
		number
	]
	const prevCoord = coords[Math.max(index - 1, 0)] as [number, number]

	const BACK_SHIFT_RATIO = 0.47

	const offsetPoint: [number, number] = [
		snappedCoord[0] * (1 - BACK_SHIFT_RATIO) + prevCoord[0] * BACK_SHIFT_RATIO,
		snappedCoord[1] * (1 - BACK_SHIFT_RATIO) + prevCoord[1] * BACK_SHIFT_RATIO
	]

	return {
		solidFeature: lineString(coords.slice(0, index + 1) as [number, number][]),
		dashedFeature: lineString(coords.slice(index) as [number, number][]),
		snappedPoint: offsetPoint,
		bearing: turfBearing(snappedCoord, nextCoord)
	}
}
