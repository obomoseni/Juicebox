const express = require('express');
const tagsRouter = express.Router();
const { getAllTags, getPostsByTagName } = require('../db');

tagsRouter.use((req, res, next) => {
    console.log("A request is being made to /tags");

    next();

    tagsRouter.get('/', (req, res) => {
        res.send({
            tags: []
        });
    });
});

tagsRouter.get('/', async (req, res) => {
    const tags = await getAllTags();
    res.send({
        tags
    });
});

tagsRouter.get('/:tagName/posts', async (req, res, next) => {
    req.params.tagName;
    try {
      const posts = await getPostsByTagName();
      res.send({
        posts: posts
    });
    } catch ({ name, message }) {
    }
  });

module.exports = tagsRouter;