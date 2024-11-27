import type { APIRoute } from "astro";
import {db, Posts} from "astro:db";

export const GET: APIRoute = async ({ locals }) => {
  //@ts-ignore
  const {env} = locals.runtime || import.meta;
  console.log(env.ASTRO_DB_REMOTE_URL, env.ASTRO_DB_APP_TOKEN);
  //route exists for production build
  await db.insert(Posts).values({
    title: 'Hello, world!',
    id: 'hello-world',
    content: 'This is a test post.',
  });
  return new Response("Filled in Database!");
};