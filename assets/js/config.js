// ============================================================
// 収益化設定ファイル
// 以下の項目に自分のIDを入れると、サイト全体の収益化が有効になります。
// 設定は全て任意です。未設定でもサイトは正常に動作します。
// ============================================================
window.SITE_CONFIG = {
  // Google AdSense の クライアントID（例: ca-pub-XXXXXXXXXXXXXXXX）
  // 取得方法: https://adsense.google.com で審査・取得後、ここに入力してください。
  adsenseClient: "",

  // 暗号通貨による寄付先アドレス（任意・ご自身のウォレット）
  donation: {
    BTC: "",
    ETH: "",
    // MONA: "",
  },

  // アフィリエイトリンク（任意）例: { label: "Amazon", url: "https://www.amazon.co.jp/..." }
  affiliates: [],

  // Google Analytics 測定ID（任意）例: G-XXXXXXXXXX
  analyticsId: "",
};

// 広告スロット描画（未設定なら何も表示しない）
window.renderAdSlot = function (slotId) {
  var cfg = window.SITE_CONFIG || {};
  var container = document.getElementById(slotId);
  if (!container) return;
  if (!cfg.adsenseClient) {
    container.style.display = "none";
    return;
  }
  // AdSense スクリプトが未ロードなら読み込む
  if (!window.adsbygoogle) {
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + encodeURIComponent(cfg.adsenseClient);
    s.crossOrigin = "anonymous";
    document.head.appendChild(s);
  }
  container.innerHTML = "";
  var ins = document.createElement("ins");
  ins.className = "adsbygoogle";
  ins.style.display = "block";
  ins.dataset.adClient = cfg.adsenseClient;
  ins.dataset.adSlot = slotId;
  ins.dataset.adFormat = "auto";
  ins.dataset.fullWidthResponsive = "true";
  container.appendChild(ins);
  try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) {}
};

// Google Analytics 読み込み（設定済みの場合のみ）
window.initAnalytics = function () {
  var cfg = window.SITE_CONFIG || {};
  if (!cfg.analyticsId) return;
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag("js", new Date());
  gtag("config", cfg.analyticsId);
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(cfg.analyticsId);
  document.head.appendChild(s);
};
