(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{172:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(9),i=n.n(c),l=n(25),r=n(11),s=n(13),m=n(14),u=n(16),d=n(15),p=n(10),h=(n(89),n(50),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return console.log("search:",this.props),console.log("location",this.props.location),o.a.createElement("div",{className:"searchTab"},o.a.createElement(p.e,{onCancel:function(){console.log("111")},onFocus:function(){e.props.history.push("/JumpChange")},className:"search-bar",placeholder:"\u5bfb\u627e\u5b9d\u8d1d\u5e97\u94fa",ref:function(t){return e.autoFocusInst=t}}))}}]),n}(o.a.Component)),g=Object(r.g)(h),f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={selectedTab:"blueTab"},a}return Object(m.a)(n,[{key:"render",value:function(){var e=this;console.log("home:",this.props);var t=this.props.location.pathname;return o.a.createElement("div",{style:{position:"fixed",width:"100%",bottom:0}},o.a.createElement(p.f,{unselectedTintColor:"#949494",tintColor:"#5D656B",barTintColor:"white"},o.a.createElement(p.f.Item,{icon:o.a.createElement("i",{className:"iconfont icon-shouye"}),selectedIcon:o.a.createElement("i",{className:"iconfont icon-weibiaoti1"}),title:"\u9996\u9875",key:"home",selected:"/home"===t,onPress:function(){e.props.history.push("/home")},"data-seed":"logId1"}),o.a.createElement(p.f.Item,{icon:o.a.createElement("i",{className:"iconfont icon-gouwuche"}),selectedIcon:o.a.createElement("i",{className:"iconfont icon-gouwuche1"}),title:"\u8d2d\u7269\u8f66",key:"cart",selected:"/cart"===t,onPress:function(){e.props.history.push("/cart")},"data-seed":"logId1"}),o.a.createElement(p.f.Item,{icon:o.a.createElement("i",{className:"iconfont icon-dingdanliebiao"}),selectedIcon:o.a.createElement("i",{className:"iconfont icon-icon-test"}),title:"\u8ba2\u5355\u5217\u8868",key:"orderlist",selected:"/orderlist"===t,onPress:function(){e.props.history.push("/orderlist")},"data-seed":"logId1"}),o.a.createElement(p.f.Item,{icon:o.a.createElement("i",{className:"iconfont icon-wode"}),selectedIcon:o.a.createElement("i",{className:"iconfont icon-wodejianying"}),title:"\u6211\u7684\u6dd8\u5b9d",key:"me",selected:"/me"===t,onPress:function(){e.props.history.push("/me")},"data-seed":"logId1"}),o.a.createElement(p.f.Item,{icon:o.a.createElement("i",{className:"iconfont icon-weibiaoti5"}),selectedIcon:o.a.createElement("i",{className:"iconfont icon-gengduo1"}),title:"\u66f4\u591a",key:"more",selected:"/more"===t,onPress:function(){e.props.history.push("/more")},"data-seed":"logId1"})))}}]),n}(o.a.Component),E=Object(r.g)(f),b=(n(172),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(p.g,null,o.a.createElement(p.a,{autoplay:!0,infinite:!0,beforeChange:function(e,t){return console.log("slide from ".concat(e," to ").concat(t))},afterChange:function(e){return console.log("slide to",e)}},o.a.createElement("img",{src:"https://gw.alicdn.com/imgextra/i1/47/O1CN01W5pthF1CDZFCQ9VAh_!!47-0-lubanu.jpg",alt:"",style:{width:"100%",verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}}),o.a.createElement("img",{src:"https://img.alicdn.com/imgextra/i3/27/O1CN019CAYMI1C4PK6mp9qX_!!27-0-luban.jpg",alt:"",style:{width:"100%",verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}}),o.a.createElement("img",{src:"https://gw.alicdn.com/imgextra/i4/78/O1CN01qZs3UU1CRlWJn1ZV1_!!78-0-lubanu.jpg",alt:"",style:{width:"100%",verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}}),o.a.createElement("img",{src:"https://img.alicdn.com/imgextra/i1/20/O1CN01GptQEd1C1CYDkX44I_!!20-0-luban.jpg",alt:"",style:{width:"100%",verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}}),o.a.createElement("img",{src:"https://gw.alicdn.com/imgextra/i3/67/O1CN01UPyUt41CMjANoqT1h_!!67-0-lubanu.jpg",alt:"",style:{width:"100%",verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}}),o.a.createElement("img",{src:"https://gw.alicdn.com/imgextra/i5/44/O1CN01Y7eeN61CE1dk6UnSW_!!48-0-lubanu.jpg",alt:"",style:{width:"100%",verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}})))}}]),n}(o.a.Component)),v=Array.from(new Array(12)).map((function(){return{icon:"https://img.alicdn.com/imgextra/i1/279512537/O1CN01vCErSe1UbzRoZgOr8-279512537.jpg_760x760Q50s50.jpg_.webp",text:"\u6f6e\u5b8f\u57fa\u73e0\u5b9d \u82b1\u4e1d\u7cd6\u679c \u9ec418k\u91d1\u624b\u94fe\u73cd\u73e0\u624b\u9970\u5973\u5f69\u91d1\u4f50\u85e4\u5927\u8054\u540d",money:1379,num:40}})),y=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return console.log(this.props),o.a.createElement("div",{style:{width:"100%"}},o.a.createElement("div",{className:"sub-title",style:{color:"#FF4E22",textAlign:"center",height:"50px",lineHeight:"50px"}},"\u2764 \u54c1\u8d28\u597d\u7269 \u2764"),o.a.createElement(p.b,{data:v,itemStyle:{height:"200px",width:"171px",margin:"9px 4.5px 0 4.5px"},onClick:function(){e.props.history.push("/detail")},columnNum:2,renderItem:function(e){return o.a.createElement("div",null,o.a.createElement("img",{src:e.icon,style:{width:"80%",border:"node"},alt:""}),o.a.createElement("div",{style:{color:"#888",fontSize:"7px",margin:"3px"}},o.a.createElement("span",null,e.text),o.a.createElement("br",null),o.a.createElement("span",{style:{color:"#FF852A"}},"\uffe5 ",e.money," "),o.a.createElement("span",null," ",e.num,"\u4eba\u5df2\u8d2d\u4e70")))}}),o.a.createElement("div",{className:"sub-title",style:{color:"#FF4E22",textAlign:"center",height:"50px",lineHeight:"50px"}},"\u66f4\u591a\u597d\u7269\uff0c\u656c\u8bf7\u671f\u5f85......"),o.a.createElement("div",{style:{height:"50px"}}))}}]),n}(a.Component),w=Object(r.g)(y),C=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).FocusChange=function(e){console.log(e)},e}return Object(m.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(g,null),o.a.createElement(b,null),o.a.createElement(w,null),o.a.createElement(E,null))}}]),n}(a.Component),j=function(){return o.a.createElement("div",null,"\u8d2d\u7269\u8f66",o.a.createElement(E,null))},O=function(){return o.a.createElement("div",null,"\u8ba2\u5355\u5217\u8868",o.a.createElement(E,null))},x=function(){return o.a.createElement("div",null,"\u6211\u7684",o.a.createElement(E,null))},N=(n(173),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={value:"\u7f8e\u98df"},e.onChange=function(t){console.log("onchange"),e.setState({value:t})},e.clear=function(){e.setState({value:""})},e.handleClick=function(){e.manualFocusInst.focus()},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(p.e,{placeholder:"\u5b9d\u8d1d",onSubmit:function(e){return console.log(e,"onSubmit")},onClear:function(e){return console.log(e,"onClear")},onFocus:function(){return console.log("onFocus")},onBlur:function(){return console.log("onBlur")},onCancel:function(){return e.props.history.goBack()},showCancelButton:!0,onChange:this.onChange}))}}]),n}(o.a.Component)),I=Object(r.g)(N),k=(n(174),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={selectedTab:"blueTab"},a}return Object(m.a)(n,[{key:"render",value:function(){return console.log("home:",this.props),o.a.createElement("div",{className:"bottom"},o.a.createElement("div",{style:{position:"fixed",width:"100%",bottom:0}},o.a.createElement(p.f,{unselectedTintColor:"#949494",tintColor:"#5D656B",barTintColor:"white"},o.a.createElement(p.f.Item,{icon:o.a.createElement("i",{className:"iconfont icon-dianpu"}),selectedIcon:o.a.createElement("i",{className:"iconfont icon-dianpu2"}),onPress:function(){console.log("\u5e97\u94fa")},title:"\u5e97\u94fa",key:"dianpu"}),o.a.createElement(p.f.Item,{icon:o.a.createElement("i",{className:"iconfont icon-kefu3"}),selectedIcon:o.a.createElement("i",{className:"iconfont icon-kefu3"}),onPress:function(){console.log("\u5ba2\u670d")},title:"\u5ba2\u670d",key:"kefu","data-seed":"logId"}),o.a.createElement(p.f.Item,{icon:o.a.createElement("i",{className:"iconfont icon-xingxing"}),selectedIcon:o.a.createElement("i",{className:"iconfont icon-shoucang"}),onPress:function(){console.log("\u6536\u85cf")},title:"\u6536\u85cf",key:"shoucang","data-seed":"logId"}),o.a.createElement(p.f.Item,{icon:o.a.createElement("i",{className:"iconfont icon-xingxing"}),selectedIcon:o.a.createElement("i",{className:"iconfont icon-shoucang"}),onPress:function(){console.log("\u6dfb\u52a0\u8d2d\u7269\u8f66")},title:"\u6dfb\u52a0\u8d2d\u7269\u8f66",key:"addcart","data-seed":"logId"}),o.a.createElement(p.f.Item,{icon:o.a.createElement("i",{className:"iconfont icon-xingxing"}),selectedIcon:o.a.createElement("i",{className:"iconfont icon-shoucang"}),onPress:function(){console.log("\u7acb\u5373\u8d2d\u4e70")},title:"\u7acb\u5373\u8d2d\u4e70",key:"buynow","data-seed":"logId"}))))}}]),n}(o.a.Component)),A=Object(r.g)(k),S=(n(175),Object(r.g)((function(e){return o.a.createElement("div",null,o.a.createElement("div",{style:{position:"fixed",top:"0",width:"100%"}},o.a.createElement(p.d,{style:{background:"none"},mode:"light",icon:o.a.createElement(p.c,{type:"left"}),onLeftClick:function(){return e.history.goBack()}})),o.a.createElement("img",{src:"https://img.alicdn.com/imgextra/i1/279512537/O1CN01vCErSe1UbzRoZgOr8-279512537.jpg_760x760Q50s50.jpg_.webp",alt:"",style:{width:"100%",verticalAlign:"top"}}),o.a.createElement("div",{style:{margin:"5px 10px",fontSize:"1em"}},"\u6f6e\u5b8f\u57fa \u82b1\u4e1d\u7cd6\u679c \u9ec418k\u91d1\u624b\u94fe\u73cd\u73e0\u624b\u9970\u5f69\u91d1\u4f50\u85e4\u5927\u8054\u540d"),o.a.createElement(A,null))}))),F=function(){return o.a.createElement("div",null,"\u66f4\u591a",o.a.createElement(E,null))},P=function(){return o.a.createElement(l.a,null,o.a.createElement(r.d,null,o.a.createElement(r.b,{exact:!0,path:"/",component:C}),o.a.createElement(r.b,{path:"/home",component:C}),o.a.createElement(r.b,{path:"/cart",component:j}),o.a.createElement(r.b,{path:"/orderlist",component:O}),o.a.createElement(r.b,{path:"/me",component:x}),o.a.createElement(r.b,{path:"/more",component:F}),o.a.createElement(r.b,{path:"/JumpChange",component:I}),o.a.createElement(r.b,{path:"/detail",component:S}),o.a.createElement(r.b,{render:function(){return o.a.createElement(r.a,{to:"/"})}})))};i.a.render(o.a.createElement(P,null),document.getElementById("root"))},89:function(e,t,n){},96:function(e,t,n){e.exports=n(176)}},[[96,1,2]]]);
//# sourceMappingURL=main.96ffcfc3.chunk.js.map