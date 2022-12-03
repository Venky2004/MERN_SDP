import React, { Component } from 'react'

export class Canari extends Component {

  componentDidMount() {

    (function(d, m){
        var kommunicateSettings = 
            {"appId":"348e0b20e7391acace1be598427b4fcc","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});

  }

  render() {
    return (
      <div>
        <center><h1>OUR CHATBOT</h1></center>
      </div>
    )
  }
}

export default Canari