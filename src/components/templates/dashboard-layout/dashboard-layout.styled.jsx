import styled from 'styled-components';

export const MainStyled = styled.main`
	display: flex;
	flex-direction: column;
	width: 100vw;
	background: ${({ theme }) => theme.content.bg};
	border-top-left-radius: 1%;
`;

export const ContentStyled = styled.div`
	display: flex;
	height: 100vh;

	& > aside {
		flex-basis: 10vw;
		margin: 2%;
	}
`;
