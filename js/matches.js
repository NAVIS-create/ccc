const matchData = [
  // T20 MAJOR LEAGUE
  {
    tournament: 't20',
    type: 'upcoming',
    date: 'Fri, 15 May • 14:00 LKT',
    teams: 'Baduraliya CC vs CCC',
    venue: 'P. Sara Oval',
    result: null,
    score: null,
    highlight: null,
    url: null
  },
  {
    tournament: 't20',
    type: 'upcoming',
    date: 'Sun, 17 May • 09:45 LKT',
    teams: 'Kurunegala YCC vs CCC',
    venue: 'Colts CC Ground',
    result: null,
    score: null,
    highlight: null,
    url: null
  },
  {
    tournament: 't20',
    type: 'upcoming',
    date: 'Tue, 19 May • 09:45 LKT',
    teams: 'CCC vs Nugegoda S & WC',
    venue: 'SSC Ground',
    result: null,
    score: null,
    highlight: null,
    url: null
  },
  {
    tournament: 't20',
    type: 'upcoming',
    date: 'Sat, 23 May • 09:45 LKT',
    teams: 'BRC vs CCC',
    venue: 'P. Sara Oval',
    result: null,
    score: null,
    highlight: null,
    url: null
  },
  {
    tournament: 't20',
    type: 'upcoming',
    date: 'Mon, 25 May • 14:00 LKT',
    teams: 'CCC vs Moors SC',
    venue: 'P. Sara Oval',
    result: null,
    score: null,
    highlight: null,
    url: null
  },
  {
    tournament: 't20',
    type: 'past',
    date: 'Group Stage • Fri, 16 May 2025',
    teams: 'CCC vs Ace Capital CC',
    venue: 'Colombo (PSS)',
    result: 'Won by 6 wkts',
    score: null,
    highlight: null,
    url: 'https://www.espncricinfo.com/series/major-clubs-t20-tournament-2025-1485289/ace-capital-cricket-club-vs-colombo-cricket-club-group-a-1485292/full-scorecard'
  },
  {
    tournament: 't20',
    type: 'past',
    date: 'Group Stage • Sun, 25 May 2025',
    teams: 'CCC vs Moors Sports Club',
    venue: 'Colombo (SSC)',
    result: 'Lost by 11 runs',
    score: null,
    highlight: null,
    url: 'https://www.espncricinfo.com/series/major-clubs-t20-tournament-2025-1485289/moors-sports-club-vs-colombo-cricket-club-group-a-1485296/full-scorecard'
  },
  {
    tournament: 't20',
    type: 'past',
    date: 'Group Stage • Mon, 26 May 2025',
    teams: 'CCC vs Badureliya Sports Club',
    venue: 'Colombo (PSS)',
    result: 'Match abandoned',
    score: null,
    highlight: null,
    url: 'https://www.espncricinfo.com/series/major-clubs-t20-tournament-2025-1485289/colombo-cricket-club-vs-badureliya-sports-club-group-a-1485303/full-scorecard'
  },
  {
    tournament: 't20',
    type: 'past',
    date: 'Group Stage • Wed, 28 May 2025',
    teams: 'CCC vs Nondescripts CC',
    venue: 'Colombo (PSS)',
    result: 'Match abandoned',
    score: null,
    highlight: null,
    url: 'https://www.espncricinfo.com/series/major-clubs-t20-tournament-2025-1485289/nondescripts-cricket-club-vs-colombo-cricket-club-group-a-1485308/full-scorecard'
  },
  {
    tournament: 't20',
    type: 'past',
    date: 'Group Stage • Fri, 06 Jun 2025',
    teams: 'CCC vs Kurunegala Youth CC',
    venue: 'Colombo (SSC)',
    result: 'Won by 144 runs',
    score: null,
    highlight: null,
    url: 'https://www.espncricinfo.com/series/major-clubs-t20-tournament-2025-1485289/colombo-cricket-club-vs-kurunegala-youth-cricket-club-group-a-1485323/full-scorecard'
  },
  {
    tournament: 't20',
    type: 'past',
    date: 'Group Stage • Sun, 08 Jun 2025',
    teams: 'CCC vs Panadura Sports Club',
    venue: 'Colombo (PSS)',
    result: 'Lost by 7 runs',
    score: null,
    highlight: null,
    url: 'https://www.espncricinfo.com/series/major-clubs-t20-tournament-2025-1485289/colombo-cricket-club-vs-panadura-sports-club-group-a-1485326/full-scorecard'
  },
  {
    tournament: 't20',
    type: 'past',
    date: 'Quarter-Final • Wed, 11 Jun 2025',
    teams: 'CCC vs Burgher Recreation Club',
    venue: 'Colombo (PSS)',
    result: 'Won by 17 runs (DLS)',
    score: null,
    highlight: null,
    url: 'https://www.espncricinfo.com/series/major-clubs-t20-tournament-2025-1485289/burgher-recreation-club-vs-colombo-cricket-club-2nd-quarter-final-1485333/full-scorecard'
  },
  {
    tournament: 't20',
    type: 'past',
    date: 'Semi-Final • Fri, 13 Jun 2025',
    teams: 'CCC vs Moors Sports Club',
    venue: 'Colombo (CCC)',
    result: 'Won by 8 wkts',
    score: null,
    highlight: null,
    url: 'https://www.espncricinfo.com/series/major-clubs-t20-tournament-2025-1485289/colombo-cricket-club-vs-moors-sports-club-2nd-semi-final-1485337/full-scorecard'
  },
  {
    tournament: 't20',
    type: 'past',
    date: 'Final • Sun, 15 Jun 2025',
    teams: 'CCC vs Panadura Sports Club',
    venue: 'Colombo (CCC)',
    result: 'Won by 6 wkts',
    score: 'Panadura 172/8 <br> CCC 174/4',
    highlight: '🏆 2025 MAJOR CLUB T20 CHAMPIONS',
    url: 'https://www.espncricinfo.com/series/major-clubs-t20-tournament-2025-1485289/panadura-sports-club-vs-colombo-cricket-club-final-1485338/full-scorecard'
  },
  
  // LIMITED OVER
  {
    tournament: 'limited_over',
    type: 'past',
    date: 'Group Stage • Fri, 27 Jun 2025',
    teams: 'CCC vs Colts Cricket Club',
    venue: 'Colombo (Colts)',
    result: 'Won by 7 wkts',
    score: null,
    highlight: null,
    url: 'https://www.espncricinfo.com/series/major-clubs-limited-over-tournament-2025-1490240/colts-cricket-club-vs-colombo-cricket-club-group-b-1490257/full-scorecard'
  },
  {
    tournament: 'limited_over',
    type: 'past',
    date: 'Group Stage • Tue, 01 Jul 2025',
    teams: 'CCC vs Burgher Recreation Club',
    venue: 'Colombo (Burgher)',
    result: 'Won by 2 wkts',
    score: null,
    highlight: null,
    url: 'https://www.espncricinfo.com/series/major-clubs-limited-over-tournament-2025-1490240/burgher-recreation-club-vs-colombo-cricket-club-group-b-1490263/full-scorecard'
  },
  {
    tournament: 'limited_over',
    type: 'past',
    date: 'Group Stage • Sat, 05 Jul 2025',
    teams: 'CCC vs Moors Sports Club',
    venue: 'Colombo (CCC)',
    result: 'Lost by 7 wkts',
    score: null,
    highlight: null,
    url: 'https://www.espncricinfo.com/series/major-clubs-limited-over-tournament-2025-1490240/colombo-cricket-club-vs-moors-sports-club-group-b-1490269/full-scorecard'
  },
  {
    tournament: 'limited_over',
    type: 'past',
    date: 'Group Stage • Sun, 13 Jul 2025',
    teams: 'CCC vs Kurunegala Youth CC',
    venue: 'Colombo (CCC)',
    result: 'Won by 6 wkts',
    score: null,
    highlight: null,
    url: 'https://www.espncricinfo.com/series/major-clubs-limited-over-tournament-2025-1490240/colombo-cricket-club-vs-kurunegala-youth-cricket-club-group-b-1490281/full-scorecard'
  },
  {
    tournament: 'limited_over',
    type: 'past',
    date: 'Group Stage • Thu, 17 Jul 2025',
    teams: 'CCC vs Bloomfield C & AC',
    venue: 'Colombo (CCC)',
    result: 'Won by 134 runs',
    score: null,
    highlight: null,
    url: 'https://www.espncricinfo.com/series/major-clubs-limited-over-tournament-2025-1490240/colombo-cricket-club-vs-bloomfield-cricket-and-athletic-club-group-b-1490245/full-scorecard'
  },
  {
    tournament: 'limited_over',
    type: 'past',
    date: 'Group Stage • Mon, 21 Jul 2025',
    teams: 'CCC vs Nugegoda SWC',
    venue: 'Colombo (CCC)',
    result: 'Won by 7 wkts (DLS)',
    score: null,
    highlight: null,
    url: 'https://www.espncricinfo.com/series/major-clubs-limited-over-tournament-2025-1490240/nugegoda-sports-welfare-club-vs-colombo-cricket-club-group-b-1490251/full-scorecard'
  },
  {
    tournament: 'limited_over',
    type: 'past',
    date: 'Semi-Final • Sun, 27 Jul 2025',
    teams: 'CCC vs Tamil Union C & AC',
    venue: 'Colombo (CCC)',
    result: 'Won by 68 runs',
    score: null,
    highlight: null,
    url: 'https://www.espncricinfo.com/series/major-clubs-limited-over-tournament-2025-1490240/colombo-cricket-club-vs-tamil-union-cricket-and-athletic-club-2nd-semi-final-1490285/full-scorecard'
  },
  {
    tournament: 'limited_over',
    type: 'past',
    date: 'Final • Wed, 30 Jul 2025',
    teams: 'CCC vs Police Sports Club',
    venue: 'Colombo (CCC)',
    result: 'Won by 187 runs',
    score: null,
    highlight: '🏆 2025 LIMITED OVER CHAMPIONS',
    url: 'https://www.espncricinfo.com/series/major-clubs-limited-over-tournament-2025-1490240/police-sports-club-vs-colombo-cricket-club-final-1490286/full-scorecard'
  },

  // 3 DAY
  {
    tournament: '3day',
    type: 'past',
    date: 'Group Stage • Dec 06 - 08, 2025',
    teams: 'CCC vs Nugegoda Sports Welfare Club',
    venue: 'Colombo (SSC)',
    result: 'Match drawn',
    score: null,
    highlight: null,
    url: 'https://www.espncricinfo.com/series/major-league-tournament-2025-26-1511626/nugegoda-sports-welfare-club-vs-colombo-cricket-club-group-a-1511634/full-scorecard'
  },
  {
    tournament: '3day',
    type: 'past',
    date: 'Group Stage • Dec 12 - 14, 2025',
    teams: 'CCC vs Bloomfield C&AC',
    venue: 'Galle',
    result: 'Match drawn',
    score: null,
    highlight: null,
    url: 'https://www.espncricinfo.com/series/major-league-tournament-2025-26-1511626/colombo-cricket-club-vs-bloomfield-cricket-and-athletic-club-group-a-1511639/full-scorecard'
  },
  {
    tournament: '3day',
    type: 'past',
    date: 'Group Stage • Dec 27 - 29, 2025',
    teams: 'CCC vs Colts Cricket Club',
    venue: 'Colombo (PSS)',
    result: 'Match drawn',
    score: null,
    highlight: null,
    url: 'https://www.espncricinfo.com/series/major-league-tournament-2025-26-1511626/colombo-cricket-club-vs-colts-cricket-club-group-a-1511652/full-scorecard'
  },
  {
    tournament: '3day',
    type: 'past',
    date: 'Group Stage • Jan 02 - 04, 2026',
    teams: 'CCC vs Chilaw Marians CC',
    venue: 'Colombo (Colts)',
    result: 'Won by 9 wkts',
    score: null,
    highlight: null,
    url: 'https://www.espncricinfo.com/series/major-league-tournament-2025-26-1511626/colombo-cricket-club-vs-chilaw-marians-cricket-club-group-a-1511658/full-scorecard'
  },
  {
    tournament: '3day',
    type: 'past',
    date: 'Group Stage • Jan 09 - 11, 2026',
    teams: 'CCC vs Panadura Sports Club',
    venue: 'Galle',
    result: 'Match drawn',
    score: null,
    highlight: null,
    url: 'https://www.espncricinfo.com/series/major-league-tournament-2025-26-1511626/colombo-cricket-club-vs-panadura-sports-club-group-a-1511664/full-scorecard'
  },
  {
    tournament: '3day',
    type: 'past',
    date: 'Group Stage • Jan 17 - 19, 2026',
    teams: 'CCC vs Police Sports Club',
    venue: 'Colombo (NCC)',
    result: 'Match drawn',
    score: null,
    highlight: null,
    url: 'https://www.espncricinfo.com/series/major-league-tournament-2025-26-1511626/police-sports-club-vs-colombo-cricket-club-group-a-1511629/full-scorecard'
  },
  {
    tournament: '3day',
    type: 'past',
    date: 'Super Eight • Mar 06 - 08, 2026',
    teams: 'CCC vs Nondescripts CC',
    venue: 'Colombo (Colts)',
    result: 'Match drawn',
    score: null,
    highlight: null,
    url: 'https://www.espncricinfo.com/series/major-league-tournament-2025-26-1511626/colombo-cricket-club-vs-nondescripts-cricket-club-super-eight-1511673/full-scorecard'
  },
  {
    tournament: '3day',
    type: 'past',
    date: 'Super Eight • Mar 13 - 15, 2026',
    teams: 'CCC vs Burgher Recreation Club',
    venue: 'Pallekele',
    result: 'Match drawn',
    score: null,
    highlight: null,
    url: 'https://www.espncricinfo.com/series/major-league-tournament-2025-26-1511626/burgher-recreation-club-vs-colombo-cricket-club-super-eight-1511680/full-scorecard'
  },
  {
    tournament: '3day',
    type: 'past',
    date: 'Super Eight • Mar 20 - 22, 2026',
    teams: 'CCC vs Ace Capital CC',
    venue: 'Colombo (Colts)',
    result: 'Match drawn',
    score: null,
    highlight: null,
    url: 'https://www.espncricinfo.com/series/major-league-tournament-2025-26-1511626/colombo-cricket-club-vs-ace-capital-cricket-club-super-eight-1511687/full-scorecard'
  },
  {
    tournament: '3day',
    type: 'past',
    date: 'Super Eight • Mar 28 - 30, 2026',
    teams: 'CCC vs Moors Sports Club',
    venue: 'Colombo (RPS)',
    result: 'Match drawn',
    score: null,
    highlight: null,
    url: 'https://www.espncricinfo.com/series/major-league-tournament-2025-26-1511626/moors-sports-club-vs-colombo-cricket-club-super-eight-1511691/full-scorecard'
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const upcomingContainer = document.getElementById('upcoming-list');
  const pastContainer = document.getElementById('past-list');
  const filterSelect = document.getElementById('tournament-filter');
  
  if (!upcomingContainer || !pastContainer || !filterSelect) return;

  function renderMatches(filter) {
    upcomingContainer.innerHTML = '';
    pastContainer.innerHTML = '';
    
    // Default should be the current list (t20) if default or filter applied
    let filteredData = matchData;
    if (filter !== 'all') {
      filteredData = matchData.filter(m => m.tournament === filter);
    } else {
      // "Default" as requested: which means showing what's currently there (mostly T20)
      filteredData = matchData.filter(m => m.tournament === 't20');
    }

    const upcoming = filteredData.filter(m => m.type === 'upcoming');
    const past = filteredData.filter(m => m.type === 'past');

    if (upcoming.length === 0) {
      upcomingContainer.innerHTML = '<p style="text-align:center; color: var(--text-muted);">No upcoming fixtures announced for this tournament.</p>';
    } else {
      upcoming.forEach(m => upcomingContainer.appendChild(createMatchRow(m)));
    }
    
    if (past.length === 0) {
      pastContainer.innerHTML = '<p style="text-align:center; color: var(--text-muted);">No past results available for this tournament.</p>';
    } else {
      past.forEach(m => pastContainer.appendChild(createMatchRow(m)));
    }
  }

  function createMatchRow(match) {
    const row = document.createElement('div');
    row.className = 'match-row';
    
    let highlightBox = '';
    if (match.highlight) {
      row.style.borderColor = '#ffd700';
      row.style.boxShadow = '0 0 15px rgba(255, 215, 0, 0.2)';
      highlightBox = `<div class="match-date" style="color: #ffd700; font-weight: 800; font-size: 0.95rem; letter-spacing: 1px;">${match.highlight}</div>`;
    } else {
      highlightBox = `<div class="match-date" style="color:var(--text-muted);">${match.tournament.toUpperCase().replace('_', ' ')} • ${match.date}</div>`;
    }

    let urlHtml = match.url ? `<br><a href="${match.url}" target="_blank" style="color: var(--accent-color); text-decoration: underline; font-size: 0.85rem;">View Full Scorecard</a>` : '';

    let resultHtml = '';
    if (match.type === 'upcoming') {
      resultHtml = `<div class="status upcoming">Upcoming</div>`;
    } else {
      let statusClass = match.result.includes('Won') ? 'won' : (match.result.includes('Lost') ? 'lost' : 'upcoming');
      let statusStyle = match.highlight ? 'style="background: rgba(255, 215, 0, 0.15); color: #ffd700; border: 1px solid #ffd700; font-size: 0.85rem;"' : '';
      resultHtml = `
        <div class="score">${match.score || ''}</div>
        <div class="status ${statusClass}" ${statusStyle}>${match.result}</div>
      `;
    }

    row.innerHTML = `
      <div class="match-info">
        ${highlightBox}
        <div class="match-teams">${match.teams}</div>
        <div class="match-venue">${match.venue} ${urlHtml}</div>
      </div>
      <div class="match-result">
        ${resultHtml}
      </div>
    `;
    return row;
  }

  // Event listener
  filterSelect.addEventListener('change', (e) => {
    renderMatches(e.target.value);
  });

  // Initial render default
  renderMatches('all');
});
