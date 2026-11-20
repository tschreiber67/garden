import {plants} from './catalog.js';

const form = document.querySelector('#garden-form');
const cards = document.querySelector('#cards');
const search = document.querySelector('#search');
const sort = document.querySelector('#sort');
const month = document.querySelector('#month');
const dialog = document.querySelector('#detail');
const detail = document.querySelector('#detail-content');
const labels = {full:'Full sun',part:'Partial sun',shade:'Shade',low:'Low water',medium:'Moderate water',high:'High water',ground:'In-ground',raised:'Raised bed',container:'Container'};
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
month.innerHTML = months.map((m,i)=>`<option value="${i+1}">${m}</option>`).join('');
month.value = String(new Date().getMonth()+1);

function currentFilters(){
  const data=new FormData(form);
  return Object.fromEntries(data.entries());
}

export function assess(plant,filters){
  const req=plant.requirements;
  const check=[['sun',filters.sun,req.sun,'light'],['water',filters.water,req.water,'water'],['soil',filters.soil,req.soil,'soil'],['space',filters.space,req.spaces,'growing space']];
  const selected=check.filter(([,value])=>value!=='any');
  const conflicts=selected.filter(([,value,accepted])=>!accepted.includes(value)).map(([, , ,description])=>description);
  return {score:selected.length-conflicts.length,conflicts,checked:selected.length};
}

function safe(text){return String(text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}

function render(){
  const filters=currentFilters();
  const query=search.value.trim().toLowerCase();
  const items=plants.filter(p=>(filters.category==='all'||p.category===filters.category)&&(p.name.toLowerCase().includes(query)||p.scientificName.toLowerCase().includes(query)))
    .map(p=>({...p,match:assess(p,filters)}));
  items.sort((a,b)=>sort.value==='name'?a.name.localeCompare(b.name):a.match.conflicts.length-b.match.conflicts.length||b.match.score-a.match.score||a.name.localeCompare(b.name));
  document.querySelector('#summary').textContent=`${items.length} of ${plants.length} sample plants · ${months[Number(filters.month)-1]} · US ZIP ${filters.zip||'not entered'}`;
  document.querySelector('#empty').hidden=items.length!==0;
  cards.innerHTML=items.map(p=>{
    const ok=p.match.conflicts.length===0;
    const note=p.match.checked===0?'Select growing conditions for a closer match.':ok?'Matches your selected site conditions.':`Check ${p.match.conflicts.join(', ')} requirements.`;
    return `<article class="plant-card"><div class="plant-art ${safe(p.category)}"><span class="match-chip ${ok?'':'review'}">${ok?'SITE CANDIDATE':'REVIEW CONDITIONS'}</span><span aria-hidden="true">${p.emoji}</span></div><div class="card-body"><span class="category-label">${safe(p.category)}</span><h3>${safe(p.name)}</h3><span class="latin">${safe(p.scientificName)}</span><p class="description">${safe(p.description)}</p><div class="facts"><span>${safe(p.requirements.sun.map(x=>labels[x]).join(' / '))}</span><span>${safe(p.requirements.water.map(x=>labels[x]).join(' / '))}</span></div><div class="why">${safe(note)}</div><button type="button" class="view" data-plant="${safe(p.id)}">Explore plant →</button></div></article>`;
  }).join('');
}

function showDetail(id){
  const p=plants.find(p=>p.id===id);
  if(!p)return;
  const entries=[['Sun',p.requirements.sun],['Water',p.requirements.water],['Soil',p.requirements.soil],['Growing spaces',p.requirements.spaces]];
  detail.innerHTML=`<div class="detail-icon" aria-hidden="true">${p.emoji}</div><span class="category-label">${safe(p.category)}</span><h2 class="detail-title">${safe(p.name)}</h2><span class="latin">${safe(p.scientificName)}</span><p>${safe(p.description)}</p><div class="detail-grid">${entries.map(([label,values])=>`<div><strong>${safe(label)}</strong><span>${safe(values.map(x=>labels[x]||x).join(', '))}</span></div>`).join('')}</div><p class="detail-note">${safe(p.notes)} These are illustrative catalog attributes and not planting instructions. Consult your local Cooperative Extension service for planting dates and regional suitability.</p>`;
  dialog.showModal();
}

form.addEventListener('input',render);
form.addEventListener('change',render);
form.addEventListener('reset',()=>{setTimeout(()=>{month.value=String(new Date().getMonth()+1);render();},0);});
search.addEventListener('input',render);
sort.addEventListener('change',render);
cards.addEventListener('click',e=>{const button=e.target.closest('[data-plant]');if(button)showDetail(button.dataset.plant);});
document.querySelector('#close-detail').addEventListener('click',()=>dialog.close());
render();
