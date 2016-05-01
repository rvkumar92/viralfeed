var React = require('react');

var Header = React.createClass({
  render(){
    return(
      <nav className="header nav-wrapper">
        <div className="row">
          <div className="col s1 offset-s1"><img src="/images/logo.png" className="circle img-responsive logo" /></div>
          <div className="col s1"><h5 className="BOLD">Viral<span className="green-text">Feed</span></h5></div>
          <div className="col s5">
            <div className="input-field">
              <label for="search"><i className="material-icons">search</i></label>
              <input id="search" type="search" placeholder="Search Viralfeed..."/>
            </div>
          </div>
          <div className="col s1">
            <ul>
              <li><i className="material-icons" id="chat_bubble_outline">chat_bubble_outline</i></li>
              <li><i className="material-icons right" id="notification">add_alert</i></li>
            </ul>
          </div>
          <div className="col s2" style={{height:'0px'}}>
            <ul>
              <li><img src="/images/profile.png" id="profile-pic" className="circle img-responsive"/></li>
              <li><a className="dropdown-button" href="#!" data-activates="dropdown1">Vijay<i className="material-icons right">arrow_drop_down</i></a></li>
            </ul>
          </div>
        </div>
     </nav>
    )
  }
});

module.exports = Header;
