import Frontend from "./Frontend";
import BackendTech from "./Backend";
import Database from "./Database";
import Clouds from "./Clouds";
import APIAndDoc from "./APIAndDoc";
import AI from "./AI";

export default function TechStack() {
  return (
    <div className="px-4 py-4 font-serif">
      <AI />
      <div className="divider" />
      <Frontend />
      <div className="divider" />
      <BackendTech />
      <div className="divider" />
      <Database />
      <div className="divider" />
      <Clouds />
      <div className="divider" />
      <APIAndDoc />
    </div>
  );
}
