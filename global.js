// console.log(global);
//

console.log( __filename );

console.log( __dirname );


var log = {
  error: (str)=>{
    console.error(str);
  },
  log: (str)=>{
    console.log(str);
  }
}

log.error('hhh');
log.log('hhh2');
