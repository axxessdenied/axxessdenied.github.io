// We create a “template” of how args map to rendering
import React from 'react';
import Card from './Card';

export default {
    title: "Card",
    component: Card,
  };


const Template = () => <Card />;

// Each story then reuses that template
export const Primary = Template.bind({});
