game.Players.LocalPlayer.Character.HumanoidRootPart.ChildAdded:Connect(function(nChild)
    if nChild.ClassName == "BodyVelocity" then
        repeat
            game.Players.LocalPlayer.Character.HumanoidRootPart:WaitForChild(nChild.Name).P = 1800
            if game.Players.LocalPlayer.Character.HumanoidRootPart:WaitForChild(nChild.Name).Velocity.Magnitude > 40 then
                local newVelocity = (game.Players.LocalPlayer.Character.HumanoidRootPart:WaitForChild(nChild.Name).Velocity + (game.Players.LocalPlayer.Character.HumanoidRootPart:WaitForChild(nChild.Name).Velocity * 0.35))
                repeat
                    game.Players.LocalPlayer.Character.HumanoidRootPart:WaitForChild(nChild.Name).P = 1800
                    game.Players.LocalPlayer.Character.HumanoidRootPart:WaitForChild(nChild.Name).Velocity = newVelocity
                    task.wait()
                until not game.Players.LocalPlayer.Character.HumanoidRootPart:FindFirstChild(nChild.Name)
            end
            task.wait()
        until not game.Players.LocalPlayer.Character.HumanoidRootPart:FindFirstChild(nChild.Name)
    end
end)

