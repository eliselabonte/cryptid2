const { FavPost } = require('../models');

const favPostData = [
    {
        user_id: 1,
        post_id: 5,
    },
    {
        user_id: 3,
        post_id: 5,
    },
    {
        user_id: 2,
        post_id: 7,
    },
    {
        user_id: 3,
        post_id: 2,
    },
    {
        user_id: 3,
        post_id: 3,
    }
];

const seedFavPosts = () => FavPost.bulkCreate(favPostData);

module.exports = seedFavPosts;
