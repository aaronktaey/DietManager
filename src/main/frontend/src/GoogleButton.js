import { useEffect } from "react";
import { gapi } from "gapi-script";
import axios from "axios";

const clientId =
    "54088883439-vjqo4c1u6727cdtj175sf8kbbsvuup7l.apps.googleusercontent.com";

const GoogleButton = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId,
        scope: "email",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  return (
      <div>
      </div>
  );
};

export default GoogleButton;