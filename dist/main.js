const renderer = new Renderer
const tempmanager = new TempManager

const loadPage = async () => {
    await tempmanager.getDataFromDB()
    renderer.renderData(tempmanager.cityData)
}

const handleSearch = async (cityName) =>{
    await tempmanager.getCityData(cityName)
    renderer.renderData(tempmanager.cityData)
}

$("#ask-city").on("click", function() {
    let cityName = $("#city-input").val()
    $("#city-input").val()
    handleSearch(cityName)
})


































// $(".cities").on("click", ".save-city", function() {
//     let cityName = $(this).siblings(".cityName").text()
//     tempManager.saveCity(cityName)
// })



loadPage()
