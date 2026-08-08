(() => {
  const ledgerGrid = document.querySelector('#ledger .case-grid');
  if (ledgerGrid && !Array.from(ledgerGrid.querySelectorAll('h3')).some((heading) => heading.textContent.trim() === 'Arcadia John Doe')) {
    ledgerGrid.insertAdjacentHTML('afterbegin', '<article class="case-card"><div class="case-topline"><span>00</span><span class="status waiting">DCSO request acknowledged · identification research active</span></div><p class="case-place">Arcadia, Florida · Found 2013</p><h3>Arcadia John Doe</h3><p class="case-focus">DeSoto County Sheriff’s Office says this unidentified homicide victim was found June 14, 2013 along State Road 70 east of Turkey Hammock. Investigators believe he was transported there after death and may have been at the location for about two months. The sheriff describes him as a Hispanic male approximately 25–50 years old, about 5 feet tall and 140 pounds, with Klippel-Feil syndrome. A 2015 LSU forensic facial reconstruction is published on the sheriff’s cold-case page. The FBI’s ViCAP listing adds a blue-and-white work shirt marked “Gary” and “Shore Mechanical Corp.” Open Case Ledger request PRR-2026-1864 is pending for releasable records showing the outcome of that shirt-provenance lead and the current DNA / forensic genetic genealogy status.</p><a href="https://www.desotosheriff.com/community/cold_cases.php" target="_blank" rel="noreferrer">DeSoto County Sheriff cold-case page ↗</a><br><a href="https://www.fbi.gov/wanted/vicap/unidentified-persons/john-doe-fl" target="_blank" rel="noreferrer">FBI ViCAP case page ↗</a></article>');

    const cards = Array.from(ledgerGrid.querySelectorAll('.case-card'));
    const arcadiaCard = cards.find((card) => card.querySelector('h3')?.textContent.trim() === 'Arcadia John Doe');
    const orderedCards = arcadiaCard ? [arcadiaCard, ...cards.filter((card) => card !== arcadiaCard)] : cards;
    orderedCards.forEach((card, index) => {
      const number = card.querySelector('.case-topline span');
      if (number) number.textContent = String(orderedCards.length - index).padStart(2, '0');
      ledgerGrid.appendChild(card);
    });
  }

  const researchGrid = document.querySelector('#research-notes .principles');
  if (researchGrid && !Array.from(researchGrid.querySelectorAll('h3')).some((heading) => heading.textContent.trim() === 'Arcadia John Doe · shirt provenance and identification status')) {
    researchGrid.insertAdjacentHTML('afterbegin', '<article><span>00</span><h3>Arcadia John Doe · shirt provenance and identification status</h3><p>Official sources preserve two unusually specific identification leads. DeSoto County Sheriff’s Office documents the victim’s Klippel-Feil syndrome and displays the 2015 LSU facial reconstruction; FBI ViCAP documents the blue-and-white work shirt marked “Gary” and “Shore Mechanical Corp.” The public official record does not state what investigators ultimately established about that shirt’s provenance. Open Case Ledger therefore submitted a narrow records request asking for releasable material sufficient to show the outcome of the shirt lead and whether DNA suitable for modern forensic genetic genealogy exists or has been used. DeSoto County Sheriff acknowledged request PRR-2026-1864 on August 8, 2026.</p><a href="https://www.desotosheriff.com/community/cold_cases.php" target="_blank" rel="noreferrer">DeSoto County Sheriff official cold-case page ↗</a><br><a href="https://www.fbi.gov/wanted/vicap/unidentified-persons/john-doe-fl" target="_blank" rel="noreferrer">FBI ViCAP official case page ↗</a></article>');
  }

  if (researchGrid) {
    const articles = Array.from(researchGrid.children).filter((child) => child.matches('article'));
    articles.forEach((article, index) => {
      const number = article.querySelector('span');
      if (number) number.textContent = String(articles.length - index).padStart(2, '0');
      researchGrid.appendChild(article);
    });
  }
})();
