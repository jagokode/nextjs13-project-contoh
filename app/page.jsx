import Heading from '@/components/Heading';
import { getFeaturedReview } from '@/lib/reviews';
import Link from 'next/link';

export default async function HomePage() {
	const latestReview = await getFeaturedReview();

	return (
		<>
			<Heading>Jago Gamer</Heading>
			<p className="pb-3">Only the best jago games, reviewed for you</p>
			<div className="bg-white w-80 rounded border shadow hover:shadow-xl sm:w-full">
				<Link
					href={`/review/${latestReview.slug}`}
					className="flex flex-col sm:flex-row"
				>
					<img
						src={latestReview.image}
						alt={latestReview.title}
						width={320}
						height={180}
						className="rounded-t sm:rounded-l sm:rounded-r-none"
					/>
					<h2 className="font-semibold font-roboto py-1 text-center sm:px-2">
						{latestReview.title}
					</h2>
				</Link>
			</div>
		</>
	);
}
