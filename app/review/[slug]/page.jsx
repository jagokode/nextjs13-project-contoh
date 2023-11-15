import Heading from '@/components/Heading';
import SharedLinkButton from '@/components/SharedLinkButton';
import { getReview, getSlugs } from '@/lib/reviews';

// generate Static Pages for dynamic routes
export async function generateStaticParams() {
	const slugs = await getSlugs();

	return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
	const review = await getReview(slug);
	return {
		title: review.title,
	};
}

export default async function DetailReviewPage({ params: { slug } }) {
	const data = await getReview(slug);
	const { title, date, image, reviewText } = data;

	return (
		<>
			<Heading>{title}</Heading>
			<div className="flex gap-3 items-baseline">
				<p className="italic pb-2">{date}</p>
				<SharedLinkButton />
			</div>
			<img
				src={image}
				alt={title}
				width={640}
				height={360}
				className="rounded mb-2"
			/>
			<h1 className="text-xl">Review for {title}</h1>
			<article
				dangerouslySetInnerHTML={{ __html: reviewText }}
				className="max-w-screen-sm prose prose-slate"
			/>
		</>
	);
}
