import {FlatList, RefreshControl,View} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import MovieCard from './MovieCard';
import SearchData from './SearchData';

const MovieList = ({
  data,
  renderFooter,
  handleLoadMore,
  handleRefresh,
  refreshing,
  filtered,
  setData,
}) => {
  const [search, setSearch] = useState('');
  const [scrollPosition, setScrollPosition] = useState(50);

  const handleScroll = e => {
    let y = e.nativeEvent.contentOffset.y;
    setScrollPosition(y);
  };

  const handlesearchinput = text => {
    setSearch(text);
    const filterdedata = filtered.filter(function (item) {
      // console.log("data",item)
      return item.name.toLowerCase().includes(search.toLowerCase());
    });
    setData(filterdedata);
  };

  return (
    <View style={{paddingBottom: responsiveHeight(5)}}>
      <SearchData
        search={search}
        handlesearchinput={handlesearchinput}
        scrollPosition={scrollPosition}
      />
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{
          backgroundColor: 'black',
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingBottom: responsiveHeight(5),
          alignItems: 'center',
          paddingLeft:25,
          gap: 10,
          position: 'relative',
          top: 40,
        }}
        renderItem={({item}) => {
          // console.log("--===========>",item["poster_image"])
          return <MovieCard item={item}  />;
        }}
        ListFooterComponent={renderFooter}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        onScroll={e => handleScroll(e)}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            tintColor="red"
          />
        }
      />
    </View>
  );
};

export default MovieList;
