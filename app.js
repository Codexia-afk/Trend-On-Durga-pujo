/* ==========================================================================
   Durga Puja Songs - Retro AI Shopfront Main Application (YouTube Engine)
   ========================================================================== */

(function () {
  'use strict';

  // ==========================================================================
  // TABBED PLAYLIST ARRAYS (EASILY EDITABLE YOUTUBE VIDEO IDs & METADATA)
  // Replace placeholder videoId values with your desired YouTube Video IDs!
  // ==========================================================================

  // TAB 1: "নস্টালজিয়া" (Nostalgia - Classic Adhunik Puja Anthems - Loops Forever)
  const playlistNostalgia = [
    // --- Kishore Kumar Top 20 Pujo Hits (Gpg59ohCPcY) ---
    {
      videoId: "Gpg59ohCPcY",
      startTime: 5,
      title: "সেই রাতে রাত ছিল পূর্ণিমা (Sei Raate Raat Chhilo)",
      artist: "কিশোর কুমার • Top 20 Pujo Hits",
      era: "নস্টালজিয়া • ক্লাসিক হিটস"
    },
    {
      videoId: "Gpg59ohCPcY",
      startTime: 248,
      title: "নয়ন সরসী কেন ভরেছে জলে (Nayan Sarasi Keno)",
      artist: "কিশোর কুমার • Top 20 Pujo Hits",
      era: "নস্টালজিয়া • পূজা নস্টালজিয়া"
    },
    {
      videoId: "Gpg59ohCPcY",
      startTime: 455,
      title: "তারে আমি চোখে দেখিনি (Tare Ami Chokhe Dekhini)",
      artist: "কিশোর কুমার • Top 20 Pujo Hits",
      era: "নস্টালজিয়া • রেডিও হিটস"
    },
    {
      videoId: "Gpg59ohCPcY",
      startTime: 642,
      title: "এক দিন পাখি উড়ে যাবে (Ek Din Pakhi Ure Jabe)",
      artist: "কিশোর কুমার • Top 20 Pujo Hits",
      era: "নস্টালজিয়া • শারদীয় সুর"
    },
    {
      videoId: "Gpg59ohCPcY",
      startTime: 840,
      title: "আকাশ কেন ডাকে (Akash Keno Daake)",
      artist: "কিশোর কুমার • Top 20 Pujo Hits",
      era: "নস্টালজিয়া • পূজার ক্লাসিক"
    },
    {
      videoId: "Gpg59ohCPcY",
      startTime: 1040,
      title: "আমি নেই আমি নেই (Ami Nei, Ami Nei)",
      artist: "কিশোর কুমার • Top 20 Pujo Hits",
      era: "নস্টালজিয়া • মেলোডি"
    },
    {
      videoId: "Gpg59ohCPcY",
      startTime: 1241,
      title: "সেদিনও আকাশে ছিল কত তারা (Sedino Akashe Chhilo)",
      artist: "কিশোর কুমার • Top 20 Pujo Hits",
      era: "নস্টালজিয়া • শারদীয় সান্ধ্য"
    },
    {
      videoId: "Gpg59ohCPcY",
      startTime: 1442,
      title: "সে তো এলো না (Se To Elo Na)",
      artist: "কিশোর কুমার • Top 20 Pujo Hits",
      era: "নস্টালজিয়া • মেলোডি ক্লাসিক"
    },
    {
      videoId: "Gpg59ohCPcY",
      startTime: 1633,
      title: "আমার মনের এই ময়ূরমহলে (Amar Moner Ei Mayurmahale)",
      artist: "কিশোর কুমার • Top 20 Pujo Hits",
      era: "নস্টালজিয়া • রোমান্টিক হিটস"
    },
    {
      videoId: "Gpg59ohCPcY",
      startTime: 1823,
      title: "হাওয়া মেঘ সরায়ে ফুল ঝরায়ে (Haowa Megh Saraye)",
      artist: "কিশোর কুমার • Top 20 Pujo Hits",
      era: "নস্টালজিয়া • নস্টালজিক ভলিউম"
    },
    {
      videoId: "Gpg59ohCPcY",
      startTime: 2109,
      title: "এই যে নদী যায় সাগরে (Ei Je Nadi Jay Sagare)",
      artist: "কিশোর কুমার • Top 20 Pujo Hits",
      era: "নস্টালজিয়া • গোল্ডেন ভয়েস"
    },
    {
      videoId: "Gpg59ohCPcY",
      startTime: 2317,
      title: "চলো যাই চলে যাই (Chalo Jai Chole Jai)",
      artist: "কিশোর কুমার • Top 20 Pujo Hits",
      era: "নস্টালজিয়া • পূজার উৎসব"
    },

    // --- Asha Bhosle Top 20 Bangla Songs (Czv94PNbV6Y) ---
    {
      videoId: "Czv94PNbV6Y",
      startTime: 0,
      title: "তুমি আমার নয়ন গো (Tumi Amar Nayan Go)",
      artist: "আশা ভোঁসলে • Top 20 Bangla Songs",
      era: "নস্টালজিয়া • গোল্ডেন মেলোডি"
    },
    {
      videoId: "Czv94PNbV6Y",
      startTime: 433,
      title: "কথা দিলাম (Katha Dilam)",
      artist: "আশা ভোঁসলে • Top 20 Bangla Songs",
      era: "নস্টালজিয়া • অল টাইম হিটস"
    },
    {
      videoId: "Czv94PNbV6Y",
      startTime: 721,
      title: "জীবনের সার তুমি প্রভু (Jibonero Sar Tumi Probhu)",
      artist: "আশা ভোঁসলে • Top 20 Bangla Songs",
      era: "নস্টালজিয়া • পূজার আবহ"
    },
    {
      videoId: "Czv94PNbV6Y",
      startTime: 1026,
      title: "বলো বলো তুমি মোরে (Bolo Bolo Tumi More)",
      artist: "আশা ভোঁসলে • Top 20 Bangla Songs",
      era: "নস্টালজিয়া • নস্টালজিক সুর"
    },
    {
      videoId: "Czv94PNbV6Y",
      startTime: 1358,
      title: "এসো আলো এহো হে (Eso Aalo Eho Hey)",
      artist: "আশা ভোঁসলে • Top 20 Bangla Songs",
      era: "নস্টালজিয়া • ভক্তি ও সুর"
    },
    {
      videoId: "Czv94PNbV6Y",
      startTime: 1650,
      title: "বাজলো যে ঘুঙুর (Bajlo Je Ghunghroo)",
      artist: "আশা ভোঁসলে • Top 20 Bangla Songs",
      era: "নস্টালজিয়া • পপ মেলোডি"
    },
    {
      videoId: "Czv94PNbV6Y",
      startTime: 1983,
      title: "মন বলছে কেউ আসবে (Mon Bolche Keu Asbe)",
      artist: "আশা ভোঁসলে • Top 20 Bangla Songs",
      era: "নস্টালজিয়া • পূজা নস্টালজিয়া"
    },
    {
      videoId: "Czv94PNbV6Y",
      startTime: 2195,
      title: "কোথায় রাখবো প্রেম (Kothay Rakhbo Prem)",
      artist: "আশা ভোঁসলে • Top 20 Bangla Songs",
      era: "নস্টালজিয়া • ক্লাসিক লাভ"
    },
    {
      videoId: "Czv94PNbV6Y",
      startTime: 2577,
      title: "আজ আমি অচেনা যে (Aaj Ami Achena Je)",
      artist: "আশা ভোঁসলে • Top 20 Bangla Songs",
      era: "নস্টালজিয়া • নস্টালজিক হিট"
    },
    {
      videoId: "Czv94PNbV6Y",
      startTime: 2897,
      title: "হরে কৃষ্ণ হরে কৃষ্ণ (Hare Krishna Hare Krishna)",
      artist: "আশা ভোঁসলে • Top 20 Bangla Songs",
      era: "নস্টালজিয়া • ভক্তি সঙ্গীত"
    },

    // --- Mita Chatterjee Pujo Special (v-5t7SVVEQw) ---
    {
      videoId: "v-5t7SVVEQw",
      startTime: 0,
      title: "মিটা চ্যাটার্জি পূজার স্পেশাল গান (Mita Chatterjee Special)",
      artist: "মিটা চ্যাটার্জি • Pujo Special Jukebox",
      era: "নস্টালজিয়া • পূজার গান"
    },
    {
      videoId: "v-5t7SVVEQw",
      startTime: 150,
      title: "বেজেছে বাদ্য ঢাকের (Bejeche Baddi Dhaker)",
      artist: "মিটা চ্যাটার্জি • Pujo Special Jukebox",
      era: "নস্টালজিয়া • শারদীয় আগমনী"
    },
    {
      videoId: "v-5t7SVVEQw",
      startTime: 300,
      title: "পূজোয় এবার চাইনা আমার বেনারসী শাড়ি",
      artist: "মিটা চ্যাটার্জি • Pujo Special Jukebox",
      era: "নস্টালজিয়া • গোল্ডেন এরা"
    },
    {
      videoId: "v-5t7SVVEQw",
      startTime: 480,
      title: "যারে পাখি যারে উড়ে (Ja Pakhi Jare Ure)",
      artist: "মিটা চ্যাটার্জি • Pujo Special Jukebox",
      era: "নস্টালজিয়া • চিরসবুজ মেলোডি"
    },
    {
      videoId: "b62Q5qgWbS4",
      startTime: 0,
      title: "আহা কি আনন্দ আকাশে বাতাসে",
      artist: "সত্যজিৎ রায় • হীরক রাজার দেশে",
      era: "নস্টালজিয়া • ক্লাসিক"
    }
  ];

  // TAB 2: "মহিষাসুরমর্দিনী" (Mahishasura Mardini - Iconic Mahalaya Dawn Broadcast & Stotram)
  const playlistMahalaya = [
    {
      videoId: "442ewPgXHQ0",
      startTime: 0,
      title: "অয়িগিরি নন্দিনি — মহিষাসুরমর্দিনী স্তোত্রম (Aigiri Nandini Stotram)",
      artist: "রাজশ্রী সোল • Mahishasura Mardini Stotram",
      era: "মহালয়া • দেবী স্তোত্রম"
    },
    {
      videoId: "442ewPgXHQ0",
      startTime: 180,
      title: "অয়িগিরি নন্দিনি — সুরবরবর্ষিণি দুরধরধর্ষিণি (Stotram Verses)",
      artist: "রাজশ্রী সোল • শারদীয়া অঞ্জলি",
      era: "মহালয়া • শ্লোকপাঠ"
    },
    {
      videoId: "YQyo8QeoYhc",
      startTime: 0,
      title: "মহিষাসুরমর্দিনী — ১. আগমনী ও দেব্যা আবাহনম (Mahalaya Broadcast)",
      artist: "বীরেন্দ্রকৃষ্ণ ভদ্র & পঙ্কজ কুমার মল্লিক",
      era: "মহালয়া • মহিমান্বিত সম্প্রচার"
    },
    {
      videoId: "YQyo8QeoYhc",
      startTime: 300,
      title: "মহিষাসুরমর্দিনী — ২. মহিষাসুর বধ ও চণ্ডী স্তোত্রপাঠ",
      artist: "বীরেন্দ্রকৃষ্ণ ভদ্র & সঙ্গীতবৃন্দ",
      era: "মহালয়া • চণ্ডীপাঠ"
    },
    {
      videoId: "YQyo8QeoYhc",
      startTime: 900,
      title: "মহিষাসুরমর্দিনী — ৩. রূপং দেহি জয়ং দেহি (স্তোত্র)",
      artist: "বীরেন্দ্রকৃষ্ণ ভদ্র",
      era: "মহালয়া • মহামায়া স্তোত্র"
    }
  ];

  // TAB 3: "বর্তমান যুগ" (Present Era - Fully Segregated Tracklist with Titles & Artists)
  const playlistPresentEra = [
    // --- SVF Best of Durga Puja Hits Jukebox (0RUhpbHwM90) ---
    {
      videoId: "0RUhpbHwM90",
      startTime: 0,
      title: "পূজার গান (Pujar Gaan - Special Title Track)",
      artist: "কৌশিক-গুড্ডু & SVF All Stars",
      era: "বর্তমান যুগ • শারদ অ্যানথেম"
    },
    {
      videoId: "0RUhpbHwM90",
      startTime: 390,
      title: "দুগ্গা মা (Dugga Ma - Bolo Dugga Maiki)",
      artist: "অরিজিৎ সিং • SVF Hits",
      era: "বর্তমান যুগ • অরিজিৎ সিং"
    },
    {
      videoId: "0RUhpbHwM90",
      startTime: 547,
      title: "এলো যে মা (Elo Je Ma)",
      artist: "অনুপম রায় & দল • বিশেষ পুজো গান",
      era: "বর্তমান যুগ • মেলোডি পপ"
    },
    {
      videoId: "0RUhpbHwM90",
      startTime: 824,
      title: "জাগো উমা (Jago Uma - Agomoni Special)",
      artist: "অরিজিৎ সিং & শ্রেয়া ঘোষাল",
      era: "বর্তমান যুগ • আগমনী সুর"
    },
    {
      videoId: "0RUhpbHwM90",
      startTime: 986,
      title: "আগমনীর গান (Agomonir Gaan)",
      artist: "ঐতিহ্যবাহী দেবীবন্ধনা কালেকশন",
      era: "বর্তমান যুগ • চণ্ডী স্তোত্র"
    },
    {
      videoId: "0RUhpbHwM90",
      startTime: 1328,
      title: "বলো দুগ্গা এলো (Bolo Dugga Elo)",
      artist: "সুনিধি চৌহান & কৌশিক-গুড্ডু",
      era: "বর্তমান যুগ • পূজা উৎসব"
    },
    {
      videoId: "0RUhpbHwM90",
      startTime: 1524,
      title: "এবার যেন অন্যরকম পুজো (Ebar Jeno Onyorokom Pujo)",
      artist: "রূপম ইসলাম & বাংলা ব্যান্ড স্পেশাল",
      era: "বর্তমান যুগ • রক অ্যানথেম"
    },
    {
      videoId: "0RUhpbHwM90",
      startTime: 1734,
      title: "ঢাকের তালে কোমর দোলে (Dhaker Taale)",
      artist: "অভিজিৎ ভট্টাচার্য & পরিনীতা • পরাণ যায় জ্বলিয়া রে",
      era: "বর্তমান যুগ • শারদীয় ড্যান্স"
    },
    {
      videoId: "0RUhpbHwM90",
      startTime: 2010,
      title: "এলো রে পুজো এলো (Elo Re Pujo Elo)",
      artist: "নকাশ আজিজ & সেঁজুতি দাস",
      era: "বর্তমান যুগ • উৎসব ধামাকা"
    },
    {
      videoId: "0RUhpbHwM90",
      startTime: 3181,
      title: "লাগে উরা ধুরা (Lage Ura Dhura)",
      artist: "প্রীতম & তৌফিস কালেক্টিভ",
      era: "বর্তমান যুগ • ব্লকবাস্টার হিট"
    },

    // --- Individual Official Single Videos ---
    {
      videoId: "hnkfDCbULxk",
      startTime: 0,
      title: "উমা আসে নতুন সাজে (Uma Ashe Notun Saje)",
      artist: "অঙ্কিতা ভট্টাচার্য • Zee Bangla Special",
      era: "বর্তমান যুগ • নতুন প্রকাশ"
    },
    {
      videoId: "sPuZ0Q3KDWo",
      startTime: 0,
      title: "দুগ্গা মা (Dugga Ma Official Video)",
      artist: "অরিজিৎ সিং • Bolo Dugga Maiki Movie",
      era: "বর্তমান যুগ • ভিডিও পপ"
    },
    {
      videoId: "xlElO06nQy8",
      startTime: 0,
      title: "দুর্গা এলো (Dugga Elo Official Video)",
      artist: "মোনালী ঠাকুর • Zee Music Bangla",
      era: "বর্তমান যুগ • একক হিট"
    },
    {
      videoId: "gS6S7G8a5lE",
      startTime: 0,
      title: "বলো দুর্গা এলো রে (Bolo Dugga Elo Video)",
      artist: "সুনিধি চৌহান & কৌশিক-গুড্ডু • SVF Music",
      era: "বর্তমান যুগ • হাইলাইটস"
    },
    {
      videoId: "id5_3dKvEBg",
      startTime: 0,
      title: "ঢাক বাজো কাশের বনে (Dhak Baja Kash Bhorja)",
      artist: "বনি সেনগুপ্ত & রূপম ইসলাম • SVF Special",
      era: "বর্তমান যুগ • ঢাক বিট"
    }
  ];

  // Application State
  const state = {
    activeTab: 'nostalgia', // 'nostalgia' | 'mahalaya' | 'present'
    currentThemeIndex: 0,
    onlineCount: 842,
    shareCount: 0,
    maxShareCount: 5,
    isDhakPlaying: false,
    currentLang: 'bn',
    currentTrackIndex: 0,
    isPlaying: false,
    userPaused: false,
    virtualChandaCount: 1248,
    isPlayerReady: false,
    seekPollInterval: null,
    isMagicAnimating: false
  };

  // Theme Definitions
  const themes = [
    { id: 'bg-theme-shasthi', bnName: 'ষষ্ঠীর সকাল', enName: 'Sosthi r Sokal' },
    { id: 'bg-theme-mahalaya', bnName: 'মহালয়ার সকালের তর্পণ', enName: 'Mahalaya r Sokal er Torpon' },
    { id: 'bg-theme-saptami', bnName: 'সপ্তমীর রাতে মণ্ডপ পরিক্রমা', enName: 'Saptomir Raat Mondop Ghora' },
    { id: 'bg-theme-ashtami', bnName: 'অষ্টমীর পুষ্পাঞ্জলি ও ভোরের আরতি', enName: 'Ashtamir Pushpanjali' },
    { id: 'bg-theme-navami', bnName: 'নবমীর নিশি ও জমজমাট আরতি', enName: 'Nabami r Raat' },
    { id: 'bg-theme-evening', bnName: 'সন্ধ্যা আরতি', enName: 'Evening Aarti' },
    { id: 'bg-theme-dawn', bnName: 'ভোরের মহাষ্টমী', enName: 'Maha Ashtami Dawn' },
    { id: 'bg-theme-rainy', bnName: 'বৃষ্টির সন্ধিপূজা', enName: 'Rainy Sandhi Puja' },
    { id: 'bg-theme-visarjan', bnName: 'বিসর্জনের রাত', enName: 'Visarjan Night' }
  ];

  // i18n Dictionary
  const i18n = {
    bn: {
      signboard: "পুরনো পূজার গান আর্কাইভ • ESTD. 1990",
      headline: "দুর্গা পূজার গান",
      subtext: "মহালয়ার কাকভোর থেকে বিজয়ার সিঁদুর খেলা — রেডিওর সুর, ক্যাসেটের নস্টালজিয়া আর অমলিন পূজার আড্ডা।",
      nav_about: "আমাদের কথা", nav_faq: "প্রশ্নোত্তর", nav_support: "সহযোগিতা",
      dhak_btn: "ঢাকের আওয়াজ",
      share_title: "শেয়ার করে জাদু দেখো! ✨", share_btn: "5 Groups-এ Share করুন",
      scroll_hint: "গান নির্বাচন করুন", btn_playlist: "গান নির্বাচন",
      footer_text: "স্মৃতির শহর কলকাতা • তৈরি করা হয়েছে গভীর ভালবাসায়",
      about_title: "আমাদের কথা — পূজার গানের ইতিহাস", faq_title: "সাধারণ প্রশ্ন ও উত্তর",
      support_title: "আর্কাইভকে ভালোবাসুন", playlist_title: "পূজার গানের প্লে-লিস্ট"
    },
    en: {
      signboard: "OLD PUJA SONGS ARCHIVE • ESTD. 1990",
      headline: "Durga Puja Songs",
      subtext: "From Mahalaya dawn to Dashami Sindoor Khela — an archive of nostalgic Bengali festival melodies.",
      nav_about: "About Archive", nav_faq: "FAQ", nav_support: "Support",
      dhak_btn: "Dhak Sound",
      share_title: "Share for Magic! ✨", share_btn: "Share in 5 Groups",
      scroll_hint: "SELECT TRACKS", btn_playlist: "Playlist",
      footer_text: "City of Joy Kolkata • Crafted with love",
      about_title: "About — History of Puja Anthems", faq_title: "Frequently Asked Questions",
      support_title: "Support the Archive", playlist_title: "Durga Puja Tracklist"
    }
  };

  // DOM Elements
  const DOM = {
    bgLayers: document.querySelectorAll('.bg-layer'),
    bgRefreshBtn: document.getElementById('bg-refresh-btn'),
    btnVolumeToggle: document.getElementById('btn-volume-toggle'),
    speakerIconSvg: document.getElementById('speaker-icon-svg'),
    liveClockText: document.getElementById('live-clock-text'),
    pujoCountdownText: document.getElementById('pujo-countdown-text'),
    themeSwitchBtn: document.getElementById('theme-switch-btn'),
    themeBtnText: document.getElementById('theme-btn-text'),
    onlineCountText: document.getElementById('online-count-text'),
    langToggleBtn: document.getElementById('lang-toggle-btn'),
    dhakToggleBtn: document.getElementById('dhak-toggle-btn'),
    dhakBtnState: document.getElementById('dhak-btn-state'),
    dhakBtnIcon: document.getElementById('dhak-btn-icon'),
    dhakBtnText: document.getElementById('dhak-btn-text'),
    festiveMagicBtn: document.getElementById('festive-magic-btn'),
    magicContainer: document.getElementById('magic-animation-container'),
    kaashFieldContainer: document.getElementById('kaash-field-container'),
    magicBtnText: document.getElementById('magic-btn-text'),
    shareCountBadge: document.getElementById('share-count-badge'),
    shareProgressBar: document.getElementById('share-progress-bar'),
    btnShareWhatsapp: document.getElementById('btn-share-whatsapp'),
    btnPlayPause: document.getElementById('btn-play-pause'),
    btnPrevTrack: document.getElementById('btn-prev-track'),
    btnNextTrack: document.getElementById('btn-next-track'),
    btnSkipBack: document.getElementById('btn-skip-back'),
    btnSkipForward: document.getElementById('btn-skip-forward'),
    playerTrackTitle: document.getElementById('player-track-title'),
    playerTrackArtist: document.getElementById('player-track-artist'),
    playerEraTag: document.getElementById('player-era-tag'),
    playerAlbumArt: document.getElementById('player-album-art'),
    playerDock: document.getElementById('music-player-dock'),
    mainSubtext: document.getElementById('main-subtext'),
    seekSlider: document.getElementById('seek-slider'),
    volumeSlider: document.getElementById('volume-slider'),
    currTime: document.getElementById('curr-time'),
    totalDuration: document.getElementById('total-duration'),
    playlistContainer: document.getElementById('playlist-container'),
    trackSearchInput: document.getElementById('track-search-input'),
    btnOpenDrawer: document.getElementById('btn-open-drawer'),
    scrollHintBtn: document.getElementById('scroll-hint-btn'),
    btnVirtualChanda: document.getElementById('btn-virtual-chanda'),
    chandaCountText: document.getElementById('chanda-count'),
    btnSpotifyLink: document.getElementById('btn-spotify-link'),
    btnYtmusicLink: document.getElementById('btn-ytmusic-link'),
    toastContainer: document.getElementById('toast-container'),
    tabBtns: document.querySelectorAll('.tab-btn')
  };

  // Nostalgic Puja Thoughts Rotation Array (26 Curated Nostalgic Memories)
  const pujaThoughts = {
    bn: [
      "মহালয়ার কাকভোর থেকে বিজয়ার সিঁদুর খেলা — রেডিওর সুর, ক্যাসেটের নস্টালজিয়া আর অমলিন পূজার আড্ডা।",
      "আকাশজুড়ে পেঁজা তুলোর মেঘ, শিউলি ফুলের গন্ধ আর ঢাকের কাঠিতে জানান দেওয়া — আগমনীর আনন্দ।",
      "ষষ্ঠীর নতুন জামা, সপ্তমীর মণ্ডপ পরিক্রমা, আর অষ্টমীর অঞ্জলিতে দেবীর চরণে ভক্তির অর্ঘ্য।",
      "নব্বইয়ের শারদীয় ক্যাসেট, রেডিওর গান আর পাড়ার প্যান্ডেলে মাইকের সেই চেনা নস্টালজিক সুর।",
      "সন্ধিপূজার ১০৮ প্রদীপ, আরতি আর ঢাক-কাঁসরের ধ্বনিতে জেগে ওঠা আবহমান বাংলার পূজার প্রাঙ্গণ।",
      "দশমীর বিসর্জনের করুণ সুর — 'আসছে বছর আবার হবে', আবার এক বছরের দীর্ঘ অপেক্ষা।",
      "ছোটবেলার পূজার সংখ্যা 'আনন্দমেলা' আর 'দেশ' প্রচ্ছদে চোখ বুলিয়ে নতুন গানের তালিকা খোঁজা।",
      "মহালয়ার আগের রাতে ঘুম না আসা, ভোর চারটেয় রেডিওর টিউনিং আর বীরেন্দ্রকৃষ্ণের ভরাট কণ্ঠ।",
      "পাড়ার প্যান্ডেল তৈরির বাঁশ বাঁধার শব্দ আর কুমোরটুলিতে মৃৎশিল্পীদের তুলির শেষ টান।",
      "মা দুর্গার চোখের তারা আঁকার সেই জাদুকরী মুহূর্ত — জাগরণে মর্ত্যে দেবীর পদার্পণ।",
      "নবমীর রাতের জমজমাট আড্ডা, ফুচকার স্টল আর বন্ধুদের সাথে রাত জেগে মণ্ডপ দর্শন।",
      "শারদীয়ার আগমনীতে কাশের বনে বাতাসের দোলা আর ধুনুচি নাচের মেতে ওঠার উন্মাদনা।",
      "পূজার সেই চারটে দিন যেন কোন এক মায়াপুরীর দেশ — আনন্দ, আলো আর ঢাকের মিষ্টি শব্দে ভরা।",
      "গ্রামোফোনের রেকর্ড থেকে ক্যাসেটের ফিতে — বাঙালির পূজার গান চিরকাল অমলিন হৃদয়ে।",
      "অষ্টমীর সকালে ধূপ-ধুনোর সুবাসে ভরা মন্দির আর পদ্মফুলের সাজে মায়ের হাসিমুখ।",
      "পূজার ছুটি আর লাল-নীল টুনি লাইটের আলোয় সেজে ওঠা পুরোনো কলকাতার গলি।",
      "বিজয়া দশমীতে বড়দের প্রণাম করা, কোলাকুলি আর মিষ্টিমুখের এক পরম স্নেহের অনুভূতি।",
      "পাড়ার চণ্ডীমণ্ডপে যৌথ পরিবারের এক সাথে বসে প্রসাদ খাওয়া আর আনন্দ ভাগ করে নেওয়া।",
      "মহিষাসুর বধের পর চণ্ডীর অট্টহাসি আর দেবগণের স্তুতিতে ভরে ওঠা ভোরবেলা।",
      "অনামী শিল্পীদের পূজার গানের অ্যালবামের সেই সোনালী সময়, যা আজ স্মৃতির পাতায় অমর।",
      "দূর বিদেশে বসেও মহালয়ার সুর শুনলেই মনে পড়ে যায় ফেলে আসা শৈশবের লালপাড় শাড়ির দিনগুলো।",
      "পূজার থিম গান আর আলোকসজ্জার ভিড়ে সেই পুরনো দিনের ক্যাসেটের জাদুকরী সুরের নস্টালজিয়া।",
      "শরত আকাশের রোদ্দুর আর শিউলি ঝরা ভোর যেন প্রতি বছর নিয়ে আসে আবার নতুন এক আশার আলো।",
      "পূজাবার্ষিকীর গল্প পড়ে আর শারদীয় রবীন্দ্রসঙ্গীত শুনে কাটানো সেই মিষ্টি অলস দুপুর।",
      "আরতির ধুনুচির ধোঁয়া আর ঢাকের তালে হৃদয় দোলে বাঙালির পরম ভক্তির আনন্দে।",
      "শারদীয়া দুর্গোৎসব শুধু উৎসব নয় — এক আত্মিক অনুভব, বাঙালির হৃদস্পন্দন ও বেঁচে থাকার অনুপ্রেরণা।"
    ],
    en: [
      "From Mahalaya dawn to Dashami Sindoor Khela — an archive of nostalgic Bengali festival melodies.",
      "Fluffy autumn clouds, the fragrance of Shiuli flowers, and the beat of the Dhak signaling Maa Durga's arrival.",
      "New festive attire on Sashthi, pandal hopping on Saptami, and sacred Anjali offerings on Ashtami.",
      "Golden cassettes of 90s Puja releases, radio broadcasts, and beloved melodies echoing through pandal speakers.",
      "108 lamps of Sandhi Puja, evening Aarti, and traditional Dhak-Kansor rhythms resonating across Bengal.",
      "The bittersweet farewell of Dashami — 'Asche Bochor Abar Hobe', looking forward to next year's Puja.",
      "Turning the pages of Anandamela & Desh annual magazines, searching for new Puja song tracklists.",
      "Sleepless excitement on Mahalaya eve, tuning the vintage radio at 4 AM for Birendra Krishna Bhadra.",
      "The sound of bamboo pandal construction and Kumartuli artisans painting the final stroke on Maa Durga's eyes.",
      "The magical moment of Chokhu Daan — Goddess Durga awakening to bless the earth.",
      "Late night Adda on Navami night, street food stalls, and walking under glowing fairy lights with friends.",
      "Kash flowers swaying in the autumn breeze and the hypnotic energy of Dhunuchi Naach.",
      "Those four glorious days of Puja feel like a dreamland filled with warmth, music, and festive joy.",
      "From gramophone vinyl records to cassette tapes — Bengali Puja songs remain immortal in our hearts.",
      "Ashtami morning filled with incense smoke, lotus blossoms, and Goddess Durga's serene face.",
      "School holidays and heritage Kolkata lanes illuminated with colorful festoon lights.",
      "Pranam to elders, warm hugs, and distribution of Rosogollas on Bijoya Dashami.",
      "Community feasts at the local Para pandal, sharing Bhog and laughter together.",
      "The triumphant chants of Chandi and divine hymns as dawn breaks on Mahalaya.",
      "The golden era of independent Puja music releases that defined generations of Bengalis.",
      "Listening to Mahalaya melodies overseas, bringing back nostalgic memories of childhood Pujas.",
      "Beyond modern theme pandals, the timeless charm of retro cassette tunes still touches the soul.",
      "Golden autumn sunshine and dew-kissed Shiuli flowers bringing new hope every year.",
      "Lazy Puja afternoons spent reading annual special magazines and listening to Tagore songs.",
      "Aarti smoke swirling to the rhythmic reverberations of Dhak drums in pure devotion.",
      "Durga Puja is not just a festival — it is the soul, heartbeat, and eternal emotion of Bengal."
    ]
  };

  let currentThoughtIndex = 0;
  let thoughtRotationTimer = null;

  function startThoughtRotation() {
    if (thoughtRotationTimer) clearInterval(thoughtRotationTimer);

    thoughtRotationTimer = setInterval(() => {
      if (!DOM.mainSubtext) return;

      DOM.mainSubtext.classList.add('text-fade');

      setTimeout(() => {
        const thoughtsList = pujaThoughts[state.currentLang] || pujaThoughts.bn;
        currentThoughtIndex = (currentThoughtIndex + 1) % thoughtsList.length;
        DOM.mainSubtext.textContent = thoughtsList[currentThoughtIndex];
        DOM.mainSubtext.classList.remove('text-fade');
      }, 450);

    }, 6000);
  }

  // YouTube Player Global Reference
  let ytPlayer = null;
  let dhakYtPlayer = null;
  let dhakAutoOffTimeout = null;
  let audioCtx = null;
  let dhakTimerId = null;

  // Helper to get active array
  function getActivePlaylist() {
    if (state.activeTab === 'mahalaya') return playlistMahalaya;
    if (state.activeTab === 'present') return playlistPresentEra;
    return playlistNostalgia;
  }

  // Toast Notification (Disabled per user request to remove option tap pop-ups)
  function showToast(message, icon = '✨') {
    return;
  }

  // Init Application
  function init() {
    setupEventListeners();
    startOnlineCounterSimulation();
    startLiveClockAndPujaCounter();
    restoreShareCount();
    updateThemeUI();
    renderPlaylist();
    updateTrackDisplay(0);
    startThoughtRotation();
  }

  // YouTube IFrame API Callback
  window.onYouTubeIframeAPIReady = function () {
    const initialTrack = getActivePlaylist()[0];
    ytPlayer = new YT.Player('yt-player', {
      height: '1',
      width: '1',
      videoId: initialTrack.videoId,
      playerVars: {
        'playsinline': 1,
        'controls': 0,
        'disablekb': 1,
        'fs': 0,
        'rel': 0,
        'start': initialTrack.startTime || 0
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange,
        'onError': onPlayerError
      }
    });

    dhakYtPlayer = new YT.Player('dhak-yt-player', {
      height: '1',
      width: '1',
      videoId: 'ZpUOgCsPgy0',
      playerVars: {
        'playsinline': 1,
        'controls': 0,
        'disablekb': 1,
        'fs': 0,
        'rel': 0
      }
    });
  };

  function onPlayerReady(event) {
    state.isPlayerReady = true;
    startSeekPolling();
  }

  function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
      state.isPlaying = true;
      state.userPaused = false;
      DOM.btnPlayPause.textContent = '⏸';
      DOM.playerDock.classList.add('playing');
    } else if (event.data === YT.PlayerState.PAUSED) {
      // Auto-resume if pause was triggered automatically (not by explicit user click)
      if (!state.userPaused && state.isPlaying) {
        setTimeout(() => {
          if (ytPlayer && typeof ytPlayer.playVideo === 'function' && !state.userPaused) {
            ytPlayer.playVideo();
          }
        }, 250);
      } else {
        state.isPlaying = false;
        DOM.btnPlayPause.textContent = '▶';
        DOM.playerDock.classList.remove('playing');
      }
    } else if (event.data === YT.PlayerState.ENDED) {
      handleTrackEnd();
    } else if (event.data === YT.PlayerState.CUED) {
      if (state.isPlaying && !state.userPaused) {
        setTimeout(() => {
          if (ytPlayer && typeof ytPlayer.playVideo === 'function') {
            ytPlayer.playVideo();
          }
        }, 200);
      }
    }
  }

  // Handle YouTube Error (Skip Broken / Restricted Tracks Automatically)
  function onPlayerError(event) {
    console.warn("YouTube Player Error code:", event.data);
    if (!state.userPaused) {
      showToast('পরবর্তী গান চালু করা হচ্ছে...', '⏩');
      setTimeout(() => {
        nextTrack();
      }, 500);
    }
  }

  // Handle Track End (Continuous Endless Autoplay Across All Playlists)
  function handleTrackEnd() {
    const playlist = getActivePlaylist();
    state.userPaused = false;
    
    if (state.activeTab === 'mahalaya') {
      // Tab 2 (Mahalayas): Linear narration, loop = false
      if (state.currentTrackIndex < playlist.length - 1) {
        state.currentTrackIndex++;
        loadTrackAndPlay(state.currentTrackIndex);
      } else {
        // Last chapter reached: stop playback
        state.isPlaying = false;
        state.userPaused = true;
        DOM.btnPlayPause.textContent = '▶';
        DOM.playerDock.classList.remove('playing');
        showToast('মহিষাসুরমর্দিনী সমাপ্ত। শুভ মহালয়া!', '🪔');
      }
    } else {
      // Tabs 1 & 3: Loops endlessly, auto-wraps to 0
      state.currentTrackIndex = (state.currentTrackIndex + 1) % playlist.length;
      loadTrackAndPlay(state.currentTrackIndex);
    }
  }

  // Load and play track with forced autoplay trigger
  function loadTrackAndPlay(index) {
    const playlist = getActivePlaylist();
    if (index < 0 || index >= playlist.length) return;

    state.currentTrackIndex = index;
    state.userPaused = false;
    state.isPlaying = true;
    const track = playlist[index];

    updateTrackDisplay(index);

    if (ytPlayer && state.isPlayerReady) {
      try {
        ytPlayer.loadVideoById({
          videoId: track.videoId,
          startSeconds: track.startTime || 0
        });
        DOM.btnPlayPause.textContent = '⏸';
        DOM.playerDock.classList.add('playing');
        showToast(`এখন বাজছে: ${track.title}`, '🎶');

        // Backup force-play to overcome browser iframe policies
        setTimeout(() => {
          if (ytPlayer && typeof ytPlayer.playVideo === 'function' && !state.userPaused) {
            ytPlayer.playVideo();
          }
        }, 200);
      } catch (err) {
        console.error("Error loading video track:", err);
      }
    }
  }

  // Update Metadata & Thumbnail Display
  function updateTrackDisplay(index) {
    const playlist = getActivePlaylist();
    const track = playlist[index];
    if (!track) return;

    DOM.playerTrackTitle.textContent = track.title;
    DOM.playerTrackArtist.textContent = track.artist;
    DOM.playerEraTag.textContent = track.era;
    DOM.playerAlbumArt.src = `https://img.youtube.com/vi/${track.videoId}/hqdefault.jpg`;

    // Dynamic redirect link to YouTube for the current song & timestamp
    if (DOM.btnYtmusicLink) {
      const startSec = Math.floor(track.startTime || 0);
      DOM.btnYtmusicLink.href = `https://www.youtube.com/watch?v=${track.videoId}${startSec > 0 ? '&t=' + startSec + 's' : ''}`;
    }

    // Dynamic redirect link to Spotify search for the current song & artist
    if (DOM.btnSpotifyLink) {
      const cleanTitle = track.title.replace(/[\(\)•]/g, '').trim();
      const cleanArtist = track.artist.split('•')[0].trim();
      const searchQuery = encodeURIComponent(`${cleanTitle} ${cleanArtist}`);
      DOM.btnSpotifyLink.href = `https://open.spotify.com/search/${searchQuery}`;
    }

    renderPlaylist();
  }

  // Poll Seek Bar Every 500ms & Sync Track Display with Playback Position
  function startSeekPolling() {
    if (state.seekPollInterval) clearInterval(state.seekPollInterval);
    state.seekPollInterval = setInterval(() => {
      if (ytPlayer && state.isPlayerReady && state.isPlaying) {
        const cur = ytPlayer.getCurrentTime() || 0;
        const dur = ytPlayer.getDuration() || 1;
        DOM.currTime.textContent = formatTime(cur);
        DOM.totalDuration.textContent = formatTime(dur);
        DOM.seekSlider.value = (cur / dur) * 100;

        // Auto-advance if video reaches end (dur > 5 and cur >= dur - 0.8) to prevent YouTube end-stall
        if (dur > 5 && cur >= dur - 0.8 && !state.userPaused) {
          handleTrackEnd();
          return;
        }

        // Auto-match displayed song title with playback timestamp
        const playlist = getActivePlaylist();
        const currentTrack = playlist[state.currentTrackIndex];
        if (currentTrack) {
          let bestMatchIndex = state.currentTrackIndex;
          let highestStartTime = -1;

          playlist.forEach((item, idx) => {
            if (item.videoId === currentTrack.videoId) {
              const itemStart = item.startTime || 0;
              if (cur >= itemStart && itemStart > highestStartTime) {
                highestStartTime = itemStart;
                bestMatchIndex = idx;
              }
            }
          });

          if (bestMatchIndex !== state.currentTrackIndex) {
            state.currentTrackIndex = bestMatchIndex;
            updateTrackDisplay(bestMatchIndex);
            showToast(`এখন বাজছে: ${playlist[bestMatchIndex].title}`, '🎶');
          }
        }
      }
    }, 500);
  }

  // Switch Playlist Tab
  function switchTab(tabKey) {
    if (state.activeTab === tabKey) return;

    // 1. Pause current playback
    if (ytPlayer && state.isPlayerReady && state.isPlaying) {
      ytPlayer.pauseVideo();
    }
    state.isPlaying = false;
    state.userPaused = false;
    DOM.btnPlayPause.textContent = '▶';
    DOM.playerDock.classList.remove('playing');

    // 2. Swap active tab & reset index to 0
    state.activeTab = tabKey;
    state.currentTrackIndex = 0;

    // 3. Update Tab UI Buttons
    DOM.tabBtns.forEach((btn) => {
      if (btn.getAttribute('data-tab') === tabKey) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // 4. Update track info card and cue video without autoplay
    const playlist = getActivePlaylist();
    const track = playlist[0];
    updateTrackDisplay(0);

    if (ytPlayer && state.isPlayerReady && track) {
      ytPlayer.cueVideoById({
        videoId: track.videoId,
        startSeconds: track.startTime || 0
      });
    }

    renderPlaylist();
    showToast(`প্লে-লিস্ট পরিবর্তিত: ${tabKey === 'nostalgia' ? 'নস্টালজিয়া' : tabKey === 'mahalaya' ? 'মহিষাসুরমর্দিনী' : 'বর্তমান যুগ'}`, '📻');
  }

  // Transport Controls
  function togglePlayPause() {
    if (!ytPlayer || !state.isPlayerReady) return;
    if (state.isPlaying) {
      state.userPaused = true;
      state.isPlaying = false;
      ytPlayer.pauseVideo();
      DOM.btnPlayPause.textContent = '▶';
      DOM.playerDock.classList.remove('playing');
    } else {
      state.userPaused = false;
      state.isPlaying = true;
      ytPlayer.playVideo();
      DOM.btnPlayPause.textContent = '⏸';
      DOM.playerDock.classList.add('playing');
    }
  }

  function prevTrack() {
    const playlist = getActivePlaylist();
    const prevIdx = (state.currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadTrackAndPlay(prevIdx);
  }

  function nextTrack() {
    const playlist = getActivePlaylist();
    const nextIdx = (state.currentTrackIndex + 1) % playlist.length;
    loadTrackAndPlay(nextIdx);
  }

  function skipBackward10() {
    if (!ytPlayer || !state.isPlayerReady) return;
    const cur = ytPlayer.getCurrentTime() || 0;
    const newTime = Math.max(0, cur - 10);
    ytPlayer.seekTo(newTime, true);
    showToast('১০ সেকেন্ড পিছনে (10s Back)', '↺');
  }

  function skipForward10() {
    if (!ytPlayer || !state.isPlayerReady) return;
    const cur = ytPlayer.getCurrentTime() || 0;
    const dur = ytPlayer.getDuration() || 0;
    const newTime = Math.min(dur, cur + 10);
    ytPlayer.seekTo(newTime, true);
    showToast('১০ সেকেন্ড সামনে (10s Forward)', '↻');
  }

  // Render Playlist Modal List
  function renderPlaylist() {
    DOM.playlistContainer.innerHTML = '';
    const playlist = getActivePlaylist();
    const query = DOM.trackSearchInput.value.toLowerCase().trim();

    playlist.forEach((track, idx) => {
      if (query && !track.title.toLowerCase().includes(query) && !track.artist.toLowerCase().includes(query)) {
        return;
      }

      const item = document.createElement('div');
      item.className = `playlist-item ${idx === state.currentTrackIndex ? 'active' : ''}`;
      item.innerHTML = `
        <div class="item-left">
          <span class="item-num">${idx + 1}.</span>
          <div class="item-details">
            <h5>${track.title}</h5>
            <p>${track.artist}</p>
          </div>
        </div>
        <span class="item-tag">${track.era}</span>
      `;

      item.addEventListener('click', () => {
        loadTrackAndPlay(idx);
        closeModal('modal-playlist');
      });

      DOM.playlistContainer.appendChild(item);
    });
  }

  // Theme Switching
  function switchTheme() {
    state.currentThemeIndex = (state.currentThemeIndex + 1) % themes.length;
    const currentTheme = themes[state.currentThemeIndex];

    DOM.bgLayers.forEach((layer) => {
      if (layer.id === currentTheme.id) {
        layer.classList.add('active');
      } else {
        layer.classList.remove('active');
      }
    });

    updateThemeUI();
    const name = state.currentLang === 'bn' ? currentTheme.bnName : currentTheme.enName;
    showToast(`দৃশ্যাবলী পরিবর্তিত: ${name}`, '🎨');
  }

  function updateThemeUI() {
    const currentTheme = themes[state.currentThemeIndex];
    const name = state.currentLang === 'bn' ? currentTheme.bnName : currentTheme.enName;
    DOM.themeBtnText.textContent = `${state.currentLang === 'bn' ? 'দৃশ্যাবলী' : 'Theme'}: ${name}`;
  }

  // Live Clock & Durga Puja 2026 Countdown Timer (Target: October 17, 2026)
  function startLiveClockAndPujaCounter() {
    const targetDate = new Date('2026-10-17T00:00:00');

    function update() {
      const now = new Date();

      // 1. Update Live Clock
      if (DOM.liveClockText) {
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        const formattedHours = String(hours).padStart(2, '0');
        DOM.liveClockText.textContent = `${formattedHours}:${minutes}:${seconds} ${ampm}`;
      }

      // 2. Update Durga Puja 2026 Countdown
      if (DOM.pujoCountdownText) {
        const diff = targetDate - now;
        if (diff <= 0) {
          DOM.pujoCountdownText.textContent = state.currentLang === 'bn' ? '🎉 পূজোর শুভ সূচনা!' : '🎉 Durga Puja Started!';
          return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        if (state.currentLang === 'bn') {
          const bnDays = days.toLocaleString('bn-BD');
          const bnHours = String(hours).padStart(2, '0').replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[d]);
          const bnMinutes = String(minutes).padStart(2, '0').replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[d]);
          DOM.pujoCountdownText.textContent = `পূজো আসতে বাকি: ${bnDays} দিন ${bnHours} ঘণ্টা ${bnMinutes} মি`;
        } else {
          DOM.pujoCountdownText.textContent = `Puja in: ${days}d ${hours}h ${minutes}m`;
        }
      }
    }

    update();
    setInterval(update, 1000);
  }

  // Live Counter Simulation
  function startOnlineCounterSimulation() {
    setInterval(() => {
      const delta = Math.floor(Math.random() * 11) - 4;
      state.onlineCount = Math.max(750, Math.min(1250, state.onlineCount + delta));
      if (DOM.onlineCountText) {
        DOM.onlineCountText.textContent = state.currentLang === 'bn'
          ? `● ${state.onlineCount.toLocaleString('bn-BD')} জন লাইভ`
          : `● ${state.onlineCount.toLocaleString()} online`;
      }
    }, 3500);
  }

  // Language Toggle
  function toggleLanguage() {
    state.currentLang = state.currentLang === 'bn' ? 'en' : 'bn';
    DOM.langToggleBtn.innerHTML = state.currentLang === 'bn'
      ? `<span>EN</span> | <strong style="color: var(--gold-primary);">বাংলা</strong>`
      : `<strong style="color: var(--gold-primary);">EN</strong> | <span>বাংলা</span>`;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (i18n[state.currentLang][key]) {
        el.textContent = i18n[state.currentLang][key];
      }
    });

    if (DOM.mainSubtext) {
      currentThoughtIndex = 0;
      DOM.mainSubtext.textContent = (pujaThoughts[state.currentLang] || pujaThoughts.bn)[0];
    }

    updateThemeUI();
    showToast(state.currentLang === 'bn' ? 'ভাষা: বাংলা' : 'Language: English', '🌐');
  }

  // Dhak Audio Player (YouTube Audio: ZpUOgCsPgy0)
  function toggleDhakSound(enable) {
    state.isDhakPlaying = enable;

    if (dhakAutoOffTimeout) {
      clearTimeout(dhakAutoOffTimeout);
      dhakAutoOffTimeout = null;
    }

    if (enable) {
      if (DOM.dhakToggleBtn) DOM.dhakToggleBtn.classList.add('active');
      if (DOM.dhakBtnState) DOM.dhakBtnState.textContent = '⏸';
      if (DOM.dhakBtnText) DOM.dhakBtnText.textContent = state.currentLang === 'bn' ? 'ঢাক বাজছে...' : 'Dhak Playing...';

      if (dhakYtPlayer && typeof dhakYtPlayer.playVideo === 'function') {
        dhakYtPlayer.playVideo();
      } else {
        startDhakLoop();
      }

      // Automatically turn off after 1 minute (60,000 ms)
      dhakAutoOffTimeout = setTimeout(() => {
        if (state.isDhakPlaying) {
          toggleDhakSound(false);
        }
      }, 60000);

    } else {
      if (DOM.dhakToggleBtn) DOM.dhakToggleBtn.classList.remove('active');
      if (DOM.dhakBtnState) DOM.dhakBtnState.textContent = '▶';
      if (DOM.dhakBtnText) DOM.dhakBtnText.textContent = state.currentLang === 'bn' ? 'ঢাকের আওয়াজ' : 'Dhak Sound';

      if (dhakYtPlayer && typeof dhakYtPlayer.pauseVideo === 'function') {
        dhakYtPlayer.pauseVideo();
      }
      stopDhakLoop();
    }
  }

  function startDhakLoop() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    let beat = 0;
    dhakTimerId = setInterval(() => {
      if (!state.isDhakPlaying) return;
      const now = audioCtx.currentTime;

      if (beat % 4 === 0) playSynthDrum(now, 110, 0.25, 0.4);
      if (beat % 2 === 1 || beat === 2 || beat === 8) playSynthRim(now, 1200, 0.05, 0.2);
      if (beat % 4 === 2) playKansorBell(now, 3200, 0.3);

      beat = (beat + 1) % 16;
    }, 180);
  }

  function stopDhakLoop() {
    if (dhakTimerId) {
      clearInterval(dhakTimerId);
      dhakTimerId = null;
    }
  }

  function playSynthDrum(time, freq, duration, gainVal) {
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, time);
      osc.frequency.exponentialRampToValueAtTime(30, time + duration);
      gain.gain.setValueAtTime(gainVal, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + duration);
      osc.connect(gain); gain.connect(audioCtx.destination);
      osc.start(time); osc.stop(time + duration);
    } catch (e) {}
  }

  function playSynthRim(time, freq, duration, gainVal) {
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, time);
      gain.gain.setValueAtTime(gainVal, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + duration);
      osc.connect(gain); gain.connect(audioCtx.destination);
      osc.start(time); osc.stop(time + duration);
    } catch (e) {}
  }

  function playKansorBell(time, freq, duration) {
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, time);
      gain.gain.setValueAtTime(0.15, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + duration);
      osc.connect(gain); gain.connect(audioCtx.destination);
      osc.start(time); osc.stop(time + duration);
    } catch (e) {}
  }

  // 30-Second Shiuli Flower Rain Animation Engine
  const SHIULI_SVG = `<svg width="24" height="24" viewBox="0 0 24 24"><g transform="translate(12,12)"><circle r="2.8" fill="#FF6B00"/><path d="M0,-3 Q-2.5,-8 0,-11 Q2.5,-8 0,-3" fill="#FFFFFF"/><path d="M0,-3 Q-2.5,-8 0,-11 Q2.5,-8 0,-3" fill="#FFFFFF" transform="rotate(72)"/><path d="M0,-3 Q-2.5,-8 0,-11 Q2.5,-8 0,-3" fill="#FFFFFF" transform="rotate(144)"/><path d="M0,-3 Q-2.5,-8 0,-11 Q2.5,-8 0,-3" fill="#FFFFFF" transform="rotate(216)"/><path d="M0,-3 Q-2.5,-8 0,-11 Q2.5,-8 0,-3" fill="#FFFFFF" transform="rotate(288)"/></g></svg>`;

  let magicSpawners = [];
  let magicCountdownTimer = null;

  function toggleFestiveMagicAnimation() {
    if (state.isMagicAnimating) {
      stopFestiveMagicAnimation();
    } else {
      startFestiveMagicAnimation();
    }
  }

  function startFestiveMagicAnimation() {
    state.isMagicAnimating = true;
    if (DOM.festiveMagicBtn) DOM.festiveMagicBtn.classList.add('active');

    let secondsLeft = 30;
    if (DOM.magicBtnText) DOM.magicBtnText.textContent = `উৎসব (${secondsLeft}s)`;

    magicCountdownTimer = setInterval(() => {
      secondsLeft--;
      if (DOM.magicBtnText) DOM.magicBtnText.textContent = `উৎসব (${secondsLeft}s)`;
      if (secondsLeft <= 0) {
        stopFestiveMagicAnimation();
      }
    }, 1000);

    // Spawn Shiuli flowers raining down from top
    const shiuliInterval = setInterval(() => {
      spawnShiuliFlower();
    }, 220);

    magicSpawners.push(shiuliInterval);
  }

  function stopFestiveMagicAnimation() {
    state.isMagicAnimating = false;
    if (DOM.festiveMagicBtn) DOM.festiveMagicBtn.classList.remove('active');
    if (DOM.magicBtnText) DOM.magicBtnText.textContent = 'উৎসবের আনন্দ';

    if (magicCountdownTimer) {
      clearInterval(magicCountdownTimer);
      magicCountdownTimer = null;
    }

    magicSpawners.forEach(id => clearInterval(id));
    magicSpawners = [];

    if (DOM.magicContainer) {
      setTimeout(() => {
        if (!state.isMagicAnimating) DOM.magicContainer.innerHTML = '';
      }, 2500);
    }
  }

  function spawnShiuliFlower() {
    if (!DOM.magicContainer || !state.isMagicAnimating) return;
    const el = document.createElement('div');
    el.className = 'shiuli-particle';
    el.innerHTML = SHIULI_SVG;

    const posX = Math.random() * 95;
    const duration = 3.5 + Math.random() * 3.5;
    const scale = 0.7 + Math.random() * 0.7;

    el.style.left = `${posX}vw`;
    el.style.animationDuration = `${duration}s`;
    el.style.transform = `scale(${scale})`;

    DOM.magicContainer.appendChild(el);

    setTimeout(() => {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, duration * 1000);
  }

  // WhatsApp Share Functionality
  function restoreShareCount() {
    const saved = localStorage.getItem('puja_share_count');
    if (saved) {
      state.shareCount = parseInt(saved, 10) || 0;
      updateShareUI();
    }
  }

  function handleShare() {
    if (state.shareCount >= state.maxShareCount) {
      openModal('modal-magic-share');
      return;
    }

    const shareData = {
      title: 'দুর্গা পূজার গান আর্কাইভ | Old Puja Songs Archive',
      text: 'মহালয়া থেকে বিজয়া — পুরনো দিনের দারুণ সব পূজার গান শুনুন এই নস্টালজিক ওয়েবসাইটে! 🪔✨',
      url: window.location.href
    };

    if (navigator.share) {
      navigator.share(shareData).then(() => {
        incrementShareCount();
      }).catch(() => {
        fallbackCopyShare();
      });
    } else {
      fallbackCopyShare();
    }
  }

  function fallbackCopyShare() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      showToast('লিঙ্ক কপি হয়েছে! WhatsApp-এ বন্ধুদের পাঠান।', '📋');
      incrementShareCount();
    }).catch(() => {
      incrementShareCount();
    });
  }

  function incrementShareCount() {
    state.shareCount = Math.min(state.maxShareCount, state.shareCount + 1);
    localStorage.setItem('puja_share_count', state.shareCount);
    updateShareUI();

    if (state.shareCount === state.maxShareCount) {
      setTimeout(() => openModal('modal-magic-share'), 500);
    } else {
      showToast(`শেয়ার সম্পূর্ণ (${state.shareCount}/5)!`, '🚀');
    }
  }

  function updateShareUI() {
    if (DOM.shareCountBadge) DOM.shareCountBadge.textContent = `${state.shareCount}/${state.maxShareCount}`;
    const percent = (state.shareCount / state.maxShareCount) * 100;
    if (DOM.shareProgressBar) DOM.shareProgressBar.style.width = `${percent}%`;

    if (state.shareCount >= state.maxShareCount && DOM.btnShareWhatsapp) {
      DOM.btnShareWhatsapp.innerHTML = `<span>✨</span> <span>জাদুকরী উপহার দেখুন!</span>`;
      DOM.btnShareWhatsapp.style.background = 'linear-gradient(135deg, var(--gold-primary), var(--saffron))';
      DOM.btnShareWhatsapp.style.color = '#000';
    }
  }

  // Modal Dialog Helpers
  function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
      if (id === 'modal-playlist') {
        renderPlaylist();
      }
      modal.classList.add('active');
    }
  }

  function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove('active');
  }

  function formatTime(secs) {
    if (isNaN(secs)) return '00:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  }

  // Event Listeners Binding
  function setupEventListeners() {
    // Theme Switcher & Refresh Picture Button
    if (DOM.themeSwitchBtn) DOM.themeSwitchBtn.addEventListener('click', switchTheme);
    if (DOM.bgRefreshBtn) DOM.bgRefreshBtn.addEventListener('click', switchTheme);
    if (DOM.festiveMagicBtn) DOM.festiveMagicBtn.addEventListener('click', toggleFestiveMagicAnimation);
    DOM.langToggleBtn.addEventListener('click', toggleLanguage);

    // Tab Buttons
    DOM.tabBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const tabKey = btn.getAttribute('data-tab');
        switchTab(tabKey);
      });
    });

    // Dhak Sound Toggle Button
    if (DOM.dhakToggleBtn) {
      DOM.dhakToggleBtn.addEventListener('click', () => {
        toggleDhakSound(!state.isDhakPlaying);
      });
    }

    // Share Button
    if (DOM.btnShareWhatsapp) {
      DOM.btnShareWhatsapp.addEventListener('click', handleShare);
    }

    // Transport Buttons
    DOM.btnPlayPause.addEventListener('click', togglePlayPause);
    DOM.btnNextTrack.addEventListener('click', nextTrack);
    DOM.btnPrevTrack.addEventListener('click', prevTrack);
    if (DOM.btnSkipBack) DOM.btnSkipBack.addEventListener('click', skipBackward10);
    if (DOM.btnSkipForward) DOM.btnSkipForward.addEventListener('click', skipForward10);

    // Seek Slider
    DOM.seekSlider.addEventListener('input', (e) => {
      if (ytPlayer && state.isPlayerReady) {
        const dur = ytPlayer.getDuration();
        if (dur) {
          const seekTo = (e.target.value / 100) * dur;
          ytPlayer.seekTo(seekTo, true);
        }
      }
    });

    // Volume Control & Speaker Mute Toggle
    if (DOM.btnVolumeToggle) {
      let lastVolume = 0.8;
      DOM.btnVolumeToggle.addEventListener('click', () => {
        if (!ytPlayer || !state.isPlayerReady) return;
        if (ytPlayer.isMuted()) {
          ytPlayer.unMute();
          DOM.volumeSlider.value = lastVolume;
          ytPlayer.setVolume(lastVolume * 100);
        } else {
          lastVolume = parseFloat(DOM.volumeSlider.value) || 0.8;
          ytPlayer.mute();
          DOM.volumeSlider.value = 0;
        }
      });
    }

    DOM.volumeSlider.addEventListener('input', (e) => {
      if (ytPlayer && state.isPlayerReady) {
        const val = parseFloat(e.target.value);
        ytPlayer.setVolume(val * 100);
        if (val > 0 && ytPlayer.isMuted()) ytPlayer.unMute();
      }
    });

    // Modal Triggers
    if (DOM.btnOpenDrawer) DOM.btnOpenDrawer.addEventListener('click', () => openModal('modal-playlist'));
    if (DOM.scrollHintBtn) DOM.scrollHintBtn.addEventListener('click', () => openModal('modal-playlist'));
    if (DOM.trackSearchInput) DOM.trackSearchInput.addEventListener('input', renderPlaylist);

    const btnAbout = document.getElementById('btn-open-about');
    if (btnAbout) btnAbout.addEventListener('click', () => openModal('modal-about'));

    const btnFaq = document.getElementById('btn-open-faq');
    if (btnFaq) btnFaq.addEventListener('click', () => openModal('modal-faq'));

    const btnSupport = document.getElementById('btn-open-support');
    if (btnSupport) btnSupport.addEventListener('click', () => openModal('modal-support'));

    document.querySelectorAll('[data-close-modal]').forEach((btn) => {
      btn.addEventListener('click', () => closeModal(btn.getAttribute('data-close-modal')));
    });

    document.querySelectorAll('.modal-overlay').forEach((overlay) => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.classList.remove('active');
      });
    });

    DOM.btnVirtualChanda.addEventListener('click', () => {
      state.virtualChandaCount++;
      DOM.chandaCountText.textContent = state.virtualChandaCount;
      showToast('🪔 ভার্চুয়াল ধুনুচি অর্পণ করা হয়েছে!', '❤️');
    });
  }

  document.addEventListener('DOMContentLoaded', init);

})();
