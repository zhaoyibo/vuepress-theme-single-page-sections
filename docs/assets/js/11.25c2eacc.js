(window.webpackJsonp=window.webpackJsonp||[]).push([[11,18],{154:function(t,e,n){},155:function(t,e,n){"use strict";var r=n(154);n.n(r).a},156:function(t,e,n){"use strict";n.r(e);var r={name:"Icon",props:["name","color","url","title","text","scale"],computed:{getColor:function(){return this.$themeConfig&&this.$themeConfig.social&&this.$themeConfig.social.monochrome_icons?null:this.color}}},o=(n(155),n(18)),c=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:t.url,target:"_blank",title:t.title,"aria-label":t.title,rel:"noopener noreferrer"}},[n("span",{staticClass:"icon"},[n("v-icon",{attrs:{name:t.name,color:t.getColor,scale:t.scale?t.scale:2}})],1),t._v("\n  "+t._s(t.text)+"\n")])}),[],!1,null,"613dcefc",null);e.default=c.exports},285:function(t,e,n){"use strict";n.r(e);var r=n(156);n(32).a.register({"brands/orcid":{width:512,height:512,paths:[{d:"M294.8 188.2c58.1 0 84.7 35.3 84.7 76.9 0 25.6-15.5 76.9-83.1 76.9h-47.5v-153.8h45.9zM256 8c137 0 248 111 248 248s-111 248-248 248-248-111-248-248 111-248 248-248zM175.2 368.8v-207.5h-29.8v207.5h29.8zM160.3 137.6c10.8 0 19.5-8.8 19.6-19.6 0-10.8-8.8-19.6-19.6-19.6s-19.6 8.8-19.6 19.6 8.8 19.6 19.6 19.6v0zM300 369c68.4 0 110-50.6 110-103.9 0-49-33.7-103.9-110.4-103.9h-80.6v207.7h81z"}]}});var o={name:"ORCID",props:["id","scale"],components:{Icon:r.default},computed:{iconName:function(){return"brands/orcid"},iconColor:function(){return"#a6ce39"},url:function(){return"https://www.researchgate.net/profile/".concat(this.id)}}},c=n(18),i=Object(c.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("icon",{attrs:{name:this.iconName,color:this.iconColor,url:this.url,scale:this.scale,title:"ORCID"}})}),[],!1,null,null,null);e.default=i.exports}}]);