Avec la nouvelle vague d'exercices et de testing_tools de google, certains prennent direct en argument l'exécutable avec lequel les lancer. C'est le cas de l'exemple de l'exercice du number guessing : https://codingcompetitions.withgoogle.com/codejam/round/0000000000000130/0000000000000523 
Trouvé dans la FAQ : https://codingcompetitions.withgoogle.com/codejam/faq 

Du coup, grâce aux options de débug de node, l'idée est de lancer node en mode débug `node --inspect-brk=22763 monCode.js` et de rattacher le débugger de vsCode dessus avec les configurations de débug : https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_remote-debugging

