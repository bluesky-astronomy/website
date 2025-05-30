export function formatDate(dateString) {
	const date = new Date(dateString);
	return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export const numberFormatter = Intl.NumberFormat('en', {
	notation: 'compact'
});
