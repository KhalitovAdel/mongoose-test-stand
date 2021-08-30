import * as mongoose from 'mongoose';
import { TestModel } from './test.schema';

describe('AppController', () => {
  beforeEach(async () => {
    await mongoose.connect('mongodb://localhost:27017/myapp', { use });
  });

  describe('Mongoose', () => {
    it('should return "Hello World!"', async () => {
      const create = await TestModel.create({ name: 'KEK' });
      expect(create.name).toBe('KEK');
      await TestModel.updateOne(
        { _id: create._id },
        { $set: { name: undefined } },
      ).lean(true);

      const updated = await TestModel.findOne({ _id: create._id }).lean(true);

      expect((updated as any).name).toBe('KEK');
    });
  });
});
