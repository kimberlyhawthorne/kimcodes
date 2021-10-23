import React from "react"
import styled from 'styled-components';
import {IntlProvider} from 'react-intl';
import {Helmet} from "react-helmet";
import {BaseCSS} from 'styled-bootstrap-grid';

// STYLES AND FONTS
import 'normalize.css';
import 'styles/reset.css';
import 'prismjs/themes/prism-solarizedlight.css';
import "@fontsource/ibm-plex-sans";
import "@fontsource/playfair-display";
import "@fontsource/source-sans-pro";
import {COLORS} from 'styles/variables';
import {Container, Row} from 'styles/grid';

// CONFIGS
import {LOCALES, messages as messagesConfig} from 'locales/config';

// STORES
import localeStore from 'store/locale';

// COMPONENTS
import About from 'components/About/About';
import Education from 'components/Education/Education';
import Header from 'components/Header/Header';
import Interests from 'components/Interests/Interests';
import Jobs from 'components/Jobs/Jobs';
import Skills from 'components/Skills/Skills';

const App = styled.div`
	background-color: ${COLORS.lime};
	width: 100%;
	font-family: 'Source Sans Pro'
`;

const AppView = () => {
	const defaultLocale = localeStore.getDefaultLocale();
	const [locale, dispatchLocale] = React.useReducer(localeStore.reducer, defaultLocale);
	const messages = React.useMemo(() => messagesConfig[locale], [locale]);

	return (
		<App>
			<BaseCSS />
			<localeStore.context.Provider value={{dispatchLocale, locale}}>
				<IntlProvider
					messages={messages}
					locale={locale}
					defaultLocale={LOCALES.EN.value}>

					<Helmet>
						<title>
							Kim Hawthorne
						</title>
					</Helmet>

					<Row backgroundColor={COLORS.maroon}>
						<Container>
							<Header />
							<Jobs />
						</Container>
					</Row>

					<Row backgroundColor={COLORS.brick}>
						<Container>
							<Skills />
						</Container>
					</Row>

					<Row backgroundColor={COLORS.maroon} color={COLORS.lilac_light}>
						<Container>
							<Interests />
							<Education />
						</Container>
					</Row>

					<Row backgroundColor={COLORS.brick} color={COLORS.lilac_light}>
						<Container>
							<About />
						</Container>
					</Row>

					<Row backgroundColor={COLORS.black}>
						<Container>
							footer
						</Container>
					</Row>

				</IntlProvider>
			</localeStore.context.Provider>
		</App>
	);
}

export default AppView;
