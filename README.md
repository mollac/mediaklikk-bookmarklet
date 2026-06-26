# 📺 MédiaKlikk Bookmarklet

Böngésző bookmarklet, amivel a MédiaKlikk élő adásait egyetlen kattintással, csatornaváltóval lehet nézni – teljes képernyőn, az oldal többi elemét elrejtve.

**Támogatott csatornák:** M1 · M2 · Duna · Duna World · M4 Sport · M4 Sport+ · M5

---

## Telepítés

### 1. lépés – Könyvjelzők megjelenítése

Ha nem látszik a böngésző könyvjelzősávja:
- **Chrome / Opera / Edge:** `Ctrl+Shift+B`
- **Firefox:** `Ctrl+Shift+B`

### 2. lépés – Új könyvjelző létrehozása

1. Kattints jobb gombbal a könyvjelzősávra → **Oldal hozzáadása** (vagy „Könyvjelző hozzáadása")
2. **Névnek** add meg: `📺 MédiaKlikk`
3. **URL / Cím mezőbe** illeszd be az alábbi kódot (a teljes szöveget):

```
javascript:(function()%7B(function () %7B%0A  const channels %3D %5B%0A    %7B name%3A 'M1'%2C     video%3A 'mtv1live'%2C    title%3A 'M1'%2C         site%3A 'mediaklikk.hu'%2C path%3A '%2Felo%2Fmtv1live%2F'%2C       vast%3A 'm1_preroll' %7D%2C%0A    %7B name%3A 'M2'%2C     video%3A 'mtv2live'%2C    title%3A 'M2'%2C         site%3A 'mediaklikk.hu'%2C path%3A '%2Felo%2Fmtv2live%2F'%2C       vast%3A 'm2_preroll' %7D%2C%0A    %7B name%3A 'Duna'%2C   video%3A 'dunalive'%2C    title%3A 'Duna'%2C       site%3A 'mediaklikk.hu'%2C path%3A '%2Felo%2Fduna-elo'%2C        vast%3A 'duna_preroll' %7D%2C%0A    %7B name%3A 'Duna W'%2C video%3A 'dunaworldlive'%2C title%3A 'Duna World'%2C site%3A 'mediaklikk.hu'%2C path%3A '%2Felo%2Fduna-world-elo'%2C vast%3A 'dunaworld_preroll' %7D%2C%0A    %7B name%3A 'M4'%2C     video%3A 'mtv4live'%2C    title%3A 'M4 Sport'%2C   site%3A 'm4sport.hu'%2C    path%3A '%2Felo%2Fmtv4live%2F'%2C       vast%3A 'm4sport_preroll' %7D%2C%0A    %7B name%3A 'M4%2B'%2C    video%3A 'mtv4plus'%2C    title%3A 'M4 Sport %2B'%2C site%3A 'm4sport.hu'%2C    path%3A '%2Felo%2Fmtv4plus%2F'%2C       vast%3A null %7D%2C%0A    %7B name%3A 'M5'%2C     video%3A 'mtv5live'%2C    title%3A 'M5'%2C         site%3A 'mediaklikk.hu'%2C path%3A '%2Felo%2Fmtv5live%2F'%2C       vast%3A 'm5_preroll' %7D%2C%0A  %5D%3B%0A%0A  function buildUrl(c) %7B%0A    let url %3D 'https%3A%2F%2Fplayer.mediaklikk.hu%2Fplayernew%2Fplayer.php'%0A      %2B '%3Fvideo%3D' %2B c.video%0A      %2B '%26noflash%3Dyes'%3B%0A%0A    if (c.vast) %7B%0A      url %2B%3D '%26vastpreroll%3Dhttps%253A%252F%252Fpubads.g.doubleclick.net%252Fgampad%252Flive%252Fads'%0A        %2B '%253Fiu%253D%252F22652647%252F' %2B c.vast%0A        %2B '%2526description_url%253D%2526tfcd%253D0%2526npa%253D0%2526sz%253D640x360'%0A        %2B '%2526gdfp_req%253D1%2526output%253Dvast%2526unviewed_position_start%253D1'%0A        %2B '%2526env%253Dvp%2526impl%253Ds%2526correlator%253D%2526plcmt%253D1'%3B%0A    %7D%0A%0A    url %2B%3D '%26osfamily%3DWindows%26osversion%3D10%26browsername%3DOpera%26browserversion%3D132.0.0.0'%0A      %2B '%26title%3D' %2B encodeURIComponent(c.title)%0A      %2B '%26contentid%3D' %2B c.video%0A      %2B '%26embedded%3D0'%0A      %2B '%26sourceUrl%3Dhttps%253A%252F%252F' %2B c.site %2B encodeURIComponent(c.path)%0A      %2B '%26autostart%3Dtrue%26mute%3Dfalse%26recommendationSettings%3D%2522%7B%7D%2522'%3B%0A%0A    return url%3B%0A  %7D%0A%0A  %2F%2F Megkeressük az eredeti player iframe-et%0A  const origIframe %3D document.querySelector('iframe%5Bsrc*%3D"player.mediaklikk.hu"%5D')%3B%0A  if (!origIframe) %7B%0A    alert('Nem találom a player iframe-et! Várd meg%2C amíg a videó betöltődik.')%3B%0A    return%3B%0A  %7D%0A%0A  %2F%2F Leállítjuk az esetlegesen már futó streamet%0A  origIframe.src %3D 'about%3Ablank'%3B%0A%0A  %2F%2F Gyökér konténer (teljes képernyő)%0A  const root %3D document.createElement('div')%3B%0A  root.id %3D 'mini-tv-root'%3B%0A  Object.assign(root.style%2C %7B%0A    position%3A 'fixed'%2C top%3A '0'%2C left%3A '0'%2C%0A    width%3A '100vw'%2C height%3A '100vh'%2C%0A    background%3A '%23000'%2C zIndex%3A '9999999'%2C%0A    display%3A 'flex'%2C flexDirection%3A 'column'%2C%0A    margin%3A '0'%2C padding%3A '0'%2C boxSizing%3A 'border-box'%2C%0A  %7D)%3B%0A%0A  %2F%2F Videó terület%0A  const videoBox %3D document.createElement('div')%3B%0A  Object.assign(videoBox.style%2C %7B%0A    flex%3A '1'%2C width%3A '100%25'%2C%0A    display%3A 'flex'%2C justifyContent%3A 'center'%2C alignItems%3A 'center'%2C%0A    background%3A '%23000'%2C overflow%3A 'hidden'%2C%0A  %7D)%3B%0A%0A  function makeIframe(url) %7B%0A    const f %3D document.createElement('iframe')%3B%0A    f.src %3D url%3B%0A    f.allow %3D 'autoplay%3B fullscreen'%3B%0A    Object.assign(f.style%2C %7B width%3A '100%25'%2C height%3A '100%25'%2C border%3A 'none' %7D)%3B%0A    return f%3B%0A  %7D%0A%0A  function switchTo(url) %7B%0A    const old %3D videoBox.querySelector('iframe')%3B%0A    if (old) old.src %3D 'about%3Ablank'%3B %2F%2F leállítja az előző streamet%0A    videoBox.innerHTML %3D ''%3B%0A    videoBox.appendChild(makeIframe(url))%3B%0A  %7D%0A%0A  %2F%2F Navigációs sáv%0A  const nav %3D document.createElement('div')%3B%0A  Object.assign(nav.style%2C %7B%0A    height%3A '56px'%2C background%3A '%23111'%2C width%3A '100%25'%2C%0A    display%3A 'flex'%2C justifyContent%3A 'center'%2C alignItems%3A 'center'%2C%0A    borderTop%3A '1px solid %23333'%2C flexShrink%3A '0'%2C gap%3A '8px'%2C%0A  %7D)%3B%0A%0A  let activeBtn %3D null%3B%0A%0A  channels.forEach(function (c) %7B%0A    const btn %3D document.createElement('button')%3B%0A    btn.textContent %3D c.name%3B%0A    Object.assign(btn.style%2C %7B%0A      background%3A '%232a2a2a'%2C color%3A '%23fff'%2C border%3A 'none'%2C%0A      padding%3A '8px 16px'%2C cursor%3A 'pointer'%2C%0A      fontFamily%3A 'sans-serif'%2C fontWeight%3A 'bold'%2C%0A      borderRadius%3A '4px'%2C fontSize%3A '14px'%2C transition%3A 'background 0.2s'%2C%0A    %7D)%3B%0A    btn.onmouseenter %3D function () %7B if (btn !%3D%3D activeBtn) btn.style.background %3D '%23444'%3B %7D%3B%0A    btn.onmouseleave %3D function () %7B if (btn !%3D%3D activeBtn) btn.style.background %3D '%232a2a2a'%3B %7D%3B%0A    btn.onclick %3D function () %7B%0A      switchTo(buildUrl(c))%3B%0A      if (activeBtn) activeBtn.style.background %3D '%232a2a2a'%3B%0A      btn.style.background %3D '%23e50914'%3B%0A      activeBtn %3D btn%3B%0A    %7D%3B%0A    nav.appendChild(btn)%3B%0A  %7D)%3B%0A%0A  %2F%2F Bezáró gomb%0A  const closeBtn %3D document.createElement('button')%3B%0A  closeBtn.textContent %3D '✕'%3B%0A  Object.assign(closeBtn.style%2C %7B%0A    position%3A 'fixed'%2C top%3A '10px'%2C right%3A '14px'%2C%0A    background%3A 'transparent'%2C color%3A '%23888'%2C%0A    border%3A 'none'%2C fontSize%3A '22px'%2C cursor%3A 'pointer'%2C%0A    zIndex%3A '10000000'%2C lineHeight%3A '1'%2C%0A  %7D)%3B%0A  closeBtn.onclick %3D function () %7B%0A    document.body.removeChild(root)%3B%0A    location.reload()%3B%0A  %7D%3B%0A%0A  %2F%2F Többi oldaltartalom elrejtése%0A  const style %3D document.createElement('style')%3B%0A  style.textContent %3D 'body > *%3Anot(%23mini-tv-root) %7B visibility%3A hidden !important%3B %7D'%3B%0A  document.head.appendChild(style)%3B%0A%0A  root.appendChild(videoBox)%3B%0A  root.appendChild(nav)%3B%0A  root.appendChild(closeBtn)%3B%0A  document.body.appendChild(root)%3B%0A%7D)()%3B%7D)()%3B
```

4. Mentés.

---

## Használat

1. Menj el bármelyik élő oldalra, pl. [mediaklikk.hu/elo/mtv1live/](https://mediaklikk.hu/elo/mtv1live/)
2. Várd meg, amíg a videólejátszó betöltődik
3. Kattints a `📺 MédiaKlikk` könyvjelzőre
4. Az oldal teljes képernyős nézetbe vált, alul a csatornaváltó gombokkal
5. A **✕** gombbal visszatérhetsz az eredeti oldalra

---

## Hogyan működik?

A bookmarklet megkeresi az oldalon a MédiaKlikk player `<iframe>` elemét, leállítja azt, majd egy teljes képernyős nézetet épít fel köré. A csatornaváltó gombok az iframe forrását cserélik le – navigáció nélkül, az oldal újratöltése nélkül.

---

## Megjegyzések

- Csak olyan oldalakon működik, ahol már betöltött a MédiaKlikk / M4 Sport player
- Tesztelve: Chrome, Opera, Firefox
- A player URL paraméterek változása esetén a `bookmarklet.js` fájlban a `channels` tömb frissítendő

---

## Licenc

MIT
