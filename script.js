const toggle = document.getElementById('nav-toggle');
const links = document.getElementById('mobile-links');
function closeNav(){links.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');}
toggle.addEventListener('click',()=>{const open=links.hidden;links.hidden=!open;toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeNav));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!links.hidden){closeNav();toggle.focus();}});
document.getElementById('contact-form').addEventListener('submit',e=>{e.preventDefault();document.querySelector('.form-status').textContent='Your message has not been sent or saved. Contact delivery is not connected yet.';});
document.getElementById('year').textContent=new Date().getFullYear();
