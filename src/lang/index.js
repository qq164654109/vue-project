import Vue from 'vue';
import VueI18n from 'vue-i18n';

import enLocale from './en';
import cnLocale from './cn';

Vue.use(VueI18n);

const messages = {
  en: {
    ...enLocale
  },
  cn: {
    ...cnLocale
  }
};

const i18n = new VueI18n({
  locale: 'cn',
  messages
});

export default i18n
