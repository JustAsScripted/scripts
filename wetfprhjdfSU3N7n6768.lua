repeat task.wait() until game:IsLoaded()
getgenv().SecureMode = true
local Rayfield = loadstring(game:HttpGet('https://raw.githubusercontent.com/JustAsScripted/scripts/main/Custom%20Rayfield%20Library.lua'))()
local Window = Rayfield:CreateWindow({
	Name = "Vevo Hub (Universal)",
	LoadingTitle = "Vevo Hub",
	LoadingSubtitle = "Universal",
	ConfigurationSaving = {
		Enabled = true,
		FolderName = "Vevo Hub", 
		FileName = "Vevo Hub"
	},
        Discord = {
        	Enabled = true,
        	Invite = "xHph38MAHZ", 
        	RememberJoins = true
        },
	KeySystem = true,
	KeySettings = {
		Title = "Vevo Hub",
		Subtitle = "Login",
		Note = "Join the discord (discord.gg/xHph38MAHZ)",
		FileName = "Vevo Hub Key",
		SaveKey = true,
		GrabKeyFromSite = false,
		Key = "vevo"
	}
})

local MyPlayer = game.Players.LocalPlayer
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

--[[local MainTab = Window:CreateTab("Main")]]
local PlayerTab = Window:CreateTab("Player")
local ESPTab = Window:CreateTab("ESP")
local CreditsTab = Window:CreateTab("Credits")

--[[local MainSection = MainTab:CreateSection("Main")]]
local PlayerSection = PlayerTab:CreateSection("Player")
local ESPSection = ESPTab:CreateSection("ESP")
local CreditsSection = CreditsTab:CreateSection("Credits")

getgenv().NCBind = false
getgenv().Noclipping = nil
getgenv().CurrentSpeed = 16
getgenv().CurrentJumpPower = 50
getgenv().PlrESPChecker = false

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
					MyChar.Humanoid.WalkSpeed = getgenv().CurrentSpeed
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
						MyChar:FindFirstChildOfClass('Humanoid').JumpPower = getgenv().CurrentJumpPower
					else
						MyChar:FindFirstChildOfClass('Humanoid').JumpHeight  = getgenv().CurrentJumpPower
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
			else
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
					Rayfield:Notify({
						Title = "Notification",
						Content = "Couldn't find another server",
						Duration = 5,
						Image = 3944680095
					})
				end
			end
		end)
	end,
})

local PlrESPToggle = ESPTab:CreateToggle({
	Name = "Show Players",
	CurrentValue = false,
	Flag = "PlrESPToggle", 
	Callback = function(bool)
		pcall( function()
			if getgenv().PlrESPChecker == false then
				getgenv().PlrESPChecker = true
			elseif getgenv().PlrESPChecker == true then
				getgenv().PlrESPChecker = false
			end
			if getgenv().PlrESPChecker == true then
				ESPenabled = true
				for i,v in pairs(game:GetService("Players"):GetChildren()) do
					if v.ClassName == "Player" and v.Name ~= MyPlayer.Name then
						ESP(v)
					end
				end
			elseif getgenv().PlrESPChecker == false then
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

local CreditsLabel = CreditsTab:CreateLabel("Made by Finger#1511")
local CreditsLabel1 = CreditsTab:CreateLabel("GUI: Rayfield")
local DiscordButton = CreditsTab:CreateButton({
	Name = "Copy Discord",
	Callback = function()
		pcall( function()
			setclipboard("discord.gg/xHph38MAHZ")
			Rayfield:Notify({
				Title = "Notification",
				Content = "Discord link has been copied to your keyboard",
				Duration = 5,
				Image = 3944680095
			})
		end)
	end,
})
