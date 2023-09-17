import React, {useEffect, useRef, useState} from 'react';
import './idnex.css'
import CovertDivsToSpan from "../CovertDivsToSpan.jsx";
import {Canvas, useThree} from "@react-three/fiber";
import gsap from "gsap";
import {Cloud} from "../../Cloud.jsx";
import LightMy from "../camera/LightMy.jsx";
import {ScrollTrigger } from 'gsap/ScrollTrigger'
let tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger)
function StartAnmition({SetShouldLoad,shouldLoad}) {

    // gsap.registerPlugin(CustomEase);
    // const [display,SetDisplay]=useState(true);
    const icosahedronRef=useRef(null);
    const [ifScroll,setIfScroll]=useState(false)
    const [ifPlay,setIfPlay]=useState('no');
    const [ifPlayTitle,setIfPlayTitle]=useState('no');
    const [ifPlayTitle2,setIfPlayTitle2]=useState('no');
    const [ifNext,setIfNext]=useState(false);
    const skyRef=useRef(null)
    const cameraRef=useRef(null)

    const move=(e)=>{
        if (icosahedronRef.current?.rotation)
            icosahedronRef.current.rotation.y=(e.clientX-window.innerWidth/2)*2/window.innerWidth/3
            // skyRef.current.rotation.y=(e.clientX-window.innerWidth/2)*2/window.innerWidth/3
    }
    const wheel =()=>{
        let x=0,y=-4,z=0//初始缩小位置
        if (window.innerWidth<500){
          // x=0,y=-15,z=0?
        }
        document.body.style.overflow='' //恢复滚动
        setIfScroll(true)  //摄像机设置移动
        let dom=document.querySelector('.clickScrollNext')
            dom.style.width='0px'
            dom.style.fontSize='0px'
            dom.style.backgroundColor='rgba(250,250,250,0)'
        let icon=document.querySelector('.iconNext')
        icon.style.display='inline-block'
        let iconText=document.querySelector('.iconNextText')
        iconText.style.display='inline-block'
        dom.style.transform='rotate(90deg);'
        setIfPlay('end')
        tl.to(icosahedronRef?.current?.position,{
            x:90,
            y:90,
            z:90,
            duration:1.5,
            ease: "power3.inOut",

        })

        tl.to(skyRef?.current?.position,{
                x:x,
                y:y,
                z:z,
                duration:2.5,
                ease: "expo.out",
                onComplete:()=>{
                    setIfPlayTitle('start');
                    setIfPlayTitle2('start')


                }
            })


        // window.removeEventListener('wheel')
    }
    useEffect(()=>{
        document.body.style.overflow='hidden'
        if (shouldLoad){


        setTimeout(()=>{
            let icosahedronRefX=10,icosahedronRefY=10,icosahedronRefZ=10,moveX=-2,moveY=0,moveZ=0//开始多面体的参数
            if (window.innerWidth<=500){
                icosahedronRefX=5;
                icosahedronRefY=5;
                icosahedronRefZ=5;
                moveZ=-2;
                moveX=0
            }
                tl.to(icosahedronRef?.current?.scale, {
                    y:icosahedronRefY,
                    z:icosahedronRefZ,
                    x:icosahedronRefX,
                    ease: "back.inOut(2)",
                    duration:2.5,
                    onComplete:()=>{
                        setIfPlay('start')
                    }
                })

                tl.to(icosahedronRef?.current?.position, {
                    onStart:()=>{
                        gsap.to(icosahedronRef?.current?.rotation
                            ,{
                                x:Math.PI,
                                y:Math.PI,
                                z:Math.PI
                            })
                    },
                    y:moveY,
                    z:moveZ,
                    x:moveX,
                    ease:"power1.out",
                    duration:1,

                    onComplete:()=>{
                      setTimeout(()=>{
                          // window.addEventListener('click',wheel)
                          setIfNext(true);
                      },2000)

                        window.addEventListener('mousemove',move)
                    }
                })

                    tl.to(skyRef.current.rotation,{
                    y:3.14,
                    x:0,
                    z:0,
                    scrollTrigger:{
                        trigger:'.class1_space',
                        // markers:true,
                        start:'top top',
                        end:'bottom bottom',
                        scrub:4
                    },
                    onComplete:()=>{
                    tl.to(skyRef.current.position,{
                            y:-1.5,
                            x:-2,
                            z:0,
                            scrollTrigger:{
                                trigger:'.right_class2_space',
                                // markers:true,
                                start:'top top',
                                end:'bottom bottom',
                                scrub:4
                            },
                            // ease:"power1.out",
                            duration:2.5,
                        onComplete:()=>{
                         tl.to(skyRef.current.position,{
                             y:0,
                             x:0,
                             z:0,
                             scrollTrigger:{
                                 trigger:'.class4_space',
                                 // markers:true,
                                 start:'top top',
                                 end:'bottom bottom',
                                 scrub:4
                             },
                             ease:"power1.out",
                             duration:2
                         })
                         tl.to(skyRef.current.rotation,{
                                x:0,
                                y:2*Math.PI,
                                z:0,
                                scrollTrigger:{
                                    trigger:'.class4_space',
                                    // markers:true,
                                    start:'top top',
                                    end:'bottom bottom',
                                    scrub:4
                                },
                                ease:"power1.out",
                                duration:2
                            })
                        }
                        })
                        tl.to(skyRef.current.scale,{
                            onStart:()=>{

                            },
                            y:0.4,
                            x:0.4,
                            z:0.4,
                            scrollTrigger:{
                                trigger:'.right_class5',
                                // markers:true,
                                start:'top top',
                                end:'+=200',
                                scrub:4
                            },
                            // ease:"power1.out",
                            duration:2.5,

                        })


                        let x=-300
                        if (window.innerWidth<500){
                            x=0
                        }
                        tl.to(cameraRef.current,{
                            x:x,
                            ease:"power1.out",
                            duration:2.5,
                            scrollTrigger:{
                                trigger:'.right_class5',
                                // markers:true,
                                start:'top top',
                                end:'+=200',
                                scrub:4
                            },
                        })
                    }
                    // right_class5
                })

            },0)
        }


        return ()=> {
            window.removeEventListener('wheel',wheel)
           window.removeEventListener('mousemove',move)
        }
},[shouldLoad])

    return (
        <>
        <div className='StartAnmitionBox' >
            <Canvas ref={cameraRef}

                    camera={{ position: [0,10,0] , fov: 75 }}
                    shadows={true}>
                <LightMy ifScroll={ifScroll}  />
                {/*<ambientLight intensity={0.1} />*/}
                <directionalLight  position={[-4, 5, 1]} color={'rgba(147,30,165)'}  />
                        <mesh  position={[0,0,0]}  ref={icosahedronRef}  >
                            <icosahedronGeometry  args={[0.1,0]}  />
                            <meshLambertMaterial />

                        </mesh>

                       <mesh ref={skyRef} position={[50,50,50]}>
                           <Cloud SetShouldLoad={SetShouldLoad} />
                       </mesh>





                {/*<mesh  position={[0,-4,1.5]} >*/}
                {/*    <circleGeometry  args={[5]} />*/}
                {/*    <meshBasicMaterial*/}

                {/*    />*/}
                {/*</mesh>*/}
            </Canvas>
        </div>
    <div className='textBox'>
        <CovertDivsToSpan text='至邑无纷剧，来人但欢迎 \(‵▽′)/' displayTime={0.1} ifPlay={ifPlay} classNames='firstWelcome'/>
    </div>
    <div className='textTitle'>
        <CovertDivsToSpan text='tomyu的个人简介web' displayTime={0.1} ifPlay={ifPlayTitle} classNames='titles'/>
    </div>
    <div className='textTitle2'  >
        <CovertDivsToSpan text='想象中的云境' displayTime={0.05} ifPlay={ifPlayTitle2} classNames='titles2'/>
    </div>
            {ifNext? <div className='clickScrollNext' onClick={wheel}>
                <div> click to next</div>
                <div>

                </div>

            </div>:<></>
            }
            <div className='nextIcon' title={'下滑'}>

                <svg t="1680682920654" className="iconNext" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="3067" width="48" height="48">
                    <path
                        d="M531.109 949.92l310.327-309.354c7.014-7.008 10.882-16.337 10.882-26.271 0-9.993-3.908-19.404-10.993-26.503-13.468-13.478-34.587-14.788-49.403-3.166l-252.487 251.614v-735.459c0-20.517-16.789-37.211-37.421-37.211-20.633 0-37.418 16.695-37.418 37.211v735.458l-258.43-257.706c-15.43-7.757-33.247-5.35-44.852 6.239-6.918 6.91-10.729 16.277-10.729 26.374 0 11.104 4.472 21.694 12.591 29.828l20.623 20.649 56.853 56.645 10.499 10.683 221.76 220.961c7.331 7.294 17.408 11.011 28.368 10.463l0.732-0.036 0.733 0.036c10.995 0.548 21.063-3.159 28.361-10.457z"
                        fill="#dd26ce" p-id="3068"></path>

                </svg>
                <span className='iconNextText'> SCROLL</span>
            </div>

        </>
    );
}

export default StartAnmition;