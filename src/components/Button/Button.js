import React,{ Component } from "react";

import PropTypes from "prop-types";

import css from './Button.module.css'


class Button extends Component {
  onBtnRender = () => {
    if (this.props.totalHits / 12 < this.props.page) {
      return ''
    };
    return <button
      onClick={this.props.onClick}
      className={css.btn}
    > Load More</button>
  }

  render() {
    return (
      this.onBtnRender()
    )
  };
};

Button.propTypes = {
  // onSubmit: PropTypes.func,
}


export default Button;