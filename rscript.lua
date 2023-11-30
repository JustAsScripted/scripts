game.Players.LocalPlayer.Character.HumanoidRootPart.ChildAdded:Connect(function(nChild)
    if nChild.ClassName == "BodyVelocity" then
        task.spawn(function()
            repeat task.wait()
                nChild.MaxForce = Vector3.new(10000,10000,10000)
                nChild.P = 3000
                nChild.Velocity = Vector3.new(0,7,0)
            until not game.Players.LocalPlayer.Character.HumanoidRootPart:FindFirstChild("BodyVelocity")
        end)
        print(nChild.MaxForce)
        print(nChild.P)
        print(nChild.Velocity)
    end
end)
