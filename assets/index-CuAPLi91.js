var gf=Object.defineProperty;var au=n=>{throw TypeError(n)};var _f=(n,e,t)=>e in n?gf(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var fn=(n,e,t)=>_f(n,typeof e!="symbol"?e+"":e,t),Do=(n,e,t)=>e.has(n)||au("Cannot "+t);var B=(n,e,t)=>(Do(n,e,"read from private field"),t?t.call(n):e.get(n)),Je=(n,e,t)=>e.has(n)?au("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),qe=(n,e,t,i)=>(Do(n,e,"write to private field"),i?i.call(n,t):e.set(n,t),t),ut=(n,e,t)=>(Do(n,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const Ah=!1;var Rh=Array.isArray,vf=Array.prototype.indexOf,Qs=Array.prototype.includes,So=Array.from,xf=Object.defineProperty,ka=Object.getOwnPropertyDescriptor,yf=Object.getOwnPropertyDescriptors,Mf=Object.prototype,Sf=Array.prototype,Ch=Object.getPrototypeOf,su=Object.isExtensible;const bf=()=>{};function Ef(n){for(var e=0;e<n.length;e++)n[e]()}function Ph(){var n,e,t=new Promise((i,r)=>{n=i,e=r});return{promise:t,resolve:n,reject:e}}const Gt=2,yr=4,bo=8,Dh=1<<24,Hn=16,Ln=32,wi=64,ml=128,Pn=512,Ft=1024,Lt=2048,Xn=4096,en=8192,Dn=16384,_a=32768,gl=1<<25,ca=65536,eo=1<<17,Lh=1<<18,va=1<<19,Tf=1<<20,Si=1<<25,Mr=65536,to=1<<21,Jr=1<<22,Ki=1<<23,zs=Symbol("$state"),wf=Symbol(""),Gs=Symbol("attributes"),Af=Symbol("class"),_l=Symbol("style"),Da=Symbol("text"),es=new class extends Error{constructor(){super(...arguments);fn(this,"name","StaleReactionError");fn(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};function Rf(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Cf(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Pf(n,e,t){throw new Error("https://svelte.dev/e/each_key_duplicate")}function Df(n){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Lf(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function If(n){throw new Error("https://svelte.dev/e/effect_orphan")}function Uf(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Nf(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Ff(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Of(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Bf(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const kf=1,zf=2,Gf=16,Hf=1,Vf=2,Ut=Symbol("uninitialized"),Wf="http://www.w3.org/1999/xhtml";function Xf(){console.warn("https://svelte.dev/e/derived_inert")}function qf(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Ih(n){return n===this.v}function Yf(n,e){return n!=n?e==e:n!==e||n!==null&&typeof n=="object"||typeof n=="function"}function Uh(n){return!Yf(n,this.v)}let jf=!1,jt=null;function ua(n){jt=n}function yc(n,e=!1,t){jt={p:jt,i:!1,c:null,e:null,s:n,x:null,r:ot,l:null}}function Mc(n){var e=jt,t=e.e;if(t!==null){e.e=null;for(var i of t)nd(i)}return e.i=!0,jt=e.p,{}}function Nh(){return!0}let qr=[];function Kf(){var n=qr;qr=[],Ef(n)}function gr(n){if(qr.length===0){var e=qr;queueMicrotask(()=>{e===qr&&Kf()})}qr.push(n)}function Fh(n){var e=ot;if(e===null)return at.f|=Ki,n;if(!(e.f&_a)&&!(e.f&yr))throw n;Xi(n,e)}function Xi(n,e){if(!(e!==null&&e.f&Dn)){for(;e!==null;){if(e.f&ml){if(!(e.f&_a))throw n;try{e.b.error(n);return}catch(t){n=t}}e=e.parent}throw n}}const Zf=-7169;function Et(n,e){n.f=n.f&Zf|e}function Sc(n){n.f&Pn||n.deps===null?Et(n,Ft):Et(n,Xn)}function Oh(n){if(n!==null)for(const e of n)!(e.f&Gt)||!(e.f&Mr)||(e.f^=Mr,Oh(e.deps))}function Bh(n,e,t){n.f&Lt?e.add(n):n.f&Xn&&t.add(n),Oh(n.deps),Et(n,Ft)}function ts(n){var e=at,t=ot;In(null),li(null);try{return n()}finally{In(e),li(t)}}function $f(n){let e=0,t=br(0),i;return()=>{Ac()&&($(t),id(()=>(e===0&&(i=Pc(()=>n(()=>Ga(t)))),e+=1,()=>{gr(()=>{e-=1,e===0&&(i==null||i(),i=void 0,Ga(t))})})))}}var Jf=ca|va;function Qf(n,e,t,i){new e1(n,e,t,i)}var Tn,xc,wn,hr,sn,An,Qt,_n,vi,dr,Vi,na,Ka,Za,xi,vo,wt,t1,n1,i1,vl,Hs,Vs,xl,yl;class e1{constructor(e,t,i,r){Je(this,wt);fn(this,"parent");fn(this,"is_pending",!1);fn(this,"transform_error");Je(this,Tn);Je(this,xc,null);Je(this,wn);Je(this,hr);Je(this,sn);Je(this,An,null);Je(this,Qt,null);Je(this,_n,null);Je(this,vi,null);Je(this,dr,0);Je(this,Vi,0);Je(this,na,!1);Je(this,Ka,new Set);Je(this,Za,new Set);Je(this,xi,null);Je(this,vo,$f(()=>(qe(this,xi,br(B(this,dr))),()=>{qe(this,xi,null)})));var a;qe(this,Tn,e),qe(this,wn,t),qe(this,hr,s=>{var o=ot;o.b=this,o.f|=ml,i(s)}),this.parent=ot.b,this.transform_error=r??((a=this.parent)==null?void 0:a.transform_error)??(s=>s),qe(this,sn,Eo(()=>{ut(this,wt,vl).call(this)},Jf))}defer_effect(e){Bh(e,B(this,Ka),B(this,Za))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!B(this,wn).pending}update_pending_count(e,t){ut(this,wt,xl).call(this,e,t),qe(this,dr,B(this,dr)+e),!(!B(this,xi)||B(this,na))&&(qe(this,na,!0),gr(()=>{qe(this,na,!1),B(this,xi)&&ha(B(this,xi),B(this,dr))}))}get_effect_pending(){return B(this,vo).call(this),$(B(this,xi))}error(e){if(!B(this,wn).onerror&&!B(this,wn).failed)throw e;je!=null&&je.is_fork?(B(this,An)&&je.skip_effect(B(this,An)),B(this,Qt)&&je.skip_effect(B(this,Qt)),B(this,_n)&&je.skip_effect(B(this,_n)),je.oncommit(()=>{ut(this,wt,yl).call(this,e)})):ut(this,wt,yl).call(this,e)}}Tn=new WeakMap,xc=new WeakMap,wn=new WeakMap,hr=new WeakMap,sn=new WeakMap,An=new WeakMap,Qt=new WeakMap,_n=new WeakMap,vi=new WeakMap,dr=new WeakMap,Vi=new WeakMap,na=new WeakMap,Ka=new WeakMap,Za=new WeakMap,xi=new WeakMap,vo=new WeakMap,wt=new WeakSet,t1=function(){try{qe(this,An,xn(()=>B(this,hr).call(this,B(this,Tn))))}catch(e){this.error(e)}},n1=function(e){const t=B(this,wn).failed;t&&qe(this,_n,xn(()=>{t(B(this,Tn),()=>e,()=>()=>{})}))},i1=function(){const e=B(this,wn).pending;e&&(this.is_pending=!0,qe(this,Qt,xn(()=>e(B(this,Tn)))),gr(()=>{var t=qe(this,vi,document.createDocumentFragment()),i=Zi();t.append(i),qe(this,An,ut(this,wt,Vs).call(this,()=>xn(()=>B(this,hr).call(this,i)))),B(this,Vi)===0&&(B(this,Tn).before(t),qe(this,vi,null),vr(B(this,Qt),()=>{qe(this,Qt,null)}),ut(this,wt,Hs).call(this,je))}))},vl=function(){try{if(this.is_pending=this.has_pending_snippet(),qe(this,Vi,0),qe(this,dr,0),qe(this,An,xn(()=>{B(this,hr).call(this,B(this,Tn))})),B(this,Vi)>0){var e=qe(this,vi,document.createDocumentFragment());Cc(B(this,An),e);const t=B(this,wn).pending;qe(this,Qt,xn(()=>t(B(this,Tn))))}else ut(this,wt,Hs).call(this,je)}catch(t){this.error(t)}},Hs=function(e){this.is_pending=!1,e.transfer_effects(B(this,Ka),B(this,Za))},Vs=function(e){var t=ot,i=at,r=jt;li(B(this,sn)),In(B(this,sn)),ua(B(this,sn).ctx);try{return Sr.ensure(),e()}catch(a){return Fh(a),null}finally{li(t),In(i),ua(r)}},xl=function(e,t){var i;if(!this.has_pending_snippet()){this.parent&&ut(i=this.parent,wt,xl).call(i,e,t);return}qe(this,Vi,B(this,Vi)+e),B(this,Vi)===0&&(ut(this,wt,Hs).call(this,t),B(this,Qt)&&vr(B(this,Qt),()=>{qe(this,Qt,null)}),B(this,vi)&&(B(this,Tn).before(B(this,vi)),qe(this,vi,null)))},yl=function(e){B(this,An)&&(un(B(this,An)),qe(this,An,null)),B(this,Qt)&&(un(B(this,Qt)),qe(this,Qt,null)),B(this,_n)&&(un(B(this,_n)),qe(this,_n,null));var t=B(this,wn).onerror;let i=B(this,wn).failed;var r=!1,a=!1;const s=()=>{if(r){qf();return}r=!0,a&&Bf(),B(this,_n)!==null&&vr(B(this,_n),()=>{qe(this,_n,null)}),ut(this,wt,Vs).call(this,()=>{ut(this,wt,vl).call(this)})},o=l=>{try{a=!0,t==null||t(l,s),a=!1}catch(c){Xi(c,B(this,sn)&&B(this,sn).parent)}i&&qe(this,_n,ut(this,wt,Vs).call(this,()=>{try{return xn(()=>{var c=ot;c.b=this,c.f|=ml,i(B(this,Tn),()=>l,()=>s)})}catch(c){return Xi(c,B(this,sn).parent),null}}))};gr(()=>{var l;try{l=this.transform_error(e)}catch(c){Xi(c,B(this,sn)&&B(this,sn).parent);return}l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(o,c=>Xi(c,B(this,sn)&&B(this,sn).parent)):o(l)})};function kh(n,e,t,i){const r=bc;var a=n.filter(h=>!h.settled),s=e.map(r);if(t.length===0&&a.length===0){i(s);return}var o=ot,l=r1(),c=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(h=>h.promise)):null;function d(h){if(!(o.f&Dn)){l();try{i([...s,...h])}catch(p){Xi(p,o)}no()}}var f=zh();if(t.length===0){c.then(()=>d([])).finally(f);return}function u(){Promise.all(t.map(h=>a1(h))).then(d).catch(h=>Xi(h,o)).finally(f)}c?c.then(()=>{l(),u(),no()}):u()}function r1(){var n=ot,e=at,t=jt,i=je;return function(a=!0){li(n),In(e),ua(t),a&&!(n.f&Dn)&&(i==null||i.activate(),i==null||i.apply())}}function no(n=!0){li(null),In(null),ua(null),n&&(je==null||je.deactivate())}function zh(){var n=ot,e=n.b,t=je,i=!!(e!=null&&e.is_rendered());return e==null||e.update_pending_count(1,t),t.increment(i,n),()=>{e==null||e.update_pending_count(-1,t),t.decrement(i,n)}}function bc(n){var e=Gt|Lt;return ot!==null&&(ot.f|=va),{ctx:jt,deps:null,effects:null,equals:Ih,f:e,fn:n,reactions:null,rv:0,v:Ut,wv:0,parent:ot,ac:null}}const La=Symbol("obsolete");function a1(n,e,t){let i=ot;i===null&&Cf();var r=void 0,a=br(Ut),s=!at,o=new Set;return M1(()=>{var h,p;var l=ot,c=Ph();r=c.promise;try{Promise.resolve(n()).then(c.resolve,v=>{v!==es&&c.reject(v)}).finally(no)}catch(v){c.reject(v),no()}var d=je;if(s){if(l.f&_a)var f=zh();if((h=i.b)!=null&&h.is_rendered())(p=d.async_deriveds.get(l))==null||p.reject(La);else for(const v of o.values())v.reject(La);o.add(c),d.async_deriveds.set(l,c)}const u=(v,g=void 0)=>{f==null||f(),o.delete(c),g!==La&&(d.activate(),g?(a.f|=Ki,ha(a,g)):(a.f&Ki&&(a.f^=Ki),ha(a,v)),d.deactivate())};c.promise.then(u,v=>u(null,v||"unknown"))}),td(()=>{for(const l of o)l.reject(La)}),new Promise(l=>{function c(d){function f(){d===r?l(a):c(r)}d.then(f,f)}c(r)})}function Li(n){const e=bc(n);return ld(e),e}function s1(n){const e=bc(n);return e.equals=Uh,e}function o1(n){var e=n.effects;if(e!==null){n.effects=null;for(var t=0;t<e.length;t+=1)un(e[t])}}function Ec(n){var e,t=ot,i=n.parent;if(!$i&&i!==null&&n.v!==Ut&&i.f&(Dn|en))return Xf(),n.v;li(i);try{n.f&=~Mr,o1(n),e=dd(n)}finally{li(t)}return e}function Gh(n){var e=Ec(n);if(!n.equals(e)&&(n.wv=ud(),(!(je!=null&&je.is_fork)||n.deps===null)&&(je!==null?(je.capture(n,e,!0),za==null||za.capture(n,e,!0)):n.v=e,n.deps===null))){Et(n,Ft);return}$i||(Ht!==null?(Ac()||je!=null&&je.is_fork)&&Ht.set(n,e):Sc(n))}function l1(n){var e;if(n.effects!==null)for(const t of n.effects)(t.teardown||t.ac)&&((e=t.teardown)==null||e.call(t),t.ac!==null&&ts(()=>{t.ac.abort(es),t.ac=null}),t.fn!==null&&(t.teardown=bf),Xa(t,0),Rc(t))}function Hh(n){if(n.effects!==null)for(const e of n.effects)e.teardown&&e.fn!==null&&da(e)}let Lo=null,Cr=null,je=null,za=null,Ht=null,Ml=null,Io=!1,Yr=null,Ws=null;var ou=0;let c1=1;var ia,Wi,fr,ra,aa,sa,yi,oa,on,$a,Mi,kn,Jn,la,pr,pt,Sl,Ia,bl,Vh,Wh,Wr,u1,Ua;const xo=class xo{constructor(){Je(this,pt);fn(this,"id",c1++);Je(this,ia,!1);fn(this,"linked",!0);Je(this,Wi,null);Je(this,fr,null);fn(this,"async_deriveds",new Map);fn(this,"current",new Map);fn(this,"previous",new Map);Je(this,ra,new Set);Je(this,aa,new Set);Je(this,sa,0);Je(this,yi,new Map);Je(this,oa,null);Je(this,on,[]);Je(this,$a,[]);Je(this,Mi,new Set);Je(this,kn,new Set);Je(this,Jn,new Map);Je(this,la,new Set);fn(this,"is_fork",!1);Je(this,pr,!1);Cr===null?Lo=Cr=this:(qe(Cr,fr,this),qe(this,Wi,Cr)),Cr=this}skip_effect(e){B(this,Jn).has(e)||B(this,Jn).set(e,{d:[],m:[]}),B(this,la).delete(e)}unskip_effect(e,t=i=>this.schedule(i)){var i=B(this,Jn).get(e);if(i){B(this,Jn).delete(e);for(var r of i.d)Et(r,Lt),t(r);for(r of i.m)Et(r,Xn),t(r)}B(this,la).add(e)}capture(e,t,i=!1){e.v!==Ut&&!this.previous.has(e)&&this.previous.set(e,e.v),e.f&Ki||(this.current.set(e,[t,i]),Ht==null||Ht.set(e,t)),this.is_fork||(e.v=t)}activate(){je=this}deactivate(){je=null,Ht=null}flush(){try{Io=!0,je=this,ut(this,pt,Ia).call(this)}finally{ou=0,Ml=null,Yr=null,Ws=null,Io=!1,je=null,Ht=null,_r.clear()}}discard(){var e;for(const t of B(this,aa))t(this);B(this,aa).clear();for(const t of this.async_deriveds.values())t.reject(La);ut(this,pt,Ua).call(this),(e=B(this,oa))==null||e.resolve()}register_created_effect(e){B(this,$a).push(e)}increment(e,t){if(qe(this,sa,B(this,sa)+1),e){let i=B(this,yi).get(t)??0;B(this,yi).set(t,i+1)}}decrement(e,t){if(qe(this,sa,B(this,sa)-1),e){let i=B(this,yi).get(t)??0;i===1?B(this,yi).delete(t):B(this,yi).set(t,i-1)}B(this,pr)||(qe(this,pr,!0),gr(()=>{qe(this,pr,!1),this.linked&&this.flush()}))}transfer_effects(e,t){for(const i of e)B(this,Mi).add(i);for(const i of t)B(this,kn).add(i);e.clear(),t.clear()}oncommit(e){B(this,ra).add(e)}ondiscard(e){B(this,aa).add(e)}settled(){return(B(this,oa)??qe(this,oa,Ph())).promise}static ensure(){if(je===null){const e=je=new xo;Io||gr(()=>{B(e,ia)||e.flush()})}return je}apply(){{Ht=null;return}}schedule(e){var r;if(Ml=e,(r=e.b)!=null&&r.is_pending&&e.f&(yr|bo|Dh)&&!(e.f&_a)){e.b.defer_effect(e);return}for(var t=e;t.parent!==null;){t=t.parent;var i=t.f;if(Yr!==null&&t===ot&&(at===null||!(at.f&Gt)))return;if(i&(wi|Ln)){if(!(i&Ft))return;t.f^=Ft}}B(this,on).push(t)}};ia=new WeakMap,Wi=new WeakMap,fr=new WeakMap,ra=new WeakMap,aa=new WeakMap,sa=new WeakMap,yi=new WeakMap,oa=new WeakMap,on=new WeakMap,$a=new WeakMap,Mi=new WeakMap,kn=new WeakMap,Jn=new WeakMap,la=new WeakMap,pr=new WeakMap,pt=new WeakSet,Sl=function(){if(this.is_fork)return!0;for(const i of B(this,yi).keys()){for(var e=i,t=!1;e.parent!==null;){if(B(this,Jn).has(e)){t=!0;break}e=e.parent}if(!t)return!0}return!1},Ia=function(){var l,c,d,f;qe(this,ia,!0),ou++>1e3&&(ut(this,pt,Ua).call(this),h1());for(const u of B(this,Mi))B(this,kn).delete(u),Et(u,Lt),this.schedule(u);for(const u of B(this,kn))Et(u,Xn),this.schedule(u);const e=B(this,on);qe(this,on,[]),this.apply();var t=Yr=[],i=[],r=Ws=[];for(const u of e)try{ut(this,pt,bl).call(this,u,t,i)}catch(h){throw Yh(u),ut(this,pt,Sl).call(this)||this.discard(),h}if(je=null,r.length>0){var a=xo.ensure();for(const u of r)a.schedule(u)}if(Yr=null,Ws=null,ut(this,pt,Sl).call(this)){ut(this,pt,Wr).call(this,i),ut(this,pt,Wr).call(this,t);for(const[u,h]of B(this,Jn))qh(u,h);r.length>0&&ut(l=je,pt,Ia).call(l);return}const s=ut(this,pt,Vh).call(this);if(s){ut(this,pt,Wr).call(this,i),ut(this,pt,Wr).call(this,t),ut(c=s,pt,Wh).call(c,this);return}B(this,Mi).clear(),B(this,kn).clear();for(const u of B(this,ra))u(this);B(this,ra).clear(),za=this,lu(i),lu(t),za=null,(d=B(this,oa))==null||d.resolve();var o=je;if(B(this,sa)===0&&(B(this,on).length===0||o!==null)&&ut(this,pt,Ua).call(this),B(this,on).length>0)if(o!==null){const u=o;B(u,on).push(...B(this,on).filter(h=>!B(u,on).includes(h)))}else o=this;o!==null&&ut(f=o,pt,Ia).call(f)},bl=function(e,t,i){e.f^=Ft;for(var r=e.first;r!==null;){var a=r.f,s=(a&(Ln|wi))!==0,o=s&&(a&Ft)!==0,l=o||(a&en)!==0||B(this,Jn).has(r);if(!l&&r.fn!==null){s?r.f^=Ft:a&yr?t.push(r):is(r)&&(a&Hn&&B(this,kn).add(r),da(r));var c=r.first;if(c!==null){r=c;continue}}for(;r!==null;){var d=r.next;if(d!==null){r=d;break}r=r.parent}}},Vh=function(){for(var e=B(this,Wi);e!==null;){if(!e.is_fork){for(const[t,[,i]]of this.current)if(e.current.has(t)&&!i)return e}e=B(e,Wi)}return null},Wh=function(e){var i;for(const[r,a]of e.current)!this.previous.has(r)&&e.previous.has(r)&&this.previous.set(r,e.previous.get(r)),this.current.set(r,a);for(const[r,a]of e.async_deriveds){const s=this.async_deriveds.get(r);s&&a.promise.then(s.resolve).catch(s.reject)}e.async_deriveds.clear(),this.transfer_effects(B(e,Mi),B(e,kn));const t=r=>{var a=r.reactions;if(a!==null&&!(r.f&Gt&&!(r.f&(Lt|Xn))))for(const l of a){var s=l.f;if(s&Gt)t(l);else{var o=l;s&(Jr|Hn)&&!this.async_deriveds.has(o)&&(B(this,kn).delete(o),Et(o,Lt),this.schedule(o))}}};for(const r of this.current.keys())t(r);this.oncommit(()=>e.discard()),ut(i=e,pt,Ua).call(i),je=this,ut(this,pt,Ia).call(this)},Wr=function(e){for(var t=0;t<e.length;t+=1)Bh(e[t],B(this,Mi),B(this,kn))},u1=function(){var f;for(let u=Lo;u!==null;u=B(u,fr)){var e=u.id<this.id,t=[];for(const[h,[p,v]]of this.current){if(u.current.has(h)){var i=u.current.get(h)[0];if(e&&p!==i)u.current.set(h,[p,v]);else continue}t.push(h)}if(e)for(const[h,p]of this.async_deriveds){const v=u.async_deriveds.get(h);v&&p.promise.then(v.resolve).catch(v.reject)}var r=[...u.current.keys()].filter(h=>!u.current.get(h)[1]);if(!(!B(u,ia)||r.length===0)){var a=r.filter(h=>!this.current.has(h));if(a.length===0)e&&u.discard();else if(t.length>0){if(e)for(const h of B(this,la))u.unskip_effect(h,p=>{var v;p.f&(Hn|Jr)?u.schedule(p):ut(v=u,pt,Wr).call(v,[p])});u.activate();var s=new Set,o=new Map;for(var l of t)Xh(l,a,s,o);o=new Map;var c=[...u.current].filter(([h,p])=>{const v=this.current.get(h);return v?v[0]!==p[0]||v[1]!==p[1]:!0}).map(([h])=>h);if(c.length>0)for(const h of B(this,$a))!(h.f&(Dn|en|eo))&&Tc(h,c,o)&&(h.f&(Jr|Hn)?(Et(h,Lt),u.schedule(h)):B(u,Mi).add(h));if(B(u,on).length>0&&!B(u,pr)){u.apply();for(var d of B(u,on))ut(f=u,pt,bl).call(f,d,[],[]);qe(u,on,[])}u.deactivate()}}}},Ua=function(){if(this.linked){var e=B(this,Wi),t=B(this,fr);e===null?Lo=t:qe(e,fr,t),t===null?Cr=e:qe(t,Wi,e),this.linked=!1}};let Sr=xo;function h1(){try{Uf()}catch(n){Xi(n,Ml)}}let Bn=null;function lu(n){var e=n.length;if(e!==0){for(var t=0;t<e;){var i=n[t++];if(!(i.f&(Dn|en))&&is(i)&&(Bn=new Set,da(i),i.deps===null&&i.first===null&&i.nodes===null&&i.teardown===null&&i.ac===null&&ad(i),(Bn==null?void 0:Bn.size)>0)){_r.clear();for(const r of Bn){if(r.f&(Dn|en))continue;const a=[r];let s=r.parent;for(;s!==null;)Bn.has(s)&&(Bn.delete(s),a.push(s)),s=s.parent;for(let o=a.length-1;o>=0;o--){const l=a[o];l.f&(Dn|en)||da(l)}}Bn.clear()}}Bn=null}}function Xh(n,e,t,i){if(!t.has(n)&&(t.add(n),n.reactions!==null))for(const r of n.reactions){const a=r.f;a&Gt?Xh(r,e,t,i):a&(Jr|Hn)&&!(a&Lt)&&Tc(r,e,i)&&(Et(r,Lt),wc(r))}}function Tc(n,e,t){const i=t.get(n);if(i!==void 0)return i;if(n.deps!==null)for(const r of n.deps){if(Qs.call(e,r))return!0;if(r.f&Gt&&Tc(r,e,t))return t.set(r,!0),!0}return t.set(n,!1),!1}function wc(n){je.schedule(n)}function qh(n,e){if(!(n.f&Ln&&n.f&Ft)){n.f&Lt?e.d.push(n):n.f&Xn&&e.m.push(n),Et(n,Ft);for(var t=n.first;t!==null;)qh(t,e),t=t.next}}function Yh(n){Et(n,Ft);for(var e=n.first;e!==null;)Yh(e),e=e.next}let io=new Set;const _r=new Map;let jh=!1;function br(n,e){var t={f:0,v:n,reactions:null,equals:Ih,rv:0,wv:0};return t}function Nt(n,e){const t=br(n);return ld(t),t}function d1(n,e=!1,t=!0){const i=br(n);return e||(i.equals=Uh),i}function ht(n,e,t=!1){at!==null&&(!Vn||at.f&eo)&&Nh()&&at.f&(Gt|Hn|Jr|eo)&&(ri===null||!ri.has(n))&&Of();let i=t?qi(e):e;return ha(n,i,Ws)}function ha(n,e,t=null){if(!n.equals(e)){_r.set(n,$i?e:n.v);var i=Sr.ensure();if(i.capture(n,e),n.f&Gt){const r=n;n.f&Lt&&Ec(r),Ht===null&&Sc(r)}n.wv=ud(),Kh(n,Lt,t),ot!==null&&ot.f&Ft&&!(ot.f&(Ln|wi))&&(En===null?T1([n]):En.push(n)),!i.is_fork&&io.size>0&&!jh&&f1()}return e}function f1(){jh=!1;for(const n of io){n.f&Ft&&Et(n,Xn);let e;try{e=is(n)}catch{e=!0}e&&da(n)}io.clear()}function Ga(n){ht(n,n.v+1)}function Kh(n,e,t){var i=n.reactions;if(i!==null)for(var r=i.length,a=0;a<r;a++){var s=i[a],o=s.f,l=(o&Lt)===0;if(l&&Et(s,e),o&eo)io.add(s);else if(o&Gt){var c=s;Ht==null||Ht.delete(c),o&Mr||(o&Pn&&(ot===null||!(ot.f&to))&&(s.f|=Mr),Kh(c,Xn,t))}else if(l){var d=s;o&Hn&&Bn!==null&&Bn.add(d),t!==null?t.push(d):wc(d)}}}function qi(n){if(typeof n!="object"||n===null||zs in n)return n;const e=Ch(n);if(e!==Mf&&e!==Sf)return n;var t=new Map,i=Rh(n),r=Nt(0),a=xr,s=o=>{if(xr===a)return o();var l=at,c=xr;In(null),uu(a);var d=o();return In(l),uu(c),d};return i&&t.set("length",Nt(n.length)),new Proxy(n,{defineProperty(o,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&Nf();var d=t.get(l);return d===void 0?s(()=>{var f=Nt(c.value);return t.set(l,f),f}):ht(d,c.value,!0),!0},deleteProperty(o,l){var c=t.get(l);if(c===void 0){if(l in o){const d=s(()=>Nt(Ut));t.set(l,d),Ga(r)}}else ht(c,Ut),Ga(r);return!0},get(o,l,c){var h;if(l===zs)return n;var d=t.get(l),f=l in o;if(d===void 0&&(!f||(h=ka(o,l))!=null&&h.writable)&&(d=s(()=>{var p=qi(f?o[l]:Ut),v=Nt(p);return v}),t.set(l,d)),d!==void 0){var u=$(d);return u===Ut?void 0:u}return Reflect.get(o,l,c)},getOwnPropertyDescriptor(o,l){var c=Reflect.getOwnPropertyDescriptor(o,l);if(c&&"value"in c){var d=t.get(l);d&&(c.value=$(d))}else if(c===void 0){var f=t.get(l),u=f==null?void 0:f.v;if(f!==void 0&&u!==Ut)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return c},has(o,l){var u;if(l===zs)return!0;var c=t.get(l),d=c!==void 0&&c.v!==Ut||Reflect.has(o,l);if(c!==void 0||ot!==null&&(!d||(u=ka(o,l))!=null&&u.writable)){c===void 0&&(c=s(()=>{var h=d?qi(o[l]):Ut,p=Nt(h);return p}),t.set(l,c));var f=$(c);if(f===Ut)return!1}return d},set(o,l,c,d){var E;var f=t.get(l),u=l in o;if(i&&l==="length")for(var h=c;h<f.v;h+=1){var p=t.get(h+"");p!==void 0?ht(p,Ut):h in o&&(p=s(()=>Nt(Ut)),t.set(h+"",p))}if(f===void 0)(!u||(E=ka(o,l))!=null&&E.writable)&&(f=s(()=>Nt(void 0)),ht(f,qi(c)),t.set(l,f));else{u=f.v!==Ut;var v=s(()=>qi(c));ht(f,v)}var g=Reflect.getOwnPropertyDescriptor(o,l);if(g!=null&&g.set&&g.set.call(d,c),!u){if(i&&typeof l=="string"){var m=t.get("length"),M=Number(l);Number.isInteger(M)&&M>=m.v&&ht(m,M+1)}Ga(r)}return!0},ownKeys(o){$(r);var l=Reflect.ownKeys(o).filter(f=>{var u=t.get(f);return u===void 0||u.v!==Ut});for(var[c,d]of t)d.v!==Ut&&!(c in o)&&l.push(c);return l},setPrototypeOf(){Ff()}})}var El,Zh,$h,Jh,Qh;function p1(){if(El===void 0){El=window,Zh=document,$h=/Firefox/.test(navigator.userAgent);var n=Element.prototype,e=Node.prototype,t=Text.prototype;Jh=ka(e,"firstChild").get,Qh=ka(e,"nextSibling").get,su(n)&&(n[Af]=void 0,n[Gs]=null,n[_l]=void 0,n.__e=void 0),su(t)&&(t[Da]=void 0)}}function Zi(n=""){return document.createTextNode(n)}function ro(n){return Jh.call(n)}function ns(n){return Qh.call(n)}function We(n,e){return ro(n)}function us(n,e=!1){{var t=ro(n);return t instanceof Comment&&t.data===""?ns(t):t}}function it(n,e=1,t=!1){let i=n;for(;e--;)i=ns(i);return i}function m1(n){n.textContent=""}function ed(){return!1}function g1(n,e,t){return t?document.createElement(n,{is:t}):document.createElement(n)}function _1(n){ot===null&&(at===null&&If(),Lf()),$i&&Df()}function v1(n,e){var t=e.last;t===null?e.last=e.first=n:(t.next=n,n.prev=t,e.last=n)}function hi(n,e){var t=ot;t!==null&&t.f&en&&(n|=en);var i={ctx:jt,deps:null,nodes:null,f:n|Lt|Pn,first:null,fn:e,last:null,next:null,parent:t,b:t&&t.b,prev:null,teardown:null,wv:0,ac:null};je==null||je.register_created_effect(i);var r=i;if(n&yr)Yr!==null?Yr.push(i):Sr.ensure().schedule(i);else if(e!==null){try{da(i)}catch(s){throw un(i),s}r.deps===null&&r.teardown===null&&r.nodes===null&&r.first===r.last&&!(r.f&va)&&(r=r.first,n&Hn&&n&ca&&r!==null&&(r.f|=ca))}if(r!==null&&(r.parent=t,t!==null&&v1(r,t),at!==null&&at.f&Gt&&!(n&wi))){var a=at;(a.effects??(a.effects=[])).push(r)}return i}function Ac(){return at!==null&&!Vn}function td(n){const e=hi(bo,null);return Et(e,Ft),e.teardown=n,e}function Xs(n){_1();var e=ot.f,t=!at&&(e&Ln)!==0&&jt!==null&&!jt.i;if(t){var i=jt;(i.e??(i.e=[])).push(n)}else return nd(n)}function nd(n){return hi(yr|Tf,n)}function x1(n){Sr.ensure();const e=hi(wi|va,n);return(t={})=>new Promise(i=>{t.outro?vr(e,()=>{un(e),i(void 0)}):(un(e),i(void 0))})}function y1(n){return hi(yr,n)}function M1(n){return hi(Jr|va,n)}function id(n,e=0){return hi(bo|e,n)}function Sn(n,e=[],t=[],i=[]){kh(i,e,t,r=>{hi(bo,()=>{n(...r.map($))})})}function S1(n,e=[],t=[],i=[]){kh(i,e,t,r=>{hi(yr,()=>n(...r.map($)))})}function Eo(n,e=0){var t=hi(Hn|e,n);return t}function xn(n){return hi(Ln|va,n)}function rd(n){var e=n.teardown;if(e!==null){const t=$i,i=at;cu(!0),In(null);try{e.call(null)}finally{cu(t),In(i)}}}function Rc(n,e=!1){var t=n.first;for(n.first=n.last=null;t!==null;){const r=t.ac;r!==null&&ts(()=>{r.abort(es)});var i=t.next;t.f&wi?t.parent=null:un(t,e),t=i}}function b1(n){for(var e=n.first;e!==null;){var t=e.next;e.f&Ln||un(e),e=t}}function un(n,e=!0){var t=!1;(e||n.f&Lh)&&n.nodes!==null&&n.nodes.end!==null&&(E1(n.nodes.start,n.nodes.end),t=!0),n.f|=gl,Rc(n,e&&!t),Xa(n,0);var i=n.nodes&&n.nodes.t;if(i!==null)for(const a of i)a.stop();rd(n),n.f^=gl,n.f|=Dn;var r=n.parent;r!==null&&r.first!==null&&ad(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes=n.ac=n.b=null}function E1(n,e){for(;n!==null;){var t=n===e?null:ns(n);n.remove(),n=t}}function ad(n){var e=n.parent,t=n.prev,i=n.next;t!==null&&(t.next=i),i!==null&&(i.prev=t),e!==null&&(e.first===n&&(e.first=i),e.last===n&&(e.last=t))}function vr(n,e,t=!0){var i=[];sd(n,i,!0);var r=()=>{t&&un(n),e&&e()},a=i.length;if(a>0){var s=()=>--a||r();for(var o of i)o.out(s)}else r()}function sd(n,e,t){if(!(n.f&en)){n.f^=en;var i=n.nodes&&n.nodes.t;if(i!==null)for(const o of i)(o.is_global||t)&&e.push(o);for(var r=n.first;r!==null;){var a=r.next;if(!(r.f&wi)){var s=(r.f&ca)!==0||(r.f&Ln)!==0&&(n.f&Hn)!==0;sd(r,e,s?t:!1)}r=a}}}function ao(n){od(n,!0)}function od(n,e){if(n.f&en){n.f^=en,n.f&Ft||(Et(n,Lt),Sr.ensure().schedule(n));for(var t=n.first;t!==null;){var i=t.next,r=(t.f&ca)!==0||(t.f&Ln)!==0;od(t,r?e:!1),t=i}var a=n.nodes&&n.nodes.t;if(a!==null)for(const s of a)(s.is_global||e)&&s.in()}}function Cc(n,e){if(n.nodes)for(var t=n.nodes.start,i=n.nodes.end;t!==null;){var r=t===i?null:ns(t);e.append(t),t=r}}let qs=!1,$i=!1;function cu(n){$i=n}let at=null,Vn=!1;function In(n){at=n}let ot=null;function li(n){ot=n}let ri=null;function ld(n){at!==null&&(ri??(ri=new Set)).add(n)}let ln=null,gn=0,En=null;function T1(n){En=n}let cd=1,or=0,xr=or;function uu(n){xr=n}function ud(){return++cd}function is(n){var e=n.f;if(e&Lt)return!0;if(e&Gt&&(n.f&=~Mr),e&Xn){for(var t=n.deps,i=t.length,r=0;r<i;r++){var a=t[r];if(is(a)&&Gh(a),a.wv>n.wv)return!0}e&Pn&&Ht===null&&Et(n,Ft)}return!1}function hd(n,e,t=!0){var i=n.reactions;if(i!==null&&!(ri!==null&&ri.has(n)))for(var r=0;r<i.length;r++){var a=i[r];a.f&Gt?hd(a,e,!1):e===a&&(t?Et(a,Lt):a.f&Ft&&Et(a,Xn),wc(a))}}function dd(n){var v;var e=ln,t=gn,i=En,r=at,a=ri,s=jt,o=Vn,l=xr,c=n.f;ln=null,gn=0,En=null,at=c&(Ln|wi)?null:n,ri=null,ua(n.ctx),Vn=!1,xr=++or,n.ac!==null&&(ts(()=>{n.ac.abort(es)}),n.ac=null);try{n.f|=to;var d=n.fn,f=d();n.f|=_a;var u=n.deps,h=je==null?void 0:je.is_fork;if(ln!==null){var p;if(h||Xa(n,gn),u!==null&&gn>0)for(u.length=gn+ln.length,p=0;p<ln.length;p++)u[gn+p]=ln[p];else n.deps=u=ln;if(Ac()&&n.f&Pn)for(p=gn;p<u.length;p++)((v=u[p]).reactions??(v.reactions=[])).push(n)}else!h&&u!==null&&gn<u.length&&(Xa(n,gn),u.length=gn);if(Nh()&&En!==null&&!Vn&&u!==null&&!(n.f&(Gt|Xn|Lt)))for(p=0;p<En.length;p++)hd(En[p],n);if(r!==null&&r!==n){if(or++,r.deps!==null)for(let g=0;g<t;g+=1)r.deps[g].rv=or;if(e!==null)for(const g of e)g.rv=or;En!==null&&(i===null?i=En:i.push(...En))}return n.f&Ki&&(n.f^=Ki),f}catch(g){return Fh(g)}finally{n.f^=to,ln=e,gn=t,En=i,at=r,ri=a,ua(s),Vn=o,xr=l}}function w1(n,e){let t=e.reactions;if(t!==null){var i=vf.call(t,n);if(i!==-1){var r=t.length-1;r===0?t=e.reactions=null:(t[i]=t[r],t.pop())}}if(t===null&&e.f&Gt&&(ln===null||!Qs.call(ln,e))){var a=e;a.f&Pn&&(a.f^=Pn,a.f&=~Mr),a.v!==Ut&&Sc(a),a.ac!==null&&ts(()=>{a.ac.abort(es),a.ac=null,Et(a,Lt)}),l1(a),Xa(a,0)}}function Xa(n,e){var t=n.deps;if(t!==null)for(var i=e;i<t.length;i++)w1(n,t[i])}function da(n){var e=n.f;if(!(e&Dn)){Et(n,Ft);var t=ot,i=qs;ot=n,qs=(e&(Ln|wi))===0;try{e&(Hn|Dh)?b1(n):Rc(n),rd(n);var r=dd(n);n.teardown=typeof r=="function"?r:null,n.wv=cd;var a;Ah&&jf&&n.f&Lt&&n.deps}finally{qs=i,ot=t}}}function $(n){var e=n.f,t=(e&Gt)!==0;if(at!==null&&!Vn){var i=ot!==null&&(ot.f&Dn)!==0;if(!i&&(ri===null||!ri.has(n))){var r=at.deps;if(at.f&to)n.rv<or&&(n.rv=or,ln===null&&r!==null&&r[gn]===n?gn++:ln===null?ln=[n]:ln.push(n));else{at.deps??(at.deps=[]),Qs.call(at.deps,n)||at.deps.push(n);var a=n.reactions;a===null?n.reactions=[at]:Qs.call(a,at)||a.push(at)}}}if($i&&_r.has(n))return _r.get(n);if(t){var s=n;if($i){var o=s.v;return(!(s.f&Ft)&&s.reactions!==null||pd(s))&&(o=Ec(s)),_r.set(s,o),o}var l=(s.f&Pn)===0&&!Vn&&at!==null&&(qs||(at.f&Pn)!==0),c=(s.f&_a)===0;is(s)&&(l&&(s.f|=Pn),Gh(s)),l&&!c&&(Hh(s),fd(s))}if(Ht!=null&&Ht.has(n))return Ht.get(n);if(n.f&Ki)throw n.v;return n.v}function fd(n){if(n.f|=Pn,n.deps!==null)for(const e of n.deps)(e.reactions??(e.reactions=[])).push(n),e.f&Gt&&!(e.f&Pn)&&(Hh(e),fd(e))}function pd(n){if(n.v===Ut)return!0;if(n.deps===null)return!1;for(const e of n.deps)if(_r.has(e)||e.f&Gt&&pd(e))return!0;return!1}function Pc(n){var e=Vn;try{return Vn=!0,n()}finally{Vn=e}}const A1=["touchstart","touchmove"];function R1(n){return A1.includes(n)}const lr=Symbol("events"),md=new Set,Tl=new Set;function C1(n,e,t,i={}){function r(a){if(i.capture||wl.call(e,a),!a.cancelBubble)return ts(()=>t==null?void 0:t.call(this,a))}return n.startsWith("pointer")||n.startsWith("touch")||n==="wheel"?gr(()=>{e.addEventListener(n,r,i)}):e.addEventListener(n,r,i),r}function P1(n,e,t,i,r){var a={capture:i,passive:r},s=C1(n,e,t,a);(e===document.body||e===window||e===document||e instanceof HTMLMediaElement)&&td(()=>{e.removeEventListener(n,s,a)})}function Ii(n,e,t){(e[lr]??(e[lr]={}))[n]=t}function D1(n){for(var e=0;e<n.length;e++)md.add(n[e]);for(var t of Tl)t(n)}let hu=null;function wl(n){var v,g;var e=this,t=e.ownerDocument,i=n.type,r=((v=n.composedPath)==null?void 0:v.call(n))||[],a=r[0]||n.target;hu=n;var s=0,o=hu===n&&n[lr];if(o){var l=r.indexOf(o);if(l!==-1&&(e===document||e===window)){n[lr]=e;return}var c=r.indexOf(e);if(c===-1)return;l<=c&&(s=l)}if(a=r[s]||n.target,a!==e){xf(n,"currentTarget",{configurable:!0,get(){return a||t}});var d=at,f=ot;In(null),li(null);try{for(var u,h=[];a!==null&&a!==e;){try{var p=(g=a[lr])==null?void 0:g[i];p!=null&&(!a.disabled||n.target===a)&&p.call(a,n)}catch(m){u?h.push(m):u=m}if(n.cancelBubble)break;s++,a=s<r.length?r[s]:null}if(u){for(let m of h)queueMicrotask(()=>{throw m});throw u}}finally{n[lr]=e,delete n.currentTarget,In(d),li(f)}}}var Th;const Uo=((Th=globalThis==null?void 0:globalThis.window)==null?void 0:Th.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:n=>n});function L1(n){return(Uo==null?void 0:Uo.createHTML(n))??n}function I1(n){var e=g1("template");return e.innerHTML=L1(n.replaceAll("<!>","<!---->")),e.content}function du(n,e){var t=ot;t.nodes===null&&(t.nodes={start:n,end:e,a:null,t:null})}function nn(n,e){var t=(e&Hf)!==0,i=(e&Vf)!==0,r,a=!n.startsWith("<!>");return()=>{r===void 0&&(r=I1(a?n:"<!>"+n),t||(r=ro(r)));var s=i||$h?document.importNode(r,!0):r.cloneNode(!0);if(t){var o=ro(s),l=s.lastChild;du(o,l)}else du(s,s);return s}}function Zt(n,e){n!==null&&n.before(e)}function vt(n,e){var t=e==null?"":typeof e=="object"?`${e}`:e;t!==(n[Da]??(n[Da]=n.nodeValue))&&(n[Da]=t,n.nodeValue=`${t}`)}function U1(n,e){return N1(n,e)}const hs=new Map;function N1(n,{target:e,anchor:t,props:i={},events:r,context:a,intro:s=!0,transformError:o}){p1();var l=void 0,c=x1(()=>{var d=t??e.appendChild(Zi());Qf(d,{pending:()=>{}},h=>{yc({});var p=jt;a&&(p.c=a),r&&(i.$$events=r),l=n(h,i)||{},Mc()},o);var f=new Set,u=h=>{for(var p=0;p<h.length;p++){var v=h[p];if(!f.has(v)){f.add(v);var g=R1(v);for(const E of[e,document]){var m=hs.get(E);m===void 0&&(m=new Map,hs.set(E,m));var M=m.get(v);M===void 0?(E.addEventListener(v,wl,{passive:g}),m.set(v,1)):m.set(v,M+1)}}}};return u(So(md)),Tl.add(u),()=>{var g;for(var h of f)for(const m of[e,document]){var p=hs.get(m),v=p.get(h);--v==0?(m.removeEventListener(h,wl),p.delete(h),p.size===0&&hs.delete(m)):p.set(h,v)}Tl.delete(u),d!==t&&((g=d.parentNode)==null||g.removeChild(d))}});return F1.set(l,c),l}let F1=new WeakMap;var zn,Qn,vn,mr,Ja,Qa,yo;class O1{constructor(e,t=!0){fn(this,"anchor");Je(this,zn,new Map);Je(this,Qn,new Map);Je(this,vn,new Map);Je(this,mr,new Set);Je(this,Ja,!0);Je(this,Qa,e=>{if(B(this,zn).has(e)){var t=B(this,zn).get(e),i=B(this,Qn).get(t);if(i)ao(i),B(this,mr).delete(t);else{var r=B(this,vn).get(t);r&&(ao(r.effect),B(this,Qn).set(t,r.effect),B(this,vn).delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),i=r.effect)}for(const[a,s]of B(this,zn)){if(B(this,zn).delete(a),a===e)break;const o=B(this,vn).get(s);o&&(un(o.effect),B(this,vn).delete(s))}for(const[a,s]of B(this,Qn)){if(a===t||B(this,mr).has(a))continue;const o=()=>{if(Array.from(B(this,zn).values()).includes(a)){var c=document.createDocumentFragment();Cc(s,c),c.append(Zi()),B(this,vn).set(a,{effect:s,fragment:c})}else un(s);B(this,mr).delete(a),B(this,Qn).delete(a)};B(this,Ja)||!i?(B(this,mr).add(a),vr(s,o,!1)):o()}}});Je(this,yo,e=>{B(this,zn).delete(e);const t=Array.from(B(this,zn).values());for(const[i,r]of B(this,vn))t.includes(i)||(un(r.effect),B(this,vn).delete(i))});this.anchor=e,qe(this,Ja,t)}ensure(e,t){var i=je,r=ed();if(t&&!B(this,Qn).has(e)&&!B(this,vn).has(e))if(r){var a=document.createDocumentFragment(),s=Zi();a.append(s),B(this,vn).set(e,{effect:xn(()=>t(s)),fragment:a})}else B(this,Qn).set(e,xn(()=>t(this.anchor)));if(B(this,zn).set(i,e),r){for(const[o,l]of B(this,Qn))o===e?i.unskip_effect(l):i.skip_effect(l);for(const[o,l]of B(this,vn))o===e?i.unskip_effect(l.effect):i.skip_effect(l.effect);i.oncommit(B(this,Qa)),i.ondiscard(B(this,yo))}else B(this,Qa).call(this,i)}}zn=new WeakMap,Qn=new WeakMap,vn=new WeakMap,mr=new WeakMap,Ja=new WeakMap,Qa=new WeakMap,yo=new WeakMap;function Kn(n,e,t=!1){var i=new O1(n),r=t?ca:0;function a(s,o){i.ensure(s,o)}Eo(()=>{var s=!1;e((o,l=0)=>{s=!0,a(l,o)}),s||a(-1,null)},r)}function B1(n,e,t){for(var i=[],r=e.length,a,s=e.length,o=0;o<r;o++){let f=e[o];vr(f,()=>{if(a){if(a.pending.delete(f),a.done.add(f),a.pending.size===0){var u=n.outrogroups;Al(n,So(a.done)),u.delete(a),u.size===0&&(n.outrogroups=null)}}else s-=1},!1)}if(s===0){var l=i.length===0&&t!==null;if(l){var c=t,d=c.parentNode;m1(d),d.append(c),n.items.clear()}Al(n,e,!l)}else a={pending:new Set(e),done:new Set},(n.outrogroups??(n.outrogroups=new Set)).add(a)}function Al(n,e,t=!0){var i;if(n.pending.size>0){i=new Set;for(const s of n.pending.values())for(const o of s)i.add(n.items.get(o).e)}for(var r=0;r<e.length;r++){var a=e[r];if(i!=null&&i.has(a)){a.f|=Si;const s=document.createDocumentFragment();Cc(a,s)}else un(e[r],t)}}var fu;function k1(n,e,t,i,r,a=null){var s=n,o=new Map;{var l=n;s=l.appendChild(Zi())}var c=null,d=s1(()=>{var M=t();return Rh(M)?M:M==null?[]:So(M)}),f,u=new Map,h=!0;function p(M){m.effect.f&Dn||(m.pending.delete(M),m.fallback=c,z1(m,f,s,e,i),c!==null&&(f.length===0?c.f&Si?(c.f^=Si,Na(c,null,s)):ao(c):vr(c,()=>{c=null})))}function v(M){m.pending.delete(M)}var g=Eo(()=>{f=$(d);for(var M=f.length,E=new Set,b=je,P=ed(),w=0;w<M;w+=1){var C=f[w],x=i(C,w),T=h?null:o.get(x);T?(T.v&&ha(T.v,C),T.i&&ha(T.i,w),P&&b.unskip_effect(T.e)):(T=G1(o,h?s:fu??(fu=Zi()),C,x,w,r,e,t),h||(T.e.f|=Si),o.set(x,T)),E.add(x)}if(M===0&&a&&!c&&(h?c=xn(()=>a(s)):(c=xn(()=>a(fu??(fu=Zi()))),c.f|=Si)),M>E.size&&Pf(),!h)if(u.set(b,E),P){for(const[L,A]of o)E.has(L)||b.skip_effect(A.e);b.oncommit(p),b.ondiscard(v)}else p(b);$(d)}),m={effect:g,items:o,pending:u,outrogroups:null,fallback:c};h=!1}function Sa(n){for(;n!==null&&!(n.f&Ln);)n=n.next;return n}function z1(n,e,t,i,r){var x;var a=e.length,s=n.items,o=Sa(n.effect.first),l,c=null,d=[],f=[],u,h,p,v;for(v=0;v<a;v+=1){if(u=e[v],h=r(u,v),p=s.get(h).e,n.outrogroups!==null)for(const T of n.outrogroups)T.pending.delete(p),T.done.delete(p);if(p.f&en&&ao(p),p.f&Si)if(p.f^=Si,p===o)Na(p,null,t);else{var g=c?c.next:o;p===n.effect.last&&(n.effect.last=p.prev),p.prev&&(p.prev.next=p.next),p.next&&(p.next.prev=p.prev),Ui(n,c,p),Ui(n,p,g),Na(p,g,t),c=p,d=[],f=[],o=Sa(c.next);continue}if(p!==o){if(l!==void 0&&l.has(p)){if(d.length<f.length){var m=f[0],M;c=m.prev;var E=d[0],b=d[d.length-1];for(M=0;M<d.length;M+=1)Na(d[M],m,t);for(M=0;M<f.length;M+=1)l.delete(f[M]);Ui(n,E.prev,b.next),Ui(n,c,E),Ui(n,b,m),o=m,c=b,v-=1,d=[],f=[]}else l.delete(p),Na(p,o,t),Ui(n,p.prev,p.next),Ui(n,p,c===null?n.effect.first:c.next),Ui(n,c,p),c=p;continue}for(d=[],f=[];o!==null&&o!==p;)(l??(l=new Set)).add(o),f.push(o),o=Sa(o.next);if(o===null)continue}p.f&Si||d.push(p),c=p,o=Sa(p.next)}if(n.outrogroups!==null){for(const T of n.outrogroups)T.pending.size===0&&(Al(n,So(T.done)),(x=n.outrogroups)==null||x.delete(T));n.outrogroups.size===0&&(n.outrogroups=null)}if(o!==null||l!==void 0){var P=[];if(l!==void 0)for(p of l)p.f&en||P.push(p);for(;o!==null;)!(o.f&en)&&o!==n.fallback&&P.push(o),o=Sa(o.next);var w=P.length;if(w>0){var C=a===0?t:null;B1(n,P,C)}}}function G1(n,e,t,i,r,a,s,o){var l=s&kf?s&Gf?br(t):d1(t,!1,!1):null,c=s&zf?br(r):null;return{v:l,i:c,e:xn(()=>(a(e,l??t,c??r,o),()=>{n.delete(i)}))}}function Na(n,e,t){if(n.nodes)for(var i=n.nodes.start,r=n.nodes.end,a=e&&!(e.f&Si)?e.nodes.start:t;i!==null;){var s=ns(i);if(a.before(i),i===r)return;i=s}}function Ui(n,e,t){e===null?n.effect.first=t:e.next=t,t===null?n.effect.last=e:t.prev=e}function H1(n,e){var t;t=document.head.appendChild(Zi());try{Eo(()=>{var i=xn(()=>e(t));i.f|=Lh})}finally{}}function V1(n,e){return n==null?null:String(n)}function W1(n,e,t,i){var r=n[_l];if(r!==e){var a=V1(e);a==null?n.removeAttribute("style"):n.style.cssText=a,n[_l]=e}return i}const X1=Symbol("is custom element"),q1=Symbol("is html");function Un(n,e,t,i){var r=Y1(n);r[e]!==(r[e]=t)&&(e==="loading"&&(n[wf]=t),t==null?n.removeAttribute(e):typeof t!="string"&&j1(n).includes(e)?n[e]=t:n.setAttribute(e,t))}function Y1(n){return n[Gs]??(n[Gs]={[X1]:n.nodeName.includes("-"),[q1]:n.namespaceURI===Wf})}var pu=new Map;function j1(n){var e=n.getAttribute("is")||n.nodeName,t=pu.get(e);if(t)return t;pu.set(e,t=[]);for(var i,r=n,a=Element.prototype;a!==r;){i=yf(r);for(var s in i)i[s].set&&s!=="innerHTML"&&s!=="textContent"&&s!=="innerText"&&t.push(s);r=Ch(r)}return t}function No(n,e){return n===e||(n==null?void 0:n[zs])===e}function K1(n={},e,t,i){var r=jt.r,a=ot;return y1(()=>{var s,o;return id(()=>{s=o,o=[],Pc(()=>{No(t(...o),n)||(e(n,...o),s&&No(t(...s),n)&&e(null,...s))})}),()=>{let l=a;for(;l!==r&&l.parent!==null&&l.parent.f&gl;)l=l.parent;const c=()=>{o&&No(t(...o),n)&&e(null,...o)},d=l.teardown;l.teardown=()=>{c(),d==null||d()}}}),n}function ba(n,e,t,i){var r=i,a=!0,s=()=>(a&&(a=!1,r=i),r),o;o=n[e],o===void 0&&i!==void 0&&(o=s());var l;return l=()=>{var c=n[e];return c===void 0?s():(a=!0,c)},l}function gd(n){jt===null&&Rf(),Xs(()=>{const e=Pc(n);if(typeof e=="function")return e})}const Z1="5";var wh;typeof window<"u"&&((wh=window.__svelte??(window.__svelte={})).v??(wh.v=new Set)).add(Z1);const so=[{id:"pizza",name:"Pizza Margherita",emoji:"🍕",place:"Naples, Italy",country:"Italy",lat:40.85,lon:14.27,fact:"Legend says it was made in 1889 for Queen Margherita, with tomato, mozzarella, and basil to match the Italian flag."},{id:"sushi",name:"Sushi",emoji:"🍣",place:"Tokyo, Japan",country:"Japan",lat:35.68,lon:139.69,fact:"Modern nigiri sushi began as fast street food in 1800s Edo — the old name for Tokyo."},{id:"tacos",name:"Tacos al Pastor",emoji:"🌮",place:"Mexico City, Mexico",country:"Mexico",lat:19.43,lon:-99.13,fact:"It was born when Lebanese immigrants brought spit-roasted meat to Mexico and locals swapped in pork and pineapple."},{id:"croissant",name:"Croissant",emoji:"🥐",place:"Paris, France",country:"France",lat:48.86,lon:2.35,fact:"Paris made it famous, but its crescent-shaped ancestor, the kipferl, actually came from Vienna."},{id:"paella",name:"Paella",emoji:"🥘",place:"Valencia, Spain",country:"Spain",lat:39.47,lon:-.38,fact:"Farmers near Valencia's rice fields cooked it over orange-wood fires; 'paella' is the name of the wide pan."},{id:"poutine",name:"Poutine",emoji:"🍟",place:"Quebec, Canada",country:"Canada",lat:46.81,lon:-71.21,fact:"Fries, cheese curds, and gravy — invented in rural Quebec in the 1950s, where fresh curds famously squeak."},{id:"pierogi",name:"Pierogi",emoji:"🥟",place:"Kraków, Poland",country:"Poland",lat:50.06,lon:19.94,fact:"Poland loves these stuffed dumplings so much there's an annual pierogi festival in Kraków every August."},{id:"baklava",name:"Baklava",emoji:"🍯",place:"Istanbul, Türkiye",country:"Turkey",lat:41.01,lon:28.98,fact:"Paper-thin pastry layered with nuts and honey was perfected in the Ottoman palace kitchens of Istanbul."},{id:"kimchi",name:"Kimchi",emoji:"🥬",place:"Seoul, South Korea",country:"South Korea",lat:37.57,lon:126.98,fact:"Koreans have fermented spicy cabbage for over a thousand years — many families still make a giant winter batch together."},{id:"butter-chicken",name:"Butter Chicken",emoji:"🍛",place:"Delhi, India",country:"India",lat:28.61,lon:77.21,fact:"A Delhi restaurant invented it in the 1950s to rescue leftover tandoori chicken with a creamy tomato sauce."},{id:"pho",name:"Pho",emoji:"🍲",place:"Hanoi, Vietnam",country:"Vietnam",lat:21.03,lon:105.85,fact:"This fragrant noodle soup started as a breakfast sold by street vendors in early-1900s Hanoi."},{id:"ceviche",name:"Ceviche",emoji:"🐟",place:"Lima, Peru",country:"Peru",lat:-12.05,lon:-77.04,fact:"Fresh fish 'cooked' in citrus juice — Peru loves it so much it has a national Ceviche Day."},{id:"feijoada",name:"Feijoada",emoji:"🫘",place:"Rio de Janeiro, Brazil",country:"Brazil",lat:-22.91,lon:-43.17,fact:"Brazil's beloved black-bean stew is a weekend ritual, traditionally eaten slowly over a long lunch."},{id:"asado",name:"Asado",emoji:"🥩",place:"Buenos Aires, Argentina",country:"Argentina",lat:-34.6,lon:-58.38,fact:"Argentina's slow barbecue tradition comes from the gauchos — cowboys who grilled over open embers on the pampas."},{id:"jollof",name:"Jollof Rice",emoji:"🍚",place:"Saint-Louis, Senegal",country:"Senegal",lat:16.03,lon:-16.49,fact:"It traces back to the Wolof people of Senegal — though Ghana and Nigeria still argue over who makes it best."},{id:"tagine",name:"Tagine",emoji:"🍢",place:"Marrakesh, Morocco",country:"Morocco",lat:31.63,lon:-7.99,fact:"Named after its cone-lidded clay pot, which traps steam so the stew cooks with barely any water — handy at the desert's edge."},{id:"koshari",name:"Koshari",emoji:"🍝",place:"Cairo, Egypt",country:"Egypt",lat:30.04,lon:31.24,fact:"Egypt's favorite street food piles rice, lentils, pasta, and crispy onions into one glorious bowl."},{id:"injera",name:"Injera",emoji:"🫓",place:"Addis Ababa, Ethiopia",country:"Ethiopia",lat:9.01,lon:38.75,fact:"This spongy sourdough flatbread is plate, fork, and food in one — you tear it to scoop up stews."},{id:"bunny-chow",name:"Bunny Chow",emoji:"🍞",place:"Durban, South Africa",country:"South Africa",lat:-29.86,lon:31.03,fact:"No bunnies involved — it's curry served inside a hollowed-out loaf of bread, invented in Durban."},{id:"fish-and-chips",name:"Fish and Chips",emoji:"🐠",place:"London, England",country:"United Kingdom",lat:51.51,lon:-.13,fact:"Britain loved it so much that during World War II it was one of the few foods never rationed."},{id:"haggis",name:"Haggis",emoji:"🥔",place:"Edinburgh, Scotland",country:"United Kingdom",lat:55.95,lon:-3.19,fact:"Scotland's national dish gets its own holiday — on Burns Night it's carried in while bagpipes play."},{id:"tikka-masala",name:"Chicken Tikka Masala",emoji:"🍅",place:"Glasgow, Scotland",country:"United Kingdom",lat:55.86,lon:-4.25,fact:"Surprise! The story goes that a chef in Glasgow invented it when a customer wanted sauce on his tandoori chicken."},{id:"meatballs",name:"Köttbullar",emoji:"🧆",place:"Stockholm, Sweden",country:"Sweden",lat:59.33,lon:18.07,fact:"In 2018 Sweden's official account admitted the recipe likely came home with a king who visited Türkiye."},{id:"smorrebrod",name:"Smørrebrød",emoji:"🥪",place:"Copenhagen, Denmark",country:"Denmark",lat:55.68,lon:12.57,fact:"Denmark's open-faced sandwich is eaten with a knife and fork — never with your hands."},{id:"fondue",name:"Cheese Fondue",emoji:"🧀",place:"The Alps, Switzerland",country:"Switzerland",lat:46.8,lon:8.23,fact:"Swiss mountain villagers melted their hard winter cheese to make it easier to eat — and dipping bread became a national sport."},{id:"schnitzel",name:"Schnitzel",emoji:"🍖",place:"Vienna, Austria",country:"Austria",lat:48.21,lon:16.37,fact:"'Wiener' means 'from Vienna' — by law in Austria, a true one must be made of veal."},{id:"pretzel",name:"Pretzel",emoji:"🥨",place:"Munich, Germany",country:"Germany",lat:48.14,lon:11.58,fact:"Legend credits monks who twisted dough to look like arms folded in prayer; Bavaria made it an icon."},{id:"stroopwafel",name:"Stroopwafel",emoji:"🧇",place:"Gouda, Netherlands",country:"Netherlands",lat:52.01,lon:4.71,fact:"Invented in Gouda — the trick is resting it on top of a hot drink so the caramel middle goes gooey."},{id:"moussaka",name:"Moussaka",emoji:"🍆",place:"Athens, Greece",country:"Greece",lat:37.98,lon:23.73,fact:"The layered eggplant bake got its famous creamy top in the 1920s from Greek chef Nikolaos Tselementes."},{id:"borscht",name:"Borscht",emoji:"🍜",place:"Kyiv, Ukraine",country:"Ukraine",lat:50.45,lon:30.52,fact:"Ukraine's beet soup is so treasured that UNESCO added its cooking culture to the world heritage list."},{id:"goulash",name:"Goulash",emoji:"🐂",place:"Budapest, Hungary",country:"Hungary",lat:47.5,lon:19.04,fact:"It began as a herdsman's kettle stew on the Hungarian plains — 'gulyás' literally means cowboy."},{id:"pastel-de-nata",name:"Pastel de Nata",emoji:"🥧",place:"Lisbon, Portugal",country:"Portugal",lat:38.72,lon:-9.14,fact:"Monks in Lisbon invented these custard tarts, and the original 1837 bakery still keeps its recipe secret."},{id:"skyr",name:"Skyr",emoji:"🥛",place:"Reykjavík, Iceland",country:"Iceland",lat:64.15,lon:-21.94,fact:"Vikings brought this thick, creamy dairy to Iceland over 1,000 years ago — it's technically a soft cheese."},{id:"shakshuka",name:"Shakshuka",emoji:"🍳",place:"Tunis, Tunisia",country:"Tunisia",lat:36.81,lon:10.18,fact:"Eggs poached in spiced tomato sauce — the name comes from North African Arabic for 'all mixed up.'"},{id:"nyama-choma",name:"Nyama Choma",emoji:"🍖",place:"Nairobi, Kenya",country:"Kenya",lat:-1.29,lon:36.82,fact:"Kenya's favorite grilled meat is a social event — it's shared straight off the cutting board with friends."},{id:"piri-piri",name:"Piri-Piri Chicken",emoji:"🌶️",place:"Maputo, Mozambique",country:"Mozambique",lat:-25.97,lon:32.57,fact:"It was born where Portuguese sailors met Mozambique's fiery bird's-eye chili — 'piri-piri' means pepper-pepper."},{id:"fufu",name:"Fufu",emoji:"🍠",place:"Accra, Ghana",country:"Ghana",lat:5.6,lon:-.19,fact:"Pounded cassava and plantain, stretched like dough — you pinch off a piece and scoop soup with it."},{id:"poke",name:"Poke",emoji:"🐡",place:"Honolulu, Hawaii",country:"United States of America",lat:21.31,lon:-157.86,fact:"Hawaiian fishers seasoned fresh-caught fish right on the boat — 'poke' means 'to slice' in Hawaiian."},{id:"texas-bbq",name:"Smoked Brisket",emoji:"🤠",place:"Austin, Texas, USA",country:"United States of America",lat:30.27,lon:-97.74,fact:"Central Texas pitmasters smoke brisket for up to 18 hours — the best joints sell out by lunchtime."},{id:"key-lime-pie",name:"Key Lime Pie",emoji:"🥧",place:"Key West, Florida, USA",country:"United States of America",lat:24.56,lon:-81.78,fact:"It's named for the tiny, extra-tart limes that grow in the Florida Keys — and it's Florida's official state pie."},{id:"jerk-chicken",name:"Jerk Chicken",emoji:"🔥",place:"Kingston, Jamaica",country:"Jamaica",lat:17.97,lon:-76.79,fact:"The smoky-spicy 'jerk' technique was created by Jamaica's Maroons, who cooked over pimento wood."},{id:"mole",name:"Mole",emoji:"🍫",place:"Puebla, Mexico",country:"Mexico",lat:19.04,lon:-98.2,fact:"This rich sauce can have more than 20 ingredients — including chocolate and chiles together."},{id:"ropa-vieja",name:"Ropa Vieja",emoji:"🥘",place:"Havana, Cuba",country:"Cuba",lat:23.11,lon:-82.37,fact:"The name means 'old clothes' — the shredded beef is supposed to look like torn-up rags. Yum?"},{id:"pupusa",name:"Pupusas",emoji:"🫓",place:"San Salvador, El Salvador",country:"El Salvador",lat:13.69,lon:-89.22,fact:"El Salvador's stuffed corn cakes are so beloved there's a national Pupusa Day every November."},{id:"arepa",name:"Arepas",emoji:"🌽",place:"Caracas, Venezuela",country:"Venezuela",lat:10.48,lon:-66.9,fact:"These grilled corn pockets have been made for thousands of years — Venezuela and Colombia both call them their own."},{id:"empanada",name:"Empanadas",emoji:"🥟",place:"Salta, Argentina",country:"Argentina",lat:-24.79,lon:-65.41,fact:"The idea sailed over from Galicia in Spain, but Argentina's provinces each bake their own proud version."},{id:"gelato",name:"Gelato",emoji:"🍨",place:"Florence, Italy",country:"Italy",lat:43.77,lon:11.26,fact:"Renaissance Florence gets the credit — an architect named Buontalenti wowed the Medici court with it."},{id:"crepes",name:"Crêpes",emoji:"🥞",place:"Brittany, France",country:"France",lat:48.11,lon:-1.68,fact:"They come from Brittany, where buckwheat crêpes are savory and there's even a holiday for flipping them."},{id:"churros",name:"Churros",emoji:"🍩",place:"Madrid, Spain",country:"Spain",lat:40.42,lon:-3.7,fact:"In Madrid the classic move is dunking them in thick hot chocolate — sometimes for breakfast."},{id:"ramen",name:"Tonkotsu Ramen",emoji:"🍥",place:"Fukuoka, Japan",country:"Japan",lat:33.59,lon:130.4,fact:"Fukuoka's creamy pork-bone ramen simmers for many hours — the city has entire streets of ramen stalls."},{id:"dim-sum",name:"Dim Sum",emoji:"🥢",place:"Guangzhou, China",country:"China",lat:23.13,lon:113.26,fact:"It grew out of Guangzhou's tea houses, where travelers snacked on little baskets of dumplings with their tea."},{id:"laksa",name:"Laksa",emoji:"🦐",place:"Singapore",country:"Singapore",lat:1.35,lon:103.82,fact:"This spicy coconut noodle soup was born where Chinese and Malay cooking met along the old trade routes."},{id:"nasi-goreng",name:"Nasi Goreng",emoji:"🍛",place:"Jakarta, Indonesia",country:"Indonesia",lat:-6.21,lon:106.85,fact:"Indonesia's 'fried rice' is a genius way to use yesterday's rice — many eat it for breakfast with a fried egg on top."},{id:"adobo",name:"Chicken Adobo",emoji:"🍗",place:"Manila, Philippines",country:"Philippines",lat:14.6,lon:120.98,fact:"Filipinos were braising meat in vinegar and soy long before the Spanish arrived and gave it the name adobo."},{id:"momo",name:"Momos",emoji:"🏔️",place:"Kathmandu, Nepal",country:"Nepal",lat:27.72,lon:85.32,fact:"These Himalayan dumplings traveled the mountain passes with Tibetan and Newari traders — now they're Nepal's favorite snack."},{id:"biryani",name:"Biryani",emoji:"🍚",place:"Hyderabad, India",country:"India",lat:17.39,lon:78.49,fact:"Hyderabad's famous version cooks the rice and meat together sealed under a dough lid so no steam escapes."},{id:"xiaolongbao",name:"Xiaolongbao",emoji:"🥟",place:"Shanghai, China",country:"China",lat:31.23,lon:121.47,fact:"These 'soup dumplings' hide hot broth inside — the secret is jellied stock that melts as they steam."},{id:"plov",name:"Plov",emoji:"🥕",place:"Tashkent, Uzbekistan",country:"Uzbekistan",lat:41.3,lon:69.24,fact:"Uzbekistan's rice feast is cooked by masters in giant pots called kazans — one pot can feed hundreds."},{id:"khachapuri",name:"Khachapuri",emoji:"⛵",place:"Tbilisi, Georgia",country:"Georgia",lat:41.72,lon:44.79,fact:"Georgia's cheese bread comes boat-shaped with an egg on top — you stir it all together and tear off the crust to dip."},{id:"tahdig",name:"Tahdig",emoji:"🍚",place:"Tehran, Iran",country:"Iran",lat:35.69,lon:51.39,fact:"Persian cooks compete over this golden crispy rice from the bottom of the pot — the name means 'bottom of the pot.'"},{id:"kabsa",name:"Kabsa",emoji:"🍗",place:"Riyadh, Saudi Arabia",country:"Saudi Arabia",lat:24.71,lon:46.68,fact:"Saudi Arabia's spiced rice platter is made for sharing — everyone gathers around one big dish."},{id:"mansaf",name:"Mansaf",emoji:"🐑",place:"Amman, Jordan",country:"Jordan",lat:31.95,lon:35.93,fact:"Jordan's national dish uses a tangy dried-yogurt sauce called jameed, and it's traditionally eaten with the right hand."},{id:"pelmeni",name:"Pelmeni",emoji:"❄️",place:"Ural Mountains, Russia",country:"Russia",lat:56.84,lon:60.61,fact:"Siberian families made these little dumplings by the hundreds and froze them outside in the snow."},{id:"banh-mi",name:"Bánh Mì",emoji:"🥖",place:"Ho Chi Minh City, Vietnam",country:"Vietnam",lat:10.82,lon:106.63,fact:"It mixes a French baguette with Vietnamese fillings — a mashup from when France occupied Vietnam."},{id:"char-kway-teow",name:"Char Kway Teow",emoji:"🍤",place:"Penang, Malaysia",country:"Malaysia",lat:5.42,lon:100.33,fact:"Penang's smoky fried noodles get their flavor from 'wok hei' — the breath of a blazing-hot wok."},{id:"pavlova",name:"Pavlova",emoji:"🍓",place:"Wellington, New Zealand",country:"New Zealand",lat:-41.29,lon:174.78,fact:"Named for a visiting ballerina — New Zealand and Australia have argued for a century over who invented it."},{id:"meat-pie",name:"Meat Pie",emoji:"🥧",place:"Sydney, Australia",country:"Australia",lat:-33.87,lon:151.21,fact:"Australians eat about 270 million of these hand-sized pies a year — it's the classic footy-stadium snack."},{id:"lamington",name:"Lamingtons",emoji:"🍰",place:"Brisbane, Australia",country:"Australia",lat:-27.47,lon:153.03,fact:"Sponge cake dipped in chocolate and coconut, supposedly named after a Queensland governor, Lord Lamington."},{id:"kokoda",name:"Kokoda",emoji:"🥥",place:"Suva, Fiji",country:"Fiji",lat:-18.14,lon:178.44,fact:"Fiji's answer to ceviche — fresh fish cured in lime and served swimming in coconut cream."},{id:"tom-yum",name:"Tom Yum Goong",place:"Bangkok, Thailand",country:"Thailand",lat:13.76,lon:100.5,fact:"Thailand's hot-and-sour shrimp soup balances four flavors at once — spicy, sour, salty, and sweet — with lemongrass and lime leaf."},{id:"som-tam",name:"Som Tam",place:"Isaan, Thailand",country:"Thailand",lat:16.43,lon:102.84,fact:"Green papaya salad from Thailand's northeast, pounded to order in a clay mortar — you can hear it being made from down the street."},{id:"khao-soi",name:"Khao Soi",place:"Chiang Mai, Thailand",country:"Thailand",lat:18.79,lon:98.98,fact:"Northern Thailand's curry noodle soup tops soft noodles with a crunchy nest of the same noodles, fried."},{id:"bun-cha",name:"Bún Chả",place:"Hanoi, Vietnam",country:"Vietnam",lat:21.03,lon:105.85,fact:"Hanoi's grilled-pork noodle lunch got world-famous when Anthony Bourdain shared a bowl with President Obama on plastic stools."},{id:"rendang",name:"Rendang",place:"Padang, Indonesia",country:"Indonesia",lat:-.95,lon:100.35,fact:"The Minangkabau people slow-cook beef in coconut milk for hours until nearly dry — it was made to survive long journeys without a fridge."},{id:"satay",name:"Satay",place:"Java, Indonesia",country:"Indonesia",lat:-7.87,lon:111.46,fact:"Skewered street meat born on Java, now grilled from Jakarta to Amsterdam — the peanut sauce is the part people argue about."},{id:"gado-gado",name:"Gado-Gado",place:"Jakarta, Indonesia",country:"Indonesia",lat:-6.21,lon:106.85,fact:"The name roughly means 'mix-mix' — a salad of blanched vegetables and tofu drowned in warm peanut dressing."},{id:"sisig",name:"Sisig",place:"Angeles City, Philippines",country:"Philippines",lat:15.15,lon:120.58,fact:"Born in Pampanga, the Philippines' sizzling chopped-pork plate arrives at the table still crackling on a hot iron dish."},{id:"halo-halo",name:"Halo-Halo",place:"Manila, Philippines",country:"Philippines",lat:14.6,lon:120.98,fact:"'Mix-mix' in Tagalog: shaved ice layered with sweet beans, jellies, milk, and purple ube ice cream — you stir it all together before eating."},{id:"chicken-rice",name:"Hainanese Chicken Rice",place:"Singapore",country:"Singapore",lat:1.35,lon:103.82,fact:"Brought by Hainanese immigrants and perfected in Singapore's hawker centres, where a plate can cost less than a bus ride."},{id:"chilli-crab",name:"Chilli Crab",place:"Singapore",country:"Singapore",lat:1.29,lon:103.85,fact:"Singapore's most famous seafood dish was invented in the 1950s by a street vendor who tossed crab in sweet chili-tomato sauce."},{id:"nasi-lemak",name:"Nasi Lemak",place:"Kuala Lumpur, Malaysia",country:"Malaysia",lat:3.14,lon:101.69,fact:"Malaysia's coconut rice breakfast comes wrapped in a banana leaf with sambal, crispy anchovies, peanuts, and egg."},{id:"roti-canai",name:"Roti Canai",place:"Kuala Lumpur, Malaysia",country:"Malaysia",lat:3.14,lon:101.69,fact:"Flaky flatbread flipped and stretched paper-thin in the air, brought to Malaysia by Indian Muslim cooks — dipped in dhal or curry."},{id:"mango-sticky-rice",name:"Mango Sticky Rice",place:"Bangkok, Thailand",country:"Thailand",lat:13.76,lon:100.5,fact:"Thailand's beloved dessert pairs ripe mango with coconut-soaked glutinous rice — best in April, peak mango season."},{id:"bibimbap",name:"Bibimbap",place:"Jeonju, South Korea",country:"South Korea",lat:35.82,lon:127.15,fact:"The city of Jeonju is so proud of its rice-bowl-with-everything that UNESCO named it a City of Gastronomy."},{id:"tteokbokki",name:"Tteokbokki",place:"Seoul, South Korea",country:"South Korea",lat:37.57,lon:126.98,fact:"Chewy rice cakes in glossy red gochujang sauce — Seoul's favorite after-school street snack."},{id:"kfc-korean",name:"Yangnyeom Chicken",place:"Seoul, South Korea",country:"South Korea",lat:37.57,lon:126.98,fact:"Double-fried for an extra-thin, extra-crackly crust, then painted with sweet-spicy glaze — 'chimaek' means eating it with friends."},{id:"okonomiyaki",name:"Okonomiyaki",place:"Osaka, Japan",country:"Japan",lat:34.69,lon:135.5,fact:"Osaka's savory 'cook-what-you-like' pancake is griddled at your table and painted with sauce, mayo, and dancing bonito flakes."},{id:"takoyaki",name:"Takoyaki",place:"Osaka, Japan",country:"Japan",lat:34.69,lon:135.5,fact:"Molten octopus-filled batter balls flipped with picks in special dimpled pans — an Osaka street invention from 1935."},{id:"tempura",name:"Tempura",place:"Tokyo, Japan",country:"Japan",lat:35.68,lon:139.69,fact:"The feather-light frying technique came to Japan with Portuguese missionaries in the 1500s, then Edo perfected it."},{id:"udon",name:"Udon",place:"Kagawa, Japan",country:"Japan",lat:34.34,lon:134.05,fact:"Kagawa prefecture is Japan's udon heartland — thick chewy noodles so beloved the local airport greets you with udon shops."},{id:"hot-pot",name:"Hot Pot",place:"Chongqing, China",country:"China",lat:29.56,lon:106.55,fact:"A bubbling cauldron of chili-and-numbing-peppercorn broth — Chongqing has more hot pot restaurants than any city on Earth."},{id:"mapo-tofu",name:"Mapo Tofu",place:"Chengdu, China",country:"China",lat:30.57,lon:104.07,fact:"Named after the pockmarked grandmother who ran a Chengdu restaurant in the 1800s and invented it for hungry laborers."},{id:"kung-pao",name:"Kung Pao Chicken",place:"Chengdu, China",country:"China",lat:30.57,lon:104.07,fact:"Named for a Qing-dynasty governor of Sichuan whose title was 'Gongbao' — the real version numbs your lips with Sichuan peppercorns."},{id:"lanzhou-noodles",name:"Hand-Pulled Beef Noodles",place:"Lanzhou, China",country:"China",lat:36.06,lon:103.83,fact:"Masters hand-pull a single lump of dough into needle-thin noodles in seconds — the broth recipe dates to 1915."},{id:"char-siu",name:"Char Siu",place:"Guangzhou, China",country:"China",lat:23.13,lon:113.26,fact:"Cantonese barbecued pork lacquered red with honey and spices, hung in shop windows across Guangzhou and Hong Kong."},{id:"buuz",name:"Buuz",place:"Ulaanbaatar, Mongolia",country:"Mongolia",lat:47.89,lon:106.91,fact:"Mongolian steamed mutton dumplings eaten by the dozen during Tsagaan Sar, the lunar new year — families make thousands in advance."},{id:"masala-dosa",name:"Masala Dosa",place:"Udupi, India",country:"India",lat:13.34,lon:74.75,fact:"The crispy fermented crepe with spiced potato filling spread across India from Udupi's temple kitchens."},{id:"vada-pav",name:"Vada Pav",place:"Mumbai, India",country:"India",lat:19.08,lon:72.88,fact:"Mumbai's spicy potato fritter in a bun — invented outside a train station in 1966 and still the city's favorite one-hand lunch."},{id:"chole-bhature",name:"Chole Bhature",place:"Delhi, India",country:"India",lat:28.61,lon:77.21,fact:"Spiced chickpeas with a balloon of fried bread — a Delhi and Punjabi breakfast that demands a nap afterward."},{id:"rogan-josh",name:"Rogan Josh",place:"Srinagar, India",country:"India",lat:34.08,lon:74.8,fact:"The crown of Kashmiri cooking: lamb stewed brick-red with Kashmiri chilies, milder than its color warns."},{id:"samosa",name:"Samosa",place:"Delhi, India",country:"India",lat:28.61,lon:77.21,fact:"The stuffed triangle traveled to India from Central Asia with medieval traders — the potato filling came later and conquered all."},{id:"nihari",name:"Nihari",place:"Old Delhi, India",country:"India",lat:28.66,lon:77.23,fact:"A slow-simmered overnight stew once served to Mughal nobles at sunrise — the name comes from 'nihar', Arabic for morning."},{id:"kottu",name:"Kottu Roti",place:"Colombo, Sri Lanka",country:"Sri Lanka",lat:6.93,lon:79.86,fact:"Sri Lanka's favorite late-night food: chopped flatbread stir-fried with curry on a steel griddle — cooks drum the blades like a percussion solo."},{id:"karahi",name:"Chicken Karahi",place:"Peshawar, Pakistan",country:"Pakistan",lat:34.01,lon:71.58,fact:"Cooked fast in the wok-like pan it's named for, with tomatoes, ginger, and green chili — Peshawar's karahi houses sell it by the kilo."},{id:"beshbarmak",name:"Beshbarmak",place:"Almaty, Kazakhstan",country:"Kazakhstan",lat:43.24,lon:76.89,fact:"'Five fingers' — the Kazakh national dish of boiled meat over wide noodles, traditionally eaten by hand at celebrations."},{id:"khinkali",name:"Khinkali",place:"Tbilisi, Georgia",country:"Georgia",lat:41.72,lon:44.79,fact:"Georgian soup dumplings with a doughy topknot handle — you're not supposed to eat the knot, and spilling the broth is a rookie mistake."},{id:"dolma",name:"Dolma",place:"Baku, Azerbaijan",country:"Azerbaijan",lat:40.41,lon:49.87,fact:"Grape leaves wrapped around spiced rice and meat — Azerbaijan's dolma tradition is on UNESCO's cultural heritage list."},{id:"lavash",name:"Lavash",place:"Yerevan, Armenia",country:"Armenia",lat:40.18,lon:44.51,fact:"Armenia's paper-thin flatbread is slapped onto the wall of a buried clay oven — the baking tradition is UNESCO-listed."},{id:"hummus",name:"Hummus",place:"Beirut, Lebanon",country:"Lebanon",lat:33.89,lon:35.5,fact:"Chickpeas, tahini, lemon, and garlic — half the eastern Mediterranean claims it, and the earliest recipes date to medieval Cairo."},{id:"tabbouleh",name:"Tabbouleh",place:"Mount Lebanon, Lebanon",country:"Lebanon",lat:33.89,lon:35.5,fact:"Born in the Lebanese mountains: a parsley salad with bulgur — not a bulgur salad with parsley, as any Lebanese cook will insist."},{id:"falafel",name:"Falafel",place:"Cairo, Egypt",country:"Egypt",lat:30.04,lon:31.24,fact:"Egyptians fry theirs from fava beans and call it ta'ameya — most food historians trace the fritter to Egypt before it spread through the Levant."},{id:"ful-medames",name:"Ful Medames",place:"Cairo, Egypt",country:"Egypt",lat:30.04,lon:31.24,fact:"Slow-stewed fava beans with oil and lemon — Egypt's national breakfast, eaten since the time of the pharaohs."},{id:"doner",name:"Döner Kebab",place:"Bursa, Türkiye",country:"Turkey",lat:40.19,lon:29.06,fact:"The vertical rotating spit was pioneered in 1800s Bursa — a century later, Turkish workers in Berlin turned it into Europe's favorite sandwich."},{id:"lahmacun",name:"Lahmacun",place:"Gaziantep, Türkiye",country:"Turkey",lat:37.07,lon:37.38,fact:"A whisper-thin flatbread with spiced minced lamb from Gaziantep, a UNESCO City of Gastronomy — roll it up with parsley and lemon."},{id:"kunefe",name:"Künefe",place:"Hatay, Türkiye",country:"Turkey",lat:36.2,lon:36.16,fact:"Molten cheese sandwiched in crispy shredded pastry, soaked in syrup, served hot — Hatay province is its Turkish capital."},{id:"turkish-delight",name:"Lokum",place:"Istanbul, Türkiye",country:"Turkey",lat:41.01,lon:28.98,fact:"Lokum has been made in Istanbul since the 1700s — the confectioner Hacı Bekir's original shop still sells it today."},{id:"couscous",name:"Couscous",place:"Algiers, Algeria",country:"Algeria",lat:36.75,lon:3.06,fact:"Hand-rolled semolina pearls steamed over stew — a Berber creation so central to North Africa that UNESCO honored it across four countries."},{id:"suya",name:"Suya",place:"Kano, Nigeria",country:"Nigeria",lat:12,lon:8.52,fact:"Northern Nigeria's spicy grilled meat skewers get their kick from yaji — a peanut-and-chili spice blend guarded like a family secret."},{id:"egusi",name:"Egusi Soup",place:"Lagos, Nigeria",country:"Nigeria",lat:6.52,lon:3.38,fact:"Thickened with ground melon seeds and eaten with pounded yam — one of Nigeria's most beloved soups across all its regions."},{id:"thieboudienne",name:"Thieboudienne",place:"Saint-Louis, Senegal",country:"Senegal",lat:16.03,lon:-16.49,fact:"Senegal's national dish of fish and broken rice was created in Saint-Louis by the cook Penda Mbaye — UNESCO lists it as world heritage."},{id:"doro-wat",name:"Doro Wat",place:"Addis Ababa, Ethiopia",country:"Ethiopia",lat:9.01,lon:38.75,fact:"Ethiopia's holiday chicken stew simmers in berbere spice and slow-cooked onions for hours — always served on injera with a boiled egg."},{id:"matoke",name:"Matoke",place:"Kampala, Uganda",country:"Uganda",lat:.35,lon:32.58,fact:"Green highland bananas steamed in their own leaves and mashed — Uganda grows more bananas per person than almost anywhere."},{id:"sadza",name:"Sadza",place:"Harare, Zimbabwe",country:"Zimbabwe",lat:-17.83,lon:31.05,fact:"Zimbabwe's cornmeal staple is eaten with the right hand, rolled into a ball and dipped into stew — dinner isn't dinner without it."},{id:"bobotie",name:"Bobotie",place:"Cape Town, South Africa",country:"South Africa",lat:-33.92,lon:18.42,fact:"Cape Malay cooks turned spiced minced meat with a golden egg custard top into South Africa's most famous bake."},{id:"attieke",name:"Attiéké",place:"Abidjan, Côte d'Ivoire",country:"Côte d'Ivoire",lat:5.36,lon:-4.01,fact:"Côte d'Ivoire's tangy fermented cassava couscous, piled next to grilled fish — now protected as an official heritage food."},{id:"ndole",name:"Ndolé",place:"Douala, Cameroon",country:"Cameroon",lat:4.05,lon:9.7,fact:"Cameroon's national dish stews bitterleaf greens with peanuts and shrimp — the bitterness is washed out leaf by leaf, by hand."},{id:"pastilla",name:"Pastilla",place:"Fez, Morocco",country:"Morocco",lat:34.03,lon:-4.98,fact:"Fez's festive pie hides savory pigeon or chicken under crackling pastry dusted with sugar and cinnamon — sweet and savory on purpose."},{id:"hot-dog",name:"Hot Dog",place:"New York City, USA",country:"United States of America",lat:40.71,lon:-74.01,fact:"German immigrants brought the frankfurter; New York's street carts and Coney Island made it America's icon."},{id:"hamburger",name:"Hamburger",place:"New Haven, USA",country:"United States of America",lat:41.31,lon:-72.92,fact:"Named for Hamburg, Germany, but the sandwich is American — Louis' Lunch in New Haven claims the first one, served since 1900."},{id:"buffalo-wings",name:"Hot Wings",place:"Buffalo, USA",country:"United States of America",lat:42.89,lon:-78.88,fact:"Invented at the Anchor Bar in Buffalo in 1964, allegedly as a midnight snack for the owner's son and his friends."},{id:"gumbo",name:"Gumbo",place:"New Orleans, USA",country:"United States of America",lat:29.95,lon:-90.07,fact:"Louisiana's melting-pot stew blends West African okra, French roux, and Choctaw filé powder — it's the official state cuisine."},{id:"deep-dish",name:"Deep-Dish Pizza",place:"Chicago, USA",country:"United States of America",lat:41.88,lon:-87.63,fact:"Invented at Pizzeria Uno in 1943 — more pie than pizza, with the sauce famously on top of the cheese."},{id:"cheesesteak",name:"Cheesesteak",place:"Philadelphia, USA",country:"United States of America",lat:39.95,lon:-75.17,fact:"Started at a 1930s hot dog cart when Pat Olivieri grilled beef instead — order 'whiz wit' for Cheez Whiz with onions."},{id:"lobster-roll",name:"Lobster Roll",place:"Maine, USA",country:"United States of America",lat:43.66,lon:-70.26,fact:"Maine piles cold lobster with mayo in a split-top bun; Connecticut serves it warm with butter — the rivalry is real."},{id:"elote",name:"Elote",place:"Mexico City, Mexico",country:"Mexico",lat:19.43,lon:-99.13,fact:"Street corn slathered with mayo, cheese, chili, and lime — corn has been sacred in Mexico for 9,000 years."},{id:"cochinita",name:"Cochinita Pibil",place:"Mérida, Mexico",country:"Mexico",lat:20.97,lon:-89.62,fact:"Yucatán's achiote-marinated pork, wrapped in banana leaves and roasted in a pit oven — a Maya technique older than the conquest."},{id:"chiles-en-nogada",name:"Chiles en Nogada",place:"Puebla, Mexico",country:"Mexico",lat:19.04,lon:-98.2,fact:"Green chile, white walnut sauce, red pomegranate — the colors of the Mexican flag, created by Puebla nuns for independence celebrations."},{id:"gallo-pinto",name:"Gallo Pinto",place:"San José, Costa Rica",country:"Costa Rica",lat:9.93,lon:-84.08,fact:"'Spotted rooster' rice and beans — Costa Rica and Nicaragua both claim it, and the friendly feud has produced world-record-sized batches."},{id:"baleada",name:"Baleada",place:"La Ceiba, Honduras",country:"Honduras",lat:15.78,lon:-86.79,fact:"A thick flour tortilla folded over refried beans, cream, and cheese — Honduras' go-to meal at any hour."},{id:"mofongo",name:"Mofongo",place:"San Juan, Puerto Rico",country:"United States of America",lat:18.47,lon:-66.11,fact:"Fried green plantains mashed with garlic and chicharrón in a wooden pilón — Puerto Rico's answer to West African fufu."},{id:"sancocho",name:"Sancocho",place:"Santo Domingo, Dominican Republic",country:"Dominican Rep.",lat:18.49,lon:-69.93,fact:"The Dominican Republic's seven-meat celebration stew — making it is an all-day family event, usually for a crowd."},{id:"doubles",name:"Doubles",place:"Port of Spain, Trinidad and Tobago",country:"Trinidad and Tobago",lat:10.65,lon:-61.51,fact:"Two fried barra breads hugging curried chickpeas — invented by an Indo-Trinidadian street vendor in the 1930s, eaten standing up."},{id:"griot",name:"Griot",place:"Port-au-Prince, Haiti",country:"Haiti",lat:18.54,lon:-72.34,fact:"Haiti's celebration pork: marinated in bitter orange, boiled, then fried until crispy — served with fiery pikliz slaw."},{id:"bandeja-paisa",name:"Bandeja Paisa",place:"Medellín, Colombia",country:"Colombia",lat:6.25,lon:-75.56,fact:"Medellín's mountain platter piles beans, rice, chicharrón, sausage, avocado, egg, and more onto one heroic tray."},{id:"ajiaco",name:"Ajiaco",place:"Bogotá, Colombia",country:"Colombia",lat:4.71,lon:-74.07,fact:"Bogotá's chicken-and-three-potato soup owes its flavor to guascas, an Andean herb the Muisca people cooked with long before the Spanish came."},{id:"pabellon",name:"Pabellón Criollo",place:"Caracas, Venezuela",country:"Venezuela",lat:10.48,lon:-66.9,fact:"Venezuela's flag on a plate: shredded beef, black beans, rice, and fried plantains — each stripe a different color."},{id:"lomo-saltado",name:"Lomo Saltado",place:"Lima, Peru",country:"Peru",lat:-12.05,lon:-77.04,fact:"Beef stir-fried in a wok with soy sauce AND served with fries and rice — the delicious result of Chinese immigration to Peru."},{id:"saltena",name:"Salteña",place:"La Paz, Bolivia",country:"Bolivia",lat:-16.5,lon:-68.15,fact:"Bolivia's juicy morning empanada is filled with stew, not solids — locals judge you by whether you can eat one without spilling."},{id:"chivito",name:"Chivito",place:"Montevideo, Uruguay",country:"Uruguay",lat:-34.9,lon:-56.16,fact:"Uruguay's national sandwich stacks steak, ham, bacon, egg, and mozzarella — invented when a customer asked for goat and got this instead."},{id:"dulce-de-leche",name:"Dulce de Leche",place:"Buenos Aires, Argentina",country:"Argentina",lat:-34.6,lon:-58.38,fact:"Legend says a distracted cook left sweetened milk on the fire in 1829 and came back to caramel gold — Argentina eats kilos of it per person yearly."},{id:"curanto",name:"Curanto",place:"Chiloé, Chile",country:"Chile",lat:-42.48,lon:-73.76,fact:"On Chiloé Island, shellfish and meat steam for hours in a pit of hot stones covered with giant rhubarb leaves — a technique thousands of years old."},{id:"pao-de-queijo",name:"Pão de Queijo",place:"Belo Horizonte, Brazil",country:"Brazil",lat:-19.92,lon:-43.94,fact:"Minas Gerais' chewy cheese puffs are made with cassava starch, so they're naturally gluten-free — and dangerously poppable."},{id:"moqueca",name:"Moqueca",place:"Salvador, Brazil",country:"Brazil",lat:-12.97,lon:-38.5,fact:"Bahia's fish stew glows orange with dendê palm oil and coconut milk — Espírito Santo state cooks a rival version and the debate never ends."},{id:"brigadeiro",name:"Brigadeiro",place:"Rio de Janeiro, Brazil",country:"Brazil",lat:-22.91,lon:-43.17,fact:"Brazil's fudge balls were named after a 1940s brigadier whose presidential campaign sold them — he lost the election, the sweet won forever."},{id:"carbonara",name:"Carbonara",place:"Rome, Italy",country:"Italy",lat:41.9,lon:12.5,fact:"Eggs, guanciale, pecorino, pepper — nothing else. Rome polices the recipe so fiercely that adding cream can make headlines."},{id:"risotto-milanese",name:"Saffron Risotto",place:"Milan, Italy",country:"Italy",lat:45.46,lon:9.19,fact:"Milan's golden risotto gets its color from saffron — legend credits a glassmaker's apprentice who tinted rice at a 1574 wedding as a joke."},{id:"pesto",name:"Pesto",place:"Genoa, Italy",country:"Italy",lat:44.41,lon:8.93,fact:"Genoa's basil sauce is properly made in a marble mortar — 'pesto' literally means 'pounded'."},{id:"arancini",name:"Arancini",place:"Palermo, Italy",country:"Italy",lat:38.12,lon:13.36,fact:"Sicily's fried rice balls are named 'little oranges' for their shape — Palermo and Catania still argue over cone versus sphere."},{id:"tiramisu",name:"Tiramisù",place:"Treviso, Italy",country:"Italy",lat:45.67,lon:12.24,fact:"'Pick-me-up' in Italian — the coffee-and-mascarpone dessert was born in a Treviso restaurant in the late 1960s, newer than you'd guess."},{id:"ratatouille",name:"Ratatouille",place:"Nice, France",country:"France",lat:43.7,lon:7.27,fact:"Once a humble summer-vegetable stew of Provençal farmers — a Pixar rat made it the most famous French dish on Earth."},{id:"bouillabaisse",name:"Bouillabaisse",place:"Marseille, France",country:"France",lat:43.3,lon:5.37,fact:"Marseille fishermen's stew of the unsold catch became so prized the city wrote a charter defining what may bear the name."},{id:"quiche",name:"Quiche",place:"Nancy, France",country:"France",lat:48.69,lon:6.18,fact:"From the Lorraine region on the German border — the original had no cheese, just eggs, cream, and smoky bacon in pastry."},{id:"tarte-tatin",name:"Tarte Tatin",place:"Lamotte-Beuvron, France",country:"France",lat:47.6,lon:1.99,fact:"The Tatin sisters supposedly botched an apple pie at their hotel, baked it upside down anyway, and created a French classic."},{id:"macaron",name:"Macaron",place:"Paris, France",country:"France",lat:48.86,lon:2.35,fact:"Catherine de' Medici's Italian pastry cooks brought the almond cookie to France — Paris' Ladurée invented the double-decker version in 1930."},{id:"gazpacho",name:"Gazpacho",place:"Seville, Spain",country:"Spain",lat:37.39,lon:-5.99,fact:"Andalusia's cold tomato soup began as a field workers' blend of stale bread, oil, and vinegar — tomatoes joined only after they arrived from the Americas."},{id:"tortilla",name:"Tortilla de Patatas",place:"Navarra, Spain",country:"Spain",lat:42.82,lon:-1.64,fact:"Spain's thick potato omelette sparks a national debate: with onion or without? Entire polls have been run on it."},{id:"pintxos",name:"Pintxos",place:"San Sebastián, Spain",country:"Spain",lat:43.32,lon:-1.98,fact:"The Basque country's skewered bar snacks — you graze from bar to bar, and they count your toothpicks to tally the bill."},{id:"francesinha",name:"Francesinha",place:"Porto, Portugal",country:"Portugal",lat:41.15,lon:-8.61,fact:"Porto's 'little French girl': a sandwich of meats buried under melted cheese and spicy beer sauce — invented by a returning emigrant in the 1950s."},{id:"full-english",name:"Fry-Up",place:"London, England",country:"United Kingdom",lat:51.51,lon:-.13,fact:"Eggs, bacon, sausage, beans, toast, mushrooms, tomato — a plate so institutional that cafes are judged on it alone."},{id:"cornish-pasty",name:"Pasty",place:"Cornwall, England",country:"United Kingdom",lat:50.26,lon:-5.05,fact:"Cornish miners carried these crimped pies underground — the thick crust edge was a handle for dirty hands, then thrown away."},{id:"cawl",name:"Cawl",place:"Cardiff, Wales",country:"United Kingdom",lat:51.48,lon:-3.18,fact:"Wales' national broth of lamb and leeks, simmered slow — many say it tastes best reheated the next day."},{id:"moules-frites",name:"Moules-Frites",place:"Brussels, Belgium",country:"Belgium",lat:50.85,lon:4.35,fact:"Belgium's mussels-and-fries pairing goes back centuries — Belgians eat them using an empty mussel shell as tweezers."},{id:"bitterballen",name:"Bitterballen",place:"Amsterdam, Netherlands",country:"Netherlands",lat:52.37,lon:4.9,fact:"Crispy fried balls of molten beef ragout, served with mustard at every Dutch bar — the inside stays lava-hot, be warned."},{id:"currywurst",name:"Currywurst",place:"Berlin, Germany",country:"Germany",lat:52.52,lon:13.4,fact:"In 1949 Berlin, Herta Heuwer mixed ketchup with curry powder from British soldiers and poured it over sausage — a city icon was born."},{id:"sauerbraten",name:"Sauerbraten",place:"Cologne, Germany",country:"Germany",lat:50.94,lon:6.96,fact:"Germany's 'sour roast' marinates beef in vinegar and spices for days — Rhineland versions sweeten the gravy with raisins."},{id:"black-forest",name:"Kirschtorte",place:"Black Forest, Germany",country:"Germany",lat:48.3,lon:8.2,fact:"Chocolate, cherries, cream, and real kirsch brandy — German law says a true Schwarzwälder Kirschtorte must contain the kirsch."},{id:"rosti",name:"Rösti",place:"Bern, Switzerland",country:"Switzerland",lat:46.95,lon:7.45,fact:"Once a Bernese farmer's breakfast of crispy grated potatoes — the 'Röstigraben' now jokingly names the cultural line between German- and French-speaking Switzerland."},{id:"raclette",name:"Raclette",place:"Valais, Switzerland",country:"Switzerland",lat:46.23,lon:7.36,fact:"Alpine herders melted the cut face of a cheese wheel by the fire and scraped it over potatoes — 'racler' means to scrape."},{id:"sachertorte",name:"Sachertorte",place:"Vienna, Austria",country:"Austria",lat:48.21,lon:16.37,fact:"Invented by 16-year-old apprentice Franz Sacher in 1832 — Vienna later fought a seven-year court battle over the 'original' recipe."},{id:"svickova",name:"Svíčková",place:"Prague, Czechia",country:"Czechia",lat:50.08,lon:14.44,fact:"Czech beef in silky root-vegetable cream sauce with dumplings, cranberries, and a puff of whipped cream — Sunday lunch royalty."},{id:"langos",name:"Lángos",place:"Budapest, Hungary",country:"Hungary",lat:47.5,lon:19.04,fact:"Hungary's deep-fried bread slab rubbed with garlic and loaded with sour cream and cheese — the smell owns every summer festival."},{id:"zurek",name:"Żurek",place:"Warsaw, Poland",country:"Poland",lat:52.23,lon:21.01,fact:"Poland's sour rye soup with sausage and egg, often served inside a hollowed bread loaf — the tang comes from fermented rye starter."},{id:"cevapi",name:"Ćevapi",place:"Sarajevo, Bosnia and Herzegovina",country:"Bosnia and Herz.",lat:43.86,lon:18.41,fact:"Sarajevo's little grilled beef fingers arrive in somun flatbread with raw onion — ordering fewer than five is considered odd."},{id:"burek",name:"Burek",place:"Sarajevo, Bosnia and Herzegovina",country:"Bosnia and Herz.",lat:43.86,lon:18.41,fact:"Coiled phyllo pie from the Ottoman world — in Bosnia only the meat one is 'burek'; call a cheese pie burek and locals will correct you."},{id:"gyros",name:"Gyros",place:"Athens, Greece",country:"Greece",lat:37.98,lon:23.73,fact:"Greece's spit-roasted pork in pita with tzatziki — the name just means 'turn', for the rotating spit."},{id:"sarmale",name:"Sarmale",place:"Bucharest, Romania",country:"Romania",lat:44.43,lon:26.1,fact:"Romania's cabbage rolls simmer for hours and taste even better the next day — no Christmas or wedding happens without them."},{id:"banitsa",name:"Banitsa",place:"Sofia, Bulgaria",country:"Bulgaria",lat:42.7,lon:23.32,fact:"Bulgaria's cheese-filled phyllo pastry hides lucky charms on New Year's morning — your slice predicts your year."},{id:"kanelbulle",name:"Kanelbulle",place:"Stockholm, Sweden",country:"Sweden",lat:59.33,lon:18.07,fact:"Sweden's cardamom-scented cinnamon bun has its own national day, October 4th — fika without one is barely fika."},{id:"farikal",name:"Fårikål",place:"Oslo, Norway",country:"Norway",lat:59.91,lon:10.75,fact:"Norway's national dish is just lamb, cabbage, and whole peppercorns simmered patiently — it even has a feast day each September."},{id:"brunost",name:"Brunost",place:"Gudbrandsdalen, Norway",country:"Norway",lat:61.5,lon:9.5,fact:"Norway's caramel-colored 'brown cheese' is made by boiling whey until it caramelizes — sliced thin over waffles with a cheese plane, a Norwegian invention."},{id:"karelian-pasty",name:"Karjalanpiirakka",place:"North Karelia, Finland",country:"Finland",lat:62.6,lon:29.76,fact:"Finland's rye-crusted rice pastries from Karelia are topped with egg butter — grandmothers crimp the edges at astonishing speed."},{id:"olivier-salad",name:"Olivier Salad",place:"Moscow, Russia",country:"Russia",lat:55.75,lon:37.62,fact:"Invented at Moscow's Hermitage restaurant in the 1860s by chef Lucien Olivier, who took the original dressing recipe to his grave."},{id:"hangi",name:"Hāngī",place:"Rotorua, New Zealand",country:"New Zealand",lat:-38.14,lon:176.25,fact:"The Māori earth oven: food steams for hours over heated stones buried in the ground — in Rotorua, geothermal steam does the work."},{id:"anzac-biscuit",name:"Anzac Biscuit",place:"Melbourne, Australia",country:"Australia",lat:-37.81,lon:144.96,fact:"Oat-and-golden-syrup biscuits tied to WWI soldiers' care packages — Australia and New Zealand share this one without fighting, mostly."},{id:"poisson-cru",name:"Poisson Cru",place:"Papeete, French Polynesia",country:"France",lat:-17.55,lon:-149.56,fact:"Tahiti's raw tuna in lime and fresh-squeezed coconut milk — fishermen make it on the boat with seawater."},{id:"palusami",name:"Palusami",place:"Apia, Samoa",country:"Samoa",lat:-13.83,lon:-171.77,fact:"Young taro leaves wrapped around coconut cream and baked in a Samoan umu — creamy, smoky, and worth burning your fingers for."},{id:"laplap",name:"Laplap",place:"Port Vila, Vanuatu",country:"Vanuatu",lat:-17.73,lon:168.32,fact:"Vanuatu's national dish: grated root vegetables and coconut cream baked in banana leaves under hot stones."},{id:"ghormeh-sabzi",name:"Ghormeh Sabzi",place:"Tehran, Iran",country:"Iran",lat:35.69,lon:51.39,fact:"Iran's beloved herb stew simmers mountains of sautéed greens with dried limes that pack a sour punch — many call it the national dish."},{id:"masgouf",name:"Masgouf",place:"Baghdad, Iraq",country:"Iraq",lat:33.31,lon:44.36,fact:"Iraq's riverside classic: carp split open and slow-grilled upright beside a wood fire, a tradition as old as Mesopotamia."},{id:"mandi",name:"Mandi",place:"Hadhramaut, Yemen",country:"Yemen",lat:16.05,lon:49,fact:"From Yemen's Hadhramaut valley: meat and rice cooked in a sealed underground tandoor so the smoke perfumes every grain."},{id:"colcannon",name:"Colcannon",place:"Dublin, Ireland",country:"Ireland",lat:53.35,lon:-6.26,fact:"Ireland's buttery mash of potatoes and cabbage — traditionally served at Halloween with charms hidden inside to tell your fortune."},{id:"butter-tart",name:"Butter Tart",place:"Ontario, Canada",country:"Canada",lat:44.39,lon:-79.69,fact:"A gooey syrup-filled pastry that Canadians have baked since pioneer days — Ontario towns run an entire trail devoted to it, and raisins split the nation."}],$1=new Date(2026,6,21).getTime(),J1=864e5,jr=5;function _d(){const n=new Date,e=new Date(n.getFullYear(),n.getMonth(),n.getDate()).getTime();return Math.max(1,Math.round((e-$1)/J1)+1)}function mu(){const n=new Date,e=new Date(n.getFullYear(),n.getMonth(),n.getDate()+1).getTime();return Math.max(0,e-n.getTime())}function Q1(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function vd(n,e){const t=Q1(e),i=[...n];for(let r=i.length-1;r>0;r--){const a=Math.floor(t()*(r+1));[i[r],i[a]]=[i[a],i[r]]}return i}function ep(n){const e=Math.floor(so.length/jr),t=Math.floor((n-1)/e),i=(n-1)%e;return vd(so,857409+t*7919).slice(i*jr,i*jr+jr)}function tp(){return vd(so,Math.floor(Math.random()*2**31)).slice(0,jr)}const xd="dishtap-daily-v1";function np(){try{const n=localStorage.getItem(xd);if(!n)return null;const e=JSON.parse(n);return e&&e.day===_d()&&Array.isArray(e.rounds)?e:null}catch{return null}}function ip(n){try{localStorage.setItem(xd,JSON.stringify(n))}catch{}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dc="184",Qr={ROTATE:0,DOLLY:1,PAN:2},Kr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rp=0,gu=1,ap=2,Ys=1,sp=2,Fa=3,Ji=0,hn=1,ti=2,Ei=0,ea=1,_u=2,vu=3,xu=4,op=5,ar=100,lp=101,cp=102,up=103,hp=104,dp=200,fp=201,pp=202,mp=203,Rl=204,Cl=205,gp=206,_p=207,vp=208,xp=209,yp=210,Mp=211,Sp=212,bp=213,Ep=214,Pl=0,Dl=1,Ll=2,fa=3,Il=4,Ul=5,Nl=6,Fl=7,yd=0,Tp=1,wp=2,ai=0,Md=1,Sd=2,bd=3,Ed=4,Td=5,wd=6,Ad=7,Rd=300,Er=301,pa=302,Fo=303,Oo=304,To=306,oo=1e3,bi=1001,Ol=1002,Vt=1003,Ap=1004,ds=1005,Yt=1006,Bo=1007,cr=1008,Cn=1009,Cd=1010,Pd=1011,qa=1012,Lc=1013,ci=1014,ni=1015,Ai=1016,Ic=1017,Uc=1018,Ya=1020,Dd=35902,Ld=35899,Id=1021,Ud=1022,Wn=1023,Ri=1026,ur=1027,Nd=1028,Nc=1029,Tr=1030,Fc=1031,Oc=1033,js=33776,Ks=33777,Zs=33778,$s=33779,Bl=35840,kl=35841,zl=35842,Gl=35843,Hl=36196,Vl=37492,Wl=37496,Xl=37488,ql=37489,lo=37490,Yl=37491,jl=37808,Kl=37809,Zl=37810,$l=37811,Jl=37812,Ql=37813,ec=37814,tc=37815,nc=37816,ic=37817,rc=37818,ac=37819,sc=37820,oc=37821,lc=36492,cc=36494,uc=36495,hc=36283,dc=36284,co=36285,fc=36286,Rp=3200,yu=0,Cp=1,Hi="",yn="srgb",uo="srgb-linear",ho="linear",ft="srgb",Pr=7680,Mu=519,Pp=512,Dp=513,Lp=514,Bc=515,Ip=516,Up=517,kc=518,Np=519,Su=35044,bu="300 es",ii=2e3,fo=2001;function Fp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function po(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Op(){const n=po("canvas");return n.style.display="block",n}const Eu={};function Tu(...n){const e="THREE."+n.shift();console.log(e,...n)}function Fd(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ve(...n){n=Fd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function lt(...n){n=Fd(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function pc(...n){const e=n.join(" ");e in Eu||(Eu[e]=!0,Ve(...n))}function Bp(n,e,t){return new Promise(function(i,r){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const kp={[Pl]:Dl,[Ll]:Nl,[Il]:Fl,[fa]:Ul,[Dl]:Pl,[Nl]:Ll,[Fl]:Il,[Ul]:fa};class Qi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wu=1234567;const Ha=Math.PI/180,ja=180/Math.PI;function xa(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function rt(n,e,t){return Math.max(e,Math.min(t,n))}function zc(n,e){return(n%e+e)%e}function zp(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Gp(n,e,t){return n!==e?(t-n)/(e-n):0}function Va(n,e,t){return(1-t)*n+t*e}function Hp(n,e,t,i){return Va(n,e,1-Math.exp(-t*i))}function Vp(n,e=1){return e-Math.abs(zc(n,e*2)-e)}function Wp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Xp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function qp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Yp(n,e){return n+Math.random()*(e-n)}function jp(n){return n*(.5-Math.random())}function Kp(n){n!==void 0&&(wu=n);let e=wu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zp(n){return n*Ha}function $p(n){return n*ja}function Jp(n){return(n&n-1)===0&&n!==0}function Qp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function e2(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function t2(n,e,t,i,r){const a=Math.cos,s=Math.sin,o=a(t/2),l=s(t/2),c=a((e+i)/2),d=s((e+i)/2),f=a((e-i)/2),u=s((e-i)/2),h=a((i-e)/2),p=s((i-e)/2);switch(r){case"XYX":n.set(o*d,l*f,l*u,o*c);break;case"YZY":n.set(l*u,o*d,l*f,o*c);break;case"ZXZ":n.set(l*f,l*u,o*d,o*c);break;case"XZX":n.set(o*d,l*p,l*h,o*c);break;case"YXY":n.set(l*h,o*d,l*p,o*c);break;case"ZYZ":n.set(l*p,l*h,o*d,o*c);break;default:Ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Xr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function $t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Od={DEG2RAD:Ha,RAD2DEG:ja,generateUUID:xa,clamp:rt,euclideanModulo:zc,mapLinear:zp,inverseLerp:Gp,lerp:Va,damp:Hp,pingpong:Vp,smoothstep:Wp,smootherstep:Xp,randInt:qp,randFloat:Yp,randFloatSpread:jp,seededRandom:Kp,degToRad:Zp,radToDeg:$p,isPowerOfTwo:Jp,ceilPowerOfTwo:Qp,floorPowerOfTwo:e2,setQuaternionFromProperEuler:t2,normalize:$t,denormalize:Xr},qc=class qc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qc.prototype.isVector2=!0;let $e=qc;class qn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,o){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3],u=a[s+0],h=a[s+1],p=a[s+2],v=a[s+3];if(f!==v||l!==u||c!==h||d!==p){let g=l*u+c*h+d*p+f*v;g<0&&(u=-u,h=-h,p=-p,v=-v,g=-g);let m=1-o;if(g<.9995){const M=Math.acos(g),E=Math.sin(M);m=Math.sin(m*M)/E,o=Math.sin(o*M)/E,l=l*m+u*o,c=c*m+h*o,d=d*m+p*o,f=f*m+v*o}else{l=l*m+u*o,c=c*m+h*o,d=d*m+p*o,f=f*m+v*o;const M=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=M,c*=M,d*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,a,s){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=a[s],u=a[s+1],h=a[s+2],p=a[s+3];return e[t]=o*p+d*f+l*h-c*u,e[t+1]=l*p+d*u+c*f-o*h,e[t+2]=c*p+d*h+o*u-l*f,e[t+3]=d*p-o*f-l*u-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),f=o(a/2),u=l(i/2),h=l(r/2),p=l(a/2);switch(s){case"XYZ":this._x=u*d*f+c*h*p,this._y=c*h*f-u*d*p,this._z=c*d*p+u*h*f,this._w=c*d*f-u*h*p;break;case"YXZ":this._x=u*d*f+c*h*p,this._y=c*h*f-u*d*p,this._z=c*d*p-u*h*f,this._w=c*d*f+u*h*p;break;case"ZXY":this._x=u*d*f-c*h*p,this._y=c*h*f+u*d*p,this._z=c*d*p+u*h*f,this._w=c*d*f-u*h*p;break;case"ZYX":this._x=u*d*f-c*h*p,this._y=c*h*f+u*d*p,this._z=c*d*p-u*h*f,this._w=c*d*f+u*h*p;break;case"YZX":this._x=u*d*f+c*h*p,this._y=c*h*f+u*d*p,this._z=c*d*p-u*h*f,this._w=c*d*f-u*h*p;break;case"XZY":this._x=u*d*f-c*h*p,this._y=c*h*f-u*d*p,this._z=c*d*p+u*h*f,this._w=c*d*f+u*h*p;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],d=t[6],f=t[10],u=i+o+f;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(d-l)*h,this._y=(a-c)*h,this._z=(s-r)*h}else if(i>o&&i>f){const h=2*Math.sqrt(1+i-o-f);this._w=(d-l)/h,this._x=.25*h,this._y=(r+s)/h,this._z=(a+c)/h}else if(o>f){const h=2*Math.sqrt(1+o-i-f);this._w=(a-c)/h,this._x=(r+s)/h,this._y=.25*h,this._z=(l+d)/h}else{const h=2*Math.sqrt(1+f-i-o);this._w=(s-r)/h,this._x=(a+c)/h,this._y=(l+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+s*o+r*c-a*l,this._y=r*d+s*l+a*o-i*c,this._z=a*d+s*c+i*l-r*o,this._w=s*d-i*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,s=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,a=-a,s=-s,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+a*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+a*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Yc=class Yc{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Au.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Au.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*i),d=2*(o*t-a*r),f=2*(a*i-s*t);return this.x=t+l*c+s*f-o*d,this.y=i+l*d+o*c-a*f,this.z=r+l*f+a*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ko.copy(this).projectOnVector(e),this.sub(ko)}reflect(e){return this.sub(ko.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yc.prototype.isVector3=!0;let N=Yc;const ko=new N,Au=new qn,jc=class jc{constructor(e,t,i,r,a,s,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c)}set(e,t,i,r,a,s,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=a,d[5]=l,d[6]=i,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],d=i[4],f=i[7],u=i[2],h=i[5],p=i[8],v=r[0],g=r[3],m=r[6],M=r[1],E=r[4],b=r[7],P=r[2],w=r[5],C=r[8];return a[0]=s*v+o*M+l*P,a[3]=s*g+o*E+l*w,a[6]=s*m+o*b+l*C,a[1]=c*v+d*M+f*P,a[4]=c*g+d*E+f*w,a[7]=c*m+d*b+f*C,a[2]=u*v+h*M+p*P,a[5]=u*g+h*E+p*w,a[8]=u*m+h*b+p*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*s*d-t*o*c-i*a*d+i*o*l+r*a*c-r*s*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*s-o*c,u=o*l-d*a,h=c*a-s*l,p=t*f+i*u+r*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return e[0]=f*v,e[1]=(r*c-d*i)*v,e[2]=(o*i-r*s)*v,e[3]=u*v,e[4]=(d*t-r*l)*v,e[5]=(r*a-o*t)*v,e[6]=h*v,e[7]=(i*l-c*t)*v,e[8]=(s*t-i*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(zo.makeScale(e,t)),this}rotate(e){return this.premultiply(zo.makeRotation(-e)),this}translate(e,t){return this.premultiply(zo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};jc.prototype.isMatrix3=!0;let Ye=jc;const zo=new Ye,Ru=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cu=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function n2(){const n={enabled:!0,workingColorSpace:uo,spaces:{},convert:function(r,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===ft&&(r.r=Ti(r.r),r.g=Ti(r.g),r.b=Ti(r.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===ft&&(r.r=ta(r.r),r.g=ta(r.g),r.b=ta(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Hi?ho:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,s){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return pc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return pc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[uo]:{primaries:e,whitePoint:i,transfer:ho,toXYZ:Ru,fromXYZ:Cu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:Ru,fromXYZ:Cu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}}),n}const st=n2();function Ti(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ta(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Dr;class i2{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Dr===void 0&&(Dr=po("canvas")),Dr.width=e.width,Dr.height=e.height;const r=Dr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Dr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=po("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Ti(a[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ti(t[i]/255)*255):t[i]=Ti(t[i]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let r2=0;class Gc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:r2++}),this.uuid=xa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(Go(r[s].image)):a.push(Go(r[s]))}else a=Go(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function Go(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?i2.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let a2=0;const Ho=new N;class Kt extends Qi{constructor(e=Kt.DEFAULT_IMAGE,t=Kt.DEFAULT_MAPPING,i=bi,r=bi,a=Yt,s=cr,o=Wn,l=Cn,c=Kt.DEFAULT_ANISOTROPY,d=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a2++}),this.uuid=xa(),this.name="",this.source=new Gc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ho).x}get height(){return this.source.getSize(Ho).y}get depth(){return this.source.getSize(Ho).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oo:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case Ol:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oo:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case Ol:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Rd;Kt.DEFAULT_ANISOTROPY=1;const Kc=class Kc{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const l=e.elements,c=l[0],d=l[4],f=l[8],u=l[1],h=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(d-u)<.01&&Math.abs(f-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,b=(h+1)/2,P=(m+1)/2,w=(d+u)/4,C=(f+v)/4,x=(p+g)/4;return E>b&&E>P?E<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(E),r=w/i,a=C/i):b>P?b<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(b),i=w/r,a=x/r):P<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(P),i=C/a,r=x/a),this.set(i,r,a,t),this}let M=Math.sqrt((g-p)*(g-p)+(f-v)*(f-v)+(u-d)*(u-d));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(f-v)/M,this.z=(u-d)/M,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Kc.prototype.isVector4=!0;let Pt=Kc;class s2 extends Qi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},a=new Kt(r),s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Yt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Gc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends s2{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Bd extends Kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class o2 extends Kt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mo=class Mo{constructor(e,t,i,r,a,s,o,l,c,d,f,u,h,p,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c,d,f,u,h,p,v,g)}set(e,t,i,r,a,s,o,l,c,d,f,u,h,p,v,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=r,m[1]=a,m[5]=s,m[9]=o,m[13]=l,m[2]=c,m[6]=d,m[10]=f,m[14]=u,m[3]=h,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mo().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Lr.setFromMatrixColumn(e,0).length(),a=1/Lr.setFromMatrixColumn(e,1).length(),s=1/Lr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const u=s*d,h=s*f,p=o*d,v=o*f;t[0]=l*d,t[4]=-l*f,t[8]=c,t[1]=h+p*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=p+h*c,t[10]=s*l}else if(e.order==="YXZ"){const u=l*d,h=l*f,p=c*d,v=c*f;t[0]=u+v*o,t[4]=p*o-h,t[8]=s*c,t[1]=s*f,t[5]=s*d,t[9]=-o,t[2]=h*o-p,t[6]=v+u*o,t[10]=s*l}else if(e.order==="ZXY"){const u=l*d,h=l*f,p=c*d,v=c*f;t[0]=u-v*o,t[4]=-s*f,t[8]=p+h*o,t[1]=h+p*o,t[5]=s*d,t[9]=v-u*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const u=s*d,h=s*f,p=o*d,v=o*f;t[0]=l*d,t[4]=p*c-h,t[8]=u*c+v,t[1]=l*f,t[5]=v*c+u,t[9]=h*c-p,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const u=s*l,h=s*c,p=o*l,v=o*c;t[0]=l*d,t[4]=v-u*f,t[8]=p*f+h,t[1]=f,t[5]=s*d,t[9]=-o*d,t[2]=-c*d,t[6]=h*f+p,t[10]=u-v*f}else if(e.order==="XZY"){const u=s*l,h=s*c,p=o*l,v=o*c;t[0]=l*d,t[4]=-f,t[8]=c*d,t[1]=u*f+v,t[5]=s*d,t[9]=h*f-p,t[2]=p*f-h,t[6]=o*d,t[10]=v*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(l2,e,c2)}lookAt(e,t,i){const r=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Ni.crossVectors(i,pn),Ni.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Ni.crossVectors(i,pn)),Ni.normalize(),fs.crossVectors(pn,Ni),r[0]=Ni.x,r[4]=fs.x,r[8]=pn.x,r[1]=Ni.y,r[5]=fs.y,r[9]=pn.y,r[2]=Ni.z,r[6]=fs.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],d=i[1],f=i[5],u=i[9],h=i[13],p=i[2],v=i[6],g=i[10],m=i[14],M=i[3],E=i[7],b=i[11],P=i[15],w=r[0],C=r[4],x=r[8],T=r[12],L=r[1],A=r[5],F=r[9],W=r[13],Y=r[2],I=r[6],H=r[10],k=r[14],ee=r[3],re=r[7],ge=r[11],ie=r[15];return a[0]=s*w+o*L+l*Y+c*ee,a[4]=s*C+o*A+l*I+c*re,a[8]=s*x+o*F+l*H+c*ge,a[12]=s*T+o*W+l*k+c*ie,a[1]=d*w+f*L+u*Y+h*ee,a[5]=d*C+f*A+u*I+h*re,a[9]=d*x+f*F+u*H+h*ge,a[13]=d*T+f*W+u*k+h*ie,a[2]=p*w+v*L+g*Y+m*ee,a[6]=p*C+v*A+g*I+m*re,a[10]=p*x+v*F+g*H+m*ge,a[14]=p*T+v*W+g*k+m*ie,a[3]=M*w+E*L+b*Y+P*ee,a[7]=M*C+E*A+b*I+P*re,a[11]=M*x+E*F+b*H+P*ge,a[15]=M*T+E*W+b*k+P*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],u=e[10],h=e[14],p=e[3],v=e[7],g=e[11],m=e[15],M=l*h-c*u,E=o*h-c*f,b=o*u-l*f,P=s*h-c*d,w=s*u-l*d,C=s*f-o*d;return t*(v*M-g*E+m*b)-i*(p*M-g*P+m*w)+r*(p*E-v*P+m*C)-a*(p*b-v*w+g*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],u=e[10],h=e[11],p=e[12],v=e[13],g=e[14],m=e[15],M=t*o-i*s,E=t*l-r*s,b=t*c-a*s,P=i*l-r*o,w=i*c-a*o,C=r*c-a*l,x=d*v-f*p,T=d*g-u*p,L=d*m-h*p,A=f*g-u*v,F=f*m-h*v,W=u*m-h*g,Y=M*W-E*F+b*A+P*L-w*T+C*x;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/Y;return e[0]=(o*W-l*F+c*A)*I,e[1]=(r*F-i*W-a*A)*I,e[2]=(v*C-g*w+m*P)*I,e[3]=(u*w-f*C-h*P)*I,e[4]=(l*L-s*W-c*T)*I,e[5]=(t*W-r*L+a*T)*I,e[6]=(g*b-p*C-m*E)*I,e[7]=(d*C-u*b+h*E)*I,e[8]=(s*F-o*L+c*x)*I,e[9]=(i*L-t*F-a*x)*I,e[10]=(p*w-v*b+m*M)*I,e[11]=(f*b-d*w-h*M)*I,e[12]=(o*T-s*A-l*x)*I,e[13]=(t*A-i*T+r*x)*I,e[14]=(v*E-p*P-g*M)*I,e[15]=(d*P-f*E+u*M)*I,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,d=a*o;return this.set(c*s+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*s,0,c*l-r*o,d*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,d=s+s,f=o+o,u=a*c,h=a*d,p=a*f,v=s*d,g=s*f,m=o*f,M=l*c,E=l*d,b=l*f,P=i.x,w=i.y,C=i.z;return r[0]=(1-(v+m))*P,r[1]=(h+b)*P,r[2]=(p-E)*P,r[3]=0,r[4]=(h-b)*w,r[5]=(1-(u+m))*w,r[6]=(g+M)*w,r[7]=0,r[8]=(p+E)*C,r[9]=(g-M)*C,r[10]=(1-(u+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const a=this.determinant();if(a===0)return i.set(1,1,1),t.identity(),this;let s=Lr.set(r[0],r[1],r[2]).length();const o=Lr.set(r[4],r[5],r[6]).length(),l=Lr.set(r[8],r[9],r[10]).length();a<0&&(s=-s),Nn.copy(this);const c=1/s,d=1/o,f=1/l;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=d,Nn.elements[5]*=d,Nn.elements[6]*=d,Nn.elements[8]*=f,Nn.elements[9]*=f,Nn.elements[10]*=f,t.setFromRotationMatrix(Nn),i.x=s,i.y=o,i.z=l,this}makePerspective(e,t,i,r,a,s,o=ii,l=!1){const c=this.elements,d=2*a/(t-e),f=2*a/(i-r),u=(t+e)/(t-e),h=(i+r)/(i-r);let p,v;if(l)p=a/(s-a),v=s*a/(s-a);else if(o===ii)p=-(s+a)/(s-a),v=-2*s*a/(s-a);else if(o===fo)p=-s/(s-a),v=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,a,s,o=ii,l=!1){const c=this.elements,d=2/(t-e),f=2/(i-r),u=-(t+e)/(t-e),h=-(i+r)/(i-r);let p,v;if(l)p=1/(s-a),v=s/(s-a);else if(o===ii)p=-2/(s-a),v=-(s+a)/(s-a);else if(o===fo)p=-1/(s-a),v=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Mo.prototype.isMatrix4=!0;let Tt=Mo;const Lr=new N,Nn=new Tt,l2=new N(0,0,0),c2=new N(1,1,1),Ni=new N,fs=new N,pn=new N,Pu=new Tt,Du=new qn;class wr{constructor(e=0,t=0,i=0,r=wr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],d=r[9],f=r[2],u=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-rt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-d,h),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Pu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Du.setFromEuler(this),this.setFromQuaternion(Du,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wr.DEFAULT_ORDER="XYZ";class Hc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let u2=0;const Lu=new N,Ir=new qn,fi=new Tt,ps=new N,Ea=new N,h2=new N,d2=new qn,Iu=new N(1,0,0),Uu=new N(0,1,0),Nu=new N(0,0,1),Fu={type:"added"},f2={type:"removed"},Ur={type:"childadded",child:null},Vo={type:"childremoved",child:null};class tn extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:u2++}),this.uuid=xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new N,t=new wr,i=new qn,r=new N(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Ye}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(Iu,e)}rotateY(e){return this.rotateOnAxis(Uu,e)}rotateZ(e){return this.rotateOnAxis(Nu,e)}translateOnAxis(e,t){return Lu.copy(e).applyQuaternion(this.quaternion),this.position.add(Lu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Iu,e)}translateY(e){return this.translateOnAxis(Uu,e)}translateZ(e){return this.translateOnAxis(Nu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ps.copy(e):ps.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(Ea,ps,this.up):fi.lookAt(ps,Ea,this.up),this.quaternion.setFromRotationMatrix(fi),r&&(fi.extractRotation(r.matrixWorld),Ir.setFromRotationMatrix(fi),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fu),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null):lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(f2),Vo.child=e,this.dispatchEvent(Vo),Vo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fu),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,e,h2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,d2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*i-a[8]*r,a[13]+=i-a[1]*t-a[5]*i-a[9]*r,a[14]+=r-a[2]*t-a[6]*i-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),f=s(e.shapes),u=s(e.skeletons),h=s(e.animations),p=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),h.length>0&&(i.animations=h),p.length>0&&(i.nodes=p)}return i.object=r,i;function s(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}tn.DEFAULT_UP=new N(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Oa extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const p2={type:"move"};class Wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,i),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=d.position.distanceTo(f.position),h=.02,p=.005;c.inputState.pinching&&u>h+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=h-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(p2)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Oa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},ms={h:0,s:0,l:0};function Xo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class dt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=st.workingColorSpace){if(e=zc(e,1),t=rt(t,0,1),i=rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=Xo(s,a,e+1/3),this.g=Xo(s,a,e),this.b=Xo(s,a,e-1/3)}return st.colorSpaceToWorking(this,r),this}setStyle(e,t=yn){function i(a){a!==void 0&&parseFloat(a)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yn){const i=kd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=ta(e.r),this.g=ta(e.g),this.b=ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return st.workingToColorSpace(qt.copy(this),e),Math.round(rt(qt.r*255,0,255))*65536+Math.round(rt(qt.g*255,0,255))*256+Math.round(rt(qt.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(qt.copy(this),t);const i=qt.r,r=qt.g,a=qt.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,c;const d=(o+s)/2;if(o===s)l=0,c=0;else{const f=s-o;switch(c=d<=.5?f/(s+o):f/(2-s-o),s){case i:l=(r-a)/f+(r<a?6:0);break;case r:l=(a-i)/f+2;break;case a:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=yn){st.workingToColorSpace(qt.copy(this),e);const t=qt.r,i=qt.g,r=qt.b;return e!==yn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(ms);const i=Va(Fi.h,ms.h,t),r=Va(Fi.s,ms.s,t),a=Va(Fi.l,ms.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new dt;dt.NAMES=kd;class m2 extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wr,this.environmentIntensity=1,this.environmentRotation=new wr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Fn=new N,pi=new N,qo=new N,mi=new N,Nr=new N,Fr=new N,Ou=new N,Yo=new N,jo=new N,Ko=new N,Zo=new Pt,$o=new Pt,Jo=new Pt;class Gn{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Fn.subVectors(e,t),r.cross(Fn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){Fn.subVectors(r,t),pi.subVectors(i,t),qo.subVectors(e,t);const s=Fn.dot(Fn),o=Fn.dot(pi),l=Fn.dot(qo),c=pi.dot(pi),d=pi.dot(qo),f=s*c-o*o;if(f===0)return a.set(0,0,0),null;const u=1/f,h=(c*l-o*d)*u,p=(s*d-o*l)*u;return a.set(1-h-p,p,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,t,i,r,a,s,o,l){return this.getBarycoord(e,t,i,r,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,mi.x),l.addScaledVector(s,mi.y),l.addScaledVector(o,mi.z),l)}static getInterpolatedAttribute(e,t,i,r,a,s){return Zo.setScalar(0),$o.setScalar(0),Jo.setScalar(0),Zo.fromBufferAttribute(e,t),$o.fromBufferAttribute(e,i),Jo.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Zo,a.x),s.addScaledVector($o,a.y),s.addScaledVector(Jo,a.z),s}static isFrontFacing(e,t,i,r){return Fn.subVectors(i,t),pi.subVectors(e,t),Fn.cross(pi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Fn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,a){return Gn.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let s,o;Nr.subVectors(r,i),Fr.subVectors(a,i),Yo.subVectors(e,i);const l=Nr.dot(Yo),c=Fr.dot(Yo);if(l<=0&&c<=0)return t.copy(i);jo.subVectors(e,r);const d=Nr.dot(jo),f=Fr.dot(jo);if(d>=0&&f<=d)return t.copy(r);const u=l*f-d*c;if(u<=0&&l>=0&&d<=0)return s=l/(l-d),t.copy(i).addScaledVector(Nr,s);Ko.subVectors(e,a);const h=Nr.dot(Ko),p=Fr.dot(Ko);if(p>=0&&h<=p)return t.copy(a);const v=h*c-l*p;if(v<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(i).addScaledVector(Fr,o);const g=d*p-h*f;if(g<=0&&f-d>=0&&h-p>=0)return Ou.subVectors(a,r),o=(f-d)/(f-d+(h-p)),t.copy(r).addScaledVector(Ou,o);const m=1/(g+v+u);return s=v*m,o=u*m,t.copy(i).addScaledVector(Nr,s).addScaledVector(Fr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class rs{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,On):On.fromBufferAttribute(a,s),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gs.copy(i.boundingBox)),gs.applyMatrix4(e.matrixWorld),this.union(gs)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ta),_s.subVectors(this.max,Ta),Or.subVectors(e.a,Ta),Br.subVectors(e.b,Ta),kr.subVectors(e.c,Ta),Oi.subVectors(Br,Or),Bi.subVectors(kr,Br),tr.subVectors(Or,kr);let t=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-tr.z,tr.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,tr.z,0,-tr.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-tr.y,tr.x,0];return!Qo(t,Or,Br,kr,_s)||(t=[1,0,0,0,1,0,0,0,1],!Qo(t,Or,Br,kr,_s))?!1:(vs.crossVectors(Oi,Bi),t=[vs.x,vs.y,vs.z],Qo(t,Or,Br,kr,_s))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const gi=[new N,new N,new N,new N,new N,new N,new N,new N],On=new N,gs=new rs,Or=new N,Br=new N,kr=new N,Oi=new N,Bi=new N,tr=new N,Ta=new N,_s=new N,vs=new N,nr=new N;function Qo(n,e,t,i,r){for(let a=0,s=n.length-3;a<=s;a+=3){nr.fromArray(n,a);const o=r.x*Math.abs(nr.x)+r.y*Math.abs(nr.y)+r.z*Math.abs(nr.z),l=e.dot(nr),c=t.dot(nr),d=i.dot(nr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Dt=new N,xs=new $e;let g2=0;class oi extends Qi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:g2++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Su,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xs.fromBufferAttribute(this,t),xs.applyMatrix3(e),this.setXY(t,xs.x,xs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Xr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xr(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xr(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xr(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),r=$t(r,this.array),a=$t(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Su&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class zd extends oi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Gd extends oi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ot extends oi{constructor(e,t,i){super(new Float32Array(e),t,i)}}const _2=new rs,wa=new N,el=new N;class as{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):_2.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wa.subVectors(e,this.center);const t=wa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(wa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(el.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wa.copy(e.center).add(el)),this.expandByPoint(wa.copy(e.center).sub(el))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let v2=0;const bn=new Tt,tl=new tn,zr=new N,mn=new rs,Aa=new rs,zt=new N;class rn extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:v2++}),this.uuid=xa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fp(e)?Gd:zd)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Ye().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,i){return bn.makeTranslation(e,t,i),this.applyMatrix4(bn),this}scale(e,t,i){return bn.makeScale(e,t,i),this.applyMatrix4(bn),this}lookAt(e){return tl.lookAt(e),tl.updateMatrix(),this.applyMatrix4(tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ot(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];mn.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Aa.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(mn.min,Aa.min),mn.expandByPoint(zt),zt.addVectors(mn.max,Aa.max),mn.expandByPoint(zt)):(mn.expandByPoint(Aa.min),mn.expandByPoint(Aa.max))}mn.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)zt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(zt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)zt.fromBufferAttribute(o,c),l&&(zr.fromBufferAttribute(e,c),zt.add(zr)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new N,l[x]=new N;const c=new N,d=new N,f=new N,u=new $e,h=new $e,p=new $e,v=new N,g=new N;function m(x,T,L){c.fromBufferAttribute(i,x),d.fromBufferAttribute(i,T),f.fromBufferAttribute(i,L),u.fromBufferAttribute(a,x),h.fromBufferAttribute(a,T),p.fromBufferAttribute(a,L),d.sub(c),f.sub(c),h.sub(u),p.sub(u);const A=1/(h.x*p.y-p.x*h.y);isFinite(A)&&(v.copy(d).multiplyScalar(p.y).addScaledVector(f,-h.y).multiplyScalar(A),g.copy(f).multiplyScalar(h.x).addScaledVector(d,-p.x).multiplyScalar(A),o[x].add(v),o[T].add(v),o[L].add(v),l[x].add(g),l[T].add(g),l[L].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,T=M.length;x<T;++x){const L=M[x],A=L.start,F=L.count;for(let W=A,Y=A+F;W<Y;W+=3)m(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const E=new N,b=new N,P=new N,w=new N;function C(x){P.fromBufferAttribute(r,x),w.copy(P);const T=o[x];E.copy(T),E.sub(P.multiplyScalar(P.dot(T))).normalize(),b.crossVectors(w,T);const A=b.dot(l[x])<0?-1:1;s.setXYZW(x,E.x,E.y,E.z,A)}for(let x=0,T=M.length;x<T;++x){const L=M[x],A=L.start,F=L.count;for(let W=A,Y=A+F;W<Y;W+=3)C(e.getX(W+0)),C(e.getX(W+1)),C(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new oi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,h=i.count;u<h;u++)i.setXYZ(u,0,0,0);const r=new N,a=new N,s=new N,o=new N,l=new N,c=new N,d=new N,f=new N;if(e)for(let u=0,h=e.count;u<h;u+=3){const p=e.getX(u+0),v=e.getX(u+1),g=e.getX(u+2);r.fromBufferAttribute(t,p),a.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),d.subVectors(s,a),f.subVectors(r,a),d.cross(f),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),o.add(d),l.add(d),c.add(d),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,h=t.count;u<h;u+=3)r.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),d.subVectors(s,a),f.subVectors(r,a),d.cross(f),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,u=new c.constructor(l.length*d);let h=0,p=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?h=l[v]*o.data.stride+o.offset:h=l[v]*d;for(let m=0;m<d;m++)u[p++]=c[h++]}return new oi(u,d,f)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let d=0,f=c.length;d<f;d++){const u=c[d],h=e(u,i);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,u=c.length;f<u;f++){const h=c[f];d.push(h.toJSON(e.data))}d.length>0&&(r[l]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const a=e.morphAttributes;for(const c in a){const d=[],f=a[c];for(let u=0,h=f.length;u<h;u++)d.push(f[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let x2=0;class ya extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:x2++}),this.uuid=xa(),this.name="",this.type="Material",this.blending=ea,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rl,this.blendDst=Cl,this.blendEquation=ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pr,this.stencilZFail=Pr,this.stencilZPass=Pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ea&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rl&&(i.blendSrc=this.blendSrc),this.blendDst!==Cl&&(i.blendDst=this.blendDst),this.blendEquation!==ar&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Pr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Pr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const _i=new N,nl=new N,ys=new N,ki=new N,il=new N,Ms=new N,rl=new N;class ss{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,t),_i.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){nl.copy(e).add(t).multiplyScalar(.5),ys.copy(t).sub(e).normalize(),ki.copy(this.origin).sub(nl);const a=e.distanceTo(t)*.5,s=-this.direction.dot(ys),o=ki.dot(this.direction),l=-ki.dot(ys),c=ki.lengthSq(),d=Math.abs(1-s*s);let f,u,h,p;if(d>0)if(f=s*l-o,u=s*o-l,p=a*d,f>=0)if(u>=-p)if(u<=p){const v=1/d;f*=v,u*=v,h=f*(f+s*u+2*o)+u*(s*f+u+2*l)+c}else u=a,f=Math.max(0,-(s*u+o)),h=-f*f+u*(u+2*l)+c;else u=-a,f=Math.max(0,-(s*u+o)),h=-f*f+u*(u+2*l)+c;else u<=-p?(f=Math.max(0,-(-s*a+o)),u=f>0?-a:Math.min(Math.max(-a,-l),a),h=-f*f+u*(u+2*l)+c):u<=p?(f=0,u=Math.min(Math.max(-a,-l),a),h=u*(u+2*l)+c):(f=Math.max(0,-(s*a+o)),u=f>0?a:Math.min(Math.max(-a,-l),a),h=-f*f+u*(u+2*l)+c);else u=s>0?-a:a,f=Math.max(0,-(s*u+o)),h=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(nl).addScaledVector(ys,u),h}intersectSphere(e,t){_i.subVectors(e.center,this.origin);const i=_i.dot(this.direction),r=_i.dot(_i)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),d>=0?(a=(e.min.y-u.y)*d,s=(e.max.y-u.y)*d):(a=(e.max.y-u.y)*d,s=(e.min.y-u.y)*d),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,t,i,r,a){il.subVectors(t,e),Ms.subVectors(i,e),rl.crossVectors(il,Ms);let s=this.direction.dot(rl),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;ki.subVectors(this.origin,e);const l=o*this.direction.dot(Ms.crossVectors(ki,Ms));if(l<0)return null;const c=o*this.direction.dot(il.cross(ki));if(c<0||l+c>s)return null;const d=-o*ki.dot(rl);return d<0?null:this.at(d/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zr extends ya{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wr,this.combine=yd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bu=new Tt,ir=new ss,Ss=new as,ku=new N,bs=new N,Es=new N,Ts=new N,al=new N,ws=new N,zu=new N,As=new N;class cn extends tn{constructor(e=new rn,t=new Zr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){ws.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const d=o[l],f=a[l];d!==0&&(al.fromBufferAttribute(f,e),s?ws.addScaledVector(al,d):ws.addScaledVector(al.sub(t),d))}t.add(ws)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ss.copy(i.boundingSphere),Ss.applyMatrix4(a),ir.copy(e.ray).recast(e.near),!(Ss.containsPoint(ir.origin)===!1&&(ir.intersectSphere(Ss,ku)===null||ir.origin.distanceToSquared(ku)>(e.far-e.near)**2))&&(Bu.copy(a).invert(),ir.copy(e.ray).applyMatrix4(Bu),!(i.boundingBox!==null&&ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ir)))}_computeIntersections(e,t,i){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,d=a.attributes.uv1,f=a.attributes.normal,u=a.groups,h=a.drawRange;if(o!==null)if(Array.isArray(s))for(let p=0,v=u.length;p<v;p++){const g=u[p],m=s[g.materialIndex],M=Math.max(g.start,h.start),E=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let b=M,P=E;b<P;b+=3){const w=o.getX(b),C=o.getX(b+1),x=o.getX(b+2);r=Rs(this,m,e,i,c,d,f,w,C,x),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const p=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let g=p,m=v;g<m;g+=3){const M=o.getX(g),E=o.getX(g+1),b=o.getX(g+2);r=Rs(this,s,e,i,c,d,f,M,E,b),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let p=0,v=u.length;p<v;p++){const g=u[p],m=s[g.materialIndex],M=Math.max(g.start,h.start),E=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let b=M,P=E;b<P;b+=3){const w=b,C=b+1,x=b+2;r=Rs(this,m,e,i,c,d,f,w,C,x),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const p=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let g=p,m=v;g<m;g+=3){const M=g,E=g+1,b=g+2;r=Rs(this,s,e,i,c,d,f,M,E,b),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function y2(n,e,t,i,r,a,s,o){let l;if(e.side===hn?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,e.side===Ji,o),l===null)return null;As.copy(o),As.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(As);return c<t.near||c>t.far?null:{distance:c,point:As.clone(),object:n}}function Rs(n,e,t,i,r,a,s,o,l,c){n.getVertexPosition(o,bs),n.getVertexPosition(l,Es),n.getVertexPosition(c,Ts);const d=y2(n,e,t,i,bs,Es,Ts,zu);if(d){const f=new N;Gn.getBarycoord(zu,bs,Es,Ts,f),r&&(d.uv=Gn.getInterpolatedAttribute(r,o,l,c,f,new $e)),a&&(d.uv1=Gn.getInterpolatedAttribute(a,o,l,c,f,new $e)),s&&(d.normal=Gn.getInterpolatedAttribute(s,o,l,c,f,new N),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new N,materialIndex:0};Gn.getNormal(bs,Es,Ts,u.normal),d.face=u,d.barycoord=f}return d}class M2 extends Kt{constructor(e=null,t=1,i=1,r,a,s,o,l,c=Vt,d=Vt,f,u){super(null,s,o,l,c,d,r,a,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sl=new N,S2=new N,b2=new Ye;class Gi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=sl.subVectors(i,t).cross(S2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(sl),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(s<0||s>1)?null:t.copy(e.start).addScaledVector(r,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||b2.getNormalMatrix(e),r=this.coplanarPoint(sl).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new as,E2=new $e(.5,.5),Cs=new N;class Hd{constructor(e=new Gi,t=new Gi,i=new Gi,r=new Gi,a=new Gi,s=new Gi){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ii,i=!1){const r=this.planes,a=e.elements,s=a[0],o=a[1],l=a[2],c=a[3],d=a[4],f=a[5],u=a[6],h=a[7],p=a[8],v=a[9],g=a[10],m=a[11],M=a[12],E=a[13],b=a[14],P=a[15];if(r[0].setComponents(c-s,h-d,m-p,P-M).normalize(),r[1].setComponents(c+s,h+d,m+p,P+M).normalize(),r[2].setComponents(c+o,h+f,m+v,P+E).normalize(),r[3].setComponents(c-o,h-f,m-v,P-E).normalize(),i)r[4].setComponents(l,u,g,b).normalize(),r[5].setComponents(c-l,h-u,m-g,P-b).normalize();else if(r[4].setComponents(c-l,h-u,m-g,P-b).normalize(),t===ii)r[5].setComponents(c+l,h+u,m+g,P+b).normalize();else if(t===fo)r[5].setComponents(l,u,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){rr.center.set(0,0,0);const t=E2.distanceTo(e.center);return rr.radius=.7071067811865476+t,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Cs.x=r.normal.x>0?e.max.x:e.min.x,Cs.y=r.normal.y>0?e.max.y:e.min.y,Cs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Cs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vd extends ya{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mo=new N,go=new N,Gu=new Tt,Ra=new ss,Ps=new as,ol=new N,Hu=new N;class Vu extends tn{constructor(e=new rn,t=new Vd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)mo.fromBufferAttribute(t,r-1),go.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=mo.distanceTo(go);e.setAttribute("lineDistance",new Ot(i,1))}else Ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ps.copy(i.boundingSphere),Ps.applyMatrix4(r),Ps.radius+=a,e.ray.intersectsSphere(Ps)===!1)return;Gu.copy(r).invert(),Ra.copy(e.ray).applyMatrix4(Gu);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){const h=Math.max(0,s.start),p=Math.min(d.count,s.start+s.count);for(let v=h,g=p-1;v<g;v+=c){const m=d.getX(v),M=d.getX(v+1),E=Ds(this,e,Ra,l,m,M,v);E&&t.push(E)}if(this.isLineLoop){const v=d.getX(p-1),g=d.getX(h),m=Ds(this,e,Ra,l,v,g,p-1);m&&t.push(m)}}else{const h=Math.max(0,s.start),p=Math.min(u.count,s.start+s.count);for(let v=h,g=p-1;v<g;v+=c){const m=Ds(this,e,Ra,l,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){const v=Ds(this,e,Ra,l,p-1,h,p-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Ds(n,e,t,i,r,a,s){const o=n.geometry.attributes.position;if(mo.fromBufferAttribute(o,r),go.fromBufferAttribute(o,a),t.distanceSqToSegment(mo,go,ol,Hu)>i)return;ol.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ol);if(!(c<e.near||c>e.far))return{distance:c,point:Hu.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}class T2 extends ya{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Wu=new Tt,mc=new ss,Ls=new as,Is=new N;class w2 extends tn{constructor(e=new rn,t=new T2){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ls.copy(i.boundingSphere),Ls.applyMatrix4(r),Ls.radius+=a,e.ray.intersectsSphere(Ls)===!1)return;Wu.copy(r).invert(),mc.copy(e.ray).applyMatrix4(Wu);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const u=Math.max(0,s.start),h=Math.min(c.count,s.start+s.count);for(let p=u,v=h;p<v;p++){const g=c.getX(p);Is.fromBufferAttribute(f,g),Xu(Is,g,l,r,e,t,this)}}else{const u=Math.max(0,s.start),h=Math.min(f.count,s.start+s.count);for(let p=u,v=h;p<v;p++)Is.fromBufferAttribute(f,p),Xu(Is,p,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Xu(n,e,t,i,r,a,s){const o=mc.distanceSqToPoint(n);if(o<t){const l=new N;mc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class Wd extends Kt{constructor(e=[],t=Er,i,r,a,s,o,l,c,d){super(e,t,i,r,a,s,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class A2 extends Kt{constructor(e,t,i,r,a,s,o,l,c){super(e,t,i,r,a,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ma extends Kt{constructor(e,t,i=ci,r,a,s,o=Vt,l=Vt,c,d=Ri,f=1){if(d!==Ri&&d!==ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,r,a,s,o,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class R2 extends ma{constructor(e,t=ci,i=Er,r,a,s=Vt,o=Vt,l,c=Ri){const d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,i,r,a,s,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Xd extends Kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class os extends rn{constructor(e=1,t=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],d=[],f=[];let u=0,h=0;p("z","y","x",-1,-1,i,t,e,s,a,0),p("z","y","x",1,-1,i,t,-e,s,a,1),p("x","z","y",1,1,e,i,t,r,s,2),p("x","z","y",1,-1,e,i,-t,r,s,3),p("x","y","z",1,-1,e,t,i,r,a,4),p("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(d,3)),this.setAttribute("uv",new Ot(f,2));function p(v,g,m,M,E,b,P,w,C,x,T){const L=b/C,A=P/x,F=b/2,W=P/2,Y=w/2,I=C+1,H=x+1;let k=0,ee=0;const re=new N;for(let ge=0;ge<H;ge++){const ie=ge*A-W;for(let fe=0;fe<I;fe++){const Fe=fe*L-F;re[v]=Fe*M,re[g]=ie*E,re[m]=Y,c.push(re.x,re.y,re.z),re[v]=0,re[g]=0,re[m]=w>0?1:-1,d.push(re.x,re.y,re.z),f.push(fe/C),f.push(1-ge/x),k+=1}}for(let ge=0;ge<x;ge++)for(let ie=0;ie<C;ie++){const fe=u+ie+I*ge,Fe=u+ie+I*(ge+1),pe=u+(ie+1)+I*(ge+1),Ce=u+(ie+1)+I*ge;l.push(fe,Fe,Ce),l.push(Fe,pe,Ce),ee+=6}o.addGroup(h,ee,T),h+=ee,u+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Vc extends rn{constructor(e=1,t=1,i=1,r=32,a=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),a=Math.floor(a);const d=[],f=[],u=[],h=[];let p=0;const v=[],g=i/2;let m=0;M(),s===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(d),this.setAttribute("position",new Ot(f,3)),this.setAttribute("normal",new Ot(u,3)),this.setAttribute("uv",new Ot(h,2));function M(){const b=new N,P=new N;let w=0;const C=(t-e)/i;for(let x=0;x<=a;x++){const T=[],L=x/a,A=L*(t-e)+e;for(let F=0;F<=r;F++){const W=F/r,Y=W*l+o,I=Math.sin(Y),H=Math.cos(Y);P.x=A*I,P.y=-L*i+g,P.z=A*H,f.push(P.x,P.y,P.z),b.set(I,C,H).normalize(),u.push(b.x,b.y,b.z),h.push(W,1-L),T.push(p++)}v.push(T)}for(let x=0;x<r;x++)for(let T=0;T<a;T++){const L=v[T][x],A=v[T+1][x],F=v[T+1][x+1],W=v[T][x+1];(e>0||T!==0)&&(d.push(L,A,W),w+=3),(t>0||T!==a-1)&&(d.push(A,F,W),w+=3)}c.addGroup(m,w,0),m+=w}function E(b){const P=p,w=new $e,C=new N;let x=0;const T=b===!0?e:t,L=b===!0?1:-1;for(let F=1;F<=r;F++)f.push(0,g*L,0),u.push(0,L,0),h.push(.5,.5),p++;const A=p;for(let F=0;F<=r;F++){const Y=F/r*l+o,I=Math.cos(Y),H=Math.sin(Y);C.x=T*H,C.y=g*L,C.z=T*I,f.push(C.x,C.y,C.z),u.push(0,L,0),w.x=I*.5+.5,w.y=H*.5*L+.5,h.push(w.x,w.y),p++}for(let F=0;F<r;F++){const W=P+F,Y=A+F;b===!0?d.push(Y,Y+1,W):d.push(Y+1,Y,W),x+=3}c.addGroup(m,x,b===!0?1:2),m+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wo extends rn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,f=e/o,u=t/l,h=[],p=[],v=[],g=[];for(let m=0;m<d;m++){const M=m*u-s;for(let E=0;E<c;E++){const b=E*f-a;p.push(b,-M,0),v.push(0,0,1),g.push(E/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){const E=M+c*m,b=M+c*(m+1),P=M+1+c*(m+1),w=M+1+c*m;h.push(E,b,w),h.push(b,P,w)}this.setIndex(h),this.setAttribute("position",new Ot(p,3)),this.setAttribute("normal",new Ot(v,3)),this.setAttribute("uv",new Ot(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wc extends rn{constructor(e=.5,t=1,i=32,r=1,a=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:a,thetaLength:s},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],d=[];let f=e;const u=(t-e)/r,h=new N,p=new $e;for(let v=0;v<=r;v++){for(let g=0;g<=i;g++){const m=a+g/i*s;h.x=f*Math.cos(m),h.y=f*Math.sin(m),l.push(h.x,h.y,h.z),c.push(0,0,1),p.x=(h.x/t+1)/2,p.y=(h.y/t+1)/2,d.push(p.x,p.y)}f+=u}for(let v=0;v<r;v++){const g=v*(i+1);for(let m=0;m<i;m++){const M=m+g,E=M,b=M+i+1,P=M+i+2,w=M+1;o.push(E,b,w),o.push(b,P,w)}}this.setIndex(o),this.setAttribute("position",new Ot(l,3)),this.setAttribute("normal",new Ot(c,3)),this.setAttribute("uv",new Ot(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class _o extends rn{constructor(e=1,t=32,i=16,r=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(s+o,Math.PI);let c=0;const d=[],f=new N,u=new N,h=[],p=[],v=[],g=[];for(let m=0;m<=i;m++){const M=[],E=m/i;let b=0;m===0&&s===0?b=.5/t:m===i&&l===Math.PI&&(b=-.5/t);for(let P=0;P<=t;P++){const w=P/t;f.x=-e*Math.cos(r+w*a)*Math.sin(s+E*o),f.y=e*Math.cos(s+E*o),f.z=e*Math.sin(r+w*a)*Math.sin(s+E*o),p.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),g.push(w+b,1-E),M.push(c++)}d.push(M)}for(let m=0;m<i;m++)for(let M=0;M<t;M++){const E=d[m][M+1],b=d[m][M],P=d[m+1][M],w=d[m+1][M+1];(m!==0||s>0)&&h.push(E,b,w),(m!==i-1||l<Math.PI)&&h.push(b,P,w)}this.setIndex(h),this.setAttribute("position",new Ot(p,3)),this.setAttribute("normal",new Ot(v,3)),this.setAttribute("uv",new Ot(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ga(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(qu(r))r.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(qu(r[0])){const a=[];for(let s=0,o=r.length;s<o;s++)a[s]=r[s].clone();e[t][i]=a}else e[t][i]=r.slice();else e[t][i]=r}}return e}function Jt(n){const e={};for(let t=0;t<n.length;t++){const i=ga(n[t]);for(const r in i)e[r]=i[r]}return e}function qu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function C2(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function qd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const P2={clone:ga,merge:Jt};var D2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends ya{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=D2,this.fragmentShader=L2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ga(e.uniforms),this.uniformsGroups=C2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class I2 extends ui{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class U2 extends ya{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class N2 extends ya{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class F2 extends Vd{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const Us=new N,Ns=new qn,Zn=new N;class Yd extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Us,Ns,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Us,Ns,Zn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Us,Ns,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Us,Ns,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const zi=new N,Yu=new $e,ju=new $e;class Rn extends Yd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ja*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ja*2*Math.atan(Math.tan(Ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,t){return this.getViewBounds(e,Yu,ju),t.subVectors(ju,Yu)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ha*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class jd extends Yd{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gr=-90,Hr=1;class O2 extends tn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rn(Gr,Hr,e,t);r.layers=this.layers,this.add(r);const a=new Rn(Gr,Hr,e,t);a.layers=this.layers,this.add(a);const s=new Rn(Gr,Hr,e,t);s.layers=this.layers,this.add(s);const o=new Rn(Gr,Hr,e,t);o.layers=this.layers,this.add(o);const l=new Rn(Gr,Hr,e,t);l.layers=this.layers,this.add(l);const c=new Rn(Gr,Hr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,u,h),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class B2 extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ku=new Tt;class k2{constructor(e,t,i=0,r=1/0){this.ray=new ss(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Hc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):lt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ku.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ku),this}intersectObject(e,t=!0,i=[]){return gc(e,this,i,t),i.sort(Zu),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)gc(e[r],this,i,t);return i.sort(Zu),i}}function Zu(n,e){return n.distance-e.distance}function gc(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const a=n.children;for(let s=0,o=a.length;s<o;s++)gc(a[s],e,t,!0)}}class $u{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=rt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Zc=class Zc{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const a=this.elements;return a[0]=e,a[2]=t,a[1]=i,a[3]=r,this}};Zc.prototype.isMatrix2=!0;let Ju=Zc;class z2 extends Qi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ve("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Qu(n,e,t,i){const r=G2(i);switch(t){case Id:return n*e;case Nd:return n*e/r.components*r.byteLength;case Nc:return n*e/r.components*r.byteLength;case Tr:return n*e*2/r.components*r.byteLength;case Fc:return n*e*2/r.components*r.byteLength;case Ud:return n*e*3/r.components*r.byteLength;case Wn:return n*e*4/r.components*r.byteLength;case Oc:return n*e*4/r.components*r.byteLength;case js:case Ks:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zs:case $s:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kl:case Gl:return Math.max(n,16)*Math.max(e,8)/4;case Bl:case zl:return Math.max(n,8)*Math.max(e,8)/2;case Hl:case Vl:case Xl:case ql:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Wl:case lo:case Yl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Zl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case $l:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ec:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case tc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case nc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ic:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case rc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ac:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case sc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case oc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case lc:case cc:case uc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case hc:case dc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case co:case fc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function G2(n){switch(n){case Cn:case Cd:return{byteLength:1,components:1};case qa:case Pd:case Ai:return{byteLength:2,components:1};case Ic:case Uc:return{byteLength:2,components:4};case ci:case Lc:case ni:return{byteLength:4,components:1};case Dd:case Ld:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dc}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Kd(){let n=null,e=!1,t=null,i=null;function r(a,s){t(a,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function H2(n){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,d),o.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const d=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,d);else{f.sort((h,p)=>h.start-p.start);let u=0;for(let h=1;h<f.length;h++){const p=f[u],v=f[h];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++u,f[u]=v)}f.length=u+1;for(let h=0,p=f.length;h<p;h++){const v=f[h];n.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}var V2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,W2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,X2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,q2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,j2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,K2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Z2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,J2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Q2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,e0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,n0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,i0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,c0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,u0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,h0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,d0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,f0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,p0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,m0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,g0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,v0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,x0="gl_FragColor = linearToOutputTexel( gl_FragColor );",y0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,M0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,S0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,b0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,E0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,w0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,R0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,D0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,U0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,N0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,F0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,B0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,G0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,H0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,V0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,W0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,X0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,q0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Y0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Z0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Q0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,em=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,im=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,am=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,om=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,xm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ym=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Em=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Am=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Im=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Om=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$m=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,e3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,n3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,r3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,l3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,u3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,h3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,p3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,v3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,x3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,S3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:V2,alphahash_pars_fragment:W2,alphamap_fragment:X2,alphamap_pars_fragment:q2,alphatest_fragment:Y2,alphatest_pars_fragment:j2,aomap_fragment:K2,aomap_pars_fragment:Z2,batching_pars_vertex:$2,batching_vertex:J2,begin_vertex:Q2,beginnormal_vertex:e0,bsdfs:t0,iridescence_fragment:n0,bumpmap_pars_fragment:i0,clipping_planes_fragment:r0,clipping_planes_pars_fragment:a0,clipping_planes_pars_vertex:s0,clipping_planes_vertex:o0,color_fragment:l0,color_pars_fragment:c0,color_pars_vertex:u0,color_vertex:h0,common:d0,cube_uv_reflection_fragment:f0,defaultnormal_vertex:p0,displacementmap_pars_vertex:m0,displacementmap_vertex:g0,emissivemap_fragment:_0,emissivemap_pars_fragment:v0,colorspace_fragment:x0,colorspace_pars_fragment:y0,envmap_fragment:M0,envmap_common_pars_fragment:S0,envmap_pars_fragment:b0,envmap_pars_vertex:E0,envmap_physical_pars_fragment:N0,envmap_vertex:T0,fog_vertex:w0,fog_pars_vertex:A0,fog_fragment:R0,fog_pars_fragment:C0,gradientmap_pars_fragment:P0,lightmap_pars_fragment:D0,lights_lambert_fragment:L0,lights_lambert_pars_fragment:I0,lights_pars_begin:U0,lights_toon_fragment:F0,lights_toon_pars_fragment:O0,lights_phong_fragment:B0,lights_phong_pars_fragment:k0,lights_physical_fragment:z0,lights_physical_pars_fragment:G0,lights_fragment_begin:H0,lights_fragment_maps:V0,lights_fragment_end:W0,lightprobes_pars_fragment:X0,logdepthbuf_fragment:q0,logdepthbuf_pars_fragment:Y0,logdepthbuf_pars_vertex:j0,logdepthbuf_vertex:K0,map_fragment:Z0,map_pars_fragment:$0,map_particle_fragment:J0,map_particle_pars_fragment:Q0,metalnessmap_fragment:em,metalnessmap_pars_fragment:tm,morphinstance_vertex:nm,morphcolor_vertex:im,morphnormal_vertex:rm,morphtarget_pars_vertex:am,morphtarget_vertex:sm,normal_fragment_begin:om,normal_fragment_maps:lm,normal_pars_fragment:cm,normal_pars_vertex:um,normal_vertex:hm,normalmap_pars_fragment:dm,clearcoat_normal_fragment_begin:fm,clearcoat_normal_fragment_maps:pm,clearcoat_pars_fragment:mm,iridescence_pars_fragment:gm,opaque_fragment:_m,packing:vm,premultiplied_alpha_fragment:xm,project_vertex:ym,dithering_fragment:Mm,dithering_pars_fragment:Sm,roughnessmap_fragment:bm,roughnessmap_pars_fragment:Em,shadowmap_pars_fragment:Tm,shadowmap_pars_vertex:wm,shadowmap_vertex:Am,shadowmask_pars_fragment:Rm,skinbase_vertex:Cm,skinning_pars_vertex:Pm,skinning_vertex:Dm,skinnormal_vertex:Lm,specularmap_fragment:Im,specularmap_pars_fragment:Um,tonemapping_fragment:Nm,tonemapping_pars_fragment:Fm,transmission_fragment:Om,transmission_pars_fragment:Bm,uv_pars_fragment:km,uv_pars_vertex:zm,uv_vertex:Gm,worldpos_vertex:Hm,background_vert:Vm,background_frag:Wm,backgroundCube_vert:Xm,backgroundCube_frag:qm,cube_vert:Ym,cube_frag:jm,depth_vert:Km,depth_frag:Zm,distance_vert:$m,distance_frag:Jm,equirect_vert:Qm,equirect_frag:e3,linedashed_vert:t3,linedashed_frag:n3,meshbasic_vert:i3,meshbasic_frag:r3,meshlambert_vert:a3,meshlambert_frag:s3,meshmatcap_vert:o3,meshmatcap_frag:l3,meshnormal_vert:c3,meshnormal_frag:u3,meshphong_vert:h3,meshphong_frag:d3,meshphysical_vert:f3,meshphysical_frag:p3,meshtoon_vert:m3,meshtoon_frag:g3,points_vert:_3,points_frag:v3,shadow_vert:x3,shadow_frag:y3,sprite_vert:M3,sprite_frag:S3},xe={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},ei={basic:{uniforms:Jt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Jt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new dt(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Jt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Jt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Jt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new dt(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Jt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Jt([xe.points,xe.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Jt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Jt([xe.common,xe.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Jt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Jt([xe.sprite,xe.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:Jt([xe.common,xe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:Jt([xe.lights,xe.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};ei.physical={uniforms:Jt([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Fs={r:0,b:0,g:0},b3=new Tt,Zd=new Ye;Zd.set(-1,0,0,0,1,0,0,0,1);function E3(n,e,t,i,r,a){const s=new dt(0);let o=r===!0?0:1,l,c,d=null,f=0,u=null;function h(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){const b=M.backgroundBlurriness>0;E=e.get(E,b)}return E}function p(M){let E=!1;const b=h(M);b===null?g(s,o):b&&b.isColor&&(g(b,1),E=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(M,E){const b=h(E);b&&(b.isCubeTexture||b.mapping===To)?(c===void 0&&(c=new cn(new os(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:ga(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(b3.makeRotationFromEuler(E.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Zd),c.material.toneMapped=st.getTransfer(b.colorSpace)!==ft,(d!==b||f!==b.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,d=b,f=b.version,u=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new cn(new wo(2,2),new ui({name:"BackgroundMaterial",uniforms:ga(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=st.getTransfer(b.colorSpace)!==ft,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||f!==b.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,d=b,f=b.version,u=n.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,E){M.getRGB(Fs,qd(n)),t.buffers.color.setClear(Fs.r,Fs.g,Fs.b,E,a)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(M,E=1){s.set(M),o=E,g(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(s,o)},render:p,addToRenderList:v,dispose:m}}function T3(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let a=r,s=!1;function o(A,F,W,Y,I){let H=!1;const k=f(A,Y,W,F);a!==k&&(a=k,c(a.object)),H=h(A,Y,W,I),H&&p(A,Y,W,I),I!==null&&e.update(I,n.ELEMENT_ARRAY_BUFFER),(H||s)&&(s=!1,b(A,F,W,Y),I!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return n.createVertexArray()}function c(A){return n.bindVertexArray(A)}function d(A){return n.deleteVertexArray(A)}function f(A,F,W,Y){const I=Y.wireframe===!0;let H=i[F.id];H===void 0&&(H={},i[F.id]=H);const k=A.isInstancedMesh===!0?A.id:0;let ee=H[k];ee===void 0&&(ee={},H[k]=ee);let re=ee[W.id];re===void 0&&(re={},ee[W.id]=re);let ge=re[I];return ge===void 0&&(ge=u(l()),re[I]=ge),ge}function u(A){const F=[],W=[],Y=[];for(let I=0;I<t;I++)F[I]=0,W[I]=0,Y[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:Y,object:A,attributes:{},index:null}}function h(A,F,W,Y){const I=a.attributes,H=F.attributes;let k=0;const ee=W.getAttributes();for(const re in ee)if(ee[re].location>=0){const ie=I[re];let fe=H[re];if(fe===void 0&&(re==="instanceMatrix"&&A.instanceMatrix&&(fe=A.instanceMatrix),re==="instanceColor"&&A.instanceColor&&(fe=A.instanceColor)),ie===void 0||ie.attribute!==fe||fe&&ie.data!==fe.data)return!0;k++}return a.attributesNum!==k||a.index!==Y}function p(A,F,W,Y){const I={},H=F.attributes;let k=0;const ee=W.getAttributes();for(const re in ee)if(ee[re].location>=0){let ie=H[re];ie===void 0&&(re==="instanceMatrix"&&A.instanceMatrix&&(ie=A.instanceMatrix),re==="instanceColor"&&A.instanceColor&&(ie=A.instanceColor));const fe={};fe.attribute=ie,ie&&ie.data&&(fe.data=ie.data),I[re]=fe,k++}a.attributes=I,a.attributesNum=k,a.index=Y}function v(){const A=a.newAttributes;for(let F=0,W=A.length;F<W;F++)A[F]=0}function g(A){m(A,0)}function m(A,F){const W=a.newAttributes,Y=a.enabledAttributes,I=a.attributeDivisors;W[A]=1,Y[A]===0&&(n.enableVertexAttribArray(A),Y[A]=1),I[A]!==F&&(n.vertexAttribDivisor(A,F),I[A]=F)}function M(){const A=a.newAttributes,F=a.enabledAttributes;for(let W=0,Y=F.length;W<Y;W++)F[W]!==A[W]&&(n.disableVertexAttribArray(W),F[W]=0)}function E(A,F,W,Y,I,H,k){k===!0?n.vertexAttribIPointer(A,F,W,I,H):n.vertexAttribPointer(A,F,W,Y,I,H)}function b(A,F,W,Y){v();const I=Y.attributes,H=W.getAttributes(),k=F.defaultAttributeValues;for(const ee in H){const re=H[ee];if(re.location>=0){let ge=I[ee];if(ge===void 0&&(ee==="instanceMatrix"&&A.instanceMatrix&&(ge=A.instanceMatrix),ee==="instanceColor"&&A.instanceColor&&(ge=A.instanceColor)),ge!==void 0){const ie=ge.normalized,fe=ge.itemSize,Fe=e.get(ge);if(Fe===void 0)continue;const pe=Fe.buffer,Ce=Fe.type,j=Fe.bytesPerElement,_e=Ce===n.INT||Ce===n.UNSIGNED_INT||ge.gpuType===Lc;if(ge.isInterleavedBufferAttribute){const ae=ge.data,ve=ae.stride,we=ge.offset;if(ae.isInstancedInterleavedBuffer){for(let Se=0;Se<re.locationSize;Se++)m(re.location+Se,ae.meshPerAttribute);A.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Se=0;Se<re.locationSize;Se++)g(re.location+Se);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let Se=0;Se<re.locationSize;Se++)E(re.location+Se,fe/re.locationSize,Ce,ie,ve*j,(we+fe/re.locationSize*Se)*j,_e)}else{if(ge.isInstancedBufferAttribute){for(let ae=0;ae<re.locationSize;ae++)m(re.location+ae,ge.meshPerAttribute);A.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let ae=0;ae<re.locationSize;ae++)g(re.location+ae);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let ae=0;ae<re.locationSize;ae++)E(re.location+ae,fe/re.locationSize,Ce,ie,fe*j,fe/re.locationSize*ae*j,_e)}}else if(k!==void 0){const ie=k[ee];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(re.location,ie);break;case 3:n.vertexAttrib3fv(re.location,ie);break;case 4:n.vertexAttrib4fv(re.location,ie);break;default:n.vertexAttrib1fv(re.location,ie)}}}}M()}function P(){T();for(const A in i){const F=i[A];for(const W in F){const Y=F[W];for(const I in Y){const H=Y[I];for(const k in H)d(H[k].object),delete H[k];delete Y[I]}}delete i[A]}}function w(A){if(i[A.id]===void 0)return;const F=i[A.id];for(const W in F){const Y=F[W];for(const I in Y){const H=Y[I];for(const k in H)d(H[k].object),delete H[k];delete Y[I]}}delete i[A.id]}function C(A){for(const F in i){const W=i[F];for(const Y in W){const I=W[Y];if(I[A.id]===void 0)continue;const H=I[A.id];for(const k in H)d(H[k].object),delete H[k];delete I[A.id]}}}function x(A){for(const F in i){const W=i[F],Y=A.isInstancedMesh===!0?A.id:0,I=W[Y];if(I!==void 0){for(const H in I){const k=I[H];for(const ee in k)d(k[ee].object),delete k[ee];delete I[H]}delete W[Y],Object.keys(W).length===0&&delete i[F]}}}function T(){L(),s=!0,a!==r&&(a=r,c(a.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:L,dispose:P,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:g,disableUnusedAttributes:M}}function w3(n,e,t){let i;function r(l){i=l}function a(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function s(l,c,d){d!==0&&(n.drawArraysInstanced(i,l,c,d),t.update(c,i,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,d);let u=0;for(let h=0;h<d;h++)u+=c[h];t.update(u,i,1)}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o}function A3(n,e,t,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(C){return!(C!==Wn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const x=C===Ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Cn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ni&&!x)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(Ve("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:h,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:b,maxSamples:P,samples:w}}function R3(n){const e=this;let t=null,i=0,r=!1,a=!1;const s=new Gi,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const h=f.length!==0||u||i!==0||r;return r=u,i=f.length,h},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,u){t=d(f,u,0)},this.setState=function(f,u,h){const p=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,m=n.get(f);if(!r||p===null||p.length===0||a&&!g)a?d(null):c();else{const M=a?0:i,E=M*4;let b=m.clippingState||null;l.value=b,b=d(p,u,E,h);for(let P=0;P!==E;++P)b[P]=t[P];m.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,u,h,p){const v=f!==null?f.length:0;let g=null;if(v!==0){if(g=l.value,p!==!0||g===null){const m=h+v*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let E=0,b=h;E!==v;++E,b+=4)s.copy(f[E]).applyMatrix4(M,o),s.normal.toArray(g,b),g[b+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}const Yi=4,eh=[.125,.215,.35,.446,.526,.582],sr=20,C3=256,Ca=new jd,th=new dt;let ll=null,cl=0,ul=0,hl=!1;const P3=new N;class nh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){const{size:s=256,position:o=P3}=a;ll=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),ul=this._renderer.getActiveMipmapLevel(),hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ll,cl,ul),this._renderer.xr.enabled=hl,e.scissorTest=!1,Vr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Er||e.mapping===pa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ll=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),ul=this._renderer.getActiveMipmapLevel(),hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:Ai,format:Wn,colorSpace:uo,depthBuffer:!1},r=ih(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ih(e,t,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=D3(a)),this._blurMaterial=I3(a,e,t),this._ggxMaterial=L3(a,e,t)}return r}_compileMaterial(e){const t=new cn(new rn,e);this._renderer.compile(t,Ca)}_sceneToCubeUV(e,t,i,r,a){const l=new Rn(90,1,t,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,h=f.toneMapping;f.getClearColor(th),f.toneMapping=ai,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new cn(new os,new Zr({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let m=!1;const M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,m=!0):(g.color.copy(th),m=!0);for(let E=0;E<6;E++){const b=E%3;b===0?(l.up.set(0,c[E],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+d[E],a.y,a.z)):b===1?(l.up.set(0,0,c[E]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+d[E],a.z)):(l.up.set(0,c[E],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+d[E]));const P=this._cubeSize;Vr(r,b*P,E>2?P:0,P,P),f.setRenderTarget(r),m&&f.render(v,l),f.render(e,l)}f.toneMapping=h,f.autoClear=u,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Er||e.mapping===pa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rh());const a=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=a;const o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Vr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,Ca)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,a=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[i];o.material=s;const l=s.uniforms,c=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-d*d),u=0+c*1.25,h=f*u,{_lodMax:p}=this,v=this._sizeLods[i],g=3*v*(i>p-Yi?i-p+Yi:0),m=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=p-t,Vr(a,g,m,3*v,2*v),r.setRenderTarget(a),r.render(o,Ca),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=p-i,Vr(e,g,m,3*v,2*v),r.setRenderTarget(e),r.render(o,Ca)}_blur(e,t,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&lt("blur direction must be either latitudinal or longitudinal!");const d=3,f=this._lodMeshes[r];f.material=c;const u=c.uniforms,h=this._sizeLods[i]-1,p=isFinite(a)?Math.PI/(2*h):2*Math.PI/(2*sr-1),v=a/p,g=isFinite(a)?1+Math.floor(d*v):sr;g>sr&&Ve(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${sr}`);const m=[];let M=0;for(let C=0;C<sr;++C){const x=C/v,T=Math.exp(-x*x/2);m.push(T),C===0?M+=T:C<g&&(M+=2*T)}for(let C=0;C<m.length;C++)m[C]=m[C]/M;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=m,u.latitudinal.value=s==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:E}=this;u.dTheta.value=p,u.mipInt.value=E-i;const b=this._sizeLods[r],P=3*b*(r>E-Yi?r-E+Yi:0),w=4*(this._cubeSize-b);Vr(t,P,w,3*b,2*b),l.setRenderTarget(t),l.render(f,Ca)}}function D3(n){const e=[],t=[],i=[];let r=n;const a=n-Yi+1+eh.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);e.push(o);let l=1/o;s>n-Yi?l=eh[s-n+Yi-1]:s===0&&(l=0),t.push(l);const c=1/(o-2),d=-c,f=1+c,u=[d,d,f,d,f,f,d,d,f,f,d,f],h=6,p=6,v=3,g=2,m=1,M=new Float32Array(v*p*h),E=new Float32Array(g*p*h),b=new Float32Array(m*p*h);for(let w=0;w<h;w++){const C=w%3*2/3-1,x=w>2?0:-1,T=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];M.set(T,v*p*w),E.set(u,g*p*w);const L=[w,w,w,w,w,w];b.set(L,m*p*w)}const P=new rn;P.setAttribute("position",new oi(M,v)),P.setAttribute("uv",new oi(E,g)),P.setAttribute("faceIndex",new oi(b,m)),i.push(new cn(P,null)),r>Yi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function ih(n,e,t){const i=new si(n,e,t);return i.texture.mapping=To,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function L3(n,e,t){return new ui({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:C3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ao(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function I3(n,e,t){const i=new Float32Array(sr),r=new N(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function rh(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function ah(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Ao(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class $d extends si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Wd(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new os(5,5,5),a=new ui({name:"CubemapFromEquirect",uniforms:ga(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Ei});a.uniforms.tEquirect.value=t;const s=new cn(r,a),o=t.minFilter;return t.minFilter===cr&&(t.minFilter=Yt),new O2(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}}function U3(n){let e=new WeakMap,t=new WeakMap,i=null;function r(u,h=!1){return u==null?null:h?s(u):a(u)}function a(u){if(u&&u.isTexture){const h=u.mapping;if(h===Fo||h===Oo)if(e.has(u)){const p=e.get(u).texture;return o(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const v=new $d(p.height);return v.fromEquirectangularTexture(n,u),e.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){const h=u.mapping,p=h===Fo||h===Oo,v=h===Er||h===pa;if(p||v){let g=t.get(u);const m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new nh(n)),g=p?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{const M=u.image;return p&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new nh(n)),g=p?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",d),g.texture):null}}}return u}function o(u,h){return h===Fo?u.mapping=Er:h===Oo&&(u.mapping=pa),u}function l(u){let h=0;const p=6;for(let v=0;v<p;v++)u[v]!==void 0&&h++;return h===p}function c(u){const h=u.target;h.removeEventListener("dispose",c);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function d(u){const h=u.target;h.removeEventListener("dispose",d);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function N3(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&pc("WebGLRenderer: "+i+" extension not supported."),r}}}function F3(n,e,t,i){const r={},a=new WeakMap;function s(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const p in u.attributes)e.remove(u.attributes[p]);u.removeEventListener("dispose",s),delete r[u.id];const h=a.get(u);h&&(e.remove(h),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return r[u.id]===!0||(u.addEventListener("dispose",s),r[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const h in u)e.update(u[h],n.ARRAY_BUFFER)}function c(f){const u=[],h=f.index,p=f.attributes.position;let v=0;if(p===void 0)return;if(h!==null){const M=h.array;v=h.version;for(let E=0,b=M.length;E<b;E+=3){const P=M[E+0],w=M[E+1],C=M[E+2];u.push(P,w,w,C,C,P)}}else{const M=p.array;v=p.version;for(let E=0,b=M.length/3-1;E<b;E+=3){const P=E+0,w=E+1,C=E+2;u.push(P,w,w,C,C,P)}}const g=new(p.count>=65535?Gd:zd)(u,1);g.version=v;const m=a.get(f);m&&e.remove(m),a.set(f,g)}function d(f){const u=a.get(f);if(u){const h=f.index;h!==null&&u.version<h.version&&c(f)}else c(f);return a.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function O3(n,e,t){let i;function r(f){i=f}let a,s;function o(f){a=f.type,s=f.bytesPerElement}function l(f,u){n.drawElements(i,u,a,f*s),t.update(u,i,1)}function c(f,u,h){h!==0&&(n.drawElementsInstanced(i,u,a,f*s,h),t.update(u,i,h))}function d(f,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,a,f,0,h);let v=0;for(let g=0;g<h;g++)v+=u[g];t.update(v,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function B3(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:lt("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function k3(n,e,t){const i=new WeakMap,r=new Pt;function a(s,o,l){const c=s.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let u=i.get(o);if(u===void 0||u.count!==f){let L=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",L)};var h=L;u!==void 0&&u.texture.dispose();const p=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let b=0;p===!0&&(b=1),v===!0&&(b=2),g===!0&&(b=3);let P=o.attributes.position.count*b,w=1;P>e.maxTextureSize&&(w=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const C=new Float32Array(P*w*4*f),x=new Bd(C,P,w,f);x.type=ni,x.needsUpdate=!0;const T=b*4;for(let A=0;A<f;A++){const F=m[A],W=M[A],Y=E[A],I=P*w*4*A;for(let H=0;H<F.count;H++){const k=H*T;p===!0&&(r.fromBufferAttribute(F,H),C[I+k+0]=r.x,C[I+k+1]=r.y,C[I+k+2]=r.z,C[I+k+3]=0),v===!0&&(r.fromBufferAttribute(W,H),C[I+k+4]=r.x,C[I+k+5]=r.y,C[I+k+6]=r.z,C[I+k+7]=0),g===!0&&(r.fromBufferAttribute(Y,H),C[I+k+8]=r.x,C[I+k+9]=r.y,C[I+k+10]=r.z,C[I+k+11]=Y.itemSize===4?r.w:1)}}u={count:f,texture:x,size:new $e(P,w)},i.set(o,u),o.addEventListener("dispose",L)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const v=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:a}}function z3(n,e,t,i,r){let a=new WeakMap;function s(c){const d=r.render.frame,f=c.geometry,u=e.get(c,f);if(a.get(u)!==d&&(e.update(u),a.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==d&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),a.set(c,d))),c.isSkinnedMesh){const h=c.skeleton;a.get(h)!==d&&(h.update(),a.set(h,d))}return u}function o(){a=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:s,dispose:o}}const G3={[Md]:"LINEAR_TONE_MAPPING",[Sd]:"REINHARD_TONE_MAPPING",[bd]:"CINEON_TONE_MAPPING",[Ed]:"ACES_FILMIC_TONE_MAPPING",[wd]:"AGX_TONE_MAPPING",[Ad]:"NEUTRAL_TONE_MAPPING",[Td]:"CUSTOM_TONE_MAPPING"};function H3(n,e,t,i,r){const a=new si(e,t,{type:n,depthBuffer:i,stencilBuffer:r,depthTexture:i?new ma(e,t):void 0}),s=new si(e,t,{type:Ai,depthBuffer:!1,stencilBuffer:!1}),o=new rn;o.setAttribute("position",new Ot([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ot([0,2,0,0,2,0],2));const l=new I2({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new cn(o,l),d=new jd(-1,1,1,-1,0,1);let f=null,u=null,h=!1,p,v=null,g=[],m=!1;this.setSize=function(M,E){a.setSize(M,E),s.setSize(M,E);for(let b=0;b<g.length;b++){const P=g[b];P.setSize&&P.setSize(M,E)}},this.setEffects=function(M){g=M,m=g.length>0&&g[0].isRenderPass===!0;const E=a.width,b=a.height;for(let P=0;P<g.length;P++){const w=g[P];w.setSize&&w.setSize(E,b)}},this.begin=function(M,E){if(h||M.toneMapping===ai&&g.length===0)return!1;if(v=E,E!==null){const b=E.width,P=E.height;(a.width!==b||a.height!==P)&&this.setSize(b,P)}return m===!1&&M.setRenderTarget(a),p=M.toneMapping,M.toneMapping=ai,!0},this.hasRenderPass=function(){return m},this.end=function(M,E){M.toneMapping=p,h=!0;let b=a,P=s;for(let w=0;w<g.length;w++){const C=g[w];if(C.enabled!==!1&&(C.render(M,P,b,E),C.needsSwap!==!1)){const x=b;b=P,P=x}}if(f!==M.outputColorSpace||u!==M.toneMapping){f=M.outputColorSpace,u=M.toneMapping,l.defines={},st.getTransfer(f)===ft&&(l.defines.SRGB_TRANSFER="");const w=G3[u];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(v),M.render(c,d),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),s.dispose(),o.dispose(),l.dispose()}}const Jd=new Kt,_c=new ma(1,1),Qd=new Bd,ef=new o2,tf=new Wd,sh=[],oh=[],lh=new Float32Array(16),ch=new Float32Array(9),uh=new Float32Array(4);function Ma(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=sh[r];if(a===void 0&&(a=new Float32Array(r),sh[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function Bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ro(n,e){let t=oh[e];t===void 0&&(t=new Int32Array(e),oh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function V3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function W3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2fv(this.addr,e),kt(t,e)}}function X3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;n.uniform3fv(this.addr,e),kt(t,e)}}function q3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4fv(this.addr,e),kt(t,e)}}function Y3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,i))return;uh.set(i),n.uniformMatrix2fv(this.addr,!1,uh),kt(t,i)}}function j3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,i))return;ch.set(i),n.uniformMatrix3fv(this.addr,!1,ch),kt(t,i)}}function K3(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Bt(t,i))return;lh.set(i),n.uniformMatrix4fv(this.addr,!1,lh),kt(t,i)}}function Z3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function $3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2iv(this.addr,e),kt(t,e)}}function J3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3iv(this.addr,e),kt(t,e)}}function Q3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4iv(this.addr,e),kt(t,e)}}function eg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function tg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2uiv(this.addr,e),kt(t,e)}}function ng(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3uiv(this.addr,e),kt(t,e)}}function ig(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4uiv(this.addr,e),kt(t,e)}}function rg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let a;this.type===n.SAMPLER_2D_SHADOW?(_c.compareFunction=t.isReversedDepthBuffer()?kc:Bc,a=_c):a=Jd,t.setTexture2D(e||a,r)}function ag(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ef,r)}function sg(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||tf,r)}function og(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Qd,r)}function lg(n){switch(n){case 5126:return V3;case 35664:return W3;case 35665:return X3;case 35666:return q3;case 35674:return Y3;case 35675:return j3;case 35676:return K3;case 5124:case 35670:return Z3;case 35667:case 35671:return $3;case 35668:case 35672:return J3;case 35669:case 35673:return Q3;case 5125:return eg;case 36294:return tg;case 36295:return ng;case 36296:return ig;case 35678:case 36198:case 36298:case 36306:case 35682:return rg;case 35679:case 36299:case 36307:return ag;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return og}}function cg(n,e){n.uniform1fv(this.addr,e)}function ug(n,e){const t=Ma(e,this.size,2);n.uniform2fv(this.addr,t)}function hg(n,e){const t=Ma(e,this.size,3);n.uniform3fv(this.addr,t)}function dg(n,e){const t=Ma(e,this.size,4);n.uniform4fv(this.addr,t)}function fg(n,e){const t=Ma(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function pg(n,e){const t=Ma(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function mg(n,e){const t=Ma(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function gg(n,e){n.uniform1iv(this.addr,e)}function _g(n,e){n.uniform2iv(this.addr,e)}function vg(n,e){n.uniform3iv(this.addr,e)}function xg(n,e){n.uniform4iv(this.addr,e)}function yg(n,e){n.uniform1uiv(this.addr,e)}function Mg(n,e){n.uniform2uiv(this.addr,e)}function Sg(n,e){n.uniform3uiv(this.addr,e)}function bg(n,e){n.uniform4uiv(this.addr,e)}function Eg(n,e,t){const i=this.cache,r=e.length,a=Ro(t,r);Bt(i,a)||(n.uniform1iv(this.addr,a),kt(i,a));let s;this.type===n.SAMPLER_2D_SHADOW?s=_c:s=Jd;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||s,a[o])}function Tg(n,e,t){const i=this.cache,r=e.length,a=Ro(t,r);Bt(i,a)||(n.uniform1iv(this.addr,a),kt(i,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||ef,a[s])}function wg(n,e,t){const i=this.cache,r=e.length,a=Ro(t,r);Bt(i,a)||(n.uniform1iv(this.addr,a),kt(i,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||tf,a[s])}function Ag(n,e,t){const i=this.cache,r=e.length,a=Ro(t,r);Bt(i,a)||(n.uniform1iv(this.addr,a),kt(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||Qd,a[s])}function Rg(n){switch(n){case 5126:return cg;case 35664:return ug;case 35665:return hg;case 35666:return dg;case 35674:return fg;case 35675:return pg;case 35676:return mg;case 5124:case 35670:return gg;case 35667:case 35671:return _g;case 35668:case 35672:return vg;case 35669:case 35673:return xg;case 5125:return yg;case 36294:return Mg;case 36295:return Sg;case 36296:return bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return Tg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return Ag}}class Cg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=lg(t.type)}}class Pg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rg(t.type)}}class Dg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],i)}}}const dl=/(\w+)(\])?(\[|\.)?/g;function hh(n,e){n.seq.push(e),n.map[e.id]=e}function Lg(n,e,t){const i=n.name,r=i.length;for(dl.lastIndex=0;;){const a=dl.exec(i),s=dl.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){hh(t,c===void 0?new Cg(o,n,e):new Pg(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Dg(o),hh(t,f)),t=f}}}class Js{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(t,s),l=e.getUniformLocation(t,o.name);Lg(o,l,this)}const r=[],a=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):a.push(s);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function dh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Ig=37297;let Ug=0;function Ng(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const fh=new Ye;function Fg(n){st._getMatrix(fh,st.workingColorSpace,n);const e=`mat3( ${fh.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(n)){case ho:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ph(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+Ng(n.getShaderSource(e),o)}else return a}function Og(n,e){const t=Fg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Bg={[Md]:"Linear",[Sd]:"Reinhard",[bd]:"Cineon",[Ed]:"ACESFilmic",[wd]:"AgX",[Ad]:"Neutral",[Td]:"Custom"};function kg(n,e){const t=Bg[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Os=new N;function zg(){st.getLuminanceCoefficients(Os);const n=Os.x.toFixed(4),e=Os.y.toFixed(4),t=Os.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ba).join(`
`)}function Hg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Vg(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),s=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function Ba(n){return n!==""}function mh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wg=/^[ \t]*#include +<([\w\d./]+)>/gm;function vc(n){return n.replace(Wg,qg)}const Xg=new Map;function qg(n,e){let t=et[e];if(t===void 0){const i=Xg.get(e);if(i!==void 0)t=et[i],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return vc(t)}const Yg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _h(n){return n.replace(Yg,jg)}function jg(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function vh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Kg={[Ys]:"SHADOWMAP_TYPE_PCF",[Fa]:"SHADOWMAP_TYPE_VSM"};function Zg(n){return Kg[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $g={[Er]:"ENVMAP_TYPE_CUBE",[pa]:"ENVMAP_TYPE_CUBE",[To]:"ENVMAP_TYPE_CUBE_UV"};function Jg(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":$g[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Qg={[pa]:"ENVMAP_MODE_REFRACTION"};function e4(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Qg[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const t4={[yd]:"ENVMAP_BLENDING_MULTIPLY",[Tp]:"ENVMAP_BLENDING_MIX",[wp]:"ENVMAP_BLENDING_ADD"};function n4(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":t4[n.combine]||"ENVMAP_BLENDING_NONE"}function i4(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function r4(n,e,t,i){const r=n.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=Zg(t),c=Jg(t),d=e4(t),f=n4(t),u=i4(t),h=Gg(t),p=Hg(a),v=r.createProgram();let g,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ba).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ba).join(`
`),m.length>0&&(m+=`
`)):(g=[vh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ba).join(`
`),m=[vh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?et.tonemapping_pars_fragment:"",t.toneMapping!==ai?kg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,Og("linearToOutputTexel",t.outputColorSpace),zg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ba).join(`
`)),s=vc(s),s=mh(s,t),s=gh(s,t),o=vc(o),o=mh(o,t),o=gh(o,t),s=_h(s),o=_h(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=M+g+s,b=M+m+o,P=dh(r,r.VERTEX_SHADER,E),w=dh(r,r.FRAGMENT_SHADER,b);r.attachShader(v,P),r.attachShader(v,w),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(A){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(v)||"",W=r.getShaderInfoLog(P)||"",Y=r.getShaderInfoLog(w)||"",I=F.trim(),H=W.trim(),k=Y.trim();let ee=!0,re=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,P,w);else{const ge=ph(r,P,"vertex"),ie=ph(r,w,"fragment");lt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+I+`
`+ge+`
`+ie)}else I!==""?Ve("WebGLProgram: Program Info Log:",I):(H===""||k==="")&&(re=!1);re&&(A.diagnostics={runnable:ee,programLog:I,vertexShader:{log:H,prefix:g},fragmentShader:{log:k,prefix:m}})}r.deleteShader(P),r.deleteShader(w),x=new Js(r,v),T=Vg(r,v)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(v,Ig)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ug++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=w,this}let a4=0;class s4{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new o4(e),t.set(e,i)),i}}class o4{constructor(e){this.id=a4++,this.code=e,this.usedTimes=0}}function l4(n){return n===Tr||n===lo||n===co}function c4(n,e,t,i,r,a){const s=new Hc,o=new s4,l=new Set,c=[],d=new Map,f=i.logarithmicDepthBuffer;let u=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,T,L,A,F,W){const Y=A.fog,I=F.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ee=e.get(x.envMap||H,k),re=ee&&ee.mapping===To?ee.image.height:null,ge=h[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Ve("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const ie=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,fe=ie!==void 0?ie.length:0;let Fe=0;I.morphAttributes.position!==void 0&&(Fe=1),I.morphAttributes.normal!==void 0&&(Fe=2),I.morphAttributes.color!==void 0&&(Fe=3);let pe,Ce,j,_e;if(ge){const Ke=ei[ge];pe=Ke.vertexShader,Ce=Ke.fragmentShader}else pe=x.vertexShader,Ce=x.fragmentShader,o.update(x),j=o.getVertexShaderID(x),_e=o.getFragmentShaderID(x);const ae=n.getRenderTarget(),ve=n.state.buffers.depth.getReversed(),we=F.isInstancedMesh===!0,Se=F.isBatchedMesh===!0,Be=!!x.map,Pe=!!x.matcap,He=!!ee,Xe=!!x.aoMap,Re=!!x.lightMap,J=!!x.bumpMap,be=!!x.normalMap,ke=!!x.displacementMap,R=!!x.emissiveMap,ze=!!x.metalnessMap,Ie=!!x.roughnessMap,tt=x.anisotropy>0,ue=x.clearcoat>0,mt=x.dispersion>0,S=x.iridescence>0,_=x.sheen>0,O=x.transmission>0,Z=tt&&!!x.anisotropyMap,Q=ue&&!!x.clearcoatMap,oe=ue&&!!x.clearcoatNormalMap,he=ue&&!!x.clearcoatRoughnessMap,X=S&&!!x.iridescenceMap,q=S&&!!x.iridescenceThicknessMap,ce=_&&!!x.sheenColorMap,me=_&&!!x.sheenRoughnessMap,se=!!x.specularMap,ne=!!x.specularColorMap,Ue=!!x.specularIntensityMap,Ge=O&&!!x.transmissionMap,Qe=O&&!!x.thicknessMap,D=!!x.gradientMap,le=!!x.alphaMap,K=x.alphaTest>0,Ee=!!x.alphaHash,de=!!x.extensions;let te=ai;x.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(te=n.toneMapping);const Le={shaderID:ge,shaderType:x.type,shaderName:x.name,vertexShader:pe,fragmentShader:Ce,defines:x.defines,customVertexShaderID:j,customFragmentShaderID:_e,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Se,batchingColor:Se&&F._colorsTexture!==null,instancing:we,instancingColor:we&&F.instanceColor!==null,instancingMorph:we&&F.morphTexture!==null,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Be,matcap:Pe,envMap:He,envMapMode:He&&ee.mapping,envMapCubeUVHeight:re,aoMap:Xe,lightMap:Re,bumpMap:J,normalMap:be,displacementMap:ke,emissiveMap:R,normalMapObjectSpace:be&&x.normalMapType===Cp,normalMapTangentSpace:be&&x.normalMapType===yu,packedNormalMap:be&&x.normalMapType===yu&&l4(x.normalMap.format),metalnessMap:ze,roughnessMap:Ie,anisotropy:tt,anisotropyMap:Z,clearcoat:ue,clearcoatMap:Q,clearcoatNormalMap:oe,clearcoatRoughnessMap:he,dispersion:mt,iridescence:S,iridescenceMap:X,iridescenceThicknessMap:q,sheen:_,sheenColorMap:ce,sheenRoughnessMap:me,specularMap:se,specularColorMap:ne,specularIntensityMap:Ue,transmission:O,transmissionMap:Ge,thicknessMap:Qe,gradientMap:D,opaque:x.transparent===!1&&x.blending===ea&&x.alphaToCoverage===!1,alphaMap:le,alphaTest:K,alphaHash:Ee,combine:x.combine,mapUv:Be&&p(x.map.channel),aoMapUv:Xe&&p(x.aoMap.channel),lightMapUv:Re&&p(x.lightMap.channel),bumpMapUv:J&&p(x.bumpMap.channel),normalMapUv:be&&p(x.normalMap.channel),displacementMapUv:ke&&p(x.displacementMap.channel),emissiveMapUv:R&&p(x.emissiveMap.channel),metalnessMapUv:ze&&p(x.metalnessMap.channel),roughnessMapUv:Ie&&p(x.roughnessMap.channel),anisotropyMapUv:Z&&p(x.anisotropyMap.channel),clearcoatMapUv:Q&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:oe&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:q&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:me&&p(x.sheenRoughnessMap.channel),specularMapUv:se&&p(x.specularMap.channel),specularColorMapUv:ne&&p(x.specularColorMap.channel),specularIntensityMapUv:Ue&&p(x.specularIntensityMap.channel),transmissionMapUv:Ge&&p(x.transmissionMap.channel),thicknessMapUv:Qe&&p(x.thicknessMap.channel),alphaMapUv:le&&p(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(be||tt),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!I.attributes.uv&&(Be||le),fog:!!Y,useFog:x.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&be===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ve,skinning:F.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Fe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:te,decodeVideoTexture:Be&&x.map.isVideoTexture===!0&&st.getTransfer(x.map.colorSpace)===ft,decodeVideoTextureEmissive:R&&x.emissiveMap.isVideoTexture===!0&&st.getTransfer(x.emissiveMap.colorSpace)===ft,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ti,flipSided:x.side===hn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:de&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&x.extensions.multiDraw===!0||Se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Le.vertexUv1s=l.has(1),Le.vertexUv2s=l.has(2),Le.vertexUv3s=l.has(3),l.clear(),Le}function g(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)T.push(L),T.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(m(T,x),M(T,x),T.push(n.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function m(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function M(x,T){s.disableAll(),T.instancing&&s.enable(0),T.instancingColor&&s.enable(1),T.instancingMorph&&s.enable(2),T.matcap&&s.enable(3),T.envMap&&s.enable(4),T.normalMapObjectSpace&&s.enable(5),T.normalMapTangentSpace&&s.enable(6),T.clearcoat&&s.enable(7),T.iridescence&&s.enable(8),T.alphaTest&&s.enable(9),T.vertexColors&&s.enable(10),T.vertexAlphas&&s.enable(11),T.vertexUv1s&&s.enable(12),T.vertexUv2s&&s.enable(13),T.vertexUv3s&&s.enable(14),T.vertexTangents&&s.enable(15),T.anisotropy&&s.enable(16),T.alphaHash&&s.enable(17),T.batching&&s.enable(18),T.dispersion&&s.enable(19),T.batchingColor&&s.enable(20),T.gradientMap&&s.enable(21),T.packedNormalMap&&s.enable(22),T.vertexNormals&&s.enable(23),x.push(s.mask),s.disableAll(),T.fog&&s.enable(0),T.useFog&&s.enable(1),T.flatShading&&s.enable(2),T.logarithmicDepthBuffer&&s.enable(3),T.reversedDepthBuffer&&s.enable(4),T.skinning&&s.enable(5),T.morphTargets&&s.enable(6),T.morphNormals&&s.enable(7),T.morphColors&&s.enable(8),T.premultipliedAlpha&&s.enable(9),T.shadowMapEnabled&&s.enable(10),T.doubleSided&&s.enable(11),T.flipSided&&s.enable(12),T.useDepthPacking&&s.enable(13),T.dithering&&s.enable(14),T.transmission&&s.enable(15),T.sheen&&s.enable(16),T.opaque&&s.enable(17),T.pointsUvs&&s.enable(18),T.decodeVideoTexture&&s.enable(19),T.decodeVideoTextureEmissive&&s.enable(20),T.alphaToCoverage&&s.enable(21),T.numLightProbeGrids>0&&s.enable(22),x.push(s.mask)}function E(x){const T=h[x.type];let L;if(T){const A=ei[T];L=P2.clone(A.uniforms)}else L=x.uniforms;return L}function b(x,T){let L=d.get(T);return L!==void 0?++L.usedTimes:(L=new r4(n,T,x,r),c.push(L),d.set(T,L)),L}function P(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),d.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function C(){o.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:E,acquireProgram:b,releaseProgram:P,releaseShaderCache:w,programs:c,dispose:C}}function u4(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function i(s){n.delete(s)}function r(s,o,l){n.get(s)[o]=l}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:a}}function h4(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function xh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function yh(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function s(u){let h=0;return u.isInstancedMesh&&(h+=2),u.isSkinnedMesh&&(h+=1),h}function o(u,h,p,v,g,m){let M=n[e];return M===void 0?(M={id:u.id,object:u,geometry:h,material:p,materialVariant:s(u),groupOrder:v,renderOrder:u.renderOrder,z:g,group:m},n[e]=M):(M.id=u.id,M.object=u,M.geometry=h,M.material=p,M.materialVariant=s(u),M.groupOrder=v,M.renderOrder=u.renderOrder,M.z=g,M.group=m),e++,M}function l(u,h,p,v,g,m){const M=o(u,h,p,v,g,m);p.transmission>0?i.push(M):p.transparent===!0?r.push(M):t.push(M)}function c(u,h,p,v,g,m){const M=o(u,h,p,v,g,m);p.transmission>0?i.unshift(M):p.transparent===!0?r.unshift(M):t.unshift(M)}function d(u,h){t.length>1&&t.sort(u||h4),i.length>1&&i.sort(h||xh),r.length>1&&r.sort(h||xh)}function f(){for(let u=e,h=n.length;u<h;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:l,unshift:c,finish:f,sort:d}}function d4(){let n=new WeakMap;function e(i,r){const a=n.get(i);let s;return a===void 0?(s=new yh,n.set(i,[s])):r>=a.length?(s=new yh,a.push(s)):s=a[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function f4(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new dt};break;case"SpotLight":t={position:new N,direction:new N,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function p4(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let m4=0;function g4(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function _4(n){const e=new f4,t=p4(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,a=new Tt,s=new Tt;function o(c){let d=0,f=0,u=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let h=0,p=0,v=0,g=0,m=0,M=0,E=0,b=0,P=0,w=0,C=0;c.sort(g4);for(let T=0,L=c.length;T<L;T++){const A=c[T],F=A.color,W=A.intensity,Y=A.distance;let I=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===Tr?I=A.shadow.map.texture:I=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)d+=F.r*W,f+=F.g*W,u+=F.b*W;else if(A.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(A.sh.coefficients[H],W);C++}else if(A.isDirectionalLight){const H=e.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const k=A.shadow,ee=t.get(A);ee.shadowIntensity=k.intensity,ee.shadowBias=k.bias,ee.shadowNormalBias=k.normalBias,ee.shadowRadius=k.radius,ee.shadowMapSize=k.mapSize,i.directionalShadow[h]=ee,i.directionalShadowMap[h]=I,i.directionalShadowMatrix[h]=A.shadow.matrix,M++}i.directional[h]=H,h++}else if(A.isSpotLight){const H=e.get(A);H.position.setFromMatrixPosition(A.matrixWorld),H.color.copy(F).multiplyScalar(W),H.distance=Y,H.coneCos=Math.cos(A.angle),H.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),H.decay=A.decay,i.spot[v]=H;const k=A.shadow;if(A.map&&(i.spotLightMap[P]=A.map,P++,k.updateMatrices(A),A.castShadow&&w++),i.spotLightMatrix[v]=k.matrix,A.castShadow){const ee=t.get(A);ee.shadowIntensity=k.intensity,ee.shadowBias=k.bias,ee.shadowNormalBias=k.normalBias,ee.shadowRadius=k.radius,ee.shadowMapSize=k.mapSize,i.spotShadow[v]=ee,i.spotShadowMap[v]=I,b++}v++}else if(A.isRectAreaLight){const H=e.get(A);H.color.copy(F).multiplyScalar(W),H.halfWidth.set(A.width*.5,0,0),H.halfHeight.set(0,A.height*.5,0),i.rectArea[g]=H,g++}else if(A.isPointLight){const H=e.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),H.distance=A.distance,H.decay=A.decay,A.castShadow){const k=A.shadow,ee=t.get(A);ee.shadowIntensity=k.intensity,ee.shadowBias=k.bias,ee.shadowNormalBias=k.normalBias,ee.shadowRadius=k.radius,ee.shadowMapSize=k.mapSize,ee.shadowCameraNear=k.camera.near,ee.shadowCameraFar=k.camera.far,i.pointShadow[p]=ee,i.pointShadowMap[p]=I,i.pointShadowMatrix[p]=A.shadow.matrix,E++}i.point[p]=H,p++}else if(A.isHemisphereLight){const H=e.get(A);H.skyColor.copy(A.color).multiplyScalar(W),H.groundColor.copy(A.groundColor).multiplyScalar(W),i.hemi[m]=H,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=u;const x=i.hash;(x.directionalLength!==h||x.pointLength!==p||x.spotLength!==v||x.rectAreaLength!==g||x.hemiLength!==m||x.numDirectionalShadows!==M||x.numPointShadows!==E||x.numSpotShadows!==b||x.numSpotMaps!==P||x.numLightProbes!==C)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=b+P-w,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,x.directionalLength=h,x.pointLength=p,x.spotLength=v,x.rectAreaLength=g,x.hemiLength=m,x.numDirectionalShadows=M,x.numPointShadows=E,x.numSpotShadows=b,x.numSpotMaps=P,x.numLightProbes=C,i.version=m4++)}function l(c,d){let f=0,u=0,h=0,p=0,v=0;const g=d.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const E=c[m];if(E.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(g),f++}else if(E.isSpotLight){const b=i.spot[h];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(g),h++}else if(E.isRectAreaLight){const b=i.rectArea[p];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(g),s.identity(),a.copy(E.matrixWorld),a.premultiply(g),s.extractRotation(a),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),p++}else if(E.isPointLight){const b=i.point[u];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(g),u++}else if(E.isHemisphereLight){const b=i.hemi[v];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:i}}function Mh(n){const e=new _4(n),t=[],i=[],r=[];function a(u){f.camera=u,t.length=0,i.length=0,r.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function l(u){r.push(u)}function c(){e.setup(t)}function d(u){e.setupView(t,u)}const f={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:f,setupLights:c,setupLightsView:d,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function v4(n){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new Mh(n),e.set(r,[o])):a>=s.length?(o=new Mh(n),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const x4=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y4=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,M4=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],S4=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Sh=new Tt,Pa=new N,fl=new N;function b4(n,e,t){let i=new Hd;const r=new $e,a=new $e,s=new Pt,o=new U2,l=new N2,c={},d=t.maxTextureSize,f={[Ji]:hn,[hn]:Ji,[ti]:ti},u=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:x4,fragmentShader:y4}),h=u.clone();h.defines.HORIZONTAL_PASS=1;const p=new rn;p.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new cn(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ys;let m=this.type;this.render=function(w,C,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===sp&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ys);const T=n.getRenderTarget(),L=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Ei),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const W=m!==this.type;W&&C.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(I=>I.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,I=w.length;Y<I;Y++){const H=w[Y],k=H.shadow;if(k===void 0){Ve("WebGLShadowMap:",H,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const ee=k.getFrameExtents();r.multiply(ee),a.copy(k.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/ee.x),r.x=a.x*ee.x,k.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/ee.y),r.y=a.y*ee.y,k.mapSize.y=a.y));const re=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=re,k.map===null||W===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Fa){if(H.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new si(r.x,r.y,{format:Tr,type:Ai,minFilter:Yt,magFilter:Yt,generateMipmaps:!1}),k.map.texture.name=H.name+".shadowMap",k.map.depthTexture=new ma(r.x,r.y,ni),k.map.depthTexture.name=H.name+".shadowMapDepth",k.map.depthTexture.format=Ri,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Vt,k.map.depthTexture.magFilter=Vt}else H.isPointLight?(k.map=new $d(r.x),k.map.depthTexture=new R2(r.x,ci)):(k.map=new si(r.x,r.y),k.map.depthTexture=new ma(r.x,r.y,ci)),k.map.depthTexture.name=H.name+".shadowMap",k.map.depthTexture.format=Ri,this.type===Ys?(k.map.depthTexture.compareFunction=re?kc:Bc,k.map.depthTexture.minFilter=Yt,k.map.depthTexture.magFilter=Yt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Vt,k.map.depthTexture.magFilter=Vt);k.camera.updateProjectionMatrix()}const ge=k.map.isWebGLCubeRenderTarget?6:1;for(let ie=0;ie<ge;ie++){if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,ie),n.clear();else{ie===0&&(n.setRenderTarget(k.map),n.clear());const fe=k.getViewport(ie);s.set(a.x*fe.x,a.y*fe.y,a.x*fe.z,a.y*fe.w),F.viewport(s)}if(H.isPointLight){const fe=k.camera,Fe=k.matrix,pe=H.distance||fe.far;pe!==fe.far&&(fe.far=pe,fe.updateProjectionMatrix()),Pa.setFromMatrixPosition(H.matrixWorld),fe.position.copy(Pa),fl.copy(fe.position),fl.add(M4[ie]),fe.up.copy(S4[ie]),fe.lookAt(fl),fe.updateMatrixWorld(),Fe.makeTranslation(-Pa.x,-Pa.y,-Pa.z),Sh.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Sh,fe.coordinateSystem,fe.reversedDepth)}else k.updateMatrices(H);i=k.getFrustum(),b(C,x,k.camera,H,this.type)}k.isPointLightShadow!==!0&&this.type===Fa&&M(k,x),k.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(T,L,A)};function M(w,C){const x=e.update(v);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new si(r.x,r.y,{format:Tr,type:Ai})),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(C,null,x,u,v,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(C,null,x,h,v,null)}function E(w,C,x,T){let L=null;const A=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)L=A;else if(L=x.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const F=L.uuid,W=C.uuid;let Y=c[F];Y===void 0&&(Y={},c[F]=Y);let I=Y[W];I===void 0&&(I=L.clone(),Y[W]=I,C.addEventListener("dispose",P)),L=I}if(L.visible=C.visible,L.wireframe=C.wireframe,T===Fa?L.side=C.shadowSide!==null?C.shadowSide:C.side:L.side=C.shadowSide!==null?C.shadowSide:f[C.side],L.alphaMap=C.alphaMap,L.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,L.map=C.map,L.clipShadows=C.clipShadows,L.clippingPlanes=C.clippingPlanes,L.clipIntersection=C.clipIntersection,L.displacementMap=C.displacementMap,L.displacementScale=C.displacementScale,L.displacementBias=C.displacementBias,L.wireframeLinewidth=C.wireframeLinewidth,L.linewidth=C.linewidth,x.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const F=n.properties.get(L);F.light=x}return L}function b(w,C,x,T,L){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&L===Fa)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const W=e.update(w),Y=w.material;if(Array.isArray(Y)){const I=W.groups;for(let H=0,k=I.length;H<k;H++){const ee=I[H],re=Y[ee.materialIndex];if(re&&re.visible){const ge=E(w,re,T,L);w.onBeforeShadow(n,w,C,x,W,ge,ee),n.renderBufferDirect(x,null,W,ge,w,ee),w.onAfterShadow(n,w,C,x,W,ge,ee)}}}else if(Y.visible){const I=E(w,Y,T,L);w.onBeforeShadow(n,w,C,x,W,I,null),n.renderBufferDirect(x,null,W,I,w,null),w.onAfterShadow(n,w,C,x,W,I,null)}}const F=w.children;for(let W=0,Y=F.length;W<Y;W++)b(F[W],C,x,T,L)}function P(w){w.target.removeEventListener("dispose",P);for(const x in c){const T=c[x],L=w.target.uuid;L in T&&(T[L].dispose(),delete T[L])}}}function E4(n,e){function t(){let D=!1;const le=new Pt;let K=null;const Ee=new Pt(0,0,0,0);return{setMask:function(de){K!==de&&!D&&(n.colorMask(de,de,de,de),K=de)},setLocked:function(de){D=de},setClear:function(de,te,Le,Ke,At){At===!0&&(de*=Ke,te*=Ke,Le*=Ke),le.set(de,te,Le,Ke),Ee.equals(le)===!1&&(n.clearColor(de,te,Le,Ke),Ee.copy(le))},reset:function(){D=!1,K=null,Ee.set(-1,0,0,0)}}}function i(){let D=!1,le=!1,K=null,Ee=null,de=null;return{setReversed:function(te){if(le!==te){const Le=e.get("EXT_clip_control");te?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),le=te;const Ke=de;de=null,this.setClear(Ke)}},getReversed:function(){return le},setTest:function(te){te?ae(n.DEPTH_TEST):ve(n.DEPTH_TEST)},setMask:function(te){K!==te&&!D&&(n.depthMask(te),K=te)},setFunc:function(te){if(le&&(te=kp[te]),Ee!==te){switch(te){case Pl:n.depthFunc(n.NEVER);break;case Dl:n.depthFunc(n.ALWAYS);break;case Ll:n.depthFunc(n.LESS);break;case fa:n.depthFunc(n.LEQUAL);break;case Il:n.depthFunc(n.EQUAL);break;case Ul:n.depthFunc(n.GEQUAL);break;case Nl:n.depthFunc(n.GREATER);break;case Fl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ee=te}},setLocked:function(te){D=te},setClear:function(te){de!==te&&(de=te,le&&(te=1-te),n.clearDepth(te))},reset:function(){D=!1,K=null,Ee=null,de=null,le=!1}}}function r(){let D=!1,le=null,K=null,Ee=null,de=null,te=null,Le=null,Ke=null,At=null;return{setTest:function(gt){D||(gt?ae(n.STENCIL_TEST):ve(n.STENCIL_TEST))},setMask:function(gt){le!==gt&&!D&&(n.stencilMask(gt),le=gt)},setFunc:function(gt,di,Yn){(K!==gt||Ee!==di||de!==Yn)&&(n.stencilFunc(gt,di,Yn),K=gt,Ee=di,de=Yn)},setOp:function(gt,di,Yn){(te!==gt||Le!==di||Ke!==Yn)&&(n.stencilOp(gt,di,Yn),te=gt,Le=di,Ke=Yn)},setLocked:function(gt){D=gt},setClear:function(gt){At!==gt&&(n.clearStencil(gt),At=gt)},reset:function(){D=!1,le=null,K=null,Ee=null,de=null,te=null,Le=null,Ke=null,At=null}}}const a=new t,s=new i,o=new r,l=new WeakMap,c=new WeakMap;let d={},f={},u={},h=new WeakMap,p=[],v=null,g=!1,m=null,M=null,E=null,b=null,P=null,w=null,C=null,x=new dt(0,0,0),T=0,L=!1,A=null,F=null,W=null,Y=null,I=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,ee=0;const re=n.getParameter(n.VERSION);re.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(re)[1]),k=ee>=1):re.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),k=ee>=2);let ge=null,ie={};const fe=n.getParameter(n.SCISSOR_BOX),Fe=n.getParameter(n.VIEWPORT),pe=new Pt().fromArray(fe),Ce=new Pt().fromArray(Fe);function j(D,le,K,Ee){const de=new Uint8Array(4),te=n.createTexture();n.bindTexture(D,te),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Le=0;Le<K;Le++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,Ee,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(le+Le,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return te}const _e={};_e[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),_e[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_e[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ae(n.DEPTH_TEST),s.setFunc(fa),J(!1),be(gu),ae(n.CULL_FACE),Xe(Ei);function ae(D){d[D]!==!0&&(n.enable(D),d[D]=!0)}function ve(D){d[D]!==!1&&(n.disable(D),d[D]=!1)}function we(D,le){return u[D]!==le?(n.bindFramebuffer(D,le),u[D]=le,D===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=le),D===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=le),!0):!1}function Se(D,le){let K=p,Ee=!1;if(D){K=h.get(le),K===void 0&&(K=[],h.set(le,K));const de=D.textures;if(K.length!==de.length||K[0]!==n.COLOR_ATTACHMENT0){for(let te=0,Le=de.length;te<Le;te++)K[te]=n.COLOR_ATTACHMENT0+te;K.length=de.length,Ee=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,Ee=!0);Ee&&n.drawBuffers(K)}function Be(D){return v!==D?(n.useProgram(D),v=D,!0):!1}const Pe={[ar]:n.FUNC_ADD,[lp]:n.FUNC_SUBTRACT,[cp]:n.FUNC_REVERSE_SUBTRACT};Pe[up]=n.MIN,Pe[hp]=n.MAX;const He={[dp]:n.ZERO,[fp]:n.ONE,[pp]:n.SRC_COLOR,[Rl]:n.SRC_ALPHA,[yp]:n.SRC_ALPHA_SATURATE,[vp]:n.DST_COLOR,[gp]:n.DST_ALPHA,[mp]:n.ONE_MINUS_SRC_COLOR,[Cl]:n.ONE_MINUS_SRC_ALPHA,[xp]:n.ONE_MINUS_DST_COLOR,[_p]:n.ONE_MINUS_DST_ALPHA,[Mp]:n.CONSTANT_COLOR,[Sp]:n.ONE_MINUS_CONSTANT_COLOR,[bp]:n.CONSTANT_ALPHA,[Ep]:n.ONE_MINUS_CONSTANT_ALPHA};function Xe(D,le,K,Ee,de,te,Le,Ke,At,gt){if(D===Ei){g===!0&&(ve(n.BLEND),g=!1);return}if(g===!1&&(ae(n.BLEND),g=!0),D!==op){if(D!==m||gt!==L){if((M!==ar||P!==ar)&&(n.blendEquation(n.FUNC_ADD),M=ar,P=ar),gt)switch(D){case ea:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _u:n.blendFunc(n.ONE,n.ONE);break;case vu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:lt("WebGLState: Invalid blending: ",D);break}else switch(D){case ea:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _u:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case vu:lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xu:lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:lt("WebGLState: Invalid blending: ",D);break}E=null,b=null,w=null,C=null,x.set(0,0,0),T=0,m=D,L=gt}return}de=de||le,te=te||K,Le=Le||Ee,(le!==M||de!==P)&&(n.blendEquationSeparate(Pe[le],Pe[de]),M=le,P=de),(K!==E||Ee!==b||te!==w||Le!==C)&&(n.blendFuncSeparate(He[K],He[Ee],He[te],He[Le]),E=K,b=Ee,w=te,C=Le),(Ke.equals(x)===!1||At!==T)&&(n.blendColor(Ke.r,Ke.g,Ke.b,At),x.copy(Ke),T=At),m=D,L=!1}function Re(D,le){D.side===ti?ve(n.CULL_FACE):ae(n.CULL_FACE);let K=D.side===hn;le&&(K=!K),J(K),D.blending===ea&&D.transparent===!1?Xe(Ei):Xe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),a.setMask(D.colorWrite);const Ee=D.stencilWrite;o.setTest(Ee),Ee&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),R(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ae(n.SAMPLE_ALPHA_TO_COVERAGE):ve(n.SAMPLE_ALPHA_TO_COVERAGE)}function J(D){A!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),A=D)}function be(D){D!==rp?(ae(n.CULL_FACE),D!==F&&(D===gu?n.cullFace(n.BACK):D===ap?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ve(n.CULL_FACE),F=D}function ke(D){D!==W&&(k&&n.lineWidth(D),W=D)}function R(D,le,K){D?(ae(n.POLYGON_OFFSET_FILL),(Y!==le||I!==K)&&(Y=le,I=K,s.getReversed()&&(le=-le),n.polygonOffset(le,K))):ve(n.POLYGON_OFFSET_FILL)}function ze(D){D?ae(n.SCISSOR_TEST):ve(n.SCISSOR_TEST)}function Ie(D){D===void 0&&(D=n.TEXTURE0+H-1),ge!==D&&(n.activeTexture(D),ge=D)}function tt(D,le,K){K===void 0&&(ge===null?K=n.TEXTURE0+H-1:K=ge);let Ee=ie[K];Ee===void 0&&(Ee={type:void 0,texture:void 0},ie[K]=Ee),(Ee.type!==D||Ee.texture!==le)&&(ge!==K&&(n.activeTexture(K),ge=K),n.bindTexture(D,le||_e[D]),Ee.type=D,Ee.texture=le)}function ue(){const D=ie[ge];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function mt(){try{n.compressedTexImage2D(...arguments)}catch(D){lt("WebGLState:",D)}}function S(){try{n.compressedTexImage3D(...arguments)}catch(D){lt("WebGLState:",D)}}function _(){try{n.texSubImage2D(...arguments)}catch(D){lt("WebGLState:",D)}}function O(){try{n.texSubImage3D(...arguments)}catch(D){lt("WebGLState:",D)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(D){lt("WebGLState:",D)}}function Q(){try{n.compressedTexSubImage3D(...arguments)}catch(D){lt("WebGLState:",D)}}function oe(){try{n.texStorage2D(...arguments)}catch(D){lt("WebGLState:",D)}}function he(){try{n.texStorage3D(...arguments)}catch(D){lt("WebGLState:",D)}}function X(){try{n.texImage2D(...arguments)}catch(D){lt("WebGLState:",D)}}function q(){try{n.texImage3D(...arguments)}catch(D){lt("WebGLState:",D)}}function ce(D){return f[D]!==void 0?f[D]:n.getParameter(D)}function me(D,le){f[D]!==le&&(n.pixelStorei(D,le),f[D]=le)}function se(D){pe.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),pe.copy(D))}function ne(D){Ce.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Ce.copy(D))}function Ue(D,le){let K=c.get(le);K===void 0&&(K=new WeakMap,c.set(le,K));let Ee=K.get(D);Ee===void 0&&(Ee=n.getUniformBlockIndex(le,D.name),K.set(D,Ee))}function Ge(D,le){const Ee=c.get(le).get(D);l.get(le)!==Ee&&(n.uniformBlockBinding(le,Ee,D.__bindingPointIndex),l.set(le,Ee))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),d={},f={},ge=null,ie={},u={},h=new WeakMap,p=[],v=null,g=!1,m=null,M=null,E=null,b=null,P=null,w=null,C=null,x=new dt(0,0,0),T=0,L=!1,A=null,F=null,W=null,Y=null,I=null,pe.set(0,0,n.canvas.width,n.canvas.height),Ce.set(0,0,n.canvas.width,n.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:ae,disable:ve,bindFramebuffer:we,drawBuffers:Se,useProgram:Be,setBlending:Xe,setMaterial:Re,setFlipSided:J,setCullFace:be,setLineWidth:ke,setPolygonOffset:R,setScissorTest:ze,activeTexture:Ie,bindTexture:tt,unbindTexture:ue,compressedTexImage2D:mt,compressedTexImage3D:S,texImage2D:X,texImage3D:q,pixelStorei:me,getParameter:ce,updateUBOMapping:Ue,uniformBlockBinding:Ge,texStorage2D:oe,texStorage3D:he,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:Z,compressedTexSubImage3D:Q,scissor:se,viewport:ne,reset:Qe}}function T4(n,e,t,i,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,d=new WeakMap,f=new Set;let u;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(S,_){return p?new OffscreenCanvas(S,_):po("canvas")}function g(S,_,O){let Z=1;const Q=mt(S);if((Q.width>O||Q.height>O)&&(Z=O/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const oe=Math.floor(Z*Q.width),he=Math.floor(Z*Q.height);u===void 0&&(u=v(oe,he));const X=_?v(oe,he):u;return X.width=oe,X.height=he,X.getContext("2d").drawImage(S,0,0,oe,he),Ve("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+oe+"x"+he+")."),X}else return"data"in S&&Ve("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),S;return S}function m(S){return S.generateMipmaps}function M(S){n.generateMipmap(S)}function E(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(S,_,O,Z,Q,oe=!1){if(S!==null){if(n[S]!==void 0)return n[S];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let he;Z&&(he=e.get("EXT_texture_norm16"),he||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=_;if(_===n.RED&&(O===n.FLOAT&&(X=n.R32F),O===n.HALF_FLOAT&&(X=n.R16F),O===n.UNSIGNED_BYTE&&(X=n.R8),O===n.UNSIGNED_SHORT&&he&&(X=he.R16_EXT),O===n.SHORT&&he&&(X=he.R16_SNORM_EXT)),_===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(X=n.R8UI),O===n.UNSIGNED_SHORT&&(X=n.R16UI),O===n.UNSIGNED_INT&&(X=n.R32UI),O===n.BYTE&&(X=n.R8I),O===n.SHORT&&(X=n.R16I),O===n.INT&&(X=n.R32I)),_===n.RG&&(O===n.FLOAT&&(X=n.RG32F),O===n.HALF_FLOAT&&(X=n.RG16F),O===n.UNSIGNED_BYTE&&(X=n.RG8),O===n.UNSIGNED_SHORT&&he&&(X=he.RG16_EXT),O===n.SHORT&&he&&(X=he.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(X=n.RG8UI),O===n.UNSIGNED_SHORT&&(X=n.RG16UI),O===n.UNSIGNED_INT&&(X=n.RG32UI),O===n.BYTE&&(X=n.RG8I),O===n.SHORT&&(X=n.RG16I),O===n.INT&&(X=n.RG32I)),_===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(X=n.RGB8UI),O===n.UNSIGNED_SHORT&&(X=n.RGB16UI),O===n.UNSIGNED_INT&&(X=n.RGB32UI),O===n.BYTE&&(X=n.RGB8I),O===n.SHORT&&(X=n.RGB16I),O===n.INT&&(X=n.RGB32I)),_===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),O===n.UNSIGNED_INT&&(X=n.RGBA32UI),O===n.BYTE&&(X=n.RGBA8I),O===n.SHORT&&(X=n.RGBA16I),O===n.INT&&(X=n.RGBA32I)),_===n.RGB&&(O===n.UNSIGNED_SHORT&&he&&(X=he.RGB16_EXT),O===n.SHORT&&he&&(X=he.RGB16_SNORM_EXT),O===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),_===n.RGBA){const q=oe?ho:st.getTransfer(Q);O===n.FLOAT&&(X=n.RGBA32F),O===n.HALF_FLOAT&&(X=n.RGBA16F),O===n.UNSIGNED_BYTE&&(X=q===ft?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT&&he&&(X=he.RGBA16_EXT),O===n.SHORT&&he&&(X=he.RGBA16_SNORM_EXT),O===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function P(S,_){let O;return S?_===null||_===ci||_===Ya?O=n.DEPTH24_STENCIL8:_===ni?O=n.DEPTH32F_STENCIL8:_===qa&&(O=n.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ci||_===Ya?O=n.DEPTH_COMPONENT24:_===ni?O=n.DEPTH_COMPONENT32F:_===qa&&(O=n.DEPTH_COMPONENT16),O}function w(S,_){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Vt&&S.minFilter!==Yt?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function C(S){const _=S.target;_.removeEventListener("dispose",C),T(_),_.isVideoTexture&&d.delete(_),_.isHTMLTexture&&f.delete(_)}function x(S){const _=S.target;_.removeEventListener("dispose",x),A(_)}function T(S){const _=i.get(S);if(_.__webglInit===void 0)return;const O=S.source,Z=h.get(O);if(Z){const Q=Z[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&L(S),Object.keys(Z).length===0&&h.delete(O)}i.remove(S)}function L(S){const _=i.get(S);n.deleteTexture(_.__webglTexture);const O=S.source,Z=h.get(O);delete Z[_.__cacheKey],s.memory.textures--}function A(S){const _=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(_.__webglFramebuffer[Z]))for(let Q=0;Q<_.__webglFramebuffer[Z].length;Q++)n.deleteFramebuffer(_.__webglFramebuffer[Z][Q]);else n.deleteFramebuffer(_.__webglFramebuffer[Z]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[Z])}else{if(Array.isArray(_.__webglFramebuffer))for(let Z=0;Z<_.__webglFramebuffer.length;Z++)n.deleteFramebuffer(_.__webglFramebuffer[Z]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Z=0;Z<_.__webglColorRenderbuffer.length;Z++)_.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[Z]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=S.textures;for(let Z=0,Q=O.length;Z<Q;Z++){const oe=i.get(O[Z]);oe.__webglTexture&&(n.deleteTexture(oe.__webglTexture),s.memory.textures--),i.remove(O[Z])}i.remove(S)}let F=0;function W(){F=0}function Y(){return F}function I(S){F=S}function H(){const S=F;return S>=r.maxTextures&&Ve("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),F+=1,S}function k(S){const _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function ee(S,_){const O=i.get(S);if(S.isVideoTexture&&tt(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&O.__version!==S.version){const Z=S.image;if(Z===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(O,S,_);return}}else S.isExternalTexture&&(O.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+_)}function re(S,_){const O=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){ve(O,S,_);return}else S.isExternalTexture&&(O.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+_)}function ge(S,_){const O=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){ve(O,S,_);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+_)}function ie(S,_){const O=i.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&O.__version!==S.version){we(O,S,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+_)}const fe={[oo]:n.REPEAT,[bi]:n.CLAMP_TO_EDGE,[Ol]:n.MIRRORED_REPEAT},Fe={[Vt]:n.NEAREST,[Ap]:n.NEAREST_MIPMAP_NEAREST,[ds]:n.NEAREST_MIPMAP_LINEAR,[Yt]:n.LINEAR,[Bo]:n.LINEAR_MIPMAP_NEAREST,[cr]:n.LINEAR_MIPMAP_LINEAR},pe={[Pp]:n.NEVER,[Np]:n.ALWAYS,[Dp]:n.LESS,[Bc]:n.LEQUAL,[Lp]:n.EQUAL,[kc]:n.GEQUAL,[Ip]:n.GREATER,[Up]:n.NOTEQUAL};function Ce(S,_){if(_.type===ni&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Yt||_.magFilter===Bo||_.magFilter===ds||_.magFilter===cr||_.minFilter===Yt||_.minFilter===Bo||_.minFilter===ds||_.minFilter===cr)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,fe[_.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,fe[_.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,fe[_.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,Fe[_.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,Fe[_.minFilter]),_.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,pe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Vt||_.minFilter!==ds&&_.minFilter!==cr||_.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function j(S,_){let O=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",C));const Z=_.source;let Q=h.get(Z);Q===void 0&&(Q={},h.set(Z,Q));const oe=k(_);if(oe!==S.__cacheKey){Q[oe]===void 0&&(Q[oe]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,O=!0),Q[oe].usedTimes++;const he=Q[S.__cacheKey];he!==void 0&&(Q[S.__cacheKey].usedTimes--,he.usedTimes===0&&L(_)),S.__cacheKey=oe,S.__webglTexture=Q[oe].texture}return O}function _e(S,_,O){return Math.floor(Math.floor(S/O)/_)}function ae(S,_,O,Z){const oe=S.updateRanges;if(oe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,O,Z,_.data);else{oe.sort((me,se)=>me.start-se.start);let he=0;for(let me=1;me<oe.length;me++){const se=oe[he],ne=oe[me],Ue=se.start+se.count,Ge=_e(ne.start,_.width,4),Qe=_e(se.start,_.width,4);ne.start<=Ue+1&&Ge===Qe&&_e(ne.start+ne.count-1,_.width,4)===Ge?se.count=Math.max(se.count,ne.start+ne.count-se.start):(++he,oe[he]=ne)}oe.length=he+1;const X=t.getParameter(n.UNPACK_ROW_LENGTH),q=t.getParameter(n.UNPACK_SKIP_PIXELS),ce=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let me=0,se=oe.length;me<se;me++){const ne=oe[me],Ue=Math.floor(ne.start/4),Ge=Math.ceil(ne.count/4),Qe=Ue%_.width,D=Math.floor(Ue/_.width),le=Ge,K=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Qe),t.pixelStorei(n.UNPACK_SKIP_ROWS,D),t.texSubImage2D(n.TEXTURE_2D,0,Qe,D,le,K,O,Z,_.data)}S.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,X),t.pixelStorei(n.UNPACK_SKIP_PIXELS,q),t.pixelStorei(n.UNPACK_SKIP_ROWS,ce)}}function ve(S,_,O){let Z=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Z=n.TEXTURE_3D);const Q=j(S,_),oe=_.source;t.bindTexture(Z,S.__webglTexture,n.TEXTURE0+O);const he=i.get(oe);if(oe.version!==he.__version||Q===!0){if(t.activeTexture(n.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const K=st.getPrimaries(st.workingColorSpace),Ee=_.colorSpace===Hi?null:st.getPrimaries(_.colorSpace),de=_.colorSpace===Hi||K===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de)}t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let q=g(_.image,!1,r.maxTextureSize);q=ue(_,q);const ce=a.convert(_.format,_.colorSpace),me=a.convert(_.type);let se=b(_.internalFormat,ce,me,_.normalized,_.colorSpace,_.isVideoTexture);Ce(Z,_);let ne;const Ue=_.mipmaps,Ge=_.isVideoTexture!==!0,Qe=he.__version===void 0||Q===!0,D=oe.dataReady,le=w(_,q);if(_.isDepthTexture)se=P(_.format===ur,_.type),Qe&&(Ge?t.texStorage2D(n.TEXTURE_2D,1,se,q.width,q.height):t.texImage2D(n.TEXTURE_2D,0,se,q.width,q.height,0,ce,me,null));else if(_.isDataTexture)if(Ue.length>0){Ge&&Qe&&t.texStorage2D(n.TEXTURE_2D,le,se,Ue[0].width,Ue[0].height);for(let K=0,Ee=Ue.length;K<Ee;K++)ne=Ue[K],Ge?D&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,ne.width,ne.height,ce,me,ne.data):t.texImage2D(n.TEXTURE_2D,K,se,ne.width,ne.height,0,ce,me,ne.data);_.generateMipmaps=!1}else Ge?(Qe&&t.texStorage2D(n.TEXTURE_2D,le,se,q.width,q.height),D&&ae(_,q,ce,me)):t.texImage2D(n.TEXTURE_2D,0,se,q.width,q.height,0,ce,me,q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ge&&Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,se,Ue[0].width,Ue[0].height,q.depth);for(let K=0,Ee=Ue.length;K<Ee;K++)if(ne=Ue[K],_.format!==Wn)if(ce!==null)if(Ge){if(D)if(_.layerUpdates.size>0){const de=Qu(ne.width,ne.height,_.format,_.type);for(const te of _.layerUpdates){const Le=ne.data.subarray(te*de/ne.data.BYTES_PER_ELEMENT,(te+1)*de/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,te,ne.width,ne.height,1,ce,Le)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,ne.width,ne.height,q.depth,ce,ne.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,se,ne.width,ne.height,q.depth,0,ne.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?D&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,ne.width,ne.height,q.depth,ce,me,ne.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,se,ne.width,ne.height,q.depth,0,ce,me,ne.data)}else{Ge&&Qe&&t.texStorage2D(n.TEXTURE_2D,le,se,Ue[0].width,Ue[0].height);for(let K=0,Ee=Ue.length;K<Ee;K++)ne=Ue[K],_.format!==Wn?ce!==null?Ge?D&&t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,ne.width,ne.height,ce,ne.data):t.compressedTexImage2D(n.TEXTURE_2D,K,se,ne.width,ne.height,0,ne.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?D&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,ne.width,ne.height,ce,me,ne.data):t.texImage2D(n.TEXTURE_2D,K,se,ne.width,ne.height,0,ce,me,ne.data)}else if(_.isDataArrayTexture)if(Ge){if(Qe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,le,se,q.width,q.height,q.depth),D)if(_.layerUpdates.size>0){const K=Qu(q.width,q.height,_.format,_.type);for(const Ee of _.layerUpdates){const de=q.data.subarray(Ee*K/q.data.BYTES_PER_ELEMENT,(Ee+1)*K/q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ee,q.width,q.height,1,ce,me,de)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,ce,me,q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,se,q.width,q.height,q.depth,0,ce,me,q.data);else if(_.isData3DTexture)Ge?(Qe&&t.texStorage3D(n.TEXTURE_3D,le,se,q.width,q.height,q.depth),D&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,ce,me,q.data)):t.texImage3D(n.TEXTURE_3D,0,se,q.width,q.height,q.depth,0,ce,me,q.data);else if(_.isFramebufferTexture){if(Qe)if(Ge)t.texStorage2D(n.TEXTURE_2D,le,se,q.width,q.height);else{let K=q.width,Ee=q.height;for(let de=0;de<le;de++)t.texImage2D(n.TEXTURE_2D,de,se,K,Ee,0,ce,me,null),K>>=1,Ee>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){const K=n.canvas;if(K.hasAttribute("layoutsubtree")||K.setAttribute("layoutsubtree","true"),q.parentNode!==K){K.appendChild(q),f.add(_),K.onpaint=Ke=>{const At=Ke.changedElements;for(const gt of f)At.includes(gt.image)&&(gt.needsUpdate=!0)},K.requestPaint();return}const Ee=0,de=n.RGBA,te=n.RGBA,Le=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,Ee,de,te,Le,q),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Ge&&Qe){const K=mt(Ue[0]);t.texStorage2D(n.TEXTURE_2D,le,se,K.width,K.height)}for(let K=0,Ee=Ue.length;K<Ee;K++)ne=Ue[K],Ge?D&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,ce,me,ne):t.texImage2D(n.TEXTURE_2D,K,se,ce,me,ne);_.generateMipmaps=!1}else if(Ge){if(Qe){const K=mt(q);t.texStorage2D(n.TEXTURE_2D,le,se,K.width,K.height)}D&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,me,q)}else t.texImage2D(n.TEXTURE_2D,0,se,ce,me,q);m(_)&&M(Z),he.__version=oe.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function we(S,_,O){if(_.image.length!==6)return;const Z=j(S,_),Q=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+O);const oe=i.get(Q);if(Q.version!==oe.__version||Z===!0){t.activeTexture(n.TEXTURE0+O);const he=st.getPrimaries(st.workingColorSpace),X=_.colorSpace===Hi?null:st.getPrimaries(_.colorSpace),q=_.colorSpace===Hi||he===X?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);const ce=_.isCompressedTexture||_.image[0].isCompressedTexture,me=_.image[0]&&_.image[0].isDataTexture,se=[];for(let te=0;te<6;te++)!ce&&!me?se[te]=g(_.image[te],!0,r.maxCubemapSize):se[te]=me?_.image[te].image:_.image[te],se[te]=ue(_,se[te]);const ne=se[0],Ue=a.convert(_.format,_.colorSpace),Ge=a.convert(_.type),Qe=b(_.internalFormat,Ue,Ge,_.normalized,_.colorSpace),D=_.isVideoTexture!==!0,le=oe.__version===void 0||Z===!0,K=Q.dataReady;let Ee=w(_,ne);Ce(n.TEXTURE_CUBE_MAP,_);let de;if(ce){D&&le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Qe,ne.width,ne.height);for(let te=0;te<6;te++){de=se[te].mipmaps;for(let Le=0;Le<de.length;Le++){const Ke=de[Le];_.format!==Wn?Ue!==null?D?K&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le,0,0,Ke.width,Ke.height,Ue,Ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le,Qe,Ke.width,Ke.height,0,Ke.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le,0,0,Ke.width,Ke.height,Ue,Ge,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le,Qe,Ke.width,Ke.height,0,Ue,Ge,Ke.data)}}}else{if(de=_.mipmaps,D&&le){de.length>0&&Ee++;const te=mt(se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Qe,te.width,te.height)}for(let te=0;te<6;te++)if(me){D?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,se[te].width,se[te].height,Ue,Ge,se[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Qe,se[te].width,se[te].height,0,Ue,Ge,se[te].data);for(let Le=0;Le<de.length;Le++){const At=de[Le].image[te].image;D?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le+1,0,0,At.width,At.height,Ue,Ge,At.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le+1,Qe,At.width,At.height,0,Ue,Ge,At.data)}}else{D?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ue,Ge,se[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Qe,Ue,Ge,se[te]);for(let Le=0;Le<de.length;Le++){const Ke=de[Le];D?K&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le+1,0,0,Ue,Ge,Ke.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,Le+1,Qe,Ue,Ge,Ke.image[te])}}}m(_)&&M(n.TEXTURE_CUBE_MAP),oe.__version=Q.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function Se(S,_,O,Z,Q,oe){const he=a.convert(O.format,O.colorSpace),X=a.convert(O.type),q=b(O.internalFormat,he,X,O.normalized,O.colorSpace),ce=i.get(_),me=i.get(O);if(me.__renderTarget=_,!ce.__hasExternalTextures){const se=Math.max(1,_.width>>oe),ne=Math.max(1,_.height>>oe);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,oe,q,se,ne,_.depth,0,he,X,null):t.texImage2D(Q,oe,q,se,ne,0,he,X,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),Ie(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,Q,me.__webglTexture,0,ze(_)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,Q,me.__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(S,_,O){if(n.bindRenderbuffer(n.RENDERBUFFER,S),_.depthBuffer){const Z=_.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,oe=P(_.stencilBuffer,Q),he=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ie(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ze(_),oe,_.width,_.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ze(_),oe,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,oe,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,S)}else{const Z=_.textures;for(let Q=0;Q<Z.length;Q++){const oe=Z[Q],he=a.convert(oe.format,oe.colorSpace),X=a.convert(oe.type),q=b(oe.internalFormat,he,X,oe.normalized,oe.colorSpace);Ie(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ze(_),q,_.width,_.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ze(_),q,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,q,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pe(S,_,O){const Z=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(_.depthTexture);if(Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Z){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Ce(n.TEXTURE_CUBE_MAP,_.depthTexture);const ce=a.convert(_.depthTexture.format),me=a.convert(_.depthTexture.type);let se;_.depthTexture.format===Ri?se=n.DEPTH_COMPONENT24:_.depthTexture.format===ur&&(se=n.DEPTH24_STENCIL8);for(let ne=0;ne<6;ne++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,se,_.width,_.height,0,ce,me,null)}}else ee(_.depthTexture,0);const oe=Q.__webglTexture,he=ze(_),X=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+O:n.TEXTURE_2D,q=_.depthTexture.format===ur?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ri)Ie(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,X,oe,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,q,X,oe,0);else if(_.depthTexture.format===ur)Ie(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,X,oe,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,q,X,oe,0);else throw new Error("Unknown depthTexture format")}function He(S){const _=i.get(S),O=S.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==S.depthTexture){const Z=S.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Z){const Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=Z}if(S.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let Z=0;Z<6;Z++)Pe(_.__webglFramebuffer[Z],S,Z);else{const Z=S.texture.mipmaps;Z&&Z.length>0?Pe(_.__webglFramebuffer[0],S,0):Pe(_.__webglFramebuffer,S,0)}else if(O){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]===void 0)_.__webglDepthbuffer[Z]=n.createRenderbuffer(),Be(_.__webglDepthbuffer[Z],S,!1);else{const Q=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=_.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,oe)}}else{const Z=S.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Be(_.__webglDepthbuffer,S,!1);else{const Q=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,oe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Xe(S,_,O){const Z=i.get(S);_!==void 0&&Se(Z.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&He(S)}function Re(S){const _=S.texture,O=i.get(S),Z=i.get(_);S.addEventListener("dispose",x);const Q=S.textures,oe=S.isWebGLCubeRenderTarget===!0,he=Q.length>1;if(he||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=_.version,s.memory.textures++),oe){O.__webglFramebuffer=[];for(let X=0;X<6;X++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[X]=[];for(let q=0;q<_.mipmaps.length;q++)O.__webglFramebuffer[X][q]=n.createFramebuffer()}else O.__webglFramebuffer[X]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let X=0;X<_.mipmaps.length;X++)O.__webglFramebuffer[X]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(he)for(let X=0,q=Q.length;X<q;X++){const ce=i.get(Q[X]);ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture(),s.memory.textures++)}if(S.samples>0&&Ie(S)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let X=0;X<Q.length;X++){const q=Q[X];O.__webglColorRenderbuffer[X]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[X]);const ce=a.convert(q.format,q.colorSpace),me=a.convert(q.type),se=b(q.internalFormat,ce,me,q.normalized,q.colorSpace,S.isXRRenderTarget===!0),ne=ze(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,se,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.RENDERBUFFER,O.__webglColorRenderbuffer[X])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Be(O.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Ce(n.TEXTURE_CUBE_MAP,_);for(let X=0;X<6;X++)if(_.mipmaps&&_.mipmaps.length>0)for(let q=0;q<_.mipmaps.length;q++)Se(O.__webglFramebuffer[X][q],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X,q);else Se(O.__webglFramebuffer[X],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);m(_)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let X=0,q=Q.length;X<q;X++){const ce=Q[X],me=i.get(ce);let se=n.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(se=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(se,me.__webglTexture),Ce(se,ce),Se(O.__webglFramebuffer,S,ce,n.COLOR_ATTACHMENT0+X,se,0),m(ce)&&M(se)}t.unbindTexture()}else{let X=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(X=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(X,Z.__webglTexture),Ce(X,_),_.mipmaps&&_.mipmaps.length>0)for(let q=0;q<_.mipmaps.length;q++)Se(O.__webglFramebuffer[q],S,_,n.COLOR_ATTACHMENT0,X,q);else Se(O.__webglFramebuffer,S,_,n.COLOR_ATTACHMENT0,X,0);m(_)&&M(X),t.unbindTexture()}S.depthBuffer&&He(S)}function J(S){const _=S.textures;for(let O=0,Z=_.length;O<Z;O++){const Q=_[O];if(m(Q)){const oe=E(S),he=i.get(Q).__webglTexture;t.bindTexture(oe,he),M(oe),t.unbindTexture()}}}const be=[],ke=[];function R(S){if(S.samples>0){if(Ie(S)===!1){const _=S.textures,O=S.width,Z=S.height;let Q=n.COLOR_BUFFER_BIT;const oe=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(S),X=_.length>1;if(X)for(let ce=0;ce<_.length;ce++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const q=S.texture.mipmaps;q&&q.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let ce=0;ce<_.length;ce++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),X){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[ce]);const me=i.get(_[ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,me,0)}n.blitFramebuffer(0,0,O,Z,0,0,O,Z,Q,n.NEAREST),l===!0&&(be.length=0,ke.length=0,be.push(n.COLOR_ATTACHMENT0+ce),S.depthBuffer&&S.resolveDepthBuffer===!1&&(be.push(oe),ke.push(oe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ke)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,be))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),X)for(let ce=0;ce<_.length;ce++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,he.__webglColorRenderbuffer[ce]);const me=i.get(_[ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,me,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const _=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function ze(S){return Math.min(r.maxSamples,S.samples)}function Ie(S){const _=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function tt(S){const _=s.render.frame;d.get(S)!==_&&(d.set(S,_),S.update())}function ue(S,_){const O=S.colorSpace,Z=S.format,Q=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||O!==uo&&O!==Hi&&(st.getTransfer(O)===ft?(Z!==Wn||Q!==Cn)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):lt("WebGLTextures: Unsupported texture color space:",O)),_}function mt(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=W,this.getTextureUnits=Y,this.setTextureUnits=I,this.setTexture2D=ee,this.setTexture2DArray=re,this.setTexture3D=ge,this.setTextureCube=ie,this.rebindTextures=Xe,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=R,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function w4(n,e){function t(i,r=Hi){let a;const s=st.getTransfer(r);if(i===Cn)return n.UNSIGNED_BYTE;if(i===Ic)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Uc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Dd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ld)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Cd)return n.BYTE;if(i===Pd)return n.SHORT;if(i===qa)return n.UNSIGNED_SHORT;if(i===Lc)return n.INT;if(i===ci)return n.UNSIGNED_INT;if(i===ni)return n.FLOAT;if(i===Ai)return n.HALF_FLOAT;if(i===Id)return n.ALPHA;if(i===Ud)return n.RGB;if(i===Wn)return n.RGBA;if(i===Ri)return n.DEPTH_COMPONENT;if(i===ur)return n.DEPTH_STENCIL;if(i===Nd)return n.RED;if(i===Nc)return n.RED_INTEGER;if(i===Tr)return n.RG;if(i===Fc)return n.RG_INTEGER;if(i===Oc)return n.RGBA_INTEGER;if(i===js||i===Ks||i===Zs||i===$s)if(s===ft)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===js)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ks)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$s)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===js)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ks)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$s)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bl||i===kl||i===zl||i===Gl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Bl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hl||i===Vl||i===Wl||i===Xl||i===ql||i===lo||i===Yl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Hl||i===Vl)return s===ft?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Wl)return s===ft?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Xl)return a.COMPRESSED_R11_EAC;if(i===ql)return a.COMPRESSED_SIGNED_R11_EAC;if(i===lo)return a.COMPRESSED_RG11_EAC;if(i===Yl)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===jl||i===Kl||i===Zl||i===$l||i===Jl||i===Ql||i===ec||i===tc||i===nc||i===ic||i===rc||i===ac||i===sc||i===oc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===jl)return s===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kl)return s===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zl)return s===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$l)return s===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jl)return s===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ql)return s===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ec)return s===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tc)return s===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nc)return s===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ic)return s===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rc)return s===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ac)return s===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sc)return s===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===oc)return s===ft?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lc||i===cc||i===uc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===lc)return s===ft?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hc||i===dc||i===co||i===fc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===hc)return a.COMPRESSED_RED_RGTC1_EXT;if(i===dc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===co)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ya?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const A4=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R4=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class C4{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Xd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ui({vertexShader:A4,fragmentShader:R4,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new cn(new wo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class P4 extends Qi{constructor(e,t){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,d=null,f=null,u=null,h=null,p=null;const v=typeof XRWebGLBinding<"u",g=new C4,m={},M=t.getContextAttributes();let E=null,b=null;const P=[],w=[],C=new $e;let x=null;const T=new Rn;T.viewport=new Pt;const L=new Rn;L.viewport=new Pt;const A=[T,L],F=new B2;let W=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let _e=P[j];return _e===void 0&&(_e=new Wo,P[j]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(j){let _e=P[j];return _e===void 0&&(_e=new Wo,P[j]=_e),_e.getGripSpace()},this.getHand=function(j){let _e=P[j];return _e===void 0&&(_e=new Wo,P[j]=_e),_e.getHandSpace()};function I(j){const _e=w.indexOf(j.inputSource);if(_e===-1)return;const ae=P[_e];ae!==void 0&&(ae.update(j.inputSource,j.frame,c||s),ae.dispatchEvent({type:j.type,data:j.inputSource}))}function H(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",k);for(let j=0;j<P.length;j++){const _e=w[j];_e!==null&&(w[j]=null,P[j].disconnect(_e))}W=null,Y=null,g.reset();for(const j in m)delete m[j];e.setRenderTarget(E),h=null,u=null,f=null,r=null,b=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",H),r.addEventListener("inputsourceschange",k),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,ve=null,we=null;M.depth&&(we=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=M.stencil?ur:Ri,ve=M.stencil?Ya:ci);const Se={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:a};f=this.getBinding(),u=f.createProjectionLayer(Se),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new si(u.textureWidth,u.textureHeight,{format:Wn,type:Cn,depthTexture:new ma(u.textureWidth,u.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ae={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:a};h=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new si(h.framebufferWidth,h.framebufferHeight,{format:Wn,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),Ce.setContext(r),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(j){for(let _e=0;_e<j.removed.length;_e++){const ae=j.removed[_e],ve=w.indexOf(ae);ve>=0&&(w[ve]=null,P[ve].disconnect(ae))}for(let _e=0;_e<j.added.length;_e++){const ae=j.added[_e];let ve=w.indexOf(ae);if(ve===-1){for(let Se=0;Se<P.length;Se++)if(Se>=w.length){w.push(ae),ve=Se;break}else if(w[Se]===null){w[Se]=ae,ve=Se;break}if(ve===-1)break}const we=P[ve];we&&we.connect(ae)}}const ee=new N,re=new N;function ge(j,_e,ae){ee.setFromMatrixPosition(_e.matrixWorld),re.setFromMatrixPosition(ae.matrixWorld);const ve=ee.distanceTo(re),we=_e.projectionMatrix.elements,Se=ae.projectionMatrix.elements,Be=we[14]/(we[10]-1),Pe=we[14]/(we[10]+1),He=(we[9]+1)/we[5],Xe=(we[9]-1)/we[5],Re=(we[8]-1)/we[0],J=(Se[8]+1)/Se[0],be=Be*Re,ke=Be*J,R=ve/(-Re+J),ze=R*-Re;if(_e.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ze),j.translateZ(R),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),we[10]===-1)j.projectionMatrix.copy(_e.projectionMatrix),j.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const Ie=Be+R,tt=Pe+R,ue=be-ze,mt=ke+(ve-ze),S=He*Pe/tt*Ie,_=Xe*Pe/tt*Ie;j.projectionMatrix.makePerspective(ue,mt,S,_,Ie,tt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ie(j,_e){_e===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(_e.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let _e=j.near,ae=j.far;g.texture!==null&&(g.depthNear>0&&(_e=g.depthNear),g.depthFar>0&&(ae=g.depthFar)),F.near=L.near=T.near=_e,F.far=L.far=T.far=ae,(W!==F.near||Y!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),W=F.near,Y=F.far),F.layers.mask=j.layers.mask|6,T.layers.mask=F.layers.mask&-5,L.layers.mask=F.layers.mask&-3;const ve=j.parent,we=F.cameras;ie(F,ve);for(let Se=0;Se<we.length;Se++)ie(we[Se],ve);we.length===2?ge(F,T,L):F.projectionMatrix.copy(T.projectionMatrix),fe(j,F,ve)};function fe(j,_e,ae){ae===null?j.matrix.copy(_e.matrixWorld):(j.matrix.copy(ae.matrixWorld),j.matrix.invert(),j.matrix.multiply(_e.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(_e.projectionMatrix),j.projectionMatrixInverse.copy(_e.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ja*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&h===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(j){return m[j]};let Fe=null;function pe(j,_e){if(d=_e.getViewerPose(c||s),p=_e,d!==null){const ae=d.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let ve=!1;ae.length!==F.cameras.length&&(F.cameras.length=0,ve=!0);for(let Pe=0;Pe<ae.length;Pe++){const He=ae[Pe];let Xe=null;if(h!==null)Xe=h.getViewport(He);else{const J=f.getViewSubImage(u,He);Xe=J.viewport,Pe===0&&(e.setRenderTargetTextures(b,J.colorTexture,J.depthStencilTexture),e.setRenderTarget(b))}let Re=A[Pe];Re===void 0&&(Re=new Rn,Re.layers.enable(Pe),Re.viewport=new Pt,A[Pe]=Re),Re.matrix.fromArray(He.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(He.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Pe===0&&(F.matrix.copy(Re.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ve===!0&&F.cameras.push(Re)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const Pe=f.getDepthInformation(ae[0]);Pe&&Pe.isValid&&Pe.texture&&g.init(Pe,r.renderState)}if(we&&we.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let Pe=0;Pe<ae.length;Pe++){const He=ae[Pe].camera;if(He){let Xe=m[He];Xe||(Xe=new Xd,m[He]=Xe);const Re=f.getCameraImage(He);Xe.sourceTexture=Re}}}}for(let ae=0;ae<P.length;ae++){const ve=w[ae],we=P[ae];ve!==null&&we!==void 0&&we.update(ve,_e,c||s)}Fe&&Fe(j,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),p=null}const Ce=new Kd;Ce.setAnimationLoop(pe),this.setAnimationLoop=function(j){Fe=j},this.dispose=function(){}}}const D4=new Tt,nf=new Ye;nf.set(-1,0,0,0,1,0,0,0,1);function L4(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,qd(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,M,E,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?a(g,m):m.isMeshLambertMaterial?(a(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(a(g,m),f(g,m)):m.isMeshPhongMaterial?(a(g,m),d(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(a(g,m),u(g,m),m.isMeshPhysicalMaterial&&h(g,m,b)):m.isMeshMatcapMaterial?(a(g,m),p(g,m)):m.isMeshDepthMaterial?a(g,m):m.isMeshDistanceMaterial?(a(g,m),v(g,m)):m.isMeshNormalMaterial?a(g,m):m.isLineBasicMaterial?(s(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,M,E):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===hn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===hn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const M=e.get(m),E=M.envMap,b=M.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(D4.makeRotationFromEuler(b)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(nf),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function s(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,E){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=E*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function d(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function h(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===hn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const M=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function I4(n,e,t,i){let r={},a={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,E){const b=E.program;i.uniformBlockBinding(M,b)}function c(M,E){let b=r[M.id];b===void 0&&(p(M),b=d(M),r[M.id]=b,M.addEventListener("dispose",g));const P=E.program;i.updateUBOMapping(M,P);const w=e.render.frame;a[M.id]!==w&&(u(M),a[M.id]=w)}function d(M){const E=f();M.__bindingPointIndex=E;const b=n.createBuffer(),P=M.__size,w=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,P,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,b),b}function f(){for(let M=0;M<o;M++)if(s.indexOf(M)===-1)return s.push(M),M;return lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const E=r[M.id],b=M.uniforms,P=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let w=0,C=b.length;w<C;w++){const x=Array.isArray(b[w])?b[w]:[b[w]];for(let T=0,L=x.length;T<L;T++){const A=x[T];if(h(A,w,T,P)===!0){const F=A.__offset,W=Array.isArray(A.value)?A.value:[A.value];let Y=0;for(let I=0;I<W.length;I++){const H=W[I],k=v(H);typeof H=="number"||typeof H=="boolean"?(A.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,F+Y,A.__data)):H.isMatrix3?(A.__data[0]=H.elements[0],A.__data[1]=H.elements[1],A.__data[2]=H.elements[2],A.__data[3]=0,A.__data[4]=H.elements[3],A.__data[5]=H.elements[4],A.__data[6]=H.elements[5],A.__data[7]=0,A.__data[8]=H.elements[6],A.__data[9]=H.elements[7],A.__data[10]=H.elements[8],A.__data[11]=0):ArrayBuffer.isView(H)?A.__data.set(new H.constructor(H.buffer,H.byteOffset,A.__data.length)):(H.toArray(A.__data,Y),Y+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(M,E,b,P){const w=M.value,C=E+"_"+b;if(P[C]===void 0)return typeof w=="number"||typeof w=="boolean"?P[C]=w:ArrayBuffer.isView(w)?P[C]=w.slice():P[C]=w.clone(),!0;{const x=P[C];if(typeof w=="number"||typeof w=="boolean"){if(x!==w)return P[C]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(x.equals(w)===!1)return x.copy(w),!0}}return!1}function p(M){const E=M.uniforms;let b=0;const P=16;for(let C=0,x=E.length;C<x;C++){const T=Array.isArray(E[C])?E[C]:[E[C]];for(let L=0,A=T.length;L<A;L++){const F=T[L],W=Array.isArray(F.value)?F.value:[F.value];for(let Y=0,I=W.length;Y<I;Y++){const H=W[Y],k=v(H),ee=b%P,re=ee%k.boundary,ge=ee+re;b+=re,ge!==0&&P-ge<k.storage&&(b+=P-ge),F.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=b,b+=k.storage}}}const w=b%P;return w>0&&(b+=P-w),M.__size=b,M.__cache={},this}function v(M){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(E.boundary=16,E.storage=M.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",M),E}function g(M){const E=M.target;E.removeEventListener("dispose",g);const b=s.indexOf(E.__bindingPointIndex);s.splice(b,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete a[E.id]}function m(){for(const M in r)n.deleteBuffer(r[M]);s=[],r={},a={}}return{bind:l,update:c,dispose:m}}const U4=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let $n=null;function N4(){return $n===null&&($n=new M2(U4,16,16,Tr,Ai),$n.name="DFG_LUT",$n.minFilter=Yt,$n.magFilter=Yt,$n.wrapS=bi,$n.wrapT=bi,$n.generateMipmaps=!1,$n.needsUpdate=!0),$n}class F4{constructor(e={}){const{canvas:t=Op(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:h=Cn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;const v=h,g=new Set([Oc,Fc,Nc]),m=new Set([Cn,ci,qa,Ya,Ic,Uc]),M=new Uint32Array(4),E=new Int32Array(4),b=new N;let P=null,w=null;const C=[],x=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let A=!1,F=null;this._outputColorSpace=yn;let W=0,Y=0,I=null,H=-1,k=null;const ee=new Pt,re=new Pt;let ge=null;const ie=new dt(0);let fe=0,Fe=t.width,pe=t.height,Ce=1,j=null,_e=null;const ae=new Pt(0,0,Fe,pe),ve=new Pt(0,0,Fe,pe);let we=!1;const Se=new Hd;let Be=!1,Pe=!1;const He=new Tt,Xe=new N,Re=new Pt,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let be=!1;function ke(){return I===null?Ce:1}let R=i;function ze(y,U){return t.getContext(y,U)}try{const y={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Dc}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",Ke,!1),R===null){const U="webgl2";if(R=ze(U,y),R===null)throw ze(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw lt("WebGLRenderer: "+y.message),y}let Ie,tt,ue,mt,S,_,O,Z,Q,oe,he,X,q,ce,me,se,ne,Ue,Ge,Qe,D,le,K;function Ee(){Ie=new N3(R),Ie.init(),D=new w4(R,Ie),tt=new A3(R,Ie,e,D),ue=new E4(R,Ie),tt.reversedDepthBuffer&&u&&ue.buffers.depth.setReversed(!0),mt=new B3(R),S=new u4,_=new T4(R,Ie,ue,S,tt,D,mt),O=new U3(L),Z=new H2(R),le=new T3(R,Z),Q=new F3(R,Z,mt,le),oe=new z3(R,Q,Z,le,mt),Ue=new k3(R,tt,_),me=new R3(S),he=new c4(L,O,Ie,tt,le,me),X=new L4(L,S),q=new d4,ce=new v4(Ie),ne=new E3(L,O,ue,oe,p,l),se=new b4(L,oe,tt),K=new I4(R,mt,tt,ue),Ge=new w3(R,Ie,mt),Qe=new O3(R,Ie,mt),mt.programs=he.programs,L.capabilities=tt,L.extensions=Ie,L.properties=S,L.renderLists=q,L.shadowMap=se,L.state=ue,L.info=mt}Ee(),v!==Cn&&(T=new H3(v,t.width,t.height,r,a));const de=new P4(L,R);this.xr=de,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const y=Ie.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ie.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(y){y!==void 0&&(Ce=y,this.setSize(Fe,pe,!1))},this.getSize=function(y){return y.set(Fe,pe)},this.setSize=function(y,U,V=!0){if(de.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}Fe=y,pe=U,t.width=Math.floor(y*Ce),t.height=Math.floor(U*Ce),V===!0&&(t.style.width=y+"px",t.style.height=U+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(Fe*Ce,pe*Ce).floor()},this.setDrawingBufferSize=function(y,U,V){Fe=y,pe=U,Ce=V,t.width=Math.floor(y*V),t.height=Math.floor(U*V),this.setViewport(0,0,y,U)},this.setEffects=function(y){if(v===Cn){lt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let U=0;U<y.length;U++)if(y[U].isOutputPass===!0){Ve("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(ee)},this.getViewport=function(y){return y.copy(ae)},this.setViewport=function(y,U,V,z){y.isVector4?ae.set(y.x,y.y,y.z,y.w):ae.set(y,U,V,z),ue.viewport(ee.copy(ae).multiplyScalar(Ce).round())},this.getScissor=function(y){return y.copy(ve)},this.setScissor=function(y,U,V,z){y.isVector4?ve.set(y.x,y.y,y.z,y.w):ve.set(y,U,V,z),ue.scissor(re.copy(ve).multiplyScalar(Ce).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(y){ue.setScissorTest(we=y)},this.setOpaqueSort=function(y){j=y},this.setTransparentSort=function(y){_e=y},this.getClearColor=function(y){return y.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,V=!0){let z=0;if(y){let G=!1;if(I!==null){const Me=I.texture.format;G=g.has(Me)}if(G){const Me=I.texture.type,Ae=m.has(Me),ye=ne.getClearColor(),De=ne.getClearAlpha(),Ne=ye.r,Ze=ye.g,nt=ye.b;Ae?(M[0]=Ne,M[1]=Ze,M[2]=nt,M[3]=De,R.clearBufferuiv(R.COLOR,0,M)):(E[0]=Ne,E[1]=Ze,E[2]=nt,E[3]=De,R.clearBufferiv(R.COLOR,0,E))}else z|=R.COLOR_BUFFER_BIT}U&&(z|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(z|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&R.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),F=y},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",Ke,!1),ne.dispose(),q.dispose(),ce.dispose(),S.dispose(),O.dispose(),oe.dispose(),le.dispose(),K.dispose(),he.dispose(),de.dispose(),de.removeEventListener("sessionstart",$c),de.removeEventListener("sessionend",Jc),er.stop()};function te(y){y.preventDefault(),Tu("WebGLRenderer: Context Lost."),A=!0}function Le(){Tu("WebGLRenderer: Context Restored."),A=!1;const y=mt.autoReset,U=se.enabled,V=se.autoUpdate,z=se.needsUpdate,G=se.type;Ee(),mt.autoReset=y,se.enabled=U,se.autoUpdate=V,se.needsUpdate=z,se.type=G}function Ke(y){lt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function At(y){const U=y.target;U.removeEventListener("dispose",At),gt(U)}function gt(y){di(y),S.remove(y)}function di(y){const U=S.get(y).programs;U!==void 0&&(U.forEach(function(V){he.releaseProgram(V)}),y.isShaderMaterial&&he.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,V,z,G,Me){U===null&&(U=J);const Ae=G.isMesh&&G.matrixWorld.determinant()<0,ye=uf(y,U,V,z,G);ue.setMaterial(z,Ae);let De=V.index,Ne=1;if(z.wireframe===!0){if(De=Q.getWireframeAttribute(V),De===void 0)return;Ne=2}const Ze=V.drawRange,nt=V.attributes.position;let Oe=Ze.start*Ne,_t=(Ze.start+Ze.count)*Ne;Me!==null&&(Oe=Math.max(Oe,Me.start*Ne),_t=Math.min(_t,(Me.start+Me.count)*Ne)),De!==null?(Oe=Math.max(Oe,0),_t=Math.min(_t,De.count)):nt!=null&&(Oe=Math.max(Oe,0),_t=Math.min(_t,nt.count));const Rt=_t-Oe;if(Rt<0||Rt===1/0)return;le.setup(G,z,ye,V,De);let bt,yt=Ge;if(De!==null&&(bt=Z.get(De),yt=Qe,yt.setIndex(bt)),G.isMesh)z.wireframe===!0?(ue.setLineWidth(z.wireframeLinewidth*ke()),yt.setMode(R.LINES)):yt.setMode(R.TRIANGLES);else if(G.isLine){let Wt=z.linewidth;Wt===void 0&&(Wt=1),ue.setLineWidth(Wt*ke()),G.isLineSegments?yt.setMode(R.LINES):G.isLineLoop?yt.setMode(R.LINE_LOOP):yt.setMode(R.LINE_STRIP)}else G.isPoints?yt.setMode(R.POINTS):G.isSprite&&yt.setMode(R.TRIANGLES);if(G.isBatchedMesh)if(Ie.get("WEBGL_multi_draw"))yt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Wt=G._multiDrawStarts,Te=G._multiDrawCounts,dn=G._multiDrawCount,ct=De?Z.get(De).bytesPerElement:1,Mn=S.get(z).currentProgram.getUniforms();for(let jn=0;jn<dn;jn++)Mn.setValue(R,"_gl_DrawID",jn),yt.render(Wt[jn]/ct,Te[jn])}else if(G.isInstancedMesh)yt.renderInstances(Oe,Rt,G.count);else if(V.isInstancedBufferGeometry){const Wt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Te=Math.min(V.instanceCount,Wt);yt.renderInstances(Oe,Rt,Te)}else yt.render(Oe,Rt)};function Yn(y,U,V){y.transparent===!0&&y.side===ti&&y.forceSinglePass===!1?(y.side=hn,y.needsUpdate=!0,cs(y,U,V),y.side=Ji,y.needsUpdate=!0,cs(y,U,V),y.side=ti):cs(y,U,V)}this.compile=function(y,U,V=null){V===null&&(V=y),w=ce.get(V),w.init(U),x.push(w),V.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),y!==V&&y.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(w.pushLight(G),G.castShadow&&w.pushShadow(G))}),w.setupLights();const z=new Set;return y.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Me=G.material;if(Me)if(Array.isArray(Me))for(let Ae=0;Ae<Me.length;Ae++){const ye=Me[Ae];Yn(ye,V,G),z.add(ye)}else Yn(Me,V,G),z.add(Me)}),w=x.pop(),z},this.compileAsync=function(y,U,V=null){const z=this.compile(y,U,V);return new Promise(G=>{function Me(){if(z.forEach(function(Ae){S.get(Ae).currentProgram.isReady()&&z.delete(Ae)}),z.size===0){G(y);return}setTimeout(Me,10)}Ie.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Co=null;function lf(y){Co&&Co(y)}function $c(){er.stop()}function Jc(){er.start()}const er=new Kd;er.setAnimationLoop(lf),typeof self<"u"&&er.setContext(self),this.setAnimationLoop=function(y){Co=y,de.setAnimationLoop(y),y===null?er.stop():er.start()},de.addEventListener("sessionstart",$c),de.addEventListener("sessionend",Jc),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;F!==null&&F.renderStart(y,U);const V=de.enabled===!0&&de.isPresenting===!0,z=T!==null&&(I===null||V)&&T.begin(L,I);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(U),U=de.getCamera()),y.isScene===!0&&y.onBeforeRender(L,y,U,I),w=ce.get(y,x.length),w.init(U),w.state.textureUnits=_.getTextureUnits(),x.push(w),He.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Se.setFromProjectionMatrix(He,ii,U.reversedDepth),Pe=this.localClippingEnabled,Be=me.init(this.clippingPlanes,Pe),P=q.get(y,C.length),P.init(),C.push(P),de.enabled===!0&&de.isPresenting===!0){const Ae=L.xr.getDepthSensingMesh();Ae!==null&&Po(Ae,U,-1/0,L.sortObjects)}Po(y,U,0,L.sortObjects),P.finish(),L.sortObjects===!0&&P.sort(j,_e),be=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,be&&ne.addToRenderList(P,y),this.info.render.frame++,Be===!0&&me.beginShadows();const G=w.state.shadowsArray;if(se.render(G,y,U),Be===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z&&T.hasRenderPass())===!1){const Ae=P.opaque,ye=P.transmissive;if(w.setupLights(),U.isArrayCamera){const De=U.cameras;if(ye.length>0)for(let Ne=0,Ze=De.length;Ne<Ze;Ne++){const nt=De[Ne];eu(Ae,ye,y,nt)}be&&ne.render(y);for(let Ne=0,Ze=De.length;Ne<Ze;Ne++){const nt=De[Ne];Qc(P,y,nt,nt.viewport)}}else ye.length>0&&eu(Ae,ye,y,U),be&&ne.render(y),Qc(P,y,U)}I!==null&&Y===0&&(_.updateMultisampleRenderTarget(I),_.updateRenderTargetMipmap(I)),z&&T.end(L),y.isScene===!0&&y.onAfterRender(L,y,U),le.resetDefaultState(),H=-1,k=null,x.pop(),x.length>0?(w=x[x.length-1],_.setTextureUnits(w.state.textureUnits),Be===!0&&me.setGlobalState(L.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?P=C[C.length-1]:P=null,F!==null&&F.renderEnd()};function Po(y,U,V,z){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLightProbeGrid)w.pushLightProbeGrid(y);else if(y.isLight)w.pushLight(y),y.castShadow&&w.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Se.intersectsSprite(y)){z&&Re.setFromMatrixPosition(y.matrixWorld).applyMatrix4(He);const Ae=oe.update(y),ye=y.material;ye.visible&&P.push(y,Ae,ye,V,Re.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Se.intersectsObject(y))){const Ae=oe.update(y),ye=y.material;if(z&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Re.copy(y.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Re.copy(Ae.boundingSphere.center)),Re.applyMatrix4(y.matrixWorld).applyMatrix4(He)),Array.isArray(ye)){const De=Ae.groups;for(let Ne=0,Ze=De.length;Ne<Ze;Ne++){const nt=De[Ne],Oe=ye[nt.materialIndex];Oe&&Oe.visible&&P.push(y,Ae,Oe,V,Re.z,nt)}}else ye.visible&&P.push(y,Ae,ye,V,Re.z,null)}}const Me=y.children;for(let Ae=0,ye=Me.length;Ae<ye;Ae++)Po(Me[Ae],U,V,z)}function Qc(y,U,V,z){const{opaque:G,transmissive:Me,transparent:Ae}=y;w.setupLightsView(V),Be===!0&&me.setGlobalState(L.clippingPlanes,V),z&&ue.viewport(ee.copy(z)),G.length>0&&ls(G,U,V),Me.length>0&&ls(Me,U,V),Ae.length>0&&ls(Ae,U,V),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function eu(y,U,V,z){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[z.id]===void 0){const Oe=Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[z.id]=new si(1,1,{generateMipmaps:!0,type:Oe?Ai:Cn,minFilter:cr,samples:Math.max(4,tt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace})}const Me=w.state.transmissionRenderTarget[z.id],Ae=z.viewport||ee;Me.setSize(Ae.z*L.transmissionResolutionScale,Ae.w*L.transmissionResolutionScale);const ye=L.getRenderTarget(),De=L.getActiveCubeFace(),Ne=L.getActiveMipmapLevel();L.setRenderTarget(Me),L.getClearColor(ie),fe=L.getClearAlpha(),fe<1&&L.setClearColor(16777215,.5),L.clear(),be&&ne.render(V);const Ze=L.toneMapping;L.toneMapping=ai;const nt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),w.setupLightsView(z),Be===!0&&me.setGlobalState(L.clippingPlanes,z),ls(y,V,z),_.updateMultisampleRenderTarget(Me),_.updateRenderTargetMipmap(Me),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let _t=0,Rt=U.length;_t<Rt;_t++){const bt=U[_t],{object:yt,geometry:Wt,material:Te,group:dn}=bt;if(Te.side===ti&&yt.layers.test(z.layers)){const ct=Te.side;Te.side=hn,Te.needsUpdate=!0,tu(yt,V,z,Wt,Te,dn),Te.side=ct,Te.needsUpdate=!0,Oe=!0}}Oe===!0&&(_.updateMultisampleRenderTarget(Me),_.updateRenderTargetMipmap(Me))}L.setRenderTarget(ye,De,Ne),L.setClearColor(ie,fe),nt!==void 0&&(z.viewport=nt),L.toneMapping=Ze}function ls(y,U,V){const z=U.isScene===!0?U.overrideMaterial:null;for(let G=0,Me=y.length;G<Me;G++){const Ae=y[G],{object:ye,geometry:De,group:Ne}=Ae;let Ze=Ae.material;Ze.allowOverride===!0&&z!==null&&(Ze=z),ye.layers.test(V.layers)&&tu(ye,U,V,De,Ze,Ne)}}function tu(y,U,V,z,G,Me){y.onBeforeRender(L,U,V,z,G,Me),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),G.onBeforeRender(L,U,V,z,y,Me),G.transparent===!0&&G.side===ti&&G.forceSinglePass===!1?(G.side=hn,G.needsUpdate=!0,L.renderBufferDirect(V,U,z,G,y,Me),G.side=Ji,G.needsUpdate=!0,L.renderBufferDirect(V,U,z,G,y,Me),G.side=ti):L.renderBufferDirect(V,U,z,G,y,Me),y.onAfterRender(L,U,V,z,G,Me)}function cs(y,U,V){U.isScene!==!0&&(U=J);const z=S.get(y),G=w.state.lights,Me=w.state.shadowsArray,Ae=G.state.version,ye=he.getParameters(y,G.state,Me,U,V,w.state.lightProbeGridArray),De=he.getProgramCacheKey(ye);let Ne=z.programs;z.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,z.fog=U.fog;const Ze=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;z.envMap=O.get(y.envMap||z.environment,Ze),z.envMapRotation=z.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Ne===void 0&&(y.addEventListener("dispose",At),Ne=new Map,z.programs=Ne);let nt=Ne.get(De);if(nt!==void 0){if(z.currentProgram===nt&&z.lightsStateVersion===Ae)return iu(y,ye),nt}else ye.uniforms=he.getUniforms(y),F!==null&&y.isNodeMaterial&&F.build(y,V,ye),y.onBeforeCompile(ye,L),nt=he.acquireProgram(ye,De),Ne.set(De,nt),z.uniforms=ye.uniforms;const Oe=z.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Oe.clippingPlanes=me.uniform),iu(y,ye),z.needsLights=df(y),z.lightsStateVersion=Ae,z.needsLights&&(Oe.ambientLightColor.value=G.state.ambient,Oe.lightProbe.value=G.state.probe,Oe.directionalLights.value=G.state.directional,Oe.directionalLightShadows.value=G.state.directionalShadow,Oe.spotLights.value=G.state.spot,Oe.spotLightShadows.value=G.state.spotShadow,Oe.rectAreaLights.value=G.state.rectArea,Oe.ltc_1.value=G.state.rectAreaLTC1,Oe.ltc_2.value=G.state.rectAreaLTC2,Oe.pointLights.value=G.state.point,Oe.pointLightShadows.value=G.state.pointShadow,Oe.hemisphereLights.value=G.state.hemi,Oe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Oe.spotLightMatrix.value=G.state.spotLightMatrix,Oe.spotLightMap.value=G.state.spotLightMap,Oe.pointShadowMatrix.value=G.state.pointShadowMatrix),z.lightProbeGrid=w.state.lightProbeGridArray.length>0,z.currentProgram=nt,z.uniformsList=null,nt}function nu(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=Js.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function iu(y,U){const V=S.get(y);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function cf(y,U){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;b.setFromMatrixPosition(U.matrixWorld);for(let V=0,z=y.length;V<z;V++){const G=y[V];if(G.texture!==null&&G.boundingBox.containsPoint(b))return G}return null}function uf(y,U,V,z,G){U.isScene!==!0&&(U=J),_.resetTextureUnits();const Me=U.fog,Ae=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?U.environment:null,ye=I===null?L.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:st.workingColorSpace,De=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ne=O.get(z.envMap||Ae,De),Ze=z.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,nt=!!V.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Oe=!!V.morphAttributes.position,_t=!!V.morphAttributes.normal,Rt=!!V.morphAttributes.color;let bt=ai;z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(bt=L.toneMapping);const yt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Wt=yt!==void 0?yt.length:0,Te=S.get(z),dn=w.state.lights;if(Be===!0&&(Pe===!0||y!==k)){const St=y===k&&z.id===H;me.setState(z,y,St)}let ct=!1;z.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==dn.state.version||Te.outputColorSpace!==ye||G.isBatchedMesh&&Te.batching===!1||!G.isBatchedMesh&&Te.batching===!0||G.isBatchedMesh&&Te.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Te.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Te.instancing===!1||!G.isInstancedMesh&&Te.instancing===!0||G.isSkinnedMesh&&Te.skinning===!1||!G.isSkinnedMesh&&Te.skinning===!0||G.isInstancedMesh&&Te.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Te.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Te.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Te.instancingMorph===!1&&G.morphTexture!==null||Te.envMap!==Ne||z.fog===!0&&Te.fog!==Me||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==me.numPlanes||Te.numIntersection!==me.numIntersection)||Te.vertexAlphas!==Ze||Te.vertexTangents!==nt||Te.morphTargets!==Oe||Te.morphNormals!==_t||Te.morphColors!==Rt||Te.toneMapping!==bt||Te.morphTargetsCount!==Wt||!!Te.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ct=!0):(ct=!0,Te.__version=z.version);let Mn=Te.currentProgram;ct===!0&&(Mn=cs(z,U,G),F&&z.isNodeMaterial&&F.onUpdateProgram(z,Mn,Te));let jn=!1,Ci=!1,Ar=!1;const Mt=Mn.getUniforms(),Ct=Te.uniforms;if(ue.useProgram(Mn.program)&&(jn=!0,Ci=!0,Ar=!0),z.id!==H&&(H=z.id,Ci=!0),Te.needsLights){const St=cf(w.state.lightProbeGridArray,G);Te.lightProbeGrid!==St&&(Te.lightProbeGrid=St,Ci=!0)}if(jn||k!==y){ue.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Mt.setValue(R,"projectionMatrix",y.projectionMatrix),Mt.setValue(R,"viewMatrix",y.matrixWorldInverse);const Di=Mt.map.cameraPosition;Di!==void 0&&Di.setValue(R,Xe.setFromMatrixPosition(y.matrixWorld)),tt.logarithmicDepthBuffer&&Mt.setValue(R,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Mt.setValue(R,"isOrthographic",y.isOrthographicCamera===!0),k!==y&&(k=y,Ci=!0,Ar=!0)}if(Te.needsLights&&(dn.state.directionalShadowMap.length>0&&Mt.setValue(R,"directionalShadowMap",dn.state.directionalShadowMap,_),dn.state.spotShadowMap.length>0&&Mt.setValue(R,"spotShadowMap",dn.state.spotShadowMap,_),dn.state.pointShadowMap.length>0&&Mt.setValue(R,"pointShadowMap",dn.state.pointShadowMap,_)),G.isSkinnedMesh){Mt.setOptional(R,G,"bindMatrix"),Mt.setOptional(R,G,"bindMatrixInverse");const St=G.skeleton;St&&(St.boneTexture===null&&St.computeBoneTexture(),Mt.setValue(R,"boneTexture",St.boneTexture,_))}G.isBatchedMesh&&(Mt.setOptional(R,G,"batchingTexture"),Mt.setValue(R,"batchingTexture",G._matricesTexture,_),Mt.setOptional(R,G,"batchingIdTexture"),Mt.setValue(R,"batchingIdTexture",G._indirectTexture,_),Mt.setOptional(R,G,"batchingColorTexture"),G._colorsTexture!==null&&Mt.setValue(R,"batchingColorTexture",G._colorsTexture,_));const Pi=V.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&Ue.update(G,V,Mn),(Ci||Te.receiveShadow!==G.receiveShadow)&&(Te.receiveShadow=G.receiveShadow,Mt.setValue(R,"receiveShadow",G.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&U.environment!==null&&(Ct.envMapIntensity.value=U.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=N4()),Ci){if(Mt.setValue(R,"toneMappingExposure",L.toneMappingExposure),Te.needsLights&&hf(Ct,Ar),Me&&z.fog===!0&&X.refreshFogUniforms(Ct,Me),X.refreshMaterialUniforms(Ct,z,Ce,pe,w.state.transmissionRenderTarget[y.id]),Te.needsLights&&Te.lightProbeGrid){const St=Te.lightProbeGrid;Ct.probesSH.value=St.texture,Ct.probesMin.value.copy(St.boundingBox.min),Ct.probesMax.value.copy(St.boundingBox.max),Ct.probesResolution.value.copy(St.resolution)}Js.upload(R,nu(Te),Ct,_)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Js.upload(R,nu(Te),Ct,_),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Mt.setValue(R,"center",G.center),Mt.setValue(R,"modelViewMatrix",G.modelViewMatrix),Mt.setValue(R,"normalMatrix",G.normalMatrix),Mt.setValue(R,"modelMatrix",G.matrixWorld),z.uniformsGroups!==void 0){const St=z.uniformsGroups;for(let Di=0,Rr=St.length;Di<Rr;Di++){const ru=St[Di];K.update(ru,Mn),K.bind(ru,Mn)}}return Mn}function hf(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function df(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(y,U,V){const z=S.get(y);z.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),S.get(y.texture).__webglTexture=U,S.get(y.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:V,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){const V=S.get(y);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0};const ff=R.createFramebuffer();this.setRenderTarget=function(y,U=0,V=0){I=y,W=U,Y=V;let z=null,G=!1,Me=!1;if(y){const ye=S.get(y);if(ye.__useDefaultFramebuffer!==void 0){ue.bindFramebuffer(R.FRAMEBUFFER,ye.__webglFramebuffer),ee.copy(y.viewport),re.copy(y.scissor),ge=y.scissorTest,ue.viewport(ee),ue.scissor(re),ue.setScissorTest(ge),H=-1;return}else if(ye.__webglFramebuffer===void 0)_.setupRenderTarget(y);else if(ye.__hasExternalTextures)_.rebindTextures(y,S.get(y.texture).__webglTexture,S.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ze=y.depthTexture;if(ye.__boundDepthTexture!==Ze){if(Ze!==null&&S.has(Ze)&&(y.width!==Ze.image.width||y.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(y)}}const De=y.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Me=!0);const Ne=S.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ne[U])?z=Ne[U][V]:z=Ne[U],G=!0):y.samples>0&&_.useMultisampledRTT(y)===!1?z=S.get(y).__webglMultisampledFramebuffer:Array.isArray(Ne)?z=Ne[V]:z=Ne,ee.copy(y.viewport),re.copy(y.scissor),ge=y.scissorTest}else ee.copy(ae).multiplyScalar(Ce).floor(),re.copy(ve).multiplyScalar(Ce).floor(),ge=we;if(V!==0&&(z=ff),ue.bindFramebuffer(R.FRAMEBUFFER,z)&&ue.drawBuffers(y,z),ue.viewport(ee),ue.scissor(re),ue.setScissorTest(ge),G){const ye=S.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye.__webglTexture,V)}else if(Me){const ye=U;for(let De=0;De<y.textures.length;De++){const Ne=S.get(y.textures[De]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+De,Ne.__webglTexture,V,ye)}}else if(y!==null&&V!==0){const ye=S.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ye.__webglTexture,V)}H=-1},this.readRenderTargetPixels=function(y,U,V,z,G,Me,Ae,ye=0){if(!(y&&y.isWebGLRenderTarget)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=S.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ae!==void 0&&(De=De[Ae]),De){ue.bindFramebuffer(R.FRAMEBUFFER,De);try{const Ne=y.textures[ye],Ze=Ne.format,nt=Ne.type;if(y.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+ye),!tt.textureFormatReadable(Ze)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(nt)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-z&&V>=0&&V<=y.height-G&&R.readPixels(U,V,z,G,D.convert(Ze),D.convert(nt),Me)}finally{const Ne=I!==null?S.get(I).__webglFramebuffer:null;ue.bindFramebuffer(R.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(y,U,V,z,G,Me,Ae,ye=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=S.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ae!==void 0&&(De=De[Ae]),De)if(U>=0&&U<=y.width-z&&V>=0&&V<=y.height-G){ue.bindFramebuffer(R.FRAMEBUFFER,De);const Ne=y.textures[ye],Ze=Ne.format,nt=Ne.type;if(y.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+ye),!tt.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Oe=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Oe),R.bufferData(R.PIXEL_PACK_BUFFER,Me.byteLength,R.STREAM_READ),R.readPixels(U,V,z,G,D.convert(Ze),D.convert(nt),0);const _t=I!==null?S.get(I).__webglFramebuffer:null;ue.bindFramebuffer(R.FRAMEBUFFER,_t);const Rt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Bp(R,Rt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Oe),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Me),R.deleteBuffer(Oe),R.deleteSync(Rt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,V=0){const z=Math.pow(2,-V),G=Math.floor(y.image.width*z),Me=Math.floor(y.image.height*z),Ae=U!==null?U.x:0,ye=U!==null?U.y:0;_.setTexture2D(y,0),R.copyTexSubImage2D(R.TEXTURE_2D,V,0,0,Ae,ye,G,Me),ue.unbindTexture()};const pf=R.createFramebuffer(),mf=R.createFramebuffer();this.copyTextureToTexture=function(y,U,V=null,z=null,G=0,Me=0){let Ae,ye,De,Ne,Ze,nt,Oe,_t,Rt;const bt=y.isCompressedTexture?y.mipmaps[Me]:y.image;if(V!==null)Ae=V.max.x-V.min.x,ye=V.max.y-V.min.y,De=V.isBox3?V.max.z-V.min.z:1,Ne=V.min.x,Ze=V.min.y,nt=V.isBox3?V.min.z:0;else{const Ct=Math.pow(2,-G);Ae=Math.floor(bt.width*Ct),ye=Math.floor(bt.height*Ct),y.isDataArrayTexture?De=bt.depth:y.isData3DTexture?De=Math.floor(bt.depth*Ct):De=1,Ne=0,Ze=0,nt=0}z!==null?(Oe=z.x,_t=z.y,Rt=z.z):(Oe=0,_t=0,Rt=0);const yt=D.convert(U.format),Wt=D.convert(U.type);let Te;U.isData3DTexture?(_.setTexture3D(U,0),Te=R.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(_.setTexture2DArray(U,0),Te=R.TEXTURE_2D_ARRAY):(_.setTexture2D(U,0),Te=R.TEXTURE_2D),ue.activeTexture(R.TEXTURE0),ue.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),ue.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),ue.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const dn=ue.getParameter(R.UNPACK_ROW_LENGTH),ct=ue.getParameter(R.UNPACK_IMAGE_HEIGHT),Mn=ue.getParameter(R.UNPACK_SKIP_PIXELS),jn=ue.getParameter(R.UNPACK_SKIP_ROWS),Ci=ue.getParameter(R.UNPACK_SKIP_IMAGES);ue.pixelStorei(R.UNPACK_ROW_LENGTH,bt.width),ue.pixelStorei(R.UNPACK_IMAGE_HEIGHT,bt.height),ue.pixelStorei(R.UNPACK_SKIP_PIXELS,Ne),ue.pixelStorei(R.UNPACK_SKIP_ROWS,Ze),ue.pixelStorei(R.UNPACK_SKIP_IMAGES,nt);const Ar=y.isDataArrayTexture||y.isData3DTexture,Mt=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){const Ct=S.get(y),Pi=S.get(U),St=S.get(Ct.__renderTarget),Di=S.get(Pi.__renderTarget);ue.bindFramebuffer(R.READ_FRAMEBUFFER,St.__webglFramebuffer),ue.bindFramebuffer(R.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let Rr=0;Rr<De;Rr++)Ar&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,S.get(y).__webglTexture,G,nt+Rr),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,S.get(U).__webglTexture,Me,Rt+Rr)),R.blitFramebuffer(Ne,Ze,Ae,ye,Oe,_t,Ae,ye,R.DEPTH_BUFFER_BIT,R.NEAREST);ue.bindFramebuffer(R.READ_FRAMEBUFFER,null),ue.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(G!==0||y.isRenderTargetTexture||S.has(y)){const Ct=S.get(y),Pi=S.get(U);ue.bindFramebuffer(R.READ_FRAMEBUFFER,pf),ue.bindFramebuffer(R.DRAW_FRAMEBUFFER,mf);for(let St=0;St<De;St++)Ar?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ct.__webglTexture,G,nt+St):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ct.__webglTexture,G),Mt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Pi.__webglTexture,Me,Rt+St):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Pi.__webglTexture,Me),G!==0?R.blitFramebuffer(Ne,Ze,Ae,ye,Oe,_t,Ae,ye,R.COLOR_BUFFER_BIT,R.NEAREST):Mt?R.copyTexSubImage3D(Te,Me,Oe,_t,Rt+St,Ne,Ze,Ae,ye):R.copyTexSubImage2D(Te,Me,Oe,_t,Ne,Ze,Ae,ye);ue.bindFramebuffer(R.READ_FRAMEBUFFER,null),ue.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Mt?y.isDataTexture||y.isData3DTexture?R.texSubImage3D(Te,Me,Oe,_t,Rt,Ae,ye,De,yt,Wt,bt.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(Te,Me,Oe,_t,Rt,Ae,ye,De,yt,bt.data):R.texSubImage3D(Te,Me,Oe,_t,Rt,Ae,ye,De,yt,Wt,bt):y.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Me,Oe,_t,Ae,ye,yt,Wt,bt.data):y.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Me,Oe,_t,bt.width,bt.height,yt,bt.data):R.texSubImage2D(R.TEXTURE_2D,Me,Oe,_t,Ae,ye,yt,Wt,bt);ue.pixelStorei(R.UNPACK_ROW_LENGTH,dn),ue.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ct),ue.pixelStorei(R.UNPACK_SKIP_PIXELS,Mn),ue.pixelStorei(R.UNPACK_SKIP_ROWS,jn),ue.pixelStorei(R.UNPACK_SKIP_IMAGES,Ci),Me===0&&U.generateMipmaps&&R.generateMipmap(Te),ue.unbindTexture()},this.initRenderTarget=function(y){S.get(y).__webglFramebuffer===void 0&&_.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?_.setTextureCube(y,0):y.isData3DTexture?_.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?_.setTexture2DArray(y,0):_.setTexture2D(y,0),ue.unbindTexture()},this.resetState=function(){W=0,Y=0,I=null,ue.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}const bh={type:"change"},Xc={type:"start"},rf={type:"end"},Bs=new ss,Eh=new Gi,O4=Math.cos(70*Od.DEG2RAD),It=new N,an=2*Math.PI,xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},pl=1e-6;class B4 extends z2{constructor(e,t=null){super(e,t),this.state=xt.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Qr.ROTATE,MIDDLE:Qr.DOLLY,RIGHT:Qr.PAN},this.touches={ONE:Kr.ROTATE,TWO:Kr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new qn,this._lastTargetPosition=new N,this._quat=new qn().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $u,this._sphericalDelta=new $u,this._scale=1,this._panOffset=new N,this._rotateStart=new $e,this._rotateEnd=new $e,this._rotateDelta=new $e,this._panStart=new $e,this._panEnd=new $e,this._panDelta=new $e,this._dollyStart=new $e,this._dollyEnd=new $e,this._dollyDelta=new $e,this._dollyDirection=new N,this._mouse=new $e,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=z4.bind(this),this._onPointerDown=k4.bind(this),this._onPointerUp=G4.bind(this),this._onContextMenu=j4.bind(this),this._onMouseWheel=W4.bind(this),this._onKeyDown=X4.bind(this),this._onTouchStart=q4.bind(this),this._onTouchMove=Y4.bind(this),this._onMouseDown=H4.bind(this),this._onMouseMove=V4.bind(this),this._interceptControlDown=K4.bind(this),this._interceptControlUp=Z4.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(bh),this.update(),this.state=xt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;It.copy(t).sub(this.target),It.applyQuaternion(this._quat),this._spherical.setFromVector3(It),this.autoRotate&&this.state===xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=an:i>Math.PI&&(i-=an),r<-Math.PI?r+=an:r>Math.PI&&(r-=an),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=s!=this._spherical.radius}if(It.setFromSpherical(this._spherical),It.applyQuaternion(this._quatInverse),t.copy(this.target).add(It),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const o=It.length();s=this._clampDistance(o*this._scale);const l=o-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const o=new N(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),s=It.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(Bs.origin.copy(this.object.position),Bs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Bs.direction))<O4?this.object.lookAt(this.target):(Eh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Bs.intersectPlane(Eh,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>pl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>pl||this._lastTargetPosition.distanceToSquared(this.target)>pl?(this.dispatchEvent(bh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?an/60*this.autoRotateSpeed*e:an/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){It.setFromMatrixColumn(t,0),It.multiplyScalar(-e),this._panOffset.add(It)}_panUp(e,t){this.screenSpacePanning===!0?It.setFromMatrixColumn(t,1):(It.setFromMatrixColumn(t,0),It.crossVectors(this.object.up,It)),It.multiplyScalar(e),this._panOffset.add(It)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;It.copy(r).sub(this.target);let a=It.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,a=t-i.top,s=i.width,o=i.height;this._mouse.x=r/s*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(an*this._rotateDelta.x/t.clientHeight),this._rotateUp(an*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-an*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(i*i+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(an*this._rotateDelta.x/t.clientHeight),this._rotateUp(an*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(s,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new $e,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function k4(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function z4(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function G4(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(rf),this.state=xt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function H4(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Qr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=xt.DOLLY;break;case Qr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=xt.ROTATE}break;case Qr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=xt.PAN}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(Xc)}function V4(n){switch(this.state){case xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function W4(n){this.enabled===!1||this.enableZoom===!1||this.state!==xt.NONE||(n.preventDefault(),this.dispatchEvent(Xc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(rf))}function X4(n){this.enabled!==!1&&this._handleKeyDown(n)}function q4(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Kr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=xt.TOUCH_ROTATE;break;case Kr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=xt.TOUCH_PAN;break;default:this.state=xt.NONE}break;case 2:switch(this.touches.TWO){case Kr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=xt.TOUCH_DOLLY_PAN;break;case Kr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=xt.TOUCH_DOLLY_ROTATE;break;default:this.state=xt.NONE}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(Xc)}function Y4(n){switch(this._trackPointer(n),this.state){case xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=xt.NONE}}function j4(n){this.enabled!==!1&&n.preventDefault()}function K4(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Z4(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ji=Math.PI/180,$4=6371;function J4(n,e){const t=(e.lat-n.lat)*ji,i=(e.lon-n.lon)*ji,r=Math.sin(t/2)**2+Math.cos(n.lat*ji)*Math.cos(e.lat*ji)*Math.sin(i/2)**2;return 2*$4*Math.asin(Math.min(1,Math.sqrt(r)))}const $r=1e3;function Q4(n){return n<=50?$r:Math.round($r*Math.exp(-(n-50)/1500))}function Wa(n,e,t=1){const i=(90-n)*ji,r=(e+180)*ji;return[-t*Math.sin(i)*Math.cos(r),t*Math.cos(i),t*Math.sin(i)*Math.sin(r)]}function af(n,e,t){const i=Math.sqrt(n*n+e*e+t*t),r=90-Math.acos(e/i)/ji;let a=Math.atan2(t,-n)/ji-180;return a<-180&&(a+=360),{lat:r,lon:a}}function sf(n,e,t=96){const i=Wa(n.lat,n.lon),r=Wa(e.lat,e.lon),a=Math.min(1,Math.max(-1,i[0]*r[0]+i[1]*r[1]+i[2]*r[2])),s=Math.acos(a),o=.04+.14*Math.min(1,s/Math.PI),l=[];for(let c=0;c<=t;c++){const d=c/t;let f,u;s<1e-6?(f=1-d,u=d):(f=Math.sin((1-d)*s)/Math.sin(s),u=Math.sin(d*s)/Math.sin(s));const h=f*i[0]+u*r[0],p=f*i[1]+u*r[1],v=f*i[2]+u*r[2],g=Math.sqrt(h*h+p*p+v*v)||1,m=1+Math.sin(d*Math.PI)*o;l.push([h/g*m,p/g*m,v/g*m])}return l}function e_(n,e){const t=sf(n,e,2),[i,r,a]=t[1];return af(i,r,a)}const t_={countries:{type:"GeometryCollection",geometries:[{type:"MultiPolygon",arcs:[[[0]],[[1]]],id:"242",properties:{name:"Fiji"}},{type:"Polygon",arcs:[[2,3,4,5,6,7,8,9,10]],id:"834",properties:{name:"Tanzania"}},{type:"Polygon",arcs:[[11,12,13,14]],id:"732",properties:{name:"W. Sahara"}},{type:"MultiPolygon",arcs:[[[15,16,17,18]],[[19]],[[20]],[[21]],[[22]],[[23]],[[24]],[[25]],[[26]],[[27]],[[28]],[[29]],[[30]],[[31]],[[32]],[[33]],[[34]],[[35]],[[36]],[[37]],[[38]],[[39]],[[40]],[[41]],[[42]],[[43]],[[44]],[[45]],[[46]],[[47]]],id:"124",properties:{name:"Canada"}},{type:"MultiPolygon",arcs:[[[-19,48,49,50]],[[51]],[[52]],[[53]],[[54]],[[55]],[[56]],[[57]],[[-17,58]],[[59]]],id:"840",properties:{name:"United States of America"}},{type:"Polygon",arcs:[[60,61,62,63,64,65]],id:"398",properties:{name:"Kazakhstan"}},{type:"Polygon",arcs:[[-63,66,67,68,69]],id:"860",properties:{name:"Uzbekistan"}},{type:"MultiPolygon",arcs:[[[70,71]],[[72]],[[73]],[[74]]],id:"598",properties:{name:"Papua New Guinea"}},{type:"MultiPolygon",arcs:[[[-72,75]],[[76,77]],[[78]],[[79,80]],[[81]],[[82]],[[83]],[[84]],[[85]],[[86]],[[87]],[[88]],[[89]]],id:"360",properties:{name:"Indonesia"}},{type:"MultiPolygon",arcs:[[[90,91]],[[92,93,94,95,96,97]]],id:"032",properties:{name:"Argentina"}},{type:"MultiPolygon",arcs:[[[-92,98]],[[99,-95,100,101]]],id:"152",properties:{name:"Chile"}},{type:"Polygon",arcs:[[-8,102,103,104,105,106,107,108,109,110,111]],id:"180",properties:{name:"Dem. Rep. Congo"}},{type:"Polygon",arcs:[[112,113,114,115]],id:"706",properties:{name:"Somalia"}},{type:"Polygon",arcs:[[-3,116,117,118,-113,119]],id:"404",properties:{name:"Kenya"}},{type:"Polygon",arcs:[[120,121,122,123,124,125,126,127]],id:"729",properties:{name:"Sudan"}},{type:"Polygon",arcs:[[-122,128,129,130,131]],id:"148",properties:{name:"Chad"}},{type:"Polygon",arcs:[[132,133]],id:"332",properties:{name:"Haiti"}},{type:"Polygon",arcs:[[-133,134]],id:"214",properties:{name:"Dominican Rep."}},{type:"MultiPolygon",arcs:[[[135]],[[136]],[[137]],[[138]],[[139]],[[140]],[[141,142,143]],[[144]],[[145]],[[146,147,148,149,-66,150,151,152,153,154,155,156,157,158,159,160,161]],[[162]],[[163,164]]],id:"643",properties:{name:"Russia"}},{type:"MultiPolygon",arcs:[[[165]],[[166]],[[167]]],id:"044",properties:{name:"Bahamas"}},{type:"Polygon",arcs:[[168]],id:"238",properties:{name:"Falkland Is."}},{type:"MultiPolygon",arcs:[[[169]],[[-161,170,171,172]],[[173]],[[174]]],id:"578",properties:{name:"Norway"}},{type:"Polygon",arcs:[[175]],id:"304",properties:{name:"Greenland"}},{type:"Polygon",arcs:[[176]],id:"260",properties:{name:"Fr. S. Antarctic Lands"}},{type:"Polygon",arcs:[[177,-77]],id:"626",properties:{name:"Timor-Leste"}},{type:"Polygon",arcs:[[178,179,180,181,182,183,184],[185]],id:"710",properties:{name:"South Africa"}},{type:"Polygon",arcs:[[-186]],id:"426",properties:{name:"Lesotho"}},{type:"Polygon",arcs:[[-50,186,187,188,189]],id:"484",properties:{name:"Mexico"}},{type:"Polygon",arcs:[[190,191,-93]],id:"858",properties:{name:"Uruguay"}},{type:"Polygon",arcs:[[-191,-98,192,193,194,195,196,197,198,199,200]],id:"076",properties:{name:"Brazil"}},{type:"Polygon",arcs:[[-194,201,-96,-100,202]],id:"068",properties:{name:"Bolivia"}},{type:"Polygon",arcs:[[-195,-203,-102,203,204,205]],id:"604",properties:{name:"Peru"}},{type:"Polygon",arcs:[[-196,-206,206,207,208,209,210]],id:"170",properties:{name:"Colombia"}},{type:"Polygon",arcs:[[-209,211,212,213]],id:"591",properties:{name:"Panama"}},{type:"Polygon",arcs:[[-213,214,215,216]],id:"188",properties:{name:"Costa Rica"}},{type:"Polygon",arcs:[[-216,217,218,219]],id:"558",properties:{name:"Nicaragua"}},{type:"Polygon",arcs:[[-219,220,221,222,223]],id:"340",properties:{name:"Honduras"}},{type:"Polygon",arcs:[[-222,224,225]],id:"222",properties:{name:"El Salvador"}},{type:"Polygon",arcs:[[-189,226,227,-223,-226,228]],id:"320",properties:{name:"Guatemala"}},{type:"Polygon",arcs:[[-188,229,-227]],id:"084",properties:{name:"Belize"}},{type:"Polygon",arcs:[[-197,-211,230,231]],id:"862",properties:{name:"Venezuela"}},{type:"Polygon",arcs:[[-198,-232,232,233]],id:"328",properties:{name:"Guyana"}},{type:"Polygon",arcs:[[-199,-234,234,235]],id:"740",properties:{name:"Suriname"}},{type:"MultiPolygon",arcs:[[[-200,-236,236]],[[237,238,239,240,241,242,243,244]],[[245]]],id:"250",properties:{name:"France"}},{type:"Polygon",arcs:[[-205,246,-207]],id:"218",properties:{name:"Ecuador"}},{type:"Polygon",arcs:[[247]],id:"630",properties:{name:"Puerto Rico"}},{type:"Polygon",arcs:[[248]],id:"388",properties:{name:"Jamaica"}},{type:"Polygon",arcs:[[249]],id:"192",properties:{name:"Cuba"}},{type:"Polygon",arcs:[[-181,250,251,252]],id:"716",properties:{name:"Zimbabwe"}},{type:"Polygon",arcs:[[-180,253,254,-251]],id:"072",properties:{name:"Botswana"}},{type:"Polygon",arcs:[[-179,255,256,257,-254]],id:"516",properties:{name:"Namibia"}},{type:"Polygon",arcs:[[258,259,260,261,262,263,264]],id:"686",properties:{name:"Senegal"}},{type:"Polygon",arcs:[[-261,265,266,267,268,269,270]],id:"466",properties:{name:"Mali"}},{type:"Polygon",arcs:[[-13,271,-266,-260,272]],id:"478",properties:{name:"Mauritania"}},{type:"Polygon",arcs:[[273,274,275,276,277]],id:"204",properties:{name:"Benin"}},{type:"Polygon",arcs:[[-131,278,279,-277,280,-268,281,282]],id:"562",properties:{name:"Niger"}},{type:"Polygon",arcs:[[-278,-280,283,284]],id:"566",properties:{name:"Nigeria"}},{type:"Polygon",arcs:[[-130,285,286,287,288,289,-284,-279]],id:"120",properties:{name:"Cameroon"}},{type:"Polygon",arcs:[[-275,290,291,292]],id:"768",properties:{name:"Togo"}},{type:"Polygon",arcs:[[-292,293,294,295]],id:"288",properties:{name:"Ghana"}},{type:"Polygon",arcs:[[-270,296,-295,297,298,299]],id:"384",properties:{name:"Côte d'Ivoire"}},{type:"Polygon",arcs:[[-262,-271,-300,300,301,302,303]],id:"324",properties:{name:"Guinea"}},{type:"Polygon",arcs:[[-263,-304,304]],id:"624",properties:{name:"Guinea-Bissau"}},{type:"Polygon",arcs:[[-299,305,306,-301]],id:"430",properties:{name:"Liberia"}},{type:"Polygon",arcs:[[-302,-307,307]],id:"694",properties:{name:"Sierra Leone"}},{type:"Polygon",arcs:[[-269,-281,-276,-293,-296,-297]],id:"854",properties:{name:"Burkina Faso"}},{type:"Polygon",arcs:[[-108,308,-286,-129,-121,309]],id:"140",properties:{name:"Central African Rep."}},{type:"Polygon",arcs:[[-107,310,311,312,-287,-309]],id:"178",properties:{name:"Congo"}},{type:"Polygon",arcs:[[-288,-313,313,314]],id:"266",properties:{name:"Gabon"}},{type:"Polygon",arcs:[[-289,-315,315]],id:"226",properties:{name:"Eq. Guinea"}},{type:"Polygon",arcs:[[-7,316,317,-252,-255,-258,318,-103]],id:"894",properties:{name:"Zambia"}},{type:"Polygon",arcs:[[-6,319,-317]],id:"454",properties:{name:"Malawi"}},{type:"Polygon",arcs:[[-5,320,-184,321,-182,-253,-318,-320]],id:"508",properties:{name:"Mozambique"}},{type:"Polygon",arcs:[[-183,-322]],id:"748",properties:{name:"eSwatini"}},{type:"MultiPolygon",arcs:[[[-106,322,-311]],[[-104,-319,-257,323]]],id:"024",properties:{name:"Angola"}},{type:"Polygon",arcs:[[-9,-112,324]],id:"108",properties:{name:"Burundi"}},{type:"Polygon",arcs:[[325,326,327,328,329,330,331]],id:"376",properties:{name:"Israel"}},{type:"Polygon",arcs:[[-331,332,333]],id:"422",properties:{name:"Lebanon"}},{type:"Polygon",arcs:[[334]],id:"450",properties:{name:"Madagascar"}},{type:"Polygon",arcs:[[-327,335]],id:"275",properties:{name:"Palestine"}},{type:"Polygon",arcs:[[-265,336]],id:"270",properties:{name:"Gambia"}},{type:"Polygon",arcs:[[337,338,339]],id:"788",properties:{name:"Tunisia"}},{type:"Polygon",arcs:[[-12,340,341,-338,342,-282,-267,-272]],id:"012",properties:{name:"Algeria"}},{type:"Polygon",arcs:[[-326,343,344,345,346,-328,-336]],id:"400",properties:{name:"Jordan"}},{type:"Polygon",arcs:[[347,348,349,350,351]],id:"784",properties:{name:"United Arab Emirates"}},{type:"Polygon",arcs:[[352,353]],id:"634",properties:{name:"Qatar"}},{type:"Polygon",arcs:[[354,355,356]],id:"414",properties:{name:"Kuwait"}},{type:"Polygon",arcs:[[-345,357,358,359,360,-357,361]],id:"368",properties:{name:"Iraq"}},{type:"MultiPolygon",arcs:[[[-351,362,363,364]],[[-349,365]]],id:"512",properties:{name:"Oman"}},{type:"MultiPolygon",arcs:[[[366]],[[367]]],id:"548",properties:{name:"Vanuatu"}},{type:"Polygon",arcs:[[368,369,370,371]],id:"116",properties:{name:"Cambodia"}},{type:"Polygon",arcs:[[-369,372,373,374,375,376]],id:"764",properties:{name:"Thailand"}},{type:"Polygon",arcs:[[-370,-377,377,378,379]],id:"418",properties:{name:"Laos"}},{type:"Polygon",arcs:[[-376,380,381,382,383,-378]],id:"104",properties:{name:"Myanmar"}},{type:"Polygon",arcs:[[-371,-380,384,385]],id:"704",properties:{name:"Vietnam"}},{type:"MultiPolygon",arcs:[[[386,386,386]],[[-147,387,388,389,390]]],id:"408",properties:{name:"North Korea"}},{type:"Polygon",arcs:[[-389,391]],id:"410",properties:{name:"South Korea"}},{type:"Polygon",arcs:[[-149,392]],id:"496",properties:{name:"Mongolia"}},{type:"Polygon",arcs:[[-383,393,394,395,396,397,398,399,400]],id:"356",properties:{name:"India"}},{type:"Polygon",arcs:[[-382,401,-394]],id:"050",properties:{name:"Bangladesh"}},{type:"Polygon",arcs:[[-400,402]],id:"064",properties:{name:"Bhutan"}},{type:"Polygon",arcs:[[-398,403]],id:"524",properties:{name:"Nepal"}},{type:"Polygon",arcs:[[-396,404,405,406,407]],id:"586",properties:{name:"Pakistan"}},{type:"Polygon",arcs:[[-69,408,409,-407,410,411]],id:"004",properties:{name:"Afghanistan"}},{type:"Polygon",arcs:[[-68,412,413,-409]],id:"762",properties:{name:"Tajikistan"}},{type:"Polygon",arcs:[[-62,414,-413,-67]],id:"417",properties:{name:"Kyrgyzstan"}},{type:"Polygon",arcs:[[-64,-70,-412,415,416]],id:"795",properties:{name:"Turkmenistan"}},{type:"Polygon",arcs:[[-360,417,418,419,420,421,-416,-411,-406,422]],id:"364",properties:{name:"Iran"}},{type:"Polygon",arcs:[[-332,-334,423,424,-358,-344]],id:"760",properties:{name:"Syria"}},{type:"Polygon",arcs:[[-420,425,426,427,428]],id:"051",properties:{name:"Armenia"}},{type:"Polygon",arcs:[[-172,429,430]],id:"752",properties:{name:"Sweden"}},{type:"Polygon",arcs:[[-156,431,432,433,434]],id:"112",properties:{name:"Belarus"}},{type:"Polygon",arcs:[[-155,435,-164,436,437,438,439,440,441,442,-432]],id:"804",properties:{name:"Ukraine"}},{type:"Polygon",arcs:[[-433,-443,443,444,445,446,-142,447]],id:"616",properties:{name:"Poland"}},{type:"Polygon",arcs:[[448,449,450,451,452,453,454]],id:"040",properties:{name:"Austria"}},{type:"Polygon",arcs:[[-441,455,456,457,458,-449,459]],id:"348",properties:{name:"Hungary"}},{type:"Polygon",arcs:[[-439,460]],id:"498",properties:{name:"Moldova"}},{type:"Polygon",arcs:[[-438,461,462,463,-456,-440,-461]],id:"642",properties:{name:"Romania"}},{type:"Polygon",arcs:[[-434,-448,-144,464,465]],id:"440",properties:{name:"Lithuania"}},{type:"Polygon",arcs:[[-157,-435,-466,466,467]],id:"428",properties:{name:"Latvia"}},{type:"Polygon",arcs:[[-158,-468,468]],id:"233",properties:{name:"Estonia"}},{type:"Polygon",arcs:[[-446,469,-453,470,-238,471,472,473,474,475,476]],id:"276",properties:{name:"Germany"}},{type:"Polygon",arcs:[[-463,477,478,479,480,481]],id:"100",properties:{name:"Bulgaria"}},{type:"MultiPolygon",arcs:[[[482]],[[-480,483,484,485,486]]],id:"300",properties:{name:"Greece"}},{type:"MultiPolygon",arcs:[[[-359,-425,487,488,-427,-418]],[[-479,489,-484]]],id:"792",properties:{name:"Turkey"}},{type:"Polygon",arcs:[[-486,490,491,492,493]],id:"008",properties:{name:"Albania"}},{type:"Polygon",arcs:[[-458,494,495,496,497,498]],id:"191",properties:{name:"Croatia"}},{type:"Polygon",arcs:[[-452,499,-239,-471]],id:"756",properties:{name:"Switzerland"}},{type:"Polygon",arcs:[[-472,-245,500]],id:"442",properties:{name:"Luxembourg"}},{type:"Polygon",arcs:[[-473,-501,-244,501,502]],id:"056",properties:{name:"Belgium"}},{type:"Polygon",arcs:[[-474,-503,503]],id:"528",properties:{name:"Netherlands"}},{type:"Polygon",arcs:[[504,505]],id:"620",properties:{name:"Portugal"}},{type:"Polygon",arcs:[[-505,506,-242,507]],id:"724",properties:{name:"Spain"}},{type:"Polygon",arcs:[[508,509]],id:"372",properties:{name:"Ireland"}},{type:"Polygon",arcs:[[510]],id:"540",properties:{name:"New Caledonia"}},{type:"MultiPolygon",arcs:[[[511]],[[512]],[[513]],[[514]],[[515]]],id:"090",properties:{name:"Solomon Is."}},{type:"MultiPolygon",arcs:[[[516]],[[517]]],id:"554",properties:{name:"New Zealand"}},{type:"MultiPolygon",arcs:[[[518]],[[519]]],id:"036",properties:{name:"Australia"}},{type:"Polygon",arcs:[[520]],id:"144",properties:{name:"Sri Lanka"}},{type:"MultiPolygon",arcs:[[[521]],[[-61,-150,-393,-148,-391,522,-385,-379,-384,-401,-403,-399,-404,-397,-408,-410,-414,-415]]],id:"156",properties:{name:"China"}},{type:"Polygon",arcs:[[523]],id:"158",properties:{name:"Taiwan"}},{type:"MultiPolygon",arcs:[[[-451,524,525,-240,-500]],[[526]],[[527]]],id:"380",properties:{name:"Italy"}},{type:"MultiPolygon",arcs:[[[-476,528]],[[529]]],id:"208",properties:{name:"Denmark"}},{type:"MultiPolygon",arcs:[[[-510,530]],[[531]]],id:"826",properties:{name:"United Kingdom"}},{type:"Polygon",arcs:[[532]],id:"352",properties:{name:"Iceland"}},{type:"MultiPolygon",arcs:[[[-152,533,-421,-429,534]],[[-419,-426]]],id:"031",properties:{name:"Azerbaijan"}},{type:"Polygon",arcs:[[-153,-535,-428,-489,535]],id:"268",properties:{name:"Georgia"}},{type:"MultiPolygon",arcs:[[[536]],[[537]],[[538]],[[539]],[[540]],[[541]],[[542]]],id:"608",properties:{name:"Philippines"}},{type:"MultiPolygon",arcs:[[[-374,543]],[[-81,544,545,546]]],id:"458",properties:{name:"Malaysia"}},{type:"Polygon",arcs:[[-546,547]],id:"096",properties:{name:"Brunei"}},{type:"Polygon",arcs:[[-450,-459,-499,548,-525]],id:"705",properties:{name:"Slovenia"}},{type:"Polygon",arcs:[[-160,549,-430,-171]],id:"246",properties:{name:"Finland"}},{type:"Polygon",arcs:[[-442,-460,-455,550,-444]],id:"703",properties:{name:"Slovakia"}},{type:"Polygon",arcs:[[-445,-551,-454,-470]],id:"203",properties:{name:"Czechia"}},{type:"Polygon",arcs:[[-126,551,552,553]],id:"232",properties:{name:"Eritrea"}},{type:"MultiPolygon",arcs:[[[554]],[[555]],[[556]]],id:"392",properties:{name:"Japan"}},{type:"Polygon",arcs:[[-193,-97,-202]],id:"600",properties:{name:"Paraguay"}},{type:"Polygon",arcs:[[-364,557,558]],id:"887",properties:{name:"Yemen"}},{type:"Polygon",arcs:[[-346,-362,-356,559,-354,560,-352,-365,-559,561]],id:"682",properties:{name:"Saudi Arabia"}},{type:"MultiPolygon",arcs:[[[562]],[[563]],[[564]],[[565]],[[566]],[[567]],[[568]],[[569]]],id:"010",properties:{name:"Antarctica"}},{type:"Polygon",arcs:[[570,571]],properties:{name:"N. Cyprus"}},{type:"Polygon",arcs:[[-572,572]],id:"196",properties:{name:"Cyprus"}},{type:"Polygon",arcs:[[-341,-15,573]],id:"504",properties:{name:"Morocco"}},{type:"Polygon",arcs:[[-124,574,575,-329,576]],id:"818",properties:{name:"Egypt"}},{type:"Polygon",arcs:[[-123,-132,-283,-343,-340,577,-575]],id:"434",properties:{name:"Libya"}},{type:"Polygon",arcs:[[-114,-119,578,-127,-554,579,580]],id:"231",properties:{name:"Ethiopia"}},{type:"Polygon",arcs:[[-553,581,582,-580]],id:"262",properties:{name:"Djibouti"}},{type:"Polygon",arcs:[[-115,-581,-583,583]],properties:{name:"Somaliland"}},{type:"Polygon",arcs:[[-11,584,-110,585,-117]],id:"800",properties:{name:"Uganda"}},{type:"Polygon",arcs:[[-10,-325,-111,-585]],id:"646",properties:{name:"Rwanda"}},{type:"Polygon",arcs:[[-496,586,587]],id:"070",properties:{name:"Bosnia and Herz."}},{type:"Polygon",arcs:[[-481,-487,-494,588,589]],id:"807",properties:{name:"Macedonia"}},{type:"Polygon",arcs:[[-457,-464,-482,-590,590,591,-587,-495]],id:"688",properties:{name:"Serbia"}},{type:"Polygon",arcs:[[-492,592,-497,-588,-592,593]],id:"499",properties:{name:"Montenegro"}},{type:"Polygon",arcs:[[-493,-594,-591,-589]],properties:{name:"Kosovo"}},{type:"Polygon",arcs:[[594]],id:"780",properties:{name:"Trinidad and Tobago"}},{type:"Polygon",arcs:[[-109,-310,-128,-579,-118,-586]],id:"728",properties:{name:"S. Sudan"}}]},land:{type:"GeometryCollection",geometries:[{type:"MultiPolygon",arcs:[[[0]],[[1]],[[3,320,184,255,323,104,322,311,313,315,289,284,273,290,293,297,305,307,302,304,263,336,258,272,13,573,341,338,577,575,329,332,423,487,535,153,435,164,436,461,477,489,484,490,592,497,548,525,240,507,505,506,242,501,503,474,528,476,446,142,464,466,468,158,549,430,172,161,387,391,389,522,385,371,372,543,374,380,401,394,404,422,360,354,559,352,560,347,365,349,362,557,561,346,576,124,551,581,583,115,119],[421,416,64,150,533]],[[17,48,186,229,227,223,219,216,213,209,230,232,234,236,200,191,93,100,203,246,207,211,214,217,220,224,228,189,50,15,58]],[[19]],[[20]],[[21]],[[22]],[[23]],[[24]],[[25]],[[26]],[[27]],[[28]],[[29]],[[30]],[[31]],[[32]],[[33]],[[34]],[[35]],[[36]],[[37]],[[38]],[[39]],[[40]],[[41]],[[42]],[[43]],[[44]],[[45]],[[46]],[[47]],[[51]],[[52]],[[53]],[[54]],[[55]],[[56]],[[57]],[[59]],[[70,75]],[[72]],[[73]],[[74]],[[77,177]],[[78]],[[546,79,544,547]],[[81]],[[82]],[[83]],[[84]],[[85]],[[86]],[[87]],[[88]],[[89]],[[90,98]],[[133,134]],[[135]],[[136]],[[137]],[[138]],[[139]],[[140]],[[144]],[[145]],[[162]],[[165]],[[166]],[[167]],[[168]],[[169]],[[173]],[[174]],[[175]],[[176]],[[245]],[[247]],[[248]],[[249]],[[334]],[[366]],[[367]],[[482]],[[508,530]],[[510]],[[511]],[[512]],[[513]],[[514]],[[515]],[[516]],[[517]],[[518]],[[519]],[[520]],[[521]],[[523]],[[526]],[[527]],[[529]],[[531]],[[532]],[[536]],[[537]],[[538]],[[539]],[[540]],[[541]],[[542]],[[554]],[[555]],[[556]],[[562]],[[563]],[[564]],[[565]],[[566]],[[567]],[[568]],[[569]],[[570,572]],[[594]]]}]}},n_=[[[99478,40237],[69,98],[96,-171],[-46,-308],[-172,-81],[-153,73],[-27,260],[107,203],[126,-74]],[[0,41087],[57,27],[-34,-284],[-23,-32],[99822,-145],[-177,-124],[-36,220],[139,121],[88,33],[163,184],[-99999,0]],[[59417,50018],[47,-65],[1007,-1203],[19,-343],[399,-590]],[[60889,47817],[-128,-728],[16,-335],[178,-216],[8,-153],[-76,-357],[16,-180],[-18,-282],[97,-370],[115,-583],[101,-129]],[[61198,44484],[-221,-342],[-303,-230],[-167,10],[-99,-177],[-193,-16],[-73,-74],[-334,166],[-209,-48]],[[59599,43773],[-77,804],[-95,275],[-55,164],[-273,110]],[[59099,45126],[-157,177],[-177,100],[-111,99],[-116,150]],[[58538,45652],[-150,745],[-161,330],[-55,343],[27,307],[-50,544]],[[58149,47921],[115,28],[101,214],[108,308],[69,124],[-3,192],[-60,134],[-16,233]],[[58463,49154],[80,74],[16,348],[-110,333]],[[58449,49909],[98,71],[304,-7],[566,45]],[[47592,66920],[1,-40],[-6,-114]],[[47587,66766],[-1,-895],[-911,31],[9,-1512],[-261,-53],[-68,-304],[53,-853],[-1088,4],[-60,-197]],[[45260,62987],[12,249]],[[45272,63236],[5,-1],[625,48],[33,213],[114,265],[92,816],[386,637],[131,745],[86,44],[91,460],[234,63],[100,-76],[126,0],[90,134],[172,19],[-7,317],[42,0]],[[15878,79530],[-38,1],[-537,581],[-199,255],[-503,244],[-155,523],[40,363],[-356,252],[-48,476],[-336,429],[-6,304]],[[13740,82958],[154,285],[-7,373],[-473,376],[-284,674],[-173,424],[-255,266],[-187,242],[-147,306],[-279,-192],[-270,-330],[-247,388],[-194,259],[-271,164],[-273,17],[1,3364],[2,2193]],[[10837,91767],[518,-142],[438,-285],[289,-54],[244,247],[336,184],[413,-72],[416,259],[455,148],[191,-245],[207,138],[62,278],[192,-63],[470,-530],[369,401],[38,-449],[341,97],[105,173],[337,-34],[424,-248],[650,-217],[383,-100],[272,38],[374,-300],[-390,-293],[502,-127],[750,70],[236,103],[296,-354],[302,299],[-283,251],[179,202],[338,27],[223,59],[224,-141],[279,-321],[310,47],[491,-266],[431,94],[405,-14],[-32,367],[247,103],[431,-200],[-2,-559],[177,471],[223,-16],[126,594],[-298,364],[-324,239],[22,653],[329,429],[366,-95],[281,-261],[378,-666],[-247,-290],[517,-120],[-1,-604],[371,463],[332,-380],[-83,-438],[269,-399],[290,427],[202,510],[16,649],[394,-46],[411,-87],[373,-293],[17,-293],[-207,-315],[196,-316],[-36,-288],[-544,-413],[-386,-91],[-287,178],[-83,-297],[-268,-498],[-81,-259],[-322,-399],[-397,-39],[-220,-250],[-18,-384],[-323,-74],[-340,-479],[-301,-665],[-108,-466],[-16,-686],[409,-99],[125,-553],[130,-448],[388,117],[517,-256],[277,-225],[199,-279],[348,-163],[294,-248],[459,-34],[302,-58],[-45,-511],[86,-594],[201,-661],[414,-561],[214,192],[150,607],[-145,934],[-196,311],[445,276],[314,415],[154,411],[-23,395],[-188,502],[-338,445],[328,619],[-121,535],[-93,922],[194,137],[476,-161],[286,-57],[230,155],[258,-200],[342,-343],[85,-229],[495,-45],[-8,-496],[92,-747],[254,-92],[201,-348],[402,328],[266,652],[184,274],[216,-527],[362,-754],[307,-709],[-112,-371],[370,-333],[250,-338],[442,-152],[179,-189],[110,-500],[216,-78],[112,-223],[20,-664],[-202,-222],[-199,-207],[-458,-210],[-349,-486],[-470,-96],[-594,125],[-417,4],[-287,-41],[-233,-424],[-354,-262],[-401,-782],[-320,-545],[236,97],[446,776],[583,493],[415,58],[246,-289],[-262,-397],[88,-637],[91,-446],[361,-295],[459,86],[278,664],[19,-429],[180,-214],[-344,-387],[-615,-351],[-276,-239],[-310,-426],[-211,44],[-11,500],[483,488],[-445,-19],[-309,-72]],[[31350,77248],[-181,334],[0,805],[-123,171],[-187,-100],[-92,155],[-212,-446],[-84,-460],[-99,-269],[-118,-91],[-89,-30],[-28,-146],[-512,0],[-422,-4],[-125,-109],[-294,-425],[-34,-46],[-89,-231],[-255,1],[-273,-3],[-125,-93],[44,-116],[25,-181],[-5,-60],[-363,-293],[-286,-93],[-323,-316],[-70,0],[-94,93],[-31,85],[6,61],[61,207],[131,325],[81,349],[-56,514],[-59,536],[-290,277],[35,105],[-41,73],[-76,0],[-56,93],[-14,140],[-54,-61],[-75,18],[17,59],[-65,58],[-27,155],[-216,189],[-224,197],[-272,229],[-261,214],[-248,-167],[-91,-6],[-342,154],[-225,-77],[-269,183],[-284,94],[-194,36],[-86,100],[-49,325],[-94,-3],[-1,-227],[-575,0],[-951,0],[-944,0],[-833,0],[-834,0],[-819,0],[-847,0],[-273,0],[-824,0],[-789,0]],[[26668,87478],[207,273],[381,-6],[-6,-114],[-325,-326],[-196,13],[-61,160]],[[27840,93593],[-306,313],[12,213],[133,39],[636,-63],[479,-325],[25,-163],[-296,17],[-299,13],[-304,-80],[-80,36]],[[27690,87261],[107,177],[114,-13],[70,-121],[-108,-310],[-123,50],[-73,176],[13,41]],[[23996,94879],[-151,-229],[-403,44],[-337,155],[148,266],[399,159],[243,-208],[101,-187]],[[23933,96380],[-126,-17],[-521,38],[-74,165],[559,-9],[195,-109],[-33,-68]],[[23124,97116],[332,-205],[-76,-214],[-411,-122],[-226,138],[-119,221],[-22,245],[360,-24],[162,-39]],[[25514,94532],[-449,73],[-738,190],[-96,325],[-34,293],[-279,258],[-574,72],[-322,183],[104,242],[573,-37],[308,-190],[547,1],[240,-194],[-64,-222],[319,-134],[177,-140],[374,-26],[406,-50],[441,128],[566,51],[451,-42],[298,-223],[62,-244],[-174,-157],[-414,-127],[-355,72],[-797,-91],[-570,-11]],[[19093,96754],[392,-92],[-93,-177],[-518,-170],[-411,191],[224,188],[406,60]],[[19177,97139],[361,-120],[-339,-115],[-461,1],[5,84],[285,177],[149,-27]],[[34555,80899],[-148,-372],[-184,-517],[181,199],[187,-126],[-98,-206],[247,-162],[128,144],[277,-182],[-86,-433],[194,101],[36,-313],[86,-367],[-117,-520],[-125,-22],[-183,111],[60,484],[-77,75],[-322,-513],[-166,21],[196,277],[-267,144],[-298,-35],[-539,18],[-43,175],[173,208],[-121,160],[234,356],[287,941],[172,336],[241,204],[129,-26],[-54,-160]],[[26699,89048],[304,-203],[318,-184],[25,-281],[204,46],[199,-196],[-247,-186],[-432,142],[-156,266],[-275,-314],[-396,-306],[-95,346],[-377,-57],[242,292],[35,465],[95,542],[201,-49],[51,-259],[143,91],[161,-155]],[[28119,93327],[263,235],[616,-299],[383,-282],[36,-258],[515,134],[290,-376],[670,-234],[242,-238],[263,-553],[-510,-275],[654,-386],[441,-130],[400,-543],[437,-39],[-87,-414],[-487,-687],[-342,253],[-437,568],[-359,-74],[-35,-338],[292,-344],[377,-272],[114,-157],[181,-584],[-96,-425],[-350,160],[-697,473],[393,-509],[289,-357],[45,-206],[-753,236],[-596,343],[-337,287],[97,167],[-414,304],[-405,286],[5,-171],[-803,-94],[-235,203],[183,435],[522,10],[571,76],[-92,211],[96,294],[360,576],[-77,261],[-107,203],[-425,286],[-563,201],[178,150],[-294,367],[-245,34],[-219,201],[-149,-175],[-503,-76],[-1011,132],[-588,174],[-450,89],[-231,207],[290,270],[-394,2],[-88,599],[213,528],[286,241],[717,158],[-204,-382],[219,-369],[256,477],[704,242],[477,-611],[-42,-387],[550,172]],[[23749,94380],[579,-20],[530,-144],[-415,-526],[-331,-115],[-298,-442],[-317,22],[-173,519],[4,294],[145,251],[276,161]],[[15873,95551],[472,442],[570,383],[426,-9],[381,87],[-38,-454],[-214,-205],[-259,-29],[-517,-252],[-444,-91],[-377,128]],[[13136,82508],[267,47],[-84,-671],[242,-475],[-111,1],[-167,270],[-103,272],[-140,184],[-51,260],[16,188],[131,-76]],[[20696,97433],[546,-81],[751,-215],[212,-281],[108,-247],[-453,66],[-457,192],[-619,21],[268,176],[-335,142],[-21,227]],[[15692,79240],[-140,-82],[-456,269],[-84,209],[-248,207],[-50,168],[-286,107],[-107,321],[24,137],[291,-129],[171,-89],[261,-63],[94,-204],[138,-280],[277,-244],[115,-327]],[[16239,94566],[397,-123],[709,-33],[270,-171],[298,-249],[-349,-149],[-681,-415],[-344,-414],[0,-257],[-731,-285],[-147,259],[-641,312],[119,250],[192,432],[241,388],[-272,362],[939,93]],[[20050,95391],[247,99],[291,-26],[49,-289],[-169,-281],[-940,-91],[-701,-256],[-423,-14],[-35,193],[577,261],[-1255,-70],[-389,106],[379,577],[262,165],[782,-199],[493,-350],[485,-45],[-397,565],[255,215],[286,-68],[94,-282],[109,-210]],[[20410,93755],[311,-239],[175,-575],[86,-417],[466,-293],[502,-279],[-31,-260],[-456,-48],[178,-227],[-94,-217],[-503,93],[-478,160],[-322,-36],[-522,-201],[-704,-88],[-494,-56],[-151,279],[-379,161],[-246,-66],[-343,468],[185,62],[429,101],[392,-26],[362,103],[-537,138],[-594,-47],[-394,12],[-146,217],[644,237],[-428,-9],[-485,156],[233,443],[193,235],[744,359],[284,-114],[-139,-277],[618,179],[386,-298],[314,302],[254,-194],[227,-580],[140,244],[-197,606],[244,86],[276,-94]],[[22100,93536],[-306,386],[329,286],[331,-124],[496,75],[72,-172],[-259,-283],[420,-254],[-50,-532],[-455,-229],[-268,50],[-192,225],[-690,456],[5,189],[567,-73]],[[20389,94064],[372,24],[211,-130],[-244,-390],[-434,413],[95,83]],[[22639,95907],[212,-273],[9,-303],[-127,-440],[-458,-60],[-298,94],[5,345],[-455,-46],[-18,457],[299,-18],[419,201],[390,-34],[22,77]],[[23329,98201],[192,180],[285,42],[-122,135],[646,30],[355,-315],[468,-127],[455,-112],[220,-390],[334,-190],[-381,-176],[-513,-445],[-492,-42],[-575,76],[-299,240],[4,215],[220,157],[-508,-4],[-306,196],[-176,268],[193,262]],[[24559,98965],[413,112],[324,19],[545,96],[409,220],[344,-30],[300,-166],[211,319],[367,95],[498,65],[849,24],[148,-63],[802,100],[601,-38],[602,-37],[742,-47],[597,-75],[508,-161],[-12,-157],[-678,-257],[-672,-119],[-251,-133],[605,3],[-656,-358],[-452,-167],[-476,-483],[-573,-98],[-177,-120],[-841,-64],[383,-74],[-192,-105],[230,-292],[-264,-202],[-429,-167],[-132,-232],[-388,-176],[39,-134],[475,23],[6,-144],[-742,-355],[-726,163],[-816,-91],[-414,71],[-525,31],[-35,284],[514,133],[-137,427],[170,41],[742,-255],[-379,379],[-450,113],[225,229],[492,141],[79,206],[-392,231],[-118,304],[759,-26],[220,-64],[433,216],[-625,68],[-972,-38],[-491,201],[-232,239],[-324,173],[-61,202]],[[29106,90427],[-180,-174],[-312,-30],[-69,289],[118,331],[255,82],[217,-163],[3,-253],[-32,-82]],[[23262,91636],[169,-226],[-173,-207],[-374,179],[-226,-65],[-380,266],[245,183],[194,256],[295,-168],[166,-106],[84,-112]],[[32078,80046],[96,49],[365,-148],[284,-247],[8,-108],[-135,-11],[-360,186],[-258,279]],[[32218,78370],[97,-288],[202,-79],[257,16],[-137,-242],[-102,-38],[-353,250],[-69,198],[105,183]],[[31350,77248],[48,-194],[-296,-286],[-286,-204],[-293,-175],[-147,-351],[-47,-133],[-3,-313],[92,-313],[115,-15],[-29,216],[83,-131],[-22,-169],[-188,-96],[-133,11],[-205,-103],[-121,-29],[-162,-29],[-231,-171],[408,111],[82,-112],[-389,-177],[-177,-1],[8,72],[-84,-164],[82,-27],[-60,-424],[-203,-455],[-20,152],[-61,30],[-91,148],[57,-318],[69,-105],[5,-223],[-89,-230],[-157,-472],[-25,24],[86,402],[-142,225],[-33,491],[-53,-255],[59,-375],[-183,93],[191,-191],[12,-562],[79,-41],[29,-204],[39,-591],[-176,-439],[-288,-175],[-182,-346],[-139,-38],[-141,-217],[-39,-199],[-305,-383],[-157,-281],[-131,-351],[-43,-419],[50,-411],[92,-505],[124,-418],[1,-256],[132,-685],[-9,-398],[-12,-230],[-69,-361],[-83,-75],[-137,72],[-44,259],[-105,136],[-148,508],[-129,452],[-42,231],[57,393],[-77,325],[-217,494],[-108,90],[-281,-268],[-49,30],[-135,275],[-174,147],[-314,-75],[-247,66],[-212,-41],[-114,-92],[50,-157],[-5,-240],[59,-117],[-53,-77],[-103,87],[-104,-112],[-202,18],[-207,312],[-242,-73],[-202,137],[-173,-42],[-234,-138],[-253,-438],[-276,-255],[-152,-282],[-63,-266],[-3,-407],[14,-284],[52,-201]],[[23016,65864],[-108,-18],[-197,130],[-217,184],[-78,277],[-61,414],[-164,337],[-96,346],[-139,404],[-196,236],[-227,-11],[-175,-467],[-230,177],[-144,178],[-69,325],[-92,309],[-165,260],[-142,186],[-102,210],[-481,0],[0,-244],[-221,0],[-552,-4],[-634,416],[-419,287],[26,116],[-353,-64],[-316,-46]],[[17464,69802],[-46,302],[-180,340],[-130,71],[-30,169],[-156,30],[-100,159],[-258,59],[-71,95],[-33,324],[-270,594],[-231,821],[10,137],[-123,195],[-215,495],[-38,482],[-148,323],[61,489],[-10,507],[-89,453],[109,557],[34,536],[33,536],[-50,792],[-88,506],[-80,274],[33,115],[402,-200],[148,-558],[69,156],[-45,484],[-94,485]],[[6833,62443],[49,-51],[45,-79],[71,-207],[-7,-33],[-108,-126],[-89,-92],[-41,-99],[-69,84],[8,165],[-46,216],[14,65],[48,97],[-19,116],[16,55],[21,-11],[107,-100]],[[6668,62848],[-23,-71],[-94,-43],[-47,125],[-32,48],[-3,37],[27,50],[99,-56],[73,-90]],[[6456,63091],[-9,-63],[-149,17],[21,72],[137,-26]],[[6104,63411],[23,-38],[80,-196],[-15,-34],[-19,8],[-97,21],[-35,133],[-11,24],[74,82]],[[5732,63705],[5,-138],[-33,-58],[-93,107],[14,43],[43,58],[64,-12]],[[3759,86256],[220,-54],[27,-226],[-171,-92],[-182,110],[-168,161],[274,101]],[[7436,84829],[185,-40],[117,-183],[-240,-281],[-277,-225],[-142,152],[-43,277],[252,210],[148,90]],[[13740,82958],[-153,223],[-245,188],[-78,515],[-358,478],[-150,558],[-267,38],[-441,15],[-326,170],[-574,613],[-266,112],[-486,211],[-385,-51],[-546,272],[-330,252],[-309,-125],[58,-411],[-154,-38],[-321,-123],[-245,-199],[-308,-126],[-39,348],[125,580],[295,182],[-76,148],[-354,-329],[-190,-394],[-400,-420],[203,-287],[-262,-424],[-299,-248],[-278,-180],[-69,-261],[-434,-305],[-87,-278],[-325,-252],[-191,45],[-259,-165],[-282,-201],[-231,-197],[-477,-169],[-43,99],[304,276],[271,182],[296,324],[345,66],[137,243],[385,353],[62,119],[205,208],[48,448],[141,349],[-320,-179],[-90,102],[-150,-215],[-181,300],[-75,-212],[-104,294],[-278,-236],[-170,0],[-24,352],[50,216],[-179,211],[-361,-113],[-235,277],[-190,142],[-1,334],[-214,252],[108,340],[226,330],[99,303],[225,43],[191,-94],[224,285],[201,-51],[212,183],[-52,270],[-155,106],[205,228],[-170,-7],[-295,-128],[-85,-131],[-219,131],[-392,-67],[-407,142],[-117,238],[-351,343],[390,247],[620,289],[228,0],[-38,-296],[586,23],[-225,366],[-342,225],[-197,296],[-267,252],[-381,187],[155,309],[493,19],[350,270],[66,287],[284,281],[271,68],[526,262],[256,-40],[427,315],[421,-124],[201,-266],[123,114],[469,-35],[-16,-136],[425,-101],[283,59],[585,-186],[534,-56],[214,-77],[370,96],[421,-177],[302,-83]],[[2297,88264],[171,-113],[173,61],[225,-156],[276,-79],[-23,-64],[-211,-125],[-211,128],[-106,107],[-245,-34],[-66,52],[17,223]],[[74266,79657],[-212,-393],[-230,-56],[-13,-592],[-155,-267],[-551,194],[-200,-1058],[-143,-131],[-550,-236],[250,-1026],[-190,-154],[22,-337]],[[72294,75601],[-171,87],[-140,212],[-412,62],[-461,16],[-100,-65],[-396,248],[-158,-122],[-43,-349],[-457,204],[-183,-84],[-62,-259]],[[69711,75551],[-159,-109],[-367,-412],[-121,-422],[-104,-4],[-76,280],[-353,19],[-57,484],[-135,4],[21,593],[-333,431],[-476,-46],[-326,-86],[-265,533],[-227,223],[-431,423],[-52,51],[-715,-349],[11,-2178]],[[65546,74986],[-142,-29],[-195,463],[-188,166],[-315,-123],[-123,-197]],[[64583,75266],[-15,144],[68,246],[-53,206],[-322,202],[-125,530],[-154,150],[-9,192],[270,-56],[11,432],[236,96],[243,-88],[50,576],[-50,365],[-278,-28],[-236,144],[-321,-260],[-259,-124]],[[63639,77993],[-142,96],[29,304],[-177,395],[-207,-17],[-235,401],[160,448],[-81,120],[222,649],[285,-342],[35,431],[573,643],[434,15],[612,-409],[329,-239],[295,249],[440,12],[356,-306],[80,175],[391,-25],[69,280],[-450,406],[267,288],[-52,161],[266,153],[-200,405],[127,202],[1039,205],[136,146],[695,218],[250,245],[499,-127],[88,-612],[290,144],[356,-202],[-23,-322],[267,33],[696,558],[-102,-185],[355,-457],[620,-1500],[148,309],[383,-340],[399,151],[154,-106],[133,-341],[194,-115],[119,-251],[358,79],[147,-361]],[[69711,75551],[83,-58],[-234,-382],[205,-223],[198,147],[329,-311],[-355,-425],[-212,58]],[[69725,74357],[-114,-15],[-40,164],[58,274],[-371,-137],[-89,-380],[-132,-326],[-232,28],[-72,-261],[204,-140],[60,-440],[-156,-598]],[[68841,72526],[-210,124],[-154,4]],[[68477,72654],[7,362],[-369,253],[-291,289],[-181,278],[-317,408],[-137,609],[-93,108],[-301,-27],[-106,121],[-30,471],[-374,312],[-234,-343],[-237,-204],[45,-297],[-313,-8]],[[89166,49043],[482,-407],[513,-338],[192,-302],[154,-297],[43,-349],[462,-365],[68,-313],[-256,-64],[62,-393],[248,-388],[180,-627],[159,20],[-11,-262],[215,-100],[-84,-111],[295,-249],[-30,-171],[-184,-41],[-69,153],[-238,66],[-281,89],[-216,377],[-158,325],[-144,517],[-362,259],[-235,-169],[-170,-195],[35,-436],[-218,-203],[-155,99],[-288,25]],[[89175,45193],[-4,1925],[-5,1925]],[[92399,48417],[106,-189],[33,-307],[-87,-157],[-52,348],[-65,229],[-126,193],[-158,252],[-200,174],[77,143],[150,-166],[94,-130],[117,-142],[111,-248]],[[92027,47129],[-152,-144],[-142,-138],[-148,1],[-228,171],[-158,165],[23,183],[249,-86],[152,46],[42,283],[40,15],[27,-314],[158,45],[78,202],[155,211],[-30,348],[166,11],[56,-97],[-5,-327],[-93,-361],[-146,-48],[-44,-166]],[[92988,47425],[84,-134],[135,-375],[131,-200],[-39,-166],[-78,-59],[-120,227],[-122,375],[-59,450],[38,57],[30,-175]],[[89175,45193],[-247,485],[-282,118],[-69,-168],[-352,-18],[118,481],[175,164],[-72,642],[-134,496],[-538,500],[-229,50],[-417,546],[-82,-287],[-107,-52],[-63,216],[-1,257],[-212,290],[299,213],[198,-11],[-23,156],[-407,1],[-110,352],[-248,109],[-117,293],[374,143],[142,192],[446,-242],[44,-220],[78,-955],[287,-354],[232,627],[319,356],[247,1],[238,-206],[206,-212],[298,-113]],[[84713,45326],[28,-117],[5,-179]],[[84746,45030],[-181,-441],[-238,-130],[-33,71],[25,201],[119,360],[275,235]],[[87280,46506],[-27,445],[49,212],[58,200],[63,-173],[0,-282],[-143,-402]],[[82744,53024],[-158,-533],[204,-560],[-48,-272],[312,-546],[-329,-70],[-93,-403],[12,-535],[-267,-404],[-7,-589],[-107,-903],[-41,210],[-316,-266],[-110,361],[-198,34],[-139,189],[-330,-212],[-101,285],[-182,-32],[-229,68],[-43,793],[-138,164],[-134,505],[-38,517],[32,548],[165,392]],[[80461,51765],[47,-395],[190,-334],[179,121],[177,-43],[162,299],[133,52],[263,-166],[226,126],[143,822],[107,205],[96,672],[319,0],[241,-100]],[[85936,48924],[305,-172],[101,-452],[-234,244],[-232,49],[-157,-39],[-192,21],[65,325],[344,24]],[[85242,48340],[-192,108],[-54,254],[281,29],[69,-195],[-104,-196]],[[85536,51864],[20,-322],[164,-52],[26,-241],[-15,-517],[-143,58],[-42,-359],[114,-312],[-78,-71],[-112,374],[-82,755],[56,472],[92,215]],[[84146,51097],[319,25],[275,429],[48,-132],[-223,-587],[-209,-113],[-267,115],[-463,-29],[-243,-85],[-39,-447],[248,-526],[150,268],[518,201],[-22,-272],[-121,86],[-121,-347],[-245,-229],[263,-757],[-50,-203],[249,-682],[-2,-388],[-148,-173],[-109,207],[134,484],[-273,-229],[-69,164],[36,228],[-200,346],[21,576],[-186,-179],[24,-689],[11,-846],[-176,-85],[-119,173],[79,544],[-43,570],[-117,4],[-86,405],[115,387],[40,469],[139,891],[58,243],[237,439],[217,-174],[350,-82]],[[83414,44519],[-368,414],[259,116],[146,-180],[97,-180],[-17,-159],[-117,-11]],[[83705,45536],[185,45],[249,216],[-41,-328],[-417,-168],[-370,73],[0,216],[220,123],[174,-177]],[[82849,45639],[172,48],[69,-251],[-321,-119],[-193,-79],[-149,5],[95,340],[153,5],[74,209],[100,-158]],[[80134,46785],[38,-210],[533,-59],[61,244],[515,-284],[101,-383],[417,-108],[341,-351],[-317,-225],[-306,238],[-251,-16],[-288,44],[-260,106],[-322,225],[-204,59],[-116,-74],[-506,243],[-48,254],[-255,44],[191,564],[337,-35],[224,-231],[115,-45]],[[78991,49939],[47,-412],[97,-330],[204,-52],[135,-374],[-70,-735],[-11,-914],[-308,-12],[-234,494],[-356,482],[-119,358],[-210,481],[-138,443],[-212,827],[-244,493],[-81,508],[-103,461],[-250,372],[-145,506],[-209,330],[-290,652],[-24,300],[178,-24],[430,-114],[246,-577],[215,-401],[153,-246],[263,-635],[283,-9],[233,-405],[161,-495],[211,-270],[-111,-482],[159,-205],[100,-15]],[[30935,19481],[106,-274],[139,-443],[361,-355],[389,-147],[-125,-296],[-264,-29],[-141,208]],[[31400,18145],[-168,16],[-297,1],[0,1319]],[[33993,32727],[-70,-473],[-74,-607],[3,-588],[-61,-132],[-21,-382]],[[33770,30545],[-19,-308],[353,-506],[-38,-408],[173,-257],[-14,-289],[-267,-757],[-412,-317],[-557,-123],[-305,59],[59,-352],[-57,-442],[51,-298],[-167,-208],[-284,-82],[-267,216],[-108,-155],[39,-587],[188,-178],[152,186],[82,-307],[-255,-183],[-223,-367],[-41,-595],[-66,-316],[-262,-2],[-218,-302],[-80,-443],[273,-433],[266,-119],[-96,-531],[-328,-333],[-180,-692],[-254,-234],[-113,-276],[89,-614],[185,-342],[-117,30]],[[30952,19680],[-257,93],[-672,79],[-115,344],[6,443],[-185,-38],[-98,214],[-24,626],[213,260],[88,375],[-33,299],[148,504],[101,782],[-30,347],[122,112],[-30,223],[-129,118],[92,248],[-126,224],[-65,682],[112,120],[-47,720],[65,605],[75,527],[166,215],[-84,576],[-1,543],[210,386],[-7,494],[159,576],[1,544],[-72,108],[-128,1020],[171,607],[-27,572],[100,537],[182,555],[196,367],[-83,232],[58,190],[-9,985],[302,291],[96,614],[-34,148]],[[31359,37147],[231,534],[364,-144],[163,-427],[109,475],[316,-24],[45,-127]],[[32587,37434],[511,-964],[227,-89],[339,-437],[286,-231],[40,-261],[-273,-898],[280,-160],[312,-91],[220,95],[252,453],[45,521]],[[34826,35372],[138,114],[139,-341],[-6,-472],[-234,-326],[-186,-241],[-314,-573],[-370,-806]],[[31400,18145],[-92,-239],[-238,-183],[-137,19],[-164,48],[-202,177],[-291,86],[-350,330],[-283,317],[-383,662],[229,-124],[390,-395],[369,-212],[143,271],[90,405],[256,244],[198,-70]],[[30669,40193],[136,-402],[37,-426],[146,-250],[-88,-572],[150,-663],[109,-814],[200,81]],[[30952,19680],[-247,4],[-134,-145],[-250,-213],[-45,-552],[-118,-14],[-313,192],[-318,412],[-346,338],[-87,374],[79,346],[-140,393],[-36,1007],[119,568],[293,457],[-422,172],[265,522],[94,982],[309,-208],[145,1224],[-186,157],[-87,-738],[-175,83],[87,845],[95,1095],[127,404],[-80,576],[-22,666],[117,19],[170,954],[192,945],[118,881],[-64,885],[83,487],[-34,730],[163,721],[50,1143],[89,1227],[87,1321],[-20,967],[-58,832]],[[30452,39739],[143,151],[74,303]],[[58538,45652],[-109,60],[-373,-99],[-75,-71],[-79,-377],[62,-261],[-49,-699],[-34,-593],[75,-105],[194,-230],[76,107],[23,-637],[-212,5],[-114,325],[-103,252],[-213,82],[-62,310],[-170,-187],[-222,83],[-93,268],[-176,55],[-131,-15],[-15,184],[-96,15]],[[56642,44124],[-127,35],[-172,-89],[-121,15],[-68,-54],[15,703],[-93,219],[-21,363],[41,356],[-56,228],[-5,372],[-337,-5],[24,213],[-142,-2],[-15,-103],[-172,-23],[-69,-344],[-42,-148],[-154,83],[-91,-83],[-184,-47],[-106,309],[-64,191],[-80,354],[-68,440],[-820,8],[-98,-71],[-80,11],[-115,-79]],[[53422,46976],[-39,183]],[[53383,47159],[71,62],[9,258],[45,152],[101,124]],[[53609,47755],[73,-60],[95,226],[152,-6],[17,-167],[104,-105],[164,370],[161,289],[71,189],[-10,486],[121,574],[127,304],[183,285],[32,189],[7,216],[45,205],[-14,335],[34,524],[55,368],[83,316],[16,357]],[[55125,52650],[25,412],[108,300],[149,190],[229,-200],[177,-218],[203,-59],[207,-115],[83,357],[38,46],[127,-60],[309,295],[110,-125],[90,18],[41,143],[104,51],[209,-62],[178,-14],[91,63]],[[57603,53672],[169,-488],[124,-71],[75,99],[128,-39],[155,125],[66,-252],[244,-393]],[[58564,52653],[-16,-691],[111,-80],[-89,-210],[-107,-157],[-106,-308],[-59,-274],[-15,-475],[-65,-225],[-2,-446]],[[58216,49787],[-80,-165],[-10,-351],[-38,-46],[-26,-323]],[[58062,48902],[70,-268],[17,-713]],[[61551,49585],[-165,488],[-3,2152],[243,670]],[[61626,52895],[76,186],[178,11],[247,417],[362,26],[785,1773]],[[63274,55308],[194,493],[125,363],[0,308],[0,596],[1,244],[2,9]],[[63596,57321],[89,12],[128,88],[147,59],[132,202],[105,2],[6,-163],[-25,-344],[1,-310],[-59,-214],[-78,-639],[-134,-659],[-172,-755],[-238,-866],[-237,-661],[-327,-806],[-278,-479],[-415,-586],[-259,-450],[-304,-715],[-64,-312],[-63,-140]],[[59417,50018],[-3,627],[80,239],[137,391],[101,431],[-123,678],[-32,296],[-132,411]],[[59445,53091],[171,352],[188,390]],[[59804,53833],[145,-99],[0,-332],[95,-194],[193,0],[352,-502],[87,-6],[65,16],[62,-68],[185,-47],[82,247],[254,247],[112,-200],[190,0]],[[61551,49585],[-195,-236],[-68,-246],[-104,-44],[-40,-416],[-89,-238],[-54,-393],[-112,-195]],[[56824,55442],[-212,258],[-96,170],[-18,184],[45,246],[-1,241],[-160,369],[-31,253]],[[56351,57163],[3,143],[-102,174],[-3,343],[-58,228],[-98,-34],[28,217],[72,246],[-32,245],[92,181],[-58,138],[73,365],[127,435],[240,-41],[-14,2345]],[[56621,62148],[3,248],[320,2],[0,1180]],[[56944,63578],[1117,0],[1077,0],[1102,0]],[[60240,63578],[90,-580],[-61,-107],[40,-608],[102,-706],[106,-145],[152,-219]],[[60669,61213],[-141,-337],[-204,-97],[-88,-181],[-27,-393],[-120,-868],[30,-236]],[[60119,59101],[-45,-508],[-112,-582],[-168,-293],[-119,-451],[-28,-241],[-132,-166],[-82,-618],[4,-531]],[[59437,55711],[-3,460],[-39,12],[5,294],[-33,203],[-143,233],[-34,426],[34,436],[-129,41],[-19,-132],[-167,-30],[67,-173],[23,-355],[-152,-324],[-138,-426],[-144,-61],[-233,345],[-105,-122],[-29,-172],[-143,-112],[-9,-122],[-277,0],[-38,122],[-200,20],[-100,-101],[-77,51],[-143,344],[-48,163],[-200,-81],[-76,-274],[-72,-528],[-95,-111],[-85,-65],[189,-230]],[[56351,57163],[-176,-101],[-141,-239],[-201,-645],[-261,-273],[-269,36],[-78,-54],[28,-208],[-145,-207],[-118,-230],[-350,-226],[-69,134],[-46,11],[-52,-152],[-229,-44]],[[54244,54965],[43,160],[-87,407],[-39,245],[-121,100],[-164,345],[60,279],[127,-60],[78,42],[155,-6],[-151,537],[10,393],[-18,392],[-111,378]],[[54026,58177],[28,279],[-178,13],[0,380],[-115,219],[120,778],[354,557],[15,769],[107,1199],[60,254],[-116,203],[-4,188],[-104,153],[-68,919]],[[54125,64088],[280,323],[1108,-1132],[1108,-1131]],[[30080,62227],[24,-321],[-21,-228],[-68,-99],[71,-177],[-5,-161]],[[30081,61241],[-185,100],[-131,-41],[-169,43],[-130,-110],[-149,184],[24,190],[256,-82],[210,-47],[100,131],[-127,256],[2,226],[-175,92],[62,163],[170,-26],[241,-93]],[[30080,62227],[34,101],[217,-3],[165,-152],[73,15],[50,-209],[152,11],[-9,-176],[124,-21],[136,-217],[-103,-240],[-132,128],[-127,-25],[-92,28],[-50,-107],[-106,-37],[-43,144],[-92,-85],[-111,-405],[-71,94],[-14,170]],[[76049,98451],[600,133],[540,-297],[640,-572],[-69,-531],[-606,-73],[-773,170],[-462,226],[-213,423],[-379,117],[722,404]],[[78565,97421],[704,-336],[-82,-240],[-1566,-228],[507,776],[229,66],[208,-38]],[[88563,95563],[734,-26],[1004,-313],[-219,-439],[-1023,16],[-461,-139],[-550,384],[149,406],[366,111]],[[91172,95096],[697,-155],[-321,-234],[-444,53],[-516,233],[66,192],[518,-89]],[[88850,93928],[263,234],[348,54],[394,-226],[34,-155],[-421,-4],[-569,66],[-49,31]],[[62457,98194],[542,107],[422,8],[57,-160],[159,142],[262,97],[412,-129],[-107,-90],[-373,-78],[-250,-45],[-39,-97],[-324,-98],[-301,140],[158,185],[-618,18]],[[56314,82678],[-511,-9],[-342,67]],[[55461,82736],[63,260],[383,191]],[[55907,83187],[291,-103],[123,-94],[-30,-162],[23,-150]],[[64863,94153],[665,518],[-75,268],[621,312],[917,380],[925,110],[475,220],[541,76],[193,-233],[-187,-184],[-984,-293],[-848,-282],[-863,-562],[-414,-577],[-435,-568],[56,-491],[531,-484],[-164,-52],[-907,77],[-74,262],[-503,158],[-40,320],[284,126],[-10,323],[551,503],[-255,73]],[[89698,82309],[96,-569],[-7,-581],[114,-597],[280,-1046],[-411,195],[-171,-854],[271,-605],[-8,-413],[-211,356],[-182,-457],[-51,496],[31,575],[-32,638],[64,446],[13,790],[-163,581],[24,808],[257,271],[-110,274],[123,83],[73,-391]],[[86327,75524],[-39,104]],[[86288,75628],[-2,300],[142,16],[40,698],[-73,506],[238,208],[338,-104],[186,575],[96,647],[107,216],[146,532],[-459,-175],[-240,-233],[-423,1],[-112,555],[-329,420],[-483,189],[-103,579],[-97,363],[-104,254],[-172,596],[-244,217],[-415,176],[-369,-16],[-345,-106],[-229,-294],[152,-141],[4,-326],[-155,-189],[-251,-627],[3,-260],[-392,-373],[-333,223]],[[82410,80055],[-331,-49],[-146,198],[-166,63],[-407,-416],[-366,-98],[-255,-146],[-350,96],[-258,-6],[-168,302],[-272,284],[-279,78],[-351,-78],[-263,-109],[-394,248],[-53,443],[-327,152],[-252,69],[-311,244],[-288,-612],[113,-348],[-270,-411],[-402,148],[-277,22],[-186,276],[-289,8],[-242,182],[-423,-278],[-530,-509],[-292,-102]],[[74375,79706],[-109,-49]],[[63639,77993],[-127,-350],[-269,-97],[-276,-610],[252,-561],[-27,-398],[303,-696]],[[63495,75281],[-166,-238],[-48,-150],[-122,40],[-191,359],[-78,20]],[[62890,75312],[-175,137],[-85,242],[-259,124],[-169,-93],[-48,110],[-378,283],[-409,96],[-235,101],[-34,-70]],[[61098,76242],[-354,499],[-317,223],[-240,347],[202,95],[231,494],[-156,234],[410,241],[-8,129],[-249,-95]],[[60617,78409],[9,262],[143,165],[269,43],[44,197],[-62,326],[113,310],[-3,173],[-410,192],[-162,-6],[-172,277],[-213,-94],[-352,208],[6,116],[-99,256],[-222,29],[-23,183],[70,120],[-178,334],[-288,-57],[-84,30],[-70,-134],[-104,23]],[[58829,81362],[-68,379],[-66,196],[54,55],[224,-20],[108,129],[-80,157],[-187,104],[16,107],[-113,108],[-174,387],[60,159],[-27,277],[-272,141],[-146,-70],[-39,146],[-293,149]],[[57826,83766],[-89,348],[-24,287],[-134,136]],[[57579,84537],[120,187],[-83,551],[198,341],[-42,103]],[[57772,85719],[316,327],[-291,280]],[[57797,86326],[594,755],[258,341],[105,301],[-411,405],[113,385],[-250,440],[187,506],[-323,673],[256,445],[-425,394],[41,414]],[[57942,91385],[224,54],[473,237]],[[58639,91676],[286,206],[456,-358],[761,-140],[1050,-668],[213,-281],[18,-393],[-308,-311],[-454,-157],[-1240,449],[-204,-75],[453,-433],[18,-274],[18,-604],[358,-180],[217,-153],[36,286],[-168,254],[177,224],[672,-368],[233,144],[-186,433],[647,578],[256,-34],[260,-206],[161,406],[-231,352],[136,353],[-204,367],[777,-190],[158,-331],[-351,-73],[1,-328],[219,-203],[429,128],[68,377],[580,282],[970,507],[209,-29],[-273,-359],[344,-61],[199,202],[521,16],[412,245],[317,-356],[315,391],[-291,343],[145,195],[820,-179],[385,-185],[1006,-675],[186,309],[-282,313],[-8,125],[-335,58],[92,280],[-149,461],[-8,189],[512,535],[183,537],[206,116],[736,-156],[57,-328],[-263,-479],[173,-189],[89,-413],[-63,-809],[307,-362],[-120,-395],[-544,-839],[318,-87],[110,213],[306,151],[74,293],[240,281],[-162,336],[130,390],[-304,49],[-67,328],[222,593],[-361,482],[497,398],[-64,421],[139,13],[145,-328],[-109,-570],[297,-108],[-127,426],[465,233],[577,31],[513,-337],[-247,492],[-28,630],[483,119],[669,-26],[602,77],[-226,309],[321,388],[319,16],[540,293],[734,79],[93,162],[729,55],[227,-133],[624,314],[510,-10],[77,255],[265,252],[656,242],[476,-191],[-378,-146],[629,-90],[75,-292],[254,143],[812,-7],[626,-289],[223,-221],[-69,-307],[-307,-175],[-730,-328],[-209,-175],[345,-83],[410,-149],[251,112],[141,-379],[122,153],[444,93],[892,-97],[67,-276],[1162,-88],[15,451],[590,-104],[443,4],[449,-312],[128,-378],[-165,-247],[349,-465],[437,-240],[268,620],[446,-266],[473,159],[538,-182],[204,166],[455,-83],[-201,549],[367,256],[2509,-384],[236,-351],[727,-451],[1122,112],[553,-98],[231,-244],[-33,-432],[342,-168],[372,121],[492,15],[525,-116],[526,66],[484,-526],[344,189],[-224,378],[123,262],[886,-165],[578,36],[799,-282],[-99610,-258],[681,-451],[728,-588],[-24,-367],[187,-147],[-64,429],[754,-88],[544,-553],[-276,-257],[-455,-61],[-7,-578],[-111,-122],[-260,17],[-212,206],[-369,172],[-62,257],[-283,96],[-315,-76],[-151,207],[60,219],[-333,-140],[126,-278],[-158,-251],[99997,-3],[-357,-260],[-360,44],[250,-315],[166,-487],[128,-159],[32,-244],[-71,-157],[-518,129],[-777,-445],[-247,-69],[-425,-415],[-403,-362],[-102,-269],[-397,409],[-724,-464],[-126,219],[-268,-253],[-371,81],[-90,-388],[-333,-572],[10,-239],[316,-132],[-37,-860],[-258,-22],[-119,-494],[116,-255],[-486,-302],[-96,-674],[-415,-144],[-83,-600],[-400,-551],[-103,407],[-119,862],[-155,1313],[134,819],[234,353],[14,276],[432,132],[496,744],[479,608],[499,471],[223,833],[-337,-50],[-167,-487],[-705,-649],[-227,727],[-717,-201],[-696,-990],[230,-362],[-620,-154],[-430,-61],[20,427],[-431,90],[-344,-291],[-850,102],[-914,-175],[-899,-1153],[-1065,-1394],[438,-74],[136,-370],[270,-132],[178,295],[305,-38],[401,-650],[9,-503],[-217,-590],[-23,-705],[-126,-945],[-418,-855],[-94,-409],[-377,-688],[-374,-682],[-179,-349],[-370,-346],[-175,-8],[-175,287],[-373,-432],[-43,-197]],[[0,92833],[36,24],[235,-1],[402,-169],[-24,-81],[-286,-141],[-363,-36],[99694,-30],[-49,187],[-99645,247]],[[59287,77741],[73,146],[198,-127],[89,-23],[36,-117],[42,-18]],[[59725,77602],[2,-51],[136,-142],[284,35],[-55,-210],[-304,-103],[-377,-342],[-154,121],[61,277],[-304,173],[50,113],[265,197],[-42,71]],[[28061,66408],[130,47],[184,-18],[8,-153],[-303,-95],[-19,219]],[[28391,66555],[220,-265],[-48,-420],[-51,75],[4,309],[-124,234],[-1,67]],[[28280,65474],[84,-23],[97,-491],[1,-343],[-68,-29],[-70,340],[-104,171],[60,375]],[[33e3,19946],[333,354],[236,-148],[167,237],[222,-266],[-83,-207],[-375,-177],[-125,207],[-236,-266],[-139,266]],[[54206,97653],[105,202],[408,20],[350,-206],[915,-440],[-699,-233],[-155,-435],[-243,-111],[-132,-490],[-335,-23],[-598,361],[252,210],[-416,170],[-541,499],[-216,463],[757,212],[152,-207],[396,8]],[[57942,91385],[117,414],[-356,235],[-431,-200],[-137,-433],[-265,-262],[-298,143],[-362,-29],[-309,312],[-167,-156]],[[55734,91409],[-172,-24],[-41,-389],[-523,95],[-74,-329],[-267,2],[-183,-421],[-278,-655],[-431,-831],[101,-202],[-97,-234],[-275,10],[-180,-554],[17,-784],[177,-300],[-92,-694],[-231,-405],[-122,-341]],[[53063,85353],[-187,363],[-548,-684],[-371,-138],[-384,301],[-99,635],[-88,1363],[256,381],[733,496],[549,609],[508,824],[668,1141],[465,444],[763,741],[610,259],[457,-31],[423,489],[506,-26],[499,118],[869,-433],[-358,-158],[305,-371]],[[57613,97879],[-412,-318],[-806,-70],[-819,98],[-50,163],[-398,11],[-304,271],[858,165],[403,-142],[281,177],[702,-148],[545,-207]],[[56867,96577],[-620,-241],[-490,137],[191,152],[-167,189],[575,119],[110,-222],[401,-134]],[[37010,99398],[932,353],[975,-27],[354,218],[982,57],[2219,-74],[1737,-469],[-513,-227],[-1062,-26],[-1496,-58],[140,-105],[984,65],[836,-204],[540,181],[231,-212],[-305,-344],[707,220],[1348,229],[833,-114],[156,-253],[-1132,-420],[-157,-136],[-888,-102],[643,-28],[-324,-431],[-224,-383],[9,-658],[333,-386],[-434,-24],[-457,-187],[513,-313],[65,-502],[-297,-55],[360,-508],[-617,-42],[322,-241],[-91,-208],[-391,-91],[-388,-2],[348,-400],[4,-263],[-549,244],[-143,-158],[375,-148],[364,-361],[105,-476],[-495,-114],[-214,228],[-344,340],[95,-401],[-322,-311],[732,-25],[383,-32],[-745,-515],[-755,-466],[-813,-204],[-306,-2],[-288,-228],[-386,-624],[-597,-414],[-192,-24],[-370,-145],[-399,-138],[-238,-365],[-4,-415],[-141,-388],[-453,-472],[112,-462],[-125,-488],[-142,-577],[-391,-36],[-410,482],[-556,3],[-269,324],[-186,577],[-481,735],[-141,385],[-38,530],[-384,546],[100,435],[-186,208],[275,691],[418,220],[110,247],[58,461],[-318,-209],[-151,-88],[-249,-84],[-341,193],[-19,401],[109,314],[258,9],[567,-157],[-478,375],[-249,202],[-276,-83],[-232,147],[310,550],[-169,220],[-220,409],[-335,626],[-353,230],[3,247],[-745,346],[-590,43],[-743,-24],[-677,-44],[-323,188],[-482,372],[729,186],[559,31],[-1188,154],[-627,241],[39,229],[1051,285],[1018,284],[107,214],[-750,213],[243,235],[961,413],[404,63],[-115,265],[658,156],[854,93],[853,5],[303,-184],[737,325],[663,-221],[390,-46],[577,-192],[-660,318],[38,253]],[[69148,21851],[179,-186],[263,-74],[9,-112],[-77,-269],[-427,-38],[-7,314],[41,244],[19,121]],[[84713,45326],[32,139],[239,133],[194,20],[87,74],[105,-74],[-102,-160],[-289,-258],[-233,-170]],[[54540,33696],[133,292],[109,-162],[47,-252],[125,-43],[175,-112],[149,43],[248,302],[0,2182]],[[55526,35946],[75,-88],[165,-562],[-26,-360],[62,-207],[199,60],[139,264],[132,177],[68,283],[135,137],[117,-71],[133,-166],[226,-29],[178,138],[28,184],[48,283],[152,47],[83,222],[93,393],[249,442],[393,435]],[[58175,37528],[113,-7],[134,-100],[94,71],[148,-59]],[[58664,37433],[133,-832],[72,-419],[-49,-659],[23,-212]],[[58843,35311],[-140,108],[-80,-42],[-26,-172],[-76,-222],[2,-204],[166,-320],[163,63],[56,263]],[[58908,34785],[211,-5]],[[59119,34780],[-70,-430],[-32,-491],[-72,-267],[-190,-298],[-54,-86],[-118,-300],[-77,-303],[-158,-424],[-314,-609],[-196,-355],[-210,-269],[-290,-229],[-141,-31],[-36,-164],[-169,88],[-138,-113],[-301,114],[-168,-72],[-115,31],[-286,-233],[-238,-94],[-171,-223],[-127,-14],[-117,210],[-94,11],[-120,264],[-13,-82],[-37,159],[2,346],[-90,396],[89,108],[-7,453],[-182,553],[-139,501],[-1,1],[-199,768]],[[58049,33472],[-121,182],[-130,-120],[-151,-232],[-148,-374],[209,-454],[99,59],[51,188],[155,93],[47,192],[85,288],[-96,178]],[[23016,65864],[-107,-518],[-49,-426],[-20,-791],[-27,-289],[48,-322],[86,-288],[56,-458],[184,-440],[65,-337],[109,-291],[295,-157],[114,-247],[244,165],[212,60],[208,106],[175,101],[176,241],[67,345],[22,496],[48,173],[188,155],[294,137],[246,-21],[169,50],[66,-125],[-9,-285],[-149,-351],[-66,-360],[51,-103],[-42,-255],[-69,-461],[-71,152],[-58,-10]],[[25472,61510],[-53,-8],[-99,-357],[-51,70],[-33,-27],[2,-87]],[[25238,61101],[-257,7],[-259,-1],[-1,-333],[-125,-1],[103,-198],[103,-136],[31,-128],[45,-36],[-7,-201],[-357,-2],[-133,-481],[39,-111],[-32,-138],[-7,-172]],[[24381,59170],[-314,636],[-144,191],[-226,155],[-156,-43],[-223,-223],[-140,-58],[-196,156],[-208,112],[-260,271],[-208,83],[-314,275],[-233,282],[-70,158],[-155,35],[-284,187],[-116,270],[-299,335],[-139,373],[-66,288],[93,57],[-29,169],[64,153],[1,204],[-93,266],[-25,235],[-94,298],[-244,587],[-280,462],[-135,368],[-238,241],[-51,145],[42,365],[-142,138],[-164,287],[-69,412],[-149,48],[-162,311],[-130,288],[-12,184],[-149,446],[-99,452],[5,227],[-201,234],[-93,-25],[-159,163],[-44,-240],[46,-284],[27,-444],[95,-243],[206,-407],[46,-139],[42,-42],[37,-203],[49,8],[56,-381],[85,-150],[59,-210],[174,-300],[92,-550],[83,-259],[77,-277],[15,-311],[134,-20],[112,-268],[100,-264],[-6,-106],[-117,-217],[-49,3],[-74,359],[-181,337],[-201,286],[-142,150],[9,432],[-42,320],[-132,183],[-191,264],[-37,-76],[-70,154],[-171,143],[-164,343],[20,44],[115,-33],[103,221],[10,266],[-214,422],[-163,163],[-102,369],[-103,388],[-129,472],[-113,531]],[[33993,32727],[180,63],[279,-457],[103,18],[286,-379],[218,-327],[160,-402],[-122,-280],[77,-334]],[[35174,30629],[-121,-372],[-313,-328],[-205,118],[-151,-63],[-256,253],[-189,-19],[-169,327]],[[34826,35372],[54,341],[38,350],[0,325],[-100,107],[-104,-96],[-103,26],[-33,228],[-26,541],[-52,177],[-187,160],[-114,-116],[-293,113],[18,802],[-82,329]],[[33842,38659],[87,122],[-27,337],[77,259],[49,465],[-66,367],[-151,166],[-30,233],[41,342],[-533,24],[-107,688],[81,10],[-3,255],[-55,172],[-12,342],[-161,175],[-175,-6],[-115,172],[-188,117],[-109,220],[-311,98],[-302,529],[23,396],[-34,227],[29,443],[-363,-100],[-147,-222],[-243,-239],[-62,-179],[-143,-13],[-206,50]],[[30686,44109],[-157,-102],[-126,68],[18,898],[-228,-348],[-245,15],[-105,315],[-184,34],[59,254],[-155,359],[-115,532],[73,108],[0,250],[168,171],[-28,319],[71,206],[20,275],[318,402],[227,114],[37,89],[251,-28]],[[30585,48040],[125,1620],[6,256],[-43,339],[-123,215],[1,430],[156,97],[56,-61],[9,226],[-162,61],[-4,370],[541,-13],[92,203],[77,-187],[55,-349],[52,73]],[[31423,51320],[153,-312],[216,38],[54,181],[206,138],[115,97],[32,250],[198,168],[-15,124],[-235,51],[-39,372],[12,396],[-125,153],[52,55],[206,-76],[221,-148],[80,140],[200,92],[310,221],[102,225],[-37,167]],[[33129,53652],[145,26],[64,-136],[-36,-259],[96,-90],[63,-274],[-77,-209],[-44,-502],[71,-299],[20,-274],[171,-277],[137,-29],[30,116],[88,25],[126,104],[90,157],[154,-50],[67,21]],[[34294,51702],[151,-48],[25,120],[-46,118],[28,171],[112,-53],[131,61],[159,-125]],[[34854,51946],[121,-122],[86,160],[62,-25],[38,-166],[133,42],[107,224],[85,436],[164,540]],[[35650,53035],[95,28],[69,-327],[155,-1033],[149,-97],[7,-408],[-208,-487],[86,-178],[491,-92],[10,-593],[211,388],[349,-212],[462,-361],[135,-346],[-45,-327],[323,182],[540,-313],[415,23],[411,-489],[355,-662],[214,-170],[237,-24],[101,-186],[94,-752],[46,-358],[-110,-977],[-142,-385],[-391,-822],[-177,-668],[-206,-513],[-69,-11],[-78,-435],[20,-1107],[-77,-910],[-30,-390],[-88,-233],[-49,-790],[-282,-771],[-47,-610],[-225,-256],[-65,-355],[-302,2],[-437,-227],[-195,-263],[-311,-173],[-327,-470],[-235,-586],[-41,-441],[46,-326],[-51,-597],[-63,-289],[-195,-325],[-308,-1040],[-244,-468],[-189,-277],[-127,-562],[-183,-337]],[[33842,38659],[-4,182],[-259,302],[-258,9],[-484,-172],[-133,-520],[-7,-318],[-110,-708]],[[30669,40193],[175,638],[-119,496],[63,199],[-49,219],[108,295],[6,503],[13,415],[60,200],[-240,951]],[[30452,39739],[-279,340],[-24,242],[-551,593],[-498,646],[-214,365],[-115,488],[46,170],[-236,775],[-274,1090],[-262,1177],[-114,269],[-87,435],[-216,386],[-198,239],[90,264],[-134,563],[86,414],[221,373]],[[27693,48568],[33,-246],[-79,-141],[8,-216],[114,47],[113,-64],[116,-298],[157,243],[53,398],[170,514],[334,233],[303,619],[86,384],[-38,449]],[[29063,50490],[74,56],[184,-280],[89,-279],[129,-152],[163,-620],[207,-74],[153,157],[101,-103],[166,51],[213,-276],[-179,-602],[83,-14],[139,-314]],[[29063,50490],[-119,140],[-137,195],[-79,-94],[-235,82],[-68,255],[-52,-10],[-278,338]],[[28095,51396],[-37,183],[103,44],[-12,296],[65,214],[138,40],[117,371],[106,310],[-102,141],[52,343],[-62,540],[59,155],[-44,500],[-112,315]],[[28366,54848],[36,287],[89,-43],[52,176],[-64,348],[34,86]],[[28513,55702],[143,-18],[209,412],[114,63],[3,195],[51,500],[159,274],[175,11],[22,123],[218,-49],[218,298],[109,132],[134,285],[98,-36],[73,-156],[-54,-199]],[[30185,57537],[-178,-99],[-71,-295],[-107,-169],[-81,-220],[-34,-422],[-77,-345],[144,-40],[35,-271],[62,-130],[21,-238],[-33,-219],[10,-123],[69,-49],[66,-207],[357,57],[161,-75],[196,-508],[112,63],[200,-32],[158,68],[99,-102],[-50,-318],[-62,-199],[-22,-423],[56,-393],[79,-175],[9,-133],[-140,-294],[100,-130],[74,-207],[85,-589]],[[28366,54848],[-93,170],[-59,319],[68,158],[-70,40],[-52,196],[-138,164],[-122,-38],[-56,-205],[-112,-149],[-61,-20],[-27,-123],[132,-321],[-75,-76],[-40,-87],[-130,-30],[-48,353],[-36,-101],[-92,35],[-56,238],[-114,39],[-72,69],[-119,-1],[-8,-128],[-32,89]],[[26954,55439],[14,117],[23,120],[-10,107],[41,70],[-58,88],[-1,238],[107,53]],[[27070,56232],[100,-212],[-6,-126],[111,-26],[26,48],[77,-145],[136,42],[119,150],[168,119],[95,176],[153,-34],[-10,-58],[155,-21],[124,-102],[90,-177],[105,-164]],[[26954,55439],[-151,131],[-56,124],[32,103],[-11,130],[-77,142],[-109,116],[-95,76],[-19,173],[-73,105],[18,-172],[-55,-141],[-64,164],[-89,58],[-38,120],[2,179],[36,187],[-78,83],[64,114]],[[26191,57131],[42,76],[183,-156],[63,77],[89,-50],[46,-121],[82,-40],[66,126]],[[26762,57043],[70,-321],[108,-238],[130,-252]],[[26191,57131],[-96,186],[-130,238],[-61,200],[-117,185],[-140,267],[31,91],[46,-88],[21,41]],[[25745,58251],[86,25],[35,135],[41,5],[-6,290],[65,14],[58,-4],[60,158],[82,-120],[29,74],[51,70],[97,163],[4,121],[27,-5],[36,141],[29,17],[47,-90],[56,-27],[61,76],[70,0],[97,77],[38,81],[95,-12]],[[26903,59440],[-24,-57],[-14,-132],[29,-216],[-64,-202],[-30,-237],[-9,-261],[15,-152],[7,-266],[-43,-58],[-26,-253],[19,-156],[-56,-151],[12,-159],[43,-97]],[[25745,58251],[-48,185],[-84,51]],[[25613,58487],[19,237],[-38,64],[-57,42],[-122,-70],[-10,79],[-84,95],[-60,118],[-82,50]],[[25179,59102],[58,150],[-22,116],[20,113],[131,166],[127,225]],[[25493,59872],[29,-23],[61,104],[79,8],[26,-48],[43,29],[129,-53],[128,15],[90,66],[32,66],[89,-31],[66,-40],[73,14],[55,51],[127,-82],[44,-13],[85,-110],[80,-132],[101,-91],[73,-162]],[[25613,58487],[-31,-139],[-161,9],[-100,57],[-115,117],[-154,37],[-79,127]],[[24973,58695],[9,86],[95,149],[52,66],[-15,69],[65,37]],[[25238,61101],[-2,-468],[-22,-667],[83,0]],[[25297,59966],[90,-107],[24,88],[82,-75]],[[24973,58695],[-142,103],[-174,11],[-127,117],[-149,244]],[[25472,61510],[1,-87],[53,-3],[-5,-160],[-45,-256],[24,-91],[-29,-212],[18,-56],[-32,-299],[-55,-156],[-50,-19],[-55,-205]],[[30185,57537],[-8,-139],[-163,-69],[91,-268],[-3,-309],[-123,-344],[105,-468],[120,38],[62,427],[-86,208],[-14,447],[346,241],[-38,278],[97,186],[100,-415],[195,-9],[180,-330],[11,-195],[249,-6],[297,61],[159,-264],[213,-74],[155,185],[4,149],[344,35],[333,9],[-236,-175],[95,-279],[222,-44],[210,-291],[45,-473],[144,13],[109,-139]],[[33400,55523],[-220,-347],[-24,-215],[95,-220],[-69,-110],[-171,-95],[5,-273],[-75,-163],[188,-448]],[[33400,55523],[183,-217],[171,-385],[8,-304],[105,-14],[149,-289],[109,-205]],[[34125,54109],[-44,-532],[-169,-154],[15,-139],[-51,-305],[123,-429],[89,-1],[37,-333],[169,-514]],[[34125,54109],[333,-119],[30,107],[225,43],[298,-159]],[[35011,53981],[-144,-508],[22,-404],[109,-351],[-49,-254],[-24,-270],[-71,-248]],[[35011,53981],[95,-65],[204,-140],[294,-499],[46,-242]],[[51718,79804],[131,-155],[400,-109],[-140,-404],[-35,-421]],[[52074,78715],[-77,-101],[-126,54],[9,-150],[-203,-332],[-5,-267],[133,92],[95,-259]],[[51900,77752],[-11,-167],[82,-222],[-97,-180],[72,-457],[151,-75],[-32,-256]],[[52065,76395],[-252,-334],[-548,160],[-404,-192],[-32,-355]],[[50829,75674],[-322,-77],[-313,267],[-101,-127],[-511,268],[-111,230]],[[49471,76235],[144,354],[53,1177],[-287,620],[-205,299],[-424,227],[-28,431],[360,129],[466,-152],[-88,669],[263,-254],[646,461],[84,484],[243,119]],[[50698,80799],[40,-207],[129,-10],[129,-237],[194,-279],[143,46],[243,-269]],[[51576,79843],[62,-52],[80,13]],[[52429,75765],[179,226],[47,-507],[-92,-456],[-126,120],[-64,398],[56,219]],[[27693,48568],[148,442],[-60,258],[-106,-275],[-166,259],[56,167],[-47,536],[97,89],[52,368],[105,381],[-20,241],[153,126],[190,236]],[[31588,61519],[142,-52],[50,-118],[-71,-149],[-209,4],[-163,-21],[-16,253],[40,86],[227,-3]],[[28453,61504],[187,-53],[147,-142],[46,-161],[-195,-11],[-84,-99],[-156,95],[-159,215],[34,135],[116,41],[64,-20]],[[27147,64280],[240,-42],[219,-7],[261,-201],[110,-216],[260,66],[98,-138],[235,-366],[173,-267],[92,8],[165,-120],[-20,-167],[205,-24],[210,-242],[-33,-138],[-185,-75],[-187,-29],[-191,46],[-398,-57],[186,329],[-113,154],[-179,39],[-96,171],[-66,336],[-157,-23],[-259,159],[-83,124],[-362,91],[-97,115],[104,148],[-273,30],[-199,-307],[-115,-8],[-40,-144],[-138,-65],[-118,56],[146,183],[60,213],[126,131],[142,116],[210,56],[67,65]],[[58175,37528],[-177,267],[-215,90],[-82,375],[0,208],[-119,64],[-315,649],[-87,342],[-56,105],[-107,473]],[[57017,40101],[311,-65],[90,-68],[94,13],[154,383],[241,486],[100,46],[33,205],[159,235],[210,81]],[[58409,41417],[18,-220],[232,12],[128,-125],[60,-146],[132,-43],[145,-190],[0,-748],[-54,-409],[-12,-442],[45,-175],[-31,-348],[-42,-53],[-74,-426],[-292,-671]],[[55526,35946],[0,1725],[274,20],[8,2105],[207,19],[428,207],[106,-243],[177,231],[85,2],[156,133]],[[56967,40145],[50,-44]],[[54540,33696],[-207,446],[-108,432],[-62,575],[-68,428],[-93,910],[-7,707],[-35,322],[-108,243],[-144,489],[-146,708],[-60,371],[-226,577],[-17,453]],[[53259,40357],[134,113],[166,100],[180,-17],[166,-267],[42,41],[1126,26],[192,-284],[673,-83],[510,241]],[[56448,40227],[228,134],[180,-34],[109,-133],[2,-49]],[[45357,58612],[-115,460],[-138,210],[122,112],[134,415],[66,304]],[[45426,60113],[96,189],[138,-51],[135,129],[155,6],[133,-173],[184,-157],[168,-435],[184,-405]],[[46619,59216],[13,-368],[54,-338],[104,-166],[24,-229],[-13,-184]],[[46801,57931],[-40,-33],[-151,47],[-21,-66],[-61,-13],[-200,144],[-134,6]],[[46194,58016],[-513,25],[-75,-67],[-92,19],[-147,-96]],[[45367,57897],[-46,453]],[[45321,58350],[253,-13],[67,83],[50,5],[103,136],[119,-124],[121,-11],[120,133],[-56,170],[-92,-99],[-86,3],[-110,145],[-88,-9],[-63,-140],[-302,-17]],[[46619,59216],[93,107],[47,348],[88,14],[194,-165],[157,117],[107,-39],[42,131],[1114,9],[62,414],[-48,73],[-134,2550],[-134,2550],[425,10]],[[48632,65335],[937,-1289],[937,-1289],[66,-277],[173,-169],[129,-96],[3,-376],[308,58]],[[51185,61897],[1,-1361],[-152,-394],[-24,-364],[-247,-94],[-379,-51],[-102,-210],[-178,-23]],[[50104,59400],[-178,-3],[-70,114],[-153,-84],[-259,-246],[-53,-184],[-216,-265],[-38,-152],[-116,-120],[-134,79],[-76,-144],[-41,-405],[-221,-490],[7,-200],[-76,-250],[18,-343]],[[48498,56707],[-114,-88],[-65,-74],[-43,253],[-80,-67],[-48,11],[-51,-172],[-215,5],[-77,89],[-36,-54]],[[47769,56610],[-85,170],[15,176],[-35,69],[-59,-58],[11,192],[57,152],[-114,248],[-33,163],[-62,130],[-55,15],[-67,-83],[-90,-79],[-76,-128],[-119,48],[-77,150],[-46,19],[-73,-78],[-44,-1],[-16,216]],[[47587,66766],[1045,-1431]],[[45426,60113],[-24,318],[78,291],[34,557],[-30,583],[-34,294],[28,295],[-72,281],[-146,255]],[[50747,54278],[-229,-69]],[[50518,54209],[-69,407],[13,1357],[-56,122],[-11,290],[-96,207],[-85,174],[35,311]],[[50249,57077],[96,67],[56,258],[136,56],[61,176]],[[50598,57634],[93,173],[100,2],[212,-340]],[[51003,57469],[-11,-197],[62,-350],[-54,-238],[29,-159],[-135,-366],[-86,-181],[-52,-372],[7,-376],[-16,-952]],[[54026,58177],[-78,-34],[-9,-188]],[[53939,57955],[-52,-13],[-188,647],[-65,24],[-217,-331],[-215,173],[-150,34],[-80,-83],[-163,18],[-164,-252],[-141,-14],[-337,305],[-131,-145],[-142,10],[-104,223],[-279,221],[-298,-70],[-72,-128],[-39,-340],[-80,-238],[-19,-527]],[[50598,57634],[6,405],[-320,134],[-9,286],[-156,386],[-37,269],[22,286]],[[51185,61897],[392,263],[804,1161],[952,1126]],[[53333,64447],[439,-255],[156,-324],[197,220]],[[53939,57955],[110,-235],[-31,-107],[-14,-196],[-234,-457],[-74,-377],[-39,-307],[-59,-132],[-56,-414],[-148,-243],[-43,-299],[-63,-238],[-26,-246],[-191,-199],[-156,243],[-105,-10],[-165,-345],[-81,-6],[-132,-570],[-71,-418]],[[52361,53399],[-289,-213],[-105,31],[-107,-132],[-222,13],[-149,370],[-91,427],[-197,389],[-209,-7],[-245,1]],[[54244,54965],[-140,-599],[-67,-107],[-21,-458],[28,-249],[-23,-176],[132,-309],[23,-212],[103,-305],[127,-190],[12,-269],[29,-172]],[[54447,51919],[-20,-319],[-220,140],[-225,156],[-350,23]],[[53632,51919],[-35,32],[-164,-76],[-169,79],[-132,-38]],[[53132,51916],[-452,13]],[[52680,51929],[40,466],[-108,391],[-127,100],[-56,265],[-72,85],[4,163]],[[50518,54209],[-224,-126]],[[50294,54083],[-62,207],[-74,375],[-22,294],[61,532],[-69,215],[-27,466],[1,429],[-116,305],[20,184]],[[50006,57090],[243,-13]],[[50294,54083],[-436,-346],[-154,-203],[-250,-171],[-248,168]],[[49206,53531],[13,233],[-121,509],[73,667],[117,496],[-74,841]],[[49214,56277],[-38,444],[7,336],[482,27],[123,-43],[90,96],[128,-47]],[[48498,56707],[125,-129],[49,-195],[125,-125],[97,149],[130,22],[190,-152]],[[49206,53531],[-126,-7],[-194,116],[-178,-7],[-329,-103],[-193,-170],[-275,-217],[-54,15]],[[47857,53158],[22,487],[26,74],[-8,233],[-118,247],[-88,40],[-81,162],[60,262],[-28,286],[13,172]],[[47655,55121],[44,0],[17,258],[-22,114],[27,82],[103,71],[-69,473],[-64,245],[23,200],[55,46]],[[47655,55121],[-78,15],[-57,-238],[-78,3],[-55,126],[19,237],[-116,362],[-73,-67],[-59,-13]],[[47158,55546],[-77,-34],[3,217],[-44,155],[9,171],[-60,249],[-78,211],[-222,1],[-65,-112],[-76,-13],[-48,-128],[-32,-163],[-148,-260]],[[46320,55840],[-122,349],[-108,232],[-71,76],[-69,118],[-32,261],[-41,130],[-80,97]],[[45797,57103],[123,288],[84,-11],[73,99],[61,1],[44,78],[-24,196],[31,62],[5,200]],[[45797,57103],[-149,247],[-117,39],[-63,166],[1,90],[-84,125],[-18,127]],[[47857,53158],[-73,-5],[-286,282],[-252,449],[-237,324],[-187,381]],[[46822,54589],[66,189],[15,172],[126,320],[129,276]],[[46822,54589],[-75,44],[-200,238],[-144,316],[-49,216],[-34,437]],[[55125,52650],[-178,33],[-188,99],[-166,-313],[-146,-550]],[[56824,55442],[152,-239],[2,-192],[187,-308],[116,-255],[70,-355],[208,-234],[44,-187]],[[53609,47755],[-104,203],[-84,-100],[-112,-255]],[[53309,47603],[-228,626]],[[53081,48229],[212,326],[-105,391],[95,148],[187,73],[23,261],[148,-283],[245,-25],[85,279],[36,393],[-31,461],[-131,350],[120,684],[-69,117],[-207,-48],[-78,305],[21,258]],[[53081,48229],[-285,596],[-184,488],[-169,610],[9,196],[61,189],[67,430],[56,438]],[[52636,51176],[94,35],[404,-6],[-2,711]],[[52636,51176],[-52,90],[96,663]],[[59099,45126],[131,-264],[71,-501],[-47,-160],[-56,-479],[53,-490],[-87,-205],[-85,-549],[147,-153]],[[59226,42325],[-843,-487],[26,-421]],[[56448,40227],[-181,369],[-188,483],[13,1880],[579,-7],[-24,203],[41,222],[-49,277],[32,286],[-29,184]],[[59599,43773],[-77,-449],[77,-768],[97,9],[100,-191],[116,-427],[24,-760],[-120,-124],[-85,-410],[-181,365],[-21,417],[59,274],[-16,237],[-110,149],[-77,-54],[-159,284]],[[61198,44484],[45,-265],[-11,-588],[34,-519],[11,-923],[49,-290],[-83,-422],[-108,-410],[-177,-366],[-254,-225],[-313,-287],[-313,-634],[-107,-108],[-194,-420],[-115,-136],[-23,-421],[132,-448],[54,-346],[4,-177],[49,29],[-8,-579],[-45,-275],[65,-101],[-41,-245],[-116,-211],[-229,-199],[-334,-320],[-122,-219],[24,-248],[71,-40],[-24,-311]],[[58908,34785],[-24,261],[-41,265]],[[53383,47159],[-74,444]],[[53259,40357],[-26,372],[38,519],[96,541],[15,254],[90,532],[66,243],[159,386],[90,263],[29,438],[-15,335],[-83,211],[-74,358],[-68,355],[15,122],[85,235],[-84,570],[-57,396],[-139,374],[26,115]],[[58062,48902],[169,-46],[85,336],[147,-38]],[[59922,69905],[-49,-186]],[[59873,69719],[-100,82],[-58,-394],[69,-66],[-71,-81],[-12,-156],[131,80]],[[59832,69184],[7,-230],[-139,-944]],[[59700,68010],[-27,153],[-155,862]],[[59518,69025],[80,194],[-19,34],[74,276],[56,446],[40,149],[8,6]],[[59757,70130],[93,-1],[25,104],[75,8]],[[59950,70241],[4,-242],[-38,-90],[6,-4]],[[59757,70130],[99,482],[138,416],[5,21]],[[59999,71049],[125,-31],[45,-231],[-151,-223],[-68,-323]],[[63761,43212],[74,-251],[69,-390],[45,-711],[72,-276],[-28,-284],[-49,-174],[-94,347],[-53,-175],[53,-438],[-24,-250],[-77,-137],[-18,-500],[-109,-689],[-137,-814],[-172,-1120],[-106,-821],[-125,-685],[-226,-140],[-243,-250],[-160,151],[-220,211],[-77,312],[-18,524],[-98,471],[-26,425],[50,426],[128,102],[1,197],[133,447],[25,377],[-65,280],[-52,372],[-23,544],[97,331],[38,375],[138,22],[155,121],[103,107],[122,7],[158,337],[229,364],[83,297],[-38,253],[118,-71],[153,410],[6,356],[92,264],[96,-254]],[[59873,69719],[0,-362],[-41,-173]],[[45321,58350],[36,262]],[[52633,68486],[-118,1061],[-171,238],[-3,143],[-227,352],[-24,445],[171,330],[65,487],[-44,563],[57,303]],[[52339,72408],[302,239],[195,-71],[-9,-299],[236,217],[20,-113],[-139,-290],[-2,-273],[96,-147],[-36,-511],[-183,-297],[53,-322],[143,-10],[70,-281],[106,-92]],[[53191,70158],[-16,-454],[-135,-170],[-86,-189],[-191,-228],[30,-244],[-24,-250],[-136,-137]],[[47592,66920],[-2,700],[449,436],[277,90],[227,159],[107,295],[324,234],[12,438],[161,51],[126,219],[363,99],[51,230],[-73,125],[-96,624],[-17,359],[-104,379]],[[49397,71358],[267,323],[300,102],[175,244],[268,180],[471,105],[459,48],[140,-87],[262,232],[297,5],[113,-137],[190,35]],[[52633,68486],[90,-522],[15,-274],[-49,-482],[21,-270],[-36,-323],[24,-371],[-110,-247],[164,-431],[11,-253],[99,-330],[130,109],[219,-275],[122,-370]],[[59922,69905],[309,-234],[544,630]],[[60775,70301],[112,-720]],[[60887,69581],[-53,-89],[-556,-296],[277,-591],[-92,-101],[-46,-197],[-212,-82],[-66,-213],[-120,-182],[-310,94]],[[59709,67924],[-9,86]],[[64327,64904],[49,29],[11,-162],[217,93],[230,-15],[168,-18],[190,400],[207,379],[176,364]],[[65575,65974],[52,-202]],[[65627,65772],[38,-466]],[[65665,65306],[-142,-3],[-23,-384],[50,-82],[-126,-117],[-1,-241],[-81,-245],[-7,-238]],[[65335,63996],[-56,-125],[-835,298],[-106,599],[-11,136]],[[64113,65205],[-18,430],[75,310],[76,64],[84,-185],[5,-346],[-61,-348]],[[64274,65130],[-77,-42],[-84,117]],[[63326,68290],[58,-261],[-25,-135],[89,-445]],[[63448,67449],[-196,-16],[-69,282],[-248,57]],[[62935,67772],[204,567],[187,-49]],[[60775,70301],[615,614],[105,715],[-26,431],[152,146],[142,369]],[[61763,72576],[119,92],[324,-77],[97,-150],[133,100]],[[62436,72541],[180,-705],[182,-177],[21,-345],[-139,-204],[-65,-461],[193,-562],[340,-324],[143,-449],[-46,-428],[89,0],[3,-314],[153,-311]],[[63490,68261],[-164,29]],[[62935,67772],[-516,47],[-784,1188],[-413,414],[-335,160]],[[65665,65306],[125,-404],[155,-214],[203,-78],[165,-107],[125,-339],[75,-196],[100,-75],[-1,-132],[-101,-352],[-44,-166],[-117,-189],[-104,-404],[-126,31],[-58,-141],[-44,-300],[34,-395],[-26,-72],[-128,2],[-174,-221],[-27,-288],[-63,-125],[-173,5],[-109,-149],[1,-238],[-134,-165],[-153,56],[-186,-199],[-128,-34]],[[64752,60417],[-91,413],[-217,975]],[[64444,61805],[833,591],[185,1182],[-127,418]],[[65575,65974],[80,201],[35,-51],[-26,-244],[-37,-108]],[[96448,41190],[175,-339],[-92,-78],[-93,259],[10,158]],[[96330,41322],[-39,163],[-6,453],[133,-182],[45,-476],[-75,74],[-58,-32]],[[78495,57780],[-66,713],[178,492],[359,112],[261,-84]],[[79227,59013],[229,-232],[126,407],[246,-217]],[[79828,58971],[64,-394],[-34,-708],[-467,-455],[122,-358],[-292,-43],[-240,-238]],[[78981,56775],[-233,87],[-112,307],[-141,611]],[[78495,57780],[-249,271],[-238,-11],[41,464],[-245,-3],[-22,-650],[-150,-863],[-90,-522],[19,-428],[181,-18],[113,-539],[50,-512],[155,-338],[168,-69],[144,-306]],[[78372,54256],[-91,-243],[-183,-71],[-22,304],[-227,258],[-48,-105]],[[77801,54399],[-110,227],[-47,292],[-148,334],[-135,280],[-45,-347],[-53,328],[30,369],[82,566]],[[77375,56448],[135,607],[152,551],[-108,539],[4,274],[-32,330],[-185,470],[-66,296],[96,109],[101,514],[-113,390],[-177,431],[-134,519],[117,107],[127,639],[196,26],[162,256],[159,137]],[[77809,62643],[120,-182],[16,-355],[188,-27],[-68,-623],[6,-530],[293,353],[83,-104],[163,17],[56,205],[210,-40],[211,-480],[18,-583],[224,-515],[-12,-500],[-90,-266]],[[77809,62643],[59,218],[237,384]],[[78105,63245],[25,-139],[148,-16],[-42,676],[144,86]],[[78380,63852],[162,-466],[125,-537],[342,-5],[108,-515],[-178,-155],[-80,-212],[333,-353],[231,-699],[175,-520],[210,-411],[70,-418],[-50,-590]],[[77375,56448],[-27,439],[86,452],[-94,350],[23,644],[-113,306],[-90,707],[-50,746],[-121,490],[-183,-297],[-315,-421],[-156,53],[-172,138],[96,732],[-58,554],[-218,681],[34,213],[-163,76],[-197,481]],[[75657,62792],[-18,476],[97,-90],[6,424]],[[75742,63602],[137,140],[-30,251],[63,201],[11,612],[217,-135],[124,487],[14,288],[153,496],[-8,338],[359,408],[199,-107],[-23,364],[97,108],[-20,224]],[[77035,67277],[162,44],[93,-348],[121,-141],[8,-452],[-11,-487],[-263,-493],[-33,-701],[293,98],[66,-544],[176,-115],[-81,-490],[206,-222],[121,-109],[203,172],[9,-244]],[[78380,63852],[149,145],[221,-3],[271,68],[236,315],[134,-222],[254,-108],[-44,-340],[132,-240],[280,-154]],[[80013,63313],[-371,-505],[-231,-558],[-61,-410],[212,-623],[260,-772],[252,-365],[169,-475],[127,-1093],[-37,-1039],[-232,-389],[-318,-381],[-227,-492],[-346,-550],[-101,378],[78,401],[-206,335]],[[86327,75524],[0,0]],[[86327,75524],[-106,36],[-120,-200],[-83,-202],[10,-424],[-143,-130],[-50,-105],[-104,-174],[-185,-97],[-121,-159],[-9,-256],[-32,-65],[111,-96],[157,-259]],[[85652,73393],[-40,-143],[-118,-39],[-197,-29],[-108,-266],[-124,21],[-17,-54]],[[85048,72883],[-135,112],[-34,-111],[-81,-49],[-10,112],[-72,54],[-75,94],[76,260],[66,69],[-25,108],[71,319],[-18,96],[-163,65],[-131,158]],[[84517,74170],[227,379],[306,318],[191,419],[131,-185],[241,-22],[-44,312],[429,254],[111,331],[179,-348]],[[85652,73393],[240,-697],[68,-383],[3,-681],[-105,-325],[-252,-113],[-222,-245],[-250,-51],[-31,322],[51,443],[-122,615],[206,99],[-190,506]],[[82410,80055],[-135,-446],[-197,-590],[72,-241],[157,74],[274,-92],[214,219],[223,-189],[251,-413],[-30,-210],[-219,66],[-404,-78],[-195,-168],[-204,-391],[-423,-229],[-277,-313],[-286,120],[-156,53],[-146,-381],[89,-227],[45,-195],[-194,-199],[-200,-316],[-324,-208],[-417,-22],[-448,-205],[-324,-318],[-123,184],[-336,-1],[-411,359],[-274,88],[-369,-82],[-574,133],[-306,-14],[-163,351],[-127,544],[-171,66],[-336,368],[-374,83],[-330,101],[-100,256],[107,690],[-192,476],[-396,222],[-233,313],[-73,413]],[[75742,63602],[-147,937],[-76,-2],[-46,-377],[-152,306],[86,336],[124,34],[128,500],[-160,101],[-257,-8],[-265,81],[-24,410],[-133,30],[-220,255],[-98,-401],[200,-313],[-173,-220],[-62,-215],[171,-159],[-47,-356],[96,-444],[43,-486]],[[74730,63611],[-39,-216],[-189,7],[-343,-122],[16,-445],[-148,-349],[-400,-398],[-311,-695],[-209,-373],[-276,-387],[-1,-271],[-138,-146],[-251,-212],[-129,-31],[-84,-450],[58,-769],[15,-490],[-118,-561],[-1,-1004],[-144,-29],[-126,-450],[84,-195],[-253,-168],[-93,-401],[-112,-170],[-263,552],[-128,827],[-107,596],[-97,279],[-148,568],[-69,739],[-48,369],[-253,811],[-115,1145],[-83,756],[1,716],[-54,553],[-404,-353],[-196,70],[-362,716],[133,214],[-82,232],[-326,501]],[[68937,64577],[185,395],[612,-2],[-56,507],[-156,300],[-31,455],[-182,265],[306,619],[323,-45],[290,620],[174,599],[270,593],[-4,421],[236,342],[-224,292],[-96,400],[-99,517],[137,255],[421,-144],[310,88],[268,496]],[[71621,71550],[298,-692],[-28,-482],[111,-303],[-9,-301],[-200,79],[78,-651],[273,-374],[386,-413]],[[72530,68413],[-176,-268],[-108,-553],[269,-224],[262,-289],[362,-332],[381,-76],[160,-301],[215,-56],[334,-138],[231,10],[32,234],[-36,375],[21,255]],[[74477,67050],[170,124],[23,-465]],[[74670,66709],[6,-119],[252,-224],[175,92],[234,-39],[227,17],[20,363],[-113,189]],[[75471,66988],[224,74],[252,439],[321,376],[233,-145],[198,249],[130,-367],[-94,-248],[300,-89]],[[75657,62792],[-79,308],[-16,301],[-53,285],[-116,344],[-256,23],[25,-243],[-87,-329],[-118,120],[-41,-108],[-78,65],[-108,53]],[[74670,66709],[184,439],[150,150],[198,-137],[147,-14],[122,-159]],[[72530,68413],[115,141],[223,-182],[280,-385],[157,-84],[93,-284],[216,-117],[225,-259],[314,-136],[324,-57]],[[68937,64577],[-203,150],[-83,424],[-215,450],[-512,-111],[-451,-11],[-391,-83]],[[67082,65396],[105,687],[400,305],[-23,272],[-133,96],[-7,520],[-266,260],[-112,357],[-137,310]],[[66909,68203],[465,-301],[278,88],[166,-75],[56,129],[194,-52],[361,246],[10,503],[154,334],[207,-1],[31,166],[212,77],[103,-55],[108,166],[-15,355],[118,356],[177,150],[-110,390],[265,-18],[76,213],[-12,227],[139,248],[-32,294],[-66,250],[163,258],[298,124],[319,68],[141,109],[162,67]],[[70877,72519],[205,-276],[82,-454],[457,-239]],[[68841,72526],[85,-72],[201,189],[93,-114],[90,271],[166,-12],[43,86],[29,239],[120,205],[150,-134],[-30,-181],[84,-28],[-26,-496],[110,-194],[97,125],[123,58],[173,265],[192,-44],[286,-1]],[[70827,72688],[50,-169]],[[66909,68203],[252,536],[-23,380],[-210,100],[-22,375],[-91,472],[119,323],[-121,87],[76,430],[113,736]],[[67002,71642],[284,-224],[209,79],[58,268],[219,89],[157,180],[55,472],[234,114],[44,211],[131,-158],[84,-19]],[[69725,74357],[-101,-182],[-303,98],[-26,-340],[301,46],[343,-192],[526,89]],[[70465,73876],[70,-546],[91,59],[169,-134],[-10,-230],[42,-337]],[[72294,75601],[-39,-134],[-438,-320],[-99,-234],[-356,-70],[-105,-378],[-294,80],[-192,-116],[-266,-279],[39,-138],[-79,-136]],[[67002,71642],[-24,498],[-207,21],[-318,523],[-221,65],[-308,299],[-197,55],[-122,-110],[-186,17],[-197,-338],[-244,-114]],[[64978,72558],[-52,417],[40,618],[-216,200],[71,405],[-184,34],[61,498],[262,-145],[244,189],[-202,355],[-80,338],[-224,-151],[-28,-433],[-87,383]],[[62436,72541],[-152,473],[55,183],[-87,678],[190,168]],[[62442,74043],[44,-223],[141,-273],[190,-78]],[[62817,73469],[101,17]],[[62918,73486],[327,436],[104,44],[82,-174],[-95,-292],[173,-309],[69,29]],[[63578,73220],[88,-436],[263,-123],[193,-296],[395,-102],[434,156],[27,139]],[[67082,65396],[-523,179],[-303,136],[-313,76],[-118,725],[-133,105],[-214,-106],[-280,-286],[-339,196],[-281,454],[-267,168],[-186,561],[-205,788],[-149,-96],[-177,196],[-104,-231]],[[59999,71049],[-26,452],[68,243]],[[60041,71744],[74,129],[75,130],[15,329],[91,-115],[306,165],[147,-112],[229,2],[320,222],[149,-10],[316,92]],[[62817,73469],[-113,342],[1,91],[-123,-2],[-82,159],[-58,-16]],[[62442,74043],[-109,172],[-207,147],[27,288],[-47,208]],[[62106,74858],[386,92]],[[62492,74950],[57,-155],[106,-103],[-56,-148],[148,-202],[-78,-189],[118,-160],[124,-97],[7,-410]],[[55734,91409],[371,-289],[433,-402],[8,-910],[93,-230]],[[56639,89578],[-478,-167],[-269,-413],[43,-361],[-441,-475],[-537,-509],[-202,-832],[198,-416],[265,-328],[-255,-666],[-289,-138],[-106,-992],[-157,-554],[-337,57],[-158,-468],[-321,-27],[-89,558],[-232,671],[-211,835]],[[58829,81362],[-239,-35],[-85,-129],[-18,-298],[-111,57],[-250,-28],[-73,138],[-104,-103],[-105,86],[-218,12],[-310,141],[-281,47],[-215,-14],[-152,-160],[-133,-23]],[[56535,81053],[-6,263],[-85,274],[166,121],[2,235],[-77,225],[-12,261]],[[56523,82432],[268,-4],[302,223],[64,333],[228,190],[-26,264]],[[57359,83438],[169,100],[298,228]],[[60617,78409],[-222,-48],[-185,-191],[-260,-31],[-239,-220],[14,-317]],[[59287,77741],[-38,64],[-432,149],[-19,221],[-257,-73],[-103,-325],[-215,-437]],[[58223,77340],[-126,101],[-131,-95],[-124,109]],[[57842,77455],[70,64],[49,203],[76,188],[-20,106],[58,47],[27,-81],[164,-18],[74,44],[-52,60],[19,88],[-97,150],[-40,247],[-101,97],[20,200],[-125,159],[-115,22],[-204,184],[-185,-58],[-66,-87]],[[57394,79070],[-118,0],[-69,-139],[-205,-56],[-95,-91],[-129,144],[-178,3],[-172,65],[-120,-127]],[[56308,78869],[-19,159],[-155,161]],[[56134,79189],[55,238],[77,154]],[[56266,79581],[60,-35],[-71,266],[252,491],[138,69],[29,166],[-139,515]],[[56266,79581],[-264,227],[-200,-84],[-131,61],[-165,-127],[-140,210],[-114,-81],[-16,36]],[[55236,79823],[-127,291],[-207,36],[-26,185],[-191,66],[-41,-153],[-151,122],[17,163],[-207,51],[-132,191]],[[54171,80775],[-114,377],[22,204],[-69,316],[-101,210],[77,158],[-64,300]],[[53922,82340],[189,174],[434,273],[350,200],[277,-100],[21,-144],[268,-7]],[[56314,82678],[142,-64],[67,-182]],[[54716,79012],[-21,-241],[-156,-2],[53,-128],[-92,-380]],[[54500,78261],[-53,-100],[-243,-14],[-140,-134],[-229,45]],[[53835,78058],[-398,153],[-62,205],[-274,-102],[-32,-113],[-169,84]],[[52900,78285],[-142,16],[-125,108],[42,145],[-10,104]],[[52665,78658],[83,33],[141,-164],[39,156],[245,-25],[199,106],[133,-18],[87,-121],[26,100],[-40,385],[100,75],[98,272]],[[53776,79457],[206,-190],[157,242],[98,44],[215,-180],[131,30],[128,-111]],[[54711,79292],[-23,-75],[28,-205]],[[56308,78869],[-170,-123],[-131,-401],[-168,-401],[-223,-111]],[[55616,77833],[-173,26],[-213,-155]],[[55230,77704],[-104,-89],[-229,114],[-208,253],[-88,73]],[[54601,78055],[-54,200],[-47,6]],[[54716,79012],[141,-151],[103,-65],[233,73],[22,118],[111,18],[135,92],[30,-38],[130,74],[66,139],[91,36],[297,-180],[59,61]],[[57842,77455],[-50,270],[30,252],[-9,259],[-160,352],[-89,249],[-86,175],[-84,58]],[[58223,77340],[6,-152],[-135,-128],[-84,56],[-78,-713]],[[57932,76403],[-163,62],[-202,215],[-327,-138],[-138,-150],[-408,31],[-213,92],[-108,-43],[-80,243]],[[56293,76715],[-51,103],[65,99],[-69,74],[-87,-133],[-162,172],[-22,244],[-169,139],[-31,188],[-151,232]],[[55907,83187],[-59,497]],[[55848,83684],[318,181],[466,-38],[273,59],[39,-123],[148,-38],[267,-287]],[[55848,83684],[10,445],[136,371],[262,202],[221,-442],[223,12],[53,453]],[[56753,84725],[237,105],[121,-73],[239,-219],[229,-1]],[[56753,84725],[32,349],[-102,-75],[-176,210],[-24,340],[351,164],[350,86],[301,-97],[287,17]],[[54171,80775],[-124,-62],[-73,68],[-70,-113],[-200,-114],[-103,-147],[-202,-129],[49,-176],[30,-249],[141,-142],[157,-254]],[[52665,78658],[-298,181],[-57,-128],[-236,4]],[[51718,79804],[16,259],[-56,133]],[[51678,80196],[32,400]],[[51710,80596],[-47,619],[167,0],[70,222],[69,541],[-51,200]],[[51918,82178],[54,125],[232,32],[52,-130],[188,291],[-63,222],[-13,335]],[[52368,83053],[210,-78],[178,90]],[[52756,83065],[4,-228],[281,-138],[-3,-210],[283,111],[156,162],[313,-233],[132,-189]],[[57932,76403],[-144,-245],[-101,-422],[89,-337]],[[57776,75399],[-239,79],[-283,-186]],[[57254,75292],[-3,-294],[-252,-56],[-196,206],[-222,-162],[-206,17]],[[56375,75003],[-20,391],[-139,189]],[[56216,75583],[46,84],[-30,70],[47,188],[105,185],[-135,255],[-24,216],[68,134]],[[57302,71436],[-35,-175],[-400,-50],[3,98],[-339,115],[52,251],[152,-199],[216,34],[207,-42],[-7,-103],[151,71]],[[57254,75292],[135,-157],[-86,-369],[-66,-67]],[[57237,74699],[-169,17],[-145,56],[-336,-154],[192,-332],[-141,-96],[-154,-1],[-147,305],[-52,-130],[62,-353],[139,-277],[-105,-129],[155,-273],[137,-171],[4,-334],[-257,157],[82,-302],[-176,-62],[105,-521],[-184,-8],[-228,257],[-104,473],[-49,393],[-108,272],[-143,337],[-18,168]],[[55597,73991],[129,287],[16,192],[91,85],[5,155]],[[55838,74710],[182,53],[106,129],[150,-12],[46,103],[53,20]],[[60041,71744],[-102,268],[105,222],[-169,-51],[-233,136],[-191,-340],[-421,-66],[-225,317],[-300,20],[-64,-245],[-192,-70],[-268,314],[-303,-11],[-165,588],[-203,328],[135,459],[-176,283],[308,565],[428,23],[117,449],[529,-78],[334,383],[324,167],[459,13],[485,-417],[399,-228],[323,91],[239,-53],[328,309]],[[61542,75120],[296,28],[268,-290]],[[57776,75399],[33,-228],[243,-190],[-51,-145],[-330,-33],[-118,-182],[-232,-319],[-87,276],[3,121]],[[55597,73991],[-48,41],[-5,130],[-154,199],[-24,281],[23,403],[38,184],[-47,93]],[[55380,75322],[-18,188],[120,291],[18,-111],[75,52]],[[55575,75742],[59,-159],[66,-60],[19,-214]],[[55719,75309],[-35,-201],[39,-254],[115,-144]],[[55230,77704],[67,-229],[89,-169],[-107,-222]],[[55279,77084],[-126,131],[-192,-8],[-239,98],[-130,-13],[-60,-123],[-99,136],[-59,-245],[136,-277],[61,-183],[127,-221],[106,-130],[105,-247],[246,-224]],[[55155,75778],[-31,-100]],[[55124,75678],[-261,218],[-161,213],[-254,176],[-233,434],[56,45],[-127,248],[-5,200],[-179,93],[-85,-255],[-82,198],[6,205],[10,9]],[[53809,77462],[194,-20],[51,100],[94,-97],[109,-11],[-1,165],[97,60],[27,239],[221,157]],[[52900,78285],[-22,-242],[-122,-100],[-206,75],[-60,-239],[-132,-19],[-48,94],[-156,-200],[-134,-28],[-120,126]],[[51576,79843],[30,331],[72,22]],[[50698,80799],[222,117]],[[50920,80916],[204,-47],[257,123],[176,-258],[153,-138]],[[50920,80916],[143,162],[244,869],[380,248],[231,-17]],[[47490,75324],[101,150],[113,86],[70,-289],[164,0],[47,75],[162,-21],[78,-296],[-129,-160],[-3,-461],[-45,-86],[-11,-280],[-120,-48],[111,-355],[-77,-388],[96,-175],[-38,-161],[-103,-222],[23,-195]],[[47929,72498],[-112,-153],[-146,83],[-143,-65],[42,462],[-26,363],[-124,55],[-67,224],[22,386],[111,215],[20,239],[58,355],[-6,250],[-56,212],[-12,200]],[[47490,75324],[14,420],[-114,257],[393,426],[340,-106],[373,3],[296,-101],[230,31],[449,-19]],[[50829,75674],[15,-344],[-263,-393],[-356,-125],[-25,-199],[-171,-327],[-107,-481],[108,-338],[-160,-263],[-60,-384],[-210,-118],[-197,-454],[-352,-9],[-265,11],[-174,-209],[-106,-223],[-136,49],[-103,199],[-79,340],[-259,92]],[[48278,82406],[46,-422],[-210,-528],[-493,-349],[-393,89],[225,617],[-145,601],[378,463],[210,276]],[[47896,83153],[57,-317],[-57,-317],[172,9],[210,-122]],[[96049,38125],[228,-366],[144,-272],[-105,-142],[-153,160],[-199,266],[-179,313],[-184,416],[-38,201],[119,-9],[156,-201],[122,-200],[89,-166]],[[95032,44386],[78,-203],[-194,4],[-106,363],[166,-142],[56,-22]],[[94910,44908],[-42,-109],[-206,512],[-57,353],[94,0],[100,-473],[111,-283]],[[94680,44747],[-108,-14],[-170,60],[-58,91],[17,235],[183,-93],[91,-124],[45,-155]],[[94344,45841],[65,-187],[12,-119],[-218,251],[-152,212],[-104,197],[41,60],[128,-142],[228,-272]],[[93649,46431],[111,-193],[-56,-33],[-121,134],[-114,243],[14,99],[166,-250]],[[99134,26908],[-105,-319],[-138,-404],[-214,-236],[-48,155],[-116,85],[160,486],[-91,326],[-299,236],[8,214],[201,206],[47,455],[-13,382],[-113,396],[8,104],[-133,244],[-218,523],[-117,418],[104,46],[151,-328],[216,-153],[78,-526],[202,-622],[5,403],[126,-161],[41,-447],[224,-192],[188,-48],[158,226],[141,-69],[-67,-524],[-85,-345],[-212,12],[-74,-179],[26,-254],[-41,-110]],[[97129,24846],[238,310],[167,306],[123,441],[106,149],[41,330],[195,273],[61,-251],[63,-244],[198,239],[80,-249],[0,-249],[-103,-274],[-182,-435],[-142,-238],[103,-284],[-214,-7],[-238,-223],[-75,-387],[-157,-597],[-219,-264],[-138,-169],[-256,13],[-180,194],[-302,42],[-46,217],[149,438],[349,583],[179,111],[200,225]],[[91024,26469],[166,-39],[20,-702],[-95,-203],[-29,-476],[-97,162],[-193,-412],[-57,32],[-171,19],[-171,505],[-38,390],[-160,515],[7,271],[181,-52],[269,-204],[151,81],[217,113]],[[85040,31546],[-294,-303],[-241,-137],[-53,-309],[-103,-240],[-236,-15],[-174,-52],[-246,107],[-199,-64],[-191,-27],[-165,-315],[-81,26],[-140,-167],[-133,-187],[-203,23],[-186,0],[-295,377],[-149,113],[6,338],[138,81],[47,134],[-10,212],[34,411],[-31,350],[-147,598],[-45,337],[12,336],[-111,385],[-7,174],[-123,235],[-35,463],[-158,467],[-39,252],[122,-255],[-93,548],[137,-171],[83,-229],[-5,303],[-138,465],[-26,186],[-65,177],[31,341],[56,146],[38,295],[-29,346],[114,425],[21,-450],[118,406],[225,198],[136,252],[212,217],[126,46],[77,-73],[219,220],[168,66],[42,129],[74,54],[153,-14],[292,173],[151,262],[71,316],[163,300],[13,236],[7,321],[194,502],[117,-510],[119,118],[-99,279],[87,287],[122,-128],[34,449],[152,291],[67,233],[140,101],[4,165],[122,-69],[5,148],[122,85],[134,80],[205,-271],[155,-350],[173,-4],[177,-56],[-59,325],[133,473],[126,155],[-44,147],[121,338],[168,208],[142,-70],[234,111],[-5,302],[-204,195],[148,86],[184,-147],[148,-242],[234,-151],[79,60],[172,-182],[162,169],[105,-51],[65,113],[127,-292],[-74,-316],[-105,-239],[-96,-20],[32,-236],[-81,-295],[-99,-291],[20,-166],[221,-327],[214,-189],[143,-204],[201,-350],[78,1],[145,-151],[43,-183],[265,-200],[183,202],[55,317],[56,262],[34,324],[85,470],[-39,286],[20,171],[-32,339],[37,445],[53,120],[-43,197],[67,313],[52,325],[7,168],[104,222],[78,-289],[19,-371],[70,-71],[11,-249],[101,-300],[21,-335],[-10,-214],[100,-464],[179,223],[92,-250],[133,-231],[-29,-262],[60,-506],[42,-295],[70,-72],[75,-505],[-27,-307],[90,-400],[301,-309],[197,-281],[186,-257],[-37,-143],[159,-371],[108,-639],[111,130],[113,-256],[68,91],[48,-626],[197,-363],[129,-226],[217,-478],[78,-475],[7,-337],[-19,-365],[132,-502],[-16,-523],[-48,-274],[-75,-527],[6,-339],[-55,-423],[-123,-538],[-205,-290],[-102,-458],[-93,-292],[-82,-510],[-107,-294],[-70,-442],[-36,-407],[14,-187],[-159,-205],[-311,-22],[-257,-242],[-127,-229],[-168,-254],[-230,262],[-170,104],[43,308],[-152,-112],[-243,-428],[-240,160],[-158,94],[-159,42],[-269,171],[-179,364],[-52,449],[-64,298],[-137,240],[-267,71],[91,287],[-67,438],[-136,-408],[-247,-109],[146,327],[42,341],[107,289],[-22,438],[-226,-504],[-174,-202],[-106,-470],[-217,243],[9,313],[-174,429],[-147,221],[52,137],[-356,358],[-195,17],[-267,287],[-498,-56],[-359,-211],[-317,-197],[-265,39]],[[72718,55024],[-42,-615],[-116,-168],[-242,-135],[-132,470],[-49,849],[126,959],[192,-328],[129,-416],[134,-616]],[[80409,61331],[-228,183],[-8,509],[137,267],[304,166],[159,-14],[62,-226],[-122,-260],[-64,-341],[-240,-284]],[[84517,74170],[-388,-171],[-204,-277],[-300,-161],[148,274],[-58,230],[220,397],[-147,310],[-242,-209],[-314,-411],[-171,-381],[-272,-29],[-142,-275],[147,-400],[227,-97],[9,-265],[220,-173],[311,422],[247,-230],[179,-15],[45,-310],[-393,-165],[-130,-319],[-270,-296],[-142,-414],[299,-325],[109,-581],[169,-541],[189,-454],[-5,-439],[-174,-161],[66,-315],[164,-184],[-43,-481],[-71,-468],[-155,-53],[-203,-640],[-225,-775],[-258,-705],[-382,-545],[-386,-498],[-313,-68],[-170,-262],[-96,192],[-157,-294],[-388,-296],[-294,-90],[-95,-624],[-154,-35],[-73,429],[66,228],[-373,189],[-131,-96]],[[83826,64992],[-167,-947],[-119,-485],[-146,499],[-32,438],[163,581],[223,447],[127,-176],[-49,-357]],[[53835,78058],[-31,-291],[67,-251]],[[53871,77516],[-221,86],[-226,-210],[15,-293],[-34,-168],[91,-301],[261,-298],[140,-488],[309,-476],[217,3],[68,-130],[-78,-118],[249,-214],[204,-178],[238,-308],[29,-111],[-52,-211],[-154,276],[-242,97],[-116,-382],[200,-219],[-33,-309],[-116,-35],[-148,-506],[-116,-46],[1,181],[57,317],[60,126],[-108,342],[-85,298],[-115,74],[-82,255],[-179,107],[-120,238],[-206,38],[-217,267],[-254,384],[-189,340],[-86,585],[-138,68],[-226,195],[-128,-80],[-161,-274],[-115,-43]],[[54100,73116],[211,51],[-100,-465],[41,-183],[-58,-303],[-213,222],[-141,64],[-387,300],[38,304],[325,-54],[284,64]],[[52419,74744],[139,183],[166,-419],[-39,-782],[-126,38],[-113,-197],[-105,156],[-11,713],[-64,338],[153,-30]],[[52368,83053],[-113,328],[-8,604],[46,159],[80,177],[244,37],[98,163],[223,167],[-9,-304],[-82,-192],[33,-166],[151,-89],[-68,-223],[-83,64],[-200,-425],[76,-288]],[[53436,83731],[88,-296],[-166,-478],[-291,333],[-39,246],[408,195]],[[47896,83153],[233,24],[298,-365],[-149,-406]],[[49140,82132],[1,0],[40,343],[-186,364],[-4,8],[-337,104],[-66,160],[101,264],[-92,163],[-149,-279],[-17,569],[-140,301],[101,611],[216,480],[222,-47],[335,49],[-297,-639],[283,81],[304,-3],[-72,-481],[-250,-530],[287,-38],[22,-62],[248,-697],[190,-95],[171,-673],[79,-233],[337,-113],[-34,-378],[-142,-173],[111,-305],[-250,-310],[-371,6],[-473,-163],[-130,116],[-183,-276],[-257,67],[-195,-226],[-148,118],[407,621],[249,127],[-2,1],[-434,98],[-79,235],[291,183],[-152,319],[52,387],[413,-54]],[[45969,89843],[-64,-382],[314,-403],[-361,-451],[-801,-405],[-240,-107],[-365,87],[-775,187],[273,261],[-605,289],[492,114],[-12,174],[-583,137],[188,385],[421,87],[433,-400],[422,321],[349,-167],[453,315],[461,-42]],[[63495,75281],[146,-311],[141,-419],[130,-28],[85,-159],[-228,-47],[-49,-459],[-48,-207],[-101,-138],[7,-293]],[[62492,74950],[68,96],[207,-169],[149,-36],[38,70],[-136,319],[72,82]],[[61542,75120],[42,252],[-70,403],[-160,218],[-154,68],[-102,181]],[[83564,58086],[-142,450],[238,-22],[97,-213],[-74,-510],[-119,295]],[[84051,56477],[70,165],[30,367],[153,35],[-44,-398],[205,570],[-26,-563],[-100,-195],[-87,-373],[-87,-175],[-171,409],[57,158]],[[85104,55551],[28,-392],[16,-332],[-94,-540],[-102,602],[-130,-300],[89,-435],[-79,-277],[-327,343],[-78,428],[84,280],[-176,280],[-87,-245],[-131,23],[-205,-330],[-46,173],[109,498],[175,166],[151,223],[98,-268],[212,162],[45,264],[196,15],[-16,457],[225,-280],[23,-297],[20,-218]],[[82917,56084],[-369,-561],[136,414],[200,364],[167,409],[146,587],[49,-482],[-183,-325],[-146,-406]],[[83982,61347],[-46,-245],[95,-423],[-73,-491],[-164,-196],[-43,-476],[62,-471],[147,-65],[123,70],[347,-328],[-27,-321],[91,-142],[-29,-272],[-216,290],[-103,310],[-71,-217],[-177,354],[-253,-87],[-138,130],[14,244],[87,151],[-83,136],[-36,-213],[-137,340],[-41,257],[-11,566],[112,-195],[29,925],[90,535],[169,-1],[171,-168],[85,153],[26,-150]],[[83899,57324],[-43,282],[166,-183],[177,1],[-5,-247],[-129,-251],[-176,-178],[-10,275],[20,301]],[[84861,57766],[78,-660],[-214,157],[5,-199],[68,-364],[-132,-133],[-11,416],[-84,31],[-43,357],[163,-47],[-4,224],[-169,451],[266,-13],[77,-220]],[[78372,54256],[64,-56],[164,-356],[116,-396],[16,-398],[-29,-269],[27,-203],[20,-349],[98,-163],[109,-523],[-5,-199],[-197,-40],[-263,438],[-329,469],[-32,301],[-161,395],[-38,489],[-100,322],[30,431],[-61,250]],[[80461,51765],[204,-202],[214,110],[56,500],[119,112],[333,128],[199,467],[137,374]],[[81723,53254],[126,-307],[58,202],[133,-19],[16,377],[13,291]],[[82069,53798],[214,411],[140,462],[112,2],[143,-299],[13,-257],[183,-165],[231,-177],[-20,-232],[-186,-29],[50,-289],[-205,-201]],[[81723,53254],[110,221],[236,323]],[[53809,77462],[62,54]],[[57797,86326],[-504,-47],[-489,-216],[-452,-125],[-161,323],[-269,193],[62,582],[-135,533],[133,345],[252,371],[635,640],[185,124],[-28,250],[-387,279]],[[54711,79292],[39,130],[123,-10],[95,61],[7,55],[54,28],[18,134],[64,26],[43,106],[82,1]],[[60669,61213],[161,-684],[77,-542],[152,-288],[379,-558],[154,-336],[151,-341],[87,-203],[136,-178]],[[61966,58083],[-83,-144],[-119,51]],[[61764,57990],[-95,191],[-114,346],[-124,190],[-71,204],[-242,237],[-191,7],[-67,124],[-163,-139],[-168,268],[-87,-441],[-323,124]],[[89411,73729],[-256,-595],[4,-610],[-104,-472],[48,-296],[-145,-416],[-355,-278],[-488,-36],[-396,-675],[-186,227],[-12,442],[-483,-130],[-329,-279],[-325,-11],[282,-435],[-186,-1004],[-179,-248],[-135,229],[69,533],[-176,172],[-113,405],[263,182],[145,371],[280,306],[203,403],[553,177],[297,-121],[291,1050],[185,-282],[408,591],[158,229],[174,723],[-47,664],[117,374],[295,108],[152,-819],[-9,-479]],[[90169,76553],[197,250],[62,-663],[-412,-162],[-244,-587],[-436,404],[-152,-646],[-308,-9],[-39,587],[138,455],[296,33],[81,817],[83,460],[326,-615],[213,-198],[195,-126]],[[86769,70351],[154,352],[158,-68],[114,248],[204,-127],[35,-203],[-156,-357],[-114,189],[-143,-137],[-73,-346],[-181,168],[2,281]],[[64752,60417],[-201,-158],[-54,-263],[-6,-201],[-277,-249],[-444,-276],[-249,-417],[-122,-33],[-83,35],[-163,-245],[-177,-114],[-233,-30],[-70,-34],[-61,-156],[-73,-43],[-43,-150],[-137,13],[-89,-80],[-192,30],[-72,345],[8,323],[-46,174],[-54,437],[-80,243],[56,29],[-29,270],[34,114],[-12,257]],[[61883,60238],[121,189],[-28,249],[74,290],[114,-153],[75,53],[321,14],[50,-59],[269,-60],[106,30],[70,-197],[130,99],[199,620],[259,266],[801,226]],[[63448,67449],[109,-510],[137,-135],[47,-207],[190,-249],[16,-243],[-27,-197],[35,-199],[80,-165],[37,-194],[41,-145]],[[64274,65130],[53,-226]],[[61883,60238],[-37,252],[-83,178],[-22,236],[-143,212],[-148,495],[-79,482],[-192,406],[-124,97],[-184,563],[-32,411],[12,350],[-159,655],[-130,231],[-150,122],[-92,339],[15,133],[-77,306],[-81,132],[-108,440],[-170,476],[-141,406],[-139,-3],[44,325],[12,206],[34,236]],[[36483,4468],[141,0],[414,127],[419,-127],[342,-255],[120,-359],[33,-254],[11,-301],[-430,-186],[-452,-150],[-522,-139],[-582,-116],[-658,35],[-365,197],[49,243],[593,162],[239,197],[174,254],[126,220],[168,209],[180,243]],[[31586,3163],[625,-23],[599,-58],[207,243],[147,208],[288,-243],[-82,-301],[-81,-266],[-582,81],[-621,-35],[-348,197],[0,23],[-152,174]],[[29468,8472],[190,70],[321,-23],[82,301],[16,219],[-6,475],[158,278],[256,93],[147,-220],[65,-220],[120,-267],[92,-254],[76,-267],[33,-266],[-49,-231],[-76,-220],[-326,-81],[-311,-116],[-364,11],[136,232],[-327,-81],[-310,-81],[-212,174],[-16,243],[305,231]],[[21575,8103],[174,104],[353,-81],[403,-46],[305,-81],[304,69],[163,-335],[-217,46],[-337,-23],[-343,23],[-376,-35],[-283,116],[-146,243]],[[15938,7061],[60,197],[332,-104],[359,-93],[332,104],[-158,-208],[-261,-151],[-386,47],[-278,208]],[[14643,7177],[202,127],[277,-139],[425,-231],[-164,23],[-359,58],[-381,162]],[[4524,4144],[169,220],[517,-93],[277,-185],[212,-209],[76,-266],[-533,-81],[-364,208],[-163,209],[-11,35],[-180,162]],[[0,529],[16,-5],[245,344],[501,-185],[32,21],[294,188],[38,-7],[32,-4],[402,-246],[352,246],[63,34],[816,104],[265,-138],[130,-71],[419,-196],[789,-151],[625,-185],[1072,-139],[800,162],[1181,-116],[669,-185],[734,174],[773,162],[60,278],[-1094,23],[-898,139],[-234,231],[-745,128],[49,266],[103,243],[104,220],[-55,243],[-462,162],[-212,209],[-430,185],[675,-35],[642,93],[402,-197],[495,173],[457,220],[223,197],[-98,243],[-359,162],[-408,174],[-571,35],[-500,81],[-539,58],[-180,220],[-359,185],[-217,208],[-87,672],[136,-58],[250,-185],[457,58],[441,81],[228,-255],[441,58],[370,127],[348,162],[315,197],[419,58],[-11,220],[-97,220],[81,208],[359,104],[163,-196],[425,115],[321,151],[397,12],[375,57],[376,139],[299,128],[337,127],[218,-35],[190,-46],[414,81],[370,-104],[381,11],[364,81],[375,-57],[414,-58],[386,23],[403,-12],[413,-11],[381,23],[283,174],[337,92],[349,-127],[331,104],[300,208],[179,-185],[98,-208],[180,-197],[288,174],[332,-220],[375,-70],[321,-162],[392,35],[354,104],[418,-23],[376,-81],[381,-104],[147,254],[-180,197],[-136,209],[-359,46],[-158,220],[-60,220],[-98,440],[213,-81],[364,-35],[359,35],[327,-93],[283,-174],[119,-208],[376,-35],[359,81],[381,116],[342,70],[283,-139],[370,46],[239,451],[224,-266],[321,-104],[348,58],[228,-232],[365,-23],[337,-69],[332,-128],[218,220],[108,209],[278,-232],[381,58],[283,-127],[190,-197],[370,58],[288,127],[283,151],[337,81],[392,69],[354,81],[272,127],[163,186],[65,254],[-32,244],[-87,231],[-98,232],[-87,231],[-71,209],[-16,231],[27,232],[130,220],[109,243],[44,231],[-55,255],[-32,232],[136,266],[152,173],[180,220],[190,186],[223,173],[109,255],[152,162],[174,151],[267,34],[174,186],[196,115],[228,70],[202,150],[157,186],[218,69],[163,-151],[-103,-196],[-283,-174],[-120,-127],[-206,92],[-229,-58],[-190,-139],[-202,-150],[-136,-174],[-38,-231],[17,-220],[130,-197],[-190,-139],[-261,-46],[-153,-197],[-163,-185],[-174,-255],[-44,-220],[98,-243],[147,-185],[229,-139],[212,-185],[114,-232],[60,-220],[82,-232],[130,-196],[82,-220],[38,-544],[81,-220],[22,-232],[87,-231],[-38,-313],[-152,-243],[-163,-197],[-370,-81],[-125,-208],[-169,-197],[-419,-220],[-370,-93],[-348,-127],[-376,-128],[-223,-243],[-446,-23],[-489,23],[-441,-46],[-468,0],[87,-232],[424,-104],[311,-162],[174,-208],[-310,-185],[-479,58],[-397,-151],[-17,-243],[-11,-232],[327,-196],[60,-220],[353,-220],[588,-93],[500,-162],[398,-185],[506,-186],[690,-92],[681,-162],[473,-174],[517,-197],[272,-278],[136,-220],[337,209],[457,173],[484,186],[577,150],[495,162],[691,12],[680,-81],[560,-139],[180,255],[386,173],[702,12],[550,127],[522,128],[577,81],[614,104],[430,150],[-196,209],[-119,208],[0,220],[-539,-23],[-571,-93],[-544,0],[-77,220],[39,440],[125,128],[397,138],[468,139],[337,174],[337,174],[251,231],[380,104],[376,81],[190,47],[430,23],[408,81],[343,116],[337,139],[305,139],[386,185],[245,197],[261,173],[82,232],[-294,139],[98,243],[185,185],[288,116],[305,139],[283,185],[217,232],[136,277],[202,163],[331,-35],[136,-197],[332,-23],[11,220],[142,231],[299,-58],[71,-220],[331,-34],[360,104],[348,69],[315,-34],[120,-243],[305,196],[283,105],[315,81],[310,81],[283,139],[310,92],[240,128],[168,208],[207,-151],[288,81],[202,-277],[157,-209],[316,116],[125,232],[283,162],[365,-35],[108,-220],[229,220],[299,69],[326,23],[294,-11],[310,-70],[300,-34],[130,-197],[180,-174],[304,104],[327,24],[315,0],[310,11],[278,81],[294,70],[245,162],[261,104],[283,58],[212,162],[152,324],[158,197],[288,-93],[109,-208],[239,-139],[289,46],[196,-208],[206,-151],[283,139],[98,255],[250,104],[289,197],[272,81],[326,116],[218,127],[228,139],[218,127],[261,-69],[250,208],[180,162],[261,-11],[229,139],[54,208],[234,162],[228,116],[278,93],[256,46],[244,-35],[262,-58],[223,-162],[27,-254],[245,-197],[168,-162],[332,-70],[185,-162],[229,-162],[266,-35],[223,116],[240,243],[261,-127],[272,-70],[261,-69],[272,-46],[277,0],[229,-614],[-11,-150],[-33,-267],[-266,-150],[-218,-220],[38,-232],[310,12],[-38,-232],[-141,-220],[-131,-243],[212,-185],[321,-58],[321,104],[153,232],[92,220],[153,185],[174,174],[70,208],[147,289],[174,58],[316,24],[277,69],[283,93],[136,231],[82,220],[190,220],[272,151],[234,115],[153,197],[157,104],[202,93],[277,-58],[250,58],[272,69],[305,-34],[201,162],[142,393],[103,-162],[131,-278],[234,-115],[266,-47],[267,70],[283,-46],[261,-12],[174,58],[234,-35],[212,-127],[250,81],[300,0],[255,81],[289,-81],[185,197],[141,196],[191,163],[348,439],[179,-81],[212,-162],[185,-208],[354,-359],[272,-12],[256,0],[299,70],[299,81],[229,162],[190,174],[310,23],[207,127],[218,-116],[141,-185],[196,-185],[305,23],[190,-150],[332,-151],[348,-58],[288,47],[218,185],[185,185],[250,46],[251,-81],[288,-58],[261,93],[250,0],[245,-58],[256,-58],[250,104],[299,93],[283,23],[316,0],[255,58],[251,46],[76,290],[11,243],[174,-162],[49,-266],[92,-244],[115,-196],[234,-105],[315,35],[365,12],[250,35],[364,0],[262,11],[364,-23],[310,-46],[196,-186],[-54,-220],[179,-173],[299,-139],[310,-151],[360,-104],[375,-92],[283,-93],[315,-12],[180,197],[245,-162],[212,-185],[245,-139],[337,-58],[321,-69],[136,-232],[316,-139],[212,-208],[310,-93],[321,12],[299,-35],[332,12],[332,-47],[310,-81],[288,-139],[289,-116],[195,-173],[-32,-232],[-147,-208],[-125,-266],[-98,-209],[-131,-243],[-364,-93],[-163,-208],[-360,-127],[-125,-232],[-190,-220],[-201,-185],[-115,-243],[-70,-220],[-28,-266],[6,-220],[158,-232],[60,-220],[130,-208],[517,-81],[109,-255],[-501,-93],[-424,-127],[-528,-23],[-234,-336],[-49,-278],[-119,-220],[-147,-220],[370,-196],[141,-244],[239,-219],[338,-197],[386,-186],[419,-185],[636,-185],[142,-289],[800,-128],[53,-45],[208,-175],[767,151],[636,-186],[479,-142],[-99999,0]],[[59092,71341],[19,3],[40,143],[200,-8],[253,176],[-188,-251],[21,-111]],[[59437,71293],[-30,21],[-53,-45],[-42,12],[-14,-22],[-5,59],[-20,37],[-54,6],[-75,-51],[-52,31]],[[59437,71293],[8,-48],[-285,-240],[-136,77],[-64,237],[132,22]],[[45272,63236],[13,274],[106,161],[91,308],[-18,200],[96,417],[155,376],[93,95],[74,344],[6,315],[100,365],[185,216],[177,603],[5,8],[139,227],[259,65],[218,404],[140,158],[232,493],[-70,735],[106,508],[37,312],[179,399],[278,270],[206,244],[186,612],[87,362],[205,-2],[167,-251],[264,41],[288,-131],[121,-6]],[[56944,63578],[0,2175],[0,2101],[-83,476],[71,365],[-43,253],[101,283]],[[56990,69231],[369,10],[268,-156],[275,-175],[129,-92],[214,188],[114,169],[245,49],[198,-75],[75,-293],[65,193],[222,-140],[217,-33],[137,149]],[[59700,68010],[-78,-238],[-60,-446],[-75,-308],[-65,-103],[-93,191],[-125,263],[-198,847],[-29,-53],[115,-624],[171,-594],[210,-920],[102,-321],[90,-334],[249,-654],[-55,-103],[9,-384],[323,-530],[49,-121]],[[53191,70158],[326,-204],[117,51],[232,-98],[368,-264],[130,-526],[250,-114],[391,-248],[296,-293],[136,153],[133,272],[-65,452],[87,288],[200,277],[192,80],[375,-121],[95,-264],[104,-2],[88,-101],[276,-70],[68,-195]],[[59804,53833],[-164,643],[-127,137],[-48,236],[-141,288],[-171,42],[95,337],[147,14],[42,181]],[[61764,57990],[-98,-261],[-94,-277],[22,-163],[4,-180],[155,-10],[67,42],[62,-106]],[[61882,57035],[-61,-209],[103,-325],[102,-285],[106,-210],[909,-702],[233,4]],[[61966,58083],[66,-183],[-9,-245],[-158,-142],[119,-161]],[[61984,57352],[-102,-317]],[[61984,57352],[91,-109],[54,-245],[125,-247],[138,-2],[262,151],[302,70],[245,184],[138,39],[99,108],[158,20]],[[58449,49909],[-166,-182],[-67,60]],[[58564,52653],[115,161],[176,-132],[224,138],[195,-1],[171,272]],[[55279,77084],[100,2],[-69,-260],[134,-227],[-41,-278],[-65,-27]],[[55338,76294],[-52,-53],[-90,-138],[-41,-325]],[[55719,75309],[35,-5],[13,121],[164,91],[62,23]],[[55993,75539],[95,35],[128,9]],[[55993,75539],[-9,44],[33,71],[31,144],[-39,-4],[-54,110],[-46,28],[-36,94],[-52,36],[-40,84],[-50,-33],[-38,-196],[-66,-43]],[[55627,75874],[22,51],[-106,123],[-91,63],[-40,82],[-74,101]],[[55380,75322],[-58,46],[-78,192],[-120,118]],[[55627,75874],[-52,-132]],[[32866,56937],[160,77],[58,-21],[-11,-440],[-232,-65],[-50,53],[81,163],[-6,233]]],i_={scale:[.0036000360003600037,.0016925586033320105],translate:[-180,-85.60903777459771]},r_={objects:t_,arcs:n_,transform:i_};function a_(n,e){const t=n,{scale:i,translate:r}=t.transform,a=t.arcs.map(h=>{let p=0,v=0;return h.map(([g,m])=>(p+=g,v+=m,[p*i[0]+r[0],v*i[1]+r[1]]))});function s(h,p){const v=[];for(const g of h){const m=g>=0?g:~g;p.add(m);const M=g>=0?a[m]:a[m].slice().reverse();for(let E=v.length?1:0;E<M.length;E++)v.push(M[E])}return v}const o=t.objects.countries.geometries,l=[],c=o.map((h,p)=>{var M;const v=new Set,m=(h.type==="Polygon"?[h.arcs]:h.arcs).flatMap(E=>E.map(b=>s(b,v)));for(const E of v)(l[E]??(l[E]=[])).push(p);return{name:((M=h.properties)==null?void 0:M.name)??"",rings:m}}),d=c.map(()=>new Set);for(const h of l)if(!(!h||h.length<2))for(const p of h)for(const v of h)p!==v&&d[p].add(v);const f=new Array(c.length).fill(-1),u=c.map((h,p)=>p).sort((h,p)=>d[p].size-d[h].size);for(const h of u){const p=new Set;for(const g of d[h])f[g]!==-1&&p.add(f[g]);let v=h%e;for(let g=0;g<e;g++)if(!p.has((h+g)%e)){v=(h+g)%e;break}f[h]=v}return c.map((h,p)=>({...h,colorIndex:f[p]}))}const s_=8;let o_=null;function of(){return o_??(o_=a_(r_,s_))}let ks=null;function l_(){return ks||(ks=of().map(n=>({name:n.name,rings:n.rings.map(e=>{let t=e[0][0],i=0;const r=e.map(([o,l],c)=>(c>0&&(o-t>180?i-=360:o-t<-180&&(i+=360)),t=o,[o+i,l])),a=r.map(o=>o[0]),s=r.map(o=>o[1]);return{points:r,minLon:Math.min(...a),maxLon:Math.max(...a),minLat:Math.min(...s),maxLat:Math.max(...s)}})})),ks)}function c_(n,e,t){if(t<n.minLat||t>n.maxLat)return!1;let i=!1;for(const r of[e,e+360,e-360])if(!(r<n.minLon||r>n.maxLon)){for(let a=0,s=n.points.length-1;a<n.points.length;s=a++){const[o,l]=n.points[a],[c,d]=n.points[s];l>t!=d>t&&r<(c-o)*(t-l)/(d-l)+o&&(i=!i)}break}return i}function u_(n,e){for(const t of l_()){let i=0;for(const r of t.rings)c_(r,e,n)&&i++;if(i%2===1)return t.name}return null}var h_=nn('<div class="globe-wrapper svelte-1y27kms"></div>');function d_(n,e){yc(e,!0);let t=ba(e,"guess",3,null),i=ba(e,"answer",3,null),r=ba(e,"revealed",3,!1),a=ba(e,"interactive",3,!0),s=ba(e,"autoSpin",3,!1);const o=16777215,l=2282478;let c=Nt(null),d=Nt(!1),f=null,u=null,h=null,p=null,v=null,g=null,m=null,M=null,E=0,b=0,P=0,w=!1;const C=new k2,x=new $e;let T=null,L=null;const A="#152e4d",F="#2a3540",W="rgba(255, 255, 255, 0.42)";function Y(){const Fe=document.createElement("canvas");Fe.width=4096,Fe.height=2048;const pe=Fe.getContext("2d"),Ce=(ve,we)=>[(ve+180)/360*4096,(90-we)/180*2048];pe.fillStyle=A,pe.fillRect(0,0,4096,2048),pe.strokeStyle="rgba(255, 255, 255, 0.07)",pe.lineWidth=1.5;for(let ve=-150;ve<=180;ve+=30){const[we]=Ce(ve,0);pe.beginPath(),pe.moveTo(we,0),pe.lineTo(we,2048),pe.stroke()}for(let ve=-60;ve<=60;ve+=30){const[,we]=Ce(0,ve);pe.beginPath(),pe.moveTo(0,we),pe.lineTo(4096,we),pe.stroke()}pe.lineJoin="round",pe.lineCap="round";const j=[];for(const ve of of()){const we=new Path2D;let Se=[],Be=-1;for(const Pe of ve.rings){let He=Pe[0][0],Xe=0;const Re=Pe.map(([ze,Ie],tt)=>(tt>0&&(ze-He>180?Xe-=360:ze-He<-180&&(Xe+=360)),He=ze,[ze+Xe,Ie])),J=Re.map(ze=>ze[0]),be=Re.map(ze=>ze[1]),ke=(Math.max(...J)-Math.min(...J))*(Math.max(...be)-Math.min(...be));ke>Be&&(Be=ke,Se=Re);const R=Re.map(([ze,Ie])=>Ce(ze,Ie));for(const ze of[-4096,0,4096])R.forEach(([Ie,tt],ue)=>{ue===0?we.moveTo(Ie+ze,tt):we.lineTo(Ie+ze,tt)}),we.closePath()}if(pe.fillStyle=F,pe.fill(we,"evenodd"),pe.strokeStyle=W,pe.lineWidth=1.75,pe.stroke(we),ve.name&&Se.length){let Pe=0,He=0,Xe=0;for(let Re=0,J=Se.length-1;Re<Se.length;J=Re++){const be=Se[J][0]*Se[Re][1]-Se[Re][0]*Se[J][1];Pe+=be,He+=(Se[J][0]+Se[Re][0])*be,Xe+=(Se[J][1]+Se[Re][1])*be}if(Math.abs(Pe)>1e-7){He/=3*Pe,Xe/=3*Pe;let Re=He;Re>180&&(Re-=360),Re<-180&&(Re+=360);const J=Math.sqrt(Be*Math.max(.15,Math.cos(Xe*Math.PI/180)));j.push({name:ve.name,lon:Re,lat:Xe,size:Math.min(24,Math.max(10,7+J*1.1))})}}}const[,_e]=Ce(0,-85.6);pe.fillStyle=F,pe.fillRect(0,_e,4096,2048-_e),pe.textAlign="center",pe.textBaseline="middle";for(const ve of j.sort((we,Se)=>we.size-Se.size)){const[we,Se]=Ce(ve.lon,ve.lat),Be=Math.min(3,1/Math.max(.2,Math.cos(ve.lat*Math.PI/180)));pe.save(),pe.translate(we,Se),pe.scale(Be,1),pe.font=`500 ${Math.round(ve.size)}px Satoshi, ui-sans-serif, system-ui, sans-serif`,pe.strokeStyle="rgba(7, 11, 18, 0.55)",pe.lineWidth=Math.max(2,ve.size/7),pe.strokeText(ve.name,0,0),pe.fillStyle="rgba(255, 255, 255, 0.52)",pe.fillText(ve.name,0,0),pe.restore()}const ae=new A2(Fe);return ae.colorSpace=yn,ae.wrapS=oo,ae.anisotropy=(f==null?void 0:f.capabilities.getMaxAnisotropy())??1,ae}function I(ie){const fe=new Oa,Fe=new Zr({color:ie}),pe=new cn(new Vc(.0045,.0045,.055,12),Fe);pe.position.y=.0275;const Ce=new cn(new _o(.02,20,20),Fe);Ce.position.y=.062;const j=new cn(new Wc(.014,.024,32),new Zr({color:ie,transparent:!0,opacity:.35,side:ti}));return j.rotation.x=-Math.PI/2,j.position.y=.002,fe.add(pe,Ce,j),fe.visible=!1,fe}function H(ie,fe){const[Fe,pe,Ce]=Wa(fe.lat,fe.lon),j=new N(Fe,pe,Ce);ie.position.copy(j),ie.quaternion.setFromUnitVectors(new N(0,1,0),j.clone().normalize()),ie.visible=!0}function k(ie,fe=900){if(!h)return;const Fe=h.position.length(),[pe,Ce,j]=Wa(ie.lat,ie.lon,Fe);L={from:h.position.clone(),to:new N(pe,Ce,j),start:performance.now(),duration:fe}}function ee(ie){if(!Number.isFinite(ie)||ie<=0)return 3.1;const fe=45/2*(Math.PI/180),Fe=Math.atan(Math.tan(fe)*ie);return Math.max(3.1,1.1/Math.sin(Math.min(fe,Fe)))}function re(){var Se;if(!$(c))return;const ie=$(c).clientWidth,fe=$(c).clientHeight;f=new F4({antialias:!0,alpha:!0}),f.setPixelRatio(Math.min(window.devicePixelRatio,2)),f.setSize(ie,fe),$(c).appendChild(f.domElement),f.domElement.style.touchAction="none",u=new m2;const Fe=fe>0&&ie>0?ie/fe:1;h=new Rn(45,Fe,.1,100);const pe=ee(Fe),[Ce,j,_e]=Wa(24,-30,pe);h.position.set(Ce,j,_e),p=new B4(h,f.domElement),p.enablePan=!1,p.enableDamping=!0,p.dampingFactor=.08,p.rotateSpeed=.55,p.minDistance=1.4,p.maxDistance=pe+.4,p.autoRotateSpeed=.6,v=new cn(new _o(1,96,96),new Zr({map:Y()})),u.add(v),(Se=document.fonts)==null||Se.ready.then(()=>{if(w||!v)return;const Be=v.material,Pe=Be.map;Be.map=Y(),Be.needsUpdate=!0,Pe==null||Pe.dispose()}),g=I(o),m=I(l),u.add(g,m);const ae=f.domElement;ae.addEventListener("pointerdown",Be=>{T={x:Be.clientX,y:Be.clientY},p&&(p.autoRotate=!1)}),ae.addEventListener("pointerup",Be=>{if(!T||!a()||!e.onTap)return;const Pe=Math.hypot(Be.clientX-T.x,Be.clientY-T.y);if(T=null,Pe>7||!h||!v||!$(c))return;const He=ae.getBoundingClientRect();x.set((Be.clientX-He.left)/He.width*2-1,-((Be.clientY-He.top)/He.height)*2+1),C.setFromCamera(x,h);const Xe=C.intersectObject(v,!1)[0];if(!Xe)return;const Re=Xe.point;e.onTap(af(Re.x,Re.y,Re.z))}),new ResizeObserver(()=>{if(!f||!h||!$(c))return;const Be=$(c).clientWidth,Pe=$(c).clientHeight;if(Be===0||Pe===0)return;f.setSize(Be,Pe),h.aspect=Be/Pe,h.updateProjectionMatrix();const He=ee(Be/Pe);p&&(p.maxDistance=He+.4);const Xe=h.position.length();Xe<He&&h.position.multiplyScalar(He/Xe)}).observe($(c));const we=()=>{if(!w){if(P=requestAnimationFrame(we),L&&h){const Be=Math.min(1,(performance.now()-L.start)/L.duration),Pe=1-Math.pow(1-Be,3),He=L.from.clone().normalize(),Xe=L.to.clone().normalize(),Re=new qn().slerpQuaternions(new qn,new qn().setFromUnitVectors(He,Xe),Pe),J=Od.lerp(L.from.length(),L.to.length(),Pe);h.position.copy(He.clone().applyQuaternion(Re).multiplyScalar(J)),Be>=1&&(L=null)}if(M&&b>0){const Be=Math.min(1,(performance.now()-b)/1100);M.geometry.setDrawRange(0,Math.max(2,Math.floor(E*Be))),Be>=1&&(b=0)}p==null||p.update(),f&&u&&h&&f.render(u,h)}};we(),ht(d,!0)}gd(()=>(re(),()=>{w=!0,cancelAnimationFrame(P),p==null||p.dispose(),f&&(f.dispose(),f.domElement.remove()),u==null||u.traverse(ie=>{var fe;if(ie instanceof cn||ie instanceof w2||ie instanceof Vu){ie.geometry.dispose();const Fe=Array.isArray(ie.material)?ie.material:[ie.material];for(const pe of Fe)pe instanceof Zr&&((fe=pe.map)==null||fe.dispose()),pe.dispose()}})})),Xs(()=>{!$(d)||!g||(t()?H(g,t()):g.visible=!1)}),Xs(()=>{if(!(!$(d)||!m||!u))if(r()&&i())if(H(m,i()),t()){M&&(u.remove(M),M.geometry.dispose(),M.material.dispose());const ie=sf(t(),i()).map(([Fe,pe,Ce])=>new N(Fe,pe,Ce));E=ie.length;const fe=new rn().setFromPoints(ie);fe.setDrawRange(0,2),M=new Vu(fe,new F2({color:l,dashSize:.03,gapSize:.018,transparent:!0,opacity:.9})),M.computeLineDistances(),u.add(M),b=performance.now(),k(e_(t(),i()))}else k(i());else m.visible=!1,M&&(u.remove(M),M.geometry.dispose(),M.material.dispose(),M=null)}),Xs(()=>{p&&(p.autoRotate=s())});var ge=h_();K1(ge,ie=>ht(c,ie),()=>$(c)),Zt(n,ge),Mc()}var f_=nn('<span class="chip practice-chip svelte-1n46o8q">Practice</span>'),p_=nn('<div class="topbar-right svelte-1n46o8q"><span class="chip svelte-1n46o8q"> </span> <div class="chip scorebox svelte-1n46o8q"><span class="scorebox-label svelte-1n46o8q">Score</span> <span class="scorebox-value svelte-1n46o8q"> </span></div></div>'),m_=nn('<div class="prompt-row svelte-1n46o8q"><div class="prompt card svelte-1n46o8q"><button class="photo-btn svelte-1n46o8q"><img class="prompt-photo svelte-1n46o8q"/></button> <div><div class="prompt-label svelte-1n46o8q">Where was this born?</div> <div class="prompt-name svelte-1n46o8q"> </div></div></div></div>'),g_=nn("<strong> </strong> from the source — dead on",1),__=nn(" <strong> </strong> away",1),v_=nn('<aside class="reveal card svelte-1n46o8q"><button class="photo-btn svelte-1n46o8q"><img class="reveal-photo svelte-1n46o8q"/></button> <div class="reveal-head svelte-1n46o8q"><span class="reveal-verdict svelte-1n46o8q"> </span> <span class="reveal-points accent-text svelte-1n46o8q"> </span></div> <div class="reveal-answer svelte-1n46o8q"> <strong> </strong></div> <div class="reveal-distance svelte-1n46o8q"><!></div> <p class="reveal-fact svelte-1n46o8q"> </p> <button class="btn btn-block svelte-1n46o8q"> </button></aside>'),x_=nn('<div class="actionbar svelte-1n46o8q"><button class="btn btn-lg svelte-1n46o8q"> </button> <span class="action-hint svelte-1n46o8q"> </span></div>'),y_=nn(`<div class="panel intro card svelte-1n46o8q"><div class="intro-eyebrow svelte-1n46o8q"> </div> <h1 class="intro-title svelte-1n46o8q">Where was it <span class="accent-text svelte-1n46o8q">born?</span></h1> <p class="intro-copy svelte-1n46o8q">Five dishes. Spin the globe and pin each one's home city — the closer your tap, the more of
        the 1,000 points you keep. Same five dishes for everyone, one game a day.</p> <button class="btn btn-lg svelte-1n46o8q"> </button> <p class="intro-credit svelte-1n46o8q">Food photos from Wikipedia / Wikimedia Commons · map data © Natural Earth</p></div>`),M_=nn('<li class="svelte-1n46o8q"><img class="summary-thumb svelte-1n46o8q"/> <span class="summary-dish svelte-1n46o8q"> </span> <span class="summary-detail svelte-1n46o8q"> </span> <span class="summary-points svelte-1n46o8q"> </span></li>'),S_=nn('<button class="btn btn-lg btn-block svelte-1n46o8q"> </button> <div class="countdown svelte-1n46o8q"> <strong class="svelte-1n46o8q"> </strong></div> <a class="ghost-link svelte-1n46o8q" href="?practice=1">Practice with random dishes</a>',1),b_=nn(`<button class="btn btn-lg btn-block svelte-1n46o8q">Play another practice</button> <a class="ghost-link svelte-1n46o8q">Back to today's game</a>`,1),E_=nn('<div class="panel summary card svelte-1n46o8q"><div class="summary-eyebrow svelte-1n46o8q"> </div> <div class="summary-score svelte-1n46o8q"><span class="accent-text svelte-1n46o8q"> </span> <span class="summary-max svelte-1n46o8q"> </span></div> <div class="summary-verdict svelte-1n46o8q"> </div> <div class="progress svelte-1n46o8q"><div class="progress-fill svelte-1n46o8q"></div></div> <ul class="summary-rounds svelte-1n46o8q"></ul> <!></div>'),T_=nn('<button class="lightbox svelte-1n46o8q" aria-label="Close enlarged photo"><img class="svelte-1n46o8q"/> <span class="lightbox-caption svelte-1n46o8q"> </span></button>'),w_=nn('<div class="dishtap-root svelte-1n46o8q"><header class="topbar svelte-1n46o8q"><div class="wordmark svelte-1n46o8q">Dish<span class="accent-text svelte-1n46o8q">Tap</span> <span class="daynum svelte-1n46o8q"> </span></div> <!> <!></header> <!> <div class="stage-row svelte-1n46o8q"><div class="globe-stage svelte-1n46o8q"><div class="globe-glow svelte-1n46o8q"></div> <!></div> <!></div> <!> <!> <!> <!></div>');function A_(n,e){yc(e,!0);const t=typeof location<"u"&&new URLSearchParams(location.search).has("practice"),i=_d();let r=Nt("start"),a=Nt(qi([])),s=Nt(0),o=Nt(null),l=Nt(qi([])),c=Nt(!1),d=Nt(null),f=Nt(qi(mu()));const u=Li(()=>$(a)[$(s)]??null),h=Li(()=>$(l).reduce((J,be)=>J+be.points,0)),p=Li(()=>$(l)[$(l).length-1]??null),v=jr*$r;gd(()=>{if(!t){const be=np();be&&(g(be.rounds),ht(c,!0),ht(r,"done"))}const J=setInterval(()=>ht(f,mu(),!0),1e3);return()=>clearInterval(J)});function g(J){ht(l,J.flatMap(be=>{const ke=so.find(R=>R.id===be.id);return ke?[{dish:ke,distance:be.distance,points:be.points,tapped:null}]:[]}),!0)}function m(){ht(a,t?tp():ep(i),!0),ht(l,[],!0),ht(s,0),ht(o,null),ht(r,"guessing")}function M(J){$(r)==="guessing"&&ht(o,J,!0)}function E(){if(!$(o)||!$(u))return;const J=Math.round(J4($(o),$(u)));ht(l,[...$(l),{dish:$(u),distance:J,points:Q4(J),tapped:u_($(o).lat,$(o).lon)}],!0),ht(r,"revealed")}function b(){if($(s)+1>=$(a).length){t||ip({day:i,rounds:$(l).map(J=>({id:J.dish.id,distance:J.distance,points:J.points})),total:$(h)}),ht(r,"done");return}ht(s,$(s)+1),ht(o,null),ht(r,"guessing")}function P(J){return J.points>=$r?"Bullseye":J.points>=850?"Razor close":J.points>=600?"Close":J.points>=350?"Same neighborhood":J.points>=120?"Wrong region":"Way off"}function w(J){return J>=4500?"World-class food geographer":J>=3500?"Globetrotting gourmet":J>=2500?"Seasoned traveler":J>=1200?"Curious taster":"Time to get a passport"}function C(J){return`${J.toLocaleString()} km`}function x(J){const be=Math.floor(J/1e3),ke=R=>String(R).padStart(2,"0");return`${ke(Math.floor(be/3600))}:${ke(Math.floor(be%3600/60))}:${ke(be%60)}`}function T(J){return`images/dishtap/${J.id}.jpg`}function L(J){ht(d,{src:T(J),alt:J.name},!0)}let A=Nt("idle");async function F(){const J=$(l).map(R=>R.points>=$r?"🎯":R.points>=850?"🟢":R.points>=600?"🟡":R.points>=300?"🟠":"⚫").join(""),be=`${location.origin}${location.pathname}`,ke=`DishTap #${i} — ${$(h).toLocaleString()}/${v.toLocaleString()}
${J}
Where was it born? ${be}`;try{await navigator.clipboard.writeText(ke),ht(A,"copied")}catch{try{await navigator.share({text:ke}),ht(A,"copied")}catch{ht(A,"failed")}}setTimeout(()=>ht(A,"idle"),2500)}var W=w_();H1("1n46o8q",J=>{S1(()=>{Zh.title=`DishTap #${i??""} — the daily food-geography game`})}),P1("keydown",El,J=>J.key==="Escape"&&ht(d,null));var Y=We(W),I=We(Y),H=it(We(I),3),k=We(H),ee=it(I,2);{var re=J=>{var be=f_();Zt(J,be)};Kn(ee,J=>{t&&J(re)})}var ge=it(ee,2);{var ie=J=>{var be=p_(),ke=We(be),R=We(ke),ze=it(ke,2),Ie=it(We(ze),2),tt=We(Ie);Sn(ue=>{vt(R,`Round ${$(s)+1} / ${$(a).length??""}`),vt(tt,ue)},[()=>$(h).toLocaleString()]),Zt(J,be)};Kn(ge,J=>{($(r)==="guessing"||$(r)==="revealed")&&J(ie)})}var fe=it(Y,2);{var Fe=J=>{var be=m_(),ke=We(be),R=We(ke),ze=We(R),Ie=it(R,2),tt=it(We(Ie),2),ue=We(tt);Sn(mt=>{Un(R,"aria-label",`Enlarge photo of ${$(u).name??""}`),Un(ze,"src",mt),Un(ze,"alt",$(u).name),vt(ue,$(u).name)},[()=>T($(u))]),Ii("click",R,()=>$(u)&&L($(u))),Zt(J,be)};Kn(fe,J=>{$(r)==="guessing"&&$(u)&&J(Fe)})}var pe=it(fe,2),Ce=We(pe),j=it(We(Ce),2);{let J=Li(()=>$(r)==="guessing"||$(r)==="revealed"?$(o):null),be=Li(()=>$(r)==="revealed"?$(u):null),ke=Li(()=>$(r)==="revealed"),R=Li(()=>$(r)==="guessing"),ze=Li(()=>$(r)==="start"||$(r)==="done");d_(j,{get guess(){return $(J)},get answer(){return $(be)},get revealed(){return $(ke)},get interactive(){return $(R)},get autoSpin(){return $(ze)},onTap:M})}var _e=it(Ce,2);{var ae=J=>{var be=v_(),ke=We(be),R=We(ke),ze=it(ke,2),Ie=We(ze),tt=We(Ie),ue=it(Ie,2),mt=We(ue),S=it(ze,2),_=We(S),O=it(_),Z=We(O),Q=it(S,2),oe=We(Q);{var he=ne=>{var Ue=g_(),Ge=us(Ue),Qe=We(Ge);Sn(D=>vt(Qe,D),[()=>C($(p).distance)]),Zt(ne,Ue)},X=ne=>{var Ue=__(),Ge=us(Ue),Qe=it(Ge),D=We(Qe);Sn(le=>{vt(Ge,`Your tap${$(p).tapped?` (${$(p).tapped})`:""} was `),vt(D,le)},[()=>C($(p).distance)]),Zt(ne,Ue)};Kn(oe,ne=>{$(p).points>=$r?ne(he):ne(X,-1)})}var q=it(Q,2),ce=We(q),me=it(q,2),se=We(me);Sn((ne,Ue,Ge)=>{Un(ke,"aria-label",`Enlarge photo of ${$(p).dish.name??""}`),Un(R,"src",ne),Un(R,"alt",$(p).dish.name),vt(tt,Ue),vt(mt,`+${Ge??""}`),vt(_,`${$(p).dish.name??""} · `),vt(Z,$(p).dish.place),vt(ce,$(p).dish.fact),vt(se,$(s)+1>=$(a).length?"See my results":"Next dish →")},[()=>T($(p).dish),()=>P($(p)),()=>$(p).points.toLocaleString()]),Ii("click",ke,()=>$(p)&&L($(p).dish)),Ii("click",me,b),Zt(J,be)};Kn(_e,J=>{$(r)==="revealed"&&$(p)&&J(ae)})}var ve=it(pe,2);{var we=J=>{var be=x_(),ke=We(be),R=We(ke),ze=it(ke,2),Ie=We(ze);Sn(()=>{ke.disabled=!$(o),vt(R,$(o)?"Lock it in":"Tap the globe to guess"),vt(Ie,$(o)?"Tap again to move your pin":" ")}),Ii("click",ke,E),Zt(J,be)};Kn(ve,J=>{$(r)==="guessing"&&J(we)})}var Se=it(ve,2);{var Be=J=>{var be=y_(),ke=We(be),R=We(ke),ze=it(ke,6),Ie=We(ze);Sn(()=>{vt(R,`Daily puzzle #${i??""}`),vt(Ie,t?"Start practice round":"Play today's five")}),Ii("click",ze,m),Zt(J,be)};Kn(Se,J=>{$(r)==="start"&&J(Be)})}var Pe=it(Se,2);{var He=J=>{var be=E_(),ke=We(be),R=We(ke),ze=it(ke,2),Ie=We(ze),tt=We(Ie),ue=it(Ie,2),mt=We(ue),S=it(ze,2),_=We(S),O=it(S,2),Z=We(O),Q=it(O,2);k1(Q,21,()=>$(l),q=>q.dish.id,(q,ce)=>{var me=M_(),se=We(me),ne=it(se,2),Ue=We(ne),Ge=it(ne,2),Qe=We(Ge),D=it(Ge,2),le=We(D);Sn((K,Ee,de)=>{Un(se,"src",K),Un(se,"alt",$(ce).dish.name),vt(Ue,$(ce).dish.name),vt(Qe,Ee),vt(le,`+${de??""}`)},[()=>T($(ce).dish),()=>C($(ce).distance),()=>$(ce).points.toLocaleString()]),Zt(q,me)});var oe=it(Q,2);{var he=q=>{var ce=S_(),me=us(ce),se=We(me),ne=it(me,2),Ue=We(ne),Ge=it(Ue),Qe=We(Ge);Sn(D=>{vt(se,$(A)==="copied"?"Copied — send it to a friend":$(A)==="failed"?"Couldn't copy — try again":"Share my score"),vt(Ue,`${$(c)?"You've played today.":"That's today's game."}
          Next five dishes in `),vt(Qe,D)},[()=>x($(f))]),Ii("click",me,F),Zt(q,ce)},X=q=>{var ce=b_(),me=us(ce),se=it(me,2);Un(se,"href",location.pathname),Ii("click",me,m),Zt(q,ce)};Kn(oe,q=>{t?q(X,-1):q(he)})}Sn((q,ce,me)=>{vt(R,t?"Practice result":`DishTap #${i} — final score`),vt(tt,q),vt(mt,`/ ${ce??""}`),vt(_,me),W1(Z,`width: ${$(h)/v*100}%`)},[()=>$(h).toLocaleString(),()=>v.toLocaleString(),()=>w($(h))]),Zt(J,be)};Kn(Pe,J=>{$(r)==="done"&&J(He)})}var Xe=it(Pe,2);{var Re=J=>{var be=T_(),ke=We(be),R=it(ke,2),ze=We(R);Sn(()=>{Un(ke,"src",$(d).src),Un(ke,"alt",$(d).alt),vt(ze,$(d).alt)}),Ii("click",be,()=>ht(d,null)),Zt(J,be)};Kn(Xe,J=>{$(d)&&J(Re)})}Sn(()=>vt(k,`#${i??""}`)),Zt(n,W),Mc()}D1(["click"]);U1(A_,{target:document.getElementById("app")});
