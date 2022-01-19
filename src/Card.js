import React from "react";

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
    <div className="github-profile" style={{margin:'1rem', backgroundColor: "beige"}}>
          <img src={profile.avatar_url} width="100" height="100" />
          <div className="info" style={{display:'inline-block', marginLeft:10}}>
          <div className="name" style={{fontSize:'200%'}}>{profile.name} </div>
          <div className="company">{profile.company}</div>
        </div>
    </div>
    ); 
  }
}

export default Card;