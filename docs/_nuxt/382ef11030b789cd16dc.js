(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{207:function(e,t,n){var content=n(215);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("4397ad24",content,!0,{sourceMap:!1})},214:function(e,t,n){"use strict";var o=n(207);n.n(o).a},215:function(e,t,n){(t=n(25)(!1)).push([e.i,'h2{font-family:Mabry Pro,Arial,sans-serif;font-size:48px;line-height:58px;font-weight:500;color:#3e3c43;letter-spacing:0;margin:0 0 15px}@media (max-width:1024px){h2{font-size:7.8125vmin;line-height:9.0625vmin;margin:0 0 4.6875vmin}}h3{font-family:Mabry Pro,Arial,sans-serif;font-size:32px;line-height:58px;font-weight:500;color:#3e3c43;letter-spacing:0;margin:0}@media (max-width:1024px){h3{font-size:6.875vmin;line-height:8.125vmin;margin:0 0 3.75vmin}}.form__wrapper{display:grid;grid-template-columns:511px 1fr;grid-template-rows:1fr;grid-column-gap:76px;grid-row-gap:0;padding:113px 0 0 27px}@media (max-width:1024px){.form__wrapper{display:flex;grid-template-columns:1fr;padding:31.25vmin .625vmin 6.875vmin}}.form__group{padding:20px 0 0}@media (max-width:1024px){.form__group{padding:0;width:100%}}.form__title{font-family:Mabry Pro,Arial,sans-serif;font-size:91px;line-height:83px;color:#3e3c43;letter-spacing:0;margin:0 0 6px -5px}@media (max-width:1024px){.form__title{font-size:13.125vmin;line-height:12.5vmin;text-align:center;margin:0 0 1.875vmin}}.form__text{font-size:21px;line-height:29px;color:#44464c;letter-spacing:0;margin:0 -20px 51px 0}@media (max-width:1024px){.form__text{font-size:5vmin;line-height:6.875vmin;text-align:center;margin:0 0 17.5vmin}}.form__text--signin{margin:0 0 80px}@media (max-width:1024px){.form__text--signin{margin:0 0 24.375vmin}}.form__text--getaccess{margin:0 0 51px}@media (max-width:1024px){.form__text--getaccess{margin:0 0 17.5vmin}}.form__inputs{display:flex;flex-direction:column}.form__input{background:#fff;border-radius:4px;padding:16px 24px 17px;font-family:Mabry Pro,Arial,sans-serif;font-size:21px;color:#3e3c43;letter-spacing:0;border:none;margin:0 0 20px}@media (max-width:1024px){.form__input{width:100%;border-radius:1.25vmin;padding:4.375vmin 3.125vmin 5.3125vmin;font-size:6.25vmin;letter-spacing:0;text-align:center;margin:0 0 3.125vmin}}.form__input::-webkit-input-placeholder{color:#b5b0be}.form__input::-moz-placeholder{color:#b5b0be}.form__input:-ms-input-placeholder{color:#b5b0be}.form__input::-ms-input-placeholder{color:#b5b0be}.form__input::placeholder{color:#b5b0be}@media (max-width:1024px){.form__input::-webkit-input-placeholder{opacity:.2;color:#000647}.form__input::-moz-placeholder{opacity:.2;color:#000647}.form__input:-ms-input-placeholder{opacity:.2;color:#000647}.form__input::-ms-input-placeholder{opacity:.2;color:#000647}.form__input::placeholder{opacity:.2;color:#000647}}.form__input:focus{outline:none}.form__image{width:546px}@media (max-width:1024px){.form__image{display:none}}.form__button{font-family:Mabry Pro,Arial,sans-serif;font-size:21px;color:#fff;letter-spacing:0;text-align:center;padding:16px 24px 17px;background:#ff8389;border-radius:4px;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;transition:all .15s ease}@media (max-width:1024px){.form__button{font-size:6.25vmin;padding:4.6875vmin 9.375vmin 5vmin;border-radius:1.25vmin}}.form__button:hover{background:#ff959b}.form__button:focus{outline:none}.form__checkboxes{padding:5px 13px 0;margin:0 0 50px}@media (max-width:1024px){.form__checkboxes{padding:4.0625vmin 0 0 1.875vmin;margin:0 0 6.25vmin}}.form__checkbox label{position:relative;display:flex;align-items:center;font-size:21px;color:#3e3c43;letter-spacing:0}@media (max-width:1024px){.form__checkbox label{font-size:5vmin;line-height:6.25vmin;display:grid;grid-template-columns:7.5vmin 1fr;grid-template-rows:auto;grid-column-gap:4.375vmin;grid-row-gap:16px}}.form__checkbox label a{color:#3e3c43}.form__checkbox label:before{content:"";width:24px;height:24px;background:#fff;border-radius:3px;display:block;margin:0 17px 0 0}@media (max-width:1024px){.form__checkbox label:before{width:7.5vmin;height:7.5vmin;border-radius:.9375vmin;margin:0}}.form__checkbox label:after{content:"";width:12px;height:12px;border-radius:3px;position:absolute;left:6px;top:7px}@media (max-width:1024px){.form__checkbox label:after{width:3.75vmin;height:3.75vmin;border-radius:.9375vmin;left:1.875vmin}}.form__checkbox input{display:none}.form__checkbox input[type=checkbox]:checked+label:after{background:#de9cd7}.form__checkbox:not(:last-child){margin:0 0 21px}.form__reset{font-family:Mabry Pro,Arial,sans-serif;font-size:19px;color:#959299;letter-spacing:0;text-align:center;margin:24px 0 0;cursor:pointer}@media (max-width:1024px){.form__reset{font-size:5vmin;margin:5.9375vmin 0 0}}',""]),e.exports=t},220:function(e,t,n){"use strict";n(72),n(20);var o=n(2),r={created:function(){this.$route.query.code&&(this.type="reset")},props:{type:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null}},data:function(){return{login:{email:null,password:null,error:null,newPass:null,newPassRepeat:null},signUpInputs:[{type:"text",placeholder:"Name",id:"name"},{type:"email",placeholder:"Work Email",id:"email"},{type:"password",placeholder:"Password",id:"pass"}],signInInputs:[{type:"email",placeholder:"Your Email",id:"email"},{type:"password",placeholder:"Password",id:"pass"}],getAccessInputs:[{type:"text",placeholder:"Name",id:"mce-NAME",name:"NAME"},{type:"email",placeholder:"Work Email",id:"mce-EMAIL",name:"EMAIL",required:!0}]}},methods:{changePass:function(){var e=this;this.$axios.$post("".concat("https://api.moderne.st","/auth/reset-password"),{code:this.$route.query.code,password:this.login.newPass,passwordConfirmation:this.login.newPassRepeat}).then((function(){e.type="signin"})).catch((function(t){e.error=t.response}))},resetPass:function(){var e=this;this.$axios.$post("".concat("https://api.moderne.st","/auth/forgot-password"),{email:this.login.email}).then((function(t){t.ok&&(e.type="forgetDone")})).catch((function(){e.type="forgetDone"}))},postLogin:function(){var e=this;this.$axios.$post("".concat("https://api.moderne.st","/auth/local"),{identifier:this.login.email,password:this.login.password}).then((function(t){var n=t.jwt;e.$axios.setToken(n,"Bearer"),function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$cookies.set("moderne-token",n,{domain:".moderne.st"});case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()().then((function(){e.login.email=null,e.login.password=null,e.login.error=null,window.location.replace("https://app.moderne.st")}))})).catch((function(){}))},getUsers:function(){this.$axios.$get("".concat("https://api.moderne.st","/api/user")).then((function(e){}))}}},l=(n(214),n(13)),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form"},[n("div",{staticClass:"container"},[n("div",{staticClass:"form__wrapper"},[n("div",{staticClass:"form__group"},[n("div",{staticClass:"form__title"},[e._v(e._s(e.title))]),n("div",{staticClass:"form__text",class:{"form__text--signin":"signin"===e.type||"forgot"===e.type||"forgotDone"===e.type,"form__text--getaccess":"getaccess"===e.type}},[e._v(e._s(e.text))]),"signup"===e.type?n("div",{staticClass:"form__inputs"},[e._l(e.signUpInputs,(function(e,t){return n("input",{key:t,staticClass:"form__input",attrs:{type:e.type,id:e.id,placeholder:e.placeholder}})})),n("div",{staticClass:"form__checkboxes"},[n("div",{staticClass:"form__checkbox"},[n("input",{attrs:{type:"checkbox",id:"rules"}}),n("label",{attrs:{for:"rules"}},[n("span",[e._v("I agree to Moderne "),n("nuxt-link",{attrs:{to:"#"}},[e._v("Terms")]),e._v(" and "),n("nuxt-link",{attrs:{to:"/policy"}},[e._v("Privacy Policy")])],1)])]),e._m(0)]),n("button",{staticClass:"form__button"},[e._v("Get Started Now")])],2):e._e(),"signin"===e.type?n("form",{staticClass:"form__inputs",on:{submit:function(t){return t.preventDefault(),e.postLogin.apply(null,arguments)}}},[null!==e.login.error?n("span",{staticClass:"form__error"},[e._v(e._s(e.login.error))]):e._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:e.login.email,expression:"login.email"}],staticClass:"form__input",attrs:{id:"email",type:"email",placeholder:"Work Email",required:"",autocomplete:"email"},domProps:{value:e.login.email},on:{input:function(t){t.target.composing||e.$set(e.login,"email",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.login.password,expression:"login.password"}],staticClass:"form__input",attrs:{id:"password",type:"password",placeholder:"Password",required:"",autocomplete:"password"},domProps:{value:e.login.password},on:{input:function(t){t.target.composing||e.$set(e.login,"password",t.target.value)}}}),n("button",{staticClass:"form__button",attrs:{type:"submit"}},[e._v("Sign In")]),n("div",{staticClass:"form__reset",on:{click:function(t){e.type="forgot"}}},[e._v("Forgot Password?")])]):e._e(),"forgot"===e.type?n("form",{staticClass:"form__inputs",on:{submit:function(t){return t.preventDefault(),e.resetPass.apply(null,arguments)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.login.email,expression:"login.email"}],staticClass:"form__input",attrs:{type:"email",placeholder:"Your Email",required:"",autocomplete:"email"},domProps:{value:e.login.email},on:{input:function(t){t.target.composing||e.$set(e.login,"email",t.target.value)}}}),n("button",{staticClass:"form__button",attrs:{type:"submit"}},[e._v("Reset my password")]),n("div",{staticClass:"form__reset",on:{click:function(t){e.type="signin"}}},[e._v("Go back")])]):e._e(),"reset"===e.type?n("form",{staticClass:"form__inputs",on:{submit:function(t){return t.preventDefault(),e.changePass.apply(null,arguments)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.login.newPass,expression:"login.newPass"}],staticClass:"form__input",attrs:{type:"password",placeholder:"New password",required:""},domProps:{value:e.login.newPass},on:{input:function(t){t.target.composing||e.$set(e.login,"newPass",t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.login.newPassRepeat,expression:"login.newPassRepeat"}],staticClass:"form__input",attrs:{type:"password",placeholder:"Repeat password",required:""},domProps:{value:e.login.newPassRepeat},on:{input:function(t){t.target.composing||e.$set(e.login,"newPassRepeat",t.target.value)}}}),n("button",{staticClass:"form__button",attrs:{type:"submit"}},[e._v("Change new password")])]):e._e(),"forgetDone"===e.type?n("form",{staticClass:"form__inputs"},[n("p",[e._v("Sent! Check your inbox")])]):e._e(),"getaccess"===e.type?n("form",{staticClass:"validate form__inputs",attrs:{id:"mc-embedded-subscribe-form",action:"https://moderne.us3.list-manage.com/subscribe/post?u=82e7a91b930da0b541f0ae17d&id=5efba2eadb",method:"post",name:"mc-embedded-subscribe-form",target:"_blank",novalidate:""}},[e._l(e.getAccessInputs,(function(e,t){return n("input",{key:t,staticClass:"form__input",class:{email:"email"===e.type,required:e.required},attrs:{type:e.type,id:e.id,placeholder:e.placeholder,name:e.name}})})),e._m(1),n("button",{staticClass:"form__button",attrs:{type:"submit"}},[e._v("Request a demo")])],2):e._e()]),n("img",{staticClass:"form__image",attrs:{src:"images/illustrations/login-head.png",srcset:"images/illustrations/login-head@2x.png 2x"}})])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"form__checkbox"},[t("input",{attrs:{type:"checkbox",id:"news"}}),t("label",{attrs:{for:"news"}},[t("span",[this._v("I agree to receive Moderne news and updates.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{position:"absolute",left:"-5000px"},attrs:{"aria-hidden":"true"}},[t("input",{attrs:{type:"text",name:"b_82e7a91b930da0b541f0ae17d_5efba2eadb",tabindex:"-1",value:""}})])}],!1,null,null,null);t.a=component.exports},247:function(e,t,n){var content=n(332);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("78995395",content,!0,{sourceMap:!1})},331:function(e,t,n){"use strict";var o=n(247);n.n(o).a},332:function(e,t,n){(t=n(25)(!1)).push([e.i,"h2[data-v-17923306]{font-family:Mabry Pro,Arial,sans-serif;font-size:48px;line-height:58px;font-weight:500;color:#3e3c43;letter-spacing:0;margin:0 0 15px}@media (max-width:1024px){h2[data-v-17923306]{font-size:7.8125vmin;line-height:9.0625vmin;margin:0 0 4.6875vmin}}h3[data-v-17923306]{font-family:Mabry Pro,Arial,sans-serif;font-size:32px;line-height:58px;font-weight:500;color:#3e3c43;letter-spacing:0;margin:0}@media (max-width:1024px){h3[data-v-17923306]{font-size:6.875vmin;line-height:8.125vmin;margin:0 0 3.75vmin}}.pricing[data-v-17923306]{padding:203px 0 0}",""]),e.exports=t},415:function(e,t,n){"use strict";n.r(t);var o={components:{"section-signin":n(220).a},head:function(){return{title:"Sign In"}}},r=(n(331),n(13)),component=Object(r.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"signin"},[t("section-signin",{attrs:{title:"Sign In",text:"Enter your details below",type:"signin"}})],1)}),[],!1,null,"17923306",null);t.default=component.exports}}]);