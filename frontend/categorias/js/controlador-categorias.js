var productosAListaDeseos = [];
document.getElementById('ejemplo').style.display = "none";
document.getElementById('productos').style.display = "none";

/* CONSUMIMOS SERVICIOS */
const obtenerCategoria = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:2000/categorias/${id}`, {
      method: 'GET',
      redirect: 'follow'
    })
      .then(response => response.json())
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        console.log('error', error);
        reject(error);
      });
  });
};

const obtenerCategorias = () => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:2000/categorias", {
      method: 'GET',
      redirect: 'follow'
    })
      .then(response => response.json())
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        console.log('error', error);
        reject(error);
      });
  });
};

const obtenerProducto = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:2000/productos/${id}`, {
      method: 'GET',
      redirect: 'follow'
    })
      .then(response => response.json())
      .then(result => resolve(result))
      .catch(error => reject(error));
  });
}

const obtenerOrden = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:2000/ordenes/${id}`, {
      method: 'GET',
      redirect: 'follow'
    })
      .then(response => response.json())
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        console.log('error', error);
        reject(error);
      });
  });
};

const obtenerEmpresa = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:2000/empresas/${id}`, {
      method: 'GET',
      redirect: 'follow'
    })
      .then(response => response.json())
      .then(result => resolve(result))
      .catch(error => reject(error));
  });
};

const obtenerUsuario = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:2000/usuarios/${id}`, {
      method: 'GET',
      redirect: 'follow'
    })
      .then(response => response.json())
      .then(result => {
        usuario = result;
        resolve(result)
      })
      .catch(error => reject(error));
  });
};

const obtenerProductos = () => {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:2000/productos", {
      method: 'GET',
      redirect: 'follow'
    })
      .then(response => response.json())
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const obtenerProductosPorCategoria = (idCategoria) => {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:2000/productos/categoria/${idCategoria}`, {
      method: 'GET',
      redirect: 'follow'
    })
      .then(response => response.json())
      .then(result => resolve(result))
      .catch(error => reject(error));
  });
}

const obtenerProductosPorCategoriaEmpresa = (idCategoria, idEmpresa) => {
  return new Promise((resolve, reject) => {
    fetch(`http://localhost:2000/productos/${idCategoria}/${idEmpresa}`, {
      method: 'GET',
      redirect: 'follow'
    })
      .then(response => response.json())
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        reject(error);
      });
  });
}


/* RENDERIZACION */
const añadirOrden = (idProducto) => {
  const orden = {
    producto: idProducto,
    cantidad: document.getElementById("").value,
    subTotal: (document.getElementById("").value * document.getElementById("").value)
  }

  fetch("http://localhost:2000/ordenes/", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orden),
    redirect: 'follow'
  })
    .then(result => {
      if (!result.ok) {
        throw new Error('Network response was not ok');
      }
      return result.json();
    })
    .then(orden => {
      obtenerUsuario(usuario._id)
        .then(usr => {
          usr.ordenes.push(orden._id);
          usr.save();
        })
        .catch(e => console.log(e));
    })
    .catch(error => {
/*          document.getElementById("form-login").reset();
 */     });
};

const añadirPedido = (idProducto) => {
  let totalNeto;
  obtenerUsuario(usuario._id)
    .then(usr => {
      usr.ordenes.forEach(orden => {
        obtenerOrden(orden)
          .then(orden => {
            total += orden.subTotal;
          })
          .catch(e => console.log(e));

        const pedido = {
          ordenes: usr.ordenes,
          total: totalNeto
        };

        fetch("http://localhost:2000/pedidos/", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(pedido),
          redirect: 'follow'
        })
          .then(result => {
            if (!result.ok) {
              throw new Error('Network response was not ok');
            }
            return result.json();
          })
          .then(pedido => {
            window.alert("Su pedido ha sido procesado");
          })
          .catch(error => {
    /*         document.getElementById("form-login").reset();
     */    });
      })
    })
    .catch(e => console.log(e));
};

const añadirProductoDeseos = (idProducto) => {
  fetch(`http://localhost:2000/usuarios/${usuario._id}/lista-deseos`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(idProducto),
    redirect: 'follow'
  })
    .then(result => {
      if (!result.ok) {
        throw new Error('Network response was not ok');
      }
      return result.json();
    })
    .then(result => {
      console.log(result);
    })
    .catch(error => console.log(error));
};

const añadirProductoCarrito = (idProducto) => {
  const orden = {
    idProducto: idProducto,
    unidades: document.getElementById("inp-unidades").value
  }
  fetch(`http://localhost:2000/usuarios/${usuario._id}/carrito`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orden),
    redirect: 'follow'
  })
    .then(result => {
      if (!result.ok) {
        throw new Error('Network response was not ok');
      }
      return result.json();
    })
    .then(result => {
      console.log(result);
    })
    .catch(error => console.log(error));
};

