export const categoryDisplayMap: Record<string, string> = {
	banos: 'Baños',
	interior: 'Interior',
	exterior: 'Exterior',
	revestimiento: 'Revestimiento de Paredes',
	griferia: 'Grifería',
	ladrillos: 'Ladrillo',
	'adhesivos-derretidos': 'Adhesivos y Derretidos',
	mamparas: 'Mamparas',
	'puertas-ventanas': 'Puertas y Ventanas',
	fregaderos: 'Fregaderos',
};
export function getDisplayCategoryName(categoryName: string): string {
	const normalizedName = categoryName.toLowerCase();
	return categoryDisplayMap[normalizedName] || categoryName;
}
