async function getMeaning() {
    
    const wordInput = document.getElementById("wordInput").value   
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput}`

    try {
        const response = await axios.get(apiUrl)
        const data = response.data;

        document.getElementById("meaning").innerHTML = data[0].meanings[0].definitions[0].definition
    }catch (error) {
        console.log(error)
    }
}