function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},l={},a=t.parcelRequire216a;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in l){var t=l[e];delete l[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){l[e]=t},t.parcelRequire216a=a);var o=a("eWCmQ"),i=a("9Bkxl"),s=a("eXQeU"),c=a("6Jpgb"),r=a("31u3U");var d=e(a("amrNH")).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,l,a){var o,i=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,c="function",r=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"<li class='films__item' data-id="+r(typeof(o=null!=(o=d(n,"id")||(null!=t?d(t,"id"):t))?o:s)===c?o.call(i,{name:"id",hash:{},data:a,loc:{start:{line:1,column:32},end:{line:1,column:38}}}):o)+">\n    <div class='films__img'>\n        <img src='https://image.tmdb.org/t/p/w500"+r(typeof(o=null!=(o=d(n,"poster_path")||(null!=t?d(t,"poster_path"):t))?o:s)===c?o.call(i,{name:"poster_path",hash:{},data:a,loc:{start:{line:3,column:49},end:{line:3,column:64}}}):o)+"' alt="+r(typeof(o=null!=(o=d(n,"original_title")||(null!=t?d(t,"original_title"):t))?o:s)===c?o.call(i,{name:"original_title",hash:{},data:a,loc:{start:{line:3,column:70},end:{line:3,column:88}}}):o)+" loading='lazy' />\n    </div>\n    <div class='films__description'>\n        <p class='films__name'>"+r(typeof(o=null!=(o=d(n,"title")||(null!=t?d(t,"title"):t))?o:s)===c?o.call(i,{name:"title",hash:{},data:a,loc:{start:{line:6,column:31},end:{line:6,column:40}}}):o)+"</p>\n        <div class=\"films__container\">\n            <p class='films__info'>"+r(typeof(o=null!=(o=d(n,"genres")||(null!=t?d(t,"genres"):t))?o:s)===c?o.call(i,{name:"genres",hash:{},data:a,loc:{start:{line:8,column:35},end:{line:8,column:45}}}):o)+" | "+r(typeof(o=null!=(o=d(n,"release_date")||(null!=t?d(t,"release_date"):t))?o:s)===c?o.call(i,{name:"release_date",hash:{},data:a,loc:{start:{line:8,column:48},end:{line:8,column:64}}}):o)+"</p>\n            <span class='films__rating'>"+r(typeof(o=null!=(o=d(n,"vote_average")||(null!=t?d(t,"vote_average"):t))?o:s)===c?o.call(i,{name:"vote_average",hash:{},data:a,loc:{start:{line:9,column:40},end:{line:9,column:56}}}):o)+"</span>\n        </div>      \n    </div>\n</li>"},useData:!0}),u=a("2ST4D");a("4S0r6"),a("lo17Q");const m=document.querySelector("[data-watched]"),f=document.querySelector("[data-queue]"),p=document.querySelector(".films");m.addEventListener("click",(function(){f.classList.remove("is-active"),m.classList.add("is-active"),L("watchedList"),(0,r.setLocalStorage)("selectedList","watched")})),f.addEventListener("click",(function(){m.classList.remove("is-active"),f.classList.add("is-active"),L("queueList"),(0,r.setLocalStorage)("selectedList","queue")})),p.addEventListener("click",(async function(t){try{if("UL"===t.target.nodeName)return;const e=(0,r.getLocalStorage)("selectedList"),n=t.target.closest("li");let l=n.dataset.id;v.idFilm=l;const a=await v.getFilmByID(),o=(0,c.default)(a),i=(0,s.default)(o);document.querySelector("body").insertAdjacentHTML("beforeend",i);let d=document.querySelector(".modal-backdrop"),m=document.querySelector('[data-name="watched"]'),f=document.querySelector('[data-name="queue"]');m.textContent="REMOVE","queue"===e&&(f.textContent="ADD TO WATCHED");const p=e=>{"Escape"===e.code&&(d.remove(),document.removeEventListener("keydown",p))},L=e=>{"path"!==e.target.nodeName&&"svg"!==e.target.nodeName||(d.remove(),document.removeEventListener("keydown",p)),e.target===e.currentTarget&&(d.remove(),document.removeEventListener("keydown",p))},h=t=>{g("watched"===e?"watchedList":"queueList",l,n,d)},y=t=>{"queue"===e?((0,u.default)("watchedList",l,o,p),g("queueList",l,n,d)):((0,u.default)("queueList",l,o,p),g("watchedList",l,n,d))};d.addEventListener("click",L),document.addEventListener("keydown",p),m.addEventListener("click",h),f.addEventListener("click",y)}catch(t){e(o).Notify.failure(t.message)}}));const v=new(0,i.default);function g(e,t,n,l,a){const o=(0,r.getLocalStorage)(e),i=o.findIndex((e=>e.id===Number(t)));o.splice(i,1),(0,r.setLocalStorage)(e,o),n.remove(),l.remove(),document.removeEventListener("keydown",a)}function L(t){p.innerHTML="";const n=(0,r.getLocalStorage)(t);n.length||e(o).Notify.failure("The list is empty.");const l=n.map((e=>d(e))).join("");p.insertAdjacentHTML("beforeend",l)}
//# sourceMappingURL=library.1ee40d60.js.map