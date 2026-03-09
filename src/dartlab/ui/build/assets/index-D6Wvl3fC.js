var ed=Object.defineProperty;var Ks=e=>{throw TypeError(e)};var td=(e,t,r)=>t in e?ed(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Tt=(e,t,r)=>td(e,typeof t!="symbol"?t+"":t,r),ya=(e,t,r)=>t.has(e)||Ks("Cannot "+r);var x=(e,t,r)=>(ya(e,t,"read from private field"),r?r.call(e):t.get(e)),oe=(e,t,r)=>t.has(e)?Ks("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),ee=(e,t,r,n)=>(ya(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),Oe=(e,t,r)=>(ya(e,t,"access private method"),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}})();const Ta=!1;var es=Array.isArray,rd=Array.prototype.indexOf,ln=Array.prototype.includes,aa=Array.from,nd=Object.defineProperty,vr=Object.getOwnPropertyDescriptor,Ai=Object.getOwnPropertyDescriptors,ad=Object.prototype,sd=Array.prototype,ts=Object.getPrototypeOf,qs=Object.isExtensible;function kn(e){return typeof e=="function"}const id=()=>{};function od(e){return e()}function Ca(e){for(var t=0;t<e.length;t++)e[t]()}function zi(){var e,t,r=new Promise((n,a)=>{e=n,t=a});return{promise:r,resolve:e,reject:t}}function Ei(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const Qe=2,vn=4,Fr=8,sa=1<<24,_r=16,jt=32,Hr=64,Na=128,wt=512,Je=1024,Xe=2048,Rt=4096,at=8192,Kt=16384,pn=32768,gr=65536,Us=1<<17,ld=1<<18,hn=1<<19,Mi=1<<20,Ht=1<<25,Gr=65536,Ia=1<<21,rs=1<<22,pr=1<<23,qt=Symbol("$state"),$i=Symbol("legacy props"),dd=Symbol(""),Pr=new class extends Error{constructor(){super(...arguments);Tt(this,"name","StaleReactionError");Tt(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var wi;const Pi=!!((wi=globalThis.document)!=null&&wi.contentType)&&globalThis.document.contentType.includes("xml");function cd(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function ud(e,t,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function fd(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function vd(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function pd(e){throw new Error("https://svelte.dev/e/effect_orphan")}function hd(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function md(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function gd(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function bd(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function xd(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function _d(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const yd=1,wd=2,Ti=4,kd=8,Sd=16,Ad=1,zd=2,Ci=4,Ed=8,Md=16,$d=1,Pd=2,Ge=Symbol(),Ni="http://www.w3.org/1999/xhtml",Ii="http://www.w3.org/2000/svg",Td="http://www.w3.org/1998/Math/MathML",Cd="@attach";function Nd(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Id(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Oi(e){return e===this.v}function Od(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Li(e){return!Od(e,this.v)}let On=!1,Ld=!1;function Rd(){On=!0}let He=null;function dn(e){He=e}function tr(e,t=!1,r){He={p:He,i:!1,c:null,e:null,s:e,x:null,l:On&&!t?{s:null,u:null,$:[]}:null}}function rr(e){var t=He,r=t.e;if(r!==null){t.e=null;for(var n of r)to(n)}return t.i=!0,He=t.p,{}}function Ln(){return!On||He!==null&&He.l===null}let Tr=[];function Ri(){var e=Tr;Tr=[],Ca(e)}function Ut(e){if(Tr.length===0&&!$n){var t=Tr;queueMicrotask(()=>{t===Tr&&Ri()})}Tr.push(e)}function jd(){for(;Tr.length>0;)Ri()}function ji(e){var t=ae;if(t===null)return ne.f|=pr,e;if((t.f&pn)===0&&(t.f&vn)===0)throw e;fr(e,t)}function fr(e,t){for(;t!==null;){if((t.f&Na)!==0){if((t.f&pn)===0)throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}const Dd=-7169;function Te(e,t){e.f=e.f&Dd|t}function ns(e){(e.f&wt)!==0||e.deps===null?Te(e,Je):Te(e,Rt)}function Di(e){if(e!==null)for(const t of e)(t.f&Qe)===0||(t.f&Gr)===0||(t.f^=Gr,Di(t.deps))}function Fi(e,t,r){(e.f&Xe)!==0?t.add(e):(e.f&Rt)!==0&&r.add(e),Di(e.deps),Te(e,Je)}const Bn=new Set;let te=null,Oa=null,qe=null,ot=[],ia=null,$n=!1,cn=null,Fd=1;var dr,Qr,Ir,en,tn,rn,cr,Ft,nn,ft,La,Ra,ja,Da;const ms=class ms{constructor(){oe(this,ft);Tt(this,"id",Fd++);Tt(this,"current",new Map);Tt(this,"previous",new Map);oe(this,dr,new Set);oe(this,Qr,new Set);oe(this,Ir,0);oe(this,en,0);oe(this,tn,null);oe(this,rn,new Set);oe(this,cr,new Set);oe(this,Ft,new Map);Tt(this,"is_fork",!1);oe(this,nn,!1)}skip_effect(t){x(this,Ft).has(t)||x(this,Ft).set(t,{d:[],m:[]})}unskip_effect(t){var r=x(this,Ft).get(t);if(r){x(this,Ft).delete(t);for(var n of r.d)Te(n,Xe),Wt(n);for(n of r.m)Te(n,Rt),Wt(n)}}process(t){var a;ot=[],this.apply();var r=cn=[],n=[];for(const s of t)Oe(this,ft,Ra).call(this,s,r,n);if(cn=null,Oe(this,ft,La).call(this)){Oe(this,ft,ja).call(this,n),Oe(this,ft,ja).call(this,r);for(const[s,i]of x(this,Ft))Hi(s,i)}else{Oa=this,te=null;for(const s of x(this,dr))s(this);x(this,dr).clear(),x(this,Ir)===0&&Oe(this,ft,Da).call(this),Ys(n),Ys(r),x(this,rn).clear(),x(this,cr).clear(),Oa=null,(a=x(this,tn))==null||a.resolve()}qe=null}capture(t,r){r!==Ge&&!this.previous.has(t)&&this.previous.set(t,r),(t.f&pr)===0&&(this.current.set(t,t.v),qe==null||qe.set(t,t.v))}activate(){te=this,this.apply()}deactivate(){te===this&&(te=null,qe=null)}flush(){var t;if(ot.length>0)te=this,Gi();else if(x(this,Ir)===0&&!this.is_fork){for(const r of x(this,dr))r(this);x(this,dr).clear(),Oe(this,ft,Da).call(this),(t=x(this,tn))==null||t.resolve()}this.deactivate()}discard(){for(const t of x(this,Qr))t(this);x(this,Qr).clear()}increment(t){ee(this,Ir,x(this,Ir)+1),t&&ee(this,en,x(this,en)+1)}decrement(t){ee(this,Ir,x(this,Ir)-1),t&&ee(this,en,x(this,en)-1),!x(this,nn)&&(ee(this,nn,!0),Ut(()=>{ee(this,nn,!1),Oe(this,ft,La).call(this)?ot.length>0&&this.flush():this.revive()}))}revive(){for(const t of x(this,rn))x(this,cr).delete(t),Te(t,Xe),Wt(t);for(const t of x(this,cr))Te(t,Rt),Wt(t);this.flush()}oncommit(t){x(this,dr).add(t)}ondiscard(t){x(this,Qr).add(t)}settled(){return(x(this,tn)??ee(this,tn,zi())).promise}static ensure(){if(te===null){const t=te=new ms;Bn.add(te),$n||Ut(()=>{te===t&&t.flush()})}return te}apply(){}};dr=new WeakMap,Qr=new WeakMap,Ir=new WeakMap,en=new WeakMap,tn=new WeakMap,rn=new WeakMap,cr=new WeakMap,Ft=new WeakMap,nn=new WeakMap,ft=new WeakSet,La=function(){return this.is_fork||x(this,en)>0},Ra=function(t,r,n){t.f^=Je;for(var a=t.first;a!==null;){var s=a.f,i=(s&(jt|Hr))!==0,o=i&&(s&Je)!==0,d=(s&at)!==0,c=o||x(this,Ft).has(a);if(!c&&a.fn!==null){i?d||(a.f^=Je):(s&vn)!==0?r.push(a):(s&(Fr|sa))!==0&&d?n.push(a):Fn(a)&&(fn(a),(s&_r)!==0&&(x(this,cr).add(a),d&&Te(a,Xe)));var u=a.first;if(u!==null){a=u;continue}}for(;a!==null;){var b=a.next;if(b!==null){a=b;break}a=a.parent}}},ja=function(t){for(var r=0;r<t.length;r+=1)Fi(t[r],x(this,rn),x(this,cr))},Da=function(){var s;if(Bn.size>1){this.previous.clear();var t=te,r=qe,n=!0;for(const i of Bn){if(i===this){n=!1;continue}const o=[];for(const[c,u]of this.current){if(i.current.has(c))if(n&&u!==i.current.get(c))i.current.set(c,u);else continue;o.push(c)}if(o.length===0)continue;const d=[...i.current.keys()].filter(c=>!this.current.has(c));if(d.length>0){var a=ot;ot=[];const c=new Set,u=new Map;for(const b of o)Vi(b,d,c,u);if(ot.length>0){te=i,i.apply();for(const b of ot)Oe(s=i,ft,Ra).call(s,b,[],[]);i.deactivate()}ot=a}}te=t,qe=r}x(this,Ft).clear(),Bn.delete(this)};let hr=ms;function Gd(e){var t=$n;$n=!0;try{for(var r;;){if(jd(),ot.length===0&&(te==null||te.flush(),ot.length===0))return ia=null,r;Gi()}}finally{$n=t}}function Gi(){var e=null;try{for(var t=0;ot.length>0;){var r=hr.ensure();if(t++>1e3){var n,a;Vd()}r.process(ot),mr.clear()}}finally{ot=[],ia=null,cn=null}}function Vd(){try{hd()}catch(e){fr(e,ia)}}let Ct=null;function Ys(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(Kt|at))===0&&Fn(n)&&(Ct=new Set,fn(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&so(n),(Ct==null?void 0:Ct.size)>0)){mr.clear();for(const a of Ct){if((a.f&(Kt|at))!==0)continue;const s=[a];let i=a.parent;for(;i!==null;)Ct.has(i)&&(Ct.delete(i),s.push(i)),i=i.parent;for(let o=s.length-1;o>=0;o--){const d=s[o];(d.f&(Kt|at))===0&&fn(d)}}Ct.clear()}}Ct=null}}function Vi(e,t,r,n){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const a of e.reactions){const s=a.f;(s&Qe)!==0?Vi(a,t,r,n):(s&(rs|_r))!==0&&(s&Xe)===0&&Bi(a,t,n)&&(Te(a,Xe),Wt(a))}}function Bi(e,t,r){const n=r.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const a of e.deps){if(ln.call(t,a))return!0;if((a.f&Qe)!==0&&Bi(a,t,r))return r.set(a,!0),!0}return r.set(e,!1),!1}function Wt(e){var t=ia=e,r=t.b;if(r!=null&&r.is_pending&&(e.f&(vn|Fr|sa))!==0&&(e.f&pn)===0){r.defer_effect(e);return}for(;t.parent!==null;){t=t.parent;var n=t.f;if(cn!==null&&t===ae&&(e.f&Fr)===0)return;if((n&(Hr|jt))!==0){if((n&Je)===0)return;t.f^=Je}}ot.push(t)}function Hi(e,t){if(!((e.f&jt)!==0&&(e.f&Je)!==0)){(e.f&Xe)!==0?t.d.push(e):(e.f&Rt)!==0&&t.m.push(e),Te(e,Je);for(var r=e.first;r!==null;)Hi(r,t),r=r.next}}function Bd(e){let t=0,r=br(0),n;return()=>{os()&&(l(r),ds(()=>(t===0&&(n=Vr(()=>e(()=>Tn(r)))),t+=1,()=>{Ut(()=>{t-=1,t===0&&(n==null||n(),n=void 0,Tn(r))})})))}}var Hd=gr|hn;function Wd(e,t,r,n){new Kd(e,t,r,n)}var yt,Qa,Gt,Or,it,Vt,ht,It,Zt,Lr,ur,an,sn,on,Qt,ra,je,qd,Ud,Yd,Fa,Un,Yn,Ga;class Kd{constructor(t,r,n,a){oe(this,je);Tt(this,"parent");Tt(this,"is_pending",!1);Tt(this,"transform_error");oe(this,yt);oe(this,Qa,null);oe(this,Gt);oe(this,Or);oe(this,it);oe(this,Vt,null);oe(this,ht,null);oe(this,It,null);oe(this,Zt,null);oe(this,Lr,0);oe(this,ur,0);oe(this,an,!1);oe(this,sn,new Set);oe(this,on,new Set);oe(this,Qt,null);oe(this,ra,Bd(()=>(ee(this,Qt,br(x(this,Lr))),()=>{ee(this,Qt,null)})));var s;ee(this,yt,t),ee(this,Gt,r),ee(this,Or,i=>{var o=ae;o.b=this,o.f|=Na,n(i)}),this.parent=ae.b,this.transform_error=a??((s=this.parent)==null?void 0:s.transform_error)??(i=>i),ee(this,it,Dn(()=>{Oe(this,je,Fa).call(this)},Hd))}defer_effect(t){Fi(t,x(this,sn),x(this,on))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!x(this,Gt).pending}update_pending_count(t){Oe(this,je,Ga).call(this,t),ee(this,Lr,x(this,Lr)+t),!(!x(this,Qt)||x(this,an))&&(ee(this,an,!0),Ut(()=>{ee(this,an,!1),x(this,Qt)&&un(x(this,Qt),x(this,Lr))}))}get_effect_pending(){return x(this,ra).call(this),l(x(this,Qt))}error(t){var r=x(this,Gt).onerror;let n=x(this,Gt).failed;if(!r&&!n)throw t;x(this,Vt)&&(Ze(x(this,Vt)),ee(this,Vt,null)),x(this,ht)&&(Ze(x(this,ht)),ee(this,ht,null)),x(this,It)&&(Ze(x(this,It)),ee(this,It,null));var a=!1,s=!1;const i=()=>{if(a){Id();return}a=!0,s&&_d(),x(this,It)!==null&&jr(x(this,It),()=>{ee(this,It,null)}),Oe(this,je,Yn).call(this,()=>{hr.ensure(),Oe(this,je,Fa).call(this)})},o=d=>{try{s=!0,r==null||r(d,i),s=!1}catch(c){fr(c,x(this,it)&&x(this,it).parent)}n&&ee(this,It,Oe(this,je,Yn).call(this,()=>{hr.ensure();try{return dt(()=>{var c=ae;c.b=this,c.f|=Na,n(x(this,yt),()=>d,()=>i)})}catch(c){return fr(c,x(this,it).parent),null}}))};Ut(()=>{var d;try{d=this.transform_error(t)}catch(c){fr(c,x(this,it)&&x(this,it).parent);return}d!==null&&typeof d=="object"&&typeof d.then=="function"?d.then(o,c=>fr(c,x(this,it)&&x(this,it).parent)):o(d)})}}yt=new WeakMap,Qa=new WeakMap,Gt=new WeakMap,Or=new WeakMap,it=new WeakMap,Vt=new WeakMap,ht=new WeakMap,It=new WeakMap,Zt=new WeakMap,Lr=new WeakMap,ur=new WeakMap,an=new WeakMap,sn=new WeakMap,on=new WeakMap,Qt=new WeakMap,ra=new WeakMap,je=new WeakSet,qd=function(){try{ee(this,Vt,dt(()=>x(this,Or).call(this,x(this,yt))))}catch(t){this.error(t)}},Ud=function(t){const r=x(this,Gt).failed;r&&ee(this,It,dt(()=>{r(x(this,yt),()=>t,()=>()=>{})}))},Yd=function(){const t=x(this,Gt).pending;t&&(this.is_pending=!0,ee(this,ht,dt(()=>t(x(this,yt)))),Ut(()=>{var r=ee(this,Zt,document.createDocumentFragment()),n=Yt();r.append(n),ee(this,Vt,Oe(this,je,Yn).call(this,()=>(hr.ensure(),dt(()=>x(this,Or).call(this,n))))),x(this,ur)===0&&(x(this,yt).before(r),ee(this,Zt,null),jr(x(this,ht),()=>{ee(this,ht,null)}),Oe(this,je,Un).call(this))}))},Fa=function(){try{if(this.is_pending=this.has_pending_snippet(),ee(this,ur,0),ee(this,Lr,0),ee(this,Vt,dt(()=>{x(this,Or).call(this,x(this,yt))})),x(this,ur)>0){var t=ee(this,Zt,document.createDocumentFragment());fs(x(this,Vt),t);const r=x(this,Gt).pending;ee(this,ht,dt(()=>r(x(this,yt))))}else Oe(this,je,Un).call(this)}catch(r){this.error(r)}},Un=function(){this.is_pending=!1;for(const t of x(this,sn))Te(t,Xe),Wt(t);for(const t of x(this,on))Te(t,Rt),Wt(t);x(this,sn).clear(),x(this,on).clear()},Yn=function(t){var r=ae,n=ne,a=He;At(x(this,it)),St(x(this,it)),dn(x(this,it).ctx);try{return t()}catch(s){return ji(s),null}finally{At(r),St(n),dn(a)}},Ga=function(t){var r;if(!this.has_pending_snippet()){this.parent&&Oe(r=this.parent,je,Ga).call(r,t);return}ee(this,ur,x(this,ur)+t),x(this,ur)===0&&(Oe(this,je,Un).call(this),x(this,ht)&&jr(x(this,ht),()=>{ee(this,ht,null)}),x(this,Zt)&&(x(this,yt).before(x(this,Zt)),ee(this,Zt,null)))};function Wi(e,t,r,n){const a=Ln()?Rn:as;var s=e.filter(b=>!b.settled);if(r.length===0&&s.length===0){n(t.map(a));return}var i=ae,o=Jd(),d=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(b=>b.promise)):null;function c(b){o();try{n(b)}catch(v){(i.f&Kt)===0&&fr(v,i)}Va()}if(r.length===0){d.then(()=>c(t.map(a)));return}function u(){o(),Promise.all(r.map(b=>Zd(b))).then(b=>c([...t.map(a),...b])).catch(b=>fr(b,i))}d?d.then(u):u()}function Jd(){var e=ae,t=ne,r=He,n=te;return function(s=!0){At(e),St(t),dn(r),s&&(n==null||n.activate())}}function Va(e=!0){At(null),St(null),dn(null),e&&(te==null||te.deactivate())}function Xd(){var e=ae.b,t=te,r=e.is_rendered();return e.update_pending_count(1),t.increment(r),()=>{e.update_pending_count(-1),t.decrement(r)}}function Rn(e){var t=Qe|Xe,r=ne!==null&&(ne.f&Qe)!==0?ne:null;return ae!==null&&(ae.f|=hn),{ctx:He,deps:null,effects:null,equals:Oi,f:t,fn:e,reactions:null,rv:0,v:Ge,wv:0,parent:r??ae,ac:null}}function Zd(e,t,r){ae===null&&cd();var a=void 0,s=br(Ge),i=!ne,o=new Map;return vc(()=>{var v;var d=zi();a=d.promise;try{Promise.resolve(e()).then(d.resolve,d.reject).finally(Va)}catch(S){d.reject(S),Va()}var c=te;if(i){var u=Xd();(v=o.get(c))==null||v.reject(Pr),o.delete(c),o.set(c,d)}const b=(S,p=void 0)=>{if(c.activate(),p)p!==Pr&&(s.f|=pr,un(s,p));else{(s.f&pr)!==0&&(s.f^=pr),un(s,S);for(const[g,h]of o){if(o.delete(g),g===c)break;h.reject(Pr)}}u&&u()};d.promise.then(b,S=>b(null,S||"unknown"))}),la(()=>{for(const d of o.values())d.reject(Pr)}),new Promise(d=>{function c(u){function b(){u===a?d(s):c(a)}u.then(b,b)}c(a)})}function Ve(e){const t=Rn(e);return lo(t),t}function as(e){const t=Rn(e);return t.equals=Li,t}function Qd(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)Ze(t[r])}}function ec(e){for(var t=e.parent;t!==null;){if((t.f&Qe)===0)return(t.f&Kt)===0?t:null;t=t.parent}return null}function ss(e){var t,r=ae;At(ec(e));try{e.f&=~Gr,Qd(e),t=vo(e)}finally{At(r)}return t}function Ki(e){var t=ss(e);if(!e.equals(t)&&(e.wv=uo(),(!(te!=null&&te.is_fork)||e.deps===null)&&(e.v=t,e.deps===null))){Te(e,Je);return}xr||(qe!==null?(os()||te!=null&&te.is_fork)&&qe.set(e,t):ns(e))}function tc(e){var t,r;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),(r=n.ac)==null||r.abort(Pr),n.teardown=id,n.ac=null,Cn(n,0),cs(n))}function qi(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&fn(t)}let Ba=new Set;const mr=new Map;let Ui=!1;function br(e,t){var r={f:0,v:e,reactions:null,equals:Oi,rv:0,wv:0};return r}function W(e,t){const r=br(e);return lo(r),r}function rc(e,t=!1,r=!0){var a;const n=br(e);return t||(n.equals=Li),On&&r&&He!==null&&He.l!==null&&((a=He.l).s??(a.s=[])).push(n),n}function m(e,t,r=!1){ne!==null&&(!Lt||(ne.f&Us)!==0)&&Ln()&&(ne.f&(Qe|_r|rs|Us))!==0&&(kt===null||!ln.call(kt,e))&&xd();let n=r?tt(t):t;return un(e,n)}function un(e,t){if(!e.equals(t)){var r=e.v;xr?mr.set(e,t):mr.set(e,r),e.v=t;var n=hr.ensure();if(n.capture(e,r),(e.f&Qe)!==0){const a=e;(e.f&Xe)!==0&&ss(a),ns(a)}e.wv=uo(),Yi(e,Xe),Ln()&&ae!==null&&(ae.f&Je)!==0&&(ae.f&(jt|Hr))===0&&(_t===null?hc([e]):_t.push(e)),!n.is_fork&&Ba.size>0&&!Ui&&nc()}return t}function nc(){Ui=!1;for(const e of Ba)(e.f&Je)!==0&&Te(e,Rt),Fn(e)&&fn(e);Ba.clear()}function Pn(e,t=1){var r=l(e),n=t===1?r++:r--;return m(e,r),n}function Tn(e){m(e,e.v+1)}function Yi(e,t){var r=e.reactions;if(r!==null)for(var n=Ln(),a=r.length,s=0;s<a;s++){var i=r[s],o=i.f;if(!(!n&&i===ae)){var d=(o&Xe)===0;if(d&&Te(i,t),(o&Qe)!==0){var c=i;qe==null||qe.delete(c),(o&Gr)===0&&(o&wt&&(i.f|=Gr),Yi(c,Rt))}else d&&((o&_r)!==0&&Ct!==null&&Ct.add(i),Wt(i))}}}function tt(e){if(typeof e!="object"||e===null||qt in e)return e;const t=ts(e);if(t!==ad&&t!==sd)return e;var r=new Map,n=es(e),a=W(0),s=Dr,i=o=>{if(Dr===s)return o();var d=ne,c=Dr;St(null),Qs(s);var u=o();return St(d),Qs(c),u};return n&&r.set("length",W(e.length)),new Proxy(e,{defineProperty(o,d,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&gd();var u=r.get(d);return u===void 0?i(()=>{var b=W(c.value);return r.set(d,b),b}):m(u,c.value,!0),!0},deleteProperty(o,d){var c=r.get(d);if(c===void 0){if(d in o){const u=i(()=>W(Ge));r.set(d,u),Tn(a)}}else m(c,Ge),Tn(a);return!0},get(o,d,c){var S;if(d===qt)return e;var u=r.get(d),b=d in o;if(u===void 0&&(!b||(S=vr(o,d))!=null&&S.writable)&&(u=i(()=>{var p=tt(b?o[d]:Ge),g=W(p);return g}),r.set(d,u)),u!==void 0){var v=l(u);return v===Ge?void 0:v}return Reflect.get(o,d,c)},getOwnPropertyDescriptor(o,d){var c=Reflect.getOwnPropertyDescriptor(o,d);if(c&&"value"in c){var u=r.get(d);u&&(c.value=l(u))}else if(c===void 0){var b=r.get(d),v=b==null?void 0:b.v;if(b!==void 0&&v!==Ge)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return c},has(o,d){var v;if(d===qt)return!0;var c=r.get(d),u=c!==void 0&&c.v!==Ge||Reflect.has(o,d);if(c!==void 0||ae!==null&&(!u||(v=vr(o,d))!=null&&v.writable)){c===void 0&&(c=i(()=>{var S=u?tt(o[d]):Ge,p=W(S);return p}),r.set(d,c));var b=l(c);if(b===Ge)return!1}return u},set(o,d,c,u){var E;var b=r.get(d),v=d in o;if(n&&d==="length")for(var S=c;S<b.v;S+=1){var p=r.get(S+"");p!==void 0?m(p,Ge):S in o&&(p=i(()=>W(Ge)),r.set(S+"",p))}if(b===void 0)(!v||(E=vr(o,d))!=null&&E.writable)&&(b=i(()=>W(void 0)),m(b,tt(c)),r.set(d,b));else{v=b.v!==Ge;var g=i(()=>tt(c));m(b,g)}var h=Reflect.getOwnPropertyDescriptor(o,d);if(h!=null&&h.set&&h.set.call(u,c),!v){if(n&&typeof d=="string"){var y=r.get("length"),M=Number(d);Number.isInteger(M)&&M>=y.v&&m(y,M+1)}Tn(a)}return!0},ownKeys(o){l(a);var d=Reflect.ownKeys(o).filter(b=>{var v=r.get(b);return v===void 0||v.v!==Ge});for(var[c,u]of r)u.v!==Ge&&!(c in o)&&d.push(c);return d},setPrototypeOf(){bd()}})}function Js(e){try{if(e!==null&&typeof e=="object"&&qt in e)return e[qt]}catch{}return e}function ac(e,t){return Object.is(Js(e),Js(t))}var Ha,Ji,Xi,Zi;function sc(){if(Ha===void 0){Ha=window,Ji=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Xi=vr(t,"firstChild").get,Zi=vr(t,"nextSibling").get,qs(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),qs(r)&&(r.__t=void 0)}}function Yt(e=""){return document.createTextNode(e)}function er(e){return Xi.call(e)}function jn(e){return Zi.call(e)}function f(e,t){return er(e)}function H(e,t=!1){{var r=er(e);return r instanceof Comment&&r.data===""?jn(r):r}}function A(e,t=1,r=!1){let n=e;for(;t--;)n=jn(n);return n}function ic(e){e.textContent=""}function Qi(){return!1}function is(e,t,r){return document.createElementNS(t??Ni,e,void 0)}function oc(e,t){if(t){const r=document.body;e.autofocus=!0,Ut(()=>{document.activeElement===r&&e.focus()})}}let Xs=!1;function lc(){Xs||(Xs=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function oa(e){var t=ne,r=ae;St(null),At(null);try{return e()}finally{St(t),At(r)}}function dc(e,t,r,n=r){e.addEventListener(t,()=>oa(r));const a=e.__on_r;a?e.__on_r=()=>{a(),n(!0)}:e.__on_r=()=>n(!0),lc()}function eo(e){ae===null&&(ne===null&&pd(),vd()),xr&&fd()}function cc(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Dt(e,t){var r=ae;r!==null&&(r.f&at)!==0&&(e|=at);var n={ctx:He,deps:null,nodes:null,f:e|Xe|wt,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null},a=n;if((e&vn)!==0)cn!==null?cn.push(n):Wt(n);else if(t!==null){try{fn(n)}catch(i){throw Ze(n),i}a.deps===null&&a.teardown===null&&a.nodes===null&&a.first===a.last&&(a.f&hn)===0&&(a=a.first,(e&_r)!==0&&(e&gr)!==0&&a!==null&&(a.f|=gr))}if(a!==null&&(a.parent=r,r!==null&&cc(a,r),ne!==null&&(ne.f&Qe)!==0&&(e&Hr)===0)){var s=ne;(s.effects??(s.effects=[])).push(a)}return n}function os(){return ne!==null&&!Lt}function la(e){const t=Dt(Fr,null);return Te(t,Je),t.teardown=e,t}function Zn(e){eo();var t=ae.f,r=!ne&&(t&jt)!==0&&(t&pn)===0;if(r){var n=He;(n.e??(n.e=[])).push(e)}else return to(e)}function to(e){return Dt(vn|Mi,e)}function uc(e){return eo(),Dt(Fr|Mi,e)}function fc(e){hr.ensure();const t=Dt(Hr|hn,e);return(r={})=>new Promise(n=>{r.outro?jr(t,()=>{Ze(t),n(void 0)}):(Ze(t),n(void 0))})}function ls(e){return Dt(vn,e)}function vc(e){return Dt(rs|hn,e)}function ds(e,t=0){return Dt(Fr|t,e)}function Y(e,t=[],r=[],n=[]){Wi(n,t,r,a=>{Dt(Fr,()=>e(...a.map(l)))})}function Dn(e,t=0){var r=Dt(_r|t,e);return r}function ro(e,t=0){var r=Dt(sa|t,e);return r}function dt(e){return Dt(jt|hn,e)}function no(e){var t=e.teardown;if(t!==null){const r=xr,n=ne;Zs(!0),St(null);try{t.call(null)}finally{Zs(r),St(n)}}}function cs(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const a=r.ac;a!==null&&oa(()=>{a.abort(Pr)});var n=r.next;(r.f&Hr)!==0?r.parent=null:Ze(r,t),r=n}}function pc(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&jt)===0&&Ze(t),t=r}}function Ze(e,t=!0){var r=!1;(t||(e.f&ld)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(ao(e.nodes.start,e.nodes.end),r=!0),cs(e,t&&!r),Cn(e,0),Te(e,Kt);var n=e.nodes&&e.nodes.t;if(n!==null)for(const s of n)s.stop();no(e);var a=e.parent;a!==null&&a.first!==null&&so(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=null}function ao(e,t){for(;e!==null;){var r=e===t?null:jn(e);e.remove(),e=r}}function so(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function jr(e,t,r=!0){var n=[];io(e,n,!0);var a=()=>{r&&Ze(e),t&&t()},s=n.length;if(s>0){var i=()=>--s||a();for(var o of n)o.out(i)}else a()}function io(e,t,r){if((e.f&at)===0){e.f^=at;var n=e.nodes&&e.nodes.t;if(n!==null)for(const o of n)(o.is_global||r)&&t.push(o);for(var a=e.first;a!==null;){var s=a.next,i=(a.f&gr)!==0||(a.f&jt)!==0&&(e.f&_r)!==0;io(a,t,i?r:!1),a=s}}}function us(e){oo(e,!0)}function oo(e,t){if((e.f&at)!==0){e.f^=at;for(var r=e.first;r!==null;){var n=r.next,a=(r.f&gr)!==0||(r.f&jt)!==0;oo(r,a?t:!1),r=n}var s=e.nodes&&e.nodes.t;if(s!==null)for(const i of s)(i.is_global||t)&&i.in()}}function fs(e,t){if(e.nodes)for(var r=e.nodes.start,n=e.nodes.end;r!==null;){var a=r===n?null:jn(r);t.append(r),r=a}}let Jn=!1,xr=!1;function Zs(e){xr=e}let ne=null,Lt=!1;function St(e){ne=e}let ae=null;function At(e){ae=e}let kt=null;function lo(e){ne!==null&&(kt===null?kt=[e]:kt.push(e))}let lt=null,pt=0,_t=null;function hc(e){_t=e}let co=1,Cr=0,Dr=Cr;function Qs(e){Dr=e}function uo(){return++co}function Fn(e){var t=e.f;if((t&Xe)!==0)return!0;if(t&Qe&&(e.f&=~Gr),(t&Rt)!==0){for(var r=e.deps,n=r.length,a=0;a<n;a++){var s=r[a];if(Fn(s)&&Ki(s),s.wv>e.wv)return!0}(t&wt)!==0&&qe===null&&Te(e,Je)}return!1}function fo(e,t,r=!0){var n=e.reactions;if(n!==null&&!(kt!==null&&ln.call(kt,e)))for(var a=0;a<n.length;a++){var s=n[a];(s.f&Qe)!==0?fo(s,t,!1):t===s&&(r?Te(s,Xe):(s.f&Je)!==0&&Te(s,Rt),Wt(s))}}function vo(e){var g;var t=lt,r=pt,n=_t,a=ne,s=kt,i=He,o=Lt,d=Dr,c=e.f;lt=null,pt=0,_t=null,ne=(c&(jt|Hr))===0?e:null,kt=null,dn(e.ctx),Lt=!1,Dr=++Cr,e.ac!==null&&(oa(()=>{e.ac.abort(Pr)}),e.ac=null);try{e.f|=Ia;var u=e.fn,b=u();e.f|=pn;var v=e.deps,S=te==null?void 0:te.is_fork;if(lt!==null){var p;if(S||Cn(e,pt),v!==null&&pt>0)for(v.length=pt+lt.length,p=0;p<lt.length;p++)v[pt+p]=lt[p];else e.deps=v=lt;if(os()&&(e.f&wt)!==0)for(p=pt;p<v.length;p++)((g=v[p]).reactions??(g.reactions=[])).push(e)}else!S&&v!==null&&pt<v.length&&(Cn(e,pt),v.length=pt);if(Ln()&&_t!==null&&!Lt&&v!==null&&(e.f&(Qe|Rt|Xe))===0)for(p=0;p<_t.length;p++)fo(_t[p],e);if(a!==null&&a!==e){if(Cr++,a.deps!==null)for(let h=0;h<r;h+=1)a.deps[h].rv=Cr;if(t!==null)for(const h of t)h.rv=Cr;_t!==null&&(n===null?n=_t:n.push(..._t))}return(e.f&pr)!==0&&(e.f^=pr),b}catch(h){return ji(h)}finally{e.f^=Ia,lt=t,pt=r,_t=n,ne=a,kt=s,dn(i),Lt=o,Dr=d}}function mc(e,t){let r=t.reactions;if(r!==null){var n=rd.call(r,e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}if(r===null&&(t.f&Qe)!==0&&(lt===null||!ln.call(lt,t))){var s=t;(s.f&wt)!==0&&(s.f^=wt,s.f&=~Gr),ns(s),tc(s),Cn(s,0)}}function Cn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)mc(e,r[n])}function fn(e){var t=e.f;if((t&Kt)===0){Te(e,Je);var r=ae,n=Jn;ae=e,Jn=!0;try{(t&(_r|sa))!==0?pc(e):cs(e),no(e);var a=vo(e);e.teardown=typeof a=="function"?a:null,e.wv=co;var s;Ta&&Ld&&(e.f&Xe)!==0&&e.deps}finally{Jn=n,ae=r}}}async function gc(){await Promise.resolve(),Gd()}function l(e){var t=e.f,r=(t&Qe)!==0;if(ne!==null&&!Lt){var n=ae!==null&&(ae.f&Kt)!==0;if(!n&&(kt===null||!ln.call(kt,e))){var a=ne.deps;if((ne.f&Ia)!==0)e.rv<Cr&&(e.rv=Cr,lt===null&&a!==null&&a[pt]===e?pt++:lt===null?lt=[e]:lt.push(e));else{(ne.deps??(ne.deps=[])).push(e);var s=e.reactions;s===null?e.reactions=[ne]:ln.call(s,ne)||s.push(ne)}}}if(xr&&mr.has(e))return mr.get(e);if(r){var i=e;if(xr){var o=i.v;return((i.f&Je)===0&&i.reactions!==null||ho(i))&&(o=ss(i)),mr.set(i,o),o}var d=(i.f&wt)===0&&!Lt&&ne!==null&&(Jn||(ne.f&wt)!==0),c=(i.f&pn)===0;Fn(i)&&(d&&(i.f|=wt),Ki(i)),d&&!c&&(qi(i),po(i))}if(qe!=null&&qe.has(e))return qe.get(e);if((e.f&pr)!==0)throw e.v;return e.v}function po(e){if(e.f|=wt,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&Qe)!==0&&(t.f&wt)===0&&(qi(t),po(t))}function ho(e){if(e.v===Ge)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(mr.has(t)||(t.f&Qe)!==0&&ho(t))return!0;return!1}function Vr(e){var t=Lt;try{return Lt=!0,e()}finally{Lt=t}}function $r(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(qt in e)Wa(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&qt in r&&Wa(r)}}}function Wa(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{Wa(e[n],t)}catch{}const r=ts(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=Ai(r);for(let a in n){const s=n[a].get;if(s)try{s.call(e)}catch{}}}}}function bc(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const xc=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function _c(e){return xc.includes(e)}const yc={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function wc(e){return e=e.toLowerCase(),yc[e]??e}const kc=["touchstart","touchmove"];function Sc(e){return kc.includes(e)}const Nr=Symbol("events"),mo=new Set,Ka=new Set;function go(e,t,r,n={}){function a(s){if(n.capture||qa.call(t,s),!s.cancelBubble)return oa(()=>r==null?void 0:r.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Ut(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function Ac(e,t,r,n,a){var s={capture:n,passive:a},i=go(e,t,r,s);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&la(()=>{t.removeEventListener(e,i,s)})}function K(e,t,r){(t[Nr]??(t[Nr]={}))[e]=r}function mn(e){for(var t=0;t<e.length;t++)mo.add(e[t]);for(var r of Ka)r(e)}let ei=null;function qa(e){var h,y;var t=this,r=t.ownerDocument,n=e.type,a=((h=e.composedPath)==null?void 0:h.call(e))||[],s=a[0]||e.target;ei=e;var i=0,o=ei===e&&e[Nr];if(o){var d=a.indexOf(o);if(d!==-1&&(t===document||t===window)){e[Nr]=t;return}var c=a.indexOf(t);if(c===-1)return;d<=c&&(i=d)}if(s=a[i]||e.target,s!==t){nd(e,"currentTarget",{configurable:!0,get(){return s||r}});var u=ne,b=ae;St(null),At(null);try{for(var v,S=[];s!==null;){var p=s.assignedSlot||s.parentNode||s.host||null;try{var g=(y=s[Nr])==null?void 0:y[n];g!=null&&(!s.disabled||e.target===s)&&g.call(s,e)}catch(M){v?S.push(M):v=M}if(e.cancelBubble||p===t||p===null)break;s=p}if(v){for(let M of S)queueMicrotask(()=>{throw M});throw v}}finally{e[Nr]=t,delete e.currentTarget,St(u),At(b)}}}var ki;const wa=((ki=globalThis==null?void 0:globalThis.window)==null?void 0:ki.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function zc(e){return(wa==null?void 0:wa.createHTML(e))??e}function bo(e){var t=is("template");return t.innerHTML=zc(e.replaceAll("<!>","<!---->")),t.content}function Br(e,t){var r=ae;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function T(e,t){var r=(t&$d)!==0,n=(t&Pd)!==0,a,s=!e.startsWith("<!>");return()=>{a===void 0&&(a=bo(s?e:"<!>"+e),r||(a=er(a)));var i=n||Ji?document.importNode(a,!0):a.cloneNode(!0);if(r){var o=er(i),d=i.lastChild;Br(o,d)}else Br(i,i);return i}}function Ec(e,t,r="svg"){var n=!e.startsWith("<!>"),a=`<${r}>${n?e:"<!>"+e}</${r}>`,s;return()=>{if(!s){var i=bo(a),o=er(i);s=er(o)}var d=s.cloneNode(!0);return Br(d,d),d}}function Mc(e,t){return Ec(e,t,"svg")}function Xn(e=""){{var t=Yt(e+"");return Br(t,t),t}}function ue(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Yt();return e.append(t,r),Br(t,r),e}function k(e,t){e!==null&&e.before(t)}function re(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=`${r}`)}function $c(e,t){return Pc(e,t)}const Hn=new Map;function Pc(e,{target:t,anchor:r,props:n={},events:a,context:s,intro:i=!0,transformError:o}){sc();var d=void 0,c=fc(()=>{var u=r??t.appendChild(Yt());Wd(u,{pending:()=>{}},S=>{tr({});var p=He;s&&(p.c=s),a&&(n.$$events=a),d=e(S,n)||{},rr()},o);var b=new Set,v=S=>{for(var p=0;p<S.length;p++){var g=S[p];if(!b.has(g)){b.add(g);var h=Sc(g);for(const E of[t,document]){var y=Hn.get(E);y===void 0&&(y=new Map,Hn.set(E,y));var M=y.get(g);M===void 0?(E.addEventListener(g,qa,{passive:h}),y.set(g,1)):y.set(g,M+1)}}}};return v(aa(mo)),Ka.add(v),()=>{var h;for(var S of b)for(const y of[t,document]){var p=Hn.get(y),g=p.get(S);--g==0?(y.removeEventListener(S,qa),p.delete(S),p.size===0&&Hn.delete(y)):p.set(S,g)}Ka.delete(v),u!==r&&((h=u.parentNode)==null||h.removeChild(u))}});return Tc.set(d,c),d}let Tc=new WeakMap;var Ot,Bt,mt,Rr,Nn,In,na;class vs{constructor(t,r=!0){Tt(this,"anchor");oe(this,Ot,new Map);oe(this,Bt,new Map);oe(this,mt,new Map);oe(this,Rr,new Set);oe(this,Nn,!0);oe(this,In,t=>{if(x(this,Ot).has(t)){var r=x(this,Ot).get(t),n=x(this,Bt).get(r);if(n)us(n),x(this,Rr).delete(r);else{var a=x(this,mt).get(r);a&&(a.effect.f&at)===0&&(x(this,Bt).set(r,a.effect),x(this,mt).delete(r),a.fragment.lastChild.remove(),this.anchor.before(a.fragment),n=a.effect)}for(const[s,i]of x(this,Ot)){if(x(this,Ot).delete(s),s===t)break;const o=x(this,mt).get(i);o&&(Ze(o.effect),x(this,mt).delete(i))}for(const[s,i]of x(this,Bt)){if(s===r||x(this,Rr).has(s)||(i.f&at)!==0)continue;const o=()=>{if(Array.from(x(this,Ot).values()).includes(s)){var c=document.createDocumentFragment();fs(i,c),c.append(Yt()),x(this,mt).set(s,{effect:i,fragment:c})}else Ze(i);x(this,Rr).delete(s),x(this,Bt).delete(s)};x(this,Nn)||!n?(x(this,Rr).add(s),jr(i,o,!1)):o()}}});oe(this,na,t=>{x(this,Ot).delete(t);const r=Array.from(x(this,Ot).values());for(const[n,a]of x(this,mt))r.includes(n)||(Ze(a.effect),x(this,mt).delete(n))});this.anchor=t,ee(this,Nn,r)}ensure(t,r){var n=te,a=Qi();if(r&&!x(this,Bt).has(t)&&!x(this,mt).has(t))if(a){var s=document.createDocumentFragment(),i=Yt();s.append(i),x(this,mt).set(t,{effect:dt(()=>r(i)),fragment:s})}else x(this,Bt).set(t,dt(()=>r(this.anchor)));if(x(this,Ot).set(n,t),a){for(const[o,d]of x(this,Bt))o===t?n.unskip_effect(d):n.skip_effect(d);for(const[o,d]of x(this,mt))o===t?n.unskip_effect(d.effect):n.skip_effect(d.effect);n.oncommit(x(this,In)),n.ondiscard(x(this,na))}else x(this,In).call(this,n)}}Ot=new WeakMap,Bt=new WeakMap,mt=new WeakMap,Rr=new WeakMap,Nn=new WeakMap,In=new WeakMap,na=new WeakMap;function F(e,t,r=!1){var n=new vs(e),a=r?gr:0;function s(i,o){n.ensure(i,o)}Dn(()=>{var i=!1;t((o,d=0)=>{i=!0,s(d,o)}),i||s(-1,null)},a)}function ct(e,t){return t}function Cc(e,t,r){for(var n=[],a=t.length,s,i=t.length,o=0;o<a;o++){let b=t[o];jr(b,()=>{if(s){if(s.pending.delete(b),s.done.add(b),s.pending.size===0){var v=e.outrogroups;Ua(e,aa(s.done)),v.delete(s),v.size===0&&(e.outrogroups=null)}}else i-=1},!1)}if(i===0){var d=n.length===0&&r!==null;if(d){var c=r,u=c.parentNode;ic(u),u.append(c),e.items.clear()}Ua(e,t,!d)}else s={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(s)}function Ua(e,t,r=!0){var n;if(e.pending.size>0){n=new Set;for(const i of e.pending.values())for(const o of i)n.add(e.items.get(o).e)}for(var a=0;a<t.length;a++){var s=t[a];if(n!=null&&n.has(s)){s.f|=Ht;const i=document.createDocumentFragment();fs(s,i)}else Ze(t[a],r)}}var ti;function ut(e,t,r,n,a,s=null){var i=e,o=new Map,d=(t&Ti)!==0;if(d){var c=e;i=c.appendChild(Yt())}var u=null,b=as(()=>{var E=r();return es(E)?E:E==null?[]:aa(E)}),v,S=new Map,p=!0;function g(E){(M.effect.f&Kt)===0&&(M.pending.delete(E),M.fallback=u,Nc(M,v,i,t,n),u!==null&&(v.length===0?(u.f&Ht)===0?us(u):(u.f^=Ht,Mn(u,null,i)):jr(u,()=>{u=null})))}function h(E){M.pending.delete(E)}var y=Dn(()=>{v=l(b);for(var E=v.length,_=new Set,$=te,R=Qi(),C=0;C<E;C+=1){var z=v[C],N=n(z,C),V=p?null:o.get(N);V?(V.v&&un(V.v,z),V.i&&un(V.i,C),R&&$.unskip_effect(V.e)):(V=Ic(o,p?i:ti??(ti=Yt()),z,N,C,a,t,r),p||(V.e.f|=Ht),o.set(N,V)),_.add(N)}if(E===0&&s&&!u&&(p?u=dt(()=>s(i)):(u=dt(()=>s(ti??(ti=Yt()))),u.f|=Ht)),E>_.size&&ud(),!p)if(S.set($,_),R){for(const[me,G]of o)_.has(me)||$.skip_effect(G.e);$.oncommit(g),$.ondiscard(h)}else g($);l(b)}),M={effect:y,items:o,pending:S,outrogroups:null,fallback:u};p=!1}function Sn(e){for(;e!==null&&(e.f&jt)===0;)e=e.next;return e}function Nc(e,t,r,n,a){var V,me,G,J,Q,le,q,j,se;var s=(n&kd)!==0,i=t.length,o=e.items,d=Sn(e.effect.first),c,u=null,b,v=[],S=[],p,g,h,y;if(s)for(y=0;y<i;y+=1)p=t[y],g=a(p,y),h=o.get(g).e,(h.f&Ht)===0&&((me=(V=h.nodes)==null?void 0:V.a)==null||me.measure(),(b??(b=new Set)).add(h));for(y=0;y<i;y+=1){if(p=t[y],g=a(p,y),h=o.get(g).e,e.outrogroups!==null)for(const ie of e.outrogroups)ie.pending.delete(h),ie.done.delete(h);if((h.f&Ht)!==0)if(h.f^=Ht,h===d)Mn(h,null,r);else{var M=u?u.next:d;h===e.effect.last&&(e.effect.last=h.prev),h.prev&&(h.prev.next=h.next),h.next&&(h.next.prev=h.prev),ir(e,u,h),ir(e,h,M),Mn(h,M,r),u=h,v=[],S=[],d=Sn(u.next);continue}if((h.f&at)!==0&&(us(h),s&&((J=(G=h.nodes)==null?void 0:G.a)==null||J.unfix(),(b??(b=new Set)).delete(h))),h!==d){if(c!==void 0&&c.has(h)){if(v.length<S.length){var E=S[0],_;u=E.prev;var $=v[0],R=v[v.length-1];for(_=0;_<v.length;_+=1)Mn(v[_],E,r);for(_=0;_<S.length;_+=1)c.delete(S[_]);ir(e,$.prev,R.next),ir(e,u,$),ir(e,R,E),d=E,u=R,y-=1,v=[],S=[]}else c.delete(h),Mn(h,d,r),ir(e,h.prev,h.next),ir(e,h,u===null?e.effect.first:u.next),ir(e,u,h),u=h;continue}for(v=[],S=[];d!==null&&d!==h;)(c??(c=new Set)).add(d),S.push(d),d=Sn(d.next);if(d===null)continue}(h.f&Ht)===0&&v.push(h),u=h,d=Sn(h.next)}if(e.outrogroups!==null){for(const ie of e.outrogroups)ie.pending.size===0&&(Ua(e,aa(ie.done)),(Q=e.outrogroups)==null||Q.delete(ie));e.outrogroups.size===0&&(e.outrogroups=null)}if(d!==null||c!==void 0){var C=[];if(c!==void 0)for(h of c)(h.f&at)===0&&C.push(h);for(;d!==null;)(d.f&at)===0&&d!==e.fallback&&C.push(d),d=Sn(d.next);var z=C.length;if(z>0){var N=(n&Ti)!==0&&i===0?r:null;if(s){for(y=0;y<z;y+=1)(q=(le=C[y].nodes)==null?void 0:le.a)==null||q.measure();for(y=0;y<z;y+=1)(se=(j=C[y].nodes)==null?void 0:j.a)==null||se.fix()}Cc(e,C,N)}}s&&Ut(()=>{var ie,P;if(b!==void 0)for(h of b)(P=(ie=h.nodes)==null?void 0:ie.a)==null||P.apply()})}function Ic(e,t,r,n,a,s,i,o){var d=(i&yd)!==0?(i&Sd)===0?rc(r,!1,!1):br(r):null,c=(i&wd)!==0?br(a):null;return{v:d,i:c,e:dt(()=>(s(t,d??r,c??a,o),()=>{e.delete(n)}))}}function Mn(e,t,r){if(e.nodes)for(var n=e.nodes.start,a=e.nodes.end,s=t&&(t.f&Ht)===0?t.nodes.start:r;n!==null;){var i=jn(n);if(s.before(n),n===a)return;n=i}}function ir(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function ri(e,t,r=!1,n=!1,a=!1){var s=e,i="";Y(()=>{var o=ae;if(i!==(i=t()??"")&&(o.nodes!==null&&(ao(o.nodes.start,o.nodes.end),o.nodes=null),i!=="")){var d=r?Ii:n?Td:void 0,c=is(r?"svg":n?"math":"template",d);c.innerHTML=i;var u=r||n?c:c.content;if(Br(er(u),u.lastChild),r||n)for(;er(u);)s.before(er(u));else s.before(u)}})}function he(e,t,r,n,a){var o;var s=(o=t.$$slots)==null?void 0:o[r],i=!1;s===!0&&(s=t.children,i=!0),s===void 0||s(e,i?()=>n:n)}function Ya(e,t,...r){var n=new vs(e);Dn(()=>{const a=t()??null;n.ensure(a,a&&(s=>a(s,...r)))},gr)}function Oc(e,t,r,n,a,s){var i=null,o=e,d=new vs(o,!1);Dn(()=>{const c=t()||null;var u=Ii;if(c===null){d.ensure(null,null);return}return d.ensure(c,b=>{if(c){if(i=is(c,u),Br(i,i),n){var v=i.appendChild(Yt());n(i,v)}ae.nodes.end=i,b.before(i)}}),()=>{}},gr),la(()=>{})}function Lc(e,t){var r=void 0,n;ro(()=>{r!==(r=t())&&(n&&(Ze(n),n=null),r&&(n=dt(()=>{ls(()=>r(e))})))})}function xo(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=xo(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function _o(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=xo(e))&&(n&&(n+=" "),n+=t);return n}function Ue(e){return typeof e=="object"?_o(e):e??""}const ni=[...` 	
\r\f \v\uFEFF`];function Rc(e,t,r){var n=e==null?"":""+e;if(r){for(var a of Object.keys(r))if(r[a])n=n?n+" "+a:a;else if(n.length)for(var s=a.length,i=0;(i=n.indexOf(a,i))>=0;){var o=i+s;(i===0||ni.includes(n[i-1]))&&(o===n.length||ni.includes(n[o]))?n=(i===0?"":n.substring(0,i))+n.substring(o+1):i=o}}return n===""?null:n}function ai(e,t=!1){var r=t?" !important;":";",n="";for(var a of Object.keys(e)){var s=e[a];s!=null&&s!==""&&(n+=" "+a+": "+s+r)}return n}function ka(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function jc(e,t){if(t){var r="",n,a;if(Array.isArray(t)?(n=t[0],a=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,i=0,o=!1,d=[];n&&d.push(...Object.keys(n).map(ka)),a&&d.push(...Object.keys(a).map(ka));var c=0,u=-1;const g=e.length;for(var b=0;b<g;b++){var v=e[b];if(o?v==="/"&&e[b-1]==="*"&&(o=!1):s?s===v&&(s=!1):v==="/"&&e[b+1]==="*"?o=!0:v==='"'||v==="'"?s=v:v==="("?i++:v===")"&&i--,!o&&s===!1&&i===0){if(v===":"&&u===-1)u=b;else if(v===";"||b===g-1){if(u!==-1){var S=ka(e.substring(c,u).trim());if(!d.includes(S)){v!==";"&&b++;var p=e.substring(c,b).trim();r+=" "+p+";"}}c=b+1,u=-1}}}}return n&&(r+=ai(n)),a&&(r+=ai(a,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Ye(e,t,r,n,a,s){var i=e.__className;if(i!==r||i===void 0){var o=Rc(r,n,s);o==null?e.removeAttribute("class"):t?e.className=o:e.setAttribute("class",o),e.__className=r}else if(s&&a!==s)for(var d in s){var c=!!s[d];(a==null||c!==!!a[d])&&e.classList.toggle(d,c)}return s}function Sa(e,t={},r,n){for(var a in r){var s=r[a];t[a]!==s&&(r[a]==null?e.style.removeProperty(a):e.style.setProperty(a,s,n))}}function yo(e,t,r,n){var a=e.__style;if(a!==t){var s=jc(t,n);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=t}else n&&(Array.isArray(n)?(Sa(e,r==null?void 0:r[0],n[0]),Sa(e,r==null?void 0:r[1],n[1],"important")):Sa(e,r,n));return n}function Ja(e,t,r=!1){if(e.multiple){if(t==null)return;if(!es(t))return Nd();for(var n of e.options)n.selected=t.includes(si(n));return}for(n of e.options){var a=si(n);if(ac(a,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function Dc(e){var t=new MutationObserver(()=>{Ja(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),la(()=>{t.disconnect()})}function si(e){return"__value"in e?e.__value:e.value}const An=Symbol("class"),zn=Symbol("style"),wo=Symbol("is custom element"),ko=Symbol("is html"),Fc=Pi?"option":"OPTION",Gc=Pi?"select":"SELECT";function Vc(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Qn(e,t,r,n){var a=So(e);a[t]!==(a[t]=r)&&(t==="loading"&&(e[dd]=r),r==null?e.removeAttribute(t):typeof r!="string"&&Ao(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function Bc(e,t,r,n,a=!1,s=!1){var i=So(e),o=i[wo],d=!i[ko],c=t||{},u=e.nodeName===Fc;for(var b in t)b in r||(r[b]=null);r.class?r.class=Ue(r.class):r[An]&&(r.class=null),r[zn]&&(r.style??(r.style=null));var v=Ao(e);for(const _ in r){let $=r[_];if(u&&_==="value"&&$==null){e.value=e.__value="",c[_]=$;continue}if(_==="class"){var S=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ye(e,S,$,n,t==null?void 0:t[An],r[An]),c[_]=$,c[An]=r[An];continue}if(_==="style"){yo(e,$,t==null?void 0:t[zn],r[zn]),c[_]=$,c[zn]=r[zn];continue}var p=c[_];if(!($===p&&!($===void 0&&e.hasAttribute(_)))){c[_]=$;var g=_[0]+_[1];if(g!=="$$")if(g==="on"){const R={},C="$$"+_;let z=_.slice(2);var h=_c(z);if(bc(z)&&(z=z.slice(0,-7),R.capture=!0),!h&&p){if($!=null)continue;e.removeEventListener(z,c[C],R),c[C]=null}if(h)K(z,e,$),mn([z]);else if($!=null){let N=function(V){c[_].call(this,V)};var E=N;c[C]=go(z,e,N,R)}}else if(_==="style")Qn(e,_,$);else if(_==="autofocus")oc(e,!!$);else if(!o&&(_==="__value"||_==="value"&&$!=null))e.value=e.__value=$;else if(_==="selected"&&u)Vc(e,$);else{var y=_;d||(y=wc(y));var M=y==="defaultValue"||y==="defaultChecked";if($==null&&!o&&!M)if(i[_]=null,y==="value"||y==="checked"){let R=e;const C=t===void 0;if(y==="value"){let z=R.defaultValue;R.removeAttribute(y),R.defaultValue=z,R.value=R.__value=C?z:null}else{let z=R.defaultChecked;R.removeAttribute(y),R.defaultChecked=z,R.checked=C?z:!1}}else e.removeAttribute(_);else M||v.includes(y)&&(o||typeof $!="string")?(e[y]=$,y in i&&(i[y]=Ge)):typeof $!="function"&&Qn(e,y,$)}}}return c}function ea(e,t,r=[],n=[],a=[],s,i=!1,o=!1){Wi(a,r,n,d=>{var c=void 0,u={},b=e.nodeName===Gc,v=!1;if(ro(()=>{var p=t(...d.map(l)),g=Bc(e,c,p,s,i,o);v&&b&&"value"in p&&Ja(e,p.value);for(let y of Object.getOwnPropertySymbols(u))p[y]||Ze(u[y]);for(let y of Object.getOwnPropertySymbols(p)){var h=p[y];y.description===Cd&&(!c||h!==c[y])&&(u[y]&&Ze(u[y]),u[y]=dt(()=>Lc(e,()=>h))),g[y]=h}c=g}),b){var S=e;ls(()=>{Ja(S,c.value,!0),Dc(S)})}v=!0})}function So(e){return e.__attributes??(e.__attributes={[wo]:e.nodeName.includes("-"),[ko]:e.namespaceURI===Ni})}var ii=new Map;function Ao(e){var t=e.getAttribute("is")||e.nodeName,r=ii.get(t);if(r)return r;ii.set(t,r=[]);for(var n,a=e,s=Element.prototype;s!==a;){n=Ai(a);for(var i in n)n[i].set&&r.push(i);a=ts(a)}return r}function Zr(e,t,r=t){var n=new WeakSet;dc(e,"input",async a=>{var s=a?e.defaultValue:e.value;if(s=Aa(e)?za(s):s,r(s),te!==null&&n.add(te),await gc(),s!==(s=t())){var i=e.selectionStart,o=e.selectionEnd,d=e.value.length;if(e.value=s??"",o!==null){var c=e.value.length;i===o&&o===d&&c>d?(e.selectionStart=c,e.selectionEnd=c):(e.selectionStart=i,e.selectionEnd=Math.min(o,c))}}}),Vr(t)==null&&e.value&&(r(Aa(e)?za(e.value):e.value),te!==null&&n.add(te)),ds(()=>{var a=t();if(e===document.activeElement){var s=Oa??te;if(n.has(s))return}Aa(e)&&a===za(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function Aa(e){var t=e.type;return t==="number"||t==="range"}function za(e){return e===""?null:+e}function oi(e,t){return e===t||(e==null?void 0:e[qt])===t}function zo(e={},t,r,n){return ls(()=>{var a,s;return ds(()=>{a=s,s=[],Vr(()=>{e!==r(...s)&&(t(e,...s),a&&oi(r(...a),e)&&t(null,...a))})}),()=>{Ut(()=>{s&&oi(r(...s),e)&&t(null,...s)})}}),e}function Hc(e=!1){const t=He,r=t.l.u;if(!r)return;let n=()=>$r(t.s);if(e){let a=0,s={};const i=Rn(()=>{let o=!1;const d=t.s;for(const c in d)d[c]!==s[c]&&(s[c]=d[c],o=!0);return o&&a++,a});n=()=>l(i)}r.b.length&&uc(()=>{li(t,n),Ca(r.b)}),Zn(()=>{const a=Vr(()=>r.m.map(od));return()=>{for(const s of a)typeof s=="function"&&s()}}),r.a.length&&Zn(()=>{li(t,n),Ca(r.a)})}function li(e,t){if(e.l.s)for(const r of e.l.s)l(r);t()}let Wn=!1;function Wc(e){var t=Wn;try{return Wn=!1,[e(),Wn]}finally{Wn=t}}const Kc={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function qc(e,t,r){return new Proxy({props:e,exclude:t},Kc)}const Uc={get(e,t){if(!e.exclude.includes(t))return l(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var n=ae;try{At(e.parent_effect),e.special[t]=Re({get[t](){return e.props[t]}},t,Ci)}finally{At(n)}}return e.special[t](r),Pn(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),Pn(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function pe(e,t){return new Proxy({props:e,exclude:t,special:{},version:br(0),parent_effect:ae},Uc)}const Yc={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(kn(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let a=e.props[n];kn(a)&&(a=a());const s=vr(a,t);if(s&&s.set)return s.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(kn(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const a=vr(n,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===qt||t===$i)return!1;for(let r of e.props)if(kn(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(kn(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function be(...e){return new Proxy({props:e},Yc)}function Re(e,t,r,n){var E;var a=!On||(r&zd)!==0,s=(r&Ed)!==0,i=(r&Md)!==0,o=n,d=!0,c=()=>(d&&(d=!1,o=i?Vr(n):n),o),u;if(s){var b=qt in e||$i in e;u=((E=vr(e,t))==null?void 0:E.set)??(b&&t in e?_=>e[t]=_:void 0)}var v,S=!1;s?[v,S]=Wc(()=>e[t]):v=e[t],v===void 0&&n!==void 0&&(v=c(),u&&(a&&md(),u(v)));var p;if(a?p=()=>{var _=e[t];return _===void 0?c():(d=!0,_)}:p=()=>{var _=e[t];return _!==void 0&&(o=void 0),_===void 0?o:_},a&&(r&Ci)===0)return p;if(u){var g=e.$$legacy;return(function(_,$){return arguments.length>0?((!a||!$||g||S)&&u($?p():_),_):p()})}var h=!1,y=((r&Ad)!==0?Rn:as)(()=>(h=!1,p()));s&&l(y);var M=ae;return(function(_,$){if(arguments.length>0){const R=$?l(y):a&&s?tt(_):_;return m(y,R),h=!0,o!==void 0&&(o=R),_}return xr&&h||(M.f&Kt)!==0?y.v:l(y)})}const Jc="5";var Si;typeof window<"u"&&((Si=window.__svelte??(window.__svelte={})).v??(Si.v=new Set)).add(Jc);const yr="";async function Xc(){const e=await fetch(`${yr}/api/status`);if(!e.ok)throw new Error("상태 확인 실패");return e.json()}async function Xr(e,t=null,r=null){const n={provider:e};t&&(n.model=t),r&&(n.api_key=r);const a=await fetch(`${yr}/api/configure`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!a.ok)throw new Error("설정 실패");return a.json()}async function Zc(e){const t=await fetch(`${yr}/api/models/${encodeURIComponent(e)}`);return t.ok?t.json():{models:[]}}function Qc(e,{onProgress:t,onDone:r,onError:n}){const a=new AbortController;return fetch(`${yr}/api/ollama/pull`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:e}),signal:a.signal}).then(async s=>{if(!s.ok){n==null||n("다운로드 실패");return}const i=s.body.getReader(),o=new TextDecoder;let d="";for(;;){const{done:c,value:u}=await i.read();if(c)break;d+=o.decode(u,{stream:!0});const b=d.split(`
`);d=b.pop()||"";for(const v of b)if(v.startsWith("data:"))try{const S=JSON.parse(v.slice(5).trim());S.total&&S.completed!==void 0?t==null||t({total:S.total,completed:S.completed,status:S.status}):S.status&&(t==null||t({status:S.status}))}catch{}}r==null||r()}).catch(s=>{s.name!=="AbortError"&&(n==null||n(s.message))}),{abort:()=>a.abort()}}async function eu(){const e=await fetch(`${yr}/api/oauth/authorize`);if(!e.ok)throw new Error("OAuth 인증 시작 실패");return e.json()}async function tu(){const e=await fetch(`${yr}/api/oauth/status`);return e.ok?e.json():{done:!1}}async function ru(){const e=await fetch(`${yr}/api/oauth/logout`,{method:"POST"});if(!e.ok)throw new Error("로그아웃 실패");return e.json()}function nu(e,t,r={},{onMeta:n,onSnapshot:a,onContext:s,onToolCall:i,onToolResult:o,onChunk:d,onDone:c,onError:u},b=null){const v={question:t,stream:!0,...r};b&&b.length>0&&(v.history=b);const S=new AbortController;return fetch(`${yr}/api/ask`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v),signal:S.signal}).then(async p=>{if(!p.ok){const _=await p.json().catch(()=>({}));u==null||u(_.detail||"스트리밍 실패");return}const g=p.body.getReader(),h=new TextDecoder;let y="",M=!1,E=null;for(;;){const{done:_,value:$}=await g.read();if(_)break;y+=h.decode($,{stream:!0});const R=y.split(`
`);y=R.pop()||"";for(const C of R)if(C.startsWith("event:"))E=C.slice(6).trim();else if(C.startsWith("data:")&&E){const z=C.slice(5).trim();try{const N=JSON.parse(z);E==="meta"?n==null||n(N):E==="snapshot"?a==null||a(N):E==="context"?s==null||s(N):E==="tool_call"?i==null||i(N):E==="tool_result"?o==null||o(N):E==="chunk"?d==null||d(N.text):E==="error"?u==null||u(N.error):E==="done"&&(M||(M=!0,c==null||c()))}catch{}E=null}}M||(M=!0,c==null||c())}).catch(p=>{p.name!=="AbortError"&&(u==null||u(p.message))}),{abort:()=>S.abort()}}const au=(e,t)=>{const r=new Array(e.length+t.length);for(let n=0;n<e.length;n++)r[n]=e[n];for(let n=0;n<t.length;n++)r[e.length+n]=t[n];return r},su=(e,t)=>({classGroupId:e,validator:t}),Eo=(e=new Map,t=null,r)=>({nextPart:e,validators:t,classGroupId:r}),ta="-",di=[],iu="arbitrary..",ou=e=>{const t=du(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:n}=e;return{getClassGroupId:i=>{if(i.startsWith("[")&&i.endsWith("]"))return lu(i);const o=i.split(ta),d=o[0]===""&&o.length>1?1:0;return Mo(o,d,t)},getConflictingClassGroupIds:(i,o)=>{if(o){const d=n[i],c=r[i];return d?c?au(c,d):d:c||di}return r[i]||di}}},Mo=(e,t,r)=>{if(e.length-t===0)return r.classGroupId;const a=e[t],s=r.nextPart.get(a);if(s){const c=Mo(e,t+1,s);if(c)return c}const i=r.validators;if(i===null)return;const o=t===0?e.join(ta):e.slice(t).join(ta),d=i.length;for(let c=0;c<d;c++){const u=i[c];if(u.validator(o))return u.classGroupId}},lu=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const t=e.slice(1,-1),r=t.indexOf(":"),n=t.slice(0,r);return n?iu+n:void 0})(),du=e=>{const{theme:t,classGroups:r}=e;return cu(r,t)},cu=(e,t)=>{const r=Eo();for(const n in e){const a=e[n];ps(a,r,n,t)}return r},ps=(e,t,r,n)=>{const a=e.length;for(let s=0;s<a;s++){const i=e[s];uu(i,t,r,n)}},uu=(e,t,r,n)=>{if(typeof e=="string"){fu(e,t,r);return}if(typeof e=="function"){vu(e,t,r,n);return}pu(e,t,r,n)},fu=(e,t,r)=>{const n=e===""?t:$o(t,e);n.classGroupId=r},vu=(e,t,r,n)=>{if(hu(e)){ps(e(n),t,r,n);return}t.validators===null&&(t.validators=[]),t.validators.push(su(r,e))},pu=(e,t,r,n)=>{const a=Object.entries(e),s=a.length;for(let i=0;i<s;i++){const[o,d]=a[i];ps(d,$o(t,o),r,n)}},$o=(e,t)=>{let r=e;const n=t.split(ta),a=n.length;for(let s=0;s<a;s++){const i=n[s];let o=r.nextPart.get(i);o||(o=Eo(),r.nextPart.set(i,o)),r=o}return r},hu=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,mu=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=Object.create(null),n=Object.create(null);const a=(s,i)=>{r[s]=i,t++,t>e&&(t=0,n=r,r=Object.create(null))};return{get(s){let i=r[s];if(i!==void 0)return i;if((i=n[s])!==void 0)return a(s,i),i},set(s,i){s in r?r[s]=i:a(s,i)}}},Xa="!",ci=":",gu=[],ui=(e,t,r,n,a)=>({modifiers:e,hasImportantModifier:t,baseClassName:r,maybePostfixModifierPosition:n,isExternal:a}),bu=e=>{const{prefix:t,experimentalParseClassName:r}=e;let n=a=>{const s=[];let i=0,o=0,d=0,c;const u=a.length;for(let g=0;g<u;g++){const h=a[g];if(i===0&&o===0){if(h===ci){s.push(a.slice(d,g)),d=g+1;continue}if(h==="/"){c=g;continue}}h==="["?i++:h==="]"?i--:h==="("?o++:h===")"&&o--}const b=s.length===0?a:a.slice(d);let v=b,S=!1;b.endsWith(Xa)?(v=b.slice(0,-1),S=!0):b.startsWith(Xa)&&(v=b.slice(1),S=!0);const p=c&&c>d?c-d:void 0;return ui(s,S,v,p)};if(t){const a=t+ci,s=n;n=i=>i.startsWith(a)?s(i.slice(a.length)):ui(gu,!1,i,void 0,!0)}if(r){const a=n;n=s=>r({className:s,parseClassName:a})}return n},xu=e=>{const t=new Map;return e.orderSensitiveModifiers.forEach((r,n)=>{t.set(r,1e6+n)}),r=>{const n=[];let a=[];for(let s=0;s<r.length;s++){const i=r[s],o=i[0]==="[",d=t.has(i);o||d?(a.length>0&&(a.sort(),n.push(...a),a=[]),n.push(i)):a.push(i)}return a.length>0&&(a.sort(),n.push(...a)),n}},_u=e=>({cache:mu(e.cacheSize),parseClassName:bu(e),sortModifiers:xu(e),...ou(e)}),yu=/\s+/,wu=(e,t)=>{const{parseClassName:r,getClassGroupId:n,getConflictingClassGroupIds:a,sortModifiers:s}=t,i=[],o=e.trim().split(yu);let d="";for(let c=o.length-1;c>=0;c-=1){const u=o[c],{isExternal:b,modifiers:v,hasImportantModifier:S,baseClassName:p,maybePostfixModifierPosition:g}=r(u);if(b){d=u+(d.length>0?" "+d:d);continue}let h=!!g,y=n(h?p.substring(0,g):p);if(!y){if(!h){d=u+(d.length>0?" "+d:d);continue}if(y=n(p),!y){d=u+(d.length>0?" "+d:d);continue}h=!1}const M=v.length===0?"":v.length===1?v[0]:s(v).join(":"),E=S?M+Xa:M,_=E+y;if(i.indexOf(_)>-1)continue;i.push(_);const $=a(y,h);for(let R=0;R<$.length;++R){const C=$[R];i.push(E+C)}d=u+(d.length>0?" "+d:d)}return d},ku=(...e)=>{let t=0,r,n,a="";for(;t<e.length;)(r=e[t++])&&(n=Po(r))&&(a&&(a+=" "),a+=n);return a},Po=e=>{if(typeof e=="string")return e;let t,r="";for(let n=0;n<e.length;n++)e[n]&&(t=Po(e[n]))&&(r&&(r+=" "),r+=t);return r},Su=(e,...t)=>{let r,n,a,s;const i=d=>{const c=t.reduce((u,b)=>b(u),e());return r=_u(c),n=r.cache.get,a=r.cache.set,s=o,o(d)},o=d=>{const c=n(d);if(c)return c;const u=wu(d,r);return a(d,u),u};return s=i,(...d)=>s(ku(...d))},Au=[],Le=e=>{const t=r=>r[e]||Au;return t.isThemeGetter=!0,t},To=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Co=/^\((?:(\w[\w-]*):)?(.+)\)$/i,zu=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,Eu=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Mu=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,$u=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Pu=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Tu=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,or=e=>zu.test(e),Z=e=>!!e&&!Number.isNaN(Number(e)),lr=e=>!!e&&Number.isInteger(Number(e)),Ea=e=>e.endsWith("%")&&Z(e.slice(0,-1)),Xt=e=>Eu.test(e),No=()=>!0,Cu=e=>Mu.test(e)&&!$u.test(e),hs=()=>!1,Nu=e=>Pu.test(e),Iu=e=>Tu.test(e),Ou=e=>!I(e)&&!L(e),Lu=e=>wr(e,Lo,hs),I=e=>To.test(e),Er=e=>wr(e,Ro,Cu),fi=e=>wr(e,Hu,Z),Ru=e=>wr(e,Do,No),ju=e=>wr(e,jo,hs),vi=e=>wr(e,Io,hs),Du=e=>wr(e,Oo,Iu),Kn=e=>wr(e,Fo,Nu),L=e=>Co.test(e),En=e=>Wr(e,Ro),Fu=e=>Wr(e,jo),pi=e=>Wr(e,Io),Gu=e=>Wr(e,Lo),Vu=e=>Wr(e,Oo),qn=e=>Wr(e,Fo,!0),Bu=e=>Wr(e,Do,!0),wr=(e,t,r)=>{const n=To.exec(e);return n?n[1]?t(n[1]):r(n[2]):!1},Wr=(e,t,r=!1)=>{const n=Co.exec(e);return n?n[1]?t(n[1]):r:!1},Io=e=>e==="position"||e==="percentage",Oo=e=>e==="image"||e==="url",Lo=e=>e==="length"||e==="size"||e==="bg-size",Ro=e=>e==="length",Hu=e=>e==="number",jo=e=>e==="family-name",Do=e=>e==="number"||e==="weight",Fo=e=>e==="shadow",Wu=()=>{const e=Le("color"),t=Le("font"),r=Le("text"),n=Le("font-weight"),a=Le("tracking"),s=Le("leading"),i=Le("breakpoint"),o=Le("container"),d=Le("spacing"),c=Le("radius"),u=Le("shadow"),b=Le("inset-shadow"),v=Le("text-shadow"),S=Le("drop-shadow"),p=Le("blur"),g=Le("perspective"),h=Le("aspect"),y=Le("ease"),M=Le("animate"),E=()=>["auto","avoid","all","avoid-page","page","left","right","column"],_=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],$=()=>[..._(),L,I],R=()=>["auto","hidden","clip","visible","scroll"],C=()=>["auto","contain","none"],z=()=>[L,I,d],N=()=>[or,"full","auto",...z()],V=()=>[lr,"none","subgrid",L,I],me=()=>["auto",{span:["full",lr,L,I]},lr,L,I],G=()=>[lr,"auto",L,I],J=()=>["auto","min","max","fr",L,I],Q=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],le=()=>["start","end","center","stretch","center-safe","end-safe"],q=()=>["auto",...z()],j=()=>[or,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...z()],se=()=>[or,"screen","full","dvw","lvw","svw","min","max","fit",...z()],ie=()=>[or,"screen","full","lh","dvh","lvh","svh","min","max","fit",...z()],P=()=>[e,L,I],X=()=>[..._(),pi,vi,{position:[L,I]}],B=()=>["no-repeat",{repeat:["","x","y","space","round"]}],fe=()=>["auto","cover","contain",Gu,Lu,{size:[L,I]}],Ee=()=>[Ea,En,Er],ye=()=>["","none","full",c,L,I],De=()=>["",Z,En,Er],zt=()=>["solid","dashed","dotted","double"],Et=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Me=()=>[Z,Ea,pi,vi],kr=()=>["","none",p,L,I],nr=()=>["none",Z,L,I],Sr=()=>["none",Z,L,I],gn=()=>[Z,L,I],Kr=()=>[or,"full",...z()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Xt],breakpoint:[Xt],color:[No],container:[Xt],"drop-shadow":[Xt],ease:["in","out","in-out"],font:[Ou],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Xt],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Xt],shadow:[Xt],spacing:["px",Z],text:[Xt],"text-shadow":[Xt],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",or,I,L,h]}],container:["container"],columns:[{columns:[Z,I,L,o]}],"break-after":[{"break-after":E()}],"break-before":[{"break-before":E()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:$()}],overflow:[{overflow:R()}],"overflow-x":[{"overflow-x":R()}],"overflow-y":[{"overflow-y":R()}],overscroll:[{overscroll:C()}],"overscroll-x":[{"overscroll-x":C()}],"overscroll-y":[{"overscroll-y":C()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:N()}],"inset-x":[{"inset-x":N()}],"inset-y":[{"inset-y":N()}],start:[{"inset-s":N(),start:N()}],end:[{"inset-e":N(),end:N()}],"inset-bs":[{"inset-bs":N()}],"inset-be":[{"inset-be":N()}],top:[{top:N()}],right:[{right:N()}],bottom:[{bottom:N()}],left:[{left:N()}],visibility:["visible","invisible","collapse"],z:[{z:[lr,"auto",L,I]}],basis:[{basis:[or,"full","auto",o,...z()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Z,or,"auto","initial","none",I]}],grow:[{grow:["",Z,L,I]}],shrink:[{shrink:["",Z,L,I]}],order:[{order:[lr,"first","last","none",L,I]}],"grid-cols":[{"grid-cols":V()}],"col-start-end":[{col:me()}],"col-start":[{"col-start":G()}],"col-end":[{"col-end":G()}],"grid-rows":[{"grid-rows":V()}],"row-start-end":[{row:me()}],"row-start":[{"row-start":G()}],"row-end":[{"row-end":G()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":J()}],"auto-rows":[{"auto-rows":J()}],gap:[{gap:z()}],"gap-x":[{"gap-x":z()}],"gap-y":[{"gap-y":z()}],"justify-content":[{justify:[...Q(),"normal"]}],"justify-items":[{"justify-items":[...le(),"normal"]}],"justify-self":[{"justify-self":["auto",...le()]}],"align-content":[{content:["normal",...Q()]}],"align-items":[{items:[...le(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...le(),{baseline:["","last"]}]}],"place-content":[{"place-content":Q()}],"place-items":[{"place-items":[...le(),"baseline"]}],"place-self":[{"place-self":["auto",...le()]}],p:[{p:z()}],px:[{px:z()}],py:[{py:z()}],ps:[{ps:z()}],pe:[{pe:z()}],pbs:[{pbs:z()}],pbe:[{pbe:z()}],pt:[{pt:z()}],pr:[{pr:z()}],pb:[{pb:z()}],pl:[{pl:z()}],m:[{m:q()}],mx:[{mx:q()}],my:[{my:q()}],ms:[{ms:q()}],me:[{me:q()}],mbs:[{mbs:q()}],mbe:[{mbe:q()}],mt:[{mt:q()}],mr:[{mr:q()}],mb:[{mb:q()}],ml:[{ml:q()}],"space-x":[{"space-x":z()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":z()}],"space-y-reverse":["space-y-reverse"],size:[{size:j()}],"inline-size":[{inline:["auto",...se()]}],"min-inline-size":[{"min-inline":["auto",...se()]}],"max-inline-size":[{"max-inline":["none",...se()]}],"block-size":[{block:["auto",...ie()]}],"min-block-size":[{"min-block":["auto",...ie()]}],"max-block-size":[{"max-block":["none",...ie()]}],w:[{w:[o,"screen",...j()]}],"min-w":[{"min-w":[o,"screen","none",...j()]}],"max-w":[{"max-w":[o,"screen","none","prose",{screen:[i]},...j()]}],h:[{h:["screen","lh",...j()]}],"min-h":[{"min-h":["screen","lh","none",...j()]}],"max-h":[{"max-h":["screen","lh",...j()]}],"font-size":[{text:["base",r,En,Er]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[n,Bu,Ru]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Ea,I]}],"font-family":[{font:[Fu,ju,t]}],"font-features":[{"font-features":[I]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[a,L,I]}],"line-clamp":[{"line-clamp":[Z,"none",L,fi]}],leading:[{leading:[s,...z()]}],"list-image":[{"list-image":["none",L,I]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",L,I]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:P()}],"text-color":[{text:P()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...zt(),"wavy"]}],"text-decoration-thickness":[{decoration:[Z,"from-font","auto",L,Er]}],"text-decoration-color":[{decoration:P()}],"underline-offset":[{"underline-offset":[Z,"auto",L,I]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:z()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",L,I]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",L,I]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:X()}],"bg-repeat":[{bg:B()}],"bg-size":[{bg:fe()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},lr,L,I],radial:["",L,I],conic:[lr,L,I]},Vu,Du]}],"bg-color":[{bg:P()}],"gradient-from-pos":[{from:Ee()}],"gradient-via-pos":[{via:Ee()}],"gradient-to-pos":[{to:Ee()}],"gradient-from":[{from:P()}],"gradient-via":[{via:P()}],"gradient-to":[{to:P()}],rounded:[{rounded:ye()}],"rounded-s":[{"rounded-s":ye()}],"rounded-e":[{"rounded-e":ye()}],"rounded-t":[{"rounded-t":ye()}],"rounded-r":[{"rounded-r":ye()}],"rounded-b":[{"rounded-b":ye()}],"rounded-l":[{"rounded-l":ye()}],"rounded-ss":[{"rounded-ss":ye()}],"rounded-se":[{"rounded-se":ye()}],"rounded-ee":[{"rounded-ee":ye()}],"rounded-es":[{"rounded-es":ye()}],"rounded-tl":[{"rounded-tl":ye()}],"rounded-tr":[{"rounded-tr":ye()}],"rounded-br":[{"rounded-br":ye()}],"rounded-bl":[{"rounded-bl":ye()}],"border-w":[{border:De()}],"border-w-x":[{"border-x":De()}],"border-w-y":[{"border-y":De()}],"border-w-s":[{"border-s":De()}],"border-w-e":[{"border-e":De()}],"border-w-bs":[{"border-bs":De()}],"border-w-be":[{"border-be":De()}],"border-w-t":[{"border-t":De()}],"border-w-r":[{"border-r":De()}],"border-w-b":[{"border-b":De()}],"border-w-l":[{"border-l":De()}],"divide-x":[{"divide-x":De()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":De()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...zt(),"hidden","none"]}],"divide-style":[{divide:[...zt(),"hidden","none"]}],"border-color":[{border:P()}],"border-color-x":[{"border-x":P()}],"border-color-y":[{"border-y":P()}],"border-color-s":[{"border-s":P()}],"border-color-e":[{"border-e":P()}],"border-color-bs":[{"border-bs":P()}],"border-color-be":[{"border-be":P()}],"border-color-t":[{"border-t":P()}],"border-color-r":[{"border-r":P()}],"border-color-b":[{"border-b":P()}],"border-color-l":[{"border-l":P()}],"divide-color":[{divide:P()}],"outline-style":[{outline:[...zt(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Z,L,I]}],"outline-w":[{outline:["",Z,En,Er]}],"outline-color":[{outline:P()}],shadow:[{shadow:["","none",u,qn,Kn]}],"shadow-color":[{shadow:P()}],"inset-shadow":[{"inset-shadow":["none",b,qn,Kn]}],"inset-shadow-color":[{"inset-shadow":P()}],"ring-w":[{ring:De()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:P()}],"ring-offset-w":[{"ring-offset":[Z,Er]}],"ring-offset-color":[{"ring-offset":P()}],"inset-ring-w":[{"inset-ring":De()}],"inset-ring-color":[{"inset-ring":P()}],"text-shadow":[{"text-shadow":["none",v,qn,Kn]}],"text-shadow-color":[{"text-shadow":P()}],opacity:[{opacity:[Z,L,I]}],"mix-blend":[{"mix-blend":[...Et(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Et()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Z]}],"mask-image-linear-from-pos":[{"mask-linear-from":Me()}],"mask-image-linear-to-pos":[{"mask-linear-to":Me()}],"mask-image-linear-from-color":[{"mask-linear-from":P()}],"mask-image-linear-to-color":[{"mask-linear-to":P()}],"mask-image-t-from-pos":[{"mask-t-from":Me()}],"mask-image-t-to-pos":[{"mask-t-to":Me()}],"mask-image-t-from-color":[{"mask-t-from":P()}],"mask-image-t-to-color":[{"mask-t-to":P()}],"mask-image-r-from-pos":[{"mask-r-from":Me()}],"mask-image-r-to-pos":[{"mask-r-to":Me()}],"mask-image-r-from-color":[{"mask-r-from":P()}],"mask-image-r-to-color":[{"mask-r-to":P()}],"mask-image-b-from-pos":[{"mask-b-from":Me()}],"mask-image-b-to-pos":[{"mask-b-to":Me()}],"mask-image-b-from-color":[{"mask-b-from":P()}],"mask-image-b-to-color":[{"mask-b-to":P()}],"mask-image-l-from-pos":[{"mask-l-from":Me()}],"mask-image-l-to-pos":[{"mask-l-to":Me()}],"mask-image-l-from-color":[{"mask-l-from":P()}],"mask-image-l-to-color":[{"mask-l-to":P()}],"mask-image-x-from-pos":[{"mask-x-from":Me()}],"mask-image-x-to-pos":[{"mask-x-to":Me()}],"mask-image-x-from-color":[{"mask-x-from":P()}],"mask-image-x-to-color":[{"mask-x-to":P()}],"mask-image-y-from-pos":[{"mask-y-from":Me()}],"mask-image-y-to-pos":[{"mask-y-to":Me()}],"mask-image-y-from-color":[{"mask-y-from":P()}],"mask-image-y-to-color":[{"mask-y-to":P()}],"mask-image-radial":[{"mask-radial":[L,I]}],"mask-image-radial-from-pos":[{"mask-radial-from":Me()}],"mask-image-radial-to-pos":[{"mask-radial-to":Me()}],"mask-image-radial-from-color":[{"mask-radial-from":P()}],"mask-image-radial-to-color":[{"mask-radial-to":P()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":_()}],"mask-image-conic-pos":[{"mask-conic":[Z]}],"mask-image-conic-from-pos":[{"mask-conic-from":Me()}],"mask-image-conic-to-pos":[{"mask-conic-to":Me()}],"mask-image-conic-from-color":[{"mask-conic-from":P()}],"mask-image-conic-to-color":[{"mask-conic-to":P()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:X()}],"mask-repeat":[{mask:B()}],"mask-size":[{mask:fe()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",L,I]}],filter:[{filter:["","none",L,I]}],blur:[{blur:kr()}],brightness:[{brightness:[Z,L,I]}],contrast:[{contrast:[Z,L,I]}],"drop-shadow":[{"drop-shadow":["","none",S,qn,Kn]}],"drop-shadow-color":[{"drop-shadow":P()}],grayscale:[{grayscale:["",Z,L,I]}],"hue-rotate":[{"hue-rotate":[Z,L,I]}],invert:[{invert:["",Z,L,I]}],saturate:[{saturate:[Z,L,I]}],sepia:[{sepia:["",Z,L,I]}],"backdrop-filter":[{"backdrop-filter":["","none",L,I]}],"backdrop-blur":[{"backdrop-blur":kr()}],"backdrop-brightness":[{"backdrop-brightness":[Z,L,I]}],"backdrop-contrast":[{"backdrop-contrast":[Z,L,I]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Z,L,I]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Z,L,I]}],"backdrop-invert":[{"backdrop-invert":["",Z,L,I]}],"backdrop-opacity":[{"backdrop-opacity":[Z,L,I]}],"backdrop-saturate":[{"backdrop-saturate":[Z,L,I]}],"backdrop-sepia":[{"backdrop-sepia":["",Z,L,I]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":z()}],"border-spacing-x":[{"border-spacing-x":z()}],"border-spacing-y":[{"border-spacing-y":z()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",L,I]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Z,"initial",L,I]}],ease:[{ease:["linear","initial",y,L,I]}],delay:[{delay:[Z,L,I]}],animate:[{animate:["none",M,L,I]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[g,L,I]}],"perspective-origin":[{"perspective-origin":$()}],rotate:[{rotate:nr()}],"rotate-x":[{"rotate-x":nr()}],"rotate-y":[{"rotate-y":nr()}],"rotate-z":[{"rotate-z":nr()}],scale:[{scale:Sr()}],"scale-x":[{"scale-x":Sr()}],"scale-y":[{"scale-y":Sr()}],"scale-z":[{"scale-z":Sr()}],"scale-3d":["scale-3d"],skew:[{skew:gn()}],"skew-x":[{"skew-x":gn()}],"skew-y":[{"skew-y":gn()}],transform:[{transform:[L,I,"","none","gpu","cpu"]}],"transform-origin":[{origin:$()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Kr()}],"translate-x":[{"translate-x":Kr()}],"translate-y":[{"translate-y":Kr()}],"translate-z":[{"translate-z":Kr()}],"translate-none":["translate-none"],accent:[{accent:P()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:P()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",L,I]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":z()}],"scroll-mx":[{"scroll-mx":z()}],"scroll-my":[{"scroll-my":z()}],"scroll-ms":[{"scroll-ms":z()}],"scroll-me":[{"scroll-me":z()}],"scroll-mbs":[{"scroll-mbs":z()}],"scroll-mbe":[{"scroll-mbe":z()}],"scroll-mt":[{"scroll-mt":z()}],"scroll-mr":[{"scroll-mr":z()}],"scroll-mb":[{"scroll-mb":z()}],"scroll-ml":[{"scroll-ml":z()}],"scroll-p":[{"scroll-p":z()}],"scroll-px":[{"scroll-px":z()}],"scroll-py":[{"scroll-py":z()}],"scroll-ps":[{"scroll-ps":z()}],"scroll-pe":[{"scroll-pe":z()}],"scroll-pbs":[{"scroll-pbs":z()}],"scroll-pbe":[{"scroll-pbe":z()}],"scroll-pt":[{"scroll-pt":z()}],"scroll-pr":[{"scroll-pr":z()}],"scroll-pb":[{"scroll-pb":z()}],"scroll-pl":[{"scroll-pl":z()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",L,I]}],fill:[{fill:["none",...P()]}],"stroke-w":[{stroke:[Z,En,Er,fi]}],stroke:[{stroke:["none",...P()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Ku=Su(Wu);function Be(...e){return Ku(_o(e))}const Za="dartlab-conversations",hi=50;function qu(){return Date.now().toString(36)+Math.random().toString(36).slice(2,8)}function Uu(){try{const e=localStorage.getItem(Za);return e?JSON.parse(e):{conversations:[],activeId:null}}catch{return{conversations:[],activeId:null}}}function Yu(e){try{localStorage.setItem(Za,JSON.stringify(e))}catch{if(e.conversations.length>5){e.conversations=e.conversations.slice(0,e.conversations.length-5);try{localStorage.setItem(Za,JSON.stringify(e))}catch{}}}}function Ju(){const e=Uu();let t=W(tt(e.conversations)),r=W(tt(e.activeId));l(r)&&!l(t).find(v=>v.id===l(r))&&m(r,null);function n(){Yu({conversations:l(t),activeId:l(r)})}function a(){return l(t).find(v=>v.id===l(r))||null}function s(){const v={id:qu(),title:"새 대화",messages:[],createdAt:Date.now(),updatedAt:Date.now()};return m(t,[v,...l(t)],!0),l(t).length>hi&&m(t,l(t).slice(0,hi),!0),m(r,v.id,!0),n(),v.id}function i(v){l(t).find(S=>S.id===v)&&(m(r,v,!0),n())}function o(v,S,p=null){const g=a();if(!g)return;const h={role:v,text:S};p&&(h.meta=p),g.messages=[...g.messages,h],g.updatedAt=Date.now(),g.title==="새 대화"&&v==="user"&&(g.title=S.length>30?S.slice(0,30)+"...":S),m(t,[...l(t)],!0),n()}function d(v){const S=a();if(!S||S.messages.length===0)return;const p=S.messages[S.messages.length-1];Object.assign(p,v),S.updatedAt=Date.now(),m(t,[...l(t)],!0),n()}function c(v){m(t,l(t).filter(S=>S.id!==v),!0),l(r)===v&&m(r,l(t).length>0?l(t)[0].id:null,!0),n()}function u(v,S){const p=l(t).find(g=>g.id===v);p&&(p.title=S,m(t,[...l(t)],!0),n())}function b(){m(t,[],!0),m(r,null),n()}return{get conversations(){return l(t)},get activeId(){return l(r)},get active(){return a()},createConversation:s,setActive:i,addMessage:o,updateLastMessage:d,deleteConversation:c,updateTitle:u,clearAll:b}}var Xu=T("<a><!></a>"),Zu=T("<button><!></button>");function Qu(e,t){tr(t,!0);let r=Re(t,"variant",3,"default"),n=Re(t,"size",3,"default"),a=qc(t,["$$slots","$$events","$$legacy","variant","size","class","children"]);const s={default:"bg-gradient-to-r from-dl-primary to-dl-primary-dark text-white shadow-lg shadow-dl-primary/25 hover:shadow-dl-primary/40 hover:-translate-y-0.5",secondary:"bg-dl-bg-card border border-dl-border text-dl-text-muted hover:text-dl-text hover:bg-dl-bg-card-hover",ghost:"text-dl-text-muted hover:text-dl-text hover:bg-white/5",outline:"border border-dl-border text-dl-text-muted hover:text-dl-text hover:border-dl-primary/50"},i={default:"px-5 py-2 text-sm",sm:"px-3 py-1.5 text-xs",lg:"px-7 py-3 text-base",icon:"w-9 h-9"};var o=ue(),d=H(o);{var c=b=>{var v=Xu();ea(v,p=>({class:p,...a}),[()=>Be("inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer no-underline",s[r()],i[n()],t.class)]);var S=f(v);Ya(S,()=>t.children),k(b,v)},u=b=>{var v=Zu();ea(v,p=>({class:p,...a}),[()=>Be("inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer",s[r()],i[n()],t.class)]);var S=f(v);Ya(S,()=>t.children),k(b,v)};F(d,b=>{t.href?b(c):b(u,-1)})}k(e,o),rr()}Rd();/**
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
 */const ef={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
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
 */const tf=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
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
 */const mi=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();var rf=Mc("<svg><!><!></svg>");function xe(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]),n=pe(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);tr(t,!1);let a=Re(t,"name",8,void 0),s=Re(t,"color",8,"currentColor"),i=Re(t,"size",8,24),o=Re(t,"strokeWidth",8,2),d=Re(t,"absoluteStrokeWidth",8,!1),c=Re(t,"iconNode",24,()=>[]);Hc();var u=rf();ea(u,(S,p,g)=>({...ef,...S,...n,width:i(),height:i(),stroke:s(),"stroke-width":p,class:g}),[()=>tf(n)?void 0:{"aria-hidden":"true"},()=>($r(d()),$r(o()),$r(i()),Vr(()=>d()?Number(o())*24/Number(i()):o())),()=>($r(mi),$r(a()),$r(r),Vr(()=>mi("lucide-icon","lucide",a()?`lucide-${a()}`:"",r.class)))]);var b=f(u);ut(b,1,c,ct,(S,p)=>{var g=Ve(()=>Ei(l(p),2));let h=()=>l(g)[0],y=()=>l(g)[1];var M=ue(),E=H(M);Oc(E,h,!0,(_,$)=>{ea(_,()=>({...y()}))}),k(S,M)});var v=A(b);he(v,t,"default",{}),k(e,u),rr()}function Go(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];xe(e,be({name:"arrow-up"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=ue(),o=H(i);he(o,t,"default",{}),k(a,i)},$$slots:{default:!0}}))}function nf(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M20 6 9 17l-5-5"}]];xe(e,be({name:"check"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=ue(),o=H(i);he(o,t,"default",{}),k(a,i)},$$slots:{default:!0}}))}function Mr(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];xe(e,be({name:"circle-alert"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=ue(),o=H(i);he(o,t,"default",{}),k(a,i)},$$slots:{default:!0}}))}function Ma(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];xe(e,be({name:"circle-check"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=ue(),o=H(i);he(o,t,"default",{}),k(a,i)},$$slots:{default:!0}}))}function af(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 6v6l4 2"}]];xe(e,be({name:"clock"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=ue(),o=H(i);he(o,t,"default",{}),k(a,i)},$$slots:{default:!0}}))}function sf(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m16 18 6-6-6-6"}],["path",{d:"m8 6-6 6 6 6"}]];xe(e,be({name:"code"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=ue(),o=H(i);he(o,t,"default",{}),k(a,i)},$$slots:{default:!0}}))}function of(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 2v2"}],["path",{d:"M14 2v2"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"}],["path",{d:"M6 2v2"}]];xe(e,be({name:"coffee"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=ue(),o=H(i);he(o,t,"default",{}),k(a,i)},$$slots:{default:!0}}))}function $a(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]];xe(e,be({name:"database"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=ue(),o=H(i);he(o,t,"default",{}),k(a,i)},$$slots:{default:!0}}))}function Pa(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];xe(e,be({name:"download"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=ue(),o=H(i);he(o,t,"default",{}),k(a,i)},$$slots:{default:!0}}))}function gi(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];xe(e,be({name:"external-link"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=ue(),o=H(i);he(o,t,"default",{}),k(a,i)},$$slots:{default:!0}}))}function Vo(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];xe(e,be({name:"file-text"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=ue(),o=H(i);he(o,t,"default",{}),k(a,i)},$$slots:{default:!0}}))}function lf(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];xe(e,be({name:"github"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=ue(),o=H(i);he(o,t,"default",{}),k(a,i)},$$slots:{default:!0}}))}function bi(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"}],["path",{d:"m21 2-9.6 9.6"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5"}]];xe(e,be({name:"key"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=ue(),o=H(i);he(o,t,"default",{}),k(a,i)},$$slots:{default:!0}}))}function Nt(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];xe(e,be({name:"loader-circle"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=ue(),o=H(i);he(o,t,"default",{}),k(a,i)},$$slots:{default:!0}}))}function df(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m10 17 5-5-5-5"}],["path",{d:"M15 12H3"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}]];xe(e,be({name:"log-in"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=ue(),o=H(i);he(o,t,"default",{}),k(a,i)},$$slots:{default:!0}}))}function cf(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];xe(e,be({name:"log-out"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=ue(),o=H(i);he(o,t,"default",{}),k(a,i)},$$slots:{default:!0}}))}function uf(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];xe(e,be({name:"menu"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=ue(),o=H(i);he(o,t,"default",{}),k(a,i)},$$slots:{default:!0}}))}function xi(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}]];xe(e,be({name:"message-square"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=ue(),o=H(i);he(o,t,"default",{}),k(a,i)},$$slots:{default:!0}}))}function ff(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"m16 15-3-3 3-3"}]];xe(e,be({name:"panel-left-close"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=ue(),o=H(i);he(o,t,"default",{}),k(a,i)},$$slots:{default:!0}}))}function _i(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];xe(e,be({name:"plus"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=ue(),o=H(i);he(o,t,"default",{}),k(a,i)},$$slots:{default:!0}}))}function vf(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];xe(e,be({name:"search"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=ue(),o=H(i);he(o,t,"default",{}),k(a,i)},$$slots:{default:!0}}))}function pf(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];xe(e,be({name:"settings"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=ue(),o=H(i);he(o,t,"default",{}),k(a,i)},$$slots:{default:!0}}))}function hf(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];xe(e,be({name:"square"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=ue(),o=H(i);he(o,t,"default",{}),k(a,i)},$$slots:{default:!0}}))}function mf(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 19h8"}],["path",{d:"m4 17 6-6-6-6"}]];xe(e,be({name:"terminal"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=ue(),o=H(i);he(o,t,"default",{}),k(a,i)},$$slots:{default:!0}}))}function gf(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];xe(e,be({name:"trash-2"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=ue(),o=H(i);he(o,t,"default",{}),k(a,i)},$$slots:{default:!0}}))}function bf(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];xe(e,be({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=ue(),o=H(i);he(o,t,"default",{}),k(a,i)},$$slots:{default:!0}}))}function yi(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"}]];xe(e,be({name:"wrench"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=ue(),o=H(i);he(o,t,"default",{}),k(a,i)},$$slots:{default:!0}}))}function Bo(e,t){const r=pe(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];xe(e,be({name:"x"},()=>r,{get iconNode(){return n},children:(a,s)=>{var i=ue(),o=H(i);he(o,t,"default",{}),k(a,i)},$$slots:{default:!0}}))}var xf=T("<!> 새 대화",1),_f=T('<div class="px-3 pb-2"><div class="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-dl-bg-card border border-dl-border"><!> <input type="text" placeholder="대화 검색..." class="flex-1 bg-transparent border-none outline-none text-[12px] text-dl-text placeholder:text-dl-text-dim"/></div></div>'),yf=T('<div role="button" tabindex="0"><!> <span class="flex-1 truncate"> </span> <button class="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-dl-bg-card-hover text-dl-text-dim hover:text-dl-primary transition-all"><!></button></div>'),wf=T('<div><div class="px-2 py-1.5 text-[11px] font-medium text-dl-text-dim uppercase tracking-wider"> </div> <!></div>'),kf=T('<div class="flex-shrink-0 px-4 py-2.5 border-t border-dl-border/50 text-[10px] text-dl-text-dim"> </div>'),Sf=T('<div class="flex flex-col h-full min-w-[260px]"><div class="flex items-center gap-2.5 px-4 pt-4 pb-2"><img src="/avatar.png" alt="DartLab" class="w-8 h-8 rounded-full shadow-sm"/> <span class="text-[15px] font-bold text-dl-text tracking-tight">DartLab</span></div> <div class="p-3 pb-2"><!></div> <!> <div class="flex-1 overflow-y-auto px-2 space-y-4"></div> <!></div>'),Af=T("<button><!></button>"),zf=T('<div class="flex flex-col items-center h-full min-w-[52px] py-3 gap-2"><img src="/avatar.png" alt="DartLab" class="w-7 h-7 rounded-full shadow-sm mb-1"/> <button class="p-2.5 rounded-lg text-dl-text-muted hover:text-dl-text hover:bg-dl-bg-card/50 transition-colors" title="새 대화"><!></button> <div class="flex-1 overflow-y-auto flex flex-col items-center gap-1 w-full px-1"></div></div>'),Ef=T("<aside><!></aside>");function Mf(e,t){tr(t,!0);let r=Re(t,"conversations",19,()=>[]),n=Re(t,"activeId",3,null),a=Re(t,"open",3,!0),s=Re(t,"version",3,""),i=W("");function o(p){const g=new Date().setHours(0,0,0,0),h=g-864e5,y=g-7*864e5,M={오늘:[],어제:[],"이번 주":[],이전:[]};for(const _ of p)_.updatedAt>=g?M.오늘.push(_):_.updatedAt>=h?M.어제.push(_):_.updatedAt>=y?M["이번 주"].push(_):M.이전.push(_);const E=[];for(const[_,$]of Object.entries(M))$.length>0&&E.push({label:_,items:$});return E}let d=Ve(()=>l(i).trim()?r().filter(p=>p.title.toLowerCase().includes(l(i).toLowerCase())):r()),c=Ve(()=>o(l(d)));var u=Ef(),b=f(u);{var v=p=>{var g=Sf(),h=A(f(g),2),y=f(h);Qu(y,{variant:"secondary",class:"w-full justify-start gap-2",get onclick(){return t.onNewChat},children:(C,z)=>{var N=xf(),V=H(N);_i(V,{size:16}),k(C,N)},$$slots:{default:!0}});var M=A(h,2);{var E=C=>{var z=_f(),N=f(z),V=f(N);vf(V,{size:12,class:"text-dl-text-dim flex-shrink-0"});var me=A(V,2);Zr(me,()=>l(i),G=>m(i,G)),k(C,z)};F(M,C=>{r().length>3&&C(E)})}var _=A(M,2);ut(_,21,()=>l(c),ct,(C,z)=>{var N=wf(),V=f(N),me=f(V),G=A(V,2);ut(G,17,()=>l(z).items,ct,(J,Q)=>{var le=yf(),q=f(le);xi(q,{size:14,class:"flex-shrink-0 opacity-50"});var j=A(q,2),se=f(j),ie=A(j,2),P=f(ie);gf(P,{size:12}),Y(X=>{Ye(le,1,X),re(se,l(Q).title)},[()=>Ue(Be("w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left text-[13px] transition-colors group cursor-pointer",l(Q).id===n()?"bg-dl-bg-card text-dl-text border-l-2 border-dl-primary":"text-dl-text-muted hover:bg-dl-bg-card/50 hover:text-dl-text border-l-2 border-transparent"))]),K("click",le,()=>{var X;return(X=t.onSelect)==null?void 0:X.call(t,l(Q).id)}),K("keydown",le,X=>{var B;X.key==="Enter"&&((B=t.onSelect)==null||B.call(t,l(Q).id))}),K("click",ie,X=>{var B;X.stopPropagation(),(B=t.onDelete)==null||B.call(t,l(Q).id)}),k(J,le)}),Y(()=>re(me,l(z).label)),k(C,N)});var $=A(_,2);{var R=C=>{var z=kf(),N=f(z);Y(()=>re(N,`DartLab v${s()??""}`)),k(C,z)};F($,C=>{s()&&C(R)})}k(p,g)},S=p=>{var g=zf(),h=A(f(g),2),y=f(h);_i(y,{size:18});var M=A(h,2);ut(M,21,()=>r().slice(0,10),ct,(E,_)=>{var $=Af(),R=f($);xi(R,{size:16}),Y(C=>{Ye($,1,C),Qn($,"title",l(_).title)},[()=>Ue(Be("p-2 rounded-lg transition-colors w-full flex justify-center",l(_).id===n()?"bg-dl-bg-card text-dl-text":"text-dl-text-dim hover:text-dl-text-muted hover:bg-dl-bg-card/50"))]),K("click",$,()=>{var C;return(C=t.onSelect)==null?void 0:C.call(t,l(_).id)}),k(E,$)}),K("click",h,function(...E){var _;(_=t.onNewChat)==null||_.apply(this,E)}),k(p,g)};F(b,p=>{a()?p(v):p(S,-1)})}Y(p=>Ye(u,1,p),[()=>Ue(Be("flex flex-col h-full bg-dl-bg-darker border-r border-dl-border transition-all duration-300 flex-shrink-0 overflow-hidden",a()?"w-[260px]":"w-[52px]"))]),k(e,u),rr()}mn(["click","keydown"]);var $f=T('<button class="text-left px-4 py-3 rounded-xl border border-dl-border bg-dl-bg-card/50 text-[13px] text-dl-text-muted hover:text-dl-text hover:border-dl-primary/30 hover:bg-dl-bg-card transition-all duration-200 cursor-pointer"> </button>'),Pf=T('<div class="flex-1 flex flex-col items-center justify-center px-5"><div class="w-full max-w-[620px] flex flex-col items-center"><img src="/avatar.png" alt="DartLab" class="w-16 h-16 rounded-full mb-5 shadow-lg shadow-dl-primary/10"/> <h1 class="text-2xl font-bold text-dl-text mb-1.5">무엇을 분석할까요?</h1> <p class="text-sm text-dl-text-muted mb-8">종목명과 질문을 입력하거나, 자유롭게 대화하세요</p> <div class="input-box large"><textarea placeholder="삼성전자 재무 건전성을 분석해줘..." rows="1" class="input-textarea"></textarea> <button><!></button></div> <div class="grid grid-cols-2 gap-2.5 mt-6 w-full max-w-[520px]"></div></div></div>');function Tf(e,t){tr(t,!0);let r=Re(t,"inputText",15,""),n;const a=["삼성전자 재무 건전성 분석해줘","LG에너지솔루션 배당 추세는?","카카오 부채 리스크 평가해줘","현대차 영업이익률 추이 분석"];function s(g){var h;g.key==="Enter"&&!g.shiftKey&&(g.preventDefault(),(h=t.onSend)==null||h.call(t))}function i(g){g.target.style.height="auto",g.target.style.height=Math.min(g.target.scrollHeight,200)+"px"}function o(g){r(g),n&&n.focus()}var d=Pf(),c=f(d),u=A(f(c),6),b=f(u);zo(b,g=>n=g,()=>n);var v=A(b,2),S=f(v);Go(S,{size:18,strokeWidth:2.5});var p=A(u,2);ut(p,21,()=>a,ct,(g,h)=>{var y=$f(),M=f(y);Y(()=>re(M,l(h))),K("click",y,()=>o(l(h))),k(g,y)}),Y((g,h)=>{Ye(v,1,g),v.disabled=h},[()=>Ue(Be("send-btn",r().trim()&&"active")),()=>!r().trim()]),K("keydown",b,s),K("input",b,i),Zr(b,r),K("click",v,function(...g){var h;(h=t.onSend)==null||h.apply(this,g)}),k(e,d),rr()}mn(["keydown","input","click"]);var Cf=T("<span><!></span>");function Nf(e,t){tr(t,!0);let r=Re(t,"variant",3,"default");const n={default:"bg-dl-primary/10 text-dl-primary-light border-dl-primary/20",accent:"bg-dl-accent/10 text-dl-accent-light border-dl-accent/20",success:"bg-dl-success/10 text-dl-success border-dl-success/20",muted:"bg-dl-bg-card-hover text-dl-text-muted border-dl-border"};var a=Cf(),s=f(a);Ya(s,()=>t.children),Y(i=>Ye(a,1,i),[()=>Ue(Be("inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border",n[r()],t.class))]),k(e,a),rr()}var If=T('<div class="flex items-start gap-3 animate-fadeIn"><div class="w-7 h-7 rounded-full bg-dl-bg-card-hover border border-dl-border flex items-center justify-center text-[10px] font-semibold text-dl-text-muted flex-shrink-0 mt-0.5">You</div> <div class="flex-1 pt-0.5"><p class="text-[15px] text-dl-text leading-relaxed"> </p></div></div>'),Of=T('<div class="px-3 py-2 bg-dl-bg-card/50"><div class="text-[10px] text-dl-text-dim leading-tight"> </div> <div> </div></div>'),Lf=T('<span class="flex items-center gap-1 text-[10px] text-amber-400"><!> </span>'),Rf=T('<div class="px-3 py-1.5 border-t border-dl-border/30 flex flex-wrap gap-2"></div>'),jf=T('<div class="mb-3 rounded-xl border border-dl-border/50 bg-dl-bg-card/30 overflow-hidden animate-fadeIn"><div class="grid gap-px" style="grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));"></div> <!></div>'),Df=T('<button class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-dl-border/60 bg-dl-bg-card/60 text-[12px] text-dl-text-muted hover:text-dl-text hover:border-dl-primary/40 hover:bg-dl-primary/[0.05] transition-all"><!> <span> </span></button>'),Ff=T('<div class="mb-3"><div class="flex items-center gap-1.5 mb-1.5 text-[11px] text-dl-text-dim"><!> <span>분석에 사용된 데이터</span></div> <div class="flex flex-wrap items-center gap-2"></div></div>'),Gf=T('<span class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-dl-accent/30 bg-dl-accent/5 text-[12px] text-dl-accent"><!> </span>'),Vf=T('<div class="mb-3"><div class="flex items-center gap-1.5 mb-1.5 text-[11px] text-dl-text-dim"><!> <span>사용된 도구</span></div> <div class="flex flex-wrap items-center gap-2"></div></div>'),Bf=T('<div class="flex items-center gap-2 h-6 text-[12px] text-dl-text-dim animate-fadeIn"><!> <span> </span></div>'),Hf=T('<div class="flex items-center gap-2 mb-2 text-[11px] text-dl-text-dim"><!> <span> </span></div>'),Wf=T('<div class="flex items-center gap-1 mt-2 text-[10px] text-dl-text-dim"><!> <span> </span></div>'),Kf=T("<!> <div><!></div> <!>",1),qf=T('<div class="flex items-start gap-3 animate-fadeIn"><img src="/avatar.png" alt="DartLab" class="w-7 h-7 rounded-full flex-shrink-0 mt-0.5"/> <div class="flex-1 pt-0.5 min-w-0"><!> <!> <!> <!> <!></div></div>'),Uf=T("<button> </button>"),Yf=T('<div class="px-5 pb-2.5 overflow-x-auto scrollbar-hide"><div class="flex items-center gap-1.5"></div></div>'),Jf=T('<div class="prose-dartlab text-[13px] leading-[1.7]"><!></div>'),Xf=T('<pre class="text-[11px] text-dl-text-muted font-mono bg-dl-bg-darker rounded-xl p-4 overflow-x-auto whitespace-pre-wrap break-words"> </pre>'),Zf=T('<div class="fixed inset-0 z-[300] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn"><div class="w-full max-w-3xl max-h-[80vh] mx-4 bg-dl-bg-card border border-dl-border rounded-2xl shadow-2xl overflow-hidden flex flex-col"><div class="flex-shrink-0 border-b border-dl-border/50"><div class="flex items-center justify-between px-5 pt-4 pb-3"><div class="flex items-center gap-1.5 text-[14px] font-medium text-dl-text"><!> <span> </span></div> <div class="flex items-center gap-2"><div class="flex items-center gap-0.5 bg-dl-bg-darker rounded-lg p-0.5"><button><!> 렌더링</button> <button><!> 원문</button></div> <button class="p-1 rounded-lg text-dl-text-dim hover:text-dl-text hover:bg-white/5 transition-colors"><!></button></div></div> <!></div> <div class="flex-1 overflow-y-auto px-5 pb-5 min-h-0"><!></div></div></div>'),Qf=T("<!> <!>",1);function ev(e,t){tr(t,!0);let r=W(null),n=W("rendered"),a=Ve(()=>{var p,g,h,y;if(!t.message.loading)return"";if(t.message.text)return"응답 작성 중";if(((p=t.message.toolEvents)==null?void 0:p.length)>0)return"도구 실행 중";if(((g=t.message.contexts)==null?void 0:g.length)>0){const M=t.message.contexts[t.message.contexts.length-1];return`데이터 분석 중 — ${(M==null?void 0:M.label)||(M==null?void 0:M.module)||""}`}return t.message.snapshot?"핵심 수치 확인 완료, 데이터 검색 중":(h=t.message.meta)!=null&&h.company?`${t.message.meta.company} 데이터 검색 중`:(y=t.message.meta)!=null&&y.includedModules?"분석 모듈 선택 완료":"생각 중"});function s(p){const g=p.replace(/<\/?strong>/g,"").replace(/\*\*/g,"").trim();return/^[−\-+]?[\d,]+\.?\d*[%조억만원배x]*$/.test(g)||g==="-"||g==="0"}function i(p){if(!p)return"";let g=[],y=p.replace(/((?:^\|.+\|$\n?)+)/gm,M=>{const E=M.trim().split(`
`).filter(N=>N.trim());let _=null,$=-1,R=[];for(let N=0;N<E.length;N++)if(E[N].slice(1,-1).split("|").map(me=>me.trim()).every(me=>/^[\-:]+$/.test(me))){$=N;break}$>0?(_=E[$-1],R=E.slice($+1)):($===0||(_=E[0]),R=E.slice(1));let C="<table>";if(_){const N=_.slice(1,-1).split("|").map(V=>V.trim());C+="<thead><tr>"+N.map(V=>`<th>${V.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>")}</th>`).join("")+"</tr></thead>"}if(R.length>0){C+="<tbody>";for(const N of R){const V=N.slice(1,-1).split("|").map(me=>me.trim());C+="<tr>"+V.map(me=>{let G=me.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>");return`<td${s(me)?' class="num"':""}>${G}</td>`}).join("")+"</tr>"}C+="</tbody>"}C+="</table>";let z=g.length;return g.push(C),`
%%TABLE_${z}%%
`}).replace(/```(\w*)\n([\s\S]*?)```/g,"<pre><code>$2</code></pre>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^### (.+)$/gm,"<h3>$1</h3>").replace(/^## (.+)$/gm,"<h2>$1</h2>").replace(/^# (.+)$/gm,"<h1>$1</h1>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/\*([^*]+)\*/g,"<em>$1</em>").replace(/^[•\-\*] (.+)$/gm,"<li>$1</li>").replace(/^\d+\. (.+)$/gm,"<li>$1</li>").replace(/^> (.+)$/gm,"<blockquote>$1</blockquote>").replace(/\n\n/g,"</p><p>").replace(/\n/g,"<br>");y=y.replace(/(<li>.*?<\/li>(\s*<br>)?)+/g,M=>"<ul>"+M.replace(/<br>/g,"")+"</ul>");for(let M=0;M<g.length;M++)y=y.replace(`%%TABLE_${M}%%`,g[M]);return"<p>"+y+"</p>"}function o(p){m(r,p,!0),m(n,"rendered")}var d=Qf(),c=H(d);{var u=p=>{var g=If(),h=A(f(g),2),y=f(h),M=f(y);Y(()=>re(M,t.message.text)),k(p,g)},b=p=>{var g=qf(),h=A(f(g),2),y=f(h);{var M=G=>{Nf(G,{variant:"muted",class:"mb-2",children:(J,Q)=>{var le=Xn();Y(()=>re(le,t.message.company)),k(J,le)},$$slots:{default:!0}})};F(y,G=>{t.message.company&&G(M)})}var E=A(y,2);{var _=G=>{var J=jf(),Q=f(J);ut(Q,21,()=>t.message.snapshot.items,ct,(j,se)=>{const ie=Ve(()=>l(se).status==="good"?"text-dl-success":l(se).status==="danger"?"text-dl-primary-light":l(se).status==="caution"?"text-amber-400":"text-dl-text");var P=Of(),X=f(P),B=f(X),fe=A(X,2),Ee=f(fe);Y(ye=>{re(B,l(se).label),Ye(fe,1,ye),re(Ee,l(se).value)},[()=>Ue(Be("text-[14px] font-semibold leading-snug mt-0.5",l(ie)))]),k(j,P)});var le=A(Q,2);{var q=j=>{var se=Rf();ut(se,21,()=>t.message.snapshot.warnings,ct,(ie,P)=>{var X=Lf(),B=f(X);bf(B,{size:10});var fe=A(B);Y(()=>re(fe,` ${l(P)??""}`)),k(ie,X)}),k(j,se)};F(le,j=>{var se;((se=t.message.snapshot.warnings)==null?void 0:se.length)>0&&j(q)})}k(G,J)};F(E,G=>{var J,Q;((Q=(J=t.message.snapshot)==null?void 0:J.items)==null?void 0:Q.length)>0&&G(_)})}var $=A(E,2);{var R=G=>{var J=Ff(),Q=f(J),le=f(Q);$a(le,{size:11});var q=A(Q,2);ut(q,21,()=>t.message.contexts,ct,(j,se,ie)=>{var P=Df(),X=f(P);$a(X,{size:13,class:"flex-shrink-0"});var B=A(X,2),fe=f(B);Y(()=>re(fe,l(se).label||l(se).module)),K("click",P,()=>o(ie)),k(j,P)}),k(G,J)};F($,G=>{var J;((J=t.message.contexts)==null?void 0:J.length)>0&&G(R)})}var C=A($,2);{var z=G=>{var J=Vf(),Q=f(J),le=f(Q);yi(le,{size:11});var q=A(Q,2);ut(q,21,()=>t.message.toolEvents,ct,(j,se)=>{var ie=ue(),P=H(ie);{var X=B=>{var fe=Gf(),Ee=f(fe);yi(Ee,{size:13});var ye=A(Ee);Y(()=>re(ye,` ${l(se).name??""}`)),k(B,fe)};F(P,B=>{l(se).type==="call"&&B(X)})}k(j,ie)}),k(G,J)};F(C,G=>{var J;((J=t.message.toolEvents)==null?void 0:J.length)>0&&G(z)})}var N=A(C,2);{var V=G=>{var J=Bf(),Q=f(J);Nt(Q,{size:14,class:"animate-spin flex-shrink-0"});var le=A(Q,2),q=f(le);Y(()=>re(q,l(a))),k(G,J)},me=G=>{var J=Kf(),Q=H(J);{var le=P=>{var X=Hf(),B=f(X);Nt(B,{size:12,class:"animate-spin flex-shrink-0"});var fe=A(B,2),Ee=f(fe);Y(()=>re(Ee,l(a))),k(P,X)};F(Q,P=>{t.message.loading&&P(le)})}var q=A(Q,2),j=f(q);ri(j,()=>i(t.message.text));var se=A(q,2);{var ie=P=>{var X=Wf(),B=f(X);af(B,{size:10});var fe=A(B,2),Ee=f(fe);Y(()=>re(Ee,`${t.message.duration??""}초`)),k(P,X)};F(se,P=>{t.message.duration&&!t.message.loading&&P(ie)})}Y(P=>Ye(q,1,P),[()=>Ue(Be("prose-dartlab text-[15px] leading-[1.75]",t.message.error&&"text-dl-primary"))]),k(G,J)};F(N,G=>{t.message.loading&&!t.message.text?G(V):G(me,-1)})}k(p,g)};F(c,p=>{t.message.role==="user"?p(u):p(b,-1)})}var v=A(c,2);{var S=p=>{const g=Ve(()=>t.message.contexts[l(r)]);var h=Zf(),y=f(h),M=f(y),E=f(M),_=f(E),$=f(_);$a($,{size:15,class:"flex-shrink-0"});var R=A($,2),C=f(R),z=A(_,2),N=f(z),V=f(N),me=f(V);Vo(me,{size:11});var G=A(V,2),J=f(G);sf(J,{size:11});var Q=A(N,2),le=f(Q);Bo(le,{size:18});var q=A(E,2);{var j=B=>{var fe=Yf(),Ee=f(fe);ut(Ee,21,()=>t.message.contexts,ct,(ye,De,zt)=>{var Et=Uf(),Me=f(Et);Y(kr=>{Ye(Et,1,kr),re(Me,t.message.contexts[zt].label||t.message.contexts[zt].module)},[()=>Ue(Be("px-2.5 py-1 rounded-lg text-[11px] whitespace-nowrap transition-colors flex-shrink-0",zt===l(r)?"bg-dl-primary/20 text-dl-primary-light font-medium":"bg-dl-bg-darker text-dl-text-dim hover:text-dl-text-muted hover:bg-dl-bg-darker/80"))]),K("click",Et,()=>{m(r,zt,!0)}),k(ye,Et)}),k(B,fe)};F(q,B=>{t.message.contexts.length>1&&B(j)})}var se=A(M,2),ie=f(se);{var P=B=>{var fe=Jf(),Ee=f(fe);ri(Ee,()=>i(l(g).text)),k(B,fe)},X=B=>{var fe=Xf(),Ee=f(fe);Y(()=>re(Ee,l(g).text)),k(B,fe)};F(ie,B=>{l(n)==="rendered"?B(P):B(X,-1)})}Y((B,fe)=>{re(C,l(g).label||l(g).module),Ye(V,1,B),Ye(G,1,fe)},[()=>Ue(Be("flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] transition-colors",l(n)==="rendered"?"bg-dl-bg-card text-dl-text shadow-sm":"text-dl-text-dim hover:text-dl-text-muted")),()=>Ue(Be("flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] transition-colors",l(n)==="raw"?"bg-dl-bg-card text-dl-text shadow-sm":"text-dl-text-dim hover:text-dl-text-muted"))]),K("click",h,B=>{B.target===B.currentTarget&&m(r,null)}),K("keydown",h,B=>{B.key==="Escape"&&m(r,null)}),K("click",V,()=>m(n,"rendered")),K("click",G,()=>m(n,"raw")),K("click",Q,()=>m(r,null)),k(p,h)};F(v,p=>{var g;l(r)!==null&&((g=t.message.contexts)!=null&&g[l(r)])&&p(S)})}k(e,d),rr()}mn(["click","keydown"]);var tv=T('<button class="send-btn active"><!></button>'),rv=T("<button><!></button>"),nv=T('<div class="flex flex-col h-full min-h-0"><div class="flex-1 overflow-y-auto min-h-0"><div class="max-w-[720px] mx-auto px-5 pt-14 pb-8 space-y-8"></div></div> <div class="flex-shrink-0 px-5 pb-4 pt-2"><div class="max-w-[720px] mx-auto"><div class="input-box"><textarea placeholder="메시지를 입력하세요..." rows="1" class="input-textarea"></textarea> <!></div></div></div></div>');function av(e,t){tr(t,!0);let r=Re(t,"messages",19,()=>[]),n=Re(t,"isLoading",3,!1),a=Re(t,"inputText",15,""),s=Re(t,"scrollTrigger",3,0),i;Zn(()=>{s(),i&&setTimeout(()=>{i.scrollTop=i.scrollHeight},10)});function o(E){var _;E.key==="Enter"&&!E.shiftKey&&(E.preventDefault(),(_=t.onSend)==null||_.call(t))}function d(E){E.target.style.height="auto",E.target.style.height=Math.min(E.target.scrollHeight,200)+"px"}var c=nv(),u=f(c),b=f(u);ut(b,21,r,ct,(E,_)=>{ev(E,{get message(){return l(_)}})}),zo(u,E=>i=E,()=>i);var v=A(u,2),S=f(v),p=f(S),g=f(p),h=A(g,2);{var y=E=>{var _=tv(),$=f(_);hf($,{size:14}),K("click",_,function(...R){var C;(C=t.onStop)==null||C.apply(this,R)}),k(E,_)},M=E=>{var _=rv(),$=f(_);Go($,{size:16,strokeWidth:2.5}),Y((R,C)=>{Ye(_,1,R),_.disabled=C},[()=>Ue(Be("send-btn",a().trim()&&"active")),()=>!a().trim()]),K("click",_,function(...R){var C;(C=t.onSend)==null||C.apply(this,R)}),k(E,_)};F(h,E=>{n()?E(y):E(M,-1)})}K("keydown",g,o),K("input",g,d),Zr(g,a),k(e,c),rr()}mn(["keydown","input","click"]);var sv=T("<!> <span>확인 중...</span>",1),iv=T("<!> <span>설정 필요</span>",1),ov=T('<span class="text-dl-text-dim">/</span> <span class="max-w-[80px] truncate"> </span>',1),lv=T('<span class="w-1.5 h-1.5 rounded-full bg-dl-success"></span> <span> </span> <!> <!>',1),dv=T('<div class="mx-3 mb-2 px-4 py-3 rounded-xl border border-dl-border bg-dl-bg-card/80 backdrop-blur-sm flex items-center gap-3 pointer-events-auto"><!> <div class="flex-1"><div class="text-[13px] text-dl-text-muted">AI Provider 확인 중...</div></div></div>'),cv=T('<div class="mx-3 mb-2 px-4 py-3 rounded-xl border border-dl-primary/30 bg-dl-primary/5 backdrop-blur-sm flex items-center gap-3 pointer-events-auto"><!> <div class="flex-1"><div class="text-[13px] text-dl-text">AI Provider가 설정되지 않았습니다</div> <div class="text-[11px] text-dl-text-muted mt-0.5">대화를 시작하려면 Provider를 설정해주세요</div></div> <button class="px-3 py-1.5 rounded-lg bg-dl-primary/20 text-dl-primary-light text-[12px] font-medium hover:bg-dl-primary/30 transition-colors flex-shrink-0">설정하기</button></div>'),uv=T('<span class="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-dl-primary/20 text-dl-primary-light">사용 중</span>'),fv=T('<!> <span class="text-[10px] text-amber-400">인증 필요</span>',1),vv=T('<!> <span class="text-[10px] text-dl-text-dim">미설치</span>',1),pv=T('<div class="flex items-center gap-1.5 mt-2 text-[11px] text-dl-primary-light"><!> API 키가 유효하지 않습니다. 다시 확인해주세요.</div>'),hv=T('<div class="px-4 pb-4 border-t border-dl-border/50 pt-3"><div class="text-[11px] text-dl-text-muted mb-2"> </div> <div class="flex items-center gap-2"><input type="password" class="flex-1 bg-dl-bg-darker border border-dl-border rounded-lg px-3 py-2 text-[12px] text-dl-text placeholder:text-dl-text-dim outline-none focus:border-dl-primary/50 transition-colors"/> <button class="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-dl-primary/20 text-dl-primary-light text-[12px] font-medium hover:bg-dl-primary/30 transition-colors disabled:opacity-40 flex-shrink-0"><!> 인증</button></div> <!></div>'),mv=T('<button class="px-2.5 py-1.5 rounded-lg bg-dl-primary/20 text-dl-primary-light text-[11px] hover:bg-dl-primary/30 transition-colors disabled:opacity-40"><!></button>'),gv=T('<div class="px-4 pb-2 border-t border-dl-border/50 pt-2.5"><div class="flex items-center gap-2"><!> <span class="text-[11px] text-dl-success">인증됨</span> <span class="text-[10px] text-dl-text-dim">— 다른 키로 변경하려면 입력하세요</span></div> <div class="flex items-center gap-2 mt-2"><input type="password" placeholder="새 API 키 (변경 시에만)" class="flex-1 bg-dl-bg-darker border border-dl-border rounded-lg px-3 py-1.5 text-[11px] text-dl-text placeholder:text-dl-text-dim outline-none focus:border-dl-primary/50 transition-colors"/> <!></div></div>'),bv=T('<div class="px-4 pb-4 border-t border-dl-border/50 pt-3"><div class="text-[12px] text-dl-text mb-2">Ollama가 설치되어 있지 않습니다</div> <a href="https://ollama.com/download" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-3 py-2 rounded-lg bg-dl-bg-darker border border-dl-border text-[12px] text-dl-text-muted hover:text-dl-text hover:border-dl-primary/30 transition-colors"><!> Ollama 다운로드 (ollama.com) <!></a> <div class="text-[10px] text-dl-text-dim mt-2">설치 후 Ollama를 실행하고 새로고침하세요</div></div>'),xv=T('<div class="px-4 pb-3 border-t border-dl-border/50 pt-3"><div class="flex items-center gap-2 text-[12px] text-amber-400"><!> Ollama가 설치되었지만 실행되지 않고 있습니다</div> <div class="text-[10px] text-dl-text-dim mt-1">터미널에서 <code class="px-1 py-0.5 rounded bg-dl-bg-darker text-dl-text-muted">ollama serve</code>를 실행하세요</div></div>'),_v=T('<div class="flex items-start gap-2.5"><span class="text-[10px] text-dl-text-dim mt-0.5 flex-shrink-0">1.</span> <div class="flex-1"><div class="text-[10px] text-dl-text-dim mb-1">Node.js 설치 후 실행</div> <div class="p-2 rounded-lg bg-dl-bg-darker border border-dl-border text-[11px] text-dl-text-muted font-mono">npm install -g @openai/codex</div></div></div>'),yv=T('<div class="text-[12px] text-dl-text mb-2.5"> </div> <div class="space-y-2"><!> <div class="flex items-start gap-2.5"><span class="text-[10px] text-dl-text-dim mt-0.5 flex-shrink-0"> </span> <div class="flex-1"><div class="text-[10px] text-dl-text-dim mb-1">브라우저 인증 (ChatGPT 계정)</div> <div class="p-2 rounded-lg bg-dl-bg-darker border border-dl-border text-[11px] text-dl-text-muted font-mono">codex</div></div></div></div> <div class="flex items-center gap-1.5 mt-2.5 px-2.5 py-2 rounded-lg bg-amber-500/5 border border-amber-500/20"><!> <span class="text-[10px] text-amber-400/80">ChatGPT Plus 또는 Pro 구독이 필요합니다</span></div>',1),wv=T('<div class="flex items-start gap-2.5"><span class="text-[10px] text-dl-text-dim mt-0.5 flex-shrink-0">1.</span> <div class="flex-1"><div class="text-[10px] text-dl-text-dim mb-1">Node.js 설치 후 실행</div> <div class="p-2 rounded-lg bg-dl-bg-darker border border-dl-border text-[11px] text-dl-text-muted font-mono">npm install -g @anthropic-ai/claude-code</div></div></div>'),kv=T('<div class="text-[12px] text-dl-text mb-2.5"> </div> <div class="space-y-2"><!> <div class="flex items-start gap-2.5"><span class="text-[10px] text-dl-text-dim mt-0.5 flex-shrink-0"> </span> <div class="flex-1"><div class="text-[10px] text-dl-text-dim mb-1">인증</div> <div class="p-2 rounded-lg bg-dl-bg-darker border border-dl-border text-[11px] text-dl-text-muted font-mono">claude auth login</div></div></div></div> <div class="flex items-center gap-1.5 mt-2.5 px-2.5 py-2 rounded-lg bg-amber-500/5 border border-amber-500/20"><!> <span class="text-[10px] text-amber-400/80">Claude Pro 또는 Max 구독이 필요합니다</span></div>',1),Sv=T('<div class="px-4 pb-4 border-t border-dl-border/50 pt-3"><!> <div class="text-[10px] text-dl-text-dim mt-2">설치 완료 후 새로고침하세요</div></div>'),Av=T("<!> 브라우저에서 로그인 중...",1),zv=T("<!> OpenAI 계정으로 로그인",1),Ev=T('<div class="px-4 pb-4 border-t border-dl-border/50 pt-3"><div class="text-[12px] text-dl-text mb-2.5">ChatGPT 계정으로 로그인하여 사용하세요</div> <button class="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-dl-primary/20 text-dl-primary-light text-[12px] font-medium hover:bg-dl-primary/30 transition-colors disabled:opacity-40"><!></button> <div class="flex items-center gap-1.5 mt-2.5 px-2.5 py-2 rounded-lg bg-amber-500/5 border border-amber-500/20"><!> <span class="text-[10px] text-amber-400/80">ChatGPT Plus 또는 Pro 구독이 필요합니다</span></div></div>'),Mv=T('<div class="px-4 pb-2 border-t border-dl-border/50 pt-2.5"><div class="flex items-center justify-between"><div class="flex items-center gap-2"><!> <span class="text-[11px] text-dl-success">ChatGPT 인증됨</span></div> <button class="flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] text-dl-text-dim hover:text-dl-primary-light hover:bg-white/5 transition-colors"><!> 로그아웃</button></div></div>'),$v=T('<div class="flex items-center gap-2 py-3 text-[12px] text-dl-text-dim"><!> 모델 목록 불러오는 중...</div>'),Pv=T("<button> <!></button>"),Tv=T('<div class="flex flex-wrap gap-1.5"></div>'),Cv=T('<div class="text-[11px] text-dl-text-dim py-2">사용 가능한 모델이 없습니다</div>'),Nv=T('<div class="p-3 rounded-lg border border-dl-border bg-dl-bg-darker"><div class="flex items-center justify-between mb-1.5"><span class="text-[11px] text-dl-text flex items-center gap-1.5"><!> 다운로드 중</span> <button class="px-2 py-0.5 rounded text-[10px] text-dl-text-dim hover:text-dl-primary-light transition-colors">취소</button></div> <div class="w-full h-1.5 rounded-full bg-dl-bg-dark overflow-hidden"><div class="h-full rounded-full bg-gradient-to-r from-dl-primary to-dl-primary-light transition-all duration-300"></div></div> <div class="text-[10px] text-dl-text-dim mt-1"> </div></div>'),Iv=T('<span class="px-1 py-px rounded text-[9px] bg-dl-primary/15 text-dl-primary-light"> </span>'),Ov=T('<button class="flex items-center gap-2.5 w-full px-2.5 py-2 rounded-lg border border-dl-border/50 text-left hover:border-dl-primary/30 hover:bg-white/[0.02] transition-all group"><div class="flex-1 min-w-0"><div class="flex items-center gap-1.5"><span class="text-[11px] font-medium text-dl-text"> </span> <span class="px-1 py-px rounded text-[9px] bg-dl-bg-darker text-dl-text-dim"> </span> <!></div> <div class="text-[10px] text-dl-text-dim mt-0.5"> </div></div> <div class="flex items-center gap-1.5 flex-shrink-0"><span class="text-[9px] text-dl-text-dim"> </span> <!></div></button>'),Lv=T('<div class="flex items-center gap-1.5"><input type="text" placeholder="모델명 (예: gemma3)" class="flex-1 bg-dl-bg-darker border border-dl-border rounded-lg px-2.5 py-1.5 text-[11px] text-dl-text placeholder:text-dl-text-dim outline-none focus:border-dl-primary/50 transition-colors"/> <button class="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-dl-primary/20 text-dl-primary-light text-[11px] font-medium hover:bg-dl-primary/30 transition-colors disabled:opacity-40 flex-shrink-0"><!> 받기</button></div> <div class="mt-2.5 space-y-1"></div>',1),Rv=T('<div class="mt-3 pt-3 border-t border-dl-border/30"><div class="flex items-center justify-between mb-2"><span class="text-[11px] text-dl-text-muted">모델 다운로드</span> <a href="https://ollama.com/library" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-[10px] text-dl-text-dim hover:text-dl-primary-light transition-colors">전체 목록 <!></a></div> <!></div>'),jv=T('<div class="px-4 pb-4 border-t border-dl-border/50 pt-3"><div class="flex items-center justify-between mb-2.5"><span class="text-[11px] font-medium text-dl-text-muted">모델 선택</span> <!></div> <!> <!></div>'),Dv=T("<!> <!> <!> <!> <!> <!> <!>",1),Fv=T('<div><button class="flex items-center gap-3 w-full px-4 py-3 text-left"><span></span> <div class="flex-1 min-w-0"><div class="flex items-center gap-2"><span class="text-[13px] font-medium text-dl-text"> </span> <!></div> <div class="text-[11px] text-dl-text-dim mt-0.5"> </div></div> <div class="flex items-center gap-2 flex-shrink-0"><!></div></button> <!></div>'),Gv=T('<div class="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn"><div class="w-full max-w-xl bg-dl-bg-card border border-dl-border rounded-2xl shadow-2xl overflow-hidden"><div class="flex items-center justify-between px-6 pt-5 pb-3"><div class="text-[14px] font-semibold text-dl-text">AI Provider 설정</div> <button class="p-1 rounded-lg text-dl-text-dim hover:text-dl-text hover:bg-white/5 transition-colors"><!></button></div> <div class="px-6 pb-5 max-h-[70vh] overflow-y-auto"><div class="space-y-2.5"></div></div> <div class="flex items-center justify-between px-6 py-3 border-t border-dl-border"><div class="text-[10px] text-dl-text-dim"><!></div> <button class="px-4 py-2 rounded-xl bg-dl-primary/20 text-dl-primary-light text-[12px] font-medium hover:bg-dl-primary/30 transition-colors">닫기</button></div></div></div>'),Vv=T('<div class="fixed inset-0 z-[250] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn"><div class="w-full max-w-xs bg-dl-bg-card border border-dl-border rounded-2xl shadow-2xl p-5"><div class="text-[14px] font-medium text-dl-text mb-1.5">대화 삭제</div> <div class="text-[12px] text-dl-text-muted mb-4">이 대화를 삭제하시겠습니까? 삭제된 대화는 복구할 수 없습니다.</div> <div class="flex items-center justify-end gap-2"><button class="px-3.5 py-1.5 rounded-lg text-[12px] text-dl-text-muted hover:text-dl-text hover:bg-white/5 transition-colors">취소</button> <button class="px-3.5 py-1.5 rounded-lg bg-dl-primary/20 text-dl-primary-light text-[12px] font-medium hover:bg-dl-primary/30 transition-colors">삭제</button></div></div></div>'),Bv=T('<div class="fixed bottom-6 right-6 z-[300] animate-fadeIn"><div> </div></div>'),Hv=T('<div class="flex h-screen bg-dl-bg-dark overflow-hidden"><!> <div class="relative flex flex-col flex-1 min-w-0 min-h-0"><div class="absolute top-0 left-0 right-0 z-10 pointer-events-none"><div class="flex items-center justify-between px-3 h-11 pointer-events-auto" style="background: linear-gradient(to bottom, var(--color-dl-bg-dark) 60%, transparent);"><button class="p-1.5 rounded-lg text-dl-text-muted hover:text-dl-text hover:bg-white/5 transition-colors"><!></button> <div class="flex items-center gap-1"><a href="https://buymeacoffee.com/eddmpython" target="_blank" rel="noopener noreferrer" class="p-1.5 rounded-lg text-[#ffdd00] hover:bg-white/5 transition-colors" title="Buy me a coffee"><!></a> <a href="https://eddmpython.github.io/dartlab/" target="_blank" rel="noopener noreferrer" class="p-1.5 rounded-lg text-dl-text-dim hover:text-dl-text-muted hover:bg-white/5 transition-colors" title="Documentation"><!></a> <a href="https://github.com/eddmpython/dartlab" target="_blank" rel="noopener noreferrer" class="p-1.5 rounded-lg text-dl-text-dim hover:text-dl-text-muted hover:bg-white/5 transition-colors" title="GitHub"><!></a> <div class="w-px h-4 bg-dl-border mx-1"></div> <button><!> <!></button></div></div> <!></div> <!></div></div>  <!> <!> <!>',1);function Wv(e,t){tr(t,!0);let r=W(""),n=W(!1),a=W(null),s=W(tt({})),i=W(tt({})),o=W(null),d=W(null),c=W(tt([])),u=W(!0),b=W(0),v=W(!0),S=W(""),p=W(!1),g=W(null),h=W(tt({})),y=W(tt({})),M=W(""),E=W(!1),_=W(null),$=W(""),R=W(!1),C=W(""),z=W(0),N=W(null),V=W(!1),me=W(tt({})),G=W(null),J=W(""),Q=W("error"),le=W(!1);function q(w,O="error",ce=4e3){m(J,w,!0),m(Q,O,!0),m(le,!0),setTimeout(()=>{m(le,!1)},ce)}const j=Ju();Zn(()=>{P()});let se=W(tt({})),ie=W(tt({}));async function P(){var w,O,ce;m(v,!0);try{const ke=await Xc();m(s,ke.providers||{},!0),m(i,ke.ollama||{},!0),m(se,ke.codex||{},!0),m(ie,ke.claudeCode||{},!0),m(me,ke.chatgpt||{},!0),ke.version&&m(S,ke.version,!0);const _e=localStorage.getItem("dartlab-provider"),U=localStorage.getItem("dartlab-model");if(_e&&((w=l(s)[_e])!=null&&w.available)){m(o,_e,!0),m(g,_e,!0),await Xr(_e,U),await X(_e);const D=l(h)[_e]||[];U&&D.includes(U)?m(d,U,!0):D.length>0&&(m(d,D[0],!0),localStorage.setItem("dartlab-model",l(d))),m(c,D,!0),m(v,!1);return}if(_e&&l(s)[_e]){m(o,_e,!0),m(g,_e,!0),await X(_e);const D=l(h)[_e]||[];m(c,D,!0),U&&D.includes(U)?m(d,U,!0):D.length>0&&m(d,D[0],!0),m(v,!1);return}for(const D of["chatgpt","codex","ollama"])if((O=l(s)[D])!=null&&O.available){m(o,D,!0),m(g,D,!0),await Xr(D),await X(D);const ge=l(h)[D]||[];m(c,ge,!0),m(d,((ce=l(s)[D])==null?void 0:ce.model)||(ge.length>0?ge[0]:null),!0),l(d)&&localStorage.setItem("dartlab-model",l(d));break}}catch{}m(v,!1)}async function X(w){m(y,{...l(y),[w]:!0},!0);try{const O=await Zc(w);m(h,{...l(h),[w]:O.models||[]},!0)}catch{m(h,{...l(h),[w]:[]},!0)}m(y,{...l(y),[w]:!1},!0)}async function B(w){var ce;m(o,w,!0),m(d,null),m(g,w,!0),localStorage.setItem("dartlab-provider",w),localStorage.removeItem("dartlab-model"),m(M,""),m(_,null);try{await Xr(w)}catch{}await X(w);const O=l(h)[w]||[];if(m(c,O,!0),O.length>0){m(d,((ce=l(s)[w])==null?void 0:ce.model)||O[0],!0),localStorage.setItem("dartlab-model",l(d));try{await Xr(w,l(d))}catch{}}}async function fe(w){m(d,w,!0),localStorage.setItem("dartlab-model",w);try{await Xr(l(o),w)}catch{}}function Ee(w){l(g)===w?m(g,null):(m(g,w,!0),X(w))}async function ye(){const w=l(M).trim();if(!(!w||!l(o))){m(E,!0),m(_,null);try{const O=await Xr(l(o),l(d),w);O.available?(m(_,"success"),l(s)[l(o)]={...l(s)[l(o)],available:!0,model:O.model},!l(d)&&O.model&&m(d,O.model,!0),await X(l(o)),m(c,l(h)[l(o)]||[],!0),q("API 키 인증 성공","success")):m(_,"error")}catch{m(_,"error")}m(E,!1)}}async function De(){if(!l(V)){m(V,!0);try{const{authUrl:w}=await eu();window.open(w,"dartlab-oauth","width=600,height=700");const O=setInterval(async()=>{var ce;try{const ke=await tu();ke.done&&(clearInterval(O),m(V,!1),ke.error?q(`인증 실패: ${ke.error}`):(q("ChatGPT 인증 성공","success"),await P(),(ce=l(s).chatgpt)!=null&&ce.available&&await B("chatgpt")))}catch{clearInterval(O),m(V,!1)}},2e3);setTimeout(()=>{clearInterval(O),l(V)&&(m(V,!1),q("인증 시간이 초과되었습니다. 다시 시도해주세요."))},12e4)}catch(w){m(V,!1),q(`OAuth 시작 실패: ${w.message}`)}}}async function zt(){try{await ru(),m(me,{authenticated:!1},!0),l(o)==="chatgpt"&&m(s,{...l(s),chatgpt:{...l(s).chatgpt,available:!1}},!0),q("ChatGPT 로그아웃 완료","success"),await P()}catch{q("로그아웃 실패")}}function Et(){const w=l($).trim();!w||l(R)||(m(R,!0),m(C,"준비 중..."),m(z,0),m(N,Qc(w,{onProgress(O){O.total&&O.completed!==void 0?(m(z,Math.round(O.completed/O.total*100),!0),m(C,`다운로드 중... ${l(z)}%`)):O.status&&m(C,O.status,!0)},async onDone(){m(R,!1),m(N,null),m($,""),m(C,""),m(z,0),q(`${w} 다운로드 완료`,"success"),await X("ollama"),m(c,l(h).ollama||[],!0),l(c).includes(w)&&await fe(w)},onError(O){m(R,!1),m(N,null),m(C,""),m(z,0),q(`다운로드 실패: ${O}`)}}),!0))}function Me(){l(N)&&(l(N).abort(),m(N,null)),m(R,!1),m($,""),m(C,""),m(z,0)}function kr(){m(u,!l(u))}function nr(){if(m(M,""),m(_,null),l(o))m(g,l(o),!0);else{const w=Object.keys(l(s));m(g,w.length>0?w[0]:null,!0)}m(p,!0),l(g)&&X(l(g))}function Sr(){j.createConversation(),m(r,""),m(n,!1),l(a)&&(l(a).abort(),m(a,null))}function gn(w){j.setActive(w),m(r,""),m(n,!1),l(a)&&(l(a).abort(),m(a,null))}function Kr(w){m(G,w,!0)}function Ho(){l(G)&&(j.deleteConversation(l(G)),m(G,null))}async function gs(){var _e;const w=l(r).trim();if(!w||l(n))return;if(!l(o)||!((_e=l(s)[l(o)])!=null&&_e.available)){q("먼저 AI Provider를 설정해주세요. 우상단 설정 버튼을 클릭하세요."),nr();return}j.activeId||j.createConversation(),j.addMessage("user",w),m(r,""),m(n,!0),j.addMessage("assistant",""),j.updateLastMessage({loading:!0,startedAt:Date.now()}),Pn(b);const O=j.active,ce=[];if(O){const U=O.messages.slice(0,-2);for(const D of U)(D.role==="user"||D.role==="assistant")&&D.text&&D.text.trim()&&!D.error&&!D.loading&&ce.push({role:D.role,text:D.text})}const ke=nu(null,w,{provider:l(o),model:l(d)},{onMeta(U){var ge;const D={meta:U};U.company&&(D.company=U.company,j.activeId&&((ge=j.active)==null?void 0:ge.title)==="새 대화"&&j.updateTitle(j.activeId,U.company)),j.updateLastMessage(D)},onSnapshot(U){j.updateLastMessage({snapshot:U})},onContext(U){const D=j.active;if(!D)return;const ge=D.messages[D.messages.length-1],rt=(ge==null?void 0:ge.contexts)||[];j.updateLastMessage({contexts:[...rt,{module:U.module,label:U.label,text:U.text}]})},onToolCall(U){const D=j.active;if(!D)return;const ge=D.messages[D.messages.length-1],rt=(ge==null?void 0:ge.toolEvents)||[];j.updateLastMessage({toolEvents:[...rt,{type:"call",name:U.name,arguments:U.arguments}]})},onToolResult(U){const D=j.active;if(!D)return;const ge=D.messages[D.messages.length-1],rt=(ge==null?void 0:ge.toolEvents)||[];j.updateLastMessage({toolEvents:[...rt,{type:"result",name:U.name,result:U.result}]})},onChunk(U){const D=j.active;if(!D)return;const ge=D.messages[D.messages.length-1];j.updateLastMessage({text:((ge==null?void 0:ge.text)||"")+U}),Pn(b)},onDone(){const U=j.active,D=U==null?void 0:U.messages[U.messages.length-1],ge=D!=null&&D.startedAt?((Date.now()-D.startedAt)/1e3).toFixed(1):null;j.updateLastMessage({loading:!1,duration:ge}),m(n,!1),m(a,null),Pn(b)},onError(U){j.updateLastMessage({text:`오류: ${U}`,loading:!1,error:!0}),q(U),m(n,!1),m(a,null)}},ce);m(a,ke,!0)}function Wo(){l(a)&&(l(a).abort(),m(a,null),m(n,!1),j.updateLastMessage({loading:!1}))}function Ko(w){(w.metaKey||w.ctrlKey)&&w.key==="n"&&(w.preventDefault(),Sr()),(w.metaKey||w.ctrlKey)&&w.shiftKey&&w.key==="S"&&(w.preventDefault(),kr()),w.key==="Escape"&&l(G)?m(G,null):w.key==="Escape"&&l(p)&&m(p,!1)}let qo=Ve(()=>{var w;return((w=j.active)==null?void 0:w.messages)||[]}),Uo=Ve(()=>j.active&&j.active.messages.length>0),da=Ve(()=>{var w;return!l(v)&&(!l(o)||!((w=l(s)[l(o)])!=null&&w.available))});const Yo=[{name:"gemma3",size:"3B",gb:"2.3",desc:"Google, 빠르고 가벼움",tag:"추천"},{name:"gemma3:12b",size:"12B",gb:"8.1",desc:"Google, 균형잡힌 성능"},{name:"llama3.1",size:"8B",gb:"4.7",desc:"Meta, 범용 최강",tag:"추천"},{name:"qwen2.5",size:"7B",gb:"4.7",desc:"Alibaba, 한국어 우수"},{name:"qwen2.5:14b",size:"14B",gb:"9.0",desc:"Alibaba, 한국어 최고 수준"},{name:"deepseek-r1",size:"7B",gb:"4.7",desc:"추론 특화, 분석에 적합"},{name:"phi4",size:"14B",gb:"9.1",desc:"Microsoft, 수학/코드 강점"},{name:"mistral",size:"7B",gb:"4.1",desc:"Mistral AI, 가볍고 빠름"},{name:"exaone3.5",size:"8B",gb:"4.9",desc:"LG AI, 한국어 특화",tag:"한국어"}];var bs=Hv();Ac("keydown",Ha,Ko);var xs=H(bs),_s=f(xs);Mf(_s,{get conversations(){return j.conversations},get activeId(){return j.activeId},get open(){return l(u)},get version(){return l(S)},onNewChat:Sr,onSelect:gn,onDelete:Kr});var Jo=A(_s,2),ys=f(Jo),ws=f(ys),ca=f(ws),Xo=f(ca);{var Zo=w=>{ff(w,{size:18})},Qo=w=>{uf(w,{size:18})};F(Xo,w=>{l(u)?w(Zo):w(Qo,-1)})}var el=A(ca,2),ks=f(el),tl=f(ks);of(tl,{size:15});var Ss=A(ks,2),rl=f(Ss);Vo(rl,{size:15});var As=A(Ss,2),nl=f(As);lf(nl,{size:15});var ua=A(As,4),zs=f(ua);{var al=w=>{var O=sv(),ce=H(O);Nt(ce,{size:12,class:"animate-spin"}),k(w,O)},sl=w=>{var O=iv(),ce=H(O);Mr(ce,{size:12}),k(w,O)},il=w=>{var O=lv(),ce=A(H(O),2),ke=f(ce),_e=A(ce,2);{var U=rt=>{var bn=ov(),fa=A(H(bn),2),va=f(fa);Y(()=>re(va,l(d))),k(rt,bn)};F(_e,rt=>{l(d)&&rt(U)})}var D=A(_e,2);{var ge=rt=>{Nt(rt,{size:10,class:"animate-spin text-dl-primary-light"})};F(D,rt=>{l(R)&&rt(ge)})}Y(()=>re(ke,l(o))),k(w,O)};F(zs,w=>{l(v)?w(al):l(da)?w(sl,1):w(il,-1)})}var ol=A(zs,2);pf(ol,{size:12});var ll=A(ws,2);{var dl=w=>{var O=dv(),ce=f(O);Nt(ce,{size:16,class:"text-dl-text-dim animate-spin flex-shrink-0"}),k(w,O)},cl=w=>{var O=cv(),ce=f(O);Mr(ce,{size:16,class:"text-dl-primary-light flex-shrink-0"});var ke=A(ce,4);K("click",ke,()=>nr()),k(w,O)};F(ll,w=>{l(v)&&!l(p)?w(dl):l(da)&&!l(p)&&w(cl,1)})}var ul=A(ys,2);{var fl=w=>{av(w,{get messages(){return l(qo)},get isLoading(){return l(n)},get scrollTrigger(){return l(b)},onSend:gs,onStop:Wo,get inputText(){return l(r)},set inputText(O){m(r,O,!0)}})},vl=w=>{Tf(w,{onSend:gs,get inputText(){return l(r)},set inputText(O){m(r,O,!0)}})};F(ul,w=>{l(Uo)?w(fl):w(vl,-1)})}var Es=A(xs,2);{var pl=w=>{var O=Gv(),ce=f(O),ke=f(ce),_e=A(f(ke),2),U=f(_e);Bo(U,{size:18});var D=A(ke,2),ge=f(D);ut(ge,21,()=>Object.entries(l(s)),ct,(Mt,Ar)=>{var ar=Ve(()=>Ei(l(Ar),2));let $e=()=>l(ar)[0],Ce=()=>l(ar)[1];const xn=Ve(()=>$e()===l(o)),_l=Ve(()=>l(g)===$e()),qr=Ve(()=>Ce().auth==="api_key"),pa=Ve(()=>Ce().auth==="cli"),Gn=Ve(()=>l(h)[$e()]||[]),$s=Ve(()=>l(y)[$e()]);var ha=Fv(),ma=f(ha),Ps=f(ma),Ts=A(Ps,2),Cs=f(Ts),Ns=f(Cs),yl=f(Ns),wl=A(Ns,2);{var kl=Ne=>{var gt=uv();k(Ne,gt)};F(wl,Ne=>{l(xn)&&Ne(kl)})}var Sl=A(Cs,2),Al=f(Sl),zl=A(Ts,2),El=f(zl);{var Ml=Ne=>{Ma(Ne,{size:16,class:"text-dl-success"})},$l=Ne=>{var gt=fv(),Ur=H(gt);bi(Ur,{size:14,class:"text-amber-400"}),k(Ne,gt)},Pl=Ne=>{var gt=vv(),Ur=H(gt);mf(Ur,{size:14,class:"text-dl-text-dim"}),k(Ne,gt)};F(El,Ne=>{Ce().available?Ne(Ml):l(qr)?Ne($l,1):l(pa)&&!Ce().available&&Ne(Pl,2)})}var Tl=A(ma,2);{var Cl=Ne=>{var gt=Dv(),Ur=H(gt);{var Nl=ve=>{var Se=hv(),Pe=f(Se),We=f(Pe),st=A(Pe,2),Ae=f(st),Ke=A(Ae,2),vt=f(Ke);{var et=de=>{Nt(de,{size:12,class:"animate-spin"})},ze=de=>{bi(de,{size:12})};F(vt,de=>{l(E)?de(et):de(ze,-1)})}var Fe=A(st,2);{var we=de=>{var nt=pv(),Ie=f(nt);Mr(Ie,{size:12}),k(de,nt)};F(Fe,de=>{l(_)==="error"&&de(we)})}Y(de=>{re(We,Ce().envKey?`환경변수 ${Ce().envKey}로도 설정 가능합니다`:"API 키를 입력하세요"),Qn(Ae,"placeholder",$e()==="openai"?"sk-...":$e()==="claude"?"sk-ant-...":"API Key"),Ke.disabled=de},[()=>!l(M).trim()||l(E)]),K("keydown",Ae,de=>{de.key==="Enter"&&ye()}),Zr(Ae,()=>l(M),de=>m(M,de)),K("click",Ke,ye),k(ve,Se)};F(Ur,ve=>{l(qr)&&!Ce().available&&ve(Nl)})}var Is=A(Ur,2);{var Il=ve=>{var Se=gv(),Pe=f(Se),We=f(Pe);Ma(We,{size:13,class:"text-dl-success"});var st=A(Pe,2),Ae=f(st),Ke=A(Ae,2);{var vt=ze=>{var Fe=mv(),we=f(Fe);{var de=Ie=>{Nt(Ie,{size:10,class:"animate-spin"})},nt=Ie=>{var bt=Xn("변경");k(Ie,bt)};F(we,Ie=>{l(E)?Ie(de):Ie(nt,-1)})}Y(()=>Fe.disabled=l(E)),K("click",Fe,ye),k(ze,Fe)},et=Ve(()=>l(M).trim());F(Ke,ze=>{l(et)&&ze(vt)})}K("keydown",Ae,ze=>{ze.key==="Enter"&&ye()}),Zr(Ae,()=>l(M),ze=>m(M,ze)),k(ve,Se)};F(Is,ve=>{l(qr)&&Ce().available&&ve(Il)})}var Os=A(Is,2);{var Ol=ve=>{var Se=bv(),Pe=A(f(Se),2),We=f(Pe);Pa(We,{size:14});var st=A(We,2);gi(st,{size:10,class:"ml-auto"}),k(ve,Se)},Ll=ve=>{var Se=xv(),Pe=f(Se),We=f(Pe);Mr(We,{size:14}),k(ve,Se)};F(Os,ve=>{$e()==="ollama"&&!l(i).installed?ve(Ol):$e()==="ollama"&&l(i).installed&&!l(i).running&&ve(Ll,1)})}var Ls=A(Os,2);{var Rl=ve=>{var Se=Sv(),Pe=f(Se);{var We=Ae=>{var Ke=yv(),vt=H(Ke),et=f(vt),ze=A(vt,2),Fe=f(ze);{var we=$t=>{var zr=_v();k($t,zr)};F(Fe,$t=>{l(se).installed||$t(we)})}var de=A(Fe,2),nt=f(de),Ie=f(nt),bt=A(ze,2),sr=f(bt);Mr(sr,{size:12,class:"text-amber-400 flex-shrink-0"}),Y(()=>{re(et,l(se).installed?"Codex CLI가 설치되었지만 인증이 필요합니다":"Codex CLI 설치가 필요합니다"),re(Ie,l(se).installed?"1.":"2.")}),k(Ae,Ke)},st=Ae=>{var Ke=kv(),vt=H(Ke),et=f(vt),ze=A(vt,2),Fe=f(ze);{var we=$t=>{var zr=wv();k($t,zr)};F(Fe,$t=>{l(ie).installed||$t(we)})}var de=A(Fe,2),nt=f(de),Ie=f(nt),bt=A(ze,2),sr=f(bt);Mr(sr,{size:12,class:"text-amber-400 flex-shrink-0"}),Y(()=>{re(et,l(ie).installed&&!l(ie).authenticated?"Claude Code가 설치되었지만 인증이 필요합니다":"Claude Code CLI 설치가 필요합니다"),re(Ie,l(ie).installed?"1.":"2.")}),k(Ae,Ke)};F(Pe,Ae=>{$e()==="codex"?Ae(We):$e()==="claude-code"&&Ae(st,1)})}k(ve,Se)};F(Ls,ve=>{l(pa)&&!Ce().available&&ve(Rl)})}var Rs=A(Ls,2);{var jl=ve=>{var Se=Ev(),Pe=A(f(Se),2),We=f(Pe);{var st=et=>{var ze=Av(),Fe=H(ze);Nt(Fe,{size:14,class:"animate-spin"}),k(et,ze)},Ae=et=>{var ze=zv(),Fe=H(ze);df(Fe,{size:14}),k(et,ze)};F(We,et=>{l(V)?et(st):et(Ae,-1)})}var Ke=A(Pe,2),vt=f(Ke);Mr(vt,{size:12,class:"text-amber-400 flex-shrink-0"}),Y(()=>Pe.disabled=l(V)),K("click",Pe,De),k(ve,Se)};F(Rs,ve=>{Ce().auth==="oauth"&&!Ce().available&&ve(jl)})}var js=A(Rs,2);{var Dl=ve=>{var Se=Mv(),Pe=f(Se),We=f(Pe),st=f(We);Ma(st,{size:13,class:"text-dl-success"});var Ae=A(We,2),Ke=f(Ae);cf(Ke,{size:11}),K("click",Ae,zt),k(ve,Se)};F(js,ve=>{Ce().auth==="oauth"&&Ce().available&&ve(Dl)})}var Fl=A(js,2);{var Gl=ve=>{var Se=jv(),Pe=f(Se),We=A(f(Pe),2);{var st=we=>{Nt(we,{size:12,class:"animate-spin text-dl-text-dim"})};F(We,we=>{l($s)&&we(st)})}var Ae=A(Pe,2);{var Ke=we=>{var de=$v(),nt=f(de);Nt(nt,{size:14,class:"animate-spin"}),k(we,de)},vt=we=>{var de=Tv();ut(de,21,()=>l(Gn),ct,(nt,Ie)=>{var bt=Pv(),sr=f(bt),$t=A(sr);{var zr=xt=>{nf(xt,{size:10,class:"inline ml-1"})};F($t,xt=>{l(Ie)===l(d)&&l(xn)&&xt(zr)})}Y(xt=>{Ye(bt,1,xt),re(sr,`${l(Ie)??""} `)},[()=>Ue(Be("px-3 py-1.5 rounded-lg text-[11px] border transition-all",l(Ie)===l(d)&&l(xn)?"border-dl-primary/50 bg-dl-primary/10 text-dl-primary-light font-medium":"border-dl-border text-dl-text-muted hover:border-dl-primary/30 hover:text-dl-text"))]),K("click",bt,()=>{$e()!==l(o)&&B($e()),fe(l(Ie))}),k(nt,bt)}),k(we,de)},et=we=>{var de=Cv();k(we,de)};F(Ae,we=>{l($s)&&l(Gn).length===0?we(Ke):l(Gn).length>0?we(vt,1):we(et,-1)})}var ze=A(Ae,2);{var Fe=we=>{var de=Rv(),nt=f(de),Ie=A(f(nt),2),bt=A(f(Ie));gi(bt,{size:9});var sr=A(nt,2);{var $t=xt=>{var _n=Nv(),yn=f(_n),Yr=f(yn),wn=f(Yr);Nt(wn,{size:12,class:"animate-spin text-dl-primary-light"});var ga=A(Yr,2),Vn=A(yn,2),Jt=f(Vn),Pt=A(Vn,2),ba=f(Pt);Y(()=>{yo(Jt,`width: ${l(z)??""}%`),re(ba,l(C))}),K("click",ga,Me),k(xt,_n)},zr=xt=>{var _n=Lv(),yn=H(_n),Yr=f(yn),wn=A(Yr,2),ga=f(wn);Pa(ga,{size:12});var Vn=A(yn,2);ut(Vn,21,()=>Yo,ct,(Jt,Pt)=>{const ba=Ve(()=>l(Gn).some(Jr=>Jr===l(Pt).name||Jr===l(Pt).name.split(":")[0]));var Ds=ue(),Vl=H(Ds);{var Bl=Jr=>{var xa=Ov(),Fs=f(xa),Gs=f(Fs),Vs=f(Gs),Hl=f(Vs),Bs=A(Vs,2),Wl=f(Bs),Kl=A(Bs,2);{var ql=_a=>{var Ws=Iv(),Ql=f(Ws);Y(()=>re(Ql,l(Pt).tag)),k(_a,Ws)};F(Kl,_a=>{l(Pt).tag&&_a(ql)})}var Ul=A(Gs,2),Yl=f(Ul),Jl=A(Fs,2),Hs=f(Jl),Xl=f(Hs),Zl=A(Hs,2);Pa(Zl,{size:12,class:"text-dl-text-dim group-hover:text-dl-primary-light transition-colors"}),Y(()=>{re(Hl,l(Pt).name),re(Wl,l(Pt).size),re(Yl,l(Pt).desc),re(Xl,`${l(Pt).gb??""} GB`)}),K("click",xa,()=>{m($,l(Pt).name,!0),Et()}),k(Jr,xa)};F(Vl,Jr=>{l(ba)||Jr(Bl)})}k(Jt,Ds)}),Y(Jt=>wn.disabled=Jt,[()=>!l($).trim()]),K("keydown",Yr,Jt=>{Jt.key==="Enter"&&Et()}),Zr(Yr,()=>l($),Jt=>m($,Jt)),K("click",wn,Et),k(xt,_n)};F(sr,xt=>{l(R)?xt($t):xt(zr,-1)})}k(we,de)};F(ze,we=>{$e()==="ollama"&&we(Fe)})}k(ve,Se)};F(Fl,ve=>{(Ce().available||l(qr)||l(pa)||Ce().auth==="oauth")&&ve(Gl)})}k(Ne,gt)};F(Tl,Ne=>{(l(_l)||l(xn))&&Ne(Cl)})}Y((Ne,gt)=>{Ye(ha,1,Ne),Ye(Ps,1,gt),re(yl,Ce().label||$e()),re(Al,Ce().desc||"")},[()=>Ue(Be("rounded-xl border transition-all",l(xn)?"border-dl-primary/40 bg-dl-primary/[0.03]":"border-dl-border")),()=>Ue(Be("w-2.5 h-2.5 rounded-full flex-shrink-0",Ce().available?"bg-dl-success":l(qr)?"bg-amber-400":"bg-dl-text-dim"))]),K("click",ma,()=>{Ce().available||l(qr)?$e()===l(o)?Ee($e()):B($e()):Ee($e())}),k(Mt,ha)});var rt=A(D,2),bn=f(rt),fa=f(bn);{var va=Mt=>{var Ar=Xn();Y(()=>{var ar;return re(Ar,`현재: ${(((ar=l(s)[l(o)])==null?void 0:ar.label)||l(o))??""} / ${l(d)??""}`)}),k(Mt,Ar)},bl=Mt=>{var Ar=Xn();Y(()=>{var ar;return re(Ar,`현재: ${(((ar=l(s)[l(o)])==null?void 0:ar.label)||l(o))??""}`)}),k(Mt,Ar)};F(fa,Mt=>{l(o)&&l(d)?Mt(va):l(o)&&Mt(bl,1)})}var xl=A(bn,2);K("click",O,Mt=>{Mt.target===Mt.currentTarget&&m(p,!1)}),K("keydown",O,()=>{}),K("click",_e,()=>m(p,!1)),K("click",xl,()=>m(p,!1)),k(w,O)};F(Es,w=>{l(p)&&w(pl)})}var Ms=A(Es,2);{var hl=w=>{var O=Vv(),ce=f(O),ke=A(f(ce),4),_e=f(ke),U=A(_e,2);K("click",O,D=>{D.target===D.currentTarget&&m(G,null)}),K("keydown",O,()=>{}),K("click",_e,()=>m(G,null)),K("click",U,Ho),k(w,O)};F(Ms,w=>{l(G)&&w(hl)})}var ml=A(Ms,2);{var gl=w=>{var O=Bv(),ce=f(O),ke=f(ce);Y(_e=>{Ye(ce,1,_e),re(ke,l(J))},[()=>Ue(Be("px-4 py-3 rounded-xl border text-[13px] shadow-2xl max-w-sm",l(Q)==="error"?"bg-dl-primary/10 border-dl-primary/30 text-dl-primary-light":l(Q)==="success"?"bg-dl-success/10 border-dl-success/30 text-dl-success":"bg-dl-bg-card border-dl-border text-dl-text"))]),k(w,O)};F(ml,w=>{l(le)&&w(gl)})}Y(w=>Ye(ua,1,w),[()=>Ue(Be("flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] transition-colors",l(v)?"text-dl-text-dim":l(da)?"text-dl-primary-light bg-dl-primary/10 hover:bg-dl-primary/15":"text-dl-text-dim hover:text-dl-text-muted hover:bg-white/5"))]),K("click",ca,kr),K("click",ua,()=>nr()),k(e,bs),rr()}mn(["click","keydown"]);$c(Wv,{target:document.getElementById("app")});
