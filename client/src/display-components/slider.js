import React, { Component } from "react";
import Slider, { createSliderWithTooltip } from "rc-slider";
import styled from "styled-components";
import "rc-slider/assets/index.css";

export default class QualitySlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.number,
      ticker: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.number
    });
  }

  onSliderChange = value => {
    this.setState({
      value: value
    });
    this.props.onValueChange(value, this.props.quality);
  };

  onSliderEnd = () => {
    if (this.state.ticker % 2 === 0) {
      this.props.getRecommendations();
    }
    this.setState({
      ticker: this.state.ticker + 1
    });
  };

  render() {
    const { number, quality } = this.props;
    return (
      <StyledSlider>
        <h3>{quality}</h3>
        <SliderWithTooltip
          value={number}
          min={0}
          max={100}
          marks={{
            0: "0",
            25: "25",
            50: "50",
            75: "75",
            100: "100"
          }}
          onChange={this.onSliderChange}
          onAfterChange={this.onSliderEnd}
        />
      </StyledSlider>
    );
  }
}

const SliderWithTooltip = createSliderWithTooltip(Slider);

const StyledSlider = styled.div`
  width: 80%;
  margin: 0 auto;
`;
