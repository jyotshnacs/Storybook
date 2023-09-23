import { Button } from "../components/Button";
import { action } from "@storybook/addon-actions";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button",
  component: Button,
  // parameters: {
  //   // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
  //   layout: "centered",
};

export const Text = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

//  export const Emoji = () =>  (
//   <Button onClick={action('clicked')} />
//    <span role="img" aria-label="so cool" />
//  );
