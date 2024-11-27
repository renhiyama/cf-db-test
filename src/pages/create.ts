import type { APIRoute } from "astro";
import {db, Posts} from "astro:db";

export const GET: APIRoute = async ({ params, request }) => {
  //route exists for production build
  await db.insert(Posts).values({
    title: 'Hello, world!',
    id: 'hello-world',
    content: 'This is a test post.',
  });
  return new Response("Filled in Database!");
};