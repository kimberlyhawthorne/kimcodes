import React from "react"
import styled from 'styled-components';
import {IntlProvider} from 'react-intl';
import {Helmet} from "react-helmet";
import {BaseCSS} from 'styled-bootstrap-grid';

// STYLES
import 'normalize.css';
import 'styles/index.css';
import 'prismjs/themes/prism-solarizedlight.css';
import {COLORS, FONTS} from 'styles/variables';
import {Container, Row} from 'styles/grid';

// CONFIGS
import {LOCALES, messages as messagesConfig} from 'locales/config';

// STORES
import localeStore from 'store/locale';

// COMPONENTS
import About from 'components/About/About';
import AccessibilityEasterEgg from 'components/Navigation/AccessibilityEasterEgg';
import Education from 'components/Education/Education';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Interests from 'components/Interests/Interests';
import Jobs from 'components/Jobs/Jobs';
import Navigation from 'components/Navigation/Navigation';
import Skills from 'components/Skills/Skills';

const App = styled.div`
	width: 100%;
	font-family: ${FONTS.recoleta};
	position: relative;
`;

const AppView = () => {
	const defaultLocale = localeStore.getDefaultLocale();
	const [locale, dispatchLocale] = React.useReducer(localeStore.reducer, defaultLocale);
	const messages = React.useMemo(() => messagesConfig[locale], [locale]);

	return (
		<App>
			<BaseCSS />
			<localeStore.context.Provider value={dispatchLocale}>
				<IntlProvider
					messages={messages}
					locale={locale}
					defaultLocale={LOCALES.EN.value}>

					<Helmet>
						<title>
							Kim Hawthorne
						</title>
					</Helmet>

					<AccessibilityEasterEgg />

					<Row backgroundColor={COLORS.maroon} color={COLORS.lilac_light}>
						<Container>
							<Header />
						</Container>
					</Row>

					<main>
						<Row backgroundColor={COLORS.maroon} color={COLORS.lilac_light}>
							<Container>
								<Navigation />
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
								<Navigation isSecondary={true} ariaHidden="true" />
							</Container>
						</Row>

						<Row backgroundColor={COLORS.black} color={COLORS.lilac_light}>
							<Container>
								<Footer />
							</Container>
						</Row>
					</main>

				</IntlProvider>
			</localeStore.context.Provider>
		</App>
	);
}

export default AppView;
