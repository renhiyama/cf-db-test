import { column, defineDb, defineTable } from 'astro:db';

// Define your tables here
const Posts = defineTable({
  columns: {
    title: column.text(),
    id: column.text(),
    content: column.text(),
  }
});

// https://astro.build/db/config
export default defineDb({
  tables: { Posts }
});
