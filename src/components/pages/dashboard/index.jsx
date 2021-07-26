import React, { Fragment } from 'react';

import DashboardLayout from 'templates/dashboard-layout';
import tiles from 'js/tiles';
import profileImg from 'assets/profilePic.png';

const Dashboard = () => (
	<Fragment>
		<DashboardLayout tiles={tiles} name={'Amy'} profileImg={profileImg} />
	</Fragment>
);

export default Dashboard;
