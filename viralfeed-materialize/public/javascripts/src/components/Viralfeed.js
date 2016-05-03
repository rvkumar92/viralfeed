var React = require('react');
var Header = require('./Header.js');
var SecondaryHeader = require('./SecondaryHeader.js');
var ViralContent = require('./ViralContent.js');
var SideBar = require('./SideBar.js')
var Viralfeed = React.createClass({
  render(){
    return(
      <div>
        <Header />
        <SecondaryHeader />
        <div className="row">
          <div className="col m5 offset-m1">
            <ViralContent />
          </div>
          <div className="col m6">
            <SideBar />
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Viralfeed;
