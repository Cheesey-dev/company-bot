
const Util = require("util")
const Discord = require("discord.js")
const db = require("croxydb")

  exports.run = async (client, message, args) => {
   if(message.author.id !== "753842258457002036") return message.channel.send("<:bakimda:798582408642560110> Bu komut Company Ownerlar覺na 繹zeldir!!")

  let arguman = args.join(" ");
  if (!arguman) return

  let executedIn = process.hrtime();
  
  function clean(msg) {
    if (typeof msg !== "string")
      msg = Util.inspect(msg, { depth: 0 });
    msg = msg
      .replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203));
    
    executedIn = process.hrtime(executedIn);
    executedIn = executedIn[0] * Math.pow(10, 3) + executedIn[1] / Math.pow(10, 6);
    
    return msg;
  }
  
  try {
    const evaled = clean(await eval(arguman));
   
    const embddddd = new Discord.MessageEmbed()
   .setTitle("??戊 Kod ba??ar覺yla 癟al覺??t覺r覺ld覺")
      .setDescription(`
      > Kod par癟ac覺??覺 \`${executedIn.toFixed(3)} ms\` de **癟al覺??t覺r覺ld覺.**
      \`\`\`js\n${evaled}\`\`\`
      `)
      .setColor("GREEN")
     message.channel.send(embddddd);
  } catch(err) {
    console.log(err)
    message.channel.send(
      new Discord.MessageEmbed()
      .setTitle("??仁 Bir hata ile kar??覺la??覺ld覺")
      .setDescription(`
      \`\`\`js\n${err}\`\`\`
      `)
      .setColor("RED")
      .setTimestamp()
    );
  }
    
  }
  
exports.conf = {
  aliases: []
}
exports.help = {
  name: "eval"
}