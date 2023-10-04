/* eslint-disable */

import User from '../models/user';
import { listObjectsInS3ForUser } from '../controllers/aws.controller';

User.find({}, {}, { timeout: true })
  .cursor()
  .eachAsync((user) => {
    console.log(user.id);
    if (user.totalSize !== undefined) {
      console.log('Already updated size for user: ' + user.username);
      return Promise.resolve();
    }
    return listObjectsInS3ForUser(user.id)
      .then((objects) => {
        return User.findByIdAndUpdate(user.id, {
          $set: { totalSize: objects.totalSize }
        });
      })
      .then(() => {
        console.log('Updated new total size for user: ' + user.username);
      });
  })
  .then(() => {
    console.log('Done iterating over every user');
    process.exit(0);
  });
