repeat task.wait() until game:IsLoaded()
--[[loadstring(game:HttpGet('https://raw.githubusercontent.com/Tamim468/releases/main/bypass.lua'))()
wait()]]
local repo = 'https://raw.githubusercontent.com/violin-suzutsuki/LinoriaLib/main/'
local Library = loadstring(game:HttpGet(repo .. 'Library.lua'))()
local ThemeManager = loadstring(game:HttpGet(repo .. 'addons/ThemeManager.lua'))()
local SaveManager = loadstring(game:HttpGet(repo .. 'addons/SaveManager.lua'))()

local Window = Library:CreateWindow({
    Title = 'Vevo Hub (YASHIN)',
    Center = true,
    AutoShow = true,
    TabPadding = 8,
    MenuFadeTime = 0.2
})
local Tabs = {
    Game = Window:AddTab('Game'),
    Farm = Window:AddTab('Farm'),
    Misc = Window:AddTab('Misc'),
    Player = Window:AddTab('Player'),
    ESP = Window:AddTab('ESP'),
    ['UI Settings'] = Window:AddTab('UI Settings'),
    Credits = Window:AddTab('Credits')
}
local Sections = {
    Punch = Tabs.Game:AddLeftGroupbox('Punch'),
    Speed = Tabs.Game:AddLeftGroupbox('Speed'),
	Defense = Tabs.Game:AddLeftGroupbox('Defense'),
	Positioning = Tabs.Game:AddLeftGroupbox('Positioning'),
	AutoFarm = Tabs.Farm:AddLeftGroupbox('AutoFarm'),
	Misc = Tabs.Misc:AddLeftGroupbox('Misc'),
	Player = Tabs.Player:AddLeftGroupbox('Player'),
	ESP = Tabs.ESP:AddLeftGroupbox('ESP'),
    Menu = Tabs['UI Settings']:AddLeftGroupbox('Menu'),
	Credits = Tabs.Credits:AddLeftGroupbox('Credits')
}

local Players = game:GetService('Players')
local MyPlayer = Players.LocalPlayer
local COREGUI = game:GetService('CoreGui')
local Http = game:GetService('HttpService')
local TeleportService = game:GetService('TeleportService')
local TweenService = game:GetService('TweenService')
local Api = 'https://games.roblox.com/v1/games/'
local _place = game.PlaceId
local _servers = Api.._place..'/servers/Public?sortOrder=Asc&limit=100'
local httprequest = (syn and syn.request) or (http and http.request) or http_request
local HumanMods = {}
local GC = getconnections or get_signal_cons
local PlaceId = game.PlaceId;
local Workspace = game:GetService('Workspace');
local Teams = game:GetService('Teams')
local RunService = game:GetService('RunService');
local CurrentCamera = Workspace.CurrentCamera
local WorldToViewportPoint = CurrentCamera.WorldToViewportPoint
local Inset = game:GetService('GuiService'):GetGuiInset().Y
local FindFirstChild = game.FindFirstChild
local FindFirstChildWhichIsA = game.FindFirstChildWhichIsA
local IsA = game.IsA
local Vector2new = Vector2.new
local Vector3new = Vector3.new
local CFramenew = CFrame.new
local Color3new = Color3.new
local Tfind = table.find
local create = table.create
local format = string.format
local floor = math.floor
local gsub = string.gsub
local sub = string.sub
local lower = string.lower
local upper = string.upper
local random = math.random
local Mouse = MyPlayer:GetMouse();
local MouseVector = Vector2new(Mouse.X, Mouse.Y);
local Characters = {}
local Drawings = {}
local WSIndex = nil
local JPIndex = nil
local wsLoop
local Clip
local WSpin = false
local wsCA
local jpLoop
local jpCA
local ToggleESP
local VirtualInputManager = Instance.new('VirtualInputManager')
local UserInputService = game:GetService('UserInputService')
local Hooks = {}
if PlaceId ~= 12467817668 then
	local OldCameraShakeFunc = require(game:GetService('ReplicatedStorage').Modules.CameraShaker).Update
end

getgenv().NCToggle = false
getgenv().Noclipping = nil
getgenv().FirstWS = MyPlayer.Character.Humanoid.WalkSpeed
getgenv().FirstJP = MyPlayer.Character.Humanoid.JumpPower
getgenv().WalkSpeedToggle = false
getgenv().CurrentSpeed = MyPlayer.Character.Humanoid.WalkSpeed
getgenv().JumpPowerToggle = false
getgenv().CurrentJumpPower = MyPlayer.Character.Humanoid.JumpPower
getgenv().AFKTarget = ''
getgenv().PlrESPChecker = false
getgenv().ShootingPower = 1
getgenv().IsShootingPower = false
getgenv().IsAutoFarm = false
getgenv().IsLeagueFarm = false
getgenv().SpinType = 'Weapon'
getgenv().Slot = '1'
getgenv().Cosmetics = 'Emotes'
getgenv().IsAutoPosition = false
getgenv().IsAntiAFK = false
getgenv().IsSpeedDemon = true
getgenv().IsAutoBuy = false
getgenv().FieldType = 'BigField'
getgenv().IsAutoDelete = false
getgenv().IsAutoSpin = false
getgenv().IsFixCamera = false
getgenv().IsAutoDefense = false
getgenv().IsAutoSaving = false
getgenv().SpeedBoost = 4.2
getgenv().Team = 1
getgenv().Position = 'Forward'
getgenv().ShootingMode = "Middle"
getgenv().DefensiveMode = false
getgenv().RealBall = ''
getgenv().BallOwner = ''

function randomString()
	local length = math.random(10,20)
	local array = {}
	for i = 1, length do
		array[i] = string.char(math.random(32, 126))
	end
	return table.concat(array)
end
if not game:GetService('Workspace'):FindFirstChild('ligma') then
	local SPart = Instance.new('Part')
	SPart.Name = 'ligma'
	SPart.Anchored = true
	SPart.Shape = Enum.PartType.Ball
	SPart.Color = Color3.new(1, 1, 1)
	SPart.Parent = game:GetService('Workspace')
	SPart.Transparency = 1
	SPart.CanCollide = false
	SPart.Size = Vector3.new(1,1,1)
end
if not game:GetService('Workspace'):FindFirstChild('ligma2') then
	local SPart = Instance.new('Part')
	SPart.Name = 'ligma2'
	SPart.Anchored = true
	SPart.Shape = Enum.PartType.Ball
	SPart.Color = Color3.new(1, 1, 1)
	SPart.Parent = game:GetService('Workspace')
	SPart.Transparency = 1
	SPart.CanCollide = false
	SPart.Size = Vector3.new(1,1,1)
end
if not game:GetService('Workspace'):FindFirstChild('ligma3') then
	local SPart = Instance.new('Part')
	SPart.Name = 'ligma3'
	SPart.Anchored = true
	SPart.Shape = Enum.PartType.Ball
	SPart.Color = Color3.new(1, 1, 1)
	SPart.Parent = game:GetService('Workspace')
	SPart.Transparency = 1
	SPart.CanCollide = false
	SPart.Size = Vector3.new(1,1,1)
end
if not game:GetService('Workspace'):FindFirstChild('ligma4') then
	local SPart = Instance.new('Part')
	SPart.Name = 'ligma4'
	SPart.Anchored = true
	SPart.Shape = Enum.PartType.Ball
	SPart.Color = Color3.new(1, 1, 1)
	SPart.Parent = game:GetService('Workspace')
	SPart.Transparency = 1
	SPart.CanCollide = false
	SPart.Size = Vector3.new(1,1,1)
end
if not game:GetService('Workspace'):FindFirstChild('FinalWalls') then
	local FinalWalls = Instance.new('Folder')
	FinalWalls.Parent = game:GetService('Workspace')
	FinalWalls.Name = 'FinalWalls'
end
if not game:GetService('Workspace'):WaitForChild('FinalWalls'):FindFirstChild('FinalWall1') then
	local FinalWall1 = Instance.new('Part')
	FinalWall1.Anchored = true
	FinalWall1.Name = 'FinalWall1'
	FinalWall1.Parent = game:GetService('Workspace'):WaitForChild('FinalWalls')
	FinalWall1.Transparency = 1
	FinalWall1.Size = Vector3.new(0.1, 2048, 2048)
	FinalWall1.CanCollide = false
	FinalWall1.CanQuery = true
