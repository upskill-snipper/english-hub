(function(){
  // Per-chapter durations in ms — Schools (5 phases) & Students (6 phases) get more time
  const DURATIONS = [34000, 20000, 40000, 20000];
  const stage = document.querySelector('.stage');
  if (!stage) return;
  const scenes = Array.from(stage.querySelectorAll('.scene'));
  const dots = Array.from(document.querySelectorAll('.stage-dots button'));
  const tabs = Array.from(document.querySelectorAll('[data-tab]'));
  const bar = document.querySelector('.stage-progress i');

  let current = 0;
  let startedAt = Date.now();
  let paused = false;
  let phaseTimer = null;

  function clearPhaseTimer() {
    if (phaseTimer) { clearTimeout(phaseTimer); phaseTimer = null; }
  }

  function runPhases(scene) {
    clearPhaseTimer();
    const subs = scene.querySelectorAll('.subscene');
    const rails = scene.querySelectorAll('.phase-rail .p');
    if (!subs.length) return;
    const total = subs.length;
    const duration = DURATIONS[current];
    const per = Math.floor(duration / total);

    // Reset all
    subs.forEach((s, i) => s.classList.toggle('on', i === 0));
    rails.forEach((r, i) => r.classList.toggle('on', i === 0));

    let idx = 0;
    function next() {
      idx++;
      if (idx >= total) return;
      subs.forEach((s, i) => s.classList.toggle('on', i === idx));
      rails.forEach((r, i) => r.classList.toggle('on', i === idx));
      phaseTimer = setTimeout(next, per);
    }
    phaseTimer = setTimeout(next, per);
  }

  function go(i, {userInit = false} = {}) {
    current = (i + scenes.length) % scenes.length;
    scenes.forEach((s, idx) => s.classList.toggle('active', idx === current));
    dots.forEach((d, idx) => d.classList.toggle('on', idx === current));
    tabs.forEach((t, idx) => t.classList.toggle('on', idx === current));
    startedAt = Date.now();
    if (userInit) { paused = true; setTimeout(()=>{ paused=false; startedAt=Date.now(); runPhases(scenes[current]); }, 1500); }
    else { runPhases(scenes[current]); }
  }

  function tick() {
    if (!paused) {
      const elapsed = Date.now() - startedAt;
      const dur = DURATIONS[current];
      const pct = Math.min(1, elapsed / dur);
      if (bar) bar.style.width = (pct * 100) + '%';
      if (elapsed >= dur) go(current + 1);
    }
    requestAnimationFrame(tick);
  }

  dots.forEach((d, idx) => d.addEventListener('click', () => go(idx, {userInit: true})));
  tabs.forEach((t, idx) => t.addEventListener('click', () => {
    go(idx, {userInit: true});
    const rect = stage.getBoundingClientRect();
    window.scrollTo({top: window.scrollY + rect.top - 24, behavior: 'smooth'});
  }));

  stage.addEventListener('mouseenter', () => { paused = true; });
  stage.addEventListener('mouseleave', () => { paused = false; startedAt = Date.now() - (parseFloat(bar.style.width)/100)*DURATIONS[current]; });

  go(0);
  tick();
})();
