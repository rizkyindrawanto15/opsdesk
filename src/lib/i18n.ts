export type Language = "id" | "en";

export interface Translations {
  // Navigation & Shell
  nav: {
    overview: string;
    capabilities: string;
    demo: string;
    signIn: string;
    openConsole: string;
    workspace: string;
    dashboard: string;
    ticketsQueue: string;
    assetsFleet: string;
    operations: string;
    teamOnCall: string;
    slaAnalytics: string;
    alertsEvents: string;
    platform: string;
    settingsSla: string;
    newTicket: string;
    searchPlaceholder: string;
    searchCmd: string;
    slaActive: string;
    slaTargetSub: string;
    previewBadge: string;
    landing: string;
    markAllRead: string;
    viewAll: string;
    preferences: string;
    unread: string;
  };
  // Command Menu & Modal
  common: {
    quickActions: string;
    createTicketTitle: string;
    appNav: string;
    matchingTickets: string;
    navHint: string;
    escHint: string;
    cancel: string;
    save: string;
    saving: string;
    close: string;
    details: string;
    status: string;
    priority: string;
    category: string;
    assignee: string;
    requester: string;
    created: string;
    actions: string;
    inspect: string;
    markRead: string;
    markUnread: string;
  };
  // Landing Page
  landing: {
    badge: string;
    heroTitle1: string;
    heroTitle2: string;
    heroSubtitle: string;
    exploreDashboard: string;
    viewCapabilities: string;
    soc2: string;
    uptime: string;
    compliance: string;
    previewHeading: string;
    previewSubtitle: string;
    tabQueue: string;
    tabSla: string;
    tabAssets: string;
    launchLive: string;
    queueHeader: string;
    slaHealthy: string;
    p1Rate: string;
    p1Met: string;
    p1Desc: string;
    hardwareFleet: string;
    totalManaged: string;
    routerConnected: string;
    openFullConsole: string;
    featuresSub: string;
    featuresHeading: string;
    featuresDesc: string;
    exploreAllFeatures: string;
    workflowSub: string;
    workflowHeading: string;
    workflowDesc: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
    ctaHeading: string;
    ctaSubtitle: string;
    ctaButton: string;
    ctaSpecs: string;
    footerDesc: string;
    footerRights: string;
    allSystemsNormal: string;
  };
  // Dashboard
  dashboard: {
    welcome: string;
    systemNormal: string;
    subtext: string;
    slaTitle: string;
    mttrTitle: string;
    backlogTitle: string;
    fcrTitle: string;
    activityTitle: string;
    activityDesc: string;
    createdLegend: string;
    resolvedLegend: string;
    statusTitle: string;
    statusDesc: string;
    backlogRatio: string;
    recentQueueTitle: string;
    recentQueueDesc: string;
    viewAllQueue: string;
    streamTitle: string;
    streamDesc: string;
    allLogs: string;
    newIncidentBtn: string;
    provisionAssetBtn: string;
    onCallBtn: string;
    exportAuditBtn: string;
  };
  // Tickets
  tickets: {
    title: string;
    subtitle: string;
    createBtn: string;
    allTab: string;
    openTab: string;
    progressTab: string;
    pendingTab: string;
    resolvedTab: string;
    allPriorities: string;
    p1Urgent: string;
    p2High: string;
    p3Medium: string;
    p4Low: string;
    searchPlaceholder: string;
    colKey: string;
    colSummary: string;
    colPriority: string;
    colStatus: string;
    colSla: string;
    colAssignee: string;
    colCreated: string;
    emptyTitle: string;
    emptyDesc: string;
    paginationShowing: string;
    paginationOf: string;
    paginationTickets: string;
    drawerTargetSla: string;
    drawerContext: string;
    drawerScope: string;
    drawerTags: string;
    drawerAuditLog: string;
    drawerAddNotePlaceholder: string;
    drawerResolveBtn: string;
  };
  // Assets
  assets: {
    title: string;
    subtitle: string;
    registerBtn: string;
    totalValuation: string;
    activeProduction: string;
    readyStock: string;
    searchPlaceholder: string;
    allCategories: string;
    colTag: string;
    colModel: string;
    colCategory: string;
    colStatus: string;
    colCustodian: string;
    colWarranty: string;
    colValue: string;
    inStockLocation: string;
    modalTitle: string;
    modalDesc: string;
    modalName: string;
    modalCost: string;
    modalModel: string;
    modalSerial: string;
    modalSubmit: string;
  };
  // Team
  team: {
    title: string;
    subtitle: string;
    inviteBtn: string;
    primaryTitle: string;
    primarySub: string;
    secondaryTitle: string;
    secondarySub: string;
    rotationActive: string;
    standbyActive: string;
    rosterTitle: string;
    rosterDesc: string;
    colEngineer: string;
    colDepartment: string;
    colTier: string;
    colDuty: string;
    colWorkload: string;
    colResolved7d: string;
    dutyPrimary: string;
    dutySecondary: string;
    dutyOff: string;
    capacityLabel: string;
    modalTitle: string;
    modalDesc: string;
    modalName: string;
    modalEmail: string;
    modalRole: string;
    modalSubmit: string;
  };
  // Reports
  reports: {
    title: string;
    subtitle: string;
    exportBtn: string;
    overallSla: string;
    mttrLabel: string;
    fcrLabel: string;
    csatLabel: string;
    chartTitle: string;
    chartDesc: string;
    targetSlaLabel: string;
    actualMedianLabel: string;
    matrixTitle: string;
    matrixDesc: string;
    colTier: string;
    colTarget: string;
    colActual: string;
    colTotal: string;
    colMet: string;
    colBreaches: string;
  };
  // Notifications
  notifications: {
    title: string;
    subtitle: string;
    markAllBtn: string;
    tabAll: string;
    tabSla: string;
    tabAssign: string;
    tabSystem: string;
    emptyTitle: string;
    emptyDesc: string;
  };
  // Settings
  settings: {
    title: string;
    subtitle: string;
    saveBtn: string;
    noticeTitle: string;
    noticeDesc: string;
    langTitle: string;
    langDesc: string;
    langId: string;
    langEn: string;
    langSelectedNote: string;
    orgTitle: string;
    orgDesc: string;
    companyName: string;
    tenantSubdomain: string;
    slaTitle: string;
    slaDesc: string;
    p1Header: string;
    p2Header: string;
    p3Header: string;
    p4Header: string;
    securityTitle: string;
    securityDesc: string;
    ssoTitle: string;
    ssoDesc: string;
    scimTitle: string;
    scimDesc: string;
  };
  // Features page
  features: {
    heroSub: string;
    heroTitle: string;
    heroDesc: string;
    openDemo: string;
    matrixTitle: string;
    matrixSub: string;
    dimLabel: string;
    legacyLabel: string;
    opsdeskLabel: string;
    dim1Title: string;
    dim1Legacy: string;
    dim1Opsdesk: string;
    dim2Title: string;
    dim2Legacy: string;
    dim2Opsdesk: string;
    dim3Title: string;
    dim3Legacy: string;
    dim3Opsdesk: string;
    dim4Title: string;
    dim4Legacy: string;
    dim4Opsdesk: string;
    ctaBtn: string;
  };
}

