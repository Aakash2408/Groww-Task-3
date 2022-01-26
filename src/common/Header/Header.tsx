import './Header.css';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
    useEffect,
    useState,
  } from 'react';
import lscache from 'lscache';
import { clearRandomPhotos } from '../../store/actions';
import { deleteStorage } from '../../utils/localStorage/localStorage';
import moon from "../../icons/moon.svg";
import sun from "../../icons/sun.svg";

function Header() {
    const history = useHistory();
    const [src, setSrc] = useState(sun)
    const [dark, isDark] = useState(lscache.get('dark'))
    const dispatch = useDispatch();
    const handleReload = () => {
        deleteStorage('randomPosts');
        dispatch(clearRandomPhotos());
        history.push('/');
    }
    useEffect(() => {
        if(lscache.get('dark')) {
            setSrc(moon)
            document.documentElement.setAttribute('data-theme', 'dark');
            return;
        }
        setSrc(sun)
        console.log("asklalx,ldl");
        document.documentElement.removeAttribute('data-theme');
    }, [])
    const changeTheme = () =>{
        if(!dark) {
            setSrc(moon)
            lscache.set('dark', true)
            isDark(true)
            document.documentElement.setAttribute('data-theme', 'dark');
            return;
        }
        setSrc(sun)
        isDark(false)
        console.log("asklalx,ldl");
        document.documentElement.removeAttribute('data-theme');
        lscache.set('dark', false)
    }
    return (
        <div className="header">
            <span className="title"></span>
            <span className="reload" onClick={handleReload}></span>
            <img onClick={changeTheme} src={src} alt="theme" />
        </div>
    )
}

export default Header;