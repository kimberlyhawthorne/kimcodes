import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';

// STYLES
import {UnorderedList, ListItem, Section} from 'styles/base';
import {SectionTitle} from 'styles/typography';

// COMPONENTS
import Translation from 'components/Localization/Translation';

// STYLED COMPONENTS
const Code = styled(SyntaxHighlighter)`
	// alignment with the <li> bullet
	margin-left: -1rem;
	padding: 1rem !important;
`;

const cssJSCode = `
export const Container = styled.div\`
	margin: 0 auto;
	padding: 3rem;
	color: \${(props) => props.color || '#000'}
\`
`;

const Interests = () => {
	return (
		<Section>
			<SectionTitle>
				<Translation id="interests-title" />
			</SectionTitle>

			<UnorderedList>
				<ListItem>
					<Translation id="interests-hooks" />
				</ListItem>

				<ListItem>
					<Translation id="interests-reactHookForms" url="https:\/\/react-hook-form.com" />
				</ListItem>

				<ListItem>
					<Translation id="interests-localization" />
				</ListItem>


				<ListItem>
					<Translation id="interests-cssInJs" />

					<Code aria-hidden="true">
						{cssJSCode}
					</Code>
				</ListItem>
			</UnorderedList>
		</Section>
	);
}

export default Interests;