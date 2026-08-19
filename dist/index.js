"use strict";var f=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var s=f(function(k,N){
var u=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-ln/dist'),F=require('@stdlib/constants-float64-ln-two-pi/dist'),a=require('@stdlib/constants-float64-pinf/dist'),o=require('@stdlib/constants-float64-ninf/dist');function P(e,r,t){var i;return u(e)||u(r)||u(t)||r<=0||t<0?NaN:t===0?e===r?a:o:e<=0||e===a?o:(i=e-r,.5*(q(t)-(F+3*q(e))-t*i*i/(r*r*e)))}N.exports=P
});var p=f(function(w,I){
var _=require('@stdlib/utils-constant-function/dist'),g=require('@stdlib/stats-base-dists-degenerate-logpdf/dist').factory,v=require('@stdlib/math-base-assert-is-nan/dist'),c=require('@stdlib/math-base-special-ln/dist'),O=require('@stdlib/constants-float64-ln-two-pi/dist'),L=require('@stdlib/constants-float64-pinf/dist'),T=require('@stdlib/constants-float64-ninf/dist');function W(e,r){if(v(e)||v(r)||e<=0||r<0)return _(NaN);if(r===0)return g(e);return t;function t(i){var n;return v(i)?NaN:i<=0||i===L?T:(n=i-e,.5*(c(r)-(O+3*c(i))-r*n*n/(e*e*i)))}}I.exports=W
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=s(),h=p();R(y,"factory",h);module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
