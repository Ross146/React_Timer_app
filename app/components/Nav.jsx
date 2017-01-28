var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
    return (
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="menu">
                    <li className="menu-text">React Timer App</li>
                    <li>
                        <IndexLink activeClassName="active-link" to="/">Timer</IndexLink>
                    </li>
                    <li>
                        <Link activeClassName="active-link" to="/countdown">CountDown</Link>
                    </li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li className="menu-text">
                        Created by <a href="https://github.com/Ross146" target="_blank">Ross146</a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

module.exports = Nav;