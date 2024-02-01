/* eslint-disable no-unused-vars */
import Card from "../components/Card";
// import { players } from "../utils/players";
import virat from "../assets/virat.png"
import { useSelector, useDispatch } from "react-redux";
import { login } from "../reducers/authSlice";
import { Form, InputGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import { setSold, setUnSold } from "../reducers/auctionSlice";
import PlayerSearch from "../components/PlayerSearch";

const Auction = () => {

    const [searchedPlayer, setSearchedPlayer] = useState({});
    const searchPlayerHandler = (player) => {
        setSearchedPlayer(player);
    }
    const [loading, setLoading] = useState(false);
    const [isSetSelected, setIsSetSelected] = useState(false);
    const [setofP, setSetofP] = useState();

    function calculateSizeInMB(jsonObject) {
        // Convert the JSON object to a string
        const jsonString = JSON.stringify(jsonObject);

        // Calculate the size in bytes
        const bytes = new TextEncoder().encode(jsonString).length;

        // Convert bytes to megabytes
        const megabytes = bytes / (1024 * 1024);

        return megabytes.toFixed(2); // Limit to 2 decimal places
    }


    const [index, setIndex] = useState(0);
    const dispatch = useDispatch();
    const players = useSelector(state => state.players);
    const [playersList, setPlayersList] = useState();
    const [unAuctionedPlayers, setUnAuctionedPlayers] = useState([]);
    const [unsoldPlayers, setUnsoldPlayers] = useState([]);

    useEffect(() => {
        const storedPlayers = JSON.parse(localStorage.getItem('players'));
        if (storedPlayers) {
            setPlayersList(storedPlayers);
            const unauctioned = storedPlayers.filter((player) => player.status === 'unauctioned');
            const unsold = storedPlayers.filter((player) => player.status === 'unsold');
            // console.log(storedPlayers);
            setUnAuctionedPlayers(unauctioned);
            setUnsoldPlayers(unsold);
            setLoading(true);
        }
        else {
            setPlayersList(players);
            const unauctioned = players.filter((player) => player.status === 'unauctioned');
            const unsold = players.filter((player) => player.status === 'unsold');
            // console.log(players);
            setUnAuctionedPlayers(unauctioned);
            setUnsoldPlayers(unsold);
            setLoading(true);
        }
    }, [players]);
    const batsman = players.filter(player => (player.role === "Batsman" && player.status === "unauctioned"));


    const playerSold = () => {
        if (index === playersList.length - 1) {
            alert("All players are sold");
            return;
        }

        const updatedPlayers = playersList.map((player) =>
            player.id === playersList[index].id ? { ...player, status: 'sold' } : player
        );

        // Update local storage and state with the updated players list
        // localStorage.setItem('players', JSON.stringify(updatedPlayers));
        updateLocalStorage(updatedPlayers);
        setPlayersList(updatedPlayers);
        setIndex(index + 1);
    };

    const playerUnSold = () => {
        if (index === playersList.length - 1) {
            alert("All players are sold");
            return;
        }

        const updatedPlayers = playersList.map((player) =>
            player.id === playersList[index].id ? { ...player, status: 'unsold' } : player
        );

        // Update local storage and state with the updated players list
        // localStorage.setItem('players', JSON.stringify(updatedPlayers));
        updateLocalStorage(updatedPlayers);
        setPlayersList(updatedPlayers);
        setIndex(index + 1);
    };

    const updateLocalStorage = (updatedPlayers) => {
        // Filter out players with the status 'sold'
        const unauctionedAndUnsoldPlayers = updatedPlayers.filter(player => player.status !== 'sold');

        // Sort the players so that "unauctioned" players are first, followed by "unsold" players
        const sortedPlayers = unauctionedAndUnsoldPlayers.sort((a, b) => {
            if (a.status === "unauctioned" && b.status === "unsold") return -1;
            if (a.status === "unsold" && b.status === "unauctioned") return 1;
            return 0;
        });

        // Update local storage with the sorted players
        localStorage.setItem('players', JSON.stringify(sortedPlayers));
    };

    const [password, setPassword] = useState('');
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleCheckPassword = () => {
        // Replace 'yourCorrectPassword' with your actual correct password
        const correctPassword = 'Ayushisadminofcricwarswebsite2024';

        if (password === correctPassword) {
            setIsPasswordCorrect(true);
        } else {
            setIsPasswordCorrect(false);
            alert("Wrong Pass")
        }
    };

    return loading && (
        <>
            {!isPasswordCorrect ?
                <div className="w-full text-center">
                    <label className=" flex justify-center gap-4 py-4 text-lg">
                        Enter Password:
                        <input type="password" value={password} onChange={handlePasswordChange} className="text-black text-sm" />
                    </label>
                    <button onClick={handleCheckPassword} className="mx-auto my-4 text-black px-4 py-2 bg-green-400 rounded-lg">Submit</button>
                </div >
                :
                <>
                    <PlayerSearch handle={searchPlayerHandler} players={playersList} />
                    <div>
                        <div className="my-5 p-4 w-full text-center font-semibold text-4xl">
                            <h1>Auction</h1>
                        </div>
                        <div className="flex gap-4 justify-evenly items-center">
                            <div className="w-[65%]">
                                <div className="flex gap-2 flex-wrap">
                                    <div className="w-[40%]">
                                        {/* <img src={imgsrc} alt="image" className="w-[75%] my-3 mx-auto" /> */}
                                        <img src={virat} alt="image" className="my-3 mx-4 w-[90%] border-2 rounded-2xl" />
                                        <p className="my-6 mx-4 p-2 bg-[#1d1d1d] border-2 rounded-xl text-3xl text-center">{playersList[index].name}</p>
                                    </div>
                                    <div className={`w-[40%]`}>
                                        <div className="text-white text-lg p-4">
                                            <p className="my-6 border-2 p-4 rounded-xl">Base Price: {playersList[index].basePrice}</p>
                                            {/* <p className="my-6 border-2 p-4 rounded-xl">Buy Price: {playersList[index].buy_price ? playersList[index].buy_price : "25 Cr"}</p> */}
                                            <p className="my-6 border-2 p-4 rounded-xl">Rating: {playersList[index].rating}</p>
                                            <p className="my-6 border-2 p-4 rounded-xl">Role: {playersList[index].role}</p>
                                            {/* <p className="my-1 shadow-sm shadow-white px-1 rounded-lg">Team: </p> */}
                                        </div>
                                    </div>

                                </div>
                            </div>




                            <div className="w-[30%] bg-slate-200 text-black rounded-xl text-center pt-8">

                                <div className="my-5 w-full text-center">
                                    <button type="submit"
                                        className="bg-green-500 text-black p-2 px-5 rounded-xl m-4 my-2 mx-auto font-medium text-lg"
                                        onClick={playerSold}>
                                        Sold
                                    </button>
                                    <button type="submit"
                                        className="bg-red-500 text-black p-2 px-5 rounded-xl m-4 my-2 mx-auto font-medium text-lg"
                                        onClick={playerUnSold}>
                                        Unsold
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div >
                </>
            }
        </>

    )
}

export default Auction
