// 変換ルールの定義（大文字に変換）
const replacements = [
  // ①長母音字の変換（大文字に変換）
  { pattern: /aģh/g, replacement: "Ē" },
  { pattern: /agh/g, replacement: "Ā" },
  { pattern: /iģh/g, replacement: "Ē" },
  { pattern: /ïgh/g, replacement: "UĬ" },
  { pattern: /ugh/g, replacement: "Ā" },
  { pattern: /üģh/g, replacement: "EŬ" },
  { pattern: /eģh/g, replacement: "Ī" },
  { pattern: /ëgh/g, replacement: "OĬ" },
  { pattern: /ogh/g, replacement: "Ū" },
  { pattern: /öģh/g, replacement: "IŬ" },

  // ②短母音字の変換（大文字に変換）
  { pattern: /a(?=[iüeoö])/g, replacement: "E" },
  { pattern: /a/g, replacement: "A" },
  { pattern: /i/g, replacement: "E" },
  { pattern: /ï/g, replacement: "A" },
  { pattern: /u/g, replacement: "O" },
  { pattern: /ü/g, replacement: "Ö" },
  { pattern: /e/g, replacement: "I" },
  { pattern: /ë/g, replacement: "Ï" },
  { pattern: /o/g, replacement: "U" },
  { pattern: /ö/g, replacement: "Ü" },

  // ③四重子音字の変換（大文字に変換）
  { pattern: /schr/g, replacement: "CHŬ" },

  // ④三重子音字の変換（大文字に変換）
  { pattern: /spr/g, replacement: "PŬ" },
  { pattern: /str/g, replacement: "TŬ" },
  { pattern: /scl/g, replacement: "CŬ" },
  { pattern: /shr/g, replacement: "YŬ" },
  { pattern: /chr/g, replacement: "JŬ" },
  { pattern: /sch/g, replacement: "CH" },
  { pattern: /çhļ/g, replacement: "KHŬ" },
  { pattern: /sçl/g, replacement: "KŬ" },
  { pattern: /skr/g, replacement: "KŬ" },

  // ⑤二重子音字の変換（大文字に変換）
  { pattern: /fr/g, replacement: "PHŬ" },
  { pattern: /pr/g, replacement: "BŬ" },
  { pattern: /br/g, replacement: "VŬ" },
  { pattern: /sp/g, replacement: "P" },
  { pattern: /sl/g, replacement: "THŬ" },
  { pattern: /tr/g, replacement: "DŬ" },
  { pattern: /dr/g, replacement: "ZŬ" },
  { pattern: /zl/g, replacement: "CŬ" },
  { pattern: /cl/g, replacement: "SŬ" },
  { pattern: /st/g, replacement: "T" },
  { pattern: /sh/g, replacement: "Y" },
  { pattern: /ch/g, replacement: "J" },
  { pattern: /çh/g, replacement: "KH" },
  { pattern: /çļ/g, replacement: "GŬ" },
  { pattern: /ģļ/g, replacement: "GHŬ" },
  { pattern: /sç/g, replacement: "K" },
  { pattern: /xr/g, replacement: "KHŬ" },
  { pattern: /kr/g, replacement: "GŬ" },
  { pattern: /gr/g, replacement: "GHŬ" },
  { pattern: /sk/g, replacement: "K" },

  // ⑥一重子音字の変換（大文字に変換）
  { pattern: /f/g, replacement: "PH" },
  { pattern: /p/g, replacement: "B" },
  { pattern: /b/g, replacement: "V" },
  { pattern: /v/g, replacement: "F" },
  { pattern: /s/g, replacement: "TH" },
  { pattern: /t/g, replacement: "D" },
  { pattern: /d/g, replacement: "Z" },
  { pattern: /z/g, replacement: "C" },
  { pattern: /c/g, replacement: "S" },
  { pattern: /r/g, replacement: "W" },
  { pattern: /l/g, replacement: "7" },
  { pattern: /j/g, replacement: "SH" },
  { pattern: /ņ/g, replacement: "N" },
  { pattern: /ç/g, replacement: "G" },
  { pattern: /ģ/g, replacement: "GH" },
  { pattern: /y/g, replacement: "X" },
  { pattern: /ļ/g, replacement: "7" },
  { pattern: /x/g, replacement: "KH" },
  { pattern: /k/g, replacement: "G" },
  { pattern: /g/g, replacement: "GH" },
  { pattern: /'/g, replacement: "R" }
];

// 追加の置換ルール
const additionalReplacements = [
    
  // 連続する文字の変換
  { pattern: /ŬU/g, replacement: "ŬA" },
  { pattern: /ŬŪ/g, replacement: "ŬĀ" },
  { pattern: /ŬÜ/g, replacement: "ŬE" },
  { pattern: /ŬIŬ/g, replacement: "ŬĒ" },
  { pattern: /ŬUĬ/g, replacement: "ŬAĬ" },

  // 語尾の変換（大文字で）
  { pattern: /CH$/, replacement: "N" },
  { pattern: /KH$/, replacement: "NG" },
  { pattern: /PH$/, replacement: "M" },
  { pattern: /SH$/, replacement: "L" },
  { pattern: /TH$/, replacement: "N" },
  { pattern: /Y$/, replacement: "" },
  { pattern: /J$/, replacement: "N" },
  { pattern: /B$/, replacement: "M" },
  { pattern: /V$/, replacement: "M" },
  { pattern: /F$/, replacement: "M" },
  { pattern: /D$/, replacement: "N" },
  { pattern: /Z$/, replacement: "L" },
  { pattern: /C$/, replacement: "N" },
  { pattern: /S$/, replacement: "L" },
  { pattern: /W$/, replacement: "" },
  { pattern: /7$/g, replacement: "" },
  { pattern: /G$/, replacement: "NG" },
  { pattern: /X$/, replacement: "NG" },
  { pattern: /R$/, replacement: "L" }
];

// 大文字を小文字に変換し、7を'に変換
const toLowerCaseReplacements = [
  { pattern: /Ā/g, replacement: "ā" },
  { pattern: /Ē/g, replacement: "ē" },
  { pattern: /UĬ/g, replacement: "uĭ" },
  { pattern: /Ā/g, replacement: "ā" },
  { pattern: /EŬ/g, replacement: "eŭ" },
  { pattern: /Ī/g, replacement: "ī" },
  { pattern: /OĬ/g, replacement: "oĭ" },
  { pattern: /Ū/g, replacement: "ū" },
  { pattern: /IŬ/g, replacement: "iŭ" },
  { pattern: /AĬ/g, replacement: "aĭ" },
  { pattern: /E/g, replacement: "e" },
  { pattern: /A/g, replacement: "a" },
  { pattern: /E/g, replacement: "e" },
  { pattern: /A/g, replacement: "a" },
  { pattern: /O/g, replacement: "o" },
  { pattern: /Ö/g, replacement: "ö" },
  { pattern: /I/g, replacement: "i" },
  { pattern: /Ï/g, replacement: "ï" },
  { pattern: /U/g, replacement: "u" },
  { pattern: /Ü/g, replacement: "ü" },
  { pattern: /CHŬ/g, replacement: "chŭ" },
  { pattern: /PŬ/g, replacement: "pŭ" },
  { pattern: /TŬ/g, replacement: "tŭ" },
  { pattern: /CŬ/g, replacement: "cŭ" },
  { pattern: /YŬ/g, replacement: "yŭ" },
  { pattern: /JŬ/g, replacement: "jŭ" },
  { pattern: /CH/g, replacement: "ch" },
  { pattern: /KHŬ/g, replacement: "khŭ" },
  { pattern: /KŬ/g, replacement: "kŭ" },
  { pattern: /PHŬ/g, replacement: "phŭ" },
  { pattern: /BŬ/g, replacement: "bŭ" },
  { pattern: /VŬ/g, replacement: "vŭ" },
  { pattern: /P/g, replacement: "p" },
  { pattern: /THŬ/g, replacement: "thŭ" },
  { pattern: /DŬ/g, replacement: "dŭ" },
  { pattern: /ZŬ/g, replacement: "zŭ" },
  { pattern: /CŬ/g, replacement: "cŭ" },
  { pattern: /SŬ/g, replacement: "sŭ" },
  { pattern: /T/g, replacement: "t" },
  { pattern: /Y/g, replacement: "y" },
  { pattern: /J/g, replacement: "j" },
  { pattern: /KH/g, replacement: "kh" },
  { pattern: /GŬ/g, replacement: "gŭ" },
  { pattern: /GHŬ/g, replacement: "ghŭ" },
  { pattern: /K/g, replacement: "k" },
  { pattern: /PH/g, replacement: "ph" },
  { pattern: /B/g, replacement: "b" },
  { pattern: /V/g, replacement: "v" },
  { pattern: /F/g, replacement: "f" },
  { pattern: /TH/g, replacement: "th" },
  { pattern: /D/g, replacement: "d" },
  { pattern: /Z/g, replacement: "z" },
  { pattern: /C/g, replacement: "c" },
  { pattern: /S/g, replacement: "s" },
  { pattern: /W/g, replacement: "w" },
  { pattern: /7/g, replacement: "'" }, // 7を'に変換
  { pattern: /SH/g, replacement: "sh" },
  { pattern: /N/g, replacement: "n" },
  { pattern: /G/g, replacement: "g" },
  { pattern: /GH/g, replacement: "gh" },
  { pattern: /X/g, replacement: "x" },
  { pattern: /KH/g, replacement: "kh" },
  { pattern: /G/g, replacement: "g" },
  { pattern: /GH/g, replacement: "gh" },
  { pattern: /R/g, replacement: "r" }
];


// 全体の変換処理
function transformText(input) {
  let transformed = input;

  // replacements の置換（大文字化）
  replacements.forEach(rule => {
    transformed = transformed.replace(rule.pattern, rule.replacement);
  });

  // 大文字から小文字に戻す処理
  toLowerCaseReplacements.forEach(rule => {
    transformed = transformed.replace(rule.pattern, rule.replacement);
  });

  // additionalReplacements の適用
  additionalReplacements.forEach(rule => {
    transformed = transformed.replace(rule.pattern, rule.replacement);
  });

  return transformed;
}

// 複数単語の変換処理
function transformMultipleWords(input) {
  const words = input.split(/\s+/);
  const transformedWords = words.map(word => transformText(word));
  return transformedWords.join('\n');
}

// 使用例
const inputText = "トルスカ語のテキストを入力してください";
const outputText = transformMultipleWords(inputText);
console.log(outputText);
