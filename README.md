# 📺 MédiaKlikk Bookmarklet

Böngésző bookmarklet, amivel a MédiaKlikk és M4 Sport élő adásait egyetlen kattintással, csatornaváltóval lehet nézni – teljes képernyőn, az oldal többi elemét elrejtve.

**Támogatott csatornák:** M1 · Duna · Duna World · M4 Sport · M4 Sport+ · M5

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
javascript:(function(){const channels=[{name:'M1',video:'mtv1live',title:'M1',site:'mediaklikk.hu',path:'/elo/mtv1live/',vast:'m1_preroll'},{name:'Duna',video:'dunalive',title:'Duna',site:'mediaklikk.hu',path:'/elo/duna-elo',vast:'duna_preroll'},{name:'Duna W',video:'dunaworldlive',title:'Duna World',site:'mediaklikk.hu',path:'/elo/duna-world-elo',vast:'dunaworld_preroll'},{name:'M4',video:'mtv4live',title:'M4 Sport',site:'m4sport.hu',path:'/elo/mtv4live/',vast:'m4sport_preroll'},{name:'M4+',video:'mtv4plus',title:'M4 Sport +',site:'m4sport.hu',path:'/elo/mtv4plus/',vast:null},{name:'M5',video:'mtv5live',title:'M5',site:'mediaklikk.hu',path:'/elo/mtv5live/',vast:'m5_preroll'}];function buildUrl(c){let url='https://player.mediaklikk.hu/playernew/player.php?video='+c.video+'&noflash=yes';if(c.vast)url+='&vastpreroll=https%3A%2F%2Fpubads.g.doubleclick.net%2Fgampad%2Flive%2Fads%3Fiu%3D%2F22652647%2F'+c.vast+'%26description_url%3D%26tfcd%3D0%26npa%3D0%26sz%3D640x360%26gdfp_req%3D1%26output%3Dvast%26unviewed_position_start%3D1%26env%3Dvp%26impl%3Ds%26correlator%3D%26plcmt%3D1';url+='&osfamily=Windows&osversion=10&browsername=Opera&browserversion=132.0.0.0&title='+encodeURIComponent(c.title)+'&contentid='+c.video+'&embedded=0&sourceUrl=https%3A%2F%2F'+c.site+encodeURIComponent(c.path)+'&autostart=true&mute=false&recommendationSettings=%22{}%22';return url;}let origIframe=document.querySelector('iframe[src*="player.mediaklikk.hu"]');if(!origIframe){alert('Nem találom a player iframe-et! Várd meg, amíg a videó betöltődik.');return;}origIframe.src='about:blank';const root=document.createElement('div');root.id='mini-tv-root';Object.assign(root.style,{position:'fixed',top:'0',left:'0',width:'100vw',height:'100vh',background:'#000',zIndex:'9999999',display:'flex',flexDirection:'column',margin:'0',padding:'0',boxSizing:'border-box'});const videoBox=document.createElement('div');Object.assign(videoBox.style,{flex:'1',width:'100%',display:'flex',justifyContent:'center',alignItems:'center',background:'#000',overflow:'hidden'});function makeIframe(url){const f=document.createElement('iframe');f.src=url;f.allow='autoplay; fullscreen';Object.assign(f.style,{width:'100%',height:'100%',border:'none'});return f;}function switchTo(url){const old=videoBox.querySelector('iframe');if(old){old.src='about:blank';}videoBox.innerHTML='';videoBox.appendChild(makeIframe(url));}const nav=document.createElement('div');Object.assign(nav.style,{height:'56px',background:'#111',width:'100%',display:'flex',justifyContent:'center',alignItems:'center',borderTop:'1px solid #333',flexShrink:'0',gap:'8px'});let activeBtn=null;channels.forEach(function(c){const btn=document.createElement('button');btn.textContent=c.name;Object.assign(btn.style,{background:'#2a2a2a',color:'#fff',border:'none',padding:'8px 16px',cursor:'pointer',fontFamily:'sans-serif',fontWeight:'bold',borderRadius:'4px',fontSize:'14px',transition:'background 0.2s'});btn.onmouseenter=function(){if(btn!==activeBtn)btn.style.background='#444';};btn.onmouseleave=function(){if(btn!==activeBtn)btn.style.background='#2a2a2a';};btn.onclick=function(){switchTo(buildUrl(c));if(activeBtn)activeBtn.style.background='#2a2a2a';btn.style.background='#e50914';activeBtn=btn;};nav.appendChild(btn);});const closeBtn=document.createElement('button');closeBtn.textContent='\u2715';Object.assign(closeBtn.style,{position:'fixed',top:'10px',right:'14px',background:'transparent',color:'#888',border:'none',fontSize:'22px',cursor:'pointer',zIndex:'10000000',lineHeight:'1'});closeBtn.onclick=function(){document.body.removeChild(root);location.reload();};root.appendChild(videoBox);root.appendChild(nav);root.appendChild(closeBtn);const style=document.createElement('style');style.textContent='body > *:not(#mini-tv-root){visibility:hidden!important;}';document.head.appendChild(style);document.body.appendChild(root);})();
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
