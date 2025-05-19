export const categoryDisplayMap: Record<string, string> = {
	banos : 'Baños',
	cocina : 'Cocina',
	'ceramica-porcelanato': 'Cerámica y Porcelanato',
	revestimientos: 'Revestimientos',
	griferia: 'Grifería',
	'mamparas-puertas-ventanas': 'Mamparas puertas y ventanas',
	otros: 'Otros',
};

export function getDisplayCategoryName(categoryName: string): string {
	const normalizedName = categoryName.toLowerCase();
	return categoryDisplayMap[normalizedName] || categoryName;
}
