import mongoose from 'mongoose';

const db = 'gfp';
const pw = 'rick';
// const dbURL = `mongodb://localhost:27017/${db}`; <- URL local
// TODO: fazer vir por variavel do sistema
const dbURL_Atlas = `mongodb+srv://rick:${pw}@ricktest.ncqqs.gcp.mongodb.net/${db}?retryWrites=true&w=majority`;

try {
  mongoose.connect(dbURL_Atlas, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.set('useFindAndModify', false);
  console.log('MongoDB ativo');
} catch (error) {
  console.log({ error: error });
}
