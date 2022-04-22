import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
/*import Admonition from '@theme/Admonition';*/



const MyTip = ({title,description,href,category,date}) => {
    return (
        <div class="row">
            <div class="col col--12 mytip">
                <div class="row">
                    <div class="mytip-body">
                        <p class="mytip-description" style={{fontSize:14}}><span className="gold">{category}</span>{date && ` - ${date}`}</p>
                        <p class="mytip-title"><Link to={href}>{title}</Link></p>
                        <p class="mytip-description">{description}</p>
                    </div>
                </div>
            </div>
        </div> 
    )
}


export default LongCard;
