import React from 'react';

// CONTEXTS
import {IntlContext} from 'react-intl';
import localeStore from 'store/locale';

// CONFIGS
import {LOCALES} from 'locales/config';

// STYLES
import {Select} from 'styles/form';

const LanguageToggle = () => {
	const locale = React.useContext(localeStore.context);
	const intl = React.useContext(IntlContext);

	const handleChangeLanguage = (event) => {
		locale.dispatchLocale({
			type: localeStore.ACTIONS.SET,
			payload: event.target.value
		});
	}

	return (
		<Select defaultValue={intl.locale} onChange={handleChangeLanguage}>
			{Object.keys(LOCALES).map(LOCALE => {
				return (
					<option
						key={LOCALE}
						value={LOCALE}>
						{LOCALE}
					</option>
				);
			})}
		</Select>
	);
}

export default LanguageToggle;
