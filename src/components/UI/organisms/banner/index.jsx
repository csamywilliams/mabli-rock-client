import React from 'react';
import PropTypes from 'prop-types';
import { BannerStyled } from './banner.styled';

const Banner = ({ children }) => <BannerStyled>{children}</BannerStyled>;

Banner.propTypes = {
	children: PropTypes.shape().isRequired,
};

export default Banner;
