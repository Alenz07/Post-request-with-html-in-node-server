sendData = (event)=>{
event.preventDefault()
const data = event.target.product.value
const obj = {
    productName : data
}
axios.post("http://localhost:2000/products", obj).then(result =>{
    console.log("yes its done" , result.data)
})
}
