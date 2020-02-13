const Adapter = require('enzyme-adapter-react-16');
const Enzyme = require('enzyme');
require('jest-styled-components');

Enzyme.configure({ adapter: new Adapter() });
