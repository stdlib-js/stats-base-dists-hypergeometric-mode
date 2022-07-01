// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor,t=r;var a=function(r){return t(r)===r&&r>=0},n=Number.POSITIVE_INFINITY;function u(t,u,e){return!a(t)||!a(u)||!a(e)||t===n||u===n||u>t||e>t?NaN:r((e+1)*(u+1)/(t+2))}export{u as default};
//# sourceMappingURL=mod.js.map
