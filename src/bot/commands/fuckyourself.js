"use strict"

const discord = require("discord.js");

const Command = require("../command");

const fuckyourself = new Command({

    name: "Fuck Yourself",
    description: "Can we copystrike Feinwaru?",
    thumbnail: "https://cdn.discordapp.com/attachments/379432139856412682/487740516755177472/unknown.png",
    marketplace_enabled: true,

    type: "js",
    match_type: "command",
    match: "fuckyourself",

    featured: false,

    preload: false,

    cb: function(client, message, guildDoc) {

        message.channel.send("", {
            file: "https://cdn.discordapp.com/attachments/379432139856412682/487740516755177472/unknown.png"
        });
    }
});

module.exports = fuckyourself;
