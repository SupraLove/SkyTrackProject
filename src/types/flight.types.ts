export interface IFlightAirplane {
	name: string
	image: string
}

export interface IFlightRoute {
	speed: number
	altitude: number
	distance?: number
}

export interface IFlightLocation {
	city: string
	country: string
	countryCode: string
	timeZone: string
	code: string
}

export interface IFlightAirline {
	name: string
	country: string
}

export interface IFlight {
	id: string
	airline: IFlightAirline
	airplane: IFlightAirplane
	route: IFlightRoute
	logo: string
	colorGradient: [string, string]
	from: IFlightLocation
	to: IFlightLocation
	aircraftReg: string
	progress: number
}
