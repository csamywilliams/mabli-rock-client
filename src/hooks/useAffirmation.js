import { useEffect, useState } from 'react';

const useAffirmation = () => {
	const [affirmation, setAffirmation] = useState('');

	useEffect(() => {
		let mounted = true;

		fetch('/test')
			.then((response) => response.json())
			.then(({ data }) => {
				if (mounted) {
					setAffirmation(data);
				}
			})
			.catch((e) => console.log('error', e));

		return () => {
			mounted = true;
		};
	}, []);

	return {
		affirmation,
	};
};

export default useAffirmation;
