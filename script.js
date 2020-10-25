(function() {
    const quotes = [
      {
        quote:
          '"The greatest glory in living lies not in never falling,but in rising every time we fall."',
        author: "Nelson Mandela"
      },
      {
        quote:
         '"The way to get started is to quit talking and begin doing. "',
        author: "Walt Disney"
      },
      {
        quote:
          '"Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma – which is living with the results of other people\'s thinking."',
        author: "Steve Jobs "
      },
      {
        quote: '"If life were predictable it would cease to be life, and be without flavor."',
        author: "Eleanor Roosevelt"
      },
      {
        quote:
          '"If you look at what you don\'t have in life, you\'ll never have enoughife is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. "',
        author: "Oprah Winfrey"
      },
    ];
  
    const btn = document.getElementById("generate-btn");

    btn.addEventListener("click", function() {
      let random = Math.floor(Math.random() * quotes.length);
      console.log(random);
  
      document.getElementById("quote").textContent = quotes[random].quote;
      document.querySelector(".author").textContent = quotes[random].author;
    });
  })();