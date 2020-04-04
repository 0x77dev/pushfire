<template>
  <q-page class="column justify-start">
    <div class="row justify-center q-my-xl">
      Send / Receive Push Notifications
    </div>
    <div class="q-px-lg text-h6 text-center">
      <router-link to="auth/register" class="text-primary">Register</router-link> a new account or
      <router-link to="auth/login" class="text-primary">log in</router-link>.
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PageIndex',
  computed: {
    ...mapGetters('user', ['currentUser'])
  },
  mounted () {
    if (this.currentUser) this.$router.push('auth/login')
  }
}
</script>
