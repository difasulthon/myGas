/* eslint-disable radix */
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Alert, ScrollView} from 'react-native';
import Moment from 'moment';
import {Header, CardTime, Input, Button, Gap} from '../../components';
import {colors, useForm, SET_LOADING} from '../../utils';
import {useSelector, useDispatch} from 'react-redux';
import {inputStok} from '../../redux/action';

var idLocale = require('moment/locale/id');
Moment.updateLocale('id', idLocale);

const InputStok = ({navigation}) => {
  const [currentDate, setCurrentDate] = useState('');

  const [form, setForm] = useForm({
    gas3Kg: 0,
    gas12Kg: 0,
    brightGas: 0,
  });

  useEffect(() => {
    setCurrentDate(Date.now());
    const interval = setInterval(() => {
      setCurrentDate(Date.now());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const idPangkalan = useSelector(state => state.authReducer.userId);
  const namaPangkalan = useSelector(state => state.authReducer.fullName);
  const photo = useSelector(state => state.authReducer.photo);

  const dispatch = useDispatch();

  const onSubmit = () => {
    Alert.alert('Input Stok', 'Anda yakin ?', [
      {
        text: 'Batal',
        onPress: () => {
          return;
        },
      },
      {
        text: 'Ya',
        onPress: () => {
          dispatch({type: SET_LOADING, status: true});
          let totalGas =
            parseInt(form.gas3Kg) +
            parseInt(form.gas12Kg) +
            parseInt(form.brightGas);
          dispatch(
            inputStok(idPangkalan, namaPangkalan, photo, totalGas, form),
            setForm('reset'),
          );
          dispatch({type: SET_LOADING, status: false});
          navigation.goBack();
        },
      },
    ]);
  };

  return (
    <View style={styles.page}>
      <Header title="Input Stok" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={16} />
          <CardTime
            jam={Moment(currentDate).format('HH:mm:ss')}
            hari={Moment(currentDate).format('dddd, DD MMMM YYYY')}
          />
          <Gap height={20} />
          <Input
            label="Gas 3Kg"
            keyboard="numeric"
            value={form.gas3Kg}
            onChangeText={value => setForm('gas3Kg', value)}
          />
          <Gap height={16} />
          <Input
            label="Gas 12Kg"
            keyboard="numeric"
            value={form.gas12Kg}
            onChangeText={value => setForm('gas12Kg', value)}
          />
          <Gap height={16} />
          <Input
            label="Bright Gas"
            keyboard="numeric"
            value={form.brightGas}
            onChangeText={value => setForm('brightGas', value)}
          />
          <Gap height={40} />
          <Button title="Submit" onPress={onSubmit} />
        </ScrollView>
      </View>
    </View>
  );
};

export default InputStok;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 40,
  },
});
