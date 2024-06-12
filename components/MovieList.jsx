import {FlatList} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import MovieCard from './MovieCard';

const MovieList = ({
  data,
  renderFooter,
  handleLoadMore,
  handleRefresh,
  refreshing,
}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={{
        backgroundColor: 'black',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: responsiveHeight(5),
        alignItems: 'center',
        marginLeft: responsiveWidth(6),
        gap: 10,
        // justifyContent:"space-evenly"
      }}
      renderItem={({item}) => {
        // console.log("--===========>",item["poster_image"])
        return <MovieCard item={item} />;
      }}
      ListFooterComponent={renderFooter}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      refreshing={refreshing}
      onRefresh={handleRefresh}
    />
  );
};

export default MovieList;
