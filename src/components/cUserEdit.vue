<template lang="html">
  <section name="user-edit" class="cuser-edit">
    <div class="cuser__form-header">
      <h1 class="cuser__form-title">{{ formData.title }}</h1>
      <cButton
        :cButton="formData.buttons.cansel"
      ></cButton>
      <cButton
        :cButton="formData.buttons.save"
      ></cButton>
    </div>
    <div class="cuser__form-avatar">
      <icon name="user" class="cuser__form-avatar_icon"></icon>
    </div>
    <cInput
      v-model="getUserData.firstName"
      v-bind:id="formData.firstName.id"
      v-bind:label="formData.firstName.label"
      v-bind:placeholder="formData.firstName.placeholder"
    ></cInput>
    <cInput
      v-model="getUserData.lastName"
      v-bind:id="formData.lastName.id"
      v-bind:label="formData.lastName.label"
      v-bind:placeholder="formData.lastName.placeholder"
    ></cInput>
    <cInputDate
      v-model="getUserData.birthday"
      v-bind:id="formData.birthday.id"
      v-bind:label="formData.birthday.label"
    ></cInputDate>
    <cSelect
      v-model="getUserData.position"
      v-bind:label="formData.position.label"
      v-bind:optionsDisabled="formData.position.optionsDisabled"
      v-bind:options="formData.position.options"
      v-bind:value="formData.position.options.value"
    ></cSelect>
    <cCheckbox
      v-model="getUserData.remoteWork"
      v-bind:id="formData.remoteWork.id"
      v-bind:label="formData.remoteWork.label"
    ></cCheckbox>
    <cInput
      v-model="getUserData.homeAddressCity"
      v-bind:id="formData.addressCity.id"
      v-bind:label="formData.addressCity.label"
      v-bind:placeholder="formData.addressCity.placeholder"
    ></cInput>
    <cInput
      v-model="getUserData.homeAddressAvenu"
      v-bind:id="formData.addressStreet.id"
      v-bind:label="formData.addressStreet.label"
      v-bind:placeholder="formData.addressStreet.placeholder"
    ></cInput>
    <cInput
      v-model="getUserData.homeAddressBuild"
      v-bind:id="formData.addressBuild.id"
      v-bind:label="formData.addressBuild.label"
      v-bind:placeholder="formData.addressBuild.placeholder"
    ></cInput>
    <cInput
      v-model="getUserData.homeAddressApartment"
      v-bind:id="formData.addressApartment.id"
      v-bind:label="formData.addressApartment.label"
      v-bind:placeholder="formData.addressApartment.placeholder"
    ></cInput>
    <cTextarea
      v-model="getUserData.description"
      v-bind:id="formData.description.id"
      v-bind:label="formData.description.label"
      v-bind:placeholder="formData.description.placeholder"
    ></cTextarea>
  </section>
</template>

<script type="text/javascript">
import Icon from 'vue-awesome/components/Icon'
import cButton from '@/components/base/cButton'
import cInput from '@/components/base/cInput'
import cCheckbox from '@/components/base/cCheckbox'
import cInputDate from '@/components/base/cInputDate'
import cSelect from '@/components/base/cSelect'
import cTextarea from '@/components/base/cTextarea'
import { mapState, mapGetters } from 'vuex'
export default {
  // обязательно не забываем имя к.
  name: 'cUserEdit',
  components: {
    cButton,
    cCheckbox,
    cInput,
    cInputDate,
    cSelect,
    cTextarea,
    Icon
  },
  computed: {
    ...mapState({
      formData: state => state.formData,
      clickButton: state => state.control.clickButton
    }),
    ...mapGetters({
      getNewId: 'getNewId',
      addNewUser: 'addNewUser',
      getUserById: 'getUserById',
      refreshUser: 'refreshUser'
    }),
    userId () {
      return this.$route.params.id
    },
    getUserData: function () {
      let userData = {
        id: '',
        delete: false,
        avatar: 'noavatar',
        firstName: '',
        lastName: '',
        birthday: '',
        position: null,
        remoteWork: false,
        homeAddressCity: '',
        homeAddressAvenu: '',
        homeAddressBuild: '',
        homeAddressApartment: '',
        description: ''
      }
      if (this.userId !== 'new') {
        userData = this.getUserById(Number(this.userId))
      }
      return userData
    }
  },
  methods: {
    saveUser: function () {
      let userId = this.getUserData.id
      if (userId === '') {
        this.getUserData.id = this.getNewId
        this.addNewUser(this.getUserData)
        this.$store.commit('nullState')
        this.$router.push('/')
      } else {
        this.refreshUser(this.getUserData)
        this.$store.commit('nullState')
        this.$router.push('/')
      }
    },
    goBack: function () {
      this.$store.commit('nullState')
      this.$router.push('/')
    }
  },
  watch: {
    clickButton: function () {
      if (this.clickButton === 'save') {
        this.saveUser()
      } else if (this.clickButton === 'cansel') {
        this.goBack()
      }
    }
  }
}
</script>

