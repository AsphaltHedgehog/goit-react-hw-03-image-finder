import React,{ Component } from "react";

import PropTypes from "prop-types";

import css from './ImageGallery.module.css'


class ImageGallery extends Component {
  render() {
    return (
      <ul className={css.list}>
        {this.props.children}
      </ul>
    );
  };
};

ImageGallery.propTypes = {
  // onSubmit: PropTypes.func,
}


export default ImageGallery;