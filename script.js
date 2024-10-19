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
  { pattern: /a(?=[iüeö])/g, replacement: "E" },
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
  { pattern: /U/g, replacement: "u" },
  { pattern: /Ū/g, replacement: "ū" },
  { pattern: /7/g, replacement: "'" }
];

// 変換処理を実行する関数
function transformText(input) {
  let output = input;

  // 変換ルールを適用
  replacements.forEach(({ pattern, replacement }) => {
    output = output.replace(pattern, replacement);
  });

  // 追加の置換ルールを適用
  additionalReplacements.forEach(({ pattern, replacement }) => {
    output = output.replace(pattern, replacement);
  });

  // 小文字に変換
  toLowerCaseReplacements.forEach(({ pattern, replacement }) => {
    output = output.replace(pattern, replacement);
  });

  return output;
}

// 複数の単語を変換する関数
function transformMultipleWords(inputText) {
  const words = inputText.split(/\s+/); // スペースで単語を分割
  const transformedWords = words.map(word => transformText(word)); // 各単語を変換
  return transformedWords.join(' '); // 変換された単語をスペースで結合
}

// イベントリスナーを追加する関数
function addEventListeners() {
  const inputField = document.getElementById("inputText");
  const outputField = document.getElementById("outputText");
  const button = document.getElementById("convertButton");

  button.addEventListener("click", () => {
    const inputValue = inputField.value; // 入力値を取得
    const transformedValue = transformMultipleWords(inputValue); // 変換
    outputField.value = transformedValue; // 出力フィールドに結果を表示
    console.log("変換結果:", transformedValue); // コンソールに結果を出力
  });
}

// ページが読み込まれたらイベントリスナーを追加
window.onload = addEventListeners;
