import { request } from 'http'
import { useEffect } from 'react'
import API from 'src/@core/utils/API'

const Test = () => {
  const url = 'http://34.64.221.5:7579'

  // API.request(url, 'getApplicationEntityList')
  // API.request(url, 'getApplicationEntity', 'robot1')
  // API.request(url,'getContentInstance','robot1','/AIresult/la')
  API.request(url,'getContentInstance','robot1','/weightdata/cnt1/la')
  API.request(url,'getContentInstance','robot1','/spacedata/destination/la')




  return <div>index</div>
}

export default Test
