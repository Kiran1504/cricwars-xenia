import { useState } from "react";
import MyModal from "../components/MyModal";
import { Form, InputGroup } from "react-bootstrap";
import Card from "../components/Card";
import { players } from "../utils/players";


const AdminPanel = () => {
    const [teamName, setTeamName] = useState("");
    const [leaderName, setLeaderName] = useState("");

    const [CreateTeamModal, setCreateTeamModal] = useState(false);
    const [viewTeamModal, setViewTeamModal] = useState(false);
    const [viewPlayersModal, setViewPlayersModal] = useState(false);
    // const [startAuctionModal, setStartAuctionModal] = useState(false);

    const teams = [
        {
            "name": "Chennai Super Kings",
            "teamLeader": "CSK"
        },
        {
            "name": "Delhi Capitals",
            "teamLeader": "DC"
        },
        {
            "name": "Punjab Kings",
            "teamLeader": "PBKS"
        },
        {
            "name": "Kolkata Knight Riders",
            "teamLeader": "KKR"
        },
        {
            "name": "Mumbai Indians",
            "teamLeader": "MI"
        },
        {
            "name": "Rajasthan Royals",
            "teamLeader": "RR"
        },
        {
            "name": "Royal Challengers Bangalore",
            "teamLeader": "RCB"
        },
        {
            "name": "Sunrisers Hyderabad",
            "teamLeader": "SRH"
        }
    ]

    const saveTeam = () => {
        console.log(teamName, leaderName);
    }

    return (
        <>
            <div className="w-full h-full flex flex-col justify-center items-center my-10 p-5">
                <button
                    onClick={() => setCreateTeamModal(true)}
                    className="w-[15%] px-5 py-3 my-5 rounded-lg border-2">
                    Create Team
                </button>
                <button
                    onClick={() => setViewTeamModal(true)}
                    className="w-[15%] px-5 py-3 my-5 rounded-lg border-2">
                    View Team
                </button>
                <button
                    onClick={() => setViewPlayersModal(true)}
                    className="w-[15%] px-5 py-3 my-5 rounded-lg border-2">
                    View Players
                </button>
                <button
                    // onClick={() => setStartAuctionModal(true)}
                    className="w-[15%] px-5 py-3 my-5 rounded-lg border-2">
                    Start Auction
                </button>
            </div>

            {/* create team modal */}
            <div>
                <MyModal
                    title={"Create Team"}
                    show={CreateTeamModal}
                    setShow={setCreateTeamModal}
                    click={() => setCreateTeamModal(false)}
                    btn2={{
                        text: "Save",
                        click: saveTeam
                    }}
                >
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1" className="label">Team Name</InputGroup.Text>
                        <Form.Control
                            className="inputbox"
                            name="teamName"
                            value={teamName}
                            onChange={(e) => setTeamName(e.target.value)}
                            placeholder="Team Name"
                            aria-label="teamName"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon2" className="label">Leader Name</InputGroup.Text>
                        <Form.Control
                            className="inputbox"
                            name="leaderName"
                            value={leaderName}
                            onChange={(e) => setLeaderName(e.target.value)}
                            placeholder="Leader Name"
                            aria-label="Leader Name"
                            aria-describedby="basic-addon2"
                        />
                    </InputGroup>

                </MyModal>
            </div>

            {/* view teams modal */}
            <div>
                <MyModal
                    title={"Team List"}
                    show={viewTeamModal}
                    setShow={setViewTeamModal}
                    click={() => setViewTeamModal(false)}
                >
                    <div className="">
                        {teams.map((team, index) => (
                            <div key={index} className="grid grid-cols-5 items-center w-full my-2 p-1 px-2 border-2 border-b-gray-500 rounded-lg">
                                <span className="text-2xl font-semibold col-span-3 text-left px-2">{team.name}</span>
                                <span className="text-lg font-semibold col-start-5 px-2">{team.teamLeader}</span>
                            </div>
                        ))}
                    </div>

                </MyModal>
            </div>

            {/* view players modal */}

            <div className={`bg-[#eee] w-[100%] ${viewPlayersModal ? "inline" : "hidden"} absolute top-[12%] `}>
                <div className="flex flex-col justify-center items-center w-[95%] mx-auto bg-[#eee] rounded-2xl">

                    <div className="modal_title my-5 text-black">
                        <h1>Players List</h1>
                    </div>
                    <div className="flex justify-center gap-2 flex-wrap">
                        {players.map((player, i) =>
                            <Card
                                key={i}
                                name={player.name}
                                imgsrc={player.image}
                                basePrice={player.baseprice}
                                buyPrice={player.buy_price}
                                rating={player.rating}
                            // team={"RCB"}
                            />
                        )}

                    </div>
                    <div className="my-5">
                        <button
                            className="bg-gray-500 text-black p-2 px-5 rounded-xl m-4 mt-2 mb-0 font-medium text-lg"
                            onClick={() => setViewPlayersModal(false)}>
                            Close
                        </button>
                    </div>

                </div>

            </div>

        </>
    )
}

export default AdminPanel
