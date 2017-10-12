var React = require('react');
const ProjectsSlideInRight = require('app/components/Projects/ProjectsSlideInRight');


var Projects = React.createClass({
    render: function() {
            return (
                <div>
                   <h1 className="page-headline">Projects</h1>
                   <ProjectsSlideInRight title="Search App" description="React app" livelink="http://cryptic-escarpment-56760.herokuapp.com/" githublink="https://github.com/MattWhittle/ReactAssociateSearch" imagesource="/images/searchApp.jpg" />
                   <ProjectsSlideInRight title="Travel blog" description="Wordpress Theme" githublink="https://github.com/MattWhittle/travel-blog-theme" imagesource="/images/travelBlog.jpg" />                   
                   <ProjectsSlideInRight title="Wedding Site" description="HTML & CSS" livelink="https://mattwhittle.github.io/wedding-firstsite/" githublink="https://github.com/MattWhittle/wedding-firstsite" imagesource="/images/weddingSite.jpg" />
                   <ProjectsSlideInRight title="Weather App" description="React app" livelink="http://fierce-citadel-63831.herokuapp.com/#/?_k=h8jeuk" githublink="https://github.com/MattWhittle/reactweather" imagesource="/images/weatherApp.jpg" />
                   <ProjectsSlideInRight title="Timer App" description="React app" livelink="http://thawing-waters-34194.herokuapp.com/#/?_k=nc1qg6" githublink="https://github.com/MattWhittle/ReactTimer" imagesource="/images/timerApp.jpg" />
                </div> 
            )
    }
});

module.exports = Projects;