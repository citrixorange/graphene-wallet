let imp = import('../wasm-hello-world/pkg');

imp
  .then(wasm => {
      mod = wasm;
      addCounter();
      let b = document.getElementById('add-counter');
      if (!b) throw new Error('Unable to find #add-counter');
      b.addEventListener('click', ev => addCounter());
  })
  .catch(console.error);

export { Counter };