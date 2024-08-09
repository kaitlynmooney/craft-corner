const db = require('../config/connection');
const { User, Craft, Project } = require('../models');
const userSeeds = require('./user.json');
const craftSeeds = require('./craft.json');
const projectSeeds = require('./project.json')
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('User', 'users');

    await User.create(userSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});

db.once('open', async ()=>{
    try {
        await cleanDB('Craft','crafts');

        await Craft.create(craftSeeds);

    } catch (err) {
        console.error(err);
        process.exit(1);
    } 
    console.log('Crafts have been seeded')
    process.exit(0)
});

db.once('open', async ()=>{
    try {
        await cleanDB('Project', 'projects');

        await Project.create(projectSeeds);
    } catch(err) {
        console.error(err);
        process.exit(1)
    }
    console.log('Projects have been seeded!')
    process.exit(0)
});
