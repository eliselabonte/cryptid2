const { UserPost } = require('../models');

const userPostData = [
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

const seedUserPosts = () => UserPost.bulkCreate(userPostData);

module.exports = seedUserPosts;
