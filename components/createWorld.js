import React, { Fragment } from 'react';
import Layout from './layout.js';
import Link from 'next/link';
import worlds from '../database/testAPI';

export default function NewWorld({inputs, handleInputChange, handleSubmit}) {
  let worldObj = {
    WorldName: inputs.WorldName,
    WorldDetails: {
      Revolution: inputs.Revolution,
      Rotation: inputs.Rotation,
      Seasons: inputs.Seasons,
      Satellites: inputs.Satellites,
    },
    WorldRegions: []
  }

  const addWorld = () => {
    alert('Added!')
    worlds.push(worldObj);
    return ;
  }

  return (
    <>
    (Map through questions obj in database)
    {

    }
    </>
  );
}