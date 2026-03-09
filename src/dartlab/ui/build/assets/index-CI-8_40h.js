var Dl=Object.defineProperty;var Da=e=>{throw TypeError(e)};var Fl=(e,t,r)=>t in e?Dl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var kt=(e,t,r)=>Fl(e,typeof t!="symbol"?t+"":t,r),xs=(e,t,r)=>t.has(e)||Da("Cannot "+r);var x=(e,t,r)=>(xs(e,t,"read from private field"),r?r.call(e):t.get(e)),ee=(e,t,r)=>t.has(e)?Da("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),U=(e,t,r,n)=>(xs(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),Ae=(e,t,r)=>(xs(e,t,"access private method"),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const Es=!1;var Xs=Array.isArray,Vl=Array.prototype.indexOf,Qr=Array.prototype.includes,rs=Array.from,Bl=Object.defineProperty,ir=Object.getOwnPropertyDescriptor,_o=Object.getOwnPropertyDescriptors,Gl=Object.prototype,Wl=Array.prototype,Zs=Object.getPrototypeOf,Fa=Object.isExtensible;function mn(e){return typeof e=="function"}const Hl=()=>{};function Kl(e){return e()}function $s(e){for(var t=0;t<e.length;t++)e[t]()}function yo(){var e,t,r=new Promise((n,s)=>{e=n,t=s});return{promise:r,resolve:e,reject:t}}function wo(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const Ve=2,sn=4,Pr=8,ns=1<<24,pr=16,$t=32,Lr=64,Ts=128,pt=512,je=1024,De=2048,Et=4096,qe=8192,Rt=16384,an=32768,fr=65536,Va=1<<17,ql=1<<18,on=1<<19,ko=1<<20,Ot=1<<25,Cr=65536,Ns=1<<21,Qs=1<<22,lr=1<<23,jt=Symbol("$state"),So=Symbol("legacy props"),Ul=Symbol(""),wr=new class extends Error{constructor(){super(...arguments);kt(this,"name","StaleReactionError");kt(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var go;const Ao=!!((go=globalThis.document)!=null&&go.contentType)&&globalThis.document.contentType.includes("xml");function Yl(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Jl(e,t,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function Xl(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Zl(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Ql(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ed(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function td(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function rd(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function nd(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function sd(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function ad(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const od=1,id=2,zo=4,ld=8,dd=16,cd=1,fd=2,Mo=4,ud=8,vd=16,pd=1,hd=2,Ee=Symbol(),Eo="http://www.w3.org/1999/xhtml",$o="http://www.w3.org/2000/svg",md="http://www.w3.org/1998/Math/MathML",gd="@attach";function bd(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function xd(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function To(e){return e===this.v}function _d(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function No(e){return!_d(e,this.v)}let En=!1,yd=!1;function wd(){En=!0}let Ne=null;function en(e){Ne=e}function Ut(e,t=!1,r){Ne={p:Ne,i:!1,c:null,e:null,s:e,x:null,l:En&&!t?{s:null,u:null,$:[]}:null}}function Yt(e){var t=Ne,r=t.e;if(r!==null){t.e=null;for(var n of r)Jo(n)}return t.i=!0,Ne=t.p,{}}function $n(){return!En||Ne!==null&&Ne.l===null}let kr=[];function Po(){var e=kr;kr=[],$s(e)}function Dt(e){if(kr.length===0&&!wn){var t=kr;queueMicrotask(()=>{t===kr&&Po()})}kr.push(e)}function kd(){for(;kr.length>0;)Po()}function Co(e){var t=Z;if(t===null)return X.f|=lr,e;if((t.f&an)===0&&(t.f&sn)===0)throw e;or(e,t)}function or(e,t){for(;t!==null;){if((t.f&Ts)!==0){if((t.f&an)===0)throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}const Sd=-7169;function _e(e,t){e.f=e.f&Sd|t}function ea(e){(e.f&pt)!==0||e.deps===null?_e(e,je):_e(e,Et)}function Io(e){if(e!==null)for(const t of e)(t.f&Ve)===0||(t.f&Cr)===0||(t.f^=Cr,Io(t.deps))}function Oo(e,t,r){(e.f&De)!==0?t.add(e):(e.f&Et)!==0&&r.add(e),Io(e.deps),_e(e,je)}const Fn=new Set;let J=null,Ps=null,Oe=null,Je=[],ss=null,wn=!1,tn=null,Ad=1;var nr,Hr,zr,Kr,qr,Ur,sr,Nt,Yr,tt,Cs,Is,Os,Ls;const va=class va{constructor(){ee(this,tt);kt(this,"id",Ad++);kt(this,"current",new Map);kt(this,"previous",new Map);ee(this,nr,new Set);ee(this,Hr,new Set);ee(this,zr,0);ee(this,Kr,0);ee(this,qr,null);ee(this,Ur,new Set);ee(this,sr,new Set);ee(this,Nt,new Map);kt(this,"is_fork",!1);ee(this,Yr,!1)}skip_effect(t){x(this,Nt).has(t)||x(this,Nt).set(t,{d:[],m:[]})}unskip_effect(t){var r=x(this,Nt).get(t);if(r){x(this,Nt).delete(t);for(var n of r.d)_e(n,De),Lt(n);for(n of r.m)_e(n,Et),Lt(n)}}process(t){var s;Je=[],this.apply();var r=tn=[],n=[];for(const a of t)Ae(this,tt,Is).call(this,a,r,n);if(tn=null,Ae(this,tt,Cs).call(this)){Ae(this,tt,Os).call(this,n),Ae(this,tt,Os).call(this,r);for(const[a,o]of x(this,Nt))Do(a,o)}else{Ps=this,J=null;for(const a of x(this,nr))a(this);x(this,nr).clear(),x(this,zr)===0&&Ae(this,tt,Ls).call(this),Ba(n),Ba(r),x(this,Ur).clear(),x(this,sr).clear(),Ps=null,(s=x(this,qr))==null||s.resolve()}Oe=null}capture(t,r){r!==Ee&&!this.previous.has(t)&&this.previous.set(t,r),(t.f&lr)===0&&(this.current.set(t,t.v),Oe==null||Oe.set(t,t.v))}activate(){J=this,this.apply()}deactivate(){J===this&&(J=null,Oe=null)}flush(){var t;if(Je.length>0)J=this,Lo();else if(x(this,zr)===0&&!this.is_fork){for(const r of x(this,nr))r(this);x(this,nr).clear(),Ae(this,tt,Ls).call(this),(t=x(this,qr))==null||t.resolve()}this.deactivate()}discard(){for(const t of x(this,Hr))t(this);x(this,Hr).clear()}increment(t){U(this,zr,x(this,zr)+1),t&&U(this,Kr,x(this,Kr)+1)}decrement(t){U(this,zr,x(this,zr)-1),t&&U(this,Kr,x(this,Kr)-1),!x(this,Yr)&&(U(this,Yr,!0),Dt(()=>{U(this,Yr,!1),Ae(this,tt,Cs).call(this)?Je.length>0&&this.flush():this.revive()}))}revive(){for(const t of x(this,Ur))x(this,sr).delete(t),_e(t,De),Lt(t);for(const t of x(this,sr))_e(t,Et),Lt(t);this.flush()}oncommit(t){x(this,nr).add(t)}ondiscard(t){x(this,Hr).add(t)}settled(){return(x(this,qr)??U(this,qr,yo())).promise}static ensure(){if(J===null){const t=J=new va;Fn.add(J),wn||Dt(()=>{J===t&&t.flush()})}return J}apply(){}};nr=new WeakMap,Hr=new WeakMap,zr=new WeakMap,Kr=new WeakMap,qr=new WeakMap,Ur=new WeakMap,sr=new WeakMap,Nt=new WeakMap,Yr=new WeakMap,tt=new WeakSet,Cs=function(){return this.is_fork||x(this,Kr)>0},Is=function(t,r,n){t.f^=je;for(var s=t.first;s!==null;){var a=s.f,o=(a&($t|Lr))!==0,i=o&&(a&je)!==0,l=(a&qe)!==0,c=i||x(this,Nt).has(s);if(!c&&s.fn!==null){o?l||(s.f^=je):(a&sn)!==0?r.push(s):(a&(Pr|ns))!==0&&l?n.push(s):Cn(s)&&(nn(s),(a&pr)!==0&&(x(this,sr).add(s),l&&_e(s,De)));var u=s.first;if(u!==null){s=u;continue}}for(;s!==null;){var m=s.next;if(m!==null){s=m;break}s=s.parent}}},Os=function(t){for(var r=0;r<t.length;r+=1)Oo(t[r],x(this,Ur),x(this,sr))},Ls=function(){var a;if(Fn.size>1){this.previous.clear();var t=J,r=Oe,n=!0;for(const o of Fn){if(o===this){n=!1;continue}const i=[];for(const[c,u]of this.current){if(o.current.has(c))if(n&&u!==o.current.get(c))o.current.set(c,u);else continue;i.push(c)}if(i.length===0)continue;const l=[...o.current.keys()].filter(c=>!this.current.has(c));if(l.length>0){var s=Je;Je=[];const c=new Set,u=new Map;for(const m of i)Ro(m,l,c,u);if(Je.length>0){J=o,o.apply();for(const m of Je)Ae(a=o,tt,Is).call(a,m,[],[]);o.deactivate()}Je=s}}J=t,Oe=r}x(this,Nt).clear(),Fn.delete(this)};let dr=va;function zd(e){var t=wn;wn=!0;try{for(var r;;){if(kd(),Je.length===0&&(J==null||J.flush(),Je.length===0))return ss=null,r;Lo()}}finally{wn=t}}function Lo(){var e=null;try{for(var t=0;Je.length>0;){var r=dr.ensure();if(t++>1e3){var n,s;Md()}r.process(Je),cr.clear()}}finally{Je=[],ss=null,tn=null}}function Md(){try{ed()}catch(e){or(e,ss)}}let St=null;function Ba(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if((n.f&(Rt|qe))===0&&Cn(n)&&(St=new Set,nn(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&ei(n),(St==null?void 0:St.size)>0)){cr.clear();for(const s of St){if((s.f&(Rt|qe))!==0)continue;const a=[s];let o=s.parent;for(;o!==null;)St.has(o)&&(St.delete(o),a.push(o)),o=o.parent;for(let i=a.length-1;i>=0;i--){const l=a[i];(l.f&(Rt|qe))===0&&nn(l)}}St.clear()}}St=null}}function Ro(e,t,r,n){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const s of e.reactions){const a=s.f;(a&Ve)!==0?Ro(s,t,r,n):(a&(Qs|pr))!==0&&(a&De)===0&&jo(s,t,n)&&(_e(s,De),Lt(s))}}function jo(e,t,r){const n=r.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const s of e.deps){if(Qr.call(t,s))return!0;if((s.f&Ve)!==0&&jo(s,t,r))return r.set(s,!0),!0}return r.set(e,!1),!1}function Lt(e){var t=ss=e,r=t.b;if(r!=null&&r.is_pending&&(e.f&(sn|Pr|ns))!==0&&(e.f&an)===0){r.defer_effect(e);return}for(;t.parent!==null;){t=t.parent;var n=t.f;if(tn!==null&&t===Z&&(e.f&Pr)===0)return;if((n&(Lr|$t))!==0){if((n&je)===0)return;t.f^=je}}Je.push(t)}function Do(e,t){if(!((e.f&$t)!==0&&(e.f&je)!==0)){(e.f&De)!==0?t.d.push(e):(e.f&Et)!==0&&t.m.push(e),_e(e,je);for(var r=e.first;r!==null;)Do(r,t),r=r.next}}function Ed(e){let t=0,r=ur(0),n;return()=>{sa()&&(d(r),oa(()=>(t===0&&(n=Ir(()=>e(()=>Sn(r)))),t+=1,()=>{Dt(()=>{t-=1,t===0&&(n==null||n(),n=void 0,Sn(r))})})))}}var $d=fr|on;function Td(e,t,r,n){new Nd(e,t,r,n)}var vt,Js,Pt,Mr,Ye,Ct,at,At,Ht,Er,ar,Jr,Xr,Zr,Kt,es,Me,Pd,Cd,Id,Rs,Kn,qn,js;class Nd{constructor(t,r,n,s){ee(this,Me);kt(this,"parent");kt(this,"is_pending",!1);kt(this,"transform_error");ee(this,vt);ee(this,Js,null);ee(this,Pt);ee(this,Mr);ee(this,Ye);ee(this,Ct,null);ee(this,at,null);ee(this,At,null);ee(this,Ht,null);ee(this,Er,0);ee(this,ar,0);ee(this,Jr,!1);ee(this,Xr,new Set);ee(this,Zr,new Set);ee(this,Kt,null);ee(this,es,Ed(()=>(U(this,Kt,ur(x(this,Er))),()=>{U(this,Kt,null)})));var a;U(this,vt,t),U(this,Pt,r),U(this,Mr,o=>{var i=Z;i.b=this,i.f|=Ts,n(o)}),this.parent=Z.b,this.transform_error=s??((a=this.parent)==null?void 0:a.transform_error)??(o=>o),U(this,Ye,Pn(()=>{Ae(this,Me,Rs).call(this)},$d))}defer_effect(t){Oo(t,x(this,Xr),x(this,Zr))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!x(this,Pt).pending}update_pending_count(t){Ae(this,Me,js).call(this,t),U(this,Er,x(this,Er)+t),!(!x(this,Kt)||x(this,Jr))&&(U(this,Jr,!0),Dt(()=>{U(this,Jr,!1),x(this,Kt)&&rn(x(this,Kt),x(this,Er))}))}get_effect_pending(){return x(this,es).call(this),d(x(this,Kt))}error(t){var r=x(this,Pt).onerror;let n=x(this,Pt).failed;if(!r&&!n)throw t;x(this,Ct)&&(Fe(x(this,Ct)),U(this,Ct,null)),x(this,at)&&(Fe(x(this,at)),U(this,at,null)),x(this,At)&&(Fe(x(this,At)),U(this,At,null));var s=!1,a=!1;const o=()=>{if(s){xd();return}s=!0,a&&ad(),x(this,At)!==null&&Tr(x(this,At),()=>{U(this,At,null)}),Ae(this,Me,qn).call(this,()=>{dr.ensure(),Ae(this,Me,Rs).call(this)})},i=l=>{try{a=!0,r==null||r(l,o),a=!1}catch(c){or(c,x(this,Ye)&&x(this,Ye).parent)}n&&U(this,At,Ae(this,Me,qn).call(this,()=>{dr.ensure();try{return Ze(()=>{var c=Z;c.b=this,c.f|=Ts,n(x(this,vt),()=>l,()=>o)})}catch(c){return or(c,x(this,Ye).parent),null}}))};Dt(()=>{var l;try{l=this.transform_error(t)}catch(c){or(c,x(this,Ye)&&x(this,Ye).parent);return}l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(i,c=>or(c,x(this,Ye)&&x(this,Ye).parent)):i(l)})}}vt=new WeakMap,Js=new WeakMap,Pt=new WeakMap,Mr=new WeakMap,Ye=new WeakMap,Ct=new WeakMap,at=new WeakMap,At=new WeakMap,Ht=new WeakMap,Er=new WeakMap,ar=new WeakMap,Jr=new WeakMap,Xr=new WeakMap,Zr=new WeakMap,Kt=new WeakMap,es=new WeakMap,Me=new WeakSet,Pd=function(){try{U(this,Ct,Ze(()=>x(this,Mr).call(this,x(this,vt))))}catch(t){this.error(t)}},Cd=function(t){const r=x(this,Pt).failed;r&&U(this,At,Ze(()=>{r(x(this,vt),()=>t,()=>()=>{})}))},Id=function(){const t=x(this,Pt).pending;t&&(this.is_pending=!0,U(this,at,Ze(()=>t(x(this,vt)))),Dt(()=>{var r=U(this,Ht,document.createDocumentFragment()),n=Ft();r.append(n),U(this,Ct,Ae(this,Me,qn).call(this,()=>(dr.ensure(),Ze(()=>x(this,Mr).call(this,n))))),x(this,ar)===0&&(x(this,vt).before(r),U(this,Ht,null),Tr(x(this,at),()=>{U(this,at,null)}),Ae(this,Me,Kn).call(this))}))},Rs=function(){try{if(this.is_pending=this.has_pending_snippet(),U(this,ar,0),U(this,Er,0),U(this,Ct,Ze(()=>{x(this,Mr).call(this,x(this,vt))})),x(this,ar)>0){var t=U(this,Ht,document.createDocumentFragment());da(x(this,Ct),t);const r=x(this,Pt).pending;U(this,at,Ze(()=>r(x(this,vt))))}else Ae(this,Me,Kn).call(this)}catch(r){this.error(r)}},Kn=function(){this.is_pending=!1;for(const t of x(this,Xr))_e(t,De),Lt(t);for(const t of x(this,Zr))_e(t,Et),Lt(t);x(this,Xr).clear(),x(this,Zr).clear()},qn=function(t){var r=Z,n=X,s=Ne;gt(x(this,Ye)),mt(x(this,Ye)),en(x(this,Ye).ctx);try{return t()}catch(a){return Co(a),null}finally{gt(r),mt(n),en(s)}},js=function(t){var r;if(!this.has_pending_snippet()){this.parent&&Ae(r=this.parent,Me,js).call(r,t);return}U(this,ar,x(this,ar)+t),x(this,ar)===0&&(Ae(this,Me,Kn).call(this),x(this,at)&&Tr(x(this,at),()=>{U(this,at,null)}),x(this,Ht)&&(x(this,vt).before(x(this,Ht)),U(this,Ht,null)))};function Fo(e,t,r,n){const s=$n()?Tn:ta;var a=e.filter(m=>!m.settled);if(r.length===0&&a.length===0){n(t.map(s));return}var o=Z,i=Od(),l=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(m=>m.promise)):null;function c(m){i();try{n(m)}catch(f){(o.f&Rt)===0&&or(f,o)}Ds()}if(r.length===0){l.then(()=>c(t.map(s)));return}function u(){i(),Promise.all(r.map(m=>Rd(m))).then(m=>c([...t.map(s),...m])).catch(m=>or(m,o))}l?l.then(u):u()}function Od(){var e=Z,t=X,r=Ne,n=J;return function(a=!0){gt(e),mt(t),en(r),a&&(n==null||n.activate())}}function Ds(e=!0){gt(null),mt(null),en(null),e&&(J==null||J.deactivate())}function Ld(){var e=Z.b,t=J,r=e.is_rendered();return e.update_pending_count(1),t.increment(r),()=>{e.update_pending_count(-1),t.decrement(r)}}function Tn(e){var t=Ve|De,r=X!==null&&(X.f&Ve)!==0?X:null;return Z!==null&&(Z.f|=on),{ctx:Ne,deps:null,effects:null,equals:To,f:t,fn:e,reactions:null,rv:0,v:Ee,wv:0,parent:r??Z,ac:null}}function Rd(e,t,r){Z===null&&Yl();var s=void 0,a=ur(Ee),o=!X,i=new Map;return Zd(()=>{var f;var l=yo();s=l.promise;try{Promise.resolve(e()).then(l.resolve,l.reject).finally(Ds)}catch(v){l.reject(v),Ds()}var c=J;if(o){var u=Ld();(f=i.get(c))==null||f.reject(wr),i.delete(c),i.set(c,l)}const m=(v,p=void 0)=>{if(c.activate(),p)p!==wr&&(a.f|=lr,rn(a,p));else{(a.f&lr)!==0&&(a.f^=lr),rn(a,v);for(const[_,h]of i){if(i.delete(_),_===c)break;h.reject(wr)}}u&&u()};l.promise.then(m,v=>m(null,v||"unknown"))}),os(()=>{for(const l of i.values())l.reject(wr)}),new Promise(l=>{function c(u){function m(){u===s?l(a):c(s)}u.then(m,m)}c(s)})}function Ie(e){const t=Tn(e);return ni(t),t}function ta(e){const t=Tn(e);return t.equals=No,t}function jd(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)Fe(t[r])}}function Dd(e){for(var t=e.parent;t!==null;){if((t.f&Ve)===0)return(t.f&Rt)===0?t:null;t=t.parent}return null}function ra(e){var t,r=Z;gt(Dd(e));try{e.f&=~Cr,jd(e),t=ii(e)}finally{gt(r)}return t}function Vo(e){var t=ra(e);if(!e.equals(t)&&(e.wv=ai(),(!(J!=null&&J.is_fork)||e.deps===null)&&(e.v=t,e.deps===null))){_e(e,je);return}vr||(Oe!==null?(sa()||J!=null&&J.is_fork)&&Oe.set(e,t):ea(e))}function Fd(e){var t,r;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),(r=n.ac)==null||r.abort(wr),n.teardown=Hl,n.ac=null,An(n,0),ia(n))}function Bo(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&nn(t)}let Fs=new Set;const cr=new Map;let Go=!1;function ur(e,t){var r={f:0,v:e,reactions:null,equals:To,rv:0,wv:0};return r}function q(e,t){const r=ur(e);return ni(r),r}function Vd(e,t=!1,r=!0){var s;const n=ur(e);return t||(n.equals=No),En&&r&&Ne!==null&&Ne.l!==null&&((s=Ne.l).s??(s.s=[])).push(n),n}function b(e,t,r=!1){X!==null&&(!Mt||(X.f&Va)!==0)&&$n()&&(X.f&(Ve|pr|Qs|Va))!==0&&(ht===null||!Qr.call(ht,e))&&sd();let n=r?it(t):t;return rn(e,n)}function rn(e,t){if(!e.equals(t)){var r=e.v;vr?cr.set(e,t):cr.set(e,r),e.v=t;var n=dr.ensure();if(n.capture(e,r),(e.f&Ve)!==0){const s=e;(e.f&De)!==0&&ra(s),ea(s)}e.wv=ai(),Wo(e,De),$n()&&Z!==null&&(Z.f&je)!==0&&(Z.f&($t|Lr))===0&&(ut===null?ec([e]):ut.push(e)),!n.is_fork&&Fs.size>0&&!Go&&Bd()}return t}function Bd(){Go=!1;for(const e of Fs)(e.f&je)!==0&&_e(e,Et),Cn(e)&&nn(e);Fs.clear()}function kn(e,t=1){var r=d(e),n=t===1?r++:r--;return b(e,r),n}function Sn(e){b(e,e.v+1)}function Wo(e,t){var r=e.reactions;if(r!==null)for(var n=$n(),s=r.length,a=0;a<s;a++){var o=r[a],i=o.f;if(!(!n&&o===Z)){var l=(i&De)===0;if(l&&_e(o,t),(i&Ve)!==0){var c=o;Oe==null||Oe.delete(c),(i&Cr)===0&&(i&pt&&(o.f|=Cr),Wo(c,Et))}else l&&((i&pr)!==0&&St!==null&&St.add(o),Lt(o))}}}function it(e){if(typeof e!="object"||e===null||jt in e)return e;const t=Zs(e);if(t!==Gl&&t!==Wl)return e;var r=new Map,n=Xs(e),s=q(0),a=Nr,o=i=>{if(Nr===a)return i();var l=X,c=Nr;mt(null),Ka(a);var u=i();return mt(l),Ka(c),u};return n&&r.set("length",q(e.length)),new Proxy(e,{defineProperty(i,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&rd();var u=r.get(l);return u===void 0?o(()=>{var m=q(c.value);return r.set(l,m),m}):b(u,c.value,!0),!0},deleteProperty(i,l){var c=r.get(l);if(c===void 0){if(l in i){const u=o(()=>q(Ee));r.set(l,u),Sn(s)}}else b(c,Ee),Sn(s);return!0},get(i,l,c){var v;if(l===jt)return e;var u=r.get(l),m=l in i;if(u===void 0&&(!m||(v=ir(i,l))!=null&&v.writable)&&(u=o(()=>{var p=it(m?i[l]:Ee),_=q(p);return _}),r.set(l,u)),u!==void 0){var f=d(u);return f===Ee?void 0:f}return Reflect.get(i,l,c)},getOwnPropertyDescriptor(i,l){var c=Reflect.getOwnPropertyDescriptor(i,l);if(c&&"value"in c){var u=r.get(l);u&&(c.value=d(u))}else if(c===void 0){var m=r.get(l),f=m==null?void 0:m.v;if(m!==void 0&&f!==Ee)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return c},has(i,l){var f;if(l===jt)return!0;var c=r.get(l),u=c!==void 0&&c.v!==Ee||Reflect.has(i,l);if(c!==void 0||Z!==null&&(!u||(f=ir(i,l))!=null&&f.writable)){c===void 0&&(c=o(()=>{var v=u?it(i[l]):Ee,p=q(v);return p}),r.set(l,c));var m=d(c);if(m===Ee)return!1}return u},set(i,l,c,u){var A;var m=r.get(l),f=l in i;if(n&&l==="length")for(var v=c;v<m.v;v+=1){var p=r.get(v+"");p!==void 0?b(p,Ee):v in i&&(p=o(()=>q(Ee)),r.set(v+"",p))}if(m===void 0)(!f||(A=ir(i,l))!=null&&A.writable)&&(m=o(()=>q(void 0)),b(m,it(c)),r.set(l,m));else{f=m.v!==Ee;var _=o(()=>it(c));b(m,_)}var h=Reflect.getOwnPropertyDescriptor(i,l);if(h!=null&&h.set&&h.set.call(u,c),!f){if(n&&typeof l=="string"){var y=r.get("length"),C=Number(l);Number.isInteger(C)&&C>=y.v&&b(y,C+1)}Sn(s)}return!0},ownKeys(i){d(s);var l=Reflect.ownKeys(i).filter(m=>{var f=r.get(m);return f===void 0||f.v!==Ee});for(var[c,u]of r)u.v!==Ee&&!(c in i)&&l.push(c);return l},setPrototypeOf(){nd()}})}function Ga(e){try{if(e!==null&&typeof e=="object"&&jt in e)return e[jt]}catch{}return e}function Gd(e,t){return Object.is(Ga(e),Ga(t))}var Vs,Ho,Ko,qo;function Wd(){if(Vs===void 0){Vs=window,Ho=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Ko=ir(t,"firstChild").get,qo=ir(t,"nextSibling").get,Fa(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Fa(r)&&(r.__t=void 0)}}function Ft(e=""){return document.createTextNode(e)}function qt(e){return Ko.call(e)}function Nn(e){return qo.call(e)}function g(e,t){return qt(e)}function H(e,t=!1){{var r=qt(e);return r instanceof Comment&&r.data===""?Nn(r):r}}function M(e,t=1,r=!1){let n=e;for(;t--;)n=Nn(n);return n}function Hd(e){e.textContent=""}function Uo(){return!1}function na(e,t,r){return document.createElementNS(t??Eo,e,void 0)}function Kd(e,t){if(t){const r=document.body;e.autofocus=!0,Dt(()=>{document.activeElement===r&&e.focus()})}}let Wa=!1;function qd(){Wa||(Wa=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function as(e){var t=X,r=Z;mt(null),gt(null);try{return e()}finally{mt(t),gt(r)}}function Ud(e,t,r,n=r){e.addEventListener(t,()=>as(r));const s=e.__on_r;s?e.__on_r=()=>{s(),n(!0)}:e.__on_r=()=>n(!0),qd()}function Yo(e){Z===null&&(X===null&&Ql(),Zl()),vr&&Xl()}function Yd(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Tt(e,t){var r=Z;r!==null&&(r.f&qe)!==0&&(e|=qe);var n={ctx:Ne,deps:null,nodes:null,f:e|De|pt,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null},s=n;if((e&sn)!==0)tn!==null?tn.push(n):Lt(n);else if(t!==null){try{nn(n)}catch(o){throw Fe(n),o}s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&(s.f&on)===0&&(s=s.first,(e&pr)!==0&&(e&fr)!==0&&s!==null&&(s.f|=fr))}if(s!==null&&(s.parent=r,r!==null&&Yd(s,r),X!==null&&(X.f&Ve)!==0&&(e&Lr)===0)){var a=X;(a.effects??(a.effects=[])).push(s)}return n}function sa(){return X!==null&&!Mt}function os(e){const t=Tt(Pr,null);return _e(t,je),t.teardown=e,t}function Jn(e){Yo();var t=Z.f,r=!X&&(t&$t)!==0&&(t&an)===0;if(r){var n=Ne;(n.e??(n.e=[])).push(e)}else return Jo(e)}function Jo(e){return Tt(sn|ko,e)}function Jd(e){return Yo(),Tt(Pr|ko,e)}function Xd(e){dr.ensure();const t=Tt(Lr|on,e);return(r={})=>new Promise(n=>{r.outro?Tr(t,()=>{Fe(t),n(void 0)}):(Fe(t),n(void 0))})}function aa(e){return Tt(sn,e)}function Zd(e){return Tt(Qs|on,e)}function oa(e,t=0){return Tt(Pr|t,e)}function re(e,t=[],r=[],n=[]){Fo(n,t,r,s=>{Tt(Pr,()=>e(...s.map(d)))})}function Pn(e,t=0){var r=Tt(pr|t,e);return r}function Xo(e,t=0){var r=Tt(ns|t,e);return r}function Ze(e){return Tt($t|on,e)}function Zo(e){var t=e.teardown;if(t!==null){const r=vr,n=X;Ha(!0),mt(null);try{t.call(null)}finally{Ha(r),mt(n)}}}function ia(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const s=r.ac;s!==null&&as(()=>{s.abort(wr)});var n=r.next;(r.f&Lr)!==0?r.parent=null:Fe(r,t),r=n}}function Qd(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&$t)===0&&Fe(t),t=r}}function Fe(e,t=!0){var r=!1;(t||(e.f&ql)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Qo(e.nodes.start,e.nodes.end),r=!0),ia(e,t&&!r),An(e,0),_e(e,Rt);var n=e.nodes&&e.nodes.t;if(n!==null)for(const a of n)a.stop();Zo(e);var s=e.parent;s!==null&&s.first!==null&&ei(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=null}function Qo(e,t){for(;e!==null;){var r=e===t?null:Nn(e);e.remove(),e=r}}function ei(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Tr(e,t,r=!0){var n=[];ti(e,n,!0);var s=()=>{r&&Fe(e),t&&t()},a=n.length;if(a>0){var o=()=>--a||s();for(var i of n)i.out(o)}else s()}function ti(e,t,r){if((e.f&qe)===0){e.f^=qe;var n=e.nodes&&e.nodes.t;if(n!==null)for(const i of n)(i.is_global||r)&&t.push(i);for(var s=e.first;s!==null;){var a=s.next,o=(s.f&fr)!==0||(s.f&$t)!==0&&(e.f&pr)!==0;ti(s,t,o?r:!1),s=a}}}function la(e){ri(e,!0)}function ri(e,t){if((e.f&qe)!==0){e.f^=qe;for(var r=e.first;r!==null;){var n=r.next,s=(r.f&fr)!==0||(r.f&$t)!==0;ri(r,s?t:!1),r=n}var a=e.nodes&&e.nodes.t;if(a!==null)for(const o of a)(o.is_global||t)&&o.in()}}function da(e,t){if(e.nodes)for(var r=e.nodes.start,n=e.nodes.end;r!==null;){var s=r===n?null:Nn(r);t.append(r),r=s}}let Un=!1,vr=!1;function Ha(e){vr=e}let X=null,Mt=!1;function mt(e){X=e}let Z=null;function gt(e){Z=e}let ht=null;function ni(e){X!==null&&(ht===null?ht=[e]:ht.push(e))}let Xe=null,st=0,ut=null;function ec(e){ut=e}let si=1,Sr=0,Nr=Sr;function Ka(e){Nr=e}function ai(){return++si}function Cn(e){var t=e.f;if((t&De)!==0)return!0;if(t&Ve&&(e.f&=~Cr),(t&Et)!==0){for(var r=e.deps,n=r.length,s=0;s<n;s++){var a=r[s];if(Cn(a)&&Vo(a),a.wv>e.wv)return!0}(t&pt)!==0&&Oe===null&&_e(e,je)}return!1}function oi(e,t,r=!0){var n=e.reactions;if(n!==null&&!(ht!==null&&Qr.call(ht,e)))for(var s=0;s<n.length;s++){var a=n[s];(a.f&Ve)!==0?oi(a,t,!1):t===a&&(r?_e(a,De):(a.f&je)!==0&&_e(a,Et),Lt(a))}}function ii(e){var _;var t=Xe,r=st,n=ut,s=X,a=ht,o=Ne,i=Mt,l=Nr,c=e.f;Xe=null,st=0,ut=null,X=(c&($t|Lr))===0?e:null,ht=null,en(e.ctx),Mt=!1,Nr=++Sr,e.ac!==null&&(as(()=>{e.ac.abort(wr)}),e.ac=null);try{e.f|=Ns;var u=e.fn,m=u();e.f|=an;var f=e.deps,v=J==null?void 0:J.is_fork;if(Xe!==null){var p;if(v||An(e,st),f!==null&&st>0)for(f.length=st+Xe.length,p=0;p<Xe.length;p++)f[st+p]=Xe[p];else e.deps=f=Xe;if(sa()&&(e.f&pt)!==0)for(p=st;p<f.length;p++)((_=f[p]).reactions??(_.reactions=[])).push(e)}else!v&&f!==null&&st<f.length&&(An(e,st),f.length=st);if($n()&&ut!==null&&!Mt&&f!==null&&(e.f&(Ve|Et|De))===0)for(p=0;p<ut.length;p++)oi(ut[p],e);if(s!==null&&s!==e){if(Sr++,s.deps!==null)for(let h=0;h<r;h+=1)s.deps[h].rv=Sr;if(t!==null)for(const h of t)h.rv=Sr;ut!==null&&(n===null?n=ut:n.push(...ut))}return(e.f&lr)!==0&&(e.f^=lr),m}catch(h){return Co(h)}finally{e.f^=Ns,Xe=t,st=r,ut=n,X=s,ht=a,en(o),Mt=i,Nr=l}}function tc(e,t){let r=t.reactions;if(r!==null){var n=Vl.call(r,e);if(n!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[n]=r[s],r.pop())}}if(r===null&&(t.f&Ve)!==0&&(Xe===null||!Qr.call(Xe,t))){var a=t;(a.f&pt)!==0&&(a.f^=pt,a.f&=~Cr),ea(a),Fd(a),An(a,0)}}function An(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)tc(e,r[n])}function nn(e){var t=e.f;if((t&Rt)===0){_e(e,je);var r=Z,n=Un;Z=e,Un=!0;try{(t&(pr|ns))!==0?Qd(e):ia(e),Zo(e);var s=ii(e);e.teardown=typeof s=="function"?s:null,e.wv=si;var a;Es&&yd&&(e.f&De)!==0&&e.deps}finally{Un=n,Z=r}}}async function rc(){await Promise.resolve(),zd()}function d(e){var t=e.f,r=(t&Ve)!==0;if(X!==null&&!Mt){var n=Z!==null&&(Z.f&Rt)!==0;if(!n&&(ht===null||!Qr.call(ht,e))){var s=X.deps;if((X.f&Ns)!==0)e.rv<Sr&&(e.rv=Sr,Xe===null&&s!==null&&s[st]===e?st++:Xe===null?Xe=[e]:Xe.push(e));else{(X.deps??(X.deps=[])).push(e);var a=e.reactions;a===null?e.reactions=[X]:Qr.call(a,X)||a.push(X)}}}if(vr&&cr.has(e))return cr.get(e);if(r){var o=e;if(vr){var i=o.v;return((o.f&je)===0&&o.reactions!==null||di(o))&&(i=ra(o)),cr.set(o,i),i}var l=(o.f&pt)===0&&!Mt&&X!==null&&(Un||(X.f&pt)!==0),c=(o.f&an)===0;Cn(o)&&(l&&(o.f|=pt),Vo(o)),l&&!c&&(Bo(o),li(o))}if(Oe!=null&&Oe.has(e))return Oe.get(e);if((e.f&lr)!==0)throw e.v;return e.v}function li(e){if(e.f|=pt,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&Ve)!==0&&(t.f&pt)===0&&(Bo(t),li(t))}function di(e){if(e.v===Ee)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(cr.has(t)||(t.f&Ve)!==0&&di(t))return!0;return!1}function Ir(e){var t=Mt;try{return Mt=!0,e()}finally{Mt=t}}function yr(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(jt in e)Bs(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&jt in r&&Bs(r)}}}function Bs(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{Bs(e[n],t)}catch{}const r=Zs(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=_o(r);for(let s in n){const a=n[s].get;if(a)try{a.call(e)}catch{}}}}}function nc(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const sc=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ac(e){return sc.includes(e)}const oc={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function ic(e){return e=e.toLowerCase(),oc[e]??e}const lc=["touchstart","touchmove"];function dc(e){return lc.includes(e)}const Ar=Symbol("events"),ci=new Set,Gs=new Set;function fi(e,t,r,n={}){function s(a){if(n.capture||Ws.call(t,a),!a.cancelBubble)return as(()=>r==null?void 0:r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Dt(()=>{t.addEventListener(e,s,n)}):t.addEventListener(e,s,n),s}function cc(e,t,r,n,s){var a={capture:n,passive:s},o=fi(e,t,r,a);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&os(()=>{t.removeEventListener(e,o,a)})}function Y(e,t,r){(t[Ar]??(t[Ar]={}))[e]=r}function ln(e){for(var t=0;t<e.length;t++)ci.add(e[t]);for(var r of Gs)r(e)}let qa=null;function Ws(e){var h,y;var t=this,r=t.ownerDocument,n=e.type,s=((h=e.composedPath)==null?void 0:h.call(e))||[],a=s[0]||e.target;qa=e;var o=0,i=qa===e&&e[Ar];if(i){var l=s.indexOf(i);if(l!==-1&&(t===document||t===window)){e[Ar]=t;return}var c=s.indexOf(t);if(c===-1)return;l<=c&&(o=l)}if(a=s[o]||e.target,a!==t){Bl(e,"currentTarget",{configurable:!0,get(){return a||r}});var u=X,m=Z;mt(null),gt(null);try{for(var f,v=[];a!==null;){var p=a.assignedSlot||a.parentNode||a.host||null;try{var _=(y=a[Ar])==null?void 0:y[n];_!=null&&(!a.disabled||e.target===a)&&_.call(a,e)}catch(C){f?v.push(C):f=C}if(e.cancelBubble||p===t||p===null)break;a=p}if(f){for(let C of v)queueMicrotask(()=>{throw C});throw f}}finally{e[Ar]=t,delete e.currentTarget,mt(u),gt(m)}}}var bo;const _s=((bo=globalThis==null?void 0:globalThis.window)==null?void 0:bo.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function fc(e){return(_s==null?void 0:_s.createHTML(e))??e}function ui(e){var t=na("template");return t.innerHTML=fc(e.replaceAll("<!>","<!---->")),t.content}function Or(e,t){var r=Z;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function N(e,t){var r=(t&pd)!==0,n=(t&hd)!==0,s,a=!e.startsWith("<!>");return()=>{s===void 0&&(s=ui(a?e:"<!>"+e),r||(s=qt(s)));var o=n||Ho?document.importNode(s,!0):s.cloneNode(!0);if(r){var i=qt(o),l=o.lastChild;Or(i,l)}else Or(o,o);return o}}function uc(e,t,r="svg"){var n=!e.startsWith("<!>"),s=`<${r}>${n?e:"<!>"+e}</${r}>`,a;return()=>{if(!a){var o=ui(s),i=qt(o);a=qt(i)}var l=a.cloneNode(!0);return Or(l,l),l}}function vc(e,t){return uc(e,t,"svg")}function Yn(e=""){{var t=Ft(e+"");return Or(t,t),t}}function oe(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Ft();return e.append(t,r),Or(t,r),e}function S(e,t){e!==null&&e.before(t)}function se(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=`${r}`)}function pc(e,t){return hc(e,t)}const Vn=new Map;function hc(e,{target:t,anchor:r,props:n={},events:s,context:a,intro:o=!0,transformError:i}){Wd();var l=void 0,c=Xd(()=>{var u=r??t.appendChild(Ft());Td(u,{pending:()=>{}},v=>{Ut({});var p=Ne;a&&(p.c=a),s&&(n.$$events=s),l=e(v,n)||{},Yt()},i);var m=new Set,f=v=>{for(var p=0;p<v.length;p++){var _=v[p];if(!m.has(_)){m.add(_);var h=dc(_);for(const A of[t,document]){var y=Vn.get(A);y===void 0&&(y=new Map,Vn.set(A,y));var C=y.get(_);C===void 0?(A.addEventListener(_,Ws,{passive:h}),y.set(_,1)):y.set(_,C+1)}}}};return f(rs(ci)),Gs.add(f),()=>{var h;for(var v of m)for(const y of[t,document]){var p=Vn.get(y),_=p.get(v);--_==0?(y.removeEventListener(v,Ws),p.delete(v),p.size===0&&Vn.delete(y)):p.set(v,_)}Gs.delete(f),u!==r&&((h=u.parentNode)==null||h.removeChild(u))}});return mc.set(l,c),l}let mc=new WeakMap;var zt,It,ot,$r,zn,Mn,ts;class ca{constructor(t,r=!0){kt(this,"anchor");ee(this,zt,new Map);ee(this,It,new Map);ee(this,ot,new Map);ee(this,$r,new Set);ee(this,zn,!0);ee(this,Mn,t=>{if(x(this,zt).has(t)){var r=x(this,zt).get(t),n=x(this,It).get(r);if(n)la(n),x(this,$r).delete(r);else{var s=x(this,ot).get(r);s&&(s.effect.f&qe)===0&&(x(this,It).set(r,s.effect),x(this,ot).delete(r),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),n=s.effect)}for(const[a,o]of x(this,zt)){if(x(this,zt).delete(a),a===t)break;const i=x(this,ot).get(o);i&&(Fe(i.effect),x(this,ot).delete(o))}for(const[a,o]of x(this,It)){if(a===r||x(this,$r).has(a)||(o.f&qe)!==0)continue;const i=()=>{if(Array.from(x(this,zt).values()).includes(a)){var c=document.createDocumentFragment();da(o,c),c.append(Ft()),x(this,ot).set(a,{effect:o,fragment:c})}else Fe(o);x(this,$r).delete(a),x(this,It).delete(a)};x(this,zn)||!n?(x(this,$r).add(a),Tr(o,i,!1)):i()}}});ee(this,ts,t=>{x(this,zt).delete(t);const r=Array.from(x(this,zt).values());for(const[n,s]of x(this,ot))r.includes(n)||(Fe(s.effect),x(this,ot).delete(n))});this.anchor=t,U(this,zn,r)}ensure(t,r){var n=J,s=Uo();if(r&&!x(this,It).has(t)&&!x(this,ot).has(t))if(s){var a=document.createDocumentFragment(),o=Ft();a.append(o),x(this,ot).set(t,{effect:Ze(()=>r(o)),fragment:a})}else x(this,It).set(t,Ze(()=>r(this.anchor)));if(x(this,zt).set(n,t),s){for(const[i,l]of x(this,It))i===t?n.unskip_effect(l):n.skip_effect(l);for(const[i,l]of x(this,ot))i===t?n.unskip_effect(l.effect):n.skip_effect(l.effect);n.oncommit(x(this,Mn)),n.ondiscard(x(this,ts))}else x(this,Mn).call(this,n)}}zt=new WeakMap,It=new WeakMap,ot=new WeakMap,$r=new WeakMap,zn=new WeakMap,Mn=new WeakMap,ts=new WeakMap;function G(e,t,r=!1){var n=new ca(e),s=r?fr:0;function a(o,i){n.ensure(o,i)}Pn(()=>{var o=!1;t((i,l=0)=>{o=!0,a(l,i)}),o||a(-1,null)},s)}function Qe(e,t){return t}function gc(e,t,r){for(var n=[],s=t.length,a,o=t.length,i=0;i<s;i++){let m=t[i];Tr(m,()=>{if(a){if(a.pending.delete(m),a.done.add(m),a.pending.size===0){var f=e.outrogroups;Hs(e,rs(a.done)),f.delete(a),f.size===0&&(e.outrogroups=null)}}else o-=1},!1)}if(o===0){var l=n.length===0&&r!==null;if(l){var c=r,u=c.parentNode;Hd(u),u.append(c),e.items.clear()}Hs(e,t,!l)}else a={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(a)}function Hs(e,t,r=!0){var n;if(e.pending.size>0){n=new Set;for(const o of e.pending.values())for(const i of o)n.add(e.items.get(i).e)}for(var s=0;s<t.length;s++){var a=t[s];if(n!=null&&n.has(a)){a.f|=Ot;const o=document.createDocumentFragment();da(a,o)}else Fe(t[s],r)}}var Ua;function et(e,t,r,n,s,a=null){var o=e,i=new Map,l=(t&zo)!==0;if(l){var c=e;o=c.appendChild(Ft())}var u=null,m=ta(()=>{var A=r();return Xs(A)?A:A==null?[]:rs(A)}),f,v=new Map,p=!0;function _(A){(C.effect.f&Rt)===0&&(C.pending.delete(A),C.fallback=u,bc(C,f,o,t,n),u!==null&&(f.length===0?(u.f&Ot)===0?la(u):(u.f^=Ot,yn(u,null,o)):Tr(u,()=>{u=null})))}function h(A){C.pending.delete(A)}var y=Pn(()=>{f=d(m);for(var A=f.length,w=new Set,E=J,T=Uo(),O=0;O<A;O+=1){var z=f[O],W=n(z,O),le=p?null:i.get(W);le?(le.v&&rn(le.v,z),le.i&&rn(le.i,O),T&&E.unskip_effect(le.e)):(le=xc(i,p?o:Ua??(Ua=Ft()),z,W,O,s,t,r),p||(le.e.f|=Ot),i.set(W,le)),w.add(W)}if(A===0&&a&&!u&&(p?u=Ze(()=>a(o)):(u=Ze(()=>a(Ua??(Ua=Ft()))),u.f|=Ot)),A>w.size&&Jl(),!p)if(v.set(E,w),T){for(const[B,j]of i)w.has(B)||E.skip_effect(j.e);E.oncommit(_),E.ondiscard(h)}else _(E);d(m)}),C={effect:y,items:i,pending:v,outrogroups:null,fallback:u};p=!1}function gn(e){for(;e!==null&&(e.f&$t)===0;)e=e.next;return e}function bc(e,t,r,n,s){var le,B,j,L,pe,ie,ne,Q,F;var a=(n&ld)!==0,o=t.length,i=e.items,l=gn(e.effect.first),c,u=null,m,f=[],v=[],p,_,h,y;if(a)for(y=0;y<o;y+=1)p=t[y],_=s(p,y),h=i.get(_).e,(h.f&Ot)===0&&((B=(le=h.nodes)==null?void 0:le.a)==null||B.measure(),(m??(m=new Set)).add(h));for(y=0;y<o;y+=1){if(p=t[y],_=s(p,y),h=i.get(_).e,e.outrogroups!==null)for(const V of e.outrogroups)V.pending.delete(h),V.done.delete(h);if((h.f&Ot)!==0)if(h.f^=Ot,h===l)yn(h,null,r);else{var C=u?u.next:l;h===e.effect.last&&(e.effect.last=h.prev),h.prev&&(h.prev.next=h.next),h.next&&(h.next.prev=h.prev),er(e,u,h),er(e,h,C),yn(h,C,r),u=h,f=[],v=[],l=gn(u.next);continue}if((h.f&qe)!==0&&(la(h),a&&((L=(j=h.nodes)==null?void 0:j.a)==null||L.unfix(),(m??(m=new Set)).delete(h))),h!==l){if(c!==void 0&&c.has(h)){if(f.length<v.length){var A=v[0],w;u=A.prev;var E=f[0],T=f[f.length-1];for(w=0;w<f.length;w+=1)yn(f[w],A,r);for(w=0;w<v.length;w+=1)c.delete(v[w]);er(e,E.prev,T.next),er(e,u,E),er(e,T,A),l=A,u=T,y-=1,f=[],v=[]}else c.delete(h),yn(h,l,r),er(e,h.prev,h.next),er(e,h,u===null?e.effect.first:u.next),er(e,u,h),u=h;continue}for(f=[],v=[];l!==null&&l!==h;)(c??(c=new Set)).add(l),v.push(l),l=gn(l.next);if(l===null)continue}(h.f&Ot)===0&&f.push(h),u=h,l=gn(h.next)}if(e.outrogroups!==null){for(const V of e.outrogroups)V.pending.size===0&&(Hs(e,rs(V.done)),(pe=e.outrogroups)==null||pe.delete(V));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||c!==void 0){var O=[];if(c!==void 0)for(h of c)(h.f&qe)===0&&O.push(h);for(;l!==null;)(l.f&qe)===0&&l!==e.fallback&&O.push(l),l=gn(l.next);var z=O.length;if(z>0){var W=(n&zo)!==0&&o===0?r:null;if(a){for(y=0;y<z;y+=1)(ne=(ie=O[y].nodes)==null?void 0:ie.a)==null||ne.measure();for(y=0;y<z;y+=1)(F=(Q=O[y].nodes)==null?void 0:Q.a)==null||F.fix()}gc(e,O,W)}}a&&Dt(()=>{var V,$;if(m!==void 0)for(h of m)($=(V=h.nodes)==null?void 0:V.a)==null||$.apply()})}function xc(e,t,r,n,s,a,o,i){var l=(o&od)!==0?(o&dd)===0?Vd(r,!1,!1):ur(r):null,c=(o&id)!==0?ur(s):null;return{v:l,i:c,e:Ze(()=>(a(t,l??r,c??s,i),()=>{e.delete(n)}))}}function yn(e,t,r){if(e.nodes)for(var n=e.nodes.start,s=e.nodes.end,a=t&&(t.f&Ot)===0?t.nodes.start:r;n!==null;){var o=Nn(n);if(a.before(n),n===s)return;n=o}}function er(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function Ya(e,t,r=!1,n=!1,s=!1){var a=e,o="";re(()=>{var i=Z;if(o!==(o=t()??"")&&(i.nodes!==null&&(Qo(i.nodes.start,i.nodes.end),i.nodes=null),o!=="")){var l=r?$o:n?md:void 0,c=na(r?"svg":n?"math":"template",l);c.innerHTML=o;var u=r||n?c:c.content;if(Or(qt(u),u.lastChild),r||n)for(;qt(u);)a.before(qt(u));else a.before(u)}})}function fe(e,t,r,n,s){var i;var a=(i=t.$$slots)==null?void 0:i[r],o=!1;a===!0&&(a=t.children,o=!0),a===void 0||a(e,o?()=>n:n)}function Ks(e,t,...r){var n=new ca(e);Pn(()=>{const s=t()??null;n.ensure(s,s&&(a=>s(a,...r)))},fr)}function _c(e,t,r,n,s,a){var o=null,i=e,l=new ca(i,!1);Pn(()=>{const c=t()||null;var u=$o;if(c===null){l.ensure(null,null);return}return l.ensure(c,m=>{if(c){if(o=na(c,u),Or(o,o),n){var f=o.appendChild(Ft());n(o,f)}Z.nodes.end=o,m.before(o)}}),()=>{}},fr),os(()=>{})}function yc(e,t){var r=void 0,n;Xo(()=>{r!==(r=t())&&(n&&(Fe(n),n=null),r&&(n=Ze(()=>{aa(()=>r(e))})))})}function vi(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(r=vi(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function pi(){for(var e,t,r=0,n="",s=arguments.length;r<s;r++)(e=arguments[r])&&(t=vi(e))&&(n&&(n+=" "),n+=t);return n}function Le(e){return typeof e=="object"?pi(e):e??""}const Ja=[...` 	
\r\f \v\uFEFF`];function wc(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var s of Object.keys(r))if(r[s])n=n?n+" "+s:s;else if(n.length)for(var a=s.length,o=0;(o=n.indexOf(s,o))>=0;){var i=o+a;(o===0||Ja.includes(n[o-1]))&&(i===n.length||Ja.includes(n[i]))?n=(o===0?"":n.substring(0,o))+n.substring(i+1):o=i}}return n===""?null:n}function Xa(e,t=!1){var r=t?" !important;":";",n="";for(var s of Object.keys(e)){var a=e[s];a!=null&&a!==""&&(n+=" "+s+": "+a+r)}return n}function ys(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function kc(e,t){if(t){var r="",n,s;if(Array.isArray(t)?(n=t[0],s=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var a=!1,o=0,i=!1,l=[];n&&l.push(...Object.keys(n).map(ys)),s&&l.push(...Object.keys(s).map(ys));var c=0,u=-1;const _=e.length;for(var m=0;m<_;m++){var f=e[m];if(i?f==="/"&&e[m-1]==="*"&&(i=!1):a?a===f&&(a=!1):f==="/"&&e[m+1]==="*"?i=!0:f==='"'||f==="'"?a=f:f==="("?o++:f===")"&&o--,!i&&a===!1&&o===0){if(f===":"&&u===-1)u=m;else if(f===";"||m===_-1){if(u!==-1){var v=ys(e.substring(c,u).trim());if(!l.includes(v)){f!==";"&&m++;var p=e.substring(c,m).trim();r+=" "+p+";"}}c=m+1,u=-1}}}}return n&&(r+=Xa(n)),s&&(r+=Xa(s,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function Re(e,t,r,n,s,a){var o=e.__className;if(o!==r||o===void 0){var i=wc(r,n,a);i==null?e.removeAttribute("class"):t?e.className=i:e.setAttribute("class",i),e.__className=r}else if(a&&s!==a)for(var l in a){var c=!!a[l];(s==null||c!==!!s[l])&&e.classList.toggle(l,c)}return a}function ws(e,t={},r,n){for(var s in r){var a=r[s];t[s]!==a&&(r[s]==null?e.style.removeProperty(s):e.style.setProperty(s,a,n))}}function hi(e,t,r,n){var s=e.__style;if(s!==t){var a=kc(t,n);a==null?e.removeAttribute("style"):e.style.cssText=a,e.__style=t}else n&&(Array.isArray(n)?(ws(e,r==null?void 0:r[0],n[0]),ws(e,r==null?void 0:r[1],n[1],"important")):ws(e,r,n));return n}function qs(e,t,r=!1){if(e.multiple){if(t==null)return;if(!Xs(t))return bd();for(var n of e.options)n.selected=t.includes(Za(n));return}for(n of e.options){var s=Za(n);if(Gd(s,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function Sc(e){var t=new MutationObserver(()=>{qs(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),os(()=>{t.disconnect()})}function Za(e){return"__value"in e?e.__value:e.value}const bn=Symbol("class"),xn=Symbol("style"),mi=Symbol("is custom element"),gi=Symbol("is html"),Ac=Ao?"option":"OPTION",zc=Ao?"select":"SELECT";function Mc(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Xn(e,t,r,n){var s=bi(e);s[t]!==(s[t]=r)&&(t==="loading"&&(e[Ul]=r),r==null?e.removeAttribute(t):typeof r!="string"&&xi(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function Ec(e,t,r,n,s=!1,a=!1){var o=bi(e),i=o[mi],l=!o[gi],c=t||{},u=e.nodeName===Ac;for(var m in t)m in r||(r[m]=null);r.class?r.class=Le(r.class):r[bn]&&(r.class=null),r[xn]&&(r.style??(r.style=null));var f=xi(e);for(const w in r){let E=r[w];if(u&&w==="value"&&E==null){e.value=e.__value="",c[w]=E;continue}if(w==="class"){var v=e.namespaceURI==="http://www.w3.org/1999/xhtml";Re(e,v,E,n,t==null?void 0:t[bn],r[bn]),c[w]=E,c[bn]=r[bn];continue}if(w==="style"){hi(e,E,t==null?void 0:t[xn],r[xn]),c[w]=E,c[xn]=r[xn];continue}var p=c[w];if(!(E===p&&!(E===void 0&&e.hasAttribute(w)))){c[w]=E;var _=w[0]+w[1];if(_!=="$$")if(_==="on"){const T={},O="$$"+w;let z=w.slice(2);var h=ac(z);if(nc(z)&&(z=z.slice(0,-7),T.capture=!0),!h&&p){if(E!=null)continue;e.removeEventListener(z,c[O],T),c[O]=null}if(h)Y(z,e,E),ln([z]);else if(E!=null){let W=function(le){c[w].call(this,le)};var A=W;c[O]=fi(z,e,W,T)}}else if(w==="style")Xn(e,w,E);else if(w==="autofocus")Kd(e,!!E);else if(!i&&(w==="__value"||w==="value"&&E!=null))e.value=e.__value=E;else if(w==="selected"&&u)Mc(e,E);else{var y=w;l||(y=ic(y));var C=y==="defaultValue"||y==="defaultChecked";if(E==null&&!i&&!C)if(o[w]=null,y==="value"||y==="checked"){let T=e;const O=t===void 0;if(y==="value"){let z=T.defaultValue;T.removeAttribute(y),T.defaultValue=z,T.value=T.__value=O?z:null}else{let z=T.defaultChecked;T.removeAttribute(y),T.defaultChecked=z,T.checked=O?z:!1}}else e.removeAttribute(w);else C||f.includes(y)&&(i||typeof E!="string")?(e[y]=E,y in o&&(o[y]=Ee)):typeof E!="function"&&Xn(e,y,E)}}}return c}function Zn(e,t,r=[],n=[],s=[],a,o=!1,i=!1){Fo(s,r,n,l=>{var c=void 0,u={},m=e.nodeName===zc,f=!1;if(Xo(()=>{var p=t(...l.map(d)),_=Ec(e,c,p,a,o,i);f&&m&&"value"in p&&qs(e,p.value);for(let y of Object.getOwnPropertySymbols(u))p[y]||Fe(u[y]);for(let y of Object.getOwnPropertySymbols(p)){var h=p[y];y.description===gd&&(!c||h!==c[y])&&(u[y]&&Fe(u[y]),u[y]=Ze(()=>yc(e,()=>h))),_[y]=h}c=_}),m){var v=e;aa(()=>{qs(v,c.value,!0),Sc(v)})}f=!0})}function bi(e){return e.__attributes??(e.__attributes={[mi]:e.nodeName.includes("-"),[gi]:e.namespaceURI===Eo})}var Qa=new Map;function xi(e){var t=e.getAttribute("is")||e.nodeName,r=Qa.get(t);if(r)return r;Qa.set(t,r=[]);for(var n,s=e,a=Element.prototype;a!==s;){n=_o(s);for(var o in n)n[o].set&&r.push(o);s=Zs(s)}return r}function Wr(e,t,r=t){var n=new WeakSet;Ud(e,"input",async s=>{var a=s?e.defaultValue:e.value;if(a=ks(e)?Ss(a):a,r(a),J!==null&&n.add(J),await rc(),a!==(a=t())){var o=e.selectionStart,i=e.selectionEnd,l=e.value.length;if(e.value=a??"",i!==null){var c=e.value.length;o===i&&i===l&&c>l?(e.selectionStart=c,e.selectionEnd=c):(e.selectionStart=o,e.selectionEnd=Math.min(i,c))}}}),Ir(t)==null&&e.value&&(r(ks(e)?Ss(e.value):e.value),J!==null&&n.add(J)),oa(()=>{var s=t();if(e===document.activeElement){var a=Ps??J;if(n.has(a))return}ks(e)&&s===Ss(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function ks(e){var t=e.type;return t==="number"||t==="range"}function Ss(e){return e===""?null:+e}function eo(e,t){return e===t||(e==null?void 0:e[jt])===t}function _i(e={},t,r,n){return aa(()=>{var s,a;return oa(()=>{s=a,a=[],Ir(()=>{e!==r(...a)&&(t(e,...a),s&&eo(r(...s),e)&&t(null,...s))})}),()=>{Dt(()=>{a&&eo(r(...a),e)&&t(null,...a)})}}),e}function $c(e=!1){const t=Ne,r=t.l.u;if(!r)return;let n=()=>yr(t.s);if(e){let s=0,a={};const o=Tn(()=>{let i=!1;const l=t.s;for(const c in l)l[c]!==a[c]&&(a[c]=l[c],i=!0);return i&&s++,s});n=()=>d(o)}r.b.length&&Jd(()=>{to(t,n),$s(r.b)}),Jn(()=>{const s=Ir(()=>r.m.map(Kl));return()=>{for(const a of s)typeof a=="function"&&a()}}),r.a.length&&Jn(()=>{to(t,n),$s(r.a)})}function to(e,t){if(e.l.s)for(const r of e.l.s)d(r);t()}let Bn=!1;function Tc(e){var t=Bn;try{return Bn=!1,[e(),Bn]}finally{Bn=t}}const Nc={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function Pc(e,t,r){return new Proxy({props:e,exclude:t},Nc)}const Cc={get(e,t){if(!e.exclude.includes(t))return d(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var n=Z;try{gt(e.parent_effect),e.special[t]=$e({get[t](){return e.props[t]}},t,Mo)}finally{gt(n)}}return e.special[t](r),kn(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),kn(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ce(e,t){return new Proxy({props:e,exclude:t,special:{},version:ur(0),parent_effect:Z},Cc)}const Ic={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(mn(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let s=e.props[n];mn(s)&&(s=s());const a=ir(s,t);if(a&&a.set)return a.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(mn(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const s=ir(n,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===jt||t===So)return!1;for(let r of e.props)if(mn(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(mn(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function ue(...e){return new Proxy({props:e},Ic)}function $e(e,t,r,n){var A;var s=!En||(r&fd)!==0,a=(r&ud)!==0,o=(r&vd)!==0,i=n,l=!0,c=()=>(l&&(l=!1,i=o?Ir(n):n),i),u;if(a){var m=jt in e||So in e;u=((A=ir(e,t))==null?void 0:A.set)??(m&&t in e?w=>e[t]=w:void 0)}var f,v=!1;a?[f,v]=Tc(()=>e[t]):f=e[t],f===void 0&&n!==void 0&&(f=c(),u&&(s&&td(),u(f)));var p;if(s?p=()=>{var w=e[t];return w===void 0?c():(l=!0,w)}:p=()=>{var w=e[t];return w!==void 0&&(i=void 0),w===void 0?i:w},s&&(r&Mo)===0)return p;if(u){var _=e.$$legacy;return(function(w,E){return arguments.length>0?((!s||!E||_||v)&&u(E?p():w),w):p()})}var h=!1,y=((r&cd)!==0?Tn:ta)(()=>(h=!1,p()));a&&d(y);var C=Z;return(function(w,E){if(arguments.length>0){const T=E?d(y):s&&a?it(w):w;return b(y,T),h=!0,i!==void 0&&(i=T),w}return vr&&h||(C.f&Rt)!==0?y.v:d(y)})}const Oc="5";var xo;typeof window<"u"&&((xo=window.__svelte??(window.__svelte={})).v??(xo.v=new Set)).add(Oc);const In="";async function Lc(){const e=await fetch(`${In}/api/status`);if(!e.ok)throw new Error("상태 확인 실패");return e.json()}async function Gr(e,t=null,r=null){const n={provider:e};t&&(n.model=t),r&&(n.api_key=r);const s=await fetch(`${In}/api/configure`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!s.ok)throw new Error("설정 실패");return s.json()}async function Rc(e){const t=await fetch(`${In}/api/models/${encodeURIComponent(e)}`);return t.ok?t.json():{models:[]}}function jc(e,{onProgress:t,onDone:r,onError:n}){const s=new AbortController;return fetch(`${In}/api/ollama/pull`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:e}),signal:s.signal}).then(async a=>{if(!a.ok){n==null||n("다운로드 실패");return}const o=a.body.getReader(),i=new TextDecoder;let l="";for(;;){const{done:c,value:u}=await o.read();if(c)break;l+=i.decode(u,{stream:!0});const m=l.split(`
`);l=m.pop()||"";for(const f of m)if(f.startsWith("data:"))try{const v=JSON.parse(f.slice(5).trim());v.total&&v.completed!==void 0?t==null||t({total:v.total,completed:v.completed,status:v.status}):v.status&&(t==null||t({status:v.status}))}catch{}}r==null||r()}).catch(a=>{a.name!=="AbortError"&&(n==null||n(a.message))}),{abort:()=>s.abort()}}function Dc(e,t,r={},{onMeta:n,onSnapshot:s,onContext:a,onToolCall:o,onToolResult:i,onChunk:l,onDone:c,onError:u},m=null){const f={question:t,stream:!0,...r};m&&m.length>0&&(f.history=m);const v=new AbortController;return fetch(`${In}/api/ask`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(f),signal:v.signal}).then(async p=>{if(!p.ok){const w=await p.json().catch(()=>({}));u==null||u(w.detail||"스트리밍 실패");return}const _=p.body.getReader(),h=new TextDecoder;let y="",C=!1;for(;;){const{done:w,value:E}=await _.read();if(w)break;y+=h.decode(E,{stream:!0});const T=y.split(`
`);y=T.pop()||"";for(const O of T)if(O.startsWith("event:"))var A=O.slice(6).trim();else if(O.startsWith("data:")&&A){const z=O.slice(5).trim();try{const W=JSON.parse(z);A==="meta"?n==null||n(W):A==="snapshot"?s==null||s(W):A==="context"?a==null||a(W):A==="tool_call"?o==null||o(W):A==="tool_result"?i==null||i(W):A==="chunk"?l==null||l(W.text):A==="error"?u==null||u(W.error):A==="done"&&(C||(C=!0,c==null||c()))}catch{}A=null}}C||(C=!0,c==null||c())}).catch(p=>{p.name!=="AbortError"&&(u==null||u(p.message))}),{abort:()=>v.abort()}}const Fc=(e,t)=>{const r=new Array(e.length+t.length);for(let n=0;n<e.length;n++)r[n]=e[n];for(let n=0;n<t.length;n++)r[e.length+n]=t[n];return r},Vc=(e,t)=>({classGroupId:e,validator:t}),yi=(e=new Map,t=null,r)=>({nextPart:e,validators:t,classGroupId:r}),Qn="-",ro=[],Bc="arbitrary..",Gc=e=>{const t=Hc(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:n}=e;return{getClassGroupId:o=>{if(o.startsWith("[")&&o.endsWith("]"))return Wc(o);const i=o.split(Qn),l=i[0]===""&&i.length>1?1:0;return wi(i,l,t)},getConflictingClassGroupIds:(o,i)=>{if(i){const l=n[o],c=r[o];return l?c?Fc(c,l):l:c||ro}return r[o]||ro}}},wi=(e,t,r)=>{if(e.length-t===0)return r.classGroupId;const s=e[t],a=r.nextPart.get(s);if(a){const c=wi(e,t+1,a);if(c)return c}const o=r.validators;if(o===null)return;const i=t===0?e.join(Qn):e.slice(t).join(Qn),l=o.length;for(let c=0;c<l;c++){const u=o[c];if(u.validator(i))return u.classGroupId}},Wc=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const t=e.slice(1,-1),r=t.indexOf(":"),n=t.slice(0,r);return n?Bc+n:void 0})(),Hc=e=>{const{theme:t,classGroups:r}=e;return Kc(r,t)},Kc=(e,t)=>{const r=yi();for(const n in e){const s=e[n];fa(s,r,n,t)}return r},fa=(e,t,r,n)=>{const s=e.length;for(let a=0;a<s;a++){const o=e[a];qc(o,t,r,n)}},qc=(e,t,r,n)=>{if(typeof e=="string"){Uc(e,t,r);return}if(typeof e=="function"){Yc(e,t,r,n);return}Jc(e,t,r,n)},Uc=(e,t,r)=>{const n=e===""?t:ki(t,e);n.classGroupId=r},Yc=(e,t,r,n)=>{if(Xc(e)){fa(e(n),t,r,n);return}t.validators===null&&(t.validators=[]),t.validators.push(Vc(r,e))},Jc=(e,t,r,n)=>{const s=Object.entries(e),a=s.length;for(let o=0;o<a;o++){const[i,l]=s[o];fa(l,ki(t,i),r,n)}},ki=(e,t)=>{let r=e;const n=t.split(Qn),s=n.length;for(let a=0;a<s;a++){const o=n[a];let i=r.nextPart.get(o);i||(i=yi(),r.nextPart.set(o,i)),r=i}return r},Xc=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,Zc=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,r=Object.create(null),n=Object.create(null);const s=(a,o)=>{r[a]=o,t++,t>e&&(t=0,n=r,r=Object.create(null))};return{get(a){let o=r[a];if(o!==void 0)return o;if((o=n[a])!==void 0)return s(a,o),o},set(a,o){a in r?r[a]=o:s(a,o)}}},Us="!",no=":",Qc=[],so=(e,t,r,n,s)=>({modifiers:e,hasImportantModifier:t,baseClassName:r,maybePostfixModifierPosition:n,isExternal:s}),ef=e=>{const{prefix:t,experimentalParseClassName:r}=e;let n=s=>{const a=[];let o=0,i=0,l=0,c;const u=s.length;for(let _=0;_<u;_++){const h=s[_];if(o===0&&i===0){if(h===no){a.push(s.slice(l,_)),l=_+1;continue}if(h==="/"){c=_;continue}}h==="["?o++:h==="]"?o--:h==="("?i++:h===")"&&i--}const m=a.length===0?s:s.slice(l);let f=m,v=!1;m.endsWith(Us)?(f=m.slice(0,-1),v=!0):m.startsWith(Us)&&(f=m.slice(1),v=!0);const p=c&&c>l?c-l:void 0;return so(a,v,f,p)};if(t){const s=t+no,a=n;n=o=>o.startsWith(s)?a(o.slice(s.length)):so(Qc,!1,o,void 0,!0)}if(r){const s=n;n=a=>r({className:a,parseClassName:s})}return n},tf=e=>{const t=new Map;return e.orderSensitiveModifiers.forEach((r,n)=>{t.set(r,1e6+n)}),r=>{const n=[];let s=[];for(let a=0;a<r.length;a++){const o=r[a],i=o[0]==="[",l=t.has(o);i||l?(s.length>0&&(s.sort(),n.push(...s),s=[]),n.push(o)):s.push(o)}return s.length>0&&(s.sort(),n.push(...s)),n}},rf=e=>({cache:Zc(e.cacheSize),parseClassName:ef(e),sortModifiers:tf(e),...Gc(e)}),nf=/\s+/,sf=(e,t)=>{const{parseClassName:r,getClassGroupId:n,getConflictingClassGroupIds:s,sortModifiers:a}=t,o=[],i=e.trim().split(nf);let l="";for(let c=i.length-1;c>=0;c-=1){const u=i[c],{isExternal:m,modifiers:f,hasImportantModifier:v,baseClassName:p,maybePostfixModifierPosition:_}=r(u);if(m){l=u+(l.length>0?" "+l:l);continue}let h=!!_,y=n(h?p.substring(0,_):p);if(!y){if(!h){l=u+(l.length>0?" "+l:l);continue}if(y=n(p),!y){l=u+(l.length>0?" "+l:l);continue}h=!1}const C=f.length===0?"":f.length===1?f[0]:a(f).join(":"),A=v?C+Us:C,w=A+y;if(o.indexOf(w)>-1)continue;o.push(w);const E=s(y,h);for(let T=0;T<E.length;++T){const O=E[T];o.push(A+O)}l=u+(l.length>0?" "+l:l)}return l},af=(...e)=>{let t=0,r,n,s="";for(;t<e.length;)(r=e[t++])&&(n=Si(r))&&(s&&(s+=" "),s+=n);return s},Si=e=>{if(typeof e=="string")return e;let t,r="";for(let n=0;n<e.length;n++)e[n]&&(t=Si(e[n]))&&(r&&(r+=" "),r+=t);return r},of=(e,...t)=>{let r,n,s,a;const o=l=>{const c=t.reduce((u,m)=>m(u),e());return r=rf(c),n=r.cache.get,s=r.cache.set,a=i,i(l)},i=l=>{const c=n(l);if(c)return c;const u=sf(l,r);return s(l,u),u};return a=o,(...l)=>a(af(...l))},lf=[],ze=e=>{const t=r=>r[e]||lf;return t.isThemeGetter=!0,t},Ai=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,zi=/^\((?:(\w[\w-]*):)?(.+)\)$/i,df=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,cf=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,ff=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,uf=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,vf=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,pf=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,tr=e=>df.test(e),K=e=>!!e&&!Number.isNaN(Number(e)),rr=e=>!!e&&Number.isInteger(Number(e)),As=e=>e.endsWith("%")&&K(e.slice(0,-1)),Gt=e=>cf.test(e),Mi=()=>!0,hf=e=>ff.test(e)&&!uf.test(e),ua=()=>!1,mf=e=>vf.test(e),gf=e=>pf.test(e),bf=e=>!P(e)&&!I(e),xf=e=>hr(e,Ti,ua),P=e=>Ai.test(e),_r=e=>hr(e,Ni,hf),ao=e=>hr(e,Mf,K),_f=e=>hr(e,Ci,Mi),yf=e=>hr(e,Pi,ua),oo=e=>hr(e,Ei,ua),wf=e=>hr(e,$i,gf),Gn=e=>hr(e,Ii,mf),I=e=>zi.test(e),_n=e=>Rr(e,Ni),kf=e=>Rr(e,Pi),io=e=>Rr(e,Ei),Sf=e=>Rr(e,Ti),Af=e=>Rr(e,$i),Wn=e=>Rr(e,Ii,!0),zf=e=>Rr(e,Ci,!0),hr=(e,t,r)=>{const n=Ai.exec(e);return n?n[1]?t(n[1]):r(n[2]):!1},Rr=(e,t,r=!1)=>{const n=zi.exec(e);return n?n[1]?t(n[1]):r:!1},Ei=e=>e==="position"||e==="percentage",$i=e=>e==="image"||e==="url",Ti=e=>e==="length"||e==="size"||e==="bg-size",Ni=e=>e==="length",Mf=e=>e==="number",Pi=e=>e==="family-name",Ci=e=>e==="number"||e==="weight",Ii=e=>e==="shadow",Ef=()=>{const e=ze("color"),t=ze("font"),r=ze("text"),n=ze("font-weight"),s=ze("tracking"),a=ze("leading"),o=ze("breakpoint"),i=ze("container"),l=ze("spacing"),c=ze("radius"),u=ze("shadow"),m=ze("inset-shadow"),f=ze("text-shadow"),v=ze("drop-shadow"),p=ze("blur"),_=ze("perspective"),h=ze("aspect"),y=ze("ease"),C=ze("animate"),A=()=>["auto","avoid","all","avoid-page","page","left","right","column"],w=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],E=()=>[...w(),I,P],T=()=>["auto","hidden","clip","visible","scroll"],O=()=>["auto","contain","none"],z=()=>[I,P,l],W=()=>[tr,"full","auto",...z()],le=()=>[rr,"none","subgrid",I,P],B=()=>["auto",{span:["full",rr,I,P]},rr,I,P],j=()=>[rr,"auto",I,P],L=()=>["auto","min","max","fr",I,P],pe=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],ie=()=>["start","end","center","stretch","center-safe","end-safe"],ne=()=>["auto",...z()],Q=()=>[tr,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...z()],F=()=>[tr,"screen","full","dvw","lvw","svw","min","max","fit",...z()],V=()=>[tr,"screen","full","lh","dvh","lvh","svh","min","max","fit",...z()],$=()=>[e,I,P],Be=()=>[...w(),io,oo,{position:[I,P]}],ye=()=>["no-repeat",{repeat:["","x","y","space","round"]}],Ge=()=>["auto","cover","contain",Sf,xf,{size:[I,P]}],lt=()=>[As,_n,_r],ke=()=>["","none","full",c,I,P],Pe=()=>["",K,_n,_r],mr=()=>["solid","dashed","dotted","double"],On=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],we=()=>[K,As,io,oo],Ln=()=>["","none",p,I,P],jr=()=>["none",K,I,P],Jt=()=>["none",K,I,P],dn=()=>[K,I,P],gr=()=>[tr,"full",...z()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Gt],breakpoint:[Gt],color:[Mi],container:[Gt],"drop-shadow":[Gt],ease:["in","out","in-out"],font:[bf],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Gt],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Gt],shadow:[Gt],spacing:["px",K],text:[Gt],"text-shadow":[Gt],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",tr,P,I,h]}],container:["container"],columns:[{columns:[K,P,I,i]}],"break-after":[{"break-after":A()}],"break-before":[{"break-before":A()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:E()}],overflow:[{overflow:T()}],"overflow-x":[{"overflow-x":T()}],"overflow-y":[{"overflow-y":T()}],overscroll:[{overscroll:O()}],"overscroll-x":[{"overscroll-x":O()}],"overscroll-y":[{"overscroll-y":O()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:W()}],"inset-x":[{"inset-x":W()}],"inset-y":[{"inset-y":W()}],start:[{"inset-s":W(),start:W()}],end:[{"inset-e":W(),end:W()}],"inset-bs":[{"inset-bs":W()}],"inset-be":[{"inset-be":W()}],top:[{top:W()}],right:[{right:W()}],bottom:[{bottom:W()}],left:[{left:W()}],visibility:["visible","invisible","collapse"],z:[{z:[rr,"auto",I,P]}],basis:[{basis:[tr,"full","auto",i,...z()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[K,tr,"auto","initial","none",P]}],grow:[{grow:["",K,I,P]}],shrink:[{shrink:["",K,I,P]}],order:[{order:[rr,"first","last","none",I,P]}],"grid-cols":[{"grid-cols":le()}],"col-start-end":[{col:B()}],"col-start":[{"col-start":j()}],"col-end":[{"col-end":j()}],"grid-rows":[{"grid-rows":le()}],"row-start-end":[{row:B()}],"row-start":[{"row-start":j()}],"row-end":[{"row-end":j()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":L()}],"auto-rows":[{"auto-rows":L()}],gap:[{gap:z()}],"gap-x":[{"gap-x":z()}],"gap-y":[{"gap-y":z()}],"justify-content":[{justify:[...pe(),"normal"]}],"justify-items":[{"justify-items":[...ie(),"normal"]}],"justify-self":[{"justify-self":["auto",...ie()]}],"align-content":[{content:["normal",...pe()]}],"align-items":[{items:[...ie(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...ie(),{baseline:["","last"]}]}],"place-content":[{"place-content":pe()}],"place-items":[{"place-items":[...ie(),"baseline"]}],"place-self":[{"place-self":["auto",...ie()]}],p:[{p:z()}],px:[{px:z()}],py:[{py:z()}],ps:[{ps:z()}],pe:[{pe:z()}],pbs:[{pbs:z()}],pbe:[{pbe:z()}],pt:[{pt:z()}],pr:[{pr:z()}],pb:[{pb:z()}],pl:[{pl:z()}],m:[{m:ne()}],mx:[{mx:ne()}],my:[{my:ne()}],ms:[{ms:ne()}],me:[{me:ne()}],mbs:[{mbs:ne()}],mbe:[{mbe:ne()}],mt:[{mt:ne()}],mr:[{mr:ne()}],mb:[{mb:ne()}],ml:[{ml:ne()}],"space-x":[{"space-x":z()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":z()}],"space-y-reverse":["space-y-reverse"],size:[{size:Q()}],"inline-size":[{inline:["auto",...F()]}],"min-inline-size":[{"min-inline":["auto",...F()]}],"max-inline-size":[{"max-inline":["none",...F()]}],"block-size":[{block:["auto",...V()]}],"min-block-size":[{"min-block":["auto",...V()]}],"max-block-size":[{"max-block":["none",...V()]}],w:[{w:[i,"screen",...Q()]}],"min-w":[{"min-w":[i,"screen","none",...Q()]}],"max-w":[{"max-w":[i,"screen","none","prose",{screen:[o]},...Q()]}],h:[{h:["screen","lh",...Q()]}],"min-h":[{"min-h":["screen","lh","none",...Q()]}],"max-h":[{"max-h":["screen","lh",...Q()]}],"font-size":[{text:["base",r,_n,_r]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[n,zf,_f]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",As,P]}],"font-family":[{font:[kf,yf,t]}],"font-features":[{"font-features":[P]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[s,I,P]}],"line-clamp":[{"line-clamp":[K,"none",I,ao]}],leading:[{leading:[a,...z()]}],"list-image":[{"list-image":["none",I,P]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",I,P]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:$()}],"text-color":[{text:$()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...mr(),"wavy"]}],"text-decoration-thickness":[{decoration:[K,"from-font","auto",I,_r]}],"text-decoration-color":[{decoration:$()}],"underline-offset":[{"underline-offset":[K,"auto",I,P]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:z()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",I,P]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",I,P]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:Be()}],"bg-repeat":[{bg:ye()}],"bg-size":[{bg:Ge()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},rr,I,P],radial:["",I,P],conic:[rr,I,P]},Af,wf]}],"bg-color":[{bg:$()}],"gradient-from-pos":[{from:lt()}],"gradient-via-pos":[{via:lt()}],"gradient-to-pos":[{to:lt()}],"gradient-from":[{from:$()}],"gradient-via":[{via:$()}],"gradient-to":[{to:$()}],rounded:[{rounded:ke()}],"rounded-s":[{"rounded-s":ke()}],"rounded-e":[{"rounded-e":ke()}],"rounded-t":[{"rounded-t":ke()}],"rounded-r":[{"rounded-r":ke()}],"rounded-b":[{"rounded-b":ke()}],"rounded-l":[{"rounded-l":ke()}],"rounded-ss":[{"rounded-ss":ke()}],"rounded-se":[{"rounded-se":ke()}],"rounded-ee":[{"rounded-ee":ke()}],"rounded-es":[{"rounded-es":ke()}],"rounded-tl":[{"rounded-tl":ke()}],"rounded-tr":[{"rounded-tr":ke()}],"rounded-br":[{"rounded-br":ke()}],"rounded-bl":[{"rounded-bl":ke()}],"border-w":[{border:Pe()}],"border-w-x":[{"border-x":Pe()}],"border-w-y":[{"border-y":Pe()}],"border-w-s":[{"border-s":Pe()}],"border-w-e":[{"border-e":Pe()}],"border-w-bs":[{"border-bs":Pe()}],"border-w-be":[{"border-be":Pe()}],"border-w-t":[{"border-t":Pe()}],"border-w-r":[{"border-r":Pe()}],"border-w-b":[{"border-b":Pe()}],"border-w-l":[{"border-l":Pe()}],"divide-x":[{"divide-x":Pe()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Pe()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...mr(),"hidden","none"]}],"divide-style":[{divide:[...mr(),"hidden","none"]}],"border-color":[{border:$()}],"border-color-x":[{"border-x":$()}],"border-color-y":[{"border-y":$()}],"border-color-s":[{"border-s":$()}],"border-color-e":[{"border-e":$()}],"border-color-bs":[{"border-bs":$()}],"border-color-be":[{"border-be":$()}],"border-color-t":[{"border-t":$()}],"border-color-r":[{"border-r":$()}],"border-color-b":[{"border-b":$()}],"border-color-l":[{"border-l":$()}],"divide-color":[{divide:$()}],"outline-style":[{outline:[...mr(),"none","hidden"]}],"outline-offset":[{"outline-offset":[K,I,P]}],"outline-w":[{outline:["",K,_n,_r]}],"outline-color":[{outline:$()}],shadow:[{shadow:["","none",u,Wn,Gn]}],"shadow-color":[{shadow:$()}],"inset-shadow":[{"inset-shadow":["none",m,Wn,Gn]}],"inset-shadow-color":[{"inset-shadow":$()}],"ring-w":[{ring:Pe()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:$()}],"ring-offset-w":[{"ring-offset":[K,_r]}],"ring-offset-color":[{"ring-offset":$()}],"inset-ring-w":[{"inset-ring":Pe()}],"inset-ring-color":[{"inset-ring":$()}],"text-shadow":[{"text-shadow":["none",f,Wn,Gn]}],"text-shadow-color":[{"text-shadow":$()}],opacity:[{opacity:[K,I,P]}],"mix-blend":[{"mix-blend":[...On(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":On()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[K]}],"mask-image-linear-from-pos":[{"mask-linear-from":we()}],"mask-image-linear-to-pos":[{"mask-linear-to":we()}],"mask-image-linear-from-color":[{"mask-linear-from":$()}],"mask-image-linear-to-color":[{"mask-linear-to":$()}],"mask-image-t-from-pos":[{"mask-t-from":we()}],"mask-image-t-to-pos":[{"mask-t-to":we()}],"mask-image-t-from-color":[{"mask-t-from":$()}],"mask-image-t-to-color":[{"mask-t-to":$()}],"mask-image-r-from-pos":[{"mask-r-from":we()}],"mask-image-r-to-pos":[{"mask-r-to":we()}],"mask-image-r-from-color":[{"mask-r-from":$()}],"mask-image-r-to-color":[{"mask-r-to":$()}],"mask-image-b-from-pos":[{"mask-b-from":we()}],"mask-image-b-to-pos":[{"mask-b-to":we()}],"mask-image-b-from-color":[{"mask-b-from":$()}],"mask-image-b-to-color":[{"mask-b-to":$()}],"mask-image-l-from-pos":[{"mask-l-from":we()}],"mask-image-l-to-pos":[{"mask-l-to":we()}],"mask-image-l-from-color":[{"mask-l-from":$()}],"mask-image-l-to-color":[{"mask-l-to":$()}],"mask-image-x-from-pos":[{"mask-x-from":we()}],"mask-image-x-to-pos":[{"mask-x-to":we()}],"mask-image-x-from-color":[{"mask-x-from":$()}],"mask-image-x-to-color":[{"mask-x-to":$()}],"mask-image-y-from-pos":[{"mask-y-from":we()}],"mask-image-y-to-pos":[{"mask-y-to":we()}],"mask-image-y-from-color":[{"mask-y-from":$()}],"mask-image-y-to-color":[{"mask-y-to":$()}],"mask-image-radial":[{"mask-radial":[I,P]}],"mask-image-radial-from-pos":[{"mask-radial-from":we()}],"mask-image-radial-to-pos":[{"mask-radial-to":we()}],"mask-image-radial-from-color":[{"mask-radial-from":$()}],"mask-image-radial-to-color":[{"mask-radial-to":$()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":w()}],"mask-image-conic-pos":[{"mask-conic":[K]}],"mask-image-conic-from-pos":[{"mask-conic-from":we()}],"mask-image-conic-to-pos":[{"mask-conic-to":we()}],"mask-image-conic-from-color":[{"mask-conic-from":$()}],"mask-image-conic-to-color":[{"mask-conic-to":$()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:Be()}],"mask-repeat":[{mask:ye()}],"mask-size":[{mask:Ge()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",I,P]}],filter:[{filter:["","none",I,P]}],blur:[{blur:Ln()}],brightness:[{brightness:[K,I,P]}],contrast:[{contrast:[K,I,P]}],"drop-shadow":[{"drop-shadow":["","none",v,Wn,Gn]}],"drop-shadow-color":[{"drop-shadow":$()}],grayscale:[{grayscale:["",K,I,P]}],"hue-rotate":[{"hue-rotate":[K,I,P]}],invert:[{invert:["",K,I,P]}],saturate:[{saturate:[K,I,P]}],sepia:[{sepia:["",K,I,P]}],"backdrop-filter":[{"backdrop-filter":["","none",I,P]}],"backdrop-blur":[{"backdrop-blur":Ln()}],"backdrop-brightness":[{"backdrop-brightness":[K,I,P]}],"backdrop-contrast":[{"backdrop-contrast":[K,I,P]}],"backdrop-grayscale":[{"backdrop-grayscale":["",K,I,P]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[K,I,P]}],"backdrop-invert":[{"backdrop-invert":["",K,I,P]}],"backdrop-opacity":[{"backdrop-opacity":[K,I,P]}],"backdrop-saturate":[{"backdrop-saturate":[K,I,P]}],"backdrop-sepia":[{"backdrop-sepia":["",K,I,P]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":z()}],"border-spacing-x":[{"border-spacing-x":z()}],"border-spacing-y":[{"border-spacing-y":z()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",I,P]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[K,"initial",I,P]}],ease:[{ease:["linear","initial",y,I,P]}],delay:[{delay:[K,I,P]}],animate:[{animate:["none",C,I,P]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[_,I,P]}],"perspective-origin":[{"perspective-origin":E()}],rotate:[{rotate:jr()}],"rotate-x":[{"rotate-x":jr()}],"rotate-y":[{"rotate-y":jr()}],"rotate-z":[{"rotate-z":jr()}],scale:[{scale:Jt()}],"scale-x":[{"scale-x":Jt()}],"scale-y":[{"scale-y":Jt()}],"scale-z":[{"scale-z":Jt()}],"scale-3d":["scale-3d"],skew:[{skew:dn()}],"skew-x":[{"skew-x":dn()}],"skew-y":[{"skew-y":dn()}],transform:[{transform:[I,P,"","none","gpu","cpu"]}],"transform-origin":[{origin:E()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:gr()}],"translate-x":[{"translate-x":gr()}],"translate-y":[{"translate-y":gr()}],"translate-z":[{"translate-z":gr()}],"translate-none":["translate-none"],accent:[{accent:$()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:$()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",I,P]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":z()}],"scroll-mx":[{"scroll-mx":z()}],"scroll-my":[{"scroll-my":z()}],"scroll-ms":[{"scroll-ms":z()}],"scroll-me":[{"scroll-me":z()}],"scroll-mbs":[{"scroll-mbs":z()}],"scroll-mbe":[{"scroll-mbe":z()}],"scroll-mt":[{"scroll-mt":z()}],"scroll-mr":[{"scroll-mr":z()}],"scroll-mb":[{"scroll-mb":z()}],"scroll-ml":[{"scroll-ml":z()}],"scroll-p":[{"scroll-p":z()}],"scroll-px":[{"scroll-px":z()}],"scroll-py":[{"scroll-py":z()}],"scroll-ps":[{"scroll-ps":z()}],"scroll-pe":[{"scroll-pe":z()}],"scroll-pbs":[{"scroll-pbs":z()}],"scroll-pbe":[{"scroll-pbe":z()}],"scroll-pt":[{"scroll-pt":z()}],"scroll-pr":[{"scroll-pr":z()}],"scroll-pb":[{"scroll-pb":z()}],"scroll-pl":[{"scroll-pl":z()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",I,P]}],fill:[{fill:["none",...$()]}],"stroke-w":[{stroke:[K,_n,_r,ao]}],stroke:[{stroke:["none",...$()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},$f=of(Ef);function Te(...e){return $f(pi(e))}const Ys="dartlab-conversations",lo=50;function Tf(){return Date.now().toString(36)+Math.random().toString(36).slice(2,8)}function Nf(){try{const e=localStorage.getItem(Ys);return e?JSON.parse(e):{conversations:[],activeId:null}}catch{return{conversations:[],activeId:null}}}function Pf(e){try{localStorage.setItem(Ys,JSON.stringify(e))}catch{if(e.conversations.length>5){e.conversations=e.conversations.slice(0,e.conversations.length-5);try{localStorage.setItem(Ys,JSON.stringify(e))}catch{}}}}function Cf(){const e=Nf();let t=q(it(e.conversations)),r=q(it(e.activeId));d(r)&&!d(t).find(f=>f.id===d(r))&&b(r,null);function n(){Pf({conversations:d(t),activeId:d(r)})}function s(){return d(t).find(f=>f.id===d(r))||null}function a(){const f={id:Tf(),title:"새 대화",messages:[],createdAt:Date.now(),updatedAt:Date.now()};return b(t,[f,...d(t)],!0),d(t).length>lo&&b(t,d(t).slice(0,lo),!0),b(r,f.id,!0),n(),f.id}function o(f){d(t).find(v=>v.id===f)&&(b(r,f,!0),n())}function i(f,v,p=null){const _=s();if(!_)return;const h={role:f,text:v};p&&(h.meta=p),_.messages=[..._.messages,h],_.updatedAt=Date.now(),_.title==="새 대화"&&f==="user"&&(_.title=v.length>30?v.slice(0,30)+"...":v),b(t,[...d(t)],!0),n()}function l(f){const v=s();if(!v||v.messages.length===0)return;const p=v.messages[v.messages.length-1];Object.assign(p,f),v.updatedAt=Date.now(),b(t,[...d(t)],!0),n()}function c(f){b(t,d(t).filter(v=>v.id!==f),!0),d(r)===f&&b(r,d(t).length>0?d(t)[0].id:null,!0),n()}function u(f,v){const p=d(t).find(_=>_.id===f);p&&(p.title=v,b(t,[...d(t)],!0),n())}function m(){b(t,[],!0),b(r,null),n()}return{get conversations(){return d(t)},get activeId(){return d(r)},get active(){return s()},createConversation:a,setActive:o,addMessage:i,updateLastMessage:l,deleteConversation:c,updateTitle:u,clearAll:m}}var If=N("<a><!></a>"),Of=N("<button><!></button>");function Lf(e,t){Ut(t,!0);let r=$e(t,"variant",3,"default"),n=$e(t,"size",3,"default"),s=Pc(t,["$$slots","$$events","$$legacy","variant","size","class","children"]);const a={default:"bg-gradient-to-r from-dl-primary to-dl-primary-dark text-white shadow-lg shadow-dl-primary/25 hover:shadow-dl-primary/40 hover:-translate-y-0.5",secondary:"bg-dl-bg-card border border-dl-border text-dl-text-muted hover:text-dl-text hover:bg-dl-bg-card-hover",ghost:"text-dl-text-muted hover:text-dl-text hover:bg-white/5",outline:"border border-dl-border text-dl-text-muted hover:text-dl-text hover:border-dl-primary/50"},o={default:"px-5 py-2 text-sm",sm:"px-3 py-1.5 text-xs",lg:"px-7 py-3 text-base",icon:"w-9 h-9"};var i=oe(),l=H(i);{var c=m=>{var f=If();Zn(f,p=>({class:p,...s}),[()=>Te("inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer no-underline",a[r()],o[n()],t.class)]);var v=g(f);Ks(v,()=>t.children),S(m,f)},u=m=>{var f=Of();Zn(f,p=>({class:p,...s}),[()=>Te("inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 cursor-pointer",a[r()],o[n()],t.class)]);var v=g(f);Ks(v,()=>t.children),S(m,f)};G(l,m=>{t.href?m(c):m(u,-1)})}S(e,i),Yt()}wd();/**
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
 */const Rf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
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
 */const jf=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
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
 */const co=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();var Df=vc("<svg><!><!></svg>");function ve(e,t){const r=ce(t,["children","$$slots","$$events","$$legacy"]),n=ce(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Ut(t,!1);let s=$e(t,"name",8,void 0),a=$e(t,"color",8,"currentColor"),o=$e(t,"size",8,24),i=$e(t,"strokeWidth",8,2),l=$e(t,"absoluteStrokeWidth",8,!1),c=$e(t,"iconNode",24,()=>[]);$c();var u=Df();Zn(u,(v,p,_)=>({...Rf,...v,...n,width:o(),height:o(),stroke:a(),"stroke-width":p,class:_}),[()=>jf(n)?void 0:{"aria-hidden":"true"},()=>(yr(l()),yr(i()),yr(o()),Ir(()=>l()?Number(i())*24/Number(o()):i())),()=>(yr(co),yr(s()),yr(r),Ir(()=>co("lucide-icon","lucide",s()?`lucide-${s()}`:"",r.class)))]);var m=g(u);et(m,1,c,Qe,(v,p)=>{var _=Ie(()=>wo(d(p),2));let h=()=>d(_)[0],y=()=>d(_)[1];var C=oe(),A=H(C);_c(A,h,!0,(w,E)=>{Zn(w,()=>({...y()}))}),S(v,C)});var f=M(m);fe(f,t,"default",{}),S(e,u),Yt()}function Oi(e,t){const r=ce(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];ve(e,ue({name:"arrow-up"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=oe(),i=H(o);fe(i,t,"default",{}),S(s,o)},$$slots:{default:!0}}))}function Ff(e,t){const r=ce(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M20 6 9 17l-5-5"}]];ve(e,ue({name:"check"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=oe(),i=H(o);fe(i,t,"default",{}),S(s,o)},$$slots:{default:!0}}))}function Hn(e,t){const r=ce(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];ve(e,ue({name:"circle-alert"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=oe(),i=H(o);fe(i,t,"default",{}),S(s,o)},$$slots:{default:!0}}))}function fo(e,t){const r=ce(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];ve(e,ue({name:"circle-check"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=oe(),i=H(o);fe(i,t,"default",{}),S(s,o)},$$slots:{default:!0}}))}function Vf(e,t){const r=ce(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m16 18 6-6-6-6"}],["path",{d:"m8 6-6 6 6 6"}]];ve(e,ue({name:"code"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=oe(),i=H(o);fe(i,t,"default",{}),S(s,o)},$$slots:{default:!0}}))}function Bf(e,t){const r=ce(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 2v2"}],["path",{d:"M14 2v2"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"}],["path",{d:"M6 2v2"}]];ve(e,ue({name:"coffee"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=oe(),i=H(o);fe(i,t,"default",{}),S(s,o)},$$slots:{default:!0}}))}function zs(e,t){const r=ce(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{d:"M3 12A9 3 0 0 0 21 12"}]];ve(e,ue({name:"database"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=oe(),i=H(o);fe(i,t,"default",{}),S(s,o)},$$slots:{default:!0}}))}function Ms(e,t){const r=ce(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 15V3"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["path",{d:"m7 10 5 5 5-5"}]];ve(e,ue({name:"download"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=oe(),i=H(o);fe(i,t,"default",{}),S(s,o)},$$slots:{default:!0}}))}function uo(e,t){const r=ce(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];ve(e,ue({name:"external-link"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=oe(),i=H(o);fe(i,t,"default",{}),S(s,o)},$$slots:{default:!0}}))}function Li(e,t){const r=ce(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 9H8"}],["path",{d:"M16 13H8"}],["path",{d:"M16 17H8"}]];ve(e,ue({name:"file-text"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=oe(),i=H(o);fe(i,t,"default",{}),S(s,o)},$$slots:{default:!0}}))}function Gf(e,t){const r=ce(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];ve(e,ue({name:"github"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=oe(),i=H(o);fe(i,t,"default",{}),S(s,o)},$$slots:{default:!0}}))}function vo(e,t){const r=ce(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"}],["path",{d:"m21 2-9.6 9.6"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5"}]];ve(e,ue({name:"key"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=oe(),i=H(o);fe(i,t,"default",{}),S(s,o)},$$slots:{default:!0}}))}function Wt(e,t){const r=ce(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];ve(e,ue({name:"loader-circle"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=oe(),i=H(o);fe(i,t,"default",{}),S(s,o)},$$slots:{default:!0}}))}function Wf(e,t){const r=ce(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M4 5h16"}],["path",{d:"M4 12h16"}],["path",{d:"M4 19h16"}]];ve(e,ue({name:"menu"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=oe(),i=H(o);fe(i,t,"default",{}),S(s,o)},$$slots:{default:!0}}))}function po(e,t){const r=ce(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}]];ve(e,ue({name:"message-square"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=oe(),i=H(o);fe(i,t,"default",{}),S(s,o)},$$slots:{default:!0}}))}function Hf(e,t){const r=ce(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"m16 15-3-3 3-3"}]];ve(e,ue({name:"panel-left-close"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=oe(),i=H(o);fe(i,t,"default",{}),S(s,o)},$$slots:{default:!0}}))}function ho(e,t){const r=ce(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];ve(e,ue({name:"plus"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=oe(),i=H(o);fe(i,t,"default",{}),S(s,o)},$$slots:{default:!0}}))}function Kf(e,t){const r=ce(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];ve(e,ue({name:"search"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=oe(),i=H(o);fe(i,t,"default",{}),S(s,o)},$$slots:{default:!0}}))}function qf(e,t){const r=ce(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"}],["circle",{cx:"12",cy:"12",r:"3"}]];ve(e,ue({name:"settings"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=oe(),i=H(o);fe(i,t,"default",{}),S(s,o)},$$slots:{default:!0}}))}function Uf(e,t){const r=ce(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];ve(e,ue({name:"square"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=oe(),i=H(o);fe(i,t,"default",{}),S(s,o)},$$slots:{default:!0}}))}function Yf(e,t){const r=ce(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M12 19h8"}],["path",{d:"m4 17 6-6-6-6"}]];ve(e,ue({name:"terminal"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=oe(),i=H(o);fe(i,t,"default",{}),S(s,o)},$$slots:{default:!0}}))}function Jf(e,t){const r=ce(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];ve(e,ue({name:"trash-2"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=oe(),i=H(o);fe(i,t,"default",{}),S(s,o)},$$slots:{default:!0}}))}function Xf(e,t){const r=ce(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{d:"M12 9v4"}],["path",{d:"M12 17h.01"}]];ve(e,ue({name:"triangle-alert"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=oe(),i=H(o);fe(i,t,"default",{}),S(s,o)},$$slots:{default:!0}}))}function mo(e,t){const r=ce(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"}]];ve(e,ue({name:"wrench"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=oe(),i=H(o);fe(i,t,"default",{}),S(s,o)},$$slots:{default:!0}}))}function Ri(e,t){const r=ce(t,["children","$$slots","$$events","$$legacy"]);/**
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
 */const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ve(e,ue({name:"x"},()=>r,{get iconNode(){return n},children:(s,a)=>{var o=oe(),i=H(o);fe(i,t,"default",{}),S(s,o)},$$slots:{default:!0}}))}var Zf=N("<!> 새 대화",1),Qf=N('<div class="px-3 pb-2"><div class="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-dl-bg-card border border-dl-border"><!> <input type="text" placeholder="대화 검색..." class="flex-1 bg-transparent border-none outline-none text-[12px] text-dl-text placeholder:text-dl-text-dim"/></div></div>'),eu=N('<div role="button" tabindex="0"><!> <span class="flex-1 truncate"> </span> <button class="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-dl-bg-card-hover text-dl-text-dim hover:text-dl-primary transition-all"><!></button></div>'),tu=N('<div><div class="px-2 py-1.5 text-[11px] font-medium text-dl-text-dim uppercase tracking-wider"> </div> <!></div>'),ru=N('<div class="flex flex-col h-full min-w-[260px]"><div class="flex items-center gap-2.5 px-4 pt-4 pb-2"><img src="/avatar.png" alt="DartLab" class="w-8 h-8 rounded-full shadow-sm"/> <span class="text-[15px] font-bold text-dl-text tracking-tight">DartLab</span></div> <div class="p-3 pb-2"><!></div> <!> <div class="flex-1 overflow-y-auto px-2 space-y-4"></div></div>'),nu=N("<button><!></button>"),su=N('<div class="flex flex-col items-center h-full min-w-[52px] py-3 gap-2"><img src="/avatar.png" alt="DartLab" class="w-7 h-7 rounded-full shadow-sm mb-1"/> <button class="p-2.5 rounded-lg text-dl-text-muted hover:text-dl-text hover:bg-dl-bg-card/50 transition-colors" title="새 대화"><!></button> <div class="flex-1 overflow-y-auto flex flex-col items-center gap-1 w-full px-1"></div></div>'),au=N("<aside><!></aside>");function ou(e,t){Ut(t,!0);let r=$e(t,"conversations",19,()=>[]),n=$e(t,"activeId",3,null),s=$e(t,"open",3,!0),a=q("");function o(v){const p=new Date().setHours(0,0,0,0),_=p-864e5,h=p-7*864e5,y={오늘:[],어제:[],"이번 주":[],이전:[]};for(const A of v)A.updatedAt>=p?y.오늘.push(A):A.updatedAt>=_?y.어제.push(A):A.updatedAt>=h?y["이번 주"].push(A):y.이전.push(A);const C=[];for(const[A,w]of Object.entries(y))w.length>0&&C.push({label:A,items:w});return C}let i=Ie(()=>d(a).trim()?r().filter(v=>v.title.toLowerCase().includes(d(a).toLowerCase())):r()),l=Ie(()=>o(d(i)));var c=au(),u=g(c);{var m=v=>{var p=ru(),_=M(g(p),2),h=g(_);Lf(h,{variant:"secondary",class:"w-full justify-start gap-2",get onclick(){return t.onNewChat},children:(w,E)=>{var T=Zf(),O=H(T);ho(O,{size:16}),S(w,T)},$$slots:{default:!0}});var y=M(_,2);{var C=w=>{var E=Qf(),T=g(E),O=g(T);Kf(O,{size:12,class:"text-dl-text-dim flex-shrink-0"});var z=M(O,2);Wr(z,()=>d(a),W=>b(a,W)),S(w,E)};G(y,w=>{r().length>3&&w(C)})}var A=M(y,2);et(A,21,()=>d(l),Qe,(w,E)=>{var T=tu(),O=g(T),z=g(O),W=M(O,2);et(W,17,()=>d(E).items,Qe,(le,B)=>{var j=eu(),L=g(j);po(L,{size:14,class:"flex-shrink-0 opacity-50"});var pe=M(L,2),ie=g(pe),ne=M(pe,2),Q=g(ne);Jf(Q,{size:12}),re(F=>{Re(j,1,F),se(ie,d(B).title)},[()=>Le(Te("w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left text-[13px] transition-colors group cursor-pointer",d(B).id===n()?"bg-dl-bg-card text-dl-text border-l-2 border-dl-primary":"text-dl-text-muted hover:bg-dl-bg-card/50 hover:text-dl-text border-l-2 border-transparent"))]),Y("click",j,()=>{var F;return(F=t.onSelect)==null?void 0:F.call(t,d(B).id)}),Y("keydown",j,F=>{var V;F.key==="Enter"&&((V=t.onSelect)==null||V.call(t,d(B).id))}),Y("click",ne,F=>{var V;F.stopPropagation(),(V=t.onDelete)==null||V.call(t,d(B).id)}),S(le,j)}),re(()=>se(z,d(E).label)),S(w,T)}),S(v,p)},f=v=>{var p=su(),_=M(g(p),2),h=g(_);ho(h,{size:18});var y=M(_,2);et(y,21,()=>r().slice(0,10),Qe,(C,A)=>{var w=nu(),E=g(w);po(E,{size:16}),re(T=>{Re(w,1,T),Xn(w,"title",d(A).title)},[()=>Le(Te("p-2 rounded-lg transition-colors w-full flex justify-center",d(A).id===n()?"bg-dl-bg-card text-dl-text":"text-dl-text-dim hover:text-dl-text-muted hover:bg-dl-bg-card/50"))]),Y("click",w,()=>{var T;return(T=t.onSelect)==null?void 0:T.call(t,d(A).id)}),S(C,w)}),Y("click",_,function(...C){var A;(A=t.onNewChat)==null||A.apply(this,C)}),S(v,p)};G(u,v=>{s()?v(m):v(f,-1)})}re(v=>Re(c,1,v),[()=>Le(Te("flex flex-col h-full bg-dl-bg-darker border-r border-dl-border transition-all duration-300 flex-shrink-0 overflow-hidden",s()?"w-[260px]":"w-[52px]"))]),S(e,c),Yt()}ln(["click","keydown"]);var iu=N('<button class="text-left px-4 py-3 rounded-xl border border-dl-border bg-dl-bg-card/50 text-[13px] text-dl-text-muted hover:text-dl-text hover:border-dl-primary/30 hover:bg-dl-bg-card transition-all duration-200 cursor-pointer"> </button>'),lu=N('<div class="flex-1 flex flex-col items-center justify-center px-5"><div class="w-full max-w-[620px] flex flex-col items-center"><img src="/avatar.png" alt="DartLab" class="w-16 h-16 rounded-full mb-5 shadow-lg shadow-dl-primary/10"/> <h1 class="text-2xl font-bold text-dl-text mb-1.5">무엇을 분석할까요?</h1> <p class="text-sm text-dl-text-muted mb-8">종목명과 질문을 입력하거나, 자유롭게 대화하세요</p> <div class="input-box large"><textarea placeholder="삼성전자 재무 건전성을 분석해줘..." rows="1" class="input-textarea"></textarea> <button><!></button></div> <div class="grid grid-cols-2 gap-2.5 mt-6 w-full max-w-[520px]"></div></div></div>');function du(e,t){Ut(t,!0);let r=$e(t,"inputText",15,""),n;const s=["삼성전자 재무 건전성 분석해줘","LG에너지솔루션 배당 추세는?","카카오 부채 리스크 평가해줘","현대차 영업이익률 추이 분석"];function a(_){var h;_.key==="Enter"&&!_.shiftKey&&(_.preventDefault(),(h=t.onSend)==null||h.call(t))}function o(_){_.target.style.height="auto",_.target.style.height=Math.min(_.target.scrollHeight,200)+"px"}function i(_){r(_),n&&n.focus()}var l=lu(),c=g(l),u=M(g(c),6),m=g(u);_i(m,_=>n=_,()=>n);var f=M(m,2),v=g(f);Oi(v,{size:18,strokeWidth:2.5});var p=M(u,2);et(p,21,()=>s,Qe,(_,h)=>{var y=iu(),C=g(y);re(()=>se(C,d(h))),Y("click",y,()=>i(d(h))),S(_,y)}),re((_,h)=>{Re(f,1,_),f.disabled=h},[()=>Le(Te("send-btn",r().trim()&&"active")),()=>!r().trim()]),Y("keydown",m,a),Y("input",m,o),Wr(m,r),Y("click",f,function(..._){var h;(h=t.onSend)==null||h.apply(this,_)}),S(e,l),Yt()}ln(["keydown","input","click"]);var cu=N("<span><!></span>");function fu(e,t){Ut(t,!0);let r=$e(t,"variant",3,"default");const n={default:"bg-dl-primary/10 text-dl-primary-light border-dl-primary/20",accent:"bg-dl-accent/10 text-dl-accent-light border-dl-accent/20",success:"bg-dl-success/10 text-dl-success border-dl-success/20",muted:"bg-dl-bg-card-hover text-dl-text-muted border-dl-border"};var s=cu(),a=g(s);Ks(a,()=>t.children),re(o=>Re(s,1,o),[()=>Le(Te("inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border",n[r()],t.class))]),S(e,s),Yt()}var uu=N('<div class="flex items-start gap-3 animate-fadeIn"><div class="w-7 h-7 rounded-full bg-dl-bg-card-hover border border-dl-border flex items-center justify-center text-[10px] font-semibold text-dl-text-muted flex-shrink-0 mt-0.5">You</div> <div class="flex-1 pt-0.5"><p class="text-[15px] text-dl-text leading-relaxed"> </p></div></div>'),vu=N('<div class="px-3 py-2 bg-dl-bg-card/50"><div class="text-[10px] text-dl-text-dim leading-tight"> </div> <div> </div></div>'),pu=N('<span class="flex items-center gap-1 text-[10px] text-amber-400"><!> </span>'),hu=N('<div class="px-3 py-1.5 border-t border-dl-border/30 flex flex-wrap gap-2"></div>'),mu=N('<div class="mb-3 rounded-xl border border-dl-border/50 bg-dl-bg-card/30 overflow-hidden animate-fadeIn"><div class="grid gap-px" style="grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));"></div> <!></div>'),gu=N('<button class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-dl-border/60 bg-dl-bg-card/60 text-[12px] text-dl-text-muted hover:text-dl-text hover:border-dl-primary/40 hover:bg-dl-primary/[0.05] transition-all"><!> <span> </span></button>'),bu=N('<div class="mb-3"><div class="flex items-center gap-1.5 mb-1.5 text-[11px] text-dl-text-dim"><!> <span>분석에 사용된 데이터</span></div> <div class="flex flex-wrap items-center gap-2"></div></div>'),xu=N('<div class="flex items-center gap-1.5 mb-3 text-[12px] text-dl-text-dim"><!> <span>데이터 로딩 중...</span></div>'),_u=N('<span class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-dl-accent/30 bg-dl-accent/5 text-[12px] text-dl-accent"><!> </span>'),yu=N('<div class="mb-3"><div class="flex items-center gap-1.5 mb-1.5 text-[11px] text-dl-text-dim"><!> <span>사용된 도구</span></div> <div class="flex flex-wrap items-center gap-2"></div></div>'),wu=N('<div class="flex items-center gap-1.5 h-6"><span class="typing-dot svelte-1e5n1dp"></span> <span class="typing-dot delay-1 svelte-1e5n1dp"></span> <span class="typing-dot delay-2 svelte-1e5n1dp"></span></div>'),ku=N("<div><!></div>"),Su=N('<div class="flex items-start gap-3 animate-fadeIn"><img src="/avatar.png" alt="DartLab" class="w-7 h-7 rounded-full flex-shrink-0 mt-0.5"/> <div class="flex-1 pt-0.5 min-w-0"><!> <!> <!> <!> <!></div></div>'),Au=N("<button> </button>"),zu=N('<div class="flex items-center gap-1 ml-2"></div>'),Mu=N('<div class="prose-dartlab text-[13px] leading-[1.7]"><!></div>'),Eu=N('<pre class="text-[11px] text-dl-text-muted font-mono bg-dl-bg-darker rounded-xl p-4 overflow-x-auto whitespace-pre-wrap break-words"> </pre>'),$u=N('<div class="fixed inset-0 z-[300] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn"><div class="w-full max-w-3xl max-h-[80vh] bg-dl-bg-card border border-dl-border rounded-2xl shadow-2xl overflow-hidden flex flex-col"><div class="flex items-center justify-between px-5 pt-4 pb-2 flex-shrink-0"><div class="flex items-center gap-3"><div class="flex items-center gap-1.5 text-[13px] font-medium text-dl-text"><!> </div> <div class="flex items-center gap-0.5 bg-dl-bg-darker rounded-lg p-0.5"><button><!> 렌더링</button> <button><!> 원문</button></div> <!></div> <button class="p-1 rounded-lg text-dl-text-dim hover:text-dl-text hover:bg-white/5 transition-colors"><!></button></div> <div class="flex-1 overflow-y-auto px-5 pb-5 min-h-0"><!></div></div></div>'),Tu=N("<!> <!>",1);function Nu(e,t){Ut(t,!0);let r=q(null),n=q("rendered");function s(f){if(!f)return"";let v=f.replace(/```(\w*)\n([\s\S]*?)```/g,"<pre><code>$2</code></pre>").replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^### (.+)$/gm,"<h3>$1</h3>").replace(/^## (.+)$/gm,"<h2>$1</h2>").replace(/^# (.+)$/gm,"<h1>$1</h1>").replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>").replace(/\*([^*]+)\*/g,"<em>$1</em>").replace(/^[•\-\*] (.+)$/gm,"<li>$1</li>").replace(/^\d+\. (.+)$/gm,"<li>$1</li>").replace(/^\|(.+)\|$/gm,p=>{const _=p.slice(1,-1).split("|").map(h=>h.trim());return _.every(h=>/^[\-:]+$/.test(h))?"":"<tr>"+_.map(h=>`<td>${h}</td>`).join("")+"</tr>"}).replace(/^> (.+)$/gm,"<blockquote>$1</blockquote>").replace(/\n\n/g,"</p><p>").replace(/\n/g,"<br>");return v=v.replace(/(<li>.*?<\/li>(\s*<br>)?)+/g,p=>"<ul>"+p.replace(/<br>/g,"")+"</ul>"),v=v.replace(/(<tr>.*?<\/tr>(\s*<br>)?)+/g,p=>"<table>"+p.replace(/<br>/g,"")+"</table>"),"<p>"+v+"</p>"}function a(f){b(r,f,!0),b(n,"rendered")}var o=Tu(),i=H(o);{var l=f=>{var v=uu(),p=M(g(v),2),_=g(p),h=g(_);re(()=>se(h,t.message.text)),S(f,v)},c=f=>{var v=Su(),p=M(g(v),2),_=g(p);{var h=B=>{fu(B,{variant:"muted",class:"mb-2",children:(j,L)=>{var pe=Yn();re(()=>se(pe,t.message.company)),S(j,pe)},$$slots:{default:!0}})};G(_,B=>{t.message.company&&B(h)})}var y=M(_,2);{var C=B=>{var j=mu(),L=g(j);et(L,21,()=>t.message.snapshot.items,Qe,(ne,Q)=>{const F=Ie(()=>d(Q).status==="good"?"text-dl-success":d(Q).status==="danger"?"text-dl-primary-light":d(Q).status==="caution"?"text-amber-400":"text-dl-text");var V=vu(),$=g(V),Be=g($),ye=M($,2),Ge=g(ye);re(lt=>{se(Be,d(Q).label),Re(ye,1,lt,"svelte-1e5n1dp"),se(Ge,d(Q).value)},[()=>Le(Te("text-[14px] font-semibold leading-snug mt-0.5",d(F)))]),S(ne,V)});var pe=M(L,2);{var ie=ne=>{var Q=hu();et(Q,21,()=>t.message.snapshot.warnings,Qe,(F,V)=>{var $=pu(),Be=g($);Xf(Be,{size:10});var ye=M(Be);re(()=>se(ye,` ${d(V)??""}`)),S(F,$)}),S(ne,Q)};G(pe,ne=>{var Q;((Q=t.message.snapshot.warnings)==null?void 0:Q.length)>0&&ne(ie)})}S(B,j)};G(y,B=>{var j,L;((L=(j=t.message.snapshot)==null?void 0:j.items)==null?void 0:L.length)>0&&B(C)})}var A=M(y,2);{var w=B=>{var j=bu(),L=g(j),pe=g(L);zs(pe,{size:11});var ie=M(L,2);et(ie,21,()=>t.message.contexts,Qe,(ne,Q,F)=>{var V=gu(),$=g(V);zs($,{size:13,class:"flex-shrink-0"});var Be=M($,2),ye=g(Be);re(()=>se(ye,d(Q).label||d(Q).module)),Y("click",V,()=>a(F)),S(ne,V)}),S(B,j)},E=B=>{var j=xu(),L=g(j);Wt(L,{size:13,class:"animate-spin"}),S(B,j)};G(A,B=>{var j;((j=t.message.contexts)==null?void 0:j.length)>0?B(w):t.message.loading&&!t.message.text&&!t.message.contexts&&B(E,1)})}var T=M(A,2);{var O=B=>{var j=yu(),L=g(j),pe=g(L);mo(pe,{size:11});var ie=M(L,2);et(ie,21,()=>t.message.toolEvents,Qe,(ne,Q)=>{var F=oe(),V=H(F);{var $=Be=>{var ye=_u(),Ge=g(ye);mo(Ge,{size:13});var lt=M(Ge);re(()=>se(lt,` ${d(Q).name??""}`)),S(Be,ye)};G(V,Be=>{d(Q).type==="call"&&Be($)})}S(ne,F)}),S(B,j)};G(T,B=>{var j;((j=t.message.toolEvents)==null?void 0:j.length)>0&&B(O)})}var z=M(T,2);{var W=B=>{var j=wu();S(B,j)},le=B=>{var j=ku(),L=g(j);Ya(L,()=>s(t.message.text)),re(pe=>Re(j,1,pe,"svelte-1e5n1dp"),[()=>Le(Te("prose-dartlab text-[15px] leading-[1.75]",t.message.error&&"text-dl-primary"))]),S(B,j)};G(z,B=>{t.message.loading&&!t.message.text?B(W):B(le,-1)})}S(f,v)};G(i,f=>{t.message.role==="user"?f(l):f(c,-1)})}var u=M(i,2);{var m=f=>{const v=Ie(()=>t.message.contexts[d(r)]);var p=$u(),_=g(p),h=g(_),y=g(h),C=g(y),A=g(C);zs(A,{size:14});var w=M(A),E=M(C,2),T=g(E),O=g(T);Li(O,{size:11});var z=M(T,2),W=g(z);Vf(W,{size:11});var le=M(E,2);{var B=F=>{var V=zu();et(V,21,()=>t.message.contexts,Qe,($,Be,ye)=>{var Ge=Au(),lt=g(Ge);re(ke=>{Re(Ge,1,ke,"svelte-1e5n1dp"),se(lt,t.message.contexts[ye].label||t.message.contexts[ye].module)},[()=>Le(Te("px-1.5 py-0.5 rounded text-[9px] transition-colors",ye===d(r)?"bg-dl-primary/20 text-dl-primary-light":"bg-dl-bg-darker text-dl-text-dim hover:text-dl-text-muted"))]),Y("click",Ge,()=>{b(r,ye,!0)}),S($,Ge)}),S(F,V)};G(le,F=>{t.message.contexts.length>1&&F(B)})}var j=M(y,2),L=g(j);Ri(L,{size:18});var pe=M(h,2),ie=g(pe);{var ne=F=>{var V=Mu(),$=g(V);Ya($,()=>s(d(v).text)),S(F,V)},Q=F=>{var V=Eu(),$=g(V);re(()=>se($,d(v).text)),S(F,V)};G(ie,F=>{d(n)==="rendered"?F(ne):F(Q,-1)})}re((F,V)=>{se(w,` ${(d(v).label||d(v).module)??""}`),Re(T,1,F,"svelte-1e5n1dp"),Re(z,1,V,"svelte-1e5n1dp")},[()=>Le(Te("flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] transition-colors",d(n)==="rendered"?"bg-dl-bg-card text-dl-text shadow-sm":"text-dl-text-dim hover:text-dl-text-muted")),()=>Le(Te("flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] transition-colors",d(n)==="raw"?"bg-dl-bg-card text-dl-text shadow-sm":"text-dl-text-dim hover:text-dl-text-muted"))]),Y("click",p,F=>{F.target===F.currentTarget&&b(r,null)}),Y("keydown",p,F=>{F.key==="Escape"&&b(r,null)}),Y("click",T,()=>b(n,"rendered")),Y("click",z,()=>b(n,"raw")),Y("click",j,()=>b(r,null)),S(f,p)};G(u,f=>{var v;d(r)!==null&&((v=t.message.contexts)!=null&&v[d(r)])&&f(m)})}S(e,o),Yt()}ln(["click","keydown"]);var Pu=N('<button class="send-btn active"><!></button>'),Cu=N("<button><!></button>"),Iu=N('<div class="flex flex-col h-full min-h-0"><div class="flex-1 overflow-y-auto min-h-0"><div class="max-w-[720px] mx-auto px-5 pt-14 pb-8 space-y-8"></div></div> <div class="flex-shrink-0 px-5 pb-4 pt-2"><div class="max-w-[720px] mx-auto"><div class="input-box"><textarea placeholder="메시지를 입력하세요..." rows="1" class="input-textarea"></textarea> <!></div></div></div></div>');function Ou(e,t){Ut(t,!0);let r=$e(t,"messages",19,()=>[]),n=$e(t,"isLoading",3,!1),s=$e(t,"inputText",15,""),a=$e(t,"scrollTrigger",3,0),o;Jn(()=>{a(),o&&setTimeout(()=>{o.scrollTop=o.scrollHeight},10)});function i(A){var w;A.key==="Enter"&&!A.shiftKey&&(A.preventDefault(),(w=t.onSend)==null||w.call(t))}function l(A){A.target.style.height="auto",A.target.style.height=Math.min(A.target.scrollHeight,200)+"px"}var c=Iu(),u=g(c),m=g(u);et(m,21,r,Qe,(A,w)=>{Nu(A,{get message(){return d(w)}})}),_i(u,A=>o=A,()=>o);var f=M(u,2),v=g(f),p=g(v),_=g(p),h=M(_,2);{var y=A=>{var w=Pu(),E=g(w);Uf(E,{size:14}),Y("click",w,function(...T){var O;(O=t.onStop)==null||O.apply(this,T)}),S(A,w)},C=A=>{var w=Cu(),E=g(w);Oi(E,{size:16,strokeWidth:2.5}),re((T,O)=>{Re(w,1,T),w.disabled=O},[()=>Le(Te("send-btn",s().trim()&&"active")),()=>!s().trim()]),Y("click",w,function(...T){var O;(O=t.onSend)==null||O.apply(this,T)}),S(A,w)};G(h,A=>{n()?A(y):A(C,-1)})}Y("keydown",_,i),Y("input",_,l),Wr(_,s),S(e,c),Yt()}ln(["keydown","input","click"]);var Lu=N("<!> <span>확인 중...</span>",1),Ru=N("<!> <span>설정 필요</span>",1),ju=N('<span class="text-dl-text-dim">/</span> <span class="max-w-[80px] truncate"> </span>',1),Du=N('<span class="w-1.5 h-1.5 rounded-full bg-dl-success"></span> <span> </span> <!> <!>',1),Fu=N('<div class="mx-3 mb-2 px-4 py-3 rounded-xl border border-dl-border bg-dl-bg-card/80 backdrop-blur-sm flex items-center gap-3 pointer-events-auto"><!> <div class="flex-1"><div class="text-[13px] text-dl-text-muted">AI Provider 확인 중...</div></div></div>'),Vu=N('<div class="mx-3 mb-2 px-4 py-3 rounded-xl border border-dl-primary/30 bg-dl-primary/5 backdrop-blur-sm flex items-center gap-3 pointer-events-auto"><!> <div class="flex-1"><div class="text-[13px] text-dl-text">AI Provider가 설정되지 않았습니다</div> <div class="text-[11px] text-dl-text-muted mt-0.5">대화를 시작하려면 Provider를 설정해주세요</div></div> <button class="px-3 py-1.5 rounded-lg bg-dl-primary/20 text-dl-primary-light text-[12px] font-medium hover:bg-dl-primary/30 transition-colors flex-shrink-0">설정하기</button></div>'),Bu=N('<span class="px-1.5 py-0.5 rounded text-[9px] font-semibold bg-dl-primary/20 text-dl-primary-light">사용 중</span>'),Gu=N('<!> <span class="text-[10px] text-amber-400">인증 필요</span>',1),Wu=N('<!> <span class="text-[10px] text-dl-text-dim">미설치</span>',1),Hu=N('<div class="flex items-center gap-1.5 mt-2 text-[11px] text-dl-primary-light"><!> API 키가 유효하지 않습니다. 다시 확인해주세요.</div>'),Ku=N('<div class="px-4 pb-4 border-t border-dl-border/50 pt-3"><div class="text-[11px] text-dl-text-muted mb-2"> </div> <div class="flex items-center gap-2"><input type="password" class="flex-1 bg-dl-bg-darker border border-dl-border rounded-lg px-3 py-2 text-[12px] text-dl-text placeholder:text-dl-text-dim outline-none focus:border-dl-primary/50 transition-colors"/> <button class="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-dl-primary/20 text-dl-primary-light text-[12px] font-medium hover:bg-dl-primary/30 transition-colors disabled:opacity-40 flex-shrink-0"><!> 인증</button></div> <!></div>'),qu=N('<button class="px-2.5 py-1.5 rounded-lg bg-dl-primary/20 text-dl-primary-light text-[11px] hover:bg-dl-primary/30 transition-colors disabled:opacity-40"><!></button>'),Uu=N('<div class="px-4 pb-2 border-t border-dl-border/50 pt-2.5"><div class="flex items-center gap-2"><!> <span class="text-[11px] text-dl-success">인증됨</span> <span class="text-[10px] text-dl-text-dim">— 다른 키로 변경하려면 입력하세요</span></div> <div class="flex items-center gap-2 mt-2"><input type="password" placeholder="새 API 키 (변경 시에만)" class="flex-1 bg-dl-bg-darker border border-dl-border rounded-lg px-3 py-1.5 text-[11px] text-dl-text placeholder:text-dl-text-dim outline-none focus:border-dl-primary/50 transition-colors"/> <!></div></div>'),Yu=N('<div class="px-4 pb-4 border-t border-dl-border/50 pt-3"><div class="text-[12px] text-dl-text mb-2">Ollama가 설치되어 있지 않습니다</div> <a href="https://ollama.com/download" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 px-3 py-2 rounded-lg bg-dl-bg-darker border border-dl-border text-[12px] text-dl-text-muted hover:text-dl-text hover:border-dl-primary/30 transition-colors"><!> Ollama 다운로드 (ollama.com) <!></a> <div class="text-[10px] text-dl-text-dim mt-2">설치 후 Ollama를 실행하고 새로고침하세요</div></div>'),Ju=N('<div class="px-4 pb-3 border-t border-dl-border/50 pt-3"><div class="flex items-center gap-2 text-[12px] text-amber-400"><!> Ollama가 설치되었지만 실행되지 않고 있습니다</div> <div class="text-[10px] text-dl-text-dim mt-1">터미널에서 <code class="px-1 py-0.5 rounded bg-dl-bg-darker text-dl-text-muted">ollama serve</code>를 실행하세요</div></div>'),Xu=N('<div class="px-4 pb-4 border-t border-dl-border/50 pt-3"><div class="text-[12px] text-dl-text mb-2"> </div> <div class="p-2.5 rounded-lg bg-dl-bg-darker border border-dl-border text-[11px] text-dl-text-muted font-mono"> </div> <div class="text-[10px] text-dl-text-dim mt-2"> </div></div>'),Zu=N('<div class="flex items-center gap-2 py-3 text-[12px] text-dl-text-dim"><!> 모델 목록 불러오는 중...</div>'),Qu=N("<button> <!></button>"),ev=N('<div class="flex flex-wrap gap-1.5"></div>'),tv=N('<div class="text-[11px] text-dl-text-dim py-2">사용 가능한 모델이 없습니다</div>'),rv=N('<div class="p-3 rounded-lg border border-dl-border bg-dl-bg-darker"><div class="flex items-center justify-between mb-1.5"><span class="text-[11px] text-dl-text flex items-center gap-1.5"><!> 다운로드 중</span> <button class="px-2 py-0.5 rounded text-[10px] text-dl-text-dim hover:text-dl-primary-light transition-colors">취소</button></div> <div class="w-full h-1.5 rounded-full bg-dl-bg-dark overflow-hidden"><div class="h-full rounded-full bg-gradient-to-r from-dl-primary to-dl-primary-light transition-all duration-300"></div></div> <div class="text-[10px] text-dl-text-dim mt-1"> </div></div>'),nv=N('<span class="px-1 py-px rounded text-[9px] bg-dl-primary/15 text-dl-primary-light"> </span>'),sv=N('<button class="flex items-center gap-2.5 w-full px-2.5 py-2 rounded-lg border border-dl-border/50 text-left hover:border-dl-primary/30 hover:bg-white/[0.02] transition-all group"><div class="flex-1 min-w-0"><div class="flex items-center gap-1.5"><span class="text-[11px] font-medium text-dl-text"> </span> <span class="px-1 py-px rounded text-[9px] bg-dl-bg-darker text-dl-text-dim"> </span> <!></div> <div class="text-[10px] text-dl-text-dim mt-0.5"> </div></div> <div class="flex items-center gap-1.5 flex-shrink-0"><span class="text-[9px] text-dl-text-dim"> </span> <!></div></button>'),av=N('<div class="flex items-center gap-1.5"><input type="text" placeholder="모델명 (예: gemma3)" class="flex-1 bg-dl-bg-darker border border-dl-border rounded-lg px-2.5 py-1.5 text-[11px] text-dl-text placeholder:text-dl-text-dim outline-none focus:border-dl-primary/50 transition-colors"/> <button class="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-dl-primary/20 text-dl-primary-light text-[11px] font-medium hover:bg-dl-primary/30 transition-colors disabled:opacity-40 flex-shrink-0"><!> 받기</button></div> <div class="mt-2.5 space-y-1"></div>',1),ov=N('<div class="mt-3 pt-3 border-t border-dl-border/30"><div class="flex items-center justify-between mb-2"><span class="text-[11px] text-dl-text-muted">모델 다운로드</span> <a href="https://ollama.com/library" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-[10px] text-dl-text-dim hover:text-dl-primary-light transition-colors">전체 목록 <!></a></div> <!></div>'),iv=N('<div class="px-4 pb-4 border-t border-dl-border/50 pt-3"><div class="flex items-center justify-between mb-2.5"><span class="text-[11px] font-medium text-dl-text-muted">모델 선택</span> <!></div> <!> <!></div>'),lv=N("<!> <!> <!> <!> <!>",1),dv=N('<div><button class="flex items-center gap-3 w-full px-4 py-3 text-left"><span></span> <div class="flex-1 min-w-0"><div class="flex items-center gap-2"><span class="text-[13px] font-medium text-dl-text"> </span> <!></div> <div class="text-[11px] text-dl-text-dim mt-0.5"> </div></div> <div class="flex items-center gap-2 flex-shrink-0"><!></div></button> <!></div>'),cv=N('<div class="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn"><div class="w-full max-w-xl bg-dl-bg-card border border-dl-border rounded-2xl shadow-2xl overflow-hidden"><div class="flex items-center justify-between px-6 pt-5 pb-3"><div class="text-[14px] font-semibold text-dl-text">AI Provider 설정</div> <button class="p-1 rounded-lg text-dl-text-dim hover:text-dl-text hover:bg-white/5 transition-colors"><!></button></div> <div class="px-6 pb-5 max-h-[70vh] overflow-y-auto"><div class="space-y-2.5"></div></div> <div class="flex items-center justify-between px-6 py-3 border-t border-dl-border"><div class="text-[10px] text-dl-text-dim"><!></div> <button class="px-4 py-2 rounded-xl bg-dl-primary/20 text-dl-primary-light text-[12px] font-medium hover:bg-dl-primary/30 transition-colors">닫기</button></div></div></div>'),fv=N('<div class="fixed bottom-6 right-6 z-[300] animate-fadeIn"><div> </div></div>'),uv=N('<div class="flex h-screen bg-dl-bg-dark overflow-hidden"><!> <div class="relative flex flex-col flex-1 min-w-0 min-h-0"><div class="absolute top-0 left-0 right-0 z-10 pointer-events-none"><div class="flex items-center justify-between px-3 h-11 pointer-events-auto" style="background: linear-gradient(to bottom, var(--color-dl-bg-dark) 60%, transparent);"><button class="p-1.5 rounded-lg text-dl-text-muted hover:text-dl-text hover:bg-white/5 transition-colors"><!></button> <div class="flex items-center gap-1"><a href="https://buymeacoffee.com/eddmpython" target="_blank" rel="noopener noreferrer" class="p-1.5 rounded-lg text-[#ffdd00] hover:bg-white/5 transition-colors" title="Buy me a coffee"><!></a> <a href="https://eddmpython.github.io/dartlab/" target="_blank" rel="noopener noreferrer" class="p-1.5 rounded-lg text-dl-text-dim hover:text-dl-text-muted hover:bg-white/5 transition-colors" title="Documentation"><!></a> <a href="https://github.com/eddmpython/dartlab" target="_blank" rel="noopener noreferrer" class="p-1.5 rounded-lg text-dl-text-dim hover:text-dl-text-muted hover:bg-white/5 transition-colors" title="GitHub"><!></a> <div class="w-px h-4 bg-dl-border mx-1"></div> <button><!> <!></button></div></div> <!></div> <!></div></div>  <!> <!>',1);function vv(e,t){Ut(t,!0);let r=q(""),n=q(!1),s=q(null),a=q(it({})),o=q(it({})),i=q(null),l=q(null),c=q(it([])),u=q(!0),m=q(0),f=q(!0),v=q(!1),p=q(null),_=q(it({})),h=q(it({})),y=q(""),C=q(!1),A=q(null),w=q(""),E=q(!1),T=q(""),O=q(0),z=q(null),W=q(""),le=q("error"),B=q(!1);function j(k,R="error",de=4e3){b(W,k,!0),b(le,R,!0),b(B,!0),setTimeout(()=>{b(B,!1)},de)}const L=Cf();Jn(()=>{pe()});async function pe(){var k,R,de;b(f,!0);try{const rt=await Lc();b(a,rt.providers||{},!0),b(o,rt.ollama||{},!0);const he=localStorage.getItem("dartlab-provider"),te=localStorage.getItem("dartlab-model");if(he&&((k=d(a)[he])!=null&&k.available)){b(i,he,!0),b(p,he,!0),await Gr(he,te),await ie(he);const D=d(_)[he]||[];te&&D.includes(te)?b(l,te,!0):D.length>0&&(b(l,D[0],!0),localStorage.setItem("dartlab-model",d(l))),b(c,D,!0),b(f,!1);return}if(he&&d(a)[he]){b(i,he,!0),b(p,he,!0),await ie(he);const D=d(_)[he]||[];b(c,D,!0),te&&D.includes(te)?b(l,te,!0):D.length>0&&b(l,D[0],!0),b(f,!1);return}for(const D of["ollama"])if((R=d(a)[D])!=null&&R.available){b(i,D,!0),b(p,D,!0),await Gr(D),await ie(D);const me=d(_)[D]||[];b(c,me,!0),b(l,((de=d(a)[D])==null?void 0:de.model)||(me.length>0?me[0]:null),!0),d(l)&&localStorage.setItem("dartlab-model",d(l));break}}catch{}b(f,!1)}async function ie(k){b(h,{...d(h),[k]:!0},!0);try{const R=await Rc(k);b(_,{...d(_),[k]:R.models||[]},!0)}catch{b(_,{...d(_),[k]:[]},!0)}b(h,{...d(h),[k]:!1},!0)}async function ne(k){var de;b(i,k,!0),b(l,null),b(p,k,!0),localStorage.setItem("dartlab-provider",k),localStorage.removeItem("dartlab-model"),b(y,""),b(A,null);try{await Gr(k)}catch{}await ie(k);const R=d(_)[k]||[];if(b(c,R,!0),R.length>0){b(l,((de=d(a)[k])==null?void 0:de.model)||R[0],!0),localStorage.setItem("dartlab-model",d(l));try{await Gr(k,d(l))}catch{}}}async function Q(k){b(l,k,!0),localStorage.setItem("dartlab-model",k);try{await Gr(d(i),k)}catch{}}function F(k){d(p)===k?b(p,null):(b(p,k,!0),ie(k))}async function V(){const k=d(y).trim();if(!(!k||!d(i))){b(C,!0),b(A,null);try{const R=await Gr(d(i),d(l),k);R.available?(b(A,"success"),d(a)[d(i)]={...d(a)[d(i)],available:!0,model:R.model},!d(l)&&R.model&&b(l,R.model,!0),await ie(d(i)),b(c,d(_)[d(i)]||[],!0),j("API 키 인증 성공","success")):b(A,"error")}catch{b(A,"error")}b(C,!1)}}function $(){const k=d(w).trim();!k||d(E)||(b(E,!0),b(T,"준비 중..."),b(O,0),b(z,jc(k,{onProgress(R){R.total&&R.completed!==void 0?(b(O,Math.round(R.completed/R.total*100),!0),b(T,`다운로드 중... ${d(O)}%`)):R.status&&b(T,R.status,!0)},async onDone(){b(E,!1),b(z,null),b(w,""),b(T,""),b(O,0),j(`${k} 다운로드 완료`,"success"),await ie("ollama"),b(c,d(_).ollama||[],!0),d(c).includes(k)&&await Q(k)},onError(R){b(E,!1),b(z,null),b(T,""),b(O,0),j(`다운로드 실패: ${R}`)}}),!0))}function Be(){d(z)&&(d(z).abort(),b(z,null)),b(E,!1),b(w,""),b(T,""),b(O,0)}function ye(){b(u,!d(u))}function Ge(){if(b(y,""),b(A,null),d(i))b(p,d(i),!0);else{const k=Object.keys(d(a));b(p,k.length>0?k[0]:null,!0)}b(v,!0),d(p)&&ie(d(p))}function lt(){L.createConversation(),b(r,""),b(n,!1),d(s)&&(d(s).abort(),b(s,null))}function ke(k){L.setActive(k),b(r,""),b(n,!1),d(s)&&(d(s).abort(),b(s,null))}function Pe(k){L.deleteConversation(k)}async function mr(){var he;const k=d(r).trim();if(!k||d(n))return;if(!d(i)||!((he=d(a)[d(i)])!=null&&he.available)){j("먼저 AI Provider를 설정해주세요. 우상단 설정 버튼을 클릭하세요."),Ge();return}L.activeId||L.createConversation(),L.addMessage("user",k),b(r,""),b(n,!0),L.addMessage("assistant",""),L.updateLastMessage({loading:!0}),kn(m);const R=L.active,de=[];if(R){const te=R.messages.slice(0,-2);for(const D of te)(D.role==="user"||D.role==="assistant")&&D.text&&D.text.trim()&&!D.error&&!D.loading&&de.push({role:D.role,text:D.text})}const rt=Dc(null,k,{provider:d(i),model:d(l)},{onMeta(te){const D={meta:te};te.company&&(D.company=te.company),L.updateLastMessage(D)},onSnapshot(te){L.updateLastMessage({snapshot:te})},onContext(te){const D=L.active;if(!D)return;const me=D.messages[D.messages.length-1],We=(me==null?void 0:me.contexts)||[];L.updateLastMessage({contexts:[...We,{module:te.module,label:te.label,text:te.text}]})},onToolCall(te){const D=L.active;if(!D)return;const me=D.messages[D.messages.length-1],We=(me==null?void 0:me.toolEvents)||[];L.updateLastMessage({toolEvents:[...We,{type:"call",name:te.name,arguments:te.arguments}]})},onToolResult(te){const D=L.active;if(!D)return;const me=D.messages[D.messages.length-1],We=(me==null?void 0:me.toolEvents)||[];L.updateLastMessage({toolEvents:[...We,{type:"result",name:te.name,result:te.result}]})},onChunk(te){const D=L.active;if(!D)return;const me=D.messages[D.messages.length-1];L.updateLastMessage({text:((me==null?void 0:me.text)||"")+te}),kn(m)},onDone(){L.updateLastMessage({loading:!1}),b(n,!1),b(s,null),kn(m)},onError(te){L.updateLastMessage({text:`오류: ${te}`,loading:!1,error:!0}),j(te),b(n,!1),b(s,null)}},de);b(s,rt,!0)}function On(){d(s)&&(d(s).abort(),b(s,null),b(n,!1),L.updateLastMessage({loading:!1}))}function we(k){(k.metaKey||k.ctrlKey)&&k.key==="n"&&(k.preventDefault(),lt()),(k.metaKey||k.ctrlKey)&&k.shiftKey&&k.key==="S"&&(k.preventDefault(),ye()),k.key==="Escape"&&d(v)&&b(v,!1)}let Ln=Ie(()=>{var k;return((k=L.active)==null?void 0:k.messages)||[]}),jr=Ie(()=>L.active&&L.active.messages.length>0),Jt=Ie(()=>{var k;return!d(f)&&(!d(i)||!((k=d(a)[d(i)])!=null&&k.available))});const dn=[{name:"gemma3",size:"3B",gb:"2.3",desc:"Google, 빠르고 가벼움",tag:"추천"},{name:"gemma3:12b",size:"12B",gb:"8.1",desc:"Google, 균형잡힌 성능"},{name:"llama3.1",size:"8B",gb:"4.7",desc:"Meta, 범용 최강",tag:"추천"},{name:"qwen2.5",size:"7B",gb:"4.7",desc:"Alibaba, 한국어 우수"},{name:"qwen2.5:14b",size:"14B",gb:"9.0",desc:"Alibaba, 한국어 최고 수준"},{name:"deepseek-r1",size:"7B",gb:"4.7",desc:"추론 특화, 분석에 적합"},{name:"phi4",size:"14B",gb:"9.1",desc:"Microsoft, 수학/코드 강점"},{name:"mistral",size:"7B",gb:"4.1",desc:"Mistral AI, 가볍고 빠름"},{name:"exaone3.5",size:"8B",gb:"4.9",desc:"LG AI, 한국어 특화",tag:"한국어"}];var gr=uv();cc("keydown",Vs,we);var pa=H(gr),ha=g(pa);ou(ha,{get conversations(){return L.conversations},get activeId(){return L.activeId},get open(){return d(u)},onNewChat:lt,onSelect:ke,onDelete:Pe});var ji=M(ha,2),ma=g(ji),ga=g(ma),is=g(ga),Di=g(is);{var Fi=k=>{Hf(k,{size:18})},Vi=k=>{Wf(k,{size:18})};G(Di,k=>{d(u)?k(Fi):k(Vi,-1)})}var Bi=M(is,2),ba=g(Bi),Gi=g(ba);Bf(Gi,{size:15});var xa=M(ba,2),Wi=g(xa);Li(Wi,{size:15});var _a=M(xa,2),Hi=g(_a);Gf(Hi,{size:15});var ls=M(_a,4),ya=g(ls);{var Ki=k=>{var R=Lu(),de=H(R);Wt(de,{size:12,class:"animate-spin"}),S(k,R)},qi=k=>{var R=Ru(),de=H(R);Hn(de,{size:12}),S(k,R)},Ui=k=>{var R=Du(),de=M(H(R),2),rt=g(de),he=M(de,2);{var te=We=>{var cn=ju(),ds=M(H(cn),2),cs=g(ds);re(()=>se(cs,d(l))),S(We,cn)};G(he,We=>{d(l)&&We(te)})}var D=M(he,2);{var me=We=>{Wt(We,{size:10,class:"animate-spin text-dl-primary-light"})};G(D,We=>{d(E)&&We(me)})}re(()=>se(rt,d(i))),S(k,R)};G(ya,k=>{d(f)?k(Ki):d(Jt)?k(qi,1):k(Ui,-1)})}var Yi=M(ya,2);qf(Yi,{size:12});var Ji=M(ga,2);{var Xi=k=>{var R=Fu(),de=g(R);Wt(de,{size:16,class:"text-dl-text-dim animate-spin flex-shrink-0"}),S(k,R)},Zi=k=>{var R=Vu(),de=g(R);Hn(de,{size:16,class:"text-dl-primary-light flex-shrink-0"});var rt=M(de,4);Y("click",rt,()=>Ge()),S(k,R)};G(Ji,k=>{d(f)&&!d(v)?k(Xi):d(Jt)&&!d(v)&&k(Zi,1)})}var Qi=M(ma,2);{var el=k=>{Ou(k,{get messages(){return d(Ln)},get isLoading(){return d(n)},get scrollTrigger(){return d(m)},onSend:mr,onStop:On,get inputText(){return d(r)},set inputText(R){b(r,R,!0)}})},tl=k=>{du(k,{onSend:mr,get inputText(){return d(r)},set inputText(R){b(r,R,!0)}})};G(Qi,k=>{d(jr)?k(el):k(tl,-1)})}var wa=M(pa,2);{var rl=k=>{var R=cv(),de=g(R),rt=g(de),he=M(g(rt),2),te=g(he);Ri(te,{size:18});var D=M(rt,2),me=g(D);et(me,21,()=>Object.entries(d(a)),Qe,(bt,br)=>{var Xt=Ie(()=>wo(d(br),2));let ge=()=>d(Xt)[0],Ue=()=>d(Xt)[1];const fn=Ie(()=>ge()===d(i)),il=Ie(()=>d(p)===ge()),Dr=Ie(()=>Ue().auth==="api_key"),ka=Ie(()=>Ue().auth==="cli"),Rn=Ie(()=>d(_)[ge()]||[]),Sa=Ie(()=>d(h)[ge()]);var fs=dv(),us=g(fs),Aa=g(us),za=M(Aa,2),Ma=g(za),Ea=g(Ma),ll=g(Ea),dl=M(Ea,2);{var cl=Se=>{var dt=Bu();S(Se,dt)};G(dl,Se=>{d(fn)&&Se(cl)})}var fl=M(Ma,2),ul=g(fl),vl=M(za,2),pl=g(vl);{var hl=Se=>{fo(Se,{size:16,class:"text-dl-success"})},ml=Se=>{var dt=Gu(),Fr=H(dt);vo(Fr,{size:14,class:"text-amber-400"}),S(Se,dt)},gl=Se=>{var dt=Wu(),Fr=H(dt);Yf(Fr,{size:14,class:"text-dl-text-dim"}),S(Se,dt)};G(pl,Se=>{Ue().available?Se(hl):d(Dr)?Se(ml,1):d(ka)&&!Ue().available&&Se(gl,2)})}var bl=M(us,2);{var xl=Se=>{var dt=lv(),Fr=H(dt);{var _l=be=>{var Ce=Ku(),He=g(Ce),ct=g(He),xt=M(He,2),nt=g(xt),Vt=M(nt,2),xr=g(Vt);{var un=ae=>{Wt(ae,{size:12,class:"animate-spin"})},_t=ae=>{vo(ae,{size:12})};G(xr,ae=>{d(C)?ae(un):ae(_t,-1)})}var Zt=M(xt,2);{var xe=ae=>{var yt=Hu(),Ke=g(yt);Hn(Ke,{size:12}),S(ae,yt)};G(Zt,ae=>{d(A)==="error"&&ae(xe)})}re(ae=>{se(ct,Ue().envKey?`환경변수 ${Ue().envKey}로도 설정 가능합니다`:"API 키를 입력하세요"),Xn(nt,"placeholder",ge()==="openai"?"sk-...":ge()==="claude"?"sk-ant-...":"API Key"),Vt.disabled=ae},[()=>!d(y).trim()||d(C)]),Y("keydown",nt,ae=>{ae.key==="Enter"&&V()}),Wr(nt,()=>d(y),ae=>b(y,ae)),Y("click",Vt,V),S(be,Ce)};G(Fr,be=>{d(Dr)&&!Ue().available&&be(_l)})}var $a=M(Fr,2);{var yl=be=>{var Ce=Uu(),He=g(Ce),ct=g(He);fo(ct,{size:13,class:"text-dl-success"});var xt=M(He,2),nt=g(xt),Vt=M(nt,2);{var xr=_t=>{var Zt=qu(),xe=g(Zt);{var ae=Ke=>{Wt(Ke,{size:10,class:"animate-spin"})},yt=Ke=>{var Qt=Yn("변경");S(Ke,Qt)};G(xe,Ke=>{d(C)?Ke(ae):Ke(yt,-1)})}re(()=>Zt.disabled=d(C)),Y("click",Zt,V),S(_t,Zt)},un=Ie(()=>d(y).trim());G(Vt,_t=>{d(un)&&_t(xr)})}Y("keydown",nt,_t=>{_t.key==="Enter"&&V()}),Wr(nt,()=>d(y),_t=>b(y,_t)),S(be,Ce)};G($a,be=>{d(Dr)&&Ue().available&&be(yl)})}var Ta=M($a,2);{var wl=be=>{var Ce=Yu(),He=M(g(Ce),2),ct=g(He);Ms(ct,{size:14});var xt=M(ct,2);uo(xt,{size:10,class:"ml-auto"}),S(be,Ce)},kl=be=>{var Ce=Ju(),He=g(Ce),ct=g(He);Hn(ct,{size:14}),S(be,Ce)};G(Ta,be=>{ge()==="ollama"&&!d(o).installed?be(wl):ge()==="ollama"&&d(o).installed&&!d(o).running&&be(kl,1)})}var Na=M(Ta,2);{var Sl=be=>{var Ce=Xu(),He=g(Ce),ct=g(He),xt=M(He,2),nt=g(xt),Vt=M(xt,2),xr=g(Vt);re(()=>{se(ct,ge()==="claude-code"?"Claude Code CLI가 설치되어 있지 않습니다":"Codex CLI가 설치되어 있지 않습니다"),se(nt,ge()==="claude-code"?"npm install -g @anthropic-ai/claude-code":"npm install -g @openai/codex"),se(xr,ge()==="claude-code"?"설치 후 `claude auth login`으로 인증하세요":"설치 후 브라우저 인증이 필요합니다")}),S(be,Ce)};G(Na,be=>{d(ka)&&!Ue().available&&be(Sl)})}var Al=M(Na,2);{var zl=be=>{var Ce=iv(),He=g(Ce),ct=M(g(He),2);{var xt=xe=>{Wt(xe,{size:12,class:"animate-spin text-dl-text-dim"})};G(ct,xe=>{d(Sa)&&xe(xt)})}var nt=M(He,2);{var Vt=xe=>{var ae=Zu(),yt=g(ae);Wt(yt,{size:14,class:"animate-spin"}),S(xe,ae)},xr=xe=>{var ae=ev();et(ae,21,()=>d(Rn),Qe,(yt,Ke)=>{var Qt=Qu(),jn=g(Qt),vs=M(jn);{var ps=ft=>{Ff(ft,{size:10,class:"inline ml-1"})};G(vs,ft=>{d(Ke)===d(l)&&d(fn)&&ft(ps)})}re(ft=>{Re(Qt,1,ft),se(jn,`${d(Ke)??""} `)},[()=>Le(Te("px-3 py-1.5 rounded-lg text-[11px] border transition-all",d(Ke)===d(l)&&d(fn)?"border-dl-primary/50 bg-dl-primary/10 text-dl-primary-light font-medium":"border-dl-border text-dl-text-muted hover:border-dl-primary/30 hover:text-dl-text"))]),Y("click",Qt,()=>{ge()!==d(i)&&ne(ge()),Q(d(Ke))}),S(yt,Qt)}),S(xe,ae)},un=xe=>{var ae=tv();S(xe,ae)};G(nt,xe=>{d(Sa)&&d(Rn).length===0?xe(Vt):d(Rn).length>0?xe(xr,1):xe(un,-1)})}var _t=M(nt,2);{var Zt=xe=>{var ae=ov(),yt=g(ae),Ke=M(g(yt),2),Qt=M(g(Ke));uo(Qt,{size:9});var jn=M(yt,2);{var vs=ft=>{var vn=rv(),pn=g(vn),Vr=g(pn),hn=g(Vr);Wt(hn,{size:12,class:"animate-spin text-dl-primary-light"});var hs=M(Vr,2),Dn=M(pn,2),Bt=g(Dn),wt=M(Dn,2),ms=g(wt);re(()=>{hi(Bt,`width: ${d(O)??""}%`),se(ms,d(T))}),Y("click",hs,Be),S(ft,vn)},ps=ft=>{var vn=av(),pn=H(vn),Vr=g(pn),hn=M(Vr,2),hs=g(hn);Ms(hs,{size:12});var Dn=M(pn,2);et(Dn,21,()=>dn,Qe,(Bt,wt)=>{const ms=Ie(()=>d(Rn).some(Br=>Br===d(wt).name||Br===d(wt).name.split(":")[0]));var Pa=oe(),Ml=H(Pa);{var El=Br=>{var gs=sv(),Ca=g(gs),Ia=g(Ca),Oa=g(Ia),$l=g(Oa),La=M(Oa,2),Tl=g(La),Nl=M(La,2);{var Pl=bs=>{var ja=nv(),jl=g(ja);re(()=>se(jl,d(wt).tag)),S(bs,ja)};G(Nl,bs=>{d(wt).tag&&bs(Pl)})}var Cl=M(Ia,2),Il=g(Cl),Ol=M(Ca,2),Ra=g(Ol),Ll=g(Ra),Rl=M(Ra,2);Ms(Rl,{size:12,class:"text-dl-text-dim group-hover:text-dl-primary-light transition-colors"}),re(()=>{se($l,d(wt).name),se(Tl,d(wt).size),se(Il,d(wt).desc),se(Ll,`${d(wt).gb??""} GB`)}),Y("click",gs,()=>{b(w,d(wt).name,!0),$()}),S(Br,gs)};G(Ml,Br=>{d(ms)||Br(El)})}S(Bt,Pa)}),re(Bt=>hn.disabled=Bt,[()=>!d(w).trim()]),Y("keydown",Vr,Bt=>{Bt.key==="Enter"&&$()}),Wr(Vr,()=>d(w),Bt=>b(w,Bt)),Y("click",hn,$),S(ft,vn)};G(jn,ft=>{d(E)?ft(vs):ft(ps,-1)})}S(xe,ae)};G(_t,xe=>{ge()==="ollama"&&xe(Zt)})}S(be,Ce)};G(Al,be=>{(Ue().available||d(Dr))&&be(zl)})}S(Se,dt)};G(bl,Se=>{(d(il)||d(fn))&&Se(xl)})}re((Se,dt)=>{Re(fs,1,Se),Re(Aa,1,dt),se(ll,Ue().label||ge()),se(ul,Ue().desc||"")},[()=>Le(Te("rounded-xl border transition-all",d(fn)?"border-dl-primary/40 bg-dl-primary/[0.03]":"border-dl-border")),()=>Le(Te("w-2.5 h-2.5 rounded-full flex-shrink-0",Ue().available?"bg-dl-success":d(Dr)?"bg-amber-400":"bg-dl-text-dim"))]),Y("click",us,()=>{Ue().available||d(Dr)?ge()===d(i)?F(ge()):ne(ge()):F(ge())}),S(bt,fs)});var We=M(D,2),cn=g(We),ds=g(cn);{var cs=bt=>{var br=Yn();re(()=>{var Xt;return se(br,`현재: ${(((Xt=d(a)[d(i)])==null?void 0:Xt.label)||d(i))??""} / ${d(l)??""}`)}),S(bt,br)},al=bt=>{var br=Yn();re(()=>{var Xt;return se(br,`현재: ${(((Xt=d(a)[d(i)])==null?void 0:Xt.label)||d(i))??""}`)}),S(bt,br)};G(ds,bt=>{d(i)&&d(l)?bt(cs):d(i)&&bt(al,1)})}var ol=M(cn,2);Y("click",R,bt=>{bt.target===bt.currentTarget&&b(v,!1)}),Y("keydown",R,()=>{}),Y("click",he,()=>b(v,!1)),Y("click",ol,()=>b(v,!1)),S(k,R)};G(wa,k=>{d(v)&&k(rl)})}var nl=M(wa,2);{var sl=k=>{var R=fv(),de=g(R),rt=g(de);re(he=>{Re(de,1,he),se(rt,d(W))},[()=>Le(Te("px-4 py-3 rounded-xl border text-[13px] shadow-2xl max-w-sm",d(le)==="error"?"bg-dl-primary/10 border-dl-primary/30 text-dl-primary-light":d(le)==="success"?"bg-dl-success/10 border-dl-success/30 text-dl-success":"bg-dl-bg-card border-dl-border text-dl-text"))]),S(k,R)};G(nl,k=>{d(B)&&k(sl)})}re(k=>Re(ls,1,k),[()=>Le(Te("flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] transition-colors",d(f)?"text-dl-text-dim":d(Jt)?"text-dl-primary-light bg-dl-primary/10 hover:bg-dl-primary/15":"text-dl-text-dim hover:text-dl-text-muted hover:bg-white/5"))]),Y("click",is,ye),Y("click",ls,()=>Ge()),S(e,gr),Yt()}ln(["click","keydown"]);pc(vv,{target:document.getElementById("app")});
