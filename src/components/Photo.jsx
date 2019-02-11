import React, { Component } from "react";
import '../css/GridStyle.css';
import { connect } from 'react-redux';
import { updateSelectedPhotoDetail } from "../actions/photos";

class Photo extends Component {
  componentDidMount(){
    this.props.UpdateSelectedPhotodDetail(this.props.match.params.code)
  }
  render() {
    return (
        <div className="I_Modal" >
          <div className="I_Modal-Container">            
            <img src={this.props.photo.display_src} data-testid="display_src" alt="" height="100%" width="70%" style={{ 'marginRight': '10px', float: 'left' }} />
            <p data-testid="caption"><b>{this.props.photo.caption}</b></p>
            {
              this.props.comments.length > 0 ? this.props.comments.map(data => <div key={data.text}><p className="commentp"><a href="#">@{data.user}</a> - <span>{data.text}</span></p></div>)
                : <h2>Oops No Comments...</h2>
            }
          </div>
        </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    photo: state.selectedPhoto.photo,
    comments: state.selectedPhoto.comments
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    UpdateSelectedPhotodDetail: code => dispatch(updateSelectedPhotoDetail(code))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Photo)
