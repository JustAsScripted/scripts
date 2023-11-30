game.Players.LocalPlayer.Character.HumanoidRootPart.ChildAdded:Connect(function(nChild)
    if nChild.ClassName == "BodyVelocity" then
        task.spawn(function()
            repeat
                game.Players.LocalPlayer.Character.HumanoidRootPart:WaitForChild(nChild.Name).MaxForce = Vector3.new(10000,10000,10000)
                game.Players.LocalPlayer.Character.HumanoidRootPart:WaitForChild(nChild.Name).P = 3000
                game.Players.LocalPlayer.Character.HumanoidRootPart:WaitForChild(nChild.Name).Velocity = Vector3.new(0,7,0)
                task.wait()
            until not game.Players.LocalPlayer.Character.HumanoidRootPart:FindFirstChild(nChild.Name)
        end)
        wait(0.1)
        print(nChild.MaxForce)
        print(nChild.P)
        print(nChild.Velocity)
    end
end)
