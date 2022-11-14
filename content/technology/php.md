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
# php

Php står för *PHP: Hypertext Preprocessor* och har som huvudsakliga uppgift att utföra förarbete på HTML-sidor, det är det namnet avser. HTML-kod i sig är statisk i den meningen att det som står i koden är det som användaren ser och för att användaren ska se något annat så måste HTML-koden ändras.

Ett kodstycke som säger:

    <p>Dagens datum är 2022-11-14</p>

kommer ju bara vara sant en dag om året. Men med php-kod kan vi skriva så här istället:

    echo '<p>Dagens datum är ' . date('o-m-d') . '</p>';

och då skrivs dagens datum ut vid den punkt som sidan öppnas. Om det sen går över midnatt så ändras inte datumet av sig självt utan användaren behöver ladda om sidan för att se det datumet.

Vad som menas med att det är en preprocessor är webbservern kör php-koden innan den hämtas av användarens dator och det som hämtas är enbart HTML-kod, alltså ser det alltid ut som det första kodexemplet. Användarens dator kan inte se php-koden.
</div>