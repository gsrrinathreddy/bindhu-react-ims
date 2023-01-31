
import { ordered,restocked } from '../cakeSlice';
import * as React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import flowercake from '../../../Assets/cake1.jpg';
import chocolatecake from '../../../Assets/cake2.jpg';
import weddingcake from '../../../Assets/cake3.jpg';
import darkfantesycake from '../../../Assets/cake4.jpg';
import chocoveneelacake from '../../../Assets/cake5.jpg';
import pineapplecake from '../../../Assets/cake6.jpg';
import kitkatcake from '../../../Assets/cake7.jpg';
// import desginedcake from '../../../Assets/cake8.jpg';
import chocoballcake from '../../../Assets/cake9.jpg';
import creamychoco from '../../../Assets/cake10.jpg';
import pandacake from '../../../Assets/cake11.jpg';
import chocoslicecake from '../../../Assets/cake12.jpg';
import anniversarycake from '../../../Assets/cake13.jpg';
import oreocake from '../../../Assets/cake14.jpg';
import kittycake from '../../../Assets/cake15.jpg';
import cinderellacake from '../../../Assets/cake16.jpg';
import gemscake from '../../../Assets/cake17.jpg';
import darkforestcake from '../../../Assets/cake18.jpg';
import sprinklescake from '../../../Assets/cake19.jpg';
import redvelvetcake from '../../../Assets/cake20.jpg';
import { Box } from '@mui/system';
import IMSCard from '../../../components/IMSCard';
import { Button, Grid } from '@mui/material';

export default function CakeView(){
    
    const cakeList=[
        {
            title:'Flower Cake',
            photo:flowercake,
            actualPrice:800,
            discountPrice:500,
            rating:3.8,
            sellingstatus:'Best Seller'
        },
        {
            title:'Chocolate Cake',
            photo:chocolatecake,
            actualPrice:1400,
            discountPrice:1200,
            rating:4.2 ,
            sellingstatus:'Premium'
        },
        {
            title:'Wedding Cake',
            photo:weddingcake,
            actualPrice:2500,
            discountPrice:2200,
            rating:4.5,
            sellingstatus:'Best Seller'
        },
        {
            title:'Dark Fantesy Cake',
            photo:darkfantesycake,
            actualPrice:1000,
            discountPrice:850,
            rating:4.8,
            sellingstatus:'Best Seller'
        },
        {
            title:'Choco Veneela Cake',
            photo:chocoveneelacake,
            actualPrice:950,
            discountPrice:800,
            rating:4.7,
            sellingstatus:'Premium'
        },
        {
            title:'Pine Apple Cake',
            photo:pineapplecake,
            actualPrice:800,
            discountPrice:650,
            rating:4.5,
            sellingstatus:'Best Seller'
        },
        {
            title:'Kikatcake',
            photo:kitkatcake,
            actualPrice:1100,
            discountPrice:900,
            rating:4.8,
            sellingstatus:'Best Seller'
        },
        {
            title:'Chocoball Cake',
            photo:chocoballcake,
            actualPrice:900,
            discountPrice:700,
            rating:4.7,
            sellingstatus:'Best Seller'
        },
        {
            title:'Creamy Choco Cake',
            photo:creamychoco,
            actualPrice:700,
            discountPrice:500,
            rating:3.8,
            sellingstatus:'Best Seller'
        },
        {
            title:'Panda Cake',
            photo:pandacake,
            actualPrice:1150,
            discountPrice:900,
            rating: 4.0,
            sellingstatus:'Best Seller'
        },
        {
            title:'Choco Slice Cake',
            photo:chocoslicecake,
            actualPrice:950,
            discountPrice:750,
            rating:4.5,
            sellingstatus:'Best Seller'
        },
        {
            title:'Anniversary Cake',
            photo:anniversarycake,
            actualPrice:1000,
            discountPrice:850,
            rating:4.3,
            sellingstatus:'Best Seller'

        },
        {
            title:'Oreo Cake',
            photo:oreocake,
            actualPrice:1000,
             discountPrice:800,
             rating:4.7,
             sellingstatus:'Best Seller'
        },
        {
            title:'Kitty Cake',
            photo:kittycake,
            actualPrice:1100,
             discountPrice:900,
             rating:4.2,
             sellingstatus:'Premium'
        },
        {
            title:'Cinderella Cake',
            photo:cinderellacake,
            actualPrice:1000,
             discountPrice:850,
             rating:4.8,
             sellingstatus:'Best Seller'
        },
        {
            title:'Gems Cake',
            photo:gemscake,
            actualPrice:900,
             discountPrice:800,
             rating:4.1,
             sellingstatus:'Best Seller'
        },
        {
            title:'Dark Forest Cake',
            photo:darkforestcake,
             actualPrice:950,
             discountPrice:700,
             rating:4.6,
             sellingstatus:'Best Seller'
        },
        {
            title:'Sprinkles Cake',
            photo:sprinklescake,
             actualPrice:1000,
             discountPrice:800,
             rating:4.5,
             sellingstatus:'Best Seller'
         },
         {
             title:'Redvelvet Cake',
             photo:redvelvetcake,
             actualPrice:1500,
             discountPrice:1200,
             rating:4.8,
             sellingstatus:'Premium'
           
         }
    ]
let ordername='Cake'


    // const dispatch=useDispatch();
    // const numOfCakes=useSelector((state)=>state.cake.numOfCakes);
    // console.log('no of cakes',numOfCakes);
    // const order2=1;
    
    
        
    return(
        <>
            
            <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 5, sm: 10, md: 12 }} sx={{background:'pink', pt:5}}>
            {
                cakeList.map(item=>{
                    return(
                        <Grid item display='flex' justifyContent='center' xs={5} sm={4} md={4} pt={4} >
                            
                        <IMSCard title={item.title}
                                 photo={item.photo}
                                  actualPrice={item.actualPrice}
                                 discountPrice={item.discountPrice}
                                 rating={item.rating}
                                 sellingstatus={item.sellingstatus}
                                ordername={ordername}
                                order = {ordered}
                                 
                        ></IMSCard>
                        </Grid>
                        
                    )
                })
            }
            </Grid>
        
           
        </>
    )
}






 {/* <h3>Number Of Cakes :{(numOfCakes<order2)? 'Out Of Stock' :  numOfCakes} </h3>
        
        <Button onClick={()=>{dispatch(ordered(1))}}> order</Button>
        <Button onClick={()=>{
            dispatch(restocked(1))     
        }}>
        CakesRestocked
        
        </Button> */}