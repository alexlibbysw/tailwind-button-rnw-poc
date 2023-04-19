//import React in our code
import React from "react";
import * as Colors from "../../Tokens/dist/variables";

import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
} from "react-native";

export type IconPosition = "left" | "right";

export type ThemeColor =
  | "red"
  | "green"
  | "blue"
  | "orange"
  | "pink"
  | "purple"
  | "teal";

export type Variant = "primary" | "secondary";

export type ButtonProps = {
  children?: React.ReactNode;
  disabled?: boolean;
  iconPosition: IconPosition;
  themeColor: ThemeColor;
  iconName?: string;
  stretch?: boolean;
  dataTestid?: string;
  variant: Variant;
  role: string;
};

const defaultButtonStyleProps = {
  themeColor: "Red",
};

type ButtonStyleProps = Pick<ButtonProps, "themeColor"> &
  typeof defaultButtonStyleProps;

export const ButtonRNW: React.FC<ButtonProps> = ({
  children,
  disabled,
  iconName,
  stretch,
  dataTestid,
  themeColor,
  variant,
  role,
  iconPosition = "right",
  ...props
}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles().container}>
        <Pressable
          style={[
            styles().button,
            styles({ themeColor }).blueprimary,
            styles().stretch,
          ]}
          disabled={disabled}
          testID={dataTestid}
          onPress={() => alert("you clicked the primary button")}
          {...props}
        >
          {iconPosition === "left" ? (
            <>
              <Image
                source={{
                  uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png",
                }}
                style={styles().buttonImageIconStyle}
                resizeMode="cover"
              />
              <Text style={styles().buttonTextStyle}>{children}</Text>
            </>
          ) : (
            <>
              <Text style={styles().buttonTextStyle}>{children}</Text>
              <Image
                source={{
                  uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/facebook.png",
                }}
                style={styles().buttonImageIconStyle}
                resizeMode="cover"
              />
            </>
          )}
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = (props?: ButtonStyleProps) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    button: {
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 0.5,
      borderColor: "#fff",
      height: 40,
      borderRadius: 4,
      minHeight: 56,
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4,
      borderTopRightRadius: 4,
      borderBottomRightRadius: 4,
      justifyContent: "center",
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 24,
      paddingRight: 24,
      fontSize: "16px",
      backgroundColor: `Colors.Color${props?.themeColor}400`,
    },
    text: {
      color: "#fff",
      fontWeight: "500",
      fontSize: 16,
    },

    stretch: {
      width: "auto",
    },

    redprimary: {
      backgroundColor: Colors.ColorRed400,
    },

    greenprimary: {
      backgroundColor: Colors.ColorGreen400,
    },

    blueprimary: {
      backgroundColor: Colors.ColorBlue400,
    },

    purpleprimary: {
      backgroundColor: Colors.ColorPurple400,
    },

    pinkprimary: {
      backgroundColor: Colors.ColorPink400,
    },

    tealprimary: {
      backgroundColor: Colors.ColorTeal400,
    },

    orangeprimary: {
      backgroundColor: Colors.ColorOrange400,
    },

    redsecondary: {
      borderColor: Colors.ColorRed400,
    },

    greensecondary: {
      borderColor: Colors.ColorGreen400,
    },

    bluesecondary: {
      borderColor: Colors.ColorBlue400,
    },

    purplesecondary: {
      borderColor: Colors.ColorPurple400,
    },

    tealsecondary: {
      borderColor: Colors.ColorTeal400,
    },

    orangesecondary: {
      borderColor: Colors.ColorOrange400,
    },

    pinksecondary: {
      borderColor: Colors.ColorPink400,
    },

    buttonImageIconStyle: {
      padding: 10,
      margin: 5,
      height: 25,
      width: 25,
    },
    buttonTextStyle: {
      color: "#fff",
      marginBottom: 4,
      marginLeft: 10,
      fontSize: 16,
    },
  });
styles.defaultProps = defaultButtonStyleProps;

export default ButtonRNW;
