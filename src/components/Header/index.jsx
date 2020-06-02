import React from 'react';

import { Container, ToggleButton, Icon } from './styles';

const Header = () => (
    <Container>
        <div>
            <p>Which place are you from?</p>
        </div>
        <ToggleButton>
            <Icon className="fa fa-moon-o"/>
            Dark mode
        </ToggleButton>
    </Container>
);

export default Header;