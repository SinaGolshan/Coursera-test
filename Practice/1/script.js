document.addEventListener("DOMContentLoaded",
    function(event){
        document.querySelector("button").addEventListener("click",function(){
            $ajaxUtils.sendGetRequest("data/name.txt", function(request){
                var name = request.responceText;
                console.log("var is : " + var);
                console.log(request);
                document.querySelector("#target").textContent = "Hello " + name + "!";
            })
        })
    })
