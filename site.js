(() => {
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
  });

  const ledgerGrid = document.querySelector('#ledger .case-grid');
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

  const recordsGrid = document.querySelector('#records .principles');
  if (recordsGrid && !Array.from(recordsGrid.querySelectorAll('h3')).some((heading) => heading.textContent.trim() === 'Dennis Swain Jr.')) {
    recordsGrid.insertAdjacentHTML('afterbegin', `
      <article><span>04</span><h3>Dennis Swain Jr.</h3><p>Riverside Police Department denial letter for request W022110-080726, seeking Police Report P394260179. Received August 7, 2026. The department withheld the requested report under California Government Code § 7923.600(a); no investigative records were released.</p><a href="documents/dennis-swain-riverside-police-denial-2026-08-07.html">Open denial letter ↗</a></article>
    `);
  }

  const researchGrid = document.querySelector('#research-notes .principles');
  if (researchGrid && !Array.from(researchGrid.querySelectorAll('h3')).some((heading) => heading.textContent.trim() === 'Leah Roberts · official timeline')) {
    researchGrid.insertAdjacentHTML('afterbegin', `
      <article><span>04</span><h3>Leah Roberts · official timeline</h3><p>The Whatcom County Sheriff’s Office public case page provides the current official chronology for Leah’s March 2000 disappearance and links its printable flyer with a larger photograph. Open Case Ledger is using these official materials as the primary-source baseline while the underlying incident report remains exempt as part of an active investigation.</p><a href="https://www.whatcomcounty.us/292/Missing-Leah-Roberts" target="_blank" rel="noreferrer">Official case page and printable flyer ↗</a></article>
    `);
  }
  if (researchGrid && !Array.from(researchGrid.querySelectorAll('h3')).some((heading) => heading.textContent.trim() === 'Bellport Jane Doe · Michigan Avenue')) {
    researchGrid.insertAdjacentHTML('afterbegin', `
      <article><span>05</span><h3>Bellport Jane Doe · Michigan Avenue</h3><p>Suffolk County’s 2026 cold-case page confirms that the unidentified woman known as Marie or Maria lived on Michigan Avenue in Bellport and rented from Arthur Kinlaw. An inquiry was sent August 7, 2026 to the Bellport-Brookhaven Historical Society seeking period directories, tax maps, address files, photographs, and clipping files to identify the exact residence and occupants.</p><a href="https://www.suffolkcountyda.org/cold_case/bellport-jane-doe/" target="_blank" rel="noreferrer">Suffolk County official cold-case update ↗</a></article>
    `);
  }
  if (researchGrid && !Array.from(researchGrid.querySelectorAll('h3')).some((heading) => heading.textContent.trim() === 'Pamela Walton · 319 Walnut official sources')) {
    researchGrid.insertAdjacentHTML('afterbegin', `
      <article><span>06</span><h3>Pamela Walton · 319 Walnut official sources</h3><p>The June 1988 court listing gives Pamela’s address as 319 Walnut in Carlisle. The National Park Service’s Carlisle Historic District inventory separately identifies 319 Walnut as a circa-1900 residential house. Nicholas County PVA is already researching the historical ownership through handwritten 1988 property cards following an August 6 legacy-email exchange with Jackie M. Earlywine, who promised to send what she can find after returning August 10.</p><a href="https://npgallery.nps.gov/GetAsset/e70fafe5-8a52-4040-bf8d-9385db8bf692/" target="_blank" rel="noreferrer">NPS Carlisle Historic District inventory ↗</a><br><a href="https://nicholascounty.ky.gov/elected/PVA/Pages/default.aspx" target="_blank" rel="noreferrer">Nicholas County PVA ↗</a></article>
    `);
  }

  document.querySelectorAll('a[href="documents/wanda-line-fcso-redacted-incident-report-2026-08-07.pdf"]').forEach((link) => {
    link.href = 'documents/wanda-line-fcso-redacted-incident-report-2026-08-07.html';
    if (link.textContent.includes('PDF')) {
      link.textContent = link.textContent.replace('PDF', 'record');
    }
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

      items.forEach((item, index) => {
        item.hidden = index < start || index >= end;
      });

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

    newer.addEventListener('click', () => {
      if (page > 0) moveToPage(page - 1);
    });

    older.addEventListener('click', () => {
      if (page < totalPages - 1) moveToPage(page + 1);
    });

    render();
  });
})();
