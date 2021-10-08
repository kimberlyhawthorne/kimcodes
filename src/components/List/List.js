import React from 'react';

import {UnorderedList, ListItem} from 'styles/base';

import Translation from 'components/Localization/Translation';

const List = ({items}) => {
	return (
		<UnorderedList>
			{items.map(item => (
					<ListItem key={item}>
						<Translation id={item} />
					</ListItem>
				)
			)}
		</UnorderedList>
	);
}

export default List;