const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const {MongoClient} = require('mongodb');

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function main() {
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useUnifiedTopology: true });
  
  try {
    // Connect to the MongoDB cluster
    await client.connect();
    
    // Make the appropriate DB calls
    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
  /**
   * Uncomment the line below to connect to MongoDB once URI is set
   */
// main().catch(console.error);   

const app = express(); 
const port = process.env.PORT || 4000;
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Behold The MEVN Stack!'
  });
});
 
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
