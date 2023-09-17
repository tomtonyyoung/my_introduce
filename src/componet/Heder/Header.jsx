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
                <div className='HeaderItem cursor' onClick={()=>{window.open('https://github.com/tomtonyyoung/my_introduce')}}>github</div>
                <div className='HeaderItem cursor' onClick={()=>{window.open('http://tomyu.cn:3001')}}>我的博客</div>
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
                            window.alert("抱歉，由于当前翻译成英语会影响某些布局，从而导致一些动画bug，暂时关闭该功能。已经在努力修改中了🥺😰")
                            // setLanClass(['lang','langFocus'])
                            // setENLang()
                        }}>English</span>
                </div>
                <div></div>
            </div>
        </div>
    );
}

export default Header;