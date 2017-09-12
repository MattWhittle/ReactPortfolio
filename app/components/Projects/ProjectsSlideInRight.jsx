const React = require('react');

var HomeSlideInRight = React.createClass({
    render: function() {
            return (
                <div className="row">
                    <div className="small-centered medium-6">
                    <div className="medium-6 column slideInCopy">COLUMN</div>
                    <div className="medium-6 column"><img src="/images/slideIn1.jpg" /></div>
                    </div>
                </div> 
            )
    }
});

module.exports = HomeSlideInRight;