const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let characters = {
    'neptune':{
        "Name": "Neptune",
        "Nicknames": ["Neppy", "Neptuna", "Nep Nep", "Nep", "Nep-Ko", "Nep-chan", "Nepsy", "Sis", "Small Neptune", "Crapbike"],
        "Title": "CPU",
        "Race": "Goddess"
    },
    'noire':{
        "Name": "Noire",
        "Nicknames": ["Nowa", "Noiresy", "Loner"],
        "Title": "CPU",
        "Race": "Goddess"
    },
    'vert':{
        "Name": "Vert",
        "Nicknames": ["Bert", "Thunder T*ts", "Vertsy"],
        "Title": "CPU",
        "Race": "Goddess"
    },
    'blanc':{
        "Name": "Blanc",
        "Nicknames": ["Blanny", "Blanny Blanny Bii", "Blancsy"],
        "Title": "CPU",
        "Race": "Goddess"
    },
    'unknown':{
        'age': 'unknown',
        'birthName': 'unknown',
        'birthdate': 'unknown', 
        'birthLocation': 'unknown',
        'origin': 'unknown',
        'genre': 'unknown',
        'occupation': 'unknown',
        'yearsActive': 'unknown',
        'labels': 'unknown',
        'children': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const charName = request.params.name.toLowerCase()
    if(characters[charName]){
        response.json(characters[charName])
    }else{
        response.json(rappers['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})