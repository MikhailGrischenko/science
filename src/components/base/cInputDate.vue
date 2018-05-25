<template lang="html">
  <div class="cinputdate">
    <label
      class="cinputdate__label"
      :for="id"
      >{{ label }}</label>
    <input
      type="date"
      class="cinputdate__input"
      :value="value"
      :id="id"
      v-on:input="$emit('input', $event.target.value)">
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'cInputDate',
  props: [
    'value',
    'id',
    'label'
  ]
}
</script>

<style scoped>
  .cinputdate {
    border-left: 1px solid rgba(0,0,0,.54);
    border-bottom: 1px solid rgba(0,0,0,.54);
    color: rgba(0,0,0,.87);
    border-radius: 0 0 0 4px;
    margin: 33px 0 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
  }
  .cinputdate:hover {
    border-left: 1px solid rgba(66,185,131,1);
    border-bottom: 1px solid rgba(66,185,131,1);
  }
  .cinputdate:hover > .cinputdate__label {
    color: rgba(66,185,131,1);
  }
  .cinputdate__label {
    font-size: 16px;
    padding: 0 16px 6px;
    color: rgba(0,0,0,.54)
  }
  .cinputdate__input {
    font-family: 'Roboto';
    border: none;
    font-size: 14px;
  }
</style>
