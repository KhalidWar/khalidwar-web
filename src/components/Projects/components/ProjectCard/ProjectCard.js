import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export default function ProjectCard({
  title,
  subtitle,
  headerImage,
  headerImageAlt,
  listItems,
  buttonOnClick,
}) {
  return (
    <Card>
      {/* Card Header */}
      <CardMedia
        component="img"
        height="350"
        image={headerImage}
        alt={headerImageAlt}
      />

      {/* Card Content */}
      <CardContent>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {subtitle}
        </Typography>
        <hr />

        {/* Bullet list and its items */}
        {listItems}
      </CardContent>

      {/* Card Actions */}
      <CardActions>
        <Button
          variant="contained"
          color="error"
          fullWidth
          onClick={buttonOnClick}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
