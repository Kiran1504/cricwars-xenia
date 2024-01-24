import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Form, InputGroup, Modal } from "react-bootstrap";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const [showInstructions, setShowInstructions] = useState(false);
    const [showSignupLogin, setShowSignupLogin] = useState(false);
    const [loginModal, setLoginModal] = useState(true);

    //navbar contents
    const navItems = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Instructions',
            // link: '/'
            onClick: () => {
                setShowInstructions(!showInstructions);
                setShow(false);
            }
        },
        {
            name: 'Leaderboard',
            link: '/leaderboard'
        },
        {
            name: 'signup/login',
            // link: '/'
            onClick: () => {
                setShowSignupLogin(!showSignupLogin);
                setShow(false);
            }
        },
    ]



    return (
        <>
            <div className='flex flex-col sm:flex-row justify-between w-full h-16 gap-4 my-2 sm:items-center border-b-2'>
                <div className="flex items-center px-4">

                    <GiHamburgerMenu className='text-white text-2xl sm:hidden' onClick={() => setShow(!show)} />
                    <div className='p-3'>
                        <h1 className='text-center font-semibold text-2xl sm:text-3xl'>CRICWARS</h1>
                    </div>
                </div>
                <div className="pr-4 z-10 bg-[#242424] min-h-max">
                    <ul className={`{hidden sm:flex ${show ? "flex flex-col " : "hidden"} justify-center gap-4}`}>
                        {navItems.map((item, i) => (

                            item.link ?
                                (<a key={i} href={`${item.link}`} className='text-white'>
                                    <li
                                        className="hover:bg-blue-500 hover:text-white rounded-3xl p-2 px-4"
                                        onClick={item.onClick}>
                                        {item.name}
                                    </li>
                                </a>)
                                :
                                (<li
                                    className="hover:bg-blue-500 rounded-3xl p-2 px-4"
                                    key={i}
                                    onClick={item.onClick}>
                                    {item.name}</li>)

                        ))}
                    </ul>
                </div>
            </div>




            {/* instructions modal */}


            <Modal
                show={showInstructions}
                onHide={() => setShowInstructions(false)}>
                <Modal.Header closeButton>
                    <Modal.Title className="modal_title">Instructions</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, youre reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <button className="bg-blue-500 text-black p-1 px-3 rounded-xl my-4 font-semibold text-lg" onClick={() => setShowInstructions(false)}>
                        Close
                    </button>
                </Modal.Footer>
            </Modal>



            {/* signup/Login modal */}

            <Modal show={showSignupLogin} onHide={() => setShowSignupLogin(false)} className="">
                {
                    loginModal ?
                        (
                            <>
                                <Modal.Header closeButton>
                                    <Modal.Title className="modal_title">Login</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1" className="label">Email</InputGroup.Text>
                                        <Form.Control className="inputbox"
                                            placeholder="useremail@example.com"
                                            aria-label="email"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>

                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon2" className="label">Password</InputGroup.Text>
                                        <Form.Control className="inputbox"
                                            placeholder="Password"
                                            aria-label="Password"
                                            aria-describedby="basic-addon2"
                                        />
                                    </InputGroup>
                                </Modal.Body>
                                <Modal.Footer>
                                    <button
                                        className="bg-blue-500 text-black p-1 px-3 rounded-xl my-4 font-semibold text-lg"
                                    >
                                        Login
                                    </button>
                                    <button
                                        className="bg-gray-500 text-black p-1 px-3 rounded-xl mx-2 my-4 font-semibold text-lg"
                                        onClick={() => setShowSignupLogin(false)}
                                    >
                                        Close
                                    </button>
                                    <p className="text-sm">don&apos;t have a account {" "}
                                        <span
                                            className="underline text-blue-500"
                                            onClick={() => setLoginModal(false)}
                                        >
                                            click here
                                        </span>
                                    </p>
                                </Modal.Footer>
                            </>
                        ) : (
                            <>
                                <Modal.Header closeButton>
                                    <Modal.Title className="modal_title">Signup</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1" className="label">Email</InputGroup.Text>
                                        <Form.Control className="inputbox"
                                            placeholder="useremail@example.com"
                                            aria-label="email"
                                            aria-describedby="basic-addon1"
                                        />
                                    </InputGroup>

                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon2" className="label">Password</InputGroup.Text>
                                        <Form.Control className="inputbox"
                                            placeholder="Password"
                                            aria-label="Password"
                                            aria-describedby="basic-addon2"
                                        />
                                    </InputGroup>
                                </Modal.Body>
                                <Modal.Footer>
                                    <button className="bg-blue-500 text-black p-1 px-3 rounded-xl my-4 font-semibold text-lg">
                                        Signup
                                    </button>

                                    <button
                                        className="bg-gray-500 text-black p-1 px-3 rounded-xl mx-2 my-4 font-semibold text-lg"
                                        onClick={() => setShowSignupLogin(false)}
                                    >
                                        Close
                                    </button>
                                    <p className="text-sm">already have a account {" "}
                                        <span
                                            className="underline text-blue-500"
                                            onClick={() => setLoginModal(true)}
                                        >
                                            click here
                                        </span>
                                    </p>
                                </Modal.Footer>
                            </>
                        )
                }
            </Modal>
        </>
    )
}

export default Navbar
