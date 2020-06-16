const mainColors = {
  green1: '#52BF90',
  green2: '#317256',
  green3: '#398564',
  dark1: '#18392B',
  dark2: '#495A75',
  dark3: '#8092AF',
  grey1: '#7D8797',
  grey2: '#E9E9E9',
  grey3: '#EDEEF0',
  grey4: '#B1B7C2',
  grey5: '#989797',
  blue1: '#0066CB',
  black1: '#000000',
  black2: 'rgba(0, 0, 0, 0.5)',
  red1: '#E06379',
  red2: '#CD2626',
};

export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.green2,
  tertiary: mainColors.green3,
  white: 'white',
  black: 'black',
  disable: mainColors.grey3,
  text: {
    logo: mainColors.green2,
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
    menuInactive: mainColors.grey5,
    menuActive: mainColors.green3,
    subTitle: mainColors.dark3,
  },
  button: {
    primary: {
      background: mainColors.green1,
      text: 'white',
    },
    secondary: {
      background: mainColors.red2,
      text: 'white',
    },
    disable: {
      background: mainColors.grey3,
      text: mainColors.grey4,
    },
  },
  input: {
    disable: mainColors.grey3,
  },
  border: mainColors.grey2,
  borderSecond: mainColors.grey1,
  cardLight: mainColors.green2,
  loadingBackground: mainColors.black2,
  error: mainColors.red2,
};
