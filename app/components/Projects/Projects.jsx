var React = require('react');
const ProjectsSlideInRight = require('app/components/Projects/ProjectsSlideInRight');


var Projects = React.createClass({
    getInitialState: function() {
        return {
            projects: [{
                id: 1,
                title: "Search App",
                description: "React app",
                livelink: "http://cryptic-escarpment-56760.herokuapp.com/",
                githublink: "https://github.com/MattWhittle/ReactAssociateSearch",
                imagesource: "/images/searchApp.jpg"
            },
            {
                id: 2,
                title: "Travel blog",
                description: "Wordpress Theme",
                githublink: "https://github.com/MattWhittle/travel-blog-theme",
                imagesource: "/images/travelBlog.jpg"
            },
            {
                id: 3,
                title: "Wedding Site",
                description: "HTML & CSS",
                livelink: "https://mattwhittle.github.io/wedding-firstsite/",
                githublink: "https://github.com/MattWhittle/wedding-firstsite",
                imagesource: "/images/weddingSite.jpg"
            },
            {
                id: 4,
                title: "Weather App", 
                description: "React app",
                livelink: "http://fierce-citadel-63831.herokuapp.com/#/?_k=h8jeuk",
                githublink: "https://github.com/MattWhittle/reactweather",
                imagesource: "/images/weatherApp.jpg"
            },
            {
                id: 5,
                title: "Timer App",
                description: "React app",
                livelink: "http://thawing-waters-34194.herokuapp.com/#/?_k=nc1qg6",
                githublink: "https://github.com/MattWhittle/ReactTimer",
                imagesource: "/images/timerApp.jpg" 
            }
            ]
        }
    },
    render: function() {
            let {projects} = this.state;

            const renderprojects = ()=> {
                return projects.map((project) => {
                    return (
                        <ProjectsSlideInRight key={project.id} {...project} />
                    );
                });
            };
            return (
                <div>
                   <h1 className="page-headline">Projects</h1>
                   {renderprojects()}
                </div> 
            )
    }
});

module.exports = Projects;