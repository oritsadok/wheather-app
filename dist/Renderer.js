

class Renderer {

    renderData(allCityData) {
        console.log(allCityData)
        const source = $("#result-template").html()
        const template = Handlebars.compile(source)
        let newHTML = template({ allCityData })
        $(".data").append(newHTML)
    }
}



