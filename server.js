const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let characters = {
    'neptune':{
        "English Name": "Neptune",
        "Japanese Name": "ネプテューヌ",
        "Romanji Name": "Neputūnu",
        "Nicknames": ["Neppy", "Neptuna", "Nep Nep", "Nep", "Nep-Ko", "Nep-chan", "Nepsy", "Sis", "Small Neptune", "Crapbike"],
        "Title": "CPU",
        "Occupation": "CPU of Planeptune",
        "Home": "Planeptune",
        "Race": "Goddess",
        "Gender": "Female",
        "Height": `146 cm (4'09")`,
        "Weight": "38kg (83.8 lbs)",
        "Sizes": "B73-W54-H76",
        "Cup": "A",
        "Weapon": ["Broadswords", "Katanas"],
        "Personification": "Sega Console",
        "Relatives": ["Nepgear"]

    },
    'noire':{
        "English Name": "Noire",
        "Japanese Name": "ノワール",
        "Romanji Name": "Nowāru",
        "Nicknames": ["Nowa", "Noiresy", "Loner"],
        "Title": "CPU",
        "Occupation": "CPU of Lastation",
        "Home": "Lastation",
        "Race": "Goddess",
        "Gender": "Female",
        "Height": `158 cm (5'02")`,
        "Weight": "43kg (94.8 lbs)",
        "Sizes": "B83-W56-H82",
        "Cup": "C",
        "Weapon": ["Short Swords"],
        "Personification": "Playstation Consoles",
        "Relatives": ["Uni"]
    },
    'vert':{
        "English Name": "Vert",
        "Japanese Name": "ベール",
        "Romanji Name": "Bēru",
        "Nicknames": ["Bert", "Thunder T*ts", "Vertsy"],
        "Title": "CPU",
        "Occupation": "CPU of Leanbox",
        "Home": "Leanbox",
        "Race": "Goddess",
        "Gender": "Female",
        "Height": `163cm (5'04")`,
        "Weight": "48kg (105.8 lbs)",
        "Sizes": "B93-W61-H87",
        "Cup": "F",
        "Weapon": ["Spears"],
        "Personification": "Xbox Consoles",
        "Relatives": []
    },
    'blanc':{
        "English Name": "Blanc",
        "Japanese Name": "ブラン",
        "Romanji Name": "Buran",
        "Nicknames": ["Blanny", "Blanny Blanny Bii", "Blancsy"],
        "Title": "CPU",
        "Occupation": "CPU of Lowee",
        "Home": "Lowee",
        "Race": "Goddess",
        "Gender": "Female",
        "Height": `144cm (4'09")`,
        "Weight": "36kg (79.4 lbs)",
        "Sizes": "B71-W53-H77",
        "Cup": "A",
        "Weapon": ["Hammers"],
        "Personification": "Nintendo Consoles",
        "Relatives": ["Ram", "Rom"]
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