import { useTranslation } from 'react-i18next';
import '../../assets/styles/login.css'

export default function Login() {
  const blogImages = require.context('../../assets/images', true);
  const {t} = useTranslation(["login"]);
  return (
    <div className='login'>
      <span className="loginTitle">{t('login')}</span>
      <form  className="loginForm">
        <label>{t('email')}</label>
        <input 
        type="text" 
        className="loginInput"
        placeholder={t('enteryouremail')} />
      </form>
      <form  className="loginForm">
        <label>{t('password')}</label>
        <input 
        type="password" 
        className="loginInput"
        placeholder={t('enteryourpass')} />
      <button className="loginButton">{t('login')}</button>
      </form>

    </div>
  )
}
