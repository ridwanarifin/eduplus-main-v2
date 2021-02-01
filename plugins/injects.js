export default ({ $app }, inject) => {
  inject('_', require('~/static/vendor/lodash'))
  inject('icon', require('~/static/vendor/@mdi/js'))
}
