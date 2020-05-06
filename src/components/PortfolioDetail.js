import React from 'react';

const PortfolioDetail = (props) => (
    <div>
        Displaying portfolio {props.match.params.id}
    </div>
);

export default PortfolioDetail;