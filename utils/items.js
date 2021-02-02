import {
  mdiHomeOutline,
  mdiSearchWeb,
  mdiContactsOutline
} from '@mdi/js'

export const headerDetilSekolahItems = [
  'Kontak Sekolah',
  'Informasi Sekolah',
  'Biaya Sekolah',
  'Pendaftaran',
  'Fasilitas',
  'Ekstakuliner'
]

export const detilInformasiSekolahItems = [{
  text: 'Kepala Sekolah',
  value: 'user'
}, {
  text: 'Jumlah Siswa',
  value: 'total_student'
}, {
  text: 'Akreditasi',
  value: 'accreditation'
}, {
  text: 'Status',
  value: 'status'
}, {
  text: 'Jam Sekolah',
  value: 'schools_hour'
}]

export const detilBiayaSekolahItems = [{
  text: 'Uang Pangkal',
  value: 'costs'
}, {
  text: 'SPP Bulanan',
  value: 'costs'
}, {
  text: 'Uang Kegiatan',
  value: 'costs'
}, {
  text: 'Uang Buku',
  value: 'costs'
}, {
  text: 'Potongan / Diskon',
  value: 'costs'
}]

export const detilPendaftaranItems = [{
  text: 'Pendaftaran',
  value: 'registration'
}, {
  text: 'Pengumuman',
  value: 'registration'
}, {
  text: 'Daftar Ulang',
  value: 'registration'
}]

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

