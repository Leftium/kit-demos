import { USERFRONT_API_KEY } from '$env/static/private';

export async function callUserFrontApi(url: string, payload: unknown, optionsArg = {}) {
	const options = {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			origin: 'http://localhost:5173',
			Authorization: `Bearer ${USERFRONT_API_KEY}`
		},
		body: JSON.stringify(payload),
		...optionsArg
	};

	const response = await fetch(url, options);
	const json = await response.json();

	if (response.status !== 200) {
		console.log('ERROR!', { json });
		const errorMessage = `${json.statusCode} (${json.error.type}): ${json.message}\n
			${options.method} ${url} payload = ${JSON.stringify(payload, null, 4)}`;
		throw new Error(errorMessage);
	}
	console.log('SUCCESS', { json });
	return json;
}
