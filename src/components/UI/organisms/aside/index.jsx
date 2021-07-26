import React from 'react';
import PropTypes from 'prop-types';
import { AsideStyled, NameStyled, ProfileImage } from './aside.styled';

const Aside = ({ name, profileImg }) => (
	<AsideStyled>
		<ProfileImage>
			<img src={profileImg} alt="profile" width="150" height="150" />
		</ProfileImage>
		<div>
			Hello <NameStyled>{name}</NameStyled>
		</div>
	</AsideStyled>
);

Aside.propTypes = {
	name: PropTypes.string.isRequired,
	profileImg: PropTypes.string.isRequired,
};

export default Aside;
