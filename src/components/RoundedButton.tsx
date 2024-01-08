import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ToastAndroid,
} from "react-native";
import { myColors } from "../theme/appTheme";

interface RoundedButtonProps {
  text: string;
  onPress?: () => void;
}
export const RoundedButton = ({ text, onPress }: RoundedButtonProps) => {
  return (
    <TouchableOpacity style={styles.roundedButton} onPress={onPress}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  roundedButton: {
    width: "100%",
    height: 50,
    backgroundColor: myColors.primary,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
});
