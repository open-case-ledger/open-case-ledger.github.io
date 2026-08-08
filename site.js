(() => {
  const analyticsScript = document.createElement('script');
  analyticsScript.async = true;
  analyticsScript.src = 'https://scripts.simpleanalyticscdn.com/latest.js';
  document.head.appendChild(analyticsScript);

  const unpublishedUntilAcknowledged = new Set([
    'Rockledge Jane Doe',
    'Newark Jane Doe',
    'North Port John Doe'
  ]);

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
    },
    {
      title: 'Theresa Corley',
      status: 'MSP request processing · 2026 active DNA work',
      focus: 'Bellingham Police publicly confirmed in a February 2026 records response that Theresa Corley’s homicide remains an active and ongoing investigation. The department said that since the current chief assumed command in 2023, investigators have collected DNA from persons of interest or people potentially connected to them, followed up on telephone and in-person tips, prepared investigative summaries, and interviewed potential witnesses. Open Case Ledger’s Massachusetts State Police request P008678-080726 is already processing, so no duplicate Bellingham records request is being sent while that lane remains active.'
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

    if (update.title === 'Theresa Corley' && !Array.from(card.querySelectorAll('a')).some((link) => link.textContent.includes('February 2026 Bellingham response'))) {
      card.insertAdjacentHTML('beforeend', '<br><a href="https://www.muckrock.com/foi/bellingham-463/ronald-a-moore-report-200921/" target="_blank" rel="noreferrer">February 2026 Bellingham response ↗</a><br><a href="https://www.bellinghamma.org/374/Daily-Press-Quarterly-Arrest-Logs" target="_blank" rel="noreferrer">Bellingham Police records page ↗</a>');
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
    recordsGrid.insertAdjacentHTML('afterbegin', `
      <article><span>04</span><h3>Dennis Swain Jr.</h3><p>Riverside Police Department denial letter for request W022110-080726, seeking Police Report P394260179. Received August 7, 2026. The department withheld the requested report under California Government Code § 7923.600(a); no investigative records were released.</p><a href="documents/dennis-swain-riverside-police-denial-2026-08-07.html">Open denial letter ↗</a></article>
    `);
  }

  const researchGrid = document.querySelector('#research-notes .principles');
  if (researchGrid) {
    Array.from(researchGrid.querySelectorAll('article')).forEach((article) => {
      const heading = article.querySelector('h3')?.textContent.trim() || '';
      if (
        heading.startsWith('Rockledge Jane Doe') ||
        heading.startsWith('Newark Jane Doe') ||
        heading.startsWith('North Port John Doe')
      ) article.remove();
    });
  }

  const addResearchNote = (title, html) => {
    if (researchGrid && !Array.from(researchGrid.querySelectorAll('h3')).some((heading) => heading.textContent.trim() === title)) {
      researchGrid.insertAdjacentHTML('afterbegin', html);
    }
  };

  addResearchNote('Theresa Corley · 2026 active investigation', `
    <article><span>09</span><h3>Theresa Corley · 2026 active investigation</h3><p>In a February 9, 2026 public-records response, Bellingham Police said Theresa Corley’s homicide remains active and ongoing. The department described substantive investigative work since 2023, including collection of DNA from persons of interest or people potentially connected to them, follow-up on telephone and in-person tips, preparation of investigative summaries, and interviews of potential witnesses. That recent activity strengthens the current active-investigation baseline. Open Case Ledger is therefore waiting on Massachusetts State Police request P008678-080726 rather than duplicating a Bellingham request for the same 1978 offense report.</p><a href="https://www.muckrock.com/foi/bellingham-463/ronald-a-moore-report-200921/" target="_blank" rel="noreferrer">Publicly posted Bellingham Police correspondence ↗</a><br><a href="https://www.bellinghamma.org/374/Daily-Press-Quarterly-Arrest-Logs" target="_blank" rel="noreferrer">Bellingham Police records page ↗</a></article>
  `);

  addResearchNote('Medford Jane Doe · 2026 genetic genealogy update', `
    <article><span>08</span><h3>Medford Jane Doe · 2026 genetic genealogy update</h3><p>Suffolk County’s February 3, 2026 National Missing Persons Day update says recent genetic-genealogy work indicates Medford Jane Doe was Caucasian with Western European ancestry, at least 75% attributable to England, Scotland, and Wales. The Cold Case Task Force also released a clay reconstruction, an updated facial composite, and an updated depiction of the ADRIAN heart tattoo. The case remains open. A pre-existing Suffolk County Clerk inquiry is separately seeking public portions of the Robert Yale Shulman court file for possible victim-identification leads, so no duplicate court outreach is being sent.</p><a href="https://www.suffolkcountyda.org/cold_case/medford-jane-doe/" target="_blank" rel="noreferrer">Suffolk DA Medford Jane Doe case page ↗</a><br><a href="https://www.suffolkcountyda.org/national-missing-persons-day/" target="_blank" rel="noreferrer">February 3, 2026 official update ↗</a></article>
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