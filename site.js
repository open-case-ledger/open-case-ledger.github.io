(() => {
  const analyticsScript = document.createElement('script');
  analyticsScript.async = true;
  analyticsScript.src = 'https://scripts.simpleanalyticscdn.com/latest.js';
  document.head.appendChild(analyticsScript);

  const unpublishedUntilAcknowledged = new Set([
    'Rockledge Jane Doe',
    'Newark Jane Doe',
    'North Port John Doe',
    'Richmond John Doe',
    'Sandra Burt Carrera',
    'Dorchester Jane Doe'
  ]);

  const caseUpdates = [
    {
      title: 'Jane Los Angeles Doe',
      status: 'ID Unit response · official-image audit complete · clarification pending',
      focus: 'Los Angeles County Medical Examiner’s Identification Unit says older unidentified cases are routinely reviewed for new law-enforcement leads, technological advances, and public information. NCMEC’s current public case page confirms case 89-05285 / LAPD 89-0226962 / NamUs UP3979 and preserves a richer identification package: the bright blue “Somebody in California Loves Me” shirt, multiple rings and bracelets, necklace and earrings, and the patterned right-thigh tattoo with partially legible lettering, along with several case images and a printable poster. The Medical Examiner also confirmed that the purchasable archived report excludes copies of fingerprints, DNA reports, dental X-rays, and names of excluded individuals. Open Case Ledger has a clarification pending on current identifier/sample status and forensic genetic genealogy review.'
    },
    {
      title: 'Bellport Jane Doe',
      status: '2026 official composite · historical inquiry sent',
      focus: 'Suffolk County says Bellport Jane Doe was known as Marie or Maria and rented a room from Arthur Kinlaw at a Michigan Avenue residence in Bellport. Her remains were recovered in November 1999 from beneath a concrete patio at that residence after information from Kinlaw’s wife. Investigators describe her as a heavyset Black or Hispanic woman, approximately 300 pounds, who used a walker and had previously shattered her femur. A rosary and homemade blue jersey dress were recovered with her remains, and investigators believe she may have been a sex worker from New York City. Suffolk County released an updated composite sketch in February 2026. Open Case Ledger has a historical-society inquiry pending for period directories, address files, tax maps, photographs, and clipping files concerning the Michigan Avenue residence.'
    },
    {
      title: 'Pamela Leigh Walton',
      status: '319 Walnut · PVA research pending',
      focus: 'A June 27, 1988 Fayette County court entry lists Pamela Walton, age 25, at 319 Walnut in Carlisle. An official National Park Service Carlisle Historic District inventory independently documents 319 Walnut as a circa-1900 residential house. Jackie M. Earlywine at Nicholas County PVA accepted Open Case Ledger’s historical ownership request on August 6 and said she will review the handwritten 1988 property cards after returning August 10.'
    },
    {
      title: 'Medford Jane Doe',
      status: '2026 FBI flyer · court-file research pending',
      focus: 'Suffolk County District Attorney’s Office says Medford Jane Doe remains unidentified and under active investigation. She was recovered on December 7, 1994 inside a blue Rubbermaid garbage can along Long Island Avenue in Medford and had a red heart tattoo on the upper left shoulder containing the name ADRIAN. Suffolk County’s February 2026 update says genetic genealogy indicates Western European ancestry, at least 75% attributable to England, Scotland, and Wales. An FBI ViCAP alert released April 23, 2026 adds a scar in the center of the right calf, a black J.J. Cochran-label halter top, a Hilton Hotel bathmat, and confirms dental records are available. The FBI flyer also preserves the facial reconstructions and tattoo depiction in one official downloadable source. A Suffolk County Clerk inquiry is seeking public portions of the Robert Yale Shulman court file for possible victim-identification leads.'
    },
    {
      title: 'Theresa Corley',
      status: 'MSP request processing · 2026 active DNA work',
      focus: 'Bellingham Police publicly confirmed in a February 2026 records response that Theresa Corley’s homicide remains an active and ongoing investigation. The department said that since the current chief assumed command in 2023, investigators have collected DNA from persons of interest or people potentially connected to them, followed up on telephone and in-person tips, prepared investigative summaries, and interviewed potential witnesses. Open Case Ledger’s Massachusetts State Police request P008678-080726 is processing.'
    },
    {
      title: 'Wanda Line',
      status: '1984 newspaper report · blunt-force account located',
      focus: 'A January 5, 1984 Columbus Dispatch article supplied by Columbus Metropolitan Library reports that detectives described Wanda Line as having suffered a severe skull fracture that could have been caused by a blunt instrument such as a hammer. That contemporaneous account is consistent with the Ohio Attorney General’s later description of Wanda as having been beaten to death and indicates that the Franklin County Sheriff’s initial scene notation of apparent gunshot wounds was preliminary. The article says detectives believed Wanda had used the alias “Brandy” and worked as a dancer at Looking Kool, 5960 W. Broad St.; the nightclub manager denied that Wanda had worked there. Deputies found Wanda at 100 Darien Ave., Apt. A after responding to loud music. The door was locked and chained, her boyfriend Thomas Wessels was reported to be in Florida, detectives said they had identified no motive, and Coroner William Adrion estimated she had been dead about 24 hours. A primary coroner or autopsy record would provide the strongest final medical wording.'
    },
    {
      title: 'Rosebud John Doe',
      status: '2025 ViCAP evidence package · legacy request pending',
      focus: 'The FBI’s current ViCAP page still lists Rosebud John Doe as unidentified under Texas DPS case 06-10-0406. His skeletal remains were recovered October 29, 2006 off County Road 350 near Pond Creek south of Rosebud, and their condition suggested he had been in a grave for many years before exposure. He was found with a hair comb, leather boots, dark blue/navy work pants, and a yellow button-down shirt stamped “RODRIGUEZ D E” inside the collar. The FBI page preserves official photographs of the yellow shirt and collar stamp, while the April 2025 ViCAP poster identifies Texas Ranger Brant Johnston as the investigating contact. Texas DPS’s current Company F roster still lists Johnston in Belton. Open Case Ledger’s earlier information request remains pending.'
    },
    {
      title: 'Desert Center Jane Doe',
      status: '2026 FGG + facial rendition · active identification effort',
      focus: 'Riverside County’s May 26, 2026 cold-case release substantially updates the identification effort for Desert Center Jane Doe. The Regional Cold Case Homicide Team says it re-examined the case in 2023 using forensic investigative genetic genealogy; the Coroner collected bone samples, Othram developed a DNA profile, the profile was uploaded to a direct-to-consumer ancestry database, and an assigned genealogist is actively working to identify her. Parabon Nanolabs produced a 2024 photo rendition and ancestry snapshot indicating Southeast Asian ancestry, brown eyes, black hair, and a light brown complexion. Riverside publicly released the rendition in 2026. This official release now controls Open Case Ledger’s current image and identification-status presentation.'
    },
    {
      title: 'Leah Roberts',
      status: 'Official timeline · active investigation',
      focus: 'Whatcom County Sheriff’s Office says Leah Roberts left North Carolina on March 9, 2000. A gas receipt places her in Brooks, Oregon, early March 13; she bought a 2:10 p.m. movie ticket at Bellis Fair Mall in Bellingham later that day; and her Jeep was found abandoned on a Whatcom County logging road on March 18. The original incident report remains withheld because the investigation is active, so current research is focused on public-source chronology, witnesses, locations, and evidence already officially described. The official WCSO case page also provides access to a printable flyer and larger photograph.'
    }
  ];

  const appendLinkOnce = (card, marker, html) => {
    if (!Array.from(card.querySelectorAll('a')).some((link) => link.textContent.includes(marker))) {
      card.insertAdjacentHTML('beforeend', html);
    }
  };

  caseUpdates.forEach((update) => {
    const cards = Array.from(document.querySelectorAll('.case-card'));
    const card = cards.find((candidate) => candidate.querySelector('h3')?.textContent.trim() === update.title);
    if (!card) return;

    const status = card.querySelector('.status');
    const focus = card.querySelector('.case-focus');
    if (status) status.textContent = update.status;
    if (focus) focus.textContent = update.focus;

    if (update.title === 'Jane Los Angeles Doe') {
      const ncmecLink = Array.from(card.querySelectorAll('a')).find((link) => link.href.includes('missingkids.org/poster/NCMU/1184145/1'));
      if (ncmecLink) ncmecLink.textContent = 'NCMEC case page + poster / identification images ↗';
      if (!card.querySelector('.official-asset-note')) {
        card.insertAdjacentHTML('beforeend', '<p class="case-note official-asset-note">Official-source asset audit: the current NCMEC case page preserves multiple identification images and a printable poster together with the clothing, jewelry, tattoo, agency case numbers, and current Los Angeles contact information.</p>');
      }
    }

    if (update.title === 'Bellport Jane Doe') {
      appendLinkOnce(card, '2026 updated composite', '<br><a href="https://www.suffolkcountyda.org/national-missing-persons-day/" target="_blank" rel="noreferrer">Suffolk DA 2026 updated composite + case details ↗</a>');
    }

    if (update.title === 'Pamela Leigh Walton') {
      appendLinkOnce(card, 'NPS historic', '<br><a href="https://npgallery.nps.gov/GetAsset/e70fafe5-8a52-4040-bf8d-9385db8bf692/" target="_blank" rel="noreferrer">NPS historic inventory for 319 Walnut ↗</a><br><a href="https://nicholascounty.ky.gov/elected/PVA/Pages/default.aspx" target="_blank" rel="noreferrer">Nicholas County PVA property-record source ↗</a>');
    }

    if (update.title === 'Medford Jane Doe') {
      appendLinkOnce(card, '2026 National Missing Persons Day', '<br><a href="https://www.suffolkcountyda.org/national-missing-persons-day/" target="_blank" rel="noreferrer">Suffolk DA 2026 National Missing Persons Day update ↗</a>');
      appendLinkOnce(card, 'FBI ViCAP flyer', '<br><a href="https://www.fbi.gov/wanted/vicap/unidentified-persons/jane-doe---medford-new-york/medford-ny.pdf" target="_blank" rel="noreferrer">FBI ViCAP flyer with reconstructions + tattoo ↗</a>');
    }

    if (update.title === 'Theresa Corley') {
      appendLinkOnce(card, 'February 2026 Bellingham response', '<br><a href="https://www.muckrock.com/foi/bellingham-463/ronald-a-moore-report-200921/" target="_blank" rel="noreferrer">February 2026 Bellingham response ↗</a><br><a href="https://www.bellinghamma.org/374/Daily-Press-Quarterly-Arrest-Logs" target="_blank" rel="noreferrer">Bellingham Police records page ↗</a>');
    }

    if (update.title === 'Wanda Line') {
      if (!card.querySelector('.dispatch-article-note')) {
        card.insertAdjacentHTML('beforeend', '<p class="case-note dispatch-article-note">Contemporaneous source: “Officers say victim was dancer,” <em>Columbus Dispatch</em>, January 5, 1984, p. 12. Copy supplied by Columbus Metropolitan Library on August 8, 2026. The copyrighted clipping is summarized here rather than republished.</p>');
      }
    }

    if (update.title === 'Rosebud John Doe') {
      const posterLink = Array.from(card.querySelectorAll('a')).find((link) => link.href.includes('vicap-alert-2025-04-03.pdf'));
      if (posterLink) posterLink.textContent = 'FBI ViCAP 2025 poster ↗';
      appendLinkOnce(card, 'FBI ViCAP case page + evidence images', '<br><a href="https://www.fbi.gov/wanted/vicap/unidentified-persons/john-doe---rosebud-texas/" target="_blank" rel="noreferrer">FBI ViCAP case page + evidence images ↗</a>');
      appendLinkOnce(card, 'Texas DPS Company F', '<br><a href="https://www.dps.texas.gov/section/texas-rangers/company-f" target="_blank" rel="noreferrer">Texas DPS Company F current Ranger roster ↗</a>');
      if (!card.querySelector('.official-asset-note')) {
        card.insertAdjacentHTML('beforeend', '<p class="case-note official-asset-note">Official-source asset audit: FBI currently provides photographs of the recovered yellow shirt and the “RODRIGUEZ D E” collar stamp in addition to the downloadable 2025 ViCAP poster. Agency case: 06-10-0406.</p>');
      }
    }

    if (update.title === 'Desert Center Jane Doe') {
      const oldSource = Array.from(card.querySelectorAll('a')).find((link) => link.href.includes('jane-doe---desert-center-california/desertcenter.pdf'));
      if (oldSource) oldSource.textContent = 'FBI ViCAP case source ↗';
      appendLinkOnce(card, 'Riverside DA 2026 FGG', '<br><a href="https://rivcoda.org/1994_cold_case" target="_blank" rel="noreferrer">Riverside DA 2026 FGG + Parabon facial rendition ↗</a>');
      appendLinkOnce(card, 'FBI current Desert Center case page', '<br><a href="https://www.fbi.gov/wanted/vicap/unidentified-persons/jane-doe---desert-center-california" target="_blank" rel="noreferrer">FBI current Desert Center case page ↗</a>');
      if (!card.querySelector('.official-asset-note')) {
        card.insertAdjacentHTML('beforeend', '<p class="case-note official-asset-note">Major source update: Riverside County publicly released the 2024 Parabon photo rendition in May 2026 and confirmed active forensic genetic genealogy using an Othram-developed DNA profile. The 2026 public release now controls the current image and evidence status.</p>');
      }
    }

    if (update.title === 'Leah Roberts') {
      const sourceLinks = Array.from(card.querySelectorAll('a[href="https://www.whatcomcounty.us/292/Missing-Leah-Roberts"]'));
      sourceLinks.slice(1).forEach((link) => {
        const previous = link.previousSibling;
        if (previous && previous.nodeName === 'BR') previous.remove();
        link.remove();
      });
      if (sourceLinks[0]) sourceLinks[0].textContent = 'Whatcom County Sheriff official case page + flyer/photo access ↗';
      if (!card.querySelector('.official-asset-note')) {
        card.insertAdjacentHTML('beforeend', '<p class="case-note official-asset-note">Official-source asset audit: WCSO’s case page provides a printable flyer and larger photograph. Open Case Ledger is preserving the verified landing page and will add the direct file asset once its current URL is independently verified.</p>');
      }
    }
  });

  const ledgerGrid = document.querySelector('#ledger .case-grid');
  if (ledgerGrid) {
    Array.from(ledgerGrid.querySelectorAll('.case-card')).forEach((card) => {
      const title = card.querySelector('h3')?.textContent.trim();
      if (title && unpublishedUntilAcknowledged.has(title)) card.remove();
    });

    const numberedCards = Array.from(ledgerGrid.querySelectorAll('.case-card'));
    numberedCards.sort((a, b) => {
      const aNumber = Number.parseInt(a.querySelector('.case-topline span')?.textContent.trim(), 10) || 0;
      const bNumber = Number.parseInt(b.querySelector('.case-topline span')?.textContent.trim(), 10) || 0;
      return bNumber - aNumber;
    });
    numberedCards.forEach((card) => ledgerGrid.appendChild(card));
  }

  const recordsGrid = document.querySelector('#records .principles');
  if (recordsGrid && !Array.from(recordsGrid.querySelectorAll('h3')).some((heading) => heading.textContent.trim() === 'Dennis Swain Jr.')) {
    recordsGrid.insertAdjacentHTML('afterbegin', '<article><span>04</span><h3>Dennis Swain Jr.</h3><p>Riverside Police Department denial letter for request W022110-080726, seeking Police Report P394260179. Received August 7, 2026. The department withheld the requested report under California Government Code § 7923.600(a); no investigative records were released.</p><a href="documents/dennis-swain-riverside-police-denial-2026-08-07.html">Open denial letter ↗</a></article>');
  }

  const researchGrid = document.querySelector('#research-notes .principles');
  if (researchGrid) {
    Array.from(researchGrid.querySelectorAll('article')).forEach((article) => {
      const heading = article.querySelector('h3')?.textContent.trim() || '';
      if (heading.startsWith('Rockledge Jane Doe') || heading.startsWith('Newark Jane Doe') || heading.startsWith('North Port John Doe')) article.remove();
    });
  }

  const addResearchNote = (title, html) => {
    if (researchGrid && !Array.from(researchGrid.querySelectorAll('h3')).some((heading) => heading.textContent.trim() === title)) {
      researchGrid.insertAdjacentHTML('afterbegin', html);
    }
  };

  addResearchNote('Wanda Line · January 1984 contemporaneous report', '<article><span>13</span><h3>Wanda Line · January 1984 contemporaneous report</h3><p>A full January 5, 1984 <em>Columbus Dispatch</em> clipping supplied by Columbus Metropolitan Library materially narrows the injury discrepancy in Wanda Line’s homicide. Detectives told the newspaper that Wanda had suffered a severe skull fracture that could have been caused by a blunt instrument such as a hammer. That account, published two days after she was found, is consistent with the Ohio Attorney General’s later description that she was beaten to death and indicates that the Franklin County Sheriff’s scene notation of apparent gunshot wounds was preliminary. The article also says detectives believed Wanda used the alias “Brandy” and worked as a dancer at Looking Kool, 5960 W. Broad St.; the club manager denied that employment claim. Deputies discovered Wanda at 100 Darien Ave., Apt. A after a loud-music complaint. The apartment was locked and chained, her boyfriend Thomas Wessels was reported to be in Florida, detectives said they had identified no motive, and Coroner William Adrion estimated she had been dead about 24 hours. The coroner/autopsy record remains the strongest missing source for definitive medical wording.</p><p class="case-note">Source: “Officers say victim was dancer,” <em>Columbus Dispatch</em>, January 5, 1984, p. 12; copy supplied by Columbus Metropolitan Library, August 8, 2026.</p><a href="https://www.ohioattorneygeneral.gov/Files/Law-Enforcement/Investigator/Cold-Case/Homicides/Line" target="_blank" rel="noreferrer">Ohio Attorney General cold-case page ↗</a><br><a href="documents/wanda-line-fcso-redacted-incident-report-2026-08-07.html" target="_blank" rel="noreferrer">FCSO redacted incident record ↗</a></article>');
  addResearchNote('Desert Center Jane Doe · 2026 FGG and facial rendition', '<article><span>12</span><h3>Desert Center Jane Doe · 2026 FGG and facial rendition</h3><p>Riverside County’s May 26, 2026 official cold-case release changes the evidentiary picture substantially. The Regional Cold Case Homicide Team re-examined the case in 2023 using forensic investigative genetic genealogy. Bone samples collected by the Riverside County Coroner were sent to Othram, which developed a DNA profile that was uploaded to a direct-to-consumer ancestry database; a genealogist assigned to the team is actively working to identify her. In 2024 Parabon Nanolabs created a photo rendition and ancestry snapshot indicating Southeast Asian ancestry, brown eyes, black hair, and light brown complexion. Riverside released the facial rendition publicly in 2026. The current FBI ViCAP page reflects the Southeast Asian profile and continues to feature the ship’s-wheel-and-anchor medallion and acrylic partial denture. Riverside’s 2026 public release now controls Open Case Ledger’s current image and evidence status.</p><a href="https://rivcoda.org/1994_cold_case" target="_blank" rel="noreferrer">Riverside County DA 2026 release + facial rendition ↗</a><br><a href="https://www.fbi.gov/wanted/vicap/unidentified-persons/jane-doe---desert-center-california" target="_blank" rel="noreferrer">FBI current ViCAP case page ↗</a></article>');
  addResearchNote('Rosebud John Doe · official evidence audit', '<article><span>11</span><h3>Rosebud John Doe · official evidence audit</h3><p>The FBI’s current ViCAP page and April 3, 2025 alert continue to list Texas DPS case 06-10-0406 as unidentified. The remains were recovered October 29, 2006 off County Road 350 near Pond Creek south of Rosebud, and the condition suggested the man had been buried for many years before exposure. The official evidence package documents a hair comb, leather boots, dark blue/navy work pants, and a yellow button-down shirt stamped “RODRIGUEZ D E” inside the collar. The FBI case page preserves photographs of both the shirt and collar stamp. The ViCAP alert names Texas Ranger Brant Johnston, and Texas DPS’s current Company F roster still lists Johnston in Belton. Open Case Ledger’s earlier information-request lane remains pending alongside this expanded public evidence package.</p><a href="https://www.fbi.gov/wanted/vicap/unidentified-persons/john-doe---rosebud-texas/" target="_blank" rel="noreferrer">FBI ViCAP case page + evidence images ↗</a><br><a href="https://www.fbi.gov/wanted/vicap/unidentified-persons/john-doe---rosebud-texas/vicap-alert-2025-04-03.pdf" target="_blank" rel="noreferrer">April 3, 2025 FBI ViCAP poster ↗</a><br><a href="https://www.dps.texas.gov/section/texas-rangers/company-f" target="_blank" rel="noreferrer">Texas DPS Company F current roster ↗</a></article>');
  addResearchNote('Jane Los Angeles Doe · official image and evidence audit', '<article><span>10</span><h3>Jane Los Angeles Doe · official image and evidence audit</h3><p>NCMEC’s current case page for NCMEC 1184145 / NamUs UP3979 / Medical Examiner case 89-05285 confirms the unidentified girl was found behind the 1200 block of 8th Street on May 25, 1989 and preserves several public identification images plus a printable poster. The page documents her bright blue “Somebody in California Loves Me” shirt; a lion-head ring, turquoise-colored stone ring, crystal-heart ring, I.D.-brand bracelet, pendant bracelet, necklace, and earrings; and the patterned right-thigh tattoo with partially legible lettering. This source is now linked explicitly as the public image/poster package while the Medical Examiner clarification on current forensic identifiers, retained samples, and modern identification review remains pending.</p><a href="https://www.missingkids.org/poster/NCMU/1184145/1" target="_blank" rel="noreferrer">NCMEC case page + poster / identification images ↗</a></article>');
  addResearchNote('Theresa Corley · 2026 active investigation', '<article><span>09</span><h3>Theresa Corley · 2026 active investigation</h3><p>In a February 9, 2026 public-records response, Bellingham Police said Theresa Corley’s homicide remains active and ongoing. The department described substantive investigative work since 2023, including collection of DNA from persons of interest or people potentially connected to them, follow-up on telephone and in-person tips, preparation of investigative summaries, and interviews of potential witnesses. Open Case Ledger’s Massachusetts State Police request P008678-080726 remains the active records lane.</p><a href="https://www.muckrock.com/foi/bellingham-463/ronald-a-moore-report-200921/" target="_blank" rel="noreferrer">Publicly posted Bellingham Police correspondence ↗</a><br><a href="https://www.bellinghamma.org/374/Daily-Press-Quarterly-Arrest-Logs" target="_blank" rel="noreferrer">Bellingham Police records page ↗</a></article>');
  addResearchNote('Medford Jane Doe · 2026 genetic genealogy update', '<article><span>08</span><h3>Medford Jane Doe · 2026 genetic genealogy update</h3><p>Suffolk County’s February 3, 2026 National Missing Persons Day update says recent genetic-genealogy work indicates Medford Jane Doe was Caucasian with Western European ancestry, at least 75% attributable to England, Scotland, and Wales. The Cold Case Task Force released a clay reconstruction, an updated facial composite, and an updated depiction of the ADRIAN heart tattoo. An FBI ViCAP alert released April 23, 2026 adds a scar in the center of the right calf, a black J.J. Cochran-label halter top, a Hilton Hotel bathmat, and confirms dental records are available. The FBI flyer collects the reconstructions and tattoo image in one official downloadable source. The case remains open. A Suffolk County Clerk inquiry is seeking public portions of the Robert Yale Shulman court file for possible victim-identification leads.</p><a href="https://www.suffolkcountyda.org/cold_case/medford-jane-doe/" target="_blank" rel="noreferrer">Suffolk DA Medford Jane Doe case page ↗</a><br><a href="https://www.suffolkcountyda.org/national-missing-persons-day/" target="_blank" rel="noreferrer">February 3, 2026 official update ↗</a><br><a href="https://www.fbi.gov/wanted/vicap/unidentified-persons/jane-doe---medford-new-york/medford-ny.pdf" target="_blank" rel="noreferrer">April 23, 2026 FBI ViCAP flyer with reconstructions + tattoo ↗</a></article>');
  addResearchNote('Pamela Walton · 319 Walnut official sources', '<article><span>06</span><h3>Pamela Walton · 319 Walnut official sources</h3><p>The June 1988 court listing gives Pamela’s address as 319 Walnut in Carlisle. The National Park Service’s Carlisle Historic District inventory separately identifies 319 Walnut as a circa-1900 residential house. Nicholas County PVA is researching the historical ownership through handwritten 1988 property cards following an August 6 exchange with Jackie M. Earlywine, who said she would review the cards after returning August 10.</p><a href="https://npgallery.nps.gov/GetAsset/e70fafe5-8a52-4040-bf8d-9385db8bf692/" target="_blank" rel="noreferrer">NPS Carlisle Historic District inventory ↗</a><br><a href="https://nicholascounty.ky.gov/elected/PVA/Pages/default.aspx" target="_blank" rel="noreferrer">Nicholas County PVA ↗</a></article>');
  addResearchNote('Bellport Jane Doe · Michigan Avenue', '<article><span>05</span><h3>Bellport Jane Doe · Michigan Avenue</h3><p>Suffolk County’s current cold-case page says the woman known as Marie or Maria rented a room from Arthur Kinlaw at a Michigan Avenue residence in Bellport and was murdered around 1983. Her remains were recovered in November 1999 from beneath a concrete patio at the residence after information supplied by Kinlaw’s wife. Suffolk describes her as a heavyset Black or Hispanic woman, approximately 300 pounds, who used a walker and had previously shattered her femur. A rosary and homemade blue jersey dress were recovered with her remains, and investigators believe she may have been a sex worker from New York City. Suffolk County released an updated composite sketch in February 2026. An August 7 historical-society inquiry is seeking period directories, tax maps, address files, photographs, and clipping files to identify the exact Michigan Avenue residence and occupants.</p><a href="https://www.suffolkcountyda.org/cold_case/bellport-jane-doe/" target="_blank" rel="noreferrer">Suffolk County Bellport Jane Doe case page ↗</a><br><a href="https://www.suffolkcountyda.org/national-missing-persons-day/" target="_blank" rel="noreferrer">February 3, 2026 updated composite + official release ↗</a></article>');
  addResearchNote('Leah Roberts · official timeline', '<article><span>04</span><h3>Leah Roberts · official timeline</h3><p>The Whatcom County Sheriff’s Office public case page provides the current official chronology for Leah’s March 2000 disappearance and links its printable flyer with a larger photograph. Open Case Ledger is using these official materials as the primary-source baseline while the underlying incident report remains exempt as part of an active investigation.</p><a href="https://www.whatcomcounty.us/292/Missing-Leah-Roberts" target="_blank" rel="noreferrer">Official case page with flyer/photo access ↗</a></article>');

  const sortNumberedArticlesDescending = (container) => {
    if (!container) return;
    const articles = Array.from(container.children).filter((child) => child.matches('article'));
    articles.sort((a, b) => {
      const aNumber = Number.parseInt(a.querySelector('span')?.textContent.trim(), 10);
      const bNumber = Number.parseInt(b.querySelector('span')?.textContent.trim(), 10);
      const safeA = Number.isFinite(aNumber) ? aNumber : -1;
      const safeB = Number.isFinite(bNumber) ? bNumber : -1;
      return safeB - safeA;
    });
    articles.forEach((article) => container.appendChild(article));
  };

  sortNumberedArticlesDescending(recordsGrid);
  sortNumberedArticlesDescending(researchGrid);

  document.querySelectorAll('a[href="documents/wanda-line-fcso-redacted-incident-report-2026-08-07.pdf"]').forEach((link) => {
    link.href = 'documents/wanda-line-fcso-redacted-incident-report-2026-08-07.html';
    if (link.textContent.includes('PDF')) link.textContent = link.textContent.replace('PDF', 'record');
  });

  const paginatedContainers = document.querySelectorAll('[data-page-size]');
  paginatedContainers.forEach((container) => {
    const pageSize = Number.parseInt(container.dataset.pageSize, 10) || 20;
    const items = Array.from(container.children).filter((child) => child.matches('article'));
    if (items.length <= pageSize) return;

    let page = 0;
    const totalPages = Math.ceil(items.length / pageSize);
    const label = container.dataset.paginationLabel || 'items';
    const controls = document.createElement('div');
    controls.className = 'pagination';
    controls.setAttribute('role', 'navigation');
    controls.setAttribute('aria-label', `${label} pages`);

    const newer = document.createElement('button');
    newer.type = 'button';
    newer.textContent = '← Newer';
    const pageStatus = document.createElement('span');
    pageStatus.className = 'pagination-status';
    pageStatus.setAttribute('aria-live', 'polite');
    const older = document.createElement('button');
    older.type = 'button';
    older.textContent = 'Older →';

    controls.append(newer, pageStatus, older);
    container.insertAdjacentElement('afterend', controls);

    const render = () => {
      const start = page * pageSize;
      const end = start + pageSize;
      items.forEach((item, index) => { item.hidden = index < start || index >= end; });
      newer.disabled = page === 0;
      older.disabled = page === totalPages - 1;
      pageStatus.textContent = `Page ${page + 1} of ${totalPages}`;
    };

    const moveToPage = (nextPage) => {
      page = nextPage;
      render();
      const section = container.closest('section');
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    newer.addEventListener('click', () => { if (page > 0) moveToPage(page - 1); });
    older.addEventListener('click', () => { if (page < totalPages - 1) moveToPage(page + 1); });
    render();
  });
})();