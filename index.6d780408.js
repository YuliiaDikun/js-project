function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},o={},l=n.parcelRequire216a;null==l&&((l=function(e){if(e in a)return a[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},n.parcelRequire216a=l),l.register("eXQeU",(function(n,a){t(n.exports,"default",(function(){return o}));var o=e(l("amrNH")).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,a,o){var l,s=e.lambda,i=e.escapeExpression,r=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"<div class='modal-backdrop'>\n  <div class='modal-container'>\n    <div class='img-container' width='240'>\n      <button type='button' class='modal-close-btn'>\n        <svg class='modal-close-icon' data-btn='close'>\n\n          <path d='M8 8L22 22' stroke='black' stroke-width='2'></path>\n          <path d='M8 22L22 8' stroke='black' stroke-width='2'></path>\n\n        </svg>\n      </button>\n      <img\n        class='image'\n        src='https://image.tmdb.org/t/p/w300/"+i(s(null!=t?r(t,"poster_path"):t,t))+"'\n        alt='"+i(s(null!=t?r(t,"title"):t,t))+"'\n      />\n    </div>\n    <div class='movie-description'>\n      <h2 class='movie-name'>"+i(s(null!=t?r(t,"title"):t,t))+"</h2>\n      <div class='grid-container'>\n        <i class='movie-item_title'>Vote / Votes</i>\n        <div class='value'>\n          <span class='vote vote_focus'>"+i(s(null!=t?r(t,"vote_average"):t,t))+"</span>\n          <span> / </span>\n          <span class='votes votes_unactive'>"+i(s(null!=t?r(t,"vote_count"):t,t))+"</span>\n        </div>\n        <i class='movie-item_title'>Popularity</i>\n        <span class='value'>"+i("function"==typeof(l=null!=(l=r(n,"popularity")||(null!=t?r(t,"popularity"):t))?l:e.hooks.helperMissing)?l.call(null!=t?t:e.nullContext||{},{name:"popularity",hash:{},data:o,loc:{start:{line:29,column:28},end:{line:29,column:42}}}):l)+"</span>\n        <i class='movie-item_title'>Original Title</i>\n        <span class='value'>"+i(s(null!=t?r(t,"original_title"):t,t))+"</span>\n        <i class='movie-item_title'>Genre</i>\n        <span class='value'>"+i(s(null!=t?r(t,"genres"):t,t))+"</span>\n      </div>\n      <h3 class='about_title'>About</h3>\n      <article class='about_text'>\n        "+i(s(null!=t?r(t,"overview"):t,t))+"</article>\n\n      <div class='buttons-block'>\n        <button class='modal-button' data-name='watched'>add to Watched</button>\n        <button class='modal-button' data-name='queue'>add to queue</button>\n      </div>\n    </div>\n  </div>\n</div>"},useData:!0})})),l.register("6Jpgb",(function(e,n){function a(e){if(e.vote_average){const t=e.vote_average;e.vote_average=t.toFixed(1)}if(e.release_date){const t=e.release_date.slice(0,4);e.release_date=t}if(e.popularity){const t=e.popularity;e.popularity=t.toFixed(1)}if(e.genres){const t=e.genres.map((e=>e.name)),n=t.length>2?`${t[0]}, ${t[1]}, Other`:`${t.join(", ")}`;e.genres=n}return e}t(e.exports,"default",(function(){return a}))})),l.register("2ST4D",(function(n,a){t(n.exports,"default",(function(){return i}));var o=l("31u3U"),s=l("eWCmQ");function i(t,n,a){let l=(0,o.getLocalStorage)(t);if(l=l||[],l.length){const i=l.some((e=>e.id===Number(n)));i&&e(s).Notify.failure("Already in list!"),i||(l.push(a),(0,o.setLocalStorage)(t,l),e(s).Notify.success("Success! The movie has been added to the list."))}else l.push(a),(0,o.setLocalStorage)(t,l),e(s).Notify.success("Success! The movie has been added to the list.")}}));
//# sourceMappingURL=index.6d780408.js.map