(() => {
  const ledgerGrid = document.querySelector('#ledger .case-grid');
  const hasCase = (name) => ledgerGrid && Array.from(ledgerGrid.querySelectorAll('h3')).some((heading) => heading.textContent.trim() === name);
  const findCase = (name) => ledgerGrid ? Array.from(ledgerGrid.querySelectorAll('.case-card')).find((card) => card.querySelector('h3')?.textContent.trim() === name) : null;

  if (ledgerGrid && !hasCase('Arcadia John Doe')) {
    ledgerGrid.insertAdjacentHTML('afterbegin', '<article class="case-card"><div class="case-topline"><span>00</span><span class="status waiting">DCSO request acknowledged · identification research active</span></div><p class="case-place">Arcadia, Florida · Found 2013</p><h3>Arcadia John Doe</h3><p class="case-focus">DeSoto County Sheriff’s Office says this unidentified homicide victim was found June 14, 2013 along State Road 70 east of Turkey Hammock. Investigators believe he was transported there after death and may have been at the location for about two months. The sheriff describes him as a Hispanic male approximately 25–50 years old, about 5 feet tall and 140 pounds, with Klippel-Feil syndrome. A 2015 LSU forensic facial reconstruction is published on the sheriff’s cold-case page. The FBI’s ViCAP listing adds a blue-and-white work shirt marked “Gary” and “Shore Mechanical Corp.” Open Case Ledger request PRR-2026-1864 is pending for releasable records showing the outcome of that shirt-provenance lead and the current DNA / forensic genetic genealogy status.</p><a href="https://www.desotosheriff.com/community/cold_cases.php" target="_blank" rel="noreferrer">DeSoto County Sheriff cold-case page ↗</a><br><a href="https://www.fbi.gov/wanted/vicap/unidentified-persons/john-doe-fl" target="_blank" rel="noreferrer">FBI ViCAP case page ↗</a></article>');
  }

  if (ledgerGrid && !hasCase('Houston Jane Doe')) {
    ledgerGrid.insertAdjacentHTML('afterbegin', '<article class="case-card"><div class="case-topline"><span>00</span><span class="status waiting">IFS archive records retrieved · release review pending</span></div><p class="case-place">Houston, Texas · Found 1987</p><h3>Houston Jane Doe</h3><p class="case-focus">Texas DPS still lists this unidentified young woman, found September 27, 1987 in a vacant field at 8100 Leghorn in Houston. DPS documents a tan shirt marked “Sam’s Place 97 Rock Houston Gamblers,” along with a red strapless bra and white leather shoes, and lists multiple stab wounds as the cause of death. Harris County Institute of Forensic Sciences retrieved the older case records from archives in August 2026. IFS requested an updated same-thread request before seeking permission to release the report; Open Case Ledger supplied that update on August 20. A parallel archival lane continues to trace the unusual promotional shirt.</p><a href="https://www.dps.texas.gov/apps/mpch/Unidentified/unPoster/U8710006" target="_blank" rel="noreferrer">Texas DPS unidentified-person bulletin ↗</a></article>');
  }

  if (ledgerGrid && !hasCase('Dorchester Jane Doe')) {
    ledgerGrid.insertAdjacentHTML('afterbegin', '<article class="case-card"><div class="case-topline"><span>00</span><span class="status waiting">Boston Police request active · identification research active</span></div><p class="case-place">Dorchester, Massachusetts · Found 2005</p><h3>Dorchester Jane Doe</h3><p class="case-focus">The FBI says skeletal remains of an unidentified woman were discovered on October 14, 2005 inside a chimney at a Dorchester apartment complex. She was estimated to be 25–40 years old and about 5 feet 2 inches tall. Investigators documented significant dental work, including a distinctive partial dental plate and reconstructed porcelain teeth, and the FBI’s current ViCAP page says forensic genealogy resolves her ancestry back to Brazil as a place of origin. Boston City Records acknowledged Open Case Ledger’s request on August 10, 2026 as R-2026-906 and transferred it the same day to Boston Police Department as active request B-2026-1026.</p><a href="https://www.fbi.gov/wanted/vicap/unidentified-persons/jane-doe---dorchester-massachusetts" target="_blank" rel="noreferrer">FBI ViCAP official case page ↗</a><br><a href="https://www.boston.gov/departments/public-records" target="_blank" rel="noreferrer">City of Boston public-records page ↗</a></article>');
  }

  if (ledgerGrid && !hasCase('North Port John Doe')) {
    ledgerGrid.insertAdjacentHTML('afterbegin', '<article class="case-card"><div class="case-topline"><span>00</span><span class="status waiting">NPPD request acknowledged · cost estimate pending</span></div><p class="case-place">North Port, Florida · Unidentified 1996</p><h3>North Port John Doe</h3><p class="case-focus">The FBI’s current ViCAP notice says this unidentified man was recovered in North Port on January 1, 1996 after a resident reported that his dog had brought home human remains. Investigators recovered most of the remains. The FBI describes him as approximately 35–45 years old, about 6\'2", brown-haired, Native American, with a large or muscular build and a previously broken nose. No clothing or personal belongings were recovered. ViCAP further states that DNA testing suggests descent connected to the Mattaponi Indian Tribe of Virginia. North Port Police Records Manager Linda M. Yates acknowledged Open Case Ledger’s request on August 10, 2026. Records staff are identifying and quantifying responsive records before providing any applicable cost estimate.</p><a href="https://www.fbi.gov/wanted/vicap/unidentified-persons/john-doe---north-port-florida" target="_blank" rel="noreferrer">FBI ViCAP official case page ↗</a><br><a href="https://www.northportfl.gov/City-Services-and-Safety/Emergency-Services/Police/Records" target="_blank" rel="noreferrer">North Port Police records page ↗</a></article>');
  }

  if (ledgerGrid && !hasCase('Sandra Burt Carrera')) {
    ledgerGrid.insertAdjacentHTML('afterbegin', '<article class="case-card"><div class="case-topline"><span>00</span><span class="status waiting">ACPD confirms ongoing homicide investigation</span></div><p class="case-place">Arlington, Virginia · 1991</p><h3>Sandra Burt Carrera</h3><p class="case-focus">The FBI says 41-year-old Sandra Burt Carrera was found deceased on January 15, 1991 at the bottom of the stairs in her Windgate neighborhood townhome in Arlington. Her cause of death was a gunshot wound and the case was ruled a homicide; the FBI says nothing in the home appeared disturbed and nothing was taken. On August 10, 2026, Arlington County Police Department directly confirmed to Open Case Ledger that the homicide remains an ongoing criminal investigation. No investigative records were released.</p><a href="https://www.fbi.gov/wanted/vicap/homicides-and-sexual-assaults/sandra-burt-carrera---arlington-virginia" target="_blank" rel="noreferrer">FBI ViCAP official case page ↗</a><br><a href="https://www.arlingtonva.us/Government/Departments/Police-Department" target="_blank" rel="noreferrer">Arlington County Police Department ↗</a></article>');
  }

  if (ledgerGrid && !hasCase('Anthony Reed')) {
    ledgerGrid.insertAdjacentHTML('afterbegin', '<article class="case-card"><div class="case-topline"><span>00</span><span class="status waiting">TPD confirms open homicide · records withheld</span></div><p class="case-place">Tampa, Florida · 1995</p><h3>Anthony Reed</h3><p class="case-focus">The City of Tampa says Anthony Reed was traveling eastbound near the 1400 block of East Hillsborough Avenue on June 24, 1995 when he was wounded and later died at St. Joseph\'s Hospital. On August 11, 2026, Tampa Police Records directly confirmed that case 1995-43243 is still open and withheld the investigative record under Florida\'s active criminal intelligence and investigative information exemption. Public-source research now focuses on timing, movement or vehicle details, witnesses, and other recognition cues.</p><a href="cases/anthony-reed.html">Open the Anthony Reed case page ↗</a><br><a href="https://www.tampa.gov/unsolved/anthony-reed-1995-43243" target="_blank" rel="noreferrer">City of Tampa official case page ↗</a></article>');
  }

  if (ledgerGrid && !hasCase('Refugio County Jane Doe')) {
    ledgerGrid.insertAdjacentHTML('afterbegin', '<article class="case-card"><div class="case-topline"><span>00</span><span class="status waiting">FGG completed · GEDmatch Pro eligible · search results not public</span></div><p class="case-place">Refugio County, Texas · Found 1992</p><h3>Refugio County Jane Doe</h3><p class="case-focus">Texas DPS released basic information showing that forensic genetic genealogy testing had already been conducted on this unidentified homicide victim by March 27, 2026. Texas Ranger Nathan Mutz received a University of North Texas Center for Human Identification FGG laboratory report, and the resulting genetic data was eligible for entry and searching in GEDmatch Pro. A subsequent report was expected to provide search results and further recommendations. DPS released the basic information at no cost but withheld the remaining investigative material under Texas Government Code § 552.108(a)(1).</p><a href="cases/refugio-county-jane-doe.html">Open the Refugio County Jane Doe case page ↗</a><br><a href="https://www.dps.texas.gov/news/investigators-seek-publics-help-identify-womans-remains-refugio-co-cold-case" target="_blank" rel="noreferrer">Texas DPS official case release ↗</a></article>');
  }

  if (ledgerGrid && !hasCase('Alachua County Baby Jane Doe')) {
    ledgerGrid.insertAdjacentHTML('afterbegin', '<article class="case-card"><div class="case-topline"><span>00</span><span class="status waiting">Recent investigative progress · details not public</span></div><p class="case-place">Alachua County, Florida · Found 2003</p><h3>Alachua County Baby Jane Doe</h3><p class="case-focus">The Alachua County Sheriff’s Office continues to list Baby Jane Doe, case 03-9523 / NamUs UP476, as unidentified. On August 18, 2026, Detective Sergeant Michael B. Cooper told Open Case Ledger that the investigation remains active and that “the path to the end has narrowed tremendously recently.” He did not identify the forensic, genealogical, or investigative development behind that progress, and the statement does not establish that identification is imminent.</p><a href="cases/alachua-county-baby-jane-doe.html">Open the Baby Jane Doe case page ↗</a><br><a href="https://acso.us/cold-cases/" target="_blank" rel="noreferrer">Alachua County Sheriff’s Office cold-case page ↗</a></article>');
  }

  if (ledgerGrid && !hasCase('Alfred Vernon Houle')) {
    ledgerGrid.insertAdjacentHTML('afterbegin', '<article class="case-card"><div class="case-topline"><span>00</span><span class="status waiting">OSP confirms active investigation · records withheld</span></div><p class="case-place">Clackamas County, Oregon · 1985</p><h3>Alfred Vernon Houle</h3><p class="case-focus">Oregon State Police says Alfred Vernon Houle was found stabbed to death at the Baldock rest area on Interstate 5 on September 7, 1985. His vehicle was not stolen, robbery did not appear to be the motive, and he had been traveling from Seattle to visit a friend in Oregon. OSP denied records request PR37790 because the homicide remains an active investigation and closed the request without releasing the investigative report.</p><a href="cases/alfred-vernon-houle.html">Open the Alfred Vernon Houle case page ↗</a><br><a href="https://www.oregon.gov/osp/pages/cold-case-unit.aspx" target="_blank" rel="noreferrer">Oregon State Police Cold Case Unit ↗</a></article>');
  }

  if (ledgerGrid && !hasCase('June Ward')) {
    ledgerGrid.insertAdjacentHTML('afterbegin', '<article class="case-card"><div class="case-topline"><span>00</span><span class="status waiting">Basic information released · remaining report withheld</span></div><p class="case-place">Fort Worth, Texas · 1977</p><h3>June Ward</h3><p class="case-focus">Fort Worth Police released basic information from report 77-A-14 showing a tighter early-morning chronology than the current cold-case synopsis. The first-response narrative records officers locating June Ward at approximately 3:04 a.m. beside the north curb of the 1000 block of West Fuller, while a vehicle supplement records her white 1973 Chevrolet two-door Laguna at approximately 2:55 a.m. Fort Worth withheld the remaining responsive report under Texas Government Code § 552.108(a)(1), relying on prior Attorney General ruling OR2025-010303, and closed request E006801-080626.</p><a href="cases/june-ward.html">Open the June Ward case page ↗</a><br><a href="https://police.fortworthtexas.gov/Crime-Public-Info/Cold-Cases-Landing/Cold-Cases" target="_blank" rel="noreferrer">Fort Worth Police official cold-case page ↗</a></article>');
  }

  const doswellCard = findCase('Doswell John Doe');
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

  const houstonCard = findCase('Houston Jane Doe');
  if (houstonCard) {
    const status = houstonCard.querySelector('.status');
    const focus = houstonCard.querySelector('.case-focus');
    if (status) status.textContent = 'IFS archive records retrieved · release review pending';
    if (focus) focus.textContent = 'Texas DPS still lists this unidentified young woman, found September 27, 1987 in a vacant field at 8100 Leghorn in Houston. DPS documents a tan shirt marked “Sam’s Place 97 Rock Houston Gamblers,” along with a red strapless bra and white leather shoes, and lists multiple stab wounds as the cause of death. Harris County Institute of Forensic Sciences retrieved the older case records from archives in August 2026. IFS requested an updated same-thread request before seeking permission to release the report; Open Case Ledger supplied that update on August 20. A parallel archival lane continues to trace the unusual promotional shirt.';
  }

  const researchGrid = document.querySelector('#research-notes .principles');
  if (researchGrid && !Array.from(researchGrid.querySelectorAll('h3')).some((heading) => heading.textContent.trim() === 'Arcadia John Doe · shirt provenance and identification status')) {
    researchGrid.insertAdjacentHTML('afterbegin', '<article><span>00</span><h3>Arcadia John Doe · shirt provenance and identification status</h3><p>Official sources preserve two unusually specific identification leads. DeSoto County Sheriff’s Office documents the victim’s Klippel-Feil syndrome and displays the 2015 LSU facial reconstruction; FBI ViCAP documents the blue-and-white work shirt marked “Gary” and “Shore Mechanical Corp.” The public official record does not state what investigators ultimately established about that shirt’s provenance. Open Case Ledger therefore submitted a narrow records request asking for releasable material sufficient to show the outcome of the shirt lead and whether DNA suitable for modern forensic genetic genealogy exists or has been used. DeSoto County Sheriff acknowledged request PRR-2026-1864 on August 8, 2026.</p><a href="https://www.desotosheriff.com/community/cold_cases.php" target="_blank" rel="noreferrer">DeSoto County Sheriff official cold-case page ↗</a><br><a href="https://www.fbi.gov/wanted/vicap/unidentified-persons/john-doe-fl" target="_blank" rel="noreferrer">FBI ViCAP case page ↗</a></article>');
  }

  if (researchGrid && !Array.from(researchGrid.querySelectorAll('h3')).some((heading) => heading.textContent.trim() === 'Houston Jane Doe · promotional-shirt provenance')) {
    researchGrid.insertAdjacentHTML('afterbegin', '<article><span>00</span><h3>Houston Jane Doe · promotional-shirt provenance</h3><p>The tan Gulf Coast Sportswear shirt recovered with Houston Jane Doe carries three unusually specific references: “Sam’s Place,” “97 Rock,” and “Houston Gamblers.” Texas DPS preserves the shirt wording in its official unidentified-person bulletin. Houston History Research Center ran a preliminary Houston Chronicle Historical Archive search in August 2026, but the exact promotion or distribution channel has not been established from contemporaneous material. Secondary Houston Gamblers history sources remain leads rather than proof of provenance.</p><a href="https://www.dps.texas.gov/apps/mpch/Unidentified/unPoster/U8710006" target="_blank" rel="noreferrer">Texas DPS unidentified-person bulletin ↗</a><br><a href="https://www.houston-gamblers.com/" target="_blank" rel="noreferrer">Houston Gamblers historical archive ↗</a></article>');
  }

  if (researchGrid && !Array.from(researchGrid.querySelectorAll('h3')).some((heading) => heading.textContent.trim() === 'Dorchester Jane Doe · dental and forensic identification status')) {
    researchGrid.insertAdjacentHTML('afterbegin', '<article><span>00</span><h3>Dorchester Jane Doe · dental and forensic identification status</h3><p>The FBI’s current ViCAP page provides a strong public identification baseline: the unidentified woman recovered from a Dorchester chimney in 2005 had distinctive restorative dental work, including a partial dental plate and reconstructed porcelain teeth, and forensic genealogy now points to Brazil as a place of origin. What remains publicly unclear is how that ancestry finding was developed, what current DNA or forensic-genetic-genealogy work is active, and whether Boston holds additional releasable recovery or identification material. City Records intake R-2026-906 was acknowledged on August 10, 2026 and transferred the same day to Boston Police Department as active request B-2026-1026.</p><a href="https://www.fbi.gov/wanted/vicap/unidentified-persons/jane-doe---dorchester-massachusetts" target="_blank" rel="noreferrer">FBI ViCAP official case page ↗</a><br><a href="https://www.boston.gov/departments/public-records" target="_blank" rel="noreferrer">City of Boston public-records page ↗</a></article>');
  }

  if (researchGrid) {
    const articles = Array.from(researchGrid.children).filter((child) => child.matches('article'));
    articles.forEach((article, index) => {
      const number = article.querySelector('span');
      if (number) number.textContent = String(articles.length - index).padStart(2, '0');
    });
  }

  if (ledgerGrid) {
    const recentOrder = ['June Ward', 'Alfred Vernon Houle', 'Alachua County Baby Jane Doe', 'Refugio County Jane Doe', 'Walter A. Mosier'];
    const currentCards = Array.from(ledgerGrid.querySelectorAll('.case-card'));
    const preferred = recentOrder.map(findCase).filter(Boolean);
    const remaining = currentCards.filter((card) => !preferred.includes(card));
    const ordered = [...preferred, ...remaining];
    ordered.forEach((card) => ledgerGrid.appendChild(card));

    if (ledgerGrid.id !== 'all-case-grid') {
      Array.from(ledgerGrid.querySelectorAll('.case-card')).slice(20).forEach((card) => card.remove());
    }

    const visibleCards = Array.from(ledgerGrid.querySelectorAll('.case-card'));
    visibleCards.forEach((card, index) => {
      const number = card.querySelector('.case-topline span');
      if (number) number.textContent = String(visibleCards.length - index).padStart(2, '0');
    });
  }
})();