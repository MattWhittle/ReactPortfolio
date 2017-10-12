var React = require('react');


var Contact = React.createClass({
    render: function() {
            return (
                <div className="contact-page">
                   <h1 className="page-headline">Contact</h1>
                   <div className="contact-info">
                    <a href="https://github.com/mattwhittle"><i className="fi-social-github social-icon">  View My Github</i></a><br />
                    <a href="https://www.linkedin.com/in/matt-whittle/"><i className="fi-social-linkedin social-icon">  View My LinkedIn</i></a><br />
                    <a href="mailto:matt.v.whittle@gmail.com"><i className="fi-mail social-icon">  Email Me</i></a><br />
                   </div>
                </div> 
            )
    }
});

module.exports = Contact;