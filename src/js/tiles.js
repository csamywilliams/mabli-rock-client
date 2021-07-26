import { SiLivejournal } from 'react-icons/si';
import { GiStairsGoal } from 'react-icons/gi';
import { FaTasks } from 'react-icons/fa';

const tiles = [
	{
		name: 'Journal',
		page: 'journal',
		icon: SiLivejournal,
		styledAs: 'journal',
	},
	{
		name: 'Goals',
		page: 'goals',
		icon: GiStairsGoal,
		styledAs: 'goals',
	},
	{
		name: 'Tasks',
		page: 'tasks',
		icon: FaTasks,
		styledAs: 'tasks',
	},
];

export default tiles;
