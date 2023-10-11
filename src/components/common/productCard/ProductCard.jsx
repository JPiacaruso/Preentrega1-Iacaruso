import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ProductCard = ({ item }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="image ${item.title}"
        height="180"
        image={item.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="h6" color="text.primary">
          $ {item.price} .-
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined">
          Ver Mas
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
