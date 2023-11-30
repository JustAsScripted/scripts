game.Players.LocalPlayer.Character.HumanoidRootPart.ChildAdded:Connect(function(nChild)
    if nChild.ClassName == "BodyVelocity" then
        task.spawn(function()
            repeat
                if game.Players.LocalPlayer.Character.HumanoidRootPart:FindFirstChild(nChild) then
                    nChild.MaxForce = Vector3.new(10000,10000,10000)
                    nChild.P = 3000
                    nChild.Velocity = Vector3.new(0,7,0)
                end
                task.wait()
            until not game.Players.LocalPlayer.Character.HumanoidRootPart:FindFirstChild(nChild)
        end)
        print(nChild.MaxForce)
        print(nChild.P)
        print(nChild.Velocity)
    end
end)
