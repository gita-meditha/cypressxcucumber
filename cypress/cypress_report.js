const report = require('multiple-cucumber-html-reporter');
const os = require("os");
const hostname = os.hostname();
const platform = os.platform();
const release = os.release();
const datetime = new Date();

report.generate({
  jsonDir: 'cypress/reports/results/',
  reportPath: 'cypress/reports/',
  metadata: {
    browser: {
      name: 'chrome',
      version: '79',
    },
    device: hostname,
    platform: {
      name: 'osx',
      version: '10.15.2',
    },
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'Custom project' },
      { label: 'Device', value: hostname },
      { label: 'Platform', value: platform },
      // { label: 'Release', value: '1.2.3' },
      // { label: 'Cycle', value: 'B11221.34321' },
      { label: 'Date', value: datetime }
    ],
  },
})
