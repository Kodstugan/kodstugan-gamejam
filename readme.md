
You need to host a webserver in order for Phaser.js to work. 
The easiest way to do this is to use Pythons built in http.server module like so:

```
python -m http.server [port]
```

You can find the site at

http://localhost:8000

if you left the port argument empty, or at:

http://localhost:[port]

if you used a specific port

Send a SIGINT exit signal with ctrl+c to stop the server
