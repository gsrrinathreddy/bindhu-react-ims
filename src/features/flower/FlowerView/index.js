import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import IMSCard from "../../../components/IMSCard";
import pinkrose from '../../../Assets/pinkrose.jpg';
import redblossom from '../../../Assets/redblossom.jpg';
import WhiteAndRedRoses from '../../../Assets/WhiteAndRedRoses.jpg';
import whiteroses from '../../../Assets/whiteroses.jpg';
import  yellow  from '../../../Assets/yellow.jpg';
import rose from '../../../Assets/rose.jpg';
import gerberas from '../../../Assets/gerberas.jpg';
import mixed from '../../../Assets/mixed.jpg';
import mixrose from '../../../Assets/mixrose.jpg';


export default function FlowerView(){
    const FlowerList=[
        {
            title:'Pink Rose',
            photo:pinkrose,
            actualPrice:1000,
            discountPrice:800,
            rating:4.5,
            sellingstatus:'Best Seller' 
        },
        {
            title:'Red Blossom',
            photo:redblossom,
            actualPrice:1300,
            discountPrice:1100, 
            rating:4.2,
            sellingstatus:'Best Seller'
        },
        {
            title:'White and Red Roses',
            photo:WhiteAndRedRoses,
            actualPrice:1500,
            discountPrice:1200, 
            rating:4.6,
            sellingstatus:'Premium'
        },
        {
            title:'White Roses',
            photo:whiteroses,
            actualPrice:1100,
            discountPrice:850, 
            rating:4.8,
            sellingstatus:'Best Seller'
        },
        {
            title:'Yellow Flowers',
            photo:yellow,
            actualPrice:1000,
            discountPrice:800, 
            rating:4.5,
            sellingstatus:'Best Seller'
        },
        {
            title:'Red Rose',
            photo:rose,
            actualPrice:1500,
            discountPrice:1250, 
            rating:4.2,
            sellingstatus:'Best Seller'
        },
        {
            title:'mixed',
            photo:mixed,
            actualPrice:1200,
            discountPrice:1000,
            rating:4.1,
            sellingstatus:'Best Seller'
             
        },
        {
            title:'Gerberas',
            photo:gerberas,
            actualPrice:1100,
            discountPrice:950, 
            rating:4.5,
            sellingstatus:'Best Seller'
        },
        {
            title:'Mixed Rose',
            photo:mixrose,
            actualPrice:1200,
            discountPrice:900, 
            rating:4.2,
            sellingstatus:'Premium'
        }
    ]
    let ordername='Flower'
     
    return(
        <>
        <Box sx={{margin:'25px'}} >
     <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 5, sm: 10, md: 12 }} sx={{background:'pink'}}>
       {
      
        FlowerList.map(item=>{
            return(
                <Grid item display='flex' justifyContent='center' xs={4}  >
                <IMSCard     title={item.title}
                             photo={item.photo}
                             actualPrice={item.actualPrice}
                             discountPrice={item.discountPrice}
                             sellingstatus={item.sellingstatus}
                             rating={item.rating}      
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