(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{62882:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return E}});r(14574);var n=r(56590),a=r(59499),i=(r(67294),r(54277),r(74048)),s=(r(1025),r(65400)),l=(r(35797),r(64749)),c=(r(7940),r(31059)),u=(r(62713),r(14321)),o=(r(29809),r(97538)),d=r(72640),h=r(45199),f=r(14416),p=function(){return(0,f.useDispatch)()},j=f.useSelector,x=r(85893),v=function(){var e=o.Z.useForm(),t=(0,d.Z)(e,1)[0],r=j((function(e){return e.satelliteSlice})),n=p(),a=h.Xz.actions.updateSatelliteParameters;return(0,x.jsx)(i.default,{style:{backgroundColor:"white",width:"100%",padding:"1rem"},children:(0,x.jsxs)(o.Z,{layout:"inline",form:t,onValuesChange:function(e){return n(a(e))},children:[(0,x.jsx)(o.Z.Item,{name:"quarter",label:"Quarter",children:(0,x.jsx)(u.Z,{picker:"quarter",defaultValue:r.quarter})}),(0,x.jsx)(o.Z.Item,{name:"onlyActive",label:"Only active",valuePropName:"checked",children:(0,x.jsx)(c.Z,{disabled:r.sortOn===h.g6.byActive,defaultChecked:r.onlyActive})}),(0,x.jsx)(o.Z.Item,{label:"Sort by",name:"sortOn",children:(0,x.jsxs)(l.default,{defaultValue:r.sortOn,children:[(0,x.jsx)(l.default.Option,{value:h.g6.byDate,children:"Date"}),(0,x.jsx)(l.default.Option,{value:h.g6.byActive,children:"Active"})]})}),(0,x.jsx)(o.Z.Item,{label:"Show as",name:"showAs",children:(0,x.jsxs)(l.default,{defaultValue:r.showAs,children:[(0,x.jsx)(l.default.Option,{value:"list",children:"List"}),(0,x.jsx)(l.default.Option,{value:"map",children:"Map"})]})}),(0,x.jsx)(o.Z.Item,{children:(0,x.jsx)(s.default,{htmlType:"reset",onClick:function(){return t.resetFields()},children:"Reset"})})]})})},m=r(124);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=function(e){var t=j((function(e){return e.satelliteSlice})),r=p(),a=h.Xz.actions.setPage,i=m.g.useSearchQuery(t),s=i.data,l=(i.error,i.isLoading);return(0,x.jsxs)("div",{style:{width:"100%",height:"100%"},children:[(0,x.jsx)(v,{}),"list"===t.showAs&&(0,x.jsx)("div",{children:(0,x.jsx)(n.default,{loading:l,style:{padding:"1rem"},header:(0,x.jsx)("h1",{children:"Satellites (Starlink)"}),dataSource:null===s||void 0===s?void 0:s.items,pagination:O(O({},null===s||void 0===s?void 0:s.pagination),{},{onChange:function(e,t){return r(a({current:e,pageSize:t}))}}),renderItem:function(t){return e.listItem(t)},grid:{gutter:16,xs:1,sm:1,md:2,lg:2,xl:2,xxl:2}})}),"map"===t.showAs&&(0,x.jsx)("canvas",{style:{width:"100%",height:"100%"},children:"map"})]})},b=(r(98620),r(10149)),w=(r(56120),r(74253)),D=r(93069),_=r(48115),k=r(80882),A=function(e){var t=e.item;return(0,x.jsx)(n.default.Item,{children:(0,x.jsx)(b.Z,{loading:null===t,active:!0,avatar:!0,children:(0,x.jsx)(n.default.Item.Meta,{avatar:(0,x.jsx)(D.Z,{className:1===t.spaceTrack.DECAYED?"error":"primary"}),title:(0,x.jsxs)("div",{children:["Norad ID: ",(0,x.jsx)("a",{href:"https://www.n2yo.com/satellite/?s="+t.spaceTrack.NORAD_CAT_ID,target:"_blank",rel:"noreferrer",children:t.spaceTrack.NORAD_CAT_ID}),(0,x.jsx)(w.Z,{type:"vertical"}),"Object ID: ",t.spaceTrack.OBJECT_ID]}),description:(0,x.jsxs)("div",{children:[(0,x.jsxs)("div",{children:[t.spaceTrack.OBJECT_NAME,(0,x.jsx)(w.Z,{type:"vertical"}),(0,x.jsx)(_.Z,{})," ",t.spaceTrack.LAUNCH_DATE||"-"," ",(0,x.jsx)(k.Z,{})," ",t.spaceTrack.DECAY_DATE||"-"]}),(0,x.jsx)("div",{children:t.spaceTrack.DECAYED?"DECAYED":(0,x.jsxs)("span",{children:["lon:\xa0",t.longitude," lat:\xa0",t.latitude," height:\xa0",t.height_km]})})]})})})})},E=function(){return(0,x.jsx)(y,{listItem:function(e){return(0,x.jsx)(A,{item:e})}})}},45301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(62882)}])}},function(e){e.O(0,[903,774,888,179],(function(){return t=45301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);