var replaceChain = (newBlocks) => {
  if (isValidChain(newBlocks) && newBlocks.length > blockchain.length) {
      console.log('La blockchain reçue est valide. Remplacer la blockchain actuelle par la blockchain reçue.');
      blockchain = newBlocks;
      broadcast(responseLatestMsg());
  } else {
      console.log('La blockchain reçue est invalide.');
  }
};