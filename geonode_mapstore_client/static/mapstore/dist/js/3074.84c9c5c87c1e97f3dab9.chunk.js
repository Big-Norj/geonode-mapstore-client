(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[3074],{43120:(e,t,r)=>{var n={"./cesium.js":[61133,6882,3219,5794,9437],"./leaflet.js":[48507,6259,9878,3596,9993,5378,6882,3991,7548,1164,5701,7161],"./openlayers.js":[34637,6259,4161,9878,2043,353,7202,4738,9139,9141,4793,8920,1332,6932,1704,2445,8471,4155,5604,987,6830,9334,5378,6882,370,6909,6576,3498,7548,6037],"./sink.js":[60620,5442]};function o(e){if(!r.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return Promise.all(t.slice(1).map(r.e)).then((()=>r(o)))}o.keys=()=>Object.keys(n),o.id=43120,e.exports=o},40986:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(67294),o=r(75263),i=r.n(o),a=r(86267),c=r(52043);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var p={openlayers:{fit:function(e){var t,r=e.map,n=e.geometry,o=e.padding,i=e.geometryProjection,u=e.fixedZoom,p=e.maxZoom,s=e.duration,l=r.getView(),f=l.getProjection().getCode();if(2===n.length){var y=(0,a.reproject)(n,i,f),m=y.x,d=y.y;t=new c.Z([m,d])}else t=(0,a.reprojectBbox)(n,i,f);var b=o||{},v=b.top,g=void 0===v?0:v,h=b.right,j=void 0===h?0:h,O=b.bottom,P=void 0===O?0:O,w=b.left,S=void 0===w?0:w;l.fit(t,{padding:[g,j,P,S],maxZoom:u?l.getZoom():p,duration:s})}},leaflet:{fit:function(e){var t,r,n,o=e.map,i=e.geometry,c=e.padding,p=e.geometryProjection,s=e.fixedZoom,l=e.maxZoom,f=e.duration,y=s?o.getZoom():l,m=c.top,d=void 0===m?0:m,b=c.right,v=void 0===b?0:b,g=c.bottom,h=void 0===g?0:g,j=c.left,O=void 0===j?0:j;if(2===i.length){var P=(0,a.reproject)(i,p,"EPSG:4326"),w=P.x,S=P.y;t=[[S,w],[S,w]]}else{var E=(r=(0,a.reprojectBbox)(i,p,"EPSG:4326"),n=4,function(e){if(Array.isArray(e))return e}(r)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(r,n)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),_=E[0],T=E[1],x=E[2];t=[[T,_],[E[3],x]]}o.flyToBounds(t,{paddingTopLeft:[O,d],paddingBottomRight:[v,h],maxZoom:y,animate:!!f,duration:f/1e3})}}};function s(e){var t=e.map,r=e.mapType,o=e.active,i=e.geometry,a=e.geometryProjection,c=void 0===a?"EPSG:4326":a,u=e.padding,s=e.maxZoom,l=e.fixedZoom,f=e.duration,y=(0,n.useRef)();return y.current=function(){t&&p[r]&&p[r].fit({map:t,geometry:i,padding:u,geometryProjection:c,maxZoom:s,fixedZoom:l,duration:f})},(0,n.useEffect)((function(){o&&i&&y.current()}),[i,o]),null}s.propTypes={id:i().string,map:i().object,mapType:i().string,active:i().bool,geometry:i().array,geometryProjection:i().string,padding:i().object,maxZoom:i().number,fixedZoom:i().bool,duration:i().number},s.defaultProps={geometryProjection:"EPSG:4326",padding:{top:0,right:0,bottom:0,left:0}};const l=s},61928:(e,t,r)=>{"use strict";r.d(t,{Z:()=>w});var n=r(67294),o=r.n(n),i=r(75263),a=r.n(i),c=r(47037),u=r.n(c);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}var s=["impl","name"];function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}function g(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(c,e);var t,r,n,i,a=(n=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(n);if(i){var r=j(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return g(this,e)});function c(){var e;d(this,c);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return O(h(e=a.call.apply(a,[this].concat(r))),"getTool",(function(t){var r=e.props.plugins;return u()(t)?{name:t,impl:r.tools[t]}:m({name:t.name,impl:r.tools[t.name]},t)})),O(h(e),"renderLayers",(function(){var t=e.props.map&&e.props.map.projection||"EPSG:3857",r=e.props.plugins.Layer;return e.props.layers.map((function(n,i){return o().createElement(r,{type:n.type,srs:t,position:i,key:n.id||n.name,options:n,env:n.localizedLayerStyles?e.props.env:[]},e.renderLayerContent(n,t))}))})),O(h(e),"renderLayerContent",(function(t,r){if(t.features&&"vector"===t.type){var n=e.props.plugins.Feature;return t.features.map((function(e){return o().createElement(n,{key:e.id,msId:e.id,type:e.type,crs:r,geometry:e.geometry,features:e.features,featuresCrs:t.featuresCrs||"EPSG:4326",layerStyle:t.style,style:e.style||t.style||null,properties:e.properties})}))}return null})),O(h(e),"renderTools",(function(){return e.props.tools.map((function(t){var r=e.getTool(t),n=r.impl,i=r.name,a=f(r,s);return o().createElement(n,l({key:i},a))}))})),e}return t=c,(r=[{key:"render",value:function(){var e=this.props.plugins.Map,t=this.props.map&&this.props.map.projection||"EPSG:3857";return this.props.map&&e?o().createElement(e,l({projectionDefs:this.props.projectionDefs,style:this.props.styleMap,id:this.props.id,zoomControl:!1,center:{x:0,y:0},zoom:1,hookRegister:this.props.hookRegister,mapStateSource:this.props.mapStateSource||this.props.id},this.props.options,this.props.map,{projection:t},this.props.eventHandlers),this.renderLayers(),this.renderTools(),this.props.children):null}}])&&b(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),c}(o().Component);O(P,"propTypes",{id:a().string,options:a().object,map:a().object,mapStateSource:a().string,eventHandlers:a().object,styleMap:a().object,layers:a().array,hookRegister:a().object,projectionDefs:a().array,plugins:a().any,tools:a().array,getLayerProps:a().func,env:a().array}),O(P,"defaultProps",{id:"__base_map__",options:{},map:{},styleMap:{},tools:[],projectionDefs:[],eventHandlers:{onMapViewChanges:function(){},onClick:function(){},onMouseMove:function(){},onLayerLoading:function(){},onLayerError:function(){}},env:[]});const w=P},19180:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(67294),o=r.n(n),i=r(75263),a=r.n(i);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function f(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const b=function(e){var t=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(v,t);var n,i,a,c,b=(a=v,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(a);if(c){var r=m(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return f(this,e)});function v(){var e;p(this,v);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return d(y(e=b.call.apply(b,[this].concat(r))),"state",{plugins:{}}),e}return n=v,(i=[{key:"componentDidMount",value:function(){this.setPlugins(this.props),this._isMounted=!0}},{key:"componentWillUpdate",value:function(e){e.mapType!==this.props.mapType&&this.setPlugins(e)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var t=this.state.plugins;return o().createElement(e,u({},this.props,{plugins:t}))}},{key:"setPlugins",value:function(e){var t=this;e.mapType&&r(43120)("./"+e.mapType+".js").then((function(e){t._isMounted&&(t.setState({plugins:e.default()}),t.props.onMapTypeLoaded())}))}}])&&s(n.prototype,i),Object.defineProperty(n,"prototype",{writable:!1}),v}(o().Component);return d(t,"propTypes",{mapType:a().string,onMapTypeLoaded:a().func}),d(t,"defaultProps",{onMapTypeLoaded:function(){}}),t.displayName="".concat(e.displayName,"WithMapType"),t}},824:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(67294),o=r.n(n);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const u=(0,n.forwardRef)((function(e,t){var r=e.enabled,n=e.style,i=e.children;return r?o().createElement("div",{ref:t,className:"gn-overlay-container",style:a({position:"relative",width:"100%",height:"100%"},n)},i):null}))},28261:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(67294),o=r.n(n),i=r(75263),a=r.n(i),c=["id","className","style","children"];function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function p(e){var t=e.id,r=e.className,n=e.style,i=e.children,a=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,c),p=r?" "+r:"";return o().createElement(o().Fragment,null,o().createElement("div",u({},a,{id:t,className:"gn-spinner".concat(p),style:n}),o().createElement("div",null)),i)}p.propTypes={id:a().string,className:a().string,style:a().object},p.defaultProps={};const s=p},51605:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n.Z});var n=r(28261)}}]);