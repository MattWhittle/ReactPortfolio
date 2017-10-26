const React = require('react');
const HomeHero = require('app/components/Home/HomeHero');
const Projects = require('../Projects/Projects');
const HomeSkills = require('app/components/Home/HomeSkills');


var Home = React.createClass({
    render: function() {
            return (
                <div>
                    <HomeHero />
                    <Projects />
                </div> 
            )
    }
});

module.exports = Home;