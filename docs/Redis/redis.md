# REdis

:::note

I know this is poorly written. I'm just jotting down notes real quick even if they are not coherent. Hope to come back to this soon!

```js
const sorry = "excuse my mess"
```
:::

## Getting started

There's some basic instructions on how to get started with Redis in Node.js [here](https://redis.io/docs/clients/nodejs/), but I feel like the documentation can be improved.

You definitely need to experiment to be able to use the API correctly.

```js
await client.hSet('user-session:123', {
    name: 'John',
    surname: 'Smith',
    company: 'Redis',
    age: 29
})

let userSession = await client.hGetAll('user-session:123');
console.log(JSON.stringify(userSession, null, 2));
/*
{
  "surname": "Smith",
  "name": "John",
  "company": "Redis",
  "age": "29"
}
 */
```

### Using HGET

The examples use HSET, HGETALL, but why not HGET?

Turns out I'm not the only one who ran into this [problem](https://stackoverflow.com/questions/71501392/can-set-data-in-redis-server-but-cant-get-it).

The problem remains unanswered, and this [SO question](https://stackoverflow.com/questions/33217688/nodejs-redis-hset-hget-insert-to-dataset-error) is also unanswered.

These are all different questions, but they all hint at the much needed clarity from the official docs. 

[Redis Node - Get from hash - Not inserting into array](https://stackoverflow.com/questions/48945428/redis-node-get-from-hash-not-inserting-into-array)

https://redis.io/commands/hget/

Maybe this would be the solution? 
https://github.com/redis/node-redis/issues/1783#issuecomment-1004426704
