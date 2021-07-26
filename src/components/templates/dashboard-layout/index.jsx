import React from 'react';
import PropTypes from 'prop-types';

import TileRow from 'organisms/tile-row';
import Banner from 'organisms/banner';
import Aside from 'organisms/aside';

import Affirmation from 'atoms/affirmation';

import { MainStyled, ContentStyled } from './dashboard-layout.styled';

const DashboardLayout = ({ tiles, name, profileImg }) => (
	<div>
		<Banner>
			<Affirmation />
		</Banner>
		<ContentStyled>
			<Aside name={name} profileImg={profileImg} />
			<MainStyled>
				<TileRow tiles={tiles} />
			</MainStyled>
		</ContentStyled>
	</div>
);

DashboardLayout.propTypes = {
	tiles: PropTypes.arrayOf(PropTypes.shape).isRequired,
	name: PropTypes.string.isRequired,
	profileImg: PropTypes.string.isRequired,
};

export default DashboardLayout;
