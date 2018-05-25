<template lang="html">
  <div class="cselect">
    <span
      class="cselect__label"
      >{{ label }}</span>
    <select class="cselect__select">
      <option
        value=""
        class="cselect__option"
        >{{ optionsDisabled }}</option>
      <option
        class="cselect__option"
        v-for="(option, key) in options"
        :key="key"
        :value="option.value"
      >{{ option.optionTitle }}</option>
    </select>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'cSelect',
  props: [
    'value',
    'optionsDisabled',
    'options',
    'label'
  ]
}
</script>

<style scoped>
  .cselect {
    border-left: 1px solid rgba(0,0,0,.54);
    border-bottom: 1px solid rgba(0,0,0,.54);
    color: rgba(0,0,0,.87);
    border-radius: 0 0 0 4px;
    margin: 33px 0 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
  .cselect:hover {
    border-left: 1px solid rgba(66,185,131,1);
    border-bottom: 1px solid rgba(66,185,131,1);
  }
  .cselect:hover > .cselect__label {
    color: rgba(66,185,131,1);
  }
  .cselect__label {
    font-size: 16px;
    padding: 0 16px 6px;
    color: rgba(0,0,0,.54)
  }
  .cselect__select {
    font-size: 16px;
    border: none;
    font-family: 'Roboto';
  }
  .cselect__option {
  }
</style>