export const DICTIONARY: Record<Language, Translations> = {
  id: {
    nav: {
      overview: "Ringkasan",
      capabilities: "Kapabilitas",
      demo: "Demo Interaktif",
      signIn: "Masuk",
      openConsole: "Buka Konsol",
      workspace: "Ruang Kerja",
      dashboard: "Dashboard",
      ticketsQueue: "Antrean Tiket",
      assetsFleet: "Armada Aset IT",
      operations: "Operasional",
      teamOnCall: "Tim & On-Call",
      slaAnalytics: "SLA & Analitik",
      alertsEvents: "Peringatan & Log",
      platform: "Platform",
      settingsSla: "Pengaturan & SLA",
      newTicket: "Tiket Baru",
      searchPlaceholder: "Cari perintah, tiket...",
      searchCmd: "Cari",
      slaActive: "SLA Engine 100% Aktif",
      slaTargetSub: "Target 98.5% • Aktual 99.4%",
      previewBadge: "Preview Interaktif",
      landing: "Beranda",
      markAllRead: "Tandai terbaca",
      viewAll: "Lihat semua",
      preferences: "Preferensi",
      unread: "belum dibaca",
    },
    common: {
      quickActions: "Aksi Cepat",
      createTicketTitle: "Buat Tiket Insiden / Permintaan Baru",
      appNav: "Navigasi Aplikasi",
      matchingTickets: "Insiden & Permintaan Terkait",
      navHint: "Navigasi dengan mouse atau keyboard",
      escHint: "ESC untuk menutup",
      cancel: "Batal",
      save: "Simpan Perubahan",
      saving: "Menyimpan...",
      close: "Tutup",
      details: "Detail",
      status: "Status",
      priority: "Prioritas",
      category: "Kategori",
      assignee: "Penanggung Jawab",
      requester: "Pelapor",
      created: "Dibuat",
      actions: "Aksi",
      inspect: "Inspeksi",
      markRead: "Tandai terbaca",
      markUnread: "Tandai belum dibaca",
    },
    landing: {
      badge: "OpsDesk 1.0 — Platform ITSM Enterprise",
      heroTitle1: "Manajemen Layanan IT,",
      heroTitle2: "dirancang untuk kecepatan dan presisi.",
      heroSubtitle:
        "Platform berkecepatan tinggi yang dirancang khusus untuk tim rekayasa perangkat lunak dan IT enterprise. Hilangkan utang tiket dengan pelacakan SLA otomatis, triase instan, dan pengelolaan siklus hidup aset perangkat keras terpadu.",
      exploreDashboard: "Jelajahi Dashboard Live",
      viewCapabilities: "Lihat Kapabilitas Teknis",
      soc2: "Tersertifikasi SOC 2 Type II",
      uptime: "Jaminan SLA Uptime 99.99%",
      compliance: "Sesuai Standar ISO 27001 & HIPAA",
      previewHeading: "Kendali presisi di seluruh ekosistem IT Anda.",
      previewSubtitle:
        "Ruang kerja terpadu di mana insiden, aset armada, dan perjanjian tingkat layanan (SLA) bertemu secara mulus.",
      tabQueue: "Antrean Insiden",
      tabSla: "Kepatuhan SLA",
      tabAssets: "Armada Aset IT",
      launchLive: "Buka Live",
      queueHeader: "Antrean Insiden Aktif (Menampilkan 4 dari 18)",
      slaHealthy: "Jam SLA Sehat",
      p1Rate: "Tingkat Resolusi Prioritas 1 (Genting)",
      p1Met: "100.0% Terpenuhi",
      p1Desc: "Nol pelanggaran SLA tercatat pada 12 insiden produksi P1 terakhir.",
      hardwareFleet: "Pelacakan Armada Perangkat Keras Enterprise",
      totalManaged: "6 Total Unit Terkelola",
      routerConnected: "Router Telemetri OpsDesk terhubung",
      openFullConsole: "Buka Konsol Lengkap",
      featuresSub: "Arsitektur Enterprise",
      featuresHeading: "Dirancang untuk operasi IT berkinerja tinggi.",
      featuresDesc:
        "OpsDesk meniadakan antarmuka lambat dan kaku, memberikan tim Anda kecepatan setara alat pengembang modern.",
      exploreAllFeatures: "Jelajahi seluruh fitur dan spesifikasi teknis",
      workflowSub: "Siklus Hidup Operasional",
      workflowHeading: "Dari deteksi telemetri hingga resolusi terverifikasi.",
      workflowDesc:
        "Alur kerja terstandarisasi dan dapat diaudit secara transparan, siap untuk kepatuhan enterprise.",
      step1Title: "Ingesti & Pemicu Telemetri",
      step1Desc:
        "Insiden masuk otomatis via webhook Datadog, alarm CloudWatch, perintah Slack, atau portal layanan internal.",
      step2Title: "Triase Cerdas & Penugasan",
      step2Desc:
        "OpsDesk membedah tingkat keparahan, menetapkan prioritas (P1-P4), memulai hitung mundur SLA, dan menghubungi spesialis on-call.",
      step3Title: "Resolusi Kolaboratif",
      step3Desc:
        "Teknisi menganalisis telemetri, menghubungkan aset perangkat keras yang terdampak, mencatat akar masalah, dan menerapkan remediasi.",
      step4Title: "Audit & Ekspor Pasca-Insiden",
      step4Desc:
        "Jam SLA difinalisasi, survei kepuasan pelanggan dikirim otomatis, dan data disinkronkan ke dokumen audit kepatuhan.",
      ctaHeading: "Tingkatkan operasi IT Anda bersama OpsDesk.",
      ctaSubtitle:
        "Rasakan pengalaman triase insiden modern, tata kelola armada aset, dan pemantauan SLA tanpa beban sistem warisan yang lambat.",
      ctaButton: "Buka Konsol Interaktif",
      ctaSpecs: "Lihat Semua Kapabilitas",
      footerDesc:
        "Platform Manajemen Layanan IT berkecepatan tinggi untuk organisasi rekayasa modern. Penegakan SLA otomatis, pelacakan armada aset, dan eskalasi insiden tanggap darurat.",
      footerRights: "Hak cipta dilindungi undang-undang.",
      allSystemsNormal: "Sistem Operasional 100%",
    },
    dashboard: {
      welcome: "Selamat datang kembali",
      systemNormal: "Semua 14 Sistem Normal",
      subtext: "Konsol Infrastruktur Global • Kepatuhan SLA berjalan di 99.4% hari ini",
      slaTitle: "Tingkat Kepatuhan SLA",
      mttrTitle: "Rata-rata Waktu Resolusi (MTTR)",
      backlogTitle: "Backlog Insiden Aktif",
      fcrTitle: "Resolusi Kontak Pertama (FCR)",
      activityTitle: "Aktivitas & Kecepatan Tiket",
      activityDesc: "Jendela berjalan 7 hari insiden masuk vs terselesaikan",
      createdLegend: "Dibuat",
      resolvedLegend: "Terselesaikan",
      statusTitle: "Distribusi Status Tiket",
      statusDesc: "Penyebaran di 196 siklus hidup aktif",
      backlogRatio: "Rasio Backlog Aktif",
      recentQueueTitle: "Antrean Insiden Terkini",
      recentQueueDesc: "Umpan langsung insiden aktif yang membutuhkan tindakan teknisi",
      viewAllQueue: "Lihat semua antrean",
      streamTitle: "Linimasa Aktivitas Langsung",
      streamDesc: "Log sistem, serah terima triase, dan catatan audit",
      allLogs: "Semua log",
      newIncidentBtn: "Insiden Baru",
      provisionAssetBtn: "Alokasikan Aset",
      onCallBtn: "Jadwal On-Call",
      exportAuditBtn: "Ekspor Audit",
    },
    tickets: {
      title: "Antrean Insiden & Permintaan",
      subtitle: "Tiket layanan aktif, peringatan telemetri sistem, dan permohonan staf enterprise",
      createBtn: "Buat Tiket Baru",
      allTab: "Semua Tiket",
      openTab: "Terbuka",
      progressTab: "Dikerjakan",
      pendingTab: "Menunggu",
      resolvedTab: "Selesai",
      allPriorities: "Semua Prioritas",
      p1Urgent: "P1 - Genting (1h SLA)",
      p2High: "P2 - Tinggi (4h SLA)",
      p3Medium: "P3 - Sedang (8h SLA)",
      p4Low: "P4 - Rendah (24h SLA)",
      searchPlaceholder: "Cari nomor, ringkasan, pelapor...",
      colKey: "Nomor Tiket",
      colSummary: "Ringkasan & Kategori",
      colPriority: "Prioritas",
      colStatus: "Status",
      colSla: "Target SLA",
      colAssignee: "Penanggung Jawab",
      colCreated: "Dibuat",
      emptyTitle: "Tidak ada tiket yang cocok",
      emptyDesc: "Coba sesuaikan kata kunci pencarian atau hapus filter status",
      paginationShowing: "Menampilkan",
      paginationOf: "dari",
      paginationTickets: "tiket",
      drawerTargetSla: "Batas Akhir Target SLA",
      drawerContext: "Konteks & Telemetri Insiden",
      drawerScope: "Cakupan Dampak",
      drawerTags: "Tag Terkait",
      drawerAuditLog: "Log Audit Internal & Catatan",
      drawerAddNotePlaceholder: "Tambahkan catatan internal atau pembaruan remediasi...",
      drawerResolveBtn: "Tandai sebagai Selesai",
    },
    assets: {
      title: "Manajemen Armada Aset IT",
      subtitle: "Inventaris laptop, perangkat jaringan, langganan SaaS, dan kunci keamanan MFA",
      registerBtn: "Daftarkan Aset",
      totalValuation: "Total Valuasi Armada",
      activeProduction: "Digunakan di Produksi",
      readyStock: "Siap di Gudang IT",
      searchPlaceholder: "Cari tag, model, nomor seri, divisi...",
      allCategories: "Semua Kategori",
      colTag: "Tag Aset",
      colModel: "Model Perangkat / Lisensi",
      colCategory: "Kategori",
      colStatus: "Status",
      colCustodian: "Penanggung Jawab (Staf)",
      colWarranty: "Garansi Hingga",
      colValue: "Nilai",
      inStockLocation: "Di Gudang IT (Vault)",
      modalTitle: "Daftarkan Aset IT Baru",
      modalDesc: "Tetapkan metadata dan nomor tag pelacakan untuk perangkat keras atau software.",
      modalName: "Nama / Deskripsi Aset",
      modalCost: "Harga (USD)",
      modalModel: "Model Perangkat",
      modalSerial: "Nomor Seri",
      modalSubmit: "Daftarkan Aset",
    },
    team: {
      title: "Tim & Rotasi On-Call",
      subtitle: "Spesialis tanggap darurat, kapasitas teknisi, dan kecepatan penanganan SLA",
      inviteBtn: "Undang Spesialis",
      primaryTitle: "Petugas On-Call Utama (P1)",
      primarySub: "Jendela SLA 15 menit respon cepat",
      secondaryTitle: "Petugas Cadangan On-Call",
      secondarySub: "Eskalasi otomatis jika petugas utama tidak merespon dalam 15 menit",
      rotationActive: "Rotasi aktif hingga Senin 09:00 UTC",
      standbyActive: "Mode siaga aktif",
      rosterTitle: "Daftar Spesialis & Kapasitas Beban Kerja",
      rosterDesc: "Alokasi tiket aktif terhadap batas kapasitas beban maksimal 8 tiket",
      colEngineer: "Teknisi",
      colDepartment: "Departemen",
      colTier: "Tingkat Operasional",
      colDuty: "Jadwal On-Call",
      colWorkload: "Beban Kerja Aktif",
      colResolved7d: "Selesai (7h)",
      dutyPrimary: "Utama",
      dutySecondary: "Cadangan",
      dutyOff: "Lepas Dinas",
      capacityLabel: "dari 8 aktif",
      modalTitle: "Undang Spesialis Layanan IT",
      modalDesc: "Tetapkan peran dan berikan kredensial akses direktori perusahaan.",
      modalName: "Nama Lengkap",
      modalEmail: "Email Perusahaan",
      modalRole: "Peran & Tingkat Izin",
      modalSubmit: "Kirim Undangan",
    },
    reports: {
      title: "Analitik SLA & Layanan IT",
      subtitle: "Rata-rata Waktu Resolusi (MTTR), tingkat kepatuhan SLA, dan skor kepuasan CSAT",
      exportBtn: "Ekspor Audit SOC 2",
      overallSla: "Kepatuhan SLA Keseluruhan",
      mttrLabel: "Rata-rata Waktu Resolusi (MTTR)",
      fcrLabel: "Resolusi Kontak Pertama (FCR)",
      csatLabel: "Skor Kepuasan Pengguna (CSAT)",
      chartTitle: "Waktu Resolusi vs Target SLA (Jam)",
      chartDesc: "Perbandingan batas maksimal komitmen SLA vs median waktu penyelesaian riil",
      targetSlaLabel: "Target Batas SLA",
      actualMedianLabel: "Median Aktual",
      matrixTitle: "Matriks Performa Tingkat SLA",
      matrixDesc: "Rincian komitmen layanan vs metrik performa terverifikasi",
      colTier: "Tingkat Prioritas",
      colTarget: "Target SLA",
      colActual: "Kepatuhan Riil",
      colTotal: "Total Insiden",
      colMet: "SLA Terpenuhi",
      colBreaches: "Pelanggaran",
    },
    notifications: {
      title: "Umpan Notifikasi & Peringatan",
      subtitle: "Peringatan sistem, indikator risiko SLA, dan eskalasi triase otomatis",
      markAllBtn: "Tandai semua terbaca",
      tabAll: "Semua Peringatan",
      tabSla: "Peringatan SLA",
      tabAssign: "Penugasan",
      tabSystem: "Armada & Sistem",
      emptyTitle: "Tidak ada notifikasi dalam filter ini",
      emptyDesc: "Semua sistem beroperasi normal tanpa peringatan tertunda",
    },
    settings: {
      title: "Pengaturan Platform & Kebijakan SLA",
      subtitle: "Konfigurasi ruang kerja, ambang batas eskalasi, dan kontrol keamanan enterprise",
      saveBtn: "Simpan Perubahan",
      noticeTitle: "Catatan Arsitektur Fase 1:",
      noticeDesc:
        "Penyebaran ini berjalan di atas kontrak data model OpsDesk yang siap digantikan langsung dengan database PostgreSQL / Supabase dan Server Actions di Fase 2.",
      langTitle: "Bahasa & Lokalisasi / Language & Localization",
      langDesc: "Pilih bahasa tampilan antarmuka yang Anda inginkan.",
      langId: "Bahasa Indonesia (Aktif)",
      langEn: "English (United States)",
      langSelectedNote: "Perubahan bahasa berlaku instan ke seluruh navigasi, dashboard, dan halaman sistem.",
      orgTitle: "Identitas Ruang Kerja",
      orgDesc: "Nama organisasi dan subdomain tenant ITSM khusus",
      companyName: "Nama Perusahaan",
      tenantSubdomain: "Subdomain Tenant",
      slaTitle: "Ambang Batas Target SLA",
      slaDesc: "Pengatur waktu otomatis yang memicu eskalasi prioritas dan alarm peringatan",
      p1Header: "P1 - Genting / Pemadaman Layanan",
      p2Header: "P2 - Tinggi / Penurunan Kinerja",
      p3Header: "P3 - Sedang / Masalah Standar",
      p4Header: "P4 - Rendah / Pertanyaan & Permintaan",
      securityTitle: "Kontrol Keamanan Enterprise",
      securityDesc: "Single Sign-On (SAML 2.0 / Okta / Azure AD) dan sinkronisasi direktori otomatis",
      ssoTitle: "Wajibkan SAML 2.0 Single Sign-On",
      ssoDesc: "Mengharuskan seluruh staf login melalui Okta atau Google Workspace",
      scimTitle: "Siklus Pengguna Otomatis SCIM 2.0",
      scimDesc: "Mencabut kredensial secara instan saat karyawan dinonaktifkan di direktori pusat",
    },
    features: {
      heroSub: "Kapabilitas Teknis",
      heroTitle: "Diarsetekturi untuk kecepatan enterprise.",
      heroDesc:
        "Pelajari modul arsitektur inti yang mentenagai OpsDesk. Setiap kapabilitas dirancang demi performa tinggi, kejelasan informasi, dan keandalan penuh.",
      openDemo: "Buka Demo Aplikasi Live",
      matrixTitle: "OpsDesk vs ITSM Enterprise Konvensional",
      matrixSub: "Pergeseran paradigma modern untuk organisasi yang berpusat pada rekayasa teknologi.",
      dimLabel: "Dimensi Evaluasi",
      legacyLabel: "ITSM Enterprise Konvensional",
      opsdeskLabel: "SaaS Modern OpsDesk",
      dim1Title: "Kecepatan Interaksi UI",
      dim1Legacy: "Lambat, jeda muat 3-5 detik",
      dim1Opsdesk: "Transisi instan di bawah 100ms",
      dim2Title: "Navigasi Keyboard",
      dim2Legacy: "Formulir panjang berbasis mouse",
      dim2Opsdesk: "Palet perintah universal ⌘K",
      dim3Title: "Integrasi Aset",
      dim3Legacy: "Database CMDB terisolasi",
      dim3Opsdesk: "Terintegrasi langsung dengan tiket",
      dim4Title: "Penegakan SLA",
      dim4Legacy: "Pemeriksaan cron job berkala",
      dim4Opsdesk: "Jam hitung mundur proaktif real-time",
      ctaBtn: "Coba Platform Sekarang Juga",
    },
  },
  en: {
    nav: {
      overview: "Overview",
      capabilities: "Capabilities",
      demo: "Interactive Demo",
      signIn: "Sign In",
      openConsole: "Open Console",
      workspace: "Workspace",
      dashboard: "Dashboard",
      ticketsQueue: "Tickets Queue",
      assetsFleet: "IT Assets Fleet",
      operations: "Operations",
      teamOnCall: "Team & On-Call",
      slaAnalytics: "SLA & Analytics",
      alertsEvents: "Alerts & Events",
      platform: "Platform",
      settingsSla: "Settings & SLAs",
      newTicket: "New Ticket",
      searchPlaceholder: "Search commands, tickets...",
      searchCmd: "Search",
      slaActive: "SLA Engine 100% Active",
      slaTargetSub: "Target 98.5% • Current 99.4%",
      previewBadge: "Interactive Preview",
      landing: "Landing",
      markAllRead: "Mark all read",
      viewAll: "View all",
      preferences: "Preferences",
      unread: "unread",
    },
    common: {
      quickActions: "Quick Actions",
      createTicketTitle: "Create New Incident or Request",
      appNav: "Application Navigation",
      matchingTickets: "Matching Incidents & Requests",
      navHint: "Navigate with mouse or keyboard",
      escHint: "ESC to close",
      cancel: "Cancel",
      save: "Save Changes",
      saving: "Saving...",
      close: "Close",
      details: "Details",
      status: "Status",
      priority: "Priority",
      category: "Category",
      assignee: "Assignee",
      requester: "Requester",
      created: "Created",
      actions: "Actions",
      inspect: "Inspect",
      markRead: "Mark read",
      markUnread: "Mark unread",
    },
    landing: {
      badge: "OpsDesk 1.0 — Enterprise ITSM Platform",
      heroTitle1: "IT Service Management,",
      heroTitle2: "engineered for speed and precision.",
      heroSubtitle:
        "A minimalist, lightning-fast platform designed for high-velocity engineering and IT teams. Eliminate ticket debt with automated SLA tracking, instant triage, and unified hardware asset lifecycle management.",
      exploreDashboard: "Explore Live Dashboard",
      viewCapabilities: "View Technical Capabilities",
      soc2: "SOC 2 Type II Certified",
      uptime: "99.99% Guaranteed SLA",
      compliance: "ISO 27001 & HIPAA Compliant",
      previewHeading: "Precision control across your IT ecosystem.",
      previewSubtitle:
        "A real-time workspace where incidents, assets, and service level agreements converge seamlessly.",
      tabQueue: "Incident Queue",
      tabSla: "SLA Compliance",
      tabAssets: "IT Asset Fleet",
      launchLive: "Launch Live",
      queueHeader: "Active Incident Queue (Showing 4 of 18)",
      slaHealthy: "SLA Clock Healthy",
      p1Rate: "Priority 1 (Critical) Resolution Rate",
      p1Met: "100.0% Met",
      p1Desc: "Zero SLA breaches recorded across the last 12 P1 production incidents.",
      hardwareFleet: "Enterprise Hardware Fleet Tracking",
      totalManaged: "6 Total Managed Units",
      routerConnected: "OpsDesk Intelligent Router connected",
      openFullConsole: "Open Full Console",
      featuresSub: "Enterprise Architecture",
      featuresHeading: "Engineered for high-performing IT operations.",
      featuresDesc:
        "OpsDesk eliminates clutter and sluggish interfaces, giving your team the speed of modern developer tools.",
      exploreAllFeatures: "Explore all features and technical specifications",
      workflowSub: "Operational Lifecycle",
      workflowHeading: "From alert detection to verified resolution.",
      workflowDesc:
        "A standardized, auditable workflow built for compliance and engineering velocity.",
      step1Title: "Ingest & Telemetry Trigger",
      step1Desc:
        "Incidents stream in via Datadog webhooks, CloudWatch alerts, Slack commands, or the internal service portal.",
      step2Title: "Intelligent Triage & Assignment",
      step2Desc:
        "OpsDesk parses severity, assigns priority (P1-P4), initializes the SLA countdown, and notifies the on-call specialist.",
      step3Title: "Collaborative Resolution",
      step3Desc:
        "Engineers diagnose telemetry, link impacted hardware assets, document root causes, and execute remediation.",
      step4Title: "Audit & Post-Mortem Export",
      step4Desc:
        "SLA clocks finalize, CSAT feedback surveys dispatch automatically, and data syncs to the compliance audit record.",
      ctaHeading: "Elevate your IT operations with OpsDesk.",
      ctaSubtitle:
        "Experience modern incident triage, asset fleet governance, and continuous SLA monitoring with zero legacy bloat.",
      ctaButton: "Open Interactive Console",
      ctaSpecs: "View All Capabilities",
      footerDesc:
        "The high-velocity IT Service Management platform designed for modern engineering organizations. Automated SLA enforcement, hardware fleet tracking, and incident escalation.",
      footerRights: "All rights reserved.",
      allSystemsNormal: "Operational Systems 100%",
    },
    dashboard: {
      welcome: "Welcome back",
      systemNormal: "All 14 Systems Normal",
      subtext: "Global Infrastructure Console • SLA compliance running at 99.4% today",
      slaTitle: "SLA Compliance Rate",
      mttrTitle: "Mean Time to Resolve (MTTR)",
      backlogTitle: "Open Incident Backlog",
      fcrTitle: "First Contact Resolution",
      activityTitle: "Ticket Activity & Velocity",
      activityDesc: "7-day rolling window of incoming vs resolved incidents",
      createdLegend: "Created",
      resolvedLegend: "Resolved",
      statusTitle: "Status Breakdown",
      statusDesc: "Distribution across 196 active lifecycle states",
      backlogRatio: "Active Backlog Ratio",
      recentQueueTitle: "Recent Incident Queue",
      recentQueueDesc: "Real-time feed of active tickets requiring engineering action",
      viewAllQueue: "View all queue",
      streamTitle: "Live Activity Stream",
      streamDesc: "System logs, triage handoffs, and audit milestones",
      allLogs: "All logs",
      newIncidentBtn: "New Incident",
      provisionAssetBtn: "Provision Asset",
      onCallBtn: "On-Call Schedule",
      exportAuditBtn: "Export Audit",
    },
    tickets: {
      title: "Incident & Request Queue",
      subtitle: "Active service desk tickets, telemetry alerts, and enterprise requests",
      createBtn: "Create Ticket",
      allTab: "All Tickets",
      openTab: "Open",
      progressTab: "In Progress",
      pendingTab: "Pending",
      resolvedTab: "Resolved",
      allPriorities: "All Priorities",
      p1Urgent: "P1 - Urgent (1h SLA)",
      p2High: "P2 - High (4h SLA)",
      p3Medium: "P3 - Medium (8h SLA)",
      p4Low: "P4 - Low (24h SLA)",
      searchPlaceholder: "Filter by key, summary, user...",
      colKey: "Incident Key",
      colSummary: "Summary & Category",
      colPriority: "Priority",
      colStatus: "Status",
      colSla: "SLA Target",
      colAssignee: "Assignee",
      colCreated: "Created",
      emptyTitle: "No matching tickets found",
      emptyDesc: "Try adjusting your search criteria or clear status filters",
      paginationShowing: "Showing",
      paginationOf: "of",
      paginationTickets: "tickets",
      drawerTargetSla: "Target SLA Deadline",
      drawerContext: "Incident Context & Telemetry",
      drawerScope: "Impact Scope",
      drawerTags: "Associated Tags",
      drawerAuditLog: "Internal Audit Log & Notes",
      drawerAddNotePlaceholder: "Add internal note or remediation update...",
      drawerResolveBtn: "Mark as Resolved",
    },
    assets: {
      title: "IT Asset Management & Fleet",
      subtitle: "Hardware workstations, network appliances, SaaS subscriptions, and security tokens",
      registerBtn: "Register Asset",
      totalValuation: "Total Fleet Valuation",
      activeProduction: "Deployed in Production",
      readyStock: "Ready in Depot Stock",
      searchPlaceholder: "Search by tag, model, serial, department...",
      allCategories: "All Categories",
      colTag: "Asset Tag",
      colModel: "Hardware / License Model",
      colCategory: "Category",
      colStatus: "Status",
      colCustodian: "Assigned Custodian",
      colWarranty: "Warranty Thru",
      colValue: "Value",
      inStockLocation: "In IT Stock (Vault)",
      modalTitle: "Enroll New IT Asset",
      modalDesc: "Assign asset metadata and tracking tag to company hardware or software catalog.",
      modalName: "Asset Name / Description",
      modalCost: "Cost (USD)",
      modalModel: "Model Identifier",
      modalSerial: "Serial Number",
      modalSubmit: "Enroll Asset",
    },
    team: {
      title: "Team & On-Call Rotation",
      subtitle: "Escalation responders, engineering capacity, and weekly SLA velocity",
      inviteBtn: "Invite Specialist",
      primaryTitle: "Primary P1 On-Call Responder",
      primarySub: "15m SLA Window for critical incidents",
      secondaryTitle: "Secondary Backup Responder",
      secondarySub: "Auto-escalates after 15m if unacknowledged",
      rotationActive: "Rotation active until Monday 09:00 UTC",
      standbyActive: "Standby mode active",
      rosterTitle: "Specialists & Workload Capacity",
      rosterDesc: "Active ticket allocation relative to 8-ticket concurrent capacity limit",
      colEngineer: "Engineer",
      colDepartment: "Department",
      colTier: "Operational Tier",
      colDuty: "On-Call Duty",
      colWorkload: "Active Workload",
      colResolved7d: "Resolved (7d)",
      dutyPrimary: "Primary",
      dutySecondary: "Secondary",
      dutyOff: "Off-duty",
      capacityLabel: "of 8 active",
      modalTitle: "Invite Service Desk Specialist",
      modalDesc: "Assign role and provision corporate directory credentials.",
      modalName: "Full Name",
      modalEmail: "Enterprise Email",
      modalRole: "Role & Permission Tier",
      modalSubmit: "Send Invitation",
    },
    reports: {
      title: "SLA & Service Desk Analytics",
      subtitle: "Mean Time to Resolution (MTTR), SLA compliance tiers, and CSAT customer satisfaction",
      exportBtn: "Export SOC 2 Audit",
      overallSla: "Overall SLA Compliance",
      mttrLabel: "Mean Time to Resolve (MTTR)",
      fcrLabel: "First Contact Resolution",
      csatLabel: "Customer CSAT Score",
      chartTitle: "Resolution Time vs SLA Target (Hours)",
      chartDesc: "Comparison of committed maximum resolution window vs actual median resolution time",
      targetSlaLabel: "Target Limit",
      actualMedianLabel: "Actual Median",
      matrixTitle: "SLA Tier Performance Matrix",
      matrixDesc: "Breakdown of committed targets vs audited performance metrics",
      colTier: "Priority Tier",
      colTarget: "Target SLA",
      colActual: "Actual Compliance",
      colTotal: "Total Incidents",
      colMet: "SLA Met",
      colBreaches: "Breaches",
    },
    notifications: {
      title: "Alerts & Notification Feed",
      subtitle: "System warnings, SLA risk triggers, and automated triage escalations",
      markAllBtn: "Mark all as read",
      tabAll: "All Alerts",
      tabSla: "SLA Warnings",
      tabAssign: "Assignments",
      tabSystem: "Fleet & System",
      emptyTitle: "No notifications in this filter",
      emptyDesc: "All systems operating normally without outstanding alerts",
    },
    settings: {
      title: "Platform Settings & SLA Policies",
      subtitle: "Workspace configuration, escalation thresholds, and enterprise security controls",
      saveBtn: "Save Changes",
      noticeTitle: "Phase 1 Architectural Notice:",
      noticeDesc:
        "This deployment runs on OpsDesk's typed preview data contracts. All schema definitions are pre-wired for direct substitution with PostgreSQL / Supabase in Phase 2.",
      langTitle: "Language & Localization / Bahasa & Lokalisasi",
      langDesc: "Choose your preferred user interface language.",
      langId: "Bahasa Indonesia",
      langEn: "English (United States)",
      langSelectedNote: "Language changes are applied immediately across all navigation, dashboard, and system pages.",
      orgTitle: "Workspace Identity",
      orgDesc: "Organization name and dedicated ITSM tenant subdomain",
      companyName: "Company Name",
      tenantSubdomain: "Tenant Subdomain",
      slaTitle: "SLA Target Thresholds",
      slaDesc: "Automated timers that drive priority escalation and notification alarms",
      p1Header: "P1 - Critical / Outage",
      p2Header: "P2 - High / Degraded",
      p3Header: "P3 - Medium / Standard",
      p4Header: "P4 - Low / Inquiries",
      securityTitle: "Enterprise Security Controls",
      securityDesc: "Single Sign-On (SAML 2.0 / Okta / Azure AD) and automated directory synchronization",
      ssoTitle: "Enforce SAML 2.0 Single Sign-On",
      ssoDesc: "Require all specialists to authenticate through Okta or Google Workspace",
      scimTitle: "Automated SCIM 2.0 User Lifecycle",
      scimDesc: "Instantly revoke credentials when employees offboard from corporate directory",
    },
    features: {
      heroSub: "Technical Capabilities",
      heroTitle: "Architected for enterprise velocity.",
      heroDesc:
        "Explore the core architectural systems powering OpsDesk. Every capability is designed for speed, clarity, and uncompromising reliability.",
      openDemo: "Open Live Application Demo",
      matrixTitle: "OpsDesk vs Legacy Enterprise ITSM",
      matrixSub: "A modern architectural paradigm shift for engineering-driven organizations.",
      dimLabel: "Evaluation Dimension",
      legacyLabel: "Legacy Enterprise ITSM",
      opsdeskLabel: "OpsDesk Modern SaaS",
      dim1Title: "UI Interaction Speed",
      dim1Legacy: "3-5s page load delays",
      dim1Opsdesk: "Sub-100ms instant transitions",
      dim2Title: "Keyboard Navigation",
      dim2Legacy: "Mouse-heavy forms",
      dim2Opsdesk: "Universal ⌘K command bar",
      dim3Title: "Asset Integration",
      dim3Legacy: "Disconnected CMDB silo",
      dim3Opsdesk: "Directly unified with tickets",
      dim4Title: "SLA Enforcement",
      dim4Legacy: "Batch cron jobs",
      dim4Opsdesk: "Real-time proactive clocks",
      ctaBtn: "Experience the Platform Now",
    },
  },
};
