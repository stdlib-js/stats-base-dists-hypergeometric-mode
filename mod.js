// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor;function t(t){return r(t)===t&&t>=0}var a=Number.POSITIVE_INFINITY;function n(n,u,e){return!t(n)||!t(u)||!t(e)||n===a||u===a||u>n||e>n?NaN:r((e+1)*(u+1)/(n+2))}export{n as default};
//# sourceMappingURL=mod.js.map
