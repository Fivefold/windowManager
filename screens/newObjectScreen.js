import React from "react";
import { View, StyleSheet } from "react-native";
import { FAB } from "react-native-paper";

import { CustomTextInput } from "../components/CustomTextInput";

export function NewObjectScreen() {
  return (
    <View style={styles.container}>
      <CustomTextInput
        label="Kunde"
        mode="outlined"
        style={styles.fullTextInput}
      />
      <CustomTextInput
        label="Straße"
        mode="outlined"
        style={styles.wideTextInput}
      />
      <CustomTextInput
        label="Nr."
        mode="outlined"
        keyboardType="number-pad"
        style={styles.smallTextInput}
      />
      <CustomTextInput
        label="PLZ"
        mode="outlined"
        keyboardType="number-pad"
        style={styles.smallTextInput}
      />
      <CustomTextInput
        label="Stadt"
        mode="outlined"
        style={styles.wideTextInput}
      />
      <FAB
        style={styles.fab}
        icon="content-save"
        label="Speichern"
        onPress={() =>
          navigation.dispatch(
            CommonActions.navigate({
              name: "Home",
            })
          )
        }
      />
    </View>
  );
}

var marginHorizontal = "1%";
var marginVertical = "0.5%";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    //alignItems: "center",
    //justifyContent: "center",
    padding: "1%",
  },
  fullTextInput: {
    width: "98%",
    marginHorizontal: marginHorizontal,
    marginVertical: marginVertical,
  },
  smallTextInput: {
    width: "30%",
    marginHorizontal: marginHorizontal,
    marginVertical: marginVertical,
  },
  wideTextInput: {
    width: "66%",
    marginHorizontal: marginHorizontal,
    marginVertical: marginVertical,
  },
  appbar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 20,
    height: 56 + 20,
  },
  fab: {
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: 16,
  },
});
