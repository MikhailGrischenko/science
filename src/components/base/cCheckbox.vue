<template lang="html">
  <div class="ccheckbox">
    <input
      type="checkbox"
      class="ccheckbox__input"
      :checked="checked"
      :id="id"
      v-on:change="$emit('change', $event.target.checked)">
    <label
      class="ccheckbox__label"
      :for="id"
      :class="{ checkbox__activ: checked }"
    >{{ label }}</label>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'cCheckbox',
  props: [
    'checked',
    'id',
    'label'
  ],
  model: {
    prop: 'checked',
    event: 'change'
  }
}
</script>

<style scoped>
  .ccheckbox {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    margin: 33px 0 12px;
    border-left: 1px solid rgba(0,0,0,.54);
    border-bottom: 1px solid rgba(0,0,0,.54);
    border-radius: 0 0 0 4px;
  }
  .ccheckbox:hover {
    border-left: 1px solid rgba(66,185,131,1);
    border-bottom: 1px solid rgba(66,185,131,1);
  }
  .ccheckbox:hover > .ccheckbox__label {
    color: rgba(66,185,131,1);
  }
  .ccheckbox:focus > .ccheckbox__label {
    color: rgba(66,185,131,1);
  }
  .ccheckbox__label {
    font-size: 16px;
    font-weight: 400;
    color: rgba(0,0,0,.54);
    padding: 0 16px 6px;
  }
  .ccheckbox__input {
    box-sizing: border-box;
    height: 20px;
    width: 20px;
    margin: 0 0 6px 14px;
  }
  .ccheckbox__input:focus {
    outline: none;
  }
  .checkbox__activ {
    color: rgba(0,0,0,.87)
  }
</style>
