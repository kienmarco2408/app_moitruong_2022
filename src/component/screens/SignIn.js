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

function SignIn() {
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
              marginTop: 94,
              color: '#00A651',
            }}
          >
            Đăng nhập
          </Text>
        </View>

        {/*Username input field*/}
        <View>
          <View
            style={{
              height: 50,
              width: '92%',
              marginRight: 16,
              marginLeft: '4%',
              paddingLeft: 20,
              borderWidth: 1,
              marginTop: 64,
              borderRadius: 6,
              flexDirection: 'row',
            }}
          >
            <Feather
              name="user"
              style={{ marginTop: 11, marginRight: 12 }}
              size={24}
            />
            <TextInput
              style={{
                fontFamily: 'Poppins_SemiBold',
              }}
              variant="outline"
              placeholder="Tên tài khoản"
              _light={{
                placeholderTextColor: '#787878',
              }}
              _dark={{
                placeholderTextColor: '#787878',
              }}
            />
          </View>
        </View>
        {/* Password Input Field */}
        <View>
          <View
            style={{
              height: 50,
              width: '92%',
              marginRight: 16,
              marginLeft: '4%',
              paddingLeft: 20,
              borderWidth: 1,
              marginTop: 16,
              borderRadius: 6,
              flexDirection: 'row',
            }}
          >
            <Feather
              name="lock"
              style={{ marginTop: 11, marginRight: 12 }}
              size={24}
            />
            <TextInput
              style={{
                fontFamily: 'Poppins_SemiBold',
              }}
              variant="outline"
              secureTextEntry={true}
              placeholder="Nhập mật khẩu"
              _light={{
                placeholderTextColor: '#787878',
              }}
              _dark={{
                placeholderTextColor: '#787878',
              }}
            />
          </View>
        </View>

        {/* Button*/}
        <Box style={{ marginLeft: '4%', marginTop: '20%' }}>
          <Button
            onPress={() => navigation.push('Bottom')}
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
              Đăng nhập
            </Text>
          </Button>
        </Box>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 120,
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              fontFamily: 'Poppins_SemiBold',
              fontSize: 16,
              color: '#787878',
            }}
          >
            Bạn chưa đăng ký?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text
              style={{
                fontFamily: 'Poppins_SemiBold',
                fontSize: 16,
                color: '#8DC63F',
              }}
            >
              Đăng ký
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 16,
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              fontFamily: 'Poppins_SemiBold',
              fontSize: 16,
              color: '#787878',
            }}
          >
            Quên mật khẩu
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <SignIn />
    </NativeBaseProvider>
  );
};
