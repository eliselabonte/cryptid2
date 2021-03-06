const router = require('express').Router();
const { Tag, Post, PostTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
    console.log(req.params)
    // receive req.query using axios
    try{
        const tags = await Tag.findAll({
        include: [{model: Post}]
        })
        res.json(tags)
    }
    catch{ err => {
        res.status(500).json(err)
        }
    }
});

router.get('/:tagName', async (req, res) => {
  // find a single tag by its `tagName`
    try {
        const tags = await Tag.findAll( {
            where: {
                tag_name: req.params.tagName
            },
            include:  [{model: Post}]
        })
        res.json(tags)
    }
    catch(err) {
        console.error(err);
        res.status(404).json(err)
    }
});

router.post('/', async (req, res) => {
  // create a new tag
    try {
        const newTag = await Tag.create(req.body)
        res.status(200).json(newTag)
    }
    catch (err) {res.status(500).json(err)}
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
    Tag.update(
        req.body,
        {where: { id: req.params.id } 
    }).then((tag) =>    {
        res.status(200).json(tag)
    }).catch((err) => res.status(500).json(err))
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
    try {
        const tag = await Tag.destroy({
        where: {id: req.params.id}
        })
        if (!tag) {
        res.status(404).json({ message: 'no tag found with that id.'})
        }
        else    {
            res.status(200).json(tag)
        }
    }
    catch {
        res.status(500).json(err);
    }
});

module.exports = router;