end
if not game:GetService('Workspace'):WaitForChild('FinalWalls'):FindFirstChild('FinalWall2') then
	local FinalWall1 = Instance.new('Part')
	FinalWall1.Anchored = true
	FinalWall1.Name = 'FinalWall2'
	FinalWall1.Parent = game:GetService('Workspace'):WaitForChild('FinalWalls')
	FinalWall1.Transparency = 1
	FinalWall1.Size = Vector3.new(-0.1, 2048, 2048)
	FinalWall1.CanCollide = false
	FinalWall1.CanQuery = true
end
if game:GetService('Workspace'):FindFirstChild('GameField') then
	for i,v in pairs(game:GetService('Workspace').GameField.BlueLockmanHitboxes:GetChildren()) do
		if v then
			v:Destroy()
		end
	end
end
if game:GetService('Workspace'):FindFirstChild('MiniField') then
	for i,v in pairs(game:GetService('Workspace').MiniField.BlueLockmanHitboxes:GetChildren()) do
		if v then
			v:Destroy()
		end
	end
end
task.spawn(function()
	while true do
		if getgenv().IsAutoDefense and not MyPlayer.Character:FindFirstChild('Ball') then
			for i,v in pairs(game:GetService('Players'):GetChildren()) do
				if v.Character and v.Character:FindFirstChild('HumanoidRootPart') then
					if (v.Character.HumanoidRootPart.Position - MyPlayer.Character.HumanoidRootPart.Position).Magnitude <= 30 and v.Character:FindFirstChild('Ball') then
						local args = {
							[1] = 'TakeBall',
							[2] = v.Character.Ball.Ball
						}
						game:GetService('ReplicatedStorage'):WaitForChild('Remotes'):WaitForChild('PunchRemote'):FireServer(unpack(args))
					end
				end
			end
		end
		task.wait(0.1)
	end
end)
task.spawn(function()
	while true do task.wait()
		for i,v in pairs(game:GetService('Players'):GetChildren()) do
			if v.Character and v.Character:FindFirstChild('Ball') and v.Character.Ball:GetAttribute('GameBall') then
				getgenv().BallOwner = v
			end
		end
	end
end)
function GetRealBall()
    local isBall = nil
    for i,v in pairs(workspace:GetChildren()) do
        if v.Name == 'Ball' and v:GetAttribute('GameBall') then
            isBall = v
        end
    end
    return isBall
end
function GetHoldingSkill()
    local holdingSkill = nil
    for i,v in pairs(MyPlayer.PlayerGui.SkilsGui:GetChildren()) do
		if v.Name ~= "StatsAndSkillsLocal" and v.Name ~= "SelectionImage" and v.Name ~= "Dribbles" then
			if v.CDFrame.AbsoluteSize.Magnitude > 140 then
				holdingSkill = v.Name
			end
		end
    end
    return holdingSkill
end
function DefendShot(typashoot, distance)
    print(typashoot, distance)
	if typashoot == "shoot" then
        if distance < 25 then
            if MyPlayer.PlayerGui.SkilsGui.SlotThree.CDFrame.Visible then
                local args = {
                    [1] = 'Hold',
                    [2] = MyPlayer.PlayerGui.SkilsGui.SlotThree.SkillName.Text}
                game:GetService('ReplicatedStorage').Remotes.TranciverRemote:FireServer(unpack(args))
            elseif GetHoldingSkill() then
                local args = {
                    [1] = 'Hold',
                    [2] = MyPlayer.PlayerGui.SkilsGui[GetHoldingSkill()].SkillName.Text}
                game:GetService('ReplicatedStorage').Remotes.TranciverRemote:FireServer(unpack(args))
                local args = {
                    [1] = 'UseSkill',
                    [2] = MyPlayer.PlayerGui.SkilsGui[GetHoldingSkill()].SkillName.Text}
                game:GetService('ReplicatedStorage').Remotes.TranciverRemote:FireServer(unpack(args))
            end
        else
            if MyPlayer.PlayerGui.SkilsGui.SlotEight.CDFrame.Visible then
                local args = {
                    [1] = 'Hold',
                    [2] = MyPlayer.PlayerGui.SkilsGui.SlotEight.SkillName.Text}
                game:GetService('ReplicatedStorage').Remotes.TranciverRemote:FireServer(unpack(args))
                local args = {
                    [1] = 'UseSkill',
                    [2] = MyPlayer.PlayerGui.SkilsGui.SlotEight.SkillName.Text}
                game:GetService('ReplicatedStorage').Remotes.TranciverRemote:FireServer(unpack(args))
            elseif GetHoldingSkill() then
                local args = {
                    [1] = 'Hold',
                    [2] = MyPlayer.PlayerGui.SkilsGui[GetHoldingSkill()].SkillName.Text}
                game:GetService('ReplicatedStorage').Remotes.TranciverRemote:FireServer(unpack(args))
                local args = {
                    [1] = 'UseSkill',
                    [2] = MyPlayer.PlayerGui.SkilsGui[GetHoldingSkill()].SkillName.Text}
                game:GetService('ReplicatedStorage').Remotes.TranciverRemote:FireServer(unpack(args))
            end
        end
    elseif typashoot == "lob" then
        if GetRealBall() and GetRealBall().Ball.AssemblyLinearVelocity.X < 3 and GetRealBall().Ball.AssemblyLinearVelocity.Z < 3 then
            if MyPlayer.PlayerGui.SkilsGui.SlotSeven.CDFrame.Visible then
                task.spawn(function()
                    repeat
                        MyPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(MyPlayer.Character.HumanoidRootPart.Position, Vector3.new(GetRealBall().Ball.Position.X, MyPlayer.Character.HumanoidRootPart.Position.Y, GetRealBall().Ball.Position.Z))
                        task.wait()
                    until MyPlayer:GetAttribute('UsingSkill')
                end)
                local args = {
                    [1] = 'Hold',
                    [2] = MyPlayer.PlayerGui.SkilsGui.SlotSeven.SkillName.Text}
                game:GetService('ReplicatedStorage').Remotes.TranciverRemote:FireServer(unpack(args))
                local args = {
                    [1] = 'UseSkill',
                    [2] = MyPlayer.PlayerGui.SkilsGui.SlotSeven.SkillName.Text}
                game:GetService('ReplicatedStorage').Remotes.TranciverRemote:FireServer(unpack(args))
            elseif GetHoldingSkill() then
                local args = {
                    [1] = 'Hold',
                    [2] = MyPlayer.PlayerGui.SkilsGui[GetHoldingSkill()].SkillName.Text}
                game:GetService('ReplicatedStorage').Remotes.TranciverRemote:FireServer(unpack(args))
                local args = {
                    [1] = 'UseSkill',
                    [2] = MyPlayer.PlayerGui.SkilsGui[GetHoldingSkill()].SkillName.Text}
                game:GetService('ReplicatedStorage').Remotes.TranciverRemote:FireServer(unpack(args))
            end
        end
	end
