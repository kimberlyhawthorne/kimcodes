import React from 'react';
import styled from 'styled-components';
import SyntaxHighlighter from 'react-syntax-highlighter';

// STYLES
import {UnorderedList, ListItem as ListItemBase} from 'styles/base';
import {COLORS} from 'styles/variables';
import {Container} from 'styles/grid';
import {SectionTitle} from 'styles/typography';

// COMPONENTS
import Translation from 'components/Localization/Translation';

const ListItem = styled(ListItemBase)`
	font-size: 1.25rem;

	a {
		color: ${COLORS.peach};
	}
`;

const cssJSCode = `
export const Container = styled.div\`
	margin: 0 auto;
	padding: 3rem;
	// how to add props?
\`
`;

const Interests = () => {
	return (
		<Container backgroundColor={COLORS.brick} color={COLORS.white}>
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

					<SyntaxHighlighter>
						{cssJSCode}
					</SyntaxHighlighter>
				</ListItem>
			</UnorderedList>
		</Container>
	);
}

export default Interests;