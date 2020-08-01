import React, { Component } from 'react';
import Header from './Header';

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      allMemes: []
    };
  }
  async componentDidMount() {
    this.setState({ loading: true });
    const response = await fetch('https://api.imgflip.com/get_memes');
    const myData = await response.json();
    this.setState({
      loading: false,
      allMemes: myData.data.memes
    });
    console.log(this.state.allMemes[3]);
  }
  render() {
    return (
      <div>
        {this.state.allMemes.length > 0 ? (
          <Header
            memeData={
              this.state.allMemes[
                Math.floor(Math.random() * this.state.allMemes.length)
              ]
            }
          />
        ) : null}
      </div>
    );
  }
}

export default MemeGenerator;
