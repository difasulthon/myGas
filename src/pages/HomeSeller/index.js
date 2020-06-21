import React, {useState, useEffect, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {ILLogoHome, ILHomeSeller} from '../../assets';
import {Gap, CardSeller} from '../../components';
import {colors, fonts} from '../../utils';
import {useSelector, useDispatch} from 'react-redux';
import {getDataPangkalan} from '../../redux/action';

const HomeSeller = ({navigation}) => {
  const [stok, setStok] = useState(0);
  const [pesanan, setPesanan] = useState(0);
  const totalStok = useSelector(state => state.stokReducer.totalStok);
  const totalPesanan = useSelector(state => state.pesanReducer.totalPesanan);
  const userId = useSelector(state => state.authReducer.userId);

  const dispatch = useDispatch();

  console.log('total stok: ', stok);
  console.log('total pesanan: ', pesanan);

  useEffect(() => {
    getDataStokPesanan();
  }, [getDataStokPesanan]);

  const getDataStokPesanan = useCallback(() => {
    dispatch(getDataPangkalan(userId));
    setStok(totalStok);
    setPesanan(totalPesanan);
  }, [totalPesanan, totalStok, userId, dispatch]);

  return (
    <View style={styles.page}>
      <Gap height={20} />
      <ILLogoHome style={styles.logo} />
      <ImageBackground source={ILHomeSeller} style={styles.bg} />
      <TouchableOpacity style={styles.kotak}>
        <View>
          <Text style={styles.textDesc}>Pesanan</Text>
          <Text style={styles.textDesc}>{pesanan}</Text>
        </View>
        <View style={styles.borderVertical} />
        <View>
          <Text style={styles.textDesc}>Stok</Text>
          <Text style={styles.textDesc}>{stok}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.textTittle}>Stok Gas</Text>
        <Gap height={8} />
        <CardSeller
          onPress={() => navigation.navigate('InputStok')}
          title="Input Disini"
          desc="Pastikan sesuai dengan jumlah gas anda"
          total={stok}
          stok
        />
        <Gap height={16} />
        <View style={styles.border} />
        <Gap height={16} />
        <View style={styles.bottomContent}>
          <View>
            <Text style={styles.textTittle}>Pesanan</Text>
            <Gap height={8} />
            <CardSeller
              onPress={() => navigation.navigate('Pesanan')}
              title="Cek Pesanan"
              desc="Pembeli anda sedang menunggu"
              total={pesanan}
              pesanan
            />
          </View>
          <View style={styles.border} />
        </View>
      </View>
    </View>
  );
};

export default HomeSeller;

const styles = StyleSheet.create({
  bg: {
    width: 360,
    height: 180,
    position: 'absolute',
    top: 42,
  },
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  logo: {
    marginHorizontal: 134,
  },
  kotak: {
    width: 194,
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    elevation: 2,
    paddingVertical: 8,
    paddingHorizontal: 16,
    position: 'absolute',
    top: '31%',
    left: '25%',
    backgroundColor: colors.white,
  },
  borderVertical: {
    width: 1,
    height: 45,
    backgroundColor: colors.borderSecond,
    marginLeft: 25,
    marginRight: 16,
  },
  textDesc: {
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    fontSize: 14,
  },
  content: {
    position: 'absolute',
    top: '40%',
    paddingTop: 32,
    width: '100%',
    paddingHorizontal: 40,
  },
  textTittle: {
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
    fontSize: 14,
  },
  border: {
    borderTopColor: colors.border,
    borderTopWidth: 1,
    marginHorizontal: -40,
  },
  borderBottom: {
    borderTopColor: colors.border,
    borderTopWidth: 1,
  },
  bottomContent: {
    height: '59%',
    justifyContent: 'space-between',
  },
});
