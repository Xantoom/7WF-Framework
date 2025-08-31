RegisterCommand("nui", function ()
    SetNuiFocus(true, true)
    SendNUIMessage({type = "openUI"})
end, false)