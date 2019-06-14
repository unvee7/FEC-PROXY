// // setup file ES6
// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// configure({ adapter: new Adapter() });

// setup file ES5
var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');
const allTests = require('./allTests/functions.test');

const allReviewsDaysAgo = allTests.contentTests.getDaysOld();

test('ensures all test are sorted by age', () => {
  expect(allTests.contentTests.getDaysOld()).tobe(allReviewsDaysAgo);
})

enzyme.configure({ adapter: new Adapter() });
