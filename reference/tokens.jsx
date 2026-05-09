// Design Tokens & Shared Components for Tamil Cookbook

const T = {
  // Colors — warm, food-inspired palette
  color: {
    turmeric:     '#E8A317',
    turmericLight:'#FFF3D6',
    turmericMuted:'#F5D88A',
    leaf:         '#2D7A3A',
    leafLight:    '#E8F5EA',
    leafDark:     '#1B5E26',
    clay:         '#C0392B',
    clayLight:    '#FDECEB',
    cream:        '#FFFBF5',
    warmWhite:    '#FFF8F0',
    sand:         '#F5F0E8',
    bark:         '#3D2B1F',
    barkMuted:    '#6B5744',
    stone:        '#8C7B6B',
    smoke:        '#B8ADA3',
    mist:         '#E8E2DA',
    white:        '#FFFFFF',
    // Meal slot colors
    breakfast:    '#E8A317',
    lunch:        '#2D7A3A',
    dinner:       '#D35400',
    snacks:       '#C0392B',
    // Veg/Non-veg
    veg:          '#2D7A3A',
    nonveg:       '#C0392B',
    // Complexity
    easy:         '#2D7A3A',
    medium:       '#E8A317',
    hard:         '#C0392B',
  },
  // Typography
  font: {
    heading: "'DM Sans', sans-serif",
    body:    "'DM Sans', sans-serif",
    tamil:   "'Noto Sans Tamil', sans-serif",
    mono:    "'DM Mono', monospace",
  },
  // Spacing scale (px)
  sp: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80],
  // Radii
  r: { sm: 6, md: 10, lg: 16, xl: 24, full: 9999 },
  // Shadows
  shadow: {
    sm: '0 1px 3px rgba(61,43,31,.06)',
    md: '0 4px 12px rgba(61,43,31,.08)',
    lg: '0 8px 24px rgba(61,43,31,.1)',
  },
};

// ---- Shared primitives ----

function NavBar({ active = 'calendar', mobile = false }) {
  const items = [
    { key: 'calendar', icon: '📅', label: 'Planner' },
    { key: 'recipes',  icon: '📖', label: 'Recipes' },
    { key: 'shopping', icon: '🛒', label: 'Shopping' },
    { key: 'admin',    icon: '⚙️', label: 'Admin' },
  ];
  if (mobile) {
    return (
      <div style={{
        display: 'flex', justifyContent: 'space-around', alignItems: 'center',
        background: T.color.white, borderTop: `1px solid ${T.color.mist}`,
        padding: '6px 0 2px', position: 'absolute', bottom: 0, left: 0, right: 0,
        zIndex: 100,
      }}>
        {items.map(it => (
          <div key={it.key} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
            opacity: active === it.key ? 1 : .5,
            color: active === it.key ? T.color.turmeric : T.color.bark,
            fontSize: 10, fontWeight: active === it.key ? 700 : 500,
            fontFamily: T.font.body, cursor: 'pointer',
          }}>
            <span style={{ fontSize: 20 }}>{it.icon}</span>
            {it.label}
          </div>
        ))}
      </div>
    );
  }
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 0,
      background: T.color.cream, borderBottom: `1px solid ${T.color.mist}`,
      padding: '0 32px', height: 56, fontFamily: T.font.heading,
    }}>
      <div style={{ fontWeight: 800, fontSize: 18, color: T.color.bark, marginRight: 40, letterSpacing: -.3 }}>
        🍛 Tamil Cookbook
      </div>
      {items.map(it => (
        <div key={it.key} style={{
          padding: '16px 20px', fontSize: 14, fontWeight: 600,
          color: active === it.key ? T.color.turmeric : T.color.stone,
          borderBottom: active === it.key ? `2.5px solid ${T.color.turmeric}` : '2.5px solid transparent',
          cursor: 'pointer', marginBottom: -1,
        }}>
          {it.label}
        </div>
      ))}
    </div>
  );
}

