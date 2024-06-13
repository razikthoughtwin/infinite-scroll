import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {images} from '../utils/images';

const MovieCard = ({item}) => {
  return (
    <View
      style={{
        borderWidth: 1,
        marginBottom: responsiveWidth(1),
        alignSelf:'flex-start'
      }}>
      <Image
        source={images[item.poster_image]}
        style={{
          width: responsiveWidth(27),
          height: responsiveWidth(50),
          marginTop:responsiveHeight(0.5)
        }}
        resizeMode="contain"
      />
      <Text
        style={{
          fontSize: responsiveFontSize(2),
          fontWeight: 300,
          color: 'white',
          marginTop: responsiveHeight(-1.7),
        }}>
        {item.name.length > 10 ? `${item.name.slice(0, 10)}...` : item.name}
      </Text>
    </View>
  );
};

export default MovieCard;
