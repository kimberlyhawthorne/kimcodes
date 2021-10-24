import React from 'react';
import styled from 'styled-components';

// CONTEXTS
import {IntlContext} from 'react-intl';
import localeStore from 'store/locale';

// CONFIGS
import {LOCALES} from 'locales/config';

// STYLES
import {COLORS} from 'styles/variables';

// COMPONENTS
import Translation from 'components/Localization/Translation';

// COMPONENT STYLES
const Container = styled.div`
	display: flex;
	align-items: center;
`;

const Toggler = styled.div`
	${(props) => {
		const buttonSize = '1.9rem';

		return `
			display: inline-flex;
			background-color: ${COLORS.black};
			width: 3.5rem;
			height: 1.75rem;
			border-radius: 100px;
			cursor: pointer;
			position: relative;
			align-items: center;
			margin: 0 0.5rem;
			transition: background 0.2s ease-out;


			&:after {
				content: '';
				width: ${buttonSize};
				height: ${buttonSize};
				border-radius: 100%;
				background-color: ${COLORS.lilac};
				position: absolute;
				left: ${props.isLeft ? '0' : 'calc(100% - 1.9rem)'};
				transition: 0.2s ease-out;
			}

			&:active {
				background-color: ${COLORS.brick};


				&:after {
					width: calc(${buttonSize} + 4px);
				}
			}

			&:hover:after {
				filter: brightness(90%);
			}
		`;
	}}
`;

const Label = styled(Translation)`
	color: ${COLORS.lilac_light}
`;

const LanguageToggle = () => {
	const {locale, dispatchLocale} = React.useContext(localeStore.context);
	const intl = React.useContext(IntlContext);

	/**
	* Track toggle state in a boolean
	* Used for styles
	**/
	const isEnglish = React.useMemo(() => locale === LOCALES.EN.value, [locale]);

	/**
	* Click handler
	* - Toggle selected locale
	* - Update locale app-wide
	**/
	const handleClick = () => {
		const value = isEnglish ? LOCALES.FR.value : LOCALES.EN.value;
		dispatchLocale({
			type: localeStore.ACTIONS.SET,
			payload: value
		});
	};

	return (
		<Container>
			<Label id={LOCALES.EN.label} />
			<Toggler isLeft={isEnglish} onClick={handleClick} />
			<Label id={LOCALES.FR.label} />
		</Container>
	);
}

export default LanguageToggle;
