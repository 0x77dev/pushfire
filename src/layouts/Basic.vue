<template>
  <q-layout class="main" view="lHh Lpr lFf">
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
        <q-item tag="a" target="_blank" href="https://github.com/0x77dev/pushfire/wiki" clickable>
          <q-item-section avatar>
            <q-icon name="web" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Wiki</q-item-label>
            <q-item-label caption>Github Wiki</q-item-label>
          </q-item-section>
        </q-item>
        <router-link to="auth/register" class="text-primary">
        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="person" />
            <q-icon name="add" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Register</q-item-label>
            <q-item-label caption>Create a new account</q-item-label>
          </q-item-section>
        </q-item>
        </router-link>
        <router-link to="auth/login" class="text-primary">
        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="person" />
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Login</q-item-label>
            <q-item-label caption>Sign-in into existing one.</q-item-label>
          </q-item-section>
        </q-item>
        </router-link>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'BasicLayout',
  computed: {
    productName () {
      return window.sessionStorage.productName
    }
  },
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
