function route(pathname) {
  console.log("About to route a request for " + pathname);

  var script = require('.'+pathname);
  try{
    script();
  }catch(err){
    console.log(err);
  }
}

exports.route = route;
