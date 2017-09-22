var React = require('react');


var HomeHero = React.createClass({
    render: function() {
            return (
                <div id="hero-image">
                    <div id="hero-bgcolor">
                        <div id="hero-caption">
                            <h1>Matt Whittle</h1>
                            <h4>web developer</h4>
                            <a href="https://github.com/mattwhittle"><i className="fi-social-github social-icon"></i></a>
                            <a href="https://www.linkedin.com/in/matt-whittle/"><i className="fi-social-linkedin social-icon"></i></a>
                            <a href="mailto:matt.v.whittle@gmail.com"><i className="fi-mail social-icon"></i></a>
                        </div>
                    </div> 
                </div>
            )
    }
});

module.exports = HomeHero;