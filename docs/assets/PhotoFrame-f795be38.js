import{B as w}from"./BackButton-b27b0770.js";import{_ as y,r as v,o as k,a as F,c as j,f as t,b as U,n as b,u as f,g as C,h as M,d as E,p as I,e as x}from"./index-d9bbab74.js";const r=n=>(I("data-v-0b200f68"),n=n(),x(),n),B={class:"container-fluid"},q={class:"row"},D=M('<div class="row" data-v-0b200f68><div class="col-sm-6" data-v-0b200f68><h4 data-v-0b200f68>How to play?</h4><ul data-v-0b200f68><li data-v-0b200f68>Real-time image processing.</li><li data-v-0b200f68>Click button &quot;Frame 1&quot; or &quot;Frame 2&quot; to switch frame.</li><li data-v-0b200f68>Click <i class="fas fa-camera-alt" data-v-0b200f68></i> to take a snapshot.</li></ul></div><div class="col-sm-6" data-v-0b200f68><h4 data-v-0b200f68>Tech Stack</h4><ul data-v-0b200f68><li data-v-0b200f68>Fabric.js</li><li data-v-0b200f68>Webcam</li></ul></div></div>',1),S={class:"row"},A={class:"col-sm-6 d-flex justify-content-center"},N={class:"button-group"},P={class:"row my-2"},T=r(()=>t("div",{class:"col-sm-12 col-md-6 d-flex justify-content-center"},[t("canvas",{id:"canvas",width:"360",height:"360",class:"img-fluid"})],-1)),V=["if"],G=r(()=>t("img",{id:"photo",width:"360",height:"360"},null,-1)),O=[G],R=r(()=>t("i",{class:"fas fa-camera-alt"},null,-1)),W=[R],z=r(()=>t("video",{id:"webcam",muted:"",height:"360",width:"360",style:{display:"none"}},null,-1)),L={__name:"PhotoFrame",setup(n){let i,c,l=new Map,m=v(!1),d=v(0);function h(){i=new fabric.Canvas("canvas"),c=document.getElementById("webcam");const s=new fabric.Image(c,{left:180,top:180,angle:0,originX:"center",originY:"center",objectCaching:!1,selectable:!1});i.add(s),navigator.mediaDevices===void 0&&(navigator.mediaDevices={}),navigator.mediaDevices.getUserMedia===void 0&&(navigator.mediaDevices.getUserMedia=function(e){const a=navigator.webkitGetUserMedia||nagivator.mozGetUserMedia||navigator.msGetUserMedia;return a?new Promise(function(o,g){a.call(navigator,e,o,g)}):Promise.reject(new Error("getUserMedia is not supported in this browser."))}),navigator.mediaDevices.getUserMedia({video:!0}).then(function(a){c.srcObject=a,s.moveTo(0),s.getElement().play()}).catch(function(a){console.error(a)}),fabric.util.requestAnimFrame(function e(){i.renderAll(),fabric.util.requestAnimFrame(e)})}function _(){[{url:"/assets/imgs/photo/frame1.png",ratio:.2},{url:"/assets/imgs/photo/frame2.png",ratio:.3}].forEach((e,a)=>{fabric.Image.fromURL(e.url,function(o){o.scale(e.ratio),o.selectable=!1,a!=0&&(o.visible=!1),i.add(o),l.set(a,o)})})}function u(s){l.forEach(e=>e.visible=!1),l.get(s).visible=!0,d.value=s}function p(){m.value=!0,document.getElementById("photo").src=i.toDataURL({format:"jpeg",quality:.8})}return k(()=>{h(),_()}),F(()=>{c.srcObject.getTracks().forEach(e=>e.stop()),c.srcObject=null}),(s,e)=>(E(),j("div",B,[t("div",q,[U(w)]),D,t("div",S,[t("div",A,[t("div",N,[t("button",{class:b([{active:f(d)==0},"btn","btn-primary"]),onClick:e[0]||(e[0]=a=>u(0))},"Frame 1",2),C("  "),t("button",{class:b([{active:f(d)==1},"btn","btn-primary"]),onClick:e[1]||(e[1]=a=>u(1))},"Frame 2",2)])])]),t("div",P,[T,t("div",{class:"col-sm-12 col-md-6 d-flex justify-content-center",if:f(m)},O,8,V)]),t("div",{class:"row my-2"},[t("div",{class:"col-sm-12 col-md-6 d-flex justify-content-center"},[t("button",{class:"btn btn-lg btn-primary",onClick:p},W)])]),z]))}},X=y(L,[["__scopeId","data-v-0b200f68"]]);export{X as default};
