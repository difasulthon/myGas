import React, {useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {ILLogin} from '../../assets';
import {Input, Button, Link, Gap} from '../../components';
import {colors, fonts, useForm, SET_LOADING} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import {loginAction} from '../../redux/action';

export default function Login({navigation}) {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const userId = useSelector(state => state.authReducer.userId);
  const role = useSelector(state => state.authReducer.role);

  useEffect(() => {
    if (userId !== '') {
      if (role === 'Pembeli') {
        dispatch({type: SET_LOADING, status: false});
        navigation.replace('MainApp');
      }
      if (role === 'pangkalan') {
        dispatch({type: SET_LOADING, status: false});
        navigation.replace('MainAppSeller');
      }
    }
  }, [navigation, role, userId, dispatch]);

  const onSubmit = () => {
    dispatch({type: SET_LOADING, status: true});
    dispatch(loginAction(form));
  };

  return (
    <View style={styles.page}>
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ILLogin />
          <Gap height={40} />
          <Text style={styles.title}>Selamat datang, silahkan masuk</Text>
          <Gap height={40} />
          <Input
            label="Email"
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={16} />
          <Input
            label="Password"
            value={form.password}
            onChangeText={value => setForm('password', value)}
            secureTextEntry
          />
          <Gap height={40} />
          <Button title="Sign In" onPress={onSubmit} />
          <Gap height={12} />
          <Link
            title="Create New Account"
            size={14}
            align="center"
            onPress={() => navigation.navigate('Register')}
          />
        </ScrollView>
      </View>
      <Text style={styles.version}>V 1.0.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 40,
    paddingBottom: 0,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
    maxWidth: 150,
  },
  version: {
    textAlign: 'center',
    color: colors.secondary,
    fontFamily: fonts.primary[700],
    fontSize: 12,
    marginBottom: 16,
  },
});
