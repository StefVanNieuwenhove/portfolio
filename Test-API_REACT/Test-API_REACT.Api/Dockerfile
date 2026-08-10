FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
USER $APP_UID
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["Test-API_REACT.Api/Test-API_REACT.Api.csproj", "Test-API_REACT.Api/"]
COPY ["Test-API_REACT.Core/Test-API_REACT.Core.csproj", "Test-API_REACT.Core/"]
RUN dotnet restore "Test-API_REACT.Api/Test-API_REACT.Api.csproj"
COPY . .
WORKDIR "/src/Test-API_REACT.Api"
RUN dotnet build "Test-API_REACT.Api.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "Test-API_REACT.Api.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Test-API_REACT.Api.dll"]
