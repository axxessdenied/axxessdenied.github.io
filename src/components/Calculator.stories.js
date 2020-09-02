// We create a “template” of how args map to rendering
import React from 'react';
import Calculator from './Calculator';

export default {
    title: "Calculator",
    component: Calculator,
  };


const Template = () => <Calculator />;

// Each story then reuses that template
export const Primary = Template.bind({});
