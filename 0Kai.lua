repeat wait() until game:IsLoaded()
local exeName = game.Players.LocalPlayer.Name
local response = syn.request(
    {
        Url = 'https://discord.com/api/webhooks/999717675800481852/h6F2jiLaiX5Oxp-y4Y4C451MpN_iDnTU25EMozP9OsrzaiSOQKGUSLAv7eeMH1M9BNVp',
        Method = 'POST',
        Headers = {
            ['Content-Type'] = 'application/json'},
            Body = game:GetService('HttpService'):JSONEncode({content = exeName.." has just executed the budokai script!"})})
game.Players.LocalPlayer.Character:WaitForChild("HumanoidRootPart")
game.Players.LocalPlayer.Backpack:WaitForChild("Power Control")
local Player = game.Players.LocalPlayer
local plrname = game.Players.LocalPlayer.Name
local OrionLib = loadstring(game:HttpGet(('https://raw.githubusercontent.com/shlexware/Orion/main/source')))()
local Window = OrionLib:MakeWindow({Name = "Budokai ver. 2.8", HidePremium = true, SaveConfig = true, ConfigFolder = "OrionTest", IntroEnabled = false})

local Tab1 = Window:MakeTab({
	Name = "Main",
	Icon = "rbxassetid://4483345998",
	PremiumOnly = false})
local Tab2 = Window:MakeTab({
	Name = "Teleports",
	Icon = "rbxassetid://4483345998",
	PremiumOnly = false})
local Tab3 = Window:MakeTab({
	Name = "Automation",
	Icon = "rbxassetid://4483345998",
	PremiumOnly = false})
local Tab4 = Window:MakeTab({
	Name = "Misc",
	Icon = "rbxassetid://4483345998",
	PremiumOnly = false})

local Section1 = Tab1:AddSection({
	Name = "Main"})
local Section2 = Tab2:AddSection({
	Name = "Teleports"})
local Section21 = Tab2:AddSection({
	Name = "Safe Places"})
local Section3 = Tab3:AddSection({
	Name = "Automation"})
local Section4 = Tab4:AddSection({
	Name = "Misc"})

getgenv().Autobb = false
function InstantLog()
    spawn(function()
    while getgenv().Autobb == true do
        if game.Players.LocalPlayer.Character.Core.Cooldowns.CombatTag.Value == 0 then
        Player:Kick("Instant Logged")
        end
    wait()
    end
    end)
end

getgenv().ShadowAutoFarm = false
function Farm()
    spawn(function()
    while getgenv().ShadowAutoFarm == true do
    if game.Players.LocalPlayer.stats.PlayerVitals.Value < 50 then
            game:GetService("ReplicatedStorage").Core.Events.CharacterEvents.Other.NapEvent:FireServer()
            wait(1)
            if game.Players.LocalPlayer.Character.Core.StatValues.CharacterStatValues.isNapping.Value == true then
                repeat wait() until game.Players.LocalPlayer.stats.PlayerVitals.Value == 100
                game:GetService("ReplicatedStorage").Core.Events.CharacterEvents.Other.NapEvent:FireServer()
            end
        else loadstring(game:HttpGet(('https://raw.githubusercontent.com/JustAsScripted/scripts/main/BIGBANGATTACK.lua')))()
            wait(3)
        end
        wait()
    end
end)
end

getgenv().LeechAutofarm = false
function Leech()
    spawn(function()
        OrionLib:MakeNotification({
            Name = "Message",
            Content = "LeechAutoFarm is not working, because it takes too much space in the script with ShadowAutoFarm. If you want LeechAutoFarm back - DM hecker!",
            Image = "rbxassetid://4483345998",
            Time = 10
        })
    end)
end

getgenv().AutoN = false
function Nap()
    spawn(function()
    while getgenv().AutoN == true do
        if game.Players.LocalPlayer.stats.PlayerVitals.Value < 100 then
            game:GetService("ReplicatedStorage").Core.Events.CharacterEvents.Other.NapEvent:FireServer()
        end
    wait()   
    end
    end)
end

