import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

const Detail = () => {
  const navigation = useNavigation();
  const [loaded] = useFonts({
    Poppins_Light: require('../../../assets/font/Poppins/Poppins-Light.ttf'),
    Poppins_SemiBold: require('../../../assets/font/Poppins/Poppins-SemiBold.ttf'),
    Poppins_Bold: require('../../../assets/font/Poppins/Poppins-Bold.ttf'),
    Poppins_Medium: require('../../../assets/font/Poppins/Poppins-Medium.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{
            position: 'absolute',
            width: 428,
            height: 428,
            backgroundColor: 'green',
          }}
        >
          {/* <Image
            source={postImage}
            style={{ width: 428, height: 428, position: 'absolute' }}
          /> */}
          <TouchableOpacity onPress={() => navigation.goBack('Home')}>
            <Ionicons
              name="chevron-back"
              style={{
                paddingTop: 39,
                paddingLeft: 16,
                fontSize: 32,
                color: '#FFFFFF',
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 355,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            marginHorizontal: 10,
            backgroundColor: 'white',
            shadowOpacity: 0.25,
          }}
        >
          <View
            style={{
              width: 362,
              height: 'auto',
              marginTop: 24,
              marginHorizontal: 15,
              backgroundColor: 'blue',
            }}
          >
            <Text>Title</Text>
          </View>
          <View
            style={{
              width: 231,
              height: 15,
              marginHorizontal: 15,
              marginTop: 16,
              backgroundColor: 'grey',
            }}
          >
            <Text>Tác giả</Text>
          </View>

          <View style={{ marginTop: 16, marginHorizontal: 15 }}>
            <View
              style={{ width: 362, height: 'auto', backgroundColor: 'yellow' }}
            >
              <Text>Description</Text>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 15,
              marginTop: 32,
              width: 362,
              height: 42,
              backgroundColor: 'red',
            }}
          >
            <Text>Comment</Text>
          </View>
          <View
            style={{
              backgroundColor: 'aqua',
              width: 362,
              height: 'auto',
              marginHorizontal: 15,
              marginTop: 35,
            }}
          >
            <View
              style={{ width: 362, height: 'auto', backgroundColor: 'purple' }}
            >
              <View style={{ backgroundColor: 'grey', width: 184, height: 42 }}>
                <Text>Avt và tên user</Text>
              </View>
              <View
                style={{
                  backgroundColor: 'orange',
                  marginTop: 16,
                  height: 'auto',
                }}
              >
                <Text>Nội dung cmt</Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 18 }}>
                <AntDesign name="like2" size={24} style={{ marginRight: 18 }} />
                <FontAwesome name="comment-o" size={24} />
              </View>
            </View>
          </View>
          <View style={{ marginHorizontal: 15, marginTop: 60 }}>
            <View>
              <Text>Tin tức liên quan</Text>
            </View>

            <View>
              <ScrollView horizontal={true}>
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
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Detail;
