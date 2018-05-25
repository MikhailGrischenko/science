<template lang="html">
  <div class="ctable-header">
    <div class="ctable-header__row">
      <div
        v-for="(column, key) in tableHeaders"
        v-bind:key="key"
        v-bind:value="column.sortIndication"
        v-on:click="$emit('sort-column', column.id)"
        class="ctable-header__cell"
        v-bind:class="column.className"
      >
        <span class="ctable-header__cell-sort-icon">
          <icon
            name="angle-down"
            class="ctable-header__cell-icon__down ctable-header__cell-icon"
            v-if="tableHeaders[key].sortIndication === 1"
          ></icon>
          <icon
            name="angle-up"
            class="ctable-header__cell-icon__up ctable-header__cell-icon"
            v-if="tableHeaders[key].sortIndication === -1"
          ></icon>
        </span>
        <span class="ctable-header__cell-title">{{ column.columnTitle }}</span>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import Icon from 'vue-awesome/components/Icon'
export default {
  name: 'cTableHeader',
  components: {
    Icon
  },
  props: [
    'tableHeaders'
  ]
}
</script>

<style scoped>
  .ctable-header {
    display: table-header-group;
    font-size: 14px;
    background: rgba(66,185,131,.12);
    color: rgba(0,0,0,.54);
  }
  .ctable-header__row {
    display: table-row;
  }
  .ctable-header__cell {
    display: table-cell;
    padding: 8px;
  }
  .ctable-header__cell-sort-icon {
    position: relative;
  }
  .ctable-header__cell-icon {
    width: 16px;
    height: 12px;
    position: absolute;
    left: -16px;
  }
  .ctable-header__cell-icon__up-down {
  }
  @media only screen and (max-width: 701px) {
    .ctable-header {
      display: none;
    }
  }
  @media only screen and (max-width: 1060px) and (min-width: 702px) {
  }
  @media screen and (min-width: 1061px) {
      margin: 50px auto;
  }
</style>
