import mongoose from 'mongoose';

const db = 'gfp';
const dbURL = `mongodb://localhost:27017/${db}`;

try {
  mongoose.connect(dbURL, {
    useNewUrlParser: true,
  });
  console.log('MongoDB ativo');
} catch (error) {
  console.log({ error: error });
}
