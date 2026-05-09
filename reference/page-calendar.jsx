// Calendar Home — Desktop & Mobile mockups

function CalendarDesktop() {
  const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  const meals = [
    // Week 1 (starts Thu May 1)
    null, null, null,
    { d: 1, b: 'Idli', l: 'Sambar Rice', n: 'Dosa' },
    { d: 2, b: 'Pongal', l: 'Vathal Kuzhambu', n: 'Chapati' },
    { d: 3, b: 'Dosa', l: 'Chicken Biriyani', n: 'Rava Upma', s: 'Murukku', weekend: true },
    { d: 4, b: 'Upma', l: 'Fish Curry Rice', n: 'Idli', s: 'Bajji', weekend: true },
    // Week 2
    { d: 5, b: 'Idli', l: 'Sambar Rice', n: 'Dosa' },
    { d: 6, b: 'Pongal', l: 'Rasam Rice', n: 'Chapati' },
    { d: 7, b: 'Dosa', l: 'Kootu Rice', n: 'Rava Upma' },
    { d: 8, b: 'Upma', l: 'Sambar Rice', n: 'Dosa', today: true },
    { d: 9, b: 'Pongal', l: 'Vathal Kuzhambu', n: 'Chapati' },
    { d: 10, b: 'Idli', l: 'Biriyani', n: 'Dosa', s: 'Bonda', weekend: true },
    { d: 11, b: 'Dosa', l: 'Mutton Kuzhambu', n: 'Upma', s: 'Kesari', weekend: true },
    // Week 3
    { d: 12, b: 'Upma', l: 'Sambar Rice', n: 'Chapati' },
    { d: 13, b: 'Idli', l: 'Rasam Rice', n: 'Dosa' },
    { d: 14, b: 'Pongal', l: 'Kootu Rice', n: 'Rava Upma' },
    { d: 15, b: 'Dosa', l: 'Sambar Rice', n: 'Chapati' },
    { d: 16, b: 'Upma', l: 'Vathal Kuzhambu', n: 'Dosa' },
    { d: 17, b: 'Idli', l: 'Biriyani', n: 'Idli', s: 'Murukku', weekend: true },
    { d: 18, b: 'Pongal', l: 'Chicken Curry', n: 'Dosa', s: 'Payasam', weekend: true },
    // Week 4
    ...Array.from({length: 7}, (_,i) => ({ d: 19+i, b: ['Idli','Pongal','Dosa','Upma','Idli','Dosa','Pongal'][i], l: ['Sambar','Rasam','Kootu','Sambar','Vathal','Biriyani','Fish Curry'][i], n: ['Dosa','Chapati','Upma','Dosa','Chapati','Idli','Dosa'][i], ...(i>=5 ? {s: 'Snack', weekend: true} : {}) })),
    // Week 5 partial
    ...Array.from({length: 5}, (_,i) => ({ d: 26+i, b: 'Idli', l: 'Sambar', n: 'Dosa', ...(i>=5 ? {weekend:true} : {}) })),
    null, null,
  ];

  return (
    <div style={{ background: T.color.cream, minHeight: 700, fontFamily: T.font.heading }}>
      <NavBar active="calendar" />
      <div style={{ padding: '24px 32px' }}>
        {/* Month header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ fontSize: 24, fontWeight: 800, color: T.color.bark }}>May 2026</div>
            <div style={{ display: 'flex', gap: 4 }}>
              <Btn variant="ghost" size="sm">‹</Btn>
              <Btn variant="ghost" size="sm">›</Btn>
            </div>
          </div>
          <Btn variant="secondary" size="sm">Today</Btn>
        </div>

        {/* Day headers */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 1, marginBottom: 1 }}>
          {days.map(d => (
            <div key={d} style={{ textAlign: 'center', fontSize: 11, fontWeight: 700, color: T.color.smoke, padding: '8px 0', textTransform: 'uppercase', letterSpacing: 1 }}>{d}</div>
          ))}
        </div>

        {/* Calendar grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 1, background: T.color.mist, borderRadius: T.r.lg, overflow: 'hidden' }}>
          {meals.map((m, i) => (
            <div key={i} style={{
              background: m?.today ? T.color.turmericLight : m ? T.color.white : T.color.sand,
              padding: m ? '8px 6px' : 8,
              minHeight: 95,
              cursor: m ? 'pointer' : 'default',
              position: 'relative',
              borderLeft: m?.today ? `3px solid ${T.color.turmeric}` : 'none',
            }}>
              {m && (
                <>
                  <div style={{
                    fontSize: 13, fontWeight: m.today ? 800 : 600,
                    color: m.today ? T.color.turmeric : T.color.bark,
                    marginBottom: 6,
                  }}>{m.d}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    <MealPill type="breakfast" label={m.b} />
                    <MealPill type="lunch" label={m.l} />
                    <MealPill type="dinner" label={m.n} />
                    {m.s && <MealPill type="snacks" label={m.s} />}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CalendarMobile() {
  const weekDays = [
    { d: 5, day: 'Mon', b: 'Idli + Chutney', l: 'Sambar, Beans Poriyal', n: 'Dosa + Tomato Chutney' },
    { d: 6, day: 'Tue', b: 'Pongal + Chutney', l: 'Rasam, Cabbage Poriyal', n: 'Chapati + Dal' },
    { d: 7, day: 'Wed', b: 'Dosa + Chutney', l: 'Kootu, Carrot Poriyal', n: 'Rava Upma' },
    { d: 8, day: 'Thu', b: 'Upma + Chutney', l: 'Sambar, Beans Poriyal', n: 'Dosa + Chutney', today: true },
    { d: 9, day: 'Fri', b: 'Pongal', l: 'Vathal Kuzhambu', n: 'Chapati' },
    { d: 10, day: 'Sat', b: 'Idli', l: 'Chicken Biriyani', n: 'Dosa', s: 'Bonda', weekend: true },
    { d: 11, day: 'Sun', b: 'Dosa', l: 'Mutton Kuzhambu', n: 'Upma', s: 'Kesari', weekend: true },
  ];

  return (
    <div style={{ background: T.color.cream, height: '100%', fontFamily: T.font.heading, position: 'relative', paddingBottom: 60 }}>
      {/* Header */}
      <div style={{ padding: '16px 20px 12px', background: T.color.white, borderBottom: `1px solid ${T.color.mist}` }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: T.color.bark }}>May 2026</div>
          <div style={{ display: 'flex', gap: 8 }}>
            <Btn variant="ghost" size="sm">‹</Btn>
            <Btn variant="ghost" size="sm">›</Btn>
          </div>
        </div>
        {/* Mini month view */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2, marginTop: 12, textAlign: 'center' }}>
          {['M','T','W','T','F','S','S'].map((d,i) => (
            <div key={i} style={{ fontSize: 9, color: T.color.smoke, fontWeight: 700 }}>{d}</div>
          ))}
          {Array.from({length: 3}, (_,i) => <div key={`e${i}`}></div>)}
          {Array.from({length: 31}, (_,i) => (
            <div key={i} style={{
              fontSize: 11, fontWeight: i+1 === 8 ? 800 : 500,
              color: i+1 === 8 ? T.color.white : T.color.bark,
              background: i+1 === 8 ? T.color.turmeric : (i+1 >= 5 && i+1 <= 11) ? T.color.turmericLight : 'transparent',
              borderRadius: T.r.full, width: 24, height: 24,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto',
            }}>{i+1}</div>
          ))}
        </div>
      </div>

      {/* Week list view */}
      <div style={{ padding: '12px 16px', fontSize: 11, fontWeight: 700, color: T.color.smoke, textTransform: 'uppercase', letterSpacing: 1 }}>
        Week of May 5 – 11
      </div>
      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 8, overflowY: 'auto' }}>
        {weekDays.map(wd => (
          <div key={wd.d} style={{
            background: T.color.white, borderRadius: T.r.lg, padding: '12px 14px',
            border: wd.today ? `2px solid ${T.color.turmeric}` : `1px solid ${T.color.mist}`,
            cursor: 'pointer',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <div style={{
                fontSize: 18, fontWeight: 800,
                color: wd.today ? T.color.turmeric : T.color.bark,
              }}>{wd.d}</div>
              <div style={{ fontSize: 12, color: T.color.stone, fontWeight: 600 }}>{wd.day}</div>
              {wd.today && <span style={{ fontSize: 9, background: T.color.turmeric, color: T.color.white, padding: '2px 8px', borderRadius: T.r.full, fontWeight: 700 }}>TODAY</span>}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              <MealPill type="breakfast" label={wd.b} />
              <MealPill type="lunch" label={wd.l} />
              <MealPill type="dinner" label={wd.n} />
              {wd.s && <MealPill type="snacks" label={wd.s} />}
            </div>
          </div>
        ))}
      </div>

      <NavBar active="calendar" mobile />
    </div>
  );
}

