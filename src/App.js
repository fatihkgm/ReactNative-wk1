import React from "react";
import { Text, View } from "react-native";
import { styles } from "./style";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textStyle}>Header Content</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.side}>
          <Text style={styles.textStyle}>Side Content</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.textStyle}>Main Content</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.textStyle}>Footer Content</Text>
      </View>
    </View>
  );
};

export default App;
