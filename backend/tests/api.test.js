import test from 'node:test';import assert from 'node:assert/strict';import app from '../server.js';
let server,base,token,rideId;
test.before(async()=>{server=app.listen(0);base=`http://127.0.0.1:${server.address().port}/api`});
test.after(()=>server.close());
test('health endpoint works',async()=>{const r=await fetch(`${base}/health`);assert.equal(r.status,200)});
test('demo login returns a JWT',async()=>{const r=await fetch(`${base}/auth/login`,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({email:'demo@campusride.com',password:'demo123'})});const d=await r.json();assert.equal(r.status,200);assert.ok(d.token);token=d.token});
test('ride search returns demo rides',async()=>{const r=await fetch(`${base}/rides?to=CBIT`);const d=await r.json();assert.ok(d.length>0);rideId=d[0].id});
test('ride creation requires authentication',async()=>{const r=await fetch(`${base}/rides`,{method:'POST',headers:{'content-type':'application/json'},body:'{}'});assert.equal(r.status,401)});
test('valid ride request is created',async()=>{const r=await fetch(`${base}/rides/${rideId}/request`,{method:'POST',headers:{'content-type':'application/json',authorization:`Bearer ${token}`},body:JSON.stringify({requestedSeats:1})});assert.ok([201,409].includes(r.status))});
