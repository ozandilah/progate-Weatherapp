import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CustomInputText from "../customInputText";

type PropsSearch = {
  searchWeather: (location: string) => void;
};
const WeatherSearch = ({ searchWeather }: PropsSearch) => {
  const [location, setLocation] = useState("");

  return (
    <View style={styles.page}>
      <View style={styles.tabsContainer}>
        <CustomInputText
          placeholder="Search the weather of your city"
          numberOfLines={1}
          multiline={false}
          onChange={setLocation}
          text={location}
        />
        <View style={styles.buttonWrapper}>
          <Pressable
            style={[
              styles.button,
              {
                borderColor: location ? "mediumorchid" : "gray",
              },
            ]}
            onPress={() => searchWeather(location)}
          >
            <Text>Search</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    borderRadius: 10,
    padding: 10,
  },
  tabsContainer: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 10,
  },
  buttonWrapper: {
    marginTop: 20,
    width: 100,
  },
  button: {
    flex: 1,
    padding: 10,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 10,
    alignItems: "center",
  },
});

export default WeatherSearch;
