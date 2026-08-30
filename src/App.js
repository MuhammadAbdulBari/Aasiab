import React, { useEffect, useRef, useState } from "react";
import {
  ShoppingBag,
  Heart,
  Search,
  Menu,
  X,
  Star,
  ArrowRight,
  ArrowUpRight,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Truck,
  Gem,
  Scissors,
  RefreshCw,
  Eye,
  Plus,
  Minus,
  Trash2,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

/* =============================================================================
   DESIGN SYSTEM — "Karkhana" (the workshop)
   Grounded in the subject: a Karachi hand-embroidery house. The signature
   device is the running stitch — a dashed thread line used structurally
   (dividers, underlines, progress) rather than decoratively. Labels read
   like fabric-care tags. Type pairs a high-contrast fashion-editorial serif
   against a plain mono utility face, the way a spec sheet sits next to a
   magazine spread. Radii are near-zero — this is a workshop, not a spa.
   ========================================================================== */
const P = {
  paper: "#F1ECE2",
  paperDeep: "#E6DDCB",
  ink: "#1B1815",
  ink2: "#2A2521",
  cream: "#F6F1E6",
  rani: "#B23A5C",
  raniDeep: "#7C2942",
  saffron: "#C07A22",
  saffronDeep: "#8F5A18",
  indigo: "#2B3350",
  indigoDeep: "#1B2036",
  line: "rgba(27,24,21,0.14)",
  lineStrong: "rgba(27,24,21,0.32)",
  lineOnDark: "rgba(246,241,230,0.16)",
};

const MODEL_IMG = "./hero.png";

const NAV_LINKS = [
  { label: "New In", to: "shop" },
  { label: "Collections", to: "shop" },
  { label: "Bridal", to: "bridal" },
  { label: "About", to: "about" },
  { label: "Contact", to: "contact" },
];

const CATEGORIES = ["Lawn", "Chiffon", "Silk", "Bridal Couture", "Festive Formals", "Ready-to-Wear", "Organza", "Winter Shawls"];

const STATS = [
  { end: 14, suffix: "", label: "Years in the karkhana" },
  { end: 52, suffix: "k", label: "Women dressed" },
  { end: 230, suffix: "", label: "Exclusive designs" },
  { end: 4.9, suffix: "", label: "Average rating", decimal: true },
];

const EDITS = [
  { idx: "I", title: "The Bridal Edit", desc: "Hand-finished silk and zardozi, cut for the one day you'll wear it and the decades you'll keep it.", color: P.raniDeep, to: "bridal", tall: true },
  { idx: "II", title: "Festive Luxe", desc: "Jewel-toned organza and chiffon, built for evenings that call for more.", color: P.indigoDeep, to: "shop" },
  { idx: "III", title: "Everyday Elegance", desc: "Lawn and cotton silhouettes with quiet detail — considered dressing for ordinary days.", color: P.saffronDeep, to: "shop" },
];

const NOOR_1 = "design1.png", NOOR_2 = "design1.png", NOOR_3 = "design1.png", NOOR_4 = "design1.png";
const ZOYA_1 = "design2.png", ZOYA_2 = "design2.png", ZOYA_3 = "design2.png", ZOYA_4 = "design2.png";
const ISHRAT_1 = "design3.png", ISHRAT_2 = "design3.png", ISHRAT_3 = "design3.png", ISHRAT_4 = "design3.png";
const MAHIRA_1 = "design4.png", MAHIRA_2 = "design4.png", MAHIRA_3 = "design4.png", MAHIRA_4 = "design4.png";
const RANIA_1 = "design5.png", RANIA_2 = "design5.png", RANIA_3 = "design5.png", RANIA_4 = "design5.png";
const ANAYA_1 = "design6.png", ANAYA_2 = "design6.png", ANAYA_3 = "design6.png", ANAYA_4 = "design6.png";
const SANA_1 = "design7.png", SANA_2 = "design7.png", SANA_3 = "design7.png", SANA_4 = "design7.png";
const LAILA_1 = "design8.png", LAILA_2 = "design8.png", LAILA_3 = "design8.png", LAILA_4 = "design8.png";
const WARDA_1 = "design9.png", WARDA_2 = "design9.png", WARDA_3 = "design9.png", WARDA_4 = "design9.png";
const FARAH_1 = "design10.png", FARAH_2 = "design10.png", FARAH_3 = "design10.png", FARAH_4 = "design10.png";
const ALIZEH_1 = "design11.png", ALIZEH_2 = "design11.png", ALIZEH_3 = "design11.png", ALIZEH_4 = "design11.png";
const MEHER_1 = "design12.png", MEHER_2 = "design12.png", MEHER_3 = "design12.png", MEHER_4 = "design12.png";

const PRODUCTS = [
  { id: 1, sku: "AS-0114", name: "Noor Embroidered Lawn 3-Piece", price: 8900, tag: "Lawn", color: P.saffron, rating: 4.8, desc: "A hand-embroidered lawn three-piece in a soft sage tone, finished with delicate thread-work along the neckline and hem. Unstitched, with dupatta included.", images: [NOOR_1, NOOR_2, NOOR_3, NOOR_4] },
  { id: 2, sku: "AS-0219", name: "Zoya Chiffon Formal Suit", price: 14500, tag: "Chiffon", color: P.indigo, rating: 4.9, desc: "Flowing chiffon in deep wine, layered over a silk slip, with hand-sewn sequin detailing at the sleeves — built for evenings that matter.", images: [ZOYA_1, ZOYA_2, ZOYA_3, ZOYA_4] },
  { id: 3, sku: "AS-0301", name: "Ishrat Bridal Silk Ensemble", price: 65000, tag: "Bridal Couture", color: P.raniDeep, rating: 5.0, desc: "Our signature bridal silk ensemble in champagne gold, hand-finished zardozi work throughout, paired with a heavily embellished dupatta.", images: [ISHRAT_1, ISHRAT_2, ISHRAT_3, ISHRAT_4] },
  { id: 4, sku: "AS-0122", name: "Mahira Digital Print Lawn", price: 6200, tag: "Lawn", color: P.saffronDeep, rating: 4.6, desc: "A digitally printed lawn suit in warm stone tones, lightweight and breathable — ready for long festive days.", images: [MAHIRA_1, MAHIRA_2, MAHIRA_3, MAHIRA_4] },
  { id: 5, sku: "AS-0408", name: "Rania Organza Party Wear", price: 22000, tag: "Organza", color: P.rani, rating: 4.9, desc: "Structured organza in deep emerald with hand-appliquéd florals, tailored for a fitted silhouette that holds its shape all evening.", images: [RANIA_1, RANIA_2, RANIA_3, RANIA_4] },
  { id: 6, sku: "AS-0512", name: "Anaya Net Embellished Suit", price: 28500, tag: "Festive Formals", color: P.indigoDeep, rating: 4.8, desc: "Net overlay with dense crystal and dabka embellishment on a wine base — our most-requested festive piece this season.", images: [ANAYA_1, ANAYA_2, ANAYA_3, ANAYA_4] },
  { id: 7, sku: "AS-0605", name: "Sana Cotton Everyday 2-Piece", price: 4500, tag: "Ready-to-Wear", color: P.ink2, rating: 4.5, desc: "Pure cotton in a relaxed cut, quiet embroidery at the cuffs — the piece you'll reach for on ordinary days.", images: [SANA_1, SANA_2, SANA_3, SANA_4] },
  { id: 8, sku: "AS-0733", name: "Laila Velvet Winter Shawl Set", price: 18000, tag: "Winter Shawls", color: P.ink2, rating: 4.9, desc: "Velvet shawl with gold-thread kashmiri embroidery, paired with a matching cotton-silk suit for cold-weather elegance.", images: [LAILA_1, LAILA_2, LAILA_3, LAILA_4] },
  { id: 9, sku: "AS-0221", name: "Warda Chiffon Embellished Saree", price: 19500, tag: "Chiffon", color: P.indigo, rating: 4.7, desc: "A pre-draped chiffon saree with a hand-embellished pallu, paired with a fitted embroidered blouse.", images: [WARDA_1, WARDA_2, WARDA_3, WARDA_4] },
  { id: 10, sku: "AS-0344", name: "Farah Bridal Gharara Set", price: 78000, tag: "Bridal Couture", color: P.raniDeep, rating: 5.0, desc: "A traditional gharara silhouette in deep wine silk, heavily hand-embroidered, designed for the walima.", images: [FARAH_1, FARAH_2, FARAH_3, FARAH_4] },
  { id: 11, sku: "AS-0417", name: "Alizeh Organza Kurta", price: 12800, tag: "Organza", color: P.rani, rating: 4.6, desc: "A single-piece organza kurta with a fitted yoke and delicate mirror-work, styled to be worn on its own or layered.", images: [ALIZEH_1, ALIZEH_2, ALIZEH_3, ALIZEH_4] },
  { id: 12, sku: "AS-0761", name: "Meher Winter Wool Suit", price: 16500, tag: "Winter Shawls", color: P.ink2, rating: 4.8, desc: "A soft wool-blend suit with subtle embroidery, made for layering through Karachi's brief but real winter.", images: [MEHER_1, MEHER_2, MEHER_3, MEHER_4] },
];

const SPECS = [
  { icon: Scissors, title: "Hand-finished embroidery", desc: "Every motif is worked by artisan hand, not machine." },
  { icon: Gem, title: "Premium fabrics", desc: "Silk, chiffon and lawn — sourced before it's cut." },
  { icon: Truck, title: "Nationwide delivery", desc: "Karachi to Khyber in 3–5 working days, tracked." },
  { icon: RefreshCw, title: "7-day easy exchange", desc: "Didn't fall right? Exchange it, no questions asked." },
];

const TESTIMONIALS = [
  { quote: "The fabric fell exactly the way it did in the video — which almost never happens. My Ishrat set is now the one thing I reach for.", name: "Hira Farooq", place: "Karachi", rating: 5 },
  { quote: "Ordered for my sister's mehndi and the embroidery work was better in person than in the photos. Genuinely couture-level finishing.", name: "Mahnoor Sheikh", place: "Lahore", rating: 5 },
  { quote: "Aasiab is the rare brand that feels equally right for a Tuesday and a wedding. The lawn pieces are on constant rotation.", name: "Amna Rizvi", place: "Islamabad", rating: 5 },
];

const TIMELINE = [
  { year: "2011", text: "A single karkhana in Karachi opens with three master craftsmen and a handful of lawn designs." },
  { year: "2015", text: "Aasiab's first bridal line launches, hand-embroidered zardozi work by artisans trained in-house." },
  { year: "2019", text: "Nationwide delivery begins — Aasiab reaches wardrobes beyond Karachi for the first time." },
  { year: "2023", text: "The Festive Luxe edit debuts, pairing organza and chiffon with modern silhouettes." },
  { year: "2026", text: "52,000+ women dressed, and the same three founding tailors still finish every bridal piece by hand." },
];

const VALUES = [
  { icon: Scissors, title: "Craft over speed", desc: "We'd rather finish a piece right than finish it fast." },
  { icon: Gem, title: "Fabric first", desc: "Every design starts with the textile, not the sketch." },
  { icon: Heart, title: "Made to keep", desc: "Clothing built for years of wear, not one season." },
];

/* --------------------------------- hooks ---------------------------------- */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function CountUp({ end, suffix = "", decimal = false, duration = 1400 }) {
  const [ref, visible] = useReveal(0.5);
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let start = null;
    let raf;
    const step = (ts) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(eased * end);
      if (progress < 1) raf = requestAnimationFrame(step);
      else setVal(end);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [visible, end, duration]);
  return (
    <span ref={ref}>
      {decimal ? val.toFixed(1) : Math.floor(val)}
      {suffix}
    </span>
  );
}

