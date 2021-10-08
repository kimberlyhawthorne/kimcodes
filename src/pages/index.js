import React from "react"
import styled from 'styled-components';
import {IntlProvider} from 'react-intl';
import {Helmet} from "react-helmet";

// STYLES AND FONTS
import 'normalize.css';
import 'styles/reset.css';
import 'prismjs/themes/prism-solarizedlight.css';
import "@fontsource/ibm-plex-sans";
import "@fontsource/playfair-display";
import "@fontsource/source-sans-pro";
import {COLORS} from 'styles/variables';

// CONFIGS
import {LOCALES, messages} from 'locales/config';

// STORES
import localeStore from 'store/locale';

// COMPONENTS
import About from 'components/About/About';
import Education from 'components/Education/Education';
import Header from 'components/Header/Header';
import Interests from 'components/Interests/Interests';
import Introduction from 'components/Introduction/Introduction';
import Jobs from 'components/Jobs/Jobs';
import Navigation from 'components/Navigation/Navigation';
import Skills from 'components/Skills/Skills';

const App = styled.div`
	background-color: ${COLORS.lime};
	width: 100%;
	font-family: 'Source Sans Pro'
`;

const AppView = () => {
	const detectedLanguage = localeStore.getDetectedLanguage();
	const [locale, dispatchLocale] = React.useReducer(localeStore.reducer, detectedLanguage);

	return (
		<App>
			<localeStore.context.Provider value={{dispatchLocale}}>
				<IntlProvider
					messages={messages[locale]}
					locale={locale}
					defaultLocale={LOCALES.EN}>

					<Helmet>
						<title>
							Kim Hawthorne
						</title>
					</Helmet>

					<Header />
					<Introduction />
					<Navigation />
					<Jobs />
					<Skills />
					<Interests />
					<Education />
					<About />

				</IntlProvider>
			</localeStore.context.Provider>
		</App>
	);
}

export default AppView;
