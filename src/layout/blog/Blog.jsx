import '../../assets/styles/blog.css'
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import i18next from 'i18next';

export default function Blog() {

  const blogImages = require.context('../../assets/images', true);

  const {  t } = useTranslation(["blog"]);
  
  return (
  <div className='blog'>
  <div>
      <div className='blogName'><p className="blogNameItem">{t('blog')}</p></div>
      <p className='blogText'>{t('blogtext')}</p>
    </div>
    <div className='blogItems'>
      <div>
        <img 
          src={blogImages(`./article1.jpg`)} 
          className="blogImg"
          alt="" 
          />
          <p className='blogArticle'>{t('blogarticle1')}</p>
          <p className='blogDate'>{t('blogdate1')}</p>
      </div>
      <div >
        <img 
          src={blogImages(`./article2.jpg`)} 
          className="blogImg"
          alt="" 
          />
          <p className='blogArticle'>{t('blogarticle2')}</p>
          <p className='blogDate'>{t('blogdate2')}</p>
      </div>
      <div >
        <img 
          src={blogImages(`./article3.jpg`)} 
          className="blogImg"
          alt="" 
          />
          <p className='blogArticle'>{t('blogarticle3')}</p>
          <p className='blogDate'>{t('blogdate3')}</p>
      </div>
      <div >
        <img 
          src={blogImages(`./article4.jpg`)} 
          className="blogImg"
          alt="" 
          />
          <p className='blogArticle'>{t('blogarticle4')}</p>
          <p className='blogDate'>{t('blogdate4')}</p>
      </div>
    </div>
  </div>
    
  );
}
