import test from 'node:test';
import assert from 'node:assert/strict';
import {plants} from '../catalog.js';

const categories=new Set(['vegetable','herb','flower','shrub','tree','native']);
const domains={sun:new Set(['full','part','shade']),water:new Set(['low','medium','high']),soil:new Set(['loam','sand','clay']),spaces:new Set(['ground','raised','container'])};

test('catalog has 24 distinct seed records and covers all six categories',()=>{
  assert.equal(plants.length,24);
  assert.equal(new Set(plants.map(p=>p.id)).size,plants.length);
  assert.deepEqual(new Set(plants.map(p=>p.category)),categories);
});
test('records adhere to predictable, intentionally unverified seed schema',()=>{
  for(const p of plants){
    assert.ok(p.id&&p.name&&p.scientificName&&p.description);
    assert.ok(categories.has(p.category));
    for(const [field,valid] of Object.entries(domains)){
      assert.ok(Array.isArray(p.requirements[field])&&p.requirements[field].length>0,`${p.id}: ${field}`);
      assert.ok(p.requirements[field].every(x=>valid.has(x)),`${p.id}: invalid ${field}`);
    }
    assert.equal(p.evidence.status,'illustrative');
    assert.deepEqual(p.evidence.sourceIds,[]);
    assert.deepEqual(p.locality.plantingWindows,[]);
  }
});
