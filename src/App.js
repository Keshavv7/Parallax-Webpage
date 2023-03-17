import React from 'react';
import './App.css'

const App = () => {
    let bush = document.getElementById('bush');
    let texttop = document.getElementById('texttop');
    let btn = document.getElementById('btn');
    let tree1 = document.getElementById('tree1');
    let tree2 = document.getElementById('tree2');

    // window.addEventListener('scroll', function()
    //     {
    //         let value = this.window.scrollY;
    //         bush.style.left = value+'px';
    //         texttop.style.marginTop = '-'+ value*1.25 + 'px';
    //         btn.style.marginTop = '+'+ value*1.5 + 'px';
    //         tree1.style.left = value*1.5 + 'px';
    //         tree2.style.left = '-'+value + 'px';
    //     }
    // )
    return (
        <body>
            <header>
                <a href="a.com" class="logo">Logo</a>
                <ul>
                    <li><a href="#top" class = "active">Home</a></li>
                    <li><a href="#aboutme">About Me</a></li>
                    <li><a href="a.com">Projects</a></li>
                    <li><a href="a.com">TimeLine</a></li>
                    <li><a href="a.com">Work</a></li>
                    <li><a href="a.com">Contact</a></li>
                </ul>
            </header>
            <section id="top">
                <img src = "assets/sky_01.png" alt="" id="sky"></img>
                <img src = "assets/cloud_01.png" alt="" id="cloud"></img>
                <img src = "assets/grass_01.png" alt="" id="grass"></img>
                <img src = "assets/bush_01.png" alt="" id="bush"></img>
                <h2 id="texttop">Welcome!</h2>
                <a href='#sec' id='btn'>Lets Go</a>
                <img src = "assets/tree_01.png" alt="" id="tree1"></img>
                <img src = "assets/tree_02.png" alt="" id="tree2"></img>
            </section>
            <div class="sec" id="sec">
                <div class = "container">
                
                    <h2>Hey! My Name is
                    <br></br>
                
                
                    <span id="twist">K</span>
                    <span id="twist">e</span>
                    <span id="twist">s</span>
                    <span id="twist">h</span>
                    <span id="twist">a</span>
                    <span id="twist">v</span>
                    </h2>
                    <br></br>
                    <a href="something.com" type="button" class="cta">Resume</a>
                    <div id= "scrollabout">
                        <a href="#aboutme" type="button" id="scroller">V</a>
                    </div>
                </div>
                <section id="aboutme">
                    <div class="content-container">
                        <div class="col-left">
                            <h1 class="section-title">About Me</h1>
                            <p>
                                Hey olks this is a guy and a girl with pronouns:
                                eat/me. I am a batter, so beat me meow. 
                            </p>
                        </div>
                        <div class="col-right">
                            <img src></img>
                        </div>
                    </div>
                </section>
            </div>
            
        </body>
    );
}

export default App;