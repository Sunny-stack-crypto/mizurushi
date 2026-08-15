//This was created using gemini ai
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'ja',
    includedLanguages: 'en,zh-CN,ko,vi,es',
    autoDisplay: false
  }, 'google_translate_element');

  new google.translate.TranslateElement({
    pageLanguage: 'ja',
    includedLanguages: 'en,zh-CN,ko,vi,es',
    autoDisplay: false
  }, 'google_translate_element_mobile');

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
}