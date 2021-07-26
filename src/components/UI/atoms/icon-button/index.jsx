import React from 'react';
import PropTypes from 'prop-types';

import { IconButtonStyled } from './icon-button.styled';

import Icon from '../icon';

const IconButton = ({ icon, styledAs, iconSize }) => (
	<IconButtonStyled>
		<Icon icon={icon} styledAs={styledAs} iconSize={iconSize} />
	</IconButtonStyled>
);

IconButton.propTypes = {
	iconSide: '2rem',
	styledAs: 'normal',
};

IconButton.propTypes = {
	icon: PropTypes.func.isRequired,
	iconSize: PropTypes.string,
	styledAs: PropTypes.string,
};

export default IconButton;
