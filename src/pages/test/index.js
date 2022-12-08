import { request } from 'http'
import React from 'react'
import req from 'src/@core/utils/API'

const Test = () => {
  const respone = req.getApplicationEntityList('http://34.64.221.5:7579')
  
  return <div>index</div>
}

export default Test
