//  let root = 'admin'
//  let password = '120113'

//  const usario_creado = prompt('ingrese un nombre de usuario')
//  const contraseña_creada = prompt('ingrese una contraseña')



// if (usario_creado == root, contraseña_creada == password) {
//     admin()
// } else if (usario_creado == ' ', contraseña_creada == ' ') {
//     alert ('Usted no ingreso alguno de los datos')
// }else {
//     Usuario_Comun()
// }

function Usuario_Comun() {
    
    let TrajeSleccionado = parseInt(
      prompt(
        'Bien venid@ a Eva by Ara Battle \n Puede indicarnos que tipo de taje de baño quiere? \n (escriba el numero de la opcion) \n 1. surfismo \n 2. para competencias \n 3. biquini dos piezas \n 4. una sola pieza '
      )
    );
    if (TrajeSleccionado === 1) {
      alert("podras montar cualquier ola con este traje de baño surfista");
    } else if (TrajeSleccionado === 2) {
      alert("Ya veras, con este traje de baño ganaras todas las competencias");
    } else if (TrajeSleccionado === 3) {
      alert("Seguramente te llevaras todas las miradas een la playa (;");
    } else if (TrajeSleccionado === 4) {
      alert("Un traje de baño a la ultima moda en camino");
    } else{
      alert('por favor ingrese una opcion valida')
      Usuario_Comun()
    }
  }

function admin() {
    alert('Bienvenido de nuevo administrador')
 }