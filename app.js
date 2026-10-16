const STORAGE_KEY = 'shiguang-life-os-v1';

const icons = {
  home: '<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m16 8-2.5 5.5L8 16l2.5-5.5L16 8Z"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  more: '<circle cx="5" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1" fill="currentColor" stroke="none"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V4h8v3M3 12h18"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>',
  sparkles: '<path d="m12 3-1.4 3.6L7 8l3.6 1.4L12 13l1.4-3.6L17 8l-3.6-1.4L12 3ZM5 14l-.8 2.2L2 17l2.2.8L5 20l.8-2.2L8 17l-2.2-.8L5 14ZM19 14l-.7 1.8-1.8.7 1.8.7L19 19l.7-1.8 1.8-.7-1.8-.7L19 14Z"/>',
  cloudOff: '<path d="M17.5 19H9a7 7 0 0 1-6.7-9M5.3 5.3A7 7 0 0 1 18.7 9 5 5 0 0 1 21 17.7M2 2l20 20"/>',
  flame: '<path d="M12 22c4.4 0 8-3.6 8-8 0-3-1.5-5.8-4-7.5.2 2.7-1.4 4.2-2.7 4.7.6-3.8-1.5-7.2-4.6-9.2.2 4.2-4.7 6.4-4.7 12 0 4.4 3.6 8 8 8Z"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  timer: '<circle cx="12" cy="13" r="8"/><path d="M12 9v5l3 2M9 2h6M12 2v3"/>',
  pen: '<path d="m12 20 9-9-4-4-9 9-1 5 5-1ZM14 5l4 4"/>',
  bulb: '<path d="M9 18h6M10 22h4M8.5 15.5A7 7 0 1 1 15.5 15.5c-.9.7-1.3 1.5-1.5 2.5h-4c-.2-1-.6-1.8-1.5-2.5Z"/>',
  bot: '<rect x="4" y="7" width="16" height="13" rx="3"/><path d="M12 3v4M8 12h.01M16 12h.01M8 16h8"/>',
  image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9" r="1.5"/><path d="m21 15-5-5L5 20"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6"/>',
  arrow: '<path d="M5 12h14M14 7l5 5-5 5"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.7-9A5 5 0 1 1 17.5 19Z"/>',
  download: '<path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"/>',
  trash: '<path d="M3 6h18M8 6V3h8v3M19 6l-1 15H6L5 6M10 11v5M14 11v5"/>',
  chevron: '<path d="m9 18 6-6-6-6"/>',
  star: '<path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  refresh: '<path d="M20 7h-5V2M4 17h5v5M20 7a9 9 0 0 0-15.5-3M4 17a9 9 0 0 0 15.5 3"/>'
};

