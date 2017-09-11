// This is main process of Electron, started as first thing when your
// app starts. This script is running through entire life of your application.
// It doesn't have any windows which you can see on screen, but we can open
// window from here.

import { app, BrowserWindow } from 'electron'
import path from 'path'

let mainWindow

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    // width: //1024,
    // height:  //768,
    frame: false
  })
  mainWindow.maximize() // 窗口最大化
  // mainWindow.setMenu(null);//设置菜单栏的 menu ，设置它为 null 则表示不设置菜单栏.

  // Load the HTML file directly from the webpack dev server if
  // hot reload is enabled, otherwise load the local file.
  const mainURL = process.env.HOT
    ? `http://localhost:${process.env.PORT}/main.html`
    : 'file://' + path.join(__dirname, 'main.html')

  mainWindow.loadURL(mainURL)

  if (process.env.NODE_ENV !== 'production') {
    mainWindow.openDevTools()
  }

  mainWindow.on('closed', () => {
    mainWindow = null
  })
})

app.on('window-all-closed', () => {
  app.quit()
})
