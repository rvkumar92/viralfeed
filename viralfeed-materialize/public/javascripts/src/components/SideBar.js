var React = require('react');
var SideBar = React.createClass({
  render(){
    return(
        <div className="row">
        <div className="col s12 m6">
          <div className="card" style={{width: '110%'}}>
           <div className="card-action">
              <span className="left" style={{fontWeight: 500}}>Who to follow</span>
              <span className="right" style={{fontWeight: 500, color: '#0d47a1'}}>Refresh</span>
            </div>
            <p className="divider"></p><br />
            <div className="card-content black-text">

              <section>
                <div className="row">
                  <div className="col s1 circle-sidebar"></div>
                    <div className="col s3">
                      BitchesBeCrazy
                      <p style={{color: '#919191',fontSize: '12px'}}>342Followers</p>
                      <p><button className="btn waves-effect waves-light" type="submit" className="follow-btn">Follow</button></p>
                    </div>
                    <div className="col s1 right"><i className="material-icons" style={{color: '#d3d3d3',fontSize: '20px'}}>close</i></div>
                </div>
              </section>

              <div className="divider"></div><br />

              <section>
              <div className="row">
                <div className="col s1 circle-sidebar"></div>
                  <div className="col s3">
                  BitchesBeCrazy
                  <p style={{color: '#919191',fontSize: '12px'}}>342Followers</p>
                  <p><button className="btn waves-effect waves-light" type="submit" className="follow-btn">Follow</button></p>
                  </div>

                  <div className="col s1 right"><i className="material-icons" style={{color: '#d3d3d3',fontSize: '20px'}}>close</i></div>
              </div>
              </section>
              <div className="divider"></div><br />

              <section>
              <div className="row">
                <div className="col s1 circle-sidebar"></div>
                  <div className="col s3">
                  BitchesBeCrazy
                  <p style={{color: '#919191',fontSize: '12px'}}>342Followers</p>
                  <p><button className="btn waves-effect waves-light" type="submit" className="follow-btn">Follow</button></p>
                  </div>

                  <div className="col s1 right"><i className="material-icons" style={{color: '#d3d3d3',fontSize: '20px'}}>close</i></div>
              </div>
              </section>

              <div className="divider"></div><br />
              <section>
              <div className="row">
                <div className="col s1 circle-sidebar"></div>

                  <div className="col s3">
                  BitchesBeCrazy
                  <p style={{color: '#919191',fontSize: '12px'}}>342Followers</p>
                  <p><button className="btn waves-effect waves-light" type="submit" className="follow-btn">Follow</button></p>
                  </div>

                  <div className="col s1 right"><i className="material-icons" style={{color: '#d3d3d3',fontSize: '20px'}}>close</i></div>
              </div>
              </section>
            </div>
            <div className="card-action center-align" style={{backgroundColor: '#ececec'}}>
              <i className="material-icons">launch</i><span>Explore More</span>
            </div>
          </div>

          <div className="card" style={{width: '110%'}}>
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img  style={{height: '10em'}} className="activator" src="images/four_moods.jpg" />
                <div className="card-content">Any Other words</div>
              </div>


              <div className="card-image waves-effect waves-block waves-light">
                <img  style={{height: '10em'}} className="activator" src="images/google.jpg" />
                <div className="card-content">Google Knows all about you</div>
              </div>


              <div className="card-image waves-effect waves-block waves-light">
              <img  style={{height: '10em'}} className="activator" src="images/single.jpg" />
                <div className="card-content">These drawing perfectly capture the joy of single life</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = SideBar;
