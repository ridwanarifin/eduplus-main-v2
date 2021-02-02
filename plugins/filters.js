import Vue from 'vue'
import _ from 'lodash'

Vue.filter('truncate', (text, length, clamp) => {
  clamp = clamp || '...'
  return _.size(text) > length
    ? text.slice(0, length) + clamp
    : text
})

Vue.filter('capitalize', (text) => {
  if (!text) { return '' }
  const a = _.split(text, ' ')
  const b = _.map(a, o => _.size(o) > 3 ? _.capitalize(o) : o)
  return _.join(b, ' ')
})

Vue.filter('upper', (text) => {
  return _.upperCase(text)
})

Vue.filter('statusSekolah', (text) => {
  switch (text) {
    case '0': return 'Swasta'
    case '1': return 'Negeri'
    default: return null
  }
})

Vue.filter('stageSekolah', (text) => {
  switch (_.upperCase(text)) {
    case 'SD': return 'SD & MI'
    case 'SMP': return 'SMP & MTs'
    case 'SMA': return 'SMA/SMK & MA'
    case 'KURSUS': return 'Kursus'
    default: return 'Sekolah'
  }
})

Vue.filter('join', (arry) => {
  if (_.isEmpty(arry)) { return null }
  const newVal = _.map(arry, (obj) => {
    const a = _.split(obj, ' ')
    const b = _.map(a, o => _.size(o) > 3 ? _.capitalize(o) : o)
    return _.join(b, ' ')
  })
  return _.join(_.reverse(newVal), ', ')
})
