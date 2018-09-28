import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        things:[],
        user:false,
        username:'',
    },
    mutations:{
        setUser(state,msg){
            state.user = msg;
        },
        setUsername(state,msg){
            state.username = msg;
        },
        // GETALL(state, payload) {
        //     // console.log(payload);
        //     state.things = payload;
        // },
        // ADD(state, payload) {
        //     console.log(payload,'payload');
        //     state.things.push(payload);
        //   },
        //   DEL(state, payload) {
        //     state.things = state.things.filter(item => {
        //       return item.id != payload.id;
        //     })
        //   },
    },
    actions:{
        // async GETALL(context, payload) {
        //     //q请求数据
        //     var data = await fetch('/things/').then(res => res.json());
        //     // console.log(data, '132222222');
        //     context.commit('GETALL', data);
        // },
        // async ADD({commit}, payload) {
        //     console.log(payload,'payload');
        //     // 上传数据
        //     var data = await fetch('/things/', {
        //       "method": "POST",
        //       "headers": {
        //         "Content-Type": "application/json"
        //       },
        //       "body": JSON.stringify(payload)
        //     }).then(res => res.json());
        //     console.log(data,'data');
        //     commit('ADD', data);
        // },
        // async DEL({commit}, payload) {
        //     //发送 delete请求 发送到json-server服务器,自动删除这条数据
        //     console.log(payload);
        //     var data = await fetch('/things/' + payload.id, {
        //       "method": "DELETE"
        //     }).then(res => res.json());
      
        //     commit("DEL", payload)
        //   },
         
    },
    getters:{
        // quanbu(state){
        //     return state.things;
        // },
        // gongzuo(state){
        //     return state.things.filter(item => item.sta == '1');
        // },
        // shenghuo(state){
        //     return state.things.filter(item => item.sta == '2');
        // }
    }
})
export default store