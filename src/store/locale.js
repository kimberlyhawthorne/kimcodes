import React from 'react';
// CONFIGS
import {ALL_LOCALES, LOCALES} from 'locales/config';

// CONTEXT
const context = React.createContext(null);

// ACTIONS
export const ACTIONS = {
	SET: '@locale/SET'
};

// REDUCER
// TO DO: how to set default state?
const reducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.SET:
			return action.payload;
		default:
			return state;
	}
}

// HELPERS
export const getDefaultLocale = () => {
	// server environment, no navigator to detect
	if (typeof window === 'undefined') {
		return LOCALES.EN.value;
	}

	const detected = navigator?.language;

	// browser has no detected language, just return default
	if (!detected) {
		return LOCALES.EN.value;
	}

	// loop through website locales
	// if the detected locale matches one of the listed locales, grab the listed locale key
	const [key] = Object.entries(ALL_LOCALES)
		.find(([localeKey, localeValues]) => {
			return localeValues.includes(detected);
		});

	return key;
}

export default {
	ACTIONS,
	context,
	reducer,
	getDefaultLocale
};