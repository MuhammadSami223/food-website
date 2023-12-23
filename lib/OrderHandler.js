export const createOrder=async({name,phone,address,total,PaymentMethod,pName})=>{
    const res= await fetch('/api/order',{
        method:"POST",
        body: JSON.stringify({
            name: name,
            phone: phone,
            address: address,
            total: parseFloat(total),
            pName:parseFloat(pName),
            method: PaymentMethod,
            status:1
        })
    })
    const id=await res.json()
    return id;
}