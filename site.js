(() => {
  const caseUpdates = [
    {
      title: 'Jane Los Angeles Doe',
      status: 'ID Unit response · clarification pending',
      focus: 'Los Angeles County Medical Examiner’s Identification Unit says older unidentified cases are routinely reviewed for new law-enforcement leads, technological advances, and public information. The office also confirmed that purchasing the archived Medical Examiner report would not include copies of the decedent’s fingerprints, DNA reports, dental X-rays, or names of excluded individuals. Open Case Ledger has asked a follow-up to confirm whether case 89-05285 remains unidentified and active, whether fingerprints, dental records, a DNA profile, and retained biological samples exist, and whether forensic genetic genealogy has been reviewed.'
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
