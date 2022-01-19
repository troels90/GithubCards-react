
import './App.css';
import Card from './Card';  
import React from 'react';
import Form from './Form';

const testData = [
  {name: "Troels P", avatar_url: "https://avatars.githubusercontent.com/u/21262430?v=4", company: "abc"}
]

const CardList = (props) => (
  <div> 
    {props.profiles.map(profile => <Card {...profile}/>)}
  </div>
);

class App extends React.Component {
  state = {
    profiles: testData,
  };

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };
  
  render() {
    return (
      <div>
        <div className="header" style={{marginLeft:50}}> {this.props.title}  </div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    ); 
  } 
}


export default App;
