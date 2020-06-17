export const hitungTotalTagihan = (a, b, c) => {
  const gas3Kg = a * 16500;
  const gas12Kg = b * 139000;
  const brightGas = c * 65000;
  let hasil = gas3Kg + gas12Kg + brightGas;
  return hasil;
};
