<template>
  <q-layout class="main" :class="{ 'blur-layout': blurLayout }" view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          {{ productName }}
        </q-toolbar-title>

        <div>{{ getUserData('fullName') }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>PushFire</q-item-label>

        <q-item clickable @click="logoutUser()">
          <q-item-section avatar>
            <q-icon name="power_settings_new" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Logout</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view @setBlur="setBlur" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'UserLayout',
  computed: {
    ...mapGetters('user', ['currentUser']),
    productName () {
      return window.sessionStorage.productName
    }
  },
  created () {
    // Check that our app has access to the user id
    // from Firebase before the page renders
    // console.log('FIREBASE AUTH USER uid', this.$store.state.auth.uid)
  },
  data () {
    return {
      leftDrawerOpen: false,
      blurLayout: false
    }
  },
  methods: {
    ...mapActions('auth', ['logoutUser']),
    setBlur () {
      this.blurLayout = !this.blurLayout
    },
    getUserData (attr) {
      return (this.currentUser[attr]) ? this.currentUser[attr] : 'Please update your profile'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .main
    &.blur-layout
      filter blur(5px)
</style>
