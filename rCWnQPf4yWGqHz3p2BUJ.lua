repeat task.wait() until game:IsLoaded()
getgenv().SecureMode = true
local Rayfield = loadstring(game:HttpGet('https://raw.githubusercontent.com/JustAsScripted/scripts/main/Custom%20Rayfield%20Library.lua'))()
local Window = Rayfield:CreateWindow({
    Name = "Vevo Hub (Infinity Sea 2)",
    LoadingTitle = "Vevo Hub",
    LoadingSubtitle = "Infinity Sea 2",
	ConfigurationSaving = {
		Enabled = true,
		FolderName = "Vevo Hub",
		FileName = "Vevo Hub",
	},
    KeySystem = true, 
    KeySettings = {
        Title = "Vevo Hub",
        Subtitle = "Login",
        Note = "Enter your key that you got.                           discord.gg/xHph38MAHZ",
		SaveKey = true,
        Key = "vevo"
    }
})

local MyPlayer = game.Players.LocalPlayer
local Players = game.Players:GetChildren()
local MyChar = MyPlayer.Character
local COREGUI = game:GetService("CoreGui")
local httprequest = (syn and syn.request)
local HumanMods = {}
local GC = getconnections or get_signal_cons
local WSIndex = nil
local JPIndex = nil
local wsLoop
local wsCA
local jpLoop
local jpCA
local floatDied
local FloatingLoop
local ChestDestroyed = 0

local MainTab = Window:CreateTab("Main", 4483362458)
local PlayerTab = Window:CreateTab("Player", 4483362458)
local TeleportTab = Window:CreateTab("Teleports", 4483362458)
local ESPTab = Window:CreateTab("ESP", 4483362458)
local CreditsTab = Window:CreateTab("Credits", 4483362458)

local MainSection = MainTab:CreateSection("Main")
local PlayerSection = PlayerTab:CreateSection("Player")
local TeleportSection = TeleportTab:CreateSection("Teleports")
local ESPSection = ESPTab:CreateSection("ESP")
local CreditsSection = CreditsTab:CreateSection("Credits")

getgenv().Noclipping = nil
getgenv().NCBind = false
getgenv().CurrentSpeed = 16
getgenv().CurrentJumpPower = 50
getgenv().AutoFloat = false
getgenv().YourTeleport = nil
getgenv().AutoPlrESP = false
getgenv().AutoFruitESP = false
getgenv().AutoChestESP = false
getgenv().AutoIslandESP = false
getgenv().AutoMobFarm = false
getgenv().YourIsland = nil

if GC then
	for i,v in pairs(GC(MyPlayer.Idled)) do
		if v["Disable"] then
			v["Disable"](v)
		elseif v["Disconnect"] then
			v["Disconnect"](v)
		end
	end
else
	MyPlayer.Idled:Connect(function()
		local VirtualUser = game:GetService("VirtualUser")
		VirtualUser:CaptureController()
		VirtualUser:ClickButton2(Vector2.new())
	end)
end
WSIndex = hookmetamethod(game, "__index", function(self, a)
	if self:IsA("Humanoid") and self:IsDescendantOf(MyChar) and a == "WalkSpeed" then
		return 16
	end
	return WSIndex(self, a)
end)
JPIndex = hookmetamethod(game, "__index", function(self, b)
	if self:IsA("Humanoid") and self:IsDescendantOf(MyChar) and b == "JumpPower" then
		return 50
	end
	return JPIndex(self, b)
end)

function getRoot(char)
	local rootPart = char:FindFirstChild('HumanoidRootPart') or char:FindFirstChild('Torso') or char:FindFirstChild('UpperTorso')
	return rootPart
end

function round(num, numDecimalPlaces)
	local mult = 10^(numDecimalPlaces or 0)
	return math.floor(num * mult + 0.5) / mult
end

function NoclipLoop()
	Clip = false
    if Clip == false and game.Players.LocalPlayer.Character ~= nil then
        for _, child in pairs(game.Players.LocalPlayer.Character:GetDescendants()) do
            if child:IsA("BasePart") and child.CanCollide == true and child.Name ~= floatName then
                child.CanCollide = false
            end
        end
    end
end

function Float()
	task.spawn(function()
		if MyChar then
			local Float = Instance.new('Part')
			Float.Name = "Float"
			Float.Parent = MyChar
			Float.Transparency = 1
			Float.Size = Vector3.new(2,0.2,1.5)
			Float.Anchored = true
			local MyCharPosX = MyChar.HumanoidRootPart.CFrame.X
			local MyCharPosY = MyChar.HumanoidRootPart.CFrame.Y
			local MyCharPosZ = MyChar.HumanoidRootPart.CFrame.Z
			Float.CFrame = CFrame.new(MyCharPosX, 0.4, MyCharPosZ)
			floatDied = MyChar:FindFirstChildOfClass('Humanoid').Died:Connect(function()
				FloatingLoop:Disconnect()
				Float:Destroy()
				floatDied:Disconnect()
			end)
			local function FloatLoop()
				if MyChar:FindFirstChild("Float") and getRoot(MyChar) then
					local MyCharPosX = MyChar.HumanoidRootPart.CFrame.X
					local MyCharPosY = MyChar.HumanoidRootPart.CFrame.Y
					local MyCharPosZ = MyChar.HumanoidRootPart.CFrame.Z
					Float.CFrame = CFrame.new(MyCharPosX, 0.4, MyCharPosZ)
				else
					FloatingLoop:Disconnect()
					Float:Destroy()
					floatDied:Disconnect()
				end
			end			
			FloatingLoop = game:GetService("RunService").Heartbeat:Connect(FloatLoop)
		end
	end)
end
function UnFloat()
	task.spawn(function()
		if MyChar:FindFirstChild("Float") then
			MyChar:FindFirstChild("Float"):Destroy()
		end
		if floatDied then
			FloatingLoop:Disconnect()
			floatDied:Disconnect()
		end
	end)
end

