import Vue from 'vue';

export const baseApiUrl = 'http://localhost:3000';

export const showError = e => {
  if (e?.response?.data) {
    Vue.toasted.global.defaultError({ msg: e.response.data });
  } else if (typeof e === 'string') {
    Vue.toasted.global.defaultError({ msg: e });
  } else {
    Vue.toasted.global.defaultError();
  }
};
