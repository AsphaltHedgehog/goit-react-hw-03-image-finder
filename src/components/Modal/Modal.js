import React, { Component } from "react";

import css from './Modal.module.css'

class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

    handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      this.props.onClose(); 
    }
  }

  handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose(); 
    }
  }

  render() {
    const { img  } = this.props
    return (
      <div className={css.Overlay}
        onClick={this.handleOverlayClick}>
        <div className={css.Modal}>
          <img src={img} className={css.img } alt="" />
        </div>
      </div>
    );
  };
};


export default Modal;


