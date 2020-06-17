import numeral from 'numeral';

export const rupiahFormat = price => {
  return numeral(price)
    .format('0,0')
    .replace(/,/g, '.');
};
