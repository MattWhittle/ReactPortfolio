const React = require('react');

var HomeSlideInRight = React.createClass({
    render: function() {
            let {title, description, livelink, githublink, imagesource} = this.props;
            return (
                <div className="grid-x projects-content">
                    <div className="medium-6 cell slideInCopy">
                        <h1>{title}</h1>
                        <h2>{description}</h2>
                        {livelink ? <h3><a href={livelink}>View</a></h3> : ''}
                        <h3><a href={githublink}>Code</a></h3>
                    </div>
                    <div className="medium-6 cell"><img className="project-image" src={imagesource} /></div>
                </div> 
            )
    }
});

module.exports = HomeSlideInRight;