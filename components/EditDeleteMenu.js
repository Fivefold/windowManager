import * as React from "react";
import { View } from "react-native";
import {
  IconButton,
  Menu,
  Text,
  Divider,
  Provider,
  Button,
  Paragraph,
  Dialog,
  Portal,
} from "react-native-paper";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("test.db");

const DeleteDialog = (props) => {
  return (
    <View>
      <Portal>
        <Dialog visible={props.visible} onDismiss={props.hideDialog}>
          <Dialog.Title>Löschen</Dialog.Title>
          <Dialog.Content>
            <Paragraph>
              Wirklich Objekt{" "}
              <Text style={{ fontWeight: "bold" }}>„{props.name}“</Text>{" "}
              löschen?
            </Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={props.hideDialog}>Nein</Button>
            <Button
              onPress={() => {
                props.deleteProject(props.id);
                props.hideDialog;
              }}
            >
              Ja
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export const EditDeleteMenu = (props, navigation) => {
  const [visible, setVisible] = React.useState(false);
  const [dialogVisible, setDialogVisible] = React.useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const showDialog = () => {
    setVisible(false); // the menu is above the dialog. hide it
    setDialogVisible(true);
  };
  const hideDialog = () => setDialogVisible(false);

  return (
    <View>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<IconButton icon="dots-vertical" onPress={openMenu} />}
      >
        <Menu.Item
          icon="pencil"
          onPress={() => {
            setVisible(false);
            navigation.navigate("editObject");
          }}
          title="Bearbeiten"
        />
        <Menu.Item
          icon="delete"
          onPress={
            //() => props.deleteProject(props.id)}
            showDialog
          }
          title="Löschen"
        />
      </Menu>
      <DeleteDialog
        {...props}
        visible={dialogVisible}
        showDialog={showDialog}
        hideDialog={hideDialog}
      />
    </View>
  );
};