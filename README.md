# 说明
vue+api的结合

# 要求
nodejs、vuejs、asp.net core api 3.1

# 命令
## 初始化
### nodejs
```powershell
npm install -g @vue/cli
npm install -g @vue/cli-service
npm config list
# 找到下面的这段，然后在系统环境变量-Path变量里将下面的路径加进去
# prefix = "E:\\Soft\\noderepo\\node_global"
# 关闭cmd或ps后重新实验
```
### 建立项目
```bat
# 进入项目建立目录，创建vuejs项目
PS D:\localgit\vueapp\src\vueapp> vue create clientapp
```
在项目中应用一下类库
```VueCliMiddleware```

Startup类修改
ConfigureServices方法
```c#
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "clientapp/dist";
            });
```
Configure方法
```c#
            app.UseSpaStaticFiles();
            // https://marketplace.visualstudio.com/items?itemName=alexandredotnet.netcorevuejs&ssr=false#review-details
            // npm install
            app.UseSpa(spa =>
            {
                if (env.IsDevelopment())
                    spa.Options.SourcePath = "clientapp";
                else
                    spa.Options.SourcePath = "clientapp/dist";

                if (env.IsDevelopment())
                {
                    spa.UseVueCli(npmScript: "serve");
                }

            });
```

.csproj修改

PropertyGroup节点增加
```xml
    <SpaRoot>clientapp\</SpaRoot>
    <DefaultItemExcludes>$(DefaultItemExcludes);$(SpaRoot)node_modules\**</DefaultItemExcludes>
```
增加平级配置
```xml
  <Target Name="PublishRunWebpack" AfterTargets="ComputeFilesToPublish">
    <!-- As part of publishing, ensure the JS resources are freshly built in production mode -->
    <Exec WorkingDirectory="$(SpaRoot)" Command="npm install" />
    <Exec WorkingDirectory="$(SpaRoot)" Command="npm run build" />

    <!-- Include the newly-built files in the publish output -->
    <ItemGroup>
      <DistFiles Include="$(SpaRoot)dist\**" />
      <ResolvedFileToPublish Include="@(DistFiles->'%(FullPath)')" Exclude="@(ResolvedFileToPublish)">
        <RelativePath>%(DistFiles.Identity)</RelativePath>
        <CopyToPublishDirectory>PreserveNewest</CopyToPublishDirectory>
        <ExcludeFromSingleFile>true</ExcludeFromSingleFile>
      </ResolvedFileToPublish>
    </ItemGroup>
  </Target>
```

### 框架开发
bootstrap
```bat
cd clientapp
npm install jquery --save
npm install bootstrap --save
npm install popper.js --save
npm install --save vue-router
vue ui
```