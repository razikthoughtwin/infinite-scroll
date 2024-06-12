import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/Entypo';


const SearchData = ({search,handlesearchinput}) => {
  const [clicked, setClicked] = useState(false);
  // const [search, setSearch] = useState('');
  // console.log(search);
  return (
    <View
      style={{
        backgroundColor: 'black',
        height: responsiveHeight(7),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
      />
    </View>
  );
};

export default SearchData;
