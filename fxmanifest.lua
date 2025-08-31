fx_version 'cerulean'
lua54 'yes'
games {'gta5'}

author 'Xantoom'
description 'A framework for a magic system fan inspired by 7W'
version '1.0.0'

ui_page 'nui/build/index.html'

files {
    'nui/build/index.html',
    'nui/build/**/*',
}

shared_scripts {
    "@ox_lib/init.lua",
    'config/config.lua'
}

client_scripts {
    "client/client.lua"
}

server_scripts {
    "@oxmysql/lib/MySQL.lua"
}