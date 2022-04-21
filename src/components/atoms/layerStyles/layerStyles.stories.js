/** @format */

import { LayerWhitFirstDefault } from "./LayerStyles";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/LayerStyles",
  component: LayerWhitFirstDefault,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};
const Template = (args) => <LayerWhitFirstDefault {...args} />;

export const LayerWhitFirstDefault = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LayerWhitFirstDefault.args = { text: "Text" };
