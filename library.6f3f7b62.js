!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},l=n.parcelRequire216a;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var l={id:e,exports:{}};return t[e]=l,n.call(l.exports,l,l.exports),l.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){a[e]=n},n.parcelRequire216a=l);var i=l("bpxeT"),r=l("2TvXO"),o=l("iU1Pc"),c=l("lHIzZ"),s=l("2eIIo"),d=l("pWSgs"),u=l("UL92Z"),f=l("l5bVx"),m=e(l("WMajR")).template({compiler:[8,">= 4.3.0"],main:function(n,t,a,l,i){var r,o=null!=t?t:n.nullContext||{},c=n.hooks.helperMissing,s="function",d=n.escapeExpression,u=n.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"<li class='films__item' data-id="+d((void 0===(r=null!=(r=u(a,"id")||(null!=t?u(t,"id"):t))?r:c)?"undefined":e(f)(r))===s?r.call(o,{name:"id",hash:{},data:i,loc:{start:{line:1,column:32},end:{line:1,column:38}}}):r)+">\n    <div class='films__img'>\n        <img src='https://image.tmdb.org/t/p/w500"+d((void 0===(r=null!=(r=u(a,"poster_path")||(null!=t?u(t,"poster_path"):t))?r:c)?"undefined":e(f)(r))===s?r.call(o,{name:"poster_path",hash:{},data:i,loc:{start:{line:3,column:49},end:{line:3,column:64}}}):r)+"' alt="+d((void 0===(r=null!=(r=u(a,"original_title")||(null!=t?u(t,"original_title"):t))?r:c)?"undefined":e(f)(r))===s?r.call(o,{name:"original_title",hash:{},data:i,loc:{start:{line:3,column:70},end:{line:3,column:88}}}):r)+" loading='lazy' />\n    </div>\n    <div class='films__description'>\n        <p class='films__name'>"+d((void 0===(r=null!=(r=u(a,"title")||(null!=t?u(t,"title"):t))?r:c)?"undefined":e(f)(r))===s?r.call(o,{name:"title",hash:{},data:i,loc:{start:{line:6,column:31},end:{line:6,column:40}}}):r)+"</p>\n        <div class=\"films__container\">\n            <p class='films__info'>"+d((void 0===(r=null!=(r=u(a,"genres")||(null!=t?u(t,"genres"):t))?r:c)?"undefined":e(f)(r))===s?r.call(o,{name:"genres",hash:{},data:i,loc:{start:{line:8,column:35},end:{line:8,column:45}}}):r)+" | "+d((void 0===(r=null!=(r=u(a,"release_date")||(null!=t?u(t,"release_date"):t))?r:c)?"undefined":e(f)(r))===s?r.call(o,{name:"release_date",hash:{},data:i,loc:{start:{line:8,column:48},end:{line:8,column:64}}}):r)+"</p>\n            <span class='films__rating'>"+d((void 0===(r=null!=(r=u(a,"vote_average")||(null!=t?u(t,"vote_average"):t))?r:c)?"undefined":e(f)(r))===s?r.call(o,{name:"vote_average",hash:{},data:i,loc:{start:{line:9,column:40},end:{line:9,column:56}}}):r)+"</span>\n        </div>      \n    </div>\n</li>"},useData:!0}),v=l("bGg9a");l("9VC5X"),l("hPab3");var p=document.querySelector("[data-watched]"),g=document.querySelector("[data-queue]"),h=document.querySelector(".films"),L=document.querySelector("#js-film-modal"),_="watchedList",y="queueList",w="selectedList";p.addEventListener("click",(function(){g.classList.remove("is-active"),p.classList.add("is-active"),k(_),(0,u.setLocalStorage)(w,"watched")})),g.addEventListener("click",(function(){p.classList.remove("is-active"),g.classList.add("is-active"),k(y),(0,u.setLocalStorage)(w,"queue")})),h.addEventListener("click",(function(e){return x.apply(this,arguments)}));var b=new(0,c.default);function x(){return(x=e(i)(e(r).mark((function n(t){var a,l,i,c,f,m,p,g,h,x,k,q,M,O,N,D,C;return e(r).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(p=function(e){return e.map((function(e){return e})).find((function(e){return"Official Trailer"===e.name}))},n.prev=1,"UL"!==t.target.nodeName){n.next=4;break}return n.abrupt("return");case 4:return a=(0,u.getLocalStorage)(w),l=t.target.closest("li"),i=l.dataset.id,b.idFilm=i,n.next=10,b.getFilmByID();case 10:return c=n.sent,n.next=13,b.getTrailerById();case 13:f=n.sent,m=f.results,g=p(m),h="https://www.youtube.com/embed/".concat(g.key),(x=(0,d.default)(c)).movie=h,k=(0,s.default)(x),L.innerHTML=k,L.classList.remove("is-hidden"),q=document.querySelector(".trailerShow"),M=document.querySelector(".hidden"),q.addEventListener("click",(function(){M.classList.toggle("trailer__youtube")})),O=document.querySelector('[data-name="watched"]'),N=document.querySelector('[data-name="queue"]'),O.textContent="REMOVE","queue"===a&&(N.textContent="ADD TO WATCHED"),D=function(e){E("watched"===a?_:y,i,l)},C=function(e){"queue"===a?((0,v.default)(_,i,x),E(y,i,l)):((0,v.default)(y,i,x),E(_,i,l))},L.addEventListener("click",T),document.addEventListener("keydown",S),O.addEventListener("click",D),N.addEventListener("click",C),n.next=41;break;case 38:n.prev=38,n.t0=n.catch(1),e(o).Notify.failure(n.t0.message);case 41:case"end":return n.stop()}}),n,null,[[1,38]])})))).apply(this,arguments)}function E(e,n,t){var a=(0,u.getLocalStorage)(e),l=a.findIndex((function(e){return e.id===Number(n)}));a.splice(l,1),(0,u.setLocalStorage)(e,a),q(),t.remove()}function k(n){h.innerHTML="";var t=(0,u.getLocalStorage)(n);t.length||e(o).Notify.failure("The list is empty.");var a=t.map((function(e){return m(e)})).join("");h.insertAdjacentHTML("beforeend",a)}function q(){L.innerHTML="",L.classList.add("is-hidden"),document.removeEventListener("keydown",S),L.removeEventListener("click",T)}function S(e){"Escape"===e.code&&q()}function T(e){"path"!==e.target.nodeName&&"svg"!==e.target.nodeName||q(),e.target===e.currentTarget&&q()}}();
//# sourceMappingURL=library.6f3f7b62.js.map