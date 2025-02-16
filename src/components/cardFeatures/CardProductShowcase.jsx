import {Card,CardHeader,CardBody,Typography,}from"@material-tailwind/react";
  export function CardProductShowcase({image,header,paragraf}) {
    return (
      <Card className="  "
      style={{backgroundColor:"#D2D2D2"}}>
        <CardHeader color="blue-gray" className="relative max-h-72 ">
          <img
          className="w-full h-full"
            src={image}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-4">
            {header}
          </Typography>
          <Typography>
            {paragraf}
          </Typography>
        </CardBody>
      </Card>
    );
  }