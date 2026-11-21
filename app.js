const programmes={aac:{name:'AAC · 3 centres',items:['Simei 227','Simei 107','MacPherson']},crest:{name:'CREST · 3 centres',items:['Simei','MacPherson','Tampines']},others:{name:'Additional programme & reporting areas',items:['CREST Youth','COMIT','OMEGA','ICCP','Staff Training','Corporate Counselling']}};function showProgram(key){const data=programmes[key],target=document.getElementById('programme-detail');target.replaceChildren();const title=document.createElement('strong');title.textContent=data.name;target.append(title);const grid=document.createElement('div');grid.className='programme-items';data.items.forEach((x,i)=>{let item=document.createElement('span');item.innerHTML='<i></i>';item.append(document.createTextNode(x));grid.append(item)});target.append(grid);document.querySelectorAll('[data-program]').forEach(b=>{b.classList.toggle('on',b.dataset.program===key);b.setAttribute('aria-pressed',String(b.dataset.program===key))})}document.querySelectorAll('[data-program]').forEach(b=>b.addEventListener('click',()=>showProgram(b.dataset.program)));showProgram('aac');

const categorySwitch = document.querySelector('.project-switch');
const projectTabs = Array.from(categorySwitch.querySelectorAll('a'));
const projectPanels = projectTabs.map(tab => document.querySelector(tab.hash));

function categoryFromHash() {
  const anchor = document.getElementById(location.hash.slice(1));
  return anchor?.closest('.project-panel') || null;
}

function selectCategory(selectedPanel) {
  projectTabs.forEach((tab, index) => {
    const selected = projectPanels[index] === selectedPanel;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    projectPanels[index].hidden = !selected;
  });
}

function activateProjectTab(tab) {
  const panel = document.getElementById(tab.hash.slice(1));
  selectCategory(panel);
  if (location.hash !== tab.hash) history.pushState(null, '', tab.hash);
}

categorySwitch.setAttribute('role', 'tablist');
projectTabs.forEach((tab, index) => {
  const panel = projectPanels[index];
  tab.setAttribute('role', 'tab');
  tab.setAttribute('aria-controls', panel.id);
  panel.setAttribute('role', 'tabpanel');
  panel.setAttribute('aria-labelledby', tab.id);
  panel.tabIndex = 0;
  tab.addEventListener('click', event => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    activateProjectTab(tab);
  });
  tab.addEventListener('keydown', event => {
    const last = projectTabs.length - 1;
    const positions = {ArrowRight: (index + 1) % projectTabs.length, ArrowLeft: (index + last) % projectTabs.length, Home: 0, End: last};
    if (!Object.hasOwn(positions, event.key)) return;
    event.preventDefault();
    const next = projectTabs[positions[event.key]];
    activateProjectTab(next);
    next.focus();
  });
});

function restoreCategory() {
  const panel = categoryFromHash();
  if (panel) {
    selectCategory(panel);
    const target = document.getElementById(location.hash.slice(1));
    const landing = target === panel || target === panel.querySelector('.project') ? categorySwitch : target;
    requestAnimationFrame(() => landing.scrollIntoView({block:'start', behavior:'instant'}));
  } else if (!location.hash || location.hash === '#work') {
    selectCategory(projectPanels[0]);
  }
}

const siteNav = document.querySelector('body > nav');
function measureNav() {
  document.documentElement.style.setProperty('--site-nav-height', siteNav.offsetHeight + 'px');
}
measureNav();
new ResizeObserver(measureNav).observe(siteNav);

selectCategory(categoryFromHash() || projectPanels[0]);
restoreCategory();
window.addEventListener('hashchange', restoreCategory);
