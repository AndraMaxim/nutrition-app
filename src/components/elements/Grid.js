import React from 'react';
import PropTypes from 'prop-types';

import { StyledGrid, StyledGridContent } from '../styles/StyledGrid'

const Grid = ({ children }) => (
    <StyledGrid>
        <StyledGridContent>
            {children}
        </StyledGridContent>
    </StyledGrid>
)

Grid.propTypes = {
    header: PropTypes.string,
}

export default Grid;