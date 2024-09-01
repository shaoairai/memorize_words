(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function gu(t,e){const n=new Set(t.split(","));return s=>n.has(s)}const ke={},gi=[],Dt=()=>{},H0=()=>!1,Ha=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),vu=t=>t.startsWith("onUpdate:"),st=Object.assign,yu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},j0=Object.prototype.hasOwnProperty,_e=(t,e)=>j0.call(t,e),ne=Array.isArray,vi=t=>so(t)==="[object Map]",ja=t=>so(t)==="[object Set]",Gd=t=>so(t)==="[object Date]",ae=t=>typeof t=="function",Be=t=>typeof t=="string",rn=t=>typeof t=="symbol",Ne=t=>t!==null&&typeof t=="object",km=t=>(Ne(t)||ae(t))&&ae(t.then)&&ae(t.catch),Dm=Object.prototype.toString,so=t=>Dm.call(t),B0=t=>so(t).slice(8,-1),Lm=t=>so(t)==="[object Object]",Eu=t=>Be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Er=gu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ba=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},z0=/-(\w)/g,Kt=Ba(t=>t.replace(z0,(e,n)=>n?n.toUpperCase():"")),K0=/\B([A-Z])/g,ds=Ba(t=>t.replace(K0,"-$1").toLowerCase()),za=Ba(t=>t.charAt(0).toUpperCase()+t.slice(1)),Wl=Ba(t=>t?`on${za(t)}`:""),rs=(t,e)=>!Object.is(t,e),Ko=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Mm=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},aa=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Yd;const Fm=()=>Yd||(Yd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function qi(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Be(s)?Q0(s):qi(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(Be(t)||Ne(t))return t}const G0=/;(?![^(]*\))/g,Y0=/:([^]+)/,q0=/\/\*[^]*?\*\//g;function Q0(t){const e={};return t.replace(q0,"").split(G0).forEach(n=>{if(n){const s=n.split(Y0);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function bu(t){let e="";if(Be(t))e=t;else if(ne(t))for(let n=0;n<t.length;n++){const s=bu(t[n]);s&&(e+=s+" ")}else if(Ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const X0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",J0=gu(X0);function $m(t){return!!t||t===""}function Z0(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Ka(t[s],e[s]);return n}function Ka(t,e){if(t===e)return!0;let n=Gd(t),s=Gd(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=rn(t),s=rn(e),n||s)return t===e;if(n=ne(t),s=ne(e),n||s)return n&&s?Z0(t,e):!1;if(n=Ne(t),s=Ne(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ka(t[o],e[o]))return!1}}return String(t)===String(e)}function eC(t,e){return t.findIndex(n=>Ka(n,e))}const Um=t=>!!(t&&t.__v_isRef===!0),kt=t=>Be(t)?t:t==null?"":ne(t)||Ne(t)&&(t.toString===Dm||!ae(t.toString))?Um(t)?kt(t.value):JSON.stringify(t,Wm,2):String(t),Wm=(t,e)=>Um(e)?Wm(t,e.value):vi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Vl(s,r)+" =>"]=i,n),{})}:ja(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Vl(n))}:rn(e)?Vl(e):Ne(e)&&!ne(e)&&!Lm(e)?String(e):e,Vl=(t,e="")=>{var n;return rn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wt;class Vm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Wt,!e&&Wt&&(this.index=(Wt.scopes||(Wt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Wt;try{return Wt=this,e()}finally{Wt=n}}}on(){Wt=this}off(){Wt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function tC(t){return new Vm(t)}function nC(t,e=Wt){e&&e.active&&e.effects.push(t)}function sC(){return Wt}let Ms;class wu{constructor(e,n,s,i){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,nC(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,hs();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(iC(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),ps()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Jn,n=Ms;try{return Jn=!0,Ms=this,this._runnings++,qd(this),this.fn()}finally{Qd(this),this._runnings--,Ms=n,Jn=e}}stop(){this.active&&(qd(this),Qd(this),this.onStop&&this.onStop(),this.active=!1)}}function iC(t){return t.value}function qd(t){t._trackId++,t._depsLength=0}function Qd(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Hm(t.deps[e],t);t.deps.length=t._depsLength}}function Hm(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Jn=!0,_c=0;const jm=[];function hs(){jm.push(Jn),Jn=!1}function ps(){const t=jm.pop();Jn=t===void 0?!0:t}function Cu(){_c++}function Tu(){for(_c--;!_c&&gc.length;)gc.shift()()}function Bm(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&Hm(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const gc=[];function zm(t,e,n){Cu();for(const s of t.keys()){let i;s._dirtyLevel<e&&(i??(i=t.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=e),s._shouldSchedule&&(i??(i=t.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&gc.push(s.scheduler)))}Tu()}const Km=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},vc=new WeakMap,Fs=Symbol(""),yc=Symbol("");function vt(t,e,n){if(Jn&&Ms){let s=vc.get(t);s||vc.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Km(()=>s.delete(n))),Bm(Ms,i)}}function En(t,e,n,s,i,r){const o=vc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&ne(t)){const l=Number(s);o.forEach((u,f)=>{(f==="length"||!rn(f)&&f>=l)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":ne(t)?Eu(n)&&a.push(o.get("length")):(a.push(o.get(Fs)),vi(t)&&a.push(o.get(yc)));break;case"delete":ne(t)||(a.push(o.get(Fs)),vi(t)&&a.push(o.get(yc)));break;case"set":vi(t)&&a.push(o.get(Fs));break}Cu();for(const l of a)l&&zm(l,4);Tu()}const rC=gu("__proto__,__v_isRef,__isVue"),Gm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(rn)),Xd=oC();function oC(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Ee(this);for(let r=0,o=this.length;r<o;r++)vt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(Ee)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){hs(),Cu();const s=Ee(this)[e].apply(this,n);return Tu(),ps(),s}}),t}function aC(t){rn(t)||(t=String(t));const e=Ee(this);return vt(e,"has",t),e.hasOwnProperty(t)}class Ym{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?EC:Jm:r?Xm:Qm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=ne(e);if(!i){if(o&&_e(Xd,n))return Reflect.get(Xd,n,s);if(n==="hasOwnProperty")return aC}const a=Reflect.get(e,n,s);return(rn(n)?Gm.has(n):rC(n))||(i||vt(e,"get",n),r)?a:yt(a)?o&&Eu(n)?a:a.value:Ne(a)?i?e_(a):Ya(a):a}}class qm extends Ym{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const l=Hs(r);if(!Ni(s)&&!Hs(s)&&(r=Ee(r),s=Ee(s)),!ne(e)&&yt(r)&&!yt(s))return l?!1:(r.value=s,!0)}const o=ne(e)&&Eu(n)?Number(n)<e.length:_e(e,n),a=Reflect.set(e,n,s,i);return e===Ee(i)&&(o?rs(s,r)&&En(e,"set",n,s):En(e,"add",n,s)),a}deleteProperty(e,n){const s=_e(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&En(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!rn(n)||!Gm.has(n))&&vt(e,"has",n),s}ownKeys(e){return vt(e,"iterate",ne(e)?"length":Fs),Reflect.ownKeys(e)}}class lC extends Ym{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const cC=new qm,uC=new lC,fC=new qm(!0);const Su=t=>t,Ga=t=>Reflect.getPrototypeOf(t);function Lo(t,e,n=!1,s=!1){t=t.__v_raw;const i=Ee(t),r=Ee(e);n||(rs(e,r)&&vt(i,"get",e),vt(i,"get",r));const{has:o}=Ga(i),a=s?Su:n?Ou:Mr;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Mo(t,e=!1){const n=this.__v_raw,s=Ee(n),i=Ee(t);return e||(rs(t,i)&&vt(s,"has",t),vt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Fo(t,e=!1){return t=t.__v_raw,!e&&vt(Ee(t),"iterate",Fs),Reflect.get(t,"size",t)}function Jd(t,e=!1){!e&&!Ni(t)&&!Hs(t)&&(t=Ee(t));const n=Ee(this);return Ga(n).has.call(n,t)||(n.add(t),En(n,"add",t,t)),this}function Zd(t,e,n=!1){!n&&!Ni(e)&&!Hs(e)&&(e=Ee(e));const s=Ee(this),{has:i,get:r}=Ga(s);let o=i.call(s,t);o||(t=Ee(t),o=i.call(s,t));const a=r.call(s,t);return s.set(t,e),o?rs(e,a)&&En(s,"set",t,e):En(s,"add",t,e),this}function eh(t){const e=Ee(this),{has:n,get:s}=Ga(e);let i=n.call(e,t);i||(t=Ee(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&En(e,"delete",t,void 0),r}function th(){const t=Ee(this),e=t.size!==0,n=t.clear();return e&&En(t,"clear",void 0,void 0),n}function $o(t,e){return function(s,i){const r=this,o=r.__v_raw,a=Ee(o),l=e?Su:t?Ou:Mr;return!t&&vt(a,"iterate",Fs),o.forEach((u,f)=>s.call(i,l(u),l(f),r))}}function Uo(t,e,n){return function(...s){const i=this.__v_raw,r=Ee(i),o=vi(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=i[t](...s),f=n?Su:e?Ou:Mr;return!e&&vt(r,"iterate",l?yc:Fs),{next(){const{value:h,done:p}=u.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function Mn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function dC(){const t={get(r){return Lo(this,r)},get size(){return Fo(this)},has:Mo,add:Jd,set:Zd,delete:eh,clear:th,forEach:$o(!1,!1)},e={get(r){return Lo(this,r,!1,!0)},get size(){return Fo(this)},has:Mo,add(r){return Jd.call(this,r,!0)},set(r,o){return Zd.call(this,r,o,!0)},delete:eh,clear:th,forEach:$o(!1,!0)},n={get(r){return Lo(this,r,!0)},get size(){return Fo(this,!0)},has(r){return Mo.call(this,r,!0)},add:Mn("add"),set:Mn("set"),delete:Mn("delete"),clear:Mn("clear"),forEach:$o(!0,!1)},s={get(r){return Lo(this,r,!0,!0)},get size(){return Fo(this,!0)},has(r){return Mo.call(this,r,!0)},add:Mn("add"),set:Mn("set"),delete:Mn("delete"),clear:Mn("clear"),forEach:$o(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Uo(r,!1,!1),n[r]=Uo(r,!0,!1),e[r]=Uo(r,!1,!0),s[r]=Uo(r,!0,!0)}),[t,n,e,s]}const[hC,pC,mC,_C]=dC();function Iu(t,e){const n=e?t?_C:mC:t?pC:hC;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(_e(n,i)&&i in s?n:s,i,r)}const gC={get:Iu(!1,!1)},vC={get:Iu(!1,!0)},yC={get:Iu(!0,!1)};const Qm=new WeakMap,Xm=new WeakMap,Jm=new WeakMap,EC=new WeakMap;function bC(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wC(t){return t.__v_skip||!Object.isExtensible(t)?0:bC(B0(t))}function Ya(t){return Hs(t)?t:Au(t,!1,cC,gC,Qm)}function Zm(t){return Au(t,!1,fC,vC,Xm)}function e_(t){return Au(t,!0,uC,yC,Jm)}function Au(t,e,n,s,i){if(!Ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=wC(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function br(t){return Hs(t)?br(t.__v_raw):!!(t&&t.__v_isReactive)}function Hs(t){return!!(t&&t.__v_isReadonly)}function Ni(t){return!!(t&&t.__v_isShallow)}function t_(t){return t?!!t.__v_raw:!1}function Ee(t){const e=t&&t.__v_raw;return e?Ee(e):t}function n_(t){return Object.isExtensible(t)&&Mm(t,"__v_skip",!0),t}const Mr=t=>Ne(t)?Ya(t):t,Ou=t=>Ne(t)?e_(t):t;class s_{constructor(e,n,s,i){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new wu(()=>e(this._value),()=>Go(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=Ee(this);return(!e._cacheable||e.effect.dirty)&&rs(e._value,e._value=e.effect.run())&&Go(e,4),i_(e),e.effect._dirtyLevel>=2&&Go(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function CC(t,e,n=!1){let s,i;const r=ae(t);return r?(s=t,i=Dt):(s=t.get,i=t.set),new s_(s,i,r||!i,n)}function i_(t){var e;Jn&&Ms&&(t=Ee(t),Bm(Ms,(e=t.dep)!=null?e:t.dep=Km(()=>t.dep=void 0,t instanceof s_?t:void 0)))}function Go(t,e=4,n,s){t=Ee(t);const i=t.dep;i&&zm(i,e)}function yt(t){return!!(t&&t.__v_isRef===!0)}function Ce(t){return r_(t,!1)}function TC(t){return r_(t,!0)}function r_(t,e){return yt(t)?t:new SC(t,e)}class SC{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ee(e),this._value=n?e:Mr(e)}get value(){return i_(this),this._value}set value(e){const n=this.__v_isShallow||Ni(e)||Hs(e);e=n?e:Ee(e),rs(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:Mr(e),Go(this,4))}}function jt(t){return yt(t)?t.value:t}const IC={get:(t,e,n)=>jt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return yt(i)&&!yt(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function o_(t){return br(t)?t:new Proxy(t,IC)}/**
* @vue/runtime-core v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zn(t,e,n,s){try{return s?t(...s):t()}catch(i){qa(i,e,n)}}function Bt(t,e,n,s){if(ae(t)){const i=Zn(t,e,n,s);return i&&km(i)&&i.catch(r=>{qa(r,e,n)}),i}if(ne(t)){const i=[];for(let r=0;r<t.length;r++)i.push(Bt(t[r],e,n,s));return i}}function qa(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const u=r.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){hs(),Zn(l,null,10,[t,o,a]),ps();return}}AC(t,n,i,s)}function AC(t,e,n,s=!0){console.error(t)}let Fr=!1,Ec=!1;const tt=[];let Jt=0;const yi=[];let Wn=null,Ns=0;const a_=Promise.resolve();let Nu=null;function Ru(t){const e=Nu||a_;return t?e.then(this?t.bind(this):t):e}function OC(t){let e=Jt+1,n=tt.length;for(;e<n;){const s=e+n>>>1,i=tt[s],r=$r(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function Pu(t){(!tt.length||!tt.includes(t,Fr&&t.allowRecurse?Jt+1:Jt))&&(t.id==null?tt.push(t):tt.splice(OC(t.id),0,t),l_())}function l_(){!Fr&&!Ec&&(Ec=!0,Nu=a_.then(u_))}function NC(t){const e=tt.indexOf(t);e>Jt&&tt.splice(e,1)}function RC(t){ne(t)?yi.push(...t):(!Wn||!Wn.includes(t,t.allowRecurse?Ns+1:Ns))&&yi.push(t),l_()}function nh(t,e,n=Fr?Jt+1:0){for(;n<tt.length;n++){const s=tt[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;tt.splice(n,1),n--,s()}}}function c_(t){if(yi.length){const e=[...new Set(yi)].sort((n,s)=>$r(n)-$r(s));if(yi.length=0,Wn){Wn.push(...e);return}for(Wn=e,Ns=0;Ns<Wn.length;Ns++){const n=Wn[Ns];n.active!==!1&&n()}Wn=null,Ns=0}}const $r=t=>t.id==null?1/0:t.id,PC=(t,e)=>{const n=$r(t)-$r(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function u_(t){Ec=!1,Fr=!0,tt.sort(PC);try{for(Jt=0;Jt<tt.length;Jt++){const e=tt[Jt];e&&e.active!==!1&&Zn(e,e.i,e.i?15:14)}}finally{Jt=0,tt.length=0,c_(),Fr=!1,Nu=null,(tt.length||yi.length)&&u_()}}let bt=null,Qa=null;function la(t){const e=bt;return bt=t,Qa=t&&t.type.__scopeId||null,e}function xC(t){Qa=t}function kC(){Qa=null}function ca(t,e=bt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&fh(-1);const r=la(e);let o;try{o=t(...i)}finally{la(r),s._d&&fh(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function pn(t,e){if(bt===null)return t;const n=tl(bt),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=ke]=e[i];r&&(ae(r)&&(r={mounted:r,updated:r}),r.deep&&Bn(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Ss(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(hs(),Bt(l,n,8,[t.el,a,t,e]),ps())}}function f_(t,e){t.shapeFlag&6&&t.component?f_(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function xu(t,e){return ae(t)?st({name:t.name},e,{setup:t}):t}const Yo=t=>!!t.type.__asyncLoader,d_=t=>t.type.__isKeepAlive;function DC(t,e){h_(t,"a",e)}function LC(t,e){h_(t,"da",e)}function h_(t,e,n=nt){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Xa(e,s,n),n){let i=n.parent;for(;i&&i.parent;)d_(i.parent.vnode)&&MC(s,e,n,i),i=i.parent}}function MC(t,e,n,s){const i=Xa(e,t,s,!0);io(()=>{yu(s[e],i)},n)}function Xa(t,e,n=nt,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{hs();const a=ro(n),l=Bt(e,n,t,o);return a(),ps(),l});return s?i.unshift(r):i.push(r),r}}const Rn=t=>(e,n=nt)=>{(!el||t==="sp")&&Xa(t,(...s)=>e(...s),n)},FC=Rn("bm"),Ri=Rn("m"),$C=Rn("bu"),UC=Rn("u"),WC=Rn("bum"),io=Rn("um"),VC=Rn("sp"),HC=Rn("rtg"),jC=Rn("rtc");function BC(t,e=nt){Xa("ec",t,e)}const p_="components";function m_(t,e){return KC(p_,t,!0,e)||t}const zC=Symbol.for("v-ndc");function KC(t,e,n=!0,s=!1){const i=bt||nt;if(i){const r=i.type;if(t===p_){const a=MT(r,!1);if(a&&(a===e||a===Kt(e)||a===za(Kt(e))))return r}const o=sh(i[t]||r[t],e)||sh(i.appContext[t],e);return!o&&s?r:o}}function sh(t,e){return t&&(t[e]||t[Kt(e)]||t[za(Kt(e))])}function GC(t,e,n,s){let i;const r=n;if(ne(t)||Be(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r)}else if(Ne(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const u=o[a];i[a]=e(t[u],u,a,r)}}else i=[];return i}const bc=t=>t?M_(t)?tl(t):bc(t.parent):null,wr=st(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>bc(t.parent),$root:t=>bc(t.root),$emit:t=>t.emit,$options:t=>ku(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Pu(t.update)}),$nextTick:t=>t.n||(t.n=Ru.bind(t.proxy)),$watch:t=>_T.bind(t)}),Hl=(t,e)=>t!==ke&&!t.__isScriptSetup&&_e(t,e),YC={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Hl(s,e))return o[e]=1,s[e];if(i!==ke&&_e(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&_e(u,e))return o[e]=3,r[e];if(n!==ke&&_e(n,e))return o[e]=4,n[e];wc&&(o[e]=0)}}const f=wr[e];let h,p;if(f)return e==="$attrs"&&vt(t.attrs,"get",""),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ke&&_e(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,_e(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Hl(i,e)?(i[e]=n,!0):s!==ke&&_e(s,e)?(s[e]=n,!0):_e(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==ke&&_e(t,o)||Hl(e,o)||(a=r[0])&&_e(a,o)||_e(s,o)||_e(wr,o)||_e(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:_e(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ih(t){return ne(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let wc=!0;function qC(t){const e=ku(t),n=t.proxy,s=t.ctx;wc=!1,e.beforeCreate&&rh(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:u,created:f,beforeMount:h,mounted:p,beforeUpdate:_,updated:E,activated:w,deactivated:A,beforeDestroy:C,beforeUnmount:T,destroyed:x,unmounted:M,render:L,renderTracked:O,renderTriggered:$,errorCaptured:j,serverPrefetch:Y,expose:ee,inheritAttrs:re,components:Re,directives:ve,filters:it}=e;if(u&&QC(u,s,null),o)for(const oe in o){const ue=o[oe];ae(ue)&&(s[oe]=ue.bind(n))}if(i){const oe=i.call(n,n);Ne(oe)&&(t.data=Ya(oe))}if(wc=!0,r)for(const oe in r){const ue=r[oe],Ue=ae(ue)?ue.bind(n,n):ae(ue.get)?ue.get.bind(n,n):Dt,rt=!ae(ue)&&ae(ue.set)?ue.set.bind(n):Dt,qe=Ve({get:Ue,set:rt});Object.defineProperty(s,oe,{enumerable:!0,configurable:!0,get:()=>qe.value,set:Le=>qe.value=Le})}if(a)for(const oe in a)__(a[oe],s,n,oe);if(l){const oe=ae(l)?l.call(n):l;Reflect.ownKeys(oe).forEach(ue=>{qo(ue,oe[ue])})}f&&rh(f,t,"c");function me(oe,ue){ne(ue)?ue.forEach(Ue=>oe(Ue.bind(n))):ue&&oe(ue.bind(n))}if(me(FC,h),me(Ri,p),me($C,_),me(UC,E),me(DC,w),me(LC,A),me(BC,j),me(jC,O),me(HC,$),me(WC,T),me(io,M),me(VC,Y),ne(ee))if(ee.length){const oe=t.exposed||(t.exposed={});ee.forEach(ue=>{Object.defineProperty(oe,ue,{get:()=>n[ue],set:Ue=>n[ue]=Ue})})}else t.exposed||(t.exposed={});L&&t.render===Dt&&(t.render=L),re!=null&&(t.inheritAttrs=re),Re&&(t.components=Re),ve&&(t.directives=ve)}function QC(t,e,n=Dt){ne(t)&&(t=Cc(t));for(const s in t){const i=t[s];let r;Ne(i)?"default"in i?r=bn(i.from||s,i.default,!0):r=bn(i.from||s):r=bn(i),yt(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function rh(t,e,n){Bt(ne(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function __(t,e,n,s){const i=s.includes(".")?R_(n,s):()=>n[s];if(Be(t)){const r=e[t];ae(r)&&bi(i,r)}else if(ae(t))bi(i,t.bind(n));else if(Ne(t))if(ne(t))t.forEach(r=>__(r,e,n,s));else{const r=ae(t.handler)?t.handler.bind(n):e[t.handler];ae(r)&&bi(i,r,t)}}function ku(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(u=>ua(l,u,o,!0)),ua(l,e,o)),Ne(e)&&r.set(e,l),l}function ua(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&ua(t,r,n,!0),i&&i.forEach(o=>ua(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=XC[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const XC={data:oh,props:ah,emits:ah,methods:gr,computed:gr,beforeCreate:lt,created:lt,beforeMount:lt,mounted:lt,beforeUpdate:lt,updated:lt,beforeDestroy:lt,beforeUnmount:lt,destroyed:lt,unmounted:lt,activated:lt,deactivated:lt,errorCaptured:lt,serverPrefetch:lt,components:gr,directives:gr,watch:ZC,provide:oh,inject:JC};function oh(t,e){return e?t?function(){return st(ae(t)?t.call(this,this):t,ae(e)?e.call(this,this):e)}:e:t}function JC(t,e){return gr(Cc(t),Cc(e))}function Cc(t){if(ne(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function lt(t,e){return t?[...new Set([].concat(t,e))]:e}function gr(t,e){return t?st(Object.create(null),t,e):e}function ah(t,e){return t?ne(t)&&ne(e)?[...new Set([...t,...e])]:st(Object.create(null),ih(t),ih(e??{})):e}function ZC(t,e){if(!t)return e;if(!e)return t;const n=st(Object.create(null),t);for(const s in e)n[s]=lt(t[s],e[s]);return n}function g_(){return{app:null,config:{isNativeTag:H0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let eT=0;function tT(t,e){return function(s,i=null){ae(s)||(s=st({},s)),i!=null&&!Ne(i)&&(i=null);const r=g_(),o=new WeakSet;let a=!1;const l=r.app={_uid:eT++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:$T,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&ae(u.install)?(o.add(u),u.install(l,...f)):ae(u)&&(o.add(u),u(l,...f))),l},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),l},component(u,f){return f?(r.components[u]=f,l):r.components[u]},directive(u,f){return f?(r.directives[u]=f,l):r.directives[u]},mount(u,f,h){if(!a){const p=Se(s,i);return p.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),f&&e?e(p,u):t(p,u,h),a=!0,l._container=u,u.__vue_app__=l,tl(p.component)}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,f){return r.provides[u]=f,l},runWithContext(u){const f=Ei;Ei=l;try{return u()}finally{Ei=f}}};return l}}let Ei=null;function qo(t,e){if(nt){let n=nt.provides;const s=nt.parent&&nt.parent.provides;s===n&&(n=nt.provides=Object.create(s)),n[t]=e}}function bn(t,e,n=!1){const s=nt||bt;if(s||Ei){const i=Ei?Ei._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ae(e)?e.call(s&&s.proxy):e}}const v_={},y_=()=>Object.create(v_),E_=t=>Object.getPrototypeOf(t)===v_;function nT(t,e,n,s=!1){const i={},r=y_();t.propsDefaults=Object.create(null),b_(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Zm(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function sT(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=Ee(i),[l]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(Ja(t.emitsOptions,p))continue;const _=e[p];if(l)if(_e(r,p))_!==r[p]&&(r[p]=_,u=!0);else{const E=Kt(p);i[E]=Tc(l,a,E,_,t,!1)}else _!==r[p]&&(r[p]=_,u=!0)}}}else{b_(t,e,i,r)&&(u=!0);let f;for(const h in a)(!e||!_e(e,h)&&((f=ds(h))===h||!_e(e,f)))&&(l?n&&(n[h]!==void 0||n[f]!==void 0)&&(i[h]=Tc(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!_e(e,h))&&(delete r[h],u=!0)}u&&En(t.attrs,"set","")}function b_(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Er(l))continue;const u=e[l];let f;i&&_e(i,f=Kt(l))?!r||!r.includes(f)?n[f]=u:(a||(a={}))[f]=u:Ja(t.emitsOptions,l)||(!(l in s)||u!==s[l])&&(s[l]=u,o=!0)}if(r){const l=Ee(n),u=a||ke;for(let f=0;f<r.length;f++){const h=r[f];n[h]=Tc(i,l,h,u[h],t,!_e(u,h))}}return o}function Tc(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=_e(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ae(l)){const{propsDefaults:u}=i;if(n in u)s=u[n];else{const f=ro(i);s=u[n]=l.call(null,e),f()}}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===ds(n))&&(s=!0))}return s}const iT=new WeakMap;function w_(t,e,n=!1){const s=n?iT:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!ae(t)){const f=h=>{l=!0;const[p,_]=w_(h,e,!0);st(o,p),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!r&&!l)return Ne(t)&&s.set(t,gi),gi;if(ne(r))for(let f=0;f<r.length;f++){const h=Kt(r[f]);lh(h)&&(o[h]=ke)}else if(r)for(const f in r){const h=Kt(f);if(lh(h)){const p=r[f],_=o[h]=ne(p)||ae(p)?{type:p}:st({},p),E=_.type;let w=!1,A=!0;if(ne(E))for(let C=0;C<E.length;++C){const T=E[C],x=ae(T)&&T.name;if(x==="Boolean"){w=!0;break}else x==="String"&&(A=!1)}else w=ae(E)&&E.name==="Boolean";_[0]=w,_[1]=A,(w||_e(_,"default"))&&a.push(h)}}const u=[o,a];return Ne(t)&&s.set(t,u),u}function lh(t){return t[0]!=="$"&&!Er(t)}const C_=t=>t[0]==="_"||t==="$stable",Du=t=>ne(t)?t.map(Xt):[Xt(t)],rT=(t,e,n)=>{if(e._n)return e;const s=ca((...i)=>Du(e(...i)),n);return s._c=!1,s},T_=(t,e,n)=>{const s=t._ctx;for(const i in t){if(C_(i))continue;const r=t[i];if(ae(r))e[i]=rT(i,r,s);else if(r!=null){const o=Du(r);e[i]=()=>o}}},S_=(t,e)=>{const n=Du(e);t.slots.default=()=>n},I_=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},oT=(t,e,n)=>{const s=t.slots=y_();if(t.vnode.shapeFlag&32){const i=e._;i?(I_(s,e,n),n&&Mm(s,"_",i,!0)):T_(e,s)}else e&&S_(t,e)},aT=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ke;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:I_(i,e,n):(r=!e.$stable,T_(e,i)),o=e}else e&&(S_(t,e),o={default:1});if(r)for(const a in i)!C_(a)&&o[a]==null&&delete i[a]};function Sc(t,e,n,s,i=!1){if(ne(t)){t.forEach((p,_)=>Sc(p,e&&(ne(e)?e[_]:e),n,s,i));return}if(Yo(s)&&!i)return;const r=s.shapeFlag&4?tl(s.component):s.el,o=i?null:r,{i:a,r:l}=t,u=e&&e.r,f=a.refs===ke?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==l&&(Be(u)?(f[u]=null,_e(h,u)&&(h[u]=null)):yt(u)&&(u.value=null)),ae(l))Zn(l,a,12,[o,f]);else{const p=Be(l),_=yt(l);if(p||_){const E=()=>{if(t.f){const w=p?_e(h,l)?h[l]:f[l]:l.value;i?ne(w)&&yu(w,r):ne(w)?w.includes(r)||w.push(r):p?(f[l]=[r],_e(h,l)&&(h[l]=f[l])):(l.value=[r],t.k&&(f[t.k]=l.value))}else p?(f[l]=o,_e(h,l)&&(h[l]=o)):_&&(l.value=o,t.k&&(f[t.k]=o))};o?(E.id=-1,_t(E,n)):E()}}}const lT=Symbol("_vte"),cT=t=>t.__isTeleport,_t=TT;function uT(t){return fT(t)}function fT(t,e){const n=Fm();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:u,setElementText:f,parentNode:h,nextSibling:p,setScopeId:_=Dt,insertStaticContent:E}=t,w=(m,v,b,k=null,N=null,D=null,z=void 0,S=null,W=!!v.dynamicChildren)=>{if(m===v)return;m&&!fr(m,v)&&(k=R(m),Le(m,N,D,!0),m=null),v.patchFlag===-2&&(W=!1,v.dynamicChildren=null);const{type:F,ref:q,shapeFlag:J}=v;switch(F){case Za:A(m,v,b,k);break;case js:C(m,v,b,k);break;case Qo:m==null&&T(v,b,k,z);break;case Qt:Re(m,v,b,k,N,D,z,S,W);break;default:J&1?L(m,v,b,k,N,D,z,S,W):J&6?ve(m,v,b,k,N,D,z,S,W):(J&64||J&128)&&F.process(m,v,b,k,N,D,z,S,W,Q)}q!=null&&N&&Sc(q,m&&m.ref,D,v||m,!v)},A=(m,v,b,k)=>{if(m==null)s(v.el=a(v.children),b,k);else{const N=v.el=m.el;v.children!==m.children&&u(N,v.children)}},C=(m,v,b,k)=>{m==null?s(v.el=l(v.children||""),b,k):v.el=m.el},T=(m,v,b,k)=>{[m.el,m.anchor]=E(m.children,v,b,k,m.el,m.anchor)},x=({el:m,anchor:v},b,k)=>{let N;for(;m&&m!==v;)N=p(m),s(m,b,k),m=N;s(v,b,k)},M=({el:m,anchor:v})=>{let b;for(;m&&m!==v;)b=p(m),i(m),m=b;i(v)},L=(m,v,b,k,N,D,z,S,W)=>{v.type==="svg"?z="svg":v.type==="math"&&(z="mathml"),m==null?O(v,b,k,N,D,z,S,W):Y(m,v,N,D,z,S,W)},O=(m,v,b,k,N,D,z,S)=>{let W,F;const{props:q,shapeFlag:J,transition:Z,dirs:se}=m;if(W=m.el=o(m.type,D,q&&q.is,q),J&8?f(W,m.children):J&16&&j(m.children,W,null,k,N,jl(m,D),z,S),se&&Ss(m,null,k,"created"),$(W,m,m.scopeId,z,k),q){for(const ye in q)ye!=="value"&&!Er(ye)&&r(W,ye,null,q[ye],D,k);"value"in q&&r(W,"value",null,q.value,D),(F=q.onVnodeBeforeMount)&&qt(F,k,m)}se&&Ss(m,null,k,"beforeMount");const le=dT(N,Z);le&&Z.beforeEnter(W),s(W,v,b),((F=q&&q.onVnodeMounted)||le||se)&&_t(()=>{F&&qt(F,k,m),le&&Z.enter(W),se&&Ss(m,null,k,"mounted")},N)},$=(m,v,b,k,N)=>{if(b&&_(m,b),k)for(let D=0;D<k.length;D++)_(m,k[D]);if(N){let D=N.subTree;if(v===D){const z=N.vnode;$(m,z,z.scopeId,z.slotScopeIds,N.parent)}}},j=(m,v,b,k,N,D,z,S,W=0)=>{for(let F=W;F<m.length;F++){const q=m[F]=S?Hn(m[F]):Xt(m[F]);w(null,q,v,b,k,N,D,z,S)}},Y=(m,v,b,k,N,D,z)=>{const S=v.el=m.el;let{patchFlag:W,dynamicChildren:F,dirs:q}=v;W|=m.patchFlag&16;const J=m.props||ke,Z=v.props||ke;let se;if(b&&Is(b,!1),(se=Z.onVnodeBeforeUpdate)&&qt(se,b,v,m),q&&Ss(v,m,b,"beforeUpdate"),b&&Is(b,!0),(J.innerHTML&&Z.innerHTML==null||J.textContent&&Z.textContent==null)&&f(S,""),F?ee(m.dynamicChildren,F,S,b,k,jl(v,N),D):z||ue(m,v,S,null,b,k,jl(v,N),D,!1),W>0){if(W&16)re(S,J,Z,b,N);else if(W&2&&J.class!==Z.class&&r(S,"class",null,Z.class,N),W&4&&r(S,"style",J.style,Z.style,N),W&8){const le=v.dynamicProps;for(let ye=0;ye<le.length;ye++){const pe=le[ye],We=J[pe],Rt=Z[pe];(Rt!==We||pe==="value")&&r(S,pe,We,Rt,N,b)}}W&1&&m.children!==v.children&&f(S,v.children)}else!z&&F==null&&re(S,J,Z,b,N);((se=Z.onVnodeUpdated)||q)&&_t(()=>{se&&qt(se,b,v,m),q&&Ss(v,m,b,"updated")},k)},ee=(m,v,b,k,N,D,z)=>{for(let S=0;S<v.length;S++){const W=m[S],F=v[S],q=W.el&&(W.type===Qt||!fr(W,F)||W.shapeFlag&70)?h(W.el):b;w(W,F,q,null,k,N,D,z,!0)}},re=(m,v,b,k,N)=>{if(v!==b){if(v!==ke)for(const D in v)!Er(D)&&!(D in b)&&r(m,D,v[D],null,N,k);for(const D in b){if(Er(D))continue;const z=b[D],S=v[D];z!==S&&D!=="value"&&r(m,D,S,z,N,k)}"value"in b&&r(m,"value",v.value,b.value,N)}},Re=(m,v,b,k,N,D,z,S,W)=>{const F=v.el=m?m.el:a(""),q=v.anchor=m?m.anchor:a("");let{patchFlag:J,dynamicChildren:Z,slotScopeIds:se}=v;se&&(S=S?S.concat(se):se),m==null?(s(F,b,k),s(q,b,k),j(v.children||[],b,q,N,D,z,S,W)):J>0&&J&64&&Z&&m.dynamicChildren?(ee(m.dynamicChildren,Z,b,N,D,z,S),(v.key!=null||N&&v===N.subTree)&&A_(m,v,!0)):ue(m,v,b,q,N,D,z,S,W)},ve=(m,v,b,k,N,D,z,S,W)=>{v.slotScopeIds=S,m==null?v.shapeFlag&512?N.ctx.activate(v,b,k,z,W):it(v,b,k,N,D,z,W):Je(m,v,W)},it=(m,v,b,k,N,D,z)=>{const S=m.component=PT(m,k,N);if(d_(m)&&(S.ctx.renderer=Q),xT(S,!1,z),S.asyncDep){if(N&&N.registerDep(S,me,z),!m.el){const W=S.subTree=Se(js);C(null,W,v,b)}}else me(S,m,v,b,N,D,z)},Je=(m,v,b)=>{const k=v.component=m.component;if(bT(m,v,b))if(k.asyncDep&&!k.asyncResolved){oe(k,v,b);return}else k.next=v,NC(k.update),k.effect.dirty=!0,k.update();else v.el=m.el,k.vnode=v},me=(m,v,b,k,N,D,z)=>{const S=()=>{if(m.isMounted){let{next:q,bu:J,u:Z,parent:se,vnode:le}=m;{const kn=O_(m);if(kn){q&&(q.el=le.el,oe(m,q,z)),kn.asyncDep.then(()=>{m.isUnmounted||S()});return}}let ye=q,pe;Is(m,!1),q?(q.el=le.el,oe(m,q,z)):q=le,J&&Ko(J),(pe=q.props&&q.props.onVnodeBeforeUpdate)&&qt(pe,se,q,le),Is(m,!0);const We=Bl(m),Rt=m.subTree;m.subTree=We,w(Rt,We,h(Rt.el),R(Rt),m,N,D),q.el=We.el,ye===null&&wT(m,We.el),Z&&_t(Z,N),(pe=q.props&&q.props.onVnodeUpdated)&&_t(()=>qt(pe,se,q,le),N)}else{let q;const{el:J,props:Z}=v,{bm:se,m:le,parent:ye}=m,pe=Yo(v);if(Is(m,!1),se&&Ko(se),!pe&&(q=Z&&Z.onVnodeBeforeMount)&&qt(q,ye,v),Is(m,!0),J&&be){const We=()=>{m.subTree=Bl(m),be(J,m.subTree,m,N,null)};pe?v.type.__asyncLoader().then(()=>!m.isUnmounted&&We()):We()}else{const We=m.subTree=Bl(m);w(null,We,b,k,m,N,D),v.el=We.el}if(le&&_t(le,N),!pe&&(q=Z&&Z.onVnodeMounted)){const We=v;_t(()=>qt(q,ye,We),N)}(v.shapeFlag&256||ye&&Yo(ye.vnode)&&ye.vnode.shapeFlag&256)&&m.a&&_t(m.a,N),m.isMounted=!0,v=b=k=null}},W=m.effect=new wu(S,Dt,()=>Pu(F),m.scope),F=m.update=()=>{W.dirty&&W.run()};F.i=m,F.id=m.uid,Is(m,!0),F()},oe=(m,v,b)=>{v.component=m;const k=m.vnode.props;m.vnode=v,m.next=null,sT(m,v.props,k,b),aT(m,v.children,b),hs(),nh(m),ps()},ue=(m,v,b,k,N,D,z,S,W=!1)=>{const F=m&&m.children,q=m?m.shapeFlag:0,J=v.children,{patchFlag:Z,shapeFlag:se}=v;if(Z>0){if(Z&128){rt(F,J,b,k,N,D,z,S,W);return}else if(Z&256){Ue(F,J,b,k,N,D,z,S,W);return}}se&8?(q&16&&$e(F,N,D),J!==F&&f(b,J)):q&16?se&16?rt(F,J,b,k,N,D,z,S,W):$e(F,N,D,!0):(q&8&&f(b,""),se&16&&j(J,b,k,N,D,z,S,W))},Ue=(m,v,b,k,N,D,z,S,W)=>{m=m||gi,v=v||gi;const F=m.length,q=v.length,J=Math.min(F,q);let Z;for(Z=0;Z<J;Z++){const se=v[Z]=W?Hn(v[Z]):Xt(v[Z]);w(m[Z],se,b,null,N,D,z,S,W)}F>q?$e(m,N,D,!0,!1,J):j(v,b,k,N,D,z,S,W,J)},rt=(m,v,b,k,N,D,z,S,W)=>{let F=0;const q=v.length;let J=m.length-1,Z=q-1;for(;F<=J&&F<=Z;){const se=m[F],le=v[F]=W?Hn(v[F]):Xt(v[F]);if(fr(se,le))w(se,le,b,null,N,D,z,S,W);else break;F++}for(;F<=J&&F<=Z;){const se=m[J],le=v[Z]=W?Hn(v[Z]):Xt(v[Z]);if(fr(se,le))w(se,le,b,null,N,D,z,S,W);else break;J--,Z--}if(F>J){if(F<=Z){const se=Z+1,le=se<q?v[se].el:k;for(;F<=Z;)w(null,v[F]=W?Hn(v[F]):Xt(v[F]),b,le,N,D,z,S,W),F++}}else if(F>Z)for(;F<=J;)Le(m[F],N,D,!0),F++;else{const se=F,le=F,ye=new Map;for(F=le;F<=Z;F++){const at=v[F]=W?Hn(v[F]):Xt(v[F]);at.key!=null&&ye.set(at.key,F)}let pe,We=0;const Rt=Z-le+1;let kn=!1,bo=0;const gs=new Array(Rt);for(F=0;F<Rt;F++)gs[F]=0;for(F=se;F<=J;F++){const at=m[F];if(We>=Rt){Le(at,N,D,!0);continue}let et;if(at.key!=null)et=ye.get(at.key);else for(pe=le;pe<=Z;pe++)if(gs[pe-le]===0&&fr(at,v[pe])){et=pe;break}et===void 0?Le(at,N,D,!0):(gs[et-le]=F+1,et>=bo?bo=et:kn=!0,w(at,v[et],b,null,N,D,z,S,W),We++)}const rr=kn?hT(gs):gi;for(pe=rr.length-1,F=Rt-1;F>=0;F--){const at=le+F,et=v[at],wo=at+1<q?v[at+1].el:k;gs[F]===0?w(null,et,b,wo,N,D,z,S,W):kn&&(pe<0||F!==rr[pe]?qe(et,b,wo,2):pe--)}}},qe=(m,v,b,k,N=null)=>{const{el:D,type:z,transition:S,children:W,shapeFlag:F}=m;if(F&6){qe(m.component.subTree,v,b,k);return}if(F&128){m.suspense.move(v,b,k);return}if(F&64){z.move(m,v,b,Q);return}if(z===Qt){s(D,v,b);for(let J=0;J<W.length;J++)qe(W[J],v,b,k);s(m.anchor,v,b);return}if(z===Qo){x(m,v,b);return}if(k!==2&&F&1&&S)if(k===0)S.beforeEnter(D),s(D,v,b),_t(()=>S.enter(D),N);else{const{leave:J,delayLeave:Z,afterLeave:se}=S,le=()=>s(D,v,b),ye=()=>{J(D,()=>{le(),se&&se()})};Z?Z(D,le,ye):ye()}else s(D,v,b)},Le=(m,v,b,k=!1,N=!1)=>{const{type:D,props:z,ref:S,children:W,dynamicChildren:F,shapeFlag:q,patchFlag:J,dirs:Z,cacheIndex:se}=m;if(J===-2&&(N=!1),S!=null&&Sc(S,null,b,m,!0),se!=null&&(v.renderCache[se]=void 0),q&256){v.ctx.deactivate(m);return}const le=q&1&&Z,ye=!Yo(m);let pe;if(ye&&(pe=z&&z.onVnodeBeforeUnmount)&&qt(pe,v,m),q&6)Ze(m.component,b,k);else{if(q&128){m.suspense.unmount(b,k);return}le&&Ss(m,null,v,"beforeUnmount"),q&64?m.type.remove(m,v,b,Q,k):F&&!F.hasOnce&&(D!==Qt||J>0&&J&64)?$e(F,v,b,!1,!0):(D===Qt&&J&384||!N&&q&16)&&$e(W,v,b),k&&Et(m)}(ye&&(pe=z&&z.onVnodeUnmounted)||le)&&_t(()=>{pe&&qt(pe,v,m),le&&Ss(m,null,v,"unmounted")},b)},Et=m=>{const{type:v,el:b,anchor:k,transition:N}=m;if(v===Qt){ot(b,k);return}if(v===Qo){M(m);return}const D=()=>{i(b),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(m.shapeFlag&1&&N&&!N.persisted){const{leave:z,delayLeave:S}=N,W=()=>z(b,D);S?S(m.el,D,W):W()}else D()},ot=(m,v)=>{let b;for(;m!==v;)b=p(m),i(m),m=b;i(v)},Ze=(m,v,b)=>{const{bum:k,scope:N,update:D,subTree:z,um:S,m:W,a:F}=m;ch(W),ch(F),k&&Ko(k),N.stop(),D&&(D.active=!1,Le(z,m,v,b)),S&&_t(S,v),_t(()=>{m.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},$e=(m,v,b,k=!1,N=!1,D=0)=>{for(let z=D;z<m.length;z++)Le(m[z],v,b,k,N)},R=m=>{if(m.shapeFlag&6)return R(m.component.subTree);if(m.shapeFlag&128)return m.suspense.next();const v=p(m.anchor||m.el),b=v&&v[lT];return b?p(b):v};let K=!1;const G=(m,v,b)=>{m==null?v._vnode&&Le(v._vnode,null,null,!0):w(v._vnode||null,m,v,null,null,null,b),v._vnode=m,K||(K=!0,nh(),c_(),K=!1)},Q={p:w,um:Le,m:qe,r:Et,mt:it,mc:j,pc:ue,pbc:ee,n:R,o:t};let I,be;return{render:G,hydrate:I,createApp:tT(G,I)}}function jl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Is({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function dT(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function A_(t,e,n=!1){const s=t.children,i=e.children;if(ne(s)&&ne(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Hn(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&A_(o,a)),a.type===Za&&(a.el=o.el)}}function hT(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const u=t[s];if(u!==0){if(i=n[n.length-1],t[i]<u){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<u?r=a+1:o=a;u<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function O_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:O_(e)}function ch(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const pT=Symbol.for("v-scx"),mT=()=>bn(pT),Wo={};function bi(t,e,n){return N_(t,e,n)}function N_(t,e,{immediate:n,deep:s,flush:i,once:r,onTrack:o,onTrigger:a}=ke){if(e&&r){const O=e;e=(...$)=>{O(...$),L()}}const l=nt,u=O=>s===!0?O:Bn(O,s===!1?1:void 0);let f,h=!1,p=!1;if(yt(t)?(f=()=>t.value,h=Ni(t)):br(t)?(f=()=>u(t),h=!0):ne(t)?(p=!0,h=t.some(O=>br(O)||Ni(O)),f=()=>t.map(O=>{if(yt(O))return O.value;if(br(O))return u(O);if(ae(O))return Zn(O,l,2)})):ae(t)?e?f=()=>Zn(t,l,2):f=()=>(_&&_(),Bt(t,l,3,[E])):f=Dt,e&&s){const O=f;f=()=>Bn(O())}let _,E=O=>{_=x.onStop=()=>{Zn(O,l,4),_=x.onStop=void 0}},w;if(el)if(E=Dt,e?n&&Bt(e,l,3,[f(),p?[]:void 0,E]):f(),i==="sync"){const O=mT();w=O.__watcherHandles||(O.__watcherHandles=[])}else return Dt;let A=p?new Array(t.length).fill(Wo):Wo;const C=()=>{if(!(!x.active||!x.dirty))if(e){const O=x.run();(s||h||(p?O.some(($,j)=>rs($,A[j])):rs(O,A)))&&(_&&_(),Bt(e,l,3,[O,A===Wo?void 0:p&&A[0]===Wo?[]:A,E]),A=O)}else x.run()};C.allowRecurse=!!e;let T;i==="sync"?T=C:i==="post"?T=()=>_t(C,l&&l.suspense):(C.pre=!0,l&&(C.id=l.uid),T=()=>Pu(C));const x=new wu(f,Dt,T),M=sC(),L=()=>{x.stop(),M&&yu(M.effects,x)};return e?n?C():A=x.run():i==="post"?_t(x.run.bind(x),l&&l.suspense):x.run(),w&&w.push(L),L}function _T(t,e,n){const s=this.proxy,i=Be(t)?t.includes(".")?R_(s,t):()=>s[t]:t.bind(s,s);let r;ae(e)?r=e:(r=e.handler,n=e);const o=ro(this),a=N_(i,r.bind(s),n);return o(),a}function R_(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Bn(t,e=1/0,n){if(e<=0||!Ne(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,yt(t))Bn(t.value,e,n);else if(ne(t))for(let s=0;s<t.length;s++)Bn(t[s],e,n);else if(ja(t)||vi(t))t.forEach(s=>{Bn(s,e,n)});else if(Lm(t)){for(const s in t)Bn(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Bn(t[s],e,n)}return t}const gT=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Kt(e)}Modifiers`]||t[`${ds(e)}Modifiers`];function vT(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ke;let i=n;const r=e.startsWith("update:"),o=r&&gT(s,e.slice(7));o&&(o.trim&&(i=n.map(f=>Be(f)?f.trim():f)),o.number&&(i=n.map(aa)));let a,l=s[a=Wl(e)]||s[a=Wl(Kt(e))];!l&&r&&(l=s[a=Wl(ds(e))]),l&&Bt(l,t,6,i);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Bt(u,t,6,i)}}function P_(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!ae(t)){const l=u=>{const f=P_(u,e,!0);f&&(a=!0,st(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Ne(t)&&s.set(t,null),null):(ne(r)?r.forEach(l=>o[l]=null):st(o,r),Ne(t)&&s.set(t,o),o)}function Ja(t,e){return!t||!Ha(e)?!1:(e=e.slice(2).replace(/Once$/,""),_e(t,e[0].toLowerCase()+e.slice(1))||_e(t,ds(e))||_e(t,e))}function Bl(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:u,renderCache:f,props:h,data:p,setupState:_,ctx:E,inheritAttrs:w}=t,A=la(t);let C,T;try{if(n.shapeFlag&4){const M=i||s,L=M;C=Xt(u.call(L,M,f,h,_,p,E)),T=a}else{const M=e;C=Xt(M.length>1?M(h,{attrs:a,slots:o,emit:l}):M(h,null)),T=e.props?a:yT(a)}}catch(M){Cr.length=0,qa(M,t,1),C=Se(js)}let x=C;if(T&&w!==!1){const M=Object.keys(T),{shapeFlag:L}=x;M.length&&L&7&&(r&&M.some(vu)&&(T=ET(T,r)),x=Pi(x,T,!1,!0))}return n.dirs&&(x=Pi(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&(x.transition=n.transition),C=x,la(A),C}const yT=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ha(n))&&((e||(e={}))[n]=t[n]);return e},ET=(t,e)=>{const n={};for(const s in t)(!vu(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function bT(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?uh(s,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==s[p]&&!Ja(u,p))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?uh(s,o,u):!0:!!o;return!1}function uh(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Ja(n,r))return!0}return!1}function wT({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const CT=t=>t.__isSuspense;function TT(t,e){e&&e.pendingBranch?ne(t)?e.effects.push(...t):e.effects.push(t):RC(t)}const Qt=Symbol.for("v-fgt"),Za=Symbol.for("v-txt"),js=Symbol.for("v-cmt"),Qo=Symbol.for("v-stc"),Cr=[];let wt=null;function xe(t=!1){Cr.push(wt=t?null:[])}function ST(){Cr.pop(),wt=Cr[Cr.length-1]||null}let Ur=1;function fh(t){Ur+=t,t<0&&wt&&(wt.hasOnce=!0)}function x_(t){return t.dynamicChildren=Ur>0?wt||gi:null,ST(),Ur>0&&wt&&wt.push(t),t}function Ke(t,e,n,s,i,r){return x_(U(t,e,n,s,i,r,!0))}function hi(t,e,n,s,i){return x_(Se(t,e,n,s,i,!0))}function Ic(t){return t?t.__v_isVNode===!0:!1}function fr(t,e){return t.type===e.type&&t.key===e.key}const k_=({key:t})=>t??null,Xo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Be(t)||yt(t)||ae(t)?{i:bt,r:t,k:e,f:!!n}:t:null);function U(t,e=null,n=null,s=0,i=null,r=t===Qt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&k_(e),ref:e&&Xo(e),scopeId:Qa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:bt};return a?(Lu(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Be(n)?8:16),Ur>0&&!o&&wt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&wt.push(l),l}const Se=IT;function IT(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===zC)&&(t=js),Ic(t)){const a=Pi(t,e,!0);return n&&Lu(a,n),Ur>0&&!r&&wt&&(a.shapeFlag&6?wt[wt.indexOf(t)]=a:wt.push(a)),a.patchFlag=-2,a}if(FT(t)&&(t=t.__vccOpts),e){e=AT(e);let{class:a,style:l}=e;a&&!Be(a)&&(e.class=bu(a)),Ne(l)&&(t_(l)&&!ne(l)&&(l=st({},l)),e.style=qi(l))}const o=Be(t)?1:CT(t)?128:cT(t)?64:Ne(t)?4:ae(t)?2:0;return U(t,e,n,s,i,o,r,!0)}function AT(t){return t?t_(t)||E_(t)?st({},t):t:null}function Pi(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,u=e?OT(i||{},e):i,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&k_(u),ref:e&&e.ref?n&&r?ne(r)?r.concat(Xo(e)):[r,Xo(e)]:Xo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Pi(t.ssContent),ssFallback:t.ssFallback&&Pi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&f_(f,l.clone(f)),f}function D_(t=" ",e=0){return Se(Za,null,t,e)}function L_(t,e){const n=Se(Qo,null,t);return n.staticCount=e,n}function Vn(t="",e=!1){return e?(xe(),hi(js,null,t)):Se(js,null,t)}function Xt(t){return t==null||typeof t=="boolean"?Se(js):ne(t)?Se(Qt,null,t.slice()):typeof t=="object"?Hn(t):Se(Za,null,String(t))}function Hn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Pi(t)}function Lu(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ne(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Lu(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!E_(e)?e._ctx=bt:i===3&&bt&&(bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ae(e)?(e={default:e,_ctx:bt},n=32):(e=String(e),s&64?(n=16,e=[D_(e)]):n=8);t.children=e,t.shapeFlag|=n}function OT(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=bu([e.class,s.class]));else if(i==="style")e.style=qi([e.style,s.style]);else if(Ha(i)){const r=e[i],o=s[i];o&&r!==o&&!(ne(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function qt(t,e,n,s=null){Bt(t,e,7,[n,s])}const NT=g_();let RT=0;function PT(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||NT,r={uid:RT++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Vm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:w_(s,i),emitsOptions:P_(s,i),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:s.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=vT.bind(null,r),t.ce&&t.ce(r),r}let nt=null,fa,Ac;{const t=Fm(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};fa=e("__VUE_INSTANCE_SETTERS__",n=>nt=n),Ac=e("__VUE_SSR_SETTERS__",n=>el=n)}const ro=t=>{const e=nt;return fa(t),t.scope.on(),()=>{t.scope.off(),fa(e)}},dh=()=>{nt&&nt.scope.off(),fa(null)};function M_(t){return t.vnode.shapeFlag&4}let el=!1;function xT(t,e=!1,n=!1){e&&Ac(e);const{props:s,children:i}=t.vnode,r=M_(t);nT(t,s,r,e),oT(t,i,n);const o=r?kT(t,e):void 0;return e&&Ac(!1),o}function kT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,YC);const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?LT(t):null,r=ro(t);hs();const o=Zn(s,t,0,[t.props,i]);if(ps(),r(),km(o)){if(o.then(dh,dh),e)return o.then(a=>{hh(t,a,e)}).catch(a=>{qa(a,t,0)});t.asyncDep=o}else hh(t,o,e)}else F_(t,e)}function hh(t,e,n){ae(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ne(e)&&(t.setupState=o_(e)),F_(t,n)}let ph;function F_(t,e,n){const s=t.type;if(!t.render){if(!e&&ph&&!s.render){const i=s.template||ku(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,u=st(st({isCustomElement:r,delimiters:a},o),l);s.render=ph(i,u)}}t.render=s.render||Dt}{const i=ro(t);hs();try{qC(t)}finally{ps(),i()}}}const DT={get(t,e){return vt(t,"get",""),t[e]}};function LT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,DT),slots:t.slots,emit:t.emit,expose:e}}function tl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(o_(n_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in wr)return wr[n](t)},has(e,n){return n in e||n in wr}})):t.proxy}function MT(t,e=!0){return ae(t)?t.displayName||t.name:t.name||e&&t.__name}function FT(t){return ae(t)&&"__vccOpts"in t}const Ve=(t,e)=>CC(t,e,el);function Mu(t,e,n){const s=arguments.length;return s===2?Ne(e)&&!ne(e)?Ic(e)?Se(t,null,[e]):Se(t,e):Se(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ic(n)&&(n=[n]),Se(t,e,n))}const $T="3.4.38";/**
* @vue/runtime-dom v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const UT="http://www.w3.org/2000/svg",WT="http://www.w3.org/1998/Math/MathML",hn=typeof document<"u"?document:null,mh=hn&&hn.createElement("template"),VT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?hn.createElementNS(UT,t):e==="mathml"?hn.createElementNS(WT,t):n?hn.createElement(t,{is:n}):hn.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>hn.createTextNode(t),createComment:t=>hn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>hn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{mh.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const a=mh.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},HT=Symbol("_vtc");function jT(t,e,n){const s=t[HT];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const _h=Symbol("_vod"),BT=Symbol("_vsh"),zT=Symbol(""),KT=/(^|;)\s*display\s*:/;function GT(t,e,n){const s=t.style,i=Be(n);let r=!1;if(n&&!i){if(e)if(Be(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Jo(s,a,"")}else for(const o in e)n[o]==null&&Jo(s,o,"");for(const o in n)o==="display"&&(r=!0),Jo(s,o,n[o])}else if(i){if(e!==n){const o=s[zT];o&&(n+=";"+o),s.cssText=n,r=KT.test(n)}}else e&&t.removeAttribute("style");_h in t&&(t[_h]=r?s.display:"",t[BT]&&(s.display="none"))}const gh=/\s*!important$/;function Jo(t,e,n){if(ne(n))n.forEach(s=>Jo(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=YT(t,e);gh.test(n)?t.setProperty(ds(s),n.replace(gh,""),"important"):t[s]=n}}const vh=["Webkit","Moz","ms"],zl={};function YT(t,e){const n=zl[e];if(n)return n;let s=Kt(e);if(s!=="filter"&&s in t)return zl[e]=s;s=za(s);for(let i=0;i<vh.length;i++){const r=vh[i]+s;if(r in t)return zl[e]=r}return e}const yh="http://www.w3.org/1999/xlink";function Eh(t,e,n,s,i,r=J0(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(yh,e.slice(6,e.length)):t.setAttributeNS(yh,e,n):n==null||r&&!$m(n)?t.removeAttribute(e):t.setAttribute(e,r?"":rn(n)?String(n):n)}function qT(t,e,n,s){if(e==="innerHTML"||e==="textContent"){if(n==null)return;t[e]=n;return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const o=i==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?"":String(n);(o!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let r=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=$m(n):n==null&&o==="string"?(n="",r=!0):o==="number"&&(n=0,r=!0)}try{t[e]=n}catch{}r&&t.removeAttribute(e)}function Rs(t,e,n,s){t.addEventListener(e,n,s)}function QT(t,e,n,s){t.removeEventListener(e,n,s)}const bh=Symbol("_vei");function XT(t,e,n,s,i=null){const r=t[bh]||(t[bh]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=JT(e);if(s){const u=r[e]=tS(s,i);Rs(t,a,u,l)}else o&&(QT(t,a,o,l),r[e]=void 0)}}const wh=/(?:Once|Passive|Capture)$/;function JT(t){let e;if(wh.test(t)){e={};let s;for(;s=t.match(wh);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ds(t.slice(2)),e]}let Kl=0;const ZT=Promise.resolve(),eS=()=>Kl||(ZT.then(()=>Kl=0),Kl=Date.now());function tS(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Bt(nS(s,n.value),e,5,[s])};return n.value=t,n.attached=eS(),n}function nS(t,e){if(ne(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Ch=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,sS=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?jT(t,s,o):e==="style"?GT(t,n,s):Ha(e)?vu(e)||XT(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):iS(t,e,s,o))?(qT(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Eh(t,e,s,o,r,e!=="value")):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Eh(t,e,s,o))};function iS(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ch(e)&&ae(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Ch(e)&&Be(n)?!1:e in t}const da=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ne(e)?n=>Ko(e,n):e};function rS(t){t.target.composing=!0}function Th(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const wi=Symbol("_assign"),Ds={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[wi]=da(i);const r=s||i.props&&i.props.type==="number";Rs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=aa(a)),t[wi](a)}),n&&Rs(t,"change",()=>{t.value=t.value.trim()}),e||(Rs(t,"compositionstart",rS),Rs(t,"compositionend",Th),Rs(t,"change",Th))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[wi]=da(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?aa(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===l)||(t.value=l))}},Sh={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=ja(e);Rs(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?aa(ha(o)):ha(o));t[wi](t.multiple?i?new Set(r):r:r[0]),t._assigning=!0,Ru(()=>{t._assigning=!1})}),t[wi]=da(s)},mounted(t,{value:e,modifiers:{number:n}}){Ih(t,e)},beforeUpdate(t,e,n){t[wi]=da(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||Ih(t,e)}};function Ih(t,e,n){const s=t.multiple,i=ne(e);if(!(s&&!i&&!ja(e))){for(let r=0,o=t.options.length;r<o;r++){const a=t.options[r],l=ha(a);if(s)if(i){const u=typeof l;u==="string"||u==="number"?a.selected=e.some(f=>String(f)===String(l)):a.selected=eC(e,l)>-1}else a.selected=e.has(l);else if(Ka(ha(a),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!s&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ha(t){return"_value"in t?t._value:t.value}const oS={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ah=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=i=>{if(!("key"in i))return;const r=ds(i.key);if(e.some(o=>o===r||oS[o]===r))return t(i)})},aS=st({patchProp:sS},VT);let Oh;function lS(){return Oh||(Oh=uT(aS))}const cS=(...t)=>{const e=lS().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=fS(s);if(!i)return;const r=e._component;!ae(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,uS(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function uS(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function fS(t){return Be(t)?document.querySelector(t):t}var dS=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const hS=Symbol();var Nh;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Nh||(Nh={}));function pS(){const t=tC(!0),e=t.run(()=>Ce({}));let n=[],s=[];const i=n_({install(r){i._a=r,r.provide(hS,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!dS?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const fi=typeof document<"u";function mS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const we=Object.assign;function Gl(t,e){const n={};for(const s in e){const i=e[s];n[s]=Gt(i)?i.map(t):t(i)}return n}const Tr=()=>{},Gt=Array.isArray,$_=/#/g,_S=/&/g,gS=/\//g,vS=/=/g,yS=/\?/g,U_=/\+/g,ES=/%5B/g,bS=/%5D/g,W_=/%5E/g,wS=/%60/g,V_=/%7B/g,CS=/%7C/g,H_=/%7D/g,TS=/%20/g;function Fu(t){return encodeURI(""+t).replace(CS,"|").replace(ES,"[").replace(bS,"]")}function SS(t){return Fu(t).replace(V_,"{").replace(H_,"}").replace(W_,"^")}function Oc(t){return Fu(t).replace(U_,"%2B").replace(TS,"+").replace($_,"%23").replace(_S,"%26").replace(wS,"`").replace(V_,"{").replace(H_,"}").replace(W_,"^")}function IS(t){return Oc(t).replace(vS,"%3D")}function AS(t){return Fu(t).replace($_,"%23").replace(yS,"%3F")}function OS(t){return t==null?"":AS(t).replace(gS,"%2F")}function Wr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const NS=/\/$/,RS=t=>t.replace(NS,"");function Yl(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=DS(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:Wr(o)}}function PS(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Rh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function xS(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&xi(e.matched[s],n.matched[i])&&j_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function xi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function j_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!kS(t[n],e[n]))return!1;return!0}function kS(t,e){return Gt(t)?Ph(t,e):Gt(e)?Ph(e,t):t===e}function Ph(t,e){return Gt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function DS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const Fn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Vr;(function(t){t.pop="pop",t.push="push"})(Vr||(Vr={}));var Sr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Sr||(Sr={}));function LS(t){if(!t)if(fi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),RS(t)}const MS=/^[^#]+#/;function FS(t,e){return t.replace(MS,"#")+e}function $S(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const nl=()=>({left:window.scrollX,top:window.scrollY});function US(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=$S(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function xh(t,e){return(history.state?history.state.position-e:-1)+t}const Nc=new Map;function WS(t,e){Nc.set(t,e)}function VS(t){const e=Nc.get(t);return Nc.delete(t),e}let HS=()=>location.protocol+"//"+location.host;function B_(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Rh(l,"")}return Rh(n,t)+s+i}function jS(t,e,n,s){let i=[],r=[],o=null;const a=({state:p})=>{const _=B_(t,location),E=n.value,w=e.value;let A=0;if(p){if(n.value=_,e.value=p,o&&o===E){o=null;return}A=w?p.position-w.position:0}else s(_);i.forEach(C=>{C(n.value,E,{delta:A,type:Vr.pop,direction:A?A>0?Sr.forward:Sr.back:Sr.unknown})})};function l(){o=n.value}function u(p){i.push(p);const _=()=>{const E=i.indexOf(p);E>-1&&i.splice(E,1)};return r.push(_),_}function f(){const{history:p}=window;p.state&&p.replaceState(we({},p.state,{scroll:nl()}),"")}function h(){for(const p of r)p();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:u,destroy:h}}function kh(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?nl():null}}function BS(t){const{history:e,location:n}=window,s={value:B_(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,u,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:HS()+t+l;try{e[f?"replaceState":"pushState"](u,"",p),i.value=u}catch(_){console.error(_),n[f?"replace":"assign"](p)}}function o(l,u){const f=we({},e.state,kh(i.value.back,l,i.value.forward,!0),u,{position:i.value.position});r(l,f,!0),s.value=l}function a(l,u){const f=we({},i.value,e.state,{forward:l,scroll:nl()});r(f.current,f,!0);const h=we({},kh(s.value,l,null),{position:f.position+1},u);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function zS(t){t=LS(t);const e=BS(t),n=jS(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=we({location:"",base:t,go:s,createHref:FS.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function KS(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),zS(t)}function GS(t){return typeof t=="string"||t&&typeof t=="object"}function z_(t){return typeof t=="string"||typeof t=="symbol"}const K_=Symbol("");var Dh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Dh||(Dh={}));function ki(t,e){return we(new Error,{type:t,[K_]:!0},e)}function dn(t,e){return t instanceof Error&&K_ in t&&(e==null||!!(t.type&e))}const Lh="[^/]+?",YS={sensitive:!1,strict:!1,start:!0,end:!0},qS=/[.+*?^${}()[\]/\\]/g;function QS(t,e){const n=we({},YS,e),s=[];let i=n.start?"^":"";const r=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let h=0;h<u.length;h++){const p=u[h];let _=40+(n.sensitive?.25:0);if(p.type===0)h||(i+="/"),i+=p.value.replace(qS,"\\$&"),_+=40;else if(p.type===1){const{value:E,repeatable:w,optional:A,regexp:C}=p;r.push({name:E,repeatable:w,optional:A});const T=C||Lh;if(T!==Lh){_+=10;try{new RegExp(`(${T})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${E}" (${T}): `+M.message)}}let x=w?`((?:${T})(?:/(?:${T}))*)`:`(${T})`;h||(x=A&&u.length<2?`(?:/${x})`:"/"+x),A&&(x+="?"),i+=x,_+=20,A&&(_+=-8),w&&(_+=-20),T===".*"&&(_+=-50)}f.push(_)}s.push(f)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(u){const f=u.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const _=f[p]||"",E=r[p-1];h[E.name]=_&&E.repeatable?_.split("/"):_}return h}function l(u){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const _ of p)if(_.type===0)f+=_.value;else if(_.type===1){const{value:E,repeatable:w,optional:A}=_,C=E in u?u[E]:"";if(Gt(C)&&!w)throw new Error(`Provided param "${E}" is an array but it is not repeatable (* or + modifiers)`);const T=Gt(C)?C.join("/"):C;if(!T)if(A)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${E}"`);f+=T}}return f||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function XS(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function G_(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=XS(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Mh(s))return 1;if(Mh(i))return-1}return i.length-s.length}function Mh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const JS={type:0,value:""},ZS=/[a-zA-Z0-9_]/;function eI(t){if(!t)return[[]];if(t==="/")return[[JS]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,u="",f="";function h(){u&&(n===0?r.push({type:0,value:u}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(u&&h(),o()):l===":"?(h(),n=1):p();break;case 4:p(),n=s;break;case 1:l==="("?n=2:ZS.test(l)?p():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function tI(t,e,n){const s=QS(eI(t.path),n),i=we(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function nI(t,e){const n=[],s=new Map;e=Uh({strict:!1,end:!0,sensitive:!1},e);function i(h){return s.get(h)}function r(h,p,_){const E=!_,w=sI(h);w.aliasOf=_&&_.record;const A=Uh(e,h),C=[w];if("alias"in h){const M=typeof h.alias=="string"?[h.alias]:h.alias;for(const L of M)C.push(we({},w,{components:_?_.record.components:w.components,path:L,aliasOf:_?_.record:w}))}let T,x;for(const M of C){const{path:L}=M;if(p&&L[0]!=="/"){const O=p.record.path,$=O[O.length-1]==="/"?"":"/";M.path=p.record.path+(L&&$+L)}if(T=tI(M,p,A),_?_.alias.push(T):(x=x||T,x!==T&&x.alias.push(T),E&&h.name&&!$h(T)&&o(h.name)),Y_(T)&&l(T),w.children){const O=w.children;for(let $=0;$<O.length;$++)r(O[$],T,_&&_.children[$])}_=_||T}return x?()=>{o(x)}:Tr}function o(h){if(z_(h)){const p=s.get(h);p&&(s.delete(h),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(h);p>-1&&(n.splice(p,1),h.record.name&&s.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function l(h){const p=oI(h,n);n.splice(p,0,h),h.record.name&&!$h(h)&&s.set(h.record.name,h)}function u(h,p){let _,E={},w,A;if("name"in h&&h.name){if(_=s.get(h.name),!_)throw ki(1,{location:h});A=_.record.name,E=we(Fh(p.params,_.keys.filter(x=>!x.optional).concat(_.parent?_.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),h.params&&Fh(h.params,_.keys.map(x=>x.name))),w=_.stringify(E)}else if(h.path!=null)w=h.path,_=n.find(x=>x.re.test(w)),_&&(E=_.parse(w),A=_.record.name);else{if(_=p.name?s.get(p.name):n.find(x=>x.re.test(p.path)),!_)throw ki(1,{location:h,currentLocation:p});A=_.record.name,E=we({},p.params,h.params),w=_.stringify(E)}const C=[];let T=_;for(;T;)C.unshift(T.record),T=T.parent;return{name:A,path:w,params:E,matched:C,meta:rI(C)}}t.forEach(h=>r(h));function f(){n.length=0,s.clear()}return{addRoute:r,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:a,getRecordMatcher:i}}function Fh(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function sI(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:iI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function iI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function $h(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function rI(t){return t.reduce((e,n)=>we(e,n.meta),{})}function Uh(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function oI(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;G_(t,e[r])<0?s=r:n=r+1}const i=aI(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function aI(t){let e=t;for(;e=e.parent;)if(Y_(e)&&G_(t,e)===0)return e}function Y_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function lI(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(U_," "),o=r.indexOf("="),a=Wr(o<0?r:r.slice(0,o)),l=o<0?null:Wr(r.slice(o+1));if(a in e){let u=e[a];Gt(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function Wh(t){let e="";for(let n in t){const s=t[n];if(n=IS(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Gt(s)?s.map(r=>r&&Oc(r)):[s&&Oc(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function cI(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Gt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const uI=Symbol(""),Vh=Symbol(""),$u=Symbol(""),q_=Symbol(""),Rc=Symbol("");function dr(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function jn(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(ki(4,{from:n,to:e})):p instanceof Error?l(p):GS(p)?l(ki(2,{from:e,to:p})):(o&&s.enterCallbacks[i]===o&&typeof p=="function"&&o.push(p),a())},f=r(()=>t.call(s&&s.instances[i],e,n,u));let h=Promise.resolve(f);t.length<3&&(h=h.then(u)),h.catch(p=>l(p))})}function ql(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(fI(l)){const f=(l.__vccOpts||l)[e];f&&r.push(jn(f,n,s,o,a,i))}else{let u=l();r.push(()=>u.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const h=mS(f)?f.default:f;o.components[a]=h;const _=(h.__vccOpts||h)[e];return _&&jn(_,n,s,o,a,i)()}))}}return r}function fI(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Hh(t){const e=bn($u),n=bn(q_),s=Ve(()=>{const l=jt(t.to);return e.resolve(l)}),i=Ve(()=>{const{matched:l}=s.value,{length:u}=l,f=l[u-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(xi.bind(null,f));if(p>-1)return p;const _=jh(l[u-2]);return u>1&&jh(f)===_&&h[h.length-1].path!==_?h.findIndex(xi.bind(null,l[u-2])):p}),r=Ve(()=>i.value>-1&&pI(n.params,s.value.params)),o=Ve(()=>i.value>-1&&i.value===n.matched.length-1&&j_(n.params,s.value.params));function a(l={}){return hI(l)?e[jt(t.replace)?"replace":"push"](jt(t.to)).catch(Tr):Promise.resolve()}return{route:s,href:Ve(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const dI=xu({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Hh,setup(t,{slots:e}){const n=Ya(Hh(t)),{options:s}=bn($u),i=Ve(()=>({[Bh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Bh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Mu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),pa=dI;function hI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function pI(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Gt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function jh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Bh=(t,e,n)=>t??e??n,mI=xu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=bn(Rc),i=Ve(()=>t.route||s.value),r=bn(Vh,0),o=Ve(()=>{let u=jt(r);const{matched:f}=i.value;let h;for(;(h=f[u])&&!h.components;)u++;return u}),a=Ve(()=>i.value.matched[o.value]);qo(Vh,Ve(()=>o.value+1)),qo(uI,a),qo(Rc,i);const l=Ce();return bi(()=>[l.value,a.value,t.name],([u,f,h],[p,_,E])=>{f&&(f.instances[h]=u,_&&_!==f&&u&&u===p&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),u&&f&&(!_||!xi(f,_)||!p)&&(f.enterCallbacks[h]||[]).forEach(w=>w(u))},{flush:"post"}),()=>{const u=i.value,f=t.name,h=a.value,p=h&&h.components[f];if(!p)return zh(n.default,{Component:p,route:u});const _=h.props[f],E=_?_===!0?u.params:typeof _=="function"?_(u):_:null,A=Mu(p,we({},E,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(h.instances[f]=null)},ref:l}));return zh(n.default,{Component:A,route:u})||A}}});function zh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Q_=mI;function _I(t){const e=nI(t.routes,t),n=t.parseQuery||lI,s=t.stringifyQuery||Wh,i=t.history,r=dr(),o=dr(),a=dr(),l=TC(Fn);let u=Fn;fi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Gl.bind(null,R=>""+R),h=Gl.bind(null,OS),p=Gl.bind(null,Wr);function _(R,K){let G,Q;return z_(R)?(G=e.getRecordMatcher(R),Q=K):Q=R,e.addRoute(Q,G)}function E(R){const K=e.getRecordMatcher(R);K&&e.removeRoute(K)}function w(){return e.getRoutes().map(R=>R.record)}function A(R){return!!e.getRecordMatcher(R)}function C(R,K){if(K=we({},K||l.value),typeof R=="string"){const v=Yl(n,R,K.path),b=e.resolve({path:v.path},K),k=i.createHref(v.fullPath);return we(v,b,{params:p(b.params),hash:Wr(v.hash),redirectedFrom:void 0,href:k})}let G;if(R.path!=null)G=we({},R,{path:Yl(n,R.path,K.path).path});else{const v=we({},R.params);for(const b in v)v[b]==null&&delete v[b];G=we({},R,{params:h(v)}),K.params=h(K.params)}const Q=e.resolve(G,K),I=R.hash||"";Q.params=f(p(Q.params));const be=PS(s,we({},R,{hash:SS(I),path:Q.path})),m=i.createHref(be);return we({fullPath:be,hash:I,query:s===Wh?cI(R.query):R.query||{}},Q,{redirectedFrom:void 0,href:m})}function T(R){return typeof R=="string"?Yl(n,R,l.value.path):we({},R)}function x(R,K){if(u!==R)return ki(8,{from:K,to:R})}function M(R){return $(R)}function L(R){return M(we(T(R),{replace:!0}))}function O(R){const K=R.matched[R.matched.length-1];if(K&&K.redirect){const{redirect:G}=K;let Q=typeof G=="function"?G(R):G;return typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=T(Q):{path:Q},Q.params={}),we({query:R.query,hash:R.hash,params:Q.path!=null?{}:R.params},Q)}}function $(R,K){const G=u=C(R),Q=l.value,I=R.state,be=R.force,m=R.replace===!0,v=O(G);if(v)return $(we(T(v),{state:typeof v=="object"?we({},I,v.state):I,force:be,replace:m}),K||G);const b=G;b.redirectedFrom=K;let k;return!be&&xS(s,Q,G)&&(k=ki(16,{to:b,from:Q}),qe(Q,Q,!0,!1)),(k?Promise.resolve(k):ee(b,Q)).catch(N=>dn(N)?dn(N,2)?N:rt(N):ue(N,b,Q)).then(N=>{if(N){if(dn(N,2))return $(we({replace:m},T(N.to),{state:typeof N.to=="object"?we({},I,N.to.state):I,force:be}),K||b)}else N=Re(b,Q,!0,m,I);return re(b,Q,N),N})}function j(R,K){const G=x(R,K);return G?Promise.reject(G):Promise.resolve()}function Y(R){const K=ot.values().next().value;return K&&typeof K.runWithContext=="function"?K.runWithContext(R):R()}function ee(R,K){let G;const[Q,I,be]=gI(R,K);G=ql(Q.reverse(),"beforeRouteLeave",R,K);for(const v of Q)v.leaveGuards.forEach(b=>{G.push(jn(b,R,K))});const m=j.bind(null,R,K);return G.push(m),$e(G).then(()=>{G=[];for(const v of r.list())G.push(jn(v,R,K));return G.push(m),$e(G)}).then(()=>{G=ql(I,"beforeRouteUpdate",R,K);for(const v of I)v.updateGuards.forEach(b=>{G.push(jn(b,R,K))});return G.push(m),$e(G)}).then(()=>{G=[];for(const v of be)if(v.beforeEnter)if(Gt(v.beforeEnter))for(const b of v.beforeEnter)G.push(jn(b,R,K));else G.push(jn(v.beforeEnter,R,K));return G.push(m),$e(G)}).then(()=>(R.matched.forEach(v=>v.enterCallbacks={}),G=ql(be,"beforeRouteEnter",R,K,Y),G.push(m),$e(G))).then(()=>{G=[];for(const v of o.list())G.push(jn(v,R,K));return G.push(m),$e(G)}).catch(v=>dn(v,8)?v:Promise.reject(v))}function re(R,K,G){a.list().forEach(Q=>Y(()=>Q(R,K,G)))}function Re(R,K,G,Q,I){const be=x(R,K);if(be)return be;const m=K===Fn,v=fi?history.state:{};G&&(Q||m?i.replace(R.fullPath,we({scroll:m&&v&&v.scroll},I)):i.push(R.fullPath,I)),l.value=R,qe(R,K,G,m),rt()}let ve;function it(){ve||(ve=i.listen((R,K,G)=>{if(!Ze.listening)return;const Q=C(R),I=O(Q);if(I){$(we(I,{replace:!0}),Q).catch(Tr);return}u=Q;const be=l.value;fi&&WS(xh(be.fullPath,G.delta),nl()),ee(Q,be).catch(m=>dn(m,12)?m:dn(m,2)?($(m.to,Q).then(v=>{dn(v,20)&&!G.delta&&G.type===Vr.pop&&i.go(-1,!1)}).catch(Tr),Promise.reject()):(G.delta&&i.go(-G.delta,!1),ue(m,Q,be))).then(m=>{m=m||Re(Q,be,!1),m&&(G.delta&&!dn(m,8)?i.go(-G.delta,!1):G.type===Vr.pop&&dn(m,20)&&i.go(-1,!1)),re(Q,be,m)}).catch(Tr)}))}let Je=dr(),me=dr(),oe;function ue(R,K,G){rt(R);const Q=me.list();return Q.length?Q.forEach(I=>I(R,K,G)):console.error(R),Promise.reject(R)}function Ue(){return oe&&l.value!==Fn?Promise.resolve():new Promise((R,K)=>{Je.add([R,K])})}function rt(R){return oe||(oe=!R,it(),Je.list().forEach(([K,G])=>R?G(R):K()),Je.reset()),R}function qe(R,K,G,Q){const{scrollBehavior:I}=t;if(!fi||!I)return Promise.resolve();const be=!G&&VS(xh(R.fullPath,0))||(Q||!G)&&history.state&&history.state.scroll||null;return Ru().then(()=>I(R,K,be)).then(m=>m&&US(m)).catch(m=>ue(m,R,K))}const Le=R=>i.go(R);let Et;const ot=new Set,Ze={currentRoute:l,listening:!0,addRoute:_,removeRoute:E,clearRoutes:e.clearRoutes,hasRoute:A,getRoutes:w,resolve:C,options:t,push:M,replace:L,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:me.add,isReady:Ue,install(R){const K=this;R.component("RouterLink",pa),R.component("RouterView",Q_),R.config.globalProperties.$router=K,Object.defineProperty(R.config.globalProperties,"$route",{enumerable:!0,get:()=>jt(l)}),fi&&!Et&&l.value===Fn&&(Et=!0,M(i.location).catch(I=>{}));const G={};for(const I in Fn)Object.defineProperty(G,I,{get:()=>l.value[I],enumerable:!0});R.provide($u,K),R.provide(q_,Zm(G)),R.provide(Rc,l);const Q=R.unmount;ot.add(R),R.unmount=function(){ot.delete(R),ot.size<1&&(u=Fn,ve&&ve(),ve=null,l.value=Fn,Et=!1,oe=!1),Q()}}};function $e(R){return R.reduce((K,G)=>K.then(()=>Y(G)),Promise.resolve())}return Ze}function gI(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(u=>xi(u,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>xi(u,l))||i.push(l))}return[n,s,i]}const vI={__name:"App",setup(t){return(e,n)=>(xe(),hi(jt(Q_)))}},yI="/memorize_words/assets/logo-woT2z67z.png",EI={class:"container"},bI={class:"bg-white rounded-circle mx-auto p-3 mb-3",style:{"box-shadow":"4px 4px 16px rgba(0, 0, 0, 0.5)","max-width":"150px"}},wI=["src"],CI=U("h1",{class:"text-center mb-3"},"WordBox",-1),TI=U("hr",{class:"mb-3",style:{width:"80%",margin:"auto"}},null,-1),SI=U("label",null,"請輸入暱稱",-1),II=U("label",{class:"mt-3"},"請輸入密碼",-1),AI={key:0,class:"text-danger mt-1 text-end"},OI={__name:"LoginView",setup(t){const e=Ce({name:"",pw:""}),n=Ce(!1),s=()=>{const a=e.value.name.toLowerCase(),l=e.value.pw.toLowerCase();(a==="alex"||a==="yiyu")&&l==="520520"?(localStorage.setItem("memorize_name",e.value.name),localStorage.setItem("memorize_pw",e.value.pw),eo.push("/")):n.value=!0},i=Ce(window.innerWidth<992),r=Ce("100vh"),o=()=>{i.value=window.innerWidth<992,r.value=`${window.innerHeight}px`};return Ri(()=>{window.addEventListener("resize",o),o()}),io(()=>{window.removeEventListener("resize",o)}),(a,l)=>(xe(),Ke("div",{class:"bg-warning d-flex justify-content-center align-items-center",style:qi([{overflow:"auto"},{height:r.value}])},[U("div",EI,[U("div",null,[U("div",bI,[U("img",{src:jt(yI),alt:"WordBox",class:"w-100"},null,8,wI)])]),CI,TI,SI,pn(U("input",{type:"text",class:"form-control","onUpdate:modelValue":l[0]||(l[0]=u=>e.value.name=u),onKeyup:Ah(s,["enter"])},null,544),[[Ds,e.value.name]]),II,pn(U("input",{type:"password",class:"form-control","onUpdate:modelValue":l[1]||(l[1]=u=>e.value.pw=u),onKeyup:Ah(s,["enter"])},null,544),[[Ds,e.value.pw]]),n.value?(xe(),Ke("div",AI,"暱稱或密碼錯誤，請詢問管理員")):Vn("",!0),U("button",{type:"button",class:"btn btn-primary mt-3 w-100",onClick:s},"登入")])],4))}};var Kh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V=function(t,e){if(!t)throw Qi(e)},Qi=function(t){return new Error("Firebase Database ("+X_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},NI=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Uu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,f=r>>2,h=(r&3)<<4|a>>4;let p=(a&15)<<2|u>>6,_=u&63;l||(_=64,o||(p=64)),s.push(n[f],n[h],n[p],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(J_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):NI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||u==null||h==null)throw new RI;const p=r<<2|a>>4;if(s.push(p),u!==64){const _=a<<4&240|u>>2;if(s.push(_),h!==64){const E=u<<6&192|h;s.push(E)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class RI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Z_=function(t){const e=J_(t);return Uu.encodeByteArray(e,!0)},ma=function(t){return Z_(t).replace(/\./g,"")},_a=function(t){try{return Uu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(t){return eg(void 0,t)}function eg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!xI(n)||(t[n]=eg(t[n],e[n]));return t}function xI(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI=()=>kI().__FIREBASE_DEFAULTS__,LI=()=>{if(typeof process>"u"||typeof Kh>"u")return;const t=Kh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},MI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_a(t[1]);return e&&JSON.parse(e)},Wu=()=>{try{return DI()||LI()||MI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},tg=t=>{var e,n;return(n=(e=Wu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},FI=t=>{const e=tg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ng=()=>{var t;return(t=Wu())===null||t===void 0?void 0:t.config},sg=t=>{var e;return(e=Wu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $I(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ma(JSON.stringify(n)),ma(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function UI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ig(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function WI(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rg(){return X_.NODE_ADMIN===!0}function VI(){try{return typeof indexedDB=="object"}catch{return!1}}function HI(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI="FirebaseError";class ms extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=jI,Object.setPrototypeOf(this,ms.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ao.prototype.create)}}class ao{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?BI(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ms(i,a,s)}}function BI(t,e){return t.replace(zI,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const zI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(t){return JSON.parse(t)}function je(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Hr(_a(r[0])||""),n=Hr(_a(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},KI=function(t){const e=og(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},GI=function(t){const e=og(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Di(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Pc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ga(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function va(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Gh(r)&&Gh(o)){if(!va(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Gh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const p=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(p<<1|p>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,f;for(let h=0;h<80;h++){h<40?h<20?(u=a^r&(o^a),f=1518500249):(u=r^o^a,f=1859775393):h<60?(u=r&o|a&(r|o),f=2400959708):(u=r^o^a,f=3395469782);const p=(i<<5|i>>>27)+u+l+f+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=p}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function qI(t,e){const n=new QI(t,e);return n.subscribe.bind(n)}class QI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");XI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Ql),i.error===void 0&&(i.error=Ql),i.complete===void 0&&(i.complete=Ql);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function XI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ql(){}function sl(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,V(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},il=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t){return t&&t._delegate?t._delegate:t}class Bs{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new oo;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tA(e))try{this.getOrInitializeService({instanceIdentifier:As})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=As){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=As){return this.instances.has(e)}getOptions(e=As){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:eA(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=As){return this.component?this.component.multipleInstances?e:As:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function eA(t){return t===As?void 0:t}function tA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ZI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const sA={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},iA=Te.INFO,rA={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},oA=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=rA[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hu{constructor(e){this.name=e,this._logLevel=iA,this._logHandler=oA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const aA=(t,e)=>e.some(n=>t instanceof n);let Yh,qh;function lA(){return Yh||(Yh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cA(){return qh||(qh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ag=new WeakMap,xc=new WeakMap,lg=new WeakMap,Xl=new WeakMap,ju=new WeakMap;function uA(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(es(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ag.set(n,t)}).catch(()=>{}),ju.set(e,t),e}function fA(t){if(xc.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});xc.set(t,e)}let kc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return es(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function dA(t){kc=t(kc)}function hA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Jl(this),e,...n);return lg.set(s,e.sort?e.sort():[e]),es(s)}:cA().includes(t)?function(...e){return t.apply(Jl(this),e),es(ag.get(this))}:function(...e){return es(t.apply(Jl(this),e))}}function pA(t){return typeof t=="function"?hA(t):(t instanceof IDBTransaction&&fA(t),aA(t,lA())?new Proxy(t,kc):t)}function es(t){if(t instanceof IDBRequest)return uA(t);if(Xl.has(t))return Xl.get(t);const e=pA(t);return e!==t&&(Xl.set(t,e),ju.set(e,t)),e}const Jl=t=>ju.get(t);function mA(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=es(o);return s&&o.addEventListener("upgradeneeded",l=>{s(es(o.result),l.oldVersion,l.newVersion,es(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const _A=["get","getKey","getAll","getAllKeys","count"],gA=["put","add","delete","clear"],Zl=new Map;function Qh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zl.get(e))return Zl.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=gA.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||_A.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Zl.set(e,r),r}dA(t=>({...t,get:(e,n,s)=>Qh(e,n)||t.get(e,n,s),has:(e,n)=>!!Qh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yA(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function yA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dc="@firebase/app",Xh="0.10.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new Hu("@firebase/app"),EA="@firebase/app-compat",bA="@firebase/analytics-compat",wA="@firebase/analytics",CA="@firebase/app-check-compat",TA="@firebase/app-check",SA="@firebase/auth",IA="@firebase/auth-compat",AA="@firebase/database",OA="@firebase/database-compat",NA="@firebase/functions",RA="@firebase/functions-compat",PA="@firebase/installations",xA="@firebase/installations-compat",kA="@firebase/messaging",DA="@firebase/messaging-compat",LA="@firebase/performance",MA="@firebase/performance-compat",FA="@firebase/remote-config",$A="@firebase/remote-config-compat",UA="@firebase/storage",WA="@firebase/storage-compat",VA="@firebase/firestore",HA="@firebase/vertexai-preview",jA="@firebase/firestore-compat",BA="firebase",zA="10.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc="[DEFAULT]",KA={[Dc]:"fire-core",[EA]:"fire-core-compat",[wA]:"fire-analytics",[bA]:"fire-analytics-compat",[TA]:"fire-app-check",[CA]:"fire-app-check-compat",[SA]:"fire-auth",[IA]:"fire-auth-compat",[AA]:"fire-rtdb",[OA]:"fire-rtdb-compat",[NA]:"fire-fn",[RA]:"fire-fn-compat",[PA]:"fire-iid",[xA]:"fire-iid-compat",[kA]:"fire-fcm",[DA]:"fire-fcm-compat",[LA]:"fire-perf",[MA]:"fire-perf-compat",[FA]:"fire-rc",[$A]:"fire-rc-compat",[UA]:"fire-gcs",[WA]:"fire-gcs-compat",[VA]:"fire-fst",[jA]:"fire-fst-compat",[HA]:"fire-vertex","fire-js":"fire-js",[BA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=new Map,GA=new Map,Mc=new Map;function Jh(t,e){try{t.container.addComponent(e)}catch(n){Cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Li(t){const e=t.name;if(Mc.has(e))return Cn.debug(`There were multiple attempts to register component ${e}.`),!1;Mc.set(e,t);for(const n of ya.values())Jh(n,t);for(const n of GA.values())Jh(n,t);return!0}function Bu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function qn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ts=new ao("app","Firebase",YA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Bs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ts.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=zA;function cg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Lc,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw ts.create("bad-app-name",{appName:String(i)});if(n||(n=ng()),!n)throw ts.create("no-options");const r=ya.get(i);if(r){if(va(n,r.options)&&va(s,r.config))return r;throw ts.create("duplicate-app",{appName:i})}const o=new nA(i);for(const l of Mc.values())o.addComponent(l);const a=new qA(n,s,o);return ya.set(i,a),a}function ug(t=Lc){const e=ya.get(t);if(!e&&t===Lc&&ng())return cg();if(!e)throw ts.create("no-app",{appName:t});return e}function ns(t,e,n){var s;let i=(s=KA[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cn.warn(a.join(" "));return}Li(new Bs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA="firebase-heartbeat-database",XA=1,jr="firebase-heartbeat-store";let ec=null;function fg(){return ec||(ec=mA(QA,XA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(jr)}catch(n){console.warn(n)}}}}).catch(t=>{throw ts.create("idb-open",{originalErrorMessage:t.message})})),ec}async function JA(t){try{const n=(await fg()).transaction(jr),s=await n.objectStore(jr).get(dg(t));return await n.done,s}catch(e){if(e instanceof ms)Cn.warn(e.message);else{const n=ts.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cn.warn(n.message)}}}async function Zh(t,e){try{const s=(await fg()).transaction(jr,"readwrite");await s.objectStore(jr).put(e,dg(t)),await s.done}catch(n){if(n instanceof ms)Cn.warn(n.message);else{const s=ts.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cn.warn(s.message)}}}function dg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA=1024,e1=30*24*60*60*1e3;class t1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new s1(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ep();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=e1}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Cn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ep(),{heartbeatsToSend:s,unsentEntries:i}=n1(this._heartbeatsCache.heartbeats),r=ma(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Cn.warn(n),""}}}function ep(){return new Date().toISOString().substring(0,10)}function n1(t,e=ZA){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),tp(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),tp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class s1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return VI()?HI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await JA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Zh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function tp(t){return ma(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i1(t){Li(new Bs("platform-logger",e=>new vA(e),"PRIVATE")),Li(new Bs("heartbeat",e=>new t1(e),"PRIVATE")),ns(Dc,Xh,t),ns(Dc,Xh,"esm2017"),ns("fire-js","")}i1("");var np={};const sp="@firebase/database",ip="1.0.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hg="";function r1(t){hg=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),je(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Hr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ln(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new o1(e)}}catch{}return new a1},Ls=pg("localStorage"),l1=pg("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci=new Hu("@firebase/database"),c1=function(){let t=1;return function(){return t++}}(),mg=function(t){const e=JI(t),n=new YI;n.update(e);const s=n.digest();return Uu.encodeByteArray(s)},lo=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=lo.apply(null,s):typeof s=="object"?e+=je(s):e+=s,e+=" "}return e};let Ir=null,rp=!0;const u1=function(t,e){V(!e,"Can't turn on custom loggers persistently."),Ci.logLevel=Te.VERBOSE,Ir=Ci.log.bind(Ci)},Qe=function(...t){if(rp===!0&&(rp=!1,Ir===null&&l1.get("logging_enabled")===!0&&u1()),Ir){const e=lo.apply(null,t);Ir(e)}},co=function(t){return function(...e){Qe(t,...e)}},Fc=function(...t){const e="FIREBASE INTERNAL ERROR: "+lo(...t);Ci.error(e)},Tn=function(...t){const e=`FIREBASE FATAL ERROR: ${lo(...t)}`;throw Ci.error(e),new Error(e)},ut=function(...t){const e="FIREBASE WARNING: "+lo(...t);Ci.warn(e)},f1=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ut("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},zu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},d1=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Mi="[MIN_NAME]",zs="[MAX_NAME]",Zs=function(t,e){if(t===e)return 0;if(t===Mi||e===zs)return-1;if(e===Mi||t===zs)return 1;{const n=op(t),s=op(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},h1=function(t,e){return t===e?0:t<e?-1:1},hr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+je(e))},Ku=function(t){if(typeof t!="object"||t===null)return je(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=je(e[s]),n+=":",n+=Ku(t[e[s]]);return n+="}",n},_g=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Xe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const gg=function(t){V(!zu(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(i?1:0),u.reverse();const f=u.join("");let h="";for(l=0;l<64;l+=8){let p=parseInt(f.substr(l,8),2).toString(16);p.length===1&&(p="0"+p),h=h+p}return h.toLowerCase()},p1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},m1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function _1(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const g1=new RegExp("^-?(0*)\\d{1,10}$"),v1=-2147483648,y1=2147483647,op=function(t){if(g1.test(t)){const e=Number(t);if(e>=v1&&e<=y1)return e}return null},Zi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ut("Exception was thrown by user callback.",n),e},Math.floor(0))}},E1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ar=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ut(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Qe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ut(e)}}class Zo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Zo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu="5",vg="v",yg="s",Eg="r",bg="f",wg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Cg="ls",Tg="p",$c="ac",Sg="websocket",Ig="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ls.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ls.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function C1(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Og(t,e,n){V(typeof e=="string","typeof type must == string"),V(typeof n=="object","typeof params must == object");let s;if(e===Sg)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ig)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);C1(t)&&(n.ns=t.namespace);const i=[];return Xe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(){this.counters_={}}incrementCounter(e,n=1){ln(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return PI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc={},nc={};function Yu(t){const e=t.toString();return tc[e]||(tc[e]=new T1),tc[e]}function S1(t,e){const n=t.toString();return nc[n]||(nc[n]=e()),nc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Zi(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap="start",A1="close",O1="pLPCommand",N1="pRTLPCB",Ng="id",Rg="pw",Pg="ser",R1="cb",P1="seg",x1="ts",k1="d",D1="dframe",xg=1870,kg=30,L1=xg-kg,M1=25e3,F1=3e4;class pi{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=co(e),this.stats_=Yu(n),this.urlFn=l=>(this.appCheckToken&&(l[$c]=this.appCheckToken),Og(n,Ig,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new I1(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(F1)),d1(()=>{if(this.isClosed_)return;this.scriptTagHolder=new qu((...r)=>{const[o,a,l,u,f]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ap)this.id=a,this.password=l;else if(o===A1)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[ap]="t",s[Pg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[R1]=this.scriptTagHolder.uniqueCallbackIdentifier),s[vg]=Gu,this.transportSessionId&&(s[yg]=this.transportSessionId),this.lastSessionId&&(s[Cg]=this.lastSessionId),this.applicationId&&(s[Tg]=this.applicationId),this.appCheckToken&&(s[$c]=this.appCheckToken),typeof location<"u"&&location.hostname&&wg.test(location.hostname)&&(s[Eg]=bg);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){pi.forceAllow_=!0}static forceDisallow(){pi.forceDisallow_=!0}static isAvailable(){return pi.forceAllow_?!0:!pi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!p1()&&!m1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Z_(n),i=_g(s,L1);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[D1]="t",s[Ng]=e,s[Rg]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=je(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class qu{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=c1(),window[O1+this.uniqueCallbackIdentifier]=e,window[N1+this.uniqueCallbackIdentifier]=n,this.myIFrame=qu.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Qe("frame writing exception"),a.stack&&Qe(a.stack),Qe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Qe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ng]=this.myID,e[Rg]=this.myPW,e[Pg]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+kg+s.length<=xg;){const o=this.pendingSegs.shift();s=s+"&"+P1+i+"="+o.seg+"&"+x1+i+"="+o.ts+"&"+k1+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(M1)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Qe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1=16384,U1=45e3;let Ea=null;typeof MozWebSocket<"u"?Ea=MozWebSocket:typeof WebSocket<"u"&&(Ea=WebSocket);class Vt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=co(this.connId),this.stats_=Yu(n),this.connURL=Vt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[vg]=Gu,typeof location<"u"&&location.hostname&&wg.test(location.hostname)&&(o[Eg]=bg),n&&(o[yg]=n),s&&(o[Cg]=s),i&&(o[$c]=i),r&&(o[Tg]=r),Og(e,Sg,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ls.set("previous_websocket_failure",!0);try{let s;rg(),this.mySock=new Ea(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Vt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ea!==null&&!Vt.forceDisallow_}static previouslyFailed(){return Ls.isInMemoryStorage||Ls.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ls.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Hr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(V(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=_g(n,$1);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(U1))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Vt.responsesRequiredToBeHealthy=2;Vt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[pi,Vt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Vt&&Vt.isAvailable();let s=n&&!Vt.previouslyFailed();if(e.webSocketOnly&&(n||ut("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Vt];else{const i=this.transports_=[];for(const r of Br.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Br.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Br.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1=6e4,V1=5e3,H1=10*1024,j1=100*1024,sc="t",lp="d",B1="s",cp="r",z1="e",up="o",fp="a",dp="n",hp="p",K1="h";class G1{constructor(e,n,s,i,r,o,a,l,u,f){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=co("c:"+this.id+":"),this.transportManager_=new Br(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ar(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>j1?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>H1?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(sc in e){const n=e[sc];n===fp?this.upgradeIfSecondaryHealthy_():n===cp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===up&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=hr("t",e),s=hr("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:hp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:fp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:dp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=hr("t",e),s=hr("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=hr(sc,e);if(lp in e){const s=e[lp];if(n===K1){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===dp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===B1?this.onConnectionShutdown_(s):n===cp?this.onReset_(s):n===z1?Fc("Server Error: "+s):n===up?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Fc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Gu!==s&&ut("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Ar(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(W1))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ar(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(V1))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:hp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ls.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(e){this.allowedEvents_=e,this.listeners_={},V(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){V(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba extends Lg{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Vu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ba}getInitialEvent(e){return V(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=32,mp=768;class Ie{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ge(){return new Ie("")}function fe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function os(t){return t.pieces_.length-t.pieceNum_}function Oe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Ie(t.pieces_,e)}function Qu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Y1(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function zr(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Mg(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Ie(e,0)}function Me(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Ie)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Ie(n,0)}function he(t){return t.pieceNum_>=t.pieces_.length}function ct(t,e){const n=fe(t),s=fe(e);if(n===null)return e;if(n===s)return ct(Oe(t),Oe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function q1(t,e){const n=zr(t,0),s=zr(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=Zs(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function Xu(t,e){if(os(t)!==os(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Lt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(os(t)>os(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class Q1{constructor(e,n){this.errorPrefix_=n,this.parts_=zr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=il(this.parts_[s]);Fg(this)}}function X1(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=il(e),Fg(t)}function J1(t){const e=t.parts_.pop();t.byteLength_-=il(e),t.parts_.length>0&&(t.byteLength_-=1)}function Fg(t){if(t.byteLength_>mp)throw new Error(t.errorPrefix_+"has a key path longer than "+mp+" bytes ("+t.byteLength_+").");if(t.parts_.length>pp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+pp+") or object contains a cycle "+Os(t))}function Os(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju extends Lg{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Ju}getInitialEvent(e){return V(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=1e3,Z1=60*5*1e3,_p=30*1e3,eO=1.3,tO=3e4,nO="server_kill",gp=3;class wn extends Dg{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=wn.nextPersistentConnectionId_++,this.log_=co("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=pr,this.maxReconnectDelay_=Z1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!rg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ju.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ba.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(je(r)),V(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new oo,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),V(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,u=a.s;wn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ln(e,"w")){const s=Di(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ut(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||GI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=_p)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=KI(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),V(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+je(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Fc("Unrecognized action received from server: "+je(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){V(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=pr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=pr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>tO&&(this.reconnectDelay_=pr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*eO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+wn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},u=function(h){V(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:u};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,p]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?Qe("getToken() completed but was canceled"):(Qe("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=p&&p.token,a=new G1(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{ut(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(nO)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&ut(h),l())}}}interrupt(e){Qe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Qe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Pc(this.interruptReasons_)&&(this.reconnectDelay_=pr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Ku(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Ie(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Qe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=gp&&(this.reconnectDelay_=_p,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Qe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=gp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+hg.replace(/\./g,"-")]=1,Vu()?e["framework.cordova"]=1:ig()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ba.getInstance().currentlyOnline();return Pc(this.interruptReasons_)&&e}}wn.nextPersistentConnectionId_=0;wn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new de(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new de(Mi,e),i=new de(Mi,n);return this.compare(s,i)!==0}minPost(){return de.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vo;class $g extends rl{static get __EMPTY_NODE(){return Vo}static set __EMPTY_NODE(e){Vo=e}compare(e,n){return Zs(e.name,n.name)}isDefinedOn(e){throw Qi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return de.MIN}maxPost(){return new de(zs,Vo)}makePost(e,n){return V(typeof e=="string","KeyIndex indexValue must always be a string."),new de(e,Vo)}toString(){return".key"}}const Ti=new $g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ye{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ye.RED,this.left=i??gt.EMPTY_NODE,this.right=r??gt.EMPTY_NODE}copy(e,n,s,i,r){return new Ye(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return gt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return gt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ye.RED=!0;Ye.BLACK=!1;class sO{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ye(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class gt{constructor(e,n=gt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new gt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ye.BLACK,null,null))}remove(e){return new gt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ye.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ho(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ho(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ho(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ho(this.root_,null,this.comparator_,!0,e)}}gt.EMPTY_NODE=new sO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iO(t,e){return Zs(t.name,e.name)}function Zu(t,e){return Zs(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uc;function rO(t){Uc=t}const Ug=function(t){return typeof t=="number"?"number:"+gg(t):"string:"+t},Wg=function(t){if(t.isLeafNode()){const e=t.val();V(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ln(e,".sv"),"Priority must be a string or number.")}else V(t===Uc||t.isEmpty(),"priority of unexpected type.");V(t===Uc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vp;class Ge{constructor(e,n=Ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,V(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Wg(this.priorityNode_)}static set __childrenNodeConstructor(e){vp=e}static get __childrenNodeConstructor(){return vp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return he(e)?this:fe(e)===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=fe(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(V(s!==".priority"||os(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(Oe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ug(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=gg(this.value_):e+=this.value_,this.lazyHash_=mg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ge.__childrenNodeConstructor?-1:(V(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ge.VALUE_TYPE_ORDER.indexOf(n),r=Ge.VALUE_TYPE_ORDER.indexOf(s);return V(i>=0,"Unknown leaf type: "+n),V(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vg,Hg;function oO(t){Vg=t}function aO(t){Hg=t}class lO extends rl{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Zs(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return de.MIN}maxPost(){return new de(zs,new Ge("[PRIORITY-POST]",Hg))}makePost(e,n){const s=Vg(e);return new de(n,new Ge("[PRIORITY-POST]",s))}toString(){return".priority"}}const Fe=new lO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cO=Math.log(2);class uO{constructor(e){const n=r=>parseInt(Math.log(r)/cO,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const wa=function(t,e,n,s){t.sort(e);const i=function(l,u){const f=u-l;let h,p;if(f===0)return null;if(f===1)return h=t[l],p=n?n(h):h,new Ye(p,h.node,Ye.BLACK,null,null);{const _=parseInt(f/2,10)+l,E=i(l,_),w=i(_+1,u);return h=t[_],p=n?n(h):h,new Ye(p,h.node,Ye.BLACK,E,w)}},r=function(l){let u=null,f=null,h=t.length;const p=function(E,w){const A=h-E,C=h;h-=E;const T=i(A+1,C),x=t[A],M=n?n(x):x;_(new Ye(M,x.node,w,null,T))},_=function(E){u?(u.left=E,u=E):(f=E,u=E)};for(let E=0;E<l.count;++E){const w=l.nextBitIsOne(),A=Math.pow(2,l.count-(E+1));w?p(A,Ye.BLACK):(p(A,Ye.BLACK),p(A,Ye.RED))}return f},o=new uO(t.length),a=r(o);return new gt(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ic;const ui={};class _n{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return V(ui&&Fe,"ChildrenNode.ts has not been loaded"),ic=ic||new _n({".priority":ui},{".priority":Fe}),ic}get(e){const n=Di(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof gt?n:null}hasIndex(e){return ln(this.indexSet_,e.toString())}addIndex(e,n){V(e!==Ti,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(de.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=wa(s,e.getCompare()):a=ui;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const f=Object.assign({},this.indexes_);return f[l]=a,new _n(f,u)}addToIndexes(e,n){const s=ga(this.indexes_,(i,r)=>{const o=Di(this.indexSet_,r);if(V(o,"Missing index implementation for "+r),i===ui)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(de.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),wa(a,o.getCompare())}else return ui;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new de(e.name,a))),l.insert(e,e.node)}});return new _n(s,this.indexSet_)}removeFromIndexes(e,n){const s=ga(this.indexes_,i=>{if(i===ui)return i;{const r=n.get(e.name);return r?i.remove(new de(e.name,r)):i}});return new _n(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mr;class te{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Wg(this.priorityNode_),this.children_.isEmpty()&&V(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return mr||(mr=new te(new gt(Zu),null,_n.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||mr}updatePriority(e){return this.children_.isEmpty()?this:new te(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?mr:n}}getChild(e){const n=fe(e);return n===null?this:this.getImmediateChild(n).getChild(Oe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(V(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new de(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?mr:this.priorityNode_;return new te(i,o,r)}}updateChild(e,n){const s=fe(e);if(s===null)return n;{V(fe(e)!==".priority"||os(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Oe(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Fe,(o,a)=>{n[o]=a.val(e),s++,r&&te.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ug(this.getPriority().val())+":"),this.forEachChild(Fe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":mg(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new de(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new de(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new de(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,de.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,de.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===uo?-1:0}withIndex(e){if(e===Ti||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new te(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ti||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Fe),i=n.getIterator(Fe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ti?null:this.indexMap_.get(e.toString())}}te.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class fO extends te{constructor(){super(new gt(Zu),te.EMPTY_NODE,_n.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return te.EMPTY_NODE}isEmpty(){return!1}}const uo=new fO;Object.defineProperties(de,{MIN:{value:new de(Mi,te.EMPTY_NODE)},MAX:{value:new de(zs,uo)}});$g.__EMPTY_NODE=te.EMPTY_NODE;Ge.__childrenNodeConstructor=te;rO(uo);aO(uo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO=!0;function He(t,e=null){if(t===null)return te.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),V(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ge(n,He(e))}if(!(t instanceof Array)&&dO){const n=[];let s=!1;if(Xe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=He(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new de(o,l)))}}),n.length===0)return te.EMPTY_NODE;const r=wa(n,iO,o=>o.name,Zu);if(s){const o=wa(n,Fe.getCompare());return new te(r,He(e),new _n({".priority":o},{".priority":Fe}))}else return new te(r,He(e),_n.Default)}else{let n=te.EMPTY_NODE;return Xe(t,(s,i)=>{if(ln(t,s)&&s.substring(0,1)!=="."){const r=He(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(He(e))}}oO(He);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO extends rl{constructor(e){super(),this.indexPath_=e,V(!he(e)&&fe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Zs(e.name,n.name):r}makePost(e,n){const s=He(e),i=te.EMPTY_NODE.updateChild(this.indexPath_,s);return new de(n,i)}maxPost(){const e=te.EMPTY_NODE.updateChild(this.indexPath_,uo);return new de(zs,e)}toString(){return zr(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO extends rl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Zs(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return de.MIN}maxPost(){return de.MAX}makePost(e,n){const s=He(e);return new de(n,s)}toString(){return".value"}}const mO=new pO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(t){return{type:"value",snapshotNode:t}}function Fi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Kr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Gr(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function _O(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){V(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Kr(n,a)):V(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Fi(n,s)):o.trackChildChange(Gr(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Fe,(i,r)=>{n.hasChild(i)||s.trackChildChange(Kr(i,r))}),n.isLeafNode()||n.forEachChild(Fe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Gr(i,r,o))}else s.trackChildChange(Fi(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?te.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.indexedFilter_=new ef(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Yr.getStartPost_(e),this.endPost_=Yr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new de(n,s))||(s=te.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=te.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(te.EMPTY_NODE);const r=this;return n.forEachChild(Fe,(o,a)=>{r.matches(new de(o,a))||(i=i.updateImmediateChild(o,te.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Yr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new de(n,s))||(s=te.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=te.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=te.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(te.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,te.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(p,_)=>h(_,p)}else o=this.index_.getCompare();const a=e;V(a.numChildren()===this.limit_,"");const l=new de(n,s),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),f=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let p=i.getChildAfterChild(this.index_,u,this.reverse_);for(;p!=null&&(p.name===n||a.hasChild(p.name));)p=i.getChildAfterChild(this.index_,p,this.reverse_);const _=p==null?1:o(p,l);if(f&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(Gr(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Kr(n,h));const w=a.updateImmediateChild(n,te.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(r!=null&&r.trackChildChange(Fi(p.name,p.node)),w.updateImmediateChild(p.name,p.node)):w}}else return s.isEmpty()?e:f&&o(u,l)>=0?(r!=null&&(r.trackChildChange(Kr(u.name,u.node)),r.trackChildChange(Fi(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(u.name,te.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return V(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return V(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Mi}hasEnd(){return this.endSet_}getIndexEndValue(){return V(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return V(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:zs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return V(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Fe}copy(){const e=new tf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function vO(t){return t.loadsAllData()?new ef(t.getIndex()):t.hasLimit()?new gO(t):new Yr(t)}function yp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Fe?n="$priority":t.index_===mO?n="$value":t.index_===Ti?n="$key":(V(t.index_ instanceof hO,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=je(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=je(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+je(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=je(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+je(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ep(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Fe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca extends Dg{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=co("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(V(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ca.getListenId_(e,s),a={};this.listens_[o]=a;const l=yp(e._queryParams);this.restRequest_(r+".json",l,(u,f)=>{let h=f;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(r,h,!1,s),Di(this.listens_,o)===a){let p;u?u===401?p="permission_denied":p="rest_error:"+u:p="ok",i(p,null)}})}unlisten(e,n){const s=Ca.getListenId_(e,n);delete this.listens_[s]}get(e){const n=yp(e._queryParams),s=e._path.toString(),i=new oo;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Xi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Hr(a.responseText)}catch{ut("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&ut("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO{constructor(){this.rootNode_=te.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ta(){return{value:null,children:new Map}}function Bg(t,e,n){if(he(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=fe(e);t.children.has(s)||t.children.set(s,Ta());const i=t.children.get(s);e=Oe(e),Bg(i,e,n)}}function Wc(t,e,n){t.value!==null?n(e,t.value):EO(t,(s,i)=>{const r=new Ie(e.toString()+"/"+s);Wc(i,r,n)})}function EO(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Xe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp=10*1e3,wO=30*1e3,CO=5*60*1e3;class TO{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new bO(e);const s=bp+(wO-bp)*Math.random();Ar(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Xe(e,(i,r)=>{r>0&&ln(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Ar(this.reportStats_.bind(this),Math.floor(Math.random()*2*CO))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ht;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ht||(Ht={}));function nf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function sf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function rf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ht.ACK_USER_WRITE,this.source=nf()}operationForChild(e){if(he(this.path)){if(this.affectedTree.value!=null)return V(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Ie(e));return new Sa(ge(),n,this.revert)}}else return V(fe(this.path)===e,"operationForChild called for unrelated child."),new Sa(Oe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,n){this.source=e,this.path=n,this.type=Ht.LISTEN_COMPLETE}operationForChild(e){return he(this.path)?new qr(this.source,ge()):new qr(this.source,Oe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ht.OVERWRITE}operationForChild(e){return he(this.path)?new Ks(this.source,ge(),this.snap.getImmediateChild(e)):new Ks(this.source,Oe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ht.MERGE}operationForChild(e){if(he(this.path)){const n=this.children.subtree(new Ie(e));return n.isEmpty()?null:n.value?new Ks(this.source,ge(),n.value):new $i(this.source,ge(),n)}else return V(fe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new $i(this.source,Oe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(he(e))return this.isFullyInitialized()&&!this.filtered_;const n=fe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function IO(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(_O(o.childName,o.snapshotNode))}),_r(t,i,"child_removed",e,s,n),_r(t,i,"child_added",e,s,n),_r(t,i,"child_moved",r,s,n),_r(t,i,"child_changed",e,s,n),_r(t,i,"value",e,s,n),i}function _r(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>OO(t,a,l)),o.forEach(a=>{const l=AO(t,a,r);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function AO(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function OO(t,e,n){if(e.childName==null||n.childName==null)throw Qi("Should only compare child_ events.");const s=new de(e.childName,e.snapshotNode),i=new de(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(t,e){return{eventCache:t,serverCache:e}}function Or(t,e,n,s){return ol(new as(e,n,s),t.serverCache)}function zg(t,e,n,s){return ol(t.eventCache,new as(e,n,s))}function Ia(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Gs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rc;const NO=()=>(rc||(rc=new gt(h1)),rc);class Ae{constructor(e,n=NO()){this.value=e,this.children=n}static fromObject(e){let n=new Ae(null);return Xe(e,(s,i)=>{n=n.set(new Ie(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ge(),value:this.value};if(he(e))return null;{const s=fe(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Oe(e),n);return r!=null?{path:Me(new Ie(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(he(e))return this;{const n=fe(e),s=this.children.get(n);return s!==null?s.subtree(Oe(e)):new Ae(null)}}set(e,n){if(he(e))return new Ae(n,this.children);{const s=fe(e),r=(this.children.get(s)||new Ae(null)).set(Oe(e),n),o=this.children.insert(s,r);return new Ae(this.value,o)}}remove(e){if(he(e))return this.children.isEmpty()?new Ae(null):new Ae(null,this.children);{const n=fe(e),s=this.children.get(n);if(s){const i=s.remove(Oe(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Ae(null):new Ae(this.value,r)}else return this}}get(e){if(he(e))return this.value;{const n=fe(e),s=this.children.get(n);return s?s.get(Oe(e)):null}}setTree(e,n){if(he(e))return n;{const s=fe(e),r=(this.children.get(s)||new Ae(null)).setTree(Oe(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Ae(this.value,o)}}fold(e){return this.fold_(ge(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Me(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ge(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(he(e))return null;{const r=fe(e),o=this.children.get(r);return o?o.findOnPath_(Oe(e),Me(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ge(),n)}foreachOnPath_(e,n,s){if(he(e))return this;{this.value&&s(n,this.value);const i=fe(e),r=this.children.get(i);return r?r.foreachOnPath_(Oe(e),Me(n,i),s):new Ae(null)}}foreach(e){this.foreach_(ge(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Me(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.writeTree_=e}static empty(){return new zt(new Ae(null))}}function Nr(t,e,n){if(he(e))return new zt(new Ae(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ct(i,e);return r=r.updateChild(o,n),new zt(t.writeTree_.set(i,r))}else{const i=new Ae(n),r=t.writeTree_.setTree(e,i);return new zt(r)}}}function Vc(t,e,n){let s=t;return Xe(n,(i,r)=>{s=Nr(s,Me(e,i),r)}),s}function wp(t,e){if(he(e))return zt.empty();{const n=t.writeTree_.setTree(e,new Ae(null));return new zt(n)}}function Hc(t,e){return ei(t,e)!=null}function ei(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ct(n.path,e)):null}function Cp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Fe,(s,i)=>{e.push(new de(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new de(s,i.value))}),e}function ss(t,e){if(he(e))return t;{const n=ei(t,e);return n!=null?new zt(new Ae(n)):new zt(t.writeTree_.subtree(e))}}function jc(t){return t.writeTree_.isEmpty()}function Ui(t,e){return Kg(ge(),t.writeTree_,e)}function Kg(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(V(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Kg(Me(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Me(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(t,e){return Qg(e,t)}function RO(t,e,n,s,i){V(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Nr(t.visibleWrites,e,n)),t.lastWriteId=s}function PO(t,e,n,s){V(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Vc(t.visibleWrites,e,n),t.lastWriteId=s}function xO(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function kO(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);V(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&DO(a,s.path)?i=!1:Lt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return LO(t),!0;if(s.snap)t.visibleWrites=wp(t.visibleWrites,s.path);else{const a=s.children;Xe(a,l=>{t.visibleWrites=wp(t.visibleWrites,Me(s.path,l))})}return!0}else return!1}function DO(t,e){if(t.snap)return Lt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Lt(Me(t.path,n),e))return!0;return!1}function LO(t){t.visibleWrites=Gg(t.allWrites,MO,ge()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function MO(t){return t.visible}function Gg(t,e,n){let s=zt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Lt(n,o)?(a=ct(n,o),s=Nr(s,a,r.snap)):Lt(o,n)&&(a=ct(o,n),s=Nr(s,ge(),r.snap.getChild(a)));else if(r.children){if(Lt(n,o))a=ct(n,o),s=Vc(s,a,r.children);else if(Lt(o,n))if(a=ct(o,n),he(a))s=Vc(s,ge(),r.children);else{const l=Di(r.children,fe(a));if(l){const u=l.getChild(Oe(a));s=Nr(s,ge(),u)}}}else throw Qi("WriteRecord should have .snap or .children")}}return s}function Yg(t,e,n,s,i){if(!s&&!i){const r=ei(t.visibleWrites,e);if(r!=null)return r;{const o=ss(t.visibleWrites,e);if(jc(o))return n;if(n==null&&!Hc(o,ge()))return null;{const a=n||te.EMPTY_NODE;return Ui(o,a)}}}else{const r=ss(t.visibleWrites,e);if(!i&&jc(r))return n;if(!i&&n==null&&!Hc(r,ge()))return null;{const o=function(u){return(u.visible||i)&&(!s||!~s.indexOf(u.writeId))&&(Lt(u.path,e)||Lt(e,u.path))},a=Gg(t.allWrites,o,e),l=n||te.EMPTY_NODE;return Ui(a,l)}}}function FO(t,e,n){let s=te.EMPTY_NODE;const i=ei(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Fe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=ss(t.visibleWrites,e);return n.forEachChild(Fe,(o,a)=>{const l=Ui(ss(r,new Ie(o)),a);s=s.updateImmediateChild(o,l)}),Cp(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=ss(t.visibleWrites,e);return Cp(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function $O(t,e,n,s,i){V(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Me(e,n);if(Hc(t.visibleWrites,r))return null;{const o=ss(t.visibleWrites,r);return jc(o)?i.getChild(n):Ui(o,i.getChild(n))}}function UO(t,e,n,s){const i=Me(e,n),r=ei(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=ss(t.visibleWrites,i);return Ui(o,s.getNode().getImmediateChild(n))}else return null}function WO(t,e){return ei(t.visibleWrites,e)}function VO(t,e,n,s,i,r,o){let a;const l=ss(t.visibleWrites,e),u=ei(l,ge());if(u!=null)a=u;else if(n!=null)a=Ui(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const f=[],h=o.getCompare(),p=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=p.getNext();for(;_&&f.length<i;)h(_,s)!==0&&f.push(_),_=p.getNext();return f}else return[]}function HO(){return{visibleWrites:zt.empty(),allWrites:[],lastWriteId:-1}}function Aa(t,e,n,s){return Yg(t.writeTree,t.treePath,e,n,s)}function of(t,e){return FO(t.writeTree,t.treePath,e)}function Tp(t,e,n,s){return $O(t.writeTree,t.treePath,e,n,s)}function Oa(t,e){return WO(t.writeTree,Me(t.treePath,e))}function jO(t,e,n,s,i,r){return VO(t.writeTree,t.treePath,e,n,s,i,r)}function af(t,e,n){return UO(t.writeTree,t.treePath,e,n)}function qg(t,e){return Qg(Me(t.treePath,e),t.writeTree)}function Qg(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;V(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),V(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Gr(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Kr(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Fi(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Gr(s,e.snapshotNode,i.oldSnap));else throw Qi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Xg=new zO;class lf{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new as(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return af(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Gs(this.viewCache_),r=jO(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KO(t){return{filter:t}}function GO(t,e){V(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),V(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function YO(t,e,n,s,i){const r=new BO;let o,a;if(n.type===Ht.OVERWRITE){const u=n;u.source.fromUser?o=Bc(t,e,u.path,u.snap,s,i,r):(V(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!he(u.path),o=Na(t,e,u.path,u.snap,s,i,a,r))}else if(n.type===Ht.MERGE){const u=n;u.source.fromUser?o=QO(t,e,u.path,u.children,s,i,r):(V(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=zc(t,e,u.path,u.children,s,i,a,r))}else if(n.type===Ht.ACK_USER_WRITE){const u=n;u.revert?o=ZO(t,e,u.path,s,i,r):o=XO(t,e,u.path,u.affectedTree,s,i,r)}else if(n.type===Ht.LISTEN_COMPLETE)o=JO(t,e,n.path,s,r);else throw Qi("Unknown operation type: "+n.type);const l=r.getChanges();return qO(e,o,l),{viewCache:o,changes:l}}function qO(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ia(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(jg(Ia(e)))}}function Jg(t,e,n,s,i,r){const o=e.eventCache;if(Oa(s,n)!=null)return e;{let a,l;if(he(n))if(V(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Gs(e),f=u instanceof te?u:te.EMPTY_NODE,h=of(s,f);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const u=Aa(s,Gs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=fe(n);if(u===".priority"){V(os(n)===1,"Can't have a priority with additional path components");const f=o.getNode();l=e.serverCache.getNode();const h=Tp(s,n,f,l);h!=null?a=t.filter.updatePriority(f,h):a=o.getNode()}else{const f=Oe(n);let h;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const p=Tp(s,n,o.getNode(),l);p!=null?h=o.getNode().getImmediateChild(u).updateChild(f,p):h=o.getNode().getImmediateChild(u)}else h=af(s,u,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),u,h,f,i,r):a=o.getNode()}}return Or(e,a,o.isFullyInitialized()||he(n),t.filter.filtersNodes())}}function Na(t,e,n,s,i,r,o,a){const l=e.serverCache;let u;const f=o?t.filter:t.filter.getIndexedFilter();if(he(n))u=f.updateFullNode(l.getNode(),s,null);else if(f.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,s);u=f.updateFullNode(l.getNode(),_,null)}else{const _=fe(n);if(!l.isCompleteForPath(n)&&os(n)>1)return e;const E=Oe(n),A=l.getNode().getImmediateChild(_).updateChild(E,s);_===".priority"?u=f.updatePriority(l.getNode(),A):u=f.updateChild(l.getNode(),_,A,E,Xg,null)}const h=zg(e,u,l.isFullyInitialized()||he(n),f.filtersNodes()),p=new lf(i,h,r);return Jg(t,h,n,i,p,a)}function Bc(t,e,n,s,i,r,o){const a=e.eventCache;let l,u;const f=new lf(i,e,r);if(he(n))u=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Or(e,u,!0,t.filter.filtersNodes());else{const h=fe(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),s),l=Or(e,u,a.isFullyInitialized(),a.isFiltered());else{const p=Oe(n),_=a.getNode().getImmediateChild(h);let E;if(he(p))E=s;else{const w=f.getCompleteChild(h);w!=null?Qu(p)===".priority"&&w.getChild(Mg(p)).isEmpty()?E=w:E=w.updateChild(p,s):E=te.EMPTY_NODE}if(_.equals(E))l=e;else{const w=t.filter.updateChild(a.getNode(),h,E,p,f,o);l=Or(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Sp(t,e){return t.eventCache.isCompleteForChild(e)}function QO(t,e,n,s,i,r,o){let a=e;return s.foreach((l,u)=>{const f=Me(n,l);Sp(e,fe(f))&&(a=Bc(t,a,f,u,i,r,o))}),s.foreach((l,u)=>{const f=Me(n,l);Sp(e,fe(f))||(a=Bc(t,a,f,u,i,r,o))}),a}function Ip(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function zc(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;he(n)?u=s:u=new Ae(null).setTree(n,s);const f=e.serverCache.getNode();return u.children.inorderTraversal((h,p)=>{if(f.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),E=Ip(t,_,p);l=Na(t,l,new Ie(h),E,i,r,o,a)}}),u.children.inorderTraversal((h,p)=>{const _=!e.serverCache.isCompleteForChild(h)&&p.value===null;if(!f.hasChild(h)&&!_){const E=e.serverCache.getNode().getImmediateChild(h),w=Ip(t,E,p);l=Na(t,l,new Ie(h),w,i,r,o,a)}}),l}function XO(t,e,n,s,i,r,o){if(Oa(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(he(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Na(t,e,n,l.getNode().getChild(n),i,r,a,o);if(he(n)){let u=new Ae(null);return l.getNode().forEachChild(Ti,(f,h)=>{u=u.set(new Ie(f),h)}),zc(t,e,n,u,i,r,a,o)}else return e}else{let u=new Ae(null);return s.foreach((f,h)=>{const p=Me(n,f);l.isCompleteForPath(p)&&(u=u.set(f,l.getNode().getChild(p)))}),zc(t,e,n,u,i,r,a,o)}}function JO(t,e,n,s,i){const r=e.serverCache,o=zg(e,r.getNode(),r.isFullyInitialized()||he(n),r.isFiltered());return Jg(t,o,n,s,Xg,i)}function ZO(t,e,n,s,i,r){let o;if(Oa(s,n)!=null)return e;{const a=new lf(s,e,i),l=e.eventCache.getNode();let u;if(he(n)||fe(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Aa(s,Gs(e));else{const h=e.serverCache.getNode();V(h instanceof te,"serverChildren would be complete if leaf node"),f=of(s,h)}f=f,u=t.filter.updateFullNode(l,f,r)}else{const f=fe(n);let h=af(s,f,e.serverCache);h==null&&e.serverCache.isCompleteForChild(f)&&(h=l.getImmediateChild(f)),h!=null?u=t.filter.updateChild(l,f,h,Oe(n),a,r):e.eventCache.getNode().hasChild(f)?u=t.filter.updateChild(l,f,te.EMPTY_NODE,Oe(n),a,r):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Aa(s,Gs(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||Oa(s,ge())!=null,Or(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new ef(s.getIndex()),r=vO(s);this.processor_=KO(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(te.EMPTY_NODE,o.getNode(),null),u=r.updateFullNode(te.EMPTY_NODE,a.getNode(),null),f=new as(l,o.isFullyInitialized(),i.filtersNodes()),h=new as(u,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=ol(h,f),this.eventGenerator_=new SO(this.query_)}get query(){return this.query_}}function tN(t){return t.viewCache_.serverCache.getNode()}function nN(t){return Ia(t.viewCache_)}function sN(t,e){const n=Gs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!he(e)&&!n.getImmediateChild(fe(e)).isEmpty())?n.getChild(e):null}function Ap(t){return t.eventRegistrations_.length===0}function iN(t,e){t.eventRegistrations_.push(e)}function Op(t,e,n){const s=[];if(n){V(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Np(t,e,n,s){e.type===Ht.MERGE&&e.source.queryId!==null&&(V(Gs(t.viewCache_),"We should always have a full cache before handling merges"),V(Ia(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=YO(t.processor_,i,e,n,s);return GO(t.processor_,r.viewCache),V(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Zg(t,r.changes,r.viewCache.eventCache.getNode(),null)}function rN(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Fe,(r,o)=>{s.push(Fi(r,o))}),n.isFullyInitialized()&&s.push(jg(n.getNode())),Zg(t,s,n.getNode(),e)}function Zg(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return IO(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ra;class ev{constructor(){this.views=new Map}}function oN(t){V(!Ra,"__referenceConstructor has already been defined"),Ra=t}function aN(){return V(Ra,"Reference.ts has not been loaded"),Ra}function lN(t){return t.views.size===0}function cf(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return V(r!=null,"SyncTree gave us an op for an invalid query."),Np(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Np(o,e,n,s));return r}}function tv(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Aa(n,i?s:null),l=!1;a?l=!0:s instanceof te?(a=of(n,s),l=!1):(a=te.EMPTY_NODE,l=!1);const u=ol(new as(a,l,!1),new as(s,i,!1));return new eN(e,u)}return o}function cN(t,e,n,s,i,r){const o=tv(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),iN(o,n),rN(o,n)}function uN(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=ls(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(Op(u,n,s)),Ap(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||r.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(Op(l,n,s)),Ap(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!ls(t)&&r.push(new(aN())(e._repo,e._path)),{removed:r,events:o}}function nv(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function is(t,e){let n=null;for(const s of t.views.values())n=n||sN(s,e);return n}function sv(t,e){if(e._queryParams.loadsAllData())return ll(t);{const s=e._queryIdentifier;return t.views.get(s)}}function iv(t,e){return sv(t,e)!=null}function ls(t){return ll(t)!=null}function ll(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pa;function fN(t){V(!Pa,"__referenceConstructor has already been defined"),Pa=t}function dN(){return V(Pa,"Reference.ts has not been loaded"),Pa}let hN=1;class Rp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ae(null),this.pendingWriteTree_=HO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function rv(t,e,n,s,i){return RO(t.pendingWriteTree_,e,n,s,i),i?er(t,new Ks(nf(),e,n)):[]}function pN(t,e,n,s){PO(t.pendingWriteTree_,e,n,s);const i=Ae.fromObject(n);return er(t,new $i(nf(),e,i))}function Qn(t,e,n=!1){const s=xO(t.pendingWriteTree_,e);if(kO(t.pendingWriteTree_,e)){let r=new Ae(null);return s.snap!=null?r=r.set(ge(),!0):Xe(s.children,o=>{r=r.set(new Ie(o),!0)}),er(t,new Sa(s.path,r,n))}else return[]}function fo(t,e,n){return er(t,new Ks(sf(),e,n))}function mN(t,e,n){const s=Ae.fromObject(n);return er(t,new $i(sf(),e,s))}function _N(t,e){return er(t,new qr(sf(),e))}function gN(t,e,n){const s=ff(t,n);if(s){const i=df(s),r=i.path,o=i.queryId,a=ct(r,e),l=new qr(rf(o),a);return hf(t,r,l)}else return[]}function xa(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||iv(o,e))){const l=uN(o,e,n,s);lN(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const u=l.removed;if(a=l.events,!i){const f=u.findIndex(p=>p._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(p,_)=>ls(_));if(f&&!h){const p=t.syncPointTree_.subtree(r);if(!p.isEmpty()){const _=EN(p);for(let E=0;E<_.length;++E){const w=_[E],A=w.query,C=cv(t,w);t.listenProvider_.startListening(Rr(A),Qr(t,A),C.hashFn,C.onComplete)}}}!h&&u.length>0&&!s&&(f?t.listenProvider_.stopListening(Rr(e),null):u.forEach(p=>{const _=t.queryToTagMap.get(cl(p));t.listenProvider_.stopListening(Rr(p),_)}))}bN(t,u)}return a}function ov(t,e,n,s){const i=ff(t,s);if(i!=null){const r=df(i),o=r.path,a=r.queryId,l=ct(o,e),u=new Ks(rf(a),l,n);return hf(t,o,u)}else return[]}function vN(t,e,n,s){const i=ff(t,s);if(i){const r=df(i),o=r.path,a=r.queryId,l=ct(o,e),u=Ae.fromObject(n),f=new $i(rf(a),l,u);return hf(t,o,f)}else return[]}function Kc(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(p,_)=>{const E=ct(p,i);r=r||is(_,E),o=o||ls(_)});let a=t.syncPointTree_.get(i);a?(o=o||ls(a),r=r||is(a,ge())):(a=new ev,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=te.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,E)=>{const w=is(E,ge());w&&(r=r.updateImmediateChild(_,w))}));const u=iv(a,e);if(!u&&!e._queryParams.loadsAllData()){const p=cl(e);V(!t.queryToTagMap.has(p),"View does not exist, but we have a tag");const _=wN();t.queryToTagMap.set(p,_),t.tagToQueryMap.set(_,p)}const f=al(t.pendingWriteTree_,i);let h=cN(a,e,n,f,r,l);if(!u&&!o&&!s){const p=sv(a,e);h=h.concat(CN(t,e,p))}return h}function uf(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ct(o,e),u=is(a,l);if(u)return u});return Yg(i,e,r,n,!0)}function yN(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(u,f)=>{const h=ct(u,n);s=s||is(f,h)});let i=t.syncPointTree_.get(n);i?s=s||is(i,ge()):(i=new ev,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new as(s,!0,!1):null,a=al(t.pendingWriteTree_,e._path),l=tv(i,e,a,r?o.getNode():te.EMPTY_NODE,r);return nN(l)}function er(t,e){return av(e,t.syncPointTree_,null,al(t.pendingWriteTree_,ge()))}function av(t,e,n,s){if(he(t.path))return lv(t,e,n,s);{const i=e.get(ge());n==null&&i!=null&&(n=is(i,ge()));let r=[];const o=fe(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,f=qg(s,o);r=r.concat(av(a,l,u,f))}return i&&(r=r.concat(cf(i,t,s,n))),r}}function lv(t,e,n,s){const i=e.get(ge());n==null&&i!=null&&(n=is(i,ge()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=qg(s,o),f=t.operationForChild(o);f&&(r=r.concat(lv(f,a,l,u)))}),i&&(r=r.concat(cf(i,t,s,n))),r}function cv(t,e){const n=e.query,s=Qr(t,n);return{hashFn:()=>(tN(e)||te.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?gN(t,n._path,s):_N(t,n._path);{const r=_1(i,n);return xa(t,n,null,r)}}}}function Qr(t,e){const n=cl(e);return t.queryToTagMap.get(n)}function cl(t){return t._path.toString()+"$"+t._queryIdentifier}function ff(t,e){return t.tagToQueryMap.get(e)}function df(t){const e=t.indexOf("$");return V(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Ie(t.substr(0,e))}}function hf(t,e,n){const s=t.syncPointTree_.get(e);V(s,"Missing sync point for query tag that we're tracking");const i=al(t.pendingWriteTree_,e);return cf(s,n,i,null)}function EN(t){return t.fold((e,n,s)=>{if(n&&ls(n))return[ll(n)];{let i=[];return n&&(i=nv(n)),Xe(s,(r,o)=>{i=i.concat(o)}),i}})}function Rr(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(dN())(t._repo,t._path):t}function bN(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=cl(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function wN(){return hN++}function CN(t,e,n){const s=e._path,i=Qr(t,e),r=cv(t,n),o=t.listenProvider_.startListening(Rr(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)V(!ls(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,f,h)=>{if(!he(u)&&f&&ls(f))return[ll(f).query];{let p=[];return f&&(p=p.concat(nv(f).map(_=>_.query))),Xe(h,(_,E)=>{p=p.concat(E)}),p}});for(let u=0;u<l.length;++u){const f=l[u];t.listenProvider_.stopListening(Rr(f),Qr(t,f))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new pf(n)}node(){return this.node_}}class mf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Me(this.path_,e);return new mf(this.syncTree_,n)}node(){return uf(this.syncTree_,this.path_)}}const TN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Pp=function(t,e,n){if(!t||typeof t!="object")return t;if(V(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return SN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return IN(t[".sv"],e);V(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},SN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:V(!1,"Unexpected server value: "+t)}},IN=function(t,e,n){t.hasOwnProperty("increment")||V(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&V(!1,"Unexpected increment value: "+s);const i=e.node();if(V(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},uv=function(t,e,n,s){return _f(e,new mf(n,t),s)},fv=function(t,e,n){return _f(t,new pf(e),n)};function _f(t,e,n){const s=t.getPriority().val(),i=Pp(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Pp(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ge(a,He(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ge(i))),o.forEachChild(Fe,(a,l)=>{const u=_f(l,e.getImmediateChild(a),n);u!==l&&(r=r.updateImmediateChild(a,u))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function vf(t,e){let n=e instanceof Ie?e:new Ie(e),s=t,i=fe(n);for(;i!==null;){const r=Di(s.node.children,i)||{children:{},childCount:0};s=new gf(i,s,r),n=Oe(n),i=fe(n)}return s}function tr(t){return t.node.value}function dv(t,e){t.node.value=e,Gc(t)}function hv(t){return t.node.childCount>0}function AN(t){return tr(t)===void 0&&!hv(t)}function ul(t,e){Xe(t.node.children,(n,s)=>{e(new gf(n,t,s))})}function pv(t,e,n,s){n&&!s&&e(t),ul(t,i=>{pv(i,e,!0,s)}),n&&s&&e(t)}function ON(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ho(t){return new Ie(t.parent===null?t.name:ho(t.parent)+"/"+t.name)}function Gc(t){t.parent!==null&&NN(t.parent,t.name,t)}function NN(t,e,n){const s=AN(n),i=ln(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Gc(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Gc(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RN=/[\[\].#$\/\u0000-\u001F\u007F]/,PN=/[\[\].#$\u0000-\u001F\u007F]/,oc=10*1024*1024,yf=function(t){return typeof t=="string"&&t.length!==0&&!RN.test(t)},mv=function(t){return typeof t=="string"&&t.length!==0&&!PN.test(t)},xN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),mv(t)},kN=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!zu(t)||t&&typeof t=="object"&&ln(t,".sv")},_v=function(t,e,n,s){s&&e===void 0||fl(sl(t,"value"),e,n)},fl=function(t,e,n){const s=n instanceof Ie?new Q1(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Os(s));if(typeof e=="function")throw new Error(t+"contains a function "+Os(s)+" with contents = "+e.toString());if(zu(e))throw new Error(t+"contains "+e.toString()+" "+Os(s));if(typeof e=="string"&&e.length>oc/3&&il(e)>oc)throw new Error(t+"contains a string greater than "+oc+" utf8 bytes "+Os(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Xe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!yf(o)))throw new Error(t+" contains an invalid key ("+o+") "+Os(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);X1(s,o),fl(t,a,s),J1(s)}),i&&r)throw new Error(t+' contains ".value" child '+Os(s)+" in addition to actual children.")}},DN=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=zr(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!yf(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(q1);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&Lt(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},LN=function(t,e,n,s){const i=sl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Xe(e,(o,a)=>{const l=new Ie(o);if(fl(i,a,Me(n,l)),Qu(l)===".priority"&&!kN(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),DN(i,r)},gv=function(t,e,n,s){if(!mv(n))throw new Error(sl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},MN=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),gv(t,e,n)},Ef=function(t,e){if(fe(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},FN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!yf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!xN(n))throw new Error(sl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function dl(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Xu(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function vv(t,e,n){dl(t,n),yv(t,s=>Xu(s,e))}function Ft(t,e,n){dl(t,n),yv(t,s=>Lt(s,e)||Lt(e,s))}function yv(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(UN(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function UN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Ir&&Qe("event: "+n.toString()),Zi(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WN="repo_interrupt",VN=25;class HN{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $N,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ta(),this.transactionQueueTree_=new gf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function jN(t,e,n){if(t.stats_=Yu(t.repoInfo_),t.forceRestClient_||E1())t.server_=new Ca(t.repoInfo_,(s,i,r,o)=>{xp(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>kp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{je(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new wn(t.repoInfo_,e,(s,i,r,o)=>{xp(t,s,i,r,o)},s=>{kp(t,s)},s=>{BN(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=S1(t.repoInfo_,()=>new TO(t.stats_,t.server_)),t.infoData_=new yO,t.infoSyncTree_=new Rp({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=fo(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),bf(t,"connected",!1),t.serverSyncTree_=new Rp({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const u=o(a,l);Ft(t.eventQueue_,s._path,u)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Ev(t){const n=t.infoData_.getNode(new Ie(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function hl(t){return TN({timestamp:Ev(t)})}function xp(t,e,n,s,i){t.dataUpdateCount++;const r=new Ie(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=ga(n,u=>He(u));o=vN(t.serverSyncTree_,r,l,i)}else{const l=He(n);o=ov(t.serverSyncTree_,r,l,i)}else if(s){const l=ga(n,u=>He(u));o=mN(t.serverSyncTree_,r,l)}else{const l=He(n);o=fo(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Wi(t,r)),Ft(t.eventQueue_,a,o)}function kp(t,e){bf(t,"connected",e),e===!1&&YN(t)}function BN(t,e){Xe(e,(n,s)=>{bf(t,n,s)})}function bf(t,e,n){const s=new Ie("/.info/"+e),i=He(n);t.infoData_.updateSnapshot(s,i);const r=fo(t.infoSyncTree_,s,i);Ft(t.eventQueue_,s,r)}function wf(t){return t.nextWriteId_++}function zN(t,e,n){const s=yN(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=He(i).withIndex(e._queryParams.getIndex());Kc(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=fo(t.serverSyncTree_,e._path,r);else{const a=Qr(t.serverSyncTree_,e);o=ov(t.serverSyncTree_,e._path,r,a)}return Ft(t.eventQueue_,e._path,o),xa(t.serverSyncTree_,e,n,null,!0),r},i=>(po(t,"get for query "+je(e)+" failed: "+i),Promise.reject(new Error(i))))}function KN(t,e,n,s,i){po(t,"set",{path:e.toString(),value:n,priority:s});const r=hl(t),o=He(n,s),a=uf(t.serverSyncTree_,e),l=fv(o,a,r),u=wf(t),f=rv(t.serverSyncTree_,e,l,u,!0);dl(t.eventQueue_,f),t.server_.put(e.toString(),o.val(!0),(p,_)=>{const E=p==="ok";E||ut("set at "+e+" failed: "+p);const w=Qn(t.serverSyncTree_,u,!E);Ft(t.eventQueue_,e,w),Yc(t,i,p,_)});const h=Tf(t,e);Wi(t,h),Ft(t.eventQueue_,h,[])}function GN(t,e,n,s){po(t,"update",{path:e.toString(),value:n});let i=!0;const r=hl(t),o={};if(Xe(n,(a,l)=>{i=!1,o[a]=uv(Me(e,a),He(l),t.serverSyncTree_,r)}),i)Qe("update() called with empty data.  Don't do anything."),Yc(t,s,"ok",void 0);else{const a=wf(t),l=pN(t.serverSyncTree_,e,o,a);dl(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,f)=>{const h=u==="ok";h||ut("update at "+e+" failed: "+u);const p=Qn(t.serverSyncTree_,a,!h),_=p.length>0?Wi(t,e):e;Ft(t.eventQueue_,_,p),Yc(t,s,u,f)}),Xe(n,u=>{const f=Tf(t,Me(e,u));Wi(t,f)}),Ft(t.eventQueue_,e,[])}}function YN(t){po(t,"onDisconnectEvents");const e=hl(t),n=Ta();Wc(t.onDisconnect_,ge(),(i,r)=>{const o=uv(i,r,t.serverSyncTree_,e);Bg(n,i,o)});let s=[];Wc(n,ge(),(i,r)=>{s=s.concat(fo(t.serverSyncTree_,i,r));const o=Tf(t,i);Wi(t,o)}),t.onDisconnect_=Ta(),Ft(t.eventQueue_,ge(),s)}function qN(t,e,n){let s;fe(e._path)===".info"?s=Kc(t.infoSyncTree_,e,n):s=Kc(t.serverSyncTree_,e,n),vv(t.eventQueue_,e._path,s)}function QN(t,e,n){let s;fe(e._path)===".info"?s=xa(t.infoSyncTree_,e,n):s=xa(t.serverSyncTree_,e,n),vv(t.eventQueue_,e._path,s)}function XN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(WN)}function po(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Qe(n,...e)}function Yc(t,e,n,s){e&&Zi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function bv(t,e,n){return uf(t.serverSyncTree_,e,n)||te.EMPTY_NODE}function Cf(t,e=t.transactionQueueTree_){if(e||pl(t,e),tr(e)){const n=Cv(t,e);V(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&JN(t,ho(e),n)}else hv(e)&&ul(e,n=>{Cf(t,n)})}function JN(t,e,n){const s=n.map(u=>u.currentWriteId),i=bv(t,e,s);let r=i;const o=i.hash();for(let u=0;u<n.length;u++){const f=n[u];V(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const h=ct(e,f.path);r=r.updateChild(h,f.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,u=>{po(t,"transaction put response",{path:l.toString(),status:u});let f=[];if(u==="ok"){const h=[];for(let p=0;p<n.length;p++)n[p].status=2,f=f.concat(Qn(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&h.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();pl(t,vf(t.transactionQueueTree_,e)),Cf(t,t.transactionQueueTree_),Ft(t.eventQueue_,e,f);for(let p=0;p<h.length;p++)Zi(h[p])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{ut("transaction at "+l.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}Wi(t,e)}},o)}function Wi(t,e){const n=wv(t,e),s=ho(n),i=Cv(t,n);return ZN(t,i,s),s}function ZN(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=ct(n,l.path);let f=!1,h;if(V(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)f=!0,h=l.abortReason,i=i.concat(Qn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=VN)f=!0,h="maxretry",i=i.concat(Qn(t.serverSyncTree_,l.currentWriteId,!0));else{const p=bv(t,l.path,o);l.currentInputSnapshot=p;const _=e[a].update(p.val());if(_!==void 0){fl("transaction failed: Data returned ",_,l.path);let E=He(_);typeof _=="object"&&_!=null&&ln(_,".priority")||(E=E.updatePriority(p.getPriority()));const A=l.currentWriteId,C=hl(t),T=fv(E,p,C);l.currentOutputSnapshotRaw=E,l.currentOutputSnapshotResolved=T,l.currentWriteId=wf(t),o.splice(o.indexOf(A),1),i=i.concat(rv(t.serverSyncTree_,l.path,T,l.currentWriteId,l.applyLocally)),i=i.concat(Qn(t.serverSyncTree_,A,!0))}else f=!0,h="nodata",i=i.concat(Qn(t.serverSyncTree_,l.currentWriteId,!0))}Ft(t.eventQueue_,n,i),i=[],f&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}pl(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Zi(s[a]);Cf(t,t.transactionQueueTree_)}function wv(t,e){let n,s=t.transactionQueueTree_;for(n=fe(e);n!==null&&tr(s)===void 0;)s=vf(s,n),e=Oe(e),n=fe(e);return s}function Cv(t,e){const n=[];return Tv(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Tv(t,e,n){const s=tr(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);ul(e,i=>{Tv(t,i,n)})}function pl(t,e){const n=tr(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,dv(e,n.length>0?n:void 0)}ul(e,s=>{pl(t,s)})}function Tf(t,e){const n=ho(wv(t,e)),s=vf(t.transactionQueueTree_,e);return ON(s,i=>{ac(t,i)}),ac(t,s),pv(s,i=>{ac(t,i)}),n}function ac(t,e){const n=tr(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(V(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(V(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Qn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?dv(e,void 0):n.length=r+1,Ft(t.eventQueue_,ho(e),i);for(let o=0;o<s.length;o++)Zi(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eR(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function tR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ut(`Invalid query segment '${n}' in query '${t}'`)}return e}const Dp=function(t,e){const n=nR(t),s=n.namespace;n.domain==="firebase.com"&&Tn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Tn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||f1();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ag(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Ie(n.pathString)}},nR=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let f=t.indexOf("/");f===-1&&(f=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(f,h)),f<h&&(i=eR(t.substring(f,h)));const p=tR(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const E=e.indexOf(".");s=e.substring(0,E).toLowerCase(),n=e.substring(E+1),r=s}"ns"in p&&(r=p.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",sR=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Lp.charAt(n%64),n=Math.floor(n/64);V(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Lp.charAt(e[i]);return V(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+je(this.snapshot.exportVal())}}class rR{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return V(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return he(this._path)?null:Qu(this._path)}get ref(){return new Pn(this._repo,this._path)}get _queryIdentifier(){const e=Ep(this._queryParams),n=Ku(e);return n==="{}"?"default":n}get _queryObject(){return Ep(this._queryParams)}isEqual(e){if(e=Ot(e),!(e instanceof Sf))return!1;const n=this._repo===e._repo,s=Xu(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Y1(this._path)}}class Pn extends Sf{constructor(e,n){super(e,n,new tf,!1)}get parent(){const e=Mg(this._path);return e===null?null:new Pn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Xr{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Ie(e),s=Jr(this.ref,e);return new Xr(this._node.getChild(n),s,Fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Xr(i,Jr(this.ref,s),Fe)))}hasChild(e){const n=new Ie(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ps(t,e){return t=Ot(t),t._checkNotDeleted("ref"),e!==void 0?Jr(t._root,e):t._root}function Jr(t,e){return t=Ot(t),fe(t._path)===null?MN("child","path",e):gv("child","path",e),new Pn(t._repo,Me(t._path,e))}function oR(t,e){t=Ot(t),Ef("push",t._path),_v("push",e,t._path,!0);const n=Ev(t._repo),s=sR(n),i=Jr(t,s),r=Jr(t,s);let o;return e!=null?o=If(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function aR(t){return Ef("remove",t._path),If(t,null)}function If(t,e){t=Ot(t),Ef("set",t._path),_v("set",e,t._path,!1);const n=new oo;return KN(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function lR(t,e){LN("update",e,t._path);const n=new oo;return GN(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function cR(t){t=Ot(t);const e=new Sv(()=>{}),n=new ml(e);return zN(t._repo,t,n).then(s=>new Xr(s,new Pn(t._repo,t._path),t._queryParams.getIndex()))}class ml{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new iR("value",this,new Xr(e.snapshotNode,new Pn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new rR(this,e,n):null}matches(e){return e instanceof ml?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function uR(t,e,n,s,i){const r=new Sv(n,void 0),o=new ml(r);return qN(t._repo,t,o),()=>QN(t._repo,t,o)}function Iv(t,e,n,s){return uR(t,"value",e)}oN(Pn);fN(Pn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR="FIREBASE_DATABASE_EMULATOR_HOST",qc={};let dR=!1;function hR(t,e,n,s){t.repoInfo_=new Ag(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function pR(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Tn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Qe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Dp(r,i),a=o.repoInfo,l;typeof process<"u"&&np&&(l=np[fR]),l?(r=`http://${l}?ns=${a.namespace}`,o=Dp(r,i),a=o.repoInfo):o.repoInfo.secure;const u=new w1(t.name,t.options,e);FN("Invalid Firebase Database URL",o),he(o.path)||Tn("Database URL must point to the root of a Firebase Database (not including a child path).");const f=_R(a,t,u,new b1(t.name,n));return new gR(f,t)}function mR(t,e){const n=qc[e];(!n||n[t.key]!==t)&&Tn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),XN(t),delete n[t.key]}function _R(t,e,n,s){let i=qc[e.name];i||(i={},qc[e.name]=i);let r=i[t.toURLString()];return r&&Tn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new HN(t,dR,n,s),i[t.toURLString()]=r,r}class gR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(jN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Pn(this._repo,ge())),this._rootInternal}_delete(){return this._rootInternal!==null&&(mR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Tn("Cannot call "+e+" on a deleted database.")}}function vR(t=ug(),e){const n=Bu(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=FI("database");s&&yR(n,...s)}return n}function yR(t,e,n,s={}){t=Ot(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Tn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Tn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Zo(Zo.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:$I(s.mockUserToken,t.app.options.projectId);r=new Zo(o)}hR(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ER(t){r1(Ji),Li(new Bs("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return pR(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),ns(sp,ip,t),ns(sp,ip,"esm2017")}wn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};wn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ER();var bR="firebase",wR="10.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ns(bR,wR,"app");function Af(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Av(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const CR=Av,Ov=new ao("auth","Firebase",Av());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ka=new Hu("@firebase/auth");function TR(t,...e){ka.logLevel<=Te.WARN&&ka.warn(`Auth (${Ji}): ${t}`,...e)}function ea(t,...e){ka.logLevel<=Te.ERROR&&ka.error(`Auth (${Ji}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(t,...e){throw Of(t,...e)}function tn(t,...e){return Of(t,...e)}function Nv(t,e,n){const s=Object.assign(Object.assign({},CR()),{[e]:n});return new ao("auth","Firebase",s).create(e,{appName:t.name})}function $s(t){return Nv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Of(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Ov.create(t,...e)}function ie(t,e,...n){if(!t)throw Of(e,...n)}function gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ea(e),new Error(e)}function In(t,e){t||gn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function SR(){return Mp()==="http:"||Mp()==="https:"}function Mp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(SR()||UI()||"connection"in navigator)?navigator.onLine:!0}function AR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=Vu()||ig()}get(){return IR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(t,e){In(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR=new mo(3e4,6e4);function Rf(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function nr(t,e,n,s,i={}){return Pv(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Xi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Rv.fetch()(xv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Pv(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},OR),e);try{const i=new PR(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw jo(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw jo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw jo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw jo(t,"user-disabled",o);const f=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Nv(t,f,u);Sn(t,f)}}catch(i){if(i instanceof ms)throw i;Sn(t,"network-request-failed",{message:String(i)})}}async function RR(t,e,n,s,i={}){const r=await nr(t,e,n,s,i);return"mfaPendingCredential"in r&&Sn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function xv(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Nf(t.config,i):`${t.config.apiScheme}://${i}`}class PR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(tn(this.auth,"network-request-failed")),NR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function jo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=tn(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xR(t,e){return nr(t,"POST","/v1/accounts:delete",e)}async function kv(t,e){return nr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kR(t,e=!1){const n=Ot(t),s=await n.getIdToken(e),i=Pf(s);ie(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Pr(lc(i.auth_time)),issuedAtTime:Pr(lc(i.iat)),expirationTime:Pr(lc(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function lc(t){return Number(t)*1e3}function Pf(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ea("JWT malformed, contained fewer than 3 sections"),null;try{const i=_a(n);return i?JSON.parse(i):(ea("Failed to decode base64 JWT payload"),null)}catch(i){return ea("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Fp(t){const e=Pf(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ms&&DR(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function DR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pr(this.lastLoginAt),this.creationTime=Pr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Da(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Zr(t,kv(n,{idToken:s}));ie(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Dv(r.providerUserInfo):[],a=FR(t.providerData,o),l=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),f=l?u:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Xc(r.createdAt,r.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function MR(t){const e=Ot(t);await Da(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function FR(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Dv(t){return t.map(e=>{var{providerId:n}=e,s=Af(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $R(t,e){const n=await Pv(t,{},async()=>{const s=Xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=xv(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Rv.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function UR(t,e){return nr(t,"POST","/v2/accounts:revokeToken",Rf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const n=Fp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await $R(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Si;return s&&(ie(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(ie(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(ie(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Si,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vn{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Af(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new LR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Xc(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Zr(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kR(this,e)}reload(){return MR(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Da(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qn(this.auth.app))return Promise.reject($s(this.auth));const e=await this.getIdToken();return await Zr(this,xR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,u,f;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,C=(u=n.createdAt)!==null&&u!==void 0?u:void 0,T=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:x,emailVerified:M,isAnonymous:L,providerData:O,stsTokenManager:$}=n;ie(x&&$,e,"internal-error");const j=Si.fromJSON(this.name,$);ie(typeof x=="string",e,"internal-error"),$n(h,e.name),$n(p,e.name),ie(typeof M=="boolean",e,"internal-error"),ie(typeof L=="boolean",e,"internal-error"),$n(_,e.name),$n(E,e.name),$n(w,e.name),$n(A,e.name),$n(C,e.name),$n(T,e.name);const Y=new vn({uid:x,auth:e,email:p,emailVerified:M,displayName:h,isAnonymous:L,photoURL:E,phoneNumber:_,tenantId:w,stsTokenManager:j,createdAt:C,lastLoginAt:T});return O&&Array.isArray(O)&&(Y.providerData=O.map(ee=>Object.assign({},ee))),A&&(Y._redirectEventId=A),Y}static async _fromIdTokenResponse(e,n,s=!1){const i=new Si;i.updateFromServerResponse(n);const r=new vn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Da(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];ie(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Dv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new Si;a.updateFromIdToken(s);const l=new vn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Xc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=new Map;function yn(t){In(t instanceof Function,"Expected a class definition");let e=$p.get(t);return e?(In(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$p.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Lv.type="NONE";const Up=Lv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(t,e,n){return`firebase:${t}:${e}:${n}`}class Ii{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=ta(this.userKey,i.apiKey,r),this.fullPersistenceKey=ta("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ii(yn(Up),e,s);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||yn(Up);const o=ta(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const f=await u._get(o);if(f){const h=vn._fromJSON(e,f);u!==r&&(a=h),r=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Ii(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new Ii(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Uv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vv(e))return"Blackberry";if(Hv(e))return"Webos";if(Fv(e))return"Safari";if((e.includes("chrome/")||$v(e))&&!e.includes("edge/"))return"Chrome";if(Wv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Mv(t=ht()){return/firefox\//i.test(t)}function Fv(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $v(t=ht()){return/crios\//i.test(t)}function Uv(t=ht()){return/iemobile/i.test(t)}function Wv(t=ht()){return/android/i.test(t)}function Vv(t=ht()){return/blackberry/i.test(t)}function Hv(t=ht()){return/webos/i.test(t)}function xf(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function WR(t=ht()){var e;return xf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function VR(){return WI()&&document.documentMode===10}function jv(t=ht()){return xf(t)||Wv(t)||Hv(t)||Vv(t)||/windows phone/i.test(t)||Uv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(t,e=[]){let n;switch(t){case"Browser":n=Wp(ht());break;case"Worker":n=`${Wp(ht())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ji}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jR(t,e={}){return nr(t,"GET","/v2/passwordPolicy",Rf(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR=6;class zR{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:BR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vp(this),this.idTokenSubscription=new Vp(this),this.beforeStateQueue=new HR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ov,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Ii.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await kv(this,{idToken:e}),s=await vn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(qn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Da(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=AR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qn(this.app))return Promise.reject($s(this));const n=e?Ot(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qn(this.app)?Promise.reject($s(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qn(this.app)?Promise.reject($s(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jR(this),n=new zR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ao("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await UR(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await Ii.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Bv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&TR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function kf(t){return Ot(t)}class Vp{constructor(e){this.auth=e,this.observer=null,this.addObserver=qI(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Df={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function GR(t){Df=t}function YR(t){return Df.loadJS(t)}function qR(){return Df.gapiScript}function QR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XR(t,e){const n=Bu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(va(r,e??{}))return i;Sn(i,"already-initialized")}return n.initialize({options:e})}function JR(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function ZR(t,e,n){const s=kf(t);ie(s._canInitEmulator,s,"emulator-config-failed"),ie(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=zv(e),{host:o,port:a}=eP(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),tP()}function zv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function eP(t){const e=zv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Hp(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Hp(o)}}}function Hp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function tP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,n){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ai(t,e){return RR(t,"POST","/v1/accounts:signInWithIdp",Rf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP="http://localhost";class Ys extends Kv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ys(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Sn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Af(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Ys(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ai(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ai(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ai(e,n)}buildRequest(){const e={requestUri:nP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o extends Gv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends _o{constructor(){super("facebook.com")}static credential(e){return Ys._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";zn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends _o{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ys._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Kn.credential(n,s)}catch{return null}}}Kn.GOOGLE_SIGN_IN_METHOD="google.com";Kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends _o{constructor(){super("github.com")}static credential(e){return Ys._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.GITHUB_SIGN_IN_METHOD="github.com";Gn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends _o{constructor(){super("twitter.com")}static credential(e,n){return Ys._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Yn.credential(n,s)}catch{return null}}}Yn.TWITTER_SIGN_IN_METHOD="twitter.com";Yn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await vn._fromIdTokenResponse(e,s,i),o=jp(s);return new Vi({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=jp(s);return new Vi({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function jp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La extends ms{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,La.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new La(e,n,s,i)}}function Yv(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?La._fromErrorAndOperation(t,r,e,s):r})}async function sP(t,e,n=!1){const s=await Zr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Vi._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iP(t,e,n=!1){const{auth:s}=t;if(qn(s.app))return Promise.reject($s(s));const i="reauthenticate";try{const r=await Zr(t,Yv(s,i,e,t),n);ie(r.idToken,s,"internal-error");const o=Pf(r.idToken);ie(o,s,"internal-error");const{sub:a}=o;return ie(t.uid===a,s,"user-mismatch"),Vi._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Sn(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rP(t,e,n=!1){if(qn(t.app))return Promise.reject($s(t));const s="signIn",i=await Yv(t,s,e),r=await Vi._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function oP(t,e,n,s){return Ot(t).onIdTokenChanged(e,n,s)}function aP(t,e,n){return Ot(t).beforeAuthStateChanged(e,n)}const Ma="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ma,"1"),this.storage.removeItem(Ma),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lP=1e3,cP=10;class Qv extends qv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=jv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);VR()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,cP):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},lP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qv.type="LOCAL";const uP=Qv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv extends qv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Xv.type="SESSION";const Jv=Xv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new _l(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,r)),l=await fP(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_l.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const u=Lf("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const p=h;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(f),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(p.data.response);break;default:clearTimeout(f),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(){return window}function hP(t){nn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zv(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function pP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function _P(){return Zv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey="firebaseLocalStorageDb",gP=1,Fa="firebaseLocalStorage",ty="fbase_key";class go{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function gl(t,e){return t.transaction([Fa],e?"readwrite":"readonly").objectStore(Fa)}function vP(){const t=indexedDB.deleteDatabase(ey);return new go(t).toPromise()}function Jc(){const t=indexedDB.open(ey,gP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Fa,{keyPath:ty})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Fa)?e(s):(s.close(),await vP(),e(await Jc()))})})}async function Bp(t,e,n){const s=gl(t,!0).put({[ty]:e,value:n});return new go(s).toPromise()}async function yP(t,e){const n=gl(t,!1).get(e),s=await new go(n).toPromise();return s===void 0?null:s.value}function zp(t,e){const n=gl(t,!0).delete(e);return new go(n).toPromise()}const EP=800,bP=3;class ny{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>bP)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_l._getInstance(_P()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await pP(),!this.activeServiceWorker)return;this.sender=new dP(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jc();return await Bp(e,Ma,"1"),await zp(e,Ma),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Bp(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>yP(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>zp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=gl(i,!1).getAll();return new go(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),EP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ny.type="LOCAL";const wP=ny;new mo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CP(t,e){return e?yn(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf extends Kv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ai(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ai(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ai(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function TP(t){return rP(t.auth,new Mf(t),t.bypassAuthState)}function SP(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),iP(n,new Mf(t),t.bypassAuthState)}async function IP(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),sP(n,new Mf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TP;case"linkViaPopup":case"linkViaRedirect":return IP;case"reauthViaPopup":case"reauthViaRedirect":return SP;default:Sn(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP=new mo(2e3,1e4);class mi extends sy{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,mi.currentPopupAction&&mi.currentPopupAction.cancel(),mi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=Lf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,AP.get())};e()}}mi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP="pendingRedirect",na=new Map;class NP extends sy{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=na.get(this.auth._key());if(!e){try{const s=await RP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}na.set(this.auth._key(),e)}return this.bypassAuthState||na.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RP(t,e){const n=kP(e),s=xP(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function PP(t,e){na.set(t._key(),e)}function xP(t){return yn(t._redirectPersistence)}function kP(t){return ta(OP,t.config.apiKey,t.name)}async function DP(t,e,n=!1){if(qn(t.app))return Promise.reject($s(t));const s=kf(t),i=CP(s,e),o=await new NP(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LP=10*60*1e3;class MP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!FP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!iy(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(tn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kp(e))}saveEventToCache(e){this.cachedEventUids.add(Kp(e)),this.lastProcessedEventTime=Date.now()}}function Kp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function iy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function FP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $P(t,e={}){return nr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,WP=/^https?/;async function VP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await $P(t);for(const n of e)try{if(HP(n))return}catch{}Sn(t,"unauthorized-domain")}function HP(t){const e=Qc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!WP.test(n))return!1;if(UP.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP=new mo(3e4,6e4);function Gp(){const t=nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function BP(t){return new Promise((e,n)=>{var s,i,r;function o(){Gp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gp(),n(tn(t,"network-request-failed"))},timeout:jP.get()})}if(!((i=(s=nn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=nn().gapi)===null||r===void 0)&&r.load)o();else{const a=QR("iframefcb");return nn()[a]=()=>{gapi.load?o():n(tn(t,"network-request-failed"))},YR(`${qR()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw sa=null,e})}let sa=null;function zP(t){return sa=sa||BP(t),sa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KP=new mo(5e3,15e3),GP="__/auth/iframe",YP="emulator/auth/iframe",qP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XP(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Nf(e,YP):`https://${t.config.authDomain}/${GP}`,s={apiKey:e.apiKey,appName:t.name,v:Ji},i=QP.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Xi(s).slice(1)}`}async function JP(t){const e=await zP(t),n=nn().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:XP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qP,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=tn(t,"network-request-failed"),a=nn().setTimeout(()=>{r(o)},KP.get());function l(){nn().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ex=500,tx=600,nx="_blank",sx="http://localhost";class Yp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ix(t,e,n,s=ex,i=tx){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ZP),{width:s.toString(),height:i.toString(),top:r,left:o}),u=ht().toLowerCase();n&&(a=$v(u)?nx:n),Mv(u)&&(e=e||sx,l.scrollbars="yes");const f=Object.entries(l).reduce((p,[_,E])=>`${p}${_}=${E},`,"");if(WR(u)&&a!=="_self")return rx(e||"",a),new Yp(null);const h=window.open(e||"",a,f);ie(h,t,"popup-blocked");try{h.focus()}catch{}return new Yp(h)}function rx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ox="__/auth/handler",ax="emulator/auth/handler",lx=encodeURIComponent("fac");async function qp(t,e,n,s,i,r){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ji,eventId:i};if(e instanceof Gv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Pc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,h]of Object.entries({}))o[f]=h}if(e instanceof _o){const f=e.getScopes().filter(h=>h!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await t._getAppCheckToken(),u=l?`#${lx}=${encodeURIComponent(l)}`:"";return`${cx(t)}?${Xi(a).slice(1)}${u}`}function cx({config:t}){return t.emulator?Nf(t,ax):`https://${t.authDomain}/${ox}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc="webStorageSupport";class ux{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jv,this._completeRedirectFn=DP,this._overrideRedirectResult=PP}async _openPopup(e,n,s,i){var r;In((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await qp(e,n,s,Qc(),i);return ix(e,o,Lf())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await qp(e,n,s,Qc(),i);return hP(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(In(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await JP(e),s=new MP(e);return n.register("authEvent",i=>(ie(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(cc,{type:cc},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[cc];o!==void 0&&n(!!o),Sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return jv()||Fv()||xf()}}const fx=ux;var Qp="@firebase/auth",Xp="1.7.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function px(t){Li(new Bs("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;ie(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bv(t)},u=new KR(s,i,r,l);return JR(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Li(new Bs("auth-internal",e=>{const n=kf(e.getProvider("auth").getImmediate());return(s=>new dx(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ns(Qp,Xp,hx(t)),ns(Qp,Xp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx=5*60,_x=sg("authIdTokenMaxAge")||mx;let Jp=null;const gx=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>_x)return;const i=n==null?void 0:n.token;Jp!==i&&(Jp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function vx(t=ug()){const e=Bu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=XR(t,{popupRedirectResolver:fx,persistence:[wP,uP,Jv]}),s=sg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=gx(r.toString());aP(n,o,()=>o(n.currentUser)),oP(n,a=>o(a))}}const i=tg("auth");return i&&ZR(n,`http://${i}`),n}function yx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}GR({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=tn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",yx().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});px("Browser");const Ex={apiKey:"AIzaSyBzTpxi4LfDfgrbLNcB0UfwCYHhx0s5-rE",authDomain:"memorize-6ae41.firebaseapp.com",databaseURL:"https://memorize-6ae41-default-rtdb.firebaseio.com",projectId:"memorize-6ae41",storageBucket:"memorize-6ae41.appspot.com",messagingSenderId:"315582420206",appId:"1:315582420206:web:cc66dacd4ffef86e214fff",measurementId:"G-PTHK6LB2FC"},ry=cg(Ex),xs=vR(ry);vx(ry);function oy(){return{setData:async r=>{{const o=Ps(xs);try{await If(o,r),console.log("Data is set successfully!")}catch(a){console.error("Error setting data: ",a),alert("取得資料失敗，權限不足！")}}},getData:async()=>{{const r=Ps(xs);try{const o=await cR(r);o.exists()?console.log("Data:",o.val()):console.log("No data available")}catch(o){console.error("Error getting data: ",o),alert("取得資料失敗，權限不足！")}}},updateData:async(r,o="")=>{{const a=Ps(xs,o);try{await lR(a,r),console.log("Data is updated successfully!")}catch(l){console.error("Error updating data: ",l),alert("修改資料失敗，權限不足！")}}},deleteData:async r=>{{const o=Ps(xs,r);try{await aR(o),console.log("Data is deleted successfully!")}catch(a){console.error("Error deleting data: ",a),alert("刪除資料失敗，權限不足！")}}},addData:async(r,o)=>{try{await oR(Ps(xs,o),r),console.log("資料已成功新增到Firebase")}catch(a){console.error("Error adding data: ",a),alert("新增資料失敗，權限不足！")}}}}const ay=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},cn=t=>(xC("data-v-2d8866d2"),t=t(),kC(),t),bx={id:"todoListPage",class:"bg-warning"},wx={class:"d-flex flex-column flex-sm-row"},Cx=cn(()=>U("h2",{class:"text-center"},"WordBox",-1)),Tx={class:"d-flex justify-content-end"},Sx={class:"me-3"},Ix={class:"container"},Ax={class:"text-end"},Ox=cn(()=>U("button",{class:"btn btn-primary me-2"},"Quiz Mode",-1)),Nx={key:0,class:"row align-items-end mt-3 pt-3 rounded-3",style:{border:"2px solid rgba(0, 0, 0, 0.2)"}},Rx={class:"col-md-3 mb-3"},Px=cn(()=>U("label",{for:"englishWord",class:"form-label"},"英文",-1)),xx={class:"col-md-3 mb-3"},kx=cn(()=>U("label",{for:"chineseWord",class:"form-label"},"中文",-1)),Dx={class:"col-md-3 mb-3"},Lx=cn(()=>U("label",{for:"partOfSpeech",class:"form-label"},"詞性",-1)),Mx=L_('<option disabled value="" data-v-2d8866d2>請選擇</option><option value="n" data-v-2d8866d2>名詞</option><option value="v" data-v-2d8866d2>動詞</option><option value="adj" data-v-2d8866d2>形容詞</option><option value="adv" data-v-2d8866d2>副詞</option><option value="prep" data-v-2d8866d2>介係詞</option><option value="phrase" data-v-2d8866d2>片語</option><option value="others" data-v-2d8866d2>其他</option>',8),Fx=[Mx],$x={key:1,class:"row align-items-end mt-3 pt-3 rounded-3",style:{border:"2px solid rgba(0, 0, 0, 0.2)"}},Ux={class:"col-md-3 mb-3"},Wx=cn(()=>U("label",{for:"englishWord",class:"form-label"},"英文",-1)),Vx={class:"col-md-3 mb-3"},Hx=cn(()=>U("label",{for:"chineseWord",class:"form-label"},"中文",-1)),jx={class:"col-md-3 mb-3"},Bx=cn(()=>U("label",{for:"partOfSpeech",class:"form-label"},"詞性",-1)),zx=L_('<option disabled value="" data-v-2d8866d2>請選擇</option><option value="n" data-v-2d8866d2>名詞</option><option value="v" data-v-2d8866d2>動詞</option><option value="adj" data-v-2d8866d2>形容詞</option><option value="adv" data-v-2d8866d2>副詞</option><option value="prep" data-v-2d8866d2>介係詞</option><option value="phrase" data-v-2d8866d2>片語</option><option value="others" data-v-2d8866d2>其他</option>',8),Kx=[zx],Gx={class:"container vhContainer"},Yx={class:""},qx={class:"mt-4"},Qx={class:"d-flex align-items-center mb-3"},Xx=cn(()=>U("h4",{class:"me-3 my-0"},"單字列表",-1)),Jx={class:"table table-hover table-striped rounded",style:{overflow:"auto !important"}},Zx=cn(()=>U("thead",{class:"position-sticky top-0 start-0",style:{"z-index":"1"}},[U("tr",null,[U("th",{scope:"col"},"序號"),U("th",{scope:"col"},"英文"),U("th",{scope:"col"},"中文"),U("th",{scope:"col"},"詞性"),U("th",{scope:"col"},"錯誤次數"),U("th",{scope:"col"},"操作")])],-1)),ek={class:"d-flex align-items-center"},tk=["onClick"],nk=["onClick"],sk={__name:"WordsList",setup(t){const{updateData:e}=oy(),s=Ce((L=>L?L.charAt(0).toUpperCase()+L.slice(1).toLowerCase():"")(localStorage.getItem("memorize_name"))),i=Ce(null),r=Ce([]),o=Ce({enWord:"",cnWord:"",partOfSpeech:""}),a=Ce({id:null,en:"",cn:"",pos:""}),l=()=>{o.value.enWord&&o.value.cnWord&&o.value.partOfSpeech?(r.value.push({id:`${o.value.enWord}_${new Date().getTime()}`,en:o.value.enWord,cn:o.value.cnWord,pos:o.value.partOfSpeech,errCnt:0}),o.value.enWord="",o.value.cnWord="",o.value.partOfSpeech="",p()):alert("請填寫所有欄位")},u=L=>{a.value.id=L.id,a.value.en=L.en,a.value.cn=L.cn,a.value.pos=L.pos,i.value="edit"},f=()=>{a.value.en&&a.value.cn&&a.value.pos?(r.value.forEach(L=>{L.id===a.value.id&&(L.en=a.value.en,L.cn=a.value.cn,L.pos=a.value.pos)}),a.value.id=null,a.value.en="",a.value.cn="",a.value.pos="",i.value="add",p()):alert("請填寫所有欄位")},h=L=>{let O="";if(r.value.forEach(j=>{j.id===L&&(O=`${j.en} / ${j.cn}`)}),confirm(`是否確定要刪除 ${O} ？`)){const j=r.value.findIndex(Y=>Y.id===L);j!==-1&&(r.value.splice(j,1),p())}},p=async()=>{const O={[localStorage.getItem("memorize_name")]:{wordList:r.value}};try{await e(O,"/"),console.log("資料已成功設置！")}catch($){console.error("設定資料時發生錯誤：",$),alert("設定資料失敗！")}},_=()=>{const L=localStorage.getItem("memorize_name");Iv(Ps(xs),O=>{var j;const $=O.val();console.log($),r.value=((j=$==null?void 0:$[L])==null?void 0:j.wordList)||[]})},E=Ce("default"),w=Ve(()=>E.value==="alphabet"?[...r.value].sort((L,O)=>L.en.localeCompare(O.en)):E.value==="errorCount"?[...r.value].sort((L,O)=>O.errCnt-L.errCnt):r.value),A=L=>{E.value=L},C=()=>{localStorage.clear(),eo.push("/login")};Ri(()=>{var Y,ee;const L=(Y=localStorage.getItem("memorize_name"))==null?void 0:Y.toLowerCase(),O=(ee=localStorage.getItem("memorize_pw"))==null?void 0:ee.toLowerCase();(L==="alex"||L==="yiyu")&&O==="520520"?_():eo.push("/login")});const T=Ce(window.innerWidth<992),x=Ce("100vh"),M=()=>{T.value=window.innerWidth<992,x.value=`${window.innerHeight}px`};return Ri(()=>{window.addEventListener("resize",M),M()}),io(()=>{window.removeEventListener("resize",M)}),(L,O)=>{const $=m_("font-awesome-icon");return xe(),Ke("div",bx,[U("nav",wx,[Cx,U("ul",Tx,[U("li",Sx,[Se(jt(pa),{to:"/"},{default:ca(()=>[U("span",null,kt(s.value)+" 的英文單字列表",1)]),_:1})]),U("li",{onClick:C,style:{cursor:"pointer"}},[Se($,{icon:"fa-solid fa-right-from-bracket"})])])]),U("div",Ix,[U("div",Ax,[Se(jt(pa),{to:"/quizmode"},{default:ca(()=>[Ox]),_:1}),U("button",{onClick:O[0]||(O[0]=j=>i.value="add"),class:"btn btn-primary"},"新增")]),i.value==="add"?(xe(),Ke("div",Nx,[U("div",{class:"text-end cursor-pointer",onClick:O[1]||(O[1]=j=>i.value=null)},[Se($,{icon:"fa-solid fa-xmark"})]),U("div",Rx,[Px,pn(U("input",{type:"text",id:"englishWord",class:"form-control",placeholder:"英文","onUpdate:modelValue":O[2]||(O[2]=j=>o.value.enWord=j)},null,512),[[Ds,o.value.enWord]])]),U("div",xx,[kx,pn(U("input",{type:"text",id:"chineseWord",class:"form-control",placeholder:"中文","onUpdate:modelValue":O[3]||(O[3]=j=>o.value.cnWord=j)},null,512),[[Ds,o.value.cnWord]])]),U("div",Dx,[Lx,pn(U("select",{id:"partOfSpeech","onUpdate:modelValue":O[4]||(O[4]=j=>o.value.partOfSpeech=j),class:"form-select"},Fx,512),[[Sh,o.value.partOfSpeech]])]),U("div",{class:"col-md-3 mb-3"},[U("button",{onClick:l,class:"btn btn-primary w-100"},"新增")])])):i.value==="edit"?(xe(),Ke("div",$x,[U("div",{class:"text-end cursor-pointer",onClick:O[5]||(O[5]=j=>i.value=null)},[Se($,{icon:"fa-solid fa-xmark"})]),U("div",Ux,[Wx,pn(U("input",{type:"text",id:"englishWord",class:"form-control",placeholder:"英文","onUpdate:modelValue":O[6]||(O[6]=j=>a.value.en=j)},null,512),[[Ds,a.value.en]])]),U("div",Vx,[Hx,pn(U("input",{type:"text",id:"chineseWord",class:"form-control",placeholder:"中文","onUpdate:modelValue":O[7]||(O[7]=j=>a.value.cn=j)},null,512),[[Ds,a.value.cn]])]),U("div",jx,[Bx,pn(U("select",{id:"partOfSpeech","onUpdate:modelValue":O[8]||(O[8]=j=>a.value.pos=j),class:"form-select"},Kx,512),[[Sh,a.value.pos]])]),U("div",{class:"col-md-3 mb-3"},[U("button",{onClick:f,class:"btn btn-primary w-100"},"修改")])])):Vn("",!0)]),U("div",Gx,[U("div",Yx,[U("div",qx,[U("div",Qx,[Xx,U("button",{onClick:O[9]||(O[9]=j=>A("default")),class:"btn btn-outline-secondary me-2"}," 預設排序 "),U("button",{onClick:O[10]||(O[10]=j=>A("alphabet")),class:"btn btn-outline-secondary me-2"}," 字母排序 "),U("button",{onClick:O[11]||(O[11]=j=>A("errorCount")),class:"btn btn-outline-secondary me-2"}," 錯誤次數排序 ")]),U("div",null,[U("div",{class:"position-relative",style:qi([{overflow:"auto"},[i.value===null?"height: calc(100vh - 300px)":"height: calc(100vh - 600px)"]])},[U("table",Jx,[Zx,U("tbody",null,[(xe(!0),Ke(Qt,null,GC(w.value,(j,Y)=>(xe(),Ke("tr",{key:Y},[U("td",null,kt(Y+=1),1),U("td",null,kt(j.en),1),U("td",null,kt(j.cn),1),U("td",null,kt(j.pos),1),U("td",null,kt(j.errCnt),1),U("td",null,[U("div",ek,[U("div",{onClick:ee=>u(j),class:"text-primary me-2 cursor-pointer"},[Se($,{icon:"fa-solid fa-pen-to-square"})],8,tk),U("div",{onClick:ee=>h(j.id),class:"text-danger fs-5 cursor-pointer"},[Se($,{icon:"fa-solid fa-xmark"})],8,nk)])])]))),128))])])],4)])])])])])}}},ik=ay(sk,[["__scopeId","data-v-2d8866d2"]]),rk={class:"position-relative d-flex align-items-center justify-content-center vh-50 w-100 bg-up"},ok={key:0,class:"text-center",style:{"font-size":"36px"}},ak={key:1,class:"text-center",style:{"font-size":"36px"}},lk={class:"position-absolute top-0 start-0"},ck={class:"position-relative d-flex align-items-center justify-content-center vh-50 w-100 bg-dwn"},uk={key:0,class:"text-center",style:{"font-size":"36px"}},fk={key:1,class:"text-center",style:{"font-size":"36px"}},dk={class:"w-100",style:{overflow:"auto","word-break":"break-all"}},hk={class:"position-absolute top-0 start-0"},pk={class:"text-center mb-5"},mk={class:"mt-4",style:{"font-size":"20px"}},_k={key:0,class:"d-flex justify-content-center"},gk={class:"btn btn-primary btn-lg"},vk={key:0,class:"position-absolute end-0 top-0 d-flex justify-content-center align-items-center m-2 fs-4"},yk={class:"position-absolute end-0 bottom-0 d-flex flex-column"},Ek={__name:"QuizMode",setup(t){const{updateData:e}=oy();Ce(localStorage.getItem("nickname")),Ce([]),Ce(""),Ce(!1),Ce(null);const n=Ce([]),s=Ce([]),i=Ce([]),r=Ce(""),o=Ce(!1),a=Ce(!0),l=Ce(!0),u=Ce(0),f=Ve(()=>i.value.length===n.value.length),h=()=>{p()};bi(u,$=>{$===""&&(u.value=0),n.value=JSON.parse(JSON.stringify(s.value)).filter(j=>j.errCnt>=$)});const p=()=>{if(f.value)return;o.value||(o.value=!0);const $=n.value.filter(Y=>i.value.findIndex(ee=>ee.id===Y.id)===-1),j=Math.floor(Math.random()*$.length);r.value=$[j],i.value.push(r.value)},_=()=>{i.value=[],r.value={},o.value=!1},E=()=>{f.value?_():p()},w=()=>{s.value.forEach($=>{$.id===r.value.id&&($.errCnt+=1)}),T(),f.value?_():p()},A=()=>{a.value=!a.value},C=()=>{l.value=!l.value},T=async()=>{const j={[localStorage.getItem("memorize_name")]:{wordList:s.value}};try{await e(j,"/"),console.log("資料已成功設置！")}catch(Y){console.error("設定資料時發生錯誤：",Y),alert("設定資料失敗！")}},x=()=>{const $=localStorage.getItem("memorize_name");Iv(Ps(xs),j=>{var ee;const Y=j.val();console.log(Y),s.value=JSON.parse(JSON.stringify(((ee=Y==null?void 0:Y[$])==null?void 0:ee.wordList)||[])),n.value=JSON.parse(JSON.stringify(s.value)).filter(re=>re.errCnt>=u.value)})};Ri(()=>{var re,Re;const $=(re=localStorage.getItem("memorize_name"))==null?void 0:re.toLowerCase(),j=(Re=localStorage.getItem("memorize_pw"))==null?void 0:Re.toLowerCase();($==="alex"||$==="yiyu")&&j==="520520"?x():eo.push("/login")});const M=Ce(window.innerWidth<992),L=Ce("100vh"),O=()=>{M.value=window.innerWidth<992,L.value=`${window.innerHeight}px`};return Ri(()=>{window.addEventListener("resize",O),O()}),io(()=>{window.removeEventListener("resize",O)}),($,j)=>{const Y=m_("font-awesome-icon");return xe(),Ke("div",{class:"bg-warning d-flex flex-column align-items-center justify-content-between",style:qi({height:L.value})},[U("div",rk,[o.value?(xe(),Ke("div",ak,[U("div",null,kt(l.value?r.value.cn:"---"),1),U("div",lk,[l.value?(xe(),hi(Y,{key:0,onClick:C,icon:"fa-solid fa-eye"})):(xe(),hi(Y,{key:1,onClick:C,icon:"fa-solid fa-eye-slash"}))])])):(xe(),Ke("div",ok,"準備開始"))]),U("div",ck,[o.value?(xe(),Ke("div",fk,[U("div",dk,kt(a.value?r.value.en:"---"),1),U("div",hk,[a.value?(xe(),hi(Y,{key:0,onClick:A,icon:"fa-solid fa-eye"})):(xe(),hi(Y,{key:1,onClick:A,icon:"fa-solid fa-eye-slash"}))])])):(xe(),Ke("div",uk,"Ready"))]),U("div",pk,[U("div",mk,kt(i.value.length)+" / "+kt(n.value.length),1),o.value?Vn("",!0):(xe(),Ke("div",_k,[Se(jt(pa),{to:"/",class:"me-1"},{default:ca(()=>[U("button",gk,[Se(Y,{icon:"fa-solid fa-house"})])]),_:1}),pn(U("input",{type:"number",class:"form-control me-1 w-50","onUpdate:modelValue":j[0]||(j[0]=ee=>u.value=ee)},null,512),[[Ds,u.value]]),U("button",{onClick:h,class:"btn btn-primary btn-lg"},[Se(Y,{icon:"fa-solid fa-play"})])])),o.value?(xe(),Ke("button",{key:1,onClick:_,class:"btn btn-secondary btn-lg"},"Reset")):Vn("",!0)]),o.value?(xe(),Ke("div",vk,[Se(Y,{icon:"fa-solid fa-xmark"}),D_("："+kt(r.value.errCnt),1)])):Vn("",!0),U("div",yk,[o.value?(xe(),Ke("button",{key:0,onClick:E,class:"btn btn-primary btn-lg mb-2 me-3"},[Se(Y,{icon:"fa-solid fa-arrow-right",class:"text-white"})])):Vn("",!0),o.value?(xe(),Ke("button",{key:1,onClick:E,class:"btn btn-success btn-lg mb-2 me-3"},[Se(Y,{icon:"fa-solid fa-check",class:"text-white"})])):Vn("",!0),o.value?(xe(),Ke("button",{key:2,onClick:w,class:"btn btn-danger btn-lg mb-3 me-3"},[Se(Y,{icon:"fa-solid fa-xmark",class:"text-white"})])):Vn("",!0)])],4)}}},bk=ay(Ek,[["__scopeId","data-v-19eabf2f"]]),eo=_I({history:KS("/memorize_words/"),routes:[{path:"/",name:"wordslist",component:ik},{path:"/login",name:"login",component:OI},{path:"/quizmode",name:"quizmode",component:bk}]}),Zp=()=>{};let Ff={},ly={},cy=null,uy={mark:Zp,measure:Zp};try{typeof window<"u"&&(Ff=window),typeof document<"u"&&(ly=document),typeof MutationObserver<"u"&&(cy=MutationObserver),typeof performance<"u"&&(uy=performance)}catch{}const{userAgent:em=""}=Ff.navigator||{},cs=Ff,Pe=ly,tm=cy,Bo=uy;cs.document;const xn=!!Pe.documentElement&&!!Pe.head&&typeof Pe.addEventListener=="function"&&typeof Pe.createElement=="function",fy=~em.indexOf("MSIE")||~em.indexOf("Trident/");var De="classic",dy="duotone",Ct="sharp",Tt="sharp-duotone",wk=[De,dy,Ct,Tt],Ck={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},nm={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Tk=["kit"],Sk=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Ik=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Ak={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Ok={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Nk={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Rk={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Pk={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},xk={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},hy={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},kk=["solid","regular","light","thin","duotone","brands"],py=[1,2,3,4,5,6,7,8,9,10],Dk=py.concat([11,12,13,14,15,16,17,18,19,20]),vr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Lk=[...Object.keys(Rk),...kk,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",vr.GROUP,vr.SWAP_OPACITY,vr.PRIMARY,vr.SECONDARY].concat(py.map(t=>"".concat(t,"x"))).concat(Dk.map(t=>"w-".concat(t))),Mk={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Fk={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},$k={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},sm={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const An="___FONT_AWESOME___",Zc=16,my="fa",_y="svg-inline--fa",qs="data-fa-i2svg",eu="data-fa-pseudo-element",Uk="data-fa-pseudo-element-pending",$f="data-prefix",Uf="data-icon",im="fontawesome-i2svg",Wk="async",Vk=["HTML","HEAD","STYLE","SCRIPT"],gy=(()=>{try{return!0}catch{return!1}})(),vy=[De,Ct,Tt];function vo(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[De]}})}const yy={...hy};yy[De]={...hy[De],...nm.kit,...nm["kit-duotone"]};const Us=vo(yy),tu={...xk};tu[De]={...tu[De],...sm.kit,...sm["kit-duotone"]};const to=vo(tu),nu={...Pk};nu[De]={...nu[De],...$k.kit};const Ws=vo(nu),su={...Nk};su[De]={...su[De],...Fk.kit};const Hk=vo(su),jk=Sk,Ey="fa-layers-text",Bk=Ik,zk={...Ck};vo(zk);const Kk=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],uc=vr,Hi=new Set;Object.keys(to[De]).map(Hi.add.bind(Hi));Object.keys(to[Ct]).map(Hi.add.bind(Hi));Object.keys(to[Tt]).map(Hi.add.bind(Hi));const Gk=[...Tk,...Lk],xr=cs.FontAwesomeConfig||{};function Yk(t){var e=Pe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function qk(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Pe&&typeof Pe.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,s]=e;const i=qk(Yk(n));i!=null&&(xr[s]=i)});const by={styleDefault:"solid",familyDefault:"classic",cssPrefix:my,replacementClass:_y,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};xr.familyPrefix&&(xr.cssPrefix=xr.familyPrefix);const ji={...by,...xr};ji.autoReplaceSvg||(ji.observeMutations=!1);const X={};Object.keys(by).forEach(t=>{Object.defineProperty(X,t,{enumerable:!0,set:function(e){ji[t]=e,kr.forEach(n=>n(X))},get:function(){return ji[t]}})});Object.defineProperty(X,"familyPrefix",{enumerable:!0,set:function(t){ji.cssPrefix=t,kr.forEach(e=>e(X))},get:function(){return ji.cssPrefix}});cs.FontAwesomeConfig=X;const kr=[];function Qk(t){return kr.push(t),()=>{kr.splice(kr.indexOf(t),1)}}const Un=Zc,Zt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Xk(t){if(!t||!xn)return;const e=Pe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Pe.head.childNodes;let s=null;for(let i=n.length-1;i>-1;i--){const r=n[i],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(s=r)}return Pe.head.insertBefore(e,s),t}const Jk="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function no(){let t=12,e="";for(;t-- >0;)e+=Jk[Math.random()*62|0];return e}function sr(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Wf(t){return t.classList?sr(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function wy(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Zk(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(wy(t[n]),'" '),"").trim()}function vl(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Vf(t){return t.size!==Zt.size||t.x!==Zt.x||t.y!==Zt.y||t.rotate!==Zt.rotate||t.flipX||t.flipY}function eD(t){let{transform:e,containerWidth:n,iconWidth:s}=t;const i={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(r," ").concat(o," ").concat(a)},u={transform:"translate(".concat(s/2*-1," -256)")};return{outer:i,inner:l,path:u}}function tD(t){let{transform:e,width:n=Zc,height:s=Zc,startCentered:i=!1}=t,r="";return i&&fy?r+="translate(".concat(e.x/Un-n/2,"em, ").concat(e.y/Un-s/2,"em) "):i?r+="translate(calc(-50% + ".concat(e.x/Un,"em), calc(-50% + ").concat(e.y/Un,"em)) "):r+="translate(".concat(e.x/Un,"em, ").concat(e.y/Un,"em) "),r+="scale(".concat(e.size/Un*(e.flipX?-1:1),", ").concat(e.size/Un*(e.flipY?-1:1),") "),r+="rotate(".concat(e.rotate,"deg) "),r}var nD=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Cy(){const t=my,e=_y,n=X.cssPrefix,s=X.replacementClass;let i=nD;if(n!==t||s!==e){const r=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(r,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(s))}return i}let rm=!1;function fc(){X.autoAddCss&&!rm&&(Xk(Cy()),rm=!0)}var sD={mixout(){return{dom:{css:Cy,insertCss:fc}}},hooks(){return{beforeDOMElementCreation(){fc()},beforeI2svg(){fc()}}}};const On=cs||{};On[An]||(On[An]={});On[An].styles||(On[An].styles={});On[An].hooks||(On[An].hooks={});On[An].shims||(On[An].shims=[]);var en=On[An];const Ty=[],Sy=function(){Pe.removeEventListener("DOMContentLoaded",Sy),$a=1,Ty.map(t=>t())};let $a=!1;xn&&($a=(Pe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Pe.readyState),$a||Pe.addEventListener("DOMContentLoaded",Sy));function iD(t){xn&&($a?setTimeout(t,0):Ty.push(t))}function yo(t){const{tag:e,attributes:n={},children:s=[]}=t;return typeof t=="string"?wy(t):"<".concat(e," ").concat(Zk(n),">").concat(s.map(yo).join(""),"</").concat(e,">")}function om(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var dc=function(e,n,s,i){var r=Object.keys(e),o=r.length,a=n,l,u,f;for(s===void 0?(l=1,f=e[r[0]]):(l=0,f=s);l<o;l++)u=r[l],f=a(f,e[u],u,e);return f};function rD(t){const e=[];let n=0;const s=t.length;for(;n<s;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<s){const r=t.charCodeAt(n++);(r&64512)==56320?e.push(((i&1023)<<10)+(r&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function iu(t){const e=rD(t);return e.length===1?e[0].toString(16):null}function oD(t,e){const n=t.length;let s=t.charCodeAt(e),i;return s>=55296&&s<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(s-55296)*1024+i-56320+65536:s}function am(t){return Object.keys(t).reduce((e,n)=>{const s=t[n];return!!s.icon?e[s.iconName]=s.icon:e[n]=s,e},{})}function ru(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:s=!1}=n,i=am(e);typeof en.hooks.addPack=="function"&&!s?en.hooks.addPack(t,am(e)):en.styles[t]={...en.styles[t]||{},...i},t==="fas"&&ru("fa",e)}const{styles:ks,shims:aD}=en,lD={[De]:Object.values(Ws[De]),[Ct]:Object.values(Ws[Ct]),[Tt]:Object.values(Ws[Tt])};let Hf=null,Iy={},Ay={},Oy={},Ny={},Ry={};const cD={[De]:Object.keys(Us[De]),[Ct]:Object.keys(Us[Ct]),[Tt]:Object.keys(Us[Tt])};function uD(t){return~Gk.indexOf(t)}function fD(t,e){const n=e.split("-"),s=n[0],i=n.slice(1).join("-");return s===t&&i!==""&&!uD(i)?i:null}const Py=()=>{const t=s=>dc(ks,(i,r,o)=>(i[o]=dc(r,s,{}),i),{});Iy=t((s,i,r)=>(i[3]&&(s[i[3]]=r),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{s[a.toString(16)]=r}),s)),Ay=t((s,i,r)=>(s[r]=r,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{s[a]=r}),s)),Ry=t((s,i,r)=>{const o=i[2];return s[r]=r,o.forEach(a=>{s[a]=r}),s});const e="far"in ks||X.autoFetchSvg,n=dc(aD,(s,i)=>{const r=i[0];let o=i[1];const a=i[2];return o==="far"&&!e&&(o="fas"),typeof r=="string"&&(s.names[r]={prefix:o,iconName:a}),typeof r=="number"&&(s.unicodes[r.toString(16)]={prefix:o,iconName:a}),s},{names:{},unicodes:{}});Oy=n.names,Ny=n.unicodes,Hf=yl(X.styleDefault,{family:X.familyDefault})};Qk(t=>{Hf=yl(t.styleDefault,{family:X.familyDefault})});Py();function jf(t,e){return(Iy[t]||{})[e]}function dD(t,e){return(Ay[t]||{})[e]}function Xn(t,e){return(Ry[t]||{})[e]}function xy(t){return Oy[t]||{prefix:null,iconName:null}}function hD(t){const e=Ny[t],n=jf("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function us(){return Hf}const Bf=()=>({prefix:null,iconName:null,rest:[]});function yl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=De}=e,s=Us[n][t],i=to[n][t]||to[n][s],r=t in en.styles?t:null;return i||r||null}const pD={[De]:Object.keys(Ws[De]),[Ct]:Object.keys(Ws[Ct]),[Tt]:Object.keys(Ws[Tt])};function El(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,s={[De]:"".concat(X.cssPrefix,"-").concat(De),[Ct]:"".concat(X.cssPrefix,"-").concat(Ct),[Tt]:"".concat(X.cssPrefix,"-").concat(Tt)};let i=null,r=De;const o=wk.filter(l=>l!==dy);o.forEach(l=>{(t.includes(s[l])||t.some(u=>pD[l].includes(u)))&&(r=l)});const a=t.reduce((l,u)=>{const f=fD(X.cssPrefix,u);if(ks[u]?(u=lD[r].includes(u)?Hk[r][u]:u,i=u,l.prefix=u):cD[r].indexOf(u)>-1?(i=u,l.prefix=yl(u,{family:r})):f?l.iconName=f:u!==X.replacementClass&&!o.some(h=>u===s[h])&&l.rest.push(u),!n&&l.prefix&&l.iconName){const h=i==="fa"?xy(l.iconName):{},p=Xn(l.prefix,l.iconName);h.prefix&&(i=null),l.iconName=h.iconName||p||l.iconName,l.prefix=h.prefix||l.prefix,l.prefix==="far"&&!ks.far&&ks.fas&&!X.autoFetchSvg&&(l.prefix="fas")}return l},Bf());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&r===Ct&&(ks.fass||X.autoFetchSvg)&&(a.prefix="fass",a.iconName=Xn(a.prefix,a.iconName)||a.iconName),!a.prefix&&r===Tt&&(ks.fasds||X.autoFetchSvg)&&(a.prefix="fasds",a.iconName=Xn(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||i==="fa")&&(a.prefix=us()||"fas"),a}class mD{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(r=>{this.definitions[r]={...this.definitions[r]||{},...i[r]},ru(r,i[r]);const o=Ws[De][r];o&&ru(o,i[r]),Py()})}reset(){this.definitions={}}_pullDefinitions(e,n){const s=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(s).map(i=>{const{prefix:r,iconName:o,icon:a}=s[i],l=a[2];e[r]||(e[r]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(e[r][u]=a)}),e[r][o]=a}),e}}let lm=[],_i={};const Oi={},_D=Object.keys(Oi);function gD(t,e){let{mixoutsTo:n}=e;return lm=t,_i={},Object.keys(Oi).forEach(s=>{_D.indexOf(s)===-1&&delete Oi[s]}),lm.forEach(s=>{const i=s.mixout?s.mixout():{};if(Object.keys(i).forEach(r=>{typeof i[r]=="function"&&(n[r]=i[r]),typeof i[r]=="object"&&Object.keys(i[r]).forEach(o=>{n[r]||(n[r]={}),n[r][o]=i[r][o]})}),s.hooks){const r=s.hooks();Object.keys(r).forEach(o=>{_i[o]||(_i[o]=[]),_i[o].push(r[o])})}s.provides&&s.provides(Oi)}),n}function ou(t,e){for(var n=arguments.length,s=new Array(n>2?n-2:0),i=2;i<n;i++)s[i-2]=arguments[i];return(_i[t]||[]).forEach(o=>{e=o.apply(null,[e,...s])}),e}function Qs(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),s=1;s<e;s++)n[s-1]=arguments[s];(_i[t]||[]).forEach(r=>{r.apply(null,n)})}function fs(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Oi[t]?Oi[t].apply(null,e):void 0}function au(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||us();if(e)return e=Xn(n,e)||e,om(ky.definitions,n,e)||om(en.styles,n,e)}const ky=new mD,vD=()=>{X.autoReplaceSvg=!1,X.observeMutations=!1,Qs("noAuto")},yD={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return xn?(Qs("beforeI2svg",t),fs("pseudoElements2svg",t),fs("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;X.autoReplaceSvg===!1&&(X.autoReplaceSvg=!0),X.observeMutations=!0,iD(()=>{bD({autoReplaceSvgRoot:e}),Qs("watch",t)})}},ED={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Xn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=yl(t[0]);return{prefix:n,iconName:Xn(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(X.cssPrefix,"-"))>-1||t.match(jk))){const e=El(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||us(),iconName:Xn(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=us();return{prefix:e,iconName:Xn(e,t)||t}}}},Nt={noAuto:vD,config:X,dom:yD,parse:ED,library:ky,findIconDefinition:au,toHtml:yo},bD=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Pe}=t;(Object.keys(en.styles).length>0||X.autoFetchSvg)&&xn&&X.autoReplaceSvg&&Nt.dom.i2svg({node:e})};function bl(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>yo(n))}}),Object.defineProperty(t,"node",{get:function(){if(!xn)return;const n=Pe.createElement("div");return n.innerHTML=t.html,n.children}}),t}function wD(t){let{children:e,main:n,mask:s,attributes:i,styles:r,transform:o}=t;if(Vf(o)&&n.found&&!s.found){const{width:a,height:l}=n,u={x:a/l/2,y:.5};i.style=vl({...r,"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")})}return[{tag:"svg",attributes:i,children:e}]}function CD(t){let{prefix:e,iconName:n,children:s,attributes:i,symbol:r}=t;const o=r===!0?"".concat(e,"-").concat(X.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:o},children:s}]}]}function zf(t){const{icons:{main:e,mask:n},prefix:s,iconName:i,transform:r,symbol:o,title:a,maskId:l,titleId:u,extra:f,watchable:h=!1}=t,{width:p,height:_}=n.found?n:e,E=s==="fak",w=[X.replacementClass,i?"".concat(X.cssPrefix,"-").concat(i):""].filter(L=>f.classes.indexOf(L)===-1).filter(L=>L!==""||!!L).concat(f.classes).join(" ");let A={children:[],attributes:{...f.attributes,"data-prefix":s,"data-icon":i,class:w,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(_)}};const C=E&&!~f.classes.indexOf("fa-fw")?{width:"".concat(p/_*16*.0625,"em")}:{};h&&(A.attributes[qs]=""),a&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(u||no())},children:[a]}),delete A.attributes.title);const T={...A,prefix:s,iconName:i,main:e,mask:n,maskId:l,transform:r,symbol:o,styles:{...C,...f.styles}},{children:x,attributes:M}=n.found&&e.found?fs("generateAbstractMask",T)||{children:[],attributes:{}}:fs("generateAbstractIcon",T)||{children:[],attributes:{}};return T.children=x,T.attributes=M,o?CD(T):wD(T)}function cm(t){const{content:e,width:n,height:s,transform:i,title:r,extra:o,watchable:a=!1}=t,l={...o.attributes,...r?{title:r}:{},class:o.classes.join(" ")};a&&(l[qs]="");const u={...o.styles};Vf(i)&&(u.transform=tD({transform:i,startCentered:!0,width:n,height:s}),u["-webkit-transform"]=u.transform);const f=vl(u);f.length>0&&(l.style=f);const h=[];return h.push({tag:"span",attributes:l,children:[e]}),r&&h.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),h}function TD(t){const{content:e,title:n,extra:s}=t,i={...s.attributes,...n?{title:n}:{},class:s.classes.join(" ")},r=vl(s.styles);r.length>0&&(i.style=r);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:hc}=en;function lu(t){const e=t[0],n=t[1],[s]=t.slice(4);let i=null;return Array.isArray(s)?i={tag:"g",attributes:{class:"".concat(X.cssPrefix,"-").concat(uc.GROUP)},children:[{tag:"path",attributes:{class:"".concat(X.cssPrefix,"-").concat(uc.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(X.cssPrefix,"-").concat(uc.PRIMARY),fill:"currentColor",d:s[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:i}}const SD={found:!1,width:512,height:512};function ID(t,e){!gy&&!X.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function cu(t,e){let n=e;return e==="fa"&&X.styleDefault!==null&&(e=us()),new Promise((s,i)=>{if(n==="fa"){const r=xy(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&hc[e]&&hc[e][t]){const r=hc[e][t];return s(lu(r))}ID(t,e),s({...SD,icon:X.showMissingIcons&&t?fs("missingIconAbstract")||{}:{}})})}const um=()=>{},uu=X.measurePerformance&&Bo&&Bo.mark&&Bo.measure?Bo:{mark:um,measure:um},yr='FA "6.6.0"',AD=t=>(uu.mark("".concat(yr," ").concat(t," begins")),()=>Dy(t)),Dy=t=>{uu.mark("".concat(yr," ").concat(t," ends")),uu.measure("".concat(yr," ").concat(t),"".concat(yr," ").concat(t," begins"),"".concat(yr," ").concat(t," ends"))};var Kf={begin:AD,end:Dy};const ia=()=>{};function fm(t){return typeof(t.getAttribute?t.getAttribute(qs):null)=="string"}function OD(t){const e=t.getAttribute?t.getAttribute($f):null,n=t.getAttribute?t.getAttribute(Uf):null;return e&&n}function ND(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(X.replacementClass)}function RD(){return X.autoReplaceSvg===!0?ra.replace:ra[X.autoReplaceSvg]||ra.replace}function PD(t){return Pe.createElementNS("http://www.w3.org/2000/svg",t)}function xD(t){return Pe.createElement(t)}function Ly(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?PD:xD}=e;if(typeof t=="string")return Pe.createTextNode(t);const s=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(r){s.setAttribute(r,t.attributes[r])}),(t.children||[]).forEach(function(r){s.appendChild(Ly(r,{ceFn:n}))}),s}function kD(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const ra={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Ly(n),e)}),e.getAttribute(qs)===null&&X.keepOriginalSource){let n=Pe.createComment(kD(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Wf(e).indexOf(X.replacementClass))return ra.replace(t);const s=new RegExp("".concat(X.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const r=n[0].attributes.class.split(" ").reduce((o,a)=>(a===X.replacementClass||a.match(s)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",r.toNode.join(" "))}const i=n.map(r=>yo(r)).join(`
`);e.setAttribute(qs,""),e.innerHTML=i}};function dm(t){t()}function My(t,e){const n=typeof e=="function"?e:ia;if(t.length===0)n();else{let s=dm;X.mutateApproach===Wk&&(s=cs.requestAnimationFrame||dm),s(()=>{const i=RD(),r=Kf.begin("mutate");t.map(i),r(),n()})}}let Gf=!1;function Fy(){Gf=!0}function fu(){Gf=!1}let Ua=null;function hm(t){if(!tm||!X.observeMutations)return;const{treeCallback:e=ia,nodeCallback:n=ia,pseudoElementsCallback:s=ia,observeMutationsRoot:i=Pe}=t;Ua=new tm(r=>{if(Gf)return;const o=us();sr(r).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!fm(a.addedNodes[0])&&(X.searchPseudoElements&&s(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&X.searchPseudoElements&&s(a.target.parentNode),a.type==="attributes"&&fm(a.target)&&~Kk.indexOf(a.attributeName))if(a.attributeName==="class"&&OD(a.target)){const{prefix:l,iconName:u}=El(Wf(a.target));a.target.setAttribute($f,l||o),u&&a.target.setAttribute(Uf,u)}else ND(a.target)&&n(a.target)})}),xn&&Ua.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function DD(){Ua&&Ua.disconnect()}function LD(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((s,i)=>{const r=i.split(":"),o=r[0],a=r.slice(1);return o&&a.length>0&&(s[o]=a.join(":").trim()),s},{})),n}function MD(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),s=t.innerText!==void 0?t.innerText.trim():"";let i=El(Wf(t));return i.prefix||(i.prefix=us()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&s.length>0&&(i.iconName=dD(i.prefix,t.innerText)||jf(i.prefix,iu(t.innerText))),!i.iconName&&X.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function FD(t){const e=sr(t.attributes).reduce((i,r)=>(i.name!=="class"&&i.name!=="style"&&(i[r.name]=r.value),i),{}),n=t.getAttribute("title"),s=t.getAttribute("data-fa-title-id");return X.autoA11y&&(n?e["aria-labelledby"]="".concat(X.replacementClass,"-title-").concat(s||no()):(e["aria-hidden"]="true",e.focusable="false")),e}function $D(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Zt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function pm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:s,rest:i}=MD(t),r=FD(t),o=ou("parseNodeAttributes",{},t);let a=e.styleParser?LD(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:s,transform:Zt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:r},...o}}const{styles:UD}=en;function $y(t){const e=X.autoReplaceSvg==="nest"?pm(t,{styleParser:!1}):pm(t);return~e.extra.classes.indexOf(Ey)?fs("generateLayersText",t,e):fs("generateSvgReplacementMutation",t,e)}let on=new Set;vy.map(t=>{on.add("fa-".concat(t))});Object.keys(Us[De]).map(on.add.bind(on));Object.keys(Us[Ct]).map(on.add.bind(on));Object.keys(Us[Tt]).map(on.add.bind(on));on=[...on];function mm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!xn)return Promise.resolve();const n=Pe.documentElement.classList,s=f=>n.add("".concat(im,"-").concat(f)),i=f=>n.remove("".concat(im,"-").concat(f)),r=X.autoFetchSvg?on:vy.map(f=>"fa-".concat(f)).concat(Object.keys(UD));r.includes("fa")||r.push("fa");const o=[".".concat(Ey,":not([").concat(qs,"])")].concat(r.map(f=>".".concat(f,":not([").concat(qs,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=sr(t.querySelectorAll(o))}catch{}if(a.length>0)s("pending"),i("complete");else return Promise.resolve();const l=Kf.begin("onTree"),u=a.reduce((f,h)=>{try{const p=$y(h);p&&f.push(p)}catch(p){gy||p.name==="MissingIcon"&&console.error(p)}return f},[]);return new Promise((f,h)=>{Promise.all(u).then(p=>{My(p,()=>{s("active"),s("complete"),i("pending"),typeof e=="function"&&e(),l(),f()})}).catch(p=>{l(),h(p)})})}function WD(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;$y(t).then(n=>{n&&My([n],e)})}function VD(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=(e||{}).icon?e:au(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:au(i||{})),t(s,{...n,mask:i})}}const HD=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Zt,symbol:s=!1,mask:i=null,maskId:r=null,title:o=null,titleId:a=null,classes:l=[],attributes:u={},styles:f={}}=e;if(!t)return;const{prefix:h,iconName:p,icon:_}=t;return bl({type:"icon",...t},()=>(Qs("beforeDOMElementCreation",{iconDefinition:t,params:e}),X.autoA11y&&(o?u["aria-labelledby"]="".concat(X.replacementClass,"-title-").concat(a||no()):(u["aria-hidden"]="true",u.focusable="false")),zf({icons:{main:lu(_),mask:i?lu(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:p,transform:{...Zt,...n},symbol:s,title:o,maskId:r,titleId:a,extra:{attributes:u,styles:f,classes:l}})))};var jD={mixout(){return{icon:VD(HD)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=mm,t.nodeCallback=WD,t}}},provides(t){t.i2svg=function(e){const{node:n=Pe,callback:s=()=>{}}=e;return mm(n,s)},t.generateSvgReplacementMutation=function(e,n){const{iconName:s,title:i,titleId:r,prefix:o,transform:a,symbol:l,mask:u,maskId:f,extra:h}=n;return new Promise((p,_)=>{Promise.all([cu(s,o),u.iconName?cu(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(E=>{let[w,A]=E;p([e,zf({icons:{main:w,mask:A},prefix:o,iconName:s,transform:a,symbol:l,maskId:f,title:i,titleId:r,extra:h,watchable:!0})])}).catch(_)})},t.generateAbstractIcon=function(e){let{children:n,attributes:s,main:i,transform:r,styles:o}=e;const a=vl(o);a.length>0&&(s.style=a);let l;return Vf(r)&&(l=fs("generateAbstractTransformGrouping",{main:i,transform:r,containerWidth:i.width,iconWidth:i.width})),n.push(l||i.icon),{children:n,attributes:s}}}},BD={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return bl({type:"layer"},()=>{Qs("beforeDOMElementCreation",{assembler:t,params:e});let s=[];return t(i=>{Array.isArray(i)?i.map(r=>{s=s.concat(r.abstract)}):s=s.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(X.cssPrefix,"-layers"),...n].join(" ")},children:s}]})}}}},zD={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:s=[],attributes:i={},styles:r={}}=e;return bl({type:"counter",content:t},()=>(Qs("beforeDOMElementCreation",{content:t,params:e}),TD({content:t.toString(),title:n,extra:{attributes:i,styles:r,classes:["".concat(X.cssPrefix,"-layers-counter"),...s]}})))}}}},KD={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Zt,title:s=null,classes:i=[],attributes:r={},styles:o={}}=e;return bl({type:"text",content:t},()=>(Qs("beforeDOMElementCreation",{content:t,params:e}),cm({content:t,transform:{...Zt,...n},title:s,extra:{attributes:r,styles:o,classes:["".concat(X.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:s,transform:i,extra:r}=n;let o=null,a=null;if(fy){const l=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/l,a=u.height/l}return X.autoA11y&&!s&&(r.attributes["aria-hidden"]="true"),Promise.resolve([e,cm({content:e.innerHTML,width:o,height:a,transform:i,title:s,extra:r,watchable:!0})])}}};const GD=new RegExp('"',"ug"),_m=[1105920,1112319],gm={FontAwesome:{normal:"fas",400:"fas"},...Ok,...Ak,...Mk},du=Object.keys(gm).reduce((t,e)=>(t[e.toLowerCase()]=gm[e],t),{}),YD=Object.keys(du).reduce((t,e)=>{const n=du[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function qD(t){const e=t.replace(GD,""),n=oD(e,0),s=n>=_m[0]&&n<=_m[1],i=e.length===2?e[0]===e[1]:!1;return{value:iu(i?e[0]:e),isSecondary:s||i}}function QD(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(e),i=isNaN(s)?"normal":s;return(du[n]||{})[i]||YD[n]}function vm(t,e){const n="".concat(Uk).concat(e.replace(":","-"));return new Promise((s,i)=>{if(t.getAttribute(n)!==null)return s();const o=sr(t.children).filter(p=>p.getAttribute(eu)===e)[0],a=cs.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),u=l.match(Bk),f=a.getPropertyValue("font-weight"),h=a.getPropertyValue("content");if(o&&!u)return t.removeChild(o),s();if(u&&h!=="none"&&h!==""){const p=a.getPropertyValue("content");let _=QD(l,f);const{value:E,isSecondary:w}=qD(p),A=u[0].startsWith("FontAwesome");let C=jf(_,E),T=C;if(A){const x=hD(E);x.iconName&&x.prefix&&(C=x.iconName,_=x.prefix)}if(C&&!w&&(!o||o.getAttribute($f)!==_||o.getAttribute(Uf)!==T)){t.setAttribute(n,T),o&&t.removeChild(o);const x=$D(),{extra:M}=x;M.attributes[eu]=e,cu(C,_).then(L=>{const O=zf({...x,icons:{main:L,mask:Bf()},prefix:_,iconName:T,extra:M,watchable:!0}),$=Pe.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore($,t.firstChild):t.appendChild($),$.outerHTML=O.map(j=>yo(j)).join(`
`),t.removeAttribute(n),s()}).catch(i)}else s()}else s()})}function XD(t){return Promise.all([vm(t,"::before"),vm(t,"::after")])}function JD(t){return t.parentNode!==document.head&&!~Vk.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(eu)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function ym(t){if(xn)return new Promise((e,n)=>{const s=sr(t.querySelectorAll("*")).filter(JD).map(XD),i=Kf.begin("searchPseudoElements");Fy(),Promise.all(s).then(()=>{i(),fu(),e()}).catch(()=>{i(),fu(),n()})})}var ZD={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=ym,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Pe}=e;X.searchPseudoElements&&ym(n)}}};let Em=!1;var eL={mixout(){return{dom:{unwatch(){Fy(),Em=!0}}}},hooks(){return{bootstrap(){hm(ou("mutationObserverCallbacks",{}))},noAuto(){DD()},watch(t){const{observeMutationsRoot:e}=t;Em?fu():hm(ou("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const bm=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,s)=>{const i=s.toLowerCase().split("-"),r=i[0];let o=i.slice(1).join("-");if(r&&o==="h")return n.flipX=!0,n;if(r&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(r){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var tL={mixout(){return{parse:{transform:t=>bm(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=bm(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:s,containerWidth:i,iconWidth:r}=e;const o={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(s.x*32,", ").concat(s.y*32,") "),l="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),u="rotate(".concat(s.rotate," 0 0)"),f={transform:"".concat(a," ").concat(l," ").concat(u)},h={transform:"translate(".concat(r/2*-1," -256)")},p={outer:o,inner:f,path:h};return{tag:"g",attributes:{...p.outer},children:[{tag:"g",attributes:{...p.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...p.path}}]}]}}}};const pc={x:0,y:0,width:"100%",height:"100%"};function wm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function nL(t){return t.tag==="g"?t.children:[t]}var sL={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),s=n?El(n.split(" ").map(i=>i.trim())):Bf();return s.prefix||(s.prefix=us()),t.mask=s,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:s,main:i,mask:r,maskId:o,transform:a}=e;const{width:l,icon:u}=i,{width:f,icon:h}=r,p=eD({transform:a,containerWidth:f,iconWidth:l}),_={tag:"rect",attributes:{...pc,fill:"white"}},E=u.children?{children:u.children.map(wm)}:{},w={tag:"g",attributes:{...p.inner},children:[wm({tag:u.tag,attributes:{...u.attributes,...p.path},...E})]},A={tag:"g",attributes:{...p.outer},children:[w]},C="mask-".concat(o||no()),T="clip-".concat(o||no()),x={tag:"mask",attributes:{...pc,id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[_,A]},M={tag:"defs",children:[{tag:"clipPath",attributes:{id:T},children:nL(h)},x]};return n.push(M,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(T,")"),mask:"url(#".concat(C,")"),...pc}}),{children:n,attributes:s}}}},iL={provides(t){let e=!1;cs.matchMedia&&(e=cs.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],s={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...s,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const r={...i,attributeName:"opacity"},o={tag:"circle",attributes:{...s,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...r,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...s,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...r,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...s,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...r,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},rL={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),s=n===null?!1:n===""?!0:n;return t.symbol=s,t}}}},oL=[sD,jD,BD,zD,KD,ZD,eL,tL,sL,iL,rL];gD(oL,{mixoutsTo:Nt});Nt.noAuto;Nt.config;const aL=Nt.library;Nt.dom;const hu=Nt.parse;Nt.findIconDefinition;Nt.toHtml;const lL=Nt.icon;Nt.layer;Nt.text;Nt.counter;function Cm(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,s)}return n}function mn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Cm(Object(n),!0).forEach(function(s){mt(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Cm(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}function cL(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,e||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function uL(t){var e=cL(t,"string");return typeof e=="symbol"?e:e+""}function Wa(t){"@babel/helpers - typeof";return Wa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Wa(t)}function mt(t,e,n){return e=uL(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function fL(t,e){if(t==null)return{};var n={};for(var s in t)if(Object.prototype.hasOwnProperty.call(t,s)){if(e.indexOf(s)>=0)continue;n[s]=t[s]}return n}function dL(t,e){if(t==null)return{};var n=fL(t,e),s,i;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(n[s]=t[s])}return n}var hL=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Uy={exports:{}};(function(t){(function(e){var n=function(C,T,x){if(!u(T)||h(T)||p(T)||_(T)||l(T))return T;var M,L=0,O=0;if(f(T))for(M=[],O=T.length;L<O;L++)M.push(n(C,T[L],x));else{M={};for(var $ in T)Object.prototype.hasOwnProperty.call(T,$)&&(M[C($,x)]=n(C,T[$],x))}return M},s=function(C,T){T=T||{};var x=T.separator||"_",M=T.split||/(?=[A-Z])/;return C.split(M).join(x)},i=function(C){return E(C)?C:(C=C.replace(/[\-_\s]+(.)?/g,function(T,x){return x?x.toUpperCase():""}),C.substr(0,1).toLowerCase()+C.substr(1))},r=function(C){var T=i(C);return T.substr(0,1).toUpperCase()+T.substr(1)},o=function(C,T){return s(C,T).toLowerCase()},a=Object.prototype.toString,l=function(C){return typeof C=="function"},u=function(C){return C===Object(C)},f=function(C){return a.call(C)=="[object Array]"},h=function(C){return a.call(C)=="[object Date]"},p=function(C){return a.call(C)=="[object RegExp]"},_=function(C){return a.call(C)=="[object Boolean]"},E=function(C){return C=C-0,C===C},w=function(C,T){var x=T&&"process"in T?T.process:T;return typeof x!="function"?C:function(M,L){return x(M,C,L)}},A={camelize:i,decamelize:o,pascalize:r,depascalize:o,camelizeKeys:function(C,T){return n(w(i,T),C)},decamelizeKeys:function(C,T){return n(w(o,T),C,T)},pascalizeKeys:function(C,T){return n(w(r,T),C)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=A:e.humps=A})(hL)})(Uy);var pL=Uy.exports,mL=["class","style"];function _L(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var s=n.indexOf(":"),i=pL.camelize(n.slice(0,s)),r=n.slice(s+1).trim();return e[i]=r,e},{})}function gL(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Wy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var s=(t.children||[]).map(function(l){return Wy(l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var f=t.attributes[u];switch(u){case"class":l.class=gL(f);break;case"style":l.style=_L(f);break;default:l.attrs[u]=f}return l},{attrs:{},class:{},style:{}});n.class;var r=n.style,o=r===void 0?{}:r,a=dL(n,mL);return Mu(t.tag,mn(mn(mn({},e),{},{class:i.class,style:mn(mn({},i.style),o)},i.attrs),a),s)}var Vy=!1;try{Vy=!0}catch{}function vL(){if(!Vy&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function mc(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?mt({},t,e):{}}function yL(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},mt(mt(mt(mt(mt(mt(mt(mt(mt(mt(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),mt(mt(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(s){return n[s]?s:null}).filter(function(s){return s})}function Tm(t){if(t&&Wa(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(hu.icon)return hu.icon(t);if(t===null)return null;if(Wa(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var EL=xu({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var s=n.attrs,i=Ve(function(){return Tm(e.icon)}),r=Ve(function(){return mc("classes",yL(e))}),o=Ve(function(){return mc("transform",typeof e.transform=="string"?hu.transform(e.transform):e.transform)}),a=Ve(function(){return mc("mask",Tm(e.mask))}),l=Ve(function(){return lL(i.value,mn(mn(mn(mn({},r.value),o.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});bi(l,function(f){if(!f)return vL("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var u=Ve(function(){return l.value?Wy(l.value.abstract[0],{},s):null});return function(){return u.value}}});const bL={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},wL={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},CL={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},TL={prefix:"fas",iconName:"hourglass-start",icon:[384,512,["hourglass-1"],"f251","M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64l0 11c0 42.4 16.9 83.1 46.9 113.1L146.7 256 78.9 323.9C48.9 353.9 32 394.6 32 437l0 11c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 256 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-11c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1l0-11c17.7 0 32-14.3 32-32s-14.3-32-32-32L320 0 64 0 32 0zM288 437l0 11L96 448l0-11c0-25.5 10.1-49.9 28.1-67.9L192 301.3l67.9 67.9c18 18 28.1 42.4 28.1 67.9z"]},SL={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},IL={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},AL={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},OL={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},NL={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},RL={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},PL={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},xL={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]};var kL=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function DL(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function s(){return this instanceof s?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(s){var i=Object.getOwnPropertyDescriptor(t,s);Object.defineProperty(n,s,i.get?i:{enumerable:!0,get:function(){return t[s]}})}),n}var LL={exports:{}},ft="top",St="bottom",It="right",dt="left",wl="auto",ir=[ft,St,It,dt],Xs="start",Bi="end",Hy="clippingParents",Yf="viewport",di="popper",jy="reference",pu=ir.reduce(function(t,e){return t.concat([e+"-"+Xs,e+"-"+Bi])},[]),qf=[].concat(ir,[wl]).reduce(function(t,e){return t.concat([e,e+"-"+Xs,e+"-"+Bi])},[]),By="beforeRead",zy="read",Ky="afterRead",Gy="beforeMain",Yy="main",qy="afterMain",Qy="beforeWrite",Xy="write",Jy="afterWrite",Zy=[By,zy,Ky,Gy,Yy,qy,Qy,Xy,Jy];function an(t){return t?(t.nodeName||"").toLowerCase():null}function At(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Js(t){var e=At(t).Element;return t instanceof e||t instanceof Element}function Mt(t){var e=At(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Qf(t){if(typeof ShadowRoot>"u")return!1;var e=At(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function ML(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var s=e.styles[n]||{},i=e.attributes[n]||{},r=e.elements[n];!Mt(r)||!an(r)||(Object.assign(r.style,s),Object.keys(i).forEach(function(o){var a=i[o];a===!1?r.removeAttribute(o):r.setAttribute(o,a===!0?"":a)}))})}function FL(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(s){var i=e.elements[s],r=e.attributes[s]||{},o=Object.keys(e.styles.hasOwnProperty(s)?e.styles[s]:n[s]),a=o.reduce(function(l,u){return l[u]="",l},{});!Mt(i)||!an(i)||(Object.assign(i.style,a),Object.keys(r).forEach(function(l){i.removeAttribute(l)}))})}}const Xf={name:"applyStyles",enabled:!0,phase:"write",fn:ML,effect:FL,requires:["computeStyles"]};function sn(t){return t.split("-")[0]}var Vs=Math.max,Va=Math.min,zi=Math.round;function mu(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function eE(){return!/^((?!chrome|android).)*safari/i.test(mu())}function Ki(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var s=t.getBoundingClientRect(),i=1,r=1;e&&Mt(t)&&(i=t.offsetWidth>0&&zi(s.width)/t.offsetWidth||1,r=t.offsetHeight>0&&zi(s.height)/t.offsetHeight||1);var o=Js(t)?At(t):window,a=o.visualViewport,l=!eE()&&n,u=(s.left+(l&&a?a.offsetLeft:0))/i,f=(s.top+(l&&a?a.offsetTop:0))/r,h=s.width/i,p=s.height/r;return{width:h,height:p,top:f,right:u+h,bottom:f+p,left:u,x:u,y:f}}function Jf(t){var e=Ki(t),n=t.offsetWidth,s=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-s)<=1&&(s=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:s}}function tE(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&Qf(n)){var s=e;do{if(s&&t.isSameNode(s))return!0;s=s.parentNode||s.host}while(s)}return!1}function Nn(t){return At(t).getComputedStyle(t)}function $L(t){return["table","td","th"].indexOf(an(t))>=0}function _s(t){return((Js(t)?t.ownerDocument:t.document)||window.document).documentElement}function Cl(t){return an(t)==="html"?t:t.assignedSlot||t.parentNode||(Qf(t)?t.host:null)||_s(t)}function Sm(t){return!Mt(t)||Nn(t).position==="fixed"?null:t.offsetParent}function UL(t){var e=/firefox/i.test(mu()),n=/Trident/i.test(mu());if(n&&Mt(t)){var s=Nn(t);if(s.position==="fixed")return null}var i=Cl(t);for(Qf(i)&&(i=i.host);Mt(i)&&["html","body"].indexOf(an(i))<0;){var r=Nn(i);if(r.transform!=="none"||r.perspective!=="none"||r.contain==="paint"||["transform","perspective"].indexOf(r.willChange)!==-1||e&&r.willChange==="filter"||e&&r.filter&&r.filter!=="none")return i;i=i.parentNode}return null}function Eo(t){for(var e=At(t),n=Sm(t);n&&$L(n)&&Nn(n).position==="static";)n=Sm(n);return n&&(an(n)==="html"||an(n)==="body"&&Nn(n).position==="static")?e:n||UL(t)||e}function Zf(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Dr(t,e,n){return Vs(t,Va(e,n))}function WL(t,e,n){var s=Dr(t,e,n);return s>n?n:s}function nE(){return{top:0,right:0,bottom:0,left:0}}function sE(t){return Object.assign({},nE(),t)}function iE(t,e){return e.reduce(function(n,s){return n[s]=t,n},{})}var VL=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,sE(typeof e!="number"?e:iE(e,ir))};function HL(t){var e,n=t.state,s=t.name,i=t.options,r=n.elements.arrow,o=n.modifiersData.popperOffsets,a=sn(n.placement),l=Zf(a),u=[dt,It].indexOf(a)>=0,f=u?"height":"width";if(!(!r||!o)){var h=VL(i.padding,n),p=Jf(r),_=l==="y"?ft:dt,E=l==="y"?St:It,w=n.rects.reference[f]+n.rects.reference[l]-o[l]-n.rects.popper[f],A=o[l]-n.rects.reference[l],C=Eo(r),T=C?l==="y"?C.clientHeight||0:C.clientWidth||0:0,x=w/2-A/2,M=h[_],L=T-p[f]-h[E],O=T/2-p[f]/2+x,$=Dr(M,O,L),j=l;n.modifiersData[s]=(e={},e[j]=$,e.centerOffset=$-O,e)}}function jL(t){var e=t.state,n=t.options,s=n.element,i=s===void 0?"[data-popper-arrow]":s;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||tE(e.elements.popper,i)&&(e.elements.arrow=i))}const rE={name:"arrow",enabled:!0,phase:"main",fn:HL,effect:jL,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Gi(t){return t.split("-")[1]}var BL={top:"auto",right:"auto",bottom:"auto",left:"auto"};function zL(t,e){var n=t.x,s=t.y,i=e.devicePixelRatio||1;return{x:zi(n*i)/i||0,y:zi(s*i)/i||0}}function Im(t){var e,n=t.popper,s=t.popperRect,i=t.placement,r=t.variation,o=t.offsets,a=t.position,l=t.gpuAcceleration,u=t.adaptive,f=t.roundOffsets,h=t.isFixed,p=o.x,_=p===void 0?0:p,E=o.y,w=E===void 0?0:E,A=typeof f=="function"?f({x:_,y:w}):{x:_,y:w};_=A.x,w=A.y;var C=o.hasOwnProperty("x"),T=o.hasOwnProperty("y"),x=dt,M=ft,L=window;if(u){var O=Eo(n),$="clientHeight",j="clientWidth";if(O===At(n)&&(O=_s(n),Nn(O).position!=="static"&&a==="absolute"&&($="scrollHeight",j="scrollWidth")),O=O,i===ft||(i===dt||i===It)&&r===Bi){M=St;var Y=h&&O===L&&L.visualViewport?L.visualViewport.height:O[$];w-=Y-s.height,w*=l?1:-1}if(i===dt||(i===ft||i===St)&&r===Bi){x=It;var ee=h&&O===L&&L.visualViewport?L.visualViewport.width:O[j];_-=ee-s.width,_*=l?1:-1}}var re=Object.assign({position:a},u&&BL),Re=f===!0?zL({x:_,y:w},At(n)):{x:_,y:w};if(_=Re.x,w=Re.y,l){var ve;return Object.assign({},re,(ve={},ve[M]=T?"0":"",ve[x]=C?"0":"",ve.transform=(L.devicePixelRatio||1)<=1?"translate("+_+"px, "+w+"px)":"translate3d("+_+"px, "+w+"px, 0)",ve))}return Object.assign({},re,(e={},e[M]=T?w+"px":"",e[x]=C?_+"px":"",e.transform="",e))}function KL(t){var e=t.state,n=t.options,s=n.gpuAcceleration,i=s===void 0?!0:s,r=n.adaptive,o=r===void 0?!0:r,a=n.roundOffsets,l=a===void 0?!0:a,u={placement:sn(e.placement),variation:Gi(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Im(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Im(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const ed={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:KL,data:{}};var zo={passive:!0};function GL(t){var e=t.state,n=t.instance,s=t.options,i=s.scroll,r=i===void 0?!0:i,o=s.resize,a=o===void 0?!0:o,l=At(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&u.forEach(function(f){f.addEventListener("scroll",n.update,zo)}),a&&l.addEventListener("resize",n.update,zo),function(){r&&u.forEach(function(f){f.removeEventListener("scroll",n.update,zo)}),a&&l.removeEventListener("resize",n.update,zo)}}const td={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:GL,data:{}};var YL={left:"right",right:"left",bottom:"top",top:"bottom"};function oa(t){return t.replace(/left|right|bottom|top/g,function(e){return YL[e]})}var qL={start:"end",end:"start"};function Am(t){return t.replace(/start|end/g,function(e){return qL[e]})}function nd(t){var e=At(t),n=e.pageXOffset,s=e.pageYOffset;return{scrollLeft:n,scrollTop:s}}function sd(t){return Ki(_s(t)).left+nd(t).scrollLeft}function QL(t,e){var n=At(t),s=_s(t),i=n.visualViewport,r=s.clientWidth,o=s.clientHeight,a=0,l=0;if(i){r=i.width,o=i.height;var u=eE();(u||!u&&e==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:r,height:o,x:a+sd(t),y:l}}function XL(t){var e,n=_s(t),s=nd(t),i=(e=t.ownerDocument)==null?void 0:e.body,r=Vs(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=Vs(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-s.scrollLeft+sd(t),l=-s.scrollTop;return Nn(i||n).direction==="rtl"&&(a+=Vs(n.clientWidth,i?i.clientWidth:0)-r),{width:r,height:o,x:a,y:l}}function id(t){var e=Nn(t),n=e.overflow,s=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+s)}function oE(t){return["html","body","#document"].indexOf(an(t))>=0?t.ownerDocument.body:Mt(t)&&id(t)?t:oE(Cl(t))}function Lr(t,e){var n;e===void 0&&(e=[]);var s=oE(t),i=s===((n=t.ownerDocument)==null?void 0:n.body),r=At(s),o=i?[r].concat(r.visualViewport||[],id(s)?s:[]):s,a=e.concat(o);return i?a:a.concat(Lr(Cl(o)))}function _u(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function JL(t,e){var n=Ki(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function Om(t,e,n){return e===Yf?_u(QL(t,n)):Js(e)?JL(e,n):_u(XL(_s(t)))}function ZL(t){var e=Lr(Cl(t)),n=["absolute","fixed"].indexOf(Nn(t).position)>=0,s=n&&Mt(t)?Eo(t):t;return Js(s)?e.filter(function(i){return Js(i)&&tE(i,s)&&an(i)!=="body"}):[]}function eM(t,e,n,s){var i=e==="clippingParents"?ZL(t):[].concat(e),r=[].concat(i,[n]),o=r[0],a=r.reduce(function(l,u){var f=Om(t,u,s);return l.top=Vs(f.top,l.top),l.right=Va(f.right,l.right),l.bottom=Va(f.bottom,l.bottom),l.left=Vs(f.left,l.left),l},Om(t,o,s));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function aE(t){var e=t.reference,n=t.element,s=t.placement,i=s?sn(s):null,r=s?Gi(s):null,o=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,l;switch(i){case ft:l={x:o,y:e.y-n.height};break;case St:l={x:o,y:e.y+e.height};break;case It:l={x:e.x+e.width,y:a};break;case dt:l={x:e.x-n.width,y:a};break;default:l={x:e.x,y:e.y}}var u=i?Zf(i):null;if(u!=null){var f=u==="y"?"height":"width";switch(r){case Xs:l[u]=l[u]-(e[f]/2-n[f]/2);break;case Bi:l[u]=l[u]+(e[f]/2-n[f]/2);break}}return l}function Yi(t,e){e===void 0&&(e={});var n=e,s=n.placement,i=s===void 0?t.placement:s,r=n.strategy,o=r===void 0?t.strategy:r,a=n.boundary,l=a===void 0?Hy:a,u=n.rootBoundary,f=u===void 0?Yf:u,h=n.elementContext,p=h===void 0?di:h,_=n.altBoundary,E=_===void 0?!1:_,w=n.padding,A=w===void 0?0:w,C=sE(typeof A!="number"?A:iE(A,ir)),T=p===di?jy:di,x=t.rects.popper,M=t.elements[E?T:p],L=eM(Js(M)?M:M.contextElement||_s(t.elements.popper),l,f,o),O=Ki(t.elements.reference),$=aE({reference:O,element:x,strategy:"absolute",placement:i}),j=_u(Object.assign({},x,$)),Y=p===di?j:O,ee={top:L.top-Y.top+C.top,bottom:Y.bottom-L.bottom+C.bottom,left:L.left-Y.left+C.left,right:Y.right-L.right+C.right},re=t.modifiersData.offset;if(p===di&&re){var Re=re[i];Object.keys(ee).forEach(function(ve){var it=[It,St].indexOf(ve)>=0?1:-1,Je=[ft,St].indexOf(ve)>=0?"y":"x";ee[ve]+=Re[Je]*it})}return ee}function tM(t,e){e===void 0&&(e={});var n=e,s=n.placement,i=n.boundary,r=n.rootBoundary,o=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,u=l===void 0?qf:l,f=Gi(s),h=f?a?pu:pu.filter(function(E){return Gi(E)===f}):ir,p=h.filter(function(E){return u.indexOf(E)>=0});p.length===0&&(p=h);var _=p.reduce(function(E,w){return E[w]=Yi(t,{placement:w,boundary:i,rootBoundary:r,padding:o})[sn(w)],E},{});return Object.keys(_).sort(function(E,w){return _[E]-_[w]})}function nM(t){if(sn(t)===wl)return[];var e=oa(t);return[Am(t),e,Am(e)]}function sM(t){var e=t.state,n=t.options,s=t.name;if(!e.modifiersData[s]._skip){for(var i=n.mainAxis,r=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!0:o,l=n.fallbackPlacements,u=n.padding,f=n.boundary,h=n.rootBoundary,p=n.altBoundary,_=n.flipVariations,E=_===void 0?!0:_,w=n.allowedAutoPlacements,A=e.options.placement,C=sn(A),T=C===A,x=l||(T||!E?[oa(A)]:nM(A)),M=[A].concat(x).reduce(function(ot,Ze){return ot.concat(sn(Ze)===wl?tM(e,{placement:Ze,boundary:f,rootBoundary:h,padding:u,flipVariations:E,allowedAutoPlacements:w}):Ze)},[]),L=e.rects.reference,O=e.rects.popper,$=new Map,j=!0,Y=M[0],ee=0;ee<M.length;ee++){var re=M[ee],Re=sn(re),ve=Gi(re)===Xs,it=[ft,St].indexOf(Re)>=0,Je=it?"width":"height",me=Yi(e,{placement:re,boundary:f,rootBoundary:h,altBoundary:p,padding:u}),oe=it?ve?It:dt:ve?St:ft;L[Je]>O[Je]&&(oe=oa(oe));var ue=oa(oe),Ue=[];if(r&&Ue.push(me[Re]<=0),a&&Ue.push(me[oe]<=0,me[ue]<=0),Ue.every(function(ot){return ot})){Y=re,j=!1;break}$.set(re,Ue)}if(j)for(var rt=E?3:1,qe=function(Ze){var $e=M.find(function(R){var K=$.get(R);if(K)return K.slice(0,Ze).every(function(G){return G})});if($e)return Y=$e,"break"},Le=rt;Le>0;Le--){var Et=qe(Le);if(Et==="break")break}e.placement!==Y&&(e.modifiersData[s]._skip=!0,e.placement=Y,e.reset=!0)}}const lE={name:"flip",enabled:!0,phase:"main",fn:sM,requiresIfExists:["offset"],data:{_skip:!1}};function Nm(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function Rm(t){return[ft,It,St,dt].some(function(e){return t[e]>=0})}function iM(t){var e=t.state,n=t.name,s=e.rects.reference,i=e.rects.popper,r=e.modifiersData.preventOverflow,o=Yi(e,{elementContext:"reference"}),a=Yi(e,{altBoundary:!0}),l=Nm(o,s),u=Nm(a,i,r),f=Rm(l),h=Rm(u);e.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:u,isReferenceHidden:f,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":h})}const cE={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:iM};function rM(t,e,n){var s=sn(t),i=[dt,ft].indexOf(s)>=0?-1:1,r=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=r[0],a=r[1];return o=o||0,a=(a||0)*i,[dt,It].indexOf(s)>=0?{x:a,y:o}:{x:o,y:a}}function oM(t){var e=t.state,n=t.options,s=t.name,i=n.offset,r=i===void 0?[0,0]:i,o=qf.reduce(function(f,h){return f[h]=rM(h,e.rects,r),f},{}),a=o[e.placement],l=a.x,u=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=u),e.modifiersData[s]=o}const uE={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:oM};function aM(t){var e=t.state,n=t.name;e.modifiersData[n]=aE({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const rd={name:"popperOffsets",enabled:!0,phase:"read",fn:aM,data:{}};function lM(t){return t==="x"?"y":"x"}function cM(t){var e=t.state,n=t.options,s=t.name,i=n.mainAxis,r=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!1:o,l=n.boundary,u=n.rootBoundary,f=n.altBoundary,h=n.padding,p=n.tether,_=p===void 0?!0:p,E=n.tetherOffset,w=E===void 0?0:E,A=Yi(e,{boundary:l,rootBoundary:u,padding:h,altBoundary:f}),C=sn(e.placement),T=Gi(e.placement),x=!T,M=Zf(C),L=lM(M),O=e.modifiersData.popperOffsets,$=e.rects.reference,j=e.rects.popper,Y=typeof w=="function"?w(Object.assign({},e.rects,{placement:e.placement})):w,ee=typeof Y=="number"?{mainAxis:Y,altAxis:Y}:Object.assign({mainAxis:0,altAxis:0},Y),re=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,Re={x:0,y:0};if(O){if(r){var ve,it=M==="y"?ft:dt,Je=M==="y"?St:It,me=M==="y"?"height":"width",oe=O[M],ue=oe+A[it],Ue=oe-A[Je],rt=_?-j[me]/2:0,qe=T===Xs?$[me]:j[me],Le=T===Xs?-j[me]:-$[me],Et=e.elements.arrow,ot=_&&Et?Jf(Et):{width:0,height:0},Ze=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:nE(),$e=Ze[it],R=Ze[Je],K=Dr(0,$[me],ot[me]),G=x?$[me]/2-rt-K-$e-ee.mainAxis:qe-K-$e-ee.mainAxis,Q=x?-$[me]/2+rt+K+R+ee.mainAxis:Le+K+R+ee.mainAxis,I=e.elements.arrow&&Eo(e.elements.arrow),be=I?M==="y"?I.clientTop||0:I.clientLeft||0:0,m=(ve=re==null?void 0:re[M])!=null?ve:0,v=oe+G-m-be,b=oe+Q-m,k=Dr(_?Va(ue,v):ue,oe,_?Vs(Ue,b):Ue);O[M]=k,Re[M]=k-oe}if(a){var N,D=M==="x"?ft:dt,z=M==="x"?St:It,S=O[L],W=L==="y"?"height":"width",F=S+A[D],q=S-A[z],J=[ft,dt].indexOf(C)!==-1,Z=(N=re==null?void 0:re[L])!=null?N:0,se=J?F:S-$[W]-j[W]-Z+ee.altAxis,le=J?S+$[W]+j[W]-Z-ee.altAxis:q,ye=_&&J?WL(se,S,le):Dr(_?se:F,S,_?le:q);O[L]=ye,Re[L]=ye-S}e.modifiersData[s]=Re}}const fE={name:"preventOverflow",enabled:!0,phase:"main",fn:cM,requiresIfExists:["offset"]};function uM(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function fM(t){return t===At(t)||!Mt(t)?nd(t):uM(t)}function dM(t){var e=t.getBoundingClientRect(),n=zi(e.width)/t.offsetWidth||1,s=zi(e.height)/t.offsetHeight||1;return n!==1||s!==1}function hM(t,e,n){n===void 0&&(n=!1);var s=Mt(e),i=Mt(e)&&dM(e),r=_s(e),o=Ki(t,i,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(s||!s&&!n)&&((an(e)!=="body"||id(r))&&(a=fM(e)),Mt(e)?(l=Ki(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):r&&(l.x=sd(r))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function pM(t){var e=new Map,n=new Set,s=[];t.forEach(function(r){e.set(r.name,r)});function i(r){n.add(r.name);var o=[].concat(r.requires||[],r.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var l=e.get(a);l&&i(l)}}),s.push(r)}return t.forEach(function(r){n.has(r.name)||i(r)}),s}function mM(t){var e=pM(t);return Zy.reduce(function(n,s){return n.concat(e.filter(function(i){return i.phase===s}))},[])}function _M(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function gM(t){var e=t.reduce(function(n,s){var i=n[s.name];return n[s.name]=i?Object.assign({},i,s,{options:Object.assign({},i.options,s.options),data:Object.assign({},i.data,s.data)}):s,n},{});return Object.keys(e).map(function(n){return e[n]})}var Pm={placement:"bottom",modifiers:[],strategy:"absolute"};function xm(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(s){return!(s&&typeof s.getBoundingClientRect=="function")})}function Tl(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,s=n===void 0?[]:n,i=e.defaultOptions,r=i===void 0?Pm:i;return function(a,l,u){u===void 0&&(u=r);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},Pm,r),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},h=[],p=!1,_={state:f,setOptions:function(C){var T=typeof C=="function"?C(f.options):C;w(),f.options=Object.assign({},r,f.options,T),f.scrollParents={reference:Js(a)?Lr(a):a.contextElement?Lr(a.contextElement):[],popper:Lr(l)};var x=mM(gM([].concat(s,f.options.modifiers)));return f.orderedModifiers=x.filter(function(M){return M.enabled}),E(),_.update()},forceUpdate:function(){if(!p){var C=f.elements,T=C.reference,x=C.popper;if(xm(T,x)){f.rects={reference:hM(T,Eo(x),f.options.strategy==="fixed"),popper:Jf(x)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(ee){return f.modifiersData[ee.name]=Object.assign({},ee.data)});for(var M=0;M<f.orderedModifiers.length;M++){if(f.reset===!0){f.reset=!1,M=-1;continue}var L=f.orderedModifiers[M],O=L.fn,$=L.options,j=$===void 0?{}:$,Y=L.name;typeof O=="function"&&(f=O({state:f,options:j,name:Y,instance:_})||f)}}}},update:_M(function(){return new Promise(function(A){_.forceUpdate(),A(f)})}),destroy:function(){w(),p=!0}};if(!xm(a,l))return _;_.setOptions(u).then(function(A){!p&&u.onFirstUpdate&&u.onFirstUpdate(A)});function E(){f.orderedModifiers.forEach(function(A){var C=A.name,T=A.options,x=T===void 0?{}:T,M=A.effect;if(typeof M=="function"){var L=M({state:f,name:C,instance:_,options:x}),O=function(){};h.push(L||O)}})}function w(){h.forEach(function(A){return A()}),h=[]}return _}}var vM=Tl(),yM=[td,rd,ed,Xf],EM=Tl({defaultModifiers:yM}),bM=[td,rd,ed,Xf,uE,lE,fE,rE,cE],wM=Tl({defaultModifiers:bM});const CM=Object.freeze(Object.defineProperty({__proto__:null,afterMain:qy,afterRead:Ky,afterWrite:Jy,applyStyles:Xf,arrow:rE,auto:wl,basePlacements:ir,beforeMain:Gy,beforeRead:By,beforeWrite:Qy,bottom:St,clippingParents:Hy,computeStyles:ed,createPopper:wM,createPopperBase:vM,createPopperLite:EM,detectOverflow:Yi,end:Bi,eventListeners:td,flip:lE,hide:cE,left:dt,main:Yy,modifierPhases:Zy,offset:uE,placements:qf,popper:di,popperGenerator:Tl,popperOffsets:rd,preventOverflow:fE,read:zy,reference:jy,right:It,start:Xs,top:ft,variationPlacements:pu,viewport:Yf,write:Xy},Symbol.toStringTag,{value:"Module"})),TM=DL(CM);/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(t,e){(function(n,s){t.exports=s(TM)})(kL,function(n){function s(g){const c=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(g){for(const d in g)if(d!=="default"){const y=Object.getOwnPropertyDescriptor(g,d);Object.defineProperty(c,d,y.get?y:{enumerable:!0,get:()=>g[d]})}}return c.default=g,Object.freeze(c)}const i=s(n),r=new Map,o={set(g,c,d){r.has(g)||r.set(g,new Map);const y=r.get(g);if(!y.has(c)&&y.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(y.keys())[0]}.`);return}y.set(c,d)},get(g,c){return r.has(g)&&r.get(g).get(c)||null},remove(g,c){if(!r.has(g))return;const d=r.get(g);d.delete(c),d.size===0&&r.delete(g)}},a=1e6,l=1e3,u="transitionend",f=g=>(g&&window.CSS&&window.CSS.escape&&(g=g.replace(/#([^\s"#']+)/g,(c,d)=>`#${CSS.escape(d)}`)),g),h=g=>g==null?`${g}`:Object.prototype.toString.call(g).match(/\s([a-z]+)/i)[1].toLowerCase(),p=g=>{do g+=Math.floor(Math.random()*a);while(document.getElementById(g));return g},_=g=>{if(!g)return 0;let{transitionDuration:c,transitionDelay:d}=window.getComputedStyle(g);const y=Number.parseFloat(c),P=Number.parseFloat(d);return!y&&!P?0:(c=c.split(",")[0],d=d.split(",")[0],(Number.parseFloat(c)+Number.parseFloat(d))*l)},E=g=>{g.dispatchEvent(new Event(u))},w=g=>!g||typeof g!="object"?!1:(typeof g.jquery<"u"&&(g=g[0]),typeof g.nodeType<"u"),A=g=>w(g)?g.jquery?g[0]:g:typeof g=="string"&&g.length>0?document.querySelector(f(g)):null,C=g=>{if(!w(g)||g.getClientRects().length===0)return!1;const c=getComputedStyle(g).getPropertyValue("visibility")==="visible",d=g.closest("details:not([open])");if(!d)return c;if(d!==g){const y=g.closest("summary");if(y&&y.parentNode!==d||y===null)return!1}return c},T=g=>!g||g.nodeType!==Node.ELEMENT_NODE||g.classList.contains("disabled")?!0:typeof g.disabled<"u"?g.disabled:g.hasAttribute("disabled")&&g.getAttribute("disabled")!=="false",x=g=>{if(!document.documentElement.attachShadow)return null;if(typeof g.getRootNode=="function"){const c=g.getRootNode();return c instanceof ShadowRoot?c:null}return g instanceof ShadowRoot?g:g.parentNode?x(g.parentNode):null},M=()=>{},L=g=>{g.offsetHeight},O=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,$=[],j=g=>{document.readyState==="loading"?($.length||document.addEventListener("DOMContentLoaded",()=>{for(const c of $)c()}),$.push(g)):g()},Y=()=>document.documentElement.dir==="rtl",ee=g=>{j(()=>{const c=O();if(c){const d=g.NAME,y=c.fn[d];c.fn[d]=g.jQueryInterface,c.fn[d].Constructor=g,c.fn[d].noConflict=()=>(c.fn[d]=y,g.jQueryInterface)}})},re=(g,c=[],d=g)=>typeof g=="function"?g(...c):d,Re=(g,c,d=!0)=>{if(!d){re(g);return}const P=_(c)+5;let B=!1;const H=({target:ce})=>{ce===c&&(B=!0,c.removeEventListener(u,H),re(g))};c.addEventListener(u,H),setTimeout(()=>{B||E(c)},P)},ve=(g,c,d,y)=>{const P=g.length;let B=g.indexOf(c);return B===-1?!d&&y?g[P-1]:g[0]:(B+=d?1:-1,y&&(B=(B+P)%P),g[Math.max(0,Math.min(B,P-1))])},it=/[^.]*(?=\..*)\.|.*/,Je=/\..*/,me=/::\d+$/,oe={};let ue=1;const Ue={mouseenter:"mouseover",mouseleave:"mouseout"},rt=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function qe(g,c){return c&&`${c}::${ue++}`||g.uidEvent||ue++}function Le(g){const c=qe(g);return g.uidEvent=c,oe[c]=oe[c]||{},oe[c]}function Et(g,c){return function d(y){return be(y,{delegateTarget:g}),d.oneOff&&I.off(g,y.type,c),c.apply(g,[y])}}function ot(g,c,d){return function y(P){const B=g.querySelectorAll(c);for(let{target:H}=P;H&&H!==this;H=H.parentNode)for(const ce of B)if(ce===H)return be(P,{delegateTarget:H}),y.oneOff&&I.off(g,P.type,c,d),d.apply(H,[P])}}function Ze(g,c,d=null){return Object.values(g).find(y=>y.callable===c&&y.delegationSelector===d)}function $e(g,c,d){const y=typeof c=="string",P=y?d:c||d;let B=Q(g);return rt.has(B)||(B=g),[y,P,B]}function R(g,c,d,y,P){if(typeof c!="string"||!g)return;let[B,H,ce]=$e(c,d,y);c in Ue&&(H=(V0=>function(ci){if(!ci.relatedTarget||ci.relatedTarget!==ci.delegateTarget&&!ci.delegateTarget.contains(ci.relatedTarget))return V0.call(this,ci)})(H));const pt=Le(g),xt=pt[ce]||(pt[ce]={}),ze=Ze(xt,H,B?d:null);if(ze){ze.oneOff=ze.oneOff&&P;return}const Yt=qe(H,c.replace(it,"")),Ut=B?ot(g,d,H):Et(g,H);Ut.delegationSelector=B?d:null,Ut.callable=H,Ut.oneOff=P,Ut.uidEvent=Yt,xt[Yt]=Ut,g.addEventListener(ce,Ut,B)}function K(g,c,d,y,P){const B=Ze(c[d],y,P);B&&(g.removeEventListener(d,B,!!P),delete c[d][B.uidEvent])}function G(g,c,d,y){const P=c[d]||{};for(const[B,H]of Object.entries(P))B.includes(y)&&K(g,c,d,H.callable,H.delegationSelector)}function Q(g){return g=g.replace(Je,""),Ue[g]||g}const I={on(g,c,d,y){R(g,c,d,y,!1)},one(g,c,d,y){R(g,c,d,y,!0)},off(g,c,d,y){if(typeof c!="string"||!g)return;const[P,B,H]=$e(c,d,y),ce=H!==c,pt=Le(g),xt=pt[H]||{},ze=c.startsWith(".");if(typeof B<"u"){if(!Object.keys(xt).length)return;K(g,pt,H,B,P?d:null);return}if(ze)for(const Yt of Object.keys(pt))G(g,pt,Yt,c.slice(1));for(const[Yt,Ut]of Object.entries(xt)){const Do=Yt.replace(me,"");(!ce||c.includes(Do))&&K(g,pt,H,Ut.callable,Ut.delegationSelector)}},trigger(g,c,d){if(typeof c!="string"||!g)return null;const y=O(),P=Q(c),B=c!==P;let H=null,ce=!0,pt=!0,xt=!1;B&&y&&(H=y.Event(c,d),y(g).trigger(H),ce=!H.isPropagationStopped(),pt=!H.isImmediatePropagationStopped(),xt=H.isDefaultPrevented());const ze=be(new Event(c,{bubbles:ce,cancelable:!0}),d);return xt&&ze.preventDefault(),pt&&g.dispatchEvent(ze),ze.defaultPrevented&&H&&H.preventDefault(),ze}};function be(g,c={}){for(const[d,y]of Object.entries(c))try{g[d]=y}catch{Object.defineProperty(g,d,{configurable:!0,get(){return y}})}return g}function m(g){if(g==="true")return!0;if(g==="false")return!1;if(g===Number(g).toString())return Number(g);if(g===""||g==="null")return null;if(typeof g!="string")return g;try{return JSON.parse(decodeURIComponent(g))}catch{return g}}function v(g){return g.replace(/[A-Z]/g,c=>`-${c.toLowerCase()}`)}const b={setDataAttribute(g,c,d){g.setAttribute(`data-bs-${v(c)}`,d)},removeDataAttribute(g,c){g.removeAttribute(`data-bs-${v(c)}`)},getDataAttributes(g){if(!g)return{};const c={},d=Object.keys(g.dataset).filter(y=>y.startsWith("bs")&&!y.startsWith("bsConfig"));for(const y of d){let P=y.replace(/^bs/,"");P=P.charAt(0).toLowerCase()+P.slice(1,P.length),c[P]=m(g.dataset[y])}return c},getDataAttribute(g,c){return m(g.getAttribute(`data-bs-${v(c)}`))}};class k{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(c){return c=this._mergeConfigObj(c),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}_configAfterMerge(c){return c}_mergeConfigObj(c,d){const y=w(d)?b.getDataAttribute(d,"config"):{};return{...this.constructor.Default,...typeof y=="object"?y:{},...w(d)?b.getDataAttributes(d):{},...typeof c=="object"?c:{}}}_typeCheckConfig(c,d=this.constructor.DefaultType){for(const[y,P]of Object.entries(d)){const B=c[y],H=w(B)?"element":h(B);if(!new RegExp(P).test(H))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${y}" provided type "${H}" but expected type "${P}".`)}}}const N="5.3.3";class D extends k{constructor(c,d){super(),c=A(c),c&&(this._element=c,this._config=this._getConfig(d),o.set(this._element,this.constructor.DATA_KEY,this))}dispose(){o.remove(this._element,this.constructor.DATA_KEY),I.off(this._element,this.constructor.EVENT_KEY);for(const c of Object.getOwnPropertyNames(this))this[c]=null}_queueCallback(c,d,y=!0){Re(c,d,y)}_getConfig(c){return c=this._mergeConfigObj(c,this._element),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}static getInstance(c){return o.get(A(c),this.DATA_KEY)}static getOrCreateInstance(c,d={}){return this.getInstance(c)||new this(c,typeof d=="object"?d:null)}static get VERSION(){return N}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(c){return`${c}${this.EVENT_KEY}`}}const z=g=>{let c=g.getAttribute("data-bs-target");if(!c||c==="#"){let d=g.getAttribute("href");if(!d||!d.includes("#")&&!d.startsWith("."))return null;d.includes("#")&&!d.startsWith("#")&&(d=`#${d.split("#")[1]}`),c=d&&d!=="#"?d.trim():null}return c?c.split(",").map(d=>f(d)).join(","):null},S={find(g,c=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(c,g))},findOne(g,c=document.documentElement){return Element.prototype.querySelector.call(c,g)},children(g,c){return[].concat(...g.children).filter(d=>d.matches(c))},parents(g,c){const d=[];let y=g.parentNode.closest(c);for(;y;)d.push(y),y=y.parentNode.closest(c);return d},prev(g,c){let d=g.previousElementSibling;for(;d;){if(d.matches(c))return[d];d=d.previousElementSibling}return[]},next(g,c){let d=g.nextElementSibling;for(;d;){if(d.matches(c))return[d];d=d.nextElementSibling}return[]},focusableChildren(g){const c=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(d=>`${d}:not([tabindex^="-"])`).join(",");return this.find(c,g).filter(d=>!T(d)&&C(d))},getSelectorFromElement(g){const c=z(g);return c&&S.findOne(c)?c:null},getElementFromSelector(g){const c=z(g);return c?S.findOne(c):null},getMultipleElementsFromSelector(g){const c=z(g);return c?S.find(c):[]}},W=(g,c="hide")=>{const d=`click.dismiss${g.EVENT_KEY}`,y=g.NAME;I.on(document,d,`[data-bs-dismiss="${y}"]`,function(P){if(["A","AREA"].includes(this.tagName)&&P.preventDefault(),T(this))return;const B=S.getElementFromSelector(this)||this.closest(`.${y}`);g.getOrCreateInstance(B)[c]()})},F="alert",J=".bs.alert",Z=`close${J}`,se=`closed${J}`,le="fade",ye="show";class pe extends D{static get NAME(){return F}close(){if(I.trigger(this._element,Z).defaultPrevented)return;this._element.classList.remove(ye);const d=this._element.classList.contains(le);this._queueCallback(()=>this._destroyElement(),this._element,d)}_destroyElement(){this._element.remove(),I.trigger(this._element,se),this.dispose()}static jQueryInterface(c){return this.each(function(){const d=pe.getOrCreateInstance(this);if(typeof c=="string"){if(d[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);d[c](this)}})}}W(pe,"close"),ee(pe);const We="button",kn=".bs.button",bo=".data-api",gs="active",rr='[data-bs-toggle="button"]',at=`click${kn}${bo}`;class et extends D{static get NAME(){return We}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(gs))}static jQueryInterface(c){return this.each(function(){const d=et.getOrCreateInstance(this);c==="toggle"&&d[c]()})}}I.on(document,at,rr,g=>{g.preventDefault();const c=g.target.closest(rr);et.getOrCreateInstance(c).toggle()}),ee(et);const wo="swipe",ti=".bs.swipe",dE=`touchstart${ti}`,hE=`touchmove${ti}`,pE=`touchend${ti}`,mE=`pointerdown${ti}`,_E=`pointerup${ti}`,gE="touch",vE="pen",yE="pointer-event",EE=40,bE={endCallback:null,leftCallback:null,rightCallback:null},wE={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Co extends k{constructor(c,d){super(),this._element=c,!(!c||!Co.isSupported())&&(this._config=this._getConfig(d),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return bE}static get DefaultType(){return wE}static get NAME(){return wo}dispose(){I.off(this._element,ti)}_start(c){if(!this._supportPointerEvents){this._deltaX=c.touches[0].clientX;return}this._eventIsPointerPenTouch(c)&&(this._deltaX=c.clientX)}_end(c){this._eventIsPointerPenTouch(c)&&(this._deltaX=c.clientX-this._deltaX),this._handleSwipe(),re(this._config.endCallback)}_move(c){this._deltaX=c.touches&&c.touches.length>1?0:c.touches[0].clientX-this._deltaX}_handleSwipe(){const c=Math.abs(this._deltaX);if(c<=EE)return;const d=c/this._deltaX;this._deltaX=0,d&&re(d>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(I.on(this._element,mE,c=>this._start(c)),I.on(this._element,_E,c=>this._end(c)),this._element.classList.add(yE)):(I.on(this._element,dE,c=>this._start(c)),I.on(this._element,hE,c=>this._move(c)),I.on(this._element,pE,c=>this._end(c)))}_eventIsPointerPenTouch(c){return this._supportPointerEvents&&(c.pointerType===vE||c.pointerType===gE)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const CE="carousel",Dn=".bs.carousel",od=".data-api",TE="ArrowLeft",SE="ArrowRight",IE=500,or="next",ni="prev",si="left",To="right",AE=`slide${Dn}`,Il=`slid${Dn}`,OE=`keydown${Dn}`,NE=`mouseenter${Dn}`,RE=`mouseleave${Dn}`,PE=`dragstart${Dn}`,xE=`load${Dn}${od}`,kE=`click${Dn}${od}`,ad="carousel",So="active",DE="slide",LE="carousel-item-end",ME="carousel-item-start",FE="carousel-item-next",$E="carousel-item-prev",ld=".active",cd=".carousel-item",UE=ld+cd,WE=".carousel-item img",VE=".carousel-indicators",HE="[data-bs-slide], [data-bs-slide-to]",jE='[data-bs-ride="carousel"]',BE={[TE]:To,[SE]:si},zE={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},KE={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class ii extends D{constructor(c,d){super(c,d),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=S.findOne(VE,this._element),this._addEventListeners(),this._config.ride===ad&&this.cycle()}static get Default(){return zE}static get DefaultType(){return KE}static get NAME(){return CE}next(){this._slide(or)}nextWhenVisible(){!document.hidden&&C(this._element)&&this.next()}prev(){this._slide(ni)}pause(){this._isSliding&&E(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){I.one(this._element,Il,()=>this.cycle());return}this.cycle()}}to(c){const d=this._getItems();if(c>d.length-1||c<0)return;if(this._isSliding){I.one(this._element,Il,()=>this.to(c));return}const y=this._getItemIndex(this._getActive());if(y===c)return;const P=c>y?or:ni;this._slide(P,d[c])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(c){return c.defaultInterval=c.interval,c}_addEventListeners(){this._config.keyboard&&I.on(this._element,OE,c=>this._keydown(c)),this._config.pause==="hover"&&(I.on(this._element,NE,()=>this.pause()),I.on(this._element,RE,()=>this._maybeEnableCycle())),this._config.touch&&Co.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const y of S.find(WE,this._element))I.on(y,PE,P=>P.preventDefault());const d={leftCallback:()=>this._slide(this._directionToOrder(si)),rightCallback:()=>this._slide(this._directionToOrder(To)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),IE+this._config.interval))}};this._swipeHelper=new Co(this._element,d)}_keydown(c){if(/input|textarea/i.test(c.target.tagName))return;const d=BE[c.key];d&&(c.preventDefault(),this._slide(this._directionToOrder(d)))}_getItemIndex(c){return this._getItems().indexOf(c)}_setActiveIndicatorElement(c){if(!this._indicatorsElement)return;const d=S.findOne(ld,this._indicatorsElement);d.classList.remove(So),d.removeAttribute("aria-current");const y=S.findOne(`[data-bs-slide-to="${c}"]`,this._indicatorsElement);y&&(y.classList.add(So),y.setAttribute("aria-current","true"))}_updateInterval(){const c=this._activeElement||this._getActive();if(!c)return;const d=Number.parseInt(c.getAttribute("data-bs-interval"),10);this._config.interval=d||this._config.defaultInterval}_slide(c,d=null){if(this._isSliding)return;const y=this._getActive(),P=c===or,B=d||ve(this._getItems(),y,P,this._config.wrap);if(B===y)return;const H=this._getItemIndex(B),ce=Do=>I.trigger(this._element,Do,{relatedTarget:B,direction:this._orderToDirection(c),from:this._getItemIndex(y),to:H});if(ce(AE).defaultPrevented||!y||!B)return;const xt=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(H),this._activeElement=B;const ze=P?ME:LE,Yt=P?FE:$E;B.classList.add(Yt),L(B),y.classList.add(ze),B.classList.add(ze);const Ut=()=>{B.classList.remove(ze,Yt),B.classList.add(So),y.classList.remove(So,Yt,ze),this._isSliding=!1,ce(Il)};this._queueCallback(Ut,y,this._isAnimated()),xt&&this.cycle()}_isAnimated(){return this._element.classList.contains(DE)}_getActive(){return S.findOne(UE,this._element)}_getItems(){return S.find(cd,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(c){return Y()?c===si?ni:or:c===si?or:ni}_orderToDirection(c){return Y()?c===ni?si:To:c===ni?To:si}static jQueryInterface(c){return this.each(function(){const d=ii.getOrCreateInstance(this,c);if(typeof c=="number"){d.to(c);return}if(typeof c=="string"){if(d[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);d[c]()}})}}I.on(document,kE,HE,function(g){const c=S.getElementFromSelector(this);if(!c||!c.classList.contains(ad))return;g.preventDefault();const d=ii.getOrCreateInstance(c),y=this.getAttribute("data-bs-slide-to");if(y){d.to(y),d._maybeEnableCycle();return}if(b.getDataAttribute(this,"slide")==="next"){d.next(),d._maybeEnableCycle();return}d.prev(),d._maybeEnableCycle()}),I.on(window,xE,()=>{const g=S.find(jE);for(const c of g)ii.getOrCreateInstance(c)}),ee(ii);const GE="collapse",ar=".bs.collapse",YE=".data-api",qE=`show${ar}`,QE=`shown${ar}`,XE=`hide${ar}`,JE=`hidden${ar}`,ZE=`click${ar}${YE}`,Al="show",ri="collapse",Io="collapsing",eb="collapsed",tb=`:scope .${ri} .${ri}`,nb="collapse-horizontal",sb="width",ib="height",rb=".collapse.show, .collapse.collapsing",Ol='[data-bs-toggle="collapse"]',ob={parent:null,toggle:!0},ab={parent:"(null|element)",toggle:"boolean"};class oi extends D{constructor(c,d){super(c,d),this._isTransitioning=!1,this._triggerArray=[];const y=S.find(Ol);for(const P of y){const B=S.getSelectorFromElement(P),H=S.find(B).filter(ce=>ce===this._element);B!==null&&H.length&&this._triggerArray.push(P)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return ob}static get DefaultType(){return ab}static get NAME(){return GE}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let c=[];if(this._config.parent&&(c=this._getFirstLevelChildren(rb).filter(ce=>ce!==this._element).map(ce=>oi.getOrCreateInstance(ce,{toggle:!1}))),c.length&&c[0]._isTransitioning||I.trigger(this._element,qE).defaultPrevented)return;for(const ce of c)ce.hide();const y=this._getDimension();this._element.classList.remove(ri),this._element.classList.add(Io),this._element.style[y]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const P=()=>{this._isTransitioning=!1,this._element.classList.remove(Io),this._element.classList.add(ri,Al),this._element.style[y]="",I.trigger(this._element,QE)},H=`scroll${y[0].toUpperCase()+y.slice(1)}`;this._queueCallback(P,this._element,!0),this._element.style[y]=`${this._element[H]}px`}hide(){if(this._isTransitioning||!this._isShown()||I.trigger(this._element,XE).defaultPrevented)return;const d=this._getDimension();this._element.style[d]=`${this._element.getBoundingClientRect()[d]}px`,L(this._element),this._element.classList.add(Io),this._element.classList.remove(ri,Al);for(const P of this._triggerArray){const B=S.getElementFromSelector(P);B&&!this._isShown(B)&&this._addAriaAndCollapsedClass([P],!1)}this._isTransitioning=!0;const y=()=>{this._isTransitioning=!1,this._element.classList.remove(Io),this._element.classList.add(ri),I.trigger(this._element,JE)};this._element.style[d]="",this._queueCallback(y,this._element,!0)}_isShown(c=this._element){return c.classList.contains(Al)}_configAfterMerge(c){return c.toggle=!!c.toggle,c.parent=A(c.parent),c}_getDimension(){return this._element.classList.contains(nb)?sb:ib}_initializeChildren(){if(!this._config.parent)return;const c=this._getFirstLevelChildren(Ol);for(const d of c){const y=S.getElementFromSelector(d);y&&this._addAriaAndCollapsedClass([d],this._isShown(y))}}_getFirstLevelChildren(c){const d=S.find(tb,this._config.parent);return S.find(c,this._config.parent).filter(y=>!d.includes(y))}_addAriaAndCollapsedClass(c,d){if(c.length)for(const y of c)y.classList.toggle(eb,!d),y.setAttribute("aria-expanded",d)}static jQueryInterface(c){const d={};return typeof c=="string"&&/show|hide/.test(c)&&(d.toggle=!1),this.each(function(){const y=oi.getOrCreateInstance(this,d);if(typeof c=="string"){if(typeof y[c]>"u")throw new TypeError(`No method named "${c}"`);y[c]()}})}}I.on(document,ZE,Ol,function(g){(g.target.tagName==="A"||g.delegateTarget&&g.delegateTarget.tagName==="A")&&g.preventDefault();for(const c of S.getMultipleElementsFromSelector(this))oi.getOrCreateInstance(c,{toggle:!1}).toggle()}),ee(oi);const ud="dropdown",vs=".bs.dropdown",Nl=".data-api",lb="Escape",fd="Tab",cb="ArrowUp",dd="ArrowDown",ub=2,fb=`hide${vs}`,db=`hidden${vs}`,hb=`show${vs}`,pb=`shown${vs}`,hd=`click${vs}${Nl}`,pd=`keydown${vs}${Nl}`,mb=`keyup${vs}${Nl}`,ai="show",_b="dropup",gb="dropend",vb="dropstart",yb="dropup-center",Eb="dropdown-center",ys='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',bb=`${ys}.${ai}`,Ao=".dropdown-menu",wb=".navbar",Cb=".navbar-nav",Tb=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Sb=Y()?"top-end":"top-start",Ib=Y()?"top-start":"top-end",Ab=Y()?"bottom-end":"bottom-start",Ob=Y()?"bottom-start":"bottom-end",Nb=Y()?"left-start":"right-start",Rb=Y()?"right-start":"left-start",Pb="top",xb="bottom",kb={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Db={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class $t extends D{constructor(c,d){super(c,d),this._popper=null,this._parent=this._element.parentNode,this._menu=S.next(this._element,Ao)[0]||S.prev(this._element,Ao)[0]||S.findOne(Ao,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return kb}static get DefaultType(){return Db}static get NAME(){return ud}toggle(){return this._isShown()?this.hide():this.show()}show(){if(T(this._element)||this._isShown())return;const c={relatedTarget:this._element};if(!I.trigger(this._element,hb,c).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(Cb))for(const y of[].concat(...document.body.children))I.on(y,"mouseover",M);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(ai),this._element.classList.add(ai),I.trigger(this._element,pb,c)}}hide(){if(T(this._element)||!this._isShown())return;const c={relatedTarget:this._element};this._completeHide(c)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(c){if(!I.trigger(this._element,fb,c).defaultPrevented){if("ontouchstart"in document.documentElement)for(const y of[].concat(...document.body.children))I.off(y,"mouseover",M);this._popper&&this._popper.destroy(),this._menu.classList.remove(ai),this._element.classList.remove(ai),this._element.setAttribute("aria-expanded","false"),b.removeDataAttribute(this._menu,"popper"),I.trigger(this._element,db,c)}}_getConfig(c){if(c=super._getConfig(c),typeof c.reference=="object"&&!w(c.reference)&&typeof c.reference.getBoundingClientRect!="function")throw new TypeError(`${ud.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return c}_createPopper(){if(typeof i>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let c=this._element;this._config.reference==="parent"?c=this._parent:w(this._config.reference)?c=A(this._config.reference):typeof this._config.reference=="object"&&(c=this._config.reference);const d=this._getPopperConfig();this._popper=i.createPopper(c,this._menu,d)}_isShown(){return this._menu.classList.contains(ai)}_getPlacement(){const c=this._parent;if(c.classList.contains(gb))return Nb;if(c.classList.contains(vb))return Rb;if(c.classList.contains(yb))return Pb;if(c.classList.contains(Eb))return xb;const d=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return c.classList.contains(_b)?d?Ib:Sb:d?Ob:Ab}_detectNavbar(){return this._element.closest(wb)!==null}_getOffset(){const{offset:c}=this._config;return typeof c=="string"?c.split(",").map(d=>Number.parseInt(d,10)):typeof c=="function"?d=>c(d,this._element):c}_getPopperConfig(){const c={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(b.setDataAttribute(this._menu,"popper","static"),c.modifiers=[{name:"applyStyles",enabled:!1}]),{...c,...re(this._config.popperConfig,[c])}}_selectMenuItem({key:c,target:d}){const y=S.find(Tb,this._menu).filter(P=>C(P));y.length&&ve(y,d,c===dd,!y.includes(d)).focus()}static jQueryInterface(c){return this.each(function(){const d=$t.getOrCreateInstance(this,c);if(typeof c=="string"){if(typeof d[c]>"u")throw new TypeError(`No method named "${c}"`);d[c]()}})}static clearMenus(c){if(c.button===ub||c.type==="keyup"&&c.key!==fd)return;const d=S.find(bb);for(const y of d){const P=$t.getInstance(y);if(!P||P._config.autoClose===!1)continue;const B=c.composedPath(),H=B.includes(P._menu);if(B.includes(P._element)||P._config.autoClose==="inside"&&!H||P._config.autoClose==="outside"&&H||P._menu.contains(c.target)&&(c.type==="keyup"&&c.key===fd||/input|select|option|textarea|form/i.test(c.target.tagName)))continue;const ce={relatedTarget:P._element};c.type==="click"&&(ce.clickEvent=c),P._completeHide(ce)}}static dataApiKeydownHandler(c){const d=/input|textarea/i.test(c.target.tagName),y=c.key===lb,P=[cb,dd].includes(c.key);if(!P&&!y||d&&!y)return;c.preventDefault();const B=this.matches(ys)?this:S.prev(this,ys)[0]||S.next(this,ys)[0]||S.findOne(ys,c.delegateTarget.parentNode),H=$t.getOrCreateInstance(B);if(P){c.stopPropagation(),H.show(),H._selectMenuItem(c);return}H._isShown()&&(c.stopPropagation(),H.hide(),B.focus())}}I.on(document,pd,ys,$t.dataApiKeydownHandler),I.on(document,pd,Ao,$t.dataApiKeydownHandler),I.on(document,hd,$t.clearMenus),I.on(document,mb,$t.clearMenus),I.on(document,hd,ys,function(g){g.preventDefault(),$t.getOrCreateInstance(this).toggle()}),ee($t);const md="backdrop",Lb="fade",_d="show",gd=`mousedown.bs.${md}`,Mb={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Fb={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class vd extends k{constructor(c){super(),this._config=this._getConfig(c),this._isAppended=!1,this._element=null}static get Default(){return Mb}static get DefaultType(){return Fb}static get NAME(){return md}show(c){if(!this._config.isVisible){re(c);return}this._append();const d=this._getElement();this._config.isAnimated&&L(d),d.classList.add(_d),this._emulateAnimation(()=>{re(c)})}hide(c){if(!this._config.isVisible){re(c);return}this._getElement().classList.remove(_d),this._emulateAnimation(()=>{this.dispose(),re(c)})}dispose(){this._isAppended&&(I.off(this._element,gd),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const c=document.createElement("div");c.className=this._config.className,this._config.isAnimated&&c.classList.add(Lb),this._element=c}return this._element}_configAfterMerge(c){return c.rootElement=A(c.rootElement),c}_append(){if(this._isAppended)return;const c=this._getElement();this._config.rootElement.append(c),I.on(c,gd,()=>{re(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(c){Re(c,this._getElement(),this._config.isAnimated)}}const $b="focustrap",Oo=".bs.focustrap",Ub=`focusin${Oo}`,Wb=`keydown.tab${Oo}`,Vb="Tab",Hb="forward",yd="backward",jb={autofocus:!0,trapElement:null},Bb={autofocus:"boolean",trapElement:"element"};class Ed extends k{constructor(c){super(),this._config=this._getConfig(c),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return jb}static get DefaultType(){return Bb}static get NAME(){return $b}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),I.off(document,Oo),I.on(document,Ub,c=>this._handleFocusin(c)),I.on(document,Wb,c=>this._handleKeydown(c)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,I.off(document,Oo))}_handleFocusin(c){const{trapElement:d}=this._config;if(c.target===document||c.target===d||d.contains(c.target))return;const y=S.focusableChildren(d);y.length===0?d.focus():this._lastTabNavDirection===yd?y[y.length-1].focus():y[0].focus()}_handleKeydown(c){c.key===Vb&&(this._lastTabNavDirection=c.shiftKey?yd:Hb)}}const bd=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",wd=".sticky-top",No="padding-right",Cd="margin-right";class Rl{constructor(){this._element=document.body}getWidth(){const c=document.documentElement.clientWidth;return Math.abs(window.innerWidth-c)}hide(){const c=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,No,d=>d+c),this._setElementAttributes(bd,No,d=>d+c),this._setElementAttributes(wd,Cd,d=>d-c)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,No),this._resetElementAttributes(bd,No),this._resetElementAttributes(wd,Cd)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(c,d,y){const P=this.getWidth(),B=H=>{if(H!==this._element&&window.innerWidth>H.clientWidth+P)return;this._saveInitialAttribute(H,d);const ce=window.getComputedStyle(H).getPropertyValue(d);H.style.setProperty(d,`${y(Number.parseFloat(ce))}px`)};this._applyManipulationCallback(c,B)}_saveInitialAttribute(c,d){const y=c.style.getPropertyValue(d);y&&b.setDataAttribute(c,d,y)}_resetElementAttributes(c,d){const y=P=>{const B=b.getDataAttribute(P,d);if(B===null){P.style.removeProperty(d);return}b.removeDataAttribute(P,d),P.style.setProperty(d,B)};this._applyManipulationCallback(c,y)}_applyManipulationCallback(c,d){if(w(c)){d(c);return}for(const y of S.find(c,this._element))d(y)}}const zb="modal",Pt=".bs.modal",Kb=".data-api",Gb="Escape",Yb=`hide${Pt}`,qb=`hidePrevented${Pt}`,Td=`hidden${Pt}`,Sd=`show${Pt}`,Qb=`shown${Pt}`,Xb=`resize${Pt}`,Jb=`click.dismiss${Pt}`,Zb=`mousedown.dismiss${Pt}`,ew=`keydown.dismiss${Pt}`,tw=`click${Pt}${Kb}`,Id="modal-open",nw="fade",Ad="show",Pl="modal-static",sw=".modal.show",iw=".modal-dialog",rw=".modal-body",ow='[data-bs-toggle="modal"]',aw={backdrop:!0,focus:!0,keyboard:!0},lw={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Es extends D{constructor(c,d){super(c,d),this._dialog=S.findOne(iw,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Rl,this._addEventListeners()}static get Default(){return aw}static get DefaultType(){return lw}static get NAME(){return zb}toggle(c){return this._isShown?this.hide():this.show(c)}show(c){this._isShown||this._isTransitioning||I.trigger(this._element,Sd,{relatedTarget:c}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Id),this._adjustDialog(),this._backdrop.show(()=>this._showElement(c)))}hide(){!this._isShown||this._isTransitioning||I.trigger(this._element,Yb).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Ad),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){I.off(window,Pt),I.off(this._dialog,Pt),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new vd({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Ed({trapElement:this._element})}_showElement(c){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const d=S.findOne(rw,this._dialog);d&&(d.scrollTop=0),L(this._element),this._element.classList.add(Ad);const y=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,I.trigger(this._element,Qb,{relatedTarget:c})};this._queueCallback(y,this._dialog,this._isAnimated())}_addEventListeners(){I.on(this._element,ew,c=>{if(c.key===Gb){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),I.on(window,Xb,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),I.on(this._element,Zb,c=>{I.one(this._element,Jb,d=>{if(!(this._element!==c.target||this._element!==d.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Id),this._resetAdjustments(),this._scrollBar.reset(),I.trigger(this._element,Td)})}_isAnimated(){return this._element.classList.contains(nw)}_triggerBackdropTransition(){if(I.trigger(this._element,qb).defaultPrevented)return;const d=this._element.scrollHeight>document.documentElement.clientHeight,y=this._element.style.overflowY;y==="hidden"||this._element.classList.contains(Pl)||(d||(this._element.style.overflowY="hidden"),this._element.classList.add(Pl),this._queueCallback(()=>{this._element.classList.remove(Pl),this._queueCallback(()=>{this._element.style.overflowY=y},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const c=this._element.scrollHeight>document.documentElement.clientHeight,d=this._scrollBar.getWidth(),y=d>0;if(y&&!c){const P=Y()?"paddingLeft":"paddingRight";this._element.style[P]=`${d}px`}if(!y&&c){const P=Y()?"paddingRight":"paddingLeft";this._element.style[P]=`${d}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(c,d){return this.each(function(){const y=Es.getOrCreateInstance(this,c);if(typeof c=="string"){if(typeof y[c]>"u")throw new TypeError(`No method named "${c}"`);y[c](d)}})}}I.on(document,tw,ow,function(g){const c=S.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&g.preventDefault(),I.one(c,Sd,P=>{P.defaultPrevented||I.one(c,Td,()=>{C(this)&&this.focus()})});const d=S.findOne(sw);d&&Es.getInstance(d).hide(),Es.getOrCreateInstance(c).toggle(this)}),W(Es),ee(Es);const cw="offcanvas",un=".bs.offcanvas",Od=".data-api",uw=`load${un}${Od}`,fw="Escape",Nd="show",Rd="showing",Pd="hiding",dw="offcanvas-backdrop",xd=".offcanvas.show",hw=`show${un}`,pw=`shown${un}`,mw=`hide${un}`,kd=`hidePrevented${un}`,Dd=`hidden${un}`,_w=`resize${un}`,gw=`click${un}${Od}`,vw=`keydown.dismiss${un}`,yw='[data-bs-toggle="offcanvas"]',Ew={backdrop:!0,keyboard:!0,scroll:!1},bw={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class fn extends D{constructor(c,d){super(c,d),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Ew}static get DefaultType(){return bw}static get NAME(){return cw}toggle(c){return this._isShown?this.hide():this.show(c)}show(c){if(this._isShown||I.trigger(this._element,hw,{relatedTarget:c}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Rl().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Rd);const y=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(Nd),this._element.classList.remove(Rd),I.trigger(this._element,pw,{relatedTarget:c})};this._queueCallback(y,this._element,!0)}hide(){if(!this._isShown||I.trigger(this._element,mw).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Pd),this._backdrop.hide();const d=()=>{this._element.classList.remove(Nd,Pd),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Rl().reset(),I.trigger(this._element,Dd)};this._queueCallback(d,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const c=()=>{if(this._config.backdrop==="static"){I.trigger(this._element,kd);return}this.hide()},d=!!this._config.backdrop;return new vd({className:dw,isVisible:d,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:d?c:null})}_initializeFocusTrap(){return new Ed({trapElement:this._element})}_addEventListeners(){I.on(this._element,vw,c=>{if(c.key===fw){if(this._config.keyboard){this.hide();return}I.trigger(this._element,kd)}})}static jQueryInterface(c){return this.each(function(){const d=fn.getOrCreateInstance(this,c);if(typeof c=="string"){if(d[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);d[c](this)}})}}I.on(document,gw,yw,function(g){const c=S.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&g.preventDefault(),T(this))return;I.one(c,Dd,()=>{C(this)&&this.focus()});const d=S.findOne(xd);d&&d!==c&&fn.getInstance(d).hide(),fn.getOrCreateInstance(c).toggle(this)}),I.on(window,uw,()=>{for(const g of S.find(xd))fn.getOrCreateInstance(g).show()}),I.on(window,_w,()=>{for(const g of S.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(g).position!=="fixed"&&fn.getOrCreateInstance(g).hide()}),W(fn),ee(fn);const Ld={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},ww=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Cw=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Tw=(g,c)=>{const d=g.nodeName.toLowerCase();return c.includes(d)?ww.has(d)?!!Cw.test(g.nodeValue):!0:c.filter(y=>y instanceof RegExp).some(y=>y.test(d))};function Sw(g,c,d){if(!g.length)return g;if(d&&typeof d=="function")return d(g);const P=new window.DOMParser().parseFromString(g,"text/html"),B=[].concat(...P.body.querySelectorAll("*"));for(const H of B){const ce=H.nodeName.toLowerCase();if(!Object.keys(c).includes(ce)){H.remove();continue}const pt=[].concat(...H.attributes),xt=[].concat(c["*"]||[],c[ce]||[]);for(const ze of pt)Tw(ze,xt)||H.removeAttribute(ze.nodeName)}return P.body.innerHTML}const Iw="TemplateFactory",Aw={allowList:Ld,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Ow={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Nw={entry:"(string|element|function|null)",selector:"(string|element)"};class Rw extends k{constructor(c){super(),this._config=this._getConfig(c)}static get Default(){return Aw}static get DefaultType(){return Ow}static get NAME(){return Iw}getContent(){return Object.values(this._config.content).map(c=>this._resolvePossibleFunction(c)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(c){return this._checkContent(c),this._config.content={...this._config.content,...c},this}toHtml(){const c=document.createElement("div");c.innerHTML=this._maybeSanitize(this._config.template);for(const[P,B]of Object.entries(this._config.content))this._setContent(c,B,P);const d=c.children[0],y=this._resolvePossibleFunction(this._config.extraClass);return y&&d.classList.add(...y.split(" ")),d}_typeCheckConfig(c){super._typeCheckConfig(c),this._checkContent(c.content)}_checkContent(c){for(const[d,y]of Object.entries(c))super._typeCheckConfig({selector:d,entry:y},Nw)}_setContent(c,d,y){const P=S.findOne(y,c);if(P){if(d=this._resolvePossibleFunction(d),!d){P.remove();return}if(w(d)){this._putElementInTemplate(A(d),P);return}if(this._config.html){P.innerHTML=this._maybeSanitize(d);return}P.textContent=d}}_maybeSanitize(c){return this._config.sanitize?Sw(c,this._config.allowList,this._config.sanitizeFn):c}_resolvePossibleFunction(c){return re(c,[this])}_putElementInTemplate(c,d){if(this._config.html){d.innerHTML="",d.append(c);return}d.textContent=c.textContent}}const Pw="tooltip",xw=new Set(["sanitize","allowList","sanitizeFn"]),xl="fade",kw="modal",Ro="show",Dw=".tooltip-inner",Md=`.${kw}`,Fd="hide.bs.modal",lr="hover",kl="focus",Lw="click",Mw="manual",Fw="hide",$w="hidden",Uw="show",Ww="shown",Vw="inserted",Hw="click",jw="focusin",Bw="focusout",zw="mouseenter",Kw="mouseleave",Gw={AUTO:"auto",TOP:"top",RIGHT:Y()?"left":"right",BOTTOM:"bottom",LEFT:Y()?"right":"left"},Yw={allowList:Ld,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},qw={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class bs extends D{constructor(c,d){if(typeof i>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(c,d),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Yw}static get DefaultType(){return qw}static get NAME(){return Pw}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),I.off(this._element.closest(Md),Fd,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const c=I.trigger(this._element,this.constructor.eventName(Uw)),y=(x(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(c.defaultPrevented||!y)return;this._disposePopper();const P=this._getTipElement();this._element.setAttribute("aria-describedby",P.getAttribute("id"));const{container:B}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(B.append(P),I.trigger(this._element,this.constructor.eventName(Vw))),this._popper=this._createPopper(P),P.classList.add(Ro),"ontouchstart"in document.documentElement)for(const ce of[].concat(...document.body.children))I.on(ce,"mouseover",M);const H=()=>{I.trigger(this._element,this.constructor.eventName(Ww)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(H,this.tip,this._isAnimated())}hide(){if(!this._isShown()||I.trigger(this._element,this.constructor.eventName(Fw)).defaultPrevented)return;if(this._getTipElement().classList.remove(Ro),"ontouchstart"in document.documentElement)for(const P of[].concat(...document.body.children))I.off(P,"mouseover",M);this._activeTrigger[Lw]=!1,this._activeTrigger[kl]=!1,this._activeTrigger[lr]=!1,this._isHovered=null;const y=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),I.trigger(this._element,this.constructor.eventName($w)))};this._queueCallback(y,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(c){const d=this._getTemplateFactory(c).toHtml();if(!d)return null;d.classList.remove(xl,Ro),d.classList.add(`bs-${this.constructor.NAME}-auto`);const y=p(this.constructor.NAME).toString();return d.setAttribute("id",y),this._isAnimated()&&d.classList.add(xl),d}setContent(c){this._newContent=c,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(c){return this._templateFactory?this._templateFactory.changeContent(c):this._templateFactory=new Rw({...this._config,content:c,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[Dw]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(c){return this.constructor.getOrCreateInstance(c.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(xl)}_isShown(){return this.tip&&this.tip.classList.contains(Ro)}_createPopper(c){const d=re(this._config.placement,[this,c,this._element]),y=Gw[d.toUpperCase()];return i.createPopper(this._element,c,this._getPopperConfig(y))}_getOffset(){const{offset:c}=this._config;return typeof c=="string"?c.split(",").map(d=>Number.parseInt(d,10)):typeof c=="function"?d=>c(d,this._element):c}_resolvePossibleFunction(c){return re(c,[this._element])}_getPopperConfig(c){const d={placement:c,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:y=>{this._getTipElement().setAttribute("data-popper-placement",y.state.placement)}}]};return{...d,...re(this._config.popperConfig,[d])}}_setListeners(){const c=this._config.trigger.split(" ");for(const d of c)if(d==="click")I.on(this._element,this.constructor.eventName(Hw),this._config.selector,y=>{this._initializeOnDelegatedTarget(y).toggle()});else if(d!==Mw){const y=d===lr?this.constructor.eventName(zw):this.constructor.eventName(jw),P=d===lr?this.constructor.eventName(Kw):this.constructor.eventName(Bw);I.on(this._element,y,this._config.selector,B=>{const H=this._initializeOnDelegatedTarget(B);H._activeTrigger[B.type==="focusin"?kl:lr]=!0,H._enter()}),I.on(this._element,P,this._config.selector,B=>{const H=this._initializeOnDelegatedTarget(B);H._activeTrigger[B.type==="focusout"?kl:lr]=H._element.contains(B.relatedTarget),H._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},I.on(this._element.closest(Md),Fd,this._hideModalHandler)}_fixTitle(){const c=this._element.getAttribute("title");c&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",c),this._element.setAttribute("data-bs-original-title",c),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(c,d){clearTimeout(this._timeout),this._timeout=setTimeout(c,d)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(c){const d=b.getDataAttributes(this._element);for(const y of Object.keys(d))xw.has(y)&&delete d[y];return c={...d,...typeof c=="object"&&c?c:{}},c=this._mergeConfigObj(c),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}_configAfterMerge(c){return c.container=c.container===!1?document.body:A(c.container),typeof c.delay=="number"&&(c.delay={show:c.delay,hide:c.delay}),typeof c.title=="number"&&(c.title=c.title.toString()),typeof c.content=="number"&&(c.content=c.content.toString()),c}_getDelegateConfig(){const c={};for(const[d,y]of Object.entries(this._config))this.constructor.Default[d]!==y&&(c[d]=y);return c.selector=!1,c.trigger="manual",c}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(c){return this.each(function(){const d=bs.getOrCreateInstance(this,c);if(typeof c=="string"){if(typeof d[c]>"u")throw new TypeError(`No method named "${c}"`);d[c]()}})}}ee(bs);const Qw="popover",Xw=".popover-header",Jw=".popover-body",Zw={...bs.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},e0={...bs.DefaultType,content:"(null|string|element|function)"};class Po extends bs{static get Default(){return Zw}static get DefaultType(){return e0}static get NAME(){return Qw}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Xw]:this._getTitle(),[Jw]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(c){return this.each(function(){const d=Po.getOrCreateInstance(this,c);if(typeof c=="string"){if(typeof d[c]>"u")throw new TypeError(`No method named "${c}"`);d[c]()}})}}ee(Po);const t0="scrollspy",Dl=".bs.scrollspy",n0=".data-api",s0=`activate${Dl}`,$d=`click${Dl}`,i0=`load${Dl}${n0}`,r0="dropdown-item",li="active",o0='[data-bs-spy="scroll"]',Ll="[href]",a0=".nav, .list-group",Ud=".nav-link",l0=`${Ud}, .nav-item > ${Ud}, .list-group-item`,c0=".dropdown",u0=".dropdown-toggle",f0={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},d0={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class cr extends D{constructor(c,d){super(c,d),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return f0}static get DefaultType(){return d0}static get NAME(){return t0}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const c of this._observableSections.values())this._observer.observe(c)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(c){return c.target=A(c.target)||document.body,c.rootMargin=c.offset?`${c.offset}px 0px -30%`:c.rootMargin,typeof c.threshold=="string"&&(c.threshold=c.threshold.split(",").map(d=>Number.parseFloat(d))),c}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(I.off(this._config.target,$d),I.on(this._config.target,$d,Ll,c=>{const d=this._observableSections.get(c.target.hash);if(d){c.preventDefault();const y=this._rootElement||window,P=d.offsetTop-this._element.offsetTop;if(y.scrollTo){y.scrollTo({top:P,behavior:"smooth"});return}y.scrollTop=P}}))}_getNewObserver(){const c={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(d=>this._observerCallback(d),c)}_observerCallback(c){const d=H=>this._targetLinks.get(`#${H.target.id}`),y=H=>{this._previousScrollData.visibleEntryTop=H.target.offsetTop,this._process(d(H))},P=(this._rootElement||document.documentElement).scrollTop,B=P>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=P;for(const H of c){if(!H.isIntersecting){this._activeTarget=null,this._clearActiveClass(d(H));continue}const ce=H.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(B&&ce){if(y(H),!P)return;continue}!B&&!ce&&y(H)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const c=S.find(Ll,this._config.target);for(const d of c){if(!d.hash||T(d))continue;const y=S.findOne(decodeURI(d.hash),this._element);C(y)&&(this._targetLinks.set(decodeURI(d.hash),d),this._observableSections.set(d.hash,y))}}_process(c){this._activeTarget!==c&&(this._clearActiveClass(this._config.target),this._activeTarget=c,c.classList.add(li),this._activateParents(c),I.trigger(this._element,s0,{relatedTarget:c}))}_activateParents(c){if(c.classList.contains(r0)){S.findOne(u0,c.closest(c0)).classList.add(li);return}for(const d of S.parents(c,a0))for(const y of S.prev(d,l0))y.classList.add(li)}_clearActiveClass(c){c.classList.remove(li);const d=S.find(`${Ll}.${li}`,c);for(const y of d)y.classList.remove(li)}static jQueryInterface(c){return this.each(function(){const d=cr.getOrCreateInstance(this,c);if(typeof c=="string"){if(d[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);d[c]()}})}}I.on(window,i0,()=>{for(const g of S.find(o0))cr.getOrCreateInstance(g)}),ee(cr);const h0="tab",ws=".bs.tab",p0=`hide${ws}`,m0=`hidden${ws}`,_0=`show${ws}`,g0=`shown${ws}`,v0=`click${ws}`,y0=`keydown${ws}`,E0=`load${ws}`,b0="ArrowLeft",Wd="ArrowRight",w0="ArrowUp",Vd="ArrowDown",Ml="Home",Hd="End",Cs="active",jd="fade",Fl="show",C0="dropdown",Bd=".dropdown-toggle",T0=".dropdown-menu",$l=`:not(${Bd})`,S0='.list-group, .nav, [role="tablist"]',I0=".nav-item, .list-group-item",A0=`.nav-link${$l}, .list-group-item${$l}, [role="tab"]${$l}`,zd='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Ul=`${A0}, ${zd}`,O0=`.${Cs}[data-bs-toggle="tab"], .${Cs}[data-bs-toggle="pill"], .${Cs}[data-bs-toggle="list"]`;class Ts extends D{constructor(c){super(c),this._parent=this._element.closest(S0),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),I.on(this._element,y0,d=>this._keydown(d)))}static get NAME(){return h0}show(){const c=this._element;if(this._elemIsActive(c))return;const d=this._getActiveElem(),y=d?I.trigger(d,p0,{relatedTarget:c}):null;I.trigger(c,_0,{relatedTarget:d}).defaultPrevented||y&&y.defaultPrevented||(this._deactivate(d,c),this._activate(c,d))}_activate(c,d){if(!c)return;c.classList.add(Cs),this._activate(S.getElementFromSelector(c));const y=()=>{if(c.getAttribute("role")!=="tab"){c.classList.add(Fl);return}c.removeAttribute("tabindex"),c.setAttribute("aria-selected",!0),this._toggleDropDown(c,!0),I.trigger(c,g0,{relatedTarget:d})};this._queueCallback(y,c,c.classList.contains(jd))}_deactivate(c,d){if(!c)return;c.classList.remove(Cs),c.blur(),this._deactivate(S.getElementFromSelector(c));const y=()=>{if(c.getAttribute("role")!=="tab"){c.classList.remove(Fl);return}c.setAttribute("aria-selected",!1),c.setAttribute("tabindex","-1"),this._toggleDropDown(c,!1),I.trigger(c,m0,{relatedTarget:d})};this._queueCallback(y,c,c.classList.contains(jd))}_keydown(c){if(![b0,Wd,w0,Vd,Ml,Hd].includes(c.key))return;c.stopPropagation(),c.preventDefault();const d=this._getChildren().filter(P=>!T(P));let y;if([Ml,Hd].includes(c.key))y=d[c.key===Ml?0:d.length-1];else{const P=[Wd,Vd].includes(c.key);y=ve(d,c.target,P,!0)}y&&(y.focus({preventScroll:!0}),Ts.getOrCreateInstance(y).show())}_getChildren(){return S.find(Ul,this._parent)}_getActiveElem(){return this._getChildren().find(c=>this._elemIsActive(c))||null}_setInitialAttributes(c,d){this._setAttributeIfNotExists(c,"role","tablist");for(const y of d)this._setInitialAttributesOnChild(y)}_setInitialAttributesOnChild(c){c=this._getInnerElement(c);const d=this._elemIsActive(c),y=this._getOuterElement(c);c.setAttribute("aria-selected",d),y!==c&&this._setAttributeIfNotExists(y,"role","presentation"),d||c.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(c,"role","tab"),this._setInitialAttributesOnTargetPanel(c)}_setInitialAttributesOnTargetPanel(c){const d=S.getElementFromSelector(c);d&&(this._setAttributeIfNotExists(d,"role","tabpanel"),c.id&&this._setAttributeIfNotExists(d,"aria-labelledby",`${c.id}`))}_toggleDropDown(c,d){const y=this._getOuterElement(c);if(!y.classList.contains(C0))return;const P=(B,H)=>{const ce=S.findOne(B,y);ce&&ce.classList.toggle(H,d)};P(Bd,Cs),P(T0,Fl),y.setAttribute("aria-expanded",d)}_setAttributeIfNotExists(c,d,y){c.hasAttribute(d)||c.setAttribute(d,y)}_elemIsActive(c){return c.classList.contains(Cs)}_getInnerElement(c){return c.matches(Ul)?c:S.findOne(Ul,c)}_getOuterElement(c){return c.closest(I0)||c}static jQueryInterface(c){return this.each(function(){const d=Ts.getOrCreateInstance(this);if(typeof c=="string"){if(d[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);d[c]()}})}}I.on(document,v0,zd,function(g){["A","AREA"].includes(this.tagName)&&g.preventDefault(),!T(this)&&Ts.getOrCreateInstance(this).show()}),I.on(window,E0,()=>{for(const g of S.find(O0))Ts.getOrCreateInstance(g)}),ee(Ts);const N0="toast",Ln=".bs.toast",R0=`mouseover${Ln}`,P0=`mouseout${Ln}`,x0=`focusin${Ln}`,k0=`focusout${Ln}`,D0=`hide${Ln}`,L0=`hidden${Ln}`,M0=`show${Ln}`,F0=`shown${Ln}`,$0="fade",Kd="hide",xo="show",ko="showing",U0={animation:"boolean",autohide:"boolean",delay:"number"},W0={animation:!0,autohide:!0,delay:5e3};class ur extends D{constructor(c,d){super(c,d),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return W0}static get DefaultType(){return U0}static get NAME(){return N0}show(){if(I.trigger(this._element,M0).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add($0);const d=()=>{this._element.classList.remove(ko),I.trigger(this._element,F0),this._maybeScheduleHide()};this._element.classList.remove(Kd),L(this._element),this._element.classList.add(xo,ko),this._queueCallback(d,this._element,this._config.animation)}hide(){if(!this.isShown()||I.trigger(this._element,D0).defaultPrevented)return;const d=()=>{this._element.classList.add(Kd),this._element.classList.remove(ko,xo),I.trigger(this._element,L0)};this._element.classList.add(ko),this._queueCallback(d,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(xo),super.dispose()}isShown(){return this._element.classList.contains(xo)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(c,d){switch(c.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=d;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=d;break}}if(d){this._clearTimeout();return}const y=c.relatedTarget;this._element===y||this._element.contains(y)||this._maybeScheduleHide()}_setListeners(){I.on(this._element,R0,c=>this._onInteraction(c,!0)),I.on(this._element,P0,c=>this._onInteraction(c,!1)),I.on(this._element,x0,c=>this._onInteraction(c,!0)),I.on(this._element,k0,c=>this._onInteraction(c,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(c){return this.each(function(){const d=ur.getOrCreateInstance(this,c);if(typeof c=="string"){if(typeof d[c]>"u")throw new TypeError(`No method named "${c}"`);d[c](this)}})}}return W(ur),ee(ur),{Alert:pe,Button:et,Carousel:ii,Collapse:oi,Dropdown:$t,Modal:Es,Offcanvas:fn,Popover:Po,ScrollSpy:cr,Tab:Ts,Toast:ur,Tooltip:bs}})})(LL);aL.add(NL,xL,TL,wL,PL,IL,CL,RL,SL,AL,OL,bL);const Sl=cS(vI);Sl.component("font-awesome-icon",EL);Sl.use(pS());Sl.use(eo);Sl.mount("#app");
