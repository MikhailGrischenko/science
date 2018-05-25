<template lang="html">
  <div class="headers">
    <div class="cbutton-bar">
      <cButton
        v-for="(button, key2) in buttons"
        :key="key2"
        :cButton="button"
        :id="id"
      ></cButton>
    </div>
    <div
      v-if="message !== null"
      class="notification">
      <icon
        name="exclamation-circle"
        class="message-icon"
      ></icon>
      <span class="message">{{ message }}</span>
    </div>
  </div>
</template>

<script type="text/javascript">
import cButton from '@/components/base/cButton'
import Icon from 'vue-awesome/components/Icon'
export default {
  name: 'cButtonBar',
  components: {
    cButton,
    Icon
  },
  props: [
    'buttons',
    'id'
  ],
  computed: {
    message () {
      return this.$store.state.control.message
    }
  }
}
</script>

<style scoped>
  .cbutton-bar {
    display: flex;
  }
  .notification {
    font-size: 14px;
    text-align: left;
    padding: 4px 8px;
    background: rgba(255,0,0,.09);
  }
  .message-icon {
    width: 16px;
    height: 16px;
    padding-right: 8px;
    color: rgba(0,0,0,.54);
    vertical-align: sub;
  }
  @media only screen and (max-width: 701px) {
    .cbutton-bar {
      justify-content: space-around;
    }
  }
</style>