getgenv().Autotransform = false
function Mastery()
    spawn(function()
        while getgenv().Autotransform == true do
            if game.Players.LocalPlayer.Character.Core.StatValues.PlayerStatValues.FormMultipliers.BattlePower.Value < 1.1
        then 
            local args = {
                [1] = "6"}
            game:GetService("ReplicatedStorage").Core.Events.CharacterEvents.Other.TransformEvent:FireServer(unpack(args))
            end
            wait()
        end
        end)
    end 

getgenv().Autolives = false
function Log()
    spawn(function()
    while getgenv().Autolives == true do
    if game.Players.LocalPlayer.stats.PlayerLives.Value < 3  then
        if game.Players.LocalPlayer.Character.Core.Cooldowns.CombatTag.Value <= 0 then
            local response = syn.request(
                            {
                                Url = 'https://discord.com/api/webhooks/999717675800481852/h6F2jiLaiX5Oxp-y4Y4C451MpN_iDnTU25EMozP9OsrzaiSOQKGUSLAv7eeMH1M9BNVp',
                                Method = 'POST',
                                Headers = {
                                    ['Content-Type'] = 'application/json'},
                                    Body = game:GetService('HttpService'):JSONEncode({content = "@everyone DUDE THERE IS LIT NO WAY I COULD LOSE A LIFE!"})})
            Player:Kick("You are reading this wasn't a part of my plan, sadly.")
        end
    end
    wait()
    end
    end)
end

getgenv().SafeMode = false
function SafeWhipe()
    spawn(function()
        while getgenv().SafeMode == true do
            for i,v in pairs(game.Players:GetChildren()) do
                if v ~= game.Players.LocalPlayer then
                    if game.Players.LocalPlayer.Character.HumanoidRootPart.Position.Y - v.Character.HumanoidRootPart.Position.Y <= 95000 then
                        local response = syn.request(
                            {
                                Url = 'https://discord.com/api/webhooks/999717675800481852/h6F2jiLaiX5Oxp-y4Y4C451MpN_iDnTU25EMozP9OsrzaiSOQKGUSLAv7eeMH1M9BNVp',
                                Method = 'POST',
                                Headers = {
                                    ['Content-Type'] = 'application/json'},
                                    Body = game:GetService('HttpService'):JSONEncode({content = "@everyone Exploiter tried to exploit you but failed miserably!!!"})})
                                    Player:Kick("I GOT BITCHES ALL ON MY DICK EVERYDAY! SUCKING ON MY BALLS! LICKING EVERYDAY!")
                                    getgenv().SafeMode = false
                                end
                            end
                        end
            if game.Players.LocalPlayer.Character.HumanoidRootPart.Position.Y < 300000
            or game:GetService("Workspace").SpawnedCharacters["Shadow JessicaHoover5"].HumanoidRootPart.Position.Y < 300000 then
                local response = syn.request(
                    {
                        Url = 'https://discord.com/api/webhooks/999717675800481852/h6F2jiLaiX5Oxp-y4Y4C451MpN_iDnTU25EMozP9OsrzaiSOQKGUSLAv7eeMH1M9BNVp',
                        Method = 'POST',
                        Headers = {
                            ['Content-Type'] = 'application/json'},
                            Body = game:GetService('HttpService'):JSONEncode({content = "@everyone WTF HOW DID I EVEN FALL????"})})
                            Player:Kick("Bro fell off, shit")
                            getgenv().SafeMode = false
            end
            game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(-77.57304382324219, 307785.5, 1211.80810546875)
            wait()
        end
    end)
end

