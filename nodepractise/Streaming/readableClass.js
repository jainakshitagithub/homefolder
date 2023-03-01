//Making our own stream

const { Readable } = require("stream");
const advices = [
  "ILU	I Love You",
  "IOU	I owe you",
  "KISS	Keep It Simple, Stupid",
  "KIT	Keep in touch",
];

class StreamActivites extends Readable {
  constructor(array) {
    super({objectMode : true});
    this.array = array, 
    this.index = 0;
  }
  _read() {
    if (this.index <= this.array.length) {
    //   const chunk = this.array[this.index];
    //   this.push(chunk);
    //   this.index += 1;
    const chunk = {
        data : this.array[this.index] , 
        index : this.index
    }
      this.index += 1;
      this.push(chunk);

    } else {
      this.push(null);
    }
  }
}

const adviceStreams = new StreamActivites(advices);
adviceStreams.on("data", (chunk) => {
  console.log(chunk);
});
adviceStreams.on("end", () => {
  console.log("done!");
});
adviceStreams.on("error", (err) => {
  console.log(err);
});
