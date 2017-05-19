var fs = require("fs");

fs.readFile('events.js', function (err, data) {
   if (err){
      console.log(err);
      return;
   }
   console.log(data.toString());
});
console.log("程序执行完毕");