end
task.spawn(function()
	while Library do
		if getgenv().IsAutoSaving and getgenv().BallOwner ~= MyPlayer and not MyPlayer.Character:FindFirstChild('Ball') and getgenv().BallOwner ~= '' and game:GetService('Players'):FindFirstChild(getgenv().BallOwner.Name) and game:GetService('Players')[getgenv().BallOwner.Name].Character then
			for _, anim in pairs(getgenv().BallOwner.Character.Humanoid:GetPlayingAnimationTracks()) do
				if anim.Animation.AnimationId == 'rbxassetid://13732545430' then
                    print("Animation detected")
                    local typashoot = "shoot"
                    local distance = (MyPlayer.Character.HumanoidRootPart.Position - getgenv().BallOwner.Character.HumanoidRootPart.Position).Magnitude
					DefendShot(typashoot, distance)
                    wait(3)
				elseif anim.Animation.AnimationId == 'rbxassetid://12699056251' and anim.TimePosition > 0.1 then
                    local typashoot = "shoot"
                    local distance = (MyPlayer.Character.HumanoidRootPart.Position - getgenv().BallOwner.Character.HumanoidRootPart.Position).Magnitude
					DefendShot(typashoot, distance)
                    wait(3)
				elseif anim.Animation.AnimationId == 'rbxassetid://12698894288' then
                    local typashoot = "lob"
                    local distance = (MyPlayer.Character.HumanoidRootPart.Position - getgenv().BallOwner.Character.HumanoidRootPart.Position).Magnitude
                    DefendShot(typashoot, distance)
                    wait(3)
				end
			end
		end
		task.wait()
	end
end)
task.spawn(function()
	while Library do
		task.spawn(function()
			if getgenv().IsShootingPower then
				if getgenv().FieldType == 'BigField' then
					game:GetService('Workspace'):WaitForChild('ligma').Position = Vector3.new(-464.5, MyPlayer.Character.HumanoidRootPart.Position.Y, -369)
					game:GetService('Workspace'):WaitForChild('ligma2').Position = Vector3.new(-464.5, MyPlayer.Character.HumanoidRootPart.Position.Y, -341)
					game:GetService('Workspace'):WaitForChild('ligma3').Position = Vector3.new(-1107.5, MyPlayer.Character.HumanoidRootPart.Position.Y, -369)
					game:GetService('Workspace'):WaitForChild('ligma4').Position = Vector3.new(-1107.5, MyPlayer.Character.HumanoidRootPart.Position.Y, -341)
					game:GetService('Workspace'):WaitForChild('FinalWalls').FinalWall1.Position = Vector3.new(-464.5, MyPlayer.Character.HumanoidRootPart.Position.Y - 657, -369)
					game:GetService('Workspace'):WaitForChild('FinalWalls').FinalWall2.Position = Vector3.new(-1107.5, MyPlayer.Character.HumanoidRootPart.Position.Y - 657, -369)
				elseif getgenv().FieldType == 'MiniField' then
					game:GetService('Workspace'):WaitForChild('ligma').Position = Vector3.new(-669, MyPlayer.Character.HumanoidRootPart.Position.Y, 372.5)
					game:GetService('Workspace'):WaitForChild('ligma2').Position = Vector3.new(-669, MyPlayer.Character.HumanoidRootPart.Position.Y, 401)
					game:GetService('Workspace'):WaitForChild('ligma3').Position = Vector3.new(-1113, MyPlayer.Character.HumanoidRootPart.Position.Y, 372.5)
					game:GetService('Workspace'):WaitForChild('ligma4').Position = Vector3.new(-1113, MyPlayer.Character.HumanoidRootPart.Position.Y, 401)
					game:GetService('Workspace'):WaitForChild('FinalWalls').FinalWall1.Position = Vector3.new(-669, MyPlayer.Character.HumanoidRootPart.Position.Y - 657, 372.5)
					game:GetService('Workspace'):WaitForChild('FinalWalls').FinalWall2.Position = Vector3.new(-1113, MyPlayer.Character.HumanoidRootPart.Position.Y - 657, 372.5)
				end
				local rayOrigin = game:GetService('Workspace').CurrentCamera.CFrame.p
				local rayDirection = (game:GetService('Workspace').CurrentCamera.CFrame.LookVector) * 1000
				local rayParams = RaycastParams.new()
				rayParams.FilterDescendantsInstances = game:GetService('Workspace'):WaitForChild('FinalWalls'):GetChildren()
				rayParams.FilterType = Enum.RaycastFilterType.Include
				local rayResult = game:GetService('Workspace'):Raycast(rayOrigin, rayDirection, rayParams)
				if rayResult then
					local hitpos = rayResult.Position
					local ClosestDistancePart = {}
					local distance = (hitpos - game:GetService('Workspace').ligma.Position).Magnitude
					local distance2 = (hitpos - game:GetService('Workspace').ligma2.Position).Magnitude
					local distance3 = (hitpos - game:GetService('Workspace').ligma3.Position).Magnitude
					local distance4 = (hitpos - game:GetService('Workspace').ligma4.Position).Magnitude
					table.insert(ClosestDistancePart, distance)
					table.insert(ClosestDistancePart, distance2)
					table.insert(ClosestDistancePart, distance3)
					table.insert(ClosestDistancePart, distance4)
					local mindistance = math.huge
					for _,dist in pairs(ClosestDistancePart) do
						if dist < mindistance then
							mindistance = dist
						end
					end
					if mindistance == distance then
						MyPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(MyPlayer.Character.HumanoidRootPart.Position, game:GetService('Workspace').ligma.Position)
					elseif mindistance == distance2 then
						MyPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(MyPlayer.Character.HumanoidRootPart.Position, game:GetService('Workspace').ligma2.Position)
					elseif mindistance == distance3 then
						MyPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(MyPlayer.Character.HumanoidRootPart.Position, game:GetService('Workspace').ligma3.Position)
					elseif mindistance == distance4 then
						MyPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(MyPlayer.Character.HumanoidRootPart.Position, game:GetService('Workspace').ligma4.Position)
					end
				end
			end
		end)
		task.wait()
	end
end)
game:GetService('Workspace').Camera:GetPropertyChangedSignal('FieldOfView'):Connect(function()
	if getgenv().IsFixCamera then
		game:GetService('Workspace').Camera.FieldOfView = 100
	end
end)
game:GetService('RunService').Stepped:Connect(function()
	if getgenv().WalkSpeedToggle then
		pcall( function()
			local function WalkSpeedChange()
				if getgenv().WalkSpeedToggle then
					if MyPlayer.Character and MyPlayer.Character.Humanoid then
						MyPlayer.Character.Humanoid.WalkSpeed = getgenv().CurrentSpeed
					end
				end
			end
			local Human = MyPlayer.Character and MyPlayer.Character:FindFirstChildWhichIsA('Humanoid')
			WalkSpeedChange()
			HumanMods.wsLoop = (HumanMods.wsLoop and HumanMods.wsLoop:Disconnect() and false) or Human:GetPropertyChangedSignal('WalkSpeed'):Connect(WalkSpeedChange)
			HumanMods.wsCA = (HumanMods.wsCA and HumanMods.wsCA:Disconnect() and false) or MyPlayer.CharacterAdded:Connect(function(nChar)
				MyPlayer.Character = nChar, nChar:WaitForChild('Humanoid')
				WalkSpeedChange()
				HumanMods.wsLoop = (HumanMods.wsLoop and HumanMods.wsLoop:Disconnect() and false) or Human:GetPropertyChangedSignal('WalkSpeed'):Connect(WalkSpeedChange)
			end)
		end)
	else
		HumanMods.wsLoop = (HumanMods.wsLoop and HumanMods.wsLoop:Disconnect() and false) or nil
		HumanMods.wsCA = (HumanMods.wsCA and HumanMods.wsCA:Disconnect() and false) or nil
	end
	if getgenv().JumpPowerToggle then
		pcall( function()
			local function JumpPowerChange()
				if getgenv().JumpPowerToggle then
					if MyPlayer.Character and MyPlayer.Character.Humanoid then
						if MyPlayer.Character:FindFirstChildOfClass('Humanoid').UseJumpPower then
							MyPlayer.Character:FindFirstChildOfClass('Humanoid').JumpPower = getgenv().CurrentJumpPower
						else
							MyPlayer.Character:FindFirstChildOfClass('Humanoid').JumpHeight  = getgenv().CurrentJumpPower
						end
					end
				end
			end
			local Human = MyPlayer.Character and MyPlayer.Character:FindFirstChildWhichIsA('Humanoid')
			JumpPowerChange()
			HumanMods.jpLoop = (HumanMods.jpLoop and HumanMods.jpLoop:Disconnect() and false) or Human:GetPropertyChangedSignal('JumpPower'):Connect(JumpPowerChange)
			HumanMods.jpCA = (HumanMods.jpCA and HumanMods.jpCA:Disconnect() and false) or MyPlayer.CharacterAdded:Connect(function(nChar)
				MyPlayer.Character = nChar, nChar:WaitForChild('Humanoid')
				JumpPowerChange()
				HumanMods.jpLoop = (HumanMods.jpLoop and HumanMods.jpLoop:Disconnect() and false) or Human:GetPropertyChangedSignal('JumpPower'):Connect(JumpPowerChange)
			end)
		end)
	else
		HumanMods.jpLoop = (HumanMods.jpLoop and HumanMods.jpLoop:Disconnect() and false) or nil
		HumanMods.jpLoop = (HumanMods.jpLoop and HumanMods.jpLoop:Disconnect() and false) or nil
	end
end)

--Player Functions
function ListServers(cursor)
	local Raw = game:HttpGet(_servers .. ((cursor and '&cursor='..cursor) or ''))
	return Http:JSONDecode(Raw)
end
function NoclipLoop()
    if Clip == false and MyPlayer.Character ~= nil then
        for _, child in pairs(MyPlayer.Character:GetDescendants()) do
            if child:IsA('BasePart') and child.CanCollide == true then
                child.CanCollide = false
            end
        end
    end
end

