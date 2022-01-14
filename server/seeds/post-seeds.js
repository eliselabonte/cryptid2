const { Post, Tag, User } = require('../models');

const seedPosts = async () => {

  const randomCalc = (array) => array[Math.floor(Math.random() * array.length)].id;
  const [ users, tags ] = await Promise.all([ User.findAll(), Tag.findAll() ])

  const postData = [
    {
      report: "I found myself in the woods late at night last Thursday. I heard a weird noise that sounded like a mix between a cat and a whale. I'm pretty sure it was the mothman because now I have pinkeye...",
      description:"noise that sounded like a mix between a cat and a whale",
      location: "Dallas",
      timeSeen: "2021-01-12 03:45",
      timeFiled: "2021-01-15 15:42:57",
      category_id: 1,
      user_id: randomCalc(users),
      tag_id: randomCalc(tags)
    },
    {
      report: "No one can convince me that my great-uncle is anything other than the reincarnation of Dracula. He hates garlic and he never crosses the threshold of a home. He also never leaves his own home, but that's only coincedental.",
      description:"he's my great-uncle, so, like, old?",
      location: "Alaska",
      timeSeen: null,
      timeFiled: "2020-11-05 12:16:32",
      category_id: 1,
      user_id: randomCalc(users),
      tag_id: randomCalc(tags)
    },
    {
      report: "I saw a golumn-like creature under the Zakim Bridge last night. It asked me for change for the bus, but I'm pretty sure it was going to use it on drugs.",
      description:"golumn-like creature",
      location: "Boston",
      timeSeen: "2019-04-23 16:37",
      timeFiled: "2019-04-23 06:35:03",
      category_id: 1,
      user_id: randomCalc(users),
      tag_id: randomCalc(tags)
    },
    {
      report: "A bog body was discovered last week in the bog near my gran's house. It looks a lot to me like a classic reptillian. They found it when they were mining for pete in the highlands. Pete the moss, not the person...",
      description:"tall, lizard-like. long fingernails. ugly",
      location: "Glasgow",
      timeSeen: "2021-08-12 12:30",
      timeFiled: "2021-08-17 15:42:57",
      category_id: 4,
      user_id: randomCalc(users),
      tag_id: randomCalc(tags)
    },
    {
      report: "My family home is being haunted by some douche bag that looks like Popeye. I can hear him talking about spinach every night while we eat dinner. It's disgusting. I've always been more of a kale person myself.",
      description:"bald, short, with one bum eye. Always holding an unlit pipe in his mouth",
      location: "New Orleans",
      timeSeen: null,
      timeFiled: "2021-01-15 15:42:57",
      category_id: 2,
      user_id: randomCalc(users),
      tag_id: randomCalc(tags)
    },
    {
      report: "I know this sounds crazy, but I was abducted. Everything is different now. I can't focus on anything and I keep seeing this owl following me everywhere. It all started a few months ago after I was experiencing this very extreme insomnia. The owl first appeared to me and then I blacked out. When I woke up, I was on a lab table and there were these two figures standing above me. I couldn't make sense of the noise they were making but I remember their big, glassy eyes and skinny heads.",
      description:"yellow skin, small head, big black eyes",
      location: "Mystic, Connecticut",
      timeSeen: "2021-08-15 00:48:29",
      timeFiled: "2021-11-30 13:22:00",
      category_id: 3,
      user_id: randomCalc(users),
      tag_id: randomCalc(tags)
    },
    {
      report: "My librarian is definitely with the Men in Black. I don't know if this counts as a cryptid or as an alien, but she seems more of the Will Smith MIB persuasion than the other kind.",
      description:"small frame, BIG glasses",
      location: "Bath, Maine",
      timeSeen: null,
      timeFiled: "2021-12-07 10:25:42",
      category_id: 3,
      user_id: randomCalc(users),
      tag_id: randomCalc(tags)
    },
    {
      report: "I met this guy this one time who said he went camping and Bigfoot shook his tent to keep him up all night. He said it smelled like a swamp and must have been at least 8 ft tall to be able to reach the top of his tent.",
      description:"tall, hairy, stinky. Ape-like hands",
      location: "Dallas",
      timeSeen: "2021-01-12 03:45",
      timeFiled: "2021-01-15 15:42:57",
      category_id: 1,
      user_id: randomCalc(users),
      tag_id: randomCalc(tags)
    },
    {
      report: "not sure if this is the right spot to post this, but there's something weird with my bootcamp instructors. One of them is constantly mountain biking and the other one is just named 'Bobby'. That's weird, right?",
      description:"web developers. it's terrible.",
      location: "University of New Hampshire",
      timeSeen: null,
      timeFiled: "2021-09-06 19:20",
      category_id: 4,
      user_id: randomCalc(users),
      tag_id: randomCalc(tags)
    },
    {
      report: "The ice cream man in my neighborhood is a rascal. Always getting kids worked up and playing his music too loud. If I had my way, there wouldn't be music! or ice cream. Man I\'m sad.",
      description:"cheery, colorful, pistachio-flavored",
      location: "Phippsburg, ME",
      timeSeen: "2022-01-02 16:00:00",
      timeFiled: "2022-01-06 19:10:52",
      category_id: 4,
      user_id: 4,
      tag_id: 9
    },
    {
      report: "There is a thing that watches my apartment from the tree line. I only ever see it during snow storms, but it's been a cold winter so I've seen it a lot recently. Its eyes glow blue and it has a spikey crown growing from its head. I keep feeling like it's going to turn me into one of them.",
      description:"White, walks upright, glowing blue eyes",
      location: "Bath, ME",
      timeSeen: "2021-12-20 05:22:00",
      timeFiled: "2022-01-07 14:21:37",
      category_id: 1,
      user_id: 4,
      tag_id: 6
    }
  ];

  try {
    await Post.bulkCreate(postData, { logging: console.log });
  }
  catch (err) {
    console.error(err);
    throw err;
  }

};


module.exports = seedPosts;

