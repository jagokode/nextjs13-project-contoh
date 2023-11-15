import Navbar from '@/components/Navbar';
import './global.css';
import { exo2, roboto } from './fonts';

export const metadata = {
	generator: 'Nextjs',
	title: {
		default: 'Jago Gamer',
		template: '%s | Jago Gamer',
	},
	description: 'Only the best jago games, reviewed for you',
	keywords: ['Nextjs', 'Jago', 'Gamer'],
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${roboto.variable} ${exo2.variable}`}>
			<body className="bg-gray-100 flex flex-col min-h-screen px-4 py-2">
				<header>
					<Navbar />
				</header>
				<main className="grow py-3">{children}</main>
				<footer className="border-t py-3 text-center text-slate-500 text-xs">
					Game data and images courtesy of{' '}
					<a
						href="https://rawg.io"
						target="_blank"
						className="text-orange-800 hover:text-orange-500"
					>
						RAWG
					</a>
				</footer>
			</body>
		</html>
	);
}
