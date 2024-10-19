// 変換ルールの定義
const replacements = [
  // ①長母音字の変換
  { pattern: /aģh/g, replacement: "ē" },
  { pattern: /agh/g, replacement: "ā" },
  { pattern: /iģh/g, replacement: "ē" },
  { pattern: /ïgh/g, replacement: "uĭ" },
  { pattern: /ugh/g, replacement: "ā" },
  { pattern: /üģh/g, replacement: "eŭ" },
  { pattern: /eģh/g, replacement: "ī" },
  { pattern: /ëgh/g, replacement: "oĭ" },
  { pattern: /ogh/g, replacement: "ū" },
  { pattern: /öģh/g, replacement: "iŭ" },

  // ②短母音字の変換
  { pattern: /a(?=[iüeö])/g, replacement: "e" },
  { pattern: /a/g, replacement: "a" },
  { pattern: /i/g, replacement: "e" },
  { pattern: /ï/g, replacement: "a" },
  { pattern: /u/g, replacement: "o" },
  { pattern: /ü/g, replacement: "ö" },
  { pattern: /e/g, replacement: "i" },
  { pattern: /ë/g, replacement: "ï" },
  { pattern: /o/g, replacement: "u" },
  { pattern: /ö/g, replacement: "ü" },

  // ③四重子音字の変換
  { pattern: /schr/g, replacement: "chŭ" },

  // ④三重子音字の変換
  { pattern: /spr/g, replacement: "pŭ" },
  { pattern: /str/g, replacement: "tŭ" },
  { pattern: /scl/g, replacement: "cŭ" },
  { pattern: /shr/g, replacement: "yŭ" },
  { pattern: /chr/g, replacement: "jŭ" },
  { pattern: /sch/g, replacement: "ch" },
  { pattern: /çhļ/g, replacement: "khŭ" },
  { pattern: /sçl/g, replacement: "kŭ" },
  { pattern: /skr/g, replacement: "kŭ" },

  // ⑤二重子音字の変換
  { pattern: /fr/g, replacement: "phŭ" },
  { pattern: /pr/g, replacement: "bŭ" },
  { pattern: /br/g, replacement: "vŭ" },
  { pattern: /sp/g, replacement: "p" },
  { pattern: /sl/g, replacement: "thŭ" },
  { pattern: /tr/g, replacement: "dŭ" },
  { pattern: /dr/g, replacement: "zŭ" },
  { pattern: /zl/g, replacement: "cŭ" },
  { pattern: /cl/g, replacement: "sŭ" },
  { pattern: /st/g, replacement: "t" },
  { pattern: /sh/g, replacement: "y" },
  { pattern: /ch/g, replacement: "j" },
  { pattern: /çh/g, replacement: "kh" },
  { pattern: /çļ/g, replacement: "gŭ" },
  { pattern: /ģļ/g, replacement: "ghŭ" },
  { pattern: /sç/g, replacement: "k" },
  { pattern: /xr/g, replacement: "khŭ" },
  { pattern: /kr/g, replacement: "gŭ" },
  { pattern: /gr/g, replacement: "ghŭ" },
  { pattern: /sk/g, replacement: "k" },

  // ⑥一重子音字の変換
  { pattern: /f/g, replacement: "ph" },
  { pattern: /p/g, replacement: "b" },
  { pattern: /b/g, replacement: "v" },
  { pattern: /v/g, replacement: "f" },
  { pattern: /s/g, replacement: "th" },
  { pattern: /t/g, replacement: "d" },
  { pattern: /d/g, replacement: "z" },
  { pattern: /z/g, replacement: "c" },
  { pattern: /c/g, replacement: "s" },
  { pattern: /r/g, replacement: "w" },
  { pattern: /l/g, replacement: "'" },
  { pattern: /j/g, replacement: "sh" },
  { pattern: /ņ/g, replacement: "n" },
  { pattern: /ç/g, replacement: "g" },
  { pattern: /ģ/g, replacement: "gh" },
  { pattern: /y/g, replacement: "x" },
  { pattern: /ļ/g, replacement: "'" },
  { pattern: /x/g, replacement: "kh" },
  { pattern: /k/g, replacement: "g" },
  { pattern: /g/g, replacement: "gh" },
  { pattern: /'/g, replacement: "r" }
];

// 追加の置換ルール
const additionalReplacements = [
  // 子音字の連続処理
  { pattern: /([a-z])\1/g, replacement: "$1" },

  // 連続する文字の変換
  { pattern: /ŭu/g, replacement: "u" },
  { pattern: /ŭū/g, replacement: "ū" },
  { pattern: /ŭü/g, replacement: "ü" },
  { pattern: /ŭiŭ/g, replacement: "iŭ" },
  { pattern: /ŭeŭ/g, replacement: "eŭ" },
  { pattern: /ŭuĭ/g, replacement: "uĭ" },

  // 語尾の変換
  { pattern: /ch$/, replacement: "n" },
  { pattern: /kh$/, replacement: "ng" },
  { pattern: /ph$/, replacement: "m" },
  { pattern: /sh$/, replacement: "l" },
  { pattern: /th$/, replacement: "n" },
  { pattern: /y$/, replacement: "" },
  { pattern: /j$/, replacement: "n" },
  { pattern: /b$/, replacement: "m" },
  { pattern: /v$/, replacement: "m" },
  { pattern: /f$/, replacement: "m" },
  { pattern: /d$/, replacement: "n" },
  { pattern: /z$/, replacement: "l" },
  { pattern: /c$/, replacement: "n" },
  { pattern: /s$/, replacement: "l" },
  { pattern: /w$/, replacement: "" },
  { pattern: /'$/, replacement: "" },
  { pattern: /g$/, replacement: "ng" },
  { pattern: /x$/, replacement: "ng" },
  { pattern: /r$/, replacement: "l" }
];

// 変換処理
function convert() {
  let text = document.getElementById('inputText').value;

  // 置換処理を順番に適用
  replacements.forEach(rule => {
    text = text.replace(rule.pattern, rule.replacement);
  });

  additionalReplacements.forEach(rule => {
    text = text.replace(rule.pattern, rule.replacement);
  });

  document.getElementById('output').innerText = text;
}
