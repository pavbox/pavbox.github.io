
# once deployment script;
# remove repository, clone actual from master
# install dependencies and build project
# daemonize website

# @required pm2 utility
# @required git, npm and nodejs
# @recommended nodejs 8.6.0+

rm -rf * .* 2> /dev/null

git clone https://github.com/pavbox/pavbox.github.io.git .

npm install && npm run build

pm2 delete pavboxcom
pm2 start backend/server.js --name "pavboxcom"

