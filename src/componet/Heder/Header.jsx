import React, {useState} from 'react';
import './Header.css'
function Header({setCNLang,setENLang}) {
    const [lanClass,setLanClass] =useState(['langFocus','lang']);
    return (
        <div className='Header'>
            <div className='HeaderItemLeft'>
                <div className='HeaderItem'>TOMYU.CN</div>
            </div>
            <div className='HeaderItemRight'>
                <div className='HeaderItem cursor'>github</div>
                <div className='HeaderItem cursor'>blog</div>
                <div className='HeaderItem'>
                    语言:<span
                    className={`${lanClass[0]} cursor`}
                    onClick={()=>{
                        setLanClass(['langFocus','lang'])
                        setCNLang()
                    }} >中文</span>
                    <span
                        className={`${lanClass[1]} cursor`}
                        onClick={()=>{
                            setLanClass(['lang','langFocus'])
                            setENLang()
                        }}>English</span>
                </div>
                <div></div>
            </div>

            {/*<div></div>*/}
        </div>
    );
}

export default Header;