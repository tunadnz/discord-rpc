const rpc = require("discord-rpc")
const clientId = 'CLIENT ID';

const client = new rpc.Client({ transport: 'ipc' })

client.on('ready', () => {
client.setActivity({
pid: process.pid,
details: 'BAŞLIK',
state: 'AÇIKLAMA',
startTimestamp: Date.now(),
endTimestamp: Date.now() + 1337,
largeImageKey: 'BÜYÜK RESİMİN ADI',
largeImageText: 'YAZI', // Fare İmleci Resimin Üzerine Gelince Çıkan Yazı
smallImageKey: 'KÜÇÜK RESİMİN ADI',
smallImageText: 'YAZI', // Fare İmleci Resimin Üzerine Gelince Çıkan Yazı
instance: true,
})
});

client.login({ clientId }).catch(console.error);