const renderizarProductos = (idCategoria, idEmpresa) => {
  document.getElementById("articulos").innerHTML = "";
  document.getElementById("filtro-abajo").innerHTML = "";
  document.getElementById("filtro-abajo").innerHTML = "<div>Marcas</div>"
  let stackEmpresas = [];

  obtenerProductos()
    .then(productos => {
      productos.forEach(producto => {
        if (producto.categoria === idCategoria) {
          obtenerEmpresa(producto.empresa)
            .then(empresa => {
              if (!stackEmpresas.includes(empresa.nombre)) {
                stackEmpresas.push(empresa.nombre);
                document.getElementById("filtro-abajo").innerHTML += `<label><input type="checkbox" value="${producto.empresa}" name="" id="">${empresa.nombre}</label>`;
              }
            })
            .catch(e => console.log(e));
        }
      })
    })
    .catch(e => console.log(e));

  if (idEmpresa === undefined) {
    obtenerProductosPorCategoria(idCategoria)
      .then(productos => {
        productos.forEach(producto => {
          document.getElementById("articulos").innerHTML += `
        <div id="pa-vender">
        <img src="assets/img/productos/${producto.imagen}" alt="">
        <div id="der-pa-vender">
            <div id="info">
                <div id="titulo-info">${producto.nombre}</div>
                <div id="especificaciones">${producto.descripcion}</div>
            </div>
            <div id="precio-corazon">
                <div id="precio">${producto.precio}</div>
                <div>
                    <button id="comprar" data-bs-toggle="modal" data-bs-target="#comprar-producto" onclick="llenarModalProducto('${producto._id}')">
                        DETALLES
                    </button>
                    <i class="fa-solid fa-heart" onclick="añadirProductoCarrito('${producto._id}')"></i>
                </div>
            </div>
        </div>
        </div>`;
        })
      })
      .catch(e => console.log(e));
  } else {
    obtenerProductosPorCategoriaEmpresa(idCategoria, idEmpresa)
      .then(productos => {
        productos.forEach(producto => {
          document.getElementById("articulos").innerHTML += `
          <div id="pa-vender">
          <img src="assets/img/productos/${producto.imagen}" alt="">
          <div id="der-pa-vender">
              <div id="info">
                  <div id="titulo-info">${producto.nombre}</div>
                  <div id="especificaciones">${producto.descripcion}</div>
              </div>
              <div id="precio-corazon">
                  <div id="precio">${producto.precio}</div>
                  <div>
                      <button id="comprar" data-bs-toggle="modal" data-bs-target="#comprar-producto" onclick="llenarModalProducto('${producto._id}')">
                          DETALLES
                      </button>
                      <i class="fa-solid fa-heart" onclick="añadirProductoCarrito('${producto._id}')"></i>
                  </div>
              </div>
          </div>
          </div>`;
        })
      })
      .catch(e => console.log(e));
  }
}

const renderizarListaDeseos = () => {
  obtenerUsuario(usuario._id)
    .then(usr => {
      usr.miListaDeseos.forEach(producto => {
        document.getElementById("listaDeseos").innerHTML +=
          `<div class="card mb-3" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="assets/productos/${producto.imagen}" class="img-fluid rounded-start" alt="...">
            </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${producto.nombre}</h5>
                  <p class="card-text">${producto.descripcion}</p>
                  <p class="card-text"><small class="text-body-secondary">${producto.precio}</small></p>
              </div>
            </div>
          </div>
        </div>`;
      })
    })
    .catch(error => console.log(error));
};

const renderizarCarrito = () => {
  obtenerUsuario(usuario._id)
    .then(usr => {
      usr.miCarrito.forEach(producto => {
        document.getElementById("listaCarrito").innerHTML +=
          `<div class="card mb-3" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="assets/productos/${producto.imagen}" class="img-fluid rounded-start" alt="...">
            </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${producto.nombre}</h5>
                  <p class="card-text">${producto.descripcion}</p>
                  <p class="card-text"><small class="text-body-secondary">${producto.precio}</small></p>
              </div>
            </div>
          </div>
        </div>`;
      })
    })
    .catch(error => console.log(error));
};

const renderizarCategorias = () => {
  let categoriaContainer = document.querySelector(".categorias");

  obtenerCategorias()
    .then(categorias => {
      categorias.forEach(categoria => {
        categoriaContainer.innerHTML +=
          `<div class="caja" onclick="irCategoria('${categoria._id}')">
            ${categoria.nombre}
            <img src="assets/img/imagenes-categorias/${categoria.imagen}" alt="logo">
        </div>`;
      });

    })
    .catch(e => console.log(e));
};

const llenarModalProducto = (idProducto) => {
  let categoriaActual = JSON.parse(localStorage.getItem("categoriaActual"));

  obtenerProducto(idProducto)
    .then(producto => {
      obtenerEmpresa(producto.empresa)
        .then(empresa => {
          document.getElementById("detalle-nombre").innerHTML = producto.nombre;
          document.getElementById("detalle-precio").innerHTML = producto.precio;
          document.getElementById("detalle-empresa").innerHTML = empresa.nombre;
          document.getElementById("detalle-descripcion").innerHTML = producto.descripcion;
          document.getElementById("detalle-sub-categoria").innerHTML = producto.subCategorias;
          document.getElementById("btn-favoritos").setAttribute("onclick", `añadirProductoDeseos('${producto._id}')`);
          document.getElementById("comprar").setAttribute("onclick", `añadirProductoCarrito('${producto._id}')`);
        })
        .catch(error => console.log(error));
    })
    .catch(error => console.log(error));
};

function irCategoria(idCategoria) {
  renderizarProductos(idCategoria);
  obtenerCategoria(idCategoria)
    .then(categoria => {
      localStorage.setItem("categoriaActual", JSON.stringify(categoria))
    })
    .catch(error => console.log(error));

  document.getElementById('ejemplo').style.display = "block";
  document.getElementById('productos').style.display = "block";
  document.getElementById('productos').style.display = "flex";
  document.getElementById('contenido-1').style.display = "none";
};

function regresarCategorias() {
  document.getElementById('ejemplo').style.display = "none";
  document.getElementById('productos').style.display = "none";
  document.getElementById('contenido-1').style.display = "block";
};

const renderizarEntorno = () => {
  var usuario = JSON.parse(localStorage.getItem("usrActual"));
  document.getElementById("nombre-usuario").innerHTML = `${usuario.nombre} ${usuario.apellido}`;
  renderizarCategorias();
  obtenerUsuario(usuario._id);
};

renderizarEntorno();