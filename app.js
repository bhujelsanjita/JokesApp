function generateJokes(){
    let jokes = new XMLHttpRequest();
    document.getElementById('jokesarea').innerHTML = "Generating please wait.....";
    jokes.open("GET",'https://api.api-ninjas.com/v1/jokes?limit=1',true);
    jokes.setRequestHeader("X-Api-Key",'5HNtWkohSTb7hb2hfE4i6w==f1aKQ9aXq8HoTqs5');
    jokes.setRequestHeader("Content-Type","application/json");
    jokes.send();
    jokes.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            let jokesResponse = JSON.parse(this.response);
            
            document.getElementById('jokesarea').innerHTML = jokesResponse[0].joke;
            
            console.log(jokesResponse);
        }
    }
}
