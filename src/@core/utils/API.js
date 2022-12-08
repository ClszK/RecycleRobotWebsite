import axios from 'axios'

export const request = (serverURL, method, AEname = '', dir = '') => {
  const header = {
    getApplicationEntity: [
      {
        Accept: 'application/json',
        'X-M2M-RI': '12345',
        'X-M2M-Origin': 'S'
      }
    ],
    getContainer: [
      {
        Accept: 'application/json',
        'X-M2M-RI': '12345',
        'X-M2M-Origin': AEname
      }
    ],
    getApplicationEntityList: [
      {
        Accept: 'application/json',
        'X-M2M-RI': '12345',
        'X-M2M-Origin': 'S'
      }
    ],
    getApplicationEntityRI: [
      {
        Accept: 'application/json',
        'X-M2M-RI': '12345',
        'X-M2M-Origin': 'S'
      }
    ],
    getContentInstance: [
      {
        Accept: 'application/json',
        'X-M2M-RI': '12345',
        'X-M2M-Origin': 'SOrigin'
      }
    ]
  }
  if (method !== 'getApplicationEntityList') {
    AEname = '/' + AEname
  } else if (method === 'getContentInstance') {
    dir = addSlash(dir)
  } else {
    AEname = '?fu=1&ty=2&lim=20'
  }
  console.log(AEname)
  axios
    .get(`${serverURL}/Mobius${AEname}${dir}`, {
      headers: header[`${method}`][0]
    })
    .then(respone => {
      switch (method) {
        case 'getApplicationEntity':
        case 'getContainer':
          console.log(respone.data)
          break
        case 'getApplicationEntityList':
          console.log(respone.data['m2m:uril'])
          break
        case 'getApplicationEntityRI':
          console.log(respone.data['m2m:ae']['ri'])
          break
        case 'getContentInstance':
          console.log(respone.data['m2m:cin']['con'])
          break
      }
    })
    .catch(e => console.log(e))
}

export const getApplicationEntity = (AEname, serverURL) => {
  const header = {
    Accept: 'application/json',
    'X-M2M-RI': '12345',
    'X-M2M-Origin': 'S'
  }
  AEname = '/' + AEname

  const res = request(serverURL, header, AEname)

  console.log(res.json())
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

  console.log(res.json())
}

export const getApplicationEntityList = async serverURL => {
  const header = {
    Accept: 'application/json',
    'X-M2M-RI': '12345',
    'X-M2M-Origin': 'S'
  }

  const respone = request(serverURL, header, '?fu=1&ty=2&lim=20')
  respone.then(respone => respone.data['m2m:uril'])
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

  AEname = '/' + AEname

  const header = {
    Accept: 'application/json',
    'X-M2M-RI': '12345',
    'X-M2M-Origin': 'SOrigin'
  }

  const res = request(serverURL, header, AEname, dir)

  const con1 = JSON.parse(res)

  return con1['m2m:cin']['con']
}

const addSlash = str => {
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
