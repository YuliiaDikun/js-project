var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},t=e.parcelRequire216a;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},e.parcelRequire216a=t),t.register("hzhul",(function(e,n){var r,o,i,l;r=e.exports,o="SESSION_KEY",i=function(){return a},Object.defineProperty(r,o,{get:i,set:l,enumerable:!0,configurable:!0});const f=new(0,t("9Bkxl").default),a="genresList";f.getGenres().then((({genres:e})=>{localStorage.setItem(a,JSON.stringify(e))}))})),t("hzhul");
//# sourceMappingURL=index.2b053c19.js.map