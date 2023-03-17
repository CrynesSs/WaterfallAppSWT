
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process unless
// nodeIntegration is set to true in webPreferences.
// Use preload.js to selectively enable features
// needed in the renderer process.
const setButton  : HTMLElement = document.getElementById('btn')
const titleInput : HTMLInputElement = document.getElementById('title') as HTMLInputElement
setButton.addEventListener('click', async () => {
    console.log('Button was Pressed')
    const title = titleInput.value
    await window.myAPI.changeTitle(title)
    console.log('Changed State')
});