function ESP(plr)
	task.spawn(function()
		for i,v in pairs(COREGUI:GetChildren()) do
			if v.Name == plr.Name..'_ESP' then
				v:Destroy()
			end
		end
		wait()
		if plr.Character and plr.Name ~= MyPlayer.Name and not COREGUI:FindFirstChild(plr.Name..'_ESP') then
			local ESPholder = Instance.new("Folder")
			ESPholder.Name = plr.Name..'_ESP'
			ESPholder.Parent = COREGUI
			repeat wait(1) until plr.Character and getRoot(plr.Character) and plr.Character:FindFirstChildOfClass("Humanoid")
			for b,n in pairs (plr.Character:GetChildren()) do
				if (n:IsA("BasePart")) then
					local a = Instance.new("BoxHandleAdornment")
					a.Name = plr.Name
					a.Parent = ESPholder
					a.Adornee = n
					a.AlwaysOnTop = true
					a.ZIndex = 10
					a.Size = n.Size
					a.Transparency = 0.3
					a.Color = plr.TeamColor
				end
			end
			if plr.Character and plr.Character:FindFirstChild('Head') then
				local BillboardGui = Instance.new("BillboardGui")
				local TextLabel = Instance.new("TextLabel")
				BillboardGui.Adornee = plr.Character.Head
				BillboardGui.Name = plr.Name
				BillboardGui.Parent = ESPholder
				BillboardGui.Size = UDim2.new(0, 100, 0, 150)
				BillboardGui.StudsOffset = Vector3.new(0, 1, 0)
				BillboardGui.AlwaysOnTop = true
				TextLabel.Parent = BillboardGui
				TextLabel.BackgroundTransparency = 1
				TextLabel.Position = UDim2.new(0, 0, 0, -50)
				TextLabel.Size = UDim2.new(0, 100, 0, 100)
				TextLabel.Font = Enum.Font.SourceSansSemibold
				TextLabel.TextSize = 20
				TextLabel.TextColor3 = Color3.new(1, 1, 1)
				TextLabel.TextStrokeTransparency = 0
				TextLabel.TextYAlignment = Enum.TextYAlignment.Bottom
				TextLabel.Text = 'Name: '..plr.Name
				TextLabel.ZIndex = 10
				local espLoopFunc
                local teamChange
				local addedFunc
				addedFunc = plr.CharacterAdded:Connect(function()
					if ESPenabled then
						espLoopFunc:Disconnect()
						teamChange:Disconnect()
						ESPholder:Destroy()
						repeat wait(1) until getRoot(plr.Character) and plr.Character:FindFirstChildOfClass("Humanoid")
						ESP(plr)
						addedFunc:Disconnect()
					else
						teamChange:Disconnect()
						addedFunc:Disconnect()
					end
				end)
				teamChange = plr:GetPropertyChangedSignal("TeamColor"):Connect(function()
					if ESPenabled then
						espLoopFunc:Disconnect()
						addedFunc:Disconnect()
						ESPholder:Destroy()
						repeat wait(1) until getRoot(plr.Character) and plr.Character:FindFirstChildOfClass("Humanoid")
						ESP(plr)
						teamChange:Disconnect()
					else
						teamChange:Disconnect()
					end
				end)
				local function espLoop()
					if COREGUI:FindFirstChild(plr.Name..'_ESP') then
						if plr.Character and getRoot(plr.Character) and plr.Character:FindFirstChildOfClass("Humanoid") and MyChar and getRoot(MyChar) and MyChar:FindFirstChildOfClass("Humanoid") then
							local pos = math.floor((getRoot(MyChar).Position - getRoot(plr.Character).Position).Magnitude)
							TextLabel.Text = 'Name: '..plr.Name..' | Health: '..round(plr.Character:FindFirstChildOfClass('Humanoid').Health, 1)..' | Studs: '..pos
						end
					else
						teamChange:Disconnect()
						addedFunc:Disconnect()
						espLoopFunc:Disconnect()
					end
				end
				espLoopFunc = game:GetService("RunService").RenderStepped:Connect(espLoop)
			end
		end
	end)
end
function FruitESP()
    task.spawn(function()
        while getgenv().AutoFruitESP == true do task.wait()
            for i,v in pairs(game:GetService("Workspace")["___Game"]["___IgnoreMouse"]["___Fruits"]:GetDescendants()) do
                if v:IsA("Model") and v:FindFirstChild("___Click") and not v.Handle:FindFirstChild("BillboardGui") then
                    local BillboardGui = Instance.new("BillboardGui")
                    local TextLabel = Instance.new("TextLabel")
                    BillboardGui.Parent = v.Handle
                    BillboardGui.ZIndexBehavior = Enum.ZIndexBehavior.Sibling
                    BillboardGui.Active = true
                    BillboardGui.AlwaysOnTop = true
                    BillboardGui.LightInfluence = 1.000
                    BillboardGui.Size = UDim2.new(0, 200, 0, 50)
                    TextLabel.Parent = BillboardGui
                    TextLabel.BackgroundColor3 = Color3.fromRGB(255, 0, 0)
                    TextLabel.BackgroundTransparency = 1.000
                    TextLabel.Size = UDim2.new(0, 200, 0, 50)
                    TextLabel.Font = Enum.Font.SourceSansSemibold
                    TextLabel.TextColor3 = Color3.fromRGB(255, 0, 0)
                    TextLabel.TextSize = 24.000
                    TextLabel.Text = v.Name
                end
            end
        end
    end)
end
function NoFruitESP()
	task.spawn(function()
		while getgenv().AutoFruitESP == false do task.wait()
			for i,v in pairs(game:GetService("Workspace")["___Game"]["___IgnoreMouse"]["___Fruits"]:GetDescendants()) do
				if v:IsA("Model") and v:FindFirstChild("___Click") and v.Handle:FindFirstChild("BillboardGui") then
					v.Handle:FindFirstChild("BillboardGui"):Destroy()
				end
			end
		end
	end)
