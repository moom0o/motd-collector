const fs = require("fs")
const mcping = require('mc-ping-updated');

setInterval(() => {
mcping('2b2t.org', 25565, function(err, res) {
	if (err) {
		// Some kind of error
		console.error(err);
	} else {
        if(res.description.extra[1].color === "dark_red"){
            console.log(res.description.extra[1].text.replace(/\n/g, "") + ` (RED)`)
            fs.open('motds.txt', 'a', 666, function( e, id ) {
                fs.write( id, res.description.extra[1].text.replace(/\n/g, "") + ` (RED)` + "\n", null, 'utf8', function(){
                  fs.close(id, function(){
                    console.log('file is updated');
                   })
                  })
                })
        }
console.log(res.description.extra[1].text.replace(/\n/g, ""))
fs.open('motds.txt', 'a', 666, function( e, id ) {
    fs.write( id, res.description.extra[1].text.replace(/\n/g, "") + "\n", null, 'utf8', function(){
      fs.close(id, function(){
        console.log('file is updated');
       })
      })
    })

    }
})
}, 5000)		