--ESP Functions
local DefaultSettings = {
    Esp = {
        NamesEnabled = false,
        DisplayNamesEnabled = false,
        DistanceEnabled = false,
        HealthEnabled = false,
        BoxEsp = false,
        TeamColors = false,
        Thickness = 1.5,
        Transparency = .9,
        Size = 20,
        RenderDistance = 9e9,
        Color = Color3.fromRGB(0, 255, 5),
        OutlineColor = Color3new(),
        BlacklistedTeams = {}
    }
}
local EspSettings = DefaultSettings.Esp
local CustomGet = {
    [0] = function()
        return {}
    end
}
local Get;
if (CustomGet[PlaceId]) then
    Get = CustomGet[PlaceId]();
end
local GetCharacter = function(Player)
    if (Get) then
        return Get.GetCharacter(Player);
    end
    return Player.Character
end
local CharacterAdded = function(Player, Callback)
    if (Get) then
        return
    end
    Player.CharacterAdded:Connect(Callback);
end
local CharacterRemoving = function(Player, Callback)
    if (Get) then
        return
    end
    Player.CharacterRemoving:Connect(Callback);
end
local GetTeam = function(Player)
    if (Get) then
        return Get.GetTeam(Player);
    end
    return Player.Team
end
local HandlePlayer = function(Player)
    local Character = GetCharacter(Player);
    if (Character) then
        Characters[Player] = Character
    end
    CharacterAdded(Player, function(Char)
        Characters[Player] = Char
    end);
    CharacterRemoving(Player, function(Char)
        Characters[Player] = nil
        local PlayerDrawings = Drawings[Player]
        if (PlayerDrawings) then
            PlayerDrawings.Text.Visible = false
            PlayerDrawings.Box.Visible = false
        end
    end);
    if (Player == MyPlayer) then return; end
    local Text = Drawing.new('Text');
    Text.Color = EspSettings.Color
    Text.OutlineColor = EspSettings.OutlineColor
    Text.Size = EspSettings.Size
    Text.Transparency = EspSettings.Transparency
    Text.Center = true
    Text.Outline = true
    local Box = Drawing.new('Quad');
    Box.Thickness = EspSettings.Thickness
    Box.Transparency = EspSettings.Transparency
    Box.Filled = false
    Box.Color = EspSettings.Color
    Drawings[Player] = { Text = Text, Box = Box }
end
for Index, Player in pairs(Players:GetPlayers()) do
    HandlePlayer(Player);
end
Players.PlayerAdded:Connect(function(Player)
    HandlePlayer(Player);
end);
Players.PlayerRemoving:Connect(function(Player)
    Characters[Player] = nil
    local PlayerDrawings = Drawings[Player]
    for Index, Drawing in pairs(PlayerDrawings or {}) do
        Drawing.Visible = false
    end
    Drawings[Player] = nil
end);
local SetProperties = function(Properties)
    for Player, PlayerDrawings in pairs(Drawings) do
        if (type(Player) ~= 'number') then
            for Property, Value in pairs(Properties.Text or {}) do
                PlayerDrawings.Text[Property] = Value
            end
            for Property, Value in pairs(Properties.Box or {}) do
                PlayerDrawings.Box[Property] = Value
            end
        end
    end
end
local GetClosestPlayerAndRender = function()
	MouseVector = Vector2new(Mouse.X, Mouse.Y + Inset);
	local Closest = create(4);
	local Vector2Distance = math.huge
	local Vector3DistanceOnScreen = math.huge
	local Vector3Distance = math.huge
	local LocalRoot = Characters[MyPlayer] and FindFirstChild(Characters[MyPlayer], 'HumanoidRootPart');
	for Player, Character in pairs(Characters) do
		if (Player == MyPlayer) then continue; end
		local PlayerDrawings = Drawings[Player]
		local PlayerRoot = FindFirstChild(Character, 'HumanoidRootPart');
		local PlayerTeam = GetTeam(Player);
		if (PlayerRoot) then
			local Redirect = FindFirstChild(Character, 'Head');
			if (not Redirect) then
				PlayerDrawings.Text.Visible = false
				PlayerDrawings.Box.Visible = false
				continue;
			end
			local RedirectPos = Redirect.Position
			local Tuple, Visible = WorldToViewportPoint(CurrentCamera, RedirectPos);
			local CharacterVec2 = Vector2new(Tuple.X, Tuple.Y);
			local Vector2Magnitude = (MouseVector - CharacterVec2).Magnitude
			local Vector3Magnitude = LocalRoot and (RedirectPos - LocalRoot.Position).Magnitude or math.huge
			local InRenderDistance = Vector3Magnitude <= EspSettings.RenderDistance
			if (InRenderDistance and getgenv().PlrESPChecker == true and Visible and not Tfind(EspSettings.BlacklistedTeams, PlayerTeam)) then
				local CharacterHumanoid = FindFirstChildWhichIsA(Character, 'Humanoid') or { Health = 0, MaxHealth = 0 };
				PlayerDrawings.Text.Text = format('%s\n%s%s',
						EspSettings.NamesEnabled and Player.Name or '',
						EspSettings.DistanceEnabled and format('[%s]',
							floor(Vector3Magnitude)
						) or '',
						EspSettings.HealthEnabled and format(' [%s/%s]',
							floor(CharacterHumanoid.Health),
							floor(CharacterHumanoid.MaxHealth)
						)  or ''
					);

				PlayerDrawings.Text.Position = Vector2new(Tuple.X, Tuple.Y - 40);
				if (EspSettings.BoxEsp) then
					local Parts = {}
					for Index, Part in pairs(Character:GetChildren()) do
						if (IsA(Part, 'BasePart')) then
							local ViewportPos = WorldToViewportPoint(CurrentCamera, Part.Position);
							Parts[Part] = Vector2new(ViewportPos.X, ViewportPos.Y);
						end
					end
					local Top, Bottom, Left, Right
					local Distance = math.huge
					local ClosestPart = nil
					for i2, Pos in next, Parts do
						local Mag = (Pos - Vector2new(Tuple.X, 0)).Magnitude;
						if (Mag <= Distance) then
							ClosestPart = Pos
							Distance = Mag
						end
					end
					Top = ClosestPart
					ClosestPart = nil
					Distance = math.huge
					for i2, Pos in next, Parts do
						local Mag = (Pos - Vector2new(Tuple.X, CurrentCamera.ViewportSize.Y)).Magnitude;
						if (Mag <= Distance) then
							ClosestPart = Pos
							Distance = Mag
						end
					end
					Bottom = ClosestPart
					ClosestPart = nil
					Distance = math.huge
					for i2, Pos in next, Parts do
						local Mag = (Pos - Vector2new(0, Tuple.Y)).Magnitude;
						if (Mag <= Distance) then
							ClosestPart = Pos
							Distance = Mag
						end
					end
					Left = ClosestPart
					ClosestPart = nil
					Distance = math.huge
					for i2, Pos in next, Parts do
						local Mag = (Pos - Vector2new(CurrentCamera.ViewportSize.X, Tuple.Y)).Magnitude;
						if (Mag <= Distance) then
							ClosestPart = Pos
							Distance = Mag
						end
					end
					Right = ClosestPart
					ClosestPart = nil
					Distance = math.huge
					PlayerDrawings.Box.PointA = Vector2new(Right.X, Top.Y);
					PlayerDrawings.Box.PointB = Vector2new(Left.X, Top.Y);
					PlayerDrawings.Box.PointC = Vector2new(Left.X, Bottom.Y);
					PlayerDrawings.Box.PointD = Vector2new(Right.X, Bottom.Y);
				end
				if (EspSettings.TeamColors) then
					local TeamColor;
					if (PlayerTeam) then
						local BrickTeamColor = PlayerTeam.TeamColor
						TeamColor = BrickTeamColor.Color
					else
						TeamColor = Color3new(0.639216, 0.635294, 0.647059);
					end
					PlayerDrawings.Text.Color = TeamColor
					PlayerDrawings.Box.Color = TeamColor
				end
				PlayerDrawings.Text.Visible = true
				PlayerDrawings.Box.Visible = EspSettings.BoxEsp
			else
				PlayerDrawings.Text.Visible = false
				PlayerDrawings.Box.Visible = false
			end			
		else
			PlayerDrawings.Text.Visible = false
			PlayerDrawings.Box.Visible = false
		end
	end
	return unpack(Closest);
end
ToggleESP = RunService.RenderStepped:Connect(GetClosestPlayerAndRender)

