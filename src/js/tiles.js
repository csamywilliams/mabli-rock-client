import { SiLivejournal } from 'react-icons/si';
import { GiStairsGoal } from 'react-icons/gi';
import { FaTasks } from 'react-icons/fa';

const tiles = [
	{
		ariaLabel: 'Add Journal entry',
		name: 'Journal',
		page: 'journal',
		icon: SiLivejournal,
		styledAs: 'journal',
	},
	{
		ariaLabel: 'Add new goal',
		name: 'Goals',
		page: 'goals',
		icon: GiStairsGoal,
		styledAs: 'goals',
	},
	{
		ariaLabel: 'Add new task',
		name: 'Tasks',
		page: 'tasks',
		icon: FaTasks,
		styledAs: 'tasks',
	},
];

export default tiles;
