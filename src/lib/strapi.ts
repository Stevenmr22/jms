interface Props {
	endpoint: string;
	query?: Record<string, string>;
	wrappedByKey?: string;
	wrappedByList?: boolean;
}

export default async function fetchApi<T>({
	endpoint,
	query,
	wrappedByKey,
	wrappedByList,
}: Props): Promise<T> {
	if (endpoint.startsWith('/')) {
		endpoint = endpoint.slice(1);
	}

	const url = new URL(`${import.meta.env.STRAPI_URL}/api/${endpoint}`);

	if (query) {
		for (const [key, value] of Object.entries(query)) {
			url.searchParams.append(key, value);
		}
	}

	const res = await fetch(url.toString(), {
		headers: {
			Authorization: `Bearer ${import.meta.env.STRAPI_API_TOKEN}`,
			'Content-Type': 'application/json',
		},
	});

	if (!res.ok) {
		throw new Error(
			`Error fetching ${endpoint}: ${res.status} ${res.statusText}`,
		);
	}

	let data = await res.json();

	if (wrappedByKey) {
		data = data[wrappedByKey];
	}

	if (wrappedByList) {
		data = data[0];
	}

	return data as T;
}
