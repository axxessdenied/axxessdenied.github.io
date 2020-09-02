// We create a “template” of how args map to rendering
import React from 'react';
import Content from './Content';

export default {
    title: "Content",
    component: Content,
  };


const Template = () => <Content />;

// Each story then reuses that template
export const Primary = Template.bind({});
