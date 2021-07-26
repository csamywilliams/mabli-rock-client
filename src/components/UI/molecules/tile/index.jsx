import React from 'react';
import PropTypes from 'prop-types';

import { IoMdAddCircleOutline } from 'react-icons/io';

import IconButton from '../../atoms/icon-button';
import Icon from '../../atoms/icon';

import { TileStyled, TileContentStyled, IconStyled } from './tile.styled';

const Tile = ({ name, icon, styledAs }) => {
	return (
		<TileStyled>
			<IconStyled>
				<div className={`icon icon--${styledAs}`}>
					<Icon icon={icon} styledAs={styledAs} iconSize={'4rem'} />
				</div>
			</IconStyled>
			<TileContentStyled>
				<p>{name}</p>
				<IconButton
					icon={IoMdAddCircleOutline}
					iconSize="2rem"
					styledAs="normal"
				/>
			</TileContentStyled>
		</TileStyled>
	);
};

Tile.defaultTypes = {
	styledAs: 'normal',
};

Tile.propTypes = {
	name: PropTypes.string.isRequired,
	icon: PropTypes.func.isRequired,
	styledAs: PropTypes.string,
};

export default Tile;
