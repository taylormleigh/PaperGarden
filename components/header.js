import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="container" id="header">
      <div id="logo"></div>
      <Link href={"/"}><button className="headerButton">home</button></Link>
      <Link href={"/MyWorlds"}><button className="headerButton">my worlds</button></Link>
      <Link href={"/CreateWorld"}><button className="headerButton">create</button></Link>
    </div>
    );
}