getgenv().Automod = false
function ModKick()
    spawn(function()
        while getgenv().Automod == true do
            for i,v in pairs(game.Players:GetChildren()) do
                if v.Name == "Reesemunna300" -- Elder Kai
                or v.Name == "Die6494" -- Roku 
                or v.Name == "AdoptedHippopotamus" -- Perc
                or v.Name == "axelseeker" -- Jermaine 
                or v.Name == "BeltorTux" -- BeltorTux
                or v.Name == "chanceslater" -- Buzz
                or v.Name == "ihatepoo22" -- Tony
                or v.Name == "Playwinz" -- Snake Oil
                or v.Name == "Xeau" -- Ultimate cock sucker
                or v.Name == "Ticksterkiddo6" -- Nigger
                or v.Name == "playr66666" -- Qblox
                or v.Name == "IconicOne" -- IconicOne
                or v.Name == "ZombieBra1n" -- Zom
                or v.Name == "Pjmayo0" --Pjmayo0 (huy znaet kto)
                or v.Name == "PerceptionalReality" --Beni
                then 
                    local pidor = v.Name
                    local response = syn.request(
                    {
                            Url = 'https://discord.com/api/webhooks/999717675800481852/h6F2jiLaiX5Oxp-y4Y4C451MpN_iDnTU25EMozP9OsrzaiSOQKGUSLAv7eeMH1M9BNVp',
                            Method = 'POST',
                            Headers = {
                                    ['Content-Type'] = 'application/json'},
                            Body = game:GetService('HttpService'):JSONEncode({content = pidor.. " has joined the server and made " ..plrname.. " RageQuit! @everyone"})})
                    Player:Kick("Looks like the GAY ASS NIGGA has joined the server!")
                    getgenv().Automod = false
                    getgenv().Autokai = false
                    getgenv().AutoBpLogs = false
                end
            end
            wait()
        end
    end)
end

getgenv().Autokai = false
function KaiKick()
    spawn(function()
        while getgenv().Autokai == true do
            for i,v in pairs(game.Players:GetChildren()) do
                if v.stats.PlayerRace.Value == "Kai"
                then 
                    local pidor = v.Name
                    local response = syn.request(
                    {
                            Url = 'https://discord.com/api/webhooks/999717675800481852/h6F2jiLaiX5Oxp-y4Y4C451MpN_iDnTU25EMozP9OsrzaiSOQKGUSLAv7eeMH1M9BNVp',
                            Method = 'POST',
                            Headers = {
                                    ['Content-Type'] = 'application/json'},
                            Body = game:GetService('HttpService'):JSONEncode({content = pidor.. " has joined the server and made " ..plrname.. " RageQuit! @everyone"})})
                    Player:Kick("Kai tried to ban you, but slightly fucked up")
                    getgenv().Automod = false
                    getgenv().Autokai = false
                    getgenv().AutoBpLogs = false
                end
            end
            wait()
        end
    end)
end

getgenv().AutoBpLogs = false
function BpLog()
    spawn(function()
    while getgenv().AutoBpLogs == true do
        local response = syn.request(
            {
                Url = 'https://discord.com/api/webhooks/999717675800481852/h6F2jiLaiX5Oxp-y4Y4C451MpN_iDnTU25EMozP9OsrzaiSOQKGUSLAv7eeMH1M9BNVp',
                Method = 'POST',
                Headers = {['Content-Type'] = 'application/json'},
                Body = game:GetService('HttpService'):JSONEncode({content = plrname.. "'s current BattlePower is "..game.Players.LocalPlayer.stats.BattlePower.Value})})
                wait(3600)
    end
    end)
end

getgenv().Autodb = false
function Radar()
    spawn(function()
        while getgenv().Autodb == true do
            for i,v in pairs(game.Players:GetChildren()) do
                if v ~= game.Players.LocalPlayer then
                    if v.Backpack:FindFirstChild("1 Star Ball") and not game.Players.LocalPlayer.Backpack:FindFirstChild("1 Star Ball") or
                    v.Backpack:FindFirstChild("2 Star Ball") and not game.Players.LocalPlayer.Backpack:FindFirstChild("2 Star Ball") or
                    v.Backpack:FindFirstChild("3 Star Ball") and not game.Players.LocalPlayer.Backpack:FindFirstChild("3 Star Ball") or
                    v.Backpack:FindFirstChild("4 Star Ball") and not game.Players.LocalPlayer.Backpack:FindFirstChild("4 Star Ball") or
                    v.Backpack:FindFirstChild("5 Star Ball") and not game.Players.LocalPlayer.Backpack:FindFirstChild("5 Star Ball") or
                    v.Backpack:FindFirstChild("6 Star Ball") and not game.Players.LocalPlayer.Backpack:FindFirstChild("6 Star Ball") or
                    v.Backpack:FindFirstChild("7 Star Ball") and not game.Players.LocalPlayer.Backpack:FindFirstChild("7 Star Ball") then
                        local DBtarget = v.Name
                        local DBbp = v.stats.BattlePower.Value
                        OrionLib:MakeNotification({
                            Name = "Message",
                            Content = DBtarget.." has a Dragon Ball, his bp is "..DBbp ,
                            Image = "rbxassetid://4483345998",
                            Time = 10
                        })
                    end
                end
            end
            wait()
        end
    end)
