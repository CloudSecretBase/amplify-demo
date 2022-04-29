// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Todo, News, Comment } = initSchema(schema);

export {
  Todo,
  News,
  Comment
};