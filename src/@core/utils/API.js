import axios from 'axios'

export const request = (serverURL, headers, AEname = '', dir = '') => {
  axios
    .get(`${serverURL}/Mobius${AEname}${dir}`, {
      headers: headers
    })
    .then(respones => {
      console.log(respones.data)
    })
    .catch(e => {
      console.log(e)
    })
}

export const getApplicationEntity = (AEname, serverURL) => {
  const header = {
    Accept: 'application/json',
    'X-M2M-RI': '12345',
    'X-M2M-Origin': 'S'
  }
  AEname = '/' + AEname

  const res = request(serverURL, header, AEname)

  // console.log(res.json())
}

export const getContainer = (AEname, dir, serverURL) => {
  const directory = addSlash(dir)

  const header = {
    Accept: 'application/json',
    'X-M2M-RI': '12345',
    'X-M2M-Origin': AEname
  }
  AEname = '/' + AEname

  const res = request(serverURL, header, AEname, directory)

  // console.log(res.json())
}

export const getApplicationEntityList = serverURL => {
  const header = {
    Accept: 'application/json',
    'X-M2M-RI': '12345',
    'X-M2M-Origin': 'S'
  }

  const res = request(serverURL, header, '?fu=1&ty=2&lim=20')
  console.log(res)
  console.log(res)

  // return JSON.parse(res)
}

export const getApplicationEntityRI = (serverURL, AEname) => {
  const header = {
    Accept: 'application/json',
    'X-M2M-RI': '12345',
    'X-M2M-Origin': 'S'
  }
  AEname = '/' + AEname

  const res = request(serverURL, header, AEname)
  const resJson = res.json()
  const ae_ri = resJson['m2m:ae']['ri']

  // console.log(res)

  return ae_ri
}

export const getContentInstance = (AEname, dir, serverURL) => {
  const dir2 = addSlash(dir)

  const header = {
    Accept: 'application/json',
    'X-M2M-RI': '12345',
    'X-M2M-Origin': 'SOrigin'
  }
  AEname = '/' + AEname

  const res = request(serverURL, header, AEname, dir)

  const con1 = JSON.parse(res)

  return con1['m2m:cin']['con']
}

export const addSlash = str => {
  if (str[0] != '/') {
    str = '/' + str
  }

  return str
}

export default {
  request,
  getApplicationEntity,
  getContainer,
  getApplicationEntityList,
  getApplicationEntityRI,
  addSlash
}
