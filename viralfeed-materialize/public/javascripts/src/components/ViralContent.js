var React = require('react');
var ViralContent = React.createClass({
  render(){
    return(
      <div className="center-align">
         <div className="card small">
            <div className="card-content">
              <img src="/images/deadpool.png" alt="username" className="left circle responsive-img user-profile"/>
              <p><span className="left">Deadpooli2f</span></p>
              <i className="material-icons right">more_vert</i>
               <i className="material-icons right" id="add">add</i>
              <br />
              <p className="left" style={{fontWeight:200,fontSize: '12px'}}>2,905 followers</p>
              <br />
              <div className="divider"></div>
              <span className="left card-title activator grey-text text-darken-4" style={{fontWeight:400}}>Married Life</span>
             </div>
             <div className="card-image waves-effect waves-block waves-light">
                 <img className="activator responsive-img" src="/images/married_life.jpg"/>
             </div>
             <div className="card-content">
               <p className="left">23,409<span className="upvotes">Upvotes</span></p>
               <p className="right">306<span className="comments">Comments</span></p>
            </div>
            <div className="divider"></div>
             <div className="card-content">
               <ul style={{color: 'grey'}}>
                 <li className="left"><i className="material-icons">thumb_up</i><span className="upvote">Upvote</span></li>
                 <li><i className="material-icons left downvote">thumb_down</i></li>
                 <li><i className="material-icons left share">open_with</i></li>
                 <li><i className="material-icons right">chat_bubble</i></li>
               </ul>
             </div>
         </div>

         <div className="card small">
            <div className="card-content">
              <img src="/images/captain_america.jpg" alt="username" className="left circle responsive-img user-profile"/>
              <p><span className="left">Captain America Civil War</span></p>
              <i className="material-icons right">more_vert</i>
               <i className="material-icons right" id="done">done</i>
              <br />
              <p className="left" style={{fontWeight:200,fontSize: '12px'}}>1,422 followers</p>
              <br />
              <div className="divider"></div>
              <p className="left card-title activator grey-text text-darken-4" style={{fontWeight:400,fontSize:'15px',lineHeight:'20px'}}>
                New Photos Of Captain America: Civil War Finally Reveal The Role Of Martin Freeman In The Movie
              </p>
             </div>
             <div className="card-image waves-effect waves-block waves-light">
                 <img className="activator responsive-img" src="/images/Captain.jpg"/>
             </div>
             <div className="card-content">
               <p className="left">55,409<span className="upvotes">Upvotes</span></p>
               <p className="right">518<span className="comments">Comments</span></p>
            </div>
            <div className="divider"></div>
             <div className="card-content">
               <ul style={{color: 'grey'}}>
                 <li className="left"><i className="material-icons">thumb_up</i><span className="upvote">Upvote</span></li>
                 <li><i className="material-icons left downvote">thumb_down</i></li>
                 <li><i className="material-icons left share">open_with</i></li>
                 <li><i className="material-icons right">chat_bubble</i></li>
               </ul>
             </div>
         </div>
      </div>
    )
  }
});

module.exports = ViralContent;
