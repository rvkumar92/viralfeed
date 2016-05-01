var React = require('react');

var SecondaryHeader = React.createClass({
  render(){
    return(
      <nav className="secondary-header nav-wrapper">
        <div className="row">
          <div className="col s3 pull-s1">
            <ul className="left hide-on-med-and-down">
              <li className="active"><a href="#" className="trending">Trending</a></li>
              <li><a href="#" className="hot">Hot</a></li>
              <li><a href="#" className="followed">Followed</a></li>
              <li id="vertical-line" className="right"></li>
            </ul>
          </div>
            <div className="col s7 pull-s1" id="right-menu">
              <ul className="right hide-on-med-and-down">
                <li><a href="#">Video</a></li>
                <li><a href="#">Cosplay</a></li>
                <li><a href="#">Girl</a></li>
                <li><a href="#">Comic</a></li>
                <li><a href="#">NSFW</a></li>
                <li><a href="#">GIF</a></li>
                <li><a href="#">WTF</a></li>
                <li><a href="#">Fails</a></li>
                <li><a href="#">More</a></li>
                <li><a href="#"><i className="material-icons" style={{'margin-right': '31px'}}>more_vert</i></a></li>
              </ul>
            </div>
        </div>
      </nav>
    )
  }
});

module.exports = SecondaryHeader;
