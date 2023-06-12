var button = document.getElementsByClassName('button');
var display = document.getElementById('result_display');
var displayValue = "";
var operand1 = 0;
var operand2 = null;
var operator = null;

for(var i=0; i<button.length; i++){
    button[i].addEventListener('click', function(){
        var value = this.getAttribute('data-value');
        var text = display.textContent.trim();

        if(value == '+' || value=='-' || value=='*' || value=='/' || value=='%'){
            operator = value
            operand1 = parseFloat(text);
            display.innerText = "";
        }
        else if(value == '='){
            operand2 = parseFloat(text);
            display.innerText = "";
            display.innerText += eval(operand1 + ' ' + operator + ' ' + operand2);

        }
        else if(value == 'AC'){
            display.innerText = "";
        }

        else if(value == 'sign'){
            operand1 = parseFloat(text)
            operand1 = -1* operand1;
            display.textContent ="";
            display.textContent += operand1; 
        }
        else if(value == '.'){
            if(text.length && !text.includes('.')){
                display.textContent = text + '.';
            }
        }
        else{
            display.innerText += value;
        }
    });
}