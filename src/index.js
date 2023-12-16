import application from 'socket:application';

try {
  await application.backend.open();
} catch (error) {
  console.error(error);
}

const currentWindow = await application.getCurrentWindow();
const textarea = document.querySelector('textarea');
const button = document.querySelector('button');
const select = document.querySelector('select');
let serverScriptPath = select.value;

button.addEventListener('click', () => {
  currentWindow.send({ 
    event: 'toggleServer', 
    value: {
      stackBinary: "./node",
      script: serverScriptPath
    }, 
    backend: true 
  });
})

select.addEventListener('change', (event) => {
  serverScriptPath = event.target.value;
  currentWindow.send({ 
    event: 'toggleServer', 
    value: {
      stackBinary: "./node",
      script: serverScriptPath
    }, 
    backend: true 
  });
});

currentWindow.on('backendUpdate', (event) => {
  if( event.detail ) {
    textarea.value = JSON.stringify(event.detail, null, 2) + textarea.value + '\n';

    // set background color
    if( event.detail.message ) {
      if( event.detail.message.includes('rendering service is running') ) {
        document.body.style.backgroundColor = 'green';
      } else {
        document.body.style.backgroundColor = 'red';
      }
    }
  }
})

currentWindow.on('process-error', (event) => {
  textarea.value = 'process-error\n' + JSON.stringify(event.detail, null, 2) + textarea.value + '\n';
})