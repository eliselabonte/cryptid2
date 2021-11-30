const { Creature, Post, Category, User } = require('../models');

const seedCreatures = async () => {

    const randomCalc = (array) => array[Math.floor(Math.random() * array.length)].id;
    const [posts, categories, users] = await Promise.all([Post.findAll(), Category.findAll(), User.findAll()])


    const creatureData = [
        {
            id: randomCalc(),
            cryptid_name: "BigFoot",
            post_id: randomCalc(posts),
            category_id: randomCalc(categories),
            user_id: randomCalc(users)
        },
        {
            id: randomCalc(),
            cryptid_name: "Loch Ness Monster",
            post_id: randomCalc(posts),
            category_id: randomCalc(categories),
            user_id: randomCalc(users)
        },
        {
            id: randomCalc(),
            cryptid_name: "Moth Man",
            post_id: randomCalc(posts),
            category_id: randomCalc(categories),
            user_id: randomCalc(users)
        },
        {
            id: randomCalc(),
            cryptid_name: "Godzilla",
            post_id: randomCalc(posts),
            category_id: randomCalc(categories),
            user_id: randomCalc(users)
        },
        {
            id: randomCalc(),
            cryptid_name: "Grafton Monster",
            post_id: randomCalc(posts),
            category_id: randomCalc(categories),
            user_id: randomCalc(users)
        },
    ];

    try {
        await Creature.bulkCreate(creatureData, { logging: console.log });
    }
    catch (err) {
        console.error(err);
        throw err;
    }
};

module.exports = seedCreatures