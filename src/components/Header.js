import React from 'react';
import MaterialIcon, {colorPalette} from 'material-icons-react';

function Header() {
   return (
      <div id="topo">
         <div id="divLogo">
            <img src="../../Shape.svg" alt="Facebook" />
         </div>
         <div id="divPerfil">
            <span>Meu Perfil</span>
            <MaterialIcon icon="account_circle" color="#fff"></MaterialIcon>
         </div>
      </div>
   );
}

export default Header;