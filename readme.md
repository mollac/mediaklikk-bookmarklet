# 🌟 Bookmarklet Gyűjtemény és Telepítő

Ez a projekt egy böngészőből futtatható JavaScript **Bookmarklet**-et (könyvjelző-alkalmazást) és egy modern telepítő/generáló felületet tartalmaz.

## 🚀 Mi az a Bookmarklet?

A bookmarklet egy olyan könyvjelző a böngésződben, amely nem egy weboldalra mutat, hanem egy **JavaScript kódot** tartalmaz. Ha rákattintasz a könyvjelzősávon, a kód lefut az éppen megnyitott weboldalon. Így módosíthatod az oldal megjelenését, szerkesztheted a szövegeket, vagy egyéb hasznos funkciókat érhetsz el.

---

## 🛠️ Telepítés és használat

### 1. Opció: Húzd ki az alábbi gombot! (Ajánlott)

Húzd ki ezt a gombot közvetlenül a böngésződ **Könyvjelzősávjára (Bookmarks Bar)**:

👉 **[Szerkesztő Mód (Bookmarklet)](javascript:(function()%7Bdocument.body.contentEditable%3D%3D%3D'true'%3F(document.body.contentEditable%3D'false'%2Cdocument.designMode%3D'off'%2Cs('Szerkeszt%C5%91%20M%C3%B3d%3A%20KIKAPCSOLVA'))%3A(document.body.contentEditable%3D'true'%2Cdocument.designMode%3D'on'%2Cs('Szerkeszt%C5%91%20M%C3%B3d%3A%20BEKAPCSOLVA%20-%20Kattints%20b%C3%A1rmelyik%20sz%C3%B6vegre%20a%20szerkeszt%C3%A9shez!'))%3Bfunction%20s(m)%7Bvar%20t%3Ddocument.getElementById('bml-toast')%3Bt%7C%7C(t%3Ddocument.createElement('div')%2Ct.id%3D'bml-toast'%2Ct.style.cssText%3D'position%3Afixed%3Btop%3A20px%3Bright%3A20px%3Bbackground%3Argba(30%2C30%2C40%2C0.95)%3Bcolor%3A%2300e5ff%3Bpadding%3A12px%2024px%3Bborder-radius%3A8px%3Bfont-family%3Asans-serif%3Bfont-size%3A14px%3Bfont-weight%3Abold%3Bbox-shadow%3A0%208px%2032px%20rgba(0%2C229%252FF%2C0.2)%3Bborder%3A1px%20solid%20rgba(0%2C229%2C255%2C0.3)%3Bz-index%3A9999999%3Btransition%3Aopacity%200.3s%2Ctransform%200.3s%3Bpointer-events%3Anone%3Btransform%3AtranslateY(-10px)%3Bopacity%3D0'%2Cdocument.body.appendChild(t))%2Ct.innerText%3Dm%2Ct.offsetHeight%2Ct.style.transform%3D'translateY(0)'%2Ct.style.opacity%3D'1'%2CsetTimeout(function()%7Bt.style.transform%3D'translateY(-10px)'%2Ct.style.opacity%3D'0'%7D%2C2500)%7D%7D)()%3B)**

> 💡 *Megjegyzés: Ha a könyvjelzősávog nem látható, nyomd meg a **Ctrl + Shift + B** (Windows) vagy **Cmd + Shift + B** (Mac) billentyűkombinációt a megjelenítéséhez.*

---

### 2. Opció: Használd az interaktív Telepítőoldalt! (Premium Élmény)

Mivel néhány Markdown-nézegető (például a GitHub vagy bizonyos szerkesztők biztonsági okokból) letiltja a `javascript:` kezdetű linkek közvetlen húzását a leírásból, létrehoztunk egy gyönyörű, interaktív felületet is.

Nyisd meg a [bookmarklet_installer.html](file:///c:/Users/admin/Desktop/bookmarklet_installer.html) fájlt a böngésződben (kattints a linkre, vagy kattints duplán a fájlra a Desktopon).

Ezen az oldalon:
- **Több előre beállított funkciót** is találsz (Sötét mód, Jelszómegjelenítő, Elrendezés-vizsgáló).
- **Saját JavaScript kódot** írhatsz be, amit az oldal valós időben alakít át könyvjelzővé.
- Egy animált felületen, látványos, világító gomb segítségével húzhatod ki a könyvjelzőt.

---

## 📄 A kód részletei

A könyvjelző alapértelmezett forráskódját megtalálod a [bookmarklet.js](file:///c:/Users/admin/Desktop/bookmarklet.js) fájlban. Ez a kód teszi lehetővé, hogy a könyvjelzőre kattintás után bármelyik weboldal szövegét közvetlenül átírd (Design Mode) úgy, mintha egy szövegszerkesztőt használnál. Újbóli kattintásra a szerkesztő mód kikapcsol.
