document.addEventListener("DOMContentLoaded",
    function(event){


        document.querySelector("button").addEventListener("click",function(){
            $ajaxUtils.sendGetRequest("data/name.txt", function(request){
                var name = request.responseText;
                document.querySelector("#target").textContent = "Hello " + name + "!";
            })
        })

        document.querySelector("button").addEventListener("click",function(){
            $ajaxUtils.sendGetRequest("data/name.json", function(request){
                var person = JSON.parse(request.responseText);
                console.log(person);
                document.querySelector("#target2").textContent = "Hello " + person.firstName + " " + person.lastName + "age " 
                + person.age +  "!";
            })
        })        



    })