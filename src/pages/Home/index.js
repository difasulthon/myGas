import React, {useState} from 'react';
import {StyleSheet, View, ImageBackground, FlatList} from 'react-native';
import {colors} from '../../utils';
import {Input, Card} from '../../components';
import {IconSearch, ILHomeBuyer, JSONPangkalan} from '../../assets';

const Home = ({navigation}) => {
  const [data] = useState(JSONPangkalan.pangkalan);

  const numColoumn = 2;

  const formatData = (dataSet, numColoumnSet) => {
    const numberOfFullRows = Math.floor(data.length / numColoumnSet);

    let numberOfElementsLastRow =
      dataSet.length - numberOfFullRows * numColoumnSet;
    while (
      numberOfElementsLastRow !== numColoumnSet &&
      numberOfElementsLastRow !== 0
    ) {
      dataSet.push({key: `blank-${numberOfElementsLastRow}`, empty: true});
      numberOfElementsLastRow++;
    }

    return dataSet;
  };

  const renderItem = ({item, index}) => {
    if (item.empty === true) {
      return <View />;
    }
    return (
      <Card
        onPress={() => navigation.navigate('DetailPangkalan')}
        id={item.id}
        nama={item.nama}
        stok={item.stok}
        photo={{uri: item.photo}}
      />
    );
  };

  return (
    <View style={styles.page}>
      <View style={styles.contentAbove}>
        <View style={styles.searchWrapper}>
          <Input type="search" />
          <IconSearch style={styles.iconSearch} />
        </View>
        <ImageBackground source={ILHomeBuyer} style={styles.bg} />
      </View>
      <View style={styles.listCard}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={formatData(data, numColoumn)}
          renderItem={renderItem}
          numColumns={numColoumn}
        />
      </View>
      <View style={styles.border} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentAbove: {
    flex: 1,
    backgroundColor: colors.white,
  },
  searchWrapper: {
    flex: 1,
    height: 39,
    width: 280,
    marginTop: 16,
    marginLeft: 40,
  },
  iconSearch: {
    position: 'absolute',
    top: 14,
    right: 17,
  },
  bg: {
    width: 363,
    height: 177,
    position: 'absolute',
    top: 60,
  },
  listCard: {
    height: '66%',
    paddingLeft: 30,
  },
  border: {
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
});