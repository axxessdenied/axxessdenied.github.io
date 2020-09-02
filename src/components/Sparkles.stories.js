// We create a “template” of how args map to rendering
import React from 'react';
import Sparkles from './Sparkles';

export default {
    title: "Sparkles",
    component: Sparkles,
  };


const Template = () => <Sparkles />;

// Each story then reuses that template
export const Primary = Template.bind({});
