import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "players": [
        {
            "id": 1,
            "name": "Rahul Tripathi",
            "basePrice": 1.5,
            "rating": 8.5,
            "role": "Bat",
            "team": "SRH",
            "img": "https://lh3.google.com/u/0/d/17AxmszIhi52Eu28eBm_UG7_DJDeTqjF9",
            "status": "unauctioned"
        },
        {
            "id": 2,
            "name": "Prithvi Shaw",
            "basePrice": 1,
            "rating": 8.25,
            "role": "Bat",
            "team": "DC",
            "img": "https://lh3.google.com/u/0/d/1ZjTzVnTc2Po9l1bpLdLVZRYYXbC4rxop",
            "status": "unauctioned"
        },
        {
            "id": 3,
            "name": "Manish Pandey",
            "basePrice": 1,
            "rating": 8,
            "role": "Bat",
            "team": "DC",
            "img": "https://lh3.google.com/u/0/d/1Vfdmr1jIoUS4tJXcGrHWtzpE9t-8Ohxp",
            "status": "unauctioned"
        },
        {
            "id": 4,
            "name": "Shreyas Iyer",
            "basePrice": 1.5,
            "rating": 8.75,
            "role": "Bat",
            "team": "KKR",
            "img": "https://lh3.google.com/u/0/d/1Xn1RN6NYkI-IpX73c28l-XExWcoweXZz",
            "status": "unauctioned"
        },
        {
            "id": 5,
            "name": "Yashashvi Jaiswal",
            "basePrice": 1.5,
            "rating": 8.5,
            "role": "Bat",
            "team": "RR",
            "img": "https://lh3.google.com/u/0/d/1KvDS1_2ypO_J00Jud0wrhy_D1qwWxKOQ",
            "status": "unauctioned"
        },
        {
            "id": 6,
            "name": "Tilak Verma",
            "basePrice": 0.75,
            "rating": 8.25,
            "role": "Bat",
            "team": "MI",
            "img": "https://lh3.google.com/u/0/d/1BuBqOFKhENRPKH1WAus4hNdJemURPBBt",
            "status": "unauctioned"
        },
        {
            "id": 7,
            "name": "Shubman Gill",
            "basePrice": 2,
            "rating": 9,
            "role": "Bat",
            "team": "GT",
            "img": "https://lh3.google.com/u/0/d/1wTOBeOND_Cx5-PqbvL0G5xz0VkoxGdmL",
            "status": "unauctioned"
        },
        {
            "id": 8,
            "name": "Ajinkya Rahane",
            "basePrice": 0.75,
            "rating": 7.5,
            "role": "Bat",
            "team": "CSK",
            "img": "https://lh3.google.com/u/0/d/1Tj5zy4HyNB8kzQe1ItJX5NJCKCsU9RT8",
            "status": "unauctioned"
        },
        {
            "id": 9,
            "name": "Mayank Agarwal",
            "basePrice": 1,
            "rating": 7.75,
            "role": "Bat",
            "team": "SRH",
            "img": "https://lh3.google.com/u/0/d/1x-tCbcK9Y2BGT4kv6hwh9gqc4swvwz6W",
            "status": "unauctioned"
        },
        {
            "id": 10,
            "name": "Ruturaj Gaikwad",
            "basePrice": 1.5,
            "rating": 9,
            "role": "Bat",
            "team": "CSK",
            "img": "https://lh3.google.com/u/0/d/1n38OYd9SnL0Ldr575gpC-fwTC8Xsc5bE",
            "status": "unauctioned"
        },
        {
            "id": 11,
            "name": "Devdutt Padikkal",
            "basePrice": 0.75,
            "rating": 8,
            "role": "Bat",
            "team": "RR",
            "img": "https://lh3.google.com/u/0/d/1YMkj3OrUP8fhQ8h_LjTO3S6iyL_WJKQQ",
            "status": "unauctioned"
        },
        {
            "id": 12,
            "name": "Nitish Rana",
            "basePrice": 0.5,
            "rating": 8,
            "role": "Bat",
            "team": "KKR",
            "img": "https://lh3.google.com/u/0/d/1ADWG4Fz_P1RLEb8PbKvIAMECyFUtUrPo",
            "status": "unauctioned"
        },
        {
            "id": 13,
            "name": "Rinku Singh",
            "basePrice": 1.5,
            "rating": 8.5,
            "role": "Bat",
            "team": "KKR",
            "img": "https://lh3.google.com/u/0/d/17z2Ycjx6650sc3t3L2O9QL-GegEBGctH",
            "status": "unauctioned"
        },
        {
            "id": 14,
            "name": "Sai Sudharsan",
            "basePrice": 0.5,
            "rating": 7.5,
            "role": "Bat",
            "team": "GT",
            "img": "https://lh3.google.com/u/0/d/1j1lCXzhMIjzgrm75iDNt9Cqehx83pR2s",
            "status": "unauctioned"
        },
        {
            "id": 15,
            "name": "Kane Williamson",
            "basePrice": 1.5,
            "rating": 8.75,
            "role": "Bat",
            "team": "GT",
            "img": "https://lh3.google.com/u/0/d/1AK0jhO97rspHt3rE_3VvIGOMSgMxQHze",
            "status": "unauctioned"
        },
        {
            "id": 16,
            "name": "Rassie van der Dussen",
            "basePrice": 1,
            "rating": 8.25,
            "role": "Bat",
            "team": "RR",
            "img": "https://lh3.google.com/u/0/d/1aeW3LceP4x8ZhFdS6GV5oLLvXURNFOT6",
            "status": "unauctioned"
        },
        {
            "id": 17,
            "name": "Steve Smith",
            "basePrice": 1,
            "rating": 8,
            "role": "Bat",
            "team": "DC",
            "img": "https://lh3.google.com/u/0/d/1vQvOWoc5ysxIBYG6JKkgZjD0wvQ_fNuI",
            "status": "unauctioned"
        },
        {
            "id": 18,
            "name": "Jason Roy",
            "basePrice": 1.5,
            "rating": 8,
            "role": "Bat",
            "team": "KKR",
            "img": "https://lh3.google.com/u/0/d/1g8ggIWcz4QPoxmU90TKRhmJ7c4ikzBAo",
            "status": "unauctioned"
        },
        {
            "id": 19,
            "name": "Chris Lynn",
            "basePrice": 1,
            "rating": 8,
            "role": "Bat",
            "team": "MI",
            "img": "https://lh3.google.com/u/0/d/1VyezNiWlqXz29v89cXtYLRXTtK3NsCbt",
            "status": "unauctioned"
        },
        {
            "id": 20,
            "name": "David Miller",
            "basePrice": 1.5,
            "rating": 9,
            "role": "Bat",
            "team": "GT",
            "img": "https://lh3.google.com/u/0/d/15TlBISjbnW1AKgnQnHCFPryOHvyODhc5",
            "status": "unauctioned"
        },
        {
            "id": 21,
            "name": "Finn Allen",
            "basePrice": 0.75,
            "rating": 8.25,
            "role": "Bat",
            "team": "RCB",
            "img": "https://lh3.google.com/u/0/d/1-1YXsejegVq9irZKZrMrSOVBLqm5wqX8",
            "status": "unauctioned"
        },
        {
            "id": 22,
            "name": "Shimron Hetmyer",
            "basePrice": 1.5,
            "rating": 8.5,
            "role": "Bat",
            "team": "RR",
            "img": "https://lh3.google.com/u/0/d/1ppRsLINuevS-uHywqSXRyHQM9_pNUR2j",
            "status": "unauctioned"
        },
        {
            "id": 23,
            "name": "Devon Conway",
            "basePrice": 1.5,
            "rating": 8.75,
            "role": "Bat",
            "team": "CSK",
            "img": "https://lh3.google.com/u/0/d/16hdxS6ZG8dFAll9QNPMbIov7lJYL7pVU",
            "status": "unauctioned"
        },
        {
            "id": 24,
            "name": "Dewald Brewis",
            "basePrice": 0.75,
            "rating": 8,
            "role": "Bat",
            "team": "MI",
            "img": "https://lh3.google.com/u/0/d/1NdsQp0Rq1c71HDptBkf0gwsZtfTKof7v",
            "status": "unauctioned"
        },
        {
            "id": 25,
            "name": "Tim David",
            "basePrice": 1.5,
            "rating": 8.5,
            "role": "Bat",
            "team": "MI",
            "img": "https://lh3.google.com/u/0/d/1kY6T7kt9PjYtFqS45OmjZKNWFwY70a1F",
            "status": "unauctioned"
        },
        {
            "id": 26,
            "name": "Joe Root",
            "basePrice": 0.5,
            "rating": 7.75,
            "role": "Bat",
            "team": "RR",
            "img": "https://lh3.google.com/u/0/d/1ExQXBKw_ph4USZ_VZtvSFQWMzQyhlZar",
            "status": "unauctioned"
        },
        {
            "id": 27,
            "name": "Temba Bavuma",
            "basePrice": 0.5,
            "rating": 7.75,
            "role": "Bat",
            "team": "SRH",
            "img": "https://lh3.google.com/u/0/d/1F_SDuvAjGoWKmIlGXGuiRxwto1TwlJys",
            "status": "unauctioned"
        },
        {
            "id": 28,
            "name": "Kyle Mayers",
            "basePrice": 1,
            "rating": 8,
            "role": "Bat",
            "team": "LSG",
            "img": "https://lh3.google.com/u/0/d/1KDtDR0DIRsFoLnLiYNOGvelWxESWodqV",
            "status": "unauctioned"
        },
        {
            "id": 29,
            "name": "Rilee Rossouw",
            "basePrice": 1,
            "rating": 8,
            "role": "Bat",
            "team": "DC",
            "img": "https://lh3.google.com/u/0/d/1lHJyVMun4pSH36yVc86BT_xSA2nAEcPI",
            "status": "unauctioned"
        },
        {
            "id": 30,
            "name": "Glenn Phillips",
            "basePrice": 0.75,
            "rating": 7.75,
            "role": "Bat",
            "team": "SRH",
            "img": "https://lh3.google.com/u/0/d/1Fjj4LveWMol37-FJGqHCw0HuIf9ZEVic",
            "status": "unauctioned"
        },
        {
            "id": 31,
            "name": "Tristan Stubbs",
            "basePrice": 0.75,
            "rating": 7.75,
            "role": "Bat",
            "team": "MI",
            "img": "https://lh3.google.com/u/0/d/1Q5FvSox6TjgRLMi_wfIgONQ1TsEJMSpk",
            "status": "unauctioned"
        },
        {
            "id": 32,
            "name": "Harry Brook",
            "basePrice": 1.5,
            "rating": 8.5,
            "role": "Bat",
            "team": "SRH",
            "img": "https://lh3.google.com/u/0/d/1mwIAXQmauJRLp465u_O3suWOnI2asv5l",
            "status": "unauctioned"
        },
        {
            "id": 33,
            "name": "Riyan Parag",
            "basePrice": 0.5,
            "rating": 7.25,
            "role": "Bat",
            "team": "RR",
            "img": "https://lh3.google.com/u/0/d/16dE9A9ar_S5NgdzbrlPwfAeLSwa5BIPW",
            "status": "unauctioned"
        },
        {
            "id": 34,
            "name": "Rajat Patider",
            "basePrice": 0.4,
            "rating": 8,
            "role": "Bat",
            "team": "RCB",
            "img": "https://lh3.google.com/u/0/d/1aY6Y058essPCXnjLDHTfATmtq51_kp2g",
            "status": "unauctioned"
        },
        {
            "id": 35,
            "name": "Shahrukh Khan",
            "basePrice": 0.5,
            "rating": 8.25,
            "role": "Bat",
            "team": "DC",
            "img": "https://lh3.google.com/u/0/d/1o9u0z-wyOMmmhMjPQG8RFuy1CEqRmwp3",
            "status": "unauctioned"
        },
        {
            "id": 36,
            "name": "Priyam Garg",
            "basePrice": 0.5,
            "rating": 7.25,
            "role": "Bat",
            "team": "DC",
            "img": "https://lh3.google.com/u/0/d/1UeUAsR1ZbBibEVXwoviso5ANREsssfKl",
            "status": "unauctioned"
        },
        {
            "id": 37,
            "name": "Mandeep Singh",
            "basePrice": 0.4,
            "rating": 7,
            "role": "Bat",
            "team": "KKR",
            "img": "https://lh3.google.com/u/0/d/1Zyi0gZ4JTBZaI-4JyaLfdnK25TkilhMp",
            "status": "unauctioned"
        },
        {
            "id": 38,
            "name": "Ayush Badoni",
            "basePrice": 0.5,
            "rating": 8,
            "role": "Bat",
            "team": "LSG",
            "img": "https://lh3.google.com/u/0/d/1Sf4YluXX9VybMjN8peEWzHC2r8xNtbuz",
            "status": "unauctioned"
        },
        {
            "id": 39,
            "name": "Safaraz Khan",
            "basePrice": 0.5,
            "rating": 7,
            "role": "Bat",
            "team": "DC",
            "img": "https://lh3.google.com/u/0/d/14Xa-ANxMBUFx1_l3MVqZWrvfX6h_Tsp-",
            "status": "unauctioned"
        },
        {
            "id": 40,
            "name": "Ripal Patel",
            "basePrice": 0.5,
            "rating": 7.5,
            "role": "Bat",
            "team": "DC",
            "img": "https://lh3.google.com/u/0/d/1lrs0mPoO4fNgA2F3-BRf3eFMvJX7cjdA",
            "status": "unauctioned"
        },
        {
            "id": 41,
            "name": "Anukul Roy",
            "basePrice": 0.2,
            "rating": 7.75,
            "role": "Bat",
            "team": "KKR",
            "img": "https://lh3.google.com/u/0/d/1IwWZ-vDzhs5OKyBm-Jg9-CwmR0tVmnzJ",
            "status": "unauctioned"
        },
        {
            "id": 42,
            "name": "Nehal Wadhera",
            "basePrice": 0.5,
            "rating": 7.5,
            "role": "Bat",
            "team": "MI",
            "img": "https://lh3.google.com/u/0/d/1TZMQuYL8E0Qr_oJWklmiDWKY5MO7JZhE",
            "status": "unauctioned"
        },
        {
            "id": 43,
            "name": "Anuj Rawat",
            "basePrice": 0.4,
            "rating": 7.5,
            "role": "Bat",
            "team": "RCB",
            "img": "https://lh3.google.com/u/0/d/1HgpOsoLosYVOByeHhxUYC7TQpkKgbEgW",
            "status": "unauctioned"
        },
        {
            "id": 44,
            "name": "Mahipal Lomror",
            "basePrice": 0.5,
            "rating": 7.75,
            "role": "Bat",
            "team": "RCB",
            "img": "https://lh3.google.com/u/0/d/11q1uiKfcmtnwJ95vsZjSRrTE15kqMQBd",
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