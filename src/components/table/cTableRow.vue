<template lang="html">
  <div
    class="ctable-row"
    :class="{ ctablerow__choice: rowChoice }"
    v-on:click="$emit('row-choice', tableRow.id)">
    <div
      class="ctable-cell"
      v-for="(value, key) in getRow()"
      :key="key">
        <icon
          name="user"
          class="ctable-cell__avatar"
          v-if="value === 'noavatar'"
        ></icon>
        <icon
          name="check-circle"
          class="ctable-cell__true-false"
          v-if="value === true"
        ></icon>
        <icon
          name="minus-circle"
          class="ctable-cell__true-false"
          v-if="value === false"
        ></icon>
      <span v-if="noVisibleValue(value)">{{ value }}</span>
    </div>
  </div>
</template>

<script type="text/javascript">
import Icon from 'vue-awesome/components/Icon'
export default {
  name: 'cTableRow',
  components: {
    Icon
  },
  props: [
    'tableRow',
    'tableHeaders'
  ],
  computed: {
    rowChoice: function () {
      let choice = null
      if (this.tableRow.id === this.$store.state.control.userId) {
        choice = true
      } else {
        choice = false
      }
      return choice
    }
  },
  methods: {
    getRow () {
      let row = []
      for (let key in this.tableHeaders) {
        for (let property in this.tableRow) {
          if (this.tableHeaders[key].id === property) {
            if (this.tableHeaders[key].dataType === 'date') {
              row[key] = this.nationalizeDate(this.tableRow[property])
            } else if (this.tableHeaders[key].id === 'age') {
              row[key] = this.checkAge(this.tableRow[property])
            } else {
              row[key] = this.checkProperty(this.tableRow[property])
            }
          }
        }
      }
      return row
    },
    nationalizeDate (date) {
      if (date === '') {
        return '—'
      } else {
        let options = {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric'
        }
        return new Date(date).toLocaleString('ru-RU', options)
      }
    },
    checkAge (age) {
      if (isNaN(age)) {
        return '—'
      } else {
        return age
      }
    },
    checkProperty (value) {
      if (value === null) {
        return '—'
      } else if (value === '') {
        return '—'
      } else {
        return value
      }
    },
    noVisibleValue (value) {
      let visible = null
      if (value === 'noavatar') {
        visible = false
      } else if (value === true) {
        visible = false
      } else if (value === false) {
        visible = false
      } else {
        visible = true
      }
      return visible
    }
  }
}
</script>

<style scoped>
  .ctable-row {
    display: table-row;
    font-size: 14px;
    color: rgba(0,0,0,.87);
  }
  .ctable-row:hover {
    background: rgba(0,0,0,.12);
  }
  .ctablerow__choice {
    background: rgba(0,0,0,.12);
  }
  .ctable-cell {
    display: table-cell;
    padding: 16px 8px;
  }
  label {
    width: 100%;
  }
  .ctable-cell__avatar {
    color: rgba(0,0,0,.54);
  }
  .ctable-cell__true-false {
    color: rgba(0,0,0,.54);
  }
  @media only screen and (max-width: 701px) {
    .ctable-row {
      display: grid;
      grid-template-columns: 66px 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      justify-items: center;
      border: 1px solid rgba(0,0,0,.12);
      border-radius: 2px;
      margin: 4px 0;
      padding: 4px;
    }
    .ctable-cell {
      padding: 6px 6px;
    }
    .ctable-cell:nth-child(1) {
      grid-column: 1;
      grid-row: 1 / 4;
    }
    .ctable-cell:nth-child(2), .ctable-cell:nth-child(4), .ctable-cell:nth-child(6) {
      justify-self: end;
    }
    .ctable-cell:nth-child(3) {
      justify-self: start;
    }
    .ctable-cell:nth-child(2), .ctable-cell:nth-child(3) {
      color: rgba(66,185,131,1);
      font-weight: 700;
      font-size: 16px;
    }
    .ctable-cell:nth-child(4), .ctable-cell:nth-child(5) {
    }
    .ctable-cell:nth-child(6), .ctable-cell:nth-child(7) {
    }
    .ctable-cell:nth-child(8) {
      grid-column: 1 / 4;
      grid-row: 4;
    }
    .ctable-cell__avatar {
      width: 50px;
      height: 50px;
    }
  }
  @media only screen and (max-width: 1060px) and (min-width: 702px) {
  }
  @media screen and (min-width: 1061px) {
      margin: 50px auto;
  }
</style>
