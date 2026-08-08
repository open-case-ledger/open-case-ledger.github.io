(() => {
  const analyticsScript = document.createElement('script');
  analyticsScript.async = true;
  analyticsScript.src = 'https://scripts.simpleanalyticscdn.com/latest.js';
  document.head.appendChild(analyticsScript);

  const caseUpdates = [
    {
      title: 'Jane Los Angeles Doe',
      status: 'ID Unit response · clarification pending',
      focus: 'Los Angeles County Medical Examiner’s Identification Unit says older unidentified cases are routinely reviewed for new law-enforcement leads, technological advances, and public information. The office also confirmed that purchasing the archived Medical Examiner report would not include copies of the decedent’s fingerprints, DNA reports, dental X-rays, or names of excluded individuals. Open Case Ledger has asked a follow-up to confirm whether case 89-05285 remains unidentified and active, whether fingerprints, dental records, a DNA profile, and retained biological samples exist, and whether forensic genetic genealogy has been reviewed.'
    },
    {
      title: 'Bellport Jane Doe',
      status: 'Historical-society inquiry sent',
      focus: 'Suffolk County’s 2026 cold-case update identifies the case as 99-564229 and says the woman known as “Marie” or “Maria” lived on Michigan Avenue in Bellport and rented from Arthur Kinlaw. Open Case Ledger sent an August 7, 2026 inquiry to the Bellport-Brookhaven Historical Society seeking 1982–1984 directories, address files, tax maps, photographs, clipping files, and other local-history material that could identify the exact Kinlaw residence and occupants.'
    },
    {
      title: 'Pamela Leigh Walton',
      status: '319 Walnut · PVA research pending',
      focus: 'A June 27, 1988 Fayette County court entry lists Pamela Walton, age 25, at 319 Walnut in Carlisle. An official National Park Service Carlisle Historic District inventory independently documents 319 Walnut as a circa-1900 residential house. Jackie M. Earlywine at Nicholas County PVA already accepted Open Case Ledger’s historical ownership request on August 6 through legacy email and said she will review the handwritten 1988 property cards after returning August 10. No duplicate outreach is needed.'
    },
    {
      title: 'Medford Jane Doe',
      status: '2026 FGG update · court-file research pending',
      focus: 'Suffolk County District Attorney’s Office says Medford Jane Doe, case 94-564229, remains unidentified and under active investigation. The victim was recovered on December 7, 1994 inside a blue Rubbermaid garbage can along Long Island Avenue in Medford. She was estimated to be 20–30 years old, about 5’1” and 135 pounds, and had a red heart tattoo on the upper left shoulder containing the name ADRIAN. In February 2026 the Cold Case Task Force announced that genetic genealogy indicates Caucasian ancestry with Western European roots, at least 75% attributable to England, Scotland, and Wales, and released a clay reconstruction, updated facial composite, and updated tattoo depiction. A separate Suffolk County Clerk inquiry for public portions of the Robert Yale Shulman court file is already being researched; no duplicate outreach is needed.'
    }
  ];

  caseUpdates.forEach((update) => {
    const cards = Array.from(document.querySelectorAll('.case-card'));
    const card = cards.find((candidate) => candidate.querySelector('h3')?.textContent.trim() === update.title);
    if (!card) return;

    const status = card.querySelector('.status');
    const focus = card.querySelector('.case-focus');
    if (status) status.textContent = update.status;
    if (focus) focus.textContent = update.focus;

    if (update.title === 'Pamela Leigh Walton' && !Array.from(card.querySelectorAll('a')).some((link) => link.textContent.includes('NPS historic'))) {
      card.insertAdjacentHTML('beforeend', '<br><a href="https://npgallery.nps.gov/GetAsset/e70fafe5-8a52-4040-bf8d-9385db8bf692/" target="_blank" rel="noreferrer">NPS historic inventory for 319 Walnut ↗</a><br><a href="https://nicholascounty.ky.gov/elected/PVA/Pages/default.aspx" target="_blank" rel="noreferrer">Nicholas County PVA property-record source ↗</a>');
    }

    if (update.title === 'Medford Jane Doe' && !Array.from(card.querySelectorAll('a')).some((link) => link.textContent.includes('2026 National Missing Persons Day'))) {
      card.insertAdjacentHTML('beforeend', '<br><a href="https://www.suffolkcountyda.org/national-missing-persons-day/" target="_blank" rel="noreferrer">Suffolk DA 2026 National Missing Persons Day update ↗</a>');
    }
  });

  const ledgerGrid = document.querySelector('#ledger .case-grid');
  if (ledgerGrid && !Array.from(ledgerGrid.querySelectorAll('h3')).some((heading) => heading.textContent.trim() === 'Rockledge Jane Doe')) {
    ledgerGrid.insertAdjacentHTML('afterbegin', `
      <article class="case-card"><div class="case-topline"><span>18</span><span class="status waiting">Official ViCAP · outreach draft ready</span></div><p class="case-place">Rockledge, Florida · Unidentified 1980</p><h3>Rockledge Jane Doe</h3><p class="case-focus">FBI ViCAP case 80-44796 / ViCAP 1987FL00085 / NamUs UP2312 concerns an unidentified Black woman recovered near Murrell Road in Rockledge on October 11, 1980. Investigators estimated her age at about 25, height at 5'6", and weight at 120 pounds, with brown or red hair and brown eyes. She wore a red Pringles Chip T-shirt, blue jeans, and white shoes. The FBI states that dental records, fingerprints, and DNA are available for comparison. During the investigation, Pinellas County detention records associated her with the name “Joanne English,” but authorities determined the name, SSN, and date of birth were false. Open Case Ledger has prepared a focused identification-status inquiry for the two Brevard County Sheriff agents listed on the current FBI poster.</p><a href="https://www.fbi.gov/wanted/vicap/unidentified-persons/jane-doe-39" target="_blank" rel="noreferrer">FBI ViCAP official case page ↗</a><br><a href="https://www.fbi.gov/wanted/vicap/unidentified-persons/jane-doe-39/rockledgefl2.pdf" target="_blank" rel="noreferrer">FBI ViCAP poster ↗</a></article>
    `);
  }
  if (ledgerGrid && !Array.from(ledgerGrid.querySelectorAll('h3')).some((heading) => heading.textContent.trim() === 'Newark Jane Doe')) {
    ledgerGrid.insertAdjacentHTML('afterbegin', `
      <article class="case-card"><div class="case-topline"><span>17</span><span class="status waiting">Identification-status inquiry sent · waiting</span></div><p class="case-place">Newark, California · Unidentified 1985</p><h3>Newark Jane Doe</h3><p class="case-focus">FBI ViCAP case 85-07156 / NamUs UP53306 concerns an unidentified white woman whose nearly skeletal remains were found beside Mowry Avenue in Newark on October 24, 1985. She had been shot and was estimated to have died two months to one year earlier. Investigators estimated her age at 25–36 and height at 5'6"–5'8", with brown, red, or auburn shoulder-length hair. Her lower two front teeth had been missing for a long time and the surrounding teeth had grown together to close the gap. She was recovered with distinctive jewelry, including red/orange glass earrings, a Timex watch, two rings, and yellow barrettes. The FBI alert notes that no jewelry photographs are available. Open Case Ledger sent a narrow identification-status inquiry to the FBI-listed Newark Police detective on August 7, 2026 and is waiting for a response.</p><a href="https://www.fbi.gov/wanted/vicap/unidentified-persons/jane-doe---newark-california/" target="_blank" rel="noreferrer">FBI ViCAP official case page ↗</a></article>
    `);
  }
  if (ledgerGrid && !Array.from(ledgerGrid.querySelectorAll('h3')).some((heading) => heading.textContent.trim() === 'North Port John Doe')) {
    ledgerGrid.insertAdjacentHTML('afterbegin', `
      <article class="case-card"><div class="case-topline"><span>16</span><span class="status waiting">Records request sent · waiting</span></div><p class="case-place">North Port, Florida · Unidentified 1996</p><h3>North Port John Doe</h3><p class="case-focus">The FBI’s current ViCAP notice says this unidentified man was recovered in North Port on January 1, 1996 after a resident reported that his dog had brought home human remains. Investigators recovered most of the remains. The FBI describes him as approximately 35–45 years old, about 6'2", brown-haired, Native American, with a large or muscular build and a previously broken nose. No clothing or personal belongings were recovered. ViCAP further states that DNA testing suggests descent connected to the Mattaponi Indian Tribe of Virginia. North Port Police remains the local investigating agency; Open Case Ledger sent a narrowly scoped records request on August 7, 2026 for the original recovery report and public identification-related supplements.</p><a href="https://www.fbi.gov/wanted/vicap/unidentified-persons/john-doe---north-port-florida" target="_blank" rel="noreferrer">FBI ViCAP official case page ↗</a><br><a href="https://www.northportfl.gov/City-Services-and-Safety/Emergency-Services/Police/Records" target="_blank" rel="noreferrer">North Port Police records page ↗</a></article>
    `);
  }
  if (ledgerGrid && !Array.from(ledgerGrid.querySelectorAll('h3')).some((heading) => heading.textContent.trim() === 'Leah Roberts')) {
    ledgerGrid.insertAdjacentHTML('afterbegin', `
      <article class="case-card"><div class="case-topline"><span>15</span><span class="status waiting">Official timeline · active investigation</span></div><p class="case-place">Whatcom County, Washington · Missing 2000</p><h3>Leah Roberts</h3><p class="case-focus">Whatcom County Sheriff’s Office says Leah Roberts left North Carolina on March 9, 2000. A gas receipt places her in Brooks, Oregon, early March 13; she bought a 2:10 p.m. movie ticket at Bellis Fair Mall in Bellingham later that day; and her Jeep was found abandoned on a Whatcom County logging road on March 18. The original incident report remains withheld because the investigation is active, so current research is limited to public-source chronology, witnesses, locations, and evidence already officially described.</p><a href="https://www.whatcomcounty.us/292/Missing-Leah-Roberts" target="_blank" rel="noreferrer">Whatcom County Sheriff official case page ↗</a><br><a href="https://www.whatcomcounty.us/292/Missing-Leah-Roberts" target="_blank" rel="noreferrer">Official printable flyer / larger photo PDF ↗</a></article>
    `);
  }
  if (ledgerGrid && !Array.from(ledgerGrid.querySelectorAll('h3')).some((heading) => heading.textContent.trim() === 'Dennis Swain Jr.')) {
    ledgerGrid.insertAdjacentHTML('afterbegin', `
      <article class="case-card"><div class="case-topline"><span>14</span><span class="status closed">RPD records request denied</span></div><p class="case-place">Riverside, California · 1994</p><h3>Dennis Swain Jr.</h3><p class="case-focus">Riverside Police Department denied Open Case Ledger request W022110-080726 for Police Report P394260179 on August 7, 2026. The department cites California Government Code § 7923.600(a), the investigatory-record exemption, and released no portion of the requested incident report. The records route is closed; research now returns to public sources unless circumstances change.</p><a href="documents/dennis-swain-riverside-police-denial-2026-08-07.html">Read the Riverside denial letter ↗</a></article>
    `);
  }

  if (ledgerGrid) {
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
    recordsGrid.insertAdjacentHTML('afterbegin', `
      <article><span>04</span><h3>Dennis Swain Jr.</h3><p>Riverside Police Department denial letter for request W022110-080726, seeking Police Report P394260179. Received August 7, 2026. The department withheld the requested report under California Government Code § 7923.600(a); no investigative records were released.</p><a href="documents/dennis-swain-riverside-police-denial-2026-08-07.html">Open denial letter ↗</a></article>
    `);
  }

  const researchGrid = document.querySelector('#research-notes .principles');
  const addResearchNote = (title, html) => {
    if (researchGrid && !Array.from(researchGrid.querySelectorAll('h3')).some((heading) => heading.textContent.trim() === title)) {
      researchGrid.insertAdjacentHTML('afterbegin', html);
    }
  };

  addResearchNote('Rockledge Jane Doe · official baseline', `
    <article><span>10</span><h3>Rockledge Jane Doe · official baseline</h3><p>FBI ViCAP identifies Rockledge Jane Doe as Brevard County case 80-44796 / ViCAP 1987FL00085 / NamUs UP2312. She was recovered near Murrell Road on October 11, 1980. The federal alert states that dental records, fingerprints, and DNA are all available for comparison. It also preserves an unusual historical lead: Pinellas County detention records once associated the victim with the false identity “Joanne English.” The current FBI poster lists Brevard County Sheriff Agents Samantha Grimes and Vince Bustillo as contacts. Open Case Ledger has prepared a focused inquiry asking about current DNA/CODIS/forensic-genetic-genealogy status, fingerprint AFIS/NGI review, dental comparison materials, the booking-record lead, and any updated public reconstruction or bulletin.</p><a href="https://www.fbi.gov/wanted/vicap/unidentified-persons/jane-doe-39" target="_blank" rel="noreferrer">FBI ViCAP official case page ↗</a><br><a href="https://www.fbi.gov/wanted/vicap/unidentified-persons/jane-doe-39/rockledgefl2.pdf" target="_blank" rel="noreferrer">FBI ViCAP poster ↗</a></article>
  `);

  addResearchNote('Newark Jane Doe · official baseline', `
    <article><span>09</span><h3>Newark Jane Doe · official baseline</h3><p>FBI ViCAP identifies Newark Jane Doe as case 85-07156 / NamUs UP53306. Her remains were recovered beside Mowry Avenue on October 24, 1985 after a fatal shooting. The current alert emphasizes two unusually useful identification avenues: a longstanding gap from her missing lower front teeth, where surrounding teeth had grown together, and a distinctive set of jewelry. The alert states that no jewelry photographs are available and lists Newark Police Detective Andrew Musantry as the contact to provide or request additional information. Open Case Ledger sent a focused identification-status inquiry on August 7, 2026 about current DNA/CODIS status, forensic genetic genealogy, dental records, retained biological material, releasable jewelry images, and any newer reconstruction; the inquiry is now waiting for a response.</p><a href="https://www.fbi.gov/wanted/vicap/unidentified-persons/jane-doe---newark-california/" target="_blank" rel="noreferrer">FBI ViCAP official case page ↗</a></article>
  `);

  addResearchNote('Medford Jane Doe · 2026 genetic genealogy update', `
    <article><span>08</span><h3>Medford Jane Doe · 2026 genetic genealogy update</h3><p>Suffolk County’s February 3, 2026 National Missing Persons Day update says recent genetic-genealogy work indicates Medford Jane Doe was Caucasian with Western European ancestry, at least 75% attributable to England, Scotland, and Wales. The Cold Case Task Force also released a clay reconstruction, an updated facial composite, and an updated depiction of the ADRIAN heart tattoo. The case remains open. A pre-existing Suffolk County Clerk inquiry is separately seeking public portions of the Robert Yale Shulman court file for possible victim-identification leads, so no duplicate court outreach is being sent.</p><a href="https://www.suffolkcountyda.org/cold_case/medford-jane-doe/" target="_blank" rel="noreferrer">Suffolk DA Medford Jane Doe case page ↗</a><br><a href="https://www.suffolkcountyda.org/national-missing-persons-day/" target="_blank" rel="noreferrer">February 3, 2026 official update ↗</a></article>
  `);

  addResearchNote('North Port John Doe · official baseline', `
    <article><span>07</span><h3>North Port John Doe · official baseline</h3><p>FBI ViCAP remains the current public identification baseline for the unidentified man recovered in North Port on January 1, 1996. The federal notice describes the recovery circumstances, physical profile, absence of clothing or personal effects, and the later DNA-based ancestry statement. North Port Police’s official records page confirms the department as the direct public-records contact. Open Case Ledger sent a records request on August 7, 2026 seeking the original recovery report and segregable public supplemental material that can clarify the local identification history.</p><a href="https://www.fbi.gov/wanted/vicap/unidentified-persons/john-doe---north-port-florida" target="_blank" rel="noreferrer">FBI ViCAP official source ↗</a><br><a href="https://www.northportfl.gov/City-Services-and-Safety/Emergency-Services/Police/Records" target="_blank" rel="noreferrer">North Port Police records source ↗</a></article>
  `);

  addResearchNote('Pamela Walton · 319 Walnut official sources', `
    <article><span>06</span><h3>Pamela Walton · 319 Walnut official sources</h3><p>The June 1988 court listing gives Pamela’s address as 319 Walnut in Carlisle. The National Park Service’s Carlisle Historic District inventory separately identifies 319 Walnut as a circa-1900 residential house. Nicholas County PVA is already researching the historical ownership through handwritten 1988 property cards following an August 6 legacy-email exchange with Jackie M. Earlywine, who promised to send what she can find after returning August 10.</p><a href="https://npgallery.nps.gov/GetAsset/e70fafe5-8a52-4040-bf8d-9385db8bf692/" target="_blank" rel="noreferrer">NPS Carlisle Historic District inventory ↗</a><br><a href="https://nicholascounty.ky.gov/elected/PVA/Pages/default.aspx" target="_blank" rel="noreferrer">Nicholas County PVA ↗</a></article>
  `);

  addResearchNote('Bellport Jane Doe · Michigan Avenue', `
    <article><span>05</span><h3>Bellport Jane Doe · Michigan Avenue</h3><p>Suffolk County’s 2026 cold-case page confirms that the unidentified woman known as Marie or Maria lived on Michigan Avenue in Bellport and rented from Arthur Kinlaw. An inquiry was sent August 7, 2026 to the Bellport-Brookhaven Historical Society seeking period directories, tax maps, address files, photographs, and clipping files to identify the exact residence and occupants.</p><a href="https://www.suffolkcountyda.org/cold_case/bellport-jane-doe/" target="_blank" rel="noreferrer">Suffolk County official cold-case update ↗</a></article>
  `);

  addResearchNote('Leah Roberts · official timeline', `
    <article><span>04</span><h3>Leah Roberts · official timeline</h3><p>The Whatcom County Sheriff’s Office public case page provides the current official chronology for Leah’s March 2000 disappearance and links its printable flyer with a larger photograph. Open Case Ledger is using these official materials as the primary-source baseline while the underlying incident report remains exempt as part of an active investigation.</p><a href="https://www.whatcomcounty.us/292/Missing-Leah-Roberts" target="_blank" rel="noreferrer">Official case page and printable flyer ↗</a></article>
  `);

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