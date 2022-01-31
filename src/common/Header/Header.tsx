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
import reloadDark from "./images/reloadDark.png";
import reloadWhite from "./images/reload.png";
import { set } from '@reduxjs/toolkit/node_modules/immer/dist/internal';

function Header() {
    const history = useHistory();
    const [src, setSrc] = useState(sun)
    const [load,setLoad]=useState(reloadWhite)
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
            setLoad(reloadDark)
            document.documentElement.setAttribute('data-theme', 'dark');
            return;
        }
        setSrc(sun)
        setLoad(reloadWhite)
        console.log("asklalx,ldl");
        document.documentElement.removeAttribute('data-theme');
    }, [])
    const changeTheme = () =>{
        if(!dark) {
            setSrc(moon)
            setLoad(reloadDark)
            lscache.set('dark', true)
            isDark(true)
            document.documentElement.setAttribute('data-theme', 'dark');
            return;
        }
        setSrc(sun)
        setLoad(reloadWhite)
        isDark(false)
        
        document.documentElement.removeAttribute('data-theme');
        lscache.set('dark', false)
    }
    return (
        <div className="header flexbox" >
{/* <div className="ggHeaderInner9305 flexbox"> */}
             <Link to="/"><h1>Growwgram</h1></Link>
            <img className="reload"  onClick={handleReload} src={load}></img>
            <img onClick={changeTheme} src={src} alt="theme" />
        </div>
        // </div>
    )
}

export default Header;