--Game functions
local WeaponList = {
	[1] = 'Direct Shot',
	[2] = 'Finesse Shot',
	[4] = 'Explosive Acceleration',
	[5] = 'Stealthy Steps',
	[6] = 'Jumping Power',
	[7] = 'Immense Speed',
	[8] = 'Mark Smell',
	[9] = 'Drive Shot',
	[10] = 'Elastic Dribbling',
	[11] = 'Trapping',
	[12] = 'Perfect Kick Accuracy',
	[13] = 'Villainous Soccer',
	[14] = 'Total Defense',
	[15] = 'Godspeed',
	[16] = 'Kaiser Impact'
}
local ProdigyList = {
	[1] = 'None',
	[2] = 'Intellect',
	[3] = 'Punch',
	[4] = 'Defense',
	[5] = 'Speed',
	[6] = 'Dribble',
	[7] = 'Ball Control'
}
function Spin()
	if getgenv().SpinType == 'Weapon' then
		if getgenv().Slot == '1' then
			repeat
				for Weapon,_ in pairs(Options.WeaponsDropdown.Value) do
					if Weapon == MyPlayer.Data:GetAttribute('Weapon1') then
						WSpin = true
						print('You got '..MyPlayer.Data:GetAttribute('Weapon1'))
						getgenv().IsAutoSpin = false
					end
				end
				if not WSpin then
					local args = {
						[1] = tonumber(getgenv().Slot)}
					game:GetService('ReplicatedStorage'):WaitForChild('Remotes'):WaitForChild('SpinWeapon'):FireServer(unpack(args))
					wait(0.25)
				end
			until WSpin or not getgenv().IsAutoSpin
		elseif getgenv().Slot == '2' then
			repeat
				for Weapon,_ in pairs(Options.WeaponsDropdown.Value) do
					if Weapon == MyPlayer.Data:GetAttribute('Weapon2') then
						WSpin = true
						print('You got '..MyPlayer.Data:GetAttribute('Weapon2'))
						getgenv().IsAutoSpin = false
					end
				end
				if not WSpin then
					local args = {
						[1] = tonumber(getgenv().Slot)}
					game:GetService('ReplicatedStorage'):WaitForChild('Remotes'):WaitForChild('SpinWeapon'):FireServer(unpack(args))
					wait(0.25)					
				end
			until WSpin or not getgenv().IsAutoSpin
		elseif getgenv().Slot == '3' then
			repeat
				for Weapon,_ in pairs(Options.WeaponsDropdown.Value) do
					if Weapon == MyPlayer.Data:GetAttribute('Weapon3') then
						WSpin = true
						print('You got '..MyPlayer.Data:GetAttribute('Weapon3'))
						getgenv().IsAutoSpin = false
					end
				end
				if not WSpin then
					local args = {
						[1] = tonumber(getgenv().Slot)}
					game:GetService('ReplicatedStorage'):WaitForChild('Remotes'):WaitForChild('SpinWeapon'):FireServer(unpack(args))
					wait(0.25)
				end
			until WSpin or not getgenv().IsAutoSpin
		end
	elseif getgenv().SpinType == 'Prodigy' then
		repeat
			for Prodigy,_ in pairs(Options.ProdigiesDropdown.Value) do
				if Prodigy == MyPlayer.Data:GetAttribute('Prodigy') then
					WSpin = true
					print('You got '..MyPlayer.Data:GetAttribute('Prodigy'))
					getgenv().IsAutoSpin = false
				end
			end
			if not WSpin then
				game:GetService('ReplicatedStorage'):WaitForChild('Remotes'):WaitForChild('SpinProdigy'):FireServer()
				wait(0.25)
			end
		until WSpin or not getgenv().IsAutoSpin
	end
end
local GameStarting = {
	[1] = 'Choosing positions: 10 Seconds left',
	[2] = 'Choosing positions: 9 Seconds left',
	[3] = 'Choosing positions: 8 Seconds left',
	[4] = 'Choosing positions: 7 Seconds left',
	[5] = 'Choosing positions: 6 Seconds left',
	[6] = 'Choosing positions: 5 Seconds left',
	[7] = 'Choosing positions: 4 Seconds left',
	[8] = 'Choosing positions: 3 Seconds left',
	[9] = 'Choosing positions: 2 Seconds left',
	[10] = 'Choosing positions: 1 Seconds left'
}
function ChoosePosition()
	if table.find(GameStarting, MyPlayer.PlayerGui.GameStatusGui.GameStatus.Text) then
		local args = {
			[1] = getgenv().Position,
			[2] = getgenv().Team
		} 
		game:GetService('ReplicatedStorage'):WaitForChild('Remotes'):WaitForChild('ChoosePosition'):FireServer(unpack(args))
	end
end
function Buy()
	local args = {
		[1] = getgenv().Cosmetics}
	game:GetService('ReplicatedStorage').Remotes.BuyCosmetics:FireServer(unpack(args))
	wait(0.1)
end
function Delete()
	local OwnedCosmetics = {}
	local Duplicates = {}
	for i,v in pairs(MyPlayer.OwnedEmotes:GetChildren()) do
		if not table.find(OwnedCosmetics, v.Name) then
			table.insert(OwnedCosmetics, v.Name)
		else
			table.insert(Duplicates, v)
		end
	end
	for i,v in pairs(MyPlayer.OwnedAccessories:GetChildren()) do
		if not table.find(OwnedCosmetics, v.Name) then
			table.insert(OwnedCosmetics, v.Name)
		else
			table.insert(Duplicates, v)
		end
	end
	for i,v in pairs(Duplicates) do
		local args = {
			[1] = v:GetAttribute('ID')}		
		game:GetService('ReplicatedStorage'):WaitForChild('Remotes'):WaitForChild('DeleteCosmetic'):FireServer(unpack(args))
		wait(0.1)
	end
end
function SnakeDash()
	if PlaceId ~= 12467817668 then
		if MyPlayer.PlayerGui.SkilsGui.SlotEight.SkillName.Text ~= '' then
			if (not MyPlayer.PlayerGui.SkilsGui.SlotEight.CDFrame.Visible) then
                if GetRealBall() then
                    task.spawn(function()
                        repeat
                            MyPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(MyPlayer.Character.HumanoidRootPart.Position, Vector3.new(GetRealBall().Ball.Position.X, MyPlayer.Character.HumanoidRootPart.Position.Y, GetRealBall().Ball.Position.Z))
                            task.wait()
                        until MyPlayer:GetAttribute('UsingSkill')
                    end)
                elseif getgenv().BallOwner.Character:FindFirstChild("Ball") then
                    task.spawn(function()
                        repeat
                            MyPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(MyPlayer.Character.HumanoidRootPart.Position, getgenv().BallOwner.Character:WaitForChild("Ball").Ball.Position)
                            task.wait()
                        until MyPlayer:GetAttribute('UsingSkill')
                    end)
                end 
				local args = {
					[1] = 'Hold',
					[2] = MyPlayer.PlayerGui.SkilsGui.SlotEight.SkillName.Text}
				game:GetService('ReplicatedStorage').Remotes.TranciverRemote:FireServer(unpack(args))
				local args = {
					[1] = 'UseSkill',
					[2] = MyPlayer.PlayerGui.SkilsGui.SlotEight.SkillName.Text}
				game:GetService('ReplicatedStorage').Remotes.TranciverRemote:FireServer(unpack(args))
			end
		end
	end
end
local BannedSpeeds = {
	[1] = 0,
	[2] = 15,
	[3] = 17,
	[4] = 20,
	[5] = 22,
	[6] = 25,
	[7] = 27
}
function ChangeSpeed()
	if getgenv().IsSpeedDemon and not table.find(BannedSpeeds, MyPlayer.Character.Humanoid.WalkSpeed) then
		SpeedChange:Disconnect()
		MyPlayer.Character.Humanoid.WalkSpeed += getgenv().SpeedBoost
		SpeedChange = MyPlayer.Character.Humanoid:GetPropertyChangedSignal('WalkSpeed'):Connect(ChangeSpeed)
	end
end
SpeedChange = MyPlayer.Character.Humanoid:GetPropertyChangedSignal('WalkSpeed'):Connect(ChangeSpeed)
function BeginGame()
    local args = {
        [1] = 'Begin Game'
    }    
    game:GetService('ReplicatedStorage'):WaitForChild('TrainingRoomRemotes'):WaitForChild('Commands'):FireServer(unpack(args))
