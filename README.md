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
javascript:(function()%7B(function%20()%20%7B%20const%20channels%20%3D%20%5B%20%7B%20name%3A%20'M1'%2C%20video%3A%20'mtv1live'%2C%20title%3A%20'M1'%2C%20site%3A%20'mediaklikk.hu'%2C%20path%3A%20'%2Felo%2Fmtv1live%2F'%2C%20vast%3A%20'm1_preroll'%20%7D%2C%20%7B%20name%3A%20'M2'%2C%20video%3A%20'mtv2live'%2C%20title%3A%20'M2'%2C%20site%3A%20'mediaklikk.hu'%2C%20path%3A%20'%2Felo%2Fmtv2live%2F'%2C%20vast%3A%20'm2_preroll'%20%7D%2C%20%7B%20name%3A%20'Duna'%2C%20video%3A%20'dunalive'%2C%20title%3A%20'Duna'%2C%20site%3A%20'mediaklikk.hu'%2C%20path%3A%20'%2Felo%2Fduna-elo'%2C%20vast%3A%20'duna_preroll'%20%7D%2C%20%7B%20name%3A%20'Duna%20W'%2C%20video%3A%20'dunaworldlive'%2C%20title%3A%20'Duna%20World'%2C%20site%3A%20'mediaklikk.hu'%2C%20path%3A%20'%2Felo%2Fduna-world-elo'%2C%20vast%3A%20'dunaworld_preroll'%20%7D%2C%20%7B%20name%3A%20'M4'%2C%20video%3A%20'mtv4live'%2C%20title%3A%20'M4%20Sport'%2C%20site%3A%20'm4sport.hu'%2C%20path%3A%20'%2Felo%2Fmtv4live%2F'%2C%20vast%3A%20'm4sport_preroll'%20%7D%2C%20%7B%20name%3A%20'M4%2B'%2C%20video%3A%20'mtv4plus'%2C%20title%3A%20'M4%20Sport%20%2B'%2C%20site%3A%20'm4sport.hu'%2C%20path%3A%20'%2Felo%2Fmtv4plus%2F'%2C%20vast%3A%20null%20%7D%2C%20%7B%20name%3A%20'M5'%2C%20video%3A%20'mtv5live'%2C%20title%3A%20'M5'%2C%20site%3A%20'mediaklikk.hu'%2C%20path%3A%20'%2Felo%2Fmtv5live%2F'%2C%20vast%3A%20'm5_preroll'%20%7D%2C%20%5D%3B%20function%20buildUrl(c)%20%7B%20let%20url%20%3D%20'https%3A%20%2B%20'%3Fvideo%3D'%20%2B%20c.video%20%2B%20'%26noflash%3Dyes'%3B%20if%20(c.vast)%20%7B%20url%20%2B%3D%20'%26vastpreroll%3Dhttps%253A%252F%252Fpubads.g.doubleclick.net%252Fgampad%252Flive%252Fads'%20%2B%20'%253Fiu%253D%252F22652647%252F'%20%2B%20c.vast%20%2B%20'%2526description_url%253D%2526tfcd%253D0%2526npa%253D0%2526sz%253D640x360'%20%2B%20'%2526gdfp_req%253D1%2526output%253Dvast%2526unviewed_position_start%253D1'%20%2B%20'%2526env%253Dvp%2526impl%253Ds%2526correlator%253D%2526plcmt%253D1'%3B%20%7D%20url%20%2B%3D%20'%26osfamily%3DWindows%26osversion%3D10%26browsername%3DOpera%26browserversion%3D132.0.0.0'%20%2B%20'%26title%3D'%20%2B%20encodeURIComponent(c.title)%20%2B%20'%26contentid%3D'%20%2B%20c.video%20%2B%20'%26embedded%3D0'%20%2B%20'%26sourceUrl%3Dhttps%253A%252F%252F'%20%2B%20c.site%20%2B%20encodeURIComponent(c.path)%20%2B%20'%26autostart%3Dtrue%26mute%3Dfalse%26recommendationSettings%3D%2522%7B%7D%2522'%3B%20return%20url%3B%20%7D%20const%20origIframe%20%3D%20document.querySelector('iframe%5Bsrc*%3D%22player.mediaklikk.hu%22%5D')%3B%20if%20(!origIframe)%20%7B%20alert('Nem%20tal%C3%A1lom%20a%20player%20iframe-et!%20V%C3%A1rd%20meg%2C%20am%C3%ADg%20a%20vide%C3%B3%20bet%C3%B6lt%C5%91dik.')%3B%20return%3B%20%7D%20origIframe.src%20%3D%20'about%3Ablank'%3B%20const%20root%20%3D%20document.createElement('div')%3B%20root.id%20%3D%20'mini-tv-root'%3B%20Object.assign(root.style%2C%20%7B%20position%3A%20'fixed'%2C%20top%3A%20'0'%2C%20left%3A%20'0'%2C%20width%3A%20'100vw'%2C%20height%3A%20'100vh'%2C%20background%3A%20'%23000'%2C%20zIndex%3A%20'9999999'%2C%20display%3A%20'flex'%2C%20flexDirection%3A%20'column'%2C%20margin%3A%20'0'%2C%20padding%3A%20'0'%2C%20boxSizing%3A%20'border-box'%2C%20%7D)%3B%20const%20videoBox%20%3D%20document.createElement('div')%3B%20Object.assign(videoBox.style%2C%20%7B%20flex%3A%20'1'%2C%20width%3A%20'100%25'%2C%20display%3A%20'flex'%2C%20justifyContent%3A%20'center'%2C%20alignItems%3A%20'center'%2C%20background%3A%20'%23000'%2C%20overflow%3A%20'hidden'%2C%20%7D)%3B%20function%20makeIframe(url)%20%7B%20const%20f%20%3D%20document.createElement('iframe')%3B%20f.src%20%3D%20url%3B%20f.allow%20%3D%20'autoplay%3B%20fullscreen'%3B%20Object.assign(f.style%2C%20%7B%20width%3A%20'100%25'%2C%20height%3A%20'100%25'%2C%20border%3A%20'none'%20%7D)%3B%20return%20f%3B%20%7D%20function%20switchTo(url)%20%7B%20const%20old%20%3D%20videoBox.querySelector('iframe')%3B%20if%20(old)%20old.src%20%3D%20'about%3Ablank'%3B%20videoBox.innerHTML%20%3D%20''%3B%20videoBox.appendChild(makeIframe(url))%3B%20%7D%20const%20nav%20%3D%20document.createElement('div')%3B%20Object.assign(nav.style%2C%20%7B%20height%3A%20'56px'%2C%20background%3A%20'%23111'%2C%20width%3A%20'100%25'%2C%20display%3A%20'flex'%2C%20justifyContent%3A%20'center'%2C%20alignItems%3A%20'center'%2C%20borderTop%3A%20'1px%20solid%20%23333'%2C%20flexShrink%3A%20'0'%2C%20gap%3A%20'8px'%2C%20%7D)%3B%20let%20activeBtn%20%3D%20null%3B%20channels.forEach(function%20(c)%20%7B%20const%20btn%20%3D%20document.createElement('button')%3B%20btn.textContent%20%3D%20c.name%3B%20Object.assign(btn.style%2C%20%7B%20background%3A%20'%232a2a2a'%2C%20color%3A%20'%23fff'%2C%20border%3A%20'none'%2C%20padding%3A%20'8px%2016px'%2C%20cursor%3A%20'pointer'%2C%20fontFamily%3A%20'sans-serif'%2C%20fontWeight%3A%20'bold'%2C%20borderRadius%3A%20'4px'%2C%20fontSize%3A%20'14px'%2C%20transition%3A%20'background%200.2s'%2C%20%7D)%3B%20btn.onmouseenter%20%3D%20function%20()%20%7B%20if%20(btn%20!%3D%3D%20activeBtn)%20btn.style.background%20%3D%20'%23444'%3B%20%7D%3B%20btn.onmouseleave%20%3D%20function%20()%20%7B%20if%20(btn%20!%3D%3D%20activeBtn)%20btn.style.background%20%3D%20'%232a2a2a'%3B%20%7D%3B%20btn.onclick%20%3D%20function%20()%20%7B%20switchTo(buildUrl(c))%3B%20if%20(activeBtn)%20activeBtn.style.background%20%3D%20'%232a2a2a'%3B%20btn.style.background%20%3D%20'%23e50914'%3B%20activeBtn%20%3D%20btn%3B%20%7D%3B%20nav.appendChild(btn)%3B%20%7D)%3B%20const%20closeBtn%20%3D%20document.createElement('button')%3B%20closeBtn.textContent%20%3D%20'%E2%9C%95'%3B%20Object.assign(closeBtn.style%2C%20%7B%20position%3A%20'fixed'%2C%20top%3A%20'10px'%2C%20right%3A%20'14px'%2C%20background%3A%20'transparent'%2C%20color%3A%20'%23888'%2C%20border%3A%20'none'%2C%20fontSize%3A%20'22px'%2C%20cursor%3A%20'pointer'%2C%20zIndex%3A%20'10000000'%2C%20lineHeight%3A%20'1'%2C%20%7D)%3B%20closeBtn.onclick%20%3D%20function%20()%20%7B%20document.body.removeChild(root)%3B%20location.reload()%3B%20%7D%3B%20const%20style%20%3D%20document.createElement('style')%3B%20style.textContent%20%3D%20'body%20%3E%20*%3Anot(%23mini-tv-root)%20%7B%20visibility%3A%20hidden%20!important%3B%20%7D'%3B%20document.head.appendChild(style)%3B%20root.appendChild(videoBox)%3B%20root.appendChild(nav)%3B%20root.appendChild(closeBtn)%3B%20document.body.appendChild(root)%3B%20%7D)()%3B%7D)()%3B
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
