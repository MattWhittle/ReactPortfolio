var React = require('react');
const ProjectsSlideInRight = require('app/components/Projects/ProjectsSlideInRight');


var Projects = React.createClass({
    render: function() {
            return (
                <div>
                   <h1>Projects</h1>
                   <ProjectsSlideInRight />
                   <ProjectsSlideInRight />
                   <ProjectsSlideInRight />
                </div> 
            )
    }
});

module.exports = Projects;