repeat wait() until game:IsLoaded()
repeat
    local args = {
        [1] = "Lower"}
    game:GetService("Players").LocalPlayer.Backpack:FindFirstChild("Power Control").Trigger:FireServer(unpack(args))
    wait()
    until game.Players.LocalPlayer.PlayerGui.PlayerUi.Output.Text == "Power Output: 10%"
local Player = game.Players.LocalPlayer
local plrname = game.Players.LocalPlayer.Name
local OrionLib = loadstring(game:HttpGet(('https://raw.githubusercontent.com/shlexware/Orion/main/source')))()
local Window = OrionLib:MakeWindow({Name = "Budokai ver. 2.45", HidePremium = true, SaveConfig = true, ConfigFolder = "OrionTest", IntroEnabled = false})

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
        repeat
            game:GetService("ReplicatedStorage").Core.Events.CharacterEvents.Other.NapEvent:FireServer()
                wait()
        until game.Players.LocalPlayer.stats.PlayerVitals.Value == 100
    else local args = {
        [1] = "RegularAttack"}
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))         
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
    game:GetService("ReplicatedStorage").Core.Events.CombatEvents.Attack.BasicAttack:FireServer(unpack(args))
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
        if game.Players.LocalPlayer.Character.Core.Cooldowns.CombatTag.Value == 0 then
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
                if game.Players.LocalPlayer.Character.HumanoidRootPart.Position.Y - v.Character.HumanoidRootPart.Position.Y <= 10000 then
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
                or v.Name == "Xeau" -- Dick sucker
                or v.Name == "Ticksterkiddo6" -- Nigger
                or v.Name == "playr66666" -- Qblox
                or v.Name == "IconicOne" -- IconicOne
                or v.Name == "ZombieBra1n" -- Zom
                or v.Name == "Pjmayo0" --Pjmayo0(huy znaet kto)
                then 
                    local pidor = v.Name
                    local response = syn.request(
                    {
                            Url = 'https://discord.com/api/webhooks/999717675800481852/h6F2jiLaiX5Oxp-y4Y4C451MpN_iDnTU25EMozP9OsrzaiSOQKGUSLAv7eeMH1M9BNVp',
                            Method = 'POST',
                            Headers = {
                                    ['Content-Type'] = 'application/json'},
                            Body = game:GetService('HttpService'):JSONEncode({content = pidor.. " has joined the server and made " ..plrname.. " RageQuit!"})})
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
                            Body = game:GetService('HttpService'):JSONEncode({content = pidor.. " has joined the server and made " ..plrname.. " RageQuit!"})})
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
Section21:AddButton({
    Name = "Earth",
    Callback = function()
        pcall( function()
            game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(2013, 83803, 4370)
        end)
    end})
Section21:AddButton({
    Name = "Namek",
    Callback = function()
        pcall( function()
            game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(1211, 107877, -1354)
        end)
    end})
Section21:AddButton({
    Name = "Sadala",
    Callback = function()
        pcall( function()
            game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(2211, 89179, 112)
        end)  
    end})
Section21:AddButton({
    Name = "Majin",
    Callback = function()
        pcall( function()
            game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(746, 68440, 6)
        end)  
    end})
Section21:AddButton({
    Name = "Polaris",
    Callback = function()
        pcall( function()
            game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(-740, 89881, 9054)
        end)  
    end})
Section21:AddButton({
    Name = "Olbus",
    Callback = function()
        pcall( function()
            game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(-77.0257645, 307777.156, 1190.901, -0.999805927, -4.13872492e-08, 0.0197017416, -4.18762518e-08, 1, -2.44077096e-08, -0.0197017416, -2.52280064e-08, -0.999805927)
        end)  
    end})
Section21:AddButton({
    Name = "Mythria",
    Callback = function()
        pcall( function()
            game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(4622, 130617, 2425)
        end)  
    end})
Section21:AddButton({
    Name = "Netfiss",
    Callback = function()
        pcall( function()
            game.Players.LocalPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(2268, 107426, -982)
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
Section3:AddToggle({
    Name = "Safe Mode",
    Default = false,
    Callback = function(bool)
        getgenv().SafeMode = bool
        if bool then
            SafeWhipe()
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
                until game.Players.LocalPlayer.PlayerGui.PlayerUi.Output.Text == "Power Output: 10%"
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
Section4:AddButton({
    Name = "It has to be this way",
    Callback = function()
        pcall( function()
            local args = {
                [1] = "Standing here",
                [2] = "All"}
            game:GetService("ReplicatedStorage").DefaultChatSystemChatEvents.SayMessageRequest:FireServer(unpack(args))
            wait(3)
            local args = {
                [1] = "I realize",
                [2] = "All"}
            game:GetService("ReplicatedStorage").DefaultChatSystemChatEvents.SayMessageRequest:FireServer(unpack(args))
            wait(3)
            local args = {
                [1] = "You are just like me",
                [2] = "All"}
            game:GetService("ReplicatedStorage").DefaultChatSystemChatEvents.SayMessageRequest:FireServer(unpack(args))
            wait(3)
            local args = {
                [1] = "Trying to make history",
                [2] = "All"}
            game:GetService("ReplicatedStorage").DefaultChatSystemChatEvents.SayMessageRequest:FireServer(unpack(args))
            wait(3)
            local args = {
                [1] = "But who's to judge",
                [2] = "All"}
            game:GetService("ReplicatedStorage").DefaultChatSystemChatEvents.SayMessageRequest:FireServer(unpack(args))
            wait(3)
            local args = {
                [1] = "The right from wrong?",
                [2] = "All"}
            game:GetService("ReplicatedStorage").DefaultChatSystemChatEvents.SayMessageRequest:FireServer(unpack(args))
            wait(3)
            local args = {
                [1] = "When our guard is down",
                [2] = "All"}
            game:GetService("ReplicatedStorage").DefaultChatSystemChatEvents.SayMessageRequest:FireServer(unpack(args))
            wait(3)
            local args = {
                [1] = "I think we'll both agree",
                [2] = "All"}
            game:GetService("ReplicatedStorage").DefaultChatSystemChatEvents.SayMessageRequest:FireServer(unpack(args))
            wait(3)
            local args = {
                [1] = "That violence breeds violence",
                [2] = "All"}
            game:GetService("ReplicatedStorage").DefaultChatSystemChatEvents.SayMessageRequest:FireServer(unpack(args))
            wait(3)
            local args = {
                [1] = "But in the end it has to be this way",
                [2] = "All"}
            game:GetService("ReplicatedStorage").DefaultChatSystemChatEvents.SayMessageRequest:FireServer(unpack(args))
        end)  
    end})
OrionLib:Init()

--game.Players.LocalPlayer.Character.Core.StatValues.PlayerStatValues.DamageTakenIncrement.Value
--game.Players.LocalPlayer.Character.Core.CombatValues.BeingGrippedBy.Value
