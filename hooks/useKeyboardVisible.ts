import { useEffect, useState } from "react";
import { Keyboard } from "react-native";

export const useKeyboardVisible = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    Keyboard.addListener("keyboardWillShow", () => {
      setVisible(true);
    });

    Keyboard.addListener("keyboardWillHide", () => {
      setVisible(false);
    });

    return () => {
      Keyboard.removeAllListeners("keyboardWillShow");
      Keyboard.removeAllListeners("keyboardWillHide");
    };
  }, []);

  return visible;
};
