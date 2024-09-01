(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function mu(t,e){const n=new Set(t.split(","));return s=>n.has(s)}const Pe={},gi=[],Dt=()=>{},HC=()=>!1,Ua=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),_u=t=>t.startsWith("onUpdate:"),st=Object.assign,gu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},jC=Object.prototype.hasOwnProperty,_e=(t,e)=>jC.call(t,e),Z=Array.isArray,vi=t=>to(t)==="[object Map]",Wa=t=>to(t)==="[object Set]",Kd=t=>to(t)==="[object Date]",re=t=>typeof t=="function",Be=t=>typeof t=="string",rn=t=>typeof t=="symbol",Oe=t=>t!==null&&typeof t=="object",xm=t=>(Oe(t)||re(t))&&re(t.then)&&re(t.catch),km=Object.prototype.toString,to=t=>km.call(t),BC=t=>to(t).slice(8,-1),Dm=t=>to(t)==="[object Object]",vu=t=>Be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,vr=mu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Va=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},zC=/-(\w)/g,Kt=Va(t=>t.replace(zC,(e,n)=>n?n.toUpperCase():"")),KC=/\B([A-Z])/g,ds=Va(t=>t.replace(KC,"-$1").toLowerCase()),Ha=Va(t=>t.charAt(0).toUpperCase()+t.slice(1)),$l=Va(t=>t?`on${Ha(t)}`:""),rs=(t,e)=>!Object.is(t,e),jo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Lm=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},ia=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Gd;const Mm=()=>Gd||(Gd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ja(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Be(s)?QC(s):ja(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(Be(t)||Oe(t))return t}const GC=/;(?![^(]*\))/g,YC=/:([^]+)/,qC=/\/\*[^]*?\*\//g;function QC(t){const e={};return t.replace(qC,"").split(GC).forEach(n=>{if(n){const s=n.split(YC);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function yu(t){let e="";if(Be(t))e=t;else if(Z(t))for(let n=0;n<t.length;n++){const s=yu(t[n]);s&&(e+=s+" ")}else if(Oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const XC="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",JC=mu(XC);function Fm(t){return!!t||t===""}function ZC(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Ba(t[s],e[s]);return n}function Ba(t,e){if(t===e)return!0;let n=Kd(t),s=Kd(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=rn(t),s=rn(e),n||s)return t===e;if(n=Z(t),s=Z(e),n||s)return n&&s?ZC(t,e):!1;if(n=Oe(t),s=Oe(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ba(t[o],e[o]))return!1}}return String(t)===String(e)}function e0(t,e){return t.findIndex(n=>Ba(n,e))}const $m=t=>!!(t&&t.__v_isRef===!0),kt=t=>Be(t)?t:t==null?"":Z(t)||Oe(t)&&(t.toString===km||!re(t.toString))?$m(t)?kt(t.value):JSON.stringify(t,Um,2):String(t),Um=(t,e)=>$m(e)?Um(t,e.value):vi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Ul(s,r)+" =>"]=i,n),{})}:Wa(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ul(n))}:rn(e)?Ul(e):Oe(e)&&!Z(e)&&!Dm(e)?String(e):e,Ul=(t,e="")=>{var n;return rn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wt;class Wm{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Wt,!e&&Wt&&(this.index=(Wt.scopes||(Wt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Wt;try{return Wt=this,e()}finally{Wt=n}}}on(){Wt=this}off(){Wt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function t0(t){return new Wm(t)}function n0(t,e=Wt){e&&e.active&&e.effects.push(t)}function s0(){return Wt}let Ms;class Eu{constructor(e,n,s,i){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,n0(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,hs();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(i0(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),ps()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Jn,n=Ms;try{return Jn=!0,Ms=this,this._runnings++,Yd(this),this.fn()}finally{qd(this),this._runnings--,Ms=n,Jn=e}}stop(){this.active&&(Yd(this),qd(this),this.onStop&&this.onStop(),this.active=!1)}}function i0(t){return t.value}function Yd(t){t._trackId++,t._depsLength=0}function qd(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Vm(t.deps[e],t);t.deps.length=t._depsLength}}function Vm(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Jn=!0,pc=0;const Hm=[];function hs(){Hm.push(Jn),Jn=!1}function ps(){const t=Hm.pop();Jn=t===void 0?!0:t}function bu(){pc++}function wu(){for(pc--;!pc&&mc.length;)mc.shift()()}function jm(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&Vm(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const mc=[];function Bm(t,e,n){bu();for(const s of t.keys()){let i;s._dirtyLevel<e&&(i??(i=t.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=e),s._shouldSchedule&&(i??(i=t.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&mc.push(s.scheduler)))}wu()}const zm=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},_c=new WeakMap,Fs=Symbol(""),gc=Symbol("");function vt(t,e,n){if(Jn&&Ms){let s=_c.get(t);s||_c.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=zm(()=>s.delete(n))),jm(Ms,i)}}function En(t,e,n,s,i,r){const o=_c.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Z(t)){const l=Number(s);o.forEach((u,f)=>{(f==="length"||!rn(f)&&f>=l)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Z(t)?vu(n)&&a.push(o.get("length")):(a.push(o.get(Fs)),vi(t)&&a.push(o.get(gc)));break;case"delete":Z(t)||(a.push(o.get(Fs)),vi(t)&&a.push(o.get(gc)));break;case"set":vi(t)&&a.push(o.get(Fs));break}bu();for(const l of a)l&&Bm(l,4);wu()}const r0=mu("__proto__,__v_isRef,__isVue"),Km=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(rn)),Qd=o0();function o0(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Ee(this);for(let r=0,o=this.length;r<o;r++)vt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(Ee)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){hs(),bu();const s=Ee(this)[e].apply(this,n);return wu(),ps(),s}}),t}function a0(t){rn(t)||(t=String(t));const e=Ee(this);return vt(e,"has",t),e.hasOwnProperty(t)}class Gm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?E0:Xm:r?Qm:qm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=Z(e);if(!i){if(o&&_e(Qd,n))return Reflect.get(Qd,n,s);if(n==="hasOwnProperty")return a0}const a=Reflect.get(e,n,s);return(rn(n)?Km.has(n):r0(n))||(i||vt(e,"get",n),r)?a:yt(a)?o&&vu(n)?a:a.value:Oe(a)?i?Zm(a):Ka(a):a}}class Ym extends Gm{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const l=Hs(r);if(!Ni(s)&&!Hs(s)&&(r=Ee(r),s=Ee(s)),!Z(e)&&yt(r)&&!yt(s))return l?!1:(r.value=s,!0)}const o=Z(e)&&vu(n)?Number(n)<e.length:_e(e,n),a=Reflect.set(e,n,s,i);return e===Ee(i)&&(o?rs(s,r)&&En(e,"set",n,s):En(e,"add",n,s)),a}deleteProperty(e,n){const s=_e(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&En(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!rn(n)||!Km.has(n))&&vt(e,"has",n),s}ownKeys(e){return vt(e,"iterate",Z(e)?"length":Fs),Reflect.ownKeys(e)}}class l0 extends Gm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const c0=new Ym,u0=new l0,f0=new Ym(!0);const Cu=t=>t,za=t=>Reflect.getPrototypeOf(t);function xo(t,e,n=!1,s=!1){t=t.__v_raw;const i=Ee(t),r=Ee(e);n||(rs(e,r)&&vt(i,"get",e),vt(i,"get",r));const{has:o}=za(i),a=s?Cu:n?Iu:Dr;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function ko(t,e=!1){const n=this.__v_raw,s=Ee(n),i=Ee(t);return e||(rs(t,i)&&vt(s,"has",t),vt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Do(t,e=!1){return t=t.__v_raw,!e&&vt(Ee(t),"iterate",Fs),Reflect.get(t,"size",t)}function Xd(t,e=!1){!e&&!Ni(t)&&!Hs(t)&&(t=Ee(t));const n=Ee(this);return za(n).has.call(n,t)||(n.add(t),En(n,"add",t,t)),this}function Jd(t,e,n=!1){!n&&!Ni(e)&&!Hs(e)&&(e=Ee(e));const s=Ee(this),{has:i,get:r}=za(s);let o=i.call(s,t);o||(t=Ee(t),o=i.call(s,t));const a=r.call(s,t);return s.set(t,e),o?rs(e,a)&&En(s,"set",t,e):En(s,"add",t,e),this}function Zd(t){const e=Ee(this),{has:n,get:s}=za(e);let i=n.call(e,t);i||(t=Ee(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&En(e,"delete",t,void 0),r}function eh(){const t=Ee(this),e=t.size!==0,n=t.clear();return e&&En(t,"clear",void 0,void 0),n}function Lo(t,e){return function(s,i){const r=this,o=r.__v_raw,a=Ee(o),l=e?Cu:t?Iu:Dr;return!t&&vt(a,"iterate",Fs),o.forEach((u,f)=>s.call(i,l(u),l(f),r))}}function Mo(t,e,n){return function(...s){const i=this.__v_raw,r=Ee(i),o=vi(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=i[t](...s),f=n?Cu:e?Iu:Dr;return!e&&vt(r,"iterate",l?gc:Fs),{next(){const{value:h,done:p}=u.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function Mn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function d0(){const t={get(r){return xo(this,r)},get size(){return Do(this)},has:ko,add:Xd,set:Jd,delete:Zd,clear:eh,forEach:Lo(!1,!1)},e={get(r){return xo(this,r,!1,!0)},get size(){return Do(this)},has:ko,add(r){return Xd.call(this,r,!0)},set(r,o){return Jd.call(this,r,o,!0)},delete:Zd,clear:eh,forEach:Lo(!1,!0)},n={get(r){return xo(this,r,!0)},get size(){return Do(this,!0)},has(r){return ko.call(this,r,!0)},add:Mn("add"),set:Mn("set"),delete:Mn("delete"),clear:Mn("clear"),forEach:Lo(!0,!1)},s={get(r){return xo(this,r,!0,!0)},get size(){return Do(this,!0)},has(r){return ko.call(this,r,!0)},add:Mn("add"),set:Mn("set"),delete:Mn("delete"),clear:Mn("clear"),forEach:Lo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Mo(r,!1,!1),n[r]=Mo(r,!0,!1),e[r]=Mo(r,!1,!0),s[r]=Mo(r,!0,!0)}),[t,n,e,s]}const[h0,p0,m0,_0]=d0();function Tu(t,e){const n=e?t?_0:m0:t?p0:h0;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(_e(n,i)&&i in s?n:s,i,r)}const g0={get:Tu(!1,!1)},v0={get:Tu(!1,!0)},y0={get:Tu(!0,!1)};const qm=new WeakMap,Qm=new WeakMap,Xm=new WeakMap,E0=new WeakMap;function b0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function w0(t){return t.__v_skip||!Object.isExtensible(t)?0:b0(BC(t))}function Ka(t){return Hs(t)?t:Su(t,!1,c0,g0,qm)}function Jm(t){return Su(t,!1,f0,v0,Qm)}function Zm(t){return Su(t,!0,u0,y0,Xm)}function Su(t,e,n,s,i){if(!Oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=w0(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function yr(t){return Hs(t)?yr(t.__v_raw):!!(t&&t.__v_isReactive)}function Hs(t){return!!(t&&t.__v_isReadonly)}function Ni(t){return!!(t&&t.__v_isShallow)}function e_(t){return t?!!t.__v_raw:!1}function Ee(t){const e=t&&t.__v_raw;return e?Ee(e):t}function t_(t){return Object.isExtensible(t)&&Lm(t,"__v_skip",!0),t}const Dr=t=>Oe(t)?Ka(t):t,Iu=t=>Oe(t)?Zm(t):t;class n_{constructor(e,n,s,i){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Eu(()=>e(this._value),()=>Bo(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=Ee(this);return(!e._cacheable||e.effect.dirty)&&rs(e._value,e._value=e.effect.run())&&Bo(e,4),s_(e),e.effect._dirtyLevel>=2&&Bo(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function C0(t,e,n=!1){let s,i;const r=re(t);return r?(s=t,i=Dt):(s=t.get,i=t.set),new n_(s,i,r||!i,n)}function s_(t){var e;Jn&&Ms&&(t=Ee(t),jm(Ms,(e=t.dep)!=null?e:t.dep=zm(()=>t.dep=void 0,t instanceof n_?t:void 0)))}function Bo(t,e=4,n,s){t=Ee(t);const i=t.dep;i&&Bm(i,e)}function yt(t){return!!(t&&t.__v_isRef===!0)}function De(t){return i_(t,!1)}function T0(t){return i_(t,!0)}function i_(t,e){return yt(t)?t:new S0(t,e)}class S0{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ee(e),this._value=n?e:Dr(e)}get value(){return s_(this),this._value}set value(e){const n=this.__v_isShallow||Ni(e)||Hs(e);e=n?e:Ee(e),rs(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:Dr(e),Bo(this,4))}}function jt(t){return yt(t)?t.value:t}const I0={get:(t,e,n)=>jt(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return yt(i)&&!yt(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function r_(t){return yr(t)?t:new Proxy(t,I0)}/**
* @vue/runtime-core v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zn(t,e,n,s){try{return s?t(...s):t()}catch(i){Ga(i,e,n)}}function Bt(t,e,n,s){if(re(t)){const i=Zn(t,e,n,s);return i&&xm(i)&&i.catch(r=>{Ga(r,e,n)}),i}if(Z(t)){const i=[];for(let r=0;r<t.length;r++)i.push(Bt(t[r],e,n,s));return i}}function Ga(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const u=r.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){hs(),Zn(l,null,10,[t,o,a]),ps();return}}A0(t,n,i,s)}function A0(t,e,n,s=!0){console.error(t)}let Lr=!1,vc=!1;const tt=[];let Jt=0;const yi=[];let Wn=null,Ns=0;const o_=Promise.resolve();let Au=null;function Ou(t){const e=Au||o_;return t?e.then(this?t.bind(this):t):e}function O0(t){let e=Jt+1,n=tt.length;for(;e<n;){const s=e+n>>>1,i=tt[s],r=Mr(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function Nu(t){(!tt.length||!tt.includes(t,Lr&&t.allowRecurse?Jt+1:Jt))&&(t.id==null?tt.push(t):tt.splice(O0(t.id),0,t),a_())}function a_(){!Lr&&!vc&&(vc=!0,Au=o_.then(c_))}function N0(t){const e=tt.indexOf(t);e>Jt&&tt.splice(e,1)}function R0(t){Z(t)?yi.push(...t):(!Wn||!Wn.includes(t,t.allowRecurse?Ns+1:Ns))&&yi.push(t),a_()}function th(t,e,n=Lr?Jt+1:0){for(;n<tt.length;n++){const s=tt[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;tt.splice(n,1),n--,s()}}}function l_(t){if(yi.length){const e=[...new Set(yi)].sort((n,s)=>Mr(n)-Mr(s));if(yi.length=0,Wn){Wn.push(...e);return}for(Wn=e,Ns=0;Ns<Wn.length;Ns++){const n=Wn[Ns];n.active!==!1&&n()}Wn=null,Ns=0}}const Mr=t=>t.id==null?1/0:t.id,P0=(t,e)=>{const n=Mr(t)-Mr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function c_(t){vc=!1,Lr=!0,tt.sort(P0);try{for(Jt=0;Jt<tt.length;Jt++){const e=tt[Jt];e&&e.active!==!1&&Zn(e,e.i,e.i?15:14)}}finally{Jt=0,tt.length=0,l_(),Lr=!1,Au=null,(tt.length||yi.length)&&c_()}}let bt=null,Ya=null;function ra(t){const e=bt;return bt=t,Ya=t&&t.type.__scopeId||null,e}function x0(t){Ya=t}function k0(){Ya=null}function oa(t,e=bt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&uh(-1);const r=ra(e);let o;try{o=t(...i)}finally{ra(r),s._d&&uh(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function pn(t,e){if(bt===null)return t;const n=Za(bt),s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,a,l=Pe]=e[i];r&&(re(r)&&(r={mounted:r,updated:r}),r.deep&&Bn(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Ss(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(hs(),Bt(l,n,8,[t.el,a,t,e]),ps())}}function u_(t,e){t.shapeFlag&6&&t.component?u_(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Ru(t,e){return re(t)?st({name:t.name},e,{setup:t}):t}const zo=t=>!!t.type.__asyncLoader,f_=t=>t.type.__isKeepAlive;function D0(t,e){d_(t,"a",e)}function L0(t,e){d_(t,"da",e)}function d_(t,e,n=nt){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(qa(e,s,n),n){let i=n.parent;for(;i&&i.parent;)f_(i.parent.vnode)&&M0(s,e,n,i),i=i.parent}}function M0(t,e,n,s){const i=qa(e,t,s,!0);h_(()=>{gu(s[e],i)},n)}function qa(t,e,n=nt,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{hs();const a=no(n),l=Bt(e,n,t,o);return a(),ps(),l});return s?i.unshift(r):i.push(r),r}}const Rn=t=>(e,n=nt)=>{(!Ja||t==="sp")&&qa(t,(...s)=>e(...s),n)},F0=Rn("bm"),Pu=Rn("m"),$0=Rn("bu"),U0=Rn("u"),W0=Rn("bum"),h_=Rn("um"),V0=Rn("sp"),H0=Rn("rtg"),j0=Rn("rtc");function B0(t,e=nt){qa("ec",t,e)}const p_="components";function m_(t,e){return K0(p_,t,!0,e)||t}const z0=Symbol.for("v-ndc");function K0(t,e,n=!0,s=!1){const i=bt||nt;if(i){const r=i.type;if(t===p_){const a=MT(r,!1);if(a&&(a===e||a===Kt(e)||a===Ha(Kt(e))))return r}const o=nh(i[t]||r[t],e)||nh(i.appContext[t],e);return!o&&s?r:o}}function nh(t,e){return t&&(t[e]||t[Kt(e)]||t[Ha(Kt(e))])}function G0(t,e,n,s){let i;const r=n;if(Z(t)||Be(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r)}else if(Oe(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const u=o[a];i[a]=e(t[u],u,a,r)}}else i=[];return i}const yc=t=>t?M_(t)?Za(t):yc(t.parent):null,Er=st(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>yc(t.parent),$root:t=>yc(t.root),$emit:t=>t.emit,$options:t=>xu(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Nu(t.update)}),$nextTick:t=>t.n||(t.n=Ou.bind(t.proxy)),$watch:t=>_T.bind(t)}),Wl=(t,e)=>t!==Pe&&!t.__isScriptSetup&&_e(t,e),Y0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Wl(s,e))return o[e]=1,s[e];if(i!==Pe&&_e(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&_e(u,e))return o[e]=3,r[e];if(n!==Pe&&_e(n,e))return o[e]=4,n[e];Ec&&(o[e]=0)}}const f=Er[e];let h,p;if(f)return e==="$attrs"&&vt(t.attrs,"get",""),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Pe&&_e(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,_e(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Wl(i,e)?(i[e]=n,!0):s!==Pe&&_e(s,e)?(s[e]=n,!0):_e(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Pe&&_e(t,o)||Wl(e,o)||(a=r[0])&&_e(a,o)||_e(s,o)||_e(Er,o)||_e(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:_e(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function sh(t){return Z(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ec=!0;function q0(t){const e=xu(t),n=t.proxy,s=t.ctx;Ec=!1,e.beforeCreate&&ih(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:u,created:f,beforeMount:h,mounted:p,beforeUpdate:_,updated:b,activated:T,deactivated:O,beforeDestroy:S,beforeUnmount:E,destroyed:C,unmounted:N,render:R,renderTracked:D,renderTriggered:K,errorCaptured:ae,serverPrefetch:te,expose:se,inheritAttrs:le,components:Le,directives:ve,filters:it}=e;if(u&&Q0(u,s,null),o)for(const ie in o){const ue=o[ie];re(ue)&&(s[ie]=ue.bind(n))}if(i){const ie=i.call(n,n);Oe(ie)&&(t.data=Ka(ie))}if(Ec=!0,r)for(const ie in r){const ue=r[ie],Ue=re(ue)?ue.bind(n,n):re(ue.get)?ue.get.bind(n,n):Dt,rt=!re(ue)&&re(ue.set)?ue.set.bind(n):Dt,qe=Ve({get:Ue,set:rt});Object.defineProperty(s,ie,{enumerable:!0,configurable:!0,get:()=>qe.value,set:ke=>qe.value=ke})}if(a)for(const ie in a)__(a[ie],s,n,ie);if(l){const ie=re(l)?l.call(n):l;Reflect.ownKeys(ie).forEach(ue=>{Ko(ue,ie[ue])})}f&&ih(f,t,"c");function me(ie,ue){Z(ue)?ue.forEach(Ue=>ie(Ue.bind(n))):ue&&ie(ue.bind(n))}if(me(F0,h),me(Pu,p),me($0,_),me(U0,b),me(D0,T),me(L0,O),me(B0,ae),me(j0,D),me(H0,K),me(W0,E),me(h_,N),me(V0,te),Z(se))if(se.length){const ie=t.exposed||(t.exposed={});se.forEach(ue=>{Object.defineProperty(ie,ue,{get:()=>n[ue],set:Ue=>n[ue]=Ue})})}else t.exposed||(t.exposed={});R&&t.render===Dt&&(t.render=R),le!=null&&(t.inheritAttrs=le),Le&&(t.components=Le),ve&&(t.directives=ve)}function Q0(t,e,n=Dt){Z(t)&&(t=bc(t));for(const s in t){const i=t[s];let r;Oe(i)?"default"in i?r=bn(i.from||s,i.default,!0):r=bn(i.from||s):r=bn(i),yt(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function ih(t,e,n){Bt(Z(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function __(t,e,n,s){const i=s.includes(".")?R_(n,s):()=>n[s];if(Be(t)){const r=e[t];re(r)&&bi(i,r)}else if(re(t))bi(i,t.bind(n));else if(Oe(t))if(Z(t))t.forEach(r=>__(r,e,n,s));else{const r=re(t.handler)?t.handler.bind(n):e[t.handler];re(r)&&bi(i,r,t)}}function xu(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(u=>aa(l,u,o,!0)),aa(l,e,o)),Oe(e)&&r.set(e,l),l}function aa(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&aa(t,r,n,!0),i&&i.forEach(o=>aa(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=X0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const X0={data:rh,props:oh,emits:oh,methods:mr,computed:mr,beforeCreate:lt,created:lt,beforeMount:lt,mounted:lt,beforeUpdate:lt,updated:lt,beforeDestroy:lt,beforeUnmount:lt,destroyed:lt,unmounted:lt,activated:lt,deactivated:lt,errorCaptured:lt,serverPrefetch:lt,components:mr,directives:mr,watch:Z0,provide:rh,inject:J0};function rh(t,e){return e?t?function(){return st(re(t)?t.call(this,this):t,re(e)?e.call(this,this):e)}:e:t}function J0(t,e){return mr(bc(t),bc(e))}function bc(t){if(Z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function lt(t,e){return t?[...new Set([].concat(t,e))]:e}function mr(t,e){return t?st(Object.create(null),t,e):e}function oh(t,e){return t?Z(t)&&Z(e)?[...new Set([...t,...e])]:st(Object.create(null),sh(t),sh(e??{})):e}function Z0(t,e){if(!t)return e;if(!e)return t;const n=st(Object.create(null),t);for(const s in e)n[s]=lt(t[s],e[s]);return n}function g_(){return{app:null,config:{isNativeTag:HC,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let eT=0;function tT(t,e){return function(s,i=null){re(s)||(s=st({},s)),i!=null&&!Oe(i)&&(i=null);const r=g_(),o=new WeakSet;let a=!1;const l=r.app={_uid:eT++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:$T,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&re(u.install)?(o.add(u),u.install(l,...f)):re(u)&&(o.add(u),u(l,...f))),l},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),l},component(u,f){return f?(r.components[u]=f,l):r.components[u]},directive(u,f){return f?(r.directives[u]=f,l):r.directives[u]},mount(u,f,h){if(!a){const p=Se(s,i);return p.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),f&&e?e(p,u):t(p,u,h),a=!0,l._container=u,u.__vue_app__=l,Za(p.component)}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,f){return r.provides[u]=f,l},runWithContext(u){const f=Ei;Ei=l;try{return u()}finally{Ei=f}}};return l}}let Ei=null;function Ko(t,e){if(nt){let n=nt.provides;const s=nt.parent&&nt.parent.provides;s===n&&(n=nt.provides=Object.create(s)),n[t]=e}}function bn(t,e,n=!1){const s=nt||bt;if(s||Ei){const i=Ei?Ei._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&re(e)?e.call(s&&s.proxy):e}}const v_={},y_=()=>Object.create(v_),E_=t=>Object.getPrototypeOf(t)===v_;function nT(t,e,n,s=!1){const i={},r=y_();t.propsDefaults=Object.create(null),b_(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Jm(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function sT(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=Ee(i),[l]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(Qa(t.emitsOptions,p))continue;const _=e[p];if(l)if(_e(r,p))_!==r[p]&&(r[p]=_,u=!0);else{const b=Kt(p);i[b]=wc(l,a,b,_,t,!1)}else _!==r[p]&&(r[p]=_,u=!0)}}}else{b_(t,e,i,r)&&(u=!0);let f;for(const h in a)(!e||!_e(e,h)&&((f=ds(h))===h||!_e(e,f)))&&(l?n&&(n[h]!==void 0||n[f]!==void 0)&&(i[h]=wc(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!_e(e,h))&&(delete r[h],u=!0)}u&&En(t.attrs,"set","")}function b_(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(vr(l))continue;const u=e[l];let f;i&&_e(i,f=Kt(l))?!r||!r.includes(f)?n[f]=u:(a||(a={}))[f]=u:Qa(t.emitsOptions,l)||(!(l in s)||u!==s[l])&&(s[l]=u,o=!0)}if(r){const l=Ee(n),u=a||Pe;for(let f=0;f<r.length;f++){const h=r[f];n[h]=wc(i,l,h,u[h],t,!_e(u,h))}}return o}function wc(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=_e(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&re(l)){const{propsDefaults:u}=i;if(n in u)s=u[n];else{const f=no(i);s=u[n]=l.call(null,e),f()}}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===ds(n))&&(s=!0))}return s}const iT=new WeakMap;function w_(t,e,n=!1){const s=n?iT:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!re(t)){const f=h=>{l=!0;const[p,_]=w_(h,e,!0);st(o,p),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!r&&!l)return Oe(t)&&s.set(t,gi),gi;if(Z(r))for(let f=0;f<r.length;f++){const h=Kt(r[f]);ah(h)&&(o[h]=Pe)}else if(r)for(const f in r){const h=Kt(f);if(ah(h)){const p=r[f],_=o[h]=Z(p)||re(p)?{type:p}:st({},p),b=_.type;let T=!1,O=!0;if(Z(b))for(let S=0;S<b.length;++S){const E=b[S],C=re(E)&&E.name;if(C==="Boolean"){T=!0;break}else C==="String"&&(O=!1)}else T=re(b)&&b.name==="Boolean";_[0]=T,_[1]=O,(T||_e(_,"default"))&&a.push(h)}}const u=[o,a];return Oe(t)&&s.set(t,u),u}function ah(t){return t[0]!=="$"&&!vr(t)}const C_=t=>t[0]==="_"||t==="$stable",ku=t=>Z(t)?t.map(Xt):[Xt(t)],rT=(t,e,n)=>{if(e._n)return e;const s=oa((...i)=>ku(e(...i)),n);return s._c=!1,s},T_=(t,e,n)=>{const s=t._ctx;for(const i in t){if(C_(i))continue;const r=t[i];if(re(r))e[i]=rT(i,r,s);else if(r!=null){const o=ku(r);e[i]=()=>o}}},S_=(t,e)=>{const n=ku(e);t.slots.default=()=>n},I_=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},oT=(t,e,n)=>{const s=t.slots=y_();if(t.vnode.shapeFlag&32){const i=e._;i?(I_(s,e,n),n&&Lm(s,"_",i,!0)):T_(e,s)}else e&&S_(t,e)},aT=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Pe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:I_(i,e,n):(r=!e.$stable,T_(e,i)),o=e}else e&&(S_(t,e),o={default:1});if(r)for(const a in i)!C_(a)&&o[a]==null&&delete i[a]};function Cc(t,e,n,s,i=!1){if(Z(t)){t.forEach((p,_)=>Cc(p,e&&(Z(e)?e[_]:e),n,s,i));return}if(zo(s)&&!i)return;const r=s.shapeFlag&4?Za(s.component):s.el,o=i?null:r,{i:a,r:l}=t,u=e&&e.r,f=a.refs===Pe?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==l&&(Be(u)?(f[u]=null,_e(h,u)&&(h[u]=null)):yt(u)&&(u.value=null)),re(l))Zn(l,a,12,[o,f]);else{const p=Be(l),_=yt(l);if(p||_){const b=()=>{if(t.f){const T=p?_e(h,l)?h[l]:f[l]:l.value;i?Z(T)&&gu(T,r):Z(T)?T.includes(r)||T.push(r):p?(f[l]=[r],_e(h,l)&&(h[l]=f[l])):(l.value=[r],t.k&&(f[t.k]=l.value))}else p?(f[l]=o,_e(h,l)&&(h[l]=o)):_&&(l.value=o,t.k&&(f[t.k]=o))};o?(b.id=-1,_t(b,n)):b()}}}const lT=Symbol("_vte"),cT=t=>t.__isTeleport,_t=TT;function uT(t){return fT(t)}function fT(t,e){const n=Mm();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:u,setElementText:f,parentNode:h,nextSibling:p,setScopeId:_=Dt,insertStaticContent:b}=t,T=(m,v,w,L=null,P=null,M=null,j=void 0,I=null,U=!!v.dynamicChildren)=>{if(m===v)return;m&&!cr(m,v)&&(L=x(m),ke(m,P,M,!0),m=null),v.patchFlag===-2&&(U=!1,v.dynamicChildren=null);const{type:F,ref:G,shapeFlag:Q}=v;switch(F){case Xa:O(m,v,w,L);break;case js:S(m,v,w,L);break;case Go:m==null&&E(v,w,L,j);break;case Qt:Le(m,v,w,L,P,M,j,I,U);break;default:Q&1?R(m,v,w,L,P,M,j,I,U):Q&6?ve(m,v,w,L,P,M,j,I,U):(Q&64||Q&128)&&F.process(m,v,w,L,P,M,j,I,U,Y)}G!=null&&P&&Cc(G,m&&m.ref,M,v||m,!v)},O=(m,v,w,L)=>{if(m==null)s(v.el=a(v.children),w,L);else{const P=v.el=m.el;v.children!==m.children&&u(P,v.children)}},S=(m,v,w,L)=>{m==null?s(v.el=l(v.children||""),w,L):v.el=m.el},E=(m,v,w,L)=>{[m.el,m.anchor]=b(m.children,v,w,L,m.el,m.anchor)},C=({el:m,anchor:v},w,L)=>{let P;for(;m&&m!==v;)P=p(m),s(m,w,L),m=P;s(v,w,L)},N=({el:m,anchor:v})=>{let w;for(;m&&m!==v;)w=p(m),i(m),m=w;i(v)},R=(m,v,w,L,P,M,j,I,U)=>{v.type==="svg"?j="svg":v.type==="math"&&(j="mathml"),m==null?D(v,w,L,P,M,j,I,U):te(m,v,P,M,j,I,U)},D=(m,v,w,L,P,M,j,I)=>{let U,F;const{props:G,shapeFlag:Q,transition:X,dirs:ee}=m;if(U=m.el=o(m.type,M,G&&G.is,G),Q&8?f(U,m.children):Q&16&&ae(m.children,U,null,L,P,Vl(m,M),j,I),ee&&Ss(m,null,L,"created"),K(U,m,m.scopeId,j,L),G){for(const ye in G)ye!=="value"&&!vr(ye)&&r(U,ye,null,G[ye],M,L);"value"in G&&r(U,"value",null,G.value,M),(F=G.onVnodeBeforeMount)&&qt(F,L,m)}ee&&Ss(m,null,L,"beforeMount");const oe=dT(P,X);oe&&X.beforeEnter(U),s(U,v,w),((F=G&&G.onVnodeMounted)||oe||ee)&&_t(()=>{F&&qt(F,L,m),oe&&X.enter(U),ee&&Ss(m,null,L,"mounted")},P)},K=(m,v,w,L,P)=>{if(w&&_(m,w),L)for(let M=0;M<L.length;M++)_(m,L[M]);if(P){let M=P.subTree;if(v===M){const j=P.vnode;K(m,j,j.scopeId,j.slotScopeIds,P.parent)}}},ae=(m,v,w,L,P,M,j,I,U=0)=>{for(let F=U;F<m.length;F++){const G=m[F]=I?Hn(m[F]):Xt(m[F]);T(null,G,v,w,L,P,M,j,I)}},te=(m,v,w,L,P,M,j)=>{const I=v.el=m.el;let{patchFlag:U,dynamicChildren:F,dirs:G}=v;U|=m.patchFlag&16;const Q=m.props||Pe,X=v.props||Pe;let ee;if(w&&Is(w,!1),(ee=X.onVnodeBeforeUpdate)&&qt(ee,w,v,m),G&&Ss(v,m,w,"beforeUpdate"),w&&Is(w,!0),(Q.innerHTML&&X.innerHTML==null||Q.textContent&&X.textContent==null)&&f(I,""),F?se(m.dynamicChildren,F,I,w,L,Vl(v,P),M):j||ue(m,v,I,null,w,L,Vl(v,P),M,!1),U>0){if(U&16)le(I,Q,X,w,P);else if(U&2&&Q.class!==X.class&&r(I,"class",null,X.class,P),U&4&&r(I,"style",Q.style,X.style,P),U&8){const oe=v.dynamicProps;for(let ye=0;ye<oe.length;ye++){const pe=oe[ye],We=Q[pe],Rt=X[pe];(Rt!==We||pe==="value")&&r(I,pe,We,Rt,P,w)}}U&1&&m.children!==v.children&&f(I,v.children)}else!j&&F==null&&le(I,Q,X,w,P);((ee=X.onVnodeUpdated)||G)&&_t(()=>{ee&&qt(ee,w,v,m),G&&Ss(v,m,w,"updated")},L)},se=(m,v,w,L,P,M,j)=>{for(let I=0;I<v.length;I++){const U=m[I],F=v[I],G=U.el&&(U.type===Qt||!cr(U,F)||U.shapeFlag&70)?h(U.el):w;T(U,F,G,null,L,P,M,j,!0)}},le=(m,v,w,L,P)=>{if(v!==w){if(v!==Pe)for(const M in v)!vr(M)&&!(M in w)&&r(m,M,v[M],null,P,L);for(const M in w){if(vr(M))continue;const j=w[M],I=v[M];j!==I&&M!=="value"&&r(m,M,I,j,P,L)}"value"in w&&r(m,"value",v.value,w.value,P)}},Le=(m,v,w,L,P,M,j,I,U)=>{const F=v.el=m?m.el:a(""),G=v.anchor=m?m.anchor:a("");let{patchFlag:Q,dynamicChildren:X,slotScopeIds:ee}=v;ee&&(I=I?I.concat(ee):ee),m==null?(s(F,w,L),s(G,w,L),ae(v.children||[],w,G,P,M,j,I,U)):Q>0&&Q&64&&X&&m.dynamicChildren?(se(m.dynamicChildren,X,w,P,M,j,I),(v.key!=null||P&&v===P.subTree)&&A_(m,v,!0)):ue(m,v,w,G,P,M,j,I,U)},ve=(m,v,w,L,P,M,j,I,U)=>{v.slotScopeIds=I,m==null?v.shapeFlag&512?P.ctx.activate(v,w,L,j,U):it(v,w,L,P,M,j,U):Je(m,v,U)},it=(m,v,w,L,P,M,j)=>{const I=m.component=PT(m,L,P);if(f_(m)&&(I.ctx.renderer=Y),xT(I,!1,j),I.asyncDep){if(P&&P.registerDep(I,me,j),!m.el){const U=I.subTree=Se(js);S(null,U,v,w)}}else me(I,m,v,w,P,M,j)},Je=(m,v,w)=>{const L=v.component=m.component;if(bT(m,v,w))if(L.asyncDep&&!L.asyncResolved){ie(L,v,w);return}else L.next=v,N0(L.update),L.effect.dirty=!0,L.update();else v.el=m.el,L.vnode=v},me=(m,v,w,L,P,M,j)=>{const I=()=>{if(m.isMounted){let{next:G,bu:Q,u:X,parent:ee,vnode:oe}=m;{const kn=O_(m);if(kn){G&&(G.el=oe.el,ie(m,G,j)),kn.asyncDep.then(()=>{m.isUnmounted||I()});return}}let ye=G,pe;Is(m,!1),G?(G.el=oe.el,ie(m,G,j)):G=oe,Q&&jo(Q),(pe=G.props&&G.props.onVnodeBeforeUpdate)&&qt(pe,ee,G,oe),Is(m,!0);const We=Hl(m),Rt=m.subTree;m.subTree=We,T(Rt,We,h(Rt.el),x(Rt),m,P,M),G.el=We.el,ye===null&&wT(m,We.el),X&&_t(X,P),(pe=G.props&&G.props.onVnodeUpdated)&&_t(()=>qt(pe,ee,G,oe),P)}else{let G;const{el:Q,props:X}=v,{bm:ee,m:oe,parent:ye}=m,pe=zo(v);if(Is(m,!1),ee&&jo(ee),!pe&&(G=X&&X.onVnodeBeforeMount)&&qt(G,ye,v),Is(m,!0),Q&&be){const We=()=>{m.subTree=Hl(m),be(Q,m.subTree,m,P,null)};pe?v.type.__asyncLoader().then(()=>!m.isUnmounted&&We()):We()}else{const We=m.subTree=Hl(m);T(null,We,w,L,m,P,M),v.el=We.el}if(oe&&_t(oe,P),!pe&&(G=X&&X.onVnodeMounted)){const We=v;_t(()=>qt(G,ye,We),P)}(v.shapeFlag&256||ye&&zo(ye.vnode)&&ye.vnode.shapeFlag&256)&&m.a&&_t(m.a,P),m.isMounted=!0,v=w=L=null}},U=m.effect=new Eu(I,Dt,()=>Nu(F),m.scope),F=m.update=()=>{U.dirty&&U.run()};F.i=m,F.id=m.uid,Is(m,!0),F()},ie=(m,v,w)=>{v.component=m;const L=m.vnode.props;m.vnode=v,m.next=null,sT(m,v.props,L,w),aT(m,v.children,w),hs(),th(m),ps()},ue=(m,v,w,L,P,M,j,I,U=!1)=>{const F=m&&m.children,G=m?m.shapeFlag:0,Q=v.children,{patchFlag:X,shapeFlag:ee}=v;if(X>0){if(X&128){rt(F,Q,w,L,P,M,j,I,U);return}else if(X&256){Ue(F,Q,w,L,P,M,j,I,U);return}}ee&8?(G&16&&$e(F,P,M),Q!==F&&f(w,Q)):G&16?ee&16?rt(F,Q,w,L,P,M,j,I,U):$e(F,P,M,!0):(G&8&&f(w,""),ee&16&&ae(Q,w,L,P,M,j,I,U))},Ue=(m,v,w,L,P,M,j,I,U)=>{m=m||gi,v=v||gi;const F=m.length,G=v.length,Q=Math.min(F,G);let X;for(X=0;X<Q;X++){const ee=v[X]=U?Hn(v[X]):Xt(v[X]);T(m[X],ee,w,null,P,M,j,I,U)}F>G?$e(m,P,M,!0,!1,Q):ae(v,w,L,P,M,j,I,U,Q)},rt=(m,v,w,L,P,M,j,I,U)=>{let F=0;const G=v.length;let Q=m.length-1,X=G-1;for(;F<=Q&&F<=X;){const ee=m[F],oe=v[F]=U?Hn(v[F]):Xt(v[F]);if(cr(ee,oe))T(ee,oe,w,null,P,M,j,I,U);else break;F++}for(;F<=Q&&F<=X;){const ee=m[Q],oe=v[X]=U?Hn(v[X]):Xt(v[X]);if(cr(ee,oe))T(ee,oe,w,null,P,M,j,I,U);else break;Q--,X--}if(F>Q){if(F<=X){const ee=X+1,oe=ee<G?v[ee].el:L;for(;F<=X;)T(null,v[F]=U?Hn(v[F]):Xt(v[F]),w,oe,P,M,j,I,U),F++}}else if(F>X)for(;F<=Q;)ke(m[F],P,M,!0),F++;else{const ee=F,oe=F,ye=new Map;for(F=oe;F<=X;F++){const at=v[F]=U?Hn(v[F]):Xt(v[F]);at.key!=null&&ye.set(at.key,F)}let pe,We=0;const Rt=X-oe+1;let kn=!1,vo=0;const gs=new Array(Rt);for(F=0;F<Rt;F++)gs[F]=0;for(F=ee;F<=Q;F++){const at=m[F];if(We>=Rt){ke(at,P,M,!0);continue}let et;if(at.key!=null)et=ye.get(at.key);else for(pe=oe;pe<=X;pe++)if(gs[pe-oe]===0&&cr(at,v[pe])){et=pe;break}et===void 0?ke(at,P,M,!0):(gs[et-oe]=F+1,et>=vo?vo=et:kn=!0,T(at,v[et],w,null,P,M,j,I,U),We++)}const sr=kn?hT(gs):gi;for(pe=sr.length-1,F=Rt-1;F>=0;F--){const at=oe+F,et=v[at],yo=at+1<G?v[at+1].el:L;gs[F]===0?T(null,et,w,yo,P,M,j,I,U):kn&&(pe<0||F!==sr[pe]?qe(et,w,yo,2):pe--)}}},qe=(m,v,w,L,P=null)=>{const{el:M,type:j,transition:I,children:U,shapeFlag:F}=m;if(F&6){qe(m.component.subTree,v,w,L);return}if(F&128){m.suspense.move(v,w,L);return}if(F&64){j.move(m,v,w,Y);return}if(j===Qt){s(M,v,w);for(let Q=0;Q<U.length;Q++)qe(U[Q],v,w,L);s(m.anchor,v,w);return}if(j===Go){C(m,v,w);return}if(L!==2&&F&1&&I)if(L===0)I.beforeEnter(M),s(M,v,w),_t(()=>I.enter(M),P);else{const{leave:Q,delayLeave:X,afterLeave:ee}=I,oe=()=>s(M,v,w),ye=()=>{Q(M,()=>{oe(),ee&&ee()})};X?X(M,oe,ye):ye()}else s(M,v,w)},ke=(m,v,w,L=!1,P=!1)=>{const{type:M,props:j,ref:I,children:U,dynamicChildren:F,shapeFlag:G,patchFlag:Q,dirs:X,cacheIndex:ee}=m;if(Q===-2&&(P=!1),I!=null&&Cc(I,null,w,m,!0),ee!=null&&(v.renderCache[ee]=void 0),G&256){v.ctx.deactivate(m);return}const oe=G&1&&X,ye=!zo(m);let pe;if(ye&&(pe=j&&j.onVnodeBeforeUnmount)&&qt(pe,v,m),G&6)Ze(m.component,w,L);else{if(G&128){m.suspense.unmount(w,L);return}oe&&Ss(m,null,v,"beforeUnmount"),G&64?m.type.remove(m,v,w,Y,L):F&&!F.hasOnce&&(M!==Qt||Q>0&&Q&64)?$e(F,v,w,!1,!0):(M===Qt&&Q&384||!P&&G&16)&&$e(U,v,w),L&&Et(m)}(ye&&(pe=j&&j.onVnodeUnmounted)||oe)&&_t(()=>{pe&&qt(pe,v,m),oe&&Ss(m,null,v,"unmounted")},w)},Et=m=>{const{type:v,el:w,anchor:L,transition:P}=m;if(v===Qt){ot(w,L);return}if(v===Go){N(m);return}const M=()=>{i(w),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(m.shapeFlag&1&&P&&!P.persisted){const{leave:j,delayLeave:I}=P,U=()=>j(w,M);I?I(m.el,M,U):U()}else M()},ot=(m,v)=>{let w;for(;m!==v;)w=p(m),i(m),m=w;i(v)},Ze=(m,v,w)=>{const{bum:L,scope:P,update:M,subTree:j,um:I,m:U,a:F}=m;lh(U),lh(F),L&&jo(L),P.stop(),M&&(M.active=!1,ke(j,m,v,w)),I&&_t(I,v),_t(()=>{m.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},$e=(m,v,w,L=!1,P=!1,M=0)=>{for(let j=M;j<m.length;j++)ke(m[j],v,w,L,P)},x=m=>{if(m.shapeFlag&6)return x(m.component.subTree);if(m.shapeFlag&128)return m.suspense.next();const v=p(m.anchor||m.el),w=v&&v[lT];return w?p(w):v};let B=!1;const z=(m,v,w)=>{m==null?v._vnode&&ke(v._vnode,null,null,!0):T(v._vnode||null,m,v,null,null,null,w),v._vnode=m,B||(B=!0,th(),l_(),B=!1)},Y={p:T,um:ke,m:qe,r:Et,mt:it,mc:ae,pc:ue,pbc:se,n:x,o:t};let A,be;return{render:z,hydrate:A,createApp:tT(z,A)}}function Vl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Is({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function dT(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function A_(t,e,n=!1){const s=t.children,i=e.children;if(Z(s)&&Z(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Hn(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&A_(o,a)),a.type===Xa&&(a.el=o.el)}}function hT(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const u=t[s];if(u!==0){if(i=n[n.length-1],t[i]<u){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<u?r=a+1:o=a;u<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function O_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:O_(e)}function lh(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const pT=Symbol.for("v-scx"),mT=()=>bn(pT),Fo={};function bi(t,e,n){return N_(t,e,n)}function N_(t,e,{immediate:n,deep:s,flush:i,once:r,onTrack:o,onTrigger:a}=Pe){if(e&&r){const D=e;e=(...K)=>{D(...K),R()}}const l=nt,u=D=>s===!0?D:Bn(D,s===!1?1:void 0);let f,h=!1,p=!1;if(yt(t)?(f=()=>t.value,h=Ni(t)):yr(t)?(f=()=>u(t),h=!0):Z(t)?(p=!0,h=t.some(D=>yr(D)||Ni(D)),f=()=>t.map(D=>{if(yt(D))return D.value;if(yr(D))return u(D);if(re(D))return Zn(D,l,2)})):re(t)?e?f=()=>Zn(t,l,2):f=()=>(_&&_(),Bt(t,l,3,[b])):f=Dt,e&&s){const D=f;f=()=>Bn(D())}let _,b=D=>{_=C.onStop=()=>{Zn(D,l,4),_=C.onStop=void 0}},T;if(Ja)if(b=Dt,e?n&&Bt(e,l,3,[f(),p?[]:void 0,b]):f(),i==="sync"){const D=mT();T=D.__watcherHandles||(D.__watcherHandles=[])}else return Dt;let O=p?new Array(t.length).fill(Fo):Fo;const S=()=>{if(!(!C.active||!C.dirty))if(e){const D=C.run();(s||h||(p?D.some((K,ae)=>rs(K,O[ae])):rs(D,O)))&&(_&&_(),Bt(e,l,3,[D,O===Fo?void 0:p&&O[0]===Fo?[]:O,b]),O=D)}else C.run()};S.allowRecurse=!!e;let E;i==="sync"?E=S:i==="post"?E=()=>_t(S,l&&l.suspense):(S.pre=!0,l&&(S.id=l.uid),E=()=>Nu(S));const C=new Eu(f,Dt,E),N=s0(),R=()=>{C.stop(),N&&gu(N.effects,C)};return e?n?S():O=C.run():i==="post"?_t(C.run.bind(C),l&&l.suspense):C.run(),T&&T.push(R),R}function _T(t,e,n){const s=this.proxy,i=Be(t)?t.includes(".")?R_(s,t):()=>s[t]:t.bind(s,s);let r;re(e)?r=e:(r=e.handler,n=e);const o=no(this),a=N_(i,r.bind(s),n);return o(),a}function R_(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Bn(t,e=1/0,n){if(e<=0||!Oe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,yt(t))Bn(t.value,e,n);else if(Z(t))for(let s=0;s<t.length;s++)Bn(t[s],e,n);else if(Wa(t)||vi(t))t.forEach(s=>{Bn(s,e,n)});else if(Dm(t)){for(const s in t)Bn(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Bn(t[s],e,n)}return t}const gT=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Kt(e)}Modifiers`]||t[`${ds(e)}Modifiers`];function vT(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Pe;let i=n;const r=e.startsWith("update:"),o=r&&gT(s,e.slice(7));o&&(o.trim&&(i=n.map(f=>Be(f)?f.trim():f)),o.number&&(i=n.map(ia)));let a,l=s[a=$l(e)]||s[a=$l(Kt(e))];!l&&r&&(l=s[a=$l(ds(e))]),l&&Bt(l,t,6,i);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Bt(u,t,6,i)}}function P_(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!re(t)){const l=u=>{const f=P_(u,e,!0);f&&(a=!0,st(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Oe(t)&&s.set(t,null),null):(Z(r)?r.forEach(l=>o[l]=null):st(o,r),Oe(t)&&s.set(t,o),o)}function Qa(t,e){return!t||!Ua(e)?!1:(e=e.slice(2).replace(/Once$/,""),_e(t,e[0].toLowerCase()+e.slice(1))||_e(t,ds(e))||_e(t,e))}function Hl(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:u,renderCache:f,props:h,data:p,setupState:_,ctx:b,inheritAttrs:T}=t,O=ra(t);let S,E;try{if(n.shapeFlag&4){const N=i||s,R=N;S=Xt(u.call(R,N,f,h,_,p,b)),E=a}else{const N=e;S=Xt(N.length>1?N(h,{attrs:a,slots:o,emit:l}):N(h,null)),E=e.props?a:yT(a)}}catch(N){br.length=0,Ga(N,t,1),S=Se(js)}let C=S;if(E&&T!==!1){const N=Object.keys(E),{shapeFlag:R}=C;N.length&&R&7&&(r&&N.some(_u)&&(E=ET(E,r)),C=Ri(C,E,!1,!0))}return n.dirs&&(C=Ri(C,null,!1,!0),C.dirs=C.dirs?C.dirs.concat(n.dirs):n.dirs),n.transition&&(C.transition=n.transition),S=C,ra(O),S}const yT=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ua(n))&&((e||(e={}))[n]=t[n]);return e},ET=(t,e)=>{const n={};for(const s in t)(!_u(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function bT(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,u=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?ch(s,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==s[p]&&!Qa(u,p))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?ch(s,o,u):!0:!!o;return!1}function ch(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Qa(n,r))return!0}return!1}function wT({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const CT=t=>t.__isSuspense;function TT(t,e){e&&e.pendingBranch?Z(t)?e.effects.push(...t):e.effects.push(t):R0(t)}const Qt=Symbol.for("v-fgt"),Xa=Symbol.for("v-txt"),js=Symbol.for("v-cmt"),Go=Symbol.for("v-stc"),br=[];let wt=null;function Re(t=!1){br.push(wt=t?null:[])}function ST(){br.pop(),wt=br[br.length-1]||null}let Fr=1;function uh(t){Fr+=t,t<0&&wt&&(wt.hasOnce=!0)}function x_(t){return t.dynamicChildren=Fr>0?wt||gi:null,ST(),Fr>0&&wt&&wt.push(t),t}function Ke(t,e,n,s,i,r){return x_($(t,e,n,s,i,r,!0))}function hi(t,e,n,s,i){return x_(Se(t,e,n,s,i,!0))}function Tc(t){return t?t.__v_isVNode===!0:!1}function cr(t,e){return t.type===e.type&&t.key===e.key}const k_=({key:t})=>t??null,Yo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Be(t)||yt(t)||re(t)?{i:bt,r:t,k:e,f:!!n}:t:null);function $(t,e=null,n=null,s=0,i=null,r=t===Qt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&k_(e),ref:e&&Yo(e),scopeId:Ya,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:bt};return a?(Du(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Be(n)?8:16),Fr>0&&!o&&wt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&wt.push(l),l}const Se=IT;function IT(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===z0)&&(t=js),Tc(t)){const a=Ri(t,e,!0);return n&&Du(a,n),Fr>0&&!r&&wt&&(a.shapeFlag&6?wt[wt.indexOf(t)]=a:wt.push(a)),a.patchFlag=-2,a}if(FT(t)&&(t=t.__vccOpts),e){e=AT(e);let{class:a,style:l}=e;a&&!Be(a)&&(e.class=yu(a)),Oe(l)&&(e_(l)&&!Z(l)&&(l=st({},l)),e.style=ja(l))}const o=Be(t)?1:CT(t)?128:cT(t)?64:Oe(t)?4:re(t)?2:0;return $(t,e,n,s,i,o,r,!0)}function AT(t){return t?e_(t)||E_(t)?st({},t):t:null}function Ri(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,u=e?OT(i||{},e):i,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&k_(u),ref:e&&e.ref?n&&r?Z(r)?r.concat(Yo(e)):[r,Yo(e)]:Yo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ri(t.ssContent),ssFallback:t.ssFallback&&Ri(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&u_(f,l.clone(f)),f}function D_(t=" ",e=0){return Se(Xa,null,t,e)}function L_(t,e){const n=Se(Go,null,t);return n.staticCount=e,n}function Vn(t="",e=!1){return e?(Re(),hi(js,null,t)):Se(js,null,t)}function Xt(t){return t==null||typeof t=="boolean"?Se(js):Z(t)?Se(Qt,null,t.slice()):typeof t=="object"?Hn(t):Se(Xa,null,String(t))}function Hn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ri(t)}function Du(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(Z(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Du(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!E_(e)?e._ctx=bt:i===3&&bt&&(bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else re(e)?(e={default:e,_ctx:bt},n=32):(e=String(e),s&64?(n=16,e=[D_(e)]):n=8);t.children=e,t.shapeFlag|=n}function OT(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=yu([e.class,s.class]));else if(i==="style")e.style=ja([e.style,s.style]);else if(Ua(i)){const r=e[i],o=s[i];o&&r!==o&&!(Z(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function qt(t,e,n,s=null){Bt(t,e,7,[n,s])}const NT=g_();let RT=0;function PT(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||NT,r={uid:RT++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Wm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:w_(s,i),emitsOptions:P_(s,i),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:s.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=vT.bind(null,r),t.ce&&t.ce(r),r}let nt=null,la,Sc;{const t=Mm(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};la=e("__VUE_INSTANCE_SETTERS__",n=>nt=n),Sc=e("__VUE_SSR_SETTERS__",n=>Ja=n)}const no=t=>{const e=nt;return la(t),t.scope.on(),()=>{t.scope.off(),la(e)}},fh=()=>{nt&&nt.scope.off(),la(null)};function M_(t){return t.vnode.shapeFlag&4}let Ja=!1;function xT(t,e=!1,n=!1){e&&Sc(e);const{props:s,children:i}=t.vnode,r=M_(t);nT(t,s,r,e),oT(t,i,n);const o=r?kT(t,e):void 0;return e&&Sc(!1),o}function kT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Y0);const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?LT(t):null,r=no(t);hs();const o=Zn(s,t,0,[t.props,i]);if(ps(),r(),xm(o)){if(o.then(fh,fh),e)return o.then(a=>{dh(t,a,e)}).catch(a=>{Ga(a,t,0)});t.asyncDep=o}else dh(t,o,e)}else F_(t,e)}function dh(t,e,n){re(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Oe(e)&&(t.setupState=r_(e)),F_(t,n)}let hh;function F_(t,e,n){const s=t.type;if(!t.render){if(!e&&hh&&!s.render){const i=s.template||xu(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,u=st(st({isCustomElement:r,delimiters:a},o),l);s.render=hh(i,u)}}t.render=s.render||Dt}{const i=no(t);hs();try{q0(t)}finally{ps(),i()}}}const DT={get(t,e){return vt(t,"get",""),t[e]}};function LT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,DT),slots:t.slots,emit:t.emit,expose:e}}function Za(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(r_(t_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Er)return Er[n](t)},has(e,n){return n in e||n in Er}})):t.proxy}function MT(t,e=!0){return re(t)?t.displayName||t.name:t.name||e&&t.__name}function FT(t){return re(t)&&"__vccOpts"in t}const Ve=(t,e)=>C0(t,e,Ja);function Lu(t,e,n){const s=arguments.length;return s===2?Oe(e)&&!Z(e)?Tc(e)?Se(t,null,[e]):Se(t,e):Se(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Tc(n)&&(n=[n]),Se(t,e,n))}const $T="3.4.38";/**
* @vue/runtime-dom v3.4.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const UT="http://www.w3.org/2000/svg",WT="http://www.w3.org/1998/Math/MathML",hn=typeof document<"u"?document:null,ph=hn&&hn.createElement("template"),VT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?hn.createElementNS(UT,t):e==="mathml"?hn.createElementNS(WT,t):n?hn.createElement(t,{is:n}):hn.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>hn.createTextNode(t),createComment:t=>hn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>hn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{ph.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const a=ph.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},HT=Symbol("_vtc");function jT(t,e,n){const s=t[HT];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const mh=Symbol("_vod"),BT=Symbol("_vsh"),zT=Symbol(""),KT=/(^|;)\s*display\s*:/;function GT(t,e,n){const s=t.style,i=Be(n);let r=!1;if(n&&!i){if(e)if(Be(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&qo(s,a,"")}else for(const o in e)n[o]==null&&qo(s,o,"");for(const o in n)o==="display"&&(r=!0),qo(s,o,n[o])}else if(i){if(e!==n){const o=s[zT];o&&(n+=";"+o),s.cssText=n,r=KT.test(n)}}else e&&t.removeAttribute("style");mh in t&&(t[mh]=r?s.display:"",t[BT]&&(s.display="none"))}const _h=/\s*!important$/;function qo(t,e,n){if(Z(n))n.forEach(s=>qo(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=YT(t,e);_h.test(n)?t.setProperty(ds(s),n.replace(_h,""),"important"):t[s]=n}}const gh=["Webkit","Moz","ms"],jl={};function YT(t,e){const n=jl[e];if(n)return n;let s=Kt(e);if(s!=="filter"&&s in t)return jl[e]=s;s=Ha(s);for(let i=0;i<gh.length;i++){const r=gh[i]+s;if(r in t)return jl[e]=r}return e}const vh="http://www.w3.org/1999/xlink";function yh(t,e,n,s,i,r=JC(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(vh,e.slice(6,e.length)):t.setAttributeNS(vh,e,n):n==null||r&&!Fm(n)?t.removeAttribute(e):t.setAttribute(e,r?"":rn(n)?String(n):n)}function qT(t,e,n,s){if(e==="innerHTML"||e==="textContent"){if(n==null)return;t[e]=n;return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const o=i==="OPTION"?t.getAttribute("value")||"":t.value,a=n==null?"":String(n);(o!==a||!("_value"in t))&&(t.value=a),n==null&&t.removeAttribute(e),t._value=n;return}let r=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=Fm(n):n==null&&o==="string"?(n="",r=!0):o==="number"&&(n=0,r=!0)}try{t[e]=n}catch{}r&&t.removeAttribute(e)}function Rs(t,e,n,s){t.addEventListener(e,n,s)}function QT(t,e,n,s){t.removeEventListener(e,n,s)}const Eh=Symbol("_vei");function XT(t,e,n,s,i=null){const r=t[Eh]||(t[Eh]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=JT(e);if(s){const u=r[e]=tS(s,i);Rs(t,a,u,l)}else o&&(QT(t,a,o,l),r[e]=void 0)}}const bh=/(?:Once|Passive|Capture)$/;function JT(t){let e;if(bh.test(t)){e={};let s;for(;s=t.match(bh);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ds(t.slice(2)),e]}let Bl=0;const ZT=Promise.resolve(),eS=()=>Bl||(ZT.then(()=>Bl=0),Bl=Date.now());function tS(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Bt(nS(s,n.value),e,5,[s])};return n.value=t,n.attached=eS(),n}function nS(t,e){if(Z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const wh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,sS=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?jT(t,s,o):e==="style"?GT(t,n,s):Ua(e)?_u(e)||XT(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):iS(t,e,s,o))?(qT(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&yh(t,e,s,o,r,e!=="value")):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),yh(t,e,s,o))};function iS(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&wh(e)&&re(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return wh(e)&&Be(n)?!1:e in t}const ca=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Z(e)?n=>jo(e,n):e};function rS(t){t.target.composing=!0}function Ch(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const wi=Symbol("_assign"),Ds={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[wi]=ca(i);const r=s||i.props&&i.props.type==="number";Rs(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=ia(a)),t[wi](a)}),n&&Rs(t,"change",()=>{t.value=t.value.trim()}),e||(Rs(t,"compositionstart",rS),Rs(t,"compositionend",Ch),Rs(t,"change",Ch))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:i,number:r}},o){if(t[wi]=ca(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?ia(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||i&&t.value.trim()===l)||(t.value=l))}},Th={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const i=Wa(e);Rs(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ia(ua(o)):ua(o));t[wi](t.multiple?i?new Set(r):r:r[0]),t._assigning=!0,Ou(()=>{t._assigning=!1})}),t[wi]=ca(s)},mounted(t,{value:e,modifiers:{number:n}}){Sh(t,e)},beforeUpdate(t,e,n){t[wi]=ca(n)},updated(t,{value:e,modifiers:{number:n}}){t._assigning||Sh(t,e)}};function Sh(t,e,n){const s=t.multiple,i=Z(e);if(!(s&&!i&&!Wa(e))){for(let r=0,o=t.options.length;r<o;r++){const a=t.options[r],l=ua(a);if(s)if(i){const u=typeof l;u==="string"||u==="number"?a.selected=e.some(f=>String(f)===String(l)):a.selected=e0(e,l)>-1}else a.selected=e.has(l);else if(Ba(ua(a),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!s&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ua(t){return"_value"in t?t._value:t.value}const oS={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ih=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=i=>{if(!("key"in i))return;const r=ds(i.key);if(e.some(o=>o===r||oS[o]===r))return t(i)})},aS=st({patchProp:sS},VT);let Ah;function lS(){return Ah||(Ah=uT(aS))}const cS=(...t)=>{const e=lS().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=fS(s);if(!i)return;const r=e._component;!re(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,uS(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function uS(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function fS(t){return Be(t)?document.querySelector(t):t}var dS=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */const hS=Symbol();var Oh;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Oh||(Oh={}));function pS(){const t=t0(!0),e=t.run(()=>De({}));let n=[],s=[];const i=t_({install(r){i._a=r,r.provide(hS,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!dS?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const fi=typeof document<"u";function mS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const we=Object.assign;function zl(t,e){const n={};for(const s in e){const i=e[s];n[s]=Gt(i)?i.map(t):t(i)}return n}const wr=()=>{},Gt=Array.isArray,$_=/#/g,_S=/&/g,gS=/\//g,vS=/=/g,yS=/\?/g,U_=/\+/g,ES=/%5B/g,bS=/%5D/g,W_=/%5E/g,wS=/%60/g,V_=/%7B/g,CS=/%7C/g,H_=/%7D/g,TS=/%20/g;function Mu(t){return encodeURI(""+t).replace(CS,"|").replace(ES,"[").replace(bS,"]")}function SS(t){return Mu(t).replace(V_,"{").replace(H_,"}").replace(W_,"^")}function Ic(t){return Mu(t).replace(U_,"%2B").replace(TS,"+").replace($_,"%23").replace(_S,"%26").replace(wS,"`").replace(V_,"{").replace(H_,"}").replace(W_,"^")}function IS(t){return Ic(t).replace(vS,"%3D")}function AS(t){return Mu(t).replace($_,"%23").replace(yS,"%3F")}function OS(t){return t==null?"":AS(t).replace(gS,"%2F")}function $r(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const NS=/\/$/,RS=t=>t.replace(NS,"");function Kl(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=DS(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:$r(o)}}function PS(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Nh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function xS(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Pi(e.matched[s],n.matched[i])&&j_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Pi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function j_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!kS(t[n],e[n]))return!1;return!0}function kS(t,e){return Gt(t)?Rh(t,e):Gt(e)?Rh(e,t):t===e}function Rh(t,e){return Gt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function DS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const Fn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ur;(function(t){t.pop="pop",t.push="push"})(Ur||(Ur={}));var Cr;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Cr||(Cr={}));function LS(t){if(!t)if(fi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),RS(t)}const MS=/^[^#]+#/;function FS(t,e){return t.replace(MS,"#")+e}function $S(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const el=()=>({left:window.scrollX,top:window.scrollY});function US(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=$S(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ph(t,e){return(history.state?history.state.position-e:-1)+t}const Ac=new Map;function WS(t,e){Ac.set(t,e)}function VS(t){const e=Ac.get(t);return Ac.delete(t),e}let HS=()=>location.protocol+"//"+location.host;function B_(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Nh(l,"")}return Nh(n,t)+s+i}function jS(t,e,n,s){let i=[],r=[],o=null;const a=({state:p})=>{const _=B_(t,location),b=n.value,T=e.value;let O=0;if(p){if(n.value=_,e.value=p,o&&o===b){o=null;return}O=T?p.position-T.position:0}else s(_);i.forEach(S=>{S(n.value,b,{delta:O,type:Ur.pop,direction:O?O>0?Cr.forward:Cr.back:Cr.unknown})})};function l(){o=n.value}function u(p){i.push(p);const _=()=>{const b=i.indexOf(p);b>-1&&i.splice(b,1)};return r.push(_),_}function f(){const{history:p}=window;p.state&&p.replaceState(we({},p.state,{scroll:el()}),"")}function h(){for(const p of r)p();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:u,destroy:h}}function xh(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?el():null}}function BS(t){const{history:e,location:n}=window,s={value:B_(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,u,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:HS()+t+l;try{e[f?"replaceState":"pushState"](u,"",p),i.value=u}catch(_){console.error(_),n[f?"replace":"assign"](p)}}function o(l,u){const f=we({},e.state,xh(i.value.back,l,i.value.forward,!0),u,{position:i.value.position});r(l,f,!0),s.value=l}function a(l,u){const f=we({},i.value,e.state,{forward:l,scroll:el()});r(f.current,f,!0);const h=we({},xh(s.value,l,null),{position:f.position+1},u);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function zS(t){t=LS(t);const e=BS(t),n=jS(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=we({location:"",base:t,go:s,createHref:FS.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function KS(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),zS(t)}function GS(t){return typeof t=="string"||t&&typeof t=="object"}function z_(t){return typeof t=="string"||typeof t=="symbol"}const K_=Symbol("");var kh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(kh||(kh={}));function xi(t,e){return we(new Error,{type:t,[K_]:!0},e)}function dn(t,e){return t instanceof Error&&K_ in t&&(e==null||!!(t.type&e))}const Dh="[^/]+?",YS={sensitive:!1,strict:!1,start:!0,end:!0},qS=/[.+*?^${}()[\]/\\]/g;function QS(t,e){const n=we({},YS,e),s=[];let i=n.start?"^":"";const r=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let h=0;h<u.length;h++){const p=u[h];let _=40+(n.sensitive?.25:0);if(p.type===0)h||(i+="/"),i+=p.value.replace(qS,"\\$&"),_+=40;else if(p.type===1){const{value:b,repeatable:T,optional:O,regexp:S}=p;r.push({name:b,repeatable:T,optional:O});const E=S||Dh;if(E!==Dh){_+=10;try{new RegExp(`(${E})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${b}" (${E}): `+N.message)}}let C=T?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;h||(C=O&&u.length<2?`(?:/${C})`:"/"+C),O&&(C+="?"),i+=C,_+=20,O&&(_+=-8),T&&(_+=-20),E===".*"&&(_+=-50)}f.push(_)}s.push(f)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(u){const f=u.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const _=f[p]||"",b=r[p-1];h[b.name]=_&&b.repeatable?_.split("/"):_}return h}function l(u){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const _ of p)if(_.type===0)f+=_.value;else if(_.type===1){const{value:b,repeatable:T,optional:O}=_,S=b in u?u[b]:"";if(Gt(S)&&!T)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const E=Gt(S)?S.join("/"):S;if(!E)if(O)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${b}"`);f+=E}}return f||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function XS(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function G_(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=XS(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Lh(s))return 1;if(Lh(i))return-1}return i.length-s.length}function Lh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const JS={type:0,value:""},ZS=/[a-zA-Z0-9_]/;function eI(t){if(!t)return[[]];if(t==="/")return[[JS]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,u="",f="";function h(){u&&(n===0?r.push({type:0,value:u}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(u&&h(),o()):l===":"?(h(),n=1):p();break;case 4:p(),n=s;break;case 1:l==="("?n=2:ZS.test(l)?p():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function tI(t,e,n){const s=QS(eI(t.path),n),i=we(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function nI(t,e){const n=[],s=new Map;e=$h({strict:!1,end:!0,sensitive:!1},e);function i(h){return s.get(h)}function r(h,p,_){const b=!_,T=sI(h);T.aliasOf=_&&_.record;const O=$h(e,h),S=[T];if("alias"in h){const N=typeof h.alias=="string"?[h.alias]:h.alias;for(const R of N)S.push(we({},T,{components:_?_.record.components:T.components,path:R,aliasOf:_?_.record:T}))}let E,C;for(const N of S){const{path:R}=N;if(p&&R[0]!=="/"){const D=p.record.path,K=D[D.length-1]==="/"?"":"/";N.path=p.record.path+(R&&K+R)}if(E=tI(N,p,O),_?_.alias.push(E):(C=C||E,C!==E&&C.alias.push(E),b&&h.name&&!Fh(E)&&o(h.name)),Y_(E)&&l(E),T.children){const D=T.children;for(let K=0;K<D.length;K++)r(D[K],E,_&&_.children[K])}_=_||E}return C?()=>{o(C)}:wr}function o(h){if(z_(h)){const p=s.get(h);p&&(s.delete(h),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(h);p>-1&&(n.splice(p,1),h.record.name&&s.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function l(h){const p=oI(h,n);n.splice(p,0,h),h.record.name&&!Fh(h)&&s.set(h.record.name,h)}function u(h,p){let _,b={},T,O;if("name"in h&&h.name){if(_=s.get(h.name),!_)throw xi(1,{location:h});O=_.record.name,b=we(Mh(p.params,_.keys.filter(C=>!C.optional).concat(_.parent?_.parent.keys.filter(C=>C.optional):[]).map(C=>C.name)),h.params&&Mh(h.params,_.keys.map(C=>C.name))),T=_.stringify(b)}else if(h.path!=null)T=h.path,_=n.find(C=>C.re.test(T)),_&&(b=_.parse(T),O=_.record.name);else{if(_=p.name?s.get(p.name):n.find(C=>C.re.test(p.path)),!_)throw xi(1,{location:h,currentLocation:p});O=_.record.name,b=we({},p.params,h.params),T=_.stringify(b)}const S=[];let E=_;for(;E;)S.unshift(E.record),E=E.parent;return{name:O,path:T,params:b,matched:S,meta:rI(S)}}t.forEach(h=>r(h));function f(){n.length=0,s.clear()}return{addRoute:r,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:a,getRecordMatcher:i}}function Mh(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function sI(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:iI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function iI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Fh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function rI(t){return t.reduce((e,n)=>we(e,n.meta),{})}function $h(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function oI(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;G_(t,e[r])<0?s=r:n=r+1}const i=aI(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function aI(t){let e=t;for(;e=e.parent;)if(Y_(e)&&G_(t,e)===0)return e}function Y_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function lI(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(U_," "),o=r.indexOf("="),a=$r(o<0?r:r.slice(0,o)),l=o<0?null:$r(r.slice(o+1));if(a in e){let u=e[a];Gt(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function Uh(t){let e="";for(let n in t){const s=t[n];if(n=IS(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Gt(s)?s.map(r=>r&&Ic(r)):[s&&Ic(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function cI(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Gt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const uI=Symbol(""),Wh=Symbol(""),Fu=Symbol(""),q_=Symbol(""),Oc=Symbol("");function ur(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function jn(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(xi(4,{from:n,to:e})):p instanceof Error?l(p):GS(p)?l(xi(2,{from:e,to:p})):(o&&s.enterCallbacks[i]===o&&typeof p=="function"&&o.push(p),a())},f=r(()=>t.call(s&&s.instances[i],e,n,u));let h=Promise.resolve(f);t.length<3&&(h=h.then(u)),h.catch(p=>l(p))})}function Gl(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(fI(l)){const f=(l.__vccOpts||l)[e];f&&r.push(jn(f,n,s,o,a,i))}else{let u=l();r.push(()=>u.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const h=mS(f)?f.default:f;o.components[a]=h;const _=(h.__vccOpts||h)[e];return _&&jn(_,n,s,o,a,i)()}))}}return r}function fI(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Vh(t){const e=bn(Fu),n=bn(q_),s=Ve(()=>{const l=jt(t.to);return e.resolve(l)}),i=Ve(()=>{const{matched:l}=s.value,{length:u}=l,f=l[u-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(Pi.bind(null,f));if(p>-1)return p;const _=Hh(l[u-2]);return u>1&&Hh(f)===_&&h[h.length-1].path!==_?h.findIndex(Pi.bind(null,l[u-2])):p}),r=Ve(()=>i.value>-1&&pI(n.params,s.value.params)),o=Ve(()=>i.value>-1&&i.value===n.matched.length-1&&j_(n.params,s.value.params));function a(l={}){return hI(l)?e[jt(t.replace)?"replace":"push"](jt(t.to)).catch(wr):Promise.resolve()}return{route:s,href:Ve(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const dI=Ru({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Vh,setup(t,{slots:e}){const n=Ka(Vh(t)),{options:s}=bn(Fu),i=Ve(()=>({[jh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[jh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Lu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),fa=dI;function hI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function pI(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Gt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Hh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const jh=(t,e,n)=>t??e??n,mI=Ru({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=bn(Oc),i=Ve(()=>t.route||s.value),r=bn(Wh,0),o=Ve(()=>{let u=jt(r);const{matched:f}=i.value;let h;for(;(h=f[u])&&!h.components;)u++;return u}),a=Ve(()=>i.value.matched[o.value]);Ko(Wh,Ve(()=>o.value+1)),Ko(uI,a),Ko(Oc,i);const l=De();return bi(()=>[l.value,a.value,t.name],([u,f,h],[p,_,b])=>{f&&(f.instances[h]=u,_&&_!==f&&u&&u===p&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),u&&f&&(!_||!Pi(f,_)||!p)&&(f.enterCallbacks[h]||[]).forEach(T=>T(u))},{flush:"post"}),()=>{const u=i.value,f=t.name,h=a.value,p=h&&h.components[f];if(!p)return Bh(n.default,{Component:p,route:u});const _=h.props[f],b=_?_===!0?u.params:typeof _=="function"?_(u):_:null,O=Lu(p,we({},b,e,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(h.instances[f]=null)},ref:l}));return Bh(n.default,{Component:O,route:u})||O}}});function Bh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Q_=mI;function _I(t){const e=nI(t.routes,t),n=t.parseQuery||lI,s=t.stringifyQuery||Uh,i=t.history,r=ur(),o=ur(),a=ur(),l=T0(Fn);let u=Fn;fi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=zl.bind(null,x=>""+x),h=zl.bind(null,OS),p=zl.bind(null,$r);function _(x,B){let z,Y;return z_(x)?(z=e.getRecordMatcher(x),Y=B):Y=x,e.addRoute(Y,z)}function b(x){const B=e.getRecordMatcher(x);B&&e.removeRoute(B)}function T(){return e.getRoutes().map(x=>x.record)}function O(x){return!!e.getRecordMatcher(x)}function S(x,B){if(B=we({},B||l.value),typeof x=="string"){const v=Kl(n,x,B.path),w=e.resolve({path:v.path},B),L=i.createHref(v.fullPath);return we(v,w,{params:p(w.params),hash:$r(v.hash),redirectedFrom:void 0,href:L})}let z;if(x.path!=null)z=we({},x,{path:Kl(n,x.path,B.path).path});else{const v=we({},x.params);for(const w in v)v[w]==null&&delete v[w];z=we({},x,{params:h(v)}),B.params=h(B.params)}const Y=e.resolve(z,B),A=x.hash||"";Y.params=f(p(Y.params));const be=PS(s,we({},x,{hash:SS(A),path:Y.path})),m=i.createHref(be);return we({fullPath:be,hash:A,query:s===Uh?cI(x.query):x.query||{}},Y,{redirectedFrom:void 0,href:m})}function E(x){return typeof x=="string"?Kl(n,x,l.value.path):we({},x)}function C(x,B){if(u!==x)return xi(8,{from:B,to:x})}function N(x){return K(x)}function R(x){return N(we(E(x),{replace:!0}))}function D(x){const B=x.matched[x.matched.length-1];if(B&&B.redirect){const{redirect:z}=B;let Y=typeof z=="function"?z(x):z;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=E(Y):{path:Y},Y.params={}),we({query:x.query,hash:x.hash,params:Y.path!=null?{}:x.params},Y)}}function K(x,B){const z=u=S(x),Y=l.value,A=x.state,be=x.force,m=x.replace===!0,v=D(z);if(v)return K(we(E(v),{state:typeof v=="object"?we({},A,v.state):A,force:be,replace:m}),B||z);const w=z;w.redirectedFrom=B;let L;return!be&&xS(s,Y,z)&&(L=xi(16,{to:w,from:Y}),qe(Y,Y,!0,!1)),(L?Promise.resolve(L):se(w,Y)).catch(P=>dn(P)?dn(P,2)?P:rt(P):ue(P,w,Y)).then(P=>{if(P){if(dn(P,2))return K(we({replace:m},E(P.to),{state:typeof P.to=="object"?we({},A,P.to.state):A,force:be}),B||w)}else P=Le(w,Y,!0,m,A);return le(w,Y,P),P})}function ae(x,B){const z=C(x,B);return z?Promise.reject(z):Promise.resolve()}function te(x){const B=ot.values().next().value;return B&&typeof B.runWithContext=="function"?B.runWithContext(x):x()}function se(x,B){let z;const[Y,A,be]=gI(x,B);z=Gl(Y.reverse(),"beforeRouteLeave",x,B);for(const v of Y)v.leaveGuards.forEach(w=>{z.push(jn(w,x,B))});const m=ae.bind(null,x,B);return z.push(m),$e(z).then(()=>{z=[];for(const v of r.list())z.push(jn(v,x,B));return z.push(m),$e(z)}).then(()=>{z=Gl(A,"beforeRouteUpdate",x,B);for(const v of A)v.updateGuards.forEach(w=>{z.push(jn(w,x,B))});return z.push(m),$e(z)}).then(()=>{z=[];for(const v of be)if(v.beforeEnter)if(Gt(v.beforeEnter))for(const w of v.beforeEnter)z.push(jn(w,x,B));else z.push(jn(v.beforeEnter,x,B));return z.push(m),$e(z)}).then(()=>(x.matched.forEach(v=>v.enterCallbacks={}),z=Gl(be,"beforeRouteEnter",x,B,te),z.push(m),$e(z))).then(()=>{z=[];for(const v of o.list())z.push(jn(v,x,B));return z.push(m),$e(z)}).catch(v=>dn(v,8)?v:Promise.reject(v))}function le(x,B,z){a.list().forEach(Y=>te(()=>Y(x,B,z)))}function Le(x,B,z,Y,A){const be=C(x,B);if(be)return be;const m=B===Fn,v=fi?history.state:{};z&&(Y||m?i.replace(x.fullPath,we({scroll:m&&v&&v.scroll},A)):i.push(x.fullPath,A)),l.value=x,qe(x,B,z,m),rt()}let ve;function it(){ve||(ve=i.listen((x,B,z)=>{if(!Ze.listening)return;const Y=S(x),A=D(Y);if(A){K(we(A,{replace:!0}),Y).catch(wr);return}u=Y;const be=l.value;fi&&WS(Ph(be.fullPath,z.delta),el()),se(Y,be).catch(m=>dn(m,12)?m:dn(m,2)?(K(m.to,Y).then(v=>{dn(v,20)&&!z.delta&&z.type===Ur.pop&&i.go(-1,!1)}).catch(wr),Promise.reject()):(z.delta&&i.go(-z.delta,!1),ue(m,Y,be))).then(m=>{m=m||Le(Y,be,!1),m&&(z.delta&&!dn(m,8)?i.go(-z.delta,!1):z.type===Ur.pop&&dn(m,20)&&i.go(-1,!1)),le(Y,be,m)}).catch(wr)}))}let Je=ur(),me=ur(),ie;function ue(x,B,z){rt(x);const Y=me.list();return Y.length?Y.forEach(A=>A(x,B,z)):console.error(x),Promise.reject(x)}function Ue(){return ie&&l.value!==Fn?Promise.resolve():new Promise((x,B)=>{Je.add([x,B])})}function rt(x){return ie||(ie=!x,it(),Je.list().forEach(([B,z])=>x?z(x):B()),Je.reset()),x}function qe(x,B,z,Y){const{scrollBehavior:A}=t;if(!fi||!A)return Promise.resolve();const be=!z&&VS(Ph(x.fullPath,0))||(Y||!z)&&history.state&&history.state.scroll||null;return Ou().then(()=>A(x,B,be)).then(m=>m&&US(m)).catch(m=>ue(m,x,B))}const ke=x=>i.go(x);let Et;const ot=new Set,Ze={currentRoute:l,listening:!0,addRoute:_,removeRoute:b,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:T,resolve:S,options:t,push:N,replace:R,go:ke,back:()=>ke(-1),forward:()=>ke(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:me.add,isReady:Ue,install(x){const B=this;x.component("RouterLink",fa),x.component("RouterView",Q_),x.config.globalProperties.$router=B,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>jt(l)}),fi&&!Et&&l.value===Fn&&(Et=!0,N(i.location).catch(A=>{}));const z={};for(const A in Fn)Object.defineProperty(z,A,{get:()=>l.value[A],enumerable:!0});x.provide(Fu,B),x.provide(q_,Jm(z)),x.provide(Oc,l);const Y=x.unmount;ot.add(x),x.unmount=function(){ot.delete(x),ot.size<1&&(u=Fn,ve&&ve(),ve=null,l.value=Fn,Et=!1,ie=!1),Y()}}};function $e(x){return x.reduce((B,z)=>B.then(()=>te(z)),Promise.resolve())}return Ze}function gI(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(u=>Pi(u,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>Pi(u,l))||i.push(l))}return[n,s,i]}const vI={__name:"App",setup(t){return(e,n)=>(Re(),hi(jt(Q_)))}},yI="/assets/logo-woT2z67z.png",EI={class:"bg-warning vh-100 d-flex justify-content-center align-items-center",style:{overflow:"auto"}},bI={class:"container w-50"},wI={class:"bg-white rounded-circle mx-auto p-3 mb-3",style:{"box-shadow":"4px 4px 16px rgba(0, 0, 0, 0.5)","max-width":"150px"}},CI=["src"],TI=$("h1",{class:"text-center mb-3"},"WordBox 單字盒",-1),SI=$("hr",{class:"mb-3",style:{width:"80%",margin:"auto"}},null,-1),II=$("label",null,"請輸入暱稱",-1),AI=$("label",{class:"mt-3"},"請輸入密碼",-1),OI={key:0,class:"text-danger mt-1 text-end"},NI={__name:"LoginView",setup(t){const e=De({name:"",pw:""}),n=De(!1),s=()=>{const i=e.value.name.toLowerCase(),r=e.value.pw.toLowerCase();(i==="alex"||i==="yiyu")&&r==="520520"?(localStorage.setItem("memorize_name",e.value.name),localStorage.setItem("memorize_pw",e.value.pw),Jr.push("/")):n.value=!0};return(i,r)=>(Re(),Ke("div",EI,[$("div",bI,[$("div",null,[$("div",wI,[$("img",{src:jt(yI),alt:"WordBox 單字盒",class:"w-100"},null,8,CI)])]),TI,SI,II,pn($("input",{type:"text",class:"form-control","onUpdate:modelValue":r[0]||(r[0]=o=>e.value.name=o),onKeyup:Ih(s,["enter"])},null,544),[[Ds,e.value.name]]),AI,pn($("input",{type:"password",class:"form-control","onUpdate:modelValue":r[1]||(r[1]=o=>e.value.pw=o),onKeyup:Ih(s,["enter"])},null,544),[[Ds,e.value.pw]]),n.value?(Re(),Ke("div",OI,"暱稱或密碼錯誤，請詢問管理員")):Vn("",!0),$("button",{type:"button",class:"btn btn-primary mt-3 w-100",onClick:s},"登入")])]))}};var zh={};/**
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
 */const W=function(t,e){if(!t)throw Yi(e)},Yi=function(t){return new Error("Firebase Database ("+X_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const J_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},RI=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},$u={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,f=r>>2,h=(r&3)<<4|a>>4;let p=(a&15)<<2|u>>6,_=u&63;l||(_=64,o||(p=64)),s.push(n[f],n[h],n[p],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(J_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):RI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||u==null||h==null)throw new PI;const p=r<<2|a>>4;if(s.push(p),u!==64){const _=a<<4&240|u>>2;if(s.push(_),h!==64){const b=u<<6&192|h;s.push(b)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class PI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Z_=function(t){const e=J_(t);return $u.encodeByteArray(e,!0)},da=function(t){return Z_(t).replace(/\./g,"")},ha=function(t){try{return $u.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function xI(t){return eg(void 0,t)}function eg(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!kI(n)||(t[n]=eg(t[n],e[n]));return t}function kI(t){return t!=="__proto__"}/**
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
 */function DI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const LI=()=>DI().__FIREBASE_DEFAULTS__,MI=()=>{if(typeof process>"u"||typeof zh>"u")return;const t=zh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},FI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ha(t[1]);return e&&JSON.parse(e)},Uu=()=>{try{return LI()||MI()||FI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},tg=t=>{var e,n;return(n=(e=Uu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},$I=t=>{const e=tg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ng=()=>{var t;return(t=Uu())===null||t===void 0?void 0:t.config},sg=t=>{var e;return(e=Uu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class so{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function UI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[da(JSON.stringify(n)),da(JSON.stringify(o)),""].join(".")}/**
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
 */function ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ht())}function WI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ig(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function VI(){const t=ht();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rg(){return X_.NODE_ADMIN===!0}function HI(){try{return typeof indexedDB=="object"}catch{return!1}}function jI(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const BI="FirebaseError";class ms extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=BI,Object.setPrototypeOf(this,ms.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,io.prototype.create)}}class io{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?zI(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ms(i,a,s)}}function zI(t,e){return t.replace(KI,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const KI=/\{\$([^}]+)}/g;/**
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
 */function Wr(t){return JSON.parse(t)}function je(t){return JSON.stringify(t)}/**
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
 */const og=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Wr(ha(r[0])||""),n=Wr(ha(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},GI=function(t){const e=og(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},YI=function(t){const e=og(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ln(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ki(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Nc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pa(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ma(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Kh(r)&&Kh(o)){if(!ma(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Kh(t){return t!==null&&typeof t=="object"}/**
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
 */function qi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class qI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const p=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(p<<1|p>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,f;for(let h=0;h<80;h++){h<40?h<20?(u=a^r&(o^a),f=1518500249):(u=r^o^a,f=1859775393):h<60?(u=r&o|a&(r|o),f=2400959708):(u=r^o^a,f=3395469782);const p=(i<<5|i>>>27)+u+l+f+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=p}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function QI(t,e){const n=new XI(t,e);return n.subscribe.bind(n)}class XI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");JI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Yl),i.error===void 0&&(i.error=Yl),i.complete===void 0&&(i.complete=Yl);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function JI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Yl(){}function tl(t,e){return`${t} failed: ${e} argument `}/**
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
 */const ZI=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,W(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},nl=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */class eA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new so;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nA(e))try{this.getOrInitializeService({instanceIdentifier:As})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=As){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=As){return this.instances.has(e)}getOptions(e=As){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:tA(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=As){return this.component?this.component.multipleInstances?e:As:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tA(t){return t===As?void 0:t}function nA(t){return t.instantiationMode==="EAGER"}/**
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
 */class sA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new eA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ce;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ce||(Ce={}));const iA={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},rA=Ce.INFO,oA={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},aA=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=oA[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vu{constructor(e){this.name=e,this._logLevel=rA,this._logHandler=aA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const lA=(t,e)=>e.some(n=>t instanceof n);let Gh,Yh;function cA(){return Gh||(Gh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uA(){return Yh||(Yh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ag=new WeakMap,Rc=new WeakMap,lg=new WeakMap,ql=new WeakMap,Hu=new WeakMap;function fA(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(es(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ag.set(n,t)}).catch(()=>{}),Hu.set(e,t),e}function dA(t){if(Rc.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Rc.set(t,e)}let Pc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Rc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||lg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return es(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hA(t){Pc=t(Pc)}function pA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ql(this),e,...n);return lg.set(s,e.sort?e.sort():[e]),es(s)}:uA().includes(t)?function(...e){return t.apply(Ql(this),e),es(ag.get(this))}:function(...e){return es(t.apply(Ql(this),e))}}function mA(t){return typeof t=="function"?pA(t):(t instanceof IDBTransaction&&dA(t),lA(t,cA())?new Proxy(t,Pc):t)}function es(t){if(t instanceof IDBRequest)return fA(t);if(ql.has(t))return ql.get(t);const e=mA(t);return e!==t&&(ql.set(t,e),Hu.set(e,t)),e}const Ql=t=>Hu.get(t);function _A(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=es(o);return s&&o.addEventListener("upgradeneeded",l=>{s(es(o.result),l.oldVersion,l.newVersion,es(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const gA=["get","getKey","getAll","getAllKeys","count"],vA=["put","add","delete","clear"],Xl=new Map;function qh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xl.get(e))return Xl.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=vA.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||gA.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Xl.set(e,r),r}hA(t=>({...t,get:(e,n,s)=>qh(e,n)||t.get(e,n,s),has:(e,n)=>!!qh(e,n)||t.has(e,n)}));/**
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
 */class yA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(EA(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function EA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xc="@firebase/app",Qh="0.10.10";/**
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
 */const Cn=new Vu("@firebase/app"),bA="@firebase/app-compat",wA="@firebase/analytics-compat",CA="@firebase/analytics",TA="@firebase/app-check-compat",SA="@firebase/app-check",IA="@firebase/auth",AA="@firebase/auth-compat",OA="@firebase/database",NA="@firebase/database-compat",RA="@firebase/functions",PA="@firebase/functions-compat",xA="@firebase/installations",kA="@firebase/installations-compat",DA="@firebase/messaging",LA="@firebase/messaging-compat",MA="@firebase/performance",FA="@firebase/performance-compat",$A="@firebase/remote-config",UA="@firebase/remote-config-compat",WA="@firebase/storage",VA="@firebase/storage-compat",HA="@firebase/firestore",jA="@firebase/vertexai-preview",BA="@firebase/firestore-compat",zA="firebase",KA="10.13.1";/**
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
 */const kc="[DEFAULT]",GA={[xc]:"fire-core",[bA]:"fire-core-compat",[CA]:"fire-analytics",[wA]:"fire-analytics-compat",[SA]:"fire-app-check",[TA]:"fire-app-check-compat",[IA]:"fire-auth",[AA]:"fire-auth-compat",[OA]:"fire-rtdb",[NA]:"fire-rtdb-compat",[RA]:"fire-fn",[PA]:"fire-fn-compat",[xA]:"fire-iid",[kA]:"fire-iid-compat",[DA]:"fire-fcm",[LA]:"fire-fcm-compat",[MA]:"fire-perf",[FA]:"fire-perf-compat",[$A]:"fire-rc",[UA]:"fire-rc-compat",[WA]:"fire-gcs",[VA]:"fire-gcs-compat",[HA]:"fire-fst",[BA]:"fire-fst-compat",[jA]:"fire-vertex","fire-js":"fire-js",[zA]:"fire-js-all"};/**
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
 */const _a=new Map,YA=new Map,Dc=new Map;function Xh(t,e){try{t.container.addComponent(e)}catch(n){Cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Di(t){const e=t.name;if(Dc.has(e))return Cn.debug(`There were multiple attempts to register component ${e}.`),!1;Dc.set(e,t);for(const n of _a.values())Xh(n,t);for(const n of YA.values())Xh(n,t);return!0}function ju(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function qn(t){return t.settings!==void 0}/**
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
 */const qA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ts=new io("app","Firebase",qA);/**
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
 */class QA{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Bs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ts.create("app-deleted",{appName:this._name})}}/**
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
 */const Qi=KA;function cg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:kc,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw ts.create("bad-app-name",{appName:String(i)});if(n||(n=ng()),!n)throw ts.create("no-options");const r=_a.get(i);if(r){if(ma(n,r.options)&&ma(s,r.config))return r;throw ts.create("duplicate-app",{appName:i})}const o=new sA(i);for(const l of Dc.values())o.addComponent(l);const a=new QA(n,s,o);return _a.set(i,a),a}function ug(t=kc){const e=_a.get(t);if(!e&&t===kc&&ng())return cg();if(!e)throw ts.create("no-app",{appName:t});return e}function ns(t,e,n){var s;let i=(s=GA[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cn.warn(a.join(" "));return}Di(new Bs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const XA="firebase-heartbeat-database",JA=1,Vr="firebase-heartbeat-store";let Jl=null;function fg(){return Jl||(Jl=_A(XA,JA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Vr)}catch(n){console.warn(n)}}}}).catch(t=>{throw ts.create("idb-open",{originalErrorMessage:t.message})})),Jl}async function ZA(t){try{const n=(await fg()).transaction(Vr),s=await n.objectStore(Vr).get(dg(t));return await n.done,s}catch(e){if(e instanceof ms)Cn.warn(e.message);else{const n=ts.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cn.warn(n.message)}}}async function Jh(t,e){try{const s=(await fg()).transaction(Vr,"readwrite");await s.objectStore(Vr).put(e,dg(t)),await s.done}catch(n){if(n instanceof ms)Cn.warn(n.message);else{const s=ts.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cn.warn(s.message)}}}function dg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const e1=1024,t1=30*24*60*60*1e3;class n1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new i1(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Zh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=t1}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Cn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Zh(),{heartbeatsToSend:s,unsentEntries:i}=s1(this._heartbeatsCache.heartbeats),r=da(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return Cn.warn(n),""}}}function Zh(){return new Date().toISOString().substring(0,10)}function s1(t,e=e1){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ep(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ep(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class i1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return HI()?jI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ZA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ep(t){return da(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function r1(t){Di(new Bs("platform-logger",e=>new yA(e),"PRIVATE")),Di(new Bs("heartbeat",e=>new n1(e),"PRIVATE")),ns(xc,Qh,t),ns(xc,Qh,"esm2017"),ns("fire-js","")}r1("");var tp={};const np="@firebase/database",sp="1.0.7";/**
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
 */let hg="";function o1(t){hg=t}/**
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
 */class a1{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),je(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Wr(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class l1{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ln(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const pg=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new a1(e)}}catch{}return new l1},Ls=pg("localStorage"),c1=pg("sessionStorage");/**
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
 */const Ci=new Vu("@firebase/database"),u1=function(){let t=1;return function(){return t++}}(),mg=function(t){const e=ZI(t),n=new qI;n.update(e);const s=n.digest();return $u.encodeByteArray(s)},ro=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ro.apply(null,s):typeof s=="object"?e+=je(s):e+=s,e+=" "}return e};let Tr=null,ip=!0;const f1=function(t,e){W(!e,"Can't turn on custom loggers persistently."),Ci.logLevel=Ce.VERBOSE,Tr=Ci.log.bind(Ci)},Qe=function(...t){if(ip===!0&&(ip=!1,Tr===null&&c1.get("logging_enabled")===!0&&f1()),Tr){const e=ro.apply(null,t);Tr(e)}},oo=function(t){return function(...e){Qe(t,...e)}},Lc=function(...t){const e="FIREBASE INTERNAL ERROR: "+ro(...t);Ci.error(e)},Tn=function(...t){const e=`FIREBASE FATAL ERROR: ${ro(...t)}`;throw Ci.error(e),new Error(e)},ut=function(...t){const e="FIREBASE WARNING: "+ro(...t);Ci.warn(e)},d1=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ut("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Bu=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},h1=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Li="[MIN_NAME]",zs="[MAX_NAME]",Zs=function(t,e){if(t===e)return 0;if(t===Li||e===zs)return-1;if(e===Li||t===zs)return 1;{const n=rp(t),s=rp(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},p1=function(t,e){return t===e?0:t<e?-1:1},fr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+je(e))},zu=function(t){if(typeof t!="object"||t===null)return je(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=je(e[s]),n+=":",n+=zu(t[e[s]]);return n+="}",n},_g=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Xe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const gg=function(t){W(!Bu(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(r%2?1:0),r=Math.floor(r/2);u.push(i?1:0),u.reverse();const f=u.join("");let h="";for(l=0;l<64;l+=8){let p=parseInt(f.substr(l,8),2).toString(16);p.length===1&&(p="0"+p),h=h+p}return h.toLowerCase()},m1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},_1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function g1(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const v1=new RegExp("^-?(0*)\\d{1,10}$"),y1=-2147483648,E1=2147483647,rp=function(t){if(v1.test(t)){const e=Number(t);if(e>=y1&&e<=E1)return e}return null},Xi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ut("Exception was thrown by user callback.",n),e},Math.floor(0))}},b1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Sr=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class w1{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ut(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class C1{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Qe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ut(e)}}class Qo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Qo.OWNER="owner";/**
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
 */const Ku="5",vg="v",yg="s",Eg="r",bg="f",wg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Cg="ls",Tg="p",Mc="ac",Sg="websocket",Ig="long_polling";/**
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
 */class Ag{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ls.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ls.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function T1(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Og(t,e,n){W(typeof e=="string","typeof type must == string"),W(typeof n=="object","typeof params must == object");let s;if(e===Sg)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ig)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);T1(t)&&(n.ns=t.namespace);const i=[];return Xe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class S1{constructor(){this.counters_={}}incrementCounter(e,n=1){ln(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return xI(this.counters_)}}/**
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
 */const Zl={},ec={};function Gu(t){const e=t.toString();return Zl[e]||(Zl[e]=new S1),Zl[e]}function I1(t,e){const n=t.toString();return ec[n]||(ec[n]=e()),ec[n]}/**
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
 */class A1{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Xi(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const op="start",O1="close",N1="pLPCommand",R1="pRTLPCB",Ng="id",Rg="pw",Pg="ser",P1="cb",x1="seg",k1="ts",D1="d",L1="dframe",xg=1870,kg=30,M1=xg-kg,F1=25e3,$1=3e4;class pi{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=oo(e),this.stats_=Gu(n),this.urlFn=l=>(this.appCheckToken&&(l[Mc]=this.appCheckToken),Og(n,Ig,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new A1(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor($1)),h1(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Yu((...r)=>{const[o,a,l,u,f]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===op)this.id=a,this.password=l;else if(o===O1)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[op]="t",s[Pg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[P1]=this.scriptTagHolder.uniqueCallbackIdentifier),s[vg]=Ku,this.transportSessionId&&(s[yg]=this.transportSessionId),this.lastSessionId&&(s[Cg]=this.lastSessionId),this.applicationId&&(s[Tg]=this.applicationId),this.appCheckToken&&(s[Mc]=this.appCheckToken),typeof location<"u"&&location.hostname&&wg.test(location.hostname)&&(s[Eg]=bg);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){pi.forceAllow_=!0}static forceDisallow(){pi.forceDisallow_=!0}static isAvailable(){return pi.forceAllow_?!0:!pi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!m1()&&!_1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Z_(n),i=_g(s,M1);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[L1]="t",s[Ng]=e,s[Rg]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=je(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Yu{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=u1(),window[N1+this.uniqueCallbackIdentifier]=e,window[R1+this.uniqueCallbackIdentifier]=n,this.myIFrame=Yu.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Qe("frame writing exception"),a.stack&&Qe(a.stack),Qe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Qe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ng]=this.myID,e[Rg]=this.myPW,e[Pg]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+kg+s.length<=xg;){const o=this.pendingSegs.shift();s=s+"&"+x1+i+"="+o.seg+"&"+k1+i+"="+o.ts+"&"+D1+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(F1)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Qe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const U1=16384,W1=45e3;let ga=null;typeof MozWebSocket<"u"?ga=MozWebSocket:typeof WebSocket<"u"&&(ga=WebSocket);class Vt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=oo(this.connId),this.stats_=Gu(n),this.connURL=Vt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[vg]=Ku,typeof location<"u"&&location.hostname&&wg.test(location.hostname)&&(o[Eg]=bg),n&&(o[yg]=n),s&&(o[Cg]=s),i&&(o[Mc]=i),r&&(o[Tg]=r),Og(e,Sg,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ls.set("previous_websocket_failure",!0);try{let s;rg(),this.mySock=new ga(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Vt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&ga!==null&&!Vt.forceDisallow_}static previouslyFailed(){return Ls.isInMemoryStorage||Ls.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ls.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Wr(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(W(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=je(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=_g(n,U1);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(W1))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Vt.responsesRequiredToBeHealthy=2;Vt.healthyTimeout=3e4;/**
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
 */class Hr{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[pi,Vt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Vt&&Vt.isAvailable();let s=n&&!Vt.previouslyFailed();if(e.webSocketOnly&&(n||ut("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Vt];else{const i=this.transports_=[];for(const r of Hr.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Hr.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Hr.globalTransportInitialized_=!1;/**
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
 */const V1=6e4,H1=5e3,j1=10*1024,B1=100*1024,tc="t",ap="d",z1="s",lp="r",K1="e",cp="o",up="a",fp="n",dp="p",G1="h";class Y1{constructor(e,n,s,i,r,o,a,l,u,f){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=oo("c:"+this.id+":"),this.transportManager_=new Hr(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Sr(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>B1?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>j1?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(tc in e){const n=e[tc];n===up?this.upgradeIfSecondaryHealthy_():n===lp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===cp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=fr("t",e),s=fr("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:dp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:up,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:fp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=fr("t",e),s=fr("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=fr(tc,e);if(ap in e){const s=e[ap];if(n===G1){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===fp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===z1?this.onConnectionShutdown_(s):n===lp?this.onReset_(s):n===K1?Lc("Server Error: "+s):n===cp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Lc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ku!==s&&ut("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Sr(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(V1))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Sr(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(H1))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:dp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ls.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Lg{constructor(e){this.allowedEvents_=e,this.listeners_={},W(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){W(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class va extends Lg{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Wu()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new va}getInitialEvent(e){return W(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const hp=32,pp=768;class Te{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ge(){return new Te("")}function fe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function os(t){return t.pieces_.length-t.pieceNum_}function Ae(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Te(t.pieces_,e)}function qu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function q1(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function jr(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Mg(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Te(e,0)}function Me(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Te)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Te(n,0)}function he(t){return t.pieceNum_>=t.pieces_.length}function ct(t,e){const n=fe(t),s=fe(e);if(n===null)return e;if(n===s)return ct(Ae(t),Ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Q1(t,e){const n=jr(t,0),s=jr(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=Zs(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function Qu(t,e){if(os(t)!==os(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Lt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(os(t)>os(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class X1{constructor(e,n){this.errorPrefix_=n,this.parts_=jr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=nl(this.parts_[s]);Fg(this)}}function J1(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=nl(e),Fg(t)}function Z1(t){const e=t.parts_.pop();t.byteLength_-=nl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Fg(t){if(t.byteLength_>pp)throw new Error(t.errorPrefix_+"has a key path longer than "+pp+" bytes ("+t.byteLength_+").");if(t.parts_.length>hp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+hp+") or object contains a cycle "+Os(t))}function Os(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Xu extends Lg{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Xu}getInitialEvent(e){return W(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const dr=1e3,eO=60*5*1e3,mp=30*1e3,tO=1.3,nO=3e4,sO="server_kill",_p=3;class wn extends Dg{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=wn.nextPersistentConnectionId_++,this.log_=oo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=dr,this.maxReconnectDelay_=eO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!rg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Xu.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&va.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(je(r)),W(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new so,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),W(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),W(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,u=a.s;wn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ln(e,"w")){const s=ki(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ut(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||YI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=mp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=GI(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),W(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+je(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Lc("Unrecognized action received from server: "+je(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){W(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=dr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=dr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>nO&&(this.reconnectDelay_=dr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*tO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+wn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},u=function(h){W(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:u};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,p]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?Qe("getToken() completed but was canceled"):(Qe("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=p&&p.token,a=new Y1(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,_=>{ut(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(sO)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&ut(h),l())}}}interrupt(e){Qe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Qe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Nc(this.interruptReasons_)&&(this.reconnectDelay_=dr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>zu(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Te(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Qe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=_p&&(this.reconnectDelay_=mp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Qe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=_p&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+hg.replace(/\./g,"-")]=1,Wu()?e["framework.cordova"]=1:ig()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=va.getInstance().currentlyOnline();return Nc(this.interruptReasons_)&&e}}wn.nextPersistentConnectionId_=0;wn.nextConnectionId_=0;/**
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
 */class sl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new de(Li,e),i=new de(Li,n);return this.compare(s,i)!==0}minPost(){return de.MIN}}/**
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
 */let $o;class $g extends sl{static get __EMPTY_NODE(){return $o}static set __EMPTY_NODE(e){$o=e}compare(e,n){return Zs(e.name,n.name)}isDefinedOn(e){throw Yi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return de.MIN}maxPost(){return new de(zs,$o)}makePost(e,n){return W(typeof e=="string","KeyIndex indexValue must always be a string."),new de(e,$o)}toString(){return".key"}}const Ti=new $g;/**
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
 */class Uo{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ye{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ye.RED,this.left=i??gt.EMPTY_NODE,this.right=r??gt.EMPTY_NODE}copy(e,n,s,i,r){return new Ye(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return gt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return gt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ye.RED=!0;Ye.BLACK=!1;class iO{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ye(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class gt{constructor(e,n=gt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new gt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ye.BLACK,null,null))}remove(e){return new gt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ye.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Uo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Uo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Uo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Uo(this.root_,null,this.comparator_,!0,e)}}gt.EMPTY_NODE=new iO;/**
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
 */function rO(t,e){return Zs(t.name,e.name)}function Ju(t,e){return Zs(t,e)}/**
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
 */let Fc;function oO(t){Fc=t}const Ug=function(t){return typeof t=="number"?"number:"+gg(t):"string:"+t},Wg=function(t){if(t.isLeafNode()){const e=t.val();W(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ln(e,".sv"),"Priority must be a string or number.")}else W(t===Fc||t.isEmpty(),"priority of unexpected type.");W(t===Fc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let gp;class Ge{constructor(e,n=Ge.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,W(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Wg(this.priorityNode_)}static set __childrenNodeConstructor(e){gp=e}static get __childrenNodeConstructor(){return gp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ge(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return he(e)?this:fe(e)===".priority"?this.priorityNode_:Ge.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ge.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=fe(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(W(s!==".priority"||os(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ge.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ae(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ug(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=gg(this.value_):e+=this.value_,this.lazyHash_=mg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ge.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ge.__childrenNodeConstructor?-1:(W(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ge.VALUE_TYPE_ORDER.indexOf(n),r=Ge.VALUE_TYPE_ORDER.indexOf(s);return W(i>=0,"Unknown leaf type: "+n),W(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ge.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Vg,Hg;function aO(t){Vg=t}function lO(t){Hg=t}class cO extends sl{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Zs(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return de.MIN}maxPost(){return new de(zs,new Ge("[PRIORITY-POST]",Hg))}makePost(e,n){const s=Vg(e);return new de(n,new Ge("[PRIORITY-POST]",s))}toString(){return".priority"}}const Fe=new cO;/**
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
 */const uO=Math.log(2);class fO{constructor(e){const n=r=>parseInt(Math.log(r)/uO,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ya=function(t,e,n,s){t.sort(e);const i=function(l,u){const f=u-l;let h,p;if(f===0)return null;if(f===1)return h=t[l],p=n?n(h):h,new Ye(p,h.node,Ye.BLACK,null,null);{const _=parseInt(f/2,10)+l,b=i(l,_),T=i(_+1,u);return h=t[_],p=n?n(h):h,new Ye(p,h.node,Ye.BLACK,b,T)}},r=function(l){let u=null,f=null,h=t.length;const p=function(b,T){const O=h-b,S=h;h-=b;const E=i(O+1,S),C=t[O],N=n?n(C):C;_(new Ye(N,C.node,T,null,E))},_=function(b){u?(u.left=b,u=b):(f=b,u=b)};for(let b=0;b<l.count;++b){const T=l.nextBitIsOne(),O=Math.pow(2,l.count-(b+1));T?p(O,Ye.BLACK):(p(O,Ye.BLACK),p(O,Ye.RED))}return f},o=new fO(t.length),a=r(o);return new gt(s||e,a)};/**
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
 */let nc;const ui={};class _n{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return W(ui&&Fe,"ChildrenNode.ts has not been loaded"),nc=nc||new _n({".priority":ui},{".priority":Fe}),nc}get(e){const n=ki(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof gt?n:null}hasIndex(e){return ln(this.indexSet_,e.toString())}addIndex(e,n){W(e!==Ti,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(de.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=ya(s,e.getCompare()):a=ui;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const f=Object.assign({},this.indexes_);return f[l]=a,new _n(f,u)}addToIndexes(e,n){const s=pa(this.indexes_,(i,r)=>{const o=ki(this.indexSet_,r);if(W(o,"Missing index implementation for "+r),i===ui)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(de.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),ya(a,o.getCompare())}else return ui;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new de(e.name,a))),l.insert(e,e.node)}});return new _n(s,this.indexSet_)}removeFromIndexes(e,n){const s=pa(this.indexes_,i=>{if(i===ui)return i;{const r=n.get(e.name);return r?i.remove(new de(e.name,r)):i}});return new _n(s,this.indexSet_)}}/**
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
 */let hr;class J{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Wg(this.priorityNode_),this.children_.isEmpty()&&W(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return hr||(hr=new J(new gt(Ju),null,_n.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||hr}updatePriority(e){return this.children_.isEmpty()?this:new J(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?hr:n}}getChild(e){const n=fe(e);return n===null?this:this.getImmediateChild(n).getChild(Ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(W(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new de(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?hr:this.priorityNode_;return new J(i,o,r)}}updateChild(e,n){const s=fe(e);if(s===null)return n;{W(fe(e)!==".priority"||os(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Ae(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Fe,(o,a)=>{n[o]=a.val(e),s++,r&&J.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ug(this.getPriority().val())+":"),this.forEachChild(Fe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":mg(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new de(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new de(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new de(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,de.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,de.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ao?-1:0}withIndex(e){if(e===Ti||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new J(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ti||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Fe),i=n.getIterator(Fe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ti?null:this.indexMap_.get(e.toString())}}J.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class dO extends J{constructor(){super(new gt(Ju),J.EMPTY_NODE,_n.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return J.EMPTY_NODE}isEmpty(){return!1}}const ao=new dO;Object.defineProperties(de,{MIN:{value:new de(Li,J.EMPTY_NODE)},MAX:{value:new de(zs,ao)}});$g.__EMPTY_NODE=J.EMPTY_NODE;Ge.__childrenNodeConstructor=J;oO(ao);lO(ao);/**
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
 */const hO=!0;function He(t,e=null){if(t===null)return J.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),W(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ge(n,He(e))}if(!(t instanceof Array)&&hO){const n=[];let s=!1;if(Xe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=He(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new de(o,l)))}}),n.length===0)return J.EMPTY_NODE;const r=ya(n,rO,o=>o.name,Ju);if(s){const o=ya(n,Fe.getCompare());return new J(r,He(e),new _n({".priority":o},{".priority":Fe}))}else return new J(r,He(e),_n.Default)}else{let n=J.EMPTY_NODE;return Xe(t,(s,i)=>{if(ln(t,s)&&s.substring(0,1)!=="."){const r=He(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(He(e))}}aO(He);/**
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
 */class pO extends sl{constructor(e){super(),this.indexPath_=e,W(!he(e)&&fe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Zs(e.name,n.name):r}makePost(e,n){const s=He(e),i=J.EMPTY_NODE.updateChild(this.indexPath_,s);return new de(n,i)}maxPost(){const e=J.EMPTY_NODE.updateChild(this.indexPath_,ao);return new de(zs,e)}toString(){return jr(this.indexPath_,0).join("/")}}/**
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
 */class mO extends sl{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Zs(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return de.MIN}maxPost(){return de.MAX}makePost(e,n){const s=He(e);return new de(n,s)}toString(){return".value"}}const _O=new mO;/**
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
 */function jg(t){return{type:"value",snapshotNode:t}}function Mi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Br(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function zr(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function gO(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Zu{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){W(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Br(n,a)):W(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Mi(n,s)):o.trackChildChange(zr(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Fe,(i,r)=>{n.hasChild(i)||s.trackChildChange(Br(i,r))}),n.isLeafNode()||n.forEachChild(Fe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(zr(i,r,o))}else s.trackChildChange(Mi(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?J.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Kr{constructor(e){this.indexedFilter_=new Zu(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Kr.getStartPost_(e),this.endPost_=Kr.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new de(n,s))||(s=J.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=J.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(J.EMPTY_NODE);const r=this;return n.forEachChild(Fe,(o,a)=>{r.matches(new de(o,a))||(i=i.updateImmediateChild(o,J.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class vO{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Kr(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new de(n,s))||(s=J.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=J.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=J.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(J.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,J.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(p,_)=>h(_,p)}else o=this.index_.getCompare();const a=e;W(a.numChildren()===this.limit_,"");const l=new de(n,s),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),f=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let p=i.getChildAfterChild(this.index_,u,this.reverse_);for(;p!=null&&(p.name===n||a.hasChild(p.name));)p=i.getChildAfterChild(this.index_,p,this.reverse_);const _=p==null?1:o(p,l);if(f&&!s.isEmpty()&&_>=0)return r!=null&&r.trackChildChange(zr(n,s,h)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Br(n,h));const T=a.updateImmediateChild(n,J.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(r!=null&&r.trackChildChange(Mi(p.name,p.node)),T.updateImmediateChild(p.name,p.node)):T}}else return s.isEmpty()?e:f&&o(u,l)>=0?(r!=null&&(r.trackChildChange(Br(u.name,u.node)),r.trackChildChange(Mi(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(u.name,J.EMPTY_NODE)):e}}/**
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
 */class ef{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Fe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return W(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return W(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Li}hasEnd(){return this.endSet_}getIndexEndValue(){return W(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return W(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:zs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return W(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Fe}copy(){const e=new ef;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function yO(t){return t.loadsAllData()?new Zu(t.getIndex()):t.hasLimit()?new vO(t):new Kr(t)}function vp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Fe?n="$priority":t.index_===_O?n="$value":t.index_===Ti?n="$key":(W(t.index_ instanceof pO,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=je(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=je(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+je(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=je(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+je(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function yp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Fe&&(e.i=t.index_.toString()),e}/**
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
 */class Ea extends Dg{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=oo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(W(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ea.getListenId_(e,s),a={};this.listens_[o]=a;const l=vp(e._queryParams);this.restRequest_(r+".json",l,(u,f)=>{let h=f;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(r,h,!1,s),ki(this.listens_,o)===a){let p;u?u===401?p="permission_denied":p="rest_error:"+u:p="ok",i(p,null)}})}unlisten(e,n){const s=Ea.getListenId_(e,n);delete this.listens_[s]}get(e){const n=vp(e._queryParams),s=e._path.toString(),i=new so;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+qi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Wr(a.responseText)}catch{ut("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&ut("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class EO{constructor(){this.rootNode_=J.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function ba(){return{value:null,children:new Map}}function Bg(t,e,n){if(he(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=fe(e);t.children.has(s)||t.children.set(s,ba());const i=t.children.get(s);e=Ae(e),Bg(i,e,n)}}function $c(t,e,n){t.value!==null?n(e,t.value):bO(t,(s,i)=>{const r=new Te(e.toString()+"/"+s);$c(i,r,n)})}function bO(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class wO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Xe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const Ep=10*1e3,CO=30*1e3,TO=5*60*1e3;class SO{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new wO(e);const s=Ep+(CO-Ep)*Math.random();Sr(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Xe(e,(i,r)=>{r>0&&ln(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Sr(this.reportStats_.bind(this),Math.floor(Math.random()*2*TO))}}/**
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
 */var Ht;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ht||(Ht={}));function tf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function nf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function sf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class wa{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ht.ACK_USER_WRITE,this.source=tf()}operationForChild(e){if(he(this.path)){if(this.affectedTree.value!=null)return W(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Te(e));return new wa(ge(),n,this.revert)}}else return W(fe(this.path)===e,"operationForChild called for unrelated child."),new wa(Ae(this.path),this.affectedTree,this.revert)}}/**
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
 */class Gr{constructor(e,n){this.source=e,this.path=n,this.type=Ht.LISTEN_COMPLETE}operationForChild(e){return he(this.path)?new Gr(this.source,ge()):new Gr(this.source,Ae(this.path))}}/**
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
 */class Ks{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ht.OVERWRITE}operationForChild(e){return he(this.path)?new Ks(this.source,ge(),this.snap.getImmediateChild(e)):new Ks(this.source,Ae(this.path),this.snap)}}/**
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
 */class Fi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ht.MERGE}operationForChild(e){if(he(this.path)){const n=this.children.subtree(new Te(e));return n.isEmpty()?null:n.value?new Ks(this.source,ge(),n.value):new Fi(this.source,ge(),n)}else return W(fe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Fi(this.source,Ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class IO{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function AO(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(gO(o.childName,o.snapshotNode))}),pr(t,i,"child_removed",e,s,n),pr(t,i,"child_added",e,s,n),pr(t,i,"child_moved",r,s,n),pr(t,i,"child_changed",e,s,n),pr(t,i,"value",e,s,n),i}function pr(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>NO(t,a,l)),o.forEach(a=>{const l=OO(t,a,r);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function OO(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function NO(t,e,n){if(e.childName==null||n.childName==null)throw Yi("Should only compare child_ events.");const s=new de(e.childName,e.snapshotNode),i=new de(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function il(t,e){return{eventCache:t,serverCache:e}}function Ir(t,e,n,s){return il(new as(e,n,s),t.serverCache)}function zg(t,e,n,s){return il(t.eventCache,new as(e,n,s))}function Ca(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Gs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let sc;const RO=()=>(sc||(sc=new gt(p1)),sc);class Ie{constructor(e,n=RO()){this.value=e,this.children=n}static fromObject(e){let n=new Ie(null);return Xe(e,(s,i)=>{n=n.set(new Te(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ge(),value:this.value};if(he(e))return null;{const s=fe(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Ae(e),n);return r!=null?{path:Me(new Te(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(he(e))return this;{const n=fe(e),s=this.children.get(n);return s!==null?s.subtree(Ae(e)):new Ie(null)}}set(e,n){if(he(e))return new Ie(n,this.children);{const s=fe(e),r=(this.children.get(s)||new Ie(null)).set(Ae(e),n),o=this.children.insert(s,r);return new Ie(this.value,o)}}remove(e){if(he(e))return this.children.isEmpty()?new Ie(null):new Ie(null,this.children);{const n=fe(e),s=this.children.get(n);if(s){const i=s.remove(Ae(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Ie(null):new Ie(this.value,r)}else return this}}get(e){if(he(e))return this.value;{const n=fe(e),s=this.children.get(n);return s?s.get(Ae(e)):null}}setTree(e,n){if(he(e))return n;{const s=fe(e),r=(this.children.get(s)||new Ie(null)).setTree(Ae(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Ie(this.value,o)}}fold(e){return this.fold_(ge(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Me(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ge(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(he(e))return null;{const r=fe(e),o=this.children.get(r);return o?o.findOnPath_(Ae(e),Me(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ge(),n)}foreachOnPath_(e,n,s){if(he(e))return this;{this.value&&s(n,this.value);const i=fe(e),r=this.children.get(i);return r?r.foreachOnPath_(Ae(e),Me(n,i),s):new Ie(null)}}foreach(e){this.foreach_(ge(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Me(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class zt{constructor(e){this.writeTree_=e}static empty(){return new zt(new Ie(null))}}function Ar(t,e,n){if(he(e))return new zt(new Ie(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ct(i,e);return r=r.updateChild(o,n),new zt(t.writeTree_.set(i,r))}else{const i=new Ie(n),r=t.writeTree_.setTree(e,i);return new zt(r)}}}function Uc(t,e,n){let s=t;return Xe(n,(i,r)=>{s=Ar(s,Me(e,i),r)}),s}function bp(t,e){if(he(e))return zt.empty();{const n=t.writeTree_.setTree(e,new Ie(null));return new zt(n)}}function Wc(t,e){return ei(t,e)!=null}function ei(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ct(n.path,e)):null}function wp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Fe,(s,i)=>{e.push(new de(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new de(s,i.value))}),e}function ss(t,e){if(he(e))return t;{const n=ei(t,e);return n!=null?new zt(new Ie(n)):new zt(t.writeTree_.subtree(e))}}function Vc(t){return t.writeTree_.isEmpty()}function $i(t,e){return Kg(ge(),t.writeTree_,e)}function Kg(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(W(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Kg(Me(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Me(t,".priority"),s)),n}}/**
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
 */function rl(t,e){return Qg(e,t)}function PO(t,e,n,s,i){W(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Ar(t.visibleWrites,e,n)),t.lastWriteId=s}function xO(t,e,n,s){W(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Uc(t.visibleWrites,e,n),t.lastWriteId=s}function kO(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function DO(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);W(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&LO(a,s.path)?i=!1:Lt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return MO(t),!0;if(s.snap)t.visibleWrites=bp(t.visibleWrites,s.path);else{const a=s.children;Xe(a,l=>{t.visibleWrites=bp(t.visibleWrites,Me(s.path,l))})}return!0}else return!1}function LO(t,e){if(t.snap)return Lt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Lt(Me(t.path,n),e))return!0;return!1}function MO(t){t.visibleWrites=Gg(t.allWrites,FO,ge()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function FO(t){return t.visible}function Gg(t,e,n){let s=zt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)Lt(n,o)?(a=ct(n,o),s=Ar(s,a,r.snap)):Lt(o,n)&&(a=ct(o,n),s=Ar(s,ge(),r.snap.getChild(a)));else if(r.children){if(Lt(n,o))a=ct(n,o),s=Uc(s,a,r.children);else if(Lt(o,n))if(a=ct(o,n),he(a))s=Uc(s,ge(),r.children);else{const l=ki(r.children,fe(a));if(l){const u=l.getChild(Ae(a));s=Ar(s,ge(),u)}}}else throw Yi("WriteRecord should have .snap or .children")}}return s}function Yg(t,e,n,s,i){if(!s&&!i){const r=ei(t.visibleWrites,e);if(r!=null)return r;{const o=ss(t.visibleWrites,e);if(Vc(o))return n;if(n==null&&!Wc(o,ge()))return null;{const a=n||J.EMPTY_NODE;return $i(o,a)}}}else{const r=ss(t.visibleWrites,e);if(!i&&Vc(r))return n;if(!i&&n==null&&!Wc(r,ge()))return null;{const o=function(u){return(u.visible||i)&&(!s||!~s.indexOf(u.writeId))&&(Lt(u.path,e)||Lt(e,u.path))},a=Gg(t.allWrites,o,e),l=n||J.EMPTY_NODE;return $i(a,l)}}}function $O(t,e,n){let s=J.EMPTY_NODE;const i=ei(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Fe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=ss(t.visibleWrites,e);return n.forEachChild(Fe,(o,a)=>{const l=$i(ss(r,new Te(o)),a);s=s.updateImmediateChild(o,l)}),wp(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=ss(t.visibleWrites,e);return wp(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function UO(t,e,n,s,i){W(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Me(e,n);if(Wc(t.visibleWrites,r))return null;{const o=ss(t.visibleWrites,r);return Vc(o)?i.getChild(n):$i(o,i.getChild(n))}}function WO(t,e,n,s){const i=Me(e,n),r=ei(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=ss(t.visibleWrites,i);return $i(o,s.getNode().getImmediateChild(n))}else return null}function VO(t,e){return ei(t.visibleWrites,e)}function HO(t,e,n,s,i,r,o){let a;const l=ss(t.visibleWrites,e),u=ei(l,ge());if(u!=null)a=u;else if(n!=null)a=$i(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const f=[],h=o.getCompare(),p=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let _=p.getNext();for(;_&&f.length<i;)h(_,s)!==0&&f.push(_),_=p.getNext();return f}else return[]}function jO(){return{visibleWrites:zt.empty(),allWrites:[],lastWriteId:-1}}function Ta(t,e,n,s){return Yg(t.writeTree,t.treePath,e,n,s)}function rf(t,e){return $O(t.writeTree,t.treePath,e)}function Cp(t,e,n,s){return UO(t.writeTree,t.treePath,e,n,s)}function Sa(t,e){return VO(t.writeTree,Me(t.treePath,e))}function BO(t,e,n,s,i,r){return HO(t.writeTree,t.treePath,e,n,s,i,r)}function of(t,e,n){return WO(t.writeTree,t.treePath,e,n)}function qg(t,e){return Qg(Me(t.treePath,e),t.writeTree)}function Qg(t,e){return{treePath:t,writeTree:e}}/**
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
 */class zO{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;W(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),W(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,zr(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Br(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Mi(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,zr(s,e.snapshotNode,i.oldSnap));else throw Yi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class KO{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Xg=new KO;class af{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new as(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return of(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Gs(this.viewCache_),r=BO(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function GO(t){return{filter:t}}function YO(t,e){W(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),W(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function qO(t,e,n,s,i){const r=new zO;let o,a;if(n.type===Ht.OVERWRITE){const u=n;u.source.fromUser?o=Hc(t,e,u.path,u.snap,s,i,r):(W(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!he(u.path),o=Ia(t,e,u.path,u.snap,s,i,a,r))}else if(n.type===Ht.MERGE){const u=n;u.source.fromUser?o=XO(t,e,u.path,u.children,s,i,r):(W(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=jc(t,e,u.path,u.children,s,i,a,r))}else if(n.type===Ht.ACK_USER_WRITE){const u=n;u.revert?o=eN(t,e,u.path,s,i,r):o=JO(t,e,u.path,u.affectedTree,s,i,r)}else if(n.type===Ht.LISTEN_COMPLETE)o=ZO(t,e,n.path,s,r);else throw Yi("Unknown operation type: "+n.type);const l=r.getChanges();return QO(e,o,l),{viewCache:o,changes:l}}function QO(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ca(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(jg(Ca(e)))}}function Jg(t,e,n,s,i,r){const o=e.eventCache;if(Sa(s,n)!=null)return e;{let a,l;if(he(n))if(W(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Gs(e),f=u instanceof J?u:J.EMPTY_NODE,h=rf(s,f);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const u=Ta(s,Gs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const u=fe(n);if(u===".priority"){W(os(n)===1,"Can't have a priority with additional path components");const f=o.getNode();l=e.serverCache.getNode();const h=Cp(s,n,f,l);h!=null?a=t.filter.updatePriority(f,h):a=o.getNode()}else{const f=Ae(n);let h;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const p=Cp(s,n,o.getNode(),l);p!=null?h=o.getNode().getImmediateChild(u).updateChild(f,p):h=o.getNode().getImmediateChild(u)}else h=of(s,u,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),u,h,f,i,r):a=o.getNode()}}return Ir(e,a,o.isFullyInitialized()||he(n),t.filter.filtersNodes())}}function Ia(t,e,n,s,i,r,o,a){const l=e.serverCache;let u;const f=o?t.filter:t.filter.getIndexedFilter();if(he(n))u=f.updateFullNode(l.getNode(),s,null);else if(f.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,s);u=f.updateFullNode(l.getNode(),_,null)}else{const _=fe(n);if(!l.isCompleteForPath(n)&&os(n)>1)return e;const b=Ae(n),O=l.getNode().getImmediateChild(_).updateChild(b,s);_===".priority"?u=f.updatePriority(l.getNode(),O):u=f.updateChild(l.getNode(),_,O,b,Xg,null)}const h=zg(e,u,l.isFullyInitialized()||he(n),f.filtersNodes()),p=new af(i,h,r);return Jg(t,h,n,i,p,a)}function Hc(t,e,n,s,i,r,o){const a=e.eventCache;let l,u;const f=new af(i,e,r);if(he(n))u=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Ir(e,u,!0,t.filter.filtersNodes());else{const h=fe(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),s),l=Ir(e,u,a.isFullyInitialized(),a.isFiltered());else{const p=Ae(n),_=a.getNode().getImmediateChild(h);let b;if(he(p))b=s;else{const T=f.getCompleteChild(h);T!=null?qu(p)===".priority"&&T.getChild(Mg(p)).isEmpty()?b=T:b=T.updateChild(p,s):b=J.EMPTY_NODE}if(_.equals(b))l=e;else{const T=t.filter.updateChild(a.getNode(),h,b,p,f,o);l=Ir(e,T,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Tp(t,e){return t.eventCache.isCompleteForChild(e)}function XO(t,e,n,s,i,r,o){let a=e;return s.foreach((l,u)=>{const f=Me(n,l);Tp(e,fe(f))&&(a=Hc(t,a,f,u,i,r,o))}),s.foreach((l,u)=>{const f=Me(n,l);Tp(e,fe(f))||(a=Hc(t,a,f,u,i,r,o))}),a}function Sp(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function jc(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;he(n)?u=s:u=new Ie(null).setTree(n,s);const f=e.serverCache.getNode();return u.children.inorderTraversal((h,p)=>{if(f.hasChild(h)){const _=e.serverCache.getNode().getImmediateChild(h),b=Sp(t,_,p);l=Ia(t,l,new Te(h),b,i,r,o,a)}}),u.children.inorderTraversal((h,p)=>{const _=!e.serverCache.isCompleteForChild(h)&&p.value===null;if(!f.hasChild(h)&&!_){const b=e.serverCache.getNode().getImmediateChild(h),T=Sp(t,b,p);l=Ia(t,l,new Te(h),T,i,r,o,a)}}),l}function JO(t,e,n,s,i,r,o){if(Sa(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(he(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ia(t,e,n,l.getNode().getChild(n),i,r,a,o);if(he(n)){let u=new Ie(null);return l.getNode().forEachChild(Ti,(f,h)=>{u=u.set(new Te(f),h)}),jc(t,e,n,u,i,r,a,o)}else return e}else{let u=new Ie(null);return s.foreach((f,h)=>{const p=Me(n,f);l.isCompleteForPath(p)&&(u=u.set(f,l.getNode().getChild(p)))}),jc(t,e,n,u,i,r,a,o)}}function ZO(t,e,n,s,i){const r=e.serverCache,o=zg(e,r.getNode(),r.isFullyInitialized()||he(n),r.isFiltered());return Jg(t,o,n,s,Xg,i)}function eN(t,e,n,s,i,r){let o;if(Sa(s,n)!=null)return e;{const a=new af(s,e,i),l=e.eventCache.getNode();let u;if(he(n)||fe(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=Ta(s,Gs(e));else{const h=e.serverCache.getNode();W(h instanceof J,"serverChildren would be complete if leaf node"),f=rf(s,h)}f=f,u=t.filter.updateFullNode(l,f,r)}else{const f=fe(n);let h=of(s,f,e.serverCache);h==null&&e.serverCache.isCompleteForChild(f)&&(h=l.getImmediateChild(f)),h!=null?u=t.filter.updateChild(l,f,h,Ae(n),a,r):e.eventCache.getNode().hasChild(f)?u=t.filter.updateChild(l,f,J.EMPTY_NODE,Ae(n),a,r):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ta(s,Gs(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,r)))}return o=e.serverCache.isFullyInitialized()||Sa(s,ge())!=null,Ir(e,u,o,t.filter.filtersNodes())}}/**
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
 */class tN{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Zu(s.getIndex()),r=yO(s);this.processor_=GO(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(J.EMPTY_NODE,o.getNode(),null),u=r.updateFullNode(J.EMPTY_NODE,a.getNode(),null),f=new as(l,o.isFullyInitialized(),i.filtersNodes()),h=new as(u,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=il(h,f),this.eventGenerator_=new IO(this.query_)}get query(){return this.query_}}function nN(t){return t.viewCache_.serverCache.getNode()}function sN(t){return Ca(t.viewCache_)}function iN(t,e){const n=Gs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!he(e)&&!n.getImmediateChild(fe(e)).isEmpty())?n.getChild(e):null}function Ip(t){return t.eventRegistrations_.length===0}function rN(t,e){t.eventRegistrations_.push(e)}function Ap(t,e,n){const s=[];if(n){W(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Op(t,e,n,s){e.type===Ht.MERGE&&e.source.queryId!==null&&(W(Gs(t.viewCache_),"We should always have a full cache before handling merges"),W(Ca(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=qO(t.processor_,i,e,n,s);return YO(t.processor_,r.viewCache),W(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Zg(t,r.changes,r.viewCache.eventCache.getNode(),null)}function oN(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Fe,(r,o)=>{s.push(Mi(r,o))}),n.isFullyInitialized()&&s.push(jg(n.getNode())),Zg(t,s,n.getNode(),e)}function Zg(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return AO(t.eventGenerator_,e,n,i)}/**
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
 */let Aa;class ev{constructor(){this.views=new Map}}function aN(t){W(!Aa,"__referenceConstructor has already been defined"),Aa=t}function lN(){return W(Aa,"Reference.ts has not been loaded"),Aa}function cN(t){return t.views.size===0}function lf(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return W(r!=null,"SyncTree gave us an op for an invalid query."),Op(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Op(o,e,n,s));return r}}function tv(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Ta(n,i?s:null),l=!1;a?l=!0:s instanceof J?(a=rf(n,s),l=!1):(a=J.EMPTY_NODE,l=!1);const u=il(new as(a,l,!1),new as(s,i,!1));return new tN(e,u)}return o}function uN(t,e,n,s,i,r){const o=tv(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),rN(o,n),oN(o,n)}function fN(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=ls(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(Ap(u,n,s)),Ip(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||r.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(Ap(l,n,s)),Ip(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!ls(t)&&r.push(new(lN())(e._repo,e._path)),{removed:r,events:o}}function nv(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function is(t,e){let n=null;for(const s of t.views.values())n=n||iN(s,e);return n}function sv(t,e){if(e._queryParams.loadsAllData())return ol(t);{const s=e._queryIdentifier;return t.views.get(s)}}function iv(t,e){return sv(t,e)!=null}function ls(t){return ol(t)!=null}function ol(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Oa;function dN(t){W(!Oa,"__referenceConstructor has already been defined"),Oa=t}function hN(){return W(Oa,"Reference.ts has not been loaded"),Oa}let pN=1;class Np{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ie(null),this.pendingWriteTree_=jO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function rv(t,e,n,s,i){return PO(t.pendingWriteTree_,e,n,s,i),i?Ji(t,new Ks(tf(),e,n)):[]}function mN(t,e,n,s){xO(t.pendingWriteTree_,e,n,s);const i=Ie.fromObject(n);return Ji(t,new Fi(tf(),e,i))}function Qn(t,e,n=!1){const s=kO(t.pendingWriteTree_,e);if(DO(t.pendingWriteTree_,e)){let r=new Ie(null);return s.snap!=null?r=r.set(ge(),!0):Xe(s.children,o=>{r=r.set(new Te(o),!0)}),Ji(t,new wa(s.path,r,n))}else return[]}function lo(t,e,n){return Ji(t,new Ks(nf(),e,n))}function _N(t,e,n){const s=Ie.fromObject(n);return Ji(t,new Fi(nf(),e,s))}function gN(t,e){return Ji(t,new Gr(nf(),e))}function vN(t,e,n){const s=uf(t,n);if(s){const i=ff(s),r=i.path,o=i.queryId,a=ct(r,e),l=new Gr(sf(o),a);return df(t,r,l)}else return[]}function Na(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||iv(o,e))){const l=fN(o,e,n,s);cN(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const u=l.removed;if(a=l.events,!i){const f=u.findIndex(p=>p._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(p,_)=>ls(_));if(f&&!h){const p=t.syncPointTree_.subtree(r);if(!p.isEmpty()){const _=bN(p);for(let b=0;b<_.length;++b){const T=_[b],O=T.query,S=cv(t,T);t.listenProvider_.startListening(Or(O),Yr(t,O),S.hashFn,S.onComplete)}}}!h&&u.length>0&&!s&&(f?t.listenProvider_.stopListening(Or(e),null):u.forEach(p=>{const _=t.queryToTagMap.get(al(p));t.listenProvider_.stopListening(Or(p),_)}))}wN(t,u)}return a}function ov(t,e,n,s){const i=uf(t,s);if(i!=null){const r=ff(i),o=r.path,a=r.queryId,l=ct(o,e),u=new Ks(sf(a),l,n);return df(t,o,u)}else return[]}function yN(t,e,n,s){const i=uf(t,s);if(i){const r=ff(i),o=r.path,a=r.queryId,l=ct(o,e),u=Ie.fromObject(n),f=new Fi(sf(a),l,u);return df(t,o,f)}else return[]}function Bc(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(p,_)=>{const b=ct(p,i);r=r||is(_,b),o=o||ls(_)});let a=t.syncPointTree_.get(i);a?(o=o||ls(a),r=r||is(a,ge())):(a=new ev,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=J.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,b)=>{const T=is(b,ge());T&&(r=r.updateImmediateChild(_,T))}));const u=iv(a,e);if(!u&&!e._queryParams.loadsAllData()){const p=al(e);W(!t.queryToTagMap.has(p),"View does not exist, but we have a tag");const _=CN();t.queryToTagMap.set(p,_),t.tagToQueryMap.set(_,p)}const f=rl(t.pendingWriteTree_,i);let h=uN(a,e,n,f,r,l);if(!u&&!o&&!s){const p=sv(a,e);h=h.concat(TN(t,e,p))}return h}function cf(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ct(o,e),u=is(a,l);if(u)return u});return Yg(i,e,r,n,!0)}function EN(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(u,f)=>{const h=ct(u,n);s=s||is(f,h)});let i=t.syncPointTree_.get(n);i?s=s||is(i,ge()):(i=new ev,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new as(s,!0,!1):null,a=rl(t.pendingWriteTree_,e._path),l=tv(i,e,a,r?o.getNode():J.EMPTY_NODE,r);return sN(l)}function Ji(t,e){return av(e,t.syncPointTree_,null,rl(t.pendingWriteTree_,ge()))}function av(t,e,n,s){if(he(t.path))return lv(t,e,n,s);{const i=e.get(ge());n==null&&i!=null&&(n=is(i,ge()));let r=[];const o=fe(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,f=qg(s,o);r=r.concat(av(a,l,u,f))}return i&&(r=r.concat(lf(i,t,s,n))),r}}function lv(t,e,n,s){const i=e.get(ge());n==null&&i!=null&&(n=is(i,ge()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=qg(s,o),f=t.operationForChild(o);f&&(r=r.concat(lv(f,a,l,u)))}),i&&(r=r.concat(lf(i,t,s,n))),r}function cv(t,e){const n=e.query,s=Yr(t,n);return{hashFn:()=>(nN(e)||J.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?vN(t,n._path,s):gN(t,n._path);{const r=g1(i,n);return Na(t,n,null,r)}}}}function Yr(t,e){const n=al(e);return t.queryToTagMap.get(n)}function al(t){return t._path.toString()+"$"+t._queryIdentifier}function uf(t,e){return t.tagToQueryMap.get(e)}function ff(t){const e=t.indexOf("$");return W(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Te(t.substr(0,e))}}function df(t,e,n){const s=t.syncPointTree_.get(e);W(s,"Missing sync point for query tag that we're tracking");const i=rl(t.pendingWriteTree_,e);return lf(s,n,i,null)}function bN(t){return t.fold((e,n,s)=>{if(n&&ls(n))return[ol(n)];{let i=[];return n&&(i=nv(n)),Xe(s,(r,o)=>{i=i.concat(o)}),i}})}function Or(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(hN())(t._repo,t._path):t}function wN(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=al(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function CN(){return pN++}function TN(t,e,n){const s=e._path,i=Yr(t,e),r=cv(t,n),o=t.listenProvider_.startListening(Or(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)W(!ls(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,f,h)=>{if(!he(u)&&f&&ls(f))return[ol(f).query];{let p=[];return f&&(p=p.concat(nv(f).map(_=>_.query))),Xe(h,(_,b)=>{p=p.concat(b)}),p}});for(let u=0;u<l.length;++u){const f=l[u];t.listenProvider_.stopListening(Or(f),Yr(t,f))}}return o}/**
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
 */class hf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new hf(n)}node(){return this.node_}}class pf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Me(this.path_,e);return new pf(this.syncTree_,n)}node(){return cf(this.syncTree_,this.path_)}}const SN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Rp=function(t,e,n){if(!t||typeof t!="object")return t;if(W(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return IN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return AN(t[".sv"],e);W(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},IN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:W(!1,"Unexpected server value: "+t)}},AN=function(t,e,n){t.hasOwnProperty("increment")||W(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&W(!1,"Unexpected increment value: "+s);const i=e.node();if(W(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},uv=function(t,e,n,s){return mf(e,new pf(n,t),s)},fv=function(t,e,n){return mf(t,new hf(e),n)};function mf(t,e,n){const s=t.getPriority().val(),i=Rp(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Rp(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ge(a,He(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ge(i))),o.forEachChild(Fe,(a,l)=>{const u=mf(l,e.getImmediateChild(a),n);u!==l&&(r=r.updateImmediateChild(a,u))}),r}}/**
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
 */class _f{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function gf(t,e){let n=e instanceof Te?e:new Te(e),s=t,i=fe(n);for(;i!==null;){const r=ki(s.node.children,i)||{children:{},childCount:0};s=new _f(i,s,r),n=Ae(n),i=fe(n)}return s}function Zi(t){return t.node.value}function dv(t,e){t.node.value=e,zc(t)}function hv(t){return t.node.childCount>0}function ON(t){return Zi(t)===void 0&&!hv(t)}function ll(t,e){Xe(t.node.children,(n,s)=>{e(new _f(n,t,s))})}function pv(t,e,n,s){n&&!s&&e(t),ll(t,i=>{pv(i,e,!0,s)}),n&&s&&e(t)}function NN(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function co(t){return new Te(t.parent===null?t.name:co(t.parent)+"/"+t.name)}function zc(t){t.parent!==null&&RN(t.parent,t.name,t)}function RN(t,e,n){const s=ON(n),i=ln(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,zc(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,zc(t))}/**
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
 */const PN=/[\[\].#$\/\u0000-\u001F\u007F]/,xN=/[\[\].#$\u0000-\u001F\u007F]/,ic=10*1024*1024,vf=function(t){return typeof t=="string"&&t.length!==0&&!PN.test(t)},mv=function(t){return typeof t=="string"&&t.length!==0&&!xN.test(t)},kN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),mv(t)},DN=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Bu(t)||t&&typeof t=="object"&&ln(t,".sv")},_v=function(t,e,n,s){s&&e===void 0||cl(tl(t,"value"),e,n)},cl=function(t,e,n){const s=n instanceof Te?new X1(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Os(s));if(typeof e=="function")throw new Error(t+"contains a function "+Os(s)+" with contents = "+e.toString());if(Bu(e))throw new Error(t+"contains "+e.toString()+" "+Os(s));if(typeof e=="string"&&e.length>ic/3&&nl(e)>ic)throw new Error(t+"contains a string greater than "+ic+" utf8 bytes "+Os(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Xe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!vf(o)))throw new Error(t+" contains an invalid key ("+o+") "+Os(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);J1(s,o),cl(t,a,s),Z1(s)}),i&&r)throw new Error(t+' contains ".value" child '+Os(s)+" in addition to actual children.")}},LN=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=jr(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!vf(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Q1);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&Lt(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},MN=function(t,e,n,s){const i=tl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];Xe(e,(o,a)=>{const l=new Te(o);if(cl(i,a,Me(n,l)),qu(l)===".priority"&&!DN(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),LN(i,r)},gv=function(t,e,n,s){if(!mv(n))throw new Error(tl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},FN=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),gv(t,e,n)},yf=function(t,e){if(fe(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},$N=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!vf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!kN(n))throw new Error(tl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class UN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ul(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Qu(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function vv(t,e,n){ul(t,n),yv(t,s=>Qu(s,e))}function Ft(t,e,n){ul(t,n),yv(t,s=>Lt(s,e)||Lt(e,s))}function yv(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(WN(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function WN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Tr&&Qe("event: "+n.toString()),Xi(s)}}}/**
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
 */const VN="repo_interrupt",HN=25;class jN{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new UN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ba(),this.transactionQueueTree_=new _f,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function BN(t,e,n){if(t.stats_=Gu(t.repoInfo_),t.forceRestClient_||b1())t.server_=new Ea(t.repoInfo_,(s,i,r,o)=>{Pp(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>xp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{je(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new wn(t.repoInfo_,e,(s,i,r,o)=>{Pp(t,s,i,r,o)},s=>{xp(t,s)},s=>{zN(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=I1(t.repoInfo_,()=>new SO(t.stats_,t.server_)),t.infoData_=new EO,t.infoSyncTree_=new Np({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=lo(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ef(t,"connected",!1),t.serverSyncTree_=new Np({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const u=o(a,l);Ft(t.eventQueue_,s._path,u)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Ev(t){const n=t.infoData_.getNode(new Te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function fl(t){return SN({timestamp:Ev(t)})}function Pp(t,e,n,s,i){t.dataUpdateCount++;const r=new Te(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=pa(n,u=>He(u));o=yN(t.serverSyncTree_,r,l,i)}else{const l=He(n);o=ov(t.serverSyncTree_,r,l,i)}else if(s){const l=pa(n,u=>He(u));o=_N(t.serverSyncTree_,r,l)}else{const l=He(n);o=lo(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ui(t,r)),Ft(t.eventQueue_,a,o)}function xp(t,e){Ef(t,"connected",e),e===!1&&qN(t)}function zN(t,e){Xe(e,(n,s)=>{Ef(t,n,s)})}function Ef(t,e,n){const s=new Te("/.info/"+e),i=He(n);t.infoData_.updateSnapshot(s,i);const r=lo(t.infoSyncTree_,s,i);Ft(t.eventQueue_,s,r)}function bf(t){return t.nextWriteId_++}function KN(t,e,n){const s=EN(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=He(i).withIndex(e._queryParams.getIndex());Bc(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=lo(t.serverSyncTree_,e._path,r);else{const a=Yr(t.serverSyncTree_,e);o=ov(t.serverSyncTree_,e._path,r,a)}return Ft(t.eventQueue_,e._path,o),Na(t.serverSyncTree_,e,n,null,!0),r},i=>(uo(t,"get for query "+je(e)+" failed: "+i),Promise.reject(new Error(i))))}function GN(t,e,n,s,i){uo(t,"set",{path:e.toString(),value:n,priority:s});const r=fl(t),o=He(n,s),a=cf(t.serverSyncTree_,e),l=fv(o,a,r),u=bf(t),f=rv(t.serverSyncTree_,e,l,u,!0);ul(t.eventQueue_,f),t.server_.put(e.toString(),o.val(!0),(p,_)=>{const b=p==="ok";b||ut("set at "+e+" failed: "+p);const T=Qn(t.serverSyncTree_,u,!b);Ft(t.eventQueue_,e,T),Kc(t,i,p,_)});const h=Cf(t,e);Ui(t,h),Ft(t.eventQueue_,h,[])}function YN(t,e,n,s){uo(t,"update",{path:e.toString(),value:n});let i=!0;const r=fl(t),o={};if(Xe(n,(a,l)=>{i=!1,o[a]=uv(Me(e,a),He(l),t.serverSyncTree_,r)}),i)Qe("update() called with empty data.  Don't do anything."),Kc(t,s,"ok",void 0);else{const a=bf(t),l=mN(t.serverSyncTree_,e,o,a);ul(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,f)=>{const h=u==="ok";h||ut("update at "+e+" failed: "+u);const p=Qn(t.serverSyncTree_,a,!h),_=p.length>0?Ui(t,e):e;Ft(t.eventQueue_,_,p),Kc(t,s,u,f)}),Xe(n,u=>{const f=Cf(t,Me(e,u));Ui(t,f)}),Ft(t.eventQueue_,e,[])}}function qN(t){uo(t,"onDisconnectEvents");const e=fl(t),n=ba();$c(t.onDisconnect_,ge(),(i,r)=>{const o=uv(i,r,t.serverSyncTree_,e);Bg(n,i,o)});let s=[];$c(n,ge(),(i,r)=>{s=s.concat(lo(t.serverSyncTree_,i,r));const o=Cf(t,i);Ui(t,o)}),t.onDisconnect_=ba(),Ft(t.eventQueue_,ge(),s)}function QN(t,e,n){let s;fe(e._path)===".info"?s=Bc(t.infoSyncTree_,e,n):s=Bc(t.serverSyncTree_,e,n),vv(t.eventQueue_,e._path,s)}function XN(t,e,n){let s;fe(e._path)===".info"?s=Na(t.infoSyncTree_,e,n):s=Na(t.serverSyncTree_,e,n),vv(t.eventQueue_,e._path,s)}function JN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(VN)}function uo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Qe(n,...e)}function Kc(t,e,n,s){e&&Xi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function bv(t,e,n){return cf(t.serverSyncTree_,e,n)||J.EMPTY_NODE}function wf(t,e=t.transactionQueueTree_){if(e||dl(t,e),Zi(e)){const n=Cv(t,e);W(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&ZN(t,co(e),n)}else hv(e)&&ll(e,n=>{wf(t,n)})}function ZN(t,e,n){const s=n.map(u=>u.currentWriteId),i=bv(t,e,s);let r=i;const o=i.hash();for(let u=0;u<n.length;u++){const f=n[u];W(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const h=ct(e,f.path);r=r.updateChild(h,f.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,u=>{uo(t,"transaction put response",{path:l.toString(),status:u});let f=[];if(u==="ok"){const h=[];for(let p=0;p<n.length;p++)n[p].status=2,f=f.concat(Qn(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&h.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();dl(t,gf(t.transactionQueueTree_,e)),wf(t,t.transactionQueueTree_),Ft(t.eventQueue_,e,f);for(let p=0;p<h.length;p++)Xi(h[p])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{ut("transaction at "+l.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}Ui(t,e)}},o)}function Ui(t,e){const n=wv(t,e),s=co(n),i=Cv(t,n);return eR(t,i,s),s}function eR(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=ct(n,l.path);let f=!1,h;if(W(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)f=!0,h=l.abortReason,i=i.concat(Qn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=HN)f=!0,h="maxretry",i=i.concat(Qn(t.serverSyncTree_,l.currentWriteId,!0));else{const p=bv(t,l.path,o);l.currentInputSnapshot=p;const _=e[a].update(p.val());if(_!==void 0){cl("transaction failed: Data returned ",_,l.path);let b=He(_);typeof _=="object"&&_!=null&&ln(_,".priority")||(b=b.updatePriority(p.getPriority()));const O=l.currentWriteId,S=fl(t),E=fv(b,p,S);l.currentOutputSnapshotRaw=b,l.currentOutputSnapshotResolved=E,l.currentWriteId=bf(t),o.splice(o.indexOf(O),1),i=i.concat(rv(t.serverSyncTree_,l.path,E,l.currentWriteId,l.applyLocally)),i=i.concat(Qn(t.serverSyncTree_,O,!0))}else f=!0,h="nodata",i=i.concat(Qn(t.serverSyncTree_,l.currentWriteId,!0))}Ft(t.eventQueue_,n,i),i=[],f&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}dl(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Xi(s[a]);wf(t,t.transactionQueueTree_)}function wv(t,e){let n,s=t.transactionQueueTree_;for(n=fe(e);n!==null&&Zi(s)===void 0;)s=gf(s,n),e=Ae(e),n=fe(e);return s}function Cv(t,e){const n=[];return Tv(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Tv(t,e,n){const s=Zi(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);ll(e,i=>{Tv(t,i,n)})}function dl(t,e){const n=Zi(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,dv(e,n.length>0?n:void 0)}ll(e,s=>{dl(t,s)})}function Cf(t,e){const n=co(wv(t,e)),s=gf(t.transactionQueueTree_,e);return NN(s,i=>{rc(t,i)}),rc(t,s),pv(s,i=>{rc(t,i)}),n}function rc(t,e){const n=Zi(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(W(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(W(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Qn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?dv(e,void 0):n.length=r+1,Ft(t.eventQueue_,co(e),i);for(let o=0;o<s.length;o++)Xi(s[o])}}/**
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
 */function tR(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function nR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ut(`Invalid query segment '${n}' in query '${t}'`)}return e}const kp=function(t,e){const n=sR(t),s=n.namespace;n.domain==="firebase.com"&&Tn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Tn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||d1();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ag(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Te(n.pathString)}},sR=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let f=t.indexOf("/");f===-1&&(f=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(f,h)),f<h&&(i=tR(t.substring(f,h)));const p=nR(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const b=e.indexOf(".");s=e.substring(0,b).toLowerCase(),n=e.substring(b+1),r=s}"ns"in p&&(r=p.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */const Dp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",iR=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Dp.charAt(n%64),n=Math.floor(n/64);W(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Dp.charAt(e[i]);return W(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class rR{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+je(this.snapshot.exportVal())}}class oR{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Sv{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return W(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Tf{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return he(this._path)?null:qu(this._path)}get ref(){return new Pn(this._repo,this._path)}get _queryIdentifier(){const e=yp(this._queryParams),n=zu(e);return n==="{}"?"default":n}get _queryObject(){return yp(this._queryParams)}isEqual(e){if(e=Ot(e),!(e instanceof Tf))return!1;const n=this._repo===e._repo,s=Qu(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+q1(this._path)}}class Pn extends Tf{constructor(e,n){super(e,n,new ef,!1)}get parent(){const e=Mg(this._path);return e===null?null:new Pn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class qr{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Te(e),s=Qr(this.ref,e);return new qr(this._node.getChild(n),s,Fe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new qr(i,Qr(this.ref,s),Fe)))}hasChild(e){const n=new Te(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ps(t,e){return t=Ot(t),t._checkNotDeleted("ref"),e!==void 0?Qr(t._root,e):t._root}function Qr(t,e){return t=Ot(t),fe(t._path)===null?FN("child","path",e):gv("child","path",e),new Pn(t._repo,Me(t._path,e))}function aR(t,e){t=Ot(t),yf("push",t._path),_v("push",e,t._path,!0);const n=Ev(t._repo),s=iR(n),i=Qr(t,s),r=Qr(t,s);let o;return e!=null?o=Sf(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function lR(t){return yf("remove",t._path),Sf(t,null)}function Sf(t,e){t=Ot(t),yf("set",t._path),_v("set",e,t._path,!1);const n=new so;return GN(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function cR(t,e){MN("update",e,t._path);const n=new so;return YN(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function uR(t){t=Ot(t);const e=new Sv(()=>{}),n=new hl(e);return KN(t._repo,t,n).then(s=>new qr(s,new Pn(t._repo,t._path),t._queryParams.getIndex()))}class hl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new rR("value",this,new qr(e.snapshotNode,new Pn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new oR(this,e,n):null}matches(e){return e instanceof hl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function fR(t,e,n,s,i){const r=new Sv(n,void 0),o=new hl(r);return QN(t._repo,t,o),()=>XN(t._repo,t,o)}function Iv(t,e,n,s){return fR(t,"value",e)}aN(Pn);dN(Pn);/**
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
 */const dR="FIREBASE_DATABASE_EMULATOR_HOST",Gc={};let hR=!1;function pR(t,e,n,s){t.repoInfo_=new Ag(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function mR(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||Tn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Qe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=kp(r,i),a=o.repoInfo,l;typeof process<"u"&&tp&&(l=tp[dR]),l?(r=`http://${l}?ns=${a.namespace}`,o=kp(r,i),a=o.repoInfo):o.repoInfo.secure;const u=new C1(t.name,t.options,e);$N("Invalid Firebase Database URL",o),he(o.path)||Tn("Database URL must point to the root of a Firebase Database (not including a child path).");const f=gR(a,t,u,new w1(t.name,n));return new vR(f,t)}function _R(t,e){const n=Gc[e];(!n||n[t.key]!==t)&&Tn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),JN(t),delete n[t.key]}function gR(t,e,n,s){let i=Gc[e.name];i||(i={},Gc[e.name]=i);let r=i[t.toURLString()];return r&&Tn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new jN(t,hR,n,s),i[t.toURLString()]=r,r}class vR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(BN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Pn(this._repo,ge())),this._rootInternal}_delete(){return this._rootInternal!==null&&(_R(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Tn("Cannot call "+e+" on a deleted database.")}}function yR(t=ug(),e){const n=ju(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=$I("database");s&&ER(n,...s)}return n}function ER(t,e,n,s={}){t=Ot(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Tn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&Tn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Qo(Qo.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:UI(s.mockUserToken,t.app.options.projectId);r=new Qo(o)}pR(i,e,n,r)}/**
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
 */function bR(t){o1(Qi),Di(new Bs("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return mR(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),ns(np,sp,t),ns(np,sp,"esm2017")}wn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};wn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};bR();var wR="firebase",CR="10.13.1";/**
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
 */ns(wR,CR,"app");function If(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Av(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const TR=Av,Ov=new io("auth","Firebase",Av());/**
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
 */const Ra=new Vu("@firebase/auth");function SR(t,...e){Ra.logLevel<=Ce.WARN&&Ra.warn(`Auth (${Qi}): ${t}`,...e)}function Xo(t,...e){Ra.logLevel<=Ce.ERROR&&Ra.error(`Auth (${Qi}): ${t}`,...e)}/**
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
 */function Sn(t,...e){throw Af(t,...e)}function tn(t,...e){return Af(t,...e)}function Nv(t,e,n){const s=Object.assign(Object.assign({},TR()),{[e]:n});return new io("auth","Firebase",s).create(e,{appName:t.name})}function $s(t){return Nv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Af(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Ov.create(t,...e)}function ne(t,e,...n){if(!t)throw Af(e,...n)}function gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xo(e),new Error(e)}function In(t,e){t||gn(e)}/**
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
 */function Yc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function IR(){return Lp()==="http:"||Lp()==="https:"}function Lp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function AR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(IR()||WI()||"connection"in navigator)?navigator.onLine:!0}function OR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class fo{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=Wu()||ig()}get(){return AR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Of(t,e){In(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */const NR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const RR=new fo(3e4,6e4);function Nf(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function er(t,e,n,s,i={}){return Pv(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=qi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Rv.fetch()(xv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Pv(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},NR),e);try{const i=new xR(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Wo(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Wo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Wo(t,"user-disabled",o);const f=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Nv(t,f,u);Sn(t,f)}}catch(i){if(i instanceof ms)throw i;Sn(t,"network-request-failed",{message:String(i)})}}async function PR(t,e,n,s,i={}){const r=await er(t,e,n,s,i);return"mfaPendingCredential"in r&&Sn(t,"multi-factor-auth-required",{_serverResponse:r}),r}function xv(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Of(t.config,i):`${t.config.apiScheme}://${i}`}class xR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(tn(this.auth,"network-request-failed")),RR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wo(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=tn(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function kR(t,e){return er(t,"POST","/v1/accounts:delete",e)}async function kv(t,e){return er(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Nr(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function DR(t,e=!1){const n=Ot(t),s=await n.getIdToken(e),i=Rf(s);ne(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Nr(oc(i.auth_time)),issuedAtTime:Nr(oc(i.iat)),expirationTime:Nr(oc(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function oc(t){return Number(t)*1e3}function Rf(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Xo("JWT malformed, contained fewer than 3 sections"),null;try{const i=ha(n);return i?JSON.parse(i):(Xo("Failed to decode base64 JWT payload"),null)}catch(i){return Xo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Mp(t){const e=Rf(t);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Xr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof ms&&LR(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function LR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class MR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class qc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Nr(this.lastLoginAt),this.creationTime=Nr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Pa(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Xr(t,kv(n,{idToken:s}));ne(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Dv(r.providerUserInfo):[],a=$R(t.providerData,o),l=t.isAnonymous,u=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),f=l?u:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new qc(r.createdAt,r.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function FR(t){const e=Ot(t);await Pa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $R(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Dv(t){return t.map(e=>{var{providerId:n}=e,s=If(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function UR(t,e){const n=await Pv(t,{},async()=>{const s=qi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=xv(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Rv.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function WR(t,e){return er(t,"POST","/v2/accounts:revokeToken",Nf(t,e))}/**
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
 */class Si{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Mp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const n=Mp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await UR(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Si;return s&&(ne(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(ne(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(ne(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Si,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
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
 */function $n(t,e){ne(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vn{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=If(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new MR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new qc(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Xr(this,this.stsTokenManager.getToken(this.auth,e));return ne(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return DR(this,e)}reload(){return FR(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Pa(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qn(this.auth.app))return Promise.reject($s(this.auth));const e=await this.getIdToken();return await Xr(this,kR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,u,f;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,b=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,O=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,S=(u=n.createdAt)!==null&&u!==void 0?u:void 0,E=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:C,emailVerified:N,isAnonymous:R,providerData:D,stsTokenManager:K}=n;ne(C&&K,e,"internal-error");const ae=Si.fromJSON(this.name,K);ne(typeof C=="string",e,"internal-error"),$n(h,e.name),$n(p,e.name),ne(typeof N=="boolean",e,"internal-error"),ne(typeof R=="boolean",e,"internal-error"),$n(_,e.name),$n(b,e.name),$n(T,e.name),$n(O,e.name),$n(S,e.name),$n(E,e.name);const te=new vn({uid:C,auth:e,email:p,emailVerified:N,displayName:h,isAnonymous:R,photoURL:b,phoneNumber:_,tenantId:T,stsTokenManager:ae,createdAt:S,lastLoginAt:E});return D&&Array.isArray(D)&&(te.providerData=D.map(se=>Object.assign({},se))),O&&(te._redirectEventId=O),te}static async _fromIdTokenResponse(e,n,s=!1){const i=new Si;i.updateFromServerResponse(n);const r=new vn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Pa(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];ne(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Dv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new Si;a.updateFromIdToken(s);const l=new vn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new qc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,u),l}}/**
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
 */const Fp=new Map;function yn(t){In(t instanceof Function,"Expected a class definition");let e=Fp.get(t);return e?(In(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Fp.set(t,e),e)}/**
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
 */class Lv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Lv.type="NONE";const $p=Lv;/**
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
 */function Jo(t,e,n){return`firebase:${t}:${e}:${n}`}class Ii{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Jo(this.userKey,i.apiKey,r),this.fullPersistenceKey=Jo("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ii(yn($p),e,s);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||yn($p);const o=Jo(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const f=await u._get(o);if(f){const h=vn._fromJSON(e,f);u!==r&&(a=h),r=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Ii(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new Ii(r,e,s))}}/**
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
 */function Up(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Uv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vv(e))return"Blackberry";if(Hv(e))return"Webos";if(Fv(e))return"Safari";if((e.includes("chrome/")||$v(e))&&!e.includes("edge/"))return"Chrome";if(Wv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Mv(t=ht()){return/firefox\//i.test(t)}function Fv(t=ht()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $v(t=ht()){return/crios\//i.test(t)}function Uv(t=ht()){return/iemobile/i.test(t)}function Wv(t=ht()){return/android/i.test(t)}function Vv(t=ht()){return/blackberry/i.test(t)}function Hv(t=ht()){return/webos/i.test(t)}function Pf(t=ht()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function VR(t=ht()){var e;return Pf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function HR(){return VI()&&document.documentMode===10}function jv(t=ht()){return Pf(t)||Wv(t)||Hv(t)||Vv(t)||/windows phone/i.test(t)||Uv(t)}/**
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
 */function Bv(t,e=[]){let n;switch(t){case"Browser":n=Up(ht());break;case"Worker":n=`${Up(ht())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qi}/${s}`}/**
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
 */class jR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function BR(t,e={}){return er(t,"GET","/v2/passwordPolicy",Nf(t,e))}/**
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
 */const zR=6;class KR{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:zR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class GR{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wp(this),this.idTokenSubscription=new Wp(this),this.beforeStateQueue=new jR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ov,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Ii.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await kv(this,{idToken:e}),s=await vn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(qn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Pa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=OR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qn(this.app))return Promise.reject($s(this));const n=e?Ot(e):null;return n&&ne(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qn(this.app)?Promise.reject($s(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qn(this.app)?Promise.reject($s(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await BR(this),n=new KR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new io("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await WR(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;ne(n,this,"argument-error"),this.redirectPersistenceManager=await Ii.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Bv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&SR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function xf(t){return Ot(t)}class Wp{constructor(e){this.auth=e,this.observer=null,this.addObserver=QI(n=>this.observer=n)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let kf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function YR(t){kf=t}function qR(t){return kf.loadJS(t)}function QR(){return kf.gapiScript}function XR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function JR(t,e){const n=ju(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(ma(r,e??{}))return i;Sn(i,"already-initialized")}return n.initialize({options:e})}function ZR(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function eP(t,e,n){const s=xf(t);ne(s._canInitEmulator,s,"emulator-config-failed"),ne(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=zv(e),{host:o,port:a}=tP(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),nP()}function zv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tP(t){const e=zv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Vp(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Vp(o)}}}function Vp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */async function Ai(t,e){return PR(t,"POST","/v1/accounts:signInWithIdp",Nf(t,e))}/**
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
 */const sP="http://localhost";class Ys extends Kv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ys(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Sn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=If(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Ys(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ai(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ai(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ai(e,n)}buildRequest(){const e={requestUri:sP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qi(n)}return e}}/**
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
 */class ho extends Gv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class zn extends ho{constructor(){super("facebook.com")}static credential(e){return Ys._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";zn.PROVIDER_ID="facebook.com";/**
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
 */class Kn extends ho{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ys._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Kn.credential(n,s)}catch{return null}}}Kn.GOOGLE_SIGN_IN_METHOD="google.com";Kn.PROVIDER_ID="google.com";/**
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
 */class Gn extends ho{constructor(){super("github.com")}static credential(e){return Ys._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.GITHUB_SIGN_IN_METHOD="github.com";Gn.PROVIDER_ID="github.com";/**
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
 */class Yn extends ho{constructor(){super("twitter.com")}static credential(e,n){return Ys._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Yn.credential(n,s)}catch{return null}}}Yn.TWITTER_SIGN_IN_METHOD="twitter.com";Yn.PROVIDER_ID="twitter.com";/**
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
 */class Wi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await vn._fromIdTokenResponse(e,s,i),o=Hp(s);return new Wi({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Hp(s);return new Wi({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Hp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class xa extends ms{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,xa.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new xa(e,n,s,i)}}function Yv(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?xa._fromErrorAndOperation(t,r,e,s):r})}async function iP(t,e,n=!1){const s=await Xr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Wi._forOperation(t,"link",s)}/**
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
 */async function rP(t,e,n=!1){const{auth:s}=t;if(qn(s.app))return Promise.reject($s(s));const i="reauthenticate";try{const r=await Xr(t,Yv(s,i,e,t),n);ne(r.idToken,s,"internal-error");const o=Rf(r.idToken);ne(o,s,"internal-error");const{sub:a}=o;return ne(t.uid===a,s,"user-mismatch"),Wi._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Sn(s,"user-mismatch"),r}}/**
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
 */async function oP(t,e,n=!1){if(qn(t.app))return Promise.reject($s(t));const s="signIn",i=await Yv(t,s,e),r=await Wi._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function aP(t,e,n,s){return Ot(t).onIdTokenChanged(e,n,s)}function lP(t,e,n){return Ot(t).beforeAuthStateChanged(e,n)}const ka="__sak";/**
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
 */class qv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ka,"1"),this.storage.removeItem(ka),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const cP=1e3,uP=10;class Qv extends qv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=jv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);HR()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,uP):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},cP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qv.type="LOCAL";const fP=Qv;/**
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
 */function dP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class pl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new pl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,r)),l=await dP(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pl.receivers=[];/**
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
 */function Df(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class hP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const u=Df("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const p=h;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(f),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(p.data.response);break;default:clearTimeout(f),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function nn(){return window}function pP(t){nn().location.href=t}/**
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
 */function Zv(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function mP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _P(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gP(){return Zv()?self:null}/**
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
 */const ey="firebaseLocalStorageDb",vP=1,Da="firebaseLocalStorage",ty="fbase_key";class po{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ml(t,e){return t.transaction([Da],e?"readwrite":"readonly").objectStore(Da)}function yP(){const t=indexedDB.deleteDatabase(ey);return new po(t).toPromise()}function Qc(){const t=indexedDB.open(ey,vP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Da,{keyPath:ty})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Da)?e(s):(s.close(),await yP(),e(await Qc()))})})}async function jp(t,e,n){const s=ml(t,!0).put({[ty]:e,value:n});return new po(s).toPromise()}async function EP(t,e){const n=ml(t,!1).get(e),s=await new po(n).toPromise();return s===void 0?null:s.value}function Bp(t,e){const n=ml(t,!0).delete(e);return new po(n).toPromise()}const bP=800,wP=3;class ny{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>wP)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pl._getInstance(gP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await mP(),!this.activeServiceWorker)return;this.sender=new hP(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_P()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qc();return await jp(e,ka,"1"),await Bp(e,ka),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>jp(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>EP(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=ml(i,!1).getAll();return new po(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ny.type="LOCAL";const CP=ny;new fo(3e4,6e4);/**
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
 */function TP(t,e){return e?yn(e):(ne(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Lf extends Kv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ai(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ai(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ai(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function SP(t){return oP(t.auth,new Lf(t),t.bypassAuthState)}function IP(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),rP(n,new Lf(t),t.bypassAuthState)}async function AP(t){const{auth:e,user:n}=t;return ne(n,e,"internal-error"),iP(n,new Lf(t),t.bypassAuthState)}/**
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
 */class sy{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return SP;case"linkViaPopup":case"linkViaRedirect":return AP;case"reauthViaPopup":case"reauthViaRedirect":return IP;default:Sn(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const OP=new fo(2e3,1e4);class mi extends sy{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,mi.currentPopupAction&&mi.currentPopupAction.cancel(),mi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=Df();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,OP.get())};e()}}mi.currentPopupAction=null;/**
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
 */const NP="pendingRedirect",Zo=new Map;class RP extends sy{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Zo.get(this.auth._key());if(!e){try{const s=await PP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Zo.set(this.auth._key(),e)}return this.bypassAuthState||Zo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PP(t,e){const n=DP(e),s=kP(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function xP(t,e){Zo.set(t._key(),e)}function kP(t){return yn(t._redirectPersistence)}function DP(t){return Jo(NP,t.config.apiKey,t.name)}async function LP(t,e,n=!1){if(qn(t.app))return Promise.reject($s(t));const s=xf(t),i=TP(s,e),o=await new RP(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const MP=10*60*1e3;class FP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!$P(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!iy(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(tn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=MP&&this.cachedEventUids.clear(),this.cachedEventUids.has(zp(e))}saveEventToCache(e){this.cachedEventUids.add(zp(e)),this.lastProcessedEventTime=Date.now()}}function zp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function iy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function $P(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iy(t);default:return!1}}/**
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
 */async function UP(t,e={}){return er(t,"GET","/v1/projects",e)}/**
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
 */const WP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VP=/^https?/;async function HP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await UP(t);for(const n of e)try{if(jP(n))return}catch{}Sn(t,"unauthorized-domain")}function jP(t){const e=Yc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!VP.test(n))return!1;if(WP.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const BP=new fo(3e4,6e4);function Kp(){const t=nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zP(t){return new Promise((e,n)=>{var s,i,r;function o(){Kp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Kp(),n(tn(t,"network-request-failed"))},timeout:BP.get()})}if(!((i=(s=nn().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=nn().gapi)===null||r===void 0)&&r.load)o();else{const a=XR("iframefcb");return nn()[a]=()=>{gapi.load?o():n(tn(t,"network-request-failed"))},qR(`${QR()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ea=null,e})}let ea=null;function KP(t){return ea=ea||zP(t),ea}/**
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
 */const GP=new fo(5e3,15e3),YP="__/auth/iframe",qP="emulator/auth/iframe",QP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JP(t){const e=t.config;ne(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Of(e,qP):`https://${t.config.authDomain}/${YP}`,s={apiKey:e.apiKey,appName:t.name,v:Qi},i=XP.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${qi(s).slice(1)}`}async function ZP(t){const e=await KP(t),n=nn().gapi;return ne(n,t,"internal-error"),e.open({where:document.body,url:JP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QP,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=tn(t,"network-request-failed"),a=nn().setTimeout(()=>{r(o)},GP.get());function l(){nn().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const ex={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tx=500,nx=600,sx="_blank",ix="http://localhost";class Gp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rx(t,e,n,s=tx,i=nx){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ex),{width:s.toString(),height:i.toString(),top:r,left:o}),u=ht().toLowerCase();n&&(a=$v(u)?sx:n),Mv(u)&&(e=e||ix,l.scrollbars="yes");const f=Object.entries(l).reduce((p,[_,b])=>`${p}${_}=${b},`,"");if(VR(u)&&a!=="_self")return ox(e||"",a),new Gp(null);const h=window.open(e||"",a,f);ne(h,t,"popup-blocked");try{h.focus()}catch{}return new Gp(h)}function ox(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const ax="__/auth/handler",lx="emulator/auth/handler",cx=encodeURIComponent("fac");async function Yp(t,e,n,s,i,r){ne(t.config.authDomain,t,"auth-domain-config-required"),ne(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Qi,eventId:i};if(e instanceof Gv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Nc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,h]of Object.entries({}))o[f]=h}if(e instanceof ho){const f=e.getScopes().filter(h=>h!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await t._getAppCheckToken(),u=l?`#${cx}=${encodeURIComponent(l)}`:"";return`${ux(t)}?${qi(a).slice(1)}${u}`}function ux({config:t}){return t.emulator?Of(t,lx):`https://${t.authDomain}/${ax}`}/**
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
 */const ac="webStorageSupport";class fx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jv,this._completeRedirectFn=LP,this._overrideRedirectResult=xP}async _openPopup(e,n,s,i){var r;In((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Yp(e,n,s,Yc(),i);return rx(e,o,Df())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Yp(e,n,s,Yc(),i);return pP(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(In(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await ZP(e),s=new FP(e);return n.register("authEvent",i=>(ne(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ac,{type:ac},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[ac];o!==void 0&&n(!!o),Sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=HP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return jv()||Fv()||Pf()}}const dx=fx;var qp="@firebase/auth",Qp="1.7.8";/**
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
 */class hx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function px(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mx(t){Di(new Bs("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;ne(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bv(t)},u=new GR(s,i,r,l);return ZR(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Di(new Bs("auth-internal",e=>{const n=xf(e.getProvider("auth").getImmediate());return(s=>new hx(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ns(qp,Qp,px(t)),ns(qp,Qp,"esm2017")}/**
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
 */const _x=5*60,gx=sg("authIdTokenMaxAge")||_x;let Xp=null;const vx=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>gx)return;const i=n==null?void 0:n.token;Xp!==i&&(Xp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function yx(t=ug()){const e=ju(t,"auth");if(e.isInitialized())return e.getImmediate();const n=JR(t,{popupRedirectResolver:dx,persistence:[CP,fP,Jv]}),s=sg("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=vx(r.toString());lP(n,o,()=>o(n.currentUser)),aP(n,a=>o(a))}}const i=tg("auth");return i&&eP(n,`http://${i}`),n}function Ex(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}YR({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=tn("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",Ex().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mx("Browser");const bx={apiKey:"AIzaSyBzTpxi4LfDfgrbLNcB0UfwCYHhx0s5-rE",authDomain:"memorize-6ae41.firebaseapp.com",databaseURL:"https://memorize-6ae41-default-rtdb.firebaseio.com",projectId:"memorize-6ae41",storageBucket:"memorize-6ae41.appspot.com",messagingSenderId:"315582420206",appId:"1:315582420206:web:cc66dacd4ffef86e214fff",measurementId:"G-PTHK6LB2FC"},ry=cg(bx),xs=yR(ry);yx(ry);function oy(){return{setData:async r=>{{const o=Ps(xs);try{await Sf(o,r),console.log("Data is set successfully!")}catch(a){console.error("Error setting data: ",a),alert("取得資料失敗，權限不足！")}}},getData:async()=>{{const r=Ps(xs);try{const o=await uR(r);o.exists()?console.log("Data:",o.val()):console.log("No data available")}catch(o){console.error("Error getting data: ",o),alert("取得資料失敗，權限不足！")}}},updateData:async(r,o="")=>{{const a=Ps(xs,o);try{await cR(a,r),console.log("Data is updated successfully!")}catch(l){console.error("Error updating data: ",l),alert("修改資料失敗，權限不足！")}}},deleteData:async r=>{{const o=Ps(xs,r);try{await lR(o),console.log("Data is deleted successfully!")}catch(a){console.error("Error deleting data: ",a),alert("刪除資料失敗，權限不足！")}}},addData:async(r,o)=>{try{await aR(Ps(xs,o),r),console.log("資料已成功新增到Firebase")}catch(a){console.error("Error adding data: ",a),alert("新增資料失敗，權限不足！")}}}}const ay=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},cn=t=>(x0("data-v-a324a714"),t=t(),k0(),t),wx={id:"todoListPage",class:"bg-warning"},Cx={class:"d-flex flex-column flex-sm-row"},Tx=cn(()=>$("h2",{class:"text-center"},"WordBox 單字盒",-1)),Sx={class:"d-flex justify-content-end"},Ix={class:"me-3"},Ax={class:"container"},Ox={class:"text-end"},Nx=cn(()=>$("button",{class:"btn btn-primary me-2"},"Quiz Mode",-1)),Rx={key:0,class:"row align-items-end mt-3 pt-3 rounded-3",style:{border:"2px solid rgba(0, 0, 0, 0.2)"}},Px={class:"col-md-3 mb-3"},xx=cn(()=>$("label",{for:"englishWord",class:"form-label"},"英文",-1)),kx={class:"col-md-3 mb-3"},Dx=cn(()=>$("label",{for:"chineseWord",class:"form-label"},"中文",-1)),Lx={class:"col-md-3 mb-3"},Mx=cn(()=>$("label",{for:"partOfSpeech",class:"form-label"},"詞性",-1)),Fx=L_('<option disabled value="" data-v-a324a714>請選擇</option><option value="n" data-v-a324a714>名詞</option><option value="v" data-v-a324a714>動詞</option><option value="adj" data-v-a324a714>形容詞</option><option value="adv" data-v-a324a714>副詞</option><option value="prep" data-v-a324a714>介係詞</option><option value="phrase" data-v-a324a714>片語</option><option value="others" data-v-a324a714>其他</option>',8),$x=[Fx],Ux={key:1,class:"row align-items-end mt-3 pt-3 rounded-3",style:{border:"2px solid rgba(0, 0, 0, 0.2)"}},Wx={class:"col-md-3 mb-3"},Vx=cn(()=>$("label",{for:"englishWord",class:"form-label"},"英文",-1)),Hx={class:"col-md-3 mb-3"},jx=cn(()=>$("label",{for:"chineseWord",class:"form-label"},"中文",-1)),Bx={class:"col-md-3 mb-3"},zx=cn(()=>$("label",{for:"partOfSpeech",class:"form-label"},"詞性",-1)),Kx=L_('<option disabled value="" data-v-a324a714>請選擇</option><option value="n" data-v-a324a714>名詞</option><option value="v" data-v-a324a714>動詞</option><option value="adj" data-v-a324a714>形容詞</option><option value="adv" data-v-a324a714>副詞</option><option value="prep" data-v-a324a714>介係詞</option><option value="phrase" data-v-a324a714>片語</option><option value="others" data-v-a324a714>其他</option>',8),Gx=[Kx],Yx={class:"container vhContainer"},qx={class:""},Qx={class:"mt-4"},Xx={class:"d-flex align-items-center mb-3"},Jx=cn(()=>$("h4",{class:"me-3 my-0"},"單字列表",-1)),Zx={class:"table table-hover table-striped rounded",style:{overflow:"auto !important"}},ek=cn(()=>$("thead",{class:"position-sticky top-0 start-0",style:{"z-index":"1"}},[$("tr",null,[$("th",{scope:"col"},"序號"),$("th",{scope:"col"},"英文"),$("th",{scope:"col"},"中文"),$("th",{scope:"col"},"詞性"),$("th",{scope:"col"},"錯誤次數"),$("th",{scope:"col"},"操作")])],-1)),tk={class:"d-flex align-items-center"},nk=["onClick"],sk=["onClick"],ik={__name:"WordsList",setup(t){const{updateData:e}=oy(),s=De((E=>E?E.charAt(0).toUpperCase()+E.slice(1).toLowerCase():"")(localStorage.getItem("memorize_name"))),i=De(null),r=De([]),o=De({enWord:"",cnWord:"",partOfSpeech:""}),a=De({id:null,en:"",cn:"",pos:""}),l=()=>{o.value.enWord&&o.value.cnWord&&o.value.partOfSpeech?(r.value.push({id:`${o.value.enWord}_${new Date().getTime()}`,en:o.value.enWord,cn:o.value.cnWord,pos:o.value.partOfSpeech,errCnt:0}),o.value.enWord="",o.value.cnWord="",o.value.partOfSpeech="",p()):alert("請填寫所有欄位")},u=E=>{a.value.id=E.id,a.value.en=E.en,a.value.cn=E.cn,a.value.pos=E.pos,i.value="edit"},f=()=>{a.value.en&&a.value.cn&&a.value.pos?(r.value.forEach(E=>{E.id===a.value.id&&(E.en=a.value.en,E.cn=a.value.cn,E.pos=a.value.pos)}),a.value.id=null,a.value.en="",a.value.cn="",a.value.pos="",i.value="add",p()):alert("請填寫所有欄位")},h=E=>{let C="";if(r.value.forEach(R=>{R.id===E&&(C=`${R.en} / ${R.cn}`)}),confirm(`是否確定要刪除 ${C} ？`)){const R=r.value.findIndex(D=>D.id===E);R!==-1&&(r.value.splice(R,1),p())}},p=async()=>{const C={[localStorage.getItem("memorize_name")]:{wordList:r.value}};try{await e(C,"/"),console.log("資料已成功設置！")}catch(N){console.error("設定資料時發生錯誤：",N),alert("設定資料失敗！")}},_=()=>{const E=localStorage.getItem("memorize_name");Iv(Ps(xs),C=>{var R;const N=C.val();console.log(N),r.value=((R=N==null?void 0:N[E])==null?void 0:R.wordList)||[]})},b=De("default"),T=Ve(()=>b.value==="alphabet"?[...r.value].sort((E,C)=>E.en.localeCompare(C.en)):b.value==="errorCount"?[...r.value].sort((E,C)=>C.errCnt-E.errCnt):r.value),O=E=>{b.value=E},S=()=>{localStorage.clear(),Jr.push("/login")};return Pu(()=>{var D,K;const E=(D=localStorage.getItem("memorize_name"))==null?void 0:D.toLowerCase(),C=(K=localStorage.getItem("memorize_pw"))==null?void 0:K.toLowerCase();(E==="alex"||E==="yiyu")&&C==="520520"?_():Jr.push("/login")}),(E,C)=>{const N=m_("font-awesome-icon");return Re(),Ke("div",wx,[$("nav",Cx,[Tx,$("ul",Sx,[$("li",Ix,[Se(jt(fa),{to:"/"},{default:oa(()=>[$("span",null,kt(s.value)+" 的英文單字列表",1)]),_:1})]),$("li",{onClick:S,style:{cursor:"pointer"}},"登出")])]),$("div",Ax,[$("div",Ox,[Se(jt(fa),{to:"/quizmode"},{default:oa(()=>[Nx]),_:1}),$("button",{onClick:C[0]||(C[0]=R=>i.value="add"),class:"btn btn-primary"},"新增")]),i.value==="add"?(Re(),Ke("div",Rx,[$("div",{class:"text-end cursor-pointer",onClick:C[1]||(C[1]=R=>i.value=null)},[Se(N,{icon:"fa-solid fa-xmark"})]),$("div",Px,[xx,pn($("input",{type:"text",id:"englishWord",class:"form-control",placeholder:"英文","onUpdate:modelValue":C[2]||(C[2]=R=>o.value.enWord=R)},null,512),[[Ds,o.value.enWord]])]),$("div",kx,[Dx,pn($("input",{type:"text",id:"chineseWord",class:"form-control",placeholder:"中文","onUpdate:modelValue":C[3]||(C[3]=R=>o.value.cnWord=R)},null,512),[[Ds,o.value.cnWord]])]),$("div",Lx,[Mx,pn($("select",{id:"partOfSpeech","onUpdate:modelValue":C[4]||(C[4]=R=>o.value.partOfSpeech=R),class:"form-select"},$x,512),[[Th,o.value.partOfSpeech]])]),$("div",{class:"col-md-3 mb-3"},[$("button",{onClick:l,class:"btn btn-primary w-100"},"新增")])])):i.value==="edit"?(Re(),Ke("div",Ux,[$("div",{class:"text-end cursor-pointer",onClick:C[5]||(C[5]=R=>i.value=null)},[Se(N,{icon:"fa-solid fa-xmark"})]),$("div",Wx,[Vx,pn($("input",{type:"text",id:"englishWord",class:"form-control",placeholder:"英文","onUpdate:modelValue":C[6]||(C[6]=R=>a.value.en=R)},null,512),[[Ds,a.value.en]])]),$("div",Hx,[jx,pn($("input",{type:"text",id:"chineseWord",class:"form-control",placeholder:"中文","onUpdate:modelValue":C[7]||(C[7]=R=>a.value.cn=R)},null,512),[[Ds,a.value.cn]])]),$("div",Bx,[zx,pn($("select",{id:"partOfSpeech","onUpdate:modelValue":C[8]||(C[8]=R=>a.value.pos=R),class:"form-select"},Gx,512),[[Th,a.value.pos]])]),$("div",{class:"col-md-3 mb-3"},[$("button",{onClick:f,class:"btn btn-primary w-100"},"修改")])])):Vn("",!0)]),$("div",Yx,[$("div",qx,[$("div",Qx,[$("div",Xx,[Jx,$("button",{onClick:C[9]||(C[9]=R=>O("default")),class:"btn btn-outline-secondary me-2"}," 預設排序 "),$("button",{onClick:C[10]||(C[10]=R=>O("alphabet")),class:"btn btn-outline-secondary me-2"}," 字母排序 "),$("button",{onClick:C[11]||(C[11]=R=>O("errorCount")),class:"btn btn-outline-secondary me-2"}," 錯誤次數排序 ")]),$("div",null,[$("div",{class:"position-relative",style:ja([{overflow:"auto"},[i.value===null?"height: calc(100vh - 300px)":"height: calc(100vh - 600px)"]])},[$("table",Zx,[ek,$("tbody",null,[(Re(!0),Ke(Qt,null,G0(T.value,(R,D)=>(Re(),Ke("tr",{key:D},[$("td",null,kt(D+=1),1),$("td",null,kt(R.en),1),$("td",null,kt(R.cn),1),$("td",null,kt(R.pos),1),$("td",null,kt(R.errCnt),1),$("td",null,[$("div",tk,[$("div",{onClick:K=>u(R),class:"text-primary me-2 cursor-pointer"},[Se(N,{icon:"fa-solid fa-pen-to-square"})],8,nk),$("div",{onClick:K=>h(R.id),class:"text-danger fs-5 cursor-pointer"},[Se(N,{icon:"fa-solid fa-xmark"})],8,sk)])])]))),128))])])],4)])])])])])}}},rk=ay(ik,[["__scopeId","data-v-a324a714"]]),ok={class:"bg-warning vh-100 d-flex flex-column align-items-center justify-content-between"},ak={class:"position-relative d-flex align-items-center justify-content-center vh-50 w-100 bg-up"},lk={key:0,class:"text-center",style:{"font-size":"36px"}},ck={key:1,class:"text-center",style:{"font-size":"36px"}},uk={class:"position-absolute top-0 start-0"},fk={class:"position-relative d-flex align-items-center justify-content-center vh-50 w-100 bg-dwn"},dk={key:0,class:"text-center",style:{"font-size":"36px"}},hk={key:1,class:"text-center",style:{"font-size":"36px"}},pk={class:"w-100",style:{overflow:"auto","word-break":"break-all"}},mk={class:"position-absolute top-0 start-0"},_k={class:"text-center mb-5"},gk={class:"mt-4",style:{"font-size":"20px"}},vk={key:0,class:"d-flex justify-content-center"},yk={class:"btn btn-primary btn-lg"},Ek={key:0,class:"position-absolute end-0 top-0 d-flex justify-content-center align-items-center m-2 fs-4"},bk={class:"position-absolute end-0 bottom-0 d-flex flex-column"},wk={__name:"QuizMode",setup(t){const{updateData:e}=oy();De(localStorage.getItem("nickname")),De([]),De(""),De(!1),De(null);const n=De([]),s=De([]),i=De([]),r=De(""),o=De(!1),a=De(!0),l=De(!0),u=De(0),f=Ve(()=>i.value.length===n.value.length),h=()=>{p()};bi(u,N=>{N===""&&(u.value=0),n.value=JSON.parse(JSON.stringify(s.value)).filter(R=>R.errCnt>=N)});const p=()=>{if(f.value)return;o.value||(o.value=!0);const N=n.value.filter(D=>i.value.findIndex(K=>K.id===D.id)===-1),R=Math.floor(Math.random()*N.length);r.value=N[R],i.value.push(r.value)},_=()=>{i.value=[],r.value={},o.value=!1},b=()=>{f.value&&alert("已全部完成！"),p()},T=()=>{s.value.forEach(N=>{N.id===r.value.id&&(N.errCnt+=1)}),E(),f.value&&alert("已全部完成！"),p()},O=()=>{a.value=!a.value},S=()=>{l.value=!l.value},E=async()=>{const R={[localStorage.getItem("memorize_name")]:{wordList:s.value}};try{await e(R,"/"),console.log("資料已成功設置！")}catch(D){console.error("設定資料時發生錯誤：",D),alert("設定資料失敗！")}},C=()=>{const N=localStorage.getItem("memorize_name");Iv(Ps(xs),R=>{var K;const D=R.val();console.log(D),s.value=JSON.parse(JSON.stringify(((K=D==null?void 0:D[N])==null?void 0:K.wordList)||[])),n.value=JSON.parse(JSON.stringify(s.value)).filter(ae=>ae.errCnt>=u.value)})};return Pu(()=>{var ae,te;const N=(ae=localStorage.getItem("memorize_name"))==null?void 0:ae.toLowerCase(),R=(te=localStorage.getItem("memorize_pw"))==null?void 0:te.toLowerCase();(N==="alex"||N==="yiyu")&&R==="520520"?C():Jr.push("/login")}),(N,R)=>{const D=m_("font-awesome-icon");return Re(),Ke("div",ok,[$("div",ak,[o.value?(Re(),Ke("div",ck,[$("div",null,kt(l.value?r.value.cn:"---"),1),$("div",uk,[l.value?(Re(),hi(D,{key:0,onClick:S,icon:"fa-solid fa-eye"})):(Re(),hi(D,{key:1,onClick:S,icon:"fa-solid fa-eye-slash"}))])])):(Re(),Ke("div",lk,"準備開始"))]),$("div",fk,[o.value?(Re(),Ke("div",hk,[$("div",pk,kt(a.value?r.value.en:"---"),1),$("div",mk,[a.value?(Re(),hi(D,{key:0,onClick:O,icon:"fa-solid fa-eye"})):(Re(),hi(D,{key:1,onClick:O,icon:"fa-solid fa-eye-slash"}))])])):(Re(),Ke("div",dk,"Ready"))]),$("div",_k,[$("div",gk,kt(i.value.length)+" / "+kt(n.value.length),1),o.value?Vn("",!0):(Re(),Ke("div",vk,[Se(jt(fa),{to:"/",class:"me-1"},{default:oa(()=>[$("button",yk,[Se(D,{icon:"fa-solid fa-house"})])]),_:1}),pn($("input",{type:"number",class:"form-control me-1 w-50","onUpdate:modelValue":R[0]||(R[0]=K=>u.value=K)},null,512),[[Ds,u.value]]),$("button",{onClick:h,class:"btn btn-primary btn-lg"},[Se(D,{icon:"fa-solid fa-play"})])])),o.value?(Re(),Ke("button",{key:1,onClick:_,class:"btn btn-secondary btn-lg"},"Reset")):Vn("",!0)]),o.value?(Re(),Ke("div",Ek,[Se(D,{icon:"fa-solid fa-xmark"}),D_("："+kt(r.value.errCnt),1)])):Vn("",!0),$("div",bk,[o.value?(Re(),Ke("button",{key:0,onClick:b,class:"btn btn-primary btn-lg mb-2 me-3"},[Se(D,{icon:"fa-solid fa-arrow-right",class:"text-white"})])):Vn("",!0),o.value?(Re(),Ke("button",{key:1,onClick:b,class:"btn btn-success btn-lg mb-2 me-3"},[Se(D,{icon:"fa-solid fa-check",class:"text-white"})])):Vn("",!0),o.value?(Re(),Ke("button",{key:2,onClick:T,class:"btn btn-danger btn-lg mb-3 me-3"},[Se(D,{icon:"fa-solid fa-xmark",class:"text-white"})])):Vn("",!0)])])}}},Ck=ay(wk,[["__scopeId","data-v-6748f00b"]]),Jr=_I({history:KS("/"),routes:[{path:"/",name:"wordslist",component:rk},{path:"/login",name:"login",component:NI},{path:"/quizmode",name:"quizmode",component:Ck}]}),Jp=()=>{};let Mf={},ly={},cy=null,uy={mark:Jp,measure:Jp};try{typeof window<"u"&&(Mf=window),typeof document<"u"&&(ly=document),typeof MutationObserver<"u"&&(cy=MutationObserver),typeof performance<"u"&&(uy=performance)}catch{}const{userAgent:Zp=""}=Mf.navigator||{},cs=Mf,Ne=ly,em=cy,Vo=uy;cs.document;const xn=!!Ne.documentElement&&!!Ne.head&&typeof Ne.addEventListener=="function"&&typeof Ne.createElement=="function",fy=~Zp.indexOf("MSIE")||~Zp.indexOf("Trident/");var xe="classic",dy="duotone",Ct="sharp",Tt="sharp-duotone",Tk=[xe,dy,Ct,Tt],Sk={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},tm={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Ik=["kit"],Ak=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,Ok=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Nk={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Rk={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Pk={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},xk={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},kk={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Dk={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},hy={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Lk=["solid","regular","light","thin","duotone","brands"],py=[1,2,3,4,5,6,7,8,9,10],Mk=py.concat([11,12,13,14,15,16,17,18,19,20]),_r={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Fk=[...Object.keys(xk),...Lk,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",_r.GROUP,_r.SWAP_OPACITY,_r.PRIMARY,_r.SECONDARY].concat(py.map(t=>"".concat(t,"x"))).concat(Mk.map(t=>"w-".concat(t))),$k={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Uk={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Wk={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},nm={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const An="___FONT_AWESOME___",Xc=16,my="fa",_y="svg-inline--fa",qs="data-fa-i2svg",Jc="data-fa-pseudo-element",Vk="data-fa-pseudo-element-pending",Ff="data-prefix",$f="data-icon",sm="fontawesome-i2svg",Hk="async",jk=["HTML","HEAD","STYLE","SCRIPT"],gy=(()=>{try{return!0}catch{return!1}})(),vy=[xe,Ct,Tt];function mo(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[xe]}})}const yy={...hy};yy[xe]={...hy[xe],...tm.kit,...tm["kit-duotone"]};const Us=mo(yy),Zc={...Dk};Zc[xe]={...Zc[xe],...nm.kit,...nm["kit-duotone"]};const Zr=mo(Zc),eu={...kk};eu[xe]={...eu[xe],...Wk.kit};const Ws=mo(eu),tu={...Pk};tu[xe]={...tu[xe],...Uk.kit};const Bk=mo(tu),zk=Ak,Ey="fa-layers-text",Kk=Ok,Gk={...Sk};mo(Gk);const Yk=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],lc=_r,Vi=new Set;Object.keys(Zr[xe]).map(Vi.add.bind(Vi));Object.keys(Zr[Ct]).map(Vi.add.bind(Vi));Object.keys(Zr[Tt]).map(Vi.add.bind(Vi));const qk=[...Ik,...Fk],Rr=cs.FontAwesomeConfig||{};function Qk(t){var e=Ne.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Xk(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Ne&&typeof Ne.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,s]=e;const i=Xk(Qk(n));i!=null&&(Rr[s]=i)});const by={styleDefault:"solid",familyDefault:"classic",cssPrefix:my,replacementClass:_y,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Rr.familyPrefix&&(Rr.cssPrefix=Rr.familyPrefix);const Hi={...by,...Rr};Hi.autoReplaceSvg||(Hi.observeMutations=!1);const q={};Object.keys(by).forEach(t=>{Object.defineProperty(q,t,{enumerable:!0,set:function(e){Hi[t]=e,Pr.forEach(n=>n(q))},get:function(){return Hi[t]}})});Object.defineProperty(q,"familyPrefix",{enumerable:!0,set:function(t){Hi.cssPrefix=t,Pr.forEach(e=>e(q))},get:function(){return Hi.cssPrefix}});cs.FontAwesomeConfig=q;const Pr=[];function Jk(t){return Pr.push(t),()=>{Pr.splice(Pr.indexOf(t),1)}}const Un=Xc,Zt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Zk(t){if(!t||!xn)return;const e=Ne.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Ne.head.childNodes;let s=null;for(let i=n.length-1;i>-1;i--){const r=n[i],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(s=r)}return Ne.head.insertBefore(e,s),t}const eD="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function eo(){let t=12,e="";for(;t-- >0;)e+=eD[Math.random()*62|0];return e}function tr(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Uf(t){return t.classList?tr(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function wy(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function tD(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(wy(t[n]),'" '),"").trim()}function _l(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Wf(t){return t.size!==Zt.size||t.x!==Zt.x||t.y!==Zt.y||t.rotate!==Zt.rotate||t.flipX||t.flipY}function nD(t){let{transform:e,containerWidth:n,iconWidth:s}=t;const i={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(r," ").concat(o," ").concat(a)},u={transform:"translate(".concat(s/2*-1," -256)")};return{outer:i,inner:l,path:u}}function sD(t){let{transform:e,width:n=Xc,height:s=Xc,startCentered:i=!1}=t,r="";return i&&fy?r+="translate(".concat(e.x/Un-n/2,"em, ").concat(e.y/Un-s/2,"em) "):i?r+="translate(calc(-50% + ".concat(e.x/Un,"em), calc(-50% + ").concat(e.y/Un,"em)) "):r+="translate(".concat(e.x/Un,"em, ").concat(e.y/Un,"em) "),r+="scale(".concat(e.size/Un*(e.flipX?-1:1),", ").concat(e.size/Un*(e.flipY?-1:1),") "),r+="rotate(".concat(e.rotate,"deg) "),r}var iD=`:root, :host {
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
}`;function Cy(){const t=my,e=_y,n=q.cssPrefix,s=q.replacementClass;let i=iD;if(n!==t||s!==e){const r=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(r,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(s))}return i}let im=!1;function cc(){q.autoAddCss&&!im&&(Zk(Cy()),im=!0)}var rD={mixout(){return{dom:{css:Cy,insertCss:cc}}},hooks(){return{beforeDOMElementCreation(){cc()},beforeI2svg(){cc()}}}};const On=cs||{};On[An]||(On[An]={});On[An].styles||(On[An].styles={});On[An].hooks||(On[An].hooks={});On[An].shims||(On[An].shims=[]);var en=On[An];const Ty=[],Sy=function(){Ne.removeEventListener("DOMContentLoaded",Sy),La=1,Ty.map(t=>t())};let La=!1;xn&&(La=(Ne.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ne.readyState),La||Ne.addEventListener("DOMContentLoaded",Sy));function oD(t){xn&&(La?setTimeout(t,0):Ty.push(t))}function _o(t){const{tag:e,attributes:n={},children:s=[]}=t;return typeof t=="string"?wy(t):"<".concat(e," ").concat(tD(n),">").concat(s.map(_o).join(""),"</").concat(e,">")}function rm(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var uc=function(e,n,s,i){var r=Object.keys(e),o=r.length,a=n,l,u,f;for(s===void 0?(l=1,f=e[r[0]]):(l=0,f=s);l<o;l++)u=r[l],f=a(f,e[u],u,e);return f};function aD(t){const e=[];let n=0;const s=t.length;for(;n<s;){const i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<s){const r=t.charCodeAt(n++);(r&64512)==56320?e.push(((i&1023)<<10)+(r&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function nu(t){const e=aD(t);return e.length===1?e[0].toString(16):null}function lD(t,e){const n=t.length;let s=t.charCodeAt(e),i;return s>=55296&&s<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(s-55296)*1024+i-56320+65536:s}function om(t){return Object.keys(t).reduce((e,n)=>{const s=t[n];return!!s.icon?e[s.iconName]=s.icon:e[n]=s,e},{})}function su(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:s=!1}=n,i=om(e);typeof en.hooks.addPack=="function"&&!s?en.hooks.addPack(t,om(e)):en.styles[t]={...en.styles[t]||{},...i},t==="fas"&&su("fa",e)}const{styles:ks,shims:cD}=en,uD={[xe]:Object.values(Ws[xe]),[Ct]:Object.values(Ws[Ct]),[Tt]:Object.values(Ws[Tt])};let Vf=null,Iy={},Ay={},Oy={},Ny={},Ry={};const fD={[xe]:Object.keys(Us[xe]),[Ct]:Object.keys(Us[Ct]),[Tt]:Object.keys(Us[Tt])};function dD(t){return~qk.indexOf(t)}function hD(t,e){const n=e.split("-"),s=n[0],i=n.slice(1).join("-");return s===t&&i!==""&&!dD(i)?i:null}const Py=()=>{const t=s=>uc(ks,(i,r,o)=>(i[o]=uc(r,s,{}),i),{});Iy=t((s,i,r)=>(i[3]&&(s[i[3]]=r),i[2]&&i[2].filter(a=>typeof a=="number").forEach(a=>{s[a.toString(16)]=r}),s)),Ay=t((s,i,r)=>(s[r]=r,i[2]&&i[2].filter(a=>typeof a=="string").forEach(a=>{s[a]=r}),s)),Ry=t((s,i,r)=>{const o=i[2];return s[r]=r,o.forEach(a=>{s[a]=r}),s});const e="far"in ks||q.autoFetchSvg,n=uc(cD,(s,i)=>{const r=i[0];let o=i[1];const a=i[2];return o==="far"&&!e&&(o="fas"),typeof r=="string"&&(s.names[r]={prefix:o,iconName:a}),typeof r=="number"&&(s.unicodes[r.toString(16)]={prefix:o,iconName:a}),s},{names:{},unicodes:{}});Oy=n.names,Ny=n.unicodes,Vf=gl(q.styleDefault,{family:q.familyDefault})};Jk(t=>{Vf=gl(t.styleDefault,{family:q.familyDefault})});Py();function Hf(t,e){return(Iy[t]||{})[e]}function pD(t,e){return(Ay[t]||{})[e]}function Xn(t,e){return(Ry[t]||{})[e]}function xy(t){return Oy[t]||{prefix:null,iconName:null}}function mD(t){const e=Ny[t],n=Hf("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function us(){return Vf}const jf=()=>({prefix:null,iconName:null,rest:[]});function gl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=xe}=e,s=Us[n][t],i=Zr[n][t]||Zr[n][s],r=t in en.styles?t:null;return i||r||null}const _D={[xe]:Object.keys(Ws[xe]),[Ct]:Object.keys(Ws[Ct]),[Tt]:Object.keys(Ws[Tt])};function vl(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,s={[xe]:"".concat(q.cssPrefix,"-").concat(xe),[Ct]:"".concat(q.cssPrefix,"-").concat(Ct),[Tt]:"".concat(q.cssPrefix,"-").concat(Tt)};let i=null,r=xe;const o=Tk.filter(l=>l!==dy);o.forEach(l=>{(t.includes(s[l])||t.some(u=>_D[l].includes(u)))&&(r=l)});const a=t.reduce((l,u)=>{const f=hD(q.cssPrefix,u);if(ks[u]?(u=uD[r].includes(u)?Bk[r][u]:u,i=u,l.prefix=u):fD[r].indexOf(u)>-1?(i=u,l.prefix=gl(u,{family:r})):f?l.iconName=f:u!==q.replacementClass&&!o.some(h=>u===s[h])&&l.rest.push(u),!n&&l.prefix&&l.iconName){const h=i==="fa"?xy(l.iconName):{},p=Xn(l.prefix,l.iconName);h.prefix&&(i=null),l.iconName=h.iconName||p||l.iconName,l.prefix=h.prefix||l.prefix,l.prefix==="far"&&!ks.far&&ks.fas&&!q.autoFetchSvg&&(l.prefix="fas")}return l},jf());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&r===Ct&&(ks.fass||q.autoFetchSvg)&&(a.prefix="fass",a.iconName=Xn(a.prefix,a.iconName)||a.iconName),!a.prefix&&r===Tt&&(ks.fasds||q.autoFetchSvg)&&(a.prefix="fasds",a.iconName=Xn(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||i==="fa")&&(a.prefix=us()||"fas"),a}class gD{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];const i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach(r=>{this.definitions[r]={...this.definitions[r]||{},...i[r]},su(r,i[r]);const o=Ws[xe][r];o&&su(o,i[r]),Py()})}reset(){this.definitions={}}_pullDefinitions(e,n){const s=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(s).map(i=>{const{prefix:r,iconName:o,icon:a}=s[i],l=a[2];e[r]||(e[r]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(e[r][u]=a)}),e[r][o]=a}),e}}let am=[],_i={};const Oi={},vD=Object.keys(Oi);function yD(t,e){let{mixoutsTo:n}=e;return am=t,_i={},Object.keys(Oi).forEach(s=>{vD.indexOf(s)===-1&&delete Oi[s]}),am.forEach(s=>{const i=s.mixout?s.mixout():{};if(Object.keys(i).forEach(r=>{typeof i[r]=="function"&&(n[r]=i[r]),typeof i[r]=="object"&&Object.keys(i[r]).forEach(o=>{n[r]||(n[r]={}),n[r][o]=i[r][o]})}),s.hooks){const r=s.hooks();Object.keys(r).forEach(o=>{_i[o]||(_i[o]=[]),_i[o].push(r[o])})}s.provides&&s.provides(Oi)}),n}function iu(t,e){for(var n=arguments.length,s=new Array(n>2?n-2:0),i=2;i<n;i++)s[i-2]=arguments[i];return(_i[t]||[]).forEach(o=>{e=o.apply(null,[e,...s])}),e}function Qs(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),s=1;s<e;s++)n[s-1]=arguments[s];(_i[t]||[]).forEach(r=>{r.apply(null,n)})}function fs(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Oi[t]?Oi[t].apply(null,e):void 0}function ru(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||us();if(e)return e=Xn(n,e)||e,rm(ky.definitions,n,e)||rm(en.styles,n,e)}const ky=new gD,ED=()=>{q.autoReplaceSvg=!1,q.observeMutations=!1,Qs("noAuto")},bD={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return xn?(Qs("beforeI2svg",t),fs("pseudoElements2svg",t),fs("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;q.autoReplaceSvg===!1&&(q.autoReplaceSvg=!0),q.observeMutations=!0,oD(()=>{CD({autoReplaceSvgRoot:e}),Qs("watch",t)})}},wD={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Xn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=gl(t[0]);return{prefix:n,iconName:Xn(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(q.cssPrefix,"-"))>-1||t.match(zk))){const e=vl(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||us(),iconName:Xn(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=us();return{prefix:e,iconName:Xn(e,t)||t}}}},Nt={noAuto:ED,config:q,dom:bD,parse:wD,library:ky,findIconDefinition:ru,toHtml:_o},CD=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Ne}=t;(Object.keys(en.styles).length>0||q.autoFetchSvg)&&xn&&q.autoReplaceSvg&&Nt.dom.i2svg({node:e})};function yl(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>_o(n))}}),Object.defineProperty(t,"node",{get:function(){if(!xn)return;const n=Ne.createElement("div");return n.innerHTML=t.html,n.children}}),t}function TD(t){let{children:e,main:n,mask:s,attributes:i,styles:r,transform:o}=t;if(Wf(o)&&n.found&&!s.found){const{width:a,height:l}=n,u={x:a/l/2,y:.5};i.style=_l({...r,"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")})}return[{tag:"svg",attributes:i,children:e}]}function SD(t){let{prefix:e,iconName:n,children:s,attributes:i,symbol:r}=t;const o=r===!0?"".concat(e,"-").concat(q.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...i,id:o},children:s}]}]}function Bf(t){const{icons:{main:e,mask:n},prefix:s,iconName:i,transform:r,symbol:o,title:a,maskId:l,titleId:u,extra:f,watchable:h=!1}=t,{width:p,height:_}=n.found?n:e,b=s==="fak",T=[q.replacementClass,i?"".concat(q.cssPrefix,"-").concat(i):""].filter(R=>f.classes.indexOf(R)===-1).filter(R=>R!==""||!!R).concat(f.classes).join(" ");let O={children:[],attributes:{...f.attributes,"data-prefix":s,"data-icon":i,class:T,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(_)}};const S=b&&!~f.classes.indexOf("fa-fw")?{width:"".concat(p/_*16*.0625,"em")}:{};h&&(O.attributes[qs]=""),a&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(u||eo())},children:[a]}),delete O.attributes.title);const E={...O,prefix:s,iconName:i,main:e,mask:n,maskId:l,transform:r,symbol:o,styles:{...S,...f.styles}},{children:C,attributes:N}=n.found&&e.found?fs("generateAbstractMask",E)||{children:[],attributes:{}}:fs("generateAbstractIcon",E)||{children:[],attributes:{}};return E.children=C,E.attributes=N,o?SD(E):TD(E)}function lm(t){const{content:e,width:n,height:s,transform:i,title:r,extra:o,watchable:a=!1}=t,l={...o.attributes,...r?{title:r}:{},class:o.classes.join(" ")};a&&(l[qs]="");const u={...o.styles};Wf(i)&&(u.transform=sD({transform:i,startCentered:!0,width:n,height:s}),u["-webkit-transform"]=u.transform);const f=_l(u);f.length>0&&(l.style=f);const h=[];return h.push({tag:"span",attributes:l,children:[e]}),r&&h.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),h}function ID(t){const{content:e,title:n,extra:s}=t,i={...s.attributes,...n?{title:n}:{},class:s.classes.join(" ")},r=_l(s.styles);r.length>0&&(i.style=r);const o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:fc}=en;function ou(t){const e=t[0],n=t[1],[s]=t.slice(4);let i=null;return Array.isArray(s)?i={tag:"g",attributes:{class:"".concat(q.cssPrefix,"-").concat(lc.GROUP)},children:[{tag:"path",attributes:{class:"".concat(q.cssPrefix,"-").concat(lc.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(q.cssPrefix,"-").concat(lc.PRIMARY),fill:"currentColor",d:s[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:i}}const AD={found:!1,width:512,height:512};function OD(t,e){!gy&&!q.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function au(t,e){let n=e;return e==="fa"&&q.styleDefault!==null&&(e=us()),new Promise((s,i)=>{if(n==="fa"){const r=xy(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&fc[e]&&fc[e][t]){const r=fc[e][t];return s(ou(r))}OD(t,e),s({...AD,icon:q.showMissingIcons&&t?fs("missingIconAbstract")||{}:{}})})}const cm=()=>{},lu=q.measurePerformance&&Vo&&Vo.mark&&Vo.measure?Vo:{mark:cm,measure:cm},gr='FA "6.6.0"',ND=t=>(lu.mark("".concat(gr," ").concat(t," begins")),()=>Dy(t)),Dy=t=>{lu.mark("".concat(gr," ").concat(t," ends")),lu.measure("".concat(gr," ").concat(t),"".concat(gr," ").concat(t," begins"),"".concat(gr," ").concat(t," ends"))};var zf={begin:ND,end:Dy};const ta=()=>{};function um(t){return typeof(t.getAttribute?t.getAttribute(qs):null)=="string"}function RD(t){const e=t.getAttribute?t.getAttribute(Ff):null,n=t.getAttribute?t.getAttribute($f):null;return e&&n}function PD(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(q.replacementClass)}function xD(){return q.autoReplaceSvg===!0?na.replace:na[q.autoReplaceSvg]||na.replace}function kD(t){return Ne.createElementNS("http://www.w3.org/2000/svg",t)}function DD(t){return Ne.createElement(t)}function Ly(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?kD:DD}=e;if(typeof t=="string")return Ne.createTextNode(t);const s=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(r){s.setAttribute(r,t.attributes[r])}),(t.children||[]).forEach(function(r){s.appendChild(Ly(r,{ceFn:n}))}),s}function LD(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const na={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Ly(n),e)}),e.getAttribute(qs)===null&&q.keepOriginalSource){let n=Ne.createComment(LD(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Uf(e).indexOf(q.replacementClass))return na.replace(t);const s=new RegExp("".concat(q.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const r=n[0].attributes.class.split(" ").reduce((o,a)=>(a===q.replacementClass||a.match(s)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",r.toNode.join(" "))}const i=n.map(r=>_o(r)).join(`
`);e.setAttribute(qs,""),e.innerHTML=i}};function fm(t){t()}function My(t,e){const n=typeof e=="function"?e:ta;if(t.length===0)n();else{let s=fm;q.mutateApproach===Hk&&(s=cs.requestAnimationFrame||fm),s(()=>{const i=xD(),r=zf.begin("mutate");t.map(i),r(),n()})}}let Kf=!1;function Fy(){Kf=!0}function cu(){Kf=!1}let Ma=null;function dm(t){if(!em||!q.observeMutations)return;const{treeCallback:e=ta,nodeCallback:n=ta,pseudoElementsCallback:s=ta,observeMutationsRoot:i=Ne}=t;Ma=new em(r=>{if(Kf)return;const o=us();tr(r).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!um(a.addedNodes[0])&&(q.searchPseudoElements&&s(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&q.searchPseudoElements&&s(a.target.parentNode),a.type==="attributes"&&um(a.target)&&~Yk.indexOf(a.attributeName))if(a.attributeName==="class"&&RD(a.target)){const{prefix:l,iconName:u}=vl(Uf(a.target));a.target.setAttribute(Ff,l||o),u&&a.target.setAttribute($f,u)}else PD(a.target)&&n(a.target)})}),xn&&Ma.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function MD(){Ma&&Ma.disconnect()}function FD(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((s,i)=>{const r=i.split(":"),o=r[0],a=r.slice(1);return o&&a.length>0&&(s[o]=a.join(":").trim()),s},{})),n}function $D(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),s=t.innerText!==void 0?t.innerText.trim():"";let i=vl(Uf(t));return i.prefix||(i.prefix=us()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&s.length>0&&(i.iconName=pD(i.prefix,t.innerText)||Hf(i.prefix,nu(t.innerText))),!i.iconName&&q.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function UD(t){const e=tr(t.attributes).reduce((i,r)=>(i.name!=="class"&&i.name!=="style"&&(i[r.name]=r.value),i),{}),n=t.getAttribute("title"),s=t.getAttribute("data-fa-title-id");return q.autoA11y&&(n?e["aria-labelledby"]="".concat(q.replacementClass,"-title-").concat(s||eo()):(e["aria-hidden"]="true",e.focusable="false")),e}function WD(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Zt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function hm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:s,rest:i}=$D(t),r=UD(t),o=iu("parseNodeAttributes",{},t);let a=e.styleParser?FD(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:s,transform:Zt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:a,attributes:r},...o}}const{styles:VD}=en;function $y(t){const e=q.autoReplaceSvg==="nest"?hm(t,{styleParser:!1}):hm(t);return~e.extra.classes.indexOf(Ey)?fs("generateLayersText",t,e):fs("generateSvgReplacementMutation",t,e)}let on=new Set;vy.map(t=>{on.add("fa-".concat(t))});Object.keys(Us[xe]).map(on.add.bind(on));Object.keys(Us[Ct]).map(on.add.bind(on));Object.keys(Us[Tt]).map(on.add.bind(on));on=[...on];function pm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!xn)return Promise.resolve();const n=Ne.documentElement.classList,s=f=>n.add("".concat(sm,"-").concat(f)),i=f=>n.remove("".concat(sm,"-").concat(f)),r=q.autoFetchSvg?on:vy.map(f=>"fa-".concat(f)).concat(Object.keys(VD));r.includes("fa")||r.push("fa");const o=[".".concat(Ey,":not([").concat(qs,"])")].concat(r.map(f=>".".concat(f,":not([").concat(qs,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=tr(t.querySelectorAll(o))}catch{}if(a.length>0)s("pending"),i("complete");else return Promise.resolve();const l=zf.begin("onTree"),u=a.reduce((f,h)=>{try{const p=$y(h);p&&f.push(p)}catch(p){gy||p.name==="MissingIcon"&&console.error(p)}return f},[]);return new Promise((f,h)=>{Promise.all(u).then(p=>{My(p,()=>{s("active"),s("complete"),i("pending"),typeof e=="function"&&e(),l(),f()})}).catch(p=>{l(),h(p)})})}function HD(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;$y(t).then(n=>{n&&My([n],e)})}function jD(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const s=(e||{}).icon?e:ru(e||{});let{mask:i}=n;return i&&(i=(i||{}).icon?i:ru(i||{})),t(s,{...n,mask:i})}}const BD=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Zt,symbol:s=!1,mask:i=null,maskId:r=null,title:o=null,titleId:a=null,classes:l=[],attributes:u={},styles:f={}}=e;if(!t)return;const{prefix:h,iconName:p,icon:_}=t;return yl({type:"icon",...t},()=>(Qs("beforeDOMElementCreation",{iconDefinition:t,params:e}),q.autoA11y&&(o?u["aria-labelledby"]="".concat(q.replacementClass,"-title-").concat(a||eo()):(u["aria-hidden"]="true",u.focusable="false")),Bf({icons:{main:ou(_),mask:i?ou(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:h,iconName:p,transform:{...Zt,...n},symbol:s,title:o,maskId:r,titleId:a,extra:{attributes:u,styles:f,classes:l}})))};var zD={mixout(){return{icon:jD(BD)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=pm,t.nodeCallback=HD,t}}},provides(t){t.i2svg=function(e){const{node:n=Ne,callback:s=()=>{}}=e;return pm(n,s)},t.generateSvgReplacementMutation=function(e,n){const{iconName:s,title:i,titleId:r,prefix:o,transform:a,symbol:l,mask:u,maskId:f,extra:h}=n;return new Promise((p,_)=>{Promise.all([au(s,o),u.iconName?au(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(b=>{let[T,O]=b;p([e,Bf({icons:{main:T,mask:O},prefix:o,iconName:s,transform:a,symbol:l,maskId:f,title:i,titleId:r,extra:h,watchable:!0})])}).catch(_)})},t.generateAbstractIcon=function(e){let{children:n,attributes:s,main:i,transform:r,styles:o}=e;const a=_l(o);a.length>0&&(s.style=a);let l;return Wf(r)&&(l=fs("generateAbstractTransformGrouping",{main:i,transform:r,containerWidth:i.width,iconWidth:i.width})),n.push(l||i.icon),{children:n,attributes:s}}}},KD={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return yl({type:"layer"},()=>{Qs("beforeDOMElementCreation",{assembler:t,params:e});let s=[];return t(i=>{Array.isArray(i)?i.map(r=>{s=s.concat(r.abstract)}):s=s.concat(i.abstract)}),[{tag:"span",attributes:{class:["".concat(q.cssPrefix,"-layers"),...n].join(" ")},children:s}]})}}}},GD={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:s=[],attributes:i={},styles:r={}}=e;return yl({type:"counter",content:t},()=>(Qs("beforeDOMElementCreation",{content:t,params:e}),ID({content:t.toString(),title:n,extra:{attributes:i,styles:r,classes:["".concat(q.cssPrefix,"-layers-counter"),...s]}})))}}}},YD={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=Zt,title:s=null,classes:i=[],attributes:r={},styles:o={}}=e;return yl({type:"text",content:t},()=>(Qs("beforeDOMElementCreation",{content:t,params:e}),lm({content:t,transform:{...Zt,...n},title:s,extra:{attributes:r,styles:o,classes:["".concat(q.cssPrefix,"-layers-text"),...i]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:s,transform:i,extra:r}=n;let o=null,a=null;if(fy){const l=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/l,a=u.height/l}return q.autoA11y&&!s&&(r.attributes["aria-hidden"]="true"),Promise.resolve([e,lm({content:e.innerHTML,width:o,height:a,transform:i,title:s,extra:r,watchable:!0})])}}};const qD=new RegExp('"',"ug"),mm=[1105920,1112319],_m={FontAwesome:{normal:"fas",400:"fas"},...Rk,...Nk,...$k},uu=Object.keys(_m).reduce((t,e)=>(t[e.toLowerCase()]=_m[e],t),{}),QD=Object.keys(uu).reduce((t,e)=>{const n=uu[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function XD(t){const e=t.replace(qD,""),n=lD(e,0),s=n>=mm[0]&&n<=mm[1],i=e.length===2?e[0]===e[1]:!1;return{value:nu(i?e[0]:e),isSecondary:s||i}}function JD(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),s=parseInt(e),i=isNaN(s)?"normal":s;return(uu[n]||{})[i]||QD[n]}function gm(t,e){const n="".concat(Vk).concat(e.replace(":","-"));return new Promise((s,i)=>{if(t.getAttribute(n)!==null)return s();const o=tr(t.children).filter(p=>p.getAttribute(Jc)===e)[0],a=cs.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),u=l.match(Kk),f=a.getPropertyValue("font-weight"),h=a.getPropertyValue("content");if(o&&!u)return t.removeChild(o),s();if(u&&h!=="none"&&h!==""){const p=a.getPropertyValue("content");let _=JD(l,f);const{value:b,isSecondary:T}=XD(p),O=u[0].startsWith("FontAwesome");let S=Hf(_,b),E=S;if(O){const C=mD(b);C.iconName&&C.prefix&&(S=C.iconName,_=C.prefix)}if(S&&!T&&(!o||o.getAttribute(Ff)!==_||o.getAttribute($f)!==E)){t.setAttribute(n,E),o&&t.removeChild(o);const C=WD(),{extra:N}=C;N.attributes[Jc]=e,au(S,_).then(R=>{const D=Bf({...C,icons:{main:R,mask:jf()},prefix:_,iconName:E,extra:N,watchable:!0}),K=Ne.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(K,t.firstChild):t.appendChild(K),K.outerHTML=D.map(ae=>_o(ae)).join(`
`),t.removeAttribute(n),s()}).catch(i)}else s()}else s()})}function ZD(t){return Promise.all([gm(t,"::before"),gm(t,"::after")])}function eL(t){return t.parentNode!==document.head&&!~jk.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Jc)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function vm(t){if(xn)return new Promise((e,n)=>{const s=tr(t.querySelectorAll("*")).filter(eL).map(ZD),i=zf.begin("searchPseudoElements");Fy(),Promise.all(s).then(()=>{i(),cu(),e()}).catch(()=>{i(),cu(),n()})})}var tL={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=vm,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Ne}=e;q.searchPseudoElements&&vm(n)}}};let ym=!1;var nL={mixout(){return{dom:{unwatch(){Fy(),ym=!0}}}},hooks(){return{bootstrap(){dm(iu("mutationObserverCallbacks",{}))},noAuto(){MD()},watch(t){const{observeMutationsRoot:e}=t;ym?cu():dm(iu("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const Em=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,s)=>{const i=s.toLowerCase().split("-"),r=i[0];let o=i.slice(1).join("-");if(r&&o==="h")return n.flipX=!0,n;if(r&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(r){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var sL={mixout(){return{parse:{transform:t=>Em(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=Em(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:s,containerWidth:i,iconWidth:r}=e;const o={transform:"translate(".concat(i/2," 256)")},a="translate(".concat(s.x*32,", ").concat(s.y*32,") "),l="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),u="rotate(".concat(s.rotate," 0 0)"),f={transform:"".concat(a," ").concat(l," ").concat(u)},h={transform:"translate(".concat(r/2*-1," -256)")},p={outer:o,inner:f,path:h};return{tag:"g",attributes:{...p.outer},children:[{tag:"g",attributes:{...p.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...p.path}}]}]}}}};const dc={x:0,y:0,width:"100%",height:"100%"};function bm(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function iL(t){return t.tag==="g"?t.children:[t]}var rL={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),s=n?vl(n.split(" ").map(i=>i.trim())):jf();return s.prefix||(s.prefix=us()),t.mask=s,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:s,main:i,mask:r,maskId:o,transform:a}=e;const{width:l,icon:u}=i,{width:f,icon:h}=r,p=nD({transform:a,containerWidth:f,iconWidth:l}),_={tag:"rect",attributes:{...dc,fill:"white"}},b=u.children?{children:u.children.map(bm)}:{},T={tag:"g",attributes:{...p.inner},children:[bm({tag:u.tag,attributes:{...u.attributes,...p.path},...b})]},O={tag:"g",attributes:{...p.outer},children:[T]},S="mask-".concat(o||eo()),E="clip-".concat(o||eo()),C={tag:"mask",attributes:{...dc,id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[_,O]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:E},children:iL(h)},C]};return n.push(N,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(E,")"),mask:"url(#".concat(S,")"),...dc}}),{children:n,attributes:s}}}},oL={provides(t){let e=!1;cs.matchMedia&&(e=cs.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],s={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...s,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const r={...i,attributeName:"opacity"},o={tag:"circle",attributes:{...s,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...i,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...r,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...s,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...r,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...s,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...r,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},aL={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),s=n===null?!1:n===""?!0:n;return t.symbol=s,t}}}},lL=[rD,zD,KD,GD,YD,tL,nL,sL,rL,oL,aL];yD(lL,{mixoutsTo:Nt});Nt.noAuto;Nt.config;const cL=Nt.library;Nt.dom;const fu=Nt.parse;Nt.findIconDefinition;Nt.toHtml;const uL=Nt.icon;Nt.layer;Nt.text;Nt.counter;function wm(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,s)}return n}function mn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?wm(Object(n),!0).forEach(function(s){mt(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):wm(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}function fL(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,e||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function dL(t){var e=fL(t,"string");return typeof e=="symbol"?e:e+""}function Fa(t){"@babel/helpers - typeof";return Fa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fa(t)}function mt(t,e,n){return e=dL(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function hL(t,e){if(t==null)return{};var n={};for(var s in t)if(Object.prototype.hasOwnProperty.call(t,s)){if(e.indexOf(s)>=0)continue;n[s]=t[s]}return n}function pL(t,e){if(t==null)return{};var n=hL(t,e),s,i;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(n[s]=t[s])}return n}var mL=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Uy={exports:{}};(function(t){(function(e){var n=function(S,E,C){if(!u(E)||h(E)||p(E)||_(E)||l(E))return E;var N,R=0,D=0;if(f(E))for(N=[],D=E.length;R<D;R++)N.push(n(S,E[R],C));else{N={};for(var K in E)Object.prototype.hasOwnProperty.call(E,K)&&(N[S(K,C)]=n(S,E[K],C))}return N},s=function(S,E){E=E||{};var C=E.separator||"_",N=E.split||/(?=[A-Z])/;return S.split(N).join(C)},i=function(S){return b(S)?S:(S=S.replace(/[\-_\s]+(.)?/g,function(E,C){return C?C.toUpperCase():""}),S.substr(0,1).toLowerCase()+S.substr(1))},r=function(S){var E=i(S);return E.substr(0,1).toUpperCase()+E.substr(1)},o=function(S,E){return s(S,E).toLowerCase()},a=Object.prototype.toString,l=function(S){return typeof S=="function"},u=function(S){return S===Object(S)},f=function(S){return a.call(S)=="[object Array]"},h=function(S){return a.call(S)=="[object Date]"},p=function(S){return a.call(S)=="[object RegExp]"},_=function(S){return a.call(S)=="[object Boolean]"},b=function(S){return S=S-0,S===S},T=function(S,E){var C=E&&"process"in E?E.process:E;return typeof C!="function"?S:function(N,R){return C(N,S,R)}},O={camelize:i,decamelize:o,pascalize:r,depascalize:o,camelizeKeys:function(S,E){return n(T(i,E),S)},decamelizeKeys:function(S,E){return n(T(o,E),S,E)},pascalizeKeys:function(S,E){return n(T(r,E),S)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=O:e.humps=O})(mL)})(Uy);var _L=Uy.exports,gL=["class","style"];function vL(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var s=n.indexOf(":"),i=_L.camelize(n.slice(0,s)),r=n.slice(s+1).trim();return e[i]=r,e},{})}function yL(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Wy(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var s=(t.children||[]).map(function(l){return Wy(l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var f=t.attributes[u];switch(u){case"class":l.class=yL(f);break;case"style":l.style=vL(f);break;default:l.attrs[u]=f}return l},{attrs:{},class:{},style:{}});n.class;var r=n.style,o=r===void 0?{}:r,a=pL(n,gL);return Lu(t.tag,mn(mn(mn({},e),{},{class:i.class,style:mn(mn({},i.style),o)},i.attrs),a),s)}var Vy=!1;try{Vy=!0}catch{}function EL(){if(!Vy&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function hc(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?mt({},t,e):{}}function bL(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},mt(mt(mt(mt(mt(mt(mt(mt(mt(mt(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),mt(mt(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(s){return n[s]?s:null}).filter(function(s){return s})}function Cm(t){if(t&&Fa(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(fu.icon)return fu.icon(t);if(t===null)return null;if(Fa(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var wL=Ru({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var s=n.attrs,i=Ve(function(){return Cm(e.icon)}),r=Ve(function(){return hc("classes",bL(e))}),o=Ve(function(){return hc("transform",typeof e.transform=="string"?fu.transform(e.transform):e.transform)}),a=Ve(function(){return hc("mask",Cm(e.mask))}),l=Ve(function(){return uL(i.value,mn(mn(mn(mn({},r.value),o.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});bi(l,function(f){if(!f)return EL("Could not find one or more icon(s)",i.value,a.value)},{immediate:!0});var u=Ve(function(){return l.value?Wy(l.value.abstract[0],{},s):null});return function(){return u.value}}});const CL={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"]},TL={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},SL={prefix:"fas",iconName:"hourglass-start",icon:[384,512,["hourglass-1"],"f251","M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64l0 11c0 42.4 16.9 83.1 46.9 113.1L146.7 256 78.9 323.9C48.9 353.9 32 394.6 32 437l0 11c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 256 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-11c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1l0-11c17.7 0 32-14.3 32-32s-14.3-32-32-32L320 0 64 0 32 0zM288 437l0 11L96 448l0-11c0-25.5 10.1-49.9 28.1-67.9L192 301.3l67.9 67.9c18 18 28.1 42.4 28.1 67.9z"]},IL={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},AL={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},OL={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},NL={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},RL={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},PL={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},xL={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},kL={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]};var DL=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function LL(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function s(){return this instanceof s?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(s){var i=Object.getOwnPropertyDescriptor(t,s);Object.defineProperty(n,s,i.get?i:{enumerable:!0,get:function(){return t[s]}})}),n}var ML={exports:{}},ft="top",St="bottom",It="right",dt="left",El="auto",nr=[ft,St,It,dt],Xs="start",ji="end",Hy="clippingParents",Gf="viewport",di="popper",jy="reference",du=nr.reduce(function(t,e){return t.concat([e+"-"+Xs,e+"-"+ji])},[]),Yf=[].concat(nr,[El]).reduce(function(t,e){return t.concat([e,e+"-"+Xs,e+"-"+ji])},[]),By="beforeRead",zy="read",Ky="afterRead",Gy="beforeMain",Yy="main",qy="afterMain",Qy="beforeWrite",Xy="write",Jy="afterWrite",Zy=[By,zy,Ky,Gy,Yy,qy,Qy,Xy,Jy];function an(t){return t?(t.nodeName||"").toLowerCase():null}function At(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Js(t){var e=At(t).Element;return t instanceof e||t instanceof Element}function Mt(t){var e=At(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function qf(t){if(typeof ShadowRoot>"u")return!1;var e=At(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function FL(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var s=e.styles[n]||{},i=e.attributes[n]||{},r=e.elements[n];!Mt(r)||!an(r)||(Object.assign(r.style,s),Object.keys(i).forEach(function(o){var a=i[o];a===!1?r.removeAttribute(o):r.setAttribute(o,a===!0?"":a)}))})}function $L(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(s){var i=e.elements[s],r=e.attributes[s]||{},o=Object.keys(e.styles.hasOwnProperty(s)?e.styles[s]:n[s]),a=o.reduce(function(l,u){return l[u]="",l},{});!Mt(i)||!an(i)||(Object.assign(i.style,a),Object.keys(r).forEach(function(l){i.removeAttribute(l)}))})}}const Qf={name:"applyStyles",enabled:!0,phase:"write",fn:FL,effect:$L,requires:["computeStyles"]};function sn(t){return t.split("-")[0]}var Vs=Math.max,$a=Math.min,Bi=Math.round;function hu(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function eE(){return!/^((?!chrome|android).)*safari/i.test(hu())}function zi(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var s=t.getBoundingClientRect(),i=1,r=1;e&&Mt(t)&&(i=t.offsetWidth>0&&Bi(s.width)/t.offsetWidth||1,r=t.offsetHeight>0&&Bi(s.height)/t.offsetHeight||1);var o=Js(t)?At(t):window,a=o.visualViewport,l=!eE()&&n,u=(s.left+(l&&a?a.offsetLeft:0))/i,f=(s.top+(l&&a?a.offsetTop:0))/r,h=s.width/i,p=s.height/r;return{width:h,height:p,top:f,right:u+h,bottom:f+p,left:u,x:u,y:f}}function Xf(t){var e=zi(t),n=t.offsetWidth,s=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-s)<=1&&(s=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:s}}function tE(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&qf(n)){var s=e;do{if(s&&t.isSameNode(s))return!0;s=s.parentNode||s.host}while(s)}return!1}function Nn(t){return At(t).getComputedStyle(t)}function UL(t){return["table","td","th"].indexOf(an(t))>=0}function _s(t){return((Js(t)?t.ownerDocument:t.document)||window.document).documentElement}function bl(t){return an(t)==="html"?t:t.assignedSlot||t.parentNode||(qf(t)?t.host:null)||_s(t)}function Tm(t){return!Mt(t)||Nn(t).position==="fixed"?null:t.offsetParent}function WL(t){var e=/firefox/i.test(hu()),n=/Trident/i.test(hu());if(n&&Mt(t)){var s=Nn(t);if(s.position==="fixed")return null}var i=bl(t);for(qf(i)&&(i=i.host);Mt(i)&&["html","body"].indexOf(an(i))<0;){var r=Nn(i);if(r.transform!=="none"||r.perspective!=="none"||r.contain==="paint"||["transform","perspective"].indexOf(r.willChange)!==-1||e&&r.willChange==="filter"||e&&r.filter&&r.filter!=="none")return i;i=i.parentNode}return null}function go(t){for(var e=At(t),n=Tm(t);n&&UL(n)&&Nn(n).position==="static";)n=Tm(n);return n&&(an(n)==="html"||an(n)==="body"&&Nn(n).position==="static")?e:n||WL(t)||e}function Jf(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function xr(t,e,n){return Vs(t,$a(e,n))}function VL(t,e,n){var s=xr(t,e,n);return s>n?n:s}function nE(){return{top:0,right:0,bottom:0,left:0}}function sE(t){return Object.assign({},nE(),t)}function iE(t,e){return e.reduce(function(n,s){return n[s]=t,n},{})}var HL=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,sE(typeof e!="number"?e:iE(e,nr))};function jL(t){var e,n=t.state,s=t.name,i=t.options,r=n.elements.arrow,o=n.modifiersData.popperOffsets,a=sn(n.placement),l=Jf(a),u=[dt,It].indexOf(a)>=0,f=u?"height":"width";if(!(!r||!o)){var h=HL(i.padding,n),p=Xf(r),_=l==="y"?ft:dt,b=l==="y"?St:It,T=n.rects.reference[f]+n.rects.reference[l]-o[l]-n.rects.popper[f],O=o[l]-n.rects.reference[l],S=go(r),E=S?l==="y"?S.clientHeight||0:S.clientWidth||0:0,C=T/2-O/2,N=h[_],R=E-p[f]-h[b],D=E/2-p[f]/2+C,K=xr(N,D,R),ae=l;n.modifiersData[s]=(e={},e[ae]=K,e.centerOffset=K-D,e)}}function BL(t){var e=t.state,n=t.options,s=n.element,i=s===void 0?"[data-popper-arrow]":s;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||tE(e.elements.popper,i)&&(e.elements.arrow=i))}const rE={name:"arrow",enabled:!0,phase:"main",fn:jL,effect:BL,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ki(t){return t.split("-")[1]}var zL={top:"auto",right:"auto",bottom:"auto",left:"auto"};function KL(t,e){var n=t.x,s=t.y,i=e.devicePixelRatio||1;return{x:Bi(n*i)/i||0,y:Bi(s*i)/i||0}}function Sm(t){var e,n=t.popper,s=t.popperRect,i=t.placement,r=t.variation,o=t.offsets,a=t.position,l=t.gpuAcceleration,u=t.adaptive,f=t.roundOffsets,h=t.isFixed,p=o.x,_=p===void 0?0:p,b=o.y,T=b===void 0?0:b,O=typeof f=="function"?f({x:_,y:T}):{x:_,y:T};_=O.x,T=O.y;var S=o.hasOwnProperty("x"),E=o.hasOwnProperty("y"),C=dt,N=ft,R=window;if(u){var D=go(n),K="clientHeight",ae="clientWidth";if(D===At(n)&&(D=_s(n),Nn(D).position!=="static"&&a==="absolute"&&(K="scrollHeight",ae="scrollWidth")),D=D,i===ft||(i===dt||i===It)&&r===ji){N=St;var te=h&&D===R&&R.visualViewport?R.visualViewport.height:D[K];T-=te-s.height,T*=l?1:-1}if(i===dt||(i===ft||i===St)&&r===ji){C=It;var se=h&&D===R&&R.visualViewport?R.visualViewport.width:D[ae];_-=se-s.width,_*=l?1:-1}}var le=Object.assign({position:a},u&&zL),Le=f===!0?KL({x:_,y:T},At(n)):{x:_,y:T};if(_=Le.x,T=Le.y,l){var ve;return Object.assign({},le,(ve={},ve[N]=E?"0":"",ve[C]=S?"0":"",ve.transform=(R.devicePixelRatio||1)<=1?"translate("+_+"px, "+T+"px)":"translate3d("+_+"px, "+T+"px, 0)",ve))}return Object.assign({},le,(e={},e[N]=E?T+"px":"",e[C]=S?_+"px":"",e.transform="",e))}function GL(t){var e=t.state,n=t.options,s=n.gpuAcceleration,i=s===void 0?!0:s,r=n.adaptive,o=r===void 0?!0:r,a=n.roundOffsets,l=a===void 0?!0:a,u={placement:sn(e.placement),variation:Ki(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,Sm(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,Sm(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Zf={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:GL,data:{}};var Ho={passive:!0};function YL(t){var e=t.state,n=t.instance,s=t.options,i=s.scroll,r=i===void 0?!0:i,o=s.resize,a=o===void 0?!0:o,l=At(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&u.forEach(function(f){f.addEventListener("scroll",n.update,Ho)}),a&&l.addEventListener("resize",n.update,Ho),function(){r&&u.forEach(function(f){f.removeEventListener("scroll",n.update,Ho)}),a&&l.removeEventListener("resize",n.update,Ho)}}const ed={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:YL,data:{}};var qL={left:"right",right:"left",bottom:"top",top:"bottom"};function sa(t){return t.replace(/left|right|bottom|top/g,function(e){return qL[e]})}var QL={start:"end",end:"start"};function Im(t){return t.replace(/start|end/g,function(e){return QL[e]})}function td(t){var e=At(t),n=e.pageXOffset,s=e.pageYOffset;return{scrollLeft:n,scrollTop:s}}function nd(t){return zi(_s(t)).left+td(t).scrollLeft}function XL(t,e){var n=At(t),s=_s(t),i=n.visualViewport,r=s.clientWidth,o=s.clientHeight,a=0,l=0;if(i){r=i.width,o=i.height;var u=eE();(u||!u&&e==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:r,height:o,x:a+nd(t),y:l}}function JL(t){var e,n=_s(t),s=td(t),i=(e=t.ownerDocument)==null?void 0:e.body,r=Vs(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=Vs(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-s.scrollLeft+nd(t),l=-s.scrollTop;return Nn(i||n).direction==="rtl"&&(a+=Vs(n.clientWidth,i?i.clientWidth:0)-r),{width:r,height:o,x:a,y:l}}function sd(t){var e=Nn(t),n=e.overflow,s=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+s)}function oE(t){return["html","body","#document"].indexOf(an(t))>=0?t.ownerDocument.body:Mt(t)&&sd(t)?t:oE(bl(t))}function kr(t,e){var n;e===void 0&&(e=[]);var s=oE(t),i=s===((n=t.ownerDocument)==null?void 0:n.body),r=At(s),o=i?[r].concat(r.visualViewport||[],sd(s)?s:[]):s,a=e.concat(o);return i?a:a.concat(kr(bl(o)))}function pu(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function ZL(t,e){var n=zi(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function Am(t,e,n){return e===Gf?pu(XL(t,n)):Js(e)?ZL(e,n):pu(JL(_s(t)))}function eM(t){var e=kr(bl(t)),n=["absolute","fixed"].indexOf(Nn(t).position)>=0,s=n&&Mt(t)?go(t):t;return Js(s)?e.filter(function(i){return Js(i)&&tE(i,s)&&an(i)!=="body"}):[]}function tM(t,e,n,s){var i=e==="clippingParents"?eM(t):[].concat(e),r=[].concat(i,[n]),o=r[0],a=r.reduce(function(l,u){var f=Am(t,u,s);return l.top=Vs(f.top,l.top),l.right=$a(f.right,l.right),l.bottom=$a(f.bottom,l.bottom),l.left=Vs(f.left,l.left),l},Am(t,o,s));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function aE(t){var e=t.reference,n=t.element,s=t.placement,i=s?sn(s):null,r=s?Ki(s):null,o=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,l;switch(i){case ft:l={x:o,y:e.y-n.height};break;case St:l={x:o,y:e.y+e.height};break;case It:l={x:e.x+e.width,y:a};break;case dt:l={x:e.x-n.width,y:a};break;default:l={x:e.x,y:e.y}}var u=i?Jf(i):null;if(u!=null){var f=u==="y"?"height":"width";switch(r){case Xs:l[u]=l[u]-(e[f]/2-n[f]/2);break;case ji:l[u]=l[u]+(e[f]/2-n[f]/2);break}}return l}function Gi(t,e){e===void 0&&(e={});var n=e,s=n.placement,i=s===void 0?t.placement:s,r=n.strategy,o=r===void 0?t.strategy:r,a=n.boundary,l=a===void 0?Hy:a,u=n.rootBoundary,f=u===void 0?Gf:u,h=n.elementContext,p=h===void 0?di:h,_=n.altBoundary,b=_===void 0?!1:_,T=n.padding,O=T===void 0?0:T,S=sE(typeof O!="number"?O:iE(O,nr)),E=p===di?jy:di,C=t.rects.popper,N=t.elements[b?E:p],R=tM(Js(N)?N:N.contextElement||_s(t.elements.popper),l,f,o),D=zi(t.elements.reference),K=aE({reference:D,element:C,strategy:"absolute",placement:i}),ae=pu(Object.assign({},C,K)),te=p===di?ae:D,se={top:R.top-te.top+S.top,bottom:te.bottom-R.bottom+S.bottom,left:R.left-te.left+S.left,right:te.right-R.right+S.right},le=t.modifiersData.offset;if(p===di&&le){var Le=le[i];Object.keys(se).forEach(function(ve){var it=[It,St].indexOf(ve)>=0?1:-1,Je=[ft,St].indexOf(ve)>=0?"y":"x";se[ve]+=Le[Je]*it})}return se}function nM(t,e){e===void 0&&(e={});var n=e,s=n.placement,i=n.boundary,r=n.rootBoundary,o=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,u=l===void 0?Yf:l,f=Ki(s),h=f?a?du:du.filter(function(b){return Ki(b)===f}):nr,p=h.filter(function(b){return u.indexOf(b)>=0});p.length===0&&(p=h);var _=p.reduce(function(b,T){return b[T]=Gi(t,{placement:T,boundary:i,rootBoundary:r,padding:o})[sn(T)],b},{});return Object.keys(_).sort(function(b,T){return _[b]-_[T]})}function sM(t){if(sn(t)===El)return[];var e=sa(t);return[Im(t),e,Im(e)]}function iM(t){var e=t.state,n=t.options,s=t.name;if(!e.modifiersData[s]._skip){for(var i=n.mainAxis,r=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!0:o,l=n.fallbackPlacements,u=n.padding,f=n.boundary,h=n.rootBoundary,p=n.altBoundary,_=n.flipVariations,b=_===void 0?!0:_,T=n.allowedAutoPlacements,O=e.options.placement,S=sn(O),E=S===O,C=l||(E||!b?[sa(O)]:sM(O)),N=[O].concat(C).reduce(function(ot,Ze){return ot.concat(sn(Ze)===El?nM(e,{placement:Ze,boundary:f,rootBoundary:h,padding:u,flipVariations:b,allowedAutoPlacements:T}):Ze)},[]),R=e.rects.reference,D=e.rects.popper,K=new Map,ae=!0,te=N[0],se=0;se<N.length;se++){var le=N[se],Le=sn(le),ve=Ki(le)===Xs,it=[ft,St].indexOf(Le)>=0,Je=it?"width":"height",me=Gi(e,{placement:le,boundary:f,rootBoundary:h,altBoundary:p,padding:u}),ie=it?ve?It:dt:ve?St:ft;R[Je]>D[Je]&&(ie=sa(ie));var ue=sa(ie),Ue=[];if(r&&Ue.push(me[Le]<=0),a&&Ue.push(me[ie]<=0,me[ue]<=0),Ue.every(function(ot){return ot})){te=le,ae=!1;break}K.set(le,Ue)}if(ae)for(var rt=b?3:1,qe=function(Ze){var $e=N.find(function(x){var B=K.get(x);if(B)return B.slice(0,Ze).every(function(z){return z})});if($e)return te=$e,"break"},ke=rt;ke>0;ke--){var Et=qe(ke);if(Et==="break")break}e.placement!==te&&(e.modifiersData[s]._skip=!0,e.placement=te,e.reset=!0)}}const lE={name:"flip",enabled:!0,phase:"main",fn:iM,requiresIfExists:["offset"],data:{_skip:!1}};function Om(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function Nm(t){return[ft,It,St,dt].some(function(e){return t[e]>=0})}function rM(t){var e=t.state,n=t.name,s=e.rects.reference,i=e.rects.popper,r=e.modifiersData.preventOverflow,o=Gi(e,{elementContext:"reference"}),a=Gi(e,{altBoundary:!0}),l=Om(o,s),u=Om(a,i,r),f=Nm(l),h=Nm(u);e.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:u,isReferenceHidden:f,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":h})}const cE={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:rM};function oM(t,e,n){var s=sn(t),i=[dt,ft].indexOf(s)>=0?-1:1,r=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=r[0],a=r[1];return o=o||0,a=(a||0)*i,[dt,It].indexOf(s)>=0?{x:a,y:o}:{x:o,y:a}}function aM(t){var e=t.state,n=t.options,s=t.name,i=n.offset,r=i===void 0?[0,0]:i,o=Yf.reduce(function(f,h){return f[h]=oM(h,e.rects,r),f},{}),a=o[e.placement],l=a.x,u=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=u),e.modifiersData[s]=o}const uE={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:aM};function lM(t){var e=t.state,n=t.name;e.modifiersData[n]=aE({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const id={name:"popperOffsets",enabled:!0,phase:"read",fn:lM,data:{}};function cM(t){return t==="x"?"y":"x"}function uM(t){var e=t.state,n=t.options,s=t.name,i=n.mainAxis,r=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!1:o,l=n.boundary,u=n.rootBoundary,f=n.altBoundary,h=n.padding,p=n.tether,_=p===void 0?!0:p,b=n.tetherOffset,T=b===void 0?0:b,O=Gi(e,{boundary:l,rootBoundary:u,padding:h,altBoundary:f}),S=sn(e.placement),E=Ki(e.placement),C=!E,N=Jf(S),R=cM(N),D=e.modifiersData.popperOffsets,K=e.rects.reference,ae=e.rects.popper,te=typeof T=="function"?T(Object.assign({},e.rects,{placement:e.placement})):T,se=typeof te=="number"?{mainAxis:te,altAxis:te}:Object.assign({mainAxis:0,altAxis:0},te),le=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,Le={x:0,y:0};if(D){if(r){var ve,it=N==="y"?ft:dt,Je=N==="y"?St:It,me=N==="y"?"height":"width",ie=D[N],ue=ie+O[it],Ue=ie-O[Je],rt=_?-ae[me]/2:0,qe=E===Xs?K[me]:ae[me],ke=E===Xs?-ae[me]:-K[me],Et=e.elements.arrow,ot=_&&Et?Xf(Et):{width:0,height:0},Ze=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:nE(),$e=Ze[it],x=Ze[Je],B=xr(0,K[me],ot[me]),z=C?K[me]/2-rt-B-$e-se.mainAxis:qe-B-$e-se.mainAxis,Y=C?-K[me]/2+rt+B+x+se.mainAxis:ke+B+x+se.mainAxis,A=e.elements.arrow&&go(e.elements.arrow),be=A?N==="y"?A.clientTop||0:A.clientLeft||0:0,m=(ve=le==null?void 0:le[N])!=null?ve:0,v=ie+z-m-be,w=ie+Y-m,L=xr(_?$a(ue,v):ue,ie,_?Vs(Ue,w):Ue);D[N]=L,Le[N]=L-ie}if(a){var P,M=N==="x"?ft:dt,j=N==="x"?St:It,I=D[R],U=R==="y"?"height":"width",F=I+O[M],G=I-O[j],Q=[ft,dt].indexOf(S)!==-1,X=(P=le==null?void 0:le[R])!=null?P:0,ee=Q?F:I-K[U]-ae[U]-X+se.altAxis,oe=Q?I+K[U]+ae[U]-X-se.altAxis:G,ye=_&&Q?VL(ee,I,oe):xr(_?ee:F,I,_?oe:G);D[R]=ye,Le[R]=ye-I}e.modifiersData[s]=Le}}const fE={name:"preventOverflow",enabled:!0,phase:"main",fn:uM,requiresIfExists:["offset"]};function fM(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function dM(t){return t===At(t)||!Mt(t)?td(t):fM(t)}function hM(t){var e=t.getBoundingClientRect(),n=Bi(e.width)/t.offsetWidth||1,s=Bi(e.height)/t.offsetHeight||1;return n!==1||s!==1}function pM(t,e,n){n===void 0&&(n=!1);var s=Mt(e),i=Mt(e)&&hM(e),r=_s(e),o=zi(t,i,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(s||!s&&!n)&&((an(e)!=="body"||sd(r))&&(a=dM(e)),Mt(e)?(l=zi(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):r&&(l.x=nd(r))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function mM(t){var e=new Map,n=new Set,s=[];t.forEach(function(r){e.set(r.name,r)});function i(r){n.add(r.name);var o=[].concat(r.requires||[],r.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var l=e.get(a);l&&i(l)}}),s.push(r)}return t.forEach(function(r){n.has(r.name)||i(r)}),s}function _M(t){var e=mM(t);return Zy.reduce(function(n,s){return n.concat(e.filter(function(i){return i.phase===s}))},[])}function gM(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function vM(t){var e=t.reduce(function(n,s){var i=n[s.name];return n[s.name]=i?Object.assign({},i,s,{options:Object.assign({},i.options,s.options),data:Object.assign({},i.data,s.data)}):s,n},{});return Object.keys(e).map(function(n){return e[n]})}var Rm={placement:"bottom",modifiers:[],strategy:"absolute"};function Pm(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(s){return!(s&&typeof s.getBoundingClientRect=="function")})}function wl(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,s=n===void 0?[]:n,i=e.defaultOptions,r=i===void 0?Rm:i;return function(a,l,u){u===void 0&&(u=r);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},Rm,r),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},h=[],p=!1,_={state:f,setOptions:function(S){var E=typeof S=="function"?S(f.options):S;T(),f.options=Object.assign({},r,f.options,E),f.scrollParents={reference:Js(a)?kr(a):a.contextElement?kr(a.contextElement):[],popper:kr(l)};var C=_M(vM([].concat(s,f.options.modifiers)));return f.orderedModifiers=C.filter(function(N){return N.enabled}),b(),_.update()},forceUpdate:function(){if(!p){var S=f.elements,E=S.reference,C=S.popper;if(Pm(E,C)){f.rects={reference:pM(E,go(C),f.options.strategy==="fixed"),popper:Xf(C)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(se){return f.modifiersData[se.name]=Object.assign({},se.data)});for(var N=0;N<f.orderedModifiers.length;N++){if(f.reset===!0){f.reset=!1,N=-1;continue}var R=f.orderedModifiers[N],D=R.fn,K=R.options,ae=K===void 0?{}:K,te=R.name;typeof D=="function"&&(f=D({state:f,options:ae,name:te,instance:_})||f)}}}},update:gM(function(){return new Promise(function(O){_.forceUpdate(),O(f)})}),destroy:function(){T(),p=!0}};if(!Pm(a,l))return _;_.setOptions(u).then(function(O){!p&&u.onFirstUpdate&&u.onFirstUpdate(O)});function b(){f.orderedModifiers.forEach(function(O){var S=O.name,E=O.options,C=E===void 0?{}:E,N=O.effect;if(typeof N=="function"){var R=N({state:f,name:S,instance:_,options:C}),D=function(){};h.push(R||D)}})}function T(){h.forEach(function(O){return O()}),h=[]}return _}}var yM=wl(),EM=[ed,id,Zf,Qf],bM=wl({defaultModifiers:EM}),wM=[ed,id,Zf,Qf,uE,lE,fE,rE,cE],CM=wl({defaultModifiers:wM});const TM=Object.freeze(Object.defineProperty({__proto__:null,afterMain:qy,afterRead:Ky,afterWrite:Jy,applyStyles:Qf,arrow:rE,auto:El,basePlacements:nr,beforeMain:Gy,beforeRead:By,beforeWrite:Qy,bottom:St,clippingParents:Hy,computeStyles:Zf,createPopper:CM,createPopperBase:yM,createPopperLite:bM,detectOverflow:Gi,end:ji,eventListeners:ed,flip:lE,hide:cE,left:dt,main:Yy,modifierPhases:Zy,offset:uE,placements:Yf,popper:di,popperGenerator:wl,popperOffsets:id,preventOverflow:fE,read:zy,reference:jy,right:It,start:Xs,top:ft,variationPlacements:du,viewport:Gf,write:Xy},Symbol.toStringTag,{value:"Module"})),SM=LL(TM);/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(t,e){(function(n,s){t.exports=s(SM)})(DL,function(n){function s(g){const c=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(g){for(const d in g)if(d!=="default"){const y=Object.getOwnPropertyDescriptor(g,d);Object.defineProperty(c,d,y.get?y:{enumerable:!0,get:()=>g[d]})}}return c.default=g,Object.freeze(c)}const i=s(n),r=new Map,o={set(g,c,d){r.has(g)||r.set(g,new Map);const y=r.get(g);if(!y.has(c)&&y.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(y.keys())[0]}.`);return}y.set(c,d)},get(g,c){return r.has(g)&&r.get(g).get(c)||null},remove(g,c){if(!r.has(g))return;const d=r.get(g);d.delete(c),d.size===0&&r.delete(g)}},a=1e6,l=1e3,u="transitionend",f=g=>(g&&window.CSS&&window.CSS.escape&&(g=g.replace(/#([^\s"#']+)/g,(c,d)=>`#${CSS.escape(d)}`)),g),h=g=>g==null?`${g}`:Object.prototype.toString.call(g).match(/\s([a-z]+)/i)[1].toLowerCase(),p=g=>{do g+=Math.floor(Math.random()*a);while(document.getElementById(g));return g},_=g=>{if(!g)return 0;let{transitionDuration:c,transitionDelay:d}=window.getComputedStyle(g);const y=Number.parseFloat(c),k=Number.parseFloat(d);return!y&&!k?0:(c=c.split(",")[0],d=d.split(",")[0],(Number.parseFloat(c)+Number.parseFloat(d))*l)},b=g=>{g.dispatchEvent(new Event(u))},T=g=>!g||typeof g!="object"?!1:(typeof g.jquery<"u"&&(g=g[0]),typeof g.nodeType<"u"),O=g=>T(g)?g.jquery?g[0]:g:typeof g=="string"&&g.length>0?document.querySelector(f(g)):null,S=g=>{if(!T(g)||g.getClientRects().length===0)return!1;const c=getComputedStyle(g).getPropertyValue("visibility")==="visible",d=g.closest("details:not([open])");if(!d)return c;if(d!==g){const y=g.closest("summary");if(y&&y.parentNode!==d||y===null)return!1}return c},E=g=>!g||g.nodeType!==Node.ELEMENT_NODE||g.classList.contains("disabled")?!0:typeof g.disabled<"u"?g.disabled:g.hasAttribute("disabled")&&g.getAttribute("disabled")!=="false",C=g=>{if(!document.documentElement.attachShadow)return null;if(typeof g.getRootNode=="function"){const c=g.getRootNode();return c instanceof ShadowRoot?c:null}return g instanceof ShadowRoot?g:g.parentNode?C(g.parentNode):null},N=()=>{},R=g=>{g.offsetHeight},D=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,K=[],ae=g=>{document.readyState==="loading"?(K.length||document.addEventListener("DOMContentLoaded",()=>{for(const c of K)c()}),K.push(g)):g()},te=()=>document.documentElement.dir==="rtl",se=g=>{ae(()=>{const c=D();if(c){const d=g.NAME,y=c.fn[d];c.fn[d]=g.jQueryInterface,c.fn[d].Constructor=g,c.fn[d].noConflict=()=>(c.fn[d]=y,g.jQueryInterface)}})},le=(g,c=[],d=g)=>typeof g=="function"?g(...c):d,Le=(g,c,d=!0)=>{if(!d){le(g);return}const k=_(c)+5;let H=!1;const V=({target:ce})=>{ce===c&&(H=!0,c.removeEventListener(u,V),le(g))};c.addEventListener(u,V),setTimeout(()=>{H||b(c)},k)},ve=(g,c,d,y)=>{const k=g.length;let H=g.indexOf(c);return H===-1?!d&&y?g[k-1]:g[0]:(H+=d?1:-1,y&&(H=(H+k)%k),g[Math.max(0,Math.min(H,k-1))])},it=/[^.]*(?=\..*)\.|.*/,Je=/\..*/,me=/::\d+$/,ie={};let ue=1;const Ue={mouseenter:"mouseover",mouseleave:"mouseout"},rt=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function qe(g,c){return c&&`${c}::${ue++}`||g.uidEvent||ue++}function ke(g){const c=qe(g);return g.uidEvent=c,ie[c]=ie[c]||{},ie[c]}function Et(g,c){return function d(y){return be(y,{delegateTarget:g}),d.oneOff&&A.off(g,y.type,c),c.apply(g,[y])}}function ot(g,c,d){return function y(k){const H=g.querySelectorAll(c);for(let{target:V}=k;V&&V!==this;V=V.parentNode)for(const ce of H)if(ce===V)return be(k,{delegateTarget:V}),y.oneOff&&A.off(g,k.type,c,d),d.apply(V,[k])}}function Ze(g,c,d=null){return Object.values(g).find(y=>y.callable===c&&y.delegationSelector===d)}function $e(g,c,d){const y=typeof c=="string",k=y?d:c||d;let H=Y(g);return rt.has(H)||(H=g),[y,k,H]}function x(g,c,d,y,k){if(typeof c!="string"||!g)return;let[H,V,ce]=$e(c,d,y);c in Ue&&(V=(VC=>function(ci){if(!ci.relatedTarget||ci.relatedTarget!==ci.delegateTarget&&!ci.delegateTarget.contains(ci.relatedTarget))return VC.call(this,ci)})(V));const pt=ke(g),xt=pt[ce]||(pt[ce]={}),ze=Ze(xt,V,H?d:null);if(ze){ze.oneOff=ze.oneOff&&k;return}const Yt=qe(V,c.replace(it,"")),Ut=H?ot(g,d,V):Et(g,V);Ut.delegationSelector=H?d:null,Ut.callable=V,Ut.oneOff=k,Ut.uidEvent=Yt,xt[Yt]=Ut,g.addEventListener(ce,Ut,H)}function B(g,c,d,y,k){const H=Ze(c[d],y,k);H&&(g.removeEventListener(d,H,!!k),delete c[d][H.uidEvent])}function z(g,c,d,y){const k=c[d]||{};for(const[H,V]of Object.entries(k))H.includes(y)&&B(g,c,d,V.callable,V.delegationSelector)}function Y(g){return g=g.replace(Je,""),Ue[g]||g}const A={on(g,c,d,y){x(g,c,d,y,!1)},one(g,c,d,y){x(g,c,d,y,!0)},off(g,c,d,y){if(typeof c!="string"||!g)return;const[k,H,V]=$e(c,d,y),ce=V!==c,pt=ke(g),xt=pt[V]||{},ze=c.startsWith(".");if(typeof H<"u"){if(!Object.keys(xt).length)return;B(g,pt,V,H,k?d:null);return}if(ze)for(const Yt of Object.keys(pt))z(g,pt,Yt,c.slice(1));for(const[Yt,Ut]of Object.entries(xt)){const Po=Yt.replace(me,"");(!ce||c.includes(Po))&&B(g,pt,V,Ut.callable,Ut.delegationSelector)}},trigger(g,c,d){if(typeof c!="string"||!g)return null;const y=D(),k=Y(c),H=c!==k;let V=null,ce=!0,pt=!0,xt=!1;H&&y&&(V=y.Event(c,d),y(g).trigger(V),ce=!V.isPropagationStopped(),pt=!V.isImmediatePropagationStopped(),xt=V.isDefaultPrevented());const ze=be(new Event(c,{bubbles:ce,cancelable:!0}),d);return xt&&ze.preventDefault(),pt&&g.dispatchEvent(ze),ze.defaultPrevented&&V&&V.preventDefault(),ze}};function be(g,c={}){for(const[d,y]of Object.entries(c))try{g[d]=y}catch{Object.defineProperty(g,d,{configurable:!0,get(){return y}})}return g}function m(g){if(g==="true")return!0;if(g==="false")return!1;if(g===Number(g).toString())return Number(g);if(g===""||g==="null")return null;if(typeof g!="string")return g;try{return JSON.parse(decodeURIComponent(g))}catch{return g}}function v(g){return g.replace(/[A-Z]/g,c=>`-${c.toLowerCase()}`)}const w={setDataAttribute(g,c,d){g.setAttribute(`data-bs-${v(c)}`,d)},removeDataAttribute(g,c){g.removeAttribute(`data-bs-${v(c)}`)},getDataAttributes(g){if(!g)return{};const c={},d=Object.keys(g.dataset).filter(y=>y.startsWith("bs")&&!y.startsWith("bsConfig"));for(const y of d){let k=y.replace(/^bs/,"");k=k.charAt(0).toLowerCase()+k.slice(1,k.length),c[k]=m(g.dataset[y])}return c},getDataAttribute(g,c){return m(g.getAttribute(`data-bs-${v(c)}`))}};class L{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(c){return c=this._mergeConfigObj(c),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}_configAfterMerge(c){return c}_mergeConfigObj(c,d){const y=T(d)?w.getDataAttribute(d,"config"):{};return{...this.constructor.Default,...typeof y=="object"?y:{},...T(d)?w.getDataAttributes(d):{},...typeof c=="object"?c:{}}}_typeCheckConfig(c,d=this.constructor.DefaultType){for(const[y,k]of Object.entries(d)){const H=c[y],V=T(H)?"element":h(H);if(!new RegExp(k).test(V))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${y}" provided type "${V}" but expected type "${k}".`)}}}const P="5.3.3";class M extends L{constructor(c,d){super(),c=O(c),c&&(this._element=c,this._config=this._getConfig(d),o.set(this._element,this.constructor.DATA_KEY,this))}dispose(){o.remove(this._element,this.constructor.DATA_KEY),A.off(this._element,this.constructor.EVENT_KEY);for(const c of Object.getOwnPropertyNames(this))this[c]=null}_queueCallback(c,d,y=!0){Le(c,d,y)}_getConfig(c){return c=this._mergeConfigObj(c,this._element),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}static getInstance(c){return o.get(O(c),this.DATA_KEY)}static getOrCreateInstance(c,d={}){return this.getInstance(c)||new this(c,typeof d=="object"?d:null)}static get VERSION(){return P}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(c){return`${c}${this.EVENT_KEY}`}}const j=g=>{let c=g.getAttribute("data-bs-target");if(!c||c==="#"){let d=g.getAttribute("href");if(!d||!d.includes("#")&&!d.startsWith("."))return null;d.includes("#")&&!d.startsWith("#")&&(d=`#${d.split("#")[1]}`),c=d&&d!=="#"?d.trim():null}return c?c.split(",").map(d=>f(d)).join(","):null},I={find(g,c=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(c,g))},findOne(g,c=document.documentElement){return Element.prototype.querySelector.call(c,g)},children(g,c){return[].concat(...g.children).filter(d=>d.matches(c))},parents(g,c){const d=[];let y=g.parentNode.closest(c);for(;y;)d.push(y),y=y.parentNode.closest(c);return d},prev(g,c){let d=g.previousElementSibling;for(;d;){if(d.matches(c))return[d];d=d.previousElementSibling}return[]},next(g,c){let d=g.nextElementSibling;for(;d;){if(d.matches(c))return[d];d=d.nextElementSibling}return[]},focusableChildren(g){const c=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(d=>`${d}:not([tabindex^="-"])`).join(",");return this.find(c,g).filter(d=>!E(d)&&S(d))},getSelectorFromElement(g){const c=j(g);return c&&I.findOne(c)?c:null},getElementFromSelector(g){const c=j(g);return c?I.findOne(c):null},getMultipleElementsFromSelector(g){const c=j(g);return c?I.find(c):[]}},U=(g,c="hide")=>{const d=`click.dismiss${g.EVENT_KEY}`,y=g.NAME;A.on(document,d,`[data-bs-dismiss="${y}"]`,function(k){if(["A","AREA"].includes(this.tagName)&&k.preventDefault(),E(this))return;const H=I.getElementFromSelector(this)||this.closest(`.${y}`);g.getOrCreateInstance(H)[c]()})},F="alert",Q=".bs.alert",X=`close${Q}`,ee=`closed${Q}`,oe="fade",ye="show";class pe extends M{static get NAME(){return F}close(){if(A.trigger(this._element,X).defaultPrevented)return;this._element.classList.remove(ye);const d=this._element.classList.contains(oe);this._queueCallback(()=>this._destroyElement(),this._element,d)}_destroyElement(){this._element.remove(),A.trigger(this._element,ee),this.dispose()}static jQueryInterface(c){return this.each(function(){const d=pe.getOrCreateInstance(this);if(typeof c=="string"){if(d[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);d[c](this)}})}}U(pe,"close"),se(pe);const We="button",kn=".bs.button",vo=".data-api",gs="active",sr='[data-bs-toggle="button"]',at=`click${kn}${vo}`;class et extends M{static get NAME(){return We}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(gs))}static jQueryInterface(c){return this.each(function(){const d=et.getOrCreateInstance(this);c==="toggle"&&d[c]()})}}A.on(document,at,sr,g=>{g.preventDefault();const c=g.target.closest(sr);et.getOrCreateInstance(c).toggle()}),se(et);const yo="swipe",ti=".bs.swipe",dE=`touchstart${ti}`,hE=`touchmove${ti}`,pE=`touchend${ti}`,mE=`pointerdown${ti}`,_E=`pointerup${ti}`,gE="touch",vE="pen",yE="pointer-event",EE=40,bE={endCallback:null,leftCallback:null,rightCallback:null},wE={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Eo extends L{constructor(c,d){super(),this._element=c,!(!c||!Eo.isSupported())&&(this._config=this._getConfig(d),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return bE}static get DefaultType(){return wE}static get NAME(){return yo}dispose(){A.off(this._element,ti)}_start(c){if(!this._supportPointerEvents){this._deltaX=c.touches[0].clientX;return}this._eventIsPointerPenTouch(c)&&(this._deltaX=c.clientX)}_end(c){this._eventIsPointerPenTouch(c)&&(this._deltaX=c.clientX-this._deltaX),this._handleSwipe(),le(this._config.endCallback)}_move(c){this._deltaX=c.touches&&c.touches.length>1?0:c.touches[0].clientX-this._deltaX}_handleSwipe(){const c=Math.abs(this._deltaX);if(c<=EE)return;const d=c/this._deltaX;this._deltaX=0,d&&le(d>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(A.on(this._element,mE,c=>this._start(c)),A.on(this._element,_E,c=>this._end(c)),this._element.classList.add(yE)):(A.on(this._element,dE,c=>this._start(c)),A.on(this._element,hE,c=>this._move(c)),A.on(this._element,pE,c=>this._end(c)))}_eventIsPointerPenTouch(c){return this._supportPointerEvents&&(c.pointerType===vE||c.pointerType===gE)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const CE="carousel",Dn=".bs.carousel",rd=".data-api",TE="ArrowLeft",SE="ArrowRight",IE=500,ir="next",ni="prev",si="left",bo="right",AE=`slide${Dn}`,Tl=`slid${Dn}`,OE=`keydown${Dn}`,NE=`mouseenter${Dn}`,RE=`mouseleave${Dn}`,PE=`dragstart${Dn}`,xE=`load${Dn}${rd}`,kE=`click${Dn}${rd}`,od="carousel",wo="active",DE="slide",LE="carousel-item-end",ME="carousel-item-start",FE="carousel-item-next",$E="carousel-item-prev",ad=".active",ld=".carousel-item",UE=ad+ld,WE=".carousel-item img",VE=".carousel-indicators",HE="[data-bs-slide], [data-bs-slide-to]",jE='[data-bs-ride="carousel"]',BE={[TE]:bo,[SE]:si},zE={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},KE={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class ii extends M{constructor(c,d){super(c,d),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=I.findOne(VE,this._element),this._addEventListeners(),this._config.ride===od&&this.cycle()}static get Default(){return zE}static get DefaultType(){return KE}static get NAME(){return CE}next(){this._slide(ir)}nextWhenVisible(){!document.hidden&&S(this._element)&&this.next()}prev(){this._slide(ni)}pause(){this._isSliding&&b(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){A.one(this._element,Tl,()=>this.cycle());return}this.cycle()}}to(c){const d=this._getItems();if(c>d.length-1||c<0)return;if(this._isSliding){A.one(this._element,Tl,()=>this.to(c));return}const y=this._getItemIndex(this._getActive());if(y===c)return;const k=c>y?ir:ni;this._slide(k,d[c])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(c){return c.defaultInterval=c.interval,c}_addEventListeners(){this._config.keyboard&&A.on(this._element,OE,c=>this._keydown(c)),this._config.pause==="hover"&&(A.on(this._element,NE,()=>this.pause()),A.on(this._element,RE,()=>this._maybeEnableCycle())),this._config.touch&&Eo.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const y of I.find(WE,this._element))A.on(y,PE,k=>k.preventDefault());const d={leftCallback:()=>this._slide(this._directionToOrder(si)),rightCallback:()=>this._slide(this._directionToOrder(bo)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),IE+this._config.interval))}};this._swipeHelper=new Eo(this._element,d)}_keydown(c){if(/input|textarea/i.test(c.target.tagName))return;const d=BE[c.key];d&&(c.preventDefault(),this._slide(this._directionToOrder(d)))}_getItemIndex(c){return this._getItems().indexOf(c)}_setActiveIndicatorElement(c){if(!this._indicatorsElement)return;const d=I.findOne(ad,this._indicatorsElement);d.classList.remove(wo),d.removeAttribute("aria-current");const y=I.findOne(`[data-bs-slide-to="${c}"]`,this._indicatorsElement);y&&(y.classList.add(wo),y.setAttribute("aria-current","true"))}_updateInterval(){const c=this._activeElement||this._getActive();if(!c)return;const d=Number.parseInt(c.getAttribute("data-bs-interval"),10);this._config.interval=d||this._config.defaultInterval}_slide(c,d=null){if(this._isSliding)return;const y=this._getActive(),k=c===ir,H=d||ve(this._getItems(),y,k,this._config.wrap);if(H===y)return;const V=this._getItemIndex(H),ce=Po=>A.trigger(this._element,Po,{relatedTarget:H,direction:this._orderToDirection(c),from:this._getItemIndex(y),to:V});if(ce(AE).defaultPrevented||!y||!H)return;const xt=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(V),this._activeElement=H;const ze=k?ME:LE,Yt=k?FE:$E;H.classList.add(Yt),R(H),y.classList.add(ze),H.classList.add(ze);const Ut=()=>{H.classList.remove(ze,Yt),H.classList.add(wo),y.classList.remove(wo,Yt,ze),this._isSliding=!1,ce(Tl)};this._queueCallback(Ut,y,this._isAnimated()),xt&&this.cycle()}_isAnimated(){return this._element.classList.contains(DE)}_getActive(){return I.findOne(UE,this._element)}_getItems(){return I.find(ld,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(c){return te()?c===si?ni:ir:c===si?ir:ni}_orderToDirection(c){return te()?c===ni?si:bo:c===ni?bo:si}static jQueryInterface(c){return this.each(function(){const d=ii.getOrCreateInstance(this,c);if(typeof c=="number"){d.to(c);return}if(typeof c=="string"){if(d[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);d[c]()}})}}A.on(document,kE,HE,function(g){const c=I.getElementFromSelector(this);if(!c||!c.classList.contains(od))return;g.preventDefault();const d=ii.getOrCreateInstance(c),y=this.getAttribute("data-bs-slide-to");if(y){d.to(y),d._maybeEnableCycle();return}if(w.getDataAttribute(this,"slide")==="next"){d.next(),d._maybeEnableCycle();return}d.prev(),d._maybeEnableCycle()}),A.on(window,xE,()=>{const g=I.find(jE);for(const c of g)ii.getOrCreateInstance(c)}),se(ii);const GE="collapse",rr=".bs.collapse",YE=".data-api",qE=`show${rr}`,QE=`shown${rr}`,XE=`hide${rr}`,JE=`hidden${rr}`,ZE=`click${rr}${YE}`,Sl="show",ri="collapse",Co="collapsing",eb="collapsed",tb=`:scope .${ri} .${ri}`,nb="collapse-horizontal",sb="width",ib="height",rb=".collapse.show, .collapse.collapsing",Il='[data-bs-toggle="collapse"]',ob={parent:null,toggle:!0},ab={parent:"(null|element)",toggle:"boolean"};class oi extends M{constructor(c,d){super(c,d),this._isTransitioning=!1,this._triggerArray=[];const y=I.find(Il);for(const k of y){const H=I.getSelectorFromElement(k),V=I.find(H).filter(ce=>ce===this._element);H!==null&&V.length&&this._triggerArray.push(k)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return ob}static get DefaultType(){return ab}static get NAME(){return GE}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let c=[];if(this._config.parent&&(c=this._getFirstLevelChildren(rb).filter(ce=>ce!==this._element).map(ce=>oi.getOrCreateInstance(ce,{toggle:!1}))),c.length&&c[0]._isTransitioning||A.trigger(this._element,qE).defaultPrevented)return;for(const ce of c)ce.hide();const y=this._getDimension();this._element.classList.remove(ri),this._element.classList.add(Co),this._element.style[y]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const k=()=>{this._isTransitioning=!1,this._element.classList.remove(Co),this._element.classList.add(ri,Sl),this._element.style[y]="",A.trigger(this._element,QE)},V=`scroll${y[0].toUpperCase()+y.slice(1)}`;this._queueCallback(k,this._element,!0),this._element.style[y]=`${this._element[V]}px`}hide(){if(this._isTransitioning||!this._isShown()||A.trigger(this._element,XE).defaultPrevented)return;const d=this._getDimension();this._element.style[d]=`${this._element.getBoundingClientRect()[d]}px`,R(this._element),this._element.classList.add(Co),this._element.classList.remove(ri,Sl);for(const k of this._triggerArray){const H=I.getElementFromSelector(k);H&&!this._isShown(H)&&this._addAriaAndCollapsedClass([k],!1)}this._isTransitioning=!0;const y=()=>{this._isTransitioning=!1,this._element.classList.remove(Co),this._element.classList.add(ri),A.trigger(this._element,JE)};this._element.style[d]="",this._queueCallback(y,this._element,!0)}_isShown(c=this._element){return c.classList.contains(Sl)}_configAfterMerge(c){return c.toggle=!!c.toggle,c.parent=O(c.parent),c}_getDimension(){return this._element.classList.contains(nb)?sb:ib}_initializeChildren(){if(!this._config.parent)return;const c=this._getFirstLevelChildren(Il);for(const d of c){const y=I.getElementFromSelector(d);y&&this._addAriaAndCollapsedClass([d],this._isShown(y))}}_getFirstLevelChildren(c){const d=I.find(tb,this._config.parent);return I.find(c,this._config.parent).filter(y=>!d.includes(y))}_addAriaAndCollapsedClass(c,d){if(c.length)for(const y of c)y.classList.toggle(eb,!d),y.setAttribute("aria-expanded",d)}static jQueryInterface(c){const d={};return typeof c=="string"&&/show|hide/.test(c)&&(d.toggle=!1),this.each(function(){const y=oi.getOrCreateInstance(this,d);if(typeof c=="string"){if(typeof y[c]>"u")throw new TypeError(`No method named "${c}"`);y[c]()}})}}A.on(document,ZE,Il,function(g){(g.target.tagName==="A"||g.delegateTarget&&g.delegateTarget.tagName==="A")&&g.preventDefault();for(const c of I.getMultipleElementsFromSelector(this))oi.getOrCreateInstance(c,{toggle:!1}).toggle()}),se(oi);const cd="dropdown",vs=".bs.dropdown",Al=".data-api",lb="Escape",ud="Tab",cb="ArrowUp",fd="ArrowDown",ub=2,fb=`hide${vs}`,db=`hidden${vs}`,hb=`show${vs}`,pb=`shown${vs}`,dd=`click${vs}${Al}`,hd=`keydown${vs}${Al}`,mb=`keyup${vs}${Al}`,ai="show",_b="dropup",gb="dropend",vb="dropstart",yb="dropup-center",Eb="dropdown-center",ys='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',bb=`${ys}.${ai}`,To=".dropdown-menu",wb=".navbar",Cb=".navbar-nav",Tb=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Sb=te()?"top-end":"top-start",Ib=te()?"top-start":"top-end",Ab=te()?"bottom-end":"bottom-start",Ob=te()?"bottom-start":"bottom-end",Nb=te()?"left-start":"right-start",Rb=te()?"right-start":"left-start",Pb="top",xb="bottom",kb={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Db={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class $t extends M{constructor(c,d){super(c,d),this._popper=null,this._parent=this._element.parentNode,this._menu=I.next(this._element,To)[0]||I.prev(this._element,To)[0]||I.findOne(To,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return kb}static get DefaultType(){return Db}static get NAME(){return cd}toggle(){return this._isShown()?this.hide():this.show()}show(){if(E(this._element)||this._isShown())return;const c={relatedTarget:this._element};if(!A.trigger(this._element,hb,c).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(Cb))for(const y of[].concat(...document.body.children))A.on(y,"mouseover",N);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(ai),this._element.classList.add(ai),A.trigger(this._element,pb,c)}}hide(){if(E(this._element)||!this._isShown())return;const c={relatedTarget:this._element};this._completeHide(c)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(c){if(!A.trigger(this._element,fb,c).defaultPrevented){if("ontouchstart"in document.documentElement)for(const y of[].concat(...document.body.children))A.off(y,"mouseover",N);this._popper&&this._popper.destroy(),this._menu.classList.remove(ai),this._element.classList.remove(ai),this._element.setAttribute("aria-expanded","false"),w.removeDataAttribute(this._menu,"popper"),A.trigger(this._element,db,c)}}_getConfig(c){if(c=super._getConfig(c),typeof c.reference=="object"&&!T(c.reference)&&typeof c.reference.getBoundingClientRect!="function")throw new TypeError(`${cd.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return c}_createPopper(){if(typeof i>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let c=this._element;this._config.reference==="parent"?c=this._parent:T(this._config.reference)?c=O(this._config.reference):typeof this._config.reference=="object"&&(c=this._config.reference);const d=this._getPopperConfig();this._popper=i.createPopper(c,this._menu,d)}_isShown(){return this._menu.classList.contains(ai)}_getPlacement(){const c=this._parent;if(c.classList.contains(gb))return Nb;if(c.classList.contains(vb))return Rb;if(c.classList.contains(yb))return Pb;if(c.classList.contains(Eb))return xb;const d=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return c.classList.contains(_b)?d?Ib:Sb:d?Ob:Ab}_detectNavbar(){return this._element.closest(wb)!==null}_getOffset(){const{offset:c}=this._config;return typeof c=="string"?c.split(",").map(d=>Number.parseInt(d,10)):typeof c=="function"?d=>c(d,this._element):c}_getPopperConfig(){const c={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(w.setDataAttribute(this._menu,"popper","static"),c.modifiers=[{name:"applyStyles",enabled:!1}]),{...c,...le(this._config.popperConfig,[c])}}_selectMenuItem({key:c,target:d}){const y=I.find(Tb,this._menu).filter(k=>S(k));y.length&&ve(y,d,c===fd,!y.includes(d)).focus()}static jQueryInterface(c){return this.each(function(){const d=$t.getOrCreateInstance(this,c);if(typeof c=="string"){if(typeof d[c]>"u")throw new TypeError(`No method named "${c}"`);d[c]()}})}static clearMenus(c){if(c.button===ub||c.type==="keyup"&&c.key!==ud)return;const d=I.find(bb);for(const y of d){const k=$t.getInstance(y);if(!k||k._config.autoClose===!1)continue;const H=c.composedPath(),V=H.includes(k._menu);if(H.includes(k._element)||k._config.autoClose==="inside"&&!V||k._config.autoClose==="outside"&&V||k._menu.contains(c.target)&&(c.type==="keyup"&&c.key===ud||/input|select|option|textarea|form/i.test(c.target.tagName)))continue;const ce={relatedTarget:k._element};c.type==="click"&&(ce.clickEvent=c),k._completeHide(ce)}}static dataApiKeydownHandler(c){const d=/input|textarea/i.test(c.target.tagName),y=c.key===lb,k=[cb,fd].includes(c.key);if(!k&&!y||d&&!y)return;c.preventDefault();const H=this.matches(ys)?this:I.prev(this,ys)[0]||I.next(this,ys)[0]||I.findOne(ys,c.delegateTarget.parentNode),V=$t.getOrCreateInstance(H);if(k){c.stopPropagation(),V.show(),V._selectMenuItem(c);return}V._isShown()&&(c.stopPropagation(),V.hide(),H.focus())}}A.on(document,hd,ys,$t.dataApiKeydownHandler),A.on(document,hd,To,$t.dataApiKeydownHandler),A.on(document,dd,$t.clearMenus),A.on(document,mb,$t.clearMenus),A.on(document,dd,ys,function(g){g.preventDefault(),$t.getOrCreateInstance(this).toggle()}),se($t);const pd="backdrop",Lb="fade",md="show",_d=`mousedown.bs.${pd}`,Mb={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Fb={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class gd extends L{constructor(c){super(),this._config=this._getConfig(c),this._isAppended=!1,this._element=null}static get Default(){return Mb}static get DefaultType(){return Fb}static get NAME(){return pd}show(c){if(!this._config.isVisible){le(c);return}this._append();const d=this._getElement();this._config.isAnimated&&R(d),d.classList.add(md),this._emulateAnimation(()=>{le(c)})}hide(c){if(!this._config.isVisible){le(c);return}this._getElement().classList.remove(md),this._emulateAnimation(()=>{this.dispose(),le(c)})}dispose(){this._isAppended&&(A.off(this._element,_d),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const c=document.createElement("div");c.className=this._config.className,this._config.isAnimated&&c.classList.add(Lb),this._element=c}return this._element}_configAfterMerge(c){return c.rootElement=O(c.rootElement),c}_append(){if(this._isAppended)return;const c=this._getElement();this._config.rootElement.append(c),A.on(c,_d,()=>{le(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(c){Le(c,this._getElement(),this._config.isAnimated)}}const $b="focustrap",So=".bs.focustrap",Ub=`focusin${So}`,Wb=`keydown.tab${So}`,Vb="Tab",Hb="forward",vd="backward",jb={autofocus:!0,trapElement:null},Bb={autofocus:"boolean",trapElement:"element"};class yd extends L{constructor(c){super(),this._config=this._getConfig(c),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return jb}static get DefaultType(){return Bb}static get NAME(){return $b}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),A.off(document,So),A.on(document,Ub,c=>this._handleFocusin(c)),A.on(document,Wb,c=>this._handleKeydown(c)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,A.off(document,So))}_handleFocusin(c){const{trapElement:d}=this._config;if(c.target===document||c.target===d||d.contains(c.target))return;const y=I.focusableChildren(d);y.length===0?d.focus():this._lastTabNavDirection===vd?y[y.length-1].focus():y[0].focus()}_handleKeydown(c){c.key===Vb&&(this._lastTabNavDirection=c.shiftKey?vd:Hb)}}const Ed=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",bd=".sticky-top",Io="padding-right",wd="margin-right";class Ol{constructor(){this._element=document.body}getWidth(){const c=document.documentElement.clientWidth;return Math.abs(window.innerWidth-c)}hide(){const c=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Io,d=>d+c),this._setElementAttributes(Ed,Io,d=>d+c),this._setElementAttributes(bd,wd,d=>d-c)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Io),this._resetElementAttributes(Ed,Io),this._resetElementAttributes(bd,wd)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(c,d,y){const k=this.getWidth(),H=V=>{if(V!==this._element&&window.innerWidth>V.clientWidth+k)return;this._saveInitialAttribute(V,d);const ce=window.getComputedStyle(V).getPropertyValue(d);V.style.setProperty(d,`${y(Number.parseFloat(ce))}px`)};this._applyManipulationCallback(c,H)}_saveInitialAttribute(c,d){const y=c.style.getPropertyValue(d);y&&w.setDataAttribute(c,d,y)}_resetElementAttributes(c,d){const y=k=>{const H=w.getDataAttribute(k,d);if(H===null){k.style.removeProperty(d);return}w.removeDataAttribute(k,d),k.style.setProperty(d,H)};this._applyManipulationCallback(c,y)}_applyManipulationCallback(c,d){if(T(c)){d(c);return}for(const y of I.find(c,this._element))d(y)}}const zb="modal",Pt=".bs.modal",Kb=".data-api",Gb="Escape",Yb=`hide${Pt}`,qb=`hidePrevented${Pt}`,Cd=`hidden${Pt}`,Td=`show${Pt}`,Qb=`shown${Pt}`,Xb=`resize${Pt}`,Jb=`click.dismiss${Pt}`,Zb=`mousedown.dismiss${Pt}`,ew=`keydown.dismiss${Pt}`,tw=`click${Pt}${Kb}`,Sd="modal-open",nw="fade",Id="show",Nl="modal-static",sw=".modal.show",iw=".modal-dialog",rw=".modal-body",ow='[data-bs-toggle="modal"]',aw={backdrop:!0,focus:!0,keyboard:!0},lw={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Es extends M{constructor(c,d){super(c,d),this._dialog=I.findOne(iw,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Ol,this._addEventListeners()}static get Default(){return aw}static get DefaultType(){return lw}static get NAME(){return zb}toggle(c){return this._isShown?this.hide():this.show(c)}show(c){this._isShown||this._isTransitioning||A.trigger(this._element,Td,{relatedTarget:c}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Sd),this._adjustDialog(),this._backdrop.show(()=>this._showElement(c)))}hide(){!this._isShown||this._isTransitioning||A.trigger(this._element,Yb).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Id),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){A.off(window,Pt),A.off(this._dialog,Pt),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new gd({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new yd({trapElement:this._element})}_showElement(c){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const d=I.findOne(rw,this._dialog);d&&(d.scrollTop=0),R(this._element),this._element.classList.add(Id);const y=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,A.trigger(this._element,Qb,{relatedTarget:c})};this._queueCallback(y,this._dialog,this._isAnimated())}_addEventListeners(){A.on(this._element,ew,c=>{if(c.key===Gb){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),A.on(window,Xb,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),A.on(this._element,Zb,c=>{A.one(this._element,Jb,d=>{if(!(this._element!==c.target||this._element!==d.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Sd),this._resetAdjustments(),this._scrollBar.reset(),A.trigger(this._element,Cd)})}_isAnimated(){return this._element.classList.contains(nw)}_triggerBackdropTransition(){if(A.trigger(this._element,qb).defaultPrevented)return;const d=this._element.scrollHeight>document.documentElement.clientHeight,y=this._element.style.overflowY;y==="hidden"||this._element.classList.contains(Nl)||(d||(this._element.style.overflowY="hidden"),this._element.classList.add(Nl),this._queueCallback(()=>{this._element.classList.remove(Nl),this._queueCallback(()=>{this._element.style.overflowY=y},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const c=this._element.scrollHeight>document.documentElement.clientHeight,d=this._scrollBar.getWidth(),y=d>0;if(y&&!c){const k=te()?"paddingLeft":"paddingRight";this._element.style[k]=`${d}px`}if(!y&&c){const k=te()?"paddingRight":"paddingLeft";this._element.style[k]=`${d}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(c,d){return this.each(function(){const y=Es.getOrCreateInstance(this,c);if(typeof c=="string"){if(typeof y[c]>"u")throw new TypeError(`No method named "${c}"`);y[c](d)}})}}A.on(document,tw,ow,function(g){const c=I.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&g.preventDefault(),A.one(c,Td,k=>{k.defaultPrevented||A.one(c,Cd,()=>{S(this)&&this.focus()})});const d=I.findOne(sw);d&&Es.getInstance(d).hide(),Es.getOrCreateInstance(c).toggle(this)}),U(Es),se(Es);const cw="offcanvas",un=".bs.offcanvas",Ad=".data-api",uw=`load${un}${Ad}`,fw="Escape",Od="show",Nd="showing",Rd="hiding",dw="offcanvas-backdrop",Pd=".offcanvas.show",hw=`show${un}`,pw=`shown${un}`,mw=`hide${un}`,xd=`hidePrevented${un}`,kd=`hidden${un}`,_w=`resize${un}`,gw=`click${un}${Ad}`,vw=`keydown.dismiss${un}`,yw='[data-bs-toggle="offcanvas"]',Ew={backdrop:!0,keyboard:!0,scroll:!1},bw={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class fn extends M{constructor(c,d){super(c,d),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Ew}static get DefaultType(){return bw}static get NAME(){return cw}toggle(c){return this._isShown?this.hide():this.show(c)}show(c){if(this._isShown||A.trigger(this._element,hw,{relatedTarget:c}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Ol().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Nd);const y=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(Od),this._element.classList.remove(Nd),A.trigger(this._element,pw,{relatedTarget:c})};this._queueCallback(y,this._element,!0)}hide(){if(!this._isShown||A.trigger(this._element,mw).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Rd),this._backdrop.hide();const d=()=>{this._element.classList.remove(Od,Rd),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Ol().reset(),A.trigger(this._element,kd)};this._queueCallback(d,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const c=()=>{if(this._config.backdrop==="static"){A.trigger(this._element,xd);return}this.hide()},d=!!this._config.backdrop;return new gd({className:dw,isVisible:d,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:d?c:null})}_initializeFocusTrap(){return new yd({trapElement:this._element})}_addEventListeners(){A.on(this._element,vw,c=>{if(c.key===fw){if(this._config.keyboard){this.hide();return}A.trigger(this._element,xd)}})}static jQueryInterface(c){return this.each(function(){const d=fn.getOrCreateInstance(this,c);if(typeof c=="string"){if(d[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);d[c](this)}})}}A.on(document,gw,yw,function(g){const c=I.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&g.preventDefault(),E(this))return;A.one(c,kd,()=>{S(this)&&this.focus()});const d=I.findOne(Pd);d&&d!==c&&fn.getInstance(d).hide(),fn.getOrCreateInstance(c).toggle(this)}),A.on(window,uw,()=>{for(const g of I.find(Pd))fn.getOrCreateInstance(g).show()}),A.on(window,_w,()=>{for(const g of I.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(g).position!=="fixed"&&fn.getOrCreateInstance(g).hide()}),U(fn),se(fn);const Dd={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},ww=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Cw=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Tw=(g,c)=>{const d=g.nodeName.toLowerCase();return c.includes(d)?ww.has(d)?!!Cw.test(g.nodeValue):!0:c.filter(y=>y instanceof RegExp).some(y=>y.test(d))};function Sw(g,c,d){if(!g.length)return g;if(d&&typeof d=="function")return d(g);const k=new window.DOMParser().parseFromString(g,"text/html"),H=[].concat(...k.body.querySelectorAll("*"));for(const V of H){const ce=V.nodeName.toLowerCase();if(!Object.keys(c).includes(ce)){V.remove();continue}const pt=[].concat(...V.attributes),xt=[].concat(c["*"]||[],c[ce]||[]);for(const ze of pt)Tw(ze,xt)||V.removeAttribute(ze.nodeName)}return k.body.innerHTML}const Iw="TemplateFactory",Aw={allowList:Dd,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Ow={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Nw={entry:"(string|element|function|null)",selector:"(string|element)"};class Rw extends L{constructor(c){super(),this._config=this._getConfig(c)}static get Default(){return Aw}static get DefaultType(){return Ow}static get NAME(){return Iw}getContent(){return Object.values(this._config.content).map(c=>this._resolvePossibleFunction(c)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(c){return this._checkContent(c),this._config.content={...this._config.content,...c},this}toHtml(){const c=document.createElement("div");c.innerHTML=this._maybeSanitize(this._config.template);for(const[k,H]of Object.entries(this._config.content))this._setContent(c,H,k);const d=c.children[0],y=this._resolvePossibleFunction(this._config.extraClass);return y&&d.classList.add(...y.split(" ")),d}_typeCheckConfig(c){super._typeCheckConfig(c),this._checkContent(c.content)}_checkContent(c){for(const[d,y]of Object.entries(c))super._typeCheckConfig({selector:d,entry:y},Nw)}_setContent(c,d,y){const k=I.findOne(y,c);if(k){if(d=this._resolvePossibleFunction(d),!d){k.remove();return}if(T(d)){this._putElementInTemplate(O(d),k);return}if(this._config.html){k.innerHTML=this._maybeSanitize(d);return}k.textContent=d}}_maybeSanitize(c){return this._config.sanitize?Sw(c,this._config.allowList,this._config.sanitizeFn):c}_resolvePossibleFunction(c){return le(c,[this])}_putElementInTemplate(c,d){if(this._config.html){d.innerHTML="",d.append(c);return}d.textContent=c.textContent}}const Pw="tooltip",xw=new Set(["sanitize","allowList","sanitizeFn"]),Rl="fade",kw="modal",Ao="show",Dw=".tooltip-inner",Ld=`.${kw}`,Md="hide.bs.modal",or="hover",Pl="focus",Lw="click",Mw="manual",Fw="hide",$w="hidden",Uw="show",Ww="shown",Vw="inserted",Hw="click",jw="focusin",Bw="focusout",zw="mouseenter",Kw="mouseleave",Gw={AUTO:"auto",TOP:"top",RIGHT:te()?"left":"right",BOTTOM:"bottom",LEFT:te()?"right":"left"},Yw={allowList:Dd,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},qw={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class bs extends M{constructor(c,d){if(typeof i>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(c,d),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Yw}static get DefaultType(){return qw}static get NAME(){return Pw}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),A.off(this._element.closest(Ld),Md,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const c=A.trigger(this._element,this.constructor.eventName(Uw)),y=(C(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(c.defaultPrevented||!y)return;this._disposePopper();const k=this._getTipElement();this._element.setAttribute("aria-describedby",k.getAttribute("id"));const{container:H}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(H.append(k),A.trigger(this._element,this.constructor.eventName(Vw))),this._popper=this._createPopper(k),k.classList.add(Ao),"ontouchstart"in document.documentElement)for(const ce of[].concat(...document.body.children))A.on(ce,"mouseover",N);const V=()=>{A.trigger(this._element,this.constructor.eventName(Ww)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(V,this.tip,this._isAnimated())}hide(){if(!this._isShown()||A.trigger(this._element,this.constructor.eventName(Fw)).defaultPrevented)return;if(this._getTipElement().classList.remove(Ao),"ontouchstart"in document.documentElement)for(const k of[].concat(...document.body.children))A.off(k,"mouseover",N);this._activeTrigger[Lw]=!1,this._activeTrigger[Pl]=!1,this._activeTrigger[or]=!1,this._isHovered=null;const y=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),A.trigger(this._element,this.constructor.eventName($w)))};this._queueCallback(y,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(c){const d=this._getTemplateFactory(c).toHtml();if(!d)return null;d.classList.remove(Rl,Ao),d.classList.add(`bs-${this.constructor.NAME}-auto`);const y=p(this.constructor.NAME).toString();return d.setAttribute("id",y),this._isAnimated()&&d.classList.add(Rl),d}setContent(c){this._newContent=c,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(c){return this._templateFactory?this._templateFactory.changeContent(c):this._templateFactory=new Rw({...this._config,content:c,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[Dw]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(c){return this.constructor.getOrCreateInstance(c.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Rl)}_isShown(){return this.tip&&this.tip.classList.contains(Ao)}_createPopper(c){const d=le(this._config.placement,[this,c,this._element]),y=Gw[d.toUpperCase()];return i.createPopper(this._element,c,this._getPopperConfig(y))}_getOffset(){const{offset:c}=this._config;return typeof c=="string"?c.split(",").map(d=>Number.parseInt(d,10)):typeof c=="function"?d=>c(d,this._element):c}_resolvePossibleFunction(c){return le(c,[this._element])}_getPopperConfig(c){const d={placement:c,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:y=>{this._getTipElement().setAttribute("data-popper-placement",y.state.placement)}}]};return{...d,...le(this._config.popperConfig,[d])}}_setListeners(){const c=this._config.trigger.split(" ");for(const d of c)if(d==="click")A.on(this._element,this.constructor.eventName(Hw),this._config.selector,y=>{this._initializeOnDelegatedTarget(y).toggle()});else if(d!==Mw){const y=d===or?this.constructor.eventName(zw):this.constructor.eventName(jw),k=d===or?this.constructor.eventName(Kw):this.constructor.eventName(Bw);A.on(this._element,y,this._config.selector,H=>{const V=this._initializeOnDelegatedTarget(H);V._activeTrigger[H.type==="focusin"?Pl:or]=!0,V._enter()}),A.on(this._element,k,this._config.selector,H=>{const V=this._initializeOnDelegatedTarget(H);V._activeTrigger[H.type==="focusout"?Pl:or]=V._element.contains(H.relatedTarget),V._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},A.on(this._element.closest(Ld),Md,this._hideModalHandler)}_fixTitle(){const c=this._element.getAttribute("title");c&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",c),this._element.setAttribute("data-bs-original-title",c),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(c,d){clearTimeout(this._timeout),this._timeout=setTimeout(c,d)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(c){const d=w.getDataAttributes(this._element);for(const y of Object.keys(d))xw.has(y)&&delete d[y];return c={...d,...typeof c=="object"&&c?c:{}},c=this._mergeConfigObj(c),c=this._configAfterMerge(c),this._typeCheckConfig(c),c}_configAfterMerge(c){return c.container=c.container===!1?document.body:O(c.container),typeof c.delay=="number"&&(c.delay={show:c.delay,hide:c.delay}),typeof c.title=="number"&&(c.title=c.title.toString()),typeof c.content=="number"&&(c.content=c.content.toString()),c}_getDelegateConfig(){const c={};for(const[d,y]of Object.entries(this._config))this.constructor.Default[d]!==y&&(c[d]=y);return c.selector=!1,c.trigger="manual",c}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(c){return this.each(function(){const d=bs.getOrCreateInstance(this,c);if(typeof c=="string"){if(typeof d[c]>"u")throw new TypeError(`No method named "${c}"`);d[c]()}})}}se(bs);const Qw="popover",Xw=".popover-header",Jw=".popover-body",Zw={...bs.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},eC={...bs.DefaultType,content:"(null|string|element|function)"};class Oo extends bs{static get Default(){return Zw}static get DefaultType(){return eC}static get NAME(){return Qw}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Xw]:this._getTitle(),[Jw]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(c){return this.each(function(){const d=Oo.getOrCreateInstance(this,c);if(typeof c=="string"){if(typeof d[c]>"u")throw new TypeError(`No method named "${c}"`);d[c]()}})}}se(Oo);const tC="scrollspy",xl=".bs.scrollspy",nC=".data-api",sC=`activate${xl}`,Fd=`click${xl}`,iC=`load${xl}${nC}`,rC="dropdown-item",li="active",oC='[data-bs-spy="scroll"]',kl="[href]",aC=".nav, .list-group",$d=".nav-link",lC=`${$d}, .nav-item > ${$d}, .list-group-item`,cC=".dropdown",uC=".dropdown-toggle",fC={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},dC={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class ar extends M{constructor(c,d){super(c,d),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return fC}static get DefaultType(){return dC}static get NAME(){return tC}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const c of this._observableSections.values())this._observer.observe(c)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(c){return c.target=O(c.target)||document.body,c.rootMargin=c.offset?`${c.offset}px 0px -30%`:c.rootMargin,typeof c.threshold=="string"&&(c.threshold=c.threshold.split(",").map(d=>Number.parseFloat(d))),c}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(A.off(this._config.target,Fd),A.on(this._config.target,Fd,kl,c=>{const d=this._observableSections.get(c.target.hash);if(d){c.preventDefault();const y=this._rootElement||window,k=d.offsetTop-this._element.offsetTop;if(y.scrollTo){y.scrollTo({top:k,behavior:"smooth"});return}y.scrollTop=k}}))}_getNewObserver(){const c={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(d=>this._observerCallback(d),c)}_observerCallback(c){const d=V=>this._targetLinks.get(`#${V.target.id}`),y=V=>{this._previousScrollData.visibleEntryTop=V.target.offsetTop,this._process(d(V))},k=(this._rootElement||document.documentElement).scrollTop,H=k>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=k;for(const V of c){if(!V.isIntersecting){this._activeTarget=null,this._clearActiveClass(d(V));continue}const ce=V.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(H&&ce){if(y(V),!k)return;continue}!H&&!ce&&y(V)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const c=I.find(kl,this._config.target);for(const d of c){if(!d.hash||E(d))continue;const y=I.findOne(decodeURI(d.hash),this._element);S(y)&&(this._targetLinks.set(decodeURI(d.hash),d),this._observableSections.set(d.hash,y))}}_process(c){this._activeTarget!==c&&(this._clearActiveClass(this._config.target),this._activeTarget=c,c.classList.add(li),this._activateParents(c),A.trigger(this._element,sC,{relatedTarget:c}))}_activateParents(c){if(c.classList.contains(rC)){I.findOne(uC,c.closest(cC)).classList.add(li);return}for(const d of I.parents(c,aC))for(const y of I.prev(d,lC))y.classList.add(li)}_clearActiveClass(c){c.classList.remove(li);const d=I.find(`${kl}.${li}`,c);for(const y of d)y.classList.remove(li)}static jQueryInterface(c){return this.each(function(){const d=ar.getOrCreateInstance(this,c);if(typeof c=="string"){if(d[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);d[c]()}})}}A.on(window,iC,()=>{for(const g of I.find(oC))ar.getOrCreateInstance(g)}),se(ar);const hC="tab",ws=".bs.tab",pC=`hide${ws}`,mC=`hidden${ws}`,_C=`show${ws}`,gC=`shown${ws}`,vC=`click${ws}`,yC=`keydown${ws}`,EC=`load${ws}`,bC="ArrowLeft",Ud="ArrowRight",wC="ArrowUp",Wd="ArrowDown",Dl="Home",Vd="End",Cs="active",Hd="fade",Ll="show",CC="dropdown",jd=".dropdown-toggle",TC=".dropdown-menu",Ml=`:not(${jd})`,SC='.list-group, .nav, [role="tablist"]',IC=".nav-item, .list-group-item",AC=`.nav-link${Ml}, .list-group-item${Ml}, [role="tab"]${Ml}`,Bd='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Fl=`${AC}, ${Bd}`,OC=`.${Cs}[data-bs-toggle="tab"], .${Cs}[data-bs-toggle="pill"], .${Cs}[data-bs-toggle="list"]`;class Ts extends M{constructor(c){super(c),this._parent=this._element.closest(SC),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),A.on(this._element,yC,d=>this._keydown(d)))}static get NAME(){return hC}show(){const c=this._element;if(this._elemIsActive(c))return;const d=this._getActiveElem(),y=d?A.trigger(d,pC,{relatedTarget:c}):null;A.trigger(c,_C,{relatedTarget:d}).defaultPrevented||y&&y.defaultPrevented||(this._deactivate(d,c),this._activate(c,d))}_activate(c,d){if(!c)return;c.classList.add(Cs),this._activate(I.getElementFromSelector(c));const y=()=>{if(c.getAttribute("role")!=="tab"){c.classList.add(Ll);return}c.removeAttribute("tabindex"),c.setAttribute("aria-selected",!0),this._toggleDropDown(c,!0),A.trigger(c,gC,{relatedTarget:d})};this._queueCallback(y,c,c.classList.contains(Hd))}_deactivate(c,d){if(!c)return;c.classList.remove(Cs),c.blur(),this._deactivate(I.getElementFromSelector(c));const y=()=>{if(c.getAttribute("role")!=="tab"){c.classList.remove(Ll);return}c.setAttribute("aria-selected",!1),c.setAttribute("tabindex","-1"),this._toggleDropDown(c,!1),A.trigger(c,mC,{relatedTarget:d})};this._queueCallback(y,c,c.classList.contains(Hd))}_keydown(c){if(![bC,Ud,wC,Wd,Dl,Vd].includes(c.key))return;c.stopPropagation(),c.preventDefault();const d=this._getChildren().filter(k=>!E(k));let y;if([Dl,Vd].includes(c.key))y=d[c.key===Dl?0:d.length-1];else{const k=[Ud,Wd].includes(c.key);y=ve(d,c.target,k,!0)}y&&(y.focus({preventScroll:!0}),Ts.getOrCreateInstance(y).show())}_getChildren(){return I.find(Fl,this._parent)}_getActiveElem(){return this._getChildren().find(c=>this._elemIsActive(c))||null}_setInitialAttributes(c,d){this._setAttributeIfNotExists(c,"role","tablist");for(const y of d)this._setInitialAttributesOnChild(y)}_setInitialAttributesOnChild(c){c=this._getInnerElement(c);const d=this._elemIsActive(c),y=this._getOuterElement(c);c.setAttribute("aria-selected",d),y!==c&&this._setAttributeIfNotExists(y,"role","presentation"),d||c.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(c,"role","tab"),this._setInitialAttributesOnTargetPanel(c)}_setInitialAttributesOnTargetPanel(c){const d=I.getElementFromSelector(c);d&&(this._setAttributeIfNotExists(d,"role","tabpanel"),c.id&&this._setAttributeIfNotExists(d,"aria-labelledby",`${c.id}`))}_toggleDropDown(c,d){const y=this._getOuterElement(c);if(!y.classList.contains(CC))return;const k=(H,V)=>{const ce=I.findOne(H,y);ce&&ce.classList.toggle(V,d)};k(jd,Cs),k(TC,Ll),y.setAttribute("aria-expanded",d)}_setAttributeIfNotExists(c,d,y){c.hasAttribute(d)||c.setAttribute(d,y)}_elemIsActive(c){return c.classList.contains(Cs)}_getInnerElement(c){return c.matches(Fl)?c:I.findOne(Fl,c)}_getOuterElement(c){return c.closest(IC)||c}static jQueryInterface(c){return this.each(function(){const d=Ts.getOrCreateInstance(this);if(typeof c=="string"){if(d[c]===void 0||c.startsWith("_")||c==="constructor")throw new TypeError(`No method named "${c}"`);d[c]()}})}}A.on(document,vC,Bd,function(g){["A","AREA"].includes(this.tagName)&&g.preventDefault(),!E(this)&&Ts.getOrCreateInstance(this).show()}),A.on(window,EC,()=>{for(const g of I.find(OC))Ts.getOrCreateInstance(g)}),se(Ts);const NC="toast",Ln=".bs.toast",RC=`mouseover${Ln}`,PC=`mouseout${Ln}`,xC=`focusin${Ln}`,kC=`focusout${Ln}`,DC=`hide${Ln}`,LC=`hidden${Ln}`,MC=`show${Ln}`,FC=`shown${Ln}`,$C="fade",zd="hide",No="show",Ro="showing",UC={animation:"boolean",autohide:"boolean",delay:"number"},WC={animation:!0,autohide:!0,delay:5e3};class lr extends M{constructor(c,d){super(c,d),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return WC}static get DefaultType(){return UC}static get NAME(){return NC}show(){if(A.trigger(this._element,MC).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add($C);const d=()=>{this._element.classList.remove(Ro),A.trigger(this._element,FC),this._maybeScheduleHide()};this._element.classList.remove(zd),R(this._element),this._element.classList.add(No,Ro),this._queueCallback(d,this._element,this._config.animation)}hide(){if(!this.isShown()||A.trigger(this._element,DC).defaultPrevented)return;const d=()=>{this._element.classList.add(zd),this._element.classList.remove(Ro,No),A.trigger(this._element,LC)};this._element.classList.add(Ro),this._queueCallback(d,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(No),super.dispose()}isShown(){return this._element.classList.contains(No)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(c,d){switch(c.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=d;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=d;break}}if(d){this._clearTimeout();return}const y=c.relatedTarget;this._element===y||this._element.contains(y)||this._maybeScheduleHide()}_setListeners(){A.on(this._element,RC,c=>this._onInteraction(c,!0)),A.on(this._element,PC,c=>this._onInteraction(c,!1)),A.on(this._element,xC,c=>this._onInteraction(c,!0)),A.on(this._element,kC,c=>this._onInteraction(c,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(c){return this.each(function(){const d=lr.getOrCreateInstance(this,c);if(typeof c=="string"){if(typeof d[c]>"u")throw new TypeError(`No method named "${c}"`);d[c](this)}})}}return U(lr),se(lr),{Alert:pe,Button:et,Carousel:ii,Collapse:oi,Dropdown:$t,Modal:Es,Offcanvas:fn,Popover:Oo,ScrollSpy:ar,Tab:Ts,Toast:lr,Tooltip:bs}})})(ML);cL.add(RL,kL,SL,CL,xL,AL,TL,PL,IL,OL,NL);const Cl=cS(vI);Cl.component("font-awesome-icon",wL);Cl.use(pS());Cl.use(Jr);Cl.mount("#app");