end
function IslandESP()
	task.spawn(function()
		for i,v in pairs(game:GetService("Workspace")["___Game"]["__Render"]:GetChildren()) do
			if v.Name == "Island_Starter" then
				local BillboardGui = Instance.new("BillboardGui")
				local TextLabel = Instance.new("TextLabel")
				BillboardGui.Parent = game:GetService("Workspace")["___Game"]["__Render"]["Island_Starter"]["__Spawns"].SpawnPoint.Root
				BillboardGui.Name = "IslandESP"
				BillboardGui.ZIndexBehavior = Enum.ZIndexBehavior.Sibling
				BillboardGui.Active = true
				BillboardGui.AlwaysOnTop = true
				BillboardGui.LightInfluence = 1.000
				BillboardGui.Size = UDim2.new(0, 200, 0, 50)
				TextLabel.Parent = BillboardGui
				TextLabel.BackgroundColor3 = Color3.fromRGB(0, 255, 0)
				TextLabel.BackgroundTransparency = 1.000
				TextLabel.Size = UDim2.new(0, 200, 0, 50)
				TextLabel.Font = Enum.Font.SourceSansSemibold
				TextLabel.TextColor3 = Color3.fromRGB(0, 255, 0)
				TextLabel.TextSize = 24.000
				TextLabel.Text = "Island Starter"
			elseif v.Name == "Shells_Town_Island" then
				local BillboardGui = Instance.new("BillboardGui")
				local TextLabel = Instance.new("TextLabel")
				BillboardGui.Parent = game:GetService("Workspace")["___Game"]["__Render"]["Shells_Town_Island"]["__Spawns"].SpawnPoint.Root
				BillboardGui.Name = "IslandESP"
				BillboardGui.ZIndexBehavior = Enum.ZIndexBehavior.Sibling
				BillboardGui.Active = true
				BillboardGui.AlwaysOnTop = true
				BillboardGui.LightInfluence = 1.000
				BillboardGui.Size = UDim2.new(0, 200, 0, 50)
				TextLabel.Parent = BillboardGui
				TextLabel.BackgroundColor3 = Color3.fromRGB(0, 255, 0)
				TextLabel.BackgroundTransparency = 1.000
				TextLabel.Size = UDim2.new(0, 200, 0, 50)
				TextLabel.Font = Enum.Font.SourceSansSemibold
				TextLabel.TextColor3 = Color3.fromRGB(0, 255, 0)
				TextLabel.TextSize = 24.000
				TextLabel.Text = "Shells Town Island"
			elseif v.Name == "Syrup_Island" then
				local BillboardGui = Instance.new("BillboardGui")
				local TextLabel = Instance.new("TextLabel")
				BillboardGui.Parent = game:GetService("Workspace")["___Game"]["__Render"]["Syrup_Island"]["__Spawns"].SpawnPoint.Root
				BillboardGui.Name = "IslandESP"
				BillboardGui.ZIndexBehavior = Enum.ZIndexBehavior.Sibling
				BillboardGui.Active = true
				BillboardGui.AlwaysOnTop = true
				BillboardGui.LightInfluence = 1.000
				BillboardGui.Size = UDim2.new(0, 200, 0, 50)
				TextLabel.Parent = BillboardGui
				TextLabel.BackgroundColor3 = Color3.fromRGB(0, 255, 0)
				TextLabel.BackgroundTransparency = 1.000
				TextLabel.Size = UDim2.new(0, 200, 0, 50)
				TextLabel.Font = Enum.Font.SourceSansSemibold
				TextLabel.TextColor3 = Color3.fromRGB(0, 255, 0)
				TextLabel.TextSize = 24.000
				TextLabel.Text = "Syrup Island"
			elseif v.Name == "Mini_Island" then
				local BillboardGui = Instance.new("BillboardGui")
				local TextLabel = Instance.new("TextLabel")
				BillboardGui.Parent = game:GetService("Workspace")["___Game"]["__Render"]["Mini_Island"].Trees.PalmTree.BOXDESTROYER
				BillboardGui.Name = "IslandESP"
				BillboardGui.ZIndexBehavior = Enum.ZIndexBehavior.Sibling
				BillboardGui.Active = true
				BillboardGui.AlwaysOnTop = true
				BillboardGui.LightInfluence = 1.000
				BillboardGui.Size = UDim2.new(0, 200, 0, 50)
				TextLabel.Parent = BillboardGui
				TextLabel.BackgroundColor3 = Color3.fromRGB(0, 255, 0)
				TextLabel.BackgroundTransparency = 1.000
				TextLabel.Size = UDim2.new(0, 200, 0, 50)
				TextLabel.Font = Enum.Font.SourceSansSemibold
				TextLabel.TextColor3 = Color3.fromRGB(0, 255, 0)
				TextLabel.TextSize = 24.000
				TextLabel.Text = "Mini Island"
			elseif v.Name == "Orange_Town_Island" then
				local BillboardGui = Instance.new("BillboardGui")
				local TextLabel = Instance.new("TextLabel")
				BillboardGui.Parent = game:GetService("Workspace")["___Game"]["__Render"]["Orange_Town_Island"]["__Spawns"].SpawnPoint.Root
				BillboardGui.Name = "IslandESP"
				BillboardGui.ZIndexBehavior = Enum.ZIndexBehavior.Sibling
				BillboardGui.Active = true
				BillboardGui.AlwaysOnTop = true
				BillboardGui.LightInfluence = 1.000
				BillboardGui.Size = UDim2.new(0, 200, 0, 50)
				TextLabel.Parent = BillboardGui
				TextLabel.BackgroundColor3 = Color3.fromRGB(0, 255, 0)
				TextLabel.BackgroundTransparency = 1.000
				TextLabel.Size = UDim2.new(0, 200, 0, 50)
				TextLabel.Font = Enum.Font.SourceSansSemibold
				TextLabel.TextColor3 = Color3.fromRGB(0, 255, 0)
				TextLabel.TextSize = 24.000
				TextLabel.Text = "Orange Town Island"
			elseif v.Name == "Baratie" then
				local BillboardGui = Instance.new("BillboardGui")
				local TextLabel = Instance.new("TextLabel")
				BillboardGui.Parent = game:GetService("Workspace")["___Game"]["__Render"].Baratie["__Spawns"].SpawnPoint.Root
				BillboardGui.Name = "IslandESP"
				BillboardGui.ZIndexBehavior = Enum.ZIndexBehavior.Sibling
				BillboardGui.Active = true
				BillboardGui.AlwaysOnTop = true
				BillboardGui.LightInfluence = 1.000
				BillboardGui.Size = UDim2.new(0, 200, 0, 50)
				TextLabel.Parent = BillboardGui
				TextLabel.BackgroundColor3 = Color3.fromRGB(0, 255, 0)
				TextLabel.BackgroundTransparency = 1.000
				TextLabel.Size = UDim2.new(0, 200, 0, 50)
				TextLabel.Font = Enum.Font.SourceSansSemibold
				TextLabel.TextColor3 = Color3.fromRGB(0, 255, 0)
				TextLabel.TextSize = 24.000
				TextLabel.Text = "Baratie"
			elseif v.Name == "Okama_Mini_Island" then
				local BillboardGui = Instance.new("BillboardGui")
				local TextLabel = Instance.new("TextLabel")
				BillboardGui.Parent = game:GetService("Workspace")["___Game"]["__Render"]["Okama_Mini_Island"]["__Spawns"].SpawnPoint.Root
				BillboardGui.Name = "IslandESP"
				BillboardGui.ZIndexBehavior = Enum.ZIndexBehavior.Sibling
				BillboardGui.Active = true
				BillboardGui.AlwaysOnTop = true
				BillboardGui.LightInfluence = 1.000
				BillboardGui.Size = UDim2.new(0, 200, 0, 50)
				TextLabel.Parent = BillboardGui
				TextLabel.BackgroundColor3 = Color3.fromRGB(0, 255, 0)
				TextLabel.BackgroundTransparency = 1.000
				TextLabel.Size = UDim2.new(0, 200, 0, 50)
				TextLabel.Font = Enum.Font.SourceSansSemibold
				TextLabel.TextColor3 = Color3.fromRGB(0, 255, 0)
				TextLabel.TextSize = 24.000
				TextLabel.Text = "Okama Mini Island"
			elseif v.Name == "Cave_Mini_Island" then
				local BillboardGui = Instance.new("BillboardGui")
				local TextLabel = Instance.new("TextLabel")
				BillboardGui.Parent = game:GetService("Workspace")["___Game"]["__Render"]["Cave_Mini_Island"]["__Map"].Trees.PalmTree.BOXDESTROYER
				BillboardGui.Name = "IslandESP"
				BillboardGui.ZIndexBehavior = Enum.ZIndexBehavior.Sibling
				BillboardGui.Active = true
				BillboardGui.AlwaysOnTop = true
				BillboardGui.LightInfluence = 1.000
				BillboardGui.Size = UDim2.new(0, 200, 0, 50)
				TextLabel.Parent = BillboardGui
				TextLabel.BackgroundColor3 = Color3.fromRGB(0, 255, 0)
				TextLabel.BackgroundTransparency = 1.000
				TextLabel.Size = UDim2.new(0, 200, 0, 50)
				TextLabel.Font = Enum.Font.SourceSansSemibold
				TextLabel.TextColor3 = Color3.fromRGB(0, 255, 0)
				TextLabel.TextSize = 24.000
				TextLabel.Text = "Cave Mini Island"
			elseif v.Name == "Flying_Mini_Island" then
				local BillboardGui = Instance.new("BillboardGui")
				local TextLabel = Instance.new("TextLabel")
				BillboardGui.Parent = game:GetService("Workspace")["___Game"]["__Render"]["Flying_Mini_Island"].FlyingIsland.Portal.MeshPart
				BillboardGui.Name = "IslandESP"
				BillboardGui.ZIndexBehavior = Enum.ZIndexBehavior.Sibling
				BillboardGui.Active = true
				BillboardGui.AlwaysOnTop = true
				BillboardGui.LightInfluence = 1.000
				BillboardGui.Size = UDim2.new(0, 200, 0, 50)
				TextLabel.Parent = BillboardGui
				TextLabel.BackgroundColor3 = Color3.fromRGB(0, 255, 0)
				TextLabel.BackgroundTransparency = 1.000
				TextLabel.Size = UDim2.new(0, 200, 0, 50)
				TextLabel.Font = Enum.Font.SourceSansSemibold
				TextLabel.TextColor3 = Color3.fromRGB(0, 255, 0)
				TextLabel.TextSize = 24.000
				TextLabel.Text = "Flying Mini Island"
			elseif v.Name == "Jungle_Island" then
				local BillboardGui = Instance.new("BillboardGui")
				local TextLabel = Instance.new("TextLabel")
				BillboardGui.Parent = game:GetService("Workspace")["___Game"]["__Render"]["Jungle_Island"]["__Spawns"].SpawnPoint.Root
				BillboardGui.Name = "IslandESP"
				BillboardGui.ZIndexBehavior = Enum.ZIndexBehavior.Sibling
				BillboardGui.Active = true
				BillboardGui.AlwaysOnTop = true
				BillboardGui.LightInfluence = 1.000
				BillboardGui.Size = UDim2.new(0, 200, 0, 50)
				TextLabel.Parent = BillboardGui
				TextLabel.BackgroundColor3 = Color3.fromRGB(0, 255, 0)
				TextLabel.BackgroundTransparency = 1.000
				TextLabel.Size = UDim2.new(0, 200, 0, 50)
				TextLabel.Font = Enum.Font.SourceSansSemibold
				TextLabel.TextColor3 = Color3.fromRGB(0, 255, 0)
				TextLabel.TextSize = 24.000
				TextLabel.Text = "Jungle Island"
			end
		end
	end)
