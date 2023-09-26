import Button from "../components/Button/Button.js";
import React from "react";
import { action } from "@storybook/addon-actions";
// import MyButton from "../components/Button/Button.js";

export default {
  title: "Button",
  component: Button,
};

export const Primary = () => (
  <Button
    // primary
    label="Click me"
    onClick={action("clicked")}
    backgroundColor="red"
  />
);