function fmt(n) {
  return n.toLocaleString("en-PK");
}

/* ------------------------------- shared bits ------------------------------- */

// Renders a real product photo when one loads; falls back to a woven-texture
// swatch in the product's assigned thread colour if the file is missing.
function Media({ src, alt, color, className = "", fit = "cover", children }) {
  const [broken, setBroken] = useState(false);
  const show = Boolean(src) && !broken;
  return (
    <div className={className} style={{ background: `linear-gradient(150deg, ${color} 0%, ${P.ink} 130%)` }}>
      {show && (
        <img src={src} alt={alt} className="media-photo" style={{ objectFit: fit }} loading="lazy" onError={() => setBroken(true)} />
      )}
      {!show && <div className="swatch-weave" aria-hidden="true" />}
      {children}
    </div>
  );
}

// The running-stitch: a dashed thread line that draws itself in on scroll.
// Used as the recurring structural signature between major sections.
function StitchRule({ dark = false }) {
  const [ref, visible] = useReveal(0.4);
  return (
    <div ref={ref} className={`stitch-rule ${dark ? "on-dark" : ""}`}>
      <svg viewBox="0 0 1000 8" preserveAspectRatio="none" className="stitch-rule-svg">
        <line x1="0" y1="4" x2="1000" y2="4" className={`stitch-rule-line ${visible ? "is-visible" : ""}`} />
      </svg>
    </div>
  );
}

function StitchMark() {
  const [ref, visible] = useReveal(0.35);
  return (
    <div ref={ref} className="stitch-mark">
      <svg viewBox="0 0 380 460" className="stitch-mark-svg" preserveAspectRatio="xMidYMid meet">
        <path d="M24,440 C150,380 40,300 170,260 C330,215 210,110 356,20" className={`stitch-mark-path ${visible ? "is-visible" : ""}`} />
        <circle cx="24" cy="440" r="4.5" className={`stitch-mark-dot ${visible ? "is-visible" : ""}`} />
        <circle cx="356" cy="20" r="4.5" className={`stitch-mark-dot ${visible ? "is-visible" : ""}`} />
      </svg>
    </div>
  );
}

function PageBanner({ index, title, crumb, navigate }) {
  return (
    <header className="page-banner">
      <div className="page-banner-inner">
        <div className="breadcrumb">
          <span onClick={() => navigate("home")}>Home</span>
          <ChevronRightIcon size={12} />
          <span className="current">{crumb}</span>
        </div>
        <div className="page-banner-row">
          <h1 className="page-banner-title">{title}</h1>
          <span className="page-banner-index">{index}</span>
        </div>
      </div>
      <StitchRule dark />
    </header>
  );
}

