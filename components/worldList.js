import React from 'react';
import World from './world.js'
import worlds from '../database/testAPI.js';

export default function WorldList() {
    return (
      <>{
        worlds.map((worldObj, i)=>(
          <div key={i}><World worldIndex={i}/></div>
        ))
      }
      </>
    )
}