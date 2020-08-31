import mongoose from 'mongoose';

const db = 'gfp';
const pw = 'rick';
// const dbURL = `mongodb://localhost:27017/${db}`; <- URL local
const dbURL_Atlas = `mongodb+srv://rick:${pw}@ricktest.ncqqs.gcp.mongodb.net/${db}?retryWrites=true&w=majority`;

try {
  mongoose.connect(dbURL_Atlas, {
    useNewUrlParser: true,
  });
  console.log('MongoDB ativo');
} catch (error) {
  console.log({ error: error });
}
