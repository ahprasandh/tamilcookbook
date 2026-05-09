// Recipe List + Detail pages

function RecipeListDesktop() {
  const categories = ['All','Breakfast','Kulambu','Poriyal','Rice','Chutney','Kootu','Snacks','Desserts','Non-veg','Sides'];
  const recipes = [
    { name: 'Sambar', tamil: 'சாம்பார்', time: 45, veg: true, complexity: 2, category: 'kulambu', img: '#F0D8A8' },
    { name: 'Chicken Biriyani', tamil: 'சிக்கன் பிரியாணி', time: 60, veg: false, complexity: 3, category: 'rice', img: '#F5E0C0' },
    { name: 'Idli', tamil: 'இட்லி', time: 30, veg: true, complexity: 1, category: 'breakfast', img: '#F5E6D0' },
    { name: 'Dosa', tamil: 'தோசை', time: 25, veg: true, complexity: 1, category: 'breakfast', img: '#F0E8D8' },
    { name: 'Beans Poriyal', tamil: 'பீன்ஸ் பொரியல்', time: 20, veg: true, complexity: 1, category: 'poriyal', img: '#D8ECD0' },
    { name: 'Vathal Kuzhambu', tamil: 'வத்தல் குழம்பு', time: 40, veg: true, complexity: 2, category: 'kulambu', img: '#E8C8A0' },
    { name: 'Coconut Chutney', tamil: 'தேங்காய் சட்னி', time: 10, veg: true, complexity: 1, category: 'chutney', img: '#E8F0E0' },
    { name: 'Pongal', tamil: 'பொங்கல்', time: 35, veg: true, complexity: 1, category: 'breakfast', img: '#F5F0D0' },
    { name: 'Fish Fry', tamil: 'மீன் வறுவல்', time: 30, veg: false, complexity: 2, category: 'nonveg', img: '#F0D0B8' },
    { name: 'Murukku', tamil: 'முறுக்கு', time: 50, veg: true, complexity: 3, category: 'snacks', img: '#F0E0C8' },
    { name: 'Rasam', tamil: 'ரசம்', time: 25, veg: true, complexity: 1, category: 'kulambu', img: '#F5D0A0' },
    { name: 'Cabbage Poriyal', tamil: 'முட்டைகோஸ் பொரியல்', time: 15, veg: true, complexity: 1, category: 'poriyal', img: '#D0E8C8' },
  ];

  return (
    <div style={{ background: T.color.cream, minHeight: 700, fontFamily: T.font.heading }}>
      <NavBar active="recipes" />
      <div style={{ padding: '24px 32px' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <div style={{ fontSize: 24, fontWeight: 800, color: T.color.bark }}>Recipes</div>
          {/* Search */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8, background: T.color.white,
            border: `1px solid ${T.color.mist}`, borderRadius: T.r.full,
            padding: '8px 16px', width: 280,
          }}>
            <span style={{ color: T.color.smoke }}>🔍</span>
            <span style={{ fontSize: 13, color: T.color.smoke }}>Search recipes...</span>
          </div>
        </div>

        {/* Category tabs */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 24, flexWrap: 'wrap' }}>
          {categories.map((c, i) => (
            <div key={c} style={{
              padding: '6px 16px', borderRadius: T.r.full, fontSize: 13, fontWeight: 600,
              background: i === 0 ? T.color.bark : T.color.white,
              color: i === 0 ? T.color.white : T.color.stone,
              border: i === 0 ? 'none' : `1px solid ${T.color.mist}`,
              cursor: 'pointer',
            }}>{c}</div>
          ))}
        </div>

        {/* Recipe grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {recipes.map(r => (
            <RecipeCardSmall key={r.name} name={r.name} tamil={r.tamil} time={r.time} veg={r.veg} complexity={r.complexity} category={r.category} imgColor={r.img} />
          ))}
        </div>
      </div>
    </div>
  );
}

function RecipeListMobile() {
  const recipes = [
    { name: 'Sambar', tamil: 'சாம்பார்', time: 45, veg: true, complexity: 2, category: 'kulambu', img: '#F0D8A8' },
    { name: 'Idli', tamil: 'இட்லி', time: 30, veg: true, complexity: 1, category: 'breakfast', img: '#F5E6D0' },
    { name: 'Dosa', tamil: 'தோசை', time: 25, veg: true, complexity: 1, category: 'breakfast', img: '#F0E8D8' },
    { name: 'Beans Poriyal', tamil: 'பீன்ஸ் பொரியல்', time: 20, veg: true, complexity: 1, category: 'poriyal', img: '#D8ECD0' },
    { name: 'Fish Fry', tamil: 'மீன் வறுவல்', time: 30, veg: false, complexity: 2, category: 'nonveg', img: '#F0D0B8' },
    { name: 'Pongal', tamil: 'பொங்கல்', time: 35, veg: true, complexity: 1, category: 'breakfast', img: '#F5F0D0' },
  ];

  return (
    <div style={{ background: T.color.cream, height: '100%', fontFamily: T.font.heading, position: 'relative', paddingBottom: 60 }}>
      <div style={{ padding: '16px 16px 8px', background: T.color.white, borderBottom: `1px solid ${T.color.mist}` }}>
        <div style={{ fontSize: 20, fontWeight: 800, color: T.color.bark, marginBottom: 12 }}>Recipes</div>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8, background: T.color.sand,
          borderRadius: T.r.full, padding: '10px 16px', marginBottom: 12,
        }}>
          <span style={{ color: T.color.smoke }}>🔍</span>
          <span style={{ fontSize: 13, color: T.color.smoke }}>Search recipes...</span>
        </div>
        <div style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 8 }}>
          {['All','Breakfast','Kulambu','Poriyal','Rice','Chutney'].map((c, i) => (
            <div key={c} style={{
              padding: '5px 14px', borderRadius: T.r.full, fontSize: 12, fontWeight: 600,
              background: i === 0 ? T.color.bark : T.color.white,
              color: i === 0 ? T.color.white : T.color.stone,
              border: `1px solid ${i === 0 ? T.color.bark : T.color.mist}`,
              whiteSpace: 'nowrap', flexShrink: 0,
            }}>{c}</div>
          ))}
        </div>
      </div>

      <div style={{ padding: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {recipes.map(r => (
          <RecipeCardSmall key={r.name} name={r.name} tamil={r.tamil} time={r.time} veg={r.veg} complexity={r.complexity} category={r.category} imgColor={r.img} />
        ))}
      </div>
      <NavBar active="recipes" mobile />
    </div>
  );
}

function RecipeDetailDesktop() {
  const ingredients = [
    { item: 'Toor Dal', qty: '1', unit: 'cup', cat: 'grains' },
    { item: 'Drumstick', qty: '1', unit: 'nos', cat: 'vegetable' },
    { item: 'Onion', qty: '2', unit: 'nos', cat: 'vegetable' },
    { item: 'Tomato', qty: '2', unit: 'nos', cat: 'vegetable' },
    { item: 'Tamarind', qty: '1 tbsp', unit: '', cat: 'spices' },
    { item: 'Sambar Powder', qty: '2 tbsp', unit: '', cat: 'spices' },
    { item: 'Turmeric', qty: '¼ tsp', unit: '', cat: 'spices' },
    { item: 'Mustard Seeds', qty: '1 tsp', unit: '', cat: 'spices' },
  ];
  const steps = [
    { n: 1, en: 'Wash and pressure cook toor dal with turmeric for 3-4 whistles. Mash and set aside.', ta: 'துவரம் பருப்பை மஞ்சள் சேர்த்து 3-4 விசில் குக்கரில் வேகவிடவும்.' },
    { n: 2, en: 'Chop drumstick, onion, and tomato. Soak tamarind in warm water and extract juice.', ta: 'முருங்கைக்காய், வெங்காயம், தக்காளி நறுக்கவும். புளியை ஊறவைக்கவும்.' },
    { n: 3, en: 'In a pot, boil vegetables with sambar powder, salt, and tamarind water until soft.', ta: 'காய்கறிகளை சாம்பார் பொடி, உப்பு, புளித்தண்ணீர் சேர்த்து வேகவிடவும்.' },
    { n: 4, en: 'Add mashed dal and simmer for 10 minutes. Temper with mustard, curry leaves, and dried chili.', ta: 'மசித்த பருப்பை சேர்த்து 10 நிமிடம் கொதிக்கவிடவும். தாளிக்கவும்.' },
  ];

  return (
    <div style={{ background: T.color.cream, minHeight: 700, fontFamily: T.font.heading }}>
      <NavBar active="recipes" />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '24px 32px' }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: 12, color: T.color.smoke, marginBottom: 16, display: 'flex', gap: 6 }}>
          <span style={{ cursor: 'pointer', color: T.color.turmeric }}>Recipes</span>
          <span>›</span>
          <span>Sambar</span>
        </div>

        {/* Hero */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 32 }}>
          <div style={{ background: '#F0D8A8', borderRadius: T.r.xl, height: 320, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 64, color: 'rgba(0,0,0,.06)' }}>🍲</div>
          <div style={{ paddingTop: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
              <VegDot veg={true} size={18} />
              <CategoryBadge category="kulambu" />
            </div>
            <h1 style={{ fontSize: 32, fontWeight: 800, color: T.color.bark, margin: '4px 0' }}>Sambar</h1>
            <div style={{ fontSize: 18, color: T.color.stone, fontFamily: T.font.tamil, marginBottom: 16 }}>சாம்பார்</div>
            <div style={{ display: 'flex', gap: 24, marginBottom: 20 }}>
              <div><div style={{ fontSize: 11, color: T.color.smoke, fontWeight: 600, marginBottom: 2 }}>PREP</div><div style={{ fontSize: 16, fontWeight: 700, color: T.color.bark }}>15 min</div></div>
              <div><div style={{ fontSize: 11, color: T.color.smoke, fontWeight: 600, marginBottom: 2 }}>COOK</div><div style={{ fontSize: 16, fontWeight: 700, color: T.color.bark }}>45 min</div></div>
              <div><div style={{ fontSize: 11, color: T.color.smoke, fontWeight: 600, marginBottom: 2 }}>COMPLEXITY</div><ComplexityDots level={2} size={10} /></div>
            </div>
            {/* Serving scaler */}
            <div style={{ fontSize: 12, color: T.color.smoke, fontWeight: 600, marginBottom: 8 }}>SERVINGS</div>
            <div style={{ display: 'flex', gap: 6 }}>
              {[1,2,3,4].map(s => (
                <div key={s} style={{
                  width: 40, height: 40, borderRadius: T.r.md, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, fontWeight: 700, cursor: 'pointer',
                  background: s === 4 ? T.color.turmeric : T.color.sand,
                  color: s === 4 ? T.color.white : T.color.bark,
                }}>{s}×</div>
              ))}
            </div>
          </div>
        </div>

        {/* Ingredients + Steps side by side */}
        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 32 }}>
          {/* Ingredients */}
          <div>
            <h2 style={{ fontSize: 16, fontWeight: 800, color: T.color.bark, marginBottom: 12 }}>Ingredients</h2>
            <div style={{ background: T.color.white, borderRadius: T.r.lg, border: `1px solid ${T.color.mist}`, overflow: 'hidden' }}>
              {ingredients.map((ing, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '10px 14px', borderBottom: i < ingredients.length - 1 ? `1px solid ${T.color.sand}` : 'none',
                }}>
                  <span style={{ fontSize: 14, color: T.color.bark }}>{ing.item}</span>
                  <span style={{ fontSize: 13, color: T.color.stone, fontWeight: 600 }}>{ing.qty} {ing.unit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Steps */}
          <div>
            <h2 style={{ fontSize: 16, fontWeight: 800, color: T.color.bark, marginBottom: 12 }}>Steps</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {steps.map(s => (
                <div key={s.n} style={{ display: 'flex', gap: 14 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: '50%', background: T.color.turmericLight,
                    color: T.color.turmeric, fontSize: 14, fontWeight: 800,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>{s.n}</div>
                  <div>
                    <div style={{ fontSize: 14, color: T.color.bark, lineHeight: 1.6, marginBottom: 4 }}>{s.en}</div>
                    <div style={{ fontSize: 12, color: T.color.stone, fontFamily: T.font.tamil, lineHeight: 1.6 }}>{s.ta}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RecipeDetailMobile() {
  const ingredients = [
    { item: 'Toor Dal', qty: '1 cup' },
    { item: 'Drumstick', qty: '1 nos' },
    { item: 'Onion', qty: '2 nos' },
    { item: 'Tomato', qty: '2 nos' },
    { item: 'Sambar Powder', qty: '2 tbsp' },
    { item: 'Tamarind', qty: '1 tbsp' },
  ];

  return (
    <div style={{ background: T.color.cream, height: '100%', fontFamily: T.font.heading, position: 'relative', overflowY: 'auto', paddingBottom: 60 }}>
      {/* Hero image */}
      <div style={{ position: 'relative' }}>
        <div style={{ height: 220, background: '#F0D8A8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 56, color: 'rgba(0,0,0,.06)' }}>🍲</div>
        <div style={{ position: 'absolute', top: 12, left: 12 }}>
          <Btn variant="ghost" size="sm" style={{ background: 'rgba(255,255,255,.9)', borderRadius: T.r.full }}>‹ Back</Btn>
        </div>
      </div>

      <div style={{ padding: '16px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <VegDot veg={true} />
          <CategoryBadge category="kulambu" />
        </div>
        <div style={{ fontSize: 24, fontWeight: 800, color: T.color.bark, marginTop: 4 }}>Sambar</div>
        <div style={{ fontSize: 15, color: T.color.stone, fontFamily: T.font.tamil, marginBottom: 12 }}>சாம்பார்</div>

        <div style={{ display: 'flex', gap: 20, marginBottom: 16 }}>
          <div style={{ textAlign: 'center' }}><div style={{ fontSize: 9, color: T.color.smoke, fontWeight: 700 }}>PREP</div><div style={{ fontSize: 14, fontWeight: 700, color: T.color.bark }}>15m</div></div>
          <div style={{ textAlign: 'center' }}><div style={{ fontSize: 9, color: T.color.smoke, fontWeight: 700 }}>COOK</div><div style={{ fontSize: 14, fontWeight: 700, color: T.color.bark }}>45m</div></div>
          <div style={{ textAlign: 'center' }}><div style={{ fontSize: 9, color: T.color.smoke, fontWeight: 700, marginBottom: 4 }}>LEVEL</div><ComplexityDots level={2} size={8} /></div>
        </div>

        {/* Serving scaler */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 20 }}>
          {[1,2,3,4].map(s => (
            <div key={s} style={{
              flex: 1, height: 36, borderRadius: T.r.md, display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 14, fontWeight: 700,
              background: s === 4 ? T.color.turmeric : T.color.sand,
              color: s === 4 ? T.color.white : T.color.bark,
            }}>{s}×</div>
          ))}
        </div>

        {/* Ingredients */}
        <div style={{ fontSize: 14, fontWeight: 800, color: T.color.bark, marginBottom: 8 }}>Ingredients</div>
        <div style={{ background: T.color.white, borderRadius: T.r.lg, border: `1px solid ${T.color.mist}`, marginBottom: 20 }}>
          {ingredients.map((ing, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between', padding: '10px 14px',
              borderBottom: i < ingredients.length - 1 ? `1px solid ${T.color.sand}` : 'none',
            }}>
              <span style={{ fontSize: 13, color: T.color.bark }}>{ing.item}</span>
              <span style={{ fontSize: 12, color: T.color.stone, fontWeight: 600 }}>{ing.qty}</span>
            </div>
          ))}
        </div>

        {/* Steps */}
        <div style={{ fontSize: 14, fontWeight: 800, color: T.color.bark, marginBottom: 8 }}>Steps</div>
        {[1,2,3].map(n => (
          <div key={n} style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
            <div style={{
              width: 26, height: 26, borderRadius: '50%', background: T.color.turmericLight,
              color: T.color.turmeric, fontSize: 12, fontWeight: 800, flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>{n}</div>
            <div style={{ fontSize: 13, color: T.color.bark, lineHeight: 1.6 }}>
              {n === 1 && 'Wash and pressure cook toor dal with turmeric for 3-4 whistles.'}
              {n === 2 && 'Chop vegetables. Soak tamarind and extract juice.'}
              {n === 3 && 'Boil vegetables with sambar powder, add dal, and temper.'}
            </div>
          </div>
        ))}
      </div>
      <NavBar active="recipes" mobile />
    </div>
  );
}

Object.assign(window, { RecipeListDesktop, RecipeListMobile, RecipeDetailDesktop, RecipeDetailMobile });
