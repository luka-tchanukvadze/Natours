const cron = require('node-cron');
const Tour = require('../models/tourModel');

// Schedule a task to run at midnight every 4 days.
cron.schedule('0 0 */4 * *', async () => {
  console.log('Running cron job: Pinging database...');
  try {
    await Tour.findOne();
    console.log('Cron job success: Database pinged successfully.');
  } catch (err) {
    console.error('Cron job failed: Could not ping database.', err);
  }
});

console.log('Cron job for database keep-alive scheduled.');
