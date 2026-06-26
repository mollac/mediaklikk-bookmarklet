(function () {
  const channels = [
    { name: 'M1',     video: 'mtv1live',    title: 'M1',         site: 'mediaklikk.hu', path: '/elo/mtv1live/',       vast: 'm1_preroll' },
    { name: 'Duna',   video: 'dunalive',    title: 'Duna',       site: 'mediaklikk.hu', path: '/elo/duna-elo',        vast: 'duna_preroll' },
    { name: 'Duna W', video: 'dunaworldlive', title: 'Duna World', site: 'mediaklikk.hu', path: '/elo/duna-world-elo', vast: 'dunaworld_preroll' },
    { name: 'M4',     video: 'mtv4live',    title: 'M4 Sport',   site: 'm4sport.hu',    path: '/elo/mtv4live/',       vast: 'm4sport_preroll' },
    { name: 'M4+',    video: 'mtv4plus',    title: 'M4 Sport +', site: 'm4sport.hu',    path: '/elo/mtv4plus/',       vast: null },
    { name: 'M5',     video: 'mtv5live',    title: 'M5',         site: 'mediaklikk.hu', path: '/elo/mtv5live/',       vast: 'm5_preroll' },
  ];

  function buildUrl(c) {
    let url = 'https://player.mediaklikk.hu/playernew/player.php'
      + '?video=' + c.video
      + '&noflash=yes';

    if (c.vast) {
      url += '&vastpreroll=https%3A%2F%2Fpubads.g.doubleclick.net%2Fgampad%2Flive%2Fads'
        + '%3Fiu%3D%2F22652647%2F' + c.vast
        + '%26description_url%3D%26tfcd%3D0%26npa%3D0%26sz%3D640x360'
        + '%26gdfp_req%3D1%26output%3Dvast%26unviewed_position_start%3D1'
        + '%26env%3Dvp%26impl%3Ds%26correlator%3D%26plcmt%3D1';
    }

    url += '&osfamily=Windows&osversion=10&browsername=Opera&browserversion=132.0.0.0'
      + '&title=' + encodeURIComponent(c.title)
      + '&contentid=' + c.video
      + '&embedded=0'
      + '&sourceUrl=https%3A%2F%2F' + c.site + encodeURIComponent(c.path)
      + '&autostart=true&mute=false&recommendationSettings=%22{}%22';

    return url;
  }

  // Megkeressük az eredeti player iframe-et
  const origIframe = document.querySelector('iframe[src*="player.mediaklikk.hu"]');
  if (!origIframe) {
    alert('Nem találom a player iframe-et! Várd meg, amíg a videó betöltődik.');
    return;
  }

  // Leállítjuk az esetlegesen már futó streamet
  origIframe.src = 'about:blank';

  // Gyökér konténer (teljes képernyő)
  const root = document.createElement('div');
  root.id = 'mini-tv-root';
  Object.assign(root.style, {
    position: 'fixed', top: '0', left: '0',
    width: '100vw', height: '100vh',
    background: '#000', zIndex: '9999999',
    display: 'flex', flexDirection: 'column',
    margin: '0', padding: '0', boxSizing: 'border-box',
  });

  // Videó terület
  const videoBox = document.createElement('div');
  Object.assign(videoBox.style, {
    flex: '1', width: '100%',
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    background: '#000', overflow: 'hidden',
  });

  function makeIframe(url) {
    const f = document.createElement('iframe');
    f.src = url;
    f.allow = 'autoplay; fullscreen';
    Object.assign(f.style, { width: '100%', height: '100%', border: 'none' });
    return f;
  }

  function switchTo(url) {
    const old = videoBox.querySelector('iframe');
    if (old) old.src = 'about:blank'; // leállítja az előző streamet
    videoBox.innerHTML = '';
    videoBox.appendChild(makeIframe(url));
  }

  // Navigációs sáv
  const nav = document.createElement('div');
  Object.assign(nav.style, {
    height: '56px', background: '#111', width: '100%',
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    borderTop: '1px solid #333', flexShrink: '0', gap: '8px',
  });

  let activeBtn = null;

  channels.forEach(function (c) {
    const btn = document.createElement('button');
    btn.textContent = c.name;
    Object.assign(btn.style, {
      background: '#2a2a2a', color: '#fff', border: 'none',
      padding: '8px 16px', cursor: 'pointer',
      fontFamily: 'sans-serif', fontWeight: 'bold',
      borderRadius: '4px', fontSize: '14px', transition: 'background 0.2s',
    });
    btn.onmouseenter = function () { if (btn !== activeBtn) btn.style.background = '#444'; };
    btn.onmouseleave = function () { if (btn !== activeBtn) btn.style.background = '#2a2a2a'; };
    btn.onclick = function () {
      switchTo(buildUrl(c));
      if (activeBtn) activeBtn.style.background = '#2a2a2a';
      btn.style.background = '#e50914';
      activeBtn = btn;
    };
    nav.appendChild(btn);
  });

  // Bezáró gomb
  const closeBtn = document.createElement('button');
  closeBtn.textContent = '✕';
  Object.assign(closeBtn.style, {
    position: 'fixed', top: '10px', right: '14px',
    background: 'transparent', color: '#888',
    border: 'none', fontSize: '22px', cursor: 'pointer',
    zIndex: '10000000', lineHeight: '1',
  });
  closeBtn.onclick = function () {
    document.body.removeChild(root);
    location.reload();
  };

  // Többi oldaltartalom elrejtése
  const style = document.createElement('style');
  style.textContent = 'body > *:not(#mini-tv-root) { visibility: hidden !important; }';
  document.head.appendChild(style);

  root.appendChild(videoBox);
  root.appendChild(nav);
  root.appendChild(closeBtn);
  document.body.appendChild(root);
})();
