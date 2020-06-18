import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import {Header, Input, Gap, Button} from '../../components';
import {colors, useForm, showError, SET_LOADING} from '../../utils';
import {ILNullPhoto, IconAddPhoto, IconRemovePhoto} from '../../assets';
import {signUpAction} from '../../redux/action';

const Register = ({navigation}) => {
  const [photo, setPhoto] = useState(ILNullPhoto);
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photoForDB, setPhotoForDB] = useState('');
  const [form, setForm] = useForm({
    fullName: '',
    role: 'Pembeli',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const userId = useSelector(state => state.authReducer.userId);
  const role = useSelector(state => state.authReducer.role);

  const [itemRole] = useState([
    {
      id: 1,
      label: 'Pembeli',
      value: 'pembeli',
    },
    {
      id: 2,
      label: 'Pangkalan',
      value: 'pangkalan',
    },
  ]);

  const getImage = () => {
    ImagePicker.launchImageLibrary(
      {quality: 1, maxWidth: 200, maxHeight: 200},
      response => {
        if (response.didCancel || response.error) {
          showError('oops, sepertinya anda tidak memilih foto nya?');
        } else {
          const source = {uri: response.uri};

          setPhotoForDB(`data:${response.type};base64, ${response.data}`);
          setPhoto(source);
          setHasPhoto(true);
        }
      },
    );
  };

  useEffect(() => {
    if (userId !== '') {
      console.log('to Login');
      dispatch({type: SET_LOADING, status: false});
      navigation.goBack();
    }
  }, [navigation, role, userId, dispatch]);

  const onSubmit = () => {
    dispatch({type: SET_LOADING, status: true});
    dispatch(signUpAction(form, photoForDB));
  };

  return (
    <View style={styles.page}>
      <Header title="Daftar" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input
            label="Full Name"
            value={form.fullName}
            onChangeText={value => setForm('fullName', value)}
          />
          <Gap height={16} />
          <Input
            label="Role"
            value={form.role}
            select
            selectItem={itemRole}
            onValueChange={value => setForm('role', value)}
          />
          <Gap height={16} />
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
          <Gap height={16} />
          <View style={styles.addPhotoWrapper}>
            <TouchableOpacity style={styles.photoWrapper} onPress={getImage}>
              <Image source={photo} style={styles.photo} />
              {!hasPhoto && <IconAddPhoto style={styles.addPhoto} />}
              {hasPhoto && <IconRemovePhoto style={styles.addPhoto} />}
            </TouchableOpacity>
          </View>
          <Gap height={32} />
          <Button title="Sign Up" onPress={onSubmit} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    paddingHorizontal: 40,
    paddingTop: 20,
    paddingBottom: 10,
    flex: 1,
  },
  addPhotoWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {width: 110, height: 110, borderRadius: 110 / 2},
  addPhoto: {position: 'absolute', bottom: 8, right: 6},
});
