import React from "react"
import styled from 'styled-components';
import {IntlProvider} from 'react-intl';
import {Helmet} from "react-helmet";
import {BaseCSS, GridThemeProvider} from 'styled-bootstrap-grid';

// STYLES
import 'normalize.css';
import 'styles/index.css';
import 'prismjs/themes/prism-solarizedlight.css';
import {COLORS, SPACING} from 'styles/variables';
import {Container} from 'styles/grid';
import {BodyText} from 'styles/typography';

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
import Squiggle from 'components/Icon/Squiggle';

const App = styled.div`
	width: 100%;
	position: relative;
	${BodyText};
`;

const Background = styled.div`
	background-color: ${(props) => props.backgroundColor};
	color: ${(props) => props.color};
`;

const gridTheme = {
	container: {
		maxWidth: {
			xxl: 720,
			xl: 720,
			lg: 720,
			md: 720,
			// defaults
			sm: 540,
			xs: 540,
		}
	}
};

const AppView = () => {
	const defaultLocale = localeStore.getDefaultLocale();
	const [locale, dispatchLocale] = React.useReducer(localeStore.reducer, defaultLocale);
	const messages = React.useMemo(() => messagesConfig[locale], [locale]);

	return (
		<GridThemeProvider gridTheme={gridTheme}>
			<App>
				<BaseCSS />
				<localeStore.context.Provider value={dispatchLocale}>
					<IntlProvider
						messages={messages}
						locale={locale}
						defaultLocale={LOCALES.EN.value}>

						<Helmet
							htmlAttributes={{lang: locale.toLowerCase()}}>
							<title>
								Kim Hawthorne
							</title>
							<link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
							<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
							<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
							<link rel="manifest" href="/images/favicon/site.webmanifest" />

							<meta property="og:title" content="Kim Hawthorne" />
							<meta property="og:description" content="Kim Hawthorne, front-end developer / développeuse front-end" />
							<meta property="og:image" content="/images/favicon/android-chrome-512x512.png" />
							<meta property="og:url" content="http://hawthorne.kim" />
							<meta name="twitter:card" content="summary_large_image" />
						</Helmet>

						<AccessibilityEasterEgg />

						<Background backgroundColor={COLORS.maroon} color={COLORS.lilac_light}>
							<Container paddingV={SPACING.sm}>
								<Header />
							</Container>
						</Background>

						<Background backgroundColor={COLORS.maroon} color={COLORS.lilac_light}>
							<Container>
								<Navigation />
							</Container>
						</Background>

						<main>
							<Background backgroundColor={COLORS.maroon} color={COLORS.lilac_light}>
								<Container>
									<Squiggle />
									<Jobs />
								</Container>
							</Background>

							<Background backgroundColor={COLORS.brick}>
								<Container>
									<Skills />
								</Container>
							</Background>

							<Background backgroundColor={COLORS.maroon} color={COLORS.lilac_light}>
								<Container>
									<Interests />
									<Education />
								</Container>
							</Background>

							<Background backgroundColor={COLORS.brick} color={COLORS.lilac_light}>
								<Container>
									<About />
									<Navigation ariaLabel="footer-navigation" isSecondary={true} />
								</Container>
							</Background>
						</main>

						<Background backgroundColor={COLORS.black} color={COLORS.lilac_light}>
							<Container paddingV={SPACING.sm}>
								<Squiggle />
								<Footer />
							</Container>
						</Background>

					</IntlProvider>
				</localeStore.context.Provider>
			</App>
		</GridThemeProvider>
	);
}

export default AppView;
