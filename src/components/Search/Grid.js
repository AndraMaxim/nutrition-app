import React from 'react';

import { StyledGrid, StyledGridContent } from './StyledGrid'

const Grid = ({ children }) => (
    <StyledGrid>
        <StyledGridContent>
            {children}
        </StyledGridContent>
    </StyledGrid>
)

export default Grid;