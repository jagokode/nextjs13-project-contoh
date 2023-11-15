import Link from 'next/link';

export default function Navbar() {
	return (
		<nav>
			<ul className="flex gap-3">
				<li>
					<Link
						href="/"
						className="font-roboto font-bold text-orange-800 hover:text-orange-500 hover: shadow-md"
					>
						JagoGamer
					</Link>
				</li>
				<li className="ml-auto">
					<Link
						href="/review"
						className="text-orange-800 hover:text-orange-500"
					>
						Reviews
					</Link>
				</li>
				<li>
					<Link
						href="/about"
						prefetch={false}
						className="text-orange-800 hover:text-orange-500"
					>
						About
					</Link>
				</li>
			</ul>
		</nav>
	);
}
