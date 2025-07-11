const fs = require('fs');
const chalk = require('chalk');

//~~~~~~~~~~~~< GLOBAL SHOP SETTINGS >~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\
global.shopName = 'INV TECH'
global.shop = {
	domain: '',
	apikey: '',
	capikey: '',
	eggsnya: '15',
	location: '1',
}
//~~~~~~~~~~~~~~~< GLOBAL SETTINGS >~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\\

global.owner = require("./database/owner.json");
global.packname = 'Sky Botz'
global.author = 'Hamba Allah'
global.botname = 'SKY BOTZ'
global.listprefix = ['+','!','.']
global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json' // Taruh url mongodb di sini jika menggunakan mongodb. Format : 'mongodb+srv://...'
global.tempatStore = 'baileys_store.json' // Taruh url mongodb di sini jika menggunakan mongodb. Format : 'mongodb+srv://...'
global.pairing_code = true
global.number_bot = '6287872363060' // Kalo pake panel bisa masukin nomer di sini, jika belum ambil session. Format : '628xx'

global.fake = {
	anonim: 'https://telegra.ph/file/95670d63378f7f4210f03.png',
	thumbnailUrl: 'https://telegra.ph/file/fe4843a1261fc414542c4.jpg',
	thumbnail: fs.readFileSync('./src/media/naze.png'),
	docs: fs.readFileSync('./src/media/fake.pdf'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf'],
}

global.my = {
	yt: 'https://youtube.com/c/',
	gh: 'https://github.com/',
	gc: 'https://chat.whatsapp.com/',
	ch: '@newsletter',
}

global.limit = {
	free: 20,
	premium: 999,
	vip: 9999
}

global.money = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	key: 'Apikey mu telah habis silahkan kunjungi\nhttps://my.hitori.pw',
	owner: 'Fitur Khusus Owner!',
	admin: 'Fitur Khusus Admin!',
	botAdmin: 'Bot Bukan Admin!',
	group: 'Gunakan Di Group!',
	private: 'Gunakan Di Privat Chat!',
	limit: 'Limit Anda Telah Habis!',
	prem: 'Khusus User Premium!',
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

global.APIs = {
	hitori: 'https://api.hitori.pw',
}
global.APIKeys = {
	'https://api.hitori.pw': 'htrkey-77eb83c0eeb39d40',
	geminiApikey: ['AIzaSyD0lkGz6ZhKi_MHSSmJcCX3wXoDZhELPaQ','AIzaSyDnBPd_EhBfr73NssnThVQZYiKZVhGZewU','AIzaSyA94OZD-0V4quRbzPb2j75AuzSblPHE75M','AIzaSyB5aTYbUg2VQ0oXr5hdJPN8AyLJcmM84-A','AIzaSyB1xYZ2YImnBdi2Bh-If_8lj6rvSkabqlA']
}

// Lainnya

global.badWords = ['tolol','goblok','asu','pantek','kampret','ngentot','jancok','kontol','memek','lonte','anjing','i','u','e','o',]
global.chatLength = 99999999


//------------- jadibotv1 settings --------------\\
global.domain = 'https://semzyuurii.celestialhost.my.id';
global.apikey = "ptla_47vl33ovncYULWQJJjA5XAvl6R211yJYmjMsd8vLuOt";
global.capikey = "ptlc_pklGBDoCPCo13yJHf0hqmzLC898TKudLJT7jaf5cPsu";
global.eggsnya = "15"; // id eggs yang dipakai
global.location = "1"; // id location
global.thumb = 'https://raw.githubusercontent.com/IzharDevelop/database/main/LOGO%20INV.jpg' // THUMBAIL DARI PANEL
global.nodejs = "ghcr.io/parkervcp/yolks:nodejs_23";
global.excludedServerIdsPrivate = ["2", "1"]; // Ganti dengan ID server owner
//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
global.dev = ["6285852536578"];