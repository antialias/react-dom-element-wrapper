const assert = require('assert');
const React = require('react');
const jsdom = require('jsdom').jsdom;
const enzyme = require('enzyme');
const DOMElementWrapper = require('..');
const document = jsdom();
describe('DOMElementWrapper', function () {
    beforeEach(function () {
        global.document = document;
        global.window = document.defaultView;
    });
    it('should append the child inside the react element', function () {
        const div = document.createElement('div');
        div.className = 'inner';
        div.innerHTML = 'hello world';
        const wrapper = enzyme.mount(React.createElement(DOMElementWrapper, {}, div));
        assert.equal(wrapper.text(), 'hello world');
    });
});
