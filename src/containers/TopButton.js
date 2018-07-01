import React, { Component } from 'react';

const buttonStyle = {
  display: 'none',
  position: 'fixed',
  bottom: '20px',
  right: '30px',
  zIndex: '99',
  fontSize: '18px',
  border: 'none',
  outline: 'none',
  backgroundColor: 'black',
  color: 'grey',
  cursor: 'pointer',
  width: '70px',
  height: '70px',
  borderRadius: '40px'
};

class TopButton extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(event) {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }

  goToTop() {
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': 0
    })
  }

  render() {
    return (
      <button
        style={{
          ...buttonStyle
        }}
        onClick={this.goToTop}
        id="myBtn"
      >
        Top
      </button>
    )
  }

}

export default TopButton;