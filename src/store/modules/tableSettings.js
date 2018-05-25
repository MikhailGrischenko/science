export default {
  state: {
    headers: [
      {
        id: 'avatar',
        dataType: 'string',
        columnTitle: 'Аватар',
        className: 'ctable-header__avatar',
        widht: 'auto',
        sortIndication: 0
      },
      {
        id: 'firstName',
        dataType: 'string',
        columnTitle: 'Имя',
        className: 'ctable-header__first-name',
        widht: 'auto',
        sortIndication: 0
      },
      {
        id: 'lastName',
        dataType: 'string',
        columnTitle: 'Фамилия',
        className: 'ctable-header__last-name',
        widht: 'auto',
        sortIndication: 0
      },
      {
        id: 'birthday',
        dataType: 'date',
        columnTitle: 'Дата рождения',
        className: 'ctable-header__birthday',
        widht: 'auto',
        sortIndication: 0
      },
      {
        id: 'age',
        dataType: 'numeric',
        columnTitle: 'Возраст',
        className: 'ctable-header__age',
        widht: 'auto',
        sortIndication: 0
      },
      {
        id: 'position',
        dataType: 'string',
        columnTitle: 'Должность',
        className: 'ctable-header__position',
        widht: 'auto',
        sortIndication: 0
      },
      {
        id: 'remoteWork',
        dataType: 'boolean',
        columnTitle: 'Удаленная работа',
        className: 'ctable-header__remote-work',
        widht: 'auto',
        sortIndication: 0
      },
      {
        id: 'homeAddress',
        dataType: 'string',
        columnTitle: 'Адрес проживания',
        className: 'ctable-header__home-address',
        widht: 'auto',
        sortIndication: 0
      }
    ],
    buttons: [
      {
        path: '/edit',
        value: 'new',
        title: 'Добавить',
        type: 'button',
        icon: 'plus'
      },
      {
        path: '/edit',
        value: 'edit',
        title: 'Редактировать',
        type: 'button',
        icon: 'edit'
      },
      {
        path: '',
        value: 'delete',
        title: 'Удалить',
        type: 'button',
        icon: 'trash'
      }
    ]
  }
}
