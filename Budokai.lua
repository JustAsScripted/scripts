local plr = game:GetService("Players").LocalPlayer.Character
local player = game.Players.LocalPlayer
local library = loadstring(game:HttpGet("https://raw.githubusercontent.com/zxciaz/VenyxUI/main/Reuploaded"))() --someone reuploaded it so I put it in place of the original back up so guy can get free credit.
local venyx = library.new("Budokai", 5013109572)

getgenv().Auto6 = false
function Mastery()
    spawn(function()
    while getgenv().Auto6 == true do
        if game:GetService("Workspace").SpawnedCharacters.NooblyNoobylgton.Core.StatValues.PlayerStatValues.FormMultipliers.BattlePower.Value <= 1.2
    then 
        local args = {
            [1] = "6"}
        game:GetService("ReplicatedStorage").Core.Events.CharacterEvents.Other.TransformEvent:FireServer(unpack(args))
        else wait()
        end
        wait()
    end
    end)
end

getgenv().Autom1 = false
function Autoclick()
    spawn(function()
    while getgenv().Autom1 == true do
        local args = {
            [1] = "RegularAttack"}
        game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
        wait(0.3)
        game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
        wait(0.3)
        game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
        wait(0.3)
        game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
        wait(1)
        end
    end)
end

getgenv().AutoN = false
function Nap()
    spawn(function()
    while getgenv().AutoN == true do
        if game:GetService("Players").NooblyNoobylgton.stats.PlayerVitals.Value < 85 then
        game:GetService("ReplicatedStorage").Core.Events.CharacterEvents.Other.NapEvent:FireServer()
        else if game:GetService("Workspace").SpawnedCharacters.NooblyNoobylgton.Core.StatValues.CharacterStatValues.isNapping.Value == true then
            game:GetService("ReplicatedStorage").Core.Events.CharacterEvents.Other.NapEvent:FireServer()
        end
        end
        wait()
    end
    end)
end

getgenv().Autostop = false
function Stop()
    spawn(function()
    while getgenv().Autostop == true do
        if game:GetService("Players").NooblyNoobylgton.stats.PlayerVitals.Value < 10 then
            game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(-3674, 85, 3137)
            wait(30)
            game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(-3114, 76, 3179)
        else
            wait()
        end
        wait()
    end
    wait()
    end)
end

-- themes
local themes = {
Background = Color3.fromRGB(24, 24, 24),
Glow = Color3.fromRGB(0, 0, 0),
Accent = Color3.fromRGB(10, 10, 10),
LightContrast = Color3.fromRGB(20, 20, 20),
DarkContrast = Color3.fromRGB(14, 14, 14),  
TextColor = Color3.fromRGB(255, 255, 255)
}

local page1 = venyx:addPage("Main", 5012544693)
local page2 = venyx:addPage("Teleports", 5012544693)
local page3 = venyx:addPage("Automation", 5012544693)
local page4 = venyx:addPage("Mobility", 5012544693)

local section1 = page1:addSection("Main")
local section2 = page2:addSection("Teleports")
local section21 = page2:addSection("Safe Places")
local section3 = page3:addSection("Automation")
local section4 = page4:addSection("Mobility")

section1:addButton("Godmode", function()
pcall( function()
    game.Players.LocalPlayer.Character.Core.Cooldowns.InvincibilityFrames:Destroy()
        end)  
end)
section1:addButton("Reset without loosing anything", function()
    pcall( function()
        game.Players.LocalPlayer.Character.Head:Destroy()
        end)
end)
section1:addButton("Instant Log", function()
    pcall( function()
     player:Kick("Instant Log")
        end)
end)
section2:addButton("Quest Board", function()
pcall( function()
    game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = game:GetService("Workspace").QuestBoard.Part.CFrame
        end)
end)
section2:addButton("Evil Saiyan", function()
pcall( function()
    game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = game:GetService("Workspace").SpawnedCharacters["Evil Saiyan"].HumanoidRootPart.CFrame
        end)
end)
section21:addButton("Polaris", function()
pcall( function()
    game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(1950, 431, 10029)
        end)
end)
section21:addButton("Sadala", function()
pcall( function()
    game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(-3114, 76, 3179)
        end)
end)
section21:addButton("King Kai", function()
pcall( function()
    game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(137, 8610, -281)
        end)
end) 
section3:addToggle("Autovitals", default, function(bool)
    getgenv().AutoN = bool
    if bool then
        Nap()
    end
end)
section3:addToggle("Autoattack", default, function(bool)
    getgenv().Autom1 = bool
    if true then
        Autoclick()
    end
end)
section3:addToggle("Automastery", default, function(bool)
    getgenv().Auto6 = bool
    if bool then
        Mastery()
    end
end)
section3:addToggle("Autoregen", default, function(bool)
    getgenv().Autostop = bool
    if bool then
        Stop()
    end
end)
venyx:SelectPage(venyx.pages[1], true)
