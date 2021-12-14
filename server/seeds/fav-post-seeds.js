const { FavPost } = require('../models');

const favPostData = [
    {
        user_id: 1,
        post_id: 1,
    },
    {
        user_id: 3,
        post_id: 1,
    },
    {
        user_id: 2,
        post_id: 2,
    },
    {
        user_id: 3,
        post_id: 2,
    },
    {
        user_id: 3,
        post_id: 2,
    }
];

const seedFavPosts = () => FavPost.bulkCreate(favPostData);

module.exports = seedFavPosts;
