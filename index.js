import{i as l,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d="47340673-7535cec7cd04a1914e8f8d439";function m(i){const o=new URLSearchParams({key:d,q:i,image_type:"foto",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${o}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()}).catch(r=>console.log(r.message))}document.querySelector("#gallery");const g=document.querySelector(".gallery");function h(i){return i.map(({webformatURL:o,largeImageURL:r,tags:a,likes:e,views:t,comments:s,downloads:f})=>`
     <a class="gallery-link" href=${r}>
    <img class="gallery-image" src=${o} alt=${a}>
    
     <div class="img-list">

               <div class="field">
      <h3 class="label">Likes</h3>
      <p class="value">${e}</p>
              </div>
                  <div class="field">
      <h3 class="label">Views</h3>
     <p class="value">${t}</p>
              </div>
                  <div class="field">
      <h3 class="label">Comments</h3>
     <p class="value">${s}</p>
              </div>
                  <div class="field">
      <h3 class="label">Downloads</h3>
     <p class="value">${f}</p>
              </div>
    </div>
    </a>
       `).join("")}function n(){g.innerHTML=""}l.settings({position:"topRight"});const c=document.querySelector(".js-hidden"),p=document.querySelector(".gallery"),y=document.querySelector(".form");y.addEventListener("submit",v);function v(i){i.preventDefault();const o=i.target.elements.category.value.trim();if(!o){l.error({message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:"./img/error.png",iconColor:"#fff",imageWidth:15,messageColor:"#fff",titleColor:"#fff"}),n();return}n(),c.classList.remove("hidden"),m(o).then(r=>{if(r.hits.length===0){l.error({message:"No images found",iconUrl:"./img/error.png",iconColor:"#fff",imageWidth:15,messageColor:"#fff",titleColor:"#fff"});return}p.innerHTML=h(r.hits),L.refresh()}).catch(r=>{l.error({message:"Error fetching images. Please try again.",iconUrl:"./img/error.png",iconColor:"#fff",imageWidth:15,messageColor:"#fff",titleColor:"#fff"})}).finally(()=>{i.target.reset(),c.classList.add("hidden")})}let L=new u(".gallery a",{captionsData:"alt",captionDelay:250,captionClass:"imageTitle"});
//# sourceMappingURL=index.js.map
