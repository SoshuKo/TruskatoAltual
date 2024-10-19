function convertText() {
    let inputText = document.getElementById("input-text").value;
    
    // ①長母音字変換
    inputText = inputText.replace(/aģh/g, 'ē').replace(/agh/g, 'ā')
                         .replace(/iģh/g, 'ē').replace(/ïgh/g, 'uĭ')
                         .replace(/ugh/g, 'ā').replace(/üģh/g, 'eŭ')
                         .replace(/eģh/g, 'ī').replace(/ëgh/g, 'oĭ')
                         .replace(/ogh/g, 'ū').replace(/öģh/g, 'iŭ');

    // ②短母音字変換
    inputText = inputText.replace(/a/g, (m) => (/[iüeoö]/.test(inputText) ? 'e' : 'a'))
                         .replace(/i/g, 'e')
                         .replace(/ï/g, 'a')
                         .replace(/u/g, 'o')
                         .replace(/ü/g, 'ö')
                         .replace(/e/g, 'i')
                         .replace(/ë/g, 'ï')
                         .replace(/o/g, 'u')
                         .replace(/ö/g, 'ü');

    // ③四重子音字変換
    inputText = inputText.replace(/schr/g, 'chŭ');

    // ④三重子音字変換
    inputText = inputText.replace(/spr/g, 'pŭ')
                         .replace(/str/g, 'tŭ')
                         .replace(/scl/g, 'cŭ')
                         .replace(/shr/g, 'yŭ')
                         .replace(/chr/g, 'jŭ')
                         .replace(/sch/g, 'ch')
                         .replace(/çhļ/g, 'khŭ')
                         .replace(/sçl/g, 'kŭ')
                         .replace(/skr/g, 'kŭ');

    // ⑤二重子音字変換
    inputText = inputText.replace(/fr/g, 'phŭ')
                         .replace(/pr/g, 'bŭ')
                         .replace(/br/g, 'vŭ')
                         .replace(/sp/g, 'p')
                         .replace(/sl/g, 'thŭ')
                         .replace(/tr/g, 'dŭ')
                         .replace(/dr/g, 'zŭ')
                         .replace(/zl/g, 'cŭ')
                         .replace(/cl/g, 'sŭ')
                         .replace(/st/g, 't')
                         .replace(/sh/g, 'y')
                         .replace(/ch/g, 'j')
                         .replace(/çh/g, 'kh')
                         .replace(/çļ/g, 'gŭ')
                         .replace(/ģļ/g, 'ghŭ')
                         .replace(/sç/g, 'k')
                         .replace(/xr/g, 'khŭ')
                         .replace(/kr/g, 'gŭ')
                         .replace(/gr/g, 'ghŭ')
                         .replace(/sk/g, 'k');

    // ⑥一重子音字変換
    inputText = inputText.replace(/f/g, 'ph')
                         .replace(/p/g, 'b')
                         .replace(/b/g, 'v')
                         .replace(/v/g, 'f')
                         .replace(/s/g, 'th')
                         .replace(/t/g, 'd')
                         .replace(/d/g, 'z')
                         .replace(/z/g, 'c')
                         .replace(/c/g, 's')
                         .replace(/r/g, 'w')
                         .replace(/l/g, "'")
                         .replace(/j/g, 'sh')
                         .replace(/ņ/g, 'n')
                         .replace(/ç/g, 'g')
                         .replace(/ģ/g, 'gh')
                         .replace(/y/g, 'x')
                         .replace(/ļ/g, "'")
                         .replace(/x/g, 'kh')
                         .replace(/k/g, 'g')
                         .replace(/g/g, 'gh')
                         .replace(/'/g, 'r');

    // 子音字が連続する場合、前の子音字を削除
    inputText = inputText.replace(/([bcdfghjklmnprstvwxyz'])\1/g, '$1');

    // 特定の連続文字を置き換え
    inputText = inputText.replace(/ŭu/g, 'u')
                         .replace(/ŭū/g, 'ū')
                         .replace(/ŭü/g, 'ü')
                         .replace(/ŭiŭ/g, 'iŭ')
                         .replace(/ŭeŭ/g, 'eŭ')
                         .replace(/ŭuĭ/g, 'uĭ');

    // 語尾の変換
    inputText = inputText.replace(/ch\b/g, 'n')
                         .replace(/kh\b/g, 'ng')
                         .replace(/ph\b/g, 'm')
                         .replace(/sh\b/g, 'l')
                         .replace(/th\b/g, 'n')
                         .replace(/y\b/g, '')
                         .replace(/j\b/g, 'n')
                         .replace(/b\b/g, 'm')
                         .replace(/v\b/g, 'm')
                         .replace(/f\b/g, 'm')
                         .replace(/d\b/g, 'n')
                         .replace(/z\b/g, 'l')
                         .replace(/c\b/g, 'n')
                         .replace(/s\b/g, 'l')
                         .replace(/w\b/g, '')
                         .replace(/'\b/g, '')
                         .replace(/g\b/g, 'ng')
                         .replace(/x\b/g, 'ng')
                         .replace(/r\b/g, 'l');

    document.getElementById("output-text").innerText = inputText;
}
