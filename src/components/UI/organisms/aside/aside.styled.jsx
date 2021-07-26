import styled from 'styled-components';
import { devices } from 'js/devices';

export const AsideStyled = styled.aside`
	background-color: ${({ theme }) => theme.aside.bg};
`;

export const NameStyled = styled.span`
	font-size: 2.2rem;
	color: ${({ theme }) => theme.profile.name};
`;

export const ProfileImage = styled.div`
	clip-path: circle(42% at 45% 45%);

	@media ${devices.mobileM} {
		& > img {
			display: none;
		}
	}

	@media ${devices.laptop} {
		& > img {
			clip-path: circle(40% at 50% 50%);
			width: 100%;
			height: 100%;
		}
	}
`;
