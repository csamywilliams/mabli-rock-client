import styled from 'styled-components';

export const ButtonStyled = styled.button`
	font-size: 1.6rem;
	text-align: center;
	color: ${({ theme }) => theme.button.color};
	background-color: ${({ theme }) => theme.button.bg};
	border: 1px solid ${({ theme }) => theme.button.border};
	border-radius: 1rem;
	padding: 0.5rem 2rem;
	cursor: pointer;
	text-transform: uppercase;

	&:hover {
		background-color: ${({ theme }) => theme.button.hover.bg};
		border: 1px solid ${({ theme }) => theme.button.hover.border};
		color: ${({ theme }) => theme.button.hover.color};
	}
`;
