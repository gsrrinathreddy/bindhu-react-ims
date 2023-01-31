import { Box } from "@mui/system";
import { useSelector } from "react-redux"
import CakeView from "../../features/cake/CakeView"

export default function Cakes(){
    let orders=useSelector((state)=>state.cake.ordercakes);
    return(
        <>
         {/* <h2>
            Love at first bite!!!
        </h2> */}
        {/* <center>

        </center> */} 
       {/* <h3> Cakes <IMSCart badgeContent={orders}></IMSCart></h3> */}
        <Box sx={{margin:"40px"}}>
        <CakeView >
        </CakeView> 
        </Box> 
      
        
        </>
    )
}
