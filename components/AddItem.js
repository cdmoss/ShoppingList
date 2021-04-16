import React, {useState} from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, SegmentedControlIOS } from "react-native";

const AddItem = ({ addItem }) => {
    const [text, setText] = useState('');

    const onChange = (textValue) => setText(textValue);

    return (
    <View>
        <TextInput placeholder="Item name" style={styles.input} onChangeText={onChange}/>
        <TouchableOpacity onPress={() => addItem(text)} style={styles.btn}>
            <Text style={styles.btnText}>+ Add Item</Text>
        </TouchableOpacity>
    </View>
    )
}

AddItem.defaultProps = {
  title: "Default AddItem"
}

const styles = StyleSheet.create({
  input: {
      height: 60,
      padding: 8,
      fontSize: 16
  },
  btn: {
      backgroundColor: '#c2bad8',
      padding: 9,
      margin: 5
  },
  btnText: {
      color: 'darkslateblue',
      fontSize: 20,
      textAlign: "center"
  }
});

export default AddItem;