import React from 'react';
import styled from 'styled-components';
import {FormattedMessage, useIntl} from 'react-intl';

import DEFAULTS from 'locales/EN';

// STYLES
import {LINKS} from 'styles/typography';

const Link = styled.a`
	${LINKS.lilac};
`;



const Translation = ({
	ariaLabel,
	className,
	id,
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
				link: string => <Link href={url} target="_blank">{string}</Link>,
				...values
			}}
		>
			{(message) => {
				const props = {};

				if (className) {
					props.className = className;
				}

				if (ariaLabel) {
					props.ariaLabel = formatMessage({id: ariaLabel});
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