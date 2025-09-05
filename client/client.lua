RegisterCommand("nui", function ()
    SetNuiFocus(true, true)
    SendNUIMessage({type = "openUI"})
end, false)

-- Callback pour fermer l'interface
RegisterNUICallback("close", function(data, cb)
    SetNuiFocus(false, false)
    cb("ok")
end)