end
function IsBallInGame()
	local FoundBall = false
	for i,v in pairs(game:GetService('Players'):GetChildren()) do
		if v.Character:FindFirstChild('Ball') then
			FoundBall = true
		end
	end
	if FoundBall then
		return true
	else
		return false
	end
end
function PlayMatch()
	if getgenv().AFKTarget ~= 'None' then
		BeginGame()
		repeat ChoosePosition() task.wait() until MyPlayer.Character.Humanoid.WalkSpeed == 0
		Clip = false
		getgenv().Noclipping = game:GetService('RunService').Stepped:Connect(NoclipLoop)
		repeat task.wait() until MyPlayer.Character.Humanoid.WalkSpeed ~= 0
		repeat
			if MyPlayer.Character:FindFirstChild('Ball') then
				repeat task.wait() until MyPlayer.Character.Humanoid.WalkSpeed ~= 0
				MyPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(-458.066406, -93.0298462, -367.625244, 0.979208767, -6.68118316e-09, 0.202855244, 9.8042543e-09, 1, -1.43906984e-08, -0.202855244, 1.60803424e-08, 0.979208767)
				repeat task.wait() until game:GetService('Players')[getgenv().AFKTarget].Character:FindFirstChild('Ball') or (not MyPlayer.Character.Torso:FindFirstChild('Torso'))
			end
			if game:GetService('Players')[getgenv().AFKTarget].Character:FindFirstChild('Ball') then 
				repeat task.wait() until MyPlayer.Character.Humanoid.WalkSpeed ~= 0
				repeat
					if game:GetService('Players')[getgenv().AFKTarget].Character:FindFirstChild('Ball') then
						MyPlayer.Character.HumanoidRootPart.CFrame = game:GetService('Players')[getgenv().AFKTarget].Character.HumanoidRootPart.CFrame
						local args = {
							[1] = 'TakeBall',
							[2] = game:GetService('Players')[getgenv().AFKTarget].Character.Ball.Ball
						}
						game:GetService('ReplicatedStorage'):WaitForChild('Remotes'):WaitForChild('PunchRemote'):FireServer(unpack(args))
					end
					task.wait()
				until MyPlayer.Character:FindFirstChild('Ball') or (not MyPlayer.Character.Torso:FindFirstChild('Torso'))
			end
			task.wait()
		until (not MyPlayer.Character.Torso:FindFirstChild('Torso'))
		Clip = true
		getgenv().Noclipping:Disconnect()
	end
end
function PlayLeagueMatch()
	repeat task.wait() until MyPlayer.Character.Torso:FindFirstChild('Torso')
	local team1 = false
	local team2 = false
	for i,v in pairs(game:GetService('ReplicatedStorage').Teams['1']:GetAttributes()) do
		if v == MyPlayer.Name then
			team1 = true
		end
	end
	for i,v in pairs(game:GetService('ReplicatedStorage').Teams['2']:GetAttributes()) do
		if v == MyPlayer.Name then
			team2 = true
		end
	end
	Clip = false
	getgenv().Noclipping = game:GetService('RunService').Stepped:Connect(NoclipLoop)
	repeat task.wait() until IsBallInGame()
	if not MyPlayer.Character:FindFirstChild('Ball') then
		task.spawn(function()
			repeat
				if team1 then
					MyPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(-663.387085, -94.1178436, 371.810394, -0.999397099, 8.17453767e-08, -0.0347189642, 8.04340416e-08, 1, 3.91667072e-08, 0.0347189642, 3.63505066e-08, -0.999397099)
				elseif team2 then
					MyPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(-1118.29041, -94.1178589, 373.184998, -0.998213291, 3.39337767e-08, -0.0597511828, 3.46157556e-08, 1, -1.03784998e-08, 0.0597511828, -1.24282886e-08, -0.998213291)
				end
				task.wait()
			until not getgenv().IsLeagueFarm
		end)
	else
		repeat task.wait() until MyPlayer.Character.Humanoid.WalkSpeed ~= 0
		task.spawn(function()
			repeat
				if team1 then
					MyPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(-663.387085, -94.1178436, 371.810394, -0.999397099, 8.17453767e-08, -0.0347189642, 8.04340416e-08, 1, 3.91667072e-08, 0.0347189642, 3.63505066e-08, -0.999397099)
				elseif team2 then
					MyPlayer.Character.HumanoidRootPart.CFrame = CFrame.new(-1118.29041, -94.1178589, 373.184998, -0.998213291, 3.39337767e-08, -0.0597511828, 3.46157556e-08, 1, -1.03784998e-08, 0.0597511828, -1.24282886e-08, -0.998213291)
				end
				task.wait()
			until not getgenv().IsLeagueFarm
		end)
	end
	repeat		
		for i,v in pairs(game:GetService('Players'):GetChildren()) do
			if v ~= MyPlayer then
				if v.Character:FindFirstChild('Ball') then
					repeat task.wait() until MyPlayer.Character.Humanoid.WalkSpeed ~= 0
					repeat
						if v.Character:FindFirstChild('Ball') then
							local args = {
								[1] = 'TackleBegin'}
							game:GetService('ReplicatedStorage'):WaitForChild('Remotes'):WaitForChild('UseKeyboardSkillRemote'):FireServer(unpack(args))
							local args = {
								[1] = 'Tackle',
								[2] = v.Character.Ball.Ball,
								[3] = v.Character.Ball.Ball.CFrame
							}		
							game:GetService('ReplicatedStorage'):WaitForChild('Remotes'):WaitForChild('UseKeyboardSkillRemote'):FireServer(unpack(args))
						end
						task.wait()
					until MyPlayer.Character:FindFirstChild('Ball') or (not MyPlayer.Character.Torso:FindFirstChild('Torso'))
				end
			end
		end
		task.wait()
	until (not MyPlayer.Character.Torso:FindFirstChild('Torso')) or not getgenv().IsLeagueFarm
	Clip = true
	getgenv().Noclipping:Disconnect()
end
function DailyChallenge()
	if PlaceId == 13864400206 then
		repeat task.wait()
			repeat task.wait() until MyPlayer.Character:FindFirstChild('Ball')
			if game:GetService('Workspace').GameField.BlueLockmans.Spot1.Position == Vector3.new(342.4703674316406, 3.814638137817383, -713.7109985351562) then
				local args = {
					[1] = 'PunchBall',
					[2] = MyPlayer.Character:FindFirstChild('Ball'),
					[3] = 1,
					[4] = Vector3.new(0.9485578536987305, -0.28204798698425293, 0.1438293308019638),
					[5] = Vector3.new(0.9885718822479248, 0.016017595306038857, 0.14989666640758514)
				}
				game:GetService('ReplicatedStorage'):WaitForChild('Remotes'):WaitForChild('UseKeyboardSkillRemote'):FireServer(unpack(args))
			elseif game:GetService('Workspace').GameField.BlueLockmans.Spot1.Position == Vector3.new(298.120361328125, 3.814638137817383, -758.5650024414062) then
				local args = {
					[1] = 'PunchBall',
					[2] = MyPlayer.Character:FindFirstChild('Ball'),
					[3] = 1,
					[4] = Vector3.new(0.17995981872081757, -0.3644046187400818, -0.9136869311332703),
					[5] = Vector3.new(0.19315169751644135, 0.01585335098206997, -0.9810408353805542)
				}
				game:GetService('ReplicatedStorage'):WaitForChild('Remotes'):WaitForChild('UseKeyboardSkillRemote'):FireServer(unpack(args))
			elseif game:GetService('Workspace').GameField.BlueLockmans.Spot1.Position == Vector3.new(253.4203643798828, 3.814638137817383, -713.7109985351562) then
				local args = {
					[1] = 'PunchBall',
					[2] = MyPlayer.Character:FindFirstChild('Ball'),
					[3] = 1,
					[4] = Vector3.new(-0.9260265231132507, -0.3074670732021332, -0.21894952654838562),
					[5] = Vector3.new(-0.9730885624885559, 0.016010480001568794, -0.2298746258020401)
				}
				game:GetService('ReplicatedStorage'):WaitForChild('Remotes'):WaitForChild('UseKeyboardSkillRemote'):FireServer(unpack(args))
			end
		until PlaceId ~= 13864400206
	end
end

--Auto functions
function AutoChoosePosition()
	if getgenv().IsAutoPosition then
		repeat
			ChoosePosition()
			task.wait()
		until not getgenv().IsAutoPosition
	end
end
function AutoFarm()
	if getgenv().IsAutoFarm then
		repeat
			PlayMatch()
			task.wait()
		until not getgenv().IsAutoFarm
	end
