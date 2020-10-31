import React from 'react';

import { StyledGrid, StyledGridContent } from './GridElements';

const Grid = ({ children }) => (
    <StyledGrid>
        <StyledGridContent>
            {children}
        </StyledGridContent>
    </StyledGrid>
)

export default Grid;