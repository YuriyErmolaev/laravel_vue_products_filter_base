"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25],{279:(e,t,i)=>{i.d(t,{Z:()=>o});var r=i(588);function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function a(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(a=r.key,o=void 0,o=function(e,t){if("object"!==n(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!==n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(a,"string"),"symbol"===n(o)?o:String(o)),r)}var a,o}const o=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,i,n;return t=e,i=[{key:"getList",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0,o=this.url;return r.Z.get(o,{params:{count:e,page:t,sort:i,dir:n,filter:a}})}},{key:"getById",value:function(e){return r.Z.get(this.url+"/"+e,{params:{id:e}})}},{key:"get",value:function(e){return r.Z.get(e)}}],i&&a(t.prototype,i),n&&a(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())},880:(e,t,i)=>{i.d(t,{Z:()=>a});var r=i(645),n=i.n(r)()((function(e){return e[1]}));n.push([e.id,".styled-table[data-v-6fc34d2a]{border-collapse:collapse;width:100%}.styled-table td[data-v-6fc34d2a]{border-bottom:1px solid #ccc;padding:5px 10px}td.heading[data-v-6fc34d2a]{background-color:#2d499d;border-color:#2d499d;color:#fff;cursor:pointer;font-weight:700;padding:15px 10px}.heading.active[data-v-6fc34d2a]{background-color:#4c6ac7}",""]);const a=n},153:(e,t,i)=>{i.d(t,{Z:()=>a});var r=i(645),n=i.n(r)()((function(e){return e[1]}));n.push([e.id,".btn[data-v-494ef8d3]{margin:0 10px 10px 0}.filters[data-v-494ef8d3]{margin-bottom:20px}.form-check-input[data-v-494ef8d3],.form-label[data-v-494ef8d3]{cursor:pointer}.form-check-input[data-v-494ef8d3]{margin-right:5px}.form-label[data-v-494ef8d3]{margin-right:10px}.input_area[data-v-494ef8d3]{margin-bottom:20px}",""]);const a=n},25:(e,t,i)=>{i.r(t),i.d(t,{default:()=>re});var r=i(821),n=function(e){return(0,r.dD)("data-v-494ef8d3"),e=e(),(0,r.Cn)(),e},a={class:"card card-primary card-outline"},o={class:"card-body"},l={class:"filters"},s={class:"row"},c={class:"col-lg-6 col-md-12"},u={class:"mb-3"},d=n((function(){return(0,r._)("label",{for:"name_filter",class:"form-label"},"Name",-1)})),f={class:"mb-3"},p=n((function(){return(0,r._)("label",{class:"form-label",for:"one_color"},"Red",-1)})),m=n((function(){return(0,r._)("label",{class:"form-label",for:"two_color"},"Green",-1)})),_=n((function(){return(0,r._)("label",{class:"form-label",for:"three_color"},"Blue",-1)})),g=n((function(){return(0,r._)("label",{class:"form-label",for:"four_color"},"Yellow",-1)})),h={class:"mb-3"},v=n((function(){return(0,r._)("label",{class:"form-label",for:"one_size"},"XS",-1)})),b=n((function(){return(0,r._)("label",{class:"form-label",for:"two_size"},"S",-1)})),y=n((function(){return(0,r._)("label",{class:"form-label",for:"three_size"},"M",-1)})),w=n((function(){return(0,r._)("label",{class:"form-label",for:"four_size"},"L",-1)})),k=n((function(){return(0,r._)("label",{class:"form-label",for:"five_size"},"XL",-1)})),z=n((function(){return(0,r._)("label",{class:"form-label",for:"six_size"},"XXL",-1)})),x={class:"col-lg-6 col-md-12"},D={class:"mb-3"},C=n((function(){return(0,r._)("label",{for:"code_filter",class:"form-label"},"Code",-1)})),U={class:"row"},I={class:"col-lg-6 col-md-12"},P=n((function(){return(0,r._)("label",{for:"min_price_filter",class:"form-label"},"Min price",-1)})),V={class:"col-lg-6 col-md-12"},Z=n((function(){return(0,r._)("label",{for:"max_price_filter",class:"form-label"},"Max price",-1)})),S={class:"input_area"},G=n((function(){return(0,r._)("label",{for:"name_filter",class:"form-label"},"Description",-1)}));var j=i(279),L={class:"styled-table"},T=["data-code","data-dir","data-index","onClick"],N=["src"],Y=["href"];const E={name:"Table",data:function(){return{}},methods:{filterFields:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Object.keys(t).filter((function(t){return!1===e.columns.includes(t)})).forEach((function(e){return delete t[e]})),t},sortColumn:function(e,t,i){for(var r in this.headers)this.headers[r].is_sort=!1;t="desc"===t?"asc":"desc",this.headers[i].dir=t,this.headers[i].is_sort=!0,this.$emit("updateItems",1,e,t)}},props:["headers","items","columns","route_create_name","route_edit_name"],mounted:function(){}};var F=i(379),H=i.n(F),M=i(880),O={insert:"head",singleton:!1};H()(M.Z,O);M.Z.locals;var R=i(744);const K=(0,R.Z)(E,[["render",function(e,t,i,n,a,o){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("table",L,[(0,r._)("tr",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.headers,(function(e,t){return(0,r.wg)(),(0,r.iD)("td",{class:(0,r.C_)([e.is_sort?"active":"","heading"]),"data-code":e.code,"data-dir":e.dir,"data-index":t,onClick:function(i){return o.sortColumn(e.code,e.dir,t)},key:e.title},[(0,r.Uk)((0,r.zw)(e.title)+" ",1),(0,r._)("i",{class:(0,r.C_)(["bi","asc"===e.dir?"bi-arrow-up-short":"bi-arrow-down-short"])},null,2)],10,T)})),128))]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.items,(function(e){return(0,r.wg)(),(0,r.iD)("tr",{key:e.id},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.headers,(function(t,i){return(0,r.wg)(),(0,r.iD)("td",{key:i},["img"===t.type?((0,r.wg)(),(0,r.iD)("img",{key:0,alt:"",style:{"max-height":"90px"},src:e[t.code]},null,8,N)):"price"===t.code?((0,r.wg)(),(0,r.iD)(r.HY,{key:1},[(0,r.Uk)((0,r.zw)(e[t.code]/100),1)],64)):"url"===t.type?((0,r.wg)(),(0,r.iD)("a",{key:2,href:e[t.url]},(0,r.zw)(e[t.code]),9,Y)):"badge"===t.type?((0,r.wg)(),(0,r.iD)("span",{key:3,class:(0,r.C_)(["badge",e[t.code].class])},(0,r.zw)(e[t.code].title),3)):((0,r.wg)(),(0,r.iD)(r.HY,{key:4},[(0,r.Uk)((0,r.zw)(e[t.code]),1)],64))])})),128))])})),128))])])}],["__scopeId","data-v-6fc34d2a"]]);var X={class:"mt-3","aria-label":"Page navigation"},$={class:"pagination"},q={key:0,class:"page-item"},A=[(0,r._)("span",{"aria-hidden":"true"},"«",-1)],B=["onClick"],W={key:1,class:"page-item"},J=[(0,r._)("span",{"aria-hidden":"true"},"»",-1)];const Q={props:{pagination:{type:Object},offset:{type:Number,default:4}},computed:{pagesNumber:function(){if(!this.pagination.to)return[];var e=this.pagination.current_page-this.offset;e<1&&(e=1);var t=e+2*this.offset;t>=this.pagination.last_page&&(t=this.pagination.last_page);for(var i=[],r=e;r<=t;r++)i.push(r);return i}},methods:{changePage:function(e){this.$emit("paginate",e)}}},ee={data:function(){return{title:{},items:{},offset:null,headers:{},per_page:null,sort:null,dir:null,add:"",edit:"",current_page:1,filter:{}}},components:{TableAdmin:K,VuePagination:(0,R.Z)(Q,[["render",function(e,t,i,n,a,o){return(0,r.wg)(),(0,r.iD)("nav",X,[(0,r._)("ul",$,[i.pagination.current_page>1?((0,r.wg)(),(0,r.iD)("li",q,[(0,r._)("a",{class:"page-link",href:"javascript:void(0)","aria-label":"Previous",onClick:t[0]||(t[0]=(0,r.iM)((function(e){return o.changePage(i.pagination.current_page-1)}),["prevent"]))},A)])):(0,r.kq)("",!0),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.pagesNumber,(function(e){return(0,r.wg)(),(0,r.iD)("li",{class:(0,r.C_)(["page-item",{active:e==i.pagination.current_page}])},[(0,r._)("a",{class:"page-link",href:"javascript:void(0)",onClick:(0,r.iM)((function(t){return o.changePage(e)}),["prevent"])},(0,r.zw)(e),9,B)],2)})),256)),i.pagination.current_page<i.pagination.last_page?((0,r.wg)(),(0,r.iD)("li",W,[(0,r._)("a",{class:"page-link",href:"javascript:void(0)","aria-label":"Next",onClick:t[1]||(t[1]=(0,r.iM)((function(e){return o.changePage(i.pagination.current_page+1)}),["prevent"]))},J)])):(0,r.kq)("",!0)])])}]])},computed:{},methods:{clearFilter:function(){this.filter={},this.getItems()},getItems:function(e,t,i){var r=this;t&&(this.sort=t),i&&(this.dir=i),j.Z.getList(this.per_page,e,this.sort,this.dir,this.filter).then((function(t){var i;r.items=null!==(i=t.data)&&void 0!==i?i:[];var n=new URL(window.location.href);n.searchParams.delete("page"),e>1&&n.searchParams.set("page",e),window.history.replaceState(null,null,n)}))},setDefault:function(){this.title="Продукты",this.headers=[{title:"ID",code:"id",dir:"desc",is_sort:!0},{title:"Name",code:"name",dir:"asc",is_sort:!0},{title:"Code",code:"code",dir:"asc",is_sort:!0},{title:"Price",code:"price",dir:"asc",is_sort:!0},{title:"Description",code:"descr",dir:"asc",is_sort:!0},{title:"Color",code:"color_name",dir:"asc",is_sort:!0},{title:"Size",code:"size_name",dir:"asc",is_sort:!0}],this.offset=[],this.per_page=10,this.$store.dispatch("setTitle",this.title),j.Z.url="products",this.getItems()}},mounted:function(){j.Z.url=this.$route.params.entity,this.setDefault()}};var te=i(153),ie={insert:"head",singleton:!1};H()(te.Z,ie);te.Z.locals;const re=(0,R.Z)(ee,[["render",function(e,t,i,n,j,L){var T,N=(0,r.up)("table-admin"),Y=(0,r.up)("vue-pagination");return(0,r.wg)(),(0,r.iD)("div",a,[(0,r._)("div",o,[(0,r._)("div",l,[(0,r._)("div",s,[(0,r._)("div",c,[(0,r._)("div",u,[d,(0,r.wy)((0,r._)("input",{class:"form-control",type:"text",id:"name_filter","onUpdate:modelValue":t[0]||(t[0]=function(e){return j.filter.name=e})},null,512),[[r.nr,j.filter.name]])]),(0,r._)("div",f,[(0,r.wy)((0,r._)("input",{class:"form-check-input",type:"radio",id:"one_color",value:"1","onUpdate:modelValue":t[1]||(t[1]=function(e){return j.filter.color_id=e})},null,512),[[r.G2,j.filter.color_id]]),p,(0,r.wy)((0,r._)("input",{class:"form-check-input",type:"radio",id:"two_color",value:"2","onUpdate:modelValue":t[2]||(t[2]=function(e){return j.filter.color_id=e})},null,512),[[r.G2,j.filter.color_id]]),m,(0,r.wy)((0,r._)("input",{class:"form-check-input",type:"radio",id:"three_color",value:"3","onUpdate:modelValue":t[3]||(t[3]=function(e){return j.filter.color_id=e})},null,512),[[r.G2,j.filter.color_id]]),_,(0,r.wy)((0,r._)("input",{class:"form-check-input",type:"radio",id:"four_color",value:"4","onUpdate:modelValue":t[4]||(t[4]=function(e){return j.filter.color_id=e})},null,512),[[r.G2,j.filter.color_id]]),g]),(0,r._)("div",h,[(0,r.wy)((0,r._)("input",{class:"form-check-input",type:"radio",id:"one_size",value:"1","onUpdate:modelValue":t[5]||(t[5]=function(e){return j.filter.size_id=e})},null,512),[[r.G2,j.filter.size_id]]),v,(0,r.wy)((0,r._)("input",{class:"form-check-input",type:"radio",id:"two_size",value:"2","onUpdate:modelValue":t[6]||(t[6]=function(e){return j.filter.size_id=e})},null,512),[[r.G2,j.filter.size_id]]),b,(0,r.wy)((0,r._)("input",{class:"form-check-input",type:"radio",id:"three_size",value:"3","onUpdate:modelValue":t[7]||(t[7]=function(e){return j.filter.size_id=e})},null,512),[[r.G2,j.filter.size_id]]),y,(0,r.wy)((0,r._)("input",{class:"form-check-input",type:"radio",id:"four_size",value:"4","onUpdate:modelValue":t[8]||(t[8]=function(e){return j.filter.size_id=e})},null,512),[[r.G2,j.filter.size_id]]),w,(0,r.wy)((0,r._)("input",{class:"form-check-input",type:"radio",id:"five_size",value:"5","onUpdate:modelValue":t[9]||(t[9]=function(e){return j.filter.size_id=e})},null,512),[[r.G2,j.filter.size_id]]),k,(0,r.wy)((0,r._)("input",{class:"form-check-input",type:"radio",id:"six_size",value:"6","onUpdate:modelValue":t[10]||(t[10]=function(e){return j.filter.size_id=e})},null,512),[[r.G2,j.filter.size_id]]),z])]),(0,r._)("div",x,[(0,r._)("div",D,[C,(0,r.wy)((0,r._)("input",{class:"form-control",type:"text",id:"code_filter","onUpdate:modelValue":t[11]||(t[11]=function(e){return j.filter.code=e})},null,512),[[r.nr,j.filter.code]])]),(0,r._)("div",U,[(0,r._)("div",I,[P,(0,r.wy)((0,r._)("input",{class:"form-control",type:"number",id:"min_price_filter","onUpdate:modelValue":t[12]||(t[12]=function(e){return j.filter.min_price=e}),min:"0.00",max:"10000.00",step:"0.01"},null,512),[[r.nr,j.filter.min_price]])]),(0,r._)("div",V,[Z,(0,r.wy)((0,r._)("input",{class:"form-control",type:"number",id:"max_price_filter","onUpdate:modelValue":t[13]||(t[13]=function(e){return j.filter.max_price=e}),min:"0.00",max:"10000.00",step:"0.01"},null,512),[[r.nr,j.filter.max_price]])])])])]),(0,r._)("div",S,[G,(0,r.wy)((0,r._)("input",{class:"form-control",type:"text",id:"descr_filter","onUpdate:modelValue":t[14]||(t[14]=function(e){return j.filter.descr=e})},null,512),[[r.nr,j.filter.descr]])]),(0,r._)("button",{class:"btn btn-primary",onClick:t[15]||(t[15]=function(){return L.getItems&&L.getItems.apply(L,arguments)})},"FILTER OUT"),(0,r._)("button",{class:"btn btn-secondary",onClick:t[16]||(t[16]=function(){return L.clearFilter&&L.clearFilter.apply(L,arguments)})},"CLEAR FILTERS")]),(0,r.Wm)(N,{items:j.items.data,headers:j.headers,onUpdateItems:L.getItems},null,8,["items","headers","onUpdateItems"]),(0,r.Wm)(Y,{pagination:null!==(T=j.items.meta)&&void 0!==T?T:{},onPaginate:L.getItems,offset:j.per_page},null,8,["pagination","onPaginate","offset"])])])}],["__scopeId","data-v-494ef8d3"]])}}]);