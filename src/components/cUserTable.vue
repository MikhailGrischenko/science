<template lang="html">
  <cTable
    :tableData="getUsersData"
    :tableHeaders="tableHeaders"
    :tableButtons="tableButtons"
  ></cTable>
</template>
<script type="text/javascript">
import cTable from '@/components/table/cTable'
import { mapState } from 'vuex'
export default {
  name: 'cUserTable',
  components: {
    cTable
  },
  data: function () {
    return {}
  },
  computed: {
    ...mapState({
      clickButton: state => state.control.clickButton,
      userId: state => state.control.userId,
      tableHeaders: state => state.tableSettings.headers,
      tableButtons: state => state.tableSettings.buttons,
      usersPosition: state => state.usersPosition
    }),
    getUsersData: function () {
      let usersData = this.$store.getters.getUndeleteUser
      let users = []
      for (let user in usersData) {
        users[user] = this.convertUsersData(usersData[user])
      }
      return users
    }
  },
  methods: {
    convertUsersData: function (userData) {
      let user = Object.assign({}, userData)
      user.homeAddress = this.getHomeAddress(userData.homeAddressCity, userData.homeAddressAvenu, userData.homeAddressBuild, userData.homeAddressApartment)
      user.age = this.getCurrentAge(userData.birthday)
      user.position = this.getUserPosition(userData.position)
      return user
    },
    getHomeAddress: function (city, avenu, build, apartment) {
      let address = [...arguments]
      return address.filter(chunk => chunk).join(' ')
    },
    getCurrentAge: function (date) {
      return Math.floor((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000))
    },
    getUserPosition: function (positionId) {
      let position = null
      for (let key in this.usersPosition) {
        if (this.usersPosition[key].id === positionId) {
          position = this.usersPosition[key].position
        }
      }
      return position
    },
    markUserDelete: function () {
      if (this.userId === null) {
        this.$store.commit('notification', 'Для удаления пользователя выберите его в таблице ниже')
        this.$store.commit('clickButton', null)
      } else {
        this.$store.commit('userDelete', this.userId)
        this.$store.commit('notification', null)
        this.$store.commit('clickButton', null)
        this.$store.commit('getUserId', null)
      }
    },
    editUser: function () {
      if (this.userId === null) {
        this.$store.commit('notification', 'Для редактирования пользователя выберите его в таблице ниже')
        this.$store.commit('clickButton', null)
      } else {
        this.$router.push('/edit/' + this.userId)
      }
    },
    createUser: function () {
      this.$router.push('/edit/' + 'new')
    }
  },
  watch: {
    clickButton: function () {
      if (this.clickButton === 'new') {
        this.createUser()
      } else if (this.clickButton === 'edit') {
        this.editUser()
      } else if (this.clickButton === 'delete') {
        this.markUserDelete()
      }
    }
  }
}
</script>
