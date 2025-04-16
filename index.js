import{a as g,S as d,i as a}from"./assets/vendor-BBsfN11L.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function f(n){return g("https://pixabay.com/api/",{params:{key:"49671136-929ec105133e7206b410421f8",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>{console.log("Помилка при завантаженні даних:",r)})}const m=document.querySelector(".gallery"),l=document.querySelector("#loader"),h=new d(".gallery a");function p(n){return n.map(({webformatURL:o,tags:r,largeImageURL:s,likes:e,views:t,comments:i,downloads:u})=>`
        <li class="gallery-item">
        <div class='photo-container'>
          <a href="${s}">
            <img src="${o}" alt="${r} width='360'" />
          </a>
          <div class="image-info">
            <p class="image-info-text"><strong>Likes</strong> ${e}</p>
            <p class="image-info-text"><strong>Views</strong> ${t}</p>
            <p class="image-info-text"><strong>Comments</strong> ${i}</p>
            <p class="image-info-text"><strong>Downloads</strong> ${u}</p>
          </div>
        </li>
        
        </div>`).join("")}function y(){m.innerHTML=""}function L(){l.classList.remove("visually-hidden"),console.log("showLoader")}function v(){l.classList.add("visually-hidden"),console.log("hideLoader")}function S(){h.refresh()}const c=document.querySelector(".form"),b=document.querySelector(".gallery"),q=document.querySelector('input[name="search-text"]');c.addEventListener("submit",x);function x(n){n.preventDefault();const o=q.value.trim();if(o.length===0){a.error({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(),y(),f(o).then(r=>{if(r.hits.length===0){a.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b.insertAdjacentHTML("beforeend",p(r.hits))}).catch(r=>{a.error({title:"Error",message:"Something went wrong. Try again later 😥",position:"topRight"})}).finally(()=>{v(),S(),c.reset()})}
//# sourceMappingURL=index.js.map
