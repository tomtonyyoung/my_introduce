import React, {useEffect} from 'react';
import './CovertDivsToSpan.css';
import gsap from "gsap";


function CovertDivsToSpan({text='',displayTime=0 ,ifPlay='start',classNames}) {
    useEffect(()=>{
        switch (ifPlay) {
            case 'start':
                gsap.to(`.${classNames} .animatedis`,{
                    yPercent:-100,
                    stagger:displayTime,
                    ease:'back.out(1,5)',
                });
                break;
            case 'end':
                gsap.to(`.${classNames} .animatedis`,{
                    yPercent:100,
                    stagger:displayTime,
                    ease:'back.in(1,5)',
                });
                break;
            case 'no':break;
        }


    },[ifPlay])
    return (
        <div className={`CovertDivsToSpanBox ${classNames}`}>
            {text.split("").map((char,i)=>{
                if (char===" "){
                    return <span key={i}>{char}</span>
                }
                return <span className="animatedis" key={i}>{char}</span>
            })}
        </div>
    );
}

export default CovertDivsToSpan;