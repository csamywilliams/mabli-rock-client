import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '__testHelpers__/test-utils';
import Dashboard from '.';

test('renders a dashboard', () => {
	render(<Dashboard />);

	expect(screen.getByText(/journal/i)).toBeInTheDocument();
});
