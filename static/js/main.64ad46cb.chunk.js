(this["webpackJsonpspell-book"]=this["webpackJsonpspell-book"]||[]).push([[0],{33:function(e,t,n){e.exports=n(53)},42:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(20),c=n.n(l),s=n(3),o=n(2),i=n(30),u=n(32),p=Object(o.combineReducers)({userHouse:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GIVEN_HOUSE":return t.house;default:return e}},isLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_LOADING":return t.bool;default:return e}},nameOfWizard:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NAME":return t.name;default:return e}},errorMsg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HAS_ERROR":return t.error;default:return e}},spellBook:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HAS_SPELLS":return t.spells;default:return e}},selectedSpell:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCHED_SPELL":return t.foundSpell;default:return e}},favouriteSpells:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_FAVOURITE":return[].concat(Object(u.a)(e),[t.id]);case"DELETE_FAVOURITE":return e.filter((function(e){return e!==t.id}));default:return e}}}),f=n(8),m=(n(42),n(9)),d=n.n(m),h=n(18),v=n(22),b=n(12),g=n(13),E=n(15),S=n(14),w=n(16),k=(n(44),function(){var e=Object(h.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.potterapi.com/v1/sortingHat");case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=10;break}throw new Error("No Houses Found!");case 10:return e.abrupt("return",n);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),O=function(){var e=Object(h.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.potterapi.com/v1/spells?key=".concat("$2a$10$s7FC7dj4ik0afkB/Dnr4Ju6NXS0Os8RtRntk97bi8gx.KqvmqgNgK"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=10;break}throw new Error("No Spells Found!");case 10:return e.abrupt("return",n);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(e){return{type:"HAS_SPELLS",spells:e}},N=function(e){return{type:"SEARCHED_SPELL",foundSpell:e}},y=function(e){return{type:"ADD_FAVOURITE",id:e}},C=function(e){return{type:"DELETE_FAVOURITE",id:e}},_=function(e){function t(){var e;return Object(b.a)(this,t),(e=Object(E.a)(this,Object(S.a)(t).call(this))).handleChange=function(t){e.setState(Object(v.a)({},t.target.name,t.target.value))},e.foundHouse=Object(h.a)(d.a.mark((function t(){var n,a,r,l,c,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props,a=n.givenHouse,r=n.wizardsName,l=n.isLoading,c=e.state.name,t.prev=2,t.next=5,k();case 5:s=t.sent,a(s),r(c),l(!1),e.foundSpells(),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),e.setState({hasError:t.t0});case 15:case"end":return t.stop()}}),t,null,[[2,12]])}))),e.foundSpells=Object(h.a)(d.a.mark((function t(){var n,a,r,l,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props,a=n.hasSpells,r=n.searchedSpell,t.prev=1,t.next=4,O();case 4:l=t.sent,c=l.map((function(e){return e.isFavourite=!1,e})),a(c),r(c),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),e.setState({hasError:t.t0});case 13:case"end":return t.stop()}}),t,null,[[1,10]])}))),e.state={name:"",hasError:""},e}return Object(w.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.state.name.length>0;return r.a.createElement("section",{className:"form-section"},r.a.createElement("form",{className:"house-form"},r.a.createElement("div",{className:"banner"},r.a.createElement("input",{className:"wizard-name",type:"text",placeholder:"Name Here",name:"name",value:this.state.name,onChange:this.handleChange}),r.a.createElement("img",{className:"name-banner",src:"https://www.pinclipart.com/picdir/big/10-101144_vintage-banner-vector-png-theveliger-clipart-vintage-banner.png",alt:"banner name"})),e?r.a.createElement(f.b,{to:"/spells",onClick:this.foundHouse,disabled:!e},r.a.createElement("div",{className:"sorting-container"},r.a.createElement("img",{className:"sorting-button",src:"https://cdn.shopify.com/s/files/1/0221/1146/products/Sorting_Hat_pin_badge_scaled_grande.png?v=1551715337",alt:"sorting hat"}),r.a.createElement("h3",{className:"submit-text"},"Enter"))):r.a.createElement("div",{className:"sorting-hat"},r.a.createElement("img",{className:"sorting-button-invalid",src:"https://cdn.shopify.com/s/files/1/0221/1146/products/Sorting_Hat_pin_badge_scaled_grande.png?v=1551715337",alt:"sorting hat"}),r.a.createElement("h3",{className:"submit-hat"},"Enter Name"))))}}]),t}(a.Component),H=Object(s.b)(null,(function(e){return Object(o.bindActionCreators)({givenHouse:function(t){return e(function(e){return{type:"GIVEN_HOUSE",house:e}}(t))},isLoading:function(t){return e(function(e){return{type:"IS_LOADING",bool:e}}(t))},wizardsName:function(t){return e(function(e){return{type:"NAME",name:e}}(t))},hasSpells:function(t){return e(j(t))},searchedSpell:function(t){return e(N(t))}},e)}))(_),x=(n(46),Object(s.b)((function(e){return{userHouse:e.userHouse,nameOfWizard:e.nameOfWizard}}))((function(e){var t=e.userHouse,n=e.nameOfWizard;return r.a.createElement("nav",null,r.a.createElement("h2",null,n," Potter "),r.a.createElement(f.b,{to:"/"},"Gryffindor"===t&&r.a.createElement("img",{className:"mascot-img",src:"https://vignette.wikia.nocookie.net/thedailyquibbler/images/0/00/Gryffindor.gif/revision/latest/scale-to-width-down/240?cb=20140719233928",alt:"Gryffindor mascot"}),"Hufflepuff"===t&&r.a.createElement("img",{className:"mascot-img",src:"http://www.colleenmarielynch.com/Hufflepuff/crest2.gif",alt:"Hufflepuff mascot"}),"Ravenclaw"===t&&r.a.createElement("img",{className:"mascot-img",src:"https://i.pinimg.com/originals/35/4d/01/354d01e48c6acd596e48f6c4bbb3b7da.jpg",alt:"Ravenclaw mascot"}),"Slytherin"===t&&r.a.createElement("img",{className:"mascot-img",src:"https://www.pngkey.com/png/detail/226-2269266_slytherin-crest-png-harry-potter-slytherin-logo.png",alt:"Slytherin mascot"})),r.a.createElement(f.c,{to:"/favourites"},r.a.createElement("h2",{className:"fav-link"},"Favourite Spells")))}))),A=(n(47),function(e){function t(){var e;return Object(b.a)(this,t),(e=Object(E.a)(this,Object(S.a)(t).call(this))).toggleFavourite=function(){var t=e.props,n=t.addFavourite,a=t.deleteFavourite,r=t.favouriteSpells,l=t._id;e.setState({chosenFavourite:!e.state.chosenFavourite}),r.includes(l)?a(l):n(l)},e.state={chosenFavourite:!0},e}return Object(w.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.spell,a=t.type,l=t.effect,c=t.favouriteSpells,s=t._id,o=c.includes(s)?"chosen-wand":"favourite-wand";return r.a.createElement("section",{className:"spells"},r.a.createElement("div",{className:"spell-container"},r.a.createElement("img",{onClick:function(){return e.toggleFavourite()},className:o,src:"https://gamepress.gg/wizardsunite/sites/wizardsunite/files/2019-04/Luna%20Lovegood-foundable_0.png",alt:"luna lovegood wand to favourite spell card"}),r.a.createElement("div",{className:"spell-info"},r.a.createElement("h3",null,n),r.a.createElement("h4",null,a),r.a.createElement("p",null,"This ",a," ",l))),r.a.createElement("img",{className:"paper-img",src:"https://www.artsclip.com/background/XZHaFAgbeP-vintage-paper-scroll-for-short-news-slides.png",alt:"background paper for spells"}))}}]),t}(a.Component)),F=Object(s.b)((function(e){return{userHouse:e.userHouse,nameOfWizard:e.nameOfWizard,selectedSpell:e.selectedSpell,spellBook:e.spellBook,favouriteSpells:e.favouriteSpells}}),(function(e){return Object(o.bindActionCreators)({addFavourite:y,deleteFavourite:C},e)}))(A),B=(n(48),function(e){function t(){var e;return Object(b.a)(this,t),(e=Object(E.a)(this,Object(S.a)(t).call(this))).handleChange=function(t){e.setState(Object(v.a)({},t.target.name,t.target.value))},e.findSpell=function(t){t.preventDefault();var n=e.state.chosenSpell,a=e.props,r=a.spellBook;(0,a.searchedSpell)(r.filter((function(e){return e.spell.toLowerCase().includes(n.toLowerCase())}))),e.resetInputs()},e.resetInputs=function(){e.setState({chosenSpell:""})},e.backToAllSpells=function(t){t.preventDefault();var n=e.props,a=n.spellBook;(0,n.searchedSpell)(a)},e.state={chosenSpell:""},e}return Object(w.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.props.selectedSpell;return r.a.createElement("form",{className:"search-form"},e.length<=93&&r.a.createElement("button",{className:"all-spells-btn",onClick:this.backToAllSpells},"All Spells"),r.a.createElement("input",{className:"search-spells",placeholder:"Search for Spell",type:"text",name:"chosenSpell",value:this.state.chosenSpell,onChange:this.handleChange}),r.a.createElement("button",{className:"accio-btn",onClick:this.findSpell},"Accio!"))}}]),t}(a.Component)),L=Object(s.b)((function(e){return{spellBook:e.spellBook,selectedSpell:e.selectedSpell}}),(function(e){return Object(o.bindActionCreators)({hasSpells:function(t){return e(j(t))},searchedSpell:function(t){return e(N(t))}},e)}))(B),D=(n(49),function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(E.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(r)))).filterSpells=function(e){var t=n.props,a=t.spellBook;(0,t.searchedSpell)(a.filter((function(t){return t.type===e})))},n}return Object(w.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"type-spell"},r.a.createElement("button",{onClick:function(){return e.filterSpells("Charm")}},"Charm"),r.a.createElement("button",{onClick:function(){return e.filterSpells("Enchantment")}},"Enchantment"),r.a.createElement("button",{onClick:function(){return e.filterSpells("Hex")}},"Hex"),r.a.createElement("button",{onClick:function(){return e.filterSpells("Spell")}},"Spell"),r.a.createElement("button",{onClick:function(){return e.filterSpells("Curse")}},"Curse"),r.a.createElement("button",{onClick:function(){return e.filterSpells("Jinx")}},"Jinx"))}}]),t}(a.Component)),R=Object(s.b)((function(e){return{spellBook:e.spellBook}}),(function(e){return Object(o.bindActionCreators)({searchedSpell:function(t){return e(N(t))}},e)}))(D),I=(n(50),Object(s.b)((function(e){return{selectedSpell:e.selectedSpell,spellBook:e.spellBook}}))((function(e){var t=e.selectedSpell.map((function(e){return r.a.createElement(F,Object.assign({key:e.id},e))}));return r.a.createElement("section",{className:"spells-container"},r.a.createElement(x,null),r.a.createElement(L,null),r.a.createElement(R,null),r.a.createElement("div",{className:"completed-spells"},t))}))),z=(n(51),Object(s.b)((function(e){return{favouriteSpells:e.favouriteSpells,spellBook:e.spellBook}}))((function(e){var t=e.favouriteSpells,n=e.spellBook,a=t.map((function(e){return n.find((function(t){return t._id===e}))})).map((function(e){return r.a.createElement(F,e)}));return r.a.createElement("section",{className:"favourites-container"},r.a.createElement(f.b,{to:"/spells"},r.a.createElement("button",{className:"back-btn-fav"},"Back")),r.a.createElement("h2",{className:"favourites"},"Favourite Spells"),r.a.createElement("div",{className:"fav-spells"},a))}))),T=n(17),W=(n(52),function(){return r.a.createElement("section",null,r.a.createElement(T.a,{exact:!0,path:"/",render:function(){return r.a.createElement(H,null)}}),r.a.createElement(T.a,{exact:!0,path:"/spells",render:function(){return r.a.createElement(I,null)}}),r.a.createElement(T.a,{exact:!0,path:"/favourites",render:function(){return r.a.createElement(z,null)}}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=Object(o.createStore)(p,Object(i.composeWithDevTools)());c.a.render(r.a.createElement(s.a,{store:G},r.a.createElement(f.a,null,r.a.createElement(W,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.64ad46cb.chunk.js.map