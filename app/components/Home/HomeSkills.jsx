var React = require('react');


var HomeSkills = React.createClass({
    render: function() {
            return (<div className="row skillsRow">
                        <div className="medium-4 large-4 column skills">
                            <h3>Mastery In:</h3>
                            <ul className="skillsList">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>Wordpress</li>
                                <li>Foundation</li>
                            </ul>
                        </div>
                        <div className="medium-4 large-4 column skills">
                            <h3>Proficient In:</h3>
                            <ul className="skillsList">
                                <li>ReactJS</li>
                                <li>Sass/Scss</li>
                                <li>PHP</li>
                            </ul>
                        </div>
                        <div className="medium-4 large-4 column skills">
                            <h3>Tools:</h3>
                            <ul className="skillsList">
                                <li>Photoshop</li>
                                <li>Visual Studio Code</li>
                                <li>Heroku</li>
                                <li>GitHub</li>
                            </ul>
                        </div>
                        </div>  )
}
});

module.exports = HomeSkills;