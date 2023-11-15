import { Roboto, Exo_2 } from 'next/font/google';

export const roboto = Roboto({
	subsets: ['latin'],
	weight: ['500'],
	variable: '--font-roboto',
});

export const exo2 = Exo_2({
	subsets: ['latin'],
	weight: '700',
	variable: '--font-exo2',
});
