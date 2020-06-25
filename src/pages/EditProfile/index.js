import React, {useState} from 'react';
import {StyleSheet, View, ScrollView, Alert} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {Header, Profile, Input, Button, Gap} from '../../components';
import {colors, useForm, showError, showSuccess} from '../../utils';
import {useSelector, useDispatch} from 'react-redux';
import {updateProfileAction} from '../../redux/action';

const EditProfile = ({navigation}) => {
  const userId = useSelector(state => state.authReducer.userId);
  const fullName = useSelector(state => state.authReducer.fullName);
  const role = useSelector(state => state.authReducer.role);
  const oldPhoto = useSelector(state => state.authReducer.photo);
  const email = useSelector(state => state.authReducer.email);

  const [photo, setPhoto] = useState(oldPhoto);
  const [photoForDB, setPhotoForDB] = useState(oldPhoto);

  const [form, setForm] = useForm({
    userId: userId,
    fullName: fullName,
    role: role,
    email: email,
    password: '',
  });

  const dispatch = useDispatch();

  const getImage = () => {
    ImagePicker.launchImageLibrary(
      {quality: 1, maxWidth: 200, maxHeight: 200},
      response => {
        if (response.didCancel || response.error) {
          showError('oops, sepertinya anda tidak memilih foto nya?');
        } else {
          setPhotoForDB(`data:${response.type};base64, ${response.data}`);
          setPhoto(`data:${response.type};base64, ${response.data}`);
        }
      },
    );
  };

  const updateProfile = () => {
    Alert.alert('Update Profile', 'Apakah anda yakin ?', [
      {
        text: 'Batal',
        onPress: () => {
          return;
        },
      },
      {
        text: 'Ya',
        onPress: () => {
          dispatch(updateProfileAction(form, photoForDB));
          showSuccess('Edit profile sukses');
          navigation.goBack();
        },
      },
    ]);
  };

  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={16} />
          <Profile isRemove photo={{uri: photo}} onPress={getImage} />
          <Gap height={16} />
          <Input
            label="Full Name"
            value={form.fullName}
            onChangeText={value => setForm('fullName', value)}
          />
          <Gap height={16} />
          <Input label="Email" value={email} disable />
          <Gap height={16} />
          <Input
            label="Password"
            value={form.password}
            onChangeText={value => setForm('password', value)}
            secureTextEntry
          />
          <Gap height={40} />
          <Button title="Update" onPress={updateProfile} />
        </ScrollView>
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 40,
  },
});
