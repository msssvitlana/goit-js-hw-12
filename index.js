import{a as q,i as n,S as M}from"./assets/vendor-BH9GyP-n.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const R="https://pixabay.com/api/",B="49671136-929ec105133e7206b410421f8";async function g(i,t){try{const r=await q.get(R,{params:{key:B,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:t}});return console.log(r.data),r.data}catch(r){console.error("Помилка при завантаженні даних:",r.message),n.warning({title:"",message:"Помилка при завантаженні даних",position:"topRight"})}}const h=document.querySelector(".gallery"),d=document.querySelector(".load-more"),y=document.querySelector(".loader");let E=new M(".gallery a",{captionsData:"alt",captionDelay:250});function p(i){const t=i.map(({webformatURL:r,largeImageURL:c,tags:e,likes:o,views:a,comments:S,downloads:b})=>`
    <a class="gallery-item" href="${c}">
      <img src="${r}" alt="${e}" loading="lazy" />
   <div class="image-info">
        <div class="info-labels">
          <div>Likes</div>
          <div>Views</div>
          <div>Comments</div>
          <div>Downloads</div>
        </div>
        <div class="info-values">
          <div>${o}</div>
          <div>${a}</div>
          <div>${S}</div>
          <div>${b}</div>
        </div>
      </div>
    </a>
  `).join("");h.insertAdjacentHTML("beforeend",t),E.refresh()}function P(){h.innerHTML=""}function u(){y.classList.remove("hidden")}function v(){y.classList.add("hidden")}function L(){d&&d.classList.remove("hidden")}function f(){d&&d.classList.add("hidden")}const w=document.querySelector(".form"),$=document.querySelector('input[name="search-text"]');document.querySelector(".gallery");const O=document.querySelector(".load-more");let l="",s=1,m=0;w.addEventListener("submit",x);O.addEventListener("click",H);async function x(i){if(i.preventDefault(),l=$.value.trim(),s=1,!l||l==""){n.error({title:"❌",message:"Please enter a search query!",position:"topRight"});return}u(),console.log("showLoader",u),f(),P();try{const t=await g(l,s);if(m=t.totalHits,t.hits.length===0){n.info({title:"No Results",message:"Sorry, no images found. Try another query!",position:"topRight"});return}p(t.hits),m>s*15&&L()}catch(t){n.error({title:"Error",message:"Something went wrong 😥",position:"topRight"}),console.error(t)}finally{v(),w.reset()}}async function H(){f(),u(),console.log("loader: s",u);try{s+=1;const i=await g(l,s);p(i.hits);const t=Math.ceil(m/15);s<t?L():(f(),n.info({title:"End",message:"You've reached the end of search results.",position:"topRight"}));const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}catch{n.error({title:"Error",message:"Failed to load more images.",position:"topRight"})}finally{v()}}
//# sourceMappingURL=index.js.map
