## Socket io + express js

This is only `Proof of concept`.

So my question is  : 

> Is socket io can `emit` from other process ?

Its possible to emit from other process as long as emit from same instance.

in my example, I create 1 instance socket io using function.

```js
let wsIoServer
function createServerWs(serverHttp) {
    if (wsIoServer) return wsIoServer
    wsIoServer = new ServerWs(serverHttp)
    ...
}
```

As long as the `wsIoServer` alive, there will be a instance.

So, we can use this for emit event from other process. For example :

```js
// routes/index.js

router.post("/add-message", function(req, res, next) {
  const { message } = req.body;
  const io = createServerWs();
  io.emit("notif", message);
  res.send("ok");
})
```

This example show we can emit from API.

### Conclusion

We still able to send emit from other process as long as use same instance.

