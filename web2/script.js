const btn = document.getElementById('btn')
const inputEL = document.getElementById('convert-input')
const length = document.getElementById('length-text')
const volume = document.getElementById('volume-text')
const mass = document.getElementById('mass-text')


let meter =  3.280
let liter = 0.264
let kilo = 2.205
length.innerHTML = "0meter = 0.000 feet | 0 feet = 0.000. meters"
volume.innerHTML = "0 liters = 0.000 gallons | 0 gallons = 0.000. meters"
mass.innerHTML = "0kilos = 0.000 pounds | 0 pounds = 0.000. kilos"

btn.addEventListener('click', function(){
   let inputValue = inputEL.value
    
   
   length.innerHTML = `${inputValue}meter =  ${(inputValue * meter).toFixed(3)} feet | ${inputValue} feet = ${(inputValue / meter).toFixed(3)}. meters`

    volume.innerHTML = `${inputValue} liters =  ${(inputValue * liter).toFixed(3)} gallons | ${inputValue} gallons = ${(inputValue / liter).toFixed(3)}. meters`
    
    mass.innerHTML = `${inputValue}kilos =  ${(inputValue * kilo).toFixed(3)} pounds | ${inputValue} pounds = ${(inputValue / meter).toFixed(3)}. kilos`
    clearInput()
})
function clearInput(){
    inputEL.value =""
}


