import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { ButtonLearn } from '../screenComponent/ButtonLearn';
import CardCategories from '../screenComponent/Beginner';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainScreenNavigator from '../TopNavigation/TopNavigation';

const Learn = () => {
  return (
    <SafeAreaView>
      <View>
        <ScrollView>
          <View style={styles.topNav}>
            <View
              style={{
                marginLeft: 20,
                marginTop: 50,
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 12,
                }}
              >
                <AntDesign
                  name="arrowleft"
                  size={24}
                  color="black"
                  onPress={() => navigation.goBack()}
                />
              </View>
              <View>
                <Text style={styles.topNavTitle}>Bài Tập</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              marginLeft: 20,
              marginTop: 24,
            }}
          ></View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topNav: {
    width: '100%',
    height: 120,
    backgroundColor: '#83B9FF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  topNavTitle: {
    fontSize: 18,
    lineHeight: 21.94,
    color: 'white',
    marginLeft: 16,
  },
});

export default Learn;
