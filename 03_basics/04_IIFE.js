// Immediately invoked fundtion expressions(IIFE)

(function chai (){
    console.log(`DB connected`);
})();

((name) => {
    console.log(`DB connected again ${name}`)
} )("Shivam")