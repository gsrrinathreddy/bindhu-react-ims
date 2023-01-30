import {Button}from'@mui/material';
import { orderedicecream,restockedicecream } from '../IceCreamSlice';
import {useDispatch,useSelector} from 'react-redux'
import {Grid} from "@mui/material";
import IMSCard from "../../../components/IMSCard"
import {Box} from "@mui/material";

import Blackforest_icecream from '../../../Assets/icecream/Blackforest_icecream.jpg';
import browine from '../../../Assets/icecream/brownie.jpg';
import butterscotch from '../../../Assets/icecream/butterscotch.jpg'
import chocolate from '../../../Assets/icecream/chocolate.jpg';
import cone from '../../../Assets/icecream/cone.jpg';
import icecreamBar from '../../../Assets/icecream/icecreamBar.jpg';
import MixedFruit from '../../../Assets/icecream/MixedFruit.jpg';
import Vanilla from '../../../Assets/icecream/Vanilla.jpg';
import Apricotbasil from '../../../Assets/icecream/Apricot-basil.jpg';
export default function IcecreamView(){

 const IceCreamList=[
    {
        title:'Blackforest icecream',
        photo:Blackforest_icecream,
        actualPrice:180,
        discountPrice:175,
        rating:4.1,
        sellingstatus:'Best Seller'
        
    },
    {
        title:'Browine',
        photo:browine,
        actualPrice:200,
        discountPrice:195,
        rating:4.8,
        sellingstatus:'Premium'
        
    },
    {
        title:'ButterScotch',
        photo:butterscotch,
        actualPrice:120,
        discountPrice:100,
        rating:4.5,
        sellingstatus:'Best Seller'
        
    },
    {
        title:'Chocolate',
        photo:chocolate,
        actualPrice:150,
        discountPrice:120,
        rating:4.7,
        sellingstatus:'Best Seller'
        
    },
    {
        title:'Cone',
        photo:cone,
        actualPrice:100,
        discountPrice:97,
        rating:4.8,
        sellingstatus:'Best Seller'
        
    },
    {
        title:'IcecreamBar',
        photo:icecreamBar,
        actualPrice:60,
        discountPrice:55,
        rating:4.2,
        sellingstatus:'Best Seller'
        
    },
    {
        title:'Vanilla',
        photo:Vanilla,
        actualPrice:100,
        discountPrice:95,
        rating:4.2,
        sellingstatus:'Best Seller'
        
    },
    {
        title:'MixedFruit',
        photo:MixedFruit,
        actualPrice:130,
        discountPrice:100,
        rating:4.5,
        sellingstatus:'Premium'
        
    },
    {
        title:'Apricotbasil',
        photo:Apricotbasil,
        actualPrice:190,
        discountPrice:175,
        rating:4.8,
        sellingstatus:'Premium'
        
    }
 ]
 let ordername='icecream'
 // const dispatch=useDispatch();
    // const numOfIcecreams=useSelector((state)=>state.icecream.noOfIcecreams);
    // const iic=1
    return(
        <>

<Box sx={{margin:'25px'}} >
     <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 5, sm: 10, md: 12 }} sx={{background:'pink'}}>
       {
      
        IceCreamList.map(item=>{
            return(
                <Grid item display='flex' justifyContent='center' xs={4}  >
                <IMSCard     title={item.title}
                             photo={item.photo}
                             actualPrice={item.actualPrice}
                             discountPrice={item.discountPrice}
                             rating={item.rating}  
                             sellingstatus={item.sellingstatus}
                             ordername={ordername}    
                ></IMSCard>
                </Grid>
            )
        })
       
       }
        </Grid>
        </Box>












           
        </>
    )
}




 {/* <h3>Number Of IceCreams:{(numOfIcecreams)<iic?'Out Of Stock':numOfIcecreams}</h3>
        <Button onClick={()=>{
            dispatch(orderedicecream(1))
        }}>
            IceCreamsOrder
        
        </Button>

        <Button onClick={()=>{
            dispatch(restockedicecream(1))     
        }}>
        IceCreamsRestocked
        
        </Button> */}