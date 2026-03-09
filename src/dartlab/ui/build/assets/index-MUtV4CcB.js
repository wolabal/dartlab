var nd=Object.defineProperty;var so=e=>{throw TypeError(e)};var ad=(e,t,r)=>t in e?nd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Yt=(e,t,r)=>ad(e,typeof t!="symbol"?t+"":t,r),Va=(e,t,r)=>t.has(e)||so("Cannot "+r);var _=(e,t,r)=>(Va(e,t,"read from private field"),r?r.call(e):t.get(e)),de=(e,t,r)=>t.has(e)?so("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),re=(e,t,r,n)=>(Va(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),qe=(e,t,r)=>(Va(e,t,"access private method"),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}})();const Xa=!1;var _s=Array.isArray,sd=Array.prototype.indexOf,$n=Array.prototype.includes,za=Array.from,od=Object.defineProperty,Ir=Object.getOwnPropertyDescriptor,Go=Object.getOwnPropertyDescriptors,id=Object.prototype,ld=Array.prototype,ys=Object.getPrototypeOf,oo=Object.isExtensible;function Bn(e){return typeof e=="function"}const dd=()=>{};function cd(e){return e()}function Za(e){for(var t=0;t<e.length;t++)e[t]()}function Vo(){var e,t,r=new Promise((n,a)=>{e=n,t=a});return{promise:r,resolve:e,reject:t}}function Bo(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const lt=2,Nn=4,ln=8,Ma=1<<24,Gr=16,rr=32,fn=64,Qa=128,Gt=512,st=1024,ot=2048,tr=4096,_t=8192,vr=16384,In=32768,jr=65536,io=1<<17,ud=1<<18,Ln=1<<19,Ho=1<<20,ur=1<<25,dn=65536,es=1<<21,ws=1<<22,Lr=1<<23,pr=Symbol("$state"),Wo=Symbol("legacy props"),fd=Symbol(""),Xr=new class extends Error{constructor(){super(...arguments);Yt(this,"name","StaleReactionError");Yt(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var jo;const Ko=!!((jo=globalThis.document)!=null&&jo.contentType)&&globalThis.document.contentType.includes("xml");function vd(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function pd(e,t,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function hd(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function md(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function gd(e){throw new Error("https://svelte.dev/e/effect_orphan")}function bd(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function xd(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function _d(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function yd(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function wd(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function kd(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Sd=1,Ad=2,qo=4,zd=8,Md=16,$d=1,Ed=2,Uo=4,Cd=8,Pd=16,Td=1,Nd=2,et=Symbol(),Yo="http://www.w3.org/1999/xhtml",Jo="http://www.w3.org/2000/svg",Id="http://www.w3.org/1998/Math/MathML",Ld="@attach";function Od(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Rd(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Xo(e){return e===this.v}function jd(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Zo(e){return!jd(e,this.v)}let ra=!1,Dd=!1;function Fd(){ra=!0}let tt=null;function En(e){tt=e}function kr(e,t=!1,r){tt={p:tt,i:!1,c:null,e:null,s:e,x:null,l:ra&&!t?{s:null,u:null,$:[]}:null}}function Sr(e){var t=tt,r=t.e;if(r!==null){t.e=null;for(var n of r)gi(n)}return t.i=!0,tt=t.p,{}}function na(){return!ra||tt!==null&&tt.l===null}let Zr=[];function Qo(){var e=Zr;Zr=[],Za(e)}function hr(e){if(Zr.length===0&&!Yn){var t=Zr;queueMicrotask(()=>{t===Zr&&Qo()})}Zr.push(e)}function Gd(){for(;Zr.length>0;)Qo()}function ei(e){var t=oe;if(t===null)return se.f|=Lr,e;if((t.f&In)===0&&(t.f&Nn)===0)throw e;Nr(e,t)}function Nr(e,t){for(;t!==null;){if((t.f&Qa)!==0){if((t.f&In)===0)throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}const Vd=-7169;function Ge(e,t){e.f=e.f&Vd|t}function ks(e){(e.f&Gt)!==0||e.deps===null?Ge(e,st):Ge(e,tr)}function ti(e){if(e!==null)for(const t of e)(t.f&lt)===0||(t.f&dn)===0||(t.f^=dn,ti(t.deps))}function ri(e,t,r){(e.f&ot)!==0?t.add(e):(e.f&tr)!==0&&r.add(e),ti(e.deps),Ge(e,st)}const ca=new Set;let ne=null,ts=null,at=null,zt=[],$a=null,Yn=!1,Cn=null,Bd=1;var Cr,_n,tn,yn,wn,kn,Pr,ir,Sn,Et,rs,ns,as,ss;const Os=class Os{constructor(){de(this,Et);Yt(this,"id",Bd++);Yt(this,"current",new Map);Yt(this,"previous",new Map);de(this,Cr,new Set);de(this,_n,new Set);de(this,tn,0);de(this,yn,0);de(this,wn,null);de(this,kn,new Set);de(this,Pr,new Set);de(this,ir,new Map);Yt(this,"is_fork",!1);de(this,Sn,!1)}skip_effect(t){_(this,ir).has(t)||_(this,ir).set(t,{d:[],m:[]})}unskip_effect(t){var r=_(this,ir).get(t);if(r){_(this,ir).delete(t);for(var n of r.d)Ge(n,ot),fr(n);for(n of r.m)Ge(n,tr),fr(n)}}process(t){var a;zt=[],this.apply();var r=Cn=[],n=[];for(const s of t)qe(this,Et,ns).call(this,s,r,n);if(Cn=null,qe(this,Et,rs).call(this)){qe(this,Et,as).call(this,n),qe(this,Et,as).call(this,r);for(const[s,o]of _(this,ir))oi(s,o)}else{ts=this,ne=null;for(const s of _(this,Cr))s(this);_(this,Cr).clear(),_(this,tn)===0&&qe(this,Et,ss).call(this),lo(n),lo(r),_(this,kn).clear(),_(this,Pr).clear(),ts=null,(a=_(this,wn))==null||a.resolve()}at=null}capture(t,r){r!==et&&!this.previous.has(t)&&this.previous.set(t,r),(t.f&Lr)===0&&(this.current.set(t,t.v),at==null||at.set(t,t.v))}activate(){ne=this,this.apply()}deactivate(){ne===this&&(ne=null,at=null)}flush(){var t;if(zt.length>0)ne=this,ni();else if(_(this,tn)===0&&!this.is_fork){for(const r of _(this,Cr))r(this);_(this,Cr).clear(),qe(this,Et,ss).call(this),(t=_(this,wn))==null||t.resolve()}this.deactivate()}discard(){for(const t of _(this,_n))t(this);_(this,_n).clear()}increment(t){re(this,tn,_(this,tn)+1),t&&re(this,yn,_(this,yn)+1)}decrement(t){re(this,tn,_(this,tn)-1),t&&re(this,yn,_(this,yn)-1),!_(this,Sn)&&(re(this,Sn,!0),hr(()=>{re(this,Sn,!1),qe(this,Et,rs).call(this)?zt.length>0&&this.flush():this.revive()}))}revive(){for(const t of _(this,kn))_(this,Pr).delete(t),Ge(t,ot),fr(t);for(const t of _(this,Pr))Ge(t,tr),fr(t);this.flush()}oncommit(t){_(this,Cr).add(t)}ondiscard(t){_(this,_n).add(t)}settled(){return(_(this,wn)??re(this,wn,Vo())).promise}static ensure(){if(ne===null){const t=ne=new Os;ca.add(ne),Yn||hr(()=>{ne===t&&t.flush()})}return ne}apply(){}};Cr=new WeakMap,_n=new WeakMap,tn=new WeakMap,yn=new WeakMap,wn=new WeakMap,kn=new WeakMap,Pr=new WeakMap,ir=new WeakMap,Sn=new WeakMap,Et=new WeakSet,rs=function(){return this.is_fork||_(this,yn)>0},ns=function(t,r,n){t.f^=st;for(var a=t.first;a!==null;){var s=a.f,o=(s&(rr|fn))!==0,i=o&&(s&st)!==0,d=(s&_t)!==0,c=i||_(this,ir).has(a);if(!c&&a.fn!==null){o?d||(a.f^=st):(s&Nn)!==0?r.push(a):(s&(ln|Ma))!==0&&d?n.push(a):ia(a)&&(Tn(a),(s&Gr)!==0&&(_(this,Pr).add(a),d&&Ge(a,ot)));var f=a.first;if(f!==null){a=f;continue}}for(;a!==null;){var h=a.next;if(h!==null){a=h;break}a=a.parent}}},as=function(t){for(var r=0;r<t.length;r+=1)ri(t[r],_(this,kn),_(this,Pr))},ss=function(){var s;if(ca.size>1){this.previous.clear();var t=ne,r=at,n=!0;for(const o of ca){if(o===this){n=!1;continue}const i=[];for(const[c,f]of this.current){if(o.current.has(c))if(n&&f!==o.current.get(c))o.current.set(c,f);else continue;i.push(c)}if(i.length===0)continue;const d=[...o.current.keys()].filter(c=>!this.current.has(c));if(d.length>0){var a=zt;zt=[];const c=new Set,f=new Map;for(const h of i)ai(h,d,c,f);if(zt.length>0){ne=o,o.apply();for(const h of zt)qe(s=o,Et,ns).call(s,h,[],[]);o.deactivate()}zt=a}}ne=t,at=r}_(this,ir).clear(),ca.delete(this)};let Or=Os;function Hd(e){var t=Yn;Yn=!0;try{for(var r;;){if(Gd(),zt.length===0&&(ne==null||ne.flush(),zt.length===0))return $a=null,r;ni()}}finally{Yn=t}}function ni(){var e=null;try{for(var t=0;zt.length>0;){var r=Or.ensure();if(t++>1e3){var n,a;Wd()}r.process(zt),Rr.clear()}}finally{zt=[],$a=null,Cn=null}}function Wd(){try{bd()}catch(e){Nr(e,$a)}}let Jt=null;function lo(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(vr|_t))===0&&ia(n)&&(Jt=new Set,Tn(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&yi(n),(Jt==null?void 0:Jt.size)>0)){Rr.clear();for(const a of Jt){if((a.f&(vr|_t))!==0)continue;const s=[a];let o=a.parent;for(;o!==null;)Jt.has(o)&&(Jt.delete(o),s.push(o)),o=o.parent;for(let i=s.length-1;i>=0;i--){const d=s[i];(d.f&(vr|_t))===0&&Tn(d)}}Jt.clear()}}Jt=null}}function ai(e,t,r,n){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const a of e.reactions){const s=a.f;(s&lt)!==0?ai(a,t,r,n):(s&(ws|Gr))!==0&&(s&ot)===0&&si(a,t,n)&&(Ge(a,ot),fr(a))}}function si(e,t,r){const n=r.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const a of e.deps){if($n.call(t,a))return!0;if((a.f&lt)!==0&&si(a,t,r))return r.set(a,!0),!0}return r.set(e,!1),!1}function fr(e){var t=$a=e,r=t.b;if(r!=null&&r.is_pending&&(e.f&(Nn|ln|Ma))!==0&&(e.f&In)===0){r.defer_effect(e);return}for(;t.parent!==null;){t=t.parent;var n=t.f;if(Cn!==null&&t===oe&&(e.f&ln)===0)return;if((n&(fn|rr))!==0){if((n&st)===0)return;t.f^=st}}zt.push(t)}function oi(e,t){if(!((e.f&rr)!==0&&(e.f&st)!==0)){(e.f&ot)!==0?t.d.push(e):(e.f&tr)!==0&&t.m.push(e),Ge(e,st);for(var r=e.first;r!==null;)oi(r,t),r=r.next}}function Kd(e){let t=0,r=Dr(0),n;return()=>{Ms()&&(l(r),Es(()=>(t===0&&(n=cn(()=>e(()=>Xn(r)))),t+=1,()=>{hr(()=>{t-=1,t===0&&(n==null||n(),n=void 0,Xn(r))})})))}}var qd=jr|Ln;function Ud(e,t,r,n){new Yd(e,t,r,n)}var Ft,xs,lr,rn,At,dr,Nt,Zt,_r,nn,Tr,An,zn,Mn,yr,Sa,Ze,Jd,Xd,Zd,os,ma,ga,is;class Yd{constructor(t,r,n,a){de(this,Ze);Yt(this,"parent");Yt(this,"is_pending",!1);Yt(this,"transform_error");de(this,Ft);de(this,xs,null);de(this,lr);de(this,rn);de(this,At);de(this,dr,null);de(this,Nt,null);de(this,Zt,null);de(this,_r,null);de(this,nn,0);de(this,Tr,0);de(this,An,!1);de(this,zn,new Set);de(this,Mn,new Set);de(this,yr,null);de(this,Sa,Kd(()=>(re(this,yr,Dr(_(this,nn))),()=>{re(this,yr,null)})));var s;re(this,Ft,t),re(this,lr,r),re(this,rn,o=>{var i=oe;i.b=this,i.f|=Qa,n(o)}),this.parent=oe.b,this.transform_error=a??((s=this.parent)==null?void 0:s.transform_error)??(o=>o),re(this,At,oa(()=>{qe(this,Ze,os).call(this)},qd))}defer_effect(t){ri(t,_(this,zn),_(this,Mn))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!_(this,lr).pending}update_pending_count(t){qe(this,Ze,is).call(this,t),re(this,nn,_(this,nn)+t),!(!_(this,yr)||_(this,An))&&(re(this,An,!0),hr(()=>{re(this,An,!1),_(this,yr)&&Pn(_(this,yr),_(this,nn))}))}get_effect_pending(){return _(this,Sa).call(this),l(_(this,yr))}error(t){var r=_(this,lr).onerror;let n=_(this,lr).failed;if(!r&&!n)throw t;_(this,dr)&&(it(_(this,dr)),re(this,dr,null)),_(this,Nt)&&(it(_(this,Nt)),re(this,Nt,null)),_(this,Zt)&&(it(_(this,Zt)),re(this,Zt,null));var a=!1,s=!1;const o=()=>{if(a){Rd();return}a=!0,s&&kd(),_(this,Zt)!==null&&sn(_(this,Zt),()=>{re(this,Zt,null)}),qe(this,Ze,ga).call(this,()=>{Or.ensure(),qe(this,Ze,os).call(this)})},i=d=>{try{s=!0,r==null||r(d,o),s=!1}catch(c){Nr(c,_(this,At)&&_(this,At).parent)}n&&re(this,Zt,qe(this,Ze,ga).call(this,()=>{Or.ensure();try{return $t(()=>{var c=oe;c.b=this,c.f|=Qa,n(_(this,Ft),()=>d,()=>o)})}catch(c){return Nr(c,_(this,At).parent),null}}))};hr(()=>{var d;try{d=this.transform_error(t)}catch(c){Nr(c,_(this,At)&&_(this,At).parent);return}d!==null&&typeof d=="object"&&typeof d.then=="function"?d.then(i,c=>Nr(c,_(this,At)&&_(this,At).parent)):i(d)})}}Ft=new WeakMap,xs=new WeakMap,lr=new WeakMap,rn=new WeakMap,At=new WeakMap,dr=new WeakMap,Nt=new WeakMap,Zt=new WeakMap,_r=new WeakMap,nn=new WeakMap,Tr=new WeakMap,An=new WeakMap,zn=new WeakMap,Mn=new WeakMap,yr=new WeakMap,Sa=new WeakMap,Ze=new WeakSet,Jd=function(){try{re(this,dr,$t(()=>_(this,rn).call(this,_(this,Ft))))}catch(t){this.error(t)}},Xd=function(t){const r=_(this,lr).failed;r&&re(this,Zt,$t(()=>{r(_(this,Ft),()=>t,()=>()=>{})}))},Zd=function(){const t=_(this,lr).pending;t&&(this.is_pending=!0,re(this,Nt,$t(()=>t(_(this,Ft)))),hr(()=>{var r=re(this,_r,document.createDocumentFragment()),n=mr();r.append(n),re(this,dr,qe(this,Ze,ga).call(this,()=>(Or.ensure(),$t(()=>_(this,rn).call(this,n))))),_(this,Tr)===0&&(_(this,Ft).before(r),re(this,_r,null),sn(_(this,Nt),()=>{re(this,Nt,null)}),qe(this,Ze,ma).call(this))}))},os=function(){try{if(this.is_pending=this.has_pending_snippet(),re(this,Tr,0),re(this,nn,0),re(this,dr,$t(()=>{_(this,rn).call(this,_(this,Ft))})),_(this,Tr)>0){var t=re(this,_r,document.createDocumentFragment());Ts(_(this,dr),t);const r=_(this,lr).pending;re(this,Nt,$t(()=>r(_(this,Ft))))}else qe(this,Ze,ma).call(this)}catch(r){this.error(r)}},ma=function(){this.is_pending=!1;for(const t of _(this,zn))Ge(t,ot),fr(t);for(const t of _(this,Mn))Ge(t,tr),fr(t);_(this,zn).clear(),_(this,Mn).clear()},ga=function(t){var r=oe,n=se,a=tt;Ht(_(this,At)),Bt(_(this,At)),En(_(this,At).ctx);try{return t()}catch(s){return ei(s),null}finally{Ht(r),Bt(n),En(a)}},is=function(t){var r;if(!this.has_pending_snippet()){this.parent&&qe(r=this.parent,Ze,is).call(r,t);return}re(this,Tr,_(this,Tr)+t),_(this,Tr)===0&&(qe(this,Ze,ma).call(this),_(this,Nt)&&sn(_(this,Nt),()=>{re(this,Nt,null)}),_(this,_r)&&(_(this,Ft).before(_(this,_r)),re(this,_r,null)))};function ii(e,t,r,n){const a=na()?aa:Ss;var s=e.filter(h=>!h.settled);if(r.length===0&&s.length===0){n(t.map(a));return}var o=oe,i=Qd(),d=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(h=>h.promise)):null;function c(h){i();try{n(h)}catch(v){(o.f&vr)===0&&Nr(v,o)}ls()}if(r.length===0){d.then(()=>c(t.map(a)));return}function f(){i(),Promise.all(r.map(h=>tc(h))).then(h=>c([...t.map(a),...h])).catch(h=>Nr(h,o))}d?d.then(f):f()}function Qd(){var e=oe,t=se,r=tt,n=ne;return function(s=!0){Ht(e),Bt(t),En(r),s&&(n==null||n.activate())}}function ls(e=!0){Ht(null),Bt(null),En(null),e&&(ne==null||ne.deactivate())}function ec(){var e=oe.b,t=ne,r=e.is_rendered();return e.update_pending_count(1),t.increment(r),()=>{e.update_pending_count(-1),t.decrement(r)}}function aa(e){var t=lt|ot,r=se!==null&&(se.f&lt)!==0?se:null;return oe!==null&&(oe.f|=Ln),{ctx:tt,deps:null,effects:null,equals:Xo,f:t,fn:e,reactions:null,rv:0,v:et,wv:0,parent:r??oe,ac:null}}function tc(e,t,r){oe===null&&vd();var a=void 0,s=Dr(et),o=!se,i=new Map;return mc(()=>{var v;var d=Vo();a=d.promise;try{Promise.resolve(e()).then(d.resolve,d.reject).finally(ls)}catch(z){d.reject(z),ls()}var c=ne;if(o){var f=ec();(v=i.get(c))==null||v.reject(Xr),i.delete(c),i.set(c,d)}const h=(z,x=void 0)=>{if(c.activate(),x)x!==Xr&&(s.f|=Lr,Pn(s,x));else{(s.f&Lr)!==0&&(s.f^=Lr),Pn(s,z);for(const[k,m]of i){if(i.delete(k),k===c)break;m.reject(Xr)}}f&&f()};d.promise.then(h,z=>h(null,z||"unknown"))}),Ca(()=>{for(const d of i.values())d.reject(Xr)}),new Promise(d=>{function c(f){function h(){f===a?d(s):c(a)}f.then(h,h)}c(a)})}function Me(e){const t=aa(e);return Si(t),t}function Ss(e){const t=aa(e);return t.equals=Zo,t}function rc(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)it(t[r])}}function nc(e){for(var t=e.parent;t!==null;){if((t.f&lt)===0)return(t.f&vr)===0?t:null;t=t.parent}return null}function As(e){var t,r=oe;Ht(nc(e));try{e.f&=~dn,rc(e),t=$i(e)}finally{Ht(r)}return t}function li(e){var t=As(e);if(!e.equals(t)&&(e.wv=zi(),(!(ne!=null&&ne.is_fork)||e.deps===null)&&(e.v=t,e.deps===null))){Ge(e,st);return}Fr||(at!==null?(Ms()||ne!=null&&ne.is_fork)&&at.set(e,t):ks(e))}function ac(e){var t,r;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),(r=n.ac)==null||r.abort(Xr),n.teardown=dd,n.ac=null,Qn(n,0),Cs(n))}function di(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&Tn(t)}let ds=new Set;const Rr=new Map;let ci=!1;function Dr(e,t){var r={f:0,v:e,reactions:null,equals:Xo,rv:0,wv:0};return r}function q(e,t){const r=Dr(e);return Si(r),r}function sc(e,t=!1,r=!0){var a;const n=Dr(e);return t||(n.equals=Zo),ra&&r&&tt!==null&&tt.l!==null&&((a=tt.l).s??(a.s=[])).push(n),n}function p(e,t,r=!1){se!==null&&(!er||(se.f&io)!==0)&&na()&&(se.f&(lt|Gr|ws|io))!==0&&(Vt===null||!$n.call(Vt,e))&&wd();let n=r?vt(t):t;return Pn(e,n)}function Pn(e,t){if(!e.equals(t)){var r=e.v;Fr?Rr.set(e,t):Rr.set(e,r),e.v=t;var n=Or.ensure();if(n.capture(e,r),(e.f&lt)!==0){const a=e;(e.f&ot)!==0&&As(a),ks(a)}e.wv=zi(),ui(e,ot),na()&&oe!==null&&(oe.f&st)!==0&&(oe.f&(rr|fn))===0&&(Dt===null?bc([e]):Dt.push(e)),!n.is_fork&&ds.size>0&&!ci&&oc()}return t}function oc(){ci=!1;for(const e of ds)(e.f&st)!==0&&Ge(e,tr),ia(e)&&Tn(e);ds.clear()}function Jn(e,t=1){var r=l(e),n=t===1?r++:r--;return p(e,r),n}function Xn(e){p(e,e.v+1)}function ui(e,t){var r=e.reactions;if(r!==null)for(var n=na(),a=r.length,s=0;s<a;s++){var o=r[s],i=o.f;if(!(!n&&o===oe)){var d=(i&ot)===0;if(d&&Ge(o,t),(i&lt)!==0){var c=o;at==null||at.delete(c),(i&dn)===0&&(i&Gt&&(o.f|=dn),ui(c,tr))}else d&&((i&Gr)!==0&&Jt!==null&&Jt.add(o),fr(o))}}}function vt(e){if(typeof e!="object"||e===null||pr in e)return e;const t=ys(e);if(t!==id&&t!==ld)return e;var r=new Map,n=_s(e),a=q(0),s=on,o=i=>{if(on===s)return i();var d=se,c=on;Bt(null),vo(s);var f=i();return Bt(d),vo(c),f};return n&&r.set("length",q(e.length)),new Proxy(e,{defineProperty(i,d,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&_d();var f=r.get(d);return f===void 0?o(()=>{var h=q(c.value);return r.set(d,h),h}):p(f,c.value,!0),!0},deleteProperty(i,d){var c=r.get(d);if(c===void 0){if(d in i){const f=o(()=>q(et));r.set(d,f),Xn(a)}}else p(c,et),Xn(a);return!0},get(i,d,c){var z;if(d===pr)return e;var f=r.get(d),h=d in i;if(f===void 0&&(!h||(z=Ir(i,d))!=null&&z.writable)&&(f=o(()=>{var x=vt(h?i[d]:et),k=q(x);return k}),r.set(d,f)),f!==void 0){var v=l(f);return v===et?void 0:v}return Reflect.get(i,d,c)},getOwnPropertyDescriptor(i,d){var c=Reflect.getOwnPropertyDescriptor(i,d);if(c&&"value"in c){var f=r.get(d);f&&(c.value=l(f))}else if(c===void 0){var h=r.get(d),v=h==null?void 0:h.v;if(h!==void 0&&v!==et)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return c},has(i,d){var v;if(d===pr)return!0;var c=r.get(d),f=c!==void 0&&c.v!==et||Reflect.has(i,d);if(c!==void 0||oe!==null&&(!f||(v=Ir(i,d))!=null&&v.writable)){c===void 0&&(c=o(()=>{var z=f?vt(i[d]):et,x=q(z);return x}),r.set(d,c));var h=l(c);if(h===et)return!1}return f},set(i,d,c,f){var j;var h=r.get(d),v=d in i;if(n&&d==="length")for(var z=c;z<h.v;z+=1){var x=r.get(z+"");x!==void 0?p(x,et):z in i&&(x=o(()=>q(et)),r.set(z+"",x))}if(h===void 0)(!v||(j=Ir(i,d))!=null&&j.writable)&&(h=o(()=>q(void 0)),p(h,vt(c)),r.set(d,h));else{v=h.v!==et;var k=o(()=>vt(c));p(h,k)}var m=Reflect.getOwnPropertyDescriptor(i,d);if(m!=null&&m.set&&m.set.call(f,c),!v){if(n&&typeof d=="string"){var M=r.get("length"),N=Number(d);Number.isInteger(N)&&N>=M.v&&p(M,N+1)}Xn(a)}return!0},ownKeys(i){l(a);var d=Reflect.ownKeys(i).filter(h=>{var v=r.get(h);return v===void 0||v.v!==et});for(var[c,f]of r)f.v!==et&&!(c in i)&&d.push(c);return d},setPrototypeOf(){yd()}})}function co(e){try{if(e!==null&&typeof e=="object"&&pr in e)return e[pr]}catch{}return e}function ic(e,t){return Object.is(co(e),co(t))}var cs,fi,vi,pi;function lc(){if(cs===void 0){cs=window,fi=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;vi=Ir(t,"firstChild").get,pi=Ir(t,"nextSibling").get,oo(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),oo(r)&&(r.__t=void 0)}}function mr(e=""){return document.createTextNode(e)}function wr(e){return vi.call(e)}function sa(e){return pi.call(e)}function u(e,t){return wr(e)}function B(e,t=!1){{var r=wr(e);return r instanceof Comment&&r.data===""?sa(r):r}}function w(e,t=1,r=!1){let n=e;for(;t--;)n=sa(n);return n}function dc(e){e.textContent=""}function hi(){return!1}function zs(e,t,r){return document.createElementNS(t??Yo,e,void 0)}function cc(e,t){if(t){const r=document.body;e.autofocus=!0,hr(()=>{document.activeElement===r&&e.focus()})}}let uo=!1;function uc(){uo||(uo=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function Ea(e){var t=se,r=oe;Bt(null),Ht(null);try{return e()}finally{Bt(t),Ht(r)}}function fc(e,t,r,n=r){e.addEventListener(t,()=>Ea(r));const a=e.__on_r;a?e.__on_r=()=>{a(),n(!0)}:e.__on_r=()=>n(!0),uc()}function mi(e){oe===null&&(se===null&&gd(),md()),Fr&&hd()}function vc(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function nr(e,t){var r=oe;r!==null&&(r.f&_t)!==0&&(e|=_t);var n={ctx:tt,deps:null,nodes:null,f:e|ot|Gt,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null},a=n;if((e&Nn)!==0)Cn!==null?Cn.push(n):fr(n);else if(t!==null){try{Tn(n)}catch(o){throw it(n),o}a.deps===null&&a.teardown===null&&a.nodes===null&&a.first===a.last&&(a.f&Ln)===0&&(a=a.first,(e&Gr)!==0&&(e&jr)!==0&&a!==null&&(a.f|=jr))}if(a!==null&&(a.parent=r,r!==null&&vc(a,r),se!==null&&(se.f&lt)!==0&&(e&fn)===0)){var s=se;(s.effects??(s.effects=[])).push(a)}return n}function Ms(){return se!==null&&!er}function Ca(e){const t=nr(ln,null);return Ge(t,st),t.teardown=e,t}function _a(e){mi();var t=oe.f,r=!se&&(t&rr)!==0&&(t&In)===0;if(r){var n=tt;(n.e??(n.e=[])).push(e)}else return gi(e)}function gi(e){return nr(Nn|Ho,e)}function pc(e){return mi(),nr(ln|Ho,e)}function hc(e){Or.ensure();const t=nr(fn|Ln,e);return(r={})=>new Promise(n=>{r.outro?sn(t,()=>{it(t),n(void 0)}):(it(t),n(void 0))})}function $s(e){return nr(Nn,e)}function mc(e){return nr(ws|Ln,e)}function Es(e,t=0){return nr(ln|t,e)}function W(e,t=[],r=[],n=[]){ii(n,t,r,a=>{nr(ln,()=>e(...a.map(l)))})}function oa(e,t=0){var r=nr(Gr|t,e);return r}function bi(e,t=0){var r=nr(Ma|t,e);return r}function $t(e){return nr(rr|Ln,e)}function xi(e){var t=e.teardown;if(t!==null){const r=Fr,n=se;fo(!0),Bt(null);try{t.call(null)}finally{fo(r),Bt(n)}}}function Cs(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const a=r.ac;a!==null&&Ea(()=>{a.abort(Xr)});var n=r.next;(r.f&fn)!==0?r.parent=null:it(r,t),r=n}}function gc(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&rr)===0&&it(t),t=r}}function it(e,t=!0){var r=!1;(t||(e.f&ud)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(_i(e.nodes.start,e.nodes.end),r=!0),Cs(e,t&&!r),Qn(e,0),Ge(e,vr);var n=e.nodes&&e.nodes.t;if(n!==null)for(const s of n)s.stop();xi(e);var a=e.parent;a!==null&&a.first!==null&&yi(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=null}function _i(e,t){for(;e!==null;){var r=e===t?null:sa(e);e.remove(),e=r}}function yi(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function sn(e,t,r=!0){var n=[];wi(e,n,!0);var a=()=>{r&&it(e),t&&t()},s=n.length;if(s>0){var o=()=>--s||a();for(var i of n)i.out(o)}else a()}function wi(e,t,r){if((e.f&_t)===0){e.f^=_t;var n=e.nodes&&e.nodes.t;if(n!==null)for(const i of n)(i.is_global||r)&&t.push(i);for(var a=e.first;a!==null;){var s=a.next,o=(a.f&jr)!==0||(a.f&rr)!==0&&(e.f&Gr)!==0;wi(a,t,o?r:!1),a=s}}}function Ps(e){ki(e,!0)}function ki(e,t){if((e.f&_t)!==0){e.f^=_t;for(var r=e.first;r!==null;){var n=r.next,a=(r.f&jr)!==0||(r.f&rr)!==0;ki(r,a?t:!1),r=n}var s=e.nodes&&e.nodes.t;if(s!==null)for(const o of s)(o.is_global||t)&&o.in()}}function Ts(e,t){if(e.nodes)for(var r=e.nodes.start,n=e.nodes.end;r!==null;){var a=r===n?null:sa(r);t.append(r),r=a}}let ba=!1,Fr=!1;function fo(e){Fr=e}let se=null,er=!1;function Bt(e){se=e}let oe=null;function Ht(e){oe=e}let Vt=null;function Si(e){se!==null&&(Vt===null?Vt=[e]:Vt.push(e))}let Mt=null,Tt=0,Dt=null;function bc(e){Dt=e}let Ai=1,Qr=0,on=Qr;function vo(e){on=e}function zi(){return++Ai}function ia(e){var t=e.f;if((t&ot)!==0)return!0;if(t&lt&&(e.f&=~dn),(t&tr)!==0){for(var r=e.deps,n=r.length,a=0;a<n;a++){var s=r[a];if(ia(s)&&li(s),s.wv>e.wv)return!0}(t&Gt)!==0&&at===null&&Ge(e,st)}return!1}function Mi(e,t,r=!0){var n=e.reactions;if(n!==null&&!(Vt!==null&&$n.call(Vt,e)))for(var a=0;a<n.length;a++){var s=n[a];(s.f&lt)!==0?Mi(s,t,!1):t===s&&(r?Ge(s,ot):(s.f&st)!==0&&Ge(s,tr),fr(s))}}function $i(e){var k;var t=Mt,r=Tt,n=Dt,a=se,s=Vt,o=tt,i=er,d=on,c=e.f;Mt=null,Tt=0,Dt=null,se=(c&(rr|fn))===0?e:null,Vt=null,En(e.ctx),er=!1,on=++Qr,e.ac!==null&&(Ea(()=>{e.ac.abort(Xr)}),e.ac=null);try{e.f|=es;var f=e.fn,h=f();e.f|=In;var v=e.deps,z=ne==null?void 0:ne.is_fork;if(Mt!==null){var x;if(z||Qn(e,Tt),v!==null&&Tt>0)for(v.length=Tt+Mt.length,x=0;x<Mt.length;x++)v[Tt+x]=Mt[x];else e.deps=v=Mt;if(Ms()&&(e.f&Gt)!==0)for(x=Tt;x<v.length;x++)((k=v[x]).reactions??(k.reactions=[])).push(e)}else!z&&v!==null&&Tt<v.length&&(Qn(e,Tt),v.length=Tt);if(na()&&Dt!==null&&!er&&v!==null&&(e.f&(lt|tr|ot))===0)for(x=0;x<Dt.length;x++)Mi(Dt[x],e);if(a!==null&&a!==e){if(Qr++,a.deps!==null)for(let m=0;m<r;m+=1)a.deps[m].rv=Qr;if(t!==null)for(const m of t)m.rv=Qr;Dt!==null&&(n===null?n=Dt:n.push(...Dt))}return(e.f&Lr)!==0&&(e.f^=Lr),h}catch(m){return ei(m)}finally{e.f^=es,Mt=t,Tt=r,Dt=n,se=a,Vt=s,En(o),er=i,on=d}}function xc(e,t){let r=t.reactions;if(r!==null){var n=sd.call(r,e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}if(r===null&&(t.f&lt)!==0&&(Mt===null||!$n.call(Mt,t))){var s=t;(s.f&Gt)!==0&&(s.f^=Gt,s.f&=~dn),ks(s),ac(s),Qn(s,0)}}function Qn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)xc(e,r[n])}function Tn(e){var t=e.f;if((t&vr)===0){Ge(e,st);var r=oe,n=ba;oe=e,ba=!0;try{(t&(Gr|Ma))!==0?gc(e):Cs(e),xi(e);var a=$i(e);e.teardown=typeof a=="function"?a:null,e.wv=Ai;var s;Xa&&Dd&&(e.f&ot)!==0&&e.deps}finally{ba=n,oe=r}}}async function _c(){await Promise.resolve(),Hd()}function l(e){var t=e.f,r=(t&lt)!==0;if(se!==null&&!er){var n=oe!==null&&(oe.f&vr)!==0;if(!n&&(Vt===null||!$n.call(Vt,e))){var a=se.deps;if((se.f&es)!==0)e.rv<Qr&&(e.rv=Qr,Mt===null&&a!==null&&a[Tt]===e?Tt++:Mt===null?Mt=[e]:Mt.push(e));else{(se.deps??(se.deps=[])).push(e);var s=e.reactions;s===null?e.reactions=[se]:$n.call(s,se)||s.push(se)}}}if(Fr&&Rr.has(e))return Rr.get(e);if(r){var o=e;if(Fr){var i=o.v;return((o.f&st)===0&&o.reactions!==null||Ci(o))&&(i=As(o)),Rr.set(o,i),i}var d=(o.f&Gt)===0&&!er&&se!==null&&(ba||(se.f&Gt)!==0),c=(o.f&In)===0;ia(o)&&(d&&(o.f|=Gt),li(o)),d&&!c&&(di(o),Ei(o))}if(at!=null&&at.has(e))return at.get(e);if((e.f&Lr)!==0)throw e.v;return e.v}function Ei(e){if(e.f|=Gt,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&lt)!==0&&(t.f&Gt)===0&&(di(t),Ei(t))}function Ci(e){if(e.v===et)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Rr.has(t)||(t.f&lt)!==0&&Ci(t))return!0;return!1}function cn(e){var t=er;try{return er=!0,e()}finally{er=t}}function Jr(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(pr in e)us(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&pr in r&&us(r)}}}function us(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{us(e[n],t)}catch{}const r=ys(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=Go(r);for(let a in n){const s=n[a].get;if(s)try{s.call(e)}catch{}}}}}function yc(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const wc=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function kc(e){return wc.includes(e)}const Sc={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Ac(e){return e=e.toLowerCase(),Sc[e]??e}const zc=["touchstart","touchmove"];function Mc(e){return zc.includes(e)}const en=Symbol("events"),Pi=new Set,fs=new Set;function Ti(e,t,r,n={}){function a(s){if(n.capture||vs.call(t,s),!s.cancelBubble)return Ea(()=>r==null?void 0:r.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?hr(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function Ni(e,t,r,n,a){var s={capture:n,passive:a},o=Ti(e,t,r,s);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Ca(()=>{t.removeEventListener(e,o,s)})}function K(e,t,r){(t[en]??(t[en]={}))[e]=r}function On(e){for(var t=0;t<e.length;t++)Pi.add(e[t]);for(var r of fs)r(e)}let po=null;function vs(e){var m,M;var t=this,r=t.ownerDocument,n=e.type,a=((m=e.composedPath)==null?void 0:m.call(e))||[],s=a[0]||e.target;po=e;var o=0,i=po===e&&e[en];if(i){var d=a.indexOf(i);if(d!==-1&&(t===document||t===window)){e[en]=t;return}var c=a.indexOf(t);if(c===-1)return;d<=c&&(o=d)}if(s=a[o]||e.target,s!==t){od(e,"currentTarget",{configurable:!0,get(){return s||r}});var f=se,h=oe;Bt(null),Ht(null);try{for(var v,z=[];s!==null;){var x=s.assignedSlot||s.parentNode||s.host||null;try{var k=(M=s[en])==null?void 0:M[n];k!=null&&(!s.disabled||e.target===s)&&k.call(s,e)}catch(N){v?z.push(N):v=N}if(e.cancelBubble||x===t||x===null)break;s=x}if(v){for(let N of z)queueMicrotask(()=>{throw N});throw v}}finally{e[en]=t,delete e.currentTarget,Bt(f),Ht(h)}}}var Do;const Ba=((Do=globalThis==null?void 0:globalThis.window)==null?void 0:Do.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function $c(e){return(Ba==null?void 0:Ba.createHTML(e))??e}function Ii(e){var t=zs("template");return t.innerHTML=$c(e.replaceAll("<!>","<!---->")),t.content}function un(e,t){var r=oe;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function $(e,t){var r=(t&Td)!==0,n=(t&Nd)!==0,a,s=!e.startsWith("<!>");return()=>{a===void 0&&(a=Ii(s?e:"<!>"+e),r||(a=wr(a)));var o=n||fi?document.importNode(a,!0):a.cloneNode(!0);if(r){var i=wr(o),d=o.lastChild;un(i,d)}else un(o,o);return o}}function Ec(e,t,r="svg"){var n=!e.startsWith("<!>"),a=`<${r}>${n?e:"<!>"+e}</${r}>`,s;return()=>{if(!s){var o=Ii(a),i=wr(o);s=wr(i)}var d=s.cloneNode(!0);return un(d,d),d}}function Cc(e,t){return Ec(e,t,"svg")}function Zn(e=""){{var t=mr(e+"");return un(t,t),t}}function ie(){var e=document.createDocumentFragment(),t=document.createComment(""),r=mr();return e.append(t,r),un(t,r),e}function g(e,t){e!==null&&e.before(t)}function Y(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=`${r}`)}function Pc(e,t){return Tc(e,t)}const ua=new Map;function Tc(e,{target:t,anchor:r,props:n={},events:a,context:s,intro:o=!0,transformError:i}){lc();var d=void 0,c=hc(()=>{var f=r??t.appendChild(mr());Ud(f,{pending:()=>{}},z=>{kr({});var x=tt;s&&(x.c=s),a&&(n.$$events=a),d=e(z,n)||{},Sr()},i);var h=new Set,v=z=>{for(var x=0;x<z.length;x++){var k=z[x];if(!h.has(k)){h.add(k);var m=Mc(k);for(const j of[t,document]){var M=ua.get(j);M===void 0&&(M=new Map,ua.set(j,M));var N=M.get(k);N===void 0?(j.addEventListener(k,vs,{passive:m}),M.set(k,1)):M.set(k,N+1)}}}};return v(za(Pi)),fs.add(v),()=>{var m;for(var z of h)for(const M of[t,document]){var x=ua.get(M),k=x.get(z);--k==0?(M.removeEventListener(z,vs),x.delete(z),x.size===0&&ua.delete(M)):x.set(z,k)}fs.delete(v),f!==r&&((m=f.parentNode)==null||m.removeChild(f))}});return Nc.set(d,c),d}let Nc=new WeakMap;var Qt,cr,It,an,ea,ta,Aa;class Ns{constructor(t,r=!0){Yt(this,"anchor");de(this,Qt,new Map);de(this,cr,new Map);de(this,It,new Map);de(this,an,new Set);de(this,ea,!0);de(this,ta,t=>{if(_(this,Qt).has(t)){var r=_(this,Qt).get(t),n=_(this,cr).get(r);if(n)Ps(n),_(this,an).delete(r);else{var a=_(this,It).get(r);a&&(a.effect.f&_t)===0&&(_(this,cr).set(r,a.effect),_(this,It).delete(r),a.fragment.lastChild.remove(),this.anchor.before(a.fragment),n=a.effect)}for(const[s,o]of _(this,Qt)){if(_(this,Qt).delete(s),s===t)break;const i=_(this,It).get(o);i&&(it(i.effect),_(this,It).delete(o))}for(const[s,o]of _(this,cr)){if(s===r||_(this,an).has(s)||(o.f&_t)!==0)continue;const i=()=>{if(Array.from(_(this,Qt).values()).includes(s)){var c=document.createDocumentFragment();Ts(o,c),c.append(mr()),_(this,It).set(s,{effect:o,fragment:c})}else it(o);_(this,an).delete(s),_(this,cr).delete(s)};_(this,ea)||!n?(_(this,an).add(s),sn(o,i,!1)):i()}}});de(this,Aa,t=>{_(this,Qt).delete(t);const r=Array.from(_(this,Qt).values());for(const[n,a]of _(this,It))r.includes(n)||(it(a.effect),_(this,It).delete(n))});this.anchor=t,re(this,ea,r)}ensure(t,r){var n=ne,a=hi();if(r&&!_(this,cr).has(t)&&!_(this,It).has(t))if(a){var s=document.createDocumentFragment(),o=mr();s.append(o),_(this,It).set(t,{effect:$t(()=>r(o)),fragment:s})}else _(this,cr).set(t,$t(()=>r(this.anchor)));if(_(this,Qt).set(n,t),a){for(const[i,d]of _(this,cr))i===t?n.unskip_effect(d):n.skip_effect(d);for(const[i,d]of _(this,It))i===t?n.unskip_effect(d.effect):n.skip_effect(d.effect);n.oncommit(_(this,ta)),n.ondiscard(_(this,Aa))}else _(this,ta).call(this,n)}}Qt=new WeakMap,cr=new WeakMap,It=new WeakMap,an=new WeakMap,ea=new WeakMap,ta=new WeakMap,Aa=new WeakMap;function T(e,t,r=!1){var n=new Ns(e),a=r?jr:0;function s(o,i){n.ensure(o,i)}oa(()=>{var o=!1;t((i,d=0)=>{o=!0,s(d,i)}),o||s(-1,null)},a)}function pt(e,t){return t}function Ic(e,t,r){for(var n=[],a=t.length,s,o=t.length,i=0;i<a;i++){let h=t[i];sn(h,()=>{if(s){if(s.pending.delete(h),s.done.add(h),s.pending.size===0){var v=e.outrogroups;ps(e,za(s.done)),v.delete(s),v.size===0&&(e.outrogroups=null)}}else o-=1},!1)}if(o===0){var d=n.length===0&&r!==null;if(d){var c=r,f=c.parentNode;dc(f),f.append(c),e.items.clear()}ps(e,t,!d)}else s={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(s)}function ps(e,t,r=!0){var n;if(e.pending.size>0){n=new Set;for(const o of e.pending.values())for(const i of o)n.add(e.items.get(i).e)}for(var a=0;a<t.length;a++){var s=t[a];if(n!=null&&n.has(s)){s.f|=ur;const o=document.createDocumentFragment();Ts(s,o)}else it(t[a],r)}}var ho;function ht(e,t,r,n,a,s=null){var o=e,i=new Map,d=(t&qo)!==0;if(d){var c=e;o=c.appendChild(mr())}var f=null,h=Ss(()=>{var j=r();return _s(j)?j:j==null?[]:za(j)}),v,z=new Map,x=!0;function k(j){(N.effect.f&vr)===0&&(N.pending.delete(j),N.fallback=f,Lc(N,v,o,t,n),f!==null&&(v.length===0?(f.f&ur)===0?Ps(f):(f.f^=ur,Un(f,null,o)):sn(f,()=>{f=null})))}function m(j){N.pending.delete(j)}var M=oa(()=>{v=l(h);for(var j=v.length,b=new Set,S=ne,P=hi(),C=0;C<j;C+=1){var y=v[C],L=n(y,C),V=x?null:i.get(L);V?(V.v&&Pn(V.v,y),V.i&&Pn(V.i,C),P&&S.unskip_effect(V.e)):(V=Oc(i,x?o:ho??(ho=mr()),y,L,C,a,t,r),x||(V.e.f|=ur),i.set(L,V)),b.add(L)}if(j===0&&s&&!f&&(x?f=$t(()=>s(o)):(f=$t(()=>s(ho??(ho=mr()))),f.f|=ur)),j>b.size&&pd(),!x)if(z.set(S,b),P){for(const[we,fe]of i)b.has(we)||S.skip_effect(fe.e);S.oncommit(k),S.ondiscard(m)}else k(S);l(h)}),N={effect:M,items:i,pending:z,outrogroups:null,fallback:f};x=!1}function Hn(e){for(;e!==null&&(e.f&rr)===0;)e=e.next;return e}function Lc(e,t,r,n,a){var V,we,fe,Ee,Ce,le,X,D,Z;var s=(n&zd)!==0,o=t.length,i=e.items,d=Hn(e.effect.first),c,f=null,h,v=[],z=[],x,k,m,M;if(s)for(M=0;M<o;M+=1)x=t[M],k=a(x,M),m=i.get(k).e,(m.f&ur)===0&&((we=(V=m.nodes)==null?void 0:V.a)==null||we.measure(),(h??(h=new Set)).add(m));for(M=0;M<o;M+=1){if(x=t[M],k=a(x,M),m=i.get(k).e,e.outrogroups!==null)for(const H of e.outrogroups)H.pending.delete(m),H.done.delete(m);if((m.f&ur)!==0)if(m.f^=ur,m===d)Un(m,null,r);else{var N=f?f.next:d;m===e.effect.last&&(e.effect.last=m.prev),m.prev&&(m.prev.next=m.next),m.next&&(m.next.prev=m.prev),Mr(e,f,m),Mr(e,m,N),Un(m,N,r),f=m,v=[],z=[],d=Hn(f.next);continue}if((m.f&_t)!==0&&(Ps(m),s&&((Ee=(fe=m.nodes)==null?void 0:fe.a)==null||Ee.unfix(),(h??(h=new Set)).delete(m))),m!==d){if(c!==void 0&&c.has(m)){if(v.length<z.length){var j=z[0],b;f=j.prev;var S=v[0],P=v[v.length-1];for(b=0;b<v.length;b+=1)Un(v[b],j,r);for(b=0;b<z.length;b+=1)c.delete(z[b]);Mr(e,S.prev,P.next),Mr(e,f,S),Mr(e,P,j),d=j,f=P,M-=1,v=[],z=[]}else c.delete(m),Un(m,d,r),Mr(e,m.prev,m.next),Mr(e,m,f===null?e.effect.first:f.next),Mr(e,f,m),f=m;continue}for(v=[],z=[];d!==null&&d!==m;)(c??(c=new Set)).add(d),z.push(d),d=Hn(d.next);if(d===null)continue}(m.f&ur)===0&&v.push(m),f=m,d=Hn(m.next)}if(e.outrogroups!==null){for(const H of e.outrogroups)H.pending.size===0&&(ps(e,za(H.done)),(Ce=e.outrogroups)==null||Ce.delete(H));e.outrogroups.size===0&&(e.outrogroups=null)}if(d!==null||c!==void 0){var C=[];if(c!==void 0)for(m of c)(m.f&_t)===0&&C.push(m);for(;d!==null;)(d.f&_t)===0&&d!==e.fallback&&C.push(d),d=Hn(d.next);var y=C.length;if(y>0){var L=(n&qo)!==0&&o===0?r:null;if(s){for(M=0;M<y;M+=1)(X=(le=C[M].nodes)==null?void 0:le.a)==null||X.measure();for(M=0;M<y;M+=1)(Z=(D=C[M].nodes)==null?void 0:D.a)==null||Z.fix()}Ic(e,C,L)}}s&&hr(()=>{var H,E;if(h!==void 0)for(m of h)(E=(H=m.nodes)==null?void 0:H.a)==null||E.apply()})}function Oc(e,t,r,n,a,s,o,i){var d=(o&Sd)!==0?(o&Md)===0?sc(r,!1,!1):Dr(r):null,c=(o&Ad)!==0?Dr(a):null;return{v:d,i:c,e:$t(()=>(s(t,d??r,c??a,i),()=>{e.delete(n)}))}}function Un(e,t,r){if(e.nodes)for(var n=e.nodes.start,a=e.nodes.end,s=t&&(t.f&ur)===0?t.nodes.start:r;n!==null;){var o=sa(n);if(s.before(n),n===a)return;n=o}}function Mr(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function mo(e,t,r=!1,n=!1,a=!1){var s=e,o="";W(()=>{var i=oe;if(o!==(o=t()??"")&&(i.nodes!==null&&(_i(i.nodes.start,i.nodes.end),i.nodes=null),o!=="")){var d=r?Jo:n?Id:void 0,c=zs(r?"svg":n?"math":"template",d);c.innerHTML=o;var f=r||n?c:c.content;if(un(wr(f),f.lastChild),r||n)for(;wr(f);)s.before(wr(f));else s.before(f)}})}function pe(e,t,r,n,a){var i;var s=(i=t.$$slots)==null?void 0:i[r],o=!1;s===!0&&(s=t.children,o=!0),s===void 0||s(e,o?()=>n:n)}function hs(e,t,...r){var n=new Ns(e);oa(()=>{const a=t()??null;n.ensure(a,a&&(s=>a(s,...r)))},jr)}function Rc(e,t,r,n,a,s){var o=null,i=e,d=new Ns(i,!1);oa(()=>{const c=t()||null;var f=Jo;if(c===null){d.ensure(null,null);return}return d.ensure(c,h=>{if(c){if(o=zs(c,f),un(o,o),n){var v=o.appendChild(mr());n(o,v)}oe.nodes.end=o,h.before(o)}}),()=>{}},jr),Ca(()=>{})}function jc(e,t){var r=void 0,n;bi(()=>{r!==(r=t())&&(n&&(it(n),n=null),r&&(n=$t(()=>{$s(()=>r(e))})))})}function Li(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=Li(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function Oi(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=Li(e))&&(n&&(n+=" "),n+=t);return n}function Ye(e){return typeof e=="object"?Oi(e):e??""}const go=[...` 	
\r\f \v\uFEFF`];function Dc(e,t,r){var n=e==null?"":""+e;if(r){for(var a of Object.keys(r))if(r[a])n=n?n+" "+a:a;else if(n.length)for(var s=a.length,o=0;(o=n.indexOf(a,o))>=0;){var i=o+s;(o===0||go.includes(n[o-1]))&&(i===n.length||go.includes(n[i]))?n=(o===0?"":n.substring(0,o))+n.substring(i+1):o=i}}return n===""?null:n}function bo(e,t=!1){var r=t?" !important;":";",n="";for(var a of Object.keys(e)){var s=e[a];s!=null&&s!==""&&(n+=" "+a+": "+s+r)}return n}function Ha(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Fc(e,t){if(t){var r="",n,a;if(Array.isArray(t)?(n=t[0],a=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,o=0,i=!1,d=[];n&&d.push(...Object.keys(n).map(Ha)),a&&d.push(...Object.keys(a).map(Ha));var c=0,f=-1;const k=e.length;for(var h=0;h<k;h++){var v=e[h];if(i?v==="/"&&e[h-1]==="*"&&(i=!1):s?s===v&&(s=!1):v==="/"&&e[h+1]==="*"?i=!0:v==='"'||v==="'"?s=v:v==="("?o++:v===")"&&o--,!i&&s===!1&&o===0){if(v===":"&&f===-1)f=h;else if(v===";"||h===k-1){if(f!==-1){var z=Ha(e.substring(c,f).trim());if(!d.includes(z)){v!==";"&&h++;var x=e.substring(c,h).trim();r+=" "+x+";"}}c=h+1,f=-1}}}}return n&&(r+=bo(n)),a&&(r+=bo(a,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Je(e,t,r,n,a,s){var o=e.__className;if(o!==r||o===void 0){var i=Dc(r,n,s);i==null?e.removeAttribute("class"):t?e.className=i:e.setAttribute("class",i),e.__className=r}else if(s&&a!==s)for(var d in s){var c=!!s[d];(a==null||c!==!!a[d])&&e.classList.toggle(d,c)}return s}function Wa(e,t={},r,n){for(var a in r){var s=r[a];t[a]!==s&&(r[a]==null?e.style.removeProperty(a):e.style.setProperty(a,s,n))}}function Ri(e,t,r,n){var a=e.__style;if(a!==t){var s=Fc(t,n);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=t}else n&&(Array.isArray(n)?(Wa(e,r==null?void 0:r[0],n[0]),Wa(e,r==null?void 0:r[1],n[1],"important")):Wa(e,r,n));return n}function ms(e,t,r=!1){if(e.multiple){if(t==null)return;if(!_s(t))return Od();for(var n of e.options)n.selected=t.includes(xo(n));return}for(n of e.options){var a=xo(n);if(ic(a,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function Gc(e){var t=new MutationObserver(()=>{ms(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Ca(()=>{t.disconnect()})}function xo(e){return"__value"in e?e.__value:e.value}const Wn=Symbol("class"),Kn=Symbol("style"),ji=Symbol("is custom element"),Di=Symbol("is html"),Vc=Ko?"option":"OPTION",Bc=Ko?"select":"SELECT";function Hc(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function ya(e,t,r,n){var a=Fi(e);a[t]!==(a[t]=r)&&(t==="loading"&&(e[fd]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Gi(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function Wc(e,t,r,n,a=!1,s=!1){var o=Fi(e),i=o[ji],d=!o[Di],c=t||{},f=e.nodeName===Vc;for(var h in t)h in r||(r[h]=null);r.class?r.class=Ye(r.class):r[Wn]&&(r.class=null),r[Kn]&&(r.style??(r.style=null));var v=Gi(e);for(const b in r){let S=r[b];if(f&&b==="value"&&S==null){e.value=e.__value="",c[b]=S;continue}if(b==="class"){var z=e.namespaceURI==="http://www.w3.org/1999/xhtml";Je(e,z,S,n,t==null?void 0:t[Wn],r[Wn]),c[b]=S,c[Wn]=r[Wn];continue}if(b==="style"){Ri(e,S,t==null?void 0:t[Kn],r[Kn]),c[b]=S,c[Kn]=r[Kn];continue}var x=c[b];if(!(S===x&&!(S===void 0&&e.hasAttribute(b)))){c[b]=S;var k=b[0]+b[1];if(k!=="$$")if(k==="on"){const P={},C="$$"+b;let y=b.slice(2);var m=kc(y);if(yc(y)&&(y=y.slice(0,-7),P.capture=!0),!m&&x){if(S!=null)continue;e.removeEventListener(y,c[C],P),c[C]=null}if(m)K(y,e,S),On([y]);else if(S!=null){let L=function(V){c[b].call(this,V)};var j=L;c[C]=Ti(y,e,L,P)}}else if(b==="style")ya(e,b,S);else if(b==="autofocus")cc(e,!!S);else if(!i&&(b==="__value"||b==="value"&&S!=null))e.value=e.__value=S;else if(b==="selected"&&f)Hc(e,S);else{var M=b;d||(M=Ac(M));var N=M==="defaultValue"||M==="defaultChecked";if(S==null&&!i&&!N)if(o[b]=null,M==="value"||M==="checked"){let P=e;const C=t===void 0;if(M==="value"){let y=P.defaultValue;P.removeAttribute(M),P.defaultValue=y,P.value=P.__value=C?y:null}else{let y=P.defaultChecked;P.removeAttribute(M),P.defaultChecked=y,P.checked=C?y:!1}}else e.removeAttribute(b);else N||v.includes(M)&&(i||typeof S!="string")?(e[M]=S,M in o&&(o[M]=et)):typeof S!="function"&&ya(e,M,S)}}}return c}function wa(e,t,r=[],n=[],a=[],s,o=!1,i=!1){ii(a,r,n,d=>{var c=void 0,f={},h=e.nodeName===Bc,v=!1;if(bi(()=>{var x=t(...d.map(l)),k=Wc(e,c,x,s,o,i);v&&h&&"value"in x&&ms(e,x.value);for(let M of Object.getOwnPropertySymbols(f))x[M]||it(f[M]);for(let M of Object.getOwnPropertySymbols(x)){var m=x[M];M.description===Ld&&(!c||m!==c[M])&&(f[M]&&it(f[M]),f[M]=$t(()=>jc(e,()=>m))),k[M]=m}c=k}),h){var z=e;$s(()=>{ms(z,c.value,!0),Gc(z)})}v=!0})}function Fi(e){return e.__attributes??(e.__attributes={[ji]:e.nodeName.includes("-"),[Di]:e.namespaceURI===Yo})}var _o=new Map;function Gi(e){var t=e.getAttribute("is")||e.nodeName,r=_o.get(t);if(r)return r;_o.set(t,r=[]);for(var n,a=e,s=Element.prototype;s!==a;){n=Go(a);for(var o in n)n[o].set&&r.push(o);a=ys(a)}return r}function xn(e,t,r=t){var n=new WeakSet;fc(e,"input",async a=>{var s=a?e.defaultValue:e.value;if(s=Ka(e)?qa(s):s,r(s),ne!==null&&n.add(ne),await _c(),s!==(s=t())){var o=e.selectionStart,i=e.selectionEnd,d=e.value.length;if(e.value=s??"",i!==null){var c=e.value.length;o===i&&i===d&&c>d?(e.selectionStart=c,e.selectionEnd=c):(e.selectionStart=o,e.selectionEnd=Math.min(i,c))}}}),cn(t)==null&&e.value&&(r(Ka(e)?qa(e.value):e.value),ne!==null&&n.add(ne)),Es(()=>{var a=t();if(e===document.activeElement){var s=ts??ne;if(n.has(s))return}Ka(e)&&a===qa(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function Ka(e){var t=e.type;return t==="number"||t==="range"}function qa(e){return e===""?null:+e}function yo(e,t){return e===t||(e==null?void 0:e[pr])===t}function Vi(e={},t,r,n){return $s(()=>{var a,s;return Es(()=>{a=s,s=[],cn(()=>{e!==r(...s)&&(t(e,...s),a&&yo(r(...a),e)&&t(null,...a))})}),()=>{hr(()=>{s&&yo(r(...s),e)&&t(null,...s)})}}),e}function Kc(e=!1){const t=tt,r=t.l.u;if(!r)return;let n=()=>Jr(t.s);if(e){let a=0,s={};const o=aa(()=>{let i=!1;const d=t.s;for(const c in d)d[c]!==s[c]&&(s[c]=d[c],i=!0);return i&&a++,a});n=()=>l(o)}r.b.length&&pc(()=>{wo(t,n),Za(r.b)}),_a(()=>{const a=cn(()=>r.m.map(cd));return()=>{for(const s of a)typeof s=="function"&&s()}}),r.a.length&&_a(()=>{wo(t,n),Za(r.a)})}function wo(e,t){if(e.l.s)for(const r of e.l.s)l(r);t()}let fa=!1;function qc(e){var t=fa;try{return fa=!1,[e(),fa]}finally{fa=t}}const Uc={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function Yc(e,t,r){return new Proxy({props:e,exclude:t},Uc)}const Jc={get(e,t){if(!e.exclude.includes(t))return l(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var n=oe;try{Ht(e.parent_effect),e.special[t]=Xe({get[t](){return e.props[t]}},t,Uo)}finally{Ht(n)}}return e.special[t](r),Jn(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),Jn(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ue(e,t){return new Proxy({props:e,exclude:t,special:{},version:Dr(0),parent_effect:oe},Jc)}const Xc={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Bn(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let a=e.props[n];Bn(a)&&(a=a());const s=Ir(a,t);if(s&&s.set)return s.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Bn(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const a=Ir(n,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===pr||t===Wo)return!1;for(let r of e.props)if(Bn(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Bn(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function ge(...e){return new Proxy({props:e},Xc)}function Xe(e,t,r,n){var j;var a=!ra||(r&Ed)!==0,s=(r&Cd)!==0,o=(r&Pd)!==0,i=n,d=!0,c=()=>(d&&(d=!1,i=o?cn(n):n),i),f;if(s){var h=pr in e||Wo in e;f=((j=Ir(e,t))==null?void 0:j.set)??(h&&t in e?b=>e[t]=b:void 0)}var v,z=!1;s?[v,z]=qc(()=>e[t]):v=e[t],v===void 0&&n!==void 0&&(v=c(),f&&(a&&xd(),f(v)));var x;if(a?x=()=>{var b=e[t];return b===void 0?c():(d=!0,b)}:x=()=>{var b=e[t];return b!==void 0&&(i=void 0),b===void 0?i:b},a&&(r&Uo)===0)return x;if(f){var k=e.$$legacy;return(function(b,S){return arguments.length>0?((!a||!S||k||z)&&f(S?x():b),b):x()})}var m=!1,M=((r&$d)!==0?aa:Ss)(()=>(m=!1,x()));s&&l(M);var N=oe;return(function(b,S){if(arguments.length>0){const P=S?l(M):a&&s?vt(b):b;return p(M,P),m=!0,i!==void 0&&(i=P),b}return Fr&&m||(N.f&vr)!==0?M.v:l(M)})}const Zc="5";var Fo;typeof window<"u"&&((Fo=window.__svelte??(window.__svelte={})).v??(Fo.v=new Set)).add(Zc);const Vr="";async function Qc(){const e=await fetch(`${Vr}/api/status`);if(!e.ok)throw new Error("상태 확인 실패");return e.json()}async function bn(e,t=null,r=null){const n={provider:e};t&&(n.model=t),r&&(n.api_key=r);const a=await fetch(`${Vr}/api/configure`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!a.ok)throw new Error("설정 실패");return a.json()}async function eu(e){const t=await fetch(`${Vr}/api/models/${encodeURIComponent(e)}`);return t.ok?t.json():{models:[]}}function tu(e,{onProgress:t,onDone:r,onError:n}){const a=new AbortController;return fetch(`${Vr}/api/ollama/pull`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:e}),signal:a.signal}).then(async s=>{if(!s.ok){n==null||n("다운로드 실패");return}const o=s.body.getReader(),i=new TextDecoder;let d="";for(;;){const{done:c,value:f}=await o.read();if(c)break;d+=i.decode(f,{stream:!0});const h=d.split(`
`);d=h.pop()||"";for(const v of h)if(v.startsWith("data:"))try{const z=JSON.parse(v.slice(5).trim());z.total&&z.completed!==void 0?t==null||t({total:z.total,completed:z.completed,status:z.status}):z.status&&(t==null||t({status:z.status}))}catch{}}r==null||r()}).catch(s=>{s.name!=="AbortError"&&(n==null||n(s.message))}),{abort:()=>a.abort()}}async function ru(){const e=await fetch(`${Vr}/api/oauth/authorize`);if(!e.ok)throw new Error("OAuth 인증 시작 실패");return e.json()}async function nu(){const e=await fetch(`${Vr}/api/oauth/status`);return e.ok?e.json():{done:!1}}async function au(){const e=await fetch(`${Vr}/api/oauth/logout`,{method:"POST"});if(!e.ok)throw new Error("로그아웃 실패");return e.json()}function su(e,t,r={},{onMeta:n,onSnapshot:a,onContext:s,onSystemPrompt:o,onToolCall:i,onToolResult:d,onChunk:c,onDone:f,onError:h},v=null){const z={question:t,stream:!0,...r};v&&v.length>0&&(z.history=v);const x=new AbortController;return fetch(`${Vr}/api/ask`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(z),signal:x.signal}).then(async k=>{if(!k.ok){const S=await k.json().catch(()=>({}));h==null||h(S.detail||"스트리밍 실패");return}const m=k.body.getReader(),M=new TextDecoder;let N="",j=!1,b=null;for(;;){const{done:S,value:P}=await m.read();if(S)break;N+=M.decode(P,{stream:!0});const C=N.split(`
`);N=C.pop()||"";for(const y of C)if(y.startsWith("event:"))b=y.slice(6).trim();else if(y.startsWith("data:")&&b){const L=y.slice(5).trim();try{const V=JSON.parse(L);b==="meta"?n==null||n(V):b==="snapshot"?a==null||a(V):b==="context"?s==null||s(V):b==="system_prompt"?o==null||o(V):b==="tool_call"?i==null||i(V):b==="tool_result"?d==null||d(V):b==="chunk"?c==null||c(V.text):b==="error"?h==null||h(V.error):b==="done"&&(j||(j=!0,f==null||f()))}catch{}b=null}}j||(j=!0,f==null||f())}).catch(k=>{k.name!=="AbortError"&&(h==null||h(k.message))}),{abort:()=>x.abort()}}const ou=(e,t)=>{const r=new Array(e.length+t.length);for(let n=0;n<e.length;n++)r[n]=e[n];for(let n=0;n<t.length;n++)r[e.length+n]=t[n];return r},iu=(e,t)=>({classGroupId:e,validator:t}),Bi=(e=new Map,t=null,r)=>({nextPart:e,validators:t,classGroupId:r}),ka="-",ko=[],lu="arbitrary..",du=e=>{const t=uu(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:n}=e;return{getClassGroupId:o=>{if(o.startsWith("[")&&o.endsWith("]"))return cu(o);const i=o.split(ka),d=i[0]===""&&i.length>1?1:0;return Hi(i,d,t)},getConflictingClassGroupIds:(o,i)=>{if(i){const d=n[o],c=r[o];return d?c?ou(c,d):d:c||ko}return r[o]||ko}}},Hi=(e,t,r)=>{if(e.length-t===0)return r.classGroupId;const a=e[t],s=r.nextPart.get(a);if(s){const c=Hi(e,t+1,s);if(c)return c}const o=r.validators;if(o===null)return;const i=t===0?e.join(ka):e.slice(t).join(ka),d=o.length;for(let c=0;c<d;c++){const f=o[c];if(f.validator(i))return f.classGroupId}},cu=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const t=e.slice(1,-1),r=t.indexOf(":"),n=t.slice(0,r);return n?lu+n:void 0})(),uu=e=>{const{theme:t,classGroups:r}=e;return fu(r,t)},fu=(e,t)=>{const r=Bi();for(const n in e){const a=e[n];Is(a,r,n,t)}return r},Is=(e,t,r,n)=>{const a=e.length;for(let s=0;s<a;s++){const o=e[s];vu(o,t,r,n)}},vu=(e,t,r,n)=>{if(typeof e=="string"){pu(e,t,r);return}if(typeof e=="function"){hu(e,t,r,n);return}mu(e,t,r,n)},pu=(e,t,r)=>{const n=e===""?t:Wi(t,e);n.classGroupId=r},hu=(e,t,r,n)=>{if(gu(e)){Is(e(n),t,r,n);return}t.validators===null&&(t.validators=[]),t.validators.push(iu(r,e))},mu=(e,t,r,n)=>{const a=Object.entries(e),s=a.length;for(let o=0;o<s;o++){const[i,d]=a[o];Is(d,Wi(t,i),r,n)}},Wi=(e,t)=>{let r=e;const n=t.split(ka),a=n.length;for(let s=0;s<a;s++){const o=n[s];let i=r.nextPart.get(o);i||(i=Bi(),r.nextPart.set(o,i)),r=i}return r},gu=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,bu=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=Object.create(null),n=Object.create(null);const a=(s,o)=>{r[s]=o,t++,t>e&&(t=0,n=r,r=Object.create(null))};return{get(s){let o=r[s];if(o!==void 0)return o;if((o=n[s])!==void 0)return a(s,o),o},set(s,o){s in r?r[s]=o:a(s,o)}}},gs="!",So=":",xu=[],Ao=(e,t,r,n,a)=>({modifiers:e,hasImportantModifier:t,baseClassName:r,maybePostfixModifierPosition:n,isExternal:a}),_u=e=>{const{prefix:t,experimentalParseClassName:r}=e;let n=a=>{const s=[];let o=0,i=0,d=0,c;const f=a.length;for(let k=0;k<f;k++){const m=a[k];if(o===0&&i===0){if(m===So){s.push(a.slice(d,k)),d=k+1;continue}if(m==="/"){c=k;continue}}m==="["?o++:m==="]"?o--:m==="("?i++:m===")"&&i--}const h=s.length===0?a:a.slice(d);let v=h,z=!1;h.endsWith(gs)?(v=h.slice(0,-1),z=!0):h.startsWith(gs)&&(v=h.slice(1),z=!0);const x=c&&c>d?c-d:void 0;return Ao(s,z,v,x)};if(t){const a=t+So,s=n;n=o=>o.startsWith(a)?s(o.slice(a.length)):Ao(xu,!1,o,void 0,!0)}if(r){const a=n;n=s=>r({className:s,parseClassName:a})}return n},yu=e=>{const t=new Map;return e.orderSensitiveModifiers.forEach((r,n)=>{t.set(r,1e6+n)}),r=>{const n=[];let a=[];for(let s=0;s<r.length;s++){const o=r[s],i=o[0]==="[",d=t.has(o);i||d?(a.length>0&&(a.sort(),n.push(...a),a=[]),n.push(o)):a.push(o)}return a.length>0&&(a.sort(),n.push(...a)),n}},wu=e=>({cache:bu(e.cacheSize),parseClassName:_u(e),sortModifiers:yu(e),...du(e)}),ku=/\s+/,Su=(e,t)=>{const{parseClassName:r,getClassGroupId:n,getConflictingClassGroupIds:a,sortModifiers:s}=t,o=[],i=e.trim().split(ku);let d="";for(let c=i.length-1;c>=0;c-=1){const f=i[c],{isExternal:h,modifiers:v,hasImportantModifier:z,baseClassName:x,maybePostfixModifierPosition:k}=r(f);if(h){d=f+(d.length>0?" "+d:d);continue}let m=!!k,M=n(m?x.substring(0,k):x);if(!M){if(!m){d=f+(d.length>0?" "+d:d);continue}if(M=n(x),!M){d=f+(d.length>0?" "+d:d);continue}m=!1}const N=v.length===0?"":v.length===1?v[0]:s(v).join(":"),j=z?N+gs:N,b=j+M;if(o.indexOf(b)>-1)continue;o.push(b);const S=a(M,m);for(let P=0;P<S.length;++P){const C=S[P];o.push(j+C)}d=f+(d.length>0?" "+d:d)}return d},Au=(...e)=>{let t=0,r,n,a="";for(;t<e.length;)(r=e[t++])&&(n=Ki(r))&&(a&&(a+=" "),a+=n);return a},Ki=e=>{if(typeof e=="string")return e;let t,r="";for(let n=0;n<e.length;n++)e[n]&&(t=Ki(e[n]))&&(r&&(r+=" "),r+=t);return r},zu=(e,...t)=>{let r,n,a,s;const o=d=>{const c=t.reduce((f,h)=>h(f),e());return r=wu(c),n=r.cache.get,a=r.cache.set,s=i,i(d)},i=d=>{const c=n(d);if(c)return c;const f=Su(d,r);return a(d,f),f};return s=o,(...d)=>s(Au(...d))},Mu=[],Ue=e=>{const t=r=>r[e]||Mu;return t.isThemeGetter=!0,t},qi=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Ui=/^\((?:(\w[\w-]*):)?(.+)\)$/i,$u=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,Eu=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Cu=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Pu=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Tu=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Nu=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,$r=e=>$u.test(e),Q=e=>!!e&&!Number.isNaN(Number(e)),Er=e=>!!e&&Number.isInteger(Number(e)),Ua=e=>e.endsWith("%")&&Q(e.slice(0,-1)),xr=e=>Eu.test(e),Yi=()=>!0,Iu=e=>Cu.test(e)&&!Pu.test(e),Ls=()=>!1,Lu=e=>Tu.test(e),Ou=e=>Nu.test(e),Ru=e=>!I(e)&&!R(e),ju=e=>Br(e,Zi,Ls),I=e=>qi.test(e),Ur=e=>Br(e,Qi,Iu),zo=e=>Br(e,Ku,Q),Du=e=>Br(e,tl,Yi),Fu=e=>Br(e,el,Ls),Mo=e=>Br(e,Ji,Ls),Gu=e=>Br(e,Xi,Ou),va=e=>Br(e,rl,Lu),R=e=>Ui.test(e),qn=e=>vn(e,Qi),Vu=e=>vn(e,el),$o=e=>vn(e,Ji),Bu=e=>vn(e,Zi),Hu=e=>vn(e,Xi),pa=e=>vn(e,rl,!0),Wu=e=>vn(e,tl,!0),Br=(e,t,r)=>{const n=qi.exec(e);return n?n[1]?t(n[1]):r(n[2]):!1},vn=(e,t,r=!1)=>{const n=Ui.exec(e);return n?n[1]?t(n[1]):r:!1},Ji=e=>e==="position"||e==="percentage",Xi=e=>e==="image"||e==="url",Zi=e=>e==="length"||e==="size"||e==="bg-size",Qi=e=>e==="length",Ku=e=>e==="number",el=e=>e==="family-name",tl=e=>e==="number"||e==="weight",rl=e=>e==="shadow",qu=()=>{const e=Ue("color"),t=Ue("font"),r=Ue("text"),n=Ue("font-weight"),a=Ue("tracking"),s=Ue("leading"),o=Ue("breakpoint"),i=Ue("container"),d=Ue("spacing"),c=Ue("radius"),f=Ue("shadow"),h=Ue("inset-shadow"),v=Ue("text-shadow"),z=Ue("drop-shadow"),x=Ue("blur"),k=Ue("perspective"),m=Ue("aspect"),M=Ue("ease"),N=Ue("animate"),j=()=>["auto","avoid","all","avoid-page","page","left","right","column"],b=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],S=()=>[...b(),R,I],P=()=>["auto","hidden","clip","visible","scroll"],C=()=>["auto","contain","none"],y=()=>[R,I,d],L=()=>[$r,"full","auto",...y()],V=()=>[Er,"none","subgrid",R,I],we=()=>["auto",{span:["full",Er,R,I]},Er,R,I],fe=()=>[Er,"auto",R,I],Ee=()=>["auto","min","max","fr",R,I],Ce=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],le=()=>["start","end","center","stretch","center-safe","end-safe"],X=()=>["auto",...y()],D=()=>[$r,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...y()],Z=()=>[$r,"screen","full","dvw","lvw","svw","min","max","fit",...y()],H=()=>[$r,"screen","full","lh","dvh","lvh","svh","min","max","fit",...y()],E=()=>[e,R,I],ce=()=>[...b(),$o,Mo,{position:[R,I]}],ye=()=>["no-repeat",{repeat:["","x","y","space","round"]}],Re=()=>["auto","cover","contain",Bu,ju,{size:[R,I]}],ae=()=>[Ua,qn,Ur],ee=()=>["","none","full",c,R,I],J=()=>["",Q,qn,Ur],he=()=>["solid","dashed","dotted","double"],Ae=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],te=()=>[Q,Ua,$o,Mo],dt=()=>["","none",x,R,I],ct=()=>["none",Q,R,I],Wt=()=>["none",Q,R,I],gr=()=>[Q,R,I],ar=()=>[$r,"full",...y()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[xr],breakpoint:[xr],color:[Yi],container:[xr],"drop-shadow":[xr],ease:["in","out","in-out"],font:[Ru],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[xr],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[xr],shadow:[xr],spacing:["px",Q],text:[xr],"text-shadow":[xr],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",$r,I,R,m]}],container:["container"],columns:[{columns:[Q,I,R,i]}],"break-after":[{"break-after":j()}],"break-before":[{"break-before":j()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:S()}],overflow:[{overflow:P()}],"overflow-x":[{"overflow-x":P()}],"overflow-y":[{"overflow-y":P()}],overscroll:[{overscroll:C()}],"overscroll-x":[{"overscroll-x":C()}],"overscroll-y":[{"overscroll-y":C()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:L()}],"inset-x":[{"inset-x":L()}],"inset-y":[{"inset-y":L()}],start:[{"inset-s":L(),start:L()}],end:[{"inset-e":L(),end:L()}],"inset-bs":[{"inset-bs":L()}],"inset-be":[{"inset-be":L()}],top:[{top:L()}],right:[{right:L()}],bottom:[{bottom:L()}],left:[{left:L()}],visibility:["visible","invisible","collapse"],z:[{z:[Er,"auto",R,I]}],basis:[{basis:[$r,"full","auto",i,...y()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Q,$r,"auto","initial","none",I]}],grow:[{grow:["",Q,R,I]}],shrink:[{shrink:["",Q,R,I]}],order:[{order:[Er,"first","last","none",R,I]}],"grid-cols":[{"grid-cols":V()}],"col-start-end":[{col:we()}],"col-start":[{"col-start":fe()}],"col-end":[{"col-end":fe()}],"grid-rows":[{"grid-rows":V()}],"row-start-end":[{row:we()}],"row-start":[{"row-start":fe()}],"row-end":[{"row-end":fe()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":Ee()}],"auto-rows":[{"auto-rows":Ee()}],gap:[{gap:y()}],"gap-x":[{"gap-x":y()}],"gap-y":[{"gap-y":y()}],"justify-content":[{justify:[...Ce(),"normal"]}],"justify-items":[{"justify-items":[...le(),"normal"]}],"justify-self":[{"justify-self":["auto",...le()]}],"align-content":[{content:["normal",...Ce()]}],"align-items":[{items:[...le(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...le(),{baseline:["","last"]}]}],"place-content":[{"place-content":Ce()}],"place-items":[{"place-items":[...le(),"baseline"]}],"place-self":[{"place-self":["auto",...le()]}],p:[{p:y()}],px:[{px:y()}],py:[{py:y()}],ps:[{ps:y()}],pe:[{pe:y()}],pbs:[{pbs:y()}],pbe:[{pbe:y()}],pt:[{pt:y()}],pr:[{pr:y()}],pb:[{pb:y()}],pl:[{pl:y()}],m:[{m:X()}],mx:[{mx:X()}],my:[{my:X()}],ms:[{ms:X()}],me:[{me:X()}],mbs:[{mbs:X()}],mbe:[{mbe:X()}],mt:[{mt:X()}],mr:[{mr:X()}],mb:[{mb:X()}],ml:[{ml:X()}],"space-x":[{"space-x":y()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":y()}],"space-y-reverse":["space-y-reverse"],size:[{size:D()}],"inline-size":[{inline:["auto",...Z()]}],"min-inline-size":[{"min-inline":["auto",...Z()]}],"max-inline-size":[{"max-inline":["none",...Z()]}],"block-size":[{block:["auto",...H()]}],"min-block-size":[{"min-block":["auto",...H()]}],"max-block-size":[{"max-block":["none",...H()]}],w:[{w:[i,"screen",...D()]}],"min-w":[{"min-w":[i,"screen","none",...D()]}],"max-w":[{"max-w":[i,"screen","none","prose",{screen:[o]},...D()]}],h:[{h:["screen","lh",...D()]}],"min-h":[{"min-h":["screen","lh","none",...D()]}],"max-h":[{"max-h":["screen","lh",...D()]}],"font-size":[{text:["base",r,qn,Ur]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[n,Wu,Du]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Ua,I]}],"font-family":[{font:[Vu,Fu,t]}],"font-features":[{"font-features":[I]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[a,R,I]}],"line-clamp":[{"line-clamp":[Q,"none",R,zo]}],leading:[{leading:[s,...y()]}],"list-image":[{"list-image":["none",R,I]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",R,I]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:E()}],"text-color":[{text:E()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...he(),"wavy"]}],"text-decoration-thickness":[{decoration:[Q,"from-font","auto",R,Ur]}],"text-decoration-color":[{decoration:E()}],"underline-offset":[{"underline-offset":[Q,"auto",R,I]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:y()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",R,I]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",R,I]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:ce()}],"bg-repeat":[{bg:ye()}],"bg-size":[{bg:Re()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Er,R,I],radial:["",R,I],conic:[Er,R,I]},Hu,Gu]}],"bg-color":[{bg:E()}],"gradient-from-pos":[{from:ae()}],"gradient-via-pos":[{via:ae()}],"gradient-to-pos":[{to:ae()}],"gradient-from":[{from:E()}],"gradient-via":[{via:E()}],"gradient-to":[{to:E()}],rounded:[{rounded:ee()}],"rounded-s":[{"rounded-s":ee()}],"rounded-e":[{"rounded-e":ee()}],"rounded-t":[{"rounded-t":ee()}],"rounded-r":[{"rounded-r":ee()}],"rounded-b":[{"rounded-b":ee()}],"rounded-l":[{"rounded-l":ee()}],"rounded-ss":[{"rounded-ss":ee()}],"rounded-se":[{"rounded-se":ee()}],"rounded-ee":[{"rounded-ee":ee()}],"rounded-es":[{"rounded-es":ee()}],"rounded-tl":[{"rounded-tl":ee()}],"rounded-tr":[{"rounded-tr":ee()}],"rounded-br":[{"rounded-br":ee()}],"rounded-bl":[{"rounded-bl":ee()}],"border-w":[{border:J()}],"border-w-x":[{"border-x":J()}],"border-w-y":[{"border-y":J()}],"border-w-s":[{"border-s":J()}],"border-w-e":[{"border-e":J()}],"border-w-bs":[{"border-bs":J()}],"border-w-be":[{"border-be":J()}],"border-w-t":[{"border-t":J()}],"border-w-r":[{"border-r":J()}],"border-w-b":[{"border-b":J()}],"border-w-l":[{"border-l":J()}],"divide-x":[{"divide-x":J()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":J()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...he(),"hidden","none"]}],"divide-style":[{divide:[...he(),"hidden","none"]}],"border-color":[{border:E()}],"border-color-x":[{"border-x":E()}],"border-color-y":[{"border-y":E()}],"border-color-s":[{"border-s":E()}],"border-color-e":[{"border-e":E()}],"border-color-bs":[{"border-bs":E()}],"border-color-be":[{"border-be":E()}],"border-color-t":[{"border-t":E()}],"border-color-r":[{"border-r":E()}],"border-color-b":[{"border-b":E()}],"border-color-l":[{"border-l":E()}],"divide-color":[{divide:E()}],"outline-style":[{outline:[...he(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Q,R,I]}],"outline-w":[{outline:["",Q,qn,Ur]}],"outline-color":[{outline:E()}],shadow:[{shadow:["","none",f,pa,va]}],"shadow-color":[{shadow:E()}],"inset-shadow":[{"inset-shadow":["none",h,pa,va]}],"inset-shadow-color":[{"inset-shadow":E()}],"ring-w":[{ring:J()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:E()}],"ring-offset-w":[{"ring-offset":[Q,Ur]}],"ring-offset-color":[{"ring-offset":E()}],"inset-ring-w":[{"inset-ring":J()}],"inset-ring-color":[{"inset-ring":E()}],"text-shadow":[{"text-shadow":["none",v,pa,va]}],"text-shadow-color":[{"text-shadow":E()}],opacity:[{opacity:[Q,R,I]}],"mix-blend":[{"mix-blend":[...Ae(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Ae()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Q]}],"mask-image-linear-from-pos":[{"mask-linear-from":te()}],"mask-image-linear-to-pos":[{"mask-linear-to":te()}],"mask-image-linear-from-color":[{"mask-linear-from":E()}],"mask-image-linear-to-color":[{"mask-linear-to":E()}],"mask-image-t-from-pos":[{"mask-t-from":te()}],"mask-image-t-to-pos":[{"mask-t-to":te()}],"mask-image-t-from-color":[{"mask-t-from":E()}],"mask-image-t-to-color":[{"mask-t-to":E()}],"mask-image-r-from-pos":[{"mask-r-from":te()}],"mask-image-r-to-pos":[{"mask-r-to":te()}],"mask-image-r-from-color":[{"mask-r-from":E()}],"mask-image-r-to-color":[{"mask-r-to":E()}],"mask-image-b-from-pos":[{"mask-b-from":te()}],"mask-image-b-to-pos":[{"mask-b-to":te()}],"mask-image-b-from-color":[{"mask-b-from":E()}],"mask-image-b-to-color":[{"mask-b-to":E()}],"mask-image-l-from-pos":[{"mask-l-from":te()}],"mask-image-l-to-pos":[{"mask-l-to":te()}],"mask-image-l-from-color":[{"mask-l-from":E()}],"mask-image-l-to-color":[{"mask-l-to":E()}],"mask-image-x-from-pos":[{"mask-x-from":te()}],"mask-image-x-to-pos":[{"mask-x-to":te()}],"mask-image-x-from-color":[{"mask-x-from":E()}],"mask-image-x-to-color":[{"mask-x-to":E()}],"mask-image-y-from-pos":[{"mask-y-from":te()}],"mask-image-y-to-pos":[{"mask-y-to":te()}],"mask-image-y-from-color":[{"mask-y-from":E()}],"mask-image-y-to-color":[{"mask-y-to":E()}],"mask-image-radial":[{"mask-radial":[R,I]}],"mask-image-radial-from-pos":[{"mask-radial-from":te()}],"mask-image-radial-to-pos":[{"mask-radial-to":te()}],"mask-image-radial-from-color":[{"mask-radial-from":E()}],"mask-image-radial-to-color":[{"mask-radial-to":E()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":b()}],"mask-image-conic-pos":[{"mask-conic":[Q]}],"mask-image-conic-from-pos":[{"mask-conic-from":te()}],"mask-image-conic-to-pos":[{"mask-conic-to":te()}],"mask-image-conic-from-color":[{"mask-conic-from":E()}],"mask-image-conic-to-color":[{"mask-conic-to":E()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:ce()}],"mask-repeat":[{mask:ye()}],"mask-size":[{mask:Re()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",R,I]}],filter:[{filter:["","none",R,I]}],blur:[{blur:dt()}],brightness:[{brightness:[Q,R,I]}],contrast:[{contrast:[Q,R,I]}],"drop-shadow":[{"drop-shadow":["","none",z,pa,va]}],"drop-shadow-color":[{"drop-shadow":E()}],grayscale:[{grayscale:["",Q,R,I]}],"hue-rotate":[{"hue-rotate":[Q,R,I]}],invert:[{invert:["",Q,R,I]}],saturate:[{saturate:[Q,R,I]}],sepia:[{sepia:["",Q,R,I]}],"backdrop-filter":[{"backdrop-filter":["","none",R,I]}],"backdrop-blur":[{"backdrop-blur":dt()}],"backdrop-brightness":[{"backdrop-brightness":[Q,R,I]}],"backdrop-contrast":[{"backdrop-contrast":[Q,R,I]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Q,R,I]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Q,R,I]}],"backdrop-invert":[{"backdrop-invert":["",Q,R,I]}],"backdrop-opacity":[{"backdrop-opacity":[Q,R,I]}],"backdrop-saturate":[{"backdrop-saturate":[Q,R,I]}],"backdrop-sepia":[{"backdrop-sepia":["",Q,R,I]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":y()}],"border-spacing-x":[{"border-spacing-x":y()}],"border-spacing-y":[{"border-spacing-y":y()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",R,I]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Q,"initial",R,I]}],ease:[{ease:["linear","initial",M,R,I]}],delay:[{delay:[Q,R,I]}],animate:[{animate:["none",N,R,I]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[k,R,I]}],"perspective-origin":[{"perspective-origin":S()}],rotate:[{rotate:ct()}],"rotate-x":[{"rotate-x":ct()}],"rotate-y":[{"rotate-y":ct()}],"rotate-z":[{"rotate-z":ct()}],scale:[{scale:Wt()}],"scale-x":[{"scale-x":Wt()}],"scale-y":[{"scale-y":Wt()}],"scale-z":[{"scale-z":Wt()}],"scale-3d":["scale-3d"],skew:[{skew:gr()}],"skew-x":[{"skew-x":gr()}],"skew-y":[{"skew-y":gr()}],transform:[{transform:[R,I,"","none","gpu","cpu"]}],"transform-origin":[{origin:S()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:ar()}],"translate-x":[{"translate-x":ar()}],"translate-y":[{"translate-y":ar()}],"translate-z":[{"translate-z":ar()}],"translate-none":["translate-none"],accent:[{accent:E()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:E()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",R,I]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":y()}],"scroll-mx":[{"scroll-mx":y()}],"scroll-my":[{"scroll-my":y()}],"scroll-ms":[{"scroll-ms":y()}],"scroll-me":[{"scroll-me":y()}],"scroll-mbs":[{"scroll-mbs":y()}],"scroll-mbe":[{"scroll-mbe":y()}],"scroll-mt":[{"scroll-mt":y()}],"scroll-mr":[{"scroll-mr":y()}],"scroll-mb":[{"scroll-mb":y()}],"scroll-ml":[{"scroll-ml":y()}],"scroll-p":[{"scroll-p":y()}],"scroll-px":[{"scroll-px":y()}],"scroll-py":[{"scroll-py":y()}],"scroll-ps":[{"scroll-ps":y()}],"scroll-pe":[{"scroll-pe":y()}],"scroll-pbs":[{"scroll-pbs":y()}],"scroll-pbe":[{"scroll-pbe":y()}],"scroll-pt":[{"scroll-pt":y()}],"scroll-pr":[{"scroll-pr":y()}],"scroll-pb":[{"scroll-pb":y()}],"scroll-pl":[{"scroll-pl":y()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",R,I]}],fill:[{fill:["none",...E()]}],"stroke-w":[{stroke:[Q,qn,Ur,zo]}],stroke:[{stroke:["none",...E()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Uu=zu(qu);function Be(...e){return Uu(Oi(e))}const bs="dartlab-conversations",Eo=50;function Yu(){return Date.now().toString(36)+Math.random().toString(36).slice(2,8)}function Ju(){try{const e=localStorage.getItem(bs);return e?JSON.parse(e):{conversations:[],activeId:null}}catch{return{conversations:[],activeId:null}}}function Xu(e){try{localStorage.setItem(bs,JSON.stringify(e))}catch{if(e.conversations.length>5){e.conversations=e.conversations.slice(0,e.conversations.length-5);try{localStorage.setItem(bs,JSON.stringify(e))}catch{}}}}function Zu(){const e=Ju();let t=q(vt(e.conversations)),r=q(vt(e.activeId));l(r)&&!l(t).find(v=>v.id===l(r))&&p(r,null);function n(){Xu({conversations:l(t),activeId:l(r)})}function a(){return l(t).find(v=>v.id===l(r))||null}function s(){const v={id:Yu(),title:"새 대화",messages:[],createdAt:Date.now(),updatedAt:Date.now()};return p(t,[v,...l(t)],!0),l(t).length>Eo&&p(t,l(t).slice(0,Eo),!0),p(r,v.id,!0),n(),v.id}function o(v){l(t).find(z=>z.id===v)&&(p(r,v,!0),n())}function i(v,z,x=null){const k=a();if(!k)return;const m={role:v,text:z};x&&(m.meta=x),k.messages=[...k.messages,m],k.updatedAt=Date.now(),k.title==="새 대화"&&v==="user"&&(k.title=z.length>30?z.slice(0,30)+"...":z),p(t,[...l(t)],!0),n()}function d(v){const z=a();if(!z||z.messages.length===0)return;const x=z.messages[z.messages.length-1];Object.assign(x,v),z.updatedAt=Date.now(),p(t,[...l(t)],!0),n()}function c(v){p(t,l(t).filter(z=>z.id!==v),!0),l(r)===v&&p(r,l(t).length>0?l(t)[0].id:null,!0),n()}function f(v,z){const x=l(t).find(k=>k.id===v);x&&(x.title=z,p(t,[...l(t)],!0),n())}function h(){p(t,[],!0),p(r,null),n()}return{get conversations(){return l(t)},get activeId(){return l(r)},get active(){return a()},createConversation:s,setActive:o,addMessage:i,updateLastMessage:d,deleteConversation:c,updateTitle:f,clearAll:h}}var Qu=$("<a><!></a>"),ef=$("<button><!></button>");function tf(e,t){kr(t,!0);let r=Xe(t,"variant",3,"default"),n=Xe(t,"size",3,"default"),a=Yc(t,["$$slots","$$events","$$legacy","variant","size","class","children"]);const s={default:"bg-gradient-to-r from-dl-primary to-dl-primary-dark text-white shadow-lg shadow-dl-primary/25 hover:shadow-dl-primary/40 hover:-translate-y-0.5",secondary:"bg-dl-bg-card border border-dl-border text-dl-text-muted hover:text-dl-text hover:bg-dl-bg-card-hover",ghost:"text-dl-text-muted hover:text-dl-text hover:bg-white/5",outline:"border border-dl-border text-dl-text-muted hover:text-dl-text hover:border-dl-primary/50"},o={default:"px-5 py-2 text-sm",sm:"px-3 py-1.5 text-xs",lg:"px-7 py-3 text-base",icon:"w-9 h-9"};var i=ie(),d=B(i);{var c=h=>{var v=Qu();wa(v,x=>({class:x,...a}),[()=>Be("inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer no-underline",s[r()],o[n()],t.class)]);var z=u(v);hs(z,()=>t.children),g(h,v)},f=h=>{var v=ef();wa(v,x=>({class:x,...a}),[()=>Be("inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer",s[r()],o[n()],t.class)]);var z=u(v);hs(z,()=>t.children),g(h,v)};T(d,h=>{t.href?h(c):h(f,-1)})}g(e,i),Sr()}Fd();/**
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
 */const rf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
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
 */const nf=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
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
 */const Co=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();var af=Cc("<svg><!><!></svg>");function be(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]),n=ue(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);kr(t,!1);let a=Xe(t,"name",8,void 0),s=Xe(t,"color",8,"currentColor"),o=Xe(t,"size",8,24),i=Xe(t,"strokeWidth",8,2),d=Xe(t,"absoluteStrokeWidth",8,!1),c=Xe(t,"iconNode",24,()=>[]);Kc();var f=af();wa(f,(z,x,k)=>({...rf,...z,...n,width:o(),height:o(),stroke:s(),"stroke-width":x,class:k}),[()=>nf(n)?void 0:{"aria-hidden":"true"},()=>(Jr(d()),Jr(i()),Jr(o()),cn(()=>d()?Number(i())*24/Number(o()):i())),()=>(Jr(Co),Jr(a()),Jr(r),cn(()=>Co("lucide-icon","lucide",a()?`lucide-${a()}`:"",r.class)))]);var h=u(f);ht(h,1,c,pt,(z,x)=>{var k=Me(()=>Bo(l(x),2));let m=()=>l(k)[0],M=()=>l(k)[1];var N=ie(),j=B(N);Rc(j,m,!0,(b,S)=>{wa(b,()=>({...M()}))}),g(z,N)});var v=w(h);pe(v,t,"default",{}),g(e,f),Sr()}function nl(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];be(e,ge({name:"arrow-up"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=ie(),i=B(o);pe(i,t,"default",{}),g(a,o)},$$slots:{default:!0}}))}function Po(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 18V5"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77"}]];be(e,ge({name:"brain"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=ie(),i=B(o);pe(i,t,"default",{}),g(a,o)},$$slots:{default:!0}}))}function sf(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M20 6 9 17l-5-5"}]];be(e,ge({name:"check"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=ie(),i=B(o);pe(i,t,"default",{}),g(a,o)},$$slots:{default:!0}}))}function of(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m6 9 6 6 6-6"}]];be(e,ge({name:"chevron-down"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=ie(),i=B(o);pe(i,t,"default",{}),g(a,o)},$$slots:{default:!0}}))}function lf(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m18 15-6-6-6 6"}]];be(e,ge({name:"chevron-up"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=ie(),i=B(o);pe(i,t,"default",{}),g(a,o)},$$slots:{default:!0}}))}function Yr(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];be(e,ge({name:"circle-alert"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=ie(),i=B(o);pe(i,t,"default",{}),g(a,o)},$$slots:{default:!0}}))}function Ya(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];be(e,ge({name:"circle-check"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=ie(),i=B(o);pe(i,t,"default",{}),g(a,o)},$$slots:{default:!0}}))}function df(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 6v6l4 2"}]];be(e,ge({name:"clock"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=ie(),i=B(o);pe(i,t,"default",{}),g(a,o)},$$slots:{default:!0}}))}function cf(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m16 18 6-6-6-6"}],["path",{d:"m8 6-6 6 6 6"}]];be(e,ge({name:"code"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=ie(),i=B(o);pe(i,t,"default",{}),g(a,o)},$$slots:{default:!0}}))}function uf(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 2v2"}],["path",{d:"M14 2v2"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"}],["path",{d:"M6 2v2"}]];be(e,ge({name:"coffee"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=ie(),i=B(o);pe(i,t,"default",{}),g(a,o)},$$slots:{default:!0}}))}function ha(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]];be(e,ge({name:"database"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=ie(),i=B(o);pe(i,t,"default",{}),g(a,o)},$$slots:{default:!0}}))}function Ja(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];be(e,ge({name:"download"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=ie(),i=B(o);pe(i,t,"default",{}),g(a,o)},$$slots:{default:!0}}))}function To(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];be(e,ge({name:"external-link"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=ie(),i=B(o);pe(i,t,"default",{}),g(a,o)},$$slots:{default:!0}}))}function ff(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];be(e,ge({name:"eye"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=ie(),i=B(o);pe(i,t,"default",{}),g(a,o)},$$slots:{default:!0}}))}function xa(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];be(e,ge({name:"file-text"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=ie(),i=B(o);pe(i,t,"default",{}),g(a,o)},$$slots:{default:!0}}))}function vf(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];be(e,ge({name:"github"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=ie(),i=B(o);pe(i,t,"default",{}),g(a,o)},$$slots:{default:!0}}))}function No(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"}],["path",{d:"m21 2-9.6 9.6"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5"}]];be(e,ge({name:"key"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=ie(),i=B(o);pe(i,t,"default",{}),g(a,o)},$$slots:{default:!0}}))}function Xt(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];be(e,ge({name:"loader-circle"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=ie(),i=B(o);pe(i,t,"default",{}),g(a,o)},$$slots:{default:!0}}))}function pf(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];be(e,ge({name:"log-in"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=ie(),i=B(o);pe(i,t,"default",{}),g(a,o)},$$slots:{default:!0}}))}function hf(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];be(e,ge({name:"log-out"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=ie(),i=B(o);pe(i,t,"default",{}),g(a,o)},$$slots:{default:!0}}))}function mf(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];be(e,ge({name:"menu"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=ie(),i=B(o);pe(i,t,"default",{}),g(a,o)},$$slots:{default:!0}}))}function Io(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}]];be(e,ge({name:"message-square"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=ie(),i=B(o);pe(i,t,"default",{}),g(a,o)},$$slots:{default:!0}}))}function gf(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"m16 15-3-3 3-3"}]];be(e,ge({name:"panel-left-close"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=ie(),i=B(o);pe(i,t,"default",{}),g(a,o)},$$slots:{default:!0}}))}function Lo(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];be(e,ge({name:"plus"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=ie(),i=B(o);pe(i,t,"default",{}),g(a,o)},$$slots:{default:!0}}))}function bf(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];be(e,ge({name:"search"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=ie(),i=B(o);pe(i,t,"default",{}),g(a,o)},$$slots:{default:!0}}))}function xf(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];be(e,ge({name:"settings"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=ie(),i=B(o);pe(i,t,"default",{}),g(a,o)},$$slots:{default:!0}}))}function _f(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];be(e,ge({name:"square"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=ie(),i=B(o);pe(i,t,"default",{}),g(a,o)},$$slots:{default:!0}}))}function yf(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 19h8"}],["path",{d:"m4 17 6-6-6-6"}]];be(e,ge({name:"terminal"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=ie(),i=B(o);pe(i,t,"default",{}),g(a,o)},$$slots:{default:!0}}))}function wf(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];be(e,ge({name:"trash-2"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=ie(),i=B(o);pe(i,t,"default",{}),g(a,o)},$$slots:{default:!0}}))}function kf(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];be(e,ge({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=ie(),i=B(o);pe(i,t,"default",{}),g(a,o)},$$slots:{default:!0}}))}function Oo(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"}]];be(e,ge({name:"wrench"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=ie(),i=B(o);pe(i,t,"default",{}),g(a,o)},$$slots:{default:!0}}))}function al(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];be(e,ge({name:"x"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=ie(),i=B(o);pe(i,t,"default",{}),g(a,o)},$$slots:{default:!0}}))}var Sf=$("<!> 새 대화",1),Af=$('<div class="px-3 pb-2"><div class="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-dl-bg-card border border-dl-border"><!> <input type="text" placeholder="대화 검색..." class="flex-1 bg-transparent border-none outline-none text-[12px] text-dl-text placeholder:text-dl-text-dim"/></div></div>'),zf=$('<div role="button" tabindex="0"><!> <span class="flex-1 truncate"> </span> <button class="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-dl-bg-card-hover text-dl-text-dim hover:text-dl-primary transition-all"><!></button></div>'),Mf=$('<div><div class="px-2 py-1.5 text-[11px] font-medium text-dl-text-dim uppercase tracking-wider"> </div> <!></div>'),$f=$('<div class="flex-shrink-0 px-4 py-2.5 border-t border-dl-border/50 text-[10px] text-dl-text-dim"> </div>'),Ef=$('<div class="flex flex-col h-full min-w-[260px]"><div class="flex items-center gap-2.5 px-4 pt-4 pb-2"><img src="/avatar.png" alt="DartLab" class="w-8 h-8 rounded-full shadow-sm"/> <span class="text-[15px] font-bold text-dl-text tracking-tight">DartLab</span></div> <div class="p-3 pb-2"><!></div> <!> <div class="flex-1 overflow-y-auto px-2 space-y-4"></div> <!></div>'),Cf=$("<button><!></button>"),Pf=$('<div class="flex flex-col items-center h-full min-w-[52px] py-3 gap-2"><img src="/avatar.png" alt="DartLab" class="w-7 h-7 rounded-full shadow-sm mb-1"/> <button class="p-2.5 rounded-lg text-dl-text-muted hover:text-dl-text hover:bg-dl-bg-card/50 transition-colors" title="새 대화"><!></button> <div class="flex-1 overflow-y-auto flex flex-col items-center gap-1 w-full px-1"></div></div>'),Tf=$("<aside><!></aside>");function Nf(e,t){kr(t,!0);let r=Xe(t,"conversations",19,()=>[]),n=Xe(t,"activeId",3,null),a=Xe(t,"open",3,!0),s=Xe(t,"version",3,""),o=q("");function i(x){const k=new Date().setHours(0,0,0,0),m=k-864e5,M=k-7*864e5,N={오늘:[],어제:[],"이번 주":[],이전:[]};for(const b of x)b.updatedAt>=k?N.오늘.push(b):b.updatedAt>=m?N.어제.push(b):b.updatedAt>=M?N["이번 주"].push(b):N.이전.push(b);const j=[];for(const[b,S]of Object.entries(N))S.length>0&&j.push({label:b,items:S});return j}let d=Me(()=>l(o).trim()?r().filter(x=>x.title.toLowerCase().includes(l(o).toLowerCase())):r()),c=Me(()=>i(l(d)));var f=Tf(),h=u(f);{var v=x=>{var k=Ef(),m=w(u(k),2),M=u(m);tf(M,{variant:"secondary",class:"w-full justify-start gap-2",get onclick(){return t.onNewChat},children:(C,y)=>{var L=Sf(),V=B(L);Lo(V,{size:16}),g(C,L)},$$slots:{default:!0}});var N=w(m,2);{var j=C=>{var y=Af(),L=u(y),V=u(L);bf(V,{size:12,class:"text-dl-text-dim flex-shrink-0"});var we=w(V,2);xn(we,()=>l(o),fe=>p(o,fe)),g(C,y)};T(N,C=>{r().length>3&&C(j)})}var b=w(N,2);ht(b,21,()=>l(c),pt,(C,y)=>{var L=Mf(),V=u(L),we=u(V),fe=w(V,2);ht(fe,17,()=>l(y).items,pt,(Ee,Ce)=>{var le=zf(),X=u(le);Io(X,{size:14,class:"flex-shrink-0 opacity-50"});var D=w(X,2),Z=u(D),H=w(D,2),E=u(H);wf(E,{size:12}),W(ce=>{Je(le,1,ce),Y(Z,l(Ce).title)},[()=>Ye(Be("w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left text-[13px] transition-colors group cursor-pointer",l(Ce).id===n()?"bg-dl-bg-card text-dl-text border-l-2 border-dl-primary":"text-dl-text-muted hover:bg-dl-bg-card/50 hover:text-dl-text border-l-2 border-transparent"))]),K("click",le,()=>{var ce;return(ce=t.onSelect)==null?void 0:ce.call(t,l(Ce).id)}),K("keydown",le,ce=>{var ye;ce.key==="Enter"&&((ye=t.onSelect)==null||ye.call(t,l(Ce).id))}),K("click",H,ce=>{var ye;ce.stopPropagation(),(ye=t.onDelete)==null||ye.call(t,l(Ce).id)}),g(Ee,le)}),W(()=>Y(we,l(y).label)),g(C,L)});var S=w(b,2);{var P=C=>{var y=$f(),L=u(y);W(()=>Y(L,`DartLab v${s()??""}`)),g(C,y)};T(S,C=>{s()&&C(P)})}g(x,k)},z=x=>{var k=Pf(),m=w(u(k),2),M=u(m);Lo(M,{size:18});var N=w(m,2);ht(N,21,()=>r().slice(0,10),pt,(j,b)=>{var S=Cf(),P=u(S);Io(P,{size:16}),W(C=>{Je(S,1,C),ya(S,"title",l(b).title)},[()=>Ye(Be("p-2 rounded-lg transition-colors w-full flex justify-center",l(b).id===n()?"bg-dl-bg-card text-dl-text":"text-dl-text-dim hover:text-dl-text-muted hover:bg-dl-bg-card/50"))]),K("click",S,()=>{var C;return(C=t.onSelect)==null?void 0:C.call(t,l(b).id)}),g(j,S)}),K("click",m,function(...j){var b;(b=t.onNewChat)==null||b.apply(this,j)}),g(x,k)};T(h,x=>{a()?x(v):x(z,-1)})}W(x=>Je(f,1,x),[()=>Ye(Be("flex flex-col h-full bg-dl-bg-darker border-r border-dl-border transition-all duration-300 flex-shrink-0 overflow-hidden",a()?"w-[260px]":"w-[52px]"))]),g(e,f),Sr()}On(["click","keydown"]);var If=$('<button class="text-left px-4 py-3 rounded-xl border border-dl-border bg-dl-bg-card/50 text-[13px] text-dl-text-muted hover:text-dl-text hover:border-dl-primary/30 hover:bg-dl-bg-card transition-all duration-200 cursor-pointer"> </button>'),Lf=$('<div class="flex-1 flex flex-col items-center justify-center px-5"><div class="w-full max-w-[620px] flex flex-col items-center"><img src="/avatar.png" alt="DartLab" class="w-16 h-16 rounded-full mb-5 shadow-lg shadow-dl-primary/10"/> <h1 class="text-2xl font-bold text-dl-text mb-1.5">무엇을 분석할까요?</h1> <p class="text-sm text-dl-text-muted mb-8">종목명과 질문을 입력하거나, 자유롭게 대화하세요</p> <div class="input-box large"><textarea placeholder="삼성전자 재무 건전성을 분석해줘..." rows="1" class="input-textarea"></textarea> <button><!></button></div> <div class="grid grid-cols-2 gap-2.5 mt-6 w-full max-w-[520px]"></div></div></div>');function Of(e,t){kr(t,!0);let r=Xe(t,"inputText",15,""),n;const a=["삼성전자 재무 건전성 분석해줘","LG에너지솔루션 배당 추세는?","카카오 부채 리스크 평가해줘","현대차 영업이익률 추이 분석"];function s(k){var m;k.key==="Enter"&&!k.shiftKey&&(k.preventDefault(),(m=t.onSend)==null||m.call(t))}function o(k){k.target.style.height="auto",k.target.style.height=Math.min(k.target.scrollHeight,200)+"px"}function i(k){r(k),n&&n.focus()}var d=Lf(),c=u(d),f=w(u(c),6),h=u(f);Vi(h,k=>n=k,()=>n);var v=w(h,2),z=u(v);nl(z,{size:18,strokeWidth:2.5});var x=w(f,2);ht(x,21,()=>a,pt,(k,m)=>{var M=If(),N=u(M);W(()=>Y(N,l(m))),K("click",M,()=>i(l(m))),g(k,M)}),W((k,m)=>{Je(v,1,k),v.disabled=m},[()=>Ye(Be("send-btn",r().trim()&&"active")),()=>!r().trim()]),K("keydown",h,s),K("input",h,o),xn(h,r),K("click",v,function(...k){var m;(m=t.onSend)==null||m.apply(this,k)}),g(e,d),Sr()}On(["keydown","input","click"]);var Rf=$("<span><!></span>");function Ro(e,t){kr(t,!0);let r=Xe(t,"variant",3,"default");const n={default:"bg-dl-primary/10 text-dl-primary-light border-dl-primary/20",accent:"bg-dl-accent/10 text-dl-accent-light border-dl-accent/20",success:"bg-dl-success/10 text-dl-success border-dl-success/20",muted:"bg-dl-bg-card-hover text-dl-text-muted border-dl-border"};var a=Rf(),s=u(a);hs(s,()=>t.children),W(o=>Je(a,1,o),[()=>Ye(Be("inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border",n[r()],t.class))]),g(e,a),Sr()}var jf=$('<div class="flex items-start gap-3 animate-fadeIn"><div class="w-7 h-7 rounded-full bg-dl-bg-card-hover border border-dl-border flex items-center justify-center text-[10px] font-semibold text-dl-text-muted flex-shrink-0 mt-0.5">You</div> <div class="flex-1 pt-0.5"><p class="text-[15px] text-dl-text leading-relaxed"> </p></div></div>'),Df=$('<div class="flex flex-wrap items-center gap-1.5 mb-2"><!> <!></div>'),Ff=$('<div class="px-3 py-2 bg-dl-bg-card/50"><div class="text-[10px] text-dl-text-dim leading-tight"> </div> <div> </div></div>'),Gf=$('<span class="flex items-center gap-1 text-[10px] text-amber-400"><!> </span>'),Vf=$('<div class="px-3 py-1.5 border-t border-dl-border/30 flex flex-wrap gap-2"></div>'),Bf=$('<div class="mb-3 rounded-xl border border-dl-border/50 bg-dl-bg-card/30 overflow-hidden animate-fadeIn"><div class="grid gap-px" style="grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));"></div> <!></div>'),Hf=$('<button class="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-dl-border/60 bg-dl-bg-card/60 text-[11px] text-dl-text-muted hover:text-dl-text hover:border-dl-primary/40 hover:bg-dl-primary/[0.05] transition-all"><!> <span> </span></button>'),Wf=$('<div class="mb-3"><div class="flex items-center gap-1.5 mb-1.5 text-[11px] text-dl-text-dim"><!> <span>분석에 사용된 데이터</span></div> <div class="flex flex-wrap items-center gap-1.5"></div></div>'),Kf=$('<span class="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-dl-accent/30 bg-dl-accent/5 text-[11px] text-dl-accent"><!> </span>'),qf=$('<div class="mb-3"><div class="flex items-center gap-1.5 mb-1.5 text-[11px] text-dl-text-dim"><!> <span>사용된 도구</span></div> <div class="flex flex-wrap items-center gap-1.5"></div></div>'),Uf=$('<div class="flex items-center gap-2 h-6 text-[12px] text-dl-text-dim animate-fadeIn"><!> <span> </span></div>'),Yf=$('<div class="flex items-center gap-2 mb-2 text-[11px] text-dl-text-dim"><!> <span> </span></div>'),Jf=$('<span class="flex items-center gap-1 text-[10px] text-dl-text-dim"><!> </span>'),Xf=$('<button class="flex items-center gap-1 text-[10px] text-dl-text-dim hover:text-dl-text-muted transition-colors"><!> <span>LLM에 제공된 데이터 보기</span> <!></button>'),Zf=$('<span class="px-1.5 py-0.5 rounded text-[9px] bg-dl-bg-card-hover text-dl-text-dim border border-dl-border/50"> </span>'),Qf=$('<div class="flex items-start gap-2"><span class="text-[10px] text-dl-text-dim flex-shrink-0 mt-0.5 w-20">포함 모듈</span> <div class="flex flex-wrap gap-1"></div></div>'),ev=$('<div class="flex items-center gap-2"><span class="text-[10px] text-dl-text-dim flex-shrink-0 w-20">데이터 기간</span> <span class="text-[10px] text-dl-text-muted"> </span></div>'),tv=$('<div class="flex items-center gap-2"><span class="text-[10px] text-dl-text-dim flex-shrink-0 w-20">시스템 프롬프트</span> <button class="flex items-center gap-1 text-[10px] text-dl-primary-light hover:underline"><!> </button></div>'),rv=$('<div class="flex items-center gap-2"><span class="text-[10px] text-dl-text-dim flex-shrink-0 w-20">LLM 입력</span> <button class="flex items-center gap-1 text-[10px] text-dl-accent hover:underline"><!> </button></div>'),nv=$('<button class="flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] bg-dl-bg-card-hover text-dl-text-muted border border-dl-border/50 hover:border-dl-primary/30 hover:text-dl-text transition-colors"><!> </button>'),av=$('<div class="flex items-start gap-2"><span class="text-[10px] text-dl-text-dim flex-shrink-0 mt-0.5 w-20">데이터 모듈</span> <div class="flex flex-wrap gap-1"></div></div>'),sv=$('<div class="mt-2 p-3 rounded-xl border border-dl-border/30 bg-dl-bg-card/30 space-y-2 animate-fadeIn"><!> <!> <!> <!> <!></div>'),ov=$('<div class="flex items-center gap-3 mt-3 pt-2 border-t border-dl-border/20"><!> <!></div> <!>',1),iv=$("<!> <div><!></div> <!>",1),lv=$('<div class="flex items-start gap-3 animate-fadeIn"><img src="/avatar.png" alt="DartLab" class="w-7 h-7 rounded-full flex-shrink-0 mt-0.5"/> <div class="flex-1 pt-0.5 min-w-0"><!> <!> <!> <!> <!></div></div>'),dv=$('<span class="text-[10px] text-dl-text-dim"> </span>'),cv=$('<div class="flex items-center gap-0.5 bg-dl-bg-darker rounded-lg p-0.5"><button><!> 렌더링</button> <button><!> 원문</button></div>'),uv=$("<button> </button>"),fv=$('<div class="px-5 pb-2.5 overflow-x-auto scrollbar-hide"><div class="flex items-center gap-1.5"></div></div>'),vv=$("<button>시스템 프롬프트</button>"),pv=$("<button>LLM 입력</button>"),hv=$('<div class="px-5 pb-2.5"><div class="flex items-center gap-1.5"><!> <!></div></div>'),mv=$('<div class="prose-dartlab text-[13px] leading-[1.7] pt-3"><!></div>'),gv=$('<pre class="text-[11px] text-dl-text-muted font-mono bg-dl-bg-darker rounded-xl p-4 mt-3 overflow-x-auto whitespace-pre-wrap break-words"> </pre>'),bv=$('<div class="fixed inset-0 z-[300] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn"><div class="w-full max-w-3xl max-h-[80vh] mx-4 bg-dl-bg-card border border-dl-border rounded-2xl shadow-2xl overflow-hidden flex flex-col"><div class="flex-shrink-0 border-b border-dl-border/50"><div class="flex items-center justify-between px-5 pt-4 pb-3"><div class="flex items-center gap-2 text-[14px] font-medium text-dl-text"><!> <span> </span> <!></div> <div class="flex items-center gap-2"><!> <button class="p-1 rounded-lg text-dl-text-dim hover:text-dl-text hover:bg-white/5 transition-colors"><!></button></div></div> <!> <!></div> <div class="flex-1 overflow-y-auto px-5 pb-5 min-h-0"><!></div></div></div>'),xv=$("<!> <!>",1);function _v(e,t){kr(t,!0);let r=q(null),n=q("context"),a=q("raw"),s=q(!1),o=Me(()=>{var b,S,P,C;if(!t.message.loading)return"";if(t.message.text)return"응답 작성 중";if(((b=t.message.toolEvents)==null?void 0:b.length)>0)return"도구 실행 중";if(((S=t.message.contexts)==null?void 0:S.length)>0){const y=t.message.contexts[t.message.contexts.length-1];return`데이터 분석 중 — ${(y==null?void 0:y.label)||(y==null?void 0:y.module)||""}`}return t.message.snapshot?"핵심 수치 확인 완료, 데이터 검색 중":(P=t.message.meta)!=null&&P.company?`${t.message.meta.company} 데이터 검색 중`:(C=t.message.meta)!=null&&C.includedModules?"분석 모듈 선택 완료":"생각 중"}),i=Me(()=>{var b,S;return t.message.systemPrompt||((b=t.message.contexts)==null?void 0:b.length)>0||((S=t.message.meta)==null?void 0:S.includedModules)}),d=Me(()=>{var b;return(b=t.message.meta)==null?void 0:b.dataYearRange});function c(b){const S=b.replace(/<\/?strong>/g,"").replace(/\*\*/g,"").trim();return/^[−\-+]?[\d,]+\.?\d*[%조억만원배x]*$/.test(S)||S==="-"||S==="0"}function f(b){if(!b)return"";let S=[],C=b.replace(/((?:^\|.+\|$\n?)+)/gm,y=>{const L=y.trim().split(`
`).filter(le=>le.trim());let V=null,we=-1,fe=[];for(let le=0;le<L.length;le++)if(L[le].slice(1,-1).split("|").map(D=>D.trim()).every(D=>/^[\-:]+$/.test(D))){we=le;break}we>0?(V=L[we-1],fe=L.slice(we+1)):(we===0||(V=L[0]),fe=L.slice(1));let Ee="<table>";if(V){const le=V.slice(1,-1).split("|").map(X=>X.trim());Ee+="<thead><tr>"+le.map(X=>`<th>${X.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>")}</th>`).join("")+"</tr></thead>"}if(fe.length>0){Ee+="<tbody>";for(const le of fe){const X=le.slice(1,-1).split("|").map(D=>D.trim());Ee+="<tr>"+X.map(D=>{let Z=D.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>");return`<td${c(D)?' class="num"':""}>${Z}</td>`}).join("")+"</tr>"}Ee+="</tbody>"}Ee+="</table>";let Ce=S.length;return S.push(Ee),`
%%TABLE_${Ce}%%
`}).replace(/```(\w*)\n([\s\S]*?)```/g,"<pre><code>$2</code></pre>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^### (.+)$/gm,"<h3>$1</h3>").replace(/^## (.+)$/gm,"<h2>$1</h2>").replace(/^# (.+)$/gm,"<h1>$1</h1>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/\*([^*]+)\*/g,"<em>$1</em>").replace(/^[•\-\*] (.+)$/gm,"<li>$1</li>").replace(/^\d+\. (.+)$/gm,"<li>$1</li>").replace(/^> (.+)$/gm,"<blockquote>$1</blockquote>").replace(/\n\n/g,"</p><p>").replace(/\n/g,"<br>");C=C.replace(/(<li>.*?<\/li>(\s*<br>)?)+/g,y=>"<ul>"+y.replace(/<br>/g,"")+"</ul>");for(let y=0;y<S.length;y++)C=C.replace(`%%TABLE_${y}%%`,S[y]);return"<p>"+C+"</p>"}function h(b){p(r,b,!0),p(n,"context"),p(a,"rendered")}function v(){p(r,0),p(n,"system"),p(a,"raw")}function z(){p(r,null)}var x=xv(),k=B(x);{var m=b=>{var S=jf(),P=w(u(S),2),C=u(P),y=u(C);W(()=>Y(y,t.message.text)),g(b,S)},M=b=>{var S=lv(),P=w(u(S),2),C=u(P);{var y=Z=>{var H=Df(),E=u(H);{var ce=ae=>{Ro(ae,{variant:"muted",children:(ee,J)=>{var he=Zn();W(()=>Y(he,t.message.company)),g(ee,he)},$$slots:{default:!0}})};T(E,ae=>{t.message.company&&ae(ce)})}var ye=w(E,2);{var Re=ae=>{Ro(ae,{variant:"accent",children:(ee,J)=>{var he=Zn();W(()=>Y(he,l(d))),g(ee,he)},$$slots:{default:!0}})};T(ye,ae=>{l(d)&&ae(Re)})}g(Z,H)};T(C,Z=>{(t.message.company||l(d))&&Z(y)})}var L=w(C,2);{var V=Z=>{var H=Bf(),E=u(H);ht(E,21,()=>t.message.snapshot.items,pt,(Re,ae)=>{const ee=Me(()=>l(ae).status==="good"?"text-dl-success":l(ae).status==="danger"?"text-dl-primary-light":l(ae).status==="caution"?"text-amber-400":"text-dl-text");var J=Ff(),he=u(J),Ae=u(he),te=w(he,2),dt=u(te);W(ct=>{Y(Ae,l(ae).label),Je(te,1,ct),Y(dt,l(ae).value)},[()=>Ye(Be("text-[14px] font-semibold leading-snug mt-0.5",l(ee)))]),g(Re,J)});var ce=w(E,2);{var ye=Re=>{var ae=Vf();ht(ae,21,()=>t.message.snapshot.warnings,pt,(ee,J)=>{var he=Gf(),Ae=u(he);kf(Ae,{size:10});var te=w(Ae);W(()=>Y(te,` ${l(J)??""}`)),g(ee,he)}),g(Re,ae)};T(ce,Re=>{var ae;((ae=t.message.snapshot.warnings)==null?void 0:ae.length)>0&&Re(ye)})}g(Z,H)};T(L,Z=>{var H,E;((E=(H=t.message.snapshot)==null?void 0:H.items)==null?void 0:E.length)>0&&Z(V)})}var we=w(L,2);{var fe=Z=>{var H=Wf(),E=u(H),ce=u(E);ha(ce,{size:11});var ye=w(E,2);ht(ye,21,()=>t.message.contexts,pt,(Re,ae,ee)=>{var J=Hf(),he=u(J);ha(he,{size:11,class:"flex-shrink-0"});var Ae=w(he,2),te=u(Ae);W(()=>Y(te,l(ae).label||l(ae).module)),K("click",J,()=>h(ee)),g(Re,J)}),g(Z,H)};T(we,Z=>{var H;((H=t.message.contexts)==null?void 0:H.length)>0&&Z(fe)})}var Ee=w(we,2);{var Ce=Z=>{var H=qf(),E=u(H),ce=u(E);Oo(ce,{size:11});var ye=w(E,2);ht(ye,21,()=>t.message.toolEvents,pt,(Re,ae)=>{var ee=ie(),J=B(ee);{var he=Ae=>{var te=Kf(),dt=u(te);Oo(dt,{size:11});var ct=w(dt);W(()=>Y(ct,` ${l(ae).name??""}`)),g(Ae,te)};T(J,Ae=>{l(ae).type==="call"&&Ae(he)})}g(Re,ee)}),g(Z,H)};T(Ee,Z=>{var H;((H=t.message.toolEvents)==null?void 0:H.length)>0&&Z(Ce)})}var le=w(Ee,2);{var X=Z=>{var H=Uf(),E=u(H);Xt(E,{size:14,class:"animate-spin flex-shrink-0"});var ce=w(E,2),ye=u(ce);W(()=>Y(ye,l(o))),g(Z,H)},D=Z=>{var H=iv(),E=B(H);{var ce=J=>{var he=Yf(),Ae=u(he);Xt(Ae,{size:12,class:"animate-spin flex-shrink-0"});var te=w(Ae,2),dt=u(te);W(()=>Y(dt,l(o))),g(J,he)};T(E,J=>{t.message.loading&&J(ce)})}var ye=w(E,2),Re=u(ye);mo(Re,()=>f(t.message.text));var ae=w(ye,2);{var ee=J=>{var he=ov(),Ae=B(he),te=u(Ae);{var dt=mt=>{var yt=Jf(),G=u(yt);df(G,{size:10});var xe=w(G);W(()=>Y(xe,` ${t.message.duration??""}초`)),g(mt,yt)};T(te,mt=>{t.message.duration&&mt(dt)})}var ct=w(te,2);{var Wt=mt=>{var yt=Xf(),G=u(yt);ff(G,{size:10});var xe=w(G,4);{var je=Pe=>{lf(Pe,{size:10})},Ve=Pe=>{of(Pe,{size:10})};T(xe,Pe=>{l(s)?Pe(je):Pe(Ve,-1)})}K("click",yt,()=>p(s,!l(s))),g(mt,yt)};T(ct,mt=>{l(i)&&mt(Wt)})}var gr=w(Ae,2);{var ar=mt=>{var yt=sv(),G=u(yt);{var xe=Oe=>{var Te=Qf(),gt=w(u(Te),2);ht(gt,21,()=>t.message.meta.includedModules,pt,(Ct,sr)=>{var or=Zf(),Wr=u(or);W(()=>Y(Wr,l(sr))),g(Ct,or)}),g(Oe,Te)};T(G,Oe=>{var Te;(Te=t.message.meta)!=null&&Te.includedModules&&Oe(xe)})}var je=w(G,2);{var Ve=Oe=>{var Te=ev(),gt=w(u(Te),2),Ct=u(gt);W(()=>Y(Ct,l(d))),g(Oe,Te)};T(je,Oe=>{l(d)&&Oe(Ve)})}var Pe=w(je,2);{var Lt=Oe=>{var Te=tv(),gt=w(u(Te),2),Ct=u(gt);Po(Ct,{size:10});var sr=w(Ct);W(or=>Y(sr,` 전문 보기 (${or??""}자)`),[()=>t.message.systemPrompt.length.toLocaleString()]),K("click",gt,v),g(Oe,Te)};T(Pe,Oe=>{t.message.systemPrompt&&Oe(Lt)})}var wt=w(Pe,2);{var ut=Oe=>{var Te=rv(),gt=w(u(Te),2),Ct=u(gt);xa(Ct,{size:10});var sr=w(Ct);W(or=>Y(sr,` 전문 보기 (${or??""}자)`),[()=>t.message.userContent.length.toLocaleString()]),K("click",gt,()=>{p(r,0),p(n,"userContent"),p(a,"raw")}),g(Oe,Te)};T(wt,Oe=>{t.message.userContent&&Oe(ut)})}var kt=w(wt,2);{var Hr=Oe=>{var Te=av(),gt=w(u(Te),2);ht(gt,21,()=>t.message.contexts,pt,(Ct,sr,or)=>{var Wr=nv(),Rn=u(Wr);ha(Rn,{size:8});var Pa=w(Rn);W(()=>Y(Pa,` ${(l(sr).label||l(sr).module)??""}`)),K("click",Wr,()=>h(or)),g(Ct,Wr)}),g(Oe,Te)};T(kt,Oe=>{var Te;((Te=t.message.contexts)==null?void 0:Te.length)>0&&Oe(Hr)})}g(mt,yt)};T(gr,mt=>{l(s)&&l(i)&&mt(ar)})}g(J,he)};T(ae,J=>{!t.message.loading&&(t.message.duration||l(i))&&J(ee)})}W(J=>Je(ye,1,J),[()=>Ye(Be("prose-dartlab text-[15px] leading-[1.75]",t.message.error&&"text-dl-primary"))]),g(Z,H)};T(le,Z=>{t.message.loading&&!t.message.text?Z(X):Z(D,-1)})}g(b,S)};T(k,b=>{t.message.role==="user"?b(m):b(M,-1)})}var N=w(k,2);{var j=b=>{const S=Me(()=>l(n)==="system"),P=Me(()=>l(n)==="userContent"),C=Me(()=>l(n)==="context"),y=Me(()=>{var G;return l(C)?(G=t.message.contexts)==null?void 0:G[l(r)]:null}),L=Me(()=>{var G,xe;return l(S)?"시스템 프롬프트":l(P)?"LLM에 전달된 입력":((G=l(y))==null?void 0:G.label)||((xe=l(y))==null?void 0:xe.module)||""}),V=Me(()=>{var G;return l(S)?t.message.systemPrompt:l(P)?t.message.userContent:(G=l(y))==null?void 0:G.text});var we=bv(),fe=u(we),Ee=u(fe),Ce=u(Ee),le=u(Ce),X=u(le);{var D=G=>{Po(G,{size:15,class:"text-dl-primary-light flex-shrink-0"})},Z=G=>{xa(G,{size:15,class:"text-dl-accent flex-shrink-0"})},H=G=>{ha(G,{size:15,class:"flex-shrink-0"})};T(X,G=>{l(S)?G(D):l(P)?G(Z,1):G(H,-1)})}var E=w(X,2),ce=u(E),ye=w(E,2);{var Re=G=>{var xe=dv(),je=u(xe);W(Ve=>Y(je,`(${Ve??""}자)`),[()=>{var Ve,Pe;return(Pe=(Ve=l(V))==null?void 0:Ve.length)==null?void 0:Pe.toLocaleString()}]),g(G,xe)};T(ye,G=>{l(S)&&G(Re)})}var ae=w(le,2),ee=u(ae);{var J=G=>{var xe=cv(),je=u(xe),Ve=u(je);xa(Ve,{size:11});var Pe=w(je,2),Lt=u(Pe);cf(Lt,{size:11}),W((wt,ut)=>{Je(je,1,wt),Je(Pe,1,ut)},[()=>Ye(Be("flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] transition-colors",l(a)==="rendered"?"bg-dl-bg-card text-dl-text shadow-sm":"text-dl-text-dim hover:text-dl-text-muted")),()=>Ye(Be("flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] transition-colors",l(a)==="raw"?"bg-dl-bg-card text-dl-text shadow-sm":"text-dl-text-dim hover:text-dl-text-muted"))]),K("click",je,()=>p(a,"rendered")),K("click",Pe,()=>p(a,"raw")),g(G,xe)};T(ee,G=>{l(C)&&G(J)})}var he=w(ee,2),Ae=u(he);al(Ae,{size:18});var te=w(Ce,2);{var dt=G=>{var xe=fv(),je=u(xe);ht(je,21,()=>t.message.contexts,pt,(Ve,Pe,Lt)=>{var wt=uv(),ut=u(wt);W(kt=>{Je(wt,1,kt),Y(ut,t.message.contexts[Lt].label||t.message.contexts[Lt].module)},[()=>Ye(Be("px-2.5 py-1 rounded-lg text-[11px] whitespace-nowrap transition-colors flex-shrink-0",Lt===l(r)?"bg-dl-primary/20 text-dl-primary-light font-medium":"bg-dl-bg-darker text-dl-text-dim hover:text-dl-text-muted hover:bg-dl-bg-darker/80"))]),K("click",wt,()=>{p(r,Lt,!0)}),g(Ve,wt)}),g(G,xe)};T(te,G=>{var xe;l(C)&&((xe=t.message.contexts)==null?void 0:xe.length)>1&&G(dt)})}var ct=w(te,2);{var Wt=G=>{var xe=hv(),je=u(xe),Ve=u(je);{var Pe=ut=>{var kt=vv();W(Hr=>Je(kt,1,Hr),[()=>Ye(Be("px-2.5 py-1 rounded-lg text-[11px] whitespace-nowrap transition-colors flex-shrink-0",l(S)?"bg-dl-primary/20 text-dl-primary-light font-medium":"bg-dl-bg-darker text-dl-text-dim hover:text-dl-text-muted"))]),K("click",kt,()=>{p(n,"system")}),g(ut,kt)};T(Ve,ut=>{t.message.systemPrompt&&ut(Pe)})}var Lt=w(Ve,2);{var wt=ut=>{var kt=pv();W(Hr=>Je(kt,1,Hr),[()=>Ye(Be("px-2.5 py-1 rounded-lg text-[11px] whitespace-nowrap transition-colors flex-shrink-0",l(P)?"bg-dl-accent/20 text-dl-accent font-medium":"bg-dl-bg-darker text-dl-text-dim hover:text-dl-text-muted"))]),K("click",kt,()=>{p(n,"userContent")}),g(ut,kt)};T(Lt,ut=>{t.message.userContent&&ut(wt)})}g(G,xe)};T(ct,G=>{l(C)||G(Wt)})}var gr=w(Ee,2),ar=u(gr);{var mt=G=>{var xe=mv(),je=u(xe);mo(je,()=>{var Ve;return f((Ve=l(y))==null?void 0:Ve.text)}),g(G,xe)},yt=G=>{var xe=gv(),je=u(xe);W(()=>Y(je,l(V))),g(G,xe)};T(ar,G=>{l(C)&&l(a)==="rendered"?G(mt):G(yt,-1)})}W(()=>Y(ce,l(L))),K("click",we,G=>{G.target===G.currentTarget&&z()}),K("keydown",we,G=>{G.key==="Escape"&&z()}),K("click",he,z),g(b,we)};T(N,b=>{l(r)!==null&&b(j)})}g(e,x),Sr()}On(["click","keydown"]);var yv=$('<button class="send-btn active"><!></button>'),wv=$("<button><!></button>"),kv=$('<div class="flex flex-col h-full min-h-0"><div class="flex-1 overflow-y-auto min-h-0"><div class="max-w-[720px] mx-auto px-5 pt-14 pb-8 space-y-8"></div></div> <div class="flex-shrink-0 px-5 pb-4 pt-2"><div class="max-w-[720px] mx-auto"><div class="input-box"><textarea placeholder="메시지를 입력하세요..." rows="1" class="input-textarea"></textarea> <!></div></div></div></div>');function Sv(e,t){kr(t,!0);let r=Xe(t,"messages",19,()=>[]),n=Xe(t,"isLoading",3,!1),a=Xe(t,"inputText",15,""),s=Xe(t,"scrollTrigger",3,0),o,i=!1;function d(){if(!o)return;const{scrollTop:S,scrollHeight:P,clientHeight:C}=o;i=P-S-C>80}_a(()=>{s(),!(!o||i)&&requestAnimationFrame(()=>{o&&(o.scrollTop=o.scrollHeight)})});function c(S){var P;S.key==="Enter"&&!S.shiftKey&&(S.preventDefault(),(P=t.onSend)==null||P.call(t))}function f(S){S.target.style.height="auto",S.target.style.height=Math.min(S.target.scrollHeight,200)+"px"}var h=kv(),v=u(h),z=u(v);ht(z,21,r,pt,(S,P)=>{_v(S,{get message(){return l(P)}})}),Vi(v,S=>o=S,()=>o);var x=w(v,2),k=u(x),m=u(k),M=u(m),N=w(M,2);{var j=S=>{var P=yv(),C=u(P);_f(C,{size:14}),K("click",P,function(...y){var L;(L=t.onStop)==null||L.apply(this,y)}),g(S,P)},b=S=>{var P=wv(),C=u(P);nl(C,{size:16,strokeWidth:2.5}),W((y,L)=>{Je(P,1,y),P.disabled=L},[()=>Ye(Be("send-btn",a().trim()&&"active")),()=>!a().trim()]),K("click",P,function(...y){var L;(L=t.onSend)==null||L.apply(this,y)}),g(S,P)};T(N,S=>{n()?S(j):S(b,-1)})}Ni("scroll",v,d),K("keydown",M,c),K("input",M,f),xn(M,a),g(e,h),Sr()}On(["keydown","input","click"]);var Av=$("<!> <span>확인 중...</span>",1),zv=$("<!> <span>설정 필요</span>",1),Mv=$('<span class="text-dl-text-dim">/</span> <span class="max-w-[80px] truncate"> </span>',1),$v=$('<span class="w-1.5 h-1.5 rounded-full bg-dl-success"></span> <span> </span> <!> <!>',1),Ev=$('<div class="mx-3 mb-2 px-4 py-3 rounded-xl border border-dl-border bg-dl-bg-card/80 backdrop-blur-sm flex items-center gap-3 pointer-events-auto"><!> <div class="flex-1"><div class="text-[13px] text-dl-text-muted">AI Provider 확인 중...</div></div></div>'),Cv=$('<div class="mx-3 mb-2 px-4 py-3 rounded-xl border border-dl-primary/30 bg-dl-primary/5 backdrop-blur-sm flex items-center gap-3 pointer-events-auto"><!> <div class="flex-1"><div class="text-[13px] text-dl-text">AI Provider가 설정되지 않았습니다</div> <div class="text-[11px] text-dl-text-muted mt-0.5">대화를 시작하려면 Provider를 설정해주세요</div></div> <button class="px-3 py-1.5 rounded-lg bg-dl-primary/20 text-dl-primary-light text-[12px] font-medium hover:bg-dl-primary/30 transition-colors flex-shrink-0">설정하기</button></div>'),Pv=$('<span class="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-dl-primary/20 text-dl-primary-light">사용 중</span>'),Tv=$('<!> <span class="text-[10px] text-amber-400">인증 필요</span>',1),Nv=$('<!> <span class="text-[10px] text-dl-text-dim">미설치</span>',1),Iv=$('<div class="flex items-center gap-1.5 mt-2 text-[11px] text-dl-primary-light"><!> API 키가 유효하지 않습니다. 다시 확인해주세요.</div>'),Lv=$('<div class="px-4 pb-4 border-t border-dl-border/50 pt-3"><div class="text-[11px] text-dl-text-muted mb-2"> </div> <div class="flex items-center gap-2"><input type="password" class="flex-1 bg-dl-bg-darker border border-dl-border rounded-lg px-3 py-2 text-[12px] text-dl-text placeholder:text-dl-text-dim outline-none focus:border-dl-primary/50 transition-colors"/> <button class="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-dl-primary/20 text-dl-primary-light text-[12px] font-medium hover:bg-dl-primary/30 transition-colors disabled:opacity-40 flex-shrink-0"><!> 인증</button></div> <!></div>'),Ov=$('<button class="px-2.5 py-1.5 rounded-lg bg-dl-primary/20 text-dl-primary-light text-[11px] hover:bg-dl-primary/30 transition-colors disabled:opacity-40"><!></button>'),Rv=$('<div class="px-4 pb-2 border-t border-dl-border/50 pt-2.5"><div class="flex items-center gap-2"><!> <span class="text-[11px] text-dl-success">인증됨</span> <span class="text-[10px] text-dl-text-dim">— 다른 키로 변경하려면 입력하세요</span></div> <div class="flex items-center gap-2 mt-2"><input type="password" placeholder="새 API 키 (변경 시에만)" class="flex-1 bg-dl-bg-darker border border-dl-border rounded-lg px-3 py-1.5 text-[11px] text-dl-text placeholder:text-dl-text-dim outline-none focus:border-dl-primary/50 transition-colors"/> <!></div></div>'),jv=$('<div class="px-4 pb-4 border-t border-dl-border/50 pt-3"><div class="text-[12px] text-dl-text mb-2">Ollama가 설치되어 있지 않습니다</div> <a href="https://ollama.com/download" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-3 py-2 rounded-lg bg-dl-bg-darker border border-dl-border text-[12px] text-dl-text-muted hover:text-dl-text hover:border-dl-primary/30 transition-colors"><!> Ollama 다운로드 (ollama.com) <!></a> <div class="text-[10px] text-dl-text-dim mt-2">설치 후 Ollama를 실행하고 새로고침하세요</div></div>'),Dv=$('<div class="px-4 pb-3 border-t border-dl-border/50 pt-3"><div class="flex items-center gap-2 text-[12px] text-amber-400"><!> Ollama가 설치되었지만 실행되지 않고 있습니다</div> <div class="text-[10px] text-dl-text-dim mt-1">터미널에서 <code class="px-1 py-0.5 rounded bg-dl-bg-darker text-dl-text-muted">ollama serve</code>를 실행하세요</div></div>'),Fv=$('<div class="flex items-start gap-2.5"><span class="text-[10px] text-dl-text-dim mt-0.5 flex-shrink-0">1.</span> <div class="flex-1"><div class="text-[10px] text-dl-text-dim mb-1">Node.js 설치 후 실행</div> <div class="p-2 rounded-lg bg-dl-bg-darker border border-dl-border text-[11px] text-dl-text-muted font-mono">npm install -g @openai/codex</div></div></div>'),Gv=$('<div class="text-[12px] text-dl-text mb-2.5"> </div> <div class="space-y-2"><!> <div class="flex items-start gap-2.5"><span class="text-[10px] text-dl-text-dim mt-0.5 flex-shrink-0"> </span> <div class="flex-1"><div class="text-[10px] text-dl-text-dim mb-1">브라우저 인증 (ChatGPT 계정)</div> <div class="p-2 rounded-lg bg-dl-bg-darker border border-dl-border text-[11px] text-dl-text-muted font-mono">codex</div></div></div></div> <div class="flex items-center gap-1.5 mt-2.5 px-2.5 py-2 rounded-lg bg-amber-500/5 border border-amber-500/20"><!> <span class="text-[10px] text-amber-400/80">ChatGPT Plus 또는 Pro 구독이 필요합니다</span></div>',1),Vv=$('<div class="flex items-start gap-2.5"><span class="text-[10px] text-dl-text-dim mt-0.5 flex-shrink-0">1.</span> <div class="flex-1"><div class="text-[10px] text-dl-text-dim mb-1">Node.js 설치 후 실행</div> <div class="p-2 rounded-lg bg-dl-bg-darker border border-dl-border text-[11px] text-dl-text-muted font-mono">npm install -g @anthropic-ai/claude-code</div></div></div>'),Bv=$('<div class="text-[12px] text-dl-text mb-2.5"> </div> <div class="space-y-2"><!> <div class="flex items-start gap-2.5"><span class="text-[10px] text-dl-text-dim mt-0.5 flex-shrink-0"> </span> <div class="flex-1"><div class="text-[10px] text-dl-text-dim mb-1">인증</div> <div class="p-2 rounded-lg bg-dl-bg-darker border border-dl-border text-[11px] text-dl-text-muted font-mono">claude auth login</div></div></div></div> <div class="flex items-center gap-1.5 mt-2.5 px-2.5 py-2 rounded-lg bg-amber-500/5 border border-amber-500/20"><!> <span class="text-[10px] text-amber-400/80">Claude Pro 또는 Max 구독이 필요합니다</span></div>',1),Hv=$('<div class="px-4 pb-4 border-t border-dl-border/50 pt-3"><!> <div class="text-[10px] text-dl-text-dim mt-2">설치 완료 후 새로고침하세요</div></div>'),Wv=$("<!> 브라우저에서 로그인 중...",1),Kv=$("<!> OpenAI 계정으로 로그인",1),qv=$('<div class="px-4 pb-4 border-t border-dl-border/50 pt-3"><div class="text-[12px] text-dl-text mb-2.5">ChatGPT 계정으로 로그인하여 사용하세요</div> <button class="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-dl-primary/20 text-dl-primary-light text-[12px] font-medium hover:bg-dl-primary/30 transition-colors disabled:opacity-40"><!></button> <div class="flex items-center gap-1.5 mt-2.5 px-2.5 py-2 rounded-lg bg-amber-500/5 border border-amber-500/20"><!> <span class="text-[10px] text-amber-400/80">ChatGPT Plus 또는 Pro 구독이 필요합니다</span></div></div>'),Uv=$('<div class="px-4 pb-2 border-t border-dl-border/50 pt-2.5"><div class="flex items-center justify-between"><div class="flex items-center gap-2"><!> <span class="text-[11px] text-dl-success">ChatGPT 인증됨</span></div> <button class="flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] text-dl-text-dim hover:text-dl-primary-light hover:bg-white/5 transition-colors"><!> 로그아웃</button></div></div>'),Yv=$('<div class="flex items-center gap-2 py-3 text-[12px] text-dl-text-dim"><!> 모델 목록 불러오는 중...</div>'),Jv=$("<button> <!></button>"),Xv=$('<div class="flex flex-wrap gap-1.5"></div>'),Zv=$('<div class="text-[11px] text-dl-text-dim py-2">사용 가능한 모델이 없습니다</div>'),Qv=$('<div class="p-3 rounded-lg border border-dl-border bg-dl-bg-darker"><div class="flex items-center justify-between mb-1.5"><span class="text-[11px] text-dl-text flex items-center gap-1.5"><!> 다운로드 중</span> <button class="px-2 py-0.5 rounded text-[10px] text-dl-text-dim hover:text-dl-primary-light transition-colors">취소</button></div> <div class="w-full h-1.5 rounded-full bg-dl-bg-dark overflow-hidden"><div class="h-full rounded-full bg-gradient-to-r from-dl-primary to-dl-primary-light transition-all duration-300"></div></div> <div class="text-[10px] text-dl-text-dim mt-1"> </div></div>'),ep=$('<span class="px-1 py-px rounded text-[9px] bg-dl-primary/15 text-dl-primary-light"> </span>'),tp=$('<button class="flex items-center gap-2.5 w-full px-2.5 py-2 rounded-lg border border-dl-border/50 text-left hover:border-dl-primary/30 hover:bg-white/[0.02] transition-all group"><div class="flex-1 min-w-0"><div class="flex items-center gap-1.5"><span class="text-[11px] font-medium text-dl-text"> </span> <span class="px-1 py-px rounded text-[9px] bg-dl-bg-darker text-dl-text-dim"> </span> <!></div> <div class="text-[10px] text-dl-text-dim mt-0.5"> </div></div> <div class="flex items-center gap-1.5 flex-shrink-0"><span class="text-[9px] text-dl-text-dim"> </span> <!></div></button>'),rp=$('<div class="flex items-center gap-1.5"><input type="text" placeholder="모델명 (예: gemma3)" class="flex-1 bg-dl-bg-darker border border-dl-border rounded-lg px-2.5 py-1.5 text-[11px] text-dl-text placeholder:text-dl-text-dim outline-none focus:border-dl-primary/50 transition-colors"/> <button class="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-dl-primary/20 text-dl-primary-light text-[11px] font-medium hover:bg-dl-primary/30 transition-colors disabled:opacity-40 flex-shrink-0"><!> 받기</button></div> <div class="mt-2.5 space-y-1"></div>',1),np=$('<div class="mt-3 pt-3 border-t border-dl-border/30"><div class="flex items-center justify-between mb-2"><span class="text-[11px] text-dl-text-muted">모델 다운로드</span> <a href="https://ollama.com/library" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-[10px] text-dl-text-dim hover:text-dl-primary-light transition-colors">전체 목록 <!></a></div> <!></div>'),ap=$('<div class="px-4 pb-4 border-t border-dl-border/50 pt-3"><div class="flex items-center justify-between mb-2.5"><span class="text-[11px] font-medium text-dl-text-muted">모델 선택</span> <!></div> <!> <!></div>'),sp=$("<!> <!> <!> <!> <!> <!> <!>",1),op=$('<div><button class="flex items-center gap-3 w-full px-4 py-3 text-left"><span></span> <div class="flex-1 min-w-0"><div class="flex items-center gap-2"><span class="text-[13px] font-medium text-dl-text"> </span> <!></div> <div class="text-[11px] text-dl-text-dim mt-0.5"> </div></div> <div class="flex items-center gap-2 flex-shrink-0"><!></div></button> <!></div>'),ip=$('<div class="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn"><div class="w-full max-w-xl bg-dl-bg-card border border-dl-border rounded-2xl shadow-2xl overflow-hidden"><div class="flex items-center justify-between px-6 pt-5 pb-3"><div class="text-[14px] font-semibold text-dl-text">AI Provider 설정</div> <button class="p-1 rounded-lg text-dl-text-dim hover:text-dl-text hover:bg-white/5 transition-colors"><!></button></div> <div class="px-6 pb-5 max-h-[70vh] overflow-y-auto"><div class="space-y-2.5"></div></div> <div class="flex items-center justify-between px-6 py-3 border-t border-dl-border"><div class="text-[10px] text-dl-text-dim"><!></div> <button class="px-4 py-2 rounded-xl bg-dl-primary/20 text-dl-primary-light text-[12px] font-medium hover:bg-dl-primary/30 transition-colors">닫기</button></div></div></div>'),lp=$('<div class="fixed inset-0 z-[250] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn"><div class="w-full max-w-xs bg-dl-bg-card border border-dl-border rounded-2xl shadow-2xl p-5"><div class="text-[14px] font-medium text-dl-text mb-1.5">대화 삭제</div> <div class="text-[12px] text-dl-text-muted mb-4">이 대화를 삭제하시겠습니까? 삭제된 대화는 복구할 수 없습니다.</div> <div class="flex items-center justify-end gap-2"><button class="px-3.5 py-1.5 rounded-lg text-[12px] text-dl-text-muted hover:text-dl-text hover:bg-white/5 transition-colors">취소</button> <button class="px-3.5 py-1.5 rounded-lg bg-dl-primary/20 text-dl-primary-light text-[12px] font-medium hover:bg-dl-primary/30 transition-colors">삭제</button></div></div></div>'),dp=$('<div class="fixed bottom-6 right-6 z-[300] animate-fadeIn"><div> </div></div>'),cp=$('<div class="flex h-screen bg-dl-bg-dark overflow-hidden"><!> <div class="relative flex flex-col flex-1 min-w-0 min-h-0"><div class="absolute top-0 left-0 right-0 z-10 pointer-events-none"><div class="flex items-center justify-between px-3 h-11 pointer-events-auto" style="background: linear-gradient(to bottom, var(--color-dl-bg-dark) 60%, transparent);"><button class="p-1.5 rounded-lg text-dl-text-muted hover:text-dl-text hover:bg-white/5 transition-colors"><!></button> <div class="flex items-center gap-1"><a href="https://buymeacoffee.com/eddmpython" target="_blank" rel="noopener noreferrer" class="p-1.5 rounded-lg text-[#ffdd00] hover:bg-white/5 transition-colors" title="Buy me a coffee"><!></a> <a href="https://eddmpython.github.io/dartlab/" target="_blank" rel="noopener noreferrer" class="p-1.5 rounded-lg text-dl-text-dim hover:text-dl-text-muted hover:bg-white/5 transition-colors" title="Documentation"><!></a> <a href="https://github.com/eddmpython/dartlab" target="_blank" rel="noopener noreferrer" class="p-1.5 rounded-lg text-dl-text-dim hover:text-dl-text-muted hover:bg-white/5 transition-colors" title="GitHub"><!></a> <div class="w-px h-4 bg-dl-border mx-1"></div> <button><!> <!></button></div></div> <!></div> <!></div></div>  <!> <!> <!>',1);function up(e,t){kr(t,!0);let r=q(""),n=q(!1),a=q(null),s=q(vt({})),o=q(vt({})),i=q(null),d=q(null),c=q(vt([])),f=q(!0),h=q(0),v=q(!0),z=q(""),x=q(!1),k=q(null),m=q(vt({})),M=q(vt({})),N=q(""),j=q(!1),b=q(null),S=q(""),P=q(!1),C=q(""),y=q(0),L=q(null),V=q(!1),we=q(vt({})),fe=q(null),Ee=q(""),Ce=q("error"),le=q(!1);function X(A,O="error",me=4e3){p(Ee,A,!0),p(Ce,O,!0),p(le,!0),setTimeout(()=>{p(le,!1)},me)}const D=Zu();_a(()=>{E()});let Z=q(vt({})),H=q(vt({}));async function E(){var A,O,me;p(v,!0);try{const $e=await Qc();p(s,$e.providers||{},!0),p(o,$e.ollama||{},!0),p(Z,$e.codex||{},!0),p(H,$e.claudeCode||{},!0),p(we,$e.chatgpt||{},!0),$e.version&&p(z,$e.version,!0);const Se=localStorage.getItem("dartlab-provider"),U=localStorage.getItem("dartlab-model");if(Se&&((A=l(s)[Se])!=null&&A.available)){p(i,Se,!0),p(k,Se,!0),await bn(Se,U),await ce(Se);const F=l(m)[Se]||[];U&&F.includes(U)?p(d,U,!0):F.length>0&&(p(d,F[0],!0),localStorage.setItem("dartlab-model",l(d))),p(c,F,!0),p(v,!1);return}if(Se&&l(s)[Se]){p(i,Se,!0),p(k,Se,!0),await ce(Se);const F=l(m)[Se]||[];p(c,F,!0),U&&F.includes(U)?p(d,U,!0):F.length>0&&p(d,F[0],!0),p(v,!1);return}for(const F of["chatgpt","codex","ollama"])if((O=l(s)[F])!=null&&O.available){p(i,F,!0),p(k,F,!0),await bn(F),await ce(F);const ke=l(m)[F]||[];p(c,ke,!0),p(d,((me=l(s)[F])==null?void 0:me.model)||(ke.length>0?ke[0]:null),!0),l(d)&&localStorage.setItem("dartlab-model",l(d));break}}catch{}p(v,!1)}async function ce(A){p(M,{...l(M),[A]:!0},!0);try{const O=await eu(A);p(m,{...l(m),[A]:O.models||[]},!0)}catch{p(m,{...l(m),[A]:[]},!0)}p(M,{...l(M),[A]:!1},!0)}async function ye(A){var me;p(i,A,!0),p(d,null),p(k,A,!0),localStorage.setItem("dartlab-provider",A),localStorage.removeItem("dartlab-model"),p(N,""),p(b,null);try{await bn(A)}catch{}await ce(A);const O=l(m)[A]||[];if(p(c,O,!0),O.length>0){p(d,((me=l(s)[A])==null?void 0:me.model)||O[0],!0),localStorage.setItem("dartlab-model",l(d));try{await bn(A,l(d))}catch{}}}async function Re(A){p(d,A,!0),localStorage.setItem("dartlab-model",A);try{await bn(l(i),A)}catch{}}function ae(A){l(k)===A?p(k,null):(p(k,A,!0),ce(A))}async function ee(){const A=l(N).trim();if(!(!A||!l(i))){p(j,!0),p(b,null);try{const O=await bn(l(i),l(d),A);O.available?(p(b,"success"),l(s)[l(i)]={...l(s)[l(i)],available:!0,model:O.model},!l(d)&&O.model&&p(d,O.model,!0),await ce(l(i)),p(c,l(m)[l(i)]||[],!0),X("API 키 인증 성공","success")):p(b,"error")}catch{p(b,"error")}p(j,!1)}}async function J(){if(!l(V)){p(V,!0);try{const{authUrl:A}=await ru();window.open(A,"dartlab-oauth","width=600,height=700");const O=setInterval(async()=>{var me;try{const $e=await nu();$e.done&&(clearInterval(O),p(V,!1),$e.error?X(`인증 실패: ${$e.error}`):(X("ChatGPT 인증 성공","success"),await E(),(me=l(s).chatgpt)!=null&&me.available&&await ye("chatgpt")))}catch{clearInterval(O),p(V,!1)}},2e3);setTimeout(()=>{clearInterval(O),l(V)&&(p(V,!1),X("인증 시간이 초과되었습니다. 다시 시도해주세요."))},12e4)}catch(A){p(V,!1),X(`OAuth 시작 실패: ${A.message}`)}}}async function he(){try{await au(),p(we,{authenticated:!1},!0),l(i)==="chatgpt"&&p(s,{...l(s),chatgpt:{...l(s).chatgpt,available:!1}},!0),X("ChatGPT 로그아웃 완료","success"),await E()}catch{X("로그아웃 실패")}}function Ae(){const A=l(S).trim();!A||l(P)||(p(P,!0),p(C,"준비 중..."),p(y,0),p(L,tu(A,{onProgress(O){O.total&&O.completed!==void 0?(p(y,Math.round(O.completed/O.total*100),!0),p(C,`다운로드 중... ${l(y)}%`)):O.status&&p(C,O.status,!0)},async onDone(){p(P,!1),p(L,null),p(S,""),p(C,""),p(y,0),X(`${A} 다운로드 완료`,"success"),await ce("ollama"),p(c,l(m).ollama||[],!0),l(c).includes(A)&&await Re(A)},onError(O){p(P,!1),p(L,null),p(C,""),p(y,0),X(`다운로드 실패: ${O}`)}}),!0))}function te(){l(L)&&(l(L).abort(),p(L,null)),p(P,!1),p(S,""),p(C,""),p(y,0)}function dt(){p(f,!l(f))}function ct(){if(p(N,""),p(b,null),l(i))p(k,l(i),!0);else{const A=Object.keys(l(s));p(k,A.length>0?A[0]:null,!0)}p(x,!0),l(k)&&ce(l(k))}function Wt(){D.createConversation(),p(r,""),p(n,!1),l(a)&&(l(a).abort(),p(a,null))}function gr(A){D.setActive(A),p(r,""),p(n,!1),l(a)&&(l(a).abort(),p(a,null))}function ar(A){p(fe,A,!0)}function mt(){l(fe)&&(D.deleteConversation(l(fe)),p(fe,null))}async function yt(){var Se;const A=l(r).trim();if(!A||l(n))return;if(!l(i)||!((Se=l(s)[l(i)])!=null&&Se.available)){X("먼저 AI Provider를 설정해주세요. 우상단 설정 버튼을 클릭하세요."),ct();return}D.activeId||D.createConversation(),D.addMessage("user",A),p(r,""),p(n,!0),D.addMessage("assistant",""),D.updateLastMessage({loading:!0,startedAt:Date.now()}),Jn(h);const O=D.active,me=[];if(O){const U=O.messages.slice(0,-2);for(const F of U)(F.role==="user"||F.role==="assistant")&&F.text&&F.text.trim()&&!F.error&&!F.loading&&me.push({role:F.role,text:F.text})}const $e=su(null,A,{provider:l(i),model:l(d)},{onMeta(U){var ke;const F={meta:U};U.company&&(F.company=U.company,D.activeId&&((ke=D.active)==null?void 0:ke.title)==="새 대화"&&D.updateTitle(D.activeId,U.company)),D.updateLastMessage(F)},onSnapshot(U){D.updateLastMessage({snapshot:U})},onContext(U){const F=D.active;if(!F)return;const ke=F.messages[F.messages.length-1],bt=(ke==null?void 0:ke.contexts)||[];D.updateLastMessage({contexts:[...bt,{module:U.module,label:U.label,text:U.text}]})},onSystemPrompt(U){D.updateLastMessage({systemPrompt:U.text,userContent:U.userContent||null})},onToolCall(U){const F=D.active;if(!F)return;const ke=F.messages[F.messages.length-1],bt=(ke==null?void 0:ke.toolEvents)||[];D.updateLastMessage({toolEvents:[...bt,{type:"call",name:U.name,arguments:U.arguments}]})},onToolResult(U){const F=D.active;if(!F)return;const ke=F.messages[F.messages.length-1],bt=(ke==null?void 0:ke.toolEvents)||[];D.updateLastMessage({toolEvents:[...bt,{type:"result",name:U.name,result:U.result}]})},onChunk(U){const F=D.active;if(!F)return;const ke=F.messages[F.messages.length-1];D.updateLastMessage({text:((ke==null?void 0:ke.text)||"")+U}),Jn(h)},onDone(){const U=D.active,F=U==null?void 0:U.messages[U.messages.length-1],ke=F!=null&&F.startedAt?((Date.now()-F.startedAt)/1e3).toFixed(1):null;D.updateLastMessage({loading:!1,duration:ke}),p(n,!1),p(a,null),Jn(h)},onError(U){D.updateLastMessage({text:`오류: ${U}`,loading:!1,error:!0}),X(U),p(n,!1),p(a,null)}},me);p(a,$e,!0)}function G(){l(a)&&(l(a).abort(),p(a,null),p(n,!1),D.updateLastMessage({loading:!1}))}function xe(A){(A.metaKey||A.ctrlKey)&&A.key==="n"&&(A.preventDefault(),Wt()),(A.metaKey||A.ctrlKey)&&A.shiftKey&&A.key==="S"&&(A.preventDefault(),dt()),A.key==="Escape"&&l(fe)?p(fe,null):A.key==="Escape"&&l(x)&&p(x,!1)}let je=Me(()=>{var A;return((A=D.active)==null?void 0:A.messages)||[]}),Ve=Me(()=>D.active&&D.active.messages.length>0),Pe=Me(()=>{var A;return!l(v)&&(!l(i)||!((A=l(s)[l(i)])!=null&&A.available))});const Lt=[{name:"gemma3",size:"3B",gb:"2.3",desc:"Google, 빠르고 가벼움",tag:"추천"},{name:"gemma3:12b",size:"12B",gb:"8.1",desc:"Google, 균형잡힌 성능"},{name:"llama3.1",size:"8B",gb:"4.7",desc:"Meta, 범용 최강",tag:"추천"},{name:"qwen2.5",size:"7B",gb:"4.7",desc:"Alibaba, 한국어 우수"},{name:"qwen2.5:14b",size:"14B",gb:"9.0",desc:"Alibaba, 한국어 최고 수준"},{name:"deepseek-r1",size:"7B",gb:"4.7",desc:"추론 특화, 분석에 적합"},{name:"phi4",size:"14B",gb:"9.1",desc:"Microsoft, 수학/코드 강점"},{name:"mistral",size:"7B",gb:"4.1",desc:"Mistral AI, 가볍고 빠름"},{name:"exaone3.5",size:"8B",gb:"4.9",desc:"LG AI, 한국어 특화",tag:"한국어"}];var wt=cp();Ni("keydown",cs,xe);var ut=B(wt),kt=u(ut);Nf(kt,{get conversations(){return D.conversations},get activeId(){return D.activeId},get open(){return l(f)},get version(){return l(z)},onNewChat:Wt,onSelect:gr,onDelete:ar});var Hr=w(kt,2),Oe=u(Hr),Te=u(Oe),gt=u(Te),Ct=u(gt);{var sr=A=>{gf(A,{size:18})},or=A=>{mf(A,{size:18})};T(Ct,A=>{l(f)?A(sr):A(or,-1)})}var Wr=w(gt,2),Rn=u(Wr),Pa=u(Rn);uf(Pa,{size:15});var Rs=w(Rn,2),sl=u(Rs);xa(sl,{size:15});var js=w(Rs,2),ol=u(js);vf(ol,{size:15});var Ta=w(js,4),Ds=u(Ta);{var il=A=>{var O=Av(),me=B(O);Xt(me,{size:12,class:"animate-spin"}),g(A,O)},ll=A=>{var O=zv(),me=B(O);Yr(me,{size:12}),g(A,O)},dl=A=>{var O=$v(),me=w(B(O),2),$e=u(me),Se=w(me,2);{var U=bt=>{var jn=Mv(),Na=w(B(jn),2),Ia=u(Na);W(()=>Y(Ia,l(d))),g(bt,jn)};T(Se,bt=>{l(d)&&bt(U)})}var F=w(Se,2);{var ke=bt=>{Xt(bt,{size:10,class:"animate-spin text-dl-primary-light"})};T(F,bt=>{l(P)&&bt(ke)})}W(()=>Y($e,l(i))),g(A,O)};T(Ds,A=>{l(v)?A(il):l(Pe)?A(ll,1):A(dl,-1)})}var cl=w(Ds,2);xf(cl,{size:12});var ul=w(Te,2);{var fl=A=>{var O=Ev(),me=u(O);Xt(me,{size:16,class:"text-dl-text-dim animate-spin flex-shrink-0"}),g(A,O)},vl=A=>{var O=Cv(),me=u(O);Yr(me,{size:16,class:"text-dl-primary-light flex-shrink-0"});var $e=w(me,4);K("click",$e,()=>ct()),g(A,O)};T(ul,A=>{l(v)&&!l(x)?A(fl):l(Pe)&&!l(x)&&A(vl,1)})}var pl=w(Oe,2);{var hl=A=>{Sv(A,{get messages(){return l(je)},get isLoading(){return l(n)},get scrollTrigger(){return l(h)},onSend:yt,onStop:G,get inputText(){return l(r)},set inputText(O){p(r,O,!0)}})},ml=A=>{Of(A,{onSend:yt,get inputText(){return l(r)},set inputText(O){p(r,O,!0)}})};T(pl,A=>{l(Ve)?A(hl):A(ml,-1)})}var Fs=w(ut,2);{var gl=A=>{var O=ip(),me=u(O),$e=u(me),Se=w(u($e),2),U=u(Se);al(U,{size:18});var F=w($e,2),ke=u(F);ht(ke,21,()=>Object.entries(l(s)),pt,(Kt,Kr)=>{var Ar=Me(()=>Bo(l(Kr),2));let De=()=>l(Ar)[0],He=()=>l(Ar)[1];const Dn=Me(()=>De()===l(i)),kl=Me(()=>l(k)===De()),pn=Me(()=>He().auth==="api_key"),La=Me(()=>He().auth==="cli"),la=Me(()=>l(m)[De()]||[]),Vs=Me(()=>l(M)[De()]);var Oa=op(),Ra=u(Oa),Bs=u(Ra),Hs=w(Bs,2),Ws=u(Hs),Ks=u(Ws),Sl=u(Ks),Al=w(Ks,2);{var zl=We=>{var Ot=Pv();g(We,Ot)};T(Al,We=>{l(Dn)&&We(zl)})}var Ml=w(Ws,2),$l=u(Ml),El=w(Hs,2),Cl=u(El);{var Pl=We=>{Ya(We,{size:16,class:"text-dl-success"})},Tl=We=>{var Ot=Tv(),hn=B(Ot);No(hn,{size:14,class:"text-amber-400"}),g(We,Ot)},Nl=We=>{var Ot=Nv(),hn=B(Ot);yf(hn,{size:14,class:"text-dl-text-dim"}),g(We,Ot)};T(Cl,We=>{He().available?We(Pl):l(pn)?We(Tl,1):l(La)&&!He().available&&We(Nl,2)})}var Il=w(Ra,2);{var Ll=We=>{var Ot=sp(),hn=B(Ot);{var Ol=_e=>{var Ne=Lv(),Fe=u(Ne),rt=u(Fe),St=w(Fe,2),Ie=u(St),nt=w(Ie,2),Pt=u(nt);{var ft=ve=>{Xt(ve,{size:12,class:"animate-spin"})},Le=ve=>{No(ve,{size:12})};T(Pt,ve=>{l(j)?ve(ft):ve(Le,-1)})}var Qe=w(St,2);{var ze=ve=>{var xt=Iv(),Ke=u(xt);Yr(Ke,{size:12}),g(ve,xt)};T(Qe,ve=>{l(b)==="error"&&ve(ze)})}W(ve=>{Y(rt,He().envKey?`환경변수 ${He().envKey}로도 설정 가능합니다`:"API 키를 입력하세요"),ya(Ie,"placeholder",De()==="openai"?"sk-...":De()==="claude"?"sk-ant-...":"API Key"),nt.disabled=ve},[()=>!l(N).trim()||l(j)]),K("keydown",Ie,ve=>{ve.key==="Enter"&&ee()}),xn(Ie,()=>l(N),ve=>p(N,ve)),K("click",nt,ee),g(_e,Ne)};T(hn,_e=>{l(pn)&&!He().available&&_e(Ol)})}var qs=w(hn,2);{var Rl=_e=>{var Ne=Rv(),Fe=u(Ne),rt=u(Fe);Ya(rt,{size:13,class:"text-dl-success"});var St=w(Fe,2),Ie=u(St),nt=w(Ie,2);{var Pt=Le=>{var Qe=Ov(),ze=u(Qe);{var ve=Ke=>{Xt(Ke,{size:10,class:"animate-spin"})},xt=Ke=>{var Rt=Zn("변경");g(Ke,Rt)};T(ze,Ke=>{l(j)?Ke(ve):Ke(xt,-1)})}W(()=>Qe.disabled=l(j)),K("click",Qe,ee),g(Le,Qe)},ft=Me(()=>l(N).trim());T(nt,Le=>{l(ft)&&Le(Pt)})}K("keydown",Ie,Le=>{Le.key==="Enter"&&ee()}),xn(Ie,()=>l(N),Le=>p(N,Le)),g(_e,Ne)};T(qs,_e=>{l(pn)&&He().available&&_e(Rl)})}var Us=w(qs,2);{var jl=_e=>{var Ne=jv(),Fe=w(u(Ne),2),rt=u(Fe);Ja(rt,{size:14});var St=w(rt,2);To(St,{size:10,class:"ml-auto"}),g(_e,Ne)},Dl=_e=>{var Ne=Dv(),Fe=u(Ne),rt=u(Fe);Yr(rt,{size:14}),g(_e,Ne)};T(Us,_e=>{De()==="ollama"&&!l(o).installed?_e(jl):De()==="ollama"&&l(o).installed&&!l(o).running&&_e(Dl,1)})}var Ys=w(Us,2);{var Fl=_e=>{var Ne=Hv(),Fe=u(Ne);{var rt=Ie=>{var nt=Gv(),Pt=B(nt),ft=u(Pt),Le=w(Pt,2),Qe=u(Le);{var ze=qt=>{var qr=Fv();g(qt,qr)};T(Qe,qt=>{l(Z).installed||qt(ze)})}var ve=w(Qe,2),xt=u(ve),Ke=u(xt),Rt=w(Le,2),zr=u(Rt);Yr(zr,{size:12,class:"text-amber-400 flex-shrink-0"}),W(()=>{Y(ft,l(Z).installed?"Codex CLI가 설치되었지만 인증이 필요합니다":"Codex CLI 설치가 필요합니다"),Y(Ke,l(Z).installed?"1.":"2.")}),g(Ie,nt)},St=Ie=>{var nt=Bv(),Pt=B(nt),ft=u(Pt),Le=w(Pt,2),Qe=u(Le);{var ze=qt=>{var qr=Vv();g(qt,qr)};T(Qe,qt=>{l(H).installed||qt(ze)})}var ve=w(Qe,2),xt=u(ve),Ke=u(xt),Rt=w(Le,2),zr=u(Rt);Yr(zr,{size:12,class:"text-amber-400 flex-shrink-0"}),W(()=>{Y(ft,l(H).installed&&!l(H).authenticated?"Claude Code가 설치되었지만 인증이 필요합니다":"Claude Code CLI 설치가 필요합니다"),Y(Ke,l(H).installed?"1.":"2.")}),g(Ie,nt)};T(Fe,Ie=>{De()==="codex"?Ie(rt):De()==="claude-code"&&Ie(St,1)})}g(_e,Ne)};T(Ys,_e=>{l(La)&&!He().available&&_e(Fl)})}var Js=w(Ys,2);{var Gl=_e=>{var Ne=qv(),Fe=w(u(Ne),2),rt=u(Fe);{var St=ft=>{var Le=Wv(),Qe=B(Le);Xt(Qe,{size:14,class:"animate-spin"}),g(ft,Le)},Ie=ft=>{var Le=Kv(),Qe=B(Le);pf(Qe,{size:14}),g(ft,Le)};T(rt,ft=>{l(V)?ft(St):ft(Ie,-1)})}var nt=w(Fe,2),Pt=u(nt);Yr(Pt,{size:12,class:"text-amber-400 flex-shrink-0"}),W(()=>Fe.disabled=l(V)),K("click",Fe,J),g(_e,Ne)};T(Js,_e=>{He().auth==="oauth"&&!He().available&&_e(Gl)})}var Xs=w(Js,2);{var Vl=_e=>{var Ne=Uv(),Fe=u(Ne),rt=u(Fe),St=u(rt);Ya(St,{size:13,class:"text-dl-success"});var Ie=w(rt,2),nt=u(Ie);hf(nt,{size:11}),K("click",Ie,he),g(_e,Ne)};T(Xs,_e=>{He().auth==="oauth"&&He().available&&_e(Vl)})}var Bl=w(Xs,2);{var Hl=_e=>{var Ne=ap(),Fe=u(Ne),rt=w(u(Fe),2);{var St=ze=>{Xt(ze,{size:12,class:"animate-spin text-dl-text-dim"})};T(rt,ze=>{l(Vs)&&ze(St)})}var Ie=w(Fe,2);{var nt=ze=>{var ve=Yv(),xt=u(ve);Xt(xt,{size:14,class:"animate-spin"}),g(ze,ve)},Pt=ze=>{var ve=Xv();ht(ve,21,()=>l(la),pt,(xt,Ke)=>{var Rt=Jv(),zr=u(Rt),qt=w(zr);{var qr=jt=>{sf(jt,{size:10,class:"inline ml-1"})};T(qt,jt=>{l(Ke)===l(d)&&l(Dn)&&jt(qr)})}W(jt=>{Je(Rt,1,jt),Y(zr,`${l(Ke)??""} `)},[()=>Ye(Be("px-3 py-1.5 rounded-lg text-[11px] border transition-all",l(Ke)===l(d)&&l(Dn)?"border-dl-primary/50 bg-dl-primary/10 text-dl-primary-light font-medium":"border-dl-border text-dl-text-muted hover:border-dl-primary/30 hover:text-dl-text"))]),K("click",Rt,()=>{De()!==l(i)&&ye(De()),Re(l(Ke))}),g(xt,Rt)}),g(ze,ve)},ft=ze=>{var ve=Zv();g(ze,ve)};T(Ie,ze=>{l(Vs)&&l(la).length===0?ze(nt):l(la).length>0?ze(Pt,1):ze(ft,-1)})}var Le=w(Ie,2);{var Qe=ze=>{var ve=np(),xt=u(ve),Ke=w(u(xt),2),Rt=w(u(Ke));To(Rt,{size:9});var zr=w(xt,2);{var qt=jt=>{var Fn=Qv(),Gn=u(Fn),mn=u(Gn),Vn=u(mn);Xt(Vn,{size:12,class:"animate-spin text-dl-primary-light"});var ja=w(mn,2),da=w(Gn,2),br=u(da),Ut=w(da,2),Da=u(Ut);W(()=>{Ri(br,`width: ${l(y)??""}%`),Y(Da,l(C))}),K("click",ja,te),g(jt,Fn)},qr=jt=>{var Fn=rp(),Gn=B(Fn),mn=u(Gn),Vn=w(mn,2),ja=u(Vn);Ja(ja,{size:12});var da=w(Gn,2);ht(da,21,()=>Lt,pt,(br,Ut)=>{const Da=Me(()=>l(la).some(gn=>gn===l(Ut).name||gn===l(Ut).name.split(":")[0]));var Zs=ie(),Wl=B(Zs);{var Kl=gn=>{var Fa=tp(),Qs=u(Fa),eo=u(Qs),to=u(eo),ql=u(to),ro=w(to,2),Ul=u(ro),Yl=w(ro,2);{var Jl=Ga=>{var ao=ep(),rd=u(ao);W(()=>Y(rd,l(Ut).tag)),g(Ga,ao)};T(Yl,Ga=>{l(Ut).tag&&Ga(Jl)})}var Xl=w(eo,2),Zl=u(Xl),Ql=w(Qs,2),no=u(Ql),ed=u(no),td=w(no,2);Ja(td,{size:12,class:"text-dl-text-dim group-hover:text-dl-primary-light transition-colors"}),W(()=>{Y(ql,l(Ut).name),Y(Ul,l(Ut).size),Y(Zl,l(Ut).desc),Y(ed,`${l(Ut).gb??""} GB`)}),K("click",Fa,()=>{p(S,l(Ut).name,!0),Ae()}),g(gn,Fa)};T(Wl,gn=>{l(Da)||gn(Kl)})}g(br,Zs)}),W(br=>Vn.disabled=br,[()=>!l(S).trim()]),K("keydown",mn,br=>{br.key==="Enter"&&Ae()}),xn(mn,()=>l(S),br=>p(S,br)),K("click",Vn,Ae),g(jt,Fn)};T(zr,jt=>{l(P)?jt(qt):jt(qr,-1)})}g(ze,ve)};T(Le,ze=>{De()==="ollama"&&ze(Qe)})}g(_e,Ne)};T(Bl,_e=>{(He().available||l(pn)||l(La)||He().auth==="oauth")&&_e(Hl)})}g(We,Ot)};T(Il,We=>{(l(kl)||l(Dn))&&We(Ll)})}W((We,Ot)=>{Je(Oa,1,We),Je(Bs,1,Ot),Y(Sl,He().label||De()),Y($l,He().desc||"")},[()=>Ye(Be("rounded-xl border transition-all",l(Dn)?"border-dl-primary/40 bg-dl-primary/[0.03]":"border-dl-border")),()=>Ye(Be("w-2.5 h-2.5 rounded-full flex-shrink-0",He().available?"bg-dl-success":l(pn)?"bg-amber-400":"bg-dl-text-dim"))]),K("click",Ra,()=>{He().available||l(pn)?De()===l(i)?ae(De()):ye(De()):ae(De())}),g(Kt,Oa)});var bt=w(F,2),jn=u(bt),Na=u(jn);{var Ia=Kt=>{var Kr=Zn();W(()=>{var Ar;return Y(Kr,`현재: ${(((Ar=l(s)[l(i)])==null?void 0:Ar.label)||l(i))??""} / ${l(d)??""}`)}),g(Kt,Kr)},yl=Kt=>{var Kr=Zn();W(()=>{var Ar;return Y(Kr,`현재: ${(((Ar=l(s)[l(i)])==null?void 0:Ar.label)||l(i))??""}`)}),g(Kt,Kr)};T(Na,Kt=>{l(i)&&l(d)?Kt(Ia):l(i)&&Kt(yl,1)})}var wl=w(jn,2);K("click",O,Kt=>{Kt.target===Kt.currentTarget&&p(x,!1)}),K("keydown",O,()=>{}),K("click",Se,()=>p(x,!1)),K("click",wl,()=>p(x,!1)),g(A,O)};T(Fs,A=>{l(x)&&A(gl)})}var Gs=w(Fs,2);{var bl=A=>{var O=lp(),me=u(O),$e=w(u(me),4),Se=u($e),U=w(Se,2);K("click",O,F=>{F.target===F.currentTarget&&p(fe,null)}),K("keydown",O,()=>{}),K("click",Se,()=>p(fe,null)),K("click",U,mt),g(A,O)};T(Gs,A=>{l(fe)&&A(bl)})}var xl=w(Gs,2);{var _l=A=>{var O=dp(),me=u(O),$e=u(me);W(Se=>{Je(me,1,Se),Y($e,l(Ee))},[()=>Ye(Be("px-4 py-3 rounded-xl border text-[13px] shadow-2xl max-w-sm",l(Ce)==="error"?"bg-dl-primary/10 border-dl-primary/30 text-dl-primary-light":l(Ce)==="success"?"bg-dl-success/10 border-dl-success/30 text-dl-success":"bg-dl-bg-card border-dl-border text-dl-text"))]),g(A,O)};T(xl,A=>{l(le)&&A(_l)})}W(A=>Je(Ta,1,A),[()=>Ye(Be("flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] transition-colors",l(v)?"text-dl-text-dim":l(Pe)?"text-dl-primary-light bg-dl-primary/10 hover:bg-dl-primary/15":"text-dl-text-dim hover:text-dl-text-muted hover:bg-white/5"))]),K("click",gt,dt),K("click",Ta,()=>ct()),g(e,wt),Sr()}On(["click","keydown"]);Pc(up,{target:document.getElementById("app")});