export const samplePromoItems = [{
  id: 1,
  name: 'Promo #1',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum libero ac neque ultricies tempus. In ut fermentum dui, et pulvinar erat. Praesent ultrices urna ut mauris tincidunt, non efficitur nunc tincidunt. Donec fermentum tempus tincidunt. Duis placerat sapien sit amet mattis fringilla. Aliquam erat volutpat. Nunc a nibh mattis, interdum mauris ac, efficitur neque. Suspendisse venenatis, metus sed sodales congue, mi ante posuere odio, quis commodo nunc ex a felis. In at sapien quam. Sed non condimentum nisi, ac suscipit nibh. Donec sit amet dui id orci bibendum lobortis ac vel metus. Duis non ex sagittis, vulputate libero et, volutpat leo. Morbi dapibus molestie nibh, sed elementum est tincidunt quis. Morbi vehicula accumsan feugiat. Ut vel bibendum nibh. Vivamus tempor metus a urna ullamcorper, nec interdum sem feugiat. Etiam sit amet blandit lectus, ut sagittis nisi. Praesent tempus felis quis ligula hendrerit mollis. Aenean sit amet erat tristique, accumsan libero eget, sodales nunc. In hac habitasse platea dictumst. Phasellus in est nisi. Phasellus ornare, turpis vitae consequat tempor, quam ipsum fermentum dui, eget tempus nulla eros sit amet nisi. Nulla egestas mi nec eleifend dapibus.',
  image: require('~/assets/img/sample-promo-purple.png?webp'),
  created_at: '2020-11-02T03:16:44.000000Z',
  updated_at: '2020-11-02T03:16:44.000000Z'
}, {
  id: 2,
  name: 'Promo #2',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum libero ac neque ultricies tempus. In ut fermentum dui, et pulvinar erat. Praesent ultrices urna ut mauris tincidunt, non efficitur nunc tincidunt. Donec fermentum tempus tincidunt. Duis placerat sapien sit amet mattis fringilla. Aliquam erat volutpat. Nunc a nibh mattis, interdum mauris ac, efficitur neque. Suspendisse venenatis, metus sed sodales congue, mi ante posuere odio, quis commodo nunc ex a felis. In at sapien quam. Sed non condimentum nisi, ac suscipit nibh. Donec sit amet dui id orci bibendum lobortis ac vel metus. Duis non ex sagittis, vulputate libero et, volutpat leo. Morbi dapibus molestie nibh, sed elementum est tincidunt quis. Morbi vehicula accumsan feugiat. Ut vel bibendum nibh. Vivamus tempor metus a urna ullamcorper, nec interdum sem feugiat. Etiam sit amet blandit lectus, ut sagittis nisi. Praesent tempus felis quis ligula hendrerit mollis. Aenean sit amet erat tristique, accumsan libero eget, sodales nunc. In hac habitasse platea dictumst. Phasellus in est nisi. Phasellus ornare, turpis vitae consequat tempor, quam ipsum fermentum dui, eget tempus nulla eros sit amet nisi. Nulla egestas mi nec eleifend dapibus.',
  image: require('~/assets/img/sample-promo-yellow.png?webp'),
  created_at: '2021-02-01T14:57:00.000000Z',
  updated_at: '2021-02-01T14:57:00.000000Z'
}, {
  id: 3,
  name: 'Promo #3',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum libero ac neque ultricies tempus. In ut fermentum dui, et pulvinar erat. Praesent ultrices urna ut mauris tincidunt, non efficitur nunc tincidunt. Donec fermentum tempus tincidunt. Duis placerat sapien sit amet mattis fringilla. Aliquam erat volutpat. Nunc a nibh mattis, interdum mauris ac, efficitur neque. Suspendisse venenatis, metus sed sodales congue, mi ante posuere odio, quis commodo nunc ex a felis. In at sapien quam. Sed non condimentum nisi, ac suscipit nibh. Donec sit amet dui id orci bibendum lobortis ac vel metus. Duis non ex sagittis, vulputate libero et, volutpat leo. Morbi dapibus molestie nibh, sed elementum est tincidunt quis. Morbi vehicula accumsan feugiat. Ut vel bibendum nibh. Vivamus tempor metus a urna ullamcorper, nec interdum sem feugiat. Etiam sit amet blandit lectus, ut sagittis nisi. Praesent tempus felis quis ligula hendrerit mollis. Aenean sit amet erat tristique, accumsan libero eget, sodales nunc. In hac habitasse platea dictumst. Phasellus in est nisi. Phasellus ornare, turpis vitae consequat tempor, quam ipsum fermentum dui, eget tempus nulla eros sit amet nisi. Nulla egestas mi nec eleifend dapibus.',
  image: require('~/assets/img/sample-promo-pink.png?webp'),
  created_at: '2021-02-01T14:57:00.000000Z',
  updated_at: '2021-02-01T14:57:00.000000Z'
}, {
  id: 4,
  name: 'Promo #4',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum libero ac neque ultricies tempus. In ut fermentum dui, et pulvinar erat. Praesent ultrices urna ut mauris tincidunt, non efficitur nunc tincidunt. Donec fermentum tempus tincidunt. Duis placerat sapien sit amet mattis fringilla. Aliquam erat volutpat. Nunc a nibh mattis, interdum mauris ac, efficitur neque. Suspendisse venenatis, metus sed sodales congue, mi ante posuere odio, quis commodo nunc ex a felis. In at sapien quam. Sed non condimentum nisi, ac suscipit nibh. Donec sit amet dui id orci bibendum lobortis ac vel metus. Duis non ex sagittis, vulputate libero et, volutpat leo. Morbi dapibus molestie nibh, sed elementum est tincidunt quis. Morbi vehicula accumsan feugiat. Ut vel bibendum nibh. Vivamus tempor metus a urna ullamcorper, nec interdum sem feugiat. Etiam sit amet blandit lectus, ut sagittis nisi. Praesent tempus felis quis ligula hendrerit mollis. Aenean sit amet erat tristique, accumsan libero eget, sodales nunc. In hac habitasse platea dictumst. Phasellus in est nisi. Phasellus ornare, turpis vitae consequat tempor, quam ipsum fermentum dui, eget tempus nulla eros sit amet nisi. Nulla egestas mi nec eleifend dapibus.',
  image: require('~/assets/img/sample-promo-purple.png?webp'),
  created_at: '2021-02-01T14:57:00.000000Z',
  updated_at: '2021-02-01T14:57:00.000000Z'
}, {
  id: 5,
  name: 'Promo #5',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum libero ac neque ultricies tempus. In ut fermentum dui, et pulvinar erat. Praesent ultrices urna ut mauris tincidunt, non efficitur nunc tincidunt. Donec fermentum tempus tincidunt. Duis placerat sapien sit amet mattis fringilla. Aliquam erat volutpat. Nunc a nibh mattis, interdum mauris ac, efficitur neque. Suspendisse venenatis, metus sed sodales congue, mi ante posuere odio, quis commodo nunc ex a felis. In at sapien quam. Sed non condimentum nisi, ac suscipit nibh. Donec sit amet dui id orci bibendum lobortis ac vel metus. Duis non ex sagittis, vulputate libero et, volutpat leo. Morbi dapibus molestie nibh, sed elementum est tincidunt quis. Morbi vehicula accumsan feugiat. Ut vel bibendum nibh. Vivamus tempor metus a urna ullamcorper, nec interdum sem feugiat. Etiam sit amet blandit lectus, ut sagittis nisi. Praesent tempus felis quis ligula hendrerit mollis. Aenean sit amet erat tristique, accumsan libero eget, sodales nunc. In hac habitasse platea dictumst. Phasellus in est nisi. Phasellus ornare, turpis vitae consequat tempor, quam ipsum fermentum dui, eget tempus nulla eros sit amet nisi. Nulla egestas mi nec eleifend dapibus.',
  image: require('~/assets/img/sample-promo-yellow.png?webp'),
  created_at: '2021-02-01T14:57:00.000000Z',
  updated_at: '2021-02-01T14:57:00.000000Z'
}, {
  id: 6,
  name: 'Promo #6',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum libero ac neque ultricies tempus. In ut fermentum dui, et pulvinar erat. Praesent ultrices urna ut mauris tincidunt, non efficitur nunc tincidunt. Donec fermentum tempus tincidunt. Duis placerat sapien sit amet mattis fringilla. Aliquam erat volutpat. Nunc a nibh mattis, interdum mauris ac, efficitur neque. Suspendisse venenatis, metus sed sodales congue, mi ante posuere odio, quis commodo nunc ex a felis. In at sapien quam. Sed non condimentum nisi, ac suscipit nibh. Donec sit amet dui id orci bibendum lobortis ac vel metus. Duis non ex sagittis, vulputate libero et, volutpat leo. Morbi dapibus molestie nibh, sed elementum est tincidunt quis. Morbi vehicula accumsan feugiat. Ut vel bibendum nibh. Vivamus tempor metus a urna ullamcorper, nec interdum sem feugiat. Etiam sit amet blandit lectus, ut sagittis nisi. Praesent tempus felis quis ligula hendrerit mollis. Aenean sit amet erat tristique, accumsan libero eget, sodales nunc. In hac habitasse platea dictumst. Phasellus in est nisi. Phasellus ornare, turpis vitae consequat tempor, quam ipsum fermentum dui, eget tempus nulla eros sit amet nisi. Nulla egestas mi nec eleifend dapibus.',
  image: require('~/assets/img/sample-promo-pink.png?webp'),
  created_at: '2021-02-01T14:57:00.000000Z',
  updated_at: '2021-02-01T14:57:00.000000Z'
}, {
  id: 1,
  name: 'Promo #7',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum libero ac neque ultricies tempus. In ut fermentum dui, et pulvinar erat. Praesent ultrices urna ut mauris tincidunt, non efficitur nunc tincidunt. Donec fermentum tempus tincidunt. Duis placerat sapien sit amet mattis fringilla. Aliquam erat volutpat. Nunc a nibh mattis, interdum mauris ac, efficitur neque. Suspendisse venenatis, metus sed sodales congue, mi ante posuere odio, quis commodo nunc ex a felis. In at sapien quam. Sed non condimentum nisi, ac suscipit nibh. Donec sit amet dui id orci bibendum lobortis ac vel metus. Duis non ex sagittis, vulputate libero et, volutpat leo. Morbi dapibus molestie nibh, sed elementum est tincidunt quis. Morbi vehicula accumsan feugiat. Ut vel bibendum nibh. Vivamus tempor metus a urna ullamcorper, nec interdum sem feugiat. Etiam sit amet blandit lectus, ut sagittis nisi. Praesent tempus felis quis ligula hendrerit mollis. Aenean sit amet erat tristique, accumsan libero eget, sodales nunc. In hac habitasse platea dictumst. Phasellus in est nisi. Phasellus ornare, turpis vitae consequat tempor, quam ipsum fermentum dui, eget tempus nulla eros sit amet nisi. Nulla egestas mi nec eleifend dapibus.',
  image: require('~/assets/img/sample-promo-purple.png?webp'),
  created_at: '2020-11-02T03:16:44.000000Z',
  updated_at: '2020-11-02T03:16:44.000000Z'
}, {
  id: 2,
  name: 'Promo #8',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum libero ac neque ultricies tempus. In ut fermentum dui, et pulvinar erat. Praesent ultrices urna ut mauris tincidunt, non efficitur nunc tincidunt. Donec fermentum tempus tincidunt. Duis placerat sapien sit amet mattis fringilla. Aliquam erat volutpat. Nunc a nibh mattis, interdum mauris ac, efficitur neque. Suspendisse venenatis, metus sed sodales congue, mi ante posuere odio, quis commodo nunc ex a felis. In at sapien quam. Sed non condimentum nisi, ac suscipit nibh. Donec sit amet dui id orci bibendum lobortis ac vel metus. Duis non ex sagittis, vulputate libero et, volutpat leo. Morbi dapibus molestie nibh, sed elementum est tincidunt quis. Morbi vehicula accumsan feugiat. Ut vel bibendum nibh. Vivamus tempor metus a urna ullamcorper, nec interdum sem feugiat. Etiam sit amet blandit lectus, ut sagittis nisi. Praesent tempus felis quis ligula hendrerit mollis. Aenean sit amet erat tristique, accumsan libero eget, sodales nunc. In hac habitasse platea dictumst. Phasellus in est nisi. Phasellus ornare, turpis vitae consequat tempor, quam ipsum fermentum dui, eget tempus nulla eros sit amet nisi. Nulla egestas mi nec eleifend dapibus.',
  image: require('~/assets/img/sample-promo-yellow.png?webp'),
  created_at: '2021-02-01T14:57:00.000000Z',
  updated_at: '2021-02-01T14:57:00.000000Z'
}, {
  id: 3,
  name: 'Promo #9',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum libero ac neque ultricies tempus. In ut fermentum dui, et pulvinar erat. Praesent ultrices urna ut mauris tincidunt, non efficitur nunc tincidunt. Donec fermentum tempus tincidunt. Duis placerat sapien sit amet mattis fringilla. Aliquam erat volutpat. Nunc a nibh mattis, interdum mauris ac, efficitur neque. Suspendisse venenatis, metus sed sodales congue, mi ante posuere odio, quis commodo nunc ex a felis. In at sapien quam. Sed non condimentum nisi, ac suscipit nibh. Donec sit amet dui id orci bibendum lobortis ac vel metus. Duis non ex sagittis, vulputate libero et, volutpat leo. Morbi dapibus molestie nibh, sed elementum est tincidunt quis. Morbi vehicula accumsan feugiat. Ut vel bibendum nibh. Vivamus tempor metus a urna ullamcorper, nec interdum sem feugiat. Etiam sit amet blandit lectus, ut sagittis nisi. Praesent tempus felis quis ligula hendrerit mollis. Aenean sit amet erat tristique, accumsan libero eget, sodales nunc. In hac habitasse platea dictumst. Phasellus in est nisi. Phasellus ornare, turpis vitae consequat tempor, quam ipsum fermentum dui, eget tempus nulla eros sit amet nisi. Nulla egestas mi nec eleifend dapibus.',
  image: require('~/assets/img/sample-promo-pink.png?webp'),
  created_at: '2021-02-01T14:57:00.000000Z',
  updated_at: '2021-02-01T14:57:00.000000Z'
}, {
  id: 4,
  name: 'Promo #10',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum libero ac neque ultricies tempus. In ut fermentum dui, et pulvinar erat. Praesent ultrices urna ut mauris tincidunt, non efficitur nunc tincidunt. Donec fermentum tempus tincidunt. Duis placerat sapien sit amet mattis fringilla. Aliquam erat volutpat. Nunc a nibh mattis, interdum mauris ac, efficitur neque. Suspendisse venenatis, metus sed sodales congue, mi ante posuere odio, quis commodo nunc ex a felis. In at sapien quam. Sed non condimentum nisi, ac suscipit nibh. Donec sit amet dui id orci bibendum lobortis ac vel metus. Duis non ex sagittis, vulputate libero et, volutpat leo. Morbi dapibus molestie nibh, sed elementum est tincidunt quis. Morbi vehicula accumsan feugiat. Ut vel bibendum nibh. Vivamus tempor metus a urna ullamcorper, nec interdum sem feugiat. Etiam sit amet blandit lectus, ut sagittis nisi. Praesent tempus felis quis ligula hendrerit mollis. Aenean sit amet erat tristique, accumsan libero eget, sodales nunc. In hac habitasse platea dictumst. Phasellus in est nisi. Phasellus ornare, turpis vitae consequat tempor, quam ipsum fermentum dui, eget tempus nulla eros sit amet nisi. Nulla egestas mi nec eleifend dapibus.',
  image: require('~/assets/img/sample-promo-purple.png?webp'),
  created_at: '2021-02-01T14:57:00.000000Z',
  updated_at: '2021-02-01T14:57:00.000000Z'
}, {
  id: 5,
  name: 'Promo #11',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum libero ac neque ultricies tempus. In ut fermentum dui, et pulvinar erat. Praesent ultrices urna ut mauris tincidunt, non efficitur nunc tincidunt. Donec fermentum tempus tincidunt. Duis placerat sapien sit amet mattis fringilla. Aliquam erat volutpat. Nunc a nibh mattis, interdum mauris ac, efficitur neque. Suspendisse venenatis, metus sed sodales congue, mi ante posuere odio, quis commodo nunc ex a felis. In at sapien quam. Sed non condimentum nisi, ac suscipit nibh. Donec sit amet dui id orci bibendum lobortis ac vel metus. Duis non ex sagittis, vulputate libero et, volutpat leo. Morbi dapibus molestie nibh, sed elementum est tincidunt quis. Morbi vehicula accumsan feugiat. Ut vel bibendum nibh. Vivamus tempor metus a urna ullamcorper, nec interdum sem feugiat. Etiam sit amet blandit lectus, ut sagittis nisi. Praesent tempus felis quis ligula hendrerit mollis. Aenean sit amet erat tristique, accumsan libero eget, sodales nunc. In hac habitasse platea dictumst. Phasellus in est nisi. Phasellus ornare, turpis vitae consequat tempor, quam ipsum fermentum dui, eget tempus nulla eros sit amet nisi. Nulla egestas mi nec eleifend dapibus.',
  image: require('~/assets/img/sample-promo-yellow.png?webp'),
  created_at: '2021-02-01T14:57:00.000000Z',
  updated_at: '2021-02-01T14:57:00.000000Z'
}, {
  id: 6,
  name: 'Promo #12',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum libero ac neque ultricies tempus. In ut fermentum dui, et pulvinar erat. Praesent ultrices urna ut mauris tincidunt, non efficitur nunc tincidunt. Donec fermentum tempus tincidunt. Duis placerat sapien sit amet mattis fringilla. Aliquam erat volutpat. Nunc a nibh mattis, interdum mauris ac, efficitur neque. Suspendisse venenatis, metus sed sodales congue, mi ante posuere odio, quis commodo nunc ex a felis. In at sapien quam. Sed non condimentum nisi, ac suscipit nibh. Donec sit amet dui id orci bibendum lobortis ac vel metus. Duis non ex sagittis, vulputate libero et, volutpat leo. Morbi dapibus molestie nibh, sed elementum est tincidunt quis. Morbi vehicula accumsan feugiat. Ut vel bibendum nibh. Vivamus tempor metus a urna ullamcorper, nec interdum sem feugiat. Etiam sit amet blandit lectus, ut sagittis nisi. Praesent tempus felis quis ligula hendrerit mollis. Aenean sit amet erat tristique, accumsan libero eget, sodales nunc. In hac habitasse platea dictumst. Phasellus in est nisi. Phasellus ornare, turpis vitae consequat tempor, quam ipsum fermentum dui, eget tempus nulla eros sit amet nisi. Nulla egestas mi nec eleifend dapibus.',
  image: require('~/assets/img/sample-promo-pink.png?webp'),
  created_at: '2021-02-01T14:57:00.000000Z',
  updated_at: '2021-02-01T14:57:00.000000Z'
}]
