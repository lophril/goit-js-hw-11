import{i as n,S as h}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="47124764-867379346a6bcd25da110daf2",f="https://pixabay.com/api/";function p(o){const s=new URLSearchParams({key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${f}?${s}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function y(o){return o.map(({webformatURL:s,largeImageURL:t,tags:a,likes:e,views:r,comments:i,downloads:d})=>`<li class="gallery-item">
          <a class="gallery-link" href="${t}">
            <img
              class="gallery-image"
              src="${s}"
              alt="${a}"
              width="360"
            />
          </a>
          <div class="thumb-block">
            <div class="block">
              <h2 class="tittle">Likes</h2>
              <p class="amount">${e}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Views</h2>
              <p class="amount">${r}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Comments</h2>
              <p class="amount">${i}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${d}</p>
            </div>
          </div>
        </li>`).join("")}const u=document.querySelector(".js-search"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");l.style.display="none";u.addEventListener("submit",g);function g(o){o.preventDefault(),c.innerHTML="",l.style.display="block";const s=o.target.elements.search.value.trim();if(!s){n.error({title:"Error",message:"Please enter a valid search query."}),l.style.display="none";return}p(s).then(t=>{if(l.style.display="none",!t.hits.length){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}c.innerHTML=y(t.hits),new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),u.reset()}).catch(t=>{l.style.display="none",n.error({title:"Error",message:`Something went wrong: ${t.message}`}),console.error(t)})}
//# sourceMappingURL=index.js.map
