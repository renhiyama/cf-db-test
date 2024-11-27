import { db, Posts } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO
	await db.insert(Posts).values({
		title: 'Hello, world!',
		id: 'hello-world',
		content: 'This is a test post.',
	});
}
