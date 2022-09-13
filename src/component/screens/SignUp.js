import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  StatusBar,
} from 'react-native';
import React from 'react';
import { Button, NativeBaseProvider, Box } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Feather } from '@expo/vector-icons';

function SignUp() {
  const navigation = useNavigation();
  const [loaded] = useFonts({
    Poppins_Light: require('../../../assets/font/Poppins/Poppins-Light.ttf'),
    Poppins_SemiBold: require('../../../assets/font/Poppins/Poppins-SemiBold.ttf'),
    Poppins_Bold: require('../../../assets/font/Poppins/Poppins-Bold.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View>
        <View>
          <Text
            style={{
              fontFamily: 'Poppins_Bold',
              fontSize: 36,
              marginLeft: 16,
              marginLeft: 16,
              marginTop: 85,
              color: '#00A651',
            }}
          >
            Đăng ký
          </Text>
        </View>

        <View>
          <View
            style={{
              height: 50,
              width: '92%',
              marginRight: 16,
              marginLeft: '4%',
              paddingLeft: 20,
              borderWidth: 1,
              paddingTop: 16,
              marginTop: 50,
              borderRadius: 6,
            }}
          >
            <TextInput
              style={{
                fontFamily: 'Poppins_SemiBold',
              }}
              variant="outline"
              placeholder="Nhập tên tài khoản"
              _light={{
                placeholderTextColor: '#787878',
              }}
              _dark={{
                placeholderTextColor: '#787878',
              }}
            />
          </View>
        </View>

        <View>
          <View
            style={{
              height: 50,
              width: '92%',
              marginRight: 16,
              marginLeft: '4%',
              paddingLeft: 20,
              borderWidth: 1,
              paddingTop: 16,
              marginTop: 16,
              borderRadius: 6,
            }}
          >
            <TextInput
              style={{
                fontFamily: 'Poppins_SemiBold',
              }}
              variant="outline"
              secureTextEntry={true}
              placeholder="Nhập email của bạn"
              _light={{
                placeholderTextColor: '#787878',
              }}
              _dark={{
                placeholderTextColor: '#787878',
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 14.52,
              marginTop: 8,
              marginLeft: '7%',
              color: '#707070',
            }}
          >
            (vd: abc@gmail.com...)
          </Text>
        </View>

        <View>
          <View
            style={{
              height: 50,
              width: '92%',
              marginRight: 16,
              marginLeft: '4%',
              paddingLeft: 20,
              borderWidth: 1,
              paddingTop: 16,
              marginTop: 16,
              borderRadius: 6,
            }}
          >
            <TextInput
              style={{
                fontFamily: 'Poppins_SemiBold',
              }}
              variant="outline"
              secureTextEntry={true}
              placeholder="Nhập số điện thoại của bạn"
              _light={{
                placeholderTextColor: '#787878',
              }}
              _dark={{
                placeholderTextColor: '#787878',
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 14.52,
              marginTop: 8,
              marginLeft: '7%',
              color: '#707070',
            }}
          >
            (vd: 0986382***)
          </Text>
        </View>
        <View>
          <View
            style={{
              height: 50,
              width: '92%',
              marginRight: 16,
              marginLeft: '4%',
              paddingLeft: 20,
              borderWidth: 1,
              paddingTop: 16,
              marginTop: 16,
              borderRadius: 6,
            }}
          >
            <TextInput
              style={{
                fontFamily: 'Poppins_SemiBold',
              }}
              variant="outline"
              secureTextEntry={true}
              placeholder="Nhập mật khẩu của bạn"
              _light={{
                placeholderTextColor: '#787878',
              }}
              _dark={{
                placeholderTextColor: '#787878',
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 14.52,
              marginTop: 8,
              marginLeft: '7%',
              color: '#707070',
            }}
          >
            (vd: mật khẩu từ 6-8 ký tự, có một chữ in hoa, một ký tự đặc biệt)
          </Text>
        </View>
        <View>
          <View
            style={{
              height: 50,
              width: '92%',
              marginRight: 16,
              marginLeft: '4%',
              paddingLeft: 20,
              borderWidth: 1,
              paddingTop: 16,
              marginTop: 16,
              borderRadius: 6,
            }}
          >
            <TextInput
              style={{
                fontFamily: 'Poppins_SemiBold',
              }}
              variant="outline"
              secureTextEntry={true}
              placeholder="Xác nhận mật khẩu của bạn"
              _light={{
                placeholderTextColor: '#787878',
              }}
              _dark={{
                placeholderTextColor: '#787878',
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 12,
              lineHeight: 14.52,
              marginTop: 8,
              marginLeft: '7%',
              color: '#707070',
            }}
          >
            (vd: mật khẩu từ 6-8 ký tự, có một chữ in hoa, một ký tự đặc biệt)
          </Text>
        </View>

        {/* Button*/}
        <Box style={{ marginLeft: '4%', marginTop: '15%' }}>
          <Button
            onPress={() => navigation.goBack()}
            style={{
              height: 48,
              width: '95%',
              backgroundColor: '#8DC63F',
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Poppins_SemiBold',
                color: 'white',
              }}
            >
              Đăng ký
            </Text>
          </Button>
        </Box>
      </View>
    </SafeAreaView>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <SignUp />
    </NativeBaseProvider>
  );
};
