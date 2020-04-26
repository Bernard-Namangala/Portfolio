import React, { useState } from "react";
import Typist from "react-typist";
import ParticleEffectButton from "react-particle-effect-button";
import { Spring } from "react-spring/renderprops";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Page from "react-page-loading";
import PropTypes from "prop-types";
import MyContext from "./Context";

const Intro = (props) => {
  const [
    first_button_hidden_status,
    first_button_hidden_status_updater,
  ] = useState(false);
  const [
    second_button_hidden_status,
    second_button_hidden_status_updater,
  ] = useState(false);
  const [
    first_button_animating_status,
    first_button_animating_updater,
  ] = useState(false);
  const [
    second_button_animating_status,
    second_button_animating_updater,
  ] = useState(false);

  const button_data = {
    color: "rgb(253, 166, 4)",
    direction: "left",
    size: 4,
    speed: 1,
    particlesAmountCoefficient: 1.5,
    oscillationCoefficient: 3,
  };

  const delaythis = (button_id) => {
    if (button_id === 1) {
      _onToggle(1);
    } else {
      _onToggle(2);
    }
    setTimeout(function () {
      if (button_id === 1) {
        document.getElementById("first-button").click();
      } else {
        document.getElementById("second-button").click();
      }
    }, 1800);
  };

  const _onToggle = (button_id) => {
    if (button_id === 1) {
      if (first_button_animating_status) return;

      first_button_animating_updater(true);
      first_button_hidden_status_updater(!first_button_hidden_status);
    } else {
      if (second_button_animating_status) return;

      second_button_animating_updater(true);
      second_button_hidden_status_updater(!second_button_hidden_status);
    }
  };

  return (
    <MyContext.Consumer>
      {(context) => (
        <Page {...props.loader}>
          <motion.div {...props.Dynamic_page_animations}>
            {/* <div className="row" id="intro"> */}
            <div
              id="intro-heading"
              className="text-center mt-5 white-text shake"
            >
              <h1>
                {/* <Typist.Delay ms={1050} /> */}
                {context.introduction_main}{" "}
                <span className="text-primary">{context.first_name}.</span>
              </h1>
              <Typist>
                <Typist.Delay ms={1100} />
                <h4>
                  <span>{context.introduction_typed}</span>
                </h4>
              </Typist>
              <Spring
                from={{ marginLeft: -10000 }}
                to={{ marginLeft: 0 }}
                config={{ delay: 2200, duration: 3000 }}
              >
                {(configs) => (
                  <div style={configs}>
                    <h5>Lets turn your idea into reality.</h5>
                    <ParticleEffectButton
                      hidden={first_button_hidden_status}
                      {...button_data}
                    >
                      <Link
                        to="/contact"
                        className="d-none"
                        id="first-button"
                      ></Link>
                      <button
                        className="btn btn-lg btn-tempt"
                        onClick={() => delaythis(1)}
                      >
                        Contact me
                      </button>
                    </ParticleEffectButton>
                    &nbsp; &nbsp;
                    <ParticleEffectButton
                      hidden={second_button_hidden_status}
                      {...button_data}
                    >
                      <Link
                        to="/portfolio"
                        className=".d-none"
                        id="second-button"
                      ></Link>
                      <button
                        className="btn btn-lg btn-tempt"
                        onClick={() => delaythis(2)}
                      >
                        See my work
                      </button>
                    </ParticleEffectButton>
                  </div>
                )}
              </Spring>
            </div>
            {/* </div> */}
          </motion.div>
        </Page>
      )}
    </MyContext.Consumer>
  );
};
Intro.propTypes = {
  Dynamic_page_animations: PropTypes.object,
  loader: PropTypes.object,
};
export default Intro;
