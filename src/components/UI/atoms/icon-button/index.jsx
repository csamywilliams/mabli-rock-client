import React from 'react';
import PropTypes from 'prop-types';

import { IconButtonStyled } from './icon-button.styled';

import Icon from '../icon';

const IconButton = ({ icon, styledAs, iconSize, ariaLabel }) => (
	<IconButtonStyled aria-label={ariaLabel}>
		<Icon icon={icon} styledAs={styledAs} iconSize={iconSize} />
	</IconButtonStyled>
);

IconButton.propTypes = {
	iconSide: '2rem',
	styledAs: 'normal',
};

IconButton.propTypes = {
	ariaLabel: PropTypes.string.isRequired,
	icon: PropTypes.func.isRequired,
	iconSize: PropTypes.string,
	styledAs: PropTypes.string,
};

export default IconButton;
