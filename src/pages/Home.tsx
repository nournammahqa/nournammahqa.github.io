import { Blob } from "@components";
import "../assets/home.css";
import { LoaderLayout } from "@layouts";
import { motion } from "framer-motion";
import { fadeIn } from "../utils";

function Home() {
  return (
    <div className="home h-full w-full relative overflow-hidden">
      <LoaderLayout>
        <div className="container mx-auto relative z-10 page-enter">
          <Blob />
        </div>
        <motion.div
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="bg-explosion lg:bg-cover lg:bg-right lg:bg-no-repeat w-full h-full absolute mix-blend-screen opacity-40"
          style={{ filter: "hue-rotate(345deg) saturate(0.65) brightness(0.72)" }}
        >
          <div className="wrapper">
            <div className="box">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </motion.div>
      </LoaderLayout>
    </div>
  );
}

export default Home;