end
function AutoLeagueFarm()
	if getgenv().IsLeagueFarm then
		repeat
			PlayLeagueMatch()
			task.wait()
		until not getgenv().IsLeagueFarm
	end
end
function AutoSpin()
	if getgenv().IsAutoSpin then
		WSpin = false
		repeat
			Spin()
			task.wait()
		until not getgenv().IsAutoSpin
	end
end
function AutoBuy()
	if getgenv().IsAutoBuy then
		repeat
			Buy()
			task.wait()
		until not getgenv().IsAutoBuy
	end
end
function AutoDelete()
	if getgenv().IsAutoDelete then
		repeat
			Delete()
			task.wait()
		until not getgenv().IsAutoDelete
	end
end

Sections.Punch:AddDropdown('FieldTypeDropdown', {
    Values = {'BigField','MiniField'},
    Default = 1,
    Multi = false,
    Text = 'Field',
    Tooltip = 'Choose type of field',
    Callback = function(Value)
        pcall( function()
			getgenv().FieldType = Value
		end)
    end
})
Sections.Punch:AddLabel('Enable PunchPower'):AddKeyPicker('PunchPowerKeyBind', {
    Default = 'Space',
    Mode = 'Hold',
    NoUI = true,
    Callback = function(Value)
    end
})
task.spawn(function()
    while true do task.wait()
        if Options.PunchPowerKeyBind:GetState() then
            getgenv().IsShootingPower = true
		else
			getgenv().IsShootingPower = false
        end
        if Library.Unloaded then break end
    end
end)
Sections.Punch:AddLabel('SnakeDash'):AddKeyPicker('SnakeDashKeyBind', {
    Default = 'E',
    Mode = 'Toggle',
    NoUI = true,
    Callback = function(Value)
        pcall( function()
			SnakeDash()
		end)
    end
})

Sections.Speed:AddSlider('SpeedBoostSlider', {
    Text = 'SpeedBoost',
    Default = 4.2,
    Min = 0,
    Max = 5,
    Rounding = 1,
    Compact = false,
    Callback = function(Boost)
		pcall( function()
			getgenv().SpeedBoost = Boost
		end)
	end
})
Sections.Speed:AddToggle('SpeedDemonToggle', {
    Text = 'SpeedDemon',
    Default = true,
    Tooltip = 'Enables speed boost',
    Callback = function(Value)
		pcall( function()
			getgenv().IsSpeedDemon = Value
		end)
	end
})
Sections.Speed:AddLabel('Enable AutoSaving'):AddKeyPicker('AutoSavingKeyBind', {
    Default = 'F',
    Mode = 'Toggle',
	Text = 'Auto Saving',
    NoUI = false,
    Callback = function(Value)
		pcall(function()
			getgenv().IsAutoSaving = Value
		end)
    end
})

Sections.Defense:AddLabel('Enable AutoDefense'):AddKeyPicker('AutoDefenseKeyBind', {
    Default = 'MB2',
    Mode = 'Hold',
    NoUI = true,
    Callback = function(Value)
    end
})
task.spawn(function()
    while true do task.wait()
        if Options.AutoDefenseKeyBind:GetState() then
            getgenv().IsAutoDefense = true
		else
			getgenv().IsAutoDefense = false
        end
        if Library.Unloaded then break end
    end
end)

Sections.Positioning:AddDropdown('TeamDropdown', {
    Values = {'1','2'},
    Default = 1,
    Multi = false,
    Text = 'Team',
    Tooltip = 'Choose team',
    Callback = function(Value)
        pcall( function()
			getgenv().Team = tonumber(Value)
		end)
    end
})
Sections.Positioning:AddDropdown('PositionDropdown', {
    Values = {'Forward','LeftWinger','RightWinger','LeftDef','RightDef'},
    Default = 1,
    Multi = false,
    Text = 'Position',
    Tooltip = 'Choose position',
    Callback = function(Value)
        pcall( function()
			getgenv().Position = Value
		end)
    end
})
Sections.Positioning:AddToggle('AutoPositionToggle', {
    Text = 'AutoPosition',
    Default = false,
    Tooltip = 'Automatically chooses wanted position',
    Callback = function(Value)
		pcall( function()
			getgenv().IsAutoPosition = Value
			AutoChoosePosition()
		end)
	end
})

Sections.AutoFarm:AddDropdown('AFKTargetDropdown', {
    SpecialType = 'Player',
    Text = 'AFKTarget',
    Tooltip = 'Choose AFKTarget',
    Callback = function(Value)
        pcall( function()
			getgenv().AFKTarget = Value
		end)
    end
})
Sections.AutoFarm:AddToggle('AutoFarmToggle', {
    Text = 'AutoFarm',
    Default = false,
    Tooltip = 'Enables AutoFarm',
    Callback = function(Value)
		pcall( function()
			getgenv().IsAutoFarm = Value
			AutoFarm()
		end)
	end
})
Sections.AutoFarm:AddToggle('LeagueFarmToggle', {
    Text = 'LeagueFarm',
    Default = false,
    Tooltip = 'Enables LeagueFarm',
    Callback = function(Value)
		pcall( function()
			getgenv().IsLeagueFarm = Value
			AutoLeagueFarm()
		end)
	end
})
Sections.AutoFarm:AddToggle('AutoDailyChallengeToggle', {
    Text = 'Auto Daily Challenge',
    Default = false,
    Tooltip = 'Enables Auto Daily Challenge',
    Callback = function(Value)
		pcall( function()
			DailyChallenge()
		end)
	end
})

Sections.Misc:AddDropdown('SpinDropdown', {
    Values = {'Weapon','Prodigy'},
    Default = 1,
    Multi = false,
    Text = 'Spin',
    Tooltip = 'Choose what to spin',
    Callback = function(Value)
        pcall( function()
			getgenv().SpinType = Value
		end)
    end
})
Sections.Misc:AddDropdown('SlotDropdown', {
    Values = {'1','2','3'},
    Default = 1,
    Multi = false,
    Text = 'Slot',
    Tooltip = 'Choose slot to spin',
    Callback = function(Value)
        pcall( function()
			getgenv().Slot = Value
		end)
    end
})
Sections.Misc:AddDropdown('WeaponsDropdown', {
    Values = WeaponList,
    Default = 1,
    Multi = true,
    Text = 'Weapons',
    Tooltip = 'Choose wanted weapons',
    Callback = function(Value)
    end
})
Sections.Misc:AddDropdown('ProdigiesDropdown', {
    Values = ProdigyList,
    Default = 1,
    Multi = true,
    Text = 'Prodigies',
    Tooltip = 'Choose wanted prodigies',
    Callback = function(Value)
    end
})
Sections.Misc:AddToggle('AutoSpinToggle', {
    Text = 'AutoSpin',
    Default = false,
    Tooltip = 'Enables AutoSpin',
    Callback = function(Value)
		pcall( function()
			getgenv().IsAutoSpin = Value
			AutoSpin()
		end)
	end
})
Sections.Misc:AddDropdown('CosmeticDropdown', {
    Values = {'Emotes', 'Accessories'},
    Default = 1,
    Multi = false,
    Text = 'Cosmetic',
    Tooltip = 'Choose cosmetic',
    Callback = function(Value)
        pcall( function()
			getgenv().Cosmetics = Value
		end)
    end
})
Sections.Misc:AddToggle('AutoBuyToggle', {
    Text = 'AutoBuy',
    Default = false,
    Tooltip = 'Enables AutoBuy',
    Callback = function(Value)
		pcall( function()
			getgenv().IsAutoBuy = Value
			AutoBuy()
		end)
	end
})
Sections.Misc:AddToggle('AutoDeleteToggle', {
    Text = 'AutoDelete',
    Default = false,
    Tooltip = 'Enables AutoDelete',
    Callback = function(Value)
		pcall( function()
			getgenv().IsAutoDelete = Value
			AutoDelete()
		end)
	end
})
Sections.Misc:AddToggle('FixCameraToggle', {
    Text = 'FixCamera',
    Default = false,
    Tooltip = 'Fixes camera',
    Callback = function(Value)
		pcall( function()
			getgenv().IsFixCamera = Value
			if getgenv().IsFixCamera then
				require(game:GetService('ReplicatedStorage').Modules.CameraShaker).Update = function() return CFrame.new(0,0,0) end
			else
				require(game:GetService('ReplicatedStorage').Modules.CameraShaker).Update = OldCameraShakeFunc
			end
		end)
	end
})
Sections.Misc:AddToggle('AntiAFKToggle', {
    Text = 'AntiAFK',
    Default = false,
    Tooltip = 'Enables AntiAFK',
    Callback = function(Value)
		pcall( function()
			getgenv().IsAntiAFK = Value
		end)
	end
})

