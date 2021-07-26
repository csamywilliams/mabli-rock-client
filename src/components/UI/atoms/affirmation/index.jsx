import React from 'react';

import useAffirmation from 'hooks/useAffirmation';

import { AffirmationStyled } from './affirmation.styled';

const Affirmation = () => {
	const { affirmation } = useAffirmation();

	return <AffirmationStyled>{affirmation}</AffirmationStyled>;
};

export default Affirmation;
