// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

// const api = "cf093a6"

const debounce = async () => {
    try {
        const q = document.getElementById("search").value 

        const res = await fetch(`https://www.omdbapi.com/?apikey=cf093a6&s=${q}`)

        const data = await res.json()
        console.log("data:", data)
       
        let movie = data.Search 

        return movie
    }
    catch(err)
    {
        console.log("err:", err)
    }
}


    function showDetail(el) {

        document.getElementById("movies").innerHTML=null
        el.forEach(function(el){

     
        let div = document.createElement("div")

        let image = document.createElement("img")
        image.src = el.Poster

        let name = document.createElement("h2")
        name.innerText = el.Title

        let bttn = document.createElement("button")
        bttn.innerText = "Book Now"
        bttn.setAttribute("class", "book_now")
        bttn.addEventListener("click", function(){
            localStorage.setItem("movie", JSON.stringify(el))
            window.location.href = "checkout.html"
        })

        div.append(image,name, bttn)

        document.getElementById("#movies").append(div)

    })


        

   

 }

 
