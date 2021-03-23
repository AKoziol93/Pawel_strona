import React from "react";
import "./style.css";
import Top from "./Top";
import Menu from "./Menu";
import base from "./base";

class App extends React.Component {
  state = {};

  componentDidMount() {
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }
  render() {
    return (
      <div id="mainBody">
        <Top />
        <Menu />
        <div className="bodyContent">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          vulputate condimentum enim, ac laoreet risus rutrum in. Cras ut dolor
          mollis, varius lectus eget, feugiat ante. Morbi molestie in tortor ac
          convallis. Praesent varius, mi eu pretium mattis, arcu mauris molestie
          orci, vulputate molestie mauris libero ut leo. Phasellus vel arcu
          lacus. Nulla ipsum tellus, ullamcorper ut nisi sed, venenatis
          ultricies orci. Pellentesque sed sem nisl. Integer pharetra ligula eu
          sapien hendrerit laoreet. Nulla varius sem sed tellus consectetur
          commodo. Mauris nec tempus est. Pellentesque tincidunt lorem sed
          tortor consectetur dapibus.
        </div>
      </div>
    );
  }
}
export default App;