function ProductCard({ p, i, wishlisted, onWish, onAdd, navigate, feature = false }) {
  return (
    <Reveal delay={(i % 4) * 70} className={`product-card-wrap ${feature ? "is-feature" : ""}`}>
      <div className="product-card" onClick={() => navigate(`product/${p.id}`)}>
        <Media src={p.images && p.images[0]} alt={p.name} color={p.color} className="product-img" fit="contain">
          <span className="product-tag">{p.tag}</span>
          <button onClick={(e) => { e.stopPropagation(); onWish(p.id); }} className="wish-btn" aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}>
            <Heart size={15} fill={wishlisted ? P.rani : "none"} color={wishlisted ? P.rani : P.cream} strokeWidth={1.75} />
          </button>
          <div className="product-overlay">
            <button className="quick-add" onClick={(e) => { e.stopPropagation(); onAdd(p.id); }}>
              <Plus size={13} /> Add to bag
            </button>
            <button className="quick-view" aria-label="Quick view" onClick={(e) => { e.stopPropagation(); navigate(`product/${p.id}`); }}>
              <Eye size={15} />
            </button>
          </div>
        </Media>
        <div className="product-info">
          <div className="product-info-row">
            <h4>{p.name}</h4>
            <span className="product-rating"><Star size={10} fill={P.saffron} color={P.saffron} />{p.rating}</span>
          </div>
          <div className="product-info-row">
            <p className="product-price">Rs {fmt(p.price)}</p>
            <span className="product-sku">{p.sku}</span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function SearchOverlay({ open, onClose, navigate }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current && inputRef.current.focus(), 80);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const q = query.trim().toLowerCase();
  const results = q.length < 2 ? [] : PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(q) ||
    p.tag.toLowerCase().includes(q) ||
    p.sku.toLowerCase().includes(q) ||
    p.desc.toLowerCase().includes(q)
  );

  const go = (id) => { onClose(); navigate(`product/${id}`); };

  return (
    <div className={`search-overlay ${open ? "open" : ""}`} role="dialog" aria-label="Search" aria-modal="true">
      <div className="search-overlay-backdrop" onClick={onClose} />
      <div className="search-panel">
        <div className="search-bar">
          <Search size={18} strokeWidth={1.5} className="search-icon-lead" />
          <input
            ref={inputRef}
            className="search-input"
            placeholder="Search products, tags, SKU…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search products"
          />
          <button className="search-close" onClick={onClose} aria-label="Close search"><X size={20} strokeWidth={1.6} /></button>
        </div>
        <div className="search-results">
          {q.length >= 2 && results.length === 0 && (
            <div className="search-empty">No products found for <strong>"{query}"</strong></div>
          )}
          {q.length < 2 && (
            <div className="search-hint">Type at least 2 characters to search…</div>
          )}
          {results.map((p) => (
            <button key={p.id} className="search-result-row" onClick={() => go(p.id)}>
              <div className="search-result-img" style={{ background: `linear-gradient(135deg, ${p.color} 0%, ${P.ink} 140%)` }}>
                {p.images && p.images[0] && <img src={p.images[0]} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />}
              </div>
              <div className="search-result-info">
                <span className="search-result-tag">{p.tag}</span>
                <span className="search-result-name">{p.name}</span>
                <span className="search-result-price">Rs {p.price.toLocaleString()}</span>
              </div>
              <ArrowRight size={15} className="search-result-arrow" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Navbar({ scrolled, navigate, menuOpen, setMenuOpen, cartCount, wishCount, bump, onSearch }) {
  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <div className="wordmark" onClick={() => navigate("home")}>Aasiab.</div>
          <div className="nav-links">
            {NAV_LINKS.map((l) => (
              <span key={l.label} className="nav-link" onClick={() => navigate(l.to)}>{l.label}</span>
            ))}
          </div>
          <div className="nav-icons">
            <button className="icon-btn" aria-label="Search" onClick={onSearch}><Search size={17} strokeWidth={1.6} /></button>
            <button className="icon-btn" aria-label="Wishlist" onClick={() => navigate("wishlist")}>
              <Heart size={17} strokeWidth={1.6} />
              {wishCount > 0 && <span className="badge">{wishCount}</span>}
            </button>
            <button className="icon-btn" aria-label="Bag" onClick={() => navigate("cart")}>
              <ShoppingBag size={17} strokeWidth={1.6} />
              {cartCount > 0 && <span className={`badge ${bump ? "bump" : ""}`}>{cartCount}</span>}
            </button>
            <button className="icon-btn menu-toggle" aria-label="Menu" onClick={() => setMenuOpen(true)}><Menu size={19} strokeWidth={1.6} /></button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-head">
          <span className="wordmark" style={{ color: P.cream }} onClick={() => { navigate("home"); setMenuOpen(false); }}>Aasiab</span>
          <button className="mm-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X size={20} strokeWidth={1.6} />
          </button>
        </div>

        <nav className="mm-links">
          {NAV_LINKS.map((l, i) => (
            <button
              key={l.label}
              className="mm-link"
              style={{ transitionDelay: menuOpen ? `${80 + i * 55}ms` : "0ms" }}
              onClick={() => { navigate(l.to); setMenuOpen(false); }}
            >
              <span className="mm-link-idx">0{i + 1}</span>
              <span className="mm-link-label">{l.label}</span>
              <ArrowUpRight size={18} strokeWidth={1.5} className="mm-link-arrow" />
            </button>
          ))}
        </nav>

        <div className="mm-stitch"><StitchRule dark /></div>

        <div className="mm-utility">
          <button
            className="mm-util-btn"
            style={{ transitionDelay: menuOpen ? `${80 + NAV_LINKS.length * 55}ms` : "0ms" }}
            onClick={() => { navigate("cart"); setMenuOpen(false); }}
          >
            <ShoppingBag size={16} strokeWidth={1.6} />
            <span>Bag</span>
            {cartCount > 0 && <span className="mm-util-count">{cartCount}</span>}
          </button>
          <button
            className="mm-util-btn"
            style={{ transitionDelay: menuOpen ? `${80 + (NAV_LINKS.length + 1) * 55}ms` : "0ms" }}
            onClick={() => { navigate("wishlist"); setMenuOpen(false); }}
          >
            <Heart size={16} strokeWidth={1.6} />
            <span>Wishlist</span>
            {wishCount > 0 && <span className="mm-util-count">{wishCount}</span>}
          </button>
        </div>

        <div className="mm-footer">
          <div className="mm-footer-row">
            <a href="https://instagram.com/aasiab.official" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={15} /></a>
            <a href="https://facebook.com/aasiab.official" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook size={15} /></a>
            <a href="mailto:hello@aasiab.pk" aria-label="Email"><Mail size={15} /></a>
          </div>
          <span className="mm-footer-meta">Karachi, Pakistan · Est. 2011</span>
        </div>
      </div>
    </>
  );
}

function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">Aasiab</div>
          <p className="footer-blurb">Hand-finished womenswear out of Karachi — lawn, formals and bridal couture, made to be worn, not just admired.</p>
          <div className="footer-social">
            <a href="https://instagram.com/aasiab.official" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={15} strokeWidth={1.6} /><span>Instagram</span></a>
            <a href="https://facebook.com/aasiab.official" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook size={15} strokeWidth={1.6} /><span>Facebook</span></a>
            <a href="mailto:hello@aasiab.pk" aria-label="Email"><Mail size={15} strokeWidth={1.6} /><span>Email</span></a>
          </div>
        </div>
        <div>
          <div className="footer-heading">Shop</div>
          <div className="footer-links">
            <button onClick={() => navigate("shop")}>New In</button>
            <button onClick={() => navigate("bridal")}>Bridal Couture</button>
            <button onClick={() => navigate("shop")}>Festive Formals</button>
            <button onClick={() => navigate("shop")}>Lawn</button>
          </div>
        </div>
        <div>
          <div className="footer-heading">Help</div>
          <div className="footer-links">
            <button onClick={() => navigate("cart")}>Track order</button>
            <button onClick={() => navigate("contact")}>Shipping info</button>
            <button onClick={() => navigate("contact")}>Exchanges</button>
            <button onClick={() => navigate("contact")}>Contact us</button>
          </div>
        </div>
        <div>
          <div className="footer-heading">Studio</div>
          <div className="footer-links">
            <button onClick={() => navigate("about")}>Our story</button>
            <button onClick={() => navigate("about")}>Craftsmanship</button>
            <button onClick={() => navigate("contact")}>Careers</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Aasiab — All rights reserved</span>
        <span>Karachi, Pakistan · 24°51′N 67°00′E</span>
      </div>
    </footer>
  );
}

/* ---------------------------------- pages ---------------------------------- */
function HomePage({ navigate, wishlist, toggleWish, addToCart }) {
  const [activeT, setActiveT] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActiveT((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);
  const nextT = () => setActiveT((i) => (i + 1) % TESTIMONIALS.length);
  const prevT = () => setActiveT((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <>
      <header className="hero">
        <div className="hero-rail">
          <span>KARACHI</span><span>·</span><span>EST. 2011</span><span>·</span><span>HAND-FINISHED</span>
        </div>
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="eyebrow">Autumn / Winter Edit</div>
            <h1 className="hero-title">Draped in<br /><em>heritage</em>, tailored<br />for now.</h1>
            <p className="hero-sub">Aasiab brings hand-finished embroidery and considered silhouettes to the modern Pakistani wardrobe — from everyday lawn to once-in-a-lifetime bridal.</p>
            <div className="hero-ctas">
              <button className="btn btn-primary" onClick={() => navigate("shop")}>Shop new arrivals <ArrowRight size={15} /></button>
              <button className="btn btn-ghost" onClick={() => navigate("bridal")}>Explore bridal</button>
            </div>
          </div>
          <div className="hero-visual">
            <Media src={MODEL_IMG} alt="Aasiab hand-embroidered ensemble, modelled" color={P.raniDeep} className="hero-media" fit="contain" />
            <span className="hero-caption">01 — THE BRIDAL EDIT</span>
          </div>
        </div>
        <div className="facts-strip">
          {STATS.map((s) => (
            <div key={s.label} className="fact">
              <span className="fact-num"><CountUp end={s.end} suffix={s.suffix} decimal={s.decimal} /></span>
              <span className="fact-label">{s.label}</span>
            </div>
          ))}
        </div>
      </header>

      <div className="cat-index">
        {CATEGORIES.map((c, i) => (
          <React.Fragment key={c}>
            <span className="cat-item">{c}</span>
            {i < CATEGORIES.length - 1 && <span className="cat-sep">/</span>}
          </React.Fragment>
        ))}
      </div>

      <section className="section">
        <Reveal>
          <div className="section-head">
            <span className="section-eyebrow">Curated edits</span>
            <h2 className="section-title">Three ways to wear Aasiab</h2>
          </div>
        </Reveal>
        <div className="edits-grid">
          {EDITS.map((c, i) => (
            <Reveal key={c.title} delay={i * 110} className={c.tall ? "edit-span" : ""}>
              <div className="edit-card" style={{ background: `linear-gradient(160deg, ${c.color} 0%, ${P.ink} 145%)` }} onClick={() => navigate(c.to)}>
                <div className="swatch-weave" style={{ opacity: 0.5 }} />
                <span className="edit-idx">{c.idx}</span>
                <div className="edit-body">
                  <h3 className="edit-title">{c.title}</h3>
                  <p className="edit-desc">{c.desc}</p>
                  <span className="edit-link">Explore <ArrowUpRight size={14} /></span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <StitchRule />

      <section className="section">
        <div className="section-head-row">
          <Reveal><div className="section-head" style={{ marginBottom: 0 }}><span className="section-eyebrow">Just in</span><h2 className="section-title">New arrivals</h2></div></Reveal>
          <Reveal delay={120}><span className="text-link" onClick={() => navigate("shop")}>View all <ArrowRight size={14} /></span></Reveal>
        </div>
        <div className="products-grid">
          {PRODUCTS.slice(0, 8).map((p, i) => (
            <ProductCard key={p.id} p={p} i={i} feature={i === 0} wishlisted={wishlist.has(p.id)} onWish={toggleWish} onAdd={addToCart} navigate={navigate} />
          ))}
        </div>
      </section>

      <section className="craft-section">
        <div className="craft-inner">
          <Reveal><StitchMark /></Reveal>
          <Reveal delay={140}>
            <div className="craft-eyebrow">Since 2011</div>
            <h2 className="craft-title">Every seam has a story worth keeping.</h2>
            <p className="craft-text">Aasiab began as a single karkhana in Karachi with three master craftsmen and a belief that everyday clothing deserved the same care as an heirloom. Fourteen years on, that belief still runs through every piece.</p>
            <p className="craft-quote">"We don't finish a garment until it could be handed down."</p>
            <button className="btn  on-dark text-black" onClick={() => navigate("about")}>Our story <ArrowRight size={15} /></button>
          </Reveal>
        </div>
      </section>

      <section className="spec-section">
        <Reveal><div className="spec-head"><span className="section-eyebrow">The fine print</span><h2 className="section-title">What comes with every order</h2></div></Reveal>
        <div className="spec-list">
          {SPECS.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className="spec-row">
                <f.icon size={18} strokeWidth={1.5} className="spec-icon" />
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-inner">
          <div className="quote-slide">
            <div className="quote-stars">{[...Array(TESTIMONIALS[activeT].rating)].map((_, s) => <Star key={s} size={13} fill={P.saffron} color={P.saffron} />)}</div>
            <p className="quote-text">"{TESTIMONIALS[activeT].quote}"</p>
            <span className="quote-name">{TESTIMONIALS[activeT].name}</span>
            <span className="quote-place">{TESTIMONIALS[activeT].place}</span>
          </div>
          <div className="quote-nav">
            <button className="quote-arrow" onClick={prevT} aria-label="Previous testimonial"><ArrowLeft size={15} /></button>
            <span className="quote-counter">0{activeT + 1} / 0{TESTIMONIALS.length}</span>
            <button className="quote-arrow" onClick={nextT} aria-label="Next testimonial"><ArrowRight size={15} /></button>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <Reveal><div className="section-head"><span className="section-eyebrow">@aasiab.official</span><h2 className="section-title">Styled by you</h2></div></Reveal>
        <div className="gallery-grid">
          {PRODUCTS.slice(0, 6).map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <div className="gallery-tile">
                <Media src={p.images && p.images[0]} alt={p.name} color={p.color} className="gallery-tile-bg" />
                <span className="gallery-tile-caption">{p.sku}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}

function ShopPage({ navigate, wishlist, toggleWish, addToCart }) {
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("featured");
  const tabs = ["All", ...Array.from(new Set(PRODUCTS.map((p) => p.tag)))];

  let items = filter === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.tag === filter);
  if (sort === "low") items = [...items].sort((a, b) => a.price - b.price);
  if (sort === "high") items = [...items].sort((a, b) => b.price - a.price);

  return (
    <>
      <PageBanner index="No. 02" title="Shop All" crumb="Shop" navigate={navigate} />
      <section className="section">
        <div className="section-head-row" style={{ marginBottom: "1.4rem" }}>
          <div className="filter-tabs">
            {tabs.map((t) => (
              <button key={t} className={`filter-tab ${filter === t ? "active" : ""}`} onClick={() => setFilter(t)}>{t}</button>
            ))}
          </div>
          <select className="sort-select" value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort products">
            <option value="featured">Featured</option>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
          </select>
        </div>
        <p className="results-count">{items.length} pieces</p>
        <div className="products-grid">
          {items.map((p, i) => (
            <ProductCard key={p.id} p={p} i={i} wishlisted={wishlist.has(p.id)} onWish={toggleWish} onAdd={addToCart} navigate={navigate} />
          ))}
        </div>
        {items.length === 0 && (
          <div className="empty-state">
            <p>Nothing in this category yet — the karkhana is still working on it.</p>
          </div>
        )}
      </section>
    </>
  );
}

function BridalPage({ navigate, wishlist, toggleWish, addToCart }) {
  const items = PRODUCTS.filter((p) => p.tag === "Bridal Couture");
  return (
    <>
      <header className="hero bridal-hero">
        <div className="hero-rail"><span>BRIDAL COUTURE</span><span>·</span><span>MADE TO COMMISSION</span></div>
        <div className="hero-inner" style={{ gridTemplateColumns: "1fr" }}>
          <div className="hero-copy" style={{ maxWidth: 640 }}>
            <div className="breadcrumb" style={{ marginBottom: "1rem" }}>
              <span onClick={() => navigate("home")}>Home</span>
              <ChevronRightIcon size={12} /><span className="current">Bridal</span>
            </div>
            <div className="eyebrow">The Bridal Edit</div>
            <h1 className="hero-title">One day.<br /><em>One piece</em>, worked<br />entirely by hand.</h1>
            <p className="hero-sub">Every bridal ensemble is hand-embroidered by our founding tailors — from first sketch to final zardozi thread, allow 4–6 weeks per commission.</p>
            <div className="hero-ctas">
              <button className="btn btn-primary" onClick={() => navigate("contact")}>Book a consultation <ArrowRight size={15} /></button>
            </div>
          </div>
        </div>
      </header>
      <section className="section">
        <Reveal><div className="section-head"><span className="section-eyebrow">Bridal couture</span><h2 className="section-title">The lookbook</h2></div></Reveal>
        <div className="products-grid">
          {items.map((p, i) => (
            <ProductCard key={p.id} p={p} i={i} wishlisted={wishlist.has(p.id)} onWish={toggleWish} onAdd={addToCart} navigate={navigate} />
          ))}
        </div>
      </section>
      <section className="spec-section">
        <div className="spec-list">
          {SPECS.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className="spec-row">
                <f.icon size={18} strokeWidth={1.5} className="spec-icon" />
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

function ProductPage({ id, navigate, wishlist, toggleWish, addToCart }) {
  const product = PRODUCTS.find((p) => p.id === Number(id)) || PRODUCTS[0];
  const [size, setSize] = useState("M");
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState("desc");
  const [activeImg, setActiveImg] = useState(0);
  const related = PRODUCTS.filter((p) => p.tag === product.tag && p.id !== product.id).slice(0, 4);

  useEffect(() => { setSize("M"); setQty(1); setTab("desc"); setActiveImg(0); }, [id]);

  return (
    <>
      <div className="pd-crumb-wrap">
        <div className="pd-crumb-inner">
          <div className="breadcrumb on-dark">
            <span onClick={() => navigate("home")}>Home</span>
            <ChevronRightIcon size={12} />
            <span onClick={() => navigate("shop")}>Shop</span>
            <ChevronRightIcon size={12} />
            <span className="current">{product.name}</span>
          </div>
        </div>
      </div>
      <div className="pd-inner">
        <div className="pd-gallery">
          <Media src={product.images && product.images[activeImg]} alt={product.name} color={product.color} className="pd-main-img" />
          <div className="pd-thumbs">
            {(product.images || []).map((src, t) => (
              <button key={t} className={`pd-thumb ${t === activeImg ? "active" : ""}`} onClick={() => setActiveImg(t)} aria-label={`View image ${t + 1}`}>
                <Media src={src} alt={`${product.name} view ${t + 1}`} color={product.color} className="pd-thumb-media" />
              </button>
            ))}
          </div>
        </div>
        <div className="pd-info">
          <div className="pd-cat">{product.tag} · {product.sku}</div>
          <h1 className="pd-title">{product.name}</h1>
          <div className="pd-rating"><Star size={13} fill={P.saffron} color={P.saffron} /> {product.rating} · 128 reviews</div>
          <div className="pd-price">Rs {fmt(product.price)}</div>
          <p className="pd-desc">{product.desc}</p>

          <div>
            <div className="pd-label">Size</div>
            <div className="size-row">
              {["XS", "S", "M", "L", "XL"].map((s) => (
                <button key={s} className={`size-pill ${size === s ? "active" : ""}`} onClick={() => setSize(s)}>{s}</button>
              ))}
            </div>
          </div>

          <div className="qty-row">
            <div className="pd-label" style={{ marginBottom: 0 }}>Quantity</div>
            <div className="qty-stepper">
              <button className="qty-btn" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity"><Minus size={14} /></button>
              <span className="qty-val">{qty}</span>
              <button className="qty-btn" onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity"><Plus size={14} /></button>
            </div>
          </div>

          <div className="pd-actions">
            <button className="btn btn-primary" style={{ flex: 1, justifyContent: "center" }} onClick={() => addToCart(product.id, qty)}>
              <ShoppingBag size={15} /> Add to bag
            </button>
            <button className="pd-wish" onClick={() => toggleWish(product.id)} aria-label={wishlist.has(product.id) ? "Remove from wishlist" : "Add to wishlist"}>
              <Heart size={18} fill={wishlist.has(product.id) ? P.rani : "none"} color={wishlist.has(product.id) ? P.rani : P.ink} strokeWidth={1.6} />
            </button>
          </div>

          <div className="pd-tabs">
            <div className="tab-headers">
              <span className={`tab-header ${tab === "desc" ? "active" : ""}`} onClick={() => setTab("desc")}>Description</span>
              <span className={`tab-header ${tab === "details" ? "active" : ""}`} onClick={() => setTab("details")}>Fabric &amp; care</span>
              <span className={`tab-header ${tab === "delivery" ? "active" : ""}`} onClick={() => setTab("delivery")}>Delivery &amp; returns</span>
            </div>
            {tab === "desc" && <p className="tab-content">{product.desc}</p>}
            {tab === "details" && <p className="tab-content">100% {product.tag.toLowerCase().includes("bridal") ? "silk" : product.tag.toLowerCase()} — dry clean only. Colours may vary slightly from screen due to hand-dyeing. Unstitched pieces include a fabric guide for your local tailor.</p>}
            {tab === "delivery" && <p className="tab-content">Dispatched within 2–3 working days. Nationwide delivery in 3–5 working days. Free shipping on orders over Rs 15,000. 7-day easy exchange from the date of delivery.</p>}
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <Reveal><div className="section-head"><span className="section-eyebrow">You may also like</span><h2 className="section-title">More from {product.tag}</h2></div></Reveal>
          <div className="products-grid">
            {related.map((p, i) => (
              <ProductCard key={p.id} p={p} i={i} wishlisted={wishlist.has(p.id)} onWish={toggleWish} onAdd={addToCart} navigate={navigate} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

function AboutPage({ navigate }) {
  return (
    <>
      <PageBanner index="No. 03" title="Our Story" crumb="About" navigate={navigate} />
      <section className="section" style={{ maxWidth: 760 }}>
        <Reveal>
          <p className="about-lede">Aasiab began as a single karkhana with three master craftsmen and a belief that everyday clothing deserved the same care as an heirloom. Fourteen years on, that belief still runs through every piece — fabric chosen before it's cut, embroidery worked by hand, thread by thread.</p>
        </Reveal>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <Reveal><div className="section-head"><span className="section-eyebrow">Milestones</span><h2 className="section-title">Fourteen years, thread by thread</h2></div></Reveal>
        <div className="timeline">
          {TIMELINE.map((t, i) => (
            <Reveal key={t.year} delay={i * 80}>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-year">{t.year}</div>
                <p className="timeline-text">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="spec-section">
        <Reveal><div className="spec-head"><span className="section-eyebrow">What we stand for</span><h2 className="section-title">Our values</h2></div></Reveal>
        <div className="spec-list">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 90}>
              <div className="spec-row">
                <v.icon size={18} strokeWidth={1.5} className="spec-icon" />
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <div className="facts-strip standalone">
        {STATS.map((s) => (
          <div key={s.label} className="fact">
            <span className="fact-num"><CountUp end={s.end} suffix={s.suffix} decimal={s.decimal} /></span>
            <span className="fact-label">{s.label}</span>
          </div>
        ))}
      </div>
    </>
  );
}

function CartPage({ cart, updateQty, removeFromCart, navigate }) {
  const entries = Object.entries(cart).filter(([, q]) => q > 0);
  const items = entries.map(([id, q]) => ({ product: PRODUCTS.find((p) => p.id === Number(id)), qty: q })).filter((x) => x.product);
  const subtotal = items.reduce((sum, x) => sum + x.product.price * x.qty, 0);
  const shipping = subtotal > 15000 || subtotal === 0 ? 0 : 350;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <>
        <PageBanner index="No. 04" title="Shopping Bag" crumb="Cart" navigate={navigate} />
        <div className="empty-state">
          <ShoppingBag size={34} color={P.lineStrong} strokeWidth={1.3} />
          <p>Your bag is empty.</p>
          <button className="btn btn-primary" onClick={() => navigate("shop")}>Start shopping <ArrowRight size={15} /></button>
        </div>
      </>
    );
  }

  return (
    <>
      <PageBanner index="No. 04" title="Shopping Bag" crumb="Cart" navigate={navigate} />
      <div className="cart-inner">
        <div>
          {items.map(({ product, qty }) => (
            <div key={product.id} className="cart-row">
              <Media src={product.images && product.images[0]} alt={product.name} color={product.color} className="cart-thumb" />
              <div className="cart-row-info">
                <h4 onClick={() => navigate(`product/${product.id}`)}>{product.name}</h4>
                <p className="cart-row-meta">{product.tag} · {product.sku}</p>
                <div className="qty-stepper" style={{ display: "inline-flex" }}>
                  <button className="qty-btn" onClick={() => updateQty(product.id, qty - 1)} aria-label="Decrease quantity"><Minus size={14} /></button>
                  <span className="qty-val">{qty}</span>
                  <button className="qty-btn" onClick={() => updateQty(product.id, qty + 1)} aria-label="Increase quantity"><Plus size={14} /></button>
                </div>
                <button className="cart-remove" onClick={() => removeFromCart(product.id)}><Trash2 size={12} />Remove</button>
              </div>
              <div className="cart-row-price">Rs {fmt(product.price * qty)}</div>
            </div>
          ))}
        </div>
        <div className="summary-box">
          <h3 className="summary-title">Order Summary</h3>
          <div className="summary-row"><span>Subtotal</span><span>Rs {fmt(subtotal)}</span></div>
          <div className="summary-row"><span>Shipping</span><span>{shipping === 0 ? "Free" : `Rs ${fmt(shipping)}`}</span></div>
          <div className="summary-total"><span>Total</span><span>Rs {fmt(total)}</span></div>
          <button className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: "1.4rem" }}>Checkout <ArrowRight size={15} /></button>
          <span className="text-link" style={{ marginTop: "1.1rem", justifyContent: "center", width: "100%" }} onClick={() => navigate("shop")}><ArrowLeft size={14} /> Continue shopping</span>
        </div>
      </div>
    </>
  );
}

function WishlistPage({ wishlist, toggleWish, addToCart, navigate }) {
  const items = PRODUCTS.filter((p) => wishlist.has(p.id));
  return (
    <>
      <PageBanner index="No. 05" title="Your Wishlist" crumb="Wishlist" navigate={navigate} />
      {items.length === 0 ? (
        <div className="empty-state">
          <Heart size={34} color={P.lineStrong} strokeWidth={1.3} />
          <p>Nothing saved yet.</p>
          <button className="btn btn-primary" onClick={() => navigate("shop")}>Browse the shop <ArrowRight size={15} /></button>
        </div>
      ) : (
        <section className="section" style={{ paddingTop: "0.5rem" }}>
          <div className="products-grid">
            {items.map((p, i) => (
              <ProductCard key={p.id} p={p} i={i} wishlisted navigate={navigate} onWish={toggleWish} onAdd={addToCart} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

function ContactPage({ navigate }) {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageBanner index="No. 06" title="Contact Us" crumb="Contact" navigate={navigate} />
      <div className="contact-inner">
        <Reveal>
          <div>
            <h3 className="contact-heading">Get in touch</h3>
            <div className="contact-info-item">
              <MapPin size={17} strokeWidth={1.6} className="contact-info-icon" />
              <div><strong>Flagship store</strong><p>Zamzama Boulevard, Phase V, DHA, Karachi</p></div>
            </div>
            <div className="contact-info-item">
              <Phone size={17} strokeWidth={1.6} className="contact-info-icon" />
              <div><strong>Call us</strong><p>+92 21 111 227 422</p></div>
            </div>
            <div className="contact-info-item">
              <Mail size={17} strokeWidth={1.6} className="contact-info-icon" />
              <div><strong>Email</strong><p>hello@aasiab.pk</p></div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={110}>
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <div className="form-field"><label htmlFor="cf-name">Name</label><input id="cf-name" type="text" placeholder="Your full name" required /></div>
            <div className="form-field"><label htmlFor="cf-email">Email</label><input id="cf-email" type="email" placeholder="you@email.com" required /></div>
            <div className="form-field"><label htmlFor="cf-msg">Message</label><textarea id="cf-msg" rows={5} placeholder="How can we help?" required /></div>
            <button className="btn btn-primary" type="submit" style={{ width: "100%", justifyContent: "center" }}>
              {sent ? "Message sent ✓" : "Send message"}
            </button>
          </form>
        </Reveal>
      </div>
    </>
  );
}

function NewsletterSection() {
  return (
    <section className="newsletter-section">
      <div className="newsletter-inner">
        <div>
          <span className="section-eyebrow" style={{ color: P.saffron }}>Join the list</span>
          <h2 className="newsletter-title">Early access to<br />new collections.</h2>
        </div>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <p className="newsletter-sub">Private sales and styling notes, straight to your inbox — no spam, unsubscribe anytime.</p>
          <div className="newsletter-field">
            <input className="newsletter-input" type="email" placeholder="Your email address" required aria-label="Email address" />
            <button className="newsletter-submit" type="submit" aria-label="Subscribe"><ArrowRight size={16} /></button>
          </div>
        </form>
      </div>
    </section>
  );
}

/* --------------------------------- app / router ------------------------------------ */
function parseHash() {
  const raw = (window.location.hash || "#/home").replace("#/", "");
  const parts = raw.split("/").filter(Boolean);
  return { page: parts[0] || "home", param: parts[1] };
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cart, setCart] = useState({});
  const [wishlist, setWishlist] = useState(() => new Set());
  const [bump, setBump] = useState(false);
  const [{ page, param }, setRoute] = useState(parseHash());

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onHash = () => {
      setRoute(parseHash());
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navigate = (to) => {
    window.location.hash = `#/${to}`;
    setRoute(parseHash());
    window.scrollTo({ top: 0, behavior: "auto" });
    setMenuOpen(false);
  };

  const toggleWish = (id) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const addToCart = (id, qty = 1) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + qty }));
    setBump(true);
    setTimeout(() => setBump(false), 350);
  };

  const updateQty = (id, qty) => {
    setCart((prev) => {
      const next = { ...prev };
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      return next;
    });
  };

  const removeFromCart = (id) => updateQty(id, 0);

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  let PageView;
  if (page === "shop") PageView = <ShopPage navigate={navigate} wishlist={wishlist} toggleWish={toggleWish} addToCart={addToCart} />;
  else if (page === "bridal") PageView = <BridalPage navigate={navigate} wishlist={wishlist} toggleWish={toggleWish} addToCart={addToCart} />;
  else if (page === "product") PageView = <ProductPage id={param} navigate={navigate} wishlist={wishlist} toggleWish={toggleWish} addToCart={addToCart} />;
  else if (page === "about") PageView = <AboutPage navigate={navigate} />;
  else if (page === "cart") PageView = <CartPage cart={cart} updateQty={updateQty} removeFromCart={removeFromCart} navigate={navigate} />;
  else if (page === "wishlist") PageView = <WishlistPage wishlist={wishlist} toggleWish={toggleWish} addToCart={addToCart} navigate={navigate} />;
  else if (page === "contact") PageView = <ContactPage navigate={navigate} />;
  else PageView = <HomePage navigate={navigate} wishlist={wishlist} toggleWish={toggleWish} addToCart={addToCart} />;

  return (
    <div className="aasiab-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;0,6..96,600;0,6..96,700;1,6..96,400;1,6..96,500;1,6..96,600&family=Inter:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');

        .aasiab-root { --util-h: 34px; font-family: 'Inter', sans-serif; background: ${P.paper}; color: ${P.ink}; overflow-x: hidden; -webkit-font-smoothing: antialiased; font-weight: 400; }
        .aasiab-root *, .aasiab-root *::before, .aasiab-root *::after { box-sizing: border-box; }
        .aasiab-root button, .aasiab-root input, .aasiab-root textarea, .aasiab-root select { font-family: inherit; }
        .aasiab-root a, .aasiab-root button { cursor: pointer; }

        .aasiab-root button:focus-visible,
        .aasiab-root a:focus-visible,
        .aasiab-root input:focus-visible,
        .aasiab-root textarea:focus-visible,
        .aasiab-root select:focus-visible,
        .aasiab-root [tabindex]:focus-visible { outline: 2px solid ${P.rani}; outline-offset: 3px; }

        .mono { font-family: 'IBM Plex Mono', monospace; }

        .reveal { opacity: 0; transform: translateY(18px); transition: opacity .7s cubic-bezier(.19,1,.22,1), transform .7s cubic-bezier(.19,1,.22,1); }
        .reveal.is-visible { opacity: 1; transform: translateY(0); }
        @media (prefers-reduced-motion: reduce) { .reveal, .stitch-rule-line, .stitch-mark-path, .stitch-mark-dot { transition: none !important; opacity: 1 !important; transform: none !important; stroke-dashoffset: 0 !important; } }

        /* ---------- utility bar ----------
           Fixed to the true viewport top, with a locked height. The navbar
           below is offset by exactly that height (--util-h), so the two
           stack instead of the fixed navbar overlapping this in-flow bar. */
        .util-bar { position: fixed; top: 0; left: 0; right: 0; z-index: 51; height: var(--util-h); display: flex; align-items: center; justify-content: center; background: ${P.ink}; color: ${P.cream}; padding: 0 1.25rem; font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase; white-space: nowrap; overflow-x: auto; scrollbar-width: none; }
        .util-bar::-webkit-scrollbar { display: none; }
        @media (max-width: 640px) { .util-bar { justify-content: flex-start; } }

        /* ---------- nav ---------- */
        .navbar { position: fixed; top: var(--util-h); left: 0; right: 0; z-index: 50; transition: all .4s cubic-bezier(.19,1,.22,1); padding: 1.5rem 0; background: transparent; border-bottom: 1px solid transparent; }
        .navbar.scrolled { padding: 0.85rem 0; background: ${P.paper}; border-bottom-color: ${P.line}; }
        .nav-inner { max-width: 1320px; margin: 0 auto; padding: 0 1.75rem; display: flex; align-items: center; justify-content: space-between; }
        .wordmark { font-family: 'Bodoni Moda', serif; font-style: italic; font-weight: 500; letter-spacing: 0.01em; font-size: 1.5rem; transition: color .35s; }
        .nav-links { display: none; gap: 2.2rem; }
        .nav-link { font-family: 'IBM Plex Mono', monospace; font-size: 0.72rem; letter-spacing: 0.06em; text-transform: uppercase; position: relative; padding-bottom: 5px; background-image: repeating-linear-gradient(90deg, currentColor 0 4px, transparent 4px 8px); background-position: 0 100%; background-repeat: repeat-x; background-size: 0% 1px; transition: background-size .4s cubic-bezier(.19,1,.22,1); }
        .nav-link:hover { background-size: 100% 1px; }
        .navbar.scrolled .wordmark, .navbar.scrolled .nav-link, .navbar.scrolled .icon-btn { color: ${P.ink}; }
        .navbar:not(.scrolled) .wordmark, .navbar:not(.scrolled) .nav-link, .navbar:not(.scrolled) .icon-btn { color: ${P.cream}; }
        .nav-icons { display: flex; align-items: center; gap: 1.1rem; }
        .icon-btn { position: relative; background: none; border: none; padding: 0.3rem; transition: opacity .25s; }
        .icon-btn:hover { opacity: 0.6; }
        .badge { position: absolute; top: -4px; right: -6px; background: ${P.rani}; color: ${P.cream}; font-family: 'IBM Plex Mono', monospace; font-size: 0.6rem; font-weight: 500; min-width: 15px; height: 15px; padding: 0 3px; border-radius: 50%; display: flex; align-items: center; justify-content: center; transition: transform .25s; }
        .badge.bump { transform: scale(1.3); }
        .menu-toggle { display: block; }
        @media (min-width: 900px) { .nav-links { display: flex; } .menu-toggle { display: none; } }

        /* ---------- mobile menu ---------- */
        .mobile-menu { position: fixed; inset: 0; background: ${P.ink}; z-index: 60; display: flex; flex-direction: column; padding: 1.5rem 1.75rem 2rem; transform: translateY(-100%); transition: transform .5s cubic-bezier(.19,1,.22,1); overflow-y: auto; }
        .mobile-menu.open { transform: translateY(0); }

        .mobile-menu-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2.2rem; padding-top: 0.4rem; }
        .mm-close { background: none; border: 1px solid ${P.lineOnDark}; color: ${P.cream}; width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; transition: all .3s cubic-bezier(.19,1,.22,1); }
        .mm-close:hover { border-color: ${P.cream}; transform: rotate(90deg); }

        .mm-links { display: flex; flex-direction: column; }
        .mm-link {
          display: flex; align-items: center; gap: 1rem;
          width: 100%; background: none; border: none; border-bottom: 1px solid ${P.lineOnDark};
          padding: 1.05rem 0; text-align: left; color: ${P.cream};
          opacity: 0; transform: translateY(14px);
          transition: opacity .5s cubic-bezier(.19,1,.22,1), transform .5s cubic-bezier(.19,1,.22,1), padding-left .3s ease;
        }
        .mobile-menu.open .mm-link { opacity: 1; transform: translateY(0); }
        .mm-link:hover { padding-left: 0.4rem; }
        .mm-link-idx { font-family: 'IBM Plex Mono', monospace; font-size: 0.7rem; color: ${P.saffron}; flex-shrink: 0; width: 20px; }
        .mm-link-label { font-family: 'Bodoni Moda', serif; font-style: italic; font-size: 1.9rem; font-weight: 500; flex: 1; line-height: 1; }
        .mm-link-arrow { color: rgba(246,241,230,0.35); flex-shrink: 0; transition: transform .3s cubic-bezier(.19,1,.22,1), color .3s; }
        .mm-link:hover .mm-link-arrow { color: ${P.saffron}; transform: translate(3px,-3px); }

        .mm-stitch { margin: 1.6rem 0 1.4rem; opacity: 0.5; }

        .mm-utility { display: flex; gap: 0.7rem; margin-bottom: auto; }
        .mm-util-btn {
          position: relative; display: flex; align-items: center; gap: 0.55rem;
          flex: 1; justify-content: center; padding: 0.85rem 1rem;
          border: 1px solid ${P.lineOnDark}; background: none; color: ${P.cream};
          font-family: 'IBM Plex Mono', monospace; font-size: 0.72rem; letter-spacing: 0.05em; text-transform: uppercase;
          opacity: 0; transform: translateY(14px);
          transition: opacity .5s cubic-bezier(.19,1,.22,1), transform .5s cubic-bezier(.19,1,.22,1), border-color .25s, background .25s;
        }
        .mobile-menu.open .mm-util-btn { opacity: 1; transform: translateY(0); }
        .mm-util-btn:hover { border-color: ${P.saffron}; background: rgba(192,122,34,0.08); }
        .mm-util-count { background: ${P.rani}; color: ${P.cream}; font-size: 0.62rem; min-width: 16px; height: 16px; border-radius: 50%; display: flex; align-items: center; justify-content: center; padding: 0 3px; }

        .mm-footer { display: flex; align-items: center; justify-content: space-between; padding-top: 1.6rem; margin-top: 1.6rem; border-top: 1px solid ${P.lineOnDark}; flex-wrap: wrap; gap: 1rem; }
        .mm-footer-row { display: flex; gap: 0.9rem; }
        .mm-footer-row a { color: rgba(246,241,230,0.6); transition: color .25s; }
        .mm-footer-row a:hover { color: ${P.saffron}; }
        .mm-footer-meta { font-family: 'IBM Plex Mono', monospace; font-size: 0.65rem; letter-spacing: 0.04em; color: rgba(246,241,230,0.4); }

        /* ---------- buttons ---------- */
        .btn { display: inline-flex; align-items: center; gap: 0.6rem; padding: 0.95rem 1.7rem; font-family: 'IBM Plex Mono', monospace; font-size: 0.72rem; letter-spacing: 0.07em; text-transform: uppercase; border-radius: 2px; border: 1px solid transparent; font-weight: 500; transition: all .3s cubic-bezier(.19,1,.22,1); }
        .btn-primary { background: ${P.ink}; color: ${P.cream}; }
        .btn-primary:hover { background: ${P.rani}; }
        .btn-ghost { border-color: ${P.lineStrong}; color: ${P.ink}; }
        .btn-ghost:hover { border-color: ${P.ink}; background: ${P.ink}; color: ${P.cream}; }
        .btn-ghost.on-dark { border-color: ${P.lineOnDark}; color: ${P.cream}; }
        .btn-ghost.on-dark:hover { border-color: ${P.cream}; background: ${P.cream}; color: ${P.ink}; }

        .text-link { display: inline-flex; align-items: center; gap: 0.4rem; font-family: 'IBM Plex Mono', monospace; font-size: 0.72rem; letter-spacing: 0.05em; text-transform: uppercase; color: ${P.ink}; }
        .text-link svg { transition: transform .3s cubic-bezier(.19,1,.22,1); }
        .text-link:hover svg { transform: translateX(4px); }

        /* ---------- stitch signature ---------- */
        .stitch-rule { max-width: 1320px; margin: 0 auto; padding: 0 1.75rem; }
        .stitch-rule-svg { width: 100%; height: 8px; display: block; }
        .stitch-rule-line { stroke: ${P.lineStrong}; stroke-width: 1.5; stroke-dasharray: 2 7; stroke-linecap: round; stroke-dashoffset: 1000; transition: stroke-dashoffset 1.6s cubic-bezier(.19,1,.22,1); }
        .stitch-rule-line.is-visible { stroke-dashoffset: 0; }
        .stitch-rule.on-dark .stitch-rule-line { stroke: ${P.lineOnDark}; }

        .stitch-mark-svg { width: 100%; max-width: 300px; }
        .stitch-mark { display: flex; justify-content: center; }
        .stitch-mark-path { fill: none; stroke: ${P.saffron}; stroke-width: 1.75; stroke-linecap: round; stroke-dasharray: 6 9; stroke-dashoffset: 800; transition: stroke-dashoffset 2s cubic-bezier(.19,1,.22,1); }
        .stitch-mark-path.is-visible { stroke-dashoffset: 0; }
        .stitch-mark-dot { fill: ${P.rani}; opacity: 0; transition: opacity .4s ease 1.8s; }
        .stitch-mark-dot.is-visible { opacity: 1; }

        /* ---------- media / fallback swatch ---------- */
        .media-photo { width: 100%; height: 100%; display: block; }
        .swatch-weave { display: none; }

        /* ---------- hero ---------- */
        .hero { position: relative; background: ${P.ink}; padding-top: calc(4.6rem + var(--util-h)); overflow: hidden; }
        .bridal-hero { padding-bottom: 3rem; }
        .hero-rail { display: flex; gap: 0.7rem; align-items: center; color: ${P.saffron}; font-family: 'IBM Plex Mono', monospace; font-size: 0.68rem; letter-spacing: 0.14em; padding: 0.9rem 1.75rem 0; max-width: 1320px; margin: 0 auto; }
        .hero-inner { position: relative; max-width: 1320px; margin: 0 auto; padding: 2.4rem 1.75rem 3rem; display: grid; grid-template-columns: 1fr; gap: 2.5rem; }
        @media (min-width: 980px) { .hero-inner { grid-template-columns: 1fr 1fr; align-items: stretch; gap: 0; } }
        .hero-copy { display: flex; flex-direction: column; justify-content: center; padding-right: 0; }
        @media (min-width: 980px) { .hero-copy { padding-right: 3rem; } }
        .breadcrumb { color: rgba(246,241,230,0.55); font-family: 'IBM Plex Mono', monospace; font-size: 0.7rem; letter-spacing: 0.04em; display: flex; gap: 0.5rem; align-items: center; }
        .breadcrumb span:not(.current) { cursor: pointer; }
        .breadcrumb span:not(.current):hover { color: ${P.cream}; }
        .breadcrumb .current { color: ${P.saffron}; }
        .breadcrumb:not(.on-dark) { color: rgba(27,24,21,0.55); }
        .eyebrow { color: ${P.saffron}; font-family: 'IBM Plex Mono', monospace; font-size: 0.72rem; letter-spacing: 0.18em; text-transform: uppercase; display: flex; align-items: center; gap: 0.6rem; margin: 1.1rem 0 1.4rem; }
        .eyebrow::before { content: ''; width: 22px; height: 1px; background: ${P.saffron}; }
        .hero-title { font-family: 'Bodoni Moda', serif; color: ${P.cream}; font-size: 2.7rem; line-height: 1.04; font-weight: 500; margin: 0 0 1.5rem; letter-spacing: -0.01em; }
        .hero-title em { font-style: italic; color: ${P.rani}; font-weight: 500; }
        @media (min-width: 640px) { .hero-title { font-size: 3.6rem; } }
        @media (min-width: 980px) { .hero-title { font-size: 4.1rem; } }
        .hero-sub { color: rgba(246,241,230,0.68); font-size: 0.98rem; line-height: 1.7; max-width: 420px; margin-bottom: 2.2rem; font-weight: 300; }
        .hero-ctas { display: flex; flex-wrap: wrap; gap: 0.9rem; }
        .hero-visual { position: relative; min-height: 360px; }
        @media (min-width: 980px) { .hero-visual { min-height: 100%; } }
        .hero-media { position: absolute; inset: 0; width: 100%; height: 100%; padding: 1.4rem; }
        .hero-caption { position: absolute; left: 1rem; bottom: 1rem; color: ${P.cream}; background: rgba(27,24,21,0.55); font-family: 'IBM Plex Mono', monospace; font-size: 0.65rem; letter-spacing: 0.1em; padding: 0.5rem 0.8rem; text-transform: uppercase; }

        .facts-strip { position: relative; max-width: 1320px; margin: 0 auto; padding: 0 1.75rem 3rem; display: grid; grid-template-columns: repeat(2, 1fr); border-top: 1px solid ${P.lineOnDark}; }
        @media (min-width: 780px) { .facts-strip { grid-template-columns: repeat(4, 1fr); } }
        .facts-strip.standalone { border-top: 1px solid ${P.line}; border-bottom: 1px solid ${P.line}; padding: 2.5rem 1.75rem; }
        .fact { padding: 1.5rem 1.2rem 0; border-right: 1px solid ${P.lineOnDark}; }
        .facts-strip.standalone .fact { border-right-color: ${P.line}; padding-top: 0; }
        .fact:last-child, .fact:nth-child(2) { border-right: none; }
        @media (min-width: 780px) { .fact:nth-child(2) { border-right: 1px solid ${P.lineOnDark}; } .facts-strip.standalone .fact:nth-child(2) { border-right-color: ${P.line}; } .fact:last-child { border-right: none; } }
        .fact-num { display: block; font-family: 'Bodoni Moda', serif; font-size: 2.1rem; color: ${P.cream}; font-weight: 500; }
        .facts-strip.standalone .fact-num { color: ${P.ink}; }
        .fact-label { display: block; font-family: 'IBM Plex Mono', monospace; font-size: 0.68rem; letter-spacing: 0.03em; color: rgba(246,241,230,0.55); margin-top: 0.35rem; }
        .facts-strip.standalone .fact-label { color: ${P.ink}; opacity: 0.55; }

        /* ---------- category index ---------- */
        .cat-index { max-width: 1320px; margin: 0 auto; padding: 1.6rem 1.75rem; display: flex; flex-wrap: wrap; gap: 0.5rem 0.7rem; align-items: center; border-bottom: 1px solid ${P.line}; }
        .cat-item { font-family: 'IBM Plex Mono', monospace; font-size: 0.72rem; letter-spacing: 0.04em; text-transform: uppercase; color: ${P.ink2}; }
        .cat-sep { color: ${P.lineStrong}; font-size: 0.72rem; }

        /* ---------- section shell ---------- */
        .section { padding: 5.5rem 1.75rem; max-width: 1320px; margin: 0 auto; }
        .section-head { display: flex; flex-direction: column; gap: 0.7rem; margin-bottom: 2.6rem; }
        .section-eyebrow { color: ${P.rani}; font-family: 'IBM Plex Mono', monospace; font-size: 0.7rem; letter-spacing: 0.16em; text-transform: uppercase; font-weight: 500; }
        .section-title { font-family: 'Bodoni Moda', serif; font-size: 2.1rem; font-weight: 500; letter-spacing: -0.01em; }
        @media (min-width: 780px) { .section-title { font-size: 2.6rem; } }
        .section-head-row { display: flex; align-items: flex-end; justify-content: space-between; gap: 1.5rem; flex-wrap: wrap; margin-bottom: 2.6rem; }

        /* ---------- edits (collections) ---------- */
        .edits-grid { display: grid; grid-template-columns: 1fr; gap: 1.2rem; }
        @media (min-width: 780px) { .edits-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 210px; } .edit-span { grid-row: span 2; } }
        .edit-card { position: relative; padding: 1.8rem; min-height: 300px; display: flex; flex-direction: column; overflow: hidden; border: 1px solid ${P.ink}; transition: transform .5s cubic-bezier(.19,1,.22,1); }
        @media (min-width: 780px) { .edit-card { min-height: 0; height: 100%; } }
        .edit-card:hover { transform: translateY(-4px); }
        .edit-idx { font-family: 'Bodoni Moda', serif; font-style: italic; font-size: 1.1rem; color: rgba(246,241,230,0.65); }
        .edit-body { margin-top: auto; }
        .edit-title { font-family: 'Bodoni Moda', serif; color: ${P.cream}; font-size: 1.7rem; margin-bottom: 0.5rem; }
        .edit-desc { color: rgba(246,241,230,0.72); font-size: 0.85rem; line-height: 1.55; margin-bottom: 1.1rem; max-width: 300px; }
        .edit-link { display: inline-flex; align-items: center; gap: 0.45rem; color: ${P.saffron}; font-family: 'IBM Plex Mono', monospace; font-size: 0.7rem; letter-spacing: 0.06em; text-transform: uppercase; width: fit-content; }
        .edit-link svg { transition: transform .3s; }
        .edit-card:hover .edit-link svg { transform: translate(3px,-3px); }

        /* ---------- products ---------- */
        .products-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.1rem 1rem; }
        @media (min-width: 700px) { .products-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
        @media (min-width: 1000px) { .products-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
        .product-card-wrap.is-feature { grid-column: span 2; }
        @media (max-width: 699px) { .product-card-wrap.is-feature { grid-column: span 2; } .product-card-wrap.is-feature .product-img { height: auto; } }
        .product-card-wrap { min-width: 0; }
        .product-card { cursor: pointer; min-width: 0; }
        .product-img { position: relative; height: auto; overflow: hidden; margin-bottom: 0.8rem; border: 1px solid ${P.line}; transition: border-color .3s; }
        .product-card:hover .product-img { border-color: ${P.ink}; }
        .product-tag { position: absolute; top: 0; left: 0; background: ${P.ink}; color: ${P.cream}; font-family: 'IBM Plex Mono', monospace; font-size: 0.6rem; letter-spacing: 0.06em; text-transform: uppercase; padding: 0.35rem 0.55rem; z-index: 2; }
        .wish-btn { position: absolute; top: 0.6rem; right: 0.6rem; background: none; border: none; padding: 0.2rem; z-index: 2; transition: transform .25s; }
        .wish-btn:hover { transform: scale(1.12); }
        .product-overlay { position: absolute; left: 0; right: 0; bottom: 0; display: flex; transform: translateY(100%); transition: transform .35s cubic-bezier(.19,1,.22,1); z-index: 2; }
        .product-card:hover .product-overlay { transform: translateY(0); }
        @media (max-width: 699px) {
          .product-img { overflow: visible; margin-bottom: 0.5rem; }
          .product-tag { font-size: 0.55rem; padding: 0.28rem 0.45rem; }
          .wish-btn { top: 0.4rem; right: 0.4rem; padding: 0.15rem; }
          .wish-btn svg { width: 13px; height: 13px; }
          .product-overlay { position: static; transform: none !important; transition: none; margin-top: 0; border-top: 1px solid rgba(27,24,21,0.12); min-width: 0; }
          .quick-add { min-width: 0; font-size: 0.54rem; padding: 0.55rem 0.2rem; gap: 0.2rem; letter-spacing: 0; white-space: nowrap; overflow: hidden; text-overflow: clip; }
          .quick-add svg { width: 10px; height: 10px; flex-shrink: 0; }
          .quick-view { width: 30px; flex-shrink: 0; }
          .quick-view svg { width: 13px; height: 13px; }
        }
        .quick-add { flex: 1; background: ${P.ink}; color: ${P.cream}; border: none; padding: 0.65rem 0.6rem; font-family: 'IBM Plex Mono', monospace; font-size: 0.65rem; letter-spacing: 0.05em; text-transform: uppercase; font-weight: 500; display: flex; align-items: center; justify-content: center; gap: 0.35rem; transition: background .25s; }
        .quick-add:hover { background: ${P.rani}; }
        .quick-view { background: ${P.saffron}; color: ${P.ink}; border: none; width: 40px; display: flex; align-items: center; justify-content: center; border-left: 1px solid rgba(27,24,21,0.15); }
        .product-info-row { display: flex; align-items: baseline; justify-content: space-between; gap: 0.6rem; }
        .product-rating { display: flex; align-items: center; gap: 0.25rem; font-family: 'IBM Plex Mono', monospace; font-size: 0.66rem; color: ${P.ink2}; flex-shrink: 0; }
        .product-info h4 { font-weight: 500; font-size: 0.88rem; margin: 0; line-height: 1.3; }
        .product-price { font-family: 'Bodoni Moda', serif; font-size: 1.05rem; font-weight: 500; color: ${P.ink}; margin: 0.2rem 0 0; }
        .product-sku { font-family: 'IBM Plex Mono', monospace; font-size: 0.62rem; color: ${P.ink2}; opacity: 0.5; }

        /* ---------- craft (story) ---------- */
        .craft-section { background: ${P.ink}; color: ${P.cream}; padding: 5.5rem 1.75rem; }
        .craft-inner { max-width: 1320px; margin: 0 auto; display: grid; grid-template-columns: 1fr; gap: 2.5rem; align-items: center; }
        @media (min-width: 900px) { .craft-inner { grid-template-columns: 0.8fr 1.2fr; gap: 3.5rem; } }
        .craft-eyebrow { color: ${P.saffron}; font-family: 'IBM Plex Mono', monospace; font-size: 0.7rem; letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 1.1rem; font-weight: 500; }
        .craft-title { font-family: 'Bodoni Moda', serif; font-size: 2.1rem; line-height: 1.18; margin-bottom: 1.3rem; font-weight: 500; }
        @media (min-width: 780px) { .craft-title { font-size: 2.6rem; } }
        .craft-text { color: rgba(246,241,230,0.7); line-height: 1.8; font-size: 0.95rem; font-weight: 300; margin-bottom: 1.4rem; max-width: 520px; }
        .craft-quote { font-family: 'Bodoni Moda', serif; font-style: italic; font-size: 1.2rem; color: ${P.saffron}; border-left: 2px solid ${P.saffron}; padding-left: 1.1rem; margin: 1.6rem 0; max-width: 460px; }

        /* ---------- spec list ---------- */
        .spec-section { background: ${P.paperDeep}; padding: 4.5rem 1.75rem; }
        .spec-head { max-width: 1320px; margin: 0 auto 2.2rem; display: flex; flex-direction: column; gap: 0.7rem; }
        .spec-list { max-width: 1320px; margin: 0 auto; border-top: 1px solid ${P.lineStrong}; }
        .spec-row { display: grid; grid-template-columns: 28px 1fr; gap: 0 1.2rem; align-items: baseline; padding: 1.1rem 0; border-bottom: 1px solid ${P.lineStrong}; }
        @media (min-width: 700px) { .spec-row { grid-template-columns: 28px 260px 1fr; } }
        .spec-icon { grid-row: 1 / span 2; align-self: center; color: ${P.rani}; }
        .spec-row h4 { font-size: 0.95rem; font-weight: 600; }
        .spec-row p { font-size: 0.85rem; color: ${P.ink2}; opacity: 0.75; line-height: 1.5; grid-column: 2; }
        @media (min-width: 700px) { .spec-row p { grid-column: 3; } }

        /* ---------- testimonials ---------- */
        .quote-section { background: ${P.ink}; padding: 5.5rem 1.75rem; }
        .quote-inner { max-width: 760px; margin: 0 auto; text-align: center; }
        .quote-slide { min-height: 220px; display: flex; flex-direction: column; align-items: center; justify-content: center; }
        .quote-stars { display: flex; gap: 0.2rem; margin-bottom: 1.4rem; }
        .quote-text { font-family: 'Bodoni Moda', serif; font-style: italic; font-size: 1.5rem; line-height: 1.5; color: ${P.cream}; margin-bottom: 1.5rem; }
        @media (min-width: 700px) { .quote-text { font-size: 1.75rem; } }
        .quote-name { color: ${P.saffron}; font-family: 'IBM Plex Mono', monospace; font-size: 0.78rem; letter-spacing: 0.04em; font-weight: 500; }
        .quote-place { color: rgba(246,241,230,0.5); font-family: 'IBM Plex Mono', monospace; font-size: 0.72rem; }
        .quote-nav { display: flex; align-items: center; justify-content: center; gap: 1.2rem; margin-top: 2rem; }
        .quote-arrow { background: none; border: 1px solid ${P.lineOnDark}; color: ${P.cream}; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; transition: border-color .25s; }
        .quote-arrow:hover { border-color: ${P.cream}; }
        .quote-counter { font-family: 'IBM Plex Mono', monospace; font-size: 0.72rem; color: rgba(246,241,230,0.55); letter-spacing: 0.05em; }

        /* ---------- gallery ---------- */
        .gallery-section { padding: 5.5rem 1.75rem; max-width: 1320px; margin: 0 auto; }
        .gallery-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.7rem; }
        @media (min-width: 780px) { .gallery-grid { grid-template-columns: repeat(6, 1fr); } }
        .gallery-tile { position: relative; aspect-ratio: 1; overflow: hidden; }
        .gallery-tile-bg { width: 100%; height: 100%; transition: transform .5s cubic-bezier(.19,1,.22,1); }
        .gallery-tile:hover .gallery-tile-bg { transform: scale(1.06); }
        .gallery-tile-caption { position: absolute; left: 0.5rem; bottom: 0.5rem; color: ${P.cream}; font-family: 'IBM Plex Mono', monospace; font-size: 0.6rem; letter-spacing: 0.04em; opacity: 0; transition: opacity .3s; }
        .gallery-tile:hover .gallery-tile-caption { opacity: 1; }

        /* ---------- newsletter ---------- */
        .newsletter-section { background: ${P.ink}; padding: 4.5rem 1.75rem; }
        .newsletter-inner { max-width: 1320px; margin: 0 auto; display: grid; grid-template-columns: 1fr; gap: 2rem; align-items: end; border-top: 1px solid ${P.lineOnDark}; padding-top: 2.5rem; }
        @media (min-width: 820px) { .newsletter-inner { grid-template-columns: 1fr 1fr; } }
        .newsletter-title { font-family: 'Bodoni Moda', serif; color: ${P.cream}; font-size: 2rem; line-height: 1.1; margin-top: 0.6rem; }
        .newsletter-sub { color: rgba(246,241,230,0.6); font-size: 0.85rem; margin-bottom: 1.1rem; font-weight: 300; max-width: 380px; }
        .newsletter-field { display: flex; border-bottom: 1px solid rgba(246,241,230,0.35); transition: border-color .25s; }
        .newsletter-field:focus-within { border-color: ${P.cream}; }
        .newsletter-input { flex: 1; background: none; border: none; padding: 0.75rem 0; color: ${P.cream}; font-size: 0.92rem; outline: none; }
        .newsletter-input::placeholder { color: rgba(246,241,230,0.4); }
        .newsletter-submit { background: none; border: none; color: ${P.saffron}; padding: 0.75rem 0.3rem; transition: transform .25s; }
        .newsletter-submit:hover { transform: translateX(4px); }

        /* ---------- search overlay ---------- */
        .search-overlay { position: fixed; inset: 0; z-index: 999; pointer-events: none; }
        .search-overlay.open { pointer-events: all; }
        .search-overlay-backdrop { position: absolute; inset: 0; background: rgba(27,24,21,0.55); opacity: 0; transition: opacity .3s ease; backdrop-filter: blur(3px); }
        .search-overlay.open .search-overlay-backdrop { opacity: 1; }
        .search-panel { position: absolute; top: 0; left: 0; right: 0; background: ${P.paper}; transform: translateY(-100%); transition: transform .38s cubic-bezier(.19,1,.22,1); box-shadow: 0 8px 40px rgba(27,24,21,0.18); max-height: 80vh; display: flex; flex-direction: column; }
        .search-overlay.open .search-panel { transform: translateY(0); }
        .search-bar { display: flex; align-items: center; gap: 0.9rem; padding: 1.1rem 1.75rem; border-bottom: 1px solid ${P.line}; }
        .search-icon-lead { color: ${P.ink2}; opacity: 0.5; flex-shrink: 0; }
        .search-input { flex: 1; border: none; outline: none; background: none; font-family: 'Inter', sans-serif; font-size: 1.05rem; color: ${P.ink}; }
        .search-input::placeholder { color: rgba(27,24,21,0.35); }
        .search-close { background: none; border: none; color: ${P.ink2}; opacity: 0.6; padding: 0.25rem; flex-shrink: 0; transition: opacity .2s; }
        .search-close:hover { opacity: 1; }
        .search-results { overflow-y: auto; padding: 0.6rem 0 1rem; }
        .search-hint, .search-empty { padding: 1.5rem 1.75rem; font-family: 'IBM Plex Mono', monospace; font-size: 0.78rem; color: ${P.ink2}; opacity: 0.55; }
        .search-result-row { width: 100%; display: flex; align-items: center; gap: 1rem; padding: 0.75rem 1.75rem; background: none; border: none; text-align: left; cursor: pointer; transition: background .2s; }
        .search-result-row:hover { background: ${P.paperDeep}; }
        .search-result-img { width: 56px; height: 64px; flex-shrink: 0; overflow: hidden; }
        .search-result-info { flex: 1; display: flex; flex-direction: column; gap: 0.2rem; min-width: 0; }
        .search-result-tag { font-family: 'IBM Plex Mono', monospace; font-size: 0.6rem; letter-spacing: 0.08em; text-transform: uppercase; color: ${P.rani}; }
        .search-result-name { font-size: 0.88rem; font-weight: 500; color: ${P.ink}; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .search-result-price { font-family: 'Bodoni Moda', serif; font-size: 0.9rem; color: ${P.ink}; }
        .search-result-arrow { color: ${P.ink2}; opacity: 0.4; flex-shrink: 0; transition: opacity .2s, transform .2s; }
        .search-result-row:hover .search-result-arrow { opacity: 1; transform: translateX(3px); }

        /* ---------- footer ---------- */
        .footer { background: ${P.ink}; color: rgba(246,241,230,0.75); padding: 4rem 1.75rem 2rem; }
        .footer-inner { max-width: 1320px; margin: 0 auto; display: grid; grid-template-columns: 1fr; gap: 2.4rem; padding-bottom: 2.6rem; border-bottom: 1px solid ${P.lineOnDark}; }
        @media (min-width: 780px) { .footer-inner { grid-template-columns: 1.4fr 1fr 1fr 1fr; } }
        .footer-logo { font-family: 'Bodoni Moda', serif; font-style: italic; color: ${P.cream}; font-size: 1.5rem; margin-bottom: 0.9rem; }
        .footer-blurb { font-size: 0.85rem; line-height: 1.7; max-width: 300px; margin-bottom: 1.3rem; font-weight: 300; }
        .footer-social { display: flex; flex-direction: column; gap: 0.55rem; }
        .footer-social a { display: inline-flex; align-items: center; gap: 0.5rem; font-family: 'IBM Plex Mono', monospace; font-size: 0.72rem; width: fit-content; color: inherit; text-decoration: none; }
        .footer-social a:hover { color: ${P.saffron}; }
        .footer-heading { color: ${P.cream}; font-family: 'IBM Plex Mono', monospace; font-size: 0.7rem; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 1.1rem; font-weight: 500; }
        .footer-links { display: flex; flex-direction: column; gap: 0.65rem; font-size: 0.85rem; }
        .footer-links a, .footer-links button { color: inherit; text-decoration: none; background: none; border: none; padding: 0; margin: 0; font: inherit; text-align: left; width: fit-content; transition: color .2s; }
        .footer-links a:hover, .footer-links button:hover { color: ${P.saffron}; }
        .footer-bottom { max-width: 1320px; margin: 0 auto; padding-top: 1.6rem; display: flex; flex-wrap: wrap; gap: 1rem; align-items: center; justify-content: space-between; font-family: 'IBM Plex Mono', monospace; font-size: 0.68rem; color: rgba(246,241,230,0.45); }

        /* ---------- page banner ---------- */
        .page-banner { position: relative; background: ${P.ink}; padding: calc(7.5rem + var(--util-h)) 1.75rem 2.6rem; }
        .page-banner-inner { max-width: 1320px; margin: 0 auto; }
        .page-banner-row { display: flex; align-items: baseline; justify-content: space-between; gap: 1rem; margin-top: 0.9rem; }
        .page-banner-title { font-family: 'Bodoni Moda', serif; color: ${P.cream}; font-size: 2.4rem; font-weight: 500; }
        @media (min-width: 780px) { .page-banner-title { font-size: 3.1rem; } }
        .page-banner-index { font-family: 'IBM Plex Mono', monospace; color: rgba(246,241,230,0.4); font-size: 0.8rem; letter-spacing: 0.06em; }

        /* ---------- shop filters ---------- */
        .filter-tabs { display: flex; gap: 0.4rem; flex-wrap: wrap; }
        .filter-tab { padding: 0.5rem 0.95rem; border: 1px solid ${P.lineStrong}; font-family: 'IBM Plex Mono', monospace; font-size: 0.7rem; letter-spacing: 0.03em; text-transform: uppercase; transition: all .25s; background: transparent; color: ${P.ink}; }
        .filter-tab.active { background: ${P.ink}; color: ${P.cream}; border-color: ${P.ink}; }
        .filter-tab:hover:not(.active) { border-color: ${P.ink}; }
        .sort-select { border: 1px solid ${P.lineStrong}; padding: 0.5rem 0.9rem; font-family: 'IBM Plex Mono', monospace; font-size: 0.7rem; background: ${P.paper}; color: ${P.ink}; border-radius: 0; }
        .results-count { font-family: 'IBM Plex Mono', monospace; font-size: 0.72rem; color: ${P.ink2}; opacity: 0.6; margin-bottom: 1.4rem; }

        .empty-state { text-align: center; padding: 4.5rem 1.75rem 6rem; display: flex; flex-direction: column; align-items: center; gap: 1.2rem; }
        .empty-state p { color: ${P.ink2}; opacity: 0.65; font-size: 0.92rem; max-width: 340px; }

        /* ---------- product detail ---------- */
        .pd-crumb-wrap { background: ${P.ink}; padding: calc(6rem + var(--util-h)) 0 1.8rem; }
        .pd-crumb-inner { max-width: 1320px; margin: 0 auto; padding: 0 1.75rem; }
        .pd-inner { max-width: 1320px; margin: 0 auto; padding: 2.2rem 1.75rem 5.5rem; display: grid; grid-template-columns: 1fr; gap: 2.6rem; }
        @media (min-width: 900px) { .pd-inner { grid-template-columns: 1fr 1fr; } }
        .pd-gallery { display: flex; flex-direction: column; gap: 0.7rem; }
        .pd-main-img { position: relative; height: 440px; overflow: hidden; border: 1px solid ${P.line}; }
        @media (min-width: 780px) { .pd-main-img { height: 560px; } }
        .pd-thumbs { display: flex; gap: 0.6rem; }
        .pd-thumb { width: 64px; height: 64px; overflow: hidden; border: 1px solid ${P.line}; padding: 0; background: none; transition: border-color .25s; }
        .pd-thumb.active { border-color: ${P.ink}; border-width: 2px; }
        .pd-thumb-media { width: 100%; height: 100%; }
        .pd-cat { color: ${P.rani}; text-transform: uppercase; letter-spacing: 0.1em; font-family: 'IBM Plex Mono', monospace; font-size: 0.68rem; font-weight: 500; margin-bottom: 0.7rem; }
        .pd-title { font-family: 'Bodoni Moda', serif; font-size: 2rem; margin-bottom: 0.6rem; line-height: 1.15; }
        .pd-rating { display: flex; align-items: center; gap: 0.4rem; margin-bottom: 1rem; font-family: 'IBM Plex Mono', monospace; font-size: 0.78rem; color: ${P.ink2}; opacity: 0.7; }
        .pd-price { font-family: 'Bodoni Moda', serif; font-size: 1.7rem; color: ${P.ink}; font-weight: 500; margin-bottom: 1.5rem; }
        .pd-desc { color: ${P.ink2}; opacity: 0.8; line-height: 1.75; font-size: 0.9rem; margin-bottom: 1.7rem; max-width: 480px; }
        .pd-label { font-family: 'IBM Plex Mono', monospace; font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.06em; color: ${P.ink2}; opacity: 0.6; margin-bottom: 0.6rem; }
        .size-row { display: flex; gap: 0.55rem; margin-bottom: 1.7rem; }
        .size-pill { width: 42px; height: 42px; border: 1px solid ${P.lineStrong}; display: flex; align-items: center; justify-content: center; font-family: 'IBM Plex Mono', monospace; font-size: 0.72rem; background: none; transition: all .25s; }
        .size-pill.active { background: ${P.ink}; color: ${P.cream}; border-color: ${P.ink}; }
        .qty-row { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.7rem; }
        .qty-stepper { display: flex; align-items: center; border: 1px solid ${P.lineStrong}; }
        .qty-btn { width: 34px; height: 34px; display: flex; align-items: center; justify-content: center; background: none; border: none; }
        .qty-val { width: 32px; text-align: center; font-family: 'IBM Plex Mono', monospace; font-weight: 500; font-size: 0.8rem; }
        .pd-actions { display: flex; gap: 0.7rem; margin-bottom: 1.9rem; }
        .pd-wish { border: 1px solid ${P.lineStrong}; width: 50px; display: flex; align-items: center; justify-content: center; background: none; }
        .pd-tabs { border-top: 1px solid ${P.line}; padding-top: 1.4rem; }
        .tab-headers { display: flex; gap: 1.6rem; margin-bottom: 1.1rem; flex-wrap: wrap; }
        .tab-header { font-family: 'IBM Plex Mono', monospace; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.03em; padding-bottom: 0.55rem; position: relative; color: ${P.ink2}; opacity: 0.55; }
        .tab-header.active { color: ${P.ink}; opacity: 1; }
        .tab-header.active::after { content: ''; position: absolute; bottom: -1px; left: 0; right: 0; height: 2px; background: ${P.rani}; }
        .tab-content { color: ${P.ink2}; opacity: 0.8; font-size: 0.86rem; line-height: 1.75; max-width: 520px; }

        /* ---------- cart ---------- */
        .cart-inner { max-width: 1040px; margin: 0 auto; padding: 3rem 1.75rem 5.5rem; display: grid; grid-template-columns: 1fr; gap: 2.2rem; }
        @media (min-width: 860px) { .cart-inner { grid-template-columns: 1.6fr 1fr; } }
        .cart-row { display: flex; gap: 1.1rem; padding: 1.1rem 0; border-bottom: 1px solid ${P.line}; align-items: center; }
        .cart-thumb { width: 80px; height: 92px; flex-shrink: 0; overflow: hidden; border: 1px solid ${P.line}; }
        .cart-row-info { flex: 1; }
        .cart-row-info h4 { font-size: 0.88rem; font-weight: 600; margin: 0; }
        .cart-row-meta { font-family: 'IBM Plex Mono', monospace; font-size: 0.68rem; color: ${P.ink2}; opacity: 0.55; margin: 0.25rem 0 0.6rem; }
        .cart-row-price { font-family: 'Bodoni Moda', serif; font-size: 1.05rem; font-weight: 500; white-space: nowrap; }
        .cart-remove { display: flex; align-items: center; gap: 0.3rem; color: ${P.ink2}; opacity: 0.6; font-family: 'IBM Plex Mono', monospace; font-size: 0.68rem; text-decoration: underline; background: none; border: none; margin-top: 0.5rem; padding: 0; }
        .summary-box { background: ${P.paperDeep}; padding: 1.7rem; height: fit-content; }
        .summary-title { font-family: 'Bodoni Moda', serif; font-size: 1.3rem; margin-bottom: 1.3rem; }
        .summary-row { display: flex; justify-content: space-between; font-family: 'IBM Plex Mono', monospace; font-size: 0.8rem; margin-bottom: 0.8rem; color: ${P.ink2}; }
        .summary-total { display: flex; justify-content: space-between; font-family: 'Bodoni Moda', serif; font-size: 1.3rem; font-weight: 500; padding-top: 0.9rem; border-top: 1px solid ${P.lineStrong}; margin-top: 0.5rem; }

        /* ---------- contact ---------- */
        .contact-inner { max-width: 1040px; margin: 0 auto; padding: 3.5rem 1.75rem 5.5rem; display: grid; grid-template-columns: 1fr; gap: 2.8rem; }
        @media (min-width: 860px) { .contact-inner { grid-template-columns: 1fr 1fr; } }
        .contact-heading { font-family: 'Bodoni Moda', serif; font-size: 1.7rem; margin-bottom: 1.5rem; }
        .form-field { margin-bottom: 1.1rem; display: flex; flex-direction: column; gap: 0.45rem; }
        .form-field label { font-family: 'IBM Plex Mono', monospace; font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.05em; color: ${P.ink2}; opacity: 0.6; }
        .form-field input, .form-field textarea { border: 1px solid ${P.lineStrong}; border-radius: 0; padding: 0.75rem 0.9rem; font-family: 'Inter', sans-serif; font-size: 0.88rem; outline: none; transition: border-color .25s; background: ${P.paper}; resize: vertical; }
        .form-field input:focus, .form-field textarea:focus { border-color: ${P.ink}; }
        .contact-info-item { display: flex; gap: 0.9rem; align-items: flex-start; margin-bottom: 1.5rem; }
        .contact-info-icon { color: ${P.rani}; flex-shrink: 0; margin-top: 0.15rem; }
        .contact-info-item strong { font-size: 0.85rem; }
        .contact-info-item p { color: ${P.ink2}; opacity: 0.75; font-size: 0.85rem; margin-top: 0.2rem; }

        /* ---------- about ---------- */
        .about-lede { font-family: 'Bodoni Moda', serif; font-size: 1.45rem; line-height: 1.55; color: ${P.ink}; font-weight: 500; }
        .timeline { display: flex; flex-direction: column; position: relative; padding-left: 1.8rem; border-left: 1px solid ${P.lineStrong}; max-width: 620px; }
        .timeline-item { position: relative; padding-bottom: 2.2rem; }
        .timeline-dot { position: absolute; left: -2.28rem; top: 0.2rem; width: 9px; height: 9px; background: ${P.rani}; border: 2px solid ${P.paper}; }
        .timeline-year { font-family: 'Bodoni Moda', serif; color: ${P.ink}; font-size: 1.2rem; font-weight: 600; margin-bottom: 0.3rem; }
        .timeline-text { color: ${P.ink2}; opacity: 0.8; font-size: 0.88rem; line-height: 1.65; max-width: 480px; }
      `}</style>

      <div className="util-bar">Complimentary shipping over Rs 15,000 · New Festive Edit now live · 7-day easy exchange</div>

      <Navbar scrolled={scrolled} navigate={navigate} menuOpen={menuOpen} setMenuOpen={setMenuOpen} cartCount={cartCount} wishCount={wishlist.size} bump={bump} onSearch={() => setSearchOpen(true)} />

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} navigate={navigate} />

      {PageView}

      <Footer navigate={navigate} />
    </div>
  );
}
