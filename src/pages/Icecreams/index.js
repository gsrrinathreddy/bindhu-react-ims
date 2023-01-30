import { useSelector } from "react-redux";
import IcecreamView from "../../features/icecream/IcecreamView";
import IMSCart from "../../components/IMSCart";

export default function Icecreams(){
    let abc=useSelector((state)=>state.icecream.ordericecream);
    
    return(
        <>
            <h2>It's never cold for icecream</h2>
           
            {/* <img src="https://media.gettyimages.com/id/157472912/photo/ice-cream-composition-on-a-bowl.jpg?s=612x612&w=gi&k=20&c=AniWX1OhaarUxCkgjUoKiA3bKVllK0upCylW6Z0PCMQ="></img>
            <h3> ICECREAMS <IMSCart badgeContent={abc}></IMSCart></h3> */}
            <IcecreamView></IcecreamView>
        </>
    )
}