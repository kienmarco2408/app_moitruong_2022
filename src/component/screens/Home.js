import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={{ width: '100%', height: 114, backgroundColor: '#8DC63F' }}>
        <Text>Header</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{
            marginTop: 32,
            width: '90%',
            height: 170,
            borderRadius: 6,
            backgroundColor: 'red',
            marginHorizontal: '5%',
          }}
        >
          <Text>Slider</Text>
        </View>
        <View>
          <Text
            style={{
              color: '#8DC63F',
              fontSize: 16,
              marginLeft: '5%',
              marginTop: 32,
            }}
          >
            Tin tức
          </Text>
        </View>
        <View style={{ marginLeft: '5%', marginRight: '5%' }}>
          <ScrollView
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <TouchableOpacity onPress={() => navigation.push('Detail')}>
              <View>
                <View
                  style={{
                    height: 254,
                    width: 188,
                    backgroundColor: '#006838',
                    marginTop: 16,
                    marginRight: 20,
                  }}
                >
                  <Text>Card news</Text>
                </View>
              </View>
            </TouchableOpacity>

            <View>
              <View
                style={{
                  height: 254,
                  width: 188,
                  backgroundColor: '#006838',
                  marginTop: 16,
                }}
              >
                <Text>Card news</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        <View>
          <Text
            style={{
              color: '#8DC63F',
              fontSize: 16,
              marginLeft: '5%',
              marginTop: 32,
            }}
          >
            Quà Tặng
          </Text>
        </View>
        <View
          style={{ marginLeft: '5%', marginRight: '5%', marginBottom: '50%' }}
        >
          <ScrollView
            horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <TouchableOpacity>
              <View>
                <View
                  style={{
                    height: 254,
                    width: 188,
                    backgroundColor: '#006838',
                    marginTop: 16,
                    marginRight: 20,
                  }}
                >
                  <Text>Card news</Text>
                </View>
              </View>
            </TouchableOpacity>

            <View>
              <View
                style={{
                  height: 254,
                  width: 188,
                  backgroundColor: '#006838',
                  marginTop: 16,
                }}
              >
                <Text>Card news</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
