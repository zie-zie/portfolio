<template>
  <form @submit.prevent="handelesSubmit">
    <label>Email:</label>
    <input type="email" required v-model="email">

    <label>password:</label>
    <input type="password" required v-model="password">
    <div v-if="passwordError" class="error">{{ passwordError }}</div>
    
    <label>Role</label>
    <select v-model="role">
        <option value="developer">web developer</option>
        <option value="designer">web designer</option>
    </select>

    <label>skills:</label>
    <input type="text" v-model="tempskill" @keyup="addskill">
    <div v-for="skill in skills" :key="skill" class="pill">
        <span @click="deleteskill(skill)">{{ skill }}</span>
    </div>

    <div class="terms">
        <input type="checkbox" v-model="terms" required>
        <label>accept terms and</label>
    </div>
    <div class="submit">
        <button>submit</button>
    </div>
  </form>
  <p>email:{{ email }}</p>
  <p>password:{{ password }}</p>
  <p>role:{{ role }}</p>
  <p>terms:{{ terms }}</p>
 
</template>

<script>
export default {
    data(){
        return{
            email:'',
            password:'',
            role:'',
            terms:true,
            tempskill:'',
            skills:[],
            passwordError:''
        }
        
    },
        
    methods:{
        addskill(e){
            if(e.key===','&& this.tempskill){
                if(!this.skills.includes(this.tempskill)){
                this.skills.push(this.tempskill)
            }

                this.tempskill=''
            }
        
        },
        deleteskill(skill){
            this.skills=this.skills.filter((item)=>{
                return skill !==item
            })

        },
        handelesSubmit(){
         this.passwordError= this.password.length> 5 ? '':
         'password its not more than 5 chars '
         if(!this.passwordError){
            console.log('submit')
         }
        }

    }
}
</script>

<style>
form{
    max-width:420px;
    margin:30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label{
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size:0.6em;
    text-transform: uppercase;
    letter-spacing:1px;
    font-weight:bold;
}
input,select{
    display: block;
    padding: 10px 6px;
    width: 100%; 
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;

}
input[type="checkbox"]{
    display:inline-block;
    width: 16px;
    margin:0 10px 0 0;
    position: relative;
    top:2px;
}
.pill{
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}
button{
    background: blue;
    border: 0px;
    padding: 10px 20px;
    margin-top:20px;
    color:white;
    border-radius: 20px;

}
.submit{
    text-align:center;
}
.error{
    color: red;
    margin-top: 10px ;
    font-size: 0.8em;
    font-weight: bold;
}

</style>