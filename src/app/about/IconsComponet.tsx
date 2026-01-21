"use client";
import { useState } from "react";
import {
  AndroidStudioIcon,
  ArtificialIntelligenceIcon,
  AWSIcon,
  AzureDevIcon,
  DjangoIcon,
  ExpressIcon,
  GraphQLIcon,
  JavascriptIcon,
  MaterialUIcon,
  MongoDBIcon,
  MySQLIcon,
  NextJSIcon,
  NodeIcon,
  PostgresSQLIcon,
  PostmanIcon,
  PythonIcon,
  ReactIcon,
  ReduxIcon,
  SASSIcon,
  SocketIcon,
  SwaggerIcon,
  TailwindIcon,
  TypeScriptIcon,
} from "../components/Icon";

export const skills = [
  { name: "ReactJS", Icon: ReactIcon },
  { name: "NodeJS", Icon: NodeIcon },
  { name: "TypeScript", Icon: TypeScriptIcon },
  { name: "JavaScript", Icon: JavascriptIcon },
  { name: "Redux", Icon: ReduxIcon },
  { name: "GraphQL", Icon: GraphQLIcon },
  { name: "AWS", Icon: AWSIcon },
  { name: "ExpressJS", Icon: ExpressIcon },
  { name: "Django", Icon: DjangoIcon },
  { name: "Azure", Icon: AzureDevIcon },
  { name: "Material-UI", Icon: MaterialUIcon },
  { name: "MySQL", Icon: MySQLIcon },
  { name: "NextJS", Icon: NextJSIcon },
  { name: "PostgresSQL", Icon: PostgresSQLIcon },
  { name: "Postman", Icon: PostmanIcon },
  { name: "Python", Icon: PythonIcon },
  { name: "SASS", Icon: SASSIcon },
  { name: "Socket.IO", Icon: SocketIcon },
  { name: "Swagger", Icon: SwaggerIcon },
  { name: "TailwindCSS", Icon: TailwindIcon },
  { name: "MongoDB", Icon: MongoDBIcon },
  { name: "Android Studio", Icon: AndroidStudioIcon },
  { name: "AI", Icon: ArtificialIntelligenceIcon },
];

function IconComponent() {
  const [showMore, setShowMore] = useState(false);
  const visibleSkills = showMore ? skills : skills.slice(0, 12);

  return (
    <>
      {visibleSkills.map((skill, index) => (
        <div key={index} className="flex flex-col items-center">
          <skill.Icon className="w-[100px] h-[100px]" />
          <span className="text-sm font-medium text-center">{skill.name}</span>
        </div>
      ))}

      <button
        className="badge rounded-2xl bg-base-100 text-sm text-bold hover:text-white hover:bg-black cursor-pointer"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </>
  );
}

export default IconComponent;