// Day detail expanded — shows when you tap a day
function DayDetailMobile() {
  const slots = [
    { type: 'breakfast', label: 'Breakfast', items: [
      { name: 'Idli', tamil: 'இட்லி', time: 30, veg: true, img: '#F5E6D0' },
      { name: 'Coconut Chutney', tamil: 'தேங்காய் சட்னி', time: 10, veg: true, img: '#E8F0E0' },
    ]},
    { type: 'lunch', label: 'Lunch', items: [
      { name: 'Plain Rice', tamil: 'சாதம்', time: 20, veg: true, img: '#FFF8E8' },
      { name: 'Sambar', tamil: 'சாம்பார்', time: 45, veg: true, img: '#F0D8A8' },
      { name: 'Beans Poriyal', tamil: 'பீன்ஸ் பொரியல்', time: 20, veg: true, img: '#D8ECD0' },
      { name: 'Appalam', tamil: 'அப்பளம்', time: 5, veg: true, img: '#F5E8D0' },
    ]},
    { type: 'dinner', label: 'Dinner', items: [
      { name: 'Dosa', tamil: 'தோசை', time: 25, veg: true, img: '#F0E8D8' },
      { name: 'Tomato Chutney', tamil: 'தக்காளி சட்னி', time: 15, veg: true, img: '#F5D0C8' },
    ]},
  ];

  return (
    <div style={{ background: T.color.cream, height: '100%', fontFamily: T.font.heading, position: 'relative', paddingBottom: 60 }}>
      {/* Header */}
      <div style={{ padding: '16px 20px', background: T.color.white, borderBottom: `1px solid ${T.color.mist}`, display: 'flex', alignItems: 'center', gap: 12 }}>
        <Btn variant="ghost" size="sm">‹</Btn>
        <div>
          <div style={{ fontSize: 18, fontWeight: 800, color: T.color.bark }}>Thursday, May 8</div>
          <div style={{ fontSize: 11, color: T.color.turmeric, fontWeight: 600 }}>Today</div>
        </div>
      </div>

      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: 20, overflowY: 'auto' }}>
        {slots.map(slot => (
          <div key={slot.type}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: T.color[slot.type] }}></div>
              <div style={{ fontSize: 14, fontWeight: 700, color: T.color.bark }}>{slot.label}</div>
            </div>
            <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 4 }}>
              {slot.items.map(item => (
                <div key={item.name} style={{
                  minWidth: 130, background: T.color.white, borderRadius: T.r.lg,
                  boxShadow: T.shadow.sm, overflow: 'hidden', cursor: 'pointer',
                  border: `1px solid ${T.color.mist}`, flexShrink: 0,
                }}>
                  <div style={{ height: 80, background: item.img, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, color: 'rgba(0,0,0,.08)' }}>🍽️</div>
                  <div style={{ padding: '8px 10px' }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: T.color.bark }}>{item.name}</div>
                    <div style={{ fontSize: 10, color: T.color.stone, fontFamily: T.font.tamil }}>{item.tamil}</div>
                    <div style={{ fontSize: 9, color: T.color.smoke, marginTop: 4 }}>{item.time} min</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <NavBar active="calendar" mobile />
    </div>
  );
}

Object.assign(window, { CalendarDesktop, CalendarMobile, DayDetailMobile });
