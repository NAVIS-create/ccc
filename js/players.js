const players = [
  { name: "Kamindu Mendis", role: "All-Rounder", type: "allrounder", matches: 60, runs: 2150, wickets: 30, img: "images/players/kamindu_mendis.jpg", cricinfo: "https://www.espncricinfo.com/cricketers/kamindu-mendis-784373" },
  { name: "Lakshan Sandakan", role: "Head Coach & Bowler", type: "bowler", matches: 95, runs: 210, wickets: 145, img: "images/players/lakshan_sandakan.jpg", cricinfo: "https://www.espncricinfo.com/cricketers/lakshan-sandakan-429738" },
  { name: "Isuru Udana", role: "Bowler", type: "bowler", matches: 150, runs: 1200, wickets: 160, img: "images/players/isuru_udana.jpg", cricinfo: "https://www.espncricinfo.com/cricketers/isuru-udana-328026" },
  { name: "Nishan Madhushka", role: "WK Batter", type: "batter", matches: 45, runs: 1800, wickets: 0, img: "images/players/nishan_madhushka.jpg", cricinfo: "https://www.espncricinfo.com/cricketers/nishan-madushka-1126045" },
  { name: "Vishwa Fernando", role: "Bowler", type: "bowler", matches: 70, runs: 150, wickets: 120, img: "images/players/vishwa_fernando.jpg", cricinfo: "https://www.espncricinfo.com/cricketers/vishwa-fernando-465783" },
  { name: "Pawan Sandesh", role: "Batter", type: "batter", matches: 15, runs: 450, wickets: 2, img: "images/players/pawan_sandesh.jpg", cricinfo: "https://www.espncricinfo.com/cricketers/pawan-sandesh-1253695" },
  { name: "Inuka Karannagoda", role: "All-Rounder", type: "allrounder", matches: 10, runs: 45, wickets: 12, img: "images/players/inuka_karannagoda.jpg", cricinfo: "https://www.espncricinfo.com/cricketers/inuka-karannagoda-1439006" },
  { name: "Gamage Sonal Dinusha", role: "Captain / All-Rounder", type: "allrounder", matches: 30, runs: 650, wickets: 25, img: "images/players/gamage_sonal_dinusha.jpg", cricinfo: "https://www.espncricinfo.com/cricketers/sonal-dinusha-1153148" },
  { name: "Chamindu Wijesinghe", role: "All-Rounder", type: "allrounder", matches: 25, runs: 500, wickets: 20, img: "images/players/chamindu_wijesinghe.jpg", cricinfo: "https://www.espncricinfo.com/cricketers/chamindu-wijesinghe-1162378" },
  { name: "Dhananjaya de Silva", role: "All-Rounder", type: "allrounder", matches: 160, runs: 4500, wickets: 110, img: "images/players/dhananjaya_de_silva.jpg", cricinfo: "https://www.espncricinfo.com/cricketers/dhananjaya-de-silva-465793" },
  { name: "Pavan Rathnayaka", role: "Batter", type: "batter", matches: 20, runs: 750, wickets: 0, img: "images/players/pavan_rathnayaka.jpg", cricinfo: "https://www.espncricinfo.com/cricketers/pavan-rathnayake-1171180" },
  { name: "Lasith Roospulle", role: "Batter", type: "batter", matches: 40, runs: 1300, wickets: 0, img: "images/players/lasith_roospulle.jpg", cricinfo: "https://www.espncricinfo.com/cricketers/lasith-croospulle-1027867" },
  { name: "Nishan Peiris", role: "Bowler", type: "bowler", matches: 35, runs: 120, wickets: 60, img: "images/players/nishan_peiris.jpg", cricinfo: "https://www.espncricinfo.com/cricketers/nishan-peiris-821573" },
  { name: "Wanindu Hasaranga", role: "All-Rounder", type: "allrounder", matches: 120, runs: 1800, wickets: 200, img: "images/players/wanindu_hasaranga.jpg", cricinfo: "https://www.espncricinfo.com/cricketers/wanindu-hasaranga-784379" },
  { name: "Anjala Bandara", role: "WK Batter", type: "batter", matches: 12, runs: 340, wickets: 0, img: "images/players/anjala_bandara.jpg", cricinfo: "https://www.espncricinfo.com/cricketers/anjala-bandara-1291678" },
  { name: "Sahan Kosala", role: "Batter", type: "batter", matches: 8, runs: 25, wickets: 15, img: "images/players/sahan_kosala.jpg", cricinfo: "https://www.espncricinfo.com/cricketers/sahan-kosala-1286948" },
  { name: "Duvindu Ranatunga", role: "Bowler", type: "bowler", matches: 18, runs: 60, wickets: 25, img: "images/players/duvindu_ranatunga.jpg", cricinfo: "https://www.espncricinfo.com/cricketers/duvindu-ranatunga-1301883" },
  { name: "Asitha Fernando", role: "Bowler", type: "bowler", matches: 65, runs: 110, wickets: 130, img: "images/players/asitha_fernando.jpg", cricinfo: "https://www.espncricinfo.com/cricketers/asitha-fernando-786925" },
  { name: "Thisaru Wanninayake", role: "Bowler", type: "bowler", matches: 15, runs: 410, wickets: 0, img: "images/players/thisaru_wanninayake.jpg", cricinfo: "https://www.espncricinfo.com/cricketers/thisaru-wanninayake-1439005" },
  { name: "Ashen Bandara", role: "All-Rounder", type: "allrounder", matches: 40, runs: 900, wickets: 15, img: "images/players/ashen_bandara.jpg", cricinfo: "https://www.espncricinfo.com/cricketers/ashen-bandara-958691" },
  { name: "Dilum Sudeera", role: "Bowler", type: "bowler", matches: 22, runs: 85, wickets: 45, img: "images/players/dilum_sudeera.jpg", cricinfo: "https://www.espncricinfo.com/cricketers/dilum-sudeera-792615" }
];

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('players-grid');
  const featuredGrid = document.getElementById('featured-players-grid');
  const buttons = document.querySelectorAll('.filter-btn');

  function createPlayerCard(player) {
    const card = document.createElement('div');
    card.className = 'card player-card profile-animated';
    
    // Create an anchor id for scrolling
    const playerId = 'player-' + player.name.replace(/\s+/g, '-').toLowerCase();
    card.id = playerId;
    
    // Style to make clicking intuitive
    card.style.cursor = 'pointer';
    card.onclick = (e) => {
      // If clicked from the featured grid on home page, navigate to the squad roster
      // Otherwise (on players page), open Cricinfo
      if (card.parentElement && card.parentElement.id === 'featured-players-grid') {
        window.location.href = 'players.html#' + playerId;
      } else if(player.cricinfo) {
        window.open(player.cricinfo, '_blank');
      }
    };
    
    const imgCont = document.createElement('div');
    imgCont.style.cssText = 'background:#111; height:260px; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden;';
    const img = document.createElement('img');
    img.src = player.img;
    img.alt = player.name;
    
    // Fallback image in case the user hasn't uploaded a photo for this specific player yet
    img.onerror = function() {
      this.onerror = null; // Prevent infinite loops
      this.src = 'images/player_action.png'; // Revert to cool action silhouette
    };

    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    img.style.opacity = '0.6';
    img.style.transition = 'opacity 0.3s';
    
    // Add hover effect logic for images
    card.addEventListener('mouseenter', () => img.style.opacity = '1');
    card.addEventListener('mouseleave', () => img.style.opacity = '0.6');

    imgCont.appendChild(img);
    
    const info = document.createElement('div');
    info.className = 'player-info';
    info.style.cssText = 'padding: 1rem; text-align: center; border-top: 2px solid var(--accent-color);';
    
    info.innerHTML = `
      <h3 style="transition: color 0.3s; font-size: 1.1rem; margin-bottom: 0.2rem;" onmouseover="this.style.color='var(--accent-color)'" onmouseout="this.style.color='inherit'">${player.name}</h3>
      <p style="font-size: 0.8rem; margin-bottom: 0; color: var(--text-muted); text-transform: uppercase; font-weight: 600;">${player.role}</p>
    `;
    
    card.appendChild(imgCont);
    card.appendChild(info);
    
    return card;
  }

  function renderPlayers(filterType) {
    if (!grid) return;
    grid.innerHTML = '';
    
    const filtered = filterType === 'all' 
      ? players 
      : players.filter(p => p.type === filterType);
      
    filtered.forEach((player) => {
      grid.appendChild(createPlayerCard(player));
    });
  }

  // Initial render
  if(grid) {
    renderPlayers('all');
  }

  // Render featured players on homepage
  if(featuredGrid) {
    const featuredNames = ["Kamindu Mendis", "Wanindu Hasaranga", "Vishwa Fernando", "Nishan Madhushka"];
    featuredNames.forEach(name => {
      const player = players.find(p => p.name === name);
      if(player) {
        featuredGrid.appendChild(createPlayerCard(player));
      }
    });
  }

  // Filter logic
  if(buttons.length > 0) {
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all
        buttons.forEach(b => b.classList.remove('active'));
        // Add active to current
        btn.classList.add('active');
        // Render
        renderPlayers(btn.getAttribute('data-filter'));
      });
    });
  }
});
