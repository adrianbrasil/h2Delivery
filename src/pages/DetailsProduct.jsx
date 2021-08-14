import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import { ArrowBackIos, StarBorder, Star, StarHalf, NewReleases, IndeterminateCheckBoxOutlined, AddBoxOutlined, ShoppingCart } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import Ripples from 'react-ripples';

import "../styles/details-product.scss";

const GreenRadio = withStyles({
  root: {
    color: green['A400'], //#00e676
    '&$checked': {
      color: green['A400'], //#00e676
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export function DetailsProduct() {
  const history = useHistory();

  function navegateToMenu() {
    history.push("/menu/");
  }

  const [selectedValue, setSelectedValue] = useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="main">
      <div className="header-page">
        <button className="button-header" onClick={navegateToMenu}>
          <ArrowBackIos fontSize="small" />
        </button>
        <div>
          <h1>DETALHES DO PRODUTO</h1>
        </div>
      </div>
      <div className="main-details">
        <div className="cont-details">
          <div className="indicador-preco">
            <div className="icone-promocao">
              <NewReleases />
            </div>
          </div>
          <div className="imagem-produto">
            <img src="https://www.h2sistemas.net.br/h2Delivery/images/produtos/exemplos/lanche1.png" alt="X-Burguer" />
          </div>
          <div className="detalhes-produto">
            <h1>X - Burguer</h1>
            <p>Pão de hamburguer, hamburguer 160g, maionese, tomate, alface e queijo mussarela.</p>
            <div className="cont-stars">
              <span className="active-star"><Star fontSize="small" /></span>
              <span className="active-star"><Star fontSize="small" /></span>
              <span className="active-star"><Star fontSize="small" /></span>
              <span className="active-star"><StarHalf fontSize="small" /></span>
              <span className="active-star"><StarBorder fontSize="small" /></span>
            </div>
            <div className="valores">
              <span className="valor-de">de R$12,00</span>
              <br />
              <span className="valor-por">por R$10,00</span>
            </div>
          </div>
          <div className="more-info">
            <div className="info-row">
              <span>*Taxa única de entrega:</span>
              <span>R$3,00</span>
            </div>
            <div className="info-row">
              <span>*Tempo estimado:</span>
              <span>30 - 40 min</span>
            </div>
          </div>
          <div className="additionals">
            <div className="title-additionals">Escolha seu Hamburguer</div>
            <Ripples>
              <div className="row-additionals">
                <div className="desc-value-additionals">
                  <span>Hamburguer Tradicional</span>
                  <span>+ R$0,00</span>
                </div>
                <GreenRadio
                  checked={selectedValue === 'a'}
                  onChange={handleChange}
                  value="a"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'A' }}
                />
              </div>
            </Ripples>
            <Ripples>
              <div className="row-additionals">
                <div className="desc-value-additionals">
                  <span>Hamburguer Tradicional</span>
                  <span>+ R$0,00</span>
                </div>
                <GreenRadio
                  checked={selectedValue === 'b'}
                  onChange={handleChange}
                  value="b"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'B' }}
                />
              </div>
            </Ripples>
          </div>
          <div className="additionals">
            <div className="title-additionals">Opções Adicionais</div>
            <Ripples>
              <div className="row-additionals">
                <div className="desc-value-additionals">
                  <span>Hamburguer</span>
                  <span>+ R$8,00</span>
                </div>
                <Checkbox
                  checked={selectedValue === 'c'}
                  onChange={handleChange}
                  value="c"
                />
              </div>
            </Ripples>
            <Ripples>
              <div className="row-additionals">
                <div className="desc-value-additionals">
                  <span>Cheddar</span>
                  <span>+ R$3,00</span>
                </div>
                <Checkbox
                  checked={selectedValue === 'd'}
                  onChange={handleChange}
                  value="d"
                />
              </div>
            </Ripples>
            <Ripples>
              <div className="row-additionals">
                <div className="desc-value-additionals">
                  <span>Maionese da casa</span>
                  <span>+ R$2,00</span>
                </div>
                <Checkbox
                  checked={selectedValue === 'd'}
                  onChange={handleChange}
                  value="d"
                />
              </div>
            </Ripples>
          </div>
          <div className="observation">
            <h1>Algum observação?</h1>
            <input type="text" placeholder="Ex.: Sem mostarda, cebola e picles..." />
          </div>
        </div>
        <div className="cont-pagamento">
          <div className="valor-unitario">
            <span className="text-unitario">Valor unitário: </span>
            <span className="text-valor-unitario">R$10,00</span>
          </div>
          <div className="quantidade">
            <span className="btn-mais-menos"><IndeterminateCheckBoxOutlined /></span>
            <span className="numero-quantidade">1</span>
            <span className="btn-mais-menos"><AddBoxOutlined /></span>
          </div>
          <div className="total">
            <div className="text-total">TOTAL</div>
            <div className="cifrao-valor">
              <span className="text-cifrao-total">R$</span>
              <span className="text-valor-total">10,00</span>
            </div>
          </div>
          <div className="btn-cart">
            <Button
              variant="contained"
              startIcon={<ShoppingCart />}
            >
              Adicionar ao carrinho
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}