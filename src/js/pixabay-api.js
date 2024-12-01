const MY_KEY ="47340673-7535cec7cd04a1914e8f8d439";

export function serchCategory(categ){
    const params = new URLSearchParams({
        key: MY_KEY, 
        q: categ, 
        image_type: "foto",
        orientation: "horizontal", 
        safesearch: true, 
    })

    return fetch(`https://pixabay.com/api/?${params}`)
    .then((response) => {
     if(!response.ok){
    throw new Error(response.statusText)
    }
    return response.json()
    })
    .catch (error => console.log(error.message))
    }
    