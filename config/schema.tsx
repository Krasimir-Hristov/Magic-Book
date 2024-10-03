import { json, pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const BookData = pgTable('storyData', {
  id: serial('id').primaryKey(),
  storyId: varchar('storyId'),
  storySubject: text('storySubject'),
  storyType: varchar('storyType'),
  ageGroup: varchar('ageGroup'),
  imageStype: varchar('imageStyle'),
  output: json('output'),
  coverImage: varchar('coverImage'),
});
