import React from 'react';
import { Button } from 'reactstrap';
import './post-status-filter.css';

const PostStatusFilter = () => {
    return (
        <div className="dtn-group">
            <Button color='info' >Все</Button>
            <button type="bytton" className="btn btn-info">Все</button>
            <button type="bytton" className="btn btn-outlinew-secondary">Понравилось</button>
        </div>
    )
}
export default PostStatusFilter;