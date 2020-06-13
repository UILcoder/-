const app=new Vue({
	el:"#app",
	data:{
		list:[{
			id:1,
			bookname:"《算法导论》",
			date:"2006-9",
			price:85,
			count:1
		},{
			id:2,
			bookname:"《UNIX编程艺术》",
			date:"2006-2",
			price:59,
			count:1
		},{
			id:3,
			bookname:"《编程珠玑》",
			date:"2008-10",
			price:39,
			count:1
		},{
			id:4,
			bookname:"《代码大全》",
			date:"2006-3",
			price:128,
			count:1
		}],
	},	
	methods:{
		increment(index){
			this.list[index].count++
		},
		decrement(index){
			this.list[index].count--
		},
		removeClick(index){
			this.list.splice(index,1)
		}
		
	},
	filters:{
		isPrice(price){
			return  '￥'+ price.toFixed(2)
		}
	},
	computed:{
		totalPrice(){
			let totalprice=this.list.reduce((total,value)=>total+=value.price*value.count,0)
			return totalprice;
		}
	}
})