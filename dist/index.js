"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var o=s(function(f,a){
var t=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),n=require('@stdlib/math-base-special-floor/dist'),u=require('@stdlib/constants-float64-pinf/dist');function v(e,r,i){return!t(e)||!t(r)||!t(i)||e===u||r===u||r>e||i>e?NaN:n((i+1)*(r+1)/(e+2))}a.exports=v
});var q=o();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
