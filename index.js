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
largeImageKey: 'BÜYÜK RESİMİN ADI', // Büyük Resiminiz Yoksa/Eklemediyseniz Silebilirsiniz
largeImageText: 'YAZI', // Fare İmleci Resimin Üzerine Gelince Çıkan Yazı
smallImageKey: 'KÜÇÜK RESİMİN ADI', // Küçük Resiminiz Yoksa/Eklemediyseniz Silebilirsiniz
smallImageText: 'YAZI', // Fare İmleci Resimin Üzerine Gelince Çıkan Yazı
instance: true,
})
});

client.login({ clientId }).catch(console.error);
