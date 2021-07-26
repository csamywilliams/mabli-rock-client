import React from 'react';
import { screen } from '@testing-library/react';
import { render } from '__testHelpers__/test-utils';

import TileRow from '../index';

const MockComponent = () => <div>Test</div>;

const tiles = [
	{
		ariaLabel: 'Add tile1',
		name: 'Tile1',
		page: 'Tile',
		icon: MockComponent,
		styledAs: 'journal',
	},
	{
		ariaLabel: 'Add tile2',
		name: 'Tile2',
		page: 'Tile',
		icon: MockComponent,
		styledAs: 'journal',
	},
];

const setup = () => render(<TileRow tiles={tiles} />);

describe('TileRow component', () => {
	it('should render the tile row component', () => {
		setup();

		const [firstTile, secondTile] = tiles;

		screen.getByText(firstTile.name);
		screen.getByText(secondTile.name);

		screen.getByRole('button', {
			name: firstTile.ariaLabel,
		});

		screen.getByRole('button', {
			name: secondTile.ariaLabel,
		});
	});
});
