"use strict";var a=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var c=a(function(k,s){
var v=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-ln/dist'),P=require('@stdlib/constants-float64-ln-two-pi/dist'),o=require('@stdlib/constants-float64-pinf/dist'),N=require('@stdlib/constants-float64-ninf/dist');function _(e,r,i){var n;return v(e)||v(r)||v(i)||r<=0||i<0?NaN:i===0?e===r?o:N:e<=0||e===o?N:(n=(e-r)/r,.5*(q(i)-(P+3*q(e))-i/e*n*n))}s.exports=_
});var y=a(function(w,p){
var g=require('@stdlib/utils-constant-function/dist'),O=require('@stdlib/stats-base-dists-degenerate-logpdf/dist').factory,f=require('@stdlib/math-base-assert-is-nan/dist'),I=require('@stdlib/math-base-special-ln/dist'),L=require('@stdlib/constants-float64-ln-two-pi/dist'),T=require('@stdlib/constants-float64-pinf/dist'),W=require('@stdlib/constants-float64-ninf/dist');function A(e,r){var i;if(f(e)||f(r)||e<=0||r<0)return g(NaN);if(r===0)return O(e);return i=I(r)-L,n;function n(t){var u;return f(t)?NaN:t<=0||t===T?W:(u=(t-e)/e,.5*(i-3*I(t)-r/t*u*u))}}p.exports=A
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=c(),h=y();R(F,"factory",h);module.exports=F;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
