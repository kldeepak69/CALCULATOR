
function getData()
{
   
  let num1 = Number(document.getElementById("n1").value)
  let num2 = Number(document.getElementById("n2").value)
    

  return[num1,num2];
     
}

function add()
{
    let [num1, num2] = getData()
    let result = num1+num2
    document.getElementById("res").textContent = result
     console.log(result)

}

function sub()
{
    let [num1, num2] = getData()
    let result = Math.abs(num1-num2)
    document.getElementById("res").textContent = result
     console.log(result)

}
function mul()
{
    let [num1, num2] = getData()
    let result = num1*num2
    document.getElementById("res").textContent = result
     console.log(result)
}
function div()
{
    let [num1, num2] = getData()
    let result = Math.round(num1/num2)
    document.getElementById("res").textContent = result
     console.log(result)
}
