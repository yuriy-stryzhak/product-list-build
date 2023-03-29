(function(){"use strict";var t={548:function(t,e,r){var i=r(963),o=r(252);function a(t,e,r,i,a,c){const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(n)}var c={name:"App"},n=r(744);const l=(0,n.Z)(c,[["render",a]]);var s=l,u=r(201),d=r(577);const p={class:"products"},g={class:"products__filter"},h={class:"products__filter-item"},f=(0,o._)("label",{for:"category"},"Category:",-1),m=(0,o._)("option",{value:""},"All",-1),v=["value"],y={class:"products__filter-item"},w=(0,o._)("label",{for:"price"},"Price:",-1),_={class:"products__filter-item"},P=(0,o._)("label",{for:"length"},"Length:",-1),b={class:"products__filter-item"},C=(0,o._)("label",{for:"width"},"Width:",-1),k={key:0,class:"products__list"},O=["src","alt"],W={class:"products__price"},z={key:1},D=(0,o._)("p",null,"No products found.",-1),j=[D];function L(t,e,r,a,c,n){const l=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("section",p,[(0,o._)("div",g,[(0,o._)("div",h,[f,(0,o.wy)((0,o._)("select",{id:"category","onUpdate:modelValue":e[0]||(e[0]=t=>c.category=t),onChange:e[1]||(e[1]=(...e)=>t.setCategory&&t.setCategory(...e))},[m,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.categories,(t=>((0,o.wg)(),(0,o.iD)("option",{value:t,key:t.id},(0,d.zw)(t),9,v)))),128))],544),[[i.bM,c.category]])]),(0,o._)("div",y,[w,(0,o.wy)((0,o._)("input",{type:"number",id:"price","onUpdate:modelValue":e[2]||(e[2]=t=>c.price=t),onInput:e[3]||(e[3]=(...e)=>t.setPrice&&t.setPrice(...e))},null,544),[[i.nr,c.price]])]),(0,o._)("div",_,[P,(0,o.wy)((0,o._)("input",{type:"number",id:"length","onUpdate:modelValue":e[4]||(e[4]=t=>c.length=t),onInput:e[5]||(e[5]=(...e)=>t.setLength&&t.setLength(...e))},null,544),[[i.nr,c.length]])]),(0,o._)("div",b,[C,(0,o.wy)((0,o._)("input",{type:"number",id:"width","onUpdate:modelValue":e[6]||(e[6]=t=>c.width=t),onInput:e[7]||(e[7]=(...e)=>t.setWidth&&t.setWidth(...e))},null,544),[[i.nr,c.width]])])]),t.filteredProducts.length?((0,o.wg)(),(0,o.iD)("div",k,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.filteredProducts,(t=>((0,o.wg)(),(0,o.iD)("div",{key:t.id},[(0,o.Wm)(l,{class:"products__img",to:{name:"Product",params:{id:t.id}}},{default:(0,o.w5)((()=>[(0,o._)("img",{src:t.image,alt:t.name},null,8,O)])),_:2},1032,["to"]),(0,o.Wm)(l,{class:"products__title",to:{name:"Product",params:{id:t.id}}},{default:(0,o.w5)((()=>[(0,o._)("h3",null,(0,d.zw)(t.name),1)])),_:2},1032,["to"]),(0,o._)("p",W,"Price: "+(0,d.zw)(t.price),1)])))),128))])):((0,o.wg)(),(0,o.iD)("div",z,j))])}var $=r(907),A={computed:{...(0,$.Se)(["filteredProducts"]),categories(){return[...new Set(this.products.map((t=>t.category)))]}},data(){return{category:this.$store.state.filters.category,price:this.$store.state.filters.price,length:this.$store.state.filters.length,width:this.$store.state.filters.width}},methods:{...(0,$.OI)(["setCategory","setPrice","setLength","setWidth"])},name:"AppHome",props:{products:{type:Array,required:!0}}};const H=(0,n.Z)(A,[["render",L]]);var I=H;const U={class:"product"},x={class:"product__details"},V={class:"product__details-img"},T=["src","alt"],Z={class:"product__details-title"};function K(t,e,r,i,a,c){const n=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",U,[(0,o.Wm)(n,{class:"button",to:{name:"Home"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Back to Products List")])),_:1}),(0,o._)("div",x,[(0,o._)("div",V,[(0,o._)("img",{src:c.product.image,alt:c.product.name},null,8,T)]),(0,o._)("h3",Z,(0,d.zw)(c.product.name),1),(0,o._)("p",null,"Price: "+(0,d.zw)(c.product.price),1),(0,o._)("p",null,"Length: "+(0,d.zw)(c.product.length),1),(0,o._)("p",null,"Width: "+(0,d.zw)(c.product.width),1),(0,o._)("p",null,"Category: "+(0,d.zw)(c.product.category),1)])])}var M={computed:{product(){return this.$store.state.products.find((t=>t.id===parseInt(this.$route.params.id)))}},name:"AppProduct"};const S=(0,n.Z)(M,[["render",K]]);var Y=S;const q=(0,$.MT)({state:{products:[{id:1,name:"Product 1",image:"https://via.placeholder.com/150",price:10,length:10,width:10,category:"Category1"},{id:2,name:"Product 2",image:"https://via.placeholder.com/150",price:20,length:20,width:20,category:"Category2"},{id:3,name:"Product 3",image:"https://via.placeholder.com/150",price:30,length:30,width:30,category:"Category1"},{id:4,name:"Product 4",image:"https://via.placeholder.com/150",price:40,length:40,width:40,category:"Category2"},{id:5,name:"Product 5",image:"https://via.placeholder.com/150",price:10,length:10,width:10,category:"Category1"},{id:6,name:"Product 6",image:"https://via.placeholder.com/150",price:20,length:20,width:20,category:"Category2"},{id:7,name:"Product 7",image:"https://via.placeholder.com/150",price:30,length:30,width:30,category:"Category1"},{id:8,name:"Product 8",image:"https://via.placeholder.com/150",price:40,length:40,width:40,category:"Category2"}],filters:{category:"",price:"",length:"",width:""}},mutations:{setCategory(t,e){t.filters.category=e},setPrice(t,e){t.filters.price=e},setLength(t,e){t.filters.length=e},setWidth(t,e){t.filters.width=e}},getters:{filteredProducts:t=>{let e=t.products;return t.filters.category&&""!==t.filters.category.target.value&&(e=e.filter((e=>e.category===t.filters.category.target.value))),t.filters.price&&""!==t.filters.price.target.value&&(e=e.filter((e=>e.price<=t.filters.price.target.value))),t.filters.length&&""!==t.filters.length.target.value&&(e=e.filter((e=>e.length<=t.filters.length.target.value))),t.filters.width&&""!==t.filters.width.target.value&&(e=e.filter((e=>e.width<=t.filters.width.target.value))),e}}});var B=q;const E=[{path:"/",name:"Home",component:I,props:{products:B.state.products}},{path:"/product/:id",name:"Product",component:Y}],F=(0,u.p7)({history:(0,u.PO)("/product-list-build/"),base:"/product-list-build/",routes:E});var N=F;(0,i.ri)(s).use(N).use(B).mount("#app")}},e={};function r(i){var o=e[i];if(void 0!==o)return o.exports;var a=e[i]={exports:{}};return t[i](a,a.exports,r),a.exports}r.m=t,function(){var t=[];r.O=function(e,i,o,a){if(!i){var c=1/0;for(u=0;u<t.length;u++){i=t[u][0],o=t[u][1],a=t[u][2];for(var n=!0,l=0;l<i.length;l++)(!1&a||c>=a)&&Object.keys(r.O).every((function(t){return r.O[t](i[l])}))?i.splice(l--,1):(n=!1,a<c&&(c=a));if(n){t.splice(u--,1);var s=o();void 0!==s&&(e=s)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[i,o,a]}}(),function(){r.d=function(t,e){for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,a,c=i[0],n=i[1],l=i[2],s=0;if(c.some((function(e){return 0!==t[e]}))){for(o in n)r.o(n,o)&&(r.m[o]=n[o]);if(l)var u=l(r)}for(e&&e(i);s<c.length;s++)a=c[s],r.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return r.O(u)},i=self["webpackChunkproduct_list"]=self["webpackChunkproduct_list"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=r.O(void 0,[998],(function(){return r(548)}));i=r.O(i)})();
//# sourceMappingURL=app.65a27138.js.map