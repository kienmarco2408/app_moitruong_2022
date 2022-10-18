import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export const ButtonLearn = ({ navigation }) => {
  const [clicked, setclicked] = useState(0);
  const handleClick = (item, id) => {
    setclicked(id);
  };
  const [learn, setLearn] = useState([
    {
      name: 'Beginner',
    },
    {
      name: 'Intermediate',
    },
    {
      name: 'Advance',
    },
  ]);
  return (
    <View style={{ flexDirection: 'row' }}>
      {learn.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={(item) => handleClick(item, index)}
            key={index}
            style={[
              index === clicked ? styles.buttonActiveView : styles.buttonView,
              // index === 0
              //   ? {
              //       borderTopLeftRadius: 10,
              //       borderBottomLeftRadius: 10,
              //     }
              //   : '',
            ]}
          >
            <Button
              dark="outlined-tonal"
              uppercase=""
              style={index === clicked ? styles.textActive : styles.text}
              mode="outlined"
            >
              <Text style={index === clicked ? styles.textActive : styles.text}>
                {item.name}
              </Text>
            </Button>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  textActive: {
    color: 'white',
    width: 125,
    height: 40,
  },
  text: {
    color: '#6683FE',
    width: 125,
    height: 40,
  },
  buttonView: {
    backgroundColor: 'white',
    borderColor: '#6683FE',
    color: '#6683FE',
    marginRight: 5,
    borderRadius: 5,
  },
  buttonActiveView: {
    backgroundColor: '#6683FE',
    borderColor: 'white',
    color: 'white',
    marginRight: 5,
    borderRadius: 5,
  },
});
