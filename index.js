const fs = require("fs")
const mcping = require('mc-ping-updated');
const c = require("./config.json");

setInterval(() => {
mcping(c.ip, c.port, function(err, res) {
	if (err) {
		// Some kind of error
		console.error(err);
	} else {
        if(res.description.extra[1].color === "dark_red"){
            console.log(res.description.extra[1].text.replace(/\n/g, "") + ` (RED)`)
            let adf = fs.readFileSync(`motds.txt`, 'utf-8')
            if(adf.includes(res.description.extra[1].text.replace(/\n/g, ""))){
              return console.log(`motd is already in database`)
            }
            fs.open(c.file_location, 'a', 666, function( e, id ) {
                fs.write( id, res.description.extra[1].text.replace(/\n/g, "") + ` (RED)` + "\n", null, 'utf8', function(){
                  fs.close(id, function(){
                    console.log('file is updated');
                   })
                  })
                })
                return
        }
console.log(res.description.extra[1].text.replace(/\n/g, ""))
let adf = fs.readFileSync(`motds.txt`, 'utf-8')
if(adf.includes(res.description.extra[1].text.replace(/\n/g, ""))){
  return console.log(`motd is already in database`)
}
fs.open(c.file_location, 'a', 666, function( e, id ) {
    fs.write( id, res.description.extra[1].text.replace(/\n/g, "") + "\n", null, 'utf8', function(){
      fs.close(id, function(){
        console.log('file is updated');
       })
      })
    })

    }
})
}, 5000)		
