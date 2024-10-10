let array = []

function addToArray(){
    let input1 = document.getElementById('input1');
    let input2 = document.getElementById('input2').value;


  if (input2) {
    array.push(input2); 
    fruits(); 
    document.getElementById('input2').value = ''; 
  }
};

function fruits() {
    let input1 = document.getElementById('input1');


    input1.innerHTML = '';


    array.forEach((item, index) => {
    let btn = document.createElement('button');
    btn.innerHTML = item;
    btn.className = 'arrayButton';
    
    input1.appendChild(btn); 
})};


function pushElement(){
    let push = prompt("Enter an element to push");
    let input1 = document.getElementById('input1');
   
    if(push){
        array.push(push); 
        fruits(); 
        document.getElementById('input2').value = '';  
    }



};

function popElement(){
    let msg = document.getElementById('msg');

    if(pop){
        array.pop(pop); 
        fruits(); 
        msg.innerHTML = 'Last element removed using pop!.'
    }



};


function shiftElement(){
    let msg = document.getElementById('msg');

    if(shift){
        array.shift(shift); 
        fruits(); 
        msg.innerHTML = 'First element removed using shift()!.'
    }



};


function unshiftElement(){
    let unshift = prompt("Enter an element to unshift");
    let input1 = document.getElementById('input1');
    let msg = document.getElementById('msg');

    if(unshift){
        array.unshift(unshift); 
        fruits(); 
        msg.innerHTML = 'Element added using unshift()!.' 
    }



};


function sliceElement(){
    let start = prompt("Enter start index for slice");
    let end = prompt("Enter last index for slice");
    
    
     start = parseInt(start);
     end = parseInt(end);
 
   
    if (!isNaN(start) && !isNaN(end) && start >= 0 && end <= array.length) {
       
         let slicedArray = array.slice(start, end);
        
         alert("Sliced Array: " + slicedArray.join(", "));
     } else {
         alert("Invalid index. Please enter valid start and end index.");
    }


};

function spliceElement(){
    let index = prompt("Enter index to splice");
    let element = prompt("Enter number of Elements to remove.");
    let input1 = document.getElementById('input1');

    index= parseInt(index);
    element = parseInt( element);

    if (!isNaN(index) && !isNaN(element) && index >= 0 && element <= array.length) {
        let spliceArray = array.splice(index, element);
        
        alert("Splice Array: " + spliceArray.join(", "));
        fruits(); 
    } else {
        alert("Invalid index. Please enter valid index and element.");

}
};
 



    
   






