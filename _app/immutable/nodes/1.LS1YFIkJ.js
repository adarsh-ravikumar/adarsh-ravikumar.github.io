import{t as d,a as v}from"../chunks/disclose-version.rBCVlkQD.js";import"../chunks/legacy.B-18Zlpp.js";import{j as h,u as x,k as _,l as $,r as f,m as u,o as k,q as y,s as j,p as q,g as w,t as E,v as l,w as S,i as z,x as g}from"../chunks/runtime.S-55nsRv.js";import{s as A,a as b,b as B}from"../chunks/store.D1zqTtIt.js";import{s as C}from"../chunks/entry.1tCrwxZc.js";function D(s=!1){const t=h,e=t.l.u;if(!e)return;let n=()=>$(t.s);if(s){let a=0,r={};const c=j(()=>{let i=!1;const p=t.s;for(const o in p)p[o]!==r[o]&&(r[o]=p[o],i=!0);return i&&a++,a});n=()=>_(c)}e.b.length&&x(()=>{m(t,n),f(e.b)}),u(()=>{const a=k(()=>e.m.map(y));return()=>{for(const r of a)typeof r=="function"&&r()}}),e.a.length&&u(()=>{m(t,n),f(e.a)})}function m(s,t){if(s.l.s)for(const e of s.l.s)_(e);t()}const F=()=>{const s=C;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},G={subscribe(s){return F().page.subscribe(s)}};var H=d("<h1> </h1> <p> </p>",1);function N(s,t){q(t,!1);const e=A(),n=()=>B(G,"$page",e);D();var a=H(),r=w(a),c=l(r,!0);g(r);var i=S(r,2),p=l(i,!0);g(i),E(()=>{var o;b(c,n().status),b(p,(o=n().error)==null?void 0:o.message)}),v(s,a),z()}export{N as component};
