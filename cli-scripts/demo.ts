import { moduleA, moduleAB } from '$lib/module-a';
import * as dotenv from 'dotenv';

dotenv.config(); // Load the environment variables
const PUBLIC_ENV = process.env.PUBLIC_ENV;

console.log({ moduleA, moduleAB, PUBLIC_ENV });
