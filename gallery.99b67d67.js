!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in a){var e=a[t];delete a[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){a[t]=e},e.parcelRequired7c6=o),o("iE7OH").register(JSON.parse('{"euV2r":"gallery.99b67d67.js","buPbL":"no-image.0b269193.jpg","6teei":"gallery.86079c34.js"}')),o("4smAb"),o("4F07H");var i;i=o("aNJCr").getBundleURL("euV2r")+o("iE7OH").resolve("buPbL");var c=o("4ot2A"),d=document.querySelector(".js-watched-lib-btn"),r=document.querySelector(".js-queue-lib-btn"),s=document.querySelector(".js-library-gallery"),l=document.querySelector(".info-notify-box");document.querySelector(".info-notify-text");function u(t){var e=localStorage.getItem(t);return JSON.parse(e)}var m=u("WATCHED_LIST_DATA_KEY");u("QUEUE_LIST_DATA_KEY");function v(e){if(!e||!e.length)return p(),l.classList.remove("is-hidden");var n=e.map((function(e){p(),(0,c.checkGenresById)(e);var n="";return n=e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):t(i),' <li class="card-wraper" id="'.concat(e.id,'">\n       <a class="card-wraper_link" href="#"><img class="card-img" src="').concat(n,'" alt="').concat(e.title||e.name,'"/></a>\n       <div class="card-title">').concat(e.title||e.name,'</div>\n      <div class="wraper">\n         <div class="card-genre-wraper">\n           <div class="card-genre">').concat((0,c.checkGenresById)(e),'</div>\n         </div>\n         <div class="card-year">\n\n         ').concat(e.release_date.slice(0,4)||e.first_air_date.slice(0,4)||"",'\n\n         </div>\n         <div class="card-rating-wraper"><div class="card-rating">').concat(e.vote_average.toFixed(1),"</div></div>\n       </div>\n     </li>")})).join("");s.insertAdjacentHTML("beforeend",n)}function b(){d.classList.add("btn-is-active"),r.classList.remove("btn-is-active"),l.classList.add("is-hidden");var t=localStorage.getItem("WATCHED_LIST_DATA_KEY");v(JSON.parse(t))}function _(){l.classList.add("is-hidden"),r.classList.add("btn-is-active"),d.classList.remove("btn-is-active");var t=localStorage.getItem("QUEUE_LIST_DATA_KEY");v(JSON.parse(t))}function p(){s.innerHTML=""}v(m),d.classList.add("btn-is-active"),d.addEventListener("click",b),r.addEventListener("click",_),o("3qTkO");var f,E,y,g,L,S,T;c=o("4ot2A");function A(t){localStorage.setItem("WATCHED_LIST_DATA_KEY",JSON.stringify(t))}function h(t){localStorage.setItem("QUEUE_LIST_DATA_KEY",JSON.stringify(t))}window.addEventListener("scroll",(function(){document.documentElement.style.setProperty("--scroll-y","".concat(window.scrollY,"px"))}));var w=document.querySelector(".js-watched-lib-btn"),D=document.querySelector(".js-library-gallery"),q=document.querySelector(".backdrop-modal"),I=document.querySelector(".button-close"),k=document.querySelector(".modal-movie-card");function j(t){var e=localStorage.getItem(t);return JSON.parse(e)}function O(t){E=document.querySelector(".js-btn-to-watched"),y=document.querySelector(".js-btn-from-watched"),g=document.querySelector(".js-btn-to-queue"),L=document.querySelector(".js-btn-from-queue"),S=document.querySelector(".js-btn-disabled-watched"),T=document.querySelector(".js-btn-disabled-queue"),f=+E.id,E.addEventListener("click",N),y.addEventListener("click",Y),g.addEventListener("click",C),L.addEventListener("click",K),function(){var t=j("WATCHED_LIST_DATA_KEY")||[],e=j("QUEUE_LIST_DATA_KEY")||[],n=t.find((function(t){return t.id===f})),a=e.find((function(t){return t.id===f}));0!==t.length&&n||(H(y),H(S));0!==e.length&&a||(H(L),H(T));n&&(H(E),H(S));a&&(H(g),H(T))}(),I.addEventListener("click",x),q.addEventListener("click",(function(t){return function(t){if("backdrop-modal"!==t.target.classList.value)return;x()}(t)})),document.addEventListener("keydown",(function(t){return F(t)})),q.classList.remove("is-hidden"),setTimeout((function(){q.firstElementChild.classList.remove("is-hidden")}),350),document.body.classList.add("modal-open")}function H(t){t.style.display="none"}function U(t){t.style.display=""}function N(){var t=J(f),e=j("WATCHED_LIST_DATA_KEY")||[];e.find((function(t){return t.id===f}))||(e.push(t),A(e),H(E),H(S),U(y))}function Y(){var t=j("WATCHED_LIST_DATA_KEY")||[];t.find((function(t){return t.id===f}))&&(A(t.filter((function(t){return t.id!==f}))),H(y),H(S),U(E));w.classList.contains("btn-is-active")&&(b(),H(E),H(y),U(S))}function C(){var t=J(f),e=j("QUEUE_LIST_DATA_KEY")||[];e.find((function(t){return t.id===f}))||(e.push(t),h(e),H(g),H(T),U(L))}function K(){var t=j("QUEUE_LIST_DATA_KEY")||[];t.find((function(t){return t.id===f}))&&(h(t.filter((function(t){return t.id!==f}))),H(L),H(T),U(g));w.classList.contains("btn-is-active")||(_(),H(g),H(L),U(T))}function x(t){q.classList.add("is-hidden"),q.firstElementChild.classList.remove("is-hidden"),I.removeEventListener("click",x),q.removeEventListener("click",x),document.removeEventListener("keydown",(function(t){return F(t)})),document.body.classList.remove("modal-open"),q.style.background="";var e=document.body,n=e.style.top;e.style.position="",e.style.top="",window.scrollTo(0,-1*parseInt(n||"0"))}function F(t){"Escape"===t.key&&x()}D.addEventListener("click",(function(t){"IMG"===t.target.nodeName&&M(t)}));var M=function(e){var n=document.documentElement.style.getPropertyValue("--scroll-y"),a=document.body;a.style.position="fixed",a.style.top="-".concat(n);var o=J(e.target.closest("li").id);o&&(f=o.id,function(e){if(null!==e.backdrop_path){var n="https://image.tmdb.org/t/p/original/".concat(e.backdrop_path);q.style.backgroundImage="url('".concat(n,"')"),q.style.backgroundSize="cover",q.style.backgroundPosition="50% 50%"}!function(e){var n="https://image.tmdb.org/t/p/w500",a="";a=e.poster_path?"".concat(n).concat(e.poster_path):t(i);var o="\n      <div class='modal-movie-card__wrappe-img'>\n                <img id=\"".concat(e.id,'" class="modal-movie-card__image" src="').concat(a,'" alt="').concat(e.title||e.name,"\" />\n            </div>\n            <div class='modal-movie-data'>\n                <h2 class='modal-movie-data__title'>").concat(e.title||e.name,"</h2>\n            <table class='modal-movie-data-table'>\n                <tr class='modal-movie-data-table__row'>\n                    <td>\n                        <p class='modal-movie-data__attribute'>Vote / Votes</p>\n                    </td>\n                    <td>\n                        <p><span class='modal-movie-data__vote'>").concat(e.vote_average.toFixed(1),"</span> / ").concat(e.vote_count,"</p>\n                    </td>\n                </tr>\n                <tr class='modal-movie-data-table__row'>\n                    <td>\n                        <p>Popularity</p>\n                    </td>\n                    <td>\n                        <p>").concat(e.popularity.toFixed(1),"</p>\n                    </td>\n                </tr>\n                <tr class='modal-movie-data-table__row'>\n                    <td>\n                        <p>Original Title</p>\n                    </td>\n                    <td>\n                        <p>").concat(e.original_title,"</p>\n                    </td>\n                </tr>\n                <tr class='modal-movie-data-table__row'>\n                    <td>\n                        <p>Genre</p>\n                    </td>\n                    <td>\n                        <p>").concat((0,c.checkGenresByIdModal)(e),"</p>\n                    </td>\n                </tr>\n            </table>\n            <h3 class='modal-movie-data__about_title'>About</h3>\n            <p class='modal-movie-data__about'>").concat(e.overview,"</p>\n            <ul class='modal-movie-data__btn-list'>\n                <li class='modal-movie-data__btn-item'  >\n                    <button id='").concat(e.id,"' class='modal-movie-data__btn modal-movie-data__btn-watched js-btn-to-watched' type='button' data-action='").concat(e.id,"'   >\n                        ADD TO WATCHED\n                    </button>\n                    <button  id='").concat(e.id,"' class='modal-movie-data__btn modal-movie-data__btn-watched active js-btn-from-watched' type='button' data-action='").concat(e.id,"'>\n                        REMOVE FROM WATCHED\n                    </button>\n                    <button class='disabled js-btn-disabled-watched' type='button' data-action='").concat(e.id,"' disabled>\n                        deletion successful\n                    </button>\n                </li>\n                <li class='modal-movie-data__button-item' >\n                    <button  id='").concat(e.id,"' class='modal-movie-data__btn modal-movie-data__btn-queue js-btn-to-queue' type='button' data-action='").concat(e.id,"'>\n                        ADD TO QUEUE\n                    </button>\n                    <button id='").concat(e.id,"' class='modal-movie-data__btn modal-movie-data__btn-queue active js-btn-from-queue' type='button' data-action='").concat(e.id,"'>\n                        REMOVE FROM QUEUE\n                    </button>\n                    <button class='disabled  js-btn-disabled-queue' type='button' data-action='").concat(e.id,"' disabled>\n                        deletion successful\n                    </button>\n                </li>\n            </ul>\n            <div class=\"trailer-btn-wrapper\">\n            <button  id='").concat(e.id,"' class='trailer-btn' type='button' data-action='").concat(e.id,"'>\n                        watch trailer\n                    </button>\n            </div>\n            </div>");k.innerHTML=o}(e)}(o),O())};function J(t){if(w.classList.contains("btn-is-active")){var e=localStorage.getItem("WATCHED_LIST_DATA_KEY");return JSON.parse(e).find((function(e){return e.id===Number(t)}))}var n=localStorage.getItem("QUEUE_LIST_DATA_KEY");return JSON.parse(n).find((function(e){return e.id===Number(t)}))}o("AGNCF")}();
//# sourceMappingURL=gallery.99b67d67.js.map
