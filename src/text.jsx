import musicImg from "./assets/music.png";
import weatherImg from "./assets/weather.png";
import noteImg from "./assets/note.png";
import gameImg from "./assets/game.png";

export default Text={
    CN:[
        {
            index:"01",
            class:"1",
            direction:'',
            title:"关于我",
            space:"",
            otherStyle:window.innerWidth>500?{height:'400vh'}:{height:'600vh'},
            content: <div>
                         <h3>你好，我是tomyu 😀</h3>
                         <div>我目前是一名在校的学生，来自在中国四川，tomyu这个名字没有特别的意义，大概因为它和我真实名字的谐音很像，所以我选择了它.</div>
                         <h3>我希望成为一个能够设计功能,UI并编码实现的人</h3>
                         <div>对于自己来讲，设计并实现它们是一件非常令人愉快的事情。设计出功能新颖稳定，并且拥有不错的图形交互效果的软件，
                             特别是使用者可以从图形动画中感觉到舒适，是自己的目标，当然这还需要很长一段路需要走.</div>
                         <h3>敬佩专注于自己事情的人，有记录的习惯</h3>
                         <div>
                             我喜欢并且敬佩专注于自己事情的人，有自己的目标，不被外界眼光和大流所影响。同时我也致力于成为这样的人。
                             <br></br>
                             我认为记录很重要，今年年初我决定开始记录一些东西，目前会写一些文章在我的博客中，一般是一些平时编程的经验和所经历事情的感受，但是写得还有待提高😂。
                             这是我的blog
                             <br/>
                             <button className='boom'>
                                 <a href='http://tomyu.cn:3001/' target="_blank">我的blog</a>
                             </button>
                        </div>

                    </div>
        },
        {
            index:"02",
            class:"2",
            direction:'right',
            space: <div className='class1_space' style={{height:'300vh'}}></div>,
            title: window.innerWidth<=500?"小的demo":"学习时的小demo",
            otherStyle:window.innerWidth>500?{height:'500vh'}:{height:'700vh'},
            content: <div>
                <h3>音乐播放</h3>
                <div>
                    这是我学习前端以来的第一个小demo，音乐数据来源于网易云，当然因为是第一次做，它的代码代码结构和功能方面还有很多值得优化的地方，
                    有不少细节地方也存在一些bug，也不适配手机屏幕。即使这样，我也很喜欢它，对于我来讲它有非凡的意义。
                    空闲的时间，我会对它的一些地方进行重构,修改和扩展.慢慢改变它。<br/>
                    <img draggable={false} src={musicImg} width="50%"></img>
                    <br/>
                    <button className='boom'>
                        <a href='http://tomyu.cn:5003/' target='_blank' >去往音乐播放</a>
                    </button>
                </div>
                <h3>天气预报和笔记记录</h3>
                <div>
                    以前写的这两小工具<br/>
                    天气预报是使用svelte，练习svelte的使用。<br/>
                    笔记记录使用react，可以用来管理基本的笔记（只能文字），笔记储存在本地。自己平时也会使用它。
                    <div>
                        <img draggable={false} src={weatherImg} width="50%"></img>
                        <br/>
                        <img draggable={false} src={noteImg} width="50%"></img>
                        <br/>
                        <button className='boom' style={{marginRight:"20px"}}>
                            <a href='http://tomyu.cn:5001/' target='_blank' >天气预报</a>
                        </button>
                        <button className='boom'>
                            <a href='http://tomyu.cn:5002/' target='_blank' >笔记记录</a>
                        </button>
                    </div>

                </div>
                <h3>canvas小游戏</h3>
                <div>
                    <div>
                       这是练习canvas的使用所作的小demo，采用纯原生js，虽然总体能玩，但它还是半成品，没有什么成熟的系统。
                    </div>
                </div>
                <img draggable={false} src={gameImg} width="50%"></img>
            </div>
        },
        {
            index:"03",
            class:"1",
            space: <div className='right_class2_space' style={{height:'300vh'}}></div>,
            title: "项目经历",
            direction:'',
            otherStyle:window.innerWidth>500?{height:'600vh'}:{height:'700vh'},
            content: <div>
                <h3>1.绵阳市文明城市测评指标管理平台</h3>
                <div>
                    这是今年3月参与的一次项目开发，该系统用于绵阳市文明城市的评定，评定规则采用网上申报、实地考察、问卷调查3种方式。绵阳市不同区域及行政部
                    门可根据绵阳市宣传部在系统中发布的指南申报不同形式的项目活动，并且可由上级部门评分，帮助进行文明城市的评定
                    <br/>
                    使用技术:管理端（React + Umi.Js）小程序端（Taro+dva.js）
                    <br/>
                     <h5>收获:</h5>
                        独立负责小程序端项目，学习一些小程序开发的知识点，解决一些技术问题<br/>
                        参与项目讨论与问题解决方案，<br/>
                        学会部署前端项目，配置 Nginx<br/>
                        测试体验地址 <a href='http://39.100.87.106:6888/user/login' target='_blank'  style={{color:"blue"}}>http://39.100.87.106:6888/user/login</a>
                </div>



                <h3>2.中国空气动力研究与发展中心教学平台</h3>
                <div>
                    这是我第一次参与的项目开发，该系统为特定领域的学员开发，是集课程、试卷、作业、问卷调查和新闻管理等功能于一体的教学管理系统，学员在学生
                    端可通过配置文件参数的形式完成特定流程的计算题和实验题；后台实现用户、课程、学期和试卷作业等信息的管理
                    <br/>
                    <h5>收获:</h5>
                    了解真实项目的整体结构，文件结构分明，有serve，model，page，component...等层<br/>
                    页面设计合理性，站在用户的角度考虑页面布局，按钮设计等是否符合用户使用习惯<br/>
                    页面内容尽量一屏显示，减少用户操作步骤，降低操作复杂度<br/>
                    代码合理性，通过常量使用枚举，减少判断语句嵌套等技巧，降低代码二次修改难度<br/>
                </div>
            </div>
        },
        {
            index:"04",
            class:"1",
            space:<div className='class3_space' style={{height:'200vh'}}></div>,
            title: "联系我",
            direction:'',
            otherStyle: {height:'400vh'},
            content: <div>
                <h3>微信</h3>
                <div>微信号:<a style={{color:'#646cff'}}>tomyu_tty</a><br/>这是我最常用的通讯工具</div>
                <h3>邮箱</h3>
                <div>
                    电子邮箱1:<a style={{color:'#646cff'}}>1808726039@qq.com</a><br/>
                    电子邮箱2:<a style={{color:'#646cff'}}>tomyu_tangtianyu@163.com</a>
                </div>
                <h3>Instagram</h3>
                <div>
                    <a style={{color:'#646cff'}}>tomyu197</a><br/>
                    因为一些原因，我并不常使用它
                </div>
            </div>
        },
        {
            index:'05',
            class:"2",
            title: "最后",
            space: <div className='class4_space' style={{height:'300vh'}}></div>,
            direction:'right',
            otherStyle: {backgroundColor:'rgba(219,146,157)'},
            content:<div>
                <div>感谢观看到最后</div>
                <div>希望这个网站能给你留下些印象</div>
                <div>
                    <svg t="1681793533403" className="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="2648" width="16" height="16">
                        <path
                            d="M512 0c282.624 0 512 229.376 512 512s-229.376 512-512 512S0 794.624 0 512 229.376 0 512 0z m0 102.4c-226.304 0-409.6 183.296-409.6 409.6s183.296 409.6 409.6 409.6 409.6-183.296 409.6-409.6-183.296-409.6-409.6-409.6z m0 153.6c93.184 0 174.7456 49.8176 219.5456 124.3136l-87.7568 52.6848a153.6 153.6 0 1 0-0.0512 158.0544l87.808 52.6336A255.9488 255.9488 0 0 1 256 512c0-141.312 114.688-256 256-256z"
                            fill="#ffffff" p-id="2649"></path>
                    </svg>
                    2023 tomyu.cn</div>
                <a href="https://beian.miit.gov.cn" target="_blank"> 备案号： 蜀ICP备2022025517号-1</a>
            </div>
        }
    ],

    EN:[
        {
        index:"01",
        class:"1",
        direction:'',
        title:"ABOUT ME",
        space:"",
        otherStyle:window.innerWidth>500?{height:'700vh'}:{height:'600vh'},
        content: <div>
            <h3>Hello, I'm Tomyu</h3>
            <div>I am currently a current student from Sichuan, China, and the name Tomyu has no special meaning, probably because it resembles the homonym of my real name, so I chose it.</div>
            <h3>I want to be someone who can design features, UIs, and code implementations</h3>
            <div>Designing and implementing them is a very pleasant thing for yourself. Designing software with novel and stable functions and good graphic interaction effects, especially users can feel comfortable from graphic animation, is their goal, of course, this still needs a long way to go.
                I love traveling and do</div>
            <h3>Admire people who focus on their own things, have documented habits</h3>
            <div>
                I like and admire people who focus on their own things, have their own goals, and are not influenced by outside eyes and currents. At the same time, I am committed to being that person.
                I think it's important to record, and at the beginning of this year I decided to start documenting something, and I'm currently going to write some articles on my blog, usually some of the usual programming experience and feelings about the things I experienced, but the writing needs to be improved 😂. Here is my blog
                <br/>
                <button className='boom'>
                    <a href='http://tomyu.cn:3001/' target="_blank">my blog</a>
                </button>
            </div>
        </div>
    },
        {
            index:"02",
            class:"2",
            direction:'right',
            space: <div className='class1_space' style={{height:'300vh'}}></div>,
            title: window.innerWidth<=500?"some demo":"some demo in school",
            otherStyle:window.innerWidth>500?{height:'500vh'}:{height:'700vh'},
            content: <div>
                <h3>Music playback</h3>
                <div>
                    This is the first small demo since I learned the front-end, the music data comes from NetEase Cloud, of course, because it is the first time to do it, its code structure and function still have many places worth optimizing points, there are many details There are also some bugs, and it is not suitable for mobile phone screens. Even so, I love it, it means a lot to me. In my free time, I will refactor, modify and expand some places of it. Change it slowly.<br/>
                    <img draggable={false} src={musicImg} width="100%"></img>
                    <button className='boom'>
                        <a href='http://tomyu.cn:5003/' target='_blank' >去往音乐播放</a>
                    </button>
                </div>
                <h3>Weather forecast and note-taking</h3>
                <div>
                    Previously written for these two gadgets<br/>
                    weather forecasting is to use svelte, practice the use of svelte.<br/>
                    Note-taking uses react, which can be used to manage basic notes (text only), and the notes are stored locally. I use it myself.
                    <div>
                        <img draggable={false} src={weatherImg} width="50%"></img>
                        <img draggable={false} src={noteImg} width="50%"></img>
                        <button className='boom' style={{marginRight:"20px"}}>
                            <a href='http://tomyu.cn:5001/' target='_blank' >天气预报</a>
                        </button>

                        <button className='boom'>
                            <a href='http://tomyu.cn:5002/' target='_blank' >笔记记录</a>
                        </button>
                    </div>

                </div>
                <h3>Canvas mini-games</h3>
                <div>
                    <div>
                        This is a small demo made by practicing the use of canvas, using pure native js, although it can be played overall, it is still a semi-finished product, and there is no mature system.
                    </div>
                </div>
                <img draggable={false} src={gameImg} width="100%"></img>
            </div>
        },
        {
            index:"03",
            class:"1",
            space: <div className='right_class2_space' style={{height:'300vh'}}></div>,
            title: "PROJECT EXPERIENCE IN SCHOOL",
            direction:'',
            otherStyle:window.innerWidth>500?{height:'400vh'}:{height:'700vh'},
            content: <div>
                <h3>
                    1. Mianyang civilized city evaluation index management platform
                </h3>
                <div>
                    This is the first project development I have participated in, the system is developed for students in a specific field, it is a teaching management system that integrates the functions of courses, examination papers, assignments, questionnaires and news management, and students can complete calculation and experimental problems of specific processes in the form of profile parameters on the student side; The background realizes the management of information such as users, courses, semesters, and exam papers
                    test experience address:<a href='http://39.100.87.106:6888/user/login' target='_blank'  style={{color:"blue"}}>http://39.100.87.106:6888/user/login</a>
                </div>
                <h3>
                    2. Teaching platform of China Aerodynamics Research and Development Center
                </h3>
                <div>
                    This is the first project development I have participated in, the system is developed for students in a specific field, it is a teaching management system that integrates the functions of courses, examination papers, assignments, questionnaires and news management, and students can complete calculation and experimental problems of specific processes in the form of profile parameters on the student side; The background realizes the management of information such as users, courses, semesters, and exam papers
                    <br/>
                </div>
            </div>
        },
        {
            index:"04",
            class:"1",
            space:<div className='class3_space' style={{height:'200vh'}}></div>,
            title: "联系我",
            direction:'',
            otherStyle: {height:'400vh'},
            content: <div>
                <h3>Wechat</h3>
                <div>WeChat:<a style={{color:'#646cff'}}>tomyu_tty</a><br/>this is the most commonly used communication tool</div>
                <h3>Email</h3>
                <div>
                    Email:<a style={{color:'#646cff'}}>1808726039@qq.com</a>
                    Email:<a style={{color:'#646cff'}}>tomyu_tangtianyu@163.com</a>
                </div>
                <h3>Instagram</h3>
                <div>
                    <a style={{color:'#646cff'}}>tomyu197</a><br/>
                    I don't use it very often for a few reasons
                </div>
            </div>
        },
        {
            index:'05',
            class:"2",
            title: "AT LAST",
            space: <div className='class4_space' style={{height:'300vh'}}></div>,
            direction:'right',
            otherStyle: {backgroundColor:'rgba(219,146,157)'},
            content:<div>
                <div>Thanks for watching to the end</div>
                <div>Hope this site will make some impressions on you</div>
                <div>
                    <svg t="1681793533403" className="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="2648" width="16" height="16">
                        <path
                            d="M512 0c282.624 0 512 229.376 512 512s-229.376 512-512 512S0 794.624 0 512 229.376 0 512 0z m0 102.4c-226.304 0-409.6 183.296-409.6 409.6s183.296 409.6 409.6 409.6 409.6-183.296 409.6-409.6-183.296-409.6-409.6-409.6z m0 153.6c93.184 0 174.7456 49.8176 219.5456 124.3136l-87.7568 52.6848a153.6 153.6 0 1 0-0.0512 158.0544l87.808 52.6336A255.9488 255.9488 0 0 1 256 512c0-141.312 114.688-256 256-256z"
                            fill="#ffffff" p-id="2649"></path>
                    </svg>
                    2023 tomyu.cn</div>
                <a href="https://beian.miit.gov.cn" target="_blank"> 备案号： 蜀ICP备2022025517号-1</a>
            </div>
        }]
}