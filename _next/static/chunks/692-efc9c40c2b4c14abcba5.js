(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[692],{7292:function(e,t,n){"use strict";n.d(t,{rU:function(){return s},OL:function(){return f}});var r=n(7294),o=n(4184),i=n.n(o),a=n(7462),u=n(5987);var c=["negative","external","className","children"],s=function(e){var t=e.negative,n=void 0!==t&&t,o=e.external,s=void 0!==o&&o,l=e.className,f=void 0===l?"":l,p=e.children,d=(0,u.Z)(e,c);return r.createElement("a",(0,a.Z)({className:i()("jkl-link",f,{"jkl-link--negative":n,"jkl-link--external":s})},d),p)},l=["inverted","active","back","className","children"],f=function(e){var t=e.inverted,n=void 0!==t&&t,o=e.active,c=void 0!==o&&o,s=e.back,f=void 0!==s&&s,p=e.className,d=void 0===p?"":p,y=e.children,h=(0,u.Z)(e,l);return r.createElement("a",(0,a.Z)({className:i()("jkl-nav-link",{"jkl-nav-link--inverted":n,"jkl-nav-link--active":c,"jkl-nav-link--back":f},d)},h),y)}},5451:function(e,t,n){"use strict";n.d(t,{a:function(){return a}});var r=n(7294),o=n(4184),i=n.n(o),a=function(e){var t=e.textDescription,n=e.negative,o=void 0!==n&&n,a=e.inline,u=void 0!==a&&a,c=e.className,s=e.dataTestAutoId,l=void 0===s?"jkl-loader":s,f=e.politeness,p=void 0===f?"polite":f,d=i()("jkl-loader",c,{"jkl-loader--negative":o,"jkl-loader--inline":u});return r.createElement("span",{className:d,"data-testid":"jkl-loader","data-testautoid":l,title:t,"aria-label":t,role:"alert","aria-busy":"true","aria-live":p},r.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--left"}),r.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--middle"}),r.createElement("span",{className:"jkl-loader__dot jkl-loader__dot--right"}))}},8679:function(e,t,n){"use strict";var r=n(1296),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};function c(e){return r.isMemo(e)?a:u[e.$$typeof]||o}u[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u[r.Memo]=a;var s=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(y){var o=d(n);o&&o!==y&&e(t,o,r)}var a=l(n);f&&(a=a.concat(f(n)));for(var u=c(t),h=c(n),v=0;v<a.length;++v){var m=a[v];if(!i[m]&&(!r||!r[m])&&(!h||!h[m])&&(!u||!u[m])){var b=p(n,m);try{s(t,m,b)}catch(g){}}}}return t}},6103:function(e,t){"use strict";var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,s=n?Symbol.for("react.context"):60110,l=n?Symbol.for("react.async_mode"):60111,f=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,y=n?Symbol.for("react.suspense_list"):60120,h=n?Symbol.for("react.memo"):60115,v=n?Symbol.for("react.lazy"):60116,m=n?Symbol.for("react.block"):60121,b=n?Symbol.for("react.fundamental"):60117,g=n?Symbol.for("react.responder"):60118,x=n?Symbol.for("react.scope"):60119;function _(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case l:case f:case i:case u:case a:case d:return e;default:switch(e=e&&e.$$typeof){case s:case p:case v:case h:case c:return e;default:return t}}case o:return t}}}function w(e){return _(e)===f}t.AsyncMode=l,t.ConcurrentMode=f,t.ContextConsumer=s,t.ContextProvider=c,t.Element=r,t.ForwardRef=p,t.Fragment=i,t.Lazy=v,t.Memo=h,t.Portal=o,t.Profiler=u,t.StrictMode=a,t.Suspense=d,t.isAsyncMode=function(e){return w(e)||_(e)===l},t.isConcurrentMode=w,t.isContextConsumer=function(e){return _(e)===s},t.isContextProvider=function(e){return _(e)===c},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return _(e)===p},t.isFragment=function(e){return _(e)===i},t.isLazy=function(e){return _(e)===v},t.isMemo=function(e){return _(e)===h},t.isPortal=function(e){return _(e)===o},t.isProfiler=function(e){return _(e)===u},t.isStrictMode=function(e){return _(e)===a},t.isSuspense=function(e){return _(e)===d},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===f||e===u||e===a||e===d||e===y||"object"===typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===h||e.$$typeof===c||e.$$typeof===s||e.$$typeof===p||e.$$typeof===b||e.$$typeof===g||e.$$typeof===x||e.$$typeof===m)},t.typeOf=_},1296:function(e,t,n){"use strict";e.exports=n(6103)},9008:function(e,t,n){e.exports=n(639)},4779:function(e,t,n){var r=n(6173);e.exports=d,e.exports.parse=i,e.exports.compile=function(e,t){return u(i(e,t),t)},e.exports.tokensToFunction=u,e.exports.tokensToRegExp=p;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(e,t){for(var n,r=[],i=0,a=0,u="",l=t&&t.delimiter||"/";null!=(n=o.exec(e));){var f=n[0],p=n[1],d=n.index;if(u+=e.slice(a,d),a=d+f.length,p)u+=p[1];else{var y=e[a],h=n[2],v=n[3],m=n[4],b=n[5],g=n[6],x=n[7];u&&(r.push(u),u="");var _=null!=h&&null!=y&&y!==h,w="+"===g||"*"===g,T="?"===g||"*"===g,k=n[2]||l,S=m||b;r.push({name:v||i++,prefix:h||"",delimiter:k,optional:T,repeat:w,partial:_,asterisk:!!x,pattern:S?s(S):x?".*":"[^"+c(k)+"]+?"})}}return a<e.length&&(u+=e.substr(a)),u&&r.push(u),r}function a(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function u(e,t){for(var n=new Array(e.length),o=0;o<e.length;o++)"object"===typeof e[o]&&(n[o]=new RegExp("^(?:"+e[o].pattern+")$",f(t)));return function(t,o){for(var i="",u=t||{},c=(o||{}).pretty?a:encodeURIComponent,s=0;s<e.length;s++){var l=e[s];if("string"!==typeof l){var f,p=u[l.name];if(null==p){if(l.optional){l.partial&&(i+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(r(p)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var d=0;d<p.length;d++){if(f=c(p[d]),!n[s].test(f))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(f)+"`");i+=(0===d?l.prefix:l.delimiter)+f}}else{if(f=l.asterisk?encodeURI(p).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})):c(p),!n[s].test(f))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+f+'"');i+=l.prefix+f}}else i+=l}return i}}function c(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function l(e,t){return e.keys=t,e}function f(e){return e&&e.sensitive?"":"i"}function p(e,t,n){r(t)||(n=t||n,t=[]);for(var o=(n=n||{}).strict,i=!1!==n.end,a="",u=0;u<e.length;u++){var s=e[u];if("string"===typeof s)a+=c(s);else{var p=c(s.prefix),d="(?:"+s.pattern+")";t.push(s),s.repeat&&(d+="(?:"+p+d+")*"),a+=d=s.optional?s.partial?p+"("+d+")?":"(?:"+p+"("+d+"))?":p+"("+d+")"}}var y=c(n.delimiter||"/"),h=a.slice(-y.length)===y;return o||(a=(h?a.slice(0,-y.length):a)+"(?:"+y+"(?=$))?"),a+=i?"$":o&&h?"":"(?="+y+"|$)",l(new RegExp("^"+a,f(n)),t)}function d(e,t,n){return r(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return l(e,t)}(e,t):r(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(d(e[o],t,n).source);return l(new RegExp("(?:"+r.join("|")+")",f(n)),t)}(e,t,n):function(e,t,n){return p(i(e,n),t,n)}(e,t,n)}},6173:function(e){e.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},8721:function(e,t,n){"use strict";n.d(t,{k6:function(){return I}});var r=n(1721),o=n(7294),i=n(5697),a=n.n(i),u=n(7462);function c(e){return"/"===e.charAt(0)}function s(e,t){for(var n=t,r=n+1,o=e.length;r<o;n+=1,r+=1)e[n]=e[r];e.pop()}var l=function(e,t){void 0===t&&(t="");var n,r=e&&e.split("/")||[],o=t&&t.split("/")||[],i=e&&c(e),a=t&&c(t),u=i||a;if(e&&c(e)?o=r:r.length&&(o.pop(),o=o.concat(r)),!o.length)return"/";if(o.length){var l=o[o.length-1];n="."===l||".."===l||""===l}else n=!1;for(var f=0,p=o.length;p>=0;p--){var d=o[p];"."===d?s(o,p):".."===d?(s(o,p),f++):f&&(s(o,p),f--)}if(!u)for(;f--;f)o.unshift("..");!u||""===o[0]||o[0]&&c(o[0])||o.unshift("");var y=o.join("/");return n&&"/"!==y.substr(-1)&&(y+="/"),y};function f(e){var t=e.pathname,n=e.search,r=e.hash,o=t||"/";return n&&"?"!==n&&(o+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function p(e,t,n,r){var o;"string"===typeof e?(o=function(e){var t=e||"/",n="",r="",o=t.indexOf("#");-1!==o&&(r=t.substr(o),t=t.substr(0,o));var i=t.indexOf("?");return-1!==i&&(n=t.substr(i),t=t.substr(0,i)),{pathname:t,search:"?"===n?"":n,hash:"#"===r?"":r}}(e)).state=t:(void 0===(o=(0,u.Z)({},e)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==t&&void 0===o.state&&(o.state=t));try{o.pathname=decodeURI(o.pathname)}catch(i){throw i instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):i}return n&&(o.key=n),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=l(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function d(){var e=null;var t=[];return{setPrompt:function(t){return e=t,function(){e===t&&(e=null)}},confirmTransitionTo:function(t,n,r,o){if(null!=e){var i="function"===typeof e?e(t,n):e;"string"===typeof i?"function"===typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(e){var n=!0;function r(){n&&e.apply(void 0,arguments)}return t.push(r),function(){n=!1,t=t.filter((function(e){return e!==r}))}},notifyListeners:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.forEach((function(e){return e.apply(void 0,n)}))}}}"undefined"===typeof window||!window.document||window.document.createElement;function y(e,t,n){return Math.min(Math.max(e,t),n)}function h(e){void 0===e&&(e={});var t=e,n=t.getUserConfirmation,r=t.initialEntries,o=void 0===r?["/"]:r,i=t.initialIndex,a=void 0===i?0:i,c=t.keyLength,s=void 0===c?6:c,l=d();function h(e){(0,u.Z)(_,e),_.length=_.entries.length,l.notifyListeners(_.location,_.action)}function v(){return Math.random().toString(36).substr(2,s)}var m=y(a,0,o.length-1),b=o.map((function(e){return p(e,void 0,"string"===typeof e?v():e.key||v())})),g=f;function x(e){var t=y(_.index+e,0,_.entries.length-1),r=_.entries[t];l.confirmTransitionTo(r,"POP",n,(function(e){e?h({action:"POP",location:r,index:t}):h()}))}var _={length:b.length,action:"POP",location:b[m],index:m,entries:b,createHref:g,push:function(e,t){var r="PUSH",o=p(e,t,v(),_.location);l.confirmTransitionTo(o,r,n,(function(e){if(e){var t=_.index+1,n=_.entries.slice(0);n.length>t?n.splice(t,n.length-t,o):n.push(o),h({action:r,location:o,index:t,entries:n})}}))},replace:function(e,t){var r="REPLACE",o=p(e,t,v(),_.location);l.confirmTransitionTo(o,r,n,(function(e){e&&(_.entries[_.index]=o,h({action:r,location:o}))}))},go:x,goBack:function(){x(-1)},goForward:function(){x(1)},canGo:function(e){var t=_.index+e;return t>=0&&t<_.entries.length},block:function(e){return void 0===e&&(e=!1),l.setPrompt(e)},listen:function(e){return l.appendListener(e)}};return _}var v=1073741823,m="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{};function b(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(n,r){e=n,t.forEach((function(t){return t(e,r)}))}}}var g=o.createContext||function(e,t){var n,i,u="__create-react-context-"+function(){var e="__global_unique_id__";return m[e]=(m[e]||0)+1}()+"__",c=function(e){function n(){var t;return(t=e.apply(this,arguments)||this).emitter=b(t.props.value),t}(0,r.Z)(n,e);var o=n.prototype;return o.getChildContext=function(){var e;return(e={})[u]=this.emitter,e},o.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n,r=this.props.value,o=e.value;((i=r)===(a=o)?0!==i||1/i===1/a:i!==i&&a!==a)?n=0:(n="function"===typeof t?t(r,o):v,0!==(n|=0)&&this.emitter.set(e.value,n))}var i,a},o.render=function(){return this.props.children},n}(o.Component);c.childContextTypes=((n={})[u]=a().object.isRequired,n);var s=function(t){function n(){var e;return(e=t.apply(this,arguments)||this).state={value:e.getValue()},e.onUpdate=function(t,n){0!==((0|e.observedBits)&n)&&e.setState({value:e.getValue()})},e}(0,r.Z)(n,t);var o=n.prototype;return o.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=void 0===t||null===t?v:t},o.componentDidMount=function(){this.context[u]&&this.context[u].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=void 0===e||null===e?v:e},o.componentWillUnmount=function(){this.context[u]&&this.context[u].off(this.onUpdate)},o.getValue=function(){return this.context[u]?this.context[u].get():e},o.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(o.Component);return s.contextTypes=((i={})[u]=a().object,i),{Provider:c,Consumer:s}},x="Invariant failed";var _=function(e,t){if(!e)throw new Error(x)},w=n(4779),T=n.n(w),k=(n(663),n(3366)),S=(n(8679),function(e){var t=g();return t.displayName=e,t}),E=S("Router-History"),P=S("Router"),j=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={location:t.history.location},n._isMounted=!1,n._pendingLocation=null,t.staticContext||(n.unlisten=t.history.listen((function(e){n._isMounted?n.setState({location:e}):n._pendingLocation=e}))),n}(0,r.Z)(t,e),t.computeRootMatch=function(e){return{path:"/",url:"/",params:{},isExact:"/"===e}};var n=t.prototype;return n.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},n.render=function(){return o.createElement(P.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},o.createElement(E.Provider,{children:this.props.children||null,value:this.props.history}))},t}(o.Component);o.Component;o.Component;var O={},R=0;function C(e,t){void 0===t&&(t={}),("string"===typeof t||Array.isArray(t))&&(t={path:t});var n=t,r=n.path,o=n.exact,i=void 0!==o&&o,a=n.strict,u=void 0!==a&&a,c=n.sensitive,s=void 0!==c&&c;return[].concat(r).reduce((function(t,n){if(!n&&""!==n)return null;if(t)return t;var r=function(e,t){var n=""+t.end+t.strict+t.sensitive,r=O[n]||(O[n]={});if(r[e])return r[e];var o=[],i={regexp:T()(e,o,t),keys:o};return R<1e4&&(r[e]=i,R++),i}(n,{end:i,strict:u,sensitive:s}),o=r.regexp,a=r.keys,c=o.exec(e);if(!c)return null;var l=c[0],f=c.slice(1),p=e===l;return i&&!p?null:{path:n,url:"/"===n&&""===l?"/":l,isExact:p,params:a.reduce((function(e,t,n){return e[t.name]=f[n],e}),{})}}),null)}o.Component;function D(e){return"/"===e.charAt(0)?e:"/"+e}function A(e,t){if(!e)return t;var n=D(e);return 0!==t.pathname.indexOf(n)?t:(0,u.Z)({},t,{pathname:t.pathname.substr(n.length)})}function $(e){return"string"===typeof e?e:f(e)}function M(e){return function(){_(!1)}}function L(){}o.Component;o.Component;var N=o.useContext;function I(){return N(E)}},86:function(e,t){"use strict";var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,c=n?Symbol.for("react.provider"):60109,s=n?Symbol.for("react.context"):60110,l=n?Symbol.for("react.async_mode"):60111,f=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,y=n?Symbol.for("react.suspense_list"):60120,h=n?Symbol.for("react.memo"):60115,v=n?Symbol.for("react.lazy"):60116,m=n?Symbol.for("react.block"):60121,b=n?Symbol.for("react.fundamental"):60117,g=n?Symbol.for("react.responder"):60118,x=n?Symbol.for("react.scope"):60119;function _(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case l:case f:case i:case u:case a:case d:return e;default:switch(e=e&&e.$$typeof){case s:case p:case v:case h:case c:return e;default:return t}}case o:return t}}}function w(e){return _(e)===f}},663:function(e,t,n){"use strict";n(86)},5346:function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),a=p(i),u=p(n(2)),c=p(n(10)),s=p(n(12)),l=p(n(13)),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(14));function p(e){return e&&e.__esModule?e:{default:e}}var d=["\ud83d\udd19","\u23f0"],y=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={textLines:[],isDone:!1},n.onTypingDone=function(){n.mounted&&(n.setState({isDone:!0}),n.props.onTypingDone())},n.delayGenerator=function(e,t,r,o){var i=n.props.avgTypingDelay,a=n.props.stdTypingDelay;return n.props.delayGenerator(i,a,{line:e,lineIdx:t,character:r,charIdx:o,defDelayGenerator:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return f.gaussianRnd(e,t)}})},n.typeLine=function(e,t){if(!n.mounted)return Promise.resolve();var r=e,o=n.props.onLineTyped;return f.isBackspaceElement(e)?(e.props.delay>0&&(n.introducedDelay=e.props.delay),r=String("\ud83d\udd19").repeat(e.props.count)):f.isDelayElement(e)&&(n.introducedDelay=e.props.ms,r="\u23f0"),new Promise((function(e,i){n.setState({textLines:n.state.textLines.concat([""])},(function(){f.eachPromise(r,n.typeCharacter,r,t).then((function(){return o(r,t)})).then(e).catch(i)}))}))},n.typeCharacter=function(e,t,r,o){if(!n.mounted)return Promise.resolve();var i=n.props.onCharacterTyped;return new Promise((function(a){var u=n.state.textLines.slice();f.sleep(n.introducedDelay).then((function(){n.introducedDelay=null;var c="\ud83d\udd19"===e;if("\u23f0"===e)a();else{if(c&&o>0){for(var s=o-1,l=u[s],f=s;f>=0&&(!(l.length>0)||d.includes(l[0]));f--)l=u[s=f];u[s]=l.substr(0,l.length-1)}else u[o]+=e;n.setState({textLines:u},(function(){var u=n.delayGenerator(r,o,e,t);i(e,t),setTimeout(a,u)}))}}))}))},n.mounted=!1,n.linesToType=[],n.introducedDelay=null,e.children&&(n.linesToType=f.extractTextFromElement(e.children)),n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.mounted=!0;var e=this.props,t=e.children,n=e.startDelay;t?n>0&&"undefined"!==typeof window?setTimeout(this.typeAllLines.bind(this),n):this.typeAllLines():this.onTypingDone()}},{key:"shouldComponentUpdate",value:function(e,t){if(t.textLines.length!==this.state.textLines.length)return!0;for(var n=0;n<t.textLines.length;n++){if(this.state.textLines[n]!==t.textLines[n])return!0}return this.state.isDone!==t.isDone}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"typeAllLines",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.linesToType;return f.eachPromise(t,this.typeLine).then((function(){return e.onTypingDone()}))}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.cursor,o=this.state.isDone,i=f.cloneElementWithSpecifiedText({element:this.props.children,textLines:this.state.textLines});return a.default.createElement("div",{className:"Typist "+t},i,a.default.createElement(c.default,r({isDone:o},n)))}}]),t}(i.Component);y.propTypes={children:u.default.node,className:u.default.string,avgTypingDelay:u.default.number,stdTypingDelay:u.default.number,startDelay:u.default.number,cursor:u.default.object,onCharacterTyped:u.default.func,onLineTyped:u.default.func,onTypingDone:u.default.func,delayGenerator:u.default.func},y.defaultProps={className:"",avgTypingDelay:70,stdTypingDelay:25,startDelay:0,cursor:{},onCharacterTyped:function(){},onLineTyped:function(){},onTypingDone:function(){},delayGenerator:f.gaussianRnd},t.default=y,y.Backspace=s.default,y.Delay=l.default},function(e,t){e.exports=n(7294)},function(e,t,n){e.exports=n(9)()},function(e,t,n){"use strict";var r=n(4),o=n(5),i=n(6),a=n(7),u=n(8);e.exports=function(e,t){var n="function"===typeof Symbol&&Symbol.iterator;var c="<<anonymous>>",s={array:d("array"),bool:d("boolean"),func:d("function"),number:d("number"),object:d("object"),string:d("string"),symbol:d("symbol"),any:p(r.thatReturnsNull),arrayOf:function(e){return p((function(t,n,r,o,i){if("function"!==typeof e)return new f("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=t[n];if(!Array.isArray(u))return new f("Invalid "+o+" `"+i+"` of type `"+h(u)+"` supplied to `"+r+"`, expected an array.");for(var c=0;c<u.length;c++){var s=e(u,c,r,o,i+"["+c+"]",a);if(s instanceof Error)return s}return null}))},element:p((function(t,n,r,o,i){var a=t[n];return e(a)?null:new f("Invalid "+o+" `"+i+"` of type `"+h(a)+"` supplied to `"+r+"`, expected a single ReactElement.")})),instanceOf:function(e){return p((function(t,n,r,o,i){if(!(t[n]instanceof e)){var a=e.name||c;return new f("Invalid "+o+" `"+i+"` of type `"+(((u=t[n]).constructor&&u.constructor.name?u.constructor.name:c)+"` supplied to `")+r+"`, expected instance of `"+a+"`.")}var u;return null}))},node:p((function(e,t,n,r,o){return y(e[t])?null:new f("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(t,n,r,o,i){if("function"!==typeof e)return new f("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=t[n],c=h(u);if("object"!==c)return new f("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var s in u)if(u.hasOwnProperty(s)){var l=e(u,s,r,o,i+"."+s,a);if(l instanceof Error)return l}return null}))},oneOf:function(e){if(!Array.isArray(e))return r.thatReturnsNull;return p((function(t,n,r,o,i){for(var a=t[n],u=0;u<e.length;u++)if(l(a,e[u]))return null;return new f("Invalid "+o+" `"+i+"` of value `"+a+"` supplied to `"+r+"`, expected one of "+JSON.stringify(e)+".")}))},oneOfType:function(e){if(!Array.isArray(e))return r.thatReturnsNull;for(var t=0;t<e.length;t++){var n=e[t];if("function"!==typeof n)return i(!1,"Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.",m(n),t),r.thatReturnsNull}return p((function(t,n,r,o,i){for(var u=0;u<e.length;u++)if(null==(0,e[u])(t,n,r,o,i,a))return null;return new f("Invalid "+o+" `"+i+"` supplied to `"+r+"`.")}))},shape:function(e){return p((function(t,n,r,o,i){var u=t[n],c=h(u);if("object"!==c)return new f("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var s in e){var l=e[s];if(l){var p=l(u,s,r,o,i+"."+s,a);if(p)return p}}return null}))}};function l(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}function f(e){this.message=e,this.stack=""}function p(e){function n(n,r,i,u,s,l,p){(u=u||c,l=l||i,p!==a)&&(t&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"));return null==r[i]?n?null===r[i]?new f("The "+s+" `"+l+"` is marked as required in `"+u+"`, but its value is `null`."):new f("The "+s+" `"+l+"` is marked as required in `"+u+"`, but its value is `undefined`."):null:e(r,i,u,s,l)}var r=n.bind(null,!1);return r.isRequired=n.bind(null,!0),r}function d(e){return p((function(t,n,r,o,i,a){var u=t[n];return h(u)!==e?new f("Invalid "+o+" `"+i+"` of type `"+v(u)+"` supplied to `"+r+"`, expected `"+e+"`."):null}))}function y(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(y);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e["@@iterator"]);if("function"===typeof t)return t}(t);if(!r)return!1;var o,i=r.call(t);if(r!==t.entries){for(;!(o=i.next()).done;)if(!y(o.value))return!1}else for(;!(o=i.next()).done;){var a=o.value;if(a&&!y(a[1]))return!1}return!0;default:return!1}}function h(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||"Symbol"===t["@@toStringTag"]||"function"===typeof Symbol&&t instanceof Symbol}(t,e)?"symbol":t}function v(e){if("undefined"===typeof e||null===e)return""+e;var t=h(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function m(e){var t=v(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return f.prototype=Error.prototype,s.checkPropTypes=u,s.PropTypes=s,s}},function(e,t){"use strict";function n(e){return function(){return e}}var r=function(){};r.thatReturns=n,r.thatReturnsFalse=n(!1),r.thatReturnsTrue=n(!0),r.thatReturnsNull=n(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t){"use strict";e.exports=function(e,t,n,r,o,i,a,u){if(!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,o,i,a,u],l=0;(c=new Error(t.replace(/%s/g,(function(){return s[l++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},function(e,t,n){"use strict";var r=n(4);e.exports=r},function(e,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){}},function(e,t,n){"use strict";var r=n(4),o=n(5),i=n(7);e.exports=function(){function e(e,t,n,r,a,u){u!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),i=u(o),a=u(n(2));function u(e){return e&&e.__esModule?e:{default:e}}n(11);var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._isReRenderingCursor=!1,n.state={shouldRender:n.props.show},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentWillReceiveProps",value:function(e){var t=this;!this.props.isDone&&e.isDone&&this.props.hideWhenDone&&setTimeout((function(){return t.setState({shouldRender:!1})}),this.props.hideWhenDoneDelay)}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.show,n=e.isDone;t&&(n||this._isReRenderingCursor||this._reRenderCursor())}},{key:"_reRenderCursor",value:function(){var e=this;this._isReRenderingCursor=!0,this.setState({shouldRender:!1},(function(){e.setState({shouldRender:!0},(function(){e._isReRenderingCursor=!1}))}))}},{key:"render",value:function(){if(this.state.shouldRender){var e=this.props.blink?" Cursor--blinking":"";return i.default.createElement("span",{className:"Cursor"+e},this.props.element)}return null}}]),t}(o.Component);c.propTypes={blink:a.default.bool,show:a.default.bool,element:a.default.node,hideWhenDone:a.default.bool,hideWhenDoneDelay:a.default.number,isDone:a.default.bool},c.defaultProps={blink:!0,show:!0,element:"|",hideWhenDone:!1,hideWhenDoneDelay:1e3,isDone:!1},t.default=c},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(1)),o=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(){return r.default.createElement("noscript",null)};a.componentName="Backspace",a.propTypes={count:o.default.number,delay:o.default.number},a.defaultProps={count:1,delay:0},t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(1)),o=i(n(2));function i(e){return e&&e.__esModule?e:{default:e}}var a=function(){return r.default.createElement("noscript",null)};a.componentName="Delay",a.propTypes={ms:o.default.number.isRequired},t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sleep=void 0;var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.gaussianRnd=function(e,t){for(var n=0,r=0;r<12;r++)n+=Math.random();return n-=6,Math.round(n*t)+e},t.eachPromise=function(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];var i=function(e,n,o){return e.then((function(){return t.apply(void 0,[n,o].concat(r))}))};return Array.from(e).reduce(i,Promise.resolve())},t.exclude=u,t.isBackspaceElement=c,t.isDelayElement=s,t.extractTextFromElement=function(e){var t=e?[e]:[],n=[];for(;t.length>0;){var r=t.pop();if(a.default.isValidElement(r))c(r)||s(r)?n.unshift(r):a.default.Children.forEach(r.props.children,(function(e){t.push(e)}));else if(Array.isArray(r)){var o=!0,i=!1,u=void 0;try{for(var l,f=r[Symbol.iterator]();!(o=(l=f.next()).done);o=!0){var p=l.value;t.push(p)}}catch(d){i=!0,u=d}finally{try{!o&&f.return&&f.return()}finally{if(i)throw u}}}else n.unshift(r)}return n},t.cloneElement=l,t.cloneElementWithSpecifiedText=function(e){var t=e.element,n=e.textLines;if(!t)return;return f(t,n,0)[0]};var o,i=n(1),a=(o=i)&&o.__esModule?o:{default:o};t.sleep=function(e){return new Promise((function(t){return null!=e?setTimeout(t,e):t()}))};function u(e,t){var n={};for(var r in e)-1===t.indexOf(r)&&(n[r]=e[r]);return n}function c(e){return e&&e.type&&"Backspace"===e.type.componentName}function s(e){return e&&e.type&&"Delay"===e.type.componentName}function l(e,t){var n=e.type,r=u(e.props,["children"]),o=(new Date).getUTCMilliseconds()+Math.random()+Math.random();return r.key="Typist-element-"+n+"-"+o,a.default.createElement.apply(a.default,[n,r].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t)))}function f(e,t,n){if(n>=t.length)return[null,n];var o=n,i=function(e){var n=f(e,t,o),i=r(n,2),a=i[0],u=i[1];return o=u,a};return a.default.isValidElement(e)&&!(c(e)||s(e))?[l(e,a.default.Children.map(e.props.children,i)||[]),o]:Array.isArray(e)?[e.map(i),o]:[t[o],o+1]}}])},1721:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,r(e,t)}n.d(t,{Z:function(){return o}})}}]);