(() => {
  const ledgerGrid = document.querySelector('#ledger .case-grid');
  if (ledgerGrid && !Array.from(ledgerGrid.querySelectorAll('h3')).some((heading) => heading.textContent.trim() === 'Arcadia John Doe')) {
    ledgerGrid.insertAdjacentHTML('afterbegin', '<article class="case-card"><div class="case-topline"><span>00</span><span class="status waiting">DCSO request acknowledged · identification research active</span></div><p class="case-place">Arcadia, Florida · Found 2013</p><h3>Arcadia John Doe</h3><p class="case-focus">DeSoto County Sheriff’s Office says this unidentified homicide victim was found June 14, 2013 along State Road 70 east of Turkey Hammock. Investigators believe he was transported there after death and may have been at the location for about two months. The sheriff describes him as a Hispanic male approximately 25–50 years old, about 5 feet tall and 140 pounds, with Klippel-Feil syndrome. A 2015 LSU forensic facial reconstruction is published on the sheriff’s cold-case page. The FBI’s ViCAP listing adds a blue-and-white work shirt marked “Gary” and “Shore Mechanical Corp.” Open Case Ledger request PRR-2026-1864 is pending for releasable records showing the outcome of that shirt-provenance lead and the current DNA / forensic genetic genealogy status.</p><a href="https://www.desotosheriff.com/community/cold_cases.php" target="_blank" rel="noreferrer">DeSoto County Sheriff cold-case page ↗</a><br><a href="https://www.fbi.gov/wanted/vicap/unidentified-persons/john-doe-fl" target="_blank" rel="noreferrer">FBI ViCAP case page ↗</a></article>');
  }

  if (ledgerGrid && !Array.from(ledgerGrid.querySelectorAll('h3')).some((heading) => heading.textContent.trim() === 'Houston Jane Doe')) {
    const houstonCard = '<article class="case-card"><div class="case-topline"><span>00</span><span class="status waiting">IFS records processing · shirt provenance research</span></div><p class="case-place">Houston, Texas · Found 1987</p><h3>Houston Jane Doe</h3><p class="case-focus">Texas DPS still lists this unidentified young woman, found September 27, 1987 in a vacant field at 8100 Leghorn in Houston. DPS documents a tan shirt marked “Sam’s Place 97 Rock Houston Gamblers,” along with a red strapless bra and white leather shoes, and lists multiple stab wounds as the cause of death. Harris County Institute of Forensic Sciences has forwarded Open Case Ledger’s request for releasable case records for processing; staff said the older records are off-site. A parallel research lane is tracing when and how the unusual promotional shirt was distributed.</p><a href="https://www.dps.texas.gov/apps/mpch/Unidentified/unPoster/U8710006" target="_blank" rel="noreferrer">Texas DPS unidentified-person bulletin ↗</a></article>';
    const arcadiaCard = Array.from(ledgerGrid.querySelectorAll('.case-card')).find((card) => card.querySelector('h3')?.textContent.trim() === 'Arcadia John Doe');
    if (arcadiaCard) arcadiaCard.insertAdjacentHTML('afterend', houstonCard);
    else ledgerGrid.insertAdjacentHTML('afterbegin', houstonCard);
  }

  if (ledgerGrid && !Array.from(ledgerGrid.querySelectorAll('h3')).some((heading) => heading.textContent.trim() === 'Dorchester Jane Doe')) {
    const dorchesterCard = '<article class="case-card"><div class="case-topline"><span>00</span><span class="status waiting">Boston Police request active · identification research active</span></div><p class="case-place">Dorchester, Massachusetts · Found 2005</p><h3>Dorchester Jane Doe</h3><p class="case-focus">The FBI says skeletal remains of an unidentified woman were discovered on October 14, 2005 inside a chimney at a Dorchester apartment complex. She was estimated to be 25–40 years old and about 5 feet 2 inches tall. Investigators documented significant dental work, including a distinctive partial dental plate and reconstructed porcelain teeth, and the FBI’s current ViCAP page says forensic genealogy resolves her ancestry back to Brazil as a place of origin. Boston City Records acknowledged Open Case Ledger’s request on August 10, 2026 as R-2026-906 and transferred it the same day to Boston Police Department as active request B-2026-1026. The request seeks the recovery report and releasable identification-related material concerning dental work, DNA testing, forensic genetic genealogy, current status, and updated public identification materials.</p><a href="https://www.fbi.gov/wanted/vicap/unidentified-persons/jane-doe---dorchester-massachusetts" target="_blank" rel="noreferrer">FBI ViCAP official case page ↗</a><br><a href="https://www.boston.gov/departments/public-records" target="_blank" rel="noreferrer">City of Boston public-records page ↗</a></article>';
    const houstonCard = Array.from(ledgerGrid.querySelectorAll('.case-card')).find((card) => card.querySelector('h3')?.textContent.trim() === 'Houston Jane Doe');
    if (houstonCard) houstonCard.insertAdjacentHTML('afterend', dorchesterCard);
    else ledgerGrid.insertAdjacentHTML('afterbegin', dorchesterCard);
  }

  if (ledgerGrid && !Array.from(ledgerGrid.querySelectorAll('h3')).some((heading) => heading.textContent.trim() === 'North Port John Doe')) {
    const northPortCard = '<article class="case-card"><div class="case-topline"><span>00</span><span class="status waiting">NPPD request acknowledged · cost estimate pending</span></div><p class="case-place">North Port, Florida · Unidentified 1996</p><h3>North Port John Doe</h3><p class="case-focus">The FBI’s current ViCAP notice says this unidentified man was recovered in North Port on January 1, 1996 after a resident reported that his dog had brought home human remains. Investigators recovered most of the remains. The FBI describes him as approximately 35–45 years old, about 6\'2", brown-haired, Native American, with a large or muscular build and a previously broken nose. No clothing or personal belongings were recovered. ViCAP further states that DNA testing suggests descent connected to the Mattaponi Indian Tribe of Virginia. North Port Police Records Manager Linda M. Yates acknowledged Open Case Ledger’s request on August 10, 2026. Records staff are identifying and quantifying responsive records and will provide an applicable cost estimate. No fee has been approved and no records have been released yet.</p><a href="https://www.fbi.gov/wanted/vicap/unidentified-persons/john-doe---north-port-florida" target="_blank" rel="noreferrer">FBI ViCAP official case page ↗</a><br><a href="https://www.northportfl.gov/City-Services-and-Safety/Emergency-Services/Police/Records" target="_blank" rel="noreferrer">North Port Police records page ↗</a></article>';
    const dorchesterCard = Array.from(ledgerGrid.querySelectorAll('.case-card')).find((card) => card.querySelector('h3')?.textContent.trim() === 'Dorchester Jane Doe');
    if (dorchesterCard) dorchesterCard.insertAdjacentHTML('afterend', northPortCard);
    else ledgerGrid.insertAdjacentHTML('afterbegin', northPortCard);
  }

  if (ledgerGrid) {
    const northPortCard = Array.from(ledgerGrid.querySelectorAll('.case-card')).find((card) => card.querySelector('h3')?.textContent.trim() === 'North Port John Doe');
    if (northPortCard) {
      const status = northPortCard.querySelector('.status');
      const focus = northPortCard.querySelector('.case-focus');
      if (status) status.textContent = 'NPPD request acknowledged · cost estimate pending';
      if (focus) focus.textContent = 'The FBI’s current ViCAP notice says this unidentified man was recovered in North Port on January 1, 1996 after a resident reported that his dog had brought home human remains. Investigators recovered most of the remains. The FBI describes him as approximately 35–45 years old, about 6\'2", brown-haired, Native American, with a large or muscular build and a previously broken nose. No clothing or personal belongings were recovered. ViCAP further states that DNA testing suggests descent connected to the Mattaponi Indian Tribe of Virginia. North Port Police Records Manager Linda M. Yates acknowledged Open Case Ledger’s request on August 10, 2026. Records staff are identifying and quantifying responsive records and will provide an applicable cost estimate. No fee has been approved and no records have been released yet.';
    }

    const doswellCard = Array.from(ledgerGrid.querySelectorAll('.case-card')).find((card) => card.querySelector('h3')?.textContent.trim() === 'Doswell John Doe');
    if (doswellCard) {
      const status = doswellCard.querySelector('.status');
      const focus = doswellCard.querySelector('.case-focus');
      if (status) {
        status.textContent = 'VSP records request closed · nonresident denial';
        status.classList.remove('waiting');
        status.classList.add('closed');
      }
      if (focus) focus.textContent = 'Virginia State Police closed Open Case Ledger request 26-7697 on August 10, 2026 without releasing records. The closure cites Virginia Code § 2.2-3704(A), which limits mandatory Virginia FOIA access to Virginia citizens and qualifying Virginia media representatives. This records route is closed; the underlying identification research continues through public sources.';
      if (!Array.from(doswellCard.querySelectorAll('a')).some((link) => link.href.includes('coldcase.vsp.virginia.gov'))) {
        doswellCard.insertAdjacentHTML('beforeend', '<br><a href="https://coldcase.vsp.virginia.gov/virginia-state-police/case/virginia-state-police-case-90-18700/" target="_blank" rel="noreferrer">Virginia State Police official case page ↗</a>');
      }
    }

    const cards = Array.from(ledgerGrid.querySelectorAll('.case-card'));
    const currentDoswell = cards.find((card) => card.querySelector('h3')?.textContent.trim() === 'Doswell John Doe');
    const carolynCard = cards.find((card) => card.querySelector('h3')?.textContent.trim() === 'Carolyn J. Mills');
    const ruthCard = cards.find((card) => card.querySelector('h3')?.textContent.trim() === 'Ruth Elizabeth Brenneman');
    const arcadiaCard = cards.find((card) => card.querySelector('h3')?.textContent.trim() === 'Arcadia John Doe');
    const houstonCard = cards.find((card) => card.querySelector('h3')?.textContent.trim() === 'Houston Jane Doe');
    const dorchesterCard = cards.find((card) => card.querySelector('h3')?.textContent.trim() === 'Dorchester Jane Doe');
    const northPortPriorityCard = cards.find((card) => card.querySelector('h3')?.textContent.trim() === 'North Port John Doe');
    const priorityCards = [northPortPriorityCard, currentDoswell, carolynCard, ruthCard, arcadiaCard, houstonCard, dorchesterCard].filter(Boolean);
    const orderedCards = [...priorityCards, ...cards.filter((card) => !priorityCards.includes(card))];
    orderedCards.forEach((card, index) => {
      const number = card.querySelector('.case-topline span');
      if (number) number.textContent = String(orderedCards.length - index).padStart(2, '0');
      ledgerGrid.appendChild(card);
    });
  }

  const researchGrid = document.querySelector('#research-notes .principles');
  if (researchGrid && !Array.from(researchGrid.querySelectorAll('h3')).some((heading) => heading.textContent.trim() === 'Arcadia John Doe · shirt provenance and identification status')) {
    researchGrid.insertAdjacentHTML('afterbegin', '<article><span>00</span><h3>Arcadia John Doe · shirt provenance and identification status</h3><p>Official sources preserve two unusually specific identification leads. DeSoto County Sheriff’s Office documents the victim’s Klippel-Feil syndrome and displays the 2015 LSU facial reconstruction; FBI ViCAP documents the blue-and-white work shirt marked “Gary” and “Shore Mechanical Corp.” The public official record does not state what investigators ultimately established about that shirt’s provenance. Open Case Ledger therefore submitted a narrow records request asking for releasable material sufficient to show the outcome of the shirt lead and whether DNA suitable for modern forensic genetic genealogy exists or has been used. DeSoto County Sheriff acknowledged request PRR-2026-1864 on August 8, 2026.</p><a href="https://www.desotosheriff.com/community/cold_cases.php" target="_blank" rel="noreferrer">DeSoto County Sheriff official cold-case page ↗</a><br><a href="https://www.fbi.gov/wanted/vicap/unidentified-persons/john-doe-fl" target="_blank" rel="noreferrer">FBI ViCAP case page ↗</a></article>');
  }

  if (researchGrid && !Array.from(researchGrid.querySelectorAll('h3')).some((heading) => heading.textContent.trim() === 'Houston Jane Doe · promotional-shirt provenance')) {
    researchGrid.insertAdjacentHTML('afterbegin', '<article><span>00</span><h3>Houston Jane Doe · promotional-shirt provenance</h3><p>The tan Gulf Coast Sportswear shirt recovered with Houston Jane Doe carries three unusually specific references: “Sam’s Place,” “97 Rock,” and “Houston Gamblers.” Texas DPS preserves the shirt wording in its official unidentified-person bulletin. On August 8, 2026, Houston History Research Center reported that staff had run a preliminary Houston Chronicle Historical Archive search using “97 Rock” and “Gulf.” That search has not established a documented event or distribution channel for the shirt. A specialized Houston Gamblers historical archive also preserves extensive 1984–1985 team material and already features this Jane Doe; that material is being treated as a secondary historical lead unless matched to contemporaneous documentation.</p><a href="https://www.dps.texas.gov/apps/mpch/Unidentified/unPoster/U8710006" target="_blank" rel="noreferrer">Texas DPS unidentified-person bulletin ↗</a><br><a href="https://www.houston-gamblers.com/" target="_blank" rel="noreferrer">Houston Gamblers historical archive ↗</a></article>');
  }

  if (researchGrid && !Array.from(researchGrid.querySelectorAll('h3')).some((heading) => heading.textContent.trim() === 'Dorchester Jane Doe · dental and forensic identification status')) {
    researchGrid.insertAdjacentHTML('afterbegin', '<article><span>00</span><h3>Dorchester Jane Doe · dental and forensic identification status</h3><p>The FBI’s current ViCAP page provides a strong public identification baseline: the unidentified woman recovered from a Dorchester chimney in 2005 had distinctive restorative dental work, including a partial dental plate and reconstructed porcelain teeth, and forensic genealogy now points to Brazil as a place of ancestral origin. What remains publicly unclear is how that ancestry finding was developed, what current DNA or forensic-genetic-genealogy work is active, and whether Boston holds additional releasable recovery or identification material. City Records intake R-2026-906 was acknowledged on August 10, 2026 and transferred the same day to Boston Police Department as active request B-2026-1026; Open Case Ledger is waiting for the substantive police records response before drawing further conclusions.</p><a href="https://www.fbi.gov/wanted/vicap/unidentified-persons/jane-doe---dorchester-massachusetts" target="_blank" rel="noreferrer">FBI ViCAP official case page ↗</a><br><a href="https://www.boston.gov/departments/public-records" target="_blank" rel="noreferrer">City of Boston public-records page ↗</a></article>');
  }

  if (researchGrid) {
    const articles = Array.from(researchGrid.children).filter((child) => child.matches('article'));
    articles.forEach((article, index) => {
      const number = article.querySelector('span');
      if (number) number.textContent = String(articles.length - index).padStart(2, '0');
      researchGrid.appendChild(article);
    });
  }

  if (ledgerGrid && !Array.from(ledgerGrid.querySelectorAll('h3')).some((heading) => heading.textContent.trim() === 'Sandra Burt Carrera')) {
    const sandraCard = '<article class="case-card"><div class="case-topline"><span>00</span><span class="status waiting">ACPD confirms ongoing homicide investigation</span></div><p class="case-place">Arlington, Virginia · 1991</p><h3>Sandra Burt Carrera</h3><p class="case-focus">The FBI says 41-year-old Sandra Burt Carrera was found deceased on January 15, 1991 at the bottom of the stairs in her Windgate neighborhood townhome in Arlington. Her cause of death was a gunshot wound and the case was ruled a homicide; the FBI says nothing in the home appeared disturbed and nothing was taken. On August 10, 2026, Arlington County Police Department directly confirmed to Open Case Ledger that the homicide remains an ongoing criminal investigation. No investigative records were released. Anyone with information should use the official FBI or Arlington County Police tip routes.</p><a href="https://www.fbi.gov/wanted/vicap/homicides-and-sexual-assaults/sandra-burt-carrera---arlington-virginia" target="_blank" rel="noreferrer">FBI ViCAP official case page ↗</a><br><a href="https://www.arlingtonva.us/Government/Departments/Police-Department" target="_blank" rel="noreferrer">Arlington County Police Department ↗</a></article>';
    ledgerGrid.insertAdjacentHTML('afterbegin', sandraCard);
    const cards = Array.from(ledgerGrid.querySelectorAll('.case-card'));
    cards.forEach((card, index) => {
      const number = card.querySelector('.case-topline span');
      if (number) number.textContent = String(cards.length - index).padStart(2, '0');
    });
  }
})();