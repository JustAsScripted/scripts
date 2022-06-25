local Character = game:GetService("Players").LocalPlayer.Character
local Player = game.Players.LocalPlayer
local Library = loadstring(game:HttpGet("https://raw.githubusercontent.com/zxciaz/VenyxUI/main/Reuploaded"))() --someone reuploaded it so I put it in place of the original back up so guy can get free credit.
local Venyx = Library.new("Budokai Justy ver.", 5013109572)

getgenv().Auto6 = false
function Mastery()
    spawn(function()
    while getgenv().Auto6 == true do
        if game:GetService("Workspace").SpawnedCharacters.Justy_vevo.Core.StatValues.PlayerStatValues.FormMultipliers.BattlePower.Value < 1.1
    then 
        local args = {
            [1] = "6"}
        game:GetService("ReplicatedStorage").Core.Events.CharacterEvents.Other.TransformEvent:FireServer(unpack(args))
        end
    wait()
    end
    end)
end

getgenv().AutoN = false
function Nap()
    spawn(function()
    while getgenv().AutoN == true do
        if game:GetService("Players").Justy_vevo.stats.PlayerVitals.Value < 95 then
        game:GetService("ReplicatedStorage").Core.Events.CharacterEvents.Other.NapEvent:FireServer()
        end
        if game:GetService("Players").Justy_vevo.stats.PlayerVitals.Value >= 95 then
            if game:GetService("Workspace").SpawnedCharacters.Justy_vevo.Core.StatValues.CharacterStatValues.isNapping.Value == true then
                game:GetService("ReplicatedStorage").Core.Events.CharacterEvents.Other.NapEvent:FireServer() 
            end
        end
    wait()   
    end
    end)
end

getgenv().Autofarm = false
function Farm()
    spawn(function()
    while getgenv().Autofarm == true do
        if game:GetService("Players").Justy_vevo.stats.PlayerVitals.Value < 50 then
            wait(60)
        else local args = {
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
        wait()
    end
    end)
end

getgenv().Autolives = false
function Log()
    spawn(function()
    while getgenv().Autolives == true do
    if game:GetService("Players")["Justy_vevo"].stats.PlayerLives.Value < 3 then
        player:Kick("You are reading this wasn't a part of my plan, sadly.")
    end
    wait()
    end
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

local page1 = Venyx:addPage("Main", 5012544693)
local page2 = Venyx:addPage("Teleports", 5012544693)
local page3 = Venyx:addPage("Automation", 5012544693)
local page4 = Venyx:addPage("Mobility", 5012544693)

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
section1:addButton("Special Reset", function()
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
    game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(2046, 441, 10073)
        end)
end)
section21:addButton("Sadala", function()
pcall( function()
    game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(1045, 729, -1242)
        end)
end)
section21:addButton("King Kai", function()
pcall( function()
    game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(137, 8610, -281)
        end)
end)
section21:addButton("Time Chamber", function()
pcall( function()
    game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(-734, 9094, 220)
        end)
end) 
section3:addToggle("Autofarm", false, function(bool)
    getgenv().Autofarm = bool
    if bool then
        Farm()
    end
end)
section3:addToggle("Autovitals", false, function(bool)
    getgenv().AutoN = bool
    if bool then
        Nap()
    end
end)
section3:addToggle("Automastery", false, function(bool)
    getgenv().Auto6 = bool
    if bool then
        Mastery()
    end
end)
section3:addToggle("Autostopfarm", false, function(bool)
    getgenv().Autolives = bool
    if bool then
        Log()
    end
end)
section4:addButton("Lower Power Level", function()
pcall( function()
    local args = {
        [1] = "Lower"}
    game:GetService("Players").LocalPlayer.Backpack:FindFirstChild("Power Control").Trigger:FireServer(unpack(args))
    end)
end)
section4:addButton("Full Power Level", function()
pcall( function()
    local args = {
        [1] = "Full Power"}
    game:GetService("Players").LocalPlayer.Backpack:FindFirstChild("Power Control").Trigger:FireServer(unpack(args))
    end)
end)
venyx:SelectPage(venyx.pages[1], true)
