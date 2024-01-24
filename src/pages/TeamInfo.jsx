import virat from "../assets/virat.png"
import { players } from "../utils/players"

const TeamInfo = () => {




    return (
        <div>
            {/* team info */}
            <div className="w-full flex flex-col justify-start items-center">
                <div className="flex gap-4 justify-center items-center h-16 px-5 shadow-sm shadow-white">
                    <h1 className="text-2xl font-semibold px-4">Team Name</h1>
                    <h1 className="text-xl">Team Leader</h1>
                </div>
            </div>

            {/* Budget */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 p-[1rem] text-center">

                <div className="w-[100%] sm:w-[25%] bg-[#eee] text-green-700  p-[1rem] rounded-2xl shadow-lg shadow-black">
                    <h1 className="mb-2 text-lg font-semibold">Remaining Budget</h1>
                    <p className="text-xl">50,00,00,000</p>
                </div>
                <div className="w-[100%] sm:w-[25%] bg-[#eee] text-red-500 p-[1rem] rounded-2xl shadow-lg shadow-black">
                    <h1 className="mb-2 text-lg font-semibold">Amount Spent</h1>
                    <p className="text-xl">10,00,000</p>
                </div>
            </div>

            {/* players */}

            <div
                className="border-b-2 sm:w-[50%] m-auto border-white p-2 my-3 sm:my-4 rounded-xl grid grid-cols-8 sm:grid-cols-10 gap-4 items-center">
                {/* <img src={virat} alt="image" className="w-16 rounded-full col-start-1 col-span-2" /> */}
                <h1 className="text-base sm:text-xl font-medium sm:font-semibold col-start-1 sm:col-start-3 col-span-4 sm:col-span-3">Player Name</h1>
                <p className="col-start-6">rating</p>
                <p className="col-start-8 col-span-3 text-sm">Price</p>
            </div>


            <div className="sm:w-[50%] w-full border-x-2 border-zinc-700 m-auto my-4 p-2 sm:px-8 px-4">

                {players.map((player, i) =>
                    <div
                        key={i}
                        className="border-b-2 border-zinc-800 p-2 my-3 sm:my-4 rounded-xl grid grid-cols-8 sm:grid-cols-10 gap-4 items-center sm:hover:-translate-y-3 shadow-md shadow-gray-600 ">
                        <img src={virat} alt="image" className="w-16 rounded-full col-start-1 col-span-2" />
                        <h1 className="text-base sm:text-xl font-medium sm:font-semibold col-start-3 col-span-2">{player.name}</h1>
                        <p className="col-start-6">{player.rating}</p>
                        <p className="col-start-8 col-span-3 text-sm">&#8377;{`${player.buy_price >= 100 ? player.buy_price / 100 + " Cr" : player.buy_price + " L"}`}</p>
                    </div>
                )}
            </div>

        </div >
    )
}

export default TeamInfo
