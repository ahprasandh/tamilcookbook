// Shopping List + Admin pages

function ShoppingDesktop() {
  const groups = [
    { cat: '🥬 Vegetables', items: [
      { item: 'Onion', qty: '12 nos', checked: true },
      { item: 'Tomato', qty: '10 nos', checked: true },
      { item: 'Drumstick', qty: '3 nos', checked: false },
      { item: 'Beans', qty: '250 g', checked: false },
      { item: 'Cabbage', qty: '1 nos', checked: false },
      { item: 'Carrot', qty: '3 nos', checked: false },
    ]},
    { cat: '🌾 Grains & Lentils', items: [
      { item: 'Rice', qty: '5 kg', checked: false },
      { item: 'Toor Dal', qty: '500 g', checked: false },
      { item: 'Urad Dal', qty: '500 g', checked: false },
      { item: 'Wheat Flour', qty: '1 kg', checked: false },
      { item: 'Rava', qty: '250 g', checked: false },
    ]},
    { cat: '🌶 Spices & Condiments', items: [
      { item: 'Sambar Powder', qty: '100 g', checked: false },
      { item: 'Turmeric Powder', qty: '50 g', checked: false },
      { item: 'Mustard Seeds', qty: '50 g', checked: false },
      { item: 'Tamarind', qty: '100 g', checked: false },
    ]},
    { cat: '🥩 Meat & Seafood', items: [
      { item: 'Chicken', qty: '1 kg', checked: false },
      { item: 'Fish (Seer)', qty: '500 g', checked: false },
    ]},
    { cat: '🥛 Dairy & Fresh', items: [
      { item: 'Coconut', qty: '4 nos', checked: false },
      { item: 'Curd', qty: '500 ml', checked: false },
    ]},
  ];

  return (
    <div style={{ background: T.color.cream, minHeight: 700, fontFamily: T.font.heading }}>
      <NavBar active="shopping" />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '24px 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <div style={{ fontSize: 24, fontWeight: 800, color: T.color.bark }}>Shopping List</div>
          <Btn variant="secondary" size="sm">🖨 Print</Btn>
        </div>

        {/* Week selector */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24,
          background: T.color.white, borderRadius: T.r.lg, padding: '12px 16px',
          border: `1px solid ${T.color.mist}`,
        }}>
          <Btn variant="ghost" size="sm">‹</Btn>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: T.color.bark }}>May 5 – May 11, 2026</div>
            <div style={{ fontSize: 11, color: T.color.turmeric, fontWeight: 600 }}>Current Week</div>
          </div>
          <Btn variant="ghost" size="sm">›</Btn>
        </div>

        {/* Progress */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: T.color.stone, marginBottom: 6 }}>
            <span>2 of 19 items checked</span>
            <span style={{ fontWeight: 700 }}>11%</span>
          </div>
          <div style={{ height: 6, background: T.color.sand, borderRadius: T.r.full, overflow: 'hidden' }}>
            <div style={{ width: '11%', height: '100%', background: T.color.leaf, borderRadius: T.r.full }}></div>
          </div>
        </div>

        {/* Groups */}
        {groups.map(g => (
          <div key={g.cat} style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: T.color.bark, marginBottom: 8 }}>{g.cat}</div>
            <div style={{ background: T.color.white, borderRadius: T.r.lg, border: `1px solid ${T.color.mist}`, overflow: 'hidden' }}>
              {g.items.map((it, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px',
                  borderBottom: i < g.items.length - 1 ? `1px solid ${T.color.sand}` : 'none',
                  opacity: it.checked ? .5 : 1,
                }}>
                  <div style={{
                    width: 20, height: 20, borderRadius: T.r.sm, border: `2px solid ${it.checked ? T.color.leaf : T.color.mist}`,
                    background: it.checked ? T.color.leaf : 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: T.color.white, fontSize: 12, fontWeight: 700,
                  }}>{it.checked ? '✓' : ''}</div>
                  <span style={{ flex: 1, fontSize: 14, color: T.color.bark, textDecoration: it.checked ? 'line-through' : 'none' }}>{it.item}</span>
                  <span style={{ fontSize: 13, color: T.color.stone, fontWeight: 600 }}>{it.qty}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ShoppingMobile() {
  const items = [
    { cat: '🥬 Vegetables', items: [
      { item: 'Onion', qty: '12 nos', checked: true },
      { item: 'Tomato', qty: '10 nos', checked: false },
      { item: 'Drumstick', qty: '3 nos', checked: false },
      { item: 'Beans', qty: '250 g', checked: false },
    ]},
    { cat: '🌾 Grains', items: [
      { item: 'Rice', qty: '5 kg', checked: false },
      { item: 'Toor Dal', qty: '500 g', checked: false },
      { item: 'Urad Dal', qty: '500 g', checked: false },
    ]},
    { cat: '🌶 Spices', items: [
      { item: 'Sambar Powder', qty: '100 g', checked: false },
      { item: 'Turmeric', qty: '50 g', checked: false },
    ]},
  ];

  return (
    <div style={{ background: T.color.cream, height: '100%', fontFamily: T.font.heading, position: 'relative', paddingBottom: 60 }}>
      <div style={{ padding: '16px 20px', background: T.color.white, borderBottom: `1px solid ${T.color.mist}` }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: T.color.bark }}>Shopping</div>
          <Btn variant="ghost" size="sm">🖨</Btn>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center' }}>
          <Btn variant="ghost" size="sm">‹</Btn>
          <div style={{ fontSize: 13, fontWeight: 700, color: T.color.bark }}>May 5 – 11</div>
          <Btn variant="ghost" size="sm">›</Btn>
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ padding: '12px 20px 0' }}>
        <div style={{ height: 4, background: T.color.sand, borderRadius: T.r.full, overflow: 'hidden' }}>
          <div style={{ width: '10%', height: '100%', background: T.color.leaf, borderRadius: T.r.full }}></div>
        </div>
        <div style={{ fontSize: 10, color: T.color.smoke, marginTop: 4 }}>1 of 10 items</div>
      </div>

      <div style={{ padding: '12px 16px' }}>
        {items.map(g => (
          <div key={g.cat} style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.color.bark, marginBottom: 6 }}>{g.cat}</div>
            <div style={{ background: T.color.white, borderRadius: T.r.lg, border: `1px solid ${T.color.mist}` }}>
              {g.items.map((it, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px',
                  borderBottom: i < g.items.length - 1 ? `1px solid ${T.color.sand}` : 'none',
                  opacity: it.checked ? .5 : 1,
                }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: T.r.sm,
                    border: `2px solid ${it.checked ? T.color.leaf : T.color.mist}`,
                    background: it.checked ? T.color.leaf : 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: T.color.white, fontSize: 13, fontWeight: 700,
                  }}>{it.checked ? '✓' : ''}</div>
                  <span style={{ flex: 1, fontSize: 14, color: T.color.bark, textDecoration: it.checked ? 'line-through' : 'none' }}>{it.item}</span>
                  <span style={{ fontSize: 13, color: T.color.stone, fontWeight: 700 }}>{it.qty}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <NavBar active="shopping" mobile />
    </div>
  );
}

