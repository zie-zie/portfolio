  <template>
  <div>
    
    <div class="header"> 
      <p><img src="./assets/logo.png" class="image"></p> 
      <p><button class="hederButton" @click="showinfo = !showinfo ,showtodo=false,showAddList=false">{{ showinfo ? 'Hide Info' : 'Show Info' }}</button></p>
      <p><button class="hederButton" @click="showtodo = !showtodo , showinfo=false,showAddList=false">{{ showtodo ? 'Hide ToDo' : 'Show ToDo' }}</button></p>
      <p><button class="hederButton" @click="lockManage">lock</button></p>
    </div>
    <div id="app">
       <ApiInfo v-if="showinfo"/>
       <todolistAll v-if="showtodo"/>
    </div>
    <loginUser @loginIsTrue="handelLogin" v-if="loginpage"/>
    <div class="footer">
        <router-link :to="{name:'AddTodoList'}" class="addtodo" @click="showtodo=false,showinfo=false">+</router-link>  
    </div>  
    <router-view/>
    </div>
    
</template>

<script>
import ApiInfo from './components/ApiInfo'
import todolistAll from './components/todolistAll'
import AddTodoList from './components/AddTodoList'
import LoginUser from './components/LoginUser.vue';
import { mapStores } from 'pinia';
import { useLoginStore } from './stores/LoginStore';

export default {
  name: 'App',
  computed:{
    ...mapStores(useLoginStore)
  },
  data() {
    return {
      showinfo: false,
      showtodo: false,
      showAddList:false,
      name:'',
      loginpage:true,
      
     
    };
  },
  components: {
    ApiInfo, todolistAll,AddTodoList,LoginUser,
  },
  methods:{


    handelLogin(){
      this.loginpage=false;
      console.log('handellogin')
      
    },
    lockManage(){
      this.loginpage=true;
      this.showinfo=false;
     this.showtodo=false;
      this.showAddList=false;
      
    },
  }
};
</script>

<style scoped>

body {
  font-family: 'Roboto', sans-serif;
  background-color: #e7faf7;
  margin: 0;
  padding: 0;
}


#app {
  text-align: center;
  color: #34495e;
  margin-top: 50px;
}


.header {
  display: flex;
  align-items: center;
  background: #1abc9c;
  height: 70px;
  padding: 10px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}


.image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}


.hederButton {
  width: 110px;
  height: 35px;
  background-color: #1abc9c;
  color: #ecf0f1;
  border: none;
  border-radius: 20px;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.hederButton:hover {
  background-color: #149174;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

button:focus {
  outline: none;
}


.hederButton:active {
  background-color: #1abc9c;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.container {
  width: 90%;
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
}
.footer {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  }

.addtodo {
  width: 100%;
  height: 100%;
  background-color: #1abc9c;
  color: #ecf0f1;
  border: none;
 border-radius: 50%; 
  font-size:30px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  text-align: center;
  text-align: center;
  line-height: 100px; 

}

.addtodo:hover {
  background-color: #149174;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.addtodo:active {
  background-color: #16a085;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
}

</style>
