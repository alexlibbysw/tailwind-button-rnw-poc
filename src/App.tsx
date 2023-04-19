import React from "react";
import Button from "./components/Button/Button";
import IconBodyMagic from "./components/Icons/IconBodyMagic";
import { IconProps } from "./components/Icons/Icon.types";
import ButtonRNW from "./components/Button/Button.rnw";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>
        This is an example React button built using Tailwind CSS, TypeScript and
        React Native for Web
      </h2>

      <Button
        dataTestid="button-test-id"
        role="button"
        className="primary"
        stretch
        themeColor="orange"
      >
        This is a test
      </Button>

      <Button
        role="button"
        className="primary"
        iconPosition="left"
        dataTestid="button-test-id"
        themeColor="red"
        onClick={() => alert("you clicked the primary button")}
        iconName={(props: JSX.IntrinsicAttributes & IconProps) => (
          <IconBodyMagic {...props} color="#fff" />
        )}
      >
        This is a test
      </Button>

      <Button
        role="button"
        dataTestid="button-test-id"
        themeColor="red"
        className="secondary"
      >
        This is a secondary test
      </Button>

      <Button
        role="button"
        className="secondary"
        themeColor="red"
        dataTestid="button-test-id"
        iconName={(props: JSX.IntrinsicAttributes & IconProps) => (
          <IconBodyMagic {...props} color="#d3072a" />
        )}
      >
        This is a secondary test
      </Button>

      <Button
        role="button"
        dataTestid="button-test-id"
        themeColor="red"
        className="tertiary"
      >
        This is a tertiary test
      </Button>

      <Button
        role="button"
        className="tertiary"
        themeColor="red"
        dataTestid="button-test-id"
        iconName={(props: JSX.IntrinsicAttributes & IconProps) => (
          <IconBodyMagic {...props} color="#d3072a" />
        )}
      >
        This is a tertiary test
      </Button>

      <Button
        role="button"
        className="primary"
        themeColor="red"
        dataTestid={"button-test-id"}
        disabled
      >
        This is a disabled primary button
      </Button>

      <Button
        disabled
        role="button"
        className="primary"
        themeColor="red"
        dataTestid="button-test-id"
        iconName={(props: JSX.IntrinsicAttributes & IconProps) => (
          <IconBodyMagic {...props} color="#fffefeff" />
        )}
      >
        This is a disabled primary icon button
      </Button>

      <ButtonRNW
        iconPosition="right"
        themeColor="teal"
        variant="primary"
        role="button"
      >
        This is a ButtonRNW component
      </ButtonRNW>
    </div>
  );
}

export default App;
