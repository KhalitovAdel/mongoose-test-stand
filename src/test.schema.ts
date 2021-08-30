import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

const TestSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
});

export const TestModel = mongoose.model<{ name: string } & Document>(
  'efwefwef',
  TestSchema,
);
