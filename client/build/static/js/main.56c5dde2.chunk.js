(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{113:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c.n(n),r=c(68),s=c.n(r),i=(c(86),c(5)),o=c(11),l=c(6),d=c(75),j=c(124),u=c(126),b=c(123),O=c(73),p=c(7);function h(e,t){return 1===t?e:e+"s"}function m(e,t,c){return new Promise((function(n,a){var r,s,i,o=window.indexedDB.open("shop-shop",1);o.onupgradeneeded=function(e){var t=o.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},o.onerror=function(e){console.log("There was an error")},o.onsuccess=function(a){switch(r=o.result,s=r.transaction(e,"readwrite"),i=s.objectStore(e),r.onerror=function(e){console.log("error",e)},t){case"put":i.put(c),n(c);break;case"get":var l=i.getAll();l.onsuccess=function(){n(l.result)};break;case"delete":i.delete(c._id);break;default:console.log("No valid method")}s.oncomplete=function(){r.close()}}}))}var f=c(76),x=c(26),g="UPDATE_PRODUCTS",v="ADD_TO_CART",y="ADD_MULTIPLE_TO_CART",w="REMOVE_FROM_CART",N="UPDATE_CART_QUANTITY",k="TOGGLE_CART",_="UPDATE_CATEGORIES",C="UPDATE_CURRENT_CATEGORY",E=function(e,t){switch(t.type){case g:return Object(i.a)(Object(i.a)({},e),{},{products:Object(x.a)(t.products)});case v:return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(x.a)(e.cart),[t.product])});case y:return Object(i.a)(Object(i.a)({},e),{},{cart:[].concat(Object(x.a)(e.cart),Object(x.a)(t.products))});case N:return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case w:var c=e.cart.filter((function(e){return e._id!==t._id}));return Object(i.a)(Object(i.a)({},e),{},{cartOpen:c.length>0,cart:c});case"CLEAR_CART":return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!1,cart:[]});case k:return Object(i.a)(Object(i.a)({},e),{},{cartOpen:!e.cartOpen});case _:return Object(i.a)(Object(i.a)({},e),{},{categories:Object(x.a)(t.categories)});case C:return Object(i.a)(Object(i.a)({},e),{},{currentCategory:t.currentCategory});default:return e}};var T=c(1),S=["value"],A=Object(n.createContext)(),I=A.Provider,P=function(e){e.value;var t,c=Object(f.a)(e,S),a=(t={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},Object(n.useReducer)(E,t)),r=Object(p.a)(a,2),s=r[0],o=r[1];return Object(T.jsx)(I,Object(i.a)({value:[s,o]},c))},$=function(){return Object(n.useContext)(A)};var D,Q,R,q,F,U=function(e){var t=$(),c=Object(p.a)(t,2),n=c[0],a=c[1],r=e.image,s=e.name,l=e._id,d=e.price,j=e.quantity,u=n.cart;return Object(T.jsxs)("div",{className:"card product-item",children:[Object(T.jsxs)(o.b,{to:"/products/".concat(l),children:[Object(T.jsx)("img",{class:"card-img-top",alt:s,src:"/images/".concat(r)}),Object(T.jsx)("p",{className:"card-title",children:s})]}),Object(T.jsxs)("div",{className:"card-body",children:[Object(T.jsxs)("div",{className:"card-text",children:[j," ",h("item",j)," in stock"]}),Object(T.jsxs)("span",{children:["$",d]})]}),Object(T.jsx)("button",{className:"btn btn-primary",onClick:function(){var t=u.find((function(e){return e._id===l}));t?(a({type:N,_id:l,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),m("cart","put",Object(i.a)(Object(i.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(a({type:v,product:Object(i.a)(Object(i.a)({},e),{},{purchaseQuantity:1})}),m("cart","put",Object(i.a)(Object(i.a)({},e),{},{purchaseQuantity:1})))},children:"Add to cart"})]})},L=c(77),W=c(23),G=c(125),Y=Object(G.a)(D||(D=Object(W.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]))),B=Object(G.a)(Q||(Q=Object(W.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]))),H=(Object(G.a)(R||(R=Object(W.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]))),Object(G.a)(q||(q=Object(W.a)(["\n  {\n    categories {\n      _id\n      name\n    }\n  }\n"])))),M=Object(G.a)(F||(F=Object(W.a)(["\n  {\n    user {\n      firstName\n      lastName\n      orders {\n        _id\n        purchaseDate\n        products {\n          _id\n          name\n          description\n          price\n          quantity\n          image\n        }\n      }\n    }\n  }\n"]))),J=c.p+"static/media/spinner.689d9a07.gif";var X=function(){var e=$(),t=Object(p.a)(e,2),c=t[0],a=t[1],r=c.currentCategory,s=Object(L.b)(Y),i=s.loading,o=s.data;return Object(n.useEffect)((function(){o?(a({type:g,products:o.products}),o.products.forEach((function(e){m("products","put",e)}))):i||m("products","get").then((function(e){a({type:g,products:e})}))}),[o,i,a]),Object(T.jsx)("div",{className:"product-container d-flex justify-content-center",children:Object(T.jsxs)("div",{className:"product-list my-2",children:[c.products.length?Object(T.jsx)("div",{className:"flex-row",children:(r?c.products.filter((function(e){return e.category._id===r})):c.products).map((function(e){return Object(T.jsx)(U,{_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity},e._id)}))}):Object(T.jsx)("h3",{children:"You haven't added any products yet!"}),i?Object(T.jsx)("img",{src:J,alt:"loading"}):null]})})};var z=function(){var e=$(),t=Object(p.a)(e,2),c=t[0],a=t[1],r=c.categories,s=Object(L.b)(H),i=s.loading,o=s.data;return Object(n.useEffect)((function(){o?(a({type:_,categories:o.categories}),o.categories.forEach((function(e){m("categories","put",e)}))):i||m("categories","get").then((function(e){a({type:_,categories:e})}))}),[o,i,a]),Object(T.jsx)("div",{className:"category-button-container",children:r.map((function(e){return Object(T.jsx)("button",{className:"category-button",onClick:function(){var t;t=e._id,a({type:C,currentCategory:t})},children:e.name},e._id)}))})},K=c(17),V=c(25),Z=c(69),ee=c(120),te=function(e){var t=e.item,c=$(),n=Object(p.a)(c,2)[1];return Object(T.jsx)("div",{className:"parent",children:Object(T.jsxs)("div",{className:"cart-content",children:[Object(T.jsx)("div",{children:Object(T.jsx)("img",{src:"/images/".concat(t.image),alt:""})}),Object(T.jsxs)("div",{children:[Object(T.jsxs)("div",{children:[t.name,", $",t.price]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("span",{children:"Qty:"}),Object(T.jsx)("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var c=e.target.value;"0"===c?(n({type:w,_id:t._id}),m("cart","delete",Object(i.a)({},t))):(n({type:N,_id:t._id,purchaseQuantity:parseInt(c)}),m("cart","put",Object(i.a)(Object(i.a)({},t),{},{purchaseQuantity:parseInt(c)})))}}),Object(T.jsx)("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){n({type:w,_id:e._id}),m("cart","delete",Object(i.a)({},e))}(t)},children:"\ud83d\uddd1\ufe0f"})]})]})]})})},ce=c(70),ne=c(71),ae=c(50),re=c.n(ae),se=new(function(){function e(){Object(ce.a)(this,e)}return Object(ne.a)(e,[{key:"getProfile",value:function(){return re()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return re()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),ie=(c(90),Object(Z.a)("pk_test_TYooMQauvdEDq54NiTphI7jx")),oe=function(){var e=$(),t=Object(p.a)(e,2),c=t[0],a=t[1],r=Object(ee.a)(B),s=Object(p.a)(r,2),i=s[0],o=s[1].data;function l(){a({type:k})}return Object(n.useEffect)((function(){o&&ie.then((function(e){e.redirectToCheckout({sessionId:o.checkout.session})}))}),[o]),Object(n.useEffect)((function(){function e(){return(e=Object(V.a)(Object(K.a)().mark((function e(){var t;return Object(K.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("cart","get");case 2:t=e.sent,a({type:y,products:Object(x.a)(t)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c.cart.length||function(){e.apply(this,arguments)}()}),[c.cart.length,a]),c.cartOpen?Object(T.jsx)("div",{className:"parent",children:Object(T.jsxs)("div",{className:"cart",children:[Object(T.jsx)("button",{className:"close btn-danger",onClick:l,children:"Close"}),Object(T.jsx)("h2",{children:"Shopping Cart"}),c.cart.length?Object(T.jsxs)("div",{children:[c.cart.map((function(e){return Object(T.jsx)(te,{item:e},e._id)})),Object(T.jsxs)("div",{className:"flex-row space-between",children:[Object(T.jsxs)("strong",{children:["Total: $",function(){var e=0;return c.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()]}),se.loggedIn()?Object(T.jsx)("button",{className:"btn-primary",onClick:function(){var e=[];c.cart.forEach((function(t){for(var c=0;c<t.purchaseQuantity;c++)e.push(t._id)})),i({variables:{products:e}})},children:"Checkout"}):Object(T.jsx)("span",{children:"(log in to check out)"})]})]}):Object(T.jsx)("h3",{children:"Your cart is Empty!"})]})}):Object(T.jsx)("div",{className:"cart-closed",onClick:l,children:Object(T.jsx)("span",{role:"img","aria-label":"trash",children:"\ud83d\uded2"})})},le=c(72),de=c.n(le),je=function(){var e=Object(n.useState)("loading..."),t=Object(p.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){console.log("line19hit"),de.a.request({method:"GET",url:"https://world-of-quotes.p.rapidapi.com/v1/quotes/quote-of-the-day",headers:{"X-RapidAPI-Key":"6744f82751mshc3605f6521c8a9cp1ebe17jsn36d4d832059b","X-RapidAPI-Host":"world-of-quotes.p.rapidapi.com"}}).then((function(e){var t=e.data.quote;console.log(e.data),a(t)})).catch((function(e){console.error(e)}))}),[]),console.log("check"),console.log("line25hit"),Object(T.jsxs)("div",{className:"container",children:[Object(T.jsxs)("div",{class:"box",children:[Object(T.jsx)("img",{src:"https://imgix.bustle.com/rehost/2017/8/21/d82f3279-8ae5-47cb-8ed0-bef83fd34033.jpg",alt:"An open book",width:"1200",height:"500"}),Object(T.jsx)("div",{class:"shade"}),Object(T.jsx)("div",{children:Object(T.jsxs)("j",{children:['"',c,'"']})})]}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)("center",{children:Object(T.jsx)(z,{})}),Object(T.jsx)("br",{}),Object(T.jsx)("br",{}),Object(T.jsx)(X,{}),Object(T.jsx)(oe,{})]})};var ue=function(){var e=$(),t=Object(p.a)(e,2),c=t[0],a=t[1],r=Object(l.g)().id,s=Object(n.useState)({}),d=Object(p.a)(s,2),j=d[0],u=d[1],b=Object(L.b)(Y),O=b.loading,h=b.data,f=c.products,x=c.cart;return Object(n.useEffect)((function(){f.length?u(f.find((function(e){return e._id===r}))):h?(a({type:g,products:h.products}),h.products.forEach((function(e){m("products","put",e)}))):O||m("products","get").then((function(e){a({type:g,products:e})}))}),[f,h,O,a,r]),Object(T.jsxs)(T.Fragment,{children:[j&&x?Object(T.jsxs)("div",{className:"container my-1",children:[Object(T.jsx)(o.b,{to:"/",children:"\u2190 Back to Products"}),Object(T.jsx)("h2",{children:j.name}),Object(T.jsx)("p",{children:j.description}),Object(T.jsxs)("p",{children:[Object(T.jsx)("strong",{children:"Price:"}),"$",j.price," ",Object(T.jsx)("button",{onClick:function(){var e=x.find((function(e){return e._id===r}));e?(a({type:N,_id:r,purchaseQuantity:parseInt(e.purchaseQuantity)+1}),m("cart","put",Object(i.a)(Object(i.a)({},e),{},{purchaseQuantity:parseInt(e.purchaseQuantity)+1}))):(a({type:v,product:Object(i.a)(Object(i.a)({},j),{},{purchaseQuantity:1})}),m("cart","put",Object(i.a)(Object(i.a)({},j),{},{purchaseQuantity:1})))},children:"Add to Cart"}),Object(T.jsx)("button",{disabled:!x.find((function(e){return e._id===j._id})),onClick:function(){a({type:w,_id:j._id}),m("cart","delete",Object(i.a)({},j))},children:"Remove from Cart"})]}),Object(T.jsx)("img",{src:"/images/".concat(j.image),alt:j.name})]}):null,O?Object(T.jsx)("img",{src:J,alt:"loading"}):null,Object(T.jsx)(oe,{})]})};var be,Oe,pe,he=function(e){var t=e.children;return Object(T.jsx)("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"},children:t})},me=function(){return Object(T.jsx)("div",{children:Object(T.jsxs)(he,{children:[Object(T.jsx)("h1",{children:"404 Page Not Found"}),Object(T.jsx)("h1",{children:Object(T.jsx)("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji",children:"\ud83d\ude44"})})]})})},fe=c(31),xe=c(121),ge=Object(G.a)(be||(be=Object(W.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),ve=Object(G.a)(Oe||(Oe=Object(W.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        category {\n          name\n        }\n      }\n    }\n  }\n"]))),ye=Object(G.a)(pe||(pe=Object(W.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])));var we=function(e){var t=Object(n.useState)({email:"",password:""}),c=Object(p.a)(t,2),a=c[0],r=c[1],s=Object(xe.a)(ge),l=Object(p.a)(s,2),d=l[0],j=l[1].error,u=function(){var e=Object(V.a)(Object(K.a)().mark((function e(t){var c,n;return Object(K.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d({variables:{email:a.email,password:a.password}});case 4:c=e.sent,n=c.data.login.token,se.login(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.target,c=t.name,n=t.value;r(Object(i.a)(Object(i.a)({},a),{},Object(fe.a)({},c,n)))};return Object(T.jsxs)("div",{className:"container my-1",children:[Object(T.jsx)(o.b,{to:"/signup",children:"\u2190 Go to Signup"}),Object(T.jsx)("h2",{children:"Login"}),Object(T.jsxs)("form",{onSubmit:u,children:[Object(T.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(T.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(T.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:b})]}),Object(T.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(T.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(T.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:b})]}),j?Object(T.jsx)("div",{children:Object(T.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(T.jsx)("div",{className:"flex-row flex-end",children:Object(T.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var Ne=function(e){var t=Object(n.useState)({email:"",password:""}),c=Object(p.a)(t,2),a=c[0],r=c[1],s=Object(xe.a)(ye),l=Object(p.a)(s,1)[0],d=function(){var e=Object(V.a)(Object(K.a)().mark((function e(t){var c,n;return Object(K.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,l({variables:{email:a.email,password:a.password,firstName:a.firstName,lastName:a.lastName}});case 3:c=e.sent,n=c.data.addUser.token,se.login(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.target,c=t.name,n=t.value;r(Object(i.a)(Object(i.a)({},a),{},Object(fe.a)({},c,n)))};return Object(T.jsxs)("div",{className:"container my-1",children:[Object(T.jsx)(o.b,{to:"/login",children:"\u2190 Go to Login"}),Object(T.jsx)("h2",{children:"Signup"}),Object(T.jsxs)("form",{onSubmit:d,children:[Object(T.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(T.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object(T.jsx)("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:j})]}),Object(T.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(T.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object(T.jsx)("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:j})]}),Object(T.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(T.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(T.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:j})]}),Object(T.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(T.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(T.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:j})]}),Object(T.jsx)("div",{className:"flex-row flex-end",children:Object(T.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var ke=function(){return Object(T.jsxs)("header",{className:"flex-row",children:[Object(T.jsx)("h1",{className:"penny",onClick:function(){window.location.reload(!1)},children:Object(T.jsxs)(o.b,{to:"/",children:[Object(T.jsx)("img",{className:"quote-icon ",src:"images/quoteicon.png"}),"Penny For Your Thoughts"]})}),Object(T.jsx)("nav",{children:se.loggedIn()?Object(T.jsxs)("ul",{className:"flex-row",children:[Object(T.jsx)("li",{className:"mx-1",children:Object(T.jsx)(o.b,{to:"/orderHistory",children:"Order History"})}),Object(T.jsx)("li",{className:"mx-1",children:Object(T.jsx)("a",{href:"/",onClick:function(){return se.logout()},children:"Logout"})})]}):Object(T.jsx)("div",{className:"login",children:Object(T.jsxs)("ul",{className:"flex-row ",children:[Object(T.jsx)("li",{className:"",children:Object(T.jsx)(o.b,{to:"/signup",children:"Signup"})}),Object(T.jsx)("li",{className:"",children:Object(T.jsx)(o.b,{to:"/login",children:"Login"})})]})})})]})};var _e=function(){var e=Object(xe.a)(ve),t=Object(p.a)(e,1)[0];return Object(n.useEffect)((function(){function e(){return(e=Object(V.a)(Object(K.a)().mark((function e(){var c,n,a,r;return Object(K.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("cart","get");case 2:if(c=e.sent,!(n=c.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{products:n}});case 7:a=e.sent,r=a.data,r.addOrder.products.forEach((function(e){m("cart","delete",e)}));case 11:setTimeout((function(){window.location.assign("/")}),3e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(T.jsx)("div",{children:Object(T.jsxs)(he,{children:[Object(T.jsx)("h1",{children:"Success!"}),Object(T.jsx)("h2",{children:"Thank you for your purchase!"}),Object(T.jsx)("h2",{children:"You will now be redirected to the home page"})]})})};var Ce=function(){var e,t=Object(L.b)(M).data;return t&&(e=t.user),Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)("div",{className:"container my-1",children:[Object(T.jsx)(o.b,{to:"/",children:"\u2190 Back to Products"}),e?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("h2",{children:["Order History for ",e.firstName," ",e.lastName]}),e.orders.map((function(e){return Object(T.jsxs)("div",{className:"my-2",children:[Object(T.jsx)("h3",{children:new Date(parseInt(e.purchaseDate)).toLocaleDateString()}),Object(T.jsx)("div",{className:"flex-row",children:e.products.map((function(e,t){var c=e._id,n=e.image,a=e.name,r=e.price;return Object(T.jsxs)("div",{className:"card px-1 py-1",children:[Object(T.jsxs)(o.b,{to:"/products/".concat(c),children:[Object(T.jsx)("img",{alt:a,src:"/images/".concat(n)}),Object(T.jsx)("p",{children:a})]}),Object(T.jsx)("div",{children:Object(T.jsxs)("span",{children:["$",r]})})]},t)}))})]},e._id)}))]}):null]})})},Ee=Object(d.a)({uri:"/graphql"}),Te=Object(O.a)((function(e,t){var c=t.headers,n=localStorage.getItem("id_token");return{headers:Object(i.a)(Object(i.a)({},c),{},{authorization:n?"Bearer ".concat(n):""})}})),Se=new j.a({link:Te.concat(Ee),cache:new u.a});var Ae=function(){return Object(T.jsx)(b.a,{client:Se,children:Object(T.jsx)(o.a,{children:Object(T.jsx)("div",{children:Object(T.jsxs)(P,{children:[Object(T.jsx)(ke,{}),Object(T.jsxs)(l.c,{children:[Object(T.jsx)(l.a,{path:"/",element:Object(T.jsx)(je,{})}),Object(T.jsx)(l.a,{path:"/login",element:Object(T.jsx)(we,{})}),Object(T.jsx)(l.a,{path:"/signup",element:Object(T.jsx)(Ne,{})}),Object(T.jsx)(l.a,{path:"/success",element:Object(T.jsx)(_e,{})}),Object(T.jsx)(l.a,{path:"/orderHistory",element:Object(T.jsx)(Ce,{})}),Object(T.jsx)(l.a,{path:"/products/:id",element:Object(T.jsx)(ue,{})}),Object(T.jsx)(l.a,{path:"*",element:Object(T.jsx)(me,{})})]})]})})})})},Ie=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Pe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var c=e.installing;null!=c&&(c.onstatechange=function(){"installed"===c.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(T.jsx)(a.a.StrictMode,{children:Object(T.jsx)(Ae,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Ie?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(c){var n=c.headers.get("content-type");404===c.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Pe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Pe(t,e)}))}}()},86:function(e,t,c){},90:function(e,t,c){}},[[113,1,2]]]);
//# sourceMappingURL=main.56c5dde2.chunk.js.map