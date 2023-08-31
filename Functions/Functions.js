function price(){
    let value = prompt("Enter price -")
    let value1 = prompt("Enter GST - ")
    value22 = Number(value)
    value33 = Number(value1)
    let sum = ((value22*value33)/100)+value22;
    alert("Grand Total = "+sum)
}