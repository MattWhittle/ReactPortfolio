const React = require('react');

var HomeSlideInRight = React.createClass({
    render: function() {
            return (
                <div className="grid-x projects-content">
                    <div className="medium-6 cell slideInCopy"><h1>cell</h1></div>
                    <div className="medium-6 cell"><img src="/images/slideIn1.jpg" /></div>
                </div> 
            )
    }
});

module.exports = HomeSlideInRight;