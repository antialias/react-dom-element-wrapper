'use strict';
const React = require('react');
const DOMElementWrapper = React.createClass({
    render: function () {
        return React.DOM.div({
            className: 'inner', ref: el => this.el = el
        });
    }
});
DOMElementWrapper.prototype.componentDidMount =
DOMElementWrapper.prototype.componentDidUpdate = function () {
    this.el.innerHTML = '';
    this.el.appendChild(this.props.children);
};

DOMElementWrapper.propTypes = {
    children: React.PropTypes.object
};
module.exports = DOMElementWrapper;
