Vue.component('todo-item',{
    props: ['todo'],
    template:'<li>{{todo.text}}</li>'
})

window.addEventListener('load',() => {
window.app = new Vue({
    el:'#app',
    data:{
        message: 'Hello Vue!'
    }
}),
window.app2 = new Vue({
    el: '#app-2',
    data:{
        message: 'Kayra ' + new Date().toLocaleString()
    }
}),
window.app3 = new Vue({
    el:'#app-3',
    data:{
        seen:true
    }
}),
window.app4 = new Vue ({
    el:'#app-4',
    data:{
        todos:[
            {text:'kayra'},
            {text:'berk'},
            {text:'tuncer'}
        ]
    }
}),
window.app5 = new Vue ({
    el: '#app-5',
    data:{
        message:'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function (){
            this.message = this.message.split('').reverse().join('')
        }
    }
}),
window.app6 = new Vue ({
    el:'#app-6',
    data:{
        message: 'selam'
    }
})
window.app7 = new Vue({
    el:'#app-7',
    data:{
        groceryList :[
            {id:0, text: 'kayra'},
            {id:1, text: 'berk'},
            {id:2, text: 'tuncer'}
        ]
    }
})
})
