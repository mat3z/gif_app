import React, { Component } from 'react';
import { connect } from 'react-redux';
import GifsList from '../components/GifsList';
import { fetchGifs, fetchMoreGifs } from "../store/actions/gifs";

class GifsListContainer extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    if (!this.props.gifs.length) {
      this.props.fetchGifs();
    }
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
      let method = this.props.query === '' ? 'trending' : 'search';
      setTimeout(this.props.fetchMoreGifs.bind(this, method), 1000);
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
  gifs: state.gifs.gifs.items,
  query: state.gifs.query
});


export default connect(mapStateToProps, { fetchGifs, fetchMoreGifs })(GifsListContainer);