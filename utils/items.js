import {
  mdiHomeOutline,
  mdiSearchWeb,
  mdiContactsOutline
} from '@mdi/js'

export const drawerItems = [{
  name: 'Home',
  icon: mdiHomeOutline,
  path: '/'
}, {
  name: 'Cari Sekolah',
  icon: mdiSearchWeb,
  path: '/schools/search'
}, {
  name: 'Hubungin Kami',
  icon: mdiContactsOutline,
  path: '/contact-us'
}]

export const footerItems = [{
  title: 'Home',
  to: '/',
  nuxt: true,
  exact: true
}, {
  title: 'Hubungi kami',
  to: '/contact-us',
  nuxt: true,
  exact: true
}, {
  title: 'Login',
  link: true,
  href: 'https://operator.edukasiplus.com',
  target: '_blank'
}, {
  title: 'Daftarkan sekolah anda',
  to: '/schools/registration',
  nuxt: true,
  exact: true
}]

export const stageItems = [{
  text: 'SD & MI',
  value: 'sd'
}, {
  text: 'SMP & MTs',
  value: 'smp'
}, {
  text: 'SMA/SMK & MA',
  value: 'sma'
}, {
  text: 'Kursus',
  value: 'kursus'
}]

export const statusItems = [{
  text: 'Negeri',
  value: '0'
}, {
  text: 'Swasta',
  value: '1'
}]
