local plr = game:GetService("Players").LocalPlayer.Character
local player = game.Players.LocalPlayer

local library = loadstring(game:HttpGet("https://raw.githubusercontent.com/zxciaz/VenyxUI/main/Reuploaded"))() --someone reuploaded it so I put it in place of the original back up so guy can get free credit.
local venyx = library.new("Budokai", 5013109572)

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
local section1 = page1:addSection("Main")
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
local section2 = page2:addSection("Teleports")
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
venyx:SelectPage(venyx.pages[1], true)
