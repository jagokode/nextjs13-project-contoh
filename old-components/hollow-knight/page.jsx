import Heading from '@/components/Heading';
import getReview from '@/lib/reviews';

export default async function HollowKnightPage() {
	const data = await getReview('hollow-knight');
	const { title, date, image, reviewText } = data;
	return (
		<>
			<Heading>{title}</Heading>
			<img
				src={image}
				alt={title}
				width={640}
				height={360}
				className="rounded mb-2"
			/>
			<p>Review about {title} game.</p>
			<article
				dangerouslySetInnerHTML={{ __html: reviewText }}
				className="max-w-screen-sm prose prose-slate"
			/>
		</>
	);
}
