## Running Locally

If you want to run ArmViz locally, the easiest way is through our pre-built Docker image:

1. Install [Docker](https://docs.docker.com/engine/installation/)
1. Run `docker run -i -d -P ytechie/armviz:v2`
1. Run `docker ps` to see what port ArmViz is being served on

## Local Development

```
npm install
npm run-script build
```

To start a local hot-server  

```
npm start
```

## License

Available [here](https://github.com/msshli/arm-visualizer/blob/master/LICENSE.md)
