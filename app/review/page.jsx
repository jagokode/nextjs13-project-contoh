import Link from 'next/link';
import Heading from '@/components/Heading';
import { getReviewsList, getSlugs } from '@/lib/reviews';

export const metadata = {
	title: 'Reviews',
};

export default async function ReviewPage() {
	const reviewsList = await getReviewsList();

	return (
		<>
			<Heading>Reviews</Heading>
			<p className="mb-3">List all the reviews</p>
			<ul className="flex flex-row flex-wrap gap-3">
				{reviewsList.map((review) => (
					<li
						key={review.slug}
						className="bg-white rounded border w-80 shadow hover:shadow-xl"
					>
						<Link href={`/review/${review.slug}`}>
							<img
								src={review.image}
								alt={review.title}
								width={320}
								height={180}
								className="rounded-t"
							/>
							<h2 className="font-semibold font-roboto py-1 text-center">
								{review.title}
							</h2>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
