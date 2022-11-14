---
Title: Teknologier
Description: Sida om en hobby jag har
Template: technologies
icon: far fa-file-code
---

<div class="sidebar left" markdown="1">
## Teknologier

[CSS](css)  
[HTML](html)  
[JavaScript](javascript)  
[SQLite](sqlite)  
[Python](python)  
[git](git)  
[PHP](php)  
</div>

<div class="content-small" markdown="1">
# CSS

CSS står för Cascading Style Sheets och är det huvudsakliga sättet för webutvecklaren att skapa färg och form på en sida. *Style sheets* heter det för att det är sidor med stilregler, själva *sheetsen*. *Cascading* är ett ord som är svårt att översätta men det är ett bildspråk för hur CSS-regler byggs lager-på-lager. Det kan finnas många olika källor till de stilregler som finns på en sida och det finns hierarkier och olika uttryck som styr hur de sammantaget ska tolkas och sedan visas för användaren.

I sin enkelhet så kan en regel se ut så här

    .blue-text {
        color: blue;
    }

och när vi sedan skriver ut HTML på detta vis

    <span class="blue-text">detta är blått</span>

så blir resultatet <span class="blue-text">detta är blått</span>.

Enkelt, tänker du? Ja, och nej. Det blir lite krångligare när man vet att det redan finns en regel på sidan som säger att den här texten ska vara mörkgrå:

    * {
        color: #474747;
    }

`*` i detta kodstycke betyder ungefär *allt*. `#474747` är kod för den mörkgråa färg som sidans text har som standard. 

Så det finns en regel som säger att all text ska vara mörkgrå och en annan som säger att frasen *detta är blått* ska bli blå. Hur vet webbläsaren att just de orden ska bli blå? Det är där hierarkier och *cascading* kommer in. 

Självklart finns det mycket mer att göra än att bara lägga färg på text. CSS styr också storlek på fält, radhöjd, utrymme mellan fält och tecken, layout, färg på block, skuggor, vissa animationer och mycket mer. Det kan bli väldigt komplicerat när man väl börjar dyka in i det.