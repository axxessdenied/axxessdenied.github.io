// We create a “template” of how args map to rendering
import React from 'react';
import Experiment from './Experiment';

export default {
    title: "Experiment",
    component: Experiment,
  };


const Template = () => <Experiment />;

// Each story then reuses that template
export const Primary = Template.bind({});
