export default {
  state: {
    title: 'Добавление/редактирование пользователя',
    buttons: {
      save: {
        type: 'button',
        value: 'save',
        title: 'Сохранить',
        icon: 'save'
      },
      cancel: {
        type: 'button',
        value: 'cancel',
        title: 'Отменить',
        icon: 'chevron-circle-left'
      }
    },
    firstName: {
      type: 'cInput',
      id: 'firstname',
      label: 'Имя',
      placeholder: 'Введите имя'
    },
    lastName: {
      type: 'cInput',
      id: 'lastname',
      label: 'Фамилия',
      placeholder: 'Введите фамилию'
    },
    addressCity: {
      type: 'cInput',
      id: 'addresscity',
      label: 'Город',
      placeholder: 'Введите город'
    },
    addressStreet: {
      type: 'cInput',
      id: 'addressstreet',
      label: 'Улица',
      placeholder: 'Введите улицу'
    },
    addressBuild: {
      type: 'cInput',
      id: 'addressbuild',
      label: 'Номер дома',
      placeholder: 'Введите дом'
    },
    addressApartment: {
      type: 'cInput',
      id: 'addressapartment',
      label: 'Квартира',
      placeholder: 'Введите квартиру'
    },
    remoteWork: {
      type: 'cCheckbox',
      id: 'remotework',
      label: 'Удаленная работа',
      placeholder: 'Удаленная работа'
    },
    birthday: {
      type: 'cInputDate',
      id: 'birthday',
      label: 'Дата рождения'
    },
    position: {
      type: 'cSelect',
      id: 'position',
      label: 'Должность',
      optionsDisabled: 'Выберите из списка',
      options: [
        {optionTitle: 'программист', value: 'programer'},
        {optionTitle: 'техник', value: 'technician'},
        {optionTitle: 'бухгалтер', value: 'accountant'},
        {optionTitle: 'маркетолог', value: 'marketer'}
      ]
    },
    description: {
      type: 'cTextarea',
      id: 'description',
      label: 'Описание',
      placeholder: 'Введите описание сотрудника'
    }
  }
}
