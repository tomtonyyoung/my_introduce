import React, {useEffect, useState} from 'react';
import './Introduce.css'
import gsap from "gsap";
// import gsap from "gsap";
let tl2= gsap.timeline();
let tl3=gsap.timeline();
function Introduce({classNames='',otherStyle={},children,text='',color='',BgColor='',num="01"}) {
    console.log(children)
    let styles={...otherStyle,borderRadius:"0 700px 20px 0"}
    if (classNames.indexOf('right')>=0){
        styles={...otherStyle,borderRadius:"700px 0 0 20px"}
    }


    useEffect(()=>{
        if (classNames.indexOf('right')>=0){

            tl3.to(`.${classNames}`, {
                // borderTopLeftRadius:10,
                borderTopLeftRadius:100,
                borderBottomLeftRadius:0,
                // duration:0,
                scrollTrigger:{
                    trigger:`.${classNames}`,
                    // markers:true,
                    start:'top bottom',
                    end:'top top',
                    scrub:0.6
                }})
            tl2.to(`.${classNames}`, {
                borderBottomLeftRadius:700,
                // borderTopLeftRadius:700,
                // duration:0,
                scrollTrigger:{
                    trigger:`.${classNames}`,
                    // markers:true,
                    start:'bottom bottom',
                    end:'bottom top',
                    scrub:0.6
                }})
        }
        else {
            tl2.to(`.${classNames}`, {
                borderTopRightRadius:10,
                borderBottomRightRadius:0,
                // duration:0,
                scrollTrigger:{
                    trigger:`.${classNames}`,
                    // markers:true,
                    start:'top bottom',
                    end:'top top',
                    scrub:0.6
                }})
            tl2.to(`.${classNames}`, {
                borderBottomRightRadius:700,
                // duration:0,
                scrollTrigger:{
                    trigger:`.${classNames}`,
                    // markers:true,
                    start:'bottom bottom',
                    end:'bottom top',
                    scrub:0.6
                }})
        }

    },[])
    return (
        <div className={`IntroduceBox ${classNames}`} style={{...otherStyle,...styles}}>
            <div className='IntroduceHeader'>
                <div className='IntroduceTitle' style={{color:color}}>
                    <div className='sOne'style={{borderColor:color}} ></div>
                    <div className='sTwo' style={{borderColor:color}}></div>
                    <div className='sThree' style={{borderColor:color,backgroundColor:color}}></div>
                    <div className='IntroduceTitleText' style={{color:color}}>{text}</div>
                </div>

                <div className='indexNum' style={{color:color}} >{num}</div>
                <div className='line'></div>
            </div>
            {children}
        </div>
    );
}

export default Introduce;