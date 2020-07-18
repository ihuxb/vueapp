FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
COPY src/vueapp/bin/Release/netcoreapp3.1/ app/
WORKDIR /app
EXPOSE 80
EXPOSE 443
ENTRYPOINT ["dotnet", "vueapp.dll"]