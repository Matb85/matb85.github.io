import{_ as g}from"./q-PIEqAjWf.js";import{H as S}from"./q-F-AEwOYO.js";import{P as O}from"./q-CBCg47W-.js";import{b as P,q as f,r as D,G as M,k as _,i as d,d as l,f as E,H as L,F as k,l as y,_hW as T}from"./q-CLiAAzha.js";function x(i,t){i.scrollTo({left:i.scrollLeft+400*t,top:0,behavior:"smooth"})}const et=P(f(()=>g(()=>Promise.resolve().then(()=>A),void 0),"s_0QJThiuC3xA")),j=()=>{const i=[{img:"poznajgory-ss.webp",href:"https://poznajgory.pl"},{img:"estetic.webp",href:"https://estetic.optimamedical.pl"},{img:"optimamedical-ss.webp",href:"https://optimamedical.pl"},{img:"redinnlabs-ss.webp",href:"https://redinnlabs.com"},{img:"pieninski-potok-ss.webp",href:"https://pieninskipotok.pl"},{img:"u-wiktorka-ss.webp",href:"https://domekuwiktorka.pl"},{img:"zygmuntowka-ss.webp",href:"https://zygmuntowkaknd.pl"},{img:"echopienin-ss.webp",href:"https://echopienin.pl"},{img:"fizjopieniny-ss.webp",href:"https://fizjopieniny.pl"},{img:"amforest-ss.webp",href:"https://amforest.pl"}],t=D();return M(f(()=>g(()=>Promise.resolve().then(()=>N),void 0),"s_MypqtdYx2RU",[t]),{strategy:"document-idle"}),_(k,{children:[_(S,{text:"Selected Works",[d]:{text:d}},3,"1u_0"),l("div",null,{"data-aos":"fade-right",class:"text_border relative mx-auto text-center w-11/12 max-w-5xl !leading-[1.8] flex flex-col gap-4"},l("p",null,null,["Below are my ",l("b",null,null,"favourite projects",3,null)," I have worked on so far, click on the images to see the end product. Most of them are also displayed on"," ",l("a",null,{href:"https://redinnlabs.com",target:"_blank",class:" gradient-text"},"Redinn Labs' website",3,null),"."],3,null),3,null),l("div",null,{class:"hidden mx-auto md:flex justify-center gap-4 text-4xl mb-4"},[l("button",null,{class:"btn pt-0 pb-1",onClick$:f(()=>g(()=>Promise.resolve().then(()=>W),void 0),"s_x0mCHSYt2UA",[t])},"««",3,null),l("button",null,{class:"btn pt-0 pb-1",onClick$:f(()=>g(()=>Promise.resolve().then(()=>H),void 0),"s_0W4zAr4Nk9U",[t])},"»»",3,null)],3,null),l("section",{ref:t},{id:"projects-con",class:"w-full overflow-auto"},l("div",null,{"data-aos":"fade-up",class:"flex w-auto flex-nowrap gap-2 sm:gap-4 px-4"},i.map((o,s)=>l("a",{href:E(o,"href")},{target:"_blank",rel:"nofollow noopener",class:"w-4/5 lg:w-1/3 max-w-[66vh] flex-none transition-all hover:brightness-75 "},_(O,{class:"w-full object-cover",get src(){return o.img},alt:"project",sizes:[480,720],[d]:{class:d,src:L(o,"img"),alt:d,sizes:d}},3,"1u_1"),1,`project-${s}`)),1,null),1,null),l("div",null,{class:"mx-auto flex justify-center gap-4 text-4xl mt-4"},[l("button",null,{class:"btn pt-0 pb-1",onClick$:f(()=>g(()=>Promise.resolve().then(()=>Q),void 0),"s_sNkzSgObze4",[t])},"««",3,null),l("button",null,{class:"btn pt-0 pb-1",onClick$:f(()=>g(()=>Promise.resolve().then(()=>B),void 0),"s_twcqcvrWhOM",[t])},"»»",3,null)],3,null)]},1,"1u_2")},A=Object.freeze(Object.defineProperty({__proto__:null,s_0QJThiuC3xA:j},Symbol.toStringTag,{value:"Module"})),z=i=>Math.max(i.offsetWidth,i.scrollWidth),F=i=>Math.max(i.offsetHeight,i.scrollHeight),Y=(i,t,o)=>{const s=i.childNodes,c=document.createRange();for(let n=0;n<s.length;n++){const p=s[n];if(p.nodeType!==3)continue;c.selectNodeContents(p);const e=c.getBoundingClientRect();if(t>=e.left&&o>=e.top&&t<=e.right&&o<=e.bottom)return p}return!1},X=()=>{const i=window.getSelection?window.getSelection():document.selection;i&&(i.removeAllRanges?i.removeAllRanges():i.empty&&i.empty())},C=5;class R{constructor(t={}){const o={content:t.viewport.children[0],direction:"all",pointerMode:"all",scrollMode:void 0,bounce:!0,bounceForce:.1,friction:.05,textSelection:!1,inputsFocus:!0,emulateScroll:!1,preventDefaultOnEmulateScroll:!1,preventPointerMoveDefault:!0,lockScrollOnDragDirection:!1,pointerDownPreventDefault:!0,dragDirectionTolerance:40,onPointerDown(){},onPointerUp(){},onPointerMove(){},onClick(){},onUpdate(){},onWheel(){},shouldScroll(){return!0}};if(this.props={...o,...t},!this.props.viewport||!(this.props.viewport instanceof Element)){console.error('ScrollBooster init error: "viewport" config property must be present and must be Element');return}if(!this.props.content){console.error("ScrollBooster init error: Viewport does not have any content");return}this.isDragging=!1,this.isTargetScroll=!1,this.isScrolling=!1,this.isRunning=!1;const s={x:0,y:0};this.position={...s},this.velocity={...s},this.dragStartPosition={...s},this.dragOffset={...s},this.clientOffset={...s},this.dragPosition={...s},this.targetPosition={...s},this.scrollOffset={...s},this.rafID=null,this.events={},this.updateMetrics(),this.handleEvents()}updateOptions(t={}){this.props={...this.props,...t},this.props.onUpdate(this.getState()),this.startAnimationLoop()}updateMetrics(){this.viewport={width:this.props.viewport.clientWidth,height:this.props.viewport.clientHeight},this.content={width:z(this.props.content),height:F(this.props.content)},this.edgeX={from:Math.min(-this.content.width+this.viewport.width,0),to:0},this.edgeY={from:Math.min(-this.content.height+this.viewport.height,0),to:0},this.props.onUpdate(this.getState()),this.startAnimationLoop()}startAnimationLoop(){this.isRunning=!0,cancelAnimationFrame(this.rafID),this.rafID=requestAnimationFrame(()=>this.animate())}animate(){if(!this.isRunning)return;this.updateScrollPosition(),this.isMoving()||(this.isRunning=!1,this.isTargetScroll=!1);const t=this.getState();this.setContentPosition(t),this.props.onUpdate(t),this.rafID=requestAnimationFrame(()=>this.animate())}updateScrollPosition(){this.applyEdgeForce(),this.applyDragForce(),this.applyScrollForce(),this.applyTargetForce();const t=1-this.props.friction;this.velocity.x*=t,this.velocity.y*=t,this.props.direction!=="vertical"&&(this.position.x+=this.velocity.x),this.props.direction!=="horizontal"&&(this.position.y+=this.velocity.y),(!this.props.bounce||this.isScrolling)&&!this.isTargetScroll&&(this.position.x=Math.max(Math.min(this.position.x,this.edgeX.to),this.edgeX.from),this.position.y=Math.max(Math.min(this.position.y,this.edgeY.to),this.edgeY.from))}applyForce(t){this.velocity.x+=t.x,this.velocity.y+=t.y}applyEdgeForce(){if(!this.props.bounce||this.isDragging)return;const t=this.position.x<this.edgeX.from,o=this.position.x>this.edgeX.to,s=this.position.y<this.edgeY.from,c=this.position.y>this.edgeY.to,n=t||o,p=s||c;if(!n&&!p)return;const e={x:t?this.edgeX.from:this.edgeX.to,y:s?this.edgeY.from:this.edgeY.to},r={x:e.x-this.position.x,y:e.y-this.position.y},a={x:r.x*this.props.bounceForce,y:r.y*this.props.bounceForce},h={x:this.position.x+(this.velocity.x+a.x)/this.props.friction,y:this.position.y+(this.velocity.y+a.y)/this.props.friction};(t&&h.x>=this.edgeX.from||o&&h.x<=this.edgeX.to)&&(a.x=r.x*this.props.bounceForce-this.velocity.x),(s&&h.y>=this.edgeY.from||c&&h.y<=this.edgeY.to)&&(a.y=r.y*this.props.bounceForce-this.velocity.y),this.applyForce({x:n?a.x:0,y:p?a.y:0})}applyDragForce(){if(!this.isDragging)return;const t={x:this.dragPosition.x-this.position.x,y:this.dragPosition.y-this.position.y};this.applyForce({x:t.x-this.velocity.x,y:t.y-this.velocity.y})}applyScrollForce(){this.isScrolling&&(this.applyForce({x:this.scrollOffset.x-this.velocity.x,y:this.scrollOffset.y-this.velocity.y}),this.scrollOffset.x=0,this.scrollOffset.y=0)}applyTargetForce(){this.isTargetScroll&&this.applyForce({x:(this.targetPosition.x-this.position.x)*.08-this.velocity.x,y:(this.targetPosition.y-this.position.y)*.08-this.velocity.y})}isMoving(){return this.isDragging||this.isScrolling||Math.abs(this.velocity.x)>=.01||Math.abs(this.velocity.y)>=.01}scrollTo(t={}){this.isTargetScroll=!0,this.targetPosition.x=-t.x||0,this.targetPosition.y=-t.y||0,this.startAnimationLoop()}setPosition(t={}){this.velocity.x=0,this.velocity.y=0,this.position.x=-t.x||0,this.position.y=-t.y||0,this.startAnimationLoop()}getState(){return{isMoving:this.isMoving(),isDragging:!!(this.dragOffset.x||this.dragOffset.y),position:{x:-this.position.x,y:-this.position.y},dragOffset:this.dragOffset,dragAngle:this.getDragAngle(this.clientOffset.x,this.clientOffset.y),borderCollision:{left:this.position.x>=this.edgeX.to,right:this.position.x<=this.edgeX.from,top:this.position.y>=this.edgeY.to,bottom:this.position.y<=this.edgeY.from}}}getDragAngle(t,o){return Math.round(Math.atan2(t,o)*(180/Math.PI))}getDragDirection(t,o){return Math.abs(90-Math.abs(t))<=90-o?"horizontal":"vertical"}setContentPosition(t){this.props.scrollMode==="transform"&&(this.props.content.style.transform=`translate(${-t.position.x}px, ${-t.position.y}px)`),this.props.scrollMode==="native"&&(this.props.viewport.scrollTop=t.position.y,this.props.viewport.scrollLeft=t.position.x)}handleEvents(){const t={x:0,y:0},o={x:0,y:0};let s=null,c=null,n=!1;const p=e=>{if(!this.isDragging)return;const r=n?e.touches[0]:e,{pageX:a,pageY:h,clientX:u,clientY:v}=r;this.dragOffset.x=a-t.x,this.dragOffset.y=h-t.y,this.clientOffset.x=u-o.x,this.clientOffset.y=v-o.y,(Math.abs(this.clientOffset.x)>5&&!s||Math.abs(this.clientOffset.y)>5&&!s)&&(s=this.getDragDirection(this.getDragAngle(this.clientOffset.x,this.clientOffset.y),this.props.dragDirectionTolerance)),this.props.lockScrollOnDragDirection&&this.props.lockScrollOnDragDirection!=="all"?s===this.props.lockScrollOnDragDirection&&n?(this.dragPosition.x=this.dragStartPosition.x+this.dragOffset.x,this.dragPosition.y=this.dragStartPosition.y+this.dragOffset.y):n?(this.dragPosition.x=this.dragStartPosition.x,this.dragPosition.y=this.dragStartPosition.y):(this.dragPosition.x=this.dragStartPosition.x+this.dragOffset.x,this.dragPosition.y=this.dragStartPosition.y+this.dragOffset.y):(this.dragPosition.x=this.dragStartPosition.x+this.dragOffset.x,this.dragPosition.y=this.dragStartPosition.y+this.dragOffset.y)};this.events.pointerdown=e=>{n=!!(e.touches&&e.touches[0]),this.props.onPointerDown(this.getState(),e,n);const r=n?e.touches[0]:e,{pageX:a,pageY:h,clientX:u,clientY:v}=r,{viewport:m}=this.props,w=m.getBoundingClientRect();if(u-w.left>=m.clientLeft+m.clientWidth||v-w.top>=m.clientTop+m.clientHeight||!this.props.shouldScroll(this.getState(),e)||e.button===2||this.props.pointerMode==="mouse"&&n||this.props.pointerMode==="touch"&&!n)return;const b=["input","textarea","button","select","label"];if(!(this.props.inputsFocus&&b.indexOf(e.target.nodeName.toLowerCase())>-1)){if(this.props.textSelection){if(Y(e.target,u,v))return;X()}this.isDragging=!0,t.x=a,t.y=h,o.x=u,o.y=v,this.dragStartPosition.x=this.position.x,this.dragStartPosition.y=this.position.y,p(e),this.startAnimationLoop(),!n&&this.props.pointerDownPreventDefault&&e.preventDefault()}},this.events.pointermove=e=>{e.cancelable&&(this.props.lockScrollOnDragDirection==="all"||this.props.lockScrollOnDragDirection===s)&&e.preventDefault(),p(e),this.props.onPointerMove(this.getState(),e,n)},this.events.pointerup=e=>{this.isDragging=!1,s=null,this.props.onPointerUp(this.getState(),e,n)},this.events.wheel=e=>{const r=this.getState();this.props.emulateScroll&&(this.velocity.x=0,this.velocity.y=0,this.isScrolling=!0,this.scrollOffset.x=-e.deltaX,this.scrollOffset.y=-e.deltaY,this.props.onWheel(r,e),this.startAnimationLoop(),clearTimeout(c),c=setTimeout(()=>this.isScrolling=!1,80),this.props.preventDefaultOnEmulateScroll&&this.getDragDirection(this.getDragAngle(-e.deltaX,-e.deltaY),this.props.dragDirectionTolerance)===this.props.preventDefaultOnEmulateScroll&&e.preventDefault())},this.events.scroll=()=>{const{scrollLeft:e,scrollTop:r}=this.props.viewport;Math.abs(this.position.x+e)>3&&(this.position.x=-e,this.velocity.x=0),Math.abs(this.position.y+r)>3&&(this.position.y=-r,this.velocity.y=0)},this.events.click=e=>{const r=this.getState(),a=this.props.direction!=="vertical"?r.dragOffset.x:0,h=this.props.direction!=="horizontal"?r.dragOffset.y:0;Math.max(Math.abs(a),Math.abs(h))>C&&(e.preventDefault(),e.stopPropagation()),this.props.onClick(r,e,n)},this.events.contentLoad=()=>this.updateMetrics(),this.events.resize=()=>this.updateMetrics(),this.props.viewport.addEventListener("mousedown",this.events.pointerdown),this.props.viewport.addEventListener("touchstart",this.events.pointerdown,{passive:!1}),this.props.viewport.addEventListener("click",this.events.click),this.props.viewport.addEventListener("wheel",this.events.wheel,{passive:!1}),this.props.viewport.addEventListener("scroll",this.events.scroll),this.props.content.addEventListener("load",this.events.contentLoad,!0),window.addEventListener("mousemove",this.events.pointermove),window.addEventListener("touchmove",this.events.pointermove,{passive:!1}),window.addEventListener("mouseup",this.events.pointerup),window.addEventListener("touchend",this.events.pointerup),window.addEventListener("resize",this.events.resize)}destroy(){this.props.viewport.removeEventListener("mousedown",this.events.pointerdown),this.props.viewport.removeEventListener("touchstart",this.events.pointerdown),this.props.viewport.removeEventListener("click",this.events.click),this.props.viewport.removeEventListener("wheel",this.events.wheel),this.props.viewport.removeEventListener("scroll",this.events.scroll),this.props.content.removeEventListener("load",this.events.contentLoad),window.removeEventListener("mousemove",this.events.pointermove),window.removeEventListener("touchmove",this.events.pointermove),window.removeEventListener("mouseup",this.events.pointerup),window.removeEventListener("touchend",this.events.pointerup),window.removeEventListener("resize",this.events.resize)}}const I=()=>{const[i]=y();console.log(i.value);const t=document.getElementById("projects-con");new R({viewport:t,content:t.children[0],scrollMode:"native",direction:"horizontal"})},N=Object.freeze(Object.defineProperty({__proto__:null,_hW:T,s_MypqtdYx2RU:I},Symbol.toStringTag,{value:"Module"})),U=()=>{const[i]=y();return x(i.value,-1)},W=Object.freeze(Object.defineProperty({__proto__:null,s_x0mCHSYt2UA:U},Symbol.toStringTag,{value:"Module"})),q=()=>{const[i]=y();return x(i.value,1)},H=Object.freeze(Object.defineProperty({__proto__:null,s_0W4zAr4Nk9U:q},Symbol.toStringTag,{value:"Module"})),V=()=>{const[i]=y();return x(i.value,1)},B=Object.freeze(Object.defineProperty({__proto__:null,s_twcqcvrWhOM:V},Symbol.toStringTag,{value:"Module"})),$=()=>{const[i]=y();return x(i.value,-1)},Q=Object.freeze(Object.defineProperty({__proto__:null,s_sNkzSgObze4:$},Symbol.toStringTag,{value:"Module"}));export{et as P,U as a,q as b,V as c,$ as d,I as s,j as s_0QJThiuC3xA};