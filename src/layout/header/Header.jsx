import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import i18next from 'i18next';
import '../../assets/styles/header.css';
import { Link } from 'react-router-dom';

export default function Header() {

  const {  i18n, t } = useTranslation(["header"]);
  
  useEffect(() => {
    if(localStorage.getItem("i18nextlng")?.length > 2){
      i18next.changeLanguage("en");
    }
  }, []);
  
  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  }
  return (
    <div className="header">
      <ul className="headerList">
        <li className="headerListItem">
          <Link className='link' to="/">{t('home')}</Link>
        </li>
        <li className="headerListItem"><Link className="link" to="/signup">{t('signup')}</Link></li>
        <li className="headerListItem"><Link className="link" to="/login">{t('login')}</Link></li>
        <li>
        <select
          className="nav-link bg-dark border-0 ml-1 mr-2"
          value={localStorage.getItem("i18nextLng")}
		      onChange={handleLanguageChange}
          >
          <option value="en">English</option>
		      <option value="es">Español</option>
        </select>
        </li>
      </ul>
    </div>
  );
}