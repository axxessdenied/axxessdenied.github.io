// We create a “template” of how args map to rendering
import React from 'react';
import Footer from './Footer';

export default {
    title: "Footer",
    component: Footer,
  };


const Template = () => <Footer />;

// Each story then reuses that template
export const Primary = Template.bind({});
