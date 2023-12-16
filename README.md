# kromosynth-render-ui

A desktop GUI application for running websocket services rendering [kromosynth](https://sigmoid.social/@kromosynth) genomes to audio buffers.

Based on [socketsupply/socket-examples/socket-features/node-backend-bundled/](https://github.com/socketsupply/socket-examples/tree/master/socket-features/node-backend-bundled)

# Build instructions

1. Clone the repo:
```bash
git clone https://github.com/synth-is/kromosynth-render-ui.git
```

2. Open the application directory
```bash
cd kromosynth-render-ui
```

3. Install dependencies using `npm`, `pnpm`, or `yarn`.
```bash
npm i
```

4. Download and install Node.js for your platform. (TODO: only works on macOS at the moment)
```bash
./get-node.sh
```

5. Download and install `kromosynth-render`
```bash
./get-kromosynth-render.sh
```

6. Install the Socket SDK compiler following instructions [here](https://socketsupply.co/docs).
7. Build and run the application with either `ssc build -r`, `npm start`, `pnpm start`, or `yarn start`.