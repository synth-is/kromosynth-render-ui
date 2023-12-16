import socket from '@socketsupply/socket-node';
import { spawn } from 'child_process';

let renderingService;

socket.on('toggleServer', async (value) => {
  console.log('toggleServer', value);
  const { stackBinary, script } = JSON.parse(value);
  if( renderingService ) {
    renderingService.kill();
    renderingService = null;
  } else {
    renderingService = spawn(
      stackBinary, 
      [script],
      {
        stdio: 'pipe' // ['pipe', 'ipc']
      }
    );
    renderingService.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
      socket.send({
        window: 0,
        event: 'backendUpdate',
        value: {stdout: data.toString()},
      })
    });
  }
  await socket.send({
    window: 0,
    event: 'backendUpdate',
    value: {
      message: renderingService ? 'rendering service is running' : 'rendering service is not running'
    },
  });
})