end
function NoIslandESP()
	task.spawn(function()
		for i,v in pairs(game:GetService("Workspace")["___Game"]["__Render"]:GetDescendants()) do
			if v:IsA("BillboardGui") and v.Name == "IslandESP" then
				v:Destroy()
			end
		end
	end)
end
function ChestESP()
    task.spawn(function()
		while getgenv().AutoChestESP == true do task.wait()
			for i,v in pairs(game:GetService("Workspace")["___Game"]["__Render"]["Island_Starter"]["__Chests"]:GetChildren()) do
				if v:IsA("MeshPart") and v:FindFirstChild("ClickDetector") and (MyChar.HumanoidRootPart.Position - v.Position).Magnitude < 1000 and not v:FindFirstChild("BillboardGui") then
					if v.Name == "Silver Chest" or v.Name == "Bronze Chest" or v.Name == "Gold Chest" then
						local BillboardGui = Instance.new("BillboardGui")
						local TextLabel = Instance.new("TextLabel")
						BillboardGui.Parent = v
						BillboardGui.ZIndexBehavior = Enum.ZIndexBehavior.Sibling
						BillboardGui.Active = true
						BillboardGui.AlwaysOnTop = true
						BillboardGui.LightInfluence = 1.000
						BillboardGui.Size = UDim2.new(0, 200, 0, 50)
						TextLabel.Parent = BillboardGui
						TextLabel.BackgroundColor3 = Color3.fromRGB(255, 255, 0)
						TextLabel.BackgroundTransparency = 1.000
						TextLabel.Size = UDim2.new(0, 200, 0, 50)
						TextLabel.Font = Enum.Font.SourceSansSemibold
						TextLabel.TextColor3 = Color3.fromRGB(255, 255, 0)
						TextLabel.TextSize = 24.000
						TextLabel.Text = v.Name
					end
				end
            end
			for i,v in pairs(game:GetService("Workspace")["___Game"]["__Render"]["Shells_Town_Island"]["__Chests"]:GetChildren()) do
				if v:IsA("MeshPart") and v:FindFirstChild("ClickDetector") and (MyChar.HumanoidRootPart.Position - v.Position).Magnitude < 1000 and not v:FindFirstChild("BillboardGui") then
					if v.Name == "Silver Chest" or v.Name == "Bronze Chest" or v.Name == "Gold Chest" then
						local BillboardGui = Instance.new("BillboardGui")
						local TextLabel = Instance.new("TextLabel")
						BillboardGui.Parent = v
						BillboardGui.ZIndexBehavior = Enum.ZIndexBehavior.Sibling
						BillboardGui.Active = true
						BillboardGui.AlwaysOnTop = true
						BillboardGui.LightInfluence = 1.000
						BillboardGui.Size = UDim2.new(0, 200, 0, 50)
						TextLabel.Parent = BillboardGui
						TextLabel.BackgroundColor3 = Color3.fromRGB(255, 255, 0)
						TextLabel.BackgroundTransparency = 1.000
						TextLabel.Size = UDim2.new(0, 200, 0, 50)
						TextLabel.Font = Enum.Font.SourceSansSemibold
						TextLabel.TextColor3 = Color3.fromRGB(255, 255, 0)
						TextLabel.TextSize = 24.000
						TextLabel.Text = v.Name
					end
				end
            end
			for i,v in pairs(game:GetService("Workspace")["___Game"]["__Render"]["Syrup_Island"]["__Chests"]:GetChildren()) do
				if v:IsA("MeshPart") and v:FindFirstChild("ClickDetector") and (MyChar.HumanoidRootPart.Position - v.Position).Magnitude < 1000 and not v:FindFirstChild("BillboardGui") then
					if v.Name == "Silver Chest" or v.Name == "Bronze Chest" or v.Name == "Gold Chest" then
						local BillboardGui = Instance.new("BillboardGui")
						local TextLabel = Instance.new("TextLabel")
						BillboardGui.Parent = v
						BillboardGui.ZIndexBehavior = Enum.ZIndexBehavior.Sibling
						BillboardGui.Active = true
						BillboardGui.AlwaysOnTop = true
						BillboardGui.LightInfluence = 1.000
						BillboardGui.Size = UDim2.new(0, 200, 0, 50)
						TextLabel.Parent = BillboardGui
						TextLabel.BackgroundColor3 = Color3.fromRGB(255, 255, 0)
						TextLabel.BackgroundTransparency = 1.000
						TextLabel.Size = UDim2.new(0, 200, 0, 50)
						TextLabel.Font = Enum.Font.SourceSansSemibold
						TextLabel.TextColor3 = Color3.fromRGB(255, 255, 0)
						TextLabel.TextSize = 24.000
						TextLabel.Text = v.Name
					end
				end
            end
			for i,v in pairs(game:GetService("Workspace")["___Game"]["__Render"]["Mini_Island"].Chest:GetChildren()) do
				if v:IsA("MeshPart") and v:FindFirstChild("ClickDetector") and (MyChar.HumanoidRootPart.Position - v.Position).Magnitude < 1000 and not v:FindFirstChild("BillboardGui") then
					if v.Name == "Silver Chest" or v.Name == "Bronze Chest" or v.Name == "Gold Chest" then
						local BillboardGui = Instance.new("BillboardGui")
						local TextLabel = Instance.new("TextLabel")
						BillboardGui.Parent = v
						BillboardGui.ZIndexBehavior = Enum.ZIndexBehavior.Sibling
						BillboardGui.Active = true
						BillboardGui.AlwaysOnTop = true
						BillboardGui.LightInfluence = 1.000
						BillboardGui.Size = UDim2.new(0, 200, 0, 50)
						TextLabel.Parent = BillboardGui
						TextLabel.BackgroundColor3 = Color3.fromRGB(255, 255, 0)
						TextLabel.BackgroundTransparency = 1.000
						TextLabel.Size = UDim2.new(0, 200, 0, 50)
						TextLabel.Font = Enum.Font.SourceSansSemibold
						TextLabel.TextColor3 = Color3.fromRGB(255, 255, 0)
						TextLabel.TextSize = 24.000
						TextLabel.Text = v.Name
					end
				end
            end
			for i,v in pairs(game:GetService("Workspace")["___Game"]["__Render"]["Orange_Town_Island"]["__Chests"]:GetChildren()) do
				if v:IsA("MeshPart") and v:FindFirstChild("ClickDetector") and (MyChar.HumanoidRootPart.Position - v.Position).Magnitude < 1000 and not v:FindFirstChild("BillboardGui") then
					if v.Name == "Silver Chest" or v.Name == "Bronze Chest" or v.Name == "Gold Chest" then
						local BillboardGui = Instance.new("BillboardGui")
						local TextLabel = Instance.new("TextLabel")
						BillboardGui.Parent = v
						BillboardGui.ZIndexBehavior = Enum.ZIndexBehavior.Sibling
						BillboardGui.Active = true
						BillboardGui.AlwaysOnTop = true
						BillboardGui.LightInfluence = 1.000
						BillboardGui.Size = UDim2.new(0, 200, 0, 50)
						TextLabel.Parent = BillboardGui
						TextLabel.BackgroundColor3 = Color3.fromRGB(255, 255, 0)
						TextLabel.BackgroundTransparency = 1.000
						TextLabel.Size = UDim2.new(0, 200, 0, 50)
						TextLabel.Font = Enum.Font.SourceSansSemibold
						TextLabel.TextColor3 = Color3.fromRGB(255, 255, 0)
						TextLabel.TextSize = 24.000
						TextLabel.Text = v.Name
					end
				end
			end
			for i,v in pairs(game:GetService("Workspace")["___Game"]["__Render"].Baratie["__Chests"]:GetChildren()) do
				if v:IsA("MeshPart") and v:FindFirstChild("ClickDetector") and (MyChar.HumanoidRootPart.Position - v.Position).Magnitude < 1000 and not v:FindFirstChild("BillboardGui") then
					if v.Name == "Silver Chest" or v.Name == "Bronze Chest" or v.Name == "Gold Chest" then
						local BillboardGui = Instance.new("BillboardGui")
						local TextLabel = Instance.new("TextLabel")
						BillboardGui.Parent = v
						BillboardGui.ZIndexBehavior = Enum.ZIndexBehavior.Sibling
						BillboardGui.Active = true
						BillboardGui.AlwaysOnTop = true
						BillboardGui.LightInfluence = 1.000
						BillboardGui.Size = UDim2.new(0, 200, 0, 50)
						TextLabel.Parent = BillboardGui
						TextLabel.BackgroundColor3 = Color3.fromRGB(255, 255, 0)
						TextLabel.BackgroundTransparency = 1.000
						TextLabel.Size = UDim2.new(0, 200, 0, 50)
						TextLabel.Font = Enum.Font.SourceSansSemibold
						TextLabel.TextColor3 = Color3.fromRGB(255, 255, 0)
						TextLabel.TextSize = 24.000
						TextLabel.Text = v.Name
					end
				end
			end
			for i,v in pairs(game:GetService("Workspace")["___Game"]["__Render"]["Okama_Mini_Island"]["__Chests"]:GetChildren()) do
				if v:IsA("MeshPart") and v:FindFirstChild("ClickDetector") and (MyChar.HumanoidRootPart.Position - v.Position).Magnitude < 1000 and not v:FindFirstChild("BillboardGui") then
					if v.Name == "Silver Chest" or v.Name == "Bronze Chest" or v.Name == "Gold Chest" then
						local BillboardGui = Instance.new("BillboardGui")
						local TextLabel = Instance.new("TextLabel")
						BillboardGui.Parent = v
						BillboardGui.ZIndexBehavior = Enum.ZIndexBehavior.Sibling
						BillboardGui.Active = true
						BillboardGui.AlwaysOnTop = true
						BillboardGui.LightInfluence = 1.000
						BillboardGui.Size = UDim2.new(0, 200, 0, 50)
						TextLabel.Parent = BillboardGui
						TextLabel.BackgroundColor3 = Color3.fromRGB(255, 255, 0)
						TextLabel.BackgroundTransparency = 1.000
						TextLabel.Size = UDim2.new(0, 200, 0, 50)
						TextLabel.Font = Enum.Font.SourceSansSemibold
						TextLabel.TextColor3 = Color3.fromRGB(255, 255, 0)
						TextLabel.TextSize = 24.000
						TextLabel.Text = v.Nam
					end
				end
			end
			for i,v in pairs(game:GetService("Workspace")["___Game"]["__Render"]["Jungle_Island"]["__Chests"]:GetChildren()) do
				if v:IsA("MeshPart") and v:FindFirstChild("ClickDetector") and (MyChar.HumanoidRootPart.Position - v.Position).Magnitude < 1000 and not v:FindFirstChild("BillboardGui") then
					if v.Name == "Silver Chest" or v.Name == "Bronze Chest" or v.Name == "Gold Chest" then
						local BillboardGui = Instance.new("BillboardGui")
						local TextLabel = Instance.new("TextLabel")
						BillboardGui.Parent = v
						BillboardGui.ZIndexBehavior = Enum.ZIndexBehavior.Sibling
						BillboardGui.Active = true
						BillboardGui.AlwaysOnTop = true
						BillboardGui.LightInfluence = 1.000
						BillboardGui.Size = UDim2.new(0, 200, 0, 50)
						TextLabel.Parent = BillboardGui
						TextLabel.BackgroundColor3 = Color3.fromRGB(255, 255, 0)
						TextLabel.BackgroundTransparency = 1.000
						TextLabel.Size = UDim2.new(0, 200, 0, 50)
						TextLabel.Font = Enum.Font.SourceSansSemibold
						TextLabel.TextColor3 = Color3.fromRGB(255, 255, 0)
						TextLabel.TextSize = 24.000
						TextLabel.Text = v.Name
					end
				end
			end
        end
    end)
