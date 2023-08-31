import { PUBLIC_USERFRONT_GLOBAL_TENANT } from '$env/static/public';
import { USERFRONT_API_KEY } from '$env/static/private';

export async function load() {
	return { PUBLIC_USERFRONT_GLOBAL_TENANT, USERFRONT_API_KEY };
}
