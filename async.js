import Viz from "@aduh95/viz.js";
import getWorker from "@aduh95/viz.js/worker";

const worker = getWorker();
const viz = new Viz({ worker });
const dot = `digraph "Argument Map" {

rankdir = "BT";
concentrate = "false";
ratio = "auto";
size = "10,10";
edge[arrowsize="1", penwidth="1"]graph [bgcolor = "transparent" ]  n0 [label=<<TABLE WIDTH="180" ALIGN="CENTER" BORDER="0" CELLSPACING="0"><TR><TD><IMG SRC="https://github.com/christianvoigt/argdown/raw/master/argdown-arrow.png?raw=true"/></TD></TR><TR><TD WIDTH="180" ALIGN="TEXT" BALIGN="CENTER"><FONT FACE="arial" POINT-SIZE="10" COLOR="#000000"><B>a</B></FONT></TD></TR></TABLE>>, margin="0.11,0.055", shape="box", style="filled, rounded", fillcolor="#1b9e77", fontcolor="#000000",  type="argument-map-node"];
  n1 [label=<<TABLE WIDTH="180" ALIGN="CENTER" BORDER="0" CELLSPACING="0"><TR><TD WIDTH="180" ALIGN="TEXT" BALIGN="CENTER"><FONT FACE="arial" POINT-SIZE="10" COLOR="#000000"><B>b</B></FONT></TD></TR></TABLE>>, margin="0.11,0.055", shape="box", style="filled, rounded", fillcolor="#1b9e77", fontcolor="#000000",  type="argument-map-node"];


  n1 -> n0 [type="attack", color="#ff0000"];

}`;
const settings = {
    images: [{path: "https://github.com/christianvoigt/argdown/raw/master/argdown-arrow.png?raw=true", width: 100, height: 100}]
}
viz
  .renderString(dot, settings)
  .then((svgString) => {
    console.log(svgString);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(
    () =>
      // You can either terminate explicitly:
      viz.terminateWorker()
    // or let it be auto-closed at the end of the process
  );