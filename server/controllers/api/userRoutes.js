const router = require('express').Router();
const { User } = require('../../models');

router.get('/id', async (req, res) => {
  try {
    const user = await Post.findAll({
      where : {id: req.params.id}
    })
    res.status(200).json(user)
  }
  catch(err)  {
    res.status(500).json(err)
  }
})

router.post('/', async (req, res) => {
  try {
    let userData = await User.findOne({ where: { username: req.body.username } });
    if (userData === null) {
      const {username} = req.body
      userData = await User.create({username});
      res.status(200).json(userData);
      return;
    }
  }catch (err) {
    res.status(400).json(err);
  }
});

router.put('/username', async (req, res) => {
  User.update(
      req.body,
      {where: { username: req.params.username } 
  })
  .then((post) => res.status(200).json(post))
  .catch((err) => {
    console.error(err);
    res.status(500).json(err.toString())})
})

module.exports = router;
