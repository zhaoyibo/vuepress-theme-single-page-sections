(window.webpackJsonp=window.webpackJsonp||[]).push([[9,15],{155:function(n,t,e){},156:function(n,t,e){"use strict";var i=e(155);e.n(i).a},157:function(n,t,e){"use strict";e.r(t);var i={name:"Icon",props:["name","color","url","title","text","scale"],computed:{getColor:function(){return this.$themeConfig&&this.$themeConfig.social&&this.$themeConfig.social.monochrome_icons?null:this.color}}},o=(e(156),e(6)),r=Object(o.a)(i,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("a",{attrs:{href:n.url,target:"_blank",title:n.title,"aria-label":n.title,rel:"noopener noreferrer"}},[e("span",{staticClass:"icon"},[e("v-icon",{attrs:{name:n.name,color:n.getColor,scale:n.scale?n.scale:2}})],1),n._v("\n  "+n._s(n.text)+"\n")])}),[],!1,null,"638b9858",null);t.default=r.exports},282:function(n,t,e){"use strict";e.r(t);var i=e(157);e(18).a.register({"brands/linkedin-in":{width:448,height:512,paths:[{d:"M100.3 448h-92.9v-299.1h92.9v299.1zM53.8 108.1c-29.7 0-53.8-24.6-53.8-54.3 0-29.7 24.1-53.8 53.8-53.8s53.8 24.1 53.8 53.8c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7v-145.6c0-34.7-0.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7v148.1h-92.8v-299.1h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3v164.3h-0.1z"}]}});var o={name:"LinkedIn",props:["id","scale"],components:{Icon:i.default},computed:{iconName:function(){return"brands/linkedin-in"},iconColor:function(){return"#0077B5"},url:function(){return"https://www.linkedin.com/in/".concat(this.id,"/")}}},r=e(6),c=Object(r.a)(o,(function(){var n=this.$createElement;return(this._self._c||n)("icon",{attrs:{name:this.iconName,color:this.iconColor,url:this.url,scale:this.scale,title:"LinkedIn"}})}),[],!1,null,null,null);t.default=c.exports}}]);