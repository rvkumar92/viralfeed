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
          <div className="col m5 offset-m2">
            <ViralContent />
          </div>
          <div className="col m5">
            <SideBar />
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Viralfeed;