<style scoped>
  .cuser-edit {
    display: grid;
    margin: 50px auto;
    padding: 24px;
    max-width: 1044px;
    border: 2px solid rgba(0,0,0,.54);
    border-radius: 4px;
    grid-gap: 3px 24px;
    grid-auto-flow: column;
  }
  .cuser__form-header {
    display: flex;
    margin: 0 24px;
    align-items: center;
    grid-area: form-header;
  }
  .cuser__form-title {
    font-size: 24px;
    width: 100%;
    text-align: left;
    color: rgba(66,185,131,1);
  }
  .cuser__form-block {
    display: flex;
    flex-direction: column;
    margin: 0 24px;
    width: 300px;
    padding: 20px 0;
  }
  .cuser__form-subblock {
    margin: 10px 0;
  }
  .cuser__form-avatar {
    border: 1px solid rgba(0,0,0,.54);
    border-radius: 4px;
    color: rgba(0,0,0,.12);
    padding: 50px;
    grid-area: form-avatar;
    justify-self: stretch;
    align-self: stretch;
  }
  .cuser__form-avatar_icon {
    width: 100%;
    height: 100%;
  }
  .cbutton {
    padding: 8px 16px;
    margin: 8px;
    background: #fff;
    border: 2px solid rgba(66,185,131,1);
    border-radius: 4px;
  }
  .cbutton:hover {
    background: rgba(66,185,131,.12)
  }
  .button-title {
    font-size: 14px;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 701px) {
    .cuser-edit {
      display: flex;
      flex-direction: column;
      border: none;
      margin: 0;
      padding: 4px;
    }
    .cuser__form-avatar {
      padding: 24px;
    }
    .cuser__form-avatar_icon {
      width: 100%;
      height: 100%;
    }
    .cuser__form-header {
      margin: 0;
    }
    .cuser__form-title {
      font-size: 20px;
    }

  }
  @media only screen and (max-width: 1060px) and (min-width: 702px) {
    .cuser-edit {
      margin: auto;
      padding: 12px;
      border: none;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto 1fr 1fr 1fr 1fr 1fr auto;
    }
    .cuser__form-header {
      margin: 0;
      grid-column: 1 / 3;
      grid-row: 1;
    }
    .cuser__form-avatar {
      padding: 24px;
      grid-area: form-avatar;
      grid-column: 1;
      grid-row: 2 / 7;
      justify-self: stretch;
      align-self: stretch;
    }
    .cuser__form-avatar_icon {
      width: 100%;
      height: 100%;
    }
  }
  @media screen and (min-width: 1061px) {
    .cuser-edit {
      margin: 50px auto;
      padding: 24px;
      max-width: 1044px;
      border: 2px solid rgba(0,0,0,.54);
      border-radius: 4px;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto 1fr 1fr 1fr auto;
      grid-gap: 3px 24px;
    }
    .cuser__form-header {
      margin: 0 24px;
      grid-area: form-header;
      grid-column: 1 / end;
      grid-row: 1;
    }
    .cuser__form-avatar {
      padding: 50px;
      grid-area: form-avatar;
      grid-column: 1;
      grid-row: 2 / 7;
      justify-self: stretch;
      align-self: stretch;
    }
  }
</style>
