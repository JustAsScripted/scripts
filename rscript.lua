game.Players.LocalPlayer.Character.HumanoidRootPart.ChildAdded:Connect(function(nChild)
    if nChild.ClassName == "BodyVelocity" then
        print(nChild.MaxForce)
        print(nChild.P)
        print(nChild.Velocity)
    end
end)
