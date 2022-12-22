// Here the value is stored in new variable x 
function myFunction() {
                    var img= document.getElementById('image');
                    var x = document.getElementById("myText").value;
                    if (x == "alma") {
                                x = "Good day";
                                img.src = 'alma.jpeg';
            
                                }
                    else {
                                img.src = 'kemia.png';
                    }
                    let soMany = 10;
                    document.getElementById("demo").innerHTML = (`This is ${soMany} times easier! ${x}`);
                }