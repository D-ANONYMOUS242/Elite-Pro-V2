// Edit the following to your chioce: botname, ownernumber and ownername.
const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='put your session id here'

//owmner v card
global.ytname = "YT: david-PRO-V2" //ur yt chanel name
global.socialm = "GitHub: Elite-MD" //ur github or insta name
global.location = "Port Harcourt, Nigeria" //ur location

//new
global.botname = 'David-bug-bot//ur bot name
global.ownernumber = '2347067659346'//ur owner number
global.ownername = 'David-PRO-V2' //ur owner name
global.websitex =//https//https://youtube.com/@davidfalayi?si=yfMyeD9fyh0stGiM"
global.wagc = ""
global.themeemoji = '👨🏼‍💻'
global.wm = "david-PRO-V2"
global.botscript = 'https://github.com/Elite-MD/ELITE-PRO-V2' //script link
global.packname = "Sticker By"
global.author = "david-PRO-V2"
global.creator = "2348109263390@s.whatsapp.net"
global.xprefix = '!'
global.premium = ["2348109263390"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./EliteProMedia/theme/elitepro.png')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
