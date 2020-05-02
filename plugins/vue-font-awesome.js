import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faVirus, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faVirus, faNewspaper)

Vue.component('font-awesome-icon', FontAwesomeIcon)
