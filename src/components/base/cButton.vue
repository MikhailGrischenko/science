<template lang="html">
  <button
    v-on:click="clickButtom(cButton.value)"
    class="cbutton">
    <icon
      :name="cButton.icon"
      class="cbutton-icon">
    </icon>
    <span class="cbutton-title">{{ cButton.title }}</span>
  </button>
</template>

<script type="text/javascript">
import Icon from 'vue-awesome/components/Icon'
export default {
  name: 'cButton',
  components: {
    Icon
  },
  props: [
    'cButton',
    'id'
  ],
  methods: {
    clickButtom: function (value) {
      this.$store.commit('clickButton', value)
    }
  }
}
</script>

<style scoped>
  .cbutton {
    padding: 8px 16px;
    margin: 8px;
    background: #fff;
    border: 2px solid rgba(66,185,131,1);
    border-radius: 4px;
    font-size: 14px;
    text-transform: uppercase;
    font-family: 'Roboto'
  }
  .cbutton:hover {
    background: rgba(66,185,131,.12)
  }
  .cbutton-icon {
    color: rgba(0,0,0,.54);
    display: none;
  }
  @media only screen and (max-width: 701px) {
    .cbutton-icon {
      display: block;
      width: 36px;
      height: 36px;
    }
    .cbutton {
      padding: 12px;
      margin: 8px 0;
    }
    .cbutton-title {
      display: none;
    }
  }
</style>
