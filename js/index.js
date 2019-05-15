let screen = document.getElementsByClassName('screen')[0],
    mainArea = document.getElementsByClassName('main-area')[0],
    calculate = document.getElementById('calculate'),
    ac = document.getElementById('ac'),
    resultValues = [];

  
mainArea.addEventListener('click', function(e) {
  let target = e.target;

  if (target.classList.contains('number')) {
    let numValue = target.innerHTML;
    
    screen.value += numValue;
  }
  
  if (target.classList.contains('action')) {
    let screenValue = +screen.value,
        actionValue = target.innerHTML;
    
    resultValues.push(screenValue);
    resultValues.push(actionValue);
    screen.value = '';
    
    console.log(screenValue);
    console.log(resultValues);
  }
  
  if (target == calculate) {
    let result;
    resultValues.push(+screen.value);
    result = resultValues.join(' ');
    screen.value = eval(result);
    
    resultValues = [];
    
    console.log(eval(result));
    console.log(typeof(result));
  }

  if (target == ac) screen.value = '';
});