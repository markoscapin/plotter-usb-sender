// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PythonShell } from "python-shell";

export default function handler(req, res) {
  //TO DO
  /*
  1- RETRIEVE THE FILE ON THE BACK END
  2- CONVERT IT OR USE THE PROPERTY ALREADY CONVERTED IN HPGL
  3- SEND IT TO PYTHONSHELL 
  4- RUN SCRIPT OVER PYTHON
  */

  PythonShell.defaultOptions = { scriptPath: "./pages/api/python/" };
  let pyshell = new PythonShell("myScript.py");
  pyshell.on("message", (message) => console.log(message));
  let options = {
    mode: "text",
    pythonOptions: ["-u"], // get print results in real-time
    // scriptPath: 'path/to/my/scripts', //If you are having python_test.py script in same folder, then it's optional.
    args: ["shubhamk314"], //An argument which can be accessed in the script using sys.argv[1]
  };

  //WE NEED TO SET THE FUUUUULL PATH TO THE SCRIPT!!!
  PythonShell.run("myScript.py", options, function (err, results) {
    if (err) throw err;
    console.log("finished");
    console.log("results: %j", results);
  });
  res.status(200).json({ name: "John Doe" });
}