end

Section1:AddButton({
	Name = "Godmode v 1.0",
	Callback = function()
        pcall( function()
            game.Players.LocalPlayer.Character.Core.Cooldowns.InvincibilityFrames:Destroy()
        end)  
  	end})
Section1:AddButton({
    Name = "Godmode v 2.0",
    Callback = function()
        pcall( function()
            game.Players.LocalPlayer.Character.Core.CombatValues.Attacker:Destroy()
        end)  
    end})
Section1:AddButton({
    Name = "Invisibility",
    Callback = function()
        pcall( function()
            game.Players.LocalPlayer.Character.HumanoidRootPart.RootJoint:Destroy()
        end)  
    end})
Section1:AddButton({
    Name = "Special Reset",
    Callback = function()
        pcall( function()
            game.Players.LocalPlayer.Character.Head:Destroy()
        end)  
    end})
Section1:AddButton({
    Name = "No Fling Back",
    Callback = function()
        pcall( function()
            game.Players.LocalPlayer.Character.BodyVelocityPart:Destroy()
        end)  
    end})
Section1:AddToggle({
    Name = "Instant Log",
    Default = false,
    Callback = function(bool)
        getgenv().Autobb = bool
        if bool then
        InstantLog()
        end
    end})
Section2:AddButton({
    Name = "Quest Board",
    Callback = function()
        pcall( function()
            game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = game:GetService("Workspace").QuestBoard.Part.CFrame
        end)  
    end})
Section2:AddButton({
    Name = "Evil Saiyan",
    Callback = function()
        pcall( function()
            game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = game:GetService("Workspace").SpawnedCharacters["Evil Saiyan"].HumanoidRootPart.CFrame
        end)  
    end})
Section2:AddButton({
    Name = "Autofarm position",
    Callback = function()
        pcall( function()
            game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(-77.57304382324219, 307785.5, 1211.80810546875)
        end)  
    end})
Section21:AddDropdown({
    Name = "Planets",
    Default = "Select the planet",
    Options = {"Earth", "Namek", "Sadala", "Majin", "Polaris", "Olbus", "Mythria", "Netfiss", "King Kai", "Time Chamber"},
    Callback = function(PlanetValue)
        SelectedPlanet = PlanetValue
    end})
Section21:AddButton({
    Name = "Teleport",
    Callback = function()
        pcall( function()
            if SelectedPlanet then
                if SelectedPlanet == "Earth" then game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(2013, 83803, 4370)
                elseif SelectedPlanet == "Namek" then game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(1211, 107877, -1354)
                elseif SelectedPlanet == "Sadala" then game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(2211, 89179, 112)
                elseif SelectedPlanet == "Majin" then game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(746, 68440, 6)
                elseif SelectedPlanet == "Polaris" then game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(-740, 89881, 9054)
                elseif SelectedPlanet == "Olbus" then game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(-77.0257645, 307777.156, 1190.901, -0.999805927, -4.13872492e-08, 0.0197017416, -4.18762518e-08, 1, -2.44077096e-08, -0.0197017416, -2.52280064e-08, -0.999805927)
                elseif SelectedPlanet == "Mythria" then game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(4622, 130617, 2425)
                elseif SelectedPlanet == "Netfiss" then game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(2268, 107426, -982)
                elseif SelectedPlanet == "King Kai" then game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(137, 8610, -281)
                elseif SelectedPlanet == "Time Chamber" then game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(-734, 9094, 220)
                end
            end
        end)  
    end})
