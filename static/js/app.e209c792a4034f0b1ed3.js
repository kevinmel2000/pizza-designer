webpackJsonp([1],{MLBH:function(i,t){},NHnr:function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e("7+uW"),r=e("BO1k"),s=e.n(r),a=e("ifoU"),o=e.n(a),c=new n.a,d={name:"category-tabs",data:function(){return{tabs:[{id:1,caption:"Мясо"},{id:2,caption:"Овощи"},{id:3,caption:"Сыры"}],selectedTab:1}},methods:{selectTab:function(i){this.selectedTab=i,c.$emit("category-selected",this.selectedTab)}}},g={render:function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("ul",i._l(i.tabs,function(t){return e("li",{key:t.id,staticClass:"tab",class:{"active-tab":i.selectedTab===t.id},on:{click:function(e){return i.selectTab(t.id)}}},[e("a",[i._v(i._s(t.caption))])])}),0)},staticRenderFns:[]};var p=e("VU/8")(d,g,!1,function(i){e("p31X")},"data-v-09a86380",null).exports,m={name:"ingredient-card",props:{ingredient:{type:Object,required:!0},portionCount:{type:Number,required:!0}},methods:{removeIngredient:function(){c.$emit("ingredient-removed",this.ingredient.id)},updatePortionCount:function(){c.$emit("ingredient-updated",this.ingredient.id)}}},u={render:function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("div",{staticClass:"ingredient-item",on:{click:function(t){return i.updatePortionCount()}}},[n("div",{staticClass:"ingredient-view",class:{"selected-view":i.ingredient.hasInOrder}},[n("img",{staticClass:"ingredient-icon",attrs:{src:i.ingredient.icon}}),i._v(" "),n("span",[i._v(" "+i._s(i.ingredient.price)+" ₽")])]),i._v(" "),n("div",{staticClass:"ingredient-info",class:{"selected-info":i.ingredient.hasInOrder}},[n("div",{staticClass:"main-info"},[n("b",[i._v(i._s(i.ingredient.name))]),i._v(" "),n("span",{staticClass:"portion"},[i._v(" "+i._s(i.ingredient.portion)+" г")])]),i._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:i.ingredient.hasInOrder,expression:"ingredient.hasInOrder"}],staticClass:"summary-info"},[n("img",{attrs:{src:e("mTJe")},on:{click:function(t){return t.stopPropagation(),i.removeIngredient()}}}),i._v(" "),n("div",{staticClass:"portion-count"},[i._v("×"+i._s(i.portionCount))])])])])},staticRenderFns:[]};var l={name:"App",components:{CategoryTabs:p,IngredientCard:e("VU/8")(m,u,!1,function(i){e("dKuR")},"data-v-b72438ee",null).exports},data:function(){return{assets:{appBackground:"../static/images/wood-background.jpg",constructorBackground:"../static/images/constructor/pizza-base.png"},categoryId:1,pizzaBase:{weight:300,price:150},pizzaIngredients:[{id:1,tabId:3,name:'Сыр "Пармезан"',price:99,portion:70,hasInOrder:!1,img:"../static/images/constructor/parmesan.png",icon:"../static/images/icons/parmesan.jpg"},{id:2,tabId:1,name:"Ветчина",price:50,portion:50,hasInOrder:!1,img:"../static/images/constructor/ham.png",icon:"../static/images/icons/ham.jpg"},{id:3,tabId:1,name:"Бекон",price:65,portion:50,hasInOrder:!1,img:"../static/images/constructor/bacon.png",icon:"../static/images/icons/bacon.jpg"},{id:4,tabId:1,name:"Куриное филе копчёное",price:69,portion:50,hasInOrder:!1,img:"../static/images/constructor/chicken-fillet.png",icon:"../static/images/icons/chicken-fillet.jpg"},{id:5,tabId:1,name:"Салями",price:79,portion:50,hasInOrder:!1,img:"../static/images/constructor/salami.png",icon:"../static/images/icons/salami.jpg"},{id:6,tabId:1,name:"Колбаски охотничьи",price:79,portion:50,hasInOrder:!1,img:"../static/images/constructor/hunting-sausages.png",icon:"../static/images/icons/hunting-sausages.jpg"},{id:7,tabId:2,name:"Помидоры",price:35,portion:50,hasInOrder:!1,img:"../static/images/constructor/tomato.png",icon:"../static/images/icons/tomato.jpg"},{id:8,tabId:2,name:"Перец болгарский",price:45,portion:50,hasInOrder:!1,img:"../static/images/constructor/bell-pepper.png",icon:"../static/images/icons/bell-pepper.jpg"},{id:9,tabId:2,name:"Красный лук",price:30,portion:50,hasInOrder:!1,img:"../static/images/constructor/red-onion.png",icon:"../static/images/icons/red-onion.jpg"},{id:10,tabId:2,name:"Шампиньоны свежие",price:59,portion:50,hasInOrder:!1,img:"../static/images/constructor/champignon.png",icon:"../static/images/icons/champignon.jpg"},{id:11,tabId:2,name:"Ананас",price:39,portion:30,hasInOrder:!1,img:"../static/images/constructor/pineapple.png",icon:"../static/images/icons/pineapple.jpg"},{id:12,tabId:2,name:"Кукуруза",price:39,portion:30,hasInOrder:!1,img:"../static/images/constructor/corn.png",icon:"../static/images/icons/corn.jpg"},{id:13,tabId:3,name:'Сыр "Добрлю"',price:99,portion:70,hasInOrder:!1,img:"../static/images/constructor/dorblu.png",icon:"../static/images/icons/dorblu.jpg"},{id:14,tabId:3,name:'Сыр "Фета"',price:90,portion:70,hasInOrder:!1,img:"../static/images/constructor/feta.png",icon:"../static/images/icons/feta.jpg"},{id:15,tabId:2,name:"Маслины",price:39,portion:30,hasInOrder:!1,img:"../static/images/constructor/olive.png",icon:"../static/images/icons/olive.jpg"},{id:16,tabId:2,name:"Зелень",price:10,portion:5,hasInOrder:!1,img:"../static/images/constructor/greenery.png",icon:"../static/images/icons/greenery.jpg"}],order:{ingredients:new o.a,fullPrice:0,totalWeight:0}}},methods:{updateOrder:function(i){var t=this.pizzaIngredients.findIndex(function(t){return t.id===i});if(-1!==t){var e=0;this.order.ingredients.has(i)&&(e=this.order.ingredients.get(i)),++e>2?this.removeFromOrder(i):(this.order.ingredients.set(i,e),this.pizzaIngredients[t].hasInOrder=!0,this.calcOrderInfo())}},calcOrderInfo:function(){var i=this,t=0,e=0,n=function(n){var r=i.pizzaIngredients.findIndex(function(i){return i.id===n[0]});-1!==r&&(t+=i.pizzaIngredients[r].price*n[1],e+=i.pizzaIngredients[r].portion*n[1])},r=!0,a=!1,o=void 0;try{for(var c,d=s()(this.order.ingredients);!(r=(c=d.next()).done);r=!0){n(c.value)}}catch(i){a=!0,o=i}finally{try{!r&&d.return&&d.return()}finally{if(a)throw o}}this.order.fullPrice=t+this.pizzaBase.price,this.order.totalWeight=e+this.pizzaBase.weight},removeFromOrder:function(i){var t=this.pizzaIngredients.findIndex(function(t){return t.id===i});-1!==t&&this.order.ingredients.has(i)&&(this.order.ingredients.delete(i),this.pizzaIngredients[t].hasInOrder=!1,this.calcOrderInfo())},getPortionCount:function(i){return this.order.ingredients.has(i)?this.order.ingredients.get(i):0}},mounted:function(){var i=this;this.calcOrderInfo(),c.$on("category-selected",function(t){i.categoryId=t}),c.$on("ingredient-updated",function(t){i.updateOrder(t)}),c.$on("ingredient-removed",function(t){i.removeFromOrder(t)})}},A={render:function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{style:{"background-image":"url("+i.assets.appBackground+")"},attrs:{id:"app"}},[i._m(0),i._v(" "),e("div",{staticClass:"page-content"},[e("div",{staticClass:"constructor",style:{"background-image":"url("+i.assets.constructorBackground+")"}},i._l(i.pizzaIngredients,function(i){return e("img",{directives:[{name:"show",rawName:"v-show",value:i.hasInOrder,expression:"ingredient.hasInOrder"}],key:i.id,attrs:{src:i.img}})}),0),i._v(" "),e("div",{staticClass:"order"},[e("div",{staticClass:"order-info"},[e("span",[i._v("Ваша пицца содержит:")]),i._v(" "),e("div",{staticClass:"order-item"},[e("span",[i._v("Основа с томатным соусом")]),i._v(" "),e("span",[i._v(i._s(i.pizzaBase.weight)+" г")]),i._v(" "),e("span",[i._v(i._s(i.pizzaBase.price)+" ₽")])]),i._v(" "),i._l(i.pizzaIngredients,function(t){return e("div",{directives:[{name:"show",rawName:"v-show",value:t.hasInOrder,expression:"ingredient.hasInOrder"}],key:t.id,staticClass:"order-item"},[e("span",[i._v(i._s(t.name)+" ×"+i._s(i.getPortionCount(t.id)))]),i._v(" "),e("span",[i._v(i._s(t.portion*i.getPortionCount(t.id))+" г")]),i._v(" "),e("span",[i._v(i._s(t.price*i.getPortionCount(t.id))+" ₽")])])}),i._v(" "),e("div",{staticClass:"order-weight"},[i._v("Общий вес: "+i._s(i.order.totalWeight)+" г")]),i._v(" "),e("div",{staticClass:"order-sum"},[e("b",[i._v("Итого: "+i._s(i.order.fullPrice)+" ₽")])])],2),i._v(" "),e("button",{attrs:{onclick:"alert('Ваш заказ отправлен!'); window.location.reload();"}},[i._v("Заказать")])]),i._v(" "),e("div",{staticClass:"ingredients-menu"},[e("category-tabs"),i._v(" "),e("div",{staticClass:"ingredients-grid"},i._l(i.pizzaIngredients,function(t){return e("ingredient-card",{directives:[{name:"show",rawName:"v-show",value:t.tabId===i.categoryId,expression:"ingredient.tabId === categoryId"}],key:t.id,attrs:{ingredient:t,portionCount:i.getPortionCount(t.id)}})}),1)],1)])])},staticRenderFns:[function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"header"},[t("div",{staticClass:"flag"}),this._v(" "),t("header",[this._v('Конструктор пиццы "Создай сам"')]),this._v(" "),t("div",{staticClass:"flag-reversed"})])}]};var v=e("VU/8")(l,A,!1,function(i){e("MLBH")},null,null).exports;n.a.config.productionTip=!1,new n.a({el:"#app",components:{App:v},template:"<App/>"})},dKuR:function(i,t){},mTJe:function(i,t){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAGJJREFUSMdjYBgFBAAjIQVXGBjk/jEw7GdgYFBCk3rEwMDgqMfAcI9kCy4xMPwnx7V6WMxjoltY0QrgjANSg0kPh1k0D6JRC0YtGLVguFvwhARzHpNjQRqRljz+D1E7CsgDAKeODnlMJsCQAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA2LTIzVDA5OjM1OjU3KzAwOjAwwSOlbgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wNi0yM1QwOTozNTo1NyswMDowMLB+HdIAAAAodEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL3RtcC9tYWdpY2stZmNOME5tTVbt55mlAAAAAElFTkSuQmCC"},p31X:function(i,t){}},["NHnr"]);
//# sourceMappingURL=app.e209c792a4034f0b1ed3.js.map