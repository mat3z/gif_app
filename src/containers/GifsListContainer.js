import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTrendingGifs, fetchMoreGifs } from "../store/actions/gifs";

import GifsList from '../components/GifsList';

class GifsListContainer extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    this.props.fetchTrendingGifs();
    window.addEventListener('scroll', this.handleScroll, { passive: true })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(event) {
    const d = document.documentElement;
    let offset = d.scrollTop + window.innerHeight;
    let height = d.offsetHeight;

    if (offset === height) {
      setTimeout(this.props.fetchMoreGifs, 1000);
    }
  }

  render() {
    const { gifs, loading } = this.props;

    if(loading) {
      return <div className="loader"></div>
    }

    return (
      <div>
        <GifsList list={ gifs } />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.gifs.gifs.loading,
  gifs: state.gifs.gifs.items
});


export default connect(mapStateToProps, { fetchTrendingGifs, fetchMoreGifs })(GifsListContainer);