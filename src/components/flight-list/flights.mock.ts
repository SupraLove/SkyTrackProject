import { IFlight } from '../../types/flight.types'

export const FLIGHTS_MOCK: IFlight[] = [
	{
		logo: '/logos/turkish.svg',
		id: 'TK143',
		airline: {
			name: 'Turkish Airlines',
			country: 'Turkey'
		},
		aircraftReg: 'TC-JFP',
		colorGradient: ['#1E3C72', '#2A5298'],
		airplane: {
			name: 'Airbus-A330',
			image: '/airplanes/01_turkish_airbus-A330.png'
		},
		route: {
			speed: 850,
			altitude: 11000,
			distance: 7500
		},
		from: {
			city: 'Sofia',
			country: 'Bulgaria',
			countryCode: 'BG',
			timeZone: 'UTC+3',
			code: 'SOF',
			coordinates: [42.6977, 23.3219]
		},
		to: {
			city: 'Beijing',
			country: 'China',
			countryCode: 'CN',
			timeZone: 'UTC+8',
			code: 'PEK',
			coordinates: [39.9042, 116.4074]
		},
		progress: 75,
		currentLocation: {
			coordinates: [40.6977, 91.3219]
		}
	},
	{
		logo: '/logos/ryanair.svg',
		id: 'RN1782',
		airline: {
			name: 'Ryanair',
			country: 'Ireland'
		},
		aircraftReg: 'D-AISP',
		colorGradient: ['#003566', '#ffc300'],
		airplane: {
			name: 'Boeing-737-800',
			image: '/airplanes/02_Ryanair_Boeing-737-800.png'
		},
		route: {
			speed: 800,
			altitude: 10000,
			distance: 4000
		},
		from: {
			city: 'Dublin',
			country: 'Ireland',
			countryCode: 'IE',
			timeZone: 'UTC+1',
			code: 'DUB',
			coordinates: [53.3498, -6.2603]
		},
		to: {
			city: 'Larnaca',
			country: 'Cyprus',
			countryCode: 'CY',
			timeZone: 'UTC+3',
			code: 'LCA',
			coordinates: [34.8751, 33.6249]
		},
		progress: 60,
		currentLocation: {
			coordinates: [44.0, 15.0]
		}
	},
	{
		logo: '/logos/s7.svg',
		id: 'S7124',
		airline: {
			name: 'S7 Airlines',
			country: 'Russia'
		},
		aircraftReg: 'RA-73415',
		colorGradient: ['#00C853', '#64DD17'],
		airplane: {
			name: 'Superjet 100',
			image: '/airplanes/03_s7_Airbus-A320.png'
		},
		route: {
			speed: 750,
			altitude: 9500,
			distance: 3200
		},
		from: {
			city: 'Nice',
			country: 'France',
			countryCode: 'FR',
			timeZone: 'UTC+2',
			code: 'NCE',
			coordinates: [43.7102, 7.262]
		},
		to: {
			city: 'Tbilisi',
			country: 'Georgia',
			countryCode: 'GE',
			timeZone: 'UTC+4',
			code: 'TBS',
			coordinates: [41.7151, 44.8271]
		},
		progress: 80,
		currentLocation: {
			coordinates: [42.7, 26.0]
		}
	},
	{
		logo: '/logos/swiss.svg',
		id: 'LX318',
		airline: {
			name: 'Swiss International Air Lines',
			country: 'Switzerland'
		},
		aircraftReg: 'HB-JHK',
		colorGradient: ['#D32F2F', '#F44336'],
		airplane: {
			name: 'Airbus A330',
			image: '/airplanes/04_SWISS_Airbus-A321.png'
		},
		route: {
			speed: 870,
			altitude: 11300,
			distance: 5000
		},
		from: {
			city: 'Porto',
			country: 'Portugal',
			countryCode: 'PT',
			timeZone: 'UTC+1',
			code: 'OPO',
			coordinates: [41.1496, -8.6109]
		},
		to: {
			city: 'Baku',
			country: 'Azerbaijan',
			countryCode: 'AZ',
			timeZone: 'UTC+4',
			code: 'GYD',
			coordinates: [40.4675, 50.0467]
		},
		progress: 90,
		currentLocation: {
			coordinates: [43.0, 25.0]
		}
	},
	{
		logo: '/logos/lufthansa.svg',
		id: 'LH401',
		airline: {
			name: 'Lufthansa',
			country: 'Germany'
		},
		aircraftReg: 'D-AIXD',
		colorGradient: ['#0F2027', '#2C5364'],
		airplane: {
			name: 'Airbus A350',
			image: '/airplanes/05_Lufthansa_Airbus-A350-900.png'
		},
		route: {
			speed: 900,
			altitude: 11500,
			distance: 6100
		},
		from: {
			city: 'Burgas',
			country: 'Bulgaria',
			countryCode: 'BG',
			timeZone: 'UTC+3',
			code: 'BOJ',
			coordinates: [42.5048, 27.4626]
		},
		to: {
			city: 'Muscat',
			country: 'Oman',
			countryCode: 'OM',
			timeZone: 'UTC+4',
			code: 'MCT',
			coordinates: [23.5933, 58.2844]
		},
		progress: 45,
		currentLocation: {
			coordinates: [33.0, 42.0]
		}
	}
]
