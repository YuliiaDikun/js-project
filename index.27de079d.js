!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},o={},l=n.parcelRequire216a;null==l&&((l=function(e){if(e in a)return a[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},n.parcelRequire216a=l),l.register("2eIIo",(function(n,a){t(n.exports,"default",(function(){return o}));var o=e(l("WMajR")).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,a,o){var l,i=e.lambda,s=e.escapeExpression,r=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"\n  <div class='modal-container'>\n    <div class='img-container' width='240'>\n      <button type='button' class='modal-close-btn'>\n        <svg class='modal-close-icon' data-btn='close'>\n\n          <path d='M8 8L22 22' stroke='black' stroke-width='2'></path>\n          <path d='M8 22L22 8' stroke='black' stroke-width='2'></path>\n\n        </svg>\n      </button>\n      <img\n        class='image'\n        src='https://image.tmdb.org/t/p/w300/"+s(i(null!=t?r(t,"poster_path"):t,t))+"'\n        alt='"+s(i(null!=t?r(t,"title"):t,t))+"'\n      />\n    </div>\n    <div class='movie-description'>\n      <h2 class='movie-name'>"+s(i(null!=t?r(t,"title"):t,t))+"</h2>\n      <div class='grid-container'>\n        <i class='movie-item_title'>Vote / Votes</i>\n        <div class='value'>\n          <span class='vote vote_focus'>"+s(i(null!=t?r(t,"vote_average"):t,t))+"</span>\n          <span> / </span>\n          <span class='votes votes_unactive'>"+s(i(null!=t?r(t,"vote_count"):t,t))+"</span>\n        </div>\n        <i class='movie-item_title'>Popularity</i>\n        <span class='value'>"+s("function"==typeof(l=null!=(l=r(n,"popularity")||(null!=t?r(t,"popularity"):t))?l:e.hooks.helperMissing)?l.call(null!=t?t:e.nullContext||{},{name:"popularity",hash:{},data:o,loc:{start:{line:28,column:28},end:{line:28,column:42}}}):l)+"</span>\n        <i class='movie-item_title'>Original Title</i>\n        <span class='value'>"+s(i(null!=t?r(t,"original_title"):t,t))+"</span>\n        <i class='movie-item_title'>Genre</i>\n        <span class='value'>"+s(i(null!=t?r(t,"genres"):t,t))+"</span>\n      </div>\n      <h3 class='about_title'>About</h3>\n      <article class='about_text'>\n        "+s(i(null!=t?r(t,"overview"):t,t))+"</article>\n\n      <div class='buttons-block'>\n        <button class='modal-button' data-name='watched'>add to Watched</button>\n        <button class='modal-button' data-name='queue'>add to queue</button>\n        <button class='modal-button trailerShow'>watch trailer</button>\n      </div>\n    </div>\n    <div class=\"video\">\n    <iframe\n      class='hidden'\n      height='315'\n      src='"+s(i(null!=t?r(t,"movie"):t,t))+"'\n      title='YouTube video player'\n      frameborder='0'\n      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'\n      allowfullscreen\n    ></iframe>\n    </div>\n  </div>\n\n"},useData:!0})})),l.register("pWSgs",(function(e,n){function a(e){if(e.vote_average){var t=e.vote_average;e.vote_average=t.toFixed(1)}if(e.release_date){var n=e.release_date.slice(0,4);e.release_date=n}if(e.popularity){var a=e.popularity;e.popularity=a.toFixed(1)}if(e.genres){var o=e.genres.map((function(e){return e.name})),l=o.length>2?"".concat(o[0],", ").concat(o[1],", Other"):"".concat(o.join(", "));e.genres=l}return e}t(e.exports,"default",(function(){return a}))})),l.register("bGg9a",(function(n,a){t(n.exports,"default",(function(){return s}));var o=l("UL92Z"),i=l("iU1Pc");function s(t,n,a){var l=(0,o.getLocalStorage)(t);if((l=l||[]).length){var s=l.some((function(e){return e.id===Number(n)}));s&&e(i).Notify.failure("Already in list!"),s||(l.push(a),(0,o.setLocalStorage)(t,l),e(i).Notify.success("Success! The movie has been added to the list."))}else l.push(a),(0,o.setLocalStorage)(t,l),e(i).Notify.success("Success! The movie has been added to the list.")}}))}();
//# sourceMappingURL=index.27de079d.js.map
