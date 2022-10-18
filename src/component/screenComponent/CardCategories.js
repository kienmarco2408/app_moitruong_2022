import { View, Text, Image } from 'react-native';
import React from 'react';

const CardCategories = () => {
  return (
    <View
      style={{
        height: 107,
        width: 376,
        borderWidth: 0.2,
        marginHorizontal: '5%',
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={require('../storage/imgs/img1.png')}
          style={{ width: 188, height: 107, borderRadius: 8 }}
        />
        <View style={{ justifyContent: 'center', marginLeft: 23 }}>
          <Text
            style={{
              fontSize: 18,
              color: '#145BB6',
              fontWeight: '700',
              lineHeight: 21,
              letterSpacing: -0.32,
            }}
          >
            Start
          </Text>
          <View style={{ flexDirection: 'row', marginTop: 3 }}>
            <Text
              style={{ fontSize: 12, lineHeight: 21, letterSpacing: -0.32 }}
            >
              1h 30 phút
            </Text>
            <Text
              style={{
                marginLeft: 12,
                fontSize: 12,
                lineHeight: 21,
                letterSpacing: -0.32,
              }}
            >
              4 bài
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardCategories;
