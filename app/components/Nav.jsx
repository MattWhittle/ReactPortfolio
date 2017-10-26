var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    render: function() {
            return (
            <div>
                <div className="title-bar" data-responsive-toggle="main-menu" data-hide-for="medium">
                    <button className="menu-icon align-right" type="button" data-toggle="main-menu"></button>
                </div>
                <div className="top-bar" id="main-menu">
                    <div className="top-bar-left">
                        <ul className="dropdown menu" data-dropdown-menu>
                            <li className="menu-text"><img id="site-logo" src="/images/logo.png" /></li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                        <ul className="vertical medium-horizontal menu">
                            <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Home</IndexLink></li>
                            <li><Link to="/contact" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Contact</Link></li>
                        
                        </ul>
                    </div>
                </div>
            </div>
    );
    }
});

module.exports = Nav;


/*var Nav = React.createClass({
    render: function(){
        return (
            <div >
                <h2>Nav Component</h2>
                <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
            </div>
        );
    }
});*/
