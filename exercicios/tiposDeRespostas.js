const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

// Formas de respostas
bot.start(async ctx => {
    // Resposta com emoji
    await ctx.reply(`Seja bem-vindo, ${ctx.update.message.from.first_name}! 😎`)
    // Resposta com HTML
    await ctx.replyWithHTML(`Destacando mensagem <b>HTML</b>
        <i>de várias</i> <code>formas</code> <pre>possíveis</pre>
        <a href="www.google.com">Google</a>`)
    // Resposta com Markdown
    await ctx.replyWithMarkdown('Destacando mensagem *Markdown*'
        + ' _de várias_ `formas` ```possíveis```'
        + ' [Google](http://www.ggogle.com)')
    // Resposta com foto
    await ctx.replyWithPhoto({source: `${__dirname}/dachshund.jpg`})
    // Resposta com foto e caption
    await ctx.replyWithPhoto('https://tudosobrecachorros.com.br/wp-content/uploads/Dachshund-1024x682.jpg', 
        { caption: 'Olha o estilo!' })
    // Outra forma de resposta com foto
    await ctx.replyWithPhoto({ url: 'https://tudosobrecachorros.com.br/wp-content/uploads/Dachshund-1024x682.jpg' })
    // Resposta com location: lat - lon
    await ctx.replyWithLocation(-23.6516418, -46.7647442)
    // Resposta com vídeo
    await ctx.replyWithVideo('http://files.cod3r.com.br/curso-bot/cod3r-end.m4v')
})

bot.startPolling()