<template lang="html">
  <div class="cinput">
    <label
      class="cinput__label"
      :for="id"
      >{{ label }}</label>
    <input
      type="input"
      class="cinput__input"
      :value="value"
      :id="id"
      :placeholder="placeholder"
      v-on:input="$emit('input', $event.target.value)">
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'cInput',
  props: [
    'value',
    'id',
    'label',
    'placeholder'
  ]
}
</script>

<style scoped>
  .cinput {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 12px 0;
  }
  .cinput:hover > .cinput__input {
    border-left: 1px solid rgba(66,185,131,1);
    border-bottom: 1px solid rgba(66,185,131,1);
  }
  .cinput:hover > .cinput__label {
    color: rgba(66,185,131,1);
  }
  .cinput:focus > .cinput__label {
    color: rgba(66,185,131,1);
  }
  .cinput__label {
    font-size: 12px;
    font-weight: 400;
    color: rgba(0,0,0,.54);
    padding: 2px 0 8px;
    text-align: left;
  }
  .cinput__input {
    font-size: 16px;
    font-family: 'Roboto';
    padding: 0 16px 6px;
    border: none;
    border-left: 1px solid rgba(0,0,0,.54);
    border-bottom: 1px solid rgba(0,0,0,.54);
    width: 100%;
    box-sizing: border-box;
    color: rgba(0,0,0,.87);
    border-radius: 0 0 0 4px;
  }
  .cinput__input:focus {
    outline: none;
  }
</style>