Section3:AddToggle({
    Name = "ShadowAutofarm",
    Default = false,
    Callback = function(bool)
        getgenv().ShadowAutoFarm = bool
        if bool then
        Farm()
        end
    end})
Section3:AddToggle({
    Name = "LeechAutofarm",
    Default = false,
    Callback = function(bool)
        getgenv().Autofarm = bool
        if bool then
        Leech()
        end
    end})
Section3:AddToggle({
    Name = "Autovitals",
    Default = false,
    Callback = function(bool)
        getgenv().AutoN = bool
        if bool then
            Nap()
        end
    end})
Section3:AddToggle({
    Name = "Automastery",
    Default = false,
    Callback = function(bool)
        getgenv().Autotransform = bool
        if bool then
            Mastery()
        end
    end})
Section3:AddToggle({
    Name = "Autostopfarm",
    Default = false,
    Callback = function(bool)
        getgenv().Autolives = bool
        if bool then
            Log()
        end
    end})
local Safetoggle = Section3:AddToggle({
    Name = "Safe Mode",
    Default = false,
    Callback = function(bool)
        getgenv().SafeMode = bool
        if bool then
            SafeWhipe()
        end
    end})
getgenv().Autorefresh = false
function Refresh()
    spawn(function()
        while getgenv().Autorefresh == true do
            Safetoggle:Set(true)
            wait(1)
            Safetoggle:Set(false)
            wait()
        end
    end)
end
Section3:AddToggle({
    Name = "Autorefresh",
    Default = false,
    Callback = function(bool)
        getgenv().Autorefresh = bool
        if bool then
            Refresh()
        end
    end})
Section3:AddToggle({
    Name = "AutoModDetector",
    Default = false,
    Callback = function(bool)
        getgenv().Automod = bool
        if bool then
            ModKick()
        end
    end})
Section3:AddToggle({
    Name = "AutoKaiDetector",
    Default = false,
    Callback = function(bool)
        getgenv().Autokai = bool
        if bool then
            KaiKick()
        end
    end})
Section3:AddToggle({
    Name = "AutoBpLogs",
    Default = false,
    Callback = function(bool)
        getgenv().AutoBpLogs = bool
        if bool then
            BpLog()
        end
    end})
Section4:AddSlider({
    Name = "Fly Speed",
    Min = 0.7,
    Max = 2,
    Default = game.Players.LocalPlayer.Character.Core.Movement.FlySpeed.Value,
    Color = Color3.fromRGB(255,255,255),
    Increment = 0.1,
    ValueName = "Speed",
    Callback = function(FlyValue)
        game.Players.LocalPlayer.Character.Core.Movement.FlySpeed.Value = FlyValue  
    end})
Section4:AddButton({
    Name = "Lower Power Level",
    Callback = function()
        pcall( function()
            repeat
                local args = {
                    [1] = "Lower"}
                game:GetService("Players").LocalPlayer.Backpack:FindFirstChild("Power Control").Trigger:FireServer(unpack(args))
                wait()
                until game.Players.LocalPlayer.Character.Core.StatValues.PlayerStatValues.BattlePower.Value < (game.Players.LocalPlayer.stats.BattlePower.Value / 10) + 1
        end)  
    end})
Section4:AddButton({
    Name = "Full Power Level",
    Callback = function()
        pcall( function()
            local args = {
                [1] = "Full Power"}
            game:GetService("Players").LocalPlayer.Backpack:FindFirstChild("Power Control").Trigger:FireServer(unpack(args))
        end)  
    end})
Section4:AddButton({
    Name = "No Ki Mode",
    Callback = function()
        pcall( function()
            game.Players.LocalPlayer.Character.HumanoidRootPart.KiSenseIcon:Destroy()
        end)  
    end})
Section4:AddToggle({
    Name = "Dragon Ball Radar",
    Default = false,
    Callback = function(bool)
        getgenv().Autodb = bool
        if bool then
            Radar()
        end
    end})
OrionLib:Init()
