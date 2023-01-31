import { useSelector } from "react-redux";
import GiftView from "../../features/gift/GiftView/GiftView";
import IMSCart from "../../components/IMSCart";

export default function Gifts(){

    return(
        <>
        <h2>Best gifts for Loved one</h2>
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSekeK5t0x3Apl79orZySYNcf4NFESpqfkfRg&usqp=CAU"></img>
        <h2>GIFTS <IMSCart badgeContent={pqr}></IMSCart></h2> */}
        <GiftView></GiftView>
        </>
    )
}