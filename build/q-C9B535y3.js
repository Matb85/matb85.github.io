import{u as F,k as v,j as K,b as Y,v as y,q as D,_ as q,y as R,n as H,P as x,L as z}from"./q-HtZrHgre.js";const G='((i,a,r,s)=>{r=e=>{const t=document.querySelector("[q\\\\:base]");t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?r(t):i.push(t)}),navigator.serviceWorker.register("/service-worker.js").then(e=>{s=()=>{a=e,i.forEach(r),r({bundles:i})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&s()}):e.active&&s()}).catch(e=>console.error(e))})([])',gt=y("qc-s"),yt=y("qc-c"),mt=y("qc-ic"),J=y("qc-h"),X=y("qc-l"),Z=y("qc-n"),Ct=y("qc-a"),Et=y("qc-ir"),_t=D(()=>q(()=>import("./q-fJkQnue_.js"),__vite__mapDeps([])),"s_DyVc0YBIqQU"),St=()=>{},wt=H(D(()=>q(()=>import("./q-CVE3FXhN.js"),__vite__mapDeps([])),"s_e0ssiDXoeAM")),b=new WeakMap,E=new Map,k=new Set,$="qaction",At="qfunc",S=t=>t.pathname+t.search+t.hash,C=(t,e)=>new URL(t,e.href),p=(t,e)=>t.origin===e.origin,N=t=>t.endsWith("/")?t:t+"/",M=({pathname:t},{pathname:e})=>{const n=Math.abs(t.length-e.length);return n===0?t===e:n===1&&N(t)===N(e)},tt=(t,e)=>t.search===e.search,T=(t,e)=>tt(t,e)&&M(t,e),et=(t,e,n)=>{let s=e??"";return n&&(s+=(s?"&":"?")+$+"="+encodeURIComponent(n.id)),t+(t.endsWith("/")?"":"/")+"q-data.json"+s},vt=(t,e)=>{const n=t.href;if(typeof n=="string"&&typeof t.target!="string"&&!t.reload)try{const s=C(n.trim(),e.url),r=C("",e.url);if(p(s,r))return S(s)}catch(s){console.error(s)}else if(t.reload)return S(C("",e.url));return null},Dt=(t,e)=>{if(t){const n=C(t,e.url),s=C("",e.url);return!T(n,s)}return!1},qt=(t,e)=>{if(t){const n=C(t,e.url),s=C("",e.url);return!M(n,s)}return!1},nt=t=>t&&typeof t.then=="function",Tt=(t,e,n,s)=>{const r=st(),o={head:r,withLocale:a=>R(s,a),resolveValue:a=>{const i=a.__id;if(a.__brand==="server_loader"&&!(i in t.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const l=t.loaders[i];if(nt(l))throw new Error("Loaders returning a promise can not be resolved for the head function.");return l},...e};for(let a=n.length-1;a>=0;a--){const i=n[a]&&n[a].head;i&&(typeof i=="function"?L(r,R(s,()=>i(o))):typeof i=="object"&&L(r,i))}return o.head},L=(t,e)=>{typeof e.title=="string"&&(t.title=e.title),_(t.meta,e.meta),_(t.links,e.links),_(t.styles,e.styles),_(t.scripts,e.scripts),Object.assign(t.frontmatter,e.frontmatter)},_=(t,e)=>{if(Array.isArray(e))for(const n of e){if(typeof n.key=="string"){const s=t.findIndex(r=>r.key===n.key);if(s>-1){t[s]=n;continue}}t.push(n)}},st=()=>({title:"",meta:[],links:[],styles:[],scripts:[],frontmatter:{}});function rt(t,e){const n=j(t),s=I(t),r=j(e),c=I(e);return Q(t,n,s,e,r,c)}function Q(t,e,n,s,r,c){let o=null;for(;e<n;){const a=t.charCodeAt(e++),i=s.charCodeAt(r++);if(a===91){const l=U(t,e),f=e+(l?3:0),d=A(t,f,n,93),u=t.substring(f,d),h=A(t,d+1,n,47),g=t.substring(d+1,h);e=d+1;const m=r-1;if(l){const O=ot(u,g,s,m,c,t,e+g.length+1,n);if(O)return Object.assign(o||(o={}),O)}const w=A(s,m,c,47,g);if(w==-1)return null;const P=s.substring(m,w);if(!l&&!g&&!P)return null;r=w,(o||(o={}))[u]=decodeURIComponent(P)}else if(a!==i&&!(isNaN(i)&&ct(t,e)))return null}return W(t,e)&&W(s,r)?o||{}:null}function ct(t,e){return t.charCodeAt(e)===91&&U(t,e+1)}function I(t){const e=t.length;return e>1&&t.charCodeAt(e-1)===47?e-1:e}function W(t,e){const n=t.length;return e>=n||e==n-1&&t.charCodeAt(e)===47}function j(t){return t.charCodeAt(0)===47?1:0}function U(t,e){return t.charCodeAt(e)===46&&t.charCodeAt(e+1)===46&&t.charCodeAt(e+2)===46}function A(t,e,n,s,r=""){for(;e<n&&t.charCodeAt(e)!==s;)e++;const c=r.length;for(let o=0;o<c;o++)if(t.charCodeAt(e-c+o)!==r.charCodeAt(o))return-1;return e-c}let V;(function(t){t[t.EOL=0]="EOL",t[t.OPEN_BRACKET=91]="OPEN_BRACKET",t[t.CLOSE_BRACKET=93]="CLOSE_BRACKET",t[t.DOT=46]="DOT",t[t.SLASH=47]="SLASH"})(V||(V={}));function ot(t,e,n,s,r,c,o,a){n.charCodeAt(s)===47&&s++;let i=r;const l=e+"/";let f=5;for(;i>=s&&f--;){const d=Q(c,o,a,n,i,r);if(d){let u=n.substring(s,Math.min(i,r));return u.endsWith(l)&&(u=u.substring(0,u.length-l.length)),d[t]=decodeURIComponent(u),d}i=at(n,s,l,i,s-1)+l.length}return null}function at(t,e,n,s,r){let c=t.lastIndexOf(n,s);return c==s-n.length&&(c=t.lastIndexOf(n,s-n.length-1)),c>e?c:r}const Pt=async(t,e,n,s)=>{if(Array.isArray(t))for(const r of t){const c=r[0],o=rt(c,s);if(o){const a=r[1],i=r[3],l=new Array(a.length),f=[],d=it(e,s);let u;return a.forEach((h,g)=>{B(h,f,m=>l[g]=m,n)}),B(d,f,h=>u=h==null?void 0:h.default,n),f.length>0&&await Promise.all(f),[c,o,l,u,i]}}return null},B=(t,e,n,s)=>{if(typeof t=="function"){const r=b.get(t);if(r)n(r);else{const c=t();typeof c.then=="function"?e.push(c.then(o=>{s!==!1&&b.set(t,o),n(o)})):c&&n(c)}}},it=(t,e)=>{if(t){e=e.endsWith("/")?e:e+"/";const n=t.find(s=>s[0]===e||e.startsWith(s[0]+(e.endsWith("/")?"":"/")));if(n)return n[1]}},Ot=(t,e,n,s,r=!1)=>{if(e!=="popstate"){const c=T(n,s),o=n.hash===s.hash;if(!c||!o){const a={_qCityScroll:lt()};r?t.history.replaceState(a,"",S(s)):t.history.pushState(a,"",S(s))}}},lt=()=>({x:0,y:0,w:0,h:0}),ft=t=>{t=t.endsWith("/")?t:t+"/",k.has(t)||(k.add(t),document.dispatchEvent(new CustomEvent("qprefetch",{detail:{links:[t]}})))},Rt=async(t,e,n)=>{const s=t.pathname,r=t.search,c=et(s,r,n==null?void 0:n.action);let o;n!=null&&n.action||(o=E.get(c)),(n==null?void 0:n.prefetchSymbols)!==!1&&ft(s);let a;if(!o){const i=ut(n==null?void 0:n.action);n!=null&&n.action&&(n.action.data=void 0),o=fetch(c,i).then(l=>{const f=new URL(l.url),d=f.pathname.endsWith("/q-data.json");if(f.origin!==location.origin||!d){location.href=f.href;return}if((l.headers.get("content-type")||"").includes("json"))return l.text().then(u=>{const h=F(u,e);if(!h){location.href=t.href;return}if(n!=null&&n.clearCache&&E.delete(c),h.redirect)location.href=h.redirect;else if(n!=null&&n.action){const{action:g}=n,m=h.loaders[g.id];a=()=>{g.resolve({status:l.status,result:m})}}return h});(n==null?void 0:n.isPrefetch)!==!0&&(location.href=t.href)}),n!=null&&n.action||E.set(c,o)}return o.then(i=>(i||E.delete(c),a&&a(),i))},ut=t=>{const e=t==null?void 0:t.data;if(e)return e instanceof FormData?{method:"POST",body:e}:{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json, charset=UTF-8"}}},bt=()=>v(J),kt=()=>v(X),Nt=()=>v(Z),Lt=()=>K(Y("qwikcity")),It=(t,e,n,s)=>{t==="popstate"&&s?window.scrollTo(s.x,s.y):(t==="link"||t==="form")&&(ht(e,n)||window.scrollTo(0,0))},ht=(t,e)=>{const n=t.hash.slice(1),s=n&&document.getElementById(n);return s?(s.scrollIntoView(),!0):!!(!s&&t.hash&&T(t,e))},Wt=t=>({x:t.scrollLeft,y:t.scrollTop,w:Math.max(t.scrollWidth,t.clientWidth),h:Math.max(t.scrollHeight,t.clientHeight)}),jt=()=>{const t=history.state;return t==null?void 0:t._qCityScroll},Vt=t=>{const e=history.state||{};e._qCityScroll=t,history.replaceState(e,"")},Bt=H(D(()=>q(()=>import("./q-DL3Xfp5H.js"),__vite__mapDeps([])),"s_TxCFOy819ag"));function Ft(t){for(;t&&t.nodeType!==Node.ELEMENT_NODE;)t=t.parentElement;return t.closest("[q\\:container]")}const Ht=t=>x("script",{nonce:z(t,"nonce")},{dangerouslySetInnerHTML:G},null,3,"1Z_0"),Mt=async function*(t,e,n){const s=t.getReader();try{let r="";const c=new TextDecoder;for(;!(n!=null&&n.aborted);){const o=await s.read();if(o.done)break;r+=c.decode(o.value,{stream:!0});const a=r.split(/\n/);r=a.pop();for(const i of a)yield await F(i,e)}}finally{s.releaseLock()}};export{Ot as A,Ft as B,yt as C,J as D,bt as E,St as F,wt as G,At as H,Mt as I,Bt as Q,X as R,Ht as S,kt as a,qt as b,st as c,mt as d,Z as e,gt as f,vt as g,Ct as h,Et as i,Lt as j,p as k,Rt as l,T as m,jt as n,Pt as o,ft as p,M as q,It as r,Dt as s,C as t,Nt as u,Tt as v,E as w,Vt as x,Wt as y,_t as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}