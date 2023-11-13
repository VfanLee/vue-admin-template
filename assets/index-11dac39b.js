import{b as X,i as Y,d as V,a as Z,u as ee,r as E,c as k,T as R,o as te,e as oe,f as C,g as x,w as p,h as D,j as _,n as h,k as r,l as U,E as A,m as se,p as F,t as K,q as ne,s as M,F as ae,v as O,x as le,y as v,z as ie,_ as re,C as ue,A as ce,B,D as de,G as L,H as q,I as fe,J as j,K as pe,L as me,M as ve,N as _e,O as G,P as ge,Q as W,R as ye,S as Ce,U as he,V as we,W as be,X as Se}from"./index-1b690120.js";const J=["success","info","warning","error"],ke=X({customClass:{type:String,default:""},dangerouslyUseHTMLString:{type:Boolean,default:!1},duration:{type:Number,default:4500},icon:{type:Y},id:{type:String,default:""},message:{type:V([String,Object]),default:""},offset:{type:Number,default:0},onClick:{type:V(Function),default:()=>{}},onClose:{type:V(Function),required:!0},position:{type:String,values:["top-right","top-left","bottom-right","bottom-left"],default:"top-right"},showClose:{type:Boolean,default:!0},title:{type:String,default:""},type:{type:String,values:[...J,""],default:""},zIndex:Number}),Ee={destroy:()=>!0},Ie=["id"],Te=["textContent"],xe={key:0},Ne=["innerHTML"],$e=Z({name:"ElNotification"}),Ve=Z({...$e,props:ke,emits:Ee,setup(e,{expose:l}){const n=e,{ns:o,zIndex:d}=ee("notification"),{nextZIndex:u,currentZIndex:g}=d,{Close:c}=ue,i=E(!1);let a;const f=k(()=>{const t=n.type;return t&&R[n.type]?o.m(t):""}),s=k(()=>n.type&&R[n.type]||n.icon),y=k(()=>n.position.endsWith("right")?"right":"left"),w=k(()=>n.position.startsWith("top")?"top":"bottom"),$=k(()=>{var t;return{[w.value]:`${n.offset}px`,zIndex:(t=n.zIndex)!=null?t:g.value}});function S(){n.duration>0&&({stop:a}=ce(()=>{i.value&&I()},n.duration))}function m(){a==null||a()}function I(){i.value=!1}function Q({code:t}){t===B.delete||t===B.backspace?m():t===B.esc?i.value&&I():S()}return te(()=>{S(),u(),i.value=!0}),oe(document,"keydown",Q),l({visible:i,close:I}),(t,T)=>(C(),x(ie,{name:r(o).b("fade"),onBeforeLeave:t.onClose,onAfterLeave:T[1]||(T[1]=H=>t.$emit("destroy")),persisted:""},{default:p(()=>[D(_("div",{id:t.id,class:h([r(o).b(),t.customClass,r(y)]),style:U(r($)),role:"alert",onMouseenter:m,onMouseleave:S,onClick:T[0]||(T[0]=(...H)=>t.onClick&&t.onClick(...H))},[r(s)?(C(),x(r(A),{key:0,class:h([r(o).e("icon"),r(f)])},{default:p(()=>[(C(),x(se(r(s))))]),_:1},8,["class"])):F("v-if",!0),_("div",{class:h(r(o).e("group"))},[_("h2",{class:h(r(o).e("title")),textContent:K(t.title)},null,10,Te),D(_("div",{class:h(r(o).e("content")),style:U(t.title?void 0:{margin:0})},[ne(t.$slots,"default",{},()=>[t.dangerouslyUseHTMLString?(C(),M(ae,{key:1},[F(" Caution here, message could've been compromised, never use user's input as message "),_("p",{innerHTML:t.message},null,8,Ne)],2112)):(C(),M("p",xe,K(t.message),1))])],6),[[O,t.message]]),t.showClose?(C(),x(r(A),{key:0,class:h(r(o).e("closeBtn")),onClick:le(I,["stop"])},{default:p(()=>[v(r(c))]),_:1},8,["class","onClick"])):F("v-if",!0)],2)],46,Ie),[[O,i.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Fe=re(Ve,[["__file","/home/runner/work/element-plus/element-plus/packages/components/notification/src/notification.vue"]]);const N={"top-left":[],"top-right":[],"bottom-left":[],"bottom-right":[]},P=16;let Be=1;const b=function(e={},l=null){if(!de)return{close:()=>{}};(typeof e=="string"||L(e))&&(e={message:e});const n=e.position||"top-right";let o=e.offset||0;N[n].forEach(({vm:f})=>{var s;o+=(((s=f.el)==null?void 0:s.offsetHeight)||0)+P}),o+=P;const d=`notification_${Be++}`,u=e.onClose,g={...e,offset:o,id:d,onClose:()=>{Me(d,n,u)}};let c=document.body;q(e.appendTo)?c=e.appendTo:fe(e.appendTo)&&(c=document.querySelector(e.appendTo)),q(c)||(c=document.body);const i=document.createElement("div"),a=v(Fe,g,L(g.message)?{default:()=>g.message}:null);return a.appContext=l??b._context,a.props.onDestroy=()=>{j(null,i)},j(a,i),N[n].push({vm:a}),c.appendChild(i.firstElementChild),{close:()=>{a.component.exposed.visible.value=!1}}};J.forEach(e=>{b[e]=(l={})=>((typeof l=="string"||L(l))&&(l={message:l}),b({...l,type:e}))});function Me(e,l,n){const o=N[l],d=o.findIndex(({vm:a})=>{var f;return((f=a.component)==null?void 0:f.props.id)===e});if(d===-1)return;const{vm:u}=o[d];if(!u)return;n==null||n(u);const g=u.el.offsetHeight,c=l.split("-")[0];o.splice(d,1);const i=o.length;if(!(i<1))for(let a=d;a<i;a++){const{el:f,component:s}=o[a].vm,y=Number.parseInt(f.style[c],10)-g-P;s.props.offset=y}}function Le(){for(const e of Object.values(N))e.forEach(({vm:l})=>{l.component.exposed.visible.value=!1})}b.closeAll=Le;b._context=null;const Pe=pe(b,"$notify");const z=e=>(be("data-v-95fc0524"),e=e(),Se(),e),ze={class:"page-login"},He={class:"login__form__wrap"},Re=z(()=>_("h1",{class:"login__title"},"登录",-1)),De=z(()=>_("i",{class:"fa-solid fa-user"},null,-1)),Ue=z(()=>_("i",{class:"fa-solid fa-lock"},null,-1)),Ae={__name:"index",setup(e){const l=ve(),n=_e(),o=E(),d=E(),u=G({username:"admin",password:"admin"}),g=G({username:[{required:!0,message:"请输入用户名",trigger:"blur"}]}),c=E(!0),i=E(!1),a=async f=>{f&&await f.validate(async(s,y)=>{if(s)try{i.value=!0,await l.login(u),await n.replace({path:"/"}),Pe({type:"success",message:"登录成功"})}catch(w){d.value.validateState="error",d.value.validateMessage=w.message}finally{i.value=!1}})};return(f,s)=>{const y=Ce,w=he,$=we,S=ge;return C(),M("div",ze,[_("div",He,[v(S,{class:"login__form",ref_key:"loginFormRef",ref:o,model:u,rules:g},{default:p(()=>[v(y,null,{default:p(()=>[Re]),_:1}),v(y,{prop:"username"},{default:p(()=>[v(w,{class:"login__username",modelValue:u.username,"onUpdate:modelValue":s[0]||(s[0]=m=>u.username=m),placeholder:"请输入用户名",autofocus:"",onKeyup:s[1]||(s[1]=W(m=>a(o.value),["enter"]))},{prefix:p(()=>[De]),_:1},8,["modelValue"])]),_:1}),v(y,{prop:"password",ref_key:"passwordItemRef",ref:d},{default:p(()=>[v(w,{class:"login__password",modelValue:u.password,"onUpdate:modelValue":s[3]||(s[3]=m=>u.password=m),type:c.value?"password":"text",placeholder:"任意密码",onKeyup:s[4]||(s[4]=W(m=>a(o.value),["enter"]))},{prefix:p(()=>[Ue]),suffix:p(()=>[_("i",{class:h(["pointer","fa-solid",c.value?"fa-eye-slash":"fa-eye"]),onClick:s[2]||(s[2]=m=>c.value=!c.value)},null,2)]),_:1},8,["modelValue","type"])]),_:1},512),v(y,null,{default:p(()=>[v($,{class:"login__btn",onClick:s[5]||(s[5]=m=>a(o.value)),loading:i.value},{default:p(()=>[ye("登录")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model","rules"])])])}}},Oe=me(Ae,[["__scopeId","data-v-95fc0524"]]);export{Oe as default};