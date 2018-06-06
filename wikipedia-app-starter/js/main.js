const wiki_link = 'https://en.wikipedia.org/wiki'
const randomEndpoint = '/Special:Random'

const searchTerm = document.querySelector(".searchTerm")
const searchButton = document.querySelector(".search")
const randomButton = document.querySelector(".random")
const output = document.querySelector(".output")


function wikiSearch() {
    const api_url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchTerm.value}&format=json&callback=?`

    $.ajax({
        url: api_url,
        type: "GET",
        dataType: "json",
        success: function (data) {
            console.log(data)
            output.innerHTML = ""
            for(let i=0; i<data[1].length; i++){
                output.innerHTML += `
                <li>
                <div class="container">
                <a href="${data[3][i]}" class="titlefont"> <span class= "hoverstuff">${data[1][i]}</span></a>
                <p>${data[2][i]}</p>
                </div>
                </li>
                `
            }


            
            
            
           

           
        },
            error: function(error) {
            
            console.log("erro")
        }


    })
}

searchButton.addEventListener(`click`, wikiSearch)
randomButton.addEventListener('click', function(e){
    window.open(`${wiki_link}${randomEndpoint}`)
})