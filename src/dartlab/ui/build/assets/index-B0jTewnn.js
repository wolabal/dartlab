var Gl=Object.defineProperty;var Vs=e=>{throw TypeError(e)};var Wl=(e,t,r)=>t in e?Gl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var St=(e,t,r)=>Wl(e,typeof t!="symbol"?t+"":t,r),xa=(e,t,r)=>t.has(e)||Vs("Cannot "+r);var x=(e,t,r)=>(xa(e,t,"read from private field"),r?r.call(e):t.get(e)),ne=(e,t,r)=>t.has(e)?Vs("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),X=(e,t,r,n)=>(xa(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),Me=(e,t,r)=>(xa(e,t,"access private method"),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}})();const Ea=!1;var Xa=Array.isArray,Hl=Array.prototype.indexOf,tn=Array.prototype.includes,ra=Array.from,Kl=Object.defineProperty,dr=Object.getOwnPropertyDescriptor,wo=Object.getOwnPropertyDescriptors,ql=Object.prototype,Ul=Array.prototype,Za=Object.getPrototypeOf,Bs=Object.isExtensible;function bn(e){return typeof e=="function"}const Yl=()=>{};function Jl(e){return e()}function $a(e){for(var t=0;t<e.length;t++)e[t]()}function ko(){var e,t,r=new Promise((n,a)=>{e=n,t=a});return{promise:r,resolve:e,reject:t}}function So(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const We=2,on=4,Pr=8,na=1<<24,mr=16,Tt=32,Lr=64,Ta=128,pt=512,Ve=1024,Be=2048,$t=4096,Ye=8192,jt=16384,ln=32768,vr=65536,Gs=1<<17,Xl=1<<18,dn=1<<19,Ao=1<<20,Lt=1<<25,Cr=65536,Na=1<<21,Qa=1<<22,cr=1<<23,Dt=Symbol("$state"),zo=Symbol("legacy props"),Zl=Symbol(""),wr=new class extends Error{constructor(){super(...arguments);St(this,"name","StaleReactionError");St(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var xo;const Mo=!!((xo=globalThis.document)!=null&&xo.contentType)&&globalThis.document.contentType.includes("xml");function Ql(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function ed(e,t,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function td(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function rd(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function nd(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ad(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function sd(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function od(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function id(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ld(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function dd(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const cd=1,ud=2,Eo=4,fd=8,vd=16,pd=1,hd=2,$o=4,md=8,gd=16,bd=1,xd=2,Ce=Symbol(),To="http://www.w3.org/1999/xhtml",No="http://www.w3.org/2000/svg",_d="http://www.w3.org/1998/Math/MathML",yd="@attach";function wd(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function kd(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Po(e){return e===this.v}function Sd(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Co(e){return!Sd(e,this.v)}let Tn=!1,Ad=!1;function zd(){Tn=!0}let Le=null;function rn(e){Le=e}function Jt(e,t=!1,r){Le={p:Le,i:!1,c:null,e:null,s:e,x:null,l:Tn&&!t?{s:null,u:null,$:[]}:null}}function Xt(e){var t=Le,r=t.e;if(r!==null){t.e=null;for(var n of r)Zo(n)}return t.i=!0,Le=t.p,{}}function Nn(){return!Tn||Le!==null&&Le.l===null}let kr=[];function Io(){var e=kr;kr=[],$a(e)}function Ft(e){if(kr.length===0&&!Sn){var t=kr;queueMicrotask(()=>{t===kr&&Io()})}kr.push(e)}function Md(){for(;kr.length>0;)Io()}function Oo(e){var t=te;if(t===null)return ee.f|=cr,e;if((t.f&ln)===0&&(t.f&on)===0)throw e;lr(e,t)}function lr(e,t){for(;t!==null;){if((t.f&Ta)!==0){if((t.f&ln)===0)throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}const Ed=-7169;function Ae(e,t){e.f=e.f&Ed|t}function es(e){(e.f&pt)!==0||e.deps===null?Ae(e,Ve):Ae(e,$t)}function Lo(e){if(e!==null)for(const t of e)(t.f&We)===0||(t.f&Cr)===0||(t.f^=Cr,Lo(t.deps))}function Ro(e,t,r){(e.f&Be)!==0?t.add(e):(e.f&$t)!==0&&r.add(e),Lo(e.deps),Ae(e,Ve)}const Fn=new Set;let Z=null,Pa=null,je=null,Ze=[],aa=null,Sn=!1,nn=null,$d=1;var sr,qr,zr,Ur,Yr,Jr,or,Pt,Xr,nt,Ca,Ia,Oa,La;const vs=class vs{constructor(){ne(this,nt);St(this,"id",$d++);St(this,"current",new Map);St(this,"previous",new Map);ne(this,sr,new Set);ne(this,qr,new Set);ne(this,zr,0);ne(this,Ur,0);ne(this,Yr,null);ne(this,Jr,new Set);ne(this,or,new Set);ne(this,Pt,new Map);St(this,"is_fork",!1);ne(this,Xr,!1)}skip_effect(t){x(this,Pt).has(t)||x(this,Pt).set(t,{d:[],m:[]})}unskip_effect(t){var r=x(this,Pt).get(t);if(r){x(this,Pt).delete(t);for(var n of r.d)Ae(n,Be),Rt(n);for(n of r.m)Ae(n,$t),Rt(n)}}process(t){var a;Ze=[],this.apply();var r=nn=[],n=[];for(const s of t)Me(this,nt,Ia).call(this,s,r,n);if(nn=null,Me(this,nt,Ca).call(this)){Me(this,nt,Oa).call(this,n),Me(this,nt,Oa).call(this,r);for(const[s,o]of x(this,Pt))Vo(s,o)}else{Pa=this,Z=null;for(const s of x(this,sr))s(this);x(this,sr).clear(),x(this,zr)===0&&Me(this,nt,La).call(this),Ws(n),Ws(r),x(this,Jr).clear(),x(this,or).clear(),Pa=null,(a=x(this,Yr))==null||a.resolve()}je=null}capture(t,r){r!==Ce&&!this.previous.has(t)&&this.previous.set(t,r),(t.f&cr)===0&&(this.current.set(t,t.v),je==null||je.set(t,t.v))}activate(){Z=this,this.apply()}deactivate(){Z===this&&(Z=null,je=null)}flush(){var t;if(Ze.length>0)Z=this,jo();else if(x(this,zr)===0&&!this.is_fork){for(const r of x(this,sr))r(this);x(this,sr).clear(),Me(this,nt,La).call(this),(t=x(this,Yr))==null||t.resolve()}this.deactivate()}discard(){for(const t of x(this,qr))t(this);x(this,qr).clear()}increment(t){X(this,zr,x(this,zr)+1),t&&X(this,Ur,x(this,Ur)+1)}decrement(t){X(this,zr,x(this,zr)-1),t&&X(this,Ur,x(this,Ur)-1),!x(this,Xr)&&(X(this,Xr,!0),Ft(()=>{X(this,Xr,!1),Me(this,nt,Ca).call(this)?Ze.length>0&&this.flush():this.revive()}))}revive(){for(const t of x(this,Jr))x(this,or).delete(t),Ae(t,Be),Rt(t);for(const t of x(this,or))Ae(t,$t),Rt(t);this.flush()}oncommit(t){x(this,sr).add(t)}ondiscard(t){x(this,qr).add(t)}settled(){return(x(this,Yr)??X(this,Yr,ko())).promise}static ensure(){if(Z===null){const t=Z=new vs;Fn.add(Z),Sn||Ft(()=>{Z===t&&t.flush()})}return Z}apply(){}};sr=new WeakMap,qr=new WeakMap,zr=new WeakMap,Ur=new WeakMap,Yr=new WeakMap,Jr=new WeakMap,or=new WeakMap,Pt=new WeakMap,Xr=new WeakMap,nt=new WeakSet,Ca=function(){return this.is_fork||x(this,Ur)>0},Ia=function(t,r,n){t.f^=Ve;for(var a=t.first;a!==null;){var s=a.f,o=(s&(Tt|Lr))!==0,i=o&&(s&Ve)!==0,l=(s&Ye)!==0,c=i||x(this,Pt).has(a);if(!c&&a.fn!==null){o?l||(a.f^=Ve):(s&on)!==0?r.push(a):(s&(Pr|na))!==0&&l?n.push(a):On(a)&&(sn(a),(s&mr)!==0&&(x(this,or).add(a),l&&Ae(a,Be)));var u=a.first;if(u!==null){a=u;continue}}for(;a!==null;){var g=a.next;if(g!==null){a=g;break}a=a.parent}}},Oa=function(t){for(var r=0;r<t.length;r+=1)Ro(t[r],x(this,Jr),x(this,or))},La=function(){var s;if(Fn.size>1){this.previous.clear();var t=Z,r=je,n=!0;for(const o of Fn){if(o===this){n=!1;continue}const i=[];for(const[c,u]of this.current){if(o.current.has(c))if(n&&u!==o.current.get(c))o.current.set(c,u);else continue;i.push(c)}if(i.length===0)continue;const l=[...o.current.keys()].filter(c=>!this.current.has(c));if(l.length>0){var a=Ze;Ze=[];const c=new Set,u=new Map;for(const g of i)Do(g,l,c,u);if(Ze.length>0){Z=o,o.apply();for(const g of Ze)Me(s=o,nt,Ia).call(s,g,[],[]);o.deactivate()}Ze=a}}Z=t,je=r}x(this,Pt).clear(),Fn.delete(this)};let ur=vs;function Td(e){var t=Sn;Sn=!0;try{for(var r;;){if(Md(),Ze.length===0&&(Z==null||Z.flush(),Ze.length===0))return aa=null,r;jo()}}finally{Sn=t}}function jo(){var e=null;try{for(var t=0;Ze.length>0;){var r=ur.ensure();if(t++>1e3){var n,a;Nd()}r.process(Ze),fr.clear()}}finally{Ze=[],aa=null,nn=null}}function Nd(){try{ad()}catch(e){lr(e,aa)}}let At=null;function Ws(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(jt|Ye))===0&&On(n)&&(At=new Set,sn(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&ri(n),(At==null?void 0:At.size)>0)){fr.clear();for(const a of At){if((a.f&(jt|Ye))!==0)continue;const s=[a];let o=a.parent;for(;o!==null;)At.has(o)&&(At.delete(o),s.push(o)),o=o.parent;for(let i=s.length-1;i>=0;i--){const l=s[i];(l.f&(jt|Ye))===0&&sn(l)}}At.clear()}}At=null}}function Do(e,t,r,n){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const a of e.reactions){const s=a.f;(s&We)!==0?Do(a,t,r,n):(s&(Qa|mr))!==0&&(s&Be)===0&&Fo(a,t,n)&&(Ae(a,Be),Rt(a))}}function Fo(e,t,r){const n=r.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const a of e.deps){if(tn.call(t,a))return!0;if((a.f&We)!==0&&Fo(a,t,r))return r.set(a,!0),!0}return r.set(e,!1),!1}function Rt(e){var t=aa=e,r=t.b;if(r!=null&&r.is_pending&&(e.f&(on|Pr|na))!==0&&(e.f&ln)===0){r.defer_effect(e);return}for(;t.parent!==null;){t=t.parent;var n=t.f;if(nn!==null&&t===te&&(e.f&Pr)===0)return;if((n&(Lr|Tt))!==0){if((n&Ve)===0)return;t.f^=Ve}}Ze.push(t)}function Vo(e,t){if(!((e.f&Tt)!==0&&(e.f&Ve)!==0)){(e.f&Be)!==0?t.d.push(e):(e.f&$t)!==0&&t.m.push(e),Ae(e,Ve);for(var r=e.first;r!==null;)Vo(r,t),r=r.next}}function Pd(e){let t=0,r=pr(0),n;return()=>{as()&&(d(r),os(()=>(t===0&&(n=Ir(()=>e(()=>zn(r)))),t+=1,()=>{Ft(()=>{t-=1,t===0&&(n==null||n(),n=void 0,zn(r))})})))}}var Cd=vr|dn;function Id(e,t,r,n){new Od(e,t,r,n)}var vt,Ja,Ct,Mr,Xe,It,ot,zt,qt,Er,ir,Zr,Qr,en,Ut,ea,Te,Ld,Rd,jd,Ra,Kn,qn,ja;class Od{constructor(t,r,n,a){ne(this,Te);St(this,"parent");St(this,"is_pending",!1);St(this,"transform_error");ne(this,vt);ne(this,Ja,null);ne(this,Ct);ne(this,Mr);ne(this,Xe);ne(this,It,null);ne(this,ot,null);ne(this,zt,null);ne(this,qt,null);ne(this,Er,0);ne(this,ir,0);ne(this,Zr,!1);ne(this,Qr,new Set);ne(this,en,new Set);ne(this,Ut,null);ne(this,ea,Pd(()=>(X(this,Ut,pr(x(this,Er))),()=>{X(this,Ut,null)})));var s;X(this,vt,t),X(this,Ct,r),X(this,Mr,o=>{var i=te;i.b=this,i.f|=Ta,n(o)}),this.parent=te.b,this.transform_error=a??((s=this.parent)==null?void 0:s.transform_error)??(o=>o),X(this,Xe,In(()=>{Me(this,Te,Ra).call(this)},Cd))}defer_effect(t){Ro(t,x(this,Qr),x(this,en))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!x(this,Ct).pending}update_pending_count(t){Me(this,Te,ja).call(this,t),X(this,Er,x(this,Er)+t),!(!x(this,Ut)||x(this,Zr))&&(X(this,Zr,!0),Ft(()=>{X(this,Zr,!1),x(this,Ut)&&an(x(this,Ut),x(this,Er))}))}get_effect_pending(){return x(this,ea).call(this),d(x(this,Ut))}error(t){var r=x(this,Ct).onerror;let n=x(this,Ct).failed;if(!r&&!n)throw t;x(this,It)&&(Ge(x(this,It)),X(this,It,null)),x(this,ot)&&(Ge(x(this,ot)),X(this,ot,null)),x(this,zt)&&(Ge(x(this,zt)),X(this,zt,null));var a=!1,s=!1;const o=()=>{if(a){kd();return}a=!0,s&&dd(),x(this,zt)!==null&&Tr(x(this,zt),()=>{X(this,zt,null)}),Me(this,Te,qn).call(this,()=>{ur.ensure(),Me(this,Te,Ra).call(this)})},i=l=>{try{s=!0,r==null||r(l,o),s=!1}catch(c){lr(c,x(this,Xe)&&x(this,Xe).parent)}n&&X(this,zt,Me(this,Te,qn).call(this,()=>{ur.ensure();try{return et(()=>{var c=te;c.b=this,c.f|=Ta,n(x(this,vt),()=>l,()=>o)})}catch(c){return lr(c,x(this,Xe).parent),null}}))};Ft(()=>{var l;try{l=this.transform_error(t)}catch(c){lr(c,x(this,Xe)&&x(this,Xe).parent);return}l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(i,c=>lr(c,x(this,Xe)&&x(this,Xe).parent)):i(l)})}}vt=new WeakMap,Ja=new WeakMap,Ct=new WeakMap,Mr=new WeakMap,Xe=new WeakMap,It=new WeakMap,ot=new WeakMap,zt=new WeakMap,qt=new WeakMap,Er=new WeakMap,ir=new WeakMap,Zr=new WeakMap,Qr=new WeakMap,en=new WeakMap,Ut=new WeakMap,ea=new WeakMap,Te=new WeakSet,Ld=function(){try{X(this,It,et(()=>x(this,Mr).call(this,x(this,vt))))}catch(t){this.error(t)}},Rd=function(t){const r=x(this,Ct).failed;r&&X(this,zt,et(()=>{r(x(this,vt),()=>t,()=>()=>{})}))},jd=function(){const t=x(this,Ct).pending;t&&(this.is_pending=!0,X(this,ot,et(()=>t(x(this,vt)))),Ft(()=>{var r=X(this,qt,document.createDocumentFragment()),n=Vt();r.append(n),X(this,It,Me(this,Te,qn).call(this,()=>(ur.ensure(),et(()=>x(this,Mr).call(this,n))))),x(this,ir)===0&&(x(this,vt).before(r),X(this,qt,null),Tr(x(this,ot),()=>{X(this,ot,null)}),Me(this,Te,Kn).call(this))}))},Ra=function(){try{if(this.is_pending=this.has_pending_snippet(),X(this,ir,0),X(this,Er,0),X(this,It,et(()=>{x(this,Mr).call(this,x(this,vt))})),x(this,ir)>0){var t=X(this,qt,document.createDocumentFragment());ds(x(this,It),t);const r=x(this,Ct).pending;X(this,ot,et(()=>r(x(this,vt))))}else Me(this,Te,Kn).call(this)}catch(r){this.error(r)}},Kn=function(){this.is_pending=!1;for(const t of x(this,Qr))Ae(t,Be),Rt(t);for(const t of x(this,en))Ae(t,$t),Rt(t);x(this,Qr).clear(),x(this,en).clear()},qn=function(t){var r=te,n=ee,a=Le;gt(x(this,Xe)),mt(x(this,Xe)),rn(x(this,Xe).ctx);try{return t()}catch(s){return Oo(s),null}finally{gt(r),mt(n),rn(a)}},ja=function(t){var r;if(!this.has_pending_snippet()){this.parent&&Me(r=this.parent,Te,ja).call(r,t);return}X(this,ir,x(this,ir)+t),x(this,ir)===0&&(Me(this,Te,Kn).call(this),x(this,ot)&&Tr(x(this,ot),()=>{X(this,ot,null)}),x(this,qt)&&(x(this,vt).before(x(this,qt)),X(this,qt,null)))};function Bo(e,t,r,n){const a=Nn()?Pn:ts;var s=e.filter(g=>!g.settled);if(r.length===0&&s.length===0){n(t.map(a));return}var o=te,i=Dd(),l=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(g=>g.promise)):null;function c(g){i();try{n(g)}catch(v){(o.f&jt)===0&&lr(v,o)}Da()}if(r.length===0){l.then(()=>c(t.map(a)));return}function u(){i(),Promise.all(r.map(g=>Vd(g))).then(g=>c([...t.map(a),...g])).catch(g=>lr(g,o))}l?l.then(u):u()}function Dd(){var e=te,t=ee,r=Le,n=Z;return function(s=!0){gt(e),mt(t),rn(r),s&&(n==null||n.activate())}}function Da(e=!0){gt(null),mt(null),rn(null),e&&(Z==null||Z.deactivate())}function Fd(){var e=te.b,t=Z,r=e.is_rendered();return e.update_pending_count(1),t.increment(r),()=>{e.update_pending_count(-1),t.decrement(r)}}function Pn(e){var t=We|Be,r=ee!==null&&(ee.f&We)!==0?ee:null;return te!==null&&(te.f|=dn),{ctx:Le,deps:null,effects:null,equals:Po,f:t,fn:e,reactions:null,rv:0,v:Ce,wv:0,parent:r??te,ac:null}}function Vd(e,t,r){te===null&&Ql();var a=void 0,s=pr(Ce),o=!ee,i=new Map;return rc(()=>{var v;var l=ko();a=l.promise;try{Promise.resolve(e()).then(l.resolve,l.reject).finally(Da)}catch(_){l.reject(_),Da()}var c=Z;if(o){var u=Fd();(v=i.get(c))==null||v.reject(wr),i.delete(c),i.set(c,l)}const g=(_,f=void 0)=>{if(c.activate(),f)f!==wr&&(s.f|=cr,an(s,f));else{(s.f&cr)!==0&&(s.f^=cr),an(s,_);for(const[m,p]of i){if(i.delete(m),m===c)break;p.reject(wr)}}u&&u()};l.promise.then(g,_=>g(null,_||"unknown"))}),oa(()=>{for(const l of i.values())l.reject(wr)}),new Promise(l=>{function c(u){function g(){u===a?l(s):c(a)}u.then(g,g)}c(a)})}function $e(e){const t=Pn(e);return si(t),t}function ts(e){const t=Pn(e);return t.equals=Co,t}function Bd(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)Ge(t[r])}}function Gd(e){for(var t=e.parent;t!==null;){if((t.f&We)===0)return(t.f&jt)===0?t:null;t=t.parent}return null}function rs(e){var t,r=te;gt(Gd(e));try{e.f&=~Cr,Bd(e),t=di(e)}finally{gt(r)}return t}function Go(e){var t=rs(e);if(!e.equals(t)&&(e.wv=ii(),(!(Z!=null&&Z.is_fork)||e.deps===null)&&(e.v=t,e.deps===null))){Ae(e,Ve);return}hr||(je!==null?(as()||Z!=null&&Z.is_fork)&&je.set(e,t):es(e))}function Wd(e){var t,r;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),(r=n.ac)==null||r.abort(wr),n.teardown=Yl,n.ac=null,Mn(n,0),is(n))}function Wo(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&sn(t)}let Fa=new Set;const fr=new Map;let Ho=!1;function pr(e,t){var r={f:0,v:e,reactions:null,equals:Po,rv:0,wv:0};return r}function U(e,t){const r=pr(e);return si(r),r}function Hd(e,t=!1,r=!0){var a;const n=pr(e);return t||(n.equals=Co),Tn&&r&&Le!==null&&Le.l!==null&&((a=Le.l).s??(a.s=[])).push(n),n}function b(e,t,r=!1){ee!==null&&(!Et||(ee.f&Gs)!==0)&&Nn()&&(ee.f&(We|mr|Qa|Gs))!==0&&(ht===null||!tn.call(ht,e))&&ld();let n=r?lt(t):t;return an(e,n)}function an(e,t){if(!e.equals(t)){var r=e.v;hr?fr.set(e,t):fr.set(e,r),e.v=t;var n=ur.ensure();if(n.capture(e,r),(e.f&We)!==0){const a=e;(e.f&Be)!==0&&rs(a),es(a)}e.wv=ii(),Ko(e,Be),Nn()&&te!==null&&(te.f&Ve)!==0&&(te.f&(Tt|Lr))===0&&(ft===null?ac([e]):ft.push(e)),!n.is_fork&&Fa.size>0&&!Ho&&Kd()}return t}function Kd(){Ho=!1;for(const e of Fa)(e.f&Ve)!==0&&Ae(e,$t),On(e)&&sn(e);Fa.clear()}function An(e,t=1){var r=d(e),n=t===1?r++:r--;return b(e,r),n}function zn(e){b(e,e.v+1)}function Ko(e,t){var r=e.reactions;if(r!==null)for(var n=Nn(),a=r.length,s=0;s<a;s++){var o=r[s],i=o.f;if(!(!n&&o===te)){var l=(i&Be)===0;if(l&&Ae(o,t),(i&We)!==0){var c=o;je==null||je.delete(c),(i&Cr)===0&&(i&pt&&(o.f|=Cr),Ko(c,$t))}else l&&((i&mr)!==0&&At!==null&&At.add(o),Rt(o))}}}function lt(e){if(typeof e!="object"||e===null||Dt in e)return e;const t=Za(e);if(t!==ql&&t!==Ul)return e;var r=new Map,n=Xa(e),a=U(0),s=Nr,o=i=>{if(Nr===s)return i();var l=ee,c=Nr;mt(null),Us(s);var u=i();return mt(l),Us(c),u};return n&&r.set("length",U(e.length)),new Proxy(e,{defineProperty(i,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&od();var u=r.get(l);return u===void 0?o(()=>{var g=U(c.value);return r.set(l,g),g}):b(u,c.value,!0),!0},deleteProperty(i,l){var c=r.get(l);if(c===void 0){if(l in i){const u=o(()=>U(Ce));r.set(l,u),zn(a)}}else b(c,Ce),zn(a);return!0},get(i,l,c){var _;if(l===Dt)return e;var u=r.get(l),g=l in i;if(u===void 0&&(!g||(_=dr(i,l))!=null&&_.writable)&&(u=o(()=>{var f=lt(g?i[l]:Ce),m=U(f);return m}),r.set(l,u)),u!==void 0){var v=d(u);return v===Ce?void 0:v}return Reflect.get(i,l,c)},getOwnPropertyDescriptor(i,l){var c=Reflect.getOwnPropertyDescriptor(i,l);if(c&&"value"in c){var u=r.get(l);u&&(c.value=d(u))}else if(c===void 0){var g=r.get(l),v=g==null?void 0:g.v;if(g!==void 0&&v!==Ce)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return c},has(i,l){var v;if(l===Dt)return!0;var c=r.get(l),u=c!==void 0&&c.v!==Ce||Reflect.has(i,l);if(c!==void 0||te!==null&&(!u||(v=dr(i,l))!=null&&v.writable)){c===void 0&&(c=o(()=>{var _=u?lt(i[l]):Ce,f=U(_);return f}),r.set(l,c));var g=d(c);if(g===Ce)return!1}return u},set(i,l,c,u){var A;var g=r.get(l),v=l in i;if(n&&l==="length")for(var _=c;_<g.v;_+=1){var f=r.get(_+"");f!==void 0?b(f,Ce):_ in i&&(f=o(()=>U(Ce)),r.set(_+"",f))}if(g===void 0)(!v||(A=dr(i,l))!=null&&A.writable)&&(g=o(()=>U(void 0)),b(g,lt(c)),r.set(l,g));else{v=g.v!==Ce;var m=o(()=>lt(c));b(g,m)}var p=Reflect.getOwnPropertyDescriptor(i,l);if(p!=null&&p.set&&p.set.call(u,c),!v){if(n&&typeof l=="string"){var y=r.get("length"),T=Number(l);Number.isInteger(T)&&T>=y.v&&b(y,T+1)}zn(a)}return!0},ownKeys(i){d(a);var l=Reflect.ownKeys(i).filter(g=>{var v=r.get(g);return v===void 0||v.v!==Ce});for(var[c,u]of r)u.v!==Ce&&!(c in i)&&l.push(c);return l},setPrototypeOf(){id()}})}function Hs(e){try{if(e!==null&&typeof e=="object"&&Dt in e)return e[Dt]}catch{}return e}function qd(e,t){return Object.is(Hs(e),Hs(t))}var Va,qo,Uo,Yo;function Ud(){if(Va===void 0){Va=window,qo=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Uo=dr(t,"firstChild").get,Yo=dr(t,"nextSibling").get,Bs(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Bs(r)&&(r.__t=void 0)}}function Vt(e=""){return document.createTextNode(e)}function Yt(e){return Uo.call(e)}function Cn(e){return Yo.call(e)}function h(e,t){return Yt(e)}function H(e,t=!1){{var r=Yt(e);return r instanceof Comment&&r.data===""?Cn(r):r}}function z(e,t=1,r=!1){let n=e;for(;t--;)n=Cn(n);return n}function Yd(e){e.textContent=""}function Jo(){return!1}function ns(e,t,r){return document.createElementNS(t??To,e,void 0)}function Jd(e,t){if(t){const r=document.body;e.autofocus=!0,Ft(()=>{document.activeElement===r&&e.focus()})}}let Ks=!1;function Xd(){Ks||(Ks=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function sa(e){var t=ee,r=te;mt(null),gt(null);try{return e()}finally{mt(t),gt(r)}}function Zd(e,t,r,n=r){e.addEventListener(t,()=>sa(r));const a=e.__on_r;a?e.__on_r=()=>{a(),n(!0)}:e.__on_r=()=>n(!0),Xd()}function Xo(e){te===null&&(ee===null&&nd(),rd()),hr&&td()}function Qd(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Nt(e,t){var r=te;r!==null&&(r.f&Ye)!==0&&(e|=Ye);var n={ctx:Le,deps:null,nodes:null,f:e|Be|pt,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null},a=n;if((e&on)!==0)nn!==null?nn.push(n):Rt(n);else if(t!==null){try{sn(n)}catch(o){throw Ge(n),o}a.deps===null&&a.teardown===null&&a.nodes===null&&a.first===a.last&&(a.f&dn)===0&&(a=a.first,(e&mr)!==0&&(e&vr)!==0&&a!==null&&(a.f|=vr))}if(a!==null&&(a.parent=r,r!==null&&Qd(a,r),ee!==null&&(ee.f&We)!==0&&(e&Lr)===0)){var s=ee;(s.effects??(s.effects=[])).push(a)}return n}function as(){return ee!==null&&!Et}function oa(e){const t=Nt(Pr,null);return Ae(t,Ve),t.teardown=e,t}function Jn(e){Xo();var t=te.f,r=!ee&&(t&Tt)!==0&&(t&ln)===0;if(r){var n=Le;(n.e??(n.e=[])).push(e)}else return Zo(e)}function Zo(e){return Nt(on|Ao,e)}function ec(e){return Xo(),Nt(Pr|Ao,e)}function tc(e){ur.ensure();const t=Nt(Lr|dn,e);return(r={})=>new Promise(n=>{r.outro?Tr(t,()=>{Ge(t),n(void 0)}):(Ge(t),n(void 0))})}function ss(e){return Nt(on,e)}function rc(e){return Nt(Qa|dn,e)}function os(e,t=0){return Nt(Pr|t,e)}function Q(e,t=[],r=[],n=[]){Bo(n,t,r,a=>{Nt(Pr,()=>e(...a.map(d)))})}function In(e,t=0){var r=Nt(mr|t,e);return r}function Qo(e,t=0){var r=Nt(na|t,e);return r}function et(e){return Nt(Tt|dn,e)}function ei(e){var t=e.teardown;if(t!==null){const r=hr,n=ee;qs(!0),mt(null);try{t.call(null)}finally{qs(r),mt(n)}}}function is(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const a=r.ac;a!==null&&sa(()=>{a.abort(wr)});var n=r.next;(r.f&Lr)!==0?r.parent=null:Ge(r,t),r=n}}function nc(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&Tt)===0&&Ge(t),t=r}}function Ge(e,t=!0){var r=!1;(t||(e.f&Xl)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(ti(e.nodes.start,e.nodes.end),r=!0),is(e,t&&!r),Mn(e,0),Ae(e,jt);var n=e.nodes&&e.nodes.t;if(n!==null)for(const s of n)s.stop();ei(e);var a=e.parent;a!==null&&a.first!==null&&ri(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=null}function ti(e,t){for(;e!==null;){var r=e===t?null:Cn(e);e.remove(),e=r}}function ri(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Tr(e,t,r=!0){var n=[];ni(e,n,!0);var a=()=>{r&&Ge(e),t&&t()},s=n.length;if(s>0){var o=()=>--s||a();for(var i of n)i.out(o)}else a()}function ni(e,t,r){if((e.f&Ye)===0){e.f^=Ye;var n=e.nodes&&e.nodes.t;if(n!==null)for(const i of n)(i.is_global||r)&&t.push(i);for(var a=e.first;a!==null;){var s=a.next,o=(a.f&vr)!==0||(a.f&Tt)!==0&&(e.f&mr)!==0;ni(a,t,o?r:!1),a=s}}}function ls(e){ai(e,!0)}function ai(e,t){if((e.f&Ye)!==0){e.f^=Ye;for(var r=e.first;r!==null;){var n=r.next,a=(r.f&vr)!==0||(r.f&Tt)!==0;ai(r,a?t:!1),r=n}var s=e.nodes&&e.nodes.t;if(s!==null)for(const o of s)(o.is_global||t)&&o.in()}}function ds(e,t){if(e.nodes)for(var r=e.nodes.start,n=e.nodes.end;r!==null;){var a=r===n?null:Cn(r);t.append(r),r=a}}let Un=!1,hr=!1;function qs(e){hr=e}let ee=null,Et=!1;function mt(e){ee=e}let te=null;function gt(e){te=e}let ht=null;function si(e){ee!==null&&(ht===null?ht=[e]:ht.push(e))}let Qe=null,st=0,ft=null;function ac(e){ft=e}let oi=1,Sr=0,Nr=Sr;function Us(e){Nr=e}function ii(){return++oi}function On(e){var t=e.f;if((t&Be)!==0)return!0;if(t&We&&(e.f&=~Cr),(t&$t)!==0){for(var r=e.deps,n=r.length,a=0;a<n;a++){var s=r[a];if(On(s)&&Go(s),s.wv>e.wv)return!0}(t&pt)!==0&&je===null&&Ae(e,Ve)}return!1}function li(e,t,r=!0){var n=e.reactions;if(n!==null&&!(ht!==null&&tn.call(ht,e)))for(var a=0;a<n.length;a++){var s=n[a];(s.f&We)!==0?li(s,t,!1):t===s&&(r?Ae(s,Be):(s.f&Ve)!==0&&Ae(s,$t),Rt(s))}}function di(e){var m;var t=Qe,r=st,n=ft,a=ee,s=ht,o=Le,i=Et,l=Nr,c=e.f;Qe=null,st=0,ft=null,ee=(c&(Tt|Lr))===0?e:null,ht=null,rn(e.ctx),Et=!1,Nr=++Sr,e.ac!==null&&(sa(()=>{e.ac.abort(wr)}),e.ac=null);try{e.f|=Na;var u=e.fn,g=u();e.f|=ln;var v=e.deps,_=Z==null?void 0:Z.is_fork;if(Qe!==null){var f;if(_||Mn(e,st),v!==null&&st>0)for(v.length=st+Qe.length,f=0;f<Qe.length;f++)v[st+f]=Qe[f];else e.deps=v=Qe;if(as()&&(e.f&pt)!==0)for(f=st;f<v.length;f++)((m=v[f]).reactions??(m.reactions=[])).push(e)}else!_&&v!==null&&st<v.length&&(Mn(e,st),v.length=st);if(Nn()&&ft!==null&&!Et&&v!==null&&(e.f&(We|$t|Be))===0)for(f=0;f<ft.length;f++)li(ft[f],e);if(a!==null&&a!==e){if(Sr++,a.deps!==null)for(let p=0;p<r;p+=1)a.deps[p].rv=Sr;if(t!==null)for(const p of t)p.rv=Sr;ft!==null&&(n===null?n=ft:n.push(...ft))}return(e.f&cr)!==0&&(e.f^=cr),g}catch(p){return Oo(p)}finally{e.f^=Na,Qe=t,st=r,ft=n,ee=a,ht=s,rn(o),Et=i,Nr=l}}function sc(e,t){let r=t.reactions;if(r!==null){var n=Hl.call(r,e);if(n!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[n]=r[a],r.pop())}}if(r===null&&(t.f&We)!==0&&(Qe===null||!tn.call(Qe,t))){var s=t;(s.f&pt)!==0&&(s.f^=pt,s.f&=~Cr),es(s),Wd(s),Mn(s,0)}}function Mn(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)sc(e,r[n])}function sn(e){var t=e.f;if((t&jt)===0){Ae(e,Ve);var r=te,n=Un;te=e,Un=!0;try{(t&(mr|na))!==0?nc(e):is(e),ei(e);var a=di(e);e.teardown=typeof a=="function"?a:null,e.wv=oi;var s;Ea&&Ad&&(e.f&Be)!==0&&e.deps}finally{Un=n,te=r}}}async function oc(){await Promise.resolve(),Td()}function d(e){var t=e.f,r=(t&We)!==0;if(ee!==null&&!Et){var n=te!==null&&(te.f&jt)!==0;if(!n&&(ht===null||!tn.call(ht,e))){var a=ee.deps;if((ee.f&Na)!==0)e.rv<Sr&&(e.rv=Sr,Qe===null&&a!==null&&a[st]===e?st++:Qe===null?Qe=[e]:Qe.push(e));else{(ee.deps??(ee.deps=[])).push(e);var s=e.reactions;s===null?e.reactions=[ee]:tn.call(s,ee)||s.push(ee)}}}if(hr&&fr.has(e))return fr.get(e);if(r){var o=e;if(hr){var i=o.v;return((o.f&Ve)===0&&o.reactions!==null||ui(o))&&(i=rs(o)),fr.set(o,i),i}var l=(o.f&pt)===0&&!Et&&ee!==null&&(Un||(ee.f&pt)!==0),c=(o.f&ln)===0;On(o)&&(l&&(o.f|=pt),Go(o)),l&&!c&&(Wo(o),ci(o))}if(je!=null&&je.has(e))return je.get(e);if((e.f&cr)!==0)throw e.v;return e.v}function ci(e){if(e.f|=pt,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&We)!==0&&(t.f&pt)===0&&(Wo(t),ci(t))}function ui(e){if(e.v===Ce)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(fr.has(t)||(t.f&We)!==0&&ui(t))return!0;return!1}function Ir(e){var t=Et;try{return Et=!0,e()}finally{Et=t}}function yr(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Dt in e)Ba(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&Dt in r&&Ba(r)}}}function Ba(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{Ba(e[n],t)}catch{}const r=Za(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=wo(r);for(let a in n){const s=n[a].get;if(s)try{s.call(e)}catch{}}}}}function ic(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const lc=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function dc(e){return lc.includes(e)}const cc={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function uc(e){return e=e.toLowerCase(),cc[e]??e}const fc=["touchstart","touchmove"];function vc(e){return fc.includes(e)}const Ar=Symbol("events"),fi=new Set,Ga=new Set;function vi(e,t,r,n={}){function a(s){if(n.capture||Wa.call(t,s),!s.cancelBubble)return sa(()=>r==null?void 0:r.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Ft(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function pc(e,t,r,n,a){var s={capture:n,passive:a},o=vi(e,t,r,s);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&oa(()=>{t.removeEventListener(e,o,s)})}function W(e,t,r){(t[Ar]??(t[Ar]={}))[e]=r}function cn(e){for(var t=0;t<e.length;t++)fi.add(e[t]);for(var r of Ga)r(e)}let Ys=null;function Wa(e){var p,y;var t=this,r=t.ownerDocument,n=e.type,a=((p=e.composedPath)==null?void 0:p.call(e))||[],s=a[0]||e.target;Ys=e;var o=0,i=Ys===e&&e[Ar];if(i){var l=a.indexOf(i);if(l!==-1&&(t===document||t===window)){e[Ar]=t;return}var c=a.indexOf(t);if(c===-1)return;l<=c&&(o=l)}if(s=a[o]||e.target,s!==t){Kl(e,"currentTarget",{configurable:!0,get(){return s||r}});var u=ee,g=te;mt(null),gt(null);try{for(var v,_=[];s!==null;){var f=s.assignedSlot||s.parentNode||s.host||null;try{var m=(y=s[Ar])==null?void 0:y[n];m!=null&&(!s.disabled||e.target===s)&&m.call(s,e)}catch(T){v?_.push(T):v=T}if(e.cancelBubble||f===t||f===null)break;s=f}if(v){for(let T of _)queueMicrotask(()=>{throw T});throw v}}finally{e[Ar]=t,delete e.currentTarget,mt(u),gt(g)}}}var _o;const _a=((_o=globalThis==null?void 0:globalThis.window)==null?void 0:_o.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function hc(e){return(_a==null?void 0:_a.createHTML(e))??e}function pi(e){var t=ns("template");return t.innerHTML=hc(e.replaceAll("<!>","<!---->")),t.content}function Or(e,t){var r=te;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function N(e,t){var r=(t&bd)!==0,n=(t&xd)!==0,a,s=!e.startsWith("<!>");return()=>{a===void 0&&(a=pi(s?e:"<!>"+e),r||(a=Yt(a)));var o=n||qo?document.importNode(a,!0):a.cloneNode(!0);if(r){var i=Yt(o),l=o.lastChild;Or(i,l)}else Or(o,o);return o}}function mc(e,t,r="svg"){var n=!e.startsWith("<!>"),a=`<${r}>${n?e:"<!>"+e}</${r}>`,s;return()=>{if(!s){var o=pi(a),i=Yt(o);s=Yt(i)}var l=s.cloneNode(!0);return Or(l,l),l}}function gc(e,t){return mc(e,t,"svg")}function Yn(e=""){{var t=Vt(e+"");return Or(t,t),t}}function oe(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Vt();return e.append(t,r),Or(t,r),e}function S(e,t){e!==null&&e.before(t)}function ae(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=`${r}`)}function bc(e,t){return xc(e,t)}const Vn=new Map;function xc(e,{target:t,anchor:r,props:n={},events:a,context:s,intro:o=!0,transformError:i}){Ud();var l=void 0,c=tc(()=>{var u=r??t.appendChild(Vt());Id(u,{pending:()=>{}},_=>{Jt({});var f=Le;s&&(f.c=s),a&&(n.$$events=a),l=e(_,n)||{},Xt()},i);var g=new Set,v=_=>{for(var f=0;f<_.length;f++){var m=_[f];if(!g.has(m)){g.add(m);var p=vc(m);for(const A of[t,document]){var y=Vn.get(A);y===void 0&&(y=new Map,Vn.set(A,y));var T=y.get(m);T===void 0?(A.addEventListener(m,Wa,{passive:p}),y.set(m,1)):y.set(m,T+1)}}}};return v(ra(fi)),Ga.add(v),()=>{var p;for(var _ of g)for(const y of[t,document]){var f=Vn.get(y),m=f.get(_);--m==0?(y.removeEventListener(_,Wa),f.delete(_),f.size===0&&Vn.delete(y)):f.set(_,m)}Ga.delete(v),u!==r&&((p=u.parentNode)==null||p.removeChild(u))}});return _c.set(l,c),l}let _c=new WeakMap;var Mt,Ot,it,$r,En,$n,ta;class cs{constructor(t,r=!0){St(this,"anchor");ne(this,Mt,new Map);ne(this,Ot,new Map);ne(this,it,new Map);ne(this,$r,new Set);ne(this,En,!0);ne(this,$n,t=>{if(x(this,Mt).has(t)){var r=x(this,Mt).get(t),n=x(this,Ot).get(r);if(n)ls(n),x(this,$r).delete(r);else{var a=x(this,it).get(r);a&&(a.effect.f&Ye)===0&&(x(this,Ot).set(r,a.effect),x(this,it).delete(r),a.fragment.lastChild.remove(),this.anchor.before(a.fragment),n=a.effect)}for(const[s,o]of x(this,Mt)){if(x(this,Mt).delete(s),s===t)break;const i=x(this,it).get(o);i&&(Ge(i.effect),x(this,it).delete(o))}for(const[s,o]of x(this,Ot)){if(s===r||x(this,$r).has(s)||(o.f&Ye)!==0)continue;const i=()=>{if(Array.from(x(this,Mt).values()).includes(s)){var c=document.createDocumentFragment();ds(o,c),c.append(Vt()),x(this,it).set(s,{effect:o,fragment:c})}else Ge(o);x(this,$r).delete(s),x(this,Ot).delete(s)};x(this,En)||!n?(x(this,$r).add(s),Tr(o,i,!1)):i()}}});ne(this,ta,t=>{x(this,Mt).delete(t);const r=Array.from(x(this,Mt).values());for(const[n,a]of x(this,it))r.includes(n)||(Ge(a.effect),x(this,it).delete(n))});this.anchor=t,X(this,En,r)}ensure(t,r){var n=Z,a=Jo();if(r&&!x(this,Ot).has(t)&&!x(this,it).has(t))if(a){var s=document.createDocumentFragment(),o=Vt();s.append(o),x(this,it).set(t,{effect:et(()=>r(o)),fragment:s})}else x(this,Ot).set(t,et(()=>r(this.anchor)));if(x(this,Mt).set(n,t),a){for(const[i,l]of x(this,Ot))i===t?n.unskip_effect(l):n.skip_effect(l);for(const[i,l]of x(this,it))i===t?n.unskip_effect(l.effect):n.skip_effect(l.effect);n.oncommit(x(this,$n)),n.ondiscard(x(this,ta))}else x(this,$n).call(this,n)}}Mt=new WeakMap,Ot=new WeakMap,it=new WeakMap,$r=new WeakMap,En=new WeakMap,$n=new WeakMap,ta=new WeakMap;function B(e,t,r=!1){var n=new cs(e),a=r?vr:0;function s(o,i){n.ensure(o,i)}In(()=>{var o=!1;t((i,l=0)=>{o=!0,s(l,i)}),o||s(-1,null)},a)}function tt(e,t){return t}function yc(e,t,r){for(var n=[],a=t.length,s,o=t.length,i=0;i<a;i++){let g=t[i];Tr(g,()=>{if(s){if(s.pending.delete(g),s.done.add(g),s.pending.size===0){var v=e.outrogroups;Ha(e,ra(s.done)),v.delete(s),v.size===0&&(e.outrogroups=null)}}else o-=1},!1)}if(o===0){var l=n.length===0&&r!==null;if(l){var c=r,u=c.parentNode;Yd(u),u.append(c),e.items.clear()}Ha(e,t,!l)}else s={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(s)}function Ha(e,t,r=!0){var n;if(e.pending.size>0){n=new Set;for(const o of e.pending.values())for(const i of o)n.add(e.items.get(i).e)}for(var a=0;a<t.length;a++){var s=t[a];if(n!=null&&n.has(s)){s.f|=Lt;const o=document.createDocumentFragment();ds(s,o)}else Ge(t[a],r)}}var Js;function rt(e,t,r,n,a,s=null){var o=e,i=new Map,l=(t&Eo)!==0;if(l){var c=e;o=c.appendChild(Vt())}var u=null,g=ts(()=>{var A=r();return Xa(A)?A:A==null?[]:ra(A)}),v,_=new Map,f=!0;function m(A){(T.effect.f&jt)===0&&(T.pending.delete(A),T.fallback=u,wc(T,v,o,t,n),u!==null&&(v.length===0?(u.f&Lt)===0?ls(u):(u.f^=Lt,kn(u,null,o)):Tr(u,()=>{u=null})))}function p(A){T.pending.delete(A)}var y=In(()=>{v=d(g);for(var A=v.length,w=new Set,$=Z,P=Jo(),L=0;L<A;L+=1){var M=v[L],D=n(M,L),ie=f?null:i.get(D);ie?(ie.v&&an(ie.v,M),ie.i&&an(ie.i,L),P&&$.unskip_effect(ie.e)):(ie=kc(i,f?o:Js??(Js=Vt()),M,D,L,a,t,r),f||(ie.e.f|=Lt),i.set(D,ie)),w.add(D)}if(A===0&&s&&!u&&(f?u=et(()=>s(o)):(u=et(()=>s(Js??(Js=Vt()))),u.f|=Lt)),A>w.size&&ed(),!f)if(_.set($,w),P){for(const[ke,F]of i)w.has(ke)||$.skip_effect(F.e);$.oncommit(m),$.ondiscard(p)}else m($);d(g)}),T={effect:y,items:i,pending:_,outrogroups:null,fallback:u};f=!1}function xn(e){for(;e!==null&&(e.f&Tt)===0;)e=e.next;return e}function wc(e,t,r,n,a){var ie,ke,F,G,O,le,J,se,V;var s=(n&fd)!==0,o=t.length,i=e.items,l=xn(e.effect.first),c,u=null,g,v=[],_=[],f,m,p,y;if(s)for(y=0;y<o;y+=1)f=t[y],m=a(f,y),p=i.get(m).e,(p.f&Lt)===0&&((ke=(ie=p.nodes)==null?void 0:ie.a)==null||ke.measure(),(g??(g=new Set)).add(p));for(y=0;y<o;y+=1){if(f=t[y],m=a(f,y),p=i.get(m).e,e.outrogroups!==null)for(const K of e.outrogroups)K.pending.delete(p),K.done.delete(p);if((p.f&Lt)!==0)if(p.f^=Lt,p===l)kn(p,null,r);else{var T=u?u.next:l;p===e.effect.last&&(e.effect.last=p.prev),p.prev&&(p.prev.next=p.next),p.next&&(p.next.prev=p.prev),rr(e,u,p),rr(e,p,T),kn(p,T,r),u=p,v=[],_=[],l=xn(u.next);continue}if((p.f&Ye)!==0&&(ls(p),s&&((G=(F=p.nodes)==null?void 0:F.a)==null||G.unfix(),(g??(g=new Set)).delete(p))),p!==l){if(c!==void 0&&c.has(p)){if(v.length<_.length){var A=_[0],w;u=A.prev;var $=v[0],P=v[v.length-1];for(w=0;w<v.length;w+=1)kn(v[w],A,r);for(w=0;w<_.length;w+=1)c.delete(_[w]);rr(e,$.prev,P.next),rr(e,u,$),rr(e,P,A),l=A,u=P,y-=1,v=[],_=[]}else c.delete(p),kn(p,l,r),rr(e,p.prev,p.next),rr(e,p,u===null?e.effect.first:u.next),rr(e,u,p),u=p;continue}for(v=[],_=[];l!==null&&l!==p;)(c??(c=new Set)).add(l),_.push(l),l=xn(l.next);if(l===null)continue}(p.f&Lt)===0&&v.push(p),u=p,l=xn(p.next)}if(e.outrogroups!==null){for(const K of e.outrogroups)K.pending.size===0&&(Ha(e,ra(K.done)),(O=e.outrogroups)==null||O.delete(K));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||c!==void 0){var L=[];if(c!==void 0)for(p of c)(p.f&Ye)===0&&L.push(p);for(;l!==null;)(l.f&Ye)===0&&l!==e.fallback&&L.push(l),l=xn(l.next);var M=L.length;if(M>0){var D=(n&Eo)!==0&&o===0?r:null;if(s){for(y=0;y<M;y+=1)(J=(le=L[y].nodes)==null?void 0:le.a)==null||J.measure();for(y=0;y<M;y+=1)(V=(se=L[y].nodes)==null?void 0:se.a)==null||V.fix()}yc(e,L,D)}}s&&Ft(()=>{var K,E;if(g!==void 0)for(p of g)(E=(K=p.nodes)==null?void 0:K.a)==null||E.apply()})}function kc(e,t,r,n,a,s,o,i){var l=(o&cd)!==0?(o&vd)===0?Hd(r,!1,!1):pr(r):null,c=(o&ud)!==0?pr(a):null;return{v:l,i:c,e:et(()=>(s(t,l??r,c??a,i),()=>{e.delete(n)}))}}function kn(e,t,r){if(e.nodes)for(var n=e.nodes.start,a=e.nodes.end,s=t&&(t.f&Lt)===0?t.nodes.start:r;n!==null;){var o=Cn(n);if(s.before(n),n===a)return;n=o}}function rr(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function Xs(e,t,r=!1,n=!1,a=!1){var s=e,o="";Q(()=>{var i=te;if(o!==(o=t()??"")&&(i.nodes!==null&&(ti(i.nodes.start,i.nodes.end),i.nodes=null),o!=="")){var l=r?No:n?_d:void 0,c=ns(r?"svg":n?"math":"template",l);c.innerHTML=o;var u=r||n?c:c.content;if(Or(Yt(u),u.lastChild),r||n)for(;Yt(u);)s.before(Yt(u));else s.before(u)}})}function ve(e,t,r,n,a){var i;var s=(i=t.$$slots)==null?void 0:i[r],o=!1;s===!0&&(s=t.children,o=!0),s===void 0||s(e,o?()=>n:n)}function Ka(e,t,...r){var n=new cs(e);In(()=>{const a=t()??null;n.ensure(a,a&&(s=>a(s,...r)))},vr)}function Sc(e,t,r,n,a,s){var o=null,i=e,l=new cs(i,!1);In(()=>{const c=t()||null;var u=No;if(c===null){l.ensure(null,null);return}return l.ensure(c,g=>{if(c){if(o=ns(c,u),Or(o,o),n){var v=o.appendChild(Vt());n(o,v)}te.nodes.end=o,g.before(o)}}),()=>{}},vr),oa(()=>{})}function Ac(e,t){var r=void 0,n;Qo(()=>{r!==(r=t())&&(n&&(Ge(n),n=null),r&&(n=et(()=>{ss(()=>r(e))})))})}function hi(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(r=hi(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function mi(){for(var e,t,r=0,n="",a=arguments.length;r<a;r++)(e=arguments[r])&&(t=hi(e))&&(n&&(n+=" "),n+=t);return n}function De(e){return typeof e=="object"?mi(e):e??""}const Zs=[...` 	
\r\f \v\uFEFF`];function zc(e,t,r){var n=e==null?"":""+e;if(r){for(var a of Object.keys(r))if(r[a])n=n?n+" "+a:a;else if(n.length)for(var s=a.length,o=0;(o=n.indexOf(a,o))>=0;){var i=o+s;(o===0||Zs.includes(n[o-1]))&&(i===n.length||Zs.includes(n[i]))?n=(o===0?"":n.substring(0,o))+n.substring(i+1):o=i}}return n===""?null:n}function Qs(e,t=!1){var r=t?" !important;":";",n="";for(var a of Object.keys(e)){var s=e[a];s!=null&&s!==""&&(n+=" "+a+": "+s+r)}return n}function ya(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Mc(e,t){if(t){var r="",n,a;if(Array.isArray(t)?(n=t[0],a=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,o=0,i=!1,l=[];n&&l.push(...Object.keys(n).map(ya)),a&&l.push(...Object.keys(a).map(ya));var c=0,u=-1;const m=e.length;for(var g=0;g<m;g++){var v=e[g];if(i?v==="/"&&e[g-1]==="*"&&(i=!1):s?s===v&&(s=!1):v==="/"&&e[g+1]==="*"?i=!0:v==='"'||v==="'"?s=v:v==="("?o++:v===")"&&o--,!i&&s===!1&&o===0){if(v===":"&&u===-1)u=g;else if(v===";"||g===m-1){if(u!==-1){var _=ya(e.substring(c,u).trim());if(!l.includes(_)){v!==";"&&g++;var f=e.substring(c,g).trim();r+=" "+f+";"}}c=g+1,u=-1}}}}return n&&(r+=Qs(n)),a&&(r+=Qs(a,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Fe(e,t,r,n,a,s){var o=e.__className;if(o!==r||o===void 0){var i=zc(r,n,s);i==null?e.removeAttribute("class"):t?e.className=i:e.setAttribute("class",i),e.__className=r}else if(s&&a!==s)for(var l in s){var c=!!s[l];(a==null||c!==!!a[l])&&e.classList.toggle(l,c)}return s}function wa(e,t={},r,n){for(var a in r){var s=r[a];t[a]!==s&&(r[a]==null?e.style.removeProperty(a):e.style.setProperty(a,s,n))}}function gi(e,t,r,n){var a=e.__style;if(a!==t){var s=Mc(t,n);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=t}else n&&(Array.isArray(n)?(wa(e,r==null?void 0:r[0],n[0]),wa(e,r==null?void 0:r[1],n[1],"important")):wa(e,r,n));return n}function qa(e,t,r=!1){if(e.multiple){if(t==null)return;if(!Xa(t))return wd();for(var n of e.options)n.selected=t.includes(eo(n));return}for(n of e.options){var a=eo(n);if(qd(a,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function Ec(e){var t=new MutationObserver(()=>{qa(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),oa(()=>{t.disconnect()})}function eo(e){return"__value"in e?e.__value:e.value}const _n=Symbol("class"),yn=Symbol("style"),bi=Symbol("is custom element"),xi=Symbol("is html"),$c=Mo?"option":"OPTION",Tc=Mo?"select":"SELECT";function Nc(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Xn(e,t,r,n){var a=_i(e);a[t]!==(a[t]=r)&&(t==="loading"&&(e[Zl]=r),r==null?e.removeAttribute(t):typeof r!="string"&&yi(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function Pc(e,t,r,n,a=!1,s=!1){var o=_i(e),i=o[bi],l=!o[xi],c=t||{},u=e.nodeName===$c;for(var g in t)g in r||(r[g]=null);r.class?r.class=De(r.class):r[_n]&&(r.class=null),r[yn]&&(r.style??(r.style=null));var v=yi(e);for(const w in r){let $=r[w];if(u&&w==="value"&&$==null){e.value=e.__value="",c[w]=$;continue}if(w==="class"){var _=e.namespaceURI==="http://www.w3.org/1999/xhtml";Fe(e,_,$,n,t==null?void 0:t[_n],r[_n]),c[w]=$,c[_n]=r[_n];continue}if(w==="style"){gi(e,$,t==null?void 0:t[yn],r[yn]),c[w]=$,c[yn]=r[yn];continue}var f=c[w];if(!($===f&&!($===void 0&&e.hasAttribute(w)))){c[w]=$;var m=w[0]+w[1];if(m!=="$$")if(m==="on"){const P={},L="$$"+w;let M=w.slice(2);var p=dc(M);if(ic(M)&&(M=M.slice(0,-7),P.capture=!0),!p&&f){if($!=null)continue;e.removeEventListener(M,c[L],P),c[L]=null}if(p)W(M,e,$),cn([M]);else if($!=null){let D=function(ie){c[w].call(this,ie)};var A=D;c[L]=vi(M,e,D,P)}}else if(w==="style")Xn(e,w,$);else if(w==="autofocus")Jd(e,!!$);else if(!i&&(w==="__value"||w==="value"&&$!=null))e.value=e.__value=$;else if(w==="selected"&&u)Nc(e,$);else{var y=w;l||(y=uc(y));var T=y==="defaultValue"||y==="defaultChecked";if($==null&&!i&&!T)if(o[w]=null,y==="value"||y==="checked"){let P=e;const L=t===void 0;if(y==="value"){let M=P.defaultValue;P.removeAttribute(y),P.defaultValue=M,P.value=P.__value=L?M:null}else{let M=P.defaultChecked;P.removeAttribute(y),P.defaultChecked=M,P.checked=L?M:!1}}else e.removeAttribute(w);else T||v.includes(y)&&(i||typeof $!="string")?(e[y]=$,y in o&&(o[y]=Ce)):typeof $!="function"&&Xn(e,y,$)}}}return c}function Zn(e,t,r=[],n=[],a=[],s,o=!1,i=!1){Bo(a,r,n,l=>{var c=void 0,u={},g=e.nodeName===Tc,v=!1;if(Qo(()=>{var f=t(...l.map(d)),m=Pc(e,c,f,s,o,i);v&&g&&"value"in f&&qa(e,f.value);for(let y of Object.getOwnPropertySymbols(u))f[y]||Ge(u[y]);for(let y of Object.getOwnPropertySymbols(f)){var p=f[y];y.description===yd&&(!c||p!==c[y])&&(u[y]&&Ge(u[y]),u[y]=et(()=>Ac(e,()=>p))),m[y]=p}c=m}),g){var _=e;ss(()=>{qa(_,c.value,!0),Ec(_)})}v=!0})}function _i(e){return e.__attributes??(e.__attributes={[bi]:e.nodeName.includes("-"),[xi]:e.namespaceURI===To})}var to=new Map;function yi(e){var t=e.getAttribute("is")||e.nodeName,r=to.get(t);if(r)return r;to.set(t,r=[]);for(var n,a=e,s=Element.prototype;s!==a;){n=wo(a);for(var o in n)n[o].set&&r.push(o);a=Za(a)}return r}function Kr(e,t,r=t){var n=new WeakSet;Zd(e,"input",async a=>{var s=a?e.defaultValue:e.value;if(s=ka(e)?Sa(s):s,r(s),Z!==null&&n.add(Z),await oc(),s!==(s=t())){var o=e.selectionStart,i=e.selectionEnd,l=e.value.length;if(e.value=s??"",i!==null){var c=e.value.length;o===i&&i===l&&c>l?(e.selectionStart=c,e.selectionEnd=c):(e.selectionStart=o,e.selectionEnd=Math.min(i,c))}}}),Ir(t)==null&&e.value&&(r(ka(e)?Sa(e.value):e.value),Z!==null&&n.add(Z)),os(()=>{var a=t();if(e===document.activeElement){var s=Pa??Z;if(n.has(s))return}ka(e)&&a===Sa(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function ka(e){var t=e.type;return t==="number"||t==="range"}function Sa(e){return e===""?null:+e}function ro(e,t){return e===t||(e==null?void 0:e[Dt])===t}function wi(e={},t,r,n){return ss(()=>{var a,s;return os(()=>{a=s,s=[],Ir(()=>{e!==r(...s)&&(t(e,...s),a&&ro(r(...a),e)&&t(null,...a))})}),()=>{Ft(()=>{s&&ro(r(...s),e)&&t(null,...s)})}}),e}function Cc(e=!1){const t=Le,r=t.l.u;if(!r)return;let n=()=>yr(t.s);if(e){let a=0,s={};const o=Pn(()=>{let i=!1;const l=t.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],i=!0);return i&&a++,a});n=()=>d(o)}r.b.length&&ec(()=>{no(t,n),$a(r.b)}),Jn(()=>{const a=Ir(()=>r.m.map(Jl));return()=>{for(const s of a)typeof s=="function"&&s()}}),r.a.length&&Jn(()=>{no(t,n),$a(r.a)})}function no(e,t){if(e.l.s)for(const r of e.l.s)d(r);t()}let Bn=!1;function Ic(e){var t=Bn;try{return Bn=!1,[e(),Bn]}finally{Bn=t}}const Oc={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function Lc(e,t,r){return new Proxy({props:e,exclude:t},Oc)}const Rc={get(e,t){if(!e.exclude.includes(t))return d(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var n=te;try{gt(e.parent_effect),e.special[t]=Ie({get[t](){return e.props[t]}},t,$o)}finally{gt(n)}}return e.special[t](r),An(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),An(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ue(e,t){return new Proxy({props:e,exclude:t,special:{},version:pr(0),parent_effect:te},Rc)}const jc={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(bn(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let a=e.props[n];bn(a)&&(a=a());const s=dr(a,t);if(s&&s.set)return s.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(bn(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const a=dr(n,t);return a&&!a.configurable&&(a.configurable=!0),a}}},has(e,t){if(t===Dt||t===zo)return!1;for(let r of e.props)if(bn(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(bn(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function he(...e){return new Proxy({props:e},jc)}function Ie(e,t,r,n){var A;var a=!Tn||(r&hd)!==0,s=(r&md)!==0,o=(r&gd)!==0,i=n,l=!0,c=()=>(l&&(l=!1,i=o?Ir(n):n),i),u;if(s){var g=Dt in e||zo in e;u=((A=dr(e,t))==null?void 0:A.set)??(g&&t in e?w=>e[t]=w:void 0)}var v,_=!1;s?[v,_]=Ic(()=>e[t]):v=e[t],v===void 0&&n!==void 0&&(v=c(),u&&(a&&sd(),u(v)));var f;if(a?f=()=>{var w=e[t];return w===void 0?c():(l=!0,w)}:f=()=>{var w=e[t];return w!==void 0&&(i=void 0),w===void 0?i:w},a&&(r&$o)===0)return f;if(u){var m=e.$$legacy;return(function(w,$){return arguments.length>0?((!a||!$||m||_)&&u($?f():w),w):f()})}var p=!1,y=((r&pd)!==0?Pn:ts)(()=>(p=!1,f()));s&&d(y);var T=te;return(function(w,$){if(arguments.length>0){const P=$?d(y):a&&s?lt(w):w;return b(y,P),p=!0,i!==void 0&&(i=P),w}return hr&&p||(T.f&jt)!==0?y.v:d(y)})}const Dc="5";var yo;typeof window<"u"&&((yo=window.__svelte??(window.__svelte={})).v??(yo.v=new Set)).add(Dc);const Ln="";async function Fc(){const e=await fetch(`${Ln}/api/status`);if(!e.ok)throw new Error("상태 확인 실패");return e.json()}async function Hr(e,t=null,r=null){const n={provider:e};t&&(n.model=t),r&&(n.api_key=r);const a=await fetch(`${Ln}/api/configure`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!a.ok)throw new Error("설정 실패");return a.json()}async function Vc(e){const t=await fetch(`${Ln}/api/models/${encodeURIComponent(e)}`);return t.ok?t.json():{models:[]}}function Bc(e,{onProgress:t,onDone:r,onError:n}){const a=new AbortController;return fetch(`${Ln}/api/ollama/pull`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:e}),signal:a.signal}).then(async s=>{if(!s.ok){n==null||n("다운로드 실패");return}const o=s.body.getReader(),i=new TextDecoder;let l="";for(;;){const{done:c,value:u}=await o.read();if(c)break;l+=i.decode(u,{stream:!0});const g=l.split(`
`);l=g.pop()||"";for(const v of g)if(v.startsWith("data:"))try{const _=JSON.parse(v.slice(5).trim());_.total&&_.completed!==void 0?t==null||t({total:_.total,completed:_.completed,status:_.status}):_.status&&(t==null||t({status:_.status}))}catch{}}r==null||r()}).catch(s=>{s.name!=="AbortError"&&(n==null||n(s.message))}),{abort:()=>a.abort()}}function Gc(e,t,r={},{onMeta:n,onSnapshot:a,onContext:s,onToolCall:o,onToolResult:i,onChunk:l,onDone:c,onError:u},g=null){const v={question:t,stream:!0,...r};g&&g.length>0&&(v.history=g);const _=new AbortController;return fetch(`${Ln}/api/ask`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(v),signal:_.signal}).then(async f=>{if(!f.ok){const w=await f.json().catch(()=>({}));u==null||u(w.detail||"스트리밍 실패");return}const m=f.body.getReader(),p=new TextDecoder;let y="",T=!1;for(;;){const{done:w,value:$}=await m.read();if(w)break;y+=p.decode($,{stream:!0});const P=y.split(`
`);y=P.pop()||"";for(const L of P)if(L.startsWith("event:"))var A=L.slice(6).trim();else if(L.startsWith("data:")&&A){const M=L.slice(5).trim();try{const D=JSON.parse(M);A==="meta"?n==null||n(D):A==="snapshot"?a==null||a(D):A==="context"?s==null||s(D):A==="tool_call"?o==null||o(D):A==="tool_result"?i==null||i(D):A==="chunk"?l==null||l(D.text):A==="error"?u==null||u(D.error):A==="done"&&(T||(T=!0,c==null||c()))}catch{}A=null}}T||(T=!0,c==null||c())}).catch(f=>{f.name!=="AbortError"&&(u==null||u(f.message))}),{abort:()=>_.abort()}}const Wc=(e,t)=>{const r=new Array(e.length+t.length);for(let n=0;n<e.length;n++)r[n]=e[n];for(let n=0;n<t.length;n++)r[e.length+n]=t[n];return r},Hc=(e,t)=>({classGroupId:e,validator:t}),ki=(e=new Map,t=null,r)=>({nextPart:e,validators:t,classGroupId:r}),Qn="-",ao=[],Kc="arbitrary..",qc=e=>{const t=Yc(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:n}=e;return{getClassGroupId:o=>{if(o.startsWith("[")&&o.endsWith("]"))return Uc(o);const i=o.split(Qn),l=i[0]===""&&i.length>1?1:0;return Si(i,l,t)},getConflictingClassGroupIds:(o,i)=>{if(i){const l=n[o],c=r[o];return l?c?Wc(c,l):l:c||ao}return r[o]||ao}}},Si=(e,t,r)=>{if(e.length-t===0)return r.classGroupId;const a=e[t],s=r.nextPart.get(a);if(s){const c=Si(e,t+1,s);if(c)return c}const o=r.validators;if(o===null)return;const i=t===0?e.join(Qn):e.slice(t).join(Qn),l=o.length;for(let c=0;c<l;c++){const u=o[c];if(u.validator(i))return u.classGroupId}},Uc=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const t=e.slice(1,-1),r=t.indexOf(":"),n=t.slice(0,r);return n?Kc+n:void 0})(),Yc=e=>{const{theme:t,classGroups:r}=e;return Jc(r,t)},Jc=(e,t)=>{const r=ki();for(const n in e){const a=e[n];us(a,r,n,t)}return r},us=(e,t,r,n)=>{const a=e.length;for(let s=0;s<a;s++){const o=e[s];Xc(o,t,r,n)}},Xc=(e,t,r,n)=>{if(typeof e=="string"){Zc(e,t,r);return}if(typeof e=="function"){Qc(e,t,r,n);return}eu(e,t,r,n)},Zc=(e,t,r)=>{const n=e===""?t:Ai(t,e);n.classGroupId=r},Qc=(e,t,r,n)=>{if(tu(e)){us(e(n),t,r,n);return}t.validators===null&&(t.validators=[]),t.validators.push(Hc(r,e))},eu=(e,t,r,n)=>{const a=Object.entries(e),s=a.length;for(let o=0;o<s;o++){const[i,l]=a[o];us(l,Ai(t,i),r,n)}},Ai=(e,t)=>{let r=e;const n=t.split(Qn),a=n.length;for(let s=0;s<a;s++){const o=n[s];let i=r.nextPart.get(o);i||(i=ki(),r.nextPart.set(o,i)),r=i}return r},tu=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,ru=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=Object.create(null),n=Object.create(null);const a=(s,o)=>{r[s]=o,t++,t>e&&(t=0,n=r,r=Object.create(null))};return{get(s){let o=r[s];if(o!==void 0)return o;if((o=n[s])!==void 0)return a(s,o),o},set(s,o){s in r?r[s]=o:a(s,o)}}},Ua="!",so=":",nu=[],oo=(e,t,r,n,a)=>({modifiers:e,hasImportantModifier:t,baseClassName:r,maybePostfixModifierPosition:n,isExternal:a}),au=e=>{const{prefix:t,experimentalParseClassName:r}=e;let n=a=>{const s=[];let o=0,i=0,l=0,c;const u=a.length;for(let m=0;m<u;m++){const p=a[m];if(o===0&&i===0){if(p===so){s.push(a.slice(l,m)),l=m+1;continue}if(p==="/"){c=m;continue}}p==="["?o++:p==="]"?o--:p==="("?i++:p===")"&&i--}const g=s.length===0?a:a.slice(l);let v=g,_=!1;g.endsWith(Ua)?(v=g.slice(0,-1),_=!0):g.startsWith(Ua)&&(v=g.slice(1),_=!0);const f=c&&c>l?c-l:void 0;return oo(s,_,v,f)};if(t){const a=t+so,s=n;n=o=>o.startsWith(a)?s(o.slice(a.length)):oo(nu,!1,o,void 0,!0)}if(r){const a=n;n=s=>r({className:s,parseClassName:a})}return n},su=e=>{const t=new Map;return e.orderSensitiveModifiers.forEach((r,n)=>{t.set(r,1e6+n)}),r=>{const n=[];let a=[];for(let s=0;s<r.length;s++){const o=r[s],i=o[0]==="[",l=t.has(o);i||l?(a.length>0&&(a.sort(),n.push(...a),a=[]),n.push(o)):a.push(o)}return a.length>0&&(a.sort(),n.push(...a)),n}},ou=e=>({cache:ru(e.cacheSize),parseClassName:au(e),sortModifiers:su(e),...qc(e)}),iu=/\s+/,lu=(e,t)=>{const{parseClassName:r,getClassGroupId:n,getConflictingClassGroupIds:a,sortModifiers:s}=t,o=[],i=e.trim().split(iu);let l="";for(let c=i.length-1;c>=0;c-=1){const u=i[c],{isExternal:g,modifiers:v,hasImportantModifier:_,baseClassName:f,maybePostfixModifierPosition:m}=r(u);if(g){l=u+(l.length>0?" "+l:l);continue}let p=!!m,y=n(p?f.substring(0,m):f);if(!y){if(!p){l=u+(l.length>0?" "+l:l);continue}if(y=n(f),!y){l=u+(l.length>0?" "+l:l);continue}p=!1}const T=v.length===0?"":v.length===1?v[0]:s(v).join(":"),A=_?T+Ua:T,w=A+y;if(o.indexOf(w)>-1)continue;o.push(w);const $=a(y,p);for(let P=0;P<$.length;++P){const L=$[P];o.push(A+L)}l=u+(l.length>0?" "+l:l)}return l},du=(...e)=>{let t=0,r,n,a="";for(;t<e.length;)(r=e[t++])&&(n=zi(r))&&(a&&(a+=" "),a+=n);return a},zi=e=>{if(typeof e=="string")return e;let t,r="";for(let n=0;n<e.length;n++)e[n]&&(t=zi(e[n]))&&(r&&(r+=" "),r+=t);return r},cu=(e,...t)=>{let r,n,a,s;const o=l=>{const c=t.reduce((u,g)=>g(u),e());return r=ou(c),n=r.cache.get,a=r.cache.set,s=i,i(l)},i=l=>{const c=n(l);if(c)return c;const u=lu(l,r);return a(l,u),u};return s=o,(...l)=>s(du(...l))},uu=[],Ee=e=>{const t=r=>r[e]||uu;return t.isThemeGetter=!0,t},Mi=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Ei=/^\((?:(\w[\w-]*):)?(.+)\)$/i,fu=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,vu=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,pu=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,hu=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,mu=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,gu=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,nr=e=>fu.test(e),Y=e=>!!e&&!Number.isNaN(Number(e)),ar=e=>!!e&&Number.isInteger(Number(e)),Aa=e=>e.endsWith("%")&&Y(e.slice(0,-1)),Ht=e=>vu.test(e),$i=()=>!0,bu=e=>pu.test(e)&&!hu.test(e),fs=()=>!1,xu=e=>mu.test(e),_u=e=>gu.test(e),yu=e=>!C(e)&&!I(e),wu=e=>gr(e,Pi,fs),C=e=>Mi.test(e),_r=e=>gr(e,Ci,bu),io=e=>gr(e,Tu,Y),ku=e=>gr(e,Oi,$i),Su=e=>gr(e,Ii,fs),lo=e=>gr(e,Ti,fs),Au=e=>gr(e,Ni,_u),Gn=e=>gr(e,Li,xu),I=e=>Ei.test(e),wn=e=>Rr(e,Ci),zu=e=>Rr(e,Ii),co=e=>Rr(e,Ti),Mu=e=>Rr(e,Pi),Eu=e=>Rr(e,Ni),Wn=e=>Rr(e,Li,!0),$u=e=>Rr(e,Oi,!0),gr=(e,t,r)=>{const n=Mi.exec(e);return n?n[1]?t(n[1]):r(n[2]):!1},Rr=(e,t,r=!1)=>{const n=Ei.exec(e);return n?n[1]?t(n[1]):r:!1},Ti=e=>e==="position"||e==="percentage",Ni=e=>e==="image"||e==="url",Pi=e=>e==="length"||e==="size"||e==="bg-size",Ci=e=>e==="length",Tu=e=>e==="number",Ii=e=>e==="family-name",Oi=e=>e==="number"||e==="weight",Li=e=>e==="shadow",Nu=()=>{const e=Ee("color"),t=Ee("font"),r=Ee("text"),n=Ee("font-weight"),a=Ee("tracking"),s=Ee("leading"),o=Ee("breakpoint"),i=Ee("container"),l=Ee("spacing"),c=Ee("radius"),u=Ee("shadow"),g=Ee("inset-shadow"),v=Ee("text-shadow"),_=Ee("drop-shadow"),f=Ee("blur"),m=Ee("perspective"),p=Ee("aspect"),y=Ee("ease"),T=Ee("animate"),A=()=>["auto","avoid","all","avoid-page","page","left","right","column"],w=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],$=()=>[...w(),I,C],P=()=>["auto","hidden","clip","visible","scroll"],L=()=>["auto","contain","none"],M=()=>[I,C,l],D=()=>[nr,"full","auto",...M()],ie=()=>[ar,"none","subgrid",I,C],ke=()=>["auto",{span:["full",ar,I,C]},ar,I,C],F=()=>[ar,"auto",I,C],G=()=>["auto","min","max","fr",I,C],O=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],le=()=>["start","end","center","stretch","center-safe","end-safe"],J=()=>["auto",...M()],se=()=>[nr,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...M()],V=()=>[nr,"screen","full","dvw","lvw","svw","min","max","fit",...M()],K=()=>[nr,"screen","full","lh","dvh","lvh","svh","min","max","fit",...M()],E=()=>[e,I,C],xe=()=>[...w(),co,lo,{position:[I,C]}],re=()=>["no-repeat",{repeat:["","x","y","space","round"]}],pe=()=>["auto","cover","contain",Mu,wu,{size:[I,C]}],Ne=()=>[Aa,wn,_r],be=()=>["","none","full",c,I,C],Pe=()=>["",Y,wn,_r],bt=()=>["solid","dashed","dotted","double"],Bt=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],_e=()=>[Y,Aa,co,lo],jr=()=>["","none",f,I,C],Dr=()=>["none",Y,I,C],Fr=()=>["none",Y,I,C],un=()=>[Y,I,C],Zt=()=>[nr,"full",...M()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Ht],breakpoint:[Ht],color:[$i],container:[Ht],"drop-shadow":[Ht],ease:["in","out","in-out"],font:[yu],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Ht],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Ht],shadow:[Ht],spacing:["px",Y],text:[Ht],"text-shadow":[Ht],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",nr,C,I,p]}],container:["container"],columns:[{columns:[Y,C,I,i]}],"break-after":[{"break-after":A()}],"break-before":[{"break-before":A()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:$()}],overflow:[{overflow:P()}],"overflow-x":[{"overflow-x":P()}],"overflow-y":[{"overflow-y":P()}],overscroll:[{overscroll:L()}],"overscroll-x":[{"overscroll-x":L()}],"overscroll-y":[{"overscroll-y":L()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:D()}],"inset-x":[{"inset-x":D()}],"inset-y":[{"inset-y":D()}],start:[{"inset-s":D(),start:D()}],end:[{"inset-e":D(),end:D()}],"inset-bs":[{"inset-bs":D()}],"inset-be":[{"inset-be":D()}],top:[{top:D()}],right:[{right:D()}],bottom:[{bottom:D()}],left:[{left:D()}],visibility:["visible","invisible","collapse"],z:[{z:[ar,"auto",I,C]}],basis:[{basis:[nr,"full","auto",i,...M()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Y,nr,"auto","initial","none",C]}],grow:[{grow:["",Y,I,C]}],shrink:[{shrink:["",Y,I,C]}],order:[{order:[ar,"first","last","none",I,C]}],"grid-cols":[{"grid-cols":ie()}],"col-start-end":[{col:ke()}],"col-start":[{"col-start":F()}],"col-end":[{"col-end":F()}],"grid-rows":[{"grid-rows":ie()}],"row-start-end":[{row:ke()}],"row-start":[{"row-start":F()}],"row-end":[{"row-end":F()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":G()}],"auto-rows":[{"auto-rows":G()}],gap:[{gap:M()}],"gap-x":[{"gap-x":M()}],"gap-y":[{"gap-y":M()}],"justify-content":[{justify:[...O(),"normal"]}],"justify-items":[{"justify-items":[...le(),"normal"]}],"justify-self":[{"justify-self":["auto",...le()]}],"align-content":[{content:["normal",...O()]}],"align-items":[{items:[...le(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...le(),{baseline:["","last"]}]}],"place-content":[{"place-content":O()}],"place-items":[{"place-items":[...le(),"baseline"]}],"place-self":[{"place-self":["auto",...le()]}],p:[{p:M()}],px:[{px:M()}],py:[{py:M()}],ps:[{ps:M()}],pe:[{pe:M()}],pbs:[{pbs:M()}],pbe:[{pbe:M()}],pt:[{pt:M()}],pr:[{pr:M()}],pb:[{pb:M()}],pl:[{pl:M()}],m:[{m:J()}],mx:[{mx:J()}],my:[{my:J()}],ms:[{ms:J()}],me:[{me:J()}],mbs:[{mbs:J()}],mbe:[{mbe:J()}],mt:[{mt:J()}],mr:[{mr:J()}],mb:[{mb:J()}],ml:[{ml:J()}],"space-x":[{"space-x":M()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":M()}],"space-y-reverse":["space-y-reverse"],size:[{size:se()}],"inline-size":[{inline:["auto",...V()]}],"min-inline-size":[{"min-inline":["auto",...V()]}],"max-inline-size":[{"max-inline":["none",...V()]}],"block-size":[{block:["auto",...K()]}],"min-block-size":[{"min-block":["auto",...K()]}],"max-block-size":[{"max-block":["none",...K()]}],w:[{w:[i,"screen",...se()]}],"min-w":[{"min-w":[i,"screen","none",...se()]}],"max-w":[{"max-w":[i,"screen","none","prose",{screen:[o]},...se()]}],h:[{h:["screen","lh",...se()]}],"min-h":[{"min-h":["screen","lh","none",...se()]}],"max-h":[{"max-h":["screen","lh",...se()]}],"font-size":[{text:["base",r,wn,_r]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[n,$u,ku]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Aa,C]}],"font-family":[{font:[zu,Su,t]}],"font-features":[{"font-features":[C]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[a,I,C]}],"line-clamp":[{"line-clamp":[Y,"none",I,io]}],leading:[{leading:[s,...M()]}],"list-image":[{"list-image":["none",I,C]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",I,C]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:E()}],"text-color":[{text:E()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...bt(),"wavy"]}],"text-decoration-thickness":[{decoration:[Y,"from-font","auto",I,_r]}],"text-decoration-color":[{decoration:E()}],"underline-offset":[{"underline-offset":[Y,"auto",I,C]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:M()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",I,C]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",I,C]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:xe()}],"bg-repeat":[{bg:re()}],"bg-size":[{bg:pe()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},ar,I,C],radial:["",I,C],conic:[ar,I,C]},Eu,Au]}],"bg-color":[{bg:E()}],"gradient-from-pos":[{from:Ne()}],"gradient-via-pos":[{via:Ne()}],"gradient-to-pos":[{to:Ne()}],"gradient-from":[{from:E()}],"gradient-via":[{via:E()}],"gradient-to":[{to:E()}],rounded:[{rounded:be()}],"rounded-s":[{"rounded-s":be()}],"rounded-e":[{"rounded-e":be()}],"rounded-t":[{"rounded-t":be()}],"rounded-r":[{"rounded-r":be()}],"rounded-b":[{"rounded-b":be()}],"rounded-l":[{"rounded-l":be()}],"rounded-ss":[{"rounded-ss":be()}],"rounded-se":[{"rounded-se":be()}],"rounded-ee":[{"rounded-ee":be()}],"rounded-es":[{"rounded-es":be()}],"rounded-tl":[{"rounded-tl":be()}],"rounded-tr":[{"rounded-tr":be()}],"rounded-br":[{"rounded-br":be()}],"rounded-bl":[{"rounded-bl":be()}],"border-w":[{border:Pe()}],"border-w-x":[{"border-x":Pe()}],"border-w-y":[{"border-y":Pe()}],"border-w-s":[{"border-s":Pe()}],"border-w-e":[{"border-e":Pe()}],"border-w-bs":[{"border-bs":Pe()}],"border-w-be":[{"border-be":Pe()}],"border-w-t":[{"border-t":Pe()}],"border-w-r":[{"border-r":Pe()}],"border-w-b":[{"border-b":Pe()}],"border-w-l":[{"border-l":Pe()}],"divide-x":[{"divide-x":Pe()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Pe()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...bt(),"hidden","none"]}],"divide-style":[{divide:[...bt(),"hidden","none"]}],"border-color":[{border:E()}],"border-color-x":[{"border-x":E()}],"border-color-y":[{"border-y":E()}],"border-color-s":[{"border-s":E()}],"border-color-e":[{"border-e":E()}],"border-color-bs":[{"border-bs":E()}],"border-color-be":[{"border-be":E()}],"border-color-t":[{"border-t":E()}],"border-color-r":[{"border-r":E()}],"border-color-b":[{"border-b":E()}],"border-color-l":[{"border-l":E()}],"divide-color":[{divide:E()}],"outline-style":[{outline:[...bt(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Y,I,C]}],"outline-w":[{outline:["",Y,wn,_r]}],"outline-color":[{outline:E()}],shadow:[{shadow:["","none",u,Wn,Gn]}],"shadow-color":[{shadow:E()}],"inset-shadow":[{"inset-shadow":["none",g,Wn,Gn]}],"inset-shadow-color":[{"inset-shadow":E()}],"ring-w":[{ring:Pe()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:E()}],"ring-offset-w":[{"ring-offset":[Y,_r]}],"ring-offset-color":[{"ring-offset":E()}],"inset-ring-w":[{"inset-ring":Pe()}],"inset-ring-color":[{"inset-ring":E()}],"text-shadow":[{"text-shadow":["none",v,Wn,Gn]}],"text-shadow-color":[{"text-shadow":E()}],opacity:[{opacity:[Y,I,C]}],"mix-blend":[{"mix-blend":[...Bt(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Bt()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Y]}],"mask-image-linear-from-pos":[{"mask-linear-from":_e()}],"mask-image-linear-to-pos":[{"mask-linear-to":_e()}],"mask-image-linear-from-color":[{"mask-linear-from":E()}],"mask-image-linear-to-color":[{"mask-linear-to":E()}],"mask-image-t-from-pos":[{"mask-t-from":_e()}],"mask-image-t-to-pos":[{"mask-t-to":_e()}],"mask-image-t-from-color":[{"mask-t-from":E()}],"mask-image-t-to-color":[{"mask-t-to":E()}],"mask-image-r-from-pos":[{"mask-r-from":_e()}],"mask-image-r-to-pos":[{"mask-r-to":_e()}],"mask-image-r-from-color":[{"mask-r-from":E()}],"mask-image-r-to-color":[{"mask-r-to":E()}],"mask-image-b-from-pos":[{"mask-b-from":_e()}],"mask-image-b-to-pos":[{"mask-b-to":_e()}],"mask-image-b-from-color":[{"mask-b-from":E()}],"mask-image-b-to-color":[{"mask-b-to":E()}],"mask-image-l-from-pos":[{"mask-l-from":_e()}],"mask-image-l-to-pos":[{"mask-l-to":_e()}],"mask-image-l-from-color":[{"mask-l-from":E()}],"mask-image-l-to-color":[{"mask-l-to":E()}],"mask-image-x-from-pos":[{"mask-x-from":_e()}],"mask-image-x-to-pos":[{"mask-x-to":_e()}],"mask-image-x-from-color":[{"mask-x-from":E()}],"mask-image-x-to-color":[{"mask-x-to":E()}],"mask-image-y-from-pos":[{"mask-y-from":_e()}],"mask-image-y-to-pos":[{"mask-y-to":_e()}],"mask-image-y-from-color":[{"mask-y-from":E()}],"mask-image-y-to-color":[{"mask-y-to":E()}],"mask-image-radial":[{"mask-radial":[I,C]}],"mask-image-radial-from-pos":[{"mask-radial-from":_e()}],"mask-image-radial-to-pos":[{"mask-radial-to":_e()}],"mask-image-radial-from-color":[{"mask-radial-from":E()}],"mask-image-radial-to-color":[{"mask-radial-to":E()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":w()}],"mask-image-conic-pos":[{"mask-conic":[Y]}],"mask-image-conic-from-pos":[{"mask-conic-from":_e()}],"mask-image-conic-to-pos":[{"mask-conic-to":_e()}],"mask-image-conic-from-color":[{"mask-conic-from":E()}],"mask-image-conic-to-color":[{"mask-conic-to":E()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:xe()}],"mask-repeat":[{mask:re()}],"mask-size":[{mask:pe()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",I,C]}],filter:[{filter:["","none",I,C]}],blur:[{blur:jr()}],brightness:[{brightness:[Y,I,C]}],contrast:[{contrast:[Y,I,C]}],"drop-shadow":[{"drop-shadow":["","none",_,Wn,Gn]}],"drop-shadow-color":[{"drop-shadow":E()}],grayscale:[{grayscale:["",Y,I,C]}],"hue-rotate":[{"hue-rotate":[Y,I,C]}],invert:[{invert:["",Y,I,C]}],saturate:[{saturate:[Y,I,C]}],sepia:[{sepia:["",Y,I,C]}],"backdrop-filter":[{"backdrop-filter":["","none",I,C]}],"backdrop-blur":[{"backdrop-blur":jr()}],"backdrop-brightness":[{"backdrop-brightness":[Y,I,C]}],"backdrop-contrast":[{"backdrop-contrast":[Y,I,C]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Y,I,C]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Y,I,C]}],"backdrop-invert":[{"backdrop-invert":["",Y,I,C]}],"backdrop-opacity":[{"backdrop-opacity":[Y,I,C]}],"backdrop-saturate":[{"backdrop-saturate":[Y,I,C]}],"backdrop-sepia":[{"backdrop-sepia":["",Y,I,C]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":M()}],"border-spacing-x":[{"border-spacing-x":M()}],"border-spacing-y":[{"border-spacing-y":M()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",I,C]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Y,"initial",I,C]}],ease:[{ease:["linear","initial",y,I,C]}],delay:[{delay:[Y,I,C]}],animate:[{animate:["none",T,I,C]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[m,I,C]}],"perspective-origin":[{"perspective-origin":$()}],rotate:[{rotate:Dr()}],"rotate-x":[{"rotate-x":Dr()}],"rotate-y":[{"rotate-y":Dr()}],"rotate-z":[{"rotate-z":Dr()}],scale:[{scale:Fr()}],"scale-x":[{"scale-x":Fr()}],"scale-y":[{"scale-y":Fr()}],"scale-z":[{"scale-z":Fr()}],"scale-3d":["scale-3d"],skew:[{skew:un()}],"skew-x":[{"skew-x":un()}],"skew-y":[{"skew-y":un()}],transform:[{transform:[I,C,"","none","gpu","cpu"]}],"transform-origin":[{origin:$()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Zt()}],"translate-x":[{"translate-x":Zt()}],"translate-y":[{"translate-y":Zt()}],"translate-z":[{"translate-z":Zt()}],"translate-none":["translate-none"],accent:[{accent:E()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:E()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",I,C]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":M()}],"scroll-mx":[{"scroll-mx":M()}],"scroll-my":[{"scroll-my":M()}],"scroll-ms":[{"scroll-ms":M()}],"scroll-me":[{"scroll-me":M()}],"scroll-mbs":[{"scroll-mbs":M()}],"scroll-mbe":[{"scroll-mbe":M()}],"scroll-mt":[{"scroll-mt":M()}],"scroll-mr":[{"scroll-mr":M()}],"scroll-mb":[{"scroll-mb":M()}],"scroll-ml":[{"scroll-ml":M()}],"scroll-p":[{"scroll-p":M()}],"scroll-px":[{"scroll-px":M()}],"scroll-py":[{"scroll-py":M()}],"scroll-ps":[{"scroll-ps":M()}],"scroll-pe":[{"scroll-pe":M()}],"scroll-pbs":[{"scroll-pbs":M()}],"scroll-pbe":[{"scroll-pbe":M()}],"scroll-pt":[{"scroll-pt":M()}],"scroll-pr":[{"scroll-pr":M()}],"scroll-pb":[{"scroll-pb":M()}],"scroll-pl":[{"scroll-pl":M()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",I,C]}],fill:[{fill:["none",...E()]}],"stroke-w":[{stroke:[Y,wn,_r,io]}],stroke:[{stroke:["none",...E()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},Pu=cu(Nu);function Oe(...e){return Pu(mi(e))}const Ya="dartlab-conversations",uo=50;function Cu(){return Date.now().toString(36)+Math.random().toString(36).slice(2,8)}function Iu(){try{const e=localStorage.getItem(Ya);return e?JSON.parse(e):{conversations:[],activeId:null}}catch{return{conversations:[],activeId:null}}}function Ou(e){try{localStorage.setItem(Ya,JSON.stringify(e))}catch{if(e.conversations.length>5){e.conversations=e.conversations.slice(0,e.conversations.length-5);try{localStorage.setItem(Ya,JSON.stringify(e))}catch{}}}}function Lu(){const e=Iu();let t=U(lt(e.conversations)),r=U(lt(e.activeId));d(r)&&!d(t).find(v=>v.id===d(r))&&b(r,null);function n(){Ou({conversations:d(t),activeId:d(r)})}function a(){return d(t).find(v=>v.id===d(r))||null}function s(){const v={id:Cu(),title:"새 대화",messages:[],createdAt:Date.now(),updatedAt:Date.now()};return b(t,[v,...d(t)],!0),d(t).length>uo&&b(t,d(t).slice(0,uo),!0),b(r,v.id,!0),n(),v.id}function o(v){d(t).find(_=>_.id===v)&&(b(r,v,!0),n())}function i(v,_,f=null){const m=a();if(!m)return;const p={role:v,text:_};f&&(p.meta=f),m.messages=[...m.messages,p],m.updatedAt=Date.now(),m.title==="새 대화"&&v==="user"&&(m.title=_.length>30?_.slice(0,30)+"...":_),b(t,[...d(t)],!0),n()}function l(v){const _=a();if(!_||_.messages.length===0)return;const f=_.messages[_.messages.length-1];Object.assign(f,v),_.updatedAt=Date.now(),b(t,[...d(t)],!0),n()}function c(v){b(t,d(t).filter(_=>_.id!==v),!0),d(r)===v&&b(r,d(t).length>0?d(t)[0].id:null,!0),n()}function u(v,_){const f=d(t).find(m=>m.id===v);f&&(f.title=_,b(t,[...d(t)],!0),n())}function g(){b(t,[],!0),b(r,null),n()}return{get conversations(){return d(t)},get activeId(){return d(r)},get active(){return a()},createConversation:s,setActive:o,addMessage:i,updateLastMessage:l,deleteConversation:c,updateTitle:u,clearAll:g}}var Ru=N("<a><!></a>"),ju=N("<button><!></button>");function Du(e,t){Jt(t,!0);let r=Ie(t,"variant",3,"default"),n=Ie(t,"size",3,"default"),a=Lc(t,["$$slots","$$events","$$legacy","variant","size","class","children"]);const s={default:"bg-gradient-to-r from-dl-primary to-dl-primary-dark text-white shadow-lg shadow-dl-primary/25 hover:shadow-dl-primary/40 hover:-translate-y-0.5",secondary:"bg-dl-bg-card border border-dl-border text-dl-text-muted hover:text-dl-text hover:bg-dl-bg-card-hover",ghost:"text-dl-text-muted hover:text-dl-text hover:bg-white/5",outline:"border border-dl-border text-dl-text-muted hover:text-dl-text hover:border-dl-primary/50"},o={default:"px-5 py-2 text-sm",sm:"px-3 py-1.5 text-xs",lg:"px-7 py-3 text-base",icon:"w-9 h-9"};var i=oe(),l=H(i);{var c=g=>{var v=Ru();Zn(v,f=>({class:f,...a}),[()=>Oe("inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer no-underline",s[r()],o[n()],t.class)]);var _=h(v);Ka(_,()=>t.children),S(g,v)},u=g=>{var v=ju();Zn(v,f=>({class:f,...a}),[()=>Oe("inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer",s[r()],o[n()],t.class)]);var _=h(v);Ka(_,()=>t.children),S(g,v)};B(l,g=>{t.href?g(c):g(u,-1)})}S(e,i),Xt()}zd();/**
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
 */const Fu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
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
 */const Vu=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
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
 */const fo=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();var Bu=gc("<svg><!><!></svg>");function me(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]),n=ue(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Jt(t,!1);let a=Ie(t,"name",8,void 0),s=Ie(t,"color",8,"currentColor"),o=Ie(t,"size",8,24),i=Ie(t,"strokeWidth",8,2),l=Ie(t,"absoluteStrokeWidth",8,!1),c=Ie(t,"iconNode",24,()=>[]);Cc();var u=Bu();Zn(u,(_,f,m)=>({...Fu,..._,...n,width:o(),height:o(),stroke:s(),"stroke-width":f,class:m}),[()=>Vu(n)?void 0:{"aria-hidden":"true"},()=>(yr(l()),yr(i()),yr(o()),Ir(()=>l()?Number(i())*24/Number(o()):i())),()=>(yr(fo),yr(a()),yr(r),Ir(()=>fo("lucide-icon","lucide",a()?`lucide-${a()}`:"",r.class)))]);var g=h(u);rt(g,1,c,tt,(_,f)=>{var m=$e(()=>So(d(f),2));let p=()=>d(m)[0],y=()=>d(m)[1];var T=oe(),A=H(T);Sc(A,p,!0,(w,$)=>{Zn(w,()=>({...y()}))}),S(_,T)});var v=z(g);ve(v,t,"default",{}),S(e,u),Xt()}function Ri(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];me(e,he({name:"arrow-up"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=oe(),i=H(o);ve(i,t,"default",{}),S(a,o)},$$slots:{default:!0}}))}function Gu(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M20 6 9 17l-5-5"}]];me(e,he({name:"check"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=oe(),i=H(o);ve(i,t,"default",{}),S(a,o)},$$slots:{default:!0}}))}function Hn(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];me(e,he({name:"circle-alert"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=oe(),i=H(o);ve(i,t,"default",{}),S(a,o)},$$slots:{default:!0}}))}function vo(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];me(e,he({name:"circle-check"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=oe(),i=H(o);ve(i,t,"default",{}),S(a,o)},$$slots:{default:!0}}))}function Wu(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 6v6l4 2"}]];me(e,he({name:"clock"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=oe(),i=H(o);ve(i,t,"default",{}),S(a,o)},$$slots:{default:!0}}))}function Hu(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m16 18 6-6-6-6"}],["path",{d:"m8 6-6 6 6 6"}]];me(e,he({name:"code"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=oe(),i=H(o);ve(i,t,"default",{}),S(a,o)},$$slots:{default:!0}}))}function Ku(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 2v2"}],["path",{d:"M14 2v2"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"}],["path",{d:"M6 2v2"}]];me(e,he({name:"coffee"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=oe(),i=H(o);ve(i,t,"default",{}),S(a,o)},$$slots:{default:!0}}))}function za(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]];me(e,he({name:"database"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=oe(),i=H(o);ve(i,t,"default",{}),S(a,o)},$$slots:{default:!0}}))}function Ma(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];me(e,he({name:"download"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=oe(),i=H(o);ve(i,t,"default",{}),S(a,o)},$$slots:{default:!0}}))}function po(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];me(e,he({name:"external-link"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=oe(),i=H(o);ve(i,t,"default",{}),S(a,o)},$$slots:{default:!0}}))}function ji(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];me(e,he({name:"file-text"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=oe(),i=H(o);ve(i,t,"default",{}),S(a,o)},$$slots:{default:!0}}))}function qu(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];me(e,he({name:"github"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=oe(),i=H(o);ve(i,t,"default",{}),S(a,o)},$$slots:{default:!0}}))}function ho(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"}],["path",{d:"m21 2-9.6 9.6"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5"}]];me(e,he({name:"key"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=oe(),i=H(o);ve(i,t,"default",{}),S(a,o)},$$slots:{default:!0}}))}function Kt(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];me(e,he({name:"loader-circle"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=oe(),i=H(o);ve(i,t,"default",{}),S(a,o)},$$slots:{default:!0}}))}function Uu(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];me(e,he({name:"menu"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=oe(),i=H(o);ve(i,t,"default",{}),S(a,o)},$$slots:{default:!0}}))}function mo(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}]];me(e,he({name:"message-square"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=oe(),i=H(o);ve(i,t,"default",{}),S(a,o)},$$slots:{default:!0}}))}function Yu(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"m16 15-3-3 3-3"}]];me(e,he({name:"panel-left-close"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=oe(),i=H(o);ve(i,t,"default",{}),S(a,o)},$$slots:{default:!0}}))}function go(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];me(e,he({name:"plus"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=oe(),i=H(o);ve(i,t,"default",{}),S(a,o)},$$slots:{default:!0}}))}function Ju(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];me(e,he({name:"search"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=oe(),i=H(o);ve(i,t,"default",{}),S(a,o)},$$slots:{default:!0}}))}function Xu(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];me(e,he({name:"settings"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=oe(),i=H(o);ve(i,t,"default",{}),S(a,o)},$$slots:{default:!0}}))}function Zu(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];me(e,he({name:"square"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=oe(),i=H(o);ve(i,t,"default",{}),S(a,o)},$$slots:{default:!0}}))}function Qu(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 19h8"}],["path",{d:"m4 17 6-6-6-6"}]];me(e,he({name:"terminal"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=oe(),i=H(o);ve(i,t,"default",{}),S(a,o)},$$slots:{default:!0}}))}function ef(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];me(e,he({name:"trash-2"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=oe(),i=H(o);ve(i,t,"default",{}),S(a,o)},$$slots:{default:!0}}))}function tf(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];me(e,he({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=oe(),i=H(o);ve(i,t,"default",{}),S(a,o)},$$slots:{default:!0}}))}function bo(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"}]];me(e,he({name:"wrench"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=oe(),i=H(o);ve(i,t,"default",{}),S(a,o)},$$slots:{default:!0}}))}function Di(e,t){const r=ue(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];me(e,he({name:"x"},()=>r,{get iconNode(){return n},children:(a,s)=>{var o=oe(),i=H(o);ve(i,t,"default",{}),S(a,o)},$$slots:{default:!0}}))}var rf=N("<!> 새 대화",1),nf=N('<div class="px-3 pb-2"><div class="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-dl-bg-card border border-dl-border"><!> <input type="text" placeholder="대화 검색..." class="flex-1 bg-transparent border-none outline-none text-[12px] text-dl-text placeholder:text-dl-text-dim"/></div></div>'),af=N('<div role="button" tabindex="0"><!> <span class="flex-1 truncate"> </span> <button class="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-dl-bg-card-hover text-dl-text-dim hover:text-dl-primary transition-all"><!></button></div>'),sf=N('<div><div class="px-2 py-1.5 text-[11px] font-medium text-dl-text-dim uppercase tracking-wider"> </div> <!></div>'),of=N('<div class="flex flex-col h-full min-w-[260px]"><div class="flex items-center gap-2.5 px-4 pt-4 pb-2"><img src="/avatar.png" alt="DartLab" class="w-8 h-8 rounded-full shadow-sm"/> <span class="text-[15px] font-bold text-dl-text tracking-tight">DartLab</span></div> <div class="p-3 pb-2"><!></div> <!> <div class="flex-1 overflow-y-auto px-2 space-y-4"></div></div>'),lf=N("<button><!></button>"),df=N('<div class="flex flex-col items-center h-full min-w-[52px] py-3 gap-2"><img src="/avatar.png" alt="DartLab" class="w-7 h-7 rounded-full shadow-sm mb-1"/> <button class="p-2.5 rounded-lg text-dl-text-muted hover:text-dl-text hover:bg-dl-bg-card/50 transition-colors" title="새 대화"><!></button> <div class="flex-1 overflow-y-auto flex flex-col items-center gap-1 w-full px-1"></div></div>'),cf=N("<aside><!></aside>");function uf(e,t){Jt(t,!0);let r=Ie(t,"conversations",19,()=>[]),n=Ie(t,"activeId",3,null),a=Ie(t,"open",3,!0),s=U("");function o(_){const f=new Date().setHours(0,0,0,0),m=f-864e5,p=f-7*864e5,y={오늘:[],어제:[],"이번 주":[],이전:[]};for(const A of _)A.updatedAt>=f?y.오늘.push(A):A.updatedAt>=m?y.어제.push(A):A.updatedAt>=p?y["이번 주"].push(A):y.이전.push(A);const T=[];for(const[A,w]of Object.entries(y))w.length>0&&T.push({label:A,items:w});return T}let i=$e(()=>d(s).trim()?r().filter(_=>_.title.toLowerCase().includes(d(s).toLowerCase())):r()),l=$e(()=>o(d(i)));var c=cf(),u=h(c);{var g=_=>{var f=of(),m=z(h(f),2),p=h(m);Du(p,{variant:"secondary",class:"w-full justify-start gap-2",get onclick(){return t.onNewChat},children:(w,$)=>{var P=rf(),L=H(P);go(L,{size:16}),S(w,P)},$$slots:{default:!0}});var y=z(m,2);{var T=w=>{var $=nf(),P=h($),L=h(P);Ju(L,{size:12,class:"text-dl-text-dim flex-shrink-0"});var M=z(L,2);Kr(M,()=>d(s),D=>b(s,D)),S(w,$)};B(y,w=>{r().length>3&&w(T)})}var A=z(y,2);rt(A,21,()=>d(l),tt,(w,$)=>{var P=sf(),L=h(P),M=h(L),D=z(L,2);rt(D,17,()=>d($).items,tt,(ie,ke)=>{var F=af(),G=h(F);mo(G,{size:14,class:"flex-shrink-0 opacity-50"});var O=z(G,2),le=h(O),J=z(O,2),se=h(J);ef(se,{size:12}),Q(V=>{Fe(F,1,V),ae(le,d(ke).title)},[()=>De(Oe("w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left text-[13px] transition-colors group cursor-pointer",d(ke).id===n()?"bg-dl-bg-card text-dl-text border-l-2 border-dl-primary":"text-dl-text-muted hover:bg-dl-bg-card/50 hover:text-dl-text border-l-2 border-transparent"))]),W("click",F,()=>{var V;return(V=t.onSelect)==null?void 0:V.call(t,d(ke).id)}),W("keydown",F,V=>{var K;V.key==="Enter"&&((K=t.onSelect)==null||K.call(t,d(ke).id))}),W("click",J,V=>{var K;V.stopPropagation(),(K=t.onDelete)==null||K.call(t,d(ke).id)}),S(ie,F)}),Q(()=>ae(M,d($).label)),S(w,P)}),S(_,f)},v=_=>{var f=df(),m=z(h(f),2),p=h(m);go(p,{size:18});var y=z(m,2);rt(y,21,()=>r().slice(0,10),tt,(T,A)=>{var w=lf(),$=h(w);mo($,{size:16}),Q(P=>{Fe(w,1,P),Xn(w,"title",d(A).title)},[()=>De(Oe("p-2 rounded-lg transition-colors w-full flex justify-center",d(A).id===n()?"bg-dl-bg-card text-dl-text":"text-dl-text-dim hover:text-dl-text-muted hover:bg-dl-bg-card/50"))]),W("click",w,()=>{var P;return(P=t.onSelect)==null?void 0:P.call(t,d(A).id)}),S(T,w)}),W("click",m,function(...T){var A;(A=t.onNewChat)==null||A.apply(this,T)}),S(_,f)};B(u,_=>{a()?_(g):_(v,-1)})}Q(_=>Fe(c,1,_),[()=>De(Oe("flex flex-col h-full bg-dl-bg-darker border-r border-dl-border transition-all duration-300 flex-shrink-0 overflow-hidden",a()?"w-[260px]":"w-[52px]"))]),S(e,c),Xt()}cn(["click","keydown"]);var ff=N('<button class="text-left px-4 py-3 rounded-xl border border-dl-border bg-dl-bg-card/50 text-[13px] text-dl-text-muted hover:text-dl-text hover:border-dl-primary/30 hover:bg-dl-bg-card transition-all duration-200 cursor-pointer"> </button>'),vf=N('<div class="flex-1 flex flex-col items-center justify-center px-5"><div class="w-full max-w-[620px] flex flex-col items-center"><img src="/avatar.png" alt="DartLab" class="w-16 h-16 rounded-full mb-5 shadow-lg shadow-dl-primary/10"/> <h1 class="text-2xl font-bold text-dl-text mb-1.5">무엇을 분석할까요?</h1> <p class="text-sm text-dl-text-muted mb-8">종목명과 질문을 입력하거나, 자유롭게 대화하세요</p> <div class="input-box large"><textarea placeholder="삼성전자 재무 건전성을 분석해줘..." rows="1" class="input-textarea"></textarea> <button><!></button></div> <div class="grid grid-cols-2 gap-2.5 mt-6 w-full max-w-[520px]"></div></div></div>');function pf(e,t){Jt(t,!0);let r=Ie(t,"inputText",15,""),n;const a=["삼성전자 재무 건전성 분석해줘","LG에너지솔루션 배당 추세는?","카카오 부채 리스크 평가해줘","현대차 영업이익률 추이 분석"];function s(m){var p;m.key==="Enter"&&!m.shiftKey&&(m.preventDefault(),(p=t.onSend)==null||p.call(t))}function o(m){m.target.style.height="auto",m.target.style.height=Math.min(m.target.scrollHeight,200)+"px"}function i(m){r(m),n&&n.focus()}var l=vf(),c=h(l),u=z(h(c),6),g=h(u);wi(g,m=>n=m,()=>n);var v=z(g,2),_=h(v);Ri(_,{size:18,strokeWidth:2.5});var f=z(u,2);rt(f,21,()=>a,tt,(m,p)=>{var y=ff(),T=h(y);Q(()=>ae(T,d(p))),W("click",y,()=>i(d(p))),S(m,y)}),Q((m,p)=>{Fe(v,1,m),v.disabled=p},[()=>De(Oe("send-btn",r().trim()&&"active")),()=>!r().trim()]),W("keydown",g,s),W("input",g,o),Kr(g,r),W("click",v,function(...m){var p;(p=t.onSend)==null||p.apply(this,m)}),S(e,l),Xt()}cn(["keydown","input","click"]);var hf=N("<span><!></span>");function mf(e,t){Jt(t,!0);let r=Ie(t,"variant",3,"default");const n={default:"bg-dl-primary/10 text-dl-primary-light border-dl-primary/20",accent:"bg-dl-accent/10 text-dl-accent-light border-dl-accent/20",success:"bg-dl-success/10 text-dl-success border-dl-success/20",muted:"bg-dl-bg-card-hover text-dl-text-muted border-dl-border"};var a=hf(),s=h(a);Ka(s,()=>t.children),Q(o=>Fe(a,1,o),[()=>De(Oe("inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border",n[r()],t.class))]),S(e,a),Xt()}var gf=N('<div class="flex items-start gap-3 animate-fadeIn"><div class="w-7 h-7 rounded-full bg-dl-bg-card-hover border border-dl-border flex items-center justify-center text-[10px] font-semibold text-dl-text-muted flex-shrink-0 mt-0.5">You</div> <div class="flex-1 pt-0.5"><p class="text-[15px] text-dl-text leading-relaxed"> </p></div></div>'),bf=N('<div class="px-3 py-2 bg-dl-bg-card/50"><div class="text-[10px] text-dl-text-dim leading-tight"> </div> <div> </div></div>'),xf=N('<span class="flex items-center gap-1 text-[10px] text-amber-400"><!> </span>'),_f=N('<div class="px-3 py-1.5 border-t border-dl-border/30 flex flex-wrap gap-2"></div>'),yf=N('<div class="mb-3 rounded-xl border border-dl-border/50 bg-dl-bg-card/30 overflow-hidden animate-fadeIn"><div class="grid gap-px" style="grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));"></div> <!></div>'),wf=N('<button class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-dl-border/60 bg-dl-bg-card/60 text-[12px] text-dl-text-muted hover:text-dl-text hover:border-dl-primary/40 hover:bg-dl-primary/[0.05] transition-all"><!> <span> </span></button>'),kf=N('<div class="mb-3"><div class="flex items-center gap-1.5 mb-1.5 text-[11px] text-dl-text-dim"><!> <span>분석에 사용된 데이터</span></div> <div class="flex flex-wrap items-center gap-2"></div></div>'),Sf=N('<span class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-dl-accent/30 bg-dl-accent/5 text-[12px] text-dl-accent"><!> </span>'),Af=N('<div class="mb-3"><div class="flex items-center gap-1.5 mb-1.5 text-[11px] text-dl-text-dim"><!> <span>사용된 도구</span></div> <div class="flex flex-wrap items-center gap-2"></div></div>'),zf=N('<span class="text-dl-text-muted"> </span>'),Mf=N('<div class="flex items-center gap-2 h-6 text-[12px] text-dl-text-dim"><!> <span> </span> <!></div>'),Ef=N('<div class="flex items-center gap-1 mt-2 text-[10px] text-dl-text-dim"><!> <span> </span></div>'),$f=N("<div><!></div> <!>",1),Tf=N('<div class="flex items-start gap-3 animate-fadeIn"><img src="/avatar.png" alt="DartLab" class="w-7 h-7 rounded-full flex-shrink-0 mt-0.5"/> <div class="flex-1 pt-0.5 min-w-0"><!> <!> <!> <!> <!></div></div>'),Nf=N("<button> </button>"),Pf=N('<div class="px-5 pb-2.5 overflow-x-auto scrollbar-hide"><div class="flex items-center gap-1.5"></div></div>'),Cf=N('<div class="prose-dartlab text-[13px] leading-[1.7]"><!></div>'),If=N('<pre class="text-[11px] text-dl-text-muted font-mono bg-dl-bg-darker rounded-xl p-4 overflow-x-auto whitespace-pre-wrap break-words"> </pre>'),Of=N('<div class="fixed inset-0 z-[300] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn"><div class="w-full max-w-3xl max-h-[80vh] mx-4 bg-dl-bg-card border border-dl-border rounded-2xl shadow-2xl overflow-hidden flex flex-col"><div class="flex-shrink-0 border-b border-dl-border/50"><div class="flex items-center justify-between px-5 pt-4 pb-3"><div class="flex items-center gap-1.5 text-[14px] font-medium text-dl-text"><!> <span> </span></div> <div class="flex items-center gap-2"><div class="flex items-center gap-0.5 bg-dl-bg-darker rounded-lg p-0.5"><button><!> 렌더링</button> <button><!> 원문</button></div> <button class="p-1 rounded-lg text-dl-text-dim hover:text-dl-text hover:bg-white/5 transition-colors"><!></button></div></div> <!></div> <div class="flex-1 overflow-y-auto px-5 pb-5 min-h-0"><!></div></div></div>'),Lf=N("<!> <!>",1);function Rf(e,t){Jt(t,!0);let r=U(null),n=U("rendered"),a=$e(()=>{var f;return t.message.loading?t.message.text?"응답 생성 중...":((f=t.message.contexts)==null?void 0:f.length)>0?"분석 중...":t.message.snapshot?"데이터 확인 중...":t.message.meta?"기업 데이터 로딩 중...":"생각 중...":""}),s=$e(()=>{var m;if(!t.message.loading||!((m=t.message.contexts)!=null&&m.length))return"";const f=t.message.contexts[t.message.contexts.length-1];return(f==null?void 0:f.label)||(f==null?void 0:f.module)||""});function o(f){if(!f)return"";let m=f.replace(/```(\w*)\n([\s\S]*?)```/g,"<pre><code>$2</code></pre>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^### (.+)$/gm,"<h3>$1</h3>").replace(/^## (.+)$/gm,"<h2>$1</h2>").replace(/^# (.+)$/gm,"<h1>$1</h1>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/\*([^*]+)\*/g,"<em>$1</em>").replace(/^[•\-\*] (.+)$/gm,"<li>$1</li>").replace(/^\d+\. (.+)$/gm,"<li>$1</li>").replace(/^\|(.+)\|$/gm,p=>{const y=p.slice(1,-1).split("|").map(T=>T.trim());return y.every(T=>/^[\-:]+$/.test(T))?"":"<tr>"+y.map(T=>`<td>${T}</td>`).join("")+"</tr>"}).replace(/^> (.+)$/gm,"<blockquote>$1</blockquote>").replace(/\n\n/g,"</p><p>").replace(/\n/g,"<br>");return m=m.replace(/(<li>.*?<\/li>(\s*<br>)?)+/g,p=>"<ul>"+p.replace(/<br>/g,"")+"</ul>"),m=m.replace(/(<tr>.*?<\/tr>(\s*<br>)?)+/g,p=>"<table>"+p.replace(/<br>/g,"")+"</table>"),"<p>"+m+"</p>"}function i(f){b(r,f,!0),b(n,"rendered")}var l=Lf(),c=H(l);{var u=f=>{var m=gf(),p=z(h(m),2),y=h(p),T=h(y);Q(()=>ae(T,t.message.text)),S(f,m)},g=f=>{var m=Tf(),p=z(h(m),2),y=h(p);{var T=F=>{mf(F,{variant:"muted",class:"mb-2",children:(G,O)=>{var le=Yn();Q(()=>ae(le,t.message.company)),S(G,le)},$$slots:{default:!0}})};B(y,F=>{t.message.company&&F(T)})}var A=z(y,2);{var w=F=>{var G=yf(),O=h(G);rt(O,21,()=>t.message.snapshot.items,tt,(se,V)=>{const K=$e(()=>d(V).status==="good"?"text-dl-success":d(V).status==="danger"?"text-dl-primary-light":d(V).status==="caution"?"text-amber-400":"text-dl-text");var E=bf(),xe=h(E),re=h(xe),pe=z(xe,2),Ne=h(pe);Q(be=>{ae(re,d(V).label),Fe(pe,1,be),ae(Ne,d(V).value)},[()=>De(Oe("text-[14px] font-semibold leading-snug mt-0.5",d(K)))]),S(se,E)});var le=z(O,2);{var J=se=>{var V=_f();rt(V,21,()=>t.message.snapshot.warnings,tt,(K,E)=>{var xe=xf(),re=h(xe);tf(re,{size:10});var pe=z(re);Q(()=>ae(pe,` ${d(E)??""}`)),S(K,xe)}),S(se,V)};B(le,se=>{var V;((V=t.message.snapshot.warnings)==null?void 0:V.length)>0&&se(J)})}S(F,G)};B(A,F=>{var G,O;((O=(G=t.message.snapshot)==null?void 0:G.items)==null?void 0:O.length)>0&&F(w)})}var $=z(A,2);{var P=F=>{var G=kf(),O=h(G),le=h(O);za(le,{size:11});var J=z(O,2);rt(J,21,()=>t.message.contexts,tt,(se,V,K)=>{var E=wf(),xe=h(E);za(xe,{size:13,class:"flex-shrink-0"});var re=z(xe,2),pe=h(re);Q(()=>ae(pe,d(V).label||d(V).module)),W("click",E,()=>i(K)),S(se,E)}),S(F,G)};B($,F=>{var G;((G=t.message.contexts)==null?void 0:G.length)>0&&F(P)})}var L=z($,2);{var M=F=>{var G=Af(),O=h(G),le=h(O);bo(le,{size:11});var J=z(O,2);rt(J,21,()=>t.message.toolEvents,tt,(se,V)=>{var K=oe(),E=H(K);{var xe=re=>{var pe=Sf(),Ne=h(pe);bo(Ne,{size:13});var be=z(Ne);Q(()=>ae(be,` ${d(V).name??""}`)),S(re,pe)};B(E,re=>{d(V).type==="call"&&re(xe)})}S(se,K)}),S(F,G)};B(L,F=>{var G;((G=t.message.toolEvents)==null?void 0:G.length)>0&&F(M)})}var D=z(L,2);{var ie=F=>{var G=Mf(),O=h(G);Kt(O,{size:14,class:"animate-spin flex-shrink-0"});var le=z(O,2),J=h(le),se=z(le,2);{var V=K=>{var E=zf(),xe=h(E);Q(()=>ae(xe,`— ${d(s)??""}`)),S(K,E)};B(se,K=>{d(s)&&K(V)})}Q(()=>ae(J,d(a))),S(F,G)},ke=F=>{var G=$f(),O=H(G),le=h(O);Xs(le,()=>o(t.message.text));var J=z(O,2);{var se=V=>{var K=Ef(),E=h(K);Wu(E,{size:10});var xe=z(E,2),re=h(xe);Q(()=>ae(re,`${t.message.duration??""}초`)),S(V,K)};B(J,V=>{t.message.duration&&!t.message.loading&&V(se)})}Q(V=>Fe(O,1,V),[()=>De(Oe("prose-dartlab text-[15px] leading-[1.75]",t.message.error&&"text-dl-primary"))]),S(F,G)};B(D,F=>{t.message.loading&&!t.message.text?F(ie):F(ke,-1)})}S(f,m)};B(c,f=>{t.message.role==="user"?f(u):f(g,-1)})}var v=z(c,2);{var _=f=>{const m=$e(()=>t.message.contexts[d(r)]);var p=Of(),y=h(p),T=h(y),A=h(T),w=h(A),$=h(w);za($,{size:15,class:"flex-shrink-0"});var P=z($,2),L=h(P),M=z(w,2),D=h(M),ie=h(D),ke=h(ie);ji(ke,{size:11});var F=z(ie,2),G=h(F);Hu(G,{size:11});var O=z(D,2),le=h(O);Di(le,{size:18});var J=z(A,2);{var se=re=>{var pe=Pf(),Ne=h(pe);rt(Ne,21,()=>t.message.contexts,tt,(be,Pe,bt)=>{var Bt=Nf(),_e=h(Bt);Q(jr=>{Fe(Bt,1,jr),ae(_e,t.message.contexts[bt].label||t.message.contexts[bt].module)},[()=>De(Oe("px-2.5 py-1 rounded-lg text-[11px] whitespace-nowrap transition-colors flex-shrink-0",bt===d(r)?"bg-dl-primary/20 text-dl-primary-light font-medium":"bg-dl-bg-darker text-dl-text-dim hover:text-dl-text-muted hover:bg-dl-bg-darker/80"))]),W("click",Bt,()=>{b(r,bt,!0)}),S(be,Bt)}),S(re,pe)};B(J,re=>{t.message.contexts.length>1&&re(se)})}var V=z(T,2),K=h(V);{var E=re=>{var pe=Cf(),Ne=h(pe);Xs(Ne,()=>o(d(m).text)),S(re,pe)},xe=re=>{var pe=If(),Ne=h(pe);Q(()=>ae(Ne,d(m).text)),S(re,pe)};B(K,re=>{d(n)==="rendered"?re(E):re(xe,-1)})}Q((re,pe)=>{ae(L,d(m).label||d(m).module),Fe(ie,1,re),Fe(F,1,pe)},[()=>De(Oe("flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] transition-colors",d(n)==="rendered"?"bg-dl-bg-card text-dl-text shadow-sm":"text-dl-text-dim hover:text-dl-text-muted")),()=>De(Oe("flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] transition-colors",d(n)==="raw"?"bg-dl-bg-card text-dl-text shadow-sm":"text-dl-text-dim hover:text-dl-text-muted"))]),W("click",p,re=>{re.target===re.currentTarget&&b(r,null)}),W("keydown",p,re=>{re.key==="Escape"&&b(r,null)}),W("click",ie,()=>b(n,"rendered")),W("click",F,()=>b(n,"raw")),W("click",O,()=>b(r,null)),S(f,p)};B(v,f=>{var m;d(r)!==null&&((m=t.message.contexts)!=null&&m[d(r)])&&f(_)})}S(e,l),Xt()}cn(["click","keydown"]);var jf=N('<button class="send-btn active"><!></button>'),Df=N("<button><!></button>"),Ff=N('<div class="flex flex-col h-full min-h-0"><div class="flex-1 overflow-y-auto min-h-0"><div class="max-w-[720px] mx-auto px-5 pt-14 pb-8 space-y-8"></div></div> <div class="flex-shrink-0 px-5 pb-4 pt-2"><div class="max-w-[720px] mx-auto"><div class="input-box"><textarea placeholder="메시지를 입력하세요..." rows="1" class="input-textarea"></textarea> <!></div></div></div></div>');function Vf(e,t){Jt(t,!0);let r=Ie(t,"messages",19,()=>[]),n=Ie(t,"isLoading",3,!1),a=Ie(t,"inputText",15,""),s=Ie(t,"scrollTrigger",3,0),o;Jn(()=>{s(),o&&setTimeout(()=>{o.scrollTop=o.scrollHeight},10)});function i(A){var w;A.key==="Enter"&&!A.shiftKey&&(A.preventDefault(),(w=t.onSend)==null||w.call(t))}function l(A){A.target.style.height="auto",A.target.style.height=Math.min(A.target.scrollHeight,200)+"px"}var c=Ff(),u=h(c),g=h(u);rt(g,21,r,tt,(A,w)=>{Rf(A,{get message(){return d(w)}})}),wi(u,A=>o=A,()=>o);var v=z(u,2),_=h(v),f=h(_),m=h(f),p=z(m,2);{var y=A=>{var w=jf(),$=h(w);Zu($,{size:14}),W("click",w,function(...P){var L;(L=t.onStop)==null||L.apply(this,P)}),S(A,w)},T=A=>{var w=Df(),$=h(w);Ri($,{size:16,strokeWidth:2.5}),Q((P,L)=>{Fe(w,1,P),w.disabled=L},[()=>De(Oe("send-btn",a().trim()&&"active")),()=>!a().trim()]),W("click",w,function(...P){var L;(L=t.onSend)==null||L.apply(this,P)}),S(A,w)};B(p,A=>{n()?A(y):A(T,-1)})}W("keydown",m,i),W("input",m,l),Kr(m,a),S(e,c),Xt()}cn(["keydown","input","click"]);var Bf=N("<!> <span>확인 중...</span>",1),Gf=N("<!> <span>설정 필요</span>",1),Wf=N('<span class="text-dl-text-dim">/</span> <span class="max-w-[80px] truncate"> </span>',1),Hf=N('<span class="w-1.5 h-1.5 rounded-full bg-dl-success"></span> <span> </span> <!> <!>',1),Kf=N('<div class="mx-3 mb-2 px-4 py-3 rounded-xl border border-dl-border bg-dl-bg-card/80 backdrop-blur-sm flex items-center gap-3 pointer-events-auto"><!> <div class="flex-1"><div class="text-[13px] text-dl-text-muted">AI Provider 확인 중...</div></div></div>'),qf=N('<div class="mx-3 mb-2 px-4 py-3 rounded-xl border border-dl-primary/30 bg-dl-primary/5 backdrop-blur-sm flex items-center gap-3 pointer-events-auto"><!> <div class="flex-1"><div class="text-[13px] text-dl-text">AI Provider가 설정되지 않았습니다</div> <div class="text-[11px] text-dl-text-muted mt-0.5">대화를 시작하려면 Provider를 설정해주세요</div></div> <button class="px-3 py-1.5 rounded-lg bg-dl-primary/20 text-dl-primary-light text-[12px] font-medium hover:bg-dl-primary/30 transition-colors flex-shrink-0">설정하기</button></div>'),Uf=N('<span class="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-dl-primary/20 text-dl-primary-light">사용 중</span>'),Yf=N('<!> <span class="text-[10px] text-amber-400">인증 필요</span>',1),Jf=N('<!> <span class="text-[10px] text-dl-text-dim">미설치</span>',1),Xf=N('<div class="flex items-center gap-1.5 mt-2 text-[11px] text-dl-primary-light"><!> API 키가 유효하지 않습니다. 다시 확인해주세요.</div>'),Zf=N('<div class="px-4 pb-4 border-t border-dl-border/50 pt-3"><div class="text-[11px] text-dl-text-muted mb-2"> </div> <div class="flex items-center gap-2"><input type="password" class="flex-1 bg-dl-bg-darker border border-dl-border rounded-lg px-3 py-2 text-[12px] text-dl-text placeholder:text-dl-text-dim outline-none focus:border-dl-primary/50 transition-colors"/> <button class="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-dl-primary/20 text-dl-primary-light text-[12px] font-medium hover:bg-dl-primary/30 transition-colors disabled:opacity-40 flex-shrink-0"><!> 인증</button></div> <!></div>'),Qf=N('<button class="px-2.5 py-1.5 rounded-lg bg-dl-primary/20 text-dl-primary-light text-[11px] hover:bg-dl-primary/30 transition-colors disabled:opacity-40"><!></button>'),ev=N('<div class="px-4 pb-2 border-t border-dl-border/50 pt-2.5"><div class="flex items-center gap-2"><!> <span class="text-[11px] text-dl-success">인증됨</span> <span class="text-[10px] text-dl-text-dim">— 다른 키로 변경하려면 입력하세요</span></div> <div class="flex items-center gap-2 mt-2"><input type="password" placeholder="새 API 키 (변경 시에만)" class="flex-1 bg-dl-bg-darker border border-dl-border rounded-lg px-3 py-1.5 text-[11px] text-dl-text placeholder:text-dl-text-dim outline-none focus:border-dl-primary/50 transition-colors"/> <!></div></div>'),tv=N('<div class="px-4 pb-4 border-t border-dl-border/50 pt-3"><div class="text-[12px] text-dl-text mb-2">Ollama가 설치되어 있지 않습니다</div> <a href="https://ollama.com/download" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-3 py-2 rounded-lg bg-dl-bg-darker border border-dl-border text-[12px] text-dl-text-muted hover:text-dl-text hover:border-dl-primary/30 transition-colors"><!> Ollama 다운로드 (ollama.com) <!></a> <div class="text-[10px] text-dl-text-dim mt-2">설치 후 Ollama를 실행하고 새로고침하세요</div></div>'),rv=N('<div class="px-4 pb-3 border-t border-dl-border/50 pt-3"><div class="flex items-center gap-2 text-[12px] text-amber-400"><!> Ollama가 설치되었지만 실행되지 않고 있습니다</div> <div class="text-[10px] text-dl-text-dim mt-1">터미널에서 <code class="px-1 py-0.5 rounded bg-dl-bg-darker text-dl-text-muted">ollama serve</code>를 실행하세요</div></div>'),nv=N('<div class="px-4 pb-4 border-t border-dl-border/50 pt-3"><div class="text-[12px] text-dl-text mb-2"> </div> <div class="p-2.5 rounded-lg bg-dl-bg-darker border border-dl-border text-[11px] text-dl-text-muted font-mono"> </div> <div class="text-[10px] text-dl-text-dim mt-2"> </div></div>'),av=N('<div class="flex items-center gap-2 py-3 text-[12px] text-dl-text-dim"><!> 모델 목록 불러오는 중...</div>'),sv=N("<button> <!></button>"),ov=N('<div class="flex flex-wrap gap-1.5"></div>'),iv=N('<div class="text-[11px] text-dl-text-dim py-2">사용 가능한 모델이 없습니다</div>'),lv=N('<div class="p-3 rounded-lg border border-dl-border bg-dl-bg-darker"><div class="flex items-center justify-between mb-1.5"><span class="text-[11px] text-dl-text flex items-center gap-1.5"><!> 다운로드 중</span> <button class="px-2 py-0.5 rounded text-[10px] text-dl-text-dim hover:text-dl-primary-light transition-colors">취소</button></div> <div class="w-full h-1.5 rounded-full bg-dl-bg-dark overflow-hidden"><div class="h-full rounded-full bg-gradient-to-r from-dl-primary to-dl-primary-light transition-all duration-300"></div></div> <div class="text-[10px] text-dl-text-dim mt-1"> </div></div>'),dv=N('<span class="px-1 py-px rounded text-[9px] bg-dl-primary/15 text-dl-primary-light"> </span>'),cv=N('<button class="flex items-center gap-2.5 w-full px-2.5 py-2 rounded-lg border border-dl-border/50 text-left hover:border-dl-primary/30 hover:bg-white/[0.02] transition-all group"><div class="flex-1 min-w-0"><div class="flex items-center gap-1.5"><span class="text-[11px] font-medium text-dl-text"> </span> <span class="px-1 py-px rounded text-[9px] bg-dl-bg-darker text-dl-text-dim"> </span> <!></div> <div class="text-[10px] text-dl-text-dim mt-0.5"> </div></div> <div class="flex items-center gap-1.5 flex-shrink-0"><span class="text-[9px] text-dl-text-dim"> </span> <!></div></button>'),uv=N('<div class="flex items-center gap-1.5"><input type="text" placeholder="모델명 (예: gemma3)" class="flex-1 bg-dl-bg-darker border border-dl-border rounded-lg px-2.5 py-1.5 text-[11px] text-dl-text placeholder:text-dl-text-dim outline-none focus:border-dl-primary/50 transition-colors"/> <button class="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-dl-primary/20 text-dl-primary-light text-[11px] font-medium hover:bg-dl-primary/30 transition-colors disabled:opacity-40 flex-shrink-0"><!> 받기</button></div> <div class="mt-2.5 space-y-1"></div>',1),fv=N('<div class="mt-3 pt-3 border-t border-dl-border/30"><div class="flex items-center justify-between mb-2"><span class="text-[11px] text-dl-text-muted">모델 다운로드</span> <a href="https://ollama.com/library" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-[10px] text-dl-text-dim hover:text-dl-primary-light transition-colors">전체 목록 <!></a></div> <!></div>'),vv=N('<div class="px-4 pb-4 border-t border-dl-border/50 pt-3"><div class="flex items-center justify-between mb-2.5"><span class="text-[11px] font-medium text-dl-text-muted">모델 선택</span> <!></div> <!> <!></div>'),pv=N("<!> <!> <!> <!> <!>",1),hv=N('<div><button class="flex items-center gap-3 w-full px-4 py-3 text-left"><span></span> <div class="flex-1 min-w-0"><div class="flex items-center gap-2"><span class="text-[13px] font-medium text-dl-text"> </span> <!></div> <div class="text-[11px] text-dl-text-dim mt-0.5"> </div></div> <div class="flex items-center gap-2 flex-shrink-0"><!></div></button> <!></div>'),mv=N('<div class="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn"><div class="w-full max-w-xl bg-dl-bg-card border border-dl-border rounded-2xl shadow-2xl overflow-hidden"><div class="flex items-center justify-between px-6 pt-5 pb-3"><div class="text-[14px] font-semibold text-dl-text">AI Provider 설정</div> <button class="p-1 rounded-lg text-dl-text-dim hover:text-dl-text hover:bg-white/5 transition-colors"><!></button></div> <div class="px-6 pb-5 max-h-[70vh] overflow-y-auto"><div class="space-y-2.5"></div></div> <div class="flex items-center justify-between px-6 py-3 border-t border-dl-border"><div class="text-[10px] text-dl-text-dim"><!></div> <button class="px-4 py-2 rounded-xl bg-dl-primary/20 text-dl-primary-light text-[12px] font-medium hover:bg-dl-primary/30 transition-colors">닫기</button></div></div></div>'),gv=N('<div class="fixed inset-0 z-[250] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn"><div class="w-full max-w-xs bg-dl-bg-card border border-dl-border rounded-2xl shadow-2xl p-5"><div class="text-[14px] font-medium text-dl-text mb-1.5">대화 삭제</div> <div class="text-[12px] text-dl-text-muted mb-4">이 대화를 삭제하시겠습니까? 삭제된 대화는 복구할 수 없습니다.</div> <div class="flex items-center justify-end gap-2"><button class="px-3.5 py-1.5 rounded-lg text-[12px] text-dl-text-muted hover:text-dl-text hover:bg-white/5 transition-colors">취소</button> <button class="px-3.5 py-1.5 rounded-lg bg-dl-primary/20 text-dl-primary-light text-[12px] font-medium hover:bg-dl-primary/30 transition-colors">삭제</button></div></div></div>'),bv=N('<div class="fixed bottom-6 right-6 z-[300] animate-fadeIn"><div> </div></div>'),xv=N('<div class="flex h-screen bg-dl-bg-dark overflow-hidden"><!> <div class="relative flex flex-col flex-1 min-w-0 min-h-0"><div class="absolute top-0 left-0 right-0 z-10 pointer-events-none"><div class="flex items-center justify-between px-3 h-11 pointer-events-auto" style="background: linear-gradient(to bottom, var(--color-dl-bg-dark) 60%, transparent);"><button class="p-1.5 rounded-lg text-dl-text-muted hover:text-dl-text hover:bg-white/5 transition-colors"><!></button> <div class="flex items-center gap-1"><a href="https://buymeacoffee.com/eddmpython" target="_blank" rel="noopener noreferrer" class="p-1.5 rounded-lg text-[#ffdd00] hover:bg-white/5 transition-colors" title="Buy me a coffee"><!></a> <a href="https://eddmpython.github.io/dartlab/" target="_blank" rel="noopener noreferrer" class="p-1.5 rounded-lg text-dl-text-dim hover:text-dl-text-muted hover:bg-white/5 transition-colors" title="Documentation"><!></a> <a href="https://github.com/eddmpython/dartlab" target="_blank" rel="noopener noreferrer" class="p-1.5 rounded-lg text-dl-text-dim hover:text-dl-text-muted hover:bg-white/5 transition-colors" title="GitHub"><!></a> <div class="w-px h-4 bg-dl-border mx-1"></div> <button><!> <!></button></div></div> <!></div> <!></div></div>  <!> <!> <!>',1);function _v(e,t){Jt(t,!0);let r=U(""),n=U(!1),a=U(null),s=U(lt({})),o=U(lt({})),i=U(null),l=U(null),c=U(lt([])),u=U(!0),g=U(0),v=U(!0),_=U(!1),f=U(null),m=U(lt({})),p=U(lt({})),y=U(""),T=U(!1),A=U(null),w=U(""),$=U(!1),P=U(""),L=U(0),M=U(null),D=U(null),ie=U(""),ke=U("error"),F=U(!1);function G(k,R="error",de=4e3){b(ie,k,!0),b(ke,R,!0),b(F,!0),setTimeout(()=>{b(F,!1)},de)}const O=Lu();Jn(()=>{le()});async function le(){var k,R,de;b(v,!0);try{const He=await Fc();b(s,He.providers||{},!0),b(o,He.ollama||{},!0);const fe=localStorage.getItem("dartlab-provider"),q=localStorage.getItem("dartlab-model");if(fe&&((k=d(s)[fe])!=null&&k.available)){b(i,fe,!0),b(f,fe,!0),await Hr(fe,q),await J(fe);const j=d(m)[fe]||[];q&&j.includes(q)?b(l,q,!0):j.length>0&&(b(l,j[0],!0),localStorage.setItem("dartlab-model",d(l))),b(c,j,!0),b(v,!1);return}if(fe&&d(s)[fe]){b(i,fe,!0),b(f,fe,!0),await J(fe);const j=d(m)[fe]||[];b(c,j,!0),q&&j.includes(q)?b(l,q,!0):j.length>0&&b(l,j[0],!0),b(v,!1);return}for(const j of["ollama"])if((R=d(s)[j])!=null&&R.available){b(i,j,!0),b(f,j,!0),await Hr(j),await J(j);const ge=d(m)[j]||[];b(c,ge,!0),b(l,((de=d(s)[j])==null?void 0:de.model)||(ge.length>0?ge[0]:null),!0),d(l)&&localStorage.setItem("dartlab-model",d(l));break}}catch{}b(v,!1)}async function J(k){b(p,{...d(p),[k]:!0},!0);try{const R=await Vc(k);b(m,{...d(m),[k]:R.models||[]},!0)}catch{b(m,{...d(m),[k]:[]},!0)}b(p,{...d(p),[k]:!1},!0)}async function se(k){var de;b(i,k,!0),b(l,null),b(f,k,!0),localStorage.setItem("dartlab-provider",k),localStorage.removeItem("dartlab-model"),b(y,""),b(A,null);try{await Hr(k)}catch{}await J(k);const R=d(m)[k]||[];if(b(c,R,!0),R.length>0){b(l,((de=d(s)[k])==null?void 0:de.model)||R[0],!0),localStorage.setItem("dartlab-model",d(l));try{await Hr(k,d(l))}catch{}}}async function V(k){b(l,k,!0),localStorage.setItem("dartlab-model",k);try{await Hr(d(i),k)}catch{}}function K(k){d(f)===k?b(f,null):(b(f,k,!0),J(k))}async function E(){const k=d(y).trim();if(!(!k||!d(i))){b(T,!0),b(A,null);try{const R=await Hr(d(i),d(l),k);R.available?(b(A,"success"),d(s)[d(i)]={...d(s)[d(i)],available:!0,model:R.model},!d(l)&&R.model&&b(l,R.model,!0),await J(d(i)),b(c,d(m)[d(i)]||[],!0),G("API 키 인증 성공","success")):b(A,"error")}catch{b(A,"error")}b(T,!1)}}function xe(){const k=d(w).trim();!k||d($)||(b($,!0),b(P,"준비 중..."),b(L,0),b(M,Bc(k,{onProgress(R){R.total&&R.completed!==void 0?(b(L,Math.round(R.completed/R.total*100),!0),b(P,`다운로드 중... ${d(L)}%`)):R.status&&b(P,R.status,!0)},async onDone(){b($,!1),b(M,null),b(w,""),b(P,""),b(L,0),G(`${k} 다운로드 완료`,"success"),await J("ollama"),b(c,d(m).ollama||[],!0),d(c).includes(k)&&await V(k)},onError(R){b($,!1),b(M,null),b(P,""),b(L,0),G(`다운로드 실패: ${R}`)}}),!0))}function re(){d(M)&&(d(M).abort(),b(M,null)),b($,!1),b(w,""),b(P,""),b(L,0)}function pe(){b(u,!d(u))}function Ne(){if(b(y,""),b(A,null),d(i))b(f,d(i),!0);else{const k=Object.keys(d(s));b(f,k.length>0?k[0]:null,!0)}b(_,!0),d(f)&&J(d(f))}function be(){O.createConversation(),b(r,""),b(n,!1),d(a)&&(d(a).abort(),b(a,null))}function Pe(k){O.setActive(k),b(r,""),b(n,!1),d(a)&&(d(a).abort(),b(a,null))}function bt(k){b(D,k,!0)}function Bt(){d(D)&&(O.deleteConversation(d(D)),b(D,null))}async function _e(){var fe;const k=d(r).trim();if(!k||d(n))return;if(!d(i)||!((fe=d(s)[d(i)])!=null&&fe.available)){G("먼저 AI Provider를 설정해주세요. 우상단 설정 버튼을 클릭하세요."),Ne();return}O.activeId||O.createConversation(),O.addMessage("user",k),b(r,""),b(n,!0),O.addMessage("assistant",""),O.updateLastMessage({loading:!0,startedAt:Date.now()}),An(g);const R=O.active,de=[];if(R){const q=R.messages.slice(0,-2);for(const j of q)(j.role==="user"||j.role==="assistant")&&j.text&&j.text.trim()&&!j.error&&!j.loading&&de.push({role:j.role,text:j.text})}const He=Gc(null,k,{provider:d(i),model:d(l)},{onMeta(q){const j={meta:q};q.company&&(j.company=q.company),O.updateLastMessage(j)},onSnapshot(q){O.updateLastMessage({snapshot:q})},onContext(q){const j=O.active;if(!j)return;const ge=j.messages[j.messages.length-1],Ke=(ge==null?void 0:ge.contexts)||[];O.updateLastMessage({contexts:[...Ke,{module:q.module,label:q.label,text:q.text}]})},onToolCall(q){const j=O.active;if(!j)return;const ge=j.messages[j.messages.length-1],Ke=(ge==null?void 0:ge.toolEvents)||[];O.updateLastMessage({toolEvents:[...Ke,{type:"call",name:q.name,arguments:q.arguments}]})},onToolResult(q){const j=O.active;if(!j)return;const ge=j.messages[j.messages.length-1],Ke=(ge==null?void 0:ge.toolEvents)||[];O.updateLastMessage({toolEvents:[...Ke,{type:"result",name:q.name,result:q.result}]})},onChunk(q){const j=O.active;if(!j)return;const ge=j.messages[j.messages.length-1];O.updateLastMessage({text:((ge==null?void 0:ge.text)||"")+q}),An(g)},onDone(){const q=O.active,j=q==null?void 0:q.messages[q.messages.length-1],ge=j!=null&&j.startedAt?((Date.now()-j.startedAt)/1e3).toFixed(1):null;O.updateLastMessage({loading:!1,duration:ge}),b(n,!1),b(a,null),An(g)},onError(q){O.updateLastMessage({text:`오류: ${q}`,loading:!1,error:!0}),G(q),b(n,!1),b(a,null)}},de);b(a,He,!0)}function jr(){d(a)&&(d(a).abort(),b(a,null),b(n,!1),O.updateLastMessage({loading:!1}))}function Dr(k){(k.metaKey||k.ctrlKey)&&k.key==="n"&&(k.preventDefault(),be()),(k.metaKey||k.ctrlKey)&&k.shiftKey&&k.key==="S"&&(k.preventDefault(),pe()),k.key==="Escape"&&d(D)?b(D,null):k.key==="Escape"&&d(_)&&b(_,!1)}let Fr=$e(()=>{var k;return((k=O.active)==null?void 0:k.messages)||[]}),un=$e(()=>O.active&&O.active.messages.length>0),Zt=$e(()=>{var k;return!d(v)&&(!d(i)||!((k=d(s)[d(i)])!=null&&k.available))});const Fi=[{name:"gemma3",size:"3B",gb:"2.3",desc:"Google, 빠르고 가벼움",tag:"추천"},{name:"gemma3:12b",size:"12B",gb:"8.1",desc:"Google, 균형잡힌 성능"},{name:"llama3.1",size:"8B",gb:"4.7",desc:"Meta, 범용 최강",tag:"추천"},{name:"qwen2.5",size:"7B",gb:"4.7",desc:"Alibaba, 한국어 우수"},{name:"qwen2.5:14b",size:"14B",gb:"9.0",desc:"Alibaba, 한국어 최고 수준"},{name:"deepseek-r1",size:"7B",gb:"4.7",desc:"추론 특화, 분석에 적합"},{name:"phi4",size:"14B",gb:"9.1",desc:"Microsoft, 수학/코드 강점"},{name:"mistral",size:"7B",gb:"4.1",desc:"Mistral AI, 가볍고 빠름"},{name:"exaone3.5",size:"8B",gb:"4.9",desc:"LG AI, 한국어 특화",tag:"한국어"}];var ps=xv();pc("keydown",Va,Dr);var hs=H(ps),ms=h(hs);uf(ms,{get conversations(){return O.conversations},get activeId(){return O.activeId},get open(){return d(u)},onNewChat:be,onSelect:Pe,onDelete:bt});var Vi=z(ms,2),gs=h(Vi),bs=h(gs),ia=h(bs),Bi=h(ia);{var Gi=k=>{Yu(k,{size:18})},Wi=k=>{Uu(k,{size:18})};B(Bi,k=>{d(u)?k(Gi):k(Wi,-1)})}var Hi=z(ia,2),xs=h(Hi),Ki=h(xs);Ku(Ki,{size:15});var _s=z(xs,2),qi=h(_s);ji(qi,{size:15});var ys=z(_s,2),Ui=h(ys);qu(Ui,{size:15});var la=z(ys,4),ws=h(la);{var Yi=k=>{var R=Bf(),de=H(R);Kt(de,{size:12,class:"animate-spin"}),S(k,R)},Ji=k=>{var R=Gf(),de=H(R);Hn(de,{size:12}),S(k,R)},Xi=k=>{var R=Hf(),de=z(H(R),2),He=h(de),fe=z(de,2);{var q=Ke=>{var fn=Wf(),da=z(H(fn),2),ca=h(da);Q(()=>ae(ca,d(l))),S(Ke,fn)};B(fe,Ke=>{d(l)&&Ke(q)})}var j=z(fe,2);{var ge=Ke=>{Kt(Ke,{size:10,class:"animate-spin text-dl-primary-light"})};B(j,Ke=>{d($)&&Ke(ge)})}Q(()=>ae(He,d(i))),S(k,R)};B(ws,k=>{d(v)?k(Yi):d(Zt)?k(Ji,1):k(Xi,-1)})}var Zi=z(ws,2);Xu(Zi,{size:12});var Qi=z(bs,2);{var el=k=>{var R=Kf(),de=h(R);Kt(de,{size:16,class:"text-dl-text-dim animate-spin flex-shrink-0"}),S(k,R)},tl=k=>{var R=qf(),de=h(R);Hn(de,{size:16,class:"text-dl-primary-light flex-shrink-0"});var He=z(de,4);W("click",He,()=>Ne()),S(k,R)};B(Qi,k=>{d(v)&&!d(_)?k(el):d(Zt)&&!d(_)&&k(tl,1)})}var rl=z(gs,2);{var nl=k=>{Vf(k,{get messages(){return d(Fr)},get isLoading(){return d(n)},get scrollTrigger(){return d(g)},onSend:_e,onStop:jr,get inputText(){return d(r)},set inputText(R){b(r,R,!0)}})},al=k=>{pf(k,{onSend:_e,get inputText(){return d(r)},set inputText(R){b(r,R,!0)}})};B(rl,k=>{d(un)?k(nl):k(al,-1)})}var ks=z(hs,2);{var sl=k=>{var R=mv(),de=h(R),He=h(de),fe=z(h(He),2),q=h(fe);Di(q,{size:18});var j=z(He,2),ge=h(j);rt(ge,21,()=>Object.entries(d(s)),tt,(xt,br)=>{var Qt=$e(()=>So(d(br),2));let ye=()=>d(Qt)[0],Je=()=>d(Qt)[1];const vn=$e(()=>ye()===d(i)),ul=$e(()=>d(f)===ye()),Vr=$e(()=>Je().auth==="api_key"),As=$e(()=>Je().auth==="cli"),Rn=$e(()=>d(m)[ye()]||[]),zs=$e(()=>d(p)[ye()]);var ua=hv(),fa=h(ua),Ms=h(fa),Es=z(Ms,2),$s=h(Es),Ts=h($s),fl=h(Ts),vl=z(Ts,2);{var pl=ze=>{var dt=Uf();S(ze,dt)};B(vl,ze=>{d(vn)&&ze(pl)})}var hl=z($s,2),ml=h(hl),gl=z(Es,2),bl=h(gl);{var xl=ze=>{vo(ze,{size:16,class:"text-dl-success"})},_l=ze=>{var dt=Yf(),Br=H(dt);ho(Br,{size:14,class:"text-amber-400"}),S(ze,dt)},yl=ze=>{var dt=Jf(),Br=H(dt);Qu(Br,{size:14,class:"text-dl-text-dim"}),S(ze,dt)};B(bl,ze=>{Je().available?ze(xl):d(Vr)?ze(_l,1):d(As)&&!Je().available&&ze(yl,2)})}var wl=z(fa,2);{var kl=ze=>{var dt=pv(),Br=H(dt);{var Sl=we=>{var Re=Zf(),qe=h(Re),ct=h(qe),_t=z(qe,2),at=h(_t),Gt=z(at,2),xr=h(Gt);{var pn=ce=>{Kt(ce,{size:12,class:"animate-spin"})},yt=ce=>{ho(ce,{size:12})};B(xr,ce=>{d(T)?ce(pn):ce(yt,-1)})}var er=z(_t,2);{var Se=ce=>{var wt=Xf(),Ue=h(wt);Hn(Ue,{size:12}),S(ce,wt)};B(er,ce=>{d(A)==="error"&&ce(Se)})}Q(ce=>{ae(ct,Je().envKey?`환경변수 ${Je().envKey}로도 설정 가능합니다`:"API 키를 입력하세요"),Xn(at,"placeholder",ye()==="openai"?"sk-...":ye()==="claude"?"sk-ant-...":"API Key"),Gt.disabled=ce},[()=>!d(y).trim()||d(T)]),W("keydown",at,ce=>{ce.key==="Enter"&&E()}),Kr(at,()=>d(y),ce=>b(y,ce)),W("click",Gt,E),S(we,Re)};B(Br,we=>{d(Vr)&&!Je().available&&we(Sl)})}var Ns=z(Br,2);{var Al=we=>{var Re=ev(),qe=h(Re),ct=h(qe);vo(ct,{size:13,class:"text-dl-success"});var _t=z(qe,2),at=h(_t),Gt=z(at,2);{var xr=yt=>{var er=Qf(),Se=h(er);{var ce=Ue=>{Kt(Ue,{size:10,class:"animate-spin"})},wt=Ue=>{var tr=Yn("변경");S(Ue,tr)};B(Se,Ue=>{d(T)?Ue(ce):Ue(wt,-1)})}Q(()=>er.disabled=d(T)),W("click",er,E),S(yt,er)},pn=$e(()=>d(y).trim());B(Gt,yt=>{d(pn)&&yt(xr)})}W("keydown",at,yt=>{yt.key==="Enter"&&E()}),Kr(at,()=>d(y),yt=>b(y,yt)),S(we,Re)};B(Ns,we=>{d(Vr)&&Je().available&&we(Al)})}var Ps=z(Ns,2);{var zl=we=>{var Re=tv(),qe=z(h(Re),2),ct=h(qe);Ma(ct,{size:14});var _t=z(ct,2);po(_t,{size:10,class:"ml-auto"}),S(we,Re)},Ml=we=>{var Re=rv(),qe=h(Re),ct=h(qe);Hn(ct,{size:14}),S(we,Re)};B(Ps,we=>{ye()==="ollama"&&!d(o).installed?we(zl):ye()==="ollama"&&d(o).installed&&!d(o).running&&we(Ml,1)})}var Cs=z(Ps,2);{var El=we=>{var Re=nv(),qe=h(Re),ct=h(qe),_t=z(qe,2),at=h(_t),Gt=z(_t,2),xr=h(Gt);Q(()=>{ae(ct,ye()==="claude-code"?"Claude Code CLI가 설치되어 있지 않습니다":"Codex CLI가 설치되어 있지 않습니다"),ae(at,ye()==="claude-code"?"npm install -g @anthropic-ai/claude-code":"npm install -g @openai/codex"),ae(xr,ye()==="claude-code"?"설치 후 `claude auth login`으로 인증하세요":"설치 후 브라우저 인증이 필요합니다")}),S(we,Re)};B(Cs,we=>{d(As)&&!Je().available&&we(El)})}var $l=z(Cs,2);{var Tl=we=>{var Re=vv(),qe=h(Re),ct=z(h(qe),2);{var _t=Se=>{Kt(Se,{size:12,class:"animate-spin text-dl-text-dim"})};B(ct,Se=>{d(zs)&&Se(_t)})}var at=z(qe,2);{var Gt=Se=>{var ce=av(),wt=h(ce);Kt(wt,{size:14,class:"animate-spin"}),S(Se,ce)},xr=Se=>{var ce=ov();rt(ce,21,()=>d(Rn),tt,(wt,Ue)=>{var tr=sv(),jn=h(tr),va=z(jn);{var pa=ut=>{Gu(ut,{size:10,class:"inline ml-1"})};B(va,ut=>{d(Ue)===d(l)&&d(vn)&&ut(pa)})}Q(ut=>{Fe(tr,1,ut),ae(jn,`${d(Ue)??""} `)},[()=>De(Oe("px-3 py-1.5 rounded-lg text-[11px] border transition-all",d(Ue)===d(l)&&d(vn)?"border-dl-primary/50 bg-dl-primary/10 text-dl-primary-light font-medium":"border-dl-border text-dl-text-muted hover:border-dl-primary/30 hover:text-dl-text"))]),W("click",tr,()=>{ye()!==d(i)&&se(ye()),V(d(Ue))}),S(wt,tr)}),S(Se,ce)},pn=Se=>{var ce=iv();S(Se,ce)};B(at,Se=>{d(zs)&&d(Rn).length===0?Se(Gt):d(Rn).length>0?Se(xr,1):Se(pn,-1)})}var yt=z(at,2);{var er=Se=>{var ce=fv(),wt=h(ce),Ue=z(h(wt),2),tr=z(h(Ue));po(tr,{size:9});var jn=z(wt,2);{var va=ut=>{var hn=lv(),mn=h(hn),Gr=h(mn),gn=h(Gr);Kt(gn,{size:12,class:"animate-spin text-dl-primary-light"});var ha=z(Gr,2),Dn=z(mn,2),Wt=h(Dn),kt=z(Dn,2),ma=h(kt);Q(()=>{gi(Wt,`width: ${d(L)??""}%`),ae(ma,d(P))}),W("click",ha,re),S(ut,hn)},pa=ut=>{var hn=uv(),mn=H(hn),Gr=h(mn),gn=z(Gr,2),ha=h(gn);Ma(ha,{size:12});var Dn=z(mn,2);rt(Dn,21,()=>Fi,tt,(Wt,kt)=>{const ma=$e(()=>d(Rn).some(Wr=>Wr===d(kt).name||Wr===d(kt).name.split(":")[0]));var Is=oe(),Nl=H(Is);{var Pl=Wr=>{var ga=cv(),Os=h(ga),Ls=h(Os),Rs=h(Ls),Cl=h(Rs),js=z(Rs,2),Il=h(js),Ol=z(js,2);{var Ll=ba=>{var Fs=dv(),Bl=h(Fs);Q(()=>ae(Bl,d(kt).tag)),S(ba,Fs)};B(Ol,ba=>{d(kt).tag&&ba(Ll)})}var Rl=z(Ls,2),jl=h(Rl),Dl=z(Os,2),Ds=h(Dl),Fl=h(Ds),Vl=z(Ds,2);Ma(Vl,{size:12,class:"text-dl-text-dim group-hover:text-dl-primary-light transition-colors"}),Q(()=>{ae(Cl,d(kt).name),ae(Il,d(kt).size),ae(jl,d(kt).desc),ae(Fl,`${d(kt).gb??""} GB`)}),W("click",ga,()=>{b(w,d(kt).name,!0),xe()}),S(Wr,ga)};B(Nl,Wr=>{d(ma)||Wr(Pl)})}S(Wt,Is)}),Q(Wt=>gn.disabled=Wt,[()=>!d(w).trim()]),W("keydown",Gr,Wt=>{Wt.key==="Enter"&&xe()}),Kr(Gr,()=>d(w),Wt=>b(w,Wt)),W("click",gn,xe),S(ut,hn)};B(jn,ut=>{d($)?ut(va):ut(pa,-1)})}S(Se,ce)};B(yt,Se=>{ye()==="ollama"&&Se(er)})}S(we,Re)};B($l,we=>{(Je().available||d(Vr))&&we(Tl)})}S(ze,dt)};B(wl,ze=>{(d(ul)||d(vn))&&ze(kl)})}Q((ze,dt)=>{Fe(ua,1,ze),Fe(Ms,1,dt),ae(fl,Je().label||ye()),ae(ml,Je().desc||"")},[()=>De(Oe("rounded-xl border transition-all",d(vn)?"border-dl-primary/40 bg-dl-primary/[0.03]":"border-dl-border")),()=>De(Oe("w-2.5 h-2.5 rounded-full flex-shrink-0",Je().available?"bg-dl-success":d(Vr)?"bg-amber-400":"bg-dl-text-dim"))]),W("click",fa,()=>{Je().available||d(Vr)?ye()===d(i)?K(ye()):se(ye()):K(ye())}),S(xt,ua)});var Ke=z(j,2),fn=h(Ke),da=h(fn);{var ca=xt=>{var br=Yn();Q(()=>{var Qt;return ae(br,`현재: ${(((Qt=d(s)[d(i)])==null?void 0:Qt.label)||d(i))??""} / ${d(l)??""}`)}),S(xt,br)},dl=xt=>{var br=Yn();Q(()=>{var Qt;return ae(br,`현재: ${(((Qt=d(s)[d(i)])==null?void 0:Qt.label)||d(i))??""}`)}),S(xt,br)};B(da,xt=>{d(i)&&d(l)?xt(ca):d(i)&&xt(dl,1)})}var cl=z(fn,2);W("click",R,xt=>{xt.target===xt.currentTarget&&b(_,!1)}),W("keydown",R,()=>{}),W("click",fe,()=>b(_,!1)),W("click",cl,()=>b(_,!1)),S(k,R)};B(ks,k=>{d(_)&&k(sl)})}var Ss=z(ks,2);{var ol=k=>{var R=gv(),de=h(R),He=z(h(de),4),fe=h(He),q=z(fe,2);W("click",R,j=>{j.target===j.currentTarget&&b(D,null)}),W("keydown",R,()=>{}),W("click",fe,()=>b(D,null)),W("click",q,Bt),S(k,R)};B(Ss,k=>{d(D)&&k(ol)})}var il=z(Ss,2);{var ll=k=>{var R=bv(),de=h(R),He=h(de);Q(fe=>{Fe(de,1,fe),ae(He,d(ie))},[()=>De(Oe("px-4 py-3 rounded-xl border text-[13px] shadow-2xl max-w-sm",d(ke)==="error"?"bg-dl-primary/10 border-dl-primary/30 text-dl-primary-light":d(ke)==="success"?"bg-dl-success/10 border-dl-success/30 text-dl-success":"bg-dl-bg-card border-dl-border text-dl-text"))]),S(k,R)};B(il,k=>{d(F)&&k(ll)})}Q(k=>Fe(la,1,k),[()=>De(Oe("flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] transition-colors",d(v)?"text-dl-text-dim":d(Zt)?"text-dl-primary-light bg-dl-primary/10 hover:bg-dl-primary/15":"text-dl-text-dim hover:text-dl-text-muted hover:bg-white/5"))]),W("click",ia,pe),W("click",la,()=>Ne()),S(e,ps),Xt()}cn(["click","keydown"]);bc(_v,{target:document.getElementById("app")});
