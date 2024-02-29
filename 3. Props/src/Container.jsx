import React from "react";

function Container(props) {  // parent component : props yazan yere direkt {childeren} yazarak destructuring yapabiliriz.
    console.log(props);

    return <div>
        <div>
            Ürün Bilgileri
            <hr />
            {props.children}
        </div>
    </div>;
}

export default Container;
