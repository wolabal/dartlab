var xd=Object.defineProperty;var Eo=e=>{throw TypeError(e)};var bd=(e,t,r)=>t in e?xd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var hr=(e,t,r)=>bd(e,typeof t!="symbol"?t+"":t,r),ps=(e,t,r)=>t.has(e)||Eo("Cannot "+r);var w=(e,t,r)=>(ps(e,t,"read from private field"),r?r.call(e):t.get(e)),Ce=(e,t,r)=>t.has(e)?Eo("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),fe=(e,t,r,n)=>(ps(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),kt=(e,t,r)=>(ps(e,t,"access private method"),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=r(a);fetch(a.href,i)}})();const ws=!1;var Us=Array.isArray,_d=Array.prototype.indexOf,ta=Array.prototype.includes,es=Array.from,yd=Object.defineProperty,dn=Object.getOwnPropertyDescriptor,vi=Object.getOwnPropertyDescriptors,wd=Object.prototype,kd=Array.prototype,Ws=Object.getPrototypeOf,Co=Object.isExtensible;function ma(e){return typeof e=="function"}const Sd=()=>{};function zd(e){return e()}function ks(e){for(var t=0;t<e.length;t++)e[t]()}function pi(){var e,t,r=new Promise((n,a)=>{e=n,t=a});return{promise:r,resolve:e,reject:t}}function mi(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const Rt=2,ia=4,In=8,ts=1<<24,hn=16,wr=32,jn=64,Ss=128,dr=512,It=1024,Lt=2048,yr=4096,Vt=8192,Rr=16384,la=32768,vn=65536,To=1<<17,Md=1<<18,da=1<<19,hi=1<<20,Lr=1<<25,Ln=65536,zs=1<<21,qs=1<<22,cn=1<<23,jr=Symbol("$state"),gi=Symbol("legacy props"),Ad=Symbol(""),Sn=new class extends Error{constructor(){super(...arguments);hr(this,"name","StaleReactionError");hr(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var ci;const xi=!!((ci=globalThis.document)!=null&&ci.contentType)&&globalThis.document.contentType.includes("xml");function $d(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Ed(e,t,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function Cd(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Td(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Pd(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Nd(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Id(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Ld(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Od(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Rd(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function jd(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Dd=1,Fd=2,bi=4,Vd=8,Bd=16,Gd=1,Hd=2,_i=4,Ud=8,Wd=16,qd=1,Kd=2,Et=Symbol(),yi="http://www.w3.org/1999/xhtml",wi="http://www.w3.org/2000/svg",Yd="http://www.w3.org/1998/Math/MathML",Jd="@attach";function Xd(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Zd(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function ki(e){return e===this.v}function Qd(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Si(e){return!Qd(e,this.v)}let Ca=!1,ec=!1;function tc(){Ca=!0}let Ct=null;function ra(e){Ct=e}function kr(e,t=!1,r){Ct={p:Ct,i:!1,c:null,e:null,s:e,x:null,l:Ca&&!t?{s:null,u:null,$:[]}:null}}function Sr(e){var t=Ct,r=t.e;if(r!==null){t.e=null;for(var n of r)Gi(n)}return t.i=!0,Ct=t.p,{}}function Ta(){return!Ca||Ct!==null&&Ct.l===null}let zn=[];function zi(){var e=zn;zn=[],ks(e)}function Dr(e){if(zn.length===0&&!ya){var t=zn;queueMicrotask(()=>{t===zn&&zi()})}zn.push(e)}function rc(){for(;zn.length>0;)zi()}function Mi(e){var t=ke;if(t===null)return we.f|=cn,e;if((t.f&la)===0&&(t.f&ia)===0)throw e;ln(e,t)}function ln(e,t){for(;t!==null;){if((t.f&Ss)!==0){if((t.f&la)===0)throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}const nc=-7169;function mt(e,t){e.f=e.f&nc|t}function Ks(e){(e.f&dr)!==0||e.deps===null?mt(e,It):mt(e,yr)}function Ai(e){if(e!==null)for(const t of e)(t.f&Rt)===0||(t.f&Ln)===0||(t.f^=Ln,Ai(t.deps))}function $i(e,t,r){(e.f&Lt)!==0?t.add(e):(e.f&yr)!==0&&r.add(e),Ai(e.deps),mt(e,It)}const ja=new Set;let ve=null,Ms=null,Nt=null,Ut=[],rs=null,ya=!1,na=null,ac=1;var an,qn,$n,Kn,Yn,Jn,sn,Tr,Xn,Kt,As,$s,Es,Cs;const lo=class lo{constructor(){Ce(this,Kt);hr(this,"id",ac++);hr(this,"current",new Map);hr(this,"previous",new Map);Ce(this,an,new Set);Ce(this,qn,new Set);Ce(this,$n,0);Ce(this,Kn,0);Ce(this,Yn,null);Ce(this,Jn,new Set);Ce(this,sn,new Set);Ce(this,Tr,new Map);hr(this,"is_fork",!1);Ce(this,Xn,!1)}skip_effect(t){w(this,Tr).has(t)||w(this,Tr).set(t,{d:[],m:[]})}unskip_effect(t){var r=w(this,Tr).get(t);if(r){w(this,Tr).delete(t);for(var n of r.d)mt(n,Lt),Or(n);for(n of r.m)mt(n,yr),Or(n)}}process(t){var a;Ut=[],this.apply();var r=na=[],n=[];for(const i of t)kt(this,Kt,$s).call(this,i,r,n);if(na=null,kt(this,Kt,As).call(this)){kt(this,Kt,Es).call(this,n),kt(this,Kt,Es).call(this,r);for(const[i,o]of w(this,Tr))Pi(i,o)}else{Ms=this,ve=null;for(const i of w(this,an))i(this);w(this,an).clear(),w(this,$n)===0&&kt(this,Kt,Cs).call(this),Po(n),Po(r),w(this,Jn).clear(),w(this,sn).clear(),Ms=null,(a=w(this,Yn))==null||a.resolve()}Nt=null}capture(t,r){r!==Et&&!this.previous.has(t)&&this.previous.set(t,r),(t.f&cn)===0&&(this.current.set(t,t.v),Nt==null||Nt.set(t,t.v))}activate(){ve=this,this.apply()}deactivate(){ve===this&&(ve=null,Nt=null)}flush(){var t;if(Ut.length>0)ve=this,Ei();else if(w(this,$n)===0&&!this.is_fork){for(const r of w(this,an))r(this);w(this,an).clear(),kt(this,Kt,Cs).call(this),(t=w(this,Yn))==null||t.resolve()}this.deactivate()}discard(){for(const t of w(this,qn))t(this);w(this,qn).clear()}increment(t){fe(this,$n,w(this,$n)+1),t&&fe(this,Kn,w(this,Kn)+1)}decrement(t){fe(this,$n,w(this,$n)-1),t&&fe(this,Kn,w(this,Kn)-1),!w(this,Xn)&&(fe(this,Xn,!0),Dr(()=>{fe(this,Xn,!1),kt(this,Kt,As).call(this)?Ut.length>0&&this.flush():this.revive()}))}revive(){for(const t of w(this,Jn))w(this,sn).delete(t),mt(t,Lt),Or(t);for(const t of w(this,sn))mt(t,yr),Or(t);this.flush()}oncommit(t){w(this,an).add(t)}ondiscard(t){w(this,qn).add(t)}settled(){return(w(this,Yn)??fe(this,Yn,pi())).promise}static ensure(){if(ve===null){const t=ve=new lo;ja.add(ve),ya||Dr(()=>{ve===t&&t.flush()})}return ve}apply(){}};an=new WeakMap,qn=new WeakMap,$n=new WeakMap,Kn=new WeakMap,Yn=new WeakMap,Jn=new WeakMap,sn=new WeakMap,Tr=new WeakMap,Xn=new WeakMap,Kt=new WeakSet,As=function(){return this.is_fork||w(this,Kn)>0},$s=function(t,r,n){t.f^=It;for(var a=t.first;a!==null;){var i=a.f,o=(i&(wr|jn))!==0,l=o&&(i&It)!==0,d=(i&Vt)!==0,c=l||w(this,Tr).has(a);if(!c&&a.fn!==null){o?d||(a.f^=It):(i&ia)!==0?r.push(a):(i&(In|ts))!==0&&d?n.push(a):La(a)&&(oa(a),(i&hn)!==0&&(w(this,sn).add(a),d&&mt(a,Lt)));var v=a.first;if(v!==null){a=v;continue}}for(;a!==null;){var m=a.next;if(m!==null){a=m;break}a=a.parent}}},Es=function(t){for(var r=0;r<t.length;r+=1)$i(t[r],w(this,Jn),w(this,sn))},Cs=function(){var i;if(ja.size>1){this.previous.clear();var t=ve,r=Nt,n=!0;for(const o of ja){if(o===this){n=!1;continue}const l=[];for(const[c,v]of this.current){if(o.current.has(c))if(n&&v!==o.current.get(c))o.current.set(c,v);else continue;l.push(c)}if(l.length===0)continue;const d=[...o.current.keys()].filter(c=>!this.current.has(c));if(d.length>0){var a=Ut;Ut=[];const c=new Set,v=new Map;for(const m of l)Ci(m,d,c,v);if(Ut.length>0){ve=o,o.apply();for(const m of Ut)kt(i=o,Kt,$s).call(i,m,[],[]);o.deactivate()}Ut=a}}ve=t,Nt=r}w(this,Tr).clear(),ja.delete(this)};let un=lo;function sc(e){var t=ya;ya=!0;try{for(var r;;){if(rc(),Ut.length===0&&(ve==null||ve.flush(),Ut.length===0))return rs=null,r;Ei()}}finally{ya=t}}function Ei(){var e=null;try{for(var t=0;Ut.length>0;){var r=un.ensure();if(t++>1e3){var n,a;oc()}r.process(Ut),fn.clear()}}finally{Ut=[],rs=null,na=null}}function oc(){try{Nd()}catch(e){ln(e,rs)}}let gr=null;function Po(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(Rr|Vt))===0&&La(n)&&(gr=new Set,oa(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&qi(n),(gr==null?void 0:gr.size)>0)){fn.clear();for(const a of gr){if((a.f&(Rr|Vt))!==0)continue;const i=[a];let o=a.parent;for(;o!==null;)gr.has(o)&&(gr.delete(o),i.push(o)),o=o.parent;for(let l=i.length-1;l>=0;l--){const d=i[l];(d.f&(Rr|Vt))===0&&oa(d)}}gr.clear()}}gr=null}}function Ci(e,t,r,n){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const a of e.reactions){const i=a.f;(i&Rt)!==0?Ci(a,t,r,n):(i&(qs|hn))!==0&&(i&Lt)===0&&Ti(a,t,n)&&(mt(a,Lt),Or(a))}}function Ti(e,t,r){const n=r.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const a of e.deps){if(ta.call(t,a))return!0;if((a.f&Rt)!==0&&Ti(a,t,r))return r.set(a,!0),!0}return r.set(e,!1),!1}function Or(e){var t=rs=e,r=t.b;if(r!=null&&r.is_pending&&(e.f&(ia|In|ts))!==0&&(e.f&la)===0){r.defer_effect(e);return}for(;t.parent!==null;){t=t.parent;var n=t.f;if(na!==null&&t===ke&&(e.f&In)===0)return;if((n&(jn|wr))!==0){if((n&It)===0)return;t.f^=It}}Ut.push(t)}function Pi(e,t){if(!((e.f&wr)!==0&&(e.f&It)!==0)){(e.f&Lt)!==0?t.d.push(e):(e.f&yr)!==0&&t.m.push(e),mt(e,It);for(var r=e.first;r!==null;)Pi(r,t),r=r.next}}function ic(e){let t=0,r=pn(0),n;return()=>{Zs()&&(s(r),eo(()=>(t===0&&(n=On(()=>e(()=>ka(r)))),t+=1,()=>{Dr(()=>{t-=1,t===0&&(n==null||n(),n=void 0,ka(r))})})))}}var lc=vn|da;function dc(e,t,r,n){new cc(e,t,r,n)}var lr,Hs,Pr,En,Ht,Nr,Qt,xr,Wr,Cn,on,Zn,Qn,ea,qr,Za,zt,uc,fc,vc,Ts,Ha,Ua,Ps;class cc{constructor(t,r,n,a){Ce(this,zt);hr(this,"parent");hr(this,"is_pending",!1);hr(this,"transform_error");Ce(this,lr);Ce(this,Hs,null);Ce(this,Pr);Ce(this,En);Ce(this,Ht);Ce(this,Nr,null);Ce(this,Qt,null);Ce(this,xr,null);Ce(this,Wr,null);Ce(this,Cn,0);Ce(this,on,0);Ce(this,Zn,!1);Ce(this,Qn,new Set);Ce(this,ea,new Set);Ce(this,qr,null);Ce(this,Za,ic(()=>(fe(this,qr,pn(w(this,Cn))),()=>{fe(this,qr,null)})));var i;fe(this,lr,t),fe(this,Pr,r),fe(this,En,o=>{var l=ke;l.b=this,l.f|=Ss,n(o)}),this.parent=ke.b,this.transform_error=a??((i=this.parent)==null?void 0:i.transform_error)??(o=>o),fe(this,Ht,Ia(()=>{kt(this,zt,Ts).call(this)},lc))}defer_effect(t){$i(t,w(this,Qn),w(this,ea))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!w(this,Pr).pending}update_pending_count(t){kt(this,zt,Ps).call(this,t),fe(this,Cn,w(this,Cn)+t),!(!w(this,qr)||w(this,Zn))&&(fe(this,Zn,!0),Dr(()=>{fe(this,Zn,!1),w(this,qr)&&aa(w(this,qr),w(this,Cn))}))}get_effect_pending(){return w(this,Za).call(this),s(w(this,qr))}error(t){var r=w(this,Pr).onerror;let n=w(this,Pr).failed;if(!r&&!n)throw t;w(this,Nr)&&(Ot(w(this,Nr)),fe(this,Nr,null)),w(this,Qt)&&(Ot(w(this,Qt)),fe(this,Qt,null)),w(this,xr)&&(Ot(w(this,xr)),fe(this,xr,null));var a=!1,i=!1;const o=()=>{if(a){Zd();return}a=!0,i&&jd(),w(this,xr)!==null&&Pn(w(this,xr),()=>{fe(this,xr,null)}),kt(this,zt,Ua).call(this,()=>{un.ensure(),kt(this,zt,Ts).call(this)})},l=d=>{try{i=!0,r==null||r(d,o),i=!1}catch(c){ln(c,w(this,Ht)&&w(this,Ht).parent)}n&&fe(this,xr,kt(this,zt,Ua).call(this,()=>{un.ensure();try{return qt(()=>{var c=ke;c.b=this,c.f|=Ss,n(w(this,lr),()=>d,()=>o)})}catch(c){return ln(c,w(this,Ht).parent),null}}))};Dr(()=>{var d;try{d=this.transform_error(t)}catch(c){ln(c,w(this,Ht)&&w(this,Ht).parent);return}d!==null&&typeof d=="object"&&typeof d.then=="function"?d.then(l,c=>ln(c,w(this,Ht)&&w(this,Ht).parent)):l(d)})}}lr=new WeakMap,Hs=new WeakMap,Pr=new WeakMap,En=new WeakMap,Ht=new WeakMap,Nr=new WeakMap,Qt=new WeakMap,xr=new WeakMap,Wr=new WeakMap,Cn=new WeakMap,on=new WeakMap,Zn=new WeakMap,Qn=new WeakMap,ea=new WeakMap,qr=new WeakMap,Za=new WeakMap,zt=new WeakSet,uc=function(){try{fe(this,Nr,qt(()=>w(this,En).call(this,w(this,lr))))}catch(t){this.error(t)}},fc=function(t){const r=w(this,Pr).failed;r&&fe(this,xr,qt(()=>{r(w(this,lr),()=>t,()=>()=>{})}))},vc=function(){const t=w(this,Pr).pending;t&&(this.is_pending=!0,fe(this,Qt,qt(()=>t(w(this,lr)))),Dr(()=>{var r=fe(this,Wr,document.createDocumentFragment()),n=Fr();r.append(n),fe(this,Nr,kt(this,zt,Ua).call(this,()=>(un.ensure(),qt(()=>w(this,En).call(this,n))))),w(this,on)===0&&(w(this,lr).before(r),fe(this,Wr,null),Pn(w(this,Qt),()=>{fe(this,Qt,null)}),kt(this,zt,Ha).call(this))}))},Ts=function(){try{if(this.is_pending=this.has_pending_snippet(),fe(this,on,0),fe(this,Cn,0),fe(this,Nr,qt(()=>{w(this,En).call(this,w(this,lr))})),w(this,on)>0){var t=fe(this,Wr,document.createDocumentFragment());no(w(this,Nr),t);const r=w(this,Pr).pending;fe(this,Qt,qt(()=>r(w(this,lr))))}else kt(this,zt,Ha).call(this)}catch(r){this.error(r)}},Ha=function(){this.is_pending=!1;for(const t of w(this,Qn))mt(t,Lt),Or(t);for(const t of w(this,ea))mt(t,yr),Or(t);w(this,Qn).clear(),w(this,ea).clear()},Ua=function(t){var r=ke,n=we,a=Ct;fr(w(this,Ht)),ur(w(this,Ht)),ra(w(this,Ht).ctx);try{return t()}catch(i){return Mi(i),null}finally{fr(r),ur(n),ra(a)}},Ps=function(t){var r;if(!this.has_pending_snippet()){this.parent&&kt(r=this.parent,zt,Ps).call(r,t);return}fe(this,on,w(this,on)+t),w(this,on)===0&&(kt(this,zt,Ha).call(this),w(this,Qt)&&Pn(w(this,Qt),()=>{fe(this,Qt,null)}),w(this,Wr)&&(w(this,lr).before(w(this,Wr)),fe(this,Wr,null)))};function Ni(e,t,r,n){const a=Ta()?Pa:Ys;var i=e.filter(m=>!m.settled);if(r.length===0&&i.length===0){n(t.map(a));return}var o=ke,l=pc(),d=i.length===1?i[0].promise:i.length>1?Promise.all(i.map(m=>m.promise)):null;function c(m){l();try{n(m)}catch(x){(o.f&Rr)===0&&ln(x,o)}Ns()}if(r.length===0){d.then(()=>c(t.map(a)));return}function v(){l(),Promise.all(r.map(m=>hc(m))).then(m=>c([...t.map(a),...m])).catch(m=>ln(m,o))}d?d.then(v):v()}function pc(){var e=ke,t=we,r=Ct,n=ve;return function(i=!0){fr(e),ur(t),ra(r),i&&(n==null||n.activate())}}function Ns(e=!0){fr(null),ur(null),ra(null),e&&(ve==null||ve.deactivate())}function mc(){var e=ke.b,t=ve,r=e.is_rendered();return e.update_pending_count(1),t.increment(r),()=>{e.update_pending_count(-1),t.decrement(r)}}function Pa(e){var t=Rt|Lt,r=we!==null&&(we.f&Rt)!==0?we:null;return ke!==null&&(ke.f|=da),{ctx:Ct,deps:null,effects:null,equals:ki,f:t,fn:e,reactions:null,rv:0,v:Et,wv:0,parent:r??ke,ac:null}}function hc(e,t,r){ke===null&&$d();var a=void 0,i=pn(Et),o=!we,l=new Map;return Tc(()=>{var x;var d=pi();a=d.promise;try{Promise.resolve(e()).then(d.resolve,d.reject).finally(Ns)}catch(A){d.reject(A),Ns()}var c=ve;if(o){var v=mc();(x=l.get(c))==null||x.reject(Sn),l.delete(c),l.set(c,d)}const m=(A,_=void 0)=>{if(c.activate(),_)_!==Sn&&(i.f|=cn,aa(i,_));else{(i.f&cn)!==0&&(i.f^=cn),aa(i,A);for(const[S,g]of l){if(l.delete(S),S===c)break;g.reject(Sn)}}v&&v()};d.promise.then(m,A=>m(null,A||"unknown"))}),as(()=>{for(const d of l.values())d.reject(Sn)}),new Promise(d=>{function c(v){function m(){v===a?d(i):c(a)}v.then(m,m)}c(a)})}function oe(e){const t=Pa(e);return Ji(t),t}function Ys(e){const t=Pa(e);return t.equals=Si,t}function gc(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)Ot(t[r])}}function xc(e){for(var t=e.parent;t!==null;){if((t.f&Rt)===0)return(t.f&Rr)===0?t:null;t=t.parent}return null}function Js(e){var t,r=ke;fr(xc(e));try{e.f&=~Ln,gc(e),t=el(e)}finally{fr(r)}return t}function Ii(e){var t=Js(e);if(!e.equals(t)&&(e.wv=Zi(),(!(ve!=null&&ve.is_fork)||e.deps===null)&&(e.v=t,e.deps===null))){mt(e,It);return}mn||(Nt!==null?(Zs()||ve!=null&&ve.is_fork)&&Nt.set(e,t):Ks(e))}function bc(e){var t,r;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),(r=n.ac)==null||r.abort(Sn),n.teardown=Sd,n.ac=null,Ma(n,0),to(n))}function Li(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&oa(t)}let Is=new Set;const fn=new Map;let Oi=!1;function pn(e,t){var r={f:0,v:e,reactions:null,equals:ki,rv:0,wv:0};return r}function U(e,t){const r=pn(e);return Ji(r),r}function _c(e,t=!1,r=!0){var a;const n=pn(e);return t||(n.equals=Si),Ca&&r&&Ct!==null&&Ct.l!==null&&((a=Ct.l).s??(a.s=[])).push(n),n}function f(e,t,r=!1){we!==null&&(!_r||(we.f&To)!==0)&&Ta()&&(we.f&(Rt|hn|qs|To))!==0&&(cr===null||!ta.call(cr,e))&&Rd();let n=r?xt(t):t;return aa(e,n)}function aa(e,t){if(!e.equals(t)){var r=e.v;mn?fn.set(e,t):fn.set(e,r),e.v=t;var n=un.ensure();if(n.capture(e,r),(e.f&Rt)!==0){const a=e;(e.f&Lt)!==0&&Js(a),Ks(a)}e.wv=Zi(),Ri(e,Lt),Ta()&&ke!==null&&(ke.f&It)!==0&&(ke.f&(wr|jn))===0&&(ir===null?Nc([e]):ir.push(e)),!n.is_fork&&Is.size>0&&!Oi&&yc()}return t}function yc(){Oi=!1;for(const e of Is)(e.f&It)!==0&&mt(e,yr),La(e)&&oa(e);Is.clear()}function wa(e,t=1){var r=s(e),n=t===1?r++:r--;return f(e,r),n}function ka(e){f(e,e.v+1)}function Ri(e,t){var r=e.reactions;if(r!==null)for(var n=Ta(),a=r.length,i=0;i<a;i++){var o=r[i],l=o.f;if(!(!n&&o===ke)){var d=(l&Lt)===0;if(d&&mt(o,t),(l&Rt)!==0){var c=o;Nt==null||Nt.delete(c),(l&Ln)===0&&(l&dr&&(o.f|=Ln),Ri(c,yr))}else d&&((l&hn)!==0&&gr!==null&&gr.add(o),Or(o))}}}function xt(e){if(typeof e!="object"||e===null||jr in e)return e;const t=Ws(e);if(t!==wd&&t!==kd)return e;var r=new Map,n=Us(e),a=U(0),i=Nn,o=l=>{if(Nn===i)return l();var d=we,c=Nn;ur(null),Oo(i);var v=l();return ur(d),Oo(c),v};return n&&r.set("length",U(e.length)),new Proxy(e,{defineProperty(l,d,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&Ld();var v=r.get(d);return v===void 0?o(()=>{var m=U(c.value);return r.set(d,m),m}):f(v,c.value,!0),!0},deleteProperty(l,d){var c=r.get(d);if(c===void 0){if(d in l){const v=o(()=>U(Et));r.set(d,v),ka(a)}}else f(c,Et),ka(a);return!0},get(l,d,c){var A;if(d===jr)return e;var v=r.get(d),m=d in l;if(v===void 0&&(!m||(A=dn(l,d))!=null&&A.writable)&&(v=o(()=>{var _=xt(m?l[d]:Et),S=U(_);return S}),r.set(d,v)),v!==void 0){var x=s(v);return x===Et?void 0:x}return Reflect.get(l,d,c)},getOwnPropertyDescriptor(l,d){var c=Reflect.getOwnPropertyDescriptor(l,d);if(c&&"value"in c){var v=r.get(d);v&&(c.value=s(v))}else if(c===void 0){var m=r.get(d),x=m==null?void 0:m.v;if(m!==void 0&&x!==Et)return{enumerable:!0,configurable:!0,value:x,writable:!0}}return c},has(l,d){var x;if(d===jr)return!0;var c=r.get(d),v=c!==void 0&&c.v!==Et||Reflect.has(l,d);if(c!==void 0||ke!==null&&(!v||(x=dn(l,d))!=null&&x.writable)){c===void 0&&(c=o(()=>{var A=v?xt(l[d]):Et,_=U(A);return _}),r.set(d,c));var m=s(c);if(m===Et)return!1}return v},set(l,d,c,v){var F;var m=r.get(d),x=d in l;if(n&&d==="length")for(var A=c;A<m.v;A+=1){var _=r.get(A+"");_!==void 0?f(_,Et):A in l&&(_=o(()=>U(Et)),r.set(A+"",_))}if(m===void 0)(!x||(F=dn(l,d))!=null&&F.writable)&&(m=o(()=>U(void 0)),f(m,xt(c)),r.set(d,m));else{x=m.v!==Et;var S=o(()=>xt(c));f(m,S)}var g=Reflect.getOwnPropertyDescriptor(l,d);if(g!=null&&g.set&&g.set.call(v,c),!x){if(n&&typeof d=="string"){var z=r.get("length"),N=Number(d);Number.isInteger(N)&&N>=z.v&&f(z,N+1)}ka(a)}return!0},ownKeys(l){s(a);var d=Reflect.ownKeys(l).filter(m=>{var x=r.get(m);return x===void 0||x.v!==Et});for(var[c,v]of r)v.v!==Et&&!(c in l)&&d.push(c);return d},setPrototypeOf(){Od()}})}function No(e){try{if(e!==null&&typeof e=="object"&&jr in e)return e[jr]}catch{}return e}function wc(e,t){return Object.is(No(e),No(t))}var Ls,ji,Di,Fi;function kc(){if(Ls===void 0){Ls=window,ji=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Di=dn(t,"firstChild").get,Fi=dn(t,"nextSibling").get,Co(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Co(r)&&(r.__t=void 0)}}function Fr(e=""){return document.createTextNode(e)}function Kr(e){return Di.call(e)}function Na(e){return Fi.call(e)}function u(e,t){return Kr(e)}function q(e,t=!1){{var r=Kr(e);return r instanceof Comment&&r.data===""?Na(r):r}}function b(e,t=1,r=!1){let n=e;for(;t--;)n=Na(n);return n}function Sc(e){e.textContent=""}function Vi(){return!1}function Xs(e,t,r){return document.createElementNS(t??yi,e,void 0)}function zc(e,t){if(t){const r=document.body;e.autofocus=!0,Dr(()=>{document.activeElement===r&&e.focus()})}}let Io=!1;function Mc(){Io||(Io=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function ns(e){var t=we,r=ke;ur(null),fr(null);try{return e()}finally{ur(t),fr(r)}}function Ac(e,t,r,n=r){e.addEventListener(t,()=>ns(r));const a=e.__on_r;a?e.__on_r=()=>{a(),n(!0)}:e.__on_r=()=>n(!0),Mc()}function Bi(e){ke===null&&(we===null&&Pd(),Td()),mn&&Cd()}function $c(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function zr(e,t){var r=ke;r!==null&&(r.f&Vt)!==0&&(e|=Vt);var n={ctx:Ct,deps:null,nodes:null,f:e|Lt|dr,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null},a=n;if((e&ia)!==0)na!==null?na.push(n):Or(n);else if(t!==null){try{oa(n)}catch(o){throw Ot(n),o}a.deps===null&&a.teardown===null&&a.nodes===null&&a.first===a.last&&(a.f&da)===0&&(a=a.first,(e&hn)!==0&&(e&vn)!==0&&a!==null&&(a.f|=vn))}if(a!==null&&(a.parent=r,r!==null&&$c(a,r),we!==null&&(we.f&Rt)!==0&&(e&jn)===0)){var i=we;(i.effects??(i.effects=[])).push(a)}return n}function Zs(){return we!==null&&!_r}function as(e){const t=zr(In,null);return mt(t,It),t.teardown=e,t}function sa(e){Bi();var t=ke.f,r=!we&&(t&wr)!==0&&(t&la)===0;if(r){var n=Ct;(n.e??(n.e=[])).push(e)}else return Gi(e)}function Gi(e){return zr(ia|hi,e)}function Ec(e){return Bi(),zr(In|hi,e)}function Cc(e){un.ensure();const t=zr(jn|da,e);return(r={})=>new Promise(n=>{r.outro?Pn(t,()=>{Ot(t),n(void 0)}):(Ot(t),n(void 0))})}function Qs(e){return zr(ia,e)}function Tc(e){return zr(qs|da,e)}function eo(e,t=0){return zr(In|t,e)}function V(e,t=[],r=[],n=[]){Ni(n,t,r,a=>{zr(In,()=>e(...a.map(s)))})}function Ia(e,t=0){var r=zr(hn|t,e);return r}function Hi(e,t=0){var r=zr(ts|t,e);return r}function qt(e){return zr(wr|da,e)}function Ui(e){var t=e.teardown;if(t!==null){const r=mn,n=we;Lo(!0),ur(null);try{t.call(null)}finally{Lo(r),ur(n)}}}function to(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const a=r.ac;a!==null&&ns(()=>{a.abort(Sn)});var n=r.next;(r.f&jn)!==0?r.parent=null:Ot(r,t),r=n}}function Pc(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&wr)===0&&Ot(t),t=r}}function Ot(e,t=!0){var r=!1;(t||(e.f&Md)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Wi(e.nodes.start,e.nodes.end),r=!0),to(e,t&&!r),Ma(e,0),mt(e,Rr);var n=e.nodes&&e.nodes.t;if(n!==null)for(const i of n)i.stop();Ui(e);var a=e.parent;a!==null&&a.first!==null&&qi(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=null}function Wi(e,t){for(;e!==null;){var r=e===t?null:Na(e);e.remove(),e=r}}function qi(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Pn(e,t,r=!0){var n=[];Ki(e,n,!0);var a=()=>{r&&Ot(e),t&&t()},i=n.length;if(i>0){var o=()=>--i||a();for(var l of n)l.out(o)}else a()}function Ki(e,t,r){if((e.f&Vt)===0){e.f^=Vt;var n=e.nodes&&e.nodes.t;if(n!==null)for(const l of n)(l.is_global||r)&&t.push(l);for(var a=e.first;a!==null;){var i=a.next,o=(a.f&vn)!==0||(a.f&wr)!==0&&(e.f&hn)!==0;Ki(a,t,o?r:!1),a=i}}}function ro(e){Yi(e,!0)}function Yi(e,t){if((e.f&Vt)!==0){e.f^=Vt;for(var r=e.first;r!==null;){var n=r.next,a=(r.f&vn)!==0||(r.f&wr)!==0;Yi(r,a?t:!1),r=n}var i=e.nodes&&e.nodes.t;if(i!==null)for(const o of i)(o.is_global||t)&&o.in()}}function no(e,t){if(e.nodes)for(var r=e.nodes.start,n=e.nodes.end;r!==null;){var a=r===n?null:Na(r);t.append(r),r=a}}let Wa=!1,mn=!1;function Lo(e){mn=e}let we=null,_r=!1;function ur(e){we=e}let ke=null;function fr(e){ke=e}let cr=null;function Ji(e){we!==null&&(cr===null?cr=[e]:cr.push(e))}let Wt=null,Zt=0,ir=null;function Nc(e){ir=e}let Xi=1,Mn=0,Nn=Mn;function Oo(e){Nn=e}function Zi(){return++Xi}function La(e){var t=e.f;if((t&Lt)!==0)return!0;if(t&Rt&&(e.f&=~Ln),(t&yr)!==0){for(var r=e.deps,n=r.length,a=0;a<n;a++){var i=r[a];if(La(i)&&Ii(i),i.wv>e.wv)return!0}(t&dr)!==0&&Nt===null&&mt(e,It)}return!1}function Qi(e,t,r=!0){var n=e.reactions;if(n!==null&&!(cr!==null&&ta.call(cr,e)))for(var a=0;a<n.length;a++){var i=n[a];(i.f&Rt)!==0?Qi(i,t,!1):t===i&&(r?mt(i,Lt):(i.f&It)!==0&&mt(i,yr),Or(i))}}function el(e){var S;var t=Wt,r=Zt,n=ir,a=we,i=cr,o=Ct,l=_r,d=Nn,c=e.f;Wt=null,Zt=0,ir=null,we=(c&(wr|jn))===0?e:null,cr=null,ra(e.ctx),_r=!1,Nn=++Mn,e.ac!==null&&(ns(()=>{e.ac.abort(Sn)}),e.ac=null);try{e.f|=zs;var v=e.fn,m=v();e.f|=la;var x=e.deps,A=ve==null?void 0:ve.is_fork;if(Wt!==null){var _;if(A||Ma(e,Zt),x!==null&&Zt>0)for(x.length=Zt+Wt.length,_=0;_<Wt.length;_++)x[Zt+_]=Wt[_];else e.deps=x=Wt;if(Zs()&&(e.f&dr)!==0)for(_=Zt;_<x.length;_++)((S=x[_]).reactions??(S.reactions=[])).push(e)}else!A&&x!==null&&Zt<x.length&&(Ma(e,Zt),x.length=Zt);if(Ta()&&ir!==null&&!_r&&x!==null&&(e.f&(Rt|yr|Lt))===0)for(_=0;_<ir.length;_++)Qi(ir[_],e);if(a!==null&&a!==e){if(Mn++,a.deps!==null)for(let g=0;g<r;g+=1)a.deps[g].rv=Mn;if(t!==null)for(const g of t)g.rv=Mn;ir!==null&&(n===null?n=ir:n.push(...ir))}return(e.f&cn)!==0&&(e.f^=cn),m}catch(g){return Mi(g)}finally{e.f^=zs,Wt=t,Zt=r,ir=n,we=a,cr=i,ra(o),_r=l,Nn=d}}function Ic(e,t){let r=t.reactions;if(r!==null){var n=_d.call(r,e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}if(r===null&&(t.f&Rt)!==0&&(Wt===null||!ta.call(Wt,t))){var i=t;(i.f&dr)!==0&&(i.f^=dr,i.f&=~Ln),Ks(i),bc(i),Ma(i,0)}}function Ma(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Ic(e,r[n])}function oa(e){var t=e.f;if((t&Rr)===0){mt(e,It);var r=ke,n=Wa;ke=e,Wa=!0;try{(t&(hn|ts))!==0?Pc(e):to(e),Ui(e);var a=el(e);e.teardown=typeof a=="function"?a:null,e.wv=Xi;var i;ws&&ec&&(e.f&Lt)!==0&&e.deps}finally{Wa=n,ke=r}}}async function Lc(){await Promise.resolve(),sc()}function s(e){var t=e.f,r=(t&Rt)!==0;if(we!==null&&!_r){var n=ke!==null&&(ke.f&Rr)!==0;if(!n&&(cr===null||!ta.call(cr,e))){var a=we.deps;if((we.f&zs)!==0)e.rv<Mn&&(e.rv=Mn,Wt===null&&a!==null&&a[Zt]===e?Zt++:Wt===null?Wt=[e]:Wt.push(e));else{(we.deps??(we.deps=[])).push(e);var i=e.reactions;i===null?e.reactions=[we]:ta.call(i,we)||i.push(we)}}}if(mn&&fn.has(e))return fn.get(e);if(r){var o=e;if(mn){var l=o.v;return((o.f&It)===0&&o.reactions!==null||rl(o))&&(l=Js(o)),fn.set(o,l),l}var d=(o.f&dr)===0&&!_r&&we!==null&&(Wa||(we.f&dr)!==0),c=(o.f&la)===0;La(o)&&(d&&(o.f|=dr),Ii(o)),d&&!c&&(Li(o),tl(o))}if(Nt!=null&&Nt.has(e))return Nt.get(e);if((e.f&cn)!==0)throw e.v;return e.v}function tl(e){if(e.f|=dr,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&Rt)!==0&&(t.f&dr)===0&&(Li(t),tl(t))}function rl(e){if(e.v===Et)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(fn.has(t)||(t.f&Rt)!==0&&rl(t))return!0;return!1}function On(e){var t=_r;try{return _r=!0,e()}finally{_r=t}}function kn(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(jr in e)Os(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&jr in r&&Os(r)}}}function Os(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{Os(e[n],t)}catch{}const r=Ws(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=vi(r);for(let a in n){const i=n[a].get;if(i)try{i.call(e)}catch{}}}}}function Oc(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Rc=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function jc(e){return Rc.includes(e)}const Dc={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Fc(e){return e=e.toLowerCase(),Dc[e]??e}const Vc=["touchstart","touchmove"];function Bc(e){return Vc.includes(e)}const An=Symbol("events"),nl=new Set,Rs=new Set;function al(e,t,r,n={}){function a(i){if(n.capture||js.call(t,i),!i.cancelBubble)return ns(()=>r==null?void 0:r.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Dr(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function Ka(e,t,r,n,a){var i={capture:n,passive:a},o=al(e,t,r,i);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&as(()=>{t.removeEventListener(e,o,i)})}function D(e,t,r){(t[An]??(t[An]={}))[e]=r}function gn(e){for(var t=0;t<e.length;t++)nl.add(e[t]);for(var r of Rs)r(e)}let Ro=null;function js(e){var g,z;var t=this,r=t.ownerDocument,n=e.type,a=((g=e.composedPath)==null?void 0:g.call(e))||[],i=a[0]||e.target;Ro=e;var o=0,l=Ro===e&&e[An];if(l){var d=a.indexOf(l);if(d!==-1&&(t===document||t===window)){e[An]=t;return}var c=a.indexOf(t);if(c===-1)return;d<=c&&(o=d)}if(i=a[o]||e.target,i!==t){yd(e,"currentTarget",{configurable:!0,get(){return i||r}});var v=we,m=ke;ur(null),fr(null);try{for(var x,A=[];i!==null;){var _=i.assignedSlot||i.parentNode||i.host||null;try{var S=(z=i[An])==null?void 0:z[n];S!=null&&(!i.disabled||e.target===i)&&S.call(i,e)}catch(N){x?A.push(N):x=N}if(e.cancelBubble||_===t||_===null)break;i=_}if(x){for(let N of A)queueMicrotask(()=>{throw N});throw x}}finally{e[An]=t,delete e.currentTarget,ur(v),fr(m)}}}var ui;const ms=((ui=globalThis==null?void 0:globalThis.window)==null?void 0:ui.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Gc(e){return(ms==null?void 0:ms.createHTML(e))??e}function sl(e){var t=Xs("template");return t.innerHTML=Gc(e.replaceAll("<!>","<!---->")),t.content}function Rn(e,t){var r=ke;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function k(e,t){var r=(t&qd)!==0,n=(t&Kd)!==0,a,i=!e.startsWith("<!>");return()=>{a===void 0&&(a=sl(i?e:"<!>"+e),r||(a=Kr(a)));var o=n||ji?document.importNode(a,!0):a.cloneNode(!0);if(r){var l=Kr(o),d=o.lastChild;Rn(l,d)}else Rn(o,o);return o}}function Hc(e,t,r="svg"){var n=!e.startsWith("<!>"),a=`<${r}>${n?e:"<!>"+e}</${r}>`,i;return()=>{if(!i){var o=sl(a),l=Kr(o);i=Kr(l)}var d=i.cloneNode(!0);return Rn(d,d),d}}function Uc(e,t){return Hc(e,t,"svg")}function Sa(e=""){{var t=Fr(e+"");return Rn(t,t),t}}function ie(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Fr();return e.append(t,r),Rn(t,r),e}function p(e,t){e!==null&&e.before(t)}function J(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=`${r}`)}function Wc(e,t){return qc(e,t)}const Da=new Map;function qc(e,{target:t,anchor:r,props:n={},events:a,context:i,intro:o=!0,transformError:l}){kc();var d=void 0,c=Cc(()=>{var v=r??t.appendChild(Fr());dc(v,{pending:()=>{}},A=>{kr({});var _=Ct;i&&(_.c=i),a&&(n.$$events=a),d=e(A,n)||{},Sr()},l);var m=new Set,x=A=>{for(var _=0;_<A.length;_++){var S=A[_];if(!m.has(S)){m.add(S);var g=Bc(S);for(const F of[t,document]){var z=Da.get(F);z===void 0&&(z=new Map,Da.set(F,z));var N=z.get(S);N===void 0?(F.addEventListener(S,js,{passive:g}),z.set(S,1)):z.set(S,N+1)}}}};return x(es(nl)),Rs.add(x),()=>{var g;for(var A of m)for(const z of[t,document]){var _=Da.get(z),S=_.get(A);--S==0?(z.removeEventListener(A,js),_.delete(A),_.size===0&&Da.delete(z)):_.set(A,S)}Rs.delete(x),v!==r&&((g=v.parentNode)==null||g.removeChild(v))}});return Kc.set(d,c),d}let Kc=new WeakMap;var br,Ir,er,Tn,$a,Ea,Qa;class ao{constructor(t,r=!0){hr(this,"anchor");Ce(this,br,new Map);Ce(this,Ir,new Map);Ce(this,er,new Map);Ce(this,Tn,new Set);Ce(this,$a,!0);Ce(this,Ea,t=>{if(w(this,br).has(t)){var r=w(this,br).get(t),n=w(this,Ir).get(r);if(n)ro(n),w(this,Tn).delete(r);else{var a=w(this,er).get(r);a&&(a.effect.f&Vt)===0&&(w(this,Ir).set(r,a.effect),w(this,er).delete(r),a.fragment.lastChild.remove(),this.anchor.before(a.fragment),n=a.effect)}for(const[i,o]of w(this,br)){if(w(this,br).delete(i),i===t)break;const l=w(this,er).get(o);l&&(Ot(l.effect),w(this,er).delete(o))}for(const[i,o]of w(this,Ir)){if(i===r||w(this,Tn).has(i)||(o.f&Vt)!==0)continue;const l=()=>{if(Array.from(w(this,br).values()).includes(i)){var c=document.createDocumentFragment();no(o,c),c.append(Fr()),w(this,er).set(i,{effect:o,fragment:c})}else Ot(o);w(this,Tn).delete(i),w(this,Ir).delete(i)};w(this,$a)||!n?(w(this,Tn).add(i),Pn(o,l,!1)):l()}}});Ce(this,Qa,t=>{w(this,br).delete(t);const r=Array.from(w(this,br).values());for(const[n,a]of w(this,er))r.includes(n)||(Ot(a.effect),w(this,er).delete(n))});this.anchor=t,fe(this,$a,r)}ensure(t,r){var n=ve,a=Vi();if(r&&!w(this,Ir).has(t)&&!w(this,er).has(t))if(a){var i=document.createDocumentFragment(),o=Fr();i.append(o),w(this,er).set(t,{effect:qt(()=>r(o)),fragment:i})}else w(this,Ir).set(t,qt(()=>r(this.anchor)));if(w(this,br).set(n,t),a){for(const[l,d]of w(this,Ir))l===t?n.unskip_effect(d):n.skip_effect(d);for(const[l,d]of w(this,er))l===t?n.unskip_effect(d.effect):n.skip_effect(d.effect);n.oncommit(w(this,Ea)),n.ondiscard(w(this,Qa))}else w(this,Ea).call(this,n)}}br=new WeakMap,Ir=new WeakMap,er=new WeakMap,Tn=new WeakMap,$a=new WeakMap,Ea=new WeakMap,Qa=new WeakMap;function T(e,t,r=!1){var n=new ao(e),a=r?vn:0;function i(o,l){n.ensure(o,l)}Ia(()=>{var o=!1;t((l,d=0)=>{o=!0,i(d,l)}),o||i(-1,null)},a)}function vt(e,t){return t}function Yc(e,t,r){for(var n=[],a=t.length,i,o=t.length,l=0;l<a;l++){let m=t[l];Pn(m,()=>{if(i){if(i.pending.delete(m),i.done.add(m),i.pending.size===0){var x=e.outrogroups;Ds(e,es(i.done)),x.delete(i),x.size===0&&(e.outrogroups=null)}}else o-=1},!1)}if(o===0){var d=n.length===0&&r!==null;if(d){var c=r,v=c.parentNode;Sc(v),v.append(c),e.items.clear()}Ds(e,t,!d)}else i={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(i)}function Ds(e,t,r=!0){var n;if(e.pending.size>0){n=new Set;for(const o of e.pending.values())for(const l of o)n.add(e.items.get(l).e)}for(var a=0;a<t.length;a++){var i=t[a];if(n!=null&&n.has(i)){i.f|=Lr;const o=document.createDocumentFragment();no(i,o)}else Ot(t[a],r)}}var jo;function pt(e,t,r,n,a,i=null){var o=e,l=new Map,d=(t&bi)!==0;if(d){var c=e;o=c.appendChild(Fr())}var v=null,m=Ys(()=>{var F=r();return Us(F)?F:F==null?[]:es(F)}),x,A=new Map,_=!0;function S(F){(N.effect.f&Rr)===0&&(N.pending.delete(F),N.fallback=v,Jc(N,x,o,t,n),v!==null&&(x.length===0?(v.f&Lr)===0?ro(v):(v.f^=Lr,_a(v,null,o)):Pn(v,()=>{v=null})))}function g(F){N.pending.delete(F)}var z=Ia(()=>{x=s(m);for(var F=x.length,M=new Set,O=ve,X=Vi(),P=0;P<F;P+=1){var h=x[P],I=n(h,P),G=_?null:l.get(I);G?(G.v&&aa(G.v,h),G.i&&aa(G.i,P),X&&O.unskip_effect(G.e)):(G=Xc(l,_?o:jo??(jo=Fr()),h,I,P,a,t,r),_||(G.e.f|=Lr),l.set(I,G)),M.add(I)}if(F===0&&i&&!v&&(_?v=qt(()=>i(o)):(v=qt(()=>i(jo??(jo=Fr()))),v.f|=Lr)),F>M.size&&Ed(),!_)if(A.set(O,M),X){for(const[le,Me]of l)M.has(le)||O.skip_effect(Me.e);O.oncommit(S),O.ondiscard(g)}else S(O);s(m)}),N={effect:z,items:l,pending:A,outrogroups:null,fallback:v};_=!1}function ha(e){for(;e!==null&&(e.f&wr)===0;)e=e.next;return e}function Jc(e,t,r,n,a){var G,le,Me,je,E,j,Y,ne,Q;var i=(n&Vd)!==0,o=t.length,l=e.items,d=ha(e.effect.first),c,v=null,m,x=[],A=[],_,S,g,z;if(i)for(z=0;z<o;z+=1)_=t[z],S=a(_,z),g=l.get(S).e,(g.f&Lr)===0&&((le=(G=g.nodes)==null?void 0:G.a)==null||le.measure(),(m??(m=new Set)).add(g));for(z=0;z<o;z+=1){if(_=t[z],S=a(_,z),g=l.get(S).e,e.outrogroups!==null)for(const C of e.outrogroups)C.pending.delete(g),C.done.delete(g);if((g.f&Lr)!==0)if(g.f^=Lr,g===d)_a(g,null,r);else{var N=v?v.next:d;g===e.effect.last&&(e.effect.last=g.prev),g.prev&&(g.prev.next=g.next),g.next&&(g.next.prev=g.prev),tn(e,v,g),tn(e,g,N),_a(g,N,r),v=g,x=[],A=[],d=ha(v.next);continue}if((g.f&Vt)!==0&&(ro(g),i&&((je=(Me=g.nodes)==null?void 0:Me.a)==null||je.unfix(),(m??(m=new Set)).delete(g))),g!==d){if(c!==void 0&&c.has(g)){if(x.length<A.length){var F=A[0],M;v=F.prev;var O=x[0],X=x[x.length-1];for(M=0;M<x.length;M+=1)_a(x[M],F,r);for(M=0;M<A.length;M+=1)c.delete(A[M]);tn(e,O.prev,X.next),tn(e,v,O),tn(e,X,F),d=F,v=X,z-=1,x=[],A=[]}else c.delete(g),_a(g,d,r),tn(e,g.prev,g.next),tn(e,g,v===null?e.effect.first:v.next),tn(e,v,g),v=g;continue}for(x=[],A=[];d!==null&&d!==g;)(c??(c=new Set)).add(d),A.push(d),d=ha(d.next);if(d===null)continue}(g.f&Lr)===0&&x.push(g),v=g,d=ha(g.next)}if(e.outrogroups!==null){for(const C of e.outrogroups)C.pending.size===0&&(Ds(e,es(C.done)),(E=e.outrogroups)==null||E.delete(C));e.outrogroups.size===0&&(e.outrogroups=null)}if(d!==null||c!==void 0){var P=[];if(c!==void 0)for(g of c)(g.f&Vt)===0&&P.push(g);for(;d!==null;)(d.f&Vt)===0&&d!==e.fallback&&P.push(d),d=ha(d.next);var h=P.length;if(h>0){var I=(n&bi)!==0&&o===0?r:null;if(i){for(z=0;z<h;z+=1)(Y=(j=P[z].nodes)==null?void 0:j.a)==null||Y.measure();for(z=0;z<h;z+=1)(Q=(ne=P[z].nodes)==null?void 0:ne.a)==null||Q.fix()}Yc(e,P,I)}}i&&Dr(()=>{var C,$;if(m!==void 0)for(g of m)($=(C=g.nodes)==null?void 0:C.a)==null||$.apply()})}function Xc(e,t,r,n,a,i,o,l){var d=(o&Dd)!==0?(o&Bd)===0?_c(r,!1,!1):pn(r):null,c=(o&Fd)!==0?pn(a):null;return{v:d,i:c,e:qt(()=>(i(t,d??r,c??a,l),()=>{e.delete(n)}))}}function _a(e,t,r){if(e.nodes)for(var n=e.nodes.start,a=e.nodes.end,i=t&&(t.f&Lr)===0?t.nodes.start:r;n!==null;){var o=Na(n);if(i.before(n),n===a)return;n=o}}function tn(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function Do(e,t,r=!1,n=!1,a=!1){var i=e,o="";V(()=>{var l=ke;if(o!==(o=t()??"")&&(l.nodes!==null&&(Wi(l.nodes.start,l.nodes.end),l.nodes=null),o!=="")){var d=r?wi:n?Yd:void 0,c=Xs(r?"svg":n?"math":"template",d);c.innerHTML=o;var v=r||n?c:c.content;if(Rn(Kr(v),v.lastChild),r||n)for(;Kr(v);)i.before(Kr(v));else i.before(v)}})}function be(e,t,r,n,a){var l;var i=(l=t.$$slots)==null?void 0:l[r],o=!1;i===!0&&(i=t.children,o=!0),i===void 0||i(e,o?()=>n:n)}function Fs(e,t,...r){var n=new ao(e);Ia(()=>{const a=t()??null;n.ensure(a,a&&(i=>a(i,...r)))},vn)}function Zc(e,t,r,n,a,i){var o=null,l=e,d=new ao(l,!1);Ia(()=>{const c=t()||null;var v=wi;if(c===null){d.ensure(null,null);return}return d.ensure(c,m=>{if(c){if(o=Xs(c,v),Rn(o,o),n){var x=o.appendChild(Fr());n(o,x)}ke.nodes.end=o,m.before(o)}}),()=>{}},vn),as(()=>{})}function Qc(e,t){var r=void 0,n;Hi(()=>{r!==(r=t())&&(n&&(Ot(n),n=null),r&&(n=qt(()=>{Qs(()=>r(e))})))})}function ol(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=ol(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function il(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=ol(e))&&(n&&(n+=" "),n+=t);return n}function Ge(e){return typeof e=="object"?il(e):e??""}const Fo=[...` 	
\r\f \v\uFEFF`];function eu(e,t,r){var n=e==null?"":""+e;if(r){for(var a of Object.keys(r))if(r[a])n=n?n+" "+a:a;else if(n.length)for(var i=a.length,o=0;(o=n.indexOf(a,o))>=0;){var l=o+i;(o===0||Fo.includes(n[o-1]))&&(l===n.length||Fo.includes(n[l]))?n=(o===0?"":n.substring(0,o))+n.substring(l+1):o=l}}return n===""?null:n}function Vo(e,t=!1){var r=t?" !important;":";",n="";for(var a of Object.keys(e)){var i=e[a];i!=null&&i!==""&&(n+=" "+a+": "+i+r)}return n}function hs(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function tu(e,t){if(t){var r="",n,a;if(Array.isArray(t)?(n=t[0],a=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var i=!1,o=0,l=!1,d=[];n&&d.push(...Object.keys(n).map(hs)),a&&d.push(...Object.keys(a).map(hs));var c=0,v=-1;const S=e.length;for(var m=0;m<S;m++){var x=e[m];if(l?x==="/"&&e[m-1]==="*"&&(l=!1):i?i===x&&(i=!1):x==="/"&&e[m+1]==="*"?l=!0:x==='"'||x==="'"?i=x:x==="("?o++:x===")"&&o--,!l&&i===!1&&o===0){if(x===":"&&v===-1)v=m;else if(x===";"||m===S-1){if(v!==-1){var A=hs(e.substring(c,v).trim());if(!d.includes(A)){x!==";"&&m++;var _=e.substring(c,m).trim();r+=" "+_+";"}}c=m+1,v=-1}}}}return n&&(r+=Vo(n)),a&&(r+=Vo(a,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function He(e,t,r,n,a,i){var o=e.__className;if(o!==r||o===void 0){var l=eu(r,n,i);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e.__className=r}else if(i&&a!==i)for(var d in i){var c=!!i[d];(a==null||c!==!!a[d])&&e.classList.toggle(d,c)}return i}function gs(e,t={},r,n){for(var a in r){var i=r[a];t[a]!==i&&(r[a]==null?e.style.removeProperty(a):e.style.setProperty(a,i,n))}}function ll(e,t,r,n){var a=e.__style;if(a!==t){var i=tu(t,n);i==null?e.removeAttribute("style"):e.style.cssText=i,e.__style=t}else n&&(Array.isArray(n)?(gs(e,r==null?void 0:r[0],n[0]),gs(e,r==null?void 0:r[1],n[1],"important")):gs(e,r,n));return n}function Vs(e,t,r=!1){if(e.multiple){if(t==null)return;if(!Us(t))return Xd();for(var n of e.options)n.selected=t.includes(Bo(n));return}for(n of e.options){var a=Bo(n);if(wc(a,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function ru(e){var t=new MutationObserver(()=>{Vs(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),as(()=>{t.disconnect()})}function Bo(e){return"__value"in e?e.__value:e.value}const ga=Symbol("class"),xa=Symbol("style"),dl=Symbol("is custom element"),cl=Symbol("is html"),nu=xi?"option":"OPTION",au=xi?"select":"SELECT";function su(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Aa(e,t,r,n){var a=ul(e);a[t]!==(a[t]=r)&&(t==="loading"&&(e[Ad]=r),r==null?e.removeAttribute(t):typeof r!="string"&&fl(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function ou(e,t,r,n,a=!1,i=!1){var o=ul(e),l=o[dl],d=!o[cl],c=t||{},v=e.nodeName===nu;for(var m in t)m in r||(r[m]=null);r.class?r.class=Ge(r.class):r[ga]&&(r.class=null),r[xa]&&(r.style??(r.style=null));var x=fl(e);for(const M in r){let O=r[M];if(v&&M==="value"&&O==null){e.value=e.__value="",c[M]=O;continue}if(M==="class"){var A=e.namespaceURI==="http://www.w3.org/1999/xhtml";He(e,A,O,n,t==null?void 0:t[ga],r[ga]),c[M]=O,c[ga]=r[ga];continue}if(M==="style"){ll(e,O,t==null?void 0:t[xa],r[xa]),c[M]=O,c[xa]=r[xa];continue}var _=c[M];if(!(O===_&&!(O===void 0&&e.hasAttribute(M)))){c[M]=O;var S=M[0]+M[1];if(S!=="$$")if(S==="on"){const X={},P="$$"+M;let h=M.slice(2);var g=jc(h);if(Oc(h)&&(h=h.slice(0,-7),X.capture=!0),!g&&_){if(O!=null)continue;e.removeEventListener(h,c[P],X),c[P]=null}if(g)D(h,e,O),gn([h]);else if(O!=null){let I=function(G){c[M].call(this,G)};var F=I;c[P]=al(h,e,I,X)}}else if(M==="style")Aa(e,M,O);else if(M==="autofocus")zc(e,!!O);else if(!l&&(M==="__value"||M==="value"&&O!=null))e.value=e.__value=O;else if(M==="selected"&&v)su(e,O);else{var z=M;d||(z=Fc(z));var N=z==="defaultValue"||z==="defaultChecked";if(O==null&&!l&&!N)if(o[M]=null,z==="value"||z==="checked"){let X=e;const P=t===void 0;if(z==="value"){let h=X.defaultValue;X.removeAttribute(z),X.defaultValue=h,X.value=X.__value=P?h:null}else{let h=X.defaultChecked;X.removeAttribute(z),X.defaultChecked=h,X.checked=P?h:!1}}else e.removeAttribute(M);else N||x.includes(z)&&(l||typeof O!="string")?(e[z]=O,z in o&&(o[z]=Et)):typeof O!="function"&&Aa(e,z,O)}}}return c}function Ya(e,t,r=[],n=[],a=[],i,o=!1,l=!1){Ni(a,r,n,d=>{var c=void 0,v={},m=e.nodeName===au,x=!1;if(Hi(()=>{var _=t(...d.map(s)),S=ou(e,c,_,i,o,l);x&&m&&"value"in _&&Vs(e,_.value);for(let z of Object.getOwnPropertySymbols(v))_[z]||Ot(v[z]);for(let z of Object.getOwnPropertySymbols(_)){var g=_[z];z.description===Jd&&(!c||g!==c[z])&&(v[z]&&Ot(v[z]),v[z]=qt(()=>Qc(e,()=>g))),S[z]=g}c=S}),m){var A=e;Qs(()=>{Vs(A,c.value,!0),ru(A)})}x=!0})}function ul(e){return e.__attributes??(e.__attributes={[dl]:e.nodeName.includes("-"),[cl]:e.namespaceURI===yi})}var Go=new Map;function fl(e){var t=e.getAttribute("is")||e.nodeName,r=Go.get(t);if(r)return r;Go.set(t,r=[]);for(var n,a=e,i=Element.prototype;i!==a;){n=vi(a);for(var o in n)n[o].set&&r.push(o);a=Ws(a)}return r}function Wn(e,t,r=t){var n=new WeakSet;Ac(e,"input",async a=>{var i=a?e.defaultValue:e.value;if(i=xs(e)?bs(i):i,r(i),ve!==null&&n.add(ve),await Lc(),i!==(i=t())){var o=e.selectionStart,l=e.selectionEnd,d=e.value.length;if(e.value=i??"",l!==null){var c=e.value.length;o===l&&l===d&&c>d?(e.selectionStart=c,e.selectionEnd=c):(e.selectionStart=o,e.selectionEnd=Math.min(l,c))}}}),On(t)==null&&e.value&&(r(xs(e)?bs(e.value):e.value),ve!==null&&n.add(ve)),eo(()=>{var a=t();if(e===document.activeElement){var i=Ms??ve;if(n.has(i))return}xs(e)&&a===bs(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function xs(e){var t=e.type;return t==="number"||t==="range"}function bs(e){return e===""?null:+e}function Ho(e,t){return e===t||(e==null?void 0:e[jr])===t}function so(e={},t,r,n){return Qs(()=>{var a,i;return eo(()=>{a=i,i=[],On(()=>{e!==r(...i)&&(t(e,...i),a&&Ho(r(...a),e)&&t(null,...a))})}),()=>{Dr(()=>{i&&Ho(r(...i),e)&&t(null,...i)})}}),e}function iu(e=!1){const t=Ct,r=t.l.u;if(!r)return;let n=()=>kn(t.s);if(e){let a=0,i={};const o=Pa(()=>{let l=!1;const d=t.s;for(const c in d)d[c]!==i[c]&&(i[c]=d[c],l=!0);return l&&a++,a});n=()=>s(o)}r.b.length&&Ec(()=>{Uo(t,n),ks(r.b)}),sa(()=>{const a=On(()=>r.m.map(zd));return()=>{for(const i of a)typeof i=="function"&&i()}}),r.a.length&&sa(()=>{Uo(t,n),ks(r.a)})}function Uo(e,t){if(e.l.s)for(const r of e.l.s)s(r);t()}let Fa=!1;function lu(e){var t=Fa;try{return Fa=!1,[e(),Fa]}finally{Fa=t}}const du={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function cu(e,t,r){return new Proxy({props:e,exclude:t},du)}const uu={get(e,t){if(!e.exclude.includes(t))return s(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var n=ke;try{fr(e.parent_effect),e.special[t]=et({get[t](){return e.props[t]}},t,_i)}finally{fr(n)}}return e.special[t](r),wa(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),wa(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function pe(e,t){return new Proxy({props:e,exclude:t,special:{},version:pn(0),parent_effect:ke},uu)}const fu={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(ma(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let a=e.props[n];ma(a)&&(a=a());const i=dn(a,t);if(i&&i.set)return i.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(ma(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const a=dn(n,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===jr||t===gi)return!1;for(let r of e.props)if(ma(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(ma(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function Se(...e){return new Proxy({props:e},fu)}function et(e,t,r,n){var F;var a=!Ca||(r&Hd)!==0,i=(r&Ud)!==0,o=(r&Wd)!==0,l=n,d=!0,c=()=>(d&&(d=!1,l=o?On(n):n),l),v;if(i){var m=jr in e||gi in e;v=((F=dn(e,t))==null?void 0:F.set)??(m&&t in e?M=>e[t]=M:void 0)}var x,A=!1;i?[x,A]=lu(()=>e[t]):x=e[t],x===void 0&&n!==void 0&&(x=c(),v&&(a&&Id(),v(x)));var _;if(a?_=()=>{var M=e[t];return M===void 0?c():(d=!0,M)}:_=()=>{var M=e[t];return M!==void 0&&(l=void 0),M===void 0?l:M},a&&(r&_i)===0)return _;if(v){var S=e.$$legacy;return(function(M,O){return arguments.length>0?((!a||!O||S||A)&&v(O?_():M),M):_()})}var g=!1,z=((r&Gd)!==0?Pa:Ys)(()=>(g=!1,_()));i&&s(z);var N=ke;return(function(M,O){if(arguments.length>0){const X=O?s(z):a&&i?xt(M):M;return f(z,X),g=!0,l!==void 0&&(l=X),M}return mn&&g||(N.f&Rr)!==0?z.v:s(z)})}const vu="5";var fi;typeof window<"u"&&((fi=window.__svelte??(window.__svelte={})).v??(fi.v=new Set)).add(vu);const Yt="";async function pu(){const e=await fetch(`${Yt}/api/status`);if(!e.ok)throw new Error("상태 확인 실패");return e.json()}async function Un(e,t=null,r=null){const n={provider:e};t&&(n.model=t),r&&(n.api_key=r);const a=await fetch(`${Yt}/api/configure`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!a.ok)throw new Error("설정 실패");return a.json()}async function mu(e){const t=await fetch(`${Yt}/api/models/${encodeURIComponent(e)}`);return t.ok?t.json():{models:[]}}function hu(e,{onProgress:t,onDone:r,onError:n}){const a=new AbortController;return fetch(`${Yt}/api/ollama/pull`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:e}),signal:a.signal}).then(async i=>{if(!i.ok){n==null||n("다운로드 실패");return}const o=i.body.getReader(),l=new TextDecoder;let d="";for(;;){const{done:c,value:v}=await o.read();if(c)break;d+=l.decode(v,{stream:!0});const m=d.split(`
`);d=m.pop()||"";for(const x of m)if(x.startsWith("data:"))try{const A=JSON.parse(x.slice(5).trim());A.total&&A.completed!==void 0?t==null||t({total:A.total,completed:A.completed,status:A.status}):A.status&&(t==null||t({status:A.status}))}catch{}}r==null||r()}).catch(i=>{i.name!=="AbortError"&&(n==null||n(i.message))}),{abort:()=>a.abort()}}async function gu(){const e=await fetch(`${Yt}/api/oauth/authorize`);if(!e.ok)throw new Error("OAuth 인증 시작 실패");return e.json()}async function xu(){const e=await fetch(`${Yt}/api/oauth/status`);return e.ok?e.json():{done:!1}}async function bu(){const e=await fetch(`${Yt}/api/oauth/logout`,{method:"POST"});if(!e.ok)throw new Error("로그아웃 실패");return e.json()}async function _u(e){const t=await fetch(`${Yt}/api/export/modules/${encodeURIComponent(e)}`);if(!t.ok)throw new Error("모듈 목록 조회 실패");return t.json()}async function yu(){const e=await fetch(`${Yt}/api/export/templates`);if(!e.ok)throw new Error("템플릿 조회 실패");return e.json()}async function wu(e){const t=await fetch(`${Yt}/api/export/templates`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw new Error("템플릿 저장 실패");return t.json()}async function ku(e){const t=await fetch(`${Yt}/api/export/templates/${encodeURIComponent(e)}`,{method:"DELETE"});if(!t.ok){const r=await t.json().catch(()=>({}));throw new Error(r.detail||"템플릿 삭제 실패")}return t.json()}async function Wo(e,t=null,r=null){let n=`${Yt}/api/export/excel/${encodeURIComponent(e)}`;const a=new URLSearchParams;r?a.set("template_id",r):t&&t.length>0&&a.set("modules",t.join(","));const i=a.toString();i&&(n+=`?${i}`);const o=await fetch(n);if(!o.ok){const x=await o.json().catch(()=>({}));throw new Error(x.detail||"Excel 다운로드 실패")}const l=await o.blob(),c=(o.headers.get("content-disposition")||"").match(/filename\*?=(?:UTF-8'')?["']?([^;"'\n]+)/i),v=c?decodeURIComponent(c[1]):`${e}.xlsx`,m=document.createElement("a");return m.href=URL.createObjectURL(l),m.download=v,m.click(),URL.revokeObjectURL(m.href),v}async function Su(e){const t=await fetch(`${Yt}/api/search?q=${encodeURIComponent(e)}`);if(!t.ok)throw new Error("검색 실패");return t.json()}function zu(e,t,r={},{onMeta:n,onSnapshot:a,onContext:i,onSystemPrompt:o,onToolCall:l,onToolResult:d,onChunk:c,onDone:v,onError:m},x=null){const A={question:t,stream:!0,...r};e&&(A.company=e),x&&x.length>0&&(A.history=x);const _=new AbortController;return fetch(`${Yt}/api/ask`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(A),signal:_.signal}).then(async S=>{if(!S.ok){const O=await S.json().catch(()=>({}));m==null||m(O.detail||"스트리밍 실패");return}const g=S.body.getReader(),z=new TextDecoder;let N="",F=!1,M=null;for(;;){const{done:O,value:X}=await g.read();if(O)break;N+=z.decode(X,{stream:!0});const P=N.split(`
`);N=P.pop()||"";for(const h of P)if(h.startsWith("event:"))M=h.slice(6).trim();else if(h.startsWith("data:")&&M){const I=h.slice(5).trim();try{const G=JSON.parse(I);M==="meta"?n==null||n(G):M==="snapshot"?a==null||a(G):M==="context"?i==null||i(G):M==="system_prompt"?o==null||o(G):M==="tool_call"?l==null||l(G):M==="tool_result"?d==null||d(G):M==="chunk"?c==null||c(G.text):M==="error"?m==null||m(G.error,G.action,G.detail):M==="done"&&(F||(F=!0,v==null||v()))}catch{}M=null}}F||(F=!0,v==null||v())}).catch(S=>{S.name!=="AbortError"&&(m==null||m(S.message))}),{abort:()=>_.abort()}}const Mu=(e,t)=>{const r=new Array(e.length+t.length);for(let n=0;n<e.length;n++)r[n]=e[n];for(let n=0;n<t.length;n++)r[e.length+n]=t[n];return r},Au=(e,t)=>({classGroupId:e,validator:t}),vl=(e=new Map,t=null,r)=>({nextPart:e,validators:t,classGroupId:r}),Ja="-",qo=[],$u="arbitrary..",Eu=e=>{const t=Tu(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:n}=e;return{getClassGroupId:o=>{if(o.startsWith("[")&&o.endsWith("]"))return Cu(o);const l=o.split(Ja),d=l[0]===""&&l.length>1?1:0;return pl(l,d,t)},getConflictingClassGroupIds:(o,l)=>{if(l){const d=n[o],c=r[o];return d?c?Mu(c,d):d:c||qo}return r[o]||qo}}},pl=(e,t,r)=>{if(e.length-t===0)return r.classGroupId;const a=e[t],i=r.nextPart.get(a);if(i){const c=pl(e,t+1,i);if(c)return c}const o=r.validators;if(o===null)return;const l=t===0?e.join(Ja):e.slice(t).join(Ja),d=o.length;for(let c=0;c<d;c++){const v=o[c];if(v.validator(l))return v.classGroupId}},Cu=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const t=e.slice(1,-1),r=t.indexOf(":"),n=t.slice(0,r);return n?$u+n:void 0})(),Tu=e=>{const{theme:t,classGroups:r}=e;return Pu(r,t)},Pu=(e,t)=>{const r=vl();for(const n in e){const a=e[n];oo(a,r,n,t)}return r},oo=(e,t,r,n)=>{const a=e.length;for(let i=0;i<a;i++){const o=e[i];Nu(o,t,r,n)}},Nu=(e,t,r,n)=>{if(typeof e=="string"){Iu(e,t,r);return}if(typeof e=="function"){Lu(e,t,r,n);return}Ou(e,t,r,n)},Iu=(e,t,r)=>{const n=e===""?t:ml(t,e);n.classGroupId=r},Lu=(e,t,r,n)=>{if(Ru(e)){oo(e(n),t,r,n);return}t.validators===null&&(t.validators=[]),t.validators.push(Au(r,e))},Ou=(e,t,r,n)=>{const a=Object.entries(e),i=a.length;for(let o=0;o<i;o++){const[l,d]=a[o];oo(d,ml(t,l),r,n)}},ml=(e,t)=>{let r=e;const n=t.split(Ja),a=n.length;for(let i=0;i<a;i++){const o=n[i];let l=r.nextPart.get(o);l||(l=vl(),r.nextPart.set(o,l)),r=l}return r},Ru=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,ju=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=Object.create(null),n=Object.create(null);const a=(i,o)=>{r[i]=o,t++,t>e&&(t=0,n=r,r=Object.create(null))};return{get(i){let o=r[i];if(o!==void 0)return o;if((o=n[i])!==void 0)return a(i,o),o},set(i,o){i in r?r[i]=o:a(i,o)}}},Bs="!",Ko=":",Du=[],Yo=(e,t,r,n,a)=>({modifiers:e,hasImportantModifier:t,baseClassName:r,maybePostfixModifierPosition:n,isExternal:a}),Fu=e=>{const{prefix:t,experimentalParseClassName:r}=e;let n=a=>{const i=[];let o=0,l=0,d=0,c;const v=a.length;for(let S=0;S<v;S++){const g=a[S];if(o===0&&l===0){if(g===Ko){i.push(a.slice(d,S)),d=S+1;continue}if(g==="/"){c=S;continue}}g==="["?o++:g==="]"?o--:g==="("?l++:g===")"&&l--}const m=i.length===0?a:a.slice(d);let x=m,A=!1;m.endsWith(Bs)?(x=m.slice(0,-1),A=!0):m.startsWith(Bs)&&(x=m.slice(1),A=!0);const _=c&&c>d?c-d:void 0;return Yo(i,A,x,_)};if(t){const a=t+Ko,i=n;n=o=>o.startsWith(a)?i(o.slice(a.length)):Yo(Du,!1,o,void 0,!0)}if(r){const a=n;n=i=>r({className:i,parseClassName:a})}return n},Vu=e=>{const t=new Map;return e.orderSensitiveModifiers.forEach((r,n)=>{t.set(r,1e6+n)}),r=>{const n=[];let a=[];for(let i=0;i<r.length;i++){const o=r[i],l=o[0]==="[",d=t.has(o);l||d?(a.length>0&&(a.sort(),n.push(...a),a=[]),n.push(o)):a.push(o)}return a.length>0&&(a.sort(),n.push(...a)),n}},Bu=e=>({cache:ju(e.cacheSize),parseClassName:Fu(e),sortModifiers:Vu(e),...Eu(e)}),Gu=/\s+/,Hu=(e,t)=>{const{parseClassName:r,getClassGroupId:n,getConflictingClassGroupIds:a,sortModifiers:i}=t,o=[],l=e.trim().split(Gu);let d="";for(let c=l.length-1;c>=0;c-=1){const v=l[c],{isExternal:m,modifiers:x,hasImportantModifier:A,baseClassName:_,maybePostfixModifierPosition:S}=r(v);if(m){d=v+(d.length>0?" "+d:d);continue}let g=!!S,z=n(g?_.substring(0,S):_);if(!z){if(!g){d=v+(d.length>0?" "+d:d);continue}if(z=n(_),!z){d=v+(d.length>0?" "+d:d);continue}g=!1}const N=x.length===0?"":x.length===1?x[0]:i(x).join(":"),F=A?N+Bs:N,M=F+z;if(o.indexOf(M)>-1)continue;o.push(M);const O=a(z,g);for(let X=0;X<O.length;++X){const P=O[X];o.push(F+P)}d=v+(d.length>0?" "+d:d)}return d},Uu=(...e)=>{let t=0,r,n,a="";for(;t<e.length;)(r=e[t++])&&(n=hl(r))&&(a&&(a+=" "),a+=n);return a},hl=e=>{if(typeof e=="string")return e;let t,r="";for(let n=0;n<e.length;n++)e[n]&&(t=hl(e[n]))&&(r&&(r+=" "),r+=t);return r},Wu=(e,...t)=>{let r,n,a,i;const o=d=>{const c=t.reduce((v,m)=>m(v),e());return r=Bu(c),n=r.cache.get,a=r.cache.set,i=l,l(d)},l=d=>{const c=n(d);if(c)return c;const v=Hu(d,r);return a(d,v),v};return i=o,(...d)=>i(Uu(...d))},qu=[],St=e=>{const t=r=>r[e]||qu;return t.isThemeGetter=!0,t},gl=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,xl=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Ku=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,Yu=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Ju=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Xu=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Zu=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Qu=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,rn=e=>Ku.test(e),ce=e=>!!e&&!Number.isNaN(Number(e)),nn=e=>!!e&&Number.isInteger(Number(e)),_s=e=>e.endsWith("%")&&ce(e.slice(0,-1)),Ur=e=>Yu.test(e),bl=()=>!0,ef=e=>Ju.test(e)&&!Xu.test(e),io=()=>!1,tf=e=>Zu.test(e),rf=e=>Qu.test(e),nf=e=>!H(e)&&!W(e),af=e=>xn(e,wl,io),H=e=>gl.test(e),yn=e=>xn(e,kl,ef),Jo=e=>xn(e,vf,ce),sf=e=>xn(e,zl,bl),of=e=>xn(e,Sl,io),Xo=e=>xn(e,_l,io),lf=e=>xn(e,yl,rf),Va=e=>xn(e,Ml,tf),W=e=>xl.test(e),ba=e=>Dn(e,kl),df=e=>Dn(e,Sl),Zo=e=>Dn(e,_l),cf=e=>Dn(e,wl),uf=e=>Dn(e,yl),Ba=e=>Dn(e,Ml,!0),ff=e=>Dn(e,zl,!0),xn=(e,t,r)=>{const n=gl.exec(e);return n?n[1]?t(n[1]):r(n[2]):!1},Dn=(e,t,r=!1)=>{const n=xl.exec(e);return n?n[1]?t(n[1]):r:!1},_l=e=>e==="position"||e==="percentage",yl=e=>e==="image"||e==="url",wl=e=>e==="length"||e==="size"||e==="bg-size",kl=e=>e==="length",vf=e=>e==="number",Sl=e=>e==="family-name",zl=e=>e==="number"||e==="weight",Ml=e=>e==="shadow",pf=()=>{const e=St("color"),t=St("font"),r=St("text"),n=St("font-weight"),a=St("tracking"),i=St("leading"),o=St("breakpoint"),l=St("container"),d=St("spacing"),c=St("radius"),v=St("shadow"),m=St("inset-shadow"),x=St("text-shadow"),A=St("drop-shadow"),_=St("blur"),S=St("perspective"),g=St("aspect"),z=St("ease"),N=St("animate"),F=()=>["auto","avoid","all","avoid-page","page","left","right","column"],M=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],O=()=>[...M(),W,H],X=()=>["auto","hidden","clip","visible","scroll"],P=()=>["auto","contain","none"],h=()=>[W,H,d],I=()=>[rn,"full","auto",...h()],G=()=>[nn,"none","subgrid",W,H],le=()=>["auto",{span:["full",nn,W,H]},nn,W,H],Me=()=>[nn,"auto",W,H],je=()=>["auto","min","max","fr",W,H],E=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],j=()=>["start","end","center","stretch","center-safe","end-safe"],Y=()=>["auto",...h()],ne=()=>[rn,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...h()],Q=()=>[rn,"screen","full","dvw","lvw","svw","min","max","fit",...h()],C=()=>[rn,"screen","full","lh","dvh","lvh","svh","min","max","fit",...h()],$=()=>[e,W,H],me=()=>[...M(),Zo,Xo,{position:[W,H]}],he=()=>["no-repeat",{repeat:["","x","y","space","round"]}],Je=()=>["auto","cover","contain",cf,af,{size:[W,H]}],tt=()=>[_s,ba,yn],qe=()=>["","none","full",c,W,H],Z=()=>["",ce,ba,yn],te=()=>["solid","dashed","dotted","double"],ge=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],_e=()=>[ce,_s,Zo,Xo],Ae=()=>["","none",_,W,H],Xe=()=>["none",ce,W,H],Ie=()=>["none",ce,W,H],rt=()=>[ce,W,H],ye=()=>[rn,"full",...h()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Ur],breakpoint:[Ur],color:[bl],container:[Ur],"drop-shadow":[Ur],ease:["in","out","in-out"],font:[nf],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Ur],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Ur],shadow:[Ur],spacing:["px",ce],text:[Ur],"text-shadow":[Ur],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",rn,H,W,g]}],container:["container"],columns:[{columns:[ce,H,W,l]}],"break-after":[{"break-after":F()}],"break-before":[{"break-before":F()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:O()}],overflow:[{overflow:X()}],"overflow-x":[{"overflow-x":X()}],"overflow-y":[{"overflow-y":X()}],overscroll:[{overscroll:P()}],"overscroll-x":[{"overscroll-x":P()}],"overscroll-y":[{"overscroll-y":P()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:I()}],"inset-x":[{"inset-x":I()}],"inset-y":[{"inset-y":I()}],start:[{"inset-s":I(),start:I()}],end:[{"inset-e":I(),end:I()}],"inset-bs":[{"inset-bs":I()}],"inset-be":[{"inset-be":I()}],top:[{top:I()}],right:[{right:I()}],bottom:[{bottom:I()}],left:[{left:I()}],visibility:["visible","invisible","collapse"],z:[{z:[nn,"auto",W,H]}],basis:[{basis:[rn,"full","auto",l,...h()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[ce,rn,"auto","initial","none",H]}],grow:[{grow:["",ce,W,H]}],shrink:[{shrink:["",ce,W,H]}],order:[{order:[nn,"first","last","none",W,H]}],"grid-cols":[{"grid-cols":G()}],"col-start-end":[{col:le()}],"col-start":[{"col-start":Me()}],"col-end":[{"col-end":Me()}],"grid-rows":[{"grid-rows":G()}],"row-start-end":[{row:le()}],"row-start":[{"row-start":Me()}],"row-end":[{"row-end":Me()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":je()}],"auto-rows":[{"auto-rows":je()}],gap:[{gap:h()}],"gap-x":[{"gap-x":h()}],"gap-y":[{"gap-y":h()}],"justify-content":[{justify:[...E(),"normal"]}],"justify-items":[{"justify-items":[...j(),"normal"]}],"justify-self":[{"justify-self":["auto",...j()]}],"align-content":[{content:["normal",...E()]}],"align-items":[{items:[...j(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...j(),{baseline:["","last"]}]}],"place-content":[{"place-content":E()}],"place-items":[{"place-items":[...j(),"baseline"]}],"place-self":[{"place-self":["auto",...j()]}],p:[{p:h()}],px:[{px:h()}],py:[{py:h()}],ps:[{ps:h()}],pe:[{pe:h()}],pbs:[{pbs:h()}],pbe:[{pbe:h()}],pt:[{pt:h()}],pr:[{pr:h()}],pb:[{pb:h()}],pl:[{pl:h()}],m:[{m:Y()}],mx:[{mx:Y()}],my:[{my:Y()}],ms:[{ms:Y()}],me:[{me:Y()}],mbs:[{mbs:Y()}],mbe:[{mbe:Y()}],mt:[{mt:Y()}],mr:[{mr:Y()}],mb:[{mb:Y()}],ml:[{ml:Y()}],"space-x":[{"space-x":h()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":h()}],"space-y-reverse":["space-y-reverse"],size:[{size:ne()}],"inline-size":[{inline:["auto",...Q()]}],"min-inline-size":[{"min-inline":["auto",...Q()]}],"max-inline-size":[{"max-inline":["none",...Q()]}],"block-size":[{block:["auto",...C()]}],"min-block-size":[{"min-block":["auto",...C()]}],"max-block-size":[{"max-block":["none",...C()]}],w:[{w:[l,"screen",...ne()]}],"min-w":[{"min-w":[l,"screen","none",...ne()]}],"max-w":[{"max-w":[l,"screen","none","prose",{screen:[o]},...ne()]}],h:[{h:["screen","lh",...ne()]}],"min-h":[{"min-h":["screen","lh","none",...ne()]}],"max-h":[{"max-h":["screen","lh",...ne()]}],"font-size":[{text:["base",r,ba,yn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[n,ff,sf]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",_s,H]}],"font-family":[{font:[df,of,t]}],"font-features":[{"font-features":[H]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[a,W,H]}],"line-clamp":[{"line-clamp":[ce,"none",W,Jo]}],leading:[{leading:[i,...h()]}],"list-image":[{"list-image":["none",W,H]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",W,H]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:$()}],"text-color":[{text:$()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...te(),"wavy"]}],"text-decoration-thickness":[{decoration:[ce,"from-font","auto",W,yn]}],"text-decoration-color":[{decoration:$()}],"underline-offset":[{"underline-offset":[ce,"auto",W,H]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:h()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",W,H]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",W,H]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:me()}],"bg-repeat":[{bg:he()}],"bg-size":[{bg:Je()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},nn,W,H],radial:["",W,H],conic:[nn,W,H]},uf,lf]}],"bg-color":[{bg:$()}],"gradient-from-pos":[{from:tt()}],"gradient-via-pos":[{via:tt()}],"gradient-to-pos":[{to:tt()}],"gradient-from":[{from:$()}],"gradient-via":[{via:$()}],"gradient-to":[{to:$()}],rounded:[{rounded:qe()}],"rounded-s":[{"rounded-s":qe()}],"rounded-e":[{"rounded-e":qe()}],"rounded-t":[{"rounded-t":qe()}],"rounded-r":[{"rounded-r":qe()}],"rounded-b":[{"rounded-b":qe()}],"rounded-l":[{"rounded-l":qe()}],"rounded-ss":[{"rounded-ss":qe()}],"rounded-se":[{"rounded-se":qe()}],"rounded-ee":[{"rounded-ee":qe()}],"rounded-es":[{"rounded-es":qe()}],"rounded-tl":[{"rounded-tl":qe()}],"rounded-tr":[{"rounded-tr":qe()}],"rounded-br":[{"rounded-br":qe()}],"rounded-bl":[{"rounded-bl":qe()}],"border-w":[{border:Z()}],"border-w-x":[{"border-x":Z()}],"border-w-y":[{"border-y":Z()}],"border-w-s":[{"border-s":Z()}],"border-w-e":[{"border-e":Z()}],"border-w-bs":[{"border-bs":Z()}],"border-w-be":[{"border-be":Z()}],"border-w-t":[{"border-t":Z()}],"border-w-r":[{"border-r":Z()}],"border-w-b":[{"border-b":Z()}],"border-w-l":[{"border-l":Z()}],"divide-x":[{"divide-x":Z()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Z()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...te(),"hidden","none"]}],"divide-style":[{divide:[...te(),"hidden","none"]}],"border-color":[{border:$()}],"border-color-x":[{"border-x":$()}],"border-color-y":[{"border-y":$()}],"border-color-s":[{"border-s":$()}],"border-color-e":[{"border-e":$()}],"border-color-bs":[{"border-bs":$()}],"border-color-be":[{"border-be":$()}],"border-color-t":[{"border-t":$()}],"border-color-r":[{"border-r":$()}],"border-color-b":[{"border-b":$()}],"border-color-l":[{"border-l":$()}],"divide-color":[{divide:$()}],"outline-style":[{outline:[...te(),"none","hidden"]}],"outline-offset":[{"outline-offset":[ce,W,H]}],"outline-w":[{outline:["",ce,ba,yn]}],"outline-color":[{outline:$()}],shadow:[{shadow:["","none",v,Ba,Va]}],"shadow-color":[{shadow:$()}],"inset-shadow":[{"inset-shadow":["none",m,Ba,Va]}],"inset-shadow-color":[{"inset-shadow":$()}],"ring-w":[{ring:Z()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:$()}],"ring-offset-w":[{"ring-offset":[ce,yn]}],"ring-offset-color":[{"ring-offset":$()}],"inset-ring-w":[{"inset-ring":Z()}],"inset-ring-color":[{"inset-ring":$()}],"text-shadow":[{"text-shadow":["none",x,Ba,Va]}],"text-shadow-color":[{"text-shadow":$()}],opacity:[{opacity:[ce,W,H]}],"mix-blend":[{"mix-blend":[...ge(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":ge()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[ce]}],"mask-image-linear-from-pos":[{"mask-linear-from":_e()}],"mask-image-linear-to-pos":[{"mask-linear-to":_e()}],"mask-image-linear-from-color":[{"mask-linear-from":$()}],"mask-image-linear-to-color":[{"mask-linear-to":$()}],"mask-image-t-from-pos":[{"mask-t-from":_e()}],"mask-image-t-to-pos":[{"mask-t-to":_e()}],"mask-image-t-from-color":[{"mask-t-from":$()}],"mask-image-t-to-color":[{"mask-t-to":$()}],"mask-image-r-from-pos":[{"mask-r-from":_e()}],"mask-image-r-to-pos":[{"mask-r-to":_e()}],"mask-image-r-from-color":[{"mask-r-from":$()}],"mask-image-r-to-color":[{"mask-r-to":$()}],"mask-image-b-from-pos":[{"mask-b-from":_e()}],"mask-image-b-to-pos":[{"mask-b-to":_e()}],"mask-image-b-from-color":[{"mask-b-from":$()}],"mask-image-b-to-color":[{"mask-b-to":$()}],"mask-image-l-from-pos":[{"mask-l-from":_e()}],"mask-image-l-to-pos":[{"mask-l-to":_e()}],"mask-image-l-from-color":[{"mask-l-from":$()}],"mask-image-l-to-color":[{"mask-l-to":$()}],"mask-image-x-from-pos":[{"mask-x-from":_e()}],"mask-image-x-to-pos":[{"mask-x-to":_e()}],"mask-image-x-from-color":[{"mask-x-from":$()}],"mask-image-x-to-color":[{"mask-x-to":$()}],"mask-image-y-from-pos":[{"mask-y-from":_e()}],"mask-image-y-to-pos":[{"mask-y-to":_e()}],"mask-image-y-from-color":[{"mask-y-from":$()}],"mask-image-y-to-color":[{"mask-y-to":$()}],"mask-image-radial":[{"mask-radial":[W,H]}],"mask-image-radial-from-pos":[{"mask-radial-from":_e()}],"mask-image-radial-to-pos":[{"mask-radial-to":_e()}],"mask-image-radial-from-color":[{"mask-radial-from":$()}],"mask-image-radial-to-color":[{"mask-radial-to":$()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":M()}],"mask-image-conic-pos":[{"mask-conic":[ce]}],"mask-image-conic-from-pos":[{"mask-conic-from":_e()}],"mask-image-conic-to-pos":[{"mask-conic-to":_e()}],"mask-image-conic-from-color":[{"mask-conic-from":$()}],"mask-image-conic-to-color":[{"mask-conic-to":$()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:me()}],"mask-repeat":[{mask:he()}],"mask-size":[{mask:Je()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",W,H]}],filter:[{filter:["","none",W,H]}],blur:[{blur:Ae()}],brightness:[{brightness:[ce,W,H]}],contrast:[{contrast:[ce,W,H]}],"drop-shadow":[{"drop-shadow":["","none",A,Ba,Va]}],"drop-shadow-color":[{"drop-shadow":$()}],grayscale:[{grayscale:["",ce,W,H]}],"hue-rotate":[{"hue-rotate":[ce,W,H]}],invert:[{invert:["",ce,W,H]}],saturate:[{saturate:[ce,W,H]}],sepia:[{sepia:["",ce,W,H]}],"backdrop-filter":[{"backdrop-filter":["","none",W,H]}],"backdrop-blur":[{"backdrop-blur":Ae()}],"backdrop-brightness":[{"backdrop-brightness":[ce,W,H]}],"backdrop-contrast":[{"backdrop-contrast":[ce,W,H]}],"backdrop-grayscale":[{"backdrop-grayscale":["",ce,W,H]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[ce,W,H]}],"backdrop-invert":[{"backdrop-invert":["",ce,W,H]}],"backdrop-opacity":[{"backdrop-opacity":[ce,W,H]}],"backdrop-saturate":[{"backdrop-saturate":[ce,W,H]}],"backdrop-sepia":[{"backdrop-sepia":["",ce,W,H]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":h()}],"border-spacing-x":[{"border-spacing-x":h()}],"border-spacing-y":[{"border-spacing-y":h()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",W,H]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[ce,"initial",W,H]}],ease:[{ease:["linear","initial",z,W,H]}],delay:[{delay:[ce,W,H]}],animate:[{animate:["none",N,W,H]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[S,W,H]}],"perspective-origin":[{"perspective-origin":O()}],rotate:[{rotate:Xe()}],"rotate-x":[{"rotate-x":Xe()}],"rotate-y":[{"rotate-y":Xe()}],"rotate-z":[{"rotate-z":Xe()}],scale:[{scale:Ie()}],"scale-x":[{"scale-x":Ie()}],"scale-y":[{"scale-y":Ie()}],"scale-z":[{"scale-z":Ie()}],"scale-3d":["scale-3d"],skew:[{skew:rt()}],"skew-x":[{"skew-x":rt()}],"skew-y":[{"skew-y":rt()}],transform:[{transform:[W,H,"","none","gpu","cpu"]}],"transform-origin":[{origin:O()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:ye()}],"translate-x":[{"translate-x":ye()}],"translate-y":[{"translate-y":ye()}],"translate-z":[{"translate-z":ye()}],"translate-none":["translate-none"],accent:[{accent:$()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:$()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",W,H]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":h()}],"scroll-mx":[{"scroll-mx":h()}],"scroll-my":[{"scroll-my":h()}],"scroll-ms":[{"scroll-ms":h()}],"scroll-me":[{"scroll-me":h()}],"scroll-mbs":[{"scroll-mbs":h()}],"scroll-mbe":[{"scroll-mbe":h()}],"scroll-mt":[{"scroll-mt":h()}],"scroll-mr":[{"scroll-mr":h()}],"scroll-mb":[{"scroll-mb":h()}],"scroll-ml":[{"scroll-ml":h()}],"scroll-p":[{"scroll-p":h()}],"scroll-px":[{"scroll-px":h()}],"scroll-py":[{"scroll-py":h()}],"scroll-ps":[{"scroll-ps":h()}],"scroll-pe":[{"scroll-pe":h()}],"scroll-pbs":[{"scroll-pbs":h()}],"scroll-pbe":[{"scroll-pbe":h()}],"scroll-pt":[{"scroll-pt":h()}],"scroll-pr":[{"scroll-pr":h()}],"scroll-pb":[{"scroll-pb":h()}],"scroll-pl":[{"scroll-pl":h()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",W,H]}],fill:[{fill:["none",...$()]}],"stroke-w":[{stroke:[ce,ba,yn,Jo]}],stroke:[{stroke:["none",...$()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},mf=Wu(pf);function Ue(...e){return mf(il(e))}const Gs="dartlab-conversations",Qo=50;function hf(){return Date.now().toString(36)+Math.random().toString(36).slice(2,8)}function gf(){try{const e=localStorage.getItem(Gs);return e?JSON.parse(e):{conversations:[],activeId:null}}catch{return{conversations:[],activeId:null}}}const xf=["systemPrompt","userContent","contexts","snapshot","toolEvents","startedAt","loading"];function ei(e){return e.map(t=>({...t,messages:t.messages.map(r=>{if(r.role!=="assistant")return r;const n={};for(const[a,i]of Object.entries(r))xf.includes(a)||(n[a]=i);return n})}))}function ti(e){try{const t={conversations:ei(e.conversations),activeId:e.activeId};localStorage.setItem(Gs,JSON.stringify(t))}catch{if(e.conversations.length>5){e.conversations=e.conversations.slice(0,e.conversations.length-5);try{const t={conversations:ei(e.conversations),activeId:e.activeId};localStorage.setItem(Gs,JSON.stringify(t))}catch{}}}}function bf(){const e=gf();let t=U(xt(e.conversations)),r=U(xt(e.activeId));s(r)&&!s(t).find(S=>S.id===s(r))&&f(r,null);let n=null;function a(){n&&clearTimeout(n),n=setTimeout(()=>{ti({conversations:s(t),activeId:s(r)}),n=null},300)}function i(){n&&clearTimeout(n),n=null,ti({conversations:s(t),activeId:s(r)})}function o(){return s(t).find(S=>S.id===s(r))||null}function l(){const S={id:hf(),title:"새 대화",messages:[],createdAt:Date.now(),updatedAt:Date.now()};return f(t,[S,...s(t)],!0),s(t).length>Qo&&f(t,s(t).slice(0,Qo),!0),f(r,S.id,!0),i(),S.id}function d(S){s(t).find(g=>g.id===S)&&(f(r,S,!0),i())}function c(S,g,z=null){const N=o();if(!N)return;const F={role:S,text:g};z&&(F.meta=z),N.messages=[...N.messages,F],N.updatedAt=Date.now(),N.title==="새 대화"&&S==="user"&&(N.title=g.length>30?g.slice(0,30)+"...":g),f(t,[...s(t)],!0),i()}function v(S){const g=o();if(!g||g.messages.length===0)return;const z=g.messages[g.messages.length-1];Object.assign(z,S),g.updatedAt=Date.now(),f(t,[...s(t)],!0),a()}function m(S){f(t,s(t).filter(g=>g.id!==S),!0),s(r)===S&&f(r,s(t).length>0?s(t)[0].id:null,!0),i()}function x(){const S=o();!S||S.messages.length===0||(S.messages=S.messages.slice(0,-1),S.updatedAt=Date.now(),f(t,[...s(t)],!0),i())}function A(S,g){const z=s(t).find(N=>N.id===S);z&&(z.title=g,f(t,[...s(t)],!0),i())}function _(){f(t,[],!0),f(r,null),i()}return{get conversations(){return s(t)},get activeId(){return s(r)},get active(){return o()},createConversation:l,setActive:d,addMessage:c,updateLastMessage:v,removeLastMessage:x,deleteConversation:m,updateTitle:A,clearAll:_,flush:i}}var _f=k("<a><!></a>"),yf=k("<button><!></button>");function wf(e,t){kr(t,!0);let r=et(t,"variant",3,"default"),n=et(t,"size",3,"default"),a=cu(t,["$$slots","$$events","$$legacy","variant","size","class","children"]);const i={default:"bg-gradient-to-r from-dl-primary to-dl-primary-dark text-white shadow-lg shadow-dl-primary/25 hover:shadow-dl-primary/40 hover:-translate-y-0.5",secondary:"bg-dl-bg-card border border-dl-border text-dl-text-muted hover:text-dl-text hover:bg-dl-bg-card-hover",ghost:"text-dl-text-muted hover:text-dl-text hover:bg-white/5",outline:"border border-dl-border text-dl-text-muted hover:text-dl-text hover:border-dl-primary/50"},o={default:"px-5 py-2 text-sm",sm:"px-3 py-1.5 text-xs",lg:"px-7 py-3 text-base",icon:"w-9 h-9"};var l=ie(),d=q(l);{var c=m=>{var x=_f();Ya(x,_=>({class:_,...a}),[()=>Ue("inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer no-underline",i[r()],o[n()],t.class)]);var A=u(x);Fs(A,()=>t.children),p(m,x)},v=m=>{var x=yf();Ya(x,_=>({class:_,...a}),[()=>Ue("inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer",i[r()],o[n()],t.class)]);var A=u(x);Fs(A,()=>t.children),p(m,x)};T(d,m=>{t.href?m(c):m(v,-1)})}p(e,l),Sr()}tc();/**
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
 */const kf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
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
 */const Sf=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
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
 */const ri=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();var zf=Uc("<svg><!><!></svg>");function ze(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]),n=pe(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);kr(t,!1);let a=et(t,"name",8,void 0),i=et(t,"color",8,"currentColor"),o=et(t,"size",8,24),l=et(t,"strokeWidth",8,2),d=et(t,"absoluteStrokeWidth",8,!1),c=et(t,"iconNode",24,()=>[]);iu();var v=zf();Ya(v,(A,_,S)=>({...kf,...A,...n,width:o(),height:o(),stroke:i(),"stroke-width":_,class:S}),[()=>Sf(n)?void 0:{"aria-hidden":"true"},()=>(kn(d()),kn(l()),kn(o()),On(()=>d()?Number(l())*24/Number(o()):l())),()=>(kn(ri),kn(a()),kn(r),On(()=>ri("lucide-icon","lucide",a()?`lucide-${a()}`:"",r.class)))]);var m=u(v);pt(m,1,c,vt,(A,_)=>{var S=oe(()=>mi(s(_),2));let g=()=>s(S)[0],z=()=>s(S)[1];var N=ie(),F=q(N);Zc(F,g,!0,(M,O)=>{Ya(M,()=>({...z()}))}),p(A,N)});var x=b(m);be(x,t,"default",{}),p(e,v),Sr()}function Mf(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];ze(e,Se({name:"arrow-up"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ie(),l=q(o);be(l,t,"default",{}),p(a,o)},$$slots:{default:!0}}))}function ni(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 18V5"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77"}]];ze(e,Se({name:"brain"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ie(),l=q(o);be(l,t,"default",{}),p(a,o)},$$slots:{default:!0}}))}function Af(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M20 6 9 17l-5-5"}]];ze(e,Se({name:"check"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ie(),l=q(o);be(l,t,"default",{}),p(a,o)},$$slots:{default:!0}}))}function $f(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m6 9 6 6 6-6"}]];ze(e,Se({name:"chevron-down"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ie(),l=q(o);be(l,t,"default",{}),p(a,o)},$$slots:{default:!0}}))}function Ef(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m18 15-6-6-6 6"}]];ze(e,Se({name:"chevron-up"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ie(),l=q(o);be(l,t,"default",{}),p(a,o)},$$slots:{default:!0}}))}function wn(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];ze(e,Se({name:"circle-alert"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ie(),l=q(o);be(l,t,"default",{}),p(a,o)},$$slots:{default:!0}}))}function ys(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];ze(e,Se({name:"circle-check"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ie(),l=q(o);be(l,t,"default",{}),p(a,o)},$$slots:{default:!0}}))}function Cf(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 6v6l4 2"}]];ze(e,Se({name:"clock"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ie(),l=q(o);be(l,t,"default",{}),p(a,o)},$$slots:{default:!0}}))}function Tf(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m16 18 6-6-6-6"}],["path",{d:"m8 6-6 6 6 6"}]];ze(e,Se({name:"code"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ie(),l=q(o);be(l,t,"default",{}),p(a,o)},$$slots:{default:!0}}))}function Pf(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 2v2"}],["path",{d:"M14 2v2"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"}],["path",{d:"M6 2v2"}]];ze(e,Se({name:"coffee"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ie(),l=q(o);be(l,t,"default",{}),p(a,o)},$$slots:{default:!0}}))}function Ga(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]];ze(e,Se({name:"database"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ie(),l=q(o);be(l,t,"default",{}),p(a,o)},$$slots:{default:!0}}))}function za(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];ze(e,Se({name:"download"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ie(),l=q(o);be(l,t,"default",{}),p(a,o)},$$slots:{default:!0}}))}function ai(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];ze(e,Se({name:"external-link"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ie(),l=q(o);be(l,t,"default",{}),p(a,o)},$$slots:{default:!0}}))}function Al(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M8 13h2"}],["path",{d:"M14 13h2"}],["path",{d:"M8 17h2"}],["path",{d:"M14 17h2"}]];ze(e,Se({name:"file-spreadsheet"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ie(),l=q(o);be(l,t,"default",{}),p(a,o)},$$slots:{default:!0}}))}function qa(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];ze(e,Se({name:"file-text"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ie(),l=q(o);be(l,t,"default",{}),p(a,o)},$$slots:{default:!0}}))}function Nf(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];ze(e,Se({name:"github"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ie(),l=q(o);be(l,t,"default",{}),p(a,o)},$$slots:{default:!0}}))}function si(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"}],["path",{d:"m21 2-9.6 9.6"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5"}]];ze(e,Se({name:"key"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ie(),l=q(o);be(l,t,"default",{}),p(a,o)},$$slots:{default:!0}}))}function If(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1"}]];ze(e,Se({name:"layout-template"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ie(),l=q(o);be(l,t,"default",{}),p(a,o)},$$slots:{default:!0}}))}function tr(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];ze(e,Se({name:"loader-circle"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ie(),l=q(o);be(l,t,"default",{}),p(a,o)},$$slots:{default:!0}}))}function Lf(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];ze(e,Se({name:"log-in"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ie(),l=q(o);be(l,t,"default",{}),p(a,o)},$$slots:{default:!0}}))}function Of(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];ze(e,Se({name:"log-out"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ie(),l=q(o);be(l,t,"default",{}),p(a,o)},$$slots:{default:!0}}))}function Rf(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];ze(e,Se({name:"menu"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ie(),l=q(o);be(l,t,"default",{}),p(a,o)},$$slots:{default:!0}}))}function oi(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}]];ze(e,Se({name:"message-square"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ie(),l=q(o);be(l,t,"default",{}),p(a,o)},$$slots:{default:!0}}))}function jf(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"m16 15-3-3 3-3"}]];ze(e,Se({name:"panel-left-close"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ie(),l=q(o);be(l,t,"default",{}),p(a,o)},$$slots:{default:!0}}))}function ii(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];ze(e,Se({name:"plus"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ie(),l=q(o);be(l,t,"default",{}),p(a,o)},$$slots:{default:!0}}))}function Df(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ze(e,Se({name:"refresh-cw"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ie(),l=q(o);be(l,t,"default",{}),p(a,o)},$$slots:{default:!0}}))}function Ff(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7"}]];ze(e,Se({name:"save"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ie(),l=q(o);be(l,t,"default",{}),p(a,o)},$$slots:{default:!0}}))}function $l(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];ze(e,Se({name:"search"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ie(),l=q(o);be(l,t,"default",{}),p(a,o)},$$slots:{default:!0}}))}function Vf(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];ze(e,Se({name:"settings"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ie(),l=q(o);be(l,t,"default",{}),p(a,o)},$$slots:{default:!0}}))}function li(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"}],["path",{d:"m9 11 3 3L22 4"}]];ze(e,Se({name:"square-check-big"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ie(),l=q(o);be(l,t,"default",{}),p(a,o)},$$slots:{default:!0}}))}function El(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];ze(e,Se({name:"square"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ie(),l=q(o);be(l,t,"default",{}),p(a,o)},$$slots:{default:!0}}))}function Bf(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 19h8"}],["path",{d:"m4 17 6-6-6-6"}]];ze(e,Se({name:"terminal"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ie(),l=q(o);be(l,t,"default",{}),p(a,o)},$$slots:{default:!0}}))}function Cl(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];ze(e,Se({name:"trash-2"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ie(),l=q(o);be(l,t,"default",{}),p(a,o)},$$slots:{default:!0}}))}function Gf(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];ze(e,Se({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ie(),l=q(o);be(l,t,"default",{}),p(a,o)},$$slots:{default:!0}}))}function Hf(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"}]];ze(e,Se({name:"wrench"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ie(),l=q(o);be(l,t,"default",{}),p(a,o)},$$slots:{default:!0}}))}function Xa(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ze(e,Se({name:"x"},()=>r,{get iconNode(){return n},children:(a,i)=>{var o=ie(),l=q(o);be(l,t,"default",{}),p(a,o)},$$slots:{default:!0}}))}var Uf=k("<!> 새 대화",1),Wf=k('<div class="px-3 pb-2"><div class="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-dl-bg-card border border-dl-border"><!> <input type="text" placeholder="대화 검색..." class="flex-1 bg-transparent border-none outline-none text-[12px] text-dl-text placeholder:text-dl-text-dim"/></div></div>'),qf=k('<div role="button" tabindex="0"><!> <span class="flex-1 truncate"> </span> <button class="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-dl-bg-card-hover text-dl-text-dim hover:text-dl-primary transition-all"><!></button></div>'),Kf=k('<div><div class="px-2 py-1.5 text-[11px] font-medium text-dl-text-dim uppercase tracking-wider"> </div> <!></div>'),Yf=k('<div class="flex-shrink-0 px-4 py-2.5 border-t border-dl-border/50 text-[10px] text-dl-text-dim"> </div>'),Jf=k('<div class="flex flex-col h-full min-w-[260px]"><div class="flex items-center gap-2.5 px-4 pt-4 pb-2"><img src="/avatar.png" alt="DartLab" class="w-8 h-8 rounded-full shadow-sm"/> <span class="text-[15px] font-bold text-dl-text tracking-tight">DartLab</span></div> <div class="p-3 pb-2"><!></div> <!> <div class="flex-1 overflow-y-auto px-2 space-y-4"></div> <!></div>'),Xf=k("<button><!></button>"),Zf=k('<div class="flex flex-col items-center h-full min-w-[52px] py-3 gap-2"><img src="/avatar.png" alt="DartLab" class="w-7 h-7 rounded-full shadow-sm mb-1"/> <button class="p-2.5 rounded-lg text-dl-text-muted hover:text-dl-text hover:bg-dl-bg-card/50 transition-colors" title="새 대화"><!></button> <div class="flex-1 overflow-y-auto flex flex-col items-center gap-1 w-full px-1"></div></div>'),Qf=k("<aside><!></aside>");function ev(e,t){kr(t,!0);let r=et(t,"conversations",19,()=>[]),n=et(t,"activeId",3,null),a=et(t,"open",3,!0),i=et(t,"version",3,""),o=U("");function l(_){const S=new Date().setHours(0,0,0,0),g=S-864e5,z=S-7*864e5,N={오늘:[],어제:[],"이번 주":[],이전:[]};for(const M of _)M.updatedAt>=S?N.오늘.push(M):M.updatedAt>=g?N.어제.push(M):M.updatedAt>=z?N["이번 주"].push(M):N.이전.push(M);const F=[];for(const[M,O]of Object.entries(N))O.length>0&&F.push({label:M,items:O});return F}let d=oe(()=>s(o).trim()?r().filter(_=>_.title.toLowerCase().includes(s(o).toLowerCase())):r()),c=oe(()=>l(s(d)));var v=Qf(),m=u(v);{var x=_=>{var S=Jf(),g=b(u(S),2),z=u(g);wf(z,{variant:"secondary",class:"w-full justify-start gap-2",get onclick(){return t.onNewChat},children:(P,h)=>{var I=Uf(),G=q(I);ii(G,{size:16}),p(P,I)},$$slots:{default:!0}});var N=b(g,2);{var F=P=>{var h=Wf(),I=u(h),G=u(I);$l(G,{size:12,class:"text-dl-text-dim flex-shrink-0"});var le=b(G,2);Wn(le,()=>s(o),Me=>f(o,Me)),p(P,h)};T(N,P=>{r().length>3&&P(F)})}var M=b(N,2);pt(M,21,()=>s(c),vt,(P,h)=>{var I=Kf(),G=u(I),le=u(G),Me=b(G,2);pt(Me,17,()=>s(h).items,vt,(je,E)=>{var j=qf(),Y=u(j);oi(Y,{size:14,class:"flex-shrink-0 opacity-50"});var ne=b(Y,2),Q=u(ne),C=b(ne,2),$=u(C);Cl($,{size:12}),V(me=>{He(j,1,me),J(Q,s(E).title)},[()=>Ge(Ue("w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left text-[13px] transition-colors group cursor-pointer",s(E).id===n()?"bg-dl-bg-card text-dl-text border-l-2 border-dl-primary":"text-dl-text-muted hover:bg-dl-bg-card/50 hover:text-dl-text border-l-2 border-transparent"))]),D("click",j,()=>{var me;return(me=t.onSelect)==null?void 0:me.call(t,s(E).id)}),D("keydown",j,me=>{var he;me.key==="Enter"&&((he=t.onSelect)==null||he.call(t,s(E).id))}),D("click",C,me=>{var he;me.stopPropagation(),(he=t.onDelete)==null||he.call(t,s(E).id)}),p(je,j)}),V(()=>J(le,s(h).label)),p(P,I)});var O=b(M,2);{var X=P=>{var h=Yf(),I=u(h);V(()=>J(I,`DartLab v${i()??""}`)),p(P,h)};T(O,P=>{i()&&P(X)})}p(_,S)},A=_=>{var S=Zf(),g=b(u(S),2),z=u(g);ii(z,{size:18});var N=b(g,2);pt(N,21,()=>r().slice(0,10),vt,(F,M)=>{var O=Xf(),X=u(O);oi(X,{size:16}),V(P=>{He(O,1,P),Aa(O,"title",s(M).title)},[()=>Ge(Ue("p-2 rounded-lg transition-colors w-full flex justify-center",s(M).id===n()?"bg-dl-bg-card text-dl-text":"text-dl-text-dim hover:text-dl-text-muted hover:bg-dl-bg-card/50"))]),D("click",O,()=>{var P;return(P=t.onSelect)==null?void 0:P.call(t,s(M).id)}),p(F,O)}),D("click",g,function(...F){var M;(M=t.onNewChat)==null||M.apply(this,F)}),p(_,S)};T(m,_=>{a()?_(x):_(A,-1)})}V(_=>He(v,1,_),[()=>Ge(Ue("flex flex-col h-full bg-dl-bg-darker border-r border-dl-border transition-all duration-300 flex-shrink-0 overflow-hidden",a()?"w-[260px]":"w-[52px]"))]),p(e,v),Sr()}gn(["click","keydown"]);var tv=k('<button class="send-btn active"><!></button>'),rv=k("<button><!></button>"),nv=k('<span class="text-[10px] text-dl-text-dim flex-shrink-0"> </span>'),av=k('<div><!> <div class="flex-1 min-w-0"><div class="text-[13px] font-medium truncate"> </div> <div class="text-[10px] text-dl-text-dim"> </div></div> <!></div>'),sv=k('<div class="absolute left-0 right-0 bottom-full mb-1.5 z-20 bg-dl-bg-card border border-dl-border rounded-xl shadow-2xl shadow-black/40 overflow-hidden animate-fadeIn"></div>'),ov=k('<div class="relative"><div><textarea rows="1" class="input-textarea"></textarea> <!></div> <!></div>');function Tl(e,t){kr(t,!0);let r=et(t,"inputText",15,""),n=et(t,"isLoading",3,!1),a=et(t,"large",3,!1),i=et(t,"placeholder",3,"메시지를 입력하세요..."),o=U(xt([])),l=U(!1),d=U(-1),c=null,v=U(void 0);function m(h){var I;if(s(l)&&s(o).length>0){if(h.key==="ArrowDown"){h.preventDefault(),f(d,(s(d)+1)%s(o).length);return}if(h.key==="ArrowUp"){h.preventDefault(),f(d,s(d)<=0?s(o).length-1:s(d)-1,!0);return}if(h.key==="Enter"&&s(d)>=0){h.preventDefault(),_(s(o)[s(d)]);return}if(h.key==="Escape"){f(l,!1),f(d,-1);return}}h.key==="Enter"&&!h.shiftKey&&(h.preventDefault(),f(l,!1),(I=t.onSend)==null||I.call(t))}function x(h){h.target.style.height="auto",h.target.style.height=Math.min(h.target.scrollHeight,200)+"px"}function A(h){x(h);const I=r();c&&clearTimeout(c),I.length>=2&&!/\s/.test(I.slice(-1))?c=setTimeout(async()=>{var G;try{const le=await Su(I.trim());((G=le.results)==null?void 0:G.length)>0?(f(o,le.results.slice(0,6),!0),f(l,!0),f(d,-1)):f(l,!1)}catch{f(l,!1)}},300):f(l,!1)}function _(h){r(`${h.corpName} `),f(l,!1),f(d,-1),s(v)&&s(v).focus()}function S(){setTimeout(()=>{f(l,!1)},200)}var g=ov(),z=u(g),N=u(z);so(N,h=>f(v,h),()=>s(v));var F=b(N,2);{var M=h=>{var I=tv(),G=u(I);El(G,{size:14}),D("click",I,function(...le){var Me;(Me=t.onStop)==null||Me.apply(this,le)}),p(h,I)},O=h=>{var I=rv(),G=u(I);{let le=oe(()=>a()?18:16);Mf(G,{get size(){return s(le)},strokeWidth:2.5})}V((le,Me)=>{He(I,1,le),I.disabled=Me},[()=>Ge(Ue("send-btn",r().trim()&&"active")),()=>!r().trim()]),D("click",I,()=>{var le;f(l,!1),(le=t.onSend)==null||le.call(t)}),p(h,I)};T(F,h=>{n()&&t.onStop?h(M):h(O,-1)})}var X=b(z,2);{var P=h=>{var I=sv();pt(I,21,()=>s(o),vt,(G,le,Me)=>{var je=av(),E=u(je);$l(E,{size:13,class:"flex-shrink-0 text-dl-text-dim"});var j=b(E,2),Y=u(j),ne=u(Y),Q=b(Y,2),C=u(Q),$=b(j,2);{var me=he=>{var Je=nv(),tt=u(Je);V(()=>J(tt,s(le).sector)),p(he,Je)};T($,he=>{s(le).sector&&he(me)})}V(he=>{He(je,1,he),J(ne,s(le).corpName),J(C,`${s(le).stockCode??""} · ${(s(le).market||"")??""}`)},[()=>Ge(Ue("flex items-center gap-3 px-4 py-2.5 cursor-pointer transition-colors",Me===s(d)?"bg-dl-primary/10 text-dl-text":"text-dl-text-muted hover:bg-white/[0.03]"))]),D("mousedown",je,()=>_(s(le))),Ka("mouseenter",je,()=>{f(d,Me,!0)}),p(G,je)}),p(h,I)};T(X,h=>{s(l)&&s(o).length>0&&h(P)})}V(h=>{He(z,1,h),Aa(N,"placeholder",i())},[()=>Ge(Ue("input-box",a()&&"large"))]),D("keydown",N,m),D("input",N,A),Ka("blur",N,S),Wn(N,r),p(e,g),Sr()}gn(["keydown","input","click","mousedown"]);var iv=k('<button class="text-left px-4 py-3 rounded-xl border border-dl-border bg-dl-bg-card/50 text-[13px] text-dl-text-muted hover:text-dl-text hover:border-dl-primary/40 hover:bg-dl-bg-card hover:-translate-y-0.5 hover:shadow-lg hover:shadow-dl-primary/5 transition-all duration-200 cursor-pointer"> </button>'),lv=k('<div class="flex-1 flex flex-col items-center justify-center px-5"><div class="w-full max-w-[720px] flex flex-col items-center"><img src="/avatar.png" alt="DartLab" class="w-16 h-16 rounded-full mb-5" style="filter: drop-shadow(0 0 24px rgba(234,70,71,0.3));"/> <h1 class="text-2xl font-bold text-dl-text mb-1.5">무엇을 분석할까요?</h1> <p class="text-sm text-dl-text-muted mb-8">종목명과 질문을 입력하거나, 자유롭게 대화하세요</p> <!> <div class="grid grid-cols-2 gap-2.5 mt-6 w-full max-w-[620px]"></div></div></div>');function dv(e,t){kr(t,!0);let r=et(t,"inputText",15,"");const n=["삼성전자 재무 건전성 분석해줘","LG에너지솔루션 배당 추세는?","카카오 부채 리스크 평가해줘","현대차 영업이익률 추이 분석"];function a(c){r(c)}var i=lv(),o=u(i),l=b(u(o),6);Tl(l,{large:!0,placeholder:"삼성전자 재무 건전성을 분석해줘...",get onSend(){return t.onSend},get inputText(){return r()},set inputText(c){r(c)}});var d=b(l,2);pt(d,21,()=>n,vt,(c,v)=>{var m=iv(),x=u(m);V(()=>J(x,s(v))),D("click",m,()=>a(s(v))),p(c,m)}),p(e,i),Sr()}gn(["click"]);var cv=k("<span><!></span>");function di(e,t){kr(t,!0);let r=et(t,"variant",3,"default");const n={default:"bg-dl-primary/10 text-dl-primary-light border-dl-primary/20",accent:"bg-dl-accent/10 text-dl-accent-light border-dl-accent/20",success:"bg-dl-success/10 text-dl-success border-dl-success/20",muted:"bg-dl-bg-card-hover text-dl-text-muted border-dl-border",dim:"bg-dl-bg-card/60 text-dl-text-dim border-dl-border/50"};var a=cv(),i=u(a);Fs(i,()=>t.children),V(o=>He(a,1,o),[()=>Ge(Ue("inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border",n[r()],t.class))]),p(e,a),Sr()}var uv=k('<div class="flex items-start gap-3 animate-fadeIn"><div class="w-7 h-7 rounded-full bg-dl-bg-card-hover border border-dl-border flex items-center justify-center text-[10px] font-semibold text-dl-text-muted flex-shrink-0 mt-0.5">You</div> <div class="flex-1 pt-0.5"><p class="text-[15px] text-dl-text leading-relaxed"> </p></div></div>'),fv=k('<button class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-dl-border/50 bg-dl-bg-card/40 text-[11px] text-dl-text-muted hover:text-dl-text hover:border-dl-primary/40 hover:bg-dl-primary/[0.05] transition-all cursor-pointer"><!> </button>'),vv=k('<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-dl-border/50 bg-dl-bg-card/40 text-[11px] text-dl-text-dim"><!> </span>'),pv=k('<div class="flex flex-wrap items-center gap-1.5 mb-2"><!> <!> <!></div>'),mv=k('<div class="px-3 py-2 bg-dl-bg-card/50"><div class="text-[10px] text-dl-text-dim leading-tight"> </div> <div> </div></div>'),hv=k('<span class="flex items-center gap-1 text-[10px] text-amber-400"><!> </span>'),gv=k('<div class="px-3 py-1.5 border-t border-dl-border/30 flex flex-wrap gap-2"></div>'),xv=k('<button class="mb-3 rounded-xl border border-dl-border/60 bg-dl-bg-card/40 overflow-hidden animate-fadeIn shadow-sm shadow-black/10 w-full text-left cursor-pointer hover:border-dl-primary/30 transition-colors"><div class="grid gap-px" style="grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));"></div> <!></button>'),bv=k('<span class="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-dl-accent/30 bg-dl-accent/[0.06] text-[11px] text-dl-accent"><!> </span>'),_v=k('<div class="mb-3"><div class="flex flex-wrap items-center gap-1.5"></div></div>'),yv=k('<span class="w-3.5 h-3.5 rounded-full bg-dl-success/20 flex items-center justify-center flex-shrink-0"><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="var(--color-dl-success)" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg></span> <span class="text-dl-text-muted"> </span>',1),wv=k('<!> <span class="text-dl-text-dim"> </span>',1),kv=k('<div class="flex items-center gap-2 text-[11px]"><!></div>'),Sv=k('<div class="animate-fadeIn"><div class="space-y-1 mb-3"></div> <div class="space-y-2.5"><div class="skeleton-line w-full"></div> <div class="skeleton-line w-[85%]"></div> <div class="skeleton-line w-[70%]"></div></div></div>'),zv=k('<div class="flex items-center gap-2 mb-2 text-[11px] text-dl-text-dim"><!> <span> </span></div>'),Mv=k('<span class="flex items-center gap-1 text-[10px] text-dl-text-dim"><!> </span>'),Av=k('<span class="text-dl-accent/60"> </span>'),$v=k('<span class="text-dl-success/60"> </span>'),Ev=k('<span class="flex items-center gap-1.5 text-[10px] text-dl-text-dim font-mono" title="추정 토큰 (입력 ↑ / 출력 ↓)"><!> <!></span>'),Cv=k('<button class="flex items-center gap-1 px-2 py-0.5 rounded-full border border-dl-border/40 text-[10px] text-dl-text-dim hover:text-dl-primary-light hover:border-dl-primary/30 transition-all"><!> 재생성</button>'),Tv=k('<button class="flex items-center gap-1 px-2 py-0.5 rounded-full border border-dl-border/40 text-[10px] text-dl-text-dim hover:text-dl-primary-light hover:border-dl-primary/30 transition-all"><!> 시스템 프롬프트</button>'),Pv=k('<button class="flex items-center gap-1 px-2 py-0.5 rounded-full border border-dl-border/40 text-[10px] text-dl-text-dim hover:text-dl-accent hover:border-dl-accent/30 transition-all"><!> </button>'),Nv=k('<div class="flex flex-wrap items-center gap-2 mt-3 pt-2 border-t border-dl-border/20"><!> <!> <!> <!> <!></div>'),Iv=k("<!>  <div><!></div> <!>",1),Lv=k('<div class="flex items-start gap-3 animate-fadeIn"><img src="/avatar.png" alt="DartLab" class="w-7 h-7 rounded-full flex-shrink-0 mt-0.5"/> <div class="flex-1 pt-0.5 min-w-0"><!> <!> <!> <!></div></div>'),Ov=k('<span class="text-[10px] text-dl-text-dim"> </span>'),Rv=k('<div class="flex items-center gap-0.5 bg-dl-bg-darker rounded-lg p-0.5"><button><!> 렌더링</button> <button><!> 원문</button></div>'),jv=k("<button> </button>"),Dv=k('<div class="px-5 pb-2.5 overflow-x-auto scrollbar-hide"><div class="flex items-center gap-1.5"></div></div>'),Fv=k("<button>시스템 프롬프트</button>"),Vv=k("<button>LLM 입력</button>"),Bv=k('<div class="px-5 pb-2.5"><div class="flex items-center gap-1.5"><!> <!></div></div>'),Gv=k('<div class="prose-dartlab text-[13px] leading-[1.7] pt-3"><!></div>'),Hv=k('<pre class="text-[11px] text-dl-text-muted font-mono bg-dl-bg-darker rounded-xl p-4 mt-3 overflow-x-auto whitespace-pre-wrap break-words"> </pre>'),Uv=k('<div class="fixed inset-0 z-[300] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn"><div class="w-full max-w-3xl max-h-[80vh] mx-4 bg-dl-bg-card border border-dl-border rounded-2xl shadow-2xl shadow-black/40 overflow-hidden flex flex-col"><div class="flex-shrink-0 border-b border-dl-border/50"><div class="flex items-center justify-between px-5 pt-4 pb-3"><div class="flex items-center gap-2 text-[14px] font-medium text-dl-text"><!> <span> </span> <!></div> <div class="flex items-center gap-2"><!> <button class="p-1 rounded-lg text-dl-text-dim hover:text-dl-text hover:bg-white/5 transition-colors"><!></button></div></div> <!> <!></div> <div class="flex-1 overflow-y-auto px-5 pb-5 min-h-0"><!></div></div></div>'),Wv=k("<!> <!>",1);function qv(e,t){kr(t,!0);let r=U(null),n=U("context"),a=U("raw"),i=oe(()=>{var E,j,Y,ne,Q,C;if(!t.message.loading)return"";if(t.message.text)return"응답 작성 중";if(((E=t.message.toolEvents)==null?void 0:E.length)>0){const $=[...t.message.toolEvents].reverse().find(he=>he.type==="call"),me=((j=$==null?void 0:$.arguments)==null?void 0:j.module)||((Y=$==null?void 0:$.arguments)==null?void 0:Y.keyword)||"";return`도구 실행 중 — ${($==null?void 0:$.name)||""}${me?` (${me})`:""}`}if(((ne=t.message.contexts)==null?void 0:ne.length)>0){const $=t.message.contexts[t.message.contexts.length-1];return`데이터 분석 중 — ${($==null?void 0:$.label)||($==null?void 0:$.module)||""}`}return t.message.snapshot?"핵심 수치 확인 완료, 데이터 검색 중":(Q=t.message.meta)!=null&&Q.company?`${t.message.meta.company} 데이터 검색 중`:(C=t.message.meta)!=null&&C.includedModules?"분석 모듈 선택 완료":"생각 중"}),o=oe(()=>{var E;return t.message.company||((E=t.message.meta)==null?void 0:E.company)||null}),l=oe(()=>{var E,j;return t.message.systemPrompt||((E=t.message.contexts)==null?void 0:E.length)>0||((j=t.message.meta)==null?void 0:j.includedModules)}),d=oe(()=>{var j;const E=(j=t.message.meta)==null?void 0:j.dataYearRange;return E?typeof E=="string"?E:E.min_year&&E.max_year?`${E.min_year}~${E.max_year}년`:null:null});function c(E){if(!E)return 0;const j=(E.match(/[\uac00-\ud7af]/g)||[]).length,Y=E.length-j;return Math.round(j*1.5+Y/3.5)}function v(E){return E>=1e3?(E/1e3).toFixed(1)+"k":String(E)}let m=oe(()=>{var j;let E=0;if(t.message.systemPrompt&&(E+=c(t.message.systemPrompt)),t.message.userContent)E+=c(t.message.userContent);else if(((j=t.message.contexts)==null?void 0:j.length)>0)for(const Y of t.message.contexts)E+=c(Y.text);return E}),x=oe(()=>c(t.message.text));function A(E){const j=E.replace(/<\/?strong>/g,"").replace(/\*\*/g,"").trim();return/^[−\-+]?[\d,]+\.?\d*[%조억만원배x]*$/.test(j)||j==="-"||j==="0"}function _(E){if(!E)return"";let j=[],Y=[],ne=E.replace(/```(\w*)\n([\s\S]*?)```/g,(C,$,me)=>{const he=j.length;return j.push(me.trimEnd()),`
%%CODE_${he}%%
`});ne=ne.replace(/((?:^\|.+\|$\n?)+)/gm,C=>{const $=C.trim().split(`
`).filter(Z=>Z.trim());let me=null,he=-1,Je=[];for(let Z=0;Z<$.length;Z++)if($[Z].slice(1,-1).split("|").map(ge=>ge.trim()).every(ge=>/^[\-:]+$/.test(ge))){he=Z;break}he>0?(me=$[he-1],Je=$.slice(he+1)):(he===0||(me=$[0]),Je=$.slice(1));let tt="<table>";if(me){const Z=me.slice(1,-1).split("|").map(te=>te.trim());tt+="<thead><tr>"+Z.map(te=>`<th>${te.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>")}</th>`).join("")+"</tr></thead>"}if(Je.length>0){tt+="<tbody>";for(const Z of Je){const te=Z.slice(1,-1).split("|").map(ge=>ge.trim());tt+="<tr>"+te.map(ge=>{let _e=ge.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>");return`<td${A(ge)?' class="num"':""}>${_e}</td>`}).join("")+"</tr>"}tt+="</tbody>"}tt+="</table>";let qe=Y.length;return Y.push(tt),`
%%TABLE_${qe}%%
`});let Q=ne.replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^### (.+)$/gm,"<h3>$1</h3>").replace(/^## (.+)$/gm,"<h2>$1</h2>").replace(/^# (.+)$/gm,"<h1>$1</h1>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/\*([^*]+)\*/g,"<em>$1</em>").replace(/^[•\-\*] (.+)$/gm,"<li>$1</li>").replace(/^\d+\. (.+)$/gm,"<li>$1</li>").replace(/^> (.+)$/gm,"<blockquote>$1</blockquote>").replace(/\n\n/g,"</p><p>").replace(/\n/g,"<br>");Q=Q.replace(/(<li>.*?<\/li>(\s*<br>)?)+/g,C=>"<ul>"+C.replace(/<br>/g,"")+"</ul>");for(let C=0;C<Y.length;C++)Q=Q.replace(`%%TABLE_${C}%%`,Y[C]);for(let C=0;C<j.length;C++){const $=j[C].replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");Q=Q.replace(`%%CODE_${C}%%`,`<div class="code-block-wrap"><button class="code-copy-btn" data-code-idx="${C}"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg></button><pre><code>${$}</code></pre></div>`)}return Q=Q.replace(new RegExp("(?<=>|^)([^<]*?)(?=<|$)","g"),(C,$)=>$.replace(new RegExp("(?<![a-zA-Z가-힣/\\-])([−\\-+]?\\d[\\d,]*\\.?\\d*)(\\s*)(억원|억|만원|만|조원|조|원|천원|%|배|bps|bp)","g"),'<span class="num-highlight">$1$2$3</span>')),"<p>"+Q+"</p>"}let S=U(void 0);const g='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>',z='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-dl-success)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';function N(E){var Q;const j=E.target.closest(".code-copy-btn");if(!j)return;const Y=j.closest(".code-block-wrap"),ne=((Q=Y==null?void 0:Y.querySelector("code"))==null?void 0:Q.textContent)||"";navigator.clipboard.writeText(ne).then(()=>{j.innerHTML=z,setTimeout(()=>{j.innerHTML=g},2e3)})}function F(E){f(r,E,!0),f(n,"context"),f(a,"rendered")}function M(){f(r,0),f(n,"system"),f(a,"raw")}function O(){f(r,0),f(n,"snapshot")}function X(){f(r,null)}let P=oe(()=>{var j,Y,ne;if(!t.message.loading)return[];const E=[];return(j=t.message.meta)!=null&&j.company&&E.push({label:`${t.message.meta.company} 인식`,done:!0}),t.message.snapshot&&E.push({label:"핵심 수치 확인",done:!0}),(Y=t.message.meta)!=null&&Y.includedModules&&E.push({label:`모듈 ${t.message.meta.includedModules.length}개 선택`,done:!0}),((ne=t.message.contexts)==null?void 0:ne.length)>0&&E.push({label:`데이터 ${t.message.contexts.length}건 로드`,done:!0}),t.message.systemPrompt&&E.push({label:"프롬프트 조립",done:!0}),t.message.text?E.push({label:"응답 작성 중",done:!1}):E.push({label:s(i)||"준비 중",done:!1}),E});var h=Wv(),I=q(h);{var G=E=>{var j=uv(),Y=b(u(j),2),ne=u(Y),Q=u(ne);V(()=>J(Q,t.message.text)),p(E,j)},le=E=>{var j=Lv(),Y=b(u(j),2),ne=u(Y);{var Q=Z=>{var te=pv(),ge=u(te);{var _e=se=>{di(se,{variant:"muted",children:(ue,Te)=>{var Oe=Sa();V(()=>J(Oe,s(o))),p(ue,Oe)},$$slots:{default:!0}})};T(ge,se=>{s(o)&&se(_e)})}var Ae=b(ge,2);{var Xe=se=>{di(se,{variant:"accent",children:(ue,Te)=>{var Oe=Sa();V(()=>J(Oe,s(d))),p(ue,Oe)},$$slots:{default:!0}})};T(Ae,se=>{s(d)&&se(Xe)})}var Ie=b(Ae,2);{var rt=se=>{var ue=ie(),Te=q(ue);pt(Te,17,()=>t.message.contexts,vt,(Oe,ht,R)=>{var K=fv(),xe=u(K);Ga(xe,{size:10,class:"flex-shrink-0"});var Pe=b(xe);V(()=>J(Pe,` ${(s(ht).label||s(ht).module)??""}`)),D("click",K,()=>F(R)),p(Oe,K)}),p(se,ue)},ye=se=>{var ue=vv(),Te=u(ue);Ga(Te,{size:10,class:"flex-shrink-0"});var Oe=b(Te);V(()=>J(Oe,` 모듈 ${t.message.meta.includedModules.length??""}개`)),p(se,ue)};T(Ie,se=>{var ue,Te,Oe;((ue=t.message.contexts)==null?void 0:ue.length)>0?se(rt):((Oe=(Te=t.message.meta)==null?void 0:Te.includedModules)==null?void 0:Oe.length)>0&&se(ye,1)})}p(Z,te)};T(ne,Z=>{var te,ge;(s(o)||s(d)||((te=t.message.contexts)==null?void 0:te.length)>0||(ge=t.message.meta)!=null&&ge.includedModules)&&Z(Q)})}var C=b(ne,2);{var $=Z=>{var te=xv(),ge=u(te);pt(ge,21,()=>t.message.snapshot.items,vt,(Xe,Ie)=>{const rt=oe(()=>s(Ie).status==="good"?"text-dl-success":s(Ie).status==="danger"?"text-dl-primary-light":s(Ie).status==="caution"?"text-amber-400":"text-dl-text");var ye=mv(),se=u(ye),ue=u(se),Te=b(se,2),Oe=u(Te);V(ht=>{J(ue,s(Ie).label),He(Te,1,ht),J(Oe,s(Ie).value)},[()=>Ge(Ue("text-[14px] font-semibold leading-snug mt-0.5",s(rt)))]),p(Xe,ye)});var _e=b(ge,2);{var Ae=Xe=>{var Ie=gv();pt(Ie,21,()=>t.message.snapshot.warnings,vt,(rt,ye)=>{var se=hv(),ue=u(se);Gf(ue,{size:10});var Te=b(ue);V(()=>J(Te,` ${s(ye)??""}`)),p(rt,se)}),p(Xe,Ie)};T(_e,Xe=>{var Ie;((Ie=t.message.snapshot.warnings)==null?void 0:Ie.length)>0&&Xe(Ae)})}D("click",te,O),p(Z,te)};T(C,Z=>{var te,ge;((ge=(te=t.message.snapshot)==null?void 0:te.items)==null?void 0:ge.length)>0&&Z($)})}var me=b(C,2);{var he=Z=>{var te=_v(),ge=u(te);pt(ge,21,()=>t.message.toolEvents,vt,(_e,Ae)=>{var Xe=ie(),Ie=q(Xe);{var rt=ye=>{const se=oe(()=>{var ht,R,K,xe;return((ht=s(Ae).arguments)==null?void 0:ht.module)||((R=s(Ae).arguments)==null?void 0:R.keyword)||((K=s(Ae).arguments)==null?void 0:K.engine)||((xe=s(Ae).arguments)==null?void 0:xe.name)||""});var ue=bv(),Te=u(ue);Hf(Te,{size:11});var Oe=b(Te);V(()=>J(Oe,` ${s(Ae).name??""}${s(se)?`: ${s(se)}`:""}`)),p(ye,ue)};T(Ie,ye=>{s(Ae).type==="call"&&ye(rt)})}p(_e,Xe)}),p(Z,te)};T(me,Z=>{var te;((te=t.message.toolEvents)==null?void 0:te.length)>0&&Z(he)})}var Je=b(me,2);{var tt=Z=>{var te=Sv(),ge=u(te);pt(ge,21,()=>s(P),vt,(_e,Ae)=>{var Xe=kv(),Ie=u(Xe);{var rt=se=>{var ue=yv(),Te=b(q(ue),2),Oe=u(Te);V(()=>J(Oe,s(Ae).label)),p(se,ue)},ye=se=>{var ue=wv(),Te=q(ue);tr(Te,{size:14,class:"animate-spin flex-shrink-0 text-dl-text-dim"});var Oe=b(Te,2),ht=u(Oe);V(()=>J(ht,s(Ae).label)),p(se,ue)};T(Ie,se=>{s(Ae).done?se(rt):se(ye,-1)})}p(_e,Xe)}),p(Z,te)},qe=Z=>{var te=Iv(),ge=q(te);{var _e=ye=>{var se=zv(),ue=u(se);tr(ue,{size:12,class:"animate-spin flex-shrink-0"});var Te=b(ue,2),Oe=u(Te);V(()=>J(Oe,s(i))),p(ye,se)};T(ge,ye=>{t.message.loading&&ye(_e)})}var Ae=b(ge,2),Xe=u(Ae);Do(Xe,()=>_(t.message.text)),so(Ae,ye=>f(S,ye),()=>s(S));var Ie=b(Ae,2);{var rt=ye=>{var se=Nv(),ue=u(se);{var Te=De=>{var Ke=Mv(),it=u(Ke);Cf(it,{size:10});var B=b(it);V(()=>J(B,` ${t.message.duration??""}초`)),p(De,Ke)};T(ue,De=>{t.message.duration&&De(Te)})}var Oe=b(ue,2);{var ht=De=>{var Ke=Ev(),it=u(Ke);{var B=Fe=>{var dt=Av(),Mt=u(dt);V(gt=>J(Mt,`↑${gt??""}`),[()=>v(s(m))]),p(Fe,dt)};T(it,Fe=>{s(m)>0&&Fe(B)})}var $e=b(it,2);{var Ze=Fe=>{var dt=$v(),Mt=u(dt);V(gt=>J(Mt,`↓${gt??""}`),[()=>v(s(x))]),p(Fe,dt)};T($e,Fe=>{s(x)>0&&Fe(Ze)})}p(De,Ke)};T(Oe,De=>{(s(m)>0||s(x)>0)&&De(ht)})}var R=b(Oe,2);{var K=De=>{var Ke=Cv(),it=u(Ke);Df(it,{size:10}),D("click",Ke,()=>{var B;return(B=t.onRegenerate)==null?void 0:B.call(t)}),p(De,Ke)};T(R,De=>{t.onRegenerate&&De(K)})}var xe=b(R,2);{var Pe=De=>{var Ke=Tv(),it=u(Ke);ni(it,{size:10}),D("click",Ke,M),p(De,Ke)};T(xe,De=>{t.message.systemPrompt&&De(Pe)})}var nt=b(xe,2);{var Mr=De=>{var Ke=Pv(),it=u(Ke);qa(it,{size:10});var B=b(it);V(($e,Ze)=>J(B,` LLM 입력 (${$e??""}자 · ~${Ze??""}tok)`),[()=>t.message.userContent.length.toLocaleString(),()=>v(c(t.message.userContent))]),D("click",Ke,()=>{f(r,0),f(n,"userContent"),f(a,"raw")}),p(De,Ke)};T(nt,De=>{t.message.userContent&&De(Mr)})}p(ye,se)};T(Ie,ye=>{!t.message.loading&&(t.message.duration||s(l)||t.onRegenerate)&&ye(rt)})}V(ye=>He(Ae,1,ye),[()=>Ge(Ue("prose-dartlab text-[15px] leading-[1.75]",t.message.error&&"text-dl-primary"))]),D("click",Ae,N),p(Z,te)};T(Je,Z=>{t.message.loading&&!t.message.text?Z(tt):Z(qe,-1)})}p(E,j)};T(I,E=>{t.message.role==="user"?E(G):E(le,-1)})}var Me=b(I,2);{var je=E=>{const j=oe(()=>s(n)==="system"),Y=oe(()=>s(n)==="userContent"),ne=oe(()=>s(n)==="context"),Q=oe(()=>s(n)==="snapshot"),C=oe(()=>{var B;return s(ne)?(B=t.message.contexts)==null?void 0:B[s(r)]:null}),$=oe(()=>{var B,$e;return s(Q)?"핵심 수치 (원본 데이터)":s(j)?"시스템 프롬프트":s(Y)?"LLM에 전달된 입력":((B=s(C))==null?void 0:B.label)||(($e=s(C))==null?void 0:$e.module)||""}),me=oe(()=>{var B;return s(Q)?JSON.stringify(t.message.snapshot,null,2):s(j)?t.message.systemPrompt:s(Y)?t.message.userContent:(B=s(C))==null?void 0:B.text});var he=Uv(),Je=u(he),tt=u(Je),qe=u(tt),Z=u(qe),te=u(Z);{var ge=B=>{Ga(B,{size:15,class:"text-dl-success flex-shrink-0"})},_e=B=>{ni(B,{size:15,class:"text-dl-primary-light flex-shrink-0"})},Ae=B=>{qa(B,{size:15,class:"text-dl-accent flex-shrink-0"})},Xe=B=>{Ga(B,{size:15,class:"flex-shrink-0"})};T(te,B=>{s(Q)?B(ge):s(j)?B(_e,1):s(Y)?B(Ae,2):B(Xe,-1)})}var Ie=b(te,2),rt=u(Ie),ye=b(Ie,2);{var se=B=>{var $e=Ov(),Ze=u($e);V(Fe=>J(Ze,`(${Fe??""}자)`),[()=>{var Fe,dt;return(dt=(Fe=s(me))==null?void 0:Fe.length)==null?void 0:dt.toLocaleString()}]),p(B,$e)};T(ye,B=>{s(j)&&B(se)})}var ue=b(Z,2),Te=u(ue);{var Oe=B=>{var $e=Rv(),Ze=u($e),Fe=u(Ze);qa(Fe,{size:11});var dt=b(Ze,2),Mt=u(dt);Tf(Mt,{size:11}),V((gt,bt)=>{He(Ze,1,gt),He(dt,1,bt)},[()=>Ge(Ue("flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] transition-colors",s(a)==="rendered"?"bg-dl-bg-card text-dl-text shadow-sm":"text-dl-text-dim hover:text-dl-text-muted")),()=>Ge(Ue("flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] transition-colors",s(a)==="raw"?"bg-dl-bg-card text-dl-text shadow-sm":"text-dl-text-dim hover:text-dl-text-muted"))]),D("click",Ze,()=>f(a,"rendered")),D("click",dt,()=>f(a,"raw")),p(B,$e)};T(Te,B=>{s(ne)&&B(Oe)})}var ht=b(Te,2),R=u(ht);Xa(R,{size:18});var K=b(qe,2);{var xe=B=>{var $e=Dv(),Ze=u($e);pt(Ze,21,()=>t.message.contexts,vt,(Fe,dt,Mt)=>{var gt=jv(),bt=u(gt);V(At=>{He(gt,1,At),J(bt,t.message.contexts[Mt].label||t.message.contexts[Mt].module)},[()=>Ge(Ue("px-2.5 py-1 rounded-lg text-[11px] whitespace-nowrap transition-colors flex-shrink-0",Mt===s(r)?"bg-dl-primary/20 text-dl-primary-light font-medium":"bg-dl-bg-darker text-dl-text-dim hover:text-dl-text-muted hover:bg-dl-bg-darker/80"))]),D("click",gt,()=>{f(r,Mt,!0)}),p(Fe,gt)}),p(B,$e)};T(K,B=>{var $e;s(ne)&&(($e=t.message.contexts)==null?void 0:$e.length)>1&&B(xe)})}var Pe=b(K,2);{var nt=B=>{var $e=Bv(),Ze=u($e),Fe=u(Ze);{var dt=bt=>{var At=Fv();V(Vr=>He(At,1,Vr),[()=>Ge(Ue("px-2.5 py-1 rounded-lg text-[11px] whitespace-nowrap transition-colors flex-shrink-0",s(j)?"bg-dl-primary/20 text-dl-primary-light font-medium":"bg-dl-bg-darker text-dl-text-dim hover:text-dl-text-muted"))]),D("click",At,()=>{f(n,"system")}),p(bt,At)};T(Fe,bt=>{t.message.systemPrompt&&bt(dt)})}var Mt=b(Fe,2);{var gt=bt=>{var At=Vv();V(Vr=>He(At,1,Vr),[()=>Ge(Ue("px-2.5 py-1 rounded-lg text-[11px] whitespace-nowrap transition-colors flex-shrink-0",s(Y)?"bg-dl-accent/20 text-dl-accent font-medium":"bg-dl-bg-darker text-dl-text-dim hover:text-dl-text-muted"))]),D("click",At,()=>{f(n,"userContent")}),p(bt,At)};T(Mt,bt=>{t.message.userContent&&bt(gt)})}p(B,$e)};T(Pe,B=>{!s(ne)&&!s(Q)&&B(nt)})}var Mr=b(tt,2),De=u(Mr);{var Ke=B=>{var $e=Gv(),Ze=u($e);Do(Ze,()=>{var Fe;return _((Fe=s(C))==null?void 0:Fe.text)}),p(B,$e)},it=B=>{var $e=Hv(),Ze=u($e);V(()=>J(Ze,s(me))),p(B,$e)};T(De,B=>{s(ne)&&s(a)==="rendered"?B(Ke):B(it,-1)})}V(()=>J(rt,s($))),D("click",he,B=>{B.target===B.currentTarget&&X()}),D("keydown",he,B=>{B.key==="Escape"&&X()}),D("click",ht,X),p(E,he)};T(Me,E=>{s(r)!==null&&E(je)})}p(e,h),Sr()}gn(["click","keydown"]);var Kv=k('<span class="text-[11px] text-dl-text-dim"> </span>'),Yv=k("<!> 다운로드 중",1),Jv=k("<!> 다운로드",1),Xv=k('<button class="p-1 rounded-lg text-dl-text-dim hover:text-dl-text hover:bg-white/5 transition-colors"><!></button>'),Zv=k('<div class="flex items-center gap-2 py-4 justify-center text-[12px] text-dl-text-dim"><!> 데이터 로드 중...</div>'),Qv=k('<div class="text-[12px] text-dl-primary-light py-2"> </div>'),ep=k('<span class="text-[9px] px-1.5 py-0.5 rounded bg-dl-text-dim/10 text-dl-text-dim">프리셋</span>'),tp=k('<span role="button" tabindex="0" class="p-1 rounded text-dl-text-dim hover:text-red-400 transition-colors cursor-pointer" title="삭제"><!></span>'),rp=k('<div class="text-[10px] text-dl-text-dim mt-0.5"> </div>'),np=k('<span class="px-1.5 py-0.5 rounded text-[9px] bg-dl-success/10 text-dl-success/80"> </span>'),ap=k('<div class="flex flex-wrap gap-1 mt-2"></div>'),sp=k('<button><div class="flex items-center justify-between"><div><span> </span> <span class="text-[10px] text-dl-text-dim ml-2"> </span></div> <div class="flex items-center gap-1"><!></div></div> <!> <!></button>'),op=k('<div class="space-y-2"></div>'),ip=k('<button class="flex items-center gap-1 text-[10px] text-dl-text-dim hover:text-dl-success transition-colors disabled:opacity-40" title="현재 선택을 템플릿으로 저장"><!> 템플릿 저장</button>'),lp=k('<div class="flex items-center gap-2 mb-3 p-2 rounded-lg bg-dl-success/5 border border-dl-success/20"><input type="text" class="flex-1 px-2 py-1 rounded text-[11px] bg-transparent border border-dl-border/50 text-dl-text placeholder:text-dl-text-dim focus:outline-none focus:border-dl-success/50" placeholder="템플릿 이름"/> <button class="px-2 py-1 rounded text-[10px] bg-dl-success/20 text-dl-success hover:bg-dl-success/30 transition-colors disabled:opacity-40">저장</button> <button class="p-1 rounded text-dl-text-dim hover:text-dl-text transition-colors"><!></button></div>'),dp=k("<button> </button>"),cp=k('<div class="mb-2"><button class="text-[10px] text-dl-text-dim mb-1 hover:text-dl-text-muted transition-colors">재무제표</button> <div class="flex flex-wrap gap-1"></div></div>'),up=k("<button> </button>"),fp=k('<div class="flex flex-wrap gap-1"></div>'),vp=k("<button> </button>"),pp=k('<button class="px-2 py-1 rounded-lg text-[10px] text-dl-text-dim hover:text-dl-text-muted transition-colors"> </button>'),mp=k('<div class="flex flex-wrap gap-1"><!> <!></div>'),hp=k('<div><button class="text-[10px] text-dl-text-dim mb-1 hover:text-dl-text-muted transition-colors"> </button> <!></div>'),gp=k('<div class="flex items-center justify-between mb-2"><button class="flex items-center gap-1.5 text-[11px] text-dl-text-muted hover:text-dl-text transition-colors"><!> 전체 선택</button> <div class="flex items-center gap-2"><!> <button class="flex items-center gap-1 text-[10px] text-dl-text-dim hover:text-dl-text-muted transition-colors"> <!></button></div></div> <!> <!> <!>',1),xp=k('<div class="text-[12px] text-dl-text-dim py-2">내보낼 수 있는 데이터가 없습니다</div>'),bp=k('<div class="rounded-xl border border-dl-border bg-dl-bg-card/60 backdrop-blur-sm overflow-hidden animate-fadeIn"><div class="flex items-center justify-between px-4 py-3 border-b border-dl-border/50"><div class="flex items-center gap-2"><!> <span class="text-[13px] font-medium text-dl-text">Excel 내보내기</span> <!></div> <div class="flex items-center gap-1.5"><button class="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-dl-success/15 text-dl-success text-[11px] font-medium hover:bg-dl-success/25 transition-colors disabled:opacity-40"><!></button> <!></div></div> <div class="flex border-b border-dl-border/30 px-4"><button><div class="flex items-center gap-1.5"><!> 템플릿</div></button> <button><div class="flex items-center gap-1.5"><!> 직접 선택</div></button></div> <div class="px-4 py-3"><!></div></div>');function _p(e,t){kr(t,!0);let r=et(t,"stockCode",3,null),n=et(t,"corpName",3,""),a=U("template"),i=U(xt([])),o=U(xt(new Set)),l=U(xt([])),d=U(null),c=U(!1),v=U(!1),m=U(""),x=U(!1),A=U(!1),_=U("");const S=new Set(["IS","BS","CF","ratios"]);let g=oe(()=>s(i).filter(R=>S.has(R.name))),z=oe(()=>s(i).filter(R=>!S.has(R.name))),N=oe(()=>s(o).size===s(i).length&&s(i).length>0);sa(()=>{r()&&(F(),M())});async function F(){f(c,!0),f(m,"");try{const R=await _u(r());f(i,R.modules||[],!0),f(o,new Set(s(i).map(K=>K.name)),!0)}catch(R){f(m,R.message,!0)}f(c,!1)}async function M(){try{const R=await yu();f(l,R.templates||[],!0)}catch{}}function O(R){const K=new Set(s(o));K.has(R)?K.delete(R):K.add(R),f(o,K,!0)}function X(){s(N)?f(o,new Set,!0):f(o,new Set(s(i).map(R=>R.name)),!0)}function P(R){const K=R.map(nt=>nt.name),xe=K.every(nt=>s(o).has(nt)),Pe=new Set(s(o));if(xe)for(const nt of K)Pe.delete(nt);else for(const nt of K)Pe.add(nt);f(o,Pe,!0)}function h(R){f(d,R,!0)}async function I(){if(!s(v)){f(v,!0),f(m,"");try{if(s(a)==="template"&&s(d))await Wo(r(),null,s(d).templateId);else{if(s(o).size===0){f(v,!1);return}const R=s(N)?null:[...s(o)];await Wo(r(),R)}}catch(R){f(m,R.message,!0)}f(v,!1)}}async function G(){if(!(!s(_).trim()||s(o).size===0)){f(m,"");try{const R=[...s(o)].map(K=>{const xe=s(i).find(Pe=>Pe.name===K);return{source:K,label:(xe==null?void 0:xe.label)||K}});await wu({name:s(_).trim(),sheets:R,description:`${n()} 기준 커스텀 양식`}),f(_,""),f(A,!1),await M()}catch(R){f(m,R.message,!0)}}}async function le(R){var K;f(m,"");try{await ku(R),((K=s(d))==null?void 0:K.templateId)===R&&f(d,null),await M()}catch(xe){f(m,xe.message,!0)}}let Me=oe(()=>s(a)==="template"?s(d)!==null:s(o).size>0);var je=bp(),E=u(je),j=u(E),Y=u(j);Al(Y,{size:16,class:"text-dl-success"});var ne=b(Y,4);{var Q=R=>{var K=Kv(),xe=u(K);V(()=>J(xe,`— ${n()??""}`)),p(R,K)};T(ne,R=>{n()&&R(Q)})}var C=b(j,2),$=u(C),me=u($);{var he=R=>{var K=Yv(),xe=q(K);tr(xe,{size:12,class:"animate-spin"}),p(R,K)},Je=R=>{var K=Jv(),xe=q(K);za(xe,{size:12}),p(R,K)};T(me,R=>{s(v)?R(he):R(Je,-1)})}var tt=b($,2);{var qe=R=>{var K=Xv(),xe=u(K);Xa(xe,{size:16}),D("click",K,function(...Pe){var nt;(nt=t.onClose)==null||nt.apply(this,Pe)}),p(R,K)};T(tt,R=>{t.onClose&&R(qe)})}var Z=b(E,2),te=u(Z),ge=u(te),_e=u(ge);If(_e,{size:12});var Ae=b(te,2),Xe=u(Ae),Ie=u(Xe);li(Ie,{size:12});var rt=b(Z,2),ye=u(rt);{var se=R=>{var K=Zv(),xe=u(K);tr(xe,{size:14,class:"animate-spin"}),p(R,K)},ue=R=>{var K=Qv(),xe=u(K);V(()=>J(xe,s(m))),p(R,K)},Te=R=>{var K=op();pt(K,21,()=>s(l),vt,(xe,Pe)=>{var nt=sp(),Mr=u(nt),De=u(Mr),Ke=u(De),it=u(Ke),B=b(Ke,2),$e=u(B),Ze=b(De,2),Fe=u(Ze);{var dt=Be=>{var re=ep();p(Be,re)},Mt=oe(()=>{var Be;return(Be=s(Pe).templateId)==null?void 0:Be.startsWith("preset_")}),gt=Be=>{var re=tp(),We=u(re);Cl(We,{size:11}),D("click",re,lt=>{lt.stopPropagation(),le(s(Pe).templateId)}),D("keydown",re,lt=>{lt.key==="Enter"&&(lt.stopPropagation(),le(s(Pe).templateId))}),p(Be,re)};T(Fe,Be=>{s(Mt)?Be(dt):Be(gt,-1)})}var bt=b(Mr,2);{var At=Be=>{var re=rp(),We=u(re);V(()=>J(We,s(Pe).description)),p(Be,re)};T(bt,Be=>{s(Pe).description&&Be(At)})}var Vr=b(bt,2);{var ca=Be=>{var re=ap();pt(re,21,()=>s(Pe).sheets,vt,(We,lt)=>{var Jt=np(),Ar=u(Jt);V(()=>J(Ar,s(lt).label||s(lt).source)),p(We,Jt)}),p(Be,re)};T(Vr,Be=>{var re,We;((re=s(d))==null?void 0:re.templateId)===s(Pe).templateId&&((We=s(Pe).sheets)==null?void 0:We.length)>0&&Be(ca)})}V((Be,re)=>{var We;He(nt,1,Be),He(Ke,1,re),J(it,s(Pe).name),J($e,`${(((We=s(Pe).sheets)==null?void 0:We.length)||0)??""}개 시트`)},[()=>{var Be;return Ge(Ue("w-full text-left px-3 py-2.5 rounded-lg border transition-all",((Be=s(d))==null?void 0:Be.templateId)===s(Pe).templateId?"border-dl-success/50 bg-dl-success/8":"border-dl-border/50 hover:border-dl-border hover:bg-white/[0.02]"))},()=>{var Be;return Ge(Ue("text-[12px] font-medium",((Be=s(d))==null?void 0:Be.templateId)===s(Pe).templateId?"text-dl-success":"text-dl-text"))}]),D("click",nt,()=>h(s(Pe))),p(xe,nt)}),p(R,K)},Oe=R=>{var K=gp(),xe=q(K),Pe=u(xe),nt=u(Pe);{var Mr=re=>{li(re,{size:13,class:"text-dl-success"})},De=re=>{El(re,{size:13})};T(nt,re=>{s(N)?re(Mr):re(De,-1)})}var Ke=b(Pe,2),it=u(Ke);{var B=re=>{var We=ip(),lt=u(We);Ff(lt,{size:11}),V(()=>We.disabled=s(o).size===0),D("click",We,()=>f(A,!0)),p(re,We)};T(it,re=>{s(A)||re(B)})}var $e=b(it,2),Ze=u($e),Fe=b(Ze);{var dt=re=>{Ef(re,{size:12})},Mt=re=>{$f(re,{size:12})};T(Fe,re=>{s(x)?re(dt):re(Mt,-1)})}var gt=b(xe,2);{var bt=re=>{var We=lp(),lt=u(We),Jt=b(lt,2),Ar=b(Jt,2),$r=u(Ar);Xa($r,{size:12}),V(Bt=>Jt.disabled=Bt,[()=>!s(_).trim()]),D("keydown",lt,Bt=>Bt.key==="Enter"&&G()),Wn(lt,()=>s(_),Bt=>f(_,Bt)),D("click",Jt,G),D("click",Ar,()=>{f(A,!1),f(_,"")}),p(re,We)};T(gt,re=>{s(A)&&re(bt)})}var At=b(gt,2);{var Vr=re=>{var We=cp(),lt=u(We),Jt=b(lt,2);pt(Jt,21,()=>s(g),vt,(Ar,$r)=>{var Bt=dp(),rr=u(Bt);V(Er=>{He(Bt,1,Er),J(rr,s($r).label)},[()=>Ge(Ue("px-2.5 py-1 rounded-lg text-[11px] border transition-all",s(o).has(s($r).name)?"border-dl-success/40 bg-dl-success/10 text-dl-success":"border-dl-border text-dl-text-dim hover:border-dl-border hover:text-dl-text-muted"))]),D("click",Bt,()=>O(s($r).name)),p(Ar,Bt)}),D("click",lt,()=>P(s(g))),p(re,We)};T(At,re=>{s(g).length>0&&re(Vr)})}var ca=b(At,2);{var Be=re=>{var We=hp(),lt=u(We),Jt=u(lt),Ar=b(lt,2);{var $r=rr=>{var Er=fp();pt(Er,21,()=>s(z),vt,(Fn,bn)=>{var Yr=up(),Br=u(Yr);V(vr=>{He(Yr,1,vr),J(Br,s(bn).label)},[()=>Ge(Ue("px-2.5 py-1 rounded-lg text-[11px] border transition-all",s(o).has(s(bn).name)?"border-dl-success/40 bg-dl-success/10 text-dl-success":"border-dl-border text-dl-text-dim hover:border-dl-border hover:text-dl-text-muted"))]),D("click",Yr,()=>O(s(bn).name)),p(Fn,Yr)}),p(rr,Er)},Bt=rr=>{var Er=mp(),Fn=u(Er);pt(Fn,17,()=>s(z).slice(0,6),vt,(Br,vr)=>{var Jr=vp(),ss=u(Jr);V(os=>{He(Jr,1,os),J(ss,s(vr).label)},[()=>Ge(Ue("px-2.5 py-1 rounded-lg text-[11px] border transition-all",s(o).has(s(vr).name)?"border-dl-success/40 bg-dl-success/10 text-dl-success":"border-dl-border text-dl-text-dim hover:border-dl-border hover:text-dl-text-muted"))]),D("click",Jr,()=>O(s(vr).name)),p(Br,Jr)});var bn=b(Fn,2);{var Yr=Br=>{var vr=pp(),Jr=u(vr);V(()=>J(Jr,`+${s(z).length-6}개 더`)),D("click",vr,()=>f(x,!0)),p(Br,vr)};T(bn,Br=>{s(z).length>6&&Br(Yr)})}p(rr,Er)};T(Ar,rr=>{s(x)?rr($r):rr(Bt,-1)})}V(()=>J(Jt,`보고서/공시 (${s(z).length??""})`)),D("click",lt,()=>P(s(z))),p(re,We)};T(ca,re=>{s(z).length>0&&re(Be)})}V(()=>J(Ze,`${s(x)?"접기":"펼치기"} `)),D("click",Pe,X),D("click",$e,()=>f(x,!s(x))),p(R,K)},ht=R=>{var K=xp();p(R,K)};T(ye,R=>{s(c)?R(se):s(m)?R(ue,1):s(a)==="template"?R(Te,2):s(i).length>0?R(Oe,3):R(ht,-1)})}V((R,K)=>{$.disabled=!s(Me)||s(v)||s(c),He(te,1,R),He(Ae,1,K)},[()=>Ge(Ue("px-3 py-2 text-[11px] font-medium border-b-2 transition-colors",s(a)==="template"?"border-dl-success text-dl-success":"border-transparent text-dl-text-dim hover:text-dl-text-muted")),()=>Ge(Ue("px-3 py-2 text-[11px] font-medium border-b-2 transition-colors",s(a)==="custom"?"border-dl-success text-dl-success":"border-transparent text-dl-text-dim hover:text-dl-text-muted"))]),D("click",$,I),D("click",te,()=>f(a,"template")),D("click",Ae,()=>f(a,"custom")),p(e,je),Sr()}gn(["click","keydown"]);var yp=k("<button><!> Excel</button>"),wp=k('<button class="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] text-dl-text-dim hover:text-dl-text-muted transition-colors"><!> 마크다운</button>'),kp=k('<div class="flex justify-end gap-2 mb-1.5"><!> <!></div>'),Sp=k('<div class="mb-2"><!></div>'),zp=k('<div class="flex flex-col h-full min-h-0"><div class="flex-1 overflow-y-auto min-h-0"><div class="max-w-[720px] mx-auto px-5 pt-14 pb-8 space-y-8"></div></div> <div class="flex-shrink-0 px-5 pb-4 pt-2"><div class="max-w-[720px] mx-auto"><!> <!> <!></div></div></div>');function Mp(e,t){kr(t,!0);function r(P){if(a())return!1;for(let h=n().length-1;h>=0;h--)if(n()[h].role==="assistant"&&!n()[h].error&&n()[h].text)return h===P;return!1}let n=et(t,"messages",19,()=>[]),a=et(t,"isLoading",3,!1),i=et(t,"inputText",15,""),o=et(t,"scrollTrigger",3,0),l=U(!1),d=oe(()=>{var P;for(let h=n().length-1;h>=0;h--){const I=n()[h];if(I.role==="assistant"&&((P=I.meta)!=null&&P.stockCode))return I.meta.stockCode}return null}),c=oe(()=>{var P;for(let h=n().length-1;h>=0;h--){const I=n()[h];if(I.role==="assistant"&&((P=I.meta)!=null&&P.company))return I.meta.company}return""}),v,m=!1;function x(){if(!v)return;const{scrollTop:P,scrollHeight:h,clientHeight:I}=v;m=h-P-I>80}sa(()=>{o(),!(!v||m)&&requestAnimationFrame(()=>{v&&(v.scrollTop=v.scrollHeight)})});var A=zp(),_=u(A),S=u(_);pt(S,21,n,vt,(P,h,I)=>{{let G=oe(()=>r(I)?t.onRegenerate:void 0);qv(P,{get message(){return s(h)},get onRegenerate(){return s(G)}})}}),so(_,P=>v=P,()=>v);var g=b(_,2),z=u(g),N=u(z);{var F=P=>{var h=kp(),I=u(h);{var G=je=>{var E=yp(),j=u(E);Al(j,{size:10}),V(Y=>He(E,1,Y),[()=>Ge(Ue("flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] transition-colors",s(l)?"text-dl-success bg-dl-success/10":"text-dl-text-dim hover:text-dl-success"))]),D("click",E,()=>f(l,!s(l))),p(je,E)};T(I,je=>{s(d)&&je(G)})}var le=b(I,2);{var Me=je=>{var E=wp(),j=u(E);za(j,{size:10}),D("click",E,function(...Y){var ne;(ne=t.onExport)==null||ne.apply(this,Y)}),p(je,E)};T(le,je=>{t.onExport&&je(Me)})}p(P,h)};T(N,P=>{n().length>1&&!a()&&P(F)})}var M=b(N,2);{var O=P=>{var h=Sp(),I=u(h);_p(I,{get stockCode(){return s(d)},get corpName(){return s(c)},onClose:()=>f(l,!1)}),p(P,h)};T(M,P=>{s(l)&&s(d)&&P(O)})}var X=b(M,2);Tl(X,{get isLoading(){return a()},placeholder:"메시지를 입력하세요...",get onSend(){return t.onSend},get onStop(){return t.onStop},get inputText(){return i()},set inputText(P){i(P)}}),Ka("scroll",_,x),p(e,A),Sr()}gn(["click"]);var Ap=k('<div class="sidebar-overlay"></div>'),$p=k("<!> <span>확인 중...</span>",1),Ep=k("<!> <span>설정 필요</span>",1),Cp=k('<span class="text-dl-text-dim">/</span> <span class="max-w-[80px] truncate"> </span>',1),Tp=k('<span class="w-1.5 h-1.5 rounded-full bg-dl-success"></span> <span> </span> <!> <!>',1),Pp=k('<div class="mx-3 mb-2 px-4 py-3 rounded-xl border border-dl-border bg-dl-bg-card/80 backdrop-blur-sm flex items-center gap-3 pointer-events-auto"><!> <div class="flex-1"><div class="text-[13px] text-dl-text-muted">AI Provider 확인 중...</div></div></div>'),Np=k('<div class="mx-3 mb-2 px-4 py-3 rounded-xl border border-dl-primary/30 bg-dl-primary/5 backdrop-blur-sm flex items-center gap-3 pointer-events-auto"><!> <div class="flex-1"><div class="text-[13px] text-dl-text">AI Provider가 설정되지 않았습니다</div> <div class="text-[11px] text-dl-text-muted mt-0.5">대화를 시작하려면 Provider를 설정해주세요</div></div> <button class="px-3 py-1.5 rounded-lg bg-dl-primary/20 text-dl-primary-light text-[12px] font-medium hover:bg-dl-primary/30 transition-colors flex-shrink-0">설정하기</button></div>'),Ip=k('<span class="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-dl-primary/20 text-dl-primary-light">사용 중</span>'),Lp=k('<!> <span class="text-[10px] text-amber-400">인증 필요</span>',1),Op=k('<!> <span class="text-[10px] text-dl-text-dim">미설치</span>',1),Rp=k('<div class="flex items-center gap-1.5 mt-2 text-[11px] text-dl-primary-light"><!> API 키가 유효하지 않습니다. 다시 확인해주세요.</div>'),jp=k('<div class="px-4 pb-4 border-t border-dl-border/50 pt-3"><div class="text-[11px] text-dl-text-muted mb-2"> </div> <div class="flex items-center gap-2"><input type="password" class="flex-1 bg-dl-bg-darker border border-dl-border rounded-lg px-3 py-2 text-[12px] text-dl-text placeholder:text-dl-text-dim outline-none focus:border-dl-primary/50 transition-colors"/> <button class="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-dl-primary/20 text-dl-primary-light text-[12px] font-medium hover:bg-dl-primary/30 transition-colors disabled:opacity-40 flex-shrink-0"><!> 인증</button></div> <!></div>'),Dp=k('<button class="px-2.5 py-1.5 rounded-lg bg-dl-primary/20 text-dl-primary-light text-[11px] hover:bg-dl-primary/30 transition-colors disabled:opacity-40"><!></button>'),Fp=k('<div class="px-4 pb-2 border-t border-dl-border/50 pt-2.5"><div class="flex items-center gap-2"><!> <span class="text-[11px] text-dl-success">인증됨</span> <span class="text-[10px] text-dl-text-dim">— 다른 키로 변경하려면 입력하세요</span></div> <div class="flex items-center gap-2 mt-2"><input type="password" placeholder="새 API 키 (변경 시에만)" class="flex-1 bg-dl-bg-darker border border-dl-border rounded-lg px-3 py-1.5 text-[11px] text-dl-text placeholder:text-dl-text-dim outline-none focus:border-dl-primary/50 transition-colors"/> <!></div></div>'),Vp=k('<div class="px-4 pb-4 border-t border-dl-border/50 pt-3"><div class="text-[12px] text-dl-text mb-2">Ollama가 설치되어 있지 않습니다</div> <a href="https://ollama.com/download" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-3 py-2 rounded-lg bg-dl-bg-darker border border-dl-border text-[12px] text-dl-text-muted hover:text-dl-text hover:border-dl-primary/30 transition-colors"><!> Ollama 다운로드 (ollama.com) <!></a> <div class="text-[10px] text-dl-text-dim mt-2">설치 후 Ollama를 실행하고 새로고침하세요</div></div>'),Bp=k('<div class="px-4 pb-3 border-t border-dl-border/50 pt-3"><div class="flex items-center gap-2 text-[12px] text-amber-400"><!> Ollama가 설치되었지만 실행되지 않고 있습니다</div> <div class="text-[10px] text-dl-text-dim mt-1">터미널에서 <code class="px-1 py-0.5 rounded bg-dl-bg-darker text-dl-text-muted">ollama serve</code>를 실행하세요</div></div>'),Gp=k('<div class="flex items-start gap-2.5"><span class="text-[10px] text-dl-text-dim mt-0.5 flex-shrink-0">1.</span> <div class="flex-1"><div class="text-[10px] text-dl-text-dim mb-1">Node.js 설치 후 실행</div> <div class="p-2 rounded-lg bg-dl-bg-darker border border-dl-border text-[11px] text-dl-text-muted font-mono">npm install -g @openai/codex</div></div></div>'),Hp=k('<div class="text-[12px] text-dl-text mb-2.5"> </div> <div class="space-y-2"><!> <div class="flex items-start gap-2.5"><span class="text-[10px] text-dl-text-dim mt-0.5 flex-shrink-0"> </span> <div class="flex-1"><div class="text-[10px] text-dl-text-dim mb-1">브라우저 인증 (ChatGPT 계정)</div> <div class="p-2 rounded-lg bg-dl-bg-darker border border-dl-border text-[11px] text-dl-text-muted font-mono">codex</div></div></div></div> <div class="flex items-center gap-1.5 mt-2.5 px-2.5 py-2 rounded-lg bg-amber-500/5 border border-amber-500/20"><!> <span class="text-[10px] text-amber-400/80">ChatGPT Plus 또는 Pro 구독이 필요합니다</span></div>',1),Up=k('<div class="flex items-start gap-2.5"><span class="text-[10px] text-dl-text-dim mt-0.5 flex-shrink-0">1.</span> <div class="flex-1"><div class="text-[10px] text-dl-text-dim mb-1">Node.js 설치 후 실행</div> <div class="p-2 rounded-lg bg-dl-bg-darker border border-dl-border text-[11px] text-dl-text-muted font-mono">npm install -g @anthropic-ai/claude-code</div></div></div>'),Wp=k('<div class="text-[12px] text-dl-text mb-2.5"> </div> <div class="space-y-2"><!> <div class="flex items-start gap-2.5"><span class="text-[10px] text-dl-text-dim mt-0.5 flex-shrink-0"> </span> <div class="flex-1"><div class="text-[10px] text-dl-text-dim mb-1">인증</div> <div class="p-2 rounded-lg bg-dl-bg-darker border border-dl-border text-[11px] text-dl-text-muted font-mono">claude auth login</div></div></div></div> <div class="flex items-center gap-1.5 mt-2.5 px-2.5 py-2 rounded-lg bg-amber-500/5 border border-amber-500/20"><!> <span class="text-[10px] text-amber-400/80">Claude Pro 또는 Max 구독이 필요합니다</span></div>',1),qp=k('<div class="px-4 pb-4 border-t border-dl-border/50 pt-3"><!> <div class="text-[10px] text-dl-text-dim mt-2">설치 완료 후 새로고침하세요</div></div>'),Kp=k("<!> 브라우저에서 로그인 중...",1),Yp=k("<!> OpenAI 계정으로 로그인",1),Jp=k('<div class="px-4 pb-4 border-t border-dl-border/50 pt-3"><div class="text-[12px] text-dl-text mb-2.5">ChatGPT 계정으로 로그인하여 사용하세요</div> <button class="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-dl-primary/20 text-dl-primary-light text-[12px] font-medium hover:bg-dl-primary/30 transition-colors disabled:opacity-40"><!></button> <div class="flex items-center gap-1.5 mt-2.5 px-2.5 py-2 rounded-lg bg-amber-500/5 border border-amber-500/20"><!> <span class="text-[10px] text-amber-400/80">ChatGPT Plus 또는 Pro 구독이 필요합니다</span></div></div>'),Xp=k('<div class="px-4 pb-2 border-t border-dl-border/50 pt-2.5"><div class="flex items-center justify-between"><div class="flex items-center gap-2"><!> <span class="text-[11px] text-dl-success">ChatGPT 인증됨</span></div> <button class="flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] text-dl-text-dim hover:text-dl-primary-light hover:bg-white/5 transition-colors"><!> 로그아웃</button></div></div>'),Zp=k('<div class="flex items-center gap-2 py-3 text-[12px] text-dl-text-dim"><!> 모델 목록 불러오는 중...</div>'),Qp=k("<button> <!></button>"),em=k('<div class="flex flex-wrap gap-1.5"></div>'),tm=k('<div class="text-[11px] text-dl-text-dim py-2">사용 가능한 모델이 없습니다</div>'),rm=k('<div class="p-3 rounded-lg border border-dl-border bg-dl-bg-darker"><div class="flex items-center justify-between mb-1.5"><span class="text-[11px] text-dl-text flex items-center gap-1.5"><!> 다운로드 중</span> <button class="px-2 py-0.5 rounded text-[10px] text-dl-text-dim hover:text-dl-primary-light transition-colors">취소</button></div> <div class="w-full h-1.5 rounded-full bg-dl-bg-dark overflow-hidden"><div class="h-full rounded-full bg-gradient-to-r from-dl-primary to-dl-primary-light transition-all duration-300"></div></div> <div class="text-[10px] text-dl-text-dim mt-1"> </div></div>'),nm=k('<span class="px-1 py-px rounded text-[9px] bg-dl-primary/15 text-dl-primary-light"> </span>'),am=k('<button class="flex items-center gap-2.5 w-full px-2.5 py-2 rounded-lg border border-dl-border/50 text-left hover:border-dl-primary/30 hover:bg-white/[0.02] transition-all group"><div class="flex-1 min-w-0"><div class="flex items-center gap-1.5"><span class="text-[11px] font-medium text-dl-text"> </span> <span class="px-1 py-px rounded text-[9px] bg-dl-bg-darker text-dl-text-dim"> </span> <!></div> <div class="text-[10px] text-dl-text-dim mt-0.5"> </div></div> <div class="flex items-center gap-1.5 flex-shrink-0"><span class="text-[9px] text-dl-text-dim"> </span> <!></div></button>'),sm=k('<div class="flex items-center gap-1.5"><input type="text" placeholder="모델명 (예: gemma3)" class="flex-1 bg-dl-bg-darker border border-dl-border rounded-lg px-2.5 py-1.5 text-[11px] text-dl-text placeholder:text-dl-text-dim outline-none focus:border-dl-primary/50 transition-colors"/> <button class="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-dl-primary/20 text-dl-primary-light text-[11px] font-medium hover:bg-dl-primary/30 transition-colors disabled:opacity-40 flex-shrink-0"><!> 받기</button></div> <div class="mt-2.5 space-y-1"></div>',1),om=k('<div class="mt-3 pt-3 border-t border-dl-border/30"><div class="flex items-center justify-between mb-2"><span class="text-[11px] text-dl-text-muted">모델 다운로드</span> <a href="https://ollama.com/library" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-[10px] text-dl-text-dim hover:text-dl-primary-light transition-colors">전체 목록 <!></a></div> <!></div>'),im=k('<div class="px-4 pb-4 border-t border-dl-border/50 pt-3"><div class="flex items-center justify-between mb-2.5"><span class="text-[11px] font-medium text-dl-text-muted">모델 선택</span> <!></div> <!> <!></div>'),lm=k("<!> <!> <!> <!> <!> <!> <!>",1),dm=k('<div><button class="flex items-center gap-3 w-full px-4 py-3 text-left"><span></span> <div class="flex-1 min-w-0"><div class="flex items-center gap-2"><span class="text-[13px] font-medium text-dl-text"> </span> <!></div> <div class="text-[11px] text-dl-text-dim mt-0.5"> </div></div> <div class="flex items-center gap-2 flex-shrink-0"><!></div></button> <!></div>'),cm=k('<div class="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn"><div class="w-full max-w-xl bg-dl-bg-card border border-dl-border rounded-2xl shadow-2xl overflow-hidden"><div class="flex items-center justify-between px-6 pt-5 pb-3"><div class="text-[14px] font-semibold text-dl-text">AI Provider 설정</div> <button class="p-1 rounded-lg text-dl-text-dim hover:text-dl-text hover:bg-white/5 transition-colors"><!></button></div> <div class="px-6 pb-5 max-h-[70vh] overflow-y-auto"><div class="space-y-2.5"></div></div> <div class="flex items-center justify-between px-6 py-3 border-t border-dl-border"><div class="text-[10px] text-dl-text-dim"><!></div> <button class="px-4 py-2 rounded-xl bg-dl-primary/20 text-dl-primary-light text-[12px] font-medium hover:bg-dl-primary/30 transition-colors">닫기</button></div></div></div>'),um=k('<div class="fixed inset-0 z-[250] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn"><div class="w-full max-w-xs bg-dl-bg-card border border-dl-border rounded-2xl shadow-2xl p-5"><div class="text-[14px] font-medium text-dl-text mb-1.5">대화 삭제</div> <div class="text-[12px] text-dl-text-muted mb-4">이 대화를 삭제하시겠습니까? 삭제된 대화는 복구할 수 없습니다.</div> <div class="flex items-center justify-end gap-2"><button class="px-3.5 py-1.5 rounded-lg text-[12px] text-dl-text-muted hover:text-dl-text hover:bg-white/5 transition-colors">취소</button> <button class="px-3.5 py-1.5 rounded-lg bg-dl-primary/20 text-dl-primary-light text-[12px] font-medium hover:bg-dl-primary/30 transition-colors">삭제</button></div></div></div>'),fm=k('<div class="fixed bottom-6 right-6 z-[300] animate-fadeIn"><div> </div></div>'),vm=k('<div class="flex h-screen bg-dl-bg-dark overflow-hidden"><!> <div><!></div> <div class="relative flex flex-col flex-1 min-w-0 min-h-0 glow-bg"><div class="absolute top-0 left-0 right-0 z-10 pointer-events-none"><div class="flex items-center justify-between px-3 h-11 pointer-events-auto" style="background: linear-gradient(to bottom, rgba(5,8,17,0.92) 40%, transparent);"><button class="p-1.5 rounded-lg text-dl-text-muted hover:text-dl-text hover:bg-white/5 transition-colors"><!></button> <div class="flex items-center gap-1"><a href="https://buymeacoffee.com/eddmpython" target="_blank" rel="noopener noreferrer" class="p-1.5 rounded-lg text-[#ffdd00] hover:bg-white/5 transition-colors" title="Buy me a coffee"><!></a> <a href="https://eddmpython.github.io/dartlab/" target="_blank" rel="noopener noreferrer" class="p-1.5 rounded-lg text-dl-text-dim hover:text-dl-text-muted hover:bg-white/5 transition-colors" title="Documentation"><!></a> <a href="https://github.com/eddmpython/dartlab" target="_blank" rel="noopener noreferrer" class="p-1.5 rounded-lg text-dl-text-dim hover:text-dl-text-muted hover:bg-white/5 transition-colors" title="GitHub"><!></a> <div class="w-px h-4 bg-dl-border mx-1"></div> <button><!> <!></button></div></div> <!></div> <!></div></div>  <!> <!> <!>',1);function pm(e,t){kr(t,!0);let r=U(""),n=U(!1),a=U(null),i=U(xt({})),o=U(xt({})),l=U(null),d=U(null),c=U(xt([])),v=U(!0),m=U(0),x=U(!0),A=U(""),_=U(!1),S=U(null),g=U(xt({})),z=U(xt({})),N=U(""),F=U(!1),M=U(null),O=U(""),X=U(!1),P=U(""),h=U(0),I=U(null),G=U(!1),le=U(xt({})),Me=U(!1);function je(){f(Me,window.innerWidth<=768),s(Me)&&f(v,!1)}sa(()=>(je(),window.addEventListener("resize",je),()=>window.removeEventListener("resize",je)));let E=U(null),j=U(""),Y=U("error"),ne=U(!1);function Q(y,L="error",ae=4e3){f(j,y,!0),f(Y,L,!0),f(ne,!0),setTimeout(()=>{f(ne,!1)},ae)}const C=bf();sa(()=>{he()});let $=U(xt({})),me=U(xt({}));async function he(){var y,L,ae;f(x,!0);try{const Le=await pu();f(i,Le.providers||{},!0),f(o,Le.ollama||{},!0),f($,Le.codex||{},!0),f(me,Le.claudeCode||{},!0),f(le,Le.chatgpt||{},!0),Le.version&&f(A,Le.version,!0);const Re=localStorage.getItem("dartlab-provider"),ct=localStorage.getItem("dartlab-model");if(Re&&((y=s(i)[Re])!=null&&y.available)){f(l,Re,!0),f(S,Re,!0),await Un(Re,ct),await Je(Re);const Ee=s(g)[Re]||[];ct&&Ee.includes(ct)?f(d,ct,!0):Ee.length>0&&(f(d,Ee[0],!0),localStorage.setItem("dartlab-model",s(d))),f(c,Ee,!0),f(x,!1);return}if(Re&&s(i)[Re]){f(l,Re,!0),f(S,Re,!0),await Je(Re);const Ee=s(g)[Re]||[];f(c,Ee,!0),ct&&Ee.includes(ct)?f(d,ct,!0):Ee.length>0&&f(d,Ee[0],!0),f(x,!1);return}for(const Ee of["chatgpt","codex","ollama"])if((L=s(i)[Ee])!=null&&L.available){f(l,Ee,!0),f(S,Ee,!0),await Un(Ee),await Je(Ee);const Gr=s(g)[Ee]||[];f(c,Gr,!0),f(d,((ae=s(i)[Ee])==null?void 0:ae.model)||(Gr.length>0?Gr[0]:null),!0),s(d)&&localStorage.setItem("dartlab-model",s(d));break}}catch{}f(x,!1)}async function Je(y){f(z,{...s(z),[y]:!0},!0);try{const L=await mu(y);f(g,{...s(g),[y]:L.models||[]},!0)}catch{f(g,{...s(g),[y]:[]},!0)}f(z,{...s(z),[y]:!1},!0)}async function tt(y){var ae;f(l,y,!0),f(d,null),f(S,y,!0),localStorage.setItem("dartlab-provider",y),localStorage.removeItem("dartlab-model"),f(N,""),f(M,null);try{await Un(y)}catch{}await Je(y);const L=s(g)[y]||[];if(f(c,L,!0),L.length>0){f(d,((ae=s(i)[y])==null?void 0:ae.model)||L[0],!0),localStorage.setItem("dartlab-model",s(d));try{await Un(y,s(d))}catch{}}}async function qe(y){f(d,y,!0),localStorage.setItem("dartlab-model",y);try{await Un(s(l),y)}catch{}}function Z(y){s(S)===y?f(S,null):(f(S,y,!0),Je(y))}async function te(){const y=s(N).trim();if(!(!y||!s(l))){f(F,!0),f(M,null);try{const L=await Un(s(l),s(d),y);L.available?(f(M,"success"),s(i)[s(l)]={...s(i)[s(l)],available:!0,model:L.model},!s(d)&&L.model&&f(d,L.model,!0),await Je(s(l)),f(c,s(g)[s(l)]||[],!0),Q("API 키 인증 성공","success")):f(M,"error")}catch{f(M,"error")}f(F,!1)}}async function ge(){if(!s(G)){f(G,!0);try{const{authUrl:y}=await gu();window.open(y,"dartlab-oauth","width=600,height=700");const L=setInterval(async()=>{var ae;try{const Le=await xu();Le.done&&(clearInterval(L),f(G,!1),Le.error?Q(`인증 실패: ${Le.error}`):(Q("ChatGPT 인증 성공","success"),await he(),(ae=s(i).chatgpt)!=null&&ae.available&&await tt("chatgpt")))}catch{clearInterval(L),f(G,!1)}},2e3);setTimeout(()=>{clearInterval(L),s(G)&&(f(G,!1),Q("인증 시간이 초과되었습니다. 다시 시도해주세요."))},12e4)}catch(y){f(G,!1),Q(`OAuth 시작 실패: ${y.message}`)}}}async function _e(){try{await bu(),f(le,{authenticated:!1},!0),s(l)==="chatgpt"&&f(i,{...s(i),chatgpt:{...s(i).chatgpt,available:!1}},!0),Q("ChatGPT 로그아웃 완료","success"),await he()}catch{Q("로그아웃 실패")}}function Ae(){const y=s(O).trim();!y||s(X)||(f(X,!0),f(P,"준비 중..."),f(h,0),f(I,hu(y,{onProgress(L){L.total&&L.completed!==void 0?(f(h,Math.round(L.completed/L.total*100),!0),f(P,`다운로드 중... ${s(h)}%`)):L.status&&f(P,L.status,!0)},async onDone(){f(X,!1),f(I,null),f(O,""),f(P,""),f(h,0),Q(`${y} 다운로드 완료`,"success"),await Je("ollama"),f(c,s(g).ollama||[],!0),s(c).includes(y)&&await qe(y)},onError(L){f(X,!1),f(I,null),f(P,""),f(h,0),Q(`다운로드 실패: ${L}`)}}),!0))}function Xe(){s(I)&&(s(I).abort(),f(I,null)),f(X,!1),f(O,""),f(P,""),f(h,0)}function Ie(){f(v,!s(v))}function rt(){if(f(N,""),f(M,null),s(l))f(S,s(l),!0);else{const y=Object.keys(s(i));f(S,y.length>0?y[0]:null,!0)}f(_,!0),s(S)&&Je(s(S))}function ye(){C.createConversation(),f(r,""),f(n,!1),s(a)&&(s(a).abort(),f(a,null))}function se(y){C.setActive(y),f(r,""),f(n,!1),s(a)&&(s(a).abort(),f(a,null))}function ue(y){f(E,y,!0)}function Te(){s(E)&&(C.deleteConversation(s(E)),f(E,null))}function Oe(){var L;const y=C.active;if(!y)return null;for(let ae=y.messages.length-1;ae>=0;ae--){const Le=y.messages[ae];if(Le.role==="assistant"&&((L=Le.meta)!=null&&L.stockCode))return Le.meta.stockCode}return null}async function ht(){var nr,Xr;const y=s(r).trim();if(!y||s(n))return;if(!s(l)||!((nr=s(i)[s(l)])!=null&&nr.available)){Q("먼저 AI Provider를 설정해주세요. 우상단 설정 버튼을 클릭하세요."),rt();return}C.activeId||C.createConversation();const L=C.activeId;C.addMessage("user",y),f(r,""),f(n,!0),C.addMessage("assistant",""),C.updateLastMessage({loading:!0,startedAt:Date.now()}),wa(m);const ae=C.active,Le=[];let Re=null;if(ae){const de=ae.messages.slice(0,-2);for(const ee of de)if((ee.role==="user"||ee.role==="assistant")&&ee.text&&ee.text.trim()&&!ee.error&&!ee.loading){const Ye={role:ee.role,text:ee.text};ee.role==="assistant"&&((Xr=ee.meta)!=null&&Xr.stockCode)&&(Ye.meta={company:ee.meta.company||ee.company,stockCode:ee.meta.stockCode,modules:ee.meta.includedModules||null},Re=ee.meta.stockCode),Le.push(Ye)}}const ct=Re||Oe();function Ee(){return C.activeId!==L}const Gr=zu(ct,y,{provider:s(l),model:s(d)},{onMeta(de){var Cr;if(Ee())return;const ee=C.active,Ye=ee==null?void 0:ee.messages[ee.messages.length-1],Dt={meta:{...(Ye==null?void 0:Ye.meta)||{},...de}};de.company&&(Dt.company=de.company,C.activeId&&((Cr=C.active)==null?void 0:Cr.title)==="새 대화"&&C.updateTitle(C.activeId,de.company)),de.stockCode&&(Dt.stockCode=de.stockCode),C.updateLastMessage(Dt)},onSnapshot(de){Ee()||C.updateLastMessage({snapshot:de})},onContext(de){if(Ee())return;const ee=C.active;if(!ee)return;const Ye=ee.messages[ee.messages.length-1],Zr=(Ye==null?void 0:Ye.contexts)||[];C.updateLastMessage({contexts:[...Zr,{module:de.module,label:de.label,text:de.text}]})},onSystemPrompt(de){Ee()||C.updateLastMessage({systemPrompt:de.text,userContent:de.userContent||null})},onToolCall(de){if(Ee())return;const ee=C.active;if(!ee)return;const Ye=ee.messages[ee.messages.length-1],Zr=(Ye==null?void 0:Ye.toolEvents)||[];C.updateLastMessage({toolEvents:[...Zr,{type:"call",name:de.name,arguments:de.arguments}]})},onToolResult(de){if(Ee())return;const ee=C.active;if(!ee)return;const Ye=ee.messages[ee.messages.length-1],Zr=(Ye==null?void 0:Ye.toolEvents)||[];C.updateLastMessage({toolEvents:[...Zr,{type:"result",name:de.name,result:de.result}]})},onChunk(de){if(Ee())return;const ee=C.active;if(!ee)return;const Ye=ee.messages[ee.messages.length-1];C.updateLastMessage({text:((Ye==null?void 0:Ye.text)||"")+de}),wa(m)},onDone(){if(Ee())return;const de=C.active,ee=de==null?void 0:de.messages[de.messages.length-1],Ye=ee!=null&&ee.startedAt?((Date.now()-ee.startedAt)/1e3).toFixed(1):null;C.updateLastMessage({loading:!1,duration:Ye}),C.flush(),f(n,!1),f(a,null),wa(m)},onError(de,ee,Ye){Ee()||(C.updateLastMessage({text:`오류: ${de}`,loading:!1,error:!0}),C.flush(),ee==="relogin"||ee==="login"?(Q(`${de} — 설정에서 재로그인하세요`),rt()):Q(ee==="check_headers"||ee==="check_endpoint"||ee==="check_client_id"?`${de} — ChatGPT API 변경 감지. 업데이트를 확인하세요`:ee==="rate_limit"?"요청이 너무 많습니다. 잠시 후 다시 시도해주세요":de),f(n,!1),f(a,null))}},Le);f(a,Gr,!0)}function R(){s(a)&&(s(a).abort(),f(a,null),f(n,!1),C.updateLastMessage({loading:!1}),C.flush())}function K(){const y=C.active;if(!y||y.messages.length<2)return;let L="";for(let ae=y.messages.length-1;ae>=0;ae--)if(y.messages[ae].role==="user"){L=y.messages[ae].text;break}L&&(C.removeLastMessage(),C.removeLastMessage(),f(r,L,!0),requestAnimationFrame(()=>{ht()}))}function xe(){const y=C.active;if(!y)return;let L=`# ${y.title}

