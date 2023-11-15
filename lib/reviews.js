import { readFile, readdir } from 'node:fs/promises';
import matter from 'gray-matter';
import { marked } from 'marked';

export const getSlugs = async () => {
	// read all files in /content/reviews
	const files = await readdir('./content/reviews');

	const slugs = files
		.filter((file) => file.endsWith('.md'))
		.map((file) => file.slice(0, -'.md'.length));
	return slugs;
};

export async function getReview(slug) {
	const text = await readFile(`./content/reviews/${slug}.md`, 'utf-8');
	const {
		content,
		data: { title, date, image },
	} = matter(text);
	const reviewText = marked(content, { headerIds: false, mangle: false });
	return { slug, title, date, image, reviewText };
}

export async function getReviewsList() {
	const slugs = await getSlugs();

	const reviews = [];
	for (const slug of slugs) {
		const review = await getReview(slug);
		reviews.push(review);
	}
	// sorting date
	reviews.sort((a, b) => b.date.localeCompare(a.date));
	return reviews;
}

export async function getFeaturedReview() {
	const reviews = await getReviewsList();
	return reviews[0];
}
