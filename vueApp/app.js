

const app=Vue.createApp({
    data(){
        return{
           showBooks:true,
           books: [
                {title:"بوف کور" ,author:"صادق هدایت",image:"img/1.jfif",isFav:false},
                {title:"سگ ولگرد" ,author:"صادق هدایت",image:"img/2.jfif",isFav:false},
                {title:"کلیدر" ,author:"محمود دولت ابادی",image:"img/3.jfif",isFav:true}
           ]
        }
    },
     methods:{
        changeShownBooks(){
            this.showBooks=!this.showBooks
        },
        changeFav(book){
            book.isFav=!book.isFav
        }
    }

})

app.mount("#app")
