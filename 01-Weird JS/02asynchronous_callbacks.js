//js engine looks at the event queue for async events like click, http req.
//!js engine wont run click until execution stach is empty
//*any events happening outside of engine is placed in the execution queue and if exe. stack is empty, it process the event in the order they happen

//long running function
function waitThreeSec(){
    var ms = 3000 + new Date().getTime();
    while(new Date()<ms){}  //this runs for 3 seconds
    console.log('wait 3 sec function');
}

function clickHandler(){
    console.log('click event happened');
}

//listen for the click event 
document.addEventListener('click',clickHandler);

waitThreeSec();
console.log('finisheed global executon');
document.
//it will finish all execution and only see for event
