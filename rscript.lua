game.Players.LocalPlayer.Character.HumanoidRootPart.ChildAdded:Connect(function(nChild)
    if nChild.ClassName == "BodyVelocity" then
        nChild.MaxForce = Vector3.new(10000,10000,10000)
        nChild.P = 1500
        nChild.Velocity = Vector3.new(0,3,0)
        print(nChild.MaxForce)
        print(nChild.P)
        print(nChild.Velocity)
    end
end)
