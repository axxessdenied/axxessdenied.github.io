// We create a “template” of how args map to rendering
import React from 'react';
import Carousel from './Carousel';

export default {
    title: "Carousel",
    component: Carousel,
  };


const Template = () => <Carousel />;

// Each story then reuses that template
export const Primary = Template.bind({});
