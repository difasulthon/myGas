import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import {fonts, colors} from '../../utils';
import List from '../../components/moleculs/List';
import {ILHistory} from '../../assets';
import {useSelector, useDispatch} from 'react-redux';
import {getHistoryPangkalan} from '../../redux/action/pesan';

const History = ({navigation}) => {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  const role = useSelector(state => state.authReducer.role);
  const userId = useSelector(state => state.authReducer.userId);
  const listHistory = useSelector(state => state.pesanReducer.listHistory);

  useEffect(() => {
    getDataHistory();

    return () => getDataHistory();
  }, [getDataHistory]);

  const getDataHistory = useCallback(() => {
    if (role === 'pangkalan') {
      console.log('on getDataHistory');
      dispatch(getHistoryPangkalan(userId));
      setData(listHistory);
    }
    if (role === 'Pembeli') {
    }
  }, [dispatch, role, userId, listHistory]);

  return (
    <View style={styles.page}>
      <View>
        <Text style={styles.title}>History</Text>
        {console.log('data: ', data)}
        {data.length === 0 ? (
          <View style={styles.contentEmpty}>
            <Image source={ILHistory} style={styles.imageEmpty} />
            <Text style={styles.textEmpty}>Belum ada transaksi</Text>
          </View>
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={item => item.id}
            renderItem={item => (
              <List
                onPress={() =>
                  navigation.navigate('DetailHistory', {
                    dataHistory: item.item,
                    role: role,
                  })
                }
                photo={
                  role === 'pangkalan'
                    ? {uri: item.item.photoPembeli}
                    : {uri: item.item.photoPangkalan}
                }
                nama={
                  role === 'pangkalan'
                    ? item.item.namaPembeli
                    : item.item.namaPangkalan
                }
                desc={item.item.tanggal}
                tanggal
              />
            )}
          />
        )}
      </View>
      <View style={styles.border} />
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
    paddingTop: 40,
    paddingLeft: 40,
    paddingBottom: 14,
  },
  contentEmpty: {
    flex: 1,
    alignItems: 'center',
    marginTop: 30,
  },
  imageEmpty: {
    height: 150,
    width: 280,
  },
  textEmpty: {
    paddingTop: 10,
    fontFamily: fonts.primary[700],
    fontSize: 14,
    color: colors.primary,
  },
  border: {
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
});
