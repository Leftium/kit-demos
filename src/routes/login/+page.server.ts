import { redirect } from '@sveltejs/kit';

import { PUBLIC_USERFRONT_GLOBAL_TENANT } from '$env/static/public';

import { callUserFrontApi } from '$lib/common';

const SECONDS_PER_DAY = 24 * 60 * 60;

export const load = async ({ url, cookies }) => {
	const uuid = url.searchParams.get('uuid');
	const token = url.searchParams.get('token');
	const type = url.searchParams.get('type');
	const redirectParam = url.searchParams.get('redirect');

	if (uuid && token && type && redirectParam) {
		const payload = {
			token,
			uuid,
			tenantId: PUBLIC_USERFRONT_GLOBAL_TENANT
		};

		try {
			const { tokens } = (await login(payload)) as LoginResults;

			['access', 'id', 'refresh'].forEach((name) => {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
				cookies.set(`${name}.${PUBLIC_USERFRONT_GLOBAL_TENANT}`, tokens[name].value, {
					path: '/',
					httpOnly: false,
					// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
					maxAge: tokens[name].cookieOptions.expires * SECONDS_PER_DAY
				});
			});
		} catch (error) {
			console.log(error);
			throw new Error('NO LOGIN SORRY');
		}
		console.log('Redirect to home page.');
		throw redirect(302, '/');
	}

	return {};
};

type LoginResults = {
	tokens: Record<string, { value: string; cookieOptions: { expires: number } }>;
};

async function login(payload: unknown): Promise<unknown> {
	const url = `https://api.userfront.com/v0/auth/link`;
	return await callUserFrontApi(url, payload);
}
