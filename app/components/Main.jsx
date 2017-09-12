var React = require('react');
var Nav = require('Nav');
var Footer = require('Footer');



var Main = (props) => {
    return (
        <div className="app-body">
            <Nav />
            <div className="content">
                {props.children}
            </div>
            <Footer />
        </div> 
    )
};

module.exports = Main;