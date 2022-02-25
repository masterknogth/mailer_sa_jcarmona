const dominios = [
    {
      entorno: 'Desarrollo',
      dominio: 'http://localhost:3000',
      api    : 'http://localhost:8000/api'
    },
    {
      entorno: 'Desarrollo',
      dominio: 'http://127.0.0.1:3000',
      api    : 'http://127.0.0.1:8000/api'
    },
    {
        entorno: 'Desarrollo',
        dominio: 'http://127.0.0.1:8080',
        api    : 'http://127.0.0.1:8000/api'
    },
    {
        entorno: 'Desarrollo',
        dominio: 'http://127.0.0.1:8080',
        api    : 'http://localhost:8000/api'
    }

  ];
  
  /**
   * Obtener el dominio del API principal
   *
   * @returns {string|*}
   */
  export function obtenerDominio() {
    const dominio_actual = document.location.origin;
  
    const dominio = dominios.find(d => d.dominio === dominio_actual);
  
    if (dominio) {
      return dominio.api;
    }
  
    return '';
  }