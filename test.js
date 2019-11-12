console.log(module);

function job() { 

	return 

	new  Promise(function(resolve, reject) { 

	reject(); 

	}); 

}

let promise = job();

promise

.then(function() {

    console.log('Success 1');

})

.then(function() {

    console.log('Success 2');

})

.then(function() {

    console.log('Success 3');

})

.catch(function() {

    console.log('Error 1');

})

.then(function() {

    console.log('Success 4');

});

// var str = 'arjun';
// var str ="1011001100110"
// console.log(str.substring(1,4));
// console.log(str.substr(1,3));
// console.log(str.split(0,4));

