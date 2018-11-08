import React from "react";
import { Link } from "react-router-dom";

export default () => (
    <div>
        <p>404 - Nothing to see here, dude.</p>
        <p>Go back <Link to="/">home</Link></p>
    </div>
);