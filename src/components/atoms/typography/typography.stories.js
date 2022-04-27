/** @format */

import Typography from "./Typography";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atom/Typography",
  component: Typography,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};
const Template = (args) => <Typography {...args}>{args.children}</Typography>;

export const H1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
H1.args = { variant: "h1", children: "H1 Headline", as: "h1" };

export const H2 = Template.bind({});
H2.args = { variant: "h2", children: "H2 Headline", as: "h2" };

export const H3 = Template.bind({});
H3.args = { variant: "h3", children: "H3 Headline", as: "h3" };

export const Body = Template.bind({});
Body.args = { variant: "bodyBg", children: "Body" };

export const BodySm = Template.bind({});
BodySm.args = { variant: "bodySm", children: "Body Small" };

export const Footnote = Template.bind({});
Footnote.args = { variant: "footnote", children: "foot note" };

export const Button = Template.bind({});
Button.args = { variant: "buttonBg", children: "Button" };

export const ButtonSm = Template.bind({});
ButtonSm.args = { variant: "buttonSm", children: "Button Small" };
