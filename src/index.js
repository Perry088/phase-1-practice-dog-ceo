console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded',
function fetchDogImages(){
    const apiUrl = 'https://dog.ceo/api/breeds/image/random/4'
    fetch(apiUrl)
    .then(res => res.json())
    .then (data =>{
        const dogImagesContainer = document.getElementById('dog-image-container')
        dogImagesContainer.innerHTML = '';

        if (data.status === 'sucess'){
            const dogImageURLs = data.message;
            dogImageURLs.forEach(url => {
                const imgElement = document.createElement('img')
                imgElement.src =url
                imgElement.alt = 'dog'
                dogImagesContainer.appendChild(imgElement)
            })
        } else{
            console.error('failed to fetch dog images')
        }
})
.catch(error => {
    console.error('error fetching dog images', error)
})
})

const breedUrl = "https://dog.ceo/api/breeds/list/all"

let dog_list = []
fetch(breedUrl)
    .then(response => response.json)
    .then(data => {
        dog_list = data.message
        const dogBreeds = document.getElementById('dog-breeds')
        for(dog in dog_list){
            let ul =document.createElement('ul')
            let node = document.createTextNode(dog)
            ul.appendChild(node)
            dogBreeds.appendChild(ul)
        }
    })
