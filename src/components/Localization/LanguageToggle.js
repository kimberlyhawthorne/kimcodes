import React from 'react';
import styled from 'styled-components';
import {useIntl} from 'react-intl';

// CONTEXTS
import localeStore from 'store/locale';

// CONFIGS
import {LOCALES} from 'locales/config';

// STYLES
import {COLORS} from 'styles/variables';
import {FONTS} from 'styles/variables';

// COMPONENTS
import Translation from 'components/Localization/Translation';

// COMPONENT STYLES
const Container = styled.div`
	display: flex;
	align-items: center;
`;

const Toggler = styled.button`
	${(props) => {
		const toggleSize = '20px';
		const left = props.isLeft ? '0' : `calc(100% - ${toggleSize})`;

		return `
			display: inline-flex;
			background-color: ${COLORS.black};
			width: 36px;
			height: ${toggleSize};
			border: 0;
			border-radius: 100px;
			cursor: pointer;
			position: relative;
			align-items: center;
			margin: 0 0.5rem;
			transition: background 0.2s ease-out;


			&:after {
				content: '';
				width: ${toggleSize};
				height: ${toggleSize};
				border-radius: 100%;
				background-color: ${COLORS.lilac};
				position: absolute;
				left: ${left};
				transition: 0.2s ease-out;
			}

			&:active {
				background-color: ${COLORS.brick};


				&:after {
					width: calc(${toggleSize} + 4px);
				}
			}

			&:hover:after {
				filter: brightness(90%);
			}
		`;
	}}
`;

const Label = styled(Translation)`
	font-family: ${FONTS.bold};
	color: ${COLORS.lilac_light};
`;

const LanguageToggle = () => {
	const dispatchLocale = React.useContext(localeStore.context);
	const {formatMessage, locale} = useIntl();

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
		<Container aria-label={formatMessage({
			id: 'languageToggle-ariaLabel'
		})}>
			<Label
				id={LOCALES.EN.label}
				aria-label={LOCALES.EN.ariaLabel} />
			<Toggler
				isLeft={isEnglish}
				onClick={handleClick} />
			<Label
				id={LOCALES.FR.label}
				ariaLabel={LOCALES.FR.ariaLabel} />
		</Container>
	);
}

export default LanguageToggle;
