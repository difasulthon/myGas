const baseURL = 'https://my-gas.herokuapp.com';

export async function POST_SignUp(fullName, role, email, password, photo) {
  try {
    let response = await fetch(baseURL + '/api/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName: fullName,
        role: role,
        email: email,
        password: password,
        photo: photo,
      }),
    });
    let responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    return error;
  }
}

export async function POST_Login(email, password) {
  try {
    let response = await fetch(baseURL + '/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    let responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    return error;
  }
}

export async function POST_InputStok(
  idPangkalan,
  namaPangkalan,
  photo,
  totalStok,
  gas3Kg,
  gas12Kg,
  brightGas,
) {
  try {
    let response = await fetch(baseURL + '/api/stok/createStok', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idPangkalan: idPangkalan,
        namaPangkalan: namaPangkalan,
        photo: photo,
        totalStok: totalStok,
        gas3Kg: gas3Kg,
        gas12Kg: gas12Kg,
        brightGas: brightGas,
      }),
    });
    let responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    return error;
  }
}

export async function GET_DataPangkalan(idPangkalan) {
  try {
    let response = await fetch(baseURL + `/api/stok/${idPangkalan}`, {
      method: 'GET',
    });
    let responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    return error;
  }
}

export async function GET_DataPesanan(idPangkalan) {
  try {
    let response = await fetch(baseURL + `/api/pesan/pesanan/${idPangkalan}`, {
      method: 'GET',
    });
    let responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    return error;
  }
}
