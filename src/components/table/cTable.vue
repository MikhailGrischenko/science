<template lang="html">
  <div class="ctable">
    <cButtonBar
      :buttons="tableButtons"
      :id="this.$store.state.control.userId"
    ></cButtonBar>
    <div class="ctable-table">
      <cTableHeader
        :tableHeaders="tableHeaders"
        :tableReverse="tableReverse"
        v-on:sort-column="clickColumnSort"
      ></cTableHeader>
      <div class="ctable-body">
        <cTableRow
          v-for="(tableRow, key) in tableSort"
          :key="key"
          :tableRow="tableRow"
          v-on:row-choice="rowChoice"
          :tableHeaders="tableHeaders"
          :class="{ ctablerow__choice: tableSort[key].choice }"
        ></cTableRow>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import cButtonBar from '@/components/base/cButtonBar'
import cTableHeader from '@/components/table/cTableHeader'
import cTableRow from '@/components/table/cTableRow'
export default {
  name: 'cTable',
  components: {
    cButtonBar,
    cTableHeader,
    cTableRow
  },
  props: [
    'tableData',
    'tableButtons',
    'tableHeaders'
  ],
  data: function () {
    return {
      columnSort: null,
      sortReverse: false
    }
  },
  computed: {
    tableSort: function () {
      let data = this.tableData
      let headers = this.tableHeaders
      let sorting = this.columnSort
      function compareNumeric (property) {
        return function (a, b) {
          return a[property] - b[property]
        }
      }
      function compareString (property) {
        return function (a, b) {
          if (a[property] < b[property]) return -1
          if (a[property] > b[property]) return 1
        }
      }
      if (sorting !== null) {
        for (let key in headers) {
          if (headers[key].id === sorting) {
            this.sortIndication(sorting, 0)
            if (headers[key].dataType === 'numeric') {
              return data.sort(compareNumeric(sorting))
            } else if (headers[key].dataType === 'date') {
              data.sort(compareString(sorting))
              return data.reverse()
            } else {
              return data.sort(compareString(sorting))
            }
          }
        }
      }
      return data
    },
    tableReverse: function () {
      let data = this.tableData
      if (this.sortReverse) {
        this.sortIndication(this.columnSort, 1)
        return data.reverse()
      } else {
        this.sortIndication(this.columnSort, -1)
        return data.reverse()
      }
    }
  },
  methods: {
    clickColumnSort: function (column) {
      if (this.columnSort === column) {
        this.sortReverse = !this.sortReverse
      } else {
        this.sortReverse = false
      }
      this.columnSort = column
    },
    rowChoice: function (rowId) {
      this.$store.commit('getUserId', rowId)
    },
    sortIndication: function (column, indication) {
      for (let key in this.tableHeaders) {
        if (this.tableHeaders[key].id === column) {
          if (indication === 1) {
            this.tableHeaders[key].sortIndication = -1
          } else {
            this.tableHeaders[key].sortIndication = 1
          }
        } else {
          this.tableHeaders[key].sortIndication = 0
        }
      }
    }
  }
}
</script>

<style scoped>
  .ctable {
    width: 100%;
  }
  .ctable-table {
    width: 100%;
    display: table;
    padding-top: 12px;
  }
  .ctable-body {
    display: table-row-group;
  }
  @media only screen and (max-width: 701px) {
    .ctable {
      display: flex;
      flex-direction: column;
    }
    .ctable-table {
      width: auto;
    }
  }
  @media only screen and (max-width: 1060px) and (min-width: 702px) {
  }
  @media screen and (min-width: 1061px) {
      margin: 50px auto;
  }
</style>
