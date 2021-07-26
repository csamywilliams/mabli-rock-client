import styled from 'styled-components';

export const IconButtonStyled = styled.button`
	width: 10rem;
	text-align: center;
	color: ${({ theme }) => theme.button.icon.color};
	background-color: ${({ theme }) => theme.button.icon.bg};
	border: 1px solid ${({ theme }) => theme.button.icon.border};
	border-radius: 1rem;
	cursor: pointer;
	text-transform: uppercase;
	box-shadow: ${({ theme }) => theme.button.icon.boxShadow};
	padding-top: 0.3rem;

	&:hover {
		background-color: ${({ theme }) => theme.button.icon.hover.bg};
		border: 1px solid ${({ theme }) => theme.button.icon.hover.border};
		color: ${({ theme }) => theme.button.icon.hover.color};
	}
`;
