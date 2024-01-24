/* eslint-disable react/prop-types */
import virat from "../assets/virat.png"


const Card = ({ name, imgsrc, basePrice = "18Cr", buyPrice = "25Cr", team, rating }) => {
    return (
        <div className="w-[250px] bg-[#1d1d1d] rounded-2xl">
            <div>
                {/* <img src={imgsrc} alt="image" className="w-[75%] my-3 mx-auto" /> */}
                <img src={virat} alt="image" className="w-[75%] my-3 mx-auto" />
            </div>
            <div className="text-white border-y-2 p-4">
                <p className="my-1">{name}Virat Kohli</p>
                <p className="my-1">Base Price: {basePrice}</p>
                <p className="my-1">Buy Price: {buyPrice}</p>
                <p className="my-1">Rating: {rating}</p>
                <p className="my-1 shadow-sm shadow-white px-1 rounded-lg">Team: {team}</p>
            </div>
        </div>
    )
}

export default Card