end
function NoChestESP()
	task.spawn(function()
		while getgenv().AutoChestESP == false do wait()
			for i,v in pairs(game:GetService("Workspace")["___Game"]["__Render"]:GetDescendants()) do
				if v:IsA("MeshPart") and v:FindFirstChild("ClickDetector") and v:FindFirstChild("BillboardGui") then
					if v.Name == "Silver Chest" or v.Name == "Bronze Chest" or v.Name == "Gold Chest" then
						v:FindFirstChild("BillboardGui"):Destroy()
						ChestDestroyed = ChestDestroyed + 1
					end
				end
			end
			if ChestDestroyed == 0 then break
			end
			ChestDestroyed = 0
		end
	end)
end

local FloatToggle = MainTab:CreateToggle({
	Name = "Walk On Water",
	CurrentValue = false,
	Flag = "FloatToggle", 
	Callback = function(bool)
		pcall( function()
			if getgenv().AutoFloat == false then
				getgenv().AutoFloat = true
			elseif getgenv().AutoFloat == true then
				getgenv().AutoFloat = false
			end
			if getgenv().AutoFloat == true then
                Float()
			elseif getgenv().AutoFloat == false then
                UnFloat()
			end
		end)
	end,
})

function MobFarm()
end

--[[local IslandDropdown = MainTab:CreateDropdown({
	Name = "Islands",
	Options = Islands,
	CurrentOption = "None",
	Callback = function(ChosenIsland)
		pcall( function()
			getgenv().YourIsland = ChosenIsland
		end)
    end,
})]]

