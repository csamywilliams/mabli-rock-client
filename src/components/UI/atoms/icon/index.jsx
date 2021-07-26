import React from 'react';
import PropTypes from 'prop-types';

import { IconStyled } from './icon.styled';
import { IconContext } from 'react-icons';

const Icon = ({ icon, iconSize }) => {
	const IconComponent = icon;

	return (
		<IconStyled>
			<IconContext.Provider value={{ size: iconSize }}>
				<IconComponent />
			</IconContext.Provider>
		</IconStyled>
	);
};

Icon.propTypes = {
	iconSide: '2rem',
};

Icon.propTypes = {
	icon: PropTypes.func.isRequired,
	iconSize: PropTypes.string,
};

export default Icon;
