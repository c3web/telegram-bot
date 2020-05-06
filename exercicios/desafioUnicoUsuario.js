// Ao seu dispor, mestre!
// Sinto muito, mas eu só falo com o meu mestre

const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
    const from = ctx.update.message.from
    if (from.id === env.userID) {
        ctx.reply(`Ao seu dispor, mestre ${from.first_name}!`)
    } else {
        ctx.reply('Sinto muito, mas eu só falo com o meu mestre!')
    }
})

bot.startPolling()