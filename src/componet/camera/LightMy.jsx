import React, {useEffect} from 'react';
import {useFrame, useThree} from "@react-three/fiber";
import gsap from "gsap";
let tl_camera=gsap.timeline();
function LightMy({onMove,ifScroll=false}) {
    const {camera}=useThree();
    useEffect(()=>{
        if (ifScroll){
            console.log('camera',camera)
            tl_camera.to(".StartAnmitionBox", {
                backgroundColor:'rgba(185,30,255,0.58)',
                scrollTrigger:{
                    trigger:'#TitleBox',
                    // markers:true,
                    start:'top top',
                    end:'bottom bottom',
                    scrub:4
                },
                ease:"expo.out",
                duration:3,
            })
            tl_camera.to(camera.position, {


                y: 0,
                z:5,
                x:0,

                scrollTrigger:{
                    trigger:'#TitleBox',
                    // markers:true,
                    start:'top top',
                    end:'bottom bottom',
                    scrub:4
                },
                duration:3,
            })
            tl_camera.to(camera.rotation,{
                x:0,
                y:0,
                z:0,
                scrollTrigger:{
                    trigger:'#TitleBox',
                    // markers:true,
                    start:'top top',
                    end:'bottom bottom',
                    scrub:4
                },
                duration:2.5
            })
        }


        //会刷新

        // tl_camera.to(camera.position,{
        //
        //     y: 0,
        //     z:3.5,
        //     x:1,
        //     scrollTrigger:{
        //         trigger:'.right_class2',
        //         markers:true,
        //         start:'top top',
        //         end:'bottom bottom',
        //         scrub:4
        //     },
        //     duration:1,
        //     }
        // )
        //     .to(camera.position,{
        //     x:5,
        //     y:0,
        //     z:0,
        //     scrollTrigger:{
        //         trigger:'.class2',
        //         // markers:true,
        //         start:'top top',
        //         end:'+=400',
        //         scrub:10
        //     },
        //     duration:2.5
        // })

    },[ifScroll])
    return (
        <>
            <ambientLight intensity={0.1} />
        </>
    );
}

export default LightMy;