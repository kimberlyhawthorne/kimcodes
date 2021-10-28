import {COLORS} from 'styles/variables';

const transition = '0.2s';

const BUTTONS = {
	primary: `
		background-color: ${COLORS.brick};
		color: ${COLORS.lilac};
		transition: ${transition};

		&:focus,
		&:hover {
			background-color: ${COLORS.lilac};
			color: ${COLORS.brick};
		}
	`,
	secondary: `
		background-color: ${COLORS.lilac};
		color: ${COLORS.brick};
		transition: ${transition};

		&:focus,
		&:hover {
			background-color: ${COLORS.lilac_light};
			color: ${COLORS.brick};
		}
	`
};

export default BUTTONS;