let express = require('express');
let router = express.Router();


let movies = [
 {name: 'star wars', genre: 'fantasy'},
 {name: 'fast n furious', genre: 'action'},
];

router.get('/:genre', (req, res) => {
  for(let i = 0; i < movies.length; i++){
    if(movies[i].genre === req.params['genre']){
      res.send(movies[i].name);
    } else {
      continue;
    }
  }
})

 module.exports = router;
