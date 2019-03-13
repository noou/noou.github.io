if (a === undefined) {
    alert('введите а!');
} else {
    if (a > 0){
        alert('+0');
    } else {
        alert('-0');
    }
}


if (a === undefined) {
	alert('Введите a!');
} else {
	if (a > 0) {
		alert('Больше нуля!');
	} else {
		alert('Меньше нуля!');
	}
}

if (day >= 1 && day <= 10) {
    decade = 'one';
} if (day >= 11 && day <= 20) {
    decade = 'two';
} if (day >= 21 && day <= 30) {
    decade = 'three';
}
alert(decade);




var month  = 12
var mm = 1

if (month == 12 || month <= 2) {
    mm = 'z';
}
if (month >= 3 && month <= 5) {
    mm = 'v';
}
if (month >= 6 && month <=8) {
    mm = 'l';
}
if (month >= 9 && month <= 11) {
    mm = 'o';
}
alert(mm);




var str = 'abcde'
if (str[0] == 'a') {
    alert('KK');
} else {
    alert('bad');
}



var str = '12345'
if (str[0] == '1' || str[0] == '2' || str[0] == '3') {
    alert('KK');
} else {
    alert('BAD');
}




var str = '424';
var sum = Number(str[0])+Number(str[1])+Number(str[2]);
alert(sum);


var str = '123312'
if (Number(str[0])+Number(str[1])+Number(str[2]) == Number(str[3])+Number(str[4])+Number(str[5])) {
    alert('KK');
} else {
    alert('BAD');
}
