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
                         <h3>你好，我是tomyu</h3>
                         <div>我目前是一名在校的学生，来自在中国四川，tomyu这个名字没有特别的意义，大概因为它和我真实名字的谐音很像，所以我选择了它.</div>
                         <h3>我希望成为一个能够设计功能,UI并编码实现的人</h3>
                         <div>对于自己来讲，设计并实现它们是一件非常令人愉快的事情。设计出功能新颖稳定，并且拥有不错的图形交互效果的软件，
                             特别是使用者可以从图形动画中感觉到舒适，是自己的目标，当然这还需要很长一段路需要走.</div>
                         <h3>我喜欢旅游，并记录它们</h3>
                         <div>
                             目前自己并没有去过太多地方。未来想要去许多国家旅行，瑞士，德国，日本，法国，俄罗斯，荷兰......很多很多，当然经济水平和时间是一个不小的难题。
                             自己不太可能都能去体验，但希望尽可能的多去看看，并记录自己的行程，最后将他们展示出来。至少至少，把自己国家的一些著名地方游一遍。
                         </div>
                     </div>
        },
        {
            index:"02",
            class:"2",
            direction:'right',
            space: <div className='class1_space' style={{height:'300vh'}}></div>,
            title: window.innerWidth<=500?"小的作品":"我的一些小作品",
            otherStyle:window.innerWidth>500?{height:'500vh'}:{height:'700vh'},
            content: <div>
                <h3>音乐播放</h3>
                <div>
                    这是我用在大二下的时候制作的作品，也是我的第一个作品，音乐数据来源于网易云，当然因为是第一次做，它的代码代码结构和功能方面还有很多值得优化的地方，
                    有不少细节地方也存在一些bug，也不适配手机屏幕。即使这样，我也很喜欢它，对于我来讲它有非凡的意义。
                    空闲的时间，我会对它的一些地方进行重构,修改和扩展.慢慢改变它。<br/>
                    <img draggable={false} src={musicImg} width="100%"></img>
                    <button className='boom'>
                        <a href='http://tomyu.cn:5003/' target='_blank' >去往音乐播放</a>
                    </button>
                </div>
                <h3>天气预报和笔记记录</h3>
                <div>
                    为什么要把它们放在一起介绍，因为它们都不复杂，都适配手机和电脑<br/>
                    天气预报是使用svelte，练习svelte的使用。<br/>
                    笔记记录使用react，可以用来管理基本的笔记（只能文字），笔记储存在本地。自己平时也会使用它。
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
                <h3>canvas小游戏</h3>
                <div>
                    <div></div>
                </div>
                <img draggable={false} src={gameImg} width="100%"></img>
            </div>
        },
        {
            index:"03",
            class:"1",
            space: <div className='right_class2_space' style={{height:'300vh'}}></div>,
            title: "项目经历",
            direction:'',
            otherStyle:window.innerWidth>500?{height:'400vh'}:{height:'700vh'},
            content: <div>
                <div>
                    当然我还写了一些其他小demo。我比较喜欢实践，平时有空的时候，就喜欢写一些自己的想写的demo。最近对three.js,blender和webGPU感兴趣，我用three.js和react做这个自我介绍网站。
                </div>
                <div>
                    我喜欢并且敬佩专注于自己事情的人，有自己的目标，不被外界眼光和大流所影响。同时我也致力于成为这样的人。
                </div>
                <div>
                    目前我会持续学习外语。我会通过一些软件尝试和别人交流，以提高自己的口语。能说一些外语，对完成未来的旅行梦很有帮助。
                    但在之前我是很讨厌学习它们，学校的英语课也很无聊，找不到目标为什么要去学习它们，对语言学习较为消极，所以我的外语并不好。
                </div>
                <div>
                    我认为记录很重要，目前会写一些记录在我的博客中，一般是一些平时编程的经验和所经历事情的感受，但是写得并不好，有些可能只有自己看得懂。
                    这是我的blog
                    <br/>
                    <button className='boom'>
                        <a href='http://tomyu.cn:3001/' target="_blank">我的blog</a>
                    </button>

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
                    电子邮箱:<a style={{color:'#646cff'}}>1808726039@qq.com</a>
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
        otherStyle:window.innerWidth>500?{height:'400vh'}:{height:'600vh'},
        content: <div>
            <h3>Hello, I'm Tomyu</h3>
            <div>I am currently a current student from Sichuan, China, and the name Tomyu has no special meaning, probably because it resembles the homonym of my real name, so I chose it.</div>
            <h3>I want to be someone who can design features, UIs, and code implementations</h3>
            <div>Designing and implementing them is a very pleasant thing for yourself. Designing software with novel and stable functions and good graphic interaction effects, especially users can feel comfortable from graphic animation, is their goal, of course, this still needs a long way to go.
                I love traveling and do</div>
            <h3>I love traveling and documenting them</h3>
            <div>
                I haven't been to many places at the moment. In the future want to travel to many countries, Switzerland, Germany, Japan, France, Russia, the Netherlands... Many, many, of course, the level of economy and time is not a small problem. It's unlikely that you will experience it all, but you want to see as many as you can, record your itinerary, and show them at the end. At the very least, visit some of the famous places in your country.
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
                    这是我用在大二下的时候制作的作品，也是我的第一个作品，音乐数据来源于网易云，当然因为是第一次做，它的代码代码结构和功能方面还有很多值得优化的地方，
                    有不少细节地方也存在一些bug，也不适配手机屏幕。即使这样，我也很喜欢它，对于我来讲它有非凡的意义。
                    空闲的时间，我会对它的一些地方进行重构,修改和扩展.慢慢改变它。<br/>
                    <img draggable={false} src={musicImg} width="100%"></img>
                    <button className='boom'>
                        <a href='http://tomyu.cn:5003/' target='_blank' >去往音乐播放</a>
                    </button>
                </div>
                <h3>Weather forecast and note-taking</h3>
                <div>
                    为什么要把它们放在一起介绍，因为它们都不复杂，都适配手机和电脑<br/>
                    天气预报是使用svelte，练习svelte的使用。<br/>
                    笔记记录使用react，可以用来管理基本的笔记（只能文字），笔记储存在本地。自己平时也会使用它。
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
                    <div></div>
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
                <div>
                    当然我还写了一些其他小demo。我比较喜欢实践，平时有空的时候，就喜欢写一些自己的想写的demo。最近对three.js,blender和webGPU感兴趣，我用three.js和react做这个自我介绍网站。
                </div>
                <div>
                    我喜欢并且敬佩专注于自己事情的人，有自己的目标，不被外界眼光和大流所影响。同时我也致力于成为这样的人。
                </div>
                <div>
                    目前我会持续学习外语。我会通过一些软件尝试和别人交流，以提高自己的口语。能说一些外语，对完成未来的旅行梦很有帮助。
                    但在之前我是很讨厌学习它们，学校的英语课也很无聊，找不到目标为什么要去学习它们，对语言学习较为消极，所以我的外语并不好。
                </div>
                <div>
                    我认为记录很重要，目前会写一些记录在我的博客中，一般是一些平时编程的经验和所经历事情的感受，但是写得并不好，有些可能只有自己看得懂。
                    这是我的blog
                    <br/>
                    <button className='boom'>
                        <a href='http://tomyu.cn:3001/' target="_blank">我的blog</a>
                    </button>

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