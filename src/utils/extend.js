import Vue from 'vue'

export default function create(Component, prop) {
    const extend = Vue.extend(Component)

    const vm = new extend({
        propsData: prop
    }).$mount()

    document.body.appendChild(vm.$el)

    vm.remove = () => {
        document.body.removeChild(vm.$el)
        vm.$destroy()
    }

    return vm
}