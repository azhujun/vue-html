Vue.component('button-counter', {
    template: '<button v-on:click="increment">{{ counter }}</button>',
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        increment: function () {
            this.counter += 1;
            this.$emit('increment')
        }
    },
});
Vue.component('child', {
    template: '#child-template',
    props: ['value'],
    data: function () {
        return {
            something: 0
        }
    },
    methods: {
        t1: function () {
            console.log(this.value);
            this.$emit('sea');
        }
    },
});
Vue.directive('demo', {
    bind: function (el, binding, vnode) {
        var s = JSON.stringify
        el.innerHTML =
            'name: ' + s(binding.name) + '<br>' +
            'value: ' + s(binding.value) + '<br>' +
            'expression: ' + s(binding.expression) + '<br>' +
            'argument: ' + s(binding.arg) + '<br>' +
            'modifiers: ' + s(binding.modifiers) + '<br>' +
            'vnode keys: ' + Object.keys(vnode).join(', ')
    },
    inserted: function (el) {
        // 聚焦元素
        el.style.color = "red";
    }
});

Vue.component('alert', {
    template: '#alert-template',
    props: ['data'],
    filters: {
        showText: function (value, type) {
            if (value) {
                return value;
            }
            switch (type) {
                case 'cancel':
                    value = '取消';    
                    break; 
                case 'determine':
                    value = '确定';    
                    break;
                default:
                    break;    
            }
            return value;
        }
    },
    methods: {
        autoClose: function () {
            if (this.data.autoClose) {
                this.data.show = false;
            }
        },
        cancel: function () {
            this.autoClose();
            if (!!this.data.cancel.callback) {
                this.data.cancel.callback(111);
            }
        },
        determine: function () {
            this.autoClose();
            if (!!this.data.determine.callback) {
                this.data.determine.callback(222);
            }
        }
    },
});