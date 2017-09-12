var React = require('react');
var {Link, IndexLink} = require('react-router');

var Footer = React.createClass({
    render: function() {
            return (
            <div id="footer">
                <p>&copy; 2017 Matt Whittle<br/>
                <a href="https://github.com/mattwhittle"><i className="fi-social-github social-icon"></i></a>
                <a href="https://www.linkedin.com/in/matt-whittle/"><i className="fi-social-linkedin social-icon"></i></a>
                <a href="mailto:matt.v.whittle@gmail.com"><i className="fi-mail social-icon"></i></a>
                </p>
            </div>
    );
    }
});

module.exports = Footer;