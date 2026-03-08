var bl=Object.defineProperty;var Ci=e=>{throw TypeError(e)};var _l=(e,t,r)=>t in e?bl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var ht=(e,t,r)=>_l(e,typeof t!="symbol"?t+"":t,r),_o=(e,t,r)=>t.has(e)||Ci("Cannot "+r);var b=(e,t,r)=>(_o(e,t,"read from private field"),r?r.call(e):t.get(e)),W=(e,t,r)=>t.has(e)?Ci("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),D=(e,t,r,n)=>(_o(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),be=(e,t,r)=>(_o(e,t,"access private method"),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();const Eo=!1;var Yo=Array.isArray,xl=Array.prototype.indexOf,Yr=Array.prototype.includes,ro=Array.from,yl=Object.defineProperty,rr=Object.getOwnPropertyDescriptor,cs=Object.getOwnPropertyDescriptors,wl=Object.prototype,kl=Array.prototype,Jo=Object.getPrototypeOf,Pi=Object.isExtensible;function vn(e){return typeof e=="function"}const Sl=()=>{};function Al(e){return e()}function Mo(e){for(var t=0;t<e.length;t++)e[t]()}function ds(){var e,t,r=new Promise((n,o)=>{e=n,t=o});return{promise:r,resolve:e,reject:t}}function fs(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const $e=2,en=4,Mr=8,no=1<<24,cr=16,yt=32,Pr=64,zo=128,it=512,Ce=1024,Pe=2048,xt=4096,je=8192,Tt=16384,tn=32768,sr=65536,Ni=1<<17,El=1<<18,rn=1<<19,us=1<<20,Mt=1<<25,zr=65536,To=1<<21,Xo=1<<22,nr=1<<23,Ct=Symbol("$state"),vs=Symbol("legacy props"),Ml=Symbol(""),gr=new class extends Error{constructor(){super(...arguments);ht(this,"name","StaleReactionError");ht(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var ss;const ps=!!((ss=globalThis.document)!=null&&ss.contentType)&&globalThis.document.contentType.includes("xml");function zl(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Tl(e,t,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function Cl(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Pl(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Nl(e){throw new Error("https://svelte.dev/e/effect_orphan")}function $l(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Il(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Ol(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Ll(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Rl(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function jl(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Dl=1,Fl=2,hs=4,Vl=8,Gl=16,Bl=1,Wl=2,ms=4,Hl=8,Kl=16,ql=1,Ul=2,we=Symbol(),gs="http://www.w3.org/1999/xhtml",bs="http://www.w3.org/2000/svg",Yl="http://www.w3.org/1998/Math/MathML",Jl="@attach";function Xl(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Zl(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function _s(e){return e===this.v}function Ql(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function xs(e){return!Ql(e,this.v)}let An=!1,ec=!1;function tc(){An=!0}let Se=null;function Jr(e){Se=e}function Gt(e,t=!1,r){Se={p:Se,i:!1,c:null,e:null,s:e,x:null,l:An&&!t?{s:null,u:null,$:[]}:null}}function Bt(e){var t=Se,r=t.e;if(r!==null){t.e=null;for(var n of r)Ds(n)}return t.i=!0,Se=t.p,{}}function En(){return!An||Se!==null&&Se.l===null}let br=[];function ys(){var e=br;br=[],Mo(e)}function Pt(e){if(br.length===0&&!_n){var t=br;queueMicrotask(()=>{t===br&&ys()})}br.push(e)}function rc(){for(;br.length>0;)ys()}function ws(e){var t=B;if(t===null)return G.f|=nr,e;if((t.f&tn)===0&&(t.f&en)===0)throw e;tr(e,t)}function tr(e,t){for(;t!==null;){if((t.f&zo)!==0){if((t.f&tn)===0)throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}const nc=-7169;function fe(e,t){e.f=e.f&nc|t}function Zo(e){(e.f&it)!==0||e.deps===null?fe(e,Ce):fe(e,xt)}function ks(e){if(e!==null)for(const t of e)(t.f&$e)===0||(t.f&zr)===0||(t.f^=zr,ks(t.deps))}function Ss(e,t,r){(e.f&Pe)!==0?t.add(e):(e.f&xt)!==0&&r.add(e),ks(e.deps),fe(e,Ce)}const Fn=new Set;let F=null,Co=null,Te=null,Ve=[],oo=null,_n=!1,Xr=null,oc=1;var Zt,Vr,yr,Gr,Br,Wr,Qt,kt,Hr,He,Po,No,$o,Io;const fi=class fi{constructor(){W(this,He);ht(this,"id",oc++);ht(this,"current",new Map);ht(this,"previous",new Map);W(this,Zt,new Set);W(this,Vr,new Set);W(this,yr,0);W(this,Gr,0);W(this,Br,null);W(this,Wr,new Set);W(this,Qt,new Set);W(this,kt,new Map);ht(this,"is_fork",!1);W(this,Hr,!1)}skip_effect(t){b(this,kt).has(t)||b(this,kt).set(t,{d:[],m:[]})}unskip_effect(t){var r=b(this,kt).get(t);if(r){b(this,kt).delete(t);for(var n of r.d)fe(n,Pe),zt(n);for(n of r.m)fe(n,xt),zt(n)}}process(t){var o;Ve=[],this.apply();var r=Xr=[],n=[];for(const i of t)be(this,He,No).call(this,i,r,n);if(Xr=null,be(this,He,Po).call(this)){be(this,He,$o).call(this,n),be(this,He,$o).call(this,r);for(const[i,s]of b(this,kt))zs(i,s)}else{Co=this,F=null;for(const i of b(this,Zt))i(this);b(this,Zt).clear(),b(this,yr)===0&&be(this,He,Io).call(this),$i(n),$i(r),b(this,Wr).clear(),b(this,Qt).clear(),Co=null,(o=b(this,Br))==null||o.resolve()}Te=null}capture(t,r){r!==we&&!this.previous.has(t)&&this.previous.set(t,r),(t.f&nr)===0&&(this.current.set(t,t.v),Te==null||Te.set(t,t.v))}activate(){F=this,this.apply()}deactivate(){F===this&&(F=null,Te=null)}flush(){var t;if(Ve.length>0)F=this,As();else if(b(this,yr)===0&&!this.is_fork){for(const r of b(this,Zt))r(this);b(this,Zt).clear(),be(this,He,Io).call(this),(t=b(this,Br))==null||t.resolve()}this.deactivate()}discard(){for(const t of b(this,Vr))t(this);b(this,Vr).clear()}increment(t){D(this,yr,b(this,yr)+1),t&&D(this,Gr,b(this,Gr)+1)}decrement(t){D(this,yr,b(this,yr)-1),t&&D(this,Gr,b(this,Gr)-1),!b(this,Hr)&&(D(this,Hr,!0),Pt(()=>{D(this,Hr,!1),be(this,He,Po).call(this)?Ve.length>0&&this.flush():this.revive()}))}revive(){for(const t of b(this,Wr))b(this,Qt).delete(t),fe(t,Pe),zt(t);for(const t of b(this,Qt))fe(t,xt),zt(t);this.flush()}oncommit(t){b(this,Zt).add(t)}ondiscard(t){b(this,Vr).add(t)}settled(){return(b(this,Br)??D(this,Br,ds())).promise}static ensure(){if(F===null){const t=F=new fi;Fn.add(F),_n||Pt(()=>{F===t&&t.flush()})}return F}apply(){}};Zt=new WeakMap,Vr=new WeakMap,yr=new WeakMap,Gr=new WeakMap,Br=new WeakMap,Wr=new WeakMap,Qt=new WeakMap,kt=new WeakMap,Hr=new WeakMap,He=new WeakSet,Po=function(){return this.is_fork||b(this,Gr)>0},No=function(t,r,n){t.f^=Ce;for(var o=t.first;o!==null;){var i=o.f,s=(i&(yt|Pr))!==0,a=s&&(i&Ce)!==0,l=(i&je)!==0,d=a||b(this,kt).has(o);if(!d&&o.fn!==null){s?l||(o.f^=Ce):(i&en)!==0?r.push(o):(i&(Mr|no))!==0&&l?n.push(o):Cn(o)&&(Qr(o),(i&cr)!==0&&(b(this,Qt).add(o),l&&fe(o,Pe)));var f=o.first;if(f!==null){o=f;continue}}for(;o!==null;){var v=o.next;if(v!==null){o=v;break}o=o.parent}}},$o=function(t){for(var r=0;r<t.length;r+=1)Ss(t[r],b(this,Wr),b(this,Qt))},Io=function(){var i;if(Fn.size>1){this.previous.clear();var t=F,r=Te,n=!0;for(const s of Fn){if(s===this){n=!1;continue}const a=[];for(const[d,f]of this.current){if(s.current.has(d))if(n&&f!==s.current.get(d))s.current.set(d,f);else continue;a.push(d)}if(a.length===0)continue;const l=[...s.current.keys()].filter(d=>!this.current.has(d));if(l.length>0){var o=Ve;Ve=[];const d=new Set,f=new Map;for(const v of a)Es(v,l,d,f);if(Ve.length>0){F=s,s.apply();for(const v of Ve)be(i=s,He,No).call(i,v,[],[]);s.deactivate()}Ve=o}}F=t,Te=r}b(this,kt).clear(),Fn.delete(this)};let or=fi;function ic(e){var t=_n;_n=!0;try{for(var r;;){if(rc(),Ve.length===0&&(F==null||F.flush(),Ve.length===0))return oo=null,r;As()}}finally{_n=t}}function As(){var e=null;try{for(var t=0;Ve.length>0;){var r=or.ensure();if(t++>1e3){var n,o;sc()}r.process(Ve),ir.clear()}}finally{Ve=[],oo=null,Xr=null}}function sc(){try{$l()}catch(e){tr(e,oo)}}let mt=null;function $i(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(Tt|je))===0&&Cn(n)&&(mt=new Set,Qr(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&Bs(n),(mt==null?void 0:mt.size)>0)){ir.clear();for(const o of mt){if((o.f&(Tt|je))!==0)continue;const i=[o];let s=o.parent;for(;s!==null;)mt.has(s)&&(mt.delete(s),i.push(s)),s=s.parent;for(let a=i.length-1;a>=0;a--){const l=i[a];(l.f&(Tt|je))===0&&Qr(l)}}mt.clear()}}mt=null}}function Es(e,t,r,n){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const o of e.reactions){const i=o.f;(i&$e)!==0?Es(o,t,r,n):(i&(Xo|cr))!==0&&(i&Pe)===0&&Ms(o,t,n)&&(fe(o,Pe),zt(o))}}function Ms(e,t,r){const n=r.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const o of e.deps){if(Yr.call(t,o))return!0;if((o.f&$e)!==0&&Ms(o,t,r))return r.set(o,!0),!0}return r.set(e,!1),!1}function zt(e){var t=oo=e,r=t.b;if(r!=null&&r.is_pending&&(e.f&(en|Mr|no))!==0&&(e.f&tn)===0){r.defer_effect(e);return}for(;t.parent!==null;){t=t.parent;var n=t.f;if(Xr!==null&&t===B&&(e.f&Mr)===0)return;if((n&(Pr|yt))!==0){if((n&Ce)===0)return;t.f^=Ce}}Ve.push(t)}function zs(e,t){if(!((e.f&yt)!==0&&(e.f&Ce)!==0)){(e.f&Pe)!==0?t.d.push(e):(e.f&xt)!==0&&t.m.push(e),fe(e,Ce);for(var r=e.first;r!==null;)zs(r,t),r=r.next}}function ac(e){let t=0,r=ar(0),n;return()=>{ri()&&(c(r),oi(()=>(t===0&&(n=Tr(()=>e(()=>yn(r)))),t+=1,()=>{Pt(()=>{t-=1,t===0&&(n==null||n(),n=void 0,yn(r))})})))}}var lc=sr|rn;function cc(e,t,r,n){new dc(e,t,r,n)}var ot,Uo,St,wr,Fe,At,Ye,gt,Rt,kr,er,Kr,qr,Ur,jt,eo,ye,fc,uc,vc,Oo,Kn,qn,Lo;class dc{constructor(t,r,n,o){W(this,ye);ht(this,"parent");ht(this,"is_pending",!1);ht(this,"transform_error");W(this,ot);W(this,Uo,null);W(this,St);W(this,wr);W(this,Fe);W(this,At,null);W(this,Ye,null);W(this,gt,null);W(this,Rt,null);W(this,kr,0);W(this,er,0);W(this,Kr,!1);W(this,qr,new Set);W(this,Ur,new Set);W(this,jt,null);W(this,eo,ac(()=>(D(this,jt,ar(b(this,kr))),()=>{D(this,jt,null)})));var i;D(this,ot,t),D(this,St,r),D(this,wr,s=>{var a=B;a.b=this,a.f|=zo,n(s)}),this.parent=B.b,this.transform_error=o??((i=this.parent)==null?void 0:i.transform_error)??(s=>s),D(this,Fe,Tn(()=>{be(this,ye,Oo).call(this)},lc))}defer_effect(t){Ss(t,b(this,qr),b(this,Ur))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!b(this,St).pending}update_pending_count(t){be(this,ye,Lo).call(this,t),D(this,kr,b(this,kr)+t),!(!b(this,jt)||b(this,Kr))&&(D(this,Kr,!0),Pt(()=>{D(this,Kr,!1),b(this,jt)&&Zr(b(this,jt),b(this,kr))}))}get_effect_pending(){return b(this,eo).call(this),c(b(this,jt))}error(t){var r=b(this,St).onerror;let n=b(this,St).failed;if(!r&&!n)throw t;b(this,At)&&(Ne(b(this,At)),D(this,At,null)),b(this,Ye)&&(Ne(b(this,Ye)),D(this,Ye,null)),b(this,gt)&&(Ne(b(this,gt)),D(this,gt,null));var o=!1,i=!1;const s=()=>{if(o){Zl();return}o=!0,i&&jl(),b(this,gt)!==null&&Ar(b(this,gt),()=>{D(this,gt,null)}),be(this,ye,qn).call(this,()=>{or.ensure(),be(this,ye,Oo).call(this)})},a=l=>{try{i=!0,r==null||r(l,s),i=!1}catch(d){tr(d,b(this,Fe)&&b(this,Fe).parent)}n&&D(this,gt,be(this,ye,qn).call(this,()=>{or.ensure();try{return Be(()=>{var d=B;d.b=this,d.f|=zo,n(b(this,ot),()=>l,()=>s)})}catch(d){return tr(d,b(this,Fe).parent),null}}))};Pt(()=>{var l;try{l=this.transform_error(t)}catch(d){tr(d,b(this,Fe)&&b(this,Fe).parent);return}l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(a,d=>tr(d,b(this,Fe)&&b(this,Fe).parent)):a(l)})}}ot=new WeakMap,Uo=new WeakMap,St=new WeakMap,wr=new WeakMap,Fe=new WeakMap,At=new WeakMap,Ye=new WeakMap,gt=new WeakMap,Rt=new WeakMap,kr=new WeakMap,er=new WeakMap,Kr=new WeakMap,qr=new WeakMap,Ur=new WeakMap,jt=new WeakMap,eo=new WeakMap,ye=new WeakSet,fc=function(){try{D(this,At,Be(()=>b(this,wr).call(this,b(this,ot))))}catch(t){this.error(t)}},uc=function(t){const r=b(this,St).failed;r&&D(this,gt,Be(()=>{r(b(this,ot),()=>t,()=>()=>{})}))},vc=function(){const t=b(this,St).pending;t&&(this.is_pending=!0,D(this,Ye,Be(()=>t(b(this,ot)))),Pt(()=>{var r=D(this,Rt,document.createDocumentFragment()),n=Nt();r.append(n),D(this,At,be(this,ye,qn).call(this,()=>(or.ensure(),Be(()=>b(this,wr).call(this,n))))),b(this,er)===0&&(b(this,ot).before(r),D(this,Rt,null),Ar(b(this,Ye),()=>{D(this,Ye,null)}),be(this,ye,Kn).call(this))}))},Oo=function(){try{if(this.is_pending=this.has_pending_snippet(),D(this,er,0),D(this,kr,0),D(this,At,Be(()=>{b(this,wr).call(this,b(this,ot))})),b(this,er)>0){var t=D(this,Rt,document.createDocumentFragment());ai(b(this,At),t);const r=b(this,St).pending;D(this,Ye,Be(()=>r(b(this,ot))))}else be(this,ye,Kn).call(this)}catch(r){this.error(r)}},Kn=function(){this.is_pending=!1;for(const t of b(this,qr))fe(t,Pe),zt(t);for(const t of b(this,Ur))fe(t,xt),zt(t);b(this,qr).clear(),b(this,Ur).clear()},qn=function(t){var r=B,n=G,o=Se;lt(b(this,Fe)),at(b(this,Fe)),Jr(b(this,Fe).ctx);try{return t()}catch(i){return ws(i),null}finally{lt(r),at(n),Jr(o)}},Lo=function(t){var r;if(!this.has_pending_snippet()){this.parent&&be(r=this.parent,ye,Lo).call(r,t);return}D(this,er,b(this,er)+t),b(this,er)===0&&(be(this,ye,Kn).call(this),b(this,Ye)&&Ar(b(this,Ye),()=>{D(this,Ye,null)}),b(this,Rt)&&(b(this,ot).before(b(this,Rt)),D(this,Rt,null)))};function Ts(e,t,r,n){const o=En()?Mn:Qo;var i=e.filter(v=>!v.settled);if(r.length===0&&i.length===0){n(t.map(o));return}var s=B,a=pc(),l=i.length===1?i[0].promise:i.length>1?Promise.all(i.map(v=>v.promise)):null;function d(v){a();try{n(v)}catch(u){(s.f&Tt)===0&&tr(u,s)}Ro()}if(r.length===0){l.then(()=>d(t.map(o)));return}function f(){a(),Promise.all(r.map(v=>mc(v))).then(v=>d([...t.map(o),...v])).catch(v=>tr(v,s))}l?l.then(f):f()}function pc(){var e=B,t=G,r=Se,n=F;return function(i=!0){lt(e),at(t),Jr(r),i&&(n==null||n.activate())}}function Ro(e=!0){lt(null),at(null),Jr(null),e&&(F==null||F.deactivate())}function hc(){var e=B.b,t=F,r=e.is_rendered();return e.update_pending_count(1),t.increment(r),()=>{e.update_pending_count(-1),t.decrement(r)}}function Mn(e){var t=$e|Pe,r=G!==null&&(G.f&$e)!==0?G:null;return B!==null&&(B.f|=rn),{ctx:Se,deps:null,effects:null,equals:_s,f:t,fn:e,reactions:null,rv:0,v:we,wv:0,parent:r??B,ac:null}}function mc(e,t,r){B===null&&zl();var o=void 0,i=ar(we),s=!G,a=new Map;return Pc(()=>{var u;var l=ds();o=l.promise;try{Promise.resolve(e()).then(l.resolve,l.reject).finally(Ro)}catch(g){l.reject(g),Ro()}var d=F;if(s){var f=hc();(u=a.get(d))==null||u.reject(gr),a.delete(d),a.set(d,l)}const v=(g,h=void 0)=>{if(d.activate(),h)h!==gr&&(i.f|=nr,Zr(i,h));else{(i.f&nr)!==0&&(i.f^=nr),Zr(i,g);for(const[m,p]of a){if(a.delete(m),m===d)break;p.reject(gr)}}f&&f()};l.promise.then(v,g=>v(null,g||"unknown"))}),so(()=>{for(const l of a.values())l.reject(gr)}),new Promise(l=>{function d(f){function v(){f===o?l(i):d(o)}f.then(v,v)}d(o)})}function Re(e){const t=Mn(e);return Ks(t),t}function Qo(e){const t=Mn(e);return t.equals=xs,t}function gc(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)Ne(t[r])}}function bc(e){for(var t=e.parent;t!==null;){if((t.f&$e)===0)return(t.f&Tt)===0?t:null;t=t.parent}return null}function ei(e){var t,r=B;lt(bc(e));try{e.f&=~zr,gc(e),t=Js(e)}finally{lt(r)}return t}function Cs(e){var t=ei(e);if(!e.equals(t)&&(e.wv=Us(),(!(F!=null&&F.is_fork)||e.deps===null)&&(e.v=t,e.deps===null))){fe(e,Ce);return}lr||(Te!==null?(ri()||F!=null&&F.is_fork)&&Te.set(e,t):Zo(e))}function _c(e){var t,r;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),(r=n.ac)==null||r.abort(gr),n.teardown=Sl,n.ac=null,wn(n,0),ii(n))}function Ps(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&Qr(t)}let jo=new Set;const ir=new Map;let Ns=!1;function ar(e,t){var r={f:0,v:e,reactions:null,equals:_s,rv:0,wv:0};return r}function V(e,t){const r=ar(e);return Ks(r),r}function xc(e,t=!1,r=!0){var o;const n=ar(e);return t||(n.equals=xs),An&&r&&Se!==null&&Se.l!==null&&((o=Se.l).s??(o.s=[])).push(n),n}function _(e,t,r=!1){G!==null&&(!_t||(G.f&Ni)!==0)&&En()&&(G.f&($e|cr|Xo|Ni))!==0&&(st===null||!Yr.call(st,e))&&Rl();let n=r?Xe(t):t;return Zr(e,n)}function Zr(e,t){if(!e.equals(t)){var r=e.v;lr?ir.set(e,t):ir.set(e,r),e.v=t;var n=or.ensure();if(n.capture(e,r),(e.f&$e)!==0){const o=e;(e.f&Pe)!==0&&ei(o),Zo(o)}e.wv=Us(),$s(e,Pe),En()&&B!==null&&(B.f&Ce)!==0&&(B.f&(yt|Pr))===0&&(nt===null?$c([e]):nt.push(e)),!n.is_fork&&jo.size>0&&!Ns&&yc()}return t}function yc(){Ns=!1;for(const e of jo)(e.f&Ce)!==0&&fe(e,xt),Cn(e)&&Qr(e);jo.clear()}function xn(e,t=1){var r=c(e),n=t===1?r++:r--;return _(e,r),n}function yn(e){_(e,e.v+1)}function $s(e,t){var r=e.reactions;if(r!==null)for(var n=En(),o=r.length,i=0;i<o;i++){var s=r[i],a=s.f;if(!(!n&&s===B)){var l=(a&Pe)===0;if(l&&fe(s,t),(a&$e)!==0){var d=s;Te==null||Te.delete(d),(a&zr)===0&&(a&it&&(s.f|=zr),$s(d,xt))}else l&&((a&cr)!==0&&mt!==null&&mt.add(s),zt(s))}}}function Xe(e){if(typeof e!="object"||e===null||Ct in e)return e;const t=Jo(e);if(t!==wl&&t!==kl)return e;var r=new Map,n=Yo(e),o=V(0),i=Er,s=a=>{if(Er===i)return a();var l=G,d=Er;at(null),Ri(i);var f=a();return at(l),Ri(d),f};return n&&r.set("length",V(e.length)),new Proxy(e,{defineProperty(a,l,d){(!("value"in d)||d.configurable===!1||d.enumerable===!1||d.writable===!1)&&Ol();var f=r.get(l);return f===void 0?s(()=>{var v=V(d.value);return r.set(l,v),v}):_(f,d.value,!0),!0},deleteProperty(a,l){var d=r.get(l);if(d===void 0){if(l in a){const f=s(()=>V(we));r.set(l,f),yn(o)}}else _(d,we),yn(o);return!0},get(a,l,d){var g;if(l===Ct)return e;var f=r.get(l),v=l in a;if(f===void 0&&(!v||(g=rr(a,l))!=null&&g.writable)&&(f=s(()=>{var h=Xe(v?a[l]:we),m=V(h);return m}),r.set(l,f)),f!==void 0){var u=c(f);return u===we?void 0:u}return Reflect.get(a,l,d)},getOwnPropertyDescriptor(a,l){var d=Reflect.getOwnPropertyDescriptor(a,l);if(d&&"value"in d){var f=r.get(l);f&&(d.value=c(f))}else if(d===void 0){var v=r.get(l),u=v==null?void 0:v.v;if(v!==void 0&&u!==we)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return d},has(a,l){var u;if(l===Ct)return!0;var d=r.get(l),f=d!==void 0&&d.v!==we||Reflect.has(a,l);if(d!==void 0||B!==null&&(!f||(u=rr(a,l))!=null&&u.writable)){d===void 0&&(d=s(()=>{var g=f?Xe(a[l]):we,h=V(g);return h}),r.set(l,d));var v=c(d);if(v===we)return!1}return f},set(a,l,d,f){var S;var v=r.get(l),u=l in a;if(n&&l==="length")for(var g=d;g<v.v;g+=1){var h=r.get(g+"");h!==void 0?_(h,we):g in a&&(h=s(()=>V(we)),r.set(g+"",h))}if(v===void 0)(!u||(S=rr(a,l))!=null&&S.writable)&&(v=s(()=>V(void 0)),_(v,Xe(d)),r.set(l,v));else{u=v.v!==we;var m=s(()=>Xe(d));_(v,m)}var p=Reflect.getOwnPropertyDescriptor(a,l);if(p!=null&&p.set&&p.set.call(f,d),!u){if(n&&typeof l=="string"){var x=r.get("length"),P=Number(l);Number.isInteger(P)&&P>=x.v&&_(x,P+1)}yn(o)}return!0},ownKeys(a){c(o);var l=Reflect.ownKeys(a).filter(v=>{var u=r.get(v);return u===void 0||u.v!==we});for(var[d,f]of r)f.v!==we&&!(d in a)&&l.push(d);return l},setPrototypeOf(){Ll()}})}function Ii(e){try{if(e!==null&&typeof e=="object"&&Ct in e)return e[Ct]}catch{}return e}function wc(e,t){return Object.is(Ii(e),Ii(t))}var Do,Is,Os,Ls;function kc(){if(Do===void 0){Do=window,Is=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Os=rr(t,"firstChild").get,Ls=rr(t,"nextSibling").get,Pi(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Pi(r)&&(r.__t=void 0)}}function Nt(e=""){return document.createTextNode(e)}function Dt(e){return Os.call(e)}function zn(e){return Ls.call(e)}function k(e,t){return Dt(e)}function H(e,t=!1){{var r=Dt(e);return r instanceof Comment&&r.data===""?zn(r):r}}function z(e,t=1,r=!1){let n=e;for(;t--;)n=zn(n);return n}function Sc(e){e.textContent=""}function Rs(){return!1}function ti(e,t,r){return document.createElementNS(t??gs,e,void 0)}function Ac(e,t){if(t){const r=document.body;e.autofocus=!0,Pt(()=>{document.activeElement===r&&e.focus()})}}let Oi=!1;function Ec(){Oi||(Oi=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function io(e){var t=G,r=B;at(null),lt(null);try{return e()}finally{at(t),lt(r)}}function Mc(e,t,r,n=r){e.addEventListener(t,()=>io(r));const o=e.__on_r;o?e.__on_r=()=>{o(),n(!0)}:e.__on_r=()=>n(!0),Ec()}function js(e){B===null&&(G===null&&Nl(),Pl()),lr&&Cl()}function zc(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function wt(e,t){var r=B;r!==null&&(r.f&je)!==0&&(e|=je);var n={ctx:Se,deps:null,nodes:null,f:e|Pe|it,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null},o=n;if((e&en)!==0)Xr!==null?Xr.push(n):zt(n);else if(t!==null){try{Qr(n)}catch(s){throw Ne(n),s}o.deps===null&&o.teardown===null&&o.nodes===null&&o.first===o.last&&(o.f&rn)===0&&(o=o.first,(e&cr)!==0&&(e&sr)!==0&&o!==null&&(o.f|=sr))}if(o!==null&&(o.parent=r,r!==null&&zc(o,r),G!==null&&(G.f&$e)!==0&&(e&Pr)===0)){var i=G;(i.effects??(i.effects=[])).push(o)}return n}function ri(){return G!==null&&!_t}function so(e){const t=wt(Mr,null);return fe(t,Ce),t.teardown=e,t}function Jn(e){js();var t=B.f,r=!G&&(t&yt)!==0&&(t&tn)===0;if(r){var n=Se;(n.e??(n.e=[])).push(e)}else return Ds(e)}function Ds(e){return wt(en|us,e)}function Tc(e){return js(),wt(Mr|us,e)}function Cc(e){or.ensure();const t=wt(Pr|rn,e);return(r={})=>new Promise(n=>{r.outro?Ar(t,()=>{Ne(t),n(void 0)}):(Ne(t),n(void 0))})}function ni(e){return wt(en,e)}function Pc(e){return wt(Xo|rn,e)}function oi(e,t=0){return wt(Mr|t,e)}function Z(e,t=[],r=[],n=[]){Ts(n,t,r,o=>{wt(Mr,()=>e(...o.map(c)))})}function Tn(e,t=0){var r=wt(cr|t,e);return r}function Fs(e,t=0){var r=wt(no|t,e);return r}function Be(e){return wt(yt|rn,e)}function Vs(e){var t=e.teardown;if(t!==null){const r=lr,n=G;Li(!0),at(null);try{t.call(null)}finally{Li(r),at(n)}}}function ii(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const o=r.ac;o!==null&&io(()=>{o.abort(gr)});var n=r.next;(r.f&Pr)!==0?r.parent=null:Ne(r,t),r=n}}function Nc(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&yt)===0&&Ne(t),t=r}}function Ne(e,t=!0){var r=!1;(t||(e.f&El)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Gs(e.nodes.start,e.nodes.end),r=!0),ii(e,t&&!r),wn(e,0),fe(e,Tt);var n=e.nodes&&e.nodes.t;if(n!==null)for(const i of n)i.stop();Vs(e);var o=e.parent;o!==null&&o.first!==null&&Bs(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=null}function Gs(e,t){for(;e!==null;){var r=e===t?null:zn(e);e.remove(),e=r}}function Bs(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Ar(e,t,r=!0){var n=[];Ws(e,n,!0);var o=()=>{r&&Ne(e),t&&t()},i=n.length;if(i>0){var s=()=>--i||o();for(var a of n)a.out(s)}else o()}function Ws(e,t,r){if((e.f&je)===0){e.f^=je;var n=e.nodes&&e.nodes.t;if(n!==null)for(const a of n)(a.is_global||r)&&t.push(a);for(var o=e.first;o!==null;){var i=o.next,s=(o.f&sr)!==0||(o.f&yt)!==0&&(e.f&cr)!==0;Ws(o,t,s?r:!1),o=i}}}function si(e){Hs(e,!0)}function Hs(e,t){if((e.f&je)!==0){e.f^=je;for(var r=e.first;r!==null;){var n=r.next,o=(r.f&sr)!==0||(r.f&yt)!==0;Hs(r,o?t:!1),r=n}var i=e.nodes&&e.nodes.t;if(i!==null)for(const s of i)(s.is_global||t)&&s.in()}}function ai(e,t){if(e.nodes)for(var r=e.nodes.start,n=e.nodes.end;r!==null;){var o=r===n?null:zn(r);t.append(r),r=o}}let Un=!1,lr=!1;function Li(e){lr=e}let G=null,_t=!1;function at(e){G=e}let B=null;function lt(e){B=e}let st=null;function Ks(e){G!==null&&(st===null?st=[e]:st.push(e))}let Ge=null,Ue=0,nt=null;function $c(e){nt=e}let qs=1,_r=0,Er=_r;function Ri(e){Er=e}function Us(){return++qs}function Cn(e){var t=e.f;if((t&Pe)!==0)return!0;if(t&$e&&(e.f&=~zr),(t&xt)!==0){for(var r=e.deps,n=r.length,o=0;o<n;o++){var i=r[o];if(Cn(i)&&Cs(i),i.wv>e.wv)return!0}(t&it)!==0&&Te===null&&fe(e,Ce)}return!1}function Ys(e,t,r=!0){var n=e.reactions;if(n!==null&&!(st!==null&&Yr.call(st,e)))for(var o=0;o<n.length;o++){var i=n[o];(i.f&$e)!==0?Ys(i,t,!1):t===i&&(r?fe(i,Pe):(i.f&Ce)!==0&&fe(i,xt),zt(i))}}function Js(e){var m;var t=Ge,r=Ue,n=nt,o=G,i=st,s=Se,a=_t,l=Er,d=e.f;Ge=null,Ue=0,nt=null,G=(d&(yt|Pr))===0?e:null,st=null,Jr(e.ctx),_t=!1,Er=++_r,e.ac!==null&&(io(()=>{e.ac.abort(gr)}),e.ac=null);try{e.f|=To;var f=e.fn,v=f();e.f|=tn;var u=e.deps,g=F==null?void 0:F.is_fork;if(Ge!==null){var h;if(g||wn(e,Ue),u!==null&&Ue>0)for(u.length=Ue+Ge.length,h=0;h<Ge.length;h++)u[Ue+h]=Ge[h];else e.deps=u=Ge;if(ri()&&(e.f&it)!==0)for(h=Ue;h<u.length;h++)((m=u[h]).reactions??(m.reactions=[])).push(e)}else!g&&u!==null&&Ue<u.length&&(wn(e,Ue),u.length=Ue);if(En()&&nt!==null&&!_t&&u!==null&&(e.f&($e|xt|Pe))===0)for(h=0;h<nt.length;h++)Ys(nt[h],e);if(o!==null&&o!==e){if(_r++,o.deps!==null)for(let p=0;p<r;p+=1)o.deps[p].rv=_r;if(t!==null)for(const p of t)p.rv=_r;nt!==null&&(n===null?n=nt:n.push(...nt))}return(e.f&nr)!==0&&(e.f^=nr),v}catch(p){return ws(p)}finally{e.f^=To,Ge=t,Ue=r,nt=n,G=o,st=i,Jr(s),_t=a,Er=l}}function Ic(e,t){let r=t.reactions;if(r!==null){var n=xl.call(r,e);if(n!==-1){var o=r.length-1;o===0?r=t.reactions=null:(r[n]=r[o],r.pop())}}if(r===null&&(t.f&$e)!==0&&(Ge===null||!Yr.call(Ge,t))){var i=t;(i.f&it)!==0&&(i.f^=it,i.f&=~zr),Zo(i),_c(i),wn(i,0)}}function wn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Ic(e,r[n])}function Qr(e){var t=e.f;if((t&Tt)===0){fe(e,Ce);var r=B,n=Un;B=e,Un=!0;try{(t&(cr|no))!==0?Nc(e):ii(e),Vs(e);var o=Js(e);e.teardown=typeof o=="function"?o:null,e.wv=qs;var i;Eo&&ec&&(e.f&Pe)!==0&&e.deps}finally{Un=n,B=r}}}async function Oc(){await Promise.resolve(),ic()}function c(e){var t=e.f,r=(t&$e)!==0;if(G!==null&&!_t){var n=B!==null&&(B.f&Tt)!==0;if(!n&&(st===null||!Yr.call(st,e))){var o=G.deps;if((G.f&To)!==0)e.rv<_r&&(e.rv=_r,Ge===null&&o!==null&&o[Ue]===e?Ue++:Ge===null?Ge=[e]:Ge.push(e));else{(G.deps??(G.deps=[])).push(e);var i=e.reactions;i===null?e.reactions=[G]:Yr.call(i,G)||i.push(G)}}}if(lr&&ir.has(e))return ir.get(e);if(r){var s=e;if(lr){var a=s.v;return((s.f&Ce)===0&&s.reactions!==null||Zs(s))&&(a=ei(s)),ir.set(s,a),a}var l=(s.f&it)===0&&!_t&&G!==null&&(Un||(G.f&it)!==0),d=(s.f&tn)===0;Cn(s)&&(l&&(s.f|=it),Cs(s)),l&&!d&&(Ps(s),Xs(s))}if(Te!=null&&Te.has(e))return Te.get(e);if((e.f&nr)!==0)throw e.v;return e.v}function Xs(e){if(e.f|=it,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&$e)!==0&&(t.f&it)===0&&(Ps(t),Xs(t))}function Zs(e){if(e.v===we)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(ir.has(t)||(t.f&$e)!==0&&Zs(t))return!0;return!1}function Tr(e){var t=_t;try{return _t=!0,e()}finally{_t=t}}function mr(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Ct in e)Fo(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&Ct in r&&Fo(r)}}}function Fo(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{Fo(e[n],t)}catch{}const r=Jo(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=cs(r);for(let o in n){const i=n[o].get;if(i)try{i.call(e)}catch{}}}}}function Lc(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Rc=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function jc(e){return Rc.includes(e)}const Dc={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Fc(e){return e=e.toLowerCase(),Dc[e]??e}const Vc=["touchstart","touchmove"];function Gc(e){return Vc.includes(e)}const xr=Symbol("events"),Qs=new Set,Vo=new Set;function ea(e,t,r,n={}){function o(i){if(n.capture||Go.call(t,i),!i.cancelBubble)return io(()=>r==null?void 0:r.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Pt(()=>{t.addEventListener(e,o,n)}):t.addEventListener(e,o,n),o}function Bc(e,t,r,n,o){var i={capture:n,passive:o},s=ea(e,t,r,i);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&so(()=>{t.removeEventListener(e,s,i)})}function q(e,t,r){(t[xr]??(t[xr]={}))[e]=r}function Pn(e){for(var t=0;t<e.length;t++)Qs.add(e[t]);for(var r of Vo)r(e)}let ji=null;function Go(e){var p,x;var t=this,r=t.ownerDocument,n=e.type,o=((p=e.composedPath)==null?void 0:p.call(e))||[],i=o[0]||e.target;ji=e;var s=0,a=ji===e&&e[xr];if(a){var l=o.indexOf(a);if(l!==-1&&(t===document||t===window)){e[xr]=t;return}var d=o.indexOf(t);if(d===-1)return;l<=d&&(s=l)}if(i=o[s]||e.target,i!==t){yl(e,"currentTarget",{configurable:!0,get(){return i||r}});var f=G,v=B;at(null),lt(null);try{for(var u,g=[];i!==null;){var h=i.assignedSlot||i.parentNode||i.host||null;try{var m=(x=i[xr])==null?void 0:x[n];m!=null&&(!i.disabled||e.target===i)&&m.call(i,e)}catch(P){u?g.push(P):u=P}if(e.cancelBubble||h===t||h===null)break;i=h}if(u){for(let P of g)queueMicrotask(()=>{throw P});throw u}}finally{e[xr]=t,delete e.currentTarget,at(f),lt(v)}}}var as;const xo=((as=globalThis==null?void 0:globalThis.window)==null?void 0:as.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Wc(e){return(xo==null?void 0:xo.createHTML(e))??e}function ta(e){var t=ti("template");return t.innerHTML=Wc(e.replaceAll("<!>","<!---->")),t.content}function Cr(e,t){var r=B;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function L(e,t){var r=(t&ql)!==0,n=(t&Ul)!==0,o,i=!e.startsWith("<!>");return()=>{o===void 0&&(o=ta(i?e:"<!>"+e),r||(o=Dt(o)));var s=n||Is?document.importNode(o,!0):o.cloneNode(!0);if(r){var a=Dt(s),l=s.lastChild;Cr(a,l)}else Cr(s,s);return s}}function Hc(e,t,r="svg"){var n=!e.startsWith("<!>"),o=`<${r}>${n?e:"<!>"+e}</${r}>`,i;return()=>{if(!i){var s=ta(o),a=Dt(s);i=Dt(a)}var l=i.cloneNode(!0);return Cr(l,l),l}}function Kc(e,t){return Hc(e,t,"svg")}function Yn(e=""){{var t=Nt(e+"");return Cr(t,t),t}}function Q(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Nt();return e.append(t,r),Cr(t,r),e}function E(e,t){e!==null&&e.before(t)}function xe(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=`${r}`)}function qc(e,t){return Uc(e,t)}const Vn=new Map;function Uc(e,{target:t,anchor:r,props:n={},events:o,context:i,intro:s=!0,transformError:a}){kc();var l=void 0,d=Cc(()=>{var f=r??t.appendChild(Nt());cc(f,{pending:()=>{}},g=>{Gt({});var h=Se;i&&(h.c=i),o&&(n.$$events=o),l=e(g,n)||{},Bt()},a);var v=new Set,u=g=>{for(var h=0;h<g.length;h++){var m=g[h];if(!v.has(m)){v.add(m);var p=Gc(m);for(const S of[t,document]){var x=Vn.get(S);x===void 0&&(x=new Map,Vn.set(S,x));var P=x.get(m);P===void 0?(S.addEventListener(m,Go,{passive:p}),x.set(m,1)):x.set(m,P+1)}}}};return u(ro(Qs)),Vo.add(u),()=>{var p;for(var g of v)for(const x of[t,document]){var h=Vn.get(x),m=h.get(g);--m==0?(x.removeEventListener(g,Go),h.delete(g),h.size===0&&Vn.delete(x)):h.set(g,m)}Vo.delete(u),f!==r&&((p=f.parentNode)==null||p.removeChild(f))}});return Yc.set(l,d),l}let Yc=new WeakMap;var bt,Et,Je,Sr,kn,Sn,to;class li{constructor(t,r=!0){ht(this,"anchor");W(this,bt,new Map);W(this,Et,new Map);W(this,Je,new Map);W(this,Sr,new Set);W(this,kn,!0);W(this,Sn,t=>{if(b(this,bt).has(t)){var r=b(this,bt).get(t),n=b(this,Et).get(r);if(n)si(n),b(this,Sr).delete(r);else{var o=b(this,Je).get(r);o&&(o.effect.f&je)===0&&(b(this,Et).set(r,o.effect),b(this,Je).delete(r),o.fragment.lastChild.remove(),this.anchor.before(o.fragment),n=o.effect)}for(const[i,s]of b(this,bt)){if(b(this,bt).delete(i),i===t)break;const a=b(this,Je).get(s);a&&(Ne(a.effect),b(this,Je).delete(s))}for(const[i,s]of b(this,Et)){if(i===r||b(this,Sr).has(i)||(s.f&je)!==0)continue;const a=()=>{if(Array.from(b(this,bt).values()).includes(i)){var d=document.createDocumentFragment();ai(s,d),d.append(Nt()),b(this,Je).set(i,{effect:s,fragment:d})}else Ne(s);b(this,Sr).delete(i),b(this,Et).delete(i)};b(this,kn)||!n?(b(this,Sr).add(i),Ar(s,a,!1)):a()}}});W(this,to,t=>{b(this,bt).delete(t);const r=Array.from(b(this,bt).values());for(const[n,o]of b(this,Je))r.includes(n)||(Ne(o.effect),b(this,Je).delete(n))});this.anchor=t,D(this,kn,r)}ensure(t,r){var n=F,o=Rs();if(r&&!b(this,Et).has(t)&&!b(this,Je).has(t))if(o){var i=document.createDocumentFragment(),s=Nt();i.append(s),b(this,Je).set(t,{effect:Be(()=>r(s)),fragment:i})}else b(this,Et).set(t,Be(()=>r(this.anchor)));if(b(this,bt).set(n,t),o){for(const[a,l]of b(this,Et))a===t?n.unskip_effect(l):n.skip_effect(l);for(const[a,l]of b(this,Je))a===t?n.unskip_effect(l.effect):n.skip_effect(l.effect);n.oncommit(b(this,Sn)),n.ondiscard(b(this,to))}else b(this,Sn).call(this,n)}}bt=new WeakMap,Et=new WeakMap,Je=new WeakMap,Sr=new WeakMap,kn=new WeakMap,Sn=new WeakMap,to=new WeakMap;function K(e,t,r=!1){var n=new li(e),o=r?sr:0;function i(s,a){n.ensure(s,a)}Tn(()=>{var s=!1;t((a,l=0)=>{s=!0,i(l,a)}),s||i(-1,null)},o)}function Ft(e,t){return t}function Jc(e,t,r){for(var n=[],o=t.length,i,s=t.length,a=0;a<o;a++){let v=t[a];Ar(v,()=>{if(i){if(i.pending.delete(v),i.done.add(v),i.pending.size===0){var u=e.outrogroups;Bo(e,ro(i.done)),u.delete(i),u.size===0&&(e.outrogroups=null)}}else s-=1},!1)}if(s===0){var l=n.length===0&&r!==null;if(l){var d=r,f=d.parentNode;Sc(f),f.append(d),e.items.clear()}Bo(e,t,!l)}else i={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(i)}function Bo(e,t,r=!0){var n;if(e.pending.size>0){n=new Set;for(const s of e.pending.values())for(const a of s)n.add(e.items.get(a).e)}for(var o=0;o<t.length;o++){var i=t[o];if(n!=null&&n.has(i)){i.f|=Mt;const s=document.createDocumentFragment();ai(i,s)}else Ne(t[o],r)}}var Di;function Vt(e,t,r,n,o,i=null){var s=e,a=new Map,l=(t&hs)!==0;if(l){var d=e;s=d.appendChild(Nt())}var f=null,v=Qo(()=>{var S=r();return Yo(S)?S:S==null?[]:ro(S)}),u,g=new Map,h=!0;function m(S){(P.effect.f&Tt)===0&&(P.pending.delete(S),P.fallback=f,Xc(P,u,s,t,n),f!==null&&(u.length===0?(f.f&Mt)===0?si(f):(f.f^=Mt,bn(f,null,s)):Ar(f,()=>{f=null})))}function p(S){P.pending.delete(S)}var x=Tn(()=>{u=c(v);for(var S=u.length,y=new Set,M=F,N=Rs(),O=0;O<S;O+=1){var A=u[O],U=n(A,O),re=h?null:a.get(U);re?(re.v&&Zr(re.v,A),re.i&&Zr(re.i,O),N&&M.unskip_effect(re.e)):(re=Zc(a,h?s:Di??(Di=Nt()),A,U,O,o,t,r),h||(re.e.f|=Mt),a.set(U,re)),y.add(U)}if(S===0&&i&&!f&&(h?f=Be(()=>i(s)):(f=Be(()=>i(Di??(Di=Nt()))),f.f|=Mt)),S>y.size&&Tl(),!h)if(g.set(M,y),N){for(const[Ae,le]of a)y.has(Ae)||M.skip_effect(le.e);M.oncommit(m),M.ondiscard(p)}else m(M);c(v)}),P={effect:x,items:a,pending:g,outrogroups:null,fallback:f};h=!1}function pn(e){for(;e!==null&&(e.f&yt)===0;)e=e.next;return e}function Xc(e,t,r,n,o){var re,Ae,le,Y,ct,pe,ce,Ie,me;var i=(n&Vl)!==0,s=t.length,a=e.items,l=pn(e.effect.first),d,f=null,v,u=[],g=[],h,m,p,x;if(i)for(x=0;x<s;x+=1)h=t[x],m=o(h,x),p=a.get(m).e,(p.f&Mt)===0&&((Ae=(re=p.nodes)==null?void 0:re.a)==null||Ae.measure(),(v??(v=new Set)).add(p));for(x=0;x<s;x+=1){if(h=t[x],m=o(h,x),p=a.get(m).e,e.outrogroups!==null)for(const ee of e.outrogroups)ee.pending.delete(p),ee.done.delete(p);if((p.f&Mt)!==0)if(p.f^=Mt,p===l)bn(p,null,r);else{var P=f?f.next:l;p===e.effect.last&&(e.effect.last=p.prev),p.prev&&(p.prev.next=p.next),p.next&&(p.next.prev=p.prev),Ut(e,f,p),Ut(e,p,P),bn(p,P,r),f=p,u=[],g=[],l=pn(f.next);continue}if((p.f&je)!==0&&(si(p),i&&((Y=(le=p.nodes)==null?void 0:le.a)==null||Y.unfix(),(v??(v=new Set)).delete(p))),p!==l){if(d!==void 0&&d.has(p)){if(u.length<g.length){var S=g[0],y;f=S.prev;var M=u[0],N=u[u.length-1];for(y=0;y<u.length;y+=1)bn(u[y],S,r);for(y=0;y<g.length;y+=1)d.delete(g[y]);Ut(e,M.prev,N.next),Ut(e,f,M),Ut(e,N,S),l=S,f=N,x-=1,u=[],g=[]}else d.delete(p),bn(p,l,r),Ut(e,p.prev,p.next),Ut(e,p,f===null?e.effect.first:f.next),Ut(e,f,p),f=p;continue}for(u=[],g=[];l!==null&&l!==p;)(d??(d=new Set)).add(l),g.push(l),l=pn(l.next);if(l===null)continue}(p.f&Mt)===0&&u.push(p),f=p,l=pn(p.next)}if(e.outrogroups!==null){for(const ee of e.outrogroups)ee.pending.size===0&&(Bo(e,ro(ee.done)),(ct=e.outrogroups)==null||ct.delete(ee));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||d!==void 0){var O=[];if(d!==void 0)for(p of d)(p.f&je)===0&&O.push(p);for(;l!==null;)(l.f&je)===0&&l!==e.fallback&&O.push(l),l=pn(l.next);var A=O.length;if(A>0){var U=(n&hs)!==0&&s===0?r:null;if(i){for(x=0;x<A;x+=1)(ce=(pe=O[x].nodes)==null?void 0:pe.a)==null||ce.measure();for(x=0;x<A;x+=1)(me=(Ie=O[x].nodes)==null?void 0:Ie.a)==null||me.fix()}Jc(e,O,U)}}i&&Pt(()=>{var ee,$;if(v!==void 0)for(p of v)($=(ee=p.nodes)==null?void 0:ee.a)==null||$.apply()})}function Zc(e,t,r,n,o,i,s,a){var l=(s&Dl)!==0?(s&Gl)===0?xc(r,!1,!1):ar(r):null,d=(s&Fl)!==0?ar(o):null;return{v:l,i:d,e:Be(()=>(i(t,l??r,d??o,a),()=>{e.delete(n)}))}}function bn(e,t,r){if(e.nodes)for(var n=e.nodes.start,o=e.nodes.end,i=t&&(t.f&Mt)===0?t.nodes.start:r;n!==null;){var s=zn(n);if(i.before(n),n===o)return;n=s}}function Ut(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function Qc(e,t,r=!1,n=!1,o=!1){var i=e,s="";Z(()=>{var a=B;if(s!==(s=t()??"")&&(a.nodes!==null&&(Gs(a.nodes.start,a.nodes.end),a.nodes=null),s!=="")){var l=r?bs:n?Yl:void 0,d=ti(r?"svg":n?"math":"template",l);d.innerHTML=s;var f=r||n?d:d.content;if(Cr(Dt(f),f.lastChild),r||n)for(;Dt(f);)i.before(Dt(f));else i.before(f)}})}function ae(e,t,r,n,o){var a;var i=(a=t.$$slots)==null?void 0:a[r],s=!1;i===!0&&(i=t.children,s=!0),i===void 0||i(e,s?()=>n:n)}function Wo(e,t,...r){var n=new li(e);Tn(()=>{const o=t()??null;n.ensure(o,o&&(i=>o(i,...r)))},sr)}function ed(e,t,r,n,o,i){var s=null,a=e,l=new li(a,!1);Tn(()=>{const d=t()||null;var f=bs;if(d===null){l.ensure(null,null);return}return l.ensure(d,v=>{if(d){if(s=ti(d,f),Cr(s,s),n){var u=s.appendChild(Nt());n(s,u)}B.nodes.end=s,v.before(s)}}),()=>{}},sr),so(()=>{})}function td(e,t){var r=void 0,n;Fs(()=>{r!==(r=t())&&(n&&(Ne(n),n=null),r&&(n=Be(()=>{ni(()=>r(e))})))})}function ra(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(r=ra(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function na(){for(var e,t,r=0,n="",o=arguments.length;r<o;r++)(e=arguments[r])&&(t=ra(e))&&(n&&(n+=" "),n+=t);return n}function Ze(e){return typeof e=="object"?na(e):e??""}const Fi=[...` 	
\r\f \v\uFEFF`];function rd(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var o of Object.keys(r))if(r[o])n=n?n+" "+o:o;else if(n.length)for(var i=o.length,s=0;(s=n.indexOf(o,s))>=0;){var a=s+i;(s===0||Fi.includes(n[s-1]))&&(a===n.length||Fi.includes(n[a]))?n=(s===0?"":n.substring(0,s))+n.substring(a+1):s=a}}return n===""?null:n}function Vi(e,t=!1){var r=t?" !important;":";",n="";for(var o of Object.keys(e)){var i=e[o];i!=null&&i!==""&&(n+=" "+o+": "+i+r)}return n}function yo(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function nd(e,t){if(t){var r="",n,o;if(Array.isArray(t)?(n=t[0],o=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,s=0,a=!1,l=[];n&&l.push(...Object.keys(n).map(yo)),o&&l.push(...Object.keys(o).map(yo));var d=0,f=-1;const m=e.length;for(var v=0;v<m;v++){var u=e[v];if(a?u==="/"&&e[v-1]==="*"&&(a=!1):i?i===u&&(i=!1):u==="/"&&e[v+1]==="*"?a=!0:u==='"'||u==="'"?i=u:u==="("?s++:u===")"&&s--,!a&&i===!1&&s===0){if(u===":"&&f===-1)f=v;else if(u===";"||v===m-1){if(f!==-1){var g=yo(e.substring(d,f).trim());if(!l.includes(g)){u!==";"&&v++;var h=e.substring(d,v).trim();r+=" "+h+";"}}d=v+1,f=-1}}}}return n&&(r+=Vi(n)),o&&(r+=Vi(o,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Qe(e,t,r,n,o,i){var s=e.__className;if(s!==r||s===void 0){var a=rd(r,n,i);a==null?e.removeAttribute("class"):t?e.className=a:e.setAttribute("class",a),e.__className=r}else if(i&&o!==i)for(var l in i){var d=!!i[l];(o==null||d!==!!o[l])&&e.classList.toggle(l,d)}return i}function wo(e,t={},r,n){for(var o in r){var i=r[o];t[o]!==i&&(r[o]==null?e.style.removeProperty(o):e.style.setProperty(o,i,n))}}function oa(e,t,r,n){var o=e.__style;if(o!==t){var i=nd(t,n);i==null?e.removeAttribute("style"):e.style.cssText=i,e.__style=t}else n&&(Array.isArray(n)?(wo(e,r==null?void 0:r[0],n[0]),wo(e,r==null?void 0:r[1],n[1],"important")):wo(e,r,n));return n}function Ho(e,t,r=!1){if(e.multiple){if(t==null)return;if(!Yo(t))return Xl();for(var n of e.options)n.selected=t.includes(Gi(n));return}for(n of e.options){var o=Gi(n);if(wc(o,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function od(e){var t=new MutationObserver(()=>{Ho(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),so(()=>{t.disconnect()})}function Gi(e){return"__value"in e?e.__value:e.value}const hn=Symbol("class"),mn=Symbol("style"),ia=Symbol("is custom element"),sa=Symbol("is html"),id=ps?"option":"OPTION",sd=ps?"select":"SELECT";function ad(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Xn(e,t,r,n){var o=aa(e);o[t]!==(o[t]=r)&&(t==="loading"&&(e[Ml]=r),r==null?e.removeAttribute(t):typeof r!="string"&&la(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function ld(e,t,r,n,o=!1,i=!1){var s=aa(e),a=s[ia],l=!s[sa],d=t||{},f=e.nodeName===id;for(var v in t)v in r||(r[v]=null);r.class?r.class=Ze(r.class):r[hn]&&(r.class=null),r[mn]&&(r.style??(r.style=null));var u=la(e);for(const y in r){let M=r[y];if(f&&y==="value"&&M==null){e.value=e.__value="",d[y]=M;continue}if(y==="class"){var g=e.namespaceURI==="http://www.w3.org/1999/xhtml";Qe(e,g,M,n,t==null?void 0:t[hn],r[hn]),d[y]=M,d[hn]=r[hn];continue}if(y==="style"){oa(e,M,t==null?void 0:t[mn],r[mn]),d[y]=M,d[mn]=r[mn];continue}var h=d[y];if(!(M===h&&!(M===void 0&&e.hasAttribute(y)))){d[y]=M;var m=y[0]+y[1];if(m!=="$$")if(m==="on"){const N={},O="$$"+y;let A=y.slice(2);var p=jc(A);if(Lc(A)&&(A=A.slice(0,-7),N.capture=!0),!p&&h){if(M!=null)continue;e.removeEventListener(A,d[O],N),d[O]=null}if(p)q(A,e,M),Pn([A]);else if(M!=null){let U=function(re){d[y].call(this,re)};var S=U;d[O]=ea(A,e,U,N)}}else if(y==="style")Xn(e,y,M);else if(y==="autofocus")Ac(e,!!M);else if(!a&&(y==="__value"||y==="value"&&M!=null))e.value=e.__value=M;else if(y==="selected"&&f)ad(e,M);else{var x=y;l||(x=Fc(x));var P=x==="defaultValue"||x==="defaultChecked";if(M==null&&!a&&!P)if(s[y]=null,x==="value"||x==="checked"){let N=e;const O=t===void 0;if(x==="value"){let A=N.defaultValue;N.removeAttribute(x),N.defaultValue=A,N.value=N.__value=O?A:null}else{let A=N.defaultChecked;N.removeAttribute(x),N.defaultChecked=A,N.checked=O?A:!1}}else e.removeAttribute(y);else P||u.includes(x)&&(a||typeof M!="string")?(e[x]=M,x in s&&(s[x]=we)):typeof M!="function"&&Xn(e,x,M)}}}return d}function Zn(e,t,r=[],n=[],o=[],i,s=!1,a=!1){Ts(o,r,n,l=>{var d=void 0,f={},v=e.nodeName===sd,u=!1;if(Fs(()=>{var h=t(...l.map(c)),m=ld(e,d,h,i,s,a);u&&v&&"value"in h&&Ho(e,h.value);for(let x of Object.getOwnPropertySymbols(f))h[x]||Ne(f[x]);for(let x of Object.getOwnPropertySymbols(h)){var p=h[x];x.description===Jl&&(!d||p!==d[x])&&(f[x]&&Ne(f[x]),f[x]=Be(()=>td(e,()=>p))),m[x]=p}d=m}),v){var g=e;ni(()=>{Ho(g,d.value,!0),od(g)})}u=!0})}function aa(e){return e.__attributes??(e.__attributes={[ia]:e.nodeName.includes("-"),[sa]:e.namespaceURI===gs})}var Bi=new Map;function la(e){var t=e.getAttribute("is")||e.nodeName,r=Bi.get(t);if(r)return r;Bi.set(t,r=[]);for(var n,o=e,i=Element.prototype;i!==o;){n=cs(o);for(var s in n)n[s].set&&r.push(s);o=Jo(o)}return r}function Fr(e,t,r=t){var n=new WeakSet;Mc(e,"input",async o=>{var i=o?e.defaultValue:e.value;if(i=ko(e)?So(i):i,r(i),F!==null&&n.add(F),await Oc(),i!==(i=t())){var s=e.selectionStart,a=e.selectionEnd,l=e.value.length;if(e.value=i??"",a!==null){var d=e.value.length;s===a&&a===l&&d>l?(e.selectionStart=d,e.selectionEnd=d):(e.selectionStart=s,e.selectionEnd=Math.min(a,d))}}}),Tr(t)==null&&e.value&&(r(ko(e)?So(e.value):e.value),F!==null&&n.add(F)),oi(()=>{var o=t();if(e===document.activeElement){var i=Co??F;if(n.has(i))return}ko(e)&&o===So(e.value)||e.type==="date"&&!o&&!e.value||o!==e.value&&(e.value=o??"")})}function ko(e){var t=e.type;return t==="number"||t==="range"}function So(e){return e===""?null:+e}function Wi(e,t){return e===t||(e==null?void 0:e[Ct])===t}function ca(e={},t,r,n){return ni(()=>{var o,i;return oi(()=>{o=i,i=[],Tr(()=>{e!==r(...i)&&(t(e,...i),o&&Wi(r(...o),e)&&t(null,...o))})}),()=>{Pt(()=>{i&&Wi(r(...i),e)&&t(null,...i)})}}),e}function cd(e=!1){const t=Se,r=t.l.u;if(!r)return;let n=()=>mr(t.s);if(e){let o=0,i={};const s=Mn(()=>{let a=!1;const l=t.s;for(const d in l)l[d]!==i[d]&&(i[d]=l[d],a=!0);return a&&o++,o});n=()=>c(s)}r.b.length&&Tc(()=>{Hi(t,n),Mo(r.b)}),Jn(()=>{const o=Tr(()=>r.m.map(Al));return()=>{for(const i of o)typeof i=="function"&&i()}}),r.a.length&&Jn(()=>{Hi(t,n),Mo(r.a)})}function Hi(e,t){if(e.l.s)for(const r of e.l.s)c(r);t()}let Gn=!1;function dd(e){var t=Gn;try{return Gn=!1,[e(),Gn]}finally{Gn=t}}const fd={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ud(e,t,r){return new Proxy({props:e,exclude:t},fd)}const vd={get(e,t){if(!e.exclude.includes(t))return c(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var n=B;try{lt(e.parent_effect),e.special[t]=ke({get[t](){return e.props[t]}},t,ms)}finally{lt(n)}}return e.special[t](r),xn(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),xn(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ne(e,t){return new Proxy({props:e,exclude:t,special:{},version:ar(0),parent_effect:B},vd)}const pd={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(vn(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let o=e.props[n];vn(o)&&(o=o());const i=rr(o,t);if(i&&i.set)return i.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(vn(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const o=rr(n,t);return o&&!o.configurable&&(o.configurable=!0),o}}},has(e,t){if(t===Ct||t===vs)return!1;for(let r of e.props)if(vn(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(vn(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function ue(...e){return new Proxy({props:e},pd)}function ke(e,t,r,n){var S;var o=!An||(r&Wl)!==0,i=(r&Hl)!==0,s=(r&Kl)!==0,a=n,l=!0,d=()=>(l&&(l=!1,a=s?Tr(n):n),a),f;if(i){var v=Ct in e||vs in e;f=((S=rr(e,t))==null?void 0:S.set)??(v&&t in e?y=>e[t]=y:void 0)}var u,g=!1;i?[u,g]=dd(()=>e[t]):u=e[t],u===void 0&&n!==void 0&&(u=d(),f&&(o&&Il(),f(u)));var h;if(o?h=()=>{var y=e[t];return y===void 0?d():(l=!0,y)}:h=()=>{var y=e[t];return y!==void 0&&(a=void 0),y===void 0?a:y},o&&(r&ms)===0)return h;if(f){var m=e.$$legacy;return(function(y,M){return arguments.length>0?((!o||!M||m||g)&&f(M?h():y),y):h()})}var p=!1,x=((r&Bl)!==0?Mn:Qo)(()=>(p=!1,h()));i&&c(x);var P=B;return(function(y,M){if(arguments.length>0){const N=M?c(x):o&&i?Xe(y):y;return _(x,N),p=!0,a!==void 0&&(a=N),y}return lr&&p||(P.f&Tt)!==0?x.v:c(x)})}const hd="5";var ls;typeof window<"u"&&((ls=window.__svelte??(window.__svelte={})).v??(ls.v=new Set)).add(hd);const Nn="";async function md(){const e=await fetch(`${Nn}/api/status`);if(!e.ok)throw new Error("상태 확인 실패");return e.json()}async function Dr(e,t=null,r=null){const n={provider:e};t&&(n.model=t),r&&(n.api_key=r);const o=await fetch(`${Nn}/api/configure`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!o.ok)throw new Error("설정 실패");return o.json()}async function gd(e){const t=await fetch(`${Nn}/api/models/${encodeURIComponent(e)}`);return t.ok?t.json():{models:[]}}function bd(e,{onProgress:t,onDone:r,onError:n}){const o=new AbortController;return fetch(`${Nn}/api/ollama/pull`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:e}),signal:o.signal}).then(async i=>{if(!i.ok){n==null||n("다운로드 실패");return}const s=i.body.getReader(),a=new TextDecoder;let l="";for(;;){const{done:d,value:f}=await s.read();if(d)break;l+=a.decode(f,{stream:!0});const v=l.split(`
`);l=v.pop()||"";for(const u of v)if(u.startsWith("data:"))try{const g=JSON.parse(u.slice(5).trim());g.total&&g.completed!==void 0?t==null||t({total:g.total,completed:g.completed,status:g.status}):g.status&&(t==null||t({status:g.status}))}catch{}}r==null||r()}).catch(i=>{i.name!=="AbortError"&&(n==null||n(i.message))}),{abort:()=>o.abort()}}function _d(e,t,r={},{onMeta:n,onChunk:o,onDone:i,onError:s},a=null){const l={question:t,stream:!0,...r};a&&a.length>0&&(l.history=a);const d=new AbortController;return fetch(`${Nn}/api/ask`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l),signal:d.signal}).then(async f=>{if(!f.ok){const p=await f.json().catch(()=>({}));s==null||s(p.detail||"스트리밍 실패");return}const v=f.body.getReader(),u=new TextDecoder;let g="",h=!1;for(;;){const{done:p,value:x}=await v.read();if(p)break;g+=u.decode(x,{stream:!0});const P=g.split(`
`);g=P.pop()||"";for(const S of P)if(S.startsWith("event:"))var m=S.slice(6).trim();else if(S.startsWith("data:")&&m){const y=S.slice(5).trim();try{const M=JSON.parse(y);m==="meta"?n==null||n(M):m==="chunk"?o==null||o(M.text):m==="error"?s==null||s(M.error):m==="done"&&(h||(h=!0,i==null||i()))}catch{}m=null}}h||(h=!0,i==null||i())}).catch(f=>{f.name!=="AbortError"&&(s==null||s(f.message))}),{abort:()=>d.abort()}}const xd=(e,t)=>{const r=new Array(e.length+t.length);for(let n=0;n<e.length;n++)r[n]=e[n];for(let n=0;n<t.length;n++)r[e.length+n]=t[n];return r},yd=(e,t)=>({classGroupId:e,validator:t}),da=(e=new Map,t=null,r)=>({nextPart:e,validators:t,classGroupId:r}),Qn="-",Ki=[],wd="arbitrary..",kd=e=>{const t=Ad(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:n}=e;return{getClassGroupId:s=>{if(s.startsWith("[")&&s.endsWith("]"))return Sd(s);const a=s.split(Qn),l=a[0]===""&&a.length>1?1:0;return fa(a,l,t)},getConflictingClassGroupIds:(s,a)=>{if(a){const l=n[s],d=r[s];return l?d?xd(d,l):l:d||Ki}return r[s]||Ki}}},fa=(e,t,r)=>{if(e.length-t===0)return r.classGroupId;const o=e[t],i=r.nextPart.get(o);if(i){const d=fa(e,t+1,i);if(d)return d}const s=r.validators;if(s===null)return;const a=t===0?e.join(Qn):e.slice(t).join(Qn),l=s.length;for(let d=0;d<l;d++){const f=s[d];if(f.validator(a))return f.classGroupId}},Sd=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const t=e.slice(1,-1),r=t.indexOf(":"),n=t.slice(0,r);return n?wd+n:void 0})(),Ad=e=>{const{theme:t,classGroups:r}=e;return Ed(r,t)},Ed=(e,t)=>{const r=da();for(const n in e){const o=e[n];ci(o,r,n,t)}return r},ci=(e,t,r,n)=>{const o=e.length;for(let i=0;i<o;i++){const s=e[i];Md(s,t,r,n)}},Md=(e,t,r,n)=>{if(typeof e=="string"){zd(e,t,r);return}if(typeof e=="function"){Td(e,t,r,n);return}Cd(e,t,r,n)},zd=(e,t,r)=>{const n=e===""?t:ua(t,e);n.classGroupId=r},Td=(e,t,r,n)=>{if(Pd(e)){ci(e(n),t,r,n);return}t.validators===null&&(t.validators=[]),t.validators.push(yd(r,e))},Cd=(e,t,r,n)=>{const o=Object.entries(e),i=o.length;for(let s=0;s<i;s++){const[a,l]=o[s];ci(l,ua(t,a),r,n)}},ua=(e,t)=>{let r=e;const n=t.split(Qn),o=n.length;for(let i=0;i<o;i++){const s=n[i];let a=r.nextPart.get(s);a||(a=da(),r.nextPart.set(s,a)),r=a}return r},Pd=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,Nd=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=Object.create(null),n=Object.create(null);const o=(i,s)=>{r[i]=s,t++,t>e&&(t=0,n=r,r=Object.create(null))};return{get(i){let s=r[i];if(s!==void 0)return s;if((s=n[i])!==void 0)return o(i,s),s},set(i,s){i in r?r[i]=s:o(i,s)}}},Ko="!",qi=":",$d=[],Ui=(e,t,r,n,o)=>({modifiers:e,hasImportantModifier:t,baseClassName:r,maybePostfixModifierPosition:n,isExternal:o}),Id=e=>{const{prefix:t,experimentalParseClassName:r}=e;let n=o=>{const i=[];let s=0,a=0,l=0,d;const f=o.length;for(let m=0;m<f;m++){const p=o[m];if(s===0&&a===0){if(p===qi){i.push(o.slice(l,m)),l=m+1;continue}if(p==="/"){d=m;continue}}p==="["?s++:p==="]"?s--:p==="("?a++:p===")"&&a--}const v=i.length===0?o:o.slice(l);let u=v,g=!1;v.endsWith(Ko)?(u=v.slice(0,-1),g=!0):v.startsWith(Ko)&&(u=v.slice(1),g=!0);const h=d&&d>l?d-l:void 0;return Ui(i,g,u,h)};if(t){const o=t+qi,i=n;n=s=>s.startsWith(o)?i(s.slice(o.length)):Ui($d,!1,s,void 0,!0)}if(r){const o=n;n=i=>r({className:i,parseClassName:o})}return n},Od=e=>{const t=new Map;return e.orderSensitiveModifiers.forEach((r,n)=>{t.set(r,1e6+n)}),r=>{const n=[];let o=[];for(let i=0;i<r.length;i++){const s=r[i],a=s[0]==="[",l=t.has(s);a||l?(o.length>0&&(o.sort(),n.push(...o),o=[]),n.push(s)):o.push(s)}return o.length>0&&(o.sort(),n.push(...o)),n}},Ld=e=>({cache:Nd(e.cacheSize),parseClassName:Id(e),sortModifiers:Od(e),...kd(e)}),Rd=/\s+/,jd=(e,t)=>{const{parseClassName:r,getClassGroupId:n,getConflictingClassGroupIds:o,sortModifiers:i}=t,s=[],a=e.trim().split(Rd);let l="";for(let d=a.length-1;d>=0;d-=1){const f=a[d],{isExternal:v,modifiers:u,hasImportantModifier:g,baseClassName:h,maybePostfixModifierPosition:m}=r(f);if(v){l=f+(l.length>0?" "+l:l);continue}let p=!!m,x=n(p?h.substring(0,m):h);if(!x){if(!p){l=f+(l.length>0?" "+l:l);continue}if(x=n(h),!x){l=f+(l.length>0?" "+l:l);continue}p=!1}const P=u.length===0?"":u.length===1?u[0]:i(u).join(":"),S=g?P+Ko:P,y=S+x;if(s.indexOf(y)>-1)continue;s.push(y);const M=o(x,p);for(let N=0;N<M.length;++N){const O=M[N];s.push(S+O)}l=f+(l.length>0?" "+l:l)}return l},Dd=(...e)=>{let t=0,r,n,o="";for(;t<e.length;)(r=e[t++])&&(n=va(r))&&(o&&(o+=" "),o+=n);return o},va=e=>{if(typeof e=="string")return e;let t,r="";for(let n=0;n<e.length;n++)e[n]&&(t=va(e[n]))&&(r&&(r+=" "),r+=t);return r},Fd=(e,...t)=>{let r,n,o,i;const s=l=>{const d=t.reduce((f,v)=>v(f),e());return r=Ld(d),n=r.cache.get,o=r.cache.set,i=a,a(l)},a=l=>{const d=n(l);if(d)return d;const f=jd(l,r);return o(l,f),f};return i=s,(...l)=>i(Dd(...l))},Vd=[],_e=e=>{const t=r=>r[e]||Vd;return t.isThemeGetter=!0,t},pa=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,ha=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Gd=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,Bd=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Wd=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Hd=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Kd=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,qd=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Yt=e=>Gd.test(e),R=e=>!!e&&!Number.isNaN(Number(e)),Jt=e=>!!e&&Number.isInteger(Number(e)),Ao=e=>e.endsWith("%")&&R(e.slice(0,-1)),Lt=e=>Bd.test(e),ma=()=>!0,Ud=e=>Wd.test(e)&&!Hd.test(e),di=()=>!1,Yd=e=>Kd.test(e),Jd=e=>qd.test(e),Xd=e=>!T(e)&&!C(e),Zd=e=>dr(e,_a,di),T=e=>pa.test(e),hr=e=>dr(e,xa,Ud),Yi=e=>dr(e,af,R),Qd=e=>dr(e,wa,ma),ef=e=>dr(e,ya,di),Ji=e=>dr(e,ga,di),tf=e=>dr(e,ba,Jd),Bn=e=>dr(e,ka,Yd),C=e=>ha.test(e),gn=e=>Nr(e,xa),rf=e=>Nr(e,ya),Xi=e=>Nr(e,ga),nf=e=>Nr(e,_a),of=e=>Nr(e,ba),Wn=e=>Nr(e,ka,!0),sf=e=>Nr(e,wa,!0),dr=(e,t,r)=>{const n=pa.exec(e);return n?n[1]?t(n[1]):r(n[2]):!1},Nr=(e,t,r=!1)=>{const n=ha.exec(e);return n?n[1]?t(n[1]):r:!1},ga=e=>e==="position"||e==="percentage",ba=e=>e==="image"||e==="url",_a=e=>e==="length"||e==="size"||e==="bg-size",xa=e=>e==="length",af=e=>e==="number",ya=e=>e==="family-name",wa=e=>e==="number"||e==="weight",ka=e=>e==="shadow",lf=()=>{const e=_e("color"),t=_e("font"),r=_e("text"),n=_e("font-weight"),o=_e("tracking"),i=_e("leading"),s=_e("breakpoint"),a=_e("container"),l=_e("spacing"),d=_e("radius"),f=_e("shadow"),v=_e("inset-shadow"),u=_e("text-shadow"),g=_e("drop-shadow"),h=_e("blur"),m=_e("perspective"),p=_e("aspect"),x=_e("ease"),P=_e("animate"),S=()=>["auto","avoid","all","avoid-page","page","left","right","column"],y=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],M=()=>[...y(),C,T],N=()=>["auto","hidden","clip","visible","scroll"],O=()=>["auto","contain","none"],A=()=>[C,T,l],U=()=>[Yt,"full","auto",...A()],re=()=>[Jt,"none","subgrid",C,T],Ae=()=>["auto",{span:["full",Jt,C,T]},Jt,C,T],le=()=>[Jt,"auto",C,T],Y=()=>["auto","min","max","fr",C,T],ct=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],pe=()=>["start","end","center","stretch","center-safe","end-safe"],ce=()=>["auto",...A()],Ie=()=>[Yt,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...A()],me=()=>[Yt,"screen","full","dvw","lvw","svw","min","max","fit",...A()],ee=()=>[Yt,"screen","full","lh","dvh","lvh","svh","min","max","fit",...A()],$=()=>[e,C,T],$n=()=>[...y(),Xi,Ji,{position:[C,T]}],nn=()=>["no-repeat",{repeat:["","x","y","space","round"]}],$r=()=>["auto","cover","contain",nf,Zd,{size:[C,T]}],Ir=()=>[Ao,gn,hr],Ee=()=>["","none","full",d,C,T],Me=()=>["",R,gn,hr],fr=()=>["solid","dashed","dotted","double"],In=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],he=()=>[R,Ao,Xi,Ji],On=()=>["","none",h,C,T],Or=()=>["none",R,C,T],Wt=()=>["none",R,C,T],on=()=>[R,C,T],ur=()=>[Yt,"full",...A()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Lt],breakpoint:[Lt],color:[ma],container:[Lt],"drop-shadow":[Lt],ease:["in","out","in-out"],font:[Xd],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Lt],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Lt],shadow:[Lt],spacing:["px",R],text:[Lt],"text-shadow":[Lt],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Yt,T,C,p]}],container:["container"],columns:[{columns:[R,T,C,a]}],"break-after":[{"break-after":S()}],"break-before":[{"break-before":S()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:M()}],overflow:[{overflow:N()}],"overflow-x":[{"overflow-x":N()}],"overflow-y":[{"overflow-y":N()}],overscroll:[{overscroll:O()}],"overscroll-x":[{"overscroll-x":O()}],"overscroll-y":[{"overscroll-y":O()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:U()}],"inset-x":[{"inset-x":U()}],"inset-y":[{"inset-y":U()}],start:[{"inset-s":U(),start:U()}],end:[{"inset-e":U(),end:U()}],"inset-bs":[{"inset-bs":U()}],"inset-be":[{"inset-be":U()}],top:[{top:U()}],right:[{right:U()}],bottom:[{bottom:U()}],left:[{left:U()}],visibility:["visible","invisible","collapse"],z:[{z:[Jt,"auto",C,T]}],basis:[{basis:[Yt,"full","auto",a,...A()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[R,Yt,"auto","initial","none",T]}],grow:[{grow:["",R,C,T]}],shrink:[{shrink:["",R,C,T]}],order:[{order:[Jt,"first","last","none",C,T]}],"grid-cols":[{"grid-cols":re()}],"col-start-end":[{col:Ae()}],"col-start":[{"col-start":le()}],"col-end":[{"col-end":le()}],"grid-rows":[{"grid-rows":re()}],"row-start-end":[{row:Ae()}],"row-start":[{"row-start":le()}],"row-end":[{"row-end":le()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":Y()}],"auto-rows":[{"auto-rows":Y()}],gap:[{gap:A()}],"gap-x":[{"gap-x":A()}],"gap-y":[{"gap-y":A()}],"justify-content":[{justify:[...ct(),"normal"]}],"justify-items":[{"justify-items":[...pe(),"normal"]}],"justify-self":[{"justify-self":["auto",...pe()]}],"align-content":[{content:["normal",...ct()]}],"align-items":[{items:[...pe(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...pe(),{baseline:["","last"]}]}],"place-content":[{"place-content":ct()}],"place-items":[{"place-items":[...pe(),"baseline"]}],"place-self":[{"place-self":["auto",...pe()]}],p:[{p:A()}],px:[{px:A()}],py:[{py:A()}],ps:[{ps:A()}],pe:[{pe:A()}],pbs:[{pbs:A()}],pbe:[{pbe:A()}],pt:[{pt:A()}],pr:[{pr:A()}],pb:[{pb:A()}],pl:[{pl:A()}],m:[{m:ce()}],mx:[{mx:ce()}],my:[{my:ce()}],ms:[{ms:ce()}],me:[{me:ce()}],mbs:[{mbs:ce()}],mbe:[{mbe:ce()}],mt:[{mt:ce()}],mr:[{mr:ce()}],mb:[{mb:ce()}],ml:[{ml:ce()}],"space-x":[{"space-x":A()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":A()}],"space-y-reverse":["space-y-reverse"],size:[{size:Ie()}],"inline-size":[{inline:["auto",...me()]}],"min-inline-size":[{"min-inline":["auto",...me()]}],"max-inline-size":[{"max-inline":["none",...me()]}],"block-size":[{block:["auto",...ee()]}],"min-block-size":[{"min-block":["auto",...ee()]}],"max-block-size":[{"max-block":["none",...ee()]}],w:[{w:[a,"screen",...Ie()]}],"min-w":[{"min-w":[a,"screen","none",...Ie()]}],"max-w":[{"max-w":[a,"screen","none","prose",{screen:[s]},...Ie()]}],h:[{h:["screen","lh",...Ie()]}],"min-h":[{"min-h":["screen","lh","none",...Ie()]}],"max-h":[{"max-h":["screen","lh",...Ie()]}],"font-size":[{text:["base",r,gn,hr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[n,sf,Qd]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Ao,T]}],"font-family":[{font:[rf,ef,t]}],"font-features":[{"font-features":[T]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[o,C,T]}],"line-clamp":[{"line-clamp":[R,"none",C,Yi]}],leading:[{leading:[i,...A()]}],"list-image":[{"list-image":["none",C,T]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",C,T]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:$()}],"text-color":[{text:$()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...fr(),"wavy"]}],"text-decoration-thickness":[{decoration:[R,"from-font","auto",C,hr]}],"text-decoration-color":[{decoration:$()}],"underline-offset":[{"underline-offset":[R,"auto",C,T]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:A()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",C,T]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",C,T]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:$n()}],"bg-repeat":[{bg:nn()}],"bg-size":[{bg:$r()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Jt,C,T],radial:["",C,T],conic:[Jt,C,T]},of,tf]}],"bg-color":[{bg:$()}],"gradient-from-pos":[{from:Ir()}],"gradient-via-pos":[{via:Ir()}],"gradient-to-pos":[{to:Ir()}],"gradient-from":[{from:$()}],"gradient-via":[{via:$()}],"gradient-to":[{to:$()}],rounded:[{rounded:Ee()}],"rounded-s":[{"rounded-s":Ee()}],"rounded-e":[{"rounded-e":Ee()}],"rounded-t":[{"rounded-t":Ee()}],"rounded-r":[{"rounded-r":Ee()}],"rounded-b":[{"rounded-b":Ee()}],"rounded-l":[{"rounded-l":Ee()}],"rounded-ss":[{"rounded-ss":Ee()}],"rounded-se":[{"rounded-se":Ee()}],"rounded-ee":[{"rounded-ee":Ee()}],"rounded-es":[{"rounded-es":Ee()}],"rounded-tl":[{"rounded-tl":Ee()}],"rounded-tr":[{"rounded-tr":Ee()}],"rounded-br":[{"rounded-br":Ee()}],"rounded-bl":[{"rounded-bl":Ee()}],"border-w":[{border:Me()}],"border-w-x":[{"border-x":Me()}],"border-w-y":[{"border-y":Me()}],"border-w-s":[{"border-s":Me()}],"border-w-e":[{"border-e":Me()}],"border-w-bs":[{"border-bs":Me()}],"border-w-be":[{"border-be":Me()}],"border-w-t":[{"border-t":Me()}],"border-w-r":[{"border-r":Me()}],"border-w-b":[{"border-b":Me()}],"border-w-l":[{"border-l":Me()}],"divide-x":[{"divide-x":Me()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Me()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...fr(),"hidden","none"]}],"divide-style":[{divide:[...fr(),"hidden","none"]}],"border-color":[{border:$()}],"border-color-x":[{"border-x":$()}],"border-color-y":[{"border-y":$()}],"border-color-s":[{"border-s":$()}],"border-color-e":[{"border-e":$()}],"border-color-bs":[{"border-bs":$()}],"border-color-be":[{"border-be":$()}],"border-color-t":[{"border-t":$()}],"border-color-r":[{"border-r":$()}],"border-color-b":[{"border-b":$()}],"border-color-l":[{"border-l":$()}],"divide-color":[{divide:$()}],"outline-style":[{outline:[...fr(),"none","hidden"]}],"outline-offset":[{"outline-offset":[R,C,T]}],"outline-w":[{outline:["",R,gn,hr]}],"outline-color":[{outline:$()}],shadow:[{shadow:["","none",f,Wn,Bn]}],"shadow-color":[{shadow:$()}],"inset-shadow":[{"inset-shadow":["none",v,Wn,Bn]}],"inset-shadow-color":[{"inset-shadow":$()}],"ring-w":[{ring:Me()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:$()}],"ring-offset-w":[{"ring-offset":[R,hr]}],"ring-offset-color":[{"ring-offset":$()}],"inset-ring-w":[{"inset-ring":Me()}],"inset-ring-color":[{"inset-ring":$()}],"text-shadow":[{"text-shadow":["none",u,Wn,Bn]}],"text-shadow-color":[{"text-shadow":$()}],opacity:[{opacity:[R,C,T]}],"mix-blend":[{"mix-blend":[...In(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":In()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[R]}],"mask-image-linear-from-pos":[{"mask-linear-from":he()}],"mask-image-linear-to-pos":[{"mask-linear-to":he()}],"mask-image-linear-from-color":[{"mask-linear-from":$()}],"mask-image-linear-to-color":[{"mask-linear-to":$()}],"mask-image-t-from-pos":[{"mask-t-from":he()}],"mask-image-t-to-pos":[{"mask-t-to":he()}],"mask-image-t-from-color":[{"mask-t-from":$()}],"mask-image-t-to-color":[{"mask-t-to":$()}],"mask-image-r-from-pos":[{"mask-r-from":he()}],"mask-image-r-to-pos":[{"mask-r-to":he()}],"mask-image-r-from-color":[{"mask-r-from":$()}],"mask-image-r-to-color":[{"mask-r-to":$()}],"mask-image-b-from-pos":[{"mask-b-from":he()}],"mask-image-b-to-pos":[{"mask-b-to":he()}],"mask-image-b-from-color":[{"mask-b-from":$()}],"mask-image-b-to-color":[{"mask-b-to":$()}],"mask-image-l-from-pos":[{"mask-l-from":he()}],"mask-image-l-to-pos":[{"mask-l-to":he()}],"mask-image-l-from-color":[{"mask-l-from":$()}],"mask-image-l-to-color":[{"mask-l-to":$()}],"mask-image-x-from-pos":[{"mask-x-from":he()}],"mask-image-x-to-pos":[{"mask-x-to":he()}],"mask-image-x-from-color":[{"mask-x-from":$()}],"mask-image-x-to-color":[{"mask-x-to":$()}],"mask-image-y-from-pos":[{"mask-y-from":he()}],"mask-image-y-to-pos":[{"mask-y-to":he()}],"mask-image-y-from-color":[{"mask-y-from":$()}],"mask-image-y-to-color":[{"mask-y-to":$()}],"mask-image-radial":[{"mask-radial":[C,T]}],"mask-image-radial-from-pos":[{"mask-radial-from":he()}],"mask-image-radial-to-pos":[{"mask-radial-to":he()}],"mask-image-radial-from-color":[{"mask-radial-from":$()}],"mask-image-radial-to-color":[{"mask-radial-to":$()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":y()}],"mask-image-conic-pos":[{"mask-conic":[R]}],"mask-image-conic-from-pos":[{"mask-conic-from":he()}],"mask-image-conic-to-pos":[{"mask-conic-to":he()}],"mask-image-conic-from-color":[{"mask-conic-from":$()}],"mask-image-conic-to-color":[{"mask-conic-to":$()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:$n()}],"mask-repeat":[{mask:nn()}],"mask-size":[{mask:$r()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",C,T]}],filter:[{filter:["","none",C,T]}],blur:[{blur:On()}],brightness:[{brightness:[R,C,T]}],contrast:[{contrast:[R,C,T]}],"drop-shadow":[{"drop-shadow":["","none",g,Wn,Bn]}],"drop-shadow-color":[{"drop-shadow":$()}],grayscale:[{grayscale:["",R,C,T]}],"hue-rotate":[{"hue-rotate":[R,C,T]}],invert:[{invert:["",R,C,T]}],saturate:[{saturate:[R,C,T]}],sepia:[{sepia:["",R,C,T]}],"backdrop-filter":[{"backdrop-filter":["","none",C,T]}],"backdrop-blur":[{"backdrop-blur":On()}],"backdrop-brightness":[{"backdrop-brightness":[R,C,T]}],"backdrop-contrast":[{"backdrop-contrast":[R,C,T]}],"backdrop-grayscale":[{"backdrop-grayscale":["",R,C,T]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[R,C,T]}],"backdrop-invert":[{"backdrop-invert":["",R,C,T]}],"backdrop-opacity":[{"backdrop-opacity":[R,C,T]}],"backdrop-saturate":[{"backdrop-saturate":[R,C,T]}],"backdrop-sepia":[{"backdrop-sepia":["",R,C,T]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":A()}],"border-spacing-x":[{"border-spacing-x":A()}],"border-spacing-y":[{"border-spacing-y":A()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",C,T]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[R,"initial",C,T]}],ease:[{ease:["linear","initial",x,C,T]}],delay:[{delay:[R,C,T]}],animate:[{animate:["none",P,C,T]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[m,C,T]}],"perspective-origin":[{"perspective-origin":M()}],rotate:[{rotate:Or()}],"rotate-x":[{"rotate-x":Or()}],"rotate-y":[{"rotate-y":Or()}],"rotate-z":[{"rotate-z":Or()}],scale:[{scale:Wt()}],"scale-x":[{"scale-x":Wt()}],"scale-y":[{"scale-y":Wt()}],"scale-z":[{"scale-z":Wt()}],"scale-3d":["scale-3d"],skew:[{skew:on()}],"skew-x":[{"skew-x":on()}],"skew-y":[{"skew-y":on()}],transform:[{transform:[C,T,"","none","gpu","cpu"]}],"transform-origin":[{origin:M()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:ur()}],"translate-x":[{"translate-x":ur()}],"translate-y":[{"translate-y":ur()}],"translate-z":[{"translate-z":ur()}],"translate-none":["translate-none"],accent:[{accent:$()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:$()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",C,T]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":A()}],"scroll-mx":[{"scroll-mx":A()}],"scroll-my":[{"scroll-my":A()}],"scroll-ms":[{"scroll-ms":A()}],"scroll-me":[{"scroll-me":A()}],"scroll-mbs":[{"scroll-mbs":A()}],"scroll-mbe":[{"scroll-mbe":A()}],"scroll-mt":[{"scroll-mt":A()}],"scroll-mr":[{"scroll-mr":A()}],"scroll-mb":[{"scroll-mb":A()}],"scroll-ml":[{"scroll-ml":A()}],"scroll-p":[{"scroll-p":A()}],"scroll-px":[{"scroll-px":A()}],"scroll-py":[{"scroll-py":A()}],"scroll-ps":[{"scroll-ps":A()}],"scroll-pe":[{"scroll-pe":A()}],"scroll-pbs":[{"scroll-pbs":A()}],"scroll-pbe":[{"scroll-pbe":A()}],"scroll-pt":[{"scroll-pt":A()}],"scroll-pr":[{"scroll-pr":A()}],"scroll-pb":[{"scroll-pb":A()}],"scroll-pl":[{"scroll-pl":A()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",C,T]}],fill:[{fill:["none",...$()]}],"stroke-w":[{stroke:[R,gn,hr,Yi]}],stroke:[{stroke:["none",...$()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},cf=Fd(lf);function We(...e){return cf(na(e))}const qo="dartlab-conversations",Zi=50;function df(){return Date.now().toString(36)+Math.random().toString(36).slice(2,8)}function ff(){try{const e=localStorage.getItem(qo);return e?JSON.parse(e):{conversations:[],activeId:null}}catch{return{conversations:[],activeId:null}}}function uf(e){try{localStorage.setItem(qo,JSON.stringify(e))}catch{if(e.conversations.length>5){e.conversations=e.conversations.slice(0,e.conversations.length-5);try{localStorage.setItem(qo,JSON.stringify(e))}catch{}}}}function vf(){const e=ff();let t=V(Xe(e.conversations)),r=V(Xe(e.activeId));c(r)&&!c(t).find(u=>u.id===c(r))&&_(r,null);function n(){uf({conversations:c(t),activeId:c(r)})}function o(){return c(t).find(u=>u.id===c(r))||null}function i(){const u={id:df(),title:"새 대화",messages:[],createdAt:Date.now(),updatedAt:Date.now()};return _(t,[u,...c(t)],!0),c(t).length>Zi&&_(t,c(t).slice(0,Zi),!0),_(r,u.id,!0),n(),u.id}function s(u){c(t).find(g=>g.id===u)&&(_(r,u,!0),n())}function a(u,g,h=null){const m=o();if(!m)return;const p={role:u,text:g};h&&(p.meta=h),m.messages=[...m.messages,p],m.updatedAt=Date.now(),m.title==="새 대화"&&u==="user"&&(m.title=g.length>30?g.slice(0,30)+"...":g),_(t,[...c(t)],!0),n()}function l(u){const g=o();if(!g||g.messages.length===0)return;const h=g.messages[g.messages.length-1];Object.assign(h,u),g.updatedAt=Date.now(),_(t,[...c(t)],!0),n()}function d(u){_(t,c(t).filter(g=>g.id!==u),!0),c(r)===u&&_(r,c(t).length>0?c(t)[0].id:null,!0),n()}function f(u,g){const h=c(t).find(m=>m.id===u);h&&(h.title=g,_(t,[...c(t)],!0),n())}function v(){_(t,[],!0),_(r,null),n()}return{get conversations(){return c(t)},get activeId(){return c(r)},get active(){return o()},createConversation:i,setActive:s,addMessage:a,updateLastMessage:l,deleteConversation:d,updateTitle:f,clearAll:v}}var pf=L("<a><!></a>"),hf=L("<button><!></button>");function mf(e,t){Gt(t,!0);let r=ke(t,"variant",3,"default"),n=ke(t,"size",3,"default"),o=ud(t,["$$slots","$$events","$$legacy","variant","size","class","children"]);const i={default:"bg-gradient-to-r from-dl-primary to-dl-primary-dark text-white shadow-lg shadow-dl-primary/25 hover:shadow-dl-primary/40 hover:-translate-y-0.5",secondary:"bg-dl-bg-card border border-dl-border text-dl-text-muted hover:text-dl-text hover:bg-dl-bg-card-hover",ghost:"text-dl-text-muted hover:text-dl-text hover:bg-white/5",outline:"border border-dl-border text-dl-text-muted hover:text-dl-text hover:border-dl-primary/50"},s={default:"px-5 py-2 text-sm",sm:"px-3 py-1.5 text-xs",lg:"px-7 py-3 text-base",icon:"w-9 h-9"};var a=Q(),l=H(a);{var d=v=>{var u=pf();Zn(u,h=>({class:h,...o}),[()=>We("inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer no-underline",i[r()],s[n()],t.class)]);var g=k(u);Wo(g,()=>t.children),E(v,u)},f=v=>{var u=hf();Zn(u,h=>({class:h,...o}),[()=>We("inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer",i[r()],s[n()],t.class)]);var g=k(u);Wo(g,()=>t.children),E(v,u)};K(l,v=>{t.href?v(d):v(f,-1)})}E(e,a),Bt()}tc();/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2026 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const gf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2026 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const bf=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2026 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Qi=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();var _f=Kc("<svg><!><!></svg>");function ve(e,t){const r=ne(t,["children","$$slots","$$events","$$legacy"]),n=ne(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Gt(t,!1);let o=ke(t,"name",8,void 0),i=ke(t,"color",8,"currentColor"),s=ke(t,"size",8,24),a=ke(t,"strokeWidth",8,2),l=ke(t,"absoluteStrokeWidth",8,!1),d=ke(t,"iconNode",24,()=>[]);cd();var f=_f();Zn(f,(g,h,m)=>({...gf,...g,...n,width:s(),height:s(),stroke:i(),"stroke-width":h,class:m}),[()=>bf(n)?void 0:{"aria-hidden":"true"},()=>(mr(l()),mr(a()),mr(s()),Tr(()=>l()?Number(a())*24/Number(s()):a())),()=>(mr(Qi),mr(o()),mr(r),Tr(()=>Qi("lucide-icon","lucide",o()?`lucide-${o()}`:"",r.class)))]);var v=k(f);Vt(v,1,d,Ft,(g,h)=>{var m=Re(()=>fs(c(h),2));let p=()=>c(m)[0],x=()=>c(m)[1];var P=Q(),S=H(P);ed(S,p,!0,(y,M)=>{Zn(y,()=>({...x()}))}),E(g,P)});var u=z(v);ae(u,t,"default",{}),E(e,f),Bt()}function Sa(e,t){const r=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];ve(e,ue({name:"arrow-up"},()=>r,{get iconNode(){return n},children:(o,i)=>{var s=Q(),a=H(s);ae(a,t,"default",{}),E(o,s)},$$slots:{default:!0}}))}function xf(e,t){const r=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M20 6 9 17l-5-5"}]];ve(e,ue({name:"check"},()=>r,{get iconNode(){return n},children:(o,i)=>{var s=Q(),a=H(s);ae(a,t,"default",{}),E(o,s)},$$slots:{default:!0}}))}function Hn(e,t){const r=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];ve(e,ue({name:"circle-alert"},()=>r,{get iconNode(){return n},children:(o,i)=>{var s=Q(),a=H(s);ae(a,t,"default",{}),E(o,s)},$$slots:{default:!0}}))}function es(e,t){const r=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];ve(e,ue({name:"circle-check"},()=>r,{get iconNode(){return n},children:(o,i)=>{var s=Q(),a=H(s);ae(a,t,"default",{}),E(o,s)},$$slots:{default:!0}}))}function yf(e,t){const r=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10 2v2"}],["path",{d:"M14 2v2"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"}],["path",{d:"M6 2v2"}]];ve(e,ue({name:"coffee"},()=>r,{get iconNode(){return n},children:(o,i)=>{var s=Q(),a=H(s);ae(a,t,"default",{}),E(o,s)},$$slots:{default:!0}}))}function ts(e,t){const r=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];ve(e,ue({name:"download"},()=>r,{get iconNode(){return n},children:(o,i)=>{var s=Q(),a=H(s);ae(a,t,"default",{}),E(o,s)},$$slots:{default:!0}}))}function rs(e,t){const r=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];ve(e,ue({name:"external-link"},()=>r,{get iconNode(){return n},children:(o,i)=>{var s=Q(),a=H(s);ae(a,t,"default",{}),E(o,s)},$$slots:{default:!0}}))}function wf(e,t){const r=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];ve(e,ue({name:"file-text"},()=>r,{get iconNode(){return n},children:(o,i)=>{var s=Q(),a=H(s);ae(a,t,"default",{}),E(o,s)},$$slots:{default:!0}}))}function kf(e,t){const r=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];ve(e,ue({name:"github"},()=>r,{get iconNode(){return n},children:(o,i)=>{var s=Q(),a=H(s);ae(a,t,"default",{}),E(o,s)},$$slots:{default:!0}}))}function ns(e,t){const r=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"}],["path",{d:"m21 2-9.6 9.6"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5"}]];ve(e,ue({name:"key"},()=>r,{get iconNode(){return n},children:(o,i)=>{var s=Q(),a=H(s);ae(a,t,"default",{}),E(o,s)},$$slots:{default:!0}}))}function Xt(e,t){const r=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];ve(e,ue({name:"loader-circle"},()=>r,{get iconNode(){return n},children:(o,i)=>{var s=Q(),a=H(s);ae(a,t,"default",{}),E(o,s)},$$slots:{default:!0}}))}function Sf(e,t){const r=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];ve(e,ue({name:"menu"},()=>r,{get iconNode(){return n},children:(o,i)=>{var s=Q(),a=H(s);ae(a,t,"default",{}),E(o,s)},$$slots:{default:!0}}))}function os(e,t){const r=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}]];ve(e,ue({name:"message-square"},()=>r,{get iconNode(){return n},children:(o,i)=>{var s=Q(),a=H(s);ae(a,t,"default",{}),E(o,s)},$$slots:{default:!0}}))}function Af(e,t){const r=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"m16 15-3-3 3-3"}]];ve(e,ue({name:"panel-left-close"},()=>r,{get iconNode(){return n},children:(o,i)=>{var s=Q(),a=H(s);ae(a,t,"default",{}),E(o,s)},$$slots:{default:!0}}))}function is(e,t){const r=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];ve(e,ue({name:"plus"},()=>r,{get iconNode(){return n},children:(o,i)=>{var s=Q(),a=H(s);ae(a,t,"default",{}),E(o,s)},$$slots:{default:!0}}))}function Ef(e,t){const r=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];ve(e,ue({name:"search"},()=>r,{get iconNode(){return n},children:(o,i)=>{var s=Q(),a=H(s);ae(a,t,"default",{}),E(o,s)},$$slots:{default:!0}}))}function Mf(e,t){const r=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];ve(e,ue({name:"settings"},()=>r,{get iconNode(){return n},children:(o,i)=>{var s=Q(),a=H(s);ae(a,t,"default",{}),E(o,s)},$$slots:{default:!0}}))}function zf(e,t){const r=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];ve(e,ue({name:"square"},()=>r,{get iconNode(){return n},children:(o,i)=>{var s=Q(),a=H(s);ae(a,t,"default",{}),E(o,s)},$$slots:{default:!0}}))}function Tf(e,t){const r=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 19h8"}],["path",{d:"m4 17 6-6-6-6"}]];ve(e,ue({name:"terminal"},()=>r,{get iconNode(){return n},children:(o,i)=>{var s=Q(),a=H(s);ae(a,t,"default",{}),E(o,s)},$$slots:{default:!0}}))}function Cf(e,t){const r=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];ve(e,ue({name:"trash-2"},()=>r,{get iconNode(){return n},children:(o,i)=>{var s=Q(),a=H(s);ae(a,t,"default",{}),E(o,s)},$$slots:{default:!0}}))}function Pf(e,t){const r=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.575.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ve(e,ue({name:"x"},()=>r,{get iconNode(){return n},children:(o,i)=>{var s=Q(),a=H(s);ae(a,t,"default",{}),E(o,s)},$$slots:{default:!0}}))}var Nf=L("<!> 새 대화",1),$f=L('<div class="px-3 pb-2"><div class="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-dl-bg-card border border-dl-border"><!> <input type="text" placeholder="대화 검색..." class="flex-1 bg-transparent border-none outline-none text-[12px] text-dl-text placeholder:text-dl-text-dim"/></div></div>'),If=L('<div role="button" tabindex="0"><!> <span class="flex-1 truncate"> </span> <button class="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-dl-bg-card-hover text-dl-text-dim hover:text-dl-primary transition-all"><!></button></div>'),Of=L('<div><div class="px-2 py-1.5 text-[11px] font-medium text-dl-text-dim uppercase tracking-wider"> </div> <!></div>'),Lf=L('<div class="flex flex-col h-full min-w-[260px]"><div class="flex items-center gap-2.5 px-4 pt-4 pb-2"><img src="/avatar.png" alt="DartLab" class="w-8 h-8 rounded-full shadow-sm"/> <span class="text-[15px] font-bold text-dl-text tracking-tight">DartLab</span></div> <div class="p-3 pb-2"><!></div> <!> <div class="flex-1 overflow-y-auto px-2 space-y-4"></div></div>'),Rf=L("<button><!></button>"),jf=L('<div class="flex flex-col items-center h-full min-w-[52px] py-3 gap-2"><img src="/avatar.png" alt="DartLab" class="w-7 h-7 rounded-full shadow-sm mb-1"/> <button class="p-2.5 rounded-lg text-dl-text-muted hover:text-dl-text hover:bg-dl-bg-card/50 transition-colors" title="새 대화"><!></button> <div class="flex-1 overflow-y-auto flex flex-col items-center gap-1 w-full px-1"></div></div>'),Df=L("<aside><!></aside>");function Ff(e,t){Gt(t,!0);let r=ke(t,"conversations",19,()=>[]),n=ke(t,"activeId",3,null),o=ke(t,"open",3,!0),i=V("");function s(g){const h=new Date().setHours(0,0,0,0),m=h-864e5,p=h-7*864e5,x={오늘:[],어제:[],"이번 주":[],이전:[]};for(const S of g)S.updatedAt>=h?x.오늘.push(S):S.updatedAt>=m?x.어제.push(S):S.updatedAt>=p?x["이번 주"].push(S):x.이전.push(S);const P=[];for(const[S,y]of Object.entries(x))y.length>0&&P.push({label:S,items:y});return P}let a=Re(()=>c(i).trim()?r().filter(g=>g.title.toLowerCase().includes(c(i).toLowerCase())):r()),l=Re(()=>s(c(a)));var d=Df(),f=k(d);{var v=g=>{var h=Lf(),m=z(k(h),2),p=k(m);mf(p,{variant:"secondary",class:"w-full justify-start gap-2",get onclick(){return t.onNewChat},children:(y,M)=>{var N=Nf(),O=H(N);is(O,{size:16}),E(y,N)},$$slots:{default:!0}});var x=z(m,2);{var P=y=>{var M=$f(),N=k(M),O=k(N);Ef(O,{size:12,class:"text-dl-text-dim flex-shrink-0"});var A=z(O,2);Fr(A,()=>c(i),U=>_(i,U)),E(y,M)};K(x,y=>{r().length>3&&y(P)})}var S=z(x,2);Vt(S,21,()=>c(l),Ft,(y,M)=>{var N=Of(),O=k(N),A=k(O),U=z(O,2);Vt(U,17,()=>c(M).items,Ft,(re,Ae)=>{var le=If(),Y=k(le);os(Y,{size:14,class:"flex-shrink-0 opacity-50"});var ct=z(Y,2),pe=k(ct),ce=z(ct,2),Ie=k(ce);Cf(Ie,{size:12}),Z(me=>{Qe(le,1,me),xe(pe,c(Ae).title)},[()=>Ze(We("w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left text-[13px] transition-colors group cursor-pointer",c(Ae).id===n()?"bg-dl-bg-card text-dl-text border-l-2 border-dl-primary":"text-dl-text-muted hover:bg-dl-bg-card/50 hover:text-dl-text border-l-2 border-transparent"))]),q("click",le,()=>{var me;return(me=t.onSelect)==null?void 0:me.call(t,c(Ae).id)}),q("keydown",le,me=>{var ee;me.key==="Enter"&&((ee=t.onSelect)==null||ee.call(t,c(Ae).id))}),q("click",ce,me=>{var ee;me.stopPropagation(),(ee=t.onDelete)==null||ee.call(t,c(Ae).id)}),E(re,le)}),Z(()=>xe(A,c(M).label)),E(y,N)}),E(g,h)},u=g=>{var h=jf(),m=z(k(h),2),p=k(m);is(p,{size:18});var x=z(m,2);Vt(x,21,()=>r().slice(0,10),Ft,(P,S)=>{var y=Rf(),M=k(y);os(M,{size:16}),Z(N=>{Qe(y,1,N),Xn(y,"title",c(S).title)},[()=>Ze(We("p-2 rounded-lg transition-colors w-full flex justify-center",c(S).id===n()?"bg-dl-bg-card text-dl-text":"text-dl-text-dim hover:text-dl-text-muted hover:bg-dl-bg-card/50"))]),q("click",y,()=>{var N;return(N=t.onSelect)==null?void 0:N.call(t,c(S).id)}),E(P,y)}),q("click",m,function(...P){var S;(S=t.onNewChat)==null||S.apply(this,P)}),E(g,h)};K(f,g=>{o()?g(v):g(u,-1)})}Z(g=>Qe(d,1,g),[()=>Ze(We("flex flex-col h-full bg-dl-bg-darker border-r border-dl-border transition-all duration-300 flex-shrink-0 overflow-hidden",o()?"w-[260px]":"w-[52px]"))]),E(e,d),Bt()}Pn(["click","keydown"]);var Vf=L('<button class="text-left px-4 py-3 rounded-xl border border-dl-border bg-dl-bg-card/50 text-[13px] text-dl-text-muted hover:text-dl-text hover:border-dl-primary/30 hover:bg-dl-bg-card transition-all duration-200 cursor-pointer"> </button>'),Gf=L('<div class="flex-1 flex flex-col items-center justify-center px-5"><div class="w-full max-w-[620px] flex flex-col items-center"><img src="/avatar.png" alt="DartLab" class="w-16 h-16 rounded-full mb-5 shadow-lg shadow-dl-primary/10"/> <h1 class="text-2xl font-bold text-dl-text mb-1.5">무엇을 분석할까요?</h1> <p class="text-sm text-dl-text-muted mb-8">종목명과 질문을 입력하거나, 자유롭게 대화하세요</p> <div class="input-box large"><textarea placeholder="삼성전자 재무 건전성을 분석해줘..." rows="1" class="input-textarea"></textarea> <button><!></button></div> <div class="grid grid-cols-2 gap-2.5 mt-6 w-full max-w-[520px]"></div></div></div>');function Bf(e,t){Gt(t,!0);let r=ke(t,"inputText",15,""),n;const o=["삼성전자 재무 건전성 분석해줘","LG에너지솔루션 배당 추세는?","카카오 부채 리스크 평가해줘","현대차 영업이익률 추이 분석"];function i(m){var p;m.key==="Enter"&&!m.shiftKey&&(m.preventDefault(),(p=t.onSend)==null||p.call(t))}function s(m){m.target.style.height="auto",m.target.style.height=Math.min(m.target.scrollHeight,200)+"px"}function a(m){r(m),n&&n.focus()}var l=Gf(),d=k(l),f=z(k(d),6),v=k(f);ca(v,m=>n=m,()=>n);var u=z(v,2),g=k(u);Sa(g,{size:18,strokeWidth:2.5});var h=z(f,2);Vt(h,21,()=>o,Ft,(m,p)=>{var x=Vf(),P=k(x);Z(()=>xe(P,c(p))),q("click",x,()=>a(c(p))),E(m,x)}),Z((m,p)=>{Qe(u,1,m),u.disabled=p},[()=>Ze(We("send-btn",r().trim()&&"active")),()=>!r().trim()]),q("keydown",v,i),q("input",v,s),Fr(v,r),q("click",u,function(...m){var p;(p=t.onSend)==null||p.apply(this,m)}),E(e,l),Bt()}Pn(["keydown","input","click"]);var Wf=L("<span><!></span>");function Hf(e,t){Gt(t,!0);let r=ke(t,"variant",3,"default");const n={default:"bg-dl-primary/10 text-dl-primary-light border-dl-primary/20",accent:"bg-dl-accent/10 text-dl-accent-light border-dl-accent/20",success:"bg-dl-success/10 text-dl-success border-dl-success/20",muted:"bg-dl-bg-card-hover text-dl-text-muted border-dl-border"};var o=Wf(),i=k(o);Wo(i,()=>t.children),Z(s=>Qe(o,1,s),[()=>Ze(We("inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border",n[r()],t.class))]),E(e,o),Bt()}var Kf=L('<div class="flex items-start gap-3 animate-fadeIn"><div class="w-7 h-7 rounded-full bg-dl-bg-card-hover border border-dl-border flex items-center justify-center text-[10px] font-semibold text-dl-text-muted flex-shrink-0 mt-0.5">You</div> <div class="flex-1 pt-0.5"><p class="text-[15px] text-dl-text leading-relaxed"> </p></div></div>'),qf=L('<div class="flex items-center gap-1.5 h-6"><span class="typing-dot svelte-1e5n1dp"></span> <span class="typing-dot delay-1 svelte-1e5n1dp"></span> <span class="typing-dot delay-2 svelte-1e5n1dp"></span></div>'),Uf=L("<div><!></div>"),Yf=L('<div class="flex items-start gap-3 animate-fadeIn"><img src="/avatar.png" alt="DartLab" class="w-7 h-7 rounded-full flex-shrink-0 mt-0.5"/> <div class="flex-1 pt-0.5 min-w-0"><!> <!></div></div>');function Jf(e,t){Gt(t,!0);function r(a){if(!a)return"";let l=a.replace(/```(\w*)\n([\s\S]*?)```/g,"<pre><code>$2</code></pre>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^### (.+)$/gm,"<h3>$1</h3>").replace(/^## (.+)$/gm,"<h2>$1</h2>").replace(/^# (.+)$/gm,"<h1>$1</h1>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/\*([^*]+)\*/g,"<em>$1</em>").replace(/^[•\-\*] (.+)$/gm,"<li>$1</li>").replace(/^\d+\. (.+)$/gm,"<li>$1</li>").replace(/^\|(.+)\|$/gm,d=>{const f=d.slice(1,-1).split("|").map(v=>v.trim());return f.every(v=>/^[\-:]+$/.test(v))?"":"<tr>"+f.map(v=>`<td>${v}</td>`).join("")+"</tr>"}).replace(/^> (.+)$/gm,"<blockquote>$1</blockquote>").replace(/\n\n/g,"</p><p>").replace(/\n/g,"<br>");return l=l.replace(/(<li>.*?<\/li>(\s*<br>)?)+/g,d=>"<ul>"+d.replace(/<br>/g,"")+"</ul>"),l=l.replace(/(<tr>.*?<\/tr>(\s*<br>)?)+/g,d=>"<table>"+d.replace(/<br>/g,"")+"</table>"),"<p>"+l+"</p>"}var n=Q(),o=H(n);{var i=a=>{var l=Kf(),d=z(k(l),2),f=k(d),v=k(f);Z(()=>xe(v,t.message.text)),E(a,l)},s=a=>{var l=Yf(),d=z(k(l),2),f=k(d);{var v=m=>{Hf(m,{variant:"muted",class:"mb-2",children:(p,x)=>{var P=Yn();Z(()=>xe(P,t.message.company)),E(p,P)},$$slots:{default:!0}})};K(f,m=>{t.message.company&&m(v)})}var u=z(f,2);{var g=m=>{var p=qf();E(m,p)},h=m=>{var p=Uf(),x=k(p);Qc(x,()=>r(t.message.text)),Z(P=>Qe(p,1,P,"svelte-1e5n1dp"),[()=>Ze(We("prose-dartlab text-[15px] leading-[1.75]",t.message.error&&"text-dl-primary"))]),E(m,p)};K(u,m=>{t.message.loading&&!t.message.text?m(g):m(h,-1)})}E(a,l)};K(o,a=>{t.message.role==="user"?a(i):a(s,-1)})}E(e,n),Bt()}var Xf=L('<button class="send-btn active"><!></button>'),Zf=L("<button><!></button>"),Qf=L('<div class="flex flex-col h-full min-h-0"><div class="flex-1 overflow-y-auto min-h-0"><div class="max-w-[720px] mx-auto px-5 pt-14 pb-8 space-y-8"></div></div> <div class="flex-shrink-0 px-5 pb-4 pt-2"><div class="max-w-[720px] mx-auto"><div class="input-box"><textarea placeholder="메시지를 입력하세요..." rows="1" class="input-textarea"></textarea> <!></div></div></div></div>');function eu(e,t){Gt(t,!0);let r=ke(t,"messages",19,()=>[]),n=ke(t,"isLoading",3,!1),o=ke(t,"inputText",15,""),i=ke(t,"scrollTrigger",3,0),s;Jn(()=>{i(),s&&setTimeout(()=>{s.scrollTop=s.scrollHeight},10)});function a(S){var y;S.key==="Enter"&&!S.shiftKey&&(S.preventDefault(),(y=t.onSend)==null||y.call(t))}function l(S){S.target.style.height="auto",S.target.style.height=Math.min(S.target.scrollHeight,200)+"px"}var d=Qf(),f=k(d),v=k(f);Vt(v,21,r,Ft,(S,y)=>{Jf(S,{get message(){return c(y)}})}),ca(f,S=>s=S,()=>s);var u=z(f,2),g=k(u),h=k(g),m=k(h),p=z(m,2);{var x=S=>{var y=Xf(),M=k(y);zf(M,{size:14}),q("click",y,function(...N){var O;(O=t.onStop)==null||O.apply(this,N)}),E(S,y)},P=S=>{var y=Zf(),M=k(y);Sa(M,{size:16,strokeWidth:2.5}),Z((N,O)=>{Qe(y,1,N),y.disabled=O},[()=>Ze(We("send-btn",o().trim()&&"active")),()=>!o().trim()]),q("click",y,function(...N){var O;(O=t.onSend)==null||O.apply(this,N)}),E(S,y)};K(p,S=>{n()?S(x):S(P,-1)})}q("keydown",m,a),q("input",m,l),Fr(m,o),E(e,d),Bt()}Pn(["keydown","input","click"]);var tu=L("<!> <span>확인 중...</span>",1),ru=L("<!> <span>설정 필요</span>",1),nu=L('<span class="text-dl-text-dim">/</span> <span class="max-w-[80px] truncate"> </span>',1),ou=L('<span class="w-1.5 h-1.5 rounded-full bg-dl-success"></span> <span> </span> <!> <!>',1),iu=L('<div class="mx-3 mb-2 px-4 py-3 rounded-xl border border-dl-border bg-dl-bg-card/80 backdrop-blur-sm flex items-center gap-3 pointer-events-auto"><!> <div class="flex-1"><div class="text-[13px] text-dl-text-muted">AI Provider 확인 중...</div></div></div>'),su=L('<div class="mx-3 mb-2 px-4 py-3 rounded-xl border border-dl-primary/30 bg-dl-primary/5 backdrop-blur-sm flex items-center gap-3 pointer-events-auto"><!> <div class="flex-1"><div class="text-[13px] text-dl-text">AI Provider가 설정되지 않았습니다</div> <div class="text-[11px] text-dl-text-muted mt-0.5">대화를 시작하려면 Provider를 설정해주세요</div></div> <button class="px-3 py-1.5 rounded-lg bg-dl-primary/20 text-dl-primary-light text-[12px] font-medium hover:bg-dl-primary/30 transition-colors flex-shrink-0">설정하기</button></div>'),au=L('<span class="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-dl-primary/20 text-dl-primary-light">사용 중</span>'),lu=L('<!> <span class="text-[10px] text-amber-400">인증 필요</span>',1),cu=L('<!> <span class="text-[10px] text-dl-text-dim">미설치</span>',1),du=L('<div class="flex items-center gap-1.5 mt-2 text-[11px] text-dl-primary-light"><!> API 키가 유효하지 않습니다. 다시 확인해주세요.</div>'),fu=L('<div class="px-4 pb-4 border-t border-dl-border/50 pt-3"><div class="text-[11px] text-dl-text-muted mb-2"> </div> <div class="flex items-center gap-2"><input type="password" class="flex-1 bg-dl-bg-darker border border-dl-border rounded-lg px-3 py-2 text-[12px] text-dl-text placeholder:text-dl-text-dim outline-none focus:border-dl-primary/50 transition-colors"/> <button class="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-dl-primary/20 text-dl-primary-light text-[12px] font-medium hover:bg-dl-primary/30 transition-colors disabled:opacity-40 flex-shrink-0"><!> 인증</button></div> <!></div>'),uu=L('<button class="px-2.5 py-1.5 rounded-lg bg-dl-primary/20 text-dl-primary-light text-[11px] hover:bg-dl-primary/30 transition-colors disabled:opacity-40"><!></button>'),vu=L('<div class="px-4 pb-2 border-t border-dl-border/50 pt-2.5"><div class="flex items-center gap-2"><!> <span class="text-[11px] text-dl-success">인증됨</span> <span class="text-[10px] text-dl-text-dim">— 다른 키로 변경하려면 입력하세요</span></div> <div class="flex items-center gap-2 mt-2"><input type="password" placeholder="새 API 키 (변경 시에만)" class="flex-1 bg-dl-bg-darker border border-dl-border rounded-lg px-3 py-1.5 text-[11px] text-dl-text placeholder:text-dl-text-dim outline-none focus:border-dl-primary/50 transition-colors"/> <!></div></div>'),pu=L('<div class="px-4 pb-4 border-t border-dl-border/50 pt-3"><div class="text-[12px] text-dl-text mb-2">Ollama가 설치되어 있지 않습니다</div> <a href="https://ollama.com/download" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-3 py-2 rounded-lg bg-dl-bg-darker border border-dl-border text-[12px] text-dl-text-muted hover:text-dl-text hover:border-dl-primary/30 transition-colors"><!> Ollama 다운로드 (ollama.com) <!></a> <div class="text-[10px] text-dl-text-dim mt-2">설치 후 Ollama를 실행하고 새로고침하세요</div></div>'),hu=L('<div class="px-4 pb-3 border-t border-dl-border/50 pt-3"><div class="flex items-center gap-2 text-[12px] text-amber-400"><!> Ollama가 설치되었지만 실행되지 않고 있습니다</div> <div class="text-[10px] text-dl-text-dim mt-1">터미널에서 <code class="px-1 py-0.5 rounded bg-dl-bg-darker text-dl-text-muted">ollama serve</code>를 실행하세요</div></div>'),mu=L('<div class="px-4 pb-4 border-t border-dl-border/50 pt-3"><div class="text-[12px] text-dl-text mb-2"> </div> <div class="p-2.5 rounded-lg bg-dl-bg-darker border border-dl-border text-[11px] text-dl-text-muted font-mono"> </div> <div class="text-[10px] text-dl-text-dim mt-2"> </div></div>'),gu=L('<div class="flex items-center gap-2 py-3 text-[12px] text-dl-text-dim"><!> 모델 목록 불러오는 중...</div>'),bu=L("<button> <!></button>"),_u=L('<div class="flex flex-wrap gap-1.5"></div>'),xu=L('<div class="text-[11px] text-dl-text-dim py-2">사용 가능한 모델이 없습니다</div>'),yu=L('<div class="p-3 rounded-lg border border-dl-border bg-dl-bg-darker"><div class="flex items-center justify-between mb-1.5"><span class="text-[11px] text-dl-text flex items-center gap-1.5"><!> 다운로드 중</span> <button class="px-2 py-0.5 rounded text-[10px] text-dl-text-dim hover:text-dl-primary-light transition-colors">취소</button></div> <div class="w-full h-1.5 rounded-full bg-dl-bg-dark overflow-hidden"><div class="h-full rounded-full bg-gradient-to-r from-dl-primary to-dl-primary-light transition-all duration-300"></div></div> <div class="text-[10px] text-dl-text-dim mt-1"> </div></div>'),wu=L('<button class="px-2 py-0.5 rounded text-[10px] border border-dl-border text-dl-text-dim hover:text-dl-text hover:border-dl-primary/30 transition-colors"> </button>'),ku=L('<div class="flex items-center gap-1.5"><input type="text" placeholder="모델명 (예: gemma3)" class="flex-1 bg-dl-bg-darker border border-dl-border rounded-lg px-2.5 py-1.5 text-[11px] text-dl-text placeholder:text-dl-text-dim outline-none focus:border-dl-primary/50 transition-colors"/> <button class="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-dl-primary/20 text-dl-primary-light text-[11px] font-medium hover:bg-dl-primary/30 transition-colors disabled:opacity-40 flex-shrink-0"><!> 받기</button></div> <div class="flex flex-wrap gap-1 mt-2"></div>',1),Su=L('<div class="mt-3 pt-3 border-t border-dl-border/30"><div class="flex items-center justify-between mb-2"><span class="text-[11px] text-dl-text-muted">모델 다운로드</span> <a href="https://ollama.com/library" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-[10px] text-dl-text-dim hover:text-dl-primary-light transition-colors">전체 목록 <!></a></div> <!></div>'),Au=L('<div class="px-4 pb-4 border-t border-dl-border/50 pt-3"><div class="flex items-center justify-between mb-2.5"><span class="text-[11px] font-medium text-dl-text-muted">모델 선택</span> <!></div> <!> <!></div>'),Eu=L("<!> <!> <!> <!> <!>",1),Mu=L('<div><button class="flex items-center gap-3 w-full px-4 py-3 text-left"><span></span> <div class="flex-1 min-w-0"><div class="flex items-center gap-2"><span class="text-[13px] font-medium text-dl-text"> </span> <!></div> <div class="text-[11px] text-dl-text-dim mt-0.5"> </div></div> <div class="flex items-center gap-2 flex-shrink-0"><!></div></button> <!></div>'),zu=L('<div class="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn"><div class="w-full max-w-xl bg-dl-bg-card border border-dl-border rounded-2xl shadow-2xl overflow-hidden"><div class="flex items-center justify-between px-6 pt-5 pb-3"><div class="text-[14px] font-semibold text-dl-text">AI Provider 설정</div> <button class="p-1 rounded-lg text-dl-text-dim hover:text-dl-text hover:bg-white/5 transition-colors"><!></button></div> <div class="px-6 pb-5 max-h-[70vh] overflow-y-auto"><div class="space-y-2.5"></div></div> <div class="flex items-center justify-between px-6 py-3 border-t border-dl-border"><div class="text-[10px] text-dl-text-dim"><!></div> <button class="px-4 py-2 rounded-xl bg-dl-primary/20 text-dl-primary-light text-[12px] font-medium hover:bg-dl-primary/30 transition-colors">닫기</button></div></div></div>'),Tu=L('<div class="fixed bottom-6 right-6 z-[300] animate-fadeIn"><div> </div></div>'),Cu=L('<div class="flex h-screen bg-dl-bg-dark overflow-hidden"><!> <div class="relative flex flex-col flex-1 min-w-0 min-h-0"><div class="absolute top-0 left-0 right-0 z-10 pointer-events-none"><div class="flex items-center justify-between px-3 h-11 pointer-events-auto" style="background: linear-gradient(to bottom, var(--color-dl-bg-dark) 60%, transparent);"><button class="p-1.5 rounded-lg text-dl-text-muted hover:text-dl-text hover:bg-white/5 transition-colors"><!></button> <div class="flex items-center gap-1"><a href="https://buymeacoffee.com/eddmpython" target="_blank" rel="noopener noreferrer" class="p-1.5 rounded-lg text-[#ffdd00] hover:bg-white/5 transition-colors" title="Buy me a coffee"><!></a> <a href="https://eddmpython.github.io/dartlab/" target="_blank" rel="noopener noreferrer" class="p-1.5 rounded-lg text-dl-text-dim hover:text-dl-text-muted hover:bg-white/5 transition-colors" title="Documentation"><!></a> <a href="https://github.com/eddmpython/dartlab" target="_blank" rel="noopener noreferrer" class="p-1.5 rounded-lg text-dl-text-dim hover:text-dl-text-muted hover:bg-white/5 transition-colors" title="GitHub"><!></a> <div class="w-px h-4 bg-dl-border mx-1"></div> <button><!> <!></button></div></div> <!></div> <!></div></div>  <!> <!>',1);function Pu(e,t){Gt(t,!0);let r=V(""),n=V(!1),o=V(null),i=V(Xe({})),s=V(Xe({})),a=V(null),l=V(null),d=V(Xe([])),f=V(!0),v=V(0),u=V(!0),g=V(!1),h=V(null),m=V(Xe({})),p=V(Xe({})),x=V(""),P=V(!1),S=V(null),y=V(""),M=V(!1),N=V(""),O=V(0),A=V(null),U=V(""),re=V("error"),Ae=V(!1);function le(w,I="error",X=4e3){_(U,w,!0),_(re,I,!0),_(Ae,!0),setTimeout(()=>{_(Ae,!1)},X)}const Y=vf();Jn(()=>{ct()});async function ct(){var w,I,X;_(u,!0);try{const Ke=await md();_(i,Ke.providers||{},!0),_(s,Ke.ollama||{},!0);const te=localStorage.getItem("dartlab-provider"),oe=localStorage.getItem("dartlab-model");if(te&&((w=c(i)[te])!=null&&w.available)){_(a,te,!0),_(h,te,!0),await Dr(te,oe),await pe(te);const j=c(m)[te]||[];oe&&j.includes(oe)?_(l,oe,!0):j.length>0&&(_(l,j[0],!0),localStorage.setItem("dartlab-model",c(l))),_(d,j,!0),_(u,!1);return}if(te&&c(i)[te]){_(a,te,!0),_(h,te,!0),await pe(te);const j=c(m)[te]||[];_(d,j,!0),oe&&j.includes(oe)?_(l,oe,!0):j.length>0&&_(l,j[0],!0),_(u,!1);return}for(const j of["ollama"])if((I=c(i)[j])!=null&&I.available){_(a,j,!0),_(h,j,!0),await Dr(j),await pe(j);const dt=c(m)[j]||[];_(d,dt,!0),_(l,((X=c(i)[j])==null?void 0:X.model)||(dt.length>0?dt[0]:null),!0),c(l)&&localStorage.setItem("dartlab-model",c(l));break}}catch{}_(u,!1)}async function pe(w){_(p,{...c(p),[w]:!0},!0);try{const I=await gd(w);_(m,{...c(m),[w]:I.models||[]},!0)}catch{_(m,{...c(m),[w]:[]},!0)}_(p,{...c(p),[w]:!1},!0)}async function ce(w){var X;_(a,w,!0),_(l,null),_(h,w,!0),localStorage.setItem("dartlab-provider",w),localStorage.removeItem("dartlab-model"),_(x,""),_(S,null);try{await Dr(w)}catch{}await pe(w);const I=c(m)[w]||[];if(_(d,I,!0),I.length>0){_(l,((X=c(i)[w])==null?void 0:X.model)||I[0],!0),localStorage.setItem("dartlab-model",c(l));try{await Dr(w,c(l))}catch{}}}async function Ie(w){_(l,w,!0),localStorage.setItem("dartlab-model",w);try{await Dr(c(a),w)}catch{}}function me(w){c(h)===w?_(h,null):(_(h,w,!0),pe(w))}async function ee(){const w=c(x).trim();if(!(!w||!c(a))){_(P,!0),_(S,null);try{const I=await Dr(c(a),c(l),w);I.available?(_(S,"success"),c(i)[c(a)]={...c(i)[c(a)],available:!0,model:I.model},!c(l)&&I.model&&_(l,I.model,!0),await pe(c(a)),_(d,c(m)[c(a)]||[],!0),le("API 키 인증 성공","success")):_(S,"error")}catch{_(S,"error")}_(P,!1)}}function $(){const w=c(y).trim();!w||c(M)||(_(M,!0),_(N,"준비 중..."),_(O,0),_(A,bd(w,{onProgress(I){I.total&&I.completed!==void 0?(_(O,Math.round(I.completed/I.total*100),!0),_(N,`다운로드 중... ${c(O)}%`)):I.status&&_(N,I.status,!0)},async onDone(){_(M,!1),_(A,null),_(y,""),_(N,""),_(O,0),le(`${w} 다운로드 완료`,"success"),await pe("ollama"),_(d,c(m).ollama||[],!0),c(d).includes(w)&&await Ie(w)},onError(I){_(M,!1),_(A,null),_(N,""),_(O,0),le(`다운로드 실패: ${I}`)}}),!0))}function $n(){c(A)&&(c(A).abort(),_(A,null)),_(M,!1),_(y,""),_(N,""),_(O,0)}function nn(){_(f,!c(f))}function $r(){if(_(x,""),_(S,null),c(a))_(h,c(a),!0);else{const w=Object.keys(c(i));_(h,w.length>0?w[0]:null,!0)}_(g,!0),c(h)&&pe(c(h))}function Ir(){Y.createConversation(),_(r,""),_(n,!1),c(o)&&(c(o).abort(),_(o,null))}function Ee(w){Y.setActive(w),_(r,""),_(n,!1),c(o)&&(c(o).abort(),_(o,null))}function Me(w){Y.deleteConversation(w)}async function fr(){var te;const w=c(r).trim();if(!w||c(n))return;if(!c(a)||!((te=c(i)[c(a)])!=null&&te.available)){le("먼저 AI Provider를 설정해주세요. 우상단 설정 버튼을 클릭하세요."),$r();return}Y.activeId||Y.createConversation(),Y.addMessage("user",w),_(r,""),_(n,!0),Y.addMessage("assistant",""),Y.updateLastMessage({loading:!0}),xn(v);const I=Y.active,X=[];if(I){const oe=I.messages.slice(0,-2);for(const j of oe)(j.role==="user"||j.role==="assistant")&&j.text&&j.text.trim()&&!j.error&&!j.loading&&X.push({role:j.role,text:j.text})}const Ke=_d(null,w,{provider:c(a),model:c(l)},{onMeta(oe){const j={meta:oe};oe.company&&(j.company=oe.company),Y.updateLastMessage(j)},onChunk(oe){const j=Y.active;if(!j)return;const dt=j.messages[j.messages.length-1];Y.updateLastMessage({text:((dt==null?void 0:dt.text)||"")+oe}),xn(v)},onDone(){Y.updateLastMessage({loading:!1}),_(n,!1),_(o,null),xn(v)},onError(oe){Y.updateLastMessage({text:`오류: ${oe}`,loading:!1,error:!0}),le(oe),_(n,!1),_(o,null)}},X);_(o,Ke,!0)}function In(){c(o)&&(c(o).abort(),_(o,null),_(n,!1),Y.updateLastMessage({loading:!1}))}function he(w){(w.metaKey||w.ctrlKey)&&w.key==="n"&&(w.preventDefault(),Ir()),(w.metaKey||w.ctrlKey)&&w.shiftKey&&w.key==="S"&&(w.preventDefault(),nn()),w.key==="Escape"&&c(g)&&_(g,!1)}let On=Re(()=>{var w;return((w=Y.active)==null?void 0:w.messages)||[]}),Or=Re(()=>Y.active&&Y.active.messages.length>0),Wt=Re(()=>{var w;return!c(u)&&(!c(a)||!((w=c(i)[c(a)])!=null&&w.available))});const on=["gemma3","llama3.1","qwen2.5","deepseek-r1","phi4","mistral"];var ur=Cu();Bc("keydown",Do,he);var ui=H(ur),vi=k(ui);Ff(vi,{get conversations(){return Y.conversations},get activeId(){return Y.activeId},get open(){return c(f)},onNewChat:Ir,onSelect:Ee,onDelete:Me});var Aa=z(vi,2),pi=k(Aa),hi=k(pi),ao=k(hi),Ea=k(ao);{var Ma=w=>{Af(w,{size:18})},za=w=>{Sf(w,{size:18})};K(Ea,w=>{c(f)?w(Ma):w(za,-1)})}var Ta=z(ao,2),mi=k(Ta),Ca=k(mi);yf(Ca,{size:15});var gi=z(mi,2),Pa=k(gi);wf(Pa,{size:15});var bi=z(gi,2),Na=k(bi);kf(Na,{size:15});var lo=z(bi,4),_i=k(lo);{var $a=w=>{var I=tu(),X=H(I);Xt(X,{size:12,class:"animate-spin"}),E(w,I)},Ia=w=>{var I=ru(),X=H(I);Hn(X,{size:12}),E(w,I)},Oa=w=>{var I=ou(),X=z(H(I),2),Ke=k(X),te=z(X,2);{var oe=$t=>{var sn=nu(),co=z(H(sn),2),fo=k(co);Z(()=>xe(fo,c(l))),E($t,sn)};K(te,$t=>{c(l)&&$t(oe)})}var j=z(te,2);{var dt=$t=>{Xt($t,{size:10,class:"animate-spin text-dl-primary-light"})};K(j,$t=>{c(M)&&$t(dt)})}Z(()=>xe(Ke,c(a))),E(w,I)};K(_i,w=>{c(u)?w($a):c(Wt)?w(Ia,1):w(Oa,-1)})}var La=z(_i,2);Mf(La,{size:12});var Ra=z(hi,2);{var ja=w=>{var I=iu(),X=k(I);Xt(X,{size:16,class:"text-dl-text-dim animate-spin flex-shrink-0"}),E(w,I)},Da=w=>{var I=su(),X=k(I);Hn(X,{size:16,class:"text-dl-primary-light flex-shrink-0"});var Ke=z(X,4);q("click",Ke,()=>$r()),E(w,I)};K(Ra,w=>{c(u)&&!c(g)?w(ja):c(Wt)&&!c(g)&&w(Da,1)})}var Fa=z(pi,2);{var Va=w=>{eu(w,{get messages(){return c(On)},get isLoading(){return c(n)},get scrollTrigger(){return c(v)},onSend:fr,onStop:In,get inputText(){return c(r)},set inputText(I){_(r,I,!0)}})},Ga=w=>{Bf(w,{onSend:fr,get inputText(){return c(r)},set inputText(I){_(r,I,!0)}})};K(Fa,w=>{c(Or)?w(Va):w(Ga,-1)})}var xi=z(ui,2);{var Ba=w=>{var I=zu(),X=k(I),Ke=k(X),te=z(k(Ke),2),oe=k(te);Pf(oe,{size:18});var j=z(Ke,2),dt=k(j);Vt(dt,21,()=>Object.entries(c(i)),Ft,(ft,vr)=>{var Ht=Re(()=>fs(c(vr),2));let ie=()=>c(Ht)[0],De=()=>c(Ht)[1];const an=Re(()=>ie()===c(a)),Ua=Re(()=>c(h)===ie()),Lr=Re(()=>De().auth==="api_key"),yi=Re(()=>De().auth==="cli"),Ln=Re(()=>c(m)[ie()]||[]),wi=Re(()=>c(p)[ie()]);var uo=Mu(),vo=k(uo),ki=k(vo),Si=z(ki,2),Ai=k(Si),Ei=k(Ai),Ya=k(Ei),Ja=z(Ei,2);{var Xa=ge=>{var et=au();E(ge,et)};K(Ja,ge=>{c(an)&&ge(Xa)})}var Za=z(Ai,2),Qa=k(Za),el=z(Si,2),tl=k(el);{var rl=ge=>{es(ge,{size:16,class:"text-dl-success"})},nl=ge=>{var et=lu(),Rr=H(et);ns(Rr,{size:14,class:"text-amber-400"}),E(ge,et)},ol=ge=>{var et=cu(),Rr=H(et);Tf(Rr,{size:14,class:"text-dl-text-dim"}),E(ge,et)};K(tl,ge=>{De().available?ge(rl):c(Lr)?ge(nl,1):c(yi)&&!De().available&&ge(ol,2)})}var il=z(vo,2);{var sl=ge=>{var et=Eu(),Rr=H(et);{var al=se=>{var ze=fu(),Oe=k(ze),tt=k(Oe),ut=z(Oe,2),qe=k(ut),It=z(qe,2),pr=k(It);{var ln=J=>{Xt(J,{size:12,class:"animate-spin"})},vt=J=>{ns(J,{size:12})};K(pr,J=>{c(P)?J(ln):J(vt,-1)})}var Kt=z(ut,2);{var de=J=>{var pt=du(),Le=k(pt);Hn(Le,{size:12}),E(J,pt)};K(Kt,J=>{c(S)==="error"&&J(de)})}Z(J=>{xe(tt,De().envKey?`환경변수 ${De().envKey}로도 설정 가능합니다`:"API 키를 입력하세요"),Xn(qe,"placeholder",ie()==="openai"?"sk-...":ie()==="claude"?"sk-ant-...":"API Key"),It.disabled=J},[()=>!c(x).trim()||c(P)]),q("keydown",qe,J=>{J.key==="Enter"&&ee()}),Fr(qe,()=>c(x),J=>_(x,J)),q("click",It,ee),E(se,ze)};K(Rr,se=>{c(Lr)&&!De().available&&se(al)})}var Mi=z(Rr,2);{var ll=se=>{var ze=vu(),Oe=k(ze),tt=k(Oe);es(tt,{size:13,class:"text-dl-success"});var ut=z(Oe,2),qe=k(ut),It=z(qe,2);{var pr=vt=>{var Kt=uu(),de=k(Kt);{var J=Le=>{Xt(Le,{size:10,class:"animate-spin"})},pt=Le=>{var qt=Yn("변경");E(Le,qt)};K(de,Le=>{c(P)?Le(J):Le(pt,-1)})}Z(()=>Kt.disabled=c(P)),q("click",Kt,ee),E(vt,Kt)},ln=Re(()=>c(x).trim());K(It,vt=>{c(ln)&&vt(pr)})}q("keydown",qe,vt=>{vt.key==="Enter"&&ee()}),Fr(qe,()=>c(x),vt=>_(x,vt)),E(se,ze)};K(Mi,se=>{c(Lr)&&De().available&&se(ll)})}var zi=z(Mi,2);{var cl=se=>{var ze=pu(),Oe=z(k(ze),2),tt=k(Oe);ts(tt,{size:14});var ut=z(tt,2);rs(ut,{size:10,class:"ml-auto"}),E(se,ze)},dl=se=>{var ze=hu(),Oe=k(ze),tt=k(Oe);Hn(tt,{size:14}),E(se,ze)};K(zi,se=>{ie()==="ollama"&&!c(s).installed?se(cl):ie()==="ollama"&&c(s).installed&&!c(s).running&&se(dl,1)})}var Ti=z(zi,2);{var fl=se=>{var ze=mu(),Oe=k(ze),tt=k(Oe),ut=z(Oe,2),qe=k(ut),It=z(ut,2),pr=k(It);Z(()=>{xe(tt,ie()==="claude-code"?"Claude Code CLI가 설치되어 있지 않습니다":"Codex CLI가 설치되어 있지 않습니다"),xe(qe,ie()==="claude-code"?"npm install -g @anthropic-ai/claude-code":"npm install -g @openai/codex"),xe(pr,ie()==="claude-code"?"설치 후 `claude auth login`으로 인증하세요":"설치 후 브라우저 인증이 필요합니다")}),E(se,ze)};K(Ti,se=>{c(yi)&&!De().available&&se(fl)})}var ul=z(Ti,2);{var vl=se=>{var ze=Au(),Oe=k(ze),tt=z(k(Oe),2);{var ut=de=>{Xt(de,{size:12,class:"animate-spin text-dl-text-dim"})};K(tt,de=>{c(wi)&&de(ut)})}var qe=z(Oe,2);{var It=de=>{var J=gu(),pt=k(J);Xt(pt,{size:14,class:"animate-spin"}),E(de,J)},pr=de=>{var J=_u();Vt(J,21,()=>c(Ln),Ft,(pt,Le)=>{var qt=bu(),Rn=k(qt),po=z(Rn);{var ho=rt=>{xf(rt,{size:10,class:"inline ml-1"})};K(po,rt=>{c(Le)===c(l)&&c(an)&&rt(ho)})}Z(rt=>{Qe(qt,1,rt),xe(Rn,`${c(Le)??""} `)},[()=>Ze(We("px-3 py-1.5 rounded-lg text-[11px] border transition-all",c(Le)===c(l)&&c(an)?"border-dl-primary/50 bg-dl-primary/10 text-dl-primary-light font-medium":"border-dl-border text-dl-text-muted hover:border-dl-primary/30 hover:text-dl-text"))]),q("click",qt,()=>{ie()!==c(a)&&ce(ie()),Ie(c(Le))}),E(pt,qt)}),E(de,J)},ln=de=>{var J=xu();E(de,J)};K(qe,de=>{c(wi)&&c(Ln).length===0?de(It):c(Ln).length>0?de(pr,1):de(ln,-1)})}var vt=z(qe,2);{var Kt=de=>{var J=Su(),pt=k(J),Le=z(k(pt),2),qt=z(k(Le));rs(qt,{size:9});var Rn=z(pt,2);{var po=rt=>{var cn=yu(),dn=k(cn),jr=k(dn),fn=k(jr);Xt(fn,{size:12,class:"animate-spin text-dl-primary-light"});var mo=z(jr,2),jn=z(dn,2),Ot=k(jn),un=z(jn,2),Dn=k(un);Z(()=>{oa(Ot,`width: ${c(O)??""}%`),xe(Dn,c(N))}),q("click",mo,$n),E(rt,cn)},ho=rt=>{var cn=ku(),dn=H(cn),jr=k(dn),fn=z(jr,2),mo=k(fn);ts(mo,{size:12});var jn=z(dn,2);Vt(jn,21,()=>on,Ft,(Ot,un)=>{var Dn=Q(),pl=H(Dn);{var hl=go=>{var bo=wu(),gl=k(bo);Z(()=>xe(gl,c(un))),q("click",bo,()=>{_(y,c(un),!0)}),E(go,bo)},ml=Re(()=>!c(Ln).includes(c(un)));K(pl,go=>{c(ml)&&go(hl)})}E(Ot,Dn)}),Z(Ot=>fn.disabled=Ot,[()=>!c(y).trim()]),q("keydown",jr,Ot=>{Ot.key==="Enter"&&$()}),Fr(jr,()=>c(y),Ot=>_(y,Ot)),q("click",fn,$),E(rt,cn)};K(Rn,rt=>{c(M)?rt(po):rt(ho,-1)})}E(de,J)};K(vt,de=>{ie()==="ollama"&&de(Kt)})}E(se,ze)};K(ul,se=>{(De().available||c(Lr))&&se(vl)})}E(ge,et)};K(il,ge=>{(c(Ua)||c(an))&&ge(sl)})}Z((ge,et)=>{Qe(uo,1,ge),Qe(ki,1,et),xe(Ya,De().label||ie()),xe(Qa,De().desc||"")},[()=>Ze(We("rounded-xl border transition-all",c(an)?"border-dl-primary/40 bg-dl-primary/[0.03]":"border-dl-border")),()=>Ze(We("w-2.5 h-2.5 rounded-full flex-shrink-0",De().available?"bg-dl-success":c(Lr)?"bg-amber-400":"bg-dl-text-dim"))]),q("click",vo,()=>{De().available||c(Lr)?ie()===c(a)?me(ie()):ce(ie()):me(ie())}),E(ft,uo)});var $t=z(j,2),sn=k($t),co=k(sn);{var fo=ft=>{var vr=Yn();Z(()=>{var Ht;return xe(vr,`현재: ${(((Ht=c(i)[c(a)])==null?void 0:Ht.label)||c(a))??""} / ${c(l)??""}`)}),E(ft,vr)},Ka=ft=>{var vr=Yn();Z(()=>{var Ht;return xe(vr,`현재: ${(((Ht=c(i)[c(a)])==null?void 0:Ht.label)||c(a))??""}`)}),E(ft,vr)};K(co,ft=>{c(a)&&c(l)?ft(fo):c(a)&&ft(Ka,1)})}var qa=z(sn,2);q("click",I,ft=>{ft.target===ft.currentTarget&&_(g,!1)}),q("keydown",I,()=>{}),q("click",te,()=>_(g,!1)),q("click",qa,()=>_(g,!1)),E(w,I)};K(xi,w=>{c(g)&&w(Ba)})}var Wa=z(xi,2);{var Ha=w=>{var I=Tu(),X=k(I),Ke=k(X);Z(te=>{Qe(X,1,te),xe(Ke,c(U))},[()=>Ze(We("px-4 py-3 rounded-xl border text-[13px] shadow-2xl max-w-sm",c(re)==="error"?"bg-dl-primary/10 border-dl-primary/30 text-dl-primary-light":c(re)==="success"?"bg-dl-success/10 border-dl-success/30 text-dl-success":"bg-dl-bg-card border-dl-border text-dl-text"))]),E(w,I)};K(Wa,w=>{c(Ae)&&w(Ha)})}Z(w=>Qe(lo,1,w),[()=>Ze(We("flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] transition-colors",c(u)?"text-dl-text-dim":c(Wt)?"text-dl-primary-light bg-dl-primary/10 hover:bg-dl-primary/15":"text-dl-text-dim hover:text-dl-text-muted hover:bg-white/5"))]),q("click",ao,nn),q("click",lo,()=>$r()),E(e,ur),Bt()}Pn(["click","keydown"]);qc(Pu,{target:document.getElementById("app")});
