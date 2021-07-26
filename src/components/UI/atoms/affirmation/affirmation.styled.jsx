import styled from 'styled-components';

import { devices } from 'js/devices';

export const AffirmationStyled = styled.blockquote`
	font-family: 'Caveat', cursive;
	font-size: 2.2rem;
	text-align: end;

	@media ${devices.mobileL} {
		display: none;
	}
`;
