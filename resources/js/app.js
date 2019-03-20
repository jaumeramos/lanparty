
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import UsersSearch from './components/UsersSearchComponent.vue'
import VUsersSearch from './components/VUsersSearchComponent.vue'
import NumbersSearch from './components/NumbersSearchComponent.vue'
import ManageUser from './components/ManageUserComponent.vue'
import LandingPage from './components/LandingPageComponent.vue'
import Gravatar from './components/GravatarComponent.vue'
import Events from './components/EventsComponent.vue'
import UserNumbers from './components/UserNumbersComponent.vue'
import Share from './components/ShareComponent.vue'
import withSnackbar from './components/mixins/withSnackbar'
import Sorteig from './components/SorteigComponent.vue'
import Prizes from './components/PrizesComponent.vue'
import Partners from './components/PartnersComponent.vue'
import MainNavigationDrawer from './components/ui/MainNavigationDrawer'

import store from './store'
import * as actions from './store/action-types'
import * as mutations from './store/mutation-types'

import { mapGetters } from 'vuex'

import 'typeface-montserrat/index.css'
import 'typeface-roboto/index.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'font-awesome/css/font-awesome.min.css'

import 'vuetify/dist/vuetify.min.css'

store.commit(mutations.USER,  user)
if (window.user ) store.commit(mutations.LOGGED, true)

const app = new Vue({
  el: '#app',
  store,
  data: () => ({
    dialog: false,
    drawer: null,
    drawerRight: false,
    logoutLoading: false,
    editingUser: false,
    updatingUser: false,
    changingPassword: false,
    items: [
      { icon: 'home', text: 'Home', href: '/home' },
      { icon: 'contacts', text: 'Col·laboradors', href: '/colaboradors', new: true  },
      { icon: 'favorite_border', text: 'Premis', href: '/premis', new: true },
      // { icon: 'settings', text: 'Settings' },
      // { icon: 'chat_bubble', text: 'Contact' },
      { heading: 'Links'},
      { icon: 'link', text: 'Institut de l\'Ebre', href: 'https://www.iesebre.com', new: true },
      { icon: 'link', text: 'Web Lan Party', href: 'http://lanparty.iesebre.com' , new: true },
      { icon: 'link', text: 'Facebook Lan Party', href: 'https://www.facebook.com/LanPartyIesEbre' , new: true },
      { icon: 'link', text: 'Streaming (Twitch)', href: 'https://www.twitch.tv/iesebrelanparty' , new: true },
      { heading: 'Administració', role: 'Manager'},
      { icon: 'face', text: 'Participants', href: '/manage/participants', role: 'Manager' },
      { icon: 'favorite', text: 'Sorteig', href: '/manage/sorteig', role: 'Manager', new : true }
    ]
  }),
  components: {
    UsersSearch,
    VUsersSearch,
    NumbersSearch,
    ManageUser,
    LandingPage,
    Gravatar,
    Events,
    UserNumbers,
    Share,
    Sorteig,
    Prizes,
    Partners,
    'main-navigation-drawer': MainNavigationDrawer
  },
  mixins: [ withSnackbar ],
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  methods: {
    logout() {
      this.logoutLoading = true
      this.$store.dispatch(actions.LOGOUT).then(response => {
        window.location = '/'
      }).catch(error => {
        console.log(error)
      }).then(() => {
        this.logoutLoading = false
      })
    },
    editUser() {
      this.editingUser = true
      this.$nextTick(this.$refs.email.focus)
    },
    updateEmail (email) {
      this.$store.commit(mutations.USER, {...this.user, email})
    },
    updateName(name) {
      this.$store.commit(mutations.USER, {...this.user, name})
    },
    updateGivenName (givenName){
      this.$store.commit(mutations.USER,{...this.user, givenName})
    },
    updateSn1(sn1){
      this.$store.commit(mutations.USER,{...this.user, sn1})
    },
    updateSn2(sn2){
      this.$store.commit(mutations.USER,{...this.user, sn2})
    },
    updateUser () {
      this.updatingUser = true
      this.$store.dispatch(actions.UPDATE_USER, this.user).then(response => {
        this.showMessage('Usuari modificat correctament')
      }).catch(error => {
        console.dir(error)
        this.showError(error)
      }).then(() => {
        this.editingUser = false
        this.updatingUser = false
      })
    },
    changePassword() {
      this.changingPassword = true
      this.$store.dispatch(actions.REMEMBER_PASSWORD, this.user.email).then(response => {
        this.showMessage(`Se us ha enviat un email per tal de modificar la paraula de pas`)
      }).catch(error => {
        console.dir(error)
        this.showError(error)
      }).then(() => {
        this.changingPassword = false
      })
    },
    toogleRightDrawer() {
      this.drawerRight = ! this.drawerRight
    },
    checkRoles (item) {
      if (item.role) {
        return this.$store.getters.roles.find(function(role) {
          return role == item.role // eslint-disable-line
        })
      }
      return true
    }
  },
  props: {
    source: String
  }
})

// if ('serviceWorker' in navigator && 'PushManager' in window) {
//   window.addEventListener('load', function() {
//     navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
//       // Registration was successful
//       console.log('ServiceWorker registration successful with scope: ', registration.scope);
//     }, function(err) {
//       // registration failed :(
//       console.log('ServiceWorker registration failed: ', err);
//     });
//   });
// }
