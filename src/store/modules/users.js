export default {
  state: {
    users: [
      {
        id: 0,
        delete: false,
        avatar: 'noavatar',
        firstName: 'Иван',
        lastName: 'Иванов',
        birthday: '1980-08-25',
        position: '1',
        remoteWork: false,
        homeAddressCity: 'Екатеринбург',
        homeAddressAvenu: 'ул. Мира',
        homeAddressBuild: 'д.36',
        homeAddressApartment: 'кв.15',
        description: ''
      },
      {
        id: 1,
        delete: false,
        avatar: 'noavatar',
        firstName: 'Петр',
        lastName: 'Петров',
        birthday: '1990-11-15',
        position: '3',
        remoteWork: true,
        homeAddressCity: 'Москва',
        homeAddressAvenu: 'Ленинский пр.',
        homeAddressBuild: 'д.5',
        homeAddressApartment: 'кв.26',
        description: ''
      },
      {
        id: 2,
        delete: false,
        avatar: 'noavatar',
        firstName: 'Василий',
        lastName: 'Протопопов',
        birthday: '1985-09-15',
        position: '2',
        remoteWork: true,
        homeAddressCity: 'Саратов',
        homeAddressAvenu: 'пр. Карла Маркса',
        homeAddressBuild: 'д.45',
        homeAddressApartment: 'кв.66',
        description: ''
      },
      {
        id: 3,
        delete: false,
        avatar: 'noavatar',
        firstName: 'Артур',
        lastName: 'Кацуба',
        birthday: '1987-03-07',
        position: '2',
        remoteWork: true,
        homeAddressCity: 'Новосибирск',
        homeAddressAvenu: 'Красный пр.',
        homeAddressBuild: 'д.67',
        homeAddressApartment: 'кв.23',
        description: ''
      }
    ]
  },
  mutations: {
    userDelete (state, userId) {
      state.users[userId].delete = true
    }
  },
  getters: {
    getUserById: (state) => (id) => {
      return state.users.find(user => user.id === id)
    },
    getUndeleteUser: state => {
      return state.users.filter(user => !user.delete)
    },
    addNewUser: (state) => (user) => {
      state.users.push(user)
    },
    refreshUser: (state) => (user) => {
      state.users.splice(user.id, 1, user)
    },
    getNewId: state => {
      return state.users.length
    }
  }
}
