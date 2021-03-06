import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import './styles.scss';
export class Radio extends Component {
  state = {};
  render() {
    const { selected, onChange, text, value, toolTip } = this.props;

    return (
      <div
        className="radio-container"
        onClick={() => {
          onChange(value);
        }}
      >
        <div className={`radio-outer-circle ${value !== selected && 'unselected'}`}>
          <div className={`radio-inner-circle ${value !== selected && 'unselected-circle'}`} />
        </div>
        <div className="helper-text">{text}</div>
        {toolTip ? (
          <>
            <OverlayTrigger
              placement={'right'}
              overlay={
                <Tooltip id={`tooltip-right`}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit
                </Tooltip>
              }
            >
              <button className="toolTipBtn">
                {' '}
                <i class="fas fa-question-circle"></i>
              </button>
            </OverlayTrigger>
          </>
        ) : null}
      </div>
    );
  }
}
Radio.propTypes = {
  text: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
