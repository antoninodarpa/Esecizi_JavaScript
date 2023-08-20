function printAsyncName(callback, name) {
  setTimeout(function () {
    try {
      callback(null, "Hello");
    } catch (error) {
      console.error("Errore nel callback:", error);
    }

    setTimeout(function () {
      try {
        if (name) {
          console.log(name);
        } else {
          throw new Error("Il nome non è definito.");
        }
      } catch (error) {
        console.error("Errore nella stampa del nome:", error);
      }
    }, 2000);
  }, 1000);
}

function sayHello(err, message) {
  if (err) {
    console.error("Errore:", err);
  } else {
    console.log(message);
  }
}

printAsyncName(sayHello);
