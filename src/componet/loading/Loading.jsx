import React from 'react';
import './Loading.css'
function Loading() {
    console.log("开始动画")
    return (
        <>
            <div className="spinner-box">
                <div className="solar-system">
                    <div className="earth-orbit orbit">
                        <div className="planet earth"></div>
                        <div className="venus-orbit orbit">
                            <div className="planet venus"></div>
                            <div className="mercury-orbit orbit">
                                <div className="planet mercury"></div>
                                <div className="sun"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <h1>Loading...</h1>
            </div>

        </>
    );
}

export default Loading;

