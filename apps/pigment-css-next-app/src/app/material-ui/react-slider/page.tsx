'use client';
import * as React from 'react';
import ColorSlider from '../../../../../../docs/data/material/components/slider/ColorSlider';
import ContinuousSlider from '../../../../../../docs/data/material/components/slider/ContinuousSlider';
import CustomMarks from '../../../../../../docs/data/material/components/slider/CustomMarks';
import CustomizedSlider from '../../../../../../docs/data/material/components/slider/CustomizedSlider';
import DiscreteSlider from '../../../../../../docs/data/material/components/slider/DiscreteSlider';
import DiscreteSliderLabel from '../../../../../../docs/data/material/components/slider/DiscreteSliderLabel';
import DiscreteSliderMarks from '../../../../../../docs/data/material/components/slider/DiscreteSliderMarks';
import DiscreteSliderSteps from '../../../../../../docs/data/material/components/slider/DiscreteSliderSteps';
import DiscreteSliderValues from '../../../../../../docs/data/material/components/slider/DiscreteSliderValues';
import InputSlider from '../../../../../../docs/data/material/components/slider/InputSlider';
import MinimumDistanceSlider from '../../../../../../docs/data/material/components/slider/MinimumDistanceSlider';
import MusicPlayerSlider from '../../../../../../docs/data/material/components/slider/MusicPlayerSlider';
import NonLinearSlider from '../../../../../../docs/data/material/components/slider/NonLinearSlider';
import RangeSlider from '../../../../../../docs/data/material/components/slider/RangeSlider';
import SliderSizes from '../../../../../../docs/data/material/components/slider/SliderSizes';
import TrackFalseSlider from '../../../../../../docs/data/material/components/slider/TrackFalseSlider';
import TrackInvertedSlider from '../../../../../../docs/data/material/components/slider/TrackInvertedSlider';
import VerticalSlider from '../../../../../../docs/data/material/components/slider/VerticalSlider';

export default function Slider() {
  return (
    <React.Fragment>
      <section>
        <h2> Color Slider</h2>
        <div className="demo-container">
          <ColorSlider />
        </div>
      </section>
      <section>
        <h2> Continuous Slider</h2>
        <div className="demo-container">
          <ContinuousSlider />
        </div>
      </section>
      <section>
        <h2> Custom Marks</h2>
        <div className="demo-container">
          <CustomMarks />
        </div>
      </section>
      <section>
        <h2> Customized Slider</h2>
        <div className="demo-container">
          <CustomizedSlider />
        </div>
      </section>
      <section>
        <h2> Discrete Slider</h2>
        <div className="demo-container">
          <DiscreteSlider />
        </div>
      </section>
      <section>
        <h2> Discrete Slider Label</h2>
        <div className="demo-container">
          <DiscreteSliderLabel />
        </div>
      </section>
      <section>
        <h2> Discrete Slider Marks</h2>
        <div className="demo-container">
          <DiscreteSliderMarks />
        </div>
      </section>
      <section>
        <h2> Discrete Slider Steps</h2>
        <div className="demo-container">
          <DiscreteSliderSteps />
        </div>
      </section>
      <section>
        <h2> Discrete Slider Values</h2>
        <div className="demo-container">
          <DiscreteSliderValues />
        </div>
      </section>
      <section>
        <h2> Input Slider</h2>
        <div className="demo-container">
          <InputSlider />
        </div>
      </section>
      <section>
        <h2> Minimum Distance Slider</h2>
        <div className="demo-container">
          <MinimumDistanceSlider />
        </div>
      </section>
      <section>
        <h2> Music Player Slider</h2>
        <div className="demo-container">
          <MusicPlayerSlider />
        </div>
      </section>
      <section>
        <h2> Non Linear Slider</h2>
        <div className="demo-container">
          <NonLinearSlider />
        </div>
      </section>
      <section>
        <h2> Range Slider</h2>
        <div className="demo-container">
          <RangeSlider />
        </div>
      </section>
      <section>
        <h2> Slider Sizes</h2>
        <div className="demo-container">
          <SliderSizes />
        </div>
      </section>
      <section>
        <h2> Track False Slider</h2>
        <div className="demo-container">
          <TrackFalseSlider />
        </div>
      </section>
      <section>
        <h2> Track Inverted Slider</h2>
        <div className="demo-container">
          <TrackInvertedSlider />
        </div>
      </section>
      <section>
        <h2> Vertical Slider</h2>
        <div className="demo-container">
          <VerticalSlider />
        </div>
      </section>
    </React.Fragment>
  );
}
