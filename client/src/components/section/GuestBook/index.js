import React, { useState } from "react";
import { GuestBookBox } from "../../styles/GuestBookBox";
import Fade from "react-reveal/Fade";
import Upload from "./Upload";
import List from "./List";
import { pinkTop } from "../../../assets/images";

export default function GuestBook() {
  const [visible, setVisible] = useState(false);

  return (
    <GuestBookBox className="relative spacerB bg-pink ">
      <Fade bottom cascade delay={500}>
        <div className="bg-img-top">
          <img src={pinkTop} alt="" width="100%" className="bg-point" />
        </div>
      </Fade>

      <Fade bottom delay={500}>
        <h2 className="title pointColor">guest book</h2>
      </Fade>

      <section className="flex flex-col">
        <Fade bottom delay={500}>
          <h3>방명록</h3>
          <div
            className="line"
            style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}
          ></div>
        </Fade>
        <div
          className="btn btn-upload w-90"
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {visible ? "X" : "글쓰기"}
        </div>

        {visible && <Upload visible={visible} setVisible={setVisible} />}

        {!visible && <List />}
      </section>
    </GuestBookBox>
  );
}
