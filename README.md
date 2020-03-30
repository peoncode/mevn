## MEVN (MongoDB-Express-Vue-Node) App stack

### How to setup your MEVN (MongoDb-Express-Vue-Node) Stack

### Prerequisites

- Have Node.js (v.12.x) installed

### Steps

1. Create a folder for your app (ex: "myapp")
2. `cd` into myapp folder
3. Initialize project:   `npm init -y`
4. Install dependencies:   `npm install express morgan cors body-parser`

### Setup Express (the REST API server)

1. Inside app folder, create a file `index.js` and paste contents:
```
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => {
	res.json({
		message: 'Behold The MEVN Stack!'
	});
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
	  console.log(`listening on ${port}`);
});
```
2. Start Express server:  `node index.js`
3. Browse to URL:  http://localhost:4000

### Install & Setup Vue client (the Front-end Client)

1. Install vue-cli:  `npm install @vue/cli`
2. Use vue-cli:   `vue create client`
3. Manually select features
	- Select Router & Linter/Formatter
	- ESLint + Airbnb config
	- Select "Lint on save" & "Lint and fix on commit"
	- In package.json
	- Save this as a preset for future projects?  N
4. `cd` into `client` folder inside your app
5. Start Vue client:   `npm run serve`
6. Browse to URL:  http://localhost:8080/


### Install & Setup MongoDB Atlas (the no-sql cloud database)

1. Install MongoDB:  `npm install mongodb`
2. Sign up for MongoDB Atlas (http://bit.ly/MDB_Atlas)
3. Create cluster, connection user & password
3. Set up connection URI in Node.js app (`index.js`)
```
const {MongoClient} = require('mongodb');
const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });
```


## References:

- https://vegibit.com/vue-js-express-tutorial/
- https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb--how-to-get-connected-to-your-database
