import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

type PropsCustomInput = {
  multiline: boolean | false;
  numberOfLines: number;
  placeholder: string;
  onChange: (text: string) => void;
  text: string;
};

const CustomInputText = ({
  multiline,
  numberOfLines,
  placeholder,
  onChange,
  text,
}: PropsCustomInput) => {
  return (
    <View style={styles.container}>
      <TextInput
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChange}
        defaultValue={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: "#DDDDDD",
    padding: 10,
    borderRadius: 10,
  },
  container: {
    marginTop: 20,
  },
});

export default CustomInputText;
