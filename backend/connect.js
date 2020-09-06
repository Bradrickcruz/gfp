import mongoose from 'mongoose';
import 'dotenv/config.js';

const URL = process.env.DB_URL || 'mongodb://localhost:27017/$gfp';


try {
  mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.set('useFindAndModify', false);
  console.log('MongoDB ativo');
} catch (error) {
  console.log({ error: error });
}
