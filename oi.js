var counter = 1;
var limit = 10;
function addInput(divName){
     if (counter == limit)  {
          alert("You have reached the limit of adding " + counter + " inputs. You should not need more!");
     }
     else {
          var newdiv = document.createElement('div');
          newdiv.innerHTML = "Combo Card " + (counter + 1) + " <input type='number' name='myInputs[]' min='1' max='30'>";
          document.getElementById(divName).appendChild(newdiv);
          counter++;
     }
}