function VegDot({ veg, size = 14 }) {
  const c = veg ? T.color.veg : T.color.nonveg;
  return (
    <div style={{
      width: size, height: size, border: `1.5px solid ${c}`,
      borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{ width: size * .45, height: size * .45, borderRadius: '50%', background: c }}></div>
    </div>
  );
}

function ComplexityDots({ level, size = 8 }) {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {[1,2,3].map(i => (
        <div key={i} style={{
          width: size, height: size, borderRadius: '50%',
          background: i <= level ? (level === 1 ? T.color.easy : level === 2 ? T.color.medium : T.color.hard) : T.color.mist,
        }}></div>
      ))}
    </div>
  );
}

function MealPill({ type, label }) {
  const colors = { breakfast: T.color.breakfast, lunch: T.color.lunch, dinner: T.color.dinner, snacks: T.color.snacks };
  const bg = { breakfast: T.color.turmericLight, lunch: T.color.leafLight, dinner: '#FFF0E5', snacks: T.color.clayLight };
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      background: bg[type], color: colors[type],
      fontSize: 11, fontWeight: 600, padding: '3px 8px',
      borderRadius: T.r.full, fontFamily: T.font.body,
      whiteSpace: 'nowrap',
    }}>
      <div style={{ width: 6, height: 6, borderRadius: '50%', background: colors[type] }}></div>
      {label}
    </div>
  );
}

function CategoryBadge({ category, small = false }) {
  const colorMap = {
    breakfast: T.color.breakfast, kulambu: T.color.clay, poriyal: T.color.leaf,
    rice: T.color.turmeric, chutney: T.color.stone, snacks: T.color.dinner,
    desserts: '#9B59B6', nonveg: T.color.nonveg, kootu: '#16A085', sides: T.color.barkMuted,
  };
  const c = colorMap[category] || T.color.stone;
  return (
    <span style={{
      display: 'inline-block', fontSize: small ? 10 : 11, fontWeight: 600,
      color: c, background: c + '15', padding: small ? '2px 6px' : '3px 10px',
      borderRadius: T.r.full, textTransform: 'capitalize', fontFamily: T.font.body,
    }}>
      {category}
    </span>
  );
}

function RecipeCardSmall({ name, tamil, time, veg = true, complexity = 1, category = 'kulambu', imgColor = '#E8D5C0' }) {
  return (
    <div style={{
      width: '100%', background: T.color.white, borderRadius: T.r.lg,
      boxShadow: T.shadow.sm, overflow: 'hidden', cursor: 'pointer',
      border: `1px solid ${T.color.mist}`,
    }}>
      <div style={{
        height: 110, background: imgColor,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 36, color: 'rgba(61,43,31,.15)',
      }}>🍽️</div>
      <div style={{ padding: '10px 12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
          <VegDot veg={veg} size={12} />
          <span style={{ fontSize: 13, fontWeight: 700, color: T.color.bark, fontFamily: T.font.heading }}>{name}</span>
        </div>
        <div style={{ fontSize: 11, color: T.color.stone, fontFamily: T.font.tamil, marginBottom: 6 }}>{tamil}</div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <CategoryBadge category={category} small />
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <ComplexityDots level={complexity} size={6} />
            <span style={{ fontSize: 10, color: T.color.smoke }}>{time}m</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Btn({ children, variant = 'primary', size = 'md', icon, style: sx = {} }) {
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 6,
    fontFamily: T.font.heading, fontWeight: 600, cursor: 'pointer',
    borderRadius: T.r.md, border: 'none', whiteSpace: 'nowrap',
  };
  const variants = {
    primary: { background: T.color.turmeric, color: T.color.white, },
    secondary: { background: T.color.sand, color: T.color.bark, },
    ghost: { background: 'transparent', color: T.color.stone, },
    danger: { background: T.color.clayLight, color: T.color.clay, },
  };
  const sizes = {
    sm: { fontSize: 12, padding: '6px 12px' },
    md: { fontSize: 13, padding: '8px 16px' },
    lg: { fontSize: 15, padding: '12px 24px' },
  };
  return <div style={{ ...base, ...variants[variant], ...sizes[size], ...sx }}>{icon}{children}</div>;
}

// Export to window
Object.assign(window, { T, NavBar, VegDot, ComplexityDots, MealPill, CategoryBadge, RecipeCardSmall, Btn });
