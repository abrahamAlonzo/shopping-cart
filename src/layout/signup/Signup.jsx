import { useTransition } from 'react';
import { useTranslation } from 'react-i18next';
import '../../assets/styles/signup.css';

export default function Signup() {
  const {t} = useTranslation(["signup"]);
  return (
    <div className='signup'>
        <span className="signupTitle">{t('signup')}</span>
        <form action="" className="signupForm">
            <label>{t('username')}</label>
            <input 
              type="text" 
              className="signupInput"
              placeholder={t('enteryourusername')} />
            <label>{t('email')}</label>
            <input 
              type="text" 
              className="signupInput"
              placeholder={t('enteryouremail')} />
            <label>{t('password')}</label>
            <input 
              type="text" 
              className="signupInput"
              placeholder={t('enteryourpass')} />
            <button className="signupButton">{t('signup')}</button>
        </form>
    </div>
  )
}
