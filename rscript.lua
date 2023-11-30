game.Players.LocalPlayer.Character.HumanoidRootPart.ChildAdded:Connect(function(nChild)
    if nChild.ClassName == "BodyVelocity" then
        local newMaxForce = Vector3.new(10000,10000,10000)
        local newP = (game.Players.LocalPlayer.Character.HumanoidRootPart:WaitForChild(nChild.Name).P + (game.Players.LocalPlayer.Character.HumanoidRootPart:WaitForChild(nChild.Name).P * 0.35))
        task.spawn(function()
            repeat
                game.Players.LocalPlayer.Character.HumanoidRootPart:WaitForChild(nChild.Name).MaxForce = newMaxForce
                game.Players.LocalPlayer.Character.HumanoidRootPart:WaitForChild(nChild.Name).P = newP
                task.wait()
            until not game.Players.LocalPlayer.Character.HumanoidRootPart:FindFirstChild(nChild.Name)
        )
        repeat task.wait() until game.Players.LocalPlayer.Character.HumanoidRootPart:WaitForChild(nChild.Name).Velocity ~= Vector3.new(0, 2, 0)
        local newVelocity = (game.Players.LocalPlayer.Character.HumanoidRootPart:WaitForChild(nChild.Name).Velocity + (game.Players.LocalPlayer.Character.HumanoidRootPart:WaitForChild(nChild.Name).Velocity * 0.35))
        task.spawn(function()
            repeat
                game.Players.LocalPlayer.Character.HumanoidRootPart:WaitForChild(nChild.Name).Velocity = newVelocity
                task.wait()
            until not game.Players.LocalPlayer.Character.HumanoidRootPart:FindFirstChild(nChild.Name)
        end)
    end
end)
