let btn = document.querySelector('#btn')



btn.addEventListener('click', ()=>{
  let num = document.querySelector('#num').value

  let sale = document.querySelector('select')

  let value = sele.options[sele.selectedIndex].value
  
  let celToFarh = (celci) =>{
    let formulacel = Math.round((celci * 9/5) + 32)
    return formulacel;
  }
  
  let ferhToCel = (ferh) => {
    let formulaferh = Math.round((ferh -32) * 5/9)
    return formulaferh;
  }
  
  
  if (value === 'celsius'){
    let res = celToFarh(num)
    let result = document.getElementById('result').innerHTML = `${num} Celsius = ${res}°Fohranheit`
  }else{
    let res = ferhToCel(num)
    let result = document.getElementById('result').innerHTML = `${num} Fohranheit = ${res}°Celsius`
  }

})
