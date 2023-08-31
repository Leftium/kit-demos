import { USERFRONT_API_KEY } from '$env/static/private';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function callUserFrontApi(url: string, payload: unknown, optionsArg: any = {}) {
	const options = {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${USERFRONT_API_KEY}`
		},
		body: JSON.stringify(payload),
		...optionsArg
	};
	if (options.origin) {
		options.headers.origin = options.origin;
		delete options.origin;
	}
	console.log('url = ', url);
	console.log('options =', options);

	const response = await fetch(url, options);
	const json = await response.json();

	if (response.status !== 200) {
		console.log('ERROR!', { json });
		const errorMessage =
			`${json.statusCode} (${json.error.type}): ${json.message}\n\n` +
			`${options.method} ${url} payload = ${JSON.stringify(payload, null, 4)}`;
		throw new Error(errorMessage);
	}
	console.log('SUCCESS', { json });
	return json;
}
