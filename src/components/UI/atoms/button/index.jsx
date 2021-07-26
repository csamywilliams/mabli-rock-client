import React from 'react';
import PropTypes from 'prop-types';

import { ButtonStyled } from './button.styled';

const Button = ({ title }) => <ButtonStyled>{title}</ButtonStyled>;

Button.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Button;
