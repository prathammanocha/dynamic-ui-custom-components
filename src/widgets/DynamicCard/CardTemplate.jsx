// src/widgets/Card/CardTemplate.jsx
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CardTemplate = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{data.title}</CardTitle>
        <CardDescription>{data.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{data.content}</p>
      </CardContent>
      <CardFooter>
        <p>{data.footer}</p>
      </CardFooter>
    </Card>
  );
};

export default CardTemplate;
