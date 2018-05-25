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
      let user = {}
      let {id, avatar, firstName, lastName, birthday, position, remoteWork, homeAddressCity, homeAddressAvenu, homeAddressBuild, homeAddressApartment} = userData
      user.id = id
      user.avatar = avatar
      user.firstName = firstName
      user.lastName = lastName
      user.remoteWork = remoteWork
      user.birthday = birthday
      user.homeAddress = this.getHomeAddress(homeAddressCity, homeAddressAvenu, homeAddressBuild, homeAddressApartment)
      user.age = this.getCurrentAge(birthday)
      user.position = this.getUserPosition(position)
      return user
    },
    getHomeAddress: function (city, avenu, build, apartment) {
      if ((city === '') && (avenu === '') && (build === '') && (apartment === '')) {
        return ''
      } else {
        return city + ' ' + avenu + ' ' + build + ' ' + apartment
      }
    },
    getCurrentAge: function (date) {
      let CurrentAge = Math.floor((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000))
      return CurrentAge
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
