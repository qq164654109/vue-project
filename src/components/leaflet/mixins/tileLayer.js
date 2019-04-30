import gridLayer from './gridLayer';

export default {
  mixins: [gridLayer],
  props: {
    tms: {
      type: Boolean,
      default: false
    },
    detectRetina: {
      type: Boolean,
      default: false
    }
  }
};