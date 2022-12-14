import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';

const Advance = () => {
  const learn = [
    {
      id: 1,
      titleLearn: 'Start',
      numberLearn: '4 bài',
      time: '1h 30 phút',
      img: require('../storage/imgs/img1.png'),
    },
    {
      id: 2,
      titleLearn: 'Start',
      numberLearn: '4 bài',
      time: '1h 30 phút',
      img: require('../storage/imgs/img1.png'),
    },
    {
      id: 3,
      titleLearn: 'Start',
      numberLearn: '4 bài',
      time: '1h 30 phút',
      img: require('../storage/imgs/img1.png'),
    },
    {
      id: 4,
      titleLearn: 'Start',
      numberLearn: '4 bài',
      time: '1h 30 phút',
      img: require('../storage/imgs/img1.png'),
    },
    {
      id: 5,
      titleLearn: 'Start',
      numberLearn: '4 bài',
      time: '1h 30 phút',
      img: require('../storage/imgs/img1.png'),
    },
  ];
  return (
    <View>
      {learn.map((data, index) => {
        return (
          <View
            key={index}
            style={{
              height: 107,
              width: 376,
              borderWidth: 0.2,
              marginHorizontal: '5%',
              marginBottom: 23,
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={data.img}
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
                  {data.titleLearn}
                </Text>
                <View style={{ flexDirection: 'row', marginTop: 3 }}>
                  <Text
                    style={{
                      fontSize: 12,
                      lineHeight: 21,
                      letterSpacing: -0.32,
                    }}
                  >
                    {data.time}
                  </Text>
                  <Text
                    style={{
                      marginLeft: 12,
                      fontSize: 12,
                      lineHeight: 21,
                      letterSpacing: -0.32,
                    }}
                  >
                    {data.numberLearn}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Advance;