function AdminDesktop() {
  const recipes = [
    { name: 'Sambar', category: 'kulambu', veg: true },
    { name: 'Chicken Biriyani', category: 'rice', veg: false },
    { name: 'Idli', category: 'breakfast', veg: true },
    { name: 'Dosa', category: 'breakfast', veg: true },
    { name: 'Beans Poriyal', category: 'poriyal', veg: true },
  ];

  return (
    <div style={{ background: T.color.cream, minHeight: 700, fontFamily: T.font.heading }}>
      <NavBar active="admin" />
      <div style={{ padding: '24px 32px' }}>
        <div style={{ fontSize: 24, fontWeight: 800, color: T.color.bark, marginBottom: 20 }}>Admin</div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 0, marginBottom: 24, borderBottom: `2px solid ${T.color.mist}` }}>
          {['Browse Recipes', 'Recipe Editor', 'Planner Editor'].map((t, i) => (
            <div key={t} style={{
              padding: '10px 20px', fontSize: 14, fontWeight: 600, cursor: 'pointer',
              color: i === 0 ? T.color.turmeric : T.color.stone,
              borderBottom: i === 0 ? `2.5px solid ${T.color.turmeric}` : '2.5px solid transparent',
              marginBottom: -2,
            }}>{t}</div>
          ))}
        </div>

        {/* Browse tab content */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: T.color.white, border: `1px solid ${T.color.mist}`, borderRadius: T.r.full, padding: '8px 16px', width: 260 }}>
            <span style={{ color: T.color.smoke }}>🔍</span>
            <span style={{ fontSize: 13, color: T.color.smoke }}>Search...</span>
          </div>
          <Btn variant="primary" size="md">+ New Recipe</Btn>
        </div>

        {/* Recipe table */}
        <div style={{ background: T.color.white, borderRadius: T.r.lg, border: `1px solid ${T.color.mist}`, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 80px 100px', padding: '10px 16px', borderBottom: `1px solid ${T.color.mist}`, background: T.color.sand }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: T.color.smoke, textTransform: 'uppercase', letterSpacing: 1 }}>Recipe</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: T.color.smoke, textTransform: 'uppercase', letterSpacing: 1 }}>Category</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: T.color.smoke, textTransform: 'uppercase', letterSpacing: 1 }}>Type</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: T.color.smoke, textTransform: 'uppercase', letterSpacing: 1, textAlign: 'right' }}>Actions</div>
          </div>
          {recipes.map((r, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '2fr 1fr 80px 100px', padding: '12px 16px',
              borderBottom: i < recipes.length - 1 ? `1px solid ${T.color.sand}` : 'none',
              alignItems: 'center',
            }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: T.color.bark }}>{r.name}</div>
              <CategoryBadge category={r.category} small />
              <VegDot veg={r.veg} />
              <div style={{ textAlign: 'right' }}>
                <Btn variant="ghost" size="sm" style={{ color: T.color.turmeric }}>Edit</Btn>
              </div>
            </div>
          ))}
        </div>

        {/* Save all bar */}
        <div style={{
          marginTop: 24, padding: '16px 20px', background: T.color.white,
          borderRadius: T.r.lg, border: `1px solid ${T.color.mist}`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ fontSize: 13, color: T.color.stone }}>2 recipes modified · Planner unsaved</div>
          <div style={{ display: 'flex', gap: 8 }}>
            <Btn variant="secondary" size="md">Export Recipes (.zip)</Btn>
            <Btn variant="primary" size="md">Save Planner to Cloud</Btn>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ShoppingDesktop, ShoppingMobile, AdminDesktop });
