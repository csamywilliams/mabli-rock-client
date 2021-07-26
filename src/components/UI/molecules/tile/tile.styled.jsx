import styled from 'styled-components';

export const TileStyled = styled.div`
	flex: 1;
	padding: 2%;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	padding: 1rem;
	text-align: center;
	border-radius: 0.5rem;
	margin: 1rem;
	background-color: ${({ theme }) => theme.tiles.bg};
	box-shadow: 0 3px 10px ${({ theme }) => theme.boxShadow};
`;

export const TileContentStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const IconStyled = styled.div`
	clip-path: circle(40% at 50% 50%);

	.icon {
		padding: 2rem;

		&--journal {
			background-color: ${({ theme }) => theme.tiles.tile1.background};
		}

		&--goals {
			background-color: ${({ theme }) => theme.tiles.tile2.background};
		}

		&--tasks {
			background-color: ${({ theme }) => theme.tiles.tile3.background};
		}
	}
`;
