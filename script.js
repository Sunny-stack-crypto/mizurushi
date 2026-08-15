function googleTranslateElementInit() {
  // 1つだけウィジェットを初期化
  new google.translate.TranslateElement({
    pageLanguage: 'ja',
    includedLanguages: 'en,zh-CN,ko,vi,es',
    autoDisplay: false
  }, 'google_translate_element');

  // 言語表示ラベルの書き換え（現地語化）
  const intervalId = setInterval(() => {
    const selectElements = document.querySelectorAll('.goog-te-combo');
    if (selectElements.length > 0) {
      selectElements.forEach(select => {
        const languageLabels = {
          '': 'Select Language',
          'en': 'English',
          'es': 'Español',
          'vi': 'Tiếng Việt',
          'ko': '한국어',
          'zh-CN': '中文 (简体)'
        };

        Array.from(select.options).forEach(option => {
          if (languageLabels[option.value] !== undefined) {
            option.textContent = languageLabels[option.value];
          }
        });
      });
      clearInterval(intervalId);
    }
  }, 300);

  // 画面幅に応じて翻訳要素の配置場所を自動移動する処理
  relocateTranslateElement();
  window.addEventListener('resize', relocateTranslateElement);
}

function relocateTranslateElement() {
  const translateEl = document.getElementById('google_translate_element');
  const desktopWrapper = document.getElementById('translate-wrapper-desktop');
  const mobileWrapper = document.getElementById('translate-wrapper-mobile');

  if (!translateEl || !desktopWrapper || !mobileWrapper) return;

  // mdブレイクポイント(768px)を境に移動先を切り替え
  if (window.innerWidth < 768) {
    if (!mobileWrapper.contains(translateEl)) {
      mobileWrapper.appendChild(translateEl);
    }
  } else {
    if (!desktopWrapper.contains(translateEl)) {
      desktopWrapper.appendChild(translateEl);
    }
  }
}