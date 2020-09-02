// We create a “template” of how args map to rendering
import React from 'react';
import CardInfo from './CardInfo';

export default {
    title: "CardInfo",
    component: CardInfo,
  };


const Template = () => <CardInfo />;

// Each story then reuses that template
export const Primary = Template.bind({});
