import React, { Component } from 'react';

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      topText: '',
      bottomText: '',
      randomImg: 'http://i.imgflip.com/1bij.jpg',
      allMemeImgs: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const response = await fetch('https://api.imgflip.com/get_memes');
    const data = await response.json();
    const { memes } = data.data;
    this.setState({
      loading: false,
      allMemeImgs: memes.filter((meme) => meme.box_count === 2)
    });
    console.log(this.state.allMemeImgs);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const randomIndex = Math.floor(
      Math.random() * this.state.allMemeImgs.length
    );
    const randomMeme = this.state.allMemeImgs[randomIndex];
    this.setState({
      randomImg: randomMeme.url
    });
  }

  render() {
    return (
      <div>
        <form className='meme-form' onSubmit={this.handleSubmit}>
          <label htmlFor='topText'>Top Text</label>
          <input
            type='text'
            name='topText'
            id='topText'
            placeholder='top text'
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <label htmlFor='bottomText'>Bottom Text</label>
          <input
            type='text'
            name='bottomText'
            id='bottomText'
            placeholder='bottom text'
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button>Generate meme</button>
        </form>
        <div className='meme'>
          <img src={this.state.randomImg} alt='' />
          <h2 className='top'>{this.state.topText}</h2>
          <h2 className='bottom'>{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
