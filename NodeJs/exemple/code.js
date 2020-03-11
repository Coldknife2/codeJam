var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

expect = 'begin';
rl.on('line', function(line) {
  debugger;
  console.log("Bonjour, j'écris dans le stdout, cela ne sera pas affiché lors de l'interaction");
  debugger;
  if(line === "WRONG_ANSWER")
  {
    console.error("Bonjour, j'écris dans le stderr, cela sera vu à la fin de l'exécution");
    process.exit(0);
  }
})
.on('close',function(){
    process.exit(0);
});