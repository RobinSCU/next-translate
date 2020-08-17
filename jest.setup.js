const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')
require('mutationobserver-shim')

Enzyme.configure({ adapter: new Adapter() })
