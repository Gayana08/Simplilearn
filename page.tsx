import Image from "next/image";
import Navbar from "./components/Navbar";
import Email from "./components/Email";
import Form from "./components/Form";
import Card from "./components/Card";
import Speaker from "./components/Speaker";
import Example from "./components/Example";
import Agenda from "./components/Agenda";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <div>
      <Navbar />
      <Email />
      <Form />
      <Card />
      <Speaker />
      <Example />
      <Agenda />
      <Footer />
    </div>
  );
}

