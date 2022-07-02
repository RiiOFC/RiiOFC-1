

const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const rs = require('readline-sync');
const delay = require('delay');

const GoStumble = (code, auth) => new Promise((resolve, reject) => {

    fetch(`http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/${code}`, {
        method: 'GET',
        headers: {
            'authorization': auth
        }
    })
    .then(res => res.text())
    .then(data=> {
        resolve(data);
    })
    .catch(err => {
        reject(err);
    });

});

(async () => {

    console.log${chalk.red(`███████╗████████╗██╗   ██╗███╗   ███╗██████╗ ██╗     ███████╗
██╔════╝╚══██╔══╝██║   ██║████╗ ████║██╔══██╗██║     ██╔════╝
███████╗   ██║   ██║   ██║██╔████╔██║██████╔╝██║     █████╗  
╚════██║   ██║   ██║   ██║██║╚██╔╝██║██╔══██╗██║     ██╔══╝  
███████║   ██║   ╚██████╔╝██║ ╚═╝ ██║██████╔╝███████╗███████╗
╚══════╝   ╚═╝    ╚═════╝ ╚═╝     ╚═╝╚═════╝ ╚══════╝╚══════╝
                                                             
    ██████╗ ██╗   ██╗███████╗ █████╗ ██╗  ██╗                
    ██╔══██╗██║   ██║██╔════╝██╔══██╗██║ ██╔╝                
    ██████╔╝██║   ██║███████╗███████║█████╔╝                 
    ██╔══██╗██║   ██║╚════██║██╔══██║██╔═██╗                 
    ██║  ██║╚██████╔╝███████║██║  ██║██║  ██╗                
    ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝                               
${chalk.red('Script By : RiiOFC')} ${chalk.red('-')} ${chalk.red('Script Dupe Trophy & Crown')}
${chalk.blue('Website : replit.com/@RiiOFC')}
${chalk.blue('Whaatshap : 081247822525')}
${chalk.blue('Discord : Rii.#7938')}
${chalk.blue('Link Discord : https://discord.gg/wrsBxhX4')}
             
${chalk.yellow('Server Yang Digunakan :')}

${chalk.green('Features :')}
${chalk.magenta('1. Reward : 1 Crown + 30 Trophy + 35 Star ( Stumble Pass ) + 3000 EXP')}
${chalk.magenta('2. Reward : 20 Trophy + 30 Star ( Stumble Pass ) + 1500 EXP')}
${chalk.magenta('3. Reward : 10 Trophy + 25 Star ( Stumble Pass ) + 500 EXP')}
${chalk.magenta('4. Reward : 20 Star ( Stumble Pass ) + 100 EXP')}

${chalk.blue('Pilihlah Feature Sesuai Yang Kamu Dapatkan Pas Main Stumble Guys , Jika Tidak Sesuai Akan Kena Banned !')}

${chalk.red('Warning!')}
${chalk.red('Indo : Jangan Gunakan Delay 1000-4000 Karna Akun Kalian Akan Terkena Ban Dan Jika Kalian Ingin Bermain SAFE Gunakanlah Delay 20000')}

};
 
    const feature = rs.question('[+] Enter Your Feature : ');

    if (feature == '1') {

        const auth = rs.question('[+] Enter Your Auth : ');
        const time = rs.question('[+] Enter Delay In Milisecond : ');
        console.log('');

        while (true) {

            var code = '3';
            const result = await GoStumble(code, auth);
            if (!result) {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Wrong cookie or Expired Cookie Try Again!`));
                break;

            } else if (result.includes('User')) {

                const data = JSON.parse(result);
                const username = data.User.Username;
                const country = data.User.Country;
                const exp = data.User.Experience;
                const tokenPass = data.User.BattlePass.PassTokens;
                const trophy = data.User.SkillRating;
                const crown = data.User.Crowns;
                
                console.log(chalk.green(`[ ${moment().format('HH:mm:ss')} ] Nickname : ${username} | Country : ${country} | ${chalk.blue(`EXP : ${exp}`)} | ${chalk.blue(`Pass Star : ${tokenPass}`)} | ${chalk.blue(`Trophy : ${trophy}`)} | ${chalk.blue(`Crown : ${crown}`)}`));
                await delay(time)

            } else if (result == 'BANNED') {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Banned By KITKA !`));
                break;
                
            } else if (result == 'SERVER_ERROR') {

                continue;
                
            }
        }
        
    } else if (feature == '2') {

        const auth = rs.question('[+] Enter Your Auth :');
        const time = rs.question('[+] Enter Delay in milisecond : ');
        console.log('');

        while (true) {

            var code = '2';
            const result = await GoStumble(code, auth);
            if (!result) {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Wrong cookie or Expired cookie !`));
                break;

            } else if (result.includes('User')) {

                const data = JSON.parse(result);
                const username = data.User.Username;
                const country = data.User.Country;
                const exp = data.User.Experience;
                const tokenPass = data.User.BattlePass.PassTokens;
                const trophy = data.User.SkillRating;
                
                console.log(chalk.green(`[ ${moment().format('HH:mm:ss')} ] Nickname : ${username} | Country : ${country} | ${chalk.blue(`EXP : ${exp}`)} |  ${chalk.blue(`Pass Star : ${tokenPass}`)}  | ${chalk.blue(`Trophy : ${trophy}`)}`));
                await delay(time)
                
            } else if (result == 'BANNED') {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Banned By KITKA!!!`));
                break;
                
            } else if (result == 'SERVER_ERROR') {

                continue;
                
            }
        }

    } else if (feature == '3') {

        const auth = rs.question('[+] Enter your auth token : ');
        const time = rs.question('[+] Enter Delay in milisecond ( Ex : 6000 = 6 sec ) : ');
        console.log('');

        while (true) {

            var code = '1';
            const result = await GoStumble(code, auth);
            if (!result) {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Wrong cookie or Expired cookie !`));
                break;

            } else if (result.includes('User')) {

                const data = JSON.parse(result);
                const username = data.User.Username;
                const country = data.User.Country;
                const exp = data.User.Experience;
                const tokenPass = data.User.BattlePass.PassTokens;
                const trophy = data.User.SkillRating;
                
                console.log(chalk.green(`[ ${moment().format('HH:mm:ss')} ] Nickname : ${username} | Country : ${country} | ${chalk.blue(`EXP : ${exp}`)} |  ${chalk.blue(`Pass Star : ${tokenPass}`)}  | ${chalk.blue(`Trophy : ${trophy}`)}`));
                await delay(time)
                
            } else if (result == 'BANNED') {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Banned !`));
                break;
                
            } else if (result == 'SERVER_ERROR') {

                continue;
                
            }
        }

    } else if (feature == '4') {

        const auth = rs.question('[+] Enter your auth token : ');
        const time = rs.question('[+] Enter Delay in milisecond ( Ex : 6000 = 6 sec ) : ');
        console.log('');
        
        while (true) {

            var code = '0';
            const result = await GoStumble(code, auth);
            if (!result) {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Wrong cookie or Expired cookie !`));
                break;

            } else if (result.includes('User')) {

                const data = JSON.parse(result);
                const username = data.User.Username;
                const country = data.User.Country;
                const exp = data.User.Experience;
                const tokenPass = data.User.BattlePass.PassTokens;
                
                console.log(chalk.green(`[ ${moment().format('HH:mm:ss')} ] Nickname : ${username} | Country : ${country} | ${chalk.blue(`EXP : ${exp}`)} | ${chalk.blue(`Pass Star : ${tokenPass}`)}`));
                await delay(time)
                
            } else if (result == 'BANNED') {

                console.log(chalk.red(`[ ${moment().format('HH:mm:ss')} ] Banned By KITKA !`));
                break;
                
            } else if (result == 'SERVER_ERROR') {

                continue;
                
            }
        }

    } else {

        console.log(chalk.red(`\n[ ${moment().format('HH:mm:ss')} ] Wrong feature !`));

    }
    

})();
