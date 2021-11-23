import React from "react";

function Links(prop) {
    return (
        <div id="links">
            <h3>Links</h3>
            <a href={prop.links.github}>GitHub</a>
            <a href={prop.links.linkedin}>LinkedIn</a>
        </div>
    );
}

export default Links;