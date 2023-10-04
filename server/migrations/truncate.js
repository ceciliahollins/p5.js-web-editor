/* eslint-disable */
import slugify from 'slugify';

const dotenv = require('dotenv');
dotenv.config();

import Project from '../models/project';

Project.find(
  {},
  {},
  {
    timeout: true
  }
)
  .cursor()
  .eachAsync((project) => {
    console.log(project.name);
    if (project.name.length < 256) {
      console.log('Project name is okay.');
      return Promise.resolve();
    }
    project.name = project.name.substr(0, 255);
    project.slug = slugify(project.name, '_');
    return project.save().then(() => {
      console.log('Updated sketch slug to: ' + project.slug);
    });
  })
  .then(() => {
    console.log('Done iterating over every sketch.');
    process.exit(0);
  });
