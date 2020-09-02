// We create a “template” of how args map to rendering
import React from 'react';
import Bezier from './Bezier';

export default {
    title: "Bezier",
    component: Bezier,
  };


const Template = () => <Bezier />;

// Each story then reuses that template
export const Primary = Template.bind({});
