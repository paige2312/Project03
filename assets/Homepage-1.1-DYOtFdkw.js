import{N as C}from"./Navbar-X-vU1tqe.js";import{_ as x,j as w,c as v,i as L,a as l,u as p,t as k,F as B,k as N,o as O}from"./index-B8ixTLeG.js";import{G as H,T as j,M as y,O as I}from"./RenderPass-Bf2Etyv6.js";import{T as z,d as J}from"./data-DB44m_cc.js";const M=""+new URL("../Homepage-1-1/listen.png",import.meta.url).href,R=""+new URL("../Homepage-1-1/zoomin.png",import.meta.url).href,A=""+new URL("../Homepage-1-1/zoomout.png",import.meta.url).href,D=""+new URL("../Homepage-1-1/P1split01.png",import.meta.url).href;class T extends z{constructor(e){super(),this.data=e,this.object="",this.group=new H,this.textureLoader=new j,this.vmLayout="",this.dataLayout="",this.manager="",this.material="",this.currentScale=1,this.topScale=1.7,this.bottomScale=.3,this.scaleStep=.1}initData(){this.flagLoadData=!0}initModel(){const{name:e,modelurl:h,textureurl:n}=this.data.data;this.textureLoader.load(n,d=>{console.log(n);const u=new y({color:16777215,map:d});new I().load(h,o=>{o.name=e,o.traverse(m=>{m.isMesh&&(m.material=u)});let a=1.5;o.scale.set(a,a,a),this.scene.add(o),this.object=o},o=>{console.log("".concat(o.loaded/o.total*100,"% loaded"))},o=>{console.error("An error happened while loading the model:",o)})})}start(){}initControls(){super.initControls()}upScale(){if(this.object){let e=!1;this.currentScale+this.scaleStep>this.topScale&&(e=!0),e||(this.currentScale+=this.scaleStep,this.object.scale.set(this.currentScale,this.currentScale,this.currentScale))}}downScale(){if(this.object){let e=!1;this.currentScale-this.scaleStep<this.bottomScale&&(e=!0),e||(this.currentScale-=this.scaleStep,this.object.scale.set(this.currentScale,this.currentScale,this.currentScale))}}render(){super.render()}}const U={dataBack:[{id:1,bpng:"../bg/bg1.png"},{id:2,bpng:"../bg/bg2.png"},{id:3,bpng:"../bg/bg3.png"},{id:4,bpng:"../bg/bg4.png"},{id:5,bpng:"../bg/bg5.png"}]},$=["src"],F=["src"],G={class:"area"},P={class:"note-text"},V={class:"splited-img"},E=["src"],q={class:"object-label"},K=["src"],Q={__name:"Homepage-1.1",setup(S){let e=w({pngurl:"",bpng:"/Homepage-1-1/linear-bg.png",isCollect:!1,collectbtn:"/Homepage-1-1/collectbutton.png",nocollectbtn:"/Homepage-1-1/collect-none.png"});const n=N().params.id-0;let d=J.data,u=U.dataBack,c=0,o=0;for(let s=0;s<d.length;s++){let t=d[s];if(n==t.id){c=t;let r=t.fid;for(let i=0;i<u.length;i++){let g=u[i];r==g.id&&(o=g)}}}let a="";c!=0&&(a=new T({data:c}),a.load(),e.pngurl=c.pngurl,e.text=c.text,e.infourl=c.infourl,e.bpng=o.bpng);const m=()=>{a&&a.upScale()},b=()=>{a&&a.downScale()},f=()=>{let s=sessionStorage.getItem("arrCollect");s=JSON.parse(s),console.log(s);let t=1;if(s)for(let r=0;r<s.length;r++){let i=s[r];n==i&&(t=2)}else t=0;return t};f()==2&&(e.isCollect=!0);const _=()=>{let s=f();if(s==0){let t=[];t.push(n),sessionStorage.setItem("arrCollect",JSON.stringify(t)),e.isCollect=!0}else if(s==1){let t=sessionStorage.getItem("arrCollect");t=JSON.parse(t),t.push(n),sessionStorage.setItem("arrCollect",JSON.stringify(t)),e.isCollect=!0}else{let t=sessionStorage.getItem("arrCollect");t=JSON.parse(t);let r=[];for(let i=0;i<t.length;i++){let g=t[i]-0;n!=g&&r.push(g)}t=r,sessionStorage.setItem("arrCollect",JSON.stringify(t)),e.isCollect=!1}};return(s,t)=>(O(),v(B,null,[L(C),t[3]||(t[3]=l("img",{src:M,class:"listen"},null,-1)),l("img",{src:R,class:"zoomin mp",onClick:t[0]||(t[0]=r=>m())}),l("img",{src:A,class:"zoomout mp",onClick:t[1]||(t[1]=r=>b())}),l("img",{src:p(e).bpng,class:"linear-bg",style:{position:"absolute",width:"1920px",height:"1080px","z-index":"0"}},null,8,$),t[4]||(t[4]=l("img",{src:D,class:"P1split01",style:{position:"absolute",width:"715.77px",height:"472.15px",top:"156px",left:"931.56px","z-index":"1"}},null,-1)),l("img",{onClick:_,class:"collectbutton mp",src:p(e).isCollect?p(e).collectbtn:p(e).nocollectbtn},null,8,F),t[5]||(t[5]=l("div",{id:"div_canvas3d",class:"threejs-container"},null,-1)),l("div",G,[t[2]||(t[2]=l("p",null,"信息 A:三维模型",-1)),l("p",P,k(p(e).text),1),l("div",V,[l("img",{src:p(e).pngurl,class:"mec01"},null,8,E)]),l("div",q,[l("img",{src:p(e).infourl,class:"label001"},null,8,K)])])],64))}},et=x(Q,[["__scopeId","data-v-47915806"]]);export{et as default};