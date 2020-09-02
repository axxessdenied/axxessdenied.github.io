// We create a “template” of how args map to rendering
import React from 'react';
import StarSVG from './StarSVG';

export default {
    title: "StarSVG",
    component: StarSVG,
  };


const Template = () => <StarSVG />;

// Each story then reuses that template
export const Primary = Template.bind({});
