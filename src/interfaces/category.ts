// types/category.ts
import type Product from './product';

export default interface Category {
	id: number;
	documentId: string;
	name: string;
	image?: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	products?: Product[];
}