--[[local AutoFarmToggle = MainTab:CreateToggle({
	Name = "AutoFarm",
	CurrentValue = false,
	Callback = function(bool)
		pcall( function()
			if getgenv().AutoMobFarm == false then
				getgenv().AutoMobFarm = true
			elseif getgenv().AutoMobFarm == true then
				getgenv().AutoMobFarm = false
			end
			MobFarm()
		end)
	end,
})]]

local WSSlider = PlayerTab:CreateSlider({
	Name = "WalkSpeed",
	Range = {16, 100},
	Increment = 1,
	Suffix = "WalkSpeed",
	CurrentValue = 16,
	Flag = "WSSlider",
	Callback = function(WS)
		pcall( function()
			getgenv().CurrentSpeed = WS
			local function WalkSpeedChange()
				if MyChar and MyChar.Humanoid then
					MyChar.Humanoid.WalkSpeed = CurrentSpeed
				end
			end
			local Human = MyChar and MyChar:FindFirstChildWhichIsA("Humanoid")
			WalkSpeedChange()
			HumanMods.wsLoop = (HumanMods.wsLoop and HumanMods.wsLoop:Disconnect() and false) or Human:GetPropertyChangedSignal("WalkSpeed"):Connect(WalkSpeedChange)
			HumanMods.wsCA = (HumanMods.wsCA and HumanMods.wsCA:Disconnect() and false) or MyPlayer.CharacterAdded:Connect(function(nChar)
				MyChar = nChar, nChar:WaitForChild("Humanoid")
				WalkSpeedChange()
				HumanMods.wsLoop = (HumanMods.wsLoop and HumanMods.wsLoop:Disconnect() and false) or Human:GetPropertyChangedSignal("WalkSpeed"):Connect(WalkSpeedChange)
			end)
		end)
	end,
})