`;for(const ct of y.messages)ct.role==="user"?L+=`## You

${ct.text}

`:ct.role==="assistant"&&ct.text&&(L+=`## DartLab

${ct.text}

`);const ae=new Blob([L],{type:"text/markdown;charset=utf-8"}),Le=URL.createObjectURL(ae),Re=document.createElement("a");Re.href=Le,Re.download=`${y.title||"dartlab-chat"}.md`,Re.click(),URL.revokeObjectURL(Le),Q("대화가 마크다운으로 내보내졌습니다","success")}function Pe(y){(y.metaKey||y.ctrlKey)&&y.key==="n"&&(y.preventDefault(),ye()),(y.metaKey||y.ctrlKey)&&y.shiftKey&&y.key==="S"&&(y.preventDefault(),Ie()),y.key==="Escape"&&s(E)?f(E,null):y.key==="Escape"&&s(_)&&f(_,!1)}let nt=oe(()=>{var y;return((y=C.active)==null?void 0:y.messages)||[]}),Mr=oe(()=>C.active&&C.active.messages.length>0),De=oe(()=>{var y;return!s(x)&&(!s(l)||!((y=s(i)[s(l)])!=null&&y.available))});const Ke=[{name:"gemma3",size:"3B",gb:"2.3",desc:"Google, 빠르고 가벼움",tag:"추천"},{name:"gemma3:12b",size:"12B",gb:"8.1",desc:"Google, 균형잡힌 성능"},{name:"llama3.1",size:"8B",gb:"4.7",desc:"Meta, 범용 최강",tag:"추천"},{name:"qwen2.5",size:"7B",gb:"4.7",desc:"Alibaba, 한국어 우수"},{name:"qwen2.5:14b",size:"14B",gb:"9.0",desc:"Alibaba, 한국어 최고 수준"},{name:"deepseek-r1",size:"7B",gb:"4.7",desc:"추론 특화, 분석에 적합"},{name:"phi4",size:"14B",gb:"9.1",desc:"Microsoft, 수학/코드 강점"},{name:"mistral",size:"7B",gb:"4.1",desc:"Mistral AI, 가볍고 빠름"},{name:"exaone3.5",size:"8B",gb:"4.9",desc:"LG AI, 한국어 특화",tag:"한국어"}];var it=vm();Ka("keydown",Ls,Pe);var B=q(it),$e=u(B);{var Ze=y=>{var L=Ap();D("click",L,()=>{f(v,!1)}),D("keydown",L,()=>{}),p(y,L)};T($e,y=>{s(Me)&&s(v)&&y(Ze)})}var Fe=b($e,2),dt=u(Fe);{let y=oe(()=>s(Me)?!0:s(v));ev(dt,{get conversations(){return C.conversations},get activeId(){return C.activeId},get open(){return s(y)},get version(){return s(A)},onNewChat:()=>{ye(),s(Me)&&f(v,!1)},onSelect:L=>{se(L),s(Me)&&f(v,!1)},onDelete:ue})}var Mt=b(Fe,2),gt=u(Mt),bt=u(gt),At=u(bt),Vr=u(At);{var ca=y=>{jf(y,{size:18})},Be=y=>{Rf(y,{size:18})};T(Vr,y=>{s(v)?y(ca):y(Be,-1)})}var re=b(At,2),We=u(re),lt=u(We);Pf(lt,{size:15});var Jt=b(We,2),Ar=u(Jt);qa(Ar,{size:15});var $r=b(Jt,2),Bt=u($r);Nf(Bt,{size:15});var rr=b($r,4),Er=u(rr);{var Fn=y=>{var L=$p(),ae=q(L);tr(ae,{size:12,class:"animate-spin"}),p(y,L)},bn=y=>{var L=Ep(),ae=q(L);wn(ae,{size:12}),p(y,L)},Yr=y=>{var L=Tp(),ae=b(q(L),2),Le=u(ae),Re=b(ae,2);{var ct=nr=>{var Xr=Cp(),de=b(q(Xr),2),ee=u(de);V(()=>J(ee,s(d))),p(nr,Xr)};T(Re,nr=>{s(d)&&nr(ct)})}var Ee=b(Re,2);{var Gr=nr=>{tr(nr,{size:10,class:"animate-spin text-dl-primary-light"})};T(Ee,nr=>{s(X)&&nr(Gr)})}V(()=>J(Le,s(l))),p(y,L)};T(Er,y=>{s(x)?y(Fn):s(De)?y(bn,1):y(Yr,-1)})}var Br=b(Er,2);Vf(Br,{size:12});var vr=b(bt,2);{var Jr=y=>{var L=Pp(),ae=u(L);tr(ae,{size:16,class:"text-dl-text-dim animate-spin flex-shrink-0"}),p(y,L)},ss=y=>{var L=Np(),ae=u(L);wn(ae,{size:16,class:"text-dl-primary-light flex-shrink-0"});var Le=b(ae,4);D("click",Le,()=>rt()),p(y,L)};T(vr,y=>{s(x)&&!s(_)?y(Jr):s(De)&&!s(_)&&y(ss,1)})}var os=b(gt,2);{var Pl=y=>{Mp(y,{get messages(){return s(nt)},get isLoading(){return s(n)},get scrollTrigger(){return s(m)},onSend:ht,onStop:R,onRegenerate:K,onExport:xe,get inputText(){return s(r)},set inputText(L){f(r,L,!0)}})},Nl=y=>{dv(y,{onSend:ht,get inputText(){return s(r)},set inputText(L){f(r,L,!0)}})};T(os,y=>{s(Mr)?y(Pl):y(Nl,-1)})}var co=b(B,2);{var Il=y=>{var L=cm(),ae=u(L),Le=u(ae),Re=b(u(Le),2),ct=u(Re);Xa(ct,{size:18});var Ee=b(Le,2),Gr=u(Ee);pt(Gr,21,()=>Object.entries(s(i)),vt,(Dt,Cr)=>{var Qr=oe(()=>mi(s(Cr),2));let ut=()=>s(Qr)[0],_t=()=>s(Qr)[1];const ua=oe(()=>ut()===s(l)),jl=oe(()=>s(S)===ut()),Vn=oe(()=>_t().auth==="api_key"),is=oe(()=>_t().auth==="cli"),Oa=oe(()=>s(g)[ut()]||[]),fo=oe(()=>s(z)[ut()]);var ls=dm(),ds=u(ls),vo=u(ds),po=b(vo,2),mo=u(po),ho=u(mo),Dl=u(ho),Fl=b(ho,2);{var Vl=yt=>{var ar=Ip();p(yt,ar)};T(Fl,yt=>{s(ua)&&yt(Vl)})}var Bl=b(mo,2),Gl=u(Bl),Hl=b(po,2),Ul=u(Hl);{var Wl=yt=>{ys(yt,{size:16,class:"text-dl-success"})},ql=yt=>{var ar=Lp(),Bn=q(ar);si(Bn,{size:14,class:"text-amber-400"}),p(yt,ar)},Kl=yt=>{var ar=Op(),Bn=q(ar);Bf(Bn,{size:14,class:"text-dl-text-dim"}),p(yt,ar)};T(Ul,yt=>{_t().available?yt(Wl):s(Vn)?yt(ql,1):s(is)&&!_t().available&&yt(Kl,2)})}var Yl=b(ds,2);{var Jl=yt=>{var ar=lm(),Bn=q(ar);{var Xl=Ve=>{var at=jp(),ft=u(at),Tt=u(ft),Gt=b(ft,2),st=u(Gt),Pt=b(st,2),Xt=u(Pt);{var jt=Ne=>{tr(Ne,{size:12,class:"animate-spin"})},ot=Ne=>{si(Ne,{size:12})};T(Xt,Ne=>{s(F)?Ne(jt):Ne(ot,-1)})}var $t=b(Gt,2);{var Qe=Ne=>{var Ft=Rp(),wt=u(Ft);wn(wt,{size:12}),p(Ne,Ft)};T($t,Ne=>{s(M)==="error"&&Ne(Qe)})}V(Ne=>{J(Tt,_t().envKey?`환경변수 ${_t().envKey}로도 설정 가능합니다`:"API 키를 입력하세요"),Aa(st,"placeholder",ut()==="openai"?"sk-...":ut()==="claude"?"sk-ant-...":"API Key"),Pt.disabled=Ne},[()=>!s(N).trim()||s(F)]),D("keydown",st,Ne=>{Ne.key==="Enter"&&te()}),Wn(st,()=>s(N),Ne=>f(N,Ne)),D("click",Pt,te),p(Ve,at)};T(Bn,Ve=>{s(Vn)&&!_t().available&&Ve(Xl)})}var go=b(Bn,2);{var Zl=Ve=>{var at=Fp(),ft=u(at),Tt=u(ft);ys(Tt,{size:13,class:"text-dl-success"});var Gt=b(ft,2),st=u(Gt),Pt=b(st,2);{var Xt=ot=>{var $t=Dp(),Qe=u($t);{var Ne=wt=>{tr(wt,{size:10,class:"animate-spin"})},Ft=wt=>{var sr=Sa("변경");p(wt,sr)};T(Qe,wt=>{s(F)?wt(Ne):wt(Ft,-1)})}V(()=>$t.disabled=s(F)),D("click",$t,te),p(ot,$t)},jt=oe(()=>s(N).trim());T(Pt,ot=>{s(jt)&&ot(Xt)})}D("keydown",st,ot=>{ot.key==="Enter"&&te()}),Wn(st,()=>s(N),ot=>f(N,ot)),p(Ve,at)};T(go,Ve=>{s(Vn)&&_t().available&&Ve(Zl)})}var xo=b(go,2);{var Ql=Ve=>{var at=Vp(),ft=b(u(at),2),Tt=u(ft);za(Tt,{size:14});var Gt=b(Tt,2);ai(Gt,{size:10,class:"ml-auto"}),p(Ve,at)},ed=Ve=>{var at=Bp(),ft=u(at),Tt=u(ft);wn(Tt,{size:14}),p(Ve,at)};T(xo,Ve=>{ut()==="ollama"&&!s(o).installed?Ve(Ql):ut()==="ollama"&&s(o).installed&&!s(o).running&&Ve(ed,1)})}var bo=b(xo,2);{var td=Ve=>{var at=qp(),ft=u(at);{var Tt=st=>{var Pt=Hp(),Xt=q(Pt),jt=u(Xt),ot=b(Xt,2),$t=u(ot);{var Qe=pr=>{var _n=Gp();p(pr,_n)};T($t,pr=>{s($).installed||pr(Qe)})}var Ne=b($t,2),Ft=u(Ne),wt=u(Ft),sr=b(ot,2),en=u(sr);wn(en,{size:12,class:"text-amber-400 flex-shrink-0"}),V(()=>{J(jt,s($).installed?"Codex CLI가 설치되었지만 인증이 필요합니다":"Codex CLI 설치가 필요합니다"),J(wt,s($).installed?"1.":"2.")}),p(st,Pt)},Gt=st=>{var Pt=Wp(),Xt=q(Pt),jt=u(Xt),ot=b(Xt,2),$t=u(ot);{var Qe=pr=>{var _n=Up();p(pr,_n)};T($t,pr=>{s(me).installed||pr(Qe)})}var Ne=b($t,2),Ft=u(Ne),wt=u(Ft),sr=b(ot,2),en=u(sr);wn(en,{size:12,class:"text-amber-400 flex-shrink-0"}),V(()=>{J(jt,s(me).installed&&!s(me).authenticated?"Claude Code가 설치되었지만 인증이 필요합니다":"Claude Code CLI 설치가 필요합니다"),J(wt,s(me).installed?"1.":"2.")}),p(st,Pt)};T(ft,st=>{ut()==="codex"?st(Tt):ut()==="claude-code"&&st(Gt,1)})}p(Ve,at)};T(bo,Ve=>{s(is)&&!_t().available&&Ve(td)})}var _o=b(bo,2);{var rd=Ve=>{var at=Jp(),ft=b(u(at),2),Tt=u(ft);{var Gt=jt=>{var ot=Kp(),$t=q(ot);tr($t,{size:14,class:"animate-spin"}),p(jt,ot)},st=jt=>{var ot=Yp(),$t=q(ot);Lf($t,{size:14}),p(jt,ot)};T(Tt,jt=>{s(G)?jt(Gt):jt(st,-1)})}var Pt=b(ft,2),Xt=u(Pt);wn(Xt,{size:12,class:"text-amber-400 flex-shrink-0"}),V(()=>ft.disabled=s(G)),D("click",ft,ge),p(Ve,at)};T(_o,Ve=>{_t().auth==="oauth"&&!_t().available&&Ve(rd)})}var yo=b(_o,2);{var nd=Ve=>{var at=Xp(),ft=u(at),Tt=u(ft),Gt=u(Tt);ys(Gt,{size:13,class:"text-dl-success"});var st=b(Tt,2),Pt=u(st);Of(Pt,{size:11}),D("click",st,_e),p(Ve,at)};T(yo,Ve=>{_t().auth==="oauth"&&_t().available&&Ve(nd)})}var ad=b(yo,2);{var sd=Ve=>{var at=im(),ft=u(at),Tt=b(u(ft),2);{var Gt=Qe=>{tr(Qe,{size:12,class:"animate-spin text-dl-text-dim"})};T(Tt,Qe=>{s(fo)&&Qe(Gt)})}var st=b(ft,2);{var Pt=Qe=>{var Ne=Zp(),Ft=u(Ne);tr(Ft,{size:14,class:"animate-spin"}),p(Qe,Ne)},Xt=Qe=>{var Ne=em();pt(Ne,21,()=>s(Oa),vt,(Ft,wt)=>{var sr=Qp(),en=u(sr),pr=b(en);{var _n=or=>{Af(or,{size:10,class:"inline ml-1"})};T(pr,or=>{s(wt)===s(d)&&s(ua)&&or(_n)})}V(or=>{He(sr,1,or),J(en,`${s(wt)??""} `)},[()=>Ge(Ue("px-3 py-1.5 rounded-lg text-[11px] border transition-all",s(wt)===s(d)&&s(ua)?"border-dl-primary/50 bg-dl-primary/10 text-dl-primary-light font-medium":"border-dl-border text-dl-text-muted hover:border-dl-primary/30 hover:text-dl-text"))]),D("click",sr,()=>{ut()!==s(l)&&tt(ut()),qe(s(wt))}),p(Ft,sr)}),p(Qe,Ne)},jt=Qe=>{var Ne=tm();p(Qe,Ne)};T(st,Qe=>{s(fo)&&s(Oa).length===0?Qe(Pt):s(Oa).length>0?Qe(Xt,1):Qe(jt,-1)})}var ot=b(st,2);{var $t=Qe=>{var Ne=om(),Ft=u(Ne),wt=b(u(Ft),2),sr=b(u(wt));ai(sr,{size:9});var en=b(Ft,2);{var pr=or=>{var fa=rm(),va=u(fa),Gn=u(va),pa=u(Gn);tr(pa,{size:12,class:"animate-spin text-dl-primary-light"});var cs=b(Gn,2),Ra=b(va,2),Hr=u(Ra),mr=b(Ra,2),us=u(mr);V(()=>{ll(Hr,`width: ${s(h)??""}%`),J(us,s(P))}),D("click",cs,Xe),p(or,fa)},_n=or=>{var fa=sm(),va=q(fa),Gn=u(va),pa=b(Gn,2),cs=u(pa);za(cs,{size:12});var Ra=b(va,2);pt(Ra,21,()=>Ke,vt,(Hr,mr)=>{const us=oe(()=>s(Oa).some(Hn=>Hn===s(mr).name||Hn===s(mr).name.split(":")[0]));var wo=ie(),od=q(wo);{var id=Hn=>{var fs=am(),ko=u(fs),So=u(ko),zo=u(So),ld=u(zo),Mo=b(zo,2),dd=u(Mo),cd=b(Mo,2);{var ud=vs=>{var $o=nm(),gd=u($o);V(()=>J(gd,s(mr).tag)),p(vs,$o)};T(cd,vs=>{s(mr).tag&&vs(ud)})}var fd=b(So,2),vd=u(fd),pd=b(ko,2),Ao=u(pd),md=u(Ao),hd=b(Ao,2);za(hd,{size:12,class:"text-dl-text-dim group-hover:text-dl-primary-light transition-colors"}),V(()=>{J(ld,s(mr).name),J(dd,s(mr).size),J(vd,s(mr).desc),J(md,`${s(mr).gb??""} GB`)}),D("click",fs,()=>{f(O,s(mr).name,!0),Ae()}),p(Hn,fs)};T(od,Hn=>{s(us)||Hn(id)})}p(Hr,wo)}),V(Hr=>pa.disabled=Hr,[()=>!s(O).trim()]),D("keydown",Gn,Hr=>{Hr.key==="Enter"&&Ae()}),Wn(Gn,()=>s(O),Hr=>f(O,Hr)),D("click",pa,Ae),p(or,fa)};T(en,or=>{s(X)?or(pr):or(_n,-1)})}p(Qe,Ne)};T(ot,Qe=>{ut()==="ollama"&&Qe($t)})}p(Ve,at)};T(ad,Ve=>{(_t().available||s(Vn)||s(is)||_t().auth==="oauth")&&Ve(sd)})}p(yt,ar)};T(Yl,yt=>{(s(jl)||s(ua))&&yt(Jl)})}V((yt,ar)=>{He(ls,1,yt),He(vo,1,ar),J(Dl,_t().label||ut()),J(Gl,_t().desc||"")},[()=>Ge(Ue("rounded-xl border transition-all",s(ua)?"border-dl-primary/40 bg-dl-primary/[0.03]":"border-dl-border")),()=>Ge(Ue("w-2.5 h-2.5 rounded-full flex-shrink-0",_t().available?"bg-dl-success":s(Vn)?"bg-amber-400":"bg-dl-text-dim"))]),D("click",ds,()=>{_t().available||s(Vn)?ut()===s(l)?Z(ut()):tt(ut()):Z(ut())}),p(Dt,ls)});var nr=b(Ee,2),Xr=u(nr),de=u(Xr);{var ee=Dt=>{var Cr=Sa();V(()=>{var Qr;return J(Cr,`현재: ${(((Qr=s(i)[s(l)])==null?void 0:Qr.label)||s(l))??""} / ${s(d)??""}`)}),p(Dt,Cr)},Ye=Dt=>{var Cr=Sa();V(()=>{var Qr;return J(Cr,`현재: ${(((Qr=s(i)[s(l)])==null?void 0:Qr.label)||s(l))??""}`)}),p(Dt,Cr)};T(de,Dt=>{s(l)&&s(d)?Dt(ee):s(l)&&Dt(Ye,1)})}var Zr=b(Xr,2);D("click",L,Dt=>{Dt.target===Dt.currentTarget&&f(_,!1)}),D("keydown",L,()=>{}),D("click",Re,()=>f(_,!1)),D("click",Zr,()=>f(_,!1)),p(y,L)};T(co,y=>{s(_)&&y(Il)})}var uo=b(co,2);{var Ll=y=>{var L=um(),ae=u(L),Le=b(u(ae),4),Re=u(Le),ct=b(Re,2);D("click",L,Ee=>{Ee.target===Ee.currentTarget&&f(E,null)}),D("keydown",L,()=>{}),D("click",Re,()=>f(E,null)),D("click",ct,Te),p(y,L)};T(uo,y=>{s(E)&&y(Ll)})}var Ol=b(uo,2);{var Rl=y=>{var L=fm(),ae=u(L),Le=u(ae);V(Re=>{He(ae,1,Re),J(Le,s(j))},[()=>Ge(Ue("px-4 py-3 rounded-xl border text-[13px] shadow-2xl max-w-sm",s(Y)==="error"?"bg-dl-primary/10 border-dl-primary/30 text-dl-primary-light":s(Y)==="success"?"bg-dl-success/10 border-dl-success/30 text-dl-success":"bg-dl-bg-card border-dl-border text-dl-text"))]),p(y,L)};T(Ol,y=>{s(ne)&&y(Rl)})}V(y=>{He(Fe,1,Ge(s(Me)?s(v)?"sidebar-mobile":"hidden":"")),He(rr,1,y)},[()=>Ge(Ue("flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] transition-colors",s(x)?"text-dl-text-dim":s(De)?"text-dl-primary-light bg-dl-primary/10 hover:bg-dl-primary/15":"text-dl-text-dim hover:text-dl-text-muted hover:bg-white/5"))]),D("click",At,Ie),D("click",rr,()=>rt()),p(e,it),Sr()}gn(["click","keydown"]);Wc(pm,{target:document.getElementById("app")});
