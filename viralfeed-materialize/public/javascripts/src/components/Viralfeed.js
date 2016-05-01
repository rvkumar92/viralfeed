var React = require('react');
var Header = require('./Header.js');
var SecondaryHeader = require('./SecondaryHeader.js');
var ViralContent = require('./ViralContent.js');
var Viralfeed = React.createClass({
  render(){
    return(
      <div>
        <Header />
        <SecondaryHeader />
        <ViralContent />
      </div>
    )
  }
});

module.exports = Viralfeed;
