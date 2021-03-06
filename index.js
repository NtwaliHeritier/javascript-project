window.addEventListener('load', () => {
    display_countries()
})

let countries = []
let base_url = "https://restcountries.com/v3.1/"
let url = ""
let param = "all"
document.querySelector("#regions").addEventListener("change", (e) => {
    param = `region/${e.target.value}`
    const container = document.querySelector(".container")
    container.innerHTML = ""
    display_countries()
})

document.querySelector(".search-country").addEventListener("keyup", (e) => {
    param = `name/${e.target.value}`
    const container = document.querySelector(".container")
    container.innerHTML = ""
    display_countries()
})

const display_countries = async() => {
    url = base_url + param
    const data = await fetch(url)
    const response =  await data.json()
    const container = document.querySelector(".container")
    if(response) {
        for(let country of response) {
            const country_div = document.createElement("div")
            add_country_div_class(country_div)
    
            const img = document.createElement("img")    
            img.setAttribute("src", country.flags.png)
            add_img_class(img)
    
            const country_name = document.createElement("h4")
            country_name.innerText = country.name.common
            add_country_name_class(country_name)
    
            const population = document.createElement("h5")
            population.innerHTML = `<b>Population:</b> ${country.population}`
    
            const region = document.createElement("h5")
            region.innerHTML = `<b>Region:</b> ${country.region}`
    
            const specs = document.createElement("div")
            specs.classList.add("ml-2")
    
            specs.appendChild(country_name)
            specs.appendChild(population)
            specs.appendChild(region)
            country_div.appendChild(img)
            country_div.appendChild(specs)
            container.appendChild(country_div)
        }
    }
}

const add_country_div_class = (country_div) => {
    country_div.setAttribute("class", "w-1/5")
    country_div.classList.add("m-1/40")
    country_div.classList.add("rounded-lg")
    country_div.classList.add("shadow-lg")
}

const add_img_class = (img) => {
    img.classList.add("w-full")
    img.classList.add("h-3/5")
}

const add_country_name_class = (country_name) => {
    country_name.classList.add("font-bold")
    country_name.classList.add("mt-4")
}

