(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d06cf38a"],{"20a3":function(e){e.exports=JSON.parse('{"details":[{"category":{"id":"1","description":"Prediction Games","events":[{"eventId":1,"description":"Tradable Odds","image":"Limage.png","description1":"Buy and Sell ODDs of any Real Life Event","endTime":1652697300,"resolvedTime":1652698800,"isPublic":false,"isResolved":false,"balance":1234567890,"bestBuyPrice":34,"bestSellPrice":58,"eventResolutionResult":"UNRESOLVED","options":[{},{},{}],"orderBook":[{"side":"BUY","orders":[{"price":10,"quantity":5,"orderPlacedTime":16526998800,"type":"LIMIT"},{"price":12,"quantity":5,"orderPlacedTime":16526998801,"type":"LIMIT"},{"price":10,"quantity":5,"orderPlacedTime":16526998801,"type":"LIMIT"}]},{"side":"SELL","orders":[{"price ":15,"quantity":5,"orderPlacedTime":16526998800,"type":"LIMIT"},{"price":17,"quantity":5,"orderPlacedTime":16526998801,"type":"LIMIT"},{"price":11,"quantity":5,"orderPlacedTime":16526998801,"type":"LIMIT"}]}]},{"eventId":2,"description":"Bull\'s Eye","image":"Limage2.png","description1":"Predict numerical outcome of any Real Life Event","endTime":1652697300,"resolvedTime":1652698800,"isPublic":false,"isResolved":false,"balance":1234567890,"bestBuyPrice":43,"bestSellPrice":44,"eventResolutionResult":"UNRESOLVED"},{"eventId":2,"description":"Sequences","image":"Limage3.png","description1":"Predict winners, semi finalists and other line-ups in sporting events.","endTime":1652697300,"resolvedTime":1652698800,"isPublic":false,"isResolved":false,"balance":1234567890,"bestBuyPrice":43,"bestSellPrice":44,"eventResolutionResult":"UNRESOLVED"}]}},{"category":{"id":"2","description":"Comming Soon","events":[{"eventId":1,"description":"Music Quiz","image":"Limage4.png","description1":"The most unique non-googleable music game that jogs and hums your musical memory","endTime":1652697300,"resolvedTime":1652698800,"isPublic":false,"isResolved":true,"balance":1234567890,"bestBuyPrice":34,"bestSellPrice":56,"eventResolutionResult":"NO"},{"eventId":2,"description":"Travel Game","image":"Limage5.png","description1":"The most unique non-googleable music game that jogs and hums your musical memory","endTime":1652697300,"resolvedTime":1652698800,"isPublic":true,"isResolved":true,"balance":1234567890,"bestBuyPrice":43,"bestSellPrice":45,"eventResolutionResult":"YES"},{"eventId":2,"description":"Skill Games","image":"Limage6.png","description1":"Loads of absolutely cool skill games to play with your friends, and win Delphis.","endTime":1652697300,"resolvedTime":1652698800,"isPublic":true,"isResolved":true,"balance":1234567890,"bestBuyPrice":43,"bestSellPrice":45,"eventResolutionResult":"YES"}]}}]}')},"49b8":function(e,t,i){"use strict";i("b193")},"615b":function(e,t,i){},b0af:function(e,t,i){"use strict";var s=i("5530"),a=(i("a9e3"),i("0481"),i("4069"),i("615b"),i("10d2")),o=i("297c"),n=i("1c87"),r=i("58df");t["a"]=Object(r["a"])(o["a"],n["a"],a["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({"v-card":!0},n["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},a["a"].options.computed.classes.call(this))},styles:function(){var e=Object(s["a"])({},a["a"].options.computed.styles.call(this));return this.img&&(e.background='url("'.concat(this.img,'") center center / cover no-repeat')),e}},methods:{genProgress:function(){var e=o["a"].options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),i=t.tag,s=t.data;return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),e(i,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},b193:function(e,t,i){},c2b8:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("p",{staticClass:"heading mt-16  text-h4 white--text font-weight-medium"},[e._v(" Welcome to the ")]),i("p",{staticClass:"heading  text-h4 white--text font-weight-medium"},[e._v(" Delphi Land!")]),i("p",{staticClass:"sub text-body-1 white--text mt-4"},[e._v(" Get started by connecting your wallet to metamask ")]),i("div",{staticClass:"mt-11 white--text d-flex justify-space-between"},[i("div",[i("v-btn",{staticClass:"grad font-weight-medium text-body-1 px-5 py-5",style:{backgroundColor:"#FFD200",backgroundColr:"linear-gradient(to bottom, Transparente 0%,Transparente 50%,red 50%,red 100%)"},attrs:{rounded:""}},[e._v("Connect Metamask ")])],1),i("div",{staticClass:"d-flex"},[e._m(0),i("div",{staticClass:" text-h3 mr-3",style:{color:"#FCBF25",fontFamily:"Gamlangdee"}},[e._v("|")]),e._m(1),i("div",{staticClass:" text-h3 mr-15",style:{color:"#FCBF25",fontFamily:"Gamlangdee"}},[e._v("|")])])]),e._l(e.myjson,(function(t){return i("v-row",{key:t.id,style:{paddingLeft:"96px",paddingRight:"38px",marginTop:"70px"}},[i("v-col",{attrs:{cols:"12"}},e._l(t,(function(t){return i("v-row",{key:t.id},[i("v-col",{attrs:{cols:"12"}},[i("p",{staticClass:"white--text mt-16 text-h5 font-weight-medium",style:{fontFamily:"Montserrat"}},[e._v(" "+e._s(t.category.description)+" ")])]),i("v-row",{},e._l(t.category.events,(function(s){return i("v-col",{key:s.id,attrs:{cols:"12",md:"4",image:s.image}},[i("v-card",{staticClass:"pa-3 ",style:{border:"1px solid black",borderRadius:"10px",backgroundColor:"#282C4A ",height:"182px"},attrs:{width:"100%"},on:{click:function(i){return e.gotoOrderTable(t.category.description,s.description)}}},[i("v-row",[i("v-col",{staticClass:"d-flex"},[i("img",{style:{borderRadius:"10px",height:"150px",width:"125px"},attrs:{"lazy-src":"","max-height":"150","max-width":"125",src:"Limage5.png"}}),i("div",[i("p",{staticClass:"ms-1 font-weight-medium px-2  white--text text-h5"},[e._v(" "+e._s(s.description)+" ")]),i("p",{staticClass:"ms-1 font-weight-regular white--text text-md-body-1 px-2 ",style:{opacity:" 0.5"}},[e._v(" "+e._s(s.description1)+" ")])])])],1)],1)],1)})),1)],1)})),1)],1)}))],2)},a=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"mr-3"},[i("strong",{staticClass:"white--text text-h6"},[e._v("130")]),i("div",{staticClass:"white--text text-body-1"},[e._v("Delphi Coins")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"mr-3"},[i("strong",{staticClass:"white--text text-h6"},[e._v("20")]),i("div",{staticClass:"white--text text-body-1"},[e._v("Rewards")])])}],o=i("20a3"),n={name:"LandingPage",data:function(){return{myjson:o}},methods:{gotoOrderTable:function(e,t){console.log("clicked ordertable card"),console.log("category ==>",e),this.$router.push({name:"EventsListDesktop",params:{categoryDescription:e,eventDescription:t}})}}},r=n,l=(i("49b8"),i("2877")),c=i("6544"),d=i.n(c),u=i("8336"),m=i("b0af"),p=i("62ad"),g=i("0fd9"),v=Object(l["a"])(r,s,a,!1,null,null,null);t["default"]=v.exports;d()(v,{VBtn:u["a"],VCard:m["a"],VCol:p["a"],VRow:g["a"]})}}]);
//# sourceMappingURL=chunk-d06cf38a.c5cac6af.js.map