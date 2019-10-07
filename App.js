import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  DatePickerIOS,
  Button,
  Modal
} from "react-native";

const date = new Date();

export default function App() {
  const [ showModal, setShowModal ] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          setShowModal(true);
        }}
        title="Press to show a modal with a non-working DatePicker"
      />
      <Text>This DatePicker works OK in dark mode</Text>
      <View style={{ height: 40, width: 300 }}>
        <DatePickerIOS mode="date" date={date} onDateChange={() => {}} />
      </View>
      <Modal visible={showModal}>
        <View style={{ flex: 1, backgroundColor: 'pink', justifyContent: 'center', alignItems: 'center' }}>
          <Button
            onPress={() => {
              setShowModal(false);
            }}
            title="Close modal"
          />
          <View style={{ width: 300 }}>
            <DatePickerIOS mode="date" date={date} onDateChange={() => {}} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  }
});
