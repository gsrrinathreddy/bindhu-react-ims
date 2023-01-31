import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IMSCart from '../IMSCart';
import { useDispatch,useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { orderedicecream as icecreamorder } from '../../features/icecream/IceCreamSlice';
import { ordered as cakeordered} from '../../features/cake/cakeSlice';
import {ordered as chocolateorder} from '../../features/chocolate/chocolateSlice'
import { ordered as flowersorder } from '../../features/flower/flowerSlice';
import { ordered as giftorder } from '../../features/gift/GiftSlice';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box, color } from '@mui/system';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import IMSChip from '../IMSChip';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function IMSCard(props) {
  let dispatch=useDispatch();

  let title=props.title;
  let  photo=props.photo;
  let actualPrice=props.actualPrice;
  let discountPrice=props.discountPrice;
  let rating=props.rating;
  let sellingStatus=props.sellingstatus;
  let ordername=props.ordername;
  let color="success"
  let colwarning="warning"
  let discount=actualPrice-discountPrice;
  let discountedPercentage=Math.floor((discount/actualPrice)*100);
  let dpoff=discountedPercentage+"% off ";
  let orderPlaced = props.order;

   
  const [expanded, setExpanded] = React.useState(false);
  const [qty,setQty]=React.useState(0)

  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#f50707',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  });
  

  const handleExpandClick = () => {
    setExpanded(!expanded);

  
  };
 
  let params={
    name:title,
    actualPrice:actualPrice,
    discountPrice:discountPrice,
    qty:parseInt(qty)
  }
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        
        title={title}
       
      />
      <Card sx={{width:"250px",marginLeft:"40px",marginRight:"40px"}}>
        <Box sx={{position: "relative"}}>
      <CardMedia
        component="img"
        height="194"
        image={photo}
       />
       <Box sx={{position: "absolute",alignItems:'flex-end', color: "white",top: 0,left: "85%", transform: "translateX(-50%)",}}>
       <Stack spacing={1} >
         <IMSChip label={sellingStatus} color={color}></IMSChip>
           </Stack>
           <Stack direction="row" flexDirection='row'justifyContent='flex-end' spacing={1}>
           <IMSChip label={rating} color={colwarning}></IMSChip>
           </Stack>
            </Box>
       </Box>
       </Card>
       <CardContent>
        <Typography variant="body2" color="text.secondary">
          <strike>Acutal Price :₹ {actualPrice}</strike> <br></br>
                 <h3>Discount Price:₹ {discountPrice} ({dpoff})</h3> 
                 
                 
                 <br></br>
          
          
          {/* <Typography component="legend">Rating</Typography>
      <StyledRating
        name="customized-color"
        defaultValue={0}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={1}
        icon={<FavoriteIcon/>}
        max={5}
      /> */}
          
        </Typography>
      </CardContent>
       
      <CardActions disableSpacing>
      <TextField id="outlined-basic" label="Quantity" variant="outlined" defaultValue={0} onChange={(e)=>setQty(e.currentTarget.value)} />
      <Box>
       
       
        <Button onClick={()=> dispatch(orderPlaced(params))}>  
             Add
        </Button>
        
        </Box>

        {/* <IconButton aria-label="add to favorites" >
          <FavoriteIcon />
        </IconButton> */}

        <IMSCart Content={qty} ></IMSCart>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

    
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          
          
        </CardContent>
      </Collapse>
    </Card>
  );
}