const icon = name => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.sparkles}</svg>`;
const uid = () => `${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`;
const iso = d => d.toISOString().slice(0,10);
const today = () => iso(new Date());

const seed = {
  tasks: [
    {id:'t1', title:'完成英语阅读 30 分钟', meta:'学习 · 30 分钟', color:'blue', done:false},
    {id:'t2', title:'整理本周短视频选题', meta:'工作 · 今天', color:'peach', done:false},
    {id:'t3', title:'晚饭后散步', meta:'生活 · 20 分钟', color:'sage', done:true}
  ],
  schedule: [
    {time:'09:30', title:'英语精读', note:'长难句 + 生词复习'},
    {time:'14:00', title:'脚本创作', note:'完成第一版分镜'},
    {time:'20:30', title:'今日复盘', note:'记录心情与收获'}
  ],
  habits: [
    {id:'h1', title:'背单词', target:'每日 30 个', metric:'30 个', color:'lemon', days:[1,1,0,1,1,1,0]},
    {id:'h2', title:'专注学习', target:'每日 60 分钟', metric:'45 分钟', color:'blue', days:[1,0,1,1,0,1,0]},
    {id:'h3', title:'运动', target:'每周 4 次', metric:'1 次', color:'sage', days:[0,1,0,1,1,0,0]}
  ],
  ideas: [
    {id:'i1', title:'为什么总觉得时间不够用？', note:'从注意力切换切入', stage:0},
    {id:'i2', title:'一周英语学习复盘 Vlog', note:'已列出 3 段结构', stage:1},
    {id:'i3', title:'桌面效率工具分享', note:'周六下午拍摄', stage:2},
    {id:'i4', title:'读书卡片：长期主义', note:'补字幕与封面', stage:3}
  ],
  books: [
    {id:'b1', title:'认知觉醒', author:'周岭', progress:68},
    {id:'b2', title:'Make Time', author:'Jake Knapp', progress:32}
  ],
  moods: {},
  diaries: [
    {id:'d1', date:today(), mood:3, text:'今天把想做的事情重新排了顺序，脑子清爽了很多。'},
    {id:'d2', date:iso(new Date(Date.now()-86400000)), mood:2, text:'学英语时有点分心，但还是完成了最低目标。'}
  ],
  study: {seconds: 0, running:false, lastStarted:null},
  reviews: []
};

let state = load();
let activePage = location.hash.slice(1) || 'home';
let activeTab = { plan:'today', study:'overview', me:'diary' };
let timerHandle = null;

function load(){
  try { return {...structuredClone(seed), ...JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')}; }
  catch { return structuredClone(seed); }
}
function save(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function escapeHtml(value=''){ return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function formatDate(date = new Date()) { return new Intl.DateTimeFormat('zh-CN',{month:'long',day:'numeric',weekday:'long'}).format(date); }
function daysOfWeek(){
  const labels=['日','一','二','三','四','五','六'];
  return Array.from({length:7},(_,i)=>{ const d=new Date(); d.setDate(d.getDate()-6+i); return {label:`周${labels[d.getDay()]}`, num:d.getDate(), date:iso(d), today:i===6}; });
}
function hydrateIcons(root=document){ root.querySelectorAll('[data-icon]').forEach(el => el.innerHTML=icon(el.dataset.icon.replace(/-([a-z])/g,(_,x)=>x.toUpperCase()))); }
function toast(message){ const el=document.querySelector('#toast'); el.textContent=message; el.classList.add('show'); clearTimeout(el._t); el._t=setTimeout(()=>el.classList.remove('show'),1800); }

const nav = [
  ['home','home','首页'],['plan','calendar','计划'],['study','book','学习'],['explore','compass','探索'],['me','user','我的']
];
function renderNav(){
  document.querySelectorAll('[data-nav]').forEach(box => box.innerHTML=nav.map(([key,ic,label])=>`<a class="nav-item ${activePage===key?'active':''}" href="#${key}" data-page="${key}">${icon(ic)}<span>${label}</span></a>`).join(''));
}
function header(title, eyebrow){ return `<header class="topbar"><div><p class="eyebrow">${eyebrow}</p><h1>${title}</h1></div><div class="avatar">${icon('sparkles')}</div></header>`; }
function sectionHead(title, action='', actionId=''){ return `<div class="section-head"><h2>${title}</h2>${action?`<button class="text-btn" ${actionId?`data-action="${actionId}"`:''}>${action}</button>`:''}</div>`; }

function renderHome(){
  const completed=state.tasks.filter(t=>t.done).length, total=state.tasks.length || 1, pct=Math.round(completed/total*100);
  const week=daysOfWeek();
  return `<div class="page">
    ${header('早上好，慢慢来','今天 · '+formatDate())}
    <div class="card hero-card"><div class="hero-row"><div><span class="status-pill">${icon('sparkles')} 今日节奏</span><strong>${completed} / ${state.tasks.length}</strong><p>完成一点，也是在向前走</p></div><div class="progress-ring" style="--p:${pct}"><span>${pct}%</span></div></div></div>
    <div class="grid-2 section">
      <div class="card summary-card"><div class="icon-box blue">${icon('book')}</div><small class="eyebrow">学习专注</small><strong>${Math.floor(state.study.seconds/60)} 分钟</strong></div>
      <div class="card summary-card"><div class="icon-box peach">${icon('bulb')}</div><small class="eyebrow">工作灵感</small><strong>${state.ideas.length} 条</strong></div>
    </div>
    <div class="dashboard-grid section">
      <section class="section">${sectionHead('今日任务','查看全部','go-plan')}<div class="task-list">${renderTasks(state.tasks.slice(0,4))}</div></section>
      <section class="section">${sectionHead('今日日程')}<div class="card schedule">${state.schedule.map(renderSchedule).join('')}</div></section>
    </div>
    <section class="section">${sectionHead('七日习惯','管理习惯','go-habits')}<div class="card"><div class="habit-row">${week.map((d,i)=>`<div class="day"><small>${d.label}</small><div class="day-circle ${state.habits.filter(h=>h.days[i]).length>=2?'checked':''} ${d.today?'today':''}">${d.num}</div></div>`).join('')}</div></div></section>
  </div>`;
}
function renderTasks(tasks){
  if(!tasks.length) return '<div class="empty">今天还没有任务，给自己留一点期待吧。</div>';
  return tasks.map(t=>`<div class="task ${t.done?'done':''}" data-id="${t.id}"><button class="check" data-action="toggle-task" aria-label="${t.done?'设为未完成':'完成任务'}">${icon('check')}</button><div><div class="task-title">${escapeHtml(t.title)}</div><div class="task-meta"><span class="task-color" style="background:var(--${t.color||'peach'})"></span>${escapeHtml(t.meta)}</div></div><button class="more-btn" aria-label="更多">${icon('more')}</button></div>`).join('');
}
function renderSchedule(item){ return `<div class="schedule-item"><span class="schedule-time">${escapeHtml(item.time)}</span><div class="schedule-line"><span class="schedule-dot"></span></div><div class="schedule-copy"><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.note)}</p></div></div>`; }

function renderPlan(){
  const tab=activeTab.plan;
  return `<div class="page">${header('计划','把今天过得清楚一点')}
    <div class="tabs">${[['today','今日清单'],['habit','习惯追踪'],['review','周月复盘']].map(x=>`<button class="tab ${tab===x[0]?'active':''}" data-tab-scope="plan" data-tab="${x[0]}">${x[1]}</button>`).join('')}</div>
    ${tab==='today'?planToday():tab==='habit'?planHabits():planReview()}
  </div>`;
}
function planToday(){ return `<section>${sectionHead('今日任务','添加任务','add-task')}<div class="task-list">${renderTasks(state.tasks)}</div></section><section class="section">${sectionHead('时间安排','添加日程','add-schedule')}<div class="card schedule">${state.schedule.map(renderSchedule).join('')}</div></section>`; }
function planHabits(){
  const week=daysOfWeek();
  return `<section>${sectionHead('我的习惯','添加习惯','add-habit')}<div>${state.habits.map(h=>`<div class="card habit-card" data-id="${h.id}"><div class="habit-card-head"><div class="icon-box ${h.color}">${icon('flame')}</div><div class="grow"><h3>${escapeHtml(h.title)}</h3><p>${escapeHtml(h.target)} · 今日 ${escapeHtml(h.metric)}</p></div><button class="habit-mark ${h.days[6]?'done':''}" data-action="toggle-habit">${icon('check')}</button></div><div class="mini-week">${week.map((d,i)=>`<span class="mini-dot ${h.days[i]?'on':''}">${d.num}</span>`).join('')}</div></div>`).join('')}</div></section>
  <section class="section">${sectionHead('本月贴纸')}<div class="card"><div class="calendar"><span class="weekday">一</span><span class="weekday">二</span><span class="weekday">三</span><span class="weekday">四</span><span class="weekday">五</span><span class="weekday">六</span><span class="weekday">日</span>${renderCalendar()}</div></div></section>`;
}
function renderCalendar(){
  const now=new Date(), first=new Date(now.getFullYear(),now.getMonth(),1), count=new Date(now.getFullYear(),now.getMonth()+1,0).getDate(), offset=(first.getDay()+6)%7;
  return Array(offset).fill('<span></span>').concat(Array.from({length:count},(_,i)=>{const day=i+1, sticker=[2,3,5,7,9,12,14,16,17,20,22,24,27].includes(day);return `<div class="calendar-day ${sticker?'sticker':''}"><span>${day}</span>${sticker?icon('star'):''}</div>`;})).join('');
}
function planReview(){
  const done=state.tasks.filter(t=>t.done).length, habits=state.habits.reduce((n,h)=>n+h.days.filter(Boolean).length,0);
  return `<section>${sectionHead('本周小结')}<div class="card"><div class="review-grid"><div class="review-stat"><strong>${done}</strong><small>完成任务</small></div><div class="review-stat"><strong>${habits}</strong><small>习惯打卡</small></div><div class="review-stat"><strong>${Math.floor(state.study.seconds/60)}</strong><small>学习分钟</small></div></div><div class="field"><label for="reviewGain">本周最满意的事</label><textarea id="reviewGain" rows="3" placeholder="哪怕只是一件小事…"></textarea></div><div class="field"><label for="reviewNext">下周想做的调整</label><textarea id="reviewNext" rows="3" placeholder="给下周的自己一句提醒…"></textarea></div><button class="primary-btn wide" data-action="save-review">保存本周复盘</button></div></section><section class="section">${sectionHead('月度趋势')}<div class="card"><p class="eyebrow">这个月，你已经留下了 ${state.diaries.length} 篇生活记录和 ${habits} 次习惯足迹。</p><div class="progress-bar"><span style="width:${Math.min(100,habits*3)}%"></span></div></div></section>`;
}

function renderStudy(){
  const tab=activeTab.study;
  return `<div class="page">${header('学习','持续积累，等待复利')}
    <div class="tabs">${[['overview','学习台'],['english','英语'],['graduate','考研'],['reading','阅读']].map(x=>`<button class="tab ${tab===x[0]?'active':''}" data-tab-scope="study" data-tab="${x[0]}">${x[1]}</button>`).join('')}</div>
    ${tab==='overview'?studyOverview():tab==='english'?studyEnglish():tab==='graduate'?studyGraduate():studyReading()}
  </div>`;
}
function studyOverview(){ return `<div class="grid-2"><div class="card study-card"><div class="icon-box blue">${icon('book')}</div><span class="eyebrow">英语学习</span><div class="big-stat">12 天</div><p>连续学习记录</p></div><div class="card study-card"><div class="icon-box lilac">${icon('target')}</div><span class="eyebrow">考研进度</span><div class="big-stat">34%</div><p>本月计划完成度</p></div></div><section class="section">${sectionHead('专注计时')} ${focusCard()}</section><section class="section">${sectionHead('正在读')}<div class="book-list">${renderBooks()}</div></section>`; }
function focusCard(){ return `<div class="card focus-card"><div class="focus-row"><div class="icon-box blue">${icon('timer')}</div><div class="timer" id="timerText">${formatTimer(currentSeconds())}</div><button class="primary-btn" data-action="toggle-timer">${state.study.running?'暂停':'开始'}</button></div></div>`; }
function studyEnglish(){ return `${focusCard()}<section class="section">${sectionHead('今日英语')}<div class="task-list">${renderLearningTasks([['精读一篇外刊','阅读 · 30 分钟'],['复习生词','词汇 · 30 个'],['跟读训练','听力 · 15 分钟']],'English')}</div></section>`; }
function studyGraduate(){ return `<section>${sectionHead('今日考研计划')}<div class="task-list">${renderLearningTasks([['高数：定积分习题','数学 · 60 分钟'],['专业课：第二章框架','专业课 · 45 分钟'],['政治选择题','政治 · 20 题']],'Graduate')}</div></section><section class="section">${sectionHead('本月里程碑')}<div class="card"><h3>完成数学第一轮基础复习</h3><p class="eyebrow" style="margin-top:8px">已完成 17 / 30 节</p><div class="progress-bar"><span style="width:57%;background:var(--blue)"></span></div></div></section>`; }
function renderLearningTasks(items,prefix){ return items.map((x,i)=>`<div class="task"><button class="check" data-action="fake-check" aria-label="完成">${icon('check')}</button><div><div class="task-title">${x[0]}</div><div class="task-meta">${x[1]}</div></div><span class="tag">${prefix}</span></div>`).join(''); }
function studyReading(){ return `<section>${sectionHead('阅读卡片','添加书籍','add-book')}<div class="book-list">${renderBooks()}</div></section><section class="section">${sectionHead('最近摘录')}<div class="card"><p style="line-height:1.8;margin:0">“真正的成长，是不断拓宽自己能够掌控的边界。”</p><p class="eyebrow" style="margin:10px 0 0">来自《认知觉醒》</p></div></section>`; }
function renderBooks(){ return state.books.map(b=>`<div class="book"><div class="book-cover">${icon('book')}</div><div class="book-copy"><strong>${escapeHtml(b.title)}</strong><p>${escapeHtml(b.author)} · ${b.progress}%</p><div class="progress-bar"><span style="width:${b.progress}%"></span></div></div></div>`).join(''); }
function currentSeconds(){ if(!state.study.running) return state.study.seconds; return state.study.seconds + Math.floor((Date.now()-state.study.lastStarted)/1000); }
function formatTimer(seconds){ const m=Math.floor(seconds/60).toString().padStart(2,'0'), s=(seconds%60).toString().padStart(2,'0'); return `${m}:${s}`; }

function renderExplore(){
  const stages=['快速记录','完善脚本','待拍摄','待剪辑','已发布'];
  return `<div class="page">${header('探索','把灵感变成作品')}
    <section>${sectionHead('工作项目与灵感库','记录灵感','add-idea')}<div class="kanban">${stages.map((stage,idx)=>{const ideas=state.ideas.filter(i=>i.stage===idx);return `<div class="kanban-col"><div class="kanban-title"><span>${stage}</span><span class="count">${ideas.length}</span></div>${ideas.length?ideas.map(i=>`<article class="idea-card" data-id="${i.id}"><strong>${escapeHtml(i.title)}</strong><p>${escapeHtml(i.note)}</p><div class="idea-actions"><span class="tag">${idx===4?'已归档':'创作'}</span>${idx<4?`<button class="move-btn" data-action="move-idea">下一步 ${icon('arrow')}</button>`:''}</div></article>`).join(''):'<div class="empty">等待新作品</div>'}</div>`;}).join('')}</div></section>
    <section class="section">${sectionHead('AI 工具箱')}<div class="tool-grid"><div class="tool"><div class="icon-box lilac">${icon('bot')}</div><strong>脚本助手</strong><small>优化结构</small></div><div class="tool"><div class="icon-box peach">${icon('image')}</div><strong>视觉灵感</strong><small>画面提示</small></div><div class="tool"><div class="icon-box blue">${icon('mic')}</div><strong>口播润色</strong><small>更自然</small></div></div></section>
    <section class="section">${sectionHead('个人灵感','随手记','add-inspiration')}<div class="card"><p style="line-height:1.75;margin:0">可以做一期“低能量时如何保持最小行动”的内容，画面从凌乱桌面慢慢整理到清爽。</p><div class="task-meta" style="margin-top:12px">${icon('clock')} 2 小时前</div></div></section>
  </div>`;
}

function moodFace(type,size=50){
  const colors=['#91b9dd','#9fc6ac','#f2cf75','#ffb69c','#c3afe0'], mouths=['M17 31q8-8 16 0','M17 30h16','M17 29q8 8 16 0','M16 27q9 13 18 0','M16 26q9 16 18 0'];
  const eyes=type===0?'<path d="M17 21l4 3m0-3-4 3M29 21l4 3m0-3-4 3"/>':type===4?'<path d="M17 22q3-4 6 0M28 22q3-4 6 0"/>':'<circle cx="20" cy="22" r="1.5" fill="#4b4139"/><circle cx="31" cy="22" r="1.5" fill="#4b4139"/>';
  return `<svg class="mood-face" style="width:${size}px;height:${size}px" viewBox="0 0 50 50" aria-hidden="true"><path d="M25 3C12 3 4 12 5 26c1 13 8 21 21 21 12 0 20-8 20-21C46 12 38 3 25 3Z" fill="${colors[type]}" stroke="#4b4139" stroke-width="1.6" stroke-linecap="round"/><path d="M8 18q-2 7 0 13M42 16q3 7 0 15" fill="none" stroke="#4b4139" stroke-width="1" opacity=".45"/>${eyes}<path d="${mouths[type]}" fill="none" stroke="#4b4139" stroke-width="1.8" stroke-linecap="round"/><circle cx="14" cy="28" r="3" fill="#fff" opacity=".25"/><circle cx="37" cy="28" r="3" fill="#fff" opacity=".25"/></svg>`;
}
function renderMe(){
  const tab=activeTab.me, mood=state.moods[today()];
  return `<div class="page">${header('我的','收藏每一天的自己')}
    <div class="tabs">${[['diary','心情日记'],['review','成长回顾'],['settings','设置']].map(x=>`<button class="tab ${tab===x[0]?'active':''}" data-tab-scope="me" data-tab="${x[0]}">${x[1]}</button>`).join('')}</div>
    ${tab==='diary'?meDiary(mood):tab==='review'?meReview():meSettings()}
  </div>`;
}
function meDiary(mood){ const labels=['低落','平静','还好','开心','闪闪发光']; return `<section>${sectionHead('今天感觉怎么样？')}<div class="card"><div class="mood-picker">${labels.map((l,i)=>`<button class="mood-btn ${mood===i?'selected':''}" data-action="select-mood" data-mood="${i}">${moodFace(i)}<small>${l}</small></button>`).join('')}</div><button class="secondary-btn wide" style="margin-top:15px" data-action="add-diary">写下今天</button></div></section><section class="section">${sectionHead('日记时间线')}<div class="card">${state.diaries.length?state.diaries.map(d=>`<article class="diary"><div class="diary-track"><div class="diary-dot"></div></div><div class="diary-content"><time>${d.date===today()?'今天':d.date}</time><div style="float:right">${moodFace(d.mood,28)}</div><p>${escapeHtml(d.text)}</p></div></article>`).join(''):'<div class="empty">还没有日记，今天开始记录吧。</div>'}</div></section>`; }
function meReview(){ const moodCount=Object.keys(state.moods).length; return `<section>${sectionHead('十月成长回顾')}<div class="card"><div class="review-grid"><div class="review-stat"><strong>${state.tasks.filter(t=>t.done).length}</strong><small>任务完成</small></div><div class="review-stat"><strong>${moodCount}</strong><small>心情记录</small></div><div class="review-stat"><strong>${state.ideas.filter(i=>i.stage===4).length}</strong><small>作品发布</small></div></div></div></section><section class="section">${sectionHead('我的月度关键词')}<div class="card"><span class="tag">保持节奏</span> <span class="tag">认真生活</span> <span class="tag">持续创作</span><p style="margin:15px 0 0;line-height:1.75;color:var(--muted)">不需要每天都很厉害，只要今天比昨天多留下一点痕迹。</p></div></section>`; }
function meSettings(){ return `<section>${sectionHead('账户与数据')}<div class="card"><div class="settings-row"><div class="icon-box blue">${icon('cloud')}</div><div class="grow"><h3>跨设备云同步</h3><p>尚未连接账户服务；当前数据仅在此设备保存</p></div><span class="badge-off">未配置</span></div><div class="settings-row"><div class="icon-box peach">${icon('bell')}</div><div class="grow"><h3>系统提醒</h3><p>尚未配置推送服务；应用内计划仍可查看</p></div><span class="badge-off">未配置</span></div><button class="settings-row" style="width:100%;border-left:0;border-right:0;border-top:0;background:transparent;text-align:left" data-action="export-data"><div class="icon-box sage">${icon('download')}</div><div class="grow"><h3>导出我的数据</h3><p>下载一份 JSON 备份文件</p></div>${icon('chevron')}</button><button class="settings-row" style="width:100%;border:0;background:transparent;text-align:left" data-action="reset-data"><div class="icon-box lilac">${icon('refresh')}</div><div class="grow"><h3>恢复示例数据</h3><p>清除当前设备上的所有改动</p></div>${icon('chevron')}</button></div></section><section class="section"><div class="card"><p class="eyebrow" style="margin:0">拾光 Life OS · MVP 1.0</p></div></section>`; }

function render(){
  const pages={home:renderHome,plan:renderPlan,study:renderStudy,explore:renderExplore,me:renderMe};
  if(!pages[activePage]) activePage='home';
  document.querySelector('#app').innerHTML=pages[activePage]();
  renderNav(); hydrateIcons(); updateTimerLoop();
  document.querySelector('#app').focus({preventScroll:true});
}

function openModal(content){ document.querySelector('#sheetContent').innerHTML=content; const layer=document.querySelector('#modalLayer'); layer.hidden=false; hydrateIcons(layer); setTimeout(()=>layer.querySelector('input,textarea,button')?.focus(),60); }
function closeModal(){ document.querySelector('#modalLayer').hidden=true; }
function quickAdd(){ openModal(`<h2 id="sheetTitle">想记录什么？</h2><p class="eyebrow">先快速记下，之后再慢慢完善。</p><div class="add-types"><button class="add-type" data-action="add-task"><span class="icon-box peach">${icon('check')}</span>任务</button><button class="add-type" data-action="add-schedule"><span class="icon-box blue">${icon('clock')}</span>日程</button><button class="add-type" data-action="add-idea"><span class="icon-box lemon">${icon('bulb')}</span>工作灵感</button><button class="add-type" data-action="add-diary"><span class="icon-box lilac">${icon('pen')}</span>日记</button></div>`); }
function formModal(type){
  const map={
    task:['添加任务','任务名称','例如：完成脚本第一稿','save-task'],
    schedule:['添加日程','日程内容','例如：英语精读','save-schedule'],
    idea:['记录工作灵感','一句话灵感','例如：拍一期低能量自救指南','save-idea'],
    diary:['写下今天','今天发生了什么？','哪怕只有一句话…','save-diary'],
    habit:['添加习惯','习惯名称','例如：睡前阅读','save-habit'],
    book:['添加书籍','书名','例如：深度工作','save-book']
  }[type];
  closeModal(); setTimeout(()=>openModal(`<h2 id="sheetTitle">${map[0]}</h2><form data-form="${map[3]}"><div class="field"><label for="mainInput">${map[1]}</label>${type==='diary'?`<textarea id="mainInput" name="title" rows="5" required placeholder="${map[2]}"></textarea>`:`<input id="mainInput" name="title" required placeholder="${map[2]}" />`}</div>${type==='schedule'?'<div class="field"><label for="timeInput">时间</label><input id="timeInput" name="time" type="time" value="09:00" required /></div>':''}${type==='task'?'<div class="field"><label for="metaInput">分类或时长</label><input id="metaInput" name="meta" placeholder="工作 · 30 分钟" /></div>':''}${type==='habit'?'<div class="field"><label for="targetInput">目标</label><input id="targetInput" name="target" placeholder="每日 20 分钟" /></div>':''}<button class="primary-btn wide" type="submit">保存</button></form>`),30);
}

function updateTimerLoop(){
  clearInterval(timerHandle);
  if(state.study.running){ timerHandle=setInterval(()=>{ const el=document.querySelector('#timerText'); if(el) el.textContent=formatTimer(currentSeconds()); },1000); }
}
function persistAndRender(message){ save(); render(); if(message) toast(message); }

document.addEventListener('click', event=>{
  const navEl=event.target.closest('[data-page]');
  if(navEl){ activePage=navEl.dataset.page; }
  if(event.target.closest('#quickAdd')) quickAdd();
  if(event.target.closest('[data-close-modal]')) closeModal();
  const tab=event.target.closest('[data-tab]');
  if(tab){ activeTab[tab.dataset.tabScope]=tab.dataset.tab; render(); }
  const actionEl=event.target.closest('[data-action]');
  if(!actionEl) return;
  const action=actionEl.dataset.action;
  if(action==='toggle-task'){ const id=actionEl.closest('[data-id]').dataset.id, task=state.tasks.find(t=>t.id===id); task.done=!task.done; persistAndRender(task.done?'完成一项，真不错':'已恢复为待办'); }
  if(action==='go-plan'){ activePage='plan'; activeTab.plan='today'; location.hash='plan'; render(); }
  if(action==='go-habits'){ activePage='plan'; activeTab.plan='habit'; location.hash='plan'; render(); }
  if(action==='add-task') formModal('task');
  if(action==='add-schedule') formModal('schedule');
  if(action==='add-idea'||action==='add-inspiration') formModal('idea');
  if(action==='add-diary') formModal('diary');
  if(action==='add-habit') formModal('habit');
  if(action==='add-book') formModal('book');
  if(action==='toggle-habit'){ const h=state.habits.find(x=>x.id===actionEl.closest('[data-id]').dataset.id); h.days[6]=h.days[6]?0:1; persistAndRender(h.days[6]?'今日已打卡':'已取消今日打卡'); }
  if(action==='move-idea'){ const idea=state.ideas.find(x=>x.id===actionEl.closest('[data-id]').dataset.id); idea.stage=Math.min(4,idea.stage+1); persistAndRender('已推进到下一阶段'); }
  if(action==='select-mood'){ state.moods[today()]=Number(actionEl.dataset.mood); persistAndRender('今天的心情已记下'); }
  if(action==='toggle-timer'){ if(state.study.running){ state.study.seconds=currentSeconds(); state.study.running=false; state.study.lastStarted=null; } else { state.study.running=true; state.study.lastStarted=Date.now(); } persistAndRender(state.study.running?'专注计时开始':'专注计时已暂停'); }
  if(action==='fake-check'){ actionEl.closest('.task').classList.toggle('done'); toast('学习进度已更新'); }
  if(action==='save-review'){ const gain=document.querySelector('#reviewGain').value.trim(), next=document.querySelector('#reviewNext').value.trim(); if(!gain&&!next) return toast('先写下一点复盘吧'); state.reviews.push({id:uid(),date:today(),gain,next}); save(); toast('本周复盘已保存'); }
  if(action==='export-data'){ const blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'}), a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=`life-os-backup-${today()}.json`; a.click(); URL.revokeObjectURL(a.href); toast('备份文件已导出'); }
  if(action==='reset-data'){ if(confirm('确定恢复示例数据吗？当前设备上的改动会被清除。')){ state=structuredClone(seed); persistAndRender('已恢复示例数据'); } }
});

document.addEventListener('submit', event=>{
  const form=event.target.closest('[data-form]'); if(!form) return;
  event.preventDefault(); const data=Object.fromEntries(new FormData(form)); const title=data.title.trim(); if(!title) return;
  const action=form.dataset.form;
  if(action==='save-task') state.tasks.unshift({id:uid(),title,meta:data.meta?.trim()||'今日 · 待安排',color:'peach',done:false});
  if(action==='save-schedule') state.schedule.push({time:data.time,title,note:'今日安排'}), state.schedule.sort((a,b)=>a.time.localeCompare(b.time));
  if(action==='save-idea') state.ideas.unshift({id:uid(),title,note:'刚刚记录',stage:0});
  if(action==='save-diary') state.diaries.unshift({id:uid(),date:today(),mood:state.moods[today()] ?? 2,text:title});
  if(action==='save-habit') state.habits.push({id:uid(),title,target:data.target?.trim()||'每日一次',metric:'0 次',color:'sage',days:[0,0,0,0,0,0,0]});
  if(action==='save-book') state.books.push({id:uid(),title,author:'待补充',progress:0});
  closeModal(); persistAndRender('已经帮你记下了');
});

window.addEventListener('hashchange',()=>{ activePage=location.hash.slice(1)||'home'; render(); });
window.addEventListener('beforeunload',()=>{ if(state.study.running){ state.study.seconds=currentSeconds(); state.study.lastStarted=Date.now(); save(); } });
if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
render();
