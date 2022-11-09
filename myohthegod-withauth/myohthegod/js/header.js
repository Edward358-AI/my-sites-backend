document.write(`

<head>
  <link rel="icon" type="image/x-icon" href="/supercorn.gif" defer>
  </link>
</head>
<div class="topnav">
  <a title="MyohTheGod\'s Logo" style="background-color:transparent;" href="/"><img style="display:inline-block;width:64px;height:64px;"src="supercorn.gif"></a>
  <h2><a id="title" title="Home of MyohTheGod" href="/"><em>Home of MyohTheGod</em></a></h2>
  <div id="hamburger-icon">
    <span style="cursor: pointer;" onclick="toggleMobileMenu()">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </span>
    <ul class="mobile-menu">
      <a href="/" title="Return to homepage">Home</a><a  title="Web Proxies" href="/wp.html">Web Proxies</a>
      <a  title="Games" href="/g.html">Games</a>
      <a title="Links" href="/l.html">Links</a>
      <a  title="Bookmarklets" href="/bm.html">Bookmarklets</a>
      <a  title="About and Contact" href="/ac.html">About and Contact</a>
      <p id="time2"></p>
    </ul>
  </div>
  <div class="webpages">
    <a class="navbutton" title="Web Proxies" href="/wp.html"><img src="/images/icons/click.png" style="vertical-align:middle;height:26x;width:26px;"></a>
    <a class="navbutton" title="Games" href="/g.html"><img src="/images/icons/console.png" style="vertical-align:middle;height:26x;width:26px;"></a>
    <a class="navbutton" title="Links" href="/l.html"><img src="/images/icons/link.png" style="vertical-align:middle;height:26x;width:26px;"></a>
    <a class="navbutton" title="Bookmarklets" href="/bm.html"><img src="/images/icons/bookmark-white.png" style="vertical-align:middle;height:26x;width:26px;"></a>
    <a class="navbutton" title="About and Contact" href="/ac.html"><img src="/images/icons/info.png" style="vertical-align:middle;height:26px;width:26px;"></a></div>
  <div id="theme-wrapper" title="Toggle Theme"><label for="mode"><input type = "checkbox" id="mode" ><span class = "slider"></span></label></div>
  <div class="time">
    <p id="time"></p>
  </div>
</div>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap");
#title{
    color: darkorchid !important;
    font-family: Cedarville Cursive, cursive;
    font-size: 20px;
    text-shadow: #000 0px 0px 1px, #000 0px 0px 1px,#000 0px 0px 1px,#000 0px 0px 1px,#000 0px 0px 1px,#000 0px 0px 1px;
    -webkit-font-smoothing: antialiased;
    margin-top: -7px;
    margin-left: -5px;
    background-color: transparent !important;
}
.webpages {
    float: right;
    margin-right: 1cm;
}
.topnav {
    background-image: linear-gradient(-45deg, #111, #222);
    opacity:1;
    border-radius: 10px;
    margin:7px;
    position:sticky;
    top:7px;
}
.topnav a {
    display:flex;
    float: left;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 20px;
    justify-content:space-between;
    align-items:center;
}
.navbutton{
    text-shadow: #000 0px 0px 1px, #000 0px 0px 1px,#000 0px 0px 1px,#000 0px 0px 1px,#000 0px 0px 1px,#000 0px 0px 1px;
    color: orchid;
    background-image: linear-gradient(135deg, #454545, #212121);
    border-radius: 7px;
    font-family: Nunito, sans-serif;
    box-shadow: 1px 1px 10px black;
    margin: 0px 15px 0px 0px;
}
.navbutton:hover {
    transform: scale(1.1);
    transition: 0.5s;
    color: orchid !important;
    font-family: Nunito, sans-serif;
    box-shadow: 3px 3px 15px black;
    background-image: linear-gradient(-45deg, #454545, #212121);
    margin: 0px 15px 0px 0px;
}
.navbutton:active {
    color: orchid !important;
    font-family: Nunito, sans-serif;
    box-shadow: 3px 3px 10px black;
    background-image: linear-gradient(-45deg, #454545, #212121);
    transform: translateY(3px);
    margin: 0px 15px 0px 0px;
}
body {
    margin: 0;
}
@keyframes fadein {
    0% {
        opacity: 0;
    }
    100%{
         opacity: 1;
    }
}
.time {
    color:darkorchid;
    border-radius: 2.5mm;
    margin-right:20px;
    float:right;
    box-shadow: #000 0px 0px 3px;
    padding: 5px;
}
#time{
    font-family:Nunito, sans-serif;
    font-size:15px;
    text-shadow:0.5px 0.5px 1px #000
}
#time2{
    font-family:Nunito, sans-serif;
    font-size:18px;
    text-shadow:0.5px 0.5px 1px #000;
    color:cyan
}
#hamburger-icon {
    margin-top:10px;
    margin-right: 30px;
    display: none;
    float: right;
    font-family: Nunito, sans-serif;
}
#hamburger-icon div {
    border-radius:30px;
    width: 35px;
    height: 3px;
    background-color: cyan;
    margin: 6px 0;
    transition: 0.4s;
}
.open .bar1 {
    -webkit-transform: rotate(-45deg) translate(-6px, 6px);
    transform: rotate(-45deg) translate(-6px, 6px);
}
.open .bar2 {
    opacity: 0;
}
.open .bar3 {
    -webkit-transform: rotate(45deg) translate(-6px, -8px);
    transform: rotate(45deg) translate(-6px, -8px);
}
.open .mobile-menu {
    border: 1px solid black;
    animation: rotateMenu 400ms ease-in-out forwards;
    transform-origin:top center;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
}
.mobile-menu {
    position:absolute;
    top:78px;
    display: none;
    right:7px;
    border-radius:10px;
    width:260px;
    padding-right:10px;
    height:400px;
    background: black;
}
.mobile-menu a {
    color:cyan;
    text-align: center;
}
.mobile-menu a:hover {
    transform: scale(1.2);
    transition:0.3s;
}
@media screen and (max-width: 1090px) and (min-width: 490px){
    .webpages {
        display: none;
    }
    .time{
        display:none;
    }
    #hamburger-icon {
        display: block;
    }
}
@media screen and (max-width: 490px){
    .webpages {
        display: none;
    }
    .time{
        display:none;
    }
    #title{
        display:none;
    }
    #hamburger-icon {
        display: block;
    }
}


label {
  position: absolute;
  width: 44px;
  height: 44px;
  background-color: #d8dbe0;
  border-radius: 50px;
  cursor: pointer;
  margin-left: 10px;
}

input {
  position: absolute;
  display: none;
}

.slider {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  transition: 0.5s;
}


.slider::before {
  content: "";
  position: absolute;
  top: 2.2px;
  left: 2.2px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: lightyellow url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA8ZJREFUWEe1l1uoVVUUhj/NW15DSx9SvIORT4pEooR3guhBSzHyzQu+mIqatzTFC6FhIihYiUJEQfYkmApeIpB88AJK3lMMCVOOt7QSUz4YC+bZZ++1FvvofDn77L3mmP/8x/j/MVYL6l8dgBlAO2ArcLeeUC3q2RR7XgW+A14EJgOX64nVHAA9ge8DwPvApWcJQGBPCgI+NwC9gBHAUeBqDpCXgLXBwMfAXzmABTsSOFbJVGUK/H8qsCEALAXO1wjss12BlsDNHKB9gNXAOOBTYHv6bLUacMPnwNvAXmAB8Hs9+QW8uSy9B/wMzAXOpbGqAfC7gcB6YDSwGPgKeJxs9BnlpxRdD4CHFSzIzAfAZuBXYBFwppKpPBX0BcYH8rOxsQ3QD5gAvAm8AhjjVhwiYxeA/wLYAGAMcDhS2aSwi2T4AvB/HG7RfQjMAkzTI+B2/NYlGPkD+BrYEaCMLxMpe42yWQQge9jDTYXOdx/YDfwEXI8HekSR6QcW5jfAqijO3PIpA0DaZ0bAK8By4GDQnFFqnNYh3zXAa8BnwCbg3zwEZQAMAn4AOgKzgf05lEq3ev8yqNeijzcHgADnhJTU75KiGwUTsqR8ZUFGrKOqywOUkjnO2LgXnU16bTQ7gbFhUAdKWLQHDY860fmmJZ2yM9ApzjL+HQ+dB0wMyvzyFLAiqvjlaDhK8l3gdElDUn4/An8DFqbqUCkyo3w9V1b2+0FaJwUA458EMm9X53a83gFAIymzBKBSNCcBXAuWdUUBuLzsPgGIrFuSAgeLzNtNjykYBUyJ6i/qkgZ/IxiwAPWOOxFfiXpe1m0bilTg7xbTSmBL/M1crhYTynEhYCNThu7NLcIiSgeHDFuFER3JCagMh4UTyp6s2QdqriIG3KgRfQQsi2ZizTgraMXp8uZDookNBb6Iz/80F4D7rRF7uZK6AXwbhuRna0K12DnNty3YAjQFfxbRW8SAlGb585DpkQa9X79wCsoAWFwW7y5gW3J4GqMJnjwA3uStyKEDpwe1BV4H3gGkuXtUtAcr3z3hI8rPpXy15l8A+0hpALZbu5kHSWXlQOKt7A3e2qV0ZSSt9nQgORR+c7HMQOLN14U5WfE6ZaMxqiivye9eZGMy3jkVNXp/qJYCh1L1eyL03GSMSg7ITEWjqWVQ2XhnOrXiwqG0fwwX0uZEXCuwjeUToH3SO2ql2V7iVOxg+lv6UK0iLPti4quZAJx6i17NqsYskmFeup/bm1HZGhNA9nJqxytioGrc5jCgDOfHNOybVENZ5OlzTwGxttpB/K/dBAAAAABJRU5ErkJggg==");
  background-position: center;
  background-repeat: no-repeat;
  transition: 0.5s;
}

input:checked ~ .slider::before {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABAVJREFUWEet11fspGMUBvDf6r1GrE4QNxIXunVDRLjRoiyChCB63dWJFiUkSrDRW7QLnWg3ShASkRDRy250opdllTxyvs1kzMz3/fc/bzLJZOZ9z3neU57zvFO0r2WxDXbDTvgYB+Oj9qPtO6aM2LI4NsPh2AGrIvvfwd54o918+45hAFbCgTgGa2Oh+vyFazADf7Sbb98xCMBqOK0ALIX38S22xjd1++faTXfb0Q8gYT4f+9eNH8VVBSZ5fxIH4etu5tt39QJYGqfjuMr17bgQc3EftsVlOGdc4Q+8BsDC2BNXYkXcjVPxRdXAE1incn8d/mm/W7cdDYD1cAe2wos4BO+ViQ3wDFKYR+LObqa77QqAVPiJOA8/lZMH8PcAAEcV0G7WO+wKgDUq5NMq14cVkOb4Wngc61darh53CsJwN2HRqvaH+hysXAC3r45Ii6Ywx7ISgUtwEl7FPpjdZ3kJXIRjkf7fD5+PxXt1wdPYDjfjePzaZzwgQ72zqi72xVPjBJChEvY7t6LRFF+vj3VxLzZF+OHoAUAXCFNu93PlPJ1wwxAr4YlTcDa+q05JrQwCOyEgAfBn3SaDJ7cbtsIV4YAt8XJNybcm2xEB8Evd5ATcOAJAorB7seUqeKyY8YPJgAiAD7F6Sw00uJasQp2JfA9DpnZer0h2DX/85kLz8iUVnR4f1gX9RlcoEGnLqKUIlGuRmkh7jqqL+FumFNbG8Z0fLsbJeAXTB/DAoFstjwMKSDokaYxCCohwRYCkuCNg4iPRCqFtgj1KW2Tozcqfu+AWLFJGH+mY08XqJpkPkWyJRm7/fenGTNJwShg2zqOskuqci9/fMTNf8uNdNe/vwRF9s2BUXnM+xiNaw6LhiYiaaIvkuFkBFvr+oaZq2PXtRLyZhmHAC8pxhlGiMNEeT5gzsDZC0jK1Qj+vpNyc0hrhk4AOs85o9EDERno8uu95HFpasGtV9+5rKjwRyKiPeEktxOnl2KtSlHp7rVcR5Y8rCuVtOAtfLgiCAWdS+Sn0fAImujNjfW6vJowCPgMhpIT/1tKEk5186ZiwbOwuV/WW6RuFPV8TNqCTtyijqOKsh3Ep3pwg0eRsUhD6Dl/kjZEayeSN83DHf2vYu+DMaskcCt9HsDyITys6o0Rp8p5871y1tEX5isSP3VT//PPDXkYxkHdAnmUp0N8KdYy8UGSVlmqUUXo7PJCW3hy7Funkt7whorLzvvikn2NGvQ1jNF0REDsiFJz1Iz4rtgvp5DZxlP5fs4o4dkNCL+F6RNaHLf+3RgFoUhTHeaSmS3K7OEkxJce951PdcZKiDS3fj2fx1ShOaQPQizgRCZ1uWJ+8F5Kq5DyRiLJ6t/gj3wfeuD8E/wIAO+GAFo1NsQAAAABJRU5ErkJggg==");
  background-repeat: no-repeat;
  background-position: center;
  background-color: #454545;
  transition: 0.5s;
}

#theme-wrapper {
  float: left;
  display: block;
  min-width: 60px;
  margin: auto;
}
</style>

<script>
  function toggleMobileMenu() {
    document.getElementById("hamburger-icon").classList.toggle("open");
  }
</script>

<script src="/js/theme.js" defer></script>
<script src="/js/particles.js" defer></script>
<script src="/js/time.js"></script>
`)

window.addEventListener("load", function() {
  document.documentElement.style.visibility = "visible";
  document.documentElement.style.animationName = "fadein";
  document.documentElement.style.animationDuration = "0.5s";
  document.documentElement.style.opacity = 1;
  document.documentElement.style.cursor = "default";
})