local JPSlider = PlayerTab:CreateSlider({
	Name = "JumpPower",
	Range = {50, 250},
	Increment = 5,
	Suffix = "JumpPower",
	CurrentValue = 50,
	Flag = "JPSlider",
	Callback = function(JP)
		pcall( function()
			getgenv().CurrentJumpPower = JP
			local function JumpPowerChange()
				if MyChar and MyChar.Humanoid then
					if MyChar:FindFirstChildOfClass('Humanoid').UseJumpPower then
						MyChar:FindFirstChildOfClass('Humanoid').JumpPower = CurrentJumpPower
					else
						MyChar:FindFirstChildOfClass('Humanoid').JumpHeight  = CurrentJumpPower
					end
				end
			end
			local Human = MyChar and MyChar:FindFirstChildWhichIsA("Humanoid")
			JumpPowerChange()
			HumanMods.jpLoop = (HumanMods.jpLoop and HumanMods.jpLoop:Disconnect() and false) or Human:GetPropertyChangedSignal("JumpPower"):Connect(JumpPowerChange)
			HumanMods.jpCA = (HumanMods.jpCA and HumanMods.jpCA:Disconnect() and false) or MyPlayer.CharacterAdded:Connect(function(nChar)
				MyChar = nChar, nChar:WaitForChild("Humanoid")
				JumpPowerChange()
				HumanMods.jpLoop = (HumanMods.jpLoop and HumanMods.jpLoop:Disconnect() and false) or Human:GetPropertyChangedSignal("JumpPower"):Connect(JumpPowerChange)
			end)
		end)
	end,
})

local NoClipKeybind = PlayerTab:CreateKeybind({
	Name = "NoClip",
	CurrentKeybind = "J",
	HoldToInteract = false,
	Flag = "NoClipKeybind", 
	Callback = function(Keybind)
		pcall( function()
			if getgenv().NCBind == false then
				getgenv().NCBind = true
			elseif getgenv().NCBind == true then
				getgenv().NCBind = false
			end
			if getgenv().NCBind == true then
				getgenv().Noclipping = game:GetService("RunService").Stepped:Connect(NoclipLoop)
			elseif getgenv().NCBind == false then
				getgenv().Noclipping:Disconnect()
				Clip = true
			end
		end)
	end,
})

