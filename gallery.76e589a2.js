!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=e.parcelRequired7c6;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in a){var e=a[t];delete a[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){a[t]=e},e.parcelRequired7c6=i),i("iE7OH").register(JSON.parse('{"euV2r":"gallery.76e589a2.js","buPbL":"no-image.0b269193.jpg","6teei":"gallery.cb2e8d70.js"}')),i("4smAb"),i("4F07H");var o;o=i("aNJCr").getBundleURL("euV2r")+i("iE7OH").resolve("buPbL");var r=i("4ot2A"),c=i("jcFG7"),d=document.querySelector(".js-watched-lib-btn"),s=document.querySelector(".js-queue-lib-btn"),l=document.querySelector(".js-library-gallery"),u=document.querySelector(".info-notify-box"),m=(document.querySelector(".info-notify-text"),document.querySelector(".pagination")),_=1,v=1;function f(t){var e=localStorage.getItem(t),n=JSON.parse(e);return n?(v=Math.ceil(n.length/20),(0,c.paginationMarkUp)(_,v),n):u.classList.remove("is-hidden")}window.addEventListener("load",(function(){setTimeout((function(){d.click()}),0)}));var p=f("WATCHED_LIST_DATA_KEY"),b=f("QUEUE_LIST_DATA_KEY");function g(e){if(!e||!e.length)return A(),u.classList.remove("is-hidden");var n=e.map((function(e){A(),(0,r.checkGenresById)(e);var n="";return n=e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):t(o),' <li class="card-wraper" id="'.concat(e.id,'">\n       <a class="card-wraper_link" href="#"><img class="card-img" src="').concat(n,'" alt="').concat(e.title||e.name,'"/></a>\n       <div class="card-title">').concat(e.title||e.name,'</div>\n      <div class="wraper">\n         <div class="card-genre-wraper">\n           <div class="card-genre">').concat((0,r.checkGenresById)(e),'</div>\n         </div>\n         <div class="card-year">\n\n         ').concat(e.release_date.slice(0,4)||e.first_air_date.slice(0,4)||"",'\n\n         </div>\n         <div class="card-rating-wraper"><div class="card-rating">').concat(e.vote_average.toFixed(1),"</div></div>\n       </div>\n     </li>")})).join("");l.insertAdjacentHTML("beforeend",n)}function E(t){d.classList.add("btn-is-active"),s.classList.remove("btn-is-active"),u.classList.add("is-hidden"),1!=t&&(_=1);var e=localStorage.getItem("WATCHED_LIST_DATA_KEY"),n=JSON.parse(e);if(!n||0===n.length)return A(),m.style.display="none",u.classList.remove("is-hidden");m.style.display="flex",v=Math.ceil(n.length/20),(0,c.paginationMarkUp)(_,v);var a=20*(_-1),i=20*(_-1)+20;g(n.slice(a,i))}function y(t){var e=localStorage.getItem("QUEUE_LIST_DATA_KEY"),n=JSON.parse(e);if(1!=t&&(_=1),!n||!n.length)return A(),m.style.display="none",u.classList.remove("is-hidden");m.style.display="flex",v=Math.ceil(n.length/20),(0,c.paginationMarkUp)(_,v);var a=20*(_-1),i=20*(_-1)+20;g(n.slice(a,i))}function A(){l.innerHTML=""}g(p),d.classList.add("btn-is-active"),d.addEventListener("click",E),s.addEventListener("click",y),m.addEventListener("click",(function(t){if("..."==t.target.textContent)return;if("P"!==t.target.nodeName)return;_=t.target.textContent,">>"==t.target.textContent&&(_=Number(targetPage.textContent)+1);"<<"==t.target.textContent&&(_=Number(targetPage.textContent)-1);(0,c.paginationMarkUp)(_,v),e=_,n=20*(e-1),a=20*(e-1)+20,p=f("WATCHED_LIST_DATA_KEY"),b=f("QUEUE_LIST_DATA_KEY"),d.classList.contains("btn-is-active")?g(p.slice(n,a)):g(b.slice(n,a));var e,n,a})),i("3qTkO");var L,T,S,h,D;r=i("4ot2A");function w(t){localStorage.setItem("WATCHED_LIST_DATA_KEY",JSON.stringify(t))}function I(t){localStorage.setItem("QUEUE_LIST_DATA_KEY",JSON.stringify(t))}window.addEventListener("scroll",(function(){document.documentElement.style.setProperty("--scroll-y","".concat(window.scrollY,"px"))}));var k=document.querySelector(".js-watched-lib-btn"),U=document.querySelector(".js-library-gallery"),O=document.querySelector(".backdrop-modal"),q=document.querySelector(".button-close"),N=document.querySelector(".modal-movie-card");function H(t){var e=localStorage.getItem(t);return JSON.parse(e)}function C(t){T=document.querySelector(".js-btn-to-watched"),S=document.querySelector(".js-btn-from-watched"),h=document.querySelector(".js-btn-to-queue"),D=document.querySelector(".js-btn-from-queue"),L=+T.id,T.addEventListener("click",x),S.addEventListener("click",K),h.addEventListener("click",j),D.addEventListener("click",J),function(){var t=H("WATCHED_LIST_DATA_KEY")||[],e=H("QUEUE_LIST_DATA_KEY")||[],n=t.find((function(t){return t.id===L})),a=e.find((function(t){return t.id===L}));0!==t.length&&n||M(S);0!==e.length&&a||M(D);n&&M(T);a&&M(h)}(),q.addEventListener("click",F),O.addEventListener("click",(function(t){return function(t){if("backdrop-modal"!==t.target.classList.value)return;F()}(t)})),document.addEventListener("keydown",(function(t){return Q(t)})),O.classList.remove("is-hidden"),setTimeout((function(){O.firstElementChild.classList.remove("is-hidden")}),350),document.body.classList.add("modal-open")}function M(t){t.style.display="none"}function Y(t){t.style.display=""}function x(){var t=R(L)||P(L),e=H("WATCHED_LIST_DATA_KEY")||[];e.find((function(t){return t.id===L}))||(e.push(t),w(e),M(T),Y(S))}function K(){var t=R(L)||P(L),e=H("WATCHED_LIST_DATA_KEY")||[];e.find((function(t){return t.id===L}))&&(w(e.filter((function(t){return t.id!==L}))),e.push(t),function(t){sessionStorage.setItem("WATCHED_MODAL_DATA_KEY",JSON.stringify(t))}(e),M(S),Y(T));k.classList.contains("btn-is-active")&&(E(1),M(S),Y(T))}function j(){var t=R(L)||P(L),e=H("QUEUE_LIST_DATA_KEY")||[];e.find((function(t){return t.id===L}))||(e.push(t),I(e),M(h),Y(D))}function J(){var t=R(L)||P(L),e=H("QUEUE_LIST_DATA_KEY")||[];e.find((function(t){return t.id===L}))&&(I(e.filter((function(t){return t.id!==L}))),e.push(t),function(t){sessionStorage.setItem("QUEUE_MODAL_DATA_KEY",JSON.stringify(t))}(e),M(D),Y(h));k.classList.contains("btn-is-active")||(y(1),M(D),Y(h))}function F(t){O.classList.add("is-hidden"),O.firstElementChild.classList.remove("is-hidden"),q.removeEventListener("click",F),O.removeEventListener("click",F),document.removeEventListener("keydown",(function(t){return Q(t)})),document.body.classList.remove("modal-open"),O.style.background="";var e=document.body,n=e.style.top;e.style.position="",e.style.top="",window.scrollTo(0,-1*parseInt(n||"0"))}function Q(t){"Escape"===t.key&&F()}U.addEventListener("click",(function(t){"IMG"===t.target.nodeName&&W(t)}));var W=function(e){var n=document.documentElement.style.getPropertyValue("--scroll-y"),a=document.body;a.style.position="fixed",a.style.top="-".concat(n);var i=R(e.target.closest("li").id);i&&(L=i.id,function(e){if(null!==e.backdrop_path){var n="https://image.tmdb.org/t/p/original/".concat(e.backdrop_path);O.style.backgroundImage="url('".concat(n,"')"),O.style.backgroundSize="cover",O.style.backgroundPosition="50% 50%"}!function(e){var n="https://image.tmdb.org/t/p/w500",a="";a=e.poster_path?"".concat(n).concat(e.poster_path):t(o);var i="\n      <div class='modal-movie-card__wrappe-img'>\n                <img id=\"".concat(e.id,'" class="modal-movie-card__image" src="').concat(a,'" alt="').concat(e.title||e.name,"\" />\n            </div>\n            <div class='modal-movie-data'>\n                <h2 class='modal-movie-data__title'>").concat(e.title||e.name,"</h2>\n            <table class='modal-movie-data-table'>\n                <tr class='modal-movie-data-table__row'>\n                    <td>\n                        <p class='modal-movie-data__attribute'>Vote / Votes</p>\n                    </td>\n                    <td>\n                        <p><span class='modal-movie-data__vote'>").concat(e.vote_average.toFixed(1),"</span> / ").concat(e.vote_count,"</p>\n                    </td>\n                </tr>\n                <tr class='modal-movie-data-table__row'>\n                    <td>\n                        <p>Popularity</p>\n                    </td>\n                    <td>\n                        <p>").concat(e.popularity.toFixed(1),"</p>\n                    </td>\n                </tr>\n                <tr class='modal-movie-data-table__row'>\n                    <td>\n                        <p>Original Title</p>\n                    </td>\n                    <td>\n                        <p>").concat(e.original_title,"</p>\n                    </td>\n                </tr>\n                <tr class='modal-movie-data-table__row'>\n                    <td>\n                        <p>Genre</p>\n                    </td>\n                    <td>\n                        <p>").concat((0,r.checkGenresByIdModal)(e),"</p>\n                    </td>\n                </tr>\n            </table>\n            <h3 class='modal-movie-data__about_title'>About</h3>\n            <p class='modal-movie-data__about'>").concat(e.overview,"</p>\n            <ul class='modal-movie-data__btn-list'>\n                <li class='modal-movie-data__btn-item'  >\n                    <button id='").concat(e.id,"' class='modal-movie-data__btn modal-movie-data__btn-watched js-btn-to-watched' type='button' data-action='").concat(e.id,"'   >\n                        ADD TO WATCHED\n                    </button>\n                    <button  id='").concat(e.id,"' class='modal-movie-data__btn modal-movie-data__btn-watched active js-btn-from-watched' type='button' data-action='").concat(e.id,"'>\n                        REMOVE FROM WATCHED\n                    </button>\n                </li>\n                <li class='modal-movie-data__button-item' >\n                    <button  id='").concat(e.id,"' class='modal-movie-data__btn modal-movie-data__btn-queue js-btn-to-queue' type='button' data-action='").concat(e.id,"'>\n                        ADD TO QUEUE\n                    </button>\n                    <button id='").concat(e.id,"' class='modal-movie-data__btn modal-movie-data__btn-queue active js-btn-from-queue' type='button' data-action='").concat(e.id,"'>\n                        REMOVE FROM QUEUE\n                    </button>\n                </li>\n            </ul>\n            <div class=\"trailer-btn-wrapper\">\n            <button  id='").concat(e.id,"' class='trailer-btn' type='button' data-action='").concat(e.id,"'>\n                        watch trailer\n                    </button>\n            </div>\n            </div>");N.innerHTML=i}(e)}(i),C())};function R(t){if(k.classList.contains("btn-is-active")){var e=localStorage.getItem("WATCHED_LIST_DATA_KEY");return JSON.parse(e).find((function(e){return e.id===Number(t)}))}var n=localStorage.getItem("QUEUE_LIST_DATA_KEY");return JSON.parse(n).find((function(e){return e.id===Number(t)}))}function P(t){if(k.classList.contains("btn-is-active")){var e=sessionStorage.getItem("WATCHED_MODAL_DATA_KEY");return JSON.parse(e).find((function(e){return e.id===Number(t)}))}var n=sessionStorage.getItem("QUEUE_MODAL_DATA_KEY");return JSON.parse(n).find((function(e){return e.id===Number(t)}))}i("AGNCF")}();
//# sourceMappingURL=gallery.76e589a2.js.map
