---
Title: Laddningstider
Description: Analysuppgift om laddningstider
Template: technologies
icon: fa fa-microscope
---

<div class="content-full" markdown="1">

Laddningstider
=======================

I denna rapport kommer jag undersöka tre onlinematvarubutikers hemsidors laddningstider.

Urval
-----------------------

Jag har valt att begränsa analysen på följande vis: endast online-handel av matvaror och endast tre sidor. För ringa in online-handel av matvaror så gick jag in till `willys.se`[^1] och läste den sidans fönstertitel, *handla billig mat online*. Därefter sökte jag på den frasen på `google.com` (besökt 20/11 2022) med ordet *billig* borttaget, så endast *handla mat online*. Därefter valde jag de två första sidorna som inte var sponsrade sökträffar eller som var metasidor; `mathem.se`[^2] och `handla.ica.se`[^3].

Metod
-----------------------

För att samla in data om sidorna använder jag två verktyg. Det första Google PageSpeed Insights[^4] som är en tjänst som erbjuder automatiska tester inom flertalet områden. Dessutom använder jag webbläsaren Operas utvecklingsverktyg (eng. *dev tools*) för att mäta genomsnittlig laddningstid över tre laddningar samt att räkna hur många olika ytterligare resurser som laddas in till varje sida i urvalet.

Resultat
-----------------------

<div class="embed-container" style="padding-bottom: 398px;">
<iframe style="max-width: 575px; opacity: 0.85;" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTDUbvq_PNQBrsWb6YArNCbaXDN7pufb9lTNEYtLOmZpDHyiVhR-eUZPXLfawU7LIMLwofJlfYqSv2a/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false&amp;range=A1:G13"></iframe>
</div>

Ovan sammanfattas de samlade resultaten. Då denna rapport handlar om laddningstider är det *performance*, *laddningstid*, *antal laddade resurser* samt PageSpeed Insights mer detaljerade analys av sidorna som jag kommer fokusera på.

### Willys

![Skärmdump från Willys förstasida](../image/willys.png?w=960)

Willys har sämst genomsnittlig laddningstid och låga poäng både för dator- och mobiltester. Förutom att det är den sidan med flest laddade resurser så får den backning av PageInsight framförallt gällande stora och många bilder, mycket blockerande JavaScript och stort DOM-träd.

### Mathem

![Skärmdump från Mathems förstasida](../image/mathem.png?w=960)

Mathem får gula poäng på testerna för dator men låga poäng för mobiltester. Gemensamt för båda är att de har mycket JavaScript som tar lång tid att läsa, stort DOM-träd samt att de har många resurser som inte cachas. Det som drar ner testet på mobilenheter är framför allt tredjepartskod och lång tid till *First Contentful Paint* på 3G-anslutning.

### Ica

![Skärmdump från Icas förstasida](../image/ica.png?w=960)

Ica är med råge den snabbare sidan i urvalet. Den har kortast genomsnittlig laddningstid och färst laddade resurser. Detta märks i PageSpeeds tester också. Ica får backning på mobiltesterna, huvudsakligen gällande mycket samt blockerande JavaScript och  *First Contentful Paint* på 3G-anslutning.

Analys
-----------------------

Alla tre sidorna har väldigt skilda resultat i laddningstider men de har gemensamt att de är alla har markant sämre resultat på mobilenheter i PageSpeed Insights tester. Alla sidorna kan förbättras genom optimering av JavaScript, både mängd, komplexitet och hur de laddas. Det var också vanligt att ha många resurser att ladda in något som kan avhjälpas med hjälp av lazy loading, framförallt på Willys och Mathems sidor som laddar mycket *below the fold*.

Sammantaget är Ica den snabbaste sidan och Willys den långsamast i urvalet. I min mening går gränsen för en *långsam* sida runt en sekund. Med denna måttstocken så lever enbart Ica upp till kravet, men Mathem börjar visa sin innehåll lite innan det är helt klart så det upplevs som snabb nog.

Övrigt
-----------------------

Författare: Adam Esbjörnsson

[^1]: https://www.willys.se/ Besökt 2022-11-25
[^2]: https://www.mathem.se/ Besökt 2022-11-25
[^3]: https://handla.ica.se/ Besökt 2022-11-25
[^4]: https://pagespeed.web.dev/ Besökt 2022-11-25

</div>