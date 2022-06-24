local Character = game:GetService("Players").LocalPlayer.Character
local Player = game.Players.LocalPlayer
local OrionLib = loadstring(game:HttpGet(('https://raw.githubusercontent.com/shlexware/Orion/main/source')))()
local Window = OrionLib:MakeWindow({Name = "Budokai", HidePremium = true, SaveConfig = true, ConfigFolder = "OrionTest", IntroEnabled = false})

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

getgenv().Autofarm = false
function Farm()
    spawn(function()
    while getgenv().Autofarm == true do
        if game:GetService("Players").Jojo_vevo.stats.PlayerVitals.Value < 10 then
            wait(40)
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

getgenv().AutoN = false
function Nap()
    spawn(function()
    while getgenv().AutoN == true do
        if game:GetService("Players").Jojo_vevo.stats.PlayerVitals.Value < 95 then
        game:GetService("ReplicatedStorage").Core.Events.CharacterEvents.Other.NapEvent:FireServer()
        end
        if game:GetService("Players").Jojo_vevo.stats.PlayerVitals.Value >= 95 then
            if game:GetService("Workspace").SpawnedCharacters.Jojo_vevo.Core.StatValues.CharacterStatValues.isNapping.Value == true then
                game:GetService("ReplicatedStorage").Core.Events.CharacterEvents.Other.NapEvent:FireServer() 
            end
        end
    wait()   
    end
    end)
end

getgenv().Auto6 = false
function Mastery()
    spawn(function()
    while getgenv().Auto6 == true do
        if game:GetService("Workspace").SpawnedCharacters.Jojo_vevo.Core.StatValues.PlayerStatValues.FormMultipliers.BattlePower.Value < 1.1
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
    if game:GetService("Players")["Jojo_vevo"].stats.PlayerLives.Value < 2  then
        if game:GetService("Players")["Jojo_vevo"].PlayerGui.PlayerUi.CombatTag.Text ~= "IN COMBAT" then
            Player:Kick("You are reading this wasn't a part of my plan, sadly.")
        end
    end
    wait()
    end
    end)
end

Section1:AddButton({
	Name = "Godmode",
	Callback = function()
        pcall( function()
            game.Players.LocalPlayer.Character.Core.Cooldowns.InvincibilityFrames:Destroy()
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
    Name = "Instant Log",
    Callback = function()
        pcall( function()
            Player:Kick("Instant Log")
        end)  
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
Section21:AddButton({
    Name = "Polaris",
    Callback = function()
        pcall( function()
            game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(2046, 441, 10073)
        end)  
    end})
Section21:AddButton({
    Name = "Sadala",
    Callback = function()
        pcall( function()
            game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(1045, 729, -1242)
        end)  
    end})
Section21:AddButton({
    Name = "King Kai",
    Callback = function()
        pcall( function()
            game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(137, 8610, -281)
        end)  
    end})
Section21:AddButton({
    Name = "Time Chamber",
    Callback = function()
        pcall( function()
            game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(-734, 9094, 220)
        end)  
    end})
Section3:AddToggle({
    Name = "Autofarm",
    Default = false,
    Callback = function(bool)
        getgenv().Autofarm = bool
        if bool then
        Farm()
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
        getgenv().Auto6 = bool
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
Section4:AddSlider({
    Name = "Fly Speed",
    Min = 0.7,
    Max = 2,
    Default = 0.7,
    Color = Color3.fromRGB(255,255,255),
    Increment = 0.1,
    ValueName = "Speed",
    Callback = function(FlyValue)
        game:GetService("Workspace").SpawnedCharacters["Jojo_vevo"].Core.Movement.FlySpeed.Value = FlyValue 
    end})
Section4:AddButton({
    Name = "Lower Power Level",
    Callback = function()
        pcall( function()
            local args = {
                [1] = "Lower"}
            game:GetService("Players").LocalPlayer.Backpack:FindFirstChild("Power Control").Trigger:FireServer(unpack(args))
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
OrionLib:Init()
