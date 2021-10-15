import React from 'react';
import {FormattedMessage} from 'react-intl';

// CONTEXTS
import {IntlContext} from 'react-intl';

// STYLES
import {ExternalLink} from 'styles/typography';

const Translation = ({
	id,
	linkColor,
	url,
	values
}) => {
	const intl = React.useContext(IntlContext);

	return (
		<FormattedMessage
			id={id}
			defaultMessage={intl?.messages?.[id]}
			values={{
				bold: string => <strong>{string}</strong>,
				link: string => <ExternalLink color={linkColor} href={url} target="_blank">{string}</ExternalLink>,
				...values
			}}
		/>
	);
};

export default Translation;