import React,{ Component } from "react";

import PropTypes from "prop-types";

import css from './ImageGalleryItem.module.css'


class ImageGalleryItem extends Component {
  // state = {
  //   gallery: this.props.gallery
  // }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.gallery !== this.props.gallery) {
  //     this.setState({ gallery: this.props.gallery });
  //   }
  // }

  // handlerClick = (largeImageURL) => {
  //   return this.props.onClick(largeImageURL)
  // } 

  handlerRender = () => {
    const { gallery, onClick } = this.props;
    if (!gallery) {
      return
    }
    // const { gallery } = this.state;

    return gallery.map((el, i) => (
      <li className={css.li} key={el.id}>
        <img
          src={el.webformatURL}
          alt={el.tags}
          className={css.img}
          data-largeimg= {el.largeImageURL}
          onClick={() => onClick(el.largeImageURL)}
        />
      </li>
    ));
  };

  render() {
    return (
      this.handlerRender()
    );
  };
};

ImageGalleryItem.propTypes = {
  gallery: PropTypes.array,
  onClick: PropTypes.func,
}


export default ImageGalleryItem;