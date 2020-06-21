import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Picker} from '@react-native-community/picker';

const Input = ({
  type,
  label,
  value,
  onChangeText,
  secureTextEntry,
  disable,
  select,
  onValueChange,
  selectItem,
  keyboard,
}) => {
  const [border, setBorder] = useState(colors.border);
  const onFocusForm = () => {
    setBorder(colors.primary);
  };
  const onBlurForm = () => {
    setBorder(colors.border);
  };
  if (select) {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.picker}>
          <Picker selectedValue={value} onValueChange={onValueChange}>
            {selectItem.map(item => {
              return (
                <Picker.Item
                  key={item.id}
                  label={item.label}
                  value={item.value}
                />
              );
            })}
          </Picker>
        </View>
      </View>
    );
  }

  if (type === 'search') {
    return (
      <View>
        <TextInput
          onFocus={onFocusForm}
          onBlur={onBlurForm}
          style={styles.input(border, type)}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          editable={!disable}
          selectTextOnFocus={!disable}
          placeholder="Cari"
        />
      </View>
    );
  }

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input(border)}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        editable={!disable}
        selectTextOnFocus={!disable}
        keyboardType={keyboard ? 'numeric' : 'default'}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: (border, type) => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    padding: type === 'search' ? 8 : 12,
  }),
  label: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: '2%',
    fontFamily: fonts.primary[400],
  },
  picker: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 4,
  },
});
