import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import '../css/GridStyle.css';
import { setSelectedPhotoDetail } from '../actions/photos'
class DefaultImage extends Component {
  render() {
    return (
    <div>
      <main className="site-wapper">
        <section className="gridgallery">
          {this.props.photos.map(data => <figure key={data.code} className="gridgallery__item">
            <Link to={`/photos/${data.code}`}>
              <img src={data.display_src} 
                onClick={() => { console.log('image clicked', data); this.props.setSelectedPhotoDetail(data)}}
                alt=""
                className="gridgallery__image" 
                data-testid={`test-image-${data.code}`} />
            </Link>
            <figcaption className="gridgallery__image-caption"><b> {data.caption}</b></figcaption>
          </figure>
          )}
        </section>
      </main>
    </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    photos: state.photos
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedPhotoDetail: data => dispatch(setSelectedPhotoDetail(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultImage)

