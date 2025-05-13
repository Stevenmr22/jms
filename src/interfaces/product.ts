import type Category from './category';

export default interface Product {
	id: number;
	documentId: string;
	name: string;
	description: string;
	slug: string;
	image?: string;
	categories?: Category[];
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
}
