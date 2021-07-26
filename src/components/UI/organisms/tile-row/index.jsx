import React from 'react';
import PropTypes from 'prop-types';

import Tile from '../../molecules/tile';

import { TileRowStyled } from './tile-row.styled';

const TileRow = ({ tiles }) => (
	<TileRowStyled>
		{tiles.map(({ name, icon, page, styledAs }) => (
			<Tile
				key={name}
				name={name}
				icon={icon}
				page={page}
				styledAs={styledAs}
			/>
		))}
	</TileRowStyled>
);

TileRow.propTypes = {
	tiles: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default TileRow;
