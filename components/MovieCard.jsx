import {View, Text, Image} from 'react-native';
import React from 'react';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { images } from '../utils/images';

const MovieCard = ({item}) => {
  return (
    <View
      style={{
        // width: responsiveWidth(33.3),
        // height: responsiveHeight(28),
        borderWidth: 1,
        // borderColor: 'red',
        // padding: 12,
        marginBottom: responsiveWidth(3.5),
      }}>
      <Image
        source={images[item.poster_image]}
        style={{
          width: responsiveWidth(27),
          // maxWidth:"100%",
          height: responsiveWidth(50),
        }}
        resizeMode="contain"
      />
      <Text
        style={{
          fontSize: responsiveFontSize(2),
          fontWeight: 600,
          color: 'white',
          marginTop: responsiveHeight(-2),
        }}>
        {item.name.length > 10 ? `${item.name.slice(0, 10)}...` : item.name}
      </Text>
    </View>
  );
};

export default MovieCard;