local RejoinButton = PlayerTab:CreateButton({
	Name = "Rejoin",
	Callback = function()
		pcall( function()
			if #game.Players:GetPlayers() <= 1 then
				MyPlayer:Kick("\nRejoining...")
				wait()
				game:GetService("TeleportService"):Teleport(game.PlaceId, MyPlayer)
			else
				game:GetService("TeleportService"):TeleportToPlaceInstance(game.PlaceId, game.JobId, MyPlayer)
			end
		end)
	end,
})
local SHOPButton = PlayerTab:CreateButton({
	Name = "Server Hop",
	Callback = function()
		pcall( function()
			if httprequest then
				local servers = {}
				local req = httprequest({Url = string.format("https://games.roblox.com/v1/games/%s/servers/Public?sortOrder=Asc&limit=100", game.PlaceId)})
				local body = game:GetService("HttpService"):JSONDecode(req.Body)
				if body and body.data then
					for i, v in next, body.data do
						if type(v) == "table" and tonumber(v.playing) and tonumber(v.maxPlayers) and v.playing < v.maxPlayers and v.id ~= game.JobId then
							table.insert(servers, 1, v.id)
						end 
					end
				end
				if #servers > 0 then
					game:GetService("TeleportService"):TeleportToPlaceInstance(game.PlaceId, servers[math.random(1, #servers)], MyPlayer)
				else
					Rayfield:Notify("Notification","Couldn't find another server", 3944680095)
				end
			end
		end)
	end,
})

local TeleportDropdown = TeleportTab:CreateDropdown({
	Name = "Teleports",
	Options = {"Orange Town Island","Baratie"},
	CurrentOption = "None",
	Flag = "TeleportDropdown", 
	Callback = function(ChosenTeleport)
		getgenv().YourTeleport = ChosenTeleport
		if getgenv().YourTeleport == "Orange Town Island" then
			for i,v in pairs(game:GetService("Workspace")["___Game"]["___IgnoreMouse"].Teleports:GetChildren()) do
				if v:IsA("Part") and v:FindFirstChild("TouchInterest") and v:FindFirstChild("TeleportPoint") and (v.Position - game:GetService("Workspace")["___Game"]["__Render"]["Orange_Town_Island"]["__Map"].Houses.PetFood.Door.Door.MeshPart.Position).Magnitude < 100 then
					MyChar.HumanoidRootPart.CFrame = v.CFrame
				end
			end
		elseif getgenv().YourTeleport == "Baratie" then
			for i,v in pairs(game:GetService("Workspace")["___Game"]["___IgnoreMouse"].Teleports:GetChildren()) do
				if v:IsA("Part") and v:FindFirstChild("TouchInterest") and v:FindFirstChild("TeleportPoint") and (v.Position - game:GetService("Workspace")["___Game"]["__Render"].Baratie["__Spawns"].SpawnPoint.Root.Position).Magnitude < 100 then
					MyChar.HumanoidRootPart.CFrame = v.CFrame
				end
			end
		end
	end,
})

local PlrESPToggle = ESPTab:CreateToggle({
	Name = "Show Players",
	CurrentValue = false,
	Flag = "PlrESPToggle", 
	Callback = function(bool)
		pcall( function()
			if getgenv().AutoPlrESP == false then
				getgenv().AutoPlrESP = true
			elseif getgenv().AutoPlrESP == true then
				getgenv().AutoPlrESP = false
			end
			if getgenv().AutoPlrESP == true then
				ESPenabled = true
				for i,v in pairs(Players) do
					if v.ClassName == "Player" and v.Name ~= MyPlayer.Name then
						ESP(v)
					end
				end
			elseif getgenv().AutoPlrESP == false then
				ESPenabled = false
				for i,c in pairs(COREGUI:GetChildren()) do
					if string.sub(c.Name, -4) == '_ESP' then
						c:Destroy()
					end
				end
			end
		end)
	end,
})
local FruitESPToggle = ESPTab:CreateToggle({
	Name = "Show Fruits",
	CurrentValue = false,
	Flag = "FruitESPToggle", 
	Callback = function(bool)
		pcall( function()
			if getgenv().AutoFruitESP == false then
				getgenv().AutoFruitESP = true
			elseif getgenv().AutoFruitESP == true then
				getgenv().AutoFruitESP = false
			end
			if getgenv().AutoFruitESP == true then
                FruitESP()
			elseif getgenv().AutoFruitESP == false then
                NoFruitESP()
			end
		end)
	end,
})
local IslandESPToggle = ESPTab:CreateToggle({
	Name = "Show Islands",
	CurrentValue = false,
	Flag = "IslandESPToggle", 
	Callback = function(bool)
		pcall( function()
			if getgenv().AutoIslandESP == false then
				getgenv().AutoIslandESP = true
			elseif getgenv().AutoIslandESP == true then
				getgenv().AutoIslandESP = false
			end
			if getgenv().AutoIslandESP == true then
                IslandESP()
			elseif getgenv().AutoIslandESP == false then
                NoIslandESP()
			end
		end)
	end,
})
local ChestESPToggle = ESPTab:CreateToggle({
	Name = "Show Chests",
	CurrentValue = false,
	Flag = "ChestESPToggle", 
	Callback = function(bool)
		pcall( function()
			if getgenv().AutoChestESP == false then
				getgenv().AutoChestESP = true
			elseif getgenv().AutoChestESP == true then
				getgenv().AutoChestESP = false
			end
			if getgenv().AutoChestESP == true then
				ChestESP()
			elseif getgenv().AutoChestESP == false then
				NoChestESP()
			end
		end)
	end,
})

local CreditsLabel = CreditsTab:CreateLabel("Made by Finger#1511")
local CreditsLabel1 = CreditsTab:CreateLabel("GUI: Rayfield")
local DiscordButton = CreditsTab:CreateButton({
	Name = "Copy Discord",
	Callback = function()
		pcall( function()
			setclipboard("discord.gg/xHph38MAHZ")
			Rayfield:Notify("Notification","Discord link has been copied to your keyboard", 3944680095)
		end)
	end,
})
