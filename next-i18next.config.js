/** @type {import('next-i18next').UserConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en', 'ms', 'vi', 'id', 'th'],
    localeDetection: false,
  },
  localePath: './public/locales',
  fallbackLng: 'en',
};
