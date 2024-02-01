import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "players": [
        {
            "set": "A",
            "id": 1,
            "name": "Rahul Tripathi",
            "basePrice": "1.5cr",
            "rating": 8.5,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "A",
            "id": 2,
            "name": "Prithvi Shaw",
            "basePrice": "1cr",
            "rating": 8.25,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "A",
            "id": 3,
            "name": "Manish Pandey",
            "basePrice": "1cr",
            "rating": 8,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "A",
            "id": 4,
            "name": "Shreyas Iyer",
            "basePrice": "1.5cr",
            "rating": 8.75,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "A",
            "id": 5,
            "name": "Yashashvi Jaiswal",
            "basePrice": "1.5Cr",
            "rating": 8.5,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "A",
            "id": 6,
            "name": "Tilak Verma",
            "basePrice": "75L",
            "rating": 8.25,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "A",
            "id": 7,
            "name": "Shubman Gill",
            "basePrice": "2cr",
            "rating": 9,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "A",
            "id": 8,
            "name": "Ajinkya Rahane",
            "basePrice": "75L",
            "rating": 7.5,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "A",
            "id": 9,
            "name": "Mayank Agarwal",
            "basePrice": "1cr",
            "rating": 7.75,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "A",
            "id": 10,
            "name": "Ruturaj Gaikwad",
            "basePrice": "1.5Cr",
            "rating": 9,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "A",
            "id": 11,
            "name": "Devdutt Padikkal",
            "basePrice": "75L",
            "rating": 8,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "A",
            "id": 12,
            "name": "Nitish Rana",
            "basePrice": "50L",
            "rating": 8,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "A",
            "id": 13,
            "name": "Rinku Singh",
            "basePrice": "1.5Cr",
            "rating": 8.5,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "A",
            "id": 14,
            "name": "Sai Sudharsan",
            "basePrice": "50L",
            "rating": 7.5,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "B",
            "id": 15,
            "name": "Kane Williamson",
            "basePrice": "1.5cr",
            "rating": 8.75,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "B",
            "id": 16,
            "name": "Rassie van der Dussen",
            "basePrice": "1cr",
            "rating": 8.25,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "B",
            "id": 17,
            "name": "Steve Smith",
            "basePrice": "1cr",
            "rating": 8,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "B",
            "id": 18,
            "name": "Jason Roy",
            "basePrice": "1.5cr",
            "rating": 8,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "B",
            "id": 19,
            "name": "Aaron Finch",
            "basePrice": "75L",
            "rating": 7.75,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "B",
            "id": 20,
            "name": "Chris Lynn",
            "basePrice": "1cr",
            "rating": 8,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "B",
            "id": 21,
            "name": "David Miller",
            "basePrice": "1.5cr",
            "rating": 9,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "B",
            "id": 22,
            "name": "Finn Allen",
            "basePrice": "75L",
            "rating": 8.25,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "B",
            "id": 23,
            "name": "Matthew Short",
            "basePrice": "50L",
            "rating": 7.5,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "B",
            "id": 24,
            "name": "Shimron Hetmyer",
            "basePrice": "1.5cr",
            "rating": 8.5,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "B",
            "id": 25,
            "name": "Devon Conway",
            "basePrice": "1.5Cr",
            "rating": 8.75,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "B",
            "id": 26,
            "name": "Dewald Brewis",
            "basePrice": "75L",
            "rating": 8,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "B",
            "id": 27,
            "name": "Tim David",
            "basePrice": "1.5Cr",
            "rating": 8.5,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "B",
            "id": 28,
            "name": "Joe Root",
            "basePrice": "50L",
            "rating": 7.75,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "B",
            "id": 29,
            "name": "Temba Bavuma",
            "basePrice": "50L",
            "rating": 7.75,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "B",
            "id": 30,
            "name": "Kyle Mayers",
            "basePrice": "1Cr",
            "rating": 8,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "B",
            "id": 31,
            "name": "Rilee Rossouw",
            "basePrice": "1Cr",
            "rating": 8,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "B",
            "id": 32,
            "name": "Glenn Phillips",
            "basePrice": "75L",
            "rating": 7.75,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "B",
            "id": 33,
            "name": "Donovan Ferreira",
            "basePrice": "50L",
            "rating": 7.75,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "B",
            "id": 34,
            "name": "Tristan Stubbs",
            "basePrice": "75L",
            "rating": 7.75,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "B",
            "id": 35,
            "name": "Harry Brook",
            "basePrice": "1.5Cr",
            "rating": 8.5,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "B",
            "id": 36,
            "name": "Bhanuka Rajapaksa",
            "basePrice": "50L",
            "rating": 7.75,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "B",
            "id": 37,
            "name": "Litton Das",
            "basePrice": "50L",
            "rating": 7.5,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "C",
            "id": 38,
            "name": "Riyan Parag",
            "basePrice": "40L",
            "rating": 7.25,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "C",
            "id": 39,
            "name": "Rajat Patider",
            "basePrice": "50L",
            "rating": 8,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "C",
            "id": 40,
            "name": "Shahrukh Khan",
            "basePrice": "75L",
            "rating": 8.25,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "C",
            "id": 41,
            "name": "Priyam Garg",
            "basePrice": "40L",
            "rating": 7.25,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "C",
            "id": 42,
            "name": "Mandeep Singh",
            "basePrice": "20L",
            "rating": 7,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "C",
            "id": 43,
            "name": "Ayush Badoni",
            "basePrice": "40L",
            "rating": 8,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "C",
            "id": 44,
            "name": "Safaraz Khan",
            "basePrice": "20L",
            "rating": 7,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "C",
            "id": 45,
            "name": "Ripal Patel",
            "basePrice": "40L",
            "rating": 7.5,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "C",
            "id": 46,
            "name": "Anukul Roy",
            "basePrice": "50L",
            "rating": 7.75,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "C",
            "id": 47,
            "name": "Nehal Wadhera",
            "basePrice": "50L",
            "rating": 7.5,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "C",
            "id": 48,
            "name": "Anuj Rawat",
            "basePrice": "40L",
            "rating": 7.5,
            "role": "Batsman",
            "status": "unauctioned"
        },
        {
            "set": "C",
            "id": 49,
            "name": "Mahipal Lomror",
            "basePrice": "50L",
            "rating": 7.75,
            "role": "Batsman",
            "status": "unauctioned"
        }
    ]
}


const auctionSlice = createSlice({
    name: "auction",
    initialState,
    reducers: {
        setSold: (state, action) => {
            state.players[action.payload.index].status = "sold"
        },
        setUnSold: (state, action) => {
            state.players[action.payload.index].status = "unsold"
        },
    }
})

export const { setSold, setUnSold } = auctionSlice.actions
export default auctionSlice.reducer