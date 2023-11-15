import Heading from '@/components/Heading';
import getReview from '@/lib/reviews';

export default async function LordsMobilePage() {
	const data = await getReview('lords-mobile');
	const { title, date, image, reviewText } = data;

	return (
		<>
			<Heading>{title}</Heading>
			<p className="italic pb-2">{date}</p>
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
