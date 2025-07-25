import { LayerProps } from 'react-map-gl/maplibre'

export const solidStyle: LayerProps = {
	id: 'route-solid',
	type: 'line',
	layout: { 'line-cap': 'round', 'line-join': 'round' },
	paint: {
		'line-color': '#73433F',
		'line-width': 3,
		'line-opacity': 1
	}
}

export const dashedStyle: LayerProps = {
	id: 'route-dashed',
	type: 'line',
	layout: { 'line-cap': 'round', 'line-join': 'round' },
	paint: {
		'line-color': '#5E605F',
		'line-width': 3,
		'line-dasharray': [2, 3],
		'line-opacity': 0.5
	}
}
