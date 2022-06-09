// Guess of the Yellow Lord Epoch (黃帝紀元猜想)

// The origination of the four cylinders is bothering the author now.
// So that he try to figure it out.
// The guess is that the four cylinders were established at the Winter Solstice
// by Jiatz Year, Jiatz Month, Jiatz Day and Jiatz Hour (甲子年甲子月甲子日甲子時)
// (The year is defined by establishing tz (建子)).

// The guess of the Winter Solstice is because it is based on the sundial (日晷),
// in terms of 10-based sky gan (天干) and 12-based earth dz (地支).
// Altogether the gandz (干支) calendar is established (立).
// How the gantz was established is unclear and this is a guess for when.
// The confidence is from that it is still well-known and used in the
// Chinese culture. It is mainly used in the fortune telling and
// date (+time) selection (擇日). (Note that Chinese did not have weeks before.)
// It has cicular periods. It still affects many Chinese in decisions.
// It has theories such as Yin, Yang and the Five Elements (陰陽五行).
// We don't know if it has meanings in physics such as the following periods in
// use.
// 6 * 60  // + 5 + 1/4(0.2422)
// 60 / 2 = 30
// 5 / 60 = 1/12
// It is possible to mimic the above periods by circular orbitings.
// Did the establishment of it have physical meaning?
// Relegion and superstion are eliminated here.
// Note that the using of it is more relaxed in Chinese nowadays, and
// it is mainly affected by the favoring of the week cycles.
// the guess is mainly for the intrest in history.

const SKY_GAN = '甲乙丙丁戊己庚辛壬癸'.split('')  // 天干
const EARTH_DZ = '子丑寅卯辰巳午未申酉戌亥'.split('')  // 地支
const SIXTY_JIATZ = []  // 六十甲子
for (let i = 0; i < 60; i++) {
  SIXTY_JIATZ[i] = SKY_GAN[i % 10] + EARTH_DZ[i % 12]
}

const YEAR_DUR = 365.2422
// const WS2022 = new Date(2022, 11, 22, 5, 48)  // GMT+8
const GDI_YEAR_WS2022 = SIXTY_JIATZ.indexOf('癸卯')  // by establishing tz (建子) in the guess
const GDI_MONTH_WS2022 = SIXTY_JIATZ.indexOf('壬子')
const GDI_DAY_WS2022 = SIXTY_JIATZ.indexOf('己酉')

console.log(SIXTY_JIATZ)
// console.log(WS2022)
// console.log(GDI_DAY_WS2022)

// Trace back for WS2022 - ya * YEAR_DUR
// Match them with jiatz year and jiatz day.
// Jiatz month is trivial in jiatz year.
// Jiatz hour is not matched for tolerence.
// gdiDay % 60 = 0, 1, 59 for more tolerence.
for (let ya = 0; ya < 10000; ya++) {
  const gdiYear = (GDI_YEAR_WS2022 - ya + 60000000) % 60
  if (gdiYear !== 0) continue
  const da = ya * YEAR_DUR
  const gdiDay = Math.floor(GDI_DAY_WS2022 + (5+48/60)/24 - da + 60000000) % 60
  if (gdiDay <= 1 || gdiDay === 59) {
    console.log(ya, 'years ago, day index', gdiDay, da - (5+48/60)/24, 'days ago.')
  }
}

/**
  Results
  1119 years ago, day index 59 408705.7801333334 days ago.
  1359 years ago, day index 1 496363.9081333334 days ago.
  3099 years ago, day index 59 1131885.3361333334 days ago.
  3339 years ago, day index 1 1219543.4641333334 days ago.
 *5079 years ago, day index 0 1855064.8921333335 days ago.
 *5319 years ago, day index 1 1942723.0201333335 days ago.
  7059 years ago, day index 0 2578244.4481333336 days ago.
  8799 years ago, day index 59 3213765.8761333334 days ago.
  9039 years ago, day index 0 3301424.0041333335 days ago.
  The result of the guess could be 5079 or 5319 years ago because
  the Chinese historians estimated it about this range.
 **/
