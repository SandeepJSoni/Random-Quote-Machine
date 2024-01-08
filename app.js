const quotes = [
    ["Dreaming, after all, is a form of planning.", "Gloria Steinem"],
  ["You can never cross the ocean until you have the courage to lose sight of the shore.", "Christopher Columbus"],
  ["Everything you’ve ever wanted is on the other side of fear.", "George Addair"],
  ["The most common way people give up their power is by thinking they don’t have any.", "Alice Walker"],
  ["The question isn’t who is going to let me; it’s who is going to stop me.", "Ayn Rand"]
  ]
  
  
  const colors = ["red",
   "orange",
  "green",
  "blue",
  "purple",
  "violet",
  "brown",
  "yellowgreen"];
  
  let quoteText ="";
  let quoteAuthor="";
  let color="";
  
  
  function getColor() {
    const cIndex= Math.floor(Math.random() * colors.length);
    
    console.log("index selected: " + cIndex );
   // alert(colors[cIndex])
    console.log(colors[cIndex]);
    color = colors[cIndex];
    //return colors[cIndex]
  }
  
  function getQuoteandAuthor(document) {
    const qIndex= Math.floor(Math.random() * quotes.length);
    console.log("quotes index selected: " + qIndex );
    //alert(quotes[qIndex][0])
    
    console.log(quotes[qIndex][1]);
    quoteText = quotes[qIndex][0];
    quoteAuthor = quotes[qIndex][1];
    getColor(document);
  
   console.log("quoteText: " + quoteText);
   /* document.getElementById("text").innerHTML = quoteText;
   document.getElementById("author").innerHTML = "-" + quoteAuthor; */
  }
  
  function getQuote(document){
    //console.clear();
    getQuoteandAuthor(document);  
    
  } ;
  
function updateDoc(document) {
    $(document).ready(function() {
        console.log("Updating page");

        $("body, .dyn-bgcolor").css("background-color", color);
        $("quote, .dyn-color").css("color", color);
        
        $("#text").html(quoteText);
        $("#author").html("-" + quoteAuthor);
        //console.log($("#author").html());
    });
}