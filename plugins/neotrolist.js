/* #teenhX
*/

const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const Config = require('../config');

const Language = require('../language');
const dd = "Tempory විධාන ලැයිස්තුව"
const ddd = "විධාන ලැයිස්තුව"


if (Config.WORKTYPE == 'private') {
  if (Config.LANG == 'EN') {

    Asena.addCommand({pattern: 'neotro', fromMe: true, desc: dd }, (async (message, match) => {    

                await message.sendMessage('*╔═▣═══❖⦁⦁⦁👽⦁⦁⦁❖═══▣═╗*\n*⦁⦁⦁⦁╍ɴᴇᴏᴛʀᴏ-𝘅 ᴘʀɪᴠᴀᴛᴇ ʙᴏᴛ╍⦁⦁⦁⦁*\n'+Config.MENUTEXT+'\n*╚═══❖═══▣ ▣════❖═══╝*\n_powered By Teenuh-X_\n\n*⚜විවිධාකාරයේ Logo සෑදීමට⚜*\n\n*🌀විධානය* : .textimg\n*💠විස්තරය* : ``` Logo ලැයිස්තුව පෙන්වයි```\n◁මෙම ලැයිස්තුවන්ගෙ විධාන ක්‍රියා නොකිරීම  බොට්ගෙ දෝශයක් නොවෙ.සේවාව ලබා ගත් site එකෙහි දෝශයකි.\n\n*⚜Media Download ⚜*\n\n*🌀විධානය* : .song\n*💠විස්තරය* : ```ඔබට අවශ්‍ය සින්දු ලබාදෙයි```\n\n*🌀විධානය* : .spotify \n*💠විස්තරය* : ```Spotify link download කරයි ```\n🧞 .spotify <spotify link>\n\n*🌀විධානය* : .yt\n*💠විස්තරය* : ```Youtube search කර අදාල Links ලබා දෙයි```\n\n*🌀විධානය* : .video\n*💠විස්තරය* : ```Youtube Video Download කරයි.```\n\n*🌀විධානය* : .fb\n*💠විස්තරය* : ```Facebook Video Download කරයි```\n\n*🌀විධානය* : .random\n*💠විස්තරය* : ```ඡායාරූප Random ආකාරයට සොයයි```\n\n🌀විධානය : .vinsta\n💠විස්තරය : Instergrame Video Download කරයි\n\n🌀විධානය : .search\n💠විස්තරය : වීඩියෝවක සිංදුව සොයයි\n\n*⚜වෙනත් විධාන⚜*\n\n*🌀විධානය* : .nmedia \n*💠විස්තරය* : ```පහසුවෙන් ඡායාරූප Edite කිරීමෙ ලැයිස්තුව පෙන්වයි```\n\n*🌀විධානය* : .ip\n*💠විස්තරය* : ```ip ලිපිනයෙන් තොරතුරු සොයයි```\n\n*🌀විධානය* : .tiny\n*💠විස්තරය* : ``` Url කුඩා කරයි```\n\n*🌀විධානය* : .sticker\n*💠විස්තරය* : ```ආදාල ඡායාරූපයෙ Sticker සාදයි```\n\n*🌀විධානය* : .photo\n*💠විස්තරය* : ```Sticker එකක් ඡායාරූපයක් කරයි```n\n*🌀විධානය* : .img\n*💠විස්තරය* : ```අවශ්‍ය ඡායාරූප ලබාදෙයි```\n\n*🌀විධානය* : .wiki\n*💠විස්තරය* : ```විකිපීඩියාහි search කරයි```\n\n*🌀විධානය* : .anime\n*💠විස්තරය* : ```Anime ඡායාරූප ලබාදෙයි```\n\n*🌀විධානය* : apkmod\n*💠විස්තරය* : ```මොඩ් ඇප් ලබාදෙයි```\n\n*🌀විධානය* : weather\n*💠විස්තරය* : ```කාලගුණය පෙන්වයි```\n\n*🌀විධානය* : .ttp\n*💠විස්තරය* : ```Text සරල image බවට පරිවර්තනය කරයි.```\n\n*🌀විධානය* : .wame\n*💠විස්තරය* : ```Get a link to the user chat.```\n\n*🌀විධානය* :  .wallpaper\n*💠විස්තරය* : ```එය high resolution wallpaper යවයි.```\n\n*🌀විධානය* : .animesay\n*💠විස්තරය* : ```එය anime girl රඳවාගෙන සිටින banner තුළ text ලියයි```\n\n*🌀විධානය* : .trupsay\n*💠විස්තරය* : ```Trumpගේ tweet එකට text පරිවර්තනය කරයි.```\n\n*🌀විධානය* : .trt\n*💠විස්තරය* : ```එය ගූගල් පරිවර්තනය සමඟ පරිවර්තනය කරයි. ඔබ ඕනෑම පණිවිඩයකට mention දිය යුතුය.```\n*⌨️ උදාහරණයක්:* ```.trt en si (From English to Sinhala)```\n\n*🌀විධානය* : .bot\n*💠විස්තරය* : ```Chat with an AI Bot.Use .bot <message>```\n\n*🌀විධානය* : .tts\n*💠විස්තරය* : ```එය වචන voice messageට පරිවර්තනය කරයි```\n\n*🌀විධානය* : .ss\n*💠විස්තරය* : ```දී ඇති linkයේ website screenshot ගනී```\n\n*🌀විධානය* : .github\n*💠විස්තරය* : ```දී ඇති පරිශීලක නාමයෙන් github තොරතුරු රැස් කරයි.⌨️ Example: .github neotrox```\n\n*🌀විධානය* : .covid \n*💠විස්තරය* : ```රටවල් කිහිපයක කොරෝනා වාර්ථා පෙන්වයි```\n\n*🌀විධානය* : .mp3\n*💠විස්තරය* : ```ටැග් කල වීඩියෝව Mp3 ලෙස පරිවර්තනය කරයි```\n\n*🌀විධානය* : .movie\n*💠විස්තරය* : ```චිත්‍රපට වල විස්තර ලබාදෙයි```\n\n*🌀විධානය* : .insta\n*💠විස්තරය* : ```Instergrame පරිශීලකයාගෙ තොරතුරු ලබාදෙයි```\n\n*🌀විධානය* : .attp\n*💠විස්තරය* : ```දේදුන්නක පාට Animation ස්ටිකර්ස් සාදයි```\n\n*🌀විධානය* : .carbot\n*💠විස්තරය* : ```Uses carbon.sh for Text-to-Image```\n*⚠️ Warn:* ```Please only type in en and tr character!```\n\n\n*🌀විධානය* : .joke\n*💠විස්තරය* : ```විවිධ විහිලු සපයයි▷භාශාව◈English```\n\n*🌀විධානය* : meme\n*💠විස්තරය* : ```ටැග් කල ඡාලාරූපයේ ටයිප් වෙ```\n\n*🌀විධානය* : .lyric\n*💠විස්තරය* : ```ගීතයක lyrics ලබාදෙයි```\n\n*🌀විධානය* : .qr\n*💠විස්තරය* : ```අකුරු qr කේතයක් බවට පරිවර්තනය කරයි```\n\n*⚜පරිපාලක වරුන්ගෙ විධාන⚜*\n🧞‍♂️```මෙම විධාන Bot අයිතිකරුවාට පමණක් ක්‍රියාත්මක වේ```\n\n*🌀විධානය* : .install\n*💠විස්තරය* : ```අමතර pluging එකතු කරයි```\n\n*🌀විධානය* : .remove\n*💠විස්තරය* : ```Plugin ඉවත් කරයි```\n\n*🌀විධානය* : .pluging  \n*💠විස්තරය* : ```ඔබ install කර ඇති plugin පෙන්වයි```\n\n*🌀විධානය* : .ban \n*💠විස්තරය* : ```තෝරාගන්නා පුද්ගලයා සමූහයෙන් ඉවත් කරයි```\n\n*🌀විධානය* : .welcome\n*💠විස්තරය* : ```පිළිගැනීමේ පණිවිඩය සකස් කරයි```\n\n*🌀විධානය* : .welcome delete\n*💠විස්තරය* : ```පිළිගැනීමෙ පණිවිඩය සකස් කරයි```\n\n*🌀විධානය* : .goodbye\n*💠විස්තරය* : ```සමුගැනීමෙ පණිවිඩය සකස් කරයි```\n\n*🌀විධානය* : .promote\n*💠විස්තරය* : ```ඕනෑම පුද්ගලයෙකු පරිපාලකයෙකු කරයි```\n\n*🌀විධානය* : .demote\n*💠විස්තරය* : ```ඕනෑම පරිපාලකයෙකුගේ බලය ගනී.```\n\n*🌀විධානය* : .add\n*💠විස්තරය* : ```කණ්ඩායමට යමෙකුව එකතු කරයි```\n\n*🌀විධානය* : .filter\n*💠විස්තරය* : ```එය filters එක් කරයි. කවුරුහරි ඔබේ filters ලියන්නේ නම්, එය පිළිතුර යවයි. ඔබ .filter ලියන්නේ නම්, එය ඔබගේ filters ලැයිස්තුව පෙන්වයි```\n\n*🌀විධානය* : mute\n*💠විස්තරය* : ```කණ්ඩායම් chat නිශ්ශබ්ද කිරීමට. පණිවිඩයක් යැවිය හැක්කේ adminට පමණි. 🔳Example : .mute 10m```\n\n*🌀විධානය* : .unmute\n*💠විස්තරය* : ```කණ්ඩායම් පණිවිඩ නැවත යතාතත්වෙට පත්වෙයි```\n\n*🌀විධානය* : .invite\n*💠විස්තරය* : ```කණ්ඩායමේ invite සපයයි.```\n\n*🌀විධානය* : .stop\n*💠විස්තරය* : ```ඔබ කලින් එකතු කල filter නවත්වයි.```\n\n*🌀විධානය* : .restart\n*💠විස්තරය* : ```Neotro නැවත ආරම්භ කරයි```\n\n*🌀විධානය* : .shutdown\n*💠විස්තරය* : ```Bot වසා දැමීමට```\n\n*🌀විධානය* : .dyno\n*💠විස්තරය* : ```Check heroku dyno usage```\n\n*🌀විධානය* : .speedtest\n*💠විස්තරය* : ```Download කිරීම සහ Upload කිරීමේ වේගය මැනීම```\n\n*🌀විධානය* : .update\n*💠විස්තරය* : ```Update තිබේදැයි පරීක්ෂා කරයි```\n\n*🌀විධානය* : .update now\n*💠විස්තරය* : ```Update වෙයි```\n\n*🌀විධානය* : .tagall\n*💠විස්තරය* : ```කණ්ඩායමේ සිටින සියල්ලන් ටැග් කරයි```\n\n*🌀විධානය* : .tagadmin\n*💠විස්තරය* : ```කණ්ඩායමෙ සිටින පරිපාලකයින් ටැග් කරයි```\n\n*🌀විධානය* : .block\n*💠විස්තරය* : ```පුද්ගලයෙකු අවහිර කරයි``\n\n *🌀විධානය* : .unblock\n *💠විස්තරය* : ```අවහිර කල පුද්ගලයා නැවත සම්බන්ධ කරයි```\n\n*🔏විධානය* : .clear\n*🧞විස්තරය* : එය Chat Clear කරයි.\n\n*🔏විධානය* : .antispm\n*🧞විස්තරය* : එය ඔබෙ සමූහයට හදිසි එල්ල වීමෙදි සමූහය නිශ්ශබ්ද කර දුරකතනය සිරවීම අවම කරයි.\n\n*⚜අලුතින් එක්කවන විධාන ලැයිස්තුව⚜*\n\n*🔏විධානය:* .2attp\n🧞‍♂️එය දේදුන්නක් ලෙස අකුරු ස්ටිකර් බවට පත් කරයි.\n\n*🔏විධානය:*  .mmpack\n🧞‍♂️එය ඔබේ අකුරු මීම් පවට හරවයි.\n\n*🔏විධානය:* .emoji\n🧞‍♂️එය ඉමෝජි ඡායාරූප ලබාදෙයි.\n▷උදාහරණ: .emoji 🤪\n\n*🔏විධානය:* .gn / .gm\n*🧞විස්තරය:* එය Good morning හා Good night පණිවිඩ යවයි.');

    }));
  }
    if (Config.LANG == 'SI') {

    Asena.addCommand({pattern: 'uhh', fromMe: true, desc: ddd }, (async (message, match) => {    

        await message.sendMessage('🆕සිංහල');

    }));
  }
}
else if (Config.WORKTYPE == 'public') {
  if (Config.LANG == 'EN') {

    Asena.addCommand({pattern: 'neotro', fromMe: false, desc: dd}, (async (message, match) => {   

        await message.sendMessage( '*╔═▣═══❖⦁⦁⦁👽⦁⦁⦁❖═══▣═╗*\n*⦁⦁⦁⦁╍ɴᴇᴏᴛʀᴏ-𝘅 ᴘᴜʙʟɪᴄ ʙᴏᴛ╍⦁⦁⦁⦁*\n'+Config.MENUTEXT+'\n╚═══❖═══▣ ▣════❖═══╝*\n_powered By Teenuh-X_\n\n*⚜විවිධාකාරයේ Logo සෑදීමට⚜*\n\n*🌀විධානය* : .textimg\n*💠විස්තරය* : ``` Logo ලැයිස්තුව පෙන්වයි```\n◁මෙම ලැයිස්තුවන්ගෙ විධාන ක්‍රියා නොකිරීම  බොට්ගෙ දෝශයක් නොවෙ.සේවාව ලබා ගත් site එකෙහි දෝශයකි.\n\n*⚜Media Download ⚜*\n\n*🌀විධානය* : .song\n*💠විස්තරය* : ```ඔබට අවශ්‍ය සින්දු ලබාදෙයි```\n\n*🌀විධානය* : .spotify \n*💠විස්තරය* : ```Spotify link download කරයි ```\n🧞 .spotify <spotify link>\n\n*🌀විධානය* : .yt\n*💠විස්තරය* : ```Youtube search කර අදාල Links ලබා දෙයි```\n\n*🌀විධානය* : .video\n*💠විස්තරය* : ```Youtube Video Download කරයි.```\n\n*🌀විධානය* : .fb\n*💠විස්තරය* : ```Facebook Video Download කරයි```\n\n*🌀විධානය* : .random\n*💠විස්තරය* : ```ඡායාරූප Random ආකාරයට සොයයි```\n\n🌀විධානය : .vinsta\n💠විස්තරය : Instergrame Video Download කරයි\n\n🌀විධානය : .search\n💠විස්තරය : වීඩියෝවක සිංදුව සොයයි\n\n*⚜වෙනත් විධාන⚜*\n\n*🌀විධානය* : .nmedia \n*💠විස්තරය* : ```පහසුවෙන් ඡායාරූප Edite කිරීමෙ ලැයිස්තුව පෙන්වයි```\n\n*🌀විධානය* : .ip\n*💠විස්තරය* : ```ip ලිපිනයෙන් තොරතුරු සොයයි```\n\n*🌀විධානය* : .tiny\n*💠විස්තරය* : ``` Url කුඩා කරයි```\n\n*🌀විධානය* : .sticker\n*💠විස්තරය* : ```ආදාල ඡායාරූපයෙ Sticker සාදයි```\n\n*🌀විධානය* : .photo\n*💠විස්තරය* : ```Sticker එකක් ඡායාරූපයක් කරයි```n\n*🌀විධානය* : .img\n*💠විස්තරය* : ```අවශ්‍ය ඡායාරූප ලබාදෙයි```\n\n*🌀විධානය* : .wiki\n*💠විස්තරය* : ```විකිපීඩියාහි search කරයි```\n\n*🌀විධානය* : .anime\n*💠විස්තරය* : ```Anime ඡායාරූප ලබාදෙයි```\n\n*🌀විධානය* : apkmod\n*💠විස්තරය* : ```මොඩ් ඇප් ලබාදෙයි```\n\n*🌀විධානය* : weather\n*💠විස්තරය* : ```කාලගුණය පෙන්වයි```\n\n*🌀විධානය* : .ttp\n*💠විස්තරය* : ```Text සරල image බවට පරිවර්තනය කරයි.```\n\n*🌀විධානය* : .wame\n*💠විස්තරය* : ```Get a link to the user chat.```\n\n*🌀විධානය* :  .wallpaper\n*💠විස්තරය* : ```එය high resolution wallpaper යවයි.```\n\n*🌀විධානය* : .animesay\n*💠විස්තරය* : ```එය anime girl රඳවාගෙන සිටින banner තුළ text ලියයි```\n\n*🌀විධානය* : .trupsay\n*💠විස්තරය* : ```Trumpගේ tweet එකට text පරිවර්තනය කරයි.```\n\n*🌀විධානය* : .trt\n*💠විස්තරය* : ```එය ගූගල් පරිවර්තනය සමඟ පරිවර්තනය කරයි. ඔබ ඕනෑම පණිවිඩයකට mention දිය යුතුය.```\n*⌨️ උදාහරණයක්:* ```.trt en si (From English to Sinhala)```\n\n*🌀විධානය* : .bot\n*💠විස්තරය* : ```Chat with an AI Bot.Use .bot <message>```\n\n*🌀විධානය* : .tts\n*💠විස්තරය* : ```එය වචන voice messageට පරිවර්තනය කරයි```\n\n*🌀විධානය* : .ss\n*💠විස්තරය* : ```දී ඇති linkයේ website screenshot ගනී```\n\n*🌀විධානය* : .github\n*💠විස්තරය* : ```දී ඇති පරිශීලක නාමයෙන් github තොරතුරු රැස් කරයි.⌨️ Example: .github neotrox```\n\n*🌀විධානය* : .covid \n*💠විස්තරය* : ```රටවල් කිහිපයක කොරෝනා වාර්ථා පෙන්වයි```\n\n*🌀විධානය* : .mp3\n*💠විස්තරය* : ```ටැග් කල වීඩියෝව Mp3 ලෙස පරිවර්තනය කරයි```\n\n*🌀විධානය* : .movie\n*💠විස්තරය* : ```චිත්‍රපට වල විස්තර ලබාදෙයි```\n\n*🌀විධානය* : .insta\n*💠විස්තරය* : ```Instergrame පරිශීලකයාගෙ තොරතුරු ලබාදෙයි```\n\n*🌀විධානය* : .attp\n*💠විස්තරය* : ```දේදුන්නක පාට Animation ස්ටිකර්ස් සාදයි```\n\n*🌀විධානය* : .carbot\n*💠විස්තරය* : ```Uses carbon.sh for Text-to-Image```\n*⚠️ Warn:* ```Please only type in en and tr character!```\n\n\n*🌀විධානය* : .joke\n*💠විස්තරය* : ```විවිධ විහිලු සපයයි▷භාශාව◈English```\n\n*🌀විධානය* : meme\n*💠විස්තරය* : ```ටැග් කල ඡාලාරූපයේ ටයිප් වෙ```\n\n*🌀විධානය* : .lyric\n*💠විස්තරය* : ```ගීතයක lyrics ලබාදෙයි```\n\n*🌀විධානය* : .qr\n*💠විස්තරය* : ```අකුරු qr කේතයක් බවට පරිවර්තනය කරයි```\n\n*⚜පරිපාලක වරුන්ගෙ විධාන⚜*\n🧞‍♂️```මෙම විධාන Bot අයිතිකරුවාට පමණක් ක්‍රියාත්මක වේ```\n\n*🌀විධානය* : .install\n*💠විස්තරය* : ```අමතර pluging එකතු කරයි```\n\n*🌀විධානය* : .remove\n*💠විස්තරය* : ```Plugin ඉවත් කරයි```\n\n*🌀විධානය* : .pluging  \n*💠විස්තරය* : ```ඔබ install කර ඇති plugin පෙන්වයි```\n\n*🌀විධානය* : .ban \n*💠විස්තරය* : ```තෝරාගන්නා පුද්ගලයා සමූහයෙන් ඉවත් කරයි```\n\n*🌀විධානය* : .welcome\n*💠විස්තරය* : ```පිළිගැනීමේ පණිවිඩය සකස් කරයි```\n\n*🌀විධානය* : .welcome delete\n*💠විස්තරය* : ```පිළිගැනීමෙ පණිවිඩය සකස් කරයි```\n\n*🌀විධානය* : .goodbye\n*💠විස්තරය* : ```සමුගැනීමෙ පණිවිඩය සකස් කරයි```\n\n*🌀විධානය* : .promote\n*💠විස්තරය* : ```ඕනෑම පුද්ගලයෙකු පරිපාලකයෙකු කරයි```\n\n*🌀විධානය* : .demote\n*💠විස්තරය* : ```ඕනෑම පරිපාලකයෙකුගේ බලය ගනී.```\n\n*🌀විධානය* : .add\n*💠විස්තරය* : ```කණ්ඩායමට යමෙකුව එකතු කරයි```\n\n*🌀විධානය* : .filter\n*💠විස්තරය* : ```එය filters එක් කරයි. කවුරුහරි ඔබේ filters ලියන්නේ නම්, එය පිළිතුර යවයි. ඔබ .filter ලියන්නේ නම්, එය ඔබගේ filters ලැයිස්තුව පෙන්වයි```\n\n*🌀විධානය* : mute\n*💠විස්තරය* : ```කණ්ඩායම් chat නිශ්ශබ්ද කිරීමට. පණිවිඩයක් යැවිය හැක්කේ adminට පමණි. 🔳Example : .mute 10m```\n\n*🌀විධානය* : .unmute\n*💠විස්තරය* : ```කණ්ඩායම් පණිවිඩ නැවත යතාතත්වෙට පත්වෙයි```\n\n*🌀විධානය* : .invite\n*💠විස්තරය* : ```කණ්ඩායමේ invite සපයයි.```\n\n*🌀විධානය* : .stop\n*💠විස්තරය* : ```ඔබ කලින් එකතු කල filter නවත්වයි.```\n\n*🌀විධානය* : .restart\n*💠විස්තරය* : ```Neotro නැවත ආරම්භ කරයි```\n\n*🌀විධානය* : .shutdown\n*💠විස්තරය* : ```Bot වසා දැමීමට```\n\n*🌀විධානය* : .dyno\n*💠විස්තරය* : ```Check heroku dyno usage```\n\n*🌀විධානය* : .speedtest\n*💠විස්තරය* : ```Download කිරීම සහ Upload කිරීමේ වේගය මැනීම```\n\n*🌀විධානය* : .update\n*💠විස්තරය* : ```Update තිබේදැයි පරීක්ෂා කරයි```\n\n*🌀විධානය* : .update now\n*💠විස්තරය* : ```Update වෙයි```\n\n*🌀විධානය* : .tagall\n*💠විස්තරය* : ```කණ්ඩායමේ සිටින සියල්ලන් ටැග් කරයි```\n\n*🌀විධානය* : .tagadmin\n*💠විස්තරය* : ```කණ්ඩායමෙ සිටින පරිපාලකයින් ටැග් කරයි```\n\n*🌀විධානය* : .block\n*💠විස්තරය* : ```පුද්ගලයෙකු අවහිර කරයි``\n\n *🌀විධානය* : .unblock\n *💠විස්තරය* : ```අවහිර කල පුද්ගලයා නැවත සම්බන්ධ කරයි```\n\n*🔏විධානය* : .clear\n*🧞විස්තරය* : එය Chat Clear කරයි.\n\n*🔏විධානය* : .antispm\n*🧞විස්තරය* : එය ඔබෙ සමූහයට හදිසි එල්ල වීමෙදි සමූහය නිශ්ශබ්ද කර දුරකතනය සිරවීම අවම කරයි.\n\n*⚜අලුතින් එක්කවන විධාන ලැයිස්තුව⚜*\n\n*🔏විධානය:* .2attp\n🧞‍♂️එය දේදුන්නක් ලෙස අකුරු ස්ටිකර් බවට පත් කරයි.\n\n*🔏විධානය:*  .mmpack\n🧞‍♂️එය ඔබේ අකුරු මීම් පවට හරවයි.\n\n*🔏විධානය:* .emoji\n🧞‍♂️එය ඉමෝජි ඡායාරූප ලබාදෙයි.\n▷උදාහරණ: .emoji 🤪\n\n*🔏විධානය:* .gn / .gm\n*🧞විස්තරය:* එය Good morning හා Good night පණිවිඩ යවයි.');
    }));
  }
    if (Config.LANG == 'SI') {

    Asena.addCommand({pattern: '1test', fromMe: false, desc: ddd }, (async (message, match) => {    

        await message.sendMessage('*සිංහල*');

    }));
  }
}
