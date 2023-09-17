import text from "./text.jsx"
import './App.css'
import React, {Suspense, useEffect, useRef, useState} from 'react'
import gsap from "gsap";
import {ScrollTrigger } from 'gsap/ScrollTrigger'
import Introduce from "./componet/Introduce.jsx";
import Loading from "./componet/loading/Loading.jsx";
import StartAnmition from "./componet/StartAnmition/index.jsx";
import Title from "./componet/Titles/Title.jsx";
import Text from "./text.jsx";
import Header from "./componet/Heder/Header.jsx";
function App() {
    const [text,setText] = useState(Text.CN)
    const [ifGetRef,SetIfGetRef]=useState(false)
    const skyRef=useRef(null)
    const [shouldLoad,SetShouldLoad]=useState(false)
    useEffect( ()=>{
        gsap.registerPlugin(ScrollTrigger)
        console.log('skyRef',skyRef?.current);
           if (ifGetRef){
               gsap.to(skyRef.current.rotation, {
                   y: -5,
                   z:1,
                   x:1,
                   scrollTrigger:{
                       trigger:'#skyBox',
                       // markers:true,
                       start:'top top',
                       end:'+=1000',
                       scrub:10
                   },
                   duration:1,
               })
               gsap.to(skyRef.current.position, {
                   y: 0,
                   z:0,
                   x:1,
                   scrollTrigger:{
                       trigger:'#skyBox',
                       // markers:true,
                       start:'top top',
                       end:'+=1200',
                       scrub:10
                   },
                   duration:3,
               })
           }


    },[ifGetRef])
  return (

    <div className="App">
        <Suspense
            fallback={
                <div className='loadingBox'><Loading/></div>
            }
        >
            <Header setCNLang={()=>{setText(Text.CN)}} setENLang={()=>{setText(Text.EN)}}/>
            <div >
                <Title/>
                {
                    text.map((v,i)=>{
                         return <>
                             {v.space}
                             <div className={`introduceBox${v.class}`}>
                                  <Introduce classNames={v.direction==''?`class${i+1}`:`${v.direction}_class${i+1}`} otherStyle={v.otherStyle} text={v.title} num={v.index}>
                                      <div className={i==4?'right_class5_content':'class2_content'}>
                                        {v.content}
                                      </div>
                                  </Introduce>
                              </div>
                         </>
                    })
                }

            </div>
        <div id='skyBox'>
            <StartAnmition SetShouldLoad={SetShouldLoad} shouldLoad={shouldLoad}/>
        </div>
        </Suspense>

    </div>

  )
}

export default App
