import React from 'react';
import { Outlet, Link } from "react-router-dom";

export default function Travel() {
  return (
    <>
    

    <nav>
      <ul>
        <li>
          {/* <Link to='/forms'>forms fill link</Link> */}
          <Link to='/drag'>forms fill link</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
    </>
  )
}
