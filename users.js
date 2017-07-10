let express = require('express');
let router = express.Router();


let users = [
 {name: 'john', id: '1'},
 {name: 'jane', id: '2'}
];

router.get('/:id', (req, res) => {
  for(let i = 0; i < users.length; i++) {
    if(users[i].id === req.params['id']) {
      res.send(users[i].name);
    } else{
      continue;
    }
  }
})

 module.exports = router;
