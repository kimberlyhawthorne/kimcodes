import React from 'react';
import {FormattedMessage, useIntl} from 'react-intl';

import DEFAULTS from 'locales/EN';

// STYLES
import {ExternalLink} from 'styles/typography';

const Translation = ({
	ariaLabel,
	className,
	id,
	linkColor,
	url,
	values
}) => {
	const {formatMessage} = useIntl();

	return (
		<FormattedMessage
			id={id}
			defaultMessage={DEFAULTS[id]}
			values={{
				bold: string => <strong>{string}</strong>,
				link: string => <ExternalLink color={linkColor} href={url} target="_blank">{string}</ExternalLink>,
				...values
			}}
		>
			{(message) => {
				const props = {};

				if (className) {
					props.className = className;
				}

				if (ariaLabel) {
					props['aria-label'] = formatMessage({id: ariaLabel});
				}

				// Some props are needed on the translated message
				// Render a span and add them
				if (!!Object.keys(props).length) {
					return (
						<span
							{...(className && {className})}
							{...(ariaLabel && {['aria-label']: formatMessage({id: ariaLabel})})}>
							{message}
						</span>
					);
				}

				// Otherwise just return the plain ol' message
				return message;
			}}
		</FormattedMessage>
	);
};

export default Translation;