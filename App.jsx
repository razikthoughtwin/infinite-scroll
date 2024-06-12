import React, {useState, useEffect} from 'react';
import {ActivityIndicator, SafeAreaView} from 'react-native';
import SearchData from './components/SearchData';
import MovieList from './components/MovieList';

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState([]);

  const file1 = require('./model/file1');
  const file2 = require('./model/file2');
  const file3 = require('./model/file3');

  const loadLocalData = async (pageNum = 1) => {
    try {
      setLoading(true);
      let newData;
      if (pageNum === 1) {
        newData = file1;
      } else if (pageNum === 2) {
        newData = file2;
      } else {
        newData = file3;
      }
      setData(prevData =>
        pageNum === 1
          ? newData.page.content_items.content
          : [...prevData, ...newData.page.content_items.content],
      );

      setFiltered([
        ...file1.page.content_items.content,
        ...file2.page.content_items.content,
        ...file3.page.content_items.content,
      ]);

      setPage(pageNum);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadLocalData();
  }, []);

  const handleLoadMore = () => {
    setTimeout(() => {
      if (!loading && page < 3) {
        loadLocalData(page + 1);
      }
    }, 3000);
  };
  const handleRefresh = () => {
    setRefreshing(true);
    loadLocalData(1).then(() => setRefreshing(false));
  };
  const renderFooter = () => {
    if (!loading) return null;
    return <ActivityIndicator size="large" />;
  };

  const handlesearchinput = text => {
    setSearch(text);
    const filterdedata = filtered.filter(function (item) {
      // console.log("data",item)
      return item.name.toLowerCase().includes(search.toLowerCase());
    });
    setData(filterdedata);
  };

  // console.log('filtereddata', filtered);
  return (
    <SafeAreaView style={{backgroundColor: 'black'}}>
      <SearchData search={search} handlesearchinput={handlesearchinput} />
      <MovieList
        data={data}
        renderFooter={renderFooter}
        handleRefresh={handleRefresh}
        handleLoadMore={handleLoadMore}
        refreshing={refreshing}
      />
    </SafeAreaView>
  );
};
export default App;
