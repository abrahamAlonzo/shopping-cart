import '../assets/styles/blog.css'
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import i18next from 'i18next';

export default function Blog() {

  const blogImages = require.context('../assets/images', true);

  const {  i18n, t } = useTranslation(["localization"]);
  // useEffect(() => {
  //   if(localStorage.getItem("i18nextlng")?.length > 2){
  //     i18next.changeLanguage("en");
  //   }
  // }, []);
  
  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  }
  
  return (
  <div className='blog'>
    <select
      className="nav-link bg-dark border-0 ml-1 mr-2"
      value={localStorage.getItem("i18nextLng")}
		  onChange={handleLanguageChange}
      >
      <option value="en">English</option>
		  <option value="es">Español</option>
    </select>
    <div>
      <div className='blogbox'><p className="blogname">{t('blog')}</p></div>
      <p className='blogtext'>{t('blogtext')}</p>
    </div>
    <div className='blogitems'>
      <div>
        <img 
          src={blogImages(`./article1.jpg`)} 
          className="blogimg"
          alt="" 
          />
          <p className='blogarticle'>{t('blogarticle1')}</p>
          <p className='blogdate'>{t('blogdate1')}</p>
      </div>
      <div >
        <img 
          src={blogImages(`./article2.jpg`)} 
          className="blogimg"
          alt="" 
          />
          <p className='blogarticle'>{t('blogarticle2')}</p>
          <p className='blogdate'>{t('blogdate2')}</p>
      </div>
      <div >
        <img 
          src={blogImages(`./article3.jpg`)} 
          className="blogimg"
          alt="" 
          />
          <p className='blogarticle'>{t('blogarticle3')}</p>
          <p className='blogdate'>{t('blogdate3')}</p>
      </div>
      <div >
        <img 
          src={blogImages(`./article4.jpg`)} 
          className="blogimg"
          alt="" 
          />
          <p className='blogarticle'>{t('blogarticle4')}</p>
          <p className='blogdate'>{t('blogdate4')}</p>
      </div>
    </div>
  </div>
    
  );
}
