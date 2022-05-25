import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ToolDetail = () => {
    const {toolId}= useParams();
    // const [tool,setTool]=useState({});


    return (
        <div>
            this is detail of car part {toolId}
        </div>
    );
};

export default ToolDetail;