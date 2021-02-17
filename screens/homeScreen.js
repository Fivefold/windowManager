import React from "react";
import { View, Button, StyleSheet, SafeAreaView } from "react-native";
import {
  Appbar,
  List,
  IconButton,
  Text,
  Paragraph,
  RadioButton,
  Divider,
  FAB,
} from "react-native-paper";
import { CommonActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ScrollView } from "react-native-gesture-handler";

import { WindowListScreen } from "./WindowListScreen";
import { NewObjectScreen } from "./NewObjectScreen";

import colors from "../constants/colors";

const HomeStack = createStackNavigator();
const StatusBarHeight = 20;

const ObjectRadioButton = (props) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <View style={styles.objectRadioButton}>
      <RadioButton
        value={props.id}
        status={props.selectedObject === props.id ? "checked" : "unchecked"}
        onPress={() => props.setSelectedObject(props.id)}
      />
    </View>
  );
};

export function homeStackNavigator() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary._800,
        },
        headerTintColor: colors.white.high_emph,
        headerTitleStyle: {},
      }}
    >
      <HomeStack.Screen
        name="selectObject"
        component={HomeScreen}
        options={{
          title: "Aktives Objekt auswählen",
          headerRight: () => (
            <View style={styles.stackIcons}>
              <IconButton
                icon="magnify"
                color={colors.white.high_emph}
                onPress={() => console.log("Pressed search")}
              />
              <IconButton
                icon="download"
                color={colors.white.high_emph}
                onPress={() => console.log("Pressed download")}
              />
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="newObject"
        component={NewObjectScreen}
        options={{
          title: "Neues Objekt erstellen",
          headerRight: () => (
            <View style={styles.stackIcons}>
              <IconButton
                icon="content-save"
                color={colors.white.high_emph}
                onPress={() => console.log("Pressed save object")}
              />
            </View>
          ),
        }}
      />
    </HomeStack.Navigator>
  );
}

export function HomeScreen({ navigation }) {
  const [selectedObject, setSelectedObject] = React.useState();

  return (
    <View style={styles.container}>
      <ScrollView>
        <List.Item
          title="Max Mustermann"
          description="Musterstraße 12, 1234 Musterstadt"
          style={styles.listEntry}
          onPress={() => console.log("Pressed List item")}
          right={() => (
            <ObjectRadioButton
              id={1}
              selectedObject={selectedObject}
              setSelectedObject={setSelectedObject}
            />
          )}
        />
        <Divider />
        <List.Item
          title="HELLA Sonnen- und Wetterschutztechnik GmbH"
          description="Abfaltersbach 125, 9913 Abfaltersbach"
          right={() => (
            <ObjectRadioButton
              id={2}
              selectedObject={selectedObject}
              setSelectedObject={setSelectedObject}
            />
          )}
        />
        <Divider />
        <List.Item
          title="HELLA Sonnen- und Wetterschutztechnik GmbH Max Mustermann"
          description="HELLA Sonnen- und Wetterschutztechnik GmbH HELLA Sonnen- und Wetterschutztechnik GmbH"
          titleEllipsizeMode="tail"
          descriptionEllipsizeMode="tail"
          right={() => (
            <ObjectRadioButton
              id={3}
              selectedObject={selectedObject}
              setSelectedObject={setSelectedObject}
            />
          )}
        />
        <Divider />
      </ScrollView>

      <FAB
        style={styles.fab}
        icon="plus"
        label="Objekt"
        onPress={() =>
          navigation.dispatch(
            CommonActions.navigate({
              name: "newObject",
            })
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  stackIcons: {
    flexDirection: "row",
    right: 4,
  },
  appbar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingTop: StatusBarHeight,
    height: 56 + StatusBarHeight,
  },
  listEntry: { alignItems: "center" },
  objectRadioButton: {
    justifyContent: "center",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

/*
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: (props) => <CustomNavigationBar {...props} />,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
      */

/* --- old Appbar on top. Maybe useful for later 
      <Appbar style={styles.appbar}>
        <Appbar.Content title="Aktives Objekt auswählen" />
        <Appbar.Action
          icon="magnify"
          onPress={() => console.log("Pressed search")}
        />
        <Appbar.Action
          icon="download"
          onPress={() => console.log("Pressed export")}
        />
      </Appbar> */
