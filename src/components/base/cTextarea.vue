<template lang="html">
  <div class="ctextarea">
    <label
      class="ctextarea__label"
      :for="id"
      >{{ label }}</label>
    <textarea
      type="input"
      class="ctextarea__input"
      :value="value"
      :id="id"
      :placeholder="placeholder"
      v-on:input="$emit('input', $event.target.value)"
      ></textarea>
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
  .ctextarea {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    margin: 12px 0;
    grid-area: form-textarea;
    grid-column: 1 / end;
    grid-row: end;
  }
  .ctextarea:hover > .ctextarea__input {
    border: 1px solid rgba(66,185,131,1);
  }
  .ctextarea:hover > .ctextarea__label {
    color: rgba(66,185,131,1);
  }
  .ctextarea:focus > .ctextarea__label {
    color: rgba(66,185,131,1);
  }
  .ctextarea__label {
    text-align: left;
    color: rgba(0,0,0,.54);
  }
  .ctextarea__input {
    height: 100%;
    border: 1px solid rgba(0,0,0,.54);
    min-height: 150px;
    padding: 16px;
    line-height: 1rem;
    font-size: 16px;
    font-family: 'Roboto';
  }
  .ctextarea__input:focus {
    border: 1px solid rgba(66,185,131,1);
    outline: none;
  }
  @media only screen and (max-width: 700px) {
    .ctextarea {
      grid-column: 1 / 2;
    }
  }
  @media only screen and (max-width: 1060px) and (min-width: 701px) {
    .ctextarea {
      grid-column: 1 / 3;
      grid-row: end;
    }
  }
  @media screen and (min-width: 1061px) {
  }

</style>
