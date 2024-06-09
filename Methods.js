// Methods in javascript...

const engine = {
    start(adverb) {
      console.log(`The engine starts up ${adverb}...`);
    },  
    // anonymous arrow function with no args
    sputter: () => {
      console.log('The engine sputters...');
    },
  };
  
  engine.start('noisily');
  engine.sputter();
  