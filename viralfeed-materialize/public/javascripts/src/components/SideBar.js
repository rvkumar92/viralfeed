var React = require('react');
var SideBar = React.createClass({
  render(){
    return(
      <div className="center-align right">
        <div className="row">
          <div className="col s12 m6">
            <div className="card darken-1">
              <div className="card-content black-text">
              <p className="left" style={{fontSize:'12px',fontWeight: 500}}>Who to follow</p>
              <p className="right" style={{fontSize:'12px',color: '#0d47a1',fontWeight: 500}}>Refresh</p>
                <span className="card-title">Who to follow</span>
                  <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
        </div>
      </div>
      </div>
    )
  }
});

module.exports = SideBar;
