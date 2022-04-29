## 创建app

`yarn create next-app`

## 修改打包命令

替换next.config.js中的打包命令，替换为：   

```
module.exports = {
  images: {
    loader: 'akamai',
    path: ''
  }
}
```

package.json中的scripts中的build替换为：    
`"build":"next build && next export"`

## 初始化

```
    amplify init
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project amplifydemo
The following configuration will be applied:

Project information
| Name: amplifydemo
| Environment: dev
| Default editor: Visual Studio Code
| App type: javascript
| Javascript framework: react
| Source Directory Path: src
| Distribution Directory Path: build
| Build Command: npm run-script build
| Start Command: npm run-script start

? Initialize the project with the above configuration? No
? Enter a name for the environment dev
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using react
? Source Directory Path:  src
? Distribution Directory Path: out
? Build Command:  yarn build
? Start Command: yarn start
Using default provider  awscloudformation
? Select the authentication method you want to use: AWS profile
```

## 导入包
```
    yarn add aws-amplify @aws-amplify/ui-react
```


## 添加样式框架tailwindcss
```
yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init tailwind.config.js

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}



touch ./styles/styles.css

 @tailwind base; 
 @tailwind components; 
 @tailwind utilities;
 
 
 
 touch postcss.config.js
 
 module.exports = {
   plugins: ["tailwindcss", "postcss-preset-env"],
};


# 在_app.tsx中添加styles.css
import '../styles/styles.css'


```