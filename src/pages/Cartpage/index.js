import { useSelector } from "react-redux"

export default function Cartpage(){
    let CakesOrder=useSelector((state)=>state.cake.ordercakes);
    let choco=useSelector((state)=>state.chocolate.orderChocolates);
    let ice=useSelector((state)=>state.icecream.ordericecream);
    let gift=useSelector((state)=>state.gift.orderGift);
    return(
        <>
        <br/> 
        <h3>Number Of Cakes :{CakesOrder}</h3>
        <h3>Number of IceCreams:{ice}</h3>
        <h3>Number of Chocolates :{choco}</h3>
        <h3>Number of Gifts :{gift}</h3>

        </>

    )
}