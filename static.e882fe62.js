parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Jugo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.__wbindgen_closure_wrapper823=exports.__wbindgen_closure_wrapper886=exports.__wbindgen_closure_wrapper499=exports.__wbindgen_throw=exports.__wbindgen_debug_string=exports.__wbindgen_string_get=exports.__wbg_set_5cbed684ac2b1ce9=exports.__wbg_global_7583a634265a91fc=exports.__wbg_window_9e80200b35aa30f8=exports.__wbg_self_25067cb019cade42=exports.__wbg_globalThis_48a5e9494e623f26=exports.__wbg_then_e37e0b9ef0995585=exports.__wbg_then_d797310661d9e275=exports.__wbg_resolve_3e5970e9c931a3c2=exports.__wbg_new_937729a89a522fb5=exports.__wbg_newnoargs_ebdc90c3d1e4e55d=exports.__wbg_call_804d3ad7e8acd4d5=exports.__wbg_value_3e7484525812fe93=exports.__wbg_selectedIndex_49fd99d6846d5b04=exports.__wbg_instanceof_HtmlSelectElement_c74c6fac5ac0a85e=exports.__wbg_set_52336fc842eac7c2=exports.__wbg_removeChild_9a521558bd3fd73e=exports.__wbg_insertBefore_f40a70a9913f64f5=exports.__wbg_appendChild_c1802f48577b21f6=exports.__wbg_nodeValue_f6bcda3acca3e7df=exports.__wbg_nextSibling_a89e92f7f3b94819=exports.__wbg_lastChild_a7e588170b940ea7=exports.__wbg_nodeName_d7b58049e0ad773a=exports.__wbg_hash_a80add7590c75a0c=exports.__wbg_search_f95349ed6e3c0c45=exports.__wbg_pathname_8a2fe4c2e3a07b51=exports.__wbg_warn_37f6d69e0744a63d=exports.__wbg_log_f429ceddf79d40b5=exports.__wbg_log_c180b836187d3c94=exports.__wbg_info_f95877a099075776=exports.__wbg_error_1f17eb9ba29a6661=exports.__wbg_error_b23efba5bfb5cec5=exports.__wbg_debug_790752adfbc370bd=exports.__wbg_setAttribute_3021f1b348fd14a5=exports.__wbg_removeAttribute_518c8ed1a02058f8=exports.__wbg_getAttribute_0cfffe0e4135c484=exports.__wbg_namespaceURI_a890993882ac3334=exports.__wbg_state_969f7e234cf15445=exports.__wbg_instanceof_PopStateEvent_872fc91f6e68893e=exports.__wbg_replaceState_3fd809d1d30a9bbb=exports.__wbg_pushState_5d9e642afb5b1c81=exports.__wbg_state_353681dfe16db943=exports.__wbg_removeEventListener_e6d1dae0854e625e=exports.__wbg_addEventListener_91aeb4a2a4221f90=exports.__wbg_stopPropagation_61518782238c8a3c=exports.__wbg_preventDefault_a94db094b84ac446=exports.__wbg_value_ce3b7a6a03d76643=exports.__wbg_value_06af6d392334302f=exports.__wbg_type_5b3d3d8807847d57=exports.__wbg_files_09424480be862f49=exports.__wbg_checked_8f4b67dbaf90811e=exports.__wbg_instanceof_HtmlInputElement_5f61a3d2d3d02410=exports.__wbg_newwithstrandinit_80e5800985bdc350=exports.__wbg_headers_8a26b723b3e5bcfa=exports.__wbg_value_57c725aca44d9296=exports.__wbg_value_967003eb801722ab=exports.__wbg_instanceof_HtmlTextAreaElement_a07fcbfd18542e06=exports.__wbg_json_adb8e0e15a40a4d5=exports.__wbg_headers_5dc84838dd997124=exports.__wbg_status_2efcc6c118058f68=exports.__wbg_instanceof_Response_37bf8b595fe4e5cd=exports.__wbg_querySelector_2dabb5b08003bfad=exports.__wbg_createTextNode_b131e8421d578817=exports.__wbg_createElementNS_6dd6bfc8ad570e2a=exports.__wbg_createElement_5a267cb074dc073b=exports.__wbg_fetch_995bfe97503f599b=exports.__wbg_history_66c8db535cd48e93=exports.__wbg_location_e50b7d71ca1b82bb=exports.__wbg_document_07444f1bbea314bb=exports.__wbg_instanceof_Window_a633dbe0900c728a=exports.__wbg_error_4bb6c2a97407129a=exports.__wbg_stack_558ba5917b466edd=exports.__wbg_new_59cb74e423758ede=exports.__wbindgen_is_undefined=exports.__wbindgen_json_serialize=exports.__wbindgen_cb_drop=exports.__wbindgen_object_clone_ref=exports.__wbindgen_string_new=exports.__wbindgen_object_drop_ref=exports.run=exports.default=void 0;var _=e(require("./pkg/norske_api_er_bg.wasm"));function e(_){return _&&_.__esModule?_:{default:_}}var a=_.default;exports.default=a;var b=_.default.run;exports.run=b;var t=_.default.__wbindgen_object_drop_ref;exports.__wbindgen_object_drop_ref=t;var r=_.default.__wbindgen_string_new;exports.__wbindgen_string_new=r;var d=_.default.__wbindgen_object_clone_ref;exports.__wbindgen_object_clone_ref=d;var f=_.default.__wbindgen_cb_drop;exports.__wbindgen_cb_drop=f;var o=_.default.__wbindgen_json_serialize;exports.__wbindgen_json_serialize=o;var s=_.default.__wbindgen_is_undefined;exports.__wbindgen_is_undefined=s;var g=_.default.__wbg_new_59cb74e423758ede;exports.__wbg_new_59cb74e423758ede=g;var w=_.default.__wbg_stack_558ba5917b466edd;exports.__wbg_stack_558ba5917b466edd=w;var c=_.default.__wbg_error_4bb6c2a97407129a;exports.__wbg_error_4bb6c2a97407129a=c;var n=_.default.__wbg_instanceof_Window_a633dbe0900c728a;exports.__wbg_instanceof_Window_a633dbe0900c728a=n;var p=_.default.__wbg_document_07444f1bbea314bb;exports.__wbg_document_07444f1bbea314bb=p;var l=_.default.__wbg_location_e50b7d71ca1b82bb;exports.__wbg_location_e50b7d71ca1b82bb=l;var x=_.default.__wbg_history_66c8db535cd48e93;exports.__wbg_history_66c8db535cd48e93=x;var u=_.default.__wbg_fetch_995bfe97503f599b;exports.__wbg_fetch_995bfe97503f599b=u;var i=_.default.__wbg_createElement_5a267cb074dc073b;exports.__wbg_createElement_5a267cb074dc073b=i;var v=_.default.__wbg_createElementNS_6dd6bfc8ad570e2a;exports.__wbg_createElementNS_6dd6bfc8ad570e2a=v;var h=_.default.__wbg_createTextNode_b131e8421d578817;exports.__wbg_createTextNode_b131e8421d578817=h;var m=_.default.__wbg_querySelector_2dabb5b08003bfad;exports.__wbg_querySelector_2dabb5b08003bfad=m;var E=_.default.__wbg_instanceof_Response_37bf8b595fe4e5cd;exports.__wbg_instanceof_Response_37bf8b595fe4e5cd=E;var S=_.default.__wbg_status_2efcc6c118058f68;exports.__wbg_status_2efcc6c118058f68=S;var j=_.default.__wbg_headers_5dc84838dd997124;exports.__wbg_headers_5dc84838dd997124=j;var A=_.default.__wbg_json_adb8e0e15a40a4d5;exports.__wbg_json_adb8e0e15a40a4d5=A;var y=_.default.__wbg_instanceof_HtmlTextAreaElement_a07fcbfd18542e06;exports.__wbg_instanceof_HtmlTextAreaElement_a07fcbfd18542e06=y;var C=_.default.__wbg_value_967003eb801722ab;exports.__wbg_value_967003eb801722ab=C;var H=_.default.__wbg_value_57c725aca44d9296;exports.__wbg_value_57c725aca44d9296=H;var I=_.default.__wbg_headers_8a26b723b3e5bcfa;exports.__wbg_headers_8a26b723b3e5bcfa=I;var N=_.default.__wbg_newwithstrandinit_80e5800985bdc350;exports.__wbg_newwithstrandinit_80e5800985bdc350=N;var T=_.default.__wbg_instanceof_HtmlInputElement_5f61a3d2d3d02410;exports.__wbg_instanceof_HtmlInputElement_5f61a3d2d3d02410=T;var k=_.default.__wbg_checked_8f4b67dbaf90811e;exports.__wbg_checked_8f4b67dbaf90811e=k;var P=_.default.__wbg_files_09424480be862f49;exports.__wbg_files_09424480be862f49=P;var L=_.default.__wbg_type_5b3d3d8807847d57;exports.__wbg_type_5b3d3d8807847d57=L;var R=_.default.__wbg_value_06af6d392334302f;exports.__wbg_value_06af6d392334302f=R;var q=_.default.__wbg_value_ce3b7a6a03d76643;exports.__wbg_value_ce3b7a6a03d76643=q;var z=_.default.__wbg_preventDefault_a94db094b84ac446;exports.__wbg_preventDefault_a94db094b84ac446=z;var B=_.default.__wbg_stopPropagation_61518782238c8a3c;exports.__wbg_stopPropagation_61518782238c8a3c=B;var D=_.default.__wbg_addEventListener_91aeb4a2a4221f90;exports.__wbg_addEventListener_91aeb4a2a4221f90=D;var U=_.default.__wbg_removeEventListener_e6d1dae0854e625e;exports.__wbg_removeEventListener_e6d1dae0854e625e=U;var V=_.default.__wbg_state_353681dfe16db943;exports.__wbg_state_353681dfe16db943=V;var W=_.default.__wbg_pushState_5d9e642afb5b1c81;exports.__wbg_pushState_5d9e642afb5b1c81=W;var M=_.default.__wbg_replaceState_3fd809d1d30a9bbb;exports.__wbg_replaceState_3fd809d1d30a9bbb=M;var O=_.default.__wbg_instanceof_PopStateEvent_872fc91f6e68893e;exports.__wbg_instanceof_PopStateEvent_872fc91f6e68893e=O;var F=_.default.__wbg_state_969f7e234cf15445;exports.__wbg_state_969f7e234cf15445=F;var G=_.default.__wbg_namespaceURI_a890993882ac3334;exports.__wbg_namespaceURI_a890993882ac3334=G;var J=_.default.__wbg_getAttribute_0cfffe0e4135c484;exports.__wbg_getAttribute_0cfffe0e4135c484=J;var K=_.default.__wbg_removeAttribute_518c8ed1a02058f8;exports.__wbg_removeAttribute_518c8ed1a02058f8=K;var Q=_.default.__wbg_setAttribute_3021f1b348fd14a5;exports.__wbg_setAttribute_3021f1b348fd14a5=Q;var X=_.default.__wbg_debug_790752adfbc370bd;exports.__wbg_debug_790752adfbc370bd=X;var Y=_.default.__wbg_error_b23efba5bfb5cec5;exports.__wbg_error_b23efba5bfb5cec5=Y;var Z=_.default.__wbg_error_1f17eb9ba29a6661;exports.__wbg_error_1f17eb9ba29a6661=Z;var $=_.default.__wbg_info_f95877a099075776;exports.__wbg_info_f95877a099075776=$;var __=_.default.__wbg_log_c180b836187d3c94;exports.__wbg_log_c180b836187d3c94=__;var e_=_.default.__wbg_log_f429ceddf79d40b5;exports.__wbg_log_f429ceddf79d40b5=e_;var a_=_.default.__wbg_warn_37f6d69e0744a63d;exports.__wbg_warn_37f6d69e0744a63d=a_;var b_=_.default.__wbg_pathname_8a2fe4c2e3a07b51;exports.__wbg_pathname_8a2fe4c2e3a07b51=b_;var t_=_.default.__wbg_search_f95349ed6e3c0c45;exports.__wbg_search_f95349ed6e3c0c45=t_;var r_=_.default.__wbg_hash_a80add7590c75a0c;exports.__wbg_hash_a80add7590c75a0c=r_;var d_=_.default.__wbg_nodeName_d7b58049e0ad773a;exports.__wbg_nodeName_d7b58049e0ad773a=d_;var f_=_.default.__wbg_lastChild_a7e588170b940ea7;exports.__wbg_lastChild_a7e588170b940ea7=f_;var o_=_.default.__wbg_nextSibling_a89e92f7f3b94819;exports.__wbg_nextSibling_a89e92f7f3b94819=o_;var s_=_.default.__wbg_nodeValue_f6bcda3acca3e7df;exports.__wbg_nodeValue_f6bcda3acca3e7df=s_;var g_=_.default.__wbg_appendChild_c1802f48577b21f6;exports.__wbg_appendChild_c1802f48577b21f6=g_;var w_=_.default.__wbg_insertBefore_f40a70a9913f64f5;exports.__wbg_insertBefore_f40a70a9913f64f5=w_;var c_=_.default.__wbg_removeChild_9a521558bd3fd73e;exports.__wbg_removeChild_9a521558bd3fd73e=c_;var n_=_.default.__wbg_set_52336fc842eac7c2;exports.__wbg_set_52336fc842eac7c2=n_;var p_=_.default.__wbg_instanceof_HtmlSelectElement_c74c6fac5ac0a85e;exports.__wbg_instanceof_HtmlSelectElement_c74c6fac5ac0a85e=p_;var l_=_.default.__wbg_selectedIndex_49fd99d6846d5b04;exports.__wbg_selectedIndex_49fd99d6846d5b04=l_;var x_=_.default.__wbg_value_3e7484525812fe93;exports.__wbg_value_3e7484525812fe93=x_;var u_=_.default.__wbg_call_804d3ad7e8acd4d5;exports.__wbg_call_804d3ad7e8acd4d5=u_;var i_=_.default.__wbg_newnoargs_ebdc90c3d1e4e55d;exports.__wbg_newnoargs_ebdc90c3d1e4e55d=i_;var v_=_.default.__wbg_new_937729a89a522fb5;exports.__wbg_new_937729a89a522fb5=v_;var h_=_.default.__wbg_resolve_3e5970e9c931a3c2;exports.__wbg_resolve_3e5970e9c931a3c2=h_;var m_=_.default.__wbg_then_d797310661d9e275;exports.__wbg_then_d797310661d9e275=m_;var E_=_.default.__wbg_then_e37e0b9ef0995585;exports.__wbg_then_e37e0b9ef0995585=E_;var S_=_.default.__wbg_globalThis_48a5e9494e623f26;exports.__wbg_globalThis_48a5e9494e623f26=S_;var j_=_.default.__wbg_self_25067cb019cade42;exports.__wbg_self_25067cb019cade42=j_;var A_=_.default.__wbg_window_9e80200b35aa30f8;exports.__wbg_window_9e80200b35aa30f8=A_;var y_=_.default.__wbg_global_7583a634265a91fc;exports.__wbg_global_7583a634265a91fc=y_;var C_=_.default.__wbg_set_5cbed684ac2b1ce9;exports.__wbg_set_5cbed684ac2b1ce9=C_;var H_=_.default.__wbindgen_string_get;exports.__wbindgen_string_get=H_;var I_=_.default.__wbindgen_debug_string;exports.__wbindgen_debug_string=I_;var N_=_.default.__wbindgen_throw;exports.__wbindgen_throw=N_;var T_=_.default.__wbindgen_closure_wrapper499;exports.__wbindgen_closure_wrapper499=T_;var k_=_.default.__wbindgen_closure_wrapper886;exports.__wbindgen_closure_wrapper886=k_;var P_=_.default.__wbindgen_closure_wrapper823;exports.__wbindgen_closure_wrapper823=P_;
},{"./pkg/norske_api_er_bg.wasm":"zwTW"}],"QCba":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../Cargo.toml");e.run();
},{"../Cargo.toml":"Jugo"}],"FheM":[function(require,module,exports) {
var t=null;function e(){return t||(t=n()),t}function n(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);if(t)return r(t[0])}return"/"}function r(t){return(""+t).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}exports.getBundleURL=e,exports.getBaseURL=r;
},{}],"TUK3":[function(require,module,exports) {
var r=require("./bundle-url").getBundleURL;function e(r){Array.isArray(r)||(r=[r]);var e=r[r.length-1];try{return Promise.resolve(require(e))}catch(n){if("MODULE_NOT_FOUND"===n.code)return new s(function(n,i){t(r.slice(0,-1)).then(function(){return require(e)}).then(n,i)});throw n}}function t(r){return Promise.all(r.map(u))}var n={};function i(r,e){n[r]=e}module.exports=exports=e,exports.load=t,exports.register=i;var o={};function u(e){var t;if(Array.isArray(e)&&(t=e[1],e=e[0]),o[e])return o[e];var i=(e.substring(e.lastIndexOf(".")+1,e.length)||e).toLowerCase(),u=n[i];return u?o[e]=u(r()+e).then(function(r){return r&&module.bundle.register(t,r),r}).catch(function(r){throw delete o[e],r}):void 0}function s(r){this.executor=r,this.promise=null}s.prototype.then=function(r,e){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.then(r,e)},s.prototype.catch=function(r){return null===this.promise&&(this.promise=new Promise(this.executor)),this.promise.catch(r)};
},{"./bundle-url":"FheM"}],"vexR":[function(require,module,exports) {
module.exports=function(o){return o&&"object"==typeof o&&"function"==typeof o.copy&&"function"==typeof o.fill&&"function"==typeof o.readUInt8};
},{}],"tcrG":[function(require,module,exports) {
"function"==typeof Object.create?module.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:module.exports=function(t,e){t.super_=e;var o=function(){};o.prototype=e.prototype,t.prototype=new o,t.prototype.constructor=t};
},{}],"pBGv":[function(require,module,exports) {

var t,e,n=module.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function u(t){if(e===clearTimeout)return clearTimeout(t);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{return e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(n){t=r}try{e="function"==typeof clearTimeout?clearTimeout:o}catch(n){e=o}}();var c,s=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):a=-1,s.length&&h())}function h(){if(!l){var t=i(f);l=!0;for(var e=s.length;e;){for(c=s,s=[];++a<e;)c&&c[a].run();a=-1,e=s.length}c=null,l=!1,u(t)}}function m(t,e){this.fun=t,this.array=e}function p(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};
},{}],"gfUn":[function(require,module,exports) {
var process = require("process");
var e=require("process"),t=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++)r[t[n]]=Object.getOwnPropertyDescriptor(e,t[n]);return r},r=/%[sdj%]/g;exports.format=function(e){if(!v(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(i(arguments[n]));return t.join(" ")}n=1;for(var o=arguments,u=o.length,s=String(e).replace(r,function(e){if("%%"===e)return"%";if(n>=u)return e;switch(e){case"%s":return String(o[n++]);case"%d":return Number(o[n++]);case"%j":try{return JSON.stringify(o[n++])}catch(t){return"[Circular]"}default:return e}}),c=o[n];n<u;c=o[++n])h(c)||!S(c)?s+=" "+c:s+=" "+i(c);return s},exports.deprecate=function(t,r){if(void 0!==e&&!0===e.noDeprecation)return t;if(void 0===e)return function(){return exports.deprecate(t,r).apply(this,arguments)};var n=!1;return function(){if(!n){if(e.throwDeprecation)throw new Error(r);e.traceDeprecation?console.trace(r):console.error(r),n=!0}return t.apply(this,arguments)}};var n,o={};function i(e,t){var r={seen:[],stylize:s};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),b(t)?r.showHidden=t:t&&exports._extend(r,t),j(r.showHidden)&&(r.showHidden=!1),j(r.depth)&&(r.depth=2),j(r.colors)&&(r.colors=!1),j(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=u),p(r,e,r.depth)}function u(e,t){var r=i.styles[t];return r?"["+i.colors[r][0]+"m"+e+"["+i.colors[r][1]+"m":e}function s(e,t){return e}function c(e){var t={};return e.forEach(function(e,r){t[e]=!0}),t}function p(e,t,r){if(e.customInspect&&t&&P(t.inspect)&&t.inspect!==exports.inspect&&(!t.constructor||t.constructor.prototype!==t)){var n=t.inspect(r,e);return v(n)||(n=p(e,n,r)),n}var o=l(e,t);if(o)return o;var i=Object.keys(t),u=c(i);if(e.showHidden&&(i=Object.getOwnPropertyNames(t)),E(t)&&(i.indexOf("message")>=0||i.indexOf("description")>=0))return f(t);if(0===i.length){if(P(t)){var s=t.name?": "+t.name:"";return e.stylize("[Function"+s+"]","special")}if(w(t))return e.stylize(RegExp.prototype.toString.call(t),"regexp");if(z(t))return e.stylize(Date.prototype.toString.call(t),"date");if(E(t))return f(t)}var b,h="",m=!1,x=["{","}"];(d(t)&&(m=!0,x=["[","]"]),P(t))&&(h=" [Function"+(t.name?": "+t.name:"")+"]");return w(t)&&(h=" "+RegExp.prototype.toString.call(t)),z(t)&&(h=" "+Date.prototype.toUTCString.call(t)),E(t)&&(h=" "+f(t)),0!==i.length||m&&0!=t.length?r<0?w(t)?e.stylize(RegExp.prototype.toString.call(t),"regexp"):e.stylize("[Object]","special"):(e.seen.push(t),b=m?a(e,t,r,u,i):i.map(function(n){return y(e,t,r,u,n,m)}),e.seen.pop(),g(b,h,x)):x[0]+h+x[1]}function l(e,t){if(j(t))return e.stylize("undefined","undefined");if(v(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}return x(t)?e.stylize(""+t,"number"):b(t)?e.stylize(""+t,"boolean"):h(t)?e.stylize("null","null"):void 0}function f(e){return"["+Error.prototype.toString.call(e)+"]"}function a(e,t,r,n,o){for(var i=[],u=0,s=t.length;u<s;++u)A(t,String(u))?i.push(y(e,t,r,n,String(u),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(y(e,t,r,n,o,!0))}),i}function y(e,t,r,n,o,i){var u,s,c;if((c=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?s=c.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):c.set&&(s=e.stylize("[Setter]","special")),A(n,o)||(u="["+o+"]"),s||(e.seen.indexOf(c.value)<0?(s=h(r)?p(e,c.value,null):p(e,c.value,r-1)).indexOf("\n")>-1&&(s=i?s.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+s.split("\n").map(function(e){return"   "+e}).join("\n")):s=e.stylize("[Circular]","special")),j(u)){if(i&&o.match(/^\d+$/))return s;(u=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=e.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=e.stylize(u,"string"))}return u+": "+s}function g(e,t,r){return e.reduce(function(e,t){return 0,t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60?r[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+r[1]:r[0]+t+" "+e.join(", ")+" "+r[1]}function d(e){return Array.isArray(e)}function b(e){return"boolean"==typeof e}function h(e){return null===e}function m(e){return null==e}function x(e){return"number"==typeof e}function v(e){return"string"==typeof e}function O(e){return"symbol"==typeof e}function j(e){return void 0===e}function w(e){return S(e)&&"[object RegExp]"===T(e)}function S(e){return"object"==typeof e&&null!==e}function z(e){return S(e)&&"[object Date]"===T(e)}function E(e){return S(e)&&("[object Error]"===T(e)||e instanceof Error)}function P(e){return"function"==typeof e}function D(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e}function T(e){return Object.prototype.toString.call(e)}function N(e){return e<10?"0"+e.toString(10):e.toString(10)}exports.debuglog=function(t){if(j(n)&&(n=""),t=t.toUpperCase(),!o[t])if(new RegExp("\\b"+t+"\\b","i").test(n)){var r=e.pid;o[t]=function(){var e=exports.format.apply(exports,arguments);console.error("%s %d: %s",t,r,e)}}else o[t]=function(){};return o[t]},exports.inspect=i,i.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},i.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},exports.isArray=d,exports.isBoolean=b,exports.isNull=h,exports.isNullOrUndefined=m,exports.isNumber=x,exports.isString=v,exports.isSymbol=O,exports.isUndefined=j,exports.isRegExp=w,exports.isObject=S,exports.isDate=z,exports.isError=E,exports.isFunction=P,exports.isPrimitive=D,exports.isBuffer=require("./support/isBuffer");var F=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function k(){var e=new Date,t=[N(e.getHours()),N(e.getMinutes()),N(e.getSeconds())].join(":");return[e.getDate(),F[e.getMonth()],t].join(" ")}function A(e,t){return Object.prototype.hasOwnProperty.call(e,t)}exports.log=function(){console.log("%s - %s",k(),exports.format.apply(exports,arguments))},exports.inherits=require("inherits"),exports._extend=function(e,t){if(!t||!S(t))return e;for(var r=Object.keys(t),n=r.length;n--;)e[r[n]]=t[r[n]];return e};var J="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function R(e,t){if(!e){var r=new Error("Promise was rejected with a falsy value");r.reason=e,e=r}return t(e)}function H(r){if("function"!=typeof r)throw new TypeError('The "original" argument must be of type Function');function n(){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n]);var o=t.pop();if("function"!=typeof o)throw new TypeError("The last argument must be of type Function");var i=this,u=function(){return o.apply(i,arguments)};r.apply(this,t).then(function(t){e.nextTick(u,null,t)},function(t){e.nextTick(R,t,u)})}return Object.setPrototypeOf(n,Object.getPrototypeOf(r)),Object.defineProperties(n,t(r)),n}exports.promisify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');if(J&&e[J]){var r;if("function"!=typeof(r=e[J]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(r,J,{value:r,enumerable:!1,writable:!1,configurable:!0}),r}function r(){for(var t,r,n=new Promise(function(e,n){t=e,r=n}),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push(function(e,n){e?r(e):t(n)});try{e.apply(this,o)}catch(u){r(u)}return n}return Object.setPrototypeOf(r,Object.getPrototypeOf(e)),J&&Object.defineProperty(r,J,{value:r,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(r,t(e))},exports.promisify.custom=J,exports.callbackify=H;
},{"./support/isBuffer":"vexR","inherits":"tcrG","process":"pBGv"}],"rDCW":[function(require,module,exports) {

},{}],"fISM":[function(require,module,exports) {
var global = arguments[3];
var __dirname = "/home/runner/work/norske-api-er/norske-api-er/node_modules/parcel-plugin-wasm.rs";
var n,e=arguments[3],t="/home/runner/work/norske-api-er/norske-api-er/node_modules/parcel-plugin-wasm.rs";const _={},r=new Array(32).fill(void 0);function c(n){return r[n]}r.push(void 0,null,!0,!1);let o=r.length;function a(n){n<36||(r[n]=o,o=n)}function i(n){const e=c(n);return a(n),e}const u="undefined"==typeof TextDecoder?require("util").TextDecoder:TextDecoder;let f=new u("utf-8",{ignoreBOM:!0,fatal:!0});f.decode();let b=null;function l(){return null!==b&&b.buffer===n.memory.buffer||(b=new Uint8Array(n.memory.buffer)),b}function d(n,e){return f.decode(l().subarray(n,n+e))}function s(n){o===r.length&&r.push(r.length+1);const e=o;return o=r[e],r[e]=n,e}let g=0;const w="undefined"==typeof TextEncoder?require("util").TextEncoder:TextEncoder;let h=new w("utf-8");const m="function"==typeof h.encodeInto?function(n,e){return h.encodeInto(n,e)}:function(n,e){const t=h.encode(n);return e.set(t),{read:n.length,written:t.length}};function y(n,e,t){if(void 0===t){const t=h.encode(n),_=e(t.length);return l().subarray(_,_+t.length).set(t),g=t.length,_}let _=n.length,r=e(_);const c=l();let o=0;for(;o<_;o++){const e=n.charCodeAt(o);if(e>127)break;c[r+o]=e}if(o!==_){0!==o&&(n=n.slice(o)),r=t(r,_,_=o+3*n.length);const e=l().subarray(r+o,r+_);o+=m(n,e).written}return g=o,r}let p=null;function v(){return null!==p&&p.buffer===n.memory.buffer||(p=new Int32Array(n.memory.buffer)),p}function E(n){return null==n}function S(n){const e=typeof n;if("number"==e||"boolean"==e||null==n)return`${n}`;if("string"==e)return`"${n}"`;if("symbol"==e){const e=n.description;return null==e?"Symbol":`Symbol(${e})`}if("function"==e){const e=n.name;return"string"==typeof e&&e.length>0?`Function(${e})`:"Function"}if(Array.isArray(n)){const e=n.length;let t="[";e>0&&(t+=S(n[0]));for(let _=1;_<e;_++)t+=", "+S(n[_]);return t+="]"}const t=/\[object ([^\]]+)\]/.exec(toString.call(n));let _;if(!(t.length>1))return toString.call(n);if("Object"==(_=t[1]))try{return"Object("+JSON.stringify(n)+")"}catch(r){return"Object"}return n instanceof Error?`${n.name}: ${n.message}\n${n.stack}`:_}function A(e,t,_,r){const c={a:e,b:t,cnt:1},o=(...e)=>{c.cnt++;const t=c.a;c.a=0;try{return r(t,c.b,...e)}finally{0==--c.cnt?n.__wbindgen_export_2.get(_)(t,c.b):c.a=t}};return o.original=c,o}let x=32;function k(n){if(1==x)throw new Error("out of js stack");return r[--x]=n,x}function T(e,t,_){try{n._dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hbd94bba4fc25e70e(e,t,k(_))}finally{r[x++]=void 0}}function j(e,t,_){try{n._dyn_core__ops__function__FnMut___A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h6a79f42c2a9974a4(e,t,k(_))}finally{r[x++]=void 0}}function O(e,t,_){n._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h02223c107eefb63e(e,t,s(_))}function C(e){n.__wbindgen_exn_store(s(e))}function I(e){const t=fetch(e);let r;return(r="function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(t,{"./norske_api_er.js":_}):t.then(n=>n.arrayBuffer()).then(n=>WebAssembly.instantiate(n,{"./norske_api_er.js":_}))).then(({instance:e})=>{n=I.wasm=e.exports,_.wasm=n})}function R(e){const r=require("fs");return new Promise(function(n,_){r.readFile(t+e,function(e,t){e?_(e):n(t.buffer)})}).then(n=>WebAssembly.instantiate(n,{"./norske_api_er":_})).then(({instance:e})=>{n=I.wasm=e.exports,_.wasm=n})}_.run=function(){n.run()},_.__wbindgen_object_drop_ref=function(n){i(n)},_.__wbindgen_string_new=function(n,e){return s(d(n,e))},_.__wbindgen_object_clone_ref=function(n){return s(c(n))},_.__wbindgen_cb_drop=function(n){const e=i(n).original;if(1==e.cnt--)return e.a=0,!0;return!1},_.__wbindgen_json_serialize=function(e,t){const _=c(t);var r=y(JSON.stringify(void 0===_?null:_),n.__wbindgen_malloc,n.__wbindgen_realloc),o=g;v()[e/4+1]=o,v()[e/4+0]=r},_.__wbindgen_is_undefined=function(n){return void 0===c(n)},_.__wbg_new_59cb74e423758ede=function(){return s(new Error)},_.__wbg_stack_558ba5917b466edd=function(e,t){var _=y(c(t).stack,n.__wbindgen_malloc,n.__wbindgen_realloc),r=g;v()[e/4+1]=r,v()[e/4+0]=_},_.__wbg_error_4bb6c2a97407129a=function(e,t){try{console.error(d(e,t))}finally{n.__wbindgen_free(e,t)}},_.__wbg_instanceof_Window_a633dbe0900c728a=function(n){return c(n)instanceof Window},_.__wbg_document_07444f1bbea314bb=function(n){var e=c(n).document;return E(e)?0:s(e)},_.__wbg_location_e50b7d71ca1b82bb=function(n){return s(c(n).location)},_.__wbg_history_66c8db535cd48e93=function(n){try{return s(c(n).history)}catch(e){C(e)}},_.__wbg_fetch_995bfe97503f599b=function(n,e){return s(c(n).fetch(c(e)))},_.__wbg_createElement_5a267cb074dc073b=function(n,e,t){try{return s(c(n).createElement(d(e,t)))}catch(_){C(_)}},_.__wbg_createElementNS_6dd6bfc8ad570e2a=function(n,e,t,_,r){try{return s(c(n).createElementNS(0===e?void 0:d(e,t),d(_,r)))}catch(o){C(o)}},_.__wbg_createTextNode_b131e8421d578817=function(n,e,t){return s(c(n).createTextNode(d(e,t)))},_.__wbg_querySelector_2dabb5b08003bfad=function(n,e,t){try{var _=c(n).querySelector(d(e,t));return E(_)?0:s(_)}catch(r){C(r)}},_.__wbg_instanceof_Response_37bf8b595fe4e5cd=function(n){return c(n)instanceof Response},_.__wbg_status_2efcc6c118058f68=function(n){return c(n).status},_.__wbg_headers_5dc84838dd997124=function(n){return s(c(n).headers)},_.__wbg_json_adb8e0e15a40a4d5=function(n){try{return s(c(n).json())}catch(e){C(e)}},_.__wbg_instanceof_HtmlTextAreaElement_a07fcbfd18542e06=function(n){return c(n)instanceof HTMLTextAreaElement},_.__wbg_value_967003eb801722ab=function(e,t){var _=y(c(t).value,n.__wbindgen_malloc,n.__wbindgen_realloc),r=g;v()[e/4+1]=r,v()[e/4+0]=_},_.__wbg_value_57c725aca44d9296=function(n,e,t){c(n).value=d(e,t)},_.__wbg_headers_8a26b723b3e5bcfa=function(n){return s(c(n).headers)},_.__wbg_newwithstrandinit_80e5800985bdc350=function(n,e,t){try{return s(new Request(d(n,e),c(t)))}catch(_){C(_)}},_.__wbg_instanceof_HtmlInputElement_5f61a3d2d3d02410=function(n){return c(n)instanceof HTMLInputElement},_.__wbg_checked_8f4b67dbaf90811e=function(n,e){c(n).checked=0!==e},_.__wbg_files_09424480be862f49=function(n){var e=c(n).files;return E(e)?0:s(e)},_.__wbg_type_5b3d3d8807847d57=function(n,e,t){c(n).type=d(e,t)},_.__wbg_value_06af6d392334302f=function(e,t){var _=y(c(t).value,n.__wbindgen_malloc,n.__wbindgen_realloc),r=g;v()[e/4+1]=r,v()[e/4+0]=_},_.__wbg_value_ce3b7a6a03d76643=function(n,e,t){c(n).value=d(e,t)},_.__wbg_preventDefault_a94db094b84ac446=function(n){c(n).preventDefault()},_.__wbg_stopPropagation_61518782238c8a3c=function(n){c(n).stopPropagation()},_.__wbg_addEventListener_91aeb4a2a4221f90=function(n,e,t,_,r){try{c(n).addEventListener(d(e,t),c(_),c(r))}catch(o){C(o)}},_.__wbg_removeEventListener_e6d1dae0854e625e=function(n,e,t,_,r){try{c(n).removeEventListener(d(e,t),c(_),0!==r)}catch(o){C(o)}},_.__wbg_state_353681dfe16db943=function(n){try{return s(c(n).state)}catch(e){C(e)}},_.__wbg_pushState_5d9e642afb5b1c81=function(n,e,t,_,r,o){try{c(n).pushState(c(e),d(t,_),0===r?void 0:d(r,o))}catch(a){C(a)}},_.__wbg_replaceState_3fd809d1d30a9bbb=function(n,e,t,_,r,o){try{c(n).replaceState(c(e),d(t,_),0===r?void 0:d(r,o))}catch(a){C(a)}},_.__wbg_instanceof_PopStateEvent_872fc91f6e68893e=function(n){return c(n)instanceof PopStateEvent},_.__wbg_state_969f7e234cf15445=function(n){return s(c(n).state)},_.__wbg_namespaceURI_a890993882ac3334=function(e,t){var _=c(t).namespaceURI,r=E(_)?0:y(_,n.__wbindgen_malloc,n.__wbindgen_realloc),o=g;v()[e/4+1]=o,v()[e/4+0]=r},_.__wbg_getAttribute_0cfffe0e4135c484=function(e,t,_,r){var o=c(t).getAttribute(d(_,r)),a=E(o)?0:y(o,n.__wbindgen_malloc,n.__wbindgen_realloc),i=g;v()[e/4+1]=i,v()[e/4+0]=a},_.__wbg_removeAttribute_518c8ed1a02058f8=function(n,e,t){try{c(n).removeAttribute(d(e,t))}catch(_){C(_)}},_.__wbg_setAttribute_3021f1b348fd14a5=function(n,e,t,_,r){try{c(n).setAttribute(d(e,t),d(_,r))}catch(o){C(o)}},_.__wbg_debug_790752adfbc370bd=function(n,e,t,_){console.debug(c(n),c(e),c(t),c(_))},_.__wbg_error_b23efba5bfb5cec5=function(n){console.error(c(n))},_.__wbg_error_1f17eb9ba29a6661=function(n,e,t,_){console.error(c(n),c(e),c(t),c(_))},_.__wbg_info_f95877a099075776=function(n,e,t,_){console.info(c(n),c(e),c(t),c(_))},_.__wbg_log_c180b836187d3c94=function(n){console.log(c(n))},_.__wbg_log_f429ceddf79d40b5=function(n,e,t,_){console.log(c(n),c(e),c(t),c(_))},_.__wbg_warn_37f6d69e0744a63d=function(n,e,t,_){console.warn(c(n),c(e),c(t),c(_))},_.__wbg_pathname_8a2fe4c2e3a07b51=function(e,t){try{var _=y(c(t).pathname,n.__wbindgen_malloc,n.__wbindgen_realloc),r=g;v()[e/4+1]=r,v()[e/4+0]=_}catch(o){C(o)}},_.__wbg_search_f95349ed6e3c0c45=function(e,t){try{var _=y(c(t).search,n.__wbindgen_malloc,n.__wbindgen_realloc),r=g;v()[e/4+1]=r,v()[e/4+0]=_}catch(o){C(o)}},_.__wbg_hash_a80add7590c75a0c=function(e,t){try{var _=y(c(t).hash,n.__wbindgen_malloc,n.__wbindgen_realloc),r=g;v()[e/4+1]=r,v()[e/4+0]=_}catch(o){C(o)}},_.__wbg_nodeName_d7b58049e0ad773a=function(e,t){var _=y(c(t).nodeName,n.__wbindgen_malloc,n.__wbindgen_realloc),r=g;v()[e/4+1]=r,v()[e/4+0]=_},_.__wbg_lastChild_a7e588170b940ea7=function(n){var e=c(n).lastChild;return E(e)?0:s(e)},_.__wbg_nextSibling_a89e92f7f3b94819=function(n){var e=c(n).nextSibling;return E(e)?0:s(e)},_.__wbg_nodeValue_f6bcda3acca3e7df=function(n,e,t){c(n).nodeValue=0===e?void 0:d(e,t)},_.__wbg_appendChild_c1802f48577b21f6=function(n,e){try{return s(c(n).appendChild(c(e)))}catch(t){C(t)}},_.__wbg_insertBefore_f40a70a9913f64f5=function(n,e,t){try{return s(c(n).insertBefore(c(e),c(t)))}catch(_){C(_)}},_.__wbg_removeChild_9a521558bd3fd73e=function(n,e){try{return s(c(n).removeChild(c(e)))}catch(t){C(t)}},_.__wbg_set_52336fc842eac7c2=function(n,e,t,_,r){try{c(n).set(d(e,t),d(_,r))}catch(o){C(o)}},_.__wbg_instanceof_HtmlSelectElement_c74c6fac5ac0a85e=function(n){return c(n)instanceof HTMLSelectElement},_.__wbg_selectedIndex_49fd99d6846d5b04=function(n){return c(n).selectedIndex},_.__wbg_value_3e7484525812fe93=function(n,e,t){c(n).value=d(e,t)},_.__wbg_call_804d3ad7e8acd4d5=function(n,e){try{return s(c(n).call(c(e)))}catch(t){C(t)}},_.__wbg_newnoargs_ebdc90c3d1e4e55d=function(n,e){return s(new Function(d(n,e)))},_.__wbg_new_937729a89a522fb5=function(){return s(new Object)},_.__wbg_resolve_3e5970e9c931a3c2=function(n){return s(Promise.resolve(c(n)))},_.__wbg_then_d797310661d9e275=function(n,e){return s(c(n).then(c(e)))},_.__wbg_then_e37e0b9ef0995585=function(n,e,t){return s(c(n).then(c(e),c(t)))},_.__wbg_globalThis_48a5e9494e623f26=function(){try{return s(globalThis.globalThis)}catch(n){C(n)}},_.__wbg_self_25067cb019cade42=function(){try{return s(self.self)}catch(n){C(n)}},_.__wbg_window_9e80200b35aa30f8=function(){try{return s(window.window)}catch(n){C(n)}},_.__wbg_global_7583a634265a91fc=function(){try{return s(e.global)}catch(n){C(n)}},_.__wbg_set_5cbed684ac2b1ce9=function(n,e,t){try{return Reflect.set(c(n),c(e),c(t))}catch(_){C(_)}},_.__wbindgen_string_get=function(e,t){const _=c(t);var r="string"==typeof _?_:void 0,o=E(r)?0:y(r,n.__wbindgen_malloc,n.__wbindgen_realloc),a=g;v()[e/4+1]=a,v()[e/4+0]=o},_.__wbindgen_debug_string=function(e,t){var _=y(S(c(t)),n.__wbindgen_malloc,n.__wbindgen_realloc),r=g;v()[e/4+1]=r,v()[e/4+0]=_},_.__wbindgen_throw=function(n,e){throw new Error(d(n,e))},_.__wbindgen_closure_wrapper499=function(n,e,t){return s(A(n,e,215,T))},_.__wbindgen_closure_wrapper886=function(n,e,t){return s(A(n,e,361,O))},_.__wbindgen_closure_wrapper823=function(n,e,t){return s(A(n,e,343,j))};const W=Object.assign(I,_);module.exports=function(n){return W(n).then(()=>_)};
},{"util":"gfUn","fs":"rDCW"}],0:[function(require,module,exports) {
var b=require("TUK3");b.register("wasm",require("fISM"));b.load([["norske_api_er_bg.3251beea.wasm","zwTW"]]).then(function(){require("QCba");});
},{}]},{},[0], null)
//# sourceMappingURL=static.e882fe62.js.map