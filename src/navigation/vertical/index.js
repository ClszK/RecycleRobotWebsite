// ** Icon imports
import Login from 'mdi-material-ui/Login'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import ViewDashboard from 'mdi-material-ui/ViewDashboard'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'

const navigation = () => {
  return [
    {
      title: 'User Interface',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Dash Board',
      icon: ViewDashboard,
      path: '/dashboard'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Pages'
    },
    {
      title: 'Login',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/pages/register',
      openInNewTab: true
    }
  ]
}

export default navigation
