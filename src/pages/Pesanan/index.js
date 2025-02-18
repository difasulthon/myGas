import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, View, Image, Text, FlatList} from 'react-native';
import {Header, List, Gap} from '../../components';
import {colors, fonts} from '../../utils';
import {ILPesanan} from '../../assets';
import {useDispatch, useSelector} from 'react-redux';
import {getDataPesananAction} from '../../redux/action/pesan';

const Pesanan = ({navigation}) => {
  const [data, setData] = useState([]);

  const userId = useSelector(state => state.authReducer.userId);
  const listPesanan = useSelector(state => state.pesanReducer.listPesanan);

  const dispatch = useDispatch();

  const getDataPesanan = useCallback(() => {
    dispatch(getDataPesananAction(userId));
    setData(listPesanan);
  }, [dispatch, userId, listPesanan]);

  useEffect(() => {
    getDataPesanan();
  }, [getDataPesanan]);

  return (
    <View style={styles.page}>
      <Header title="Pesanan" onPress={() => navigation.goBack()} />
      <Gap height={20} />
      {data.length === 0 ? (
        <View style={styles.contentEmpty}>
          <Image source={ILPesanan} style={styles.imageEmpty} />
          <Text style={styles.textEmpty}>Belum ada pesanan</Text>
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={item => item.id}
          renderItem={item => (
            <List
              onPress={() =>
                navigation.navigate('DetailPesanan', {
                  type: 'seller',
                  dataPesanan: item.item,
                })
              }
              photo={{uri: item.item.photoPembeli}}
              nama={item.item.namaPembeli}
              desc={item.item.total}
              gas
            />
          )}
        />
      )}
    </View>
  );
};

export default Pesanan;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentEmpty: {
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
});
