FROM mcr.microsoft.com/dotnet/core/runtime:3.1-buster-slim AS base
WORKDIR src/vueapp/bin/Release/netcoreapp3.1
EXPOSE 80
EXPOSE 443
ENTRYPOINT ["dotnet", "vueapp.dll"]