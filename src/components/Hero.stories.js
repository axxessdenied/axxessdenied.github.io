// We create a “template” of how args map to rendering
import React from 'react';
import Hero from './Hero';

export default {
    title: "Hero",
    component: Hero,
  };


const Template = (args) => <Hero {...args} />;

// Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {};
