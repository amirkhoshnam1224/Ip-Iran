import {Card,CardHeader,CardBody,Typography,}from"@material-tailwind/react";
  export function CardProductShowcase({image,header,paragraf}) {
    return (
      <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
          className="w-12/12"
            src={image}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {header}
          </Typography>
          <Typography>
            {paragraf}
          </Typography>
        </CardBody>
      </Card>
    );
  }