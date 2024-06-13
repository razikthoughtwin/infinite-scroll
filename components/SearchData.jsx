import {View, Text, TextInput, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchData = ({search, handlesearchinput,scrollPosition}) => {
  const [clicked, setClicked] = useState(false);
  return (
    <View
      style={{
        backgroundColor: !scrollPosition === 100 && 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex:5,
        position:'absolute',
        top:0

      }}>
      <ImageBackground
        source={require('../model/nav_bar.png')}
        resizeMode="cover"
        style={{
          width: responsiveWidth(100),
          height: responsiveHeight(7),
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        {!clicked ? (
          <Text
            style={{
              color: 'white',
              fontSize: responsiveFontSize(2.5),
              fontWeight: 600,
            }}>
            Romantic Comedy
          </Text>
        ) : (
          <TextInput
            placeholder="search"
            placeholderTextColor="black"
            style={{
              backgroundColor: 'white',
              width: responsiveWidth(85),
              height: responsiveHeight(5),
              fontSize: responsiveFontSize(2),
              paddingLeft: 20,
              borderRadius: 7,
              borderWidth: 1,
            }}
            value={search}
            onChangeText={handlesearchinput}
          />
        )}

        <Icon
          name="search"
          size={25}
          color="white"
          onPress={() => setClicked(!clicked)}
          style={{marginTop:clicked && 10}}
        />
      </ImageBackground>
    </View>
  );
};

export default SearchData;
