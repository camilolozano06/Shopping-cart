import React, { Component } from 'react';

export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    products: [
      {
        "_id": "1",
        "title": "Bauer Vapor HyperLite 2 Inline Hockey Skates - Senior",
        "src": "https://media.purehockey.com/images/q_auto,f_auto,fl_lossy,c_lpad,b_auto,w_1000,h_1000/products/61257/41/170071/bauer-vapor-hyperlite-2-inline-hockey-skates-senior",
        "description": "Los patines Bauer Hyperlite 2 son un modelo premium de patines en linea, por su ligereza, durabilidad y ajuste personalizado.",
        "content": "Perfect for running and gym workouts. Lightweight and breathable design.",
        "price": 949.99,
        "colors": ["blue", "black", "white"],
        "count": 10
      },
      {
        "_id": "2",
        "title": "Bauer Vapor 3X Pro RH Inline Hockey Skates - Senior",
        "src": "https://media.purehockey.com/images/q_auto,f_auto,fl_lossy,c_lpad,b_auto,w_1000,h_1000/products/46511/41/150760/bauer-vapor-3x-pro-rh-inline-hockey-skates-senior",
        "description": "Los patines Bauer Vapor 3X Pro son un modelo de alto rendimiento diseñado para patinadores en linea. Conocidos por su ajuste ceñido y ligero.",
        "content": "Designed for maximum support and cushioning on the court.",
        "price": 749.99,
        "colors": ["red", "black", "grey"],
        "count": 8
      },
      {
        "_id": "3",
        "title": "Bauer Vapor X4 Inline Hockey Skate - Senior",
        "src": "https://media.purehockey.com/images/q_auto,f_auto,fl_lossy,c_lpad,b_auto,w_1000,h_1000/products/61351/41/170255/bauer-vapor-x4-inline-hockey-skate-senior",
        "description": "Los patines Bauer Vapor X4 son una opcion de nivel medio-alto diseñada para patinadores en linea. Ofrece un buen equilibrio entre comodidad y rendimiento.",
        "content": "Comfortable and versatile, suitable for casual outings.",
        "price": 549.99,
        "colors": ["grey", "white", "navy"],
        "count": 15
      },
      {
        "_id": "4",
        "title": "Bauer Vapor X3 Inline Hockey Skate - Senior",
        "src": "https://media.purehockey.com/images/q_auto,f_auto,fl_lossy,c_lpad,b_auto,w_1000,h_1000/products/61352/41/170275/bauer-vapor-x3-inline-hockey-skate-senior",
        "description": "Los patines Bauer Vapor X3 son una opcion accesible para patinadores en linea que buscan un buen rendimiento a un precio mas bajo.",
        "content": "Crafted from high-quality leather for a polished look.",
        "price": 299.99,
        "colors": ["black"],
        "count": 5
      },
      {
        "_id": "5",
        "title": "Bauer RSX Inline Hockey Skates - Senior",
        "src": "https://media.purehockey.com/images/q_auto,f_auto,fl_lossy,c_lpad,b_auto,w_1000,h_1000/products/36680/41/123979/bauer-rsx-inline-hockey-skates-senior",
        "description": "Los patines Bauer RSX son la mejor opcion a nivel intermedio, diseñados para patianadores en linea que busca mejorar su rendimiento, ofrece mayor soporte y durabilidad que el modelo RS.",
        "content": "Ideal for long-distance running and intensive training.",
        "price": 299.99,
        "colors": ["blue"],
        "count": 12
      },
      {
        "_id": "6",
        "title": "Bauer RS Inline Hockey Skates - Senior",
        "src": "https://media.purehockey.com/images/q_auto,f_auto,fl_lossy,c_lpad,b_auto,w_1000,h_1000/products/36675/41/123999/bauer-rs-inline-hockey-skates-senior",
        "description": "Los patines Bauer RS inline son una opcion de nivel de entrada, diseñada para patinadores recreativos, ofrece comodidad y durabilidad.",
        "content": "Provides excellent traction and durability for rugged terrains.",
        "price": 169.99,
        "colors": ["brown", "black", "grey"],
        "count": 7
      }
    ]
  };

  render() {
    const { products } = this.state;

    return (
      <DataContext.Provider value={{ products }}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}