Sections.Player:AddSlider('WalkSpeedSlider', {
    Text = 'WalkSpeed',
    Default = 16,
    Min = 0,
    Max = 500,
    Rounding = 0,
    Compact = false,
    Callback = function(WS)
        pcall( function()
			getgenv().CurrentSpeed = WS
		end)
    end
})
Sections.Player:AddToggle('WalkSpeedToggle', {
    Text = 'Enable WalkSpeed',
    Default = false,
    Tooltip = 'Enables WalkSpeed',
    Callback = function(Value)
		pcall( function()
			getgenv().WalkSpeedToggle = Value
			if not getgenv().WalkSpeedToggle then
				MyPlayer.Character.Humanoid.WalkSpeed = getgenv().FirstWS
			end
		end)
	end
})
Sections.Player:AddSlider('JumpPowerSlider', {
    Text = 'JumpPower',
    Default = 50,
    Min = 0,
    Max = 2000,
    Rounding = 0,
    Compact = false,
    Callback = function(JP)
        pcall( function()
			getgenv().CurrentJumpPower = JP
		end)
    end
})
Sections.Player:AddToggle('JumpPowerToggle', {
    Text = 'Enable JumpPower',
    Default = false,
    Tooltip = 'Enables JumpPower',
    Callback = function(Value)
		pcall( function()
			getgenv().JumpPowerToggle = Value
			if not getgenv().JumpPowerToggle then
				MyPlayer.Character.Humanoid.JumpPower = getgenv().FirstJP
				MyPlayer.Character.Humanoid.JumpHeight = getgenv().FirstJP
			end
		end)
	end
})
Sections.Player:AddToggle('NoClipToggle', {
    Text = 'NoClip',
    Default = false,
    Tooltip = 'Enables NoClip',
    Callback = function(Value)
		pcall( function()
			getgenv().NCToggle = Value
			if getgenv().NCToggle then
				Clip = false
				getgenv().Noclipping = game:GetService('RunService').Stepped:Connect(NoclipLoop)
			else
				Clip = true
				getgenv().Noclipping:Disconnect()
			end
		end)
	end
})
local RejoinButton = Sections.Player:AddButton({
	Text = 'Rejoin',
	Func = function()
		pcall( function()
			if #game.Players:GetPlayers() <= 1 then
				MyPlayer:Kick('\nRejoining...')
				wait()
				game:GetService('TeleportService'):Teleport(game.PlaceId, MyPlayer)
			else
				game:GetService('TeleportService'):TeleportToPlaceInstance(game.PlaceId, game.JobId, MyPlayer)
			end
		end)
	end,
	DoubleClick = false,
    Tooltip = 'Rejoins the same server'
})
local SHOPButton = Sections.Player:AddButton({
	Text = 'Server Hop',
	Func = function()
		pcall( function()
			if httprequest then
				local servers = {}
				local req = httprequest({Url = string.format('https://games.roblox.com/v1/games/%s/servers/Public?sortOrder=Asc&limit=100', game.PlaceId)})
				local body = game:GetService('HttpService'):JSONDecode(req.Body)
				if body and body.data then
					for i, v in next, body.data do
						if type(v) == 'table' and tonumber(v.playing) and tonumber(v.maxPlayers) and v.playing < v.maxPlayers and v.id ~= game.JobId then
							table.insert(servers, 1, v.id)
						end 
					end
				end
				if #servers > 0 then
					game:GetService('TeleportService'):TeleportToPlaceInstance(game.PlaceId, servers[math.random(1, #servers)], MyPlayer)
				end
			end
		end)
	end,
	DoubleClick = false,
    Tooltip = 'Hops to another server'
})
local JoinSSButton = Sections.Player:AddButton({
	Text = 'Join Smallest Server',
	Func = function()
		pcall( function()
			local Server, Next; repeat
				local Servers = ListServers(Next)
				Server = Servers.data[1]
				Next = Servers.nextPageCursor
			until Server
			TeleportService:TeleportToPlaceInstance(_place,Server.id,MyPlayer)
		end)
	end,
	DoubleClick = false,
    Tooltip = 'Join the smallest server'
})

Sections.ESP:AddToggle('ESPToggle', {
    Text = 'ESP',
    Default = false,
    Tooltip = 'Enables ESP',
    Callback = function(Value)
		pcall( function()
			getgenv().PlrESPChecker = Value
		end)
	end
})
Sections.ESP:AddToggle('ShowNamesToggle', {
    Text = 'Show Names',
    Default = false,
    Tooltip = 'Shows names',
    Callback = function(Value)
		pcall( function()
			EspSettings.NamesEnabled = Value
		end)
	end
})
Sections.ESP:AddToggle('ShowHealthToggle', {
    Text = 'Show Health',
    Default = false,
    Tooltip = 'Shows health',
    Callback = function(Value)
		pcall( function()
			EspSettings.HealthEnabled = Value
		end)
	end
})
Sections.ESP:AddToggle('ShowDistanceToggle', {
    Text = 'Show Distance',
    Default = false,
    Tooltip = 'Shows distance',
    Callback = function(Value)
		pcall( function()
			EspSettings.DistanceEnabled = Value
		end)
	end
})
Sections.ESP:AddToggle('ShowBoxToggle', {
    Text = 'Show Box',
    Default = false,
    Tooltip = 'Shows box',
    Callback = function(Value)
		pcall( function()
			EspSettings.BoxEsp = Value
			SetProperties({ Box = { Visible = Value } })
		end)
	end
})
Sections.ESP:AddSlider('RenderDistanceSlider', {
    Text = 'Render Distance',
    Default = math.clamp(EspSettings.RenderDistance, 0, 50000),
    Min = 0,
    Max = 50000,
    Rounding = 0,
    Compact = false,
    Callback = function(Value)
        pcall( function()
			EspSettings.RenderDistance = Value
		end)
    end
})
Sections.ESP:AddSlider('ESPSizeSlider', {
    Text = 'ESP Size',
    Default = EspSettings.Size,
    Min = 0,
    Max = 30,
    Rounding = 0,
    Compact = false,
    Callback = function(Value)
        pcall( function()
			EspSettings.Size = Value
			SetProperties({ Text = { Size = Value } })
		end)
    end
})
Sections.ESP:AddLabel('ESP Color'):AddColorPicker('ESPColorPicker', {
    Default = EspSettings.Color,
    Title = 'ESP Color',
    Transparency = 0,
    Callback = function(Value)
        pcall( function()
			EspSettings.TeamColors = false
			EspSettings.Color = Value
			SetProperties({ Box = { Color = Value }, Text = { Color = Value }})
		end)
    end
})
Sections.ESP:AddToggle('ShowTeamColorsToggle', {
    Text = 'Show Team Colors',
    Default = false,
    Tooltip = 'Shows team colors',
    Callback = function(Value)
		pcall( function()
			EspSettings.TeamColors = Value
			if (not Value) then
				SetProperties({ Box = { Color = EspSettings.Color }; Text = { Color = EspSettings.Color }  })
			end
		end)
	end
})
Sections.ESP:AddDropdown('TeamsDropdown', {
    Values = {'Allies', 'Enemies', 'All'},
    Default = 3,
    Multi = false,
    Text = 'Teams',
    Tooltip = 'Shows teams',
    Callback = function(Value)
        pcall( function()
			table.clear(EspSettings.BlacklistedTeams);
			if (Value == 'Enemies') then
				table.insert(EspSettings.BlacklistedTeams, MyPlayer.Team);
			end
			if (Value == 'Allies') then
				local AllTeams = Teams:GetTeams();
				table.remove(AllTeams, table.find(AllTeams, MyPlayer.Team));
				EspSettings.BlacklistedTeams = AllTeams
			end
		end)
    end
})

-- UI Settings
Library.KeybindFrame.Visible = true;
Library:OnUnload(function()
    Library.Unloaded = true
end)
Sections.Menu:AddButton('Unload', function() Library:Unload() end)
Sections.Menu:AddLabel('Menu bind'):AddKeyPicker('MenuKeybind', { Default = 'End', NoUI = true, Text = 'Menu keybind' })
Library.ToggleKeybind = Options.MenuKeybind
