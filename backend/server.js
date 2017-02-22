import express from 'express';
import mongodb from 'mongodb';

const app = express();
const dbUrl = 'mongodb://localhost/crudwithredux';

mongodb.MongoClient.connect(dbUrl, function(err, db) {
  
  app.get('/api/games', (req, res) => {
    
    db.collection('games').find({}).toArray((err, games) => {
      res.json({ games });
    });
  });
  
  app.use((req, res) => {
    res.status(404).json({
      errors: {
        global: "Still working on it. Please try again Later!"
      }
    });
  });
  
  app.listen(8080, () => console.log('Running on localhost:8080'));
  
});


// LEFT OFF HERE = about to create package.json for backend!! 4:00min video 3