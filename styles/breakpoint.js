const size = {
	xs: '0',
	sm: '600px',
	md: '960px',
	lg: '1280px',
	xl: '1920px',
}

const breakpoint = {
	up: {
		xs: `screen and (min-width: ${size.xs})`,
		sm: `screen and (min-width: ${size.sm})`,
		md: `screen and (min-width: ${size.md})`,
		lg: `screen and (min-width: ${size.lg})`,
		xl: `screen and (min-width: ${size.xl})`,
	},
	down: {
		xs: `screen and (max-width: ${size.xs})`,
		sm: `screen and (max-width: ${size.sm})`,
		md: `screen and (max-width: ${size.md})`,
		lg: `screen and (max-width: ${size.lg})`,
		xl: `screen and (max-width: ${size.xl})`,
	},
}

